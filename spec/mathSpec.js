// spec/mathSpec.js
const { suma, resta, multiplicacion, division } = require('../src/math');

describe('Funciones matemáticas', function() {
    // Pruebas para suma
    it('debería sumar dos números correctamente', function() {
        expect(suma(2, 3)).toBe(5);
    });

    // Pruebas para resta
    it('debería restar dos números correctamente', function() {
        expect(resta(5, 3)).toBe(2);
    });

    // Pruebas para multiplicación
    it('debería multiplicar dos números correctamente', function() {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    // Pruebas para división
    it('debería dividir dos números correctamente', function() {
        expect(division(6, 3)).toBe(2);
    });

    it('debería lanzar un error al intentar dividir por cero', function() {
        expect(() => division(6, 0)).toThrowError("No se puede dividir por cero");
    });
});