let container = document.getElementById("container");
let image = document.createElement("img");
image.className = "image";

async function fetchData() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const data = await response.json();

    image.src = data.img;
    container.appendChild(image);

    console.log(data);
  } catch (error) {
    console.log("error: ", error);
  }
}

fetchData();
