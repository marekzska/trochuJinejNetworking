"use client"
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { registerFormSchema, RegisterFormValues } from "@/model/schemas/RegisterFormSchema";
import { RegisterFormAction } from "@/model/server/registerForm-action";
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from "next-safe-action/hooks";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type RegisterFormProps = {
    formDisclaimer: string;
    slug: string;
}

export const RegisterForm = ({ formDisclaimer, slug }: RegisterFormProps) => {

    const methods = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            isCompany: false,
            agreement: false,
            name: '',
            email: '',
            field: '',
            position: '',
            phone: '',
            message: '',
            companyName: '',
            companyNumber: '',
            companyAddress: '',
            city: '',
            state: '',
            zipNumber: '',
        }
    });
    const { execute, status, result } = useAction(RegisterFormAction)
    const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
        execute({ ...data, event: slug });
    };

    useEffect(() => {
        if (status === 'hasSucceeded') {
            methods.reset();
        }
    }, [status])


    useEffect(() => {
        if (methods.watch('isCompany')) {
            methods.resetField('companyName');
            methods.resetField('companyNumber');
            methods.resetField('companyAddress');
            methods.resetField('city');
            methods.resetField('state');
            methods.resetField('zipNumber');
        }
    }, [methods.watch('isCompany')]);

    return (
        <div className="w-full py-5 md:py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col-reverse xl:flex-row gap-x-32 gap-y-10">
                <div className="xl:w-1/2">
                    <div className='flex flex-col my-auto'>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} >
                                {/* <form id='sheetdb-form' method="post" action="https://sheetdb.io/api/v1/bk227xu7rfwd8" > */}
                                <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-3 md:gap-4'>
                                    <Input name='name' placeholder='Jméno a příjmení*' type='text' />
                                    <Input name='email' placeholder='Váš email*' type='email' />
                                    <Input
                                        name='field'
                                        placeholder='Váš obor*'
                                        type='text'
                                    />
                                    <Input
                                        name='position'
                                        placeholder='Vaše pozice*'
                                        type='text'
                                    />
                                    <Input
                                        name='phone'
                                        placeholder='Vaše telefonní číslo*'
                                        type='text'
                                    />
                                    <textarea {...methods.register('message')} placeholder='Vzkaz' className='border-0 bg-networking-dark text-xs placeholder:text-networking-lightGray p-3 h-32 text-networking-lightGray col-span-2' />
                                    <span className="text-xs text-networking-lightGray md:-mt-3">*Tento údaj je potřebný k odeslání</span>
                                </div>

                                <div className="flex items-center col-span-2 gap-4 mt-4">
                                    <div className="flex items-center cursor-pointer relative">
                                        <input type="checkbox" {...methods.register("isCompany")} className="peer h-8 w-8 cursor-pointer transition-all appearance-none hover:shadow-md border-4 border-networking-green checked:bg-networking-dark checked:border-networking-green" id="check" />
                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-networking-green stroke-1 fill-networking-green" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="text-xs">Zastupuji společnost</span>
                                </div>
                                {methods.watch('isCompany') &&
                                    < div className='flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 mt-4'>
                                        <Input name='companyName' placeholder='Název společnosti' type='text' />
                                        <Input
                                            name='companyNumber'
                                            placeholder='IČ'
                                            type='text'
                                        />
                                        <Input
                                            name='companyAddress'
                                            placeholder='Adresa společnosti'
                                            type='text'
                                        />
                                        <Input
                                            name='zipNumber'
                                            placeholder='PSČ'
                                            type='text'
                                        />
                                        <Input
                                            name='city'
                                            placeholder='Město'
                                            type='text'
                                        />
                                        <Input
                                            name='state'
                                            placeholder='Stát'
                                            type='text'
                                        />
                                    </div>
                                }
                                <div className="flex items-center col-span-2 mt-4 gap-4 col-span-3">
                                    <label className="flex items-center cursor-pointer relative">
                                        <input required={true} type="checkbox" {...methods.register("agreement")} className="peer h-8 w-8 cursor-pointer transition-all appearance-none hover:shadow-md border-4 border-networking-green checked:bg-networking-dark checked:border-networking-green" id="check" />
                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-networking-green stroke-1 fill-networking-green" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <span className="text-xs">Souhlasím s podmínkami zpracování osobních údajů a s předáním kontaktů dalším účastníkům</span>
                                </div>
                                <Button
                                    className={`mt-4 py-5 bg-networking-green rounded-none font-bold text-xs border-0 w-40`}
                                >
                                    <div className='mx-auto flex gap-3 items-center'>
                                        Přihlásit se
                                    </div>
                                </Button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
                <div className="xl:w-1/2 flex flex-col gap-4 list-disc" dangerouslySetInnerHTML={{ __html: formDisclaimer }}>

                </div>
            </div>
        </div >
    )
}