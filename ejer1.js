function submitForm() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Nombre: " + nombre + "<br>Correo electrónico: " + email;
  }