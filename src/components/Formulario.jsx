import { useState } from "react";

function Formulario({nuevoLibro}) {

  let [titulo,setTitulo] = useState("")
  let [opinion,setOpinion] = useState("")
  let [tematica,setTematica] = useState("")
  let [progreso,setProgreso] = useState("")
  let [puntuacion,setPuntuacion]= useState(0)

  let usuario_id = sessionStorage.getItem("usuario_id");
  let controlador = new AbortController()
  let opcionesConfiguracion = {
                                  method : "POST",
                                  body : JSON.stringify({usuario_id,titulo,opinion,tematica,progreso,puntuacion}),
                                  headers : {
                                              "Content-type" : "application/json"
                                            }
                              }
  return (
    <>

    <form className="formulario container mx-auto mt-1 mb-5 row g-3 shadow g-0 p-4 rounded md-mr-20" onSubmit={(evento) => {
            evento.preventDefault()
            if(titulo.trim() !== "" && opinion.trim() !== "" && tematica !== "" && progreso !== ""){
                fetch("http://localhost:3000/api/libros/nuevo", opcionesConfiguracion)
                .then((respuesta) => {
                    console.log("Código de estado de respuesta:", respuesta.status);
                    return respuesta.json();
                  })
                .then(({ error, id }) => {
                    
                    if(!error) {
                        nuevoLibro({id,usuario_id,titulo,opinion,tematica,progreso,puntuacion})
                   
                        setTitulo("");
                        setOpinion("");
                        setTematica("");
                        setProgreso("")
                        setPuntuacion(0) 
                
                    }else {
                        console.log("Error al añadir la lectura")
                        
                    }
                })
                .catch(err => console.log(err))
                .finally(() => controlador.abort())
                
            }
    }}>

            <h1 className="formulario-h1 text-center">Nueva Lectura</h1>

            <div className="formulario-cuadros col-12 text-start">
            <label htmlFor="inputAddress" className="formulario-label form-label">Titulo del libro</label>
            <input type="text" className="formulario-inputs form-control" id="inputAddress" placeholder="Invéntatelo si no lo recuerdas 😉" 
            value={titulo} onChange={(evento) => setTitulo(evento.target.value)}/>
            </div>

            <div className="formulario-cuadros col-12 text-start">  
            <label htmlFor="inputAddress2" className="formulario-label form-label">Reseña sobre el libro</label>
            <textarea className="formulario-inputs form-control" placeholder="Deja tu opinión aquí, te gustará verla luego, y si no, cámbiala 😎" id="floatingTextarea" 
            value={opinion} onChange={(evento) => setOpinion(evento.target.value)}></textarea> 
            </div>

            <div className="input-group mb-1">
                <select className=" form-select" id="inputGroupSelect02" 
                value={tematica} onChange={(evento) => setTematica(evento.target.value)}>
                        <option value="">No juzgamos...🫣</option>
                        <option value="Ciencia Ficción🛸">Ciencia Ficción🛸</option>
                        <option value="Fantasía🧙‍♂️">Fantasía🧙‍♂️</option>
                        <option value="Thriller🕵️">Thriller🕵️</option>
                        <option value="Histórica📚">Histórica📚</option>
                        <option value="Terror👻">Terror👻</option>
                        <option value="Comedia🤣">Comedia🤣</option>
                        <option value="Poesía🌹">Poesía🌹</option>
                        <option value="Romance💖">Romance💖</option>
                        <option value="No ficción👩‍🎓">No ficción👩‍🎓</option>
                </select>
                <label className="formulario-label formulario-label--option input-group-text" htmlFor="inputGroupSelect02">Temática</label>
            </div>

            <div className="input-group mb-1">
                <label className="formulario-label formulario-label--option input-group-text" htmlFor="inputGroupSelect02">Progreso</label>
                <select className=" form-select" id="inputGroupSelect02" value={progreso} onChange={(evento) => setProgreso(evento.target.value)}>
                      <option value="">Dinos cuanto has leido...</option>
                      <option value="Sin empezar 🫢">Sin empezar 🫢</option>
                      <option value="Estoy en ello...📖">Estoy en ello...📖</option>
                      <option value="Terminado ✌️">Terminado ✌️</option>
                </select>
            </div>

            <div className="col-12 mt-2 mb-3 text-start">
                <label className="formulario-label form-label mt-1">Puntuación del libro:</label>
          {/* <div className="d-flex justify-content-start">
            {[1, 2, 3, 4, 5].map((value) => (
              <div className="form-check form-check-inline" key={value}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="puntuacion"
                  id={`puntuacion${value}`}
                  value={value}
                  checked={puntuacion === value}
                  onChange={() => setPuntuacion(value)}
                />
                <label className="form-check-label formulario-label--radio" htmlFor={`puntuacion${value}`}>
                  {value}
                  <i className="formulario-icon bi bi-star-fill"></i>
                </label>
              </div>
            ))}
          </div>
        </div> */}
              <div className="d-flex justify-content-center mb-2">
                      <div className="grid text-center">
                            <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="puntuaciones" id="puntuacion1" value="1" checked={puntuacion === 1} 
                                        onChange={() => setPuntuacion(1)}/>
                                  <label className="form-check-label editar-label--radio" htmlFor="puntuacion1" >1⭐</label>
                            </div>

                            <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="puntuaciones" id="puntuacion2" value="2" checked={puntuacion === 2} 
                                        onChange={() => setPuntuacion(2)}/>
                                  <label className="form-check-label editar-label--radio" htmlFor="puntuacion2">2⭐</label>
                            </div>

                            <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="puntuaciones" id="puntuacion3" value="3" checked={puntuacion === 3} 
                                          onChange={() => setPuntuacion(3)}/>
                                  <label className="form-check-label editar-label--radio" htmlFor="puntuacion3">3⭐</label>
                            </div>

                            <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="puntuaciones" id="puntuacion4" value="4" checked={puntuacion === 4} 
                                        onChange={() => setPuntuacion(4)}/>
                                  <label className="form-check-label editar-label--radio" htmlFor="puntuacion4">4⭐</label>
                            </div>

                            <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" name="puntuaciones" id="puntuacion5" value="5" checked={puntuacion === 5} 
                                        onChange={() => setPuntuacion(5)}/>
                                  <label className="form-check-label editar-label--radio" htmlFor="puntuacion5">5⭐</label>
                            </div>
                        </div>
                  </div>
            </div>

            <div className="d-grid gap-2">
                <button className="formulario-boton formulario-boton--guardar btn btn-primary" type="submit">Guardar</button>
            </div>

    </form>
    
    </>
  )
};

export default Formulario;
