import Link from "next/link"

export const Footer = () => {
    return (
        <div className="w-full py-10 bg-networking-dark">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex flex-col justify-between items-center text-networking-lightGray">
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <Link href="#" className="text-white text-xs underline">GDPR</Link>
                        <Link href="#" className="text-white text-xs underline">Cookies</Link>
                        <Link href="#" className="text-white text-xs underline">Domů</Link>
                        <Link href="#" className="text-white text-xs underline">Downloads</Link>
                    </div>
                    <p className="text-xs text-center">
                        Trochu Jinej Networking je značkou společnosti WANTMORE s.r.o.
                        <br />
                        ©2024 Všechna práva vyhrazena.
                    </p>
                </div>
            </div>
        </div>
    )
}