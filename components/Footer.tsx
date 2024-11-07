import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="w-full mt-16 xl:mt-10 py-10 bg-networking-dark">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col md:flex-row justify-between lg:justify-center md:items-center text-networking-lightGray gap-10 md:gap-32">
                <div className="md:w-1/3 flex flex-col gap-4 items-start">
                    <h6 className="text-white">Partneři</h6>
                    <div className="flex justify-between items-center gap-10">
                        <Image unoptimized={true} src="/images/zigilabd.svg" alt="zigilab" width={100} height={100} className="w-20 h-auto" />
                        <Image unoptimized={true} src="/images/wantmore.svg" alt="wantmore" width={100} height={100} className="w-20 h-auto" />
                        <Image unoptimized={true} src="/images/trlicek.svg" alt="tomas trlicek" width={100} height={100} className="w-20 h-auto" />
                    </div>
                    <p className="text-xs">
                        webstránku vytvořili: <Link className="underline" href='https://www.linkedin.com/in/marekzska/'>Marek Žiška</Link> a <Link className="underline" href='https://www.linkedin.com/in/trlicek/'>Tomáš Trlíček</Link>
                    </p>
                </div>
                <div className="md:w-1/3 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <Link href="#" className="text-white text-xs underline">GDPR</Link>
                        <Link href="#" className="text-white text-xs underline">Cookies</Link>
                        <Link href="#" className="text-white text-xs underline">Domů</Link>
                        <Link href="#" className="text-white text-xs underline">Downloads</Link>
                    </div>
                    <p className="text-xs">
                        Trochu Jinej Networking je značkou společnosti WANTMORE s.r.o.
                        <br />
                        ©2024 Všechna práva vyhrazena.
                    </p>
                </div>
            </div>
        </div>
    )
}