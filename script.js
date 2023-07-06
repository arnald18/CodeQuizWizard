var startButton = document.querySelector("#start-button");
var startContainer = document.querySelector("#container-start");
var questionContainer = document.querySelector("#question-container");
// start the quiz when we click start

var questionResult = document.querySelector("#question-results");
var timerElement = document.querySelector_("#timer");

var currentIndex;
var timer;
var timeLeft;

function startTimer() {
  timeLeft = 60;

  timer = setInterval(function () {}, 1000);
}

function showQuestion() {
  questionContainer.innerHTML = "";
  // get current question
  let currentQuestion = questions[currentIndex];

  //  set the text of the question
  let questionTextEl = document.createElement("h2");
  questionTextEl.textContent = currentQuestion.text;

  questionContainer.appendChild(questionTextEl);

  // create the answer list//
  let answersUl = document.createElement("ul");

  // add answers to the answer list
  for (let a = 0; a < currentQuestion.answers.length; a++) {
    // create answer list item
    let answerButton = document.createElement("button");

    //   set the text of answer
    answerButton.textContent = currentQuestion.answers[a];
    // add answer list item to answers list
    answersUl.appendChild(answerButton);
  }

  // add children to parent container
  questionContainer.appendChild(questionTextEl);

  questionContainer.appendChild(answersUl);
}

function startGame() {
  // get rid of start screen
  startContainer.style.display = "none";
  // start showing questions

  currentIndex = 0;
  showQuestion();
}

startButton.addEventListener("click", startGame);
questionContainer.addEventListener("click", function (event) {
  // get element that was clicked
  let element = event.target;

  // check if we clicked on a
  if (element.matches("button")) {
    if (element.textContent === questions[currentIndex].correctAnswer) {
      questionResult.textContent = "correct";
    } else {
      questionResult.textContent = "incorrect";
    }

    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      // go to the highscore screen
      window.location.href = "./highscores.html";
    }
  }
});

// create a highscore page
