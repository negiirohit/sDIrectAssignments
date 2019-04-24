 const express = require('express');
 const bodyParser = require('body-parser');
 const imageController = require('../controllers/imageController')
const path = require('path');
   
const imageRouter = express.Router();
imageRouter.use(bodyParser.json());

imageRouter.route('/uploadImage')
.post(imageController.uploadImage, (req, res, next)=>{
    console.log("images "+ req.files)
});



imageRouter.route('/removeImage/:image_id')
.delete(imageController.removeImage, (req, res, next)=>{
   // console.log("images "+ req.files)
});
module.exports = imageRouter;

imageRouter.post('/download', function(req,res,next){
    console.log(req.body);
    filepath = path.join(appRoot,'/public/images') +'/'+ req.body.filename;
    console.log(filepath);
    res.sendFile(filepath);
});