
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
    question: {
                type : String,
                required: true
    },
    options:{

    },
    answer:{

    }
},{
    timestamps : true
})



module.exports = mongoose.model('Question',QuestionSchema);
