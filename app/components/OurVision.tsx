import { getVisionSectionData } from "@/model/api/getVisionSectionData";
import Image from "next/image"

export const OurVision = async () => {
    const visionSectionData = await getVisionSectionData();
    return (
        <div className="w-full py-10 h-full">
            <div className="mx-auto h-full max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center">
                <div className="w-1/2 h-full rounded-3xl relative overflow-hidden">
                    <Image src={`${process.env.NEXT_PUBLIC_CMS_URL}${visionSectionData.image.url}`} alt={visionSectionData.image.hash} fill={true} />
                </div>
                <div className="w-1/2 pl-36" dangerouslySetInnerHTML={{ __html: visionSectionData.text }} />
            </div>
        </div>
    )
}