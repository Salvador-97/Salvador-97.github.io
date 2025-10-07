import '../index.css'

export function ItemsNav ({ nombre }) {
    return (
        <li><a href='#' className='no-underline text-[#fff] font-[700]'>
            {nombre}</a>
        </li>
    );
}

export default function Navbar({ }) {
    const items = [
        { nombre: "Inicio", href:"#inicio"},
        { nombre: "Proyectos", href: "#proyectos" },
        { nombre: "Habilidades", href: "#habilidades" },
        { nombre: "Acerca de mi", href: "#acerca" },
        { nombre: "Contacto", href: "#contacto" }
    ]
    return (
        <nav className='py-[0.8rem]'>
            <div className='flex justify-between mx-[4rem] mt-[1rem]'>
                <div>
                    <p className='text-[#fff] font-[700]'>
                        <i className="fa-solid fa-code pr-[0.5rem]"></i>
                        Salvador Gutiérrez Olvera
                        <i className="fa-solid fa-cat pl-[0.5rem]"></i>
                    </p>
                </div>
                <div className='w-1/2'>
                    <ul className='flex justify-evenly list-none'>
                    {items.map((item, key) => (
                        <ItemsNav key={key} nombre={item.nombre} href={item.href} />
                    ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}