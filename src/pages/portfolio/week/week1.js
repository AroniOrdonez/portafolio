// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/fyb.png";
import fybImage1 from "../../../imagenes/semana1-1.png";
import { Link } from "react-router-dom";

export default function Week1() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">FUNDAMENTOS DE LA TECNOLOGÍA WEB</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">¿Qué tema aprendí?</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="text-center">
            Sobre los fundamentos de las tecnologías web, se proporciona una
            sólida introducción que abarca tanto el desarrollo del front-end
            como el del back-end, explicando detalladamente lo que se aprenderá
            a lo largo del contenido.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">
            Las bases del desarrollo front-end, incluyendo HTML, CSS, y
            JavaScript, así como frameworks como Bootstrap, Tailwind CSS, React
            y Next.js. En el ámbito del desarrollo back-end, se explora la
            lógica que sustenta el correcto funcionamiento de las aplicaciones,
            con un enfoque en la creación de API RESTful mediante el uso del
            framework Spring Boot con Java.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Emmet, un conjunto de atajos de teclado y sintaxis abreviada,
            agiliza la escritura de código en varios lenguajes de programación,
            en conjunto con Visual Studio Code un editor de código potente y
            ampliamente utilizado, ofrece una experiencia eficiente para
            programadores y desarrolladores.
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
            Comprender el desarrollo web implica dominar HTML, CSS, JavaScript,
            React y Spring Boot con Java. Herramientas como Emmet y Visual
            Studio Code agilizan el proceso. En mi experiencia, equilibrio y
            elección inteligente de herramientas son clave para el éxito.
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
