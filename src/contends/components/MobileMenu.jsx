import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylescss/movilmenu.css";

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
    <li className='color-negro'>
    <button className="btn-cta menu-title " onClick={solicitarinformacion} >
    SOLICITAR INFORMACIÓN
    </button>
    </li>

    <li>
    <button className="btn-cta menu-title" onClick={aulavirtual}>
    AULA VIRTUAL
    </button>
</li>
<li>
<Link to="/la_escuela" className='color-negro'x>LA ESCUELA</Link>
</li>


{/* CURSOS GESTION PUBLICA */}

<li>

<div
    className="menu-title color-negro"
    onClick={()=>setCursos(!cursos)}
    >
    <Link to="/programa-gestion-publica menu-title" className="color-negro">
        CURSO GESTIÓN PUBLICA
    </Link>
    
</div>

{cursos && (

    <ul className="submenu dos-columnas">
                <li onClick={cerrarMenu} ><Link to="/C-gest-estrategia-planeamiento" className='color-negro'>GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-finanzas-publicas" className='color-negro'>FINANZAS PÚBLICAS</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-sitema-nacional-abastecimiento" className='color-negro'>SISTEMA NACIONAL DE ABASTECIMIENTO</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-inversion-publica" className='color-negro'>INVERSIÓN PÚBLICA</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-obras-publicas" className='color-negro'>GESTIÓN DE OBRAS PÚBLICAS</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-derecho-penal-publica" className='color-negro'>DERECHO PENAL EN LA FUNCIÓN PÚBLICA</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-publica-salus" className='color-negro'>GESTIÓN PÚBLICA EN SALUD</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-biblioteca" className='color-negro'>GESTIÓN DE BIBLIOTECA</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-municipal" className='color-negro'>GESTIÓN MUNICIPAL</Link></li>
                <li onClick={cerrarMenu} ><Link to="/C-gest-ambiental" className='color-negro'>GESTIÓN AMBIENTAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-alimentacion-nutricion" className='color-negro'>ALIMENTACIÓN Y NUTRICIÓN</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-jardineria-poda-trabajosaltura" className='color-negro'>JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-recursos-humanos-servicio-civil" className='color-negro'>GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-juridica-administrativa" className='color-negro'>GESTIÓN JURÍDICA Y ADMINISTRATIVA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-control-auditoria-etica-publica" className='color-negro'>CONTROL, AUDITORÍA Y ÉTICA PÚBLICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-derecho-laboral" className='color-negro'>DERECHO LABORAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-habilidades-blandas" className='color-negro'>HABILIDADES BLANDAS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-minera" className='color-negro'>GESTIÓN MINERA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-trabajo-social" className='color-negro'>TRABAJO SOCIAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-ofimatica" className='color-negro'>OFIMÁTICA</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-inteligencia-artificial" className='color-negro'>INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-contenido-redaccion-digital" className='color-negro'>CONTENIDO Y REDACCIÓN DIGITAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-sqlserver" className='color-negro'>SQL SERVER</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-adobe-otros" className='color-negro'>ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-msproject" className='color-negro'>MS PROJECT</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-proyecto-BIM" className='color-negro'>GESTIÓN DE PROYECTOS BIM</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-prevencion-seguridad-vial" className='color-negro'>PREVENCIÓN Y SEGURIDAD VIAL</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-paisajismo-otros" className='color-negro'>PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-riesgodesaste" className='color-negro'>GESTIÓN DE RIESGOS DE DESASTRES</Link></li>
                <li onClick={cerrarMenu}><Link to="/C-gest-servicio-atencion-ciudadano" className='color-negro'>GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO</Link></li>
    </ul>
        )}

    </li>


<li>
<Link to="/programa-gestion-empresarial" className='color-negro'> 
CURSO GESTIÓN EMPRESARIAL
</Link>
</li>


{/* DIPLOMAS */}

<li>

<div
className="menu-title"
onClick={()=>setDiplomas(!diplomas)}
>
    <Link to='/diplomas' className='color-negro'>
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

        <li onClick={cerrarMenu}><Link to="/dip-gest-publica-moderna" className='color-negro'>Gestión Pública Moderna</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-gest-estrategico" className='color-negro'>Planeamiento Estratégico</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-presupuesto-publico" className='color-negro'>Presupuesto Público</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-invierte-pe" className='color-negro'>Invierte.pe</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-sistemas-administrativa-estado" className='color-negro'>Sistemas Administrativos</Link></li>

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
            <li onClick={cerrarMenu}><Link to="/dip-esp-contratacion-estado" className='color-negro'>Contrataciones del Estado</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-sistema-abastecimiento" className='color-negro'>Sistema de Abastecimiento</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-auditoria-gubernamental" className='color-negro'>Auditoría</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-derecho-procedimiento" className='color-negro'>Derecho Administrativo</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-etica-integridad" className='color-negro'>Ética Pública</Link></li>
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
            <li onClick={cerrarMenu}><Link to="/dip-esp-gest-recursos-humanos" className='color-negro'>Diploma de Especialización en Gestión de Recursos Humanos en el Sector Público</Link></li>
            <li onClick={cerrarMenu}><Link to="/dip-esp-liderazgo-gestion-equipos" className='color-negro'>Diploma de Especialización en Liderazgo y Gestión de Equipos</Link></li>
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
        <li onClick={cerrarMenu}><Link to="/dip-esp-digital-transformacion" className='color-negro'>Diploma de Especialización en Gobierno Digital y Transformación Digital</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gest-documental" className='color-negro'>Diploma de Especialización en Gestión Documental y Archivos Digitales</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-herramientas-ofimatica" className='color-negro'>Diploma de Especialización en Herramientas Digitales y Ofimática Profesional</Link></li>
    </ul>
    )}
</li>

{/* CATEGORIA 5 */}
<li>
    <div onClick={()=>setCategoria5(!categoria5)}
    >
        SECTORES ESPECÍFICOS Y GESTIÓN EMPRESARIAL
    </div>

    {categoria5 && (
    <ul>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-obras-publicas" className='color-negro'>Diploma de Especialización en Gestión de Obras Públicas</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-publica-salud" className='color-negro'>Diploma de Especialización en Gestión Pública en Salud</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-ambiental" className='color-negro'>Diploma de Especialización en Gestión Ambiental y Desarrollo Sostenible</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-proyectos" className='color-negro'>Diploma de Especialización en Gestión de Proyectos</Link></li>
        <li onClick={cerrarMenu}><Link to="/dip-esp-gestion-empresarial" className='color-negro'>Diploma de Especialización en Gestión Empresarial y Dirección Estratégica</Link></li>
    </ul>
    )}
</li>

</ul>
)}

</li>

<li>
    <Link to="/curso-medida" className='color-negro'>
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