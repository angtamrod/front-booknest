import { useEffect } from "react";
import { Link } from "react-router-dom";




function Login() {

    useEffect(() => {
        
        document.body.style.backgroundColor = "#EF7E6B";
        return () => {
          document.body.style.backgroundColor = "";
        };
      }, []);

  return (

    <>

    <main className="login d-flex row justify-content-center align-items-center ">

        <form className="login-form container mx-auto row p-2 g-4 shadow g-0 p-4 rounded md-mr-20">

            <div className="text-center w-10 h-auto pt-1">
                <img src="/imgs/booknest300.png" className="login-img img-fluid" alt="Logo de booknest" /> 
            </div>
       
            <div className="mb-2">
                <label htmlFor="loginEmail" className="login-label pl-2 form-label">Email</label>
                <input type="email" className="login-input form-control" id="loginEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-2">
                <label htmlFor="loginPassword1" className="login-label form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword1" />
            </div>
            <button type="button" className="login-btn login-btn--registro btn"><Link to="/registro" className="login-link text-decoration-none">Sign in</Link></button>
            <button type="submit" className="login-btn btn">Enviar</button>
        </form>   
       
    </main>
    
    </>
 
  )
};

export default Login;
