const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// create variables to connect to image api
const getImage = async function () {
  const res = await fetch ("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();  // collect the images array
  // console.log(images); //to check the function is working

  // select random image from the repo
  selectRandomImage(images); // start random choice of an image in array function
};

// randomly select one of the images in the repo
const selectRandomImage = function(images) {  // choose a random number between 0 - array length
  const randomIndex = Math.floor(Math.floor(Math.random() * images.length));
  // console.log(`${randomIndex} is my random number`); // to check the function is working

  const randomImage = images[randomIndex];  // choose from the array from the random number chosen
  // console.log("randomImage"); //to check function is working
  displayImage(randomImage);  // begin the display function
};

// function to display the random image in the DOM
const displayImage = function(randomImage) {
  const author = randomImage.author; // path for the name of author of photo
  const imageAddress = randomImage.download_url;  // path for randomized image
  authorSpan.innerText = (author);  // set author text
  img.src = imageAddress; // apply image address
  imgDiv.classList.remove("hide");
}

// listen for button
button.addEventListener("click", function() {
  getImage();
  console.log("button pushed")
})
