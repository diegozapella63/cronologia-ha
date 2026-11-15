/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{(()=>{if(typeof window>"u"||window.__selectSheet)return;let o=window.__selectSheet={theme:null,icon:null,isOpen:()=>!!e},e=null,t=0,a=null,s=`
select:not([multiple]){pointer-events:none}
.ss-wrap{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;font-family:var(--ss-font);-webkit-tap-highlight-color:transparent}
dialog.ss-wrap{width:auto;height:auto;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;color:inherit;overflow:visible}
dialog.ss-wrap::backdrop{background:transparent}
.ss-back{position:absolute;inset:0;background:var(--ss-scrim);opacity:0;transition:opacity .18s}
.ss-sheet{position:relative;width:100%;max-width:560px;max-height:min(72vh,640px);display:flex;flex-direction:column;background:var(--ss-bg);color:var(--ss-fg);border-radius:28px 28px 0 0;box-shadow:0 -8px 32px rgba(0,0,0,.25);transform:translateY(100%);transition:transform .2s cubic-bezier(.2,.8,.2,1);padding-bottom:env(safe-area-inset-bottom)}
.ss-wrap.out{pointer-events:none}
.ss-wrap.in .ss-back{opacity:1}
.ss-wrap.in .ss-sheet{transform:none}
.ss-grab{width:40px;height:4px;border-radius:2px;background:var(--ss-line2);margin:10px auto 2px;flex:none}
.ss-head{display:flex;align-items:center;gap:10px;padding:6px 10px 8px 16px;flex:none}
.ss-ic{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:9px;background:var(--ss-soft);color:var(--ss-a)}
.ss-ic svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.ss-head b{flex:1;font-size:17px;font-weight:600;line-height:1.25;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.ss-x{width:40px;height:40px;border-radius:50%;border:0;background:transparent;color:var(--ss-mut);display:grid;place-items:center;cursor:pointer;flex:none}
.ss-x:hover{background:var(--ss-soft2)}
.ss-x svg,.ss-opt svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.ss-list{overflow-y:auto;overscroll-behavior:contain;padding:0 10px 12px}
.ss-group{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ss-mut);padding:12px 12px 4px}
.ss-opt{display:flex;align-items:center;gap:12px;width:100%;min-height:50px;padding:10px 12px;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;font-size:16px;line-height:1.3;text-align:left;cursor:pointer}
.ss-opt span{flex:1;min-width:0;overflow-wrap:anywhere}
.ss-opt:hover,.ss-opt:focus-visible{background:var(--ss-soft2);outline:none}
.ss-opt.on{background:var(--ss-soft);font-weight:600}
.ss-opt.on svg{color:var(--ss-a)}
.ss-opt:not(.on) svg{visibility:hidden}
.ss-opt:disabled{opacity:.45;cursor:default}
@media (min-width:700px){.ss-wrap{align-items:center}.ss-sheet{max-width:440px;border-radius:28px;transform:translateY(16px) scale(.98);opacity:0;transition:transform .16s,opacity .16s}.ss-wrap.in .ss-sheet{opacity:1}.ss-grab{display:none}.ss-head{padding-top:14px}}
@media (prefers-reduced-motion:reduce){.ss-back,.ss-sheet{transition:none}}
`,i='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',r='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',l='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',d=()=>{if(document.getElementById("ss-css"))return;let b=document.createElement("style");b.id="ss-css",b.textContent=s,(document.head||document.documentElement).appendChild(b)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d();let c=b=>b.parentNode&&b.parentNode.host&&b.parentNode.nodeType===11?b.parentNode.host:b.parentNode||(b.host?b.host:null),h=b=>{let A=/rgba?\(([^)]+)\)/.exec(b||"");if(!A)return null;let E=A[1].split(/[ ,/]+/).filter(Boolean).map(Number);return{r:E[0],g:E[1],b:E[2],a:E.length>3?E[3]:1}},p=({r:b,g:A,b:E})=>(.2126*b+.7152*A+.0722*E)/255,u=(b,A)=>{let E=h(b)||(/^#([0-9a-f]{6})$/i.test(b)?{r:parseInt(b.slice(1,3),16),g:parseInt(b.slice(3,5),16),b:parseInt(b.slice(5,7),16)}:{r:100,g:160,b:240});return`rgba(${E.r},${E.g},${E.b},${A})`};function f(b){let A=getComputedStyle(b),E=V=>{for(let G of V){let F=A.getPropertyValue(G).trim();if(F)return F}return""},I=null;for(let V=b;V&&V.nodeType===1;V=c(V)){let G=h(getComputedStyle(V).backgroundColor);if(G&&G.a>.5){I=p(G)<.45;break}}I===null&&(I=!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches));let j=o.theme&&o.theme()||{};I=j.dark??I;let H=j.accent||E(["--rv-accent","--a","--accent","--cor"])||"#64b5f6",Z=j.bg||E(["--rv-surface","--surface","--card"]),he=j.fg||E(["--rv-text","--text","--fg","--ink"]),te=j.muted||E(["--rv-muted","--muted","--mut"]);return{"--ss-bg":Z||(I?"#1b2229":"#ffffff"),"--ss-fg":he||(I?"#e8edf3":"#141a22"),"--ss-mut":te||(I?"#9aa6b4":"#5b6573"),"--ss-line2":I?"rgba(255,255,255,.18)":"rgba(0,0,0,.14)","--ss-a":H,"--ss-soft":u(H,I?.22:.16),"--ss-soft2":I?"rgba(255,255,255,.06)":"rgba(0,0,0,.05)","--ss-scrim":E(["--rv-scrim","--scrim"])||"rgba(0,0,0,.45)","--ss-font":A.fontFamily||"system-ui, sans-serif"}}function x(b){let A=b.getAttribute("aria-label");if(A)return A;let E=b.getRootNode(),I=b.getAttribute("aria-labelledby");if(I&&E.getElementById){let H=I.split(/\s+/).map(Z=>(E.getElementById(Z)||{}).textContent||"").join(" ").trim();if(H)return H}if(b.id&&E.querySelector){let H=E.querySelector(`label[for="${CSS.escape(b.id)}"]`);if(H)return H.textContent.trim()}let j=b.closest("label, .field");if(j){let H=j.querySelector(".flabel, .label, legend, b, span");if(H&&!H.contains(b))return H.textContent.trim()}return""}function y(b){try{let H=o.icon&&o.icon(b);if(H)return H}catch{}let A=b.getRootNode(),E=[],I=b.getAttribute("aria-labelledby");I&&A.getElementById&&I.split(/\s+/).forEach(H=>E.push(A.getElementById(H))),b.id&&A.querySelector&&E.push(A.querySelector(`label[for="${CSS.escape(b.id)}"]`));let j=b.closest("label, .field, .campo");j&&E.push(j.querySelector("label, .lbl, .flabel, .label, legend, b, span"));for(let H of E){let Z=H&&!H.contains(b)&&H.querySelector("svg");if(Z)return Z.outerHTML}return l}function M(b){let A=b.closest?b.closest("dialog"):null;if(!A||!A.open)return!1;try{return A.matches(":modal")}catch{return!0}}function D(b){if(e||!b||b.disabled||b.multiple)return;let A=M(b),E=document.createElement(A?"dialog":"div");E.className="ss-wrap";for(let[V,G]of Object.entries(f(b)))E.style.setProperty(V,G);let I=x(b),j=document.createElement("div");j.className="ss-sheet",j.setAttribute("role","dialog"),j.setAttribute("aria-modal","true"),I&&j.setAttribute("aria-label",I),j.innerHTML=`<div class="ss-grab"></div><div class="ss-head"><span class="ss-ic" aria-hidden="true">${y(b)}</span><b></b><button type="button" class="ss-x" aria-label="Fechar">${i}</button></div><div class="ss-list" role="listbox"></div>`,j.querySelector(".ss-head b").textContent=I;let H=j.querySelector(".ss-list"),Z=null,he=V=>{let G=document.createElement("button");G.type="button",G.className=`ss-opt${V.selected?" on":""}`,G.setAttribute("role","option"),G.setAttribute("aria-selected",V.selected?"true":"false"),G.disabled=V.disabled,G.innerHTML=`<span></span>${r}`,G.firstChild.textContent=V.label||V.textContent,G.addEventListener("click",()=>k(V.value)),V.selected&&(Z=G),H.appendChild(G)};for(let V of b.children)if(V.tagName==="OPTGROUP"){let G=document.createElement("div");G.className="ss-group",G.textContent=V.label,H.appendChild(G);for(let F of V.children)F.tagName==="OPTION"&&!F.hidden&&he(F)}else V.tagName==="OPTION"&&!V.hidden&&he(V);let te=document.createElement("div");if(te.className="ss-back",E.append(te,j),document.body.appendChild(E),e={sel:b,wrap:E,pending:null,closing:!1},A){try{E.showModal()}catch{}E.addEventListener("cancel",V=>{V.preventDefault(),v()})}te.addEventListener("click",()=>v()),j.querySelector(".ss-x").addEventListener("click",()=>v()),E.addEventListener("keydown",V=>{if(V.key==="Escape")V.preventDefault(),V.stopPropagation(),v();else if(V.key==="ArrowDown"||V.key==="ArrowUp"){let G=[...H.querySelectorAll(".ss-opt:not(:disabled)")],F=G.indexOf(document.activeElement),le=G[Math.max(0,Math.min(G.length-1,F+(V.key==="ArrowDown"?1:-1)))];le&&(V.preventDefault(),le.focus())}});try{history.pushState(history.state,"")}catch{}requestAnimationFrame(()=>{E.classList.add("in"),Z?(Z.scrollIntoView({block:"center"}),Z.focus({preventScroll:!0})):j.querySelector(".ss-x").focus({preventScroll:!0})})}function v(b=null){if(!e||e.closing)return;e.closing=!0,e.pending=b;let A=e,E=()=>{if(e!==A)return;e=null,A.wrap.open&&A.wrap.close(),A.wrap.classList.remove("in"),A.wrap.classList.add("out"),setTimeout(()=>A.wrap.remove(),220);let I=A.sel;A.pending!==null&&I.value!==A.pending&&(I.value=A.pending,I.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),I.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})));try{I.focus({preventScroll:!0})}catch{}};if(A.finish=E,A.byBack)return E();history.back(),setTimeout(E,400)}let k=b=>v(b);window.addEventListener("popstate",b=>{if(e){if(b.stopImmediatePropagation(),e.closing)return e.finish&&e.finish();e.byBack=!0,v()}});function g(b){let A=b.composedPath?b.composedPath():[b.target],E=A[0];if(E&&E.tagName==="SELECT")return E;if(typeof b.clientX!="number")return null;for(let I of A.slice(0,6)){if(!I||I.nodeType!==1||I===document.body||I===document.documentElement)break;for(let j of I.querySelectorAll("select")){if(j.disabled||j.multiple)continue;let H=j.getBoundingClientRect();if(H.width&&b.clientX>=H.left&&b.clientX<=H.right&&b.clientY>=H.top&&b.clientY<=H.bottom&&$(j,b.clientX,b.clientY))return j}}return null}function $(b,A,E){let I=b.style.getPropertyValue("pointer-events");b.style.setProperty("pointer-events","auto","important");let j=null;try{let H=b.getRootNode();j=(H.elementFromPoint?H:document).elementFromPoint(A,E)}catch{}return I?b.style.setProperty("pointer-events",I):b.style.removeProperty("pointer-events"),j===b}let _=b=>{let A=b.composedPath?b.composedPath()[0]:b.target;return A&&A.tagName==="SELECT"&&!A.disabled&&!A.multiple?A:null};window.addEventListener("touchstart",b=>{let A=b.touches[0];a=A?{x:A.clientX,y:A.clientY}:null},{capture:!0,passive:!0}),window.addEventListener("touchend",b=>{let A=_(b);if(!A||e)return;let E=b.changedTouches[0];a&&E&&Math.hypot(E.clientX-a.x,E.clientY-a.y)>10||(b.preventDefault(),t=Date.now(),D(A))},{capture:!0,passive:!1}),window.addEventListener("mousedown",b=>{_(b)&&b.preventDefault()},!0),window.addEventListener("click",b=>{if(e)return;let A=g(b);A&&(b.preventDefault(),b.stopPropagation(),Date.now()-t>600&&D(A))},!0),window.addEventListener("keydown",b=>{let A=_(b);!A||e||(b.key==="Enter"||b.key===" "||b.key==="F4"||b.altKey&&(b.key==="ArrowDown"||b.key==="ArrowUp"))&&(b.preventDefault(),D(A))},!0),o.open=D,o.close=()=>v()})();(()=>{if(window.__textareas)return;let o=()=>`textareas:${(document.title||"app").split(/[·|-]/)[0].trim()}:`,e=p=>p.dataset.size||p.id||p.name||p.getAttribute("aria-label")||p.placeholder||"",t=p=>{try{return Number(localStorage.getItem(o()+p))||0}catch{return 0}},a=(p,u)=>{try{localStorage.setItem(o()+p,String(Math.round(u)))}catch{}},s=new WeakMap,i=typeof ResizeObserver=="function"?new ResizeObserver(p=>p.forEach(({target:u})=>{let f=parseFloat(u.style.height);!f||f===u.__tsSet||(clearTimeout(s.get(u)),s.set(u,setTimeout(()=>{let x=e(u),y=parseFloat(u.style.height);x&&y&&a(x,y),u.__tsSet=y},400)))})):null,r=p=>{if(!(p instanceof HTMLTextAreaElement)||p.dataset.size==="off"||p.__tsDone)return;p.__tsDone=!0,p.style.resize="vertical";let u=e(p),f=u&&t(u);f&&(p.style.height=`${f}px`,p.__tsSet=f),i&&i.observe(p)},l=new WeakSet,d=p=>{!p||p.nodeType!==1||(p.tagName==="TEXTAREA"&&r(p),p.shadowRoot&&c(p.shadowRoot),p.querySelectorAll&&(p.querySelectorAll("textarea").forEach(r),p.querySelectorAll("*").forEach(u=>u.shadowRoot&&c(u.shadowRoot))))};function c(p){l.has(p)||(l.add(p),new MutationObserver(u=>u.forEach(f=>f.addedNodes.forEach(d))).observe(p,{childList:!0,subtree:!0}),p.querySelectorAll("textarea").forEach(r),p.querySelectorAll("*").forEach(u=>u.shadowRoot&&c(u.shadowRoot)))}window.__textareas={fit:r,keyOf:e};let h=()=>c(document.body||document.documentElement);document.body?h():document.addEventListener("DOMContentLoaded",h)})();var St=globalThis,Aa=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Da=Symbol(),hs=new WeakMap,Ct=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==Da)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.i,t=this.t;if(Aa&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=hs.get(t)),e===void 0&&((this.i=e=new CSSStyleSheet).replaceSync(this.cssText),a&&hs.set(t,e))}return e}toString(){return this.cssText}},me=o=>new Ct(typeof o=="string"?o:o+"",void 0,Da),Ce=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((a,s,i)=>a+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Ct(t,o,Da)},Wo=(o,e)=>{if(Aa)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),s=St.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,o.appendChild(a)}},us=Aa?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return me(t)})(o):o,{is:Qo,defineProperty:Jo,getOwnPropertyDescriptor:Ko,getOwnPropertyNames:Zo,getOwnPropertySymbols:Go,getPrototypeOf:Xo}=Object,Ht=globalThis,ms=Ht.trustedTypes,er=ms?ms.emptyScript:"",tr=Ht.reactiveElementPolyfillSupport,ht=(o,e)=>o,ya={toAttribute(o,e){switch(e){case Boolean:o=o?er:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Es=(o,e)=>!Qo(o,e),fs={attribute:!0,type:String,converter:ya,reflect:!1,useDefault:!1,hasChanged:Es};Symbol.metadata??=Symbol("metadata"),Ht.litPropertyMetadata??=new WeakMap;var Fe=class extends HTMLElement{static addInitializer(e){this.o(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(e,t=fs){if(t.state&&(t.attribute=!1),this.o(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&Jo(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=Ko(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let l=s?.call(this);i?.call(this,r),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fs}static o(){if(this.hasOwnProperty(ht("elementProperties")))return;let e=Xo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(ht("properties"))){let t=this.properties,a=[...Zo(t),...Go(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.u=new Map;for(let[t,a]of this.elementProperties){let s=this.p(t,a);s!==void 0&&this.u.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(us(s))}else e!==void 0&&t.push(us(e));return t}static p(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this.P??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this.P?.delete(e)}$(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.v=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.P?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}C(e,t){let a=this.constructor.elementProperties.get(e),s=this.constructor.p(e,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:ya).toAttribute(t,a.type);this.m=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(e,t){let a=this.constructor,s=a.u.get(e);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ya;this.m=s;let l=r.fromAttribute(t,i.type);this[s]=l??this.T?.get(s)??l,this.m=null}}requestUpdate(e,t,a,s=!1,i){if(e!==void 0){let r=this.constructor;if(s===!1&&(i=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??Es)(i,t)||a.useDefault&&a.reflect&&i===this.T?.get(e)&&!this.hasAttribute(r.p(e,a))))return;this.M(e,t,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(e,t,{useDefault:a,reflect:s,wrapped:i},r){a&&!(this.T??=new Map).has(e)&&(this.T.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this.m!==e&&(this.A??=new Set).add(e))}async k(){this.isUpdatePending=!0;try{await this.S}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:r}=i,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.M(s,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this.P?.forEach(a=>a.hostUpdate?.()),this.update(t)):this.U()}catch(a){throw e=!1,this.U(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this.P?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(e){return!0}update(e){this.A&&=this.A.forEach(t=>this.C(t,this[t])),this.U()}updated(e){}firstUpdated(e){}};Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[ht("elementProperties")]=new Map,Fe[ht("finalized")]=new Map,tr?.({ReactiveElement:Fe}),(Ht.reactiveElementVersions??=[]).push("2.1.2");var Ma=globalThis,gs=o=>o,Tt=Ma.trustedTypes,vs=Tt?Tt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Sa="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,Ca="?"+Se,ar=`<${Ca}>`,Be=document,mt=()=>Be.createComment(""),ft=o=>o===null||typeof o!="object"&&typeof o!="function",Ta=Array.isArray,zs=o=>Ta(o)||typeof o?.[Symbol.iterator]=="function",ba=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xs=/-->/g,bs=/>/g,Ve=RegExp(`>|${ba}(?:([^\\s"'>=/]+)(${ba}*=${ba}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ws=/'/g,$s=/"/g,Os=/^(?:script|style|textarea|title)$/i,Ea=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),n=Ea(1),tt=Ea(2),jn=Ea(3),ie=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ys=new WeakMap,Ue=Be.createTreeWalker(Be,129);function qs(o,e){if(!Ta(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return vs!==void 0?vs.createHTML(e):e}var Fs=(o,e)=>{let t=o.length-1,a=[],s,i=e===2?"<svg>":e===3?"<math>":"",r=pt;for(let l=0;l<t;l++){let d=o[l],c,h,p=-1,u=0;for(;u<d.length&&(r.lastIndex=u,h=r.exec(d),h!==null);)u=r.lastIndex,r===pt?h[1]==="!--"?r=xs:h[1]!==void 0?r=bs:h[2]!==void 0?(Os.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=Ve):h[3]!==void 0&&(r=Ve):r===Ve?h[0]===">"?(r=s??pt,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?Ve:h[3]==='"'?$s:ws):r===$s||r===ws?r=Ve:r===xs||r===bs?r=pt:(r=Ve,s=void 0);let f=r===Ve&&o[l+1].startsWith("/>")?" ":"";i+=r===pt?d+ar:p>=0?(a.push(c),d.slice(0,p)+Sa+d.slice(p)+Se+f):d+Se+(p===-2?l:f)}return[qs(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},gt=class o{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let i=0,r=0,l=e.length-1,d=this.parts,[c,h]=Fs(e,t);if(this.el=o.createElement(c,a),Ue.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Ue.nextNode())!==null&&d.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(Sa)){let u=h[r++],f=s.getAttribute(p).split(Se),x=/([.?@])?(.*)/.exec(u);d.push({type:1,index:i,name:x[2],strings:f,ctor:x[1]==="."?zt:x[1]==="?"?Ot:x[1]==="@"?qt:We}),s.removeAttribute(p)}else p.startsWith(Se)&&(d.push({type:6,index:i}),s.removeAttribute(p));if(Os.test(s.tagName)){let p=s.textContent.split(Se),u=p.length-1;if(u>0){s.textContent=Tt?Tt.emptyScript:"";for(let f=0;f<u;f++)s.append(p[f],mt()),Ue.nextNode(),d.push({type:2,index:++i});s.append(p[u],mt())}}}else if(s.nodeType===8)if(s.data===Ca)d.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(Se,p+1))!==-1;)d.push({type:7,index:i}),p+=Se.length-1}i++}}static createElement(e,t){let a=Be.createElement("template");return a.innerHTML=e,a}};function Ye(o,e,t=o,a){if(e===ie)return e;let s=a!==void 0?t.N?.[a]:t.O,i=ft(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,t,a)),a!==void 0?(t.N??=[])[a]=s:t.O=s),s!==void 0&&(e=Ye(o,s._$AS(o,e.values),s,a)),e}var Et=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(e){let{el:{content:t},parts:a}=this._$AD,s=(e?.creationScope??Be).importNode(t,!0);Ue.currentNode=s;let i=Ue.nextNode(),r=0,l=0,d=a[0];for(;d!==void 0;){if(r===d.index){let c;d.type===2?c=new Lt(i,i.nextSibling,this,e):d.type===1?c=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(c=new Ft(i,this,e)),this._$AV.push(c),d=a[++l]}r!==d?.index&&(i=Ue.nextNode(),r++)}return Ue.currentNode=Be,s}V(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},Lt=class Ns{get _$AU(){return this._$AM?._$AU??this.D}constructor(e,t,a,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),ft(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==ie&&this.L(e):e._$litType$!==void 0?this.j(e):e.nodeType!==void 0?this.I(e):zs(e)?this.H(e):this.L(e)}B(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}I(e){this._$AH!==e&&(this._$AR(),this._$AH=this.B(e))}L(e){this._$AH!==m&&ft(this._$AH)?this._$AA.nextSibling.data=e:this.I(Be.createTextNode(e)),this._$AH=e}j(e){let{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=gt.createElement(qs(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(t);else{let i=new Et(s,this),r=i.R(this.options);i.V(t),this.I(r),this._$AH=i}}_$AC(e){let t=ys.get(e.strings);return t===void 0&&ys.set(e.strings,t=new gt(e)),t}H(e){Ta(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,s=0;for(let i of e)s===t.length?t.push(a=new Ns(this.B(mt()),this.B(mt()),this,this.options)):a=t[s],a._$AI(i),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let a=gs(e).nextSibling;gs(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this.D=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=m}_$AI(e,t=this,a,s){let i=this.strings,r=!1;if(i===void 0)e=Ye(this,e,t,0),r=!ft(e)||e!==this._$AH&&e!==ie,r&&(this._$AH=e);else{let l=e,d,c;for(e=i[0],d=0;d<i.length-1;d++)c=Ye(this,l[a+d],t,d),c===ie&&(c=this._$AH[d]),r||=!ft(c)||c!==this._$AH[d],c===m?e=m:e!==m&&(e+=(c??"")+i[d+1]),this._$AH[d]=c}r&&!s&&this.W(e)}W(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zt=class extends We{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===m?void 0:e}},Ot=class extends We{constructor(){super(...arguments),this.type=4}W(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},qt=class extends We{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}_$AI(e,t=this){if((e=Ye(this,e,t,0)??m)===ie)return;let a=this._$AH,s=e===m&&a!==m||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==m&&(a===m||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ft=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}},sr={q:Sa,J:Se,Z:Ca,F:1,G:Fs,K:Et,X:zs,Y:Ye,tt:Lt,st:We,it:Ot,et:qt,ht:zt,ot:Ft},ir=Ma.litHtmlPolyfillSupport;ir?.(gt,Lt),(Ma.litHtmlVersions??=[]).push("3.3.3");var jt=(o,e,t)=>{let a=t?.renderBefore??e,s=a._$litPart$;if(s===void 0){let i=t?.renderBefore??null;a._$litPart$=s=new Lt(e.insertBefore(mt(),i),i,void 0,t??{})}return s._$AI(o),s},za=globalThis;var Ae=class extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.rt=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return ie}};Ae._$litElement$=!0,Ae.finalized=!0,za.litElementHydrateSupport?.({LitElement:Ae});var or=za.litElementPolyfillSupport;or?.({LitElement:Ae});(za.litElementVersions??=[]).push("4.2.2");var{tt:rr}=sr,_s=o=>o,nr=o=>o===null||typeof o!="object"&&typeof o!="function";var ks=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e,lr=o=>o?._$litType$?.h!=null;var Ps=o=>o.strings===void 0,As=()=>document.createComment(""),Ne=(o,e,t)=>{let a=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){let i=a.insertBefore(As(),s),r=a.insertBefore(As(),s);t=new rr(i,r,o,o.options)}else{let i=t._$AB.nextSibling,r=t._$AM,l=r!==o;if(l){let d;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(d=o._$AU)!==r._$AU&&t._$AP(d)}if(i!==s||l){let d=t._$AA;for(;d!==i;){let c=_s(d).nextSibling;_s(a).insertBefore(d,s),d=c}}}return t},qe=(o,e,t=o)=>(o._$AI(e,t),o),cr={},vt=(o,e=cr)=>o._$AH=e,_a=o=>o._$AH,wa=o=>{o._$AR(),o._$AA.remove()},Is=o=>{o._$AR()};var ue=o=>(...e)=>({_$litDirective$:o,values:e}),be=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this.nt=e,this._$AM=t,this.ct=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var ut=(o,e)=>{let t=o._$AN;if(t===void 0)return!1;for(let a of t)a._$AO?.(e,!1),ut(a,e);return!0},Nt=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while(t?.size===0)},Rs=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),hr(e)}};function dr(o){this._$AN!==void 0?(Nt(this),this._$AM=o,Rs(this)):this._$AM=o}function pr(o,e=!1,t=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)ut(a[i],!1),Nt(a[i]);else a!=null&&(ut(a,!1),Nt(a));else ut(this,o)}var hr=o=>{o.type==2&&(o._$AP??=pr,o._$AQ??=dr)},xt=class extends be{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),Rs(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ut(this,e),Nt(this))}setValue(e){if(Ps(this.nt))this.nt._$AI(e,this);else{let t=[...this.nt._$AH];t[this.ct]=e,this.nt._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Pt=class{constructor(e){this.lt=e}disconnect(){this.lt=void 0}reconnect(e){this.lt=e}deref(){return this.lt}},It=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(e=>this.dt=e)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var Rt=class extends xt{constructor(){super(...arguments),this.ft=new Pt(this),this.vt=new It}render(e,t){return ie}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this.yt)return ie;this.yt=t;let s=0,{ft:i,vt:r}=this;return(async(l,d)=>{for await(let c of l)if(await d(c)===!1)return})(t,async l=>{for(;r.get();)await r.get();let d=i.deref();if(d!==void 0){if(d.yt!==t)return!1;a!==void 0&&(l=a(l,s)),d.commitValue(l,s),s++}return!0}),ie}commitValue(e,t){this.setValue(e)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Vn=ue(Rt),Un=ue(class extends Rt{constructor(o){if(super(o),o.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(o,e){return this.rt=o,super.update(o,e)}commitValue(o,e){e===0&&Is(this.rt);let t=Ne(this.rt);qe(t,o)}}),Ds=o=>lr(o)?o._$litType$.h:o.strings,Bn=ue(class extends be{constructor(o){super(o),this.bt=new WeakMap}render(o){return[o]}update(o,[e]){let t=ks(this.gt)?Ds(this.gt):null,a=ks(e)?Ds(e):null;if(t!==null&&(a===null||t!==a)){let s=_a(o).pop(),i=this.bt.get(t);if(i===void 0){let r=document.createDocumentFragment();i=jt(m,r),i.setConnected(!1),this.bt.set(t,i)}vt(i,[s]),Ne(i,void 0,s)}if(a!==null){if(t===null||t!==a){let s=this.bt.get(a);if(s!==void 0){let i=_a(s).pop();Is(o),Ne(o,void 0,i),vt(o,[i])}}this.gt=e}else this.gt=void 0;return this.render(e)}});var Yn=ue(class extends be{constructor(o){if(super(o),o.type!==1||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.wt===void 0){this.wt=new Set,o.strings!==void 0&&(this._t=new Set(o.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(e)}let t=o.element.classList;for(let a of this.wt)a in e||(t.remove(a),this.wt.delete(a));for(let a in e){let s=!!e[a];s===this.wt.has(a)||this._t?.has(a)||(s?(t.add(a),this.wt.add(a)):(t.remove(a),this.wt.delete(a)))}return ie}}),ur={},Wn=ue(class extends be{constructor(){super(...arguments),this.St=ur}render(o,e){return e()}update(o,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.St)&&this.St.length===e.length&&e.every((a,s)=>a===this.St[s]))return ie}else if(this.St===e)return ie;return this.St=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var Qn=ue(class extends be{constructor(){super(...arguments),this.key=m}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(vt(o),this.key=e),t}}),Vt=ue(class extends be{constructor(o){if(super(o),o.type!==3&&o.type!==1&&o.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ps(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===ie||e===m)return e;let t=o.element,a=o.name;if(o.type===3){if(e===t[a])return ie}else if(o.type===4){if(!!e===t.hasAttribute(a))return ie}else if(o.type===1&&t.getAttribute(a)===e+"")return ie;return vt(o),e}});var $a=new WeakMap,Jn=ue(class extends xt{render(o){return m}update(o,[e]){let t=e!==this.lt;return t&&this.$t(void 0),(t||this.Tt!==this.xt)&&(this.lt=e,this.Et=o.options?.host,this.$t(this.xt=o.element)),m}$t(o){if(this.lt!==void 0)if(this.isConnected||(o=void 0),typeof this.lt=="function"){let e=this.Et??globalThis,t=$a.get(e);t===void 0&&(t=new WeakMap,$a.set(e,t)),t.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),t.set(this.lt,o),o!==void 0&&this.lt.call(this.Et,o)}else this.lt.value=o}get Tt(){return typeof this.lt=="function"?$a.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),Ms=(o,e,t)=>{let a=new Map;for(let s=e;s<=t;s++)a.set(o[s],s);return a},ae=ue(class extends be{constructor(o){if(super(o),o.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(o,e,t){let a;t===void 0?t=e:e!==void 0&&(a=e);let s=[],i=[],r=0;for(let l of o)s[r]=a?a(l,r):r,i[r]=t(l,r),r++;return{values:i,keys:s}}render(o,e,t){return this.Ct(o,e,t).values}update(o,[e,t,a]){let s=_a(o),{values:i,keys:r}=this.Ct(e,t,a);if(!Array.isArray(s))return this.Pt=r,i;let l=this.Pt??=[],d=[],c,h,p=0,u=s.length-1,f=0,x=i.length-1;for(;p<=u&&f<=x;)if(s[p]===null)p++;else if(s[u]===null)u--;else if(l[p]===r[f])d[f]=qe(s[p],i[f]),p++,f++;else if(l[u]===r[x])d[x]=qe(s[u],i[x]),u--,x--;else if(l[p]===r[x])d[x]=qe(s[p],i[x]),Ne(o,d[x+1],s[p]),p++,x--;else if(l[u]===r[f])d[f]=qe(s[u],i[f]),Ne(o,s[p],s[u]),u--,f++;else if(c===void 0&&(c=Ms(r,f,x),h=Ms(l,p,u)),c.has(l[p]))if(c.has(l[u])){let y=h.get(r[f]),M=y!==void 0?s[y]:null;if(M===null){let D=Ne(o,s[p]);qe(D,i[f]),d[f]=D}else d[f]=qe(M,i[f]),Ne(o,s[p],M),s[y]=null;f++}else wa(s[u]),u--;else wa(s[p]),p++;for(;f<=x;){let y=Ne(o,d[x+1]);qe(y,i[f]),d[f++]=y}for(;p<=u;){let y=s[p++];y!==null&&wa(y)}return this.Pt=r,vt(o,d),ie}}),Hs="important",mr=" !"+Hs,Kn=ue(class extends be{constructor(o){if(super(o),o.type!==1||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let a=o[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(o,[e]){let{style:t}=o.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(e)),this.render(e);for(let a of this.Mt)e[a]==null&&(this.Mt.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(let a in e){let s=e[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(mr);a.includes("-")||i?t.setProperty(a,i?s.slice(0,-11):s,i?Hs:""):t[a]=s}}return ie}}),Zn=ue(class extends be{constructor(o){if(super(o),o.type!==2)throw Error("templateContent can only be used in child bindings")}render(o){return this.At===o?ie:(this.At=o,document.importNode(o.content,!0))}}),et=class extends be{constructor(e){if(super(e),this.gt=m,e.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.kt=void 0,this.gt=e;if(e===ie)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.gt)return this.kt;this.gt=e;let t=[e];return t.raw=t,this.kt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};et.directiveName="unsafeHTML",et.resultType=1;var Gn=ue(et);var bt=class extends et{};bt.directiveName="unsafeSVG",bt.resultType=2;var se=ue(bt),Ss=o=>!nr(o)&&typeof o.then=="function",Cs=1073741823;var ka=class extends xt{constructor(){super(...arguments),this.Ot=Cs,this.Ut=[],this.ft=new Pt(this),this.vt=new It}render(...e){return e.find(t=>!Ss(t))??ie}update(e,t){let a=this.Ut,s=a.length;this.Ut=t;let i=this.ft,r=this.vt;this.isConnected||this.disconnected();for(let l=0;l<t.length&&!(l>this.Ot);l++){let d=t[l];if(!Ss(d))return this.Ot=l,d;l<s&&d===a[l]||(this.Ot=Cs,s=0,Promise.resolve(d).then(async c=>{for(;r.get();)await r.get();let h=i.deref();if(h!==void 0){let p=h.Ut.indexOf(d);p>-1&&p<h.Ot&&(h.Ot=p,h.setValue(c))}}))}return ie}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Xn=ue(ka);var fr=Symbol.for(""),gr=o=>{if(o?.r===fr)return o?._$litStatic$};var Ts=new Map,Ls=o=>(e,...t)=>{let a=t.length,s,i,r=[],l=[],d,c=0,h=!1;for(;c<a;){for(d=e[c];c<a&&(i=t[c],(s=gr(i))!==void 0);)d+=s+e[++c],h=!0;c!==a&&l.push(i),r.push(d),c++}if(c===a&&r.push(e[a]),h){let p=r.join("$$lit$$");(e=Ts.get(p))===void 0&&(r.raw=r,Ts.set(p,e=r)),t=l}return o(e,...t)},el=Ls(n),tl=Ls(tt);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var Y={activity:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',paperclip:'<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"message-circle":'<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',"mic-off":'<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',"door-open":'<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',"circle-pause":'<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',mail:'<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',"trending-up":'<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',"thumbs-down":'<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',contrast:'<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"notebook-pen":'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'};var Qe=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],js=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],ne=o=>Qe.find(e=>e.id===o);function Oa(o){if(!o||typeof o!="string")return null;let e=o.trim().toLowerCase(),t=ne(e)||Qe.find(h=>h.label.toLowerCase()===e||h.id===e.normalize("NFD").replace(/[\u0300-\u036f]/g,""));if(t)return t;let a=/^#?([0-9a-f]{6})$/i.exec(e);if(!a)return null;let s=h=>[0,2,4].map(p=>parseInt(h.slice(p,p+2),16)),[i,r,l]=s(a[1]),d=null,c=1/0;for(let h of Qe){let[p,u,f]=s(h.fill.slice(1)),x=2*(i-p)**2+4*(r-u)**2+3*(l-f)**2;x<c&&(c=x,d=h)}return d}var Vs=o=>ne(js[o%js.length]);function wt(o,e){let t=o.replace("#",""),a=parseInt(t.length===3?t.replace(/./g,s=>s+s):t,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${e})`}function B(o,e,t="c"){return`--${t}:${o.fill};--${t}i:${e?o.fill:o.ink};--${t}s:${wt(o.fill,e?.18:.15)};`}var qa=o=>(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var P=(o,e,t)=>`${o} ${o===1?e:t}`,N=(o,e=38)=>o&&o.length>e?o.slice(0,e-1).trimEnd()+"\u2026":o||"",X=o=>o&&o.charAt(0).toUpperCase()+o.slice(1);function Ut(o){let e=[],t=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=t.exec(o||"");)s.index>a&&e.push({text:o.slice(a,s.index)}),e.push({url:s[0]}),a=s.index+s[0].length;return a<(o||"").length&&e.push({text:o.slice(a)}),e}var Bt=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],_e=["dom","seg","ter","qua","qui","sex","s\xE1b"],De=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Yt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],at=o=>String(o).padStart(2,"0"),O=o=>`${o.getFullYear()}-${at(o.getMonth()+1)}-${at(o.getDate())}`,W=o=>`${at(o.getHours())}:${at(o.getMinutes())}`,q=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},R=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),z=(o,e)=>{let t=new Date(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds());return t.setDate(t.getDate()+e),t},Te=(o,e)=>new Date(o.getFullYear(),o.getMonth()+e,1),oe=(o,e)=>o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&o.getDate()===e.getDate(),K=(o,e)=>Math.round((R(o)-R(e))/864e5),Pe=(o,e=0)=>z(R(o),-((o.getDay()-e+7)%7)),Fa=o=>/^\d{4}-\d{2}-\d{2}$/.test(o)?q(o):new Date(o);function fe(o){let e=-o.getTimezoneOffset(),t=e>=0?"+":"-";return`${O(o)}T${W(o)}:00${t}${at(Math.floor(Math.abs(e)/60))}:${at(Math.abs(e)%60)}`}function J(o,e=new Date,{long:t=!0,cap:a=!0}={}){let s=K(o,e),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${Bt[o.getDay()]}, ${o.getDate()} de ${t?De[o.getMonth()]:Yt[o.getMonth()]}`,o.getFullYear()!==e.getFullYear()&&(i+=` de ${o.getFullYear()}`)),a?X(i):i}var Na=o=>`${Bt[o.getDay()]}, ${o.getDate()} de ${De[o.getMonth()]}`,ee=(o,e=new Date)=>`${o.getDate()} ${Yt[o.getMonth()]}${o.getFullYear()!==e.getFullYear()?` ${o.getFullYear()}`:""}`;function Wt(o){let e=Math.round(o/6e4);if(e<1)return"agora";if(e<60)return`em ${e} min`;let t=Math.floor(e/60),a=e%60;if(t<24)return a&&t<4?`em ${t} h ${a} min`:`em ${t} h`;let s=Math.round(t/24);return`em ${P(s,"dia","dias")}`}function Pa(o){let e=Math.round(o/6e4);if(e<60)return`${e} min`;let t=Math.floor(e/60),a=e%60;return a?`${t} h ${a} min`:`${t} h`}var st=[{id:"",label:"N\xE3o repete",short:"N\xE3o"},{id:"DAILY",label:"Todo dia",short:"Di\xE1rio"},{id:"WEEKLY",label:"Toda semana",short:"Semanal"},{id:"MONTHLY",label:"Todo m\xEAs",short:"Mensal"},{id:"YEARLY",label:"Todo ano",short:"Anual"}];function Ie(o){if(!o)return"";let e=Object.fromEntries(o.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),t=Number(e.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[e.FREQ];if(!a)return"Repete";let s=t>1?`A cada ${t} ${a[1]}`:a[0];if(e.BYDAY&&e.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${e.BYDAY.split(",").map(r=>i[r]||r).join(", ")})`}if(e.COUNT)s+=`, ${P(Number(e.COUNT),"vez","vezes")}`;else if(e.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(e.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var $t=o=>{let e=/FREQ=(\w+)/.exec(o||"");return e?e[1]:""};async function Ia(o,e=1800){let t=a=>new Promise((s,i)=>{let r=new FileReader;r.onload=()=>s(String(r.result).split(",")[1]||""),r.onerror=()=>i(r.error),r.readAsDataURL(a)});try{let a=await createImageBitmap(o,{imageOrientation:"from-image"}),s=Math.min(1,e/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let r=await new Promise(l=>i.toBlob(l,"image/jpeg",.86));return{mime:"image/jpeg",data:await t(r),url:URL.createObjectURL(r)}}catch{return{mime:o.type||"image/jpeg",data:await t(o),url:URL.createObjectURL(o)}}}function Us(o){let e=new Map(o.map(a=>[a.id,String(a.name||"").split(/\s+/).filter(Boolean)])),t=new Map;for(let a of o){let s=e.get(a.id),i=0;for(let r of o){if(r.id===a.id)continue;let l=e.get(r.id),d=0;for(;d<s.length-1&&d<l.length-1&&s[d].toLowerCase()===l[d].toLowerCase();)d++;d>=2&&d>i&&(i=d)}t.set(a.id,i?{short:s.slice(i).join(" "),group:s.slice(0,i).join(" ")}:{short:a.name,group:""})}return t}var it=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,Re=o=>String(o).padStart(2,"0"),Ra=/^\d{4}-\d{2}-\d{2}$/;function Bs(o){let e=/^(\d{1,2}):(\d{2})/.exec(String(o||""));if(!e)return"";let t=Number(e[1]),a=Number(e[2]);return t<24&&a<60?`${Re(t)}:${Re(a)}`:""}function vr(o,e=new Date){if(!Ra.test(o||""))return"";let t=q(o);return`${X(_e[t.getDay()])}, ${ee(t,e)}`}function xr(o,e=1){let t=Pe(o,e),a=z(t,35).getMonth()===o.getMonth()?6:5;return Array.from({length:a*7},(s,i)=>z(t,i))}function we(o,e,{label:t="Hor\xE1rio",cls:a=""}={}){let s=Bs(o);return n`<button type="button" class="pickf t ${a}" data-value=${s} aria-label=${`${t}: ${s||"sem hor\xE1rio"}`} @click=${i=>_r(i.currentTarget,{value:s,title:t}).then(r=>r&&e(r))}>
    <span class="pf-v">${s||"--:--"}</span>${it("clock")}
  </button>`}function Ys(o,e,{label:t="Data",cls:a="",min:s="",max:i="",weekStart:r=1}={}){let l=vr(o);return n`<button type="button" class="pickf d ${a}" data-value=${o||""} aria-label=${`${t}: ${l||"sem data"}`} @click=${d=>kr(d.currentTarget,{value:o,title:t,min:s,max:i,weekStart:r}).then(c=>c&&e(c))}>
    <span class="pf-v">${l||"Escolher"}</span>${it("calendar")}
  </button>`}var br=`
.wp .ss-sheet{max-height:min(86vh,680px)}
.wp-now{padding:0 20px 4px;font:600 40px/1.1 var(--wp-display);font-variant-numeric:tabular-nums;color:var(--wp-ink);flex:none}
.wp-body{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 8px}
.wp-lab{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ss-mut);padding:12px 4px 6px}
.wp-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}
.wp-cell{min-width:0;min-height:44px;padding:0;border:0;border-radius:12px;background:var(--ss-soft2);color:inherit;font:inherit;font-size:17px;font-weight:600;font-variant-numeric:tabular-nums;cursor:pointer}
.wp-cell:focus-visible{background:var(--ss-soft);outline:none}
.wp-foot{display:flex;padding:10px 16px 14px;flex:none}
.wp-ok{flex:1;min-height:48px;border:0;border-radius:999px;background:var(--ss-a);color:var(--wp-on-a);font:inherit;font-size:16px;font-weight:600;cursor:pointer}
.wp-ok:focus-visible{outline:2px solid var(--wp-ink);outline-offset:2px}
.wp-mhead{display:flex;align-items:center;gap:4px;padding:0 0 8px}
.wp-mhead b{flex:1;text-align:center;font-size:17px;font-weight:600}
.wp-nav{width:44px;height:44px;border-radius:50%;border:0;background:transparent;color:inherit;display:grid;place-items:center;cursor:pointer;flex:none}
.wp-nav:focus-visible{background:var(--ss-soft2);outline:none}
.wp-nav:disabled{opacity:.3;cursor:default}
.wp-nav svg{width:22px;height:22px}
.wp-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}
.wp-wd{font-size:12px;font-weight:600;color:var(--ss-mut);text-align:center;padding:2px 0 4px}
.wp-day{min-width:0;height:44px;padding:0;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;font-size:16px;font-weight:500;font-variant-numeric:tabular-nums;cursor:pointer}
.wp-day:focus-visible{background:var(--ss-soft2);outline:none}
.wp-day.out{color:var(--ss-mut)}
.wp-day.today{box-shadow:inset 0 0 0 1.5px var(--ss-a);font-weight:700}
.wp-day.on{font-weight:700}
.wp-day:disabled{opacity:.3;cursor:default;background:transparent}
.wp svg.i{width:20px;height:20px}
.wp .wp-cell.on,.wp .wp-day.on{background:var(--ss-a);color:var(--wp-on-a)}
.wp .wp-cell.on:focus-visible,.wp .wp-day.on:focus-visible{outline:2px solid var(--wp-ink);outline-offset:2px}
@media (hover:hover){.wp-cell:not(.on):hover{background:var(--ss-soft)}.wp-nav:not(:disabled):hover,.wp-day:not(.on):not(:disabled):hover{background:var(--ss-soft2)}}
`,pe=null;function wr(){if(typeof window>"u"||typeof window.addEventListener!="function"||typeof history>"u"||window.__whenPick)return;window.__whenPick={isOpen:()=>!!pe,close:()=>Je(null)};let o=()=>{if(document.getElementById("wp-css"))return;let e=document.createElement("style");e.id="wp-css",e.textContent=br,(document.head||document.documentElement).appendChild(e)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o(),window.addEventListener("popstate",e=>{if(pe){if(e.stopImmediatePropagation(),pe.closing)return pe.finish&&pe.finish();pe.byBack=!0,Je(null)}})}wr();var Ws=o=>{let e=String(o||"").trim();if(/^#[0-9a-f]{6}$/i.test(e))return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)};let t=/rgba?\(([^)]+)\)/.exec(e);if(!t)return null;let a=t[1].split(/[ ,/]+/).filter(Boolean).map(Number);return{r:a[0],g:a[1],b:a[2]}},$r=(o,e)=>{let t=Ws(o)||{r:100,g:160,b:240};return`rgba(${t.r},${t.g},${t.b},${e})`};function yr(o){let e=getComputedStyle(o),t=(r,l="")=>e.getPropertyValue(r).trim()||l,a=Ws(t("--rv-bg")),s=a?(.2126*a.r+.7152*a.g+.0722*a.b)/255<.45:!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches),i=t("--rv-accent","#64b5f6");return{"--ss-bg":t("--rv-surface",s?"#1b2229":"#ffffff"),"--ss-fg":t("--rv-text",s?"#e8edf3":"#141a22"),"--ss-mut":t("--rv-muted",s?"#9aa6b4":"#5b6573"),"--ss-line2":s?"rgba(255,255,255,.18)":"rgba(0,0,0,.14)","--ss-a":i,"--ss-soft":$r(i,s?.22:.16),"--ss-soft2":s?"rgba(255,255,255,.06)":"rgba(0,0,0,.05)","--ss-scrim":t("--rv-scrim","rgba(0,0,0,.45)"),"--ss-font":e.fontFamily||"system-ui, sans-serif","--wp-on-a":t("--rv-on-accent","#ffffff"),"--wp-ink":t("--rv-accent-ink",i),"--wp-display":t("--rv-display",e.fontFamily||"system-ui, sans-serif")}}function Qs(o,e,t,a,s){return pe||typeof document>"u"?Promise.resolve(null):new Promise(i=>{let r=document.createElement("div");if(r.className="ss-wrap wp",o)for(let[h,p]of Object.entries(yr(o)))r.style.setProperty(h,p);let l=document.createElement("div");l.className="ss-back";let d=document.createElement("div");d.className="ss-sheet",d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),e&&d.setAttribute("aria-label",e),r.append(l,d),document.body.appendChild(r);let c=()=>jt(n`<div class="ss-grab"></div>
          <div class="ss-head"><b>${e}</b><button type="button" class="ss-x" aria-label="Fechar" @click=${()=>Je(null)}>${it("x")}</button></div>
          ${a(t,c)}`,d);c(),pe={wrap:r,anchor:o,resolve:i,pending:null,closing:!1,byBack:!1},l.addEventListener("click",()=>Je(null)),r.addEventListener("keydown",h=>{h.key==="Escape"&&(h.preventDefault(),h.stopPropagation(),Je(null))});try{history.pushState(history.state,"")}catch{}requestAnimationFrame(()=>{r.classList.add("in");let h=d.querySelector(s)||d.querySelector(".ss-x");h&&(h.scrollIntoView({block:"nearest"}),h.focus({preventScroll:!0}))})})}function Je(o){if(!pe||pe.closing)return;pe.closing=!0,pe.pending=o;let e=pe,t=()=>{if(pe===e){pe=null,e.wrap.classList.remove("in"),e.wrap.classList.add("out"),setTimeout(()=>e.wrap.remove(),220);try{e.anchor.focus({preventScroll:!0})}catch{}e.resolve(e.pending)}};if(e.finish=t,e.byBack)return t();history.back(),setTimeout(t,400)}function _r(o,{value:e="",title:t="Hor\xE1rio"}={}){let a=Bs(e)||"09:00",s={h:Number(a.slice(0,2)),m:Number(a.slice(3,5))},i=()=>Je(`${Re(s.h)}:${Re(s.m)}`);return Qs(o,t,s,(l,d)=>n`<div class="wp-now" aria-live="polite">${Re(l.h)}:${Re(l.m)}</div>
    <div class="wp-body">
      <div class="wp-lab" id="wp-h">Hora</div>
      <div class="wp-grid wp-h" role="group" aria-labelledby="wp-h">
        ${Array.from({length:24},(c,h)=>n`<button type="button" class="wp-cell ${h===l.h?"on":""}" aria-pressed=${h===l.h?"true":"false"} @click=${()=>(l.h=h,d())}>${Re(h)}</button>`)}
      </div>
      <div class="wp-lab" id="wp-m">Minutos</div>
      <div class="wp-grid wp-m" role="group" aria-labelledby="wp-m">
        ${Array.from({length:12},(c,h)=>h*5).map(c=>n`<button type="button" class="wp-cell ${c===l.m?"on":""}" aria-pressed=${c===l.m?"true":"false"} @click=${()=>(l.m=c,i())}>${Re(c)}</button>`)}
      </div>
    </div>
    <div class="wp-foot"><button type="button" class="wp-ok" @click=${i}>${it("check")}Pronto</button></div>`,".wp-h .wp-cell.on")}function kr(o,{value:e="",title:t="Data",min:a="",max:s="",weekStart:i=1}={}){let r=new Date,l=Ra.test(e||"")?e:"",d=l?q(l):a&&Ra.test(a)&&a>O(r)?q(a):r,c={month:new Date(d.getFullYear(),d.getMonth(),1)},h=u=>(!a||u>=a)&&(!s||u<=s);return Qs(o,t,c,(u,f)=>{let x=u.month,y=O(z(x,-1)),M=O(new Date(x.getFullYear(),x.getMonth()+1,1)),D=v=>{u.month=new Date(x.getFullYear(),x.getMonth()+v,1),f()};return n`<div class="wp-body">
      <div class="wp-mhead" data-month=${O(x).slice(0,7)}>
        <button type="button" class="wp-nav" aria-label="Mês anterior" ?disabled=${!!a&&y<a} @click=${()=>D(-1)}>${it("chevron-left")}</button>
        <b aria-live="polite">${X(De[x.getMonth()])} de ${x.getFullYear()}</b>
        <button type="button" class="wp-nav" aria-label="Próximo mês" ?disabled=${!!s&&M>s} @click=${()=>D(1)}>${it("chevron-right")}</button>
      </div>
      <div class="wp-days">
        ${[0,1,2,3,4,5,6].map(v=>n`<span class="wp-wd" aria-hidden="true">${_e[(v+i)%7].slice(0,1).toUpperCase()}</span>`)}
        ${xr(x,i).map(v=>{let k=O(v);return n`<button type="button" class="wp-day ${v.getMonth()!==x.getMonth()?"out":""} ${oe(v,r)?"today":""} ${k===l?"on":""}" data-d=${k} aria-label=${J(v,r)} aria-pressed=${k===l?"true":"false"} ?disabled=${!h(k)} @click=${()=>Je(k)}>${v.getDate()}</button>`})}
      </div>
    </div>`},".wp-day.on, .wp-day.today, .wp-day:not(.out):not(:disabled)")}var Js=["dom","seg","ter","qua","qui","sex","s\xE1b"],Ks={mensagem:"Mensagens",fotos:"Fotos",sugestao:"Sugest\xF5es",conversa:"Conversa"},Zs={erro:"erro",cota:"sem cota",formato:"resposta fora do formato"},He=o=>String(o).padStart(2,"0"),Ha=o=>`${o.getFullYear()}-${He(o.getMonth()+1)}-${He(o.getDate())}`,Qt=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},ei=o=>String(Math.round(o*10)/10).replace(".",","),Gs=o=>o>=1e3?`${ei(o/1e3)} mil`:String(Math.round(o||0)),Xs=o=>`${o} ${o===1?"chamada":"chamadas"}`,Ar=(o,e={})=>e[o]||(o||"").replace(/^ai_task\./,"").replace(/_/g," ")||"padr\xE3o do Home Assistant",Dr=(o,e)=>{let t=new Date(o);if(!Number.isFinite(t.getTime()))return"";let a=`${He(t.getHours())}:${He(t.getMinutes())}`;return Ha(t)===Ha(e)?`hoje ${a}`:`${He(t.getDate())}/${He(t.getMonth()+1)} ${a}`};function Mr(o){let e=o.join(" ").toLowerCase();return/google|gemini/.test(e)?n`Consumo exato e cota: <a href="https://console.cloud.google.com/apis/dashboard" target="_blank" rel="noopener">Google Cloud Console</a>.`:/openai|chatgpt|gpt/.test(e)?n`Consumo exato e custo: <a href="https://platform.openai.com/usage" target="_blank" rel="noopener">platform.openai.com/usage</a>.`:/anthropic|claude/.test(e)?n`Consumo exato e custo: <a href="https://platform.claude.com/usage" target="_blank" rel="noopener">Claude Console</a>.`:"O consumo exato fica no painel do provedor da IA."}function ti({u:o,day:e,onDay:t,head:a,app:s,using:i="",names:r={}}){if(!o||!o.hoje)return n`<div class="panel uso-panel" id="uso-ia">${a}<p class="panel-lead">Carregando…</p></div>`;let l=new Date,d=Ha(l),c=v=>v.cota?n`<span class="s alert">${v.cota} ${v.cota>1?"vezes":"vez"} sem cota</span>`:v.erros?n`<span class="s alert">${v.erros} com erro</span>`:n`<span class="s">≈ ${Gs(v.tokens)} tokens</span>`,h=(v,k)=>n`<div class="uso-tile"><span class="k">${v}</span><span class="v">${k.chamadas||0}</span>${c(k)}</div>`,p=o.dias||[],u=Math.max(1,...p.map(v=>v.chamadas||0)),f=p.find(v=>v.dia===e)||p.find(v=>v.dia===d)||{dia:d,chamadas:0,erros:0,cota:0},x=v=>v.dia===d?"hoje":Js[Qt(v.dia).getDay()],y=o.semana&&o.semana.tipos||{},M=[...Object.keys(o.mes&&o.mes.ias||{}),...Object.keys(o.semana&&o.semana.ias||{}),i],D=o.ultimas||[];return n`<div class="panel uso-panel" id="uso-ia">
    ${a}
    <div class="uso-tiles">${h("Hoje",o.hoje)}${h("7 dias",o.semana)}${h("Este m\xEAs",o.mes)}</div>
    <div class="uso-chart" role="group" aria-label="Chamadas de IA nos últimos 7 dias">
      ${p.map(v=>{let k=v.chamadas?Math.max(4,Math.round(v.chamadas/u*100)):0;return n`<button type="button" class="uso-bar ${v.dia===d?"today":""}" aria-pressed=${v.dia===f.dia?"true":"false"} aria-label="${x(v)}: ${Xs(v.chamadas)}" @click=${()=>t(v.dia)}><i style="height:${k}%"></i></button>`})}
    </div>
    <div class="uso-days" aria-hidden="true">${p.map(v=>n`<span>${x(v)}</span>`)}</div>
    <p class="uso-cap" aria-live="polite">${f.dia===d?"Hoje":`${Js[Qt(f.dia).getDay()]}, ${He(Qt(f.dia).getDate())}/${He(Qt(f.dia).getMonth()+1)}`}: <b>${Xs(f.chamadas)}</b>${f.erros?`, ${f.erros} com erro`:""}${f.cota?`, ${f.cota} sem cota`:""}.</p>
    ${Object.keys(y).length?n`<ul class="uso-kinds">${Object.keys(y).sort((v,k)=>y[k]-y[v]).map(v=>n`<li>${Ks[v]||v} <b>${y[v]}</b></li>`)}</ul>`:m}
    <details class="uso-last">
      <summary><svg class="uso-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg><span>Últimas chamadas${D.length?` (${D.length})`:""}</span><svg class="uso-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
      <ul>
        ${D.length?D.map(v=>n`<li><b>${Ks[v.tipo]||v.tipo}</b><span>${Ar(v.ia,r)}</span>${Zs[v.resultado]?n`<span class="r-err">${Zs[v.resultado]}</span>`:m}
                <span class="t">${ei(v.segundos)} s · ≈ ${Gs(v.tokens)} tokens${v.imagens?` \xB7 ${v.imagens} ${v.imagens>1?"imagens":"imagem"}`:""} · ${Dr(v.quando,l)}</span></li>`):n`<li>Nenhuma chamada ainda.</li>`}
      </ul>
    </details>
    <p class="uso-note">${Mr(M)}</p>
  </div>`}var ai=`
  .uso-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; padding: 4px 0 12px; }
  .uso-tile { background: var(--rv-bg); border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .uso-tile .k { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rv-muted); }
  .uso-tile .v { font-family: var(--rv-display); font-weight: 700; font-size: 30px; line-height: 1.05; color: var(--rv-text); font-variant-numeric: tabular-nums; }
  .uso-tile .s { font-size: 12.5px; color: var(--rv-muted); line-height: 1.3; }
  .uso-tile .s.alert { color: var(--rv-late); font-weight: 600; }
  .uso-chart { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; align-items: end; height: 118px; padding-top: 6px; border-bottom: 1px solid var(--rv-line); }
  .uso-bar { display: flex; flex-direction: column; justify-content: flex-end; align-items: center; height: 100%; background: none; border: 0; padding: 0 4px; cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .uso-bar i { display: block; width: 100%; max-width: 26px; min-height: 2px; border-radius: 4px 4px 0 0; background: var(--rv-accent); opacity: 0.45; }
  .uso-bar.today i, .uso-bar[aria-pressed="true"] i { opacity: 1; }
  .uso-bar:focus-visible { outline: 2px solid var(--rv-accent); outline-offset: 2px; border-radius: 4px; }
  .uso-days { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; font-size: 12px; color: var(--rv-muted); text-align: center; padding-top: 4px; }
  .uso-cap { font-size: 13.5px; color: var(--rv-muted); margin: 0; padding: 8px 0 10px; }
  .uso-cap b { color: var(--rv-text); font-weight: 600; }
  .uso-kinds { display: flex; flex-wrap: wrap; gap: 5px; padding: 0 0 10px; margin: 0; list-style: none; }
  .uso-kinds li { font-size: 12.5px; padding: 2px 8px; border: 1px solid var(--rv-line); border-radius: 6px; color: var(--rv-muted); }
  .uso-kinds b { color: var(--rv-text); font-weight: 600; }
  .uso-last { padding: 2px 0 8px; }
  .uso-last summary { display: flex; align-items: center; gap: 8px; list-style: none; font-size: 14.5px; font-weight: 600; color: var(--rv-accent-ink); cursor: pointer; padding: 6px 0; }
  .uso-last summary::-webkit-details-marker { display: none; }
  .uso-last summary .uso-ic { width: 18px; height: 18px; flex: none; }
  .uso-last summary .uso-chev { width: 18px; height: 18px; flex: none; margin-left: auto; color: var(--rv-muted); transition: transform 0.2s; }
  .uso-last[open] summary .uso-chev { transform: rotate(180deg); }
  .uso-last ul { list-style: none; margin: 0; padding: 0; }
  .uso-last li { display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: baseline; font-size: 13px; padding: 7px 0; border-top: 1px solid var(--rv-line); color: var(--rv-muted); }
  .uso-last li b { color: var(--rv-text); font-weight: 600; }
  .uso-last li .r-err { color: var(--rv-late); font-weight: 600; }
  .uso-last li .t { flex-basis: 100%; font-size: 12.5px; }
  .uso-note { font-size: 13px; line-height: 1.5; color: var(--rv-muted); margin: 0 0 10px; }
  .uso-note:last-child { margin-bottom: 16px; }
  .uso-note a { color: var(--rv-accent-ink); }
  .uso-note code { font-size: 12px; }
`;var Sr=/[̀-ͯ]/g,si=o=>o.normalize("NFD").replace(Sr,"").toLowerCase()||o.toLowerCase(),Jt=o=>[...String(o||"")].map(si).join("");function Cr(o,{room:e=null,query:t=""}={}){let a=Jt(t).split(/\s+/).filter(Boolean),s=d=>Jt(`${d.nome} ${d.zona||""} ${d.roomName||""}`),i=d=>a.every(c=>s(d).includes(c)),r=d=>{if(!a.length)return 0;let c=Jt(d.nome);return c.startsWith(a[0])?0:c.includes(a[0])?1:2},l=o.filter(i).sort((d,c)=>r(d)-r(c)||d.nome.localeCompare(c.nome,"pt-BR"));return e?{inRoom:l.filter(d=>d.roomId===e),others:a.length?l.filter(d=>d.roomId!==e):[]}:{inRoom:[],others:a.length?l:[]}}function Tr(o,e,t){let a=Jt(t).split(/\s+/).filter(Boolean)[0];if(!a)return e;let s=[...e],i=s.map(si),r=-1,l=-1;for(let d=0;d<s.length&&r<0;d++){let c="";for(let h=d;h<s.length;h++){if(c+=i[h],c===a){r=d,l=h+1;break}if(!a.startsWith(c))break}}return r<0?e:o`${s.slice(0,r).join("")}<mark>${s.slice(r,l).join("")}</mark>${s.slice(l).join("")}`}function ii({lit:o,icon:e,items:t,room:a=null,roomName:s="",value:i=null,query:r="",more:l=!1,onQuery:d,onPick:c,onMore:h,onRemove:p,onAdd:u,adding:f=!1,autofocus:x=!1,bens:y=!1}){let{html:M,nothing:D}=o,v=($,_)=>M`<div class="eq-sel">
      <span class="eq-ic">${e("package")}</span>
      <span class="eq-tx"><b>${$.nome}</b><small>${[$.zona,$.roomName].filter(Boolean).join(" \xB7 ")||"Sem c\xF4modo"}</small></span>
      <button type="button" class="icon-btn mini" aria-label="Tirar ${$.nome}" @click=${_}>${e("x")}</button>
    </div>`;if(Array.isArray(i)){let $=i.map(A=>t.find(E=>E.id===A)).filter(Boolean),_=$.map(A=>v(A,()=>p(A.id)));if($.length&&!f)return M`<div class="eq-pick">${_}<button type="button" class="eq-more eq-add" @click=${()=>u()}>${e("plus")}${y?"Outro bem":"Outro equipamento"}</button></div>`;let b=t.filter(A=>!i.includes(A.id));return M`<div class="eq-pick">${_}${g(b,$.length>0||x)}</div>`}let k=i?t.find($=>$.id===i):null;if(k)return v(k,()=>c(null));return g(t,x);function g($,_){let{inRoom:b,others:A}=Cr($,{room:a,query:r}),E=l?40:6,I=(te,V)=>M`<button type="button" class="eq-row" @click=${()=>c(te.id)}>
    <span class="eq-ic">${e("package")}</span>
    <span class="eq-tx"><b>${Tr(M,te.nome,r)}</b>${[te.zona,V?te.roomName:""].filter(Boolean).length?M`<small>${[te.zona,V?te.roomName:""].filter(Boolean).join(" \xB7 ")}</small>`:D}</span>
  </button>`,j=b.slice(0,E),H=A.slice(0,Math.max(0,E-j.length)),Z=b.length+A.length-j.length-H.length,he=D;return!r&&!a?he=M`<p class="eq-hint">Escolha o cômodo ou busque entre ${$.length} ${$.length===1?"equipamento":"equipamentos"}.</p>`:!r&&a&&!b.length?he=M`<p class="eq-hint">${y?"Nenhum bem no InventarIA.":`Nenhum equipamento em ${s}. Busque nos outros c\xF4modos.`}</p>`:r&&!b.length&&!A.length&&(he=M`<p class="eq-hint">Nada com “${r}”.</p>`),M`<div class="eq-pick">
    <label class="eq-search">${e("search")}<input type="search" .value=${r} placeholder=${a?`Buscar em ${s}\u2026`:"Buscar equipamento\u2026"} aria-label="Buscar equipamento" ?autofocus=${_} @input=${te=>d(te.target.value)} /></label>
    ${j.length?M`<div class="eq-list">${j.map(te=>I(te,!1))}</div>`:D}
    ${H.length?M`${a?M`<div class="eq-head">Em outros cômodos</div>`:D}<div class="eq-list">${H.map(te=>I(te,!0))}</div>`:D}
    ${Z>0?M`<button type="button" class="eq-more" @click=${()=>h()}>${e("chevron-down")}Mostrar mais ${Z}</button>`:D}
    ${he}
  </div>`}}var oi=`
  .eq-pick { display: grid; gap: 8px; }
  .eq-search { display: flex; align-items: center; gap: 10px; padding: 0 14px; min-height: 48px; border-radius: 14px; border: 1.5px solid var(--rv-line-strong, var(--rv-line)); background: var(--rv-input-bg, transparent); color: var(--rv-muted); }
  .eq-search:focus-within { border-color: var(--rv-accent); color: var(--rv-accent-ink); }
  .eq-search .i { width: 18px; height: 18px; flex: none; }
  .eq-search input { flex: 1; min-width: 0; border: 0 !important; outline: 0; background: none !important; padding: 12px 0 !important; font: inherit; font-size: 16px; color: var(--rv-text); box-shadow: none !important; }
  .eq-search input::-webkit-search-cancel-button { filter: grayscale(1); }
  .eq-list { display: grid; border: 1px solid var(--rv-line); border-radius: 14px; overflow: hidden; }
  .eq-row { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 12px; text-align: left; border-top: 1px solid var(--rv-line); background: none; color: var(--rv-text); }
  .eq-row:first-child { border-top: 0; }
  .eq-row:active, .eq-row:hover { background: var(--rv-accent-soft); }
  .eq-ic { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; flex: none; background: color-mix(in srgb, var(--rv-muted) 14%, transparent); color: var(--rv-text-2, var(--rv-muted)); }
  .eq-ic .i { width: 18px; height: 18px; }
  .eq-tx { display: flex; flex-direction: column; min-width: 0; flex: 1; }
  .eq-tx b { font-weight: 600; font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .eq-tx small { font-size: 12.5px; color: var(--rv-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .eq-tx mark { background: none; color: var(--rv-accent-ink); font-weight: 700; }
  .eq-head { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--rv-muted); padding: 4px 2px 0; }
  .eq-more { justify-self: start; padding: 4px 2px; font-weight: 600; font-size: 14px; color: var(--rv-accent-ink); background: none; }
  .eq-hint { margin: 0; padding: 2px; font-size: 13px; color: var(--rv-muted); }
  .eq-sel { display: flex; align-items: center; gap: 12px; padding: 10px 6px 10px 12px; border-radius: 14px; border: 1.5px solid var(--rv-accent); background: var(--rv-accent-soft); }
  .eq-sel .eq-ic { background: var(--rv-accent); color: var(--rv-on-accent, #fff); }
  .eq-pick > .eq-pick { gap: 8px; }
  .eq-more, .eq-add { display: inline-flex; align-items: center; gap: 6px; }
  .eq-more .i, .eq-add .i { width: 16px; height: 16px; flex: none; }
`;var La="M8 0h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8L0 13V7z",Er="M9.7 10a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 1 0 5.4 0z";function ri(o,e=new Date){let t=o.filter(s=>s.id!=="grafite"),a=Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5);return t[(a%t.length+t.length)%t.length]}function ni({theme:o,onTheme:e,icon:t}){return n`<div class="seg themes" role="radiogroup" aria-label="Tema">
    ${[["auto","Sistema","smartphone"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>n`<button type="button" class=${o===a?"on":""} role="radio" aria-checked=${o===a?"true":"false"} @click=${()=>e(a)}>${t(i)}<span>${s}</span></button>`)}
  </div>`}function li({palette:o,value:e,onPick:t}){return n`<div class="tag-swatches" role="radiogroup" aria-label="Cor do app">
    ${o.map(a=>n`<button type="button" class="tsw ${e===a.id?"on":""}" role="radio" aria-checked=${e===a.id?"true":"false"} style="--a:${a.fill}" @click=${()=>t(a.id)}>
        <svg viewBox="-5 -5 40 30" aria-hidden="true"><path class="sw-ring" d=${La}></path><path class="sw-gap" d=${La}></path><path class="sw-fill" d=${La+Er}></path><path class="sw-check" d="m14.6 10.3 3.2 3.2 6.5-6.9"></path></svg>
        <span>${a.label}</span>
      </button>`)}
  </div>`}var ci=`
  .seg.themes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); width: 100%; margin: 2px 0 18px; }
  .seg.themes { min-height: 50px; }
  .seg.themes button { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 7px; height: auto; min-height: 0; padding: 0 6px; font-size: 15px; }
  .seg.themes button .i { width: 18px; height: 18px; margin: 0; flex: none; }
  @media (max-width: 380px) { .seg.themes button .i { display: none; } }
  .seg.themes button.on .i { color: var(--rv-accent-ink); }
  .tag-swatches { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 4px; margin: 0 -6px 14px; }
  .tsw { --sw-bg: var(--rv-surface); position: relative; display: grid; justify-items: center; gap: 4px; padding: 8px 2px 7px; border-radius: 10px; background: var(--sw-bg); cursor: pointer; -webkit-tap-highlight-color: transparent; min-width: 0; }
  @media (hover: hover) { .tsw:hover { --sw-bg: var(--rv-surface-2); } }
  .tsw svg { width: 48px; height: 36px; overflow: visible; }
  .tsw .sw-fill { fill: var(--a); fill-rule: evenodd; stroke: color-mix(in srgb, var(--a) 80%, #000); stroke-width: 1; }
  .tsw .sw-ring, .tsw .sw-gap, .tsw .sw-check { fill: none; stroke-linejoin: round; stroke-linecap: round; visibility: hidden; }
  .tsw .sw-ring { stroke: var(--rv-text); stroke-width: 7; }
  .tsw .sw-gap { stroke: var(--sw-bg); stroke-width: 3.6; }
  .tsw .sw-check { stroke: rgba(20, 20, 20, 0.85); stroke-width: 2.4; }
  .tsw span { font-size: 13px; line-height: 1.2; color: var(--rv-muted); white-space: nowrap; letter-spacing: -0.01em; }
  @media (max-width: 420px) { .tsw span { font-size: 12px; } .tag-swatches { margin: 0 -10px 14px; gap: 2px; } }
  .tsw.on .sw-ring, .tsw.on .sw-gap, .tsw.on .sw-check { visibility: visible; }
  .tsw.on span { color: var(--rv-text); font-weight: 600; }
  .tsw:focus-visible { outline: 2px solid var(--rv-accent); outline-offset: 0; }
`;var pi=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],di=["D","S","T","Q","Q","S","S"],zr=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],Or=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Ke=o=>String(o).padStart(2,"0"),Ua=(o,e,t)=>`${o}-${Ke(e)}-${Ke(t)}`,Ee=o=>Ua(o.getFullYear(),o.getMonth()+1,o.getDate()),ot=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e);function hi(o="futuro",e=new Date){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate());if(o==="passado")return[{label:"Hoje",date:Ee(t)},{label:"Ontem",date:Ee(ot(t,-1))}];if(o==="livre")return[{label:"Hoje",date:Ee(t)},{label:"Ontem",date:Ee(ot(t,-1))},{label:"Amanh\xE3",date:Ee(ot(t,1))}];let a=t.getDay(),s=(6-a+7)%7||7,i=(1-a+7)%7||7,r=[{label:"Hoje",date:Ee(t)},{label:"Amanh\xE3",date:Ee(ot(t,1))}];return s>1&&r.push({label:"S\xE1bado",date:Ee(ot(t,s))}),i>1&&r.push({label:"Pr\xF3x. semana",date:Ee(ot(t,i))}),r}function ui(o,e=new Date){return/^\d{4}-\d{2}/.test(o||"")?o.slice(0,7):`${e.getFullYear()}-${Ke(e.getMonth()+1)}`}function ja(o,e){let[t,a]=o.split("-").map(Number),s=new Date(t,a-1+e,1);return`${s.getFullYear()}-${Ke(s.getMonth()+1)}`}function Va(o){let[e,t]=o.split("-").map(Number),a=pi[t-1];return`${a.charAt(0).toUpperCase()}${a.slice(1)} de ${e}`}function qr(o){let[e,t,a]=o.split("-").map(Number);return`${zr[new Date(e,t-1,a).getDay()]}, ${a} de ${pi[t-1]} de ${e}`}function Fr(o,e=0){let[t,a]=o.split("-").map(Number),s=(new Date(t,a-1,1).getDay()-e+7)%7,i=new Date(t,a,0).getDate(),r=Array.from({length:s},()=>null);for(let l=1;l<=i;l++)r.push(Ua(t,a,l));for(;r.length%7;)r.push(null);return r}function mi({icon:o,month:e,value:t,today:a,onPick:s,onMonth:i,min:r="",max:l="",weekStart:d=0,months:c=!1,onMonths:h=null}){let[p]=e.split("-").map(Number),u=D=>(!r||D>=r)&&(!l||D<=l),f=(D,v,k)=>n`<button type="button" class="icon-btn cal-nav" aria-label=${v} ?disabled=${!k} @click=${()=>i(ja(e,D))}>${o(D<0?"chevron-left":"chevron-right")}</button>`;if(c&&h){let D=v=>(!l||`${p}-${Ke(v+1)}-01`<=l)&&(!r||Ua(p,v+1,new Date(p,v+1,0).getDate())>=r);return n`<div class="cal" role="group" aria-label="Escolher o mês">
      <div class="cal-head">
        ${f(-12,"Ano anterior",!r||Number(r.slice(0,4))<p)}
        <button type="button" class="cal-title" aria-label="Voltar aos dias" @click=${()=>h(!1)}>${p}</button>
        ${f(12,"Pr\xF3ximo ano",!l||Number(l.slice(0,4))>p)}
      </div>
      <div class="cal-months">
        ${Or.map((v,k)=>{let g=`${p}-${Ke(k+1)}`,$=!!t&&t.slice(0,7)===g;return n`<button type="button" class="cal-month ${$?"on":""} ${a&&a.slice(0,7)===g?"today":""}" aria-pressed=${$?"true":"false"} ?disabled=${!D(k)} @click=${()=>(i(g),h(!1))}>${v}</button>`})}
      </div>
    </div>`}let x=ja(e,-1),y=`${x}-${Ke(new Date(Number(x.slice(0,4)),Number(x.slice(5,7)),0).getDate())}`,M=`${ja(e,1)}-01`;return n`<div class="cal" role="group" aria-label="Escolher a data">
    <div class="cal-head" data-month=${e}>
      ${f(-1,"M\xEAs anterior",!r||y>=r)}
      ${h?n`<button type="button" class="cal-title" aria-live="polite" aria-label=${`${Va(e)}: escolher o m\xEAs`} @click=${()=>h(!0)}>${Va(e)}</button>`:n`<b class="cal-title" aria-live="polite">${Va(e)}</b>`}
      ${f(1,"Pr\xF3ximo m\xEAs",!l||M<=l)}
    </div>
    <div class="cal-grid">
      ${di.map((D,v)=>n`<span class="cal-wd" aria-hidden="true">${di[(v+d)%7]}</span>`)}
      ${Fr(e,d).map(D=>D?n`<button type="button" class="cal-day ${D===t?"on":""} ${D===a?"today":""}" data-d=${D} aria-pressed=${D===t?"true":"false"} aria-current=${D===a?"date":m} aria-label=${qr(D)} ?disabled=${!u(D)} @click=${()=>s(D)}>${Number(D.slice(8))}</button>`:n`<span class="cal-gap"></span>`)}
    </div>
  </div>`}var fi=`
  .cal {
    margin-top: 2px;
    padding: 8px 8px 10px;
    border-radius: 18px;
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-bg);
  }
  .cal-head {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 4px;
  }
  .cal-title {
    flex: 1;
    min-width: 0;
    min-height: 40px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--rv-text);
  }
  button.cal-title:hover {
    background: color-mix(in srgb, var(--rv-text) 7%, transparent);
  }
  .cal .cal-nav:disabled,
  .cal-day:disabled,
  .cal-month:disabled {
    opacity: 0.3;
    cursor: default;
  }
  .cal-months {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 6px;
    padding: 4px 2px 2px;
  }
  .cal-month {
    min-height: 44px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;
    color: var(--rv-text);
  }
  .cal-month:hover:not(:disabled):not(.on) {
    background: color-mix(in srgb, var(--rv-text) 7%, transparent);
  }
  .cal-month.today {
    box-shadow: inset 0 0 0 1.5px var(--rv-accent);
    color: var(--rv-accent-ink);
    font-weight: 600;
  }
  .cal-month.on {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 700;
    box-shadow: none;
  }
  .cal .cal-nav {
    width: 40px;
    height: 40px;
    margin: 0;
    display: grid;
    place-items: center;
    flex: none;
    color: var(--rv-text-2);
  }
  .cal-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    row-gap: 2px;
  }
  .cal-wd {
    padding: 4px 0 6px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--rv-muted);
  }
  .cal-day {
    justify-self: center;
    width: min(100%, 42px);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: 15px;
    font-variant-numeric: tabular-nums;
    color: var(--rv-text);
  }
  .cal-day:hover:not(:disabled) {
    background: color-mix(in srgb, var(--rv-text) 7%, transparent);
  }
  .cal-day.today {
    box-shadow: inset 0 0 0 1.5px var(--rv-accent);
    color: var(--rv-accent-ink);
    font-weight: 600;
  }
  .cal-day.on {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 700;
    box-shadow: none;
  }
`;var Nr=(o,e=new Date)=>X(J(q(o),e,{long:!1})),gi=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,vi=/^\d{4}-\d{2}-\d{2}$/,Ba=class extends Ae{static properties={value:{},kind:{},min:{},max:{},weekStart:{type:Number},bid:{},none:{},label:{},_month:{state:!0},_months:{state:!0}};constructor(){super(),this.value="",this.kind="futuro",this.min="",this.max="",this.weekStart=1,this.bid="",this.none="",this.label="Data",this._month=null,this._months=!1}createRenderRoot(){return this}_pick(e){this._month=null,this._months=!1,this.dispatchEvent(new CustomEvent("pick",{detail:{value:e}}))}_toggle(){let e=O(new Date);this._months=!1,this._month=this._month?null:ui(vi.test(this.value||"")?this.value:this.min&&this.min>e?this.min:this.max&&this.max<e?this.max:""),this._month&&this.updateComplete&&this.updateComplete.then(()=>{let t=this.querySelector(".cal");t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",behavior:"smooth"})})}render(){let e=vi.test(this.value||"")?this.value:"",t=i=>(!this.min||i>=this.min)&&(!this.max||i<=this.max),a=this.kind==="nenhum"?[]:hi(this.kind).filter(i=>t(i.date)),s=!!e&&!a.some(i=>i.date===e);return n`<div class="chip-row grid dp-row" role="group" aria-label=${this.label}>
        ${this.none?n`<button type="button" class="pick ${e?"":"on"}" aria-pressed=${e?"false":"true"} @click=${()=>this._pick("")}>${this.none}</button>`:m}
        ${a.map(i=>n`<button type="button" class="pick ${i.date===e?"on":""}" aria-pressed=${i.date===e?"true":"false"} data-d=${i.date} @click=${()=>this._pick(i.date)}>${i.label}</button>`)}
        <button type="button" id=${this.bid||m} class="pick dp-other ${s?"on":""}" data-value=${e} aria-pressed=${s?"true":"false"} aria-expanded=${this._month?"true":"false"} @click=${()=>this._toggle()}>
          ${gi("calendar")}<span>${s?Nr(e):"Outra data"}</span>
        </button>
      </div>
      ${this._month?mi({icon:gi,month:this._month,value:e||null,today:O(new Date),min:this.min||"",max:this.max||"",weekStart:this.weekStart,months:this._months,onPick:i=>this._pick(i),onMonth:i=>this._month=i,onMonths:i=>this._months=i}):m}`}};typeof customElements<"u"&&customElements.define&&!customElements.get("date-pick")&&customElements.define("date-pick",Ba);function yt(o,e,t,{kind:a="futuro",min:s="",max:i="",weekStart:r=1,bid:l="",none:d=""}={}){return n`<div class="field dp-field">
    <span class="flabel">${o}</span>
    <date-pick .value=${e||""} .kind=${a} .min=${s||""} .max=${i||""} .weekStart=${r} .bid=${l} .none=${d} .label=${o} @pick=${c=>t(c.detail.value)}></date-pick>
  </div>`}var xi="./fonts/barlow-400.woff2";var bi="./fonts/barlow-500.woff2";var wi="./fonts/barlow-600.woff2";var $i="./fonts/barlow-condensed-500.woff2";var yi="./fonts/barlow-condensed-600.woff2";var _i="./fonts/barlow-condensed-700.woff2";var ki="./fonts/caveat-var.woff2";var Ai='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Di=`"CR Barlow", ${Ai}`,Mi=`"CR Barlow Condensed", ${Ai}`;function Si(){if(document.getElementById("cronologia-fonts"))return;let o=(t,a,s)=>`@font-face{font-family:"${t}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,e=document.createElement("style");e.id="cronologia-fonts",e.textContent=[o("CR Barlow",xi,400),o("CR Barlow",bi,500),o("CR Barlow",wi,"600 900"),o("CR Barlow Condensed",$i,500),o("CR Barlow Condensed",yi,600),o("CR Barlow Condensed",_i,"700 900"),o("CR Caveat",ki,"400 700")].join(`
`),document.head.appendChild(e)}var Kt=()=>n`<svg class="app-ic" viewBox="0 0 32 32" aria-hidden="true">
  <path d="M8 6h16a5 5 0 0 1 5 5v12.5L22.5 30H8a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5z" fill="var(--rv-accent)" />
  <path d="M8 6h16a5 5 0 0 1 5 5v1.6H3V11a5 5 0 0 1 5-5z" fill="#000" fill-opacity=".16" />
  <path d="M22.5 30v-4.6a1.9 1.9 0 0 1 1.9-1.9H29z" fill="#000" fill-opacity=".28" />
  <g fill="#000" fill-opacity=".17">
    <rect x="6.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="16.6" y="15.2" width="3.6" height="3.2" rx=".9" /><rect x="21.6" y="15.2" width="3.6" height="3.2" rx=".9" />
    <rect x="6.6" y="19.8" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="19.8" width="3.6" height="3.2" rx=".9" /><rect x="21.6" y="19.8" width="3.6" height="3.2" rx=".9" />
    <rect x="6.6" y="24.4" width="3.6" height="3.2" rx=".9" /><rect x="11.6" y="24.4" width="3.6" height="3.2" rx=".9" /><rect x="16.6" y="24.4" width="3.6" height="3.2" rx=".9" />
  </g>
  <rect x="16.6" y="19.8" width="3.6" height="3.2" rx=".9" fill="var(--rv-on-accent, #10262b)" />
  <path d="M11 2.8v6.4M21 2.8v6.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
</svg>`;var Ur="(min-width: 1000px)";function Ci(o,e=""){if(!o.touches||o.touches.length!==1||window.matchMedia&&window.matchMedia(Ur).matches)return null;let t=o.touches[0];if(t.clientX<24||t.clientX>window.innerWidth-24)return null;let a=`input, textarea, select, [contenteditable], .grip, [data-noswipe]${e?`, ${e}`:""}`;for(let s of o.composedPath()){if(s===o.currentTarget)break;if(!(s instanceof Element))continue;if(s.matches(a))return null;let i=getComputedStyle(s);if((i.overflowX==="auto"||i.overflowX==="scroll")&&s.scrollWidth>s.clientWidth+2)return null}return{x:t.clientX,y:t.clientY,at:Date.now()}}function Ti(o,e){if(!e||!o.changedTouches||!o.changedTouches.length)return 0;let t=o.changedTouches[0],a=t.clientX-e.x,s=t.clientY-e.y;return Math.abs(a)<70||Math.abs(a)<Math.abs(s)*2||Date.now()-e.at>800?0:a<0?1:-1}async function Ya(o,e,t){for(let s=0;s<30&&o._view().name!==e;s++)await new Promise(i=>setTimeout(i,16));await o.updateComplete;let a=o.renderRoot.querySelector("main > .page, main > section");!a||!a.animate||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||a.animate([{opacity:0,transform:`translateX(${t>0?40:-40}px)`},{opacity:1,transform:"none"}],{duration:280,easing:"cubic-bezier(0.2, 0.8, 0.2, 1)"})}var Ei=Ce`
  :host {
    --rv-body: ${me(Di)};
    --rv-display: ${me(Mi)};
    --rv-bg: #f4f8f9;
    --rv-surface: #ffffff;
    --rv-surface-2: #eaf2f4;
    --rv-line: #e0eaed;
    --rv-line-strong: #c9d8dd;
    --rv-text: #142026;
    --rv-text-2: #374850;
    --rv-muted: #627780;
    --rv-faint: #9aadb4;
    --rv-nav: #ffffff;
    --rv-scrim: rgba(10, 26, 32, 0.42);
    --rv-shadow: 0 18px 50px rgba(15, 60, 75, 0.18);
    --rv-on-accent: #0c1a1f;
    --rv-late: #d92d20;
    --rv-late-soft: rgba(217, 45, 32, 0.1);
    --rv-today: #b45309;
    --rv-today-soft: rgba(245, 158, 11, 0.14);
    --rv-skeleton: #e3edf0;
    --rv-header-bg: var(--app-header-background-color, #f4f8f9);
    --rv-header-fg: var(--app-header-text-color, #142026);
    --rv-nav-h: 68px;
    --rv-side-w: 272px;
    color-scheme: light;
    display: block;
    height: 100%;
    position: relative;
    font-family: var(--rv-body);
    color: var(--rv-text);
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.5;
  }
  :host([dark]) {
    --rv-bg: #0f1517;
    --rv-surface: #172022;
    --rv-surface-2: #1f2a2d;
    --rv-line: #273437;
    --rv-line-strong: #36474b;
    --rv-text: #eef5f6;
    --rv-text-2: #cfdde0;
    --rv-muted: #8fa5ab;
    --rv-faint: #5d7378;
    --rv-nav: #141c1e;
    --rv-scrim: rgba(0, 0, 0, 0.6);
    --rv-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    --rv-late: #ff6b5e;
    --rv-late-soft: rgba(255, 107, 94, 0.14);
    --rv-today: #ffb547;
    --rv-today-soft: rgba(255, 181, 71, 0.14);
    --rv-skeleton: #1f2a2d;
    --rv-header-bg: var(--app-header-background-color, #0d1214);
    --rv-header-fg: var(--app-header-text-color, #eef5f6);
    color-scheme: dark;
  }
  :host([vh]) {
    height: 100vh;
    height: 100dvh;
  }
  * {
    box-sizing: border-box;
  }
  button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
  button:disabled {
    cursor: default;
  }
  input,
  textarea {
    font: inherit;
    color: inherit;
  }
  :focus-visible {
    outline: 2px solid var(--rv-accent-ink);
    outline-offset: 2px;
  }
  .i {
    width: 22px;
    height: 22px;
    flex: none;
    display: block;
  }
  .sr {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  /* ---------- shell ---------- */
  .root {
    display: contents;
  }
  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--rv-bg);
    overflow: hidden;
  }
  .topbar {
    flex: none;
    height: var(--header-height, 56px);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px 0 4px;
    background: var(--rv-header-bg);
    color: var(--rv-header-fg);
  }
  .topbar .title {
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0;
    margin-left: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--rv-display);
  }
  .topbar .title b {
    font-weight: 700;
  }
  .icon-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    flex: none;
  }
  .icon-btn:active {
    background: rgba(127, 127, 127, 0.16);
  }
  main {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
  }
  .page {
    max-width: 720px;
    margin: 0 auto;
    padding: 18px 18px 36px;
    animation: rv-in 0.28s ease both;
  }
  @keyframes rv-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
  }

  .display {
    font-family: var(--rv-display);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.05;
    margin: 0;
  }
  .page-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 2px 2px 12px;
  }
  .page-head h1 {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.2;
  }
  .page-sub {
    color: var(--rv-muted);
    font-size: 16px;
    line-height: 1.5;
    margin: -8px 2px 20px;
  }
  .overline {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rv-muted);
  }

  /* ---------- hero (spiral notebook page) ---------- */
  .hero {
    position: relative;
    margin: 28px 4px 30px;
    transform: rotate(-1.4deg);
  }
  .hero-card {
    position: relative;
    background-color: var(--rv-accent);
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0 33px,
      rgba(0, 0, 0, 0.075) 33px 34.5px
    );
    background-position: 0 30px;
    color: var(--rv-on-accent);
    border-radius: 8px 8px 8px 8px;
    padding: 36px 22px 20px 28px;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
    min-height: 160px;
  }
  .hero-card::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 18px;
    width: 2px;
    background: rgba(0, 0, 0, 0.12);
  }
  .hero-fold {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.28) 0 50%, transparent 50%);
    border-radius: 0 0 0 6px;
    filter: drop-shadow(-2px -2px 3px rgba(0, 0, 0, 0.12));
  }
  .rings {
    position: absolute;
    left: 26px;
    right: 26px;
    top: -14px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    pointer-events: none;
  }
  .ring {
    position: relative;
    width: 12px;
    height: 34px;
  }
  .ring::before {
    /* the hole punched in the page */
    content: "";
    position: absolute;
    left: 1px;
    top: 21px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--rv-bg);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.35);
  }
  .ring::after {
    /* the wire loop */
    content: "";
    position: absolute;
    left: 2px;
    top: 0;
    width: 8px;
    height: 27px;
    border-radius: 6px;
    border: 2.5px solid var(--rv-text-2);
    border-bottom-color: transparent;
    opacity: 0.85;
  }
  .hero-kicker {
    font-weight: 500;
    font-size: 15px;
    opacity: 0.75;
    margin-bottom: 8px;
  }
  .hero-big {
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: clamp(48px, 14vw, 76px);
    line-height: 0.95;
    letter-spacing: 0;
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
    font-variant-numeric: tabular-nums;
  }
  .hero-big small {
    font-size: 25px;
    letter-spacing: 0;
    font-weight: 600;
  }
  .hero-sub {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.78;
  }
  .stamp {
    position: absolute;
    right: 20px;
    top: 40px;
    transform: rotate(9deg);
    border: 3.5px solid currentColor;
    border-radius: 10px;
    padding: 4px 10px 3px;
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 1.5px;
    opacity: 0.32;
    color: var(--rv-on-accent);
    animation: rv-stamp 0.45s cubic-bezier(0.2, 1.6, 0.4, 1) both;
  }
  @keyframes rv-stamp {
    from {
      transform: rotate(9deg) scale(1.6);
      opacity: 0;
    }
  }

  /* ---------- cards / panels ---------- */
  .sec-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0 2px 12px;
  }
  .sec-head h2 {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.1;
  }
  .text-btn {
    color: var(--rv-accent-ink);
    font-weight: 600;
    font-size: 14px;
    padding: 8px 4px;
  }
  .panel {
    background: var(--rv-surface);
    border: 1px solid var(--rv-line);
    border-radius: 22px;
    padding: 6px 18px;
    margin-bottom: 18px;
  }
  .panel > .overline {
    padding: 16px 0 6px;
  }
  /* Sensores no Home Assistant: the entities, one per line */
  .sensor-list {
    display: grid;
    gap: 2px;
    padding: 4px 0 14px;
  }
  .sensor-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px 10px;
    padding: 8px 0;
    border-top: 1px solid var(--rv-line);
    font-size: 13.5px;
    color: var(--rv-muted);
  }
  .ha-events {
    display: grid;
    gap: 4px;
    padding: 6px 0 0;
  }
  .ha-events > b {
    font-size: 15px;
    font-weight: 600;
  }
  .ha-ev-lead {
    font-size: 13.5px;
    line-height: 1.45;
    color: var(--rv-muted);
  }
  .sensor-row span code {
    font-size: 12.5px;
    padding: 0 4px;
  }
  .sensor-row code {
    font-size: 13px;
    padding: 1px 6px;
    border-radius: 6px;
    background: var(--rv-surface-2);
    color: var(--rv-text);
  }
  /* computer only: the actions at the top right */
  .top-acts {
    display: none;
  }
  /* Mais: section headings like the InventarIA (icon in a soft square + big title) */
  .mais-head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0 10px;
  }
  .mais-head h2 {
    margin: 0;
    font-family: var(--rv-display);
    font-size: 23px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0.005em;
    color: var(--rv-text);
  }
  .mais-ic {
    display: grid;
    place-items: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .mais-ic .i {
    width: 21px;
    height: 21px;
    stroke-width: 1.9;
  }
  /* Mais: the menu, like the InventarIA (a row per screen, Configurações last) */
  .menu-list {
    list-style: none;
    margin: 0 0 18px;
  }
  .menu-row {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    min-height: 76px;
    padding: 12px 0;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .menu-list > li:first-child > .menu-row {
    border-top: 0;
  }
  .menu-row .mb {
    flex: 1;
    min-width: 0;
    display: grid;
    gap: 2px;
  }
  .menu-row b {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.25;
  }
  .menu-row .mb span {
    color: var(--rv-muted);
    font-size: 14px;
    line-height: 1.35;
  }
  .menu-row > .i {
    flex: none;
    width: 20px;
    height: 20px;
    color: var(--rv-faint);
  }
  @media (hover: hover) {
    .menu-row:hover b {
      color: var(--rv-accent-ink);
    }
    .uplink:hover {
      background: var(--rv-surface-2);
      color: var(--rv-text);
    }
  }
  /* the screens of Mais: "‹ Mais" above the title, back to the menu */
  .uplink {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin: 12px 0 0 -6px;
    padding: 6px 10px 6px 2px;
    border-radius: 10px;
    color: var(--rv-text-2);
    font-weight: 500;
    font-size: 15px;
  }
  .uplink .i {
    width: 20px;
    height: 20px;
  }
  /* Novo › Rotina, Remédio, Manutenção › Repete: a grid of two lines, the choice filled like the chips */
  .seg.seg-grid {
    display: grid;
  }
  .seg.seg-grid button {
    padding: 8px 4px;
    min-height: 46px;
    font-size: 13.5px;
    line-height: 1.2;
    text-align: center;
    text-wrap: balance;
    min-width: 0;
  }
  .seg.seg-grid button.on,
  :host([dark]) .seg.seg-grid button.on {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  /* Novo › Evento › Repetir: one line, the choice filled like the chips */
  .seg.rep-seg button {
    padding: 9px 2px;
    font-size: 14px;
    min-width: 0;
  }
  .seg.rep-seg button.on,
  :host([dark]) .seg.rep-seg button.on {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  @media (max-width: 380px) {
    .seg.rep-seg button {
      font-size: 13px;
    }
  }
  .seg.week-seg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2px 0 18px;
  }
  .mais-head + .panel-lead {
    margin-top: 0;
  }
  .sec-actions {
    padding-bottom: 16px;
  }
  .panel > .panel-lead:last-child {
    margin-bottom: 18px;
  }
  .panel-title {
    font-size: 25px;
    padding: 18px 0 2px;
    font-weight: 600;
    line-height: 1.1;
  }

  .list-card {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 14px 0;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .panel > .overline + .list-card,
  .panel > .list-card:first-child {
    border-top: 0;
  }
  .list-card.off {
    opacity: 0.5;
  }
  .tile {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: var(--cs);
    color: var(--ci);
    flex: none;
  }
  .tile .i {
    width: 21px;
    height: 21px;
  }
  .lc-main {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .lc-title {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lc-meta {
    font-size: 14px;
    color: var(--rv-muted);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .bar {
    height: 5px;
    border-radius: 3px;
    background: var(--rv-surface-2);
    overflow: hidden;
    margin-top: 4px;
  }
  .bar > i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--c, var(--rv-accent));
    transition: width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .lc-num {
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 19px;
    line-height: 1;
    min-width: 26px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
  .lc-num.zero {
    color: var(--ci);
  }
  .lc-num .i {
    width: 20px;
    height: 20px;
    margin-left: auto;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid var(--rv-line-strong);
    border-radius: 8px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--rv-text-2);
    white-space: nowrap;
  }
  .tag .i {
    width: 13px;
    height: 13px;
  }
  .tag.late {
    border-color: transparent;
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .tag.today {
    border-color: transparent;
    background: var(--rv-today-soft);
    color: var(--rv-today);
  }
  .tag.rep {
    border-color: transparent;
    background: var(--rv-surface-2);
    color: var(--rv-text-2);
  }
  .item.done .tag.rep {
    background: var(--cs, var(--rv-accent-soft));
    color: var(--ci, var(--rv-accent-ink));
  }
  .field-hint {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    line-height: 1.45;
    color: var(--rv-muted);
    margin-top: 2px;
  }
  .field-hint .i {
    width: 17px;
    height: 17px;
    margin-top: 1px;
    color: var(--rv-accent-ink);
  }
  .field input.num {
    width: 84px;
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-bg);
    border-radius: 12px;
    padding: 9px 12px;
    font-size: 16px;
    outline: 0;
    text-align: center;
  }
  .field input.num:focus {
    border-color: var(--rv-accent);
  }
  .offline {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 16px;
    font-size: 15px;
    font-weight: 500;
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .offline .i {
    width: 17px;
    height: 17px;
  }
  .tag.list {
    border-color: transparent;
    background: var(--cs);
    color: var(--ci);
  }

  /* ---------- list detail ---------- */
  .detail-head {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin: -6px -8px 6px -12px;
  }
  .detail-head .dh-text {
    flex: 1;
    min-width: 0;
    padding-top: 6px;
  }
  .detail-head h1 {
    font-size: clamp(34px, 9vw, 46px);
    overflow-wrap: anywhere;
    font-weight: 700;
    line-height: 1;
  }
  .detail-head .overline {
    margin-bottom: 6px;
  }
  .progress {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 8px 2px 16px;
    font-size: 14px;
    color: var(--rv-muted);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
  .progress .bar {
    flex: 1;
    margin: 0;
    height: 6px;
  }

  .quick {
    position: sticky;
    top: 0;
    z-index: 3;
    margin: 0 -18px 14px;
    padding: 6px 18px 10px;
    background: linear-gradient(var(--rv-bg) 78%, transparent);
  }
  .quick form {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--rv-surface);
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 18px;
    padding: 6px 6px 6px 16px;
    transition: border-color 0.15s;
  }
  .quick form:focus-within {
    border-color: var(--rv-accent);
  }
  .quick input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: none;
    font-size: 16px;
    padding: 10px 0;
  }
  .quick input::placeholder {
    color: var(--rv-faint);
  }
  .add-btn {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    display: grid;
    place-items: center;
    flex: none;
    transition: transform 0.12s;
  }
  .add-btn:active {
    transform: scale(0.92);
  }

  .panel.items {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 13px 0;
    border-top: 1px solid var(--rv-line);
  }
  .items > .item:first-child,
  .panel > .overline + .item {
    border-top: 0;
  }
  .item.dragging {
    z-index: 2;
    background: var(--rv-surface);
    border-radius: 14px;
    box-shadow: var(--rv-shadow), 0 0 0 10px var(--rv-surface);
    border-top-color: transparent;
    transition: none !important;
  }
  .item.shifting {
    transition: transform 0.18s ease;
  }
  .check {
    width: 24px;
    height: 24px;
    margin-top: -1px;
    border-radius: 9px;
    border: 2.2px solid var(--rv-line-strong);
    display: grid;
    place-items: center;
    flex: none;
    color: transparent;
    position: relative;
    transition: background 0.18s, border-color 0.18s, transform 0.12s;
  }
  .check::after {
    /* bigger touch target */
    content: "";
    position: absolute;
    inset: -10px;
  }
  .check .i {
    width: 16px;
    height: 16px;
    stroke-width: 3.2;
  }
  .check:active {
    transform: scale(0.88);
  }
  .check.on {
    background: var(--c, var(--rv-accent));
    border-color: var(--c, var(--rv-accent));
    color: var(--rv-on-accent);
    animation: rv-pop 0.32s cubic-bezier(0.2, 1.8, 0.4, 1);
  }
  @keyframes rv-pop {
    40% {
      transform: scale(1.18);
    }
  }
  .it-body {
    flex: 1;
    min-width: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .it-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    overflow-wrap: anywhere;
    transition: color 0.2s;
  }
  .item.done .it-text {
    color: var(--rv-faint);
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
  }
  .it-desc {
    font-size: 14px;
    color: var(--rv-muted);
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  /* the rooms and the equipments of a maintenance or a task, like the ResolvIA */
  .tag.room {
    background: color-mix(in srgb, var(--rv-muted) 14%, transparent);
    color: var(--rv-text-2);
  }
  /* a grid of tags of the same width (1.60.3): side by side and aligned; a long name ends in "…" */
  .place-tags {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 8.5em), 1fr));
    gap: 6px;
    margin: 6px 0 2px;
    font-size: 12px;
  }
  .place-tags .tag {
    min-width: 0;
  }
  /* one tag alone (Vários equipamentos, Todos os cômodos, a long name): the whole line, its own width */
  .place-tags .tag:only-child {
    grid-column: 1 / -1;
    justify-self: start;
    max-width: 100%;
  }
  .place-tags .tag .i {
    flex: none;
  }
  .place-tags .tt {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lnk {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    vertical-align: bottom;
    color: var(--ci, var(--rv-accent-ink));
    font-weight: 600;
    text-decoration: none;
    background: var(--cs, var(--rv-accent-soft));
    border-radius: 8px;
    padding: 1px 8px 1px 6px;
    margin: 1px 0;
  }
  .lnk span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lnk .i {
    width: 14px;
    height: 14px;
  }
  .item.done .lnk {
    opacity: 0.6;
  }
  mark {
    background: var(--rv-accent-soft);
    color: inherit;
    border-radius: 4px;
    padding: 0 1px;
  }
  .grip {
    width: 36px;
    height: 36px;
    margin: -5px -8px -5px 0;
    display: grid;
    place-items: center;
    color: var(--rv-faint);
    touch-action: none;
    cursor: grab;
    flex: none;
  }
  .grip:active {
    cursor: grabbing;
  }

  .done-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px 2px 10px;
  }
  .done-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 25px;
    line-height: 1.1;
  }
  .done-toggle .count {
    color: var(--rv-muted);
  }
  .done-toggle .i {
    transition: transform 0.2s;
    color: var(--rv-muted);
  }
  .done-toggle.open .i {
    transform: rotate(180deg);
  }

  .empty {
    text-align: center;
    padding: 34px 20px 30px;
    color: var(--rv-muted);
  }
  .empty .big-stamp {
    display: inline-block;
    transform: rotate(-6deg);
    border: 4px solid var(--rv-accent-ink);
    color: var(--rv-accent-ink);
    border-radius: 12px;
    padding: 6px 16px 4px;
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 16px;
    animation: rv-stamp2 0.5s cubic-bezier(0.2, 1.6, 0.4, 1) both;
  }
  @keyframes rv-stamp2 {
    from {
      transform: rotate(-6deg) scale(1.7);
      opacity: 0;
    }
  }
  .empty .em-icon {
    width: 50px;
    height: 50px;
    border-radius: 18px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
    display: grid;
    place-items: center;
    margin: 0 auto 14px;
  }
  .empty h3 {
    color: var(--rv-text);
    font-family: var(--rv-display);
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 6px;
    line-height: 1.1;
  }
  .empty p {
    margin: 0 auto;
    max-width: 340px;
    line-height: 1.5;
    font-size: 16px;
  }

  .skeleton {
    height: 18px;
    border-radius: 6px;
    margin: 20px 0;
    background: linear-gradient(90deg, var(--rv-skeleton), var(--rv-surface-2), var(--rv-skeleton));
    background-size: 200% 100%;
    animation: rv-shimmer 1.2s linear infinite;
  }
  @keyframes rv-shimmer {
    to {
      background-position: -200% 0;
    }
  }

  /* ---------- search ---------- */
  .search-box {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--rv-surface);
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 18px;
    padding: 4px 6px 4px 16px;
    margin-bottom: 14px;
    color: var(--rv-muted);
  }
  .search-box:focus-within {
    border-color: var(--rv-accent);
  }
  .search-box input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: none;
    font-size: 16px;
    padding: 12px 0;
    color: var(--rv-text);
  }
  .search-box input::-webkit-search-cancel-button {
    display: none;
  }
  .filters {
    display: flex;
    gap: 8px;
    margin: 0 0 18px;
    flex-wrap: wrap;
  }

  /* ---------- chips / pickers ---------- */
  .pick {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 12px;
    padding: 8px 13px;
    font-size: 14px;
    font-weight: 500;
    color: var(--rv-text-2);
    white-space: nowrap;
    max-width: 100%;
    position: relative;
  }
  .pick > span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pick .i {
    width: 16px;
    height: 16px;
  }
  .pick.on {
    background: var(--rv-accent);
    border-color: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 600;
  }
  .pick.list .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--c);
    flex: none;
  }
  .pick.list.on {
    background: var(--cs);
    border-color: var(--c);
    color: var(--rv-text);
  }
  .pick.ghost {
    border-style: dashed;
  }
  /* choices: buttons of the same width, in columns, like the EconomIA */
  .chip-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 9.5em), 1fr));
    gap: 8px;
  }
  .chip-row > .pick {
    justify-content: center;
    min-height: 44px;
    padding: 8px 10px;
    text-align: center;
    white-space: normal;
    line-height: 1.2;
    min-width: 0;
  }
  .chip-row > .pick > span {
    overflow: visible;
    text-overflow: clip;
  }
  /* short labels (dates, durations, points): three or four in a row */
  .chip-row.c3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .chip-row.c4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .chip-row.c3 > .pick,
  .chip-row.c4 > .pick {
    padding-left: 6px;
    padding-right: 6px;
  }
  /* a number or a time typed in the same row: as wide as a button */
  .chip-row > .num-input,
  .chip-row > .inline-time {
    width: 100% !important;
    min-height: 44px;
  }
  .chip-row > .pickf.inline-time {
    border-radius: 12px;
    padding: 0 10px 0 12px;
  }
  /* ideas to tap (Deméritos): they keep flowing like tags */
  .chip-row.dm-ideas {
    display: flex;
    flex-wrap: wrap;
  }
  .chip-row.dm-ideas > .pick {
    min-height: 0;
  }

  /* ---------- settings ---------- */
  .row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 13px 0;
    border-top: 1px solid var(--rv-line);
    width: 100%;
    text-align: left;
    min-height: 54px;
  }
  .panel > .overline + .row,
  .panel > .row:first-child {
    border-top: 0;
  }
  .row.col {
    flex-direction: column;
    align-items: stretch;
  }
  .row .grow {
    flex: 1;
    min-width: 0;
  }
  .row .label {
    font-size: 16px;
    font-weight: 500;
  }
  .row .hint {
    font-size: 14px;
    color: var(--rv-muted);
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .row .tile {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }
  .row .tile .i {
    width: 20px;
    height: 20px;
  }
  .seg {
    display: flex;
    background: var(--rv-surface-2);
    border-radius: 14px;
    padding: 4px;
    gap: 4px;
  }
  .seg button {
    flex: 1;
    padding: 9px 6px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    color: var(--rv-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .seg button .i {
    width: 17px;
    height: 17px;
  }
  .seg button.on {
    background: var(--rv-surface);
    color: var(--rv-text);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    font-weight: 600;
  }
  :host([dark]) .seg button.on {
    background: var(--rv-line-strong);
  }
  .switch {
    position: relative;
    width: 50px;
    height: 30px;
    flex: none;
  }
  .switch input {
    position: absolute;
    inset: 0;
    opacity: 0;
    margin: 0;
    cursor: pointer;
    z-index: 1;
  }
  .switch .track {
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background: var(--rv-line-strong);
    transition: background 0.18s;
  }
  .switch .track::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s cubic-bezier(0.3, 1.4, 0.5, 1);
  }
  .switch input:checked + .track {
    background: var(--rv-accent);
  }
  .switch input:checked + .track::after {
    transform: translateX(20px);
  }
  .switch input:focus-visible + .track {
    outline: 2px solid var(--rv-accent-ink);
    outline-offset: 2px;
  }
  .swatches {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .sw {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--c);
    display: grid;
    place-items: center;
    color: var(--rv-on-accent);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
    transition: transform 0.12s;
  }
  .sw.on {
    box-shadow: 0 0 0 3px var(--rv-surface), 0 0 0 5px var(--c);
  }
  .sw .i {
    width: 19px;
    height: 19px;
    stroke-width: 3;
  }
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));
    gap: 8px;
  }
  .ig {
    aspect-ratio: 1;
    border-radius: 13px;
    display: grid;
    place-items: center;
    color: var(--rv-muted);
    background: var(--rv-surface-2);
  }
  .ig.on {
    background: var(--cs);
    color: var(--ci);
    box-shadow: inset 0 0 0 2px var(--c);
  }
  .foot {
    text-align: center;
    color: var(--rv-faint);
    font-size: 13px;
    margin: 26px 0 8px;
    line-height: 1.6;
  }
  .foot b {
    font-family: var(--rv-display);
    font-size: 19px;
    color: var(--rv-muted);
    letter-spacing: 0.3px;
    font-weight: 600;
  }

  /* ---------- bottom nav ---------- */
  nav {
    flex: none;
    background: var(--rv-nav);
    border-top: 1px solid var(--rv-line);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  nav .tabs {
    max-width: 600px;
    margin: 0 auto;
    height: var(--rv-nav-h);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
  }
  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    color: var(--rv-muted);
    padding: 8px 0;
    position: relative;
  }
  .tab .i {
    width: 23px;
    height: 23px;
  }
  .tab.on {
    color: var(--rv-text);
    font-weight: 600;
  }
  .tab.on .i {
    color: var(--rv-accent-ink);
  }
  .tab .badge {
    position: absolute;
    top: 0;
    left: calc(50% + 5px);
    min-width: 22px;
    height: 20px;
    padding: 0 6px;
    border-radius: 11px;
    background: var(--rv-late);
    color: #fff;
    font-family: var(--rv-display);
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 2px var(--rv-nav);
    box-sizing: border-box;
  }
  /* Adicionar: only the + (1.75.0, every app of the family): the button stands out already, no text under it */
  .tab.fab {
    color: var(--rv-text);
    font-weight: 600;
    justify-content: center;
  }
  .tab.fab .pill {
    width: 62px;
    height: 44px;
    border-radius: 15px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    display: grid;
    place-items: center;
    transition: transform 0.12s;
  }
  .tab.fab:active .pill {
    transform: scale(0.92);
  }
  .tab.fab .pill .i {
    width: 24px;
    height: 24px;
    stroke-width: 2.4;
  }

  /* ---------- sheet ---------- */
  .scrim {
    position: fixed;
    inset: 0;
    background: var(--rv-scrim);
    z-index: 20;
    animation: rv-fade 0.2s ease both;
  }
  @keyframes rv-fade {
    from {
      opacity: 0;
    }
  }
  .sheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 21;
    max-width: 640px;
    margin: 0 auto;
    max-height: 90%;
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--rv-surface);
    border-radius: 28px 28px 0 0;
    padding: 10px 20px calc(22px + env(safe-area-inset-bottom, 0px));
    box-shadow: var(--rv-shadow);
    animation: rv-up 0.3s cubic-bezier(0.2, 0.9, 0.25, 1) both;
  }
  @keyframes rv-up {
    from {
      transform: translateY(100%);
    }
  }
  .grab {
    width: 42px;
    height: 5px;
    border-radius: 3px;
    background: var(--rv-line-strong);
    margin: 0 auto 12px;
  }
  .sheet-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 14px;
  }
  .sheet-head h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.15;
  }
  .sheet-head .icon-btn {
    width: 42px;
    height: 42px;
    margin-right: -8px;
    color: var(--rv-muted);
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 18px;
  }
  .field > .flabel {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
    color: var(--rv-text-2);
  }
  .field textarea,
  .field input[type="text"] {
    width: 100%;
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-bg);
    border-radius: 14px;
    padding: 12px 14px;
    font-size: 16px;
    outline: 0;
    resize: none;
    line-height: 1.4;
  }
  .field textarea:focus,
  .field input:focus {
    border-color: var(--rv-accent);
  }
  .field .time-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }
  .field .time-row input {
    width: auto;
    padding: 9px 12px;
    font-size: 16px;
  }
  /* from and until: the two times share the width */
  .field .time-row .pickf.t {
    flex: 1;
  }
  .field .time-row .tl {
    color: var(--rv-muted);
    font-weight: 500;
    font-size: 14px;
  }
  .sheet-actions {
    display: flex;
    gap: 10px;
    margin-top: 8px;
  }
  .btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 48px;
    border-radius: 15px;
    font-weight: 500;
    font-size: 15px;
    padding: 0 18px;
    transition: transform 0.12s;
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btn.primary {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 600;
  }
  .btn.outline {
    border: 1.5px solid var(--rv-line-strong);
  }
  .btn.danger {
    flex: none;
    color: var(--rv-late);
    border: 1.5px solid var(--rv-line-strong);
  }
  .menu-row {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 13px 4px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .menu-row:first-of-type {
    border-top: 0;
  }
  .menu-row .i {
    color: var(--rv-muted);
  }
  .menu-row.danger,
  .menu-row.danger .i {
    color: var(--rv-late);
  }
  .menu-row .sub {
    margin-left: auto;
    color: var(--rv-muted);
    font-weight: 400;
    font-size: 14px;
  }
  .preview-tile {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px;
    border-radius: 18px;
    background: var(--rv-bg);
    margin-bottom: 18px;
  }
  .preview-tile .lc-title {
    font-size: 17px;
  }
  .confirm-text {
    color: var(--rv-text-2);
    font-size: 16px;
    line-height: 1.5;
    margin: -4px 0 20px;
  }

  /* ---------- import ---------- */
  .imp-btn {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    flex: none;
    color: var(--rv-accent-ink);
    background: var(--rv-accent-soft);
  }
  .imp-btn .i {
    width: 20px;
    height: 20px;
  }
  /* Novo › Evento: Colar mensagem / Escolher fotos / Digitalizar com IA, dashed tiles like the InventarIA and the ResolvIA */
  .imp-field {
    margin-bottom: 12px;
  }
  .imp-tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  /* with Falar: four, lower */
  .imp-tiles:has(> :nth-child(4)) {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  .imp-tiles:has(> :nth-child(4)) .imp-tile {
    aspect-ratio: auto;
    min-height: 92px;
    padding: 8px 4px;
    font-size: 13px;
  }
  /* Digitalizar without camera (http): says so on the tile */
  .imp-tile.no-cam {
    border-style: dotted;
    color: var(--rv-muted);
  }
  .imp-tile.no-cam small {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--rv-late, var(--rv-muted));
  }
  .imp-tile {
    aspect-ratio: 1;
    border-radius: 12px;
    border: 1.5px dashed var(--rv-line-strong);
    background: transparent;
    color: var(--rv-text);
    display: grid;
    place-items: center;
    align-content: center;
    gap: 8px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    text-align: center;
    text-wrap: balance;
  }
  .imp-tile .i {
    width: 22px;
    height: 22px;
    color: var(--rv-text-2);
  }
  .imp-tile:hover:not([disabled]),
  .imp-tile:focus-visible {
    border-color: var(--rv-text-2);
    background: var(--rv-surface-2);
  }
  .imp-tile[disabled] {
    opacity: 0.45;
  }
  .imp-help {
    margin: 10px 0 0;
    font-size: 13.5px;
    line-height: 1.5;
    color: var(--rv-muted);
  }
  .ai-box {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 14px;
    border-radius: 12px;
    background: var(--rv-surface-2);
    border: 1px solid var(--rv-line);
    font-size: 14px;
    line-height: 1.5;
    color: var(--rv-muted);
    margin-bottom: 18px;
  }
  .ai-box .i {
    flex: none;
    width: 17px;
    height: 17px;
    margin-top: 2px;
  }
  .imp-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 14px;
  }
  .imp-opt {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 13px 14px;
    border-radius: 16px;
    border: 1.5px solid var(--rv-line-strong);
    text-align: left;
  }
  .imp-opt:disabled {
    opacity: 0.45;
  }
  .imp-opt > .i {
    color: var(--rv-faint);
    width: 18px;
    height: 18px;
  }
  .imp-ic {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
    flex: none;
  }
  .imp-ic .i {
    width: 21px;
    height: 21px;
  }
  .imp-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .imp-tx b {
    font-size: 16px;
    font-weight: 600;
  }
  .imp-tx small {
    font-size: 13px;
    color: var(--rv-muted);
  }
  .imp-error {
    display: flex;
    gap: 9px;
    align-items: flex-start;
    padding: 11px 13px;
    border-radius: 13px;
    background: var(--rv-late-soft);
    color: var(--rv-late);
    font-size: 13px;
    line-height: 1.45;
    margin-bottom: 14px;
  }
  .imp-error.soft {
    background: var(--rv-surface-2);
    color: var(--rv-text-2);
  }
  .imp-error .i {
    width: 17px;
    height: 17px;
    margin-top: 1px;
    flex: none;
  }
  .imp-error.soft .i {
    color: var(--rv-accent-ink);
  }
  .thumbs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    margin: -2px 0 14px;
    padding-bottom: 2px;
  }
  .thumbs img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
    flex: none;
    border: 1px solid var(--rv-line);
  }
  /* 1.84.0: o PDF lido (Escolher fotos ou PDF) */
  .thumbs .thumb-pdf {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    flex: none;
    display: grid;
    place-items: center;
    border: 1px solid var(--rv-line);
    color: var(--rv-accent-ink, var(--rv-accent));
  }
  .imp-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 26px 0 30px;
    color: var(--rv-muted);
    font-weight: 500;
    font-size: 15px;
  }
  .spin {
    color: var(--rv-accent-ink);
    animation: rv-spin 0.9s linear infinite;
  }
  .spin .i {
    width: 34px;
    height: 34px;
  }
  @keyframes rv-spin {
    to {
      transform: rotate(360deg);
    }
  }
  .imp-list {
    border: 1px solid var(--rv-line);
    border-radius: 16px;
    padding: 4px 6px 10px 12px;
    margin-bottom: 18px;
  }
  .imp-row {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--rv-line);
    padding: 4px 0;
  }
  .imp-row .check {
    width: 22px;
    height: 22px;
    border-radius: 7px;
    margin: 0;
  }
  .imp-row .check .i {
    width: 14px;
    height: 14px;
  }
  .imp-row input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: none;
    font-size: 16px;
    padding: 10px 0;
  }
  .imp-row.off input {
    color: var(--rv-faint);
    text-decoration: line-through;
  }
  .icon-btn.mini {
    width: 36px;
    height: 36px;
    color: var(--rv-faint);
  }
  .icon-btn.mini .i {
    width: 18px;
    height: 18px;
  }
  .imp-list .add-row {
    margin-top: 10px;
  }
  .sheet-note {
    color: var(--rv-muted);
    font-size: 13px;
    line-height: 1.5;
    margin: 12px 2px 0;
  }
  .sheet-note.top {
    margin: -6px 2px 14px;
  }
  .sheet-head .back {
    width: 40px;
    height: 40px;
    margin-left: -10px;
    margin-right: -6px;
    color: var(--rv-text);
  }
  .sheet-head h3 {
    flex: 1;
  }
  .btn:disabled {
    opacity: 0.5;
  }

  /* ---------- page header (same values as EconomIA / InventarIA) ---------- */
  .brand-head {
    margin: 2px 2px 18px;
  }
  .eyebrow {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rv-muted);
    font-weight: 600;
  }
  .brand {
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: var(--rv-text);
  }
  .brand span {
    color: var(--rv-accent-ink);
  }
  /* the icon of the app before its name */
  .app-ic {
    display: inline-block;
    width: 1.15em;
    height: 1.15em;
    margin-right: 0.28em;
    vertical-align: -0.2em;
    color: var(--rv-text);
    overflow: visible;
  }
  .page-title {
    font-family: var(--rv-display);
    font-size: clamp(34px, 8vw, 46px);
    font-weight: 700;
    line-height: 1.02;
    margin: 4px 0 0;
    text-wrap: balance;
  }
  .status {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 10px;
    margin: 12px 0 0;
    color: var(--rv-muted);
    font-size: 14px;
  }
  .status .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex: none;
    background: var(--rv-accent);
    box-shadow: 0 0 0 3px var(--rv-accent-soft);
  }
  .status .dot.late {
    background: var(--rv-late);
    box-shadow: 0 0 0 3px var(--rv-late-soft);
  }
  .status .dot.off {
    background: var(--rv-faint);
    box-shadow: 0 0 0 3px rgba(127, 127, 127, 0.18);
  }

  /* ---------- camera ("Digitalizar com IA") ---------- */
  .cam {
    position: fixed;
    inset: 0;
    z-index: 40;
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    animation: rv-fade 0.2s ease both;
  }
  .cam video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cam-flash {
    position: absolute;
    inset: 0;
    background: #fff;
    animation: rv-flash 0.35s ease-out both;
    pointer-events: none;
  }
  @keyframes rv-flash {
    from {
      opacity: 0.85;
    }
    to {
      opacity: 0;
    }
  }
  .cam-top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(10px + env(safe-area-inset-top, 0px)) 12px 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.55), transparent);
  }
  .cam-title {
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 21px;
  }
  .cam-btn {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
  }
  .cam-btn.on {
    background: #ffd54a;
    color: #1d0f10;
  }
  .cam-btn.ghost {
    background: none;
  }
  .cam-frame {
    position: relative;
    flex: 1;
    margin: 18px 26px 6px;
    pointer-events: none;
  }
  .cam-frame i {
    position: absolute;
    width: 38px;
    height: 38px;
    border: 4px solid rgba(255, 255, 255, 0.92);
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
  }
  .cam-frame i:nth-child(1) {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
    border-radius: 14px 0 0 0;
  }
  .cam-frame i:nth-child(2) {
    top: 0;
    right: 0;
    border-left: 0;
    border-bottom: 0;
    border-radius: 0 14px 0 0;
  }
  .cam-frame i:nth-child(3) {
    bottom: 0;
    left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0 0 0 14px;
  }
  .cam-frame i:nth-child(4) {
    bottom: 0;
    right: 0;
    border-left: 0;
    border-top: 0;
    border-radius: 0 0 14px 0;
  }
  .cam-hint {
    position: relative;
    text-align: center;
    margin: 6px 24px 10px;
    font-size: 15px;
    font-weight: 500;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
  }
  .cam-msg {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 0 32px;
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
  }
  .cam-msg > .i {
    width: 44px;
    height: 44px;
    opacity: 0.8;
  }
  .cam-msg .btn {
    flex: none;
  }
  .cam-bottom {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 12px;
    padding: 18px 20px calc(22px + env(safe-area-inset-bottom, 0px));
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  }
  .cam-shots {
    display: flex;
    align-items: center;
  }
  .cam-shots img {
    width: 44px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #fff;
    margin-right: -18px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  .cam-shots span {
    margin-left: 24px;
    font-weight: 600;
    font-size: 14px;
  }
  .cam-shutter {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 4px solid #fff;
    display: grid;
    place-items: center;
  }
  .cam-shutter span {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--rv-accent);
    transition: transform 0.1s;
  }
  .cam-shutter:active span {
    transform: scale(0.88);
  }
  .cam-shutter:disabled {
    opacity: 0.4;
  }
  .cam-done {
    justify-self: end;
    padding: 12px 16px;
    border-radius: 14px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 600;
    font-size: 15px;
  }
  .cam-done:disabled {
    background: rgba(255, 255, 255, 0.18);
    color: rgba(255, 255, 255, 0.6);
  }
  .more-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: -6px 0 18px;
  }

  /* ---------- toast ---------- */
  .toast {
    position: fixed;
    left: 50%;
    bottom: calc(var(--rv-nav-h) + 16px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%);
    z-index: 30;
    display: flex;
    align-items: center;
    gap: 14px;
    max-width: min(560px, calc(100% - 28px));
    width: max-content;
    padding: 12px 12px 12px 18px;
    border-radius: 16px;
    background: #2b2223;
    color: #f5eeee;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.35);
    animation: rv-toast 0.28s cubic-bezier(0.2, 1.3, 0.4, 1) both;
  }
  :host([dark]) .toast {
    background: #f5eeee;
    color: #231a1b;
  }
  @keyframes rv-toast {
    from {
      opacity: 0;
      transform: translate(-50%, 14px);
    }
  }
  .toast span {
    min-width: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.35;
  }
  .toast button {
    flex: none;
    color: var(--rv-accent);
    font-weight: 600;
    padding: 6px 8px;
    border-radius: 8px;
  }
  :host([dark]) .toast button {
    color: var(--rv-accent-ink-light);
  }
  .toast.has-sheet {
    bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  }

  @media (min-width: 700px) {
    .page {
      padding-top: 30px;
    }
    .hero {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`,zi=Ce`
  /* ---------- timeline of the day ---------- */
  .tline {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    margin: -4px -18px 16px;
    padding: 2px 18px 6px;
    scrollbar-width: none;
  }
  .tline::-webkit-scrollbar {
    display: none;
  }
  .tchip {
    flex: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px 7px 10px;
    border-radius: 12px;
    border: 1.5px solid var(--rv-line-strong);
    font-size: 14px;
    font-weight: 500;
    color: var(--rv-text-2);
    max-width: 220px;
  }
  .tchip b {
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 16px;
    font-variant-numeric: tabular-nums;
    color: var(--rv-text);
  }
  .tchip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tchip .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--c, var(--rv-accent));
    flex: none;
  }
  .tchip .i {
    width: 15px;
    height: 15px;
    color: var(--rv-muted);
  }
  .tchip.on {
    background: var(--rv-accent);
    border-color: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .tchip.on b,
  .tchip.on .i {
    color: var(--rv-on-accent);
  }
  .tchip.on .dot {
    box-shadow: 0 0 0 2px var(--rv-on-accent);
  }
  .tchip.peek {
    border-color: var(--rv-accent);
  }
  .switcher {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin: -6px 0 14px;
  }

  /* ---------- page results ---------- */
  .result {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    width: 100%;
    padding: 13px 0;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .panel > .overline + .result,
  .panel > .result:first-child {
    border-top: 0;
  }
  .result .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--c);
    margin-top: 6px;
    flex: none;
  }
  .result .r-main {
    flex: 1;
    min-width: 0;
  }
  .result .r-title {
    font-weight: 600;
    font-size: 16px;
  }
  .result .r-snip {
    font-size: 14px;
    color: var(--rv-muted);
    line-height: 1.45;
    margin-top: 2px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .result .r-meta {
    font-size: 13px;
    color: var(--rv-faint);
    margin-top: 4px;
  }

  .time-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
  .time-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 6px 6px 12px;
    border-radius: 12px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 17px;
    font-variant-numeric: tabular-nums;
  }
  .time-chip button {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: inherit;
  }
  .time-chip .i {
    width: 15px;
    height: 15px;
  }
  .add-time {
    position: relative;
  }
  .new-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 18px;
  }
  .new-strip button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 12px;
    border-radius: 14px;
    background: var(--rv-surface-2);
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    color: var(--rv-text);
  }
  .new-strip button.main {
    grid-column: 1 / -1;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 600;
  }
  .new-strip .i {
    width: 21px;
    height: 21px;
    color: var(--rv-accent-ink);
    flex: none;
  }
  .new-strip button.main .i {
    color: var(--rv-on-accent);
  }
  .new-strip button:disabled {
    opacity: 0.45;
  }

  /* ---------- MemorIA bits ---------- */
  .boot-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 60vh;
    padding: 24px;
    color: var(--rv-muted);
    text-align: center;
  }
  .icon-btn.ghost {
    pointer-events: none;
  }
  .result .r-title,
  .result .r-meta {
    display: block;
  }
  .status .now-btn {
    padding: 0 2px;
  }
  .hint-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    margin: -2px 0 16px;
    border-radius: 16px;
    background: var(--rv-accent-soft);
    color: var(--rv-text-2);
    font-size: 14px;
    line-height: 1.4;
  }
  .hint-card > .i {
    color: var(--rv-accent-ink);
  }
  .hint-card .text-btn {
    flex: none;
  }
  .when-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 2px 16px;
    font-size: 14px;
    color: var(--rv-muted);
    text-align: left;
  }
  .when-line .i {
    width: 17px;
    height: 17px;
    color: var(--rv-accent-ink);
  }
  .when-line b {
    color: var(--rv-text-2);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .day-row {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 0;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .panel > .overline + .day-row {
    border-top: 0;
  }
  .day-row > b {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    width: 48px;
  }
  .day-row .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--c);
    flex: none;
  }
  .day-row .grow {
    flex: 1;
    min-width: 0;
  }
  .day-row .label {
    display: block;
    font-weight: 600;
  }
  .day-row .hint {
    display: block;
    font-size: 13px;
    color: var(--rv-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .day-row > .i {
    color: var(--rv-faint);
    width: 18px;
    height: 18px;
  }
  .now-tag {
    font-size: 12px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 8px;
    background: var(--cs);
    color: var(--ci);
  }
  .time-input {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-surface-2);
    border-radius: 12px;
    padding: 6px 10px;
    min-width: 104px;
  }
  .pick .pick-sub {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.75;
    font-variant-numeric: tabular-nums;
  }
  .btn.danger-fill {
    background: var(--rv-late);
    color: #fff;
    font-weight: 600;
  }
  code {
    font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
    font-size: 0.92em;
    background: var(--rv-surface-2);
    padding: 1px 5px;
    border-radius: 6px;
  }

  /* ---------- Leitura por IA ---------- */
  .panel-lead {
    margin: 0 0 14px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--rv-muted);
  }
  /* Mais › Configurações › Integrações: Usar a integração, then how it is going */
  .integ-switch + .ai-state {
    margin-top: 8px;
  }
  .ai-state {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--rv-surface-2);
  }
  .ai-state .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 6px;
    flex: none;
    background: var(--rv-faint);
  }
  .ai-state.ok .dot {
    background: #2fb67c;
    box-shadow: 0 0 0 3px rgba(47, 182, 124, 0.2);
  }
  .ai-state.warn .dot {
    background: #e8a317;
    box-shadow: 0 0 0 3px rgba(232, 163, 23, 0.2);
  }
  .ai-state.bad .dot {
    background: var(--rv-late);
    box-shadow: 0 0 0 3px var(--rv-late-soft);
  }
  .ai-state b {
    display: block;
    font-weight: 600;
  }
  .ai-state span {
    display: block;
    font-size: 14px;
    color: var(--rv-muted);
    line-height: 1.45;
  }
  /* the boxes open the sheet of selectsheet.js, never the window of the phone */
  select:not([multiple]) {
    pointer-events: none;
  }
  .select {
    width: 100%;
    font: inherit;
    font-size: 16px;
    color: var(--rv-text);
    background-color: var(--rv-surface-2);
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 14px;
    padding: 12px 40px 12px 14px;
    appearance: none;
    -webkit-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--rv-muted) 50%), linear-gradient(135deg, var(--rv-muted) 50%, transparent 50%);
    background-position: calc(100% - 20px) 52%, calc(100% - 14px) 52%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
  }
  .select:focus {
    outline: 0;
    border-color: var(--rv-accent);
  }
  /* a long choice ends in "…" before the arrow, never cut */
  .select {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /* Horário e data (whenpick.js): a field like the others, the value and a small icon; it opens the app's window */
  .pickf {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    min-height: 48px;
    padding: 0 12px 0 14px;
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 14px;
    background: var(--rv-bg);
    color: var(--rv-text);
    font-size: 16px;
    line-height: 1.2;
    text-align: left;
    white-space: nowrap;
  }
  .pickf:focus-visible {
    outline: 0;
    border-color: var(--rv-accent);
  }
  .pickf .pf-v {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }
  .pickf.t .pf-v {
    font-family: var(--rv-display);
    font-size: 19px;
    font-variant-numeric: tabular-nums;
  }
  .pickf > .i {
    width: 18px;
    height: 18px;
    color: var(--rv-muted);
  }
  .pickf.sm {
    min-height: 36px;
    gap: 6px;
    padding: 0 8px 0 10px;
    border-radius: 10px;
    background: var(--rv-surface-2);
    font-size: 15px;
  }
  .pickf.sm.t .pf-v {
    font-size: 17px;
  }
  .pickf.sm > .i {
    width: 15px;
    height: 15px;
  }
  .ai-actions {
    display: flex;
    margin: 14px 0 6px;
  }
  /* Verificar de novo (IA, Falar): the width of the card on the phone, like the buttons of Dados (1.77.0) */
  .ai-actions .btn {
    flex: 1 1 100%;
    width: 100%;
    min-height: 50px;
  }
  @media (min-width: 1000px) {
    .ai-actions .btn {
      flex: none;
      width: 250px;
    }
  }
  .steps-box {
    margin: 10px 0 14px;
    font-size: 14px;
  }
  .steps {
    margin: 6px 0 0;
    padding-left: 20px;
    color: var(--rv-text-2);
    line-height: 1.5;
  }
  .steps li + li {
    margin-top: 4px;
  }
  .text-btn.inline {
    display: inline;
    padding: 0 0 0 4px;
    font-size: inherit;
  }

  /* ---------- Dados ---------- */
  .data-row {
    padding: 14px 0;
    border-top: 1px solid var(--rv-line);
  }
  .panel > .overline + .data-row {
    border-top: 0;
    padding-top: 4px;
  }
  .data-row > b {
    display: block;
    font-weight: 600;
  }
  .data-row > p {
    margin: 2px 0 10px;
    font-size: 14px;
    line-height: 1.45;
    color: var(--rv-muted);
  }
  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .btn.sm {
    flex: none;
    min-height: 40px;
    font-size: 14px;
    padding: 0 14px;
    border-radius: 12px;
    gap: 6px;
    text-decoration: none;
    color: var(--rv-text);
  }
  .btn.sm .i {
    width: 18px;
    height: 18px;
  }
  .btn.primary.sm {
    color: var(--rv-on-accent);
  }
  .btn.danger.sm {
    color: var(--rv-late);
  }
  /* Exportar (like the InventarIA and the ResolvIA): one line per file, with a border between them */
  .opts {
    list-style: none;
    margin: 0 0 6px;
    padding: 0;
    border-top: 1px solid var(--rv-line);
  }
  .opts > li {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid var(--rv-line);
  }
  .opts .ot {
    flex: 1;
    min-width: min(100%, 13em);
  }
  .opts .ot b {
    display: block;
    font-weight: 600;
    font-size: 15px;
  }
  .opts .ot span {
    display: block;
    margin-top: 2px;
    font-size: 13.5px;
    line-height: 1.4;
    color: var(--rv-muted);
  }
  /* Dados: every button the same width; on the phone it goes under its text, all lined up */
  .opts > li {
    flex-wrap: wrap;
  }
  /* Dados: the buttons of the family (the GerencIA is the model): the width of the card on the phone (250 px from
     1000 px on), the same height, the icon beside the text; Criar backup full, the others with a border, Apagar tudo red */
  .opts .btn,
  #dados .opts .btn,
  #dados .sec-actions .btn {
    flex: 1 1 100%;
    width: 100%;
    min-height: 50px;
    font-size: 15px;
    padding: 0 18px;
    justify-content: center;
    white-space: nowrap;
  }
  @media (min-width: 1000px) {
    .opts .btn,
    #dados .opts .btn,
    #dados .sec-actions .btn {
      flex: none;
      width: 250px;
    }
  }
  #dados .sec-actions .btn.danger {
    color: var(--rv-late);
    border-color: color-mix(in srgb, var(--rv-late) 55%, transparent);
  }
  .data-note {
    margin: 8px 0 0;
    font-size: 13px;
    color: var(--rv-late);
  }
  .data-list {
    margin-top: 10px;
  }
  .data-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-top: 1px solid var(--rv-line);
  }
  .data-item > div {
    flex: 1;
    min-width: 0;
  }
  .data-item b {
    display: block;
    font-weight: 600;
    font-size: 15px;
    font-variant-numeric: tabular-nums;
  }
  .data-item span {
    display: block;
    font-size: 13px;
    color: var(--rv-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sheet .data-list {
    margin: 0 0 8px;
  }
  .sheet .data-item:first-child {
    border-top: 0;
  }

  /* ---------- computador (1000 px ou mais): barra lateral no lugar das abas, como no InventarIA ---------- */
  .side {
    display: none;
  }
  .side-brand {
    font-family: var(--rv-display);
    font-size: 25px;
    font-weight: 700;
    line-height: 1;
    padding: 4px 10px 18px;
    color: var(--rv-text);
  }
  .side-brand span {
    color: var(--rv-accent-ink);
  }
  .side-add {
    flex: none;
    width: 100%;
    height: 46px;
    margin: 0 0 14px;
  }
  .side-nav,
  .side-lists {
    display: grid;
    gap: 2px;
  }
  .side-link,
  .side-list,
  .side-cal {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-height: 40px;
    padding: 8px 10px;
    border-radius: 10px;
    text-align: left;
    color: var(--rv-text);
    font-weight: 500;
  }
  .side-link .i {
    width: 20px;
    height: 20px;
    flex: none;
    color: var(--rv-muted);
  }
  .side-link:hover,
  .side-list:hover,
  .side-cal:hover {
    background: var(--rv-surface-2);
  }
  .side-link[aria-current="page"],
  .side-list[aria-current="page"] {
    background: var(--rv-surface);
    box-shadow: inset 3px 0 0 var(--rv-accent);
    font-weight: 600;
  }
  .side-link[aria-current="page"] .i {
    color: var(--rv-accent-ink);
  }
  .side-badge {
    margin-left: auto;
    min-width: 22px;
    height: 20px;
    padding: 0 6px;
    border-radius: 11px;
    background: var(--rv-late);
    color: #fff;
    font-family: var(--rv-display);
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
  .side-h {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 22px 10px 8px;
  }
  .side-h span {
    font-family: var(--rv-display);
    font-size: 17px;
    font-weight: 600;
    color: var(--rv-text);
  }
  .side-h small {
    font-size: 13px;
    color: var(--rv-muted);
  }
  .side-list,
  .side-cal {
    min-height: 38px;
    padding: 5px 10px;
    font-weight: 400;
  }
  .side-tile {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    flex: none;
    background: var(--cs);
    color: var(--ci);
  }
  .side-tile .i {
    width: 15px;
    height: 15px;
  }
  .sl-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sl-num {
    font-family: var(--rv-display);
    font-size: 15px;
    font-weight: 500;
    color: var(--rv-muted);
    font-variant-numeric: tabular-nums;
  }
  .side-foot {
    margin-top: auto;
    padding: 18px 10px 0;
    font-size: 13px;
    color: var(--rv-faint);
  }
  @media (min-width: 1000px) {
    .app {
      position: relative;
      padding-left: var(--rv-side-w);
    }
    .side {
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--rv-side-w);
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 22px 14px 18px;
      overflow-y: auto;
      border-right: 1px solid var(--rv-line);
      background: var(--rv-bg);
      scrollbar-width: thin;
    }
    nav {
      display: none;
    }
    .page {
      max-width: 880px;
      padding: 30px 40px 56px;
    }
    /* the app name is on the sidebar: the header keeps "Olá, Davi" */
    .eyebrow .brand,
    .eyebrow .sep {
      display: none;
    }
    /* outside Home Assistant: the name is already on the sidebar */
    .topbar {
      display: none;
    }
    /* the sheets become a window in the middle of the screen */
    .sheet {
      left: var(--rv-side-w);
      top: 0;
      bottom: 0;
      height: fit-content;
      max-height: 86%;
      margin: auto;
      border-radius: 24px;
      padding-bottom: 22px;
      animation-name: rv-pop;
    }
    .sheet .grab {
      display: none;
    }
    /* a wide sheet: the import tiles stop being squares */
    .imp-tile {
      aspect-ratio: auto;
      min-height: 96px;
    }
    .toast,
    .toast.has-sheet {
      left: calc(50% + var(--rv-side-w) / 2);
      bottom: 24px;
    }
  }
  @keyframes rv-pop {
    from {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }
  }

  /* CronologIA on the computer: the small month and the calendars of the sidebar */
  .side-month {
    margin: 18px 0 0;
    padding: 0 4px;
  }
  .sm-head {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0 0 4px 6px;
  }
  .sm-head b {
    flex: 1;
    font-family: var(--rv-display);
    font-size: 17px;
    font-weight: 600;
  }
  .sm-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    text-align: center;
  }
  .sm-wd {
    font-size: 11px;
    font-weight: 600;
    color: var(--rv-faint);
    padding: 4px 0;
  }
  .sm-day {
    height: 32px;
    border-radius: 50%;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    color: var(--rv-text);
  }
  .sm-day:hover {
    background: var(--rv-surface-2);
  }
  .sm-day.out {
    color: var(--rv-faint);
  }
  .sm-day.today {
    color: var(--rv-accent-ink);
    font-weight: 700;
  }
  .sm-day.sel {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    font-weight: 700;
  }
  .sc-box {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    flex: none;
    background: var(--c);
    color: #fff;
    box-shadow: inset 0 0 0 2px var(--c);
  }
  .sc-box .i {
    width: 13px;
    height: 13px;
    stroke-width: 3;
  }
  .side-cal.off .sc-box {
    background: transparent;
  }
  .side-cal.off .sl-name {
    color: var(--rv-muted);
  }
  @media (min-width: 1000px) {
    .page.cal-page {
      max-width: 1240px;
    }
  }
  /*
   * Computador, like the InventarIA: wider, the actions at the top right, sections on the page instead
   * of cards (a big title with its icon, lines between the rows) and Agora in two columns.
   * The calendar keeps its cards (the grid needs them).
   */
  @media (min-width: 1000px) {
    .page {
      max-width: 1040px;
      padding: 28px 40px 72px;
    }
    .head-row {
      min-height: 44px;
    }
    .page > .brand-head {
      margin-bottom: 22px;
    }
    .top-acts {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: none;
    }
    .top-acts .btn {
      min-height: 40px;
      border-radius: 10px;
      padding: 0 16px;
    }
    .mic-top {
      margin: 0;
      width: 40px;
      height: 40px;
    }
    /* the microphone goes with the actions (the one by the title is for the phone) */
    .head-row > .mic-top {
      display: none;
    }
    .page:not(.cal-page) .panel {
      background: none;
      border: 0;
      border-radius: 0;
      box-shadow: none;
      padding: 0;
      margin: 0 0 36px;
      overflow: visible;
    }
    /* Mais: the menu as a list between lines, like the InventarIA */
    .page:not(.cal-page) .panel.menu-list {
      margin-top: 8px;
      border-top: 1px solid var(--rv-line);
      border-bottom: 1px solid var(--rv-line);
    }
    .menu-row {
      padding: 12px 4px;
    }
    .menu-row:hover {
      background: var(--rv-surface-2);
    }
    /* Calendário: the top line goes across the page, so the actions sit at the top right, above the arrows */
    .cal-title {
      flex: 1;
    }
    .cal-page .head-row {
      min-height: 56px;
    }
    /* the inside of the sections lines up with the page (the phone keeps the card's padding) */
    .page:not(.cal-page) .panel.meds.alert {
      box-shadow: none;
    }
    .page:not(.cal-page) .chores-head.sec-head,
    .page:not(.cal-page) .meds-head,
    .page:not(.cal-page) .bills-head {
      padding-left: 0;
      padding-right: 0;
    }
    .page:not(.cal-page) .meds-alert {
      margin: 0 0 8px;
    }
    .page:not(.cal-page) .meds-who {
      padding-left: 0;
      padding-right: 0;
    }
    .page:not(.cal-page) .panel .dose,
    .page:not(.cal-page) .panel .bill,
    .page:not(.cal-page) .panel .maint {
      margin-left: 0;
      margin-right: 0;
    }
    .page:not(.cal-page) .panel .chore,
    .page:not(.cal-page) .panel .demerit,
    .page:not(.cal-page) .panel.demerits-set > .mais-head,
    .page:not(.cal-page) .panel.demerits-set > .panel-lead,
    .page:not(.cal-page) .panel .score-actions {
      padding-left: 0;
      padding-right: 0;
    }
    .page:not(.cal-page) .panel-foot,
    .page:not(.cal-page) .panel.bills .add-line,
    .page:not(.cal-page) .panel.chores .add-line,
    .page:not(.cal-page) .panel.todos .add-line {
      padding-left: 0;
      padding-right: 0;
    }
    .page:not(.cal-page) .panel.agenda {
      padding: 0;
      margin-left: -4px;
      margin-right: -4px;
    }
    /* section titles: big, like the InventarIA */
    .page .sec-head .overline,
    .page .meds-head .overline,
    .page .bills-head .overline {
      font-family: var(--rv-display);
      font-size: 22px;
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: 0.005em;
      text-transform: none;
      color: var(--rv-text);
    }
    .page:not(.cal-page) .chores-head.sec-head,
    .page:not(.cal-page) .meds-head,
    .page:not(.cal-page) .bills-head {
      padding-top: 0;
      padding-bottom: 12px;
      margin-bottom: 6px;
      border-bottom: 1px solid var(--rv-line);
    }
    .page:not(.cal-page) .panel.agenda > .chores-head.sec-head {
      padding-left: 4px;
      padding-right: 4px;
    }
    .now-cols {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 0 48px;
      align-items: start;
    }
    .now-main,
    .now-side {
      min-width: 0;
    }
  }

  /* Falar: the microphone, with a ring that follows the voice */
  .voice {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 18px 8px 8px;
    text-align: center;
  }
  .voice-mic {
    position: relative;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    box-shadow: 0 6px 22px var(--rv-accent-soft);
  }
  .voice-mic .i {
    position: relative;
    width: 40px;
    height: 40px;
  }
  .voice-ring {
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: var(--rv-accent-soft);
    transform: scale(calc(0.85 + var(--lvl, 0) * 0.45));
    transition: transform 0.12s ease-out;
  }
  .voice.on .voice-ring {
    animation: rv-breathe 1.6s ease-in-out infinite;
  }
  @keyframes rv-breathe {
    50% {
      opacity: 0.6;
    }
  }
  .voice-state {
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
    margin-top: 6px;
  }
  .voice-time {
    color: var(--rv-muted);
    font-variant-numeric: tabular-nums;
  }
  .voice-hint {
    margin: 0;
    max-width: 34ch;
    color: var(--rv-muted);
    font-size: 14px;
    line-height: 1.45;
  }
  /* the review after Falar: what was heard */
  .heard {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 4px 0 10px;
    padding: 10px 12px;
    border-radius: 12px;
    background: var(--rv-surface-2);
    font-size: 14.5px;
    line-height: 1.4;
  }
  .heard .i {
    flex: none;
    width: 17px;
    height: 17px;
    margin-top: 2px;
    color: var(--rv-accent-ink);
  }

  /* Falar: the microphone at the top right of every screen */
  .head-row {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 26px;
  }
  .head-row .eyebrow {
    flex: 1;
    min-width: 0;
  }
  .mic-top {
    flex: none;
    width: 44px;
    height: 44px;
    margin: -6px -2px -6px 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .mic-top .i {
    width: 22px;
    height: 22px;
  }
  .mic-top:active {
    transform: scale(0.94);
  }

  /* the box of Agora: typing opens the search (Calendário › Lista) */
  .home-search {
    margin: 0 0 16px;
  }
  kbd {
    flex: none;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: var(--rv-muted);
    border: 1px solid var(--rv-line-strong);
    border-bottom-width: 2px;
    border-radius: 5px;
    padding: 3px 6px;
    background: var(--rv-surface);
  }
  .home-search kbd {
    margin-right: 10px;
  }
  .side-link kbd {
    margin-left: auto;
  }
  @media (pointer: coarse) {
    kbd {
      display: none;
    }
  }
`;var Oi=Ce`
  /* ---------- agenda rows ---------- */
  .panel.agenda {
    padding: 6px 14px 8px;
  }
  .panel.agenda > .overline {
    padding: 14px 4px 6px;
  }
  .ev-row {
    display: flex;
    align-items: stretch;
    gap: 10px;
    width: 100%;
    padding: 9px 4px;
    text-align: left;
    border-radius: 12px;
  }
  .ev-row:active {
    background: var(--rv-surface-2);
  }
  /* a line with the initials of each person on the right (Marcar por outras pessoas) */
  .ev-line {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ev-line > .ev-row {
    flex: 1;
    min-width: 0;
  }
  .ev-line > .qwho {
    flex: none;
    padding-right: 2px;
  }
  .ev-time {
    width: 46px;
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1px;
    font-family: var(--rv-display);
    font-variant-numeric: tabular-nums;
  }
  .ev-time b {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.15;
  }
  /* a routine or task without a time: "Qualquer hora" */
  .ev-time b.any {
    font-size: 13.5px;
    letter-spacing: -0.01em;
    padding-top: 2px;
  }
  /* a routine for a part of the day: "Manhã" and its little sun */
  .ev-time small.per {
    display: flex;
    justify-content: flex-end;
  }
  .ev-time small.per .i {
    width: 15px;
    height: 15px;
  }
  .ev-time small {
    font-size: 13px;
    font-weight: 500;
    color: var(--rv-muted);
    line-height: 1.2;
  }
  .ev-bar {
    width: 4px;
    flex: none;
    border-radius: 4px;
    background: var(--c);
  }
  .ev-main {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ev-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }
  /* the calendar's name in the row: smaller, in italics */
  .ev-sub .ev-cal {
    font-size: 0.86em;
    font-style: italic;
    opacity: 0.85;
  }
  .ev-sub {
    font-size: 14px;
    color: var(--rv-muted);
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ev-rep {
    align-self: center;
    color: var(--rv-faint);
  }
  .ev-rep .i {
    width: 16px;
    height: 16px;
  }
  .ev-row.live {
    background: var(--cs);
  }
  .now-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2px 4px;
    color: var(--rv-late);
    font-family: var(--rv-display);
    font-size: 13px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .now-line::after {
    content: "";
    flex: 1;
    height: 2px;
    border-radius: 2px;
    background: var(--rv-late);
  }
  .now-line span {
    width: 46px;
    text-align: right;
  }
  .empty-line {
    margin: 6px 4px 10px;
    color: var(--rv-muted);
    font-size: 15px;
  }
  .add-line {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 4px 8px 60px;
    color: var(--rv-accent-ink);
    font-weight: 600;
    font-size: 14px;
  }
  .add-line .i {
    width: 18px;
    height: 18px;
  }
  /* Agora › Ordem dos cards: the button at the end of Agora and the list in the sheet */
  .add-line.now-order {
    justify-content: center;
    padding: 14px 4px 18px;
    color: var(--rv-muted);
  }
  .now-cards {
    list-style: none;
    margin: 0;
    padding: 0 4px;
  }
  .now-cards .row {
    gap: 10px;
    padding: 8px 0;
  }
  .now-cards .tile {
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .now-cards .row.off .label {
    color: var(--rv-muted);
  }
  .now-cards .icon-btn:disabled {
    opacity: 0.3;
  }
  .add-line.now-reset {
    justify-content: center;
    padding: 14px 4px 6px;
  }
  /* Rotina da casa: the done ones folded */
  /* Pular: a routine skipped this time (not done): gray, the yellow skip mark in place of the check */
  .chore.done.skipped .chk.on {
    background: var(--rv-warn-soft);
    border-color: transparent;
    color: var(--rv-warn);
  }
  .chore.done.skipped .chore-tx b {
    color: var(--rv-muted);
    text-decoration: none;
  }
  .btn.kind-skip {
    width: 100%;
    margin-top: 8px;
  }
  /* 1.81.0: Pular e Amanhã lado a lado, do mesmo tamanho */
  .kind-later {
    display: grid;
    gap: 8px;
    margin-top: 8px;
  }
  .kind-later.two {
    grid-template-columns: 1fr 1fr;
  }
  .kind-later > .btn {
    width: 100%;
    margin-top: 0;
    min-width: 0;
  }
  .kind-state.skipped .i {
    color: var(--rv-warn);
  }
  .add-line.done-fold {
    padding-left: 18px;
    color: var(--rv-muted);
  }
  .empty-line.all-done {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--rv-ok);
    font-weight: 600;
  }
  .empty-line.all-done .i {
    width: 18px;
    height: 18px;
  }
  /* Modo férias in Recompensas: what is paused, with the plane */
  .empty-line.away-line {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .empty-line.away-line .i {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    color: var(--rv-accent-ink);
  }
  /* a day in a list: a calendar leaf (weekday, day), the date, how many */
  .day-head {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin-top: 10px;
    padding: 16px 4px 6px;
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    text-align: left;
    border-top: 2px solid var(--rv-line);
  }
  .panel.agenda > .overline + .day-head,
  .panel.agenda > .day-head:first-child {
    margin-top: 0;
    border-top: 0;
    padding-top: 10px;
  }
  .dh-cal {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 42px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--rv-line-strong);
    background: var(--rv-surface-2);
    text-align: center;
  }
  .dh-cal small {
    font-family: var(--rv-body);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 2px 0 1px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .dh-cal b {
    font-size: 19px;
    line-height: 1;
    padding: 4px 0 5px;
  }
  .day-head.today .dh-cal,
  .day-title.today .dh-cal {
    border-color: var(--rv-accent);
  }
  .day-head.today .dh-cal small,
  .day-title.today .dh-cal small {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .dh-label {
    flex: 1;
    min-width: 0;
  }
  .dh-count {
    font-family: var(--rv-body);
    font-size: 12px;
    font-weight: 600;
    color: var(--rv-muted);
    background: var(--rv-surface-2);
    border-radius: 8px;
    padding: 2px 8px;
  }
  .day-head.today {
    color: var(--rv-accent-ink);
  }

  /* ---------- Agora ---------- */
  .hero-ev {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 100%;
    text-align: left;
    padding: 16px 18px 16px;
    margin-bottom: 14px;
    border-radius: 22px;
    background: linear-gradient(135deg, var(--cs), transparent 140%), var(--rv-surface);
    border: 1px solid var(--rv-line);
    border-left: 6px solid var(--c);
  }
  .hero-ev .overline {
    color: var(--ci);
    font-weight: 700;
  }
  .hero-ev.empty {
    border-left-color: var(--rv-line-strong);
  }
  .hero-ev.empty .overline {
    color: var(--rv-muted);
  }
  .hero-title {
    font-family: var(--rv-display);
    font-size: 25px;
    font-weight: 600;
    line-height: 1.1;
    margin-top: 2px;
    overflow-wrap: anywhere;
  }
  .hero-meta {
    font-size: 15px;
    color: var(--rv-text-2);
    font-variant-numeric: tabular-nums;
  }
  .hero-bar {
    align-self: stretch;
    height: 6px;
    border-radius: 6px;
    background: var(--rv-surface-2);
    margin-top: 10px;
    overflow: hidden;
  }
  .hero-bar i {
    display: block;
    height: 100%;
    border-radius: 6px;
    background: var(--c);
  }
  .hero-next {
    margin-top: 10px;
    font-size: 14px;
    color: var(--rv-muted);
  }
  .hero-next b {
    font-family: var(--rv-display);
    font-weight: 600;
    color: var(--rv-text-2);
  }
  /* appointment ticket ("Agora" / "A seguir") */
  .hero-ev.ticket {
    position: relative;
    padding: 0;
    gap: 0;
    border: 1px solid var(--rv-line);
    border-left: 1px solid var(--rv-line);
    background: radial-gradient(120% 140% at 0% 0%, var(--cs) 0%, transparent 55%), var(--rv-surface);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
    overflow: visible;
  }
  :host([dark]) .hero-ev.ticket {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
  .tk-main {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 16px 16px 14px 14px;
  }
  .tk-clock {
    flex: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--cs);
    display: grid;
    place-items: center;
  }
  .tk-clock svg {
    width: 80px;
    height: 80px;
    overflow: visible;
  }
  .tk-clock .dial {
    fill: var(--rv-surface);
  }
  .tk-clock .tick {
    stroke: var(--rv-faint);
    stroke-width: 1.4;
    stroke-linecap: round;
  }
  .tk-clock .tick.major {
    stroke: var(--rv-muted);
    stroke-width: 2.2;
  }
  .tk-clock .span {
    fill: none;
    stroke: var(--c);
    stroke-width: 6;
    stroke-linecap: round;
  }
  .tk-clock .span.faint {
    stroke: var(--cs);
    stroke-width: 6;
  }
  .tk-clock .hand {
    stroke: var(--rv-text);
    stroke-linecap: round;
  }
  .tk-clock .hand.hour {
    stroke-width: 4;
  }
  .tk-clock .hand.min {
    stroke-width: 2.6;
  }
  .tk-clock .pin {
    fill: var(--ci);
  }
  .tk-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .tk-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .tk-top .overline {
    color: var(--ci);
    font-weight: 700;
  }
  .tk-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
    font-size: 12px;
    font-weight: 600;
    padding: 3px 9px 3px 7px;
    border-radius: 999px;
    background: var(--c);
    color: var(--rv-on-accent);
    white-space: nowrap;
  }
  .tk-pill .i.sm {
    width: 13px;
    height: 13px;
  }
  .ticket .hero-title {
    margin-top: 2px;
  }
  .tk-when {
    font-size: 15px;
    color: var(--rv-text-2);
    font-variant-numeric: tabular-nums;
  }
  .tk-when b {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    color: var(--rv-text);
  }
  .tk-cut {
    position: relative;
    display: block;
    align-self: stretch;
    height: 0;
    margin: 0 14px;
    border-top: 2px dashed var(--rv-line-strong);
  }
  .tk-cut::before,
  .tk-cut::after {
    content: "";
    position: absolute;
    top: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--rv-bg);
    border: 1px solid var(--rv-line);
  }
  .tk-cut::before {
    left: -26px;
    clip-path: inset(0 0 0 50%);
  }
  .tk-cut::after {
    right: -26px;
    clip-path: inset(0 50% 0 0);
  }
  .tk-stub {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 18px 12px;
    font-size: 14px;
    color: var(--rv-muted);
    min-width: 0;
  }
  .tk-stub > span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tk-stub .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--c);
    flex: none;
  }
  .tk-next b {
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 16px;
    color: var(--rv-text-2);
    margin: 0 2px;
  }
  .hero-ev.ticket.empty .tk-main {
    padding-bottom: 16px;
  }
  .hero-ev.ticket.empty .tk-clock {
    background: var(--rv-surface-2);
  }

  /* the all-day ones, in the Hoje card under its title */
  .allday {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 2px 0 12px;
  }
  .ad-chip small {
    font-size: 12.5px;
    font-weight: 500;
    color: var(--rv-muted);
  }
  .ad-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    max-width: 100%;
    padding: 6px 12px 6px 10px;
    border-radius: 10px;
    background: var(--cs);
    font-size: 14px;
    font-weight: 500;
    color: var(--rv-text);
  }
  .ad-chip span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ad-chip .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--c);
    flex: none;
  }
  .ad-chip.more {
    background: var(--rv-surface-2);
    color: var(--rv-muted);
    font-weight: 600;
  }

  /* ---------- Calendário ---------- */
  /* the top line (app name, Conversar, microphone) spans the whole width, like on the other screens */
  .cal-page > .head-row {
    margin-left: 2px;
  }
  .cal-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;
    margin: 2px 0 12px 2px;
  }
  .cal-title {
    min-width: 0;
  }
  .cal-title .page-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cal-nav {
    display: flex;
    margin-right: -8px;
  }
  .cal-tools {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
  }
  .seg.compact {
    flex: 1;
  }
  .seg.compact button {
    font-size: 14px;
    gap: 5px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .seg.compact .i {
    width: 16px;
    height: 16px;
  }
  /* phones: the five views fit in one line as words (Mês · Semana · 3 dias · Dia · Lista) */
  @media (max-width: 480px) {
    .seg.compact .i {
      display: none;
    }
    .cal-tools .seg.compact {
      gap: 2px;
    }
    .cal-tools .seg.compact button {
      font-size: 13.5px;
      padding-left: 2px;
      padding-right: 2px;
      white-space: nowrap;
    }
    .cal-tools > .pick {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
  .cal-tools > .pick {
    flex: none;
  }
  .month {
    background: var(--rv-surface);
    border: 1px solid var(--rv-line);
    border-radius: 22px;
    padding: 10px 8px 8px;
    margin-bottom: 14px;
    touch-action: pan-y;
  }
  .wd {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--rv-muted);
    padding-bottom: 6px;
  }
  .cells {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }
  .cell {
    position: relative;
    height: 50px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    padding-top: 6px;
  }
  .cell .num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-family: var(--rv-display);
    font-size: 17px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .cell.out .num {
    color: var(--rv-faint);
    font-weight: 500;
  }
  .cell.today .num {
    color: var(--rv-accent-ink);
    box-shadow: inset 0 0 0 2px var(--rv-accent);
  }
  .cell.sel .num {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    box-shadow: none;
  }
  /* Mês: everything done that day (green), something left behind (red) */
  .cell.all-done:not(.sel) .num {
    color: var(--rv-ok);
    background: var(--rv-ok-soft);
  }
  .cell.left:not(.sel) .num {
    color: var(--rv-late);
    background: var(--rv-late-soft);
  }
  .cell.out.all-done:not(.sel) .num,
  .cell.out.left:not(.sel) .num {
    opacity: 0.6;
  }
  .cell .dots {
    display: flex;
    gap: 3px;
    align-items: center;
    height: 6px;
  }
  .cell .dots i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .cell .dots b {
    font-size: 10px;
    line-height: 6px;
    color: var(--rv-muted);
  }
  .cell.out .dots {
    opacity: 0.5;
  }
  .cell:active {
    background: var(--rv-surface-2);
  }
  .day-title {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 4px 6px;
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
  }
  /* the day of Mês: the same calendar leaf as the days of Lista */
  .day-title .dt-label {
    flex: 1;
    min-width: 0;
  }
  .day-title .text-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: var(--rv-body);
  }
  .day-title .text-btn .i {
    width: 17px;
    height: 17px;
  }

  /* week strip and hour grid */
  .week-strip {
    display: grid;
    grid-template-columns: 34px repeat(var(--n, 7), 1fr);
    gap: 2px;
    margin-bottom: 6px;
  }
  .week-strip::before {
    content: "";
  }
  .week-strip.day-strip {
    grid-template-columns: repeat(7, 1fr);
  }
  .week-strip.day-strip::before {
    display: none;
  }
  .ws-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0 6px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    color: var(--rv-muted);
    text-transform: lowercase;
  }
  .ws-day b {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    color: var(--rv-text);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-variant-numeric: tabular-nums;
  }
  .ws-day.today b {
    color: var(--rv-accent-ink);
    box-shadow: inset 0 0 0 2px var(--rv-accent);
  }
  .ws-day.sel b {
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    box-shadow: none;
  }
  /* everything done that day (green), something left behind (red), as in the Mês */
  .ws-day.all-done:not(.sel) b {
    color: var(--rv-ok);
    background: var(--rv-ok-soft);
  }
  .ws-day.left:not(.sel) b {
    color: var(--rv-late);
    background: var(--rv-late-soft);
  }
  /* Semana / Dia › Qualquer hora: a counter per day (done/total), the list opens from it */
  .tgrid-any {
    display: grid;
    grid-template-columns: 34px repeat(var(--n), 1fr);
    gap: 2px;
    align-items: center;
    padding: 2px 0 6px;
  }
  .tg-label.any-ic {
    display: grid;
    place-items: center;
    padding-top: 0;
  }
  .tg-label.any-ic .i {
    width: 17px;
    height: 17px;
  }
  .tg-any {
    justify-self: center;
    min-width: 0;
    max-width: 100%;
    padding: 3px 6px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: var(--rv-accent-ink);
    background: var(--rv-accent-soft);
    white-space: nowrap;
  }
  /* all done that day: green */
  .tg-any.all {
    color: var(--rv-ok);
    background: var(--rv-ok-soft);
  }
  .any-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 0 0 8px;
    padding: 11px 14px;
    border-radius: 14px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
    font-weight: 600;
    font-size: 15px;
    text-align: left;
  }
  .any-bar span {
    flex: 1;
  }
  .any-bar b {
    font-variant-numeric: tabular-nums;
  }
  .any-bar .i {
    width: 18px;
    height: 18px;
  }
  .any-bar.all {
    background: var(--rv-ok-soft);
    color: var(--rv-ok);
  }
  .any-list .chore .chk.ro {
    display: grid;
    place-items: center;
    border: 0;
    background: var(--cs);
    color: var(--ci);
  }
  .any-list .chore .chk.ro .i {
    width: 15px;
    height: 15px;
  }
  .tgrid-allday {
    display: grid;
    grid-template-columns: 34px repeat(var(--n), 1fr);
    gap: 2px;
    align-items: start;
    padding: 4px 0 6px;
    border-bottom: 1px solid var(--rv-line);
  }
  .tg-label {
    font-size: 11px;
    line-height: 1.1;
    color: var(--rv-muted);
    padding-top: 3px;
  }
  .tg-adcol {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .tg-ad {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.25;
    padding: 2px 5px;
    border-radius: 6px;
    background: var(--cs);
    color: var(--rv-text);
    border-left: 3px solid var(--c);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tg-admore {
    font-size: 12px;
    color: var(--rv-muted);
    padding-left: 4px;
  }
  .tgrid-scroll {
    max-height: calc(100vh - 330px);
    min-height: 360px;
    overflow-y: auto;
    overscroll-behavior: contain;
    border-radius: 0 0 16px 16px;
  }
  .tgrid {
    position: relative;
    display: grid;
    grid-template-columns: 34px repeat(var(--n), 1fr);
    gap: 2px;
    height: calc(24 * var(--hh));
    background-image: repeating-linear-gradient(to bottom, var(--rv-line) 0 1px, transparent 1px var(--hh));
    background-position: 34px 0;
    background-size: calc(100% - 34px) 100%;
    background-repeat: no-repeat;
  }
  .tg-hours {
    position: relative;
  }
  .tg-hours span {
    position: absolute;
    right: 4px;
    transform: translateY(-50%);
    font-size: 11px;
    font-weight: 600;
    color: var(--rv-muted);
    font-variant-numeric: tabular-nums;
  }
  .tg-col {
    position: relative;
    min-width: 0;
  }
  .tg-col.today {
    background: var(--rv-accent-faint);
    border-radius: 6px;
  }
  .tg-ev {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    padding: 3px 5px;
    border-radius: 7px;
    background: var(--cs);
    border-left: 3px solid var(--c);
    color: var(--rv-text);
    text-align: left;
    box-shadow: 0 0 0 1px var(--rv-bg);
    background-color: var(--rv-surface);
    background-image: linear-gradient(var(--cs), var(--cs));
  }
  .tg-ev b {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-wrap: anywhere;
  }
  /* 3 dias: up to two lines, whole words (a narrow side-by-side block cuts the word instead of breaking it) */
  .tgrid.three .tg-ev b {
    -webkit-line-clamp: 2;
    overflow-wrap: normal;
    word-break: normal;
  }
  .tgrid.week .tg-ev b {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .tg-ev.short b {
    -webkit-line-clamp: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    max-width: 100%;
  }
  /* a medicine dose: pill icon, dashed border all around and stripes, so it doesn't look like an event */
  .tg-ev.med {
    border: 1.5px dashed var(--c);
    border-radius: 10px;
    background-image: repeating-linear-gradient(135deg, var(--cs) 0 6px, transparent 6px 11px), linear-gradient(var(--cs), var(--cs));
  }
  .tg-ev.med b .i {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 3px;
    vertical-align: -2px;
    color: var(--ci);
  }
  /* taken: solid green (the color comes from the element), no stripes */
  .tg-ev.med.done {
    border-style: solid;
    background-image: linear-gradient(var(--cs), var(--cs));
  }
  .tg-ev small {
    font-size: 12px;
    color: var(--rv-muted);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .tg-now {
    position: absolute;
    left: -2px;
    right: 0;
    height: 2px;
    background: var(--rv-late);
    border-radius: 2px;
    z-index: 2;
    pointer-events: none;
  }
  .tg-now::before {
    content: "";
    position: absolute;
    left: -4px;
    top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--rv-late);
  }

  /* ---------- Agendas ---------- */
  .cal-row.off .tile,
  .cal-row.off .label {
    opacity: 0.5;
  }

  /* ---------- event sheet ---------- */
  .ev-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 14px;
  }
  .ev-swatch {
    width: 14px;
    height: 14px;
    border-radius: 5px;
    background: var(--c);
    margin-top: 10px;
    flex: none;
  }
  .ev-head-text {
    flex: 1;
    min-width: 0;
  }
  .ev-head-text h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.15;
    overflow-wrap: anywhere;
  }
  .ev-cal {
    margin: 4px 0 0;
    font-size: 14px;
    color: var(--rv-muted);
  }
  .ev-cal b {
    color: var(--ci);
    font-weight: 600;
  }
  .ev-facts {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
  }
  .fact {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 16px;
    line-height: 1.4;
    color: var(--rv-text);
    text-decoration: none;
  }
  .fact > .i {
    color: var(--rv-muted);
    margin-top: 0;
  }
  .fact.link span {
    color: var(--rv-accent-ink);
    font-weight: 500;
  }
  .fact .i.sm {
    width: 16px;
    height: 16px;
    margin-top: 3px;
    color: var(--rv-accent-ink);
  }
  .fact.notes span {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    color: var(--rv-text-2);
    font-size: 15px;
  }
  .fact.notes a {
    color: var(--rv-accent-ink);
  }
  .sheet-note .i {
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: -2px;
  }

  /* ---------- event form ---------- */
  .flabel-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flabel-row .flabel {
    font-size: 14px;
    font-weight: 500;
  }
  .mini-switch {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--rv-text-2);
  }
  /* 1.77.0: a text of one line that can be long (a title, a demérito, a prize, a place) shows all of it, growing with
     the text (and the corner makes it bigger, textareas.js) */
  .field textarea.grow,
  textarea.rv-title {
    field-sizing: content;
    min-height: 50px;
    max-height: 40vh;
  }
  textarea.rv-title {
    min-height: 0;
    resize: none;
    line-height: 1.35;
    font: inherit;
    font-size: 16px;
    font-weight: 600;
    color: var(--rv-text);
  }
  .ev-title-input {
    font-size: 18px !important;
    font-weight: 600;
    resize: none;
  }
  .field .time-row {
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .chip-row.dur {
    margin-top: 10px;
  }
  .chip-row.dur .pick {
    padding-left: 12px;
    padding-right: 12px;
  }
  /* Quando › Manhã, Tarde, Noite: the usual hour of each part of the day */
  .chip-row.parts {
    margin-top: 10px;
  }

  /* ---------- import review ---------- */
  .rv-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 14px;
  }
  .rv-card {
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 16px;
    padding: 10px 10px 8px 12px;
  }
  .rv-card.off {
    opacity: 0.5;
  }
  .rv-top {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rv-title {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: none;
    font-size: 16px;
    font-weight: 600;
    padding: 6px 0;
  }
  .rv-when {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin: 6px 0 2px 44px;
  }
  .rv-times {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .rv-when .pick {
    padding: 4px 10px;
  }
  .rv-meta {
    margin: 4px 0 0 44px;
    font-size: 13px;
    color: var(--rv-muted);
  }
  .help-card {
    border: 1px solid var(--rv-line);
    background: var(--rv-surface-2);
    border-radius: 16px;
    padding: 12px 14px;
    margin-bottom: 10px;
  }
  .help-card > b {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }
  .help-card > b .i {
    width: 19px;
    height: 19px;
    color: var(--rv-accent-ink);
  }
  .help-card p {
    margin: 6px 0 4px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--rv-text-2);
  }
  .help-card .text-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
  }
  .help-card .text-btn .i {
    width: 15px;
    height: 15px;
  }
  .imp-opt.danger .imp-ic {
    color: var(--rv-late);
  }
  .imp-opt.danger b {
    color: var(--rv-late);
  }

  /* ---------- modelos: remédios, contas, rotina, manutenção ---------- */
  :host {
    --rv-ok: #1f9d63;
    --rv-ok-soft: rgba(31, 157, 99, 0.13);
    --rv-warn: #c77c02;
    --rv-warn-soft: rgba(232, 163, 23, 0.16);
  }
  :host([dark]) {
    --rv-ok: #4fd18f;
    --rv-ok-soft: rgba(79, 209, 143, 0.15);
    --rv-warn: #ffbe4d;
    --rv-warn-soft: rgba(255, 190, 77, 0.15);
  }
  .model-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    margin: 0 0 16px;
  }
  .model-field > .model-strip {
    margin: 0;
  }
  .model {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 0;
    min-height: 42px;
    padding: 6px 6px;
    border-radius: 13px;
    border: 1.5px solid var(--rv-line-strong);
    font-size: 13.5px;
    font-weight: 600;
    color: var(--rv-text-2);
  }
  .model > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .model .i {
    width: 18px;
    height: 18px;
    flex: none;
  }
  .model.on {
    background: var(--rv-accent-soft);
    border-color: var(--rv-accent);
    color: var(--rv-accent-ink);
  }

  .ring2 {
    position: relative;
    width: 44px;
    height: 44px;
    flex: none;
    display: inline-grid;
    place-items: center;
    color: var(--rv-accent-ink);
  }
  .ring2 svg.rg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .ring2 circle {
    fill: none;
    stroke-width: 3.6;
  }
  .ring2 .r-bg {
    stroke: var(--rv-line);
  }
  .ring2 .r-fg {
    stroke: var(--rv-accent);
    stroke-linecap: round;
  }
  .ring2 b {
    font-family: var(--rv-display);
    font-size: 13px;
    font-weight: 700;
    color: var(--rv-text);
    font-variant-numeric: tabular-nums;
  }
  .ring2 .i {
    width: 18px;
    height: 18px;
  }
  .ring2.ok .r-fg {
    stroke: var(--rv-ok);
  }
  .ring2.ok {
    color: var(--rv-ok);
  }
  .ring2.warn .r-fg {
    stroke: var(--rv-warn);
  }
  .ring2.warn {
    color: var(--rv-warn);
  }
  .ring2.bad .r-fg {
    stroke: var(--rv-late);
  }
  .ring2.bad {
    color: var(--rv-late);
  }

  /* a pet: the paw in place of the initial */
  .avatar .i {
    width: 58%;
    height: 58%;
  }
  .pet-btn {
    color: var(--rv-faint, var(--rv-muted));
  }
  .pet-btn.on {
    color: var(--rv-accent-ink);
    background: var(--rv-accent-soft);
  }
  .person-add .seg button {
    gap: 6px;
  }
  .person-add .seg .i {
    width: 16px;
    height: 16px;
  }
  .avatar {
    width: 28px;
    height: 28px;
    flex: none;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 14px;
  }
  .avatar.sm {
    width: 22px;
    height: 22px;
    font-size: 12px;
    margin-left: -4px;
  }
  .pick.on .avatar.sm {
    background: rgba(255, 255, 255, 0.4);
    color: inherit;
  }

  /* Remédios de hoje: the critical card */
  .panel.meds {
    padding: 0 0 4px;
    overflow: hidden;
    border-width: 1.5px;
  }
  .panel.meds.alert {
    border-color: var(--rv-late);
    box-shadow: 0 0 0 4px var(--rv-late-soft);
  }
  .meds-head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px 12px;
  }
  .meds-ic {
    width: 42px;
    height: 42px;
    flex: none;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .panel.meds.alert .meds-ic {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .panel.meds.all .meds-ic {
    background: var(--rv-ok-soft);
    color: var(--rv-ok);
  }
  .meds-tt {
    flex: 1;
    min-width: 0;
  }
  .meds-tt b {
    display: block;
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
    line-height: 1.15;
  }
  .meds-alert {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin: 0 12px 8px;
    padding: 10px 12px;
    border-radius: 12px;
    background: var(--rv-late);
    color: #fff;
    font-size: 15px;
    line-height: 1.35;
  }
  :host([dark]) .meds-alert {
    color: #1a0806;
  }
  .meds-alert .i {
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }
  .meds-who {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px 2px;
    font-size: 15px;
  }
  .meds-who small {
    color: var(--rv-muted);
    font-size: 13px;
  }
  /* 1.59.0: whoever has no dose left today, one name each (the doses folded under Tomados (n)) */
  .meds-ready {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 16px 4px;
  }
  .ready-who {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 36px;
    padding: 3px 12px 3px 4px;
    border-radius: 999px;
    background: var(--rv-surface-2);
    font-size: 14px;
    color: var(--rv-muted);
  }
  .ready-who b {
    color: var(--rv-text);
    font-weight: 600;
  }
  .ready-who .avatar {
    width: 26px;
    height: 26px;
    font-size: 13px;
  }
  .ready-who > .i {
    width: 17px;
    height: 17px;
    stroke-width: 2.6;
    color: var(--rv-ok);
  }
  .ready-who.skipped > .i {
    color: var(--rv-warn);
  }
  .who-bell {
    margin-left: auto;
    color: var(--rv-muted);
  }
  .who-bell .i {
    width: 16px;
    height: 16px;
  }
  .dose {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px 4px 8px;
    margin: 2px 8px;
    border-radius: 14px;
  }
  .dose.agora {
    background: var(--rv-accent-faint);
  }
  .dose.atrasado {
    background: var(--rv-late-soft);
  }
  .dose-main {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    text-align: left;
  }
  .dose-time {
    width: 48px;
    flex: none;
    text-align: right;
    font-family: var(--rv-display);
    font-size: 17px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .dose.atrasado .dose-time,
  .dose.atrasado .dose-tx small {
    color: var(--rv-late);
  }
  .dose-tx {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .dose-tx b {
    font-weight: 600;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }
  .dose-tx small {
    font-size: 13.5px;
    color: var(--rv-muted);
    line-height: 1.3;
  }
  .dose.tomado .dose-tx b {
    color: var(--rv-muted);
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
    text-decoration-color: var(--rv-faint);
  }
  .dose.tomado .dose-time,
  .dose.pulado .dose-time {
    color: var(--rv-faint);
  }
  /* Pular: a dose skipped on purpose: gray, the yellow skip mark in place of the check */
  .dose.pulado .dose-tx b {
    color: var(--rv-muted);
  }
  .dose-done.skipped,
  :host([dark]) .dose-done.skipped {
    background: var(--rv-warn-soft);
    color: var(--rv-warn);
  }
  .dose-btn {
    flex: none;
    min-width: 84px;
    min-height: 40px;
    padding: 0 14px;
    border-radius: 13px;
    font-weight: 700;
    font-size: 15px;
    border: 1.5px solid var(--rv-line-strong);
    color: var(--rv-text-2);
    transition: transform 0.12s;
  }
  .dose-btn:active {
    transform: scale(0.95);
  }
  .dose-btn.agora {
    background: var(--rv-accent);
    border-color: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .dose-btn.atrasado {
    background: var(--rv-late);
    border-color: var(--rv-late);
    color: #fff;
  }
  :host([dark]) .dose-btn.atrasado {
    color: #1a0806;
  }
  .dose-btn.later {
    min-width: 0;
  }
  .dose-done {
    flex: none;
    width: 40px;
    height: 40px;
    margin: 0 22px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-ok);
    color: #fff;
  }
  :host([dark]) .dose-done {
    color: #06210f;
  }
  .dose-done .i {
    width: 20px;
    height: 20px;
    stroke-width: 3;
  }
  .panel-foot {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin-top: 6px;
    padding: 11px 16px 10px;
    border-top: 1px solid var(--rv-line);
    color: var(--rv-muted);
    font-size: 13.5px;
    text-align: left;
    line-height: 1.35;
  }
  .panel-foot > span {
    flex: 1;
  }
  .panel-foot .i {
    width: 16px;
    height: 16px;
    flex: none;
  }
  .panel-foot.warn {
    color: var(--rv-warn);
  }

  /* Contas a pagar */
  .panel.bills {
    padding: 0 0 4px;
    overflow: hidden;
  }
  .panel.bills.alert {
    border-color: var(--rv-late);
  }
  .bills-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 14px 16px 6px;
  }
  .bills-sum {
    text-align: right;
    line-height: 1.1;
  }
  .bills-sum b {
    display: block;
    font-family: var(--rv-display);
    font-size: 20px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .bills-sum small {
    font-size: 12.5px;
    color: var(--rv-muted);
  }
  .panel.bills.alert .bills-sum small {
    color: var(--rv-late);
    font-weight: 600;
  }
  .bill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 12px 2px 8px;
    margin: 2px 8px;
    border-radius: 14px;
  }
  .bill.late {
    background: var(--rv-late-soft);
  }
  .bill.today {
    background: var(--rv-warn-soft);
  }
  .bill-main {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    text-align: left;
  }
  .bill-due {
    width: 42px;
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px 0;
    border-radius: 10px;
    background: var(--rv-surface-2);
    line-height: 1.05;
  }
  .bill-due b {
    font-family: var(--rv-display);
    font-size: 18px;
    font-weight: 700;
  }
  .bill-due small {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--rv-muted);
  }
  .bill.late .bill-due {
    background: var(--rv-late);
    color: #fff;
  }
  .bill.late .bill-due small {
    color: inherit;
    opacity: 0.85;
  }
  .bill-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .bill-tx b {
    font-weight: 600;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }
  .bill-tx small {
    font-size: 13.5px;
    color: var(--rv-muted);
    line-height: 1.35;
  }
  .bill.late .bill-tx small {
    color: var(--rv-late);
  }
  .bill-val {
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 15px;
    color: var(--rv-text);
    font-variant-numeric: tabular-nums;
  }
  .bill.paid .bill-tx b,
  .bill.paid .bill-val {
    color: var(--rv-muted);
    text-decoration: line-through;
    text-decoration-color: var(--rv-faint);
  }
  .bill .dose-btn {
    min-width: 76px;
  }
  .bill .dose-done {
    margin: 0 18px;
  }
  .panel-foot.plain {
    margin-top: 4px;
  }
  /* Avisos do GerencIA (1.79.0): as linhas das contas, com o ícone no lugar do dia (um card à parte: .panel.bills é só o
     das contas) */
  .panel.gavisos {
    padding: 0 0 4px;
    overflow: hidden;
  }
  a.bill.gav {
    color: inherit;
    text-decoration: none;
  }
  .bill.gav {
    gap: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .gav-ic {
    height: 42px;
    justify-content: center;
    color: #b58200;
    background: rgba(242, 193, 78, 0.22);
  }
  :host([dark]) .gav-ic {
    color: #f2c14e;
  }
  .gav-ic .i {
    width: 20px;
    height: 20px;
  }
  .bill.gav.alerta .gav-ic {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .gav-n {
    flex: none;
    text-align: right;
    font-family: var(--rv-display);
    font-weight: 600;
    font-size: 17px;
    line-height: 1.05;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .gav-n.late {
    color: var(--rv-late);
  }
  .gav-n small {
    display: block;
    font-family: var(--rv-font, inherit);
    font-size: 12px;
    font-weight: 400;
    color: var(--rv-muted);
  }
  .gav-chev {
    flex: none;
    width: 18px;
    height: 18px;
    color: var(--rv-faint);
  }

  /* Rotina e manutenção */
  .panel.chores {
    padding: 0 0 4px;
  }
  .chores-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 14px 16px 4px;
  }
  .chores-head.sub {
    border-top: 1px solid var(--rv-line);
    margin-top: 6px;
  }
  .chores-head small {
    color: var(--rv-muted);
    font-size: 13px;
  }
  .chore {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 16px;
  }
  .chk {
    width: 30px;
    height: 30px;
    flex: none;
    border-radius: 50%;
    border: 2px solid var(--rv-line-strong);
    display: grid;
    place-items: center;
  }
  .chk.on {
    background: var(--rv-ok);
    border-color: var(--rv-ok);
    color: #fff;
  }
  .chk .i {
    width: 17px;
    height: 17px;
    stroke-width: 3;
  }
  .chore-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: 7px 0;
    text-align: left;
  }
  .chore-tx b {
    font-weight: 600;
    line-height: 1.25;
  }
  .chore-tx small {
    font-size: 13.5px;
    color: var(--rv-muted);
  }
  .chore.done .chore-tx b {
    color: var(--rv-muted);
    text-decoration: line-through;
    text-decoration-color: var(--rv-faint);
  }
  .maint {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 12px 2px 10px;
    margin: 2px 6px;
    border-radius: 14px;
  }
  .maint.vencida {
    background: var(--rv-late-soft);
  }
  .maint-main {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    text-align: left;
  }
  .maint-tx {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .maint-tx b {
    font-weight: 600;
    line-height: 1.25;
  }
  .maint-tx small {
    font-size: 13.5px;
    color: var(--rv-muted);
  }
  .maint.vencida .maint-tx small {
    color: var(--rv-late);
  }
  .maint .dose-btn {
    min-width: 72px;
  }
  .maint-list {
    margin: 0 -8px 8px;
  }
  .panel.bills .add-line,
  .panel.chores .add-line {
    padding-left: 16px;
  }

  /* model events in the calendar screens */
  .kind-ic {
    display: inline-flex;
    vertical-align: -2px;
    margin-right: 5px;
    color: var(--ci);
  }
  .kind-ic .i {
    width: 15px;
    height: 15px;
  }
  .ev-done {
    display: inline-flex;
    vertical-align: -2px;
    margin-left: 6px;
    color: var(--rv-ok);
  }
  .ev-done .i {
    width: 16px;
    height: 16px;
    stroke-width: 3;
  }
  /* Modo férias: the banner of Agora, the mark of the days away */
  /* sky to sand, the same every day (not the color of the day): it has to stand out */
  .away-card {
    --aw-ink: #0c4a6e;
    --aw-sky: #0284c7;
    position: relative;
    overflow: hidden;
    margin: -2px 0 16px;
    padding: 16px 16px 14px;
    border-radius: 22px;
    border: 1px solid #bae6fd;
    background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 52%, #fef3c7 100%);
    color: var(--aw-ink);
  }
  :host([dark]) .away-card {
    --aw-ink: #e0f2fe;
    --aw-sky: #38bdf8;
    border-color: rgba(56, 189, 248, 0.32);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.26) 0%, rgba(14, 165, 233, 0.1) 55%, rgba(245, 158, 11, 0.16) 100%);
  }
  /* a big faint plane in the corner */
  .away-card::after {
    content: "";
    position: absolute;
    right: -26px;
    bottom: -34px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.55), transparent 70%);
    pointer-events: none;
  }
  :host([dark]) .away-card::after {
    background: radial-gradient(circle, rgba(56, 189, 248, 0.16), transparent 70%);
  }
  .aw-top {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .aw-ic {
    flex: none;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: var(--aw-sky);
    color: #fff;
    box-shadow: 0 6px 16px rgba(2, 132, 199, 0.28);
  }
  :host([dark]) .aw-ic {
    color: #082f49;
  }
  .aw-ic .i {
    width: 28px;
    height: 28px;
  }
  .aw-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .aw-over {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--aw-sky);
  }
  .aw-title {
    font-family: var(--rv-display);
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    color: var(--aw-ink);
  }
  .aw-tx small {
    margin-top: 2px;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--aw-ink);
    opacity: 0.75;
  }
  .away-card .aw-end {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
    padding: 10px 12px;
    border-radius: 14px;
    border: 1px solid rgba(2, 132, 199, 0.28);
    background: rgba(255, 255, 255, 0.7);
    color: var(--aw-ink);
    font-weight: 700;
  }
  :host([dark]) .away-card .aw-end {
    background: rgba(255, 255, 255, 0.1);
  }
  .aw-bar {
    position: relative;
    height: 8px;
    margin: 14px 0 2px;
    border-radius: 99px;
    background: rgba(2, 132, 199, 0.16);
    overflow: hidden;
  }
  .aw-bar > span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--aw-sky), #f59e0b);
  }
  .aw-chips {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
  }
  .aw-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.72);
    color: var(--aw-ink);
    font-size: 13px;
    font-weight: 600;
  }
  :host([dark]) .aw-chip {
    background: rgba(255, 255, 255, 0.07);
  }
  .aw-chip .i {
    width: 15px;
    height: 15px;
    color: var(--aw-sky);
  }
  .aw-chip.meds .i {
    color: var(--rv-ok);
  }
  .away-day {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px;
    padding: 8px 12px;
    border-radius: 12px;
    background: var(--rv-accent-soft);
    color: var(--rv-text-2);
    font-size: 13.5px;
    font-weight: 600;
  }
  .away-day .i {
    width: 16px;
    height: 16px;
    color: var(--rv-accent-ink);
  }
  .cell.away:not(.sel) b {
    color: var(--rv-accent-ink);
  }
  .cell.away::after {
    content: "";
    position: absolute;
    left: 12%;
    right: 12%;
    bottom: 2px;
    height: 3px;
    border-radius: 2px;
    background: var(--rv-accent);
    opacity: 0.45;
  }
  .away-dates {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    margin-top: 12px;
  }
  .away-dates .field {
    margin: 0;
  }
  .field-hint.away-cal {
    margin-top: 10px;
  }
  /* Levar para o ResolvIA: a list for the maintenance and one for the routines */
  .field.mirror-pick {
    margin: 6px 0 10px;
  }
  /* Casa ou Bens (1.76.0): before the rooms of a task, two halves of the same size */
  .seg.where {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .seg.where button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .seg.where .i {
    width: 18px;
    height: 18px;
  }
  /* Cômodo locked by the equipment (Novo › Tarefa): the rooms of the items stay marked, the others fade */
  .chip-row.locked .pick:disabled {
    cursor: default;
    opacity: 0.4;
  }
  .chip-row.locked .pick.on:disabled {
    opacity: 1;
  }
  .ev-done.missed {
    color: var(--rv-late);
  }
  .ev-done.skipped {
    color: var(--rv-warn);
  }
  .ev-row.done .ev-title {
    color: var(--rv-muted);
  }
  /* done or skipped: faded (only these: one whose time passed but is not done stays clear) */
  .ev-row.done {
    opacity: 0.5;
  }
  /* done in the grid: green (the color comes from the element), a bit faded */
  /* Mais › Rotinas: everything registered, one line each */
  .cat-search {
    margin-bottom: 14px;
  }
  .cat-sec .chores-head.sec-head {
    padding: 4px 0 8px;
  }
  .cat-row > .i {
    flex: none;
    width: 18px;
    height: 18px;
    color: var(--rv-muted);
  }
  .cat-row .hint {
    white-space: normal;
    line-height: 1.35;
  }
  .cat-row .hint .late {
    color: var(--rv-late);
  }
  .cat-sec .chores-head + .cat-row {
    border-top: 0;
  }
  .cat-note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0 0;
    font-size: 13px;
    color: var(--rv-muted);
  }
  .cat-note .i {
    width: 15px;
    height: 15px;
    flex: none;
  }
  .tg-ev.done,
  .tg-ad.done {
    opacity: 0.8;
  }
  .kind-state {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0 2px;
    padding: 10px 12px;
    border-radius: 14px;
    background: var(--rv-ok-soft);
    color: var(--rv-text);
    font-size: 15px;
  }
  .kind-state > .i {
    color: var(--rv-ok);
    flex: none;
  }
  .kind-state > span {
    flex: 1;
  }
  .btn.kind-act {
    width: 100%;
    margin: 12px 0 2px;
  }

  /* model forms */
  .times {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
  .time-pill {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px 4px 2px 2px;
    border-radius: 14px;
    border: 1.5px solid var(--rv-line-strong);
  }
  .time-pill .pickf {
    min-height: 40px;
    padding: 0 6px 0 10px;
    border: 0;
    background: none;
  }
  .time-pill .pickf.t .pf-v {
    font-size: 17px;
  }
  .wdp-row {
    display: flex;
    gap: 6px;
    margin-top: 10px;
  }
  .wdp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid var(--rv-line-strong);
    font-weight: 700;
    color: var(--rv-text-2);
  }
  .wdp.on {
    background: var(--rv-accent);
    border-color: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .field input[type="number"] {
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-bg);
    border-radius: 14px;
    padding: 10px 12px;
    font-size: 17px;
    outline: 0;
    color: var(--rv-text);
  }
  .num-input {
    width: 78px !important;
    text-align: center;
    font-weight: 600;
  }
  .money {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1.5px solid var(--rv-line-strong);
    border-radius: 14px;
    padding: 0 14px;
    background: var(--rv-surface-2);
  }
  .money > span {
    font-weight: 600;
    color: var(--rv-muted);
  }
  .field .money input {
    border: 0 !important;
    background: none !important;
    padding-left: 0 !important;
    font-family: var(--rv-display);
    font-size: 22px;
    font-weight: 600;
  }
  .who-input {
    margin-top: 10px;
  }
  /* Horário of a routine: or a part of the day */
  .chip-row.per-row {
    margin-top: 8px;
  }

  .next-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: -6px 2px 18px;
    color: var(--rv-text-2);
    font-size: 15px;
  }
  .next-line .i {
    color: var(--rv-accent-ink);
    flex: none;
  }
  .switch-row {
    margin-bottom: 8px;
  }
  .switch-row .hint {
    white-space: normal;
  }
  /* Name on top, the buttons on the right; below, the whole width: who gets the alerts of one without a phone. */
  .person-row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    column-gap: 12px;
    row-gap: 8px;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid var(--rv-line);
  }
  .person-row:first-of-type {
    border-top: 0;
  }
  .person-row > .avatar {
    grid-column: 1;
    grid-row: 1 / span 2;
    align-self: start;
    margin-top: 2px;
  }
  .person-row .grow {
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .person-row .grow > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .person-row > .select.sm {
    grid-column: 2 / -1;
    grid-row: 2;
    width: 100%;
    max-width: 100%;
  }
  .person-row > .p-acts {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    align-items: center;
  }
  .person-row > .p-acts:empty {
    display: none;
  }
  /* Mais › Avisos: a person or a pet, added only here */
  .people-field .add-line {
    padding-left: 0;
    border-top: 1px solid var(--rv-line);
  }
  .person-add {
    display: grid;
    gap: 10px;
    padding: 12px 0 4px;
    border-top: 1px solid var(--rv-line);
  }
  .person-add .field-sub {
    display: grid;
    gap: 6px;
    font-size: 13px;
    color: var(--rv-muted);
  }
  .person-add .select.sm {
    width: 100%;
    max-width: 100%;
  }
  .person-add-acts {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  .person-row small {
    font-size: 12.5px;
    color: var(--rv-muted);
  }
  .select.sm {
    width: auto;
    max-width: 52%;
    font-size: 14px;
    padding: 9px 34px 9px 12px;
    border-radius: 12px;
  }
  /* "No Home Assistant": information, not a warning */
  .steps-box .data-note {
    color: var(--rv-text-2);
    font-size: 13.5px;
    line-height: 1.45;
  }
  .steps-box .data-note code,
  .panel-lead code {
    font-size: 12.5px;
    word-break: break-all;
  }

  /* ---------- Recompensas ---------- */
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin: 0 0 -4px -6px;
    padding: 6px 8px 6px 2px;
    color: var(--rv-accent-ink);
    font-weight: 600;
    font-size: 15px;
  }
  .avatar.xl {
    position: relative;
    width: 56px;
    height: 56px;
    font-size: 24px;
    background: var(--cs, var(--rv-accent-soft));
    color: var(--ci, var(--rv-accent-ink));
  }
  .avatar.sm2 {
    width: 30px;
    height: 30px;
    font-size: 14px;
    background: var(--cs, var(--rv-accent-soft));
    color: var(--ci, var(--rv-accent-ink));
  }
  .panel.board {
    padding: 18px 16px 0;
    overflow: hidden;
  }
  .duel {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .duel-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 0;
  }
  .duel-name {
    margin-top: 6px;
    font-size: 16px;
    font-weight: 600;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .duel-pts {
    font-family: var(--rv-display);
    font-size: 46px;
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: var(--rv-text);
  }
  .duel-side.lead .duel-pts {
    color: var(--ci);
  }
  .duel-side small {
    font-size: 13px;
    color: var(--rv-muted);
  }
  .duel-x {
    font-family: var(--rv-display);
    font-size: 22px;
    color: var(--rv-faint);
    padding: 0 6px;
  }
  .crown {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%) rotate(-8deg);
    color: #e8a317;
    display: flex;
  }
  .crown .i {
    width: 22px;
    height: 22px;
    fill: #f2c14e;
  }
  .tug {
    position: relative;
    height: 10px;
    margin: 16px 0 0;
    border-radius: 6px;
    background: var(--b);
    overflow: hidden;
  }
  .tug > span {
    position: absolute;
    inset: 0 auto 0 0;
    background: var(--a);
    border-right: 3px solid var(--rv-surface);
    transition: width 0.4s ease;
  }
  .board-foot {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 0 -16px;
    padding: 11px 16px 12px;
    color: var(--rv-text-2);
    font-size: 14.5px;
  }
  .board-foot .i {
    width: 18px;
    height: 18px;
    color: #e8a317;
  }
  .ranking {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 6px;
  }
  .rank-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rank-n {
    width: 18px;
    text-align: center;
    font-family: var(--rv-display);
    font-weight: 700;
    color: var(--rv-muted);
  }
  .rank-row .avatar {
    background: var(--cs);
    color: var(--ci);
  }
  .rank-main {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .rank-bar {
    height: 8px;
    border-radius: 5px;
    background: var(--rv-surface-2);
    overflow: hidden;
  }
  .rank-bar i {
    display: block;
    height: 100%;
    background: var(--c);
    border-radius: 5px;
  }
  .rank-pts {
    font-family: var(--rv-display);
    font-size: 22px;
    font-weight: 700;
    min-width: 40px;
    text-align: right;
  }

  .result-card {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 18px;
    padding: 12px 14px;
    border-radius: 18px;
    background: var(--cs, var(--rv-surface-2));
    border: 1.5px solid var(--c, var(--rv-line));
  }
  .result-ic {
    width: 40px;
    height: 40px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: #f2c14e;
    color: #6b4a00;
  }
  .result-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .result-tx b {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    line-height: 1.2;
  }
  .result-score {
    white-space: nowrap;
    color: var(--rv-muted);
    font-weight: 500;
    margin-left: 4px;
  }
  .result-tx small {
    font-size: 14px;
    color: var(--rv-text-2);
  }

  .panel.prize {
    padding: 14px 16px 6px;
  }
  .prize-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .prize-ic {
    width: 44px;
    height: 44px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: rgba(242, 193, 78, 0.22);
    color: #b58200;
  }
  :host([dark]) .prize-ic {
    color: #f2c14e;
  }
  /* the other Recompensas sections: the same icon tile as the Prêmios one */
  .chores-head.sec-head {
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 16px 16px 8px;
  }
  .sec-head .overline {
    flex: 1;
    min-width: 0;
  }
  .sec-ic {
    width: 44px;
    height: 44px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 14px;
  }
  .sec-ic .i {
    width: 22px;
    height: 22px;
  }
  .sec-ic.ok {
    background: var(--rv-ok-soft);
    color: var(--rv-ok);
  }
  .sec-ic.late {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .sec-ic.accent {
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .sec-ic.muted {
    background: var(--rv-surface-2);
    color: var(--rv-muted);
  }
  .sec-ic.gold {
    background: rgba(242, 193, 78, 0.22);
    color: #b58200;
  }
  :host([dark]) .sec-ic.gold {
    color: #f2c14e;
  }
  .sec-ic.violet {
    background: rgba(185, 155, 255, 0.2);
    color: #7b5cd6;
  }
  :host([dark]) .sec-ic.violet {
    color: #b99bff;
  }
  /* inside the day's agenda (its own padding) and next to the bills' total */
  .panel.agenda > .sec-head {
    padding: 10px 2px 6px;
  }
  .bills-head {
    align-items: center !important;
    gap: 12px;
  }
  .bills-head .overline {
    flex: 1;
    min-width: 0;
  }
  .panel.prize.set .prize-ic {
    background: #f2c14e;
    color: #5b3e00;
  }
  .prize-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .prize-tx b {
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }
  .prize-empty {
    color: var(--rv-muted);
    font-size: 15px;
    line-height: 1.35;
  }
  /* a prize for each person */
  .prize-people {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }
  .prize-person {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px 8px 8px;
    border-radius: 14px;
    background: var(--cs, var(--rv-surface-2));
  }
  .prize-person.lead {
    box-shadow: inset 0 0 0 1.5px var(--ci, var(--rv-accent));
  }
  .pp-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .pp-tx small {
    font-size: 12.5px;
    color: var(--rv-text-2);
  }
  .pp-tx b {
    font-family: var(--rv-display);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }
  .pp-tx i {
    font-style: normal;
    color: var(--rv-muted);
  }
  .pp-lead {
    color: #e0a100;
    display: grid;
  }
  :host([dark]) .pp-lead {
    color: #f2c14e;
  }
  .prize-next {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
    padding: 10px 0 6px;
    border-top: 1px solid var(--rv-line);
    font-size: 14.5px;
    color: var(--rv-text-2);
  }
  .prize-next > span:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }
  .prize-next .i {
    width: 17px;
    height: 17px;
    flex: none;
    color: var(--rv-muted);
  }

  .pts {
    flex: none;
    min-width: 46px;
    padding: 4px 8px;
    border-radius: 10px;
    text-align: center;
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 15px;
    background: rgba(242, 193, 78, 0.2);
    color: #9a6b00;
    font-variant-numeric: tabular-nums;
  }
  :host([dark]) .pts {
    color: #f2c14e;
  }
  .pts.got {
    background: var(--cs, var(--rv-ok-soft));
    color: var(--ci, var(--rv-ok));
  }
  .chore.done .pts.got {
    text-decoration: none;
  }
  /* done with points: who got them (initial in their color) and the points */
  .won {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 46px;
    padding: 3px 10px 3px 3px;
    border-radius: 12px;
    background: var(--cs, var(--rv-ok-soft));
    color: var(--ci, var(--rv-ok));
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 15px;
    font-variant-numeric: tabular-nums;
  }
  .won-who {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--c);
    color: #fff;
    font-size: 13px;
  }
  :host([dark]) .won-who {
    color: #1b1b1b;
  }
  .btn-pts {
    min-width: 58px;
    padding: 8px 10px;
    background: #f2c14e;
    color: #4a3200;
  }
  .chk.wrench {
    border: 0;
    background: var(--rv-surface-2);
    color: var(--rv-muted);
  }
  .chk.wrench.vencida {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .chk.wrench.perto {
    background: var(--rv-warn-soft);
    color: var(--rv-warn);
  }
  .chk.wrench .i {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }
  .score-actions {
    display: flex;
    gap: 8px;
    padding: 10px 16px 12px;
    margin-top: 4px;
    border-top: 1px solid var(--rv-line);
  }
  /* 1.77.0: Novo demérito, Tarefa com pontos and Pontos avulsos at the width of the card on the phone (two share the line),
     250 px on the computer, like the other buttons of the family */
  .score-actions {
    flex-wrap: wrap;
  }
  .score-actions .btn {
    flex: 1 1 calc(50% - 4px);
    min-width: fit-content;
    min-height: 50px;
    font-size: 15px;
    padding: 0 12px;
    white-space: nowrap;
  }
  @media (min-width: 1000px) {
    .score-actions .btn {
      flex: none;
      width: 250px;
    }
  }
  .panel.score-today .empty-line {
    padding: 4px 16px 8px;
  }

  .panel.history {
    padding: 0 0 6px;
  }
  .hist-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px;
  }
  .feed-tx,
  .hist-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .feed-tx b,
  .hist-tx b {
    font-weight: 600;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .feed-tx small,
  .hist-tx small {
    font-size: 13px;
    color: var(--rv-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hist-ic {
    width: 34px;
    height: 34px;
    flex: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-family: var(--rv-display);
    font-weight: 700;
    background: var(--cs, var(--rv-surface-2));
    color: var(--ci, var(--rv-muted));
    box-shadow: 0 0 0 2px #f2c14e;
  }
  .hist-ic.tie {
    box-shadow: none;
  }

  /* ---------- Recompensas: Extrato ---------- */
  .extrato .ext-day {
    padding: 10px 16px 2px;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--rv-muted);
  }
  .extrato .ext-day:first-of-type {
    padding-top: 0;
  }
  .panel.extrato {
    padding: 0 0 6px;
  }
  .ext-more {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ext-more .add-line {
    width: auto;
    padding: 10px 16px 8px;
  }
  .ext-more .add-line.less {
    margin-left: auto;
    color: var(--rv-muted);
  }
  .ext-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 7px 6px 7px 16px;
  }
  .hist-row:has(.hist-open) {
    padding: 0 8px 0 0;
  }
  .hist-open {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 4px 7px 16px;
    text-align: left;
    border-radius: 12px;
  }
  .hist-open > .i {
    width: 18px;
    height: 18px;
    flex: none;
    color: var(--rv-faint);
  }
  .hist-open:hover {
    background: var(--rv-surface-2);
  }
  .plog-result {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 0 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--rv-line);
  }
  .extrato.plog {
    margin: 0 -16px;
  }
  .extrato.plog .ext-row {
    padding-right: 16px;
  }
  .extrato .empty-line {
    padding: 4px 16px 10px;
    color: var(--rv-muted);
  }
  .ext-row .icon-btn.mini,
  .ext-x-gap {
    flex: none;
    width: 36px;
    margin-top: -1px;
  }
  .ext-row .avatar,
  .ext-row .hist-ic {
    margin-top: 2px;
  }
  .ext-row .feed-tx b {
    white-space: normal;
    font-weight: 600;
    font-size: 15px;
  }
  .ext-row .pts {
    margin-top: 2px;
  }
  .ext-row.closed .hist-ic .i {
    width: 17px;
    height: 17px;
  }
  .pts.swap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    background: var(--rv-surface-2);
    color: var(--rv-muted);
  }
  .pts.swap .i {
    width: 13px;
    height: 13px;
  }
  .hist-gift {
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1.5px solid var(--rv-line-strong);
    color: var(--rv-muted);
  }
  .hist-gift.on {
    background: var(--rv-ok);
    border-color: var(--rv-ok);
    color: #fff;
  }
  .hist-gift .i {
    width: 17px;
    height: 17px;
  }

  .who-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }
  /* event sheet with Marcar por outras pessoas: the people side by side, in place of Feito */
  .who-act {
    margin: 6px 0 4px;
  }
  .who-act .flabel b {
    color: var(--rv-accent-ink);
    font-weight: 700;
  }
  .who-grid.inline {
    margin-bottom: 0;
  }
  .who-grid.inline .who-btn {
    flex-direction: row;
    justify-content: center;
    padding: 12px 10px;
    font-size: 15.5px;
  }
  .who-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 8px 14px;
    border-radius: 18px;
    border: 1.5px solid var(--c);
    background: var(--cs);
    font-size: 16px;
  }

  details.score-set {
    padding: 0 16px;
  }
  .add-line.center {
    width: 100%;
    justify-content: center;
    padding-left: 4px;
    margin: 4px 0 8px;
    color: var(--rv-text-2);
  }
  details.score-set summary {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    cursor: pointer;
  }
  details.score-set summary::-webkit-details-marker {
    display: none;
  }
  details.score-set[open] summary .i {
    transform: rotate(180deg);
  }
  details.score-set summary .i {
    color: var(--rv-muted);
    transition: transform 0.2s;
  }

  /* ---------- tarefas com prazo (ResolvIA) ---------- */
  .panel.todos {
    padding: 0 0 4px;
  }
  .panel.todos.alert {
    border-color: var(--rv-late);
  }
  .chores-head small.late {
    color: var(--rv-late);
    font-weight: 600;
  }
  .chk.sq {
    border-radius: 9px;
  }
  /* a day's list: the events, then "Rotinas, tarefas e lembretes" */
  .day-sep {
    margin: 10px 0 2px;
    padding-top: 12px;
    border-top: 1px dashed var(--rv-line);
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rv-muted);
  }
  .day-sep.first {
    margin-top: 2px;
    padding-top: 4px;
    border-top: 0;
  }
  /* Tarefas do ResolvIA › whose the list is, as chosen in the ResolvIA (2.42.0+): only shown */
  .owner-of {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .owner-of .i {
    width: 14px;
    height: 14px;
  }
  /* Tarefas do ResolvIA › De quem é (Todos, or one person) */
  .owner-pick {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 6px;
    margin-top: 8px;
  }
  .owner-pick .op-l {
    flex-basis: 100%;
    font-size: 12.5px;
    color: var(--rv-muted);
  }
  .owner-pick button {
    font-size: 13px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid var(--rv-line-strong);
    color: var(--rv-text-2);
  }
  .owner-pick button.on {
    background: var(--rv-accent-soft);
    border-color: transparent;
    color: var(--rv-accent-ink);
    font-weight: 600;
  }
  /* Trazer do ResolvIA: review of the tasks of a list */
  .bring-list {
    display: grid;
    gap: 2px;
    margin: 4px 0 6px;
  }
  .bring-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 6px;
    border-radius: 12px;
    text-align: left;
    width: 100%;
  }
  .bring-row:hover {
    background: var(--rv-surface-2);
  }
  .bring-row .chk {
    flex: none;
    pointer-events: none;
  }
  .bring-row.off .bring-tx {
    opacity: 0.55;
  }
  .bring-tx {
    display: grid;
    gap: 2px;
    min-width: 0;
  }
  .bring-tx b {
    font-weight: 600;
    color: var(--rv-text);
    overflow-wrap: anywhere;
  }
  .bring-tx small {
    font-size: 13px;
    color: var(--rv-muted);
    line-height: 1.4;
  }
  .bring-all {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
  }
  .bring-lists .row {
    width: 100%;
    text-align: left;
  }
  .chore.todo.late .chore-tx small,
  .chore-tx small.late {
    color: var(--rv-late);
  }
  .chore.todo.late {
    background: var(--rv-late-soft);
    margin: 2px 8px;
    padding: 4px 8px;
    border-radius: 14px;
  }
  .row.switch-row.off .label {
    color: var(--rv-muted);
  }

  /* ---------- Mais › Configurações: tabs at the top ---------- */
  .more-tabs {
    position: sticky;
    top: 0;
    z-index: 4;
    margin: 0 0 14px;
    box-shadow: 0 0 0 6px var(--rv-bg);
  }
  /* the tabs of Configurações: they keep their width and the bar scrolls sideways if the screen is too narrow */
  .more-tabs {
    overflow-x: auto;
    scrollbar-width: none;
    overscroll-behavior-x: contain;
  }
  .more-tabs::-webkit-scrollbar {
    display: none;
  }
  .seg.compact.more-tabs button {
    flex: 1 0 auto;
    padding-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
  }
  /* phones: smaller, so the five fit */
  @media (max-width: 440px) {
    .seg.compact.more-tabs {
      gap: 1px;
    }
    .seg.compact.more-tabs button {
      font-size: 13px;
      padding-left: 4px;
      padding-right: 4px;
    }
  }
  /* 320 px: the five (with Recompensas, 1.55.0) still fit */
  @media (max-width: 360px) {
    .seg.compact.more-tabs button {
      font-size: 11.5px;
      padding-left: 1px;
      padding-right: 1px;
      letter-spacing: -0.1px;
    }
  }
  /* the icons only where there is room for them */
  @media (max-width: 600px) {
    .more-tabs .i {
      display: none;
    }
  }

  .sub-overline {
    margin: 16px 0 2px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rv-muted);
  }

  /* ---------- Recompensas: deméritos ---------- */
  .pts.neg,
  :host([dark]) .pts.neg {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  :host([dark]) .btn-pts {
    color: #4a3200;
  }
  .neg-text {
    color: var(--rv-late);
  }
  .dm-lead {
    margin: 0;
    padding: 0 16px 4px;
    font-size: 13px;
    color: var(--rv-muted);
  }
  .demerit {
    padding: 10px 16px 12px;
    border-top: 1px solid var(--rv-line);
  }
  /* Mais › Recompensas › Lembrete diário */
  .remind-seg button {
    gap: 6px;
  }
  .remind-seg .i {
    width: 16px;
    height: 16px;
  }
  /* the exact time, then the line of who gets it and Testar no meu celular */
  .remind-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: 10px;
  }
  .remind-row .pickf.remind-time {
    width: 100%;
  }
  /* Quem recebe (and Quem cuida): a button for each person, the same size, side by side; who has no phone says so */
  .flabel.quem-l {
    display: block;
    margin-top: 14px;
  }
  .chip-row.quem,
  .chip-row.care-pick {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .chip-row > .pick.quem-p {
    flex-wrap: wrap;
    gap: 0 7px;
    min-width: 0;
  }
  .pick.quem-p b {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }
  .pick.quem-p small {
    width: 100%;
    color: var(--rv-muted);
    font-size: 12.5px;
    line-height: 1.2;
    white-space: nowrap;
  }
  .pick.quem-p.on small {
    color: inherit;
    opacity: 0.8;
  }
  .pick.quem-p .i {
    width: 17px;
    height: 17px;
    flex: none;
  }
  /* Testar no meu celular: the whole width, at the bottom (the same in all the apps) */
  #avisos .aviso-test {
    display: flex;
    width: 100%;
    min-height: 48px;
    margin: 4px 0 2px;
  }
  .remind-field .remind-test {
    display: flex;
    width: 100%;
    margin: 12px 0 0;
    min-height: 48px;
  }
  /* Modo férias: the deméritos rest */
  .dm-lead.dm-away {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px 14px;
    font-size: 15px;
  }
  .dm-lead.dm-away .i {
    width: 18px;
    height: 18px;
    color: var(--rv-accent-ink);
  }
  .dm-lead + .demerit {
    border-top: 0;
  }
  .dm-top {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .dm-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .dm-tx b {
    font-weight: 600;
    line-height: 1.25;
  }
  .dm-tx small {
    font-size: 12.5px;
    color: var(--rv-muted);
  }
  .dm-who {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }
  .dm-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 40px;
    padding: 4px 14px 4px 4px;
    border-radius: 999px;
    background: var(--cs, var(--rv-surface-2));
    color: var(--ci, var(--rv-text));
    font-weight: 600;
    font-size: 14px;
    transition: transform 0.12s;
  }
  .dm-btn:active {
    transform: scale(0.96);
  }
  .dm-ideas {
    padding: 2px 16px 8px;
  }
  .demerit.dm-edit {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: left;
    color: inherit;
  }
  .demerit.dm-edit > .i {
    flex: none;
    color: var(--rv-muted);
  }
  /* Recompensas › Para pontuar hoje › Próximas rotinas */
  .future-note {
    margin: 0;
    padding: 2px 16px 6px;
    font-size: 13px;
    line-height: 1.45;
    color: var(--rv-muted);
  }
  @media (min-width: 1000px) {
    .page:not(.cal-page) .future-note {
      padding-left: 0;
      padding-right: 0;
    }
  }
  /* Mais › Placar › Deméritos: the card has no padding of its own (the rows go edge to edge),
     so the heading and the text get the same 16 px as the rows */
  .panel.demerits-set > .mais-head,
  .panel.demerits-set > .panel-lead {
    padding-left: 16px;
    padding-right: 16px;
  }

  /* Agora › Tarefas: quick "who did it" buttons on tasks worth points */
  .qwho {
    flex: none;
    display: flex;
    gap: 6px;
  }
  .qw-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--cs, var(--rv-surface-2));
    color: var(--ci, var(--rv-text));
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 17px;
    transition: transform 0.12s;
  }
  .qw-btn:active {
    transform: scale(0.92);
  }
  .pts-inline {
    font-weight: 700;
    color: #9a6b00;
    font-variant-numeric: tabular-nums;
  }
  :host([dark]) .pts-inline {
    color: #f2c14e;
  }

  /* Mais › Configurações › Integrações › Levar para o ResolvIA */
  .sub-lead {
    margin: 4px 0 8px;
    font-size: 13.5px;
    line-height: 1.45;
    color: var(--rv-muted);
  }
  .sub-lead .i {
    width: 15px;
    height: 15px;
    vertical-align: -2px;
    color: var(--rv-ok);
  }
  .sub-lead.with-icon {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-top: 10px;
  }
  .sub-lead.with-icon .i {
    flex: none;
    margin-top: 2px;
  }
  /* ---------- one height, the same in every app of the family (50 px): buttons, fields, boxes of choice and the
     choices in buttons (the tabs of Configurações, Tema, Semana, Repetir, the dates and De quem é). Out of it: the
     buttons with only an icon, the tiles of the AI, the rows of the lists and of the calendar, the switches and the colors. */
  .btn,
  .btn.sm,
  .dose-btn,
  .model,
  .pickf,
  .select,
  .field input[type="text"],
  .money,
  .search-box {
    min-height: 50px;
  }
  .seg {
    min-height: 50px;
    align-items: stretch;
  }
  .seg button {
    padding-top: 0;
    padding-bottom: 0;
  }
  .pick,
  .chip-row.grid .pick,
  .chip-row.c3 > .pick,
  .chip-row.c4 > .pick {
    min-height: 50px;
  }
  .chip-row.grid .pick {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .chip-row > .pick,
  .chip-row > .num-input,
  .chip-row > .inline-time,
  .field .time-row input,
  .time-row .num-input {
    min-height: 50px;
  }
  .chip-row > .pick {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  /* a seg in a grid (Repete, Mostrar antes): each line as tall as the inside of a seg of one line */
  .seg.seg-grid button {
    min-height: 42px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  /* the times of a medicine: the pill is the box of 50 */
  .time-pill {
    min-height: 50px;
  }
  .time-pill .pickf {
    min-height: 42px;
  }
  .field .money input {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    min-height: 0;
  }
  .owner-pick button {
    min-height: 50px;
    padding: 0 14px;
    border-radius: 12px;
    font-size: 14px;
  }
  /* the date field (datepick.js): the shortcuts in columns of the same width (as in the ResolvIA), the month under them */
  date-pick {
    display: block;
  }
  .chip-row.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 9.5em), 1fr));
    gap: 8px;
  }
  .chip-row.grid .pick {
    justify-content: center;
    text-align: center;
    white-space: normal;
    line-height: 1.2;
    min-width: 0;
    padding-left: 10px;
    padding-right: 10px;
  }
  .chip-row.grid .pick > span {
    overflow: visible;
    text-overflow: clip;
  }
  date-pick .cal {
    margin-top: 8px;
  }
  .field .flabel .tl {
    font-weight: 500;
    color: var(--rv-muted);
  }
  .dp-until {
    margin-top: 10px;
  }
  /* Opções › Atalho no celular: the steps, and the path on the whole width (never cut) with Copiar under it */
  .shortcut .steps {
    margin: 0 0 14px;
    padding-left: 22px;
    font-size: 14px;
  }
  .shortcut .steps b {
    color: var(--rv-text);
    font-weight: 600;
  }
  .shortcut .field {
    margin-bottom: 0;
  }
  .copy-row {
    display: grid;
    gap: 8px;
  }
  .copy-row input[type="text"] {
    min-width: 0;
    font-family: ui-monospace, monospace;
    font-size: 14px;
  }

  /* ---------- 1.82.0, the pattern of the family ---------- */
  /* the tabs that don't fit: the end where there are more fades, with an arrow */
  .tabs-wrap {
    position: sticky;
    top: 0;
    z-index: 4;
    margin: 0 0 14px;
  }
  .tabs-wrap > .more-tabs {
    position: relative;
    top: auto;
    z-index: 0;
    margin: 0;
  }
  .tabs-fim {
    position: absolute;
    top: 1px;
    bottom: 1px;
    z-index: 1;
    width: 48px;
    display: none;
    align-items: center;
    pointer-events: none;
    color: var(--rv-text);
  }
  .tabs-fim.dir {
    right: 1px;
    justify-content: flex-end;
    padding-right: 6px;
    border-radius: 0 12px 12px 0;
    background: linear-gradient(to right, transparent, var(--rv-surface-2) 62%);
  }
  .tabs-fim.esq {
    left: 1px;
    padding-left: 6px;
    border-radius: 12px 0 0 12px;
    background: linear-gradient(to left, transparent, var(--rv-surface-2) 62%);
  }
  .tabs-fim .i {
    width: 18px;
    height: 18px;
    display: block !important;
  }
  .tabs-wrap.tem-dir > .tabs-fim.dir,
  .tabs-wrap.tem-esq > .tabs-fim.esq {
    display: flex;
  }
  /* every title of an option or a field with its icon; no line between the options of a section (the lists with the
     square of the icon keep it) */
  .label:has(> .lbl-ic),
  .flabel:has(> .lbl-ic) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .lbl-ic {
    flex: none;
    width: 18px;
    height: 18px;
    color: var(--rv-accent-ink, var(--rv-accent));
  }
  .row .grow:has(> .label > .lbl-ic) > .hint {
    padding-left: 26px;
    white-space: normal;
  }
  .panel > .row:not(:has(> .tile)):not(:has(> .em-icon)),
  .sub-box > .row:not(:has(> .tile)):not(:has(> .em-icon)) {
    border-top: 0;
  }
  /* the sub-options: in a box under the switch, to see whose they are */
  .sub-op {
    padding: 0 0 14px 26px;
  }
  .sub-box {
    padding: 12px 14px 14px;
    border: 1px solid var(--rv-line);
    border-radius: 14px;
    background: var(--rv-surface-2);
  }
  .sub-box > .ai-state {
    padding: 0;
    margin: 0;
    background: none;
  }
  .sub-box > .row:first-child {
    padding-top: 0;
  }
  .sub-box > .row:last-child {
    padding-bottom: 0;
  }
  .sub-box > .ai-actions {
    margin-top: 12px;
  }
  @media (max-width: 360px) {
    .sub-op {
      padding-left: 10px;
    }
    .sub-box {
      padding: 10px;
    }
  }
  .sub-box.sensor-list {
    display: grid;
    padding: 4px 14px;
  }
  .sensor-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px 10px;
    padding: 9px 0;
    border-top: 1px solid var(--rv-line);
    font-size: 13.5px;
    color: var(--rv-muted);
  }
  .sensor-row:first-child {
    border-top: 0;
  }
  .sensor-row code {
    font-size: 13px;
    padding: 1px 6px;
    border-radius: 6px;
    background: var(--rv-bg);
    color: var(--rv-text);
    overflow-wrap: anywhere;
  }
  /* the title of each screen and each window with its icon */
  .page-title:has(> .page-ic) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .page-title > .page-ic {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }
  .page-title > .page-ic .i {
    width: 23px;
    height: 23px;
  }
  .sheet-head h3:has(> .sh-ic) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sh-ic {
    flex: none;
    width: 30px;
    height: 30px;
    padding: 6px;
    border-radius: 9px;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink, var(--rv-accent));
  }
  .text-btn:has(> .i) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .text-btn > .i {
    width: 16px;
    height: 16px;
    flex: none;
  }
  .pick > .i + span {
    min-width: 0;
  }
  /* every card with a heading folds (a tap on it, the arrow at the end); each field of choices of a window too */
  .panel.dobra > .fold-head,
  .sheet .field.dobravel > .flabel {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .panel.dobra > .fold-head {
    position: relative;
    padding-right: 30px;
  }
  .sheet .field.dobravel > .flabel {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .panel.dobra > .fold-head::after,
  .sheet .field.dobravel > .flabel::after {
    content: "";
    flex: none;
    width: 20px;
    height: 20px;
    background: var(--rv-muted);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") center / 20px no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") center / 20px no-repeat;
    transition: transform 0.2s;
  }
  .panel.dobra > .fold-head::after {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -10px;
  }
  .sheet .field.dobravel > .flabel::after {
    margin-left: auto;
  }
  /* closed: what is chosen or written, after the title */
  .sheet .field > .flabel > .fl-val {
    display: none;
  }
  .sheet .field.dobravel.shut > .flabel > .fl-val {
    display: block;
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--rv-muted);
    font-weight: 500;
  }
  .panel.dobra.fechada > .fold-head::after,
  .sheet .field.dobravel.shut > .flabel::after {
    transform: rotate(-90deg);
  }
  .panel.dobra.fechada > :not(.fold-head),
  .sheet .field.dobravel.shut > :not(.flabel) {
    display: none !important;
  }
  .panel.dobra.fechada > .fold-head {
    margin-bottom: 0;
  }
  .panel.dobra.fechada > .mais-head {
    padding-bottom: 16px;
  }
  .panel.dobra > .fold-head:focus-visible,
  .sheet .field.dobravel > .flabel:focus-visible {
    outline: 2px solid var(--rv-accent);
    outline-offset: 2px;
    border-radius: 10px;
  }
  /* inside a box of sub-options, the choices two by row, as everywhere */
  .sub-box .chip-row:not(.care-pick):not(.quem) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 7em), 1fr));
    gap: 8px;
  }
  .sub-box .chip-row .pick {
    justify-content: center;
    min-width: 0;
  }
  @media (max-width: 420px) {
    .sub-box .seg button > .i {
      display: none;
    }
  }
  /* the buttons of the Agora (Tomei, Paguei, Feito, Entregue), the camera and the toast with their icons */
  .dose-btn,
  .cam-done,
  .toast button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .dose-btn > .i,
  .cam-done > .i,
  .toast button > .i {
    width: 16px;
    height: 16px;
    flex: none;
  }
`;var Wa=class{constructor(e,t){this.url=e,this.onStatus=t,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let e=new WebSocket(this.url);this.ws=e,e.onopen=()=>{this.open=!0,this.backoff=1e3;let t=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))e.send(a);if(this.onStatus&&this.onStatus(!0),t)for(let a of this.reconnectHandlers)a()},e.onmessage=t=>{let a;try{a=JSON.parse(t.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},e.onclose=()=>{let t=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),t&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(e){this.reconnectHandlers.push(e)}_send(e){let t=JSON.stringify(e);this.open?this.ws.send(t):this.queue.push(t)}sendMessagePromise(e){let t=this.nextId++;return new Promise((a,s)=>{this.pending.set(t,{resolve:a,reject:s}),this._send({...e,id:t})})}subscribeMessage(e,t){let a={cb:e,msg:t,id:null,first:null};this.subs.add(a);let s=new Promise((i,r)=>{a.first={resolve:i,reject:r}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(e){let t=this.nextId++;e.id=t,this.byId.set(t,e),this.pending.set(t,{resolve:()=>{e.first&&e.first.resolve(),e.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(t),this.subs.delete(e),e.first&&e.first.reject(a),e.first=null)}}),this.ws.send(JSON.stringify({...e.msg,id:t}))}};function Gt(){try{if(window.parent===window)return null;let o=window.parent.document.querySelector("home-assistant");return o&&o.hass||null}catch{return null}}var qi=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function Fi(){let o=Gt();return o&&o.themes&&typeof o.themes.darkMode=="boolean"?o.themes.darkMode:!!(qi&&qi.matches)}function Ni(){return{topbar:!(window.parent!==window),haptic(e){try{let t=window.parent;t!==window&&t.dispatchEvent(new t.CustomEvent("haptic",{detail:e}))}catch{}},openInHA(e){try{let t=window.parent;if(t!==window&&t.document){t.history.pushState(null,"",e),t.dispatchEvent(new t.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(e,"_top")}}}var Zt=class{constructor(){let e=new URL("ws",location.href);e.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new Wa(e.href,t=>this.statusHandlers.forEach(a=>a(t)))}onStatus(e){this.statusHandlers.push(e)}onReconnect(e){this.conn.onReconnect(e)}call(e,t={}){return this.conn.sendMessagePromise({type:e,...t})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(e){return this.conn.subscribeMessage(e,{type:"cronologia/subscribe_calendars"})}subscribePrefs(e){return this.conn.subscribeMessage(e,{type:"cronologia/prefs/subscribe"})}subscribeEvents(e,t,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:e,start:t,end:a})}listEvents(e,t,a){return this.call("cronologia/events/list",{entity_id:e,start:t,end:a})}createEvent(e,t){return this.call("calendar/event/create",{entity_id:e,event:t})}updateEvent(e,t,a,{recurrenceId:s,range:i}={}){let r={entity_id:e,uid:t,event:a};return s&&(r.recurrence_id=s),i&&(r.recurrence_range=i),this.call("calendar/event/update",r)}deleteEvent(e,t,{recurrenceId:a,range:s}={}){let i={entity_id:e,uid:t};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(e,t){return this.call("cronologia/prefs/set_calendar",{entity_id:e,prefs:t})}setAppPrefs(e){return this.call("cronologia/prefs/set_app",{prefs:e})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(e){return this.conn.subscribeMessage(e,{type:"cronologia/home/subscribe"})}skipCheck(e){return this.call("cronologia/check/set",{key:e,done:!0,kind:"rotina",skip:!0})}setCheck(e,t,a,s){return this.call("cronologia/check/set",{key:e,done:t,kind:a,...s?{who:s}:{}})}maintDone(e,t,a){return this.call("cronologia/maint/done",{entity_id:e,uid:t,...a?{who:a}:{}})}toTomorrow(e,t){return this.call("cronologia/event/tomorrow",{entity_id:e,uid:t})}maintSkip(e,t){return this.call("cronologia/maint/skip",{entity_id:e,uid:t})}scoreReassign(e,t){return this.call("cronologia/score/reassign",{key:e,who:t})}scoreExtra(e,t,a){return this.call("cronologia/score/extra",{who:e,points:t,title:a})}scoreDemerit(e,t){return this.call("cronologia/score/demerit",{demerit:e,who:t})}scoreRemove(e){return this.call("cronologia/score/remove",{key:e})}scoreLog(e,t,a,s){return this.call("cronologia/score/log",{before:e,limit:t,...a?{from:a,to:s}:{}})}scoreRestore(e){return this.call("cronologia/score/restore",{key:e})}scorePrizes(e,t,a){return this.call("cronologia/score/prizes",{period:e,shared:t,per:a})}scoreReward(e,t){return this.call("cronologia/score/reward",{period:e,text:t})}scoreDelivered(e,t){return this.call("cronologia/score/delivered",{period:e,delivered:t})}maintUndo(e,t){return this.call("cronologia/maint/undo",{entity_id:e,uid:t})}payBill(e,t){return this.call("cronologia/contas/pagar",{conta:e,...t?{valor:t}:{}})}unpayBill(e){return this.call("cronologia/contas/desfazer",{conta:e})}newBill(e){return this.call("cronologia/contas/nova",{conta:e})}dataUrl(e){return new URL(`api/export/${e}`,location.href).href}async importData(e){let t=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(e.name||"")},body:e}),a=await t.json().catch(()=>({}));if(!t.ok)throw new Error(a.error||`Erro ${t.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(e){return this.call("cronologia/versions/restore",{name:e})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(e){return this.call("cronologia/backups/restore",{name:e})}resetData(){return this.call("cronologia/data/reset")}addTodo(e,t){return this.call("cronologia/todo/add",{entity_id:e,task:t})}memoriaNow(e=!1,t=new Date){let a=s=>String(s).padStart(2,"0");return this.call("cronologia/memoria/agora",{fresh:e,hora:`${a(t.getHours())}:${a(t.getMinutes())}`,dia:`${t.getFullYear()}-${a(t.getMonth()+1)}-${a(t.getDate())}`})}aiUsage(){return this.call("cronologia/ai/usage")}bringPreview(e){return this.call("cronologia/todo/bring_preview",{entity_id:e})}bring(e,t,a,s=!0){return this.call("cronologia/todo/bring",{entity_id:e,calendar:t,uids:a,remove:s})}setTodo(e,t,a,s=""){return this.call("cronologia/todo/set",{entity_id:e,uid:t,done:a,who:s})}testAlert(e){return this.call("cronologia/notify/test",{person:e})}testScoreReminder(){return this.call("cronologia/score/remind_test",{})}exportUrl({calendars:e,start:t,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",e.join(",")),s.searchParams.set("start",t),s.searchParams.set("end",a),s.href}voiceStatus(e=!1){return this.call("cronologia/voice/status",e?{fresh:!0}:{})}async voiceText(e){let t=await fetch(new URL("api/voice",location.href),{method:"POST",headers:{"content-type":"application/octet-stream"},body:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}async chat(e){let t=await fetch(new URL("api/chat",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}async extract(e){let t=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}};var Ja={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos",period:"Per\xEDodo",after:"Volta",history:"Feito em",room:"C\xF4modo",equip:"Equipamento"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos",room:"C\xF4modo",equip:"Equipamento"}}},Br={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},_t={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},C=o=>String(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),ea=o=>String(o).padStart(2,"0"),Yr=o=>`${o.getFullYear()}-${ea(o.getMonth()+1)}-${ea(o.getDate())}`;var ji=(o,e)=>`${o}|${e.uid||e.summary}|${e.recurrence_id||e.start}`;function aa(o){let e=String(o||"").replace(/[^\d.,-]/g,"");if(!e)return null;e.includes(",")?e=e.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(e)&&!/\.\d{1,2}$/.test(e)&&(e=e.replace(/\./g,""));let t=Number(e);return Number.isFinite(t)&&t>0?Math.round(t*100)/100:null}var Le=(o,e=!0)=>o==null?"":o.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:e?2:0,maximumFractionDigits:e?2:0});function Pi(o){let e=/(\d+)\s*([a-zçê]+)/i.exec(C(o));if(!e)return null;let t=Math.max(1,Math.min(999,Number(e[1]))),a=e[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:t,unit:s}:null}var Ze=["away","search","meds","bills","gavisos","now","day","memoria","home","todos"],Qa={now:"day"};function Vi(o){let e=(Array.isArray(o)?o:[]).filter((t,a,s)=>Ze.includes(t)&&s.indexOf(t)===a);for(let t of Ze){if(e.includes(t))continue;if(Qa[t]&&e.includes(Qa[t])){e.splice(e.indexOf(Qa[t]),0,t);continue}let a=Ze.slice(0,Ze.indexOf(t)).reverse().find(s=>e.includes(s));e.splice(a?e.indexOf(a)+1:0,0,t)}return e}var ze=[{id:"manha",label:"Manh\xE3",when:"de manh\xE3",icon:"sunrise",from:5,at:"09:00"},{id:"tarde",label:"Tarde",when:"\xE0 tarde",icon:"sun",from:12,at:"14:00"},{id:"noite",label:"Noite",when:"\xE0 noite",icon:"moon",from:18,at:"20:00"}],ge=o=>ze.find(e=>e.id===o)||null,Wr=o=>{let e=C(o);return e.startsWith("manh")?"manha":e.startsWith("tard")?"tarde":e.startsWith("noit")?"noite":""},Ge=o=>o>=18||o<5?"noite":o>=12?"tarde":"manha";function ta(o,e=new Date){if(!o)return 2;let t=e.getHours(),a=Ge(t);if(o===a)return 0;let s=i=>ze.findIndex(r=>r.id===i);return t>=5&&s(o)<s(a)?1+s(o)/10:3+s(o)}var Ui=(o,e=new Date)=>ta(o,e)>0&&ta(o,e)<2,ce=o=>o?`${o.n} ${o.n===1?_t[o.unit][1]:_t[o.unit][2]}`:"";function Ka(o,e,t=1){let a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),s=e.n*t;if(e.unit==="dias")a.setDate(a.getDate()+s);else if(e.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=e.unit==="anos"?12*s:s,r=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let l=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(r,l))}return a}var Qr=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Ii(o){let e=[];for(let t of String(o||"").matchAll(Qr))e.push(`${t[3]}-${ea(+t[2])}-${ea(+t[1])}`);return e}var Ri=o=>o.map(e=>`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`).join(", "),Hi=o=>{let e=/(\d+)/.exec(String(o||""));return e?Math.min(1e3,Number(e[1])):0};function Bi(o){let e=String(o||"").replace(/\r/g,"").split(`
`),t=0;for(;t<e.length&&!e[t].trim();)t++;let a=/^#\s*([a-z]+)\b/.exec(C(e[t])),s=a&&Br[a[1]];if(!s)return null;let i=Object.entries(Ja[s].fields).map(([d,c])=>[d,C(c)]),r={};for(t++;t<e.length;t++){let d=/^([^:]{2,24}):\s*(.*)$/.exec(e[t]);if(!d)break;let c=C(d[1]),h=i.find(([,p])=>p===c||`${p}s`===c||p.startsWith("aviso")&&c.startsWith("aviso"));if(!h)break;r[h[0]]=d[2].trim()}let l={kind:s,notes:e.slice(t).join(`
`).trim()};if(s==="remedio")l.dose=r.dose||"",l.who=r.who||"",l.alert=!/^(nao|desligado|off)/.test(C(r.alert));else if(s==="conta")l.value=aa(r.value);else if(s==="rotina")l.who=r.who||"",l.points=Hi(r.points),l.period=Wr(r.period),l.after=r.after?Pi(r.after):null,l.after&&(l.history=Ii(r.history)),l.rooms=Xt(r.room),l.equips=Xt(r.equip),l.room=l.rooms[0]||"",l.equip=l.equips[0]||"";else{l.who=r.who||"",l.every=Pi(r.every)||{n:6,unit:"meses"};let d=/(\d+)/.exec(r.warn||"");l.warn=d?Math.min(365,Number(d[1])):7,l.history=Ii(r.history),l.points=Hi(r.points),l.rooms=Xt(r.room),l.equips=Xt(r.equip),l.room=l.rooms[0]||"",l.equip=l.equips[0]||""}return l}function Xt(o){let e=[];for(let t of String(o||"").split(";")){let a=t.trim();a&&!e.some(s=>C(s)===C(a))&&e.push(a)}return e.slice(0,10)}function de(o,e){let t=Array.isArray(o)?o.map(a=>String(a||"").trim()).filter(Boolean):[];return t.length?t:e&&String(e).trim()?[String(e).trim()]:[]}function Li(o,e,t){let a=de(t.rooms,t.room).map(i=>i.replace(/;/g,",")),s=de(t.equips,t.equip).map(i=>i.replace(/;/g,","));o(a.length>1?`${e.room}s`:e.room,a.join("; ")),o(s.length>1?`${e.equip}s`:e.equip,s.join("; "))}function Yi(o){let e=[Ja[o.kind].tag],t=(i,r)=>{r!=null&&String(r).trim()&&e.push(`${i}: ${String(r).replace(/\s*\n\s*/g," ").trim()}`)},a=Ja[o.kind].fields;o.kind==="remedio"?(t(a.dose,o.dose),t(a.who,o.who),o.alert===!1&&t(a.alert,"n\xE3o")):o.kind==="conta"?t(a.value,o.value!=null?Le(o.value):""):o.kind==="rotina"?(t(a.who,o.who),o.points>0&&t(a.points,o.points),ge(o.period)&&t(a.period,ge(o.period).label),o.after&&o.after.n>0&&(t(a.after,`${ce(o.after)} depois de feita`),t(a.history,Ri((o.history||[]).slice(0,8)))),Li(t,a,o)):(t(a.who,o.who),t(a.every,ce(o.every)),t(a.warn,`${o.warn??7} ${(o.warn??7)===1?"dia":"dias"} antes`),t(a.history,Ri((o.history||[]).slice(0,8))),o.points>0&&t(a.points,o.points),Li(t,a,o));let s=String(o.notes||"").trim();return s?`${e.join(`
`)}
${s}`:e.join(`
`)}var Jr=/^todo\.[a-z0-9_]+$/;function Wi(o){let e=t=>Jr.test(t||"")?t:null;return!o||typeof o!="object"?{maint_list:null,routine_list:null}:"maint_list"in o||"routine_list"in o?{maint_list:e(o.maint_list),routine_list:e(o.routine_list)}:{maint_list:o.maint?e(o.list):null,routine_list:o.routine?e(o.list):null}}function Qi(o,e){if(!e||e.kind!=="rotina"||!e.after||o.rrule)return"";let t=(e.history||[])[0]||"",a=/^\d{4}-\d{2}-\d{2}$/.test(o.start||"")?o.start:Yr(new Date(o.start));return t&&t>=a?t:""}var Ji=4,Kr=300*1e3;function sa(o,e){let t=Fa(e.start),a=Fa(e.end),s=e.all_day!=null?!!e.all_day:/^\d{4}-\d{2}-\d{2}$/.test(e.start);return{key:ji(o,e),kind:Bi(e.description),cal:o,uid:e.uid||null,rid:e.recurrence_id||null,rrule:e.rrule||null,summary:e.summary||"(sem t\xEDtulo)",description:e.description||"",location:e.location||"",allDay:s,start:t,end:a>t?a:z(t,s?1:0),raw:e}}var ia=class{constructor(e,t){this.api=e,this.onChange=t,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(e){let t=[...new Set(e)].sort();if(t.join()!==this.calendars.join()){this.calendars=t;for(let a of this.windows)this._syncWindow(a)}}ensure(e,t){let a=this._covering(e,t);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:z(R(e),-7),end:z(R(t),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(e,t,a=this.calendars){let s=this._covering(e,t),i=[];if(!s)return i;for(let r of a){let l=s.cals.get(r);if(l)for(let d of l.events)d.start<t&&d.end>e&&i.push(d)}return i.sort((r,l)=>r.start-l.start||Number(l.allDay)-Number(r.allDay)||r.summary.localeCompare(l.summary,"pt-BR"))}loading(e,t){let a=this._covering(e,t);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let e=new Map;for(let t of this.windows)for(let[a,s]of t.cals)s.error&&e.set(a,s.error);return e}refresh(e){for(let t of this.windows){let a=t.cals.get(e);a&&a.poll&&this._fetch(t,e,a)}}reloadAll(){for(let e of this.windows)for(let[t,a]of e.cals)a.poll&&this._fetch(e,t,a)}dispose(){for(let e of this.windows)for(let[t]of e.cals)this._drop(e,t);this.windows=[]}_covering(e,t){let a=null;for(let s of this.windows)s.start<=e&&s.end>=t&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(e){for(let t of this.calendars)e.cals.has(t)||this._add(e,t);for(let t of[...e.cals.keys()])this.calendars.includes(t)||this._drop(e,t)}_add(e,t){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};e.cals.set(t,a);let s=fe(e.start),i=fe(e.end);if(this.noSubscribe)return this._startPolling(e,t,a);a.unsub=this.api.subscribeEvents(t,s,i,r=>{e.cals.has(t)&&(r&&Array.isArray(r.events)?(a.events=r.events.map(l=>sa(t,l)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(r=>r&&r.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(e,t,a)):(a.loaded=!0,a.error=r&&r.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(e,t,a){return this._fetch(e,t,a),a.poll=setInterval(()=>this._fetch(e,t,a),Kr),null}async _fetch(e,t,a){try{let s=await this.api.listEvents(t,fe(e.start),fe(e.end));if(!e.cals.has(t))return;a.events=(s.events||[]).map(i=>sa(t,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(e,t){let a=e.cals.get(t);a&&(e.cals.delete(t),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=Ji)){this.windows.sort((e,t)=>t.used-e.used);for(let e of this.windows.splice(Ji))for(let[t]of e.cals)this._drop(e,t)}}};function Oe(o,e){let t=R(e),a=z(t,1);return o.filter(s=>s.start<a&&s.end>t).map(s=>oa(s,t))}function Zr(o){return o.kind||o.todo||o.gerencia||o.movedDone?!1:(o.allDay?z(R(o.end),-1):R(new Date(o.end.getTime()-1)))>R(o.start)&&(o.allDay||o.end-o.start>=864e5)}function oa(o,e){if(!Zr(o))return o;let t=O(e);return{...o,key:`${o.key}|${t}`,day:t}}function Ki(o,e){let t=R(e).getTime(),a=t+864e5,s=o.filter(c=>!c.allDay).map(c=>({e:c,s:Math.max(c.start.getTime(),t),t:Math.min(Math.max(c.end.getTime(),c.start.getTime()+30*6e4),a)})).sort((c,h)=>c.s-h.s||h.t-c.t),i=[],r=[],l=-1,d=()=>{let c=[];for(let h of r){let p=c.findIndex(u=>u<=h.s);p<0?(p=c.length,c.push(h.t)):c[p]=h.t,h.lane=p}for(let h of r)i.push({...h,lanes:c.length});r=[]};for(let c of s)r.length&&c.s>=l&&d(),r.push(c),l=Math.max(l,c.t);return r.length&&d(),i.map(c=>({event:c.e,top:(c.s-t)/36e5,height:(c.t-c.s)/36e5,lane:c.lane,lanes:c.lanes}))}var Za=o=>o.replace(/\\([nN,;\\])/g,(e,t)=>t==="n"||t==="N"?`
`:t);function Gr(o){return o.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Xr(o){let e=-1,t=!1;for(let d=0;d<o.length;d++)if(o[d]==='"')t=!t;else if(o[d]===":"&&!t){e=d;break}if(e<0)return null;let a=o.slice(0,e),s=o.slice(e+1),[i,...r]=a.split(";"),l={};for(let d of r){let[c,h]=d.split("=");c&&(l[c.toUpperCase()]=(h||"").replace(/^"|"$/g,""))}return{name:i.toUpperCase(),params:l,value:s}}function Zi(o,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(t.formatToParts(new Date(e)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-e}catch{return null}}function Gi(o){let e=o.value.trim(),t=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(e);if(!t)return null;let[,a,s,i,r,l,d,c]=t;if(r==null||o.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(c)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+r,+l,+(d||0)))};let h=o.params.TZID;if(h){let p=Date.UTC(+a,+s-1,+i,+r,+l,+(d||0)),u=Zi(h,p);if(u!=null){let f=p-u,x=Zi(h,f);return{allDay:!1,date:new Date(p-(x??u))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+r,+l,+(d||0))}}function en(o){let e=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(o.trim());if(!e)return null;let[,t,a,s,i,r,l]=e,d=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+r||0)*60+(+l||0))*1e3;return t==="-"?-d:d}function Xi(o){let e=[],t=null,a=0;for(let i of Gr(o)){if(/^BEGIN:VEVENT/i.test(i)){t={},a=0;continue}if(!t)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){e.push(t),t=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let r=Xr(i);r&&(r.name==="SUMMARY"?t.summary=Za(r.value):r.name==="DESCRIPTION"?t.description=Za(r.value):r.name==="LOCATION"?t.location=Za(r.value):r.name==="DTSTART"?t.dtstart=Gi(r):r.name==="DTEND"?t.dtend=Gi(r):r.name==="DURATION"?t.duration=en(r.value):r.name==="RRULE"?t.rrule=r.value.trim():r.name==="STATUS"?t.status=r.value.trim().toUpperCase():r.name==="RECURRENCE-ID"&&(t.recurrence=!0))}let s=[];for(let i of e){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let r=i.dtstart.date,l=i.dtend?i.dtend.date:i.duration!=null?new Date(r.getTime()+i.duration):null,d=i.dtstart.allDay,c={title:(i.summary||"").trim()||"Evento",date:O(r),start:d?"":W(r),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(d){if(l){let h=new Date(l.getFullYear(),l.getMonth(),l.getDate()-1);h>r&&(c.end_date=O(h))}}else l&&l>r&&(c.end=W(l),O(l)!==O(r)&&(c.end_date=O(l)));s.push(c)}return s}var rt=class{constructor(e){this.onLevel=e,this.chunks=[],this.length=0,this.rate=16e3}async start(){let e=navigator.mediaDevices;if(!e||!e.getUserMedia)throw Object.assign(new Error("no_api"),{name:"NoApi"});this.stream=await e.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});let t=window.AudioContext||window.webkitAudioContext;try{this.ctx=new t({sampleRate:16e3})}catch{this.ctx=new t}this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{}),this.rate=this.ctx.sampleRate,this.src=this.ctx.createMediaStreamSource(this.stream),this.node=this.ctx.createScriptProcessor(4096,1,1),this.node.onaudioprocess=a=>{let s=a.inputBuffer.getChannelData(0);this.chunks.push(new Float32Array(s)),this.length+=s.length;let i=0;for(let r=0;r<s.length;r+=4)i+=s[r]*s[r];this.onLevel&&this.onLevel(Math.min(1,Math.sqrt(i/(s.length/4))*5))},this.src.connect(this.node),this.node.connect(this.ctx.destination)}seconds(){return this.length/this.rate}stop(){this._close();let e=new Float32Array(this.length),t=0;for(let r of this.chunks)e.set(r,t),t+=r.length;this.chunks=[];let a=this.rate/16e3,s=Math.floor(e.length/a),i=new Int16Array(s);for(let r=0;r<s;r++){let l=Math.floor(r*a),d=Math.max(l+1,Math.min(e.length,Math.floor((r+1)*a))),c=0;for(let p=l;p<d;p++)c+=e[p];let h=Math.max(-1,Math.min(1,c/(d-l)));i[r]=h<0?h*32768:h*32767}return i}cancel(){this._close(),this.chunks=[],this.length=0}_close(){try{this.node&&(this.node.onaudioprocess=null),this.src&&this.src.disconnect(),this.node&&this.node.disconnect()}catch{}if(this.stream)for(let e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.state!=="closed"&&this.ctx.close().catch(()=>{}),this.stream=null,this.node=null,this.src=null}};function ra(o){let e=o&&o.name||"";return e==="NotAllowedError"||e==="SecurityError"?"O microfone est\xE1 bloqueado. Permita o microfone para o Home Assistant (no navegador, no cadeado ao lado do endere\xE7o; no app do celular, nas permiss\xF5es do app Home Assistant) e tente de novo.":e==="NotFoundError"||e==="OverconstrainedError"?"N\xE3o achei um microfone neste aparelho.":e==="NotReadableError"?"O microfone est\xE1 sendo usado por outro app. Feche o outro e tente de novo.":e==="NoApi"?window.isSecureContext===!1?"O microfone aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), o celular e o navegador n\xE3o deixam usar o microfone, nem pelo app do Home Assistant.":"Este navegador n\xE3o deixa usar o microfone aqui.":`N\xE3o consegui abrir o microfone (${o&&o.message||e||"erro"}).`}var tn=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.package)}</svg>`,eo="Todos os c\xF4modos",an="V\xE1rios c\xF4modos",sn="V\xE1rios equipamentos";function to(o=[],e=[]){let t=new Set((o||[]).filter(Boolean));return(e||[]).length>1&&e.every(a=>t.has(a))}var kt=(o=[],e=[])=>to(o,e)?[eo]:(o||[]).filter(Boolean);function nt(o=[],e=[],t=[]){let a=(o||[]).filter(Boolean),s=(e||[]).filter(Boolean);if(!a.length&&!s.length)return m;let i=(l,d,c=d)=>n`<span class="tag room" title=${c}>${tn(l)}<span class="tt">${d}</span></span>`;if(s.length>1)return n`<span class="place-tags">${i("package",sn,s.join(", "))}</span>`;let r=to(a,t)?i("house",eo,a.join(", ")):a.length>1?i("door-open",an,a.join(", ")):a.length?i("door-open",a[0]):m;return n`<span class="place-tags">${r}${s.length?i("package",s[0]):m}</span>`}var on=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`;function Xe(o,e,t,a,s){if(!a)return m;let i=!!(o._folds&&o._folds[e]);return n`<button class="add-line done-fold off-fold" data-fold=${e} aria-expanded=${i?"true":"false"} @click=${()=>{o._folds={...o._folds||{},[e]:!i},o.requestUpdate()}}>${on(i?"chevron-down":"chevron-right")}<span>${t} (${a})</span></button>
    ${i?s():m}`}var S=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,Me={"":{label:"Evento",icon:"calendar"},evento:{label:"Evento",icon:"calendar",verb:"Feito",done:"feito"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},oo=["SU","MO","TU","WE","TH","FR","SA"],rn=["D","S","T","Q","Q","S","S"],nn=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],ln=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],cn=o=>o.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),na=o=>(o||"?").trim().charAt(0).toUpperCase(),ao=o=>o<60?`${o} min`:`${Math.floor(o/60)} h${o%60?` ${o%60} min`:""}`;function so(o,e,t){let a=K(q(o),e);return t?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function dn(o,e,t=!1){return o&&e&&C(o)===C(e)?"Tomei":t&&o?`${o} tomou`:"Tomado"}function pn(o,e){return o.days<-1?`venceu h\xE1 ${-o.days} dias`:o.days===-1?"venceu ontem":o.days===0?"\xE9 hoje":o.days===1?"amanh\xE3":o.days<=60?`em ${o.days} dias`:`em ${ee(q(o.due),e)}`}function hn(o,e){if(o.done)return`${o.done.skipped?"pulada":`feito por ${o.done.by||"algu\xE9m"}`} \xB7 volta ${o.next?J(q(o.next),e,{long:!1,cap:!1}):`em ${ce(o.after)}`}`;let t=ge(o.period);return[o.late>0?o.late===1?"venceu ontem":`atrasada h\xE1 ${o.late} dias`:o.time||(t?t.when:"hoje"),o.who,`volta ${ce(o.after)} depois`].filter(Boolean).join(" \xB7 ")}function Ga(o,e){if(o.after)return hn(o,e);let t=ge(o.period);return[o.yesterday?"ficou de ontem":o.time||(t&&!o.done?t.when:""),o.done?o.done.skipped?"pulada":`feito${o.done.by?` por ${o.done.by}`:""}`:o.who].filter(Boolean).join(" \xB7 ")||"hoje"}var un=o=>o.period||(o.time?Ge(Number(String(o.time).slice(0,2))):""),Xa=(o,e)=>!o.done&&(o.late>0||!!o.period&&Ui(o.period,e)),At=(o,e,t=un)=>o.map((a,s)=>[ta(t(a),e),s,a]).sort((a,s)=>a[0]-s[0]||a[1]-s[1]).map(a=>a[2]);function io(o,e){let t=Object.fromEntries(String(o||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(r=>r.split("="))),a={freq:"uma",byday:[e.getDay()],interval:3,dur:"sempre",until:O(z(e,30)),days:7},s=Number(t.INTERVAL||1);t.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):t.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:t.BYDAY?t.BYDAY.split(",").map(r=>oo.indexOf(r.slice(-2))).filter(r=>r>=0):[e.getDay()]}):t.FREQ==="MONTHLY"?a.freq="mensal":t.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(t.UNTIL||"");if(i){let r=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:O(r)})}return a}var ro=o=>class extends o{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_afterDoneOn(e){return e&&e.kind&&e.raw&&e.raw.start?Qi(e.raw,e.kind):""}_afterDone(e){let t=this._afterDoneOn(e);if(!t)return null;let a=this._ix().routines||[],s=a.find(i=>i.cal===e.cal&&i.uid===e.uid&&i.done)||a.find(i=>i.cal===e.cal&&i.summary===e.summary&&i.done);return s?{chk:s.done,key:s.key}:{chk:{at:null,by:"",day:t},key:null}}_checkOf(e){if(e.gerencia)return e.gerencia.pago?{at:null,by:""}:null;if(e.todo)return e.todo.done?{at:null,by:""}:null;let t=this._ix().checks[e.key];if(t)return t;let a=this._afterDone(e);return a?a.chk:null}_careOn(){let e=this._ix().people||[];return((this._app("alerts",null)||{}).caregivers||[]).some(a=>e.some(s=>s.phone&&C(s.name)===C(a)))}_phoneOwner(e){let t=(this._ix().people||[]).find(a=>C(a.name)===C(e));return t&&t.reach?t.phone?t.name:t.care:""}_gerenciaEvents(e,t){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=q(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:z(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<t&&s.end>e))}_movedDoneEvents(e,t){let a=this._ix(),s=O(new Date(this._now)),i=[];for(let[r,l]of Object.entries(a.checks||{})){let d=l&&l.moved;if(!d||!d.day)continue;let c=l.skipped&&d.start?/T/.test(d.start)?O(new Date(d.start)):String(d.start).slice(0,10):d.day,h=q(c);if(!(h<t&&z(h,1)>e))continue;let p=d.day===s?(a.routines||[]).find(M=>M.key===r):null,u=p&&p.summary||d.summary;if(!u)continue;let f=h,x=z(h,1),y=!0;if(/T/.test(d.start||"")){let M=new Date(d.start),D=new Date(d.end||d.start);f=new Date(h.getFullYear(),h.getMonth(),h.getDate(),M.getHours(),M.getMinutes()),x=new Date(f.getTime()+Math.max(15*6e4,D-M||0)),y=!1}i.push({key:r,cal:d.cal,uid:null,rid:null,rrule:null,summary:u,description:"",location:"",allDay:y,start:f,end:x,raw:{},kind:{kind:"rotina",points:p&&p.points||0,who:p&&p.who||""},movedDone:{item:p,by:l.by||"",day:c}})}return i}_billsList(){let e=this._ix(),t=R(new Date(this._now)),a=O(t),s=O(z(t,8)),i=O(z(t,-1)),r=[];for(let l of e.gerencia&&e.gerencia.contas||[]){let d=!l.pago,c=this._paidNow&&this._paidNow.has(l.id);(d?!(l.atrasada||l.vencimento<=s):!c&&!(l.vencimento>=i&&l.vencimento<=s))||r.push({id:l.id,source:"gerencia",title:l.descricao,value:l.valor,due:l.vencimento,paid:!!l.pago,overdue:d&&(l.atrasada||l.vencimento<a),sub:l.tipo==="fatura"?P(l.itens||0,"compra","compras"):l.categoria||"",c:l})}for(let l of e.bills||[]){let d=this._cal(l.cal);r.push({id:l.key,source:"cal",title:l.summary,value:l.value,due:l.due,paid:!!l.paid,overdue:l.overdue,sub:d?d.name:"",item:l})}return r.sort((l,d)=>Number(l.paid)-Number(d.paid)||l.due.localeCompare(d.due)||l.title.localeCompare(d.title,"pt-BR"))}_eventOfItem(e){return sa(e.cal,{start:e.start,end:e.end,summary:e.summary,description:e.description,location:e.location,uid:e.uid,recurrence_id:e.rid,rrule:e.rrule})}_openIndexItem(e){this._openEvent(this._eventOfItem(e))}async _check(e,t){t==="remedio"&&(this._medsHold=!0);try{await this.api.setCheck(e.key,!0,t),this._haptic("success");let a=Me[t];this._showToast(`${N(e.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _skip(e,t="rotina"){try{let a=await this.api.skipCheck(e.key);this._haptic("light");let s=a&&a.next?J(q(a.next),new Date(this._now),{long:!1,cap:!1}):"";this._showToast(`${N(e.summary,24)}: ${t==="remedio"?"pulado":"pulada"}${s?`, volta ${s}`:""}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _toTomorrow(e){this._sheet&&await this._closeSheet();try{let t=await this.api.toTomorrow(e.cal,e.uid);this._haptic("light"),this._showToast(`${N(e.summary,24)}: fica para amanh\xE3`,t&&t.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(a=>this._showToast(a.message))}:null)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _undoCheck(e,t){try{await this.api.setCheck(e.key,!1,t),this._haptic("light"),this._showToast(`${N(e.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(e.key,!0,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(e){if(e.source==="cal")return this._check(e.item,"conta");try{e.busy=!0,this.requestUpdate(),await this.api.payBill(e.id),(this._paidNow||(this._paidNow=new Set)).add(e.id),this._haptic("success"),this._showToast(`${N(e.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(e.id).catch(t=>this._showToast(t.message))})}catch(t){this._showToast(`O GerencIA n\xE3o deu baixa: ${t.message}`)}}async _unpay(e){if(e.source==="cal")return this._undoCheck(e.item,"conta");try{await this.api.unpayBill(e.id),this._showToast(`${N(e.title,26)}: volta para a pagar`)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _testAlert(e,t=!1){try{await this.api.testAlert(e),this._showToast(`Aviso de teste enviado para ${t?"o seu celular":`o celular de ${this._phoneOwner(e)||e}`}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(a){this._showToast(`N\xE3o foi: ${a.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#avisos");e&&e.scrollIntoView({block:"start"})}))}_ring(e,t,a=null,s=null){let r=2*Math.PI*15,l=Math.max(0,Math.min(1,e||0));return n`<span class="ring2 ${t}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${l>0?tt`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(l*r).toFixed(2)} ${r.toFixed(2)}`}></circle>`:m}
        </svg>
        ${a!=null?n`<b>${a}</b>`:s||m}
      </span>`}_kindIcon(e){let t=Me[e.kind?e.kind.kind:""]||Me[""];return n`<span class="kind-ic">${S(t.icon)}</span>`}_renderMedsPanel(){let e=this._ix().meds||[];if(!e.length)return m;let t=e.filter(f=>f.state!=="pulado"),a=t.filter(f=>f.taken).length,s=e.filter(f=>f.state==="atrasado"),i=[];for(let f of e){let x=f.who||"",y=i.find(M=>C(M.who)===C(x));y||i.push(y={who:x,list:[],phone:!1}),y.list.push(f),f.alert&&f.phone&&(y.phone=!0)}let r=a===t.length,l=e.filter(f=>f.taken).length;!l&&this._medsDoneN&&(this._medsDoneOpen=!1),this._medsDoneN=l;let d=!!this._medsDoneOpen,c=f=>f.list.filter(x=>!x.taken),h=i.filter(f=>!c(f).length),p=f=>(this._ix().people||[]).some(x=>x.pet&&C(x.name)===C(f)),u=d?i:i.filter(f=>c(f).length);return n`<div class="panel meds ${s.length?"alert":""} ${r?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${S("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${r?a?"Tudo tomado":"Doses puladas":`${a} de ${t.length} ${t.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(t.length?a/t.length:1,s.length?"bad":r?"ok":"acc",`${a}/${t.length}`)}
        </div>
        ${s.length?n`<div class="meds-alert" role="alert">${S("triangle-alert")}<span>${s.length===1?n`<b>${s[0].summary}</b>${s[0].who?` de ${s[0].who}`:""} está atrasado ${ao(s[0].late_min)}`:n`<b>${s.length} doses atrasadas</b>: ${s.map(f=>f.summary).join(", ")}`}</span></div>`:m}
        ${u.map(f=>n`${i.length>1||f.who?n`<div class="meds-who"><span class="avatar">${p(f.who)?S("paw-print"):na(f.who)}</span><b>${f.who||"Sem pessoa"}</b>${f.list.some(x=>x.state!=="pulado")?n`<small>${f.list.filter(x=>x.state==="tomado").length} de ${f.list.filter(x=>x.state!=="pulado").length}</small>`:m}${f.phone?n`<span class="who-bell" title="Aviso no celular de ${this._phoneOwner(f.who)}">${S("bell-ring")}</span>`:m}</div>`:m}
            ${ae(d?f.list:c(f),x=>x.key,x=>this._renderDose(x))}`)}
        ${h.length&&!d?n`<div class="meds-ready">${h.map(f=>{let x=f.list.some(D=>D.state==="pulado"),y=f.list.some(D=>D.state==="tomado"),M=y&&!x?`${f.who?"tomou":"Tomados"} todos`:y?"em dia":"pulou";return n`<span class="ready-who ${y&&!x?"":"skipped"}">${f.who?n`<span class="avatar">${p(f.who)?S("paw-print"):na(f.who)}</span><b>${f.who}</b>`:m}<span>${M}</span>${S(y&&!x?"check":"skip-forward")}</span>`})}</div>`:m}
        ${l?n`<button class="add-line done-fold" aria-expanded=${d?"true":"false"} @click=${()=>(this._medsDoneOpen=!d,this.requestUpdate())}>
              ${S(d?"chevron-down":"chevron-right")}<span>Tomados (${l})</span>
            </button>`:m}
        ${this._alertsHint(e)}
      </div>`}_doseVerb(e,t=!1){return dn(e,this._me?this._me():"",t)}_renderDose(e){let t=e.state,a=[e.dose?`Dose: ${e.dose}`:"",t==="tomado"?`tomou \xE0s ${W(new Date(e.taken.at))}${e.taken.by&&C(e.taken.by)!==C(e.who)?` \xB7 ${e.taken.by}`:""}`:t==="pulado"?"pulado":t==="atrasado"?`atrasado ${ao(e.late_min)}`:t==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return n`<div class="dose ${t}">
        <button class="dose-main" @click=${()=>this._openIndexItem(e)}>
          <span class="dose-time">${e.time||"dia"}</span>
          <span class="dose-tx"><b>${e.summary}</b>${a?n`<small>${a}</small>`:m}</span>
        </button>
        ${t==="tomado"||t==="pulado"?n`<button class="dose-done ${t==="pulado"?"skipped":""}" @click=${()=>this._undoCheck(e,"remedio")} aria-label="Desmarcar ${e.summary}">${S(t==="pulado"?"skip-forward":"check")}</button>`:n`<button class="dose-btn ${t}" aria-label="${this._doseVerb(e.who,!0)}: ${e.summary}" @click=${()=>this._check(e,"remedio")}>${S("check")}${this._doseVerb(e.who)}</button>`}
      </div>`}_alertsHint(e){if((this._app("alerts",null)||{}).meds===!1||!e.some(d=>d.alert))return m;let a=[...new Set(e.filter(d=>d.alert&&!d.phone&&d.who).map(d=>d.who))],s=this._careOn(),i=[...new Set(e.filter(d=>d.alert&&d.phone).map(d=>this._phoneOwner(d.who)||d.who))];if(!(!s&&(a.length>0||!i.length)))return m;let l=a.length?`Sem celular para ${a.join(", ")}: escolha quem cuida`:"Escolha quem cuida";return n`<button class="panel-foot warn" @click=${()=>this._goAlerts()}>${S("bell-ring")}<span>${l}</span>${S("chevron-right")}</button>`}_renderBillsPanel(){let e=this._billsList();if(!e.length)return m;let t=new Date(this._now),a=e.filter(d=>!d.paid),s=a.filter(d=>d.overdue),i=a.reduce((d,c)=>d+(c.value||0),0),r=this._billsAll?e:e.slice(0,5),l=this._ix().gerencia||{};return n`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="sec-ic ${s.length?"late":"gold"}">${S("receipt")}</span>
          <span class="overline">Contas a pagar</span>
          ${a.length?n`<span class="bills-sum"><b>${Le(i,!1)}</b><small>${s.length?`${P(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:n`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${ae(r,d=>d.id,d=>{let c=q(d.due),h=K(c,t)===0;return n`<div class="bill ${d.paid?"paid":d.overdue?"late":h?"today":""}">
            <button class="bill-main" @click=${()=>d.source==="gerencia"?this._openSheet("bill",{b:d}):this._openIndexItem(d.item)}>
              <span class="bill-due"><b>${c.getDate()}</b><small>${Yt[c.getMonth()]}</small></span>
              <span class="bill-tx"><b>${d.title}</b><small>${d.value!=null?n`<span class="bill-val">${Le(d.value)}</span> · `:m}${[so(d.due,t,d.paid),d.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${d.paid?n`<button class="dose-done" @click=${()=>this._unpay(d)} aria-label="Desfazer pagamento de ${d.title}">${S("check")}</button>`:n`<button class="dose-btn ${d.overdue?"atrasado":h?"agora":""}" ?disabled=${d.busy} @click=${()=>this._pay(d)}>${S("check")}Paguei</button>`}
          </div>`})}
        ${e.length>5?n`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${S(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${e.length-5}`}</button>`:m}
        ${l.ligado?n`<div class="panel-foot plain">${S("wallet")}<span>${l.erro?`GerencIA: ${l.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:m}
      </div>`}_renderGerenciaAvisos(){let e=this._ix().gerencia||{},t=e.ligado&&!e.erro&&Array.isArray(e.avisos)?e.avisos:[];if(!t.length)return m;let a={email:"mail",whatsapp:"message-circle",senha:"lock",erro:"circle-alert",venceu:"triangle-alert",vence:"calendar",valores:"clock",indices:"trending-up",beneficio:"gift",beneficio_para:"triangle-alert"},s=["erro","venceu","beneficio_para"],i=r=>{let l=r.valor!=null?n`<span class="gav-n">${Le(r.valor,!1)}</span>`:r.dias!=null?n`<span class="gav-n late">${r.dias}<small>${r.dias===1?"dia":"dias"}</small></span>`:r.n?n`<span class="gav-n">${r.n}</span>`:m,d=n`<span class="bill-due gav-ic">${S(a[r.tipo]||"info")}</span><span class="bill-tx"><b>${r.titulo}</b><small>${r.texto}</small></span>${l}${e.painel?S("chevron-right","gav-chev"):m}`,c=`bill gav ${s.includes(r.tipo)?"alerta":""}`;return e.painel?n`<a class=${c} href=${e.painel+(r.caminho||"")} target="_top">${d}</a>`:n`<div class=${c}>${d}</div>`};return n`<div class="panel gavisos" id="gerencia-avisos">
        ${this._panelHead("triangle-alert","gold","Avisos do GerencIA",String(t.length))}
        ${ae(t,r=>r.id,i)}
      </div>`}_renderHomePanel(){if(this._awayNow&&this._awayNow())return m;let e=this._ix(),t=e.routines||[],a=t.length&&t.every(p=>p.done)&&!this._choresHold?[]:t,s=(e.maint||[]).filter(p=>p.state!=="ok"),i=(e.maint||[]).length;if(!a.length&&!s.length)return m;let r=a.filter(p=>p.done).length,l=new Date(this._now),d=At(a.filter(p=>!p.done),l),c=a.filter(p=>p.done),h=p=>n`<div class="chore ${p.done?"done":""} ${p.done&&p.done.skipped?"skipped":""}">
                  <button class="chk ${p.done?"on":""}" @click=${()=>p.done?this._undoCheck(p,"rotina"):this._markDone(p,"rotina")} aria-label="${p.done?"Desmarcar":"Marcar"} ${p.summary}">${p.done?S(p.done.skipped?"skip-forward":"check"):m}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(p)}><b>${p.summary}</b><small class=${Xa(p,l)?"late":""}>${!p.done&&this._pickWho()&&p.points>0?n`<span class="pts-inline">+${p.points}</span> · `:m}${Ga(p,l)}</small></button>
                  ${!p.done&&this._pickWho()?this._renderQuickWho(p.summary,p.points||0,u=>this._markDone(p,"rotina",u)):p.points>0&&this._scoreOn()?p.done?this._renderWon(this._pointsWho(p.key,p.done.by),p.points):n`<span class="pts">+${p.points}</span>`:m}
                </div>`;return n`<div class="panel chores" id="casa">
        ${a.length?n`${this._panelHead("spray-can","ok","Rotina da casa",`${r} de ${a.length}`)}
              ${ae(d,p=>p.key,h)}
              ${d.length?m:n`<p class="empty-line all-done">${S("circle-check")}Tudo feito hoje.</p>`}
              ${c.length?n`<button class="add-line done-fold" aria-expanded=${this._choresDoneOpen?"true":"false"} @click=${()=>(this._choresDoneOpen=!this._choresDoneOpen,this.requestUpdate())}>
                      ${S(this._choresDoneOpen?"chevron-down":"chevron-right")}<span>Concluídas (${c.length})</span>
                    </button>
                    ${this._choresDoneOpen?ae(c,p=>p.key,h):m}`:m}`:m}
        ${s.length?n`${this._panelHead("wrench","gold","Manuten\xE7\xE3o da casa","",{cls:a.length?"sub":""})}
              ${ae(s,p=>p.key,p=>this._renderMaintRow(p))}`:m}
        ${i?n`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${S("wrench")}Todas as manutenções (${i})</button>`:m}
      </div>`}_renderMaintRow(e){let t=new Date(this._now),a=e.state==="vencida"?"bad":e.state==="perto"?"warn":"ok";return n`<div class="maint ${e.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(e)}>
          ${this._ring(e.progress,a,null,S("wrench"))}
          <span class="maint-tx"><b>${e.summary}</b><small>${pn(e,t)} · a cada ${ce(e.every)}${e.who?` \xB7 ${e.who}`:""}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</small>${nt(de(e.rooms,e.room),de(e.equips,e.equip))}</span>
        </button>
        ${e.canMove?this._pickWho()?this._renderQuickWho(e.summary,e.points||0,s=>this._maintDone(e,s)):n`<button class="dose-btn ${e.state==="vencida"?"atrasado":e.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(e)}>${S("check")}Feito</button>`:m}
      </div>`}_renderMaintSheet(){let e=this._ix().maint||[];return n`${this._sheetHead("Manuten\xE7\xE3o da casa")}
                <div class="maint-list">${e.length?ae(e,t=>t.key,t=>this._renderMaintRow(t)):n`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${S("plus")}Nova manutenção</button></div>`}_catalogCount(){let e=new Set;for(let t of this._ix().catalog||[])e.add(t.kind==="remedio"?`${t.cal}|${C(t.summary)}|${C(t.who)}|${C(t.dose)}`:`${t.key}`);return e.size}_renderCatalog(){let e=new Date(this._now),t=this._ix().catalog||[],a=this._roomNamesAll(),s=(this._catQ||"").trim(),i=C(s),r=i?t.filter(g=>C(`${g.summary} ${g.who} ${g.dose} ${g.location} ${de(g.rooms,g.room).join(" ")} ${de(g.equips,g.equip).join(" ")}`).includes(i)):t,l=g=>g?g.charAt(0).toLowerCase()+g.slice(1):"",d=g=>/FREQ=DAILY/.test(g.rrule||"")&&!/INTERVAL=([2-9]|\d\d)/.test(g.rrule||""),c=g=>g.kind==="manutencao"?`a cada ${ce(g.every)}`:g.after?`volta ${ce(g.after)} depois de feita`:g.rrule?l(Ie(g.rrule)):"uma vez",h=this._awayNow()?this._away():null,p=g=>!!h&&(g.kind==="rotina"||g.kind==="manutencao")&&(g.late||g.next<=h.to),u=g=>{let $=K(q(g.next),e);if(p(g))return null;if(g.late||$<0){let b=g.kind==="rotina"?"atrasada":"venceu";return{text:$===-1?`${b} ontem`:`${b} h\xE1 ${-$} dias`,late:!0}}return d(g)&&$<=1?null:{text:`${g.kind==="conta"?"vence":(g.kind==="manutencao","pr\xF3xima")} ${J(q(g.next),e,{long:!1,cap:!1})}`}},f=g=>g.points>0&&this._scoreOn()?n`<span class="pts-inline">+${g.points}</span>`:"",x=[];for(let g of r.filter($=>$.kind==="remedio")){let $=`${g.cal}|${C(g.summary)}|${C(g.who)}|${C(g.dose)}`,_=x.find(b=>b.id===$);_?(g.time&&!_.times.includes(g.time)&&_.times.push(g.time),(g.next<_.first.next||g.next===_.first.next&&g.time<_.first.time)&&(_.first=g)):x.push({id:$,first:g,times:g.time?[g.time]:[]})}let y=(g,$,_=null,b=m)=>n`<button class="row cat-row" style=${B(this._colorOfEvent(g),this._dark)} @click=${()=>this._openIndexItem(g)}>
        <span class="tile" aria-hidden="true">${S(Me[g.kind].icon)}</span>
        <span class="grow"><div class="label">${g.summary}</div><div class="hint">${$}${_?n`${$?" \xB7 ":""}<span class=${_.late?"late":""}>${_.text}</span>`:m}</div>${b}</span>
        ${S("chevron-right")}
      </button>`,M=(g,$,_=m)=>{let b=$.filter(Boolean);return y(g,b.length?b.map((A,E)=>n`${E?" \xB7 ":""}${A}`):"",u(g),_)},D=[{kind:"rotina",ic:"spray-can",tone:"ok",title:"Rotina da casa",add:"Nova rotina",none:"Nenhuma rotina cadastrada."},{kind:"remedio",ic:"pill",tone:"accent",title:"Rem\xE9dios",add:"Novo rem\xE9dio",none:"Nenhum rem\xE9dio cadastrado."},{kind:"manutencao",ic:"wrench",tone:"gold",title:"Manuten\xE7\xE3o da casa",add:"Nova manuten\xE7\xE3o",none:"Nenhuma manuten\xE7\xE3o cadastrada."},{kind:"conta",ic:"receipt",tone:"violet",title:"Contas a pagar",add:"Nova conta",none:"Nenhuma conta cadastrada aqui."}],v=this._ix().gerencia||{},k=(g,$)=>g.kind==="remedio"?x.map(({first:_,times:b})=>{let A=[...b].sort();return y(_,[_.dose,_.who,A.length?A.join(", "):"",c(_),_.alert===!1?"sem aviso":""].filter(Boolean).join(" \xB7 "))}):g.kind==="rotina"?$.map(_=>M(_,[_.who,c(_),_.time||(ge(_.period)||{}).when,f(_)],nt(de(_.rooms,_.room),de(_.equips,_.equip),a))):g.kind==="manutencao"?$.map(_=>M(_,[c(_),_.who,f(_)],nt(de(_.rooms,_.room),de(_.equips,_.equip),a))):$.map(_=>M(_,[_.value!=null?Le(_.value):"",c(_)]));return n`
        <label class="search-box cat-search">
          ${S("search")}
          <input type="search" placeholder="Buscar nas rotinas, remédios…" .value=${s} @input=${g=>(this._catQ=g.target.value,this.requestUpdate())} enterkeyhint="search" aria-label="Buscar nos cadastros" />
          ${s?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>(this._catQ="",this.requestUpdate())} aria-label="Limpar">${S("x")}</button>`:m}
        </label>
        ${i&&!r.length?n`<div class="panel"><div class="empty"><div class="em-icon">${S("search")}</div><h3>Nada encontrado</h3><p>Nenhum cadastro com “${N(s,30)}”.</p></div></div>`:m}
        ${D.map(g=>{let $=r.filter(E=>E.kind===g.kind),_=$.filter(p),b=k(g,$.filter(E=>!p(E))),A=b.length+_.length;return i&&!A?m:n`<div class="panel cat-sec" id="cat-${g.kind}">
            ${this._panelHead(g.ic,g.tone,g.title,A?String(A):"")}
            ${b.length?b:_.length?m:n`<p class="empty-line">${g.none}</p>`}
            ${Xe(this,`cat-${g.kind}`,"Pausadas",_.length,()=>k(g,_))}
            ${g.kind==="conta"&&v.ligado?n`<p class="cat-note">${S("info")}As contas do GerencIA ficam no GerencIA.</p>`:m}
            ${i?m:n`<button class="add-line" @click=${()=>this._openKindForm({kind:g.kind})}>${S("plus")}${g.add}</button>`}
          </div>`})}
      `}_renderKindFacts(e){let t=e.kind,a=new Date(this._now),s=this._checkOf(e),i=null;if(t.kind==="rotina"&&t.after&&!e.rrule&&!this._ix().checks[e.key]){let p=this._afterDone(e),u=p?null:(this._ix().routines||[]).find(f=>f.cal===e.cal&&f.uid===e.uid&&f.done);p?(s=p.chk,i=p.key):u&&(s=u.done,i=u.key)}let r=[];if(t.kind==="remedio"){t.dose&&r.push(["pill",`Dose: ${t.dose}`]),t.who&&r.push(["user-round",`Quem toma: ${t.who}`]);let p=this._phoneOwner(t.who),u=(this._app("alerts",null)||{}).meds!==!1;r.push(["bell-ring",t.alert?u?p?`Aviso no celular de ${p}`:this._careOn()?"Aviso no celular de quem cuida":"Sem celular: escolha quem cuida em Mais \u203A Avisos":"Avisos no celular desligados":"Sem aviso no celular"])}else if(t.kind==="conta")t.value!=null&&r.push(["receipt",Le(t.value)]);else if(t.kind==="rotina")t.who&&r.push(["user-round",`Quem faz: ${t.who}`]),de(t.rooms,t.room).length&&r.push(["door-open",kt(de(t.rooms,t.room),this._roomNamesAll()).join(", ")]),t.points>0&&this._scoreOn()&&r.push(["award",`${t.points} pontos para quem fizer`]),ge(t.period)&&r.push([ge(t.period).icon,X(ge(t.period).when)]),t.after&&!e.rrule&&(r.push(["repeat",`Volta ${ce(t.after)} depois de feita (na agenda, s\xF3 a pr\xF3xima vez)`]),t.history&&t.history.length&&r.push(["check",`Feito em ${t.history.slice(0,4).map(p=>ee(q(p),a)).join(", ")}`]));else if(t.kind==="manutencao"){t.points>0&&this._scoreOn()&&r.push(["award",`${t.points} pontos para quem fizer`]),r.push(["repeat",`A cada ${ce(t.every)}, contando da \xFAltima vez`]),t.who&&r.push(["user-round",`Quem faz: ${t.who}`]);let p=de(t.rooms,t.room);p.length&&r.push(["door-open",kt(p,this._roomNamesAll()).join(", ")]);for(let u of de(t.equips,t.equip))r.push(["package",u]);r.push(["bell-ring",`Aparece na tela inicial ${P(t.warn,"dia","dias")} antes`]),t.history&&t.history.length&&r.push(["check",`Feito em ${t.history.slice(0,4).map(u=>ee(q(u),a)).join(", ")}`])}let l=Me[t.kind],d=(t.kind==="rotina"||t.kind==="manutencao")&&!e.rrule&&e.start<z(R(a),1)?n`<button class="btn outline kind-tomorrow" @click=${()=>this._toTomorrow(e)}>${S("sunrise")}Amanhã</button>`:m,c=p=>d===m?p:p===m?n`<div class="kind-later">${d}</div>`:n`<div class="kind-later two">${p}${d}</div>`,h=m;if(t.kind==="manutencao"){let p=(this._ix().maint||[]).find(f=>f.cal===e.cal&&f.uid===e.uid),u=c(n`<button class="btn outline kind-skip" @click=${()=>this._maintSkip(p)}>${S("skip-forward")}Pular</button>`);p&&p.canMove&&(h=this._pickWho()?n`${this._renderWhoButtons(this._scoreOn()&&p.points||0,f=>this._maintDone(p,f))}${u}`:n`<button class="btn primary kind-act" @click=${()=>this._maintDone(p)}>${S("check")}Feito hoje</button>${u}`)}else if(e.start<z(R(a),2)||t.kind==="rotina"&&t.after&&!e.rrule){let p={key:i||e.key,summary:e.summary},u=c(t.kind==="rotina"||t.kind==="remedio"?n`<button class="btn outline kind-skip" @click=${()=>this._closeSheet().then(()=>this._skip(p,t.kind))}>${S("skip-forward")}Pular</button>`:m);h=s&&s.skipped?n`<div class="kind-state skipped">${S("skip-forward")}<span>${t.kind==="remedio"?"Pulado":"Pulada"}${s.at?` ${K(new Date(s.at),a)===0?"hoje":ee(new Date(s.at),a)} \xE0s ${W(new Date(s.at))}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(p,t.kind)}>${S("undo-2")}Desfazer</button></div>`:s?n`<div class="kind-state">${S("circle-check")}<span>${X(l.done)}${s.at?` ${K(new Date(s.at),a)===0?"hoje":ee(new Date(s.at),a)} \xE0s ${W(new Date(s.at))}`:s.day?` ${K(q(s.day),a)===0?"hoje":`em ${ee(q(s.day),a)}`}`:""}${s.by?` \xB7 ${s.by}`:""}</span>${s.day?m:n`<button class="text-btn" @click=${()=>this._undoCheck(p,t.kind)}>${S("undo-2")}Desfazer</button>`}</div>`:(t.kind==="rotina"||t.kind==="manutencao")&&this._pickWho()?n`${this._renderWhoButtons(t.points||0,f=>this._closeSheet().then(()=>this._markDone({...p,points:t.points||0},t.kind,f)))}${u}`:t.kind==="rotina"||t.kind==="manutencao"?n`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...p,points:t.points||0},t.kind))}>${S("check")}${l.verb}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>${u}`:n`<button class="btn primary kind-act" @click=${()=>this._check(p,t.kind).then(()=>this._closeSheet())}>${S("check")}${t.kind==="remedio"?this._doseVerb(t.who,!0):l.verb}</button>${u}`}return n`${r.map(([p,u])=>n`<div class="fact">${S(p)}<span>${u}</span></div>`)}
        ${t.notes?n`<div class="fact notes">${S("file-text")}<span>${t.notes}</span></div>`:m}
        ${h}`}_renderBillSheet(){let e=this._form.b,t=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===e.id)||e.c,a=new Date(this._now),s=q(t.vencimento);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.descricao}</h3><p class="ev-cal">GerencIA · <b>${so(t.vencimento,a,t.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${S("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${S("receipt")}<span><b>${Le(t.valor)}</b>${t.tipo==="fatura"?` \xB7 ${P(t.itens||0,"compra","compras")} na fatura`:t.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${S("calendar")}<span>${K(s,a)<0?"Venceu":"Vence"} ${J(s,a,{cap:!1})}</span></div>
          ${t.categoria?n`<div class="fact">${S("layers")}<span>${t.categoria}</span></div>`:m}
          ${t.conta?n`<div class="fact">${S("wallet")}<span>${t.conta}</span></div>`:m}
        </div>
        <p class="sheet-note">${S("info")} ${t.pago?"J\xE1 est\xE1 paga no GerencIA.":t.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${t.pago?n`<button class="btn outline" @click=${()=>this._unpay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("undo-2")}Desfazer pagamento</button>`:n`<button class="btn primary" @click=${()=>this._pay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("check")}Paguei</button>`}
        </div>`}_kindCal(e){let t=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[e];return(a&&t.find(i=>a.test(i.name)&&i.canUpdate)||t.find(i=>i.id===this._defaultCal())||t[0]||{}).id||null}_openKindForm({kind:e="remedio",ev:t=null,copy:a=!1,date:s=null}={}){let i=this._writable(),r=this._ix().gerencia||{};if(!i.length&&!(e==="conta"&&r.ligado)&&!(t&&!a)){this._openSheet("nocal",{});return}let l=R(new Date),d=s?R(s):l,c={mode:"add",kind:e,cal:this._kindCal(e),title:"",date:O(d),times:e==="rotina"?["19:00"]:["08:00"],allDay:e!=="remedio",...io(e==="conta"?"":"FREQ=DAILY",d),dose:"",who:"",alert:!0,value:"",repeat:"mensal",dest:r.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},afterN:2,period:"",last:O(l),warn:7,history:[],points:this._scoreOn()&&(e==="rotina"||e==="manutencao")?e==="rotina"?10:30:0,notes:"",location:""};if(t){let h=t.kind,p=io(t.rrule,t.start);if(c={...c,...p,mode:a?"add":"edit",kind:h.kind,cal:a?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._kindCal(h.kind):t.cal,origCal:t.cal,uid:t.uid,rid:a?null:t.rid,title:t.summary,date:O(t.start),times:t.allDay?["09:00"]:[W(t.start)],allDay:t.allDay,dose:h.dose||"",who:h.who||"",alert:h.alert!==!1,value:h.value!=null?String(h.value.toFixed(2)).replace(".",","):"",repeat:p.freq==="mensal"?"mensal":p.freq==="anual"?"anual":"nao",dest:"cal",every:h.every||c.every,warn:h.warn??7,history:h.history||[],last:h.history&&h.history[0]||c.last,points:h.points||0,period:t.allDay&&h.period||"",notes:h.notes||"",location:t.location||"",roomNames:de(h.rooms,h.room),equipNames:de(h.equips,h.equip),equips:[]},(h.kind==="manutencao"||h.kind==="rotina")&&(c.roomNames.length||c.equipNames.length)){let{rooms:u,items:f}=this._invLists(),x=y=>{let M=f.filter(D=>C(D.nome)===C(y));return M.find(D=>C(D.roomName)===C(c.roomNames[0]||""))||M.find(D=>c.roomNames.some(v=>C(D.roomName)===C(v)))||M[0]};c.equips=[...new Set(c.equipNames.map(y=>(x(y)||{}).id).filter(Boolean))],c.rooms=c.roomNames.map(y=>(u.find(M=>C(M.nome)===C(y))||{}).id).filter(Boolean),c.room=c.rooms[0]||null}if(h.kind==="rotina"&&h.after&&!t.rrule&&Object.assign(c,{freq:"depois",afterN:Math.max(1,Math.round(h.after.n*_t[h.after.unit][0]))}),c.wasAfter=c.freq==="depois",c.mode==="edit")try{c.before=this._kindEvents(c)[0]}catch{c.before=null}}this._openSheet("form",c),c.mode==="add"&&this.updateComplete.then(()=>{let h=this.renderRoot.querySelector(".sheet .ev-title-input");h&&h.focus()})}_kindRrule(e,t,a){let s;if(e.freq==="diario")s="FREQ=DAILY";else if(e.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(e.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(e.interval)||3))}`;else if(e.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...e.byday].sort().map(i=>oo[i]).join(",")}`;else if(e.freq==="mensal")s="FREQ=MONTHLY";else return null;if(e.dur!=="sempre"){let i=e.dur==="ate"?q(e.until):z(a,Math.max(1,Number(e.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=t?`;UNTIL=${O(i).replace(/-/g,"")}`:`;UNTIL=${cn(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(e,{keepRrule:t=!0}={}){let a=(e.title||"").trim();if(!a)throw new Error(e.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:e.kind,notes:e.notes};if(e.kind==="remedio")Object.assign(s,{dose:e.dose,who:e.who,alert:e.alert});else if(e.kind==="rotina"){Object.assign(s,{who:e.who,points:Math.max(0,Math.round(Number(e.points)||0)),period:e.allDay&&e.period||""}),e.freq==="depois"&&Object.assign(s,{after:{n:Math.max(1,Math.min(365,Math.round(Number(e.afterN)||2))),unit:"dias"},history:e.mode==="edit"?e.history||[]:[]});let{rooms:x}=this._invLists(),y=(e.rooms||(e.room?[e.room]:[])).map(M=>x.find(D=>D.id===M)).filter(Boolean);s.rooms=y.length?y.map(M=>M.nome):x.length?[]:e.roomNames||[],s.equips=e.equipNames||[]}else if(e.kind==="conta"){if(s.value=aa(e.value),!s.value)throw new Error("Coloque o valor")}else{if(!(e.every&&e.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:e.who,every:e.every,warn:e.warn,history:e.mode==="edit"?e.history:e.last?[e.last]:[],points:Math.max(0,Math.round(Number(e.points)||0))});let{rooms:x,items:y}=this._invLists(),M=(e.equips||[]).map(v=>y.find(k=>k.id===v)).filter(Boolean),D=(e.rooms||(e.room?[e.room]:[])).map(v=>x.find(k=>k.id===v)).filter(Boolean);s.equips=y.length?M.map(v=>v.nome):e.equipNames||[],s.rooms=M.length?[...new Set(M.map(v=>v.roomName).filter(Boolean))]:D.length?D.map(v=>v.nome):x.length?[]:e.roomNames||[]}let i={summary:a,description:Yi(s)};if((e.location||"").trim()&&(i.location=e.location.trim()),e.kind==="manutencao"){let x=e.mode==="edit"?q(e.date):Ka(q(e.last||O(new Date)),e.every);return[{...i,start:O(x),end:O(z(x,1))}]}if(e.kind==="conta"){let x=q(e.date),y={...i,start:O(x),end:O(z(x,1))};return t&&e.repeat!=="nao"&&(y.rrule=e.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[y]}let r=q(e.date);if(e.freq==="semana"){if(!e.byday.length)throw new Error("Escolha os dias da semana");if(e.mode==="add")for(let x=0;x<7&&!e.byday.includes(r.getDay());x++)r=z(r,1)}let l=e.kind==="rotina"&&e.allDay,d=t?this._kindRrule(e,l,r):null,c=d?{rrule:d}:{};if(l)return[{...i,start:O(r),end:O(z(r,1)),...c}];let h=[...new Set((e.times||[]).filter(x=>/^\d{2}:\d{2}$/.test(x)))].sort();if(!h.length)throw new Error("Escolha o hor\xE1rio");let p=e.kind==="remedio"?15:30,u=x=>{if(e.freq==="alternado")return z(x,2);if(e.freq==="intervalo")return z(x,Math.max(2,Number(e.interval)||3));if(e.freq==="mensal")return new Date(x.getFullYear(),x.getMonth()+1,x.getDate());if(e.freq==="semana"){let y=z(x,1);for(let M=0;M<7&&!e.byday.includes(y.getDay());M++)y=z(y,1);return y}return z(x,1)},f=new Date;return h.map(x=>{let[y,M]=x.split(":").map(Number),D=r;e.mode==="add"&&e.freq!=="uma"&&e.freq!=="depois"&&new Date(D.getFullYear(),D.getMonth(),D.getDate(),y,M)<f&&(D=u(D));let v=new Date(D.getFullYear(),D.getMonth(),D.getDate(),y,M);return{...i,start:fe(v),end:fe(new Date(v.getTime()+p*6e4)),...c}})}async _saveKindForm(){let e=this._form;if(e.kind==="tarefa")return this._saveTodoForm();if(e.kind==="conta"&&e.dest==="gerencia"&&e.mode==="add"){let l=aa(e.value);if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!l)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:e.title.trim(),valor:l,vencimento:e.date,repete:e.repeat,categoria:e.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(d){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${d.message}`)}return}let t;try{t=this._kindEvents(e)}catch(l){this._showToast(l.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=t[0];if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:s});return}this._setForm({saving:!0});let i=Me[e.kind].label,r=["rotina","manutencao","conta"].includes(e.kind)?"a":"o";try{if(e.mode==="add"){for(let l of t)await this.api.createEvent(e.cal,l);this._done(t.length>1?`${i} criad${r}: ${t.length} hor\xE1rios em ${N(a.name,20)}`:`${i} criad${r} em ${N(a.name,24)}`,e.cal,s.start)}else e.cal!==e.origCal?(await this.api.createEvent(e.cal,s),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`${i} movid${r} para ${N(a.name,24)}`,e.cal,s.start)):(await this._saveInPlace(e,s),this._done(`${i} salv${r}${e.rid&&!a.canUpdate?" \xB7 a s\xE9rie recome\xE7a neste dia":""}`,e.cal,s.start))}catch(l){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${l.message}`)}}_renderModelChips(e){let t=this._form;return n`<div class="field model-field"><span class="flabel">Tipo<span class="fl-val">· ${(Me[e]||Me[""]).label}</span></span><div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(Me).filter(([a])=>a!=="evento"&&(a!=="tarefa"||this._todoLists().length)).map(([a,s])=>n`<button class="model ${e===a?"on":""}" role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>{if(e===a)return;let i=t.date?q(t.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${S(s.icon)}<span>${s.label}</span></button>`)}
      </div></div>`}_dateField(e,t,a,s,{kind:i="futuro"}={}){return yt(e,t,r=>r&&a(r),{kind:i,max:i==="passado"?O(new Date):"",weekStart:this._app("week_start",1),bid:s})}_whoField(e,{pets:t=!1}={}){let a=this._form,s=this._ix().people||[],i=l=>s.some(d=>d.pet&&C(d.name)===C(l)),r=[...new Set([...s.filter(l=>t||!l.pet).map(l=>l.name),...a.who?[a.who]:[]])];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${r.map(l=>n`<button class="pick person ${a.who===l?"on":""}" @click=${()=>this._setForm({who:a.who===l?"":l})}><span class="avatar sm">${i(l)?S("paw-print"):na(l)}</span><span>${l}</span></button>`)}
        </div>
        <span class="field-hint">${S("info")}<span>${t?"Outra pessoa ou um pet":"Outra pessoa"}: adicione em Mais › Avisos.</span></span>
      </div>`}_freqField(e){let t=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...t.kind==="rotina"?[["mensal","Todo m\xEAs"],["depois","Depois de feita"]]:[],["uma","S\xF3 uma vez"]],s=t.mode!=="edit"||t.kind!=="rotina"?a:t.wasAfter?a.filter(([i])=>i==="depois"):t.rid||t.freq!=="uma"?a.filter(([i])=>i!=="depois"):a;return n`<div class="field">
        <span class="flabel">${e}</span>
        ${(()=>{let i=s.length,r=i<=4?i:i<=6?3:4,l=i%r?r-i%r+1:1;return n`<div class="seg seg-grid" role="radiogroup" aria-label=${e} style="grid-template-columns:repeat(${r},1fr)">${s.map(([d,c],h)=>n`<button class=${t.freq===d?"on":""} role="radio" aria-checked=${t.freq===d?"true":"false"} style=${h===i-1&&l>1?`grid-column:span ${l}`:""} @click=${()=>this._setForm({freq:d})}>${c}</button>`)}</div>`})()}
        ${t.freq==="semana"?n`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(i=>{let r=t.byday.includes(i);return n`<button class="wdp ${r?"on":""}" aria-pressed=${r?"true":"false"} aria-label=${_e[i]} @click=${()=>this._setForm({byday:r?t.byday.filter(l=>l!==i):[...t.byday,i]})}>${rn[i]}</button>`})}
            </div>`:m}
        ${t.freq==="intervalo"?n`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(t.interval)} @input=${i=>this._setForm({interval:i.target.value})} /><span class="tl">dias</span></div>`:m}
        ${t.freq==="depois"?n`<div class="time-row"><span class="tl">Volta</span><input type="number" class="num-input" min="1" max="365" aria-label="Dias depois de feita" .value=${String(t.afterN)} @input=${i=>this._setForm({afterN:i.target.value})} /><span class="tl">${Number(t.afterN)===1?"dia":"dias"} depois de feita</span></div>
              <span class="field-hint">${S("rotate-ccw")}<span>Feita hoje, volta ${Number(t.afterN)===1?"amanh\xE3":`daqui a ${Math.max(1,Number(t.afterN)||2)} dias`}.</span></span>`:m}
      </div>`}_pointsField(){let e=this._form,t=Number(e.points)||0;return n`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row c4">
          ${[0,5,10,20,30,50].map(a=>n`<button class="pick ${t===a?"on":""}" @click=${()=>this._setForm({points:a})}>${S(a?"trophy":"x")}<span>${a?`+${a}`:"Sem pontos"}</span></button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(t)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${t>0&&!this._scoreOn()?n`<span class="field-hint">${S("trophy")}<span>O placar está desligado (aba <b>Recompensas</b>).</span></span>`:m}
      </div>`}_durField(e){let t=this._form;if(t.freq==="uma")return m;let a=t.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>n`<button class="pick ${t.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${t.dur==="dias"?n`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(t.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:m}
        ${t.dur==="ate"?n`<date-pick class="dp-until" .value=${t.until||""} kind="nenhum" .min=${t.date} .weekStart=${this._app("week_start",1)} .bid=${"kf-until"} .label=${"At\xE9"} @pick=${s=>s.detail.value&&this._setForm({until:s.detail.value})}></date-pick>`:m}
      </div>`}_calField(){let e=this._form,t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(s=>s.id===e.cal):t.filter(s=>s.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t;return a.length<=1?m:n`<div class="field">
        <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>n`<button class="pick list ${e.cal===s.id?"on":""}" style=${B(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${N(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let e=this._form;if(e.kind==="tarefa")return this._renderTodoForm();let t=e.kind,a=Me[t],s=new Date,i=this._ix().gerencia||{},r=t==="conta"&&e.dest==="gerencia"&&e.mode==="add",l={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[t],d=n`<div class="field fold-txt"><span class="flabel">Observações${(e.notes||"").trim()?n`<span class="fl-val">· ${N(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span><textarea rows="2" aria-label="Observações" .value=${e.notes} placeholder=${t==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${h=>this._setForm({notes:h.target.value})}></textarea></div>`,c;if(t==="remedio"){let h=this._phoneOwner(e.who),p=e.mode==="add",u=this._app("alerts",null)||{},f=(u.late==null?30:u.late)>0;c=n`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${e.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${x=>this._setForm({dose:x.target.value})} /></label>
          ${this._whoField("Quem toma",{pets:!0})}
          <div class="field">
            <span class="flabel">${p?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${p?n`<div class="chip-row" style="margin-bottom:10px">${nn.map(([x,y])=>n`<button class="pick ${e.times.join()===y.join()?"on":""}" @click=${()=>this._setForm({times:[...y]})}>${x}</button>`)}</div>`:m}
            <div class="times">
              ${e.times.map((x,y)=>n`<span class="time-pill">${we(x,M=>this._setForm({times:e.times.map((D,v)=>v===y?M:D)}),{label:`Hor\xE1rio ${y+1}`})}${e.times.length>1?n`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:e.times.filter((M,D)=>D!==y)})}>${S("x")}</button>`:m}</span>`)}
              ${p&&e.times.length<8?n`<button class="pick ghost" @click=${()=>this._setForm({times:[...e.times,"12:00"]})}>${S("plus")}<span>Horário</span></button>`:m}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,x=>this._setForm({date:x}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          ${u.meds===!1?m:n`<div class="row switch-row">
                <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${e.alert?e.who?h||this._careOn()?`Na hora${f?" e de novo se atrasar":""}, no celular de ${h||"quem cuida"}.`:n`Sem celular para ${e.who}: escolha quem cuida em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${e.alert} @change=${x=>this._setForm({alert:x.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
              </div>`}
          ${d}`}else if(t==="conta")c=n`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${e.value} placeholder="0,00" @input=${h=>this._setForm({value:h.target.value})} /></span></label>
          ${this._dateField(e.repeat==="nao"?"Vence":"Primeiro vencimento",e.date,h=>this._setForm({date:h}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row c3">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([h,p])=>n`<button class="pick ${e.repeat===h?"on":""}" @click=${()=>this._setForm({repeat:h})}>${h!=="nao"?S("repeat"):m}<span>${p}</span></button>`)}</div></div>
          ${i.ligado&&e.mode==="add"?n`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${e.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${S("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${e.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${S("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${S("info")}<span>${e.dest==="gerencia"?"Entra no GerencIA; o Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio."}</span></span>
              </div>`:m}
          ${r&&(i.categorias||[]).length?n`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${h=>this._setForm({categoria:h.target.value})}><option value="">Sem categoria</option>${i.categorias.map(h=>n`<option value=${h.id} ?selected=${e.categoria===h.id}>${h.nome}</option>`)}</select></label>`:m}
          ${r?m:n`${this._calField()}${d}`}`;else if(t==="rotina")c=n`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{equips:!1,multiRoom:!0})}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${e.allDay&&!e.period?"on":""}" @click=${()=>this._setForm({allDay:!0,period:""})}>${S("clock")}<span>Qualquer hora</span></button>
              <button class="pick ${e.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1,period:""})}>${S("clock")}<span>Num horário</span></button>
              ${e.allDay?m:we(e.times[0]||"19:00",h=>this._setForm({times:[h]}),{label:"Hor\xE1rio",cls:"inline-time"})}
            </div>
            <div class="chip-row c3 per-row" role="group" aria-label="Período do dia">
              ${ze.map(h=>n`<button class="pick ${e.allDay&&e.period===h.id?"on":""}" @click=${()=>this._setForm({allDay:!0,period:h.id})}>${S(h.icon)}<span>${h.label}</span></button>`)}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(e.freq==="depois"?e.mode==="add"?"Primeira vez":"Pr\xF3xima vez":e.mode==="add"?"Come\xE7a":"Data",e.date,h=>this._setForm({date:h}),"kf-date")}
          ${e.freq==="depois"?m:this._durField("At\xE9 quando")}
          ${this._calField()}
          ${d}`;else{let h=e.mode==="edit"?q(e.date):Ka(q(e.last||O(s)),e.every);c=n`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{multiRoom:!0})}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row c4" style="margin-bottom:10px">${ln.map(p=>n`<button class="pick ${e.every.n===p.n&&e.every.unit===p.unit?"on":""}" @click=${()=>this._setForm({every:{...p}})}>${S("repeat")}<span>${ce(p)}</span></button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(e.every.n)} @input=${p=>this._setForm({every:{...e.every,n:Math.max(1,Number(p.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(_t).map(p=>n`<button class=${e.every.unit===p?"on":""} @click=${()=>this._setForm({every:{...e.every,unit:p}})}>${p}</button>`)}</div>
            </div>
            <span class="field-hint">${S("repeat")}<span>Feito hoje, volta em ${ce(e.every)}.</span></span>
          </div>
          ${e.mode==="add"?this._dateField("Feito pela \xFAltima vez",e.last,p=>this._setForm({last:p}),"kf-last",{kind:"passado"}):this._dateField("Pr\xF3xima vez",e.date,p=>this._setForm({date:p}),"kf-date")}
          <p class="next-line">${S("calendar-check")}<span>Próxima: <b>${X(J(h,s,{long:!1}))}</b>${K(h,s)>1?` \xB7 em ${P(K(h,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1,3,7,15,30].map(p=>n`<button class=${e.warn===p?"on":""} role="radio" aria-checked=${e.warn===p?"true":"false"} @click=${()=>this._setForm({warn:p})}>${p===1?"1 dia":`${p} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${d}`}return n`
        ${this._sheetHead(e.mode==="add"?"Adicionar":`Editar ${a.label.toLowerCase()}`)}
        ${e.mode==="add"?this._renderModelChips(t):m}
        <label class="field">
          <span class="flabel">${l[0]}</span>
          <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder=${l[1]} @input=${h=>this._setForm({title:h.target.value})}></textarea>
        </label>
        ${c}
        ${e.rid?n`<div class="field-hint">${S("repeat")}<span>Este item se repete.</span></div>`:m}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${S("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveKindForm()}>${S(e.mode==="add"?"plus":"check")}${e.saving?"Salvando\u2026":e.mode==="add"?r?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let e=this._ix(),t=this._app("alerts",null)||{},a=t.meds!==!1,s=t.late==null?30:t.late,i=t.caregivers||[],r=e.people||[],l=r.filter(g=>g.phone),d=this._app("people",null)||{},c=g=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...g}}),h=(g,$)=>{let _={...d[g]||{}};return $?_.care=$:delete _.care,this._saveAppPrefs({people:{...d,[g]:_}})},p=(g,$)=>{let _={...d[g]||{}};$?_.pet=!0:delete _.pet;let b=this._score&&this._score();return $&&b&&(b.participants||[]).some(A=>C(A)===C(g))&&this._scorePrefs({participants:b.participants.filter(A=>C(A)!==C(g))}),this._saveAppPrefs({people:{...d,[g]:_}})},u=g=>{let $={...d};delete $[g],this._saveAppPrefs({people:Object.keys($).length?$:null})},f=this._newPerson,x=()=>{let g=(f.name||"").trim().replace(/\s+/g," ").slice(0,40);if(g){if(r.some($=>C($.name)===C(g))){this._showToast(`${g} j\xE1 est\xE1 na lista`);return}this._newPerson=null,this._saveAppPrefs({people:{...d,[g]:f.pet?{pet:!0}:{}}})}},y=g=>{let $=l.filter(b=>C(b.name)!==C(g.name)),_=g.care&&!$.some(b=>C(b.name)===C(g.care));return n`<select class="select sm" aria-label="Quem recebe os avisos de ${g.name}" @change=${b=>h(g.name,b.target.value)}>
          <option value="" ?selected=${!g.care}>No celular de quem cuida</option>
          ${$.map(b=>n`<option value=${b.name} ?selected=${!!g.care&&C(g.care)===C(b.name)}>No celular de ${b.name}</option>`)}
          ${_?n`<option value=${g.care} selected>${g.care} (sem celular)</option>`:m}
        </select>`},M=g=>g.person?a&&!g.phone?"Pessoa do Home Assistant, sem celular":"Pessoa do Home Assistant":g.pet?"Pet":"S\xF3 no CronologIA",D=this._me?this._me():"",v=r.find(g=>D&&C(g.name)===C(D)),k=n`<button class="btn outline aviso-test" ?disabled=${!(v&&v.phone)} title=${v&&v.phone?"":"Sem celular ligado a voc\xEA no Home Assistant"} @click=${()=>this._testAlert(v.name,!0)}>${S("send")}Testar no meu celular</button>`;return n`<div class="panel" id="avisos">
        ${this._secHead("bell-ring","Avisos de rem\xE9dio no celular",n`Na hora da dose, com <b>Tomei</b> e <b>Adiar 15 min</b>.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Dá para desligar em cada remédio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${g=>c({meds:g.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?n`<div class="sub-op"><div class="sub-box"><div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([g,$])=>n`<button class="pick ${s===g?"on":""}" @click=${()=>c({late:g})}>${S(g?"hourglass":"x")}<span>${$}</span></button>`)}</div>
              </div>
              ${l.length?n`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row care-pick">${l.map(g=>{let $=i.some(_=>C(_)===C(g.name));return n`<button class="pick quem-p ${$?"on":""}" aria-pressed=${$?"true":"false"} @click=${()=>c({caregivers:$?i.filter(_=>C(_)!==C(g.name)):[...i,g.name]})}>${S("user-round")}<b>${g.name}</b></button>`})}</div>
                    <span class="field-hint">${S("info")}<span>${s>0?"Recebe os atrasos de todos.":"Recebe os avisos de quem est\xE1 sem celular."}</span></span>
                  </div>`:m}
              ${k}</div></div>`:m}
        <div class="field people-field">
          <span class="flabel">Pessoas e pets</span>
          ${r.length?r.map(g=>{let $=!g.person&&!!d[g.name];return n`<div class="person-row ${g.pet?"is-pet":""}">
                  <span class="avatar">${g.pet?S("paw-print"):na(g.name)}</span>
                  <span class="grow"><b>${g.name}</b><small>${M(g)}</small></span>
                  ${a&&!g.phone&&l.length?y(g):m}
                  <span class="p-acts">
                    ${g.person?m:n`<button class="icon-btn pet-btn ${g.pet?"on":""}" aria-pressed=${g.pet?"true":"false"} aria-label="${g.name} é um pet" title=${g.pet?"Pet":"Marcar como pet"} @click=${()=>p(g.name,!g.pet)}>${S("paw-print")}</button>`}
                    ${a&&g.reach?n`<button class="icon-btn" aria-label="Testar aviso para ${g.name}" @click=${()=>this._testAlert(g.name)}>${S("bell-ring")}</button>`:m}
                    ${$?n`<button class="icon-btn mini" aria-label="Tirar ${g.name}" @click=${()=>u(g.name)}>${S("x")}</button>`:m}
                  </span>
                </div>`}):n`<p class="hint">As pessoas do Home Assistant aparecem aqui.</p>`}
          ${f?n`<div class="person-add">
                <input type="text" class="input" .value=${f.name||""} placeholder="Nome (pessoa ou pet)" aria-label="Nome da pessoa ou pet" maxlength="40"
                  @input=${g=>(this._newPerson={...this._newPerson,name:g.target.value},this.requestUpdate())}
                  @keydown=${g=>g.key==="Enter"&&x()} />
                <div class="seg" role="group" aria-label="Pessoa ou pet">
                  <button class=${f.pet?"":"on"} @click=${()=>(this._newPerson={...this._newPerson,pet:!1},this.requestUpdate())}>${S("user-round")}Pessoa</button>
                  <button class=${f.pet?"on":""} @click=${()=>(this._newPerson={...this._newPerson,pet:!0},this.requestUpdate())}>${S("paw-print")}Pet</button>
                </div>
                <div class="person-add-acts">
                  <button class="btn outline sm" @click=${()=>(this._newPerson=null,this.requestUpdate())}>${S("x")}Cancelar</button>
                  <button class="btn primary sm" ?disabled=${!(f.name||"").trim()} @click=${x}>${S("plus")}Adicionar</button>
                </div>
              </div>`:n`<button class="add-line" @click=${()=>{this._newPerson={name:"",pet:!1},this.requestUpdate(),this.updateComplete.then(()=>{let g=this.renderRoot.querySelector(".person-add input");g&&g.focus()})}}>${S("plus")}Adicionar pessoa ou pet</button>`}
          ${a?n`<span class="field-hint">${S("info")}<span>${l.length?"Vai para o celular ligado a cada pessoa no Home Assistant. Sem celular (pet ou crian\xE7a): para quem voc\xEA escolher.":"Ningu\xE9m tem celular ligado no Home Assistant (Configura\xE7\xF5es \u203A Pessoas)."}</span></span>`:m}
        </div>

      </div>`}_renderCorreriaPanel(){let e=this._app("correria_on",!1)===!0,t=e?(this._ix().correria||{}).ultimo:null,a="";if(t&&Number.isFinite(Date.parse(t.em))){let s=new Date(t.em),i=K(new Date(this._now||Date.now()),s);a=`${t.cliente} usou ${i===0?"hoje":i===1?"ontem":`em ${ee(s,new Date(this._now||Date.now()))}`} \xE0s ${W(s)}.`}return n`<div class="panel" id="correria">
        ${this._secHead("zap","CorrerIA","O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini.")}
        <div class="row switch-row integ-switch">
          <div class="grow"><div class="label">Usar com o CorrerIA</div><div class="hint" style="white-space:normal">${e?"Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda.":"Desligado."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${s=>this._saveAppPrefs({correria_on:s.target.checked?!0:null})} aria-label="Usar com o CorrerIA" /><span class="track"></span></label>
        </div>
        ${e?n`<div class="sub-op"><div class="sub-box"><div class="ai-state ${a?"ok":"off"}"><span class="dot"></span><div>${a?n`<b>${a}</b>`:n`<b>Nenhum uso ainda</b><span>Conecte no app CorrerIA.</span>`}</div></div></div></div>`:m}
      </div>`}_renderGerenciaPanel(){let e=this._app("gerencia_on",!1)===!0,t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${r=>this._saveAppPrefs({gerencia_on:r.target.checked?!0:null})} aria-label="Usar a integração com o GerencIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="gerencia">
          ${this._secHead("wallet","Contas do GerencIA")}
          ${t}
        </div>`;let a=this._ix().gerencia||{},s=(a.contas||[]).filter(r=>!r.pago).length,i=a.ligado?a.erro?"warn":"ok":"off";return n`<div class="panel" id="gerencia">
        ${this._secHead("wallet","Contas do GerencIA")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="ai-state ${i}"><span class="dot"></span><div>
          <b>${a.ligado?a.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${a.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${a.ligado?a.erro||`${P(s,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${a.ligado?n`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do vencimento.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${r=>this._saveAppPrefs({gerencia_hidden:r.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:m}
        </div></div>
      </div>`}};var $e={quick:!1,editing:null,menu:!1},no=4;async function la(o,e=[]){let t=e.slice(),a=i=>new Promise((r,l)=>{let d=new FileReader;d.onload=()=>r(String(d.result).split(",")[1]||""),d.onerror=()=>l(d.error),d.readAsDataURL(i)}),s=[];for(let i of Array.from(o||[])){if(i.type==="application/pdf"||/\.pdf$/i.test(i.name||"")){if(i.size>15*1024*1024){s.push("Arquivo grande demais (at\xE9 15 MB).");continue}t=[{nome:i.name||"arquivo.pdf",pdf:!0,mime:"application/pdf",data:await a(i),url:""}];continue}if(i.type&&!/^image\//.test(i.type)){s.push("Escolha uma foto ou um PDF.");continue}if(t.length>=no||t.some(l=>l.pdf))if(t.some(l=>l.pdf))t=[];else{s.push(`At\xE9 ${no} arquivos por mensagem.`);break}try{let l=await createImageBitmap(i,{imageOrientation:"from-image"}),d=Math.min(1,1600/Math.max(l.width,l.height)),c=document.createElement("canvas");c.width=Math.max(1,Math.round(l.width*d)),c.height=Math.max(1,Math.round(l.height*d));let h=c.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,c.width,c.height),h.drawImage(l,0,0,c.width,c.height),l.close&&l.close();let p=await new Promise(u=>c.toBlob(u,"image/jpeg",.86));t.push({nome:i.name||`Foto ${t.length+1}.jpg`,pdf:!1,mime:"image/jpeg",data:await a(p),url:URL.createObjectURL(p)})}catch{s.push("N\xE3o deu para abrir esta foto. Use JPG ou PNG.")}}return{files:t,error:s[0]||""}}function mn(o,e=[]){try{let t=JSON.parse(localStorage.getItem(`${o}-perguntas`)||"null");if(Array.isArray(t))return t.filter(a=>typeof a=="string"&&a.trim())}catch{}return e}function lo(o,e){try{e==null?localStorage.removeItem(`${o}-perguntas`):localStorage.setItem(`${o}-perguntas`,JSON.stringify(e))}catch{}}function co({lit:o,icon:e,app:t="",messages:a=[],draft:s="",busy:i=!1,error:r="",voice:l=null,examples:d=[],files:c=[],onDraft:h,onSend:p,onMic:u,onAction:f,onAll:x,onClear:y,onClose:M,onAttach:D=null,onFileRemove:v=()=>{},onRedraw:k=()=>{}}){let{html:g,nothing:$}=o,_=()=>{let F=(s||"").trim();(F||c.length)&&!i&&p(F)},b=t?mn(t,d):d,A=F=>(Object.assign($e,F),k()),E=F=>{A({quick:!1}),p(F)},I=()=>{let F=$e.editing;if(F){let le=Q=>{let xe=(F.draft||"").trim(),T=Q&&Q.closest(".chat-ed-new")&&Q.closest(".chat-ed-new").querySelector("input");T&&(T.value=""),xe&&A({editing:{list:[...F.list,xe],draft:""}})};return g`<div class="chat-ed">
        <span class="chat-ed-h">${e("pencil")}Perguntas prontas</span>
        ${F.list.map((Q,xe)=>g`<div class="chat-ed-row"><span>${Q}</span><button type="button" class="icon-btn" aria-label=${`Tirar \u201C${Q}\u201D`} @click=${()=>A({editing:{...F,list:F.list.filter((T,re)=>re!==xe)}})}>${e("x")}</button></div>`)}
        <div class="chat-ed-new">
          <input type="text" maxlength="120" .value=${F.draft||""} placeholder="Nova pergunta" aria-label="Nova pergunta" enterkeyhint="done"
            @input=${Q=>F.draft=Q.target.value} @keydown=${Q=>{Q.key==="Enter"&&(Q.preventDefault(),le(Q.target))}} />
          <button type="button" class="btn outline sm" @click=${Q=>le(Q.currentTarget)}>${e("plus")}Adicionar</button>
        </div>
        <div class="chat-ed-acts">
          <button type="button" class="btn outline sm" @click=${()=>(lo(t,null),A({editing:{list:d.slice(),draft:""}}))}>${e("rotate-ccw")}Padrão</button>
          <button type="button" class="btn primary sm" @click=${()=>{let Q=F.list.concat((F.draft||"").trim()?[(F.draft||"").trim()]:[]);lo(t,Q.join(`
`)===d.join(`
`)?null:Q),A({editing:null})}}>${e("check")}Pronto</button>
        </div>
      </div>`}return g`<div class="chat-ex">${b.map(le=>g`<button type="button" class="pick" @click=${()=>E(le)}>${e("sparkles")}<span>${le}</span></button>`)}</div>
      ${t?g`<button type="button" class="text-btn chat-ed-open" @click=${()=>A({editing:{list:b.slice(),draft:""}})}>${e("pencil")}Editar perguntas</button>`:$}`},j=(F,le,Q,xe)=>g`<div class="chat-act ${Q.state||"todo"}">
    <span class="chat-act-ic">${e(Q.state==="done"?"check":Q.state==="failed"?"circle-alert":Q.icon||"sparkles")}</span>
    <span class="chat-act-tx">${Q.label}${Q.note?g`<small>${Q.note}</small>`:$}</span>
    ${Q.state==="done"?g`<span class="chat-act-ok">Feito</span>`:Q.state==="doing"?g`<span class="chat-act-ok">…</span>`:g`<button type="button" class="btn primary sm" @click=${()=>f(le,xe)}>${e(Q.state==="failed"?"rotate-ccw":"check")}${Q.state==="failed"?"Tentar de novo":"Fazer"}</button>`}
  </div>`,H=(F,le)=>{let Q=(F.actions||[]).filter(T=>T.state!=="done"&&T.state!=="doing").length,xe=F.role==="user"&&Array.isArray(F.anexos)?F.anexos:[];return g`<div class="chat-msg ${F.role==="user"?"me":"ia"}">
      ${F.text||xe.length?g`<div class="chat-bubble">${xe.map(T=>g`<span class="chat-arq">${e("paperclip")}${T}</span>`)}${F.text||""}</div>`:$}
      ${(F.actions||[]).length?g`<div class="chat-acts">
            ${F.actions.map((T,re)=>j(F,le,T,re))}
            ${Q>1?g`<button type="button" class="btn outline sm chat-all" @click=${()=>x(le)}>${e("check")}Fazer todas (${Q})</button>`:$}
          </div>`:$}
    </div>`},Z=l&&l.on,he=!!D&&!Z,te=he&&$e.menu,V=F=>(A({menu:!1}),D(F)),G=!!(l&&l.ready)&&(Z||!(s||"").trim()&&!c.length);return g`<div class="chat">
    <div class="chat-head">
      <span class="chat-title">${e("message-circle")}Conversa</span>
      ${a.length?g`<button type="button" class="text-btn chat-nova" aria-label="Nova conversa" @click=${()=>y()}>${e("plus")}<span>Nova conversa</span></button>`:$}
      <button type="button" class="icon-btn" aria-label="Fechar" @click=${()=>M()}>${e("x")}</button>
    </div>
    <div class="chat-log">
      ${a.length?a.map(H):b.length||t?g`<div class="chat-empty">${I()}</div>`:$}
      ${i?g`<div class="chat-msg ia"><div class="chat-bubble typing"><i></i><i></i><i></i></div></div>`:$}
      ${r?g`<div class="chat-error">${e("circle-alert")}<span>${r}</span></div>`:$}
    </div>
    ${a.length&&($e.quick||$e.editing)?g`<div class="chat-quick">${I()}</div>`:$}
    ${te?g`<div class="chat-menu" role="menu">
          <button type="button" class="chat-op" role="menuitem" @click=${()=>V("camera")}>${e("camera")}Tirar foto</button>
          <button type="button" class="chat-op" role="menuitem" @click=${()=>V("fotos")}>${e("images")}Escolher fotos</button>
          <button type="button" class="chat-op" role="menuitem" @click=${()=>V("arquivo")}>${e("file-text")}Escolher arquivo</button>
        </div>`:$}
    ${c.length?g`<div class="chat-files">${c.map((F,le)=>g`<div class="chat-file">${F.pdf?g`<span class="chat-pdf">${e("file-text")}</span>`:g`<img src=${F.url} alt="" />`}<span class="chat-file-n">${F.nome}</span><button type="button" class="icon-btn" aria-label=${`Tirar ${F.nome}`} @click=${()=>v(le)}>${e("x")}</button></div>`)}</div>`:$}
    <form class="chat-input" @submit=${F=>(F.preventDefault(),_())}>
      ${he?g`<button type="button" class="icon-btn chat-clip ${te?"on":""}" aria-label="Anexar" title="Anexar" aria-expanded=${te?"true":"false"} ?disabled=${i} @click=${()=>A({menu:!$e.menu,quick:!1,editing:null})}>${e("paperclip")}</button>`:$}
      <textarea rows="1" data-size="off" .value=${s} placeholder=${Z?"Ouvindo\u2026":"Pergunte o que quiser"} aria-label="Mensagem para a IA" ?disabled=${Z}
        @input=${F=>h(F.target.value)}
        @keydown=${F=>{F.key==="Enter"&&!F.shiftKey&&!F.isComposing&&(F.preventDefault(),_())}}></textarea>
      ${a.length&&(b.length||t)&&!Z?g`<button type="button" class="icon-btn chat-qbtn ${$e.quick||$e.editing?"on":""}" aria-label="Perguntas prontas" aria-expanded=${$e.quick||$e.editing?"true":"false"} title="Perguntas prontas" @click=${()=>A({quick:!($e.quick||$e.editing),editing:null,menu:!1})}>${e("sparkles")}</button>`:$}
      ${G?g`<button type="button" class="icon-btn chat-mic ${Z?"on":""}" aria-label=${Z?"Pronto: enviar o que falei":"Falar"} ?disabled=${i||l.starting} @click=${()=>u()}>${e(Z?"check":"mic")}</button>`:g`<button type="submit" class="icon-btn chat-send" aria-label="Enviar" ?disabled=${i||Z||!((s||"").trim()||c.length)}>${e("send")}</button>`}
    </form>
  </div>`}var po=`
  .chat { display: flex; flex-direction: column; height: min(78vh, 680px); margin: -4px -4px 0; }
  .chat-head { display: flex; align-items: center; gap: 10px; padding: 0 0 10px; }
  .chat-title { display: inline-flex; align-items: center; gap: 8px; flex: 1; font-weight: 700; font-size: 18px; }
  .chat-title .i { width: 30px; height: 30px; padding: 6px; border-radius: 9px; background: var(--rv-accent-soft); color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-head .text-btn { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  @media (max-width: 340px) { .chat-nova span { display: none; } }
  .chat-head .text-btn .i { width: 16px; height: 16px; }
  .chat-log { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 6px 2px 12px; overscroll-behavior: contain; }
  .chat-empty { margin: auto 0 0; color: var(--rv-muted); font-size: 15px; line-height: 1.45; }
  .chat-empty p { margin: 0 0 12px; }
  .chat-ex { display: flex; flex-wrap: wrap; gap: 8px; }
  .chat-ex .pick { font-size: 14px; padding: 8px 12px; min-height: 0; display: inline-flex; align-items: center; gap: 6px; }
  .chat-ex .pick .i { width: 16px; height: 16px; flex: none; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-msg { display: flex; flex-direction: column; gap: 6px; max-width: 88%; }
  .chat-msg.me { align-self: flex-end; align-items: flex-end; }
  .chat-msg.ia { align-self: flex-start; }
  .chat-bubble { padding: 10px 14px; border-radius: 18px; font-size: 15.5px; line-height: 1.42; white-space: pre-wrap; overflow-wrap: anywhere; }
  .chat-msg.me .chat-bubble { background: var(--rv-accent); color: var(--rv-on-accent, #fff); border-bottom-right-radius: 6px; }
  .chat-msg.ia .chat-bubble { background: color-mix(in srgb, var(--rv-muted) 14%, transparent); color: var(--rv-text); border-bottom-left-radius: 6px; }
  .chat-bubble.typing { display: inline-flex; gap: 5px; padding: 14px 16px; }
  .chat-bubble.typing i { width: 7px; height: 7px; border-radius: 50%; background: var(--rv-muted); animation: chat-dot 1.2s infinite ease-in-out; }
  .chat-bubble.typing i:nth-child(2) { animation-delay: 0.15s; }
  .chat-bubble.typing i:nth-child(3) { animation-delay: 0.3s; }
  @keyframes chat-dot { 0%, 80%, 100% { opacity: 0.25; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }
  .chat-acts { display: grid; gap: 8px; width: 100%; min-width: min(300px, 80vw); }
  .chat-act { display: flex; align-items: center; gap: 10px; padding: 8px 8px 8px 10px; border-radius: 14px; border: 1.5px solid var(--rv-line); }
  .chat-act.done { opacity: 0.7; }
  .chat-act.failed { border-color: var(--rv-late, #e5484d); }
  .chat-act-ic { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; flex: none; background: var(--rv-accent-soft); color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-act-ic .i { width: 16px; height: 16px; }
  .chat-act-tx { flex: 1; min-width: 0; display: flex; flex-direction: column; font-size: 14.5px; font-weight: 600; }
  .chat-act-tx small { font-weight: 400; font-size: 12.5px; color: var(--rv-muted); }
  .chat-act-ok { font-size: 13px; font-weight: 600; color: var(--rv-muted); padding: 0 8px; }
  .chat-act .btn.sm { min-height: 36px; padding: 0 14px; gap: 6px; }
  .chat-act .btn.sm .i, .chat-all .i { width: 16px; height: 16px; }
  .chat-all { justify-self: start; }
  .chat-error { display: flex; gap: 8px; align-items: flex-start; font-size: 14px; color: var(--rv-late, #e5484d); }
  .chat-error .i { width: 18px; height: 18px; flex: none; }
  .chat-input { display: flex; align-items: flex-end; gap: 8px; padding-top: 10px; border-top: 1px solid var(--rv-line); }
  .chat-input textarea { flex: 1; min-width: 0; resize: none; max-height: 120px; min-height: 46px; padding: 12px 14px; border-radius: 16px; border: 1.5px solid var(--rv-line-strong, var(--rv-line)); background: var(--rv-input-bg, transparent); color: var(--rv-text); font: inherit; font-size: 16px; line-height: 1.35; field-sizing: content; }
  .chat-input textarea:focus { outline: none; border-color: var(--rv-accent); }
  .chat-input .icon-btn { width: 46px; height: 46px; flex: none; border-radius: 14px; }
  .chat-send { background: var(--rv-accent); color: var(--rv-on-accent, #fff); }
  .chat-send:disabled { opacity: 0.4; }
  .chat-mic.on { background: var(--rv-late, #e5484d); color: #fff; }
  .chat-qbtn.on, .chat-clip.on { background: var(--rv-accent-soft); color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-input textarea::placeholder { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .chat-menu { display: grid; gap: 2px; margin-top: 8px; padding: 6px; border-radius: 16px; border: 1.5px solid var(--rv-line); }
  .chat-op { display: flex; align-items: center; gap: 12px; min-height: 50px; padding: 0 12px; border-radius: 12px; font: inherit; font-size: 16px; color: var(--rv-text); text-align: left; background: none; border: 0; cursor: pointer; }
  .chat-op:active { background: var(--rv-accent-soft); }
  .chat-op .i { width: 20px; height: 20px; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-files { display: grid; gap: 6px; margin-top: 8px; }
  .chat-file { display: flex; align-items: center; gap: 10px; padding: 4px 4px 4px 6px; border-radius: 12px; border: 1.5px solid var(--rv-line); font-size: 14px; }
  .chat-file img, .chat-file .chat-pdf { width: 36px; height: 36px; border-radius: 8px; object-fit: cover; flex: none; display: grid; place-items: center; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-file-n { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .chat-file .icon-btn { width: 36px; height: 36px; flex: none; }
  .chat-arq { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 14px; }
  .chat-arq .i { width: 15px; height: 15px; flex: none; }
  .chat-quick { max-height: 42vh; overflow-y: auto; padding: 10px 2px; border-top: 1px solid var(--rv-line); }
  .chat-ed-open { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; }
  .chat-ed-open .i { width: 16px; height: 16px; }
  .chat-ed { display: grid; gap: 8px; color: var(--rv-text); }
  .chat-ed-h { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 15px; }
  .chat-ed-h .i { width: 18px; height: 18px; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-ed-row { display: flex; align-items: center; gap: 8px; padding: 4px 0 4px 12px; border-radius: 12px; border: 1.5px solid var(--rv-line); font-size: 14.5px; }
  .chat-ed-row span { flex: 1; min-width: 0; overflow-wrap: anywhere; }
  .chat-ed-row .icon-btn { width: 40px; height: 40px; flex: none; }
  .chat-ed-new { display: flex; gap: 8px; }
  .chat-ed-new input { flex: 1; min-width: 0; min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1.5px solid var(--rv-line-strong, var(--rv-line)); background: var(--rv-input-bg, transparent); color: var(--rv-text); font: inherit; font-size: 15px; }
  .chat-ed-new input:focus { outline: none; border-color: var(--rv-accent); }
  .chat-ed-acts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .chat-ed .btn.sm { min-height: 44px; justify-content: center; gap: 6px; }
  .chat-ed .btn.sm .i { width: 16px; height: 16px; }
`;var da=[["calendarios","/mais/calendarios","Calend\xE1rios","layers","Nome, cor e quais aparecem na agenda."],["rotinas","/mais/rotinas","Rotinas","repeat","Rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados."],["recompensas","/mais/recompensas","Recompensas","trophy","Placar, pr\xEAmio, dem\xE9ritos e lembrete."],["avisos","/mais/avisos","Avisos","bell-ring","Avisos de rem\xE9dio no celular, pessoas e pets."],["ferias","/mais/ferias","F\xE9rias","plane","Rotinas, tarefas e manuten\xE7\xE3o pausadas; rem\xE9dios continuam."],["config","/config","Configura\xE7\xF5es","sliders-horizontal","Integra\xE7\xF5es, dados, apar\xEAncia e op\xE7\xF5es."],["sobre","/mais/sobre","Sobre","info","CorrerIA Code, os apps e o GitHub."]],Dt=[["integracoes","Integra\xE7\xF5es","blocks"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"],["opcoes","Op\xE7\xF5es","toggle-right"]],fn=da.filter(([o])=>o!=="config").map(([o])=>o),ca=Dt.map(([o])=>o);function pa(o){let e=(o||"").replace(/\/+$/,"");if(e==="/calendario")return{name:"calendar"};if(e==="/recompensas")return{name:"rewards"};if(e==="/rotinas")return{name:"routines"};if(e==="/agendas")return{name:"more",tab:"calendarios"};if(e==="/config")return{name:"more",tab:ca[0],config:!0};let t=/^\/(mais|config)\/([a-z]+)$/.exec(e);return t&&t[2]==="placar"?{name:"more",tab:"recompensas"}:t&&ca.includes(t[2])?{name:"more",tab:t[2],config:!0}:t&&t[1]==="config"?{name:"more",tab:ca[0],config:!0}:t&&fn.includes(t[2])?{name:"more",tab:t[2]}:e==="/mais"||t&&t[1]==="mais"?{name:"more",tab:"menu"}:{name:"now"}}function es(o){return o.name==="calendar"?"/calendario":o.name==="rewards"?"/recompensas":o.name==="routines"?"/rotinas":o.name!=="more"?"":o.config?o.tab===ca[0]?"/config":`/config/${o.tab}`:o.tab==="menu"?"/mais":`/mais/${o.tab}`}var ha=o=>es(pa(o)),ua=o=>o.name==="more"&&o.tab!=="menu";function ts(o){if(o.config)return"Configura\xE7\xF5es";let e=da.find(([t])=>t===o.tab);return e?e[2]:"Mais"}function ho(o){return o.tab==="menu"?"Mais (o menu)":o.config?`Mais \u203A Configura\xE7\xF5es \u203A ${Dt.find(([e])=>e===o.tab)[1]}`:`Mais \u203A ${ts(o)}`}function uo(o=typeof window>"u"?null:window){let e={recompensas:"/recompensas",calendario:"/calendario",agora:"/"},t=a=>{let s=new URL(a.location.href),i=e[s.searchParams.get("aba")];return i?(s.searchParams.delete("aba"),a.history.replaceState(a.history.state,"",s.href),i):null};if(!o)return null;try{let a=t(o);if(a)return a;if(o.parent&&o.parent!==o)return t(o.parent)}catch{}return null}var mo=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,fo="cronologia-conversa",go=o=>`${o.slice(8,10)}/${o.slice(5,7)}`,gn=o=>{let[e,t]=o.split(":").map(Number),a=Math.min(1439,e*60+t+60);return`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`},vo=o=>class extends o{_chatState(){if(!this._chat){let e=[];try{e=JSON.parse(sessionStorage.getItem(fo)||"[]")}catch{}this._chat={messages:Array.isArray(e)?e:[],draft:"",busy:!1,error:"",rec:null,files:[]}}return this._chat}_setChat(e){if(this._chat={...this._chatState(),...e},"messages"in e)try{sessionStorage.setItem(fo,JSON.stringify(this._chat.messages.slice(-30)))}catch{}this.requestUpdate()}_renderChatBtn(){return!this._aiOn()||!(this._ai&&this._ai.ready)?m:n`<button class="mic-top chat-top" aria-label="Conversar com a IA" title="Conversar com a IA" @click=${()=>this._openChat()}>${mo("message-circle")}</button>`}_openChat(){this._openSheet("chat",{}),this._chatScroll=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".chat-input textarea");e&&window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&e.focus()})}_renderChatSheet(){let e=this._chatState(),t=this._voice||{};return co({lit:{html:n,nothing:m},icon:mo,app:"cronologia",onRedraw:()=>this.requestUpdate(),messages:e.messages,draft:e.draft,busy:e.busy,error:e.error,voice:{ready:!!t.ready&&!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),on:e.rec==="on",starting:e.rec==="starting"},examples:this._chatExamples(),onDraft:a=>this._setChat({draft:a}),onSend:a=>this._chatSend(a),onMic:()=>this._chatMic(),onAction:(a,s)=>this._chatDo(a,s),onAll:a=>this._chatDoAll(a),onClear:()=>this._setChat({messages:[],error:""}),onClose:()=>this._closeSheet(),files:e.files||[],onAttach:a=>this._chatAttach(a),onFileRemove:a=>this._setChat({files:(e.files||[]).filter((s,i)=>i!==a)})})}_chatAttach(e){if(e==="camera")return this._openCamera({chat:!0});let t=document.createElement("input");t.type="file",t.accept=e==="fotos"?"image/*":"image/*,application/pdf",t.multiple=e==="fotos"&&!this._isHaAndroid(),t.style.display="none",t.addEventListener("change",()=>{let a=Array.from(t.files||[]);t.remove(),a.length&&this._chatAddFiles(a)}),document.body.appendChild(t),t.click()}async _chatAddFiles(e){let{files:t,error:a}=await la(e,this._chatState().files||[]);this._setChat({files:t,error:a}),this._chatScroll=!0}_chatAddShots(e){let t=(this._chatState().files||[]).filter(s=>!s.pdf),a=[...t,...e.map((s,i)=>({nome:`Foto ${t.length+i+1}.jpg`,pdf:!1,mime:s.mime||"image/jpeg",data:s.data,url:s.url}))].slice(0,4);this._setChat({files:a,error:""}),this._sheet!=="chat"&&this._openChat()}_chatExamples(){let e=this._shownView?this._shownView():this._view();return e.name==="calendar"?["O que tenho esta semana?","Estou livre amanh\xE3 \xE0 tarde?"]:e.name==="rewards"?["Quem est\xE1 ganhando?","O que ainda d\xE1 pontos hoje?"]:["O que tenho hoje?","Por onde eu come\xE7o?","Marca dentista sexta \xE0s 15h"]}_chatScreen(){let e=this._shownView?this._shownView():this._view();if(e.name==="calendar"){let t=this._cursor?O(this._cursor):"";return`Calend\xE1rio${t?`, no dia ${go(t)}`:""}`}return e.name==="rewards"?"Recompensas (placar, pr\xEAmios e extrato)":e.name==="routines"?"Rotinas (rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados)":e.name==="more"?ho(e):"Agora (o dia de hoje: agenda, rem\xE9dios, rotinas e contas)"}_chatContext(){let e=new Date(this._now||Date.now()),t=R(e),a=this._view().name==="calendar"&&this._cursor&&this._cursor>t?R(this._cursor):t,s=this._ix(),i=h=>(this._cal(h)||{}).name||"",r=(this._events(a,z(a,8))||[]).filter(h=>!h.kind&&!h.todo&&!h.gerencia).sort((h,p)=>h.start-p.start).slice(0,80).map(h=>({titulo:h.summary||"",data:O(h.start),inicio:h.allDay?null:W(h.start),fim:h.allDay?null:W(h.end),calendario:i(h.cal)})),l=this._score?this._score():null,d=this._todos?this._todos():{items:[]},c=this._away&&this._away();return{tela:`${this._chatScreen()}${c&&this._awayNow()?`; a fam\xEDlia est\xE1 de f\xE9rias at\xE9 ${c.to} (rotinas, tarefas e manuten\xE7\xE3o pausadas)`:""}`,criar:!!this._defaultCal(),agenda:r,rotinas:(s.routines||[]).map(h=>({id:h.key,nome:h.summary,feito:!!h.done,pulada:!!(h.done&&h.done.skipped),periodo:(ge(h.period)||{}).label||"",hora:h.time||null,quem:h.who||"",pontos:h.points||0,atrasada:!h.done&&(h.late>0||!!h.yesterday)})),remedios:(s.meds||[]).map(h=>({id:h.key,nome:h.summary,hora:h.time||null,quem:h.who||"",dose:h.dose||"",estado:h.state||""})),contas:(this._billsList?this._billsList():[]).filter(h=>!h.paid).map(h=>({nome:h.title,valor:h.value==null?null:Number(h.value),vence:h.due,atrasada:!!h.overdue})),manutencao:(s.maint||[]).map(h=>({nome:h.summary,vence:h.due,estado:h.state})),placar:l&&this._scoreOn&&this._scoreOn()?(l.rows||[]).map(h=>({pessoa:h.name,pontos:h.points})):[],tarefas:(d&&d.items||[]).filter(h=>!h.done).slice(0,60).map(h=>({nome:h.summary,lista:h.listName||"",prazo:h.undated||!h.due?null:String(h.due).slice(0,10),atrasada:!!h.overdue}))}}async _chatSend(e){let t=this._chatState();if(t.busy)return;let a=t.files||[],s=a.length?{role:"user",text:e,anexos:a.map(r=>r.nome)}:{role:"user",text:e},i=[...t.messages,s];this._setChat({messages:i,draft:"",busy:!0,error:"",files:[]}),this._chatScroll=!0;try{let r={messages:i.map(c=>({role:c.role,text:c.text||(c.actions||[]).map(h=>h.label).join("; "),...c.anexos?{anexos:c.anexos}:{}})),context:this._chatContext()},l=a.length?await this.api.chat({...r,files:a.map(c=>({data:c.data,mime:c.mime,nome:c.nome}))}):await this.api.call("cronologia/ai/chat",r);for(let c of a)c.url&&URL.revokeObjectURL(c.url);let d=(l.actions||[]).map(c=>({...c,label:this._chatLabel(c),icon:c.tipo==="evento"?"calendar-plus":c.tipo==="tomei"?"pill":"check",state:"todo"}));this._setChat({messages:[...this._chatState().messages,{role:"ia",text:l.reply||"",actions:d}],busy:!1})}catch(r){this._setChat({busy:!1,error:r.message||"A IA n\xE3o respondeu. Tente de novo.",...a.length?{files:a,messages:this._chatState().messages.filter(l=>l!==s)}:{}})}this._chatScroll=!0}_chatLabel(e){return e.tipo==="evento"?`Marcar "${N(e.titulo,60)}" \xB7 ${go(e.data)}${e.inicio?` \xE0s ${e.inicio}`:""}`:e.tipo==="tomei"?`Tomei "${N(e.nome,60)}"${e.hora?` (${e.hora})`:""}`:`"${N(e.nome,60)}" feita`}_setAction(e,t,a){let s=this._chatState().messages.map((i,r)=>r===e?{...i,actions:i.actions.map((l,d)=>d===t?{...l,...a}:l)}:i);this._setChat({messages:s})}async _chatDo(e,t){let a=((this._chatState().messages[e]||{}).actions||[])[t];if(!a||a.state==="done"||a.state==="doing")return;this._setAction(e,t,{state:"doing",note:""});let s="";try{if(a.tipo==="evento"){let i=this._defaultCal();if(!i)throw new Error("Nenhum calend\xE1rio para criar eventos.");let r=this._eventFromForm({title:a.titulo,date:a.data,endDate:"",allDay:!a.inicio,start:a.inicio||"",end:a.inicio?a.fim||gn(a.inicio):"",repeat:"",rrule:"",location:"",notes:""});await this.api.createEvent(i,r),s=N((this._cal(i)||{}).name||"",30)}else await this.api.setCheck(a.id,!0,a.tipo==="tomei"?"remedio":"rotina");this._haptic&&this._haptic("success"),this._setAction(e,t,{state:"done",note:s})}catch(i){this._setAction(e,t,{state:"failed",note:i.message||"N\xE3o deu certo."})}}async _chatDoAll(e){let t=(this._chatState().messages[e]||{}).actions||[];for(let a=0;a<t.length;a++)t[a].state!=="done"&&await this._chatDo(e,a)}async _chatMic(){let e=this._chatState();if(e.rec==="on"){let a=this._chatRec;if(this._chatRec=null,clearTimeout(this._chatRecTimer),!a)return this._setChat({rec:null});let s=a.stop();if(this._setChat({rec:null}),s.length<16e3*.4)return this._setChat({error:"N\xE3o ouvi nada. Toque no microfone e fale."});this._setChat({busy:!0,error:""});try{let i=await this.api.voiceText(s);this._setChat({busy:!1}),i&&i.text&&this._chatSend(i.text)}catch(i){this._setChat({busy:!1,error:i.message||"N\xE3o consegui transcrever."})}return}if(e.rec)return;let t=new rt(()=>{});this._chatRec=t,this._setChat({rec:"starting",error:""});try{await t.start()}catch(a){return t.cancel(),this._chatRec=null,this._setChat({rec:null,error:ra(a)})}if(this._chatRec!==t)return t.cancel();this._setChat({rec:"on"}),this._chatRecTimer=setTimeout(()=>this._chatState().rec==="on"&&this._chatMic(),120*1e3)}_chatStop(){clearTimeout(this._chatRecTimer),this._chatRec&&this._chatRec.cancel(),this._chatRec=null,this._chat&&this._chat.rec&&(this._chat={...this._chat,rec:null})}_chatAfterRender(){if(!this._chatScroll||this._sheet!=="chat")return;this._chatScroll=!1;let e=this.renderRoot.querySelector(".chat-log");e&&(e.scrollTop=e.scrollHeight)}};var bo={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var is=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],vn=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var xo=o=>{let[e,t,a]=String(o).slice(0,10).split("-").map(Number);return new Date(e,t-1,a)};function lt(o,e,t){let a=typeof o=="string"?xo(o):o,s=typeof e=="string"?xo(e):e,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return t==="mes"?`${vn[a.getMonth()].replace(/^./,r=>r.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${is[i.getMonth()]}`:`${a.getDate()} ${is[a.getMonth()]} a ${i.getDate()} ${is[i.getMonth()]}`}var L=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,ma=o=>o.key==="Enter"&&!o.shiftKey&&o.preventDefault(),Mt=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],ve=o=>(o||"?").trim().charAt(0).toUpperCase(),xn={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},os={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},fa={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},bn={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},wn=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],wo=[2,3,5,10,20],ga={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},$o=5,yo=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),_o=o=>class extends o{_score(){return this._ix().score||null}_scoreOn(){let e=this._score();return!!(e&&e.enabled&&e.participants.length)}_scorePoints(e){if(!this._scoreOn())return 0;let t=e.kind;return t&&t.points>0?t.points:e.todo&&e.todo.points>0?e.todo.points:0}_participant(e){let t=this._score();if(!t||!e)return"";let a=C(e);return t.participants.find(s=>C(s)===a||C(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(e){let t=C(e||""),a=this._pColors();if(a.has(t))return a.get(t);let s=this._personCal(e);return s?s.color:ne(Mt[0])}_pColors(){let e=this._score(),t=e&&e.participants||[],a=this._cals?this._cals():[],s=this._pColorCache;if(s&&s.cals===a&&s.parts===t.join("|"))return s.map;let i=new Map,r=new Set;for(let d of t){let c=this._personCal(d);c&&(i.set(C(d),c.color),r.add(c.color.id))}let l=0;for(let d of t){if(i.has(C(d)))continue;for(;l<Mt.length-1&&r.has(Mt[l]);)l++;let c=Mt[l%Mt.length];i.set(C(d),ne(c)),r.add(c)}return this._pColorCache={cals:a,parts:t.join("|"),map:i},i}_personCal(e){let t=C(e||"").split(" ")[0];if(!t||!this._cals)return null;let a=this._cals().filter(s=>!s.hidden&&C(s.name).split(/[^a-z0-9]+/).includes(t));return a.length===1?a[0]:null}_me(){return this._user&&this._user.person||""}_pickWho(){return this._scoreOn()&&this._app("who_pick",!1)===!0}_pointsWho(e,t=""){let a=this._score(),s=a&&(a.entries||[]).find(i=>i.key===e);return s&&s.who||this._participant(t||"")||""}_renderWon(e,t){return e?n`<span class="won" style=${B(this._pColor(e),this._dark)} title="${e} ganhou ${t}" aria-label="${e} ganhou ${t} ${t===1?"ponto":"pontos"}"><span class="won-who">${ve(e)}</span>+${t}</span>`:n`<span class="pts got">+${t}</span>`}_panelHead(e,t,a,s="",{cls:i="",smallCls:r=""}={}){return n`<div class="chores-head sec-head ${i}"><span class="sec-ic ${t}">${L(e)}</span><span class="overline">${a}</span>${s?n`<small class=${r}>${s}</small>`:m}</div>`}_renderQuickWho(e,t,a){let i=(this._score()||{participants:[]}).participants.slice(0,4);return n`<div class="qwho" role="group" aria-label="Quem fez ${e}">
        ${i.map(r=>n`<button class="qw-btn" style=${B(this._pColor(r),this._dark)} aria-label="${r} fez ${e}${t>0?` (+${t})`:""}" title="${r} fez${t>0?` (+${t})`:""}" @click=${()=>a(r)}>${ve(r)}</button>`)}
      </div>`}_withWho(e,t,a,s=null){if(s)return a(s);if(!this._scoreOn()||!(e>0))return a("");let i=this._participant(this._me());return i?a(i):this._openSheet("who",{points:e,title:t,run:a})}_doneToast(e,t,a,{reassignKey:s,undo:i}){let r=this._scoreOn()&&t&&a>0?this._score().participants.filter(d=>C(d)!==C(t)):[],l=t&&a>0?`Feito por ${t} \xB7 +${a}`:`${N(e.summary,26)}: feito`;if(r.length===1&&s){let d=r[0];this._showToast(l,{label:`Foi ${d}`,run:()=>this.api.scoreReassign(s,d).then(()=>this._showToast(`Pontos para ${d}`)).catch(c=>this._showToast(c.message))})}else r.length>1&&s?this._showToast(l,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:e.summary,run:d=>this.api.scoreReassign(s,d).then(()=>this._closeSheet())})}):this._showToast(l,i?{label:"Desfazer",run:i}:null)}_markDone(e,t,a=null){return t==="rotina"&&this._view().name==="now"&&(this._choresHold=!0),this._withWho(e.points||0,e.summary,async s=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,t,s),this._haptic("success"),this._doneToast(e,s,e.points||0,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,t).catch(i=>this._showToast(i.message))})}catch(i){this._showToast(`N\xE3o consegui marcar: ${i.message}`)}},a)}_maintDone(e,t=null,a=!1){return this._withWho(e.points||0,e.summary,async s=>{this._sheet&&(!a||this._sheet==="who")&&await this._closeSheet();try{let i=await this.api.maintDone(e.cal,e.uid,s);this._haptic("success");let r=i&&i.next?`Pr\xF3xima em ${ee(q(i.next),new Date(this._now))}`:"";i&&i.key?this._doneToast(e,s,e.points,{reassignKey:i.key}):this._showToast(r?`Feito. ${r}`:"Feito",i&&i.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(l=>this._showToast(l.message))}:null)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}},t)}async _maintSkip(e){this._sheet&&await this._closeSheet();try{let t=await this.api.maintSkip(e.cal,e.uid);this._haptic("light");let a=t&&t.next?`, pr\xF3xima em ${ee(q(t.next),new Date(this._now))}`:"",s=t&&t.undo?()=>this.api.maintUndo(e.cal,e.uid):t&&t.key?()=>this.api.setCheck(t.key,!1,"manutencao"):null;this._showToast(`${N(e.summary,24)}: pulada${a}`,s?{label:"Desfazer",run:()=>s().catch(i=>this._showToast(i.message))}:null)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}_renderWhoButtons(e,t){let a=this._score()||{participants:[]};return n`<div class="field who-act">
        <span class="flabel">Quem fez?${e>0?n` <b>+${e}</b>`:m}</span>
        <div class="who-grid inline">
          ${a.participants.map(s=>n`<button class="who-btn" style=${B(this._pColor(s),this._dark)} @click=${()=>t(s)}><span class="avatar">${ve(s)}</span><b>${s}</b></button>`)}
        </div>
      </div>`}_renderWhoSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${N(e.title||"",40)}${e.points?n` · <b>+${e.points} pontos</b>`:m}</p>
        <div class="who-grid">
          ${t.participants.map(a=>n`<button class="who-btn" style=${B(this._pColor(a),this._dark)} @click=${()=>e.run(a)}>
              <span class="avatar xl">${ve(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>e.run("")}>${L("x")}Ninguém do placar (sem pontos)</button>`}_renderRewards(){let e=this._score();if(!e||!e.enabled||!e.participants.length)return this._renderRoutinesTab();let t=new Date(this._now),a=e.current,s=K(q(a.end),t),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${P(s,"dia","dias")}`,r=e.leader,l=e.rows.reduce((d,c)=>d+c.points,0);return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${X(xn[e.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(e)}
        <div class="panel board">
          ${e.rows.length===2?this._renderDuel(e,l):this._renderRanking(e)}
          <div class="board-foot">${r?n`${L("crown")}<span><b>${r}</b> na frente${e.rows[1]?` por ${P(e.rows[0].points-e.rows[1].points,"ponto","pontos")}`:""}</span>`:n`<span>${l?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(e)}
        ${e.manual?this._renderToScore():m}
        ${this._renderDemerits(e)}
        ${this._renderExtrato(e)}
        ${this._renderHistory(e)}
      </section>`}_renderDuel(e,t){let[a,s]=e.participants.map(c=>e.rows.find(h=>h.name===c)||{name:c,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),r=a.points-i+(s.points-i),l=r?(a.points-i)/r:.5,d=(c,h)=>n`<div class="duel-side ${h?"right":""} ${e.leader===c.name?"lead":""}" style=${B(this._pColor(c.name),this._dark)}>
        <span class="avatar xl">${ve(c.name)}${e.leader===c.name?n`<span class="crown">${L("crown")}</span>`:m}</span>
        <b class="duel-name">${c.name}</b>
        <span class="duel-pts">${c.points}</span>
        <small>${P(c.count,"tarefa","tarefas")}${c.demerits?n` · <span class="neg-text">${P(c.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:m}</small>
      </div>`;return n`<div class="duel">
          ${d(a,!1)}
          <span class="duel-x">×</span>
          ${d(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(l*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(e){let t=Math.max(1,...e.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/t*100).toFixed(1);return n`<div class="ranking">
        ${e.rows.map((s,i)=>n`<div class="rank-row ${e.leader===s.name?"lead":""}" style=${B(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${ve(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(e){let t=e.history&&e.history[0];if(!t||t.delivered)return m;let a=new Date(this._now);if(K(a,q(t.end))>14)return m;let s=Object.values(t.totals||{}).join(" \xD7 ");return n`<div class="result-card ${t.winner?"":"tie"}" style=${t.winner?B(this._pColor(t.winner),this._dark):""}>
        <span class="result-ic">${L("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${bn[e.period]} · ${lt(t.start,t.end,e.period)}</span>
          <b>${t.winner?`${t.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${t.reward?n`<small>${t.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${t.reward}</small>`:m}
        </div>
        ${t.winner&&t.reward?n`<button class="dose-btn agora" @click=${()=>this._setDelivered(t.key,!0)}>${L("check")}Entregue</button>`:n`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(t.key,!0)}>${L("x")}</button>`}
      </div>`}_renderPrize(e){let t=e.current,a=e.next,s=d=>Object.keys(d.prizes||{}).length>0,i=(d,c)=>d.prizes&&d.prizes[c]||d.reward||"",r=s(t)||!!t.reward,l=s(a)||!!a.reward;return n`<div class="panel prize ${r?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${L("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${s(t)?"Pr\xEAmios":"Pr\xEAmio"} ${os[e.period]}</span>
            ${s(t)?m:t.reward?n`<b>${t.reward}</b>`:n`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${()=>this._openPrize("current")}>${L(r?"pencil":"plus")}${r?"Mudar":"Definir"}</button>
        </div>
        ${s(t)?n`<div class="prize-people">
              ${e.participants.map(d=>{let c=i(t,d);return n`<div class="prize-person ${e.leader===d?"lead":""}" style=${B(this._pColor(d),this._dark)}>
                  <span class="avatar sm2">${ve(d)}</span>
                  <span class="pp-tx"><small>Se ${d} vencer</small>${c?n`<b>${c}</b>`:n`<i>ainda livre</i>`}</span>
                  ${e.leader===d?n`<span class="pp-lead">${L("crown")}</span>`:m}
                </div>`})}
            </div>`:m}
        <div class="prize-next">
          <span>${L("gift")}<span>${s(a)?n`${X(fa[e.period].replace(/^d[ao] /,""))}: <b>${e.participants.map(d=>`${d}: ${i(a,d)||"livre"}`).join(" \xB7 ")}</b>`:a.reward?n`Prêmio ${fa[e.period]}: <b>${a.reward}</b>`:`Pr\xEAmio ${fa[e.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${()=>this._openPrize("next")}>${L(l?"pencil":"plus")}${l?"Mudar":"Definir"}</button>
        </div>
      </div>`}_openPrize(e){let t=this._score(),a=e==="next"?t.next:t.current,s=a.prizes||{},i=Object.keys(s).length>0;this._openSheet("prize",{which:e,key:a.key,label:a.label,mode:i?"cada":"todos",shared:a.reward||"",per:Object.fromEntries(t.participants.map(r=>[r,s[r]||(i?"":a.reward||"")]))})}async _savePrize(){let e=this._form,t=e.mode==="todos"?(e.shared||"").trim():"",a=e.mode==="cada"?Object.fromEntries(Object.entries(e.per||{}).map(([s,i])=>[s,(i||"").trim()]).filter(([,s])=>s)):{};await this._closeSheet();try{await this.api.scorePrizes(e.key,t,a),this._haptic("success"),this._showToast(t||Object.keys(a).length?Object.keys(a).length?"Pr\xEAmios salvos":"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(s){this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_renderPrizeSheet(){let e=this._form,t=this._score(),a=["Ex.: jantar fora","Ex.: massagem","Ex.: escolher o filme","Ex.: folga da lou\xE7a"];return n`${this._sheetHead(`Pr\xEAmio ${e.which==="next"?fa[t.period]:os[t.period]}`)}
        <p class="sheet-note top">${X(e.label||"")}</p>
        <div class="seg" role="radiogroup" aria-label="Tipo de prêmio">
          ${[["todos","O mesmo para todos"],["cada","Um para cada pessoa"]].map(([s,i])=>n`<button class=${e.mode===s?"on":""} role="radio" aria-checked=${e.mode===s?"true":"false"} @click=${()=>this._setForm({mode:s})}>${i}</button>`)}
        </div>
        ${e.mode==="todos"?n`<label class="field" style="margin-top:14px">
              <span class="flabel">Quem fizer mais pontos ganha</span>
              <textarea class="grow" rows="1" .value=${e.shared||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @keydown=${ma} @input=${s=>this._setForm({shared:s.target.value})}></textarea>
            </label>`:n`${t.participants.map((s,i)=>n`<label class="field" style=${i?"":"margin-top:14px"}>
                  <span class="flabel">Se ${s} vencer</span>
                  <textarea class="grow" rows="1" .value=${e.per&&e.per[s]||""} placeholder=${a[i%a.length]} maxlength="200" @keydown=${ma} @input=${r=>this._setForm({per:{...this._form.per,[s]:r.target.value}})}></textarea>
                </label>`)}
              <span class="field-hint">${L("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${L("x")}Cancelar</button>
          <button class="btn primary" @click=${()=>this._savePrize()}>${L("check")}Salvar</button>
        </div>`}async _setDelivered(e,t){try{await this.api.scoreDelivered(e,t),t&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderFutureScore(e,t,a){let s=this._ix(),i=O(t),r=new Set(e.map(c=>`${c.cal}|${c.uid}`)),l=(s.catalog||[]).filter(c=>c.kind==="rotina"&&c.points>0&&!c.late&&c.next>i&&!r.has(`${c.cal}|${c.uid}`)&&!this._checkOf(c)).sort((c,h)=>c.next.localeCompare(h.next)||c.summary.localeCompare(h.summary,"pt-BR"));if(!l.length)return m;let d=!!this._futureOpen;return n`<button class="add-line done-fold future-fold" aria-expanded=${d?"true":"false"} @click=${()=>(this._futureOpen=!d,this.requestUpdate())}>
          ${L(d?"chevron-down":"chevron-right")}<span>Próximas rotinas (${l.length})</span>
        </button>
        ${d?n`<p class="future-note">Fez antes do dia? Marque aqui.</p>
              ${ae(l,c=>c.key,c=>{let h={key:c.key,summary:c.summary,points:c.points},p=J(q(c.next),t,{long:!1,cap:!1});return n`<div class="chore future">
                  <button class="chk" @click=${()=>this._markDone(h,"rotina")} aria-label="Marcar ${c.summary} como feita hoje"></button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(c)}><b>${c.summary}</b><small>${a?n`<span class="pts-inline">+${c.points}</span> · `:m}${[p,c.after?`volta ${ce(c.after)} depois`:"",c.who].filter(Boolean).join(" \xB7 ")}</small></button>
                  ${a?this._renderQuickWho(c.summary,c.points,u=>this._markDone(h,"rotina",u)):n`<span class="pts">+${c.points}</span>`}
                </div>`})}`:m}`}_renderToScore(){let e=this._ix(),t=new Date(this._now),a=(e.routines||[]).filter(u=>u.points>0),s=this._awayNow&&this._awayNow()?this._away():null,i=s?[]:(e.maint||[]).filter(u=>u.points>0&&u.state!=="ok"),r=s?[]:this._todos().items.filter(u=>u.points>0&&(u.undated||(u.done?u.days===0:u.overdue||u.days===0))),l=a.filter(u=>u.done).length+r.filter(u=>u.done).length,d=a.length+r.length,c=this._pickWho(),h=At(a.filter(u=>!u.done),t),p=r.filter(u=>!u.done);return n`<div class="panel chores score-today">
        ${this._panelHead("star","ok","Para pontuar hoje",d?`${l} de ${d}`:"")}
        ${ae(h,u=>u.key,u=>n`<div class="chore">
            <button class="chk" @click=${()=>this._markDone(u,"rotina")} aria-label="Marcar ${u.summary}"></button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(u)}><b>${u.summary}</b><small class=${Xa(u,t)?"late":""}>${c?n`<span class="pts-inline">+${u.points}</span> · `:m}${Ga(u,t)}</small></button>
            ${c?this._renderQuickWho(u.summary,u.points,f=>this._markDone(u,"rotina",f)):n`<span class="pts">+${u.points}</span>`}
          </div>`)}
        ${ae(p,u=>u.key,u=>n`<div class="chore">
            <button class="chk sq" @click=${()=>this._todoDone(u,!0)} aria-label="Concluir ${u.summary}"></button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:u.key})}><b>${u.summary}</b><small>${c?n`<span class="pts-inline">+${u.points}</span> · `:m}${u.undated?"sem prazo":u.overdue?"atrasada":"hoje"} · ${u.listName} · ResolvIA</small></button>
            ${c?this._renderQuickWho(u.summary,u.points,f=>this._todoDone(u,!0,f)):n`<span class="pts">+${u.points}</span>`}
          </div>`)}
        ${ae(i,u=>u.key,u=>n`<div class="chore maint-score">
            <span class="chk wrench ${u.state}">${L("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(u)}><b>${u.summary}</b><small>${c?n`<span class="pts-inline">+${u.points}</span> · `:m}${u.days<0?`venceu h\xE1 ${P(-u.days,"dia","dias")}`:u.days===0?"\xE9 hoje":`em ${P(u.days,"dia","dias")}`} · manutenção</small></button>
            ${c?this._renderQuickWho(u.summary,u.points,f=>this._maintDone(u,f)):n`<button class="pts btn-pts" @click=${()=>this._maintDone(u)}>+${u.points}</button>`}
          </div>`)}
        ${d&&!h.length&&!p.length&&!i.length?n`<p class="empty-line all-done">${L("circle-check")}Tudo pontuado hoje.</p>`:m}
        ${s?n`<p class="empty-line away-line">${L("plane")}<span><b>De férias até ${J(q(s.to),t,{long:!1,cap:!1})}</b>: rotinas, tarefas e manutenção pausadas.</span></p>`:n`${this._renderFutureScore(a,t,c)}
            ${!a.length&&!i.length&&!r.length?n`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Adicionar › Rotina</b> ou <b>Manutenção</b>${this._resolviaOn()?", ou a uma tarefa no ResolvIA":""}.</p>`:m}`}
        ${s?m:n`<div class="score-actions">
              <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${L("plus")}Tarefa com pontos</button>
              <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${L("award")}Pontos avulsos</button>
            </div>`}
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(e){await this._saveAppPrefs({demerits:e.length?e:null})}async _addDemerit(e,t){await this._saveDemerits([...this._demerits(),{id:yo(),title:e,points:t}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${N(e,28)} \xB7 \u2212${t}`)}async _markDemerit(e,t){try{let a=await this.api.scoreDemerit(e.id,t);this._haptic("warning"),this._showToast(`\u2212${e.points} para ${t}: ${N(e.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(e=null){this._openSheet("demerit",e?{id:e.id,title:e.title,points:e.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let e=this._form,t=(e.title||"").trim(),a=Math.round(Math.abs(Number(e.points)||0));if(!t||a<1)return;let s=this._demerits(),i=e.id?s.map(r=>r.id===e.id?{...r,title:t,points:a}:r):[...s,{id:yo(),title:t,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(e.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${N(t,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let e=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${N(e.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(t=>t.id!==e.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(e){let t=this._demerits();if(!t.length)return m;let a=i=>{let r={};for(let l of e.entries)l.kind==="demerito"&&String(l.key).startsWith(`demerito|${i.id}|`)&&(r[l.who]=(r[l.who]||0)+1);return Object.entries(r).map(([l,d])=>`${l} ${d}\xD7`).join(" \xB7 ")},s=e.entries.filter(i=>i.kind==="demerito").length;return this._awayNow&&this._awayNow()?n`<div class="panel chores demerits paused" id="demeritos">
          ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${P(s,"vez","vezes")} ${ga[e.period]}`:"tiram pontos")}
          <p class="dm-lead dm-away">${L("plane")}<span>Pausados nas férias.</span></p>
        </div>`:n`<div class="panel chores demerits" id="demeritos">
        ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${P(s,"vez","vezes")} ${ga[e.period]}`:"tiram pontos")}
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${ae(t,i=>i.id,i=>{let r=a(i);return n`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${i.title}</b>${r?n`<small>${r} ${ga[e.period]}</small>`:m}</div>
                <span class="pts neg">−${i.points}</span>
              </div>
              <div class="dm-who">
                ${e.participants.map(l=>n`<button class="dm-btn" style=${B(this._pColor(l),this._dark)} aria-label="${i.title}: descontar de ${l}" @click=${()=>this._markDemerit(i,l)}>
                    <span class="avatar sm2">${ve(l)}</span><span>${l}</span>
                  </button>`)}
              </div>
            </div>`})}
      </div>`}_renderDemeritsSettings(){let e=this._demerits();return n`<div class="panel chores demerits-set" id="demeritos-ajustes">
        ${this._secHead("thumbs-down","Dem\xE9ritos","O que tira pontos de quem fizer.")}
        ${e.length?ae(e,t=>t.id,t=>n`<button class="demerit dm-edit" @click=${()=>this._openDemeritForm(t)}>
                <span class="dm-tx"><b>${t.title}</b></span>
                <span class="pts neg">−${t.points}</span>
                ${L("chevron-right")}
              </button>`):n`<div class="chip-row dm-ideas">${wn.map(([t,a])=>n`<button class="pick" @click=${()=>this._addDemerit(t,a)}>${L("plus")}<span>${t} −${a}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${L("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let e=this._form,t=Number(e.points)||0,a=e.custom||t>0&&!wo.includes(t);return n`${this._sheetHead(e.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <textarea class="grow" rows="1" .value=${e.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @keydown=${ma} @input=${s=>this._setForm({title:s.target.value})}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row c4">
            ${wo.map(s=>n`<button class="pick ${t===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>${L("pencil")}<span>Outro</span></button>
          </div>
          ${a?n`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(t||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:m}
        </div>
        <div class="sheet-actions">
          ${e.mode==="edit"?n`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${L("trash")}Apagar</button>`:n`<button class="btn outline" @click=${()=>this._closeSheet()}>${L("x")}Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(e.title||"").trim()||!(t>0)} @click=${()=>this._saveDemeritForm()}>${L(e.mode==="edit"?"check":"plus")}${e.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}async _removePoints(e){try{await this.api.scoreRemove(e.key);let t=()=>this.api.scoreRestore(e.key).catch(a=>this._showToast(a.message));this._showToast(e.points<0?`${N(e.title,26)}: dem\xE9rito tirado`:`${N(e.title,26)}: pontos de ${e.who.split(" ")[0]} tirados`,{label:"Desfazer",run:t})}catch(t){this._showToast(t.message)}}_renderExtraSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda.</p>
        <label class="field"><span class="flabel">O que foi feito</span><textarea class="grow" rows="1" id="ex-title" .value=${e.title} placeholder="Ex.: Lavou o carro" maxlength="120" @keydown=${ma} @input=${a=>this._setForm({title:a.target.value})}></textarea></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${t.participants.map(a=>n`<button class="pick person ${e.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${ve(a)}</span><span>${a}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row c3">
            ${[5,10,20,30,50].map(a=>n`<button class="pick ${Number(e.points)===a?"on":""}" @click=${()=>this._setForm({points:a})}>+${a}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(e.points)} aria-label="Outro valor" @input=${a=>this._setForm({points:a.target.value})} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${L("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${!e.who||!(e.title||"").trim()||!Number(e.points)} @click=${()=>this._saveExtra()}>${L("trophy")}Dar ${Number(e.points)||0} pontos</button>
        </div>`}async _saveExtra(){let e=this._form;try{await this.api.scoreExtra(e.who,Number(e.points),e.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${e.points} para ${e.who}`)}catch(t){this._showToast(t.message)}}_renderHistory(e){let t=e.history||[];if(!t.length)return m;let a=t.slice(0,10),s={};for(let i of t)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return n`<div class="panel history">
        ${this._panelHead("archive","muted","Hist\xF3rico",Object.entries(s).map(([i,r])=>`${i} ${r}`).join(" \xB7 "))}
        ${ae(a,i=>i.key,i=>n`<div class="hist-row">
            <button class="hist-open" aria-label="Extrato de ${lt(i.start,i.end,e.period)}" @click=${()=>this._openPeriodLog(i)}>
              <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?B(this._pColor(i.winner),this._dark):""}>${i.winner?ve(i.winner):"="}</span>
              <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${lt(i.start,i.end,e.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
              ${L("chevron-right")}
            </button>
            ${i.reward&&i.winner?n`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${L(i.delivered?"check":"gift")}</button>`:m}
          </div>`)}
      </div>`}_renderExtrato(e){this._extFor!==e.current.key&&(this._extFor=e.current.key,this._extMore=[],this._extEnd=!1,this._extOpen=!1);let t=e.log||[],a=t.length?Math.min(...t.map(c=>c.id)):1/0,s=[...t,...(this._extMore||[]).filter(c=>c.id<a)],i=Math.max(e.log_count||0,s.length),r=!!this._extOpen,l=r?s:s.slice(0,$o),d=r?t.length&&!this._extEnd&&s.length<i:i>l.length;return n`<div class="panel extrato">
        ${this._panelHead("file-text","accent",`Extrato ${os[e.period]}`,s.length?P(i,"mudan\xE7a","mudan\xE7as"):"")}
        ${s.length?this._extRows(l,e,new Map((e.entries||[]).map(c=>[c.key,c]))):n`<p class="empty-line">Nada mexeu nos pontos ${ga[e.period]} ainda.</p>`}
        ${d||r?n`<div class="ext-more">
              ${d?n`<button class="add-line" ?disabled=${this._extBusy} @click=${()=>r?this._loadExtrato(Math.min(...s.map(c=>c.id)),e.current):(this._extOpen=!0,this.requestUpdate())}>
                    ${L("chevron-down")}${this._extBusy?"Carregando\u2026":`Ver mais (${i-l.length})`}
                  </button>`:m}
              ${r&&s.length>$o?n`<button class="add-line less" @click=${c=>this._closeExtrato(c)}>${L("chevron-up")}Ver menos</button>`:m}
            </div>`:m}
      </div>`}_closeExtrato(e){let t=e.currentTarget.closest(".extrato");this._extOpen=!1,this._extMore=[],this._extEnd=!1,this.requestUpdate(),this.updateComplete.then(()=>{t&&t.getBoundingClientRect().top<0&&t.scrollIntoView({block:"start",behavior:"smooth"})})}_extRows(e,t,a=null){let s=new Date(this._now),i=c=>{let h=new Date(c),p=K(h,s);return p===0?"Hoje":p===-1?"Ontem":`${X(Bt[h.getDay()])}, ${ee(h,s)}`},r=new Set,l=[],d="";for(let c of e){let h=i(c.at);h!==d&&l.push(n`<div class="ext-day">${h}</div>`),d=h;let p=a&&c.key&&!r.has(c.key)&&["ganhou","perdeu","trocou","voltou","ajuste"].includes(c.type)?a.get(c.key):null;c.key&&r.add(c.key),l.push(this._renderExtLine(c,t,p,!!a))}return l}async _loadExtrato(e,t){this._extBusy=!0,this.requestUpdate();try{let a=await this.api.scoreLog(e,40,t.start,t.end)||[],s=new Set((this._extMore||[]).map(i=>i.id));this._extMore=[...this._extMore||[],...a.filter(i=>!s.has(i.id))],a.length<40&&(this._extEnd=!0)}catch(a){this._showToast(a.message)}this._extBusy=!1,this.requestUpdate()}async _openPeriodLog(e){await this._openSheet("periodlog",{period:e,lines:null,end:!1,busy:!0}),this._morePeriodLog()}async _morePeriodLog(){let e=this._form;if(!e||!e.period)return;let t=e.period;this._setForm({busy:!0});try{let a=e.lines&&e.lines.length?Math.min(...e.lines.map(i=>i.id)):0,s=await this.api.scoreLog(a,60,t.start,t.end)||[];if(!this._form||this._form.period!==t)return;this._setForm({lines:[...this._form.lines||[],...s],end:s.length<60,busy:!1})}catch(a){this._form&&this._form.period===t&&this._setForm({busy:!1,lines:this._form.lines||[],end:!0}),this._showToast(a.message)}}_renderPeriodLogSheet(){let e=this._form,t=this._score()||{},a=e.period,s=Object.entries(a.totals||{});return n`${this._sheetHead(`Extrato \xB7 ${lt(a.start,a.end,t.period)}`)}
        <div class="plog-result">
          <span class="hist-ic ${a.winner?"":"tie"}" style=${a.winner?B(this._pColor(a.winner),this._dark):""}>${a.winner?ve(a.winner):"="}</span>
          <span class="hist-tx"><b>${a.winner?`${a.winner} venceu`:"Empate"}</b><small>${s.map(([i,r])=>`${i} ${r}`).join(" \xD7 ")}${a.reward?` \xB7 ${a.reward}`:""}</small></span>
        </div>
        <div class="extrato plog">
          ${e.lines==null?n`<p class="empty-line">Carregando…</p>`:e.lines.length?this._extRows(e.lines,t):n`<p class="empty-line">Nada registrado nesse período.</p>`}
          ${e.lines&&e.lines.length&&!e.end?n`<button class="add-line" ?disabled=${e.busy} @click=${()=>this._morePeriodLog()}>${L("chevron-down")}${e.busy?"Carregando\u2026":"Ver mais"}</button>`:m}
        </div>`}_extText(e){let t=(p,u)=>C(p||"").split(" ")[0]===C(u||"").split(" ")[0],a=e.who||"",s=e.by&&!t(e.by,a)?e.by:"",i=!!e.by&&!s,r=Math.abs(e.points||0),l=P(r,"ponto","pontos"),d=e.via==="ResolvIA"?" no ResolvIA":e.via==="Automa\xE7\xE3o"?" por automa\xE7\xE3o":["Claude","Gemini","WhatsApp","CorrerIA"].includes(e.via)?` pelo ${e.via}`:"",c=e.title||"",h=e.kind==="extra"?"Avulso: ":e.kind==="demerito"?"Dem\xE9rito: ":e.kind==="manutencao"?"Manuten\xE7\xE3o: ":e.kind==="tarefa"?"Tarefa do ResolvIA: ":"";switch(e.type){case"ganhou":return[`${a} ganhou ${l}${s?`, marcado por ${s}`:""}${d}`,`${h}${c}`];case"perdeu":return[s?`${s} tirou ${l} de ${a}${d}`:`${a} perdeu ${l}${d}`,`${h}${c}`];case"tirou":return e.points>0?[s?`${s} devolveu ${l} para ${a}`:`${a} recebeu ${l} de volta`,`Dem\xE9rito cancelado: ${c}`]:[s?`${s} tirou ${l} de ${a}`:i?`${a} tirou os pr\xF3prios ${l}`:`${a} perdeu ${l}`,`Pontos cancelados: ${c}`];case"desmarcou":return[`${a} ${e.points>0?"recebeu de volta":"perdeu"} ${l}${s?`, desmarcado por ${s}`:i?" ao desmarcar":d?`, reaberto${d}`:""}`,`Desmarcado: ${c}`];case"trocou":return[`${l} passaram de ${e.from||"?"} para ${a}${s?`, por ${s}`:""}${d}`,c];case"voltou":return[e.points<0?`${a} perdeu ${l} de novo${s?`, ${s} desfez`:""}`:s?`${s} desfez: ${l} voltaram para ${a}`:`${l} voltaram para ${a}`,`Desfeito: ${c}`];case"ajuste":return[`${a} ${e.points>0?"ganhou mais":"perdeu"} ${l}${s?`, por ${s}`:""}`,`Pontos mudaram: ${c}`];default:return[`${a} ${e.points<0?"perdeu":"ganhou"} ${l}`,c]}}_renderExtLine(e,t,a,s=!0){let i=W(new Date(e.at));if(e.type==="fechou"){let c=Object.values(e.totals||{}).join(" \xD7 ");return n`<div class="ext-row closed">
          <span class="hist-ic" style=${e.winner?B(this._pColor(e.winner),this._dark):""}>${L("trophy")}</span>
          <span class="feed-tx"><b>${e.winner?`${e.winner} venceu`:"Empate"}${c?` \xB7 ${c}`:""}</b><small>Fechou: ${e.period?lt(e.period.start,e.period.end,t.period):""}${e.reward&&e.winner?` \xB7 ${e.reward}`:""} · ${i}</small></span>
        </div>`}let[r,l]=this._extText(e),d=Math.abs(e.points||0);return n`<div class="ext-row" style=${B(this._pColor(e.who),this._dark)}>
        <span class="avatar sm2">${ve(e.who)}</span>
        <span class="feed-tx"><b>${r}</b><small>${l?`${l} \xB7 `:""}${i}</small></span>
        ${e.type==="trocou"?n`<span class="pts swap" title="Passaram de ${e.from} para ${e.who}">${L("repeat")}${d}</span>`:n`<span class="pts ${e.points<0?"neg":"got"}">${e.points>0?"+":e.points<0?"\u2212":""}${d}</span>`}
        ${a?n`<button class="icon-btn mini" aria-label="${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"}: ${a.title}" title=${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"} @click=${()=>this._removePoints(a)}>${L("x")}</button>`:s?n`<span class="ext-x-gap"></span>`:m}
      </div>`}_scorePrefs(e){let t=this._score()||{},a={enabled:!!t.enabled,participants:t.participants||[],period:t.period||"semana",anchor:t.anchor||O(new Date),notify:t.notify!==!1,manual:!!t.manual,remind:t.remind||null,remind_to:Array.isArray(t.remind_to)?t.remind_to:null};return this._saveAppPrefs({score:{...a,...e}})}_renderScoreSettings(){let e=this._score(),t=!!(e&&e.enabled&&e.participants.length),a=e&&e.participants&&e.participants.length?e.participants:(this._ix().people||[]).filter(i=>i.person&&!i.pet).map(i=>i.name),s=n`<div class="row switch-row">
        <div class="grow"><div class="label">Usar recompensas</div><div class="hint">${t||a.length?"Placar da casa, pr\xEAmio e dem\xE9ritos.":"Sem pessoas no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${t} ?disabled=${!t&&!a.length} @change=${i=>this._scorePrefs(i.target.checked?{enabled:!0,participants:a,anchor:O(new Date)}:{enabled:!1})} aria-label="Usar recompensas" /><span class="track"></span></label>
      </div>`;return t?n`${this._renderScoreSettingsPanel(e,s)} ${this._renderDemeritsSettings()}`:n`<div class="panel score-set" id="placar">${this._secHead("trophy","Placar")}${s}</div>`}_renderScoreSettingsPanel(e,t){let a=(this._ix().people||[]).filter(i=>!i.pet).map(i=>i.name),s=[...new Set([...e.participants,...a])];return n`<div class="panel score-set" id="placar">
        ${this._secHead("trophy","Placar")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${s.map(i=>{let r=e.participants.includes(i);return n`<button class="pick person ${r?"on":""}" aria-pressed=${r?"true":"false"} @click=${()=>this._scorePrefs({participants:r?e.participants.filter(l=>l!==i):[...e.participants,i]})}><span class="avatar sm">${ve(i)}</span><span>${i}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(bo).map(([i,r])=>n`<button class=${e.period===i?"on":""} @click=${()=>this._scorePrefs({period:i,anchor:O(new Date)})}>${L({semana:"calendar-days",quinzena:"calendar-range",mes:"calendar"}[i]||"calendar")}<span>${r.label}</span></button>`)}</div>
          <span class="field-hint">${L("info")}<span>${e.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",1)===1?"na segunda":"no domingo"}.`}</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar pontos em Recompensas</div><div class="hint">O card <b>Para pontuar hoje</b>.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!e.manual} @change=${i=>this._scorePrefs({manual:i.target.checked})} aria-label="Marcar pontos em Recompensas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar por outras pessoas</div><div class="hint" style="white-space:normal">As iniciais de cada pessoa ao lado das tarefas.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("who_pick",!1)===!0} @change=${i=>this._saveAppPrefs({who_pick:i.target.checked?!0:null})} aria-label="Marcar por outras pessoas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quem venceu, quando o período fecha.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e.notify!==!1} @change=${i=>this._scorePrefs({notify:i.target.checked})} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Lembrete diário</div><div class="hint">Os pontos e quem está ganhando, no celular.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!e.remind} @change=${i=>this._scorePrefs({remind:i.target.checked?"20:00":null})} aria-label="Lembrete diário" /><span class="track"></span></label>
        </div>
        ${e.remind?n`<div class="sub-op"><div class="sub-box">${this._renderScoreRemind(e)}</div></div>`:m}
        </div></div>
      </div>`}_renderScoreRemind(e){let t=Object.fromEntries(ze.map(p=>[p.id,p.at])),a=Ge(Number(e.remind.slice(0,2))),s=this._ix().people||[],i=p=>!!(s.find(u=>C(u.name)===C(p))||{}).reach,r=Array.isArray(e.remind_to)?e.participants.filter(p=>e.remind_to.includes(p)):e.participants,l=r.filter(p=>!i(p)),d=p=>p.length>1?`${p.slice(0,-1).join(", ")} e ${p.at(-1)}`:p[0],c=i(this._me?this._me():""),h=p=>{let u=r.includes(p)?r.filter(f=>f!==p):e.participants.filter(f=>f===p||r.includes(f));this._scorePrefs({remind_to:u.length===e.participants.length?null:u})};return n`<div class="field remind-field">
        <span class="flabel">Quando</span>
        <div class="seg remind-seg">${ze.map(p=>n`<button class=${a===p.id?"on":""} @click=${()=>this._scorePrefs({remind:t[p.id]})}>${L(p.icon)}${p.label}</button>`)}</div>
        <div class="remind-row">
          ${we(e.remind,p=>this._scorePrefs({remind:p}),{label:"Hor\xE1rio do lembrete",cls:"remind-time"})}
        </div>
        <span class="flabel quem-l">Quem recebe</span>
        <div class="chip-row quem" role="group" aria-label="Quem recebe o lembrete">${e.participants.map(p=>{let u=r.includes(p);return n`<button class="pick quem-p ${u?"on":""} ${i(p)?"":"sem"}" aria-pressed=${u?"true":"false"} @click=${()=>h(p)}>${L("user-round")}<b>${p}</b>${i(p)?m:n`<small>sem celular</small>`}</button>`})}</div>
        ${r.length?l.length?n`<span class="field-hint">${L("info")}<span>Sem celular para ${d(l)}: ligue o celular à pessoa no Home Assistant.</span></span>`:m:n`<span class="field-hint">${L("info")}<span>Escolha quem recebe.</span></span>`}
        <button class="btn outline remind-test" ?disabled=${!c} title=${c?"":"Sem celular ligado a voc\xEA no Home Assistant"} @click=${()=>this._testScoreReminder()}>${L("send")}Testar no meu celular</button>
      </div>`}async _testScoreReminder(){try{await this.api.testScoreReminder(),this._showToast("Lembrete enviado para o seu celular. Toque nele para abrir Recompensas.")}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}};var ye={CREATE:1,UPDATE:4,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},ko="cronologia.todo_list",U=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,ct="laranja",$n=o=>(o||"?").trim().charAt(0).toUpperCase(),rs=o=>o.allDay?q(o.due):new Date(o.due);function Ao(o,e){if(o.undated)return"sem prazo";let t=rs(o),a=K(t,e),s=o.allDay?"":` \xE0s ${W(t)}`;return o.done?"conclu\xEDda":o.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?o.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${J(t,e,{long:!1,cap:!1})}${s}`}var Do=o=>o?o===1?"todo dia":o===7?"toda semana":o===14?"a cada 2 semanas":o===30?"todo m\xEAs":`a cada ${o} dias`:"",Mo=o=>class extends o{_todosAll(){return this._ix().todos||{lists:[],items:[]}}_todos(){let e=this._todosAll(),t=this._listOwners(),a=this._me(),s=a&&(this._ix().people||[]).some(c=>c.person&&C(c.name)===C(a));if(!Object.keys(t).length||!s)return e;let i=this._todosView,r=JSON.stringify(t);if(i&&i.src===e&&i.me===a&&i.key===r)return i.view;let l=c=>!t[c]||C(t[c])===C(a),d={...e,lists:e.lists.filter(c=>l(c.id)),items:e.items.filter(c=>l(c.list))};return this._todosView={src:e,me:a,key:r,view:d},d}_listOwners(){let e=this._todosAll().app;return e&&e.donos||this._app("todo_owner",null)||{}}_ownersFromResolvia(){let e=this._todosAll().app;return!!(e&&e.donos)}_todoOwners(){let e=(this._ix().people||[]).filter(a=>a.person).map(a=>a.name),t=this._score&&this._score();return[...new Set([...e,...t&&t.participants||[]])]}_todoEvents(e,t){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.filter(s=>!s.undated).map(s=>{let i=rs(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?z(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<t&&s.end>e&&!(this._awayDay&&this._awayDay(s.start)))}async _todoDone(e,t,a=null){let s=async i=>{this._sheet==="who"&&await this._closeSheet();try{let r=await this.api.setTodo(e.list,e.uid,t,i);this._haptic(t?"success":"light"),t&&r&&r.points?this._doneToast(e,r.who,r.points,{reassignKey:r.key}):this._showToast(`${N(e.summary,28)}: ${t?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(e.list,e.uid,!t).catch(l=>this._showToast(l.message))})}catch(r){this._showToast(`N\xE3o consegui: ${r.message}`)}};return t&&e.points>0?a?s(a):this._withWho(e.points,e.summary,s):s("")}_renderTodosPanel(){if(this._awayNow&&this._awayNow())return m;let e=new Date(this._now),a=this._todos().items.filter(c=>c.undated?!0:c.done?c.days===0:c.overdue||c.days<=1);if(!a.length)return m;let s=a.filter(c=>c.overdue),i=a.filter(c=>!c.done),r=this._todosOpen?a:a.slice(0,6),l=this._scoreOn()?(this._score()||{}).participants||[]:[],d=c=>{let h=c.points>0&&!c.done&&l.length&&l.length<=3,p=c.equips&&c.equips.length?c.equips:c.equip?[c.equip]:[],u=c.rooms&&c.rooms.length?c.rooms:c.room?[c.room]:[],f=[c.undated?"":Ao(c,e),Do(c.every),c.listName].filter(Boolean).join(" \xB7 ");return n`<div class="chore todo ${c.done?"done":""} ${c.overdue?"late":""}">
          <button class="chk sq ${c.done?"on":""}" @click=${()=>this._todoDone(c,!c.done)} aria-label="${c.done?"Reabrir":"Concluir"} ${c.summary}">${c.done?U("check"):m}</button>
          <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:c.key})}><b>${c.summary}</b><small>${h?n`<span class="pts-inline">+${c.points}</span> · ${f}`:f}</small>${nt(u.map(x=>x.nome),p.map(x=>x.nome),this._roomNamesAll())}</button>
          ${h?n`<div class="qwho" role="group" aria-label="Quem fez ${c.summary}">
                ${l.map(x=>n`<button class="qw-btn" style=${B(this._pColor(x),this._dark)} aria-label="${x} fez ${c.summary} (+${c.points})" title="${x} fez (+${c.points})" @click=${()=>this._todoDone(c,!0,x)}>${$n(x)}</button>`)}
              </div>`:c.points>0&&this._scoreOn()?n`<span class="pts ${c.done?"got":""}">+${c.points}</span>`:m}
        </div>`};return n`<div class="panel todos ${s.length?"alert":""}" id="tarefas">
        ${this._panelHead("list-checks","violet",a.some(c=>c.undated)?"Tarefas":"Tarefas com prazo",s.length?P(s.length,"atrasada","atrasadas"):i.length?`${i.length} para fazer`:"tudo feito",{smallCls:s.length?"late":""})}
        ${ae(r.filter(c=>!c.undated),c=>c.key,c=>d(c))}
        ${r.some(c=>c.undated)?n`${r.some(c=>!c.undated)?n`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>`:m}
              ${ae(r.filter(c=>c.undated),c=>c.key,c=>d(c))}`:m}
        ${a.length>6?n`<button class="add-line" @click=${()=>(this._todosOpen=!this._todosOpen,this.requestUpdate())}>${U(this._todosOpen?"chevron-up":"chevron-down")}${this._todosOpen?"Mostrar menos":`Mais ${a.length-6}`}</button>`:m}
        <div class="panel-foot plain">${U("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais › Configurações › Integrações.</span></div>
      </div>`}_renderTodoSheet(){let e=new Date(this._now),t=this._todos().items.find(s=>s.key===this._form.key);if(!t)return n`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=t.undated?null:rs(t);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${Ao(t,e)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${U("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${U("calendar-clock")}<span>${a?n`Prazo: ${X(J(a,e))}${t.allDay?"":` \xE0s ${W(a)}`}`:"Sem prazo"}</span></div>
          <div class="fact">${U("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${(t.rooms&&t.rooms.length?t.rooms:t.room?[t.room]:[]).length?n`<div class="fact">${U("door-open")}<span>${kt((t.rooms&&t.rooms.length?t.rooms:[t.room]).map(s=>s.nome),this._roomNamesAll()).join(", ")}</span></div>`:m}
          ${(t.equips&&t.equips.length?t.equips:t.equip?[t.equip]:[]).map(s=>n`<div class="fact">${U("package")}<span>${s.nome}${s.comodo&&!t.room?` (${s.comodo})`:""}</span></div>`)}
          ${t.every?n`<div class="fact">${U("repeat")}<span>Volta ${Do(t.every)} depois de concluída</span></div>`:m}
          ${t.points>0&&this._scoreOn()?n`<div class="fact">${U("award")}<span>${t.points} pontos para quem concluir</span></div>`:m}
          ${t.description?n`<div class="fact notes">${U("file-text")}<span>${Ut(t.description).map(s=>s.url?n`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:m}
        </div>
        <p class="sheet-note">${U("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done?n`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!1))}>${U("undo-2")}Reabrir</button>`:n`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!0))}>${U("check")}Concluir${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`}
        </div>`}_todoLists(){return(this._app("todo_create_any",!1)===!0?this._todosAll():this._todos()).lists.filter(t=>!t.unavailable&&t.features&ye.CREATE)}_otherOwner(e){let t=this._listOwners()[e],a=this._me();return t&&!(a&&C(t)===C(a))?t:null}_openTodoForm({date:e=null}={}){let t=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(ko)||'""')}catch{}let s=t.find(i=>i.id===a)||t.find(i=>!i.hidden&&i.features&ye.DUE_DATE&&!this._otherOwner(i.id))||t.find(i=>!this._otherOwner(i.id))||t[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:O(e?R(e):R(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_todoDueOk(){return(this._todosAll().app||{}).prazos!==!1}_invLists(){let e=this._todosAll().app||{},t=e.comodos||[],a=(e.equipamentos||[]).map(s=>{let i=t.find(r=>r.nome===s.comodo);return{id:s.id,nome:s.nome,zona:"",roomId:i?i.id:null,roomName:s.comodo||""}});return{rooms:t,items:a}}_roomNamesAll(){return this._invLists().rooms.map(e=>e.nome)}_renderRoomEquipFields(e,{equips:t=!0,multiRoom:a=!1}={}){let{rooms:s,items:i}=this._invLists(),r=t?i:[];return!s.length&&!r.length?m:this._renderRoomEquipMulti(e,s,r,{multiRoom:a})}_renderRoomEquipMulti(e,t,a,{multiRoom:s=!1}={}){let i=e.equips||[],r=i.length>0,l=$=>[...new Set($.map(_=>(a.find(b=>b.id===_)||{}).roomId).filter(_=>_&&t.some(b=>b.id===_)))],d=(t.find($=>$.tipo==="bens")||{}).id||null,c=s?(e.rooms||(e.room?[e.room]:[])).filter($=>t.some(_=>_.id===$)):e.room?[e.room]:[],h=!!d&&(e.where?e.where==="bens":r?l(i).includes(d):c.includes(d)),p=d?h?[]:t.filter($=>$.id!==d):t,u=d?a.filter($=>$.roomId===d===h):a,f=c.filter($=>$!==d),x=r?l(i):f,y=$=>{if($===h)return;let _=i.filter(b=>(a.find(A=>A.id===b)||{}).roomId===d===$);this._setForm({where:$?"bens":"casa",equips:_,equipQ:"",equipMore:!1,equipAdding:!1,...$?{room:d,rooms:[d]}:{room:null,rooms:[]}})},M=d?n`<div class="field where-field">
            <div class="seg where" role="group" aria-label="Casa ou Bens">
              <button class=${h?"":"on"} aria-pressed=${h?"false":"true"} @click=${()=>y(!1)}>${U("house")}<span>Casa</span></button>
              <button class=${h?"on":""} aria-pressed=${h?"true":"false"} @click=${()=>y(!0)}>${U("car")}<span>Bens</span></button>
            </div>
          </div>`:m,D=$=>{if(!s)return this._setForm({room:e.room===$?null:$});let _=f.includes($)?f.filter(b=>b!==$):[...f,$];this._setForm({rooms:_,room:_[0]||null})},v=p.map($=>$.id),k=s&&!r&&p.length>1&&v.every($=>x.includes($)),g=h?d:r?x[0]||null:k?null:e.room||null;return n`${M}${p.length?n`<div class="field">
              <span class="flabel">${x.length>1?"C\xF4modos":"C\xF4modo"}</span>
              <div class="chip-row ${r?"locked":""}">
                <button class="pick ${x.length?"":"on"}" ?disabled=${r} @click=${()=>this._setForm({room:null,rooms:[]})}>${U("x")}<span>Nenhum</span></button>
                ${s&&p.length>1?n`<button class="pick all-rooms ${k?"on":""}" aria-pressed=${k?"true":"false"} ?disabled=${r} @click=${()=>this._setForm(k?{room:null,rooms:[]}:{rooms:v,room:v[0]})}>${U("house")}<span>Todos</span></button>`:m}
                ${p.map($=>n`<button class="pick ${x.includes($.id)?"on":""}" aria-pressed=${x.includes($.id)?"true":"false"} ?disabled=${r} @click=${()=>D($.id)}>${U("door-open")}<span>${N($.nome,22)}</span></button>`)}
              </div>
              ${r?n`<span class="field-hint">${U("lock")}<span>Vem ${i.length>1?"dos equipamentos":"do equipamento"}.</span></span>`:m}
            </div>`:m}
        ${u.length?n`<div class="field">
              <span class="flabel">${h?i.length>1?"Bens":"Bem":i.length>1?"Equipamentos":"Equipamento"}</span>
              ${ii({lit:{html:n,nothing:m},icon:U,items:u,bens:h,room:g,roomName:g&&(t.find($=>$.id===g)||{}).nome||"",value:i,query:e.equipQ||"",more:!!e.equipMore,adding:!!e.equipAdding,autofocus:!!e.equipAdding,onQuery:$=>this._setForm({equipQ:$,equipMore:!1}),onMore:()=>this._setForm({equipMore:!0}),onAdd:()=>this._setForm({equipAdding:!0,equipQ:"",equipMore:!1}),onPick:$=>this._setForm({equips:[...i,$],equipQ:"",equipMore:!1,equipAdding:!1}),onRemove:$=>{let _=i.filter(b=>b!==$);this._setForm({equips:_,...h?{where:"bens"}:{},..._.length?{}:{room:l(i)[0]||e.room||null,...s?{rooms:l(i)}:{}}})}})}
            </div>`:m}`}_renderTodoForm(){let e=this._form,t=this._todoLists(),a=t.find(h=>h.id===e.list),s=Us(t),i=a?a.features:0,r=this._todoDueOk(),l=r&&!!(i&ye.DUE_DATE),d=r&&!!(i&ye.DUE_DATETIME),c=!!(i&ye.DESCRIPTION);return n`
        ${this._sheetHead("Adicionar")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder="Ex.: Levar o carro na revisão" @input=${h=>this._setForm({title:h.target.value})} @keydown=${h=>h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${t.map(h=>n`<button class="pick list ${e.list===h.id?"on":""}" style=${B(ne(ct),this._dark)} title=${h.name} @click=${()=>this._setForm({list:h.id})}>${U(this._otherOwner(h.id)?"user-round":"list-checks")}<span>${N(s.get(h.id).short,30)}</span></button>`)}</div>
          ${a&&s.get(a.id).short!==a.name?n`<div class="field-hint">${U("list-checks")}<span>No Home Assistant: <b>${a.name}</b></span></div>`:m}
          ${a&&this._otherOwner(a.id)?n`<div class="field-hint">${U("user-round")}<span>Lista de <b>${this._otherOwner(a.id)}</b>: a tarefa aparece no CronologIA de ${this._otherOwner(a.id)}.</span></div>`:m}
        </div>
        ${l||d?n`${e.noDue?m:this._dateField("Prazo",e.date,h=>this._setForm({date:h}),"td-date")}
              ${a&&a.appDue&&!e.noDue?n`<p class="field-hint app-due" style="margin:-8px 0 12px">${U("info")}<span>Guardado no ResolvIA: a lista não aceita data.</span></p>`:m}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${e.noDue?"on":""}" @click=${()=>this._setForm({noDue:!e.noDue})}>${U("x")}<span>Sem prazo</span></button>
                ${d&&!e.noDue?n`<button class="pick ${e.timed?"on":""}" @click=${()=>this._setForm({timed:!e.timed})}>${U("clock")}<span>Com horário</span></button>
                      ${e.timed?we(e.time,h=>this._setForm({time:h}),{label:"Hor\xE1rio",cls:"inline-time"}):m}`:m}
              </div>`:n`<p class="field-hint" style="margin:-6px 0 18px">${U("info")}<span>${r?"Essa lista n\xE3o aceita prazo.":"Os prazos est\xE3o desligados no ResolvIA."}</span></p>`}
        ${this._renderRoomEquipFields(e,{multiRoom:!0})}
        ${c&&this._app("event_details",!1)===!0?n`<div class="field fold-txt"><span class="flabel">Notas${(e.notes||"").trim()?n`<span class="fl-val">· ${N(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span><textarea rows="2" aria-label="Notas" .value=${e.notes} placeholder="Detalhes, links" @input=${h=>this._setForm({notes:h.target.value})}></textarea></div>`:m}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${U("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${U("plus")}${e.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let e=this._form,t=this._todoLists().find(r=>r.id===e.list);if(!t)return this._showToast("Escolha a lista");if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=this._todoDueOk()&&!e.noDue&&t.features&(ye.DUE_DATE|ye.DUE_DATETIME),s=a&&e.timed&&t.features&ye.DUE_DATETIME,i={summary:e.title.trim(),date:a?e.date:"",time:s?e.time:"",description:e.notes||"",...(e.equips||[]).length?{equips:e.equips}:(e.rooms||[]).length>1?{rooms:e.rooms}:e.room?{room:e.room}:{}};a&&!s&&!(t.features&ye.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(t.id,i);let r=this._otherOwner(t.id);if(!r)try{localStorage.setItem(ko,JSON.stringify(t.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${N(t.name,24)}${r?` (lista de ${r})`:t.hidden?" (lista oculta aqui)":""}`)}catch(r){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${r.message}`)}}_renderMirrorSettings(e){let t=Wi(this._app("mirror",null)),a=this._ix().mirror||{},s=e.filter(c=>c.features&ye.CREATE&&c.features&ye.UPDATE&&!c.unavailable),i=c=>this._saveAppPrefs({mirror:{...t,...c}}),r=(c,h)=>n`<label class="field mirror-pick">
          <span class="flabel">${h}</span>
          <select class="select" aria-label=${`Lista: ${h}`} @change=${p=>i({[c]:p.target.value||null})}>
            <option value="" ?selected=${!t[c]}>Nenhuma (não levar)</option>
            ${s.map(p=>n`<option value=${p.id} ?selected=${t[c]===p.id}>${p.name}${p.features&ye.DUE_DATE?"":" (sem prazo)"}</option>`)}
            ${t[c]&&!s.some(p=>p.id===t[c])?n`<option value=${t[c]} selected>${t[c]} (não encontrada)</option>`:m}
          </select>
        </label>`,l=t.maint_list||t.routine_list,d=this._scoreOn();return n`<div class="sub-overline" id="levar">Levar para o ResolvIA</div>
        <p class="sub-lead">Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data${d?" e os pontos":""}. Concluir lá vale como feito aqui${d?" (os pontos v\xE3o para quem concluiu)":""} e a tarefa volta com a data seguinte.</p>
        ${r("maint_list","Manuten\xE7\xF5es")} ${r("routine_list","Rotina da casa")}
        ${a.problem?n`<p class="data-note">${a.problem}</p>`:l?n`<p class="sub-lead with-icon">${U("circle-check")}<span>${P(a.count||0,"tarefa","tarefas")} ${t.maint_list&&t.routine_list&&t.maint_list!==t.routine_list?"nas listas":"na lista"}. Elas não se repetem no card de Tarefas daqui.</span></p>`:m}`}_resolviaOn(){return this._app("resolvia_on",!1)===!0}_renderTodosSettings(){let e=this._resolviaOn(),t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${v=>this._saveAppPrefs({resolvia_on:v.target.checked?!0:null})} aria-label="Usar a integração com o ResolvIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="resolvia">
          ${this._secHead("list-checks","Tarefas do ResolvIA")}
          ${t}
        </div>`;let{lists:a,app:s}=this._todosAll(),i=this._listOwners(),r=this._ownersFromResolvia(),l=this._todoOwners(),d=(v,k)=>{let g={...i};k?g[v]=k:delete g[v],this._saveAppPrefs({todo_owner:Object.keys(g).length?g:null})},c=this._app("todo_hidden",null)||[],h=(v,k)=>this._saveAppPrefs({todo_hidden:k?c.filter(g=>g!==v):[...c,v]}),p=a.filter(v=>!v.hidden),u=p.reduce((v,k)=>v+k.due,0),f=p.reduce((v,k)=>v+k.overdue,0),x=this._todoDueOk(),y=x?`${P(a.length,"lista","listas")} \xB7 ${P(u,"tarefa com prazo","tarefas com prazo")}${f?`, ${P(f,"atrasada","atrasadas")}`:""}.`:`${P(a.length,"lista","listas")} \xB7 prazos desligados no ResolvIA.`,M=a.length?s?{tone:"ok",title:`Conectado ao ResolvIA ${s.versao||""}`.trim(),text:`${y} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${y} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."},D=v=>n`<div class="row switch-row ${v.hidden?"off":""}">
            <span class="tile" style=${B(ne(ct),this._dark)}>${U("list-checks")}</span>
            <div class="grow"><div class="label">${v.name}</div><div class="hint">${v.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":v.info==="resolvia"?"prazos desligados no ResolvIA":v.due?`${P(v.due,"tarefa com prazo","tarefas com prazo")}${v.overdue?` \xB7 ${P(v.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div>
              ${r?i[v.id]&&!v.hidden?n`<div class="owner-of">${U("user-round")}<span>De ${i[v.id]}</span></div>`:m:l.length&&!v.hidden?n`<div class="owner-pick" role="radiogroup" aria-label="De quem é ${v.name}">
                    <span class="op-l">De quem é</span>
                    ${["",...l].map(k=>{let g=k?C(i[v.id]||"")===C(k):!i[v.id];return n`<button class=${g?"on":""} role="radio" aria-checked=${g?"true":"false"} @click=${()=>d(v.id,k)}>${U(k?"user-round":"users")}<span>${k||"Todos"}</span></button>`})}
                  </div>`:m}
            </div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${Vt(!v.hidden)} @change=${k=>h(v.id,k.target.checked)} aria-label="Mostrar ${v.name}" /><span class="track"></span></label>
          </div>`;return n`<div class="panel" id="resolvia">
        ${this._secHead("list-checks","Tarefas do ResolvIA")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="ai-state ${M.tone}"><span class="dot"></span><div><b>${M.title}</b><span>${M.text}</span></div></div>
        ${a.length?n`${x?n`<div class="row switch-row">
                    <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do prazo.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${v=>this._saveAppPrefs({todo_off_calendar:v.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
                  </div>`:m}
              <div class="row switch-row">
                <div class="grow"><div class="label">${x?"Tarefas sem prazo na Agora":"Tarefas na Agora"}</div>${x?n`<div class="hint">Depois das que têm prazo.</div>`:m}</div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated",!1)} @change=${v=>this._saveAppPrefs({todo_undated:v.target.checked?!0:null})} aria-label=${x?"Tarefas sem prazo na Agora":"Tarefas na Agora"} /><span class="track"></span></label>
              </div>
              ${this._todoOwners().length?n`<div class="row switch-row">
                    <div class="grow"><div class="label">Criar tarefas nas listas dos outros</div><div class="hint" style="white-space:normal">Para pedir algo a outra pessoa da casa.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("todo_create_any",!1)===!0} @change=${v=>this._saveAppPrefs({todo_create_any:v.target.checked?!0:null})} aria-label="Criar tarefas nas listas dos outros" /><span class="track"></span></label>
                  </div>`:m}
              <div class="sub-overline">Listas</div>
              ${r?n`<p class="sub-lead">Escolha quais listas entram. De quem é cada uma se escolhe no ResolvIA (⋯ › Personalizar): a lista de uma pessoa só aparece no CronologIA dela.</p>`:this._todoOwners().length?n`<p class="sub-lead">Escolha quais listas entram e, se quiser, de quem é cada uma: a lista de uma pessoa só aparece no CronologIA dela (na Agora, no calendário e no Adicionar › Tarefa). Num aparelho sem pessoa da casa, aparece tudo.</p>`:m}`:m}
        ${ae(p,v=>v.id,D)}
        ${Xe(this,"todo-lists","Ocultas",a.length-p.length,()=>ae(a.filter(v=>v.hidden),v=>v.id,D))}
        ${a.length?this._renderMirrorSettings(a):m}
        ${a.length&&this._writable().length?n`<button class="row" @click=${()=>this._openBring()}>
              <span class="tile" style=${B(this._accent(),this._dark)}>${U("download")}</span>
              <span class="grow"><div class="label">Trazer uma lista para o CronologIA</div><div class="hint" style="white-space:normal">Cada tarefa vira uma Rotina da casa.</div></span>
              ${U("chevron-right")}
            </button>`:m}
        </div></div>
      </div>`}_openBring(){this._openSheet("bring",{step:"pick",listId:null,preview:null,chosen:[],cal:this._kindCal("rotina"),error:null,busy:!1})}async _bringLoad(e){this._setForm({listId:e,step:"loading",error:null});try{let t=await this.api.bringPreview(e);if(this._sheet!=="bring")return;this._setForm({step:"review",preview:t,chosen:t.items.filter(a=>!a.exists).map(a=>a.uid)})}catch(t){this._setForm({step:"pick",error:t.message})}}async _bringRun(){let e=this._form;if(!(!e.chosen.length||e.busy)){this._setForm({busy:!0,error:null});try{let t=await this.api.bring(e.listId,e.cal,e.chosen,!0),a=this._cal(t.calendar);await this._closeSheet(),this._haptic("success"),this._showToast(`${P(t.created,"rotina criada","rotinas criadas")}${a?` em ${N(a.name,18)}`:""}${t.removed?" \xB7 tiradas do ResolvIA":""}`)}catch(t){this._sheet==="bring"&&this._setForm({busy:!1,error:t.message})}}}_renderBringSheet(){let e=this._form,t=new Date(this._now),a=(r,l)=>n`<div class="sheet-head">
        ${l?n`<button class="icon-btn back" @click=${l} aria-label="Voltar">${U("chevron-left")}</button>`:m}
        <h3 class="display">${r}</h3>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${U("x")}</button>
      </div>`,s=e.error?n`<div class="imp-error">${U("circle-alert")}<span>${e.error}</span></div>`:m;if(e.step==="loading")return n`${a("Trazer do ResolvIA")}<div class="imp-loading"><span class="spin">${U("loader-circle")}</span><span>Lendo a lista…</span></div>`;if(e.step==="review"&&e.preview){let r=e.preview,l=new Set(e.chosen),d=p=>this._setForm({chosen:l.has(p)?e.chosen.filter(u=>u!==p):[...e.chosen,p]}),c=this._writable(),h=p=>{let u=q(p.date),f=K(u,t)===0?"hoje":J(u,t,{long:!1,cap:!1});return`${p.every?`a partir de ${f}`:f}${p.time?` \xE0s ${p.time}`:""}`};return n`
          ${a(r.name,()=>this._setForm({step:"pick",preview:null,error:null}))}
          <p class="sheet-note top">Cada tarefa marcada vira uma <b>Rotina da casa</b>.${r.canDelete?" Depois, ela sai do ResolvIA.":""}</p>
          ${r.items.length?n`<div class="bring-list">
                ${r.items.map(p=>n`<button class="bring-row ${l.has(p.uid)?"":"off"}" role="checkbox" aria-checked=${l.has(p.uid)?"true":"false"} @click=${()=>d(p.uid)}>
                    <span class="chk sq ${l.has(p.uid)?"on":""}">${l.has(p.uid)?U("check"):m}</span>
                    <span class="bring-tx"><b>${p.summary}</b><small>${[p.points>0?`+${p.points}`:"",p.every?`volta ${P(p.every,"dia","dias")} depois de feita`:"s\xF3 uma vez",h(p),p.exists?"j\xE1 existe uma rotina com esse nome":""].filter(Boolean).join(" \xB7 ")}</small></span>
                  </button>`)}
              </div>`:n`<p class="empty-line">Nenhuma tarefa para trazer nessa lista.</p>`}
          ${r.items.length>1?n`<div class="bring-all"><button class="text-btn" @click=${()=>this._setForm({chosen:e.chosen.length===r.items.length?[]:r.items.map(p=>p.uid)})}>${e.chosen.length===r.items.length?"Desmarcar todas":"Marcar todas"}</button></div>`:m}
          ${c.length>1?n`<div class="field"><span class="flabel">Calendário das rotinas</span>
                <div class="chip-row">${c.map(p=>n`<button class="pick list ${e.cal===p.id?"on":""}" style=${B(p.color,this._dark)} @click=${()=>this._setForm({cal:p.id})}><span class="dot"></span><span>${N(p.name,22)}</span></button>`)}</div>
              </div>`:m}
          ${s}
          <div class="sheet-actions">
            <button class="btn primary" ?disabled=${!e.chosen.length||e.busy} @click=${()=>this._bringRun()}>${U("download")}${e.busy?"Trazendo\u2026":e.chosen.length?`Trazer ${P(e.chosen.length,"tarefa","tarefas")}`:"Nenhuma marcada"}</button>
          </div>`}let i=this._todosAll().lists.filter(r=>!r.unavailable);return n`
        ${a("Trazer do ResolvIA")}
        <p class="sheet-note top">Escolha a lista.</p>
        <div class="bring-lists">
          ${i.map(r=>n`<button class="row" @click=${()=>this._bringLoad(r.id)}>
              <span class="tile" style=${B(ne(ct),this._dark)}>${U("list-checks")}</span>
              <span class="grow"><div class="label">${r.name}</div><div class="hint">${P(r.open,"tarefa pendente","tarefas pendentes")}</div></span>
              ${U("chevron-right")}
            </button>`)}
        </div>
        ${s}`}};var So='"CR Caveat", "Segoe Print", "Bradley Hand", cursive',va=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,yn={framboesa:{id:"framboesa",fill:"#E8508A",ink:"#A3124F"}},Co=/^\s*(☐|☑|\[ \]|\[[xX]\])/,_n=/^\s*(☑|\[[xX]\])/,kn=6,An=Array.from({length:7},()=>n`<i></i>`),Dn=o=>String(o||"").split(`
`).reduce((e,t)=>e+Math.max(1,Math.ceil(t.length/36)),0)>kn;function Mn(o,e=new Date){let t=(l,d)=>{let[c,h]=l.split(":").map(Number),p=new Date(e.getFullYear(),e.getMonth(),e.getDate(),c,h);return(d||p.getTime()<=e.getTime())&&p.setDate(p.getDate()+1),p.getTime()},a=o||[],s=a.find(l=>!l.agora),i=a.find(l=>l.agora),r=[...s?[t(s.inicio,s.amanha)]:[],...i&&i.fim?[t(i.fim,!1)]:[]];return r.length?Math.min(...r):1/0}var To=o=>class extends o{_memoriaOn(){return this._app("memoria_on",!1)===!0}_memoColor(e){return ne(e)||yn[e]||this._accent()}async _loadMemoria(e=!1){if(!(!this.api||!this.api.memoriaNow)){this._memoBusy=!0,this._memoAt=Date.now();try{this._memo=await this.api.memoriaNow(e)}catch(t){this._memo={ligado:!0,encontrado:!0,erro:t.message||String(t),trechos:[]}}this._memoBusy=!1,this._memoUntil=Mn(this._memo.trechos),this.requestUpdate()}}_memoriaTick(){if(!this._ready||!this._memoriaOn()||this._memoBusy||this._view().name!=="now")return;let e=Date.now();this._memoAt&&e-this._memoAt<6e4&&e<(this._memoUntil||1/0)||this._loadMemoria()}_renderMemoriaPanel(){let e=this._memo;if(!this._memoriaOn()||!e||!e.ligado||e.erro||!(e.trechos||[]).length)return m;let t=e.trechos[0].agora?e.trechos[0]:null;if(!t)return m;let a=t.texto||"",s=Dn(a),i=!!this._memoOpen&&s,r=a.split(`
`),l=`desde ${t.ontem?"ontem \xE0s ":""}${t.inicio}${t.fim?` at\xE9 ${t.fim}`:""}`,d=n`<span class="memo-cover"></span><span class="memo-stack"></span>
        <span class="memo-leaf ${t.papel||"pautado"}">
          <span class="memo-top"><span class="memo-name">${t.bloco}${t.outros?n` <small>+${t.outros}</small>`:m}</span><span class="memo-pin">${va("clock")}${t.inicio}</span></span>
          ${a.trim()?n`<span class="memo-ink ${t.letra==="normal"?"normal":""} ${i?"open":""}">${r.map((h,p)=>{let u=Co.test(h),f=u?h.replace(Co,"").trimStart():h;return n`${u?n`<span class="ck ${_n.test(h)?"done":""}"><span class="box">${va("check")}</span><span>${f}</span></span>`:n`<span>${f}</span>`}${p<r.length-1?`
`:""}`})}</span>`:n`<span class="memo-ink empty">Folha em branco.</span>`}
        </span>
        <span class="memo-spiral" aria-hidden="true">${An}</span>`,c=`${t.bloco}: a folha de agora, ${l}`;return n`<div class="panel memo" id="memoria" style=${B(this._memoColor(t.cor),this._dark)}>
        <div class="chores-head sec-head"><span class="sec-ic memo-ic">${va("notebook-pen")}</span><span class="overline">MemorIA</span><small>${l}</small></div>
        ${e.painel?n`<a class="memo-pad" href=${e.painel} target="_top" aria-label=${c}>${d}</a>`:n`<div class="memo-pad" role="group" aria-label=${c}>${d}</div>`}
        ${s?n`<button class="text-btn memo-more" aria-expanded=${i?"true":"false"} @click=${()=>(this._memoOpen=!i,this.requestUpdate())}>${va(i?"chevron-up":"chevron-down")}${i?"Ver menos":"Ver mais"}</button>`:m}
      </div>`}_renderMemoriaSettings(){let e=this._memoriaOn(),t=this._memo,a=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Trechos no Agora</div><div class="hint" style="white-space:normal">${e?"A folha de agora, de cada pessoa.":"Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${i=>this._saveMemoria(i.target.checked)} aria-label="Trechos do MemorIA no Agora" /><span class="track"></span></label>
      </div>`,s=m;if(e&&t&&t.ligado){let i=t.encontrado?t.erro?"warn":"ok":"off",r=(t.trechos||[]).length;s=n`<div class="sub-op"><div class="sub-box"><div class="ai-state ${i}" id="memoria-estado"><span class="dot"></span><div>
          <b>${t.encontrado?t.erro?"N\xE3o consegui falar com o MemorIA":`Conectado ao MemorIA ${t.versao||""}`:"MemorIA n\xE3o encontrado"}</b>
          <span>${t.encontrado?t.erro?t.erro:r&&t.trechos[0].agora?`Agora: ${t.trechos[0].bloco}, desde ${t.trechos[0].inicio}.`:"Nada agora.":"Instale o MemorIA 1.13.0 ou mais novo no mesmo Home Assistant."}</span>
        </div></div></div></div>`}return n`<div class="panel" id="memoria-config">
        ${this._secHead("notebook-pen","MemorIA")}
        ${a}
        ${s}
      </div>`}async _saveMemoria(e){await this._saveAppPrefs({memoria_on:e?!0:null}),this._memo=null,this._memoAt=0,e?await this._loadMemoria(!0):this.requestUpdate()}},Eo=Ce`
  .panel.memo {
    padding: 0 0 6px;
    overflow: hidden;
  }
  .memo-ic {
    background: var(--cs);
    color: var(--ci);
  }
  /* the sheet of now, like a sheet of the MemorIA (its colors: the paper, the ink, the lines, the spiral) */
  .memo-pad {
    --paper: #fffcf3;
    --paper-back: #f4eddb;
    --paper-edge: #e3d9bf;
    --ink: #253354;
    --ink-soft: #7a7f90;
    --rule: rgba(72, 125, 200, 0.3);
    --rule-dot: rgba(72, 105, 160, 0.38);
    --margin: rgba(226, 88, 88, 0.55);
    --wire: #9ba1aa;
    position: relative;
    display: block;
    margin: 4px 22px 18px 26px;
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  :host([dark]) .memo-pad {
    --paper: #2a2622;
    --paper-back: #221f1c;
    --paper-edge: #3b3631;
    --ink: #f1e8d6;
    --ink-soft: #a99f8e;
    --rule: rgba(150, 180, 235, 0.15);
    --rule-dot: rgba(170, 190, 235, 0.24);
    --margin: rgba(240, 110, 110, 0.36);
    --wire: #8d9198;
  }
  .memo-cover {
    position: absolute;
    inset: 6px -6px -8px 4px;
    border-radius: 5px 13px 13px 5px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), transparent 45%), var(--c);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  }
  .memo-stack {
    position: absolute;
    inset: 2px -2px -3px 1px;
    border-radius: 4px 10px 10px 4px;
    background: var(--paper-back);
    box-shadow: 1px 1px 0 var(--paper-edge), 2px 2px 0 var(--paper-back);
  }
  .memo-leaf {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    min-height: 150px;
    padding-bottom: 14px;
    border-radius: 4px 10px 10px 4px;
    background: var(--paper);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .memo-leaf.pautado::before {
    /* the red margin line */
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 1.5px;
    background: var(--margin);
    pointer-events: none;
  }
  .memo-top {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 40px;
    padding: 4px 12px 0 50px;
    color: var(--ink-soft);
    font-family: ${me(So)};
    font-size: 19px;
  }
  .memo-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .memo-name small {
    font-size: 15px;
  }
  .memo-pin {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
    color: var(--ci);
  }
  :host([dark]) .memo-pin {
    color: var(--c);
  }
  .memo-pin .i {
    width: 15px;
    height: 15px;
  }
  .memo-ink {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    padding: 0 16px 0 50px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    color: var(--ink);
    font-family: ${me(So)};
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    background-position: 0 0;
  }
  .memo-ink.normal {
    font-family: var(--rv-body);
    font-size: 16px;
    font-weight: 400;
  }
  .memo-ink.open {
    display: block;
    -webkit-line-clamp: unset;
  }
  .memo-ink.empty {
    color: var(--ink-soft);
  }
  .pautado .memo-ink {
    background-image: repeating-linear-gradient(to bottom, transparent 0 27px, var(--rule) 27px 28px);
  }
  .quadriculado .memo-ink {
    background-image: linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .pontilhado .memo-ink {
    background-image: radial-gradient(circle at 1px 1px, var(--rule-dot) 1.4px, transparent 1.9px);
    background-size: 28px 28px;
    background-position: 10px 26px;
  }
  /* Caixas de marcar, as in the MemorIA: ☐ to do, ☑ done (crossed out) */
  .memo-ink .box {
    display: inline-grid;
    place-items: center;
    width: 19px;
    height: 19px;
    margin-right: 8px;
    vertical-align: -2px;
    border: 2px solid var(--ink-soft);
    border-radius: 5px;
    color: transparent;
  }
  .memo-ink .box .i {
    width: 13px;
    height: 13px;
    stroke-width: 3;
  }
  .memo-ink .ck.done .box {
    background: var(--ci);
    border-color: var(--ci);
    color: var(--paper);
  }
  .memo-ink .ck.done .box ~ span {
    text-decoration: line-through;
    opacity: 0.55;
  }
  .memo-spiral {
    position: absolute;
    left: -11px;
    top: 10px;
    bottom: 10px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 2;
    pointer-events: none;
  }
  .memo-spiral i {
    position: relative;
    height: 10px;
  }
  .memo-spiral i::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--rv-surface, var(--rv-bg));
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
  }
  .memo-spiral i::after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 24px;
    height: 8px;
    border-radius: 5px;
    border: 2.2px solid var(--wire);
    border-right-color: transparent;
    transform: rotate(-9deg);
  }
  .memo-more {
    margin: -8px 14px 4px;
  }
  a.memo-pad:active .memo-leaf {
    filter: brightness(0.97);
  }
  /* computer: the inside lines up with the page, like the other sections */
  @media (min-width: 1000px) {
    .page:not(.cal-page) .panel.memo .memo-pad {
      margin-left: 12px;
      margin-right: 6px;
    }
    .page:not(.cal-page) .panel.memo .memo-more {
      margin-left: -4px;
    }
    a.memo-pad:hover .memo-name {
      text-decoration: underline;
    }
  }
`;var ke=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,Sn=o=>o>1048576?`${(o/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(o/1024))} KB`,Cn={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar","antes-de-zerar":"antes de come\xE7ar do zero"},zo=o=>class extends o{_dateTime(e){let t=new Date(e),a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} \xE0s ${a(t.getHours())}:${a(t.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(e){this._backups={available:!1,error:e.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let e=await this.api.createBackup();this._showToast(`Backup salvo em ${e.folder}/${e.name}`),this._haptic("success"),await this._loadBackups()}catch(e){this._showToast(`N\xE3o consegui criar o backup. ${e.message}`)}this._busy=null,this.requestUpdate()}_exportData(e,t){!this.api.dataUrl||!this.api.dataUrl(e)?(t.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):e!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let e=this.renderRoot.querySelector("#cr-data-import");e&&(e.value="",e.click())}_onDataImport(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${N(t.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(t);this._haptic("success"),this._showToast(`Importado: ${P(a.calendars,"agenda","agendas")} e ${P(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(e){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(e.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(e.name),this._showToast("Backup restaurado")}catch(t){this._showToast(t.message)}}})}_confirmReset(){this._openSheet("confirm",{title:"Come\xE7ar do zero?",text:"Apaga as marca\xE7\xF5es (Tomei, Paguei, Feito) e o placar: pontos, pr\xEAmios e hist\xF3rico. Os eventos ficam nos calend\xE1rios; calend\xE1rios, pessoas, dem\xE9ritos e prefer\xEAncias continuam. Antes, o app guarda uma c\xF3pia em Vers\xF5es anteriores.",label:"Apagar tudo",danger:!0,run:async()=>{this._closeSheet();try{await this.api.resetData(),this._haptic("success"),this._showToast("Pronto: come\xE7ou do zero")}catch(e){this._showToast(`N\xE3o consegui apagar. ${e.message}`)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let e=await this.api.versions();this._sheet==="versions"&&this._setForm({list:e})}catch(e){this._sheet==="versions"&&this._setForm({error:e.message})}}_confirmRestoreVersion(e){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(e.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(e.name),this._showToast("Vers\xE3o restaurada")}catch(t){this._showToast(t.message)}}})}_renderVersions(){let e=this._form;return n`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${e.error?n`<div class="imp-error">${ke("circle-alert")}<span>${e.error}</span></div>`:e.list==null?n`<div class="imp-loading"><span class="spin">${ke("loader-circle")}</span><span>Carregando…</span></div>`:e.list.length?n`<div class="data-list">
                  ${e.list.map(t=>n`<div class="data-item"><div><b>${this._dateTime(t.when)}</b><span>${P(t.calendars,"agenda","agendas")} · ${P(t.points,"ponto","pontos")} · ${Cn[t.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(t)}>${ke("archive-restore")}Restaurar</button></div>`)}
                </div>`:n`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let e=this._backups,t=this._writable(),a=(i,r,l)=>n`<li><div class="ot"><b>${i}</b><span>${r}</span></div>${l}</li>`,s=(i,r)=>n`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(i)||"#"} download @click=${l=>this._exportData(i,l)}>${ke("download")}${r}</a>`;return n`<div id="dados">
        <div class="panel">
          ${this._secHead("download","Exportar")}
          <ul class="opts">
            ${a("Eventos (CSV)","Abre no Excel e no Google Planilhas, com um evento por linha.",s("csv","Baixar CSV"))}
            ${a("Agenda (.ics)","Os eventos dos calend\xE1rios que voc\xEA escolher, para abrir no Google Agenda, no Outlook ou no iPhone.",n`<button class="btn outline sm" @click=${()=>this._openExport()}>${ke("calendar")}Escolher</button>`)}
            ${a("Dados completos (JSON)","Os ajustes, modelos, marca\xE7\xF5es e pontos do app, para backup ou para outro sistema.",s("json","Baixar JSON"))}
            ${a("Tudo (ZIP)","Os dados do app, os eventos de cada calend\xE1rio em .ics e as planilhas de eventos e pontos num arquivo s\xF3.",s("zip","Baixar ZIP"))}
          </ul>
        </div>
        <div class="panel">
          ${this._secHead("archive","Backup na pasta share",n`Cópia completa em <code>share/cronologia</code>.`)}
          <div class="btn-row sec-actions">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||e&&e.available===!1} @click=${()=>this._createBackup()}>${ke("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${e&&e.available===!1?n`<p class="data-note">A pasta share não está disponível para o app.</p>`:m}
          ${e&&e.backups&&e.backups.length?n`<div class="data-list">
                ${e.backups.slice(0,8).map(i=>n`<div class="data-item"><div><b>${this._dateTime(i.date)}</b><span title=${i.name}>${Sn(i.size)} · ${i.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(i)}>${ke("archive-restore")}Restaurar</button></div>`)}
              </div>`:m}
        </div>
        <div class="panel" id="importar">
          ${this._secHead("upload","Importar","Um .zip ou .json exportado pelo CronologIA, ou os eventos de um .ics (um convite, outra agenda).")}
          <div class="btn-row sec-actions">
            <button class="btn outline sm" @click=${()=>this._pickDataImport()}>${ke("upload")}Escolher arquivo</button>
            <button class="btn outline sm" ?disabled=${!t.length} @click=${()=>this._openImport("ics")}>${ke("calendar-plus")}Escolher .ics</button>
          </div>
        </div>
        <div class="panel">
          ${this._secHead("archive-restore","Vers\xF5es anteriores","Uma c\xF3pia a cada 10 minutos de uso e antes de importar, restaurar ou come\xE7ar do zero. Ficam as 3 mais recentes.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._openVersions()}>${ke("archive-restore")}Ver versões</button></div>
        </div>
        <div class="panel">
          ${this._secHead("database","Onde ficam os dados",n`Os eventos ficam nos calendários; os ajustes do app, em <code>/data/cronologia.json</code>.`)}
        </div>
        <div class="panel" id="zerar">
          ${this._secHead("trash","Come\xE7ar do zero","Apaga as marca\xE7\xF5es (Tomei, Paguei, Feito) e o placar. Os eventos, os calend\xE1rios, as pessoas e as prefer\xEAncias continuam. Uma c\xF3pia fica em Vers\xF5es anteriores.")}
          <div class="btn-row sec-actions"><button class="btn outline danger sm" @click=${()=>this._confirmReset()}>${ke("trash")}Apagar tudo</button></div>
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${i=>this._onDataImport(i)} />
      </div>`}};var Oo="https://github.com/diegozapella63",Tn=[["CronologIA","cronologia-ha","calendar-days","Agenda da fam\xEDlia, rem\xE9dios, rotinas e placar."],["ResolvIA","resolvia-ha","list-checks","Listas de tarefas com prazos, pontos e repeti\xE7\xE3o."],["GerencIA","gerencia-ha","wallet","Finan\xE7as da casa: caixa, cart\xF5es e investimentos."],["InventarIA","inventario-ha","package","Invent\xE1rio da casa: c\xF4modos, itens e valores."],["EconomIA","economia-ha","receipt","Lista de compras com o melhor pre\xE7o perto de casa."],["MemorIA","memoria-ha","book-open","Cadernos de anota\xE7\xE3o que abrem na hora certa."],["CorrerIA","correria-ha","message-circle","Pergunte e pe\xE7a a qualquer app, no chat ou no WhatsApp."]],dt=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.info)}</svg>`,En=o=>n`<span class="ab-wm">${o.slice(0,-2)}<span>${o.slice(-2)}</span></span>`,qo=(o,e,t)=>n`<a class=${t} href=${o} target="_blank" rel="noopener">${e}</a>`;function Fo({app:o,version:e}){return n`<div class="about">
    <div class="about-hero">
      <span class="ab-mark" aria-hidden="true">${dt("zap")}</span>
      <h2 class="ab-name">Correr<span>IA</span> Code</h2>
      <p class="ab-what">desenvolvimento de softwares</p>
      <p class="ab-tag">Feito na correria, rodado pela IA.</p>
    </div>

    <div class="panel about-why">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${dt("hourglass")}</span><h2>Por que CorrerIA?</h2></div>
      <p>Porque eu sou um programador sem tempo: vivo na correria. Então eu uso a IA para rodar tudo isso aqui. Ela escreve, testa e publica; eu dou as ideias e reclamo dos botões tortos.</p>
    </div>

    <div class="panel">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${dt("layers")}</span><h2>Os apps</h2></div>
      <ul class="about-apps" aria-label="Os apps">
        ${Tn.map(([t,a,s,i])=>n`<li>
            ${qo(`${Oo}/${a}`,n`<span class="mais-ic" aria-hidden="true">${dt(s)}</span>
                <span class="mb"><b class="ab-app">${En(t)}${t===o?n`<em class="ab-here">Este app · v${e}</em>`:""}</b><span>${i}</span></span>
                ${dt("external-link")}`,`ab-row${t===o?" here":""}`)}
          </li>`)}
      </ul>
    </div>

    ${qo(Oo,n`${dt("external-link")}Meu GitHub`,"btn primary ab-github")}
  </div>`}var No=Ce`
  .about-hero {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 30px 20px 26px;
    margin-bottom: 18px;
    border-radius: 22px;
    border: 1px solid var(--rv-line);
    background:
      radial-gradient(120% 90% at 50% 0%, var(--rv-accent-soft), transparent 70%),
      var(--rv-surface);
  }
  .ab-mark {
    display: inline-grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 18px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    transform: rotate(-8deg);
    box-shadow: 0 10px 24px -12px var(--rv-accent);
  }
  .ab-mark .i {
    width: 30px;
    height: 30px;
    fill: currentColor;
    stroke-width: 1.4;
  }
  .ab-name {
    margin: 16px 0 4px;
    font-family: var(--rv-display);
    font-size: 34px;
    font-weight: 700;
    line-height: 1.05;
    color: var(--rv-text);
  }
  .ab-name span,
  .ab-wm span {
    color: var(--rv-accent-ink);
  }
  .ab-what {
    margin: 0;
    color: var(--rv-muted);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  @media (max-width: 360px) {
    .ab-what {
      font-size: 11px;
      letter-spacing: 0.06em;
    }
  }
  .ab-tag {
    margin: 14px 0 0;
    color: var(--rv-text);
    font-size: 16px;
    font-style: italic;
  }
  .about-why p {
    margin: 0 0 16px;
    color: var(--rv-text);
    font-size: 15.5px;
    line-height: 1.55;
  }
  .about-apps {
    list-style: none;
    margin: 0 0 6px;
    padding: 0;
  }
  .ab-row {
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 68px;
    padding: 10px 0;
    color: inherit;
    text-decoration: none;
    border-top: 1px solid var(--rv-line);
  }
  .about-apps > li:first-child > .ab-row {
    border-top: 0;
  }
  .ab-row .mb {
    flex: 1;
    min-width: 0;
    display: grid;
    gap: 2px;
  }
  .ab-row b {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 8px;
    font-family: var(--rv-display);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }
  .ab-row .mb > span {
    color: var(--rv-muted);
    font-size: 14px;
    line-height: 1.35;
  }
  .ab-row > .i {
    flex: none;
    width: 18px;
    height: 18px;
    color: var(--rv-faint);
  }
  .ab-here {
    font-family: var(--rv-body, inherit);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    color: var(--rv-accent-ink);
    background: var(--rv-accent-soft);
    border-radius: 999px;
    padding: 2px 8px;
  }
  @media (hover: hover) {
    .ab-row:hover b {
      color: var(--rv-accent-ink);
    }
  }
  .ab-github {
    display: flex;
    width: 100%;
    margin: 4px 0 8px;
    text-decoration: none;
  }
  .ab-github .i {
    width: 19px;
    height: 19px;
  }
`;var Po="cronologia.theme",Io="cronologia.mode",ns={CREATE:1,DELETE:2,UPDATE:4},ls=(o,e)=>(Number(o)&e)===e,je=48,zn={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},On=o=>zn[o]||{label:o?X(o.replace(/_/g," ")):"Outros",icon:"calendar"},w=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(Y[o]||Y.calendar)}</svg>`,Ro={Hoje:"clock-3",Agora:"clock-3",Recompensas:"trophy",Rotinas:"repeat",Mais:"ellipsis",Calend\u00E1rios:"layers",Avisos:"bell-ring",F\u00E9rias:"plane",Configura\u00E7\u00F5es:"sliders-horizontal",Sobre:"info"},qn=(o="")=>/^Apagar/.test(o)?"trash":/^Mudar|^Editar/.test(o)?"pencil":/^Adicionar|^Novo|^Nova/.test(o)?"plus":/^Prêmio/.test(o)?"gift":/^Extrato|^Pontos/.test(o)?"trophy":/^Versões/.test(o)?"archive-restore":/^Trazer|^Revisar/.test(o)?"list-checks":/^Quem fez/.test(o)?"users":/^Qualquer hora/.test(o)?"clock":/^Personalizar/.test(o)?"sliders-horizontal":/Outlook|^Exportar/.test(o)?"external-link":/^Ordem/.test(o)?"layers":/calendário/i.test(o)?"calendar-days":/^Manutenção/.test(o)?"wrench":/^Lendo/.test(o)?"scan-text":/^Falar|disse/.test(o)?"mic":/^Colar/.test(o)?"clipboard-paste":/^Tarefa/.test(o)?"list-checks":/^Conversa/.test(o)?"message-circle":"calendar",Fn=[[/^Tipo/,"layout-grid"],[/^Cor do dia/,"calendar"],[/^Cor/,"palette"],[/^Usar IA|^IA usada|Trazer de mensagem/,"sparkles"],[/CorrerIA/,"zap"],[/sensores/i,"activity"],[/Trechos no Agora/,"notebook-pen"],[/^Fala/,"mic"],[/^Usar a integração/,"blocks"],[/^Mostrar n[oa] (calendário|agenda)/,"calendar-check"],[/^Mostrar na tela inicial/,"smartphone"],[/Tarefas|^Lista|^Tarefa/,"list-checks"],[/^Local e notas|^Local/,"map-pin"],[/^De férias/,"plane"],[/recompensas|^Marcar|pontos|^Pontos|placar|ganha|^Quantos pontos/i,"trophy"],[/^Se .* vencer/,"crown"],[/^Resultado|^Lembrete|^Avisar|^Aviso/,"bell"],[/^Pessoas|^Quem|participa/,"users"],[/^Calendário|^Adicionar em|^Onde guardar/,"calendar-days"],[/^Notas|^Observações|^O que foi feito/,"notebook-pen"],[/^Título|^Nome|^O que foi/,"pencil"],[/^Quando/,"calendar-clock"],[/^Horário/,"clock"],[/^Até|^Período/,"calendar-range"],[/^Repet|^A cada/,"repeat"],[/^Dose/,"pill"],[/^Valor/,"wallet"],[/^Categoria/,"layers"],[/^Caminho/,"smartphone"],[/^Mensagem/,"message-square-text"],[/^Cômodo/,"door-open"],[/^Equipamento|^Bem/,"package"],[/^Calendários/,"layers"]],Nn=o=>(Fn.find(([e])=>e.test(o))||[0,"circle-check"])[1],Pn=(o,e)=>{let t=document.createElement("template");return t.innerHTML=`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Y[o]||Y.calendar}</svg>`,t.content.firstChild},Ho="cronologia-fechadas",Lo="cronologia-campos",Yo=".mais-head, .meds-head, .bills-head, .chores-head, .prize-head, .sec-head",jo=o=>{if(!o)return"";let e=o.firstElementChild&&o.firstElementChild.matches(Yo)?o.firstElementChild:null,t=e&&(e.querySelector("h2, .overline")||e);return o.id||o.dataset&&o.dataset.card||(t?t.textContent.trim():"")},Vo=o=>{let e=o&&o.querySelector(":scope > .flabel");return e?e.textContent.trim().replace(/\s*[(·].*$/,"").replace(/s$/,""):""},Uo=o=>{try{return new Set(JSON.parse(localStorage.getItem(o)||"[]"))}catch{return new Set}},In=(o,e)=>{try{localStorage.setItem(o,JSON.stringify([...e]))}catch{}},xa={get(o,e){try{let t=localStorage.getItem(o);return t==null?e:JSON.parse(t)}catch{return e}},set(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}},cs=(o,e,t,a,s)=>tt`<line class=${s} x1=${o} y1=${e} x2=${t} y2=${a}></line>`,Bo=(o,e)=>tt`<path class=${e} d=${o}></path>`,Rn=o=>o.allDay?"Dia todo":`${W(o.start)} \u2013 ${W(o.end)}`,Hn=o=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o)}`,ds=class extends vo(zo(To(Mo(_o(ro(Ae)))))){static properties={_desk:{state:!0},api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Ei,zi,Oi,No,me(ai),me(ci),me(fi),me(oi),me(po),Eo];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=ha(history.state&&history.state.rvPath||""),history.state&&history.state.rvPath!=null&&history.state.rvPath!==this._path&&history.replaceState({...history.state,rvPath:this._path},"");let e=uo();e&&(this._path=e,history.replaceState({...history.state||{},rvDepth:0,rvPath:e},"")),this._sheet=null,this._form=null,this._toast=null,this._theme=xa.get(Po,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=R(new Date),this._mode=xa.get(Io,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark(),this._deskMq=window.matchMedia?window.matchMedia("(min-width: 1000px)"):null,this._desk=!!(this._deskMq&&this._deskMq.matches),this._onDesk=()=>this._desk=!!this._deskMq.matches}connectedCallback(){super.connectedCallback(),Si(),window.addEventListener("popstate",this._onPopState),window.addEventListener("keydown",this._onKey),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._deskMq&&this._deskMq.addEventListener&&this._deskMq.addEventListener("change",this._onDesk),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),window.removeEventListener("keydown",this._onKey),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),this._deskMq&&this._deskMq.removeEventListener&&this._deskMq.removeEventListener("change",this._onDesk),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(e){e.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}_onKey=e=>{if(e.key!=="/"||e.ctrlKey||e.metaKey||e.altKey||this._sheet)return;let t=e.composedPath&&e.composedPath()[0]||e.target;t&&t.closest&&t.closest("input, textarea, select, [contenteditable]")||(e.preventDefault(),this._toSearch())};_toSearch(e=null){e!=null&&(this._query=e),this._focusSearch=!0,this._mode="lista",this._view().name!=="calendar"?this._go("/calendario"):this.requestUpdate()}_markTabs(){let e=this.renderRoot&&this.renderRoot.querySelector(".tabs-wrap > .more-tabs");if(e&&(e.parentElement.classList.toggle("tem-esq",e.scrollLeft>2),e.parentElement.classList.toggle("tem-dir",e.scrollLeft+e.clientWidth<e.scrollWidth-2),window.ResizeObserver&&(!this._tabsRo||this._tabsRo.t!==e))){this._tabsRo&&this._tabsRo.ro.disconnect();let t=new ResizeObserver(()=>this._markTabs());t.observe(e),e.querySelectorAll("button").forEach(a=>t.observe(a)),this._tabsRo={t:e,ro:t}}}_labelIcons(){let e=this.renderRoot;if(!(!e||!e.querySelectorAll))for(let t of e.querySelectorAll(".flabel, .row .grow > .label")){if(t.querySelector(":scope > svg")||t.closest(".row:has(> .tile), .now-cards"))continue;let a=t.textContent.trim();a&&t.prepend(Pn(Nn(a),"lbl-ic"))}}_applyFolds(){let e=this.renderRoot;if(!(!e||!e.querySelectorAll)){this._fechadas=this._fechadas||Uo(Ho),this._camposFechados=this._camposFechados||Uo(Lo);for(let t of e.querySelectorAll(".panel")){let a=t.firstElementChild;if(!a||!a.matches(Yo)||a.matches(".chores-head.sub"))continue;a.classList.add("fold-head");let s=jo(t);if(!s)continue;let i=this._fechadas.has(s);t.classList.add("dobra"),t.classList.toggle("fechada",i),a.setAttribute("role","button"),a.setAttribute("tabindex","0"),a.setAttribute("aria-expanded",i?"false":"true")}for(let t of e.querySelectorAll(".sheet .field")){let a=t.querySelector(":scope > .flabel");if(!a||!(t.classList.contains("fold-txt")||t.querySelector(":scope > .chip-row, :scope > .imp-tiles, :scope > .eq-pick, :scope > .model-strip, :scope > .seg")))continue;let s=Vo(t);if(!s)continue;let i=this._camposFechados.has(s);t.classList.add("dobravel"),t.classList.toggle("shut",i),a.setAttribute("role","button"),a.setAttribute("tabindex","0"),a.setAttribute("aria-expanded",i?"false":"true")}}}_toggleFold(e,t){let a=t?Vo(e.parentElement):jo(e.parentElement);if(!a)return;let s=t?this._camposFechados:this._fechadas;s.has(a)?s.delete(a):s.add(a),In(t?Lo:Ho,s),this._applyFolds()}firstUpdated(){let e=t=>{if(!t.target.closest||t.target.closest("button, a, input, select, textarea, label:not(.flabel)"))return null;let a=t.target.closest(".panel.dobra > .fold-head");if(a)return[a,!1];let s=t.target.closest(".sheet .field.dobravel > .flabel");return s?[s,!0]:null};this.renderRoot.addEventListener("click",t=>{let a=e(t);a&&this._toggleFold(a[0],a[1])}),this.renderRoot.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;let a=e(t);a&&(t.preventDefault(),this._toggleFold(a[0],a[1]))})}updated(e){if(this.toggleAttribute("dark",this._dark),this._markTabs(),this._labelIcons(),this._applyFolds(),this._chatAfterRender(),this._memoriaTick(),this._focusSearch){let t=this.renderRoot.querySelector("input[data-q='buscar']");if(t){this._focusSearch=!1,t.focus({preventScroll:!0});try{t.setSelectionRange(t.value.length,t.value.length)}catch{}}}if(this._scrollWeek){let t=this.renderRoot.querySelector(".tgrid-scroll");if(t){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&oe(this._cursor,a)?Math.max(0,a.getHours()-1):7;t.scrollTop=s*je}}if(e.has("_path")&&this._view().name==="more"){let t=this.renderRoot.querySelector(".more-tabs"),a=t&&t.querySelector("button.on");if(a){let i=a.offsetLeft,r=i+a.offsetWidth;i<t.scrollLeft?t.scrollLeft=i-8:r>t.scrollLeft+t.clientWidth&&(t.scrollLeft=r-t.clientWidth+8)}let s=this._view().tab;s==="integracoes"&&(this._refreshAi(!1),this._loadUsage(),this._memoriaOn()&&this._loadMemoria(!0)),s==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let e=this._theme==="dark"?!0:this._theme==="light"?!1:Fi();e!==this._dark&&(this._dark=e)}_setTheme(e){this._theme=e,xa.set(Po,e),this._syncDark()}async _start(){this._started=!0,this._store=new ia(this.api,()=>this._ver++),this.api.onStatus(e=>this._online=e),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(e=>this._onCalendar(e)).catch(()=>{}),this.api.subscribePrefs(e=>this._setPrefs(e)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(e=>{let t=e&&e.test;t&&this._home&&t.at!==this._testSeen&&Date.now()-t.at<12e4&&(this._haptic("success"),this._showToast(`${t.person?`${t.person}: o`:"O"} bot\xE3o ${t.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=t&&t.at,this._home=e}).catch(()=>{})}async _boot(e){try{let t=await this.api.bootstrap();this._version=t.version||"",this._atalho=t.atalho||null,this._user=t.user||{name:""},this._ai=t.ai||this._ai,this._aiAt=Date.now(),this._loadVoice(),this._states=t.states||{},this._entities=t.entities||{},this._devices=t.devices||{},this._prefs=t.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),e&&this._store.reloadAll()}catch(t){this._ready||(this._bootError=t.message||String(t)),e||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(e){let t={...this._states},a=e.entity_id in t;e.new_state?t[e.entity_id]=e.new_state:delete t[e.entity_id],this._states=t,(!a||!e.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(e){e&&(this._prefs={calendars:e.calendars||{},app:e.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(e=>!e.hidden).map(e=>e.id))}_app(e,t){let a=this._prefs.app?this._prefs.app[e]:void 0;return a===void 0?t:a}_accentDaily(){return this._app("accent_daily",!0)!==!1}_accent(){return this._accentDaily()?ri(Qe,new Date(this._now||Date.now())):Oa(this._app("accent","turquesa"))||ne("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let e=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},r=i.device_id?this._devices[i.device_id]:null,l=On(i.platform),d=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:r,plat:l,orig:d}});e.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let t=e.map(({id:a,st:s,reg:i,dev:r,plat:l,orig:d},c)=>{let h=(this._prefs.calendars||{})[a]||{},p=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:h.name||d,origName:d,group:l.label,icon:l.icon,device:r?r.name_by_user||r.name:null,color:Oa(h.color)||Vs(c),colorId:h.color||null,hidden:!!h.hidden,features:p,canCreate:ls(p,ns.CREATE),canUpdate:ls(p,ns.UPDATE),canDelete:ls(p,ns.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:t},t}_cal(e){return this._cals().find(t=>t.id===e)}_visible(){return this._cals().filter(e=>!e.hidden)}_writable(){return this._cals().filter(e=>e.canCreate&&!e.unavailable)}_defaultCal(){let e=this._writable(),t=this._app("default_calendar",null),a=e.filter(i=>!i.hidden),s=a.find(i=>i.canUpdate&&i.canDelete)||a.find(i=>i.canDelete)||a[0];return(e.find(i=>i.id===t)||s||e[0]||{}).id||null}_events(e,t){this._store.ensure(e,t);let a=this._store.query(e,t),s=this._away();s&&(a=[...a.filter(d=>!(d.kind&&(d.kind.kind==="rotina"||d.kind.kind==="manutencao")&&this._awayDay(d.start))),...this._awayBack(s,e,t)]);let i=new Set(a.filter(d=>this._afterDoneOn(d)===O(d.start)).map(d=>`${d.cal}|${d.summary}|${O(d.start)}`)),r=this._movedDoneEvents(e,t).filter(d=>!i.has(`${d.cal}|${d.summary}|${O(d.start)}`)),l=[...this._gerenciaEvents(e,t),...this._todoEvents(e,t),...r];return l.length?[...a,...l].sort((d,c)=>d.start-c.start||Number(c.allDay)-Number(d.allDay)||d.summary.localeCompare(c.summary,"pt-BR")):a}_awayBack(e,t,a){let s=z(q(e.to),1);if(!(s<a&&z(s,1)>t))return[];let i=q(e.from);this._store.ensure(i,s);let r=l=>l.kind&&!l.rrule&&(l.kind.kind==="rotina"&&l.kind.after||l.kind.kind==="manutencao");return this._store.query(i,s).filter(l=>r(l)&&this._awayDay(l.start)).map(l=>{let d=l.allDay?s:new Date(s.getFullYear(),s.getMonth(),s.getDate(),l.start.getHours(),l.start.getMinutes());return{...l,start:d,end:l.allDay?z(s,1):new Date(d.getTime()+Math.max(0,l.end-l.start)),awayBack:!0}})}_away(){let e=this._app("away",null);return e&&e.from&&e.to?e:null}_awayDay(e){let t=this._away(),a=O(e);return!!(t&&a>=t.from&&a<=t.to)}_awayNow(){return this._awayDay(new Date(this._now))}_renderAwayBanner(){let e=this._away(),t=new Date(this._now);if(!e||e.to<O(t))return m;let a=this._awayNow(),s=q(e.from),i=q(e.to),r=K(i,s)+1,l=K(R(t),s)+1,d=h=>J(h,t,{long:!1,cap:!1}),c=a?l>=r?"\xDAltimo dia":`Dia ${l} de ${r}`:`${P(r,"dia","dias")}, at\xE9 ${d(i)}`;return n`<div class="away-card ${a?"on":"ahead"}" role="status">
      <div class="aw-top">
        <span class="aw-ic" aria-hidden="true">${w("plane")}</span>
        <span class="aw-tx">
          <span class="aw-over">${a?"De f\xE9rias":"F\xE9rias marcadas"}</span>
          <b class="aw-title">${a?`at\xE9 ${d(i)}`:`a partir de ${d(s)}`}</b>
          <small>${c}</small>
        </span>
      </div>
      ${a?n`<div class="aw-bar" role="progressbar" aria-valuemin="1" aria-valuemax=${r} aria-valuenow=${Math.min(l,r)} aria-label="Dia ${Math.min(l,r)} de ${r}"><span style="width:${Math.round(Math.min(l,r)/r*100)}%"></span></div>`:m}
      <div class="aw-chips">
        <span class="aw-chip">${w("circle-pause")}Rotinas, tarefas e manutenção pausadas</span>
      </div>
      <button class="text-btn aw-end" @click=${()=>this._saveAppPrefs({away:null})}>${w("x")}${a?"Encerrar f\xE9rias":"Cancelar f\xE9rias"}</button>
    </div>`}async _saveCalPrefs(e,t){try{this._setPrefs(await this.api.setCalendarPrefs(e,t))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(e){try{this._setPrefs(await this.api.setAppPrefs(e))}catch(t){this._showToast(`N\xE3o consegui salvar: ${t.message}`)}}_view(){return pa(this._path)}async _go(e,t=!1){e=ha(e),this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=history.state||{},i={rvDepth:(a.rvDepth||0)+(t?0:1),rvPath:e},r=this._view();ua(pa(e))&&(t?a.rvUp:r.name==="more"&&r.tab==="menu")&&(i.rvUp=!0),t?history.replaceState(i,""):history.pushState(i,""),this._path=e,e==="/calendario"&&(this._scrollWeek=!0);let l=this.renderRoot&&this.renderRoot.querySelector("main");l&&l.scrollTo({top:0,behavior:"instant"})}async _goMenu(){this._sheet&&await this._closeSheet(),history.state&&history.state.rvUp?await this._popEntry("rvUp"):await this._go("/mais",!0);let e=this.renderRoot&&this.renderRoot.querySelector("main");e&&e.scrollTo({top:0,behavior:"instant"})}_onSwipeStart(e){this._sw=this._sheet||this._cam?null:Ci(e,".month")}_onSwipeEnd(e){let t=Ti(e,this._sw);if(this._sw=null,!t||this._sheet)return;if(ua(this._view())){if(t>0)return;this._haptic("light"),this._goMenu().then(()=>Ya(this,"more",t));return}let a=[["now",""],["calendar","/calendario"],this._fourthTab(),["more","/mais"]],s=a.findIndex(([r])=>r===this._shownView().name),i=s+t;s<0||i<0||i>=a.length||(this._haptic("light"),this._goTab(a[i][1]),Ya(this,a[i][0],t))}async _goTab(e){let t=this._view();if(e==="/mais"&&t.name==="more"){if(ua(t))return this._goMenu();let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}e!==""&&this._sheet&&await this._closeSheet(),e!==""&&history.state&&history.state.rvUp&&await this._popEntry("rvUp");let a=this._view().name;if(e===""){if(a==="now"){let i=this.renderRoot.querySelector("main");i&&i.scrollTo({top:0});return}let s=history.state&&history.state.rvDepth||0;s>0?history.go(-s):this._go("",!0);return}if(e==="/calendario"&&a==="calendar"){this._cursor=R(new Date),this._scrollWeek=!0;return}this._go(e,a!=="now")}_openDay(e,t){this._cursor=R(e),t&&this._setMode(t),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(e){this._mode=e,xa.set(Io,e),this._scrollWeek=!0}_popEntry(e){if(!(history.state&&history.state[e]))return Promise.resolve();let t=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(r=>r!==s),this._popping===t&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=t,history.back(),t}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let e=history.state&&history.state.rvPath||"",t=ha(e);t!==e&&history.replaceState({...history.state,rvPath:t},""),t!==this._path&&(this._path=t);for(let a of[...this._popWaiters||[]])a()}async _openSheet(e,t=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=e,this._form=t,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._stopVoice(),this._chatStop(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(e){this._form={...this._form,...e}}_openInHA(e){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(e)}_haptic(e){this.env&&this.env.haptic&&this.env.haptic(e)}_showToast(e,t=null){clearTimeout(this._toastTimer),this._toast={text:e,action:t,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,t?5e3:2800)}_userName(){let e=Gt();return(this._user&&this._user.name||e&&e.user&&e.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let e=Gt();return e&&e.user?!!e.user.is_admin:!0}_openEvent(e){if(e.movedDone)return e.movedDone.item?this._openIndexItem(e.movedDone.item):this._showToast(`${N(e.summary,30)}: feita ${J(q(e.movedDone.day),new Date(this._now),{long:!1,cap:!1})}${e.movedDone.by?` por ${e.movedDone.by}`:""}`);if(e.gerencia){this._openSheet("bill",{b:{id:e.gerencia.id,c:e.gerencia}});return}if(e.todo){this._openSheet("todo",{key:e.todo.key});return}this._openSheet("event",{ev:e})}_money(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:e=null,date:t=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(e&&e.kind)return this._openKindForm({ev:e,copy:i});if(!this._writable().length&&!(e&&!i)){this._openSheet("nocal",{});return}let l;if(e){let d=e.allDay?z(e.end,-1):e.end;l={mode:i?"add":"edit",cal:i?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._defaultCal():e.cal,origCal:e.cal,uid:e.uid,rid:i?null:e.rid,title:e.summary,allDay:e.allDay,date:O(e.start),endDate:e.allDay?K(d,e.start)>0?O(d):"":oe(e.start,e.end)?"":O(e.end),start:e.allDay?"09:00":W(e.start),end:e.allDay?"10:00":W(e.end),repeat:$t(e.rrule),rrule:e.rrule||"",location:e.location,notes:e.description}}else{let d=t?R(t):R(new Date),c=new Date,h=a??(oe(d,c)?Math.min(23,c.getHours()+1):9),p=u=>String(u).padStart(2,"0");l={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:O(d),endDate:"",start:`${p(h)}:00`,end:`${p(Math.min(23,h+1))}:${h+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}if(l.details=!!(String(l.location||"").trim()||String(l.notes||"").trim()),l.mode==="edit")try{l.before=this._eventFromForm(l)}catch{l.before=null}this._openSheet("form",l),l.mode==="add"&&!l.title&&this.updateComplete.then(()=>{let d=this.renderRoot.querySelector(".sheet .ev-title-input");d&&d.focus()})}_eventFromForm(e,{keepRrule:t=!0}={}){if(e.kind)return this._kindEvents(e,{keepRrule:t})[0];let a=(e.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||""))throw new Error("Escolha a data");let s={summary:a};if(e.allDay){let i=e.endDate&&e.endDate>e.date?e.endDate:e.date;s.start=e.date,s.end=O(z(q(i),1))}else{let[i,r]=(e.start||"09:00").split(":").map(Number),[l,d]=(e.end||e.start||"10:00").split(":").map(Number),c=q(e.date),h=new Date(c.getFullYear(),c.getMonth(),c.getDate(),i,r),p=e.endDate&&e.endDate>e.date?q(e.endDate):c,u=new Date(p.getFullYear(),p.getMonth(),p.getDate(),l,d);u<=h&&(u=z(u,1)),u-h<6e4&&(u=new Date(h.getTime()+30*6e4)),s.start=fe(h),s.end=fe(u)}if((e.location||"").trim()&&(s.location=e.location.trim()),(e.notes||"").trim()&&(s.description=e.notes.trim()),t){let i=e.rrule&&$t(e.rrule)===e.repeat?e.rrule:e.repeat?`FREQ=${e.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let e=this._form;if(e.kind)return this._saveKindForm();let t;try{t=this._eventFromForm(e)}catch(s){this._showToast(s.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:t});return}this._setForm({saving:!0});try{e.mode==="add"?(await this.api.createEvent(e.cal,t),this._done(`Evento criado em ${N(a.name,24)}`,e.cal,t.start)):e.cal!==e.origCal?(await this.api.createEvent(e.cal,t),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`Evento movido para ${N(a.name,24)}`,e.cal,t.start)):(await this._saveInPlace(e,t),this._done(e.rid&&!a.canUpdate?"Evento salvo \xB7 a s\xE9rie recome\xE7a neste dia":"Evento salvo",e.cal,t.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}async _saveInPlace(e,t){let a=this._cal(e.cal);if(!a||a.canUpdate)return this.api.updateEvent(e.cal,e.uid,t);if(!(a.canCreate&&a.canDelete))throw new Error("Esse calend\xE1rio n\xE3o deixa mudar eventos");await this.api.deleteEvent(e.cal,e.uid);try{await this.api.createEvent(e.cal,t)}catch(s){throw e.before&&await this.api.createEvent(e.cal,e.before).catch(()=>{}),s}}_canEdit(e){let t=this._cal(e);return!!t&&(t.canUpdate||t.canCreate&&t.canDelete)}_done(e,t,a){this._haptic("success"),this._closeSheet(),this._store.refresh(t);let s=a?R(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?q(a):a)):null;this._showToast(e,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(e){let t=this._form,a={recurrenceId:t.rid,range:e==="future"?"THISANDFUTURE":void 0};try{if(t.action==="edit"){let s=t.event;e==="one"&&(s=this._eventFromForm(t,{keepRrule:!1})),await this.api.updateEvent(t.cal,t.uid,s,a),this._done(e==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",t.cal,s.start)}else await this.api.deleteEvent(t.cal,t.uid,e==="all"?{}:a),this._done(e==="all"?"A s\xE9rie toda foi apagada":e==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",t.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(e){if(e.rid){this._openSheet("scope",{action:"delete",cal:e.cal,uid:e.uid,rid:e.rid,title:e.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${N(e.summary,28)}\u201D?`,text:`${X(J(e.start,new Date(this._now)))} \xB7 ${Rn(e)}. Ele sai do calend\xE1rio ${N((this._cal(e.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(e.cal,e.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(e.cal);let t={summary:e.summary,start:e.raw.start,end:e.raw.end};e.location&&(t.location=e.location),e.description&&(t.description=e.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(e.cal,t).then(()=>this._store.refresh(e.cal)).catch(a=>this._showToast(a.message))})}catch(t){this._showToast(`N\xE3o consegui apagar: ${t.message}`)}}})}_openImport(e="pick",t={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:e==="text"?"text":e==="voice"?"voice":"pick",rec:e==="voice"?"starting":"off",text:"",images:[],items:[],provider:null,error:null,note:null,...t});return e==="photos"&&this._pickFiles("photos"),e==="scan"&&this._openCamera(),e==="text"&&this._focusSheetText(),e==="ics"&&this._pickFiles("ics"),e==="voice"&&s.then(()=>this._startVoice()),s}async _loadVoice(e=!1){if(this.api.voiceStatus){try{this._voice=await this.api.voiceStatus(e)}catch(t){this._voice={ready:!1,reason:t.message}}this.requestUpdate()}}async _chooseVoice(e){await this._saveAppPrefs({voice_engine:e||null}),await this._loadVoice(!0),this._showToast("Fala para texto atualizada")}_renderVoicePanel(){let e=this._voice,t=this._app("voice_engine","")||"",a=e&&e.options||[],s=!e||this._voiceChecking,i=s?"off":e.ready&&!e.missing?"ok":e.ready?"warn":"bad",r=s?"Verificando\u2026":e.ready?"Pronto para ouvir":"Sem fala para texto",l=s?"":e.ready?`Transcreve com ${e.name}.${e.missing?" O escolhido n\xE3o foi encontrado: usando o autom\xE1tico.":""}`:e.reason||"",d=async()=>{this._voiceChecking=!0,this.requestUpdate(),await this._loadVoice(!0),this._voiceChecking=!1,this.requestUpdate()};return n`<div class="panel" id="falar">
      ${this._secHead("mic","Falar","Quem transforma a fala em texto. N\xE3o muda o assistente de voz do Home Assistant.")}
      <div class="ai-state ${i}"><span class="dot"></span><div><b>${r}</b>${l?n`<span>${l}</span>`:m}</div></div>
      ${a.length||t?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">Fala para texto</span>
            <select class="select" aria-label="Fala para texto" @change=${c=>this._chooseVoice(c.target.value)}>
              <option value="" ?selected=${!t}>Automático${e&&e.auto?`: ${e.auto.name}`:""}</option>
              ${a.map(c=>n`<option value=${c.id} ?selected=${c.id===t}>${c.name}</option>`)}
              ${t&&!a.some(c=>c.id===t)?n`<option value=${t} selected>${t} (não encontrado)</option>`:m}
            </select>
          </label>`:m}
      <div class="ai-actions"><button class="btn outline" ?disabled=${s} @click=${d}>${w("rotate-ccw")}Verificar de novo</button></div>
      ${e&&!e.ready?n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>Com o Home Assistant Cloud, a fala para texto já vem pronta.</li>
              <li>Sem ele, instale um motor de fala: o app Whisper (local, de graça) com a integração Wyoming, ou a fala para texto de uma IA como Google Gemini ou OpenAI.</li>
              <li>Volte aqui, toque em Verificar de novo e escolha o motor na lista.</li>
            </ol>
          </div>`:m}
    </div>`}async _startVoice(){if(this._rec||!this._form)return;this._setForm({step:"voice",rec:"starting",secs:0,level:0,error:null,heard:""});let e=new rt(t=>this._voiceLevel=t);this._rec=e;try{await e.start()}catch(t){e.cancel(),this._rec===e&&(this._rec=null),this._form&&this._form.step==="voice"&&this._setForm({rec:"off",error:ra(t)});return}if(this._rec!==e||!this._form||this._form.step!=="voice")return e.cancel();this._setForm({rec:"on"}),clearInterval(this._recTimer),this._recTimer=setInterval(()=>{if(this._rec!==e)return clearInterval(this._recTimer);let t=e.seconds();this._setForm({secs:t,level:this._voiceLevel||0}),t>=120&&this._finishVoice()},120)}_stopVoice(){clearInterval(this._recTimer),this._rec&&this._rec.cancel(),this._rec=null}async _finishVoice(){let e=this._rec;if(!e)return;clearInterval(this._recTimer),this._rec=null;let t=e.stop();if(t.length<16e3*.4){this._setForm({rec:"off",error:"N\xE3o ouvi nada. Toque no microfone e fale."});return}let a=this._importToken=(this._importToken||0)+1;this._setForm({step:"loading",error:null,prevStep:"voice",loadingText:"Transcrevendo o que voc\xEA disse\u2026"});try{let s=await this.api.voiceText(t);if(this._importToken!==a||!this._form)return;this._setForm({text:s.text,heard:s.text}),this._readText()}catch(s){if(this._importToken!==a||!this._form)return;this._setForm({step:"voice",rec:"off",error:s.message||"N\xE3o consegui transcrever."})}}_renderMicBtn(){let e=this._voice;return!e||!e.ready||!this._aiOn()||!(this._ai&&this._ai.ready)?m:n`<button class="mic-top" aria-label="Falar: criar evento falando" title="Falar" @click=${()=>this._openImport("voice")}>${w("mic")}</button>`}_renderVoiceStep(e){let t=this._form,a=this._voice||{},s=t.rec==="on",i=Math.floor((t.secs||0)/60),r=String(Math.floor((t.secs||0)%60)).padStart(2,"0");return n`
      ${this._sheetHead("Falar")}
      <div class="voice ${s?"on":""}">
        <button class="voice-mic" style="--lvl:${s?(t.level||0).toFixed(2):0}" aria-label=${s?"Pronto: enviar o que falei":"Come\xE7ar a falar"} @click=${()=>s?this._finishVoice():this._startVoice()}>
          <span class="voice-ring"></span>${w(s?"check":"mic")}
        </button>
        <div class="voice-state">${s?n`<b>Ouvindo…</b> <span class="voice-time">${i}:${r}</span>`:t.rec==="starting"?"Abrindo o microfone\u2026":"Toque no microfone e fale"}</div>
        <p class="voice-hint">${s?"Toque de novo quando terminar.":n`Por exemplo: <i>“Dentista quinta às 15h na Clínica Sorriso”</i> ou <i>“Aniversário da Ana sábado, o dia todo”</i>.`}</p>
      </div>
      ${t.error?n`<div class="imp-error">${w("circle-alert")}<span>${t.error}</span></div>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${w("x")}Cancelar</button>
        <button class="btn primary" ?disabled=${!s} @click=${()=>this._finishVoice()}>${w("sparkles")}Pronto</button>
      </div>
      ${a.ready?m:n`<p class="sheet-note">${a.reason||""}</p>`}
    `}_focusSheetText(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".sheet textarea");e&&e.focus()})}_pickFiles(e){let t=this.renderRoot.querySelector(e==="scan"?"#cr-scan":e==="ics"?"#cr-ics":"#cr-photos");t&&(t.value="",t.click())}_releaseImages(){let e=this._form;if(e&&e.images)for(let t of e.images)t.url&&URL.revokeObjectURL(t.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(e){let t=r=>r.type==="application/pdf"||/\.pdf$/i.test(r.name||""),a=[...e.target.files||[]].filter(r=>!r.type||r.type.startsWith("image/")||t(r)).slice(0,6);if(e.target.value="",a.some(t)&&(a=[a.find(t)]),!a.length)return;this._sheet!=="import"&&await this._openImport("pick");let s=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:s?"review":"pick"});let i=[];for(let r of a)if(t(r)){let{files:l}=await la([r]);l[0]&&i.push({mime:"application/pdf",data:l[0].data,url:"",pdf:!0,nome:l[0].nome})}else i.push(await Ia(r));this._readImages(i,s)}async _onIcsFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let a;try{a=Xi(await t.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:t.name,note:null,error:null})}_readImages(e,t){if(this._sheet!=="import"||!e.length)return;let a=t?[...this._form.images||[],...e]:(this._releaseImages(),e);this._setForm({step:"loading",images:a,prevStep:t?"review":"pick",loadingText:e.some(s=>s.pdf)?"Lendo o PDF com IA\u2026":e.length>1?`Lendo ${e.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:e,appending:t})}async _runExtract({text:e,images:t,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",r=a?this._form.items||[]:[];try{let l=await this.api.extract({text:e,images:t?t.map(({data:c,mime:h})=>({data:c,mime:h})):void 0});if(!i())return;let d=l.events||[];if(!d.length){let c=e?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:c}):this._setForm({step:e?"text":"pick",error:c});return}this._haptic("success"),this._setForm({step:"review",items:[...r,...d.map(c=>({...c,on:!0}))],provider:l.provider||null,note:null,error:null})}catch(l){if(!i())return;a?this._setForm({step:"review",note:l.message||"Algo deu errado"}):this._setForm({step:e?"text":"pick",error:l.message||"Algo deu errado"})}}_readText(){let e=(this._form.text||"").trim();if(!e)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Configura\xE7\xF5es \u203A Integra\xE7\xF5es)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:e})}_clipOk(){return!!(navigator.clipboard&&navigator.clipboard.readText)&&!this._clipFailed}async _pasteClipboard(){let e="";try{e=await navigator.clipboard.readText()}catch{this._clipFailed=!0,this._focusSheetText(),this._showToast("Este aparelho n\xE3o deixa o app ler o que foi copiado. Toque e segure no campo e escolha Colar."),this.requestUpdate();return}if(!e){this._focusSheetText(),this._showToast("N\xE3o h\xE1 nada copiado.");return}this._setForm({text:e,error:null})}_setItem(e,t){let a=this._form.items.slice();a[e]={...a[e],...t},this._setForm({items:a})}_itemEvent(e){let t=s=>{let[i,r]=s.split(":").map(Number),l=Math.min(1439,i*60+r+60);return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[e.repeat]||"";return this._eventFromForm({title:e.title,date:e.date,endDate:e.end_date||"",allDay:!e.start,start:e.start,end:e.end||(e.start?t(e.start):""),repeat:e.rrule?$t(e.rrule):a,rrule:e.rrule||"",location:e.location,notes:e.notes})}async _importAdd(){let e=this._form,t=e.items.filter(r=>r.on&&(r.title||"").trim()),a=this._cal(e.target);if(!t.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let r of t)try{let l=this._itemEvent(r);await this.api.createEvent(e.target,l),s++,(!i||l.start<i)&&(i=l.start)}catch(l){this._showToast(`\u201C${N(r.title,24)}\u201D: ${l.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${P(s,"evento adicionado","eventos adicionados")} em ${N(a.name,20)}`,e.target,i)}async _openCamera(e={}){let t=navigator.mediaDevices,a=!!e.chat,s=!a&&!!(this._form&&this._form.step==="review");if(!t||!t.getUserMedia){this._cam={status:"error",shots:[],chat:a,appending:s,flash:0,error:window.isSecureContext===!1?"A c\xE2mera aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher.":"Este navegador n\xE3o deixa o app usar a c\xE2mera. Escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher."};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}return}this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:s,chat:a,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let i=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){i.getTracks().forEach(c=>c.stop());return}this._stream=i;let r=i.getVideoTracks()[0],l=r&&r.getCapabilities?r.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!l.torch},await this.updateComplete;let d=this.renderRoot.querySelector(".cam video");d&&(d.srcObject=i,d.play().catch(()=>{}))}catch(i){if(!this._cam)return;let r=i&&(i.name==="NotAllowedError"||i.name==="SecurityError");this._cam={...this._cam,status:"error",error:r?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(e=>e.stop()),this._stream=null}_closeCamera(e=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let t of this._cam.shots||[])URL.revokeObjectURL(t.url);this._cam=null,e||this._popEntry("rvCam")}}async _toggleTorch(){let e=this._stream&&this._stream.getVideoTracks()[0];if(!e)return;let t=!this._cam.torch;try{await e.applyConstraints({advanced:[{torch:t}]}),this._cam={...this._cam,torch:t}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let e=this.renderRoot.querySelector(".cam video");if(!e||!e.videoWidth||!this._cam||this._cam.shots.length>=6)return;let t=1800,a=Math.min(1,t/Math.max(e.videoWidth,e.videoHeight)),s=document.createElement("canvas");s.width=Math.round(e.videoWidth*a),s.height=Math.round(e.videoHeight*a),s.getContext("2d").drawImage(e,0,0,s.width,s.height);let i=await new Promise(l=>s.toBlob(l,"image/jpeg",.86));if(!i||!this._cam)return;let r=await Ia(i,t);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,r],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let e=this._cam.shots,t=this._cam.appending,a=this._cam.chat;if(this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,a)return this._chatAddShots(e);this._sheet!=="import"&&await this._openImport("pick"),this._readImages(e,t&&this._form.step==="review")}_cameraFallback(){let e=this._cam&&this._cam.appending;if(this._cam&&this._cam.chat)return this._closeCamera(),this._chatAttach("fotos");this._closeCamera(),e&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(e=!0){if(!(!e&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(t){this._ai={...this._ai,ready:!1,images:!1,reason:t.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(e){await this._saveAppPrefs({ai_entity:e||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/config",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#leitura-ia");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(e=>e.id),range:"12m"})}_exportRange(e){let t=R(new Date);return e==="3m"?[t,Te(t,3)]:e==="year"?[Te(t,-12),Te(t,12)]:[t,Te(t,12)]}render(){if(!this._ready)return n`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?n`${w("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:n`<span class="spin">${w("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let e=this._shownView(),t=this._accent(),a=this._dark,s=`--rv-accent:${t.fill};--rv-accent-ink:${a?t.fill:t.ink};--rv-accent-soft:${wt(t.fill,a?.18:.14)};--rv-accent-faint:${wt(t.fill,a?.08:.07)};--rv-accent-ink-light:${t.ink};`,i;return e.name==="calendar"?i=this._renderCalendar():e.name==="more"?i=this._renderMore():e.name==="rewards"?i=this._renderRewards():e.name==="routines"?i=this._renderRoutinesTab():i=this._renderNow(),e.name!=="now"&&(this._medsHold=this._choresHold=!1),n`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?n`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:m}
          ${this._online?m:n`<div class="offline">${w("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          ${this._renderSide(e)}
          <main @touchstart=${r=>this._onSwipeStart(r)} @touchend=${r=>this._onSwipeEnd(r)}>${i}</main>
          ${this._renderNav(e)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*,application/pdf" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${r=>this._onIcsFile(r)} />
      </div>
    `}_renderNav(e){let t=s=>e.name===s,a=(s,i,r,l)=>n`<button class="tab ${t(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${r}>${w(l)}<span>${r}</span></button>`;return n`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:e.name==="calendar"?this._cursor:null})} aria-label="Adicionar">
          <span class="pill">${w("plus")}</span>
        </button>
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
    </nav>`}_fourthTab(){return this._scoreOn()?["rewards","/recompensas","Recompensas","trophy"]:["routines","/rotinas","Rotinas","repeat"]}_shownView(){let e=this._view();return e.name==="rewards"&&!this._scoreOn()?{name:"routines"}:e}_renderRoutinesTab(){let e=this._catalogCount();return n`<section class="page more-page routines-tab">
      ${this._renderHead("Rotinas",{text:e?P(e,"cadastro","cadastros"):"Nada cadastrado ainda"})}
      ${this._renderCatalog()}
    </section>`}_renderSide(e){let t=c=>e.name===c,a=(c,h,p,u)=>n`<button class="side-link" aria-current=${t(c)?"page":"false"} @click=${()=>this._goTab(h)}>${w(u)}<span>${p}</span></button>`,s=this._sideHeld||(this._sideHeld=new Set),i=this._cals().filter(c=>!c.hidden||s.has(c.id)),r=i.filter(c=>!c.hidden).length,l=this._cals().filter(c=>c.hidden&&!s.has(c.id)),d=c=>n`<button class="side-cal ${c.hidden?"off":""}" role="switch" aria-checked=${c.hidden?"false":"true"} title=${c.hidden?"Mostrar na agenda":"Esconder da agenda"} style=${B(c.color,this._dark)} @click=${()=>{c.hidden||s.add(c.id),this._saveCalPrefs(c.id,{hidden:c.hidden?null:!0})}}>
        <span class="sc-box">${c.hidden?m:w("check")}</span><span class="sl-name">${c.name}</span>
      </button>`;return n`<aside class="side" aria-label="Navegação">
      <div class="side-brand">${Kt()}Cronolog<span>IA</span></div>
      <div class="side-nav">
        ${a("now","","Agora","clock-3")}
        <button class="side-link" @click=${()=>this._toSearch()}>${w("search")}<span>Buscar</span><kbd>/</kbd></button>
        ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
      ${this._renderSideMonth(e)}
      ${i.length||l.length?n`<div class="side-h"><span>Calendários</span><small>${r===i.length?i.length:`${r} de ${i.length}`}</small></div>
            <div class="side-lists">
              ${i.map(d)}
              ${Xe(this,"side-cals","Ocultos",l.length,()=>l.map(d))}
            </div>`:m}
      <div class="side-foot">CronologIA${this._version?` ${this._version}`:""}</div>
    </aside>`}_renderSideMonth(e){let t=new Date(this._now),a=this._sideMonth||this._cursor,s=new Date(a.getFullYear(),a.getMonth(),1),i=this._app("week_start",1),r=Pe(s,i),l=z(r,35).getMonth()===s.getMonth()?6:5,d=Array.from({length:l*7},(p,u)=>z(r,u)),c=e.name==="calendar"?this._cursor:null,h=p=>{this._sideMonth=Te(s,p),this.requestUpdate()};return n`<div class="side-month">
      <div class="sm-head">
        <b>${X(De[s.getMonth()])}${s.getFullYear()!==t.getFullYear()?` ${s.getFullYear()}`:""}</b>
        <button class="icon-btn mini" aria-label="Mês anterior" @click=${()=>h(-1)}>${w("chevron-left")}</button>
        <button class="icon-btn mini" aria-label="Próximo mês" @click=${()=>h(1)}>${w("chevron-right")}</button>
      </div>
      <div class="sm-grid">
        ${[0,1,2,3,4,5,6].map(p=>n`<span class="sm-wd">${_e[(p+i)%7].slice(0,1).toUpperCase()}</span>`)}
        ${d.map(p=>n`<button class="sm-day ${p.getMonth()!==s.getMonth()?"out":""} ${oe(p,t)?"today":""} ${c&&oe(p,c)?"sel":""}" aria-label=${J(p,t)} @click=${()=>{this._sideMonth=null,this._openDay(p)}}>${p.getDate()}</button>`)}
      </div>
    </div>`}_renderHead(e,t,a=m,s=!1){let i=this._userName(),r=this._online?t:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return n`<header class="brand-head">
      <div class="head-row"><p class="eyebrow"><span class="brand">${Kt()}Cronolog<span>IA</span></span>${i?n`<span class="sep"> · </span>Olá, ${i}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      ${s?n`<button class="uplink" @click=${()=>this._goMenu()}>${w("chevron-left")}<span>Mais</span></button>`:m}
      <h1 class="page-title">${Ro[e]?n`<span class="mais-ic page-ic" aria-hidden="true">${w(Ro[e])}</span>`:m}${e}</h1>
      ${r?n`<p class="status"><span class="dot ${r.tone||""}" aria-hidden="true"></span><span>${r.text}</span></p>`:m}
      ${a}
    </header>`}_renderTopActs(){let e=this._aiOn()&&this._ai&&this._ai.ready,t=this._view().name==="calendar";return n`<div class="top-acts">
      ${this._renderChatBtn()}${this._renderMicBtn()}
      ${e?n`<button class="btn outline sm" @click=${()=>this._openImport("pick")}>${w("scan-text")}Ler com IA</button>`:m}
      <button class="btn primary sm" @click=${()=>this._openForm({date:t?this._cursor:null})}>${w("plus")}Adicionar</button>
    </div>`}_colorOfEvent(e){if(e.gerencia)return ne("ouro");if(e.todo)return ne(ct);let t=this._cal(e.cal);return t&&t.color||this._accent()}_realEvent(e){return!e.kind&&!e.todo&&!e.gerencia}_dayState(e,t,a){let s=R(a);return R(t)>s||!e.length?"":e.every(i=>this._rowDone(i))?"all-done":R(t)<s?"left":""}_rowDone(e){return e.todo?!!e.todo.done:e.gerencia?!!this._checkOf(e):e.kind?!!(e.kind&&e.kind.kind!=="manutencao"&&this._checkOf(e)):!!this._checkOf(e)}_openAnyDay(e){this._openSheet("anyday",{day:O(e)})}_renderAnyDaySheet(){let e=new Date(this._now),t=q(this._form.day),a=Oe(this._events(t,z(t,1)),t).filter(r=>r.allDay&&!this._realEvent(r)),s=[...this._byPeriod(a.filter(r=>!this._rowDone(r)),t),...a.filter(r=>this._rowDone(r))],i=a.length-a.filter(r=>!this._rowDone(r)).length;return n`${this._sheetHead("Qualquer hora")}
      <p class="sheet-note top">${X(J(t,e))} · ${i} de ${P(a.length,"feita","feitas")}</p>
      <div class="any-list">
        ${s.length?s.map(r=>this._renderAnyRow(r,t)):n`<p class="empty-line">Nada sem horário neste dia.</p>`}
      </div>`}_markerOf(e,t){let a=e.kind,s=a?a.kind:e.todo?"tarefa":"conta",i=this._rowDone(e),r=this._scorePoints(e),l=R(t)<=R(new Date(this._now)),d={key:e.key,summary:e.summary,points:a&&a.points||0},c=null,h=null;if(!(e.movedDone&&!e.movedDone.item)){if(s==="rotina"&&l)c=u=>this._markDone(d,"rotina",u),h=()=>this._undoCheck(d,"rotina");else if(s==="remedio"&&l)c=()=>this._check(d,"remedio"),h=()=>this._undoCheck(d,"remedio");else if(e.todo)c=u=>this._todoDone(e.todo,!0,u),h=()=>this._todoDone(e.todo,!1);else if(s==="manutencao"){let u=(this._ix().maint||[]).find(f=>f.cal===e.cal&&f.uid===e.uid&&f.canMove);u&&(c=f=>this._maintDone(u,f,!0))}}let p=!i&&!!c&&this._pickWho()&&(s==="rotina"||s==="manutencao"||!!e.todo&&r>0);return{kind:s,done:i,pts:r,mark:c,unmark:h,quick:p}}_renderAnyRow(e,t){let a=e.kind,{kind:s,done:i,pts:r,mark:l,unmark:d,quick:c}=this._markerOf(e,t),h=i&&!e.todo&&!e.gerencia&&a?this._checkOf(e):null,p=!!(h&&h.skipped),u=this._cal(e.cal),f=[a&&a.who,e.todo?e.todo.listName:u?u.name:e.gerencia?"GerencIA":""].filter(Boolean).join(" \xB7 ");return n`<div class="chore ${i?"done":""} ${p?"skipped":""}" style=${B(this._colorOfEvent(e),this._dark)}>
      ${l||i&&d?n`<button class="chk ${i?"on":""}" aria-label="${i?"Desmarcar":"Marcar"} ${e.summary}" @click=${()=>i?d&&d():l(null)}>${i?w(p?"skip-forward":"check"):m}</button>`:i?n`<span class="chk on" aria-label=${p?"Pulada":"Feito"}>${w(p?"skip-forward":"check")}</span>`:n`<span class="chk ro" aria-hidden="true">${w({manutencao:"wrench",conta:"receipt",remedio:"pill",rotina:"spray-can",tarefa:"list-checks"}[s]||"calendar")}</span>`}
      <button class="chore-tx" @click=${()=>this._openEvent(e)}><b>${e.summary}</b><small>${c&&r?n`<span class="pts-inline">+${r}</span> · `:m}${f||{rotina:"Rotina",manutencao:"Manuten\xE7\xE3o",remedio:"Rem\xE9dio",conta:"Conta",tarefa:"Tarefa"}[s]}</small></button>
      ${c?this._renderQuickWho(e.summary,r,x=>l(x)):r?n`<span class="pts ${i?"got":""}">+${r}</span>`:m}
    </div>`}_byPeriod(e,t){let a=new Date(this._now),s=oe(t,a)?a:new Date(t.getFullYear(),t.getMonth(),t.getDate(),6);return At(e,s,i=>i.kind&&i.kind.period||(i.allDay?"":Ge(i.start.getHours())))}_anyTime(e){return!!e.allDay&&(!!e.todo||!!e.kind&&e.kind.kind!=="conta")}_dayHead(e,t,a){let s=new Date(this._now);return n`<button class="day-head ${oe(e,s)?"today":""}" @click=${a}>
      <span class="dh-cal" aria-hidden="true"><small>${_e[e.getDay()].slice(0,3)}</small><b>${e.getDate()}</b></span>
      <span class="dh-label">${J(e,s)}</span>
      <span class="dh-count">${t}</span>
    </button>`}_renderDayRows(e,t){let a=c=>(!c.kind||c.kind.kind==="remedio")&&!c.todo&&!c.gerencia,s=(c,h)=>Number(c.allDay)-Number(h.allDay)||c.start-h.start,i=e.filter(a).sort(s),r=e.filter(c=>!a(c)).sort(s),l=r.filter(c=>!this._rowDone(c));r.splice(0,r.length,...this._byPeriod(l,t),...r.filter(c=>this._rowDone(c)));let d=this._awayDay(t)?n`<div class="away-day">${w("plane")}<span>Férias: rotinas, tarefas e manutenção pausadas</span></div>`:m;return n`${d}${i.map(c=>this._renderRow(c,t))}${r.length?n`<div class="day-sep ${i.length?"":"first"}">Rotinas, tarefas e lembretes</div>${r.map(c=>this._renderRow(c,t))}`:m}`}_renderRow(e,t,{showCal:a=!0}={}){let s=this._now,i=e.end.getTime()<=s,r=this._cal(e.cal),l;if(e.allDay){let k=K(e.end,e.start),g=k<=1&&this._anyTime(e)&&e.kind&&ge(e.kind.period);l=g?n`<b class="any">${g.label}</b><small class="per">${w(g.icon)}</small>`:k<=1&&this._anyTime(e)?n`<b class="any">Qualquer</b><small>hora</small>`:n`<b>Dia</b><small>${k>1?`${K(t,e.start)+1}/${k}`:"todo"}</small>`}else{let k=oe(e.start,t),g=oe(e.end,t)||e.end.getHours()===0&&e.end.getMinutes()===0&&K(e.end,t)===1;l=n`<b>${k?W(e.start):"\u2026"}</b><small>${g?W(e.end):"segue"}</small>`}let d=e.kind,c=e.todo?e.todo.done:d?d.kind!=="manutencao"&&this._checkOf(e):this._checkOf(e),h=!c&&e.start.getTime()<=s&&e.end.getTime()>s&&!e.allDay,p=!c&&d&&d.kind==="remedio"&&R(e.start)<R(new Date(s)),f=[...d?d.kind==="remedio"?[d.dose,d.who]:d.kind==="conta"&&d.value!=null?[this._money(d.value)]:[d.who]:[],e.location].filter(Boolean).join(" \xB7 "),x=a?r?r.name:e.gerencia?"GerencIA":e.todo?`${e.todo.listName} \xB7 ResolvIA`:"":"",y=(d||e.todo)&&this._pickWho()?this._markerOf(e,t):null,M=this._scoreOn()&&!c?d&&(d.kind==="rotina"||d.kind==="manutencao")&&d.points>0?d.points:e.todo&&e.todo.points>0?e.todo.points:0:0,D=e.rrule?Ie(e.rrule):d&&d.kind==="rotina"&&d.after?`Volta ${ce(d.after)} depois de feita`:d&&d.kind==="manutencao"&&d.every?`A cada ${ce(d.every)}`:"",v=n`<button class="ev-row ${i?"past":""} ${h?"live":""} ${c?"done":""}" style=${B(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="ev-time">${l}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo?n`<span class="kind-ic">${w("list-checks")}</span>`:this._kindIcon(e)}${e.summary}${c?n`<span class="ev-done ${c.skipped?"skipped":""}" title=${c.skipped?e.kind&&e.kind.kind==="remedio"?"Pulado":"Pulada":""}>${w(c.skipped?"skip-forward":"check")}</span>`:p?n`<span class="ev-done missed" title="Não tomado" aria-label="Não tomado">${w("x")}</span>`:m}</span>${f||M||x?n`<span class="ev-sub">${M?n`<span class="pts-inline">+${M}</span>${f||x?" \xB7 ":""}`:m}${f}${x?n`${f?" \xB7 ":""}<span class="ev-cal">${x}</span>`:m}</span>`:m}</span>
      ${D&&!(y&&y.quick)?n`<span class="ev-rep" title=${D}>${w("repeat")}</span>`:m}
    </button>`;return y&&y.quick?n`<div class="ev-line">${v}${this._renderQuickWho(e.summary,y.pts,k=>y.mark(k))}</div>`:v}_renderNow(){let e=new Date(this._now),t=R(e),a=this._events(z(t,-1),z(t,2)).filter(T=>!T.kind&&!T.todo),s=this._store.loading(z(t,-1),z(t,2)),i=this._ix().meds.filter(T=>T.state==="atrasado"),r=Oe(a,t),l=T=>T.end-T.start>=12*36e5,d=r.filter(T=>(T.allDay||l(T))&&!this._checkOf(T)),c=r.filter(T=>!T.allDay&&!l(T)),h=c.filter(T=>T.start<=e&&T.end>e&&!this._checkOf(T)).sort((T,re)=>re.start-T.start),p=z(t,1),f=a.filter(T=>!T.allDay&&T.start>e&&T.start<p&&!l(T)&&!this._checkOf(T)).sort((T,re)=>T.start-re.start)[0],x=this._visible();if(!this._cals().length)return this._renderNoCalendars();let y=r.filter(T=>!this._checkOf(T)),M=c.filter(T=>!this._checkOf(T)),D=M.filter(T=>T.end>e).length,v=this._awayNow()?"de f\xE9rias":r.length?y.length?`${P(y.length,"evento","eventos")} hoje${D&&D<M.length?` \xB7 ${D} pela frente`:""}`:"tudo feito hoje":"nada hoje",k=i.length?{text:`${X(Na(e))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${X(Na(e))} \xB7 ${v}`},g,$=null;if(h.length){$=h[0];let T=h[0],re=this._cal(T.cal);g=this._ticket(T,{label:"Agora",pill:`termina ${Wt(T.end-e)}`,when:n`<b>${W(T.start)}</b> – <b>${W(T.end)}</b> · ${Pa(T.end-T.start)}`,stub:f?n`<span class="tk-next">Depois <b>${W(f.start)}</b> ${f.summary}</span>`:n`<span class="dot"></span><span>${[re&&re.name,T.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e,live:!0})}else if(f){$=f;let T=this._cal(f.cal);g=this._ticket(f,{label:"A seguir",pill:Wt(f.start-e),when:n`<b>${W(f.start)}</b> – ${W(f.end)} · hoje`,stub:n`<span class="dot"></span><span>${[T&&T.name,f.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e})}let _=$&&c.length===1&&c[0]===$||!c.some(T=>T.end>e&&!this._checkOf(T)),b=this._showAllDay||d.length<=3?d:d.slice(0,2),A=n`<div class="now-line"><span>${W(e)}</span></div>`,E=!1,I=this._ix().meds||[],j=I.length>0&&I.every(T=>T.taken)&&!this._medsHold,H=x.length?m:n`<div class="hint-card">${w("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais/calendarios")}>${w("eye")}Mostrar</button></div>`,Z=n`${j?m:this._renderMedsPanel()} ${this._renderBillsPanel()}`,he=T=>{let re=z(new Date(T.end),T.allDay?-1:0);return T.end-T.start>864e5&&K(re,t)>=1?` \xB7 at\xE9 ${ee(re,e)}`:""},te=d.length?n`<div class="allday" aria-label="O dia todo">
          ${b.map(T=>n`<button class="ad-chip" style=${B(this._colorOfEvent(T),this._dark)} @click=${()=>this._openEvent(T)}><span class="dot"></span><span>${T.summary}<small>${he(T)}</small></span></button>`)}
          ${d.length>b.length?n`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${d.length-b.length} o dia todo</button>`:m}
        </div>`:m,V=!(_&&!d.length);this._nowShown={now:!!g,day:V};let G=n`${V?n`<div class="panel agenda">
        ${this._panelHead("calendar-days","accent",`Hoje \xB7 ${ee(e,e)}`)}
        ${te}
        ${_?g?m:n`<p class="empty-line">${s?"Carregando\u2026":c.length?"Nada mais com hor\xE1rio hoje.":"Nenhum hor\xE1rio marcado hoje."}</p>`:n`${c.length?c.map(T=>{let re=!E&&T.start>e?(E=!0,A):m;return n`${re}${this._renderRow(T,t)}`}):n`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
            ${c.length&&!E&&c[c.length-1].end<=e?A:m}`}
        <button class="add-line" @click=${()=>this._openForm({date:t})}>${w("plus")}Evento hoje</button>
      </div>`:m}`,F={away:this._renderAwayBanner(),search:n`${this._renderNowSearch()} ${H}`,meds:j?m:this._renderMedsPanel(),bills:this._renderBillsPanel(),gavisos:this._renderGerenciaAvisos(),now:g||m,day:G,memoria:this._renderMemoriaPanel(),home:this._renderHomePanel(),todos:this._renderTodosPanel()},le=this._nowOrder(),Q=T=>le.filter(re=>T.includes(re)).map(re=>F[re]),xe=n`<button class="add-line now-order" @click=${()=>this._openSheet("nowcards")}>${w("sliders-horizontal")}Ordem dos cards</button>`;return this._desk?n`<section class="page now-page">
        ${this._renderHead("Hoje",k)}
        ${Q(["away","search"])}
        <div class="now-cols">
          <div class="now-main">${Q(["now","day","memoria","todos"])}</div>
          <div class="now-side">${Q(["meds","bills","gavisos","home"])}</div>
        </div>
        ${xe}
      </section>`:n`<section class="page">
      ${this._renderHead("Hoje",k)}
      ${le.map(T=>F[T])}
      ${xe}
    </section>`}_nowKey(){return this._user&&(this._user.person||this._user.name)||""}_nowOrder(){return Vi((this._app("now_order",null)||{})[this._nowKey()])}_saveNowOrder(e){let t={...this._app("now_order",null)||{}};e&&e.join()!==Ze.join()?t[this._nowKey()]=e:delete t[this._nowKey()],this._saveAppPrefs({now_order:Object.keys(t).length?t:null})}_moveNowCard(e,t){let a=this._nowOrder(),s=a.indexOf(e),i=s+t;s<0||i<0||i>=a.length||([a[s],a[i]]=[a[i],a[s]],this._saveNowOrder(a))}_renderNowCardsSheet(){let e=this._nowOrder(),t=r=>this._app(r,!1)!==!0,a=this._nowShown||{},s={away:["plane","F\xE9rias",()=>this._renderAwayBanner()===m?"S\xF3 com f\xE9rias marcadas":""],search:["search","Busca",()=>""],meds:["pill","Rem\xE9dios de hoje",()=>this._renderMedsPanel()===m?"Sem nada agora":""],bills:["receipt","Contas do GerencIA",()=>t("gerencia_on")?"Integra\xE7\xE3o desligada":this._renderBillsPanel()===m?"Sem nada agora":""],gavisos:["triangle-alert","Avisos do GerencIA",()=>t("gerencia_on")?"Integra\xE7\xE3o desligada":this._renderGerenciaAvisos()===m?"Sem nada agora":""],now:["clock","Agora ou a seguir",()=>a.now===!1?"Sem nada agora":""],day:["calendar-days","Hoje",()=>a.day===!1?"Nada mais hoje":""],memoria:["notebook-pen","MemorIA",()=>t("memoria_on")?"Integra\xE7\xE3o desligada":this._renderMemoriaPanel()===m?"Sem nada agora":""],home:["spray-can","Rotina da casa",()=>this._renderHomePanel()===m?"Sem nada agora":""],todos:["list-checks","Tarefas do ResolvIA",()=>t("resolvia_on")?"Integra\xE7\xE3o desligada":this._renderTodosPanel()===m?"Sem nada agora":""]},i=e.join()!==Ze.join();return n`${this._sheetHead("Ordem dos cards")}
      <p class="sheet-note top">A ordem da Agora, só para você.</p>
      <ol class="now-cards">
        ${e.map((r,l)=>{let[d,c,h]=s[r],p=h();return n`<li class="row nc-row ${p?"off":""}" data-card=${r}>
            <span class="tile">${w(d)}</span>
            <div class="grow"><div class="label">${c}</div>${p?n`<div class="hint">${p}</div>`:m}</div>
            <button class="icon-btn" ?disabled=${l===0} @click=${()=>this._moveNowCard(r,-1)} aria-label="Subir ${c}">${w("chevron-up")}</button>
            <button class="icon-btn" ?disabled=${l===e.length-1} @click=${()=>this._moveNowCard(r,1)} aria-label="Descer ${c}">${w("chevron-down")}</button>
          </li>`})}
      </ol>
      ${i?n`<button class="add-line now-reset" @click=${()=>this._saveNowOrder(null)}>${w("rotate-ccw")}Voltar à ordem de sempre</button>`:m}`}_renderNowSearch(){return n`<form class="search-box home-search" role="search" @submit=${e=>{e.preventDefault(),this._toSearch(e.target.q.value.trim())}}>
      ${w("search")}
      <input type="search" name="q" placeholder="Buscar nos eventos" aria-label="Buscar nos eventos" autocomplete="off" enterkeyhint="search" @input=${e=>{if(!e.target.value.trim())return;let t=e.target.value;e.target.value="",this._toSearch(t)}} />
      <kbd>/</kbd>
    </form>`}_ticket(e,{label:t,pill:a,when:s,stub:i,now:r,live:l=!1}){return n`<button class="hero-ev ticket ${l?"live":""}" style=${B(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e,r,l)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${w("clock","sm")}${a}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(e,t,a=!1){let r=k=>(k.getHours()%12*60+k.getMinutes())/720*2*Math.PI,l=(k,g)=>[40+g*Math.sin(k),40-g*Math.cos(k)],d=(k,g,$)=>{let _=g-k;for(;_<=0;)_+=2*Math.PI;if(_=Math.max(_,.42),_>=2*Math.PI-.01)return`M 40 ${40-$} A ${$} ${$} 0 1 1 ${39.99} ${40-$}`;let[b,A]=l(k,$),[E,I]=l(k+_,$);return`M ${b.toFixed(2)} ${A.toFixed(2)} A ${$} ${$} 0 ${_>Math.PI?1:0} 1 ${E.toFixed(2)} ${I.toFixed(2)}`},c=Array.from({length:12},(k,g)=>{let $=g/12*2*Math.PI,[_,b]=l($,g%3?27:24),[A,E]=l($,29);return cs(_,b,A,E,g%3?"tick":"tick major")}),h="",p="",u=t;if(e){let k=e.end-e.start>=432e5;h=k?d(0,2*Math.PI,34):d(r(e.start),r(e.end),34),a&&!k&&(p=d(r(e.start),r(t),34)),u=a?t:e.start}let f=r(u),x=u.getMinutes()/60*2*Math.PI,[y,M]=l(f,15),[D,v]=l(x,23);return n`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${c}
      ${h?Bo(h,a?"span faint":"span"):m}
      ${p?Bo(p,"span"):m}
      ${cs(40,40,y,M,"hand hour")}
      ${cs(40,40,D,v,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return n`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${w("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let e=new Date(this._now),t=this._cursor,a=this._mode,s=this._app("week_start",1),i,r,l;if(a==="mes"||a==="lista")i=`${X(De[t.getMonth()])}${t.getFullYear()!==e.getFullYear()?` ${t.getFullYear()}`:""}`,r=()=>this._cursor=a==="lista"?z(t,-30):Te(t,-1),l=()=>this._cursor=a==="lista"?z(t,30):Te(t,1);else if(a==="semana"||a==="3dias"){let p=a==="3dias"?3:7,u=a==="3dias"?t:Pe(t,s),f=z(u,p-1);i=u.getMonth()===f.getMonth()?`${u.getDate()}\u2013${f.getDate()} ${De[f.getMonth()].slice(0,3)}`:`${u.getDate()} ${De[u.getMonth()].slice(0,3)} \u2013 ${f.getDate()} ${De[f.getMonth()].slice(0,3)}`,r=()=>this._cursor=z(t,-p),l=()=>this._cursor=z(t,p)}else i=J(t,e),r=()=>this._cursor=z(t,-1),l=()=>this._cursor=z(t,1);let d=[["mes","M\xEAs","layout-grid"],["semana","Semana","calendar-range"],["3dias","3 dias","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],c;a==="semana"?c=this._renderTimeGrid(Pe(t,s),7):a==="3dias"?c=this._renderTimeGrid(t,3):a==="dia"?c=this._renderTimeGrid(t,1):a==="lista"?c=this._renderList():c=this._renderMonth();let h=a==="mes"?t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()&&oe(t,e):oe(t,e);return n`<section class="page cal-page">
      <div class="head-row"><p class="eyebrow"><span class="brand">${Kt()}Cronolog<span>IA</span></span>${this._userName()?n`<span class="sep"> · </span>Olá, ${this._userName()}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      <div class="cal-top">
        <div class="cal-title">
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{r(),this._scrollWeek=!0}}>${w("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{l(),this._scrollWeek=!0}}>${w("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${d.map(([p,u,f])=>n`<button class=${a===p?"on":""} role="tab" aria-selected=${a===p?"true":"false"} @click=${()=>this._setMode(p)}>${w(f)}<span>${u}</span></button>`)}
        </div>
        <button class="pick ${h?"on":""}" @click=${()=>{this._cursor=R(new Date),this._scrollWeek=!0}}>${w("sun")}<span>Hoje</span></button>
      </div>
      ${c}
    </section>`}_renderMonth(){let e=new Date(this._now),t=this._cursor,a=this._app("week_start",1),s=new Date(t.getFullYear(),t.getMonth(),1),i=Pe(s,a),r=z(i,42),l=this._events(i,r),d=[];for(let u=0;u<42;u++){let f=z(i,u),x=Oe(l,f);d.push({d:f,list:x})}let c=d[35].d.getMonth()!==t.getMonth()?5:6,h=Oe(l,t),p={x:0,y:0};return n`
      <div class="month" @touchstart=${u=>(p.x=u.touches[0].clientX,p.y=u.touches[0].clientY)} @touchend=${u=>{let f=u.changedTouches[0].clientX-p.x,x=u.changedTouches[0].clientY-p.y;Math.abs(f)>60&&Math.abs(x)<50&&(this._cursor=Te(t,f<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(u=>n`<span>${_e[(u+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${d.slice(0,c*7).map(({d:u,list:f})=>{let x=u.getMonth()!==t.getMonth(),y=[...new Set(f.map(D=>this._colorOfEvent(D).fill))].slice(0,4),M=this._dayState(f,u,e);return n`<button class="cell ${x?"out":""} ${oe(u,e)?"today":""} ${oe(u,t)?"sel":""} ${this._awayDay(u)?"away":""} ${M}" @click=${()=>this._cursor=u} aria-label="${J(u,e)}${this._awayDay(u)?" (f\xE9rias)":""}: ${P(f.length,"evento","eventos")}${M==="all-done"?", tudo feito":M==="left"?", algo ficou para tr\xE1s":""}">
              <span class="num">${u.getDate()}</span>
              <span class="dots">${y.map(D=>n`<i style="background:${D}"></i>`)}${f.length>4?n`<b>+</b>`:m}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title ${oe(t,e)?"today":""}">
          <span class="dh-cal" aria-hidden="true"><small>${_e[t.getDay()].slice(0,3)}</small><b>${t.getDate()}</b></span>
          <span class="dt-label">${J(t,e)}</span>
          <button class="text-btn" @click=${()=>this._openForm({date:t})}>${w("plus")}Evento</button>
        </div>
        ${h.length?this._renderDayRows(h,t):n`<p class="empty-line">${this._store.loading(i,r)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(e,t){let a=new Date(this._now),s=Array.from({length:t},(v,k)=>z(e,k)),i=this._events(s[0],z(s[t-1],1)),r=Array.from({length:24},(v,k)=>k),l=this._app("week_start",1),d=v=>v.allDay&&!this._realEvent(v),c=v=>!d(v)&&(v.allDay||v.end-v.start>=12*36e5),h=s.map(v=>Oe(i,v).filter(c)),p=Math.max(0,...h.map(v=>v.length)),u=s.map(v=>Oe(i,v).filter(d)),f={fill:this._dark?"#4fd18f":"#1f9d63",ink:"#167a4b"},x=(v,k)=>{let g=k.filter($=>this._rowDone($)).length;return{done:g,total:k.length,all:g===k.length}},y=t>1?s:Array.from({length:7},(v,k)=>z(Pe(this._cursor,l),k)),M=t>1?i:this._events(y[0],z(y[6],1)),D=v=>{let k=this._dayState(Oe(M,v),v,a);return n`<button class="ws-day ${oe(v,a)?"today":""} ${oe(v,this._cursor)?"sel":""} ${k}" @click=${()=>this._cursor=v} aria-label="${J(v,a)}${k==="all-done"?", tudo feito":k==="left"?", algo ficou para tr\xE1s":""}">
        <span>${_e[v.getDay()]}</span><b>${v.getDate()}</b>
      </button>`};return n`
      ${t>1?n`<div class="week-strip" style="--n:${t}">${y.map(D)}</div>`:n`<div class="week-strip day-strip">${y.map(D)}</div>`}
      ${u.some(v=>v.length)?t===1?(()=>{let v=x(s[0],u[0]);return n`<button class="any-bar ${v.all?"all":""}" @click=${()=>this._openAnyDay(s[0])}>
                ${w(v.all?"circle-check":"list-checks")}<span>Qualquer hora</span><b>${v.done}/${v.total}</b>${w("chevron-right")}
              </button>`})():n`<div class="tgrid-any" style="--n:${t}">
              <span class="tg-label any-ic" title="Qualquer hora">${w("list-checks")}</span>
              ${u.map((v,k)=>{if(!v.length)return n`<span></span>`;let g=x(s[k],v);return n`<button class="tg-any ${g.all?"all":""}" aria-label="Qualquer hora, ${J(s[k],a)}: ${g.done} de ${g.total} feitas" @click=${()=>this._openAnyDay(s[k])}>${g.done}/${g.total}</button>`})}
            </div>`:m}
      ${p?n`<div class="tgrid-allday" style="--n:${t}">
            <span class="tg-label">dia todo</span>
            ${h.map(v=>n`<div class="tg-adcol">${v.slice(0,3).map(k=>n`<button class="tg-ad ${this._checkOf(k)?"done":""}" style=${B(this._checkOf(k)?f:this._colorOfEvent(k),this._dark)} @click=${()=>this._openEvent(k)}>${k.summary}</button>`)}${v.length>3?n`<span class="tg-admore">+${v.length-3}</span>`:m}</div>`)}
          </div>`:m}
      <div class="tgrid-scroll">
        <div class="tgrid ${t===1?"one":t===3?"three":"week"}" style="--n:${t};--hh:${je}px">
          <div class="tg-hours">${r.map(v=>n`<span style="top:${v*je}px">${v?`${String(v).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(v=>{let k=Ki(Oe(i,v).filter(_=>!c(_)),v),g=oe(v,a),$=(a.getHours()+a.getMinutes()/60)*je;return n`<div class="tg-col ${g?"today":""}" @click=${_=>{if(_.target!==_.currentTarget)return;let b=_.offsetY;this._openForm({date:v,hour:Math.max(0,Math.min(23,Math.floor(b/je)))})}}>
              ${k.map(({event:_,top:b,height:A,lane:E,lanes:I})=>{let j=Math.max(A*je-2,je/2-2),H=!!(_.kind&&_.kind.kind==="remedio"),Z=!!this._checkOf(_);return n`<button class="tg-ev ${j<34?"short":""} ${H?"med":""} ${Z?"done":""}" style="${B(Z?f:this._colorOfEvent(_),this._dark)}top:${b*je}px;height:${j}px;left:calc(${E/I*100}% + 1px);width:calc(${100/I}% - 2px)" @click=${()=>this._openEvent(_)}>
                  <b>${H?w(Z?"check":"pill"):Z?"\u2713 ":""}${_.summary}</b>${j>=34?n`<small>${W(_.start)}${t===1&&_.location?` \xB7 ${_.location}`:""}${t===1&&H&&_.kind.dose?` \xB7 ${_.kind.dose}`:""}</small>`:m}
                </button>`})}
              ${g?n`<i class="tg-now" style="top:${$}px"></i>`:m}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let e=new Date(this._now),t=this._query.trim(),a=qa(t),s,i;a?(s=z(R(e),-365),i=z(R(e),366)):(s=this._cursor,i=z(this._cursor,30));let r=this._events(s,i);a&&(r=r.filter(p=>qa(`${p.summary} ${p.location} ${p.description}`).includes(a)));let l=new Map,d=(p,u)=>{let f=O(p);l.has(f)||l.set(f,{d:p,list:[]}),l.get(f).list.push(u)};for(let p of r){let u=R(p.start<s?s:p.start);if(d(u,oa(p,u)),a)continue;let f=p.allDay?z(R(new Date(p.end)),-1):R(new Date(p.end-1));for(let x=z(u,1);x<=f&&x<i;x=z(x,1))d(x,oa(p,x))}let c=[...l.values()].sort((p,u)=>p.d-u.d),h=this._store.loading(s,i);return n`
      <label class="search-box">
        ${w("search")}
        <input type="search" data-q="buscar" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${p=>this._query=p.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${w("x")}</button>`:m}
      </label>
      ${a?n`<p class="page-sub" style="margin-top:0">${h?"Buscando\u2026":P(r.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:m}
      ${c.length?n`<div class="panel agenda">
            ${c.map(({d:p,list:u})=>n`${this._dayHead(p,u.length,()=>this._openDay(p,"dia"))}${this._renderDayRows(u,p)}`)}
          </div>`:n`<div class="panel"><div class="empty"><div class="em-icon">${w(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":h?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${N(t,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let e=this._cals(),t=[];for(let l of e){let d=t.find(c=>c.label===l.group);d||t.push(d={label:l.group,list:[],off:[]}),(l.hidden?d.off:d.list).push(l)}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal(),r=l=>n`<div class="row cal-row ${l.hidden?"off":""}" style=${B(l.color,this._dark)}>
      <button class="tile" @click=${()=>this._openCalSheet(l)} aria-label="Personalizar ${l.name}">${w(l.icon)}</button>
      <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(l)}>
        <div class="label">${l.name}</div>
        <div class="hint">${[l.device,a.get(l.id)?"n\xE3o carregou":l.unavailable?"indispon\xEDvel":l.canCreate?l.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
      </button>
      <label class="switch"><input type="checkbox" role="switch" .checked=${Vt(!l.hidden)} @change=${d=>this._saveCalPrefs(l.id,{hidden:d.target.checked?null:!0})} aria-label="Mostrar ${l.name}" /><span class="track"></span></label>
    </div>`;return n`
      ${t.map(l=>n`<div class="panel">
          ${this._secHead("calendar-days",l.label)}
          ${ae(l.list,d=>d.id,r)}
          ${l.off.length?n`<div class="cal-ocultos">${Xe(this,`cals:${l.label}`,"Ocultos",l.off.length,()=>ae(l.off,d=>d.id,r))}</div>`:m}
        </div>`)}
      <div class="panel" id="novos-eventos">
        ${this._secHead("calendar-plus","Novos eventos")}
        ${s.length?n`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${l=>this._saveAppPrefs({default_calendar:l.target.value})}>
                ${s.map(l=>n`<option value=${l.id} ?selected=${l.id===i}>${l.name}</option>`)}
              </select>
            </label>`:n`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let e=this._isAdmin(),t=(s,i,r,l)=>n`<button class="row" @click=${l}>
      <span class="tile" style=${B(this._accent(),this._dark)}>${w(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${r}</div></span>
      ${w("chevron-right")}
    </button>`,a=s=>()=>e?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return n`<div class="panel">
      ${this._secHead("plus","Adicionar calend\xE1rios")}
      ${t("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${t("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${t("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${t("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${t("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(e){this._openSheet("calendar",{id:e.id,name:e.colorId||e.name!==e.origName?e.name:"",color:e.colorId,hidden:e.hidden})}async _saveCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return;let a=(e.name||"").trim();await this._saveCalPrefs(e.id,{name:a&&a!==t.origName?a:null,color:e.color||null,hidden:e.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMenu(){return n`<section class="page more-menu">
      ${this._renderHead("Mais",null)}
      <ul class="panel menu-list" aria-label="Mais">
        ${da.filter(([e])=>e!=="rotinas"||this._scoreOn()).map(([e,t,a,s,i])=>n`<li>
            <button class="menu-row" data-k=${e} @click=${()=>this._go(t)}>
              <span class="mais-ic" aria-hidden="true">${w(s)}</span><span class="mb"><b>${a}</b><span>${i}</span></span>${w("chevron-right")}
            </button>
          </li>`)}
      </ul>
      ${this._renderFoot()}
    </section>`}_renderFoot(){return n`<p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>`}_renderMore(){let e=this._view();if(e.tab==="menu")return this._renderMenu();let t=e.tab,a,s=null;if(e.config)t==="integracoes"?a=n`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderMemoriaSettings()} ${this._renderCorreriaPanel()} ${this._renderAiPanel()} ${this._aiOn()&&this.api.voiceStatus?this._renderVoicePanel():m} ${this._aiOn()?this._renderUsage():m} ${this._renderSensorsPanel()}`:t==="dados"?a=this._renderDataPanel():t==="aparencia"?a=this._renderAppearance():a=this._renderOptions();else if(t==="rotinas"){a=this._renderCatalog();let r=this._catalogCount();s={text:r?`${P(r,"cadastro","cadastros")}`:"Nada cadastrado ainda"}}else if(t==="recompensas")a=this._renderScoreSettings();else if(t==="avisos")a=this._renderAlertsPanel();else if(t==="ferias")a=this._renderAwayOptions(!1);else if(t==="sobre")a=Fo({app:"CronologIA",version:this._version});else{a=this._renderCalendarsTab();let r=this._cals(),l=r.filter(d=>d.canCreate).length;s={text:r.length?`${P(r.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${l?P(l,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}if(!e.config)return n`<section class="page more-page">${this._renderHead(ts(e),s,m,!0)} ${a}</section>`;let i=r=>{r!==t&&(this._haptic("light"),this._go(es({name:"more",tab:r,config:!0}),!0))};return n`<section class="page more-page">
      ${this._renderHead("Configura\xE7\xF5es",s,m,!0)}
      <div class="tabs-wrap"><div class="seg compact more-tabs" role="tablist" aria-label="Seções de Configurações" @scroll=${()=>this._markTabs()}>
        ${Dt.map(([r,l,d])=>n`<button class=${t===r?"on":""} role="tab" aria-selected=${t===r?"true":"false"} @click=${()=>i(r)}>${w(d)}<span>${l}</span></button>`)}
      </div><span class="tabs-fim esq" aria-hidden="true">${w("chevron-left")}</span><span class="tabs-fim dir" aria-hidden="true">${w("chevron-right")}</span></div>
      <div role="tabpanel" aria-label=${Dt.find(r=>r[0]===t)[1]}>${a}</div>
      ${this._renderFoot()}
    </section>`}_renderAppearance(){let e=this._accentDaily(),t=this._accent().id;return n`
      <div class="panel">
        ${this._secHead("contrast","Tema","Cada aparelho guarda a sua escolha.")}
        ${ni({theme:this._theme,onTheme:a=>this._setTheme(a),icon:w})}
      </div>
      <div class="panel">
        ${this._secHead("palette","Cor do app","Vale para todos os aparelhos.")}
        <div class="row switch-row daily-row">
          <div class="grow"><div class="label">Cor do dia</div><div class="hint">Muda a cor do app todo dia.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${a=>this._saveAppPrefs({accent_daily:a.target.checked?null:!1})} aria-label="Cor do dia" /><span class="track"></span></label>
        </div>
        ${li({palette:Qe,value:t,onPick:a=>this._saveAppPrefs({accent:a,accent_daily:!1})})}
      </div>
    `}_renderOptions(){let e=this._app("week_start",1),t=this._app("event_details",!1)===!0;return n`
      <div class="panel">
        ${this._secHead("calendar-plus","Adicionar")}
        <div class="row switch-row">
          <div class="grow"><div class="label">Local e notas</div><div class="hint" style="white-space:normal">${t?"Ligado.":"Desligado: formul\xE1rio mais curto."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${t} @change=${a=>this._saveAppPrefs({event_details:a.target.checked?!0:null})} aria-label="Local e notas" /><span class="track"></span></label>
        </div>
      </div>
      <div class="panel">
        ${this._secHead("calendar-days","Semana","Vale para o calend\xE1rio e o placar.")}
        <div class="seg week-seg" role="radiogroup" aria-label="Início da semana">
          ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>n`<button class=${e===a?"on":""} role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${w("calendar-days")}<span>${s}</span></button>`)}
        </div>
      </div>
      ${this._renderShortcut()}
    `}_renderShortcut(){return this._atalho?n`<div class="panel shortcut">
      ${this._secHead("smartphone","Atalho no celular","Um \xEDcone na tela inicial do celular que abre o CronologIA direto.")}
      <ol class="steps">
        <li>No app do Home Assistant: <b>Configurações › Aplicativo complementar › Gerenciar atalhos</b>.</li>
        <li>Em <b>Atalho fixado</b>, escolha o tipo <b>Painel</b> e cole o <b>Caminho</b> abaixo.</li>
      </ol>
      <label class="field">
        <span class="flabel">Caminho</span>
        <span class="copy-row"
          ><input type="text" id="cr-atalho" readonly .value=${this._atalho} @focus=${e=>e.target.select()} /><button
            type="button"
            class="btn outline"
            @click=${()=>this._copyShortcut()}
          >
            ${w("copy")}Copiar
          </button></span
        >
      </label>
    </div>`:m}async _copyShortcut(){let e=this.renderRoot.querySelector("#cr-atalho");try{await navigator.clipboard.writeText(e.value),this._showToast("Caminho copiado")}catch{e.focus(),e.select(),this._showToast("Toque e segure no texto para copiar")}}_renderAwayOptions(e=!0){let t=this._away(),a=O(new Date(this._now)),s=(i,r)=>this._saveAppPrefs({away:{from:i,to:r<i?i:r}});return n`<div class="panel" id="ferias">
      ${e?this._secHead("plane","F\xE9rias","Rotinas, tarefas e manuten\xE7\xE3o pausadas."):n`<p class="panel-lead">Rotinas, tarefas e manutenção pausadas.</p>`}
      <div class="row switch-row">
        <div class="grow"><div class="label">De férias</div><div class="hint">${t?`${ee(q(t.from),new Date(this._now))} a ${ee(q(t.to),new Date(this._now))}`:"Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!t} @change=${i=>this._saveAppPrefs({away:i.target.checked?{from:a,to:O(z(q(a),4))}:null})} aria-label="De férias" /><span class="track"></span></label>
      </div>
      ${t?n`<div class="sub-op"><div class="sub-box"><div class="away-dates">
            ${yt("De",t.from,i=>i&&s(i,t.to),{weekStart:this._app("week_start",1),bid:"away-from"})}
            ${yt("At\xE9",t.to,i=>i&&s(t.from,i),{min:t.from,weekStart:this._app("week_start",1),bid:"away-to"})}
          </div>
          <span class="field-hint away-cal">${w("calendar-x")}<span>No Google, as rotinas saem desses dias e voltam em ${ee(z(q(t.to),1),new Date(this._now))}.</span></span></div></div>`:m}
    </div>`}_camOk(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}_renderImportTiles(){let e=this._ai||{},t=this._camOk(),a=(s,i,r,l=!1,d="")=>n`<button type="button" class="imp-tile ${d?"no-cam":""}" ?disabled=${l} @click=${()=>this._openImport(s)}>${w(i)}<span>${r}</span>${d?n`<small>${d}</small>`:m}</button>`;return n`<div class="field imp-field">
        <span class="flabel">Trazer de mensagem ou foto</span>
        <div class="imp-tiles">
          ${a("text","clipboard-paste","Colar mensagem")}
          ${a("photos","images","Escolher fotos ou PDF",!e.images)}
          ${a("scan","scan-text","Digitalizar com\xA0IA",!e.images,t?"":"Precisa de https")}
        </div>
        ${e.images&&!t?n`<p class="imp-help">Em http a câmera não abre aqui: tire a foto pelo celular e use Escolher fotos ou PDF.</p>`:m}
      </div>
      ${e.ready?m:n`<div class="ai-box">${w("scan-text")}<span>Para ler mensagens e fotos, configure a IA do Home Assistant em Mais › Configurações › Integrações.</span></div>`}`}_secHead(e,t,a=null){return n`<div class="mais-head"><span class="mais-ic" aria-hidden="true">${w(e)}</span><h2>${t}</h2></div>${a?n`<p class="panel-lead">${a}</p>`:m}`}async _loadUsage(){if(this.api.aiUsage){try{this._usage=await this.api.aiUsage()}catch{this._usage=null}this.requestUpdate()}}_renderUsage(){let e=this._ai||{};return ti({u:this._usage,day:this._usageDay,onDay:t=>(this._usageDay=t,this.requestUpdate()),head:this._secHead("chart-column","Uso da IA","As chamadas do app para a IA. Os tokens s\xE3o estimados."),app:"CronologIA",using:e.using&&e.using.id||"",names:Object.fromEntries((e.entities||[]).map(t=>[t.id,t.name]))})}_aiOn(){return!this._app("ai_off",!1)}_renderSensorsPanel(){let e=this._app("sensors_on",!1)===!0,t=this._score&&this._score(),a=!!(t&&t.enabled&&t.participants.length),s=[["sensor.cronologia_remedios_hoje","doses a tomar hoje (com as atrasadas e a pr\xF3xima)"],["binary_sensor.cronologia_remedio_atrasado","liga quando um rem\xE9dio atrasa"],["sensor.cronologia_rotinas_pendentes","rotinas da casa que faltam hoje"],["sensor.cronologia_manutencoes_vencidas","manuten\xE7\xF5es vencidas e as pr\xF3ximas"],["sensor.cronologia_proximo","quando come\xE7a o pr\xF3ximo compromisso, com o t\xEDtulo e o local"],["binary_sensor.cronologia_ferias","liga no modo f\xE9rias"],...a?[["sensor.cronologia_placar","quem lidera o placar e os pontos"]]:[],["sensor.cronologia_ia_hoje","chamadas de IA hoje, com erros, cota e tokens estimados"]];return n`<div class="panel" id="sensores">
      ${this._secHead("activity","Sensores no Home Assistant","Para usar em pain\xE9is e automa\xE7\xF5es do Home Assistant.")}
      <div class="row switch-row">
        <div class="grow"><div class="label">Criar sensores</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: nenhum sensor no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${i=>this._saveAppPrefs({sensors_on:i.target.checked?!0:null})} aria-label="Criar sensores" /><span class="track"></span></label>
      </div>
      ${e?n`<div class="sub-op"><div class="sub-box sensor-list">${s.map(([i,r])=>n`<div class="sensor-row"><code>${i}</code><span>${r}</span></div>`)}</div></div>`:m}
      <div class="ha-events">
        <b>Eventos para automações</b>
        <span class="ha-ev-lead">Para marcar de fora do app, numa automação, numa rotina da Alexa ou numa etiqueta NFC. Funcionam com os sensores ligados ou não.</span>
        <div class="sensor-list">
          <div class="sensor-row"><code>cronologia_feito</code><span>com <code>nome: Filtro de água</code>${a?n` (e <code>quem: Davi</code>, se vale pontos)`:m}: a manutenção, a rotina ou o remédio de hoje com esse nome fica feito.</span></div>
          ${a?n`<div class="sensor-row"><code>cronologia_demerito</code><span>com <code>nome</code> e <code>quem</code>: desconta esse demérito de quem foi.</span></div>`:m}
        </div>
      </div>
    </div>`}_renderAiPanel(){let e=this._aiOn(),t=n`<div class="row switch-row">
        <div class="grow"><div class="label">Usar IA</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: sem leitura por IA, sem Falar."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${c=>this._saveAppPrefs({ai_off:c.target.checked?null:!0})} aria-label="Usar IA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="leitura-ia">
        ${this._secHead("sparkles","IA do Home Assistant","Encontra eventos em mensagens, prints e fotos.")}
        ${t}
      </div>`;let a=this._ai||{},s=a.entities||[],i=this._app("ai_entity",""),r=this._aiChecking?"off":a.ready&&a.images?"ok":a.ready?"warn":"bad",l=this._aiChecking?"Verificando\u2026":a.ready&&a.images?"Pronta para ler fotos":a.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",d="";return a.ready&&a.using&&(d=`Usando ${a.using.name}${i?"":" (a IA padr\xE3o do Home Assistant)"}.`,a.photos&&(d+=` Para fotos, ${a.photos.name}.`)),a.reason&&(d=`${d} ${a.reason}`.trim()),n`<div class="panel" id="leitura-ia">
      ${this._secHead("sparkles","IA do Home Assistant","Encontra eventos em mensagens, prints e fotos.")}
      ${t}
      <div class="sub-op"><div class="sub-box">
      <div class="ai-state ${r}"><span class="dot"></span><div><b>${l}</b>${d?n`<span>${d}</span>`:m}</div></div>
      ${s.length||i?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${c=>this._chooseAi(c.target.value)}>
              <option value="" ?selected=${!i}>Padrão do Home Assistant</option>
              ${s.map(c=>n`<option value=${c.id} ?selected=${c.id===i}>${c.name}${c.images?"":" (s\xF3 texto)"}${c.available?"":" (indispon\xEDvel)"}</option>`)}
              ${i&&!s.some(c=>c.id===i)?n`<option value=${i} selected>${i} (não encontrada)</option>`:m}
            </select>
          </label>`:m}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${w("rotate-ccw")}Verificar de novo</button></div>
      ${a.ready&&a.images?m:n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
      </div></div>
    </div>`}_renderSheet(){if(!this._sheet)return m;let e=this._form||{},t=m,a=null;if(this._sheet==="event")t=this._renderEventSheet(),a=e.ev&&this._colorOfEvent(e.ev);else if(this._sheet==="form")t=this._renderFormSheet(),a=this._cal(e.cal)&&this._cal(e.cal).color;else if(this._sheet==="scope")t=this._renderScope();else if(this._sheet==="confirm")t=this._renderConfirm();else if(this._sheet==="import")t=this._renderImportSheet(),a=this._cal(e.target)&&this._cal(e.target).color;else if(this._sheet==="calendar"){t=this._renderCalSheet();let i=this._cal(e.id);a=ne(e.color)||i&&i.color}else this._sheet==="export"?t=this._renderExportSheet():this._sheet==="outlook"?t=this._renderOutlookSheet():this._sheet==="nocal"?t=this._renderNoCalSheet():this._sheet==="maint"?t=this._renderMaintSheet():this._sheet==="anyday"?t=this._renderAnyDaySheet():this._sheet==="versions"?t=this._renderVersions():this._sheet==="who"?t=this._renderWhoSheet():this._sheet==="periodlog"?t=this._renderPeriodLogSheet():this._sheet==="todo"?(t=this._renderTodoSheet(),a=ne(ct)):this._sheet==="bring"?t=this._renderBringSheet():this._sheet==="nowcards"?t=this._renderNowCardsSheet():this._sheet==="chat"?t=this._renderChatSheet():this._sheet==="extra"?t=this._renderExtraSheet():this._sheet==="demerit"?t=this._renderDemeritSheet():this._sheet==="prize"?t=this._renderPrizeSheet():this._sheet==="bill"&&(t=this._renderBillSheet(),a=ne("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${wt(a.fill,this._dark?.18:.14)};${B(a,this._dark)}`:"";return n`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${t}
      </div>
    `}_sheetHead(e,t,a=""){return n`<div class="sheet-head">
      ${t?n`<button class="icon-btn back" @click=${t} aria-label="Voltar">${w("chevron-left")}</button>`:m}
      <h3 class="display">${w(a||qn(e),"sh-ic")}${e}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${w("x")}</button>
    </div>`}_renderEventSheet(){let e=this._form.ev,t=new Date(this._now),a=this._cal(e.cal),s;if(e.allDay){let r=z(e.end,-1);s=oe(r,e.start)?`${J(e.start,t)} \xB7 ${this._anyTime(e)?"qualquer hora":"dia todo"}`:`${X(ee(e.start,t))} \u2013 ${ee(r,t)} \xB7 ${P(K(e.end,e.start),"dia","dias")}`}else oe(e.start,e.end)||e.end.getHours()===0&&e.end.getMinutes()===0&&K(e.end,e.start)===1?s=`${J(e.start,t)} \xB7 ${W(e.start)} \u2013 ${W(e.end)} (${Pa(e.end-e.start)})`:s=`${X(ee(e.start,t))}, ${W(e.start)} \u2013 ${ee(e.end,t)}, ${W(e.end)}`;let i=e.start>t?Wt(e.start-t):e.end>t?"acontecendo agora":"";return n`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${a?a.name:e.cal}${i?n` · <b>${i}</b>`:m}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${w("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${w("clock")}<span>${s}</span></div>
        ${e.rrule?n`<div class="fact">${w("repeat")}<span>${Ie(e.rrule)}</span></div>`:m}
        ${e.location?n`<a class="fact link" href=${Hn(e.location)} target="_blank" rel="noopener noreferrer">${w("map-pin")}<span>${e.location}</span>${w("external-link","sm")}</a>`:m}
        ${e.kind?this._renderKindFacts(e):!e.todo&&!e.gerencia?this._renderEventDone(e):m}
        ${e.description&&!e.kind?n`<div class="fact notes">${w("file-text")}<span>${Ut(e.description).map(r=>r.url?n`<a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>`:r.text)}</span></div>`:m}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?n`<p class="sheet-note">${w("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:m}
      <div class="sheet-actions">
        ${a&&a.canDelete&&e.uid?n`<button class="btn danger" @click=${()=>this._askDelete(e)} aria-label="Apagar">${w("trash")}</button>`:m}
        ${this._writable().length?n`<button class="btn outline" @click=${()=>this._openForm({ev:e,copy:!0})}>${w("copy")}Duplicar</button>`:m}
        ${a&&this._canEdit(e.cal)&&e.uid?n`<button class="btn primary" @click=${()=>this._openForm({ev:e})}>${w("pencil")}Editar</button>`:m}
      </div>
    `}_renderEventDone(e){let t=new Date(this._now),a=this._checkOf(e),s={key:e.key,summary:e.summary};return a?n`<div class="kind-state">${w("circle-check")}<span>Feito${a.at?` ${K(new Date(a.at),t)===0?"hoje":ee(new Date(a.at),t)} \xE0s ${W(new Date(a.at))}`:""}${a.by?` \xB7 ${a.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(s,"evento")}>${w("undo-2")}Desfazer</button></div>`:(e.day?q(e.day):e.start)>=z(R(t),2)?m:n`<button class="btn outline kind-act ev-done-btn" @click=${()=>this._check(s,"evento").then(()=>this._closeSheet())}>${w("check")}Feito</button>`}_renderFormSheet(){let e=this._form;if(e.kind)return this._renderKindForm();let t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(u=>u.id===e.cal):t.filter(u=>u.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t,s=new Date,i=this._app("week_start",1),r=u=>this._setForm({date:u,endDate:e.endDate&&e.endDate<u?"":e.endDate}),l=u=>{if(!u)return;let f=M=>{let[D,v]=M.split(":").map(Number);return D*60+v},x=Math.max(15,(f(e.end)-f(e.start)+1440)%1440||60),y=(f(u)+x)%1440;this._setForm({start:u,end:`${String(Math.floor(y/60)).padStart(2,"0")}:${String(y%60).padStart(2,"0")}`})},d=u=>{let[f,x]=e.start.split(":").map(Number),y=Math.min(1439,f*60+x+u);this._setForm({end:`${String(Math.floor(y/60)).padStart(2,"0")}:${String(y%60).padStart(2,"0")}`,endDate:""})},c=u=>{let[f,x]=(u||"0:0").split(":").map(Number);return f*60+x},h=(c(e.end)-c(e.start)+1440)%1440,p=!e.allDay&&!e.endDate&&c(e.end)<=c(e.start);return n`
      ${this._sheetHead(e.mode==="add"?"Adicionar":"Editar evento")}
      ${e.mode==="add"?this._renderModelChips(""):m}
      ${e.mode==="add"&&this._aiOn()?this._renderImportTiles():m}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${u=>this._setForm({title:u.target.value})} @keydown=${u=>u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?n`<div class="field">
            <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}${this._cal(e.cal)?n`<span class="fl-val">· ${N(this._cal(e.cal).name,24)}</span>`:m}</span>
            <div class="chip-row">${a.map(u=>n`<button class="pick list ${e.cal===u.id?"on":""}" style=${B(u.color,this._dark)} @click=${()=>this._setForm({cal:u.id})}><span class="dot"></span><span>${N(u.name,24)}</span></button>`)}</div>
          </div>`:m}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${e.allDay} @change=${u=>this._setForm({allDay:u.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <date-pick .value=${e.date} kind="futuro" .weekStart=${i} .bid=${"cr-date"} .label=${"Data"} @pick=${u=>u.detail.value&&r(u.detail.value)}></date-pick>
        ${e.allDay?n`<div class="field dp-field dp-ate">
              <span class="flabel">Até${e.endDate?n` <span class="tl">· ${P(K(q(e.endDate),q(e.date))+1,"dia","dias")}</span>`:m}</span>
              <date-pick .value=${e.endDate||""} kind="nenhum" .none=${"Um dia"} .min=${e.date} .weekStart=${i} .bid=${"cr-ate"} .label=${"At\xE9"} @pick=${u=>this._setForm({endDate:u.detail.value>e.date?u.detail.value:""})}></date-pick>
            </div>`:n`<div class="chip-row parts c3" role="radiogroup" aria-label="Parte do dia">
                ${ze.map(u=>n`<button class="pick ${e.start===u.at?"on":""}" role="radio" aria-checked=${e.start===u.at?"true":"false"} @click=${()=>l(u.at)}>${w(u.icon)}<span>${u.label}</span></button>`)}
              </div>
              <div class="time-row">
                ${we(e.start,l,{label:"Come\xE7a"})}
                <span class="tl">até</span>
                ${we(e.end,u=>this._setForm({end:u}),{label:"Termina"})}
              </div>
              <div class="chip-row dur c4">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([u,f])=>n`<button class="pick ${h===u&&!e.endDate?"on":""}" @click=${()=>d(u)}>${w("hourglass")}<span>${f}</span></button>`)}
              </div>
              ${p?n`<div class="field-hint">${w("info")}<span>Termina no dia seguinte.</span></div>`:m}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir<span class="fl-val">· ${(st.find(u=>u.id===e.repeat)||st[0]).short}</span></span>
        <div class="seg rep-seg" role="radiogroup" aria-label="Repetir">${st.map(u=>n`<button class=${e.repeat===u.id?"on":""} role="radio" aria-checked=${e.repeat===u.id?"true":"false"} title=${u.label} @click=${()=>this._setForm({repeat:u.id})}>${u.short}</button>`)}</div>
        ${e.rrule&&$t(e.rrule)===e.repeat&&Ie(e.rrule)!==(st.find(u=>u.id===e.repeat)||{}).label?n`<div class="field-hint">${w("repeat")}<span>${Ie(e.rrule)}</span></div>`:m}
        ${e.rid?n`<div class="field-hint">${w("repeat")}<span>Este evento se repete.</span></div>`:m}
      </div>
      ${this._app("event_details",!1)===!0||e.details?n`<div class="field fold-txt">
              <span class="flabel">Local${(e.location||"").trim()?n`<span class="fl-val">· ${N(e.location.trim(),40)}</span>`:m}</span>
              <textarea class="grow" rows="1" aria-label="Local" .value=${e.location} placeholder="Endereço, sala ou link" @keydown=${u=>u.key==="Enter"&&!u.shiftKey&&u.preventDefault()} @input=${u=>this._setForm({location:u.target.value})}></textarea>
            </div>
            <div class="field fold-txt">
              <span class="flabel">Notas${(e.notes||"").trim()?n`<span class="fl-val">· ${N(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span>
              <textarea rows="3" aria-label="Notas" .value=${e.notes} placeholder="Detalhes, o que levar…" @input=${u=>this._setForm({notes:u.target.value})}></textarea>
            </div>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${w("x")}Cancelar</button>
        <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveForm()}>${w(e.mode==="add"?"plus":"check")}${e.saving?"Salvando\u2026":e.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let e=this._form,t=e.action==="edit",a=(s,i,r,l=!1)=>n`<button class="imp-opt ${l?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${w(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${r}</small></span>${w("chevron-right")}
    </button>`;return n`
      ${this._sheetHead(t?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${N(e.title,40)}” se repete. O que você quer ${t?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",t?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",t?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${t?m:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let e=this._form,t=e.icon||(/^Apagar/.test(e.label)?"trash":/^Restaurar/.test(e.label)?"archive-restore":/^Importar/.test(e.label)?"upload":/^Pular/.test(e.label)?"skip-forward":"circle-alert");return n`
      <div class="sheet-head"><h3 class="display">${w(t,"sh-ic")}${e.title}</h3></div>
      <p class="confirm-text">${e.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${w("x")}Cancelar</button>
        <button class="btn ${e.danger?"danger-fill":"primary"}" @click=${()=>e.run()}>${w(t)}${e.label}</button>
      </div>
    `}_renderImportSheet(){let e=this._form,t=this._aiOn(),a=t?this._ai||{}:{},s=this._writable(),i=this._cal(e.target),r=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},l=e.error?n`<div class="imp-error">${w("circle-alert")}<span>${e.error}</span></div>`:m,d=e.images&&e.images.length?n`<div class="thumbs">${e.images.map(h=>h.pdf?n`<span class="thumb-pdf" title=${h.nome||"PDF"}>${w("file-text")}</span>`:n`<img src=${h.url} alt="" />`)}</div>`:m,c=n`<div class="imp-error soft">${w("sparkles")}<span>${a.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>${w("sparkles")}Ver IA do Home Assistant</button></span></div>`;if(e.step==="voice")return this._renderVoiceStep(r);if(e.step==="text")return n`
        ${this._sheetHead(e.heard?"O que voc\xEA disse":"Colar mensagem",r)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${e.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${h=>this._setForm({text:h.target.value,error:null})}></textarea>
        </label>
        ${l} ${a.ready?m:c}
        <div class="sheet-actions">
          ${this._clipOk()?n`<button class="btn outline" @click=${()=>this._pasteClipboard()}>${w("clipboard-paste")}Colar</button>`:m}
          <button class="btn primary" ?disabled=${!(e.text||"").trim()||!a.ready} @click=${()=>this._readText()}>${w("sparkles")}Encontrar eventos</button>
        </div>
        
      `;if(e.step==="loading")return n`
        ${this._sheetHead("Lendo\u2026")}
        ${d}
        <div class="imp-loading"><span class="spin">${w("loader-circle")}</span><span>${e.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:e.prevStep||"pick"}))}>${w("x")}Cancelar</button></div>
      `;if(e.step==="review"){let h=e.items.filter(f=>f.on&&(f.title||"").trim()).length,p=e.provider==="ics"?`do arquivo ${N(e.fileName||".ics",28)}`:e.provider?`lidos por ${e.provider}`:"",u=new Date;return n`
        ${this._sheetHead("Revisar eventos",r)}
        ${d}
        ${e.heard?n`<p class="heard">${w("mic")}<span>“${e.heard}”</span></p>`:m}
        <p class="sheet-note top">${P(e.items.length,"evento encontrado","eventos encontrados")}${e.provider==="ics"&&p?` \xB7 ${p}`:""}.</p>
        ${e.note?n`<div class="imp-error soft">${w("sparkles")}<span>${e.note}</span></div>`:m}
        <div class="rv-list">
          ${e.items.map((f,x)=>n`<div class="rv-card ${f.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${f.on?"on":""}" role="checkbox" aria-checked=${f.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(x,{on:!f.on})}>${w("check")}</button>
                <textarea class="rv-title" rows="1" data-size="off" .value=${f.title} aria-label="Título" @keydown=${y=>y.key==="Enter"&&!y.shiftKey&&y.preventDefault()} @input=${y=>this._setItem(x,{title:y.target.value})}></textarea>
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:e.items.filter((y,M)=>M!==x)})}>${w("x")}</button>
              </div>
              <div class="rv-when">
                ${Ys(f.date,y=>this._setItem(x,{date:y}),{label:"Data",cls:"sm",weekStart:this._app("week_start",1)})}
                ${f.start?n`<span class="rv-times">${we(f.start,y=>this._setItem(x,{start:y}),{label:"Come\xE7a",cls:"sm"})}<span>–</span>${we(f.end,y=>this._setItem(x,{end:y}),{label:"Termina",cls:"sm"})}</span>`:n`<button class="pick ghost" @click=${()=>this._setItem(x,{start:"09:00",end:"10:00"})}>${w("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${X(J(q(f.date),u))}${f.end_date?` at\xE9 ${ee(q(f.end_date),u)}`:""}${f.location?` \xB7 ${f.location}`:""}${f.repeat||f.rrule?` \xB7 ${f.rrule?Ie(f.rrule):st.find(y=>y.id===f.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${a.images&&e.provider!=="ics"?n`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${w("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${w("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:m}
        ${s.length>1?n`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${s.map(f=>n`<button class="pick list ${e.target===f.id?"on":""}" style=${B(f.color,this._dark)} @click=${()=>this._setForm({target:f.id})}><span class="dot"></span><span>${N(f.name,24)}</span></button>`)}</div>
            </div>`:m}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!h||e.adding} @click=${()=>this._importAdd()}>
            ${w("plus")}${e.adding?"Adicionando\u2026":h?`Adicionar ${P(h,"evento","eventos")}${i&&s.length<=1?` em ${N(i.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return n`
      ${this._sheetHead("Trazer eventos")}
      <div class="imp-options">
        ${t?n`<button class="imp-opt" ?disabled=${!a.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${w("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${w("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${w("images")}</span><span class="imp-tx"><b>Escolher fotos ou PDF</b><small>Prints, fotos da galeria ou um PDF</small></span>${w("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${w("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>${this._camOk()?"Fotografe um convite ou cart\xE3o de consulta":"Neste endere\xE7o (http) a c\xE2mera n\xE3o abre: precisa de https"}</small></span>${w("chevron-right")}
        </button>`:m}
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${w("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${w("chevron-right")}
        </button>
      </div>
      ${t&&!a.images?c:m}
      ${l}
    `}_renderCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return this._sheetHead("Calend\xE1rio");let a=ne(e.color)||t.color;return n`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${B(a,this._dark)}>
        <span class="tile">${w(t.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(e.name||"").trim()||t.origName}</span><span class="lc-meta">${t.group}${t.device?` \xB7 ${t.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${e.name} placeholder=${t.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${Qe.map(s=>n`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?w("check"):m}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${t.canCreate?t.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${t.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!e.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?n`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${t.id}`)}>${w("external-link")}Abrir na tela padrão do HA</button>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${w("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>${w("check")}Salvar</button>
      </div>
    `}_renderExportSheet(){let e=this._form,t=this._cals(),[a,s]=this._exportRange(e.range),i=e.cals.length?this.api.exportUrl({calendars:e.cals,start:fe(a),end:fe(s)}):null,r=l=>this._setForm({cals:e.cals.includes(l)?e.cals.filter(d=>d!==l):[...e.cals,l]});return n`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${t.map(l=>n`<button class="pick list ${e.cals.includes(l.id)?"on":""}" style=${B(l.color,this._dark)} @click=${()=>r(l.id)}><span class="dot"></span><span>${N(l.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([l,d])=>n`<button class="pick ${e.range===l?"on":""}" @click=${()=>this._setForm({range:l})}>${w("calendar-range")}<span>${d}</span></button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?n`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${w("download")}Baixar .ics</a>`:n`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${w("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let e=this._isAdmin();return n`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${w("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${w("external-link","sm")}</a>
      </div>
      <div class="help-card">
        <b>${w("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${e?n`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${w("chevron-right","sm")}</button>`:m}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return n`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários daqui são só de leitura. Adicione um que aceite edição:</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let e=this._cam;if(!e)return m;let t=e.shots.length;return n`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${e.flash?n`<div class="cam-flash" .key=${e.flash}></div>`:m}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${w("x")}</button>
          <span class="cam-title">${e.chat?"Tirar foto":"Digitalizar com IA"}</span>
          ${e.torchOk?n`<button class="cam-btn ${e.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${w("zap")}</button>`:n`<span class="cam-btn ghost"></span>`}
        </div>
        ${e.status==="error"?n`<div class="cam-msg">${w("camera")}<p>${e.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${w("images")}Escolher foto</button></div>`:n`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${e.status==="starting"?"Abrindo a c\xE2mera\u2026":t?`${P(t,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${e.shots.slice(-3).map(a=>n`<img src=${a.url} alt="" />`)}${t>3?n`<span>+${t-3}</span>`:m}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${e.status!=="live"||t>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!t} @click=${()=>this._useShots()}>${w("check")}Pronto${t?` (${t})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return m;let e=this._toast;return n`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${e.text}</span>
      ${e.action?n`<button @click=${()=>{this._toast=null,e.action.run()}}>${w(e.action.icon||(e.action.label==="Desfazer"?"undo-2":"arrow-right"))}${e.action.label}</button>`:m}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",ds);var Ln=document.getElementById("app"),ps=document.createElement("cronologia-app");ps.env=Ni();ps.api=new Zt;Ln.replaceChildren(ps);})();
