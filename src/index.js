import {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'antd/dist/antd.css'

import UEnUnaMirada from './components/LaUniversidadMirada';
import OfertaCursos from './components/OfertaCursos';

const TourCartagena = lazy(()=>import('./components/TourCartagena'))
const QuienesSomos = lazy(()=>import('./components/QuienesSomos'))

ReactDOM.render(
  <Suspense fallback={<h2>Loading...</h2>}>
    <TourCartagena />
    <QuienesSomos />
    <UEnUnaMirada />
    <OfertaCursos />
  </Suspense>,
  document.getElementById('root')
);