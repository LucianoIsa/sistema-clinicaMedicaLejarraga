var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://github.com/LucianoIsa/sistema-clinicaMedicaLejarraga/blob/master/pacientes.json");
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if (xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta); //transformo el string 
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente);
                
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        };
    });
    xhr.send()
});