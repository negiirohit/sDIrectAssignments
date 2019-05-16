
const Chat = require('../models/chat');
const User = require('../models/user');


const path = require('path');
const multer = require('multer');
const config = require('../config/config');
const app = require('../app');
var fs = require('fs');


//get file name
getFileName = (file) => {
  filename = file.originalname.split('.')[0] + Date.now()+'.' + file.mimetype.split('/')[1]
  return (filename);
}

//Multer Configuration 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.imageUploadLocation)
    
  },
  filename: function (req, file, cb) {
    cb(null, getFileName(file))
  }
})
 
var upload = multer({ storage: storage }).single('image')

module.exports.uploadImage = (req, res, next ) => {     
      upload(req ,res , (err) => {
        if(err){
            res.json(err);
        }        
        else{
            res.json({
              success:true,
              msg: 'file uploaded',
              filePath:req.file.path
            })
        }
    })

}
