// Żywa kolekcja przechowuje, oprócz zwykłych elementów, również te, które zostały dodane dynamicznie np. do listy elementów. document.querySelector() jej nie wspiera!
const heading = document.querySelector("h1");
heading.className = "display-4 fst-italic";
heading.setAttribute("id", "pageHeading");
console.log(`classList: ${heading.getAttribute("class")}.`);

const parags = document.getElementsByTagName("p"); // Wspiera żywe kolekcje
console.log(parags); // parags - HTML collection. Mogę pobrać wielkość takiej kolekcji za pomocą `.length`
console.log(`Długość kolekcji HTML: ${parags.length}`);

const divTest = document.querySelector("div.test");
console.log(divTest);

const paragInsideDiv = divTest.querySelector("p:nth-child(2)");
console.log(paragInsideDiv);