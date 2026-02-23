function Cgestbiblioteca(){
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
               Curso orientado a la organización, administración y optimización de bibliotecas
               y centros de información, abordando normativa, propiedad intelectual,
               digitalización, acceso abierto y gestión de colecciones físicas y digitales.
               </p>

                <ul>
                    <h1> Objetivos </h1>
                    <ul>
                        <li> Comprender normas y principios de gestión bibliotecaria. </li>
                        <li> Planificar y evaluar servicios bibliotecarios. </li>
                        <li> Aplicar estrategias de digitalización y modernización. </li>
                        <li> Promover atención al usuario y servicios innovadores. </li>
                    </ul>
                </ul>
            </div>

            <div className="metedologia">
                <img src='/uploads/gestion-pu.jpg' alt='logo-de-metedologia' className='logo-metodologia'/>
                
                <ul> 
                    <li>
                        <h1> Metodología </h1>
                        <p>
                        Enfoque andragógico con clases expositivas, talleres prácticos,
                        estudios de caso, simulaciones de gestión bibliotecaria y uso
                        de herramientas digitales especializadas.
                        </p>
                    </li>
                    <li>
                        <h1>Material Académico</h1>
                        <p>PPT, PDF con normas y procedimientos, manuales de bibliotecología y recursos digitales.</p>
                    </li>
                    <li>
                        <h1>Evaluación</h1>
                        <p>Exámenes teóricos, proyectos de organización y digitalización, y prácticas vivenciales.</p>
                    </li>
                    <li>
                        <h1>Modalidad</h1>
                        <p>Presencial, virtual y mixta.</p>
                    </li>
                    <li>
                        <h1>Duración</h1>
                        <p>De 9 a 250 horas.</p>
                    </li>
                    <li>
                        <h1>Certificación</h1>
                        <p>Certificado por aprobación y asistencia mínima requerida.</p>
                    </li>
                </ul>
            </div>

            <div className="temario-principal">
                <h1> Temario Principal </h1>
                <ul>
                    <li> 1. Introducción a la Gestión de Bibliotecas </li>
                    <li> 2. Planificación y Organización </li>
                    <li> 3. Gestión de Recursos Humanos </li>
                    <li> 4. Gestión de Colecciones </li>
                    <li> 5. Servicios al Usuario </li>
                    <li> 6. Gestión Financiera y Presupuestal </li>
                    <li> 7. Tecnologías y Automatización </li>
                    <li> 8. Evaluación y Mejora de Servicios </li>
                    <li> 9. Tendencias en Bibliotecas Modernas </li>
                </ul>
            </div>
        </div>
    );
}

export default Cgestbiblioteca;