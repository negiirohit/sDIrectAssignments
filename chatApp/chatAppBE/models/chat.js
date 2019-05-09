const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
/*
      let data = { userNameTo:this.userNameTo,
         userIdTo:this.userIdTo, 
         room: this.chatRoom,
          userNameFrom: this.userName,
         message: this.message,
         messageType:messageType,
         messageStatus :{status:'sent'} }

{}

*/



const MsgSchema = new Schema({
    userNameto : String,
    userIdTo : Schema.Types.ObjectId,
    userNameFrom : String,
    messageType : String,
    message : {
        type : String,
        required : true
    },
    image :{
        type: String 
    },
    messageStatus :{
            status : String,
            time : { type : Date, default: Date.now }
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
