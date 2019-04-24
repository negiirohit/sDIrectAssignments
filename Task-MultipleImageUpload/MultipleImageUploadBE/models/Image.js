const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ImageSchema = new Schema(
    {
        originalname:{
            type: String,
        },
        encoding:{
            type: String
        },
        destination:{
            type: String
        },
        size:{
            type: Number,
        },
        path:{
            type: String
        },
        imageURL:{
            type: String
        }
    },
    {
        timestamps: true
    }
)



module.exports = mongoose.model('rnImage',ImageSchema);