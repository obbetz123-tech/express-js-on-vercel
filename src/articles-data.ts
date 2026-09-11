// ─────────────────────────────────────────────────────────────────────────
// ARTICLES DATA
//
// Powers the "In the news" section on the homepage. Same idea as
// companies-data.ts — this is the only file you touch.
//
// HOW TO ADD AN ARTICLE:
//   1. Copy one block below, from "{" to "},"
//   2. Paste it at the end of the list.
//   3. Edit the fields. "company" is optional — set it to a company's
//      "slug" from companies-data.ts to tag which startup the piece is
//      about (it'll show that company's name as a small label). Leave
//      it as "" if the article isn't tied to one specific company.
//   4. "image" is the filename of a photo for the card, placed in
//      /public/articles/. If you skip it, the card automatically shows
//      a plain color block with the article title instead — nothing
//      ever looks broken.
//   5. Save. It appears on the homepage automatically — order in this
//      list is the order it's shown.
// ─────────────────────────────────────────────────────────────────────────

export interface Article {
  title: string
  source: string // e.g. "Santa Barbara Independent", "TechCrunch"
  date: string // any short display string, e.g. "Aug 2026"
  url: string
  company: string // a slug from companies-data.ts, or ""
  image: string // filename only, e.g. "tidehouse-feature.jpg" — lives in /public/articles/, or "" for none
}

export const articles: Article[] = [
  {
    title: 'Santa Barbara is quietly becoming an AI hiring hub beyond big tech',
    source: 'Pacific Coast Business Times / Nucamp',
    date: '2026',
    url: 'https://www.nucamp.co/blog/top-10-industries-hiring-ai-talent-in-santa-barbara-beyond-big-tech-in-2026',
    company: '',
    image: '',
  },
  {
    title: 'Central Coast unemployment ticks up as nonfarm jobs decline',
    source: 'Pacific Coast Business Times',
    date: 'Aug 2026',
    url: 'https://www.pacbiztimes.com/2026/08/24/unemployment-continues-rising-on-the-central-coast/',
    company: '',
    image: '',
  },
  {
    title: 'Central Coast unemployment dips back below 5%',
    source: 'Pacific Coast Business Times',
    date: 'Apr 2026',
    url: 'https://www.pacbiztimes.com/2026/04/20/central-coast-unemployment-dips-back-below-5-in-february/',
    company: '',
    image: '',
  },
  {
    title: 'How UCSB and Google Quantum AI turned Santa Barbara into a tech hub',
    source: 'UCSB Electrical & Computer Engineering',
    date: '2026',
    url: 'https://www.ece.ucsb.edu/news/all/2026/tech-titans-santa-barbara-ucsb',
    company: '',
    image: '',
  },
]
