// The Golden Palette — page interactions

// Light / dark theme
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("goldenPaletteTheme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("goldenPaletteTheme", "dark");
  }
  updateThemeButton();
}

function updateThemeButton() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const icon = document.getElementById("themeIcon");
  const button = document.getElementById("themeToggle");
  if (icon) icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  if (button) button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
}

// Open Bootstrap modal with the selected menu item details
function openModal(cardElement) {
  const image = cardElement.querySelector(".menu-img");
  document.getElementById("modalImg").src = image.src;
  document.getElementById("modalImg").alt = image.alt;
  document.getElementById("modalTitle").textContent = cardElement.querySelector(".menu-title").textContent;
  document.getElementById("modalDesc").textContent = cardElement.querySelector(".menu-desc").textContent;
  document.getElementById("modalPrice").textContent = cardElement.dataset.price || "";
  document.getElementById("modalIngredients").textContent = cardElement.dataset.ingredients || "Please ask our team for ingredient information.";
  document.getElementById("modalAllergens").textContent = cardElement.dataset.allergens || "Please ask our team about possible allergens.";
  bootstrap.Modal.getOrCreateInstance(document.getElementById("infoModal")).show();
}

// Allow menu cards to be opened with Enter or Space
function activateCard(event, cardElement) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openModal(cardElement);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Restore saved theme preference
  if (localStorage.getItem("goldenPaletteTheme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  updateThemeButton();

  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("year").textContent = new Date().getFullYear();

  // Close mobile navigation after selecting a section
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Front-end form validation/demo feedback. Connect a backend to receive messages.
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    document.getElementById("formFeedback").classList.remove("d-none");
    contactForm.reset();
  });
});
