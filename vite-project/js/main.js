import "/styles/style.css";
import {menu} from "./menu";
import {DOMSelectors} from "./dom";
console.log("menu");

function createMenu() {
    menu.forEach((menu) => {
    DOMSelectors.display.innerHTML = " ";
    DOMSelectors.mainDiv.insertAdjacentHTML
    ("beforeend",
            `
          <h2>${menu.name}</h2>
          <img class="img" src=${menu.img} alt=""/>
          <p id="outputText">Price: ${menu.price}</p>
          <p id="outputText">Info: ${menu.info}</p>
          <button id="buy" class="buy">Choose</button>
          </div>
          <div id="mainCard">

        ` )    
    });
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
.forEach((menu) => createMenu(menu));

const bestSeller = document.getElementById("bestSeller");
    bestSeller.addEventListener("click", function () {
        DOMSelectors.display.innerHTML = " ";
        menu.filter((bestSeller) => bestSeller.bestSeller === "yes")
        .forEach(bestSeller => {
            DOMSelectors.mainDiv.insertAdjacentHTML
            ("beforeend",
            `
          <h2>${bestSeller.name}</h2>
          <img class="img" src=${bestSeller.img} alt=""/>
          <p id="outputText">Price: ${bestSeller.price}</p>
          <p id="outputText">Info: ${bestSeller.info}</p>
          <button id="buy" class="buy">Choose</button>
          </div>
          <div id="mainCard">`
          );
        });
    });


    const drink = document.getElementById("drink");
    drink.addEventListener("click", function () {
        DOMSelectors.display.innerHTML = " ";
        menu.filter((drink) => drink.drink === "yes")
        .forEach(drink => {
            DOMSelectors.mainDiv.insertAdjacentHTML
            ("beforeend",
            `
          <h2>${drink.name}</h2>
          <img class="img" src=${drink.img} alt=""/>
          <p id="outputText">Price: ${drink.price}</p>
          <p id="outputText">Info: ${drink.info}</p>
          <button id="buy" class="buy">Choose</button>
          </div>
          <div id="mainCard">`
          );
        });
    });
    
        

    const jam = document.getElementById("jam");
    jam.addEventListener("click", function () {
        DOMSelectors.display.innerHTML = " ";
        menu.filter((jam) => jam.jam === "yes")
        .forEach(jam => {
            DOMSelectors.mainDiv.insertAdjacentHTML
            ("beforeend",
            `
          <h2>${jam.name}</h2>
          <img class="img" src=${jam.img} alt=""/>
          <p id="outputText">Price: ${jam.price}</p>
          <p id="outputText">Info: ${jam.info}</p>
          <button id="buy" class="buy">Choose</button>
          </div>
          <div id="mainCard">`
          );
        });
    });

 function clear() {
     DOMSelectors.output.innerHTML = "";
 }

 initial();

 DOMSelectors.mainDiv.addEventListener("click", function () {
     clear();
     initial();
   });

 DOMSelectors.bestSeller.addEventListener("click", function () {
     clear();
     bestSeller();
   });

 DOMSelectors.drink.addEventListener("click", function () {
     clear();
     drink();
 });

 DOMSelectors.jam.addEventListener("click", function () {
     clear();
     jam();
 });