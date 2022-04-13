var total= 2;
var numQuestions = 0;

$.getJSON("data.json", function(data) {
 
    // Wrap each question section into a div with class "section"
    // Then in that section create a div class "question" and give it the value of the question name
    // Then create a div class answers:
    //     for each answer of that question,
    //         create a label with class "ansewr"
    //         inside the lab addthe answer Image
    //         create an input putton type radio


    (data.questions).each(function(){
        
        const newSection = document.body.createElement("div").addClass("section");
        const newQuestion = document.body.createElement('div').addClass('question').appendChild( $(this).question_name, $(this).question_img_url );
        const answers = document.body.createElement("div").addClass("answers")

        ($(this).answers).each(function(){
            
            // still need to worry about adding value
            const answer = document.createElement("label").addClass("answer");
            answer.appendChild( $(this).text, $(this).img_url);
            var input = $('<input type="button" value="10" class="answerInput" />');
            input.appendTo(answer)
     
        });
        newSection.appendChild(newQuestion, answers);

    });
});


$('body').on('click', '.answer', function() {

    $('input[type="radio"]:checked').each(function() {

        $(this).parent().siblings().each(function(){
    
            $(this).removeClass('checked');
            $(this).addClass('unChecked');             
        });

        $(this).parent().addClass('checked');
        $(this).parent().removeClass('unChecked');
    
    });

});

$('#doneButton').on('click', function() {
    
     
    console.log("Die Bitch")

});



