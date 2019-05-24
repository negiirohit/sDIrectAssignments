var mongoose = require('mongoose');
var socketio = require('socket.io');
var userObj = mongoose.model('users');
var tempCallCtrl = require("../temp-session-call-charge/temp-session-call-charge.controller");
var socketConnection = exports = module.exports = {};

socketConnection.listen = function listen(app) {
    console.log('Socket Called')


    io = socketio.listen(app);
    exports.sockets = io.sockets;
    global.socketIO = io.sockets;
    var loggedusers = [];
    var tabCounter = 0;
    io.sockets.on('connection', function (socket) {
        var eachuser;
        //register to socket

        socket.on('registersocket', function (data) {

            console.log('---------------------------------------------->', data);
            eachuser = data.user_id;
            socket.join(data.user_id);
            loggedusers[eachuser] = {};
            loggedusers[eachuser].userId = data.user_id;
            var updateval = {};
            updateval.lastLoggedIn = new Date();
            updateval.currentlyActive = 1;
            updateval.socket_id = socket.id;
            if (loggedusers[eachuser] && loggedusers[eachuser].userId != null) {
                userObj.findOneAndUpdate({ _id: loggedusers[eachuser].userId }, { $set: updateval }, function (err, data) {
                    //Increment Tab counter
                    // console.log('In Data.tabCounter', data.tabCounter);
                    // userObj.update({ _id: loggedusers[eachuser].userId }, { $set: { "tabCounter": data.tabCounter + 1 } }, function (err, updated) {
                    // });
                    // io.sockets.emit('active', { userId: loggedusers[eachuser].userId, flag: true });
                    sendUserCurrentStatus({ userID: loggedusers[eachuser].userId, currentlyActive: updateval.currentlyActive });
                });
            }
            global.onlineUser = loggedusers;
        });

        //Un- register to socket
        socket.on('unRegistersocket', function (userData) {
            var loggedOutUserId = userData.id;
            if (loggedOutUserId !== "" && loggedOutUserId != null) {
                userObj.findOneAndUpdate({ _id: loggedOutUserId }, { $set: { currentlyActive: 0 } }, function (err, data) {
                    if (loggedusers[loggedOutUserId]) {
                        //Decrement Tab counter
                        // var setActive = 1;
                        // var finalCounter = data.tabCounter - 1;
                        // if (finalCounter == 0) {
                        var setActive = 0;
                        // }
                        userObj.update({ _id: loggedusers[eachuser].userId }, { $set: { currentlyActive: setActive } }, function (err, updated) {
                            // if (finalCounter == 0) {
                            // io.sockets.emit('inactive', { userId: loggedusers[eachuser].userId, flag: false });
                            sendUserCurrentStatus({ userID: loggedusers[eachuser].userId, currentlyActive: 0 });
                            delete loggedusers[eachuser];
                            // }
                        });
                    }
                });
            }
            global.onlineUser = loggedusers;
        });
        //Desktop notification for Session request/accept/reschedule/cancel/wallet etc
        socket.on('sendDesktopNotify', function (data) {
            OnDesktopNotify({ userId: data.user_id });
        });
        socket.on('sendDeclineSessionNotify', function (data) {
            OnDeclineNotify(data);
        });

        //this socket to notify user no technical issue its end by user
        socket.on('callEndByUser', function (data) {
            global.socketIO.emit('callEndByUserSuccccess', data);
        });

        socket.on('callEndByLowWallet', function (data) {
            global.socketIO.emit('callEndByLowWalletSuccccess', data);           
            notifyWalletLow(data.searcher_id);
        });

        //Session call update in temp session call data
        socket.on('updateCallSession', function (data, callback) {
            onUpdateCallSession(data, function (resData) {
                callback(resData);
            });
        });
        socket.on('saveSessionDetails', function (data, callback) {
            onSaveSessionDetails(data, function (resData) {
                callback(resData);
            });
        });
        //Session call update in temp session call data
        socket.on('notifyWalletNextToZero', function (data, callback) {
            notifyWalletNextToZero(data, function (resData) {
                callback(resData);
            });
        });

        //When browser closed
        socket.on('disconnect', function () {
            leaveButwise();
        });
        var leaveButwise = function () {
            if (loggedusers[eachuser] && loggedusers[eachuser].userId != null) {
                userObj.findOneAndUpdate({ _id: loggedusers[eachuser].userId }, { $set: { currentlyActive: 0 } }, function (err, data) {
                    if (loggedusers[eachuser]) {
                        //Decrement Tab counter
                        // var setActive = 1;
                        // var finalCounter = data.tabCounter - 1;
                        // if (finalCounter == 0) {
                        var setActive = 0;
                        // }
                        userObj.update({ _id: loggedusers[eachuser].userId }, { $set: { currentlyActive: setActive } }, function (err, updated) {
                            // if (finalCounter == 0) {
                            if (loggedusers[eachuser]) {
                                io.sockets.emit('checkOpenTab', { userId: loggedusers[eachuser].userId });
                                sendUserCurrentStatus({ userID: loggedusers[eachuser].userId, currentlyActive: 0 });
                                delete loggedusers[eachuser];
                            }

                            // }
                        });

                    }
                });
            }
            global.onlineUser = loggedusers;
        };
        global.onlineUser = loggedusers;
    });
    return io;
};




