"use client";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, } from "next/navigation";

export function RightMenu() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='px-2 lg:px-4 flex gap-2 lg:gap-6 py-1 flex items-center'>
            <Link href='#' target="_blank">
                <FontAwesomeIcon
                    icon={faFacebook}
                    className='h-4 w-4 text-white'
                />
            </Link>
            <Link href='#' target="_blank">
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='h-4 w-4 text-white'
                />
            </Link>
            {pathname === '/' ?
                <Link href="#" className="bg-networking-green hover:bg-networking-lightGray text-black font-bold text-xs rounded-sm px-3 py-2 flex items-center justify-center">Chci na Jinej Networking</Link>
                :
                <Link href="/" className="bg-networking-green hover:bg-networking-lightGray text-black font-bold text-xs rounded-sm px-3 py-2 flex items-center justify-center"><FontAwesomeIcon icon={faArrowLeft} className="w-6" />Zpět</Link>
            }
        </div>
    );
}
