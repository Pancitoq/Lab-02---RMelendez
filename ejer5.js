function encontrarMayor() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
  
    if (numero1 > numero2 && numero1 > numero3) {
      document.getElementById("resultado").innerHTML = "El número mayor es " + numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
      document.getElementById("resultado").innerHTML = "El número mayor es " + numero2;
    } else {
      document.getElementById("resultado").innerHTML = "El número mayor es " + numero3;
    }
  }