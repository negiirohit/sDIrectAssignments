var mongoose = require('mongoose');
var sessions = mongoose.model('sessions');
var categories = mongoose.model('categories');
var templates = mongoose.model('email-templates');
var users = mongoose.model('users');
var settings = mongoose.model('settings');
var wallets = mongoose.model('wallets');
var socketObj = require('../socket/socket.js');
var tempSession = mongoose.model('temp-session-call-charges');
var constant = require('../../config/constants');
var moment = require('moment');
var momentz = require('moment-timezone');
var ObjectId = require('mongoose').Types.ObjectId;
var logCtrl = require('../log/log.controller');
var handlebars = require('handlebars');
var mailer = require('../../mailer/mailer');
var trigger = require('../socket/socket');
var async = require('async');
const wilson = require('wilson-rate')
var url = require('url');

var create = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var session_data = req.body ? req.body : null;
    if (user_id && session_data) {
        session_data.from = user_id;
        session_data.seller_id = session_data.to;
        session_data.searcher_id = user_id;
        var new_sessions = new sessions(session_data);
        new_sessions.save(function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_create_session, error: err })
            }
            else {

                res.json({ status: 200, msg: constant.message.success_create_session });

                if (session_data.session_type && session_data.session_type == 1) {
                    sessions.aggregate([
                        { $match: { '_id': ObjectId(result._id) } },
                        { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
                        {
                            $lookup: {
                                from: "skills", // collection name in db
                                localField: "skill_id",
                                foreignField: "_id",
                                as: "skillsData"
                            }
                        }
                        ,
                        { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
                        { $unwind: { "path": "$skillsData.category_id", "preserveNullAndEmptyArrays": true } },
                        {
                            $lookup: {
                                from: "categories", // collection name in db
                                localField: "skillsData.category_id",
                                foreignField: "_id",
                                as: "categories"
                            }
                        },
                        {
                            $group: {
                                "_id": "$_id",
                                "sessionData": { "$first": "$$ROOT" },
                                "categoryInfo": { "$push": "$categories" }
                            }
                        }

                    ]).exec(function (err, data) {
                        if (err) {
                            return res.json({ status: 500, msg: constant.message.error_session_details, error: er })
                        }
                        else {
                            var options = [
                                {
                                    path: "sessionData.to",
                                    select: 'first_name image email currentlyActive socket_id security'
                                },
                                {
                                    path: "sessionData.from",
                                    select: 'first_name image email currentlyActive socket_id security'
                                },
                                {
                                    path: "sessionData.seller_id",
                                    select: 'first_name image email currency_code currency_symbol gender age country language security'
                                },
                                {
                                    path: "sessionData.searcher_id",
                                    select: 'first_name image email currency_code currency_symbol gender age country language security'
                                }
                            ];
                            users.populate(data, options, function (er, finalData) {
                                if (er) {
                                    var resData = { status: 500, error: er };
                                    socketObj.notifyForInstantCall(resData);

                                } else {
                                    var resData = { status: 200, data: finalData[0] };
                                    socketObj.notifyForInstantCall(resData);

                                }
                            });

                        }

                    })



                }

                logCtrl.create(user_id, { en: "Session request sent ", de: "Session Anfrage geschickt " }, 'Session', result._id, true, null, user_id, '/profile?active=session');
                logCtrl.create(session_data.to, { en: "You have received a session request", de: "Du hast eine Session Anfrage erhalten" }, 'Session', result._id, true, null, user_id, '/profile?active=session');

                sessions.findOne({ _id: result._id })
                    .populate('to', 'first_name email site_language security')
                    .populate('from', 'first_name email site_language security')
                    .populate('skill_id', 'title')
                    .exec(function (err, data) {
                        if (err) {
                            console.log('Error ==> ', err);
                        }
                        else {


                            //send request email
                            templates.findOne({ 'findBy': "sessionRequest", 'is_deleted': false }, function (err, getTemplate) {
                                var selectedContent = "";
                                var selectedSubject = "";
                                if (data.from.site_language === "de") {
                                    selectedSubject = getTemplate.subject_de;
                                    selectedContent = getTemplate.content_de;
                                } else {
                                    selectedSubject = getTemplate.subject_en;
                                    selectedContent = getTemplate.content_en;
                                }
                                var userData_from = {
                                    username: data.from.first_name,
                                    skill_title: data.skill_id.title,
                                    session_time: moment(data.start_time).format("YYYY-MM-DD HH:mm"),
                                };
                                const template_from = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                                var message_from = template_from(userData_from);
                                var mailerin = new mailer();
                                mailerin.sendMail(data.from.email, message_from, selectedSubject);
                            });

                            if (data.to.security.session_recieved) {
                                //send incoming email
                                templates.findOne({ 'findBy': "incomingRequest", 'is_deleted': false }, function (err, getTemplate) {
                                    var selectedContent = "";
                                    var selectedSubject = "";
                                    if (data.to.site_language == "de") {
                                        selectedSubject = getTemplate.subject_de;
                                        selectedContent = getTemplate.content_de;
                                    } else {
                                        selectedSubject = getTemplate.subject_en;
                                        selectedContent = getTemplate.content_en;
                                    }
                                    var adr = constant.url.WEB + "/profile?active=session";

                                    var userData_to = {
                                        username: data.to.first_name,
                                        skill_title: data.skill_id.title,
                                        reqLink: adr,
                                        session_time: moment(data.start_time).format("YYYY-MM-DD HH:mm"),
                                    };
                                    const template_to = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                                    var message_to = template_to(userData_to);
                                    var mailerin = new mailer();
                                    mailerin.sendMail(data.to.email, message_to, selectedSubject);
                                });
                            }


                        }
                    });
            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var list = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;

    if (user_id) {
        sessions.aggregate([
            { $match: { from: ObjectId(user_id), is_deleted: false, session_type: 0, $or: [{ status: 0 }, { status: 1 }] } },
            {
                $lookup: {
                    from: "skills", // collection name in db
                    localField: "skill_id",
                    foreignField: "_id",
                    as: "skillsData"
                }
            },
            { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "users", // collection name in db
                    localField: "skillsData.user_id",
                    foreignField: "_id",
                    as: "userinfo"
                }
            },
            { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },

            {
                "$group": {
                    "_id": "$_id",
                    "skillsData": { "$first": "$skillsData" },
                    "sessionData": { "$first": "$$ROOT" },
                }
            },
            {
                "$group": {
                    "_id": "$_id",
                    "sessionData": { "$first": "$sessionData" },
                    "star1Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 1] }, 1, 0] } },
                    "star2Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 2] }, 1, 0] } },
                    "star3Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 3] }, 1, 0] } },
                    "star4Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 4] }, 1, 0] } },
                    "star5Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 5] }, 1, 0] } },
                    "reviewCount": { "$sum": { "$cond": [{ "$eq": ["$sessionData.is_rated", true] }, 1, 0] } },
                    "totalRatings": { $sum: "$sessionData.rating" }
                }
            },
            { $sort: { 'sessionData.start_time': 1 } }
        ]).exec(function (err, sessionRequests) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_mylist_session, error: err })
            } else {

                var allSessionRequest = [];
                async.each(sessionRequests, function (sessionItem, callback) {

                    sessions.aggregate([
                        { $match: { skill_id: ObjectId(sessionItem.sessionData.skill_id), is_deleted: false, is_rated: true } },
                        {
                            "$group": {
                                "_id": "$skill_id",
                                "star1Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 1] }, 1, 0] } },
                                "star2Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 2] }, 1, 0] } },
                                "star3Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 3] }, 1, 0] } },
                                "star4Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 4] }, 1, 0] } },
                                "star5Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 5] }, 1, 0] } },
                                "count": { $sum: 1 }
                            }
                        }
                    ]).exec(function (err, rows) {
                        var wilsonRate = 0;
                        if (rows.length > 0) {
                            // var stars = wilson.stars(rows[0].star5Count, rows[0].star4Count, rows[0].star3Count, rows[0].star2Count, rows[0].star1Count);
                            // if (stars.upvotes == 0 && stars.downvotes == 0) {
                            //     wilsonRate = 0;
                            // } else {
                            //     wilsonRate = wilson.wilson(stars.upvotes, stars.downvotes, 1.96);
                            // }
                            // wilsonRate = getRateStart(wilsonRate * 100);
                            let totalRatings = rows[0].star5Count*5 + rows[0].star4Count*4 + rows[0].star3Count*3 + rows[0].star2Count*2 + rows[0].star1Count
                            let averageRating
                            if(totalRatings > 0){
                                averageRating = (totalRatings/(rows[0].star5Count + rows[0].star4Count + rows[0].star3Count + rows[0].star2Count + rows[0].star1Count));
                              }else{
                                averageRating = 0
                              }
                            var rate = { skillRating: averageRating, ratingCount: rows[0].count };
                            let item = Object.assign(sessionItem, rate);
                            allSessionRequest.push(item);
                            callback(null);
                        } else {
                            wilsonRate = 0;
                            var rate = { skillRating: wilsonRate, ratingCount: 0 };
                            let item = Object.assign(sessionItem, rate);
                            allSessionRequest.push(item);
                            callback(null);
                        }
                    });

                }, function (err) {
                    var options = [
                        {
                            path: "sessionData.to", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.from", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.searcher_id", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.seller_id", select: 'first_name email currentlyActive site_language security'
                        }
                    ];
                    users.populate(allSessionRequest, options, function (er, finalData) {
                        if (er) {
                            return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                        } else {
                            var options = [{ path: "sessionData.skillsData.category_id", select: 'name' }];
                            categories.populate(finalData, options, function (erc, finalAllData) {
                                if (erc) {
                                    return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                                } else {
                                    return res.json({ status: 200, msg: constant.message.success_mylist_session, data: finalAllData })
                                }
                            });
                        }
                    });
                });






            }
        });
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

