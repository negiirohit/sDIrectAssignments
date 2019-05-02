var express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('socket.io');

const userRouter = require('./routes/user');

const config = require('./config/config');
const mongoose = require('mongoose');


//Swagger Configuration
var swaggerJSDoc = require('swagger-jsdoc');



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

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users',userRouter);

//Swagger Routing
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

const server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });

const io = socket.listen(server);
   

//Socket
io.sockets.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        chatRooms.find({}).toArray((err, rooms) => {
            if(err){
                console.log(err);
                return false;
            }
            count = 0;
            rooms.forEach((room) => {
                if(room.name == data.room){
                    count++;
                }
            });
            if(count == 0) {
                chatRooms.insert({ name: data.room, messages: [] }); 
            }
        });
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


///*
let users;
let count;
let chatRooms;
let messagesArray = [];

app.get('/', (req, res, next) => {
    res.send('Welcome to the express server...');
});

app.post('/api/users', (req, res, next) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    let count = 0;    
    users.find({}).toArray((err, Users) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        for(let i = 0; i < Users.length; i++){
            if(Users[i].username == user.username)
            count++;
        }
        // Add user if not already signed up
        if(count == 0){
            users.insert(user, (err, User) => {
                if(err){
                    res.send(err);
                }
                res.json(User);
            });
        }
        else {
            // Alert message logic here
            res.json({ user_already_signed_up: true });
        }
    });
    
});

app.post('/api/login', (req, res) => {
    let isPresent = false;
    let correctPassword = false;
    let loggedInUser;

    users.find({}).toArray((err, users) => {
        if(err) return res.send(err);
        users.forEach((user) => {
            if((user.username == req.body.username)) {
                if(user.password == req.body.password) {
                    isPresent = true;
                    correctPassword = true;
                    loggedInUser = {
                        username: user.username,
                        email: user.email
                    }    
                } else {
                    isPresent = true;
                }
            }
        });
            res.json({ isPresent: isPresent, correctPassword: correctPassword, user: loggedInUser });
    });
});

app.get('/api/users', (req, res, next) => {
    users.find({}, {username: 1, email: 1, _id: 0}).toArray((err, users) => {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
});

app.get('/chatroom/:room', (req, res, next) => {
    let room = req.params.room;
    chatRooms.find({name: room}).toArray((err, chatroom) => {
        if(err) {
            console.log(err);
            return false;
        }
        res.json(chatroom[0].messages);
    });
});
//*/


/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');

var userRouter = require('./routes/userRouter');


const config = require('./config/config');
const mongoose = require('mongoose');
//Db Connection 
const url = config.mongoUrl
const connect = mongoose.connect(url, {
   useNewUrlParser: true
  });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/