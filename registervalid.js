$(document).ready(function () {
   'use strict' ;
$(".first_name").blur(function () { 
   

if ($(this).val().length<4){

 $(this).parent().find('.custom-alert').fadeIn(200)  ; 
    
}else {
    $(this).parent().find('.custom-alert').fadeOut(200) ;  

}


    
});
$(".sur_name").blur(function () { 
   

    if ($(this).val().length<4){
    
     $(this).parent().find('.custom-alert').fadeIn(200)  ; 
        
    }else {
        $(this).parent().find('.custom-alert').fadeOut(200) ;  
    
    }
    
    
        
    });

    $(".email").blur(function () { 
   

        if ($(this).val().length<8){
        
         $(this).parent().find('.custom-alert').fadeIn(200)  ; 
            
        }else {
            $(this).parent().find('.custom-alert').fadeOut(200) ;  
        
        }
        
        
            
        });

    
    $(".password").blur(function () { 
   

        if ($(this).val().length<8){
        
         $(this).parent().find('.custom-alert').fadeIn(200)  ; 
            
        }else {
            $(this).parent().find('.custom-alert').fadeOut(200) ;  
        
        }
             
        });
    
});


let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('Password')
let btnregister = document.getElementById('signup')

btnregister.addEventListener("click",function(e){
e.preventDefault();
if(username.value===""|| email.value ===""|| password.value===""){
    alert('pleas enter data')
}
else{
localStorage.setItem("username",username.value)
localStorage.setItem("email",email.value)
localStorage.setItem("password",password.value)

setTimeout(() => {
    window.location="fac_login.html"
    
}, 1000);

}


})

