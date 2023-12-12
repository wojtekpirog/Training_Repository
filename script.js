const widthInCm = parseFloat(prompt("Podaj szerokość w centrymetrach:"));
const heightInCm = parseFloat(prompt("Podaj wysokość w centymetrach:"));

console.log(`Szerokość: ${widthInCm}`); // widthInCm = NaN
console.log(typeof widthInCm); // heightInCm = NaN
console.log(`Wysokość: ${heightInCm}`); 
console.log(typeof heightInCm); 

if (isNaN(widthInCm) || isNaN(heightInCm)) {
  console.error("Jedna z podanych wartości (lub obie) nie jest liczbą!");
} else if (widthInCm <= 0 || heightInCm <= 0) {
  console.error("Jedna z podanych wartości (lub obie) nie jest liczbą dodatnią!");
} else {
  const areaInM2 = (widthInCm * heightInCm) / 10000;
  console.log(`Powierzchnia wynosi: ${areaInM2} metrów kwadratowych.`);
}