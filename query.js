var header = document.querySelector('#main-header');
header.style.borderBottom = "solid 4px black";;

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value ='SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor= 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';
thirdItem.hidden='hidden';

var items = document.querySelectorAll('.list-group-item');
items[1].style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd');

for(var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}