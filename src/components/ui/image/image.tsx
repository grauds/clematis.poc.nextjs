interface IImageProps {
   src: string,
   alt?: string
}

import styles from './image.module.css'

export function SliderImage (props: Readonly<IImageProps>) {

   const {
      src,
      alt
   } = props; 

   return (
        <div className={styles.container}>
            <img className="h-auto w-full rounded-lg object-center" src={src} alt={alt}/>
            <div className={styles.centered}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a suscipit leo, sed ullamcorper velit. Cras venenatis eleifend vehicula. Nullam rhoncus porta gravida. Aliquam fermentum tincidunt interdum. Vestibulum quis nisl eleifend, blandit risus quis, ornare massa. Pellentesque condimentum ullamcorper turpis, sed consequat tortor facilisis dapibus. Phasellus commodo rhoncus eros, eu feugiat turpis lobortis at. Etiam elit massa, mattis eget tempor sit amet, lacinia vitae augue.{alt}                
            </div>
        </div>
   )    
}