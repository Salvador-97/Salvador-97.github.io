import { estado, lenguajes, proyecto1, proyecto2, lenguajesProyecto1, lenguajesProyecto2} from "../utils/tarjetaEstados";

export function Tarjeta({informacion, lenguajesProyecto}) {

    return (
        <>
        <a href="#" className='rounded-[1.5rem] mx-auto w-[30%] pb-[1rem] bg-[#1A1A1D] shadow-[0_0_25px_5px_#8A5CF650]'>
            <div className='text-center rounded-t-[1.5rem] mb-[1rem] bg-[#8A5CF6]'>
                <i className="fa-solid fa-folder fa-6x py-[0.8rem] text-[#FF851B]"></i>
            </div>
            <div className='w-5/6 mx-auto'>
                <ul className='text-center text-[#E0E6F0]'>
                    <li className="font-[700] pb-[1rem]">{informacion.nombre}</li>
                    <li className="text-balanc pb-[1rem]">{informacion.descripcion}</li>
                    <div>
                        <h5 className="font-[700]">Tecnologias</h5>
                    </div>
                    <div className="pb-[1rem]">
                        <li>
                            {lenguajesProyecto.map((lenguaje, index) => (
                                <i key={index} className={`${lenguajes[lenguaje]} pr-[0.5rem]`}></i>
                            ))}   
                        </li>
                    </div>
                    <li className="pb-[1rem]">
                        <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                        {estado(informacion.desarrollo, 'Completo', 'En desarrollo')} 
                        <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                    </li>
                    <li><i className='fa-solid fa-circle mr-[0.5rem]' 
                    style={{ color: estado(informacion.estado, '#63E6BE', '#E84646')}}></i> 
                    {estado(informacion.estado, 'Online', 'Offline')} </li>
                </ul>
            </div>
        </a> 
        </>  
    );
}

export default function Proyectos () {
    return (
        <div className='flex'>
                <Tarjeta informacion={proyecto1} lenguajesProyecto={lenguajesProyecto1}/>
                <Tarjeta informacion={proyecto2} lenguajesProyecto={lenguajesProyecto2}/>
        </div> 
    );
}