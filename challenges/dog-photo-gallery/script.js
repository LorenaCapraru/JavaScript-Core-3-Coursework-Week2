let container = document.getElementById("container");

let button = document.querySelector("button");
let listOfImg = document.querySelector("ul");
let randomImg = document.createElement("img");

randomImg.className = "randomImg";

async function fetchImages() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    randomImg.src = data.message;

    let imgElement = document.createElement("li");

    imgElement.appendChild(randomImg);
    listOfImg.appendChild(imgElement);
  } catch (error) {
    console.log("error: ", error);
  }
}

button.addEventListener("click", () => {
  listOfImg.innerHTML = "";
  fetchImages();
});
