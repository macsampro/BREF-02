
// ecoute du boutton de validation:
// document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById("buttoninput");
  button.addEventListener("click", function(){
    validationMail();
    validationPass();
    console.log(button);
  })
  // }); 
  
  //fonction verification mail:
  function validationMail() {
    let mailinput = document.getElementById("inputmail"); 
    let mailerror = document.getElementById("erroremail");
    let email =  mailinput.value;
    let emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // FORMAT EMAIL !!! NE VERIFIE QUE LA SYNTAXE


    if (email === "") {
      mailerror.innerText = "L'adresse e-mail n'est pas valide";
      mailinput.style.border = "solid red";
      mailerror.style.color = "red";
    
      
    }else if(!emailRegex.test(email)){
      inputmail.style.borderColor = "red";
      erroremail.style.color = "red";
      erroremail. innerText = "L'adresse e-mail n'est pas valide";

    }else{
      erroremail.style.borderColor= "";
      erroremail. innerText = "";

    }
};
  

  //fonction verification mail:
  function validationPass() {
    let mdpinput = document.getElementById("inputpassword"); 
    let mdperror = document.getElementById("errorpassword");
    let mdp =  mdpinput.value;
    
    
    if (mdp === ""){
      mdperror.innerText = "mot de passe invalide";
      mdpinput.style.border = "solid red";
      mdperror.style.color = "red";
      
    }else{
      mdpinput.style.border= "";
      mdperror.innerText = "";

    }
};
  


