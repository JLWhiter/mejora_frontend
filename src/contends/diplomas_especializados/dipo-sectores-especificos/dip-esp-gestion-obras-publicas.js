function DipespGestionObrasPublicas() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Gestión de Obras Públicas brinda formación 
                    integral en planificación, programación, ejecución y control de proyectos 
                    de infraestructura pública, fortaleciendo competencias técnicas en el sector.
               </p>
               <p>
                    El programa aborda planificación de obras, presupuestación, gestión de contratos,
                    supervisión, control de calidad, gestión de riesgos, seguridad en obras y normativa vigente.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Desarrollar competencias técnicas para planificar, ejecutar y supervisar 
                        proyectos de obras públicas con eficiencia, transparencia y cumplimiento normativo.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/gestion-obras-publicas.jpg' 
                    alt='gestion-obras-publicas' 
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
                    <li>1. Planificación de Obras</li>
                    <li>2. Presupuestación</li>
                    <li>3. Gestión de Contratos</li>
                    <li>4. Supervisión y Control de Calidad</li>
                    <li>5. Gestión de Riesgos</li>
                    <li>6. Seguridad y Normativa Vigente</li>
                </ul>
            </div>
        </div>
    );
}

export default DipespGestionObrasPublicas;