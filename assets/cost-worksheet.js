(() => {
  const PRICE = 0.042 / 1e6 // USD per input token, TypeSafe models page, checked 2026-10-02 05:14 UTC
  const $ = (id) => document.getElementById(id)
  const ids = ['tok', 'dec', 'per', 'retry', 'fb', 'fbc']
  const defaults = { tok: '', dec: '1000000', per: '1', retry: '0', fb: '0', fbc: '' }
  const msg = document.querySelector('[data-msg]')
  const table = document.querySelector('[data-table]')
  const body = document.querySelector('[data-body]')
  const be = document.querySelector('[data-be]')
  const num = (id) => { const v = $(id).value.trim(); return v === '' ? null : Number(v) }
  const usd = (x) => {
    if (!Number.isFinite(x)) return '—'
    if (x === 0) return '$0'
    if (Math.abs(x) >= 1) return '$' + x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return '$' + x.toPrecision(3)
  }
  const row = (label, month, per1k) => {
    const tr = document.createElement('tr')
    const a = document.createElement('td'); a.textContent = label
    const b = document.createElement('td'); b.className = 'n'; b.textContent = usd(month)
    const c = document.createElement('td'); c.className = 'n'; c.textContent = usd(per1k)
    tr.append(a, b, c); body.append(tr)
  }
  const render = () => {
    const tok = num('tok'), dec = num('dec'), per = num('per'), retry = num('retry'), fb = num('fb'), fbc = num('fbc')
    let bad = []
    const check = (id, ok) => { $(id).setAttribute('aria-invalid', String(!ok)); if (!ok) bad.push(id) }
    check('tok', tok === null || tok > 0)
    check('dec', dec !== null && dec >= 0)
    check('per', per !== null && per >= 1)
    check('retry', retry !== null && retry >= 0 && retry <= 100)
    check('fb', fb !== null && fb >= 0 && fb <= 100)
    check('fbc', fbc === null || fbc >= 0)
    body.textContent = ''
    if (bad.length) { msg.hidden = false; msg.textContent = 'Check the highlighted field: the value is outside its allowed range.'; table.hidden = true; be.hidden = true; return }
    if (tok === null) { msg.hidden = false; msg.textContent = 'Enter your measured input tokens per request to see the cost.'; table.hidden = true; be.hidden = true; return }
    const requests = dec / per
    const billed = requests * (1 + retry / 100)
    const jev = billed * tok * PRICE
    const perDecisionJev = dec > 0 ? jev / dec : (tok * PRICE * (1 + retry / 100)) / per
    const fallback = fbc === null ? null : dec * (fb / 100) * fbc
    msg.hidden = true; table.hidden = false
    row('Jev calls (input tokens only)', jev, perDecisionJev * 1000)
    if (fallback !== null) {
      row('Fallback decisions', fallback, (fb / 100) * fbc * 1000)
      row('Total with Jev', jev + fallback, (perDecisionJev + (fb / 100) * fbc) * 1000)
      row('Your current model for every decision', dec * fbc, fbc * 1000)
      if (fbc > 0) {
        const breakEven = (1 - perDecisionJev / fbc) * 100
        be.hidden = false
        be.textContent = breakEven <= 0
          ? 'At these inputs a Jev call alone costs more per decision than your current model, whatever the fallback share.'
          : `Jev plus fallback costs less than your current model while the fallback share stays below ${breakEven.toFixed(1)}%. Your entered share is ${fb}%.`
      } else be.hidden = true
    } else {
      be.hidden = false
      be.textContent = `Jev cost per decision: ${usd(perDecisionJev)}. Enter a fallback cost to compare with your current model.`
    }
  }
  for (const id of ids) $(id).addEventListener('input', render)
  document.querySelector('[data-reset]').addEventListener('click', () => { for (const id of ids) $(id).value = defaults[id]; render() })
  render()
})()
