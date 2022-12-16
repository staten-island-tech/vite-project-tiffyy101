import "../styles/style.css";
import { menu } from "./menu";

document.getElementById('#app').innerHTML = `
<div>
<h1>Best Bagel Shop</h1>
</div>`
;

document.querySelector(".btn").addEventListener("click", function() {
    console.log("menu");
})