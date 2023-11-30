const myImg1 = document.getElementById("heart");
const myButton1 = document.getElementById("B_heart");

let isFirstImage1 = true;

myButton1.addEventListener("click", function() {
  if (isFirstImage1) {
    myImg1.src = "./asset/heart-active.png";
  } else {
    myImg1.src = "./asset/heart.png";
  }
  isFirstImage1 = !isFirstImage1;
});

const myImg2 = document.getElementById("star");
const myButton2 = document.getElementById("B_star");

let isFirstImage2 = true;

myButton2.addEventListener("click", function() {
  if (isFirstImage2) {
    myImg2.src = "./asset/star-active.png";
  } else {
    myImg2.src = "./asset/star.png";
  }
  isFirstImage2 = !isFirstImage2;
});

const myImg3 = document.getElementById("save");
const myButton3 = document.getElementById("B_save");

let isFirstImage3 = true;

myButton3.addEventListener("click", function() {
  if (isFirstImage3) {
    myImg3.src = "./asset/save-active.png";
  } else {
    myImg3.src = "./asset/save.png";
  }
  isFirstImage3 = !isFirstImage3;
});