function getRateStart(val) {
    var startVal = 0;
    val = Math.floor(val);
    if (val == 0) {
        return 0;
    } else if (val < 20) {
        return 1;
    } else if (val < 40) {
        return 2;
    } else if (val < 60) {
        return 3;
    } if (val < 80) {
        return 4;
    } if (val < 100) {
        return 5;
    } else {
        return 0;
    }
}

var getSessionDetails = function (req, res) {

    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var session_id = req.body.session_id ? req.body.session_id : null;

    if (user_id && session_id) {
        sessions.aggregate([
            { $match: { '_id': ObjectId(session_id) } },
            { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "skills", // collection name in db
                    localField: "skill_id",
                    foreignField: "_id",
                    as: "skillsData"
                }
            }
            ,
            { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "users", // collection name in db
                    localField: "skillsData.user_id",
                    foreignField: "_id",
                    as: "userinfo"
                }

            },
            { $unwind: { "path": "$skillsData.category_id", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "categories", // collection name in db
                    localField: "skillsData.category_id",
                    foreignField: "_id",
                    as: "categories"
                }
            },
            {
                $group: {
                    "_id": "$_id",
                    "userinfo": { "$first": "$userinfo" },
                    "sessionData": { "$first": "$$ROOT" },
                    "categoryInfo": { "$push": "$categories" }
                }
            }

        ]).exec(function (err, data) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_details, error: er })
            }
            else {
                var options = [
                    {
                        path: "sessionData.to",
                        select: 'first_name image email currentlyActive currency_code site_language'
                    },
                    {
                        path: "sessionData.from",
                        select: 'first_name image email currentlyActive currency_code site_language'
                    },
                    {
                        path: "sessionData.seller_id",
                        select: 'first_name image email currency_code site_language security'
                    },
                    {
                        path: "sessionData.searcher_id",
                        select: 'first_name image email currency_code site_language security'
                    }
                ];
                users.populate(data, options, function (er, finalData) {
                    if (er) {
                        return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                    } else {
                        return res.json({ status: 200, msg: constant.message.success_session_details, data: finalData })
                    }
                });

            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var incomingRequestList = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    if (user_id) {
        sessions.aggregate([
            { $match: { to: ObjectId(user_id), is_deleted: false, session_type: 0, $or: [{ status: 0 }, { status: 1 }] } },
            {
                $lookup: {
                    from: "skills", // collection name in db
                    localField: "skill_id",
                    foreignField: "_id",
                    as: "skillsData"
                }
            },
            { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "users", // collection name in db
                    localField: "skillsData.user_id",
                    foreignField: "_id",
                    as: "userinfo"
                }
            },
            { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },

            {
                "$group": {
                    "_id": "$_id",
                    "skillsData": { "$first": "$skillsData" },
                    "sessionData": { "$first": "$$ROOT" },
                }
            },
            {
                "$group": {
                    "_id": "$_id",
                    "sessionData": { "$first": "$sessionData" },
                    "star1Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 1] }, 1, 0] } },
                    "star2Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 2] }, 1, 0] } },
                    "star3Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 3] }, 1, 0] } },
                    "star4Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 4] }, 1, 0] } },
                    "star5Count": { "$sum": { "$cond": [{ "$eq": ["$sessionData.rating", 5] }, 1, 0] } },
                    "reviewCount": { "$sum": { "$cond": [{ "$eq": ["$sessionData.is_rated", true] }, 1, 0] } },
                    "totalRatings": { $sum: "$sessionData.rating" }
                }
            },
            { $sort: { 'sessionData.start_time': 1 } }
        ]).exec(function (err, sessionRequests) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_mylist_session, error: err })
            } else {


                var allSessionRequest = [];
                async.each(sessionRequests, function (sessionItem, callback) {

                    sessions.aggregate([
                        { $match: { skill_id: ObjectId(sessionItem.sessionData.skill_id), is_deleted: false, is_rated: true } },
                        {
                            "$group": {
                                "_id": "$skill_id",
                                "star1Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 1] }, 1, 0] } },
                                "star2Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 2] }, 1, 0] } },
                                "star3Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 3] }, 1, 0] } },
                                "star4Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 4] }, 1, 0] } },
                                "star5Count": { "$sum": { "$cond": [{ "$eq": ["$rating", 5] }, 1, 0] } },
                                "count": { $sum: 1 }
                            }
                        }
                    ]).exec(function (err, rows) {
                        var wilsonRate = 0;
                        var count = 0;
                        if (rows.length > 0) {
                            // var stars = wilson.stars(rows[0].star5Count, rows[0].star4Count, rows[0].star3Count, rows[0].star2Count, rows[0].star1Count);
                            // if (stars.upvotes == 0 && stars.downvotes == 0) {
                            //     wilsonRate = 0;
                            // } else {
                            //     wilsonRate = wilson.wilson(stars.upvotes, stars.downvotes, 1.96);
                            // }
                            // wilsonRate = getRateStart(wilsonRate * 100);
                            let totalRatings = rows[0].star5Count*5 + rows[0].star4Count*4 + rows[0].star3Count*3 + rows[0].star2Count*2 + rows[0].star1Count
                            let averageRating
                            if(totalRatings > 0){
                                averageRating = (totalRatings/(rows[0].star5Count + rows[0].star4Count + rows[0].star3Count + rows[0].star2Count + rows[0].star1Count));
                              }else{
                                averageRating = 0
                              }
                            
                            var rate = { skillRating: averageRating, ratingCount: rows[0].count };
                            let item = Object.assign(sessionItem, rate);
                            allSessionRequest.push(item);
                            callback(null);
                        } else {
                            wilsonRate = 0;
                            count = 0;
                            var rate = { skillRating: wilsonRate, ratingCount: count };
                            let item = Object.assign(sessionItem, rate);
                            allSessionRequest.push(item);
                            callback(null);
                        }
                    });

                }, function (err) {
                    var options = [
                        {
                            path: "sessionData.to", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.from", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.searcher_id", select: 'first_name email currentlyActive site_language security'
                        },
                        {
                            path: "sessionData.seller_id", select: 'first_name email currentlyActive site_language security'
                        }
                    ];
                    users.populate(allSessionRequest, options, function (er, finalData) {
                        if (er) {
                            return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                        } else {
                            var options = [{ path: "sessionData.skillsData.category_id", select: 'name' }];
                            categories.populate(finalData, options, function (erc, finalAllData) {
                                if (erc) {
                                    return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                                } else {
                                    return res.json({ status: 200, msg: constant.message.success_mylist_session, data: finalAllData })
                                }
                            });
                        }
                    });
                });


            }
        });
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}


