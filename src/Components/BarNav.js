import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default function Nav(){

    const [openMenu, setOpenMenu] = useState(false);

    const isMovil = useMediaQuery({
        maxWidth: "640px"
    })

    //*ABRIR NAV MOVIL
    const handleOpenMenu = () => {
      
        if(openMenu === false){
            setOpenMenu(true);

        }else{
            setOpenMenu(false);
        }
    }

    //* CERRAR NAV AL SELECCIONAR UN LINK DEL NAV
    const cerrarMenuClick = () =>{
        
        if(isMovil){
            if(openMenu === false){
                setOpenMenu(true);
    
            }else{
                setOpenMenu(false);
            }

        }

        window.scrollTo(0,0); 

    }

    return( 
        <div className="w-full fixed bg-black z-10">
                <div className="flex flex-col max-w-screen-xl py-2.5 mx-auto sm:items-center sm:justify-between sm:flex-row sm:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-end" >
                        <button className="sm:hidden hover:bg-gray-800 rounded-full p-1 mr-6 eliminarOutline" onClick={handleOpenMenu}>
                            <svg viewBox="0 0 20 20" className="w-8 h-8" >
                            {
                                openMenu === true ? (
                                    <path fill="white" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path>
                                ):(<path  fill="white" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" ></path>)
                            }
                            </svg> 
                        </button>
                    </div>
                    <nav id='nav' className={openMenu === false ? ("flex-col flex-grow sm:pb-0 hidden sm:flex sm:justify-center sm:flex-row "):("flex flex-col w-screen flex-grow ml-0 sm:pb-0 sm:justify-end sm:flex")}>
                        <Link onClick={cerrarMenuClick} to="/" className="px-4 text-white text-center py-2 text-md font-semibold bg-trasparent sm:rounded-lg sm:mt-0 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:shadow-outline font-Link">Home</Link>
                        <Link onClick={cerrarMenuClick} to="/tierra" className='px-4 text-white text-center py-2 text-md font-semibold bg-transparent sm:rounded-lg sm:mt-0 sm:ml-4 hover:text-white hover:bg-gray-800  focus:outline-none focus:shadow-outline font-Link'>Tierra</Link>
                        <Link onClick={cerrarMenuClick} to="/marte" className='px-4 text-white text-center py-2 text-md font-semibold bg-transparent sm:rounded-lg sm:mt-0 sm:ml-4 hover:text-white hover:bg-gray-800  focus:outline-none focus:shadow-outline font-Link'>Marte</Link>
                        <Link onClick={cerrarMenuClick} to="/asteroides" className='px-4 text-white text-center py-2 text-md font-semibold bg-transparent sm:rounded-lg sm:mt-0 sm:ml-4 hover:text-white hover:bg-gray-800  focus:outline-none focus:shadow-outline font-Link'>Asteroides</Link>

                    </nav>
                </div>
        </div>
    );
}
