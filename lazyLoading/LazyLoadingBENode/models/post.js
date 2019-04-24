const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Comment Schema


const postSchema = new Schema(
    {
        title : String,
        Description : String,
        imageURL : String        
    },
    {
        timestamps: true
    }
)



module.exports = mongoose.model('rnPost',postSchema);