"use client";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, } from "next/navigation";

export function RightMenu({ event }: { event: string }) {
    const pathname = usePathname();
    return (
        <div className='px-2 lg:px-4 flex gap-3 lg:gap-6 py-1 flex flex-col-reverse sm:flex-row items-center'>
            <div className="flex gap-3">
                <Link href='https://www.linkedin.com/company/trochu-jinej-networking/posts/?feedView=all' target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className='h-4 w-4 text-white'
                    />
                </Link>
                <Link href='https://www.facebook.com/trochujinejnetworking' target="_blank">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className='h-4 w-4 text-white'
                    />
                </Link>
                <Link href='https://www.instagram.com/trochujinejnetworking/' target="_blank">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className='h-4 w-4 text-white'
                    />
                </Link>
            </div>
            {pathname === '/' ?
                <Link href={`/event/${event}`} className="bg-networking-green hover:bg-networking-lightGray text-black font-bold text-xs rounded-sm px-3 py-2 flex items-center justify-center">Chci na Jinej Networking</Link>
                :
                <Link href="/" className="bg-networking-green hover:bg-networking-lightGray text-black font-bold text-xs rounded-sm px-3 py-2 flex items-center justify-center"><FontAwesomeIcon icon={faArrowLeft} className="w-6" />Zpět</Link>
            }
        </div>
    );
}
