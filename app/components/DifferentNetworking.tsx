import Image from "next/image"

export const DifferentNetworking = () => {
    return (
        <div className="w-full py-10">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex justify-between items-center">
                <div className="w-1/2 pr-28 flex flex-col items-start gap-6">
                    <h2 className="text-networking-green font-bold text-4xl">Proč je náš networking jiný?</h2>
                    <p>
                        Naše jedinečná networkingová hra promění obyčejné seznamování v zábavný a efektivní proces.
                    </p>
                    <p>
                        Díky originálnímu hernímu konceptu zkrátíte cestu k navázání hodnotné spolupráce
                        <span className="font-bold text-networking-green">
                            &nbsp;až o 3 běžné schůzky.
                        </span>
                    </p>
                    <p>
                        Každé setkání je tematicky zaměřené a nabízí prostor pro přirozené poznávání ostatních účastníků v uvolněné atmosféře.
                    </p>
                    <div className="text-3xl text-networking-green">
                        Nejde jen o to, koho znáte. Jde o to, jak hluboce se znáte.
                    </div>
                </div>
                <Image src='/images/differentNetworkingImage.png' alt="vision image" width={800} height={600} className="w-1/2 rounded-3xl" />
            </div>
        </div>
    )
}