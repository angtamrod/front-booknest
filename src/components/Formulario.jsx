

function Formulario() {



  return (
    <>

    <form className="formulario container mx-auto mt-1 mb-5 row g-3 shadow g-0 p-5 rounded md-mr-20">

            <h1 className="formulario-h1 text-center">Nueva Lectura</h1>

            <div className="formulario-cuadros col-12 text-start">
            <label htmlFor="inputAddress" className="formulario-label form-label">Titulo del libro</label>
            <input type="text" className="formulario-inputs form-control" id="inputAddress" placeholder="El guardian entre el centeno..."/>
            </div>

            <div className="formulario-cuadros col-12 text-start">  
            <label htmlFor="inputAddress2" className="formulario-label form-label">Reseña sobre el libro</label>
            <textarea className="formulario-inputs form-control" placeholder="Deja tu opinión aquí" id="floatingTextarea"></textarea> 
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
                <label className="formulario-label formulario-label--option input-group-text" htmlFor="inputGroupSelect02">Temática</label>
            </div>

            <div className="input-group mb-1">
                <label className="formulario-label formulario-label--option input-group-text" htmlFor="inputGroupSelect02">Estado</label>
                <select className=" form-select" id="inputGroupSelect02">
                      <option selected>Como vas con el libro...</option>
                      <option value="Sin empezar">Sin empezar</option>
                      <option value="Empezado">Empezado</option>
                      <option value="Terminado">Terminado</option>
                </select>
            </div>

            <div className="col-12 mt-2 mb-3 text-start">
                <label className="formulario-label form-label mb-2">Calificación del libro:</label>
                <div className="d-flex justify-content-start">
                    <div className="grid text-center">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                            <label className="form-check-label formulario-label--radio" htmlFor="inlineRadio1">1<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                            <label className="form-check-label formulario-label--radio" htmlFor="inlineRadio2">2<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                            <label className="form-check-label formulario-label--radio" htmlFor="inlineRadio3">3<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                            <label className="form-check-label formulario-label--radio" htmlFor="inlineRadio4">4<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
                            <label className="form-check-label formulario-label--radio" htmlFor="inlineRadio5">5<i className="formulario-icon bi bi-star-fill"></i></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-grid gap-2">
                <button className="formulario-boton formulario-boton--guardar btn btn-primary" type="submmit">Guardar</button>
            </div>

    </form>
    
    </>
  )
};

export default Formulario;
