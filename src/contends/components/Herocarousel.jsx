import { useState, useEffect, useCallback } from "react";
import "../stylescss/carrusel.css";

const slides = [
    {
    id: 1,
    tag: "Nuestra Trayectoria",
    title: "Educación ejecutiva  desde el 2003",
    body: "La Escuela de Gerencia y Gestión impulsa, desde el año 2003, la educación ejecutiva dirigida a profesionales y líderes que generan cambios en el ámbito público y empresarial. A través del desarrollo del liderazgo, promovemos la transformación organizacional y fomentamos la innovación para construir el futuro.",
    image: "/uploads/port.jpg",
    imageAlt: "Líderes en reunión estratégica",
    accent: "#2d6a4f",
    },

    {
    id: 2,
    tag: "Capacitación  Continua",
    title: "Impulsa tu desarrollo profesional",
    body: "Promovemos la capacitacion  profesional a través de cursos, capacitación y consultoría, orientadas a fortalecer la gestión en el sector público y empresarial en áreas como dirección, talento humano, finanzas, marketing, operaciones, gestión legal, tecnologías de la información y mejora continua.",
    image: "/uploads/gestion-pu.jpg",
    imageAlt: "Capacitación profesional",
    accent: "#1b4965",
    },

    {
    id: 3,
    tag: "Programas Especializados",
    title: "Formación práctica de alto impacto",
    body: "Nuestros Programas Especializados en Gestión Pública y Gestión Empresarial constituyen los pilares de nuestra oferta académica, diseñados para fortalecer conocimientos, desarrollar habilidades prácticas y responder a las demandas actuales de las organizaciones. A través de estas iniciativas brindamos educación ejecutiva, capacitación y fortalecimiento actualizada y de alto impacto mediante:",
    caracteristicas: [
        "Clases en vivo",
        "Casos reales",
        "Docentes expertos",
        "Certificación oficial"
    ],
    image: "/uploads/curs_proyecto_bim.png",
    imageAlt: "Capacitación profesional",
    accent: "#1b4965",
    },

    {
    id: 4,
    tag: "Capacitación Corporativa",
    title: "Cursos a la medida para tu organización",
    body: "Diseñamos programas de capacitación personalizados para atender las necesidades específicas del sector público y del sector empresarial. Desarrollamos el Plan de Desarrollo de Personas (PDP) para instituciones del Estado y ofrecemos cursos cerrados para empresas y organizaciones, orientados a fortalecer competencias en sistemas administrativos y tecnologías de la información (TIC), optimizando así la inversión en capacitación y el desarrollo del talento humano.",
    image: "/uploads/curs_recursos_humanos.jpg",
    imageAlt: "Capacitación profesional",
    accent: "#1b4965",
    }
];

const DURATION = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setProgress(0);

    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (DURATION / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [paused, next]);
  
  const slide = slides[current];

  return (
    <div
      className="carousel-root"
      style={{ "--accent": slide.accent }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-progress" style={{ width: `${progress}%` }} />

      <div className="carousel-counter">
        <span>{current + 1}</span> / {slides.length}
      </div>

      <div
        className={`carousel-track ${
          animating ? `animating-${direction}` : ""
        }`}
      >
        <div className="carousel-slide">
          <div className="carousel-content-col">
            <div className="carousel-tag">{slide.tag}</div>
            <h2 className="carousel-title">{slide.title}</h2>
            <p className="carousel-body">{slide.body}</p>
            {slide.caracteristicas && (
            <ul className="carousel-list">
                {slide.caracteristicas.map((item, i) => (
                <li key={i}>✔ {item}</li>
                ))}
            </ul>
            )}  
            <a href="#" className="carousel-cta">
              ¿Por qué elegirnos? →
            </a>
          </div>

          <div className="carousel-image-col">
            <img src={slide.image} alt={slide.imageAlt} />
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prev}>‹</button>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === current ? "active" : ""}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
            />
          ))}
        </div>

        <button onClick={next}>›</button>
      </div>
    </div>
  );
}