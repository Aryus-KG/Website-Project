const menuBtn = document.querySelector("#menu-btn");
const menuList = document.querySelector(".navbar-container");
const chevron = document.querySelector("#chevron");
console.log(chevron);
const overlay = document.querySelector(".overlay");

function menuClick() {
  menuList.classList.toggle("active-menu");
  chevron.classList.toggle("muter");
  menuBtn.classList.toggle("active-menu");
  overlay.classList.toggle("active-menu");
}

menuBtn.addEventListener("click", menuClick);
