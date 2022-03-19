import React from 'react'
import 'tw-elements';
export default function Carrusel({imgInicio, imagenes}){

  
    

    return(
        <div id="carouselExampleIndicators" className="carousel slide relative w-full" data-bs-ride="carousel">
                 <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>

                   { imagenes.map((img,i) => (
                       
                       <button
                       key={i}
                       type="button"
                       data-bs-target="#carouselExampleIndicators"
                       data-bs-slide-to={i+1}
                       ></button>

                   ))}
                    
                </div>
                
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                                <img
                                                src={imgInicio}
                                                className="block w-full"
                                                alt="earth"
                                               
                                 />
                    </div>

                
                    {                        
                        imagenes.map((img,i) => (

                                <div  key={i} className="carousel-item float-left w-full">
                                    <img
                                                key={i}
                                                src={img}
                                                className="block min-w-full"
                                                alt="earth"       
                                    />
                                </div>
                        ))
                    }

                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 eliminarOutline"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 eliminarOutline"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}