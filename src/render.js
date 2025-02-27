import "./render.css";
import "./public/32.png";

export function render() {
  const el = document.createElement("div");
  el.classList.add("text");
  document.getElementsByTagName("body")[0].appendChild(el);
  el.innerHTML = "hello, world";
}
