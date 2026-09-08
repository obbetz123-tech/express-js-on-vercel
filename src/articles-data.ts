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
    title: 'How a Goleta startup is quietly rethinking home energy bills',
    source: 'Santa Barbara Independent',
    date: 'Jul 2026',
    url: 'https://independent.com',
    company: 'tidehouse',
    image: 'tidehouse-feature.jpg',
  },
  {
    title: 'The clinics running on spreadsheets — and the local team fixing that',
    source: 'Pacific Coast Business Times',
    date: 'Jun 2026',
    url: 'https://pacbiztimes.com',
    company: 'commonwell',
    image: 'commonwell-feature.jpg',
  },
  {
    title: 'Central Coast growers get a modern logistics option',
    source: 'Ventura County Star',
    date: 'May 2026',
    url: 'https://vcstar.com',
    company: 'rivermade',
    image: 'rivermade-feature.jpg',
  },
  {
    title: '805 founders on building outside the Bay Area',
    source: 'Employ805',
    date: 'Apr 2026',
    url: 'https://employ805.com',
    company: '',
    image: '',
  },
]
