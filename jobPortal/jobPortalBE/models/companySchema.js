const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const Job = require('./jobSchema');


const companySchema = new Schema({
    company_title: {
        type: String,
    },
    company_type: {
         type: String
    },
    year_founded: {
        type : Number
    },
    size: {
        type : Number
    },
    website: {
        type : String
    },
    description: {
        type : String
    },
    UIN: {
        type : String,
        required: true
    },
    password: {
        type:String,
        required : true
    },
    domain: {
        type : String
    },
    jobs: [{ 
        type : Schema.Types.ObjectId,
        ref:'Job'
    }],
},
    {
    timestamps: true
})


companySchema.pre('save', function(next){
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

module.exports = mongoose.model('Company',companySchema);