var scheduledSessionList = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;

    if (req.body.date && req.body.date !== "") {
        var start_date = new Date(moment(req.body.date).format("YYYY-MM-DD"));
        start_date.setHours(0, 0, 0, 0);
        var end_date = new Date(req.body.date);
        end_date.setHours(23, 59, 59, 999);

        var conditions = {
            start_time: { $gte: start_date, $lte: end_date },
            status: 2,
            is_deleted: false,
            is_rated: false,
            session_type: 0,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }

    } else {
        var conditions = {
            status: 2,
            is_rated: false,
            is_deleted: false, session_type: 0,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }
    }


    if (user_id) {
        sessions.aggregate([
            {
                $match: conditions
            },
            { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "skills", // collection name in db
                    localField: "skill_id",
                    foreignField: "_id",
                    as: "skillsData"
                }
            },

            { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "users", // collection name in db
                    localField: "skillsData.user_id",
                    foreignField: "_id",
                    as: "userinfo"
                }
            },
            { $unwind: { "path": "$skillsData.category_id", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "categories", // collection name in db
                    localField: "skillsData.category_id",
                    foreignField: "_id",
                    as: "categories"
                }
            },
            {
                "$group": {
                    "_id": "$_id",
                    "userinfo": { "$first": "$userinfo" },
                    "sessionData": { "$first": "$$ROOT" },
                    "categoryInfo": { "$push": "$categories" }
                }
            },
            { $sort: { 'sessionData.start_time': 1 } }
        ]).exec(function (err, rows) {

            if (err) {
                return res.json({ status: 500, msg: constant.message.error_mylist_session, error: err })
            }
            else {

                var options = [
                    {
                        path: "sessionData.to", select: 'first_name email currentlyActive site_language security'
                    },
                    {
                        path: "sessionData.from", select: 'first_name email currentlyActive site_language security'
                    },
                    {
                        path: "sessionData.searcher_id", select: 'first_name email currentlyActive site_language security'
                    },
                    {
                        path: "sessionData.seller_id", select: 'first_name email currentlyActive site_language security'
                    }
                ];

                users.populate(rows, options, function (er, finalData) {
                    if (er) {
                        return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })
                    } else {
                        return res.json({ status: 200, msg: constant.message.success_mylist_session, data: finalData })
                    }
                });



            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }
}

