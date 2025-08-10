class CabeceraPagina{
   private titulo: string;
   private colorTitulo: string;
   private fuente:string;
   private posicionTitulo:string; 
   constructor(){
    this.titulo="";
    this.colorTitulo="";
    this.fuente="";
    this.posicionTitulo="";
   }
   public ObtenerTituloFuenteyColor(titulo:string,colorTitulo:string,fuente:string):void{
        this.titulo=titulo;
        this.colorTitulo=colorTitulo;
        this.fuente=fuente;
    }
   public PosicionTitulo(posicionTitulo:"center" | "left" | "right"):void{
        this.posicionTitulo=posicionTitulo;
    }
    
   public Imprimir():void{
    const htmlTitulo=`
    <h1 style="color: ${this.colorTitulo}; font-family: '${this.fuente}'; text-align: ${this.posicionTitulo};">
    ${this.titulo}</h1>`;
    let cabeza = document.getElementById("cabecera") as HTMLElement;
    cabeza.innerHTML=htmlTitulo;
   }
}

let cabecera = new CabeceraPagina();
cabecera.ObtenerTituloFuenteyColor("Holiwis este es el Ejercicio 1", "blue", "Arial");
cabecera.PosicionTitulo("center");
cabecera.Imprimir();

