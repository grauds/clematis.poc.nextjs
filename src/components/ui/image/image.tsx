interface IImageProps {
   src: string,
   alt?: string
}

export function SliderImage (props: Readonly<IImageProps>) {

   const {
      src,
      alt
   } = props; 

   return (
    <div>
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
    </div>
   )    
}