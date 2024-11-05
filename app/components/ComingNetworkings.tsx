"use client"
import { Input } from "@/components/Input";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export const ComingNetworkings = () => {
    const methods = useForm();
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <div className="w-full py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 grid auto-rows-fr gap-6 items-center">
                <div className="flex bg-networking-dark w-full p-6">
                    <FontAwesomeIcon icon={faGhost} className="h-16 text-networking-lightGray mr-10 my-auto" />
                    <div className="flex flex-col gap-2 w-3/5">
                        <h2 className="text-networking-green font-normal text-3xl">Styl: <span className="font-bold">Halloween</span></h2>
                        <p className="font-bold text-networking-green text-lg">Ochranná známka - zbytečnost a nebo důležitá součást podnikání</p>
                        <p className="mt-2">Zapomeňte na klasické formální networkingové akce, kde si lidé vyměňují vizitky a vedou zdvořilostní konverzace. Představujeme vám odlišný koncept networkingu.</p>
                    </div>
                    <div className="ml-auto flex flex-col w-48 items-start">
                        <div className="font-normal text-3xl text-networking-lightGray">10. 10. 2024</div>
                        <div className="text-lg font-bold text-networking-lightGray">Za 5 dní.</div>
                        <div className="text-networking-lightGray text-xs mt-auto font-normal">Max 20 lidí na networking</div>
                        <Link href="#" className="text-xs text-black px-3 py-2 mt-1 bg-networking-green hover:bg-networking-lightGray font-bold rounded-sm">
                            Jak probíhal networking
                        </Link>
                    </div>
                </div>
                <div className="flex bg-networking-dark w-full p-6">
                    <FontAwesomeIcon icon={faGhost} className="h-16 text-networking-lightGray mr-10 my-auto" />
                    <div className="flex flex-col gap-2 w-3/5">
                        <h2 className="text-networking-green font-normal text-3xl">Styl: <span className="font-bold">Halloween</span></h2>
                        <p className="font-bold text-networking-green text-lg">Ochranná známka - zbytečnost a nebo důležitá součást podnikání</p>
                        <p className="mt-2">Zapomeňte na klasické formální networkingové akce, kde si lidé vyměňují vizitky a vedou zdvořilostní konverzace. Představujeme vám odlišný koncept networkingu.</p>
                    </div>
                    <div className="ml-auto flex flex-col w-48 items-start">
                        <div className="font-normal text-3xl text-networking-lightGray">10. 10. 2024</div>
                        <div className="text-lg font-bold text-networking-lightGray">Za 5 dní.</div>
                        <div className="text-networking-lightGray text-xs mt-auto font-normal">Max 20 lidí na networking</div>
                        <Link href="#" className="text-xs text-black px-3 py-2 mt-1 bg-networking-green hover:bg-networking-lightGray font-bold rounded-sm">
                            Chci na Networking
                        </Link>
                    </div>
                </div>
                <div className="flex bg-networking-dark w-full p-6">
                    <FontAwesomeIcon icon={faGhost} className="h-16 text-networking-lightGray mr-10 my-auto" />
                    <div className="flex flex-col gap-2 w-3/5">
                        <h2 className="text-networking-green font-normal text-3xl">Styl: <span className="font-bold">Halloween</span></h2>
                        <p className="font-bold text-networking-green text-lg">Ochranná známka - zbytečnost a nebo důležitá součást podnikání</p>
                        <p className="mt-2">Zapomeňte na klasické formální networkingové akce, kde si lidé vyměňují vizitky a vedou zdvořilostní konverzace. Představujeme vám odlišný koncept networkingu.</p>
                    </div>
                    <div className="ml-auto flex flex-col w-48 items-start">
                        <div className="font-normal text-3xl text-networking-lightGray">10. 10. 2024</div>
                        <div className="text-lg font-bold text-networking-lightGray">Za 5 dní.</div>
                        <div className="text-networking-lightGray text-xs mt-auto font-normal">Max 20 lidí na networking</div>
                        <Link href="#" className="text-xs text-black px-3 py-2 mt-1 bg-networking-green hover:bg-networking-lightGray font-bold rounded-sm">
                            Chci na Networking
                        </Link>
                    </div>
                </div>







                <div className="flex bg-networking-green w-full h-full p-6">
                    <div className="flex flex-col gap-3 w-3/5 my-auto">
                        <h2 className="text-black font-bold text-4xl">Buď #trochujinej a stále v obraze</h2>
                        <p className="text-black w-4/6">Chceš být mezi prvními, kdo se dozví o našich jedinečných networkingových setkáních? Přihlaš se k odběru novinek.</p>
                    </div>
                    <div className='flex flex-col my-auto w-2/6 ml-auto'>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} >
                                <div className='grid md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2'>
                                    <Input name='name' placeholder='Jméno a příjmení' type='text' />
                                    <Input name='email' placeholder='Váš email*' type='email' />
                                    <Input
                                        name='companyName'
                                        placeholder='Název společnosti'
                                        type='text'
                                    />
                                    <Button
                                        className={`m-0 mb-2 md:mb-0 py-5 bg-black rounded-none font-bold text-xs border-0`}
                                    >
                                        <div className='mx-auto flex gap-3 items-center'>
                                            Přihlásit se
                                        </div>
                                    </Button>
                                </div>
                            </form>
                        </FormProvider>
                        <p className="text-xs text-black ml-auto mt-2">Odesláním souhlasíte s podmínkami zpracování osobních údajů</p>
                        <p className="text-xs text-black ml-auto">*Tento údaj je potřebný k odeslání</p>
                    </div>
                </div>
            </div>
        </div>
    )
}