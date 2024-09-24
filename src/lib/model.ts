export interface IImage {
    src: string,
    text?: string
}
/**
 * {
 *   "id":"c01bf758ee8d660eb67700619a057a5c",
 *   "text":"Every acre of American crops harvested contains 100 pounds of insects.",
 *   "source":"djtech.net",
 *   "source_url":"http://www.djtech.net/humor/useless_facts.htm",
 *   "language":"en",
 *   "permalink":"https://uselessfacts.jsph.pl/api/v2/facts/c01bf758ee8d660eb67700619a057a5c"
 * }
 */
export interface IFact {
   id: string;
   text: string;
   source: string;
   source_url: string;
   language: string;
   permalink: string;
}