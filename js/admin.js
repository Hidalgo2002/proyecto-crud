function campoRequerido(input){
    console.log("estoy campoRequerido");
    console.log(input)
    if(input.value.trim().length > 0){
        console.log("paso la validacion")
    }else{
        console.log("no paso la validacion")
    }
}

// agregar eventos a los elementos del formulario

let CampoCodigo = document.querySelector("#codigo");

CampoCodigo.addEventListener("blur", () => {campoRequerido(CampoCodigo)});//ADEVENLISTENER ES  UN MANEJADRO DE EEVENTOS
