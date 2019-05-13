const url = 'http://localhost:3000/';
let totalQuestions ;

let count = 0;
let total = 0;
let rightAns = 0;
let wrongAns = 0;
let qno = 0;
let ques;

$(document).ready(function(){

    $('#user-form-div').show();    
    $('#result-div').hide();        
    $('#question-div').hide();

    $('#start-btn').click(function(){
        $('#user-form-div').hide(); 
        startQuiz();
    })
    
    //get Total Questions
    function getQuestionCount(){
        $.getJSON(url+'questions/count', {}, function (res, textStatus, jqXHR){
            totalQuestions =  res.data.count;
            console.log("total questions: ",totalQuestions);
            getNextQuestion();
        });
    }

    $('#next-btn').click(function(){
        getNextQuestion();
    })
    

    //get next question 
    function getNextQuestion(){
        console.log("fetching next question");
        if(qno>0){
            
            let selectedValue = $("input[name='option']:checked").val();
            if(selectedValue==ques.answer){
                rightAns++;
            } else {
                wrongAns++;
            }
        }
        console.log("rigth : "+rightAns);
        console.log("wrong : "+wrongAns);

        if(qno<totalQuestions){
            $('#question-div').hide();            
            console.log("getting next question ",qno);

            $.getJSON(url+'questions/question/'+qno, {}, function (res, textStatus, jqXHR){
                
                ques = res.data.question;
                $('#question').html(ques.question);
                $('#option0').html(ques.options[0]);
                $('#option1').html(ques.options[1]);
                $('#option2').html(ques.options[2]);
                $('#option3').html(ques.options[3]); 
                $('#option0Input').val(ques.options[0]);
                $('#option1Input').val(ques.options[1]);
                $('#option2Input').val(ques.options[2]);
                $('#option3Input').val(ques.options[3]);                
                $('#question-div').show();
                qno++;
                if(qno==totalQuestions-1){
                    $('#next-btn').val('submit');
                }
            });    
        } else{
            console.log("submit test");
            submit();
        }
    }

    //Start Quiz
    function startQuiz(){
        $('#user-form-div').hide();
        getQuestionCount();
    }

    function submit(){
        $('#question-div').hide();
        let p1= document.createElement('p');
        p1.innerHTML = 'Right Answers : '+rightAns
        let p2= document.createElement('p');
        p2.innerHTML = 'Wrong Answers : '+wrongAns
        let p3= document.createElement('p');
        p3.innerHTML = 'Total Question : '+totalQuestions
        $('#result-div').append(p1,p2,p3);
        $('#result-div').show();       
    }
})
