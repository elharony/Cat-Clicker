// Cache Elements
const clickCounter = document.querySelector("#counter");
const imgs = document.querySelectorAll(".imgToClick");
const names = document.querySelectorAll(".name");

// URLs & Names
const urlsArr = ["https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX_400x400.jpeg", "https://data.whicdn.com/images/35983568/large.jpg"];
const namesArr = ["Emergency Kitten", "Cute Cat"];

// Set the initial value to `0`
let counter = 0;
clickCounter.innerHTML = counter;

for(let i = 0; i < imgs.length; i++) {

    // Cat URL
    imgs[i].setAttribute("src", urlsArr[i]);

    // Cat Name
    names[i].innerHTML = namesArr[i];

    // Add `1` to the counter after clicking on an image
    imgs[i].addEventListener("click", () => {
        counter++;
        clickCounter.innerHTML = counter; 
    });
    
}
