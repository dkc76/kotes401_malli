# KOTES401 — LLM‑avusteinen harjoitus (starter)

Tämä repository sisältää starter‑materiaalin 2 tunnin ohjelmointituokiota varten: opiskelijat rakentavat pienen interaktiivisen HTML+JavaScript‑komponentin käyttäen kielimallia (LLM) apuna. Lopputyö on julkaistavissa github.io‑sivuna automaattisen GitHub Actions ‑workflow'n avulla (ohjeet `PUBLISH.md`).

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

Pika‑aloitus:
1. Avaa repo Codespacesissa, GitHub.devissä tai kloonaa paikallisesti.
2. Työstä `starter/`‑ tai `starter-react/`‑kansion tiedostoja (`index.html` / `src/App.jsx`, `scripts/app.js`, `styles.css`).
3. Kun haluat julkaista työsi, kopioi tuotoksesi `public/`‑kansioon ja tee `git push` — workflow hoitaa julkaisuun viennin.

Opettajalle: katso `exercises/README.md` ja `PROMPTS.md` — sisältö on räätälöity 2 h istuntoon.

<!-- CI: trigger LaTeX build -->