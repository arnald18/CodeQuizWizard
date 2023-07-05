var startButton = document.querySelector("#start-button");
var startContainer = document.querySelector("#container-start");
var questionContainer = document.querySelector("#question-container");
// start the quiz when we click start

function startGame() {
  // get rid of start screen
  startContainer.style.display = "none";
  // start showing questions
  let numberOfQuestions = questions.length;
  for (let index = 0; index < numberOfQuestions; index++) {}
}

startButton.addEventListener("click", startGame);
