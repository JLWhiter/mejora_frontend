function DipespGestionAmbiental() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Gestión Ambiental y Desarrollo Sostenible 
                    brinda formación en planificación e implementación de estrategias ambientales.
               </p>
               <p>
                    Incluye políticas ambientales, gestión de recursos naturales, evaluación 
                    de impacto ambiental, indicadores de sostenibilidad y gestión de riesgos.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Implementar políticas y estrategias ambientales que promuevan el 
                        desarrollo sostenible y la responsabilidad institucional.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/curs_gestion_ambiental.png' 
                    alt='gestion-ambiental' 
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
                    <li>1. Políticas y Normativas Ambientales</li>
                    <li>2. Gestión de Recursos Naturales</li>
                    <li>3. Evaluación de Impacto Ambiental</li>
                    <li>4. Desarrollo Sostenible</li>
                    <li>5. Indicadores de Sostenibilidad</li>
                    <li>6. Gestión de Riesgos Ambientales</li>
                </ul>
            </div>
        </div>
    );
}

export default DipespGestionAmbiental;