var itemList = document.getElementById('items');
var count=0;
function saveToLocalStorage(event)
{
    event.preventDefault();
    
    const amount = event.target.expenseAmount.value;
    const desc = event.target.chooseDescription.value;
    const category = event.target.category.value;
    count++;
    const obj = {
        amount,
        desc,
        category
    }
    localStorage.setItem(obj.desc, JSON.stringify(obj));
    showAmountOnScreen(obj);
}

function showAmountOnScreen(obj) {
    const parentElem = document.getElementById('items');
    const childElem = document.createElement('li');
    childElem.class = "list-group-item";
    childElem.textContent = obj.amount+'-'+obj.desc+'-'+obj.category;

    let deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.value ="Delete Expense ";
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.desc);
        parentElem.removeChild(childElem);
    }

    let editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value ="Edit Expense ";
    editBtn.onclick = () => {
        localStorage.removeItem(obj.desc);
        parentElem.removeChild(childElem);
        document.getElementById('expenseAmount').value = obj.amount;
        document.getElementById('chooseDescription').value = obj.desc;
        document.getElementById('category').value = obj.category;
    }

    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}
