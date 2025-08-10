var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        if (numero1 === void 0) { numero1 = 0; }
        if (numero2 === void 0) { numero2 = 0; }
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.Sumar = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.Restar = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.Multiplicar = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.Dividir = function () {
        return this.numero1 / this.numero2;
    };
    Calculadora.prototype.Potencial = function () {
        return Math.pow(this.numero1, this.numero2);
    };
    Calculadora.prototype.Factorial = function () {
        var contadorFactorial = this.numero1;
        for (var i = 1; i < this.numero1 - 1; i++) {
            contadorFactorial = contadorFactorial * (this.numero1 - i);
            console.log(contadorFactorial);
        }
        return contadorFactorial;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(7, 8);
console.log(calculadora.Factorial());
console.log(calculadora.Sumar());
console.log(calculadora.Restar());
console.log(calculadora.Multiplicar());
console.log(calculadora.Dividir());
console.log(calculadora.Potencial());
