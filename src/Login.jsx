import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";




function Login() {

    useEffect(() => {
        
        document.body.style.backgroundColor = "#c9dbe7";
        return () => {
          document.body.style.backgroundColor = "";
        };
      }, []);

      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      const navigate = useNavigate();

  return (

    <>

    <main className="login d-flex flex-column m-4 justify-content-start p-2 align-items-center w-90 min-vh-100">

        <div className="text-center w-10 h-auto mt-4">
                <img src="/imgs/booknest150.png" className="login-img img-fluid" alt="Logo de booknest" /> 
        </div>
       

        <form className="login-form container-sm w-80 d-flex flex-column justify-content-center align-items-center mx-auto row g-3 shadow m-2 p-4 rounded" onSubmit={ (evento) => {
                evento.preventDefault()

                if(!email || !password){
                    alert("Parece que te has dejado algún campo SIN RELLENAR 🔍")
                    return;
                }
                fetch("http://localhost:3000/api/login",{
                    method : "POST",
                    body : JSON.stringify({ email, password }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(respuesta => respuesta.json())
                .then((usuario) => {
                    console.log("Respuesta del servidor", usuario);
                    let { token,user } = usuario;
                    if(!token|| !user){
                        alert("Vayaa...Los datos no son correctos 😭. Inténtelo de nuevo por favor 😊 (ABSTÉNGANSE BOTS Y HACKERS😤)")
                        return;
                    }  
                    sessionStorage.setItem("token", token);
                    sessionStorage.setItem("usuario_id",user.id);
                    navigate('/');
                    
                }).catch((error) => {
                    console.error("Datos incorrectos", error);
                    alert("Definitivamente esos nos son los datos correctos ⛔");
                });
        }}>
            <h1 className="registro-h1 p-3 container fs-1 text-center mx-auto  mb-1">Login</h1>
            
            <div className="w-60">
                <label htmlFor="loginEmail" className="login-label pl-2 form-label">Email</label>
                <input type="email" placeholder="tu.email@aquí.com" className="login-input form-control" id="loginEmail" aria-describedby="emailHelp" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div className="mb-2 w-60">
                <label htmlFor="loginPassword1" className="login-label form-label">Password</label>
                <input type="password" placeholder="*************" className="form-control" id="loginPassword1" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            </div>
            <div className="d-flex justify-content-end gap-2 w-80 mt-4 pb-3">
                <Link to="/registro" className="login-link login-btn login-btn--registro btn btn-primary text-decoration-none">Regístrate</Link>
                <button type="submit" className="login-btn btn">Iniciar sesión</button>
            </div>
        </form>   
       
    </main>
    
    </>
 
  )
};

export default Login;
