// alert("heelo");
("use strict");

const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");

  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("disabled");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__card, .location-post, .footer__company-links, .small-news, .big-news, .footer__company-info`,
  {
    origin: "top",
    interval: 100,
  }
);
