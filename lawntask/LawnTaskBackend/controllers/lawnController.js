var express = require('express');
const User = require('../models/user');
const Lawn = require('../models/lawn');
const auth = require('../auth/authenticate');


module.exports.createLawn = (req, res, next) => {
    console.log("creating lawn");
    req.body.user_id = req.user.id;
    console.log(JSON.stringify(req.body))
    Lawn.create(req.body)
    .then(lawn => {
        console.log("created lwan : "+lawn);
        res.json({
            success: true,
            message: 'lawn created',
            lawn: lawn
        });
    })
    .catch((err) => {
        console.log(" lawn creation failed: "+err);
        res.json({
             success : false,
              message : err.message,
        }); 
    });
}

module.exports.getLawns = (req, res, next) => {
        console.log("getting lawns");
        Lawn.find({user_id:req.user.id})
        .then( (lawns)=> {
            res.json({
                success: true,
                message: 'lawn found',
                lawns: lawns
            });
        })
        .catch((err) => {
            res.json({
                 success : false,
                  message : err.message,
            }); 
        });

}

module.exports.getLawnDetail = (req, res, next) => {
    console.log("getting lawn detail");
    console.log(req.params._id);
    Lawn.findOne({_id:req.params._id})
    .then((lawn)=> {
        res.json({
            success: true,
            message: 'lawn found',
            lawn: lawn
        });
    })
    .catch((err) => {
        res.json({
             success : false,
              message : err.message,
        }); 
    });

}

// module.exports.getLawns = (req, res, next ) => {
//    Lawn.aggregate([
//        {
//            $group : {
//                     _id:null,
//                     user : user_id            
//             } 
//        }
//    ])
//    .then(lawn)

// }

