(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var year = document.getElementById("godina");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  }

  function scrollToTop() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  document.querySelectorAll('a[href="#vrh"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTop();
      setOpen(false);
    });
  });

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 769px)").matches) {
      setOpen(false);
    }
  });
})();
