import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Principal from './contends/principal';
import LaEscuela from './contends/escuela-contends/la_escuela';
import Diplomas from './contends/diplomas_especializados/diplomas';
import Cursos from './contends/escuela-contends/cursos';
import Congresos from './contends/escuela-contends/congresos';
import ProgramaGest1 from './contends/programa-gest/programa-gest-1';
import ProgramaGest2 from './contends/programa-gest/programa-gest-2';
import ProgramaGest3 from './contends/programa-gest/programa-gest-3';
import ProgramaGest4 from './contends/programa-gest/programa-gest-4';
import ProgramaGest5 from './contends/programa-gest/programa-gest-5';
import ProgramaGestionPublica from './contends/programa-gest/programa-gestion-publica';
import ProgramaGestEmp1 from './contends/diplomas_especializados/programa-gest-emp-1';
import ProgramaGestionEmpresarial from './contends/programa-gest-emp/programa-gestion-empresarial';
import CursoMedida from './contends/nuestrosservicios/curso-medida';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";


function App() {

function App() {
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px) and (orientation: landscape)"
    );

    const handleChange = (e) => {
      setIsLandscapeMobile(e.matches);
    };

    // Estado inicial
    setIsLandscapeMobile(mediaQuery.matches);

    // Escuchar cambios
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (isLandscapeMobile) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          color: "#fff",
          fontSize: "20px",
        }}
      >
        Por favor gira tu dispositivo 📱
      </div>
    );
  }

  return (
    <div>
      {/* Tu app normal */}
      Tu App React aquí
    </div>
  );
}


  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (menu) => {
    setSubmenuOpen(submenuOpen === menu ? null : menu);
  };

  const solicitarinformacion = ()=>{
            window.open(
            "https://wa.me/51945504555?text=Hola%20quiero%20solicitar%20información",
            "_blank"
            );
  }
  return (
    <BrowserRouter>
        <div id="encabezado">
          <Link to='/Principal'>
            <img src="/uploads/Logop.png" alt="img-logo" className="logo-principal" />
        </Link>
        <header className="header">
          <div className="icono-menu" onClick={() => setMenuOpen(true)}>
            ≡
          </div>
        </header>

        <div className="menu-cabecera-1001">
          <ul><li><button className="btn-cta" onClick={solicitarinformacion}>SOLICITAR INFORMACIÓN</button></li></ul>
          <ul><li><a href="#">AULA VIRTUAL</a></li></ul>
          <ul><li><a href="#">REDES SOCIALES</a></li></ul>
        </div>

        <div className="menu-list-1001">
          <ul className="menu-list-1001-celular">
            <li ><h1 className="icono-menu-list">≡</h1>
            <ul>
              <li><button className="btn-cta" onClick={solicitarinformacion}>SOLICITAR INFORMACIÓN</button></li>
              <li><a href="#">AULA VIRTUAL</a></li>
              <li><a href="#">REDES SOCIALES</a></li></ul>
            </li>
          </ul>
        </div>


        <div className="menu-cabecera-1002">
          <ul className="menu-cabecera-1003"> 
            <li> <Link to="/la_escuela">LA ESCUELA</Link>
            </li> 
          </ul> 
          <ul className="menu-cabecera-1003-columna"> 
              <li><Link to="/programa-gestion-publica" className="has-arrow">
                  CURSO GESTIÓN PUBLICA <span className="arrow-down">▼</span>
                </Link> 
                <ul> 
                    <li><Link to="/programa-gest-1">GESTIÓN DE BIBLIOTECA</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN MUNICIPAL</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN AMBIENTAL</Link></li>
                    <li><Link to="/programa-gest-1" >ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                    <li><Link to="/programa-gest-1" >JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                    <li><Link to="/programa-gest-1" >CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                    <li><Link to="/programa-gest-1" >DERECHO LABORAL</Link></li>
                    <li><Link to="/programa-gest-1" >HABILIDADES BLANDAS</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN MINERA</Link></li>
                    <li><Link to="/programa-gest-1" >TRABAJO SOCIAL</Link></li>
                    <li><Link to="/programa-gest-1" >OFIMÁTICA</Link></li>
                    <li><Link to="/programa-gest-1" >INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                    <li><Link to="/programa-gest-1" >CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                    <li><Link to="/programa-gest-1" >SQL SERVER</Link></li>
                    <li><Link to="/programa-gest-1" >ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                    <li><Link to="/programa-gest-1" >MS PROJECT</Link></li>
                    <li><Link to="/programa-gest-1" >PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                    <li><Link to="/programa-gest-1" >PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                    <li><Link to="/programa-gest-1" >GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
                </ul> 
              </li> 
          </ul> 
          <ul className="menu-cabecera-1003"> 
            <li> 
                <Link to="/programa-gestion-empresarial" className="has-arrow">
                  CURSO GESTIÓN EMPRESARIAL
                </Link>
            </li>
          </ul>
          <ul className="menu-cabecera-1003">
            <li>
              <Link to="/diplomas " className="has-arrow">
                DIPLOMAS Y ESPECIALIZADO <span className="arrow-down">▼</span>
              </Link>

              <ul>
                <li><Link to="/programa-gest-emp-1">GESTIÓN PÚBLICA Y SISTEMAS ADMINISTRATIVOS</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Pública Moderna</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Planeamiento Estratégico y Gestión por Resultados</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Presupuesto por Resultados</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Invierte.pe y Gestión de Inversiones Públicas</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Finanzas Públicas</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Sistemas Administrativos del Estado</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-2">CONTRATACIONES, CONTROL Y NORMATIVA</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Contrataciones del Estado</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Sistema Nacional de Abastecimiento</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Control Gubernamental y Control Interno</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Auditoría Gubernamental</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Derecho Administrativo y Procedimiento Administrativo</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Ética, Integridad y Responsabilidad del Funcionario Público</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-3">GESTIÓN DEL TALENTO HUMANO</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión de Recursos Humanos en el Sector Público</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Servicio Civil y Gestión del Desempeño</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión del Clima y Cultura Organizacional</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Liderazgo y Gestión de Equipos</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-4">TRANSFORMACIÓN DIGITAL Y TIC</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
                      <li><Link to="/programa-gest-emp-1">DDiploma de Especialización en Seguridad de la Información y Protección de Datos</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Herramientas Digitales y Ofimática Profesional</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-5">SECTORES ESPECÍFICOS Y GESTIÓN EMPRESARIAL</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión de Obras Públicas</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Pública en Salud</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Educativa</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Ambiental y Desarrollo Sostenible</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión de Proyectos</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Empresarial y Dirección Estratégica</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu-cabecera-1003">
            <li><Link to="/curso-medida">CURSOS INHOUSE</Link></li>
          </ul>
        </div>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <img src="/uploads/Logop.png" alt="logo" className="logo-principal" />
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>

      <ul className="menu-list">
        <li><Link to="/la_escuela" onClick={() => setMenuOpen(false)}>LA ESCUELA</Link></li>
        <li>
          <Link to="/programa-gestion-publica" onClick={() => setMenuOpen(false)}>CURSO GESTIÓN PÚBLICA</Link>
          <ul className={`submenu ${submenuOpen === "gestionPublica" ? "open" : ""}`}>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN DE BIBLIOTECA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN MUNICIPAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN AMBIENTAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>ALIMENTACIÓN Y NUTRICIÓN</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>DERECHO LABORAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>HABILIDADES BLANDAS</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN MINERA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>TRABAJO SOCIAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>OFIMÁTICA</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>SQL SERVER</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>MS PROJECT</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
            <li><Link to="/programa-gest-1" onClick={() => setMenuOpen(false)}>GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/programa-gestion-empresarial" onClick={() => setMenuOpen(false)}>CURSO GESTIÓN EMPRESARIAL</Link>
        </li>
        <li>
          <Link to="/diplomas" onClick={() => setMenuOpen(false)}>DIPLOMAS Y ESPECIALIZADO</Link>
          <ul className={`submenu ${submenuOpen === "gestionEmpresarial" ? "open" : ""}`}>
            <li><Link to="/programa-gest-emp-1" onClick={() => setMenuOpen(false)}>Programa 1</Link></li>
          </ul>
        </li>
        
        <li><Link to="/curso-medida" onClick={() => setMenuOpen(false)}>CURSOS INHOUSE</Link></li>
      </ul>
    </div>
</div>
    
      <Routes>
        <Route path="/principal" element={<Principal/>} />
        <Route path="/" element={<Principal/>} />        
        <Route path="/la_escuela" element={<LaEscuela/>} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/programa-gest-1" element={<ProgramaGest1 />} />
        <Route path="/programa-gest-2" element={<ProgramaGest2 />} />
        <Route path="/programa-gest-3" element={<ProgramaGest3 />} />
        <Route path="/programa-gest-4" element={<ProgramaGest4 />} />
        <Route path="/programa-gest-5" element={<ProgramaGest5 />} />
        <Route path='/programa-gestion-publica' element={<ProgramaGestionPublica/>}/>
        <Route path="/programa-gest-emp-1" element={<ProgramaGestEmp1 />} />
        <Route path='/programa-gestion-empresarial' element={<ProgramaGestionEmpresarial/>}/>
        <Route path='/curso-medida' element={<CursoMedida/>}/> 
      </Routes>
<footer className="parrafo-final">
<div>
  <a href="/"><img src="/uploads/Logop3.webp" alt="img-logo" className="logo-final"/></a>

  <p className="parrafo-100">
    Escuela de Gerencia y Gestión es un centro especializado 
    en altos estudios que ofrece enseñanza, capacitación y 
    formación profesional en alta dirección, enfocada en la 
    gestión pública y la actividad empresarial, cumpliendo con 
    los estándares más exigentes de centros y universidades y 
    grupos empresariales de nuestro país.
  </p>

  <h1 className="parrafo-102-10">
    Contáctanos
  </h1>

  <p className="parrafo-102-11">
    948 251 685 / 913 376 365 <br />
    capacita@escuelag.com <br />
    esscuelag@gmail.com <br />
    Encuéntranos <br />
    Av. Arenales 2081 4to. Piso of. 9 Lince <br /> 

  </p> 
  
  <h1 className="parrafo-102-12">
    Encuentranos
    <div className='iconos-busqueda'>
    <div style={{ display: "flex", gap: "20px" }}>
      <a href='https://www.instagram.com/egerencia?igsh=MWpmOGppN2g2djk5cQ=='><FaInstagram size={28} color="#ffffffff"  className='fondo icon-bob' /></a>
      <a href='#'><FaXTwitter size={28} color="#ffffffff" className='fondo icon-bob'/></a>
      <a href='https://www.facebook.com/share/1Ztggm115f/'><FaFacebook size={28} color="#ffffffff" className='fondo icon-bob'/></a>
      <a href='https://www.tiktok.com/@escuelagerenciaygestion?_r=1&_t=ZS-93OlEGIQKMT'><FaTiktok size={28} color="#ffffffff" className='fondo icon-bob'/></a>
    </div>
    </div>
  </h1>
  <div className='footer-copyright'>
    <span>© Escuela De Gerencia y Gestion. Todos los derechos reservados.</span>
  </div>
</div>
</footer>
    </BrowserRouter>
  );
}

export default App;
