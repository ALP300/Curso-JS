class Libro{
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }
    obtenerInformacion(){
        return `Título: ${this.titulo}, autor: ${this.autor}`; 
    }
}
const libro1= new Libro('Duna','Frank Herbert');
const libro2= new Libro('El Hobbit','J. R. R. Tolkien');

console.log(libro1.obtenerInformacion());
console.log(libro2.obtenerInformacion());