const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "9.jpeg",
  "9.jpeg",
  "10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const container = document.querySelector("#container");
container.style.backgroundImage = `url(../img/${chosenImage})`;
