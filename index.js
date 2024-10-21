// function slider(){
//     document.getElementById("change1").style.opacity = "1";
//     document.getElementById("change2").style.opacity = "0";
//     document.getElementById("change3").style.opacity = "0";

//     document.getElementById("dot1").style.backgroundColor = "rgb(167,40,46)";
//     document.getElementById("dot2").style.backgroundColor = "rgb(190,103,92)";
//     document.getElementById("dot3").style.backgroundColor = "rgb(190,103,92)";
// }
// function slider1(){
//     document.getElementById("change2").style.opacity = "1";
//     document.getElementById("change1").style.opacity = "0";
//     document.getElementById("change3").style.opacity = "0";

//     document.getElementById("dot2").style.backgroundColor = "rgb(167,40,46)";
//     document.getElementById("dot1").style.backgroundColor = "rgb(190,103,92)";
//     document.getElementById("dot3").style.backgroundColor = "rgb(190,103,92)";
// }
// function slider2(){
//     document.getElementById("change3").style.opacity = "1";
//     document.getElementById("change1").style.opacity = "0";
//     document.getElementById("change2").style.opacity = "0";
//     document.getElementById("dot3").style.backgroundColor = "rgb(167,40,46)";
//     document.getElementById("dot1").style.backgroundColor = "rgb(190,103,92)";
//     document.getElementById("dot2").style.backgroundColor = "rgb(190,103,92)";
// }

let currentIndex = 0;
const images = [
    document.getElementById('change1'),
    document.getElementById('change2'),
    document.getElementById('change3')
];
const dots = [
    document.getElementById('dot1'),
    document.getElementById('dot2'),
    document.getElementById('dot3')
];

// Function to update the slider
function updateSlider(index) {
    // Reset all images and dots
    images.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Function to manually change slides on dot click
function slider(index) {
    currentIndex = index;
    updateSlider(currentIndex);
}

// Automatically slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
}, 3000);

// Set initial active state
updateSlider(currentIndex);
