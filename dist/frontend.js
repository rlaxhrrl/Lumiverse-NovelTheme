// src/style.ts
var CSS = String.raw`
:root{
  --nt-accent:#ff8a3d;
  --nt-cta:#ff6b6b;
  --nt-cta-bg:color-mix(in srgb,#ff5c5c 16%,transparent);
  --nt-chip:color-mix(in srgb,var(--lumiverse-text) 9%,transparent);
  --nt-glass:color-mix(in srgb,var(--lumiverse-bg-deep) 55%,transparent);
  --nt-glass-border:color-mix(in srgb,var(--lumiverse-text) 14%,transparent);
  --nt-line:color-mix(in srgb,var(--lumiverse-text) 10%,transparent);
  --nt-muted:var(--lumiverse-text-muted);
}

/* ---------- messages: no bubbles, one column, thin dividers ---------- */
[data-component="BubbleMessage"][class*="_card_"]{
  background:transparent!important;box-shadow:none!important;border:none!important;border-radius:0!important;
  border-bottom:1px solid var(--nt-line)!important;padding-bottom:8px;
}
[data-component="BubbleMessage"] [class*="_avatarBg_"]{display:none!important}
[data-component="BubbleMessage"] [class*="_bubble_"]{background:transparent!important;border:none!important;box-shadow:none!important}
/* my messages start on the left like the character's */
[data-part="user"] [class*="_header_"],
[data-part="user"] [class*="_headerLeft_"]{flex-direction:row!important;justify-content:flex-start!important;text-align:left!important;margin-left:0!important}
[data-part="user"] [class*="_metaWrap_"]{align-items:flex-start!important;text-align:left!important}
[data-part="user"] [class*="_name_"]{text-align:left!important}
[data-part="user"] [class*="_content_"]{text-align:left!important;margin-left:0!important}
/* small profile picture and name */
[data-component="BubbleMessage"] [class*="_avatar_"]{width:28px!important;height:28px!important}
[data-component="BubbleMessage"] [class*="_avatar_"] img{width:28px!important;height:28px!important;border-radius:50%!important}
[data-component="BubbleMessage"] [class*="_name_"]{font-size:13px!important;font-weight:600!important}
/* number · time · tokens: only on hover / tap */
[data-component="BubbleMessage"] [class*="_metaPill_"]{opacity:0;transition:opacity .15s;background:transparent!important}
[data-component="BubbleMessage"]:hover [class*="_metaPill_"],
[data-component="BubbleMessage"]:focus-within [class*="_metaPill_"]{opacity:.8}

/* message tools: copy · edit · fork · delete always; the rest on hover / tap */
[data-component="BubbleMessage"] [class*="_actionsPill_"]{
  opacity:1!important;left:auto!important;right:8px!important;background:transparent!important;
  box-shadow:none!important;border:none!important;backdrop-filter:none!important;color:var(--nt-muted)!important;
}
[data-component="BubbleMessage"] [class*="_actionsPill_"] button{width:32px!important;height:32px!important;border-radius:10px!important}
[data-component="BubbleMessage"] [class*="_actionsPill_"] button svg{width:16px!important;height:16px!important}
/* hide / anchor / prompt breakdown live in the ⋯ menu, so the row never shifts */
[data-component="BubbleMessage"] [class*="_actionsPill_"] .nt-msg-hidden{display:none!important}
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Hide"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Unhide"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Protect context"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Unprotect"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Remove anchor"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label^="Prompt Breakdown"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Hide"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Unhide"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Protect context"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Unprotect"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Remove anchor"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title^="Prompt Breakdown"]{display:none!important}
[data-component="BubbleMessage"] [class*="_actionsPill_"] .nt-msg-more{display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;color:inherit;cursor:pointer;padding:0}
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[aria-label="Delete"],
[data-component="BubbleMessage"] [class*="_actionsPill_"] button[title="Delete"]{margin-left:6px;color:var(--lumiverse-danger)!important;opacity:.85}

/* swipe ‹ 1/3 › as a small pill */
[data-component="BubbleMessage"] [class*="_controls_"]{
  background:var(--nt-chip)!important;border:1px solid var(--nt-glass-border)!important;border-radius:999px!important;padding:2px!important;
}

/* ---------- body text: like a book ---------- */
[data-component="BubbleMessage"] [class*="_prose_"]{font-size:16px;line-height:1.85;word-break:keep-all;overflow-wrap:anywhere}
[data-component="BubbleMessage"] [class*="_prose_"] p{margin:0 0 .95em}
[data-component="BubbleMessage"] [class*="_prose_"] p:last-child{margin-bottom:0}
@media (min-width:900px){
  [data-component="BubbleMessage"] [class*="_prose_"]{font-size:16.5px;line-height:1.9}
}

/* ---------- long status windows: folded ---------- */
.nt-fold{position:relative;max-height:var(--nt-fold-h,96px);overflow:hidden!important;border-radius:14px}
.nt-fold::after{content:"";position:absolute;left:0;right:0;bottom:0;height:40px;pointer-events:none;
  background:linear-gradient(transparent,var(--lumiverse-bg-deep))}
.nt-fold-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;margin:6px 0 2px;padding:8px 12px;
  border:1px solid var(--nt-glass-border);border-radius:12px;background:var(--nt-chip);color:var(--nt-muted);font:inherit;font-size:13px;cursor:pointer}
.nt-fold-btn svg{width:14px;height:14px;transition:transform .15s}
.nt-fold-btn[aria-expanded="true"] svg{transform:rotate(180deg)}

/* ---------- top bar: floating glass ---------- */
[class*="_chatToolbar_"]{background:transparent!important;border:none!important;box-shadow:none!important}
[class*="_chatToolbar_"] [class*="_nativeDockActions_"]{
  background:var(--nt-glass);border:1px solid var(--nt-glass-border);border-radius:999px;padding:3px;gap:2px;
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
}
[class*="_chatToolbar_"] [class*="_toolbarBtn_"]{width:34px!important;height:34px!important;border-radius:999px!important}
.nt-back{position:absolute;left:12px;top:4px;z-index:5;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  background:var(--nt-glass);border:1px solid var(--nt-glass-border);color:var(--lumiverse-text);cursor:pointer;
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.nt-back svg{width:19px;height:19px}
.nt-title{position:absolute;left:64px;right:120px;top:4px;height:40px;display:flex;align-items:center;justify-content:center;
  font-size:15px;font-weight:600;color:var(--nt-muted);pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

/* ---------- composer ---------- */
[class*="_container_8z0ce"]{
  display:flex!important;flex-direction:column!important;gap:10px!important;
  border-radius:26px 26px 0 0!important;padding:12px 14px calc(14px + env(safe-area-inset-bottom))!important;
}
/* native toolbar stays in the page (our buttons press it) but is not shown */
[class*="_container_8z0ce"] [class*="_actionBar_"]{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;clip:rect(0 0 0 0)}
[class*="_container_8z0ce"] [class*="_inputRow_"]{order:1;align-items:center!important;gap:6px!important}
.nt-row{order:2}
[class*="_container_8z0ce"] [class*="_popoverSlot_"]{order:0}
/* attach / mic move into the + menu */
[class*="_inputRow_"] button[aria-label="Attach file"],
[class*="_inputRow_"] button[aria-label="Start speech-to-text"],
[class*="_inputRow_"] button[aria-label="Stop speech-to-text"]{display:none!important}
[class*="_inputRow_"] textarea{font-size:16px!important;background:transparent!important}
[class*="_inputWrapper_"]{background:transparent!important;border:none!important;box-shadow:none!important}

/* send button: empty box = "▶ 이어서" (new message), typing = send arrow */
[class*="_sendBtnShell_"]{width:auto!important}
[class*="_sendBtn_"]{border-radius:999px!important}
[class*="_sendBtn_"][aria-label="Nudge for a fresh reply"]{
  width:auto!important;padding:0 16px!important;gap:6px;background:var(--nt-cta-bg)!important;color:var(--nt-cta)!important;border:none!important;
}
[class*="_sendBtn_"][aria-label="Nudge for a fresh reply"] [class*="_sendBtnIcon_"]{display:none!important}
[class*="_sendBtn_"][aria-label="Nudge for a fresh reply"]::before{content:"";width:0;height:0;border-left:11px solid currentColor;border-top:7px solid transparent;border-bottom:7px solid transparent}
[class*="_sendBtn_"][aria-label="Nudge for a fresh reply"]::after{content:"이어서";font-size:15px;font-weight:700;white-space:nowrap}

/* our buttons */
.nt-icon{width:40px;height:40px;flex-shrink:0;border:none;border-radius:50%;background:transparent;color:var(--nt-muted);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}
.nt-icon svg{width:21px;height:21px}
.nt-row{display:flex;align-items:center;gap:8px;min-width:0}
.nt-group{display:flex;align-items:center;background:var(--nt-chip);border-radius:999px;padding:3px}
.nt-group button{width:42px;height:36px;border:none;background:transparent;color:var(--nt-muted);border-radius:999px;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;font:inherit}
.nt-group button svg{width:17px;height:17px}
.nt-chipbtn{height:42px;padding:0 14px;border:none;border-radius:999px;background:var(--nt-chip);color:var(--nt-muted);display:flex;align-items:center;gap:7px;cursor:pointer;font:inherit;font-size:14px;white-space:nowrap;min-width:0}
.nt-chipbtn svg{width:16px;height:16px;flex-shrink:0}
.nt-chipbtn .nt-sep{width:1px;height:18px;background:var(--nt-line)}
.nt-chipbtn .nt-label{overflow:hidden;text-overflow:ellipsis;max-width:110px}
@media (max-width:430px){.nt-persona{padding:0 13px}.nt-persona .nt-label{display:none}}
.nt-spacer{flex:1}
.nt-group button:active,.nt-chipbtn:active,.nt-icon:active,.nt-back:active{transform:scale(.94)}

/* + menu */
.nt-menu{position:fixed;z-index:9999;min-width:200px;padding:6px;border-radius:16px;background:var(--lumiverse-bg-elevated);
  border:1px solid var(--nt-glass-border);box-shadow:0 12px 40px rgba(0,0,0,.35);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}
.nt-menu button{display:flex;align-items:center;gap:10px;width:100%;padding:11px 12px;border:none;border-radius:10px;background:transparent;color:var(--lumiverse-text);font:inherit;font-size:14px;text-align:left;cursor:pointer}
.nt-menu button:hover{background:var(--nt-chip)}
.nt-menu button svg{width:17px;height:17px;color:var(--nt-muted)}
`;

