// Week1.js
import React from "react";
import "./stiloweek.css"; // Importa el archivo CSS
import { Container, Row, Col, Image, Button } from "react-bootstrap"; // Importa componentes de Bootstrap
import fybImage from "../../../imagenes/semana11.jpg";
import fybImage1 from "../../../imagenes/semana11-1.png";
import { Link } from "react-router-dom";

export default function Week2() {
  return (
    <Container>
      <Row className="mt-8">
        <Col>
          <h1 className="text-center">
            FORMULARIO CON NEXT.JS: SERVER SIDE PROPS, NEXT AUTH, INSTALACIÓN Y
            CONFIGURACIÓN
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
            En este proceso de exploración profunda de Next.js, he adquirido un
            conocimiento exhaustivo sobre el manejo de Server Side Props y
            getServerSideProps, descubriendo cómo optimizar el rendimiento al
            cargar datos en el servidor. Además, la implementación de Next Auth
            ha ampliado mi comprensión en la instalación y configuración de
            autenticación en proyectos web, abarcando temas desde la obtención
            de información de sesión hasta la gestión de credenciales. He
            profundizado en la integración de proveedores y callbacks, así como
            en la creación de usuarios basados en OAuth, incluyendo detalles
            sobre el diseño de logins personalizados y el uso estratégico de
            middlewares para mejorar la seguridad y la experiencia del usuario.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="text-center">
            Este proceso formativo también ha abordado aspectos fundamentales
            como la verificación de credenciales y la implementación de
            middlewares para fortalecer la robustez de la aplicación. En
            resumen, esta inmersión en Next.js me ha proporcionado una
            perspectiva integral sobre la construcción de formularios web,
            abordando desde la instalación hasta aspectos avanzados de
            autenticación y seguridad.
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
            Explorar a fondo Next.js, especialmente Server Side Props y Next
            Auth, ha ampliado mi capacidad para optimizar el rendimiento y
            gestionar la autenticación de usuarios de manera avanzada. Desde la
            instalación hasta la implementación de OAuth y estrategias de
            seguridad con middlewares
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
