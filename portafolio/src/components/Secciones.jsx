import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';

export function Seccion({Titulo}) {
    return (
        <div>
            <h3 className='w-1/4 text-center text-[2rem] mx-auto my-[1.5rem] 
            text-[#fff] font-[700]'>
                {Titulo}
            </h3>
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
            <div className='w-[85%] mx-auto'>
                <Seccion Titulo="Habilidades"/>
                <Habilidades />
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