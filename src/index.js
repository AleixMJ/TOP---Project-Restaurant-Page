import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";

const content = document.getElementById("content");
content.appendChild(home);

console.log("Hello, Webpack!");
alert("Hello, Webpack!");