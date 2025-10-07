
export const lenguajes = {
    'html': 'fa-brands fa-html5',
    'css': 'fa-brands fa-css3',
    'bootstrap': 'fa-brands fa-bootstrap',
    'javascript': 'fab fa-js',
    'python': 'fa-brands fa-python',
    'cvs': 'fa-solid fa-file-csv',
    'excel': 'fas fa-file-excel'
}

export const proyecto1 = {
        'nombre': 'Sistema de control y registro de contenedores',
        'descripcion': 'Aplicación web para gestionar contenedores y productos en un almacén, con seguimiento de tarimas y ubicación.',
        'desarrollo': false,
        'estado': false
    }

export const proyecto2 = {
        'nombre': 'Sistema de generación y gestión de marbetes',
        'descripcion': 'Aplicación de escritorio para crear y administrar marbetes de productos, con manejo automatizado de datos.',
        'desarrollo': true,
        'estado': true
    }

export const lenguajesProyecto1 = ['html', 'css', 'bootstrap', 'javascript', 'python']
export const lenguajesProyecto2 = ['python', 'cvs', 'excel']

export function estado (estado, verdadero, falso){
    let valorEstado = ''
    if (estado) {
        valorEstado = verdadero;
    } else if (!estado) {
        valorEstado = falso;
    }
    return valorEstado;
}