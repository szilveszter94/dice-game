function dice_game() {
  // select players
  var player1 = document.getElementsByClassName("img1")[0];
  var player2 = document.getElementsByClassName("img2")[0];
  var title = document.querySelector("h1");
  // create 2 random numbers
  random_dice1 = Math.floor(Math.random() * 6 + 1);
  random_dice2 = Math.floor(Math.random() * 6 + 1);
  // change images based on the numbers
  player1.setAttribute("src", "images/dice" + random_dice1 + ".png");
  player2.setAttribute("src", "images/dice" + random_dice2 + ".png");
  // change title text based on the winner
  if (random_dice1 > random_dice2) {
    title.innerHTML = "Player 1 Wins!";
  }
  else if (random_dice1 < random_dice2)  {
    title.innerHTML = "Player 2 Wins!";
  }
  else {
    title.innerHTML = "It's a draw.";
  }

}
