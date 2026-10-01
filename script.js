// Replace this URL with the live health-check or survey link.
const HEALTH_CHECK_URL = "https://win.woopworldapp.com/10V_w";

document.querySelectorAll("[data-cta]").forEach((button) => {
  button.href = HEALTH_CHECK_URL;
  button.addEventListener("click", () => {
    if (typeof fbq === "function") {
      fbq("trackCustom", "HealthCheckCTAClick", {
        cta_label: button.getAttribute("data-pixel-label"),
      });
    }
  });
});

const menuButton = document.querySelector(".menu-button");
menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});
