function guardar(){
    let valorp1, valorp2, valorp3
    valorp1 = document.getElementById("p1").value
    valorp2 = document.getElementById("p2").value
    valorp3 = document.getElementById("p3").value
    
    //guardar localmente
    localStorage.setItem("p1",valorp1)
    localStorage.setItem("p2",valorp2)
    localStorage.setItem("p3",valorp3)
    //enviar al archivo respuesta.html   
    window.location="respuesta.html"
}



