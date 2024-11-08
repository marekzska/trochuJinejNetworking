"use client"
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";



export const NetworkingForm = () => {
    const methods = useForm();
    return (
        <div className='flex flex-col my-auto sm:w-3/5 lg:w-2/6 lg:ml-auto'>
            <FormProvider {...methods}>
                <form action='https://trochujinej.ecomailapp.cz/public/subscribe/2/2bb287d15897fe2f9d89c882af9a3a8b' method="post" >
                    <div className='grid md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2'>
                        <Input name='name' placeholder='Jméno a příjmení' type='text' />
                        <Input name='email' placeholder='Váš email*' type='email' />
                        <Input
                            type='text'
                            name='company'
                            placeholder='Název společnosti'
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
            <p className="text-xs text-black ml-auto mt-2 text-right">Odesláním souhlasíte s podmínkami zpracování osobních údajů</p>
            <p className="text-xs text-black ml-auto text-right">*Tento údaj je potřebný k odeslání</p>
        </div>
    )
}