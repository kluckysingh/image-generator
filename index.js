const imageContainerEl = document.querySelector(".image-container")
const btnEL = document.querySelector(".btn")

btnEL.addEventListener("click", () => {
    imageNum = 10;
    addNewImages();
})

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img"); // // make a new <img>
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(  //// give it a source (so it loads an image)
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl); //// add it to the <body> so it appears
  }
}