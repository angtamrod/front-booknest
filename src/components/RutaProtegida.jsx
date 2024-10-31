//Importamos hooks
import { Navigate } from "react-router-dom";


/**
 * Componente RutaProtegida.
 * 
 * Este componente restringe el acceso a las rutas, que queremos que sea acceda mediante verificación.
 * Hooks: - Navigate: Para la redireccíon al login una vez se haya hecho la comprobación, si no hay token, te redirija al login
 * 
 * En este caso esta función verifica si existe un token de autenticación que está guardado en el sessionStorage a través de .getItem() . Si el usuario no está autenticado lo redirige a la página de login
 * 
 * @param {ReactNode} children - Renderizará los componentes hijos si el usuario está autenticado
 * @returns {ReactNode} - Devolverá el permiso para renderizar el componente protegido o una redirección a /login si el usuario no está verificado
 * 
 */

//Al implementar las rutas no sabía com gestionar el uso del token, para hacer una redirección por lo tanto pedí ayuda al ChatGPT, para guiarme en este paso

function RutaProtegida({ children }) {

    const token = sessionStorage.getItem("token");
    if(!token){
        return <Navigate to="/login" />;
    }
    return children;
};

export default RutaProtegida;
