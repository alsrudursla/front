const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// html 에 추가하기
document.body.appendChild(bgImage);