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

    $('#user-form').submit(function( event ) {
        event.preventDefault()
        startQuiz();
    });

    $('#next-btn').click(function(){
        getNextQuestion();
    })   
})


//Start Quiz
function startQuiz(){
    $('#user-form-div').hide();
    getQuestionCount();
    startTimer();
}

//get Total Questions
function getQuestionCount(){
   $.getJSON(url+'questions/count', {}, function (res, textStatus, jqXHR){
       totalQuestions =  res.data.count;
       console.log("total questions: ",totalQuestions);
       let div=document.createElement('div');
       for(let i=0;i<totalQuestions;i++){
           let button = document.createElement('button');
           button.className = 'marker';
           button.innerHTML = i+1;
           button.setAttribute('id','marker'+i);
           div.appendChild(button);
       }
       $('#question-div').prepend(div);
       $('.marker').click(function(){
               let qnum = this.innerHTML-1;
               getQuestion(qnum);
       })
       getNextQuestion();
   });
}



//get next question 
function getNextQuestion(){
    console.log("fetching next question");
    
    //progress bar
    let width = ((qno+1)*100)/totalQuestions;
    $('#myBar').css("width",width + '%'); 
    $('#myBar').html(qno+1+'/'+totalQuestions);
    //


    if(qno>0){
        
        let selectedValue = $("input[name='option']:checked").val();
        if(selectedValue==ques.answer){
            rightAns++;
        } else {
            wrongAns++;
        }
        $('input[name="option"]').prop('checked', false);
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



    $('input[name="option"]').click(function(){
        $('marker'+qno).css("background-color","green");
    })
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




function startTimer(){
    count = 150;
    let timer = setInterval(function(){
        count--;
        let min = parseInt(count/60) ;
        let sec = count%60;
        if(count==75){
            $('#myBar').css("background-color",'yellow'); 
        }
        if(count==20){
            $('#myBar').css("background-color",'red'); 
        }
        $('#timer').html(min + ' min : ' + sec +'sec');
        console.log(' count: ',count);
        if(count<0){
            clearInterval(timer);
            submit();
        }
    },1000)
}


function getQuestion(qnum){
    //qno = qnum;
    if(qnum)
        qno=qnum;
    else
        qno++;
 
    $.getJSON(url+'questions/question/'+qnum, {}, function (res, textStatus, jqXHR){       
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
        console.log("last question")
        $('next-btn').val('submit');
    }
    });    
}