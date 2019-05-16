const Question = require('../models/question');


//get question
module.exports.getQuestion = (req, res, next ) => {
    let no = parseInt(req.params.qno);
    console.log("number",no);
    Question.find({})
    .skip(no)
    .limit(1)
    .then( questions =>{
        res.json({
            success: true,
            message: 'question fetched ',
            data : {question : questions[0]}
        });
    })
}

//Get total no of questions
module.exports.getQuestionCount = (req, res, next ) =>{
    Question.count()
    .then( count =>{
        res.json({
            success: true,
            message: 'question count  ',
            data : {count : count}
        });
    } )
    .catch(err =>{
        console.log("err :",err);
    })
}

