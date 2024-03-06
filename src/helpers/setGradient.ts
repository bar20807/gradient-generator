//Creamos la funcion para setear el gradiente.
export const setGradient = (firstColor: string , secondColor: string, orientation: string = "to right") => {
    const text = document.getElementById("text") as HTMLParagraphElement
    const gradient = `linear-gradient(${orientation}, ${firstColor}, ${secondColor})`
    //Con esto podremos cambiar el texto del parrafo que muestra que gradiente se tiene
    text.innerText = gradient
    return gradient
}