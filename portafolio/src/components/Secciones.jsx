import '../index.css'
import Proyectos from './Proyectos.jsx';

export function Seccion({Titulo}) {
    return (
        <div>
            <h3 className='w-1/4 text-center text-[2rem] mx-auto my-[1.5rem] 
            text-[#fff] font-[700] text-shadow[0_0_0.5px_#2ECC4050]'>{Titulo}</h3>
        </div>
    );
}

export default function Secciones() {
    return(
        <>
            <div className='w-4/5 mx-auto'>
                <Seccion Titulo="Proyectos"/>
                <Proyectos />
            </div>
            <div className='w-3/4 mx-auto'>
                <Seccion Titulo="Habilidades"/>
            </div>
            <div className='w-3/4 mx-auto'>
                <Seccion Titulo="Acerca de mi"/>
            </div>
            <div className='w-3/4 mx-auto'>
                <Seccion Titulo="Contacto"/>
            </div>
        
        </>
    )
}