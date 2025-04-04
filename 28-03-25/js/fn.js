console.log("mateo tiene 21 y javier 45");

let persona1 = {
    nombre:"javier",
    apellido:"parra",
    edad: 45,
    DNI: 35123123,
    colores:["rojo","verde","azul"]
}

let persona2 = {
    nombre:"mateo",
    apellido:"etchepare",
    edad: 21,
    DNI: 44123123,
    colores:["negro","blanco","amarillo"]
}

/// intento fallido de funcion flecha adentro de console.log
/*
console.log("calculando al mayor", (in1,in2) => {
    if (in1.edad < in2.edad) {
        return in2;
    }
    else if (in2.edad < in1.edad) {
        return in1;
    }
    else return "ambos tienen la misma edad";
})
*/
///////////////////

function calcularMasGrande(in1,in2) {
    if (in1.edad < in2.edad) {
        return in2;
    }
    else if (in2.edad < in1.edad) {
        return in1;
    }
    else return "ambos tienen la misma edad";
}

function leGustaElAzul(input) {
    for(let i = 0; i < 3; i++) {
        if (input.colores[i] == "azul") {
            return "le gusta el azul"
        }
    }
    return "no le gusta el azul"
}

let masGrande = calcularMasGrande(persona1,persona2)

console.log(masGrande)
console.log(leGustaElAzul(masGrande))