var acceptRequest = function (req, res) {

    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var skill_id = req.body.skill_id ? req.body.skill_id : null;
    var session_id = req.body.session_id ? req.body.session_id : null;
    var from = req.body.from ? req.body.from : null;
    var to = req.body.to ? req.body.to : null;

    if (user_id && skill_id && session_id && from && to) {
        sessions.update({ _id: session_id }, { $set: { status: 2 } }, function (err, result) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_accept_session })
            }
            else {
                res.json({ status: 200, msg: constant.message.success_accept_session });

                logCtrl.create(to, { en: "Session request accepted ", de: "Session Anfrage akzeptiert " }, 'Session', session_id, true, null, user_id, '/profile?active=session&tab=call-scheduled');
                logCtrl.create(from, { en: "Session request accepted ", de: "Session Anfrage akzeptiert " }, 'Session', session_id, true, null, user_id, '/profile?active=session&tab=call-scheduled');


                //send accept request email to searcher

                var searcherName = from.first_name;
                var searcherEmail = from.email;
                if (from.security && from.security.session_accepted) {
                    templates.findOne({ 'findBy': "acceptSessionRequest", 'is_deleted': false }, function (err, getTemplate) {
                        var selectedContent = "";
                        var selectedSubject = "";
                        if (from.site_language == "de") {
                            selectedSubject = getTemplate.subject_de;
                            selectedContent = getTemplate.content_de;
                        } else {
                            selectedSubject = getTemplate.subject_en;
                            selectedContent = getTemplate.content_en;
                        }
                        var userData = {
                            username: searcherName,
                            skill_title: req.body.sessionData.skillsData.title,
                            viewLink: constant.url.WEB + "/profile?active=session&tab=call-scheduled",
                            session_time: moment(req.body.sessionData.start_time).format("YYYY-MM-DD HH:mm"),
                        };
                        const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                        var message = template(userData);
                        var mailerin = new mailer();
                        mailerin.sendMail(searcherEmail, message, selectedSubject);
                    });
                }

            }

        });
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var cancelSession = function (req, res) {

    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var data = req.body.data ? req.body.data : null;

    if (user_id && data.session_id && data.to && data.from && data.notes) {
        sessions.update({ _id: data.session_id }, { $set: { status: 3, cancelNotes: data.notes } }, function (err, result) {

            if (err) {
                return res.json({ status: 500, msg: constant.message.error_cancel_session });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_cancel_session });

                logCtrl.create(data.to, { en: "Session request declined ", de: "Session abgebrochen " }, 'Session', data.session_id, true, data.notes, user_id, '/view-profile/' + user_id);
                logCtrl.create(data.from, { en: "Session request declined ", de: "Session abgebrochen " }, 'Session', data.session_id, true, data.notes, user_id, '/view-profile/' + user_id);

                users.findOne({ _id: data.to }, function (err, user) {
                    if (!err) {
                        //send cancel request email
                        if (user.security.cancelled_session) {
                            templates.findOne({ 'findBy': "cancelSession", 'is_deleted': false }, function (err, getTemplate) {
                                var selectedContent = "";
                                var selectedSubject = "";
                                if (user.site_language == "de") {
                                    selectedSubject = getTemplate.subject_de;
                                    selectedContent = getTemplate.content_de;
                                } else {
                                    selectedSubject = getTemplate.subject_en;
                                    selectedContent = getTemplate.content_en;
                                }
                                var userData = {
                                    username: user.first_name,
                                    skill_title: data.title,
                                    reason: data.notes,
                                    viewLink: constant.url.WEB + "/skill-view/" + data.skill_id,
                                    session_time: moment(data.start_time).format("YYYY-MM-DD HH:mm"),
                                };
                                const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                                var message = template(userData);
                                var mailerin = new mailer();
                                mailerin.sendMail(user.email, message, selectedSubject);
                            });
                        }

                    }
                })

                users.findOne({ _id: data.from }, function (err, user) {
                    if (!err) {
                        if (user.security.cancelled_session) {
                            //send cancel request email
                            templates.findOne({ 'findBy': "cancelSession", 'is_deleted': false }, function (err, getTemplate) {
                                var selectedContent = "";
                                var selectedSubject = "";
                                if (user.site_language == "de") {
                                    selectedSubject = getTemplate.subject_de;
                                    selectedContent = getTemplate.content_de;
                                } else {
                                    selectedSubject = getTemplate.subject_en;
                                    selectedContent = getTemplate.content_en;
                                }
                                var userData = {
                                    username: user.first_name,
                                    skill_title: data.title,
                                    reason: data.notes,
                                    viewLink: constant.url.WEB + "/skill-view/" + data.skill_id,
                                    session_time: moment(data.start_time).format("YYYY-MM-DD HH:mm"),
                                };
                                const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                                var message = template(userData);
                                var mailerin = new mailer();
                                mailerin.sendMail(user.email, message, selectedSubject);
                            });
                        }

                    }
                })
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }


}


var getSlotByDate = function (req, res) {
    var user_id = req.body.user_id ? req.body.user_id : null;

    var start_date = new Date(moment(req.body.start_date).format("YYYY-MM-DD"));
    start_date.setHours(0, 0, 0, 0);
    var end_date = new Date(req.body.start_date);
    end_date.setHours(23, 59, 59, 999);

    if (user_id && start_date && end_date) {
        var conditions = {
            to: user_id,
            is_deleted: false,
            status: 2,
            session_type: 0,
            start_time: { $gte: start_date, $lt: end_date }
        }

        sessions.find(conditions, ['to', 'start_time', 'end_time'], function (err, slots) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_session_slots, error: err });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_session_slots, data: slots });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }


}


