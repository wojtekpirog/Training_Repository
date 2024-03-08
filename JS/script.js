const navbar = document.querySelector(".navbar");

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 240) {
      navbar.classList.add("shadow-bg");
    } else {
      navbar.classList.remove("shadow-bg");
    }    
  });
}

document.addEventListener("DOMContentLoaded", handleScroll);