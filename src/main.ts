//Primero los modulos
//Despues los archivos de estilo de framework
//Por ultimo los archivos de estilos propios
import "normalize.css/normalize.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./style.css"
//Importamos los modulos
import { setGradient, setOrientation } from './helpers'
import { changeOrientation } from "./orientation"
//Centrando elementos
const body = document.querySelector("body")
//Obtenemos el clipboard button
const clipboardButton = document.getElementById("btn-copy") as HTMLButtonElement

let orientation = "to right"

//const topButton = document.getElementById("top-button") as HTMLButtonElement
//const bottomButton = document.getElementById("bottom-button") as HTMLButtonElement
//const leftButton = document.getElementById("left-button") as HTMLButtonElement
//const rightButton = document.getElementById("right-button") as HTMLButtonElement

//Ahora, utilizaremos el querySelector para poder seleccionar los botones
//Esto para optimizar el proceso.
const orientationButtons = document.querySelectorAll(".btn")

//Obteniendo los elementos del DOM
const firstColorInput = document.getElementById("first-color") as HTMLInputElement
/**
 * Tenemos que mediante TypeScript, podemos convertir un elemento generico, a un elemento especifico 
 * de tipo HTML para poder acceder a sus propiedades. Para este caso, se realiza 
 * colocando "as HTMLInputElement" al final de la variable que almacena el elemento del DOM
 */
const secondColorInput = document.getElementById("second-color") as HTMLInputElement

interface ButtonDatasetElement extends Element {
    dataset: {
        value: string
    }

}

//Por lo que, recorreremos cada uno de los botones que se tengan
orientationButtons.forEach((button) => {
    //console.log(button)
    //Le agregamos el listener 
    button.addEventListener("click", () => {
        const currentButton = button as ButtonDatasetElement
        //console.log(button)
        //console.log(button.classList)
        //console.log(button.classList.contains("active"))
        //Con ello, podremos saber si el boton tiene la clase active
        //Si la tiene, la quitamos, si no, la agregamos.
        setOrientation(orientation,`${currentButton.dataset.value}`, button as HTMLButtonElement, {firstColorInput, secondColorInput})
    })
})

//Ahora agregamos el evento al momento de hacer click en el topButton
/*topButton.addEventListener("click", () => {
    //orientation = "to top"
    //Lanzaremos el mismo cambio de color.
    //body!.style.background = setGradient(firstColorInput.value, secondColorInput.value, orientation)
    setOrientation("to top", topButton)
})

//Hacemos ese mismo codigo pero para el bottomButton
bottomButton.addEventListener("click", () => {
    //orientation = "to bottom"
    //body!.style.background = setGradient(firstColorInput.value, secondColorInput.value, orientation)
    setOrientation("to bottom", bottomButton)
})

//Hacemos lo mismo para el leftButton
leftButton.addEventListener("click", () => {
    setOrientation("to left", leftButton)
})

//Hacemos lo mismo para el rightButton
rightButton.addEventListener("click", () => {
    setOrientation("to right", rightButton)
})*/

//Ahora, haremos lo mismo para el boton de copiar
clipboardButton.addEventListener("click", () => changeOrientation({firstColorInput: firstColorInput, secondColorInput: secondColorInput}, orientation))

//Todo eso ya lo hicimos mediante un forEach, por lo que, no es necesario hacerlo de nuevo.

//Haremos lo mismo con otro boton, pero, se tiene que remover las clases que ya estan.
//y ser capaz de cambiar y alterar varias acciones.

firstColorInput.addEventListener("input", (event) => {
    //Hace referencia directa al elemento input del html.
    //console.log(event.target)
    const input: HTMLInputElement = event.target as HTMLInputElement
    //console.log(input.value)
    //Ya teniendo acceso al valor, podremos utilizarlo para aplicarlo al body
    //body!.style.background = `linear-gradient(to right, ${input.value}, #ff6347)`
    /**
     * Con el signo de admiración, le estamos diciendo a TypeScript que estamos seguros de que el elemento
     * body no es nulo, por lo que no es necesario que nos muestre un error.
     */
    //Haremos lo mismo, pero utilizando una funcion
    body!.style.background = setGradient(input.value, secondColorInput.value, orientation)
})
//Ahora hacemos lo mismo para el segundo input
secondColorInput.addEventListener("input", (event) => {
    const input: HTMLInputElement = event.target as HTMLInputElement
    //body!.style.background = `linear-gradient(to right, red, ${input.value})`
    /**
     * Ahora, el objetivo seria el sincronizar cada uno de los cambios que se realicen, 
     * para que el fondo se vaya modificando conforme se vayan cambiando los valores de los inputs
     */
    //Hacemos lo mismo, pero invertido, en donde, el firstColor sea el secondColor, y el input, sea el secondColor
    body!.style.background = setGradient(firstColorInput.value, input.value, orientation)
})
/**
 * Como podemos ver los eventos se podria decir que son los mismos.
 */
//console.log(firstColorInput?.value)