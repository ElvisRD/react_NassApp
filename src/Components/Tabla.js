import React from 'react'



export default function Tabla({asteroides}){

    return(
        <div className="flex w-10/12 justify-center mt-8 items-center xl:mb-0 px-0 md:px-4 text-white">
            <div className="flex w-full flex-col min-w-0 w-full mb-2 shadow-lg rounded ">
                <div className='flex w-full h-16 justify-center items-center text-center font-Title'>
                    <h1 className='text-4xl'>Asteroides cercanos a la Tierra</h1>
                </div>
                <div className="flex w-full mt-12 overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                    <tr>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-0 whitespace-nowrap font-semibold text-left">
                            Nombre
                        </th>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-0 whitespace-nowrap font-semibold text-left">
                            Magnitud H
                        </th>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-0 whitespace-nowrap font-semibold text-left">
                            Distancia de la tierra Km
                        </th>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-0 whitespace-nowrap font-semibold text-left">
                            Diametro Minimo Aprox M
                        </th>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-0 whitespace-nowrap font-semibold text-left">
                            Diametro Maximo Aprox M
                        </th>
                        <th className="px-6 text-center bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1 whitespace-nowrap font-semibold text-left">
                            Velocidad Relativa Km/S
                        </th>
                        
                    </tr>
                    </thead>

                    <tbody>

                        {
                        
                            asteroides.map(asteroide => (

                                <tr key={asteroide.id}>
                                    <td className="border-t-2 px-6 align-middle border-l-2 border-r-2 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.name}
                                    </td>
                                    <td className="border-t-2 px-6 align-middle border-l-0 border-r-0 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.absolute_magnitude_h}
                                    </td>
                                    <td className="border-t-2 px-6 align-middle border-l-0 border-r-0 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.close_approach_data[0].miss_distance.kilometers}
                                    </td>
                                    <td className="border-t-2 px-6 align-middle border-l-0 border-r-0 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.estimated_diameter.meters.estimated_diameter_min}
                                    </td>
                                    <td className="border-t-2 px-6 align-middle border-l-0 border-r-0 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.estimated_diameter.meters.estimated_diameter_max}
                                    </td>
                                    <td className="border-t-2 px-6 align-middle border-l-0 border-r-2 border-b-2 text-xs whitespace-nowrap p-4 text-center">
                                            {asteroide.close_approach_data[0].relative_velocity.kilometers_per_second}
                                    </td>
                                </tr>
                            ))
                        }
                
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );
}