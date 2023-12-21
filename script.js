const pageHeading = document.querySelector("h1");
const generateBtn = document.querySelector("button");
const containerFluid = document.querySelector("div.container-fluid");

const showList = () => {
  const listContainer = document.createElement("div");
  const uList = document.createElement("ul"); 

  listContainer.className = "mt-4";
  containerFluid.append(listContainer);

  uList.className = "list-group list-group-flush";
  listContainer.append(uList);

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `🔹Item number: ${i}`;
    uList.append(li);
  }

  const lastItem = uList.lastElementChild; 
  lastItem.innerText = "❗Jestem ostatnim elementem❗"
  lastItem.style.backgroundColor = "blue";
  lastItem.style.padding = "20px 40px";
  lastItem.style.fontSize = "20px";
  lastItem.style.textAlign = "center";
}

generateBtn.addEventListener("click", showList);