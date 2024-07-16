const styleSheet = document.getElementById("theme-css");
const toggleButton = document.getElementById("toggle-theme");

if (toggleButton) toggleButton.addEventListener("click", swapTheme);

function swapTheme() {
  // get the current theme
  var oldTheme = getTheme();

  // set the new theme to a variable
  var newTheme = oldTheme === "light" ? "dark" : "light";

  // save the variable to local storage
  localStorage.setItem("theme", newTheme);

  // change the theme
  styleSheet.href = `assets/css/${newTheme}.css`;
}

function getTheme() {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    theme = "light";
    localStorage.setItem("theme", theme);
  }

  return theme;
}

(() => {
  var theme = getTheme();
  styleSheet.href = `assets/css/${theme}.css`;
  if (theme === "dark") {
    toggleButton.checked = true;
  } else {
    toggleButton.checked = false;
  }
})();
