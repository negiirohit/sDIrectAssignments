const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');


const MsgSchema = new Schema({
    to : {
        type: [Schema.Types.ObjectId ],
        ref : 'User'
    },
    from :{
        type: [Schema.Types.ObjectId ],
        ref : 'User' 
    },
    message : {
        type : String,
        required : true
    }   
},{
    timestamps : true
})

var Chat = new Schema({
    members : {
       type: [Schema.Types.ObjectId ],
       ref : 'User'
    },
    messages : [MsgSchema]
})

module.exports = mongoose.model('Chat',Chat);
