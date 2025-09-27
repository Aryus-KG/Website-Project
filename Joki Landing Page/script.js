const menuBtn = document.querySelector("#menu-btn");
const navbarMenu = document.querySelector("#navbar-menu-container");

function menuClick() {
  menuBtn.classList.toggle("active-menu");
  navbarMenu.classList.toggle("active-menu");

  setTimeout(() => {
    if (menuBtn.classList.contains("active-menu")) {
      menuBtn.textContent = "close";
    } else {
      menuBtn.textContent = "menu";
    }
  }, 200);
}

menuBtn.addEventListener("click", menuClick);
