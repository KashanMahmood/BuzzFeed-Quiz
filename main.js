var numQuestions = 0;

$.getJSON("data.json", function(data) {
   
    
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = data.title;
    title.style.backgroundImage = `url('${data.title_img}')`;
    document.body.appendChild(title);


    (data.questions).map(function(question){
        numQuestions += 1;


        // Create a new section div and set its class to
        const newSection = document.createElement("div");
        newSection.classList.add("section");
        
        // Create a new question div object and set class to "question"
        const newQuestion = document.createElement("div");
        newQuestion.classList.add("question");
        newQuestion.innerHTML =  `<div>${question.question_name}</div>`;
        
        
        const answers = document.createElement("div");
        answers.classList.add("answers");

        
        (question.answers).map(function(answer){
            
            console.log(answer);
            const currAnswer = document.createElement("label");
            currAnswer.classList.add("answer");
            currAnswer.innerHTML = `<div class= "labelText" >${answer.text}</div>  <input type="radio" value=${answer.value} class="answerInput" />` ;
            currAnswer.style.backgroundImage = `url('${answer.img_url}')`;
            currAnswer.style.backgroundSize = `cover`;
            answers.appendChild(currAnswer)
            
        });

        newSection.appendChild(newQuestion);
        newSection.appendChild(answers);
        

        
        document.body.appendChild(newSection);

        console.log(newSection);
        console.log(newQuestion);
    });
    
    const button = document.createElement("div");
    button.classList.add("button");
    button.innerHTML = ` <button id="doneButton" type="button">Submit Answers</button>`;
    document.body.appendChild(button);

});

// Why does this not work anymore bruhhhhhh

$('body').on('click', '.answer', function() {
     
    
    $('input[type="radio"]:checked').each(function() {

        console.log("HEHE")

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



