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
    slug: 'tidehouse',
    name: 'Tidehouse',
    logo: 'tidehouse.png',
    founder: 'Amelia Park',
    location: 'Goleta, CA',
    website: 'https://tidehouse.co',
    description:
      'Tidehouse builds energy-management software that helps coastal homes lower their utility use without the guesswork, pairing simple hardware with a service that homeowners actually understand.',
    roles: [
      {
        title: 'Founding Product Designer',
        location: 'Goleta · Hybrid, 3 days in office',
        type: 'Full-time',
        link: 'mailto:hello@employ805.com?subject=Founding%20Product%20Designer%20-%20Tidehouse',
      },
      {
        title: 'Growth Marketing Intern',
        location: 'Goleta · 12 hrs/week',
        type: 'Internship',
        link: 'mailto:hello@employ805.com?subject=Growth%20Marketing%20Intern%20-%20Tidehouse',
      },
    ],
  },
  {
    slug: 'commonwell',
    name: 'Commonwell',
    logo: 'commonwell.png',
    founder: 'Marcus Liu',
    location: 'Santa Barbara, CA',
    website: 'https://commonwell.example.com',
    description:
      'Commonwell builds operational software for the community health clinics that serve the Central Coast, replacing spreadsheets and phone tag with tools built for how clinics actually run.',
    roles: [
      {
        title: 'Customer Success Manager',
        location: 'Santa Barbara · Hybrid',
        type: 'Full-time',
        link: 'mailto:hello@employ805.com?subject=Customer%20Success%20Manager%20-%20Commonwell',
      },
    ],
  },
  {
    slug: 'rivermade',
    name: 'Rivermade',
    logo: 'rivermade.png',
    founder: 'Elena Soto',
    location: 'Ventura, CA',
    website: 'https://rivermade.example.com',
    description:
      'Rivermade is modern food logistics for the region\u2019s growers and makers, connecting small producers to buyers with clearer routing, tracking, and invoicing than the legacy systems they replace.',
    roles: [
      {
        title: 'Operations Lead',
        location: 'Ventura · On-site',
        type: 'Full-time',
        link: 'mailto:hello@employ805.com?subject=Operations%20Lead%20-%20Rivermade',
      },
    ],
  },
  {
    slug: 'lantern',
    name: 'Lantern',
    logo: 'lantern.png',
    founder: 'Jon Bell',
    location: 'Santa Barbara, CA',
    website: 'https://lantern.example.com',
    description:
      'Lantern is a calmer operating system for independent hospitality \u2014 scheduling, ordering, and reporting in one place, built for owners who\u2019d rather run their business than manage five different apps.',
    roles: [
      {
        title: 'Full-Stack Engineer',
        location: 'Santa Barbara · Flexible',
        type: 'Full-time',
        link: 'mailto:hello@employ805.com?subject=Full-Stack%20Engineer%20-%20Lantern',
      },
    ],
  },
]
