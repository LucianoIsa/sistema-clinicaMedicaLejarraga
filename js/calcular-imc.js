<<<<<<< HEAD

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
    if (!pesoEsValido) {
        console.log("El Peso ingresado es INCORRECTO");
        tdImc.textContent = "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto"); // Adiciono la clase paciente-incorrecto al objeto paciente, para poder cambiarle el color desde el CSS.
    }
    if (!alturaEsValida) {
        console.log("El Altura ingresado es INCORRECTA");
        tdImc.textContent = "Altura Incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto"); 
    }
    if (pesoEsValido && alturaEsValida) {
        tdImc.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso,altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2)   //el to.fixed(2) ,me pone 2 decimales
}

function validarPeso(peso){
    if (peso >= 0 && peso < 700){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if (altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

=======

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
    if (!pesoEsValido) {
        console.log("El Peso ingresado es INCORRECTO");
        tdImc.textContent = "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto"); // Adiciono la clase paciente-incorrecto al objeto paciente, para poder cambiarle el color desde el CSS.
    }
    if (!alturaEsValida) {
        console.log("El Altura ingresado es INCORRECTA");
        tdImc.textContent = "Altura Incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto"); 
    }
    if (pesoEsValido && alturaEsValida) {
        tdImc.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso,altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2)   //el to.fixed(2) ,me pone 2 decimales
}

function validarPeso(peso){
    if (peso >= 0 && peso < 700){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if (altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

>>>>>>> 601fc98a4a1ed1746750bd644dc67b56fdcb21e0
