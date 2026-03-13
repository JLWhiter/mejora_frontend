function DipespGestionEmpresarial() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Gestión Empresarial y Dirección Estratégica 
                    brinda formación en planificación estratégica, liderazgo y toma de decisiones.
               </p>
               <p>
                    Incluye análisis estratégico, gestión financiera, liderazgo, innovación 
                    e indicadores de desempeño.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Planificar y dirigir organizaciones aplicando herramientas modernas 
                        que optimicen recursos y aseguren competitividad.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/curs_gestion_municipal.jpg' 
                    alt='gestion-empresarial' 
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
                    <li>1. Análisis Estratégico</li>
                    <li>2. Planificación Organizacional</li>
                    <li>3. Liderazgo y Gestión de Equipos</li>
                    <li>4. Gestión Financiera</li>
                    <li>5. Innovación Empresarial</li>
                    <li>6. Indicadores de Desempeño</li>
                </ul>
            </div>
        </div>
    );
}

export default DipespGestionEmpresarial;