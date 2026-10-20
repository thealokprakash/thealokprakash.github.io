
/* =========================================================
   ALOK PRAKASH — THEME CONTROLLER
   Automatic daytime/nighttime theme + manual override
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "alok-portfolio-theme";
  const THEME_BUTTON_ID = "themeToggle";

  const getAutomaticTheme = () => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  };

  const getSavedTheme = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "light" || saved === "dark" ? saved : null;
    } catch {
      return null;
    }
  };

  const setSavedTheme = (theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Theme switching still works if storage is unavailable.
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);

    const button = document.getElementById(THEME_BUTTON_ID);

    if (button) {
      button.textContent = theme === "dark" ? "☀ Light" : "☾ Dark";
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.title = "Change colour theme";
    }

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute(
        "content",
        theme === "dark" ? "#191b18" : "#f7f5ef"
      );
    }
  };

  const initializeTheme = () => {
    const theme = getSavedTheme() || getAutomaticTheme();
    applyTheme(theme);

    const button = document.getElementById(THEME_BUTTON_ID);

    if (button && button.dataset.themeInitialized !== "true") {
      button.dataset.themeInitialized = "true";

      button.addEventListener("click", () => {
        const current =
          document.documentElement.getAttribute("data-theme") || "light";

        const next = current === "dark" ? "light" : "dark";

        setSavedTheme(next);
        applyTheme(next);
      });
    }
  };

  // Apply the theme as soon as the document is ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
  } else {
    initializeTheme();
  }
})();
