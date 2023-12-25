const innerDiv = document.createElement("div");
innerDiv.setAttribute("data-id", "1");
innerDiv.setAttribute("data-info", "To jest paragraf");
innerDiv.setAttribute("data-additional-info", "Additional info");
innerDiv.classList.add("mt-4");
innerDiv.innerHTML = "<p>🔹To jest paragraf🔹</p>";

document.body.append(innerDiv);

console.log(innerDiv.classList); // .classList zawiera DOMTokenList
// Wyloguj wszystkie data-atrybuty:
console.log(innerDiv.dataset);
// Wyloguj `data-id`:
console.log(innerDiv.dataset.id);
// wyloguj `data-info`:
console.log(innerDiv.dataset.info);
// Wyloguj data-more-info:
console.log(innerDiv.dataset.additionalInfo);
// Dodaj atrybut data-number:
innerDiv.dataset.number = "59-700";
console.log(innerDiv.dataset);
// DOdaj atrybut data-name i wyloguj `dataset`:
innerDiv.dataset.name = "Yayami";
console.log(innerDiv.dataset);