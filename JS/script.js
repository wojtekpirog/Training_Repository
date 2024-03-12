const navbar = document.querySelector(".navbar");
const allNavbarItems = document.querySelectorAll(".nav-link");
const navbarList = document.querySelector(".navbar-collapse");
const navbarCollapse = document.querySelector(".navbar-collapse");

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 240) {
      navbar.classList.add("shadow-bg");
    } else {
      navbar.classList.remove("shadow-bg");
    }    
  });
}

allNavbarItems.forEach(navbarItem => {
  navbarItem.addEventListener("click", () => {
    navbarList.classList.remove("show");
  });
});

document.body.addEventListener("click", (event) => {
  if (!navbarCollapse.contains(event.target)) {
    const isNavbarExpanded = navbarCollapse.classList.contains("show");
    if (isNavbarExpanded) {
      navbarCollapse.classList.remove("show");
    }
  }
});

document.addEventListener("DOMContentLoaded", handleScroll);