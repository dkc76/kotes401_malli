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
