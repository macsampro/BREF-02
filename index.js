
// ecoute du boutton de validation:
document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById("buttoninput");
  button.addEventListener("click", function(){
    validationEmail();
    validationPass();
    console.log(button);
  })
  }); 
  
  //fonction verification mail:
  function validationMail(params) {
    let mailinput = document.getElementById(mailinput); 
    let emailError = document.getElementById(emailError);
    let email =  mailinput.value;
    let emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // FORMAT EMAIL !!! NE VERIFIE QUE LA SYNTAXE


    if (email === "") {
      mailinput.style.borderColor= "red";
      emailError.style.color = "red";
      emailError. innerText = "L'adresse e-mail n'est pas valide";
    }else if(!emailRegex.test(email)){
      mailinput.style.borderColor= "red";
      emailError.style.color = "red";
      emailError. innerText = "L'adresse e-mail n'est pas valide";

    }else{
      mailinput.style.borderColor= "";
      emailError. innerText = "";

    }
  }



