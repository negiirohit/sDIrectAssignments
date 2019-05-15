const Chat = require('../models/chat');
const User = require('../models/user');

module.exports.getChatMessgaes = (req, res, next ) => {
    //console.log(req.user.id);
    Chat.findOne({ chatRoom : req.params.chatRoom })
    .then((chat) => {
            //console.log("chat messages: "+chat.messages);
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
    //console.log("msg in controller: "+JSON.stringify(msg));
     Chat.findOneAndUpdate({chatRoom : msg.room},{$push:{messages: msg} },{new:true})
     .then(chat => {
            console.log("msg saved succesfully");
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