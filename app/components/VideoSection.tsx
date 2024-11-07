import { getVideoSectionData } from "@/model/api/getVideoSectionData"
import Image from "next/image"

export const VideoSection = async () => {
    const videoSection = await getVideoSectionData()
    return (
        <div className="w-full">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center py-10">
                <div className="w-1/3 text-3xl leading-10 pr-12" dangerouslySetInnerHTML={{ __html: videoSection.text }} />
                <div className="w-1/2 flex gap-3 items-center">
                    <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${videoSection.leftImage.url}`} width={300} height={600} alt={`${process.env.NEXT_PUBLIC_CMS_URL}${videoSection.leftImage.hash}`} className="rounded-3xl w-1/4 h-auto" />
                    <video muted={true} autoPlay={true} loop={true} className="rounded-3xl w-2/5 h-auto">
                        <source src={`${process.env.NEXT_PUBLIC_CMS_URL}${videoSection.middleVideo.url}`} type="video/mp4" />
                    </video>
                    <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${videoSection.rightImage.url}`} width={300} height={600} alt={`${process.env.NEXT_PUBLIC_CMS_URL}${videoSection.rightImage.hash}`} className="rounded-3xl w-1/4 h-auto" />
                </div>
            </div>
        </div>
    )
}