// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana13.jpg";
import fybImage1 from "../../../imagenes/semana13-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            DESARROLLO DE CRUD DE USUARIOS EN REACT
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
            En el desarrollo de un CRUD de usuarios en React, he obtenido
            conocimientos sustanciales sobre la gestión eficiente de datos en
            aplicaciones web. Al implementar la funcionalidad de agregar
            usuarios, profundicé en la manipulación de formularios y en la
            actualización dinámica del estado de la aplicación, proporcionándome
            una comprensión sólida del flujo de datos desde la interfaz de
            usuario hasta el estado interno de la aplicación
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Al explorar la eliminación de usuarios, perfeccioné mis habilidades
            en la gestión de operaciones CRUD, comprendiendo la necesidad de
            estrategias efectivas para mantener la coherencia de los datos y la
            interfaz de usuario. En resumen, este proyecto ha fortalecido mi
            competencia para desarrollar aplicaciones interactivas y eficientes
            en React, destacando la importancia de la manipulación de datos en
            tiempo real.
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
            la implementación de un CRUD de usuarios resalta la esencia de una
            gestión de datos eficaz en el desarrollo de aplicaciones web. Desde
            la creación hasta la eliminación de usuarios, he internalizado la
            importancia de un diseño cuidadoso y una implementación precisa para
            ofrecer una experiencia de usuario fluida
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
