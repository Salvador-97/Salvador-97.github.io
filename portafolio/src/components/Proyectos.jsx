import { estado, lenguajes, proyecto1, proyecto2, lenguajesProyecto1, 
        lenguajesProyecto2, proyecto3, lenguajesProyecto3, iconos} 
from "../utils/tarjetaEstados";

export function Tarjeta({informacion, lenguajesProyecto, icono}) {

    return (
        <>
        <a href="#" className='rounded-[1.5rem] mx-auto w-[30%] pb-[1rem] bg-[#1A1A1D] shadow-[0_0_25px_5px_#8A5CF650] transform transition-transform hover:scale-110 duration-900 ease-out group overflow-hidden relative h-[22rem] hover:shadow-[0_0_25px_8px_#8A5CF680]'>
            <div className='text-center rounded-t-[1.5rem] mb-[1rem] bg-[#8A5CF6]'>
                <i className={`${icono} fa-6x py-[0.8rem] text-[#FF851B]`}></i>
            </div>
            <div>
                <div className='text-center text-[#E0E6F0] relative'>
                    <div className="transform transition-all duration-700 ease-out group-hover:translate-y-[5rem] group-hover:opacity-0 absolute inset-0 z-10">
                        <div className="font-[700] pb-[1rem]">{informacion.nombre}</div>
                        <div>
                            <h5 className="font-[700]">Tecnologias</h5>
                        </div>
                        <div className="pb-[1rem]">
                            <ul>
                                <li>
                                    {lenguajesProyecto.map((lenguaje, index) => (
                                        <i key={index} className={`${lenguajes[lenguaje]} pr-[0.5rem]`}></i>
                                    ))}   
                                </li>   
                            </ul>
                        </div>
                        <div className="pb-[1rem]">
                            <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                            {estado(informacion.desarrollo, 'Completo', 'En desarrollo')} 
                            <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                        </div>
                        <div>
                            <i className='fa-solid fa-circle mr-[0.5rem]' 
                            style={{ color: estado(informacion.estado, '#63E6BE', '#E84646')}}>
                            </i> 
                            {estado(informacion.estado, 'Online', 'Offline')} 
                        </div>
                    </div>
                    <div className="flex justify-center items-center opacity-0 absolute inset-0 z-0 transition-opacity duration-700 ease-out group-hover:opacity-100 text-center mx-[1rem]">
                        <p className="text-center">{informacion.descripcion}</p>
                    </div>
                </div>
            </div>
        </a> 
        </>  
    );
}

export default function Proyectos () {
    return (
        <div className='flex'>
                <Tarjeta informacion={proyecto1} lenguajesProyecto={lenguajesProyecto1} icono={iconos.almacen}/>
                <Tarjeta informacion={proyecto2} lenguajesProyecto={lenguajesProyecto2} icono={iconos.tarimas}/>
                <Tarjeta informacion={proyecto3} lenguajesProyecto={lenguajesProyecto3} icono={iconos.series}/>        </div> 
    );
}