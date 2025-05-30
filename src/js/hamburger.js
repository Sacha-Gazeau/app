function hamburgerHTML() {
  return `
      <ul class="hamburger--items">
          <li class="hamburger--item">
            <a href="index.html">
              <span class="hamburger--item navigation__color">#</span>Home
            </a>
          </li>
          <li class="hamburger--item">
            <a href="project.html">
              <span class="hamburger--item navigation__color">#</span>Projects
            </a>
          </li>
          <li class="hamburger--item">
            <a href="about.html">
              <span class="hamburger--item navigation__color">#</span>About
            </a>
          </li>
          <li class="hamburger--item">
            <a href="contact.html">
              <span class="hamburger--item navigation__color">#</span>Contact
            </a>
          </li>
      </ul>
  `;
}

export function initHamburger() {
  const $hamburger = document.querySelector(".hamburger");
  const $closeBtn = document.querySelector(".close-btn");
  const $toggleBtn = document.getElementById("toggle-btn");
  const $hamburgerContent = document.getElementById("hamburger--content");
  const $navigation = document.getElementById("navigation");

  let toggleTheme = 0;

  function hamburgerOn() {
    $hamburger.style.display = "none";
    $closeBtn.style.display = "block";
    $hamburgerContent.innerHTML = hamburgerHTML();
    $navigation.style.position = "fixed";
    $navigation.style.top = "0";
    $navigation.style.left = "3rem";
    $navigation.style.right = "3rem";
  }

  function hamburgerOff() {
    $hamburger.style.display = "block";
    $closeBtn.style.display = "none";
    $hamburgerContent.innerHTML = "";
    $navigation.style.position = "static";
  }

  $toggleBtn.addEventListener("click", function () {
    if (toggleTheme === 0) {
      hamburgerOn();
      toggleTheme++;
    } else {
      hamburgerOff();
      toggleTheme--;
    }
  });
}
