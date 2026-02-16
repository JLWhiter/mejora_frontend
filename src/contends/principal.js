import './stylescss/principal.css';
function Principal() {
  return (
    <div>

      <div className="banner">
        <img src="/uploads/banner1.jpg" className="banner-img" />
        <img src="/uploads/banner3.jpg" className="banner-img"/>
      </div>

      <div id="Contenido-para-img">
        <h1 className="contenido-texto1 typewriter-animation1"
        style={{ "--steps": 50 }}>
        Conviértete en el
        </h1>
        <h1 className="contenido-texto typewriter-animation2"
          style={{ "--steps": 40 }}>
          Líder que tu organización necesita
        </h1>
        <h1 className="contenido-texto2 typewriter-animation3"
          style={{ "--steps": 50 }}>
          Programas especializados en Gerencia<br />
          y Gestión<br />
          Transforma tu carrera profesional
        </h1>
      </div>



      <section className="beneficios">
        <h2>¿Por qué elegirnos?</h2>
        <div className="beneficios-grid">
          <p>Horarios flexibles</p>
          <p>Desarrollo de casos reales de empresas</p>
          <p>Aula moderna e intuitiva</p>
          <p>Certificación de calidad</p>
          <p>Expositores con experiencia</p>
          <p>+30 años capacitando ejecutivos</p>
        </div>
      </section>

      <div className="servicios">

        <section id="grupo-1">
          <ul className='curso1'>
            <li><h1 id="tex1">GESTIÓN DE ALMACÉN E INVENTARIO</h1></li>
            <li><img src="/uploads/curs_7.png" alt="Gestión" id="banner3" /></li>
          </ul>

          <ul className='curso2'>
            <li><h1 id="tex2">PROCESO ADMINISTRATIVO GENERAL</h1></li>
            <li><img src="/uploads/curs_9.webp" alt="Administrativo" id="banner4" /></li>
          </ul>
        </section>

        <section id="grupo-2">
          <ul className='curso3'>
            <li><h1 id="tex3">PROCESO DISCIPLINARIO PASS</h1></li>
            <li><img src="/uploads/curs_10.webp" alt="Disciplinario" id="banner5" /></li>
          </ul>

          <ul className='curso4'>
            <li>
              <h1 id="tex4">SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA SIAF – RP </h1>
            </li>
            <li><img src="/uploads/curs_11.webp" alt="SIAF" id="banner6" /></li>
          </ul>
        </section>

      </div>
    </div>
  );
}




export default Principal;
