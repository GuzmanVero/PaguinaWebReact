import './App.css';
import logoC from './Images/cropped-tweb.png';
import lobo from './Images/lobo.jpg';
import imagen1 from './Images/AdobeStock_107432576-scaled-1.jpeg';
import medicina from './Images/medicamt3.jpg';
import medicamento from './Images/medicamto1.jpg'
import gato from './Images/gato-.jpg'
import reu from './Images/reunion.jpg'
import './CSS/header.css';
import './CSS/index.css'
import './CSS/footer.css'

function App() {
  return (
    <div className="App">

      <Header/>
      <Contenedor0/>
      <Contenedor1/>
      <Contenedor2Titulo/>
      <Contenedor2Body/>
      <Contenedor3/>
      <Contenedor4Title/>
      <Contenedor4/>
      <FooterContenedor/> 

    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">
        <img width="110" height="117" className="logo" src={logoC} alt="LogoEmpresa" />
        <p><h2>Citas Medicas </h2>
        <br/>Los mejores servicios y atencion medica </p>      
      </div> 
      <div className="menuheader">
        <table className="menu" border="1" cellpadding="5">
          <tr>
            <th><a href="index.html" className="enlaceheader" style={{textDecoration: 'none'}}>Inicio</a></th>
            <th><a href="nosotrosl.html" className="enlaceheader" style={{textDecoration: 'none'}}>Nosotros</a></th>
            <th><a href="servicios.html" className="enlaceheader" style={{textDecoration: 'none'}}>Servicios</a></th>
            <th><a href="Contacto.html" className="enlaceheader" style={{textDecoration: 'none'}}>Contacto</a></th>
            <th><a href="Registro.html" className="enlaceheader" style={{textDecoration: 'none'}}>Registro</a></th>
            <th><a href="iniciarsesion.html" className="enlaceheader" style={{textDecoration: 'none'}}>Inicio sesión</a></th>
          </tr>
        </table>           
      </div>     
    </header>
  );
}

function Contenedor0(){
  return(
    <div>
    <section>
      <table  className="titulo">
        <tr>
          <th><h1>ANIMALS CLINIC</h1></th>
        </tr>
      </table>

      <div className="contenedor0">
        <div >            
          <table  className="imagen1">
            <tr>
              <th style={{paddingTop: '5em'}}><img width="510" height="350" className='lobo' src={lobo} alt="imagenveterinaria" /></th>
              <th>
                Verifica:
                <p>Como veterinaria mi función principal es<br/>
                Diagnosticar, pronosticar, tratar y prevenir las <br/>
                enfermedades que afectan a los animales domésticos,<br/>
                de experimentación, exóticos, salvajes y ganaderos.<br/>
                ¿Quieres agendar una cita en línea?<br/>
                ¡Solo regístrate!</p>
                <br/><br/><br/>
                <button className="btingresar" disabled={true}><a href="Registro.html" style={{textDecoration: 'none'}}>Registrar</a></button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
  );
}

