const questions = [
    {
        question: "Qual o nome completo de Ryan Gosling",
        answers: [
            {text: "Ryan Wakanda Gosling", correct: false},
            {text: "Ryan Thomas Gosling", correct: true},
            {text: "Ryan Mustafah Gosling", correct: false},
        ]
    },
    {
        question: "De qual país é Ryan Gosling",
        answers: [
            {text: "Canada", correct: true},
            {text: "Brasil", correct: false},
            {text: "África do Sul", correct: false},
        ]
    },
    {
        question: "Em que ano começou a carreira de Ryan Gosling",
        answers: [
            {text: "2005", correct: false},
            {text: "1999", correct: false},
            {text: "1993", correct: true},
        ]
    },
    {
        question: "Qual o nome do filme em que o protagonista, um piloto de carros é interpretado por Ryan Gosling",
        answers: [
            {text: "Barbie", correct: false},
            {text: "Drive", correct: true},
            {text: "La La Land", correct: false},
        ]
    },
    {
        question: "Em Blade Runner 2049 qual o nome do protagonista, personagem interpretado por Ryan Gosling ",
        answers: [
            {text: "O Blade Runner", correct: false},
            {text: "Agente Y", correct: false},
            {text: "Agente K", correct: true},
        ]
    },
    {
        question: "Em Barbie qual o personagem interpretado por Ryan Gosling",
        answers: [
            {text: "Barbie", correct: false},
            {text: "Bob", correct: false},
            {text: "Ken", correct: true},
        ]
    },
    {
        question: "Qual a altura de Ryan Gosling",
        answers: [
            {text: "2,10m", correct: false},
            {text: "1,85m", correct: true},
            {text: "1,90m", correct: false},
        ]
    },
    {
        question: "Qual o nome da atriz casada com Ryan Gosling",
        answers: [
            {text: "Emma Stone", correct: false},
            {text: "Eva Mendes", correct: true},
            {text: "Ana de Armas", correct: false},
        ]
    },
    {
        question: "Em que ano nasceu Ryan Gosling",
        answers: [
            {text: "1984", correct: false},
            {text: "1990", correct: false},
            {text: "1980", correct: true},
        ]
    },
    {
        question: "Em quantos filmes atuou Ryan Gosling",
        answers: [
            {text: "25", correct: false},
            {text: "3", correct: false},
            {text: "50", correct: true},
        ]
    },
    {
        question: "Qual o nome do filme que injustamente perdeu o oscar de melhor filme onde o ator principal era Ryan Gosling",
        answers: [
            {text: "Blade Runner 2049", correct: false},
            {text: "La La Land", correct: true},
            {text: "Drive", correct: false},
        ]
    }
];

const ryanspics = [ 
    `<img id= "ibagem"src= "ryan-gosling01.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling02.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling03.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling04.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling05.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling06.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling07.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling08.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling09.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling10.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling11.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling12.jpg"></img>`,
    `<img id= "ibagem"src= "ryan-gosling13.jpg"></img>`

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const iniciar = document.getElementById("iniciar");
const ryans = document.getElementById("ryan");

let currentQuestionIndex = 0;
let score = 0;
let ryanese = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    ryanese = 1;
    ryans.innerHTML = ryanspics[ryanese];
    nextButton.innerHTML = "Próxima";
    showQuestion();
    iniciar.style.display = "none";
    quiz.style.display = "block";

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
        
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    ryanese++;
    
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acerto ${score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
   currentQuestionIndex++;
   ryans.innerHTML = ryanspics[ryanese];
   if(currentQuestionIndex < questions.length){
    showQuestion();
   } else {
    showScore();
   }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

/*
startQuiz();
*/
