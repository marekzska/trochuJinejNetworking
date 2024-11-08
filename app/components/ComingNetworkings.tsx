import { getEvents } from "@/model/api/getEvents";
import { NetworkingForm } from "./comingNetworkings/NetworkingForm";
import { NetworkingRecord } from "./comingNetworkings/NetworkingRecord";
import { getNewsletterText } from "@/model/api/getNewsletterText";

export const ComingNetworkings = async () => {
    const upcomingEvents = await getEvents()
    const newsletterText = await getNewsletterText()
    const sortedEvents = upcomingEvents.filter((item) => item.archived !== true).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return (
        <div className="w-full py-10 sm:py-16 xl:py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 grid auto-rows-fr gap-6 items-center">
                {sortedEvents.map((event) => (
                    <NetworkingRecord key={event.slug} {...event} />
                ))}
                <div className="flex flex-col lg:flex-row bg-networking-green w-full h-full p-6">
                    <div className="lg:w-3/5 my-auto" dangerouslySetInnerHTML={{ __html: newsletterText.text }} />
                    <NetworkingForm />
                </div>
            </div>
        </div>
    )
}