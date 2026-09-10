// Replace this URL with the live health-check or survey link.
const HEALTH_CHECK_URL = "https://www.danone.in/iron-strong/?utm_source=whatapp&utm_medium=woop3&utm_campaign=iron-strong";

document.querySelectorAll("[data-cta]").forEach((button) => {
  button.href = HEALTH_CHECK_URL;
});

const menuButton = document.querySelector(".menu-button");
menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});
