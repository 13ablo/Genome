function setTheme(mode) {
  localStorage.setItem("theme-storage", mode);
  var darkModeStyle = document.getElementById("darkModeStyle");
  if (darkModeStyle) {
    darkModeStyle.disabled = mode === "light";
  }

  var toggleBtn = document.getElementById("dark-mode-toggle");
  if (!toggleBtn) {
    return;
  }

  if (mode === "dark") {
    toggleBtn.innerHTML = `<svg class="feather" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    toggleBtn.setAttribute('aria-label', 'Activer le thème clair');
    toggleBtn.setAttribute('data-theme', 'dark');
  } else {
    toggleBtn.innerHTML = `<svg class="feather" viewBox="0 0 24 24" fill="none" stroke="#232333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    toggleBtn.setAttribute('aria-label', 'Activer le thème sombre');
    toggleBtn.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  if (localStorage.getItem("theme-storage") === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function createThemeToggleButton() {
  var nav = document.querySelector("header nav");
  if (!nav || document.getElementById("dark-mode-toggle")) {
    return;
  }

  var button = document.createElement("button");
  button.id = "dark-mode-toggle";
  button.type = "button";
  button.className = "theme-toggle-button";
  button.style.border = "none";
  button.style.background = "transparent";
  button.style.cursor = "pointer";
  button.style.padding = "0";
  button.style.marginLeft = "1rem";
  button.style.display = "inline-flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.minWidth = "22px";
  button.style.minHeight = "22px";
  button.style.color = "inherit";
  button.title = "Basculer entre les thèmes clair et sombre";
  button.addEventListener("click", toggleTheme);

  nav.appendChild(button);
}

document.addEventListener("DOMContentLoaded", function () {
  createThemeToggleButton();
  var savedTheme = localStorage.getItem("theme-storage") || "light";
  setTheme(savedTheme);
});
