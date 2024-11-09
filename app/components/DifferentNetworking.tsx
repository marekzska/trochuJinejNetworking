import { getDifferentNetworkingSectionData } from "@/model/api/getDifferentNetworkingSectionData"
import Image from "next/image"

export const DifferentNetworking = async () => {
    const differentNetworkingData = await getDifferentNetworkingSectionData()
    return (
        <div className="w-full py-10 sm:py-16 xl:py-10 h-full">
            <div className="mx-auto h-full max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col xl:flex-row justify-between xl:items-center gap-10 xl:gap-20">
                <div className="xl:w-1/2 text-lg" dangerouslySetInnerHTML={{ __html: differentNetworkingData.text }} />
                <div className="w-full xl:w-1/2 aspect-square sm:aspect-video xl:aspect-none xl:h-full rounded-3xl relative overflow-hidden">
                    <Image unoptimized={true} src={`/images/differentNetworkingImage.png`} alt={'different networking image'} fill={true} className="object-cover" />
                </div>
            </div>
        </div>
    )
}