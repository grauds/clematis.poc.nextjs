'use client'
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SliderImage } from "@/components/ui/image/image";

import styles from './slider.module.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ISliderProps {
    urls: string[]
}

export function Slider(props: Readonly<ISliderProps>) {

    const {
       urls
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
                >
                    {
                        urls?.map((url) => (
                                <SwiperSlide key={url}>
                                    <SliderImage src={url} alt={""}></SliderImage>
                                </SwiperSlide>
                             )
                        )
                    }
                </Swiper>
            </ul>
        </div>      
    )
}