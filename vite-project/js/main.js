import "/styles/style.css";
import {menu} from "./menu";
import {DOMSelectors} from "./dom";
console.log("menu");

function createMenu() {
    menu.forEach((menu) =>
    DOMSelectors.mainDiv.insertAdjacentHTML
    ("beforeend",
            `
          <p id="outputText">Price: ${menu.price}</p>
          <p id="outputText">Info: ${menu.info}</p>
          <button id="buy">Choose</button>
          </div>

          <div id="mainCard">
          <p><img src=${menu.img}></p>
          <h2>${menu.name}</h2>
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
.forEach((menu) => createMenu(menu));

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
