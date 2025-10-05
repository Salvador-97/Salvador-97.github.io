import '../index.css'
import Tarjetas from './Tarjetas.jsx';

export function Seccion({Titulo, descripcion }) {
    return (
        <div>
            <h2>{Titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );
}

export default function Secciones({ nombre }) {
    return(
        <div className='border flex flex-col justify-center items-center'> 
            <Seccion Titulo={nombre} descripcion=""/>
            <div className='border'>
                <div className="flex flex-wrap border mx-auto">
                    <Tarjetas nombre="Proyecto 1" descripcion="Descripción corta" />
                    <Tarjetas nombre="Proyecto 2" descripcion="Otra descripción" />
                </div>
            </div>
        </div>
    )
}