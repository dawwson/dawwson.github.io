const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.querySelector("#background");
background.style.backgroundImage = `url(../img/${chosenImage})`;

document.body.appendChild(bgImage);
