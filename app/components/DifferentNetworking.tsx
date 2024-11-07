import { getDifferentNetworkingSectionData } from "@/model/api/getDifferentNetworkingSectionData"
import Image from "next/image"

export const DifferentNetworking = async () => {
    const differentNetworkingData = await getDifferentNetworkingSectionData()
    return (
        <div className="w-full py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center">
                <div className="w-1/2 pr-28" dangerouslySetInnerHTML={{ __html: differentNetworkingData.text }} />
                <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${differentNetworkingData.image.url}`} alt={differentNetworkingData.image.hash} width={1200} height={2000} className="w-1/2 rounded-3xl" />
            </div>
        </div>
    )
}