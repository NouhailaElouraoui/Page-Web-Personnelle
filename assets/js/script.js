// validation du form
document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comment = document.getElementById("comment").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    swal("Erreur", "Veuillez entrer votre nom.", "error");
  } else if (!email || !emailRegex.test(email)) {
    swal("Erreur", "Veuillez entrer un email valide.", "error");
  } else if (!comment) {
    swal("Erreur", "Veuillez écrire un commentaire.", "error");
  } else {

    swal(
      "Succès",
      "Votre message a été envoyé avec succès!",
      "success"
    );

  }
});