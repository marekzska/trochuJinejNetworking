import { getLandingData } from '@/model/api/getLandingData';
import '../globals.css';

export const HeroTitle = async () => {
    const landingData = await getLandingData()
    return (
        <div className="w-full pt-24 pb-14 flex text-8xl" dangerouslySetInnerHTML={{ __html: landingData.text }} />
    )
}