(() => {
  const form = document.querySelector('[data-fit-form]')
  const result = document.querySelector('[data-fit-result]')
  const meter = document.querySelector('[data-fit-meter]')
  if (!form || !result || !meter) return

  const update = () => {
    const values = [...form.querySelectorAll('input[type="radio"]:checked')]
    const score = values.reduce((total, input) => total + Number(input.value), 0)
    const max = values.length * 2
    const ratio = max ? Math.round((score / max) * 100) : 0
    meter.style.width = `${ratio}%`

    let title = 'Answer the three questions'
    let body = 'This is a fit heuristic, not a model evaluation. Start with a small labelled workload and measure error cost.'
    if (values.length === 3 && score >= 5) {
      title = 'Good candidate for a Jev spike'
      body = 'Your task looks bounded and code-led. Define options or a score rubric, test confidence bands, and keep uncertain or irreversible cases behind review.'
    } else if (values.length === 3 && score >= 3) {
      title = 'Possible fit — prototype with a fallback'
      body = 'Some parts fit the decision pattern, but keep a larger model, a rule, or a human in the loop until your error and latency measurements are clear.'
    } else if (values.length === 3) {
      title = 'Probably not a Jev-first task'
      body = 'The task may need open-ended generation, a stable deterministic rule, or a private/local model. Compare those options before adding a hosted decision service.'
    }
    result.querySelector('strong').textContent = title
    result.querySelector('span').textContent = body
    result.setAttribute('aria-live', 'polite')
  }

  form.addEventListener('change', (event) => {
    const input = event.target
    if (input.matches('input[type="radio"][data-choice-group]')) {
      const group = input.dataset.choiceGroup
      for (const other of form.querySelectorAll('input[type="radio"][data-choice-group]')) {
        if (other !== input && other.dataset.choiceGroup === group) other.checked = false
      }
    }
    update()
  })
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    update()
    result.querySelector('strong').focus?.()
  })
  update()
})()
