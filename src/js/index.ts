import content from "../menu.json";
import makeMarkup from "../templates/markup.hbs";

const menu = document.querySelector(".js-menu")!;
menu.insertAdjacentHTML("afterbegin", makeMarkup(content));

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const themeToggle: HTMLInputElement = document.querySelector("#theme-switch-toggle")!;
const body = document.querySelector("body");

if (localStorage.getItem("theme") === Theme.DARK) {
  body!.classList.add(Theme.DARK);
  themeToggle.checked = true;
} else {
   localStorage.setItem("theme", Theme.LIGHT);
  body!.classList.add(Theme.LIGHT);
  themeToggle.checked = false;
}

themeToggle.addEventListener("change", onToggleChecked);

function onToggleChecked():void {
  if (themeToggle.checked) {
    localStorage.setItem("theme", Theme.DARK);
    body!.classList.remove(...body!.classList);
    body!.classList.add(Theme.DARK);

  } else {
    localStorage.setItem("theme", Theme.LIGHT);
    body!.classList.remove(...body!.classList);
    body!.classList.add(Theme.LIGHT);

  }
}

