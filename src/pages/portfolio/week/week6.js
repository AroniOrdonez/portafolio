// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana6.png";
import fybImage1 from "../../../imagenes/semana6-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            EXPLORANDO EVENTOS, CONDICIONALES Y BUCLES CON FRAMEWORKS JAVASCRIPT
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
            Destacándose como una herramienta altamente rápida y flexible para
            la construcción de aplicaciones web, Vite ha ganado popularidad en
            el ecosistema de React gracias a su eficiencia durante el
            desarrollo. Su integración perfecta con React proporciona a los
            desarrolladores un entorno instantáneo con recargas en caliente.
            Esto significa que los cambios en el código se reflejan de inmediato
            en el navegador, mejorando la eficiencia y la velocidad del flujo de
            trabajo.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Su destacado rendimiento, Vite se configura automáticamente para
            aprovechar las últimas características de ECMAScript, como los
            módulos ES, y presenta una estructura de proyectos clara y sencilla.
            Esta combinación ofrece a los desarrolladores un entorno de
            desarrollo rápido y eficiente, convirtiendo a Vite en una opción
            atractiva para proyectos de React. En resumen, al integrarse sin
            problemas con React, Vite se presenta como una herramienta de
            construcción extremadamente eficiente, brindando un entorno ágil y
            productivo para el desarrollo de aplicaciones web.
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
            La prominencia de Vite en el desarrollo web, especialmente en
            conjunción con React, evidencia su agilidad y eficiencia. Su
            integración sin fisuras, recargas en caliente y adaptación a las
            últimas características de ECMAScript lo posicionan como una
            herramienta rápida y atractiva para proyectos de React, subrayando
            la importancia de la innovación continua en el ámbito del desarrollo
            de aplicaciones web
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
