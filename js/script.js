(function () {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle
    ? themeToggle.querySelector(".theme-toggle__icon")
    : null;
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav__links");
  const contactForm = document.querySelector(".contact__form");
  const formStatus = document.querySelector(".form-status");
  const yearEl = document.getElementById("year");

  const setTheme = (theme) => {
    const isDark = theme === "dark";
    body.classList.toggle("dark-theme", isDark);
    if (themeIcon) {
      themeIcon.textContent = isDark ? "🌙" : "☀️";
    }
    localStorage.setItem("preferred-theme", theme);
  };

  const getPreferredTheme = () => {
    const stored = localStorage.getItem("preferred-theme");
    if (stored) {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  if (themeToggle) {
    setTheme(getPreferredTheme());
    themeToggle.addEventListener("click", () => {
      const current = body.classList.contains("dark-theme") ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-visible");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("is-visible");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get("name") || "there").toString();
      if (formStatus) {
        formStatus.textContent = `Thanks, ${name}`;
      }
      contactForm.reset();
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
