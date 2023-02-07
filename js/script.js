const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// create variables to connect to image api
const getImage = async function () {
  const res = await fetch ("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  console.log(images);

  // select random image from the repo
  selectRandomImage(images);
};

getImage();

// randomly select one of the images in the repo
const selectRandomImage = function(images) {
  const randomIndex = Math.floor(Math.floor(Math.random() * images.length));
  // console.log(`${randomIndex} is my random number`);

  const randomImage = images[randomIndex];
  console.log(randomImage);
};

// function to display the random image in the DOM
const displayImage = function(randomImage) {
  const author = randomImage.author;
  console.log(`the author is ${author}`);
}