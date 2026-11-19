(()=>{var y=String.raw`
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

[data-component="BubbleMessage"] .nt-regen{display:inline-flex;align-items:center;justify-content:center;width:30px;height:28px;margin-right:4px;border:none;border-right:1px solid var(--nt-line);border-radius:999px 0 0 999px;background:transparent;color:inherit;cursor:pointer;padding:0 2px 0 0;opacity:.8}
[data-component="BubbleMessage"] [class*="_actionsPill_"] .nt-regen{border-right:none;border-radius:10px;width:32px;height:32px;margin-right:0}
[data-component="BubbleMessage"] .nt-regen svg{width:15px;height:15px}
[data-component="BubbleMessage"] .nt-regen:active{transform:scale(.92)}

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
`;var r=(e,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${t}>${e}</svg>`,l={back:r('<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>'),plus:r('<path d="M12 5v14"/><path d="M5 12h14"/>'),regen:r('<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>'),star:r('<path d="M12 4v16"/><path d="M5.1 8l13.8 8"/><path d="M18.9 8L5.1 16"/>',' stroke-width="2.2"'),sliders:r('<path d="M4 7h10"/><path d="M18 7h2"/><circle cx="16" cy="7" r="2"/><path d="M4 17h2"/><path d="M10 17h10"/><circle cx="8" cy="17" r="2"/>'),user:r('<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),swap:r('<path d="M7 7h12l-3-3"/><path d="M17 17H5l3 3"/>'),chevron:r('<path d="M6 9l6 6 6-6"/>'),cont:r('<path d="M9 10l-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>'),quote:r('<path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/>'),chat:r('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),compass:r('<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z"/>'),addon:r('<path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="M18 9v6"/><path d="M21 12h-6"/>'),wrench:r('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),more:r('<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'),clip:r('<path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>'),mic:r('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0"/><path d="M12 19v3"/>'),gear:r('<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>')},L=200;function p(e,t={},n=""){let o=document.createElement(e);for(let[a,s]of Object.entries(t))o.setAttribute(a,s);if(n)o.innerHTML=n;return o}function w(e,t){return e.querySelector(`button[aria-label="${t}"], button[title="${t}"]`)??e.querySelector(`button[aria-label^="${t}"], button[title^="${t}"]`)}function v(e){let t=document.querySelector('[class*="_actionBar_"]');return(t&&w(t,e))??w(document,e)}function M(e){return e?.getAttribute("aria-label")||e?.getAttribute("title")||""}function H(e){let t=/^gemini-(.+)$/i.exec(e.trim());if(!t)return e.trim();return t[1].split("-").map((n)=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}function c(e){let t=v(e);return t?.click(),!!t}function P(e){let t=document.querySelector('[class*="_inputRow_"] textarea');if(!t)return;let n=t.selectionStart??t.value.length,o=t.selectionEnd??t.value.length,a=t.value.slice(0,n)+e+t.value.slice(o);Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value").set.call(t,a),t.dispatchEvent(new Event("input",{bubbles:!0})),t.focus();let d=n+e.length;requestAnimationFrame(()=>t.setSelectionRange(d,d))}var f=null;function x(){f?.remove(),f=null}function B(e,t,n=!1){if(f){x();return}let o=p("div",{class:"nt-menu",role:"menu"});for(let[m,h,g]of t){let b=p("button",{type:"button",role:"menuitem"},`${h}<span></span>`);b.querySelector("span").textContent=m,b.addEventListener("click",(S)=>{S.stopPropagation(),x(),setTimeout(g,0)}),o.append(b)}document.body.append(o);let a=e.getBoundingClientRect(),{offsetHeight:s,offsetWidth:d}=o,i=n?a.right-d:a.left;o.style.left=`${Math.max(8,Math.min(i,innerWidth-d-8))}px`;let u=n&&a.bottom+s+8<innerHeight?a.bottom+6:a.top-s-8;o.style.top=`${Math.max(8,u)}px`,f=o,setTimeout(()=>document.addEventListener("click",x,{once:!0}),0)}var q=[[/^Hide/,"AI에게서 숨기기",r('<path d="M9.9 4.2A10 10 0 0 1 12 4c7 0 10 8 10 8a13 13 0 0 1-1.7 2.7"/><path d="M6.6 6.6A13 13 0 0 0 2 12s3 8 10 8a9.7 9.7 0 0 0 5.4-1.6"/><path d="M2 2l20 20"/>')],[/^Unhide/,"숨김 해제",r('<path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"/><circle cx="12" cy="12" r="3"/>')],[/^Protect context/,"앵커 걸기 (맥락 보호)",r('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],[/^(Unprotect|Remove anchor|Stop protecting)/,"앵커 해제",r('<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>')],[/^Prompt Breakdown/,"프롬프트 통계",r('<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>')]];function k(e){let t=[];return e.querySelectorAll("button:not(.nt-msg-more)").forEach((n)=>{let o=M(n),a=q.find(([s])=>s.test(o));if(a)t.push([n,a[1],a[2]])}),t}function T(){document.querySelectorAll('[data-component="BubbleMessage"] [class*="_actionsPill_"]').forEach((e)=>{let t=k(e);e.querySelectorAll("button:not(.nt-msg-more)").forEach((a)=>{a.classList.toggle("nt-msg-hidden",t.some(([s])=>s===a))});let n=e.querySelector(".nt-msg-more");if(!t.length){n?.remove();return}if(!n)n=p("button",{type:"button",class:"nt-msg-more","aria-label":"메시지 메뉴 더보기",title:"더보기"},l.more),n.addEventListener("click",(a)=>{a.stopPropagation();let s=k(e).map(([d,i,u])=>[i,u,()=>d.click()]);B(n,s,!0)});let o=Array.from(e.querySelectorAll("button")).find((a)=>/^Delete/.test(M(a)));if(o&&n.nextElementSibling!==o)e.insertBefore(n,o);else if(!o&&n.parentElement!==e)e.append(n)})}function A(){let e=document.querySelectorAll('[data-component="BubbleMessage"][data-part="character"]'),t=e[e.length-1];if(document.querySelectorAll(".nt-regen").forEach((a)=>{if(!t||!t.contains(a))a.remove()}),!t||t.querySelector(".nt-regen"))return;let n=t.querySelector('[class*="_controls_"]')??t.querySelector('[class*="_actionsPill_"]');if(!n)return;let o=p("button",{type:"button",class:"nt-regen","aria-label":"다시 생성",title:"다시 생성"},l.regen);o.addEventListener("click",(a)=>{a.stopPropagation(),c("Regenerate")}),n.prepend(o)}function C(e){let t=[["이어쓰기 (마지막 답변에 덧붙이기)",l.cont,()=>c("Continue")],["대사 대신 쓰기",l.chat,()=>c("Impersonate")],["빠른 답장",l.quote,()=>c("Quick replies")],["가이드 생성",l.compass,()=>c("Guided generations")],["페르소나 애드온",l.addon,()=>c("Persona add-ons")],["파일 첨부",l.clip,()=>c("Attach file")],["음성 입력",l.mic,()=>c("Start speech-to-text")],["도구",l.wrench,()=>c("Tools")],["더보기",l.more,()=>c("Extras")],["버튼 설정",l.gear,()=>c("Customize composer")]];B(e,t)}function R(){let e=document.querySelector('[class*="_inputRow_"]'),t=e?.parentElement;if(!e||!t)return;if(!e.querySelector(".nt-plus")){let i=p("button",{type:"button",class:"nt-icon nt-plus","aria-label":"더보기 메뉴"},l.plus);i.addEventListener("click",(m)=>{m.stopPropagation(),C(i)});let u=e.querySelector('[class*="_inputWrapper_"]');e.insertBefore(i,u??e.firstChild)}let n=t.querySelector(":scope > .nt-row");if(!n){n=p("div",{class:"nt-row"});let i=p("div",{class:"nt-group"}),u=p("button",{type:"button","aria-label":"별표 넣기"},l.star);u.addEventListener("mousedown",(b)=>b.preventDefault()),u.addEventListener("click",()=>P("*"));let m=p("button",{type:"button","aria-label":"프리셋 옵션",class:"nt-opts"},l.sliders);m.addEventListener("click",()=>c("Prompt Variables")),i.append(u,m);let h=p("button",{type:"button",class:"nt-chipbtn nt-persona","aria-label":"페르소나 바꾸기"},`${l.user}<span class="nt-label">내 정보</span>`);h.addEventListener("click",()=>c("Switch persona"));let g=p("button",{type:"button",class:"nt-chipbtn nt-model","aria-label":"모델 바꾸기"},`<span class="nt-label"></span><span class="nt-sep"></span>${l.swap}`);g.addEventListener("click",()=>c("Connection")),n.append(i,h,p("span",{class:"nt-spacer"}),g),e.after(n)}let o=M(v("Connection")),a=H(o.replace(/^Connection:\s*/i,""))||"모델",s=n.querySelector(".nt-model .nt-label");if(s&&s.textContent!==a)s.textContent=a;let d=n.querySelector(".nt-opts");if(d)d.style.display=v("Prompt Variables")?"":"none"}function z(){let e=document.querySelector('[class*="_chatToolbar_"]');if(!e)return;if(getComputedStyle(e).position==="static")e.style.position="relative";if(!e.querySelector(".nt-back")){let a=p("button",{type:"button",class:"nt-back","aria-label":"홈으로"},l.back);a.addEventListener("click",()=>c("Back to home")),e.append(a,p("div",{class:"nt-title"}))}let t=document.querySelectorAll('[data-part="character"] [class*="_nameChar_"]'),n=t.length?(t[t.length-1].textContent??"").trim():"",o=e.querySelector(".nt-title");if(o&&o.textContent!==n)o.textContent=n}function j(){document.querySelectorAll('[data-component="BubbleMessage"] [class*="_htmlIsland_"]:not([data-nt-checked])').forEach((t)=>{let n=t,o=n.scrollHeight;if(o<10)return;if(n.setAttribute("data-nt-checked","1"),o<=L)return;if(n.querySelector("button, input, select, textarea"))return;n.classList.add("nt-fold");let a=p("button",{type:"button",class:"nt-fold-btn","aria-expanded":"false"},`<span>펼치기</span>${l.chevron}`);a.addEventListener("click",()=>{let s=a.getAttribute("aria-expanded")!=="true";a.setAttribute("aria-expanded",String(s)),n.classList.toggle("nt-fold",!s),a.querySelector("span").textContent=s?"접기":"펼치기"}),n.after(a)})}function E(e){let t=e(y),n=!1,o=()=>{n=!1;try{R(),z(),T(),A(),j()}catch(i){console.warn("[novel-theme]",i)}},a=()=>{if(!n)n=!0,requestAnimationFrame(o)},s=new MutationObserver(a);s.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-label","title"]}),a();let d=setInterval(a,2000);return()=>{s.disconnect(),clearInterval(d),t(),x(),document.querySelectorAll(".nt-row,.nt-plus,.nt-back,.nt-title,.nt-fold-btn,.nt-msg-more,.nt-regen").forEach((i)=>i.remove()),document.querySelectorAll(".nt-msg-hidden").forEach((i)=>i.classList.remove("nt-msg-hidden")),document.querySelectorAll(".nt-fold").forEach((i)=>i.classList.remove("nt-fold")),document.querySelectorAll("[data-nt-checked]").forEach((i)=>i.removeAttribute("data-nt-checked"))}}var _=window;if(_.__ntRemove)_.__ntRemove(),_.__ntRemove=void 0;else _.__ntRemove=E((e)=>{let t=document.createElement("style");return t.id="nt-preview-style",t.textContent=e,document.head.append(t),()=>t.remove()});})();
