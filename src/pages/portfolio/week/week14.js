// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana14.png";
import fybImage1 from "../../../imagenes/semana14-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            CONSTRUYENDO UNA API DE MARVEL CON ENCRIPTACIÓN: DESAFÍOS Y
            APRENDIZAJES
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
            En el proceso de desarrollar una API de Marvel, me enfrenté a
            desafíos emocionantes relacionados con la seguridad y la privacidad
            de los datos. La implementación de encriptación se volvió esencial
            para proteger la integridad de la información confidencial
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Al explorar las distintas formas de encriptación, he profundizado en
            los principios de seguridad informática y en las prácticas
            recomendadas para salvaguardar datos sensibles. Además, este
            proyecto me ha permitido comprender cómo incorporar medidas de
            seguridad, como la encriptación, en el desarrollo de APIs,
            ofreciendo una capa adicional de protección contra posibles
            amenazas.
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
            a construcción de una API de Marvel con encriptación ha sido
            reveladora en términos de seguridad y privacidad de datos. La
            implementación de medidas de seguridad, como la encriptación, no
            solo ha fortalecido la integridad de la API, sino que también ha
            ampliado mi perspectiva sobre las consideraciones críticas que deben
            abordarse al trabajar con datos sensibles
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
