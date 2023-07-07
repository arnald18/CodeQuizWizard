var startButton = document.querySelector("#start-button");
var startContainer = document.querySelector("#container-start");
var questionContainer = document.querySelector("#question-container");
// start the quiz when we click start

var questionResult = document.querySelector("#question-results");
var timerElement = document.querySelector("#timer");
var viewHighScores = document.querySelector("#high-score");

var currentIndex;
var timer;
var timeLeft = 60;

function navigate() {
  clearInterval(timer);
  localStorage.setItem("new-score", timeLeft);
  window.location.href = "highscores.html";
}

function startTimer() {
  timeLeft = 60;

  timer = setInterval(function () {
    timerElement.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      navigate();
    }
    timeLeft--;
  }, 1000);
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
  startTimer();
  showQuestion();
}

startButton.addEventListener("click", startGame);
questionContainer.addEventListener("click", function (event) {
  // get element that was clicked
  let element = event.target;

  if (element.matches("button")) {
  }

  // check if we clicked on a
  if (element.matches("button")) {
    if (element.textContent === questions[currentIndex].correctAnswer) {
      questionResult.textContent = "correct";
    } else {
      questionResult.textContent = "incorrect";
      timeLeft -= 10;
    }

    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      // go to the highscore screen
      navigate();
    }
  }
});

// create a highscore page
viewHighScores.addEventListener("click", function () {
  clearInterval(timer);
  localStorage.setItem("new-score", -1);
  window.location.href = "highscores.html";
});
