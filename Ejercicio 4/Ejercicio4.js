var Cuenta = /** @class */ (function () {
    function Cuenta(paraNombre, paraCantidad, paraTipo_Cuenta, paraNumero_Cuenta) {
        this.nombre = paraNombre;
        this.cantidad = paraCantidad;
        this.tipo_Cuenta = paraTipo_Cuenta;
        this.numero_Cuenta = paraNumero_Cuenta;
    }
    Cuenta.prototype.Depositar = function () {
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            console.log("Se ha depositado correctamente la cantidad de $".concat(this.cantidad, ".00"));
        }
    };
    Cuenta.prototype.Retirar = function (valor) {
        if (valor > 5 && valor <= this.cantidad) {
            this.cantidad -= valor;
            console.log("Se ha retirado correctamente la cantidad de $".concat(valor, ".00\n                Saldo restante: $").concat(this.cantidad, ".00"));
        }
        else {
            console.log("No hay suficiente saldo en la cuenta.");
        }
    };
    Cuenta.prototype.MostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, "\n        Tipo de Cuenta: ").concat(this.tipo_Cuenta, "\n        N\u00FAmero de Cuenta: ").concat(this.numero_Cuenta));
    };
    return Cuenta;
}());
var cuenta = new Cuenta("Mario Alvarado", 100, "Ahorros", 123456);
cuenta.Depositar();
cuenta.Retirar(100);
cuenta.MostrarDatos();
