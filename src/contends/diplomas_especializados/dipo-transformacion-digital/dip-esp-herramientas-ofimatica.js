import '../diploma-esp.css'
function Dipespherramientasofimaticas() {
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>
                    El Diploma de Especialización en Herramientas Digitales y Ofimática Profesional 
                    brinda formación práctica y actualizada en el uso de aplicaciones 
                    digitales para mejorar la productividad laboral.
               </p>
               <p>
                    El programa desarrolla contenidos vinculados a procesamiento de texto, 
                    hojas de cálculo, presentaciones, bases de datos, herramientas colaborativas 
                    y automatización de procesos.
               </p>

                <h1> Objetivo Específico </h1>
                <ul>
                    <li>
                        Desarrollar competencias técnicas avanzadas en el uso de herramientas 
                        digitales y aplicaciones de ofimática profesional, optimizando la 
                        gestión de información y la productividad.
                    </li>
                </ul>
            </div>

            <div className="metedologia">
                <img 
                    src='/uploads/curs_ofimatica.jpg' 
                    alt='ofimatica-profesional' 
                    className='logo-metodologia'
                />
                
                <ul> 
                    <li>
                        <h1> Informes </h1>
                        <p>Escuela de Gerencia y Gestión S.A.C</p>
                        <p>📱 Teléfonos y WhatsApp: 913376365 / 948251685</p>
                        <p>📧 Correos: esscuelag@gmail.com | capacita@escuelag.com</p>
                    </li>
                </ul>
            </div>

            <div className="temario-principal">
                <h1> Áreas Temáticas </h1>
                <ul>
                    <li> 1. Procesamiento de Texto </li>
                    <li> 2. Hojas de Cálculo </li>
                    <li> 3. Presentaciones Profesionales </li>
                    <li> 4. Bases de Datos </li>
                    <li> 5. Herramientas Colaborativas </li>
                    <li> 6. Automatización de Procesos </li>
                </ul>
            </div>
        </div>
    );
}

export default Dipespherramientasofimaticas