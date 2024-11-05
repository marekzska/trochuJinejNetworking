import { ComingNetworkings } from "@/app/components/ComingNetworkings"
import { Instagram } from "@/app/components/Instagram"
import { Button } from "@/components/ui/button"
import { faChevronLeft, faChevronRight, faClock, faCoins, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

function PastEvent() {
    const address = 'Čimická 442/33, Praha 8'
    return (
        <div className="w-full">
            <div className="w-full py-10">
                <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 grid grid-cols-2">
                    <div className="pr-28 flex flex-col items-start gap-6">
                        <p className="text-lg">
                            Ahoj.
                        </p>

                        <p className="text-lg">
                            Ve čtvrtek 10.10.2024 od 18hodin pořádáme “Trochu jinej networking” na téma:
                        </p>

                        <p className="text-lg">
                            ochranná známka - zbytečnost a nebo důležitá součást podnikání
                        </p>

                        <p className="text-lg">
                            jde o účast maximálně 20 lidí (rozuměj podnikatelů a nebo ředitelů firem a zkušenostmi)
                        </p>

                        <p className="text-lg">
                            oborová exkluzivita
                        </p>

                        <p className="text-lg">
                            raut
                        </p>

                        <p className="text-lg">
                            jedinečná hra na prohloubení networkingové spolupráce
                        </p>

                        <p className="text-lg">
                            zakončeno hudebním programem s vodními dýmkami.
                        </p>

                        <p className="text-lg">
                            Dresscode: Vzhledem k tomu, že je to před halloweenem, tak jsme si řekli, že bychom to mohli udělat v kostýmech! Kdo dorazí v kostýmu dostane drobný dárek a kdo ne tak ve dveřích škrabošku!
                        </p>
                    </div>
                    <div className="h-full flex">
                        <div className="flex flex-col w-1/2 my-auto gap-10">
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faClock} className="h-10 text-networking-lightGray mb-2" />
                                <div className="text-networking-green text-lg font-bold">10.10.2024 od 18 hodin</div>
                                <div className="text-networking-lightGray text-lg">Příjezd možný od 17:30</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faMap} className="h-10 text-networking-lightGray mb-2" />
                                <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} className="text-networking-green text-lg font-bold" target="_blank">{address}</Link>
                                <div className="text-networking-lightGray text-lg">prostory společnosti MOKUSO</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faCoins} className="h-10 text-networking-lightGray mb-2" />
                                <div className="text-networking-lightGray text-lg">
                                    Cena je
                                    <span className="text-networking-green font-bold">
                                        &nbsp;2000Kč&nbsp;
                                    </span>
                                    za akci, ze které si odneseš více než jen studené kontakty.</div>
                            </div>
                        </div>
                        <div className="relative w-1/2 overflow-hidden rounded-3xl">
                            <Image src='/images/secondImage.png' alt="vision image" fill={true} />
                        </div>
                    </div>
                </div>
            </div>





            <div className="w-full py-10">
                <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex flex-col gap-3">
                    <h2 className="text-white font-bold text-4xl">Galerie</h2>
                    <div className="flex gap-3">
                        <div className="w-full relative overflow-hidden rounded-xl">
                            <Image src='/images/firstImage.png' alt="vision image" fill={true} className="object-cover" />
                            <Button className="absolute bg-networking-green text-white flex items-center justify-center px-4 py-7 rounded-none left-5 top-1/2 -translate-y-1/2 hover:bg-networking-dark">
                                <FontAwesomeIcon icon={faChevronLeft} className="h-5" />
                            </Button>
                            <Button className="absolute bg-networking-green text-white flex items-center justify-center px-4 py-7 rounded-none right-5 top-1/2 -translate-y-1/2 hover:bg-networking-dark">
                                <FontAwesomeIcon icon={faChevronRight} className="h-5" />
                            </Button>
                        </div>
                        <div className="w-6/12 grid grid-cols-4 grid-rows-3 gap-3">
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-xl">
                                <Image src='/images/firstImage.png' alt="vision image" fill={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ComingNetworkings />
            <Instagram />
        </div>
    )
}
export default PastEvent