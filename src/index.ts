import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Employ805 connects people with founder-led startups hiring across California's Central Coast." />
  <title>Employ805 — Startups building the 805</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root { --ivory:#f6f0e6; --ink:#14110f; --red:#d9502b; --clay:#d9cab8; --paper:#fffaf2; --line:rgba(20,17,15,.18); }
    * { box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { margin:0; background:var(--ivory); color:var(--ink); font-family:Manrope,Arial,sans-serif; font-size:16px; line-height:1.5; }
    a { color:inherit; }
    a:focus-visible { outline:3px solid var(--red); outline-offset:4px; }
    .wrap { width:min(1180px,calc(100% - 48px)); margin:auto; }
    .eyebrow { font:500 11px/1.2 'DM Mono',monospace; letter-spacing:.08em; text-transform:uppercase; }
    header { border-bottom:1px solid var(--ink); }
    .nav { min-height:76px; display:flex; align-items:center; justify-content:space-between; gap:24px; }
    .brand { font:400 34px/.8 'Instrument Serif',Georgia,serif; text-decoration:none; letter-spacing:-.04em; }
    .brand b { color:var(--red); font-style:italic; font-weight:400; }
    nav { display:flex; align-items:center; gap:24px; }
    nav a { font-size:13px; font-weight:700; text-decoration:none; }
    nav a:last-child { padding:9px 13px; background:var(--ink); color:var(--ivory); }
    .hero { display:grid; grid-template-columns:1.45fr .55fr; min-height:570px; border-bottom:1px solid var(--ink); }
    .hero-copy { padding:88px 7vw 78px 0; display:flex; flex-direction:column; justify-content:space-between; }
    h1,h2,h3,p { margin:0; }
    h1,h2,h3 { font-family:'Instrument Serif',Georgia,serif; font-weight:400; letter-spacing:-.04em; }
    h1 { max-width:8.8ch; font-size:clamp(64px,8.4vw,124px); line-height:.81; }
    h1 em { color:var(--red); font-style:italic; }
    .lede { max-width:43ch; margin-top:28px; font-size:18px; line-height:1.55; }
    .actions { display:flex; gap:14px; flex-wrap:wrap; margin-top:34px; }
    .button { display:inline-block; border:1px solid var(--ink); padding:12px 17px; text-decoration:none; font-size:13px; font-weight:700; }
    .button.primary { background:var(--red); border-color:var(--red); color:white; }
    .button:hover { transform:translate(-2px,-2px); box-shadow:3px 3px 0 var(--ink); }
    .issue { align-self:stretch; background:var(--red); color:var(--ivory); padding:34px 28px; border-left:1px solid var(--ink); display:flex; flex-direction:column; justify-content:space-between; }
    .issue strong { display:block; font:400 56px/.84 'Instrument Serif',Georgia,serif; letter-spacing:-.06em; margin-top:12px; }
    .issue p { font-size:13px; max-width:20ch; }
    .ticker { border-bottom:1px solid var(--ink); overflow:hidden; white-space:nowrap; padding:11px 0; font:500 11px/1 'DM Mono',monospace; letter-spacing:.08em; text-transform:uppercase; }
    .ticker span { margin-right:28px; } .ticker i { color:var(--red); font-style:normal; }
    section { padding:84px 0; border-bottom:1px solid var(--ink); }
    .section-top { display:grid; grid-template-columns:1fr 2fr; gap:24px; margin-bottom:36px; }
    .section-top h2 { font-size:clamp(45px,5vw,72px); line-height:.86; }
    .section-top p { max-width:42ch; align-self:end; font-size:15px; }
    .companies { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--ink); border-left:1px solid var(--ink); }
    .company { min-height:275px; padding:21px; border-right:1px solid var(--ink); border-bottom:1px solid var(--ink); display:flex; flex-direction:column; justify-content:space-between; text-decoration:none; transition:background .15s; }
    .company:hover { background:var(--paper); }
    .monogram { width:45px; height:45px; border-radius:50%; background:var(--ink); color:var(--ivory); display:grid; place-items:center; font:400 25px 'Instrument Serif',Georgia,serif; }
    .company:nth-child(2) .monogram,.company:nth-child(4) .monogram { background:var(--red); }
    .company h3 { font-size:29px; line-height:.95; margin-bottom:8px; }
    .company p { font-size:13px; line-height:1.45; }
    .company-meta { display:flex; justify-content:space-between; border-top:1px solid var(--line); padding-top:11px; font:500 10px 'DM Mono',monospace; text-transform:uppercase; letter-spacing:.04em; }
    .jobs-head { display:flex; justify-content:space-between; align-items:end; margin-bottom:18px; }
    .jobs-head h2 { font-size:clamp(46px,5.4vw,80px); line-height:.85; }
    .jobs-head p { max-width:29ch; text-align:right; font-size:13px; }
    .jobs { border-top:2px solid var(--ink); }
    .job { display:grid; grid-template-columns:1.1fr .8fr .9fr .75fr auto; align-items:center; gap:18px; padding:22px 0; border-bottom:1px solid var(--ink); }
    .job-title { font:400 28px/.95 'Instrument Serif',Georgia,serif; letter-spacing:-.03em; }
    .job-company { font-size:13px; font-weight:700; } .job-note,.job-type { font-size:12px; }
    .job-type { font:500 10px 'DM Mono',monospace; letter-spacing:.04em; text-transform:uppercase; }
    .job a { color:var(--red); font-size:13px; font-weight:700; text-decoration:none; white-space:nowrap; }
    .how { background:var(--ink); color:var(--ivory); }
    .how .section-top h2 { color:var(--ivory); } .how .section-top p { color:#d7cbbd; }
    .steps { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid #655b52; }
    .step { padding:24px 28px 10px 0; min-height:190px; border-right:1px solid #655b52; margin-right:28px; }
    .step:last-child { border:0; }
    .step-number { color:var(--red); font:400 42px/.8 'Instrument Serif',Georgia,serif; }
    .step h3 { font:400 28px/.95 'Instrument Serif',Georgia,serif; margin:25px 0 8px; }
    .step p { color:#d7cbbd; font-size:13px; max-width:27ch; }
    .founders { display:grid; grid-template-columns:1.2fr .8fr; gap:80px; align-items:end; }
    .founders h2 { font-size:clamp(54px,6vw,92px); line-height:.82; max-width:7ch; }
    .founders h2 em { color:var(--red); font-style:italic; }
    .founders p { max-width:35ch; font-size:17px; }
    footer { padding:22px 0; font:500 10px 'DM Mono',monospace; text-transform:uppercase; letter-spacing:.05em; }
    footer .wrap { display:flex; justify-content:space-between; gap:20px; }
    @media (max-width:800px) { .wrap{width:min(100% - 32px,1180px)} nav a:not(:last-child){display:none}.hero{grid-template-columns:1fr}.hero-copy{padding:64px 0 48px}.issue{min-height:190px;border-left:0;border-top:1px solid var(--ink)}.section-top,.founders{grid-template-columns:1fr;gap:22px}.companies{grid-template-columns:repeat(2,1fr)}.job{grid-template-columns:1fr 1fr}.job a{grid-column:2;text-align:right}.jobs-head{display:block}.jobs-head p{text-align:left;margin-top:16px}.steps{grid-template-columns:1fr}.step{border-right:0;border-bottom:1px solid #655b52;margin-right:0;padding:26px 0}.step:last-child{border-bottom:0}.founders{gap:36px} }
    @media (max-width:480px) { h1{font-size:68px}.companies{grid-template-columns:1fr}.job{grid-template-columns:1fr;gap:8px}.job a{grid-column:auto;text-align:left;margin-top:5px}.job-note{display:none}section{padding:60px 0} }
  </style>
</head>
<body>
  <header><div class="wrap nav"><a class="brand" href="/">Employ<b>805</b></a><nav aria-label="Main navigation"><a href="#companies">Companies</a><a href="#openings">Openings</a><a href="#founders">For founders</a><a href="#founders">List your company</a></nav></div></header>
  <main>
    <div class="wrap hero"><div class="hero-copy"><div><div class="eyebrow">The Central Coast startup index · Issue No. 01</div><h1>Meet the startups building the <em>805.</em></h1><p class="lede">Open roles from founders growing companies across Santa Barbara, Goleta, Ventura, and the Central Coast.</p><div class="actions"><a class="button primary" href="#openings">Explore openings</a><a class="button" href="#founders">List your company</a></div></div><div class="eyebrow">Founder-led · Locally rooted · Actively hiring</div></div><aside class="issue"><div><div class="eyebrow">This week</div><strong>12<br>open roles</strong></div><p>Small teams. Real work. A clearer way into the companies making a home here.</p><div class="eyebrow">Scroll to explore ↓</div></aside></div>
    <div class="ticker"><div class="wrap"><span><i>●</i> Santa Barbara</span><span><i>●</i> Goleta</span><span><i>●</i> Ventura</span><span><i>●</i> San Luis Obispo</span><span><i>●</i> Santa Barbara</span><span><i>●</i> Goleta</span></div></div>
    <section id="companies"><div class="wrap"><div class="section-top"><div><div class="eyebrow">01 / The people behind it</div><h2>Founder-led companies</h2></div><p>Early-stage teams, selected for the work they are doing—not the size of their marketing department.</p></div><div class="companies">
      <a class="company" href="#openings"><div class="monogram">T</div><div><h3>Tidehouse</h3><p>Making it easier for coastal homes to use less energy.</p></div><div class="company-meta"><span>Amelia Park</span><span>Goleta · 3 roles</span></div></a>
      <a class="company" href="#openings"><div class="monogram">C</div><div><h3>Commonwell</h3><p>Tools for the community clinics that keep the 805 well.</p></div><div class="company-meta"><span>Marcus Liu</span><span>SB · 2 roles</span></div></a>
      <a class="company" href="#openings"><div class="monogram">R</div><div><h3>Rivermade</h3><p>Modern food logistics for the region's growers and makers.</p></div><div class="company-meta"><span>Elena Soto</span><span>Ventura · 4 roles</span></div></a>
      <a class="company" href="#openings"><div class="monogram">L</div><div><h3>Lantern</h3><p>A calmer operating system for independent hospitality.</p></div><div class="company-meta"><span>Jon Bell</span><span>SB · 3 roles</span></div></a>
    </div></div></section>
    <section id="openings"><div class="wrap"><div class="jobs-head"><div><div class="eyebrow">02 / Fresh listings</div><h2>Open roles</h2></div><p>Apply directly to the company. No accounts, no algorithms, no strange hoops.</p></div><div class="jobs">
      <article class="job"><div class="job-title">Founding Product Designer</div><div class="job-company">Tidehouse</div><div class="job-note">Goleta · Hybrid, 3 days in</div><div class="job-type">Full-time</div><a href="mailto:hello@employ805.com?subject=Founding%20Product%20Designer">View role →</a></article>
      <article class="job"><div class="job-title">Full-Stack Engineer</div><div class="job-company">Lantern</div><div class="job-note">Santa Barbara · Flexible</div><div class="job-type">Full-time</div><a href="mailto:hello@employ805.com?subject=Full-Stack%20Engineer">View role →</a></article>
      <article class="job"><div class="job-title">Operations Lead</div><div class="job-company">Rivermade</div><div class="job-note">Ventura · On-site</div><div class="job-type">Full-time</div><a href="mailto:hello@employ805.com?subject=Operations%20Lead">View role →</a></article>
      <article class="job"><div class="job-title">Customer Success Manager</div><div class="job-company">Commonwell</div><div class="job-note">Santa Barbara · Hybrid</div><div class="job-type">Full-time</div><a href="mailto:hello@employ805.com?subject=Customer%20Success%20Manager">View role →</a></article>
      <article class="job"><div class="job-title">Growth Marketing Intern</div><div class="job-company">Tidehouse</div><div class="job-note">Goleta · 12 hrs/week</div><div class="job-type">Internship</div><a href="mailto:hello@employ805.com?subject=Growth%20Marketing%20Intern">View role →</a></article>
    </div></div></section>
    <section class="how"><div class="wrap"><div class="section-top"><div><div class="eyebrow">03 / Keep it simple</div><h2>Good work is closer than you think.</h2></div><p>Employ805 keeps the connection between a founder and a candidate direct, clear, and human.</p></div><div class="steps"><div class="step"><div class="step-number">01</div><h3>Founders share</h3><p>A short, useful picture of their company and the role they need filled.</p></div><div class="step"><div class="step-number">02</div><h3>People discover</h3><p>Browse a small, edited list of roles worth knowing about.</p></div><div class="step"><div class="step-number">03</div><h3>Conversations start</h3><p>Apply straight to the team. The good part comes next.</p></div></div></div></section>
    <section id="founders"><div class="wrap founders"><div><div class="eyebrow">For founders</div><h2>Building in the <em>805?</em></h2></div><div><p>Employ805 gives early-stage teams a straightforward place to meet people who want to build locally. Tell us what you're making and who you need beside you.</p><div class="actions"><a class="button primary" href="mailto:hello@employ805.com?subject=List%20my%20company">List your company</a></div></div></div></section>
  </main>
  <footer><div class="wrap"><span>Employ805 / Central Coast, California</span><a href="mailto:hello@employ805.com">hello@employ805.com</a></div></footer>
</body>
</html>`)
})

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
