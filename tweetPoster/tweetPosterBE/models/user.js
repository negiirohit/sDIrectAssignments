const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tweet = require('./tweet');
const bcrypt = require('bcryptjs');

var User = new Schema({
        name: {
            type: String,
        },
        password: {
            type:String,
            required : true
        },
        handle:{
            type:String,
            required : true            
        },
        tweets: [{
            type:  Schema.Types.ObjectId, 
            ref : 'Tweet'
        }]
    

},{
    timestamps: true
})

User.pre('save', function(next){

    let user = this;
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
    

module.exports = mongoose.model('User',User);