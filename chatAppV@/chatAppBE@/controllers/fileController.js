const Chat = require('../models/chat');
const User = require('../models/user');

//file
const path = require('path');
const multer = require('multer');
const config = require('../config/config');
const app = require('../app');



module.exports.uploadImage = (req, res, next ) => {
    

}



/*
const Image = require('../models/Image');
const resizer = require('node-image-resizer');
var fs = require('fs');

//get file name
getFileName = (file) => {
    
    filename = file.originalname.split('.')[0] + Date.now()+'.' + file.mimetype.split('/')[1]
    console.log(filename);
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
   
var upload = multer({ storage: storage }).array('files',10)

//node-image-resizer configuration
const setup = { 
    all: {
      quality : 100
    },
  versions: [{
      path : config.thumbnailUploadLocation + '/100x100/',
      width: 100,
      height: 100
      }, {
      path : config.thumbnailUploadLocation + '/40x40/',
      width: 40,
      height: 40
      }, {
      path : config.thumbnailUploadLocation +'/20x20/',
      width: 20,
      height: 20
  }]
};



module.exports.uploadImage = (req, res, next) => {
    //first upload images
    upload(req ,res , (err) => {
            if(err)
            {
                console.log("error occured : "+err)
               res.json(err);
                
            }
            else
            {
		console.log(req.files);
                
                // for(let i=0; i<req.files.length; i++){
                //       console.log(req.files[i]);
                //       let fileName = req.files[i].path.split('/')[2];
                //       req.files[i].imageURL=fileName
                //       console.log(req.files);
                // }

                Image.create(req.files)
                .then( files => {
                            console.log("files: "+files)
                      async function  resizeImage() {
                            for(let i=0; i<files.length; i++) {
                              console.log("resizer: " +files[i].path)
                              const thumbs = await resizer(files[i].path, setup);
                              console.log("thumbnails: "+thumbs);
                            }
                      }

                      resizeImage().then(()=>{
                        res.json(files);
                      }).catch((err) => {
                        res.json(err);
                      })
                } )
                .catch((err=>{
                  res.json(err);
                }))


            } 
            next();
    })



}


module.exports.removeImage = (req, res ,next ) => {
  if(!req.params.image_id){
    res.json("please send a image id")
  }
  else
  {
    console.log(req.params.image_id);
    Image.findByIdAndDelete({_id:req.params.image_id})
    .then( (image)=> {

      console.log("image"+image);
      let fileName = image.path.split('/')[2];
      
      var appDir = path.dirname(app);
      var imageURL = path.join(appDir,'public/images',fileName)
      console.log(imageURL);
      fs.unlinkSync(imageURL,function(err){
        if(err) { console.log(err);
          res.json(err);
        }
      
               
      console.log("Image removed")
      res.json(image)
    } )
    .catch( err => res.json(err))
      
      
      
      
      
//      removeImage(filename);
      })
      .catch( err => res.json(err))
    }
}

function removeImage(filename) {

  var appDir = path.dirname(app);
  var imageURL = path.join(appDir,'public/images',fileName)
  console.log(imageURL);
  fs.unlinkSync(imageURL,function(err){
  if(err) { console.log(err);
    res.json(err);
  }
  console.log("Image removed")
  res.json(image)
} )
.catch( err => res.json(err))

var imageURL20x20 = path.join(appDir,'public/images/thumbnail/20x20/',fileName)
  console.log(imageURL);
  fs.unlink(imageURL20x20,function(err){
  if(err) return console.log(err);
           
  console.log("Image removed")
  res.json(image)
} )
.catch( err => res.json(err))


var imageURL40x40 = path.join(appDir,'public/images/thumbnail/40x40/',fileName)
console.log(imageURL);
fs.unlink(imageURL40x40,function(err){
if(err) return console.log(err);
         
console.log("Image removed")
res.json(image)
} )
.catch( err => res.json(err))

var imageURL100x100 = path.join(appDir,'public/images/thumbnail/100x100/',fileName)
console.log(imageURL);
fs.unlink(imageURL,function(err){
if(err) return console.log(err);
         
console.log("Image removed")
res.json(image)
} )
.catch( err => res.json(err))

}



*/