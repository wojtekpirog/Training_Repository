const paragInFooter = document.querySelector('footer p');
const nav = document.querySelector(".navbar-collapse");
const year = new Date().getFullYear();

document.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }  
});

paragInFooter.innerHTML = `${year} <span class="orange-color">MXN Studio</span><sup>&copy;</sup>`