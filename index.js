// Check if the page has been reloaded
if (sessionStorage.getItem("reloaded") === "true") {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "./images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

  document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage);
  document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

  console.log(randomNumber1 + " " + randomNumber2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
} else {
  // Set the original h1 text
  document.querySelector("h1").innerHTML = "Refresh Me";
}

// Set the session storage item to indicate the page has been reloaded
sessionStorage.setItem("reloaded", "true");
