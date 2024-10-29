/**-----------------------------------------------------------------------------
 * LOGIN.JSX
 * 
 * hooks: useEffect,useState,Link,useNavigate
 * Datos: fetch a API situada en "https://back-booknest.onrender.com/api/login"
 * Estructura:
 *      - login
 * 
 -------------------------------------------------------------------------------*/

//Importamos hooks
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";




function Login() {

    //Quería cambiar el color de fondo del body del login y el footer y no sabía como hacerlo en react, así que me valí de la ayuda de ChatGPT
    //Este usEffect cambia el color de fondo del body una vez se carga el componentee
    useEffect(() => {
        
        document.body.style.backgroundColor = "#c9dbe7"
        return () => {
          document.body.style.backgroundColor = ""
        };
      }, []);

      //Estados para poder gestionar los datos a rellenar del Login
      let [email, setEmail] = useState("")
      let [password, setPassword] = useState("")
      //Esta variable encierra el hook para redirigir index.jsx
      const navigate = useNavigate()
      

      //variable de entorno para la ruta de login
      const { VITE_LOGIN } = import.meta.env
      //Controlador para cancelar la solicitud Fetch()
      let controlador = new AbortController()
      let opcionesConfiguracion = {
                                        method : "POST",
                                        body : JSON.stringify({ email, password }),
                                        headers : {
                                            "Content-type" : "application/json"
                                        },
                                        signal : controlador.signal
                                  }

  return (

    <>

    <main className="login d-flex flex-column m-4 justify-content-start p-2 align-items-center w-90 min-vh-100">

        <div className="text-center w-10 h-auto mt-4">
                <img src="/imgs/booknest150.png" className="login-img img-fluid" alt="Logo de booknest" /> 
        </div>
       
    {/*El fetch se ejecuta solo si están completos los campos de email y password*/ }

    {/*  */ }
        <form className="login-form container-sm w-80 d-flex flex-column justify-content-center align-items-center mx-auto row g-3 shadow m-2 p-4 rounded" onSubmit={ (evento) => {
                evento.preventDefault()

                if(!email || !password){
                    alert("Parece que te has dejado algún campo SIN RELLENAR 🔍")
                    return
                }
                fetch(VITE_LOGIN, opcionesConfiguracion)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        if (respuesta.status === 404) {
                            throw new Error("El usuario ya existe");
                        }else {
                            throw new Error("Error en el servidor");
                        }
                      }
                      return respuesta.json();
                })
                .then((usuario) => {
                    console.log("Respuesta del servidor", usuario)
                    let { token,user } = usuario;
                    if(!token|| !user){
                        alert("Datos incorrectos, nadie tiene memoria de Elefante 🐘")
                        return
                    }  
                    sessionStorage.setItem("token", token)
                    sessionStorage.setItem("usuario_id",user.id)
                    navigate('/');
                    
                })
                .catch((error) => {
                    console.error("Error al registrar el usuario", error.message)
                    alert("Datos incorrectos ⛔, tranquil@ nadie tiene memoria de Elefante 🐘",error.message) 
                    
                })
                .finally(() => controlador.abort())
        }}>
            <h1 className="login-h1 p-3 container fs-1 text-center mx-auto  mb-1">Login</h1>
            
            <div className="w-60">
                <label htmlFor="loginEmail" className="login-label pl-2 form-label">Email</label>
                <input type="email" placeholder="tu.email@aquí.com" className="login-inputs form-control" id="loginEmail" aria-describedby="emailHelp" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div className="mb-2 w-60">
                <label htmlFor="loginPassword1" className="login-label form-label">Password</label>
                <input type="password" placeholder="*************" className="login-inputs form-control" id="loginPassword1" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            </div>

            <Link to="/registro" className="login-link login-btn login-btn--registro btn text-decoration-none">Regístrate</Link>
            <button type="submit" className="login-btn btn">Iniciar sesión</button>
        </form>   
       
    </main>
    
    </>
 
  )
};

export default Login;
