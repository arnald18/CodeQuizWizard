var startButton = document.querySelector("#start-button");
var startContainer = document.querySelector("#container-start");
var questionContainer = document.querySelector("#question-container");
// start the quiz when we click start

function startGame() {
  // get rid of start screen
  startContainer.style.display = "none";
  // start showing questions
  let numberOfQuestions = questions.length;

  for (let index = 0; index < numberOfQuestions; index++) {
    // get current question
    let currentQuestion = questions[index];

    //  set the text of the question
    let questionTextEl = document.createElement("h2");
    questionTextEl.textContent = currentQuestion.text;

    questionContainer.appendChild(questionTextEl);

    // create the answer list//
    let answersUl = document.createElement("ul");

    // add answers to the answer list
    for (let a = 0; a < currentQuestion.answers.length; a++) {
      // create answer list item
      let answerLi = document.createElement("li");

      //   set the text of answer
      answerLi.textContent = currentQuestion.answers[a];
      // add answer list item to answers list
      answersUl.appendChild(answerLi);
    }

    // add children to parent container
    questionContainer.appendChild(questionTextEl);

    questionContainer.appendChild(answersUl);
  }
}

startButton.addEventListener("click", startGame);
