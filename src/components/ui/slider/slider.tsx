'use client'
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SliderImage } from "@/components/ui/image/image";
import { IImage } from "@/lib/model";

import styles from './slider.module.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ISliderProps {
    images: IImage[]
}

export function Slider(props: Readonly<ISliderProps>) {

    const {
       images
    } = props;

    return (
        <div className="h-96 w-96">
            <ul className="h-full w-full">
                <Swiper
                    className={styles.swiper}
                    navigation
                    pagination={{ type: "bullets", clickable: true }}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        images?.map((image) => (
                                <SwiperSlide key={image.src}>
                                    <SliderImage src={image.src} alt={image.text}></SliderImage>
                                </SwiperSlide>
                             )
                        )
                    }
                </Swiper>
            </ul>
        </div>      
    )
}