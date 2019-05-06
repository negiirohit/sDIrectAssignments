const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');


const MsgSchema = new Schema({
    to : String,
    from : String,
    message : {
        type : String,
        required : true
    }   
},{
    timestamps : true
})

var Chat = new Schema({
    chatRoom : String,
    members : {
       type: [Schema.Types.ObjectId ],
       ref : 'User'
    },
    messages : [MsgSchema]
})

module.exports = mongoose.model('Chat',Chat);
