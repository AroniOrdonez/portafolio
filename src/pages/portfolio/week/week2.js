// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana2.jpg";
import fybImage1 from "../../../imagenes/semana2-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            HTML Y XML COMO LENGUAJES MARCADOS PARA LA WEB
          </h1>
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
            Al emplear de manera crucial el lenguaje de marcado de hipertexto y
            las hojas de estilo. El primero me ha permitido organizar el
            contenido de forma clara y significativa, mientras que las hojas de
            estilo han sido esenciales para conferir vida y atractivo visual a
            las páginas web en las que he trabajado.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">
            El fascinante proceso del ciclo de vida de una página web. Este
            proceso representa la meticulosa secuencia que sigue el navegador
            para convertir el código HTML, CSS y JavaScript en una experiencia
            visual en nuestra pantalla. El motor de renderizado del navegador
            ejecuta hábilmente este complejo conjunto de pasos.
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
            Como desarrollador web ha sido enriquecedora al centrarse en la
            importancia vital del lenguaje de marcado y las hojas de estilo,
            estos elementos han permitido una organización clara del contenido y
            han sido esenciales para infundir vida visual a las páginas web
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
