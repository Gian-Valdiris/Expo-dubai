import React from 'react';
import {Container,Header,Image} from 'semantic-ui-react';
import './TourCartagena.scss'
import table1 from '../assets/table1.png'
import table2 from '../assets/table2.png'

function UEnUnaMirada() {
  return (
    <Container fluid className='container'>
      <Header as='h2'>
        La universidad en una mirada
      </Header>
      <div className='txts'>
        <Image src={table1} />
        <Image src={table2} />
      </div>
      
    </Container>
  )
}


export default UEnUnaMirada
