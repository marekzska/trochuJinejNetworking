import Image from "next/image";
import Link from "next/link";
import { RightMenu } from "./RightMenu";
import { getEvents } from "@/model/api/getEvents";
import { daysToEvent } from "@/lib/utils";

export async function Header() {
    const eventResults = await getEvents()
    const sortedEvents = eventResults.filter((item) => item.archived !== true).filter((item) => daysToEvent(item.date) > 0).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    return (
        <div className='sticky top-0 z-40 w-full bg-black'>
            <header className='relative'>
                <div className='mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20'>
                    <div className='flex py-5 sm:py-0 sm:h-20 items-center justify-between'>
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
                        <RightMenu event={sortedEvents[0].slug} />
                    </div>
                </div>
            </header>
        </div>
    );
}
