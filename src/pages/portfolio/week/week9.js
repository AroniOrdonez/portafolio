// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana9.png";
import fybImage1 from "../../../imagenes/semana9-1.png";
import { Link } from "react-router-dom";

export default function Week9() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            NEXT.JS Y TYPESCRIPT,CSR/SSR, CREACIÓN DE PROYECTO Y ESTILOS
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
            Durante mi inmersión en Next.js, adquirí conocimientos sólidos en la
            implementación de Client-Side Rendering (CSR) y Server-Side
            Rendering (SSR). Aprendí a crear proyectos de manera eficiente,
            gestionar el enrutamiento de la aplicación de forma efectiva y
            aplicar estilos de manera elegante. Además, exploré la integración
            de formularios en Next.js, brindando una comprensión integral del
            flujo de datos en aplicaciones web dinámicas.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            La transición de JavaScript a TypeScript fue una experiencia
            enriquecedora, permitiéndome mejorar la calidad y la mantenibilidad
            de mi código. Descubrí cómo TypeScript proporciona un sistema de
            tipos sólido, facilitando la detección temprana de errores y
            mejorando la documentación del código. Esta transición no solo
            mejoró mi capacidad para comprender y colaborar en proyectos más
            grandes, sino que también impulsó la eficiencia en el desarrollo al
            brindar una mayor claridad y seguridad en la escritura del código.
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
            Explorar Next.js me brindó una sólida comprensión de CSR y SSR,
            mejorando mi capacidad para desarrollar aplicaciones dinámicas y
            eficientes. La transición a TypeScript ha fortalecido mi código al
            ofrecer una capa adicional de seguridad y claridad, destacando la
            importancia de la adaptabilidad en el mundo del desarrollo web.
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
