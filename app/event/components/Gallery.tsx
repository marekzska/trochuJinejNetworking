'use client'
import { Button } from "@/components/ui/button"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"

export const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const galleryImages = ['galleryImage.png', 'galleryImage2.png', 'galleryImage3.png', 'galleryImage4.png',
        'galleryImage5.png', 'galleryImage6.png', 'galleryImage7.png', 'galleryImage8.png', 'galleryImage9.png', 'secondImage.png',
    ]

    const totalImages = 12;
    const repeatedImages = [...galleryImages];

    while (repeatedImages.length < totalImages) {
        repeatedImages.push(...galleryImages);
    }

    const handleIncrease = () => {
        if (currentImage < totalImages - 1) {
            setCurrentImage(prev => prev + 1);
        }
        else {
            setCurrentImage(0);
        }
    }

    const handleDecrease = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1);
        }
        else {
            setCurrentImage(totalImages - 1);
        }
    }


    return (
        <div className="w-full py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col gap-3">
                <h2 className="text-white font-bold text-4xl">Galerie</h2>
                <div className="flex gap-3 flex-col xl:flex-row">
                    <div className="w-full aspect-video xl:aspect-none relative overflow-hidden rounded-xl">
                        <Image unoptimized={true} src={`/images/${repeatedImages[currentImage]}`} alt="vision image" fill={true} className="object-contain bg-networking-dark" />
                        <Button onClick={handleDecrease} className="absolute bg-networking-green text-white flex items-center justify-center px-4 py-7 rounded-none left-5 top-1/2 -translate-y-1/2 hover:bg-networking-dark">
                            <FontAwesomeIcon icon={faChevronLeft} className="h-5" />
                        </Button>
                        <Button onClick={handleIncrease} className="absolute bg-networking-green text-white flex items-center justify-center px-4 py-7 rounded-none right-5 top-1/2 -translate-y-1/2 hover:bg-networking-dark">
                            <FontAwesomeIcon icon={faChevronRight} className="h-5" />
                        </Button>
                    </div>
                    <div className="xl:w-1/2 grid grid-cols-3 grid-rows-3 md:grid-cols-6 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-3 gap-3">
                        {repeatedImages.slice(0, totalImages).map((image, index) => (
                            <div key={index} className={`relative w-full aspect-[9/14] overflow-hidden rounded-xl ${index === currentImage ? "border-2 border-networking-green/50" : ''}`}>
                                <Image onClick={() => setCurrentImage(index)} unoptimized={true} src={`/images/${image}`} alt="vision image" fill={true} className={`object-cover cursor-pointer `} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}