import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Tabla from '../Components/Tabla'
import variablesGlobales from '../global/variablesGlobales'
//import asteroide from '../img/asteroide.jpg'

export default function Asteroides({asteroide}){

    const [datosAsteroides,setDatosAsteroides] = useState([])
    
    useEffect(() => {
        //* OBTENER DATOS DE LOS ASTEROIDES
        const getObtenerDatosAsteroides = async () =>{
        var fecha = new Date();
        const yyyy = fecha.getFullYear();
        let mm = fecha.getMonth() + 1; // Months start at 0!
        let dd = fecha.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        fecha = yyyy + '-' + mm + '-' + dd;

        let params = {
            start_date: ''+fecha,
            end_date: ''+fecha,
            api_key: variablesGlobales.Apikey
        }
      
       const res = await axios.get("https://api.nasa.gov/neo/rest/v1/feed?",{params})

        var asteroids = res.data.near_earth_objects
        
        setDatosAsteroides(asteroids[''+fecha]);

    }

        getObtenerDatosAsteroides()
     
    },[]);

    return(
        <div className='w-full bg-black'>
            <div className='flex w-full h-fit md:h-screen bg-black items-center flex-col md:flex-row justify-around overflow-hidden'>
                    <div className='flex justify-center w-full md:w-5/12 mt-24 md:mt-0 md:h-4/6 flex-col text-white animate__animated animate__fadeInLeft'>
                        
                        <div className='text-7xl lg:text-8xl text-center md:text-left pl-0 md:pl-6 font-Title'>
                            <h1>Asteroides</h1>
                        </div>
                        
                        <div className='text-2xl lg:text-3xl w-full mt-12 pl-0 md:pl-6 text-center md:text-left font-Text'>
                            <p>
                                En esta sección encontrarás información asociada a los asteroides más cercanos a la Tierra.
                            </p>
                        </div>
                    
                    </div>

                    <div className='flex w-full mt-0 md:mt-6 md:mt-0 md:w-5/12 justify-end items-center justify-center animate__animated animate__fadeInRight'> 
                        <img src={asteroide} alt="asteroide"/>
                    </div>
            </div>
            <div className='flex w-full justify-center items-center bg-black'>
                <div className='flex w-full justify-center items-center mt-20 md:mt-0 pb-12 md:pb-20 font-Text bg-black'>
                    {
                        datosAsteroides.length !== 0 ? (
                            <Tabla dataAos='fade-left' asteroides={datosAsteroides}/>
                        ):(<div> 
                            <h2>no se encontraron datos</h2>
                        </div>)
                    }
                    
                       
                </div>
               
               
            </div>
           
        </div>
    )
}