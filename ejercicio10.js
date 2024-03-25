class Coche{
    constructor(ma, modelo, año){
        this.ma = ma;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInformacion(){
        return `La marca es: ${this.ma}, El modelo es: ${this.modelo}, El color es: ${this.color}`;
    }
}
const coche1= new Coche('Toyota','Yaris','2020');
console.log(coche1.obtenerInformacion());