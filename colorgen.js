let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
    // let randomColor = getRandomColor();
    heading.innerText = getRandomColor();
    div.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}