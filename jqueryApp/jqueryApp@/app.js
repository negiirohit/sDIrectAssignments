var express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io');

//require swagger
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const userController = require('./controllers/userController');
const chatController = require('./controllers/chatController');
const chatRouter = require('./routes/chat');


const path = require('path');

const config = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');
//routes
const User = require('./models/user');
const Chat = require('./models/chat');
const http = require('http');



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

//static file path
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/',indexRouter);
app.use('/users',userRouter);
app.use('/chats',chatRouter);
// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

var server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);


//Socket Configuration
io.on('connection', (socket) => {
    
    // console.log("new user connected");    

    socket.on('join', function( data) {

    socket.join(data.room,()=>{
        Chat.findOneAndUpdate({chatRoom : data.room},{})
        .then( room => {
            if(room==null)
                Chat.create({chatRoom : data.room})
                .then( room=>{
                    console.log("chat room created succesfuly");
                } )
        } )
    });

    })


    //On receiving a new Message
    socket.on('message', (data) => {
        console.log(" New msg recived ");
        io.in(data.room).emit('messageReceived', data);                
        chatController.saveMsg(data);
    });

        
    socket.on('goOnline', function(id){
        userController.goOnline(id,socket.id);
        socket.broadcast.emit("changeUserStatus",{id:id,status:true});
    });


    socket.on('goOffline', function(id){ 
        socket.broadcast.emit("changeUserStatus",{id:id,status:false});        
        userController.goOffline(socket.id);
        // socket.broadcast('userOfline',id);
    });


    //On getting disconnected
    socket.on('disconnect', function(){    
        //console.log("disconnect");    
        socket.broadcast.emit('userOfline',socket.id);
        userController.goOffline(socket.id);        
    });


    socket.on('typing', (data) => {
        socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
    });

    
    socket.on('changeMsgStatus',(msg)=>{
        socket.broadcast.in(msg.room).emit('msgStatusChanged',msg);
        chatController.changeMsgStatus(msg);        
    })
    
    
    socket.on('markRead',(msg) =>{
       // chatController.markRead(msg,io,socket);
        io.in(msg.room).emit('messageRead', msg);                        
    })    
});


server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
