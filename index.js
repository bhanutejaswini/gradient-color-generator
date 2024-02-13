const gradientBox = document.querySelector(".gradient");
const direction = document.querySelector("#direction");
const colors = document.querySelectorAll(".colors");
const codeArea = document.querySelector(".code");
const copyBtn = document.querySelector(".copy");
const refreshBtn = document.querySelector(".refresh");

const generateRandomColors = () => {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomColor}`;
};

const changeGradient = (isRandom) => {
  if (isRandom) {
    colors[0].value = generateRandomColors();
    colors[1].value = generateRandomColors();
  }

  const gradient = `linear-gradient(${direction.value}, ${colors[0].value}, ${colors[1].value})`;
  codeArea.value = `background: ${gradient};`;

  gradientBox.style.background = gradient;
};

const copyCode = () => {
  navigator.clipboard.writeText(codeArea.value);
};

colors.forEach((input) => {
  input.addEventListener("input", () => changeGradient(false));
});

direction.addEventListener("change", () => changeGradient(false));

refreshBtn.addEventListener("click", () => changeGradient(true));

copyBtn.addEventListener("click", copyCode);
