# Afhaalbistro Flintstone

Statische website voor [Afhaalbistro Flintstone](https://www.flint-stone.nl/) in Almelo. Flintstones-geïnspireerd design, menu en informatie — zonder online bestelformulier.

## Lokaal bekijken

```bash
cd flint-stone
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in je browser.

Alternatief met Node:

```bash
npx serve .
```

## Structuur

```
index.html           → Menu (homepage)
informatie/index.html → Bezorging, openingstijden, contact
css/style.css        → Styling
assets/logo.png      → Logo
robots.txt           → Zoekmachine-regels
sitemap.xml          → Sitemap voor Google
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
- [ ] URL Inspection → "Request indexing" voor `/` en `/informatie/`

### Google Business Profile

- [ ] Adres, telefoon en website-URL controleren (geen wijziging nodig als domein hetzelfde blijft)

### Na livegang (2–4 weken)

- [ ] Search Console op crawl errors controleren
- [ ] `site:flint-stone.nl` in Google checken
- [ ] NAP (naam, adres, telefoon) consistent houden overal

### Wat we behouden voor SEO

- Zelfde URL's: `/` en `/informatie/`
- Zelfde paginatitels als de huidige site
- Canonical URLs, meta descriptions, Open Graph tags
- JSON-LD Restaurant schema
- Geen `noindex` op productie

## Toekomst

Na overleg met de eigenaar kunnen openingstijden, foto's en teksten worden aangepast. Later is migratie naar een CMS (bijv. Astro + Decap CMS) mogelijk zonder URL-structuur te wijzigen.
