const containerDiv = document.querySelector("div.container");
const button = document.createElement("button");
button.className = "btn btn-outline-primary p-2 border border-2 fw-bold";
button.innerText = "Read data";
button.setAttribute("type", "button");
containerDiv.appendChild(button);

let jsonData = '{"name": "Yayami", "surname": "Omate", "email": "yayami@example.com"}';

const readData = jsonData => {
  try {
    let jsData = JSON.parse(jsonData);
    if (!jsData.email) {
      throw new SyntaxError("Incomplete data: `email` is missing!");
    }
    throwUnexpectedError(); 
  } catch(err) {
    if (err instanceof SyntaxError) {
      console.error(`SyntaxError: ${err.message}`);
    } else if (err instanceof ReferenceError) {
      console.error(`ReferenceError: ${err.message}`);
    } else {
      throw err;
    }
  }
}

const logData = () => {
  try {
    readData(jsonData);
  } catch(err) {
    console.error(`External catch statement caught an error: ${err.name} - ${err.message}`);
  }
}

button.addEventListener("click", logData);