var getBookedSlotOfMonth = function (req, res) {

    var user_id = req.body.user_id ? req.body.user_id : null;
    var from = req.body.from ? req.body.from : null;
    var to = req.body.to ? req.body.to : null;

    var start_date = new Date(from);
    var end_date = new Date(to);

    if (user_id && start_date && end_date) {
        var conditions = {
            to: user_id,
            is_deleted: false,
            start_time: { $gte: start_date, $lte: end_date }
        }

        sessions.find(conditions, ['to', 'start_time', 'end_time'], function (err, slots) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_session_slots, error: err });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_session_slots, data: slots });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}


var getScheduledSlotOfMonth = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var from = req.body.from ? req.body.from : null;
    var to = req.body.to ? req.body.to : null;
    var start_date = new Date(from);
    var end_date = new Date(to);

    if (user_id && start_date && end_date) {
        var conditions = {
            is_deleted: false,
            start_time: { $gte: start_date, $lte: end_date },
            status: 2,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }

        sessions.find(conditions, ['to', 'start_time', 'end_time'], function (err, slots) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_session_slots, error: err });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_session_slots, data: slots });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}


var update = function (req, res) {
    var id = req.params.id ? req.params.id : null;
    var data = req.body ? req.body : null;

    if (id && data) {
        sessions.update({ _id: id }, { $set: data }, function (err, result) {

            if (err) {
                return res.json({ status: 500, msg: constant.message.error_update_category })
            }
            else {
                return res.json({ status: 200, msg: constant.message.success_update_category })
            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }
}

var deleteSession = function (req, res) {
    var id = req.params.id ? req.params.id : null;
    console.log(id);
    if (id) {
        sessions.update({ _id: id }, { $set: { is_deleted: true } }, function (err, result) {
            console.log(result);
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_delete_category })
            }
            else {
                return res.json({ status: 200, msg: constant.message.success_delete_category })
            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }
}

var rescheduleSession = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var session_data = req.body.session_data ? req.body.session_data : null;
    var session_id = req.body.session_id ? req.body.session_id : null;

    if (user_id && session_id && session_data) {
        session_data.status = 1;
        sessions.update({ _id: session_id }, { $set: session_data }, function (err, result) {

            if (err) {
                return res.json({ status: 500, msg: constant.message.error_reschedule_session });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_reschedule_session });

                logCtrl.create(session_data.from, { en: "Session request rescheduled ", de: "Session Anfrage verschoben " }, 'Session', session_id, true, null, user_id, '/profile?active=session');
                logCtrl.create(session_data.to, { en: "Session request rescheduled ", de: "Session Anfrage verschoben " }, 'Session', session_id, true, null, user_id, '/profile?active=session');


                //send reschedule request email to user

                var username = session_data.to_data.first_name;
                var userEmail = session_data.to_data.email;

                if (session_data.to_data.security.session_recheduled) {
                    templates.findOne({ 'findBy': "rescheduleSessionRequest", 'is_deleted': false }, function (err, getTemplate) {
                        var selectedContent = "";
                        var selectedSubject = "";

                        if (session_data.to_data.site_language == "de") {
                            selectedSubject = getTemplate.subject_de;
                            selectedContent = getTemplate.content_de;
                        } else {
                            selectedSubject = getTemplate.subject_en;
                            selectedContent = getTemplate.content_en;
                        }

                        var adr = constant.url.WEB + "/profile?active=session";

                        var userData = {
                            username: username,
                            skill_title: session_data.skill_title,
                            viewLink: adr,
                            session_time: moment(session_data.start_time).format("YYYY-MM-DD HH:mm"),
                        };
                        const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                        var message = template(userData);
                        var mailerin = new mailer();
                        mailerin.sendMail(userEmail, message, selectedSubject);
                    });
                }


            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var historySessionList = function (req, res) {

    console.log("Req", req.body);

    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    if (req.body.date && req.body.date !== "") {
        console.log("req.body.date", req.body.date);

        var start_date = moment(req.body.date).startOf('day');
        var end_date = moment(req.body.date).endOf('day');
        // var start_date = new Date(req.body.date);

        // //console.log("start_date",start_date);


        // start_date.setHours(0, 0, 0, 0);
        // var end_date = new Date(req.body.date);
        // end_date.setHours(23, 59, 59, 999);


        console.log("SD", start_date);
        console.log("ED", end_date);


        console.log("SSSSSTATATTA_date", moment(start_date).format("YYYY-MM_DD HH:mm:ss"));
        console.log("ENDDDDDDD_date", moment(end_date).format("YYYY-MM_DD HH:mm:ss"));


        var tmpSessionConditions = {
            is_deleted: false,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }
        var sessionConditions = {
            "sessionData.start_time": { $gte: start_date.toDate(), $lte: end_date.toDate() }
        }
    } else {
        var tmpSessionConditions = {
            is_deleted: false,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }
        var sessionConditions = {};
    }
    if (user_id) {
        tempSession.aggregate([
            { $match: tmpSessionConditions },
            { $unwind: { "path": "$tmpSessionData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "sessions", // collection name in db
                    localField: "session_id",
                    foreignField: "_id",
                    as: "sessionData"
                }
            },
            { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
            { $match: sessionConditions },
            {
                $lookup: {
                    from: "skills", // collection name in db
                    localField: "sessionData.skill_id",
                    foreignField: "_id",
                    as: "skillsData"
                }
            },
            { $unwind: { "path": "$skillsData", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "commisions", // collection name in db
                    localField: "_id",
                    foreignField: "tmp_session_id",
                    as: "commisionInfo"
                }
            },
            { $unwind: { "path": "$commisionInfo", "preserveNullAndEmptyArrays": true } },
            {
                $lookup: {
                    from: "users", // collection name in db
                    localField: "skillsData.user_id",
                    foreignField: "_id",
                    as: "userinfo"
                }
            },

            {
                "$group": {
                    "_id": "$_id",
                    "sessionData": { "$first": "$sessionData" },
                    "tmpSessionData": { "$first": "$$ROOT" }
                }
            },
            { $sort: { 'sessionData.updated_at': -1 } }
        ]).exec(function (err, rows) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_mylist_session, error: err })
            }
            else {
                var options = [
                    {
                        path: "sessionData.seller_id",
                        select: 'first_name image email currentlyActive socket_id security'
                    },
                    {
                        path: "sessionData.searcher_id",
                        select: 'first_name image email currentlyActive socket_id security'
                    }
                ];
                users.populate(rows, options, function (er, finalData) {
                    if (er) {
                        return res.json({ status: 500, msg: constant.message.error_mylist_session, error: er })

                    } else {
                        return res.json({ status: 200, msg: constant.message.success_mylist_session, data: finalData });
                    }
                });

            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }
}

var getHistorySlotOfMonth = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var from = req.body.from ? req.body.from : null;
    var to = req.body.to ? req.body.to : null;
    var start_date = new Date(from);
    var end_date = new Date(to);

    if (user_id && start_date && end_date) {
        var conditions = {
            is_deleted: false,
            start_time: { $gte: start_date, $lte: end_date },
            status: 4,
            $or: [{ seller_id: ObjectId(user_id) }, { searcher_id: ObjectId(user_id) }]
        }

        sessions.find(conditions, ['to', 'start_time', 'end_time'], function (err, slots) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_session_slots, error: err });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_session_slots, data: slots });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var rateSession = function (req, res) {
    var user_id = req.body.user_params._id ? req.body.user_params._id : null;
    var email = req.body.user_params.email ? req.body.user_params.email : null;
    var data = req.body.data ? req.body.data : null;

    data.feedbackDate = new Date();
    if (email && user_id && data.session_id && data.rating) {
        sessions.update({ _id: data.session_id }, { $set: data }, function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_rate_session });
            }
            else {

                users.findOne({ email: data.email, is_deleted: false }, function (err, userdata) {
                    if (err) {
                        console.log('error while getting user details : ', err);
                    }
                    else {

                        if (userdata.security.rating_feedback) {
                            //send request email
                            templates.findOne({ 'findBy': "feedbackAcknowledge", 'is_deleted': false }, function (err, getTemplate) {
                                var selectedContent = "";
                                var selectedSubject = "";
                                if (req.headers['currentlang'] == "de") {
                                    selectedSubject = getTemplate.subject_de;
                                    selectedContent = getTemplate.content_de;
                                } else {
                                    selectedSubject = getTemplate.subject_en;
                                    selectedContent = getTemplate.content_en;
                                }
                                var rateInfo = {
                                    username: data.name,
                                    star: data.rating,
                                    notes: data.rateNotes,
                                    skill_title: data.title,
                                    searcher: data.userName
                                };
                                const template_from = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                                var message_from = template_from(rateInfo);
                                var mailerin = new mailer();
                                mailerin.sendMail(data.email, message_from, selectedSubject);
                            });
                        }

                    }
                })

                res.json({ status: 200, msg: constant.message.success_rate_session });

            }
        });
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }
}