//For User online/offline
function sendUserCurrentStatus(uID, status) {
    socketConnection.socketUserRecentActive(uID, status);
}
socketConnection.socketUserRecentActive = function socketUserRecentActive(userID, status) {
    global.socketIO.emit('userCurrentStatus', { "data": userID });
};
//For Session request/accept/reschedule/cancel/wallet etc
function OnDesktopNotify(userId) {
    socketConnection.socketDesktopNotify(userId);
}
socketConnection.socketDesktopNotify = function socketDesktopNotify(userId) {
    userObj.findOne({ _id: userId.userId }, function (err, userNoti) {
        if (err) {
            console.log(err);
        }
        else {
            if (userNoti && io.sockets.sockets[userNoti.socket_id]) {
                io.sockets.sockets[userNoti.socket_id].emit('userDesktopNotify', { "data": userId });
            }
            else {
                global.socketIO.emit('userDesktopNotify', { "data": userId });
            }

        }

    })


};

//For Instant Session decline
function OnDeclineNotify(data) {
    socketConnection.socketDeclineNotify(data);
}
socketConnection.socketDeclineNotify = function socketDeclineNotify(data) {
    global.socketIO.emit('userDeclineNotify', data);
};

//For notifyForInstantCall request
socketConnection.notifyForInstantCall = function notifyForInstantCall(data) {


    userObj.find({ _id: { $in: [data.data.sessionData.to._id, data.data.sessionData.from._id] } }, function (err, userNoti) {
        if (err) {

        }
        else {
            if (io.sockets.sockets[userNoti[0].socket_id] && io.sockets.sockets[userNoti[1].socket_id]) {
                io.sockets.sockets[userNoti[0].socket_id].emit('notifyForInstantCall', data);
                io.sockets.sockets[userNoti[1].socket_id].emit('notifyForInstantCall', data);
            }
            else {
                global.socketIO.emit('notifyForInstantCall', data);
            }

        }

    })

};


//For open tok call request
socketConnection.notifyUserForCall = function notifyUserForCall(data) {

    userObj.findOne({ _id: data.subscriber_user_id }, function (err, userNoti) {
        if (err) {

        }
        else {
            if (io.sockets.sockets[userNoti.socket_id]) {
                io.sockets.sockets[userNoti.socket_id].emit('notifyUserForCall', data);
            }
            else {
                global.socketIO.emit('notifyUserForCall', data);
            }

        }

    })


};



//socketConnection.acknowledgeAdminTotalCount = function acknowledgeAdminTotalCount(touser, data) {
//    global.socketIO.to(touser).emit('updateloginusercount', {data: data});
//};

function onUpdateCallSession(callData, callback) {
    tempCallCtrl.create(callData, function (resData) {
        callback(resData);
    });
}
function onSaveSessionDetails(sessionData, callback) {
    var sessionCtrl = require("../session/session.controller");
    sessionCtrl.saveSessionDetails(sessionData, function (resData) {
        callback(resData);
    });
}

function notifyWalletNextToZero(userdata, callback) {

    console.log('userdata to notify : ', userdata);

}
function notifyWalletLow(user_id) {    
    var walletCtrl = require("../wallet/wallet.controller");
    walletCtrl.notifyWalletLow(user_id);
}

exports.triggerOnline = function (id) {
    sendUserCurrentStatus({ userID: id, currentlyActive: 1 });
}