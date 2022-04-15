var numQuestions = 0;
var scoreTracker =[];

$.getJSON("data.json", function(data) {
   
    
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = data.title;
    title.style.backgroundImage = `url('${data.title_img}')`;
    document.body.appendChild(title);


    (data.questions).map(function(question){
        
        //keep track of the num of questions
        numQuestions += 1;

        // Create a new section div and set its class to
        const newSection = document.createElement("div");
        newSection.classList.add("section");
        
        // Create a new question div object and set class to "question"
        const newQuestion = document.createElement("div");
        newQuestion.classList.add("question");
        newQuestion.innerHTML =  `<div class= "ques">${question.question_name}</div>`;
        newQuestion.style.backgroundImage = `url('${question.question_img_url}')`;
        newQuestion.style.backgroundSize = `cover`;
        
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

    for (i=0; i< (data.outcomes).length; ++i){
        scoreTracker[i]=0;
    }
    
    // citing modal code: https://www.w3schools.com/howto/howto_css_modals.asp
    const submit = document.createElement("div");
    submit.classList.add("submit");
    
    submit.innerHTML = ` <button id="myBtn">Submit Answers</button>`;
    
    // modal

    const modal= document.createElement("div");
    modal.classList.add("modal");
    modal.id= "myModal";
    modal.style.display = "none";

    // modal contant
    const content= document.createElement("div");
    content.classList.add("modCont");
    content.innerHTML = `<span class="close">&times;</span> <img id="result-img" src="" /> <div id="result-text" />`;

    modal.appendChild(content);
    submit.appendChild(modal);
    document.body.appendChild(submit);

});



$(document).on('click', ".answer", (e) => {
    let element = e.target;
    
    if (element.tagName != "LABEL"){
        element = element.parentElement;
    }
    
    $(element).removeClass('unChecked');
    $(element).addClass('checked');


    $(element).siblings().each(function(){

        $(this).addClass('unChecked');
        $(this).removeClass('checked');
    });

});

// citing modal code: https://www.w3schools.com/howto/howto_css_modals.asp

$(document).on('click', "#myBtn", function() {


    $('input[type=radio]:checked').map(function(i ,radio) {
        scoreTracker[radio.value]+= 1;
    });

    
    if ($(`.checked`).length == numQuestions){
        $('input[type=radio]:checked').map(function(i ,radio) {
            scoreTracker[radio.value]+= 1;
        });
    
        const max = Math.max.apply(Math,scoreTracker);
        console.log(scoreTracker);
        console.log(max);
        const maxIndex = scoreTracker.indexOf(max);
        var image;

        $.getJSON("data.json", function(data) {
            image = data.outcomes[maxIndex];
            
            document.getElementById("result-img").src = image.img;
            document.getElementById("result-text").innerHTML = image.text
        });        
        
    }
    else{

        document.getElementById("result-img").src = "img/ohno.jpeg";
        document.getElementById("result-text").innerHTML = "Please answer all questions!"
    }

  

    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.color = "black";



});

$(document).on('click', ".close", function() {
    document.getElementById("myModal").style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }

}



