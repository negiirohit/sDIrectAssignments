var express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io');

//require swagger
var swaggerJSDoc = require('swagger-jsdoc');

const userRouter = require('./routes/user');
const config = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');
//routes
const User = require('./models/user');
const http = require('http');



//
//Db Connection 
const url = config.mongoUrl
const connect = mongoose.connect(url, {
   useNewUrlParser: true
  });


connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


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
// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });


var server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);


// io.message = "testing";
//Socket
io.on('connection', (socket) => {
    console.log("connected to socket")

    socket.on('join', (data) => {
        console.log(data);
        socket.join(data.room);
        console.log("room joined")
        //  chatRooms.find({}).toArray((err, rooms) => {
        //      if(err){
        //          console.log(err);
        //          return false;
        //      }
        //      count = 0;
        //      rooms.forEach((room) => {
        //          if(room.name == data.room){
        //              count++;
        //          }
        //      });
        //      if(count == 0) {
        //          chatRooms.insert({ name: data.room, messages: [] }); 
        //      }
        // });
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message});
        chatRooms.update({name: data.room}, { $push: { messages: { user: data.user, message: data.message } } }, (err, res) => {
            if(err) {
                console.log(err);
                return false;
            }
            console.log("Document updated");
        });
    });

    socket.on('typing', (data) => {
        socket.broadcast.in(data.room).emit('typing', {data: data, isTyping: true});
    });


});




server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
