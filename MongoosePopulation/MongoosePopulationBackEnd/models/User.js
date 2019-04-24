const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Post = require('../models/Post');
var BlogPost = require('../models/BlogPost');

var deepPopulate = require('mongoose-deep-populate')(mongoose);

const User = new Schema({

      	 username: {
            type: String,
          },
          friends:[{ type : Schema.Types.ObjectId , ref :'User'}],  
          post:[ { type : Schema.Types.ObjectId, ref: 'Post'}],
          onPost:{
            type: String
          },
          onFriend:{
            type: String
          }
          // post: [{
          //   kind: String,
          //   item: { type: ObjectId, refPath: 'connections.kind' }
          // }]
             
          // { type : Schema.Types.ObjectId, ref: 'onModel'},
          // onModel: {
          //   type: String,
          //   required: true,
          //   enum: ['Post','BlogPost']
          // },
      
	
},{ timestamps: true});



//  User.pre('find', function() {
//    console.log("pre");
//    this.populate('post');
//    this.populate('friends');
//  });
//  User.plugin(require('mongoose-autopopulate'));
User.plugin(deepPopulate,  {populate: {
  'friends.friends.friends': {
    select: 'username',
    options: {
      limit: 5
    }
  }
}});
// User.pre('find', function(){

// })
module.exports = mongoose.model('User',User);
