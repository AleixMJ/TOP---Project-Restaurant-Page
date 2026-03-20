import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

const content = document.getElementById("content");
content.appendChild(home);

document.getElementById("nav-home").addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(home);
});
document.getElementById("nav-menu").addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menu);
});
document.getElementById("nav-about").addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(about);
});
document.getElementById("nav-contact").addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(contact);
});


console.log("Hello, Webpack!");
alert("Hello, Webpack!");