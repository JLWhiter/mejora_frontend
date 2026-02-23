
function Cgestsqlserver(){
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    Curso orientado al manejo de bases de datos con SQL Server, considerando buenas prácticas, seguridad
                    de la información y tendencias en análisis de datos.</p>
                <ul>
                    <h1> Objetivos </h1>
                    <ul>
                        <li> Consultar y administrar bases de datos. </li>
                        <li> Aplicar SQL para análisis y gestión de información. </li>
                    </ul>
                </ul>
            </div>
            <div className="metedologia">
                <img src='/uploads/gestion-pu.jpg' alt='logo-de-metedologia' className='logo-metodologia'/>
                
                <ul> 
                    <li>
                        <h1> Metodología </h1>
                        <p> Andragogía, práctica guiada, ejercicios reales, laboratorios y mini-proyectos.</p>
                    </li>
                    <li>
                        <h1>Material Académico</h1>
                        <p>PPT explicativos, separatas PDF, scripts SQL y bases de datos de práctica.</p>
                    </li>
                    <li>
                        <h1>Evaluación</h1>
                        <p>Ejercicios prácticos y proyecto final.</p>
                    </li>
                    <li>
                        <h1>Modalidad</h1>
                        <p>Prácticas calificadas, exámenes cortos y proyecto práctico.</p>
                    </li>
                    <li>
                        <h1>Duración</h1>
                        <p> De 9 a 250 horas.</p>
                    </li>
                    <li>
                        <h1>Certificación</h1>
                        <p>Certificado por aprobación.</p>
                    </li>
                </ul>
            </div>
            <div className="temario-principal">
                <h1> Temario Principal </h1>
                <ul>
                    <li> 1. Bases de datos</li>
                    <li> 2. SQL básico </li>
                    <li> 3. Consultas avanzadas</li>
                    <li> 4. Seguridad y respaldo </li>
                    <li> 5. Reportes y optimización</li>
                </ul>
            </div>
        </div>
    );
}

export default Cgestsqlserver