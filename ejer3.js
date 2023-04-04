function calcular() {
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    
    if (x>=y) {
      document.getElementById('suma').innerHTML = x+y
      document.getElementById('resta').innerHTML = x-y
    } else {
      document.getElementById('multiplicacion').innerHTML = x*y
      document.getElementById('division').innerHTML = x/y
    }
  }