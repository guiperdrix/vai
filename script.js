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

window.addEventListener("load", () => {
  window.setTimeout(typeNext, 240);
});
