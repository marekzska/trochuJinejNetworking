import { getExpectationsSectionData } from "@/model/api/getExpectationsSectionData"
import { ExpectationsParagraph } from "./expectations/ExpectationsParagraph"


export const WhatToExpect = async () => {
  const expectationsSection = await getExpectationsSectionData()
  return (
    <div className="w-full py-10 sm:py-16 xl:py-10">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 xl:px-20 flex flex-col justify-between items-center">
        <h3 className="font-bold text-4xl mx-auto text-center pb-10">
          {expectationsSection.title.toUpperCase()}
        </h3>
        <div className="grid sm:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-10 xl:gap-4">
          {expectationsSection.expectationsParagraphs.map((paragraph) => (
            <ExpectationsParagraph key={paragraph.title} {...paragraph} />
          ))}
        </div>
        <div className="pt-10 text-lg">
          {expectationsSection.description}
        </div>
      </div>
    </div>
  )
}