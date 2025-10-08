import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import AcercaMi from './AcercaMi.jsx';

export function Seccion({Titulo, color}) {
    return (
        <div>
            <h3 className={`w-1/4 text-center text-[2rem] mx-auto my-[1.5rem] 
            font-[700]`}
            style={{color: color}}>
                {Titulo}
            </h3>
        </div>
    );
}

export default function Secciones() {
    return(
        <>
            <div className='w-4/5 mx-auto'>
                <Seccion Titulo="Proyectos" color='#8A5CF6'/>
                <Proyectos />
            </div>
            <div className='w-[85%] mx-auto'>
                <Seccion Titulo="Habilidades" color='#4F6CF4'/>
                <Habilidades />
            </div>
            <div className='w-3/4 mx-auto pb-[1rem]'>
                <Seccion Titulo="Acerca de mi" color='#3FC460'/>
                <AcercaMi />
            </div>
        </>
    )
}