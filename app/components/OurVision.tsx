import Image from "next/image"

export const OurVision = () => {
    return (
        <div className="w-full py-10 h-full">
            <div className="mx-auto h-full max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center">
                <div className="w-1/2 h-full rounded-3xl relative overflow-hidden">
                    <Image src='/images/visionImage.png' alt="vision image" fill={true} className="" />
                </div>
                <div className="w-1/2 pl-36 flex flex-col items-start gap-6">
                    <h2 className="text-networking-green font-bold text-4xl">Naše Vize</h2>
                    <div>Změnili jsme pravidla hry. Místo kvantity kontaktů sázíme na kvalitu vztahů. Místo formálních frází vytváříme prostor pro autentické rozhovory. Síla našeho networkingu spočívá v promyšlené koncepci:</div>
                    <ul className="list-disc pl-6">
                        <li>
                            Malé skupiny maximálně 20 lidí
                        </li>
                        <li>
                            Exkluzivita jednotlivých oborů
                        </li>
                        <li>
                            Inspirativní přednášky od profesionálů v oboru
                        </li>
                        <li>
                            Originální interaktivní networkingová hra pro přirozené vazby
                        </li>
                        <li>
                            Ponetworkingový tématicky řízený program
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}