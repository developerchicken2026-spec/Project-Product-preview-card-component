const button = document.querySelector(".button");
const spanChange = document.querySelector(".span-button");
button.addEventListener("click", () => {
  spanChange.textContent = "You clicked Buy";
  button.disabled = true;
});
