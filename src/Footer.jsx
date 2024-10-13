

function Footer() {


  return (


    <footer className="footer p-4 py-4 mt-5 ">
      <div className="container">
        <div className="row">
          {/* Columna de Información */}
          <div className="text-center col-12 col-md-4 mb-3 pt-3">
            <h5 className="footer-h5 fs-3">Sobre Nosotros</h5>
            <p className="text-justify fs-6 pt-2">BookNest es la plataforma perfecta para organizar, gestionar y descubrir libros maravillosos. ¡Llévate una biblioteca siempre contigo!</p>
          </div>


          {/* Columna de Logo */}
          <div className="text-center col-12 col-md-4 mb-3">
            <img className="img-fluid" src="/public/imgs/booknestazul150.png" alt="BookNest" width="140" height="140" />
          </div>

          {/* Columna de Enlaces */}
          <div className="col-12 col-md-4 mb-3 pt-3">
            <h5 className="text-center footer-h5 fs-3">Enlaces</h5>
            <ul className="text-center list-unstyled pt-2">
              <li><a href="#" className="footer-enlaces fs-6">Inicio⬆️</a></li>
              <li><a href="#" className="footer-enlaces fs-6">Mis libros📖</a></li>
            </ul>
          </div>

          
        </div>

        
        <div className="text-center mt-4">
          <p>&copy; 2024 BookNest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