// src/theme.ts
var I = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;
var ICON = {
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
  gear: I('<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>')
};
var FOLD_OVER = 200;
function el(tag, attrs = {}, html = "") {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs))
    e.setAttribute(k, v);
  if (html)
    e.innerHTML = html;
  return e;
}
function find(scope, label) {
  return scope.querySelector(`button[aria-label="${label}"], button[title="${label}"]`) ?? scope.querySelector(`button[aria-label^="${label}"], button[title^="${label}"]`);
}
function native(label) {
  const bar = document.querySelector('[class*="_actionBar_"]');
  return (bar && find(bar, label)) ?? find(document, label);
}
function labelOf(b) {
  return b?.getAttribute("aria-label") || b?.getAttribute("title") || "";
}
function prettyModel(id) {
  const m = /^gemini-(.+)$/i.exec(id.trim());
  if (!m)
    return id.trim();
  return m[1].split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function press(label) {
  const b = native(label);
  b?.click();
  return !!b;
}
function insertAtCursor(text) {
  const ta = document.querySelector('[class*="_inputRow_"] textarea');
  if (!ta)
    return;
  const start = ta.selectionStart ?? ta.value.length;
  const end = ta.selectionEnd ?? ta.value.length;
  const next = ta.value.slice(0, start) + text + ta.value.slice(end);
  const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set;
  setter.call(ta, next);
  ta.dispatchEvent(new Event("input", { bubbles: true }));
  ta.focus();
  const pos = start + text.length;
  requestAnimationFrame(() => ta.setSelectionRange(pos, pos));
}
var menuEl = null;
function closeMenu() {
  menuEl?.remove();
  menuEl = null;
}
function openMenu(anchor, items, below = false) {
  if (menuEl) {
    closeMenu();
    return;
  }
  const m = el("div", { class: "nt-menu", role: "menu" });
  for (const [label, icon, run] of items) {
    const b = el("button", { type: "button", role: "menuitem" }, `${icon}<span></span>`);
    b.querySelector("span").textContent = label;
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
      setTimeout(run, 0);
    });
    m.append(b);
  }
  document.body.append(m);
  const r = anchor.getBoundingClientRect();
  const h = m.offsetHeight;
  const w = m.offsetWidth;
  const left = below ? r.right - w : r.left;
  m.style.left = `${Math.max(8, Math.min(left, innerWidth - w - 8))}px`;
  const top = below && r.bottom + h + 8 < innerHeight ? r.bottom + 6 : r.top - h - 8;
  m.style.top = `${Math.max(8, top)}px`;
  menuEl = m;
  setTimeout(() => document.addEventListener("click", closeMenu, { once: true }), 0);
}
var MSG_EXTRA = [
  [/^Hide/, "AI에게서 숨기기", I('<path d="M9.9 4.2A10 10 0 0 1 12 4c7 0 10 8 10 8a13 13 0 0 1-1.7 2.7"/><path d="M6.6 6.6A13 13 0 0 0 2 12s3 8 10 8a9.7 9.7 0 0 0 5.4-1.6"/><path d="M2 2l20 20"/>')],
  [/^Unhide/, "숨김 해제", I('<path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"/><circle cx="12" cy="12" r="3"/>')],
  [/^Protect context/, "앵커 걸기 (맥락 보호)", I('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],
  [/^(Unprotect|Remove anchor|Stop protecting)/, "앵커 해제", I('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],
  [/^Prompt Breakdown/, "프롬프트 통계", I('<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>')]
];
function extraButtons(pill) {
  const out = [];
  pill.querySelectorAll("button:not(.nt-msg-more)").forEach((b) => {
    const lab = labelOf(b);
    const hit = MSG_EXTRA.find(([re]) => re.test(lab));
    if (hit)
      out.push([b, hit[1], hit[2]]);
  });
  return out;
}
function ensureMessageTools() {
  document.querySelectorAll('[data-component="BubbleMessage"] [class*="_actionsPill_"]').forEach((pill) => {
    const extras = extraButtons(pill);
    pill.querySelectorAll("button:not(.nt-msg-more)").forEach((b) => {
      b.classList.toggle("nt-msg-hidden", extras.some(([x]) => x === b));
    });
    let more = pill.querySelector(".nt-msg-more");
    if (!extras.length) {
      more?.remove();
      return;
    }
    if (!more) {
      more = el("button", { type: "button", class: "nt-msg-more", "aria-label": "메시지 메뉴 더보기", title: "더보기" }, ICON.more);
      more.addEventListener("click", (e) => {
        e.stopPropagation();
        const items = extraButtons(pill).map(([b, label, icon]) => [label, icon, () => b.click()]);
        openMenu(more, items, true);
      });
    }
    const del = Array.from(pill.querySelectorAll("button")).find((b) => /^Delete/.test(labelOf(b)));
    if (del && more.nextElementSibling !== del)
      pill.insertBefore(more, del);
    else if (!del && more.parentElement !== pill)
      pill.append(more);
  });
}
function openPlusMenu(anchor) {
  const items = [
    ["이어쓰기 (마지막 답변에 덧붙이기)", ICON.cont, () => press("Continue")],
    ["대사 대신 쓰기", ICON.chat, () => press("Impersonate")],
    ["빠른 답장", ICON.quote, () => press("Quick replies")],
    ["가이드 생성", ICON.compass, () => press("Guided generations")],
    ["페르소나 애드온", ICON.addon, () => press("Persona add-ons")],
    ["파일 첨부", ICON.clip, () => press("Attach file")],
    ["음성 입력", ICON.mic, () => press("Start speech-to-text")],
    ["도구", ICON.wrench, () => press("Tools")],
    ["더보기", ICON.more, () => press("Extras")],
    ["버튼 설정", ICON.gear, () => press("Customize composer")]
  ];
  openMenu(anchor, items);
}
function ensureComposer() {
  const row = document.querySelector('[class*="_inputRow_"]');
  const box = row?.parentElement;
  if (!row || !box)
    return;
  if (!row.querySelector(".nt-plus")) {
    const plus = el("button", { type: "button", class: "nt-icon nt-plus", "aria-label": "더보기 메뉴" }, ICON.plus);
    plus.addEventListener("click", (e) => {
      e.stopPropagation();
      openPlusMenu(plus);
    });
    const wrap = row.querySelector('[class*="_inputWrapper_"]');
    row.insertBefore(plus, wrap ?? row.firstChild);
  }
  let bar = box.querySelector(":scope > .nt-row");
  if (!bar) {
    bar = el("div", { class: "nt-row" });
    const group = el("div", { class: "nt-group" });
    const regen = el("button", { type: "button", "aria-label": "다시 생성" }, ICON.regen);
    regen.addEventListener("click", () => press("Regenerate"));
    const star = el("button", { type: "button", "aria-label": "별표 넣기" }, ICON.star);
    star.addEventListener("mousedown", (e) => e.preventDefault());
    star.addEventListener("click", () => insertAtCursor("*"));
    const opts = el("button", { type: "button", "aria-label": "프리셋 옵션", class: "nt-opts" }, ICON.sliders);
    opts.addEventListener("click", () => press("Prompt Variables"));
    group.append(regen, star, opts);
    const persona = el("button", { type: "button", class: "nt-chipbtn nt-persona", "aria-label": "페르소나 바꾸기" }, `${ICON.user}<span class="nt-label">내 정보</span>`);
    persona.addEventListener("click", () => press("Switch persona"));
    const model = el("button", { type: "button", class: "nt-chipbtn nt-model", "aria-label": "모델 바꾸기" }, `<span class="nt-label"></span><span class="nt-sep"></span>${ICON.swap}`);
    model.addEventListener("click", () => press("Connection"));
    bar.append(group, persona, el("span", { class: "nt-spacer" }), model);
    row.after(bar);
  }
  const conn = labelOf(native("Connection"));
  const name = prettyModel(conn.replace(/^Connection:\s*/i, "")) || "모델";
  const lab = bar.querySelector(".nt-model .nt-label");
  if (lab && lab.textContent !== name)
    lab.textContent = name;
  const opts = bar.querySelector(".nt-opts");
  if (opts)
    opts.style.display = native("Prompt Variables") ? "" : "none";
}
function ensureTopBar() {
  const tb = document.querySelector('[class*="_chatToolbar_"]');
  if (!tb)
    return;
  if (getComputedStyle(tb).position === "static")
    tb.style.position = "relative";
  if (!tb.querySelector(".nt-back")) {
    const back = el("button", { type: "button", class: "nt-back", "aria-label": "홈으로" }, ICON.back);
    back.addEventListener("click", () => press("Back to home"));
    tb.append(back, el("div", { class: "nt-title" }));
  }
  const names = document.querySelectorAll('[data-part="character"] [class*="_nameChar_"]');
  const title = names.length ? (names[names.length - 1].textContent ?? "").trim() : "";
  const t = tb.querySelector(".nt-title");
  if (t && t.textContent !== title)
    t.textContent = title;
}
function ensureFolds() {
  const islands = document.querySelectorAll('[data-component="BubbleMessage"] [class*="_htmlIsland_"]:not([data-nt-checked])');
  islands.forEach((node) => {
    const isl = node;
    const h = isl.scrollHeight;
    if (h < 10)
      return;
    isl.setAttribute("data-nt-checked", "1");
    if (h <= FOLD_OVER)
      return;
    if (isl.querySelector("button, input, select, textarea"))
      return;
    isl.classList.add("nt-fold");
    const btn = el("button", { type: "button", class: "nt-fold-btn", "aria-expanded": "false" }, `<span>펼치기</span>${ICON.chevron}`);
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      isl.classList.toggle("nt-fold", !open);
      btn.querySelector("span").textContent = open ? "접기" : "펼치기";
    });
    isl.after(btn);
  });
}
function install(addStyle) {
  const removeStyle = addStyle(CSS);
  let queued = false;
  const tick = () => {
    queued = false;
    try {
      ensureComposer();
      ensureTopBar();
      ensureMessageTools();
      ensureFolds();
    } catch (e) {
      console.warn("[novel-theme]", e);
    }
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(tick);
    }
  };
  const mo = new MutationObserver(schedule);
  mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-label", "title"] });
  schedule();
  const iv = setInterval(schedule, 2000);
  return () => {
    mo.disconnect();
    clearInterval(iv);
    removeStyle();
    closeMenu();
    document.querySelectorAll(".nt-row,.nt-plus,.nt-back,.nt-title,.nt-fold-btn,.nt-msg-more").forEach((n) => n.remove());
    document.querySelectorAll(".nt-msg-hidden").forEach((n) => n.classList.remove("nt-msg-hidden"));
    document.querySelectorAll(".nt-fold").forEach((n) => n.classList.remove("nt-fold"));
    document.querySelectorAll("[data-nt-checked]").forEach((n) => n.removeAttribute("data-nt-checked"));
  };
}

// src/frontend.ts
function setup(ctx) {
  const remove = install((css) => ctx.dom.addStyle(css));
  return () => remove();
}
export {
  setup
};
