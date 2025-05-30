export function setupThemeToggle($changeTheme, $sun, $moon, $body) {
  let toggleTheme = 0;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "night") {
    nightMode();
  } else {
    dayMode();
  }

  function dayMode() {
    $body.classList.remove("theme-dark");
    $sun.style.display = "none";
    $moon.style.display = "block";
  }

  function nightMode() {
    $body.classList.add("theme-dark");
    $sun.style.display = "block";
    $moon.style.display = "none";
  }

  $changeTheme.addEventListener("click", function () {
    if (toggleTheme === 0) {
      nightMode();
      localStorage.setItem("theme", "night");
      toggleTheme = 1;
    } else {
      dayMode();
      localStorage.setItem("theme", "day");
      toggleTheme = 0;
    }
  });
}
