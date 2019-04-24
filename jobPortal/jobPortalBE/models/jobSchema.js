const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    post:String,
    location:String,
    description:String,
    requiredSkills:String,
    provider: {
        type : Schema.Types.ObjectId,
        ref : 'JobProviderUser'
    }
})

module.exports = mongoose.model('Job',jobSchema);
