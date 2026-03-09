import { useState } from "react";
import '../stylescss/programa-gestion-empresarial.css';
import {
  FaBriefcase,
  FaBullhorn,
  FaTruck,
  FaUsers,
  FaComments,
  FaProjectDiagram,
  FaCalculator,
  FaShieldAlt,
  FaLaptopCode,
  FaFileExcel,
  FaRobot
} from "react-icons/fa";

function ProgramaGestionEmpresarial() {
  const [openArea, setOpenArea] = useState("gestion-negocios");

  return (
    <section className="programa-empresarial">

      {/* HERO */}
      <section className="empresarial-hero">
        <img
          src="/uploads/banner4.jpg"
          alt="Programa Gestión Empresarial"
          className="empresarial-hero__image"
        />
        <div className="empresarial-hero__overlay"></div>

        <div className="empresarial-hero__content">
          <p className="empresarial-hero__eyebrow">CURSO GESTIÓN EMPRESARIAL</p>
          <h1 className="empresarial-hero__title">Programa Gestión Empresarial</h1>
          <p className="empresarial-hero__text">
            Desarrolla habilidades estratégicas para optimizar la gestión integral y liderar áreas clave de una empresa.
          </p>
          <button className="empresarial-hero__button">Descubrir el programa</button>
        </div>
      </section>

      {/* COMPETENCIAS */}
      <section className="empresarial-competencias">
        <div className="section-heading">
          <p className="section-heading__eyebrow">COMPETENCIAS DEL PROGRAMA</p>
          <h2 className="section-heading__title">Competencias que desarrollarás</h2>
          <p className="section-heading__text">
            Conviértete en un líder estratégico, capaz de dirigir equipos y proyectos con eficiencia,
            visión analítica e innovación constante.
          </p>
        </div>

        <div className="empresarial-competencias__grid">
          <article className="emp-card competencia-card">
            <div className="competencia-card__icon">
              <FaProjectDiagram />
            </div>
            <div className="competencia-card__content">
              <h3>Integración estratégica y operativa</h3>
              <p>Optimiza recursos de manera integral.</p>
            </div>
          </article>

          <article className="emp-card competencia-card">
            <div className="competencia-card__icon">
              <FaCalculator />
            </div>
            <div className="competencia-card__content">
              <h3>Toma de decisiones basada en datos</h3>
              <p>Analiza información para decisiones acertadas.</p>
            </div>
          </article>

          <article className="emp-card competencia-card">
            <div className="competencia-card__icon">
              <FaBullhorn />
            </div>
            <div className="competencia-card__content">
              <h3>Diseño de estrategias de crecimiento</h3>
              <p>Implementa planes para un crecimiento sostenible.</p>
            </div>
          </article>

          <article className="emp-card competencia-card">
            <div className="competencia-card__icon">
              <FaRobot />
            </div>
            <div className="competencia-card__content">
              <h3>Liderazgo en innovación y cambio organizacional</h3>
              <p>Conduce procesos de innovación en la empresa.</p>
            </div>
          </article>
        </div>
      </section>

      {/* AREAS */}
      <section className="empresarial-areas">
        <div className="section-heading">
          <p className="section-heading__eyebrow">ÁREAS DE FORMACIÓN</p>
          <h2 className="section-heading__title">Áreas de Formación</h2>
          <p className="section-heading__text">
            Explora nuestras áreas de formación y especialízate en los campos clave para el éxito empresarial.
          </p>
        </div>

        <div className="empresarial-areas__grid">

          <details
            className="emp-card area-card"
            open={openArea === "gestion-negocios"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "gestion-negocios" ? "" : "gestion-negocios");
              }}
            >
              <span className="area-card__icon"><FaBriefcase /></span>
              <div className="area-card__head">
                <h3>Gestión de Negocios</h3>
                <p>Negociación y dirección empresarial</p>
              </div>
            </summary>
            <ul>
              <li>Negociación y Persuasión Comercial</li>
              <li>Dirección de Equipos de Ventas</li>
              <li>Power BI y DAX aplicado a la toma de decisiones</li>
              <li>Gestión Empresarial</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "marketing-digital"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "marketing-digital" ? "" : "marketing-digital");
              }}
            >
              <span className="area-card__icon"><FaBullhorn /></span>
              <div className="area-card__head">
                <h3>Marketing Digital</h3>
                <p>SEO, social media y publicidad digital</p>
              </div>
            </summary>
            <ul>
              <li>Marketing Ads y Analytics</li>
              <li>Content Marketing Avanzado: SEO, Performance y Embudos de Conversión</li>
              <li>Marketing de Contenidos</li>
              <li>Plan de Marketing Estratégico</li>
              <li>Community Manager</li>
              <li>Diseño Gráfico Digital</li>
              <li>Plan de Medios Digitales</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "operaciones-logistica"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "operaciones-logistica" ? "" : "operaciones-logistica");
              }}
            >
              <span className="area-card__icon"><FaTruck /></span>
              <div className="area-card__head">
                <h3>Operaciones y Logística</h3>
                <p>Optimización de procesos y cadena de suministro</p>
              </div>
            </summary>
            <ul>
              <li>Gestión de la Cadena de Suministro</li>
              <li>Gestión de Operaciones y Producción</li>
              <li>Gestión Digitalizada de Compras y Abastecimientos</li>
              <li>Gestión Digitalizada de Almacenes e Inventarios</li>
              <li>Riesgos y Decisiones Estratégicas Empresariales</li>
              <li>Liderazgo de Equipos de Alto Rendimiento en Proyectos</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "talento-humano"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "talento-humano" ? "" : "talento-humano");
              }}
            >
              <span className="area-card__icon"><FaUsers /></span>
              <div className="area-card__head">
                <h3>Gestión del Talento Humano</h3>
                <p>Liderazgo y desarrollo del capital humano</p>
              </div>
            </summary>
            <ul>
              <li>Gestión de Recursos Humanos</li>
              <li>Atracción y Selección de Talento</li>
              <li>Legislación Laboral y Gestión de Compensaciones</li>
              <li>Planillas y Derecho Laboral</li>
              <li>Seguridad y Salud Ocupacional</li>
              <li>Prevención de Riesgos Laborales</li>
              <li>Gestión Estratégica de Cultura y Clima Laboral</li>
              <li>Comunicación Estratégica Interna y Experiencia del Colaborador</li>
              <li>Indicadores en la Gestión del Talento Humano</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "habilidades-blandas"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "habilidades-blandas" ? "" : "habilidades-blandas");
              }}
            >
              <span className="area-card__icon"><FaComments /></span>
              <div className="area-card__head">
                <h3>Habilidades Blandas y Liderazgo</h3>
                <p>Comunicación, negociación y liderazgo</p>
              </div>
            </summary>
            <ul>
              <li>Negociación y Resolución de Conflictos</li>
              <li>Inteligencia Emocional y Liderazgo</li>
              <li>Presentaciones de Alto Impacto y Storytelling</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "gestion-proyectos"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "gestion-proyectos" ? "" : "gestion-proyectos");
              }}
            >
              <span className="area-card__icon"><FaProjectDiagram /></span>
              <div className="area-card__head">
                <h3>Gestión de Proyectos</h3>
                <p>Planificación y control de proyectos</p>
              </div>
            </summary>
            <ul>
              <li>Gestión de Costos y Presupuestos de Proyectos</li>
              <li>Metodologías Ágiles para Proyectos</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "contabilidad-finanzas"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "contabilidad-finanzas" ? "" : "contabilidad-finanzas");
              }}
            >
              <span className="area-card__icon"><FaCalculator /></span>
              <div className="area-card__head">
                <h3>Contabilidad y Finanzas</h3>
                <p>Gestión financiera y control contable</p>
              </div>
            </summary>
            <ul>
              <li>Planeamiento y Control Financiero</li>
              <li>Gestión de Tesorería</li>
              <li>Gestión de Riesgos</li>
              <li>Contabilidad Gerencial</li>
              <li>Normas Internacionales de Información Financiera (NIIF y NIC)</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "gestion-tributaria"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "gestion-tributaria" ? "" : "gestion-tributaria");
              }}
            >
              <span className="area-card__icon"><FaShieldAlt /></span>
              <div className="area-card__head">
                <h3>Gestión Tributaria</h3>
                <p>Normativa fiscal y planeamiento tributario</p>
              </div>
            </summary>
            <ul>
              <li>Tributación Empresarial</li>
              <li>Planeamiento Tributario</li>
              <li>Fiscalización y Procedimientos Tributarios</li>
              <li>Impuesto a la Renta Empresarial</li>
              <li>Infracciones, Sanciones y Gradualidad Tributaria</li>
              <li>Compliance Tributario y Gestión de Riesgos Fiscales</li>
              <li>Esquemas de Alto Riesgo Fiscal y Ventajas Tributarias Indebidas</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "tecnologia"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "tecnologia" ? "" : "tecnologia");
              }}
            >
              <span className="area-card__icon"><FaLaptopCode /></span>
              <div className="area-card__head">
                <h3>Tecnología</h3>
                <p>Nuevas tecnologías y ciberseguridad</p>
              </div>
            </summary>
            <ul>
              <li>Diseño Web</li>
              <li>Ethical Hacking y Ciberseguridad</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "excel-profesional"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "excel-profesional" ? "" : "excel-profesional");
              }}
            >
              <span className="area-card__icon"><FaFileExcel /></span>
              <div className="area-card__head">
                <h3>Excel Profesional</h3>
                <p>Dominio de Excel aplicado a negocios</p>
              </div>
            </summary>
            <ul>
              <li>Excel Básico</li>
              <li>Excel Intermedio</li>
              <li>Excel Avanzado</li>
            </ul>
          </details>

          <details
            className="emp-card area-card"
            open={openArea === "ia-datos"}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenArea(openArea === "ia-datos" ? "" : "ia-datos");
              }}
            >
              <span className="area-card__icon"><FaRobot /></span>
              <div className="area-card__head">
                <h3>Inteligencia Artificial y Ciencia de Datos</h3>
                <p>Automatización, análisis y machine learning</p>
              </div>
            </summary>
            <ul>
              <li>Ciencia de Datos con Python</li>
              <li>Ciencia de Datos y Machine Learning</li>
            </ul>
          </details>

        </div>
      </section>
    </section>
  );
}

export default ProgramaGestionEmpresarial;