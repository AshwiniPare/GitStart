var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = "grey";

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

var newDiv = document.createElement('div');
newDiv.className='hi';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var  newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

//insert before item1
var newDiv2 = document.createElement('div');
newDiv2.className='hi2';
newDiv2.id = 'hi2';
newDiv2.setAttribute('title', 'Hello Div');
var  newDivText2 = document.createTextNode("Hello World");
newDiv2.appendChild(newDivText2);
var container2=document.querySelector('.list-group');
container2.insertBefore(newDiv2, itemList.firstElementChild);





