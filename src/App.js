import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Principal from './contends/principal';
import LaEscuela from './contends/escuela-contends/la_escuela';
import Diplomas from './contends/diplomas_especializados/diplomas';
import Dipespcontrolgubernamental from './contends/diplomas_especializados/diplo-contratacion-control/dip-esp-auditoria-gubernamental';
import Dipespcontratacionestado from './contends/diplomas_especializados/diplo-contratacion-control/dip-esp-contratacion-estado';
import Dipespderechoprocedimiento from './contends/diplomas_especializados/diplo-contratacion-control/dip-esp-derecho-procedimiento';
import Dipespeticaintegridad from './contends/diplomas_especializados/diplo-contratacion-control/dip-esp-etica-integridad';
import Dipespsistemaabastecimineto from './contends/diplomas_especializados/diplo-contratacion-control/dip-esp-sistema-abastecimiento';
import Dipespinviertepe from './contends/diplomas_especializados/diplo-gest-publi-sistema-administrativo/dip-esp-invierte-pe'
import Dipesppresupuestopublico from './contends/diplomas_especializados/diplo-gest-publi-sistema-administrativo/dip-esp-presupuesto-publico'
import Dipespsistemasadministrativaestado from './contends/diplomas_especializados/diplo-gest-publi-sistema-administrativo/dip-esp-sistemas-administrativa-estado'
import Dipgestestrategico from './contends/diplomas_especializados/diplo-gest-publi-sistema-administrativo/dip-gest-estrategico'
import Dipgestpublicamoderna from './contends/diplomas_especializados/diplo-gest-publi-sistema-administrativo/dip-gest-publica-moderna'
import Dipespgestrecursoshumanos from './contends/diplomas_especializados/diplo-gest-talento-humano/dip-esp-gest-recursos-humanos'
import Dipespliderazgogestionequipos from './contends/diplomas_especializados/diplo-gest-talento-humano/dip-esp-liderazgo-gestion-equipos'
import ProgramaGestionPublica from './contends/programa-gest/programa-gestion-publica';
import Cgestadobeotros from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-adobe-otros';
import Cgestalimentacionnutricion from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-alimentacion-nutricion';
import Cgestambiental from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-ambiental';
import Cgestbiblioteca from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-biblioteca';
import Cgestcontenidoredacciondigital from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-contenido-redaccion-digital';
import CgestControlAuditoriaEticaPublica from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-control-auditoria-etica-publica';
import CgestDerechoLaboral from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-derecho-laboral';
import Cgestderechopenalfp from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-derecho-penal-publica';
import Cgestpublicaestrategica from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-estrategia-planeamiento';
import Cgestfinanzaspublicas from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-finanzas-publicas';
import Cgesthabilidadesblandas from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-habilidades-blandas';
import Cgestinteligenciaartificial from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-inteligencia-artificial';
import Cgestinversionpublica from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-inversion-publica';
import Cgestjardineriapoda from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-jardineria-poda-trabajosaltura';
import CgestGestionJuridicaAdministrativa from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-juridica-administrativa';
import Cgestgestionminera from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-minera';
import Cgestmsproject from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-msproject';
import Cgestmunicipal from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-municipal';
import Cgestobraspublicas from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-obras-publicas';
import Cgestofimatica from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-ofimatica';
import Cgestpaisajimosotros from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-paisajismo-otros';
import Cgestprevencionseguridadvial from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-prevencion-seguridad-vial';
import Cgesproyectobim from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-proyecto-BIM';
import Cgestsaludpublica from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-publica-salud';
import CgestRecursosHumanosServicioCivil from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-recursos-humanos-servicio-civil';
import Cgestriesgodesastre from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-riesgodesaste';
import Cgestionserviciociudadano from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-servicio-atencion-ciudadano';
import Cgestabastecimiento from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-sitema-nacional-abastecimiento';
import Cgestsqlserver from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-sqlserver';
import Cgesttrabajosocial from './contends/programa-gest/cursos-programa-gestion-publica/C-gest-trabajo-social';
import ProgramaGestionEmpresarial from './contends/programa-gest-emp/programa-gestion-empresarial';
import CursoMedida from './contends/nuestrosservicios/curso-medida';
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';