var getSessionList = function (req, res) {
    var data = req.body ? req.body : {};
    var offset = parseInt(data.offset);
    var rows = parseInt(data.rows);
    var skipValue = 10 * offset;
    var fields = {};
    var conditions = {
        is_deleted: false
    }
    var otherParams = {
        $skip: skipValue,
        $limit: rows,
    };

    var queryArr = [{ $match: { is_deleted: false } },
    {
        $lookup: {
            from: "sessions", // collection name in db
            localField: "session_id",
            foreignField: "_id",
            as: "sessionData"
        }
    },
    { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "skills", // collection name in db
            localField: "sessionData.skill_id",
            foreignField: "_id",
            as: "skill_id"
        }
    },
    { $unwind: { "path": "$skill_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "seller_id",
            foreignField: "_id",
            as: "seller_id"
        }
    },
    { $unwind: { "path": "$seller_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "searcher_id",
            foreignField: "_id",
            as: "searcher_id"
        }
    },
    { $unwind: { "path": "$searcher_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "commisions", // collection name in db
            localField: "_id",
            foreignField: "tmp_session_id",
            as: "commisionInfo"
        }
    },
    { $unwind: { "path": "$commisionInfo", "preserveNullAndEmptyArrays": true } },
    ];

    tempSession.aggregate(queryArr)
        .sort({ 'updated_at': -1 })
        .skip(skipValue)
        .limit(rows)
        .exec(function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
            }
            else {

                var options = [
                    {
                        path: "sessionData.session_details.call_end_by",
                        select: 'first_name email image currentlyActive site_language security'
                    }
                ];
                users.populate(result, options, function (er, finalData) {
                    if (er) {
                        var resData = { status: 500, error: er };

                    } else {
                        tempSession.find(conditions).count(function (err, count) {
                            if (err) {
                                return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
                            }
                            else {
                                res.json({ status: 200, msg: constant.message.success_session_list, count: count, data: finalData });
                            }

                        })
                    }
                });



            }
        });
}



