/**-----------------------------------------------------------------------------
 * REGISTRO.JSX
 * 
 * hooks: useEffect,useState, useNavigate, Link
 * Datos: fetch a API situada en"https://back-booknest.onrender.com/api/registro"
 * Estructura:
 *      - registro
 * 
 -------------------------------------------------------------------------------*/


//Importamos hooks
import { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Registro() {

    //Quería cambiar el color de fondo del body del login y el footer y no sabía como hacerlo en react, así que me valí de la ayuda de ChatGPT
    //Este usEffect cambia el color de fondo del body una vez se carga el componentee
    useEffect(() => {
        
        document.body.style.backgroundColor = "#EF7E6B";
        return () => {
          document.body.style.backgroundColor = "";
        };
      }, []);


    //Estados para poder gestionar los datos a rellenar del Registro
    let [nombre, setNombre] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const navigate = useNavigate();
    //Variable de entorno para las rutas de registro
    //const { VITE_REGISTRO } = import.meta.env
    //Controlador para cancelar la solicitud fetch si es necesario
    let controlador = new AbortController()

    let opcionesConfiguracion = {
                                    method : "POST",
                                    body : JSON.stringify({nombre, email, password}),
                                    headers : {
                                        "Content-type" : "application/json"
                                    },
                                    signal : controlador.signal
                                }


    
  return (

    <>

    <main className="registro flex-column d-flex m-4 justify-content-center align-items-center  w-90 min-vh-100">

            <div className="text-center w-10 h-auto ">
                    <img src="/imgs/booknestazul150.png" className="login-img img-fluid" alt="Logo para el login" /> 
            </div>
       
       {/*El fetch se ejecuta solo si están completos los campos de nombr, email y password*/ }

       {/*  */ }
            <form className="registro-form container-sm mx-auto mt-1 mb-2 row g-3 shadow p-4 rounded " onSubmit={ (evento) => {
                evento.preventDefault()
                if(!nombre||!email || !password){
                    alert("Parece que te has dejado algún campo SIN RELLENAR 🔍")
                    return;
                }
                fetch("https://back-booknest.onrender.com/api/registro",opcionesConfiguracion)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                            if (respuesta.status === 409) {
                                throw new Error("El usuario ya existe");
                            }else {
                                throw new Error("Error en el servidor");
                            }
                          }
                          return respuesta.json();
                    })
                .then((usuario) => {
                    console.log("Usuario registrado correctamente", usuario)
                    alert("Usuario registrado correctamente")
                    navigate('/login')
                    
                }).catch((error) => {
                   console.error("Error al registrar el usuario", error.message)
                   alert(error.message) 
                    
                        
                    
                })
                .finally(() => controlador.abort())
        }}>
            <h1 className="registro-h1 p-3 container fs-1 text-center mx-auto  mb-1">Registro</h1>
            
            
            <div className="mb-1">
                <label htmlFor="registroEmail" className="registro-label form-label" >Nombre de usuario</label>
                <input type="text" placeholder="Elige un nombre único (sé tú mismo)" className="registro-inputs form-control" id="registroName" value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
            </div>
            <div className="mb-1">
                <label htmlFor="registroEmail" className="registro-label form-label">Dirección de correo electrónico</label>
                <input type="email" placeholder="¡No te preocupes, no haremos spam!" className="registro-inputs form-control" id="registroEmail" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div className="mb-1">
                <label htmlFor="registroPassword1" className="registro-label form-label">Contraseña</label>
                <input type="password" placeholder="No uses tu fecha de cumpleaños 🙃" className="registro-inputs form-control" id="registroPassword" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            </div>
            {/* <button type="submit" className="registro-btn btn">Guardar</button> */}
            
                <Link to="/login" className="login-link registro-btn  btn  text-decoration-none">Login</Link>
                <button type="submit" className="registro-btn registro-btn--guardar btn">Guardar</button>
           
        </form>   
       
    </main>
   

    </>
 
  )
};

export default Registro;
