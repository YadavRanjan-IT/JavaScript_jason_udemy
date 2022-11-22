"use strict";

/* document.querySelector(".number").textContent = 15;
document.querySelector(".check_number").textContent = "Correct Answer! 🎉";
 */

/* document.querySelector(".guess").value = 1222; */

let msg = document.querySelector(".check_number");

let rand_num = Math.trunc(Math.random() * 20 + 1);
console.log(rand_num);

let score = 20;
document.querySelector(".score").textContent = score;

let highScore = 0;

function message(msg) {
  return (document.querySelector(".check_number").textContent = msg);
}

document.querySelector(".btn_check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  //When there is wrong input empty or 0
  if (!guess) {
    message("No Number!⛔️");

    //When Player wins
  } else if (guess === rand_num) {
    document.querySelector(".number").textContent = rand_num;
    message(" 🎉 Correct Guess!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is
  } else if (guess !== rand_num) {
    if (score > 1) {
      message(guess > rand_num ? "📈 Too high" : "📈 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      message("You Lost the game! 🤬");
    }
  }
});

document.querySelector(".btn_again").addEventListener("click", () => {
  message("Restarted the game");
  document.querySelector("body").style.backgroundColor = "#ada4a4";

  document.querySelector(".number").style.width = "auto";
  score = 20;
  document.querySelector(".number").textContent = "?";
  rand_num = Math.trunc(Math.random() * 20 + 1);
  console.log(rand_num);
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
});
