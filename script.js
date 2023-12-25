// Tworzę mapę:
const map1 = new Map();
// Tworzę parę "klucz - wartość" za pomocą "set"
map1.set("myCar", {brand: "Renult", model: "Megane"}); // ['myCar', {...}]
map1.set("myPet", {animal: "cat", name: "Fluffy"}); // ['myPet', {...}]
map1.set("key", {id: 1, content: "Text"});
console.log(map1);

const map2 = new Map();
map2.set({keyName: "myCar"}, {valueData: {brand: "Renault", model: "Megane"}});
map2.set({keyName: "myPet"}, {valueData: {animal: "cat", name: "Fluffy"}});
map2.set({keyName: "myHouse"}, {valueData: {area: 100, rooms: 10}});
console.log(map2);

// Pobieram wartość z mapy:
const carFromMap = map1.get("myCar");
console.log(carFromMap);

const petFromMap = map1.get("myPet");
console.log(petFromMap);

// Sprawdzam, czy mapa posiada dany klucz (funkcja `has`):
if (map1.has("key")) {
  map1.delete("key");
  console.log(map1.get("key")); // undefined
} else {
  map1.set("myHouse", {rooms: 10, area: 100});
  console.log(map1.get("myHouse"));
}

map2.forEach((key, value) => console.log(`Key: ${key}; value: ${value}`));
console.log(map2.size);

for (const [key, value] of map2) {
  console.log(key, value);
}