function submitForm()
{
    var input = document.getElementById('name');
    let myObj = {userName: input.value};
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
   var itemList = document.getElementById('items');
   itemList.appendChild(li);
   
}

