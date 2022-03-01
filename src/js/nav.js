const stickyNav = document.getElementById("sticky-nav");
const menuIcon = document.getElementById("menu-btn");

window.onload = function () {
  menuIcon.checked = false;
};

let lastScrollTop = 0;
window.onscroll = function () {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    if (scrollY > lastScrollTop) {
      // downscroll
      stickyNav.classList.add("closed");
      menuIcon.checked = false;
    } else {
      // upscroll
      stickyNav.classList.remove("closed");
    }
  }

  lastScrollTop = scrollY <= 0 ? 0 : scrollY;

  if (
    document.body.scrollTop >= 300 ||
    document.documentElement.scrollTop >= 300 ||
    menuIcon.checked
  ) {
    stickyNav.classList.add("nav-colored");
    stickyNav.classList.remove("nav-transparent");
  } else {
    stickyNav.classList.add("nav-transparent");
    stickyNav.classList.remove("nav-colored");
  }
};

menuIcon.addEventListener("change", function (e) {
  if (e.target.checked) {
    stickyNav.classList.add("nav-colored");
    stickyNav.classList.remove("nav-transparent");
  } else if (window.scrollY < 100) {
    stickyNav.classList.add("nav-transparent");
    stickyNav.classList.remove("nav-colored");
  }
});
