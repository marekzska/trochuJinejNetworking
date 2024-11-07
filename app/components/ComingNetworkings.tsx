import { getEvents } from "@/model/api/getEvents";
import { NetworkingForm } from "./comingNetworkings/NetworkingForm";
import { NetworkingRecord } from "./comingNetworkings/NetworkingRecord";
import { getNewsletterText } from "@/model/api/getNewsletterText";

export const ComingNetworkings = async () => {
    const upcomingEvents = await getEvents()
    const newsletterText = await getNewsletterText()
    console.log(newsletterText)
    return (
        <div className="w-full py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 grid auto-rows-fr gap-6 items-center">
                {upcomingEvents.map((event) => (
                    <NetworkingRecord {...event} />
                ))}
                <div className="flex bg-networking-green w-full h-full p-6">
                    <div className="w-3/5 my-auto" dangerouslySetInnerHTML={{ __html: newsletterText.text }} />
                    <NetworkingForm />
                </div>
            </div>
        </div>
    )
}