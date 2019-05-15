
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

//let data = { userNameTo:this.userNameTo, userIdTo:this.userIdTo, room: this.chatRoom, userNameFrom: this.userName,
//    message: this.message,messageType:messageType, status:'sent',msg_id :timestamp }


const MsgSchema = new Schema({
    room: String,
    msg_id : String,
    userNameto : String,
    userIdTo : Schema.Types.ObjectId,
    userNameFrom : String,
    messageType : String,
    message : {
        type : String,
        required : true
    },
    fileURL : String,
    downloaded: boolean,
    status : String
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
