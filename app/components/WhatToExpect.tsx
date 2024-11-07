import { getExpectationsSectionData } from "@/model/api/getExpectationsSectionData"
import { ExpectationsParagraph } from "./expectations/ExpectationsParagraph"


export const WhatToExpect = async () => {
  const expectationsSection = await getExpectationsSectionData()
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 flex flex-col justify-between items-center">
        <h3 className="font-bold text-4xl mx-auto pb-6">
          {expectationsSection.title.toUpperCase()}
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {expectationsSection.expectationsParagraphs.map((paragraph) => (
            <ExpectationsParagraph key={paragraph.title} {...paragraph} />
          ))}
        </div>
        <div className="pt-6">
          {expectationsSection.description}
        </div>
      </div>
    </div>
  )
}