// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana7.png";
import fybImage1 from "../../../imagenes/semana7-1.jpg";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">EXPLORANDO LOS HOOKS EN REACT</h1>
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
            En mi travesía de aprendizaje sobre los Hooks en React, he
            profundizado en herramientas fundamentales que han transformado mi
            enfoque en el desarrollo de aplicaciones. Desde la utilidad básica
            de useState y useEffect para gestionar estados y efectos secundarios
            hasta la eficacia de useContext en la comunicación entre
            componentes, estos Hooks han proporcionado soluciones elegantes y
            eficientes para desafíos comunes. Al sumergirme en conceptos más
            avanzados como useReducer, useCallback y useMemo, he perfeccionado
            mi capacidad para manejar estados complejos y optimizar el
            rendimiento de mis aplicaciones.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            La capacidad de crear Hooks personalizados ha sido una revelación.
            Este aspecto me ha permitido encapsular lógica reutilizable,
            mejorando significativamente la modularidad de mi código y
            proporcionándome una herramienta poderosa para el desarrollo más
            efectivo. En conjunto, este viaje de aprendizaje no solo ha
            enriquecido mi comprensión de React, sino que también ha potenciado
            mi habilidad para construir aplicaciones web más eficientes y
            mantenibles.
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
            Explorar los Hooks en React ha sido una revelación para mí. Desde
            comprender conceptos fundamentales como useState y useEffect hasta
            la creación de Hooks personalizados, este viaje ha transformado
            radicalmente mi enfoque de desarrollo
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
