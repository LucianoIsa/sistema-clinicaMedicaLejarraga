var botonAdicional = document.querySelector("#adicionar-paciente");

botonAdicional.addEventListener("click", function(){ //
    event.preventDefault();     //evito el comportamiento padron del evento, al pasar event como funcion
    
    var form = document.querySelector("#formulario-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);
    //console.log(errores);
    
    if (errores.length > 0){
       exhibirMensajesErrores(errores);
        return;
    };

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});

function capturarDatosPaciente(form){
    //Capturo los datos del formulario,creando la clase paciente
    var paciente ={ 
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        peso: form.peso.value,
        altura: form.altura.value,
        colesterol: form.colesterol.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    };
    return paciente;
}

function construirTr(paciente){

        //Creo los tds(elemntos) , una etiqueta <tr> y 5 etiq. <td>
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");  //creo una clase adicionando la clase paciente
        //Asigno  los valores en cada una de esas etiquetas Td usando textContent
        
        //asocio cada etiqueta a pacienteTr de los td, y a la tabla de asigno el tr
        pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
        pacienteTr.appendChild(construirTd(paciente.apellido, "info-apellido"));
        pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(construirTd(paciente.colesterol,"info-colesterol"));
        pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));
                         // console.log(pacienteTr);
        return pacienteTr;

}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    var errores = [];

    if (paciente.nombre.length == 0 ){
        errores.push("Debe Ingresar un NOMBRE válido");
    }
    if (paciente.apellido.length == 0 ){
        errores.push("Debe Ingresar un APELLIDO válido");
    }
    if (paciente.peso.length == 0 ){
        errores.push("El Peso no puede estar vacío");
    }
    if (paciente.altura.length == 0 ){
        errores.push("La altura no puede estar vacía");
    }
    if (paciente.colesterol.length == 0 ){
        errores.push("El Colesterol ingresado no puede estar vacío");
    }
    if (!validarPeso(paciente.peso)){
        errores.push("El PESO ingresado es INCORRECTO");
    
    }
    if (!validarAltura(paciente.altura)){
        errores.push("La ALTURA ingresada es INCORRECTA");
    
    }
    return errores;
}
function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""; 
    
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}