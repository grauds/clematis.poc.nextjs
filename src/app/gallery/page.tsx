'use client'

import { useSelector } from "react-redux";
import Image from "next/image";

import { Gallery } from "@/components/ui/gallery/gallery";
import { IImage } from "@/lib/model";
import { RootState } from "@/lib/store";

export default function GalleryPage() {

    const images = useSelector<RootState, IImage[]>((state) => state.rootStore.images);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-8 px-2 py-2 ">
            <main className="flex w-full items-center justify-center row-start-2 sm:items-start">
                <Gallery images={images?.map((image) => image.src)} />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
                rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="https://nextjs.org/icons/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                 Назад
                </a>
            </footer>
        </div>
    )
}