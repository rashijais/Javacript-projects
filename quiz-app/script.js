const questions= [
    {
         "question":"What is the color of sky?",
         "answers":[
             {"text":"Blue","correct":"true"},
             {"text":"Pink","correct":"false"},
             {"text":"Yellow","correct":"false"},
             {"text":"Red","correct":"false"}
         ]
    },
    {
     "question":"What is the capital of India?",
     "answers":[
         {"text":"Rajsthan","correct":"false"},
         {"text":"Chennai","correct":"false"},
         {"text":"New Delhi","correct":"true"},
         {"text":"Uttar Pradesh","correct":"false"}
     ]
     },
     {
         "question":"Who is the current PM of India?",
         "answers":[
             {"text":"Rahul Gandhi","correct":"false"},
             {"text":"Narendra Modi","correct":"true"},
             {"text":"Valabhai Patel","correct":"false"},
             {"text":"Raju ","correct":"false"}
         ]
    },
    {
     "question":"Where is the Taj Mahal located?",
     "answers":[
         {"text":"Bihar","correct":"false"},
         {"text":"Delhi","correct":"false"},
         {"text":"Hyderabad","correct":"false"},
         {"text":"Agra","correct":"true"}
     ]
 }
 ];

 const question = document.getElementById("question");
 const options = document.getElementById("options");
 const next = document.getElementById("next");
 
 let currentQuestionIndex = 0;
 let score = 0;
 
 function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     next.innerHTML = "Next";
     showQuestion();
     next.addEventListener("click",nextQuestion);
 }
 
 function showQuestion() {
     if (currentQuestionIndex >= questions.length) {
         displayScore();
         return;
     }
 
     let currentQuestion = questions[currentQuestionIndex];
     question.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
     options.innerHTML = '';
 
     currentQuestion.answers.forEach(ans => {
         const btnOp = document.createElement("button");
         btnOp.innerHTML = ans.text;
         btnOp.classList.add("btn");
         btnOp.onclick = () => checkAnswer(ans.correct, btnOp);
         options.appendChild(btnOp);
     });
 }
 
 function checkAnswer(isCorrect, btnOp) {
     const allButtons = options.querySelectorAll('button');
     allButtons.forEach(button => {
         button.disabled = true; 
         button.style.cursor="not-allowed";
         if (button.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct === "true").text) {
             button.style.backgroundColor = 'green'; 
         } 
     });
     if (isCorrect === "true") {
         score++;
         btnOp.style.backgroundColor = 'green';
     } else {
         btnOp.style.backgroundColor = 'red';
     }
 }
 
 function nextQuestion() {
     currentQuestionIndex++;
     showQuestion();
 }
 
 function displayScore() {
     question.innerHTML = `You scored ${score} out of ${questions.length}.`;
     options.innerHTML = '';
     next.innerHTML = "Restart Quiz";
     next.addEventListener("click",startQuiz)
 }
 
 startQuiz();