function submitForm()
{
    
    var input = document.getElementById('name');
    let myObj = {userName: input.value};
    var input = document.getElementById('email');
    myObj.userEmail = input.value;
    var input = document.getElementById('phone');
    myObj.userPhone = input.value;
    var input = document.getElementById('date');
    myObj.userDate = input.value;
    var input = document.getElementById('time');
    myObj.userTime = input.value;

    let myObjSerialized = JSON.stringify(myObj);
    localStorage.setItem("myObj", myObjSerialized);

    let myObjDeserialized=JSON.parse(localStorage.getItem("myObj"));
    console.log(myObjDeserialized);
}