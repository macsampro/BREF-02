document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    let prenom = document.getElementById('fname').value;
    console.log('Prénom :', prenom);
  });
  