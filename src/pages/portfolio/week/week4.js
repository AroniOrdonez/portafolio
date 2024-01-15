// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana4.png";
import fybImage1 from "../../../imagenes/semana4-1.png";
import { Link } from "react-router-dom";

export default function Week4() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            DESARROLLO WEB DINÁMICO CON JAVASCRIPT, DOM Y CANVAS
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
            Adquirí conocimientos fundamentales en JavaScript, explorando
            variables como var, let y const, así como el uso de arrays y objetos
            para estructuras de datos. También aprendí sobre la ejecución de
            JavaScript en el navegador y la manipulación del DOM, permitiéndome
            interactuar dinámicamente con elementos web. Estos fundamentos
            sólidos me capacitan para desarrollar aplicaciones web interactivas
            y dinámicas.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">
            Exploré el potencial del elemento canvas en HTML como una
            herramienta dinámica que posibilita la creación de gráficos,
            animaciones y visualizaciones interactivas directamente en un
            navegador web. Mediante el uso de JavaScript, adquirí la capacidad
            de trazar formas, líneas y curvas en un área rectangular definida
            por el canvas, brindándome la destreza necesaria para desarrollar
            experiencias visuales dinámicas en sitios web, que van desde juegos
            interactivos hasta representaciones avanzadas de datos.
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
            Explorar JavaScript me proporcionó fundamentos sólidos para
            desarrollar aplicaciones web interactivas. Al aprender sobre
            variables, estructuras de datos y manipulación del DOM, obtuve la
            capacidad de interactuar dinámicamente con elementos web
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
