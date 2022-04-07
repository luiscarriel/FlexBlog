var btnClicar = document.getElementById("btn-clicar")

function email(){
    var emailPrincipal = document.getElementById("email").value;
    if(emailPrincipal == ""){
        alert("You didn't write anything. Please add your email.")
    }
    else if(emailPrincipal.length >= 30){
        alert("You've reached the 30 character limit!")
    }
}

btnClicar.addEventListener("click", email)
