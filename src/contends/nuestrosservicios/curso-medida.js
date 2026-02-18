import './cursomedida.css'
import '../stylescss/diplomas.css';
function CursoMedida (){

    return(
        <section >
            <div className='logo_inicio'>
                <img src='/uploads/banner2.jpg' alt='logo-img' className='no-radius logo-img-titulos' />
                <h1 className='typewriter-animation'>CURSOS INHOUSE</h1>
            </div>
            <div className='contenedor-cursos-inhouse'></div>
            <div className="curso-medida-contexto">
                <p className="intro-texto">
                    En la Escuela de Gerencia y Gestión SAC desarrollamos Cursos a la Medida
                    Institucional diseñados según las necesidades específicas de cada entidad
                    pública, alineados al Plan de Desarrollo de Personas (PDP) 2026–2027 y
                    enfocados en maximizar el impacto de la inversión en capacitación.
                </p>
            </div>

            <div className="curso-medida-contexto-2">
                <section className="contenido-experiencia">
                    <h2>Nuestra Experiencia</h2>
                    <p>
                        A lo largo de nuestra trayectoria, hemos capacitado a entidades del
                        Gobierno Nacional, Regional y Local, así como a organismos
                        constitucionalmente autónomos, consolidando una sólida y reconocida
                        experiencia en el sector público.
                    </p>
                    <p>
                        Nuestra experiencia se encuentra debidamente acreditada en el SEACE y
                        es plenamente verificable en el Buscador de Proveedores del Estado del
                        OSCE, garantizando transparencia, confiabilidad y estricto cumplimiento
                        normativo.
                    </p>

                    <h2 className="cta-titulo">Solicita ahora tus programas a la medida</h2>
                    <p>
                        Diseñamos Programas Corporativos a la Medida, colocando a tu institución
                        en el centro de la solución formativa, con un enfoque por competencias
                        orientado a resultados institucionales.
                    </p>
                </section>
            </div>
            <img src='./uploads/curs_10.webp' alt='logo-base' className='logo-cursomedida'/>
        </section>
    );

}

export default CursoMedida;