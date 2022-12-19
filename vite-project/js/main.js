import "/styles/style.css";
import {menu} from "./menu";
console.log("menu");

const DOMSelectors = {
    button: document.getElementById("btn"),
    h1: document.getElementById("shop"),
    mainDiv: document.getElementById("main")

};

function createMenu() {
    menu.forEach((menu) =>
    DOMSelectors.display.insertAdjacentHTML
    ("beforeend",
            `
          <div id="mainCard">
          <p><img src=${menu.img}></p>
          <h2>${menu.name}</h2>
    
          <p id="outputText">Type: ${menu.price}</p>
          <p id="outputText">Price: ${menu.info}</p>
          <button id="buy">Choose</button>
          </div>
        ` )
        );
}

document.querySelector(".btn").addEventListener("click", function () {
    if(document.body.classList.contains("cool")) {
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
    }
});

menu
.forEach((item) => createMenu(car));

menu
.filter((food) => food.bestSeller === "yes")
.forEach(food => {
    console.log(food.name);
});

menu
.filter((food) => food.drink === "yes")
.forEach(food => {
    console.log(food.name);
});
