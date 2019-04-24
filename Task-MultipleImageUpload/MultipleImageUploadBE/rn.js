const multer = require('multer');
const path = require('path');
const resizer = require('node-image-resizer');

const Image = require('../models/image.model');

// Conf for resizer
const setup = { 
all: {
quality : 100
},
versions: [{
path : './ozora-frontend/uploads/thumbnails/100x100/',
width: 100,
height: 100
}, {
path : './ozora-frontend/uploads/thumbnails/40x40/',
width: 40,
height: 40
}, {
path : './ozora-frontend/uploads/thumbnails/20x20/',
width: 20,
height: 20
}]
};

// Storage conf for multer
const storage = multer.diskStorage({
destination: function (req, file, callback) {
callback(null, './ozora-frontend/uploads/original');
},
filename: function (req, file, callback) {
let filename = file.originalname.split('.')[0] + '-' + Date.now() + '-' + 'ozora' + path.extname(file.originalname); 
callback(null, filename);
}
});

// Multer function
const upload = multer({
storage : storage,
limits : { fileSize : 3000000 },
fileFilter : (req, file, callback) => { 
const fileTypes = /jpeg|jpg|png|gif/;
const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
const mimetype = fileTypes.test(file.mimetype);
if(mimetype && extname) {
return callback(null, true); 
} else {
return callback(new Error('Uploaded file was not an image!'), false);
}
}
}).array('images', 9);

// Saves and Resizes images
module.exports.image = function(req,res) {
upload(req, res, (err) => {
if(err){
console.log(err);
res.json({ success : false, message : err, data : null });
}
else {
if(!req.files){
res.json({ success : false, message : 'Please select a file first!', data : null });
}
else { 
console.log('Files received!');
let images = [];

// Function for resizing and saving in DB
async function ops(){
for(let i = 0; i < req.files.length; i++) {
let file = req.files[i];
const newImage = new Image({ name : file.filename, size : file.size });
try {
const image = await newImage.save();
const resized = await resizer(file.path, setup);
await images.push(image.name); 
}
catch {
console.log(err);
}
}};
ops().then(() => {
console.log(images);
res.json({ success : true, message : "We've saved your file(s) on the blockchain!", data : images }); 
})
.catch((err) => {
console.log(err);
})
}
}
}); 
};