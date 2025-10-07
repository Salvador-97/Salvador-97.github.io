export function Tarjeta({ nombre, descripcion }) {
    return (
        <>
        <a href="#" className='rounded-[1.5rem] mx-auto w-[30%] pb-[1rem] bg-[#1A1A1D] shadow-[0_0_25px_5px_#8A5CF650]'>
                    <div className='text-center rounded-t-[1.5rem] mb-[1rem] bg-[#a584f1]'>
                        <i className="fa-solid fa-folder fa-6x py-[0.8rem] text-[#FF851B]"></i>
                    </div>
                    <div className='w-5/6 mx-auto'>
                        <ul className='text-center text-[#E0E6F0]'>
                            <li className="font-[700] pb-[1rem]">Sistema de control y registro de contenedores</li>
                            <li className="text-balanc pb-[1rem]">Aplicación web para gestionar contenedores y productos en un almacén, con seguimiento de tarimas y ubicación.</li>
                            <div>
                                <h5 className="font-[700] ">Tecnologias</h5>
                            </div>
                            <div className="pb-[1rem]">
                                <li> 
                                    <i class="fa-brands fa-html5 pr-[0.5rem]"></i>
                                    <i class="fa-brands fa-css3 pr-[0.5rem]"></i>
                                    <i class="fa-brands fa-bootstrap pr-[0.5rem]"></i>
                                    <i class="fab fa-js pr-[0.5rem]"></i>
                                    <i class="fa-brands fa-python"></i>
                                </li>
                            </div>
                            <li className="pb-[1rem]">
                                En desarrollo 
                                <i class="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                            </li>
                            <li>No disponible</li>
                        </ul>
                    </div>
                </a> 
        </>  
    );
}

export default function Tarjetas ({ }) {
    return(
        <>
        <Tarjeta />
        <Tarjeta />
        </>
        
    );
}
