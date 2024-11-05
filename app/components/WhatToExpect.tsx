import { faClipboardCheck, faFaceGrinTears, faGraduationCap, faLightbulb, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const WhatToExpect = () => {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex flex-col justify-between items-center">
        <h3 className="font-bold text-4xl mx-auto pb-6">
          CO MŮŽETE OČEKÁVAT?
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={faLightbulb} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold h-20 pr-6 mt-3">Tématické večery:</div>
            <div className="text-base">Každá akce přináší nové, inspirativní téma</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={faFaceGrinTears} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold h-20 pr-6 mt-3">Networking s přesahem:</div>
            <div className="text-base">Přednášky expertů na aktuální témata z businessu i osobního rozvoje</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={faGraduationCap} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold h-20 pr-6 mt-3">Hodnotný obsah: </div>
            <div className="text-base">Přednášky expertů na aktuální témata z businessu i osobního rozvoje</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={faUtensils} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold h-20 pr-6 mt-3">Gurmánský zážitek:</div>
            <div className="text-base">Prvotřídní catering a občerstvení po celou dobu akce</div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <FontAwesomeIcon icon={faClipboardCheck} className="h-10 text-networking-lightGray" />
            <div className="text-networking-green text-3xl font-bold h-20 pr-6 mt-3">Doprovodný program:</div>
            <div className="text-base">Každá akce nabízí jedinečný program vytvořený na míru danému tématu</div>
          </div>
        </div>
        <div className="pt-6">
          Představte si networking, kde nemusíte přeříkávat naučené prezentace. Kde nesbíráte vizitky jen proto, abyste je později vyhodili. Kde se skutečně potkáváte s lidmi, ne s jejich profesními maskami.
        </div>
      </div>
    </div>
  )
}