const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    post:String,
    location:String,
    description:String,
    requiredSkills:String,
    domain:String,
    salary: String,
    experience : String,
    applicants : [{
        type : Schema.Types.ObjectId,
        ref:'JobSeeker'
    }],
    approvedApplicants : [{
        type : Schema.Types.ObjectId,
        ref:'JobSeeker'
    }],
    provider: {
        type : Schema.Types.ObjectId,
        ref : 'Company'
    }
})

module.exports = mongoose.model('Job',jobSchema);
