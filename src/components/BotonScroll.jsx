
//Importacion de hooks 
import { useState } from "react"

/**
 * Componente BotonScroll.
 * Este componente permite utilizar un botón que hace que se suba hacia arriba cuando bajamos hacia abajo en la pantalla,
 * y luego redirige o muestra el nuevo libro en la lista.
 *
 * Esta funcionalidad sabía como implementarla en JS vanilla pero para implementarla en React me valí de la ayuda de CHATGPT
 * 
 */
function BotonScroll(){

    //Estado para controlar la visibilidad del botón
    let [visible,setVisible] = useState(false)

    //Evento para cambiar la visibilidad del botón según según la ventana
    window.onscroll = () => {
        setVisible(window.scrollY>200)
    }

    return (
        <>


        {/* Renderiza de forma condicional, solo si visible es true */}
        {/* Función para desplazarse hacia arriba de forma suave */}
        {visible && (<button onClick={ () => {
                            window.scrollTo({
                                top:0,
                                behavior: "smooth",
                            })
                        }} className="scroll-button
                        bottom-50 end-0 btn position-fixed m-4 rounded-circle" ><i className="bi bi-arrow-up-circle-fill fs-1" title="Ir hacia arriba"></i>
                        </button>) }
                        
        </>
    )
}

export default BotonScroll