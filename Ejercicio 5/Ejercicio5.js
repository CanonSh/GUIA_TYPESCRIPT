var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.MayoriaEdad = function () {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        }
        else {
            console.log("Es menor de edad.");
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        return _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
    }
    Empleado.prototype.CargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.ImprimirSueldo = function () {
        console.log("Sueldo: $".concat(this.sueldo));
    };
    Empleado.prototype.MostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        this.MayoriaEdad();
        this.ImprimirSueldo();
    };
    return Empleado;
}(Persona));
var empleado = new Empleado("Mario", "Alvarado", "Calle 123", "555-1234", 20);
empleado.CargarSueldo(600.00);
empleado.MostrarDatos();
