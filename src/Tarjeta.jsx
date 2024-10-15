import { useState } from "react";

function Tarjeta() {

    let [editar,setEditar] = useState(false)

  
  return (
    <>

    { editar ? <form className="tarjeta fs-6 p-2 container mt-2 mx-auto mb-4 row g-3 shadow g-0 rounded md-mr-20">
                <h1 className="editar-h1 text-center">Editar</h1>

                <div className="editar-cuadros col-12">
                    <input type="text" className="formulario-inputs form-control" id="inputAddress" placeholder="El guardian entre el centeno..."/>
                    </div>

                    <div className="editar-cuadros col-12">  
                    <textarea className="editar-inputs form-control" placeholder="Deja tu opinión aquí" id="floatingTextarea"></textarea> 
                    </div>

                    <div className="input-group mb-1">
                        <select className=" form-select" id="inputGroupSelect02">
                            <option selected>Elige la temática...</option>
                            <option value="Ciencia Ficción">Ciencia Ficción🛸</option>
                            <option value="Fantasía">Fantasía🧙‍♂️</option>
                            <option value="Thriller">Thriller🕵️</option>
                            <option value="Historica">Histórica📚</option>
                            <option value="Terror">Terror👻</option>
                            <option value="Poesia">Poesía🌹</option>
                            <option value="Romance">Romance💖</option>
                            <option value="No ficcion">No ficción👩‍🎓</option>

                        </select>
                        <label className="editar-label editar-label--option input-group-text" htmlFor="inputGroupSelect02">Temática</label>
                    </div>

                    <div className="input-group mb-2">
                        <label className="editar-label editar-label--option input-group-text" htmlFor="inputGroupSelect02">Estado</label>
                        <select className=" form-select" id="inputGroupSelect02">
                            <option selected>Como vas con el libro...</option>
                            <option value="Sin empezar">Sin empezar</option>
                            <option value="Empezado">Empezado</option>
                            <option value="Terminado">Terminado</option>
                        </select>
                    </div>

                    <div className="col-12 mb-2 pr-3">
                        <label className="editar-label form-label mb-2">Calificación del libro:</label>
                        <div className="d-flex justify-content-between">
                            <div className="grid text-center">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio1">1⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio2">2⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio3">3⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio4">4⭐</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
                                    <label className="form-check-label editar-label--radio" htmlFor="inlineRadio5">5⭐</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="d-grid gap-1 mt-1 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn me-md-2 sm-mb-1 " type="button"
                                onClick={() => {setEditar(!editar)}}
                        >{ editar ? "Guardar" : "Editar"}</button>
                        <button className="tarjeta-boton tarjeta-boton--borrar btn" type="button">Borrar</button>
                    </div> 
                </form>
      
      : <div className="tarjeta fs-6 container mx-auto mt-2 mb-4 p-4 d-flex flex-column flex-md-row justify-content-between rounded shadow md-mr-10 md-ml-10">
              <div className="card-body flex-grow-1 ms-3">
                    <h3 className="tarjeta-h3 card-title fs-2 mb-4">Una corte de rosas y espinas</h3>
                    <p className="card-text"><strong>Género:</strong> Fantasía</p>
                    <p className="card-text"><strong>Puntuación:</strong> 5 estrellas⭐</p>  
                    <p className="card-text"><strong>Progreso:</strong> Leyendo...📖</p>  
                    <h4 className="tarjeta-h4 fs-5 ">Reseña</h4>
                    <p className="card-text text-justify">No tenía mucha esperanza con esta saga, pero se ha convertido en un imprescindible en mi estantería, es pura fantasía, con un toque más adulto, o más bien spicy</p> 
                    <div className="d-grid gap-1 mt-4 d-md-flex justify-content-md-end">
                        <button className="tarjeta-boton btn me-md-2" type="button"
                                onClick={() => {setEditar(!editar)}}
                        >{ editar ? "Guardar" : "Editar"}</button>
                        <button className="tarjeta-boton tarjeta-boton--borrar btn" type="button">Borrar</button>
                    </div>  
              </div>
      </div>}

    </>
  )
}

export default Tarjeta;