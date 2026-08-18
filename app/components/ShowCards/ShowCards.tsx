"use client"
import css from './ShowCards.module.css'
import Image from 'next/image';



import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay} from 'swiper/modules';

export default function ShowCards() {




  return (
    <>
        <section className={css.container}>
            <Swiper

                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className={css.mySwiper}
            >
                <SwiperSlide><Image src={'/portrait_pic_1.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_2.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_3.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_4.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_1.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_2.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_3.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_4.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_1.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_2.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_3.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_4.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_1.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_2.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_3.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
                <SwiperSlide><Image src={'/portrait_pic_4.jpg'} alt='photo wallpaper' width={350} height={450}/></SwiperSlide>
            </Swiper>

            

        </section>
        <hr className={css.line}/>

    </>
  );
}