function Contenedor1(){
  return(
    <section>           
      <div className="imagen2"> 
        <table className="fooder1" >
          <tr>
            <td>
              <div>
                <div>
                  <h1 style={{fontSize: '2em'}}>Los mejores servicios de veterinaria en los que puede confiar.</h1>
                </div>
                <p>Si está buscando un veterinario confiable en la ciudad, estamos aquí para ayudarlo. Somos conocidos por los mejores tratamientos veterinarios asequibles con citas rápidas y soluciones oportunas.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img className='imahen1' src={imagen1} alt="" width="1024" height="683" />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

function Contenedor2Titulo(){
  return(
    <table className="titulo2" >
      <tr>
        <td>
          <div style={{color: 'blue'}}>COMO VETERINARIO</div>
          <h2 style={{fontSize: '1em'}}>NOS ESPECIALIZAMOS EN:</h2>
        </td>
      </tr>
    </table>
  );
}

function Contenedor2Body(){
  return(
    <div>
    <div className="contenedor1">
      <div className="medicina">
        <table >
          <tr><td><img className='medicina' src={medicina} alt="" width="300" height="300" /></td></tr>
          <tr><th><h3>Medicina</h3></th></tr>
          <tr><td>Cada mascota es única y especial y así es como debe ser tratado, 
              se medica según sus necesidades y condiciones.</td></tr>
        </table>
      </div>

      <div className="prevencion">
        <table >
          <tr><td><img className='medicamento' src={medicamento} alt="" width="300" height="300" /></td></tr>
          <tr><th><h3>Prevención y control</h3></th></tr>
          <tr><td>El chequeo es necesario tus mascotas también necesitan un control, 
              nos encargamos de mantener su buena salud.</td></tr>
        </table>  
      </div>

      <div className="cuidados">
        <table >
          <tr><td><img className='gato' src={gato} alt="" width="300" height="300" /></td></tr>
          <tr><th><h3>Cuidados</h3></th></tr>
          <tr><td>Nos especializamos en los cuidados adecuados para cada tipo de mascota, 
              facilitando la estadía y su recuperación en el proceso.</td></tr>
        </table>
      </div>
    </div>
    <br/><br/><br/><br/>
  </div>
  );
}

function Contenedor3(){
  return(     
  <div className="contenedor2">
        <div>            
          <table className="reunion">
            <tr style={{paddingTop: '5em'}}>
              <th className="color">
                <h1>Licenciatura en Médico Veterinario y Zootecnista</h1>
                <p>Los médicos veterinarios zootecnistas, son los profesionistas encargados 
                    de mantener la salud, así como de atender, prevenir y controlar las enfermedades de los animales.</p>
                <button className="btingresar" disabled={true}><a href="nosotrosl.html" style={{textDecoration:'none'}}>Conócenos</a></button>
              </th>
              <th>
                <img width="510" height="350" className='reu' src={reu} alt="imagenveterinaria" />
              </th>
            </tr>
          </table>
        </div>
    </div>
  );
}

function Contenedor4Title(){
  return(
    <div>
      <table className="titulo2">
        <tr>
          <td>
            <div style={{fontSize: '1em', color: 'blue'}}>Su comodidad y bienestar es nuestra prioridad</div>
            <h2 style={{fontSize: '1.75em'}}>Te espera:</h2>
          </td>
        </tr>
      </table>
    </div>
  );
}

function Contenedor4(){
  return(
    <div className="contenedor3">
      <br/><br/>
        <div className="doctora1">
            <table >
                <tr>
                    <td colSpan="2">
                        <p>Estudiante en la Universidad Católica <br/>
                        de El Salvador, profesional veterinaria<br/>
                        especializada<br/>
                        según acuerdo al articulo de esta <br/>
                        pagina web en doctorado animal.</p>
                    </td>
                </tr>
                <tr>
                    <td className="ramos"></td>
                    <td><h3>Dra.Ramos</h3></td>
                </tr>
            </table>
        </div>

        <div className="doctora2">
            <table>
                <tr>
                    <td colSpan="2">
                        <p>
                            Licenciada en medicina veterinaria y <br/>
                            estudiante actual en UNICAES para seguir <br/>
                            con su progreso <br/>
                            en conocimiento animal de <br/>
                            acuerdo a esta pagina web.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className="guzman" width="100" height="100"></td>
                    <td><h3>Miss. Guzmán</h3></td>
                </tr>
            </table>
        </div>

        <div className="doctora3">
            <table>
                <tr>
                    <td colSpan="2">
                        <p>Actualmente cursando especialización<br/>
                         en Universidad Católica de El Salvador, <br/>
                            Licenciada en ciencias de la salud <br/>
                            titulo otorgado según esta pagina web</p>
                    </td>
                </tr>
                <tr>
                    <td className="rodriguez" width="100" height="100"></td>
                    <td><h3>Miss Rodríguez</h3></td>
                </tr>
            </table>
        </div>
    </div>
  );
}

function FooterContenedor(){
  return(
    <footer className="footer" style={{border: "1px solid"}}>
      <div className="contenedor">
        <div className="columna1">
          <table >
              <tr>
                  <th>
                      <p>Te ofrecemos los mejores servicios veterinarios. </p>
                      <p>Contamos con alta experiencia en la salud de los animales.</p>
                  </th>
              </tr>
              <tr><td>logoface</td></tr>
          </table>
      </div>

      <div className="columna2">
        <table >
            <tr><th><h3>Quick Links</h3></th></tr>
            <tr><td><a href="nosotrosl.html" className="enlacefooter" style={{textDecoration:"none"}}>Acerca de nosotros</a></td></tr>
            <tr><td><a href="politicas.html" className="enlacefooter" style={{textDecoration:"none"}}>politicas de privacidad</a></td></tr>
            <tr><td><a href="politicas.html" className="enlacefooter" style={{textDecoration:"none"}}>Contactanos</a></td></tr>
        </table>   
      </div>

      <div className="columna3">
        <table >
          <tr><th><h3>Services</h3></th></tr>
          <tr><td><a href="servicios.html" className="enlacefooter" style={{textDecoration:"none"}}>Vitaminas</a></td></tr>
          <tr><td><a href="servicios.html" className="enlacefooter" style={{textDecoration:"none"}}>Todos los servicios</a></td></tr>
          <tr><td><a href="servicios.html" className="enlacefooter" style={{textDecoration:"none"}}>Tratamientos</a></td></tr>
        </table> 
      </div>

      <div className="columna4">
        <table >
          <tr><th><h3>Horarios de servicios</h3></th></tr>
          <tr><td>Lunes: 09.00 – 16.00</td></tr>
          <tr><td>Martes: 09.00 – 16.00</td></tr>
          <tr><td>Miercoles: 09.00 – 16.00</td></tr>
          <tr><td>Jueves: 09.00 – 16.00</td></tr>
          <tr><td>Viernes: 09.00 – 16.00</td></tr>
          <tr><td>Sabado: Cerrado</td></tr>
          <tr><td>Domingo: Cerrado</td></tr>
        </table>
      </div>
      </div>            
    </footer> 
  );
}

export default App;
