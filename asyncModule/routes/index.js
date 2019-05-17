var express = require('express');
var router = express.Router();
//var request = require('request');
var https = require("https");


/* GET home page. */
router.get('/', function(req, res, next) {

  var username = 'negiirohit';
  var options = {
  host: 'api.github.com',
  path: '/users/' + username + '/repos',
  method: 'GET',
  headers: {'user-agent': 'node.js'}
  };
  
  var request = https.request(options, function(response){
          var body = '';
          response.on("data", function(chunk){
              body += chunk.toString('utf8');
          });

          response.on("end", function(){
              console.log("Body: ", body);
              res.json(body);
          });
  });
  
  request.end();
});

module.exports = router;
