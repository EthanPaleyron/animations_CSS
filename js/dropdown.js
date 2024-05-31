const menu = document.querySelector(".dropdown ul");
const button = document.querySelector(".dropdown button");
button.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    setTimeout(() => {
      menu.classList.remove("visibility");
      button.style.borderBottomLeftRadius = "0.5rem";
      button.style.borderBottomRightRadius = "0.5rem";
    }, 600);
  } else {
    menu.classList.add("show");
    menu.classList.add("visibility");
    button.style.borderBottomLeftRadius = "0";
    button.style.borderBottomRightRadius = "0";
  }
});
