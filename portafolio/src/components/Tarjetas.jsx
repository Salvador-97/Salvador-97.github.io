export default function Tarjetas({ nombre, descripcion }) {
    return (
        <div className="text-center">
            <h3 className='border'>{nombre}</h3>
            <p className='border'>{descripcion}</p>
        </div>
    );
}