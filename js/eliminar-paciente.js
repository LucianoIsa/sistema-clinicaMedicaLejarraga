
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();   //elimino el lugar donde especificamente hago el double click
    // el parentNode, sube una jerarquia del td y remueve todo el tr(osea el paciente entero)
    },500);  
});

