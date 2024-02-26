const questions = [
  {
    question : "Which is the Lagest Animal in the World?",
    answers:[
      {text:"Blue Whale", correct : true},
      {text:"Lion", correct : false},
      {text:"Giraff", correct : false},
      {text:"Elephant", correct : false},
    ]
  },
  {
    question : "Which is the Tallest Animal in the World?",
    answers:[
      {text:"Shark", correct : false},
      {text:"Lion", correct : false},
      {text:"Giraff", correct : true},
      {text:"Elephant", correct : false},
    ]
  },
]
const ques = document.querySelector('#question');
const ans = document.querySelector('#answerbuttons');
const next = document.querySelector('#next');
let currentindex = 0;
let score = 0;
function startGame(){
  currentindex = 0;
  score = 0;
  next.innerHTML = 'Next';
  showQuestions();
}

function showQuestions(){
  resetState();
  let cq = questions[currentindex];
  let qn = currentindex+1;
  ques.innerHTML = qn + '. '+cq.question;  
  cq.answers.forEach(answer =>{
    const btn = document.createElement('button');
    btn.innerText = answer.text
    btn.classList.add('btn');
    ans.appendChild(btn);
    if(answer.correct){
      btn.dataset.correct = answer.correct
    }
    btn.addEventListener('click', selectAnswer)
  })
}
function resetState(){
  next.style.display = "none";
  while(ans.firstChild){
    ans.removeChild(ans.firstChild);
  }
}

function selectAnswer(e){
  const selectbtn = e.target;
  const isCorrect = selectbtn.dataset.correct;
  if(isCorrect){
    selectbtn.classList.add('correct')
    score++;
  }
  else{
    selectbtn.classList.add('incorrect')
  }
  Array.from(ans.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add('correct');
      }
      button.disabled = true;
      next.style.display = "block"
  })
}
function showScore(){
resetState()
ques.innerHTML = `You Scored ${score} out if ${questions.length}`
next.innerHTML = "Play again"
next.style.display ="block"
}

function handleNext(){
  currentindex++;
  if(currentindex<questions.length){
    showQuestions();

  }
  else{
    showScore();


}
}
next.addEventListener("click" , ()=>{
  if(currentindex<questions.length){
    handleNext();
  }
  else{
    startGame();
  }
})


startGame();