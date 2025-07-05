let myDiv = document.querySelector("#mydiv");

let newElement = document.createElement('span');
newElement.textContent = "Michael Jackson";

myDiv.insertAdjacentElement('beforebegin', newElement);
// myDiv.insertAdjacentElement('afterend', newElement);
// myDiv.insertAdjacentElement('afterbegin', newElement);
// myDiv.insertAdjacentElement('beforeend', newElement);


let parent = document.querySelector('#mydiv');
let child = document.querySelector("#first");

parent.removeChild(child);

//let something = $0 --> selects that particulat Html element
//there are 4 things in DOM
// 
// 1.innerhtml
// 2.outerhtml 3.textContent 4.innerText.