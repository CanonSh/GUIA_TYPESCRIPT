class Cuenta{
    private nombre:string;
    private cantidad:number;
    private tipo_Cuenta:string;
    private numero_Cuenta:number;
    constructor(paraNombre:string,paraCantidad:number,paraTipo_Cuenta:string,paraNumero_Cuenta:number){
        this.nombre=paraNombre;
        this.cantidad=paraCantidad;
        this.tipo_Cuenta=paraTipo_Cuenta;
        this.numero_Cuenta=paraNumero_Cuenta;
    }
    public Depositar():void{
        if(this.cantidad<5){
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else{
            console.log(`Se ha depositado correctamente la cantidad de $${this.cantidad}.00`);
        }
    }
    public Retirar(valor:number):void{
        if(valor>5&&valor<=this.cantidad){
            this.cantidad-=valor;
            console.log(`Se ha retirado correctamente la cantidad de $${valor}.00
                Saldo restante: $${this.cantidad}.00`);
        }
        else{
            console.log("No hay suficiente saldo en la cuenta.");
        }
    }
    public MostrarDatos():void{
        console.log(`Nombre: ${this.nombre}
        Tipo de Cuenta: ${this.tipo_Cuenta}
        Número de Cuenta: ${this.numero_Cuenta}`);
    }
}

const cuenta = new Cuenta("Mario Alvarado", 100, "Ahorros", 123456);
cuenta.Depositar();
cuenta.Retirar(100);
cuenta.MostrarDatos();
