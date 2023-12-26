const liItems = document.querySelectorAll("li");
let number = 1;

for (let i = 0; i < liItems.length; i++) {
  liItems[i].textContent = number;
  liItems[i].dataset.id = number;
  number++;
}

const thirdLi = document.querySelector("li[data-id='3']");
console.log(thirdLi);

const listItemGrandParent = thirdLi.closest("div.wrapper");
console.log(listItemGrandParent);