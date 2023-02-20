let mobile_menu_icon = document.querySelector(".mobile_menu_icon");
let menu = document.querySelector(".menu");
let main = document.getElementById("main");

mobile_menu_icon.addEventListener("click", () => {
  menu.classList.toggle("openMenu");
  if (menu.classList.contains("openMenu")) {
    main.style.filter = "grayscale(100%)";
  } else {
    main.style.filter = "grayscale(0%)";
  }
});
