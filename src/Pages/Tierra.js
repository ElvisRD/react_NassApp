import React,{useEffect,useState} from 'react'
import axios from 'axios';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar,utils} from 'react-modern-calendar-datepicker';
import variablesGlobales from '../global/variablesGlobales'
import Carrusel from '../Components/Carrusel';
//import tierra from '../img/tierra.jpg'
import '../calendar.css'


export default function Tierra({tierra}){

    const [selectedDay, setSelectedDay] = useState(utils().getToday());
    const [linksImgTierra, setLinksImgTierra] = useState([])
    const [primeraImg, setPrimeraImg] = useState("")
    

    const miniumDate = {
        year: 2015,
        month: 6,
        day: 1
    }

    useEffect(() => {

        //* OBTENER IMAGENES DE LA TIERRA
        const obtenerImgTierra = async () => {
            
            var linkImg = []
    
            var año = selectedDay.year
            var mes = selectedDay.month
            var dia = selectedDay.day
    
            if(mes < 10){
                mes = "0"+mes
            }
            if(dia < 10){
                dia = "0"+dia
            }
    
            try{

                const res = await axios.get("https://api.nasa.gov/EPIC/api/natural/date/"+año+"-"+mes+"-"+dia+"?api_key="+variablesGlobales.Apikey)
    
                if(res.data.length > 0){
                    for(var i=0; i<res.data.length;i++){
                        linkImg.push("https://api.nasa.gov/EPIC/archive/natural/"+año+"/"+mes+"/"+dia+"/png/"+res.data[i].image+".png?api_key="+variablesGlobales.Apikey)
                    }
                
                    setPrimeraImg(linkImg.splice(0,1))
                    setLinksImgTierra(linkImg)
            
                }else{
                    setPrimeraImg("")
                    setLinksImgTierra([])
                }

            }catch(err){
                console.log(err)
            }
            
        }

        obtenerImgTierra()

    },[selectedDay]) 

   
    //* CAMBIAR DIA DE CALENDARIO
    const handleChangeCalendario = (e) => {
        setSelectedDay(e)  
    }

    return(
        <div className='w-full bg-black'>
            <div className='flex w-full h-fit md:h-screen overflow-x-hidden items-center'>
                <div className='flex w-full items-center flex-col md:flex-row justify-around '>
                    <div className='flex justify-center w-full md:w-5/12 mt-24 md:mt-0 flex-col text-white animate__animated animate__fadeInLeft'>
                        
                        <div className='text-7xl md:text-8xl text-center md:text-left mb-0 md:mb-4 p-0 md:p-6 font-Title'>
                            <h1>Tierra</h1>
                        </div>
                        
                        <div className='text-xl lg:text-3xl w-full p-8 text-center md:text-left font-Text'>
                            <p>
                                En este apartado podrás visualizar imágenes tomadas por satélites que orbitan la Tierra según su día de captura.
                            </p>
                        </div>
                    
                    </div>

                    <div className='flex w-full md:mt-0 md:w-5/12 justify-end items-center justify-center'> 
                        <div className='flex w-10/12 md:w-full animate__animated animate__fadeInRight'>
                            <img src={tierra} alt="tierra"/>
                        </div>
                            
                    </div>
                </div>
                

            </div>
            <div className='flex w-full justify-center'>
                <h1 className='text-white text-center text-4xl py-6 font_Title'>Imágenes de la Tierra</h1>
            </div>
            <div className='flex w-full bg-black flex-col md:flex-row items-center'>
                <div className='flex md:w-4/12 flex-col pb-6'>
                        <div className='flex w-full text-white justify-center p-3 text-center'>
                            <h1 className='text-2xl xl:text-3xl font-Text'>Seleccione una fecha</h1>
                        </div>
                        <div className='flex w-full justify-center mt-3 '>
                            
                                <Calendar
                                    value={selectedDay}
                                    onChange={handleChangeCalendario}
                                    name='calendario'
                                    minimumDate={miniumDate}
                                    calendarClassName="responsive-calendar eliminarOutline"
                                    maximumDate={utils().getToday()}
                                    shouldHighlightWeekends
                                    
                                />
                            
                        </div>
                </div>
                
                <div className='flex w-full md:w-8/12 justify-center items-center'>
                    {
                        linksImgTierra.length !== 0 ? (
                            <div className='w-full md:w-8/12 py-6'>
                                <Carrusel imgInicio={primeraImg} imagenes={linksImgTierra}/>
                            </div>
                        ):(<div className='flex w-full py-6 justify-center my-56'>
                                <h1 className='text-white text-2xl md:text-3xl font-Text text-center my-6 md:my-36'>No se encontraron imágenes</h1>
                          </div>  
                          )
                    }
                        
                </div>
            </div>
        </div>
    )
}