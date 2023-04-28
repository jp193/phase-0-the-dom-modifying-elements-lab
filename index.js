// Write your code here!
const element = document.getElementById("main");
element.remove()

// const newHeader = document.getElementsByTagName("body");
// body.innerHTML =  "<h1>Poodles!</h1>"



const newHeader = document.createElement("h1")
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Jamal Portericker is the champion"