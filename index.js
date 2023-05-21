import { log } from "./script/often.js";
let Li0s = document.querySelector("#nav").querySelectorAll("li");
let iframe = document.querySelector("iframe");
let select=Li0s[1].querySelector("select");
Li0s[0].addEventListener("click", () => {
  iframe.src = "./view/introduce.html";
});
Li0s[1].addEventListener("click", () => {
  iframe.src = "./view/JSinfo.html";
});
Li0s[2].addEventListener("click", () => {
  iframe.src = "./view/project.html";
});
Li0s[3].addEventListener("click", () => {
  iframe.src = "./view/media.html";
});
