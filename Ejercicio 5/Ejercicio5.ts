abstract class Persona {
    protected nombre: string;
    protected apellido:string;
    protected direccion:string;
    protected telefono:string;
    protected edad:number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    public MayoriaEdad():void{
        if(this.edad>=18){
            console.log(`Es mayor de edad.`);
        }
        else{
            console.log(`Es menor de edad.`);
        }
    }
    public abstract MostrarDatos(): void;

}
class Empleado extends Persona{
    private sueldo:number;
    public CargarSueldo(sueldoParam:number):void{
        this.sueldo=sueldoParam;
    }
    private ImprimirSueldo():void{
        console.log(`Sueldo: $${this.sueldo}`);
    }
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
    }
    public MostrarDatos(): void {
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.MayoriaEdad();
        this.ImprimirSueldo();
    }
}

const empleado = new Empleado("Mario", "Alvarado", "Calle 123", "555-1234", 20);
empleado.CargarSueldo(600.00);
empleado.MostrarDatos();
