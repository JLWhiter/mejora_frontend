import '../stylescss/programa-gestion-empresarial.css'
import '../stylescss/diplomas.css';
function ProgramaGestionEmpresarial(){
    return(
        <section className='prom-gest-empresarial' >
            <div className='logo_inicio'>
                <img src='/uploads/banner4.jpg' alt='logo-img' className='no-radius logo-img-titulos' />
                <h1 className='typewriter-animation'>Programa Gestion Empresarial</h1>
            </div>
            <div className='conteiner-prom-gest-empresarial'>
                <div className='pro-gest-emp-contexto'>
                    <img src='/uploads/curs_10.webp' alt='logo-img' className='logo-gest-empresarial-1' />
                    <p>Conviértete en un líder estratégico, capaz de dirigir equipos y proyectos con eficiencia, visión analítica e innovación constante.
                        Este programa brinda las herramientas necesarias para una gestión integral de las áreas clave de la empresa, permitiéndote optimizar recursos y responder
                        eficazmente a los desafíos del entorno empresarial actual.
                    </p>
                    <ul>
                        <h1>Competencias que desarrollarás:</h1>
                        <li>Integración de la gestión estratégica, operativa y financiera.</li>
                        <li>Toma de decisiones basadas en información y análisis de datos.</li>
                        <li>Diseño e implementación de estrategias orientadas al crecimiento sostenible.</li>
                        <li>Liderazgo de procesos de cambio, innovación y transformación organizacional.</li>
                    </ul>
                </div>
                <div className='area-formacion'>
                    <h1>ÁREAS DE FORMACIÓN</h1>
                    <ul>
                        <li>
                            <h2 className="has-arrow"> 1. Gestión de negocios <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                    <img src='./uploads/curs_3.png' alt='logo-img' className='logo-gest-empresarial1'/>
                                    <li>Negociación y Persuasión Comercial</li>
                                    <li>Dirección de Equipos de Ventas</li>
                                    <li>Power BI y DAX aplicado a la toma de decisiones</li>
                                    <li>Gestión Empresarial</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">2. Marketing Digital <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                            <ul>
                                <img src='./uploads/curs_8.png' alt='logo-img' className='logo-gest-empresarial1'/>
                                <li>Marketing Ads y Analytics</li>
                                <li>Content Marketing Avanzado: SEO, Performance y Embudos de Conversión</li>
                                <li>Marketing de Contenidos</li>
                                <li>Plan de Marketing Estratégico</li>
                                <li>Community Manager</li>
                                <li>Diseño Gráfico Digital</li>
                                <li>Plan de Medios Digitales</li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">3. Operaciones y Logística <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                            <ul>
                                    <img src='./uploads/curs_7.png' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Gestión de la Cadena de Suministro</li>
                                    <li>Gestión de Operaciones y Producción</li>
                                    <li>Gestión Digitalizada de Compras y Abastecimientos</li>
                                    <li>Gestión Digitalizada de Almacenes e Inventarios</li>
                                    <li>Riesgos y Decisiones Estratégicas Empresariales</li>
                                    <li>Liderazgo de Equipos de Alto Rendimiento en Proyectos</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">4. Gestión del Talento Humano <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                    <img src='./uploads/curs_10.webp' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Gestión de Recursos Humanos</li>
                                    <li>Atracción y Selección de Talento</li>
                                    <li>Legislación Laboral y Gestión de Compensaciones</li>
                                    <li>Planillas y Derecho Laboral</li>
                                    <li>Seguridad y Salud Ocupacional</li>
                                    <li>Prevención de Riesgos Laborales</li>
                                    <li>Gestión Estratégica de Cultura y Clima Laboral</li>
                                    <li>Comunicación Estratégica Interna y Experiencia del Colaborador  </li>
                                    <li>Indicadores en la Gestión del Talento Humano</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">5. Habilidades Blandas y Liderazgo <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                <img src='./uploads/curs_3.png' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Negociación y Resolución de Conflictos</li>
                                    <li>Inteligencia Emocional y Liderazgo</li>
                                    <li>Presentaciones de Alto Impacto y Storytelling</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">6. Gestión de Proyectos <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                <img src='./uploads/port.jpg' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Gestión de Costos y Presupuestos de Proyectos</li>
                                    <li>Metodologías Ágiles para Proyectos</li>
                                </ul>
                            </div>
                        </li>
                            <li>
                                <h2 className="has-arrow">7. Contabilidad y Finanzas <span className="arrow-down">▼</span></h2>
                                <div  className='contendor-lista-empresarial'>
                                    <ul>
                                <img src='./uploads/curs_1.png' alt='logo-img' className='logo-gest-empresarial1' />
                                        <li>Planeamiento y Control Financiero</li>
                                        <li>Gestión de Tesorería</li>
                                        <li>Gestión de Riesgos</li>
                                        <li>Contabilidad Gerencial</li>
                                        <li>Normas Internacionales de Información Financiera (NIIF y NIC)</li>
                                    </ul>
                                </div>
                            </li>
                        <li>
                            <h2 className="has-arrow">8. Gestión Tributaria <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                <img src='./uploads/curs_4.png' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Tributación Empresarial</li>
                                    <li>Planeamiento Tributario</li>
                                    <li>Fiscalización y Procedimientos Tributarios</li>
                                    <li>Impuesto a la Renta Empresarial</li>
                                    <li>Infracciones, Sanciones y Gradualidad Tributaria</li>
                                    <li>Compliance Tributario y Gestión de Riesgos Fiscales</li>
                                    <li>Esquemas de Alto Riesgo Fiscal y Ventajas Tributarias Indebidas</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">9. Tecnología <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                <img src='./uploads/curs_9.png' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Diseño Web</li>
                                    <li>Ethical Hacking y Ciberseguridad</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h2 className="has-arrow">10. Excel Profesional <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>
                                <ul>
                                <img src='./uploads/curs_8.png' alt='logo-img' className='logo-gest-empresarial1' />
                                    <li>Excel Básico</li>
                                    <li>Excel Intermedio</li>
                                    <li>Excel Avanzado</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                                <h2 className="cabecera has-arrow">11. Inteligencia Artificial y Ciencia de Datos <span className="arrow-down">▼</span></h2>
                            <div  className='contendor-lista-empresarial'>                          
                                <ul>
                                <img src='./uploads/curs_3.png' alt='logo-img' className='logo-gest-empresarial1'/>
                                    <li>Ciencia de Datos con Python</li>
                                    <li>Ciencia de Datos y Machine Learning</li>
                                </ul>
                            </div>  
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProgramaGestionEmpresarial;