// Delegación de objetos.

const cheff = {
    tipo: 'cocina básica',
    cocinar: function (plato) {
        console.log(`cocinando ${plato}`);
    },
    presentarse: function () {
        console.log(`Hola soy un cheff especializado en ${this.tipo}`);
    }
};


const juan = {
    name: 'juan',
    age: 25,
    profesion: 'Developer',
    tipo: 'Front-End'
};

Object.setPrototypeOf(juan, cheff);

cheff.cortar = function (ingrendientes) {
    console.log(`cortando ${ingrendientes}`);
}

juan.cortar('Pescado');

// OCULTAMIENTO DE PROPIEDADES(PROPERTY SHADOWING)
// Ocultar las propiedades o métodos que sde encuentran en el 
// prototipo de un objeto por que rtepiten el mismo nombre.
 

// const pepe = { nombre: 'jose'};
// const number = [3,5,98];
// const sumar = (a, b) => a + b;
// const  ahora = new  Date();
// // 

juan.cocinar = function () {
    console.log('Ya no quiero preparar ceviche');
}
// cuatro maneras de usar  prototipos en javascript

// 1 .Ojetos literales

const obj ={ nombre: 'juan'};
const number = [4,8,15,18,26,57];
const sumar = (a, b) => a + b;
console.log(sumar);

// 2 .object.create(proto)

const juan = Object.create(cheff);

// 3 FUNCIONES CONSTRUCTORAS Y CLASES
function cheff(tipo = 'cocina básica') {    
    this.tipo = tipo;
}

cheff.prototype.cocinar = function (plato) {
    console.log(`cocinando ${plato}`);
}

cheff.prototype.presentarse = function () {
    console.log(`Hola soy un cheff especializzado en ${this.tipo}`);

}

const juan = new cheff();


// 3 FUNCIONES CONSTRUCTORAS Y CLASES  aplicando emac e 15

class  cheff {
    constructor(tipo ="cocina básica") {
        this.tipo = tipo;
    }

    cocinar(plato) {
        console.log(`cocinando ${plato}`);
    }

    presentarse(){
        console.log(`Hola soy un cheff especializado en ${this.tipo}`);
    }
}

const juan = new cheff();

// 4.

// Object.setPrototypeOf(obj, proto) y __proto__;

Object.setPrototypeOf(juan, cheff);
juan.__proto__ = cheff;