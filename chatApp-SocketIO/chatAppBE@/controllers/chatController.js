const Chat = require('../models/chat');
const User = require('../models/user');

//fetch all chat messages
module.exports.getChatMessgaes = (req, res, next ) => {
    Chat.findOne({ chatRoom : req.params.chatRoom })
    .then((chat) => {
            res.status(200);                
            res.json({
                success: true,
                message: 'Fetched all messages ',
                data : {messages : chat.messages}
            });
    })
    .catch((err) => {
        res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });
}



//chat controller for save files in database
module.exports.saveMsg = (msg) => {
     Chat.findOneAndUpdate({chatRoom : msg.room},{$push:{messages: msg} },{new:true})
     .then(chat => {
    })
    .catch(err => {
        console.log(err);
    })
}


module.exports.changeMsgStatus = (msg) => {
    console.log("change msg status:  "+msg.msg_id);
    Chat.updateOne({chatRoom : msg.room,"messages.msg_id":msg.msg_id },
         { $set: { "messages.$.status" : msg.status } })
            .then(res => {
            // console.log("msg updated"+JSON.stringify(res));
        })
         .catch(err=>{
         console.log(err);
     } )
    
}