export interface ExpectationsParagraph {
  title: string;
  description: string;
  icon: string;
}

export interface ExpectationsSectionData {
  title: string;
  expectationsParagraphs: ExpectationsParagraph[];
  description: string;
}

export interface getExpectationsSectionDataResponse {
  data: ExpectationsSectionData;
  meta: {};
}
