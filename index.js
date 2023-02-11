var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var DiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var ImageSource = "images/" + DiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ImageSource);
//var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var DiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var ImageSource = "images/" + DiceImage; //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ImageSource);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 win";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 win";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
