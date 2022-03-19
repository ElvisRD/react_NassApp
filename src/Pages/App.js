import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

//* import imagenes
import portada from '../img/portada.jpg'
import marte from '../img/marte.jpg'
import tierra from '../img/tierra.jpg'
import asteroide from '../img/asteroide.jpg'

//* import paginas
import Home from './Home'
import Tierra from '../Pages/Tierra'
import NavBar from '../Components/BarNav'
import Asteroides from '../Pages/Asteroides'
import Marte from '../Pages/Marte'


function App() {

  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home portada={portada}/>} />
          <Route path="/tierra" element={<Tierra tierra={tierra}/>} />
          <Route path="/marte" element={<Marte marte={marte}/>} />
          <Route path="/asteroides" element={<Asteroides asteroide={asteroide}/>} />

        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
