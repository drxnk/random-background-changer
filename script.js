const btn = document.getElementById("btn");

const cor = document.getElementById("cor");

btn.addEventListener("click", () => {
  document.body.style.background = randomBg();
  cor.innerHTML = randomBg();
});

// Hex
function randomBg() {
  return `#${Math.floor(Math.random() * (999 - 100)) + 100}`;
}

// HSL

// function randomBg() {
//    return `hsl(${Math.floor(Math.random() * 999)}, 100%, 50%)`
// }
