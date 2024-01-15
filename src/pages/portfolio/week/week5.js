// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/Semana5.png";
import fybImage1 from "../../../imagenes/semana5-1.png";
import { Link } from "react-router-dom";

export default function Week5() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            DESARROLLO FRONTEND: SPAS, REACT, SASS Y NEXT.JS
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
            En mi aprendizaje, descubrí que las Single Page Applications (SPAs)
            son revolucionarias en el desarrollo web al eliminar la necesidad de
            cargar nuevas páginas del servidor en cada interacción del usuario.
            Estas aplicaciones utilizan JavaScript para manipular y actualizar
            el contenido en una única página HTML. Además, me familiaricé con
            React, una potente biblioteca de JavaScript, que se destaca por su
            enfoque basado en componentes, simplificando así el mantenimiento y
            la expansión del código.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Exploré SASS, un preprocesador de CSS que mejora la organización y
            eficiencia al permitir características como variables y anidamiento.
            En el ámbito de React, descubrí Next.js, un marco que lleva la
            innovación un paso más allá al simplificar la creación de
            aplicaciones web del lado del servidor y del cliente. Con
            funcionalidades como enrutamiento del lado del servidor y
            representación en el lado del servidor, Next.js facilita el
            desarrollo de aplicaciones React sólidas que ofrecen una experiencia
            de usuario excepcional
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
            En mi exploración de las Single Page Applications, React, SASS y
            Next.js, he comprendido cómo estas tecnologías están transformando
            el desarrollo web. La capacidad de crear interfaces dinámicas, el
            enfoque modular de React y la eficiencia mejorada con SASS abren
            nuevas posibilidades. Next.js simplifica aún más el proceso,
            facilitando la creación de aplicaciones robustas y eficientes.
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
