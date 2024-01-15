// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana15.jpeg";
import fybImage1 from "../../../imagenes/semana15-1.jpeg";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            EXPLORANDO EL DESARROLLO FULL STACK CON SPRING BOOT DESDE LA
            ARQUITECTURA BACKEND HASTA LA IMPLEMENTACIÓN DE CRUD Y AUTENTICACIÓN
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">¿Qué tema aprendí?</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="text-center">
            desarrollo full stack con Spring Boot, he profundizado en la
            compleja interconexión entre el frontend y el backend. Comenzando
            con la arquitectura de aplicaciones web y servidores web, me adentré
            en el funcionamiento del server side, utilizando Java y Jakarta como
            lenguajes fundamentales. La experiencia con IntelliJ Idea y Tomcat
            ha sido clave para entender cómo estas herramientas forman la
            columna vertebral de un backend eficiente. Al desarrollar
            aplicaciones con Spring Core y Spring Boot, he explorado la
            terminología específica y las características distintivas de Spring,
            desde sus módulos hasta la implementación de Servlets y JSP.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            La integración de conceptos fundamentales de desarrollo backend ha
            llevado este viaje más allá, abordando la autenticación con login y
            la implementación de operaciones CRUD con Spring Boot. Este proceso
            ha sido revelador, ya que he aplicado estos conocimientos en la
            construcción de sistemas seguros y dinámicos. Reflexionando sobre
            esta experiencia, la síntesis entre frontend y backend, junto con
            las operaciones CRUD y la autenticación, ha sido esencial para
            comprender la complejidad y la interdependencia en el desarrollo
            full stack. Este camino no solo ha ampliado mis habilidades
            técnicas, sino que también ha resaltado la importancia de un enfoque
            holístico en el diseño y la implementación de aplicaciones web
            modernas y seguras
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Image
            src={fybImage}
            alt="Backend y Frontend"
            fluid
            style={{ width: "500px", height: "300px" }}
          />
        </Col>
        <Col className="text-center">
          <Image
            src={fybImage1}
            alt="Emmet"
            fluid
            style={{ width: "500px", height: "300px" }}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Reflexión</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="text-center">
            Este viaje en el desarrollo full stack con Spring Boot ha resaltado
            la esencial interdependencia entre frontend y backend. Desde la
            construcción de la arquitectura hasta la implementación de funciones
            avanzadas, como autenticación y operaciones CRUD, cada fase ha sido
            fundamental. La aplicación práctica de conceptos como Servlets y
            JSP, respaldada por Spring Boot, ha fortalecido mis habilidades y
            resaltado la importancia de una coordinación armoniosa para el
            desarrollo eficiente y seguro
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Link to="/portfolio">
            <Button variant="primary" className="mt-3 pb-5">
              <span className="align-middle">Volver al portafolio</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
