"use client";

import {
    Dialog,
    Tab, Transition
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

type MobileMenuProps = {
    open: boolean;
    handleSetOpen: (value: boolean) => void;
};

function MobileMenu({
    open,
    handleSetOpen,
}: MobileMenuProps) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-40 xl:hidden'
                onClose={() => handleSetOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter='transition-opacity ease-linear duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition-opacity ease-linear duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 z-40 flex'>
                    <Transition.Child
                        as={Fragment}
                        enter='transition ease-in-out duration-300 transform'
                        enterFrom='-translate-x-full'
                        enterTo='translate-x-0'
                        leave='transition ease-in-out duration-300 transform'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'
                    >
                        <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                            <div className='flex px-4 pb-2 pt-5'>
                                <button
                                    type='button'
                                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                                    onClick={() => handleSetOpen(false)}
                                >
                                    <span className='sr-only'>zavřít menu</span>
                                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                </button>
                            </div>
                            <Tab.Group as='div' className='mt-2'>
                                <div className='border-b border-gray-200'></div>
                                <Tab.Panels as={Fragment}></Tab.Panels>
                            </Tab.Group>
                            <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                                <div className='flow-root' >
                                    <Link
                                        href="#"
                                        className='-m-2 block p-2 font-medium text-gray-900'
                                    >
                                        Test
                                    </Link>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root >
    );
}

export default MobileMenu;
