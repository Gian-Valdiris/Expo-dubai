import React from "react";
import {  Carousel } from "antd";
import { Container, Header } from "semantic-ui-react";
import "./TourCartagena.scss";
import images from '../assets/Images.json';
// const { Text, Title } = Typography;
function TourCartagena() {
  return (
    <div>
      <Container fluid className="container">
        <Header as="h2" >Tour por la ciudad de cartagena</Header>
        <div className="container-carousel">
          <Carousel autoplay className="corousel"> 
            {images.map(i=>(
                <div className="section-images">
                  {
                    i.map(j=>(<img  src={j} alt={j}  className="img pointer" />))
                  }
                </div>
              ))
            }
          </Carousel>
          ,
        </div>
      </Container>
    </div>
  );
}

export default TourCartagena ;
