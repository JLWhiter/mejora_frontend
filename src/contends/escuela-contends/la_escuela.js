import { useState } from 'react';
import '../stylescss/la_escuela.css';

function LaEscuela() {
  const [opencontexto, setOpenContexto] = useState("");
  return (
    <section className="la-escuela">

      {/* HERO */}
      <section className="escuela-hero">
        <div className="escuela-hero__content">
          <p className="escuela-hero__eyebrow">LA ESCUELA</p>
          <h1 className="escuela-hero__title">Escuela de Gerencia y Gestión</h1>
          <p className="escuela-hero__text">
            Escuela de Gerencia y Gestión es un Centro Especializado de Altos estudios de enseñanza,
            Capacitación y Preparación Profesional en alta dirección en gestión pública y la actividad
            empresarial con los estándares requeridos por Universidades y Grupos Empresariales más
            exigentes de nuestro país. EGG, desde el año 2003 brinda sus servicios de educación para
            ejecutivos a través de una plataforma de Programas de Especialización y capacitación en gestión
            pública y la actividad empresarial dentro de las diferentes áreas funcionales de la administración
            moderna y tecnología de la información para usuarios de las distintas carreras profesionales
            interesados en una mejora de oportunidades y desarrollo profesional.
          </p>
        </div>

        <div className="escuela-hero__media">
          <img src="/uploads/curs_5.png" alt="La Escuela" className="escuela-hero__image" />
        </div>
      </section>

      {/* PROPOSITO / MISION / VISION */}
      <section className="escuela-cards">
        <article className="escuela-card">
          <h2>Propósito</h2>
          <p>
            Es ofrecer servicios de nivel ejecutivo para la gestión profesional de personas y organización en los
            sectores clases del desarrollo del país, mejorando su desempeño y propiciando el crecimiento.
          </p>
        </article>

        <article className="escuela-card">
          <h2>Misión</h2>
          <p>
            Desarrollar soluciones estratégicas de aprendizaje vanguardistas orientadas a resultados para formar
            profesionales competentes bajo el desarrollo integral de conocimientos, habilidades, aptitudes y
            actitudes para potencializar la productividad individual y la excelencia organizacional en base a resultados.
          </p>
        </article>

        <article className="escuela-card">
          <h2>Visión</h2>
          <p>
            EGG aspira a consolidarse como líder en educación ejecutiva, reconocido por excelencia y por satisfacer
            los estándares más exigentes de universidades y grupos empresariales en el país. Busca ser un referente
            en la formación de líderes capaces de enfrentar los retos la gestión pública y empresarial.
          </p>
        </article>
      </section>

      {/* VALORES */}
      <section className="escuela-valores">
        <div className="escuela-valores__content">
          <article className="escuela-card">
            <h2>Nuestros valores</h2>
            <p>
              Procuramos ser la personificación de lo más te gusta, la integridad, la innovación y el espíritu
              emprendedor, esforzándonos continuamente por llevar a la práctica nuestra visión. Estos valores nos
              guían en todo lo que hacemos, y son la base en la que descansa nuestra organización como:
              Creatividad, Liderazgo, Trabajo en equipo, Servicio y Calidad.
            </p>
          </article>

          <article className="escuela-card">
            <h2>Valores</h2>

            <h3>Excelencia</h3>
            <p>
              Compromiso con la calidad y la mejora continua en los servicios ofrecidos.
            </p>

            <h3>Innovación</h3>
            <p>
              Adaptación y desarrollo de soluciones educativas y de consultoría que respondan a las demandas
              cambiantes del mercado.
            </p>

            <h3>Integridad</h3>
            <p>
              Práctica de la ética y la transparencia en todas sus actividades y servicios.
            </p>

            <h3>Compromiso con el desarrollo profesional</h3>
            <p>
              Enfoque en brindar herramientas que potencien las habilidades y competencias de sus usuarios para
              su crecimiento en el ámbito laboral.
            </p>
          </article>
        </div>

        <div className="escuela-valores__media">
          <img src="/uploads/curs_7.png" alt="Valores" className="escuela-valores__image" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="escuela-servicios">
        <div className="section-heading">
          <p className="section-heading__eyebrow">NUESTROS SERVICIOS</p>
          <h2 className="section-heading__title">Programas y servicios</h2>
        </div>
        <div className="escuela-servicios__grid"> 
          <div className="escuela-card servicio-card">
            <details
            open={opencontexto === "cursos-seminarios"}
            >
                <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpenContexto(opencontexto === "cursos-seminarios" ? "" : "cursos-seminarios");
                }}
              >
                <div>
                  <h3>1. Cursos y Seminarios Talleres</h3>
                </div>
              </summary>
                <p>
                  Actividades de corta duración (12 a 24 horas académicas) que tratan temas específicos y especializados,
                  novedosos o de coyuntura; están dirigidas a profesionales en general, propiciando la discusión de temas
                  de interés mutuo. A través de estos eventos, la EGG busca atender las necesidades de capacitación de
                  grupos específicos de las entidades del Sector Público y la actividad Empresarial en temas relacionados
                  a la Gestión Pública y gestión de competencias empresariales.
                </p>
            </details>
          </div>

          <div className="escuela-card servicio-card">
            <details
            open={opencontexto === "programas-perfeccionamiento"}
            >
            <summary
            onClick={(e) =>{
              e.preventDefault();
              setOpenContexto(opencontexto === "programas-perfeccionamiento" ?"" : "programas-perfeccionamiento")
            }}
            >
              <div>  
                <h3>2. Programas de Perfeccionamiento - Cursos Regulares</h3>
              </div>
            </summary>
              <p>
                Cursos y Talleres cuyo objetivo es desarrollar competencias específicas para mejorar la eficiencia de los
                procesos de la actividad profesional, capacitación y actualización en todas las áreas administrativas,
                contables, tributarias, financieras, recursos humanos, tecnológicas y competencias.
              </p>
              <p>
                Los cursos y talleres de estos programas tienen una duración entre 24 a 40 horas académicas,
                dependiendo si se realizan en nuestras instalaciones respectivamente.
              </p>
              <p>
                Se ofrecen en la modalidad presencial y a distancia.
              </p>
            </details>
          </div>

          <div className="escuela-card servicio-card">
            <details
            open={opencontexto === "programa-especializacion"}
            >    
            <summary
            onClick={(e)=>{
              e.preventDefault();
              setOpenContexto(opencontexto === "programa-especializacion" ? "": "programa-especializacion")
            }}>          
              <div>
              <h3>3. Programas de Especialización</h3>
              </div>
            </summary>
            <p>
              Este programa está compuesto por cursos y talleres ordenados en una secuencia de aprendizaje para
              proporcionar al participante los conocimientos, habilidades y actitudes que lo califican como especialista
              en un área determinada de la Gestión Pública o la actividad empresarial. Se ofrecen en la modalidad
              presencial y virtual.
            </p>
            </details>
          </div>

          <div className="escuela-card servicio-card">
            <details
            open={opencontexto === "diplomas-especializacion"}
            >
            <summary
            onClick={(e) => {
              e.preventDefault();
              setOpenContexto(opencontexto === "diplomas-especializacion" ? "" : "diplomas-especializacion")
            }}
            >
              <div>
              <h3>4. Diplomas de Especialización</h3>
              </div>
            </summary>
            <p>
              Programas compuestos por cursos y talleres orientados al perfeccionamiento de los servidores del Estado
              y la actividad Empresarial, graduados en disciplinas diversas, destinados a brindar una capacitación o
              profundización de conocimientos en las áreas de la Gestión Pública y Empresarial.
            </p>
            <p>
              Los diplomas de especialización entregan a sus egresados una actualización profesional y un complemento
              a su formación en aspectos específicos de modo que sean capaces de continuar con un trabajo profesional
              autónomo en el área o completar otros estudios académicos de postgrado.
            </p>
            <p>
              Se ofrecen en la modalidad presencial y virtual.
            </p>
            </details>
          </div>

          <div className="escuela-card servicio-card">
          <details
          open={opencontexto === "congresos"}
          >
            <summary
            onClick={(e) =>{
              e.preventDefault();
              setOpenContexto(opencontexto === "congresos" ? "" : "congresos")
            }}
            >
              <div>
              <h3>5. Congresos</h3>
              </div>
            </summary>
            <p>
              Estos eventos están diseñados para el desarrollo y realización de eventos de impacto como congresos
              nacionales e internacionales. Escuela de Gerencia y Gestión SAC desarrolla desde 2003 eventos de
              negocios relevantes y de mayor convocatoria en el mercado en especialidades de retail, innovación,
              finanzas, logística, marketing, estrategia, innovación en la gestión pública y la actividad empresarial y de negocios.
            </p>
          </details>
          </div>

          <div className="escuela-card servicio-card">
            <details
            open={opencontexto === "programas-medidas"}
            >
              <summary 
              onClick={(e)=>{
                e.preventDefault();
                setOpenContexto(opencontexto === "programas-medidas" ? "":"programas-medidas")
              }}
              >
              <div>
              <h3>6. Programas a la Medida - Cursos In House</h3>
              </div>
              </summary>
            <p>
              Nuestros programas a la medida están diseñados para responder a las necesidades específicas de una
              institución o área en particular. Incluyen conferencias, cursos y talleres personalizados según los
              requerimientos de capacitación de los participantes o de las entidades solicitantes.
            </p>
            <p>
              Brindamos herramientas actualizadas y soluciones prácticas alineadas con las tendencias actuales y el
              contexto local, permitiendo su aplicación inmediata en organizaciones e instituciones.
            </p>
            <p>
              Estos cursos pueden impartirse en las propias instalaciones de la entidad y garantizan el cumplimiento de
              los objetivos de capacitación esperados, contribuyendo al desarrollo del personal y al cumplimiento del
              Plan de Desarrollo de Personas (PDP).
            </p>
            </details>
          </div>

          <div className="escuela-card servicio-card servicio-card--full">
            <details
            open={opencontexto === "asesoria-consulta"}
            >
              <summary
              onClick={(e)=>{
                e.preventDefault();
                setOpenContexto(opencontexto === "asesoria-consulta" ? "" : "asesoria-consulta")
              }}
              >
              <h3>7. Asesoría y Consultoría</h3>
              </summary>
            <p>
              Además desarrollamos consultorías en todos los campos de la Gestión Pública y Empresarial que tienen como
              finalidad proponer la mejor estrategia para el crecimiento y desarrollo de las Instituciones y Empresas.
            </p>
            <p>
              Entre los principales campos de acción tenemos:
            </p>
            <ul className="servicio-lista">
              <li>Consultoría en los sistemas administrativos (administración, finanzas y logística).</li>
              <li>Desarrollo y elaboración de inventarios de bienes muebles e inmuebles.</li>
              <li>Auditoría médica y gestión de calidad en gestión salud.</li>
            </ul>
            </details>
          </div>
        </div>
      </section>

    </section>
  );
}

export default LaEscuela;