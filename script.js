(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var STORE_KEY = "portfolio-theme";

  function apply(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
  apply(saved);

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDarkNow = current ? current === "dark" : prefersDark;
    var next = isDarkNow ? "light" : "dark";
    apply(next);
    try { localStorage.setItem(STORE_KEY, next); } catch (e) {}
  });
})();
