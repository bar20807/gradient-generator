import { setGradient } from "./setGradient"
import { HTMLInputs } from "../interfaces"
//Como hemos visto, teneoms que los eventListener hacen lo mismo con respecto a la orientacion, por lo que, podemos hacer lo siguiente.
export const setOrientation = (orientation: string, newOrientation: string, buttonElement: HTMLButtonElement, inputs: HTMLInputs) => {
    const body = document.querySelector("body")
    orientation = newOrientation
    //Pero con ello, quiere recuperar el ultimo elemento para recuperar esa clase. 
    //Para ello, tendriamos que hacer lo siguiente.
    const activeButton = document.querySelectorAll(".active")
    //console.log(activeButton)
    //Con ello, podremos saber como que botones fueron presionados.
    //Para ello, tendriamos que desactivar todo desde un principio
    activeButton.forEach((button) => {
        button.classList.remove("active")
    })
    //Para ello hariamos lo siguiente.
    //console.log(event.target) //Devuelve en si lo que tiene el boton
    //El target es el elemento que ha sido clickeado
    //No nos sirve, por lo que utilizaremos la referencia como tal del boton
    //topButton.classList.contains("active")
    //Nos sirve para tener la referencia del elemento boton, no se puede tomar el boton como tal. 
    if (buttonElement.classList.contains("active")) {
        buttonElement.classList.remove("active")
    }else{
        buttonElement.classList.add("active")
    }
    body!.style.background = setGradient(inputs.firstColorInput.value, inputs.secondColorInput.value, orientation)
}