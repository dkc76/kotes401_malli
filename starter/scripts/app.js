// STARTER: pieni lisäys‑toiminnallisuus on annettu, mutta laajennukset puuttuvat.
// Tehtävä: laajenna tämä toiminnallisuus (poista, merkitse tehdyt, localStorage, yms.)

const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  // TODO: Refaktoroi/korvaa tämä kutsu LLM:n tuottamalla versiolla
  addTodo(text);
  input.value = '';
});

// Yksinkertainen lisäys: lisää pelkän listaelementin (laajennetaan istunnossa)
function addTodo(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `
    <div class="todo-left">
      <span class="todo-text">${escapeHtml(text)}</span>
    </div>
    <div class="todo-actions">
      <!-- Poista‑painike ja tilan merkintä lisätään tehtävässä -->
    </div>
  `;
  list.appendChild(li);
}

// Pieni turvafunktio: estetään HTML‑injektiot starterissa
function escapeHtml(s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

// Huom: opiskelijan tehtäväksi jää mm. seuraavat:
// - lisätä poista‑painike
// - merkitä tehtävä valmiiksi
// - tallentaa localStorageen
// - käyttää LLM:ää bugikorjaukseen ja refaktorointiin
