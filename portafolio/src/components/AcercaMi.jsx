import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

export function Carousel() {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className='w-[45rem] h-[15rem] m-auto'
        >
            <SwiperSlide className='bg-[#18b43a] h-full'>
                <div className='h-full flex items-center text-center text-[#fff] mx-[4rem] font-[700]'>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#F52727]'>
                <p>Estudios</p>
            </SwiperSlide>
            <SwiperSlide className='bg-[#276FF5]'>
                <p>Experiencia</p>
            </SwiperSlide>
        </Swiper>
    );
}

export default function AcercaMi() {
    return (
        <div className="flex shadow-[0_0_25px_9px_#3FC46090] rounded-[1rem] overflow-x-hidden">
            <div className="bg-[#1A1A1D] rounded-[1rem] p-[1rem] text-[#fff]">
                <ul className="text-[1.2rem]">
                    <li><i class="fa-solid fa-circle-user"></i>Salvador Gutiérrez Olvera</li>
                    <li><i class="fa-solid fa-phone"></i>5582214610</li>
                    <li><i class="fa-solid fa-envelope"></i>salvador.go_97@hotmail.com</li>
                    <li><i class="fa-solid fa-location-dot"></i>Teoloyucan, Edo. de México</li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-solid fa-file-invoice"></i>CV</li>
                </ul>
            </div>
            <Carousel />
        </div>
    );
}