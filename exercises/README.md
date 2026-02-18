# Tehtävät — 2 h istunto (KOTES401)

Tavoite: rakentaa pieni interaktiivinen komponentti (TODO‑lista) käyttäen LLM:ää apuna. Starter löytyy `starter/`‑kansiosta. Valmis ja julkaistava demo löytyy `public/`.

Tehtävälista (järjestys istunnossa):

1. Implementoi `addTodo(text)` (starterin `starter/scripts/app.js`).
2. Lisää poista‑painike ja mahdollisuus merkitä tehtävä valmiiksi.
3. Tallenna lista `localStorage`‑muistiin (valinnainen mutta suositeltu).
4. Pyydä LLM:ää selittämään vähintään yksi tekemäsi muutos (näytä prompt + vastaus).
5. (Jälkikäteen) julkaise työsi github.io:hon kopioimalla tiedostot `public/`‑kansioon ja seuraa `PUBLISH.md`.

Hyväksymiskriteerit:
- Lisääminen, poistaminen ja valmiiksi merkitseminen toimivat manuaalisesti.
- Koodi on versionhallinnassa (vähintään 1 commit).
- Opiskelija esittelee yhden LLM‑interaktion ja kuvaa, miten se auttoi.

Bonus‑tehtävät:
- Tee pieni yksikkötesti (esim. Jest) tai automaattinen tarkistus GitHub Actionsilla.
- Lisää saavutettavuusparannuksia (ARIA‑attribuutit, näppäimistöllä käytettävyys).
