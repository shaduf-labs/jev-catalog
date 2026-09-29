(() => {
  const answers = {}
  const result = document.querySelector('[data-result]')
  if (!result) return
  const title = result.querySelector('strong')
  const body = result.querySelector('span')
  const outcomes = {
    good: ['Good candidate for a small Jev trial', ['Write the answer options or score rubric, including an explicit "other" or "review" option.', 'Label 100 or more of your own cases and compare Jev with your current rule or model.', 'Test the error, timeout and low-confidence branches before any automatic action.']],
    maybe: ['Possible fit, but add the missing safeguard first', null],
    no: ['Probably not a Jev task', ['Jev returns an answer from a fixed set; it does not write text or code.', 'Consider an LLM with structured output, a deterministic rule, or a trained classifier.']]
  }
  const fixes = {
    code: 'Move the action decision into code: check permissions and thresholds before acting.',
    fallback: 'Add a fallback: route low-confidence answers and API errors to a rule, another model or a person.'
  }
  const render = () => {
    const done = ['bounded', 'code', 'fallback'].every(key => answers[key])
    result.className = 'result'
    let items = null
    if (!done) {
      title.textContent = 'Answer the three questions'
      body.textContent = 'The result is a starting point, not a measurement of accuracy.'
    } else if (answers.bounded === 'no') {
      result.classList.add('no'); title.textContent = outcomes.no[0]; body.textContent = ''; items = outcomes.no[1]
    } else if (answers.code === 'yes' && answers.fallback === 'yes') {
      result.classList.add('good'); title.textContent = outcomes.good[0]; body.textContent = ''; items = outcomes.good[1]
    } else {
      result.classList.add('maybe'); title.textContent = outcomes.maybe[0]; body.textContent = ''
      items = ['code', 'fallback'].filter(key => answers[key] === 'no').map(key => fixes[key])
    }
    result.querySelector('ul')?.remove()
    if (items) {
      const list = document.createElement('ul')
      for (const text of items) { const li = document.createElement('li'); li.textContent = text; list.append(li) }
      result.append(list)
    }
  }
  for (const group of document.querySelectorAll('[data-q]')) {
    const key = group.dataset.q
    for (const button of group.querySelectorAll('button[data-value]')) {
      button.addEventListener('click', () => {
        answers[key] = button.dataset.value
        for (const other of group.querySelectorAll('button[data-value]')) other.setAttribute('aria-pressed', String(other === button))
        render()
      })
    }
  }
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    for (const key of Object.keys(answers)) delete answers[key]
    for (const button of document.querySelectorAll('button[data-value]')) button.setAttribute('aria-pressed', 'false')
    render()
  })
  render()
})()
