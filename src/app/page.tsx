'use client'

import Image from "next/image";
import { useSelector } from "react-redux";

import { Slider } from "@/components/ui/slider/slider";
import { IImage } from "@/lib/model";
import { RootState } from "@/lib/store";

export default function Home() {

  const images = useSelector<RootState, IImage[]>((state) => state.images);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-[calc(100vh-74px)] pb-40 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full items-center justify-center row-start-2 sm:items-start">
        <Slider urls={
          images?.map((image)=>image.src)
        }/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/gallery"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Смотреть все
        </a>
      </footer>
    </div>
  );
}
