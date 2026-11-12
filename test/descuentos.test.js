const assert = require("assert");
const { calcularTotal, calcularPrecioFinal } = require("../src/descuentos");

class Cliente {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  getNombre() {
    return this.nombre;
  }

  getTipo() {
    return this.tipo;
  }
}

// Pruebas para Cliente
const clienteEstudiante = new Cliente("Juan", "estudiante");
const clienteNormal = new Cliente("Ana", "normal");

assert.strictEqual(clienteEstudiante.getNombre(), "Juan");
assert.strictEqual(clienteEstudiante.getTipo(), "estudiante");
assert.strictEqual(clienteNormal.getNombre(), "Ana");
assert.strictEqual(clienteNormal.getTipo(), "normal");

// Pruebas para calcularTotal
assert.strictEqual(calcularTotal(100, 20), 80);
assert.strictEqual(calcularTotal(50, 0), 50);

assert.strictEqual(calcularPrecioFinal(100, clienteEstudiante.getTipo()), 85);
assert.strictEqual(calcularPrecioFinal(10000, clienteEstudiante.getTipo()), 8500);
assert.strictEqual(calcularPrecioFinal(100, clienteNormal.getTipo()), 100);
assert.strictEqual(calcularPrecioFinal(10000, clienteNormal.getTipo()), 10000);


console.log("Tests ejecutados correctamente");

