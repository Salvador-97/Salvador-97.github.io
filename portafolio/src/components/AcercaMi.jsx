import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { aboutMe, informacion, listaInfo } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';

export function Carousel() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            className='w-[45rem] h-[15rem] m-auto'
        >
            <SwiperSlide className='bg-[#17854A] h-full'>
                <div className='h-full flex items-center text-justify text-[#E6E9F0] mx-[4rem] font-[700]'>
                    {aboutMe}
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#178582]'>
                <div className='text-[#E6E9F0] font-[700] flex flex-col justify-center items-center text-center h-full mx-[2.5rem]'>
                    <h3>Educación</h3>
                    {listaEstudios.map((estudio, index) => (
                        <div key={index} className='flex justify-between my-[0.5rem] w-[90%] p-[0.5rem] rounded-[1rem]'>
                            <div className='text-left'>
                                {estudios[estudio].nombre} <br />
                                {estudios[estudio].carrera}
                            </div>
                            <div className='text-right'>
                                {estudios[estudio].generacion} <br />
                                {estudios[estudio].ubicacion}
                            </div>
                        </div>
                    ))}
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#851752]'>
                <div className='text-[#E6E9F0] font-[700] flex flex-col justify-center items-center text-center h-full mx-[2.5rem]'>
                    <h3>Experiencia laboral</h3>
                    {listaTrabajos.map((trabajo, index) => (
                        <div key={index} className='flex justify-between my-[0.5rem] w-[90%] p-[0.5rem] rounded-[1rem]'>
                            <div className='text-left'>
                                {trabajos[trabajo].nombre} <br />
                                {trabajos[trabajo].puesto}
                            </div>
                            <div className='text-right'>
                                {trabajos[trabajo].estancia} <br />
                                {trabajos[trabajo].ubicacion}
                            </div>
                        </div>
                    ))}
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export function Contacto() {
    return (
        <ul className="text-[1.2rem]">
            {listaInfo.map((info, index) => (
                <li key={index} className='text-[1rem]'>
                    <i className={`${informacion[info].icono} pr-[0.5rem]`}
                        style={{ color: informacion[info].color }}></i>
                    {informacion[info].valor}</li>
            ))}
        </ul>
    );
}

export default function AcercaMi() {
    return (
        <div className="flex rounded-[1rem] overflow-x-hidden">
            <div className="flex items-center justify-center w-[30%] bg-[#1A1A1D] rounded-[1rem] p-[1rem] text-[#A5B4FC] font-[700]">
                <Contacto />
            </div>
            <Carousel />
        </div>
    );
}