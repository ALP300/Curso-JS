class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    decirNombre(){
        console.log('Mi nombre es: ', this.nombre );
    }

    //DEBATE
    //nombre o this.nombre
}

const persona1= new Persona('Juan',20);
persona1.decirNombre();
//DATO INTERESANTE
//ACTUALMENTE JS ES EL LENGUAJE MÁS UTILIZADO
//SI HAY MUCHA DEMANDA EN ESE LENGUAJE 
//FRAMEWORKS
//SPRING BOOT   - JAVA
//ALFRESCO         -