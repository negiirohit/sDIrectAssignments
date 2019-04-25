const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');



const JobSeeker = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
         type: String
    },
    email: {
        type : String,
        required: true
    },
    password: {
        type:String,
        required : true
    },
    age: {
        type:Number
    },
    profile: {
        domain : String,
        keySkills : [String],
        qualifications : {
            
                HighSchool :{
                    year : Number,
                    board :String,
                    subjects :String,
                    percentage : Number
                },
                InterMediate : {
                    year : Number,
                    board :String,
                    subjects :String,
                    percentage : Number
               },
               Graduation : {
                    year : Number,
                    university :String,
                    course :String,
                    percentage : Number
               }, 
               PG: {
                    year : Number,
                    university :String,
                    course :String,
                    percentage : Number  
                }
        }
    },
    appliedJobs : [{
        type : Schema.Types.ObjectId,
        ref : 'Job'
    }]
},
{
    timestamps: true
})


JobSeeker.pre('save', function(next){
    console.log('Inside pre hook this :' +JSON.stringify(this));
    let user = this;
    console.log('user :' +JSON.stringify(user));
    if(!user.isModified('password')) {
        return next();
    }

    bcrypt.hash(this.password, 10, (err, hash) => {
    if(err) {
        console.log(err);
    }
    else {
            user.password = hash;
            next();
    }
    })
});

module.exports = mongoose.model('JobSeeker',JobSeeker);

