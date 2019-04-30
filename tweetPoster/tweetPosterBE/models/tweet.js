const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

var Tweet = new Schema({

    content : {
        type: String,
        required : true
    },
    handler : {
            type:  Schema.Types.ObjectId, 
            ref : 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tweet',Tweet);