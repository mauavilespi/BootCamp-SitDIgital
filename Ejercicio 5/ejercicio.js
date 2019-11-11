const persona = {
    nombre: 'Jaime',
    apellidos: 'Cervantes Velasco',
    edad: 29,
    getNombre: function (){
    return `${this}.nombre ${this}apellidos`
    },
    hablar: function(){
        return `Hola soy ${this.getNombre()}, tengo ${this.edad()} años`
    }
};

const mascota = {
    nombre: 'Wizi',
    animal: 'Tortuga',
    edad: 15,
    
    getNombre: function (){
    return `${this.nombre} la ${this.animal}`
    },
    
    presentar: function(){
        return `Su nombre era ${this.getNombre()}, y tenía ${this.edad} años`
    }
};

document.body.querySelector('#resultado').append(JSON.stringify(mascota)); //Lo escribe en pantalla