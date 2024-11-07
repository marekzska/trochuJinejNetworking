import { getLandingData } from '@/model/api/getLandingData';
import '../globals.css';

export const HeroTitle = async () => {
    const landingData = await getLandingData()
    return (
        <div className="w-full py-10 sm:py-16 lg:pt-20 lg:pb-10 flex text-5xl sm:text-8xl lg:text-7xl max-w-screen-2xl px-6 lg:px-10 xl:px-20 mx-auto" dangerouslySetInnerHTML={{ __html: landingData.text }} />
    )
}