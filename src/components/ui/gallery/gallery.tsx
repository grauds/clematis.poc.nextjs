'use client'

import { SliderImage } from "../image";
import styles from './gallery.module.css'

interface IGalleryProps {
    images: string[]
}

export function Gallery(props: Readonly<IGalleryProps>) {

    const {
      images
    } = props;

    /*<img className="h-auto max-w-full rounded-lg" src={image} alt="" />*/

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">  {
            images?.map((image, key) => (
                <div key={key} className={styles.container}>                    
                    <SliderImage src={image} alt={image}></SliderImage>
                </div>
            ))
        }
        </div>

    )
}