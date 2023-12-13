const divContainer = document.querySelector("div.container");
const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Get books";
button.className = "btn btn-outline-primary border border-2 fs-4 fw-light";

divContainer.appendChild(button);

const fetchData = () => {
  axios.get(`https://simple-books-api.glitch.me/books`)
    .then(responseReady => doSomethingWith(responseReady))
    .catch(error => {
      console.error(`Error name: ${error.name} | Error message: ${error.message}`);
    })
    .finally(() => console.log("Ten kod zawsze się wykona."))   
}

const doSomethingWith = responseReady => {
  console.log(responseReady);
}

button.addEventListener('click', fetchData);