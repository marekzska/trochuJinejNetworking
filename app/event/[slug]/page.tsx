"use server"
import { ComingNetworkings } from "@/app/components/ComingNetworkings"
// import { Instagram } from "@/app/components/Instagram"
import { daysToEvent, formattedDate, formattedTime } from "@/lib/utils"
import { getEvents } from "@/model/api/getEvents"
import { faClock, faCoins, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Gallery } from "../components/Gallery"
import { NetworkingVideo } from "../components/NetworkingVideo"
import { RegisterForm } from "../components/RegisterForm"

type PastEventProps = {
    params: Promise<{ slug: string }>
}

export default async function Event({ params }: PastEventProps) {
    const { slug } = await params
    const eventResult = await getEvents(slug)
    const event = eventResult[0]
    const isUpcoming = daysToEvent(event.date) > 0

    return (
        <div className="w-full">
            <div className="w-full py-5 md:py-10">
                <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 grid xl:grid-cols-5 items-center gap-y-10">
                    <div className="xl:pr-28 flex flex-col items-start gap-6 text-lg col-span-2" dangerouslySetInnerHTML={{ __html: event.longDescription }} />
                    <div className="h-full flex items-center gap-4 flex-col md:flex-row col-span-3">
                        {isUpcoming  && <div className="w-full flex mb-4 sm:hidden"><Link href="#form" className="bg-networking-green text-black font-bold mx-auto p-4 rounded-md">Mám zájem</Link></div>}
                        <div className="flex flex-col md:w-1/2 my-auto gap-10">
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faClock} className="h-10 text-networking-lightGray mb-2" />
                                <div className="text-networking-green text-lg font-bold">{formattedDate(event.date)} od {formattedTime(event.date)}</div>
                                <div className="text-networking-lightGray text-lg">{event.dateNote}</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faMap} className="h-10 text-networking-lightGray mb-2" />
                                <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`} className="text-networking-green text-lg font-bold" target="_blank">{event.location}</Link>
                                <div className="text-networking-lightGray text-lg">{event.locationNote}</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <FontAwesomeIcon icon={faCoins} className="h-10 text-networking-lightGray mb-2" />
                                <div className="text-networking-lightGray text-lg">
                                    Cena je <span className="text-networking-green font-bold">{`${event.price} Kč`}</span> za akci, ze které si odneseš více než jen studené kontakty.</div>
                            </div>
                        </div>
                        <NetworkingVideo slug={slug} />
                    </div>
                </div>
            </div>





            {isUpcoming ?
                <RegisterForm {...event} slug={slug} />
                :
                <Gallery />
            }


            <ComingNetworkings />
            {/* <Instagram /> */}
        </div>
    )
}