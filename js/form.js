var botonAdicional = document.querySelector("#adicionar-paciente");
botonAdicional.addEventListener("click", function(){ //
    event.preventDefault();     //evito el comportamiento padron del evento, al pasar event como funcion
    
    var form = document.querySelector("#formulario-adicionar");

    var nombre = form.nombre.value;
    var apellido = form.apellido.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var colesterol = form.colesterol.value;
    
    var tabla = document.querySelector("#tabla-pacientes");
    
    // creo (elemntos) una etiqueta <tr> y 5 etiq. <td>
    pacienteTr = document.createElement("tr");
    nombreTd =document.createElement("td");
    apellidoTd =document.createElement("td");
    pesoTd =document.createElement("td");
    alturaTd =document.createElement("td");
    colesterolTd =document.createElement("td");
    imcTd =document.createElement("td");
    // cargo los valores en cada una de esas etiquetas Td usando textContent:
    nombreTd.textContent = nombre;
    apellidoTd.textContent = apellido;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    colesterolTd.textContent = colesterol;
    imcTd.textContent = calcularIMC(peso,altura);

    //asocio cada etiqueta a pacienteTr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(apellidoTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(colesterolTd);
    pacienteTr.appendChild(imcTd);
    // console.log(pacienteTr);

    tabla.appendChild(pacienteTr);






});