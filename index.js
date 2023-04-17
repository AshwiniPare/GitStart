console.dir(document);

var header = document.getElementById('main-header');
header.style.borderBottom = "solid 3px #000"

var headerTitle = document.getElementById('addItems');
headerTitle.style.font = "bold";
headerTitle.style.color = "green";

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}