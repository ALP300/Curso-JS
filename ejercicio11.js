class Circulo{
    constructor(radio){
        this.radio=radio;
    }
    calcularArea(){
        return Math.PI*this.radio*this.radio;
    }
    calcularPerimetro(){
        return 2*Math.PI*this.radio;
    }

    //PALABRAS JUNTAS
    //realizarOperacion
    //laCasaInformatica
    //laGuitarraDeLolo
    
}
const circulo1= new Circulo(13.4);
const circulo2= new Circulo(20.45);
const circulo3= new Circulo(65.43);
console.log("El perímetro del circulo 1 es: ", circulo1.calcularPerimetro());
console.log("El perímetro del circulo 2es: ", circulo2.calcularPerimetro())
console.log("El área del círculo 3 es: ",circulo1.calcularArea());
