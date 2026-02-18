# Julkaisuohje (GitHub Pages)

Tämä repo sisältää valmiin esimerkkisivun `public/`‑kansiossa. Opiskelijat voivat julkaista oman työnsä seuraavasti:

1. Varmista, että repository on **public** (GitHub Pages vaatii julkisen repolisäyksen, ellei organisaatioasetuksia ole säädetty).
2. Kopioi oma työsi (`index.html`, `styles.css`, `scripts/*.js`) `public/`‑kansioon tai rakenna tuotokseksi `public/`.
3. Tee commit ja push:

   git add public/*
   git commit -m "Publish: oma TODO app"
   git push origin main

4. Avaa GitHubissa repo → Actions → odota että `Deploy to GitHub Pages` on valmis.
5. Pages‑URL löytyy repoasetuksista tai muodossa: `https://<username>.github.io/<repo>`

Huomioita:
- Workflow on konfiguroitu julkaisemaan `public/`‑kansion sisällön automaattisesti.
- Jos et halua julkaista julkisesti, jätä julkaisu myöhemmäksi tai käytä yksityistä organisaatiorepoa (edellyttää organisaation Pages‑asetuksia).

## PDF (workshop.tex -> workshop.pdf)

Tässä repossa on erillinen workflow PDF:n muodostamiseen:

- Workflow: `.github/workflows/latex-build.yml`
- Triggerit: push + manual `workflow_dispatch`
- Artifactit: `workshop-pdf` ja `workshop-pdf-fallback`

### Miten saat PDF:n varmasti talteen

1. Mene repo -> Actions -> valitse `Build LaTeX and commit PDF`.
2. Avaa uusin ajokerta.
3. Lataa artifact (`workshop-pdf` tai `workshop-pdf-fallback`).

### Miten saat PDF:n automaattisesti commitiksi repositorioon

Valitse vähintään yksi:

1. Repo -> Settings -> Actions -> General -> Workflow permissions -> **Read and write permissions**.
2. Lisää repo-sekretti `PERSONAL_ACCESS_TOKEN` (scope: `repo`).

Jos kumpikaan ei ole käytössä, PDF kyllä yleensä kääntyy artifactiksi, mutta commit voi epäonnistua oikeusvirheeseen (403).

## Vianmääritys

- **"No jobs were run"**
   - Tee pieni uusi commit ja push, tai käynnistä workflow käsin (`workflow_dispatch`).
   - Varmista että käytät uusinta `main`-haaraa.
- **Pages ei päivity**
   - Varmista että muutos meni `public/`-kansioon.
   - Tarkista Actionsista, että `Deploy to GitHub Pages` onnistui.
- **PDF ei ilmesty repoon**
   - Tarkista ensin artifactit Actions-ajosta.
   - Ota käyttöön write-permissions tai `PERSONAL_ACCESS_TOKEN`.
