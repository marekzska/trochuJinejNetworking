"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { RightMenu } from "./RightMenu";


export function Header() {
    const [open, setOpen] = useState(false);
    const handleSetOpen = (value: boolean) => {
        setOpen(value);
    };

    return (
        <div className='sticky top-0 z-40 w-full bg-black'>
            <MobileMenu open={open} handleSetOpen={handleSetOpen} />
            <header className='relative'>
                <div className='mx-auto max-w-screen-2xl px-6 lg:px-20'>
                    <div className='flex h-20 items-center justify-between'>
                        <div className='flex lg:items-center'>
                            <Link href={`/`}>
                                <span className='sr-only'>Trochu Jinej Networking</span>
                                <Image unoptimized={true}
                                    src='/images/logo.png'
                                    width={0}
                                    height={0}
                                    className='h-8 w-auto'
                                    alt='logo'
                                />
                            </Link>
                        </div>
                        <RightMenu />
                    </div>
                </div>
            </header>
        </div>
    );
}
