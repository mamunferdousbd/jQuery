$("#loginBtn").click(function(){ 
    

    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if(password1 !="" && password2!=""){

        if(password1==password2){
            alert("Login Successful.");
        }else{
            alert("Password Mismatch");
        }

    }else{
        alert("Please enter your password.");
    }
});