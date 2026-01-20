// Flying Properties
let step = 15;
let leftPosition = 0,
  rightPosition = 0,
  verticalPosition = 0;

let leftDirection = 1,
  verticalDirection = 1,
  rightDirection = 1;

let leftInterval = null,
  rightInterval = null,
  topInterval = null;

let intervalDelay = 50;
let initialDelay = 500;

// Boundaries
let widthBoundary = 600;
let heightBoundary = 580;

document
  .getElementById("startButton")
  .addEventListener("click", startAnimation);

document.getElementById("stopButton").addEventListener("click", stopAnimation);

document
  .getElementById("resetButton")
  .addEventListener("click", resetAnimation);

onload = function () {
  initializePositions();
};

let container = document.getElementById("container");
container.style.width = widthBoundary + "px";
container.style.height = heightBoundary + "px";
container.style.border = "5px solid black";
container.style.margin = "20px auto";
container.style.position = "relative";

let buttons = document.getElementById("buttons");
buttons.style.textAlign = "center";

let leftImg = document.getElementById("leftImg");
let rightImg = document.getElementById("rightImg");
let topImg = document.getElementById("topImg");

function initializePositions() {
  leftImg.style.position = "absolute";
  leftImg.style.left = "0";
  leftImg.style.top = heightBoundary / 2 + "px";

  rightImg.style.position = "absolute";
  rightImg.style.right = "0";
  rightImg.style.top = heightBoundary / 2 + "px";

  topImg.style.position = "absolute";
  topImg.style.left = widthBoundary / 2 + "px";
  topImg.style.bottom = "0";
}

function animateLeftImg() {
  leftInterval = setTimeout(function () {
    leftPosition = leftPosition + leftDirection * step;
    leftImg.style.left = leftPosition + "px";
    if (
      leftPosition >= widthBoundary - (leftImg.width + 5) ||
      leftPosition <= 0
    )
      leftDirection = leftDirection * -1;
    animateLeftImg();
  }, intervalDelay);
}

function animateRightImg() {
  rightInterval = setTimeout(function () {
    rightPosition = rightPosition + rightDirection * step;
    rightImg.style.right = rightPosition + "px";
    if (
      rightPosition >= widthBoundary - (rightImg.width + 5) ||
      rightPosition <= 0
    )
      rightDirection = rightDirection * -1;
    animateRightImg();
  }, intervalDelay);
}
function animateTopImg() {
  topInterval = setTimeout(function () {
    verticalPosition = verticalPosition + verticalDirection * step;
    topImg.style.bottom = verticalPosition + "px";
    if (
      verticalPosition >= heightBoundary - (topImg.height + 10) ||
      verticalPosition <= 0
    )
      verticalDirection = verticalDirection * -1;
    animateTopImg();
  }, intervalDelay);
}

function startAnimation() {
  stopAnimation();
  animateLeftImg();
  animateRightImg();
  animateTopImg();
}

function stopAnimation() {
  clearTimeout(leftInterval);
  clearTimeout(rightInterval);
  clearTimeout(topInterval);
}

function resetAnimation() {
  stopAnimation();

  leftPosition = 0;
  rightPosition = 0;
  verticalPosition = 0;

  leftDirection = 1;
  rightDirection = 1;
  verticalDirection = 1;

  leftInterval = null;
  rightInterval = null;
  topInterval = null;

  initializePositions();
}
