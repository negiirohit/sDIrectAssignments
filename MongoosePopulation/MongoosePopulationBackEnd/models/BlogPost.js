const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  
  content :{
    type:String
  }

});

module.exports.BlogPost = mongoose.model('BlogPost',BlogPostSchema);
