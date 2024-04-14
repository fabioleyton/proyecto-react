import '@fortawesome/fontawesome-free/css/all.css'; // Importar todos los estilos de FontAwesome
import React from 'react';
import './App.css';
import logo from "./img/logo1.png";
import logo2 from "./img/wt.png";


function App() {
  const verificarLogin = () => {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario && contraseña) {
      // Si se han ingresado usuario y contraseña, redirigir a la página de productos
      window.location.href = 'productos.html';
    } else {
      // Si no se han ingresado ambos, mostrar un mensaje
      alert('No has iniciado sesión. Por favor, ingresa usuario y contraseña.');
    }
 

  };
    //<Link to="/registro" className="boton">Registrarse</Link>
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#141414' }}>
        <div className="logoPrincipal">
        <div className="navbar-brand">
         <img src={logo} alt="Logo" /> {/* Utiliza la variable logo para mostrar la imagen */}
        </div>
        </div>
      </nav>

      <div className="containerprincipal">
        <div className="form-group">
          <input id="usuario" type="text" className="form-control" name="username" placeholder="usuario" />
          <br />
          <input id="contraseña" type="password" className="form-control" name="password" placeholder="contraseña" />
          <br />
          <div className="button-container">
            <button id="boton" className="boton" onClick={verificarLogin}>Iniciar sesión</button>
            <br />
            <a href="registro.html" className="boton">Registrarse</a>
          </div>
        </div>
      </div>

      <header className="jumbotron jumbotron-fluid">
        <div className="parrafo text-center">
          <div className="section1">
            <h1 className="display-4">Control y Manejo de Inventarios</h1>
            <p className="lead">
              <h2>¡Controla, optimiza y potencia tu inventario con nuestro revolucionario software de gestión!</h2>
              <p>Nuestro software de control y manejo de inventarios es la solución definitiva para empresas que buscan una
                gestión logística impecable y una rentabilidad sin igual. Con una interfaz gráfica intuitiva y fácil de
                usar, podrás registrar nuevos productos, seguir movimientos, generar alertas sobre stock mínimo y mucho
                más.</p>
              <p>Imagina tener el poder de saber en tiempo real qué productos están disponibles, cuándo vencen las
                garantías, y obtener reportes precisos con solo unos clics. Además, nuestro software se adapta a tus
                necesidades, desde pequeños inventarios hasta grandes empresas, brindando el mismo nivel de seguridad y
                eficiencia en cada caso.</p>
              <p>¡No te quedes atrás en el competitivo mundo del comercio! Con nuestro software, automatiza tus procesos y
                agiliza tu empresa de forma ordenada y eficaz. Olvídate de preocuparte por caídas masivas o errores,
                nuestro sistema es estable y compatible con diferentes sistemas operativos y dispositivos.</p>
              <p>¿Quieres tener el control total de tu inventario con facilidad y profesionalismo? ¡Únete a nosotros y
                experimenta la diferencia que nuestro software puede hacer en tu negocio!</p>
            </p>
          </div>
        </div>
      </header>

      <section className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section2">
          <h2>Características destacadas</h2>
          <ul>
            <li>Control en tiempo real de inventario</li>
            <li>Seguimiento de movimientos de inventario</li>
            <li>Generación de reportes y análisis</li>
            <li>Integración con sistemas de punto de venta</li>
            <li>Interfaz Intuitiva</li>
            <li>Reportes en Tiempo Real</li>
            <li>Seguridad Garantizada</li>
            <li>Automatización Eficiente</li>
            <li>Soporte y Atención al Cliente:</li>
            <li>Código Único por Producto</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="section2">
          <h2>¿Qué vendemos?</h2>
          <p>En nuestra empresa, ofrecemos un software de control y manejo de inventarios de vanguardia. Nuestra
            solución tecnológica está diseñada para facilitar la gestión y seguimiento de los productos disponibles en
            el inventario de cualquier tipo de empresa. Con una interfaz intuitiva y personalizable, nuestro software
            permite a los usuarios registrar nuevos productos, realizar movimientos de entrada

            y salida, generar alertas estratégicas, y obtener reportes en tiempo real.</p>
          <p>Destacamos por brindar una experiencia excepcional a nuestros clientes, asegurando la seguridad de sus
            datos y ofreciendo un servicio de soporte y atención al cliente de primera clase. Nuestro software es
            compatible con diversos sistemas operativos y dispositivos, lo que permite a nuestros clientes acceder a su
            inventario desde cualquier lugar y en cualquier momento.</p>
          <p>Ya sea que gestionen pequeños inventarios o grandes empresas, nuestro software se adapta a las necesidades
            específicas de cada cliente, garantizando una optimización de sus procesos logísticos y una mayor eficiencia
            en su operación. Con nuestro software de control y manejo de inventarios, ayudamos a las empresas a tomar
            decisiones acertadas, automatizar tareas, mejorar la rentabilidad y alcanzar el éxito en el competitivo
            mundo del comercio.</p>
        </div>
      </div>
    </div>
  </section>

      <a href="https://api.whatsapp.com/send?phone=573118068358&text=Hola%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Gracias."
        target="_blank" id="whatsapp-button">
        <img src={logo2} alt="Contactar por WhatsApp" id="whatsapp-icon" />
      </a>


<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
      <h4>Información de contacto</h4>
        <p>faavendano0@soy.sena.edu.co</p>
        <p>Teléfono: (+57) 311 806 8358</p>
        <p>Dirección: calle 100 carrera 100 # 75 Bogota</p>
      </div>
      <div className="col-md-6">
        <h4>Síguenos en redes sociales</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/betoleyton8/" target="_blank"><i className="fab fa-facebook"></i></a>        
          <a href="https://twitter.com/?lang=es" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/betoleyton8/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCpIEnC6i4WG1c17SLtK7Yfw" target="_blank"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <p className="copyright">Derechos de autor &copy; 2024 - SCMI</p>
  </div>
</footer>


    </div>
  );
}

export default App;
