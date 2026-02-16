import '../stylescss/programa-gestion-publica.css'
function ProgramaGestionPublica(){
    return(
        <section className='programa-gestion-publica-contexto'>
            <div className='logo_inicio_gest_public'>
                <img src='/uploads/port.jpg' alt='logo-img' className='no-radius logo-img-titulos-gest' />
                <h1 className='public typewriter-animation'>Programa Gestion Publica</h1>
            </div>
            <img src='/uploads/curs_7.png' alt='logo-img' className='logo-gest-public-1' />
            <div className='parrafo-contexto'>
                <h1>¿Que son los cursos de Gestión Pública?</h1>
                <p>
                    Los cursos de getión pública están orientados a formar profesionales capaces de planificar, administrar y evaluar políticas,
                    programas y servicios del sector público. Se enfocan en mejorar el funcionamiento del Estado y la calidad de los servicios que recibe la
                    ciudadanía 
                </p>    
                <p>
                    Actividades de corta duración (12 a 24 horas) que tratan temas específicos y especializados, novedosos o
                    de coyuntura, están dirigidas a profesionales en general, propiciando la discusión de temas de interés
                    mutuo. A través de estos eventos, el IGC busca atender las necesidades de capacitación de grupos
                    específicos de las entidades del Sector Público y la actividad Empresarial en temas relacionados a la
                    Gestión Pública y gestión de competencias empresariales.
                </p>
            </div>
            <img src='/uploads/curs_3.png' alt='logo-img' className='logo-gest-public-2' />
            <div className='parrafo-2'>
                <h2>PROGRAMAS DE PERFECCIONAMIENTO - CURSOS REGULARES</h2>
                <p>
                    Cursos y Talleres cuyo objetivo es desarrollar competencias específicas para mejorar la eficiencia de los
                    procesos de la actividad profesional Capacitación y actualización en todas las áreas administrativas,
                    Contables, Tributarios, Financieros, Recursos Humanos, tecnológicos y habilidades blandas. <br/><br/>
                    
                    Los cursos y talleres de estos programas tienen una duración entre 24 a 250 horas académicas,
                    dependiendo si se realizan en nuestras instalaciones respectivamente.
                    Se ofrecen en la modalidad presencial y a distancia.
                </p>
            </div>
            <div className='objetivos'>
                <img src='/uploads/curs_8.png' alt='logo-img' className='logo-gest-public-3' />
                <ul>
                    <h2>Objetivos principales</h2>
                    <p>Entre los objetivos más comunes de estos cursos se encuentran:</p>
                    <li>Fortalecer capacidades para una administración pública eficiente, ética y transparente.</li>
                    <li>Desarrollar habilidades para la toma de decisiones en instituciones públicas.</li>
                    <li> Comprender el marco legal, político y administrativo del sector público.</li>
                    <li>Mejorar la gestión de recursos públicos (humanos, financieros y materiales).</li>
                    <li>Promover la rendición de cuentas y la orientación al servicio ciudadano.</li>
                </ul>
                <ul>
                    <h2>Metodología de enseñanza</h2>
                    <p>La metodología suele ser teórico–práctica, combinando:</p>
                    <li>Clases magistrales.</li>
                    <li>Análisis de casos reales del sector público.</li>
                    <li>Talleres y trabajos grupales.</li>
                    <li>Debates y simulaciones de toma de decisiones.</li>
                    <li>Proyectos aplicados a instituciones públicas.</li>
                </ul>
            </div>
        </section>
    );
}
export default ProgramaGestionPublica;