const menuBtn = document.querySelector("#menu-btn");
const navbarMenu = document.querySelector("#navbar__menu");

function menuClick() {
  menuBtn.classList.toggle("active-menu");
  navbarMenu.classList.toggle("active-menu");

  setTimeout(() => {
    if (menuBtn.classList.contains("active-menu")) {
      menuBtn.textContent = "close";
    } else {
      menuBtn.textContent = "menu";
    }
  }, 100);
}

menuBtn.addEventListener("click", menuClick);
