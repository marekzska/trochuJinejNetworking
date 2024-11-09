'use client'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'

export const Footer = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full mt-16 xl:mt-10 py-10 bg-networking-dark">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col md:flex-row justify-between lg:justify-center md:items-center text-networking-lightGray gap-10 md:gap-32">
                <div className="md:w-1/3 flex flex-col gap-4 items-start">
                    <h6 className="text-white">Partneři</h6>
                    <div className="flex items-center gap-6">
                        <Link href='https://zigilab.cz/' target='_blank'>
                            <Image unoptimized={true} src="/images/zigilabd.svg" alt="zigilab" width={100} height={100} className="w-auto h-5" />
                        </Link>
                        <Link href='https://www.wantmore.cz/' target='_blank'>
                            <Image unoptimized={true} src="/images/wantmore.svg" alt="wantmore" width={100} height={100} className="w-auto h-5" />
                        </Link>
                        <Link href='https://www.linkedin.com/in/trlicek/'>
                            <Image unoptimized={true} src="/images/trlicek.svg" alt="tomas trlicek" width={100} height={100} className="w-auto h-5" />
                        </Link>
                    </div>
                    <p className="text-xs">
                        Vývoj webu: <Link className="underline" href='https://www.linkedin.com/in/marekzska/'>Marek Žiška</Link>
                    </p>
                </div>
                <div className="md:w-1/3 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div onClick={() => setOpen(true)} className="text-white text-xs underline cursor-pointer">GDPR</div>
                        {/* <Link href="#" className="text-white text-xs underline">Cookies</Link> */}
                        <Link href="/" className="text-white text-xs underline">Domů</Link>
                        {/* <Link href="#" className="text-white text-xs underline">Downloads</Link> */}
                    </div>
                    <p className="text-xs">
                        Trochu Jinej Networking je značkou společnosti WANTMORE s.r.o.
                        <br />
                        ©2024 Všechna práva vyhrazena.
                    </p>
                </div>
            </div>

            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-networking-dark bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-networking-dark px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <FontAwesomeIcon icon={faXmark} className='h-6 w-6 text-white absolute top-2 right-2 cursor-pointer' onClick={() => setOpen(false)} />
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" className="text-lg font-semibold text-networking-green">
                                        Ochrana osobních údajů - Trochu Jiný Networking
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <div className="text-sm text-blac/5">
                                            <p>
                                                Vážíme si Vašeho zájmu o Trochu Jiný Networking a důvěry, kterou v nás vkládáte. Ochrana Vašeho soukromí je pro nás prioritou, proto bychom Vás rádi informovali o tom, jak nakládáme s Vašimi osobními údaji.
                                            </p>
                                            <br />
                                            <p>
                                                Správci Vašich osobních údajů jsou společnosti WANTMORE s.r.o. a ZIGILAB s.r.o., které společně organizují Trochu Jiný Networking. Pro zajištění našich networkingových aktivit pracujeme s osobními údaji, které nám poskytnete při registraci - tedy Vaše jméno, kontaktní údaje, informace o Vaší společnosti a pracovní pozici. Během našich akcí také pořizujeme fotografie a video záznamy, které používáme pro propagaci a dokumentaci našich aktivit.
                                            </p>
                                            <br />

                                            <p>
                                                Vaše údaje využíváme především k organizaci networkingových akcí, komunikaci s Vámi a zasílání pozvánek na další události. Pomáhají nám také v marketingu a ve zlepšování našich služeb. Všechny údaje pečlivě chráníme pomocí moderních technických opatření a přístup k nim mají pouze oprávněné osoby.
                                            </p>
                                            <br />
                                            <p>
                                                Údaje pro organizaci akcí uchováváme po dobu Vaší aktivní účasti na networkingu a tři roky poté. Marketingové údaje zpracováváme do odvolání Vašeho souhlasu a fotografie či záznamy z akcí využíváme po dobu propagace Trochu Jiného Networkingu.
                                            </p>
                                            <br />
                                            <p>
                                                Účastí na našich akcích souhlasíte s pořizováním fotografií a videozáznamů, které můžeme použít pro propagaci Trochu Jiného Networkingu na sociálních sítích, webových stránkách či v tiskových materiálech.
                                                Samozřejmě máte právo kdykoli požádat o přístup ke svým údajům, jejich opravu či výmaz, odvolat svůj souhlas nebo vznést námitku proti zpracování. S jakýmikoli dotazy ohledně zpracování Vašich osobních údajů se na nás můžete obrátit na [kontaktní email].
                                                Tyto zásady průběžně aktualizujeme, aby odpovídaly aktuálním potřebám a právním předpisům. Poslední aktualizace proběhla 18.11.2024.
                                            </p>
                                            <br />
                                            <p>
                                                Tým Trochu Jiného Networkingu se zavazuje zpracovávat Vaše osobní údaje vždy transparentně a v souladu s GDPR i dalšími platnými právními předpisy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}