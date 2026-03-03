function DipespGestionProyectos() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Gestión de Proyectos brinda formación 
                    en planificación, ejecución, seguimiento y cierre de proyectos.
               </p>
               <p>
                    Incluye gestión de cronogramas, recursos, riesgos, monitoreo de desempeño 
                    y herramientas modernas de gestión.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Planificar, ejecutar y controlar proyectos aplicando metodologías 
                        modernas que aseguren cumplimiento de objetivos y calidad.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/gestion-proyectos.jpg' 
                    alt='gestion-proyectos' 
                    className='logo-metodologia'
                />
                
                <ul> 
                    <li>
                        <h1> Informes </h1>
                        <p>Escuela de Gerencia y Gestión S.A.C</p>
                        <p>📱 913376365 / 948251685</p>
                        <p>📧 esscuelag@gmail.com | capacita@escuelag.com</p>
                    </li>
                </ul>
            </div>

            <div className="temario-principal">
                <h1> Áreas Temáticas </h1>
                <ul>
                    <li>1. Planificación de Proyectos</li>
                    <li>2. Gestión de Cronogramas</li>
                    <li>3. Gestión de Recursos</li>
                    <li>4. Control de Riesgos</li>
                    <li>5. Monitoreo de Desempeño</li>
                    <li>6. Cierre de Proyectos</li>
                </ul>
            </div>
        </div>
    );
}

export default DipespGestionProyectos;