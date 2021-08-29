AFRAME.registerComponent("game", {
  schema: {
    elementId: {
      type: "string",
      default: "#coin1",
    },
  },
  init: function () {
    let duration = 120;
    let timer = document.querySelector("#timer");
    this.startTimer(duration, timer);
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },
  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    console.log(element);
    element.addEventListener("collide", (e) => {
      console.log(e.target);
      if (elementId.includes("#coin")) {
        this.updateScore();
        this.updateTargets();
        element.setAttribute("visible", false);
        console.log("hello");
      } else {
        this.gameOver();
        console.log("over");
      }
    });
  },
  startTimer: function (duration, timer) {
    let minutes;
    let seconds;
    setInterval(() => {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);
        minutes = "0" + minutes;
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        timer.setAttribute("text", { value: `${minutes}:${seconds}` });
        duration -= 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },
  updateTargets: function () {
    let target = document.querySelector("#targets");
    let count = target.getAttribute("text").value;
    let currentTarget = parseInt(count);
    currentTarget -= 1;
    target.setAttribute("text", { value: currentTarget });
  },
  updateScore: function () {
    let score = document.querySelector("#score");
    let count = score.getAttribute("text").value;
    let currentScore = parseInt(count);
    currentScore += 1;
    score.setAttribute("text", { value: currentScore });
  },
  gameOver: function () {
    let diver = document.querySelector("#diver");
    let gameOverText = document.querySelector("#gameOverText");
    gameOverText.setAttribute("visible", true);
    diver.setAttribute("dynamic-body", { mass: 10 });
  },
});
