import express from 'express'
import { companies, type Company } from './companies-data.js'

const app = express()

// Serves everything in /public — including /style.css, /hero.jpg, and /logos/*.png
app.use(express.static('public'))

const SITE_NAME = 'Employ805'

function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function logoMarkup(c: Company): string {
  return `<img src="/logos/${c.logo}" alt="${c.name}" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
    <span class="logo-fallback">${initials(c.name)}</span>`
}

function head(title: string, description: string): string {
  return `<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="${description}" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />`
}

function header(): string {
  return `<header><div class="wrap nav">
    <a class="brand" href="/">Employ<span>805</span></a>
    <nav class="links" aria-label="Main navigation">
      <a href="/#companies">Companies</a>
      <a href="/#openings">Openings</a>
      <a href="/#founders" class="cta">List your company</a>
    </nav>
  </div></header>`
}

function footer(): string {
  return `<footer><div class="wrap">
    <span>${SITE_NAME} / Central Coast, California</span>
    <a href="mailto:hello@employ805.com">hello@employ805.com</a>
  </div></footer>`
}

function parallaxScript(): string {
  return `<script>
  (function () {
    var img = document.querySelector('[data-parallax]');
    if (!img) return;
    var ticking = false;
    function update() {
      var rect = img.parentElement.getBoundingClientRect();
      img.style.transform = 'translateY(' + rect.top * 0.28 + 'px)';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();
  </script>`
}

app.get('/', (_req, res) => {
  const openRoles = companies.flatMap((c) =>
    c.roles.map((r) => ({ ...r, companyName: c.name }))
  )

  const companyCards = companies
    .map(
      (c) => `<a class="logo-card" href="/company/${c.slug}" aria-label="${c.name}">${logoMarkup(c)}</a>`
    )
    .join('')

  const jobRows = openRoles
    .map(
      (r) => `<article class="job">
        <div class="job-title">${r.title}</div>
        <div class="job-company">${r.companyName}</div>
        <div class="job-note">${r.location}</div>
        <div class="job-type">${r.type}</div>
        <a class="apply" href="${r.link}">View role →</a>
      </article>`
    )
    .join('')

  res.type('html').send(`<!doctype html>
<html lang="en">
<head>${head(
    `${SITE_NAME} — Startups building the 805`,
    'Employ805 connects people with founder-led startups hiring across California\u2019s Central Coast.'
  )}</head>
<body>
  ${header()}
  <main>
    <div class="hero-media"><img data-parallax src="/hero.jpg" alt="" /></div>
    <div class="wrap hero">
      <div class="eyebrow">The Central Coast startup index</div>
      <h1>Meet the startups building the 805.</h1>
      <p class="lede">Open roles from founders growing companies across Santa Barbara, Goleta, Ventura, and the Central Coast.</p>
      <div class="actions">
        <a class="button primary" href="#openings">Explore openings</a>
        <a class="button" href="#founders">List your company</a>
        <span class="stat"><b>${openRoles.length}</b> open roles this week</span>
      </div>
    </div>
    <div class="locales wrap">
      <span><i>&#9679;</i>Santa Barbara</span>
      <span><i>&#9679;</i>Goleta</span>
      <span><i>&#9679;</i>Ventura</span>
      <span><i>&#9679;</i>San Luis Obispo</span>
    </div>

    <section id="companies"><div class="wrap">
      <div class="section-top">
        <h2>Founder-led companies</h2>
        <p>Early-stage teams, selected for the work they're doing. Click a company to see who's behind it and what they're hiring for.</p>
      </div>
      <div class="logo-grid">${companyCards}</div>
    </div></section>

    <section id="openings"><div class="wrap">
      <div class="section-top">
        <h2>Open roles</h2>
        <p>Apply directly to the company. No accounts, no algorithms.</p>
      </div>
      <div class="jobs">${jobRows}</div>
    </div></section>

    <section class="how"><div class="wrap">
      <div class="section-top">
        <h2>Good work is closer than you think.</h2>
        <p>Employ805 keeps the connection between a founder and a candidate direct and clear.</p>
      </div>
      <div class="steps">
        <div class="step"><div class="step-number">01</div><h3>Founders share</h3><p>A short, useful picture of their company and the role they need filled.</p></div>
        <div class="step"><div class="step-number">02</div><h3>People discover</h3><p>Browse a small, edited list of roles worth knowing about.</p></div>
        <div class="step"><div class="step-number">03</div><h3>Conversations start</h3><p>Apply straight to the team.</p></div>
      </div>
    </div></section>

    <section id="founders"><div class="wrap founders-cta">
      <h2>Building in the 805?</h2>
      <div>
        <p>Employ805 gives early-stage teams a straightforward place to meet people who want to build locally.</p>
        <div class="actions"><a class="button primary" href="mailto:hello@employ805.com?subject=List%20my%20company">List your company</a></div>
      </div>
    </div></section>
  </main>
  ${footer()}
  ${parallaxScript()}
</body>
</html>`)
})

app.get('/company/:slug', (req, res) => {
  const company = companies.find((c) => c.slug === req.params.slug)

  if (!company) {
    res.status(404).type('html').send(`<!doctype html>
<html lang="en"><head>${head('Company not found — ' + SITE_NAME, 'Company not found.')}</head>
<body>${header()}<main><section><div class="wrap">
  <a class="back-link" href="/#companies">&larr; All companies</a>
  <h1>We couldn't find that company.</h1>
</div></section></main>${footer()}</body></html>`)
    return
  }

  const rolesHtml = company.roles.length
    ? `<div class="jobs">${company.roles
        .map(
          (r) => `<article class="job">
        <div class="job-title">${r.title}</div>
        <div class="job-company">${company.name}</div>
        <div class="job-note">${r.location}</div>
        <div class="job-type">${r.type}</div>
        <a class="apply" href="${r.link}">View role →</a>
      </article>`
        )
        .join('')}</div>`
    : `<p class="roles-empty">No open roles right now — check back soon.</p>`

  res.type('html').send(`<!doctype html>
<html lang="en">
<head>${head(
    `${company.name} — ${SITE_NAME}`,
    `${company.name} is hiring on Employ805. ${company.description}`
  )}</head>
<body>
  ${header()}
  <main>
    <section><div class="wrap">
      <a class="back-link" href="/#companies">&larr; All companies</a>
      <div class="company-header">
        ${logoMarkup(company)}
        <div class="company-title">
          <div class="eyebrow">${company.location} · Founded by ${company.founder}</div>
          <h1>${company.name}</h1>
        </div>
      </div>
      <p class="company-desc">${company.description}</p>
      <div class="company-links">
        ${company.website ? `<a class="button" href="${company.website}" target="_blank" rel="noopener">Visit website ↗</a>` : ''}
      </div>
      <div class="section-top"><h2>Open roles at ${company.name}</h2></div>
      ${rolesHtml}
    </div></section>
  </main>
  ${footer()}
</body>
</html>`)
})

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
