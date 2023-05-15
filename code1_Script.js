var ListItem= document.querySelector('#items');
//Parent Node
console.log(ListItem.parentNode);
ListItem.parentNode.style.background="yellow";

//Child node
console.log(ListItem.childNodes);
ListItem.children[1].style.background="red";

//firstChild
console.log(ListItem.firstChild);
//ElementChild
console.log(ListItem.firstElementChild);

//LastChild
console.log(ListItem.lastChild);
//Element child
console.log(ListItem.lastElementChild);

//nextSiblings
console.log(ListItem.nextSibling);
//Element
console.log(ListItem.nextElementSibling);

//previous Sibling
console.log(ListItem.previousSibling);
//Element
console.log(ListItem.previousElementSibling);
ListItem.previousElementSibling.style.color='blue';

//to create and element and insert into DOM

//create a div
var newDiv=document.createElement('div');
//ADD class
newDiv.className='hello';
//Add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title', 'Hello Div');

//create a textNode
var newDivText=document.createTextNode(" Hey There");
//add text to Div
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');

var h1= document.getElementById('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);