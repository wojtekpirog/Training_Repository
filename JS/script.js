let navbar;
let allNavbarItems;
let navbarCollapse;

const main = () => {
  prepareDOMElements();
  addEventListeners();
}

const prepareDOMElements = () => {
  navbar = document.querySelector(".navbar");
  allNavbarItems = document.querySelectorAll(".nav-link");
  navbarCollapse = document.querySelector(".navbar-collapse");
}

const addEventListeners = () => {
  window.addEventListener("scroll", handleScroll);
  document.body.addEventListener("click", handleNavbarCollapse);

  allNavbarItems.forEach(navbarItem => {
    navbarItem.addEventListener("click", () => {
      navbarCollapse.classList.remove("show");
    });
  });
}

const handleScroll = () => {
  window.scrollY >= 240 ? navbar.classList.add("shadow-bg") : navbar.classList.remove("shadow-bg");
}

const handleNavbarCollapse = e => {
  if (!navbarCollapse.contains(e.target)) {
    const isNavbarExpanded = navbarCollapse.classList.contains("show");
    isNavbarExpanded && navbarCollapse.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", main);