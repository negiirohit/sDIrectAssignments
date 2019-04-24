let jwt = require('jsonwebtoken');
const config = require('../config/config.js');

module.exports.verifyToken = (req, res, next) => {
  console.log("going to verify token");
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
 


  console.log("got token"+token);

  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    console.log("got token"+token);
    jwt.verify(token, config.secret, (err, user) => {
      if (err) {
        console.log("extracted token "+token);
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        console.log("decoded: "+user.id)
        req.user = user;
        next();
      }
    });
  } else {
    console.log("did not get any token")
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};