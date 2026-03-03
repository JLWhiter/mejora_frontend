function DipespGestionPublicaSalud() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Gestión Pública en Salud brinda formación 
                    en planificación, administración y evaluación de servicios sanitarios, 
                    fortaleciendo la eficiencia institucional.
               </p>
               <p>
                    Incluye planificación estratégica en salud, gestión hospitalaria, 
                    indicadores de desempeño, control de calidad y normativa del sector.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Gestionar eficientemente los servicios públicos de salud aplicando 
                        herramientas modernas que mejoren calidad, transparencia y eficacia.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/gestion-publica-salud.jpg' 
                    alt='gestion-publica-salud' 
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
                    <li>1. Planificación Estratégica en Salud</li>
                    <li>2. Gestión Hospitalaria</li>
                    <li>3. Administración de Recursos</li>
                    <li>4. Indicadores de Desempeño</li>
                    <li>5. Control de Calidad</li>
                    <li>6. Normativa del Sector Salud</li>
                </ul>
            </div>
        </div>
    );
}

export default DipespGestionPublicaSalud;