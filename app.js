const clickCounter = document.querySelector("#counter");
const img = document.querySelector("#imgToClick");

// Set the initial value to `0`
let counter = 0;
clickCounter.innerHTML = counter;

// Add `1` to the counter after clicking on the image
img.addEventListener("click", () => {
    counter++;
    clickCounter.innerHTML = counter; 
});