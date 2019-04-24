const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  Author:{
      type: Schema.Types.ObjectId,
      Path:'User'
  },
  content :{
    type:String
  }

});

module.exports.Post = mongoose.model('Post',postSchema);
