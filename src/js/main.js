import { setupThemeToggle } from "./theme.js";
import { initHamburger } from "./hamburger.js";
import { initModals } from "./modal.js";

const $sun = document.querySelector(".sun");
const $moon = document.querySelector(".moon");
const $changeTheme = document.getElementById("changeTheme");
const $body = document.body;

setupThemeToggle($changeTheme, $sun, $moon, $body);

document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initModals();
});
