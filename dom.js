//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.all);
//console.log(document.all[10]);
var headerTitle= document.getElementById('main-header');
headerTitle.style.borderBottom= 'solid 9px #000';

var Titles=document.querySelectorAll('.title');
Titles[0].style.fontWeight='bold';
Titles[0].style.color= "green";


//manipulation on list items to make all the elements in bold
var items= document.getElementsByClassName('list-group');
items[0].style.fontWeight='bold';

var ListItem= document.getElementsByClassName('list-group-item');
ListItem[2].style.color="green";

ListItem[1].style.background="green";
ListItem[2].style.visibility="hidden";

//If we are trying to access new item with the same class name- it throws an error
//var NewItem= document.getElementsByClassName('list-group')
//NewItem[4].style.color="red"; 
 var TagItem=document.getElementsByTagName('li');
 TagItem[4].style.color="green";
