import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


export const HeroTitle = () => {
    return (
        <div className="w-full pt-24 pb-14 flex">
            <h1 className="text-8xl max-w-screen-2xl px-6 lg:px-20 font-bold leading-[110px] mx-auto">
                KDE SE
                <span className="text-networking-green">
                    &nbsp;BUSINESS
                </span>
                <br />
                POTKÁVÁ SE
                <span className={`text-networking-green ${montserratAlternates.className}`}>
                    &nbsp;ZÁBAVOU
                </span>
            </h1>
        </div>
    )
}