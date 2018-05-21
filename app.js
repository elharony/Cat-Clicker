// Cache Elements
const catCounter = document.querySelector(".cat .counter");
const catName    = document.querySelector(".cat .name");
const catImage   = document.querySelector(".cat img");
const catsList   = document.querySelectorAll(".catsList .item");

// URLs & Names
const urlsArr = ["https://i.pinimg.com/originals/22/c3/82/22c382ab03b9b5d028af14c2f3cfeb9f.jpg", "https://cdn.website.thryv.com/3fb533c878ae42848886cf0a075d3f68/DESKTOP/jpg/903.jpg", 
"http://petsittingbrandon.com/wp-content/uploads/2017/04/cat-sitting-1.png", "https://78.media.tumblr.com/bbd98a0adcf1c610437c1f44fd194d1e/tumblr_n8enkwShF31r69a5mo1_500.jpg", "https://78.media.tumblr.com/fbefa38f5fe39907cc81ffb724783c09/tumblr_p4bqvbQDJD1udmrgco1_500.jpg"];
const namesArr = ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"];

// Counters
const allCounters = [0, 0, 0, 0, 0];

// Loop over the Cats' List
for(let i = 0; i < catsList.length; i++) {

    // Update the Cats' List names
    catsList[i].innerHTML = namesArr[i];

    // Add a Click Event when clicking on each Cat's Name
    catsList[i].addEventListener("click", function() {
        // Change the counter's value for each selected image
        catCounter.innerHTML = "Clicks: " + allCounters[i];
        // Update the Cat's Name
        catName.innerHTML = namesArr[i];
        // Set the Image's URL
        catImage.setAttribute("src", urlsArr[i]);
        // Set an index for each image
        catImage.setAttribute("data-index", i);
    });

}

// Click on the image
catImage.addEventListener("click", function() {
    // Get the cat's index
    const index = catImage.getAttribute("data-index");
    // Increase the array's index based on the cat's index
    allCounters[index]++;
    // Update the HTML counter
    catCounter.innerHTML = "Clicks: " + allCounters[index];
});