// ─────────────────────────────────────────────────────────────────────────
// COMPANIES DATA
//
// This is the only file you need to touch to add, remove, or edit a
// company or a job listing. No HTML, no CSS, no routing logic.
//
// HOW TO ADD A NEW COMPANY:
//   1. Copy one whole block below, from the opening "{" to the closing "},"
//   2. Paste it at the end of the list (just before the final "]")
//   3. Edit each field with your company's info.
//      - "slug" -> lowercase, no spaces or punctuation. This becomes the
//        page URL: employ805.com/company/<slug>
//      - "logo" -> the filename of the logo image you place in
//        /public/logos/. Use a transparent PNG or SVG if you have one.
//        If you skip this step, the site automatically shows the
//        company's initials instead, so nothing ever looks broken.
//   4. Save the file. That's it — the homepage grid, the company page,
//      and the open-roles list all update automatically.
//
// HOW TO ADD/REMOVE A JOB:
//   Just add or delete an entry inside that company's "roles" array.
// ─────────────────────────────────────────────────────────────────────────

export interface Role {
  title: string
  location: string
  type: string // e.g. "Full-time", "Part-time", "Internship", "Contract"
  link: string // where applicants go — a mailto:, or a URL to your ATS/job page
}

export interface Company {
  slug: string
  name: string
  logo: string // filename only, e.g. "tidehouse.png" — lives in /public/logos/
  founder: string
  location: string
  website: string // full https:// URL, or leave as "" to hide the link
  description: string
  roles: Role[]
}

export const companies: Company[] = [
  {
    slug: 'outsideopen',
    name: 'Outside Open',
    logo: 'outsideopen.jpg',
    founder: '', // No individual founder name published on their site — worth just asking them directly when you reach out
    location: 'Santa Barbara, CA',
    website: 'https://www.outsideopen.com',
    description:
      'Outside Open is a small Santa Barbara technology studio doing managed IT support, mobile app development, and custom software work for local and national clients.',
    roles: [], // No public job listings found as of this search — reach out directly to ask if they have openings before listing any
  },
  {
    slug: 'theverse',
    name: 'The Verse',
    logo: 'theverse.webp',
    founder: 'Ben Simon-Thomas',
    location: 'Santa Barbara, CA', // Company HQ is listed as Berkeley, CA with a distributed team that includes a Santa Barbara presence — not a Santa Barbara headquarters. Worth confirming this still fits before you list them.
    website: 'https://www.versebuilding.com',
    description:
      'The Verse builds games and immersive digital experiences designed to support healing, connection, and personal growth, developed with psychologists and educators.',
    roles: [], // Their current openings are internships posted on Wellfound rather than their own site — verify current openings and get a direct contact before listing any
  },
  {
    slug: 'olli',
    name: 'Olli Technologies',
    logo: 'olli.png',
    founder: 'Matt Simpson',
    location: 'Santa Barbara, CA',
    website: 'https://www.witholli.com',
    description:
      'Olli builds an AI-native platform that handles childcare operations, payments, and family communication for small childcare providers, replacing paper forms and scattered group texts.',
    roles: [
      {
        title: 'Founding Engineer & Technical Lead',
        location: 'Remote · United States',
        type: 'Full-time',
        link: 'https://wellfound.com/jobs/4594830-founding-engineer-technical-lead',
      },
    ],
  },
  {
    slug: 'contratado',
    name: 'Contratado',
    logo: 'contratado.png',
    founder: 'Michael Alvarez',
    location: 'Santa Barbara, CA',
    website: 'https://contratado.app',
    description:
      'Contratado gives Spanish speakers AI-powered interview practice for English-speaking job applications, helping candidates prepare with realistic mock interviews before the real thing.',
    roles: [
      {
        title: 'Bilingual English/Spanish Customer Support Representative',
        location: 'Remote',
        type: 'Full-time',
        link: 'https://wellfound.com/jobs/4263054-bilingual-english-spanish-customer-support-representatives',
      },
    ],
  },
]
