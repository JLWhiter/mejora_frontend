import '../curso-gest-publica.css'

function Cgestadobeotros(){
    
    return(
        <div className="contenedor">
            <div className="presentacion"> 
               <h1> Presentación </h1>
               <p>Curso práctico de diseño gráfico digital para comunicación visual y publicaciones profesionales.</p>
                <ul>
                    <h1> Objetivos </h1>
                    <ul>
                        <li> Diseñar piezas gráficas y editoriales. </li>
                        <li> Manejar herramientas Adobe. </li>
                    </ul>
                </ul>
            </div>
            <div className="metedologia">
                <img src='/uploads/gestion-pu.jpg' alt='logo-de-metedologia' className='logo-metodologia'/>
                <ul> 
                    <li>
                        <h1> Metodología </h1>
                        <p> Talleres prácticos, proyectos creativos y aprendizaje visual.</p> 
                    </li>
                    <li>
                        <h1>Material Académico</h1>
                        <p>PPT, PDF, archivos de práctica y recursos gráficos.</p>
                    </li>
                    <li>
                        <h1>Evaluación</h1>
                        <p>Ejercicios prácticos y proyecto final.</p>
                    </li>
                    <li>
                        <h1>Modalidad</h1>
                        <p>Presencial, virtual y mixta.</p>
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
                    <li> 1. Fundamentos de diseño</li>
                    <li> 2. Photoshop </li>
                    <li> 3. Illustrator y costos</li>
                    <li> 4. InDesign </li>
                    <li> 5. Proyecto final </li>
                </ul>
                
            </div>
        </div>
    );
}

export default Cgestadobeotros