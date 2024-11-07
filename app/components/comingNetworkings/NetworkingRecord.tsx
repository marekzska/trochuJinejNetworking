import { daysToEvent, formattedDate } from "@/lib/utils"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as FaIcon from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

type NetworkingRecordProps = {
    icon: string
    title: string
    motto: string
    date: string
    theme: string
    inPreparation: boolean
}

export const NetworkingRecord = ({ icon, title, theme, motto, date, inPreparation }: NetworkingRecordProps) => {
    const finalIcon = FaIcon[icon as keyof typeof FaIcon] || FaIcon.faQuestionCircle
    return (
        <div className="flex flex-col sm:flex-row bg-networking-dark w-full p-6">
            <FontAwesomeIcon icon={finalIcon as IconProp} className="h-16 text-networking-lightGray mr-10 my-auto" />
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-3/5">
                    <h2 className="text-networking-green font-normal text-3xl">Styl: <span className="font-bold">{title}</span></h2>
                    <p className="font-bold text-networking-green text-lg">{theme}</p>
                    <p className="mt-2">{motto}</p>
                </div>
                <div className="lg:ml-auto flex flex-col w-48 items-start mt-5 lg:mt-0">
                    <div className="font-normal text-3xl text-networking-lightGray">{formattedDate(date)}</div>
                    <div className="text-lg font-bold text-networking-lightGray">{daysToEvent(date) > 0 ? `Za ${daysToEvent(date)} dní.` : 'Již proběhl.'}</div>
                    <div className="text-networking-lightGray text-xs mt-5 lg:mt-auto font-normal">Max 20 lidí na networking</div>
                    {inPreparation ?
                        <div className="text-xs text-black px-4 py-3 mt-1 bg-black text-gray-600 font-bold rounded-sm">
                            Právě připravujeme
                        </div>
                        :
                        daysToEvent(date) > 0 ?
                            <Link href="#" className="text-xs text-black px-4 py-2 mt-1 bg-networking-green hover:bg-networking-lightGray font-bold rounded-sm">
                                Chci na networking
                            </Link>
                            :
                            <Link href="#" className="text-xs text-black px-4 py-2 mt-1 bg-networking-lightGray hover:bg-networking-green font-bold rounded-sm">
                                Jak probíhal networking
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}