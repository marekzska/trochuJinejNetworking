import { getVideoSectionData } from "@/model/api/getVideoSectionData"
import Image from "next/image"

export const VideoSection = async () => {
    const videoSection = await getVideoSectionData()
    return (
        <div className="w-full">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col sm:flex-row justify-between sm:items-center py-16 xl:py-10 gap-10 sm:gap-0">
                <div className="sm:w-2/5 xl:w-5/12 text-3xl leading-8 lg:leading-10 xl:pr-12 text-xl lg:text-3xl" dangerouslySetInnerHTML={{ __html: videoSection.text }} />
                <div className="sm:w-1/2 flex gap-3 items-center">
                    <Image unoptimized={true} src={`/images/firstImage.png`} width={300} height={600} alt={`first image`} className="rounded-3xl w-1/4 h-auto" />
                    <video muted={true} autoPlay={true} loop={true} className="rounded-3xl w-2/5 h-auto" playsInline={true} poster="/images/videosection-thumbnail.png">
                        <source src={`/videos/Trochu jinej reel.mp4`} type="video/mp4" />
                    </video>
                    <Image unoptimized={true} src={`/images/thirdImage.png`} width={300} height={600} alt={`third image`} className="rounded-3xl w-1/4 h-auto" />
                </div>
            </div>
        </div>
    )
}