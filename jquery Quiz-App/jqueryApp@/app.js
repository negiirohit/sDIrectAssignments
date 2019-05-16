var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const indexRouter = require('./routes/index');
const questionRouter = require('./routes/question');


const path = require('path');

const config = require('./config/config');
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
  
app.use(bodyParser.json());

//static file path
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/',indexRouter);
app.use('/questions',questionRouter);

var server = http.Server(app);

server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });
