// navigation
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

// testimoni arrow
const arrowPrev = document.querySelector("#testi-prev");
const arrowNext = document.querySelector("#testi-next");
const testimoniCard = document.querySelectorAll(".testimoni__list--item");
const testimoniContainer = document.querySelector(".testimoni__list");

let testiIndex = 0;

function testiGeser() {
  testimoniContainer.style.transform = `translateX(-${testiIndex * 25}%)`;
}

arrowNext.onclick = () => {
  testiIndex++;
  if (testiIndex >= testimoniCard.length) testiIndex = 0;
  testiGeser();
};

arrowPrev.onclick = () => {
  testiIndex--;
  if (testiIndex < 0) testiIndex = testimoniCard.length - 1;
  testiGeser();
};
