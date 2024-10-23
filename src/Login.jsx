import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";




function Login() {

    useEffect(() => {
        
        document.body.style.backgroundColor = "#EF7E6B";
        return () => {
          document.body.style.backgroundColor = "";
        };
      }, []);

      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      const navigate = useNavigate();

  return (

    <>

    <main className="login d-flex row justify-content-center align-items-center ">

        <form className="login-form container mx-auto row p-2 g-4 shadow g-0 p-4 rounded md-mr-20" onSubmit={ (evento) => {
                evento.preventDefault()
                fetch("",{
                    method : "POST",
                    body : JSON.stringify({ email, password}),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(respuesta => respuesta.json())
                .then((usuario) => {
                    console.log("Usuario registrado correctamente", usuario);
                    const { token } = usuario;
                    localStorage.setItem("token", token);
                    navigate('/');
                    
                }).catch((error) => {
                    console.error("Datos incorrectos", error);
                    alert("Los datos introducidos incorrectos")
                });
        }}>

            <div className="text-center w-10 h-auto pt-1">
                <img src="/imgs/booknest300.png" className="login-img img-fluid" alt="Logo de booknest" /> 
            </div>
       
            <div className="mb-2">
                <label htmlFor="loginEmail" className="login-label pl-2 form-label">Email</label>
                <input type="email" className="login-input form-control" id="loginEmail" aria-describedby="emailHelp" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="loginPassword1" className="login-label form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword1" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            </div>
            <button type="button" className="login-btn login-btn--registro btn"><Link to="/registro" className="login-link text-decoration-none">Regístrate</Link></button>
            <button type="submit" className="login-btn btn">Iniciar sesión</button>
        </form>   
       
    </main>
    
    </>
 
  )
};

export default Login;
