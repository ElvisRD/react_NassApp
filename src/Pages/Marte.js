import React,{useEffect,useState} from 'react'
import axios from 'axios'
import variablesGlobales from '../global/variablesGlobales'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Carrusel from '../Components/Carrusel';
import {Calendar, utils} from 'react-modern-calendar-datepicker';
//import marte from '../img/marte.jpg'
import Select from '../Components/Select';
import '../calendar.css'



export default function Marte({marte}){

    const [selectedDay, setSelectedDay] = useState(utils().getToday())
    const [selectCam, setSelectCam] = useState("FHAZ")
    const [imagenesMarte, setImagenesMarte] = useState([])
    const [imgInicio, setImgInicio] = useState("")
    
 

    const miniumDate = {
        year: 2012,
        month: 9,
        day: 1
    }

    useEffect(() => {
        
        //* OBTENER IMAGENES DE LA TIERRA
        const getImgMarte = async () => {

            var imgMarte = []
    
            var año = selectedDay.year
            var mes = selectedDay.month
            var dia = selectedDay.day
    
            try{
                const res = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+año+"-"+mes+"-"+dia+"&camera="+selectCam+"&api_key="+variablesGlobales.Apikey)
                if(res.data.photos.length > 0){
                    for(var i=0; i<res.data.photos.length;i++){
                        if(i<45){
                            imgMarte.push(res.data.photos[i].img_src) 
                        }else{
                            break;
                        }
                        
                    }
         
                    setImgInicio(imgMarte.splice(0,1))
                    setImagenesMarte(imgMarte)
                 }else{
                    setImgInicio("")
                    setImagenesMarte([])
                 }
            } catch (err){

                console.log(err)
            }
           
        }

        getImgMarte()
        
    },[selectedDay,selectCam]);

   
    

    
    //* CAMBIAR DIAS DEL CALENDARIO
    const handleChangeCalendario = (e) => {
        setSelectedDay(e)   
    }

    //* CAMBIAR DATO SELECCIONADO
    const handleChangeSelect = (e) => {
        setSelectCam(e.target.value)

    }

    return(
        <div className='w-full'>
            <div className='flex w-full h-fit md:h-screen overflow-x-hidden bg-black items-center flex-col md:flex-row justify-around '>
                    <div className='flex justify-center w-full md:w-5/12 mt-24 md:mt-0 md:h-4/6 flex-col text-white animate__animated animate__fadeInLeft'>
                        
                        <div className='text-7xl md:text-8xl text-center md:text-left mb-0 md:mb-4 p-0 md:p-6 font-Title'>
                            <h1>Marte</h1>
                        </div>
                        
                        <div className='text-xl lg:text-3xl w-full p-8 text-center md:text-left font-Text'>
                            <p>
                                Aquí podrás visualizar imágenes adquiridas por el robot ubicado en Marte, este consta de una variedad de cámaras en distinto ángulo, lo que permite imágenes de varias perspectivas.

                            </p>
                        </div>
                    
                    </div>

                    <div className='flex w-full md:mt-0 md:w-5/12 justify-end items-center justify-center'> 
                        <div className='flex w-10/12 md:w-11/12 animate__animated animate__fadeInRight'>
                            <img src={marte} alt="Marte"/>
                        </div>
                            
                    </div>
            </div>
            <div className='flex w-full h-full bg-black flex-col'>
                <div className='flex w-full justify-center'>
                    <div className="flex w-full flex-col items-center mt-16">
                        <div className="flex w-10/12 md:w-5/12 flex-col justify-center py-2 items-center">
                            <div className='w-full text-center text-white'>
                                <h1 className='text-3xl font-Text'>Cámaras</h1>
                            </div>
                           
                            <Select handleChangeSelect={handleChangeSelect} value={selectCam}/>
                        </div>
                        <div className='flex w-full items-center mt-6 md:mt-12 justify-center' >
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
                </div>
                <div className='flex w-full mt-6 md:mt-12 justify-center'>
    
                    {
                        imagenesMarte.length !== 0 ? (
                            <div className='w-11/12 md:w-8/12 pb-8'>
                                 <Carrusel imgInicio={imgInicio} imagenes={imagenesMarte}/>
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