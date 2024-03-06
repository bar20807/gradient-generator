//Primero utilizaremos normalize
import swal from 'sweetalert2'
import { setGradient } from '../helpers'
import { HTMLInputs } from '../interfaces'
export const changeOrientation = async (inputs: HTMLInputs, orientation: string) => {
    //Cuando se le de click lo primero que se quiere hacer es un setGradient
    //Para que el texto se actualice
    const gradient = setGradient(inputs.firstColorInput.value, inputs.secondColorInput.value, orientation)
    //console.log(gradient)
    //Ya que se tiene, utilizamos el navigator para poder copiar el texto
    if (!navigator.clipboard) {
        //Si no se tiene acceso al clipboard, se mostrara un mensaje
        //alert("No se tiene acceso al clipboard")
        //Esto lo usaremos para mostrar una alerta de error.
        swal.fire("Error", "No se tiene acceso al clipboard", "error")
        return 
    }
    //Ahora, si existe, usaremos el swal para mostrar un mensaje de exito
    //Con ello, se podra copiar el texto
    await navigator.clipboard.writeText(gradient)

    swal.fire({
        title: "Copiado",
        text: "El gradiente ha sido copiado al portapapeles",
        icon: "success",
        toast: true,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true
    })

    //Ahora utilizaremos sweet alert para mostrar la alerta de copiado.
}