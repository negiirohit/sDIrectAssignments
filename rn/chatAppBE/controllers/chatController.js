const Chat = require('../models/chat');


module.exports.getChatMessgaes = (req, res, next ) => {
    //console.log(req.user.id);
    Chat.findOne({ chatRoom : req.params.chatRoom })
    .then((chat) => {
            console.log("chat messages: "+chat.messages);
            res.json({
                success: true,
                message: 'Fetched all messages ',
                data : {messages : chat.messages}
            });
    })
    .catch((err) => {
        //res.status(500);        
        res.json({
            success : false,
            message : err.message,
        }); 
    });
}
