const navbar = document.querySelector(".navbar");

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 240) {
      navbar.classList.add("shadow-bg");
      console.log("Shadow added");
    } else {
      navbar.classList.remove("shadow-bg");
      console.log("Shadow removed");
    }    
  });
}

document.addEventListener("DOMContentLoaded", handleScroll);