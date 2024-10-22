import { useEffect } from "react";

function Registro() {

    //CHAT GPT
    useEffect(() => {
        
        document.body.style.backgroundColor = "#c9dbe7";
        return () => {
          document.body.style.backgroundColor = "";
        };
      }, []);


  return (

    <>

    <main className="registro d-flex row  p-3 justify-content-center align-items-center min-vh-100">

        <div className="text-center w-10 h-auto ">
                <img src="/imgs/booknestazul150.png" className="login-img img-fluid" alt="Logo para el login" /> 
        </div>
       
        <form className="registro-form container-xl mx-auto mt-1 mb-5 row p-5 g-4 shadow g-0 p-5 rounded md-mr-20">
            <h1 className="registro-h1 p-3 container fs-1 text-center mx-auto  mb-1">Sign in</h1>
            <div className="mb-2">
                <label htmlFor="registroEmail" className="registro-label form-label">Nombre</label>
                <input type="text" className="form-control" id="registroName" />
            </div>
            <div className="mb-2">
                <label htmlFor="registroEmail" className="registro-label form-label">Dirección de correo electrónico</label>
                <input type="email" className="form-control" id="registroEmail" />
            </div>
            <div className="mb-2">
                <label htmlFor="registroPassword1" className="registro-label form-label">Contraseña</label>
                <input type="password" className="form-control" id="registroPassword" />
            </div>
            <button type="submit" className="registro-btn btn">Enviar</button>
        </form>   
       
    </main>
   

    </>
 
  )
};

export default Registro;
