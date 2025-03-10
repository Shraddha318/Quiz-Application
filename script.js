document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const resultContainer = document.getElementById('result-container');
    const choicesList = document.getElementById('choices-list');
    const scoreDisplay = document.getElementById('score');

    const questions = [
        {
            question: "What is the capital of India?",
            choices: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
            correctAnswer: "Delhi"
        },
        {
            question:"What is 2 + 2?",
            choices:["3","4","5","6"],
            correctAnswer:"4"
        },
        {
            question:"Which planet is known as the Red Planet?",
            choices:["Earth","Mars","Jupiter","Saturn"],
            correctAnswer:"Mars"
        },
        {
            question:"Who wrote the play 'Romeo and Juliet'?",
            choices:["William Shakespeare","Mark Twain","Jane Austen","Charles Dickens"],
            correctAnswer:"William Shakespeare"
        },
        {
            question:"What is the boiling point of water at sea level (in °C)?",
            choices:["90°C","100°C","110°C","120°C"],
            correctAnswer:"100°C"
        },
        {
            question:"Which gas do plants primarily absorb for photosynthesis?",
            choices:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
            correctAnswer:"Carbon Dioxide"
        },
        {
            question:"What is the largest planet in our solar system?",
            choices:["Earth","Jupiter","Saturn","Neptune"],
            correctAnswer:"Jupiter"
        },
        {
            question:"Who discovered gravity?",
            choices:["Albert Einstein","Isaac Newton","Galileo Galilei","Nikola Tesla"],
            correctAnswer:"Isaac Newton"
        },
        {
            question:"What is the chemical symbol for gold?",
            choices:["Au","Ag","Gd","Go"],
            correctAnswer:"Au"
        },
        {
            question:"In which year did India gain independence?",
            choices:["1945","1947","1950","1952"],
            correctAnswer:"1947"
        }
    ];

    let currentQuestionIndex =0;
    let score=0;

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        currentQuestionIndex=0;
        score=0;
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add('hidden');
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent=currentQuestion.question;
        choicesList.innerHTML=""; // clear previous choices

        currentQuestion.choices.forEach(choice=>{
            const li=document.createElement('li');
            li.textContent=choice;
            li.addEventListener('click',()=>{
                selectAnswer(choice);
            });
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice){
        const correctAnswer=questions[currentQuestionIndex].correctAnswer;
        if(choice===correctAnswer){
            score++;
        }

        nextBtn.classList.remove('hidden');
    }

    function nextQuestion(){
        currentQuestionIndex++;

        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            showResult();
        }
    }

    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent=`Your Score is ${score}/${questions.length}`;
    }

    function restartQuiz(){
        resultContainer.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }
});
