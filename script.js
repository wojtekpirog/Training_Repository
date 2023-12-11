const olList = document.querySelector("ol");
console.log(olList);

const firstLi = document.createElement("li");
firstLi.className = "list-group-item p-0 pb-3";
firstLi.textContent = "🔹Pierwszy element listy";

olList.appendChild(firstLi);
console.log(firstLi);

firstLi.classList.add("text-success");
console.log(firstLi.classList);

firstLi.classList.remove("text-success")
console.log(firstLi.classList, firstLi.className);