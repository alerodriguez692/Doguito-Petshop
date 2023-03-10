export function valida(input){
  const tipoDeInput = input.dataset.tipo; 
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input);
  }
  
if(input.validity.valid){
input.parentElement.classList.remove("input-container--invalid");
input.parentElement.querySelector(".input-message-error").innerHTML = ""
} else { 
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)

}
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"

];



const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12 caracteres, al menos una letra minuscula, al menos una letra mayuscula, por lo menos un numero y no debe contener caracteres especiales o espacios"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años"
    },

    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es xxxxxxxxxx"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 y 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 y 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 y 40 caracteres"
    }
};
const validadores = {
    nacimiento: ( input) => validarNacimiento(input)
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach(( error) => {
        if(input.validity(error)){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });


    return mensaje
}

function validarNacimiento(input){
 const fechaCliente = new Date (input.value);
 let mensaje = "";
 if (!mayorDeEdad(fechaCliente)){
    mensaje = "Debes tener al menos 18 años";
 }


 input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
 const fechaActual = new Date();
 const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
 );

 return diferenciaFechas <= fechaActual;
} 