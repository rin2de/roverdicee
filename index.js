// first dicee
var randomNumber1= Math.floor(Math.random() * 6 ) + 1;

var randomImage1 = "pic" +randomNumber1+ ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


// second dicee
var randomNumber2= Math.floor(Math.random() *6) +1;

var randomImage2= "pic" +randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);



// condition

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "Congrats Master!";
  document.querySelector("h2").innerHTML= "You Win!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML= "Congrats Blaster!";
  document.querySelector("h2").innerHTML= "You Win!";
}
else {
  document.querySelector("h1").innerHTML= "Hey Master Blaster!";
  document.querySelector("h2").innerHTML= "Its a Draw!";
}
