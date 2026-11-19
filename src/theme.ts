// Novel Theme — DOM helpers. Our buttons press Lumiverse's own (hidden) buttons, so every
// feature keeps working exactly as before; only the layout and look change.
import { CSS } from './style'

const I = (d: string, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`

const ICON = {
  back: I('<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>'),
  plus: I('<path d="M12 5v14"/><path d="M5 12h14"/>'),
  regen: I('<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>'),
  star: I('<path d="M12 4v16"/><path d="M5.1 8l13.8 8"/><path d="M18.9 8L5.1 16"/>', ' stroke-width="2.2"'),
  sliders: I('<path d="M4 7h10"/><path d="M18 7h2"/><circle cx="16" cy="7" r="2"/><path d="M4 17h2"/><path d="M10 17h10"/><circle cx="8" cy="17" r="2"/>'),
  user: I('<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
  swap: I('<path d="M7 7h12l-3-3"/><path d="M17 17H5l3 3"/>'),
  chevron: I('<path d="M6 9l6 6 6-6"/>'),
  cont: I('<path d="M9 10l-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>'),
  quote: I('<path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/>'),
  chat: I('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  compass: I('<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z"/>'),
  addon: I('<path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="M18 9v6"/><path d="M21 12h-6"/>'),
  wrench: I('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),
  more: I('<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'),
  clip: I('<path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>'),
  mic: I('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0"/><path d="M12 19v3"/>'),
  gear: I('<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>'),
}

const FOLD_OVER = 200 // px: status windows taller than this start folded

function el<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, string> = {}, html = ''): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag)
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v)
  if (html) e.innerHTML = html
  return e
}

// Lumiverse names its buttons with aria-label or only with title, depending on the button.
function find(scope: ParentNode, label: string): HTMLButtonElement | null {
  return (scope.querySelector(`button[aria-label="${label}"], button[title="${label}"]`)
    ?? scope.querySelector(`button[aria-label^="${label}"], button[title^="${label}"]`)) as HTMLButtonElement | null
}

function native(label: string): HTMLButtonElement | null {
  const bar = document.querySelector('[class*="_actionBar_"]')
  return (bar && find(bar, label)) ?? find(document, label)
}

function labelOf(b: Element | null): string {
  return b?.getAttribute('aria-label') || b?.getAttribute('title') || ''
}

// "gemini-4-argon" → "4 Argon"; other names stay as they are
function prettyModel(id: string): string {
  const m = /^gemini-(.+)$/i.exec(id.trim())
  if (!m) return id.trim()
  return m[1].split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function press(label: string) {
  const b = native(label)
  b?.click()
  return !!b
}

function insertAtCursor(text: string) {
  const ta = document.querySelector('[class*="_inputRow_"] textarea') as HTMLTextAreaElement | null
  if (!ta) return
  const start = ta.selectionStart ?? ta.value.length
  const end = ta.selectionEnd ?? ta.value.length
  const next = ta.value.slice(0, start) + text + ta.value.slice(end)
  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')!.set!
  setter.call(ta, next)
  ta.dispatchEvent(new Event('input', { bubbles: true }))
  ta.focus()
  const pos = start + text.length
  requestAnimationFrame(() => ta.setSelectionRange(pos, pos))
}

let menuEl: HTMLElement | null = null
function closeMenu() { menuEl?.remove(); menuEl = null }

type MenuItem = [string, string, () => void]

function openMenu(anchor: HTMLElement, items: MenuItem[], below = false) {
  if (menuEl) { closeMenu(); return }
  const m = el('div', { class: 'nt-menu', role: 'menu' })
  for (const [label, icon, run] of items) {
    const b = el('button', { type: 'button', role: 'menuitem' }, `${icon}<span></span>`)
    b.querySelector('span')!.textContent = label
    b.addEventListener('click', (e) => { e.stopPropagation(); closeMenu(); setTimeout(run, 0) })
    m.append(b)
  }
  document.body.append(m)
  const r = anchor.getBoundingClientRect()
  const h = m.offsetHeight
  const w = m.offsetWidth
  const left = below ? r.right - w : r.left
  m.style.left = `${Math.max(8, Math.min(left, innerWidth - w - 8))}px`
  const top = below && r.bottom + h + 8 < innerHeight ? r.bottom + 6 : r.top - h - 8
  m.style.top = `${Math.max(8, top)}px`
  menuEl = m
  setTimeout(() => document.addEventListener('click', closeMenu, { once: true }), 0)
}

// Message tools that live in the "⋯" menu instead of the always-visible row.
const MSG_EXTRA: [RegExp, string, string][] = [
  [/^Hide/, 'AI에게서 숨기기', I('<path d="M9.9 4.2A10 10 0 0 1 12 4c7 0 10 8 10 8a13 13 0 0 1-1.7 2.7"/><path d="M6.6 6.6A13 13 0 0 0 2 12s3 8 10 8a9.7 9.7 0 0 0 5.4-1.6"/><path d="M2 2l20 20"/>')],
  [/^Unhide/, '숨김 해제', I('<path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"/><circle cx="12" cy="12" r="3"/>')],
  [/^Protect context/, '앵커 걸기 (맥락 보호)', I('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],
  [/^(Unprotect|Remove anchor|Stop protecting)/, '앵커 해제', I('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],
  [/^Prompt Breakdown/, '프롬프트 통계', I('<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>')],
]

function extraButtons(pill: Element): [HTMLButtonElement, string, string][] {
  const out: [HTMLButtonElement, string, string][] = []
  pill.querySelectorAll('button:not(.nt-msg-more)').forEach((b) => {
    const lab = labelOf(b)
    const hit = MSG_EXTRA.find(([re]) => re.test(lab))
    if (hit) out.push([b as HTMLButtonElement, hit[1], hit[2]])
  })
  return out
}

function ensureMessageTools() {
  document.querySelectorAll('[data-component="BubbleMessage"] [class*="_actionsPill_"]').forEach((pill) => {
    const extras = extraButtons(pill)
    pill.querySelectorAll('button:not(.nt-msg-more)').forEach((b) => {
      b.classList.toggle('nt-msg-hidden', extras.some(([x]) => x === b))
    })
    let more = pill.querySelector('.nt-msg-more') as HTMLButtonElement | null
    if (!extras.length) { more?.remove(); return }
    if (!more) {
      more = el('button', { type: 'button', class: 'nt-msg-more', 'aria-label': '메시지 메뉴 더보기', title: '더보기' }, ICON.more)
      more.addEventListener('click', (e) => {
        e.stopPropagation()
        const items: MenuItem[] = extraButtons(pill).map(([b, label, icon]) => [label, icon, () => b.click()])
        openMenu(more!, items, true)
      })
    }
    const del = Array.from(pill.querySelectorAll('button')).find((b) => /^Delete/.test(labelOf(b)))
    if (del && more.nextElementSibling !== del) pill.insertBefore(more, del)
    else if (!del && more.parentElement !== pill) pill.append(more)
  })
}

function openPlusMenu(anchor: HTMLElement) {
  const items: MenuItem[] = [
    ['이어쓰기 (마지막 답변에 덧붙이기)', ICON.cont, () => press('Continue')],
    ['대사 대신 쓰기', ICON.chat, () => press('Impersonate')],
    ['빠른 답장', ICON.quote, () => press('Quick replies')],
    ['가이드 생성', ICON.compass, () => press('Guided generations')],
    ['페르소나 애드온', ICON.addon, () => press('Persona add-ons')],
    ['파일 첨부', ICON.clip, () => press('Attach file')],
    ['음성 입력', ICON.mic, () => press('Start speech-to-text')],
    ['도구', ICON.wrench, () => press('Tools')],
    ['더보기', ICON.more, () => press('Extras')],
    ['버튼 설정', ICON.gear, () => press('Customize composer')],
  ]
  openMenu(anchor, items)
}

function ensureComposer() {
  const row = document.querySelector('[class*="_inputRow_"]') as HTMLElement | null
  const box = row?.parentElement
  if (!row || !box) return

  if (!row.querySelector('.nt-plus')) {
    const plus = el('button', { type: 'button', class: 'nt-icon nt-plus', 'aria-label': '더보기 메뉴' }, ICON.plus)
    plus.addEventListener('click', (e) => { e.stopPropagation(); openPlusMenu(plus) })
    const wrap = row.querySelector('[class*="_inputWrapper_"]')
    row.insertBefore(plus, wrap ?? row.firstChild)
  }

  let bar = box.querySelector(':scope > .nt-row') as HTMLElement | null
  if (!bar) {
    bar = el('div', { class: 'nt-row' })
    const group = el('div', { class: 'nt-group' })
    const regen = el('button', { type: 'button', 'aria-label': '다시 생성' }, ICON.regen)
    regen.addEventListener('click', () => press('Regenerate'))
    const star = el('button', { type: 'button', 'aria-label': '별표 넣기' }, ICON.star)
    star.addEventListener('mousedown', (e) => e.preventDefault())
    star.addEventListener('click', () => insertAtCursor('*'))
    const opts = el('button', { type: 'button', 'aria-label': '프리셋 옵션', class: 'nt-opts' }, ICON.sliders)
    opts.addEventListener('click', () => press('Prompt Variables'))
    group.append(regen, star, opts)

    const persona = el('button', { type: 'button', class: 'nt-chipbtn nt-persona', 'aria-label': '페르소나 바꾸기' }, `${ICON.user}<span class="nt-label">내 정보</span>`)
    persona.addEventListener('click', () => press('Switch persona'))
    const model = el('button', { type: 'button', class: 'nt-chipbtn nt-model', 'aria-label': '모델 바꾸기' }, `<span class="nt-label"></span><span class="nt-sep"></span>${ICON.swap}`)
    model.addEventListener('click', () => press('Connection'))
    bar.append(group, persona, el('span', { class: 'nt-spacer' }), model)
    row.after(bar)
  }

  // live labels / availability
  const conn = labelOf(native('Connection'))
  const name = prettyModel(conn.replace(/^Connection:\s*/i, '')) || '모델'
  const lab = bar.querySelector('.nt-model .nt-label') as HTMLElement
  if (lab && lab.textContent !== name) lab.textContent = name
  const opts = bar.querySelector('.nt-opts') as HTMLElement
  if (opts) opts.style.display = native('Prompt Variables') ? '' : 'none'
}

function ensureTopBar() {
  const tb = document.querySelector('[class*="_chatToolbar_"]') as HTMLElement | null
  if (!tb) return
  if (getComputedStyle(tb).position === 'static') tb.style.position = 'relative'
  if (!tb.querySelector('.nt-back')) {
    const back = el('button', { type: 'button', class: 'nt-back', 'aria-label': '홈으로' }, ICON.back)
    back.addEventListener('click', () => press('Back to home'))
    tb.append(back, el('div', { class: 'nt-title' }))
  }
  const names = document.querySelectorAll('[data-part="character"] [class*="_nameChar_"]')
  const title = names.length ? (names[names.length - 1].textContent ?? '').trim() : ''
  const t = tb.querySelector('.nt-title') as HTMLElement
  if (t && t.textContent !== title) t.textContent = title
}

function ensureFolds() {
  const islands = document.querySelectorAll('[data-component="BubbleMessage"] [class*="_htmlIsland_"]:not([data-nt-checked])')
  islands.forEach((node) => {
    const isl = node as HTMLElement
    const h = isl.scrollHeight
    if (h < 10) return // not rendered yet; check again later
    isl.setAttribute('data-nt-checked', '1')
    if (h <= FOLD_OVER) return
    if (isl.querySelector('button, input, select, textarea')) return // interactive panels stay open
    isl.classList.add('nt-fold')
    const btn = el('button', { type: 'button', class: 'nt-fold-btn', 'aria-expanded': 'false' }, `<span>펼치기</span>${ICON.chevron}`)
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true'
      btn.setAttribute('aria-expanded', String(open))
      isl.classList.toggle('nt-fold', !open)
      btn.querySelector('span')!.textContent = open ? '접기' : '펼치기'
    })
    isl.after(btn)
  })
}

export function install(addStyle: (css: string) => () => void): () => void {
  const removeStyle = addStyle(CSS)
  let queued = false
  const tick = () => {
    queued = false
    try { ensureComposer(); ensureTopBar(); ensureMessageTools(); ensureFolds() } catch (e) { console.warn('[novel-theme]', e) }
  }
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(tick) } }
  const mo = new MutationObserver(schedule)
  mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-label', 'title'] })
  schedule()
  const iv = setInterval(schedule, 2000)
  return () => {
    mo.disconnect(); clearInterval(iv); removeStyle(); closeMenu()
    document.querySelectorAll('.nt-row,.nt-plus,.nt-back,.nt-title,.nt-fold-btn,.nt-msg-more').forEach((n) => n.remove())
    document.querySelectorAll('.nt-msg-hidden').forEach((n) => n.classList.remove('nt-msg-hidden'))
    document.querySelectorAll('.nt-fold').forEach((n) => n.classList.remove('nt-fold'))
    document.querySelectorAll('[data-nt-checked]').forEach((n) => n.removeAttribute('data-nt-checked'))
  }
}
