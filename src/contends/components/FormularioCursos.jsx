import React, { useState } from "react";
import "../stylescss/FormularioCursos.css";

const FormularioCursos = () => {
  const [form, setForm] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    telefono: "",
    correo: "",
    curso: ""
  });

  const cursos = [
    "GESTIÓN PÚBLICA ESTRATÉGICA Y PLANEAMIENTO",
    "FINANZAS PÚBLICAS",
    "SISTEMA NACIONAL DE ABASTECIMIENTO",
    "INVERSIÓN PÚBLICA",
    "GESTIÓN DE OBRAS PÚBLICAS",
    "DERECHO PENAL EN LA FUNCIÓN PÚBLICA",
    "GESTIÓN PÚBLICA EN SALUD",
    "GESTIÓN DE BIBLIOTECA",
    "GESTIÓN MUNICIPAL",
    "GESTIÓN AMBIENTAL",
    "ALIMENTACIÓN Y NUTRICIÓN",
    "JARDINERÍA, PODA DE ÁRBOLES Y TRABAJO EN ALTURA",
    "GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL",
    "GESTIÓN JURÍDICA Y ADMINISTRATIVA",
    "CONTROL, AUDITORÍA Y ÉTICA PÚBLICA",
    "DERECHO LABORAL",
    "HABILIDADES BLANDAS",
    "GESTIÓN MINERA",
    "TRABAJO SOCIAL",
    "OFIMÁTICA",
    "INTELIGENCIA ARTIFICIAL Y CIENCIA DE DATOS",
    "CONTENIDO Y REDACCIÓN DIGITAL",
    "SQL SERVER",
    "ADOBE PHOTOSHOP, ILLUSTRATOR E INDESIGN",
    "MS PROJECT",
    "GESTIÓN DE PROYECTOS BIM",
    "PREVENCIÓN Y SEGURIDAD VIAL",
    "PAISAJISMO, JARDINERÍA Y PODA DE ÁRBOLES",
    "GESTIÓN DE RIESGOS DE DESASTRES",
    "GESTIÓN DE SERVICIOS Y ATENCIÓN AL CIUDADANO",
    "GESTIÓN EMPRESARIAL",
    "Diploma en Gestión Pública Moderna",
    "Diploma en Planeamiento Estratégico",
    "Diploma en Presupuesto por Resultados",
    "Diploma en Invierte.pe",
    "Diploma en Sistemas Administrativos del Estado",
    "Diploma en Contrataciones del Estado",
    "Diploma en Sistema Nacional de Abastecimiento",
    "Diploma en Auditoría Gubernamental",
    "Diploma en Derecho Administrativo",
    "Diploma en Ética e Integridad Pública",
    "Diploma en Gestión de Recursos Humanos",
    "Diploma en Liderazgo y Equipos",
    "Diploma en Transformación Digital",
    "Diploma en Gestión Documental",
    "Diploma en Ofimática Profesional",
    "Diploma en Gestión de Obras Públicas",
    "Diploma en Gestión Pública en Salud",
    "Diploma en Gestión Ambiental",
    "Diploma en Gestión de Proyectos",
    "Diploma en Gestión Empresarial",
    "CURSOS INHOUSE"
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Formulario enviado");
  };

  return (
    <div className="form-container">
      <h2>Inscripción de Curso</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="paterno" placeholder="Apellido Paterno" onChange={handleChange} required />
        <input type="text" name="materno" placeholder="Apellido Materno" onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
        <input type="number" name="dni" placeholder="DNI" onChange={handleChange} required />
        <select name="curso" onChange={handleChange} required>
          <option value="">Seleccione un curso</option>
          {cursos.map((curso, index) => (
            <option key={index} value={curso}>
              {curso}
            </option>
          ))}
        </select>

        <button className="form-enviar" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioCursos;