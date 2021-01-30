//click on next button
//display next image

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let currentImg = document.getElementsByClassName("active")[0];
let nextImg = currentImg.nextElementSibling;
let i = 0; //starting point
let firstImg = document.getElementById("first");
let lastImg = document.getElementById("last");

//when i click the next button, the image that comes after the current image, shows. The next image will appear and the previous image will disappear.

//how do you make the current image disappear? and make the next image appear? transfer the classes?

let changeNextImg = function () {
  //current image removed
  //next image shows
  //active class will be transfered to the next image
  let currentImg = document.getElementsByClassName("active")[i];
  let nextImg = currentImg.nextElementSibling;
  let lastImg = document.getElementById("last");

  currentImg.classList.remove("active");
  nextImg.classList.add("active");
  
  //when the image reaches the last image, then it will go to the first image. 

  
};


nextButton.addEventListener("click", changeNextImg);

let changePrevImg = function () {
  //current image removed
  //next image shows
  //active class will be transfered to the next image
  let currentImg = document.getElementsByClassName("active")[i];
  let prevImg = currentImg.previousElementSibling;
  currentImg.classList.remove("active");
  prevImg.classList.add("active");
  
  //when the image reaches the first image, then it will go to the last image. 
 
  
};

prevButton.addEventListener("click", changePrevImg);
