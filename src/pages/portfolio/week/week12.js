// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana12.jpeg";
import fybImage1 from "../../../imagenes/semana12-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            CONSUMO DE API DE POKÉMON CON REACT: UTILIZANDO JSON Y USEEFFECT
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
            Explorar el consumo de la API de Pokémon en React ha sido
            esclarecedor para mi desarrollo como desarrollador web. A través del
            uso de JSON para estructurar y gestionar los datos de la API, he
            profundizado en mis habilidades para integrar información externa de
            manera efectiva en mis aplicaciones. La implementación de useEffect
            ha demostrado ser crucial para la gestión eficiente de las
            solicitudes a la API, permitiendo una actualización dinámica de la
            información en tiempo real. Este enfoque ha mejorado mi comprensión
            de cómo mantener una experiencia de usuario fluida y actualizada, lo
            que considero esencial en el desarrollo de aplicaciones web
            modernas.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Este proyecto me ha enseñado a apreciar la flexibilidad y la
            potencia de React al interactuar con APIs externas. El uso de
            useEffect como parte integral de la arquitectura de mi aplicación ha
            mejorado la eficiencia del código y la capacidad de respuesta,
            subrayando la importancia de las herramientas React para la creación
            de experiencias de usuario dinámicas. En resumen, esta experiencia
            no solo ha ampliado mi conocimiento técnico en el consumo de APIs,
            sino que también ha destacado la versatilidad de React en el
            desarrollo de aplicaciones web interactivas y actualizadas
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
            Este proyecto de consumo de la API de Pokémon en React ha sido una
            inmersión valiosa que ha enriquecido significativamente mi conjunto
            de habilidades. Al enfrentarme a la integración de datos JSON y la
            aplicación de useEffect para la gestión eficiente de solicitudes a
            la API, he consolidado mi comprensión sobre cómo manejar información
            externa de manera efectiva en mis aplicaciones
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
