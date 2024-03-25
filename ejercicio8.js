class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    calcularArea(){
        return this.base*this.altura;
    }
    calcularPerimetro(){
        return 2*(this.base+this.altura);
    }
    
}
const rectangulo1= new Rectangulo(5,10);
console.log('Área: ',rectangulo1.calcularArea());
//Área: 50
console.log('Perímetro: ', rectangulo1.calcularPerimetro() );
//Perímetro: 30