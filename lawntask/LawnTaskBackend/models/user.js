const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lawn = require('./lawn');
const bcrypt = require('bcryptjs');



const Address = new Schema({
    street:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    country:{
        type: String 
    }                               
})




var User = new Schema({
        firstName: {
            type: String,
        },
        lastName: {
             type: String
        },
        email: {
            type : String,
            required: true
        },
        password: {
            type:String,
            required : true
        },
        contact: {
            type: String
          
          },
        address : {
            type: Address
        }

},{
    timestamps: true
})

User.pre('save', function(next){
    console.log('this :' +JSON.stringify(this));
    let user = this;
    console.log('user :' +JSON.stringify(user));
    if(!user.isModified('password')) {
        return next();
    }

    bcrypt.hash(this.password, 10, (err, hash) => {
    if(err) {
        console.log(err);
    }
    else {
            user.password = hash;
            next();
    }
    })
});
    

module.exports = mongoose.model('rnUser',User);