var blockedMoneySession = function (req, res) {



    var data = req.body ? req.body : {};
    var offset = parseInt(data.offset);
    var rows = parseInt(data.rows);
    var skipValue = 10 * offset;
    var fields = {};
    var conditions = {
        is_deleted: false
    }
    var otherParams = {
        $skip: skipValue,
        $limit: rows,
    };

    var queryArr = [{ $match: { is_deleted: false, is_completed: false } },
    {
        $lookup: {
            from: "sessions", // collection name in db
            localField: "session_id",
            foreignField: "_id",
            as: "sessionData"
        }
    },
    { $unwind: { "path": "$sessionData", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "skills", // collection name in db
            localField: "sessionData.skill_id",
            foreignField: "_id",
            as: "skill_id"
        }
    },
    { $unwind: { "path": "$skill_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "seller_id",
            foreignField: "_id",
            as: "seller_id"
        }
    },
    { $unwind: { "path": "$seller_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "searcher_id",
            foreignField: "_id",
            as: "searcher_id"
        }
    },
    { $unwind: { "path": "$searcher_id", "preserveNullAndEmptyArrays": true } },
    {
        $lookup: {
            from: "commisions", // collection name in db
            localField: "_id",
            foreignField: "tmp_session_id",
            as: "commisionInfo"
        }
    },
    { $unwind: { "path": "$commisionInfo", "preserveNullAndEmptyArrays": true } },
    ];

    tempSession.aggregate(queryArr)
        .skip(skipValue)
        .limit(rows)
        .exec(function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
            }
            else {

                var options = [
                    {
                        path: "sessionData.session_details.call_end_by",
                        select: 'first_name email image currentlyActive site_language security'
                    }
                ];
                users.populate(result, options, function (er, finalData) {
                    if (er) {
                        var resData = { status: 500, error: er };

                    } else {
                        tempSession.find(conditions).count(function (err, count) {
                            if (err) {
                                return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
                            }
                            else {
                                res.json({ status: 200, msg: constant.message.success_session_list, count: count, data: finalData });
                            }

                        })
                    }
                });



            }
        });

}


var saveSessionDetails = function (sessionData, callback) {

    console.log('session call details : ', sessionData);
    var session_id = sessionData.session_id;

    delete sessionData[session_id];

    sessions.update({ _id: session_id }, { $push: { session_details: sessionData } }, function (err, sessionUpdate) {
        if (err) {
            console.log('error to update session : ', err);
            var resData = { status: 500 };
            callback(resData);
        }
        else {
            console.log('session updated details : ', sessionUpdate);
            var resData = { status: 200, msg: 'session details updated' };
            callback(resData);
        }
    })

    users.update({ _id: { $in: [ObjectId(sessionData.users_id[0]), ObjectId(sessionData.users_id[1])] } }, { $set: { 'currentlyActive': 1 } }, function (err, updated) {
        trigger.triggerOnline(sessionData.users_id[0]);
        trigger.triggerOnline(sessionData.users_id[1]);
    });


}

var feedbackGetAllList = function (req, res) {
    var data = req.body ? req.body : {};
    var offset = parseInt(data.offset);
    var rows = parseInt(data.rows);
    var skipValue = 10 * offset;
    var fields = {};
    var conditions = {
        is_deleted: false,
        status: 4,
        is_rated: true
    }
    var otherParams = {
        $skip: skipValue,
        $limit: rows,
    };

    sessions.find(conditions, fields)
        .skip(skipValue)
        .limit(rows)
        .populate('seller_id', '_id first_name currency_symbol currency_code site_language security')
        .populate('searcher_id', '_id first_name currency_symbol currency_code site_language security')
        .populate('skill_id', '_id title description')
        .exec(function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
            }
            else {
                sessions.find(conditions).count(function (err, count) {
                    if (err) {
                        return res.json({ status: 500, msg: constant.message.error_session_list, data: err });
                    }
                    else {
                        res.json({ status: 200, msg: constant.message.success_session_list, count: count, data: result });
                    }

                })

            }
        });
}

