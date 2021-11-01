import React from "react";
import { Typography, Card } from "antd";
import { Container, Header } from "semantic-ui-react";
import "./TourCartagena.scss";

function OfertaCursos() {
  return (
    <Container fluid className="container">
      <Header as="h2">Oferta de cursos</Header>
      <Typography.Title level={2}>Aqui algunos de los cursos</Typography.Title>
      <div className="coursesContainer">
        <Card hoverable
          className="card"
          style={{ width: 300 }}
          cover={<img
              alt="example"
              src="https://www.utb.edu.co/wp-content/uploads/2021/05/pexels-julia-m-cameron-4144145.jpg"/>
          } 
        >
          <Card.Meta title="Curso de preparación para la prueba de inglés de las Pruebas Saber 11" description={`
            Modalidad : Virtual\n
            Duracion : 32Horas`}
          />
        </Card>
        <Card hoverable
        className="card"
          style={{ width: 300 }}
          cover={<img
              alt="example"
              src="https://www.utb.edu.co/wp-content/uploads/2021/05/pexels-monstera-6237927.jpg"/>
          } 
        >
          <Card.Meta title="Living English Academic Program (LEAP)" description={`
            Modalidad : Virtual
            Duracion : 575 Horas`}
          />
        </Card>

        <Card hoverable
        className="card"
          style={{ width: 300 }}
          cover={<img
              alt="example"
              src="https://www.utb.edu.co/wp-content/uploads/2021/05/pexels-artem-podrez-4492126.jpg"/>
          } 
        >
          <Card.Meta title="Curso preparatorio para prueba TOEFL" description={`
            Modalidad : Virtual
            Duracion : 32 Horas`}
          />
        </Card>

        <Card hoverable
        className="card"
          style={{ width: 300 }}
          cover={<img
              alt="example"
              src="https://www.utb.edu.co/wp-content/uploads/2021/05/pexels-andrea-piacquadio-3776201.jpg"/>
          } 
        >
          <Card.Meta title="Curso preparatorio para prueba IELTS" description={`
            Modalidad : Virtual
            Duracion : 32 Horas`}
          />
        </Card>

        <Card hoverable
        className="card"
          style={{ width: 300 }}
          cover={<img
              alt="example"
              src="https://www.utb.edu.co/wp-content/uploads/2021/05/pexels-julia-m-cameron-4143800.jpg"/>
          }  
        >
          <Card.Meta title="Bilingual Kids – BIKI" description={`
            Modalidad : Virtual
            Duracion : 30 Horas - 4 Semanas`}
          />
        </Card>
      </div>
    </Container>
  );
}

export default OfertaCursos;
