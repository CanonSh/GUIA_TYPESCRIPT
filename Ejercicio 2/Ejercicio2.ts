class Calculadora{
    constructor(numero1:number=0,numero2:number=0){
        this.numero1=numero1;
        this.numero2=numero2;
    }
    private numero1:number;
    private numero2:number;
    public Sumar():number{
        return this.numero1 + this.numero2;
    }
    public Restar():number{
        return this.numero1-this.numero2;
    }
    public Multiplicar():number{
        return this.numero1*this.numero2;
    }
    
    public Dividir():number{
        return this.numero1/this.numero2;
    }
    public Potencial():number{
        return Math.pow(this.numero1, this.numero2);
    }
    
    public Factorial():number{
        let contadorFactorial:number=this.numero1;
        for(let i:number=1;i<this.numero1-1;i++){
            contadorFactorial=contadorFactorial*(this.numero1-i);
            console.log(contadorFactorial);

        }
        return contadorFactorial ;
    }

}

let calculadora = new Calculadora(7,8);
console.log(calculadora.Factorial());
console.log(calculadora.Sumar());
console.log(calculadora.Restar());
console.log(calculadora.Multiplicar());
console.log(calculadora.Dividir());
console.log(calculadora.Potencial());