var freezeSessionMoney = function (req, res) {
    var id = req.body.id ? req.body.id : null;

    if (id) {
        tempSession.update({ _id: id }, { $set: { status: 1 } }, function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_freeze, data: err });
            }
            else {
                return res.json({ status: 200, msg: constant.message.success_session_freeze });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var unfreezeSessionMoney = function (req, res) {
    var id = req.body.id ? req.body.id : null;

    if (id) {
        tempSession.update({ _id: id }, { $set: { status: 0 } }, function (err, result) {
            if (err) {
                return res.json({ status: 500, msg: constant.message.error_session_unfreeze, data: err });
            }
            else {
                return res.json({ status: 200, msg: constant.message.success_session_unfreeze });
            }
        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }

}

var refundSessionMoney = function (req, res) {

    var sessionData = req.body ? req.body : null;

    if (sessionData) {
        var setting = null;
        async.waterfall([
            function (callback) {
                settings.findOne({}, function (err, settingData) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        setting = settingData;
                        callback(null);
                    }
                })
            },
            function (callback) {
                wallets.findOne({ user_id: sessionData.searcher_id._id }, function (werr, walletData) {
                    if (werr) {
                        callback(err);
                    }
                    else {
                        var amount = parseFloat(walletData.amount) + parseFloat(sessionData.price);
                        var chf_wallet_amount = amount / setting['CHFTO' + sessionData.searcher_currency_code];

                        wallets.update({ user_id: sessionData.searcher_id._id }, { $set: { amount: amount, chf_amount: chf_wallet_amount } }, function (err, walletUpdate) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null);
                            }
                        })
                    }
                })
            },
            function (callback) {
                tempSession.update({ _id: sessionData._id }, { $set: { status: 2, is_completed: true } }, function (err, tempSessionUpdate) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null);
                    }

                })

            },
            function (callback) {
                logCtrl.create(sessionData.searcher_id._id, { en: 'The amount of ' + sessionData.searcher_currency_code + ' ' + sessionData.price.toFixed(2) + ' from session : ' + moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss') + ' have been refunded.', de: 'Der Betrag von ' + sessionData.searcher_currency_code + ' ' + sessionData.price.toFixed(2) + ' von der Session am : ' + moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss') + ' wurde zurück erstattet.' }, 'wallet', null, true, null, null, '/profile?active=wallet');
                logCtrl.create(sessionData.seller_id._id, { en: 'The amount of ' + sessionData.searcher_currency_code + ' ' + sessionData.price.toFixed(2) + ' from session:' + moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss') + ' have been refunded.', de: 'Der Betrag von ' + sessionData.searcher_currency_code + ' ' + sessionData.price.toFixed(2) + ' von der Session am : ' + moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss') + ' wurde zurück erstattet.', }, 'wallet', null, true, null, sessionData.searcher_id._id, '/profile?active=myprofile');

                //send mail to searcher
                templates.findOne({ 'findBy': "refundSearcher", 'is_deleted': false }, function (err, getTemplate) {
                    var selectedContent = "";
                    var selectedSubject = "";
                    if (sessionData.searcher_id.site_language == "de") {
                        selectedSubject = getTemplate.subject_de;
                        selectedContent = getTemplate.content_de;
                    } else {
                        selectedSubject = getTemplate.subject_en;
                        selectedContent = getTemplate.content_en;
                    }
                    console.log(userData, sessionData.searcher_currency_code);
                    var userData = {
                        username: sessionData.searcher_id.first_name,
                        amount: sessionData.price.toFixed(2),
                        title: sessionData.skill_id.title,
                        currency: sessionData.searcher_currency_code,
                        session_time: moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss')
                    };
                    console.log(userData, sessionData.searcher_currency_code);
                    const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                    var message = template(userData);
                    var mailerin = new mailer();
                    console.log(sessionData.searcher_id.email, message);
                    mailerin.sendMail(sessionData.searcher_id.email, message, selectedSubject);
                });

                templates.findOne({ 'findBy': "refundSeller", 'is_deleted': false }, function (err, getTemplate) {
                    var selectedContent = "";
                    var selectedSubject = "";
                    if (sessionData.seller_id.site_language == "de") {
                        selectedSubject = getTemplate.subject_de;
                        selectedContent = getTemplate.content_de;
                    } else {
                        selectedSubject = getTemplate.subject_en;
                        selectedContent = getTemplate.content_en;
                    }
                    var userData = {
                        username: sessionData.seller_id.first_name,
                        amount: sessionData.price.toFixed(2),
                        title: sessionData.skill_id.title,
                        currency: sessionData.searcher_currency_code,
                        session_time: moment(sessionData.sessionData.start_time).format('DD-MM-YYYY HH:mm:ss'),
                        touser: sessionData.searcher_id.first_name
                    };
                    const template = handlebars.compile(selectedContent.replace(/\n|\r/g, ''));
                    var message = template(userData);
                    var mailerin = new mailer();
                    mailerin.sendMail(sessionData.seller_id.email, message, selectedSubject);
                });

                callback(null);


            }

        ], function (err, result) {
            if (err) {
                res.json({ status: 500, msg: constant.message.error_wallet_refund, error: err });
            }
            else {
                res.json({ status: 200, msg: constant.message.success_wallet_refund });
            }

        })
    }
    else {
        res.json({ status: 404, msg: constant.message.param_missing });
    }


}


exports.create = create;
exports.delete = deleteSession;
exports.list = list;
exports.incomingRequestList = incomingRequestList;
exports.update = update;
exports.getSlotByDate = getSlotByDate;
exports.getBookedSlotOfMonth = getBookedSlotOfMonth;
exports.acceptRequest = acceptRequest;
exports.scheduledSessionList = scheduledSessionList;
exports.cancelSession = cancelSession;
exports.getScheduledSlotOfMonth = getScheduledSlotOfMonth;
exports.rescheduleSession = rescheduleSession;
exports.historySessionList = historySessionList;
exports.getHistorySlotOfMonth = getHistorySlotOfMonth;
exports.rateSession = rateSession;
exports.getSessionDetails = getSessionDetails;
exports.getSessionList = getSessionList;
exports.saveSessionDetails = saveSessionDetails;
exports.feedbackGetAllList = feedbackGetAllList;
exports.blockedMoneySession = blockedMoneySession;
exports.freezeSessionMoney = freezeSessionMoney;
exports.unfreezeSessionMoney = unfreezeSessionMoney;
exports.refundSessionMoney = refundSessionMoney;
