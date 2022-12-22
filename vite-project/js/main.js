import "/styles/style.css";
import {menu} from "./menu";
import {DOMSelectors} from "./dom";
console.log("menu");

function createMenu() {
    menu.forEach((menu) =>
    DOMSelectors.mainDiv.insertAdjacentHTML
    ("beforeend",
            `          
          <div id="mainCard" class="mainCard">          
          <h2>${menu.name}</h2>
          <p><img src=${menu.img}></p>
          <p id="outputText">Price: ${menu.price}</p>
          <p id="outputText">Info: ${menu.info}</p>
          <button id="buy" class="buy">Choose</button>
          </div>
        ` )    
        );
} 

function food() {
    menu
    .forEach((food) => createMenu(food));
}
food();

function bestSeller() {
    
}
 

document.querySelector(".btn").addEventListener("click", function () {
    if(document.body.classList.contains("warm")) {
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
    } else {
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    }
});


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
