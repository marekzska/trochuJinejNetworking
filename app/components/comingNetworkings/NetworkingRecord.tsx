import { daysToEvent, FinalIcon, formattedDate } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type NetworkingRecordProps = {
    icon: string
    title: string
    motto: string
    date: string
    theme: string
    inPreparation: boolean
    slug: string
    registeredPeopleNote: string
}

export const NetworkingRecord = ({ icon, title, theme, motto, date, inPreparation, slug, registeredPeopleNote }: NetworkingRecordProps) => {

    return (
        <div className="flex flex-col sm:flex-row bg-networking-dark w-full p-6 h-full">
            <FontAwesomeIcon icon={FinalIcon(icon) as IconProp} className="h-16 text-networking-lightGray sm:mr-10 my-auto" />
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-3/5">
                    <h2 className="text-networking-lightGray text-3xl font-bold">{title}</h2>
                    <p className="font-bold text-networking-green text-lg">Přednáška: {theme}</p>
                    <p className="mt-2">{motto}</p>
                </div>
                <div className="lg:ml-auto flex flex-col w-48 items-start mt-5 lg:mt-0">
                    <div className="font-normal text-3xl text-networking-lightGray">{formattedDate(date)}</div>
                    <div className="text-lg font-bold text-networking-lightGray">{daysToEvent(date) > 0 ? `Za ${daysToEvent(date)} dní.` : 'Již proběhl.'}</div>

                    {registeredPeopleNote ?
                        <div className="text-networking-lightGray text-xs mt-5 lg:mt-auto font-normal">{registeredPeopleNote}</div> :
                        <div className="text-networking-lightGray text-xs mt-5 lg:mt-auto font-normal">Max 20 lidí na networking</div>}
                    {inPreparation ?
                        <div className="text-xs text-black px-4 py-3 mt-1 bg-black text-gray-600 font-bold rounded-sm">
                            Právě připravujeme
                        </div>
                        :
                        <Link href={`/event/${slug}`} className={`text-xs text-black px-4 py-2 mt-1 ${daysToEvent(date) > 0 ? "bg-networking-green hover:bg-networking-lightGray" : "bg-networking-lightGray hover:bg-networking-green"} font-bold rounded-sm`}>
                            {daysToEvent(date) > 0 ? "Chci na networking" : "Jak probíhal networking"}
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}