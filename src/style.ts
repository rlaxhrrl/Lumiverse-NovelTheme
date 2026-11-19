// Novel Theme — all visual rules. Colours come from Lumiverse's own theme variables,
// so the same rules work in dark and light mode.
export const CSS = String.raw`
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
[data-component="BubbleMessage"] [class*="_prose_"]{font-size:16px;line-height:1.85;word-break:normal;line-break:strict;overflow-wrap:anywhere;text-align:justify;text-justify:inter-character}
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
`
