const string = prompt("Podaj swój nick NA WSPAK");

function logTxt() {
  console.log("mówią na mnie:");
}

function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  console.log(reversedString);
}

setTimeout(logTxt, 1000);
setTimeout(reverseString, 5000, string);