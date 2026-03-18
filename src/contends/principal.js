import './stylescss/principal.css';
import { IoMdClock, IoIosPeople } from "react-icons/io";
import { MdComputer, MdOutlineWork } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { BsStar } from "react-icons/bs";
import HeroCarousel from '../components/Herocarousel.jsx'

function Principal() {
  return (
    <div className="Principal">
      <HeroCarousel/>
      <section className="hero">
      </section>

      <section className="beneficios">
        <h2 className="section-title">¿Por qué elegirnos?</h2>

        <div className="beneficios-grid">
          <article className="beneficio-card">
            <IoMdClock size={54} className="beneficio-icon" />
            <h3>Horarios flexibles</h3>
            <p>Programas adaptados a tu tiempo.</p>
          </article>

          <article className="beneficio-card">
            <MdOutlineWork size={54} className="beneficio-icon" />
            <h3>Desarrollo de casos reales de empresas</h3>
            <p>Estudia casos prácticos reales del mundo empresarial.</p>
          </article>

          <article className="beneficio-card">
            <MdComputer size={54} className="beneficio-icon" />
            <h3>Aula moderna e intuitiva</h3>
            <p>Ambiente de aprendizaje innovador y accesible.</p>
          </article>

          <article className="beneficio-card">
            <GrCertificate size={54} className="beneficio-icon" />
            <h3>Certificación de calidad</h3>
            <p>Diplomas reconocidos que avalan tu formación.</p>
          </article>

          <article className="beneficio-card">
            <IoIosPeople size={54} className="beneficio-icon" />
            <h3>Expositores con experiencia</h3>
            <p>Profesionales expertos en gerencia y gestión.</p>
          </article>

          <article className="beneficio-card">
            <BsStar size={54} className="beneficio-icon" />
            <h3>+30 años capacitando ejecutivos</h3>
            <p>Trayectoria sólida y comprobada en el sector.</p>
          </article>
        </div>
      </section>

      <section className="servicios">
        <h2 className="section-title">Cursos Destacados</h2>

        <div className="servicios-grid">
          <article className="curso-card">
          <img src="/uploads/curs_7.png" className="curso-img" alt="Gestión de almacén" />
            <h3>GESTIÓN DE ALMACÉN E INVENTARIO</h3>
          </article>

          <article className="curso-card">
          <img src="/uploads/curs_9.png" className="curso-img" alt="PROCESO ADMINISTRATIVO" />
            <h3>PROCESO ADMINISTRATIVO GENERAL</h3>
          </article>

          <article className="curso-card">
          <img src="/uploads/curs_10.webp" className="curso-img" alt="PROCESO DISCIPLINARIO" />
            <h3>PROCESO DISCIPLINARIO PASS</h3>
          </article>

          <article className="curso-card">
          <img src="/uploads/curs_11.webp" className="curso-img" alt="SISTEMA INTEGRADO" />
            <h3>SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA SIAF – RP</h3>
          </article>
        </div>
      </section>

    </div>
  );
}

export default Principal;