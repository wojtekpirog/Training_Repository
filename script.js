const putBtn = document.querySelector("#put");
const patchBtn = document.querySelector("#patch");
const BASE_URL = "https://reqres.in/api/users/2";

function makePutRequest() {
  fetch(BASE_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PUT",
    // Sending only the fields I want to update:
    body: JSON.stringify({
      email: "yayami@example.com",
      first_name: "Yayami"
    })
  })
    .then(res => res.json())
    .then(dataReady => console.log(dataReady))
    .catch(err => console.error(`Error message: ${err.message}`))
}

function makePatchRequest() {
  fetch(BASE_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({
      email: "nasikawa@example.com",
      first_name: "Nasikawa"
    })
  })
    .then(res => res.json())
    .then(dataReady => console.log(dataReady))
    .catch(err => console.error(`Error name: ${err.name}, message: ${err.message}`))
}

putBtn.addEventListener("click", () => makePutRequest())
patchBtn.addEventListener("click", () => makePatchRequest())