export default function Select({handleChangeSelect,value}){
    return(
        <div className='flex w-64 justify-center mt-6 items-center'>
            <select className="form-select appearance-none bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300
            block w-full px-5 py-1.5 text-base font-normal text-gray-700 rounded transition ease-in-out  ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
            name='select' onChange={handleChangeSelect} value={value}
            >
                <option value="FHAZ">Cámara frontal</option>
                <option value="RHAZ">Cámara trasera</option>
                <option value="MAST">Cámara mástil</option>
                <option value="CHEMCAM">Cámara química</option>
                <option value="MAHLI">Imagenes de lente de mano</option>
                <option value="MARDI">Imágenes de descenso</option>
                <option value="NAVCAM">Cámara de navegación</option>
                <option value="PANCAM">Cámara panorámica</option>
                <option value="MINITES">Espectrómetro de emisión térmica</option>

            </select>
        </div>
    )
}