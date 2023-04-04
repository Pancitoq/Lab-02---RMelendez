function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    
    let suma = num1 + num2;
    let producto = num3 * num4;
    
    document.getElementById("resultado").innerHTML = "La suma de los dos primeros números es: " + suma + "<br>El producto del tercer y cuarto número es: " + producto;
  }