const introDelayMs = 3000;
const text = "Hi, I'm VAI.";
const target = document.getElementById("type-target");

let index = 0;

function typeNext() {
  if (!target) return;
  if (index <= text.length) {
    target.textContent = text.slice(0, index);
    index += 1;
    const delay = index < text.length ? 95 + Math.random() * 45 : 250;
    window.setTimeout(typeNext, delay);
  }
}

function revealSite() {
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  window.setTimeout(typeNext, 260);
}

window.addEventListener("load", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(revealSite, reducedMotion ? 300 : introDelayMs);
});
