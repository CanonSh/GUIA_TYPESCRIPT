var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "";
        this.colorTitulo = "";
        this.fuente = "";
        this.posicionTitulo = "";
    }
    CabeceraPagina.prototype.ObtenerTituloFuenteyColor = function (titulo, colorTitulo, fuente) {
        this.titulo = titulo;
        this.colorTitulo = colorTitulo;
        this.fuente = fuente;
    };
    CabeceraPagina.prototype.PosicionTitulo = function (posicionTitulo) {
        this.posicionTitulo = posicionTitulo;
    };
    CabeceraPagina.prototype.Imprimir = function () {
        var htmlTitulo = "\n    <h1 style=\"color: ".concat(this.colorTitulo, "; font-family: '").concat(this.fuente, "'; text-align: ").concat(this.posicionTitulo, ";\">\n    ").concat(this.titulo, "</h1>");
        var cabeza = document.getElementById("cabecera");
        cabeza.innerHTML = htmlTitulo;
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina();
cabecera.ObtenerTituloFuenteyColor("Holiwis este es el Ejercicio 1", "blue", "Arial");
cabecera.PosicionTitulo("center");
cabecera.Imprimir();
