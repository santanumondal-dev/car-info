/* ------------------------------------------------------------
   main.js — minimal vanilla JavaScript
   car-info — automotive informative site
   ------------------------------------------------------------ */

(function () {
  "use strict";

  /* ── Mobile navigation toggle ── */
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
      navList.hidden = expanded;
    });

    // Close menu when a link is clicked
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navList.hidden = true;
      });
    });
  }

  /* ── Set active nav link based on current page ── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath && linkPath.split("/").pop() === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  /* ── Form enhancement: prevent submission if required fields empty ── */
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const requiredFields = form.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
          field.addEventListener(
            "input",
            () => field.removeAttribute("aria-invalid"),
            { once: true }
          );
        }
      });

      if (!valid) {
        event.preventDefault();
      }
    });
  });
})();
