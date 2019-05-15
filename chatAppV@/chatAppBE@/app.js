var express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io');



//require swagger
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const userRouter = require('./routes/user');
const fileRouter = require('./routes/file');

const userController = require('./controllers/userController');
const chatController = require('./controllers/chatController');

const chatRouter = require('./routes/chat');


const config = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');
//routes
const User = require('./models/user');
const Chat = require('./models/chat');
const http = require('http');
//socket file upload
let siofu = require("socketio-file-upload");



//
//Db Connection 
const url = config.mongoUrl
const connect = mongoose.connect(url, {
   useNewUrlParser: true
  });


connect.then((db) => {
    //console.log("Connected correctly to server");
}, (err) => { console.log("db connection error "+err); });


const app = express();
// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
};
  
// options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],
  };
  
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


app.use(bodyParser.json());


app.use(cors());
app.use('/users',userRouter);
app.use('/chats',chatRouter);
app.use('/files',fileRouter);
// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

var server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
let users =[];
let sockets =[];
//Socket Configuration
io.on('connection', (socket) => {
    
    //file uploader configurations
    var uploader = new siofu();
    uploader.dir = "/public/uploads";
    uploader.listen(socket);


    socket.on('join', function( data) {

    socket.join(data.room,()=>{
        Chat.findOneAndUpdate({chatRoom : data.room},{})
        .then( room => {
            if(room==null)
                Chat.create({chatRoom : data.room})
                .then( room=>{
                    console.log("chat room created succesfuly");
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
        console.log("go online check condition")
        if(users.indexOf(id)==-1){
            console.log("go online if")
            users.push(id);
            sockets.push(socket.id);
            console.log("online user",users);
            console.log("online socket",sockets);
            userController.goOnline(id,socket.id);
        }
        socket.broadcast.emit("changeUserStatus",{id:id,status:true});

    });


    socket.on('goOffline', function(id){ 
        users.splice(users.indexOf(id),1);
        sockets.splice(sockets.indexOf(socket.id),1);
        console.log("offline user",users);
        console.log("offline socket",sockets);
        socket.broadcast.emit("changeUserStatus",{id:id,status:false});        
        userController.goOffline(id);
    });


    socket.on('disconnect', function(){    
        //socket.broadcast.emit('userOfline',socket.id);
        //users[sockets.indexOf(socket.id)]
        console.log('user disconnected  ',users[sockets.indexOf(socket.id)])
        console.log('index of',sockets.indexOf(socket.id))
        socket.emit('goOffline',users[sockets.indexOf(socket.id)]);
    });


    socket.on('typing', (data) => {
        socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
    });

    
    socket.on('changeMsgStatus',(msg)=>{
        console.log("changing msg status ", JSON.stringify(msg.msg_id));
        socket.broadcast.in(msg.room).emit('msgStatusChanged',msg);
        chatController.changeMsgStatus(msg);        
    })
        
});


server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
