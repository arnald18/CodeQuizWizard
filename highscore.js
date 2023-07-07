var back = document.querySelector("#back");

var scoreForm = document.createElement("form");

var initials = document.createElement("input");
var container = document.querySelector("#container");
var initialsLabel = document.createElement("label");
var currentScores;

function displayScores() {
  container.innerHTML = "";
  currentScores = JSON.parse(localStorage.getItem("scores"));
  let scoresList = document.createElement("ol");
  for (var i = 0; i < currentScores.length; i++) {
    let scoreItem = document.createElement("li");

    let scoreInitials = document.createElement("h3");
    scoreInitials.textContent = currentScores[i].initials;

    let scoreScores = document.createElement("p");
    scoreScores.textContent = currentScores[i].score;

    scoreItem.appendChild(scoreInitials);
    scoreItem.appendChild(scoreScores);

    scoresList.appendChild(scoreItem);
  }

  container.appendChild(scoresList);
}

function saveScore(event) {
  // save scores
  event.preventDefault();

  currentScores = localStorage.getItem("scores");
  if (currentScores === null) {
    currentScores = [];
  } else {
    currentScores = JSON.parse(currentScores);
  }

  let storedScore = JSON.parse(localStorage.getItem("new-score"));

  let newScore = {
    initials: initials.value.trim(),
    score: storedScore,
  };
  //   sorting scores
  currentScores.push(newScore);

  currentScores = currentScores.sort(function (a, b) {
    return b.score - a.score;
  });

  localStorage.setItem("scores", JSON.stringify(currentScores));

  displayScores();
}

function getScore() {
  // enter your initials
  // input

  initials.setAttribute("type", "text");
  initials.setAttribute("name", "initials");
  initials.setAttribute("id", "initials");

  initialsLabel.setAttribute("for", "initials");
  initialsLabel.setAttribute("id", "initials-label");
  initialsLabel.textContent = "Enter initials";

  scoreForm.appendChild(initialsLabel);

  scoreForm.appendChild(initials);
  container.appendChild(scoreForm);
}
if (JSON.parse(localStorage.getItem("new-score")) !== -1) {
  getScore();
} else {
  displayScores();
}

scoreForm.addEventListener("submit", saveScore);

back.addEventListener("click", function () {
  window.location.href = "index.html";
});
