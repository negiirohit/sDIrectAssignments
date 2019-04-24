const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({

         firstName: {
            type: String,
            required:true
          },
          lastName: {
            type: String
          },
          email: {
              type: String,
              required: true,
              unique: true
          },
          DOB : {
                type: Date
          },
          gender : {
                type: String
          } 
})


User.plugin(passportLocalMongoose);
// define user.authenticate function for checking user name in db
// if not using passportLocalMongoose


module.exports = mongoose.model('RNUser',User);