function App() {
  const solicitarinformacion = ()=>{
            window.open(
            "https://wa.me/51913376365?text=Hola%20quiero%20solicitar%20información",
            "_blank"
            );
  }
  const aulavirtual=()=>{
    window.open("https://escuelag.com/moodle/login");
  }
  return (
    <BrowserRouter>
        <div id="encabezado">
          <Link to='/Principal'>
            <img src="/uploads/Logop.png" alt="logo" className="logo-principal" />
        </Link>
        <div className="menu-cabecera-1001">
          <ul><li><button className="btn-cta" onClick={solicitarinformacion}>SOLICITAR INFORMACIÓN</button></li></ul>
          <ul><li><button className="btn-cta"  onClick={aulavirtual}>AULA VIRTUAL</button></li></ul>
          <ul><li><Link to='footer'>REDES SOCIALES</Link></li></ul>
        </div>

        <div className="menu-list-1001">
          <ul className="menu-list-1001-celular">
            <li ><h1 className="icono-menu-list">≡</h1>
            <ul>
              <li><button className="btn-cta" onClick={solicitarinformacion}>SOLICITAR INFORMACIÓN</button></li>
              <li><Link href="#">AULA VIRTUAL</Link></li>
              <li><Link to="footer">REDES SOCIALES</Link></li></ul>
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
                    <li><Link to="/C-gest-estrategia-planeamiento">GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO</Link></li>
                    <li><Link to="/C-gest-finanzas-publicas">FINANZAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-sitema-nacional-abastecimiento">SISTEMA NACIONAL DE ABASTECIMIENTO</Link></li>
                    <li><Link to="/C-gest-inversion-publica">INVERSIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-obras-publicas">GESTIÓN DE OBRAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-derecho-penal-publica">DERECHO PENAL EN LA FUNCIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-publica-salud">GESTIÓN PÚBLICA EN SALUD</Link></li>
                    <li><Link to="/C-gest-biblioteca">GESTIÓN DE BIBLIOTECA</Link></li>
                    <li><Link to="/C-gest-municipal" >GESTIÓN MUNICIPAL</Link></li>
                    <li><Link to="/C-gest-ambiental" >GESTIÓN AMBIENTAL</Link></li>
                    <li><Link to="/C-gest-alimentacion-nutricion" >ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                    <li><Link to="/C-gest-jardineria-poda-trabajosaltura" >JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                    <li><Link to="/C-gest-recursos-humanos-servicio-civil" >GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                    <li><Link to="/C-gest-juridica-administrativa" >GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                    <li><Link to="/C-gest-control-auditoria-etica-publica" >CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                    <li><Link to="/C-gest-derecho-laboral" >DERECHO LABORAL</Link></li>
                    <li><Link to="/C-gest-habilidades-blandas" >HABILIDADES BLANDAS</Link></li>
                    <li><Link to="/C-gest-minera" >GESTIÓN MINERA</Link></li>
                    <li><Link to="/C-gest-trabajo-social" >TRABAJO SOCIAL</Link></li>
                    <li><Link to="/C-gest-ofimatica" >OFIMÁTICA</Link></li>
                    <li><Link to="/C-gest-inteligencia-artificial" >INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                    <li><Link to="/C-gest-contenido-redaccion-digital">CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                    <li><Link to="/C-gest-sqlserver" >SQL SERVER</Link></li>
                    <li><Link to="/C-gest-adobe-otros" >ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                    <li><Link to="/C-gest-msproject" >MS PROJECT</Link></li>
                    <li><Link to="/C-gest-proyecto-BIM" >GESTIÓN DE PROYECTOS BIM</Link></li>
                    <li><Link to="/C-gest-prevencion-seguridad-vial" >PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                    <li><Link to="/C-gest-paisajismo-otros" >PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                    <li><Link to="/C-gest-riesgodesaste" >GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                    <li><Link to="/C-gest-servicio-atencion-ciudadano" >GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
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
                  <li><h2>GESTIÓN PÚBLICA Y SISTEMAS ADMINISTRATIVOS</h2>
                    <ul>
                        <li><Link to="/dip-gest-publica-moderna">Diploma de Especialización en Gestión Pública Moderna</Link></li>
                        <li><Link to="/dip-gest-estrategico">Diploma de Especialización en Planeamiento Estratégico y Gestión por Resultados</Link></li>
                        <li><Link to="/dip-esp-presupuesto-publico">Diploma de Especialización en Presupuesto por Resultados</Link></li>
                        <li><Link to="/dip-esp-invierte-pe">Diploma de Especialización en Invierte.pe y Gestión de Inversiones Públicas</Link></li>
                        <li><Link to="/dip-esp-sistemas-administrativa-estado">Diploma de Especialización en Sistemas Administrativos del Estado</Link></li>
                    </ul>
                  </li>
                  <li><h2>CONTRATACIONES, CONTROL Y NORMATIVA</h2>
                    <ul>
                        <li><Link to="/dip-esp-contratacion-estado">Diploma de Especialización en Contrataciones del Estado</Link></li>
                        <li><Link to="/dip-esp-sistema-abastecimiento">Diploma de Especialización en Sistema Nacional de Abastecimiento</Link></li>
                        <li><Link to="/dip-esp-auditoria-gubernamental">Diploma de Especialización en Auditoría Gubernamental</Link></li>
                        <li><Link to="/dip-esp-derecho-procedimiento">Diploma de Especialización en Derecho Administrativo y Procedimiento Administrativo</Link></li>
                        <li><Link to="/dip-esp-etica-integridad">Diploma de Especialización en Ética, Integridad y Responsabilidad del Funcionario Público</Link></li>
                    </ul>
                  </li>
                  <li><h2>GESTIÓN DEL TALENTO HUMANO</h2>
                    <ul>
                        <li><Link to="/dip-esp-gest-recursos-humanos">Diploma de Especialización en Gestión de Recursos Humanos en el Sector Público</Link></li>
                        <li><Link to="/dip-esp-liderazgo-gestion-equipos">Diploma de Especialización en Liderazgo y Gestión de Equipos</Link></li>
                    </ul>
                  </li>
                  <li><h2>TRANSFORMACIÓN DIGITAL Y TIC</h2>
                    <ul>
                        <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
                        <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
                        <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Herramientas Digitales y Ofimática Profesional</Link></li>
                    </ul>
                  </li>
                  <li><h2 >SECTORES ESPECÍFICOS Y GESTIÓN EMPRESARIAL</h2>
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
      </div>

      <div className="menu-list-1004">
          <ul className="menu-list-1004-celular">
            <li ><h1 className="icono-menu">≡</h1>
            <ul>
              <ul><li><Link to="/la_escuela">LA ESCUELA</Link></li></ul>
              <ul className='menu-cabecera-1003-2'> <li><Link to="/programa-gestion-publica">
                  CURSO GESTIÓN PUBLICA 
                </Link> 
                <ul className='contenedor-menu-cabecera-1003-2-1'> 
                    <li><Link to="/C-gest-estrategia-planeamiento">GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO</Link></li>
                    <li><Link to="/C-gest-finanzas-publicas">FINANZAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-sitema-nacional-abastecimiento">SISTEMA NACIONAL DE ABASTECIMIENTO</Link></li>
                    <li><Link to="/C-gest-inversion-publica">INVERSIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-obras-publicas">GESTIÓN DE OBRAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-derecho-penal-publica">DERECHO PENAL EN LA FUNCIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-publica-salus">GESTIÓN PÚBLICA EN SALUD</Link></li>
                    <li><Link to="/C-gest-biblioteca">GESTIÓN DE BIBLIOTECA</Link></li>
                    <li><Link to="/C-gest-municipal" >GESTIÓN MUNICIPAL</Link></li>
                    <li><Link to="/C-gest-ambiental" >GESTIÓN AMBIENTAL</Link></li>
                    <li><Link to="/C-gest-alimentacion-nutricion" >ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                    <li><Link to="/C-gest-jardineria-poda-trabajosaltura" >JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                    <li><Link to="/C-gest-recursos-humanos-servicio-civil" >GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                    <li><Link to="/C-gest-juridica-administrativa" >GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                    <li><Link to="/C-gest-control-auditoria-etica-publica" >CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                    <li><Link to="/C-gest-derecho-laboral" >DERECHO LABORAL</Link></li>
                    <li><Link to="/C-gest-habilidades-blandas" >HABILIDADES BLANDAS</Link></li>
                    <li><Link to="/C-gest-minera" >GESTIÓN MINERA</Link></li>
                    <li><Link to="/C-gest-trabajo-social" >TRABAJO SOCIAL</Link></li>
                    <li><Link to="/C-gest-ofimatica" >OFIMÁTICA</Link></li>
                    <li><Link to="/C-gest-inteligencia-artificial" >INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                    <li><Link to="/C-gest-contenido-redaccion-digital" >CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                    <li><Link to="/C-gest-sqlserver" >SQL SERVER</Link></li>
                    <li><Link to="/C-gest-adobe-otros" >ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                    <li><Link to="/C-gest-msproject" >MS PROJECT</Link></li>
                    <li><Link to="/C-gest-proyecto-BIM" >GESTIÓN DE PROYECTOS BIM</Link></li>
                    <li><Link to="/C-gest-prevencion-seguridad-vial" >PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                    <li><Link to="/C-gest-paisajismo-otros" >PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                    <li><Link to="/C-gest-riesgodesaste" >GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                    <li><Link to="/C-gest-servicio-atencion-ciudadano" >GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
                </ul>  
                </li>
                </ul>
              <ul><li> 
                <Link to="/programa-gestion-empresarial">
                  CURSO GESTIÓN EMPRESARIAL
                </Link>
              </li></ul>
            <ul className='menu-cabecera-1003-2'>
             <li>
              <Link to="/diplomas ">
                DIPLOMAS Y ESPECIALIZADO
              </Link>
              <ul>
                <li><Link to="/programa-gest-emp-1">GESTIÓN PÚBLICA Y SISTEMAS ADMINISTRATIVOS</Link>
                  <ul>
                      <li><Link to="/dip-gest-publica-moderna">Diploma de Especialización en Gestión Pública Moderna</Link></li>
                      <li><Link to="/dip-gest-estrategico">Diploma de Especialización en Planeamiento Estratégico y Gestión por Resultados</Link></li>
                      <li><Link to="/dip-esp-presupuesto-publico">Diploma de Especialización en Presupuesto por Resultados</Link></li>
                      <li><Link to="/dip-esp-invierte-pe">Diploma de Especialización en Invierte.pe y Gestión de Inversiones Públicas</Link></li>
                      <li><Link to="/dip-esp-sistemas-administrativa-estado">Diploma de Especialización en Sistemas Administrativos del Estado</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-2">CONTRATACIONES, CONTROL Y NORMATIVA</Link>
                  <ul>
                      <li><Link to="/dip-esp-contratacion-estado">Diploma de Especialización en Contrataciones del Estado</Link></li>
                      <li><Link to="/dip-esp-sistema-abastecimiento">Diploma de Especialización en Sistema Nacional de Abastecimiento</Link></li>
                      <li><Link to="/dip-esp-auditoria-gubernamental">Diploma de Especialización en Auditoría Gubernamental</Link></li>
                      <li><Link to="/dip-esp-derecho-procedimiento">Diploma de Especialización en Derecho Administrativo y Procedimiento Administrativo</Link></li>
                      <li><Link to="/dip-esp-etica-integridad">Diploma de Especialización en Ética, Integridad y Responsabilidad del Funcionario Público</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-3">GESTIÓN DEL TALENTO HUMANO</Link>
                  <ul>
                      <li><Link to="/dip-esp-gest-recursos-humanos">Diploma de Especialización en Gestión de Recursos Humanos en el Sector Público</Link></li>
                      <li><Link to="/dip-esp-liderazgo-gestion-equipos">Diploma de Especialización en Liderazgo y Gestión de Equipos</Link></li>
                  </ul>
                </li>
                <li><Link to="/programa-gest-emp-4">TRANSFORMACIÓN DIGITAL Y TIC</Link>
                  <ul>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
                      <li><Link to="/programa-gest-emp-1">Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
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
            <ul><li><Link to="/curso-medida">CURSOS INHOUSE</Link></li></ul>
          </ul>
          </li>
          </ul>
        </div>

    
      <Routes>
        <Route path="/principal" element={<Principal/>} />
        <Route path="/C-gest-adobe-otros" element={<Cgestadobeotros />} />
        <Route path="/C-gest-alimentacion-nutricion" element={<Cgestalimentacionnutricion/>} />
        <Route path="/C-gest-ambiental" element={<Cgestambiental />} />
        <Route path="/C-gest-biblioteca" element={<Cgestbiblioteca />} />
        <Route path="/C-gest-contenido-redaccion-digital" element={<Cgestcontenidoredacciondigital/>} />
        <Route path="/C-gest-control-auditoria-etica-publica" element={<CgestControlAuditoriaEticaPublica />} />
        <Route path="/C-gest-derecho-laboral" element={<CgestDerechoLaboral />} />
        <Route path="/C-gest-derecho-penal-publica" element={<Cgestderechopenalfp />} />
        <Route path="/C-gest-estrategia-planeamiento" element={<Cgestpublicaestrategica />} />
        <Route path="/C-gest-finanzas-publicas" element={<Cgestfinanzaspublicas />} />
        <Route path="/C-gest-habilidades-blandas" element={<Cgesthabilidadesblandas />} />
        <Route path="/C-gest-inteligencia-artificial" element={<Cgestinteligenciaartificial />} />
        <Route path="/C-gest-inversion-publica" element={<Cgestinversionpublica />} />
        <Route path="/C-gest-jardineria-poda-trabajosaltura" element={<Cgestjardineriapoda />} />
        <Route path="/C-gest-juridica-administrativa" element={<CgestGestionJuridicaAdministrativa />} />
        <Route path="/C-gest-minera" element={<Cgestgestionminera />} />
        <Route path="/C-gest-msproject" element={<Cgestmsproject />} />
        <Route path="/C-gest-municipal" element={<Cgestmunicipal />} />
        <Route path="/C-gest-obras-publicas" element={<Cgestobraspublicas />} />
        <Route path="/C-gest-ofimatica" element={<Cgestofimatica />} />
        <Route path="/C-gest-paisajismo-otros" element={<Cgestpaisajimosotros />} />
        <Route path="/C-gest-prevencion-seguridad-vial" element={<Cgestprevencionseguridadvial />} />
        <Route path="/C-gest-proyecto-BIM" element={<Cgesproyectobim />} />
        <Route path="/C-gest-publica-salud" element={<Cgestsaludpublica />} />
        <Route path="/C-gest-recursos-humanos-servicio-civil" element={<CgestRecursosHumanosServicioCivil />} />
        <Route path="/C-gest-riesgodesaste" element={<Cgestriesgodesastre/>} />
        <Route path="/C-gest-servicio-atencion-ciudadano" element={<Cgestionserviciociudadano />} />
        <Route path="/C-gest-sitema-nacional-abastecimiento" element={<Cgestabastecimiento/>} />
        <Route path="/C-gest-sqlserver" element={<Cgestsqlserver />} />
        <Route path="/C-gest-trabajo-social" element={<Cgesttrabajosocial />} />
        <Route path="/" element={<Principal/>} />        
        <Route path="/la_escuela" element={<LaEscuela/>} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/dip-esp-auditoria-gubernamental" element={<Dipespcontrolgubernamental/>} />
        <Route path="/dip-esp-contratacion-estado" element={<Dipespcontratacionestado/>} />
        <Route path="/dip-esp-derecho-procedimiento" element={<Dipespderechoprocedimiento/>} />
        <Route path="/dip-esp-etica-integridad" element={<Dipespeticaintegridad/>} />
        <Route path="/dip-esp-sistema-abastecimiento" element={<Dipespsistemaabastecimineto/>} />
        <Route path="/dip-esp-invierte-pe" element={<Dipespinviertepe/>} />
        <Route path="/dip-esp-presupuesto-publico" element={<Dipesppresupuestopublico/>} />
        <Route path="/dip-esp-sistemas-administrativa-estado" element={<Dipespsistemasadministrativaestado/>} />
        <Route path="/dip-gest-estrategico" element={<Dipgestestrategico/>} />
        <Route path="/dip-gest-publica-moderna" element={<Dipgestpublicamoderna/>} />
        <Route path="/dip-esp-gest-recursos-humanos" element={<Dipespgestrecursoshumanos/>} />
        <Route path="/dip-esp-liderazgo-gestion-equipos" element={<Dipespliderazgogestionequipos/>} />
        <Route path='/programa-gestion-publica' element={<ProgramaGestionPublica/>}/>
        <Route path='/programa-gestion-empresarial' element={<ProgramaGestionEmpresarial/>}/>
        <Route path='/curso-medida' element={<CursoMedida/>}/> 
      </Routes>
<footer className="contenedor-footer">

  <div className="footer-bloque footer-bloque-izq">
    <a href="/">
      <img src="/uploads/Logop3.webp" alt="Logo Escuela" className="logo-final" />
    </a>

    <p>
      Escuela de Gerencia y Gestión es un centro especializado
      en altos estudios que ofrece enseñanza, capacitación y
      formación profesional en alta dirección, enfocada en la
      gestión pública y la actividad empresarial.
    </p>
  </div>


  <div className="footer-bloque footer-bloque-centro">
    <h2>Contáctanos</h2>

    <p>
      948 251 685 / 913 376 365 <br/>
      capacita@escuelag.com <br/>
      esscuelag@gmail.com <br/>
      Av. Arenales 2081 4to. Piso of. 9 Lince
    </p>
  </div>


  <div className="footer-bloque footer-bloque-der">

    <h2>Encuéntranos</h2>

    <div className="iconos-busqueda">

      <Link to="https://www.instagram.com/egerencia">
        <FaInstagram size={20} className="fondo icon-bob"/>
      </Link>

      <Link to="#">
        <FaXTwitter size={20} className="fondo icon-bob"/>
      </Link>

      <Link to="https://www.facebook.com/share/1Ztggm115f/">
        <FaFacebook size={20} className="fondo icon-bob"/>
      </Link>

      <Link to="https://www.tiktok.com/@escuelagerenciaygestion">
        <FaTiktok size={20} className="fondo icon-bob"/>
      </Link>

    </div>

  </div>
  <div className="autor">
    <h3>by jose1801</h3>
  </div>

  <div className="footer-copyright" id="footer">
    <span>© Escuela De Gerencia y Gestión. Todos los derechos reservados.</span>
  </div>



</footer>
    </BrowserRouter>
  );
}

export default App;
