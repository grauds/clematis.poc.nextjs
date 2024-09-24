'use client'

interface IGalleryProps {
    images: string[]
}

export function Gallery(props: Readonly<IGalleryProps>) {

    const {
      images
    } = props;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">  {
                images?.map((image) => (
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
                    </div>
                ))
        }
        </div>

    )
}