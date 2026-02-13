(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.style.display = expanded ? "none" : "flex";
    });

    // Menüden tıklayınca mobilde kapanması
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 640px)").matches) {
          toggle.setAttribute("aria-expanded", "false");
          links.style.display = "none";
        }
      });
    });
  }
})();
