import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Mi Portafolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contactame
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="welcome" className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Bienvenido</h3>
              <p className="section-text">
                Soy estudiante del noveno semestre de Ingeniería de Sistemas en
                la Universidad Nacional del Centro del Perú, y me defino como un
                apasionado del aprendizaje constante. Busco constantemente
                nuevas oportunidades para ampliar mis conocimientos,
                especialmente en el emocionante campo del desarrollo de software
                y las tecnologías de la información. Encuentro una verdadera
                pasión al enfrentarme a desafíos técnicos que requieren
                soluciones innovadoras.Mi entusiasmo se potencia cuando colaboro
                en equipos, ya que creo que el intercambio de ideas con mentes
                creativas conduce a soluciones realmente disruptivas. Estoy
                convencido de que la tecnología tiene el poder de dar forma a
                nuestra sociedad de maneras asombrosas, y mi objetivo es
                canalizar mis habilidades y conocimientos para catalizar este
                cambio de manera positiva y significativa.Te invito a explorar
                mi portafolio, donde podrás conocer más sobre mi trayectoria,
                proyectos y el enfoque que aplico en el desarrollo de soluciones
                innovadoras. ¡Acompáñame en esta emocionante travesía de
                crecimiento y descubrimiento en el mundo de la ingeniería de
                sistemas y la tecnología!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="table-of-contents" className="table-of-contents">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Tabla de Contenido</h3>
              <ul>
                <li>Semana 1: Fundamentos de la Tecnología Web</li>
                <li>
                  Semana 2: HTML y XML como Lenguajes Marcados para la Web
                </li>
                <li>
                  Semana 3: Profundizando en Flexbox y Grid Layout con CSS Puro
                </li>
                <li>
                  Semana 4: Desarrollo Web Dinámico con JavaScript, DOM y Canvas
                </li>
                <li>
                  Semana 5: Desarrollo Frontend: SPAs, React, Sass y Next.js
                </li>
                <li>
                  Semana 6: Explorando Eventos, Condiciones y Bucles con
                  Frameworks JavaScript
                </li>
                <li>Semana 7: Explorando los Hooks en React</li>
                <li>
                  Semana 9: Next.js y TypeScript, CSR/SSR, Creación de Proyecto
                  y Estilos
                </li>
                <li>
                  Semana 10: API en Next.js, CSR/SSR, Estilos, Formularios y
                  TypeScript
                </li>
                <li>
                  Semana 11: Formulario con Next.js: Server Side Props, Next
                  Auth, Instalación y Configuración
                </li>
                <li>
                  Semana 12: Consumo de API de Pokémon con React: Utilizando
                  JSON y useEffect
                </li>
                <li>Semana 13: Desarrollo de CRUD de Usuarios en React</li>
                <li>
                  Semana 14: Construyendo una API de Marvel con Encriptación:
                  Desafíos y Aprendizajes
                </li>
                <li>
                  Semana 15: Explorando el Desarrollo Full Stack con Spring Boot
                  desde la Arquitectura Backend hasta la Implementación de CRUD
                  y Autenticación
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="reflection" className="reflection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Reflexión</h3>
              <p className="section-text">
                A lo largo de las quince semanas del programa, he adquirido
                habilidades fundamentales en desarrollo web, desde los conceptos
                básicos hasta temas avanzados como TypeScript, React y Spring
                Boot. El aprendizaje se centró en una combinación práctica y
                progresiva, construyendo sobre conocimientos previos a través de
                lecciones, proyectos y desafíos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
