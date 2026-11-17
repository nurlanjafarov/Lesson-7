let myform = document.forms['myForm'];
 
const email = myform['email'];
 
const password = myform['password'];
 
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
 
 
function OnSubmit(event){
 
    event.preventDefault();
 
    console.log(email);
    console.log(email.value);
 
 
 
    if(!email.value.trim()){
        email.style = "border:2px solid red";
        email_error.innerHTML = "Email mutleq daxil edin."
    }
    else{
        email.style = "border:2px solid springgreen";
         email_error.innerHTML = ""
    }
 
 
    if(!password.value.trim()){
        password.style = "border:2px solid red";
        password_error.innerHTML = "Password mutleq daxil edin."
    }
    else{
        password.style = "border:2px solid springgreen";
        password_error.innerHTML = ""
    }
 
}
 