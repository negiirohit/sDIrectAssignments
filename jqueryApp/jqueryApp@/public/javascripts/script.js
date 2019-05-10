let count = 0;
let total = 0;
let rightAns = 0;
let wrongAns = 0;
let ques = { question : 'Test Question',
            options:[ 'option0','option1','option2','option3' ] };



$(document).ready(function(){
    //  $('#next-btn').click( ()=>{
            // console.log("check");
            // //  if(checkAns){
                // //  rightAns++;
            // //  }
            // //  else{
                // //  wrongAns++;
            // //  }
            // //  getNextQues();
    //  });

    $('#question').html(ques.question);
    $('#option0').html(ques.options[0]);
    $('#option1').html(ques.options[1]);
    $('#option2').html(ques.options[2]);
    $('#option3').html(ques.options[3]);

    $('input:radio[name=option]'+" #"+option0).attr('value',ques.options[0]);
    $('input:radio[name=option]'+" #"+option1).attr('value',ques.options[1]);
    $('input:radio[name=option]'+" #"+option2).attr('value',ques.options[2]);
    $('input:radio[name=option]'+" #"+option3).attr('value',ques.options[3]);
    

    $("input[type='button']").click(function(){
        
                    var radioValue = $("input[name='option']:checked").val();
                    if(radioValue){
                        alert("Your are a - " + radioValue);
                    }
                });
  });


function goToTest(){
    console.log("got to test");
}

function checkAns(){
            if($('#options').value==ques.answer){
                return true;
            }
            return false;
}

function getNextQues(){
    $.getJSON('/getQuestion/'+quesCount, {}, function (res, textStatus, jqXHR){
            if(res.success=='true'){
                ques=res.data;
            }
    });
    $('#question').html(ques.question);
    $('#option0').html(ques.options[0]);
    $('#option1').html(ques.options[1]);
    $('#option2').html(ques.options[2]);
    $('#option3').html(ques.options[3]);
}
