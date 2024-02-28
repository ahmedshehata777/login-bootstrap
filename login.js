let username=document.getElementById("email");
let password=document.getElementById("password");
let btnlogin =document.getElementById("signin");

let getuser= localStorage.getItem('email');

let getpassword= localStorage.getItem('password');

btnlogin.addEventListener("click",function(e){
    e.preventDefault();
    debugger;
    if(username.value===""|| password.value===""){
        alert('pleas fill data')
    }else{
if (( getuser && (getuser.trim() === username.value.trim()) ) && ( getpassword && (getpassword === password.value ))){

setTimeout(() => {
     window.location="fac_home.html" 
}, 1500);

  

}
else{

   alert("username or password wrong");

};

}

});

