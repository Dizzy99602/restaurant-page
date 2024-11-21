import contentContainer from "./content.js";
import "./styles.css";

const content = document.querySelector("#content");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const btn = document.createElement("button");
btn.classList.add("cta-button");

const sectionClass = document.createElement("div");
sectionClass.classList.add("section");

h1.innerHTML = contentContainer.heading;
p.innerHTML = contentContainer.para;
btn.innerHTML = contentContainer.buttonText;

sectionClass.appendChild(h1);
sectionClass.appendChild(p);
sectionClass.appendChild(btn);

content.appendChild(sectionClass);