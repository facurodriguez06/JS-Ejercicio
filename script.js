// Función que recibe dos números y una operación
function operar(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b !== 0 ? a / b : "Error: división por 0";
}

// Función que conecta la interfaz con la lógica
function calcular() {
  // Tomamos valores del DOM
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("operacion").value;

  // Usamos la función operar
  const resultado = operar(n1, n2, op);

  // Mostramos en consola
  console.log("Resultado:", resultado);

  // Mostramos en la página
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
