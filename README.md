# Afhaalbistro Flintstone

Statische website voor [Afhaalbistro Flintstone](https://www.flint-stone.nl/) in Almelo. Flintstones-geïnspireerd design, menu en informatie — zonder online bestelformulier.

## Lokaal bekijken

```bash
cd flint-stone
python3 -m http.server 8080
```

Open [http://localhost:8080/v1/](http://localhost:8080/v1/) in je browser. De root (`/`) redirect automatisch naar v1.

Alternatief met Node:

```bash
npx serve .
```

## Designversies

Drie designvarianten om te vergelijken, wisselbaar via de balk bovenaan elke pagina:

| Versie | URL | Stijl |
|--------|-----|-------|
| V1 Klassiek | `/v1/` | Flintstones-warm (oranje, cream) |
| V2 Modern | `/v2/` | Donker grill-bistro (geen indexering) |
| V3 Retro | `/v3/` | Comic/cartoon Flintstones (geen indexering) |
| V4 Fast Food | `/v4/` | McDonald's-geïnspireerd: rood & geel (geen indexering) |
| V5 Peri-Peri | `/v5/` | Nando's-geïnspireerd: zwart & rood (geen indexering) |
| V6 Fresh | `/v6/` | Chipotle-geïnspireerd: wit, bruin & groen (geen indexering) |

Oude URL's (`/` en `/informatie/`) redirecten naar v1.

## Structuur

```
index.html              → Redirect naar /v1/
informatie/index.html   → Redirect naar /v1/informatie/
v1/index.html           → Menu (productie-design)
v1/informatie/index.html
v2/index.html           → Menu (modern dark)
v2/informatie/index.html
v3/index.html           → Menu (retro comic)
v3/informatie/index.html
v4/index.html           → Menu (fast food)
v4/informatie/index.html
v5/index.html           → Menu (peri-peri)
v5/informatie/index.html
v6/index.html           → Menu (fresh bowl)
v6/informatie/index.html
css/style.css           → V1 styling
css/v2.css              → V2 styling
css/v3.css              → V3 styling
css/v4.css              → V4 styling
css/v5.css              → V5 styling
css/v6.css              → V6 styling
css/version-switcher.css → Design-switcher balk
assets/logo.png         → Logo
robots.txt              → Zoekmachine-regels
sitemap.xml             → Sitemap voor Google (alleen v1)
```

## Hosting-opties

### Optie A — Huidige shared hosting (minste wijziging)

De site draait nu op Apache shared hosting (`141.138.169.210`). Voor livegang:

1. Maak een **volledige backup** van WordPress (bestanden + database) via het hostingpaneel
2. Upload alle bestanden uit deze repo naar `public_html` via FTP/SFTP
3. Controleer dat `https://www.flint-stone.nl/` en `https://www.flint-stone.nl/informatie/` werken
4. Verwijder of deactiveer WordPress pas **nadat** de nieuwe site getest is

**Voordelen:** geen DNS-wijziging, zelfde domein en IP, minste risico op SEO-verlies.

### Optie B — Cloudflare Pages (aanbevolen voor langetermijn)

Gratis hosting met CDN, HTTPS en automatische deploy vanuit GitHub.

1. Maak een Cloudflare-account en voeg `flint-stone.nl` toe
2. Koppel deze GitHub-repo in Cloudflare Pages
3. Build settings: geen build commando nodig (statische HTML), output directory `/`
4. Pas DNS aan: `CNAME www` → `<project>.pages.dev`
5. Zet HTTPS en "Always use HTTPS" aan

**Voordelen:** gratis, snelle updates via `git push`, moderne infrastructuur.

### Optie C — Netlify of GitHub Pages

Vergelijkbaar met Cloudflare Pages. GitHub Pages is het eenvoudigst maar vereist ook een DNS CNAME-wijziging.

| Criterium        | Huidige host | Cloudflare Pages | Netlify      |
|------------------|-------------|------------------|--------------|
| Kosten           | ~bestaand   | Gratis           | Gratis       |
| Deploy           | FTP         | Git push         | Git push     |
| Eigenaar-actie   | FTP-toegang | DNS CNAME        | DNS CNAME    |

**Aanbeveling:** start met GitHub voor versiebeheer; voor livegang eerst **Optie A**, later eventueel migreren naar **Optie B**.

## SEO-migratie-checklist (voor livegang met eigenaar)

### Vóór livegang

- [ ] Nieuwe site lokaal testen (menu, telefoonlinks, beide pagina's)
- [ ] Openingstijden bevestigen met eigenaar (woensdag open/gesloten?)
- [ ] WordPress-backup maken

### Bij livegang

- [ ] Bestanden uploaden of DNS wijzigen
- [ ] Controleren: `https://www.flint-stone.nl/` laadt correct
- [ ] Controleren: `https://www.flint-stone.nl/informatie/` laadt correct
- [ ] Controleren: `https://www.flint-stone.nl/sitemap.xml` is bereikbaar
- [ ] Controleren: `https://www.flint-stone.nl/robots.txt` is bereikbaar
- [ ] Telefoonnummer klikbaar op mobiel testen

### Google Search Console

- [ ] Eigendom verifiëren (eigenaar-account of toegang vragen)
- [ ] Nieuwe sitemap indienen: `https://www.flint-stone.nl/sitemap.xml`
- [ ] URL Inspection → "Request indexing" voor `/v1/` en `/v1/informatie/`

### Google Business Profile

- [ ] Adres, telefoon en website-URL controleren (geen wijziging nodig als domein hetzelfde blijft)

### Na livegang (2–4 weken)

- [ ] Search Console op crawl errors controleren
- [ ] `site:flint-stone.nl` in Google checken
- [ ] NAP (naam, adres, telefoon) consistent houden overal

### Wat we behouden voor SEO

- Productie-URL's: `/v1/` en `/v1/informatie/` (met redirect vanaf `/` en `/informatie/`)
- Zelfde paginatitels als de huidige site
- Canonical URLs, meta descriptions, Open Graph tags
- JSON-LD Restaurant schema
- Geen `noindex` op productie

## Toekomst

Na overleg met de eigenaar kunnen openingstijden, foto's en teksten worden aangepast. Later is migratie naar een CMS (bijv. Astro + Decap CMS) mogelijk zonder URL-structuur te wijzigen.
