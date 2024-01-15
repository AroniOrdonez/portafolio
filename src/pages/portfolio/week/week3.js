// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana3.png";
import fybImage1 from "../../../imagenes/semana3-1.png";
import { Link } from "react-router-dom";

export default function Week3() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            PROFUNDIZANDO EN FLEXBOX Y GRID LAYOUT CON CSS PURO
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
            Explorando las dimensiones de unidades de medida, Flexbox y Grid
            Layout, trascendí las habilidades técnicas para sumergirme en una
            reflexión profunda sobre el diseño web. Al investigar las unidades
            de medida, adquirí una comprensión más profunda de cómo los tamaños
            y proporciones afectan la experiencia del usuario.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">
            Explorar en detalle Flexbox y Grid Layout no solo me proporcionó
            destrezas para diseñar de manera flexible y adaptable, sino que
            también cultivó en mí un sentido intuitivo para organizar y
            estructurar elementos en una página.
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
            Al adentrarme en las complejidades de Flexbox y Grid Layout, no solo
            perfeccioné mis habilidades técnicas para crear diseños flexibles,
            sino que también desarrollé un sentido intuitivo para la
            organización y estructuración de elementos en las páginas web
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
