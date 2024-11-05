import Image from "next/image"

export const VideoSection = () => {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center py-10">
                <div className="w-1/3 text-3xl leading-10 pr-12">
                    Zapomeňte na klasické formální networkingové akce, kde si lidé vyměňují vizitky a vedou zdvořilostní konverzace.
                    <br />
                    <br />
                    Představujeme vám odlišný koncept networkingu, který
                    <br />
                    <span className="text-networking-green">
                        bourá bariéry a vytváří skutečné příležitosti pro spolupráci.
                    </span>
                </div>
                <div className="w-1/2 flex gap-3 items-center">
                    <Image src='/images/firstImage.png' width={300} height={600} alt='firstImage' className="rounded-3xl w-1/4 h-auto" />
                    <Image src='/images/secondImage.png' width={300} height={600} alt='firstImage' className="rounded-3xl w-2/5 h-auto" />
                    <Image src='/images/thirdImage.png' width={300} height={600} alt='firstImage' className="rounded-3xl w-1/4 h-auto" />
                </div>
            </div>
        </div>
    )
}