//target.addEventListener( event type , listenerFunction)

///document.querySelector("button").addEventListener("click", handleClick);

// using handleClick() inside eventListener will cause problem
//as soon code executes and hits the listener , the function gets called
//we don't want that
//we want the function to be called only on tap and not when the eventListner is declared

alert("mouse click on button");
alert("or keyboard press w / a / s / d / j / k / l");

function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}

function animateButton(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
}

// for keyboard press
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  makeSound(e.key);
  animateButton(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playSound("sounds/tom-1.mp3");
    case "a":
      playSound("sounds/tom-2.mp3");
    case "s":
      playSound("sounds/tom-3.mp3");
    case "d":
      playSound("sounds/tom-4.mp3");
    case "j":
      playSound("sounds/crash.mp3");
    case "k":
      playSound("sounds/kick-bass.mp3");
    case "l":
      playSound("sounds/snare.mp3");

      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}
