# KOTES401 — LLM‑avusteinen harjoitus (starter)

Tämä repository sisältää starter‑materiaalin 2 tunnin ohjelmointituokiota varten: opiskelijat rakentavat pienen interaktiivisen HTML+JavaScript‑komponentin käyttäen kielimallia (LLM) apuna. Lopputulos on julkaisukelpoinen GitHub Pages‑sivuna automaattisen GitHub Actions ‑workflow'n avulla (ohjeet `PUBLISH.md`).

## Nopea käyttö

1. Avaa repo Codespacesissa, GitHub.devissä tai kloonaa paikallisesti.
2. Työstä `starter/`‑ tai `starter-react/`‑kansion tiedostoja (`index.html` / `src/App.jsx`, `scripts/app.js`, `styles.css`).
3. Kun haluat julkaista työsi, kopioi tuotoksesi `public/`‑kansioon ja tee `git push` — Pages-workflow hoitaa julkaisuun viennin.

## Workflows (mitä mikäkin tekee)

- `.github/workflows/pages.yml` julkaisee `public/`‑kansion GitHub Pagesiin.
- `.github/workflows/latex-build.yml` kääntää `workshop.tex` -> `workshop.pdf` ja yrittää commitoida PDF:n takaisin repositorioon.

## PDF-workflow: tärkeät asetukset

Jos haluat, että `workshop.pdf` commitoituu automaattisesti:

1. Repo -> Settings -> Actions -> General -> Workflow permissions -> valitse **Read and write permissions**.
2. Vaihtoehtoisesti lisää repo-sekretti `PERSONAL_ACCESS_TOKEN` (scope: `repo`) ja workflow käyttää sitä automaattisesti.

Ilman näitä workflow kyllä kääntää PDF:n artifactiksi, mutta commit takaisin repositorioon voi epäonnistua (403).

## Vianmääritys

- **"No jobs were run"**: käynnistä workflow uudelleen `workflow_dispatch`-napilla tai tee pieni uusi push-commit. Varmista myös, että käytössä on uusin `main`.
- **PDF puuttuu reposta mutta build onnistui**: hae PDF Actions-artifacteista (`workshop-pdf` / `workshop-pdf-fallback`).
- **Pages ei päivity**: tarkista `public/`-kansion sisältö ja että Pages-workflow meni läpi.

Mitä repossa on:

- `starter/` — aloituskoodi ja tehtäväkuvaus (opiskelijoille)
- `starter-react/` — React‑versio starterista (valinnainen)
- `public/` — valmis demo, suoraan julkaistavissa (GitHub Pages)
- `exercises/` — tehtävänannot ja hyväksymiskriteerit
- `PROMPTS.md` — esimerkkipromptit LLM:lle
- `.devcontainer/` — DevContainer / Codespaces ‑tuki (valinnainen)
- `.github/workflows/pages.yml` — automaattinen Pages‑deploy
- `solution/` — opettajan ratkaisu (branch `solution`)
- `PUBLISH.md` — ohjeet oman työsi julkaisuun github.io:hon

Opettajalle: katso `exercises/README.md` ja `PROMPTS.md` — sisältö on räätälöity 2 h istuntoon.

<!-- CI: second trigger -->