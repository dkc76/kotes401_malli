import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  function handleAdd() {
    const t = text.trim()
    if (!t) return
    // Starter: lisää uusi TODO peruslogiikalla.
    // Opiskelutehtävä: refaktoroi addTodo, lisää Poista‑painike, localStorage, ja pyydä LLM:ää avuksi.
    setTodos(prev => [...prev, { id: Date.now().toString(36), text: t, done: false }])
    setText('')
  }

  function toggleDone(id) {
    setTodos(prev => prev.map(x => x.id === id ? { ...x, done: !x.done } : x))
  }

  return (
    <div className="app-root">
      <h1>TODO‑lista (React — starter)</h1>
      <div className="input-row">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Kirjoita tehtävä..." />
        <button onClick={handleAdd}>Lisää</button>
      </div>
      <ul>
        {todos.map(t => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
              <span>{t.text}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="hint">Tehtävä: pyydä LLM:ää refaktoroimaan `handleAdd` ja lisää Poista‑painike sekä localStorage‑tuki.</p>
    </div>
  )
}
