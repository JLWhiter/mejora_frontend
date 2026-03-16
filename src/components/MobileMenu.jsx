import { useState } from "react";
import { Link } from "react-router-dom";
import "../contends/stylescss/movilmenu.css";

function MobileMenu() {
const cerrarMenu = () => {
  setMenu(false);
};
const [menu,setMenu]=useState(false);
const [cursos,setCursos]=useState(false);
const [diplomas,setDiplomas]=useState(false);

const [categoria1,setCategoria1]=useState(false);
const [categoria2,setCategoria2]=useState(false);
const [categoria3,setCategoria3]=useState(false);
const [categoria4,setCategoria4]=useState(false);
const [categoria5,setCategoria5]=useState(false);
const solicitarinformacion = (mensaje = "Hola quiero información") => {

const texto = encodeURIComponent(mensaje)

window.open(
`https://wa.me/51945504555?text=${texto}`,
"_blank"
)
};
const aulavirtual=()=>{
    window.open("https://escuelag.com/moodle/login");
};


return(

<div className="mobile-menu">

<button
className={`hamburger ${menu ? "open" : ""}`}
onClick={() => setMenu(!menu)}
>   
{menu ? "✕" : "≡"}
</button>
{menu && (

<div className="mobile-panel">

<ul>
    <li>
    <button className="btn-cta menu-title" onClick={solicitarinformacion}>
    SOLICITAR INFORMACIÓN
    </button>
    </li>

    <li>
    <button className="btn-cta menu-title" onClick={aulavirtual}>
    AULA VIRTUAL
    </button>
</li>
<li>
<Link to="/la_escuela">LA ESCUELA</Link>
</li>


{/* CURSOS GESTION PUBLICA */}

<li>

<div
    className="menu-title"
    onClick={()=>setCursos(!cursos)}
    >
    <Link to="/programa-gestion-publica">
        URSO GESTIÓN PUBLICA
    </Link>
    
</div>

{cursos && (

    <ul className="submenu dos-columnas">
                <li onClick={cerrarMenu}><Link to="/C-gest-estrategia-planeamiento">GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-finanzas-publicas">FINANZAS PÚBLICAS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-sitema-nacional-abastecimiento">SISTEMA NACIONAL DE ABASTECIMIENTO</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-inversion-publica">INVERSIÓN PÚBLICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-obras-publicas">GESTIÓN DE OBRAS PÚBLICAS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-derecho-penal-publica">DERECHO PENAL EN LA FUNCIÓN PÚBLICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-publica-salus">GESTIÓN PÚBLICA EN SALUD</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-biblioteca">GESTIÓN DE BIBLIOTECA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-municipal" >GESTIÓN MUNICIPAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-ambiental" >GESTIÓN AMBIENTAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-alimentacion-nutricion" >ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-jardineria-poda-trabajosaltura" >JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-recursos-humanos-servicio-civil" >GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-juridica-administrativa" >GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-control-auditoria-etica-publica" >CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-derecho-laboral" >DERECHO LABORAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-habilidades-blandas" >HABILIDADES BLANDAS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-minera" >GESTIÓN MINERA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-trabajo-social" >TRABAJO SOCIAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-ofimatica" >OFIMÁTICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-inteligencia-artificial" >INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-contenido-redaccion-digital" >CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-sqlserver" >SQL SERVER</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-adobe-otros" >ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-msproject" >MS PROJECT</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-proyecto-BIM" >GESTIÓN DE PROYECTOS BIM</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-prevencion-seguridad-vial" >PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-paisajismo-otros" >PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-riesgodesaste" >GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-servicio-atencion-ciudadano" >GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
    </ul>
        )}

    </li>


<li>
<Link to="/programa-gestion-empresarial">
CURSO GESTIÓN EMPRESARIAL
</Link>
</li>


{/* DIPLOMAS */}

<li>

<div
className="menu-title"
onClick={()=>setDiplomas(!diplomas)}
>
    <Link to='/diplomas'>
        DIPLOMAS Y ESPECIALIZADO
    </Link>
</div>

{diplomas && (

<ul className="submenu">

{/* CATEGORIA 1 */}

    <li>

    <div onClick={()=>setCategoria1(!categoria1)}>
    GESTIÓN PÚBLICA Y SISTEMAS ADMINISTRATIVOS
    </div>
    {categoria1 && (

        <ul>

        <li onClick={cerrarMenu}><Link to="/dip-gest-publica-moderna">Gestión Pública Moderna</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-gest-estrategico">Planeamiento Estratégico</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-presupuesto-publico">Presupuesto Público</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-invierte-pe">Invierte.pe</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-sistemas-administrativa-estado">Sistemas Administrativos</Link></li>

        </ul>

    )}

    </li>


{/* CATEGORIA 2 */}

<li>

    <div onClick={()=>setCategoria2(!categoria2)}>
    CONTRATACIONES, CONTROL Y NORMATIVA
    </div>

    {categoria2 && (
        <ul>
            <li onClick={cerrarMenu}><Link to="/dip-esp-contratacion-estado">Contrataciones del Estado</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-sistema-abastecimiento">Sistema de Abastecimiento</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-auditoria-gubernamental">Auditoría</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-derecho-procedimiento">Derecho Administrativo</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-etica-integridad">Ética Pública</Link></li>
        </ul>
    )}
</li>

{/* CATEGORIA 3 */}

<li>

    <div onClick={()=>setCategoria3(!categoria3)}>
    GESTIÓN DEL TALENTO HUMANO
    </div>

    {categoria3 && (
        <ul>
            <li onClick={cerrarMenu}><Link to="/dip-esp-gest-recursos-humanos">Diploma de Especialización en Gestión de Recursos Humanos en el Sector Público</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-liderazgo-gestion-equipos">Diploma de Especialización en Liderazgo y Gestión de Equipos</Link></li>
        </ul>
    )}
</li>

{/* CATEGORIA 4 */}

<li>

    <div onClick={()=>setCategoria4(!categoria4)}>
    TRANSFORMACIÓN DIGITAL Y TIC
    </div>

    {categoria4 && (
    <ul>
        <li onClick={cerrarMenu}><Link to="/dip-esp-digital-transformacion">Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gest-documental">Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-herramientas-ofimatica">Diploma de Especialización en Herramientas Digitales y Ofimática Profesional</Link></li>
    </ul>
    )}
</li>

{/* CATEGORIA 5 */}
<li>
    <div onClick={()=>setCategoria5(!categoria5)}
    >
        {categoria5 ? "true" : "false"}
        SECTORES ESPECÍFICOS Y GESTIÓN EMPRESARIAL
    </div>

    {categoria5 && (
    <ul>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-obras-publicas">Diploma de Especialización en Gestión de Obras Públicas</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-publica-salud">Diploma de Especialización en Gestión Pública en Salud</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-ambiental">Diploma de Especialización en Gestión Ambiental y Desarrollo Sostenible</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-proyectos">Diploma de Especialización en Gestión de Proyectos</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-empresarial">Diploma de Especialización en Gestión Empresarial y Dirección Estratégica</Link></li>
    </ul>
    )}
</li>

</ul>
)}

</li>

<li>
    <Link to="/curso-medida">
    CURSOS INHOUSE
    </Link>
</li>
</ul>
</div>
)}
</div>
)
}

export default MobileMenu