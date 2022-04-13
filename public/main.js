const hnav = document.querySelector(".hnav");
const navUl = document.querySelector(".navUl");

hnav.addEventListener("click", () => {
  hnav.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".navUl li").forEach((n) =>
  n.addEventListener("click", () => {
    hnav.classList.remove("active");
    navUl.classList.remove("active");
  })
);
