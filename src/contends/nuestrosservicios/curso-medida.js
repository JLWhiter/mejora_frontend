import { useState } from "react";
import './cursomedida.css'
import FormularioCursos from "../components/FormularioCursos"

function CursoMedida(){

const [mostrarForm, setMostrarForm] = useState(false);

return(

<section className="contenedor-cursos-medida">

    <div className='logo_inicio'>
        <img src='/uploads/banner2.jpg' alt='logo-img' className='no-radius logo-img-titulos' />
        <h1 className='typewriter-animation'>CURSOS INHOUSE</h1>
    </div>

    <div className="contenedor">

        <div className="presentacion">
            <h1>Cursos Inhouse</h1>
            <p>
            En la Escuela de Gerencia y Gestión SAC desarrollamos programas de
            capacitación diseñados específicamente para cada institución pública,
            alineados al Plan de Desarrollo de Personas (PDP) 2026–2027.
            </p>
            <p>
            Nuestros cursos permiten fortalecer las competencias del personal
            público, optimizando la gestión institucional y garantizando un mayor
            impacto en los resultados de las entidades del Estado.
            </p>

            <ul>
                <li>✔ Programas diseñados según la necesidad institucional</li>
                <li>✔ Capacitación especializada</li>
                <li>✔ Docentes con experiencia</li>
            </ul>

            <button 
                className="btn-abrir"
                onClick={() => setMostrarForm(!mostrarForm)}
            >
                {mostrarForm ? "Cerrar formulario" : "Solicitar información"}
            </button>
        </div>

        <div className="metedologia">
            <img src="./uploads/curs_10.webp" alt="Cursos a medida" className="logo-metodologia"/>

            <ul>
                <li>
                    <h1>Nuestra Experiencia</h1>
                    <p>
                        Hemos capacitado a entidades del Gobierno Nacional, Regional y Local,
                        así como a organismos constitucionalmente autónomos.
                    </p>
                </li>
            </ul>
        </div>

        <div className="temario-principal">
            <h1>Beneficios de los Programas a la Medida</h1>
        <ul>
            <li>Diseño curricular personalizado</li>
            <li>Enfoque por competencias</li>
            <li>Capacitación virtual o presencial</li>
            <li>Docentes especialistas del sector público</li>
            <li>Material académico especializado</li>
            <li>Certificación institucional</li>
        </ul>
        </div>

    </div>

    {mostrarForm && (
        <div className="modal-form">
            <div className="modal-contenido">
                <FormularioCursos />
            </div>
        </div>
    )}

</section>

)

}

export default CursoMedida;