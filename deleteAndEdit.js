var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);

function addItem(e)
{
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn = document.createElement('button');

    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete ';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');

    //add classes to delete button
    editBtn.className = 'btn btn-sm float-right';

    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);

}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}