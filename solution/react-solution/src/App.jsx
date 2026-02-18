import React, { useEffect, useState } from 'react'

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2,6)
}

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('kotes401.react.todos') || '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('kotes401.react.todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(newText) {
    const t = newText.trim()
    if (!t) return
    setTodos(prev => [...prev, { id: uid(), text: t, done: false }])
    setText('')
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(x => x.id === id ? { ...x, done: !x.done } : x))
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(x => x.id !== id))
  }

  return (
    <div className="app-root">
      <h1>TODO‑lista — ratkaisu (React)</h1>
      <div className="input-row">
        <input aria-label="Uusi tehtävä" value={text} onChange={e => setText(e.target.value)} placeholder="Kirjoita tehtävä..." />
        <button onClick={() => addTodo(text)}>Lisää</button>
      </div>

      <ul>
        {todos.map(t => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} aria-label={`Merkitse ${t.text}`} />
              <span>{t.text}</span>
            </label>
            <button className="remove" onClick={() => removeTodo(t.id)} aria-label={`Poista ${t.text}`}>Poista</button>
          </li>
        ))}
      </ul>

      <p className="hint">Tämä on opettajan ratkaisu — käytä LLM:ää refaktorointiin ja selittämiseen.</p>
    </div>
  )
}
