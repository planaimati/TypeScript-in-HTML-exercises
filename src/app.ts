const body = document.body;
const menu = document.querySelector(".sticky__menu");

const handleScroll = () => {
  body.classList.add("scrolling");

  if (body.classList.contains("scrolling")) {
    body.classList.remove("not-scrolling");
    menu?.classList.add("sticky__menu__scrolling");
    menu?.classList.remove("sticky__menu__notScrolling");
  }

  setTimeout(() => {
    body.classList.remove("scrolling");
    body.classList.add("not-scrolling");
    menu?.classList.add("sticky__menu__notScrolling");
  }, 500);
};

window.addEventListener("scroll", handleScroll);
