
export const iconos = {
    'almacen': 'fa-solid fa-truck-ramp-box',
    'series': 'fa-solid fa-circle-play',
    'tarimas': 'fa-solid fa-boxes-stacked'
}

export const lenguajes = {
    'html': 'fa-brands fa-html5',
    'css': 'fa-brands fa-css3',
    'bootstrap': 'fa-brands fa-bootstrap',
    'javascript': 'fab fa-js',
    'python': 'fa-brands fa-python',
    'cvs': 'fa-solid fa-file-csv',
    'excel': 'fas fa-file-excel',
    'sql': 'fa-solid fa-database',
    'node': 'fa-brands fa-node-js'
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

export const proyecto3 = {
    'nombre': 'Plataforma de series web (Rari Caturas-TV)',
    'descripcion': 'Sitio web para explorar y ver series, con información detallada de temporadas y capítulos.',
    'desarrollo': true,
    'estado': true
}

export const lenguajesProyecto1 = ['html', 'css', 'bootstrap', 'javascript', 'python', 'sql']
export const lenguajesProyecto2 = ['python', 'cvs', 'excel']
export const lenguajesProyecto3 = ['html', 'css', 'javascript', 'sql', 'node']

export function estado (estado, verdadero, falso){
    let valorEstado = ''
    if (estado) {
        valorEstado = verdadero;
    } else if (!estado) {
        valorEstado = falso;
    }
    return valorEstado;
}