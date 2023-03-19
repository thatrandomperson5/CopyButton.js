function makeCoolButton() {
  let button = document.createElement("button");
  button.innerHTML = `<i>Click to copy!</i>`;
  return button;
}
let style = document.createElement("link");
style.rel = "stylesheet";
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  style.href =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css";
} else {
  style.href =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/arduino-light.min.css";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    if (newColorScheme == "dark") {
      style.href =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css";
    } else {
      style.href =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/arduino-light.min.css";
    }
  });
document.head.appendChild(style);
