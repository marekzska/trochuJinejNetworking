import { getVisionSectionData } from "@/model/api/getVisionSectionData";
import Image from "next/image"

export const OurVision = async () => {
    const visionSectionData = await getVisionSectionData();
    return (
        <div className="w-full py-10 sm:py-16 xl:py-10 h-full">
            <div className="mx-auto h-full max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col-reverse xl:flex-row justify-between items-center gap-10 xl:gap-0">
                <div className="w-full aspect-square sm:aspect-video xl:aspect-none xl:w-1/2 xl:h-full rounded-3xl relative overflow-hidden">
                    {/* <Image unoptimized={true} src={`${process.env.NEXT_PUBLIC_CMS_URL}${visionSectionData.image.url}`} alt={visionSectionData.image.hash} fill={true} className="object-cover" /> */}
                    <Image unoptimized={true} src={'/images/NetworkingJinejObrazek.jpg'} alt={'vision image'} fill={true} className="object-cover" />
                </div>
                <div className="xl:w-1/2 xl:pl-36 text-lg pl-6" dangerouslySetInnerHTML={{ __html: visionSectionData.text }} />
            </div>
        </div>
    )
}