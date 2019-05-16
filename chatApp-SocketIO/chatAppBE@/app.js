var express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io');

const path = require('path');

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



//app.use(bodyParser.json());
//app.use(bodyParser.json({limit: '10mb', extended: true}))
//.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(express.static(path.join(__dirname, 'public')));
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
        if(users.indexOf(id)==-1){
            users.push(id);
            sockets.push(socket.id);
            userController.goOnline(id,socket.id);
        }
        socket.broadcast.emit("changeUserStatus",{id:id,status:true});

    });


    socket.on('goOffline', function(id){ 
        users.splice(users.indexOf(id),1);
        sockets.splice(sockets.indexOf(socket.id),1);
        socket.broadcast.emit("changeUserStatus",{id:id,status:false});        
        userController.goOffline(id);
    });


    socket.on('disconnect', function(){    
        socket.emit('goOffline',users[sockets.indexOf(socket.id)]);
    });


    socket.on('typing', (data) => {
        socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
    });

    
    socket.on('changeMsgStatus',(msg)=>{
        socket.broadcast.in(msg.room).emit('msgStatusChanged',msg);
        chatController.changeMsgStatus(msg);        
    })
        
});


server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
