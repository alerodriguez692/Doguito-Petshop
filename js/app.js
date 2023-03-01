import { valida } from "./validaciones";

const input = document.querySelectorAll("input");

input.forEach(input => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    } )

})
    
    