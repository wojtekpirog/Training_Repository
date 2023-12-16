const btn = document.querySelector("button");

function makePutRequest() {
  fetch("https://reqres.in/api/users/2", {
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

btn.addEventListener("click", () => makePutRequest())
