import '../stylescss/diplomas.css';

function Diplomas() {

return (

<section className="Curso-Diplomas">

{/* HERO */}
<div className="logo_inicio">

<img 
src="/uploads/banner3.jpg" 
alt="Diplomas de especialización en gestión pública" 
className="logo-img-titulos"
/>

<h1 className="typewriter-animation">
Diplomas de Especialización
</h1>

</div>


{/* TEXTO + IMAGEN */}
<div className="contenedor-txt-img">

<img 
src="/uploads/port.jpg" 
alt="Programa de especialización en gestión pública"
/>

<div className="diploma-text">

<p>
La EMPRESA ESCUELA DE GERENCIA Y GESTIÓN desarrolla programas de capacitación y especialización orientados a ejecutivos, profesionales y funcionarios que desean fortalecer y actualizar sus competencias en áreas administrativas, empresariales y tecnologías de la información.
</p>

<p>
Nuestros programas están diseñados para potenciar el pensamiento estratégico, la capacidad analítica y la resolución efectiva de problemas organizacionales, considerando los contextos nacional e internacional.
</p>

<p>
Un Diploma de Especialización constituye una propuesta académica de formación continua dirigida a profesionales con experiencia laboral o estudios superiores previos, que buscan profundizar conocimientos y perfeccionar habilidades en un campo específico.
</p>

<p>
La certificación se otorga a quienes culminen satisfactoriamente el plan de estudios, acreditando competencias técnicas avanzadas y especializadas.
</p>

</div>

</div>


{/* CARACTERISTICAS */}
<div className="caracteristica-generales">

<ul>

<li>Duración: Entre 90 y 250 horas académicas, según el programa.</li>

<li>
Certificación: Se entrega al cumplir los requisitos académicos, asistencia mínima y evaluaciones establecidas.
</li>

<li>
Enfoque práctico: Aplicación inmediata en el entorno laboral mediante casos reales y proyectos aplicados.
</li>

</ul>

<ul>

<h2>Enfoque Pedagógico</h2>

<li>
La propuesta formativa se basa en principios de andragogía.
</li>

<li>
La experiencia profesional previa como eje del aprendizaje.
</li>

<li>
Aprendizaje significativo sustentado en la práctica.
</li>

<li>
Transferencia inmediata del conocimiento al ámbito profesional.
</li>

</ul>

</div>

<div className="contendor-diplomado-curs">

<div className="group">
{[
{
titulo:"Gestión Pública",
img:"/uploads/curs_1.png",
desc:"Fortalece liderazgo y planificación para una gestión pública eficiente."
},

{
titulo:"Administración Financiera Gubernamental",
img:"/uploads/curs_3.png",
desc:"Gestión presupuestaria y control financiero público."
},

{
titulo:"Gestión Financiera y Tesorería",
img:"/uploads/curs_4.png",
desc:"Manejo eficiente de recursos financieros en el sector público."
},

{
titulo:"Planificación y Presupuesto Público",
img:"/uploads/curs_5.png",
desc:"Gestión estratégica de recursos por resultados."
},

{
titulo:"Tributación",
img:"/uploads/curs_6.png",
desc:"Normativa fiscal y administración tributaria."
},

{
titulo:"Derecho Penal en la Función Pública",
img:"/uploads/curs_7.png",
desc:"Prevención de delitos en la administración pública."
},

{
titulo:"Derecho Administrativo",
img:"/uploads/curs_8.png",
desc:"Aplicación de normativas en instituciones públicas."
}

].map((curso,index)=>(

<div className="diplomado-curso" key={index}>

<img 
src={curso.img} 
alt={curso.titulo}
className="curs-diploma-img"
/>

<div className="card-text">

<h3>{curso.titulo}</h3>

<p>{curso.desc}</p>

</div>

</div>

))}

</div>

</div>

</section>

);

}

export default Diplomas;