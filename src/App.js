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
import Dipespdigitaltransformacion from './contends/diplomas_especializados/dipo-transformacion-digital/dip-esp-digital-transformacion'
import Dipoespgestdocumental from './contends/diplomas_especializados/dipo-transformacion-digital/dip-esp-gest-documental'
import Dipespherramientasofimaticas from './contends/diplomas_especializados/dipo-transformacion-digital/dip-esp-herramientas-ofimatica'
import DipespGestionAmbiental from './contends/diplomas_especializados/dipo-sectores-especificos/dip-esp-gestion-ambiental'
import DipespGestionEmpresarial from './contends/diplomas_especializados/dipo-sectores-especificos/dip-esp-gestion-empresarial'
import DipespGestionObrasPublicas from './contends/diplomas_especializados/dipo-sectores-especificos/dip-esp-gestion-obras-publicas'
import DipespGestionProyectos from './contends/diplomas_especializados/dipo-sectores-especificos/dip-esp-gestion-proyectos'
import DipespGestionPublicaSalud from './contends/diplomas_especializados/dipo-sectores-especificos/dip-esp-gestion-publica-salud'
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
import { FaInstagram, FaTiktok, FaFacebook,FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { PiBookOpenText } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import MobileMenu from "./contends/components/MobileMenu";

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
        <MobileMenu />
        <div className="menu-cabecera-1001">
          <ul><li><button className="btn-cta" onClick={solicitarinformacion}>SOLICITAR INFORMACIÓN</button></li></ul>
          <ul><li><button className="btn-cta"  onClick={aulavirtual}>AULA VIRTUAL</button></li></ul>
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
                    <li><Link to="/C-gest-estrategia-planeamiento" className='color-negro'>GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO</Link></li>
                    <li><Link to="/C-gest-finanzas-publicas" className='color-negro'>FINANZAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-sitema-nacional-abastecimiento" className='color-negro'>SISTEMA NACIONAL DE ABASTECIMIENTO</Link></li>
                    <li><Link to="/C-gest-inversion-publica" className='color-negro'>INVERSIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-obras-publicas" className='color-negro'>GESTIÓN DE OBRAS PÚBLICAS</Link></li>
                    <li><Link to="/C-gest-derecho-penal-publica" className='color-negro'>DERECHO PENAL EN LA FUNCIÓN PÚBLICA</Link></li>
                    <li><Link to="/C-gest-publica-salud" className='color-negro'>GESTIÓN PÚBLICA EN SALUD</Link></li>
                    <li><Link to="/C-gest-biblioteca" className='color-negro'>GESTIÓN DE BIBLIOTECA</Link></li>
                    <li><Link to="/C-gest-municipal" className='color-negro'>GESTIÓN MUNICIPAL</Link></li>
                    <li><Link to="/C-gest-ambiental" className='color-negro'>GESTIÓN AMBIENTAL</Link></li>
                    <li><Link to="/C-gest-alimentacion-nutricion" className='color-negro'>ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                    <li><Link to="/C-gest-jardineria-poda-trabajosaltura" className='color-negro'>JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                    <li><Link to="/C-gest-recursos-humanos-servicio-civil" className='color-negro'>GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                    <li><Link to="/C-gest-juridica-administrativa" className='color-negro'>GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                    <li><Link to="/C-gest-control-auditoria-etica-publica" className='color-negro'>CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                    <li><Link to="/C-gest-derecho-laboral" className='color-negro'>DERECHO LABORAL</Link></li>
                    <li><Link to="/C-gest-habilidades-blandas" className='color-negro'>HABILIDADES BLANDAS</Link></li>
                    <li><Link to="/C-gest-minera" className='color-negro'>GESTIÓN MINERA</Link></li>
                    <li><Link to="/C-gest-trabajo-social" className='color-negro'>TRABAJO SOCIAL</Link></li>
                    <li><Link to="/C-gest-ofimatica" className='color-negro'>OFIMÁTICA</Link></li>
                    <li><Link to="/C-gest-inteligencia-artificial" className='color-negro'>INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                    <li><Link to="/C-gest-contenido-redaccion-digital" className='color-negro'>CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                    <li><Link to="/C-gest-sqlserver" className='color-negro'>SQL SERVER</Link></li>
                    <li><Link to="/C-gest-adobe-otros" className='color-negro'>ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                    <li><Link to="/C-gest-msproject" className='color-negro'>MS PROJECT</Link></li>
                    <li><Link to="/C-gest-proyecto-BIM" className='color-negro'>GESTIÓN DE PROYECTOS BIM</Link></li>
                    <li><Link to="/C-gest-prevencion-seguridad-vial" className='color-negro'>PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                    <li><Link to="/C-gest-paisajismo-otros" className='color-negro'>PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                    <li><Link to="/C-gest-riesgodesaste" className='color-negro'>GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                    <li><Link to="/C-gest-servicio-atencion-ciudadano" className='color-negro'>GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
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
                        <li><Link to="/dip-esp-digital-transformacion">Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
                        <li><Link to="/dip-esp-gest-documental">Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
                        <li><Link to="/dip-esp-herramientas-ofimatica">Diploma de Especialización en Herramientas Digitales y Ofimática Profesional</Link></li>
                    </ul>
                  </li>
                  <li><h2 >SECTORES ESPECÍFICOS Y GESTIÓN EMPRESARIAL</h2>
                    <ul>
                      <li><Link to="/dip-esp-gestion-obras-publicas">Diploma de Especialización en Gestión de Obras Públicas</Link></li>
                      <li><Link to="/dip-esp-gestion-publica-salud">Diploma de Especialización en Gestión Pública en Salud</Link></li>
                      <li><Link to="/dip-esp-gestion-ambiental">Diploma de Especialización en Gestión Ambiental y Desarrollo Sostenible</Link></li>
                      <li><Link to="/dip-esp-gestion-proyectos">Diploma de Especialización en Gestión de Proyectos</Link></li>
                      <li><Link to="/dip-esp-gestion-empresarial">Diploma de Especialización en Gestión Empresarial y Dirección Estratégica</Link></li>
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
        <Route path='/dip-esp-digital-transformacion' element={<Dipespdigitaltransformacion/>}/>
        <Route path='/dip-esp-gest-documental' element={<Dipoespgestdocumental/>}/>
        <Route path='/dip-esp-herramientas-ofimatica' element={<Dipespherramientasofimaticas/>}/>
        <Route path='/dip-esp-gestion-ambiental' element={<DipespGestionAmbiental/>}/>
        <Route path='/dip-esp-gestion-empresarial' element={<DipespGestionEmpresarial/>}/>
        <Route path='/dip-esp-gestion-obras-publicas' element={<DipespGestionObrasPublicas/>}/>
        <Route path='/dip-esp-gestion-proyectos' element={<DipespGestionProyectos/>}/>
        <Route path='/dip-esp-gestion-publica-salud' element={<DipespGestionPublicaSalud/>}/>
        <Route path='/curso-medida' element={<CursoMedida/>}/> 
        </Routes>
  <footer className="contenedor-footer">

    <div className="footer-bloque footer-bloque-izq">
      <a href="/">
        <img src="/uploads/Logop3.webp" alt="Logo Escuela" className="logo-final" />
      </a>
    </div>

    <div className='footer-bloque contexto'>
      <p>
        ESCUELA DE GERENCIA Y GESTION <br/>
        Centro especializado en altos estudios
        de educación ejecutiva, capacitación en 
        alta dirección, enfocada en la gestión 
        pública y la actividad empresarial
      </p>
    </div>

    <div className="footer-bloque footer-bloque-centro">
      <h2>Contáctanos</h2>
        <li><FaPhoneAlt size={12}/> 948 251 685 / 913 376 365</li>
        <li><CiMail /> capacita@escuelag.com / esscuelag@gmail.com</li>
        <li><PiMapPinLight /> Av. Arenales 2081 4to. Piso of. 9 Lince</li>
    </div>

    <div className="footer-bloque footer-bloque-der">
      <h2>Encuéntranos</h2>

      <div className="iconos-busqueda">
        <a href="https://www.instagram.com/egerencia" target="_blank">
          <FaInstagram size={20} className="fondo icon-bob"/>
        </a>

        <a href="#" target="_blank">
          <FaXTwitter size={20} className="fondo icon-bob"/>
        </a>

        <a href="https://www.facebook.com/share/1Ztggm115f/" target="_blank">
          <FaFacebook size={20} className="fondo icon-bob"/>
        </a>

        <a href="https://www.tiktok.com/@escuelagerenciaygestion" target="_blank">
          <FaTiktok size={20} className="fondo icon-bob"/>
        </a>
      </div>
    </div>

    <div className="footer-bloque libro-reclamaciones">
      <h2>LIBRO DE RECLAMACIONES</h2>
      <PiBookOpenText size={30} className='icon-reclamaciones fondo'/>
    </div>

    <div className="autor">
      <h3>by jose1801</h3>
    </div>

    <div className="footer-copyright" id="footer">
      <p>© Escuela De Gerencia y Gestión.</p>
      <p>RUC: 20510129921</p>
      <p>Todos los derechos reservados.</p>
    </div>

    <div className='contenedor-wsp-flotante'>
      <FaWhatsapp size={30} color='black' onClick={solicitarinformacion} className='icon-wsp '/>
    </div>
  </footer>
  </BrowserRouter>
  );
}

export default App;
