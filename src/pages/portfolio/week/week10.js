// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana10.jpeg";
import fybImage1 from "../../../imagenes/semana10-1.png";
import { Link } from "react-router-dom";

export default function Week10() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            API EN NEXT.JS,CSR/SSR, ESTILOS, FORMULARIOS Y TYPESCRIPT
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
            He adquirido un sólido conocimiento acerca del consumo de API en
            Next.js, abarcando aspectos esenciales como CSR/SSR, estilos,
            formularios y TypeScript. La implementación de conceptos avanzados
            como Static Generation y Incremental Static Regeneration (ISR) ha
            ampliado significativamente mis habilidades en el desarrollo web.
            Este aprendizaje no solo se limita a la teoría, sino que se extiende
            a la práctica, comprendiendo la creación de proyectos, el
            enrutamiento eficiente y la optimización del rendimiento mediante
            estrategias de generación estática.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Mi experiencia con Next.js no solo ha fortalecido mis competencias
            en el manejo de datos dinámicos a través de API, sino que también ha
            ampliado mi comprensión de la arquitectura del lado del cliente y
            del servidor. La combinación de CSR y SSR, junto con la potencia de
            TypeScript para un desarrollo más robusto, me ha proporcionado una
            perspectiva integral para construir aplicaciones web modernas y
            eficientes. Este conocimiento no solo es valioso para la creación de
            proyectos desde cero, sino que también se ha traducido en una mayor
            capacidad para optimizar el rendimiento a través de técnicas
            avanzadas de generación estática.
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
            Este inmersivo viaje en el consumo de API con Next.js no solo ha
            enriquecido mis habilidades técnicas, sino que también ha resaltado
            la esencia de la eficiencia y la adaptabilidad en el desarrollo web.
            La combinación de CSR/SSR, estilos, formularios y TypeScript, junto
            con estrategias avanzadas como Static Generation e Incremental
            Static Regeneration, destaca la importancia de mantenerse ágil
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
