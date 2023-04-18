var itemList = document.getElementById('items');

function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const myObj = {
        name,
        email,
        phone
    }

    localStorage.setItem(myObj.email,JSON.stringify(myObj));
    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj)
{
    const parentElem = document.getElementById('items');
    const childElem = document.createElement('li');
    childElem.textContent = myObj.name+"-"+myObj.email+"-"+myObj.phone;

    //adding delete button
    const deleteBtn = document.createElement('input');
    deleteBtn.type="button";
    deleteBtn.value="Delete";
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
    
}
/*function submitForm()
{
    var input = document.getElementById('name');
    myObj.userName= input.value;
    var input = document.getElementById('email');
    myObj.userEmail = input.value;
    var input = document.getElementById('phone');
    myObj.userPhone = input.value;
    
    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem(myObj.userEmail, myObjSerialized);

   let myObjDeserialized=JSON.parse(localStorage.getItem(myObj.userEmail));
   console.log(myObjDeserialized);

   //DOM Manipulation
   var userInfo = myObj.userName+"-"+myObj.userEmail+"-"+myObj.userPhone;
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(userInfo));
    //Adding delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.addEventListener('click', deleteFunction);
    li.appendChild(deleteBtn);
   itemList.appendChild(li);
   
}

function deleteFunction(e)
{
    e.preventDefault();
    let li = e.target.parentElement;
    itemList.removeChild(li);
    localStorage.removeItem(myObj.userEmail);
}
*/
