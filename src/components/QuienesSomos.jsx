import React from 'react';
import {Typography} from 'antd';
import {Container,Header} from 'semantic-ui-react';
import './TourCartagena.scss'
function QuienesSomos() {
  return (
    <Container fluid className='container'>
      <Header as='h2'>
        Quienes somos
      </Header>
      <div className='txts'>
        <Typography.Text type='warning' className='text-info'>
        
        En respuesta a las necesidades del sector industrial de Cartagena y de la Región Caribe, la Universidad Tecnológica de Bolívar- UTB, fue fundada el 5 de agosto de 1970, como una institución con vocación empresarial, para formar profesionales en los programas de economía e ingenierías eléctrica, mecánica e industrial. Para la fecha de su fundación, la UTB fue la primera y la única institución de educación superior privada localizada en Cartagena de Indias. Históricamente, se pueden identificar tres grandes etapas en el desarrollo de la Universidad: 1970-2003, 2004-2011, y 2012-2017.
        Todos los símbolos de la Universidad Tecnológica de Bolívar son coherentes con nuestra identidad corporativa y con nuestro lema y objetivo institucional, queremos que los conozcas y comprendas el rol que debes desempeñar como miembro activo de la institución.
        Así como la bandera, el escudo o el himno de nuestra nacionalidad nos identifica, la comunidad de la UTB comprende que estos símbolos son un referente de identidad que fortalece la relación entre la institución y las personas que hacen parte activa de la comunidad. Conoce nuestros símbolos:
        <a href='https://www.utb.edu.co/'>
            <b>
              Ver Mas informacion
            </b>
        </a>
      </Typography.Text>

      </div>
      
    </Container>
  )
}


export default QuienesSomos
