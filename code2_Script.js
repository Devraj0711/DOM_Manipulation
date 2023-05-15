var form_Id=document.getElementById('addForm');
var item_Id=document.getElementById('items');

form_Id.addEventListener('submit', addItem);
item_Id.addEventListener('click', removeItem);
function addItem(e)
{
    e.preventDefault();
//create a new Li item
var newItem= document.getElementById('item').value;

var li=document.createElement('li');
li.className='list item';
li.appendChild(document.createTextNode(newItem));

//create a delete button
var DeleteBtn= document.createElement('button');
//create a edit button
var EditBtn=document.createElement('button');
//Add class
DeleteBtn.className='btn btn-danger btn-sm float-right delete';
EditBtn.className='Edit';
//add name
DeleteBtn.appendChild(document.createTextNode('X'));
EditBtn.appendChild(document.createTextNode('Edit'));

// adding to Li
li.appendChild(DeleteBtn);

li.appendChild(EditBtn);

//adding new item to item list
item_Id.appendChild(li);
}

function removeItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Sure man?'))
        {
            var li=e.target.parentElement;
            item_Id.removeChild(li);
        }
    }
}