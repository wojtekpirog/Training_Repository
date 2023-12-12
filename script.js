let json = '{ "age": 30, "name": "Yayami" }';

try {
  let user = JSON.parse(json); // <-- nie ma jeszcze błędu
  if (!user.surname) {
    throw new SyntaxError("❗Incomplete data: `surname` is missing.❗");
  }
  console.log(user.surname); //undefined, to nie jest run-time error
  console.log("Try code still runs...");
} catch(err) {
  alert(`Błąd JSON: ${err.name} - ${err.message}`);
}