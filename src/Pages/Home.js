import React,{useEffect,useState} from 'react'
import axios from 'axios'
import variablesGlobales from '../global/variablesGlobales'

import Aos from 'aos'

export default function Home({portada}){

    const [img,setImg] = useState("");

    useEffect(() => {
        
        const obtenerImagen = async () => {
            const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key='+variablesGlobales.Apikey)
            setImg(res.data);
        }
      
        obtenerImagen();

        Aos.init({duration: 1500})

    }, []);
    
    

    var imagen = {
        backgroundImage: 'url('+portada+')',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
        
    }
    
    return(
        <div className='w-full h-screen' style={{backgroundColor: "#111111"}}>
            <div className='flex w-full h-full justify-center items-center ' style={imagen} >
            
            <div className='flex w-8/12 justify-center text-white animate__animated animate__fadeInDown'>
                <h1 className='text-6xl text-center font-Title'>Bienvenido a NassApp</h1>
            </div>
                
            </div>
            <div className='w-full overflow-hidden' style={{backgroundColor: "#111111"}}>
                        <div className='flex w-full flex-col'>
                            <div className='flex w-full mt-16 flex-col'>
                                <div className='flex w-full py-4 items-center justify-center'>
                                    <h1 className='text-white text-center text-3xl md:text-4xl font-Title'>Imagen astronómica del día</h1>
                                </div>
                                <div  className='flex w-full py-2 justify-center items-center'>
                                    <h3 className='text-white text-2xl text-center mt-2 md:mt-0 font-Text'>{img.title}</h3>
                                </div>
                            </div>
                            <div className='flex w-full flex-col md:flex-row mt-3'>
                                <div className='flex w-full md:w-7/12 justify-center items-center'>
                                    <div data-aos="fade-right" className='flex w-11/12 md:w-10/12 my-6 items-center'>
                                        <img
                                                
                                                src={img.url}
                                                className="block w-full rounded-md"
                                                alt="earth"
                                               
                                        />
                                    </div>
                                </div>

                                <div className='flex w-full md:w-5/12 justify-center items-center'>
                                    <div data-aos="fade-left" className='w-11/12 py-3 pr-0 md:pr-3 font-Text'>
                                         <p className='text-white text-xl'>{img.explanation}</p>
                                    </div>
                                    
                                </div>

                            </div>
                            
                         </div>
                  
            </div>
            
        </div>
        
        
    );
}