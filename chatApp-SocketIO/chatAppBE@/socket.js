var socketio = require('socket.io');

var socketConnection = exports = module.exports = {};


socketConnection.listen = function listen(app) {
  
    console.log('Socket Called')
    io = socketio.listen(app);
    exports.sockets = io.sockets;
    global.socketIO = io.sockets;

    
    io.sockets.on('connection', function (socket) {

        global.socketIO.emit('test',{data});

        socket.on('test',(data) =>{
            console.log("data ",data);
        })

        socket.on('join', function( data) {

        socket.join(data.room,()=>{
            Chat.findOneAndUpdate({chatRoom : data.room},{})
            .then( room => {
                if(room==null)
                    Chat.create({chatRoom : data.room})
                    .then( room=>{
                    })
            } )
        });

        })

        //On receiving a new Message
        socket.on('message', (data) => {
            io.in(data.room).emit('messageReceived', data);                
            chatController.saveMsg(data);
        });


        socket.on('goOnline', function(id){
            if(global.users.indexOf(id)==-1){
                global.users.push(id);
                global.sockets.push(socket.id);
                userController.goOnline(id,socket.id);
            }
            socket.broadcast.emit("changeUserStatus",{id:id,status:true});

        });


        socket.on('goOffline', function(id){ 
            global.users.splice(global.users.indexOf(id),1);
            global.sockets.splice(global.sockets.indexOf(socket.id),1);
            socket.broadcast.emit("changeUserStatus",{id:id,status:false});        
            userController.goOffline(id);
        });


        socket.on('disconnect', function(){    
            socket.emit('goOffline',global.users[global.sockets.indexOf(socket.id)]);
        });


        socket.on('typing', (data) => {
            socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
        });


        socket.on('changeMsgStatus',(msg)=>{
            socket.broadcast.in(msg.room).emit('msgStatusChanged',msg);
            chatController.changeMsgStatus(msg);        
        })

        socket.on('demo', data=>{
            console.log("data",data);
        })

       io.on('demoMsg',data =>{
            console.log("on emit data ",data);
        })
    });

    return io;
};

// function sendDemoData(msg) {
    // socketConnection.sendDemoData(msg);
// }
socketConnection.sendDemoData= function sendDemoData(msg) {
    console.log("befor emitting ",msg);
    //console.log("globalSocketIO",global.socketIO);
    global.socketIO.emit('demoMsg', { "data": msg });    
};


