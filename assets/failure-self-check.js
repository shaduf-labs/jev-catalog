(() => {
  // Compares the reader's choices with the counts in window.FSC_DATA. Reads no code, stores nothing and makes no network call.
  const D = window.FSC_DATA
  const root = document.querySelector('[data-questions]')
  if (!D || !root) return
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e }
  const fill = (sel, text) => { const e = document.querySelector(sel); if (e) e.textContent = text }
  fill('[data-intro]', D.copy.intro); fill('[data-disclaimer]', D.copy.disclaimer); fill('[data-scope]', D.copy.scope)
  const results = []
  const resultFor = (cond, choice) => {
    const box = document.createDocumentFragment()
    if (choice.unsure) { box.append(el('strong', null, cond.unsure_label), el('span', null, cond.unsure_text)); return box }
    box.append(el('strong', null, D.copy.template.replace('{n}', String(choice.count))))
    const bar = el('span', 'bar'); bar.setAttribute('aria-hidden', 'true')
    const fillBar = el('i'); fillBar.style.width = (100 * choice.count / D.n).toFixed(2) + '%'; bar.append(fillBar); box.append(bar)
    box.append(el('span', 'term', 'Map term: ' + choice.term + '.'))
    if (choice.examples.length) {
      box.append(el('span', 'ex', choice.examples.length === 1 ? ' Example from the map:' : ' Examples from the map:'))
      const ul = el('ul')
      for (const x of choice.examples) ul.append(el('li', null, x))
      box.append(ul)
    }
    box.append(el('p', 'ck', `Checklist question ${cond.checklist.number}: ${cond.checklist.text}`))
    if (choice.fallback) box.append(el('p', 'ck', D.copy.fallback))
    return box
  }
  for (const cond of D.conditions) {
    const q = el('div', 'q'); q.dataset.cond = cond.id
    const p = el('p', null, cond.question); p.id = 'fsc-' + cond.id; q.append(p)
    const opts = el('div', 'opts'); opts.setAttribute('role', 'group'); opts.setAttribute('aria-labelledby', p.id)
    const r = el('div', 'r'); r.setAttribute('aria-live', 'polite'); results.push(r)
    const choices = cond.choices.concat([{ key: 'unsure', label: cond.unsure_label, cls: 'unsure', unsure: true }])
    for (const c of choices) {
      const b = el('button', 't-' + c.cls); b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.dataset.choice = c.key
      const sw = el('span', 'sw'); sw.setAttribute('aria-hidden', 'true'); b.append(sw, document.createTextNode(c.label))
      if (c.term) b.append(el('span', 'mt', ' (' + c.term + ')'))
      b.addEventListener('click', () => {
        for (const o of opts.querySelectorAll('button')) o.setAttribute('aria-pressed', String(o === b))
        r.className = 'r t-' + c.cls; r.textContent = ''; r.append(resultFor(cond, c))
      })
      opts.append(b)
    }
    q.append(opts, r); root.append(q)
  }
  const rem = document.querySelector('[data-reminders]')
  if (rem && D.reminders.length) {
    rem.hidden = false; rem.append(el('p', null, D.copy.reminders_title))
    const ul = el('ul')
    for (const x of D.reminders) { const li = el('li', null, `Question ${x.number}: ${x.text} `); li.append(el('small', null, x.note)); ul.append(li) }
    rem.append(ul)
  }
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    for (const b of root.querySelectorAll('button[aria-pressed]')) b.setAttribute('aria-pressed', 'false')
    for (const r of results) { r.className = 'r'; r.textContent = '' }
  })
})()
