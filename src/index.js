import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

const content = document.getElementById("content");
content.appendChild(home);

console.log("Hello, Webpack!");
alert("Hello, Webpack!");