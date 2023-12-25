const parentDiv = document.querySelector(".parentDiv");
const imgTag = document.createElement("img");
const clearTimeoutBtn = document.querySelector("button#timeout");

imgTag.setAttribute("src", "./assets/images/good_vibes_only.jpg");
imgTag.setAttribute("alt", "Good vibes only");
imgTag.style.width = "400px";

parentDiv.append(imgTag);

const printAttributes = () => {
  const imgTagAttributes = imgTag.getAttributeNames();
  for (let i = 0; i < imgTagAttributes.length; i++) {
    let currAttr = imgTagAttributes[i];
    console.log(`Atrybut: ${currAttr}; wartość atrybutu: ${imgTag.getAttribute(currAttr)}`);
  }  
} 

const timerId = setTimeout(printAttributes, 2000);
clearTimeoutBtn.addEventListener("click", () => clearTimeout(timerId));