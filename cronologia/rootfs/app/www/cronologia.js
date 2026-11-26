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
`,i='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',n='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',l='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',c=()=>{if(document.getElementById("ss-css"))return;let v=document.createElement("style");v.id="ss-css",v.textContent=s,(document.head||document.documentElement).appendChild(v)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();let d=v=>v.parentNode&&v.parentNode.host&&v.parentNode.nodeType===11?v.parentNode.host:v.parentNode||(v.host?v.host:null),p=v=>{let _=/rgba?\(([^)]+)\)/.exec(v||"");if(!_)return null;let M=_[1].split(/[ ,/]+/).filter(Boolean).map(Number);return{r:M[0],g:M[1],b:M[2],a:M.length>3?M[3]:1}},h=({r:v,g:_,b:M})=>(.2126*v+.7152*_+.0722*M)/255,u=(v,_)=>{let M=p(v)||(/^#([0-9a-f]{6})$/i.test(v)?{r:parseInt(v.slice(1,3),16),g:parseInt(v.slice(3,5),16),b:parseInt(v.slice(5,7),16)}:{r:100,g:160,b:240});return`rgba(${M.r},${M.g},${M.b},${_})`};function f(v){let _=getComputedStyle(v),M=Q=>{for(let X of Q){let xe=_.getPropertyValue(X).trim();if(xe)return xe}return""},E=null;for(let Q=v;Q&&Q.nodeType===1;Q=d(Q)){let X=p(getComputedStyle(Q).backgroundColor);if(X&&X.a>.5){E=h(X)<.45;break}}E===null&&(E=!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches));let L=o.theme&&o.theme()||{};E=L.dark??E;let V=L.accent||M(["--rv-accent","--a","--accent","--cor"])||"#64b5f6",de=L.bg||M(["--rv-surface","--surface","--card"]),$e=L.fg||M(["--rv-text","--text","--fg","--ink"]),ee=L.muted||M(["--rv-muted","--muted","--mut"]);return{"--ss-bg":de||(E?"#1b2229":"#ffffff"),"--ss-fg":$e||(E?"#e8edf3":"#141a22"),"--ss-mut":ee||(E?"#9aa6b4":"#5b6573"),"--ss-line2":E?"rgba(255,255,255,.18)":"rgba(0,0,0,.14)","--ss-a":V,"--ss-soft":u(V,E?.22:.16),"--ss-soft2":E?"rgba(255,255,255,.06)":"rgba(0,0,0,.05)","--ss-scrim":M(["--rv-scrim","--scrim"])||"rgba(0,0,0,.45)","--ss-font":_.fontFamily||"system-ui, sans-serif"}}function x(v){let _=v.getAttribute("aria-label");if(_)return _;let M=v.getRootNode(),E=v.getAttribute("aria-labelledby");if(E&&M.getElementById){let V=E.split(/\s+/).map(de=>(M.getElementById(de)||{}).textContent||"").join(" ").trim();if(V)return V}if(v.id&&M.querySelector){let V=M.querySelector(`label[for="${CSS.escape(v.id)}"]`);if(V)return V.textContent.trim()}let L=v.closest("label, .field");if(L){let V=L.querySelector(".flabel, .label, legend, b, span");if(V&&!V.contains(v))return V.textContent.trim()}return""}function w(v){try{let V=o.icon&&o.icon(v);if(V)return V}catch{}let _=v.getRootNode(),M=[],E=v.getAttribute("aria-labelledby");E&&_.getElementById&&E.split(/\s+/).forEach(V=>M.push(_.getElementById(V))),v.id&&_.querySelector&&M.push(_.querySelector(`label[for="${CSS.escape(v.id)}"]`));let L=v.closest("label, .field, .campo");L&&M.push(L.querySelector("label, .lbl, .flabel, .label, legend, b, span"));for(let V of M){let de=V&&!V.contains(v)&&V.querySelector("svg");if(de)return de.outerHTML}return l}function b(v){let _=v.closest?v.closest("dialog"):null;if(!_||!_.open)return!1;try{return _.matches(":modal")}catch{return!0}}function $(v){if(e||!v||v.disabled||v.multiple)return;let _=b(v),M=document.createElement(_?"dialog":"div");M.className="ss-wrap";for(let[Q,X]of Object.entries(f(v)))M.style.setProperty(Q,X);let E=x(v),L=document.createElement("div");L.className="ss-sheet",L.setAttribute("role","dialog"),L.setAttribute("aria-modal","true"),E&&L.setAttribute("aria-label",E),L.innerHTML=`<div class="ss-grab"></div><div class="ss-head"><span class="ss-ic" aria-hidden="true">${w(v)}</span><b></b><button type="button" class="ss-x" aria-label="Fechar">${i}</button></div><div class="ss-list" role="listbox"></div>`,L.querySelector(".ss-head b").textContent=E;let V=L.querySelector(".ss-list"),de=null,$e=Q=>{let X=document.createElement("button");X.type="button",X.className=`ss-opt${Q.selected?" on":""}`,X.setAttribute("role","option"),X.setAttribute("aria-selected",Q.selected?"true":"false"),X.disabled=Q.disabled,X.innerHTML=`<span></span>${n}`,X.firstChild.textContent=Q.label||Q.textContent,X.addEventListener("click",()=>A(Q.value)),Q.selected&&(de=X),V.appendChild(X)};for(let Q of v.children)if(Q.tagName==="OPTGROUP"){let X=document.createElement("div");X.className="ss-group",X.textContent=Q.label,V.appendChild(X);for(let xe of Q.children)xe.tagName==="OPTION"&&!xe.hidden&&$e(xe)}else Q.tagName==="OPTION"&&!Q.hidden&&$e(Q);let ee=document.createElement("div");if(ee.className="ss-back",M.append(ee,L),document.body.appendChild(M),e={sel:v,wrap:M,pending:null,closing:!1},_){try{M.showModal()}catch{}M.addEventListener("cancel",Q=>{Q.preventDefault(),g()})}ee.addEventListener("click",()=>g()),L.querySelector(".ss-x").addEventListener("click",()=>g()),M.addEventListener("keydown",Q=>{if(Q.key==="Escape")Q.preventDefault(),Q.stopPropagation(),g();else if(Q.key==="ArrowDown"||Q.key==="ArrowUp"){let X=[...V.querySelectorAll(".ss-opt:not(:disabled)")],xe=X.indexOf(document.activeElement),Ne=X[Math.max(0,Math.min(X.length-1,xe+(Q.key==="ArrowDown"?1:-1)))];Ne&&(Q.preventDefault(),Ne.focus())}});try{history.pushState(history.state,"")}catch{}requestAnimationFrame(()=>{M.classList.add("in"),de?(de.scrollIntoView({block:"center"}),de.focus({preventScroll:!0})):L.querySelector(".ss-x").focus({preventScroll:!0})})}function g(v=null){if(!e||e.closing)return;e.closing=!0,e.pending=v;let _=e,M=()=>{if(e!==_)return;e=null,_.wrap.open&&_.wrap.close(),_.wrap.classList.remove("in"),_.wrap.classList.add("out"),setTimeout(()=>_.wrap.remove(),220);let E=_.sel;_.pending!==null&&E.value!==_.pending&&(E.value=_.pending,E.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),E.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})));try{E.focus({preventScroll:!0})}catch{}};if(_.finish=M,_.byBack)return M();history.back(),setTimeout(M,400)}let A=v=>g(v);window.addEventListener("popstate",v=>{if(e){if(v.stopImmediatePropagation(),e.closing)return e.finish&&e.finish();e.byBack=!0,g()}});function y(v){let _=v.composedPath?v.composedPath():[v.target],M=_[0];if(M&&M.tagName==="SELECT")return M;if(typeof v.clientX!="number")return null;for(let E of _.slice(0,6)){if(!E||E.nodeType!==1||E===document.body||E===document.documentElement)break;for(let L of E.querySelectorAll("select")){if(L.disabled||L.multiple)continue;let V=L.getBoundingClientRect();if(V.width&&v.clientX>=V.left&&v.clientX<=V.right&&v.clientY>=V.top&&v.clientY<=V.bottom&&O(L,v.clientX,v.clientY))return L}}return null}function O(v,_,M){let E=v.style.getPropertyValue("pointer-events");v.style.setProperty("pointer-events","auto","important");let L=null;try{let V=v.getRootNode();L=(V.elementFromPoint?V:document).elementFromPoint(_,M)}catch{}return E?v.style.setProperty("pointer-events",E):v.style.removeProperty("pointer-events"),L===v}let C=v=>{let _=v.composedPath?v.composedPath()[0]:v.target;return _&&_.tagName==="SELECT"&&!_.disabled&&!_.multiple?_:null};window.addEventListener("touchstart",v=>{let _=v.touches[0];a=_?{x:_.clientX,y:_.clientY}:null},{capture:!0,passive:!0}),window.addEventListener("touchend",v=>{let _=C(v);if(!_||e)return;let M=v.changedTouches[0];a&&M&&Math.hypot(M.clientX-a.x,M.clientY-a.y)>10||(v.preventDefault(),t=Date.now(),$(_))},{capture:!0,passive:!1}),window.addEventListener("mousedown",v=>{C(v)&&v.preventDefault()},!0),window.addEventListener("click",v=>{if(e)return;let _=y(v);_&&(v.preventDefault(),v.stopPropagation(),Date.now()-t>600&&$(_))},!0),window.addEventListener("keydown",v=>{let _=C(v);!_||e||(v.key==="Enter"||v.key===" "||v.key==="F4"||v.altKey&&(v.key==="ArrowDown"||v.key==="ArrowUp"))&&(v.preventDefault(),$(_))},!0),o.open=$,o.close=()=>g()})();(function(){if(window.__haTema)return;var o={light:{bg:"#fafafa",card:"#ffffff"},dark:{bg:"#111111",card:"#1c1c1c"}},e={cores:{light:o.light,dark:o.dark},doHA:null,aplicar:i};window.__haTema=e;function t(){var h=[];try{window.parent&&window.parent!==window&&h.push(window.parent)}catch{}try{window.top&&window.top!==window&&h.indexOf(window.top)<0&&h.push(window.top)}catch{}for(var u=0;u<h.length;u++)try{var f=h[u].document,x=f&&f.querySelector("home-assistant");if(x)return{win:h[u],doc:f,el:x}}catch{}return null}function a(h){var u=document.createElement("canvas").getContext("2d");if(!u)return!1;u.fillStyle="#000",u.fillStyle=h;var f=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(u.fillStyle),x=f?[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]:(u.fillStyle.match(/\d+(\.\d+)?/g)||[0,0,0]).map(Number);return(.2126*x[0]+.7152*x[1]+.0722*x[2])/255<.5}function s(){var h=t();if(!h)return null;try{var u=h.win.getComputedStyle(h.doc.documentElement),f=u.getPropertyValue("--primary-background-color").trim(),x=u.getPropertyValue("--ha-card-background").trim()||u.getPropertyValue("--card-background-color").trim();if(!f)return null;var w=h.el.hass&&h.el.hass.themes,b=w&&typeof w.darkMode=="boolean"?w.darkMode:a(f);return{modo:b?"dark":"light",bg:f,card:x||o[b?"dark":"light"].card}}catch{return null}}function i(){var h=s(),u=document.documentElement.style;e.doHA=h?h.modo:null,["light","dark"].forEach(function(f){var x=h&&h.modo===f?{bg:h.bg,card:h.card}:o[f];e.cores[f]=x,u.getPropertyValue("--ha-bg-"+f)!==x.bg&&u.setProperty("--ha-bg-"+f,x.bg),u.getPropertyValue("--ha-card-"+f)!==x.card&&u.setProperty("--ha-card-"+f,x.card)}),d()}var n=null,l=0;function c(){l||(l=setTimeout(function(){l=0,i()},60))}function d(){var h=t();if(!(!h||n===h.doc.documentElement||typeof MutationObserver!="function"))try{new MutationObserver(c).observe(h.doc.documentElement,{attributes:!0,attributeFilter:["style","class"]}),n=h.doc.documentElement}catch{}}i();try{var p=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)");p&&p.addEventListener&&p.addEventListener("change",c)}catch{}document.addEventListener("visibilitychange",function(){document.hidden||c()}),setTimeout(i,400),setTimeout(i,2e3)})();function js(o=window){if(!o||o.__tecladoCalmo)return;o.__tecladoCalmo=!0;let e=()=>{for(let s of[o.parent,o.top])try{if(!s||s===o)continue;let i=s.document&&s.document.scrollingElement;(s.scrollY||i&&i.scrollTop)&&s.scrollTo(0,0)}catch{}},t=0,a=()=>{e(),Date.now()<t&&o.setTimeout(a,60)};o.addEventListener("focusin",s=>{let i=s.composedPath&&s.composedPath()[0]||s.target;if(!i||!/^(INPUT|TEXTAREA)$/.test(i.tagName||""))return;let n=Date.now()>=t;t=Date.now()+900,n&&a()},!0),o.visualViewport&&o.visualViewport.addEventListener("resize",e)}(()=>{if(window.__textareas)return;let o=()=>`textareas:${(document.title||"app").split(/[·|-]/)[0].trim()}:`,e=h=>h.dataset.size||h.id||h.name||h.getAttribute("aria-label")||h.placeholder||"",t=h=>{try{return Number(localStorage.getItem(o()+h))||0}catch{return 0}},a=(h,u)=>{try{localStorage.setItem(o()+h,String(Math.round(u)))}catch{}},s=new WeakMap,i=typeof ResizeObserver=="function"?new ResizeObserver(h=>h.forEach(({target:u})=>{let f=parseFloat(u.style.height);!f||f===u.__tsSet||(clearTimeout(s.get(u)),s.set(u,setTimeout(()=>{let x=e(u),w=parseFloat(u.style.height);x&&w&&a(x,w),u.__tsSet=w},400)))})):null,n=h=>{if(!(h instanceof HTMLTextAreaElement)||h.dataset.size==="off"||h.__tsDone)return;h.__tsDone=!0,h.style.resize="vertical";let u=e(h),f=u&&t(u);f&&(h.style.height=`${f}px`,h.__tsSet=f),i&&i.observe(h)},l=new WeakSet,c=h=>{!h||h.nodeType!==1||(h.tagName==="TEXTAREA"&&n(h),h.shadowRoot&&d(h.shadowRoot),h.querySelectorAll&&(h.querySelectorAll("textarea").forEach(n),h.querySelectorAll("*").forEach(u=>u.shadowRoot&&d(u.shadowRoot))))};function d(h){l.has(h)||(l.add(h),new MutationObserver(u=>u.forEach(f=>f.addedNodes.forEach(c))).observe(h,{childList:!0,subtree:!0}),h.querySelectorAll("textarea").forEach(n),h.querySelectorAll("*").forEach(u=>u.shadowRoot&&d(u.shadowRoot)))}window.__textareas={fit:n,keyOf:e};let p=()=>d(document.body||document.documentElement);document.body?p():document.addEventListener("DOMContentLoaded",p)})();var Qt=globalThis,Ja=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ga=Symbol(),Vs=new WeakMap,Kt=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==Ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.i,t=this.t;if(Ja&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=Vs.get(t)),e===void 0&&((this.i=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Vs.set(t,e))}return e}toString(){return this.cssText}},_e=o=>new Kt(typeof o=="string"?o:o+"",void 0,Ga),qe=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((a,s,i)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Kt(t,o,Ga)},Jn=(o,e)=>{if(Ja)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),s=Qt.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,o.appendChild(a)}},Bs=Ja?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return _e(t)})(o):o,{is:Gn,defineProperty:Zn,getOwnPropertyDescriptor:Xn,getOwnPropertyNames:er,getOwnPropertySymbols:tr,getPrototypeOf:ar}=Object,na=globalThis,Us=na.trustedTypes,sr=Us?Us.emptyScript:"",ir=na.reactiveElementPolyfillSupport,St=(o,e)=>o,Wa={toAttribute(o,e){switch(e){case Boolean:o=o?sr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},li=(o,e)=>!Gn(o,e),Ys={attribute:!0,type:String,converter:Wa,reflect:!1,useDefault:!1,hasChanged:li};Symbol.metadata??=Symbol("metadata"),na.litPropertyMetadata??=new WeakMap;var Je=class extends HTMLElement{static addInitializer(e){this.o(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(e,t=Ys){if(t.state&&(t.attribute=!1),this.o(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&Zn(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=Xn(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let l=s?.call(this);i?.call(this,n),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ys}static o(){if(this.hasOwnProperty(St("elementProperties")))return;let e=ar(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(St("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(St("properties"))){let t=this.properties,a=[...er(t),...tr(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.u=new Map;for(let[t,a]of this.elementProperties){let s=this.p(t,a);s!==void 0&&this.u.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(Bs(s))}else e!==void 0&&t.push(Bs(e));return t}static p(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this.P??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this.P?.delete(e)}$(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.v=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.P?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}C(e,t){let a=this.constructor.elementProperties.get(e),s=this.constructor.p(e,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:Wa).toAttribute(t,a.type);this.m=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(e,t){let a=this.constructor,s=a.u.get(e);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Wa;this.m=s;let l=n.fromAttribute(t,i.type);this[s]=l??this.T?.get(s)??l,this.m=null}}requestUpdate(e,t,a,s=!1,i){if(e!==void 0){let n=this.constructor;if(s===!1&&(i=this[e]),a??=n.getPropertyOptions(e),!((a.hasChanged??li)(i,t)||a.useDefault&&a.reflect&&i===this.T?.get(e)&&!this.hasAttribute(n.p(e,a))))return;this.M(e,t,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(e,t,{useDefault:a,reflect:s,wrapped:i},n){a&&!(this.T??=new Map).has(e)&&(this.T.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this.m!==e&&(this.A??=new Set).add(e))}async k(){this.isUpdatePending=!0;try{await this.S}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:n}=i,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.M(s,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this.P?.forEach(a=>a.hostUpdate?.()),this.update(t)):this.U()}catch(a){throw e=!1,this.U(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this.P?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(e){return!0}update(e){this.A&&=this.A.forEach(t=>this.C(t,this[t])),this.U()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[St("elementProperties")]=new Map,Je[St("finalized")]=new Map,ir?.({ReactiveElement:Je}),(na.reactiveElementVersions??=[]).push("2.1.2");var Za=globalThis,Ws=o=>o,Jt=Za.trustedTypes,Qs=Jt?Jt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Xa="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,es="?"+Be,or=`<${es}>`,rt=document,Et=()=>rt.createComment(""),Tt=o=>o===null||typeof o!="object"&&typeof o!="function",ts=Array.isArray,ci=o=>ts(o)||typeof o?.[Symbol.iterator]=="function",Ba=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ks=/-->/g,Js=/>/g,ot=RegExp(`>|${Ba}(?:([^\\s"'>=/]+)(${Ba}*=${Ba}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Zs=/"/g,di=/^(?:script|style|textarea|title)$/i,as=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),r=as(1),vt=as(2),hc=as(3),he=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Xs=new WeakMap,nt=rt.createTreeWalker(rt,129);function pi(o,e){if(!ts(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qs!==void 0?Qs.createHTML(e):e}var hi=(o,e)=>{let t=o.length-1,a=[],s,i=e===2?"<svg>":e===3?"<math>":"",n=Mt;for(let l=0;l<t;l++){let c=o[l],d,p,h=-1,u=0;for(;u<c.length&&(n.lastIndex=u,p=n.exec(c),p!==null);)u=n.lastIndex,n===Mt?p[1]==="!--"?n=Ks:p[1]!==void 0?n=Js:p[2]!==void 0?(di.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=ot):p[3]!==void 0&&(n=ot):n===ot?p[0]===">"?(n=s??Mt,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?ot:p[3]==='"'?Zs:Gs):n===Zs||n===Gs?n=ot:n===Ks||n===Js?n=Mt:(n=ot,s=void 0);let f=n===ot&&o[l+1].startsWith("/>")?" ":"";i+=n===Mt?c+or:h>=0?(a.push(d),c.slice(0,h)+Xa+c.slice(h)+Be+f):c+Be+(h===-2?l:f)}return[pi(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},zt=class o{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let i=0,n=0,l=e.length-1,c=this.parts,[d,p]=hi(e,t);if(this.el=o.createElement(d,a),nt.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=nt.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Xa)){let u=p[n++],f=s.getAttribute(h).split(Be),x=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:x[2],strings:f,ctor:x[1]==="."?Zt:x[1]==="?"?Xt:x[1]==="@"?ea:ct}),s.removeAttribute(h)}else h.startsWith(Be)&&(c.push({type:6,index:i}),s.removeAttribute(h));if(di.test(s.tagName)){let h=s.textContent.split(Be),u=h.length-1;if(u>0){s.textContent=Jt?Jt.emptyScript:"";for(let f=0;f<u;f++)s.append(h[f],Et()),nt.nextNode(),c.push({type:2,index:++i});s.append(h[u],Et())}}}else if(s.nodeType===8)if(s.data===es)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(Be,h+1))!==-1;)c.push({type:7,index:i}),h+=Be.length-1}i++}}static createElement(e,t){let a=rt.createElement("template");return a.innerHTML=e,a}};function lt(o,e,t=o,a){if(e===he)return e;let s=a!==void 0?t.N?.[a]:t.O,i=Tt(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,t,a)),a!==void 0?(t.N??=[])[a]=s:t.O=s),s!==void 0&&(e=lt(o,s._$AS(o,e.values),s,a)),e}var Gt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(e){let{el:{content:t},parts:a}=this._$AD,s=(e?.creationScope??rt).importNode(t,!0);nt.currentNode=s;let i=nt.nextNode(),n=0,l=0,c=a[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new ra(i,i.nextSibling,this,e):c.type===1?d=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(d=new ta(i,this,e)),this._$AV.push(d),c=a[++l]}n!==c?.index&&(i=nt.nextNode(),n++)}return nt.currentNode=rt,s}V(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},ra=class ui{get _$AU(){return this._$AM?._$AU??this.D}constructor(e,t,a,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),Tt(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==he&&this.L(e):e._$litType$!==void 0?this.j(e):e.nodeType!==void 0?this.I(e):ci(e)?this.H(e):this.L(e)}B(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}I(e){this._$AH!==e&&(this._$AR(),this._$AH=this.B(e))}L(e){this._$AH!==m&&Tt(this._$AH)?this._$AA.nextSibling.data=e:this.I(rt.createTextNode(e)),this._$AH=e}j(e){let{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=zt.createElement(pi(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(t);else{let i=new Gt(s,this),n=i.R(this.options);i.V(t),this.I(n),this._$AH=i}}_$AC(e){let t=Xs.get(e.strings);return t===void 0&&Xs.set(e.strings,t=new zt(e)),t}H(e){ts(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,s=0;for(let i of e)s===t.length?t.push(a=new ui(this.B(Et()),this.B(Et()),this,this.options)):a=t[s],a._$AI(i),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let a=Ws(e).nextSibling;Ws(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this.D=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=m}_$AI(e,t=this,a,s){let i=this.strings,n=!1;if(i===void 0)e=lt(this,e,t,0),n=!Tt(e)||e!==this._$AH&&e!==he,n&&(this._$AH=e);else{let l=e,c,d;for(e=i[0],c=0;c<i.length-1;c++)d=lt(this,l[a+c],t,c),d===he&&(d=this._$AH[c]),n||=!Tt(d)||d!==this._$AH[c],d===m?e=m:e!==m&&(e+=(d??"")+i[c+1]),this._$AH[c]=d}n&&!s&&this.W(e)}W(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Zt=class extends ct{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===m?void 0:e}},Xt=class extends ct{constructor(){super(...arguments),this.type=4}W(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},ea=class extends ct{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}_$AI(e,t=this){if((e=lt(this,e,t,0)??m)===he)return;let a=this._$AH,s=e===m&&a!==m||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==m&&(a===m||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ta=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}},nr={q:Xa,J:Be,Z:es,F:1,G:hi,K:Gt,X:ci,Y:lt,tt:ra,st:ct,it:Xt,et:ea,ht:Zt,ot:ta},rr=Za.litHtmlPolyfillSupport;rr?.(zt,ra),(Za.litHtmlVersions??=[]).push("3.3.3");var la=(o,e,t)=>{let a=t?.renderBefore??e,s=a._$litPart$;if(s===void 0){let i=t?.renderBefore??null;a._$litPart$=s=new ra(e.insertBefore(Et(),i),i,void 0,t??{})}return s._$AI(o),s},ss=globalThis;var Re=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.rt=la(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return he}};Re._$litElement$=!0,Re.finalized=!0,ss.litElementHydrateSupport?.({LitElement:Re});var lr=ss.litElementPolyfillSupport;lr?.({LitElement:Re});(ss.litElementVersions??=[]).push("4.2.2");var{tt:cr}=nr,ei=o=>o,dr=o=>o===null||typeof o!="object"&&typeof o!="function";var ti=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e,pr=o=>o?._$litType$?.h!=null;var mi=o=>o.strings===void 0,ai=()=>document.createComment(""),Ge=(o,e,t)=>{let a=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){let i=a.insertBefore(ai(),s),n=a.insertBefore(ai(),s);t=new cr(i,n,o,o.options)}else{let i=t._$AB.nextSibling,n=t._$AM,l=n!==o;if(l){let c;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(c=o._$AU)!==n._$AU&&t._$AP(c)}if(i!==s||l){let c=t._$AA;for(;c!==i;){let d=ei(c).nextSibling;ei(a).insertBefore(c,s),c=d}}}return t},Ke=(o,e,t=o)=>(o._$AI(e,t),o),hr={},Ot=(o,e=hr)=>o._$AH=e,Qa=o=>o._$AH,Ua=o=>{o._$AR(),o._$AA.remove()},fi=o=>{o._$AR()};var ye=o=>(...e)=>({_$litDirective$:o,values:e}),Ce=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this.nt=e,this._$AM=t,this.ct=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ct=(o,e)=>{let t=o._$AN;if(t===void 0)return!1;for(let a of t)a._$AO?.(e,!1),Ct(a,e);return!0},aa=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while(t?.size===0)},gi=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),fr(e)}};function ur(o){this._$AN!==void 0?(aa(this),this._$AM=o,gi(this)):this._$AM=o}function mr(o,e=!1,t=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)Ct(a[i],!1),aa(a[i]);else a!=null&&(Ct(a,!1),aa(a));else Ct(this,o)}var fr=o=>{o.type==2&&(o._$AP??=mr,o._$AQ??=ur)},qt=class extends Ce{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),gi(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ct(this,e),aa(this))}setValue(e){if(mi(this.nt))this.nt._$AI(e,this);else{let t=[...this.nt._$AH];t[this.ct]=e,this.nt._$AI(t,this,0)}}disconnected(){}reconnected(){}};var sa=class{constructor(e){this.lt=e}disconnect(){this.lt=void 0}reconnect(e){this.lt=e}deref(){return this.lt}},ia=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(e=>this.dt=e)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var oa=class extends qt{constructor(){super(...arguments),this.ft=new sa(this),this.vt=new ia}render(e,t){return he}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this.yt)return he;this.yt=t;let s=0,{ft:i,vt:n}=this;return(async(l,c)=>{for await(let d of l)if(await c(d)===!1)return})(t,async l=>{for(;n.get();)await n.get();let c=i.deref();if(c!==void 0){if(c.yt!==t)return!1;a!==void 0&&(l=a(l,s)),c.commitValue(l,s),s++}return!0}),he}commitValue(e,t){this.setValue(e)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},uc=ye(oa),mc=ye(class extends oa{constructor(o){if(super(o),o.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(o,e){return this.rt=o,super.update(o,e)}commitValue(o,e){e===0&&fi(this.rt);let t=Ge(this.rt);Ke(t,o)}}),si=o=>pr(o)?o._$litType$.h:o.strings,fc=ye(class extends Ce{constructor(o){super(o),this.bt=new WeakMap}render(o){return[o]}update(o,[e]){let t=ti(this.gt)?si(this.gt):null,a=ti(e)?si(e):null;if(t!==null&&(a===null||t!==a)){let s=Qa(o).pop(),i=this.bt.get(t);if(i===void 0){let n=document.createDocumentFragment();i=la(m,n),i.setConnected(!1),this.bt.set(t,i)}Ot(i,[s]),Ge(i,void 0,s)}if(a!==null){if(t===null||t!==a){let s=this.bt.get(a);if(s!==void 0){let i=Qa(s).pop();fi(o),Ge(o,void 0,i),Ot(o,[i])}}this.gt=e}else this.gt=void 0;return this.render(e)}});var gc=ye(class extends Ce{constructor(o){if(super(o),o.type!==1||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.wt===void 0){this.wt=new Set,o.strings!==void 0&&(this._t=new Set(o.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(e)}let t=o.element.classList;for(let a of this.wt)a in e||(t.remove(a),this.wt.delete(a));for(let a in e){let s=!!e[a];s===this.wt.has(a)||this._t?.has(a)||(s?(t.add(a),this.wt.add(a)):(t.remove(a),this.wt.delete(a)))}return he}}),gr={},vc=ye(class extends Ce{constructor(){super(...arguments),this.St=gr}render(o,e){return e()}update(o,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.St)&&this.St.length===e.length&&e.every((a,s)=>a===this.St[s]))return he}else if(this.St===e)return he;return this.St=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var xc=ye(class extends Ce{constructor(){super(...arguments),this.key=m}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(Ot(o),this.key=e),t}}),ca=ye(class extends Ce{constructor(o){if(super(o),o.type!==3&&o.type!==1&&o.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!mi(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===he||e===m)return e;let t=o.element,a=o.name;if(o.type===3){if(e===t[a])return he}else if(o.type===4){if(!!e===t.hasAttribute(a))return he}else if(o.type===1&&t.getAttribute(a)===e+"")return he;return Ot(o),e}});var Ya=new WeakMap,bc=ye(class extends qt{render(o){return m}update(o,[e]){let t=e!==this.lt;return t&&this.$t(void 0),(t||this.Tt!==this.xt)&&(this.lt=e,this.Et=o.options?.host,this.$t(this.xt=o.element)),m}$t(o){if(this.lt!==void 0)if(this.isConnected||(o=void 0),typeof this.lt=="function"){let e=this.Et??globalThis,t=Ya.get(e);t===void 0&&(t=new WeakMap,Ya.set(e,t)),t.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),t.set(this.lt,o),o!==void 0&&this.lt.call(this.Et,o)}else this.lt.value=o}get Tt(){return typeof this.lt=="function"?Ya.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),ii=(o,e,t)=>{let a=new Map;for(let s=e;s<=t;s++)a.set(o[s],s);return a},ae=ye(class extends Ce{constructor(o){if(super(o),o.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(o,e,t){let a;t===void 0?t=e:e!==void 0&&(a=e);let s=[],i=[],n=0;for(let l of o)s[n]=a?a(l,n):n,i[n]=t(l,n),n++;return{values:i,keys:s}}render(o,e,t){return this.Ct(o,e,t).values}update(o,[e,t,a]){let s=Qa(o),{values:i,keys:n}=this.Ct(e,t,a);if(!Array.isArray(s))return this.Pt=n,i;let l=this.Pt??=[],c=[],d,p,h=0,u=s.length-1,f=0,x=i.length-1;for(;h<=u&&f<=x;)if(s[h]===null)h++;else if(s[u]===null)u--;else if(l[h]===n[f])c[f]=Ke(s[h],i[f]),h++,f++;else if(l[u]===n[x])c[x]=Ke(s[u],i[x]),u--,x--;else if(l[h]===n[x])c[x]=Ke(s[h],i[x]),Ge(o,c[x+1],s[h]),h++,x--;else if(l[u]===n[f])c[f]=Ke(s[u],i[f]),Ge(o,s[h],s[u]),u--,f++;else if(d===void 0&&(d=ii(n,f,x),p=ii(l,h,u)),d.has(l[h]))if(d.has(l[u])){let w=p.get(n[f]),b=w!==void 0?s[w]:null;if(b===null){let $=Ge(o,s[h]);Ke($,i[f]),c[f]=$}else c[f]=Ke(b,i[f]),Ge(o,s[h],b),s[w]=null;f++}else Ua(s[u]),u--;else Ua(s[h]),h++;for(;f<=x;){let w=Ge(o,c[x+1]);Ke(w,i[f]),c[f++]=w}for(;h<=u;){let w=s[h++];w!==null&&Ua(w)}return this.Pt=n,Ot(o,c),he}}),vi="important",vr=" !"+vi,wc=ye(class extends Ce{constructor(o){if(super(o),o.type!==1||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let a=o[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(o,[e]){let{style:t}=o.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(e)),this.render(e);for(let a of this.Mt)e[a]==null&&(this.Mt.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(let a in e){let s=e[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(vr);a.includes("-")||i?t.setProperty(a,i?s.slice(0,-11):s,i?vi:""):t[a]=s}}return he}}),$c=ye(class extends Ce{constructor(o){if(super(o),o.type!==2)throw Error("templateContent can only be used in child bindings")}render(o){return this.At===o?he:(this.At=o,document.importNode(o.content,!0))}}),gt=class extends Ce{constructor(e){if(super(e),this.gt=m,e.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.kt=void 0,this.gt=e;if(e===he)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.gt)return this.kt;this.gt=e;let t=[e];return t.raw=t,this.kt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};gt.directiveName="unsafeHTML",gt.resultType=1;var _c=ye(gt);var Ft=class extends gt{};Ft.directiveName="unsafeSVG",Ft.resultType=2;var ce=ye(Ft),oi=o=>!dr(o)&&typeof o.then=="function",ni=1073741823;var Ka=class extends qt{constructor(){super(...arguments),this.Ot=ni,this.Ut=[],this.ft=new sa(this),this.vt=new ia}render(...e){return e.find(t=>!oi(t))??he}update(e,t){let a=this.Ut,s=a.length;this.Ut=t;let i=this.ft,n=this.vt;this.isConnected||this.disconnected();for(let l=0;l<t.length&&!(l>this.Ot);l++){let c=t[l];if(!oi(c))return this.Ot=l,c;l<s&&c===a[l]||(this.Ot=ni,s=0,Promise.resolve(c).then(async d=>{for(;n.get();)await n.get();let p=i.deref();if(p!==void 0){let h=p.Ut.indexOf(c);h>-1&&h<p.Ot&&(p.Ot=h,p.setValue(d))}}))}return he}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},yc=ye(Ka);var xr=Symbol.for(""),br=o=>{if(o?.r===xr)return o?._$litStatic$};var ri=new Map,xi=o=>(e,...t)=>{let a=t.length,s,i,n=[],l=[],c,d=0,p=!1;for(;d<a;){for(c=e[d];d<a&&(i=t[d],(s=br(i))!==void 0);)c+=s+e[++d],p=!0;d!==a&&l.push(i),n.push(c),d++}if(d===a&&n.push(e[a]),p){let h=n.join("$$lit$$");(e=ri.get(h))===void 0&&(n.raw=n,ri.set(h,e=n)),t=l}return o(e,...t)},kc=xi(r),Ac=xi(vt);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var J={clapperboard:'<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2Z"/>',activity:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',paperclip:'<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"message-circle":'<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',"mic-off":'<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',"door-open":'<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',"circle-pause":'<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',mail:'<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',"trending-up":'<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',"thumbs-down":'<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',contrast:'<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"notebook-pen":'<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'};var dt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],bi=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],ue=o=>dt.find(e=>e.id===o);function is(o){if(!o||typeof o!="string")return null;let e=o.trim().toLowerCase(),t=ue(e)||dt.find(p=>p.label.toLowerCase()===e||p.id===e.normalize("NFD").replace(/[\u0300-\u036f]/g,""));if(t)return t;let a=/^#?([0-9a-f]{6})$/i.exec(e);if(!a)return null;let s=p=>[0,2,4].map(h=>parseInt(p.slice(h,h+2),16)),[i,n,l]=s(a[1]),c=null,d=1/0;for(let p of dt){let[h,u,f]=s(p.fill.slice(1)),x=2*(i-h)**2+4*(n-u)**2+3*(l-f)**2;x<d&&(d=x,c=p)}return c}var wi=o=>ue(bi[o%bi.length]);function Pt(o,e){let t=o.replace("#",""),a=parseInt(t.length===3?t.replace(/./g,s=>s+s):t,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${e})`}function Y(o,e,t="c"){return`--${t}:${o.fill};--${t}i:${e?o.fill:o.ink};--${t}s:${Pt(o.fill,e?.18:.15)};`}var os=o=>(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var N=(o,e,t)=>`${o} ${o===1?e:t}`,I=(o,e=38)=>o&&o.length>e?o.slice(0,e-1).trimEnd()+"\u2026":o||"",ne=o=>o&&o.charAt(0).toUpperCase()+o.slice(1);function da(o){let e=[],t=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=t.exec(o||"");)s.index>a&&e.push({text:o.slice(a,s.index)}),e.push({url:s[0]}),a=s.index+s[0].length;return a<(o||"").length&&e.push({text:o.slice(a)}),e}var pa=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],Ee=["dom","seg","ter","qua","qui","sex","s\xE1b"],Le=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],ha=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],xt=o=>String(o).padStart(2,"0"),P=o=>`${o.getFullYear()}-${xt(o.getMonth()+1)}-${xt(o.getDate())}`,j=o=>`${xt(o.getHours())}:${xt(o.getMinutes())}`,F=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},B=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),q=(o,e)=>{let t=new Date(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds());return t.setDate(t.getDate()+e),t},Ue=(o,e)=>new Date(o.getFullYear(),o.getMonth()+e,1),me=(o,e)=>o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&o.getDate()===e.getDate(),Z=(o,e)=>Math.round((B(o)-B(e))/864e5),Ze=(o,e=0)=>q(B(o),-((o.getDay()-e+7)%7)),ns=o=>/^\d{4}-\d{2}-\d{2}$/.test(o)?F(o):new Date(o);function Ae(o){let e=-o.getTimezoneOffset(),t=e>=0?"+":"-";return`${P(o)}T${j(o)}:00${t}${xt(Math.floor(Math.abs(e)/60))}:${xt(Math.abs(e)%60)}`}function oe(o,e=new Date,{long:t=!0,cap:a=!0}={}){let s=Z(o,e),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${pa[o.getDay()]}, ${o.getDate()} de ${t?Le[o.getMonth()]:ha[o.getMonth()]}`,o.getFullYear()!==e.getFullYear()&&(i+=` de ${o.getFullYear()}`)),a?ne(i):i}var rs=o=>`${pa[o.getDay()]}, ${o.getDate()} de ${Le[o.getMonth()]}`,le=(o,e=new Date)=>`${o.getDate()} ${ha[o.getMonth()]}${o.getFullYear()!==e.getFullYear()?` ${o.getFullYear()}`:""}`;function pt(o){let e=Math.round(o/6e4);if(e<1)return"agora";if(e<60)return`em ${e} min`;let t=Math.floor(e/60),a=e%60;if(t<24)return a&&t<4?`em ${t} h ${a} min`:`em ${t} h`;let s=Math.round(t/24);return`em ${N(s,"dia","dias")}`}function It(o){let e=Math.round(o/6e4);if(e<60)return`${e} min`;let t=Math.floor(e/60),a=e%60;return a?`${t} h ${a} min`:`${t} h`}var bt=[{id:"",label:"N\xE3o repete",short:"N\xE3o"},{id:"DAILY",label:"Todo dia",short:"Di\xE1rio"},{id:"WEEKLY",label:"Toda semana",short:"Semanal"},{id:"MONTHLY",label:"Todo m\xEAs",short:"Mensal"},{id:"YEARLY",label:"Todo ano",short:"Anual"}];function Fe(o){if(!o)return"";let e=Object.fromEntries(o.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),t=Number(e.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[e.FREQ];if(!a)return"Repete";let s=t>1?`A cada ${t} ${a[1]}`:a[0];if(e.BYDAY&&e.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${e.BYDAY.split(",").map(n=>i[n]||n).join(", ")})`}if(e.COUNT)s+=`, ${N(Number(e.COUNT),"vez","vezes")}`;else if(e.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(e.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var $i=["SU","MO","TU","WE","TH","FR","SA"];function ls(o,e){let t=/(?:^|;)BYDAY=([A-Z,0-9+-]+)/.exec(String(o||"").replace(/^RRULE:/,"")),a=t?t[1].split(",").map(i=>$i.indexOf(i.replace(/^[+-]?\d+/,""))).filter(i=>i>=0):[];if(a.length)return[...new Set(a)].sort((i,n)=>i-n);let s=/^\d{4}-\d{2}-\d{2}$/.test(e||"")?new Date(Number(e.slice(0,4)),Number(e.slice(5,7))-1,Number(e.slice(8,10))):null;return s?[s.getDay()]:[]}function cs(o,e){let t=String(o||"FREQ=WEEKLY").replace(/^RRULE:/,"").split(";").filter(s=>s&&!/^BYDAY=/.test(s)&&!/^FREQ=/.test(s)),a=[...new Set(e)].filter(s=>s>=0&&s<7).sort((s,i)=>s-i);return["FREQ=WEEKLY",...t,...a.length?[`BYDAY=${a.map(s=>$i[s]).join(",")}`]:[]].join(";")}function _i(o,e){if(!e.length||!/^\d{4}-\d{2}-\d{2}$/.test(o||""))return o;let t=new Date(Number(o.slice(0,4)),Number(o.slice(5,7))-1,Number(o.slice(8,10)));for(let a=0;a<7&&!e.includes(t.getDay());a++)t.setDate(t.getDate()+1);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}var wt=o=>{let e=/FREQ=(\w+)/.exec(o||"");return e?e[1]:""};async function ds(o,e=1800){let t=a=>new Promise((s,i)=>{let n=new FileReader;n.onload=()=>s(String(n.result).split(",")[1]||""),n.onerror=()=>i(n.error),n.readAsDataURL(a)});try{let a=await createImageBitmap(o,{imageOrientation:"from-image"}),s=Math.min(1,e/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let n=await new Promise(l=>i.toBlob(l,"image/jpeg",.86));return{mime:"image/jpeg",data:await t(n),url:URL.createObjectURL(n)}}catch{return{mime:o.type||"image/jpeg",data:await t(o),url:URL.createObjectURL(o)}}}function yi(o){let e=new Map(o.map(a=>[a.id,String(a.name||"").split(/\s+/).filter(Boolean)])),t=new Map;for(let a of o){let s=e.get(a.id),i=0;for(let n of o){if(n.id===a.id)continue;let l=e.get(n.id),c=0;for(;c<s.length-1&&c<l.length-1&&s[c].toLowerCase()===l[c].toLowerCase();)c++;c>=2&&c>i&&(i=c)}t.set(a.id,i?{short:s.slice(i).join(" "),group:s.slice(0,i).join(" ")}:{short:a.name,group:""})}return t}var $t=o=>r`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Xe=o=>String(o).padStart(2,"0"),ps=/^\d{4}-\d{2}-\d{2}$/;function ki(o){let e=/^(\d{1,2}):(\d{2})/.exec(String(o||""));if(!e)return"";let t=Number(e[1]),a=Number(e[2]);return t<24&&a<60?`${Xe(t)}:${Xe(a)}`:""}function hs(o,e=new Date){if(!ps.test(o||""))return"";let t=F(o);return`${ne(Ee[t.getDay()])}, ${le(t,e)}`}function wr(o,e=1){let t=Ze(o,e),a=q(t,35).getMonth()===o.getMonth()?6:5;return Array.from({length:a*7},(s,i)=>q(t,i))}function Te(o,e,{label:t="Hor\xE1rio",cls:a=""}={}){let s=ki(o);return r`<button type="button" class="pickf t ${a}" data-value=${s} aria-label=${`${t}: ${s||"sem hor\xE1rio"}`} @click=${i=>Ar(i.currentTarget,{value:s,title:t}).then(n=>n&&e(n))}>
    <span class="pf-v">${s||"--:--"}</span>${$t("clock")}
  </button>`}function Ai(o,e,{label:t="Data",cls:a="",min:s="",max:i="",weekStart:n=1}={}){let l=hs(o);return r`<button type="button" class="pickf d ${a}" data-value=${o||""} aria-label=${`${t}: ${l||"sem data"}`} @click=${c=>Dr(c.currentTarget,{value:o,title:t,min:s,max:i,weekStart:n}).then(d=>d&&e(d))}>
    <span class="pf-v">${l||"Escolher"}</span>${$t("calendar")}
  </button>`}var $r=`
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
`,we=null;function _r(){if(typeof window>"u"||typeof window.addEventListener!="function"||typeof history>"u"||window.__whenPick)return;window.__whenPick={isOpen:()=>!!we,close:()=>ht(null)};let o=()=>{if(document.getElementById("wp-css"))return;let e=document.createElement("style");e.id="wp-css",e.textContent=$r,(document.head||document.documentElement).appendChild(e)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o(),window.addEventListener("popstate",e=>{if(we){if(e.stopImmediatePropagation(),we.closing)return we.finish&&we.finish();we.byBack=!0,ht(null)}})}_r();var Di=o=>{let e=String(o||"").trim();if(/^#[0-9a-f]{6}$/i.test(e))return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)};let t=/rgba?\(([^)]+)\)/.exec(e);if(!t)return null;let a=t[1].split(/[ ,/]+/).filter(Boolean).map(Number);return{r:a[0],g:a[1],b:a[2]}},yr=(o,e)=>{let t=Di(o)||{r:100,g:160,b:240};return`rgba(${t.r},${t.g},${t.b},${e})`};function kr(o){let e=getComputedStyle(o),t=(n,l="")=>e.getPropertyValue(n).trim()||l,a=Di(t("--rv-bg")),s=a?(.2126*a.r+.7152*a.g+.0722*a.b)/255<.45:!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches),i=t("--rv-accent","#64b5f6");return{"--ss-bg":t("--rv-surface",s?"#1b2229":"#ffffff"),"--ss-fg":t("--rv-text",s?"#e8edf3":"#141a22"),"--ss-mut":t("--rv-muted",s?"#9aa6b4":"#5b6573"),"--ss-line2":s?"rgba(255,255,255,.18)":"rgba(0,0,0,.14)","--ss-a":i,"--ss-soft":yr(i,s?.22:.16),"--ss-soft2":s?"rgba(255,255,255,.06)":"rgba(0,0,0,.05)","--ss-scrim":t("--rv-scrim","rgba(0,0,0,.45)"),"--ss-font":e.fontFamily||"system-ui, sans-serif","--wp-on-a":t("--rv-on-accent","#ffffff"),"--wp-ink":t("--rv-accent-ink",i),"--wp-display":t("--rv-display",e.fontFamily||"system-ui, sans-serif")}}function Mi(o,e,t,a,s){return we||typeof document>"u"?Promise.resolve(null):new Promise(i=>{let n=document.createElement("div");if(n.className="ss-wrap wp",o)for(let[p,h]of Object.entries(kr(o)))n.style.setProperty(p,h);let l=document.createElement("div");l.className="ss-back";let c=document.createElement("div");c.className="ss-sheet",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),e&&c.setAttribute("aria-label",e),n.append(l,c),document.body.appendChild(n);let d=()=>la(r`<div class="ss-grab"></div>
          <div class="ss-head"><b>${e}</b><button type="button" class="ss-x" aria-label="Fechar" @click=${()=>ht(null)}>${$t("x")}</button></div>
          ${a(t,d)}`,c);d(),we={wrap:n,anchor:o,resolve:i,pending:null,closing:!1,byBack:!1},l.addEventListener("click",()=>ht(null)),n.addEventListener("keydown",p=>{p.key==="Escape"&&(p.preventDefault(),p.stopPropagation(),ht(null))});try{history.pushState(history.state,"")}catch{}requestAnimationFrame(()=>{n.classList.add("in");let p=c.querySelector(s)||c.querySelector(".ss-x");p&&(p.scrollIntoView({block:"nearest"}),p.focus({preventScroll:!0}))})})}function ht(o){if(!we||we.closing)return;we.closing=!0,we.pending=o;let e=we,t=()=>{if(we===e){we=null,e.wrap.classList.remove("in"),e.wrap.classList.add("out"),setTimeout(()=>e.wrap.remove(),220);try{e.anchor.focus({preventScroll:!0})}catch{}e.resolve(e.pending)}};if(e.finish=t,e.byBack)return t();history.back(),setTimeout(t,400)}function Ar(o,{value:e="",title:t="Hor\xE1rio"}={}){let a=ki(e)||"09:00",s={h:Number(a.slice(0,2)),m:Number(a.slice(3,5))},i=()=>ht(`${Xe(s.h)}:${Xe(s.m)}`);return Mi(o,t,s,(l,c)=>r`<div class="wp-now" aria-live="polite">${Xe(l.h)}:${Xe(l.m)}</div>
    <div class="wp-body">
      <div class="wp-lab" id="wp-h">Hora</div>
      <div class="wp-grid wp-h" role="group" aria-labelledby="wp-h">
        ${Array.from({length:24},(d,p)=>r`<button type="button" class="wp-cell ${p===l.h?"on":""}" aria-pressed=${p===l.h?"true":"false"} @click=${()=>(l.h=p,c())}>${Xe(p)}</button>`)}
      </div>
      <div class="wp-lab" id="wp-m">Minutos</div>
      <div class="wp-grid wp-m" role="group" aria-labelledby="wp-m">
        ${Array.from({length:12},(d,p)=>p*5).map(d=>r`<button type="button" class="wp-cell ${d===l.m?"on":""}" aria-pressed=${d===l.m?"true":"false"} @click=${()=>(l.m=d,i())}>${Xe(d)}</button>`)}
      </div>
    </div>
    <div class="wp-foot"><button type="button" class="wp-ok" @click=${i}>${$t("check")}Pronto</button></div>`,".wp-h .wp-cell.on")}function Dr(o,{value:e="",title:t="Data",min:a="",max:s="",weekStart:i=1}={}){let n=new Date,l=ps.test(e||"")?e:"",c=l?F(l):a&&ps.test(a)&&a>P(n)?F(a):n,d={month:new Date(c.getFullYear(),c.getMonth(),1)},p=u=>(!a||u>=a)&&(!s||u<=s);return Mi(o,t,d,(u,f)=>{let x=u.month,w=P(q(x,-1)),b=P(new Date(x.getFullYear(),x.getMonth()+1,1)),$=g=>{u.month=new Date(x.getFullYear(),x.getMonth()+g,1),f()};return r`<div class="wp-body">
      <div class="wp-mhead" data-month=${P(x).slice(0,7)}>
        <button type="button" class="wp-nav" aria-label="Mês anterior" ?disabled=${!!a&&w<a} @click=${()=>$(-1)}>${$t("chevron-left")}</button>
        <b aria-live="polite">${ne(Le[x.getMonth()])} de ${x.getFullYear()}</b>
        <button type="button" class="wp-nav" aria-label="Próximo mês" ?disabled=${!!s&&b>s} @click=${()=>$(1)}>${$t("chevron-right")}</button>
      </div>
      <div class="wp-days">
        ${[0,1,2,3,4,5,6].map(g=>r`<span class="wp-wd" aria-hidden="true">${Ee[(g+i)%7].slice(0,1).toUpperCase()}</span>`)}
        ${wr(x,i).map(g=>{let A=P(g);return r`<button type="button" class="wp-day ${g.getMonth()!==x.getMonth()?"out":""} ${me(g,n)?"today":""} ${A===l?"on":""}" data-d=${A} aria-label=${oe(g,n)} aria-pressed=${A===l?"true":"false"} ?disabled=${!p(A)} @click=${()=>ht(A)}>${g.getDate()}</button>`})}
      </div>
    </div>`},".wp-day.on, .wp-day.today, .wp-day:not(.out):not(:disabled)")}var Si=["dom","seg","ter","qua","qui","sex","s\xE1b"],Ci={mensagem:"Mensagens",fotos:"Fotos",sugestao:"Sugest\xF5es",conversa:"Conversa"},Ei={erro:"erro",cota:"sem cota",formato:"resposta fora do formato"},et=o=>String(o).padStart(2,"0"),us=o=>`${o.getFullYear()}-${et(o.getMonth()+1)}-${et(o.getDate())}`,ua=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},Oi=o=>String(Math.round(o*10)/10).replace(".",","),Ti=o=>o>=1e3?`${Oi(o/1e3)} mil`:String(Math.round(o||0)),zi=o=>`${o} ${o===1?"chamada":"chamadas"}`,Mr=(o,e={})=>e[o]||(o||"").replace(/^ai_task\./,"").replace(/_/g," ")||"padr\xE3o do Home Assistant",Sr=(o,e)=>{let t=new Date(o);if(!Number.isFinite(t.getTime()))return"";let a=`${et(t.getHours())}:${et(t.getMinutes())}`;return us(t)===us(e)?`hoje ${a}`:`${et(t.getDate())}/${et(t.getMonth()+1)} ${a}`},ma=(o,e)=>r`<a href=${o} target="_blank" rel="noopener">${e}</a>`,Cr=[[/google|gemini/,()=>r`Gemini: consumo e cota no ${ma("https://aistudio.google.com/","Google AI Studio")}, em Dashboard › Usage; o saldo dos créditos, em Billing.`],[/openai|chatgpt|gpt/,()=>r`OpenAI: consumo e custo em ${ma("https://platform.openai.com/usage","platform.openai.com/usage")}.`],[/anthropic|claude/,()=>r`Claude: consumo e custo no ${ma("https://platform.claude.com/usage","Claude Console")}; o saldo dos créditos, em ${ma("https://platform.claude.com/settings/billing","Billing")}.`]];function Er(o,e={}){let t=o.map(s=>`${s} ${e[s]||""}`).join(" ").toLowerCase(),a=Cr.filter(([s])=>s.test(t));return a.length?a.map(([,s])=>r`<p class="uso-note">${s()}</p>`):r`<p class="uso-note">O consumo exato fica no painel do provedor da IA.</p>`}function qi({u:o,day:e,onDay:t,head:a,app:s,using:i="",names:n={}}){if(!o||!o.hoje)return r`<div class="panel uso-panel" id="uso-ia">${a}<p class="panel-lead">Carregando…</p></div>`;let l=new Date,c=us(l),d=g=>g.cota?r`<span class="s alert">${g.cota} ${g.cota>1?"vezes":"vez"} sem cota</span>`:g.erros?r`<span class="s alert">${g.erros} com erro</span>`:r`<span class="s">≈ ${Ti(g.tokens)} tokens</span>`,p=(g,A)=>r`<div class="uso-tile"><span class="k">${g}</span><span class="v">${A.chamadas||0}</span>${d(A)}</div>`,h=o.dias||[],u=Math.max(1,...h.map(g=>g.chamadas||0)),f=h.find(g=>g.dia===e)||h.find(g=>g.dia===c)||{dia:c,chamadas:0,erros:0,cota:0},x=g=>g.dia===c?"hoje":Si[ua(g.dia).getDay()],w=o.semana&&o.semana.tipos||{},b=[...Object.keys(o.mes&&o.mes.ias||{}),...Object.keys(o.semana&&o.semana.ias||{}),...[].concat(i)].filter(Boolean),$=o.ultimas||[];return r`<div class="panel uso-panel" id="uso-ia">
    ${a}
    <div class="uso-tiles">${p("Hoje",o.hoje)}${p("7 dias",o.semana)}${p("Este m\xEAs",o.mes)}</div>
    <div class="uso-chart" role="group" aria-label="Chamadas de IA nos últimos 7 dias">
      ${h.map(g=>{let A=g.chamadas?Math.max(4,Math.round(g.chamadas/u*100)):0;return r`<button type="button" class="uso-bar ${g.dia===c?"today":""}" aria-pressed=${g.dia===f.dia?"true":"false"} aria-label="${x(g)}: ${zi(g.chamadas)}" @click=${()=>t(g.dia)}><i style="height:${A}%"></i></button>`})}
    </div>
    <div class="uso-days" aria-hidden="true">${h.map(g=>r`<span>${x(g)}</span>`)}</div>
    <p class="uso-cap" aria-live="polite">${f.dia===c?"Hoje":`${Si[ua(f.dia).getDay()]}, ${et(ua(f.dia).getDate())}/${et(ua(f.dia).getMonth()+1)}`}: <b>${zi(f.chamadas)}</b>${f.erros?`, ${f.erros} com erro`:""}${f.cota?`, ${f.cota} sem cota`:""}.</p>
    ${Object.keys(w).length?r`<ul class="uso-kinds">${Object.keys(w).sort((g,A)=>w[A]-w[g]).map(g=>r`<li>${Ci[g]||g} <b>${w[g]}</b></li>`)}</ul>`:m}
    <details class="uso-last">
      <summary><svg class="uso-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg><span>Últimas chamadas${$.length?` (${$.length})`:""}</span><svg class="uso-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
      <ul>
        ${$.length?$.map(g=>r`<li><b>${Ci[g.tipo]||g.tipo}</b><span>${Mr(g.ia,n)}</span>${Ei[g.resultado]?r`<span class="r-err">${Ei[g.resultado]}</span>`:m}
                <span class="t">${Oi(g.segundos)} s · ≈ ${Ti(g.tokens)} tokens${g.imagens?` \xB7 ${g.imagens} ${g.imagens>1?"imagens":"imagem"}`:""} · ${Sr(g.quando,l)}</span></li>`):r`<li>Nenhuma chamada ainda.</li>`}
      </ul>
    </details>
    ${Er(b,n)}
  </div>`}var Fi=`
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
`;var Tr=/[̀-ͯ]/g,Pi=o=>o.normalize("NFD").replace(Tr,"").toLowerCase()||o.toLowerCase(),fa=o=>[...String(o||"")].map(Pi).join("");function zr(o,{room:e=null,query:t=""}={}){let a=fa(t).split(/\s+/).filter(Boolean),s=c=>fa(`${c.nome} ${c.zona||""} ${c.roomName||""}`),i=c=>a.every(d=>s(c).includes(d)),n=c=>{if(!a.length)return 0;let d=fa(c.nome);return d.startsWith(a[0])?0:d.includes(a[0])?1:2},l=o.filter(i).sort((c,d)=>n(c)-n(d)||c.nome.localeCompare(d.nome,"pt-BR"));return e?{inRoom:l.filter(c=>c.roomId===e),others:a.length?l.filter(c=>c.roomId!==e):[]}:{inRoom:[],others:a.length?l:[]}}function Or(o,e,t){let a=fa(t).split(/\s+/).filter(Boolean)[0];if(!a)return e;let s=[...e],i=s.map(Pi),n=-1,l=-1;for(let c=0;c<s.length&&n<0;c++){let d="";for(let p=c;p<s.length;p++){if(d+=i[p],d===a){n=c,l=p+1;break}if(!a.startsWith(d))break}}return n<0?e:o`${s.slice(0,n).join("")}<mark>${s.slice(n,l).join("")}</mark>${s.slice(l).join("")}`}function Ii({lit:o,icon:e,items:t,room:a=null,roomName:s="",value:i=null,query:n="",more:l=!1,onQuery:c,onPick:d,onMore:p,onRemove:h,onAdd:u,adding:f=!1,autofocus:x=!1,bens:w=!1}){let{html:b,nothing:$}=o,g=(O,C)=>b`<div class="eq-sel">
      <span class="eq-ic">${e("package")}</span>
      <span class="eq-tx"><b>${O.nome}</b><small>${[O.zona,O.roomName].filter(Boolean).join(" \xB7 ")||"Sem c\xF4modo"}</small></span>
      <button type="button" class="icon-btn mini" aria-label="Tirar ${O.nome}" @click=${C}>${e("x")}</button>
    </div>`;if(Array.isArray(i)){let O=i.map(_=>t.find(M=>M.id===_)).filter(Boolean),C=O.map(_=>g(_,()=>h(_.id)));if(O.length&&!f)return b`<div class="eq-pick">${C}<button type="button" class="eq-more eq-add" @click=${()=>u()}>${e("plus")}${w?"Outro bem":"Outro equipamento"}</button></div>`;let v=t.filter(_=>!i.includes(_.id));return b`<div class="eq-pick">${C}${y(v,O.length>0||x)}</div>`}let A=i?t.find(O=>O.id===i):null;if(A)return g(A,()=>d(null));return y(t,x);function y(O,C){let{inRoom:v,others:_}=zr(O,{room:a,query:n}),M=l?40:6,E=(ee,Q)=>b`<button type="button" class="eq-row" @click=${()=>d(ee.id)}>
    <span class="eq-ic">${e("package")}</span>
    <span class="eq-tx"><b>${Or(b,ee.nome,n)}</b>${[ee.zona,Q?ee.roomName:""].filter(Boolean).length?b`<small>${[ee.zona,Q?ee.roomName:""].filter(Boolean).join(" \xB7 ")}</small>`:$}</span>
  </button>`,L=v.slice(0,M),V=_.slice(0,Math.max(0,M-L.length)),de=v.length+_.length-L.length-V.length,$e=$;return!n&&!a?$e=b`<p class="eq-hint">Escolha o cômodo ou busque entre ${O.length} ${O.length===1?"equipamento":"equipamentos"}.</p>`:!n&&a&&!v.length?$e=b`<p class="eq-hint">${w?"Nenhum bem no InventarIA.":`Nenhum equipamento em ${s}. Busque nos outros c\xF4modos.`}</p>`:n&&!v.length&&!_.length&&($e=b`<p class="eq-hint">Nada com “${n}”.</p>`),b`<div class="eq-pick">
    <label class="eq-search">${e("search")}<input type="search" .value=${n} placeholder=${a?`Buscar em ${s}\u2026`:"Buscar equipamento\u2026"} aria-label="Buscar equipamento" ?autofocus=${C} @input=${ee=>c(ee.target.value)} /></label>
    ${L.length?b`<div class="eq-list">${L.map(ee=>E(ee,!1))}</div>`:$}
    ${V.length?b`${a?b`<div class="eq-head">Em outros cômodos</div>`:$}<div class="eq-list">${V.map(ee=>E(ee,!0))}</div>`:$}
    ${de>0?b`<button type="button" class="eq-more" @click=${()=>p()}>${e("chevron-down")}Mostrar mais ${de}</button>`:$}
    ${$e}
  </div>`}}var Ni=`
  .eq-pick { display: grid; grid-template-columns: minmax(0, 1fr); gap: 8px; }
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
  .eq-sel { display: flex; align-items: center; gap: 12px; min-width: 0; padding: 10px 6px 10px 12px; border-radius: 14px; border: 1.5px solid var(--rv-accent); background: var(--rv-accent-soft); }
  .eq-sel .eq-ic { background: var(--rv-accent); color: var(--rv-on-accent, #fff); }
  .eq-pick > .eq-pick { gap: 8px; }
  .eq-more, .eq-add { display: inline-flex; align-items: center; gap: 6px; }
  .eq-more .i, .eq-add .i { width: 16px; height: 16px; flex: none; }
`;var ms="M8 0h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8L0 13V7z",qr="M9.7 10a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 1 0 5.4 0z";function Ri(o,e=new Date){let t=o.filter(s=>s.id!=="grafite"),a=Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5);return t[(a%t.length+t.length)%t.length]}function Li({theme:o,onTheme:e,icon:t}){return r`<div class="seg themes" role="radiogroup" aria-label="Tema">
    ${[["auto","Sistema","smartphone"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>r`<button type="button" class=${o===a?"on":""} role="radio" aria-checked=${o===a?"true":"false"} @click=${()=>e(a)}>${t(i)}<span>${s}</span></button>`)}
  </div>`}function Hi({palette:o,value:e,onPick:t}){return r`<div class="tag-swatches" role="radiogroup" aria-label="Cor do app">
    ${o.map(a=>r`<button type="button" class="tsw ${e===a.id?"on":""}" role="radio" aria-checked=${e===a.id?"true":"false"} style="--a:${a.fill}" @click=${()=>t(a.id)}>
        <svg viewBox="-5 -5 40 30" aria-hidden="true"><path class="sw-ring" d=${ms}></path><path class="sw-gap" d=${ms}></path><path class="sw-fill" d=${ms+qr}></path><path class="sw-check" d="m14.6 10.3 3.2 3.2 6.5-6.9"></path></svg>
        <span>${a.label}</span>
      </button>`)}
  </div>`}var ji=`
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
`;var Bi=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Vi=["D","S","T","Q","Q","S","S"],Fr=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],Pr=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],ut=o=>String(o).padStart(2,"0"),vs=(o,e,t)=>`${o}-${ut(e)}-${ut(t)}`,Ye=o=>vs(o.getFullYear(),o.getMonth()+1,o.getDate()),_t=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e);function Ui(o="futuro",e=new Date){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate());if(o==="passado")return[{label:"Hoje",date:Ye(t)},{label:"Ontem",date:Ye(_t(t,-1))}];if(o==="livre")return[{label:"Hoje",date:Ye(t)},{label:"Ontem",date:Ye(_t(t,-1))},{label:"Amanh\xE3",date:Ye(_t(t,1))}];let a=t.getDay(),s=(6-a+7)%7||7,i=(1-a+7)%7||7,n=[{label:"Hoje",date:Ye(t)},{label:"Amanh\xE3",date:Ye(_t(t,1))}];return s>1&&n.push({label:"S\xE1bado",date:Ye(_t(t,s))}),i>1&&n.push({label:"Pr\xF3x. semana",date:Ye(_t(t,i))}),n}function Yi(o,e=new Date){return/^\d{4}-\d{2}/.test(o||"")?o.slice(0,7):`${e.getFullYear()}-${ut(e.getMonth()+1)}`}function fs(o,e){let[t,a]=o.split("-").map(Number),s=new Date(t,a-1+e,1);return`${s.getFullYear()}-${ut(s.getMonth()+1)}`}function gs(o){let[e,t]=o.split("-").map(Number),a=Bi[t-1];return`${a.charAt(0).toUpperCase()}${a.slice(1)} de ${e}`}function Ir(o){let[e,t,a]=o.split("-").map(Number);return`${Fr[new Date(e,t-1,a).getDay()]}, ${a} de ${Bi[t-1]} de ${e}`}function Nr(o,e=0){let[t,a]=o.split("-").map(Number),s=(new Date(t,a-1,1).getDay()-e+7)%7,i=new Date(t,a,0).getDate(),n=Array.from({length:s},()=>null);for(let l=1;l<=i;l++)n.push(vs(t,a,l));for(;n.length%7;)n.push(null);return n}function Wi({icon:o,month:e,value:t,today:a,onPick:s,onMonth:i,min:n="",max:l="",weekStart:c=0,months:d=!1,onMonths:p=null}){let[h]=e.split("-").map(Number),u=$=>(!n||$>=n)&&(!l||$<=l),f=($,g,A)=>r`<button type="button" class="icon-btn cal-nav" aria-label=${g} ?disabled=${!A} @click=${()=>i(fs(e,$))}>${o($<0?"chevron-left":"chevron-right")}</button>`;if(d&&p){let $=g=>(!l||`${h}-${ut(g+1)}-01`<=l)&&(!n||vs(h,g+1,new Date(h,g+1,0).getDate())>=n);return r`<div class="cal" role="group" aria-label="Escolher o mês">
      <div class="cal-head">
        ${f(-12,"Ano anterior",!n||Number(n.slice(0,4))<h)}
        <button type="button" class="cal-title" aria-label="Voltar aos dias" @click=${()=>p(!1)}>${h}</button>
        ${f(12,"Pr\xF3ximo ano",!l||Number(l.slice(0,4))>h)}
      </div>
      <div class="cal-months">
        ${Pr.map((g,A)=>{let y=`${h}-${ut(A+1)}`,O=!!t&&t.slice(0,7)===y;return r`<button type="button" class="cal-month ${O?"on":""} ${a&&a.slice(0,7)===y?"today":""}" aria-pressed=${O?"true":"false"} ?disabled=${!$(A)} @click=${()=>(i(y),p(!1))}>${g}</button>`})}
      </div>
    </div>`}let x=fs(e,-1),w=`${x}-${ut(new Date(Number(x.slice(0,4)),Number(x.slice(5,7)),0).getDate())}`,b=`${fs(e,1)}-01`;return r`<div class="cal" role="group" aria-label="Escolher a data">
    <div class="cal-head" data-month=${e}>
      ${f(-1,"M\xEAs anterior",!n||w>=n)}
      ${p?r`<button type="button" class="cal-title" aria-live="polite" aria-label=${`${gs(e)}: escolher o m\xEAs`} @click=${()=>p(!0)}>${gs(e)}</button>`:r`<b class="cal-title" aria-live="polite">${gs(e)}</b>`}
      ${f(1,"Pr\xF3ximo m\xEAs",!l||b<=l)}
    </div>
    <div class="cal-grid">
      ${Vi.map(($,g)=>r`<span class="cal-wd" aria-hidden="true">${Vi[(g+c)%7]}</span>`)}
      ${Nr(e,c).map($=>$?r`<button type="button" class="cal-day ${$===t?"on":""} ${$===a?"today":""}" data-d=${$} aria-pressed=${$===t?"true":"false"} aria-current=${$===a?"date":m} aria-label=${Ir($)} ?disabled=${!u($)} @click=${()=>s($)}>${Number($.slice(8))}</button>`:r`<span class="cal-gap"></span>`)}
    </div>
  </div>`}var Qi=`
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
`;var Rr=(o,e=new Date)=>ne(oe(F(o),e,{long:!1})),Ki=o=>r`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Ji=/^\d{4}-\d{2}-\d{2}$/,xs=class extends Re{static properties={value:{},kind:{},min:{},max:{},weekStart:{type:Number},bid:{},none:{},label:{},_month:{state:!0},_months:{state:!0}};constructor(){super(),this.value="",this.kind="futuro",this.min="",this.max="",this.weekStart=1,this.bid="",this.none="",this.label="Data",this._month=null,this._months=!1}createRenderRoot(){return this}_pick(e){this._month=null,this._months=!1,this.dispatchEvent(new CustomEvent("pick",{detail:{value:e}}))}_toggle(){let e=P(new Date);this._months=!1,this._month=this._month?null:Yi(Ji.test(this.value||"")?this.value:this.min&&this.min>e?this.min:this.max&&this.max<e?this.max:""),this._month&&this.updateComplete&&this.updateComplete.then(()=>{let t=this.querySelector(".cal");t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",behavior:"smooth"})})}render(){let e=Ji.test(this.value||"")?this.value:"",t=i=>(!this.min||i>=this.min)&&(!this.max||i<=this.max),a=this.kind==="nenhum"?[]:Ui(this.kind).filter(i=>t(i.date)),s=!!e&&!a.some(i=>i.date===e);return r`<div class="chip-row grid dp-row" role="group" aria-label=${this.label}>
        ${this.none?r`<button type="button" class="pick ${e?"":"on"}" aria-pressed=${e?"false":"true"} @click=${()=>this._pick("")}>${this.none}</button>`:m}
        ${a.map(i=>r`<button type="button" class="pick ${i.date===e?"on":""}" aria-pressed=${i.date===e?"true":"false"} data-d=${i.date} @click=${()=>this._pick(i.date)}>${i.label}</button>`)}
        <button type="button" id=${this.bid||m} class="pick dp-other ${s?"on":""}" data-value=${e} aria-pressed=${s?"true":"false"} aria-expanded=${this._month?"true":"false"} @click=${()=>this._toggle()}>
          ${Ki("calendar")}<span>${s?Rr(e):"Outra data"}</span>
        </button>
      </div>
      ${this._month?Wi({icon:Ki,month:this._month,value:e||null,today:P(new Date),min:this.min||"",max:this.max||"",weekStart:this.weekStart,months:this._months,onPick:i=>this._pick(i),onMonth:i=>this._month=i,onMonths:i=>this._months=i}):m}`}};typeof customElements<"u"&&customElements.define&&!customElements.get("date-pick")&&customElements.define("date-pick",xs);function Nt(o,e,t,{kind:a="futuro",min:s="",max:i="",weekStart:n=1,bid:l="",none:c=""}={}){return r`<div class="field dp-field">
    <span class="flabel">${o}</span>
    <date-pick .value=${e||""} .kind=${a} .min=${s||""} .max=${i||""} .weekStart=${n} .bid=${l} .none=${c} .label=${o} @pick=${d=>t(d.detail.value)}></date-pick>
  </div>`}var bs=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.star||"")}</svg>`,Lr=3e4,Hr="Uma mem\xF3ria s\xF3, da casa, compartilhada por todos os apps: o que voc\xEA escreve aqui a IA lembra em toda conversa, em qualquer um deles.";function jr(o){let e=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)/.exec(o&&o.em||"");return[e?`${e[3]}/${e[2]}/${e[1]} ${e[4]}:${e[5]}`:"",o&&o.app,o&&o.quem].filter(Boolean).join(" \xB7 ")}var Gi=`
  .mem-ia .mem-campo { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
  .mem-ia .mem-campo .label { display: flex; align-items: center; gap: 8px; }
  .mem-ia textarea { width: 100%; box-sizing: border-box; height: auto; min-height: 50px; max-height: 40vh; field-sizing: content; resize: vertical; padding: 12px 14px; border-radius: 12px;
    border: 1px solid var(--rv-line-strong); background: var(--rv-surface-2); color: var(--rv-text); font: inherit; }
  .mem-ia textarea::placeholder { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mem-ia textarea:focus { outline: none; border-color: var(--rv-accent); }
  .mem-ia .ai-actions { margin-top: 10px; }
  .mem-ia .mem-lista { list-style: none; margin: 14px 0 0; padding: 0; }
  .mem-ia .mem-lista li { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-top: 1px solid var(--rv-line); }
  .mem-ia .mem-lista li:first-child { border-top: 0; padding-top: 0; }
  .mem-ia .mem-lista li > span { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow-wrap: anywhere; }
  .mem-ia .mem-lista small { color: var(--rv-muted); font-size: 13px; }
  .mem-ia .mem-del { flex: none; width: 44px; height: 44px; padding: 0; display: grid; place-items: center; border-radius: 12px;
    border: 1px solid var(--rv-line-strong); background: transparent; color: var(--rv-text); cursor: pointer; }
  .mem-ia .mem-del svg { width: 20px; height: 20px; }
`,Zi=o=>class extends o{_memoriaIaLoad(e=Date.now()){this._memIaAt&&e-this._memIaAt<Lr||(this._memIaAt=e,this._memIa===void 0&&(this._memIa=null),this._memoriaIaDo("get"))}async _memoriaIaDo(e,t={}){try{let a=await this._memoriaIaCall(e,t);this._memIa={lista:Array.isArray(a&&a.lista)?a.lista:[],max:a&&a.max||60}}catch(a){return e!=="get"&&this._showToast(a&&a.message||"N\xE3o consegui salvar"),!1}return this.requestUpdate(),!0}async _memoriaIaAdd(){let e=this.renderRoot&&this.renderRoot.querySelector("#mem-ia-texto");e&&await this._memoriaIaDo("add",{texto:e.value})&&(e.value="",this._showToast("A IA vai lembrar"))}async _memoriaIaDel(e){await this._memoriaIaDo("del",{frase:e})&&this._showToast("Apagado da mem\xF3ria")}_renderMemoriaIa(){this._memoriaIaLoad();let e=this._memIa&&this._memIa.lista||[];return r`<div class="panel mem-ia" id="memoria-ia">
        ${this._secHead("sparkles","Mem\xF3ria da IA",Hr)}
        <div class="mem-campo">
          <label class="label" for="mem-ia-texto">${bs("star","lbl-ic")}O que lembrar</label>
          <textarea id="mem-ia-texto" rows="1" maxlength="240" placeholder="O café é sempre o da marca azul" aria-label="O que lembrar"></textarea>
        </div>
        <div class="ai-actions"><button class="btn primary" id="mem-ia-salvar" @click=${()=>this._memoriaIaAdd()}>${bs("check")}Salvar</button></div>
        ${e.length?r`<ul class="mem-lista">${e.map(t=>r`<li><span><b>${t.texto}</b><small>${jr(t)}</small></span><button class="mem-del" aria-label="Apagar" @click=${()=>this._memoriaIaDel(t.id)}>${bs("trash")}</button></li>`)}</ul>`:m}
      </div>`}};var Xi="./fonts/barlow-400.woff2";var eo="./fonts/barlow-500.woff2";var to="./fonts/barlow-600.woff2";var ao="./fonts/barlow-condensed-500.woff2";var so="./fonts/barlow-condensed-600.woff2";var io="./fonts/barlow-condensed-700.woff2";var oo="./fonts/caveat-var.woff2";var no='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',ro=`"CR Barlow", ${no}`,lo=`"CR Barlow Condensed", ${no}`;function co(){if(document.getElementById("cronologia-fonts"))return;let o=(t,a,s)=>`@font-face{font-family:"${t}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,e=document.createElement("style");e.id="cronologia-fonts",e.textContent=[o("CR Barlow",Xi,400),o("CR Barlow",eo,500),o("CR Barlow",to,"600 900"),o("CR Barlow Condensed",ao,500),o("CR Barlow Condensed",so,600),o("CR Barlow Condensed",io,"700 900"),o("CR Caveat",oo,"400 700")].join(`
`),document.head.appendChild(e)}var ga=()=>r`<svg class="app-ic" viewBox="0 0 32 32" aria-hidden="true">
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
</svg>`;var Jr="(min-width: 1000px)";function po(o,e=""){if(!o.touches||o.touches.length!==1||window.matchMedia&&window.matchMedia(Jr).matches)return null;let t=o.touches[0];if(t.clientX<24||t.clientX>window.innerWidth-24)return null;let a=`input, textarea, select, [contenteditable], .grip, [data-noswipe]${e?`, ${e}`:""}`;for(let s of o.composedPath()){if(s===o.currentTarget)break;if(!(s instanceof Element))continue;if(s.matches(a))return null;let i=getComputedStyle(s);if((i.overflowX==="auto"||i.overflowX==="scroll")&&s.scrollWidth>s.clientWidth+2)return null}return{x:t.clientX,y:t.clientY,at:Date.now()}}function ho(o,e){if(!e||!o.changedTouches||!o.changedTouches.length)return 0;let t=o.changedTouches[0],a=t.clientX-e.x,s=t.clientY-e.y;return Math.abs(a)<70||Math.abs(a)<Math.abs(s)*2||Date.now()-e.at>800?0:a<0?1:-1}async function ws(o,e,t){for(let s=0;s<30&&o._view().name!==e;s++)await new Promise(i=>setTimeout(i,16));await o.updateComplete;let a=o.renderRoot.querySelector("main > .page, main > section");!a||!a.animate||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||a.animate([{opacity:0,transform:`translateX(${t>0?40:-40}px)`},{opacity:1,transform:"none"}],{duration:280,easing:"cubic-bezier(0.2, 0.8, 0.2, 1)"})}var uo=qe`
  :host {
    --rv-body: ${_e(ro)};
    --rv-display: ${_e(lo)};
    /* the background and the cards are the ones of the Home Assistant theme (hatema.js, the same in all the apps); the
       grays come from them and the text, so every app of the family has the same background */
    --rv-bg: var(--ha-bg-light, #fafafa);
    --rv-surface: var(--ha-card-light, #ffffff);
    --rv-surface-2: color-mix(in srgb, var(--rv-surface) 95%, var(--rv-text));
    --rv-line: color-mix(in srgb, var(--rv-surface) 91%, var(--rv-text));
    --rv-line-strong: color-mix(in srgb, var(--rv-surface) 81%, var(--rv-text));
    --rv-text: #142026;
    --rv-text-2: #374850;
    --rv-muted: #627780;
    --rv-faint: #9aadb4;
    --rv-nav: var(--rv-surface);
    --rv-scrim: rgba(10, 26, 32, 0.42);
    --rv-shadow: 0 18px 50px rgba(15, 60, 75, 0.18);
    --rv-on-accent: #0c1a1f;
    --rv-late: #d92d20;
    --rv-late-soft: rgba(217, 45, 32, 0.1);
    --rv-today: #b45309;
    --rv-today-soft: rgba(245, 158, 11, 0.14);
    --rv-skeleton: color-mix(in srgb, var(--rv-surface) 92%, var(--rv-text));
    --rv-header-bg: var(--app-header-background-color, var(--rv-bg));
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
    --rv-bg: var(--ha-bg-dark, #111111);
    --rv-surface: var(--ha-card-dark, #1c1c1c);
    --rv-text: #eef5f6;
    --rv-text-2: #cfdde0;
    --rv-muted: #8fa5ab;
    --rv-faint: #5d7378;
    --rv-scrim: rgba(0, 0, 0, 0.6);
    --rv-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    --rv-late: #ff6b5e;
    --rv-late-soft: rgba(255, 107, 94, 0.14);
    --rv-today: #ffb547;
    --rv-today-soft: rgba(255, 181, 71, 0.14);
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

  /* 1.96.0: barras de rolagem finas e arredondadas, sem as setas (no Windows, o Chrome desenhava as antigas, com as
     setas). Onde há ::-webkit-scrollbar (Chrome, Edge, Safari), ele; no Firefox, a fina dele. Nada de scrollbar-width
     nos elementos: no Chrome, ele passa por cima destas. */
  @supports selector(::-webkit-scrollbar) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: color-mix(in srgb, var(--rv-muted) 40%, transparent);
      border: 3px solid transparent;
      border-radius: 10px;
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: color-mix(in srgb, var(--rv-muted) 70%, transparent);
    }
    ::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
    }
  }
  @supports not selector(::-webkit-scrollbar) {
    * {
      scrollbar-width: thin;
      scrollbar-color: color-mix(in srgb, var(--rv-muted) 45%, transparent) transparent;
    }
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
  /* 1.116.0: Agrupar por, no padrão da família (o dos Consumíveis do InventarIA): o título pequeno que fecha o bloco (fechado,
     o escolhido ao lado), as escolhas numa barra só, do mesmo tamanho */
  .agrupar {
    display: grid;
    gap: 8px;
    margin: 0 0 14px;
  }
  .agrupar.fechado {
    gap: 0;
  }
  .agrupar-l {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    min-height: 32px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--rv-muted);
    font: inherit;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .agrupar-l .i {
    width: 17px;
    height: 17px;
  }
  .agrupar-l > .seta {
    margin-left: auto;
    transition: transform 0.2s;
  }
  .agrupar.fechado > .agrupar-l > .seta {
    transform: rotate(-90deg);
  }
  .agrupar-l > .agrupar-val {
    color: var(--rv-text);
    font-weight: 600;
  }
  .seg.agrupar-seg {
    display: grid;
    grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));
  }
  .seg.agrupar-seg button {
    min-width: 0;
  }
  .seg.agrupar-seg button > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 380px) {
    .seg.agrupar-seg button .i {
      display: none;
    }
  }
  @media (max-width: 440px) {
    .seg.agrupar-seg[style*="--n:4"] button .i {
      display: none;
    }
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
  .status > .dot + span:last-child {
    flex: 1 1 0;
    min-width: 0;
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
`,mo=qe`
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
    .page:not(.cal-page) .panel .part-pick {
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
    /* the arrow of folding at the end of the heading, not over the text at its right (desde 18:00, 12 atrasadas) */
    .page:not(.cal-page) .panel.dobra > .chores-head.sec-head.fold-head {
      padding-right: 30px;
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
  /* ---------- Tela cheia (1.87.0): only the cards of Agora, for the tablet on the wall or the TV ---------- */
  :host([full]) .topbar,
  :host([full]) nav,
  :host([full]) .side,
  :host([full]) .brand-head .head-row,
  :host([full]) .home-search,
  :host([full]) .add-line {
    display: none !important;
  }
  .title-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .title-row > .page-title {
    flex: 1;
    min-width: 0;
  }
  .full-btn {
    flex: none;
    width: 44px;
    height: 44px;
    margin-top: 4px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-accent-soft);
    color: var(--rv-accent-ink);
  }
  .full-btn .i {
    width: 22px;
    height: 22px;
  }
  .full-clock {
    flex: none;
    font-family: var(--rv-display);
    font-size: 64px;
    font-weight: 600;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    margin-top: 4px;
  }
  .full-btn:active {
    transform: scale(0.94);
  }
  @media (min-width: 1000px) {
    :host([full]) .app {
      padding-left: 0;
    }
    :host([full]) .page {
      max-width: 1400px;
    }
  }
  /* 1.88.0: with a sheet of the MemorIA now, the sheet on one side (whole, big, like a page of the notebook) and the
     other cards on the other; on the phone and the tablet standing (1.90.0: under 1100 px the side of the cards would be
     too narrow), the sheet first, the whole width */
  .full-cols {
    display: grid;
    gap: 14px;
  }
  .full-rest {
    min-width: 0;
  }
  .full-memo .panel.memo {
    background: none;
    border: 0;
    box-shadow: none;
    overflow: visible;
  }
  .full-memo .memo-pad {
    margin: 6px 12px 10px 20px;
  }
  .full-memo .memo-leaf {
    padding-bottom: 22px;
  }
  .full-memo .memo-top {
    min-height: 52px;
    padding-top: 8px;
    font-size: 24px;
  }
  .full-memo .memo-ink {
    font-size: 28px;
    line-height: 36px;
  }
  .full-memo .memo-ink.normal {
    font-size: 19px;
  }
  .full-memo .pautado .memo-ink {
    background-image: repeating-linear-gradient(to bottom, transparent 0 35px, var(--rule) 35px 36px);
  }
  .full-memo .quadriculado .memo-ink,
  .full-memo .pontilhado .memo-ink {
    background-size: 36px 36px;
  }
  .full-memo .memo-ink .box {
    width: 23px;
    height: 23px;
    vertical-align: -3px;
  }
  @media (min-width: 1100px) {
    .full-cols {
      /* 1.90.0: the bigger part for the sheet */
      grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
      gap: 32px;
      align-items: start;
    }
    /* 1.93.0: the page the height of the screen: the sheet always fits whole (no scrollbar beside it; what doesn't fit
       scrolls inside the sheet) and the side of the cards goes down on its own */
    :host([full]) main {
      display: flex;
      flex-direction: column;
    }
    :host([full]) main > .page {
      width: 100%;
      flex: none;
    }
    :host([full]) main > .full-page {
      flex: 1 1 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
      padding-bottom: 14px;
    }
    .full-page > .brand-head {
      flex: none;
    }
    .full-page > .full-cols {
      flex: 1 1 0;
      min-height: 0;
      grid-template-rows: minmax(0, 1fr);
      align-items: stretch;
    }
    .full-memo {
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    .full-memo .panel.memo {
      flex: 1 1 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
    .full-memo .memo-pad {
      flex: 1 1 0;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .full-memo .memo-leaf {
      flex: 1 1 0;
      min-height: 0;
    }
    .full-memo .memo-top {
      flex: none;
    }
    .full-memo .memo-ink {
      flex: 1 1 0;
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      /* the lines of the paper go with the text */
      background-attachment: local;
    }
    .full-memo .memo-ink::-webkit-scrollbar-thumb {
      background-color: color-mix(in srgb, var(--ink-soft) 55%, transparent);
    }
    .full-rest {
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding-right: 6px;
    }
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
`;var fo=qe`
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
  /* 1.93.0: A seguir with more than one appointment at the same time: one line each, with its color */
  .tk-list {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 6px 8px 8px;
  }
  .tk-row {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    min-height: 52px;
    padding: 6px 10px;
    border-radius: 14px;
    text-align: left;
  }
  .tk-row:active {
    background: var(--cs);
  }
  .tk-row > .kind-ic .i {
    width: 18px;
    height: 18px;
  }
  .tk-row-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .tk-row-tx b {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--rv-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tk-row-tx small {
    font-size: 14px;
    color: var(--rv-muted);
    font-variant-numeric: tabular-nums;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tk-row > .i {
    flex: none;
    width: 18px;
    height: 18px;
    color: var(--rv-faint);
  }
  @media (hover: hover) {
    .tk-row:hover {
      background: var(--cs);
    }
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
  /* Feito em parte (1.91.0): the circle filled as much as was done */
  .chk.part {
    border-color: var(--rv-ok);
    background: conic-gradient(var(--rv-ok) var(--f), transparent 0);
  }
  .part-pick {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 6px;
    margin: 2px 16px 8px;
  }
  .part-opt {
    min-height: 36px;
    border-radius: 999px;
    border: 1px solid var(--rv-line-strong);
    background: transparent;
    color: var(--rv-text);
    font: 600 13px/1 var(--rv-body, inherit);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 6px;
    white-space: nowrap;
  }
  .part-opt.on {
    background: var(--rv-accent-soft);
    border-color: var(--rv-accent);
    color: var(--rv-accent-ink);
  }
  .part-opt .pie {
    width: 14px;
    height: 14px;
    flex: none;
    border-radius: 50%;
    background: conic-gradient(currentColor var(--f), transparent 0);
    box-shadow: inset 0 0 0 1.5px currentColor;
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
  /* 1.99.2: late or due today, in a tag as in the ResolvIA */
  .due-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 1px 7px;
    border-radius: 7px;
    font-size: 12.5px;
    font-weight: 700;
    white-space: nowrap;
    vertical-align: 1px;
  }
  .due-tag .i {
    width: 13px;
    height: 13px;
  }
  .due-tag.today {
    background: var(--rv-today-soft);
    color: var(--rv-today);
  }
  .due-tag.late {
    background: color-mix(in srgb, var(--rv-late) 16%, transparent);
    color: var(--rv-late);
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
  /* 1.92.0: the same circle as Agora's (.chk.on), a bit smaller: green with the ✓; a task of the ResolvIA, the square.
     1.92.1: under the time (Manhã, Qualquer hora, 18:00), not after the title */
  .ev-done {
    display: grid;
    place-items: center;
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    border-radius: 50%;
    background: var(--rv-ok);
    color: #fff;
  }
  .ev-done.sq {
    border-radius: 6px;
  }
  .ev-done .i {
    width: 12px;
    height: 12px;
    stroke-width: 3.5;
  }
  /* Feito em parte (1.91.1): the circle filled as much as was done (done in part, or the rest still to do), as .chk.part */
  .ev-done.part {
    background: conic-gradient(var(--rv-ok) var(--f), transparent 0);
    box-shadow: inset 0 0 0 2px var(--rv-ok);
  }
  /* in the Calendário, under Rotinas, tarefas e lembretes: the width of the list */
  .day-sep + .part-pick {
    margin: 10px 0 6px;
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
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 1.107.0: Nenhum, Casa, Bens */
  }
  .seg.where button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 0;
    padding-left: 4px;
    padding-right: 4px;
  }
  /* a site named in a text opens it (1.107.0) */
  a.site {
    color: var(--accent);
    font-weight: 600;
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
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .ev-done.skipped {
    background: var(--rv-warn-soft);
    color: var(--rv-warn);
  }
  .ev-row.done .ev-title {
    color: var(--rv-muted);
  }
  /* done or skipped: faded (only these: one whose time passed but is not done stays clear) */
  /* 1.92.0: everything faded but the mark, which stays as on Agora */
  .ev-row.done > .ev-time > b,
  .ev-row.done > .ev-time > small,
  .ev-row.done > .ev-bar,
  .ev-row.done > .ev-rep,
  .ev-row.done .ev-sub,
  .ev-row.done .kind-ic {
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
  /* 1.114.0: Selecionar (como no ResolvIA e no GerencIA): a linha da contagem com o Selecionar, a marca em cada linha e a
     barra de baixo com Apagar e Alterar */
  .res-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: -4px 0 12px;
    min-height: 40px;
  }
  .res-head.end {
    justify-content: flex-end;
  }
  .res-head.sel-head {
    justify-content: flex-start;
  }
  .res-head.sel-head .res-n {
    flex: 1;
    min-width: 0;
    font-size: 16px;
  }
  .cat-row .cat-mark {
    flex: none;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 7px;
    border: 2px solid var(--rv-line-strong);
    color: transparent;
  }
  .cat-row .cat-mark svg {
    width: 15px;
    height: 15px;
    stroke-width: 3;
  }
  .cat-row.sel-on .cat-mark {
    background: var(--rv-accent);
    border-color: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .cat-row.sel-on {
    background: color-mix(in srgb, var(--rv-accent) 10%, transparent);
  }
  .cat-row.fora {
    opacity: 0.45;
  }
  .sel-bar {
    position: sticky;
    bottom: calc(var(--rv-nav-h) + 12px + env(safe-area-inset-bottom, 0px));
    z-index: 5;
    display: flex;
    gap: 10px;
    padding-top: 12px;
  }
  .sel-bar .btn {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
  }
  .sel-bar .btn.outline {
    background: var(--rv-surface);
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
  /* Feito em parte (1.92.2): the circle filled as much as was done, in place of the icon */
  .kind-state > .kind-pie {
    flex: none;
    margin-top: 0;
  }
  .fact > .kind-pie {
    flex: none;
    margin-top: 1px;
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
  /* 1.99.0: the calendar of the person, under the line of who gets the alerts */
  .person-row > .select.sm.p-cal {
    grid-row: auto;
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
  .sheet .field.dobravel > .flabel,
  .sheet .field.dobravel > .flabel-row {
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
  /* 1.115.0: the title with a control beside it (Horário with Dia todo): the arrow after the control */
  .sheet .field.dobravel > .flabel-row {
    justify-content: flex-start;
    gap: 8px;
  }
  .sheet .field.dobravel > .flabel-row > .flabel {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }
  .sheet .field.dobravel > .flabel-row > .mini-switch {
    margin-left: auto;
  }
  .sheet .field.dobravel.shut > .flabel-row > .mini-switch {
    display: none;
  }
  .panel.dobra > .fold-head::after,
  .sheet .field.dobravel > .flabel::after,
  .sheet .field.dobravel > .flabel-row::after {
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
    order: 2;
  }
  .sheet .field.dobravel.shut > .flabel-row::after {
    margin-left: auto;
  }
  /* closed: what is chosen or written, after the title */
  .sheet .field > .flabel > .fl-val,
  .sheet .field > .flabel-row > .flabel > .fl-val {
    display: none;
  }
  /* 1.115.0: closed, what is chosen or written comes after the title, also in the fields without their own .fl-val */
  .sheet .field.dobravel.shut > .flabel[data-val]::before {
    content: "· " attr(data-val);
    order: 1;
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--rv-muted);
    font-weight: 500;
  }
  .sheet .field.dobravel.shut > .flabel-row > .flabel > .fl-val,
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
  .sheet .field.dobravel.shut > .flabel::after,
  .sheet .field.dobravel.shut > .flabel-row::after {
    transform: rotate(-90deg);
  }
  .panel.dobra.fechada > :not(.fold-head),
  .sheet .field.dobravel.shut > :not(.flabel):not(.flabel-row) {
    display: none !important;
  }
  .panel.dobra.fechada > .fold-head {
    margin-bottom: 0;
  }
  .panel.dobra.fechada > .mais-head {
    padding-bottom: 16px;
  }
  .panel.dobra > .fold-head:focus-visible,
  .sheet .field.dobravel > .flabel:focus-visible,
  .sheet .field.dobravel > .flabel-row:focus-visible {
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
`;var $s=class{constructor(e,t){this.url=e,this.onStatus=t,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let e=new WebSocket(this.url);this.ws=e,e.onopen=()=>{this.open=!0,this.backoff=1e3;let t=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))e.send(a);if(this.onStatus&&this.onStatus(!0),t)for(let a of this.reconnectHandlers)a()},e.onmessage=t=>{let a;try{a=JSON.parse(t.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},e.onclose=()=>{let t=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),t&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(e){this.reconnectHandlers.push(e)}_send(e){let t=JSON.stringify(e);this.open?this.ws.send(t):this.queue.push(t)}sendMessagePromise(e){let t=this.nextId++;return new Promise((a,s)=>{this.pending.set(t,{resolve:a,reject:s}),this._send({...e,id:t})})}subscribeMessage(e,t){let a={cb:e,msg:t,id:null,first:null};this.subs.add(a);let s=new Promise((i,n)=>{a.first={resolve:i,reject:n}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(e){let t=this.nextId++;e.id=t,this.byId.set(t,e),this.pending.set(t,{resolve:()=>{e.first&&e.first.resolve(),e.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(t),this.subs.delete(e),e.first&&e.first.reject(a),e.first=null)}}),this.ws.send(JSON.stringify({...e.msg,id:t}))}};function xa(){for(let o of[window.parent,window.top])try{if(!o||o===window)continue;let e=o.document.querySelector("home-assistant");if(e&&e.hass)return e.hass}catch{}return null}var go=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function xo(){let o=xa();return o&&o.themes&&typeof o.themes.darkMode=="boolean"?o.themes.darkMode:!!(go&&go.matches)}function vo(){for(let o of[window.parent,window.top])try{if(o&&o!==window&&o.document.querySelector("home-assistant"))return o}catch{}return window.parent}function bo(){return{topbar:!(window.parent!==window),haptic(e){try{let t=vo();t!==window&&t.dispatchEvent(new t.CustomEvent("haptic",{detail:e}))}catch{}},openInHA(e){try{let t=vo();if(t!==window&&t.document){t.history.pushState(null,"",e),t.dispatchEvent(new t.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(e,"_top")}}}var va=class{constructor(){let e=new URL("ws",location.href);e.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new $s(e.href,t=>this.statusHandlers.forEach(a=>a(t)))}onStatus(e){this.statusHandlers.push(e)}onReconnect(e){this.conn.onReconnect(e)}call(e,t={}){return this.conn.sendMessagePromise({type:e,...t})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(e){return this.conn.subscribeMessage(e,{type:"cronologia/subscribe_calendars"})}subscribePrefs(e){return this.conn.subscribeMessage(e,{type:"cronologia/prefs/subscribe"})}subscribeEvents(e,t,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:e,start:t,end:a})}listEvents(e,t,a){return this.call("cronologia/events/list",{entity_id:e,start:t,end:a})}createEvent(e,t){return this.call("calendar/event/create",{entity_id:e,event:t})}updateEvent(e,t,a,{recurrenceId:s,range:i}={}){let n={entity_id:e,uid:t,event:a};return s&&(n.recurrence_id=s),i&&(n.recurrence_range=i),this.call("calendar/event/update",n)}deleteEvent(e,t,{recurrenceId:a,range:s}={}){let i={entity_id:e,uid:t};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(e,t){return this.call("cronologia/prefs/set_calendar",{entity_id:e,prefs:t})}setAppPrefs(e){return this.call("cronologia/prefs/set_app",{prefs:e})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(e){return this.conn.subscribeMessage(e,{type:"cronologia/home/subscribe"})}skipCheck(e){return this.call("cronologia/check/set",{key:e,done:!0,kind:"rotina",skip:!0})}setCheck(e,t,a,s,i){return this.call("cronologia/check/set",{key:e,done:t,kind:a,...s?{who:s}:{},...i?{frac:i}:{}})}checkPart(e,t,a){return this.call("cronologia/check/part",{key:e,frac:t,...a?{who:a}:{}})}maintDone(e,t,a){return this.call("cronologia/maint/done",{entity_id:e,uid:t,...a?{who:a}:{}})}catalogBulk(e,t){return this.call("cronologia/catalog/bulk",{acao:e,itens:t})}toTomorrow(e,t){return this.call("cronologia/event/tomorrow",{entity_id:e,uid:t})}maintSkip(e,t){return this.call("cronologia/maint/skip",{entity_id:e,uid:t})}scoreReassign(e,t){return this.call("cronologia/score/reassign",{key:e,who:t})}scoreExtra(e,t,a){return this.call("cronologia/score/extra",{who:e,points:t,title:a})}scoreDemerit(e,t){return this.call("cronologia/score/demerit",{demerit:e,who:t})}scoreRemove(e){return this.call("cronologia/score/remove",{key:e})}scoreLog(e,t,a,s){return this.call("cronologia/score/log",{before:e,limit:t,...a?{from:a,to:s}:{}})}scoreRestore(e){return this.call("cronologia/score/restore",{key:e})}scorePrizes(e,t,a){return this.call("cronologia/score/prizes",{period:e,shared:t,per:a})}scoreReward(e,t){return this.call("cronologia/score/reward",{period:e,text:t})}scoreDelivered(e,t){return this.call("cronologia/score/delivered",{period:e,delivered:t})}maintUndo(e,t){return this.call("cronologia/maint/undo",{entity_id:e,uid:t})}payBill(e,t){return this.call("cronologia/contas/pagar",{conta:e,...t?{valor:t}:{}})}unpayBill(e){return this.call("cronologia/contas/desfazer",{conta:e})}newBill(e){return this.call("cronologia/contas/nova",{conta:e})}dataUrl(e){return new URL(`api/export/${e}`,location.href).href}async importData(e){let t=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(e.name||"")},body:e}),a=await t.json().catch(()=>({}));if(!t.ok)throw new Error(a.error||`Erro ${t.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(e){return this.call("cronologia/versions/restore",{name:e})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(e){return this.call("cronologia/backups/restore",{name:e})}resetData(){return this.call("cronologia/data/reset")}addTodo(e,t){return this.call("cronologia/todo/add",{entity_id:e,task:t})}memoriaNow(e=!1,t=new Date,a=!1){let s=i=>String(i).padStart(2,"0");return this.call("cronologia/memoria/agora",{fresh:e,...a?{casa:!0}:{},hora:`${s(t.getHours())}:${s(t.getMinutes())}`,dia:`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`})}memoriaIa(e,t={}){return this.call(`cronologia/memoria_ia/${e}`,t)}aiUsage(){return this.call("cronologia/ai/usage")}bringPreview(e){return this.call("cronologia/todo/bring_preview",{entity_id:e})}bring(e,t,a,s=!0){return this.call("cronologia/todo/bring",{entity_id:e,calendar:t,uids:a,remove:s})}setTodo(e,t,a,s=""){return this.call("cronologia/todo/set",{entity_id:e,uid:t,done:a,who:s})}testAlert(e){return this.call("cronologia/notify/test",{person:e})}testScoreReminder(){return this.call("cronologia/score/remind_test",{})}exportUrl({calendars:e,start:t,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",e.join(",")),s.searchParams.set("start",t),s.searchParams.set("end",a),s.href}voiceStatus(e=!1){return this.call("cronologia/voice/status",e?{fresh:!0}:{})}async voiceText(e){let t=await fetch(new URL("api/voice",location.href),{method:"POST",headers:{"content-type":"application/octet-stream"},body:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}async chat(e){let t=await fetch(new URL("api/chat",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}async extract(e){let t=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}};var ys={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos",period:"Per\xEDodo",after:"Volta",history:"Feito em",room:"C\xF4modo",equip:"Equipamento"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos",room:"C\xF4modo",equip:"Equipamento"}}},Gr={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},ft={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},T=o=>String(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),wa=o=>String(o).padStart(2,"0"),Zr=o=>`${o.getFullYear()}-${wa(o.getMonth()+1)}-${wa(o.getDate())}`;var Do=(o,e)=>`${o}|${e.uid||e.summary}|${e.recurrence_id||e.start}`;function _a(o){let e=String(o||"").replace(/[^\d.,-]/g,"");if(!e)return null;e.includes(",")?e=e.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(e)&&!/\.\d{1,2}$/.test(e)&&(e=e.replace(/\./g,""));let t=Number(e);return Number.isFinite(t)&&t>0?Math.round(t*100)/100:null}var tt=(o,e=!0)=>o==null?"":o.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:e?2:0,maximumFractionDigits:e?2:0});function wo(o){let e=/(\d+)\s*([a-zçê]+)/i.exec(T(o));if(!e)return null;let t=Math.max(1,Math.min(999,Number(e[1]))),a=e[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:t,unit:s}:null}var mt=["away","search","meds","bills","gavisos","now","day","memoria","home","todos"],_s={now:"day"};function Mo(o){let e=(Array.isArray(o)?o:[]).filter((t,a,s)=>mt.includes(t)&&s.indexOf(t)===a);for(let t of mt){if(e.includes(t))continue;if(_s[t]&&e.includes(_s[t])){e.splice(e.indexOf(_s[t]),0,t);continue}let a=mt.slice(0,mt.indexOf(t)).reverse().find(s=>e.includes(s));e.splice(a?e.indexOf(a)+1:0,0,t)}return e}var ze=[{id:"manha",label:"Manh\xE3",when:"de manh\xE3",icon:"sunrise",from:5,at:"09:00",span:["08:00","12:00"]},{id:"tarde",label:"Tarde",when:"\xE0 tarde",icon:"sun",from:12,at:"14:00",span:["13:00","17:00"]},{id:"noite",label:"Noite",when:"\xE0 noite",icon:"moon",from:18,at:"20:00",span:["18:00","22:00"]}],be=o=>ze.find(e=>e.id===o)||null,Xr=o=>{let e=T(o);return e.startsWith("manh")?"manha":e.startsWith("tard")?"tarde":e.startsWith("noit")?"noite":""},He=o=>o>=18||o<5?"noite":o>=12?"tarde":"manha";function $a(o,e=new Date){if(!o)return 2;let t=e.getHours(),a=He(t);if(o===a)return 0;let s=i=>ze.findIndex(n=>n.id===i);return t>=5&&s(o)<s(a)?1+s(o)/10:3+s(o)}var ya=(o,e=new Date)=>$a(o,e)>0&&$a(o,e)<2,ge=o=>o?`${o.n} ${o.n===1?ft[o.unit][1]:ft[o.unit][2]}`:"";function ka(o,e,t=1){let a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),s=e.n*t;if(e.unit==="dias")a.setDate(a.getDate()+s);else if(e.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=e.unit==="anos"?12*s:s,n=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let l=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(n,l))}return a}var el=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function $o(o){let e=[];for(let t of String(o||"").matchAll(el))e.push(`${t[3]}-${wa(+t[2])}-${wa(+t[1])}`);return e}var _o=o=>o.map(e=>`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`).join(", "),yo=o=>{let e=/(\d+)/.exec(String(o||""));return e?Math.min(1e3,Number(e[1])):0};function So(o){let e=String(o||"").replace(/\r/g,"").split(`
`),t=0;for(;t<e.length&&!e[t].trim();)t++;let a=/^#\s*([a-z]+)\b/.exec(T(e[t])),s=a&&Gr[a[1]];if(!s)return null;let i=Object.entries(ys[s].fields).map(([c,d])=>[c,T(d)]),n={};for(t++;t<e.length;t++){let c=/^([^:]{2,24}):\s*(.*)$/.exec(e[t]);if(!c)break;let d=T(c[1]),p=i.find(([,h])=>h===d||`${h}s`===d||h.startsWith("aviso")&&d.startsWith("aviso"));if(!p)break;n[p[0]]=c[2].trim()}let l={kind:s,notes:e.slice(t).join(`
`).trim()};if(s==="remedio")l.dose=n.dose||"",l.who=n.who||"",l.alert=!/^(nao|desligado|off)/.test(T(n.alert));else if(s==="conta")l.value=_a(n.value);else if(s==="rotina")l.who=n.who||"",l.points=yo(n.points),l.period=Xr(n.period),l.after=n.after?wo(n.after):null,l.after&&(l.history=$o(n.history)),l.rooms=ba(n.room,ko),l.equips=ba(n.equip),l.room=l.rooms[0]||"",l.equip=l.equips[0]||"";else{l.who=n.who||"",l.every=wo(n.every)||{n:6,unit:"meses"};let c=/(\d+)/.exec(n.warn||"");l.warn=c?Math.min(365,Number(c[1])):7,l.history=$o(n.history),l.points=yo(n.points),l.rooms=ba(n.room,ko),l.equips=ba(n.equip),l.room=l.rooms[0]||"",l.equip=l.equips[0]||""}return l}var ko=40;function ba(o,e=10){let t=[];for(let a of String(o||"").split(";")){let s=a.trim();s&&!t.some(i=>T(i)===T(s))&&t.push(s)}return t.slice(0,e)}function fe(o,e){let t=Array.isArray(o)?o.map(a=>String(a||"").trim()).filter(Boolean):[];return t.length?t:e&&String(e).trim()?[String(e).trim()]:[]}function Ao(o,e,t){let a=fe(t.rooms,t.room).map(i=>i.replace(/;/g,",")),s=fe(t.equips,t.equip).map(i=>i.replace(/;/g,","));o(a.length>1?`${e.room}s`:e.room,a.join("; ")),o(s.length>1?`${e.equip}s`:e.equip,s.join("; "))}function Co(o){let e=[ys[o.kind].tag],t=(i,n)=>{n!=null&&String(n).trim()&&e.push(`${i}: ${String(n).replace(/\s*\n\s*/g," ").trim()}`)},a=ys[o.kind].fields;o.kind==="remedio"?(t(a.dose,o.dose),t(a.who,o.who),o.alert===!1&&t(a.alert,"n\xE3o")):o.kind==="conta"?t(a.value,o.value!=null?tt(o.value):""):o.kind==="rotina"?(t(a.who,o.who),o.points>0&&t(a.points,o.points),be(o.period)&&t(a.period,be(o.period).label),o.after&&o.after.n>0&&(t(a.after,`${ge(o.after)} depois de feita`),t(a.history,_o((o.history||[]).slice(0,8)))),Ao(t,a,o)):(t(a.who,o.who),t(a.every,ge(o.every)),t(a.warn,`${o.warn??7} ${(o.warn??7)===1?"dia":"dias"} antes`),t(a.history,_o((o.history||[]).slice(0,8))),o.points>0&&t(a.points,o.points),Ao(t,a,o));let s=String(o.notes||"").trim();return s?`${e.join(`
`)}
${s}`:e.join(`
`)}var tl=/^todo\.[a-z0-9_]+$/;function Eo(o){let e=t=>tl.test(t||"")?t:null;return!o||typeof o!="object"?{maint_list:null,routine_list:null}:"maint_list"in o||"routine_list"in o?{maint_list:e(o.maint_list),routine_list:e(o.routine_list)}:{maint_list:o.maint?e(o.list):null,routine_list:o.routine?e(o.list):null}}function To(o,e){if(!e||e.kind!=="rotina"||!e.after||o.rrule)return"";let t=(e.history||[])[0]||"",a=/^\d{4}-\d{2}-\d{2}$/.test(o.start||"")?o.start:Zr(new Date(o.start));return t&&t>=a?t:""}function Aa(o,e,t){let a=t||[],s=Object.keys(e||{}).find(p=>T(p)===T(o)),i=s&&e[s]||{};if(i.cal===!1)return null;if(typeof i.cal=="string"&&i.cal){let p=a.find(h=>h.id===i.cal);if(p)return{id:p.id,auto:!1}}let n=T(o).split(/\s+/)[0].replace(/[^a-z0-9]/g,"");if(n.length<2)return null;let l=new RegExp(`(^|[^a-z0-9])${n}([^a-z0-9]|$)`),c=a.filter(p=>l.test(T(p.name))),d=c.find(p=>/pessoa|agenda|particular/.test(T(p.name)))||c[0];return d?{id:d.id,auto:!0}:null}var zo=4,al=300*1e3,Oo=62,sl=1e4;function Da(o,e){let t=ns(e.start),a=ns(e.end),s=e.all_day!=null?!!e.all_day:/^\d{4}-\d{2}-\d{2}$/.test(e.start);return{key:Do(o,e),kind:So(e.description),cal:o,uid:e.uid||null,rid:e.recurrence_id||null,rrule:e.rrule||null,summary:e.summary||"(sem t\xEDtulo)",description:e.description||"",location:e.location||"",allDay:s,start:t,end:a>t?a:q(t,s?1:0),raw:e}}var Ma=class{constructor(e,t){this.api=e,this.onChange=t,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(e){let t=[...new Set(e)].sort();if(t.join()!==this.calendars.join()){this.calendars=t;for(let a of this.windows)this._syncWindow(a)}}ensure(e,t){let a=this._covering(q(B(e),-Oo),t);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:q(B(e),-Oo),end:q(B(t),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(e,t,a=this.calendars){let s=this._covering(e,t),i=[];if(!s)return i;for(let n of a){let l=s.cals.get(n);if(l)for(let c of l.events)c.start<t&&c.end>e&&i.push(c)}return i.sort((n,l)=>n.start-l.start||Number(l.allDay)-Number(n.allDay)||n.summary.localeCompare(l.summary,"pt-BR"))}loading(e,t){let a=this._covering(e,t);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let e=new Map;for(let t of this.windows)for(let[a,s]of t.cals)s.error&&e.set(a,s.error);return e}refresh(e){for(let t of this.windows){let a=t.cals.get(e);a&&a.poll&&this._fetch(t,e,a)}}reloadAll(){for(let e of this.windows)for(let[t,a]of e.cals)a.poll&&this._fetch(e,t,a)}dispose(){for(let e of this.windows)for(let[t]of e.cals)this._drop(e,t);this.windows=[]}_covering(e,t){let a=null;for(let s of this.windows)s.start<=e&&s.end>=t&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(e){for(let t of this.calendars)e.cals.has(t)||this._add(e,t);for(let t of[...e.cals.keys()])this.calendars.includes(t)||this._drop(e,t)}_add(e,t){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};e.cals.set(t,a);let s=Ae(e.start),i=Ae(e.end);if(this.noSubscribe)return this._startPolling(e,t,a);a.unsub=this.api.subscribeEvents(t,s,i,n=>{e.cals.has(t)&&(n&&Array.isArray(n.events)?(a.events=n.events.map(l=>Da(t,l)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(n=>n&&n.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(e,t,a)):(a.loaded=!0,a.error=n&&n.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(e,t,a){return this._fetch(e,t,a),a.poll=setInterval(()=>this._fetch(e,t,a),al),null}async _fetch(e,t,a){try{let s=await this.api.listEvents(t,Ae(e.start),Ae(e.end));if(!e.cals.has(t))return;a.events=(s.events||[]).map(i=>Da(t,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(e,t){let a=e.cals.get(t);a&&(e.cals.delete(t),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(this.windows.length<=zo)return;let e=Date.now();this.windows.sort((s,i)=>i.used-s.used);let t=[],a=[];for(let s of this.windows)(t.length<zo||e-s.used<sl?t:a).push(s);this.windows=t;for(let s of a)for(let[i]of s.cals)this._drop(s,i)}};function We(o,e){let t=B(e),a=q(t,1);return o.filter(s=>s.start<a&&s.end>t).map(s=>Ca(s,t))}function Sa(o,e=t=>t.start){let t=o&&o[0];if(!t)return[];let a=s=>Math.floor(+e(s)/6e4);return o.filter(s=>a(s)===a(t))}function il(o){return o.kind||o.todo||o.gerencia||o.movedDone?!1:(o.allDay?q(B(o.end),-1):B(new Date(o.end.getTime()-1)))>B(o.start)&&(o.allDay||o.end-o.start>=864e5)}function Ca(o,e){if(!il(o))return o;let t=P(e);return{...o,key:`${o.key}|${t}`,day:t}}function qo(o,e){let t=B(e).getTime(),a=t+864e5,s=o.filter(d=>!d.allDay).map(d=>({e:d,s:Math.max(d.start.getTime(),t),t:Math.min(Math.max(d.end.getTime(),d.start.getTime()+30*6e4),a)})).sort((d,p)=>d.s-p.s||p.t-d.t),i=[],n=[],l=-1,c=()=>{let d=[];for(let p of n){let h=d.findIndex(u=>u<=p.s);h<0?(h=d.length,d.push(p.t)):d[h]=p.t,p.lane=h}for(let p of n)i.push({...p,lanes:d.length});n=[]};for(let d of s)n.length&&d.s>=l&&c(),n.push(d),l=Math.max(l,d.t);return n.length&&c(),i.map(d=>({event:d.e,top:(d.s-t)/36e5,height:(d.t-d.s)/36e5,lane:d.lane,lanes:d.lanes}))}var ks=o=>o.replace(/\\([nN,;\\])/g,(e,t)=>t==="n"||t==="N"?`
`:t);function ol(o){return o.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function nl(o){let e=-1,t=!1;for(let c=0;c<o.length;c++)if(o[c]==='"')t=!t;else if(o[c]===":"&&!t){e=c;break}if(e<0)return null;let a=o.slice(0,e),s=o.slice(e+1),[i,...n]=a.split(";"),l={};for(let c of n){let[d,p]=c.split("=");d&&(l[d.toUpperCase()]=(p||"").replace(/^"|"$/g,""))}return{name:i.toUpperCase(),params:l,value:s}}function Fo(o,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(t.formatToParts(new Date(e)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-e}catch{return null}}function Po(o){let e=o.value.trim(),t=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(e);if(!t)return null;let[,a,s,i,n,l,c,d]=t;if(n==null||o.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(d)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+n,+l,+(c||0)))};let p=o.params.TZID;if(p){let h=Date.UTC(+a,+s-1,+i,+n,+l,+(c||0)),u=Fo(p,h);if(u!=null){let f=h-u,x=Fo(p,f);return{allDay:!1,date:new Date(h-(x??u))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+n,+l,+(c||0))}}function rl(o){let e=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(o.trim());if(!e)return null;let[,t,a,s,i,n,l]=e,c=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+n||0)*60+(+l||0))*1e3;return t==="-"?-c:c}function Io(o){let e=[],t=null,a=0;for(let i of ol(o)){if(/^BEGIN:VEVENT/i.test(i)){t={},a=0;continue}if(!t)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){e.push(t),t=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let n=nl(i);n&&(n.name==="SUMMARY"?t.summary=ks(n.value):n.name==="DESCRIPTION"?t.description=ks(n.value):n.name==="LOCATION"?t.location=ks(n.value):n.name==="DTSTART"?t.dtstart=Po(n):n.name==="DTEND"?t.dtend=Po(n):n.name==="DURATION"?t.duration=rl(n.value):n.name==="RRULE"?t.rrule=n.value.trim():n.name==="STATUS"?t.status=n.value.trim().toUpperCase():n.name==="RECURRENCE-ID"&&(t.recurrence=!0))}let s=[];for(let i of e){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let n=i.dtstart.date,l=i.dtend?i.dtend.date:i.duration!=null?new Date(n.getTime()+i.duration):null,c=i.dtstart.allDay,d={title:(i.summary||"").trim()||"Evento",date:P(n),start:c?"":j(n),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(c){if(l){let p=new Date(l.getFullYear(),l.getMonth(),l.getDate()-1);p>n&&(d.end_date=P(p))}}else l&&l>n&&(d.end=j(l),P(l)!==P(n)&&(d.end_date=P(l)));s.push(d)}return s}var yt=class{constructor(e){this.onLevel=e,this.chunks=[],this.length=0,this.rate=16e3}async start(){let e=navigator.mediaDevices;if(!e||!e.getUserMedia)throw Object.assign(new Error("no_api"),{name:"NoApi"});this.stream=await e.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});let t=window.AudioContext||window.webkitAudioContext;try{this.ctx=new t({sampleRate:16e3})}catch{this.ctx=new t}this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{}),this.rate=this.ctx.sampleRate,this.src=this.ctx.createMediaStreamSource(this.stream),this.node=this.ctx.createScriptProcessor(4096,1,1),this.node.onaudioprocess=a=>{let s=a.inputBuffer.getChannelData(0);this.chunks.push(new Float32Array(s)),this.length+=s.length;let i=0;for(let n=0;n<s.length;n+=4)i+=s[n]*s[n];this.onLevel&&this.onLevel(Math.min(1,Math.sqrt(i/(s.length/4))*5))},this.src.connect(this.node),this.node.connect(this.ctx.destination)}seconds(){return this.length/this.rate}stop(){this._close();let e=new Float32Array(this.length),t=0;for(let n of this.chunks)e.set(n,t),t+=n.length;this.chunks=[];let a=this.rate/16e3,s=Math.floor(e.length/a),i=new Int16Array(s);for(let n=0;n<s;n++){let l=Math.floor(n*a),c=Math.max(l+1,Math.min(e.length,Math.floor((n+1)*a))),d=0;for(let h=l;h<c;h++)d+=e[h];let p=Math.max(-1,Math.min(1,d/(c-l)));i[n]=p<0?p*32768:p*32767}return i}cancel(){this._close(),this.chunks=[],this.length=0}_close(){try{this.node&&(this.node.onaudioprocess=null),this.src&&this.src.disconnect(),this.node&&this.node.disconnect()}catch{}if(this.stream)for(let e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.state!=="closed"&&this.ctx.close().catch(()=>{}),this.stream=null,this.node=null,this.src=null}};function Ea(o){let e=o&&o.name||"";return e==="NotAllowedError"||e==="SecurityError"?"O microfone est\xE1 bloqueado. Permita o microfone para o Home Assistant (no navegador, no cadeado ao lado do endere\xE7o; no app do celular, nas permiss\xF5es do app Home Assistant) e tente de novo.":e==="NotFoundError"||e==="OverconstrainedError"?"N\xE3o achei um microfone neste aparelho.":e==="NotReadableError"?"O microfone est\xE1 sendo usado por outro app. Feche o outro e tente de novo.":e==="NoApi"?window.isSecureContext===!1?"O microfone aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), o celular e o navegador n\xE3o deixam usar o microfone, nem pelo app do Home Assistant.":"Este navegador n\xE3o deixa usar o microfone aqui.":`N\xE3o consegui abrir o microfone (${o&&o.message||e||"erro"}).`}var ll=o=>r`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.package)}</svg>`,No="Todos os c\xF4modos",cl="V\xE1rios c\xF4modos",dl="V\xE1rios equipamentos";function Ro(o=[],e=[]){let t=new Set((o||[]).filter(Boolean));return(e||[]).length>1&&e.every(a=>t.has(a))}var Rt=(o=[],e=[])=>Ro(o,e)?[No]:(o||[]).filter(Boolean);function kt(o=[],e=[],t=[]){let a=(o||[]).filter(Boolean),s=(e||[]).filter(Boolean);if(!a.length&&!s.length)return m;let i=(l,c,d=c)=>r`<span class="tag room" title=${d}>${ll(l)}<span class="tt">${c}</span></span>`;if(s.length>1)return r`<span class="place-tags">${i("package",dl,s.join(", "))}</span>`;let n=Ro(a,t)?i("house",No,a.join(", ")):a.length>1?i("door-open",cl,a.join(", ")):a.length?i("door-open",a[0]):m;return r`<span class="place-tags">${n}${s.length?i("package",s[0]):m}</span>`}var pl=o=>r`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`;function at(o,e,t,a,s){if(!a)return m;let i=!!(o._folds&&o._folds[e]);return r`<button class="add-line done-fold off-fold" data-fold=${e} aria-expanded=${i?"true":"false"} @click=${()=>{o._folds={...o._folds||{},[e]:!i},o.requestUpdate()}}>${pl(i?"chevron-down":"chevron-right")}<span>${t} (${a})</span></button>
    ${i?s():m}`}var Lo="cronologia-rotinas-agrupar",Ho="cronologia-rotinas-agrupar-fechado",S=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Pe={"":{label:"Evento",icon:"calendar"},evento:{label:"Evento",icon:"calendar",verb:"Feito",done:"feito"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},jo={remedio:"rem\xE9dios",conta:"contas",rotina:"rotinas",manutencao:"manuten\xE7\xF5es"},Yo=["SU","MO","TU","WE","TH","FR","SA"],hl=["D","S","T","Q","Q","S","S"],ul=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],ml=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],fl=o=>o.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),Lt=o=>(o||"?").trim().charAt(0).toUpperCase(),Vo=o=>o<60?`${o} min`:`${Math.floor(o/60)} h${o%60?` ${o%60} min`:""}`;function Bo(o,e,t){let a=Z(F(o),e);return t?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function gl(o,e,t=!1){return o&&e&&T(o)===T(e)?"Tomei":t&&o?`${o} tomou`:"Tomado"}function Wo(o){let e=fe(o.equips,o.equip);return e.length?e.join(", "):fe(o.rooms,o.room).join(", ")}function vl(o,e){return o.days<-1?`venceu h\xE1 ${-o.days} dias`:o.days===-1?"venceu ontem":o.days===0?"\xE9 hoje":o.days===1?"amanh\xE3":o.days<=60?`em ${o.days} dias`:`em ${le(F(o.due),e)}`}function xl(o,e){if(o.done&&o.done.part)return Ko(o);if(o.done)return`${o.done.skipped?"pulada":`feito${o.done.frac?` ${Math.round(o.done.frac*100)}%`:""} por ${o.done.by||"algu\xE9m"}`} \xB7 volta ${o.next?oe(F(o.next),e,{long:!1,cap:!1}):`em ${ge(o.after)}`}`;let t=be(o.period);return[o.late>0?o.late===1?"venceu ontem":`atrasada h\xE1 ${o.late} dias`:o.time||(t?t.when:"hoje"),o.part?Qo(o):"",o.who,`volta ${ge(o.after)} depois`].filter(Boolean).join(" \xB7 ")}var De=o=>Math.max(0,(o.points||0)-(o.part&&o.part.points||0)),bl=o=>o.done&&o.done.part?Math.round((o.points||0)*o.done.part.frac):o.done&&o.done.frac?Math.round((o.points||0)*o.done.frac):o.done&&o.done.parts?Math.max(0,(o.points||0)-o.done.parts.list.reduce((e,t)=>e+t.points,0)):o.points||0,Qo=o=>`falta ${Math.round((1-o.part.done)*100)}%`;function Ko(o){return`${Math.round((o.part&&o.part.done||o.done.part.frac)*100)}% feito${o.done.by?` por ${o.done.by}`:""} \xB7 o resto amanh\xE3`}function Ht(o,e){if(o.after)return xl(o,e);if(o.done&&o.done.part)return Ko(o);let t=be(o.period);return[o.yesterday?"ficou de ontem":o.time||(t&&!o.done?t.when:""),!o.done&&o.part?Qo(o):"",o.done?o.done.skipped?"pulada":`feito${o.done.frac?` ${Math.round(o.done.frac*100)}%`:""}${o.done.by?` por ${o.done.by}`:""}`:o.who].filter(Boolean).join(" \xB7 ")||"hoje"}var wl=o=>o.period||(o.time?He(Number(String(o.time).slice(0,2))):""),As=(o,e)=>!o.done&&(o.late>0||!!o.period&&ya(o.period,e)),jt=(o,e,t=wl)=>o.map((a,s)=>[$a(t(a),e),s,a]).sort((a,s)=>a[0]-s[0]||a[1]-s[1]).map(a=>a[2]);function Uo(o,e){let t=Object.fromEntries(String(o||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(n=>n.split("="))),a={freq:"uma",byday:[e.getDay()],interval:3,dur:"sempre",until:P(q(e,30)),days:7},s=Number(t.INTERVAL||1);t.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):t.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:t.BYDAY?t.BYDAY.split(",").map(n=>Yo.indexOf(n.slice(-2))).filter(n=>n>=0):[e.getDay()]}):t.FREQ==="MONTHLY"?a.freq="mensal":t.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(t.UNTIL||"");if(i){let n=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:P(n)})}return a}var Jo=o=>class extends o{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_afterDoneOn(e){return e&&e.kind&&e.raw&&e.raw.start?To(e.raw,e.kind):""}_afterDone(e){let t=this._afterDoneOn(e);if(!t)return null;let a=this._ix().routines||[],s=a.find(i=>i.cal===e.cal&&i.uid===e.uid&&i.done)||a.find(i=>i.cal===e.cal&&i.summary===e.summary&&i.done);return s?{chk:s.done,key:s.key}:{chk:{at:null,by:"",day:t},key:null}}_partOfEvent(e){let t=e&&e.kind;if(!t||t.kind!=="rotina")return null;if(e.movedDone)return e.movedDone.item&&e.movedDone.item.part||null;let a=this._ix().routines||[],s=a.find(i=>i.key===e.key)||(t.after&&!e.rrule?a.find(i=>i.after&&i.cal===e.cal&&i.summary===e.summary):null);return s&&s.part||null}_checkOf(e){if(e.afterDue){let s=(this._ix().routines||[]).find(i=>i.after&&i.cal===e.cal&&i.summary===e.summary);return s&&s.done||null}if(e.gerencia)return e.gerencia.pago?{at:null,by:""}:null;if(e.todo)return e.todo.done?{at:null,by:""}:null;let t=this._ix().checks[e.key];if(t)return t;let a=this._afterDone(e);return a?a.chk:null}_careOn(){let e=this._ix().people||[];return((this._app("alerts",null)||{}).caregivers||[]).some(a=>e.some(s=>s.phone&&T(s.name)===T(a)))}_phoneOwner(e){let t=(this._ix().people||[]).find(a=>T(a.name)===T(e));return t&&t.reach?t.phone?t.name:t.care:""}_gerenciaEvents(e,t){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=F(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:q(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<t&&s.end>e))}_movedDoneEvents(e,t){let a=this._ix(),s=P(new Date(this._now)),i=[];for(let[n,l]of Object.entries(a.checks||{})){let c=l&&l.moved;if(!c||!c.day)continue;let d=l.skipped&&c.start?/T/.test(c.start)?P(new Date(c.start)):String(c.start).slice(0,10):c.day,p=F(d);if(!(p<t&&q(p,1)>e))continue;let h=c.day===s?(a.routines||[]).find(b=>b.key===n):null,u=h&&h.summary||c.summary;if(!u)continue;let f=p,x=q(p,1),w=!0;if(/T/.test(c.start||"")){let b=new Date(c.start),$=new Date(c.end||c.start);f=new Date(p.getFullYear(),p.getMonth(),p.getDate(),b.getHours(),b.getMinutes()),x=new Date(f.getTime()+Math.max(15*6e4,$-b||0)),w=!1}i.push({key:n,cal:c.cal,uid:null,rid:null,rrule:null,summary:u,description:"",location:"",allDay:w,start:f,end:x,raw:{},kind:{kind:"rotina",points:h&&h.points||0,who:h&&h.who||""},movedDone:{item:h,by:l.by||"",day:d}})}return i}_afterDueEvents(e,t,a){let s=[];for(let i of a(q(e,-62),t)){let n=i.kind,l=this._afterDoneOn(i);if(!l||!n||!n.after)continue;let c=B(ka(F(l),n.after));if(!(c<t&&q(c,1)>e)||P(c)===P(i.start))continue;let d=i.allDay?c:new Date(c.getFullYear(),c.getMonth(),c.getDate(),i.start.getHours(),i.start.getMinutes());s.push({...i,start:d,end:i.allDay?q(c,1):new Date(d.getTime()+Math.max(0,i.end-i.start)),afterDue:!0})}return s}_billsList(){let e=this._ix(),t=B(new Date(this._now)),a=P(t),s=P(q(t,8)),i=P(q(t,-1)),n=[];for(let l of e.gerencia&&e.gerencia.contas||[]){let c=!l.pago,d=this._paidNow&&this._paidNow.has(l.id);(c?!(l.atrasada||l.vencimento<=s):!d&&!(l.vencimento>=i&&l.vencimento<=s))||n.push({id:l.id,source:"gerencia",title:l.descricao,value:l.valor,due:l.vencimento,paid:!!l.pago,overdue:c&&(l.atrasada||l.vencimento<a),sub:l.tipo==="fatura"?N(l.itens||0,"compra","compras"):l.categoria||"",c:l})}for(let l of e.bills||[]){let c=this._cal(l.cal);n.push({id:l.key,source:"cal",title:l.summary,value:l.value,due:l.due,paid:!!l.paid,overdue:l.overdue,sub:c?c.name:"",item:l})}return n.sort((l,c)=>Number(l.paid)-Number(c.paid)||l.due.localeCompare(c.due)||l.title.localeCompare(c.title,"pt-BR"))}_eventOfItem(e){return Da(e.cal,{start:e.start,end:e.end,summary:e.summary,description:e.description,location:e.location,uid:e.uid,recurrence_id:e.rid,rrule:e.rrule})}_openIndexItem(e){this._openEvent(this._eventOfItem(e))}async _check(e,t){t==="remedio"&&(this._medsHold=!0);try{await this.api.setCheck(e.key,!0,t),this._haptic("success");let a=Pe[t];this._showToast(`${I(e.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _skip(e,t="rotina"){try{let a=await this.api.skipCheck(e.key);this._haptic("light");let s=a&&a.next?oe(F(a.next),new Date(this._now),{long:!1,cap:!1}):"";this._showToast(`${I(e.summary,24)}: ${t==="remedio"?"pulado":"pulada"}${s?`, volta ${s}`:""}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _toTomorrow(e){this._sheet&&await this._closeSheet();try{let t=await this.api.toTomorrow(e.cal,e.uid);this._haptic("light"),this._showToast(`${I(e.summary,24)}: fica para amanh\xE3`,t&&t.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(a=>this._showToast(a.message))}:null)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _undoCheck(e,t){try{await this.api.setCheck(e.key,!1,t),this._haptic("light"),this._showToast(`${I(e.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(e.key,!0,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(e){if(e.source==="cal")return this._check(e.item,"conta");try{e.busy=!0,this.requestUpdate(),await this.api.payBill(e.id),(this._paidNow||(this._paidNow=new Set)).add(e.id),this._haptic("success"),this._showToast(`${I(e.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(e.id).catch(t=>this._showToast(t.message))})}catch(t){this._showToast(`O GerencIA n\xE3o deu baixa: ${t.message}`)}}async _unpay(e){if(e.source==="cal")return this._undoCheck(e.item,"conta");try{await this.api.unpayBill(e.id),this._showToast(`${I(e.title,26)}: volta para a pagar`)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _testAlert(e,t=!1){try{await this.api.testAlert(e),this._showToast(`Aviso de teste enviado para ${t?"o seu celular":`o celular de ${this._phoneOwner(e)||e}`}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(a){this._showToast(`N\xE3o foi: ${a.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#avisos");e&&e.scrollIntoView({block:"start"})}))}_ring(e,t,a=null,s=null){let n=2*Math.PI*15,l=Math.max(0,Math.min(1,e||0));return r`<span class="ring2 ${t}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${l>0?vt`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(l*n).toFixed(2)} ${n.toFixed(2)}`}></circle>`:m}
        </svg>
        ${a!=null?r`<b>${a}</b>`:s||m}
      </span>`}_kindIcon(e){let t=Pe[e.kind?e.kind.kind:""]||Pe[""];return r`<span class="kind-ic">${S(t.icon)}</span>`}_renderMedsPanel(){let e=this._ix().meds||[];if(!e.length)return m;let t=e.filter(b=>b.state!=="pulado"),a=t.filter(b=>b.taken).length,s=e.filter(b=>b.state==="atrasado"),i=[];for(let b of e){let $=b.who||"",g=i.find(A=>T(A.who)===T($));g||i.push(g={who:$,list:[],phone:!1}),g.list.push(b),b.alert&&b.phone&&(g.phone=!0)}let n=a===t.length,l=e.filter(b=>b.taken).length;!l&&this._medsDoneN&&(this._medsDoneOpen=!1),this._medsDoneN=l;let c=!!(this._fullOn&&this._fullOn()),d=b=>!c||b.allDay||b.state!=="depois"||new Date(b.start).getTime()-this._now<=36e5,p=!c&&!!this._medsDoneOpen,h=b=>b.list.filter($=>!$.taken),u=b=>h(b).filter(d),f=c?[]:i.filter(b=>!h(b).length),x=b=>(this._ix().people||[]).some($=>$.pet&&T($.name)===T(b)),w=p?i:i.filter(b=>u(b).length);return c&&!w.length?m:r`<div class="panel meds ${s.length?"alert":""} ${n?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${S("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${n?a?"Tudo tomado":"Doses puladas":`${a} de ${t.length} ${t.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(t.length?a/t.length:1,s.length?"bad":n?"ok":"acc",`${a}/${t.length}`)}
        </div>
        ${s.length?r`<div class="meds-alert" role="alert">${S("triangle-alert")}<span>${s.length===1?r`<b>${s[0].summary}</b>${s[0].who?` de ${s[0].who}`:""} está atrasado ${Vo(s[0].late_min)}`:r`<b>${s.length} doses atrasadas</b>: ${s.map(b=>b.summary).join(", ")}`}</span></div>`:m}
        ${w.map(b=>r`${i.length>1||b.who?r`<div class="meds-who"><span class="avatar">${x(b.who)?S("paw-print"):Lt(b.who)}</span><b>${b.who||"Sem pessoa"}</b>${b.list.some($=>$.state!=="pulado")?r`<small>${b.list.filter($=>$.state==="tomado").length} de ${b.list.filter($=>$.state!=="pulado").length}</small>`:m}${b.phone?r`<span class="who-bell" title="Aviso no celular de ${this._phoneOwner(b.who)}">${S("bell-ring")}</span>`:m}</div>`:m}
            ${ae(p?b.list:u(b),$=>$.key,$=>this._renderDose($))}`)}
        ${f.length&&!p?r`<div class="meds-ready">${f.map(b=>{let $=b.list.some(y=>y.state==="pulado"),g=b.list.some(y=>y.state==="tomado"),A=g&&!$?`${b.who?"tomou":"Tomados"} todos`:g?"em dia":"pulou";return r`<span class="ready-who ${g&&!$?"":"skipped"}">${b.who?r`<span class="avatar">${x(b.who)?S("paw-print"):Lt(b.who)}</span><b>${b.who}</b>`:m}<span>${A}</span>${S(g&&!$?"check":"skip-forward")}</span>`})}</div>`:m}
        ${l&&!c?r`<button class="add-line done-fold" aria-expanded=${p?"true":"false"} @click=${()=>(this._medsDoneOpen=!p,this.requestUpdate())}>
              ${S(p?"chevron-down":"chevron-right")}<span>Tomados (${l})</span>
            </button>`:m}
        ${c?m:this._alertsHint(e)}
      </div>`}_doseVerb(e,t=!1){return gl(e,this._me?this._me():"",t)}_renderDose(e){let t=e.state,a=[e.dose?`Dose: ${e.dose}`:"",t==="tomado"?`tomou \xE0s ${j(new Date(e.taken.at))}${e.taken.by&&T(e.taken.by)!==T(e.who)?` \xB7 ${e.taken.by}`:""}`:t==="pulado"?"pulado":t==="atrasado"?`atrasado ${Vo(e.late_min)}`:t==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return r`<div class="dose ${t}">
        <button class="dose-main" @click=${()=>this._openIndexItem(e)}>
          <span class="dose-time">${e.time||"dia"}</span>
          <span class="dose-tx"><b>${e.summary}</b>${a?r`<small>${a}</small>`:m}</span>
        </button>
        ${t==="tomado"||t==="pulado"?r`<button class="dose-done ${t==="pulado"?"skipped":""}" @click=${()=>this._undoCheck(e,"remedio")} aria-label="Desmarcar ${e.summary}">${S(t==="pulado"?"skip-forward":"check")}</button>`:r`<button class="dose-btn ${t}" aria-label="${this._doseVerb(e.who,!0)}: ${e.summary}" @click=${()=>this._check(e,"remedio")}>${S("check")}${this._doseVerb(e.who)}</button>`}
      </div>`}_alertsHint(e){if((this._app("alerts",null)||{}).meds===!1||!e.some(c=>c.alert))return m;let a=[...new Set(e.filter(c=>c.alert&&!c.phone&&c.who).map(c=>c.who))],s=this._careOn(),i=[...new Set(e.filter(c=>c.alert&&c.phone).map(c=>this._phoneOwner(c.who)||c.who))];if(!(!s&&(a.length>0||!i.length)))return m;let l=a.length?`Sem celular para ${a.join(", ")}: escolha quem cuida`:"Escolha quem cuida";return r`<button class="panel-foot warn" @click=${()=>this._goAlerts()}>${S("bell-ring")}<span>${l}</span>${S("chevron-right")}</button>`}_renderBillsPanel(){let e=this._billsList();if(!e.length)return m;let t=new Date(this._now),a=e.filter(c=>!c.paid),s=a.filter(c=>c.overdue),i=a.reduce((c,d)=>c+(d.value||0),0),n=this._billsAll?e:e.slice(0,5),l=this._ix().gerencia||{};return r`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="sec-ic ${s.length?"late":"gold"}">${S("receipt")}</span>
          <span class="overline">Contas a pagar</span>
          ${a.length?r`<span class="bills-sum"><b>${tt(i,!1)}</b><small>${s.length?`${N(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:r`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${ae(n,c=>c.id,c=>{let d=F(c.due),p=Z(d,t)===0;return r`<div class="bill ${c.paid?"paid":c.overdue?"late":p?"today":""}">
            <button class="bill-main" @click=${()=>c.source==="gerencia"?this._openSheet("bill",{b:c}):this._openIndexItem(c.item)}>
              <span class="bill-due"><b>${d.getDate()}</b><small>${ha[d.getMonth()]}</small></span>
              <span class="bill-tx"><b>${c.title}</b><small>${c.value!=null?r`<span class="bill-val">${tt(c.value)}</span> · `:m}${[Bo(c.due,t,c.paid),c.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${c.paid?r`<button class="dose-done" @click=${()=>this._unpay(c)} aria-label="Desfazer pagamento de ${c.title}">${S("check")}</button>`:r`<button class="dose-btn ${c.overdue?"atrasado":p?"agora":""}" ?disabled=${c.busy} @click=${()=>this._pay(c)}>${S("check")}Paguei</button>`}
          </div>`})}
        ${e.length>5?r`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${S(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${e.length-5}`}</button>`:m}
        ${l.ligado?r`<div class="panel-foot plain">${S("wallet")}<span>${l.erro?`GerencIA: ${l.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:m}
      </div>`}_renderGerenciaAvisos(){let e=this._ix().gerencia||{},t=e.ligado&&!e.erro&&Array.isArray(e.avisos)?e.avisos:[];if(!t.length)return m;let a={email:"mail",whatsapp:"message-circle",senha:"lock",erro:"circle-alert",venceu:"triangle-alert",vence:"calendar",valores:"clock",indices:"trending-up",beneficio:"gift",beneficio_para:"triangle-alert"},s=["erro","venceu","beneficio_para"],i=n=>{let l=n.valor!=null?r`<span class="gav-n">${tt(n.valor,!1)}</span>`:n.dias!=null?r`<span class="gav-n late">${n.dias}<small>${n.dias===1?"dia":"dias"}</small></span>`:n.n?r`<span class="gav-n">${n.n}</span>`:m,c=r`<span class="bill-due gav-ic">${S(a[n.tipo]||"info")}</span><span class="bill-tx"><b>${n.titulo}</b><small>${n.texto}</small></span>${l}${e.painel?S("chevron-right","gav-chev"):m}`,d=`bill gav ${s.includes(n.tipo)?"alerta":""}`;return e.painel?r`<a class=${d} href=${e.painel+(n.caminho||"")} target="_top">${c}</a>`:r`<div class=${d}>${c}</div>`};return r`<div class="panel gavisos" id="gerencia-avisos">
        ${this._panelHead("triangle-alert","gold","Avisos do GerencIA",String(t.length))}
        ${ae(t,n=>n.id,i)}
      </div>`}_renderHomePanel(){if(this._awayNow&&this._awayNow())return m;let e=this._ix(),t=e.routines||[],a=t.length&&t.every(h=>h.done)&&!this._choresHold?[]:t,s=(e.maint||[]).filter(h=>h.state!=="ok"),i=(e.maint||[]).length;if(!a.length&&!s.length)return m;let n=a.filter(h=>h.done).length,l=new Date(this._now),c=jt(a.filter(h=>!h.done),l),d=a.filter(h=>h.done),p=h=>this._choreRow(h,l);return r`<div class="panel chores" id="casa">
        ${a.length?r`${this._panelHead("spray-can","ok","Rotina da casa",`${n} de ${a.length}`)}
              ${c.length?this._renderPartPick():m}
              ${ae(c,h=>h.key,p)}
              ${c.length?m:r`<p class="empty-line all-done">${S("circle-check")}Tudo feito hoje.</p>`}
              ${d.length?r`<button class="add-line done-fold" aria-expanded=${this._choresDoneOpen?"true":"false"} @click=${()=>(this._choresDoneOpen=!this._choresDoneOpen,this.requestUpdate())}>
                      ${S(this._choresDoneOpen?"chevron-down":"chevron-right")}<span>Concluídas (${d.length})</span>
                    </button>
                    ${this._choresDoneOpen?ae(d,h=>h.key,p):m}`:m}`:m}
        ${s.length?r`${this._panelHead("wrench","gold","Manuten\xE7\xE3o da casa","",{cls:a.length?"sub":""})}
              ${ae(s,h=>h.key,h=>this._renderMaintRow(h))}`:m}
        ${i?r`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${S("wrench")}Todas as manutenções (${i})</button>`:m}
      </div>`}_choreRow(e,t){return r`<div class="chore ${e.done?"done":""} ${e.done&&e.done.skipped?"skipped":""}">
        ${this._renderChk(e)}
        <button class="chore-tx" @click=${()=>this._openIndexItem(e)}><b>${e.summary}</b><small class=${As(e,t)?"late":""}>${!e.done&&this._pickWho()&&e.points>0?r`<span class="pts-inline">+${De(e)}</span> · `:m}${Ht(e,t)}</small></button>
        ${!e.done&&this._pickWho()?this._renderQuickWho(e.summary,De(e),a=>this._markDone(e,"rotina",a)):e.points>0&&this._scoreOn()?e.done?this._renderWon(this._pointsWho(e.done.part?e.done.part.entry:e.key,e.done.by),bl(e)):r`<span class="pts">+${De(e)}</span>`:m}
      </div>`}_renderMaintRow(e){let t=new Date(this._now),a=e.state==="vencida"?"bad":e.state==="perto"?"warn":"ok";return r`<div class="maint ${e.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(e)}>
          ${this._ring(e.progress,a,null,S("wrench"))}
          <span class="maint-tx"><b>${e.summary}</b><small>${vl(e,t)} · a cada ${ge(e.every)}${e.who?` \xB7 ${e.who}`:""}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</small>${kt(fe(e.rooms,e.room),fe(e.equips,e.equip))}</span>
        </button>
        ${e.canMove?this._pickWho()?this._renderQuickWho(e.summary,e.points||0,s=>this._maintDone(e,s)):r`<button class="dose-btn ${e.state==="vencida"?"atrasado":e.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(e)}>${S("check")}Feito</button>`:m}
      </div>`}_renderMaintSheet(){let e=this._ix().maint||[];return r`${this._sheetHead("Manuten\xE7\xE3o da casa")}
                <div class="maint-list">${e.length?ae(e,t=>t.key,t=>this._renderMaintRow(t)):r`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${S("plus")}Nova manutenção</button></div>`}_catalogCount(){let e=new Set;for(let t of this._ix().catalog||[])e.add(t.kind==="remedio"?`${t.cal}|${T(t.summary)}|${T(t.who)}|${T(t.dose)}`:`${t.key}`);return e.size}_renderCatalog(){let e=new Date(this._now),t=this._ix().catalog||[],a=this._roomNamesAll(),s=(this._catQ||"").trim(),i=T(s),n=i?t.filter(D=>T(`${D.summary} ${D.who} ${D.dose} ${D.location} ${fe(D.rooms,D.room).join(" ")} ${fe(D.equips,D.equip).join(" ")}`).includes(i)):t,l=D=>D?D.charAt(0).toLowerCase()+D.slice(1):"",c=D=>/FREQ=DAILY/.test(D.rrule||"")&&!/INTERVAL=([2-9]|\d\d)/.test(D.rrule||""),d=D=>D.kind==="manutencao"?`a cada ${ge(D.every)}`:D.after?`volta ${ge(D.after)} depois de feita`:D.rrule?l(Fe(D.rrule)):"uma vez",p=this._awayNow()?this._away():null,h=D=>!!p&&(D.kind==="rotina"||D.kind==="manutencao")&&(D.late||D.next<=p.to),u=D=>{let K=Z(F(D.next),e);if(h(D))return null;if(D.late||K<0){let ie=D.kind==="rotina"?"atrasada":"venceu";return{text:K===-1?`${ie} ontem`:`${ie} h\xE1 ${-K} dias`,late:!0}}return c(D)&&K<=1?null:{text:`${D.kind==="conta"?"vence":(D.kind==="manutencao","pr\xF3xima")} ${oe(F(D.next),e,{long:!1,cap:!1})}`}},f=D=>D.points>0&&this._scoreOn()?r`<span class="pts-inline">+${D.points}</span>`:"",x=[];for(let D of n.filter(K=>K.kind==="remedio")){let K=`${D.cal}|${T(D.summary)}|${T(D.who)}|${T(D.dose)}`,R=x.find(ie=>ie.id===K);R?(D.time&&!R.times.includes(D.time)&&R.times.push(D.time),(D.next<R.first.next||D.next===R.first.next&&D.time<R.first.time)&&(R.first=D),R.keys.push(D.key)):x.push({id:K,first:D,times:D.time?[D.time]:[],keys:[D.key]})}let w=this._cselOn(),b=new Map,$=(D,K,R=null,ie=m,te=D.key,pe=[D.key])=>{b.set(te,{kind:D.kind,keys:pe,c:D});let Ve=w&&this._csel.ids.has(te),Yt=w&&!!this._csel.kind&&this._csel.kind!==D.kind;return r`<button class="row cat-row ${Ve?"sel-on":""} ${Yt?"fora":""}" style=${Y(this._colorOfEvent(D),this._dark)} ?disabled=${Yt} aria-pressed=${w?Ve?"true":"false":m}
          @click=${()=>w?this._cselToggle(D.kind,te):this._openIndexItem(D)}
          @contextmenu=${Wt=>{w||(Wt.preventDefault(),this._cselStart(D.kind,te))}}>
        <span class="tile" aria-hidden="true">${S(Pe[D.kind].icon)}</span>
        <span class="grow"><div class="label">${D.summary}</div><div class="hint">${K}${R?r`${K?" \xB7 ":""}<span class=${R.late?"late":""}>${R.text}</span>`:m}</div>${ie}</span>
        ${w?r`<span class="cat-mark" aria-hidden="true">${S("check")}</span>`:S("chevron-right")}
      </button>`},g=(D,K,R=m)=>{let ie=K.filter(Boolean);return $(D,ie.length?ie.map((te,pe)=>r`${pe?" \xB7 ":""}${te}`):"",u(D),R)},A=[{kind:"rotina",ic:"spray-can",tone:"ok",title:"Rotina da casa",add:"Nova rotina",none:"Nenhuma rotina cadastrada."},{kind:"remedio",ic:"pill",tone:"accent",title:"Rem\xE9dios",add:"Novo rem\xE9dio",none:"Nenhum rem\xE9dio cadastrado."},{kind:"manutencao",ic:"wrench",tone:"gold",title:"Manuten\xE7\xE3o da casa",add:"Nova manuten\xE7\xE3o",none:"Nenhuma manuten\xE7\xE3o cadastrada."},{kind:"conta",ic:"receipt",tone:"violet",title:"Contas a pagar",add:"Nova conta",none:"Nenhuma conta cadastrada aqui."}],y=this._ix().gerencia||{},O=(D,K)=>D.kind==="remedio"?x.filter(({first:R})=>K.includes(R)).map(({id:R,first:ie,times:te,keys:pe})=>{let Ve=[...te].sort();return $(ie,[ie.dose,ie.who,Ve.length?Ve.join(", "):"",d(ie),ie.alert===!1?"sem aviso":""].filter(Boolean).join(" \xB7 "),null,m,R,pe)}):D.kind==="rotina"?K.map(R=>g(R,[R.who,d(R),R.time||(be(R.period)||{}).when,f(R)],kt(fe(R.rooms,R.room),fe(R.equips,R.equip),a))):D.kind==="manutencao"?K.map(R=>g(R,[d(R),R.who,f(R)],kt(fe(R.rooms,R.room),fe(R.equips,R.equip),a))):K.map(R=>g(R,[R.value!=null?tt(R.value):"",d(R)])),C=A.map(D=>{let K=n.filter(ie=>ie.kind===D.kind),R=K.filter(h);return{sec:D,list:K,off:R,rows:O(D,K.filter(ie=>!h(ie)))}}),v=[...new Set([...a,...t.flatMap(D=>fe(D.rooms,D.room))])],_=[["tipo","Tipo","layers"],["quem","Quem faz","user-round"],...v.length?[["comodo","C\xF4modo","door-open"]]:[],["freq","Frequ\xEAncia","repeat"]],M=(()=>{try{return JSON.parse(localStorage.getItem(Lo)||'"tipo"')}catch{return"tipo"}})(),E=_.some(([D])=>D===M)?M:"tipo",L=(()=>{try{return localStorage.getItem(Ho)==="true"}catch{return!1}})(),V=(D,K)=>{try{localStorage.setItem(D,JSON.stringify(K))}catch{}this.requestUpdate()},de=D=>{let K=/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.exec(D.rrule||""),R=+((/INTERVAL=(\d+)/.exec(D.rrule||"")||[])[1]||1);if(K)return{DAILY:1,WEEKLY:7,MONTHLY:30,YEARLY:365}[K[1]]*R;let ie=D.kind==="manutencao"?D.every:D.after;return ie&&ft[ie.unit]?ft[ie.unit][0]*ie.n:0},$e=[["dia","Todo dia","sunrise"],["semana","At\xE9 uma semana","calendar-days"],["mes","At\xE9 um m\xEAs","calendar-range"],["mais","Mais de um m\xEAs","calendar-clock"],["uma","Uma vez","calendar-check"]],ee=D=>{let K=de(D);return K?K<=1?"dia":K<=7?"semana":K<=31?"mes":"mais":"uma"},Q=()=>{let D=n.filter(te=>!h(te)),K,R;E==="quem"?(K=[...[...new Set(D.map(pe=>(pe.who||"").trim()).filter(Boolean))].sort((pe,Ve)=>pe.localeCompare(Ve,"pt-BR")).map(pe=>[pe,pe,"user-round"]),["","Sem quem faz","users"]],R=pe=>[(pe.who||"").trim()]):E==="comodo"?(K=[...v.map(te=>[te,te,"door-open"]),["","Sem c\xF4modo","house"]],R=te=>{let pe=fe(te.rooms,te.room);return pe.length?pe:[""]}):(K=$e,R=te=>[ee(te)]);let ie=new Map(K.map(([te])=>[te,[]]));for(let te of D)for(let pe of R(te))ie.has(pe)&&ie.get(pe).push(te);return K.map(([te,pe,Ve])=>{let Yt=ie.get(te);return{k:te,nome:pe,ic:Ve,rows:A.flatMap(Wt=>O(Wt,Yt.filter(Kn=>Kn.kind===Wt.kind)))}}).filter(te=>te.rows.length)},X=n.filter(h),xe=(_.find(([D])=>D===E)||_[0])[1],Ne=w?m:r`<div class="agrupar ${L?"fechado":""}">
            <button type="button" class="agrupar-l" id="cat-agrupar" aria-expanded=${L?"false":"true"} @click=${()=>V(Ho,!L)}>${S("layers")}<span>Agrupar por</span>${L?r`<span class="agrupar-val">· ${xe}</span>`:m}${S("chevron-down","seta")}</button>
            ${L?m:r`<div class="seg agrupar-seg" role="radiogroup" aria-labelledby="cat-agrupar" style="--n:${_.length}">
              ${_.map(([D,K,R])=>r`<button type="button" class=${E===D?"on":""} role="radio" aria-checked=${E===D?"true":"false"} @click=${()=>V(Lo,D)}>${S(R)}<span>${K}</span></button>`)}
            </div>`}
          </div>`;this._cselRows=b;let H=this._catalogCount(),re=(w?[...this._csel.ids].filter(D=>b.has(D)):[]).length,ke=w&&this._csel.kind?[...b].filter(([,D])=>D.kind===this._csel.kind).map(([D])=>D):[],W=ke.length>0&&ke.every(D=>this._csel.ids.has(D)),z=w?r`<div class="res-head sel-head">
            <button class="icon-btn" @click=${()=>this._cselEnd()} aria-label="Cancelar seleção">${S("x")}</button>
            <b class="res-n">${re?`${re} ${re===1?"selecionado":"selecionados"}`:"Toque nos cadastros"}</b>
            ${this._csel.kind?r`<button class="text-btn" @click=${()=>this._cselAll(W?[]:ke)}>${S(W?"x":"list-checks")}${W?"Nenhum":"Todos"}</button>`:m}
          </div>`:H&&n.length?r`<div class="res-head end"><button class="text-btn sel-start" @click=${()=>this._cselStart()}>${S("list-checks")}Selecionar</button></div>`:m,se=w?this._csel.kind:"";return r`
        <label class="search-box cat-search">
          ${S("search")}
          <input type="search" placeholder="Buscar nas rotinas, remédios…" .value=${s} @input=${D=>(this._catQ=D.target.value,this.requestUpdate())} enterkeyhint="search" aria-label="Buscar nos cadastros" />
          ${s?r`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>(this._catQ="",this.requestUpdate())} aria-label="Limpar">${S("x")}</button>`:m}
        </label>
        ${i&&!n.length?r`<div class="panel"><div class="empty"><div class="em-icon">${S("search")}</div><h3>Nada encontrado</h3><p>Nenhum cadastro com “${I(s,30)}”.</p></div></div>`:m}
        ${H&&n.length?Ne:m}
        ${z}
        ${E!=="tipo"?r`${Q().map(D=>r`<div class="panel cat-sec cat-grp" data-card="agrupar-${E}-${D.k||"sem"}">
                ${this._panelHead(D.ic,"accent",D.nome,String(D.rows.length))}
                ${D.rows}
              </div>`)}
              ${X.length?r`<div class="panel cat-sec cat-grp">${at(this,"cat-pausadas","Pausadas",X.length,()=>A.flatMap(D=>O(D,X.filter(K=>K.kind===D.kind))))}</div>`:m}`:m}
        ${E!=="tipo"?m:C.map(({sec:D,list:K,off:R,rows:ie})=>{let te=ie.length+R.length;return i&&!te?m:r`<div class="panel cat-sec" id="cat-${D.kind}">
            ${this._panelHead(D.ic,D.tone,D.title,te?String(te):"")}
            ${ie.length?ie:R.length?m:r`<p class="empty-line">${D.none}</p>`}
            ${at(this,`cat-${D.kind}`,"Pausadas",R.length,()=>O(D,R))}
            ${D.kind==="conta"&&y.ligado?r`<p class="cat-note">${S("info")}As contas do GerencIA ficam no GerencIA.</p>`:m}
            ${i||w?m:r`<button class="add-line" @click=${()=>this._openKindForm({kind:D.kind})}>${S("plus")}${D.add}</button>`}
          </div>`})}
        ${w?r`<div class="sel-bar ${se&&se!=="conta"?"two":""}">
              <button class="btn outline sel-apagar" ?disabled=${!re} @click=${()=>this._cselDelete()}>${S("trash")}Apagar</button>
              ${se&&se!=="conta"?r`<button class="btn primary sel-alterar" ?disabled=${!re} @click=${()=>this._cselAlter()}>${S("pencil")}${re?`Alterar ${re}`:"Alterar"}</button>`:m}
            </div>`:m}
      `}_cselOn(){return!!(this._csel&&this._csel.path===this._path)}_cselStart(e="",t=""){this._csel={path:this._path,kind:e,ids:new Set(t?[t]:[])},this._haptic("light");try{history.state&&history.state.rvSel||history.pushState({...history.state||{},rvSel:!0},"")}catch{}this.requestUpdate()}_cselToggle(e,t){let a=new Set(this._csel.ids);a.has(t)?a.delete(t):a.add(t),this._csel={...this._csel,ids:a,kind:a.size?this._csel.kind||e:""},this.requestUpdate()}_cselAll(e){this._csel={...this._csel,ids:new Set(e),kind:e.length?this._csel.kind:""},this.requestUpdate()}_cselEnd(){return this._csel=null,this.requestUpdate(),this._popEntry("rvSel")}_cselPicked(){if(!this._cselOn())return[];let e=this._cselRows||new Map;return[...this._csel.ids].map(t=>e.get(t)).filter(Boolean)}_cselAlter(){let e=this._cselPicked();e.length&&this._openSheet("catbulk",{kind:e[0].kind,quem:void 0,pontos:void 0,comodos:void 0,saving:!1})}_renderCatBulkSheet(){let e=this._form,a=this._cselPicked().length;if(!e||!a)return m;let s=Pe[e.kind],i=e.kind==="rotina"||e.kind==="manutencao",l=(this._ix().people||[]).filter(w=>e.kind==="remedio"||!w.pet),c=(w,b)=>r`<button class="pick keep ${w?"on":""}" aria-pressed=${w?"true":"false"} @click=${b}>${S("lock")}<span>Manter</span></button>`,d=this._roomNamesAll(),p=e.comodos||[],h=d.length>1&&d.every(w=>p.some(b=>T(b)===T(w))),u=w=>this._setForm({comodos:p.some(b=>T(b)===T(w))?p.filter(b=>T(b)!==T(w)):[...p,w]}),f=e.quem!==void 0||e.pontos!==void 0||e.comodos!==void 0,x=`${a} ${a===1?s.label.toLowerCase():jo[e.kind]}`;return r`${this._sheetHead(`Alterar ${x}`,null,"pencil")}
        <div class="field" data-f="quem">
          <span class="flabel">${S("user-round","lbl-ic")}${e.kind==="remedio"?"Quem toma":"Quem faz"}</span>
          <div class="chip-row">
            ${c(e.quem===void 0,()=>this._setForm({quem:void 0}))}
            ${i?r`<button class="pick ${e.quem===""?"on":""}" @click=${()=>this._setForm({quem:""})}>${S("x")}<span>Ninguém</span></button>`:m}
            ${l.map(w=>r`<button class="pick person ${e.quem===w.name?"on":""}" @click=${()=>this._setForm({quem:w.name})}><span class="avatar sm">${w.pet?S("paw-print"):Lt(w.name)}</span><span>${w.name}</span></button>`)}
          </div>
        </div>
        ${i&&this._scoreOn()?r`<div class="field" data-f="pontos">
              <span class="flabel">${S("trophy","lbl-ic")}Pontos para quem fizer</span>
              <div class="chip-row c4">
                ${c(e.pontos===void 0,()=>this._setForm({pontos:void 0}))}
                ${[0,5,10,20,30,50].map(w=>r`<button class="pick ${e.pontos===w?"on":""}" @click=${()=>this._setForm({pontos:w})}>${S(w?"trophy":"x")}<span>${w?`+${w}`:"Sem pontos"}</span></button>`)}
              </div>
            </div>`:m}
        ${i&&d.length?r`<div class="field" data-f="comodos">
              <span class="flabel">${S("door-open","lbl-ic")}Cômodos</span>
              <div class="chip-row">
                ${c(e.comodos===void 0,()=>this._setForm({comodos:void 0}))}
                <button class="pick ${e.comodos!==void 0&&!p.length?"on":""}" @click=${()=>this._setForm({comodos:[]})}>${S("x")}<span>Nenhum</span></button>
                ${d.length>1?r`<button class="pick ${h?"on":""}" @click=${()=>this._setForm({comodos:h?[]:[...d]})}>${S("house")}<span>Todos</span></button>`:m}
                ${d.map(w=>{let b=e.comodos!==void 0&&p.some($=>T($)===T(w));return r`<button class="pick ${b?"on":""}" aria-pressed=${b?"true":"false"} @click=${()=>u(w)}>${S("door-open")}<span>${I(w,22)}</span></button>`})}
              </div>
            </div>`:m}
        <div class="sheet-actions two">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${S("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${!f||e.saving} @click=${()=>this._cselSave()}>${S("check")}${e.saving?"Salvando\u2026":"Salvar"}</button>
        </div>`}async _cselSave(){let e=this._form,t=this._cselPicked(),a={};e.quem!==void 0&&(a.quem=e.quem),e.pontos!==void 0&&(a.pontos=e.pontos),e.comodos!==void 0&&(a.comodos=e.comodos);let s=t.flatMap(i=>i.keys.map(n=>({id:n,campos:a})));if(!(!s.length||!Object.keys(a).length)){this._setForm({saving:!0});try{let i=await this.api.catalogBulk("alterar",s);await this._closeSheet(),await this._cselEnd(),this._haptic("success");for(let n of new Set(t.map(l=>l.c.cal)))this._store.refresh(n);this._cselToast(i,`${N(t.length,"cadastro alterado","cadastros alterados")}`,i.desfazer&&i.desfazer.length?{label:"Desfazer",run:()=>this.api.catalogBulk("alterar",i.desfazer).then(n=>this._showToast(n.falhas.length?`N\xE3o deu para desfazer: ${n.falhas[0].erro}`:"Desfeito")).catch(n=>this._showToast(n.message))}:null)}catch(i){this._sheet==="catbulk"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui: ${i.message}`)}}}_cselDelete(){let e=this._cselPicked();if(!e.length)return;let t=e.length;this._openSheet("confirm",{title:t===1?`Apagar \u201C${I(e[0].c.summary,28)}\u201D?`:`Apagar ${t} ${jo[e[0].kind]}?`,text:"Saem da agenda deste em diante; o que j\xE1 passou fica no calend\xE1rio.",label:"Apagar",danger:!0,run:async()=>{try{let a=await this.api.catalogBulk("apagar",e.flatMap(s=>s.keys));await this._closeSheet(),await this._cselEnd(),this._haptic("medium");for(let s of new Set(e.map(i=>i.c.cal)))this._store.refresh(s);this._cselToast(a,N(t,"cadastro apagado","cadastros apagados"))}catch(a){this._showToast(`N\xE3o consegui apagar: ${a.message}`)}}})}_cselToast(e,t,a=null){let s=e&&e.falhas||[];if(!s.length)return this._showToast(ne(t),a);let i=s.length===1?I(s[0].nome,28):N(s.length,"cadastro","cadastros");this._showToast(`${e.feitos?`${ne(t)}. `:""}N\xE3o deu em ${i}: ${s[0].erro}`,e.feitos?a:null)}_renderKindFacts(e){let t=e.kind,a=new Date(this._now),s=this._checkOf(e),i=null;if(t.kind==="rotina"&&t.after&&!e.rrule&&!this._ix().checks[e.key]){let $=this._afterDone(e),g=$?null:(this._ix().routines||[]).find(A=>A.cal===e.cal&&A.uid===e.uid&&A.done);$?(s=$.chk,i=$.key):g&&(s=g.done,i=g.key)}let n=[];if(t.kind==="remedio"){t.dose&&n.push(["pill",`Dose: ${t.dose}`]),t.who&&n.push(["user-round",`Quem toma: ${t.who}`]);let $=this._phoneOwner(t.who),g=(this._app("alerts",null)||{}).meds!==!1;n.push(["bell-ring",t.alert?g?$?`Aviso no celular de ${$}`:this._careOn()?"Aviso no celular de quem cuida":"Sem celular: escolha quem cuida em Mais \u203A Avisos":"Avisos no celular desligados":"Sem aviso no celular"])}else if(t.kind==="conta")t.value!=null&&n.push(["receipt",tt(t.value)]);else if(t.kind==="rotina")t.who&&n.push(["user-round",`Quem faz: ${t.who}`]),fe(t.rooms,t.room).length&&n.push(["door-open",Rt(fe(t.rooms,t.room),this._roomNamesAll()).join(", ")]),t.points>0&&this._scoreOn()&&n.push(["award",`${t.points} pontos para quem fizer`]),be(t.period)&&n.push([be(t.period).icon,ne(be(t.period).when)]),t.after&&!e.rrule&&(n.push(["repeat",`Volta ${ge(t.after)} depois de feita (na agenda, s\xF3 a pr\xF3xima vez)`]),t.history&&t.history.length&&n.push(["check",`Feito em ${t.history.slice(0,4).map($=>le(F($),a)).join(", ")}`]));else if(t.kind==="manutencao"){t.points>0&&this._scoreOn()&&n.push(["award",`${t.points} pontos para quem fizer`]),n.push(["repeat",`A cada ${ge(t.every)}, contando da \xFAltima vez`]),t.who&&n.push(["user-round",`Quem faz: ${t.who}`]);let $=fe(t.rooms,t.room);$.length&&n.push(["door-open",Rt($,this._roomNamesAll()).join(", ")]);for(let g of fe(t.equips,t.equip))n.push(["package",g]);n.push(["bell-ring",`Aparece na tela inicial ${N(t.warn,"dia","dias")} antes`]),t.history&&t.history.length&&n.push(["check",`Feito em ${t.history.slice(0,4).map(g=>le(F(g),a)).join(", ")}`])}let l=Pe[t.kind],c=t.kind==="rotina"?this._partOfEvent(e):null,d=s&&s.part?c&&c.done||s.part.frac:!s&&c?c.done:0,p=Math.round(d*100),h=r`<span class="ev-done part kind-pie" style="--f:${p}%" aria-hidden="true"></span>`,u=s&&s.part&&s.at&&Z(new Date(s.at),a)===0,f=d&&t.points?De({points:t.points,part:c||{done:d,points:Math.round(t.points*d)}}):t.points||0;d&&!s&&n.push(["",r`${p}% feito${c.by&&c.by.length?` por ${c.by.join(" e ")}`:""} · falta ${100-p}%`,h]);let x=(t.kind==="rotina"||t.kind==="manutencao")&&!e.rrule&&e.start<q(B(a),1)?r`<button class="btn outline kind-tomorrow" @click=${()=>this._toTomorrow(e)}>${S("sunrise")}Amanhã</button>`:m,w=$=>x===m?$:$===m?r`<div class="kind-later">${x}</div>`:r`<div class="kind-later two">${$}${x}</div>`,b=m;if(t.kind==="manutencao"){let $=(this._ix().maint||[]).find(A=>A.cal===e.cal&&A.uid===e.uid),g=w(r`<button class="btn outline kind-skip" @click=${()=>this._maintSkip($)}>${S("skip-forward")}Pular</button>`);$&&$.canMove&&(b=this._pickWho()?r`${this._renderWhoButtons(this._scoreOn()&&$.points||0,A=>this._maintDone($,A))}${g}`:r`<button class="btn primary kind-act" @click=${()=>this._maintDone($)}>${S("check")}Feito hoje</button>${g}`)}else if(e.start<q(B(a),2)||t.kind==="rotina"&&t.after&&!e.rrule){let $={key:i||e.key,summary:e.summary},g=w(t.kind==="rotina"||t.kind==="remedio"?r`<button class="btn outline kind-skip" @click=${()=>this._closeSheet().then(()=>this._skip($,t.kind))}>${S("skip-forward")}Pular</button>`:m);b=s&&s.skipped?r`<div class="kind-state skipped">${S("skip-forward")}<span>${t.kind==="remedio"?"Pulado":"Pulada"}${s.at?` ${Z(new Date(s.at),a)===0?"hoje":le(new Date(s.at),a)} \xE0s ${j(new Date(s.at))}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck($,t.kind)}>${S("undo-2")}Desfazer</button></div>`:s&&s.part?r`<div class="kind-state part">${h}<span>${p}% feito${s.at?` ${Z(new Date(s.at),a)===0?"hoje":le(new Date(s.at),a)} \xE0s ${j(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""} · ${u?"o resto amanh\xE3":`falta ${100-p}%`}</span><button class="text-btn" @click=${()=>this._undoCheck($,t.kind)}>${S("undo-2")}Desfazer</button></div>
              ${u?m:this._pickWho()?this._renderWhoButtons(f,A=>this._closeSheet().then(()=>this._markDone({...$,points:t.points||0,part:c},t.kind,A))):r`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...$,points:t.points||0,part:c},t.kind))}>${S("check")}${l.verb}${f>0&&this._scoreOn()?` \xB7 +${f}`:""}</button>`}`:s?r`<div class="kind-state">${S("circle-check")}<span>${ne(l.done)}${s.at?` ${Z(new Date(s.at),a)===0?"hoje":le(new Date(s.at),a)} \xE0s ${j(new Date(s.at))}`:s.day?` ${Z(F(s.day),a)===0?"hoje":`em ${le(F(s.day),a)}`}`:""}${s.by?` \xB7 ${s.by}`:""}</span>${s.day?m:r`<button class="text-btn" @click=${()=>this._undoCheck($,t.kind)}>${S("undo-2")}Desfazer</button>`}</div>`:(t.kind==="rotina"||t.kind==="manutencao")&&this._pickWho()?r`${this._renderWhoButtons(f,A=>this._closeSheet().then(()=>this._markDone({...$,points:t.points||0,part:c},t.kind,A)))}${g}`:t.kind==="rotina"||t.kind==="manutencao"?r`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...$,points:t.points||0,part:c},t.kind))}>${S("check")}${l.verb}${f>0&&this._scoreOn()?` \xB7 +${f}`:""}</button>${g}`:r`<button class="btn primary kind-act" @click=${()=>this._check($,t.kind).then(()=>this._closeSheet())}>${S("check")}${t.kind==="remedio"?this._doseVerb(t.who,!0):l.verb}</button>${g}`}return r`${n.map(([$,g,A])=>r`<div class="fact">${A||S($)}<span>${g}</span></div>`)}
        ${t.notes?r`<div class="fact notes">${S("file-text")}<span>${t.notes}</span></div>`:m}
        ${b}`}_renderBillSheet(){let e=this._form.b,t=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===e.id)||e.c,a=new Date(this._now),s=F(t.vencimento);return r`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.descricao}</h3><p class="ev-cal">GerencIA · <b>${Bo(t.vencimento,a,t.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${S("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${S("receipt")}<span><b>${tt(t.valor)}</b>${t.tipo==="fatura"?` \xB7 ${N(t.itens||0,"compra","compras")} na fatura`:t.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${S("calendar")}<span>${Z(s,a)<0?"Venceu":"Vence"} ${oe(s,a,{cap:!1})}</span></div>
          ${t.categoria?r`<div class="fact">${S("layers")}<span>${t.categoria}</span></div>`:m}
          ${t.conta?r`<div class="fact">${S("wallet")}<span>${t.conta}</span></div>`:m}
        </div>
        <p class="sheet-note">${S("info")} ${t.pago?"J\xE1 est\xE1 paga no GerencIA.":t.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${t.pago?r`<button class="btn outline" @click=${()=>this._unpay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("undo-2")}Desfazer pagamento</button>`:r`<button class="btn primary" @click=${()=>this._pay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("check")}Paguei</button>`}
        </div>`}_kindCal(e){let t=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[e];return(a&&t.find(i=>a.test(i.name)&&i.canUpdate)||t.find(i=>i.id===this._defaultCal())||t[0]||{}).id||null}_openKindForm({kind:e="remedio",ev:t=null,copy:a=!1,date:s=null}={}){let i=this._writable(),n=this._ix().gerencia||{};if(!i.length&&!(e==="conta"&&n.ligado)&&!(t&&!a)){this._openSheet("nocal",{});return}let l=B(new Date),c=s?B(s):l,d={mode:"add",kind:e,cal:this._kindCal(e),title:"",date:P(c),times:e==="rotina"?["19:00"]:["08:00"],allDay:e!=="remedio",...Uo(e==="conta"?"":"FREQ=DAILY",c),dose:"",who:"",alert:!0,value:"",repeat:"mensal",dest:n.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},afterN:2,period:"",last:P(l),warn:7,history:[],points:this._scoreOn()&&(e==="rotina"||e==="manutencao")?e==="rotina"?10:30:0,notes:"",location:""};if(t){let p=t.kind,h=Uo(t.rrule,t.start);if(d={...d,...h,mode:a?"add":"edit",kind:p.kind,cal:a?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._kindCal(p.kind):t.cal,origCal:t.cal,uid:t.uid,rid:a?null:t.rid,title:t.summary,date:P(t.start),times:t.allDay?["09:00"]:[j(t.start)],allDay:t.allDay,dose:p.dose||"",who:p.who||"",alert:p.alert!==!1,value:p.value!=null?String(p.value.toFixed(2)).replace(".",","):"",repeat:h.freq==="mensal"?"mensal":h.freq==="anual"?"anual":"nao",dest:"cal",every:p.every||d.every,warn:p.warn??7,history:p.history||[],last:p.history&&p.history[0]||d.last,points:p.points||0,period:t.allDay&&p.period||"",notes:p.notes||"",location:t.location||"",roomNames:fe(p.rooms,p.room),equipNames:fe(p.equips,p.equip),equips:[]},(p.kind==="manutencao"||p.kind==="rotina")&&(d.roomNames.length||d.equipNames.length)){let{rooms:u,items:f}=this._invLists(),x=w=>{let b=f.filter($=>T($.nome)===T(w));return b.find($=>T($.roomName)===T(d.roomNames[0]||""))||b.find($=>d.roomNames.some(g=>T($.roomName)===T(g)))||b[0]};d.equips=[...new Set(d.equipNames.map(w=>(x(w)||{}).id).filter(Boolean))],d.rooms=d.roomNames.map(w=>(u.find(b=>T(b.nome)===T(w))||{}).id).filter(Boolean),d.room=d.rooms[0]||null}if(p.kind==="rotina"&&p.after&&!t.rrule&&Object.assign(d,{freq:"depois",afterN:Math.max(1,Math.round(p.after.n*ft[p.after.unit][0]))}),d.wasAfter=d.freq==="depois",d.mode==="edit")try{d.before=this._kindEvents(d)[0]}catch{d.before=null}}this._openSheet("form",d),d.mode==="add"&&this.updateComplete.then(()=>{let p=this.renderRoot.querySelector(".sheet .ev-title-input");p&&p.focus()})}_kindRrule(e,t,a){let s;if(e.freq==="diario")s="FREQ=DAILY";else if(e.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(e.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(e.interval)||3))}`;else if(e.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...e.byday].sort().map(i=>Yo[i]).join(",")}`;else if(e.freq==="mensal")s="FREQ=MONTHLY";else return null;if(e.dur!=="sempre"){let i=e.dur==="ate"?F(e.until):q(a,Math.max(1,Number(e.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=t?`;UNTIL=${P(i).replace(/-/g,"")}`:`;UNTIL=${fl(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(e,{keepRrule:t=!0}={}){let a=(e.title||"").trim();if(!a)throw new Error(e.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:e.kind,notes:e.notes};if(e.kind==="remedio")Object.assign(s,{dose:e.dose,who:e.who,alert:e.alert});else if(e.kind==="rotina"){Object.assign(s,{who:e.who,points:Math.max(0,Math.round(Number(e.points)||0)),period:e.allDay&&e.period||""}),e.freq==="depois"&&Object.assign(s,{after:{n:Math.max(1,Math.min(365,Math.round(Number(e.afterN)||2))),unit:"dias"},history:e.mode==="edit"?e.history||[]:[]});let{rooms:x}=this._invLists(),w=(e.rooms||(e.room?[e.room]:[])).map(b=>x.find($=>$.id===b)).filter(Boolean);s.rooms=w.length?w.map(b=>b.nome):x.length?[]:e.roomNames||[],s.equips=e.equipNames||[]}else if(e.kind==="conta"){if(s.value=_a(e.value),!s.value)throw new Error("Coloque o valor")}else{if(!(e.every&&e.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:e.who,every:e.every,warn:e.warn,history:e.mode==="edit"?e.history:e.last?[e.last]:[],points:Math.max(0,Math.round(Number(e.points)||0))});let{rooms:x,items:w}=this._invLists(),b=(e.equips||[]).map(g=>w.find(A=>A.id===g)).filter(Boolean),$=(e.rooms||(e.room?[e.room]:[])).map(g=>x.find(A=>A.id===g)).filter(Boolean);s.equips=w.length?b.map(g=>g.nome):e.equipNames||[],s.rooms=b.length?[...new Set(b.map(g=>g.roomName).filter(Boolean))]:$.length?$.map(g=>g.nome):x.length?[]:e.roomNames||[]}let i={summary:a,description:Co(s)};if((e.location||"").trim()&&(i.location=e.location.trim()),e.kind==="manutencao"){let x=e.mode==="edit"?F(e.date):ka(F(e.last||P(new Date)),e.every);return[{...i,start:P(x),end:P(q(x,1))}]}if(e.kind==="conta"){let x=F(e.date),w={...i,start:P(x),end:P(q(x,1))};return t&&e.repeat!=="nao"&&(w.rrule=e.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[w]}let n=F(e.date);if(e.freq==="semana"){if(!e.byday.length)throw new Error("Escolha os dias da semana");if(e.mode==="add")for(let x=0;x<7&&!e.byday.includes(n.getDay());x++)n=q(n,1)}let l=e.kind==="rotina"&&e.allDay,c=t?this._kindRrule(e,l,n):null,d=c?{rrule:c}:{};if(l)return[{...i,start:P(n),end:P(q(n,1)),...d}];let p=[...new Set((e.times||[]).filter(x=>/^\d{2}:\d{2}$/.test(x)))].sort();if(!p.length)throw new Error("Escolha o hor\xE1rio");let h=e.kind==="remedio"?15:30,u=x=>{if(e.freq==="alternado")return q(x,2);if(e.freq==="intervalo")return q(x,Math.max(2,Number(e.interval)||3));if(e.freq==="mensal")return new Date(x.getFullYear(),x.getMonth()+1,x.getDate());if(e.freq==="semana"){let w=q(x,1);for(let b=0;b<7&&!e.byday.includes(w.getDay());b++)w=q(w,1);return w}return q(x,1)},f=new Date;return p.map(x=>{let[w,b]=x.split(":").map(Number),$=n;e.mode==="add"&&e.freq!=="uma"&&e.freq!=="depois"&&new Date($.getFullYear(),$.getMonth(),$.getDate(),w,b)<f&&($=u($));let g=new Date($.getFullYear(),$.getMonth(),$.getDate(),w,b);return{...i,start:Ae(g),end:Ae(new Date(g.getTime()+h*6e4)),...d}})}async _saveKindForm(){let e=this._form;if(e.kind==="tarefa")return this._saveTodoForm();if(e.kind==="conta"&&e.dest==="gerencia"&&e.mode==="add"){let l=_a(e.value);if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!l)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:e.title.trim(),valor:l,vencimento:e.date,repete:e.repeat,categoria:e.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(c){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${c.message}`)}return}let t;try{t=this._kindEvents(e)}catch(l){this._showToast(l.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=t[0];if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:s});return}this._setForm({saving:!0});let i=Pe[e.kind].label,n=["rotina","manutencao","conta"].includes(e.kind)?"a":"o";try{if(e.mode==="add"){for(let l of t)await this.api.createEvent(e.cal,l);this._done(t.length>1?`${i} criad${n}: ${t.length} hor\xE1rios em ${I(a.name,20)}`:`${i} criad${n} em ${I(a.name,24)}`,e.cal,s.start)}else e.cal!==e.origCal?(await this.api.createEvent(e.cal,s),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`${i} movid${n} para ${I(a.name,24)}`,e.cal,s.start)):(await this._saveInPlace(e,s),this._done(`${i} salv${n}${e.rid&&!a.canUpdate?" \xB7 a s\xE9rie recome\xE7a neste dia":""}`,e.cal,s.start))}catch(l){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${l.message}`)}}_renderModelChips(e){let t=this._form;return r`<div class="field model-field"><span class="flabel">Tipo<span class="fl-val">· ${(Pe[e]||Pe[""]).label}</span></span><div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(Pe).filter(([a])=>a!=="evento"&&(a!=="tarefa"||this._todoLists().length)).map(([a,s])=>r`<button class="model ${e===a?"on":""}" role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>{if(e===a)return;let i=t.date?F(t.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${S(s.icon)}<span>${s.label}</span></button>`)}
      </div></div>`}_dateField(e,t,a,s,{kind:i="futuro"}={}){return Nt(e,t,n=>n&&a(n),{kind:i,max:i==="passado"?P(new Date):"",weekStart:this._app("week_start",1),bid:s})}_whoField(e,{pets:t=!1}={}){let a=this._form,s=this._ix().people||[],i=l=>s.some(c=>c.pet&&T(c.name)===T(l)),n=[...new Set([...s.filter(l=>t||!l.pet).map(l=>l.name),...a.who?[a.who]:[]])];return r`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${n.map(l=>r`<button class="pick person ${a.who===l?"on":""}" @click=${()=>this._setForm({who:a.who===l?"":l})}><span class="avatar sm">${i(l)?S("paw-print"):Lt(l)}</span><span>${l}</span></button>`)}
        </div>
        <span class="field-hint">${S("info")}<span>${t?"Outra pessoa ou um pet":"Outra pessoa"}: adicione em Mais › Avisos.</span></span>
      </div>`}_freqField(e){let t=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...t.kind==="rotina"?[["mensal","Todo m\xEAs"],["depois","Depois de feita"]]:[],["uma","S\xF3 uma vez"]],s=t.mode!=="edit"||t.kind!=="rotina"?a:t.wasAfter?a.filter(([i])=>i==="depois"):t.rid||t.freq!=="uma"?a.filter(([i])=>i!=="depois"):a;return r`<div class="field">
        <span class="flabel">${e}</span>
        ${(()=>{let i=s.length,n=i<=4?i:i<=6?3:4,l=i%n?n-i%n+1:1;return r`<div class="seg seg-grid" role="radiogroup" aria-label=${e} style="grid-template-columns:repeat(${n},1fr)">${s.map(([c,d],p)=>r`<button class=${t.freq===c?"on":""} role="radio" aria-checked=${t.freq===c?"true":"false"} style=${p===i-1&&l>1?`grid-column:span ${l}`:""} @click=${()=>this._setForm({freq:c})}>${d}</button>`)}</div>`})()}
        ${t.freq==="semana"?r`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(i=>{let n=t.byday.includes(i);return r`<button class="wdp ${n?"on":""}" aria-pressed=${n?"true":"false"} aria-label=${Ee[i]} @click=${()=>this._setForm({byday:n?t.byday.filter(l=>l!==i):[...t.byday,i]})}>${hl[i]}</button>`})}
            </div>`:m}
        ${t.freq==="intervalo"?r`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(t.interval)} @input=${i=>this._setForm({interval:i.target.value})} /><span class="tl">dias</span></div>`:m}
        ${t.freq==="depois"?r`<div class="time-row"><span class="tl">Volta</span><input type="number" class="num-input" min="1" max="365" aria-label="Dias depois de feita" .value=${String(t.afterN)} @input=${i=>this._setForm({afterN:i.target.value})} /><span class="tl">${Number(t.afterN)===1?"dia":"dias"} depois de feita</span></div>
              <span class="field-hint">${S("rotate-ccw")}<span>Feita hoje, volta ${Number(t.afterN)===1?"amanh\xE3":`daqui a ${Math.max(1,Number(t.afterN)||2)} dias`}.</span></span>`:m}
      </div>`}_pointsField(){let e=this._form,t=Number(e.points)||0;return r`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row c4">
          ${[0,5,10,20,30,50].map(a=>r`<button class="pick ${t===a?"on":""}" @click=${()=>this._setForm({points:a})}>${S(a?"trophy":"x")}<span>${a?`+${a}`:"Sem pontos"}</span></button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(t)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${t>0&&!this._scoreOn()?r`<span class="field-hint">${S("trophy")}<span>O placar está desligado (aba <b>Recompensas</b>).</span></span>`:m}
      </div>`}_durField(e){let t=this._form;if(t.freq==="uma")return m;let a=t.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return r`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>r`<button class="pick ${t.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${t.dur==="dias"?r`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(t.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:m}
        ${t.dur==="ate"?r`<date-pick class="dp-until" .value=${t.until||""} kind="nenhum" .min=${t.date} .weekStart=${this._app("week_start",1)} .bid=${"kf-until"} .label=${"At\xE9"} @pick=${s=>s.detail.value&&this._setForm({until:s.detail.value})}></date-pick>`:m}
      </div>`}_calField(){let e=this._form,t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(s=>s.id===e.cal):t.filter(s=>s.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t;return a.length<=1?m:r`<div class="field">
        <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>r`<button class="pick list ${e.cal===s.id?"on":""}" style=${Y(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${I(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let e=this._form;if(e.kind==="tarefa")return this._renderTodoForm();let t=e.kind,a=Pe[t],s=new Date,i=this._ix().gerencia||{},n=t==="conta"&&e.dest==="gerencia"&&e.mode==="add",l={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[t],c=r`<div class="field fold-txt"><span class="flabel">Observações${(e.notes||"").trim()?r`<span class="fl-val">· ${I(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span><textarea rows="2" aria-label="Observações" .value=${e.notes} placeholder=${t==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${p=>this._setForm({notes:p.target.value})}></textarea></div>`,d;if(t==="remedio"){let p=this._phoneOwner(e.who),h=e.mode==="add",u=this._app("alerts",null)||{},f=(u.late==null?30:u.late)>0;d=r`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${e.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${x=>this._setForm({dose:x.target.value})} /></label>
          ${this._whoField("Quem toma",{pets:!0})}
          <div class="field">
            <span class="flabel">${h?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${h?r`<div class="chip-row" style="margin-bottom:10px">${ul.map(([x,w])=>r`<button class="pick ${e.times.join()===w.join()?"on":""}" @click=${()=>this._setForm({times:[...w]})}>${x}</button>`)}</div>`:m}
            <div class="times">
              ${e.times.map((x,w)=>r`<span class="time-pill">${Te(x,b=>this._setForm({times:e.times.map(($,g)=>g===w?b:$)}),{label:`Hor\xE1rio ${w+1}`})}${e.times.length>1?r`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:e.times.filter((b,$)=>$!==w)})}>${S("x")}</button>`:m}</span>`)}
              ${h&&e.times.length<8?r`<button class="pick ghost" @click=${()=>this._setForm({times:[...e.times,"12:00"]})}>${S("plus")}<span>Horário</span></button>`:m}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,x=>this._setForm({date:x}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          ${u.meds===!1?m:r`<div class="row switch-row">
                <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${e.alert?e.who?p||this._careOn()?`Na hora${f?" e de novo se atrasar":""}, no celular de ${p||"quem cuida"}.`:r`Sem celular para ${e.who}: escolha quem cuida em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${e.alert} @change=${x=>this._setForm({alert:x.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
              </div>`}
          ${c}`}else if(t==="conta")d=r`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${e.value} placeholder="0,00" @input=${p=>this._setForm({value:p.target.value})} /></span></label>
          ${this._dateField(e.repeat==="nao"?"Vence":"Primeiro vencimento",e.date,p=>this._setForm({date:p}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row c3">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([p,h])=>r`<button class="pick ${e.repeat===p?"on":""}" @click=${()=>this._setForm({repeat:p})}>${p!=="nao"?S("repeat"):m}<span>${h}</span></button>`)}</div></div>
          ${i.ligado&&e.mode==="add"?r`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${e.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${S("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${e.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${S("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${S("info")}<span>${e.dest==="gerencia"?"Entra no GerencIA; o Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio."}</span></span>
              </div>`:m}
          ${n&&(i.categorias||[]).length?r`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${p=>this._setForm({categoria:p.target.value})}><option value="">Sem categoria</option>${i.categorias.map(p=>r`<option value=${p.id} ?selected=${e.categoria===p.id}>${p.nome}</option>`)}</select></label>`:m}
          ${n?m:r`${this._calField()}${c}`}`;else if(t==="rotina")d=r`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{equips:!1,multiRoom:!0})}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${e.allDay&&!e.period?"on":""}" @click=${()=>this._setForm({allDay:!0,period:""})}>${S("clock")}<span>Qualquer hora</span></button>
              <button class="pick ${e.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1,period:""})}>${S("clock")}<span>Num horário</span></button>
              ${e.allDay?m:Te(e.times[0]||"19:00",p=>this._setForm({times:[p]}),{label:"Hor\xE1rio",cls:"inline-time"})}
            </div>
            <div class="chip-row c3 per-row" role="group" aria-label="Período do dia">
              ${ze.map(p=>r`<button class="pick ${e.allDay&&e.period===p.id?"on":""}" @click=${()=>this._setForm({allDay:!0,period:p.id})}>${S(p.icon)}<span>${p.label}</span></button>`)}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(e.freq==="depois"?e.mode==="add"?"Primeira vez":"Pr\xF3xima vez":e.mode==="add"?"Come\xE7a":"Data",e.date,p=>this._setForm({date:p}),"kf-date")}
          ${e.freq==="depois"?m:this._durField("At\xE9 quando")}
          ${this._calField()}
          ${c}`;else{let p=e.mode==="edit"?F(e.date):ka(F(e.last||P(s)),e.every);d=r`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{multiRoom:!0})}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row c4" style="margin-bottom:10px">${ml.map(h=>r`<button class="pick ${e.every.n===h.n&&e.every.unit===h.unit?"on":""}" @click=${()=>this._setForm({every:{...h}})}>${S("repeat")}<span>${ge(h)}</span></button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(e.every.n)} @input=${h=>this._setForm({every:{...e.every,n:Math.max(1,Number(h.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(ft).map(h=>r`<button class=${e.every.unit===h?"on":""} @click=${()=>this._setForm({every:{...e.every,unit:h}})}>${h}</button>`)}</div>
            </div>
            <span class="field-hint">${S("repeat")}<span>Feito hoje, volta em ${ge(e.every)}.</span></span>
          </div>
          ${e.mode==="add"?this._dateField("Feito pela \xFAltima vez",e.last,h=>this._setForm({last:h}),"kf-last",{kind:"passado"}):this._dateField("Pr\xF3xima vez",e.date,h=>this._setForm({date:h}),"kf-date")}
          <p class="next-line">${S("calendar-check")}<span>Próxima: <b>${ne(oe(p,s,{long:!1}))}</b>${Z(p,s)>1?` \xB7 em ${N(Z(p,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1,3,7,15,30].map(h=>r`<button class=${e.warn===h?"on":""} role="radio" aria-checked=${e.warn===h?"true":"false"} @click=${()=>this._setForm({warn:h})}>${h===1?"1 dia":`${h} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${c}`}return r`
        ${this._sheetHead(e.mode==="add"?"Adicionar":`Editar ${a.label.toLowerCase()}`)}
        ${e.mode==="add"?this._renderModelChips(t):m}
        <label class="field">
          <span class="flabel">${l[0]}</span>
          <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder=${l[1]} @input=${p=>this._setForm({title:p.target.value})}></textarea>
        </label>
        ${d}
        ${e.rid?r`<div class="field-hint">${S("repeat")}<span>Este item se repete.</span></div>`:m}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${S("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveKindForm()}>${S(e.mode==="add"?"plus":"check")}${e.saving?"Salvando\u2026":e.mode==="add"?n?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let e=this._ix(),t=this._app("alerts",null)||{},a=t.meds!==!1,s=t.late==null?30:t.late,i=t.caregivers||[],n=e.people||[],l=n.filter(v=>v.phone),c=this._app("people",null)||{},d=v=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...v}}),p=(v,_)=>{let M={...c[v]||{}};return _?M.care=_:delete M.care,this._saveAppPrefs({people:{...c,[v]:M}})},h=(v,_)=>{let M={...c[v]||{}};_?M.pet=!0:delete M.pet;let E=this._score&&this._score();return _&&E&&(E.participants||[]).some(L=>T(L)===T(v))&&this._scorePrefs({participants:E.participants.filter(L=>T(L)!==T(v))}),this._saveAppPrefs({people:{...c,[v]:M}})},u=this._writable?this._writable():[],f=(v,_)=>{let M={...c[v]||{}};return M.cal=_===""?!1:_,this._saveAppPrefs({people:{...c,[v]:M}})},x=v=>{let _=Aa(v.name,c,u.map(E=>({id:E.id,name:E.name}))),M=_?_.id:"";return r`<select class="select sm p-cal" aria-label="Calendário de ${v.name}" @change=${E=>f(v.name,E.target.value)}>
          <option value="" ?selected=${!M}>Sem calendário</option>
          ${u.map(E=>r`<option value=${E.id} ?selected=${M===E.id}>Calendário: ${E.name}</option>`)}
        </select>`},w=v=>{let _={...c};delete _[v],this._saveAppPrefs({people:Object.keys(_).length?_:null})},b=this._newPerson,$=()=>{let v=(b.name||"").trim().replace(/\s+/g," ").slice(0,40);if(v){if(n.some(_=>T(_.name)===T(v))){this._showToast(`${v} j\xE1 est\xE1 na lista`);return}this._newPerson=null,this._saveAppPrefs({people:{...c,[v]:b.pet?{pet:!0}:{}}})}},g=v=>{let _=l.filter(E=>T(E.name)!==T(v.name)),M=v.care&&!_.some(E=>T(E.name)===T(v.care));return r`<select class="select sm" aria-label="Quem recebe os avisos de ${v.name}" @change=${E=>p(v.name,E.target.value)}>
          <option value="" ?selected=${!v.care}>No celular de quem cuida</option>
          ${_.map(E=>r`<option value=${E.name} ?selected=${!!v.care&&T(v.care)===T(E.name)}>No celular de ${E.name}</option>`)}
          ${M?r`<option value=${v.care} selected>${v.care} (sem celular)</option>`:m}
        </select>`},A=v=>v.person?a&&!v.phone?"Pessoa do Home Assistant, sem celular":"Pessoa do Home Assistant":v.pet?"Pet":"S\xF3 no CronologIA",y=this._me?this._me():"",O=n.find(v=>y&&T(v.name)===T(y)),C=r`<button class="btn outline aviso-test" ?disabled=${!(O&&O.phone)} title=${O&&O.phone?"":"Sem celular ligado a voc\xEA no Home Assistant"} @click=${()=>this._testAlert(O.name,!0)}>${S("send")}Testar no meu celular</button>`;return r`<div class="panel" id="avisos">
        ${this._secHead("bell-ring","Avisos de rem\xE9dio no celular",r`Na hora da dose, com <b>Tomei</b> e <b>Adiar 15 min</b>.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Dá para desligar em cada remédio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${v=>d({meds:v.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?r`<div class="sub-op"><div class="sub-box"><div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([v,_])=>r`<button class="pick ${s===v?"on":""}" @click=${()=>d({late:v})}>${S(v?"hourglass":"x")}<span>${_}</span></button>`)}</div>
              </div>
              ${l.length?r`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row care-pick">${l.map(v=>{let _=i.some(M=>T(M)===T(v.name));return r`<button class="pick quem-p ${_?"on":""}" aria-pressed=${_?"true":"false"} @click=${()=>d({caregivers:_?i.filter(M=>T(M)!==T(v.name)):[...i,v.name]})}>${S("user-round")}<b>${v.name}</b></button>`})}</div>
                    <span class="field-hint">${S("info")}<span>${s>0?"Recebe os atrasos de todos.":"Recebe os avisos de quem est\xE1 sem celular."}</span></span>
                  </div>`:m}
              ${C}</div></div>`:m}
        <div class="field people-field">
          <span class="flabel">Pessoas e pets</span>
          ${n.length?n.map(v=>{let _=!v.person&&!!c[v.name];return r`<div class="person-row ${v.pet?"is-pet":""}">
                  <span class="avatar">${v.pet?S("paw-print"):Lt(v.name)}</span>
                  <span class="grow"><b>${v.name}</b><small>${A(v)}</small></span>
                  ${a&&!v.phone&&l.length?g(v):m}
                  ${!v.pet&&u.length?x(v):m}
                  <span class="p-acts">
                    ${v.person?m:r`<button class="icon-btn pet-btn ${v.pet?"on":""}" aria-pressed=${v.pet?"true":"false"} aria-label="${v.name} é um pet" title=${v.pet?"Pet":"Marcar como pet"} @click=${()=>h(v.name,!v.pet)}>${S("paw-print")}</button>`}
                    ${a&&v.reach?r`<button class="icon-btn" aria-label="Testar aviso para ${v.name}" @click=${()=>this._testAlert(v.name)}>${S("bell-ring")}</button>`:m}
                    ${_?r`<button class="icon-btn mini" aria-label="Tirar ${v.name}" @click=${()=>w(v.name)}>${S("x")}</button>`:m}
                  </span>
                </div>`}):r`<p class="hint">As pessoas do Home Assistant aparecem aqui.</p>`}
          ${b?r`<div class="person-add">
                <input type="text" class="input" .value=${b.name||""} placeholder="Nome (pessoa ou pet)" aria-label="Nome da pessoa ou pet" maxlength="40"
                  @input=${v=>(this._newPerson={...this._newPerson,name:v.target.value},this.requestUpdate())}
                  @keydown=${v=>v.key==="Enter"&&$()} />
                <div class="seg" role="group" aria-label="Pessoa ou pet">
                  <button class=${b.pet?"":"on"} @click=${()=>(this._newPerson={...this._newPerson,pet:!1},this.requestUpdate())}>${S("user-round")}Pessoa</button>
                  <button class=${b.pet?"on":""} @click=${()=>(this._newPerson={...this._newPerson,pet:!0},this.requestUpdate())}>${S("paw-print")}Pet</button>
                </div>
                <div class="person-add-acts">
                  <button class="btn outline sm" @click=${()=>(this._newPerson=null,this.requestUpdate())}>${S("x")}Cancelar</button>
                  <button class="btn primary sm" ?disabled=${!(b.name||"").trim()} @click=${$}>${S("plus")}Adicionar</button>
                </div>
              </div>`:r`<button class="add-line" @click=${()=>{this._newPerson={name:"",pet:!1},this.requestUpdate(),this.updateComplete.then(()=>{let v=this.renderRoot.querySelector(".person-add input");v&&v.focus()})}}>${S("plus")}Adicionar pessoa ou pet</button>`}
          ${a?r`<span class="field-hint">${S("info")}<span>${l.length?"Vai para o celular ligado a cada pessoa no Home Assistant. Sem celular (pet ou crian\xE7a): para quem voc\xEA escolher.":"Ningu\xE9m tem celular ligado no Home Assistant (Configura\xE7\xF5es \u203A Pessoas)."}</span></span>`:m}
        </div>

      </div>`}_renderCorreriaPanel(){let e=this._app("correria_on",!1)===!0,t=e?(this._ix().correria||{}).ultimo:null,a="";if(t&&Number.isFinite(Date.parse(t.em))){let s=new Date(t.em),i=Z(new Date(this._now||Date.now()),s);a=`${t.cliente} usou ${i===0?"hoje":i===1?"ontem":`em ${le(s,new Date(this._now||Date.now()))}`} \xE0s ${j(s)}.`}return r`<div class="panel" id="correria">
        ${this._secHead("zap","CorrerIA","O CorrerIA junta os apps da casa no WhatsApp, no Claude e no Gemini.")}
        <div class="row switch-row integ-switch">
          <div class="grow"><div class="label">Usar com o CorrerIA</div><div class="hint" style="white-space:normal">${e?"Ligado: pelo WhatsApp, o Claude e o Gemini leem e mudam a agenda.":"Desligado."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${s=>this._saveAppPrefs({correria_on:s.target.checked?!0:null})} aria-label="Usar com o CorrerIA" /><span class="track"></span></label>
        </div>
        ${e?r`<div class="sub-op"><div class="sub-box"><div class="ai-state ${a?"ok":"off"}"><span class="dot"></span><div>${a?r`<b>${a}</b>`:r`<b>Nenhum uso ainda</b><span>Conecte no app CorrerIA.</span>`}</div></div></div></div>`:m}
      </div>`}_renderGerenciaPanel(){let e=this._app("gerencia_on",!1)===!0,t=r`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${n=>this._saveAppPrefs({gerencia_on:n.target.checked?!0:null})} aria-label="Usar a integração com o GerencIA" /><span class="track"></span></label>
      </div>`;if(!e)return r`<div class="panel" id="gerencia">
          ${this._secHead("wallet","Contas do GerencIA")}
          ${t}
        </div>`;let a=this._ix().gerencia||{},s=(a.contas||[]).filter(n=>!n.pago).length,i=a.ligado?a.erro?"warn":"ok":"off";return r`<div class="panel" id="gerencia">
        ${this._secHead("wallet","Contas do GerencIA")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="ai-state ${i}"><span class="dot"></span><div>
          <b>${a.ligado?a.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${a.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${a.ligado?a.erro||`${N(s,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${a.ligado?r`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do vencimento.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${n=>this._saveAppPrefs({gerencia_hidden:n.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:m}
        </div></div>
      </div>`}};var Me={quick:!1,editing:null,menu:!1},en=()=>Object.assign(Me,{quick:!1,editing:null,menu:!1}),Go=()=>typeof matchMedia=="function"&&matchMedia("(hover: none) and (pointer: coarse)").matches,Zo=4;async function Ta(o,e=[]){let t=e.slice(),a=i=>new Promise((n,l)=>{let c=new FileReader;c.onload=()=>n(String(c.result).split(",")[1]||""),c.onerror=()=>l(c.error),c.readAsDataURL(i)}),s=[];for(let i of Array.from(o||[])){if(i.type==="application/pdf"||/\.pdf$/i.test(i.name||"")){if(i.size>15*1024*1024){s.push("Arquivo grande demais (at\xE9 15 MB).");continue}t=[{nome:i.name||"arquivo.pdf",pdf:!0,mime:"application/pdf",data:await a(i),url:""}];continue}if(i.type&&!/^image\//.test(i.type)){s.push("Escolha uma foto ou um PDF.");continue}if(t.length>=Zo||t.some(l=>l.pdf))if(t.some(l=>l.pdf))t=[];else{s.push(`At\xE9 ${Zo} arquivos por mensagem.`);break}try{let l=await createImageBitmap(i,{imageOrientation:"from-image"}),c=Math.min(1,1600/Math.max(l.width,l.height)),d=document.createElement("canvas");d.width=Math.max(1,Math.round(l.width*c)),d.height=Math.max(1,Math.round(l.height*c));let p=d.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,d.width,d.height),p.drawImage(l,0,0,d.width,d.height),l.close&&l.close();let h=await new Promise(u=>d.toBlob(u,"image/jpeg",.86));t.push({nome:i.name||`Foto ${t.length+1}.jpg`,pdf:!1,mime:"image/jpeg",data:await a(h),url:URL.createObjectURL(h)})}catch{s.push("N\xE3o deu para abrir esta foto. Use JPG ou PNG.")}}return{files:t,error:s[0]||""}}function $l(o,e=[]){try{let t=JSON.parse(localStorage.getItem(`${o}-perguntas`)||"null");if(Array.isArray(t))return t.filter(a=>typeof a=="string"&&a.trim())}catch{}return e}function Xo(o,e){try{e==null?localStorage.removeItem(`${o}-perguntas`):localStorage.setItem(`${o}-perguntas`,JSON.stringify(e))}catch{}}function tn(o){try{let e=JSON.parse(localStorage.getItem(`${o}-perguntas-fechadas`)||"[]");return new Set(Array.isArray(e)?e:[])}catch{return new Set}}function _l(o,e){let t=tn(o);t.has(e)?t.delete(e):t.add(e);try{localStorage.setItem(`${o}-perguntas-fechadas`,JSON.stringify([...t]))}catch{}}function an({lit:o,icon:e,app:t="",messages:a=[],draft:s="",busy:i=!1,error:n="",voice:l=null,examples:c=[],models:d=[],files:p=[],onDraft:h,onSend:u,onMic:f,onMicCancel:x,onAction:w,onAll:b,onClear:$,onClose:g,onAttach:A=null,onFileRemove:y=()=>{},onRedraw:O=()=>{}}){let{html:C,nothing:v}=o,_=()=>{let H=(s||"").trim();(H||p.length)&&!i&&u(H)},M=t?$l(t,c):c,E=H=>(Object.assign(Me,H),O()),L=H=>{E({quick:!1}),u(H)},V=()=>{let H=Me.editing;if(H){let ve=W=>{let z=(H.draft||"").trim(),se=W&&W.closest(".chat-ed-new")&&W.closest(".chat-ed-new").querySelector("input");se&&(se.value=""),z&&E({editing:{list:[...H.list,z],draft:""}})},re=tn(t),ke=(W,z,se,D="")=>C`<button type="button" class="chat-ed-h chat-ed-dobra ${D}" data-dobra=${W} aria-expanded=${re.has(W)?"false":"true"} @click=${()=>(_l(t,W),E({}))}>${e(z)}<span>${se}</span><span class="chat-ed-seta">${e("chevron-down")}</span></button>`;return C`<div class="chat-ed">
        ${ke("prontas","pencil",`Perguntas prontas (${H.list.length})`)}
        ${re.has("prontas")?v:C`${H.list.map((W,z)=>C`<div class="chat-ed-row">
            <textarea class="chat-ed-txt" rows=${Math.min(4,Math.max(1,Math.ceil(W.length/32)))} maxlength="120" data-size="off" enterkeyhint="done" aria-label=${`Mudar \u201C${W}\u201D`} .value=${W}
              @input=${se=>H.list[z]=se.target.value} @keydown=${se=>{se.key==="Enter"&&(se.preventDefault(),se.target.blur())}}></textarea>
            <button type="button" class="icon-btn" aria-label=${`Tirar \u201C${W}\u201D`} @click=${()=>E({editing:{...H,list:H.list.filter((se,D)=>D!==z)}})}>${e("x")}</button></div>`)}
        <div class="chat-ed-new">
          <input type="text" maxlength="120" .value=${H.draft||""} placeholder="Nova pergunta" aria-label="Nova pergunta" enterkeyhint="done"
            @input=${W=>H.draft=W.target.value} @keydown=${W=>{W.key==="Enter"&&(W.preventDefault(),ve(W.target))}} />
          <button type="button" class="btn outline sm" @click=${W=>ve(W.currentTarget)}>${e("plus")}Adicionar</button>
        </div>`}
        ${(W=>W.length?C`${ke("mais","sparkles",`Mais perguntas (${W.length})`,"chat-ed-mais")}
          ${re.has("mais")?v:W.map(z=>C`<button type="button" class="chat-ed-row chat-ed-modelo" aria-label=${`P\xF4r \u201C${z}\u201D`} @click=${()=>E({editing:{...H,list:[...H.list,z]}})}><span>${z}</span><span class="chat-ed-mais-ic">${e("plus")}</span></button>`)}`:v)(d.filter((W,z)=>d.indexOf(W)===z&&!H.list.includes(W)))}
        <div class="chat-ed-acts">
          <button type="button" class="btn outline sm" @click=${()=>(Xo(t,null),E({editing:{list:c.slice(),draft:""}}))}>${e("rotate-ccw")}Padrão</button>
          <button type="button" class="btn primary sm" @click=${()=>{let W=H.list.map(z=>String(z||"").trim()).filter(Boolean).concat((H.draft||"").trim()?[(H.draft||"").trim()]:[]);Xo(t,W.join(`
`)===c.join(`
`)?null:W),E({editing:null})}}>${e("check")}Pronto</button>
        </div>
      </div>`}return C`<div class="chat-ex">${M.map(ve=>C`<button type="button" class="pick" @click=${()=>L(ve)}>${e("sparkles")}<span>${ve}</span></button>`)}</div>
      ${t?C`<button type="button" class="text-btn chat-ed-open" @click=${()=>E({editing:{list:M.slice(),draft:""}})}>${e("pencil")}Editar perguntas</button>`:v}`},de=(H,ve,re,ke)=>C`<div class="chat-act ${re.state||"todo"}">
    <span class="chat-act-ic">${e(re.state==="done"?"check":re.state==="failed"?"circle-alert":re.icon||"sparkles")}</span>
    <span class="chat-act-tx">${re.label}${re.note?C`<small>${re.note}</small>`:v}</span>
    ${re.state==="done"?C`<span class="chat-act-ok">Feito</span>`:re.state==="doing"?C`<span class="chat-act-ok">…</span>`:C`<button type="button" class="btn primary sm" @click=${()=>w(ve,ke)}>${e(re.state==="failed"?"rotate-ccw":"check")}${re.state==="failed"?"Tentar de novo":"Fazer"}</button>`}
  </div>`,$e=(H,ve)=>{let re=(H.actions||[]).filter(W=>W.state!=="done"&&W.state!=="doing").length,ke=H.role==="user"&&Array.isArray(H.anexos)?H.anexos:[];return C`<div class="chat-msg ${H.role==="user"?"me":"ia"}">
      ${H.text||ke.length?C`<div class="chat-bubble">${ke.map(W=>C`<span class="chat-arq">${e("paperclip")}${W}</span>`)}${H.text||""}</div>`:v}
      ${(H.actions||[]).length?C`<div class="chat-acts">
            ${H.actions.map((W,z)=>de(H,ve,W,z))}
            ${re>1?C`<button type="button" class="btn outline sm chat-all" @click=${()=>b(ve)}>${e("check")}Fazer todas (${re})</button>`:v}
          </div>`:v}
    </div>`},ee=l&&l.on,Q=!!A&&!ee,X=Q&&Me.menu,xe=H=>(E({menu:!1}),A(H)),Ne=!!(l&&l.ready)&&(ee||!(s||"").trim()&&!p.length);return C`<div class="chat">
    <div class="chat-head">
      <span class="chat-title">${e("message-circle")}Conversa</span>
      ${a.length?C`<button type="button" class="text-btn chat-nova" aria-label="Nova conversa" @click=${()=>$()}>${e("plus")}<span>Nova conversa</span></button>`:v}
      <button type="button" class="icon-btn" aria-label="Fechar" @click=${()=>g()}>${e("x")}</button>
    </div>
    <div class="chat-log">
      ${a.length?a.map($e):M.length||t?C`<div class="chat-empty">${V()}</div>`:v}
      ${i?C`<div class="chat-msg ia"><div class="chat-bubble typing"><i></i><i></i><i></i></div></div>`:v}
      ${n?C`<div class="chat-error">${e("circle-alert")}<span>${n}</span></div>`:v}
    </div>
    ${a.length&&(Me.quick||Me.editing)?C`<div class="chat-quick">${V()}</div>`:v}
    ${X?C`<div class="chat-menu" role="menu">
          <button type="button" class="chat-op" role="menuitem" @click=${()=>xe("camera")}>${e("camera")}Tirar foto</button>
          <button type="button" class="chat-op" role="menuitem" @click=${()=>xe("fotos")}>${e("images")}Escolher fotos</button>
          <button type="button" class="chat-op" role="menuitem" @click=${()=>xe("arquivo")}>${e("file-text")}Escolher arquivo</button>
        </div>`:v}
    ${p.length?C`<div class="chat-files">${p.map((H,ve)=>C`<div class="chat-file">${H.pdf?C`<span class="chat-pdf">${e("file-text")}</span>`:C`<img src=${H.url} alt="" />`}<span class="chat-file-n">${H.nome}</span><button type="button" class="icon-btn" aria-label=${`Tirar ${H.nome}`} @click=${()=>y(ve)}>${e("x")}</button></div>`)}</div>`:v}
    <form class="chat-input" @submit=${H=>(H.preventDefault(),_())}>
      ${Q?C`<button type="button" class="icon-btn chat-clip ${X?"on":""}" aria-label="Anexar" title="Anexar" aria-expanded=${X?"true":"false"} ?disabled=${i} @click=${()=>E({menu:!Me.menu,quick:!1,editing:null})}>${e("paperclip")}</button>`:v}
      ${ee&&x?C`<button type="button" class="icon-btn chat-cancel" aria-label="Cancelar: não enviar o que falei" title="Cancelar" @click=${()=>x()}>${e("x")}</button>`:v}
      <textarea rows="1" data-size="off" .value=${s} placeholder=${ee?"Ouvindo\u2026":"Pergunte o que quiser"} aria-label="Mensagem para a IA" ?disabled=${ee}
        enterkeyhint=${Go()?"enter":"send"}
        @input=${H=>h(H.target.value)}
        @keydown=${H=>{H.key==="Enter"&&!H.shiftKey&&!H.isComposing&&!Go()&&(H.preventDefault(),_())}}></textarea>
      ${a.length&&(M.length||t)&&!ee?C`<button type="button" class="icon-btn chat-qbtn ${Me.quick||Me.editing?"on":""}" aria-label="Perguntas prontas" aria-expanded=${Me.quick||Me.editing?"true":"false"} title="Perguntas prontas" @click=${()=>E({quick:!(Me.quick||Me.editing),editing:null,menu:!1})}>${e("sparkles")}</button>`:v}
      ${Ne?C`<button type="button" class="icon-btn chat-mic ${ee?"on":""}" aria-label=${ee?"Pronto: enviar o que falei":"Falar"} ?disabled=${i||l.starting} @click=${()=>f()}>${e(ee?"check":"mic")}</button>`:C`<button type="submit" class="icon-btn chat-send" aria-label="Enviar" ?disabled=${i||ee||!((s||"").trim()||p.length)}>${e("send")}</button>`}
    </form>
  </div>`}var sn=`
  .chat { display: flex; flex-direction: column; height: min(78vh, 680px); margin: -4px -4px 0; }
  .chat-head { display: flex; align-items: center; gap: 10px; padding: 0 0 10px; }
  .chat-title { display: inline-flex; align-items: center; gap: 8px; flex: 1; font-weight: 700; font-size: 18px; }
  .chat-title .i { width: 30px; height: 30px; padding: 6px; border-radius: 9px; background: var(--rv-accent-soft); color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-head .text-btn { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  @media (max-width: 340px) { .chat-nova span { display: none; } }
  .chat-head .text-btn .i { width: 16px; height: 16px; }
  .chat-log { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 6px 2px 12px; overscroll-behavior: contain; }
  /* as perguntas prontas no meio da largura, uma por linha, como no CorrerIA (igual em todos os apps) */
  .chat-empty { margin: auto 0 0; color: var(--rv-muted); font-size: 15px; line-height: 1.45; text-align: center; }
  .chat-empty p { margin: 0 0 12px; }
  .chat-ex { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .chat-ex .pick { font-size: 14px; padding: 8px 12px; min-height: 0; max-width: 100%; display: inline-flex; align-items: center; gap: 6px; text-align: left; }
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
  .chat-quick { max-height: 42vh; overflow-y: auto; padding: 10px 2px; border-top: 1px solid var(--rv-line); text-align: center; }
  .chat-ed-open { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; }
  .chat-ed-open .i { width: 16px; height: 16px; }
  .chat-ed { display: grid; gap: 8px; color: var(--rv-text); text-align: left; }
  .chat-ed-h { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 15px; }
  .chat-ed-h .i { width: 18px; height: 18px; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-ed-dobra { display: flex; width: 100%; min-height: 40px; padding: 0; border: 0; background: none; color: inherit; font: inherit; font-weight: 700; font-size: 15px; text-align: left; cursor: pointer; -webkit-tap-highlight-color: transparent; }
  .chat-ed-dobra > span:not(.chat-ed-seta) { flex: 1; min-width: 0; }
  .chat-ed-seta { flex: none; display: grid; place-items: center; transition: transform 0.2s; }
  .chat-ed-dobra .chat-ed-seta .i { width: 20px; height: 20px; color: var(--rv-muted); }
  .chat-ed-dobra[aria-expanded="false"] .chat-ed-seta { transform: rotate(-90deg); }
  .chat-ed-dobra:focus-visible { outline: 2px solid var(--rv-accent); outline-offset: 4px; border-radius: 12px; }
  .chat-ed-row { display: flex; align-items: center; gap: 8px; padding: 4px 0 4px 12px; border-radius: 12px; border: 1.5px solid var(--rv-line); font-size: 14.5px; }
  .chat-ed-row span { flex: 1; min-width: 0; overflow-wrap: anywhere; }
  .chat-ed-txt { flex: 1; min-width: 0; min-height: 24px; padding: 6px 0; border: 0; background: none; color: inherit; font: inherit; font-size: 14.5px; line-height: 1.35; resize: none; field-sizing: content; overflow-wrap: anywhere; }
  .chat-ed-txt:focus { outline: none; }
  .chat-ed-row:has(.chat-ed-txt:focus) { border-color: var(--rv-accent); }
  .chat-ed-row .icon-btn { width: 40px; height: 40px; flex: none; }
  .chat-ed-new { display: flex; gap: 8px; }
  .chat-ed-mais { margin-top: 6px; }
  .chat-ed-modelo { width: 100%; background: none; color: inherit; font: inherit; font-size: 14.5px; text-align: left; cursor: pointer; border-style: dashed; padding-right: 0; }
  .chat-ed-mais-ic { width: 40px; height: 40px; flex: none !important; display: grid; place-items: center; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-ed-mais-ic .i { width: 20px; height: 20px; }
  .chat-ed-new input { flex: 1; min-width: 0; min-height: 44px; padding: 0 12px; border-radius: 12px; border: 1.5px solid var(--rv-line-strong, var(--rv-line)); background: var(--rv-input-bg, transparent); color: var(--rv-text); font: inherit; font-size: 15px; }
  .chat-ed-new input:focus { outline: none; border-color: var(--rv-accent); }
  .chat-ed-acts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .chat-ed .btn.sm { min-height: 44px; justify-content: center; gap: 6px; }
  .chat-ed .btn.sm .i { width: 16px; height: 16px; }
`;var Oa=[["calendarios","/mais/calendarios","Calend\xE1rios","layers","Nome, cor e quais aparecem na agenda."],["rotinas","/mais/rotinas","Rotinas","repeat","Rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados."],["recompensas","/mais/recompensas","Recompensas","trophy","Placar, pr\xEAmio, dem\xE9ritos e lembrete."],["avisos","/mais/avisos","Avisos","bell-ring","Avisos de rem\xE9dio no celular, pessoas e pets."],["ferias","/mais/ferias","F\xE9rias","plane","Rotinas, tarefas e manuten\xE7\xE3o pausadas; rem\xE9dios continuam."],["config","/config","Configura\xE7\xF5es","sliders-horizontal","Integra\xE7\xF5es, dados, apar\xEAncia e op\xE7\xF5es."],["sobre","/mais/sobre","Sobre","info","CorrerIA Code, os apps e o GitHub."]],Vt=[["integracoes","Integra\xE7\xF5es","blocks"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"],["opcoes","Op\xE7\xF5es","toggle-right"]],yl=Oa.filter(([o])=>o!=="config").map(([o])=>o),za=Vt.map(([o])=>o);function qa(o){let e=(o||"").replace(/\/+$/,"");if(e==="/calendario")return{name:"calendar"};if(e==="/recompensas")return{name:"rewards"};if(e==="/rotinas")return{name:"routines"};if(e==="/agendas")return{name:"more",tab:"calendarios"};if(e==="/config")return{name:"more",tab:za[0],config:!0};let t=/^\/(mais|config)\/([a-z]+)$/.exec(e);return t&&t[2]==="placar"?{name:"more",tab:"recompensas"}:t&&za.includes(t[2])?{name:"more",tab:t[2],config:!0}:t&&t[1]==="config"?{name:"more",tab:za[0],config:!0}:t&&yl.includes(t[2])?{name:"more",tab:t[2]}:e==="/mais"||t&&t[1]==="mais"?{name:"more",tab:"menu"}:{name:"now"}}function Ms(o){return o.name==="calendar"?"/calendario":o.name==="rewards"?"/recompensas":o.name==="routines"?"/rotinas":o.name!=="more"?"":o.config?o.tab===za[0]?"/config":`/config/${o.tab}`:o.tab==="menu"?"/mais":`/mais/${o.tab}`}var Fa=o=>Ms(qa(o)),Pa=o=>o.name==="more"&&o.tab!=="menu";function Ss(o){if(o.config)return"Configura\xE7\xF5es";let e=Oa.find(([t])=>t===o.tab);return e?e[2]:"Mais"}function on(o){return o.tab==="menu"?"Mais (o menu)":o.config?`Mais \u203A Configura\xE7\xF5es \u203A ${Vt.find(([e])=>e===o.tab)[1]}`:`Mais \u203A ${Ss(o)}`}var Ds="";function nn(){let o=Ds;return Ds="",o}function rn(o=typeof window>"u"?null:window){let e={recompensas:"/recompensas",calendario:"/calendario",agora:"/",rotinas:"/mais/rotinas"},t=a=>{let s=new URL(a.location.href),i=e[s.searchParams.get("aba")];return i?(Ds=i==="/mais/rotinas"?String(s.searchParams.get("comodo")||"").trim().slice(0,80):"",s.searchParams.delete("aba"),s.searchParams.delete("comodo"),a.history.replaceState(a.history.state,"",s.href),i):null};if(!o)return null;try{let a=t(o);if(a)return a;if(o.parent&&o.parent!==o)return t(o.parent)}catch{}return null}function ln(o,e=typeof window>"u"?null:window){if(!e||!e.parent||e.parent===e)return()=>{};let t=null,a=s=>{if(s.source!==e.parent||!s.data||s.data.type!=="home-assistant/properties")return;let i=String(s.data.route&&s.data.route.path||"").replace(/\/+$/,"");i!==t&&(t=i,i&&o(i))};e.addEventListener("message",a);try{e.parent.postMessage({type:"home-assistant/subscribe-properties"},"*")}catch{}return()=>e.removeEventListener("message",a)}function cn(o){let e=/^\/mais\/rotinas(?:\/comodo\/(.+))?$/.exec(o||"");if(e){let t=e[1]||"";try{t=decodeURIComponent(t)}catch{}return{path:"/mais/rotinas",room:t.trim().slice(0,80)}}return["/calendario","/recompensas"].includes(o)?{path:o,room:""}:null}var dn=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,pn="cronologia-conversa",hn=o=>`${o.slice(8,10)}/${o.slice(5,7)}`,kl=o=>{let[e,t]=o.split(":").map(Number),a=Math.min(1439,e*60+t+60);return`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`},un=o=>class extends o{_chatState(){if(!this._chat){let e=[];try{e=JSON.parse(sessionStorage.getItem(pn)||"[]")}catch{}this._chat={messages:Array.isArray(e)?e:[],draft:"",busy:!1,error:"",rec:null,files:[]}}return this._chat}_setChat(e){if(this._chat={...this._chatState(),...e},"messages"in e)try{sessionStorage.setItem(pn,JSON.stringify(this._chat.messages.slice(-30)))}catch{}this.requestUpdate()}_renderChatBtn(){return!this._aiOn()||!(this._ai&&this._ai.ready)?m:r`<button class="mic-top chat-top" aria-label="Conversar com a IA" title="Conversar com a IA" @click=${()=>this._openChat()}>${dn("message-circle")}</button>`}_openChat(){en(),this._openSheet("chat",{}),this._chatScroll=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".chat-input textarea");e&&window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&e.focus()})}_renderChatSheet(){let e=this._chatState(),t=this._voice||{};return an({lit:{html:r,nothing:m},icon:dn,app:"cronologia",onRedraw:()=>this.requestUpdate(),messages:e.messages,draft:e.draft,busy:e.busy,error:e.error,voice:{ready:!!t.ready&&!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),on:e.rec==="on",starting:e.rec==="starting"},examples:this._chatExamples(),models:this._chatModels(),onDraft:a=>this._setChat({draft:a}),onSend:a=>this._chatSend(a),onMic:()=>this._chatMic(),onMicCancel:()=>this._chatMicCancel(),onAction:(a,s)=>this._chatDo(a,s),onAll:a=>this._chatDoAll(a),onClear:()=>this._setChat({messages:[],error:""}),onClose:()=>this._closeSheet(),files:e.files||[],onAttach:a=>this._chatAttach(a),onFileRemove:a=>this._setChat({files:(e.files||[]).filter((s,i)=>i!==a)})})}_chatAttach(e){if(e==="camera")return this._openCamera({chat:!0});let t=document.createElement("input");t.type="file",t.accept=e==="fotos"?"image/*":"image/*,application/pdf",t.multiple=e==="fotos"&&!this._isHaAndroid(),t.style.display="none",t.addEventListener("change",()=>{let a=Array.from(t.files||[]);t.remove(),a.length&&this._chatAddFiles(a)}),document.body.appendChild(t),t.click()}async _chatAddFiles(e){let{files:t,error:a}=await Ta(e,this._chatState().files||[]);this._setChat({files:t,error:a}),this._chatScroll=!0}_chatAddShots(e){let t=(this._chatState().files||[]).filter(s=>!s.pdf),a=[...t,...e.map((s,i)=>({nome:`Foto ${t.length+i+1}.jpg`,pdf:!1,mime:s.mime||"image/jpeg",data:s.data,url:s.url}))].slice(0,4);this._setChat({files:a,error:""}),this._sheet!=="chat"&&this._openChat()}_chatPool(){let e=!!(this._scoreOn&&this._scoreOn()),t=!!(this._resolviaOn&&this._resolviaOn()),a=(s,i=!0)=>i?[s]:[];return[...a("O que tenho hoje?"),...a("O que tenho amanh\xE3?"),...a("Quais rem\xE9dios faltam hoje?"),...a("Quais rotinas est\xE3o atrasadas?"),...a("Tem conta para pagar esta semana?"),...a("Estou livre amanh\xE3 \xE0 tarde?"),...a("O que tenho esta semana?"),...a("Resume o meu dia"),...a("Quando \xE9 o meu pr\xF3ximo compromisso?"),...a("Quais compromissos tenho no fim de semana?"),...a("O que tenho na pr\xF3xima semana?"),...a("Quem est\xE1 ganhando o placar?",e),...a("Quantos pontos eu tenho?",e),...a("O que ainda d\xE1 pontos hoje?",e),...a("Qual \xE9 o pr\xEAmio deste per\xEDodo?",e),...a("Qual \xE9 a pr\xF3xima manuten\xE7\xE3o da casa?"),...a("Tem manuten\xE7\xE3o vencida?"),...a("Quais rem\xE9dios eu tomo de manh\xE3?"),...a("J\xE1 tomei todos os rem\xE9dios de hoje?"),...a("Quais contas vencem este m\xEAs?"),...a("Tem alguma conta atrasada?"),...a("Quais rotinas s\xE3o minhas hoje?"),...a("Quem faz o qu\xEA hoje em casa?"),...a("Quais tarefas do ResolvIA vencem hoje?",t),...a("O que ficou para amanh\xE3?"),...a("Quais compromissos se repetem toda semana?"),...a("Qual \xE9 o pr\xF3ximo rem\xE9dio?"),...a("Qual dia da semana est\xE1 mais cheio?"),...a("Quais compromissos tenho este m\xEAs?"),...a("Quais rotinas da manh\xE3 ainda faltam?"),...a("Quais compromissos s\xE3o da casa toda?")]}_chatExamples(){let e=this._shownView?this._shownView():this._view(),t=e.name==="calendar"?["O que tenho esta semana?","Estou livre amanh\xE3 \xE0 tarde?"]:e.name==="rewards"&&this._scoreOn&&this._scoreOn()?["Quem est\xE1 ganhando o placar?","O que ainda d\xE1 pontos hoje?"]:[];return[...new Set([...t,...this._chatPool()])].slice(0,6)}_chatModels(){let e=this._chatExamples();return this._chatPool().filter(t=>!e.includes(t)).slice(0,20)}_chatScreen(){let e=this._shownView?this._shownView():this._view();if(e.name==="calendar"){let t=this._cursor?P(this._cursor):"";return`Calend\xE1rio${t?`, no dia ${hn(t)}`:""}`}return e.name==="rewards"?"Recompensas (placar, pr\xEAmios e extrato)":e.name==="routines"?"Rotinas (rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados)":e.name==="more"?on(e):"Agora (o dia de hoje: agenda, rem\xE9dios, rotinas e contas)"}_chatContext(){let e=new Date(this._now||Date.now()),t=B(e),a=this._view().name==="calendar"&&this._cursor&&this._cursor>t?B(this._cursor):t,s=this._ix(),i=u=>(this._cal(u)||{}).name||"",n=new Map((this._peopleCals&&this._peopleCals()||[]).map(u=>[u.cal,u.name])),l=(this._events(a,q(a,31))||[]).filter(u=>!u.kind&&!u.todo&&!u.gerencia),c=l.sort((u,f)=>u.start-f.start).slice(0,150).map(u=>({titulo:u.summary||"",data:P(u.start),inicio:u.allDay?null:j(u.start),fim:u.allDay?null:j(u.end),calendario:i(u.cal),de:n.get(u.cal)||"",local:I(u.location||"",120),notas:I(String(u.description||"").replace(/\s+/g," ").trim(),200)})),d=this._score?this._score():null,p=this._todos?this._todos():{items:[]},h=this._away&&this._away();return{tela:`${this._chatScreen()}${h&&this._awayNow()?`; a fam\xEDlia est\xE1 de f\xE9rias at\xE9 ${h.to} (rotinas, tarefas e manuten\xE7\xE3o pausadas)`:""}`,criar:!!this._defaultCal(),agenda:c,rotinas:(s.routines||[]).map(u=>({id:u.key,nome:u.summary,feito:!!u.done,pulada:!!(u.done&&u.done.skipped),periodo:(be(u.period)||{}).label||"",hora:u.time||null,quem:u.who||"",pontos:u.points||0,atrasada:!u.done&&(u.late>0||!!u.yesterday)})),remedios:(s.meds||[]).map(u=>({id:u.key,nome:u.summary,hora:u.time||null,quem:u.who||"",dose:u.dose||"",estado:u.state||""})),contas:(this._billsList?this._billsList():[]).filter(u=>!u.paid).map(u=>({nome:u.title,valor:u.value==null?null:Number(u.value),vence:u.due,atrasada:!!u.overdue})),manutencao:(s.maint||[]).map(u=>({nome:u.summary,vence:u.due,estado:u.state})),placar:d&&this._scoreOn&&this._scoreOn()?(d.rows||[]).map(u=>({pessoa:u.name,pontos:u.points})):[],recompensas:d&&this._scoreOn&&this._scoreOn()?{periodo:d.current&&d.current.label||"",premio:d.current&&(d.current.reward||Object.entries(d.current.prizes||{}).map(([u,f])=>`${u}: ${f}`).join(" \xB7 "))||"",extrato:(d.log||[]).slice(0,15).map(u=>({quando:String(u.at||"").slice(0,16).replace("T"," "),pessoa:u.who||"",pontos:Number(u.points)||0,o_que:u.title||""})),demeritos:(this._demerits&&this._demerits()||[]).map(u=>({nome:u.title,pontos:u.points}))}:null,cadastros:(s.catalog||[]).slice(0,200).map(u=>({tipo:u.kind||"",nome:u.summary||"",quem:u.who||"",quando:u.time||(be(u.period)||{}).label||"",repete:u.kind==="manutencao"?`a cada ${ge(u.every)}`:u.after?`volta ${ge(u.after)} depois de feita`:u.rrule?Fe(u.rrule):"uma vez",proxima:u.next||null,dose:u.dose||"",valor:u.value==null?null:Number(u.value),atrasada:!!u.late})),cadastros_total:(s.catalog||[]).length,pessoas:(s.people||[]).map(u=>({nome:u.name,pet:!!u.pet,calendario:i([...n].find(([,f])=>f===u.name)?.[0])})),eu:this._user&&(this._user.person||this._user.name)||"",tarefas:(p&&p.items||[]).filter(u=>!u.done).slice(0,60).map(u=>({nome:u.summary,lista:u.listName||"",prazo:u.undated||!u.due?null:String(u.due).slice(0,10),atrasada:!!u.overdue})),agenda_total:l.length,tarefas_total:(p&&p.items||[]).filter(u=>!u.done).length}}async _chatSend(e){let t=this._chatState();if(t.busy)return;let a=t.files||[],s=a.length?{role:"user",text:e,anexos:a.map(n=>n.nome)}:{role:"user",text:e},i=[...t.messages,s];this._setChat({messages:i,draft:"",busy:!0,error:"",files:[]}),this._chatScroll=!0;try{let n={messages:i.map(d=>({role:d.role,text:d.text||(d.actions||[]).map(p=>p.label).join("; "),...d.anexos?{anexos:d.anexos}:{}})),context:this._chatContext()},l=a.length?await this.api.chat({...n,files:a.map(d=>({data:d.data,mime:d.mime,nome:d.nome}))}):await this.api.call("cronologia/ai/chat",n);for(let d of a)d.url&&URL.revokeObjectURL(d.url);let c=(l.actions||[]).map(d=>({...d,label:this._chatLabel(d),icon:d.tipo==="evento"?"calendar-plus":d.tipo==="tomei"?"pill":"check",state:"todo"}));this._setChat({messages:[...this._chatState().messages,{role:"ia",text:l.reply||"",actions:c}],busy:!1})}catch(n){this._setChat({busy:!1,error:n.message||"A IA n\xE3o respondeu. Tente de novo.",...a.length?{files:a,messages:this._chatState().messages.filter(l=>l!==s)}:{}})}this._chatScroll=!0}_chatLabel(e){return e.tipo==="evento"?`Marcar "${I(e.titulo,60)}" \xB7 ${hn(e.data)}${e.inicio?` \xE0s ${e.inicio}`:""}`:e.tipo==="tomei"?`Tomei "${I(e.nome,60)}"${e.hora?` (${e.hora})`:""}`:`"${I(e.nome,60)}" feita`}_setAction(e,t,a){let s=this._chatState().messages.map((i,n)=>n===e?{...i,actions:i.actions.map((l,c)=>c===t?{...l,...a}:l)}:i);this._setChat({messages:s})}async _chatDo(e,t){let a=((this._chatState().messages[e]||{}).actions||[])[t];if(!a||a.state==="done"||a.state==="doing")return;this._setAction(e,t,{state:"doing",note:""});let s="";try{if(a.tipo==="evento"){let i=this._defaultCal();if(!i)throw new Error("Nenhum calend\xE1rio para criar eventos.");let n=this._eventFromForm({title:a.titulo,date:a.data,endDate:"",allDay:!a.inicio,start:a.inicio||"",end:a.inicio?a.fim||kl(a.inicio):"",repeat:"",rrule:"",location:"",notes:""});await this.api.createEvent(i,n),s=I((this._cal(i)||{}).name||"",30)}else await this.api.setCheck(a.id,!0,a.tipo==="tomei"?"remedio":"rotina");this._haptic&&this._haptic("success"),this._setAction(e,t,{state:"done",note:s})}catch(i){this._setAction(e,t,{state:"failed",note:i.message||"N\xE3o deu certo."})}}async _chatDoAll(e){let t=(this._chatState().messages[e]||{}).actions||[];for(let a=0;a<t.length;a++)t[a].state!=="done"&&await this._chatDo(e,a)}async _chatMic(){let e=this._chatState();if(e.rec==="on"){let a=this._chatRec;if(this._chatRec=null,clearTimeout(this._chatRecTimer),!a)return this._setChat({rec:null});let s=a.stop();if(this._setChat({rec:null}),s.length<16e3*.4)return this._setChat({error:"N\xE3o ouvi nada. Toque no microfone e fale."});this._setChat({busy:!0,error:""});try{let i=await this.api.voiceText(s);this._setChat({busy:!1}),i&&i.text&&this._chatSend(i.text)}catch(i){this._setChat({busy:!1,error:i.message||"N\xE3o consegui transcrever."})}return}if(e.rec)return;let t=new yt(()=>{});this._chatRec=t,this._setChat({rec:"starting",error:""});try{await t.start()}catch(a){return t.cancel(),this._chatRec=null,this._setChat({rec:null,error:Ea(a)})}if(this._chatRec!==t)return t.cancel();this._setChat({rec:"on"}),this._chatRecTimer=setTimeout(()=>this._chatState().rec==="on"&&this._chatMic(),120*1e3)}_chatMicCancel(){clearTimeout(this._chatRecTimer),this._chatRec&&this._chatRec.cancel(),this._chatRec=null,this._setChat({rec:null,error:""})}_chatStop(){clearTimeout(this._chatRecTimer),this._chatRec&&this._chatRec.cancel(),this._chatRec=null,this._chat&&this._chat.rec&&(this._chat={...this._chat,rec:null})}_chatAfterRender(){if(!this._chatScroll||this._sheet!=="chat")return;this._chatScroll=!1;let e=this.renderRoot.querySelector(".chat-log");e&&(e.scrollTop=e.scrollHeight)}};var fn={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Ts=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Al=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var mn=o=>{let[e,t,a]=String(o).slice(0,10).split("-").map(Number);return new Date(e,t-1,a)};function At(o,e,t){let a=typeof o=="string"?mn(o):o,s=typeof e=="string"?mn(e):e,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return t==="mes"?`${Al[a.getMonth()].replace(/^./,n=>n.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Ts[i.getMonth()]}`:`${a.getDate()} ${Ts[a.getMonth()]} a ${i.getDate()} ${Ts[i.getMonth()]}`}var U=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Ia=o=>o.key==="Enter"&&!o.shiftKey&&o.preventDefault(),Bt=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],Se=o=>(o||"?").trim().charAt(0).toUpperCase(),Dl={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},zs={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},Na={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},Ml={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},Sl=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],gn=[2,3,5,10,20],Ra={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},vn=5,xn=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),bn=o=>class extends o{_score(){return this._ix().score||null}_scoreOn(){let e=this._score();return!!(e&&e.enabled&&e.participants.length)}_scorePoints(e){if(!this._scoreOn())return 0;let t=e.kind;return t&&t.points>0?t.points:e.todo&&e.todo.points>0?e.todo.points:0}_participant(e){let t=this._score();if(!t||!e)return"";let a=T(e);return t.participants.find(s=>T(s)===a||T(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(e){let t=T(e||""),a=this._pColors();if(a.has(t))return a.get(t);let s=this._personCal(e);return s?s.color:ue(Bt[0])}_pColors(){let e=this._score(),t=e&&e.participants||[],a=this._cals?this._cals():[],s=this._pColorCache;if(s&&s.cals===a&&s.parts===t.join("|"))return s.map;let i=new Map,n=new Set;for(let c of t){let d=this._personCal(c);d&&(i.set(T(c),d.color),n.add(d.color.id))}let l=0;for(let c of t){if(i.has(T(c)))continue;for(;l<Bt.length-1&&n.has(Bt[l]);)l++;let d=Bt[l%Bt.length];i.set(T(c),ue(d)),n.add(d)}return this._pColorCache={cals:a,parts:t.join("|"),map:i},i}_personCal(e){let t=T(e||"").split(" ")[0];if(!t||!this._cals)return null;let a=this._cals().filter(s=>!s.hidden&&T(s.name).split(/[^a-z0-9]+/).includes(t));return a.length===1?a[0]:null}_me(){return this._user&&this._user.person||""}_pickWho(){return this._scoreOn()&&this._app("who_pick",!1)===!0}_pointsWho(e,t=""){let a=this._score(),s=a&&(a.entries||[]).find(i=>i.key===e);return s&&s.who||this._participant(t||"")||""}_renderWon(e,t){return e?r`<span class="won" style=${Y(this._pColor(e),this._dark)} title="${e} ganhou ${t}" aria-label="${e} ganhou ${t} ${t===1?"ponto":"pontos"}"><span class="won-who">${Se(e)}</span>+${t}</span>`:r`<span class="pts got">+${t}</span>`}_panelHead(e,t,a,s="",{cls:i="",smallCls:n=""}={}){return r`<div class="chores-head sec-head ${i}"><span class="sec-ic ${t}">${U(e)}</span><span class="overline">${a}</span>${s?r`<small class=${n}>${s}</small>`:m}</div>`}_renderChk(e){let t=e.part?e.part.done:null,a=!!e.done&&!e.done.part;return r`<button class="chk ${a?"on":""} ${t!=null?"part":""}" style=${t!=null?`--f:${Math.round(t*100)}%`:""} @click=${()=>e.done?this._undoCheck(e,"rotina"):this._markDone(e,"rotina")} aria-label="${e.done?"Desmarcar":"Marcar"} ${e.summary}">${a?U(e.done.skipped?"skip-forward":"check"):m}</button>`}_renderQuickWho(e,t,a){let i=(this._score()||{participants:[]}).participants.slice(0,4);return r`<div class="qwho" role="group" aria-label="Quem fez ${e}">
        ${i.map(n=>r`<button class="qw-btn" style=${Y(this._pColor(n),this._dark)} aria-label="${n} fez ${e}${t>0?` (+${t})`:""}" title="${n} fez${t>0?` (+${t})`:""}" @click=${()=>a(n)}>${Se(n)}</button>`)}
      </div>`}_withWho(e,t,a,s=null){if(s)return a(s);if(!this._scoreOn()||!(e>0))return a("");let i=this._participant(this._me());return i?a(i):this._openSheet("who",{points:e,title:t,run:a})}_doneToast(e,t,a,{reassignKey:s,undo:i}){let n=this._scoreOn()&&t&&a>0?this._score().participants.filter(c=>T(c)!==T(t)):[],l=t&&a>0?`Feito por ${t} \xB7 +${a}`:`${I(e.summary,26)}: feito`;if(n.length===1&&s){let c=n[0];this._showToast(l,{label:`Foi ${c}`,run:()=>this.api.scoreReassign(s,c).then(()=>this._showToast(`Pontos para ${c}`)).catch(d=>this._showToast(d.message))})}else n.length>1&&s?this._showToast(l,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:e.summary,run:c=>this.api.scoreReassign(s,c).then(()=>this._closeSheet())})}):this._showToast(l,i?{label:"Desfazer",run:i}:null)}_partFrac(){return this._part||1}_renderPartPick(){let e=this._partFrac(),t=(a,s)=>r`<button class="part-opt ${e===a?"on":""}" aria-pressed=${e===a?"true":"false"} @click=${()=>(this._part=a,this.requestUpdate())}><span class="pie" style="--f:${a*100}%" aria-hidden="true"></span><span>${s}</span></button>`;return r`<div class="part-pick" role="group" aria-label="Quanto foi feito">${t(.25,"25%")}${t(.5,"50%")}${t(.75,"75%")}${t(1,"Tudo")}</div>`}_markPart(e,t,a=null){if(this._part=1,this._view().name==="now"&&(this._choresHold=!0),(e.part&&e.part.done||0)+t>.99)return this._markDone(e,"rotina",a);let s=e.points>0?Math.round(e.points*t):0;return this._withWho(s,e.summary,async i=>{this._sheet==="who"&&await this._closeSheet();try{let n=await this.api.checkPart(e.key,t,i);this._haptic("success");let l=n&&n.points>0&&i?` por ${i} \xB7 +${n.points}`:"";this._showToast(`${I(e.summary,30)}: ${Math.round(t*100)}%${l} \xB7 o resto amanh\xE3`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,"rotina").catch(c=>this._showToast(c.message))})}catch(n){this._showToast(`N\xE3o consegui marcar: ${n.message}`)}},a)}_renderPartSheet(){let{it:e,frac:t,by:a}=this._form,s=Math.round(t*100),i=e.points>0&&this._scoreOn()?Math.round(e.points*t):0,n=l=>Promise.resolve(this._closeSheet()).then(l);return r`${this._sheetHead("Feito em parte")}
        <p class="sheet-note top">${I(e.summary,40)} · <b>${s}%</b>${a?` por ${a}`:""}${i?r` · <b>+${i}</b>`:m}</p>
        <div class="sheet-actions part-ask">
          <button class="btn outline" @click=${()=>n(()=>this._markPart(e,t,a))}>${U("calendar-clock")}O resto amanhã</button>
          <button class="btn primary" @click=${()=>n(()=>this._finishPart(e,t,a))}>${U("circle-check")}Concluir com ${s}%</button>
        </div>`}_finishPart(e,t,a=null){this._part=1,this._view().name==="now"&&(this._choresHold=!0);let s=e.points>0?Math.round(e.points*t):0;return this._withWho(s,e.summary,async i=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,"rotina",i,t),this._haptic("success"),this._doneToast(e,i,s,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,"rotina").catch(n=>this._showToast(n.message))})}catch(n){this._showToast(`N\xE3o consegui marcar: ${n.message}`)}},a)}_markDone(e,t,a=null){if(t==="rotina"&&this._partFrac()<1){let s=this._partFrac();return(e.part&&e.part.done||0)+s>.99?this._markPart(e,s,a):this._openSheet("parte",{it:e,frac:s,by:a})}return t==="rotina"&&this._view().name==="now"&&(this._choresHold=!0),this._withWho(e.points||0,e.summary,async s=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,t,s),this._haptic("success"),this._doneToast(e,s,e.points||0,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,t).catch(i=>this._showToast(i.message))})}catch(i){this._showToast(`N\xE3o consegui marcar: ${i.message}`)}},a)}_maintDone(e,t=null,a=!1){return this._withWho(e.points||0,e.summary,async s=>{this._sheet&&(!a||this._sheet==="who")&&await this._closeSheet();try{let i=await this.api.maintDone(e.cal,e.uid,s);this._haptic("success");let n=i&&i.next?`Pr\xF3xima em ${le(F(i.next),new Date(this._now))}`:"";i&&i.key?this._doneToast(e,s,e.points,{reassignKey:i.key}):this._showToast(n?`Feito. ${n}`:"Feito",i&&i.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(l=>this._showToast(l.message))}:null)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}},t)}async _maintSkip(e){this._sheet&&await this._closeSheet();try{let t=await this.api.maintSkip(e.cal,e.uid);this._haptic("light");let a=t&&t.next?`, pr\xF3xima em ${le(F(t.next),new Date(this._now))}`:"",s=t&&t.undo?()=>this.api.maintUndo(e.cal,e.uid):t&&t.key?()=>this.api.setCheck(t.key,!1,"manutencao"):null;this._showToast(`${I(e.summary,24)}: pulada${a}`,s?{label:"Desfazer",run:()=>s().catch(i=>this._showToast(i.message))}:null)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}_renderWhoButtons(e,t){let a=this._score()||{participants:[]};return r`<div class="field who-act">
        <span class="flabel">Quem fez?${e>0?r` <b>+${e}</b>`:m}</span>
        <div class="who-grid inline">
          ${a.participants.map(s=>r`<button class="who-btn" style=${Y(this._pColor(s),this._dark)} @click=${()=>t(s)}><span class="avatar">${Se(s)}</span><b>${s}</b></button>`)}
        </div>
      </div>`}_renderWhoSheet(){let e=this._form,t=this._score()||{participants:[]};return r`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${I(e.title||"",40)}${e.points?r` · <b>+${e.points} pontos</b>`:m}</p>
        <div class="who-grid">
          ${t.participants.map(a=>r`<button class="who-btn" style=${Y(this._pColor(a),this._dark)} @click=${()=>e.run(a)}>
              <span class="avatar xl">${Se(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>e.run("")}>${U("x")}Ninguém do placar (sem pontos)</button>`}_renderRewards(){let e=this._score();if(!e||!e.enabled||!e.participants.length)return this._renderRoutinesTab();let t=new Date(this._now),a=e.current,s=Z(F(a.end),t),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${N(s,"dia","dias")}`,n=e.leader,l=e.rows.reduce((c,d)=>c+d.points,0);return r`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${ne(Dl[e.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(e)}
        <div class="panel board">
          ${e.rows.length===2?this._renderDuel(e,l):this._renderRanking(e)}
          ${this._boardFoot(e,l)}
        </div>
        ${this._renderPrize(e)}
        ${e.manual?this._renderToScore():m}
        ${this._renderDemerits(e)}
        ${this._renderExtrato(e)}
        ${this._renderHistory(e)}
      </section>`}_boardFoot(e,t){let a=e.leader;return r`<div class="board-foot">${a?r`${U("crown")}<span><b>${a}</b> na frente${e.rows[1]?` por ${N(e.rows[0].points-e.rows[1].points,"ponto","pontos")}`:""}</span>`:r`<span>${t?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>`}_placarFullOn(){return this._app("placar_cheia",!0)!==!1}_renderPlacarNow(){if(!(this._fullOn&&this._fullOn())||!this._scoreOn()||!this._placarFullOn())return m;let e=this._score(),t=e.rows.reduce((a,s)=>a+s.points,0);return r`<div class="panel board now-board" id="placar-agora">
        ${this._panelHead("trophy","gold","Placar",e.current.label)}
        ${e.rows.length===2?this._renderDuel(e,t):this._renderRanking(e)}
        ${this._boardFoot(e,t)}
      </div>`}_renderDuel(e,t){let[a,s]=e.participants.map(d=>e.rows.find(p=>p.name===d)||{name:d,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),n=a.points-i+(s.points-i),l=n?(a.points-i)/n:.5,c=(d,p)=>r`<div class="duel-side ${p?"right":""} ${e.leader===d.name?"lead":""}" style=${Y(this._pColor(d.name),this._dark)}>
        <span class="avatar xl">${Se(d.name)}${e.leader===d.name?r`<span class="crown">${U("crown")}</span>`:m}</span>
        <b class="duel-name">${d.name}</b>
        <span class="duel-pts">${d.points}</span>
        <small>${N(d.count,"tarefa","tarefas")}${d.demerits?r` · <span class="neg-text">${N(d.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:m}</small>
      </div>`;return r`<div class="duel">
          ${c(a,!1)}
          <span class="duel-x">×</span>
          ${c(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(l*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(e){let t=Math.max(1,...e.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/t*100).toFixed(1);return r`<div class="ranking">
        ${e.rows.map((s,i)=>r`<div class="rank-row ${e.leader===s.name?"lead":""}" style=${Y(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${Se(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(e){let t=e.history&&e.history[0];if(!t||t.delivered)return m;let a=new Date(this._now);if(Z(a,F(t.end))>14)return m;let s=Object.values(t.totals||{}).join(" \xD7 ");return r`<div class="result-card ${t.winner?"":"tie"}" style=${t.winner?Y(this._pColor(t.winner),this._dark):""}>
        <span class="result-ic">${U("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${Ml[e.period]} · ${At(t.start,t.end,e.period)}</span>
          <b>${t.winner?`${t.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${t.reward?r`<small>${t.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${t.reward}</small>`:m}
        </div>
        ${t.winner&&t.reward?r`<button class="dose-btn agora" @click=${()=>this._setDelivered(t.key,!0)}>${U("check")}Entregue</button>`:r`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(t.key,!0)}>${U("x")}</button>`}
      </div>`}_renderPrize(e){let t=e.current,a=e.next,s=c=>Object.keys(c.prizes||{}).length>0,i=(c,d)=>c.prizes&&c.prizes[d]||c.reward||"",n=s(t)||!!t.reward,l=s(a)||!!a.reward;return r`<div class="panel prize ${n?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${U("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${s(t)?"Pr\xEAmios":"Pr\xEAmio"} ${zs[e.period]}</span>
            ${s(t)?m:t.reward?r`<b>${t.reward}</b>`:r`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${()=>this._openPrize("current")}>${U(n?"pencil":"plus")}${n?"Mudar":"Definir"}</button>
        </div>
        ${s(t)?r`<div class="prize-people">
              ${e.participants.map(c=>{let d=i(t,c);return r`<div class="prize-person ${e.leader===c?"lead":""}" style=${Y(this._pColor(c),this._dark)}>
                  <span class="avatar sm2">${Se(c)}</span>
                  <span class="pp-tx"><small>Se ${c} vencer</small>${d?r`<b>${d}</b>`:r`<i>ainda livre</i>`}</span>
                  ${e.leader===c?r`<span class="pp-lead">${U("crown")}</span>`:m}
                </div>`})}
            </div>`:m}
        <div class="prize-next">
          <span>${U("gift")}<span>${s(a)?r`${ne(Na[e.period].replace(/^d[ao] /,""))}: <b>${e.participants.map(c=>`${c}: ${i(a,c)||"livre"}`).join(" \xB7 ")}</b>`:a.reward?r`Prêmio ${Na[e.period]}: <b>${a.reward}</b>`:`Pr\xEAmio ${Na[e.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${()=>this._openPrize("next")}>${U(l?"pencil":"plus")}${l?"Mudar":"Definir"}</button>
        </div>
      </div>`}_openPrize(e){let t=this._score(),a=e==="next"?t.next:t.current,s=a.prizes||{},i=Object.keys(s).length>0;this._openSheet("prize",{which:e,key:a.key,label:a.label,mode:i?"cada":"todos",shared:a.reward||"",per:Object.fromEntries(t.participants.map(n=>[n,s[n]||(i?"":a.reward||"")]))})}async _savePrize(){let e=this._form,t=e.mode==="todos"?(e.shared||"").trim():"",a=e.mode==="cada"?Object.fromEntries(Object.entries(e.per||{}).map(([s,i])=>[s,(i||"").trim()]).filter(([,s])=>s)):{};await this._closeSheet();try{await this.api.scorePrizes(e.key,t,a),this._haptic("success"),this._showToast(t||Object.keys(a).length?Object.keys(a).length?"Pr\xEAmios salvos":"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(s){this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_renderPrizeSheet(){let e=this._form,t=this._score(),a=["Ex.: jantar fora","Ex.: massagem","Ex.: escolher o filme","Ex.: folga da lou\xE7a"];return r`${this._sheetHead(`Pr\xEAmio ${e.which==="next"?Na[t.period]:zs[t.period]}`)}
        <p class="sheet-note top">${ne(e.label||"")}</p>
        <div class="seg" role="radiogroup" aria-label="Tipo de prêmio">
          ${[["todos","O mesmo para todos"],["cada","Um para cada pessoa"]].map(([s,i])=>r`<button class=${e.mode===s?"on":""} role="radio" aria-checked=${e.mode===s?"true":"false"} @click=${()=>this._setForm({mode:s})}>${i}</button>`)}
        </div>
        ${e.mode==="todos"?r`<label class="field" style="margin-top:14px">
              <span class="flabel">Quem fizer mais pontos ganha</span>
              <textarea class="grow" rows="1" .value=${e.shared||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @keydown=${Ia} @input=${s=>this._setForm({shared:s.target.value})}></textarea>
            </label>`:r`${t.participants.map((s,i)=>r`<label class="field" style=${i?"":"margin-top:14px"}>
                  <span class="flabel">Se ${s} vencer</span>
                  <textarea class="grow" rows="1" .value=${e.per&&e.per[s]||""} placeholder=${a[i%a.length]} maxlength="200" @keydown=${Ia} @input=${n=>this._setForm({per:{...this._form.per,[s]:n.target.value}})}></textarea>
                </label>`)}
              <span class="field-hint">${U("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${U("x")}Cancelar</button>
          <button class="btn primary" @click=${()=>this._savePrize()}>${U("check")}Salvar</button>
        </div>`}async _setDelivered(e,t){try{await this.api.scoreDelivered(e,t),t&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderScoreDone(e,t,a){let s=e.length+t.length;if(!s)return m;let i=!!this._scoreDoneOpen;return r`<button class="add-line done-fold score-done-fold" aria-expanded=${i?"true":"false"} @click=${()=>(this._scoreDoneOpen=!i,this.requestUpdate())}>
          ${U(i?"chevron-down":"chevron-right")}<span>Concluídas (${s})</span>
        </button>
        ${i?r`${ae(e,n=>n.key,n=>this._choreRow(n,a))}
            ${ae(t,n=>n.key,n=>r`<div class="chore todo done">
                <button class="chk sq on" @click=${()=>this._todoDone(n,!1)} aria-label="Reabrir ${n.summary}">${U("check")}</button>
                <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:n.key})}><b>${n.summary}</b><small>concluída · ${n.listName} · ResolvIA</small></button>
                <span class="pts got">+${n.points}</span>
              </div>`)}`:m}`}_renderFutureScore(e,t,a){let s=this._ix(),i=P(t),n=new Set(e.map(d=>`${d.cal}|${d.uid}`)),l=(s.catalog||[]).filter(d=>d.kind==="rotina"&&d.points>0&&!d.late&&d.next>i&&!n.has(`${d.cal}|${d.uid}`)&&!this._checkOf(d)).sort((d,p)=>d.next.localeCompare(p.next)||d.summary.localeCompare(p.summary,"pt-BR"));if(!l.length)return m;let c=!!this._futureOpen;return r`<button class="add-line done-fold future-fold" aria-expanded=${c?"true":"false"} @click=${()=>(this._futureOpen=!c,this.requestUpdate())}>
          ${U(c?"chevron-down":"chevron-right")}<span>Próximas rotinas (${l.length})</span>
        </button>
        ${c?r`<p class="future-note">Fez antes do dia? Marque aqui.</p>
              ${ae(l,d=>d.key,d=>{let p={key:d.key,summary:d.summary,points:d.points},h=oe(F(d.next),t,{long:!1,cap:!1});return r`<div class="chore future">
                  <button class="chk" @click=${()=>this._markDone(p,"rotina")} aria-label="Marcar ${d.summary} como feita hoje"></button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(d)}><b>${d.summary}</b><small>${a?r`<span class="pts-inline">+${d.points}</span> · `:m}${[h,d.after?`volta ${ge(d.after)} depois`:"",d.who].filter(Boolean).join(" \xB7 ")}</small></button>
                  ${a?this._renderQuickWho(d.summary,d.points,u=>this._markDone(p,"rotina",u)):r`<span class="pts">+${d.points}</span>`}
                </div>`})}`:m}`}_renderToScore(){let e=this._ix(),t=new Date(this._now),a=(e.routines||[]).filter(u=>u.points>0),s=this._awayNow&&this._awayNow()?this._away():null,i=s?[]:(e.maint||[]).filter(u=>u.points>0&&u.state!=="ok"),n=s?[]:this._todos().items.filter(u=>u.points>0&&(u.undated||(u.done?u.days===0:u.overdue||u.days===0))),l=a.filter(u=>u.done).length+n.filter(u=>u.done).length,c=a.length+n.length,d=this._pickWho(),p=jt(a.filter(u=>!u.done),t),h=n.filter(u=>!u.done);return r`<div class="panel chores score-today">
        ${this._panelHead("star","ok","Para pontuar hoje",c?`${l} de ${c}`:"")}
        ${p.length?this._renderPartPick():m}
        ${ae(p,u=>u.key,u=>r`<div class="chore">
            ${this._renderChk(u)}
            <button class="chore-tx" @click=${()=>this._openIndexItem(u)}><b>${u.summary}</b><small class=${As(u,t)?"late":""}>${d?r`<span class="pts-inline">+${De(u)}</span> · `:m}${Ht(u,t)}</small></button>
            ${d?this._renderQuickWho(u.summary,De(u),f=>this._markDone(u,"rotina",f)):r`<span class="pts">+${De(u)}</span>`}
          </div>`)}
        ${ae(h,u=>u.key,u=>r`<div class="chore">
            <button class="chk sq" @click=${()=>this._todoDone(u,!0)} aria-label="Concluir ${u.summary}"></button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:u.key})}><b>${u.summary}</b><small>${d?r`<span class="pts-inline">+${u.points}</span> · `:m}${u.undated?"sem prazo":u.overdue?"atrasada":"hoje"} · ${u.listName} · ResolvIA</small></button>
            ${d?this._renderQuickWho(u.summary,u.points,f=>this._todoDone(u,!0,f)):r`<span class="pts">+${u.points}</span>`}
          </div>`)}
        ${ae(i,u=>u.key,u=>r`<div class="chore maint-score">
            <span class="chk wrench ${u.state}">${U("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(u)}><b>${u.summary}</b><small>${d?r`<span class="pts-inline">+${u.points}</span> · `:m}${u.days<0?`venceu h\xE1 ${N(-u.days,"dia","dias")}`:u.days===0?"\xE9 hoje":`em ${N(u.days,"dia","dias")}`} · manutenção</small></button>
            ${d?this._renderQuickWho(u.summary,u.points,f=>this._maintDone(u,f)):r`<button class="pts btn-pts" @click=${()=>this._maintDone(u)}>+${u.points}</button>`}
          </div>`)}
        ${c&&!p.length&&!h.length&&!i.length?r`<p class="empty-line all-done">${U("circle-check")}Tudo pontuado hoje.</p>`:m}
        ${this._renderScoreDone(a.filter(u=>u.done),n.filter(u=>u.done),t)}
        ${s?r`<p class="empty-line away-line">${U("plane")}<span><b>De férias até ${oe(F(s.to),t,{long:!1,cap:!1})}</b>: rotinas, tarefas e manutenção pausadas.</span></p>`:r`${this._renderFutureScore(a,t,d)}
            ${!a.length&&!i.length&&!n.length?r`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Adicionar › Rotina</b> ou <b>Manutenção</b>${this._resolviaOn()?", ou a uma tarefa no ResolvIA":""}.</p>`:m}`}
        ${s?m:r`<div class="score-actions">
              <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${U("plus")}Tarefa com pontos</button>
              <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${U("award")}Pontos avulsos</button>
            </div>`}
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(e){await this._saveAppPrefs({demerits:e.length?e:null})}async _addDemerit(e,t){await this._saveDemerits([...this._demerits(),{id:xn(),title:e,points:t}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${I(e,28)} \xB7 \u2212${t}`)}async _markDemerit(e,t){try{let a=await this.api.scoreDemerit(e.id,t);this._haptic("warning"),this._showToast(`\u2212${e.points} para ${t}: ${I(e.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(e=null){this._openSheet("demerit",e?{id:e.id,title:e.title,points:e.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let e=this._form,t=(e.title||"").trim(),a=Math.round(Math.abs(Number(e.points)||0));if(!t||a<1)return;let s=this._demerits(),i=e.id?s.map(n=>n.id===e.id?{...n,title:t,points:a}:n):[...s,{id:xn(),title:t,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(e.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${I(t,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let e=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${I(e.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(t=>t.id!==e.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(e){let t=this._demerits();if(!t.length)return m;let a=i=>{let n={};for(let l of e.entries)l.kind==="demerito"&&String(l.key).startsWith(`demerito|${i.id}|`)&&(n[l.who]=(n[l.who]||0)+1);return Object.entries(n).map(([l,c])=>`${l} ${c}\xD7`).join(" \xB7 ")},s=e.entries.filter(i=>i.kind==="demerito").length;return this._awayNow&&this._awayNow()?r`<div class="panel chores demerits paused" id="demeritos">
          ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${N(s,"vez","vezes")} ${Ra[e.period]}`:"tiram pontos")}
          <p class="dm-lead dm-away">${U("plane")}<span>Pausados nas férias.</span></p>
        </div>`:r`<div class="panel chores demerits" id="demeritos">
        ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${N(s,"vez","vezes")} ${Ra[e.period]}`:"tiram pontos")}
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${ae(t,i=>i.id,i=>{let n=a(i);return r`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${i.title}</b>${n?r`<small>${n} ${Ra[e.period]}</small>`:m}</div>
                <span class="pts neg">−${i.points}</span>
              </div>
              <div class="dm-who">
                ${e.participants.map(l=>r`<button class="dm-btn" style=${Y(this._pColor(l),this._dark)} aria-label="${i.title}: descontar de ${l}" @click=${()=>this._markDemerit(i,l)}>
                    <span class="avatar sm2">${Se(l)}</span><span>${l}</span>
                  </button>`)}
              </div>
            </div>`})}
      </div>`}_renderDemeritsSettings(){let e=this._demerits();return r`<div class="panel chores demerits-set" id="demeritos-ajustes">
        ${this._secHead("thumbs-down","Dem\xE9ritos","O que tira pontos de quem fizer.")}
        ${e.length?ae(e,t=>t.id,t=>r`<button class="demerit dm-edit" @click=${()=>this._openDemeritForm(t)}>
                <span class="dm-tx"><b>${t.title}</b></span>
                <span class="pts neg">−${t.points}</span>
                ${U("chevron-right")}
              </button>`):r`<div class="chip-row dm-ideas">${Sl.map(([t,a])=>r`<button class="pick" @click=${()=>this._addDemerit(t,a)}>${U("plus")}<span>${t} −${a}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${U("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let e=this._form,t=Number(e.points)||0,a=e.custom||t>0&&!gn.includes(t);return r`${this._sheetHead(e.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <textarea class="grow" rows="1" .value=${e.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @keydown=${Ia} @input=${s=>this._setForm({title:s.target.value})}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row c4">
            ${gn.map(s=>r`<button class="pick ${t===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>${U("pencil")}<span>Outro</span></button>
          </div>
          ${a?r`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(t||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:m}
        </div>
        <div class="sheet-actions">
          ${e.mode==="edit"?r`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${U("trash")}Apagar</button>`:r`<button class="btn outline" @click=${()=>this._closeSheet()}>${U("x")}Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(e.title||"").trim()||!(t>0)} @click=${()=>this._saveDemeritForm()}>${U(e.mode==="edit"?"check":"plus")}${e.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}async _removePoints(e){try{await this.api.scoreRemove(e.key);let t=()=>this.api.scoreRestore(e.key).catch(a=>this._showToast(a.message));this._showToast(e.points<0?`${I(e.title,26)}: dem\xE9rito tirado`:`${I(e.title,26)}: pontos de ${e.who.split(" ")[0]} tirados`,{label:"Desfazer",run:t})}catch(t){this._showToast(t.message)}}_renderExtraSheet(){let e=this._form,t=this._score()||{participants:[]};return r`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda.</p>
        <label class="field"><span class="flabel">O que foi feito</span><textarea class="grow" rows="1" id="ex-title" .value=${e.title} placeholder="Ex.: Lavou o carro" maxlength="120" @keydown=${Ia} @input=${a=>this._setForm({title:a.target.value})}></textarea></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${t.participants.map(a=>r`<button class="pick person ${e.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${Se(a)}</span><span>${a}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row c3">
            ${[5,10,20,30,50].map(a=>r`<button class="pick ${Number(e.points)===a?"on":""}" @click=${()=>this._setForm({points:a})}>+${a}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(e.points)} aria-label="Outro valor" @input=${a=>this._setForm({points:a.target.value})} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${U("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${!e.who||!(e.title||"").trim()||!Number(e.points)} @click=${()=>this._saveExtra()}>${U("trophy")}Dar ${Number(e.points)||0} pontos</button>
        </div>`}async _saveExtra(){let e=this._form;try{await this.api.scoreExtra(e.who,Number(e.points),e.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${e.points} para ${e.who}`)}catch(t){this._showToast(t.message)}}_renderHistory(e){let t=e.history||[];if(!t.length)return m;let a=t.slice(0,10),s={};for(let i of t)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return r`<div class="panel history">
        ${this._panelHead("archive","muted","Hist\xF3rico",Object.entries(s).map(([i,n])=>`${i} ${n}`).join(" \xB7 "))}
        ${ae(a,i=>i.key,i=>r`<div class="hist-row">
            <button class="hist-open" aria-label="Extrato de ${At(i.start,i.end,e.period)}" @click=${()=>this._openPeriodLog(i)}>
              <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?Y(this._pColor(i.winner),this._dark):""}>${i.winner?Se(i.winner):"="}</span>
              <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${At(i.start,i.end,e.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
              ${U("chevron-right")}
            </button>
            ${i.reward&&i.winner?r`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${U(i.delivered?"check":"gift")}</button>`:m}
          </div>`)}
      </div>`}_renderExtrato(e){this._extFor!==e.current.key&&(this._extFor=e.current.key,this._extMore=[],this._extEnd=!1,this._extOpen=!1);let t=e.log||[],a=t.length?Math.min(...t.map(d=>d.id)):1/0,s=[...t,...(this._extMore||[]).filter(d=>d.id<a)],i=Math.max(e.log_count||0,s.length),n=!!this._extOpen,l=n?s:s.slice(0,vn),c=n?t.length&&!this._extEnd&&s.length<i:i>l.length;return r`<div class="panel extrato">
        ${this._panelHead("file-text","accent",`Extrato ${zs[e.period]}`,s.length?N(i,"mudan\xE7a","mudan\xE7as"):"")}
        ${s.length?this._extRows(l,e,new Map((e.entries||[]).map(d=>[d.key,d]))):r`<p class="empty-line">Nada mexeu nos pontos ${Ra[e.period]} ainda.</p>`}
        ${c||n?r`<div class="ext-more">
              ${c?r`<button class="add-line" ?disabled=${this._extBusy} @click=${()=>n?this._loadExtrato(Math.min(...s.map(d=>d.id)),e.current):(this._extOpen=!0,this.requestUpdate())}>
                    ${U("chevron-down")}${this._extBusy?"Carregando\u2026":`Ver mais (${i-l.length})`}
                  </button>`:m}
              ${n&&s.length>vn?r`<button class="add-line less" @click=${d=>this._closeExtrato(d)}>${U("chevron-up")}Ver menos</button>`:m}
            </div>`:m}
      </div>`}_closeExtrato(e){let t=e.currentTarget.closest(".extrato");this._extOpen=!1,this._extMore=[],this._extEnd=!1,this.requestUpdate(),this.updateComplete.then(()=>{t&&t.getBoundingClientRect().top<0&&t.scrollIntoView({block:"start",behavior:"smooth"})})}_extRows(e,t,a=null){let s=new Date(this._now),i=d=>{let p=new Date(d),h=Z(p,s);return h===0?"Hoje":h===-1?"Ontem":`${ne(pa[p.getDay()])}, ${le(p,s)}`},n=new Set,l=[],c="";for(let d of e){let p=i(d.at);p!==c&&l.push(r`<div class="ext-day">${p}</div>`),c=p;let h=a&&d.key&&!n.has(d.key)&&["ganhou","perdeu","trocou","voltou","ajuste"].includes(d.type)?a.get(d.key):null;d.key&&n.add(d.key),l.push(this._renderExtLine(d,t,h,!!a))}return l}async _loadExtrato(e,t){this._extBusy=!0,this.requestUpdate();try{let a=await this.api.scoreLog(e,40,t.start,t.end)||[],s=new Set((this._extMore||[]).map(i=>i.id));this._extMore=[...this._extMore||[],...a.filter(i=>!s.has(i.id))],a.length<40&&(this._extEnd=!0)}catch(a){this._showToast(a.message)}this._extBusy=!1,this.requestUpdate()}async _openPeriodLog(e){await this._openSheet("periodlog",{period:e,lines:null,end:!1,busy:!0}),this._morePeriodLog()}async _morePeriodLog(){let e=this._form;if(!e||!e.period)return;let t=e.period;this._setForm({busy:!0});try{let a=e.lines&&e.lines.length?Math.min(...e.lines.map(i=>i.id)):0,s=await this.api.scoreLog(a,60,t.start,t.end)||[];if(!this._form||this._form.period!==t)return;this._setForm({lines:[...this._form.lines||[],...s],end:s.length<60,busy:!1})}catch(a){this._form&&this._form.period===t&&this._setForm({busy:!1,lines:this._form.lines||[],end:!0}),this._showToast(a.message)}}_renderPeriodLogSheet(){let e=this._form,t=this._score()||{},a=e.period,s=Object.entries(a.totals||{});return r`${this._sheetHead(`Extrato \xB7 ${At(a.start,a.end,t.period)}`)}
        <div class="plog-result">
          <span class="hist-ic ${a.winner?"":"tie"}" style=${a.winner?Y(this._pColor(a.winner),this._dark):""}>${a.winner?Se(a.winner):"="}</span>
          <span class="hist-tx"><b>${a.winner?`${a.winner} venceu`:"Empate"}</b><small>${s.map(([i,n])=>`${i} ${n}`).join(" \xD7 ")}${a.reward?` \xB7 ${a.reward}`:""}</small></span>
        </div>
        <div class="extrato plog">
          ${e.lines==null?r`<p class="empty-line">Carregando…</p>`:e.lines.length?this._extRows(e.lines,t):r`<p class="empty-line">Nada registrado nesse período.</p>`}
          ${e.lines&&e.lines.length&&!e.end?r`<button class="add-line" ?disabled=${e.busy} @click=${()=>this._morePeriodLog()}>${U("chevron-down")}${e.busy?"Carregando\u2026":"Ver mais"}</button>`:m}
        </div>`}_extText(e){let t=(h,u)=>T(h||"").split(" ")[0]===T(u||"").split(" ")[0],a=e.who||"",s=e.by&&!t(e.by,a)?e.by:"",i=!!e.by&&!s,n=Math.abs(e.points||0),l=N(n,"ponto","pontos"),c=e.via==="ResolvIA"?" no ResolvIA":e.via==="Automa\xE7\xE3o"?" por automa\xE7\xE3o":["Claude","Gemini","WhatsApp","CorrerIA"].includes(e.via)?` pelo ${e.via}`:"",d=e.title||"",p=e.kind==="extra"?"Avulso: ":e.kind==="demerito"?"Dem\xE9rito: ":e.kind==="manutencao"?"Manuten\xE7\xE3o: ":e.kind==="tarefa"?"Tarefa do ResolvIA: ":"";switch(e.type){case"ganhou":return[`${a} ganhou ${l}${s?`, marcado por ${s}`:""}${c}`,`${p}${d}`];case"perdeu":return[s?`${s} tirou ${l} de ${a}${c}`:`${a} perdeu ${l}${c}`,`${p}${d}`];case"tirou":return e.points>0?[s?`${s} devolveu ${l} para ${a}`:`${a} recebeu ${l} de volta`,`Dem\xE9rito cancelado: ${d}`]:[s?`${s} tirou ${l} de ${a}`:i?`${a} tirou os pr\xF3prios ${l}`:`${a} perdeu ${l}`,`Pontos cancelados: ${d}`];case"desmarcou":return[`${a} ${e.points>0?"recebeu de volta":"perdeu"} ${l}${s?`, desmarcado por ${s}`:i?" ao desmarcar":c?`, reaberto${c}`:""}`,`Desmarcado: ${d}`];case"trocou":return[`${l} passaram de ${e.from||"?"} para ${a}${s?`, por ${s}`:""}${c}`,d];case"voltou":return[e.points<0?`${a} perdeu ${l} de novo${s?`, ${s} desfez`:""}`:s?`${s} desfez: ${l} voltaram para ${a}`:`${l} voltaram para ${a}`,`Desfeito: ${d}`];case"ajuste":return[`${a} ${e.points>0?"ganhou mais":"perdeu"} ${l}${s?`, por ${s}`:""}`,`Pontos mudaram: ${d}`];default:return[`${a} ${e.points<0?"perdeu":"ganhou"} ${l}`,d]}}_renderExtLine(e,t,a,s=!0){let i=j(new Date(e.at));if(e.type==="fechou"){let d=Object.values(e.totals||{}).join(" \xD7 ");return r`<div class="ext-row closed">
          <span class="hist-ic" style=${e.winner?Y(this._pColor(e.winner),this._dark):""}>${U("trophy")}</span>
          <span class="feed-tx"><b>${e.winner?`${e.winner} venceu`:"Empate"}${d?` \xB7 ${d}`:""}</b><small>Fechou: ${e.period?At(e.period.start,e.period.end,t.period):""}${e.reward&&e.winner?` \xB7 ${e.reward}`:""} · ${i}</small></span>
        </div>`}let[n,l]=this._extText(e),c=Math.abs(e.points||0);return r`<div class="ext-row" style=${Y(this._pColor(e.who),this._dark)}>
        <span class="avatar sm2">${Se(e.who)}</span>
        <span class="feed-tx"><b>${n}</b><small>${l?`${l} \xB7 `:""}${i}</small></span>
        ${e.type==="trocou"?r`<span class="pts swap" title="Passaram de ${e.from} para ${e.who}">${U("repeat")}${c}</span>`:r`<span class="pts ${e.points<0?"neg":"got"}">${e.points>0?"+":e.points<0?"\u2212":""}${c}</span>`}
        ${a?r`<button class="icon-btn mini" aria-label="${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"}: ${a.title}" title=${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"} @click=${()=>this._removePoints(a)}>${U("x")}</button>`:s?r`<span class="ext-x-gap"></span>`:m}
      </div>`}_scorePrefs(e){let t=this._score()||{},a={enabled:!!t.enabled,participants:t.participants||[],period:t.period||"semana",anchor:t.anchor||P(new Date),notify:t.notify!==!1,manual:!!t.manual,remind:t.remind||null,remind_to:Array.isArray(t.remind_to)?t.remind_to:null};return this._saveAppPrefs({score:{...a,...e}})}_renderScoreSettings(){let e=this._score(),t=!!(e&&e.enabled&&e.participants.length),a=e&&e.participants&&e.participants.length?e.participants:(this._ix().people||[]).filter(i=>i.person&&!i.pet).map(i=>i.name),s=r`<div class="row switch-row">
        <div class="grow"><div class="label">Usar recompensas</div><div class="hint">${t||a.length?"Placar da casa, pr\xEAmio e dem\xE9ritos.":"Sem pessoas no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${t} ?disabled=${!t&&!a.length} @change=${i=>this._scorePrefs(i.target.checked?{enabled:!0,participants:a,anchor:P(new Date)}:{enabled:!1})} aria-label="Usar recompensas" /><span class="track"></span></label>
      </div>`;return t?r`${this._renderScoreSettingsPanel(e,s)} ${this._renderDemeritsSettings()}`:r`<div class="panel score-set" id="placar">${this._secHead("trophy","Placar")}${s}</div>`}_renderScoreSettingsPanel(e,t){let a=(this._ix().people||[]).filter(i=>!i.pet).map(i=>i.name),s=[...new Set([...e.participants,...a])];return r`<div class="panel score-set" id="placar">
        ${this._secHead("trophy","Placar")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${s.map(i=>{let n=e.participants.includes(i);return r`<button class="pick person ${n?"on":""}" aria-pressed=${n?"true":"false"} @click=${()=>this._scorePrefs({participants:n?e.participants.filter(l=>l!==i):[...e.participants,i]})}><span class="avatar sm">${Se(i)}</span><span>${i}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(fn).map(([i,n])=>r`<button class=${e.period===i?"on":""} @click=${()=>this._scorePrefs({period:i,anchor:P(new Date)})}>${U({semana:"calendar-days",quinzena:"calendar-range",mes:"calendar"}[i]||"calendar")}<span>${n.label}</span></button>`)}</div>
          <span class="field-hint">${U("info")}<span>${e.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",1)===1?"na segunda":"no domingo"}.`}</span></span>
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
          <div class="grow"><div class="label">Na tela cheia da Agora</div><div class="hint">Os pontos e quem está ganhando.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${this._placarFullOn()} @change=${i=>this._saveAppPrefs({placar_cheia:i.target.checked?null:!1})} aria-label="Placar na tela cheia da Agora" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Lembrete diário</div><div class="hint">Os pontos e quem está ganhando, no celular.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!e.remind} @change=${i=>this._scorePrefs({remind:i.target.checked?"20:00":null})} aria-label="Lembrete diário" /><span class="track"></span></label>
        </div>
        ${e.remind?r`<div class="sub-op"><div class="sub-box">${this._renderScoreRemind(e)}</div></div>`:m}
        </div></div>
      </div>`}_renderScoreRemind(e){let t=Object.fromEntries(ze.map(h=>[h.id,h.at])),a=He(Number(e.remind.slice(0,2))),s=this._ix().people||[],i=h=>!!(s.find(u=>T(u.name)===T(h))||{}).reach,n=Array.isArray(e.remind_to)?e.participants.filter(h=>e.remind_to.includes(h)):e.participants,l=n.filter(h=>!i(h)),c=h=>h.length>1?`${h.slice(0,-1).join(", ")} e ${h.at(-1)}`:h[0],d=i(this._me?this._me():""),p=h=>{let u=n.includes(h)?n.filter(f=>f!==h):e.participants.filter(f=>f===h||n.includes(f));this._scorePrefs({remind_to:u.length===e.participants.length?null:u})};return r`<div class="field remind-field">
        <span class="flabel">Quando</span>
        <div class="seg remind-seg">${ze.map(h=>r`<button class=${a===h.id?"on":""} @click=${()=>this._scorePrefs({remind:t[h.id]})}>${U(h.icon)}${h.label}</button>`)}</div>
        <div class="remind-row">
          ${Te(e.remind,h=>this._scorePrefs({remind:h}),{label:"Hor\xE1rio do lembrete",cls:"remind-time"})}
        </div>
        <span class="flabel quem-l">Quem recebe</span>
        <div class="chip-row quem" role="group" aria-label="Quem recebe o lembrete">${e.participants.map(h=>{let u=n.includes(h);return r`<button class="pick quem-p ${u?"on":""} ${i(h)?"":"sem"}" aria-pressed=${u?"true":"false"} @click=${()=>p(h)}>${U("user-round")}<b>${h}</b>${i(h)?m:r`<small>sem celular</small>`}</button>`})}</div>
        ${n.length?l.length?r`<span class="field-hint">${U("info")}<span>Sem celular para ${c(l)}: ligue o celular à pessoa no Home Assistant.</span></span>`:m:r`<span class="field-hint">${U("info")}<span>Escolha quem recebe.</span></span>`}
        <button class="btn outline remind-test" ?disabled=${!d} title=${d?"":"Sem celular ligado a voc\xEA no Home Assistant"} @click=${()=>this._testScoreReminder()}>${U("send")}Testar no meu celular</button>
      </div>`}async _testScoreReminder(){try{await this.api.testScoreReminder(),this._showToast("Lembrete enviado para o seu celular. Toque nele para abrir Recompensas.")}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}};var Oe={CREATE:1,UPDATE:4,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},wn="cronologia.todo_list",G=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,st="laranja",Cl=o=>(o||"?").trim().charAt(0).toUpperCase(),La=o=>o.allDay?F(o.due):new Date(o.due);function Os(o,e){if(o.undated)return"sem prazo";let t=La(o),a=Z(t,e),s=o.allDay?"":` \xE0s ${j(t)}`;return o.done?"conclu\xEDda":o.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?o.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${oe(t,e,{long:!1,cap:!1})}${s}`}function El(o,e){return o.done||o.undated?"":o.overdue?"late":Z(La(o),e)===0?"today":""}var $n=o=>o?o===1?"todo dia":o===7?"toda semana":o===14?"a cada 2 semanas":o===30?"todo m\xEAs":`a cada ${o} dias`:"",_n=o=>class extends o{_todosAll(){return this._ix().todos||{lists:[],items:[]}}_todos(){let e=this._todosAll(),t=this._listOwners(),a=this._me(),s=a&&(this._ix().people||[]).some(d=>d.person&&T(d.name)===T(a));if(!Object.keys(t).length||!s)return e;let i=this._todosView,n=JSON.stringify(t);if(i&&i.src===e&&i.me===a&&i.key===n)return i.view;let l=d=>!t[d]||T(t[d])===T(a),c={...e,lists:e.lists.filter(d=>l(d.id)),items:e.items.filter(d=>l(d.list))};return this._todosView={src:e,me:a,key:n,view:c},c}_listOwners(){let e=this._todosAll().app;return e&&e.donos||this._app("todo_owner",null)||{}}_ownersFromResolvia(){let e=this._todosAll().app;return!!(e&&e.donos)}_todoOwners(){let e=(this._ix().people||[]).filter(a=>a.person).map(a=>a.name),t=this._score&&this._score();return[...new Set([...e,...t&&t.participants||[]])]}_todoEvents(e,t){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.filter(s=>!s.undated).map(s=>{let i=La(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?q(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<t&&s.end>e&&!(this._awayDay&&this._awayDay(s.start)))}async _todoDone(e,t,a=null){let s=async i=>{this._sheet==="who"&&await this._closeSheet();try{let n=await this.api.setTodo(e.list,e.uid,t,i);this._haptic(t?"success":"light"),t&&n&&n.points?this._doneToast(e,n.who,n.points,{reassignKey:n.key}):this._showToast(`${I(e.summary,28)}: ${t?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(e.list,e.uid,!t).catch(l=>this._showToast(l.message))})}catch(n){this._showToast(`N\xE3o consegui: ${n.message}`)}};return t&&e.points>0?a?s(a):this._withWho(e.points,e.summary,s):s("")}_renderTodosPanel(){if(this._awayNow&&this._awayNow())return m;let e=new Date(this._now),t=this._todos().items,a=!!(this._fullOn&&this._fullOn()),s=t.filter(p=>p.undated?!a:p.done?p.days===0:p.overdue||p.days<=1);if(!s.length)return m;let i=s.filter(p=>p.overdue),n=s.filter(p=>!p.done),l=this._todosOpen||a?s:s.slice(0,6),c=this._scoreOn()?(this._score()||{}).participants||[]:[],d=p=>{let h=p.points>0&&!p.done&&c.length&&c.length<=3,u=p.equips&&p.equips.length?p.equips:p.equip?[p.equip]:[],f=p.rooms&&p.rooms.length?p.rooms:p.room?[p.room]:[],x=El(p,e),w=[$n(p.every),p.listName].filter(Boolean).join(" \xB7 "),b=x?r`<span class="due-tag ${x}">${G(x==="late"?"circle-alert":"clock")}${Os(p,e)}</span>${w?` \xB7 ${w}`:""}`:[p.undated?"":Os(p,e),w].filter(Boolean).join(" \xB7 ");return r`<div class="chore todo ${p.done?"done":""} ${p.overdue?"late":""}">
          <button class="chk sq ${p.done?"on":""}" @click=${()=>this._todoDone(p,!p.done)} aria-label="${p.done?"Reabrir":"Concluir"} ${p.summary}">${p.done?G("check"):m}</button>
          <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:p.key})}><b>${p.summary}</b><small>${h?r`<span class="pts-inline">+${p.points}</span> · ${b}`:b}</small>${kt(f.map($=>$.nome),u.map($=>$.nome),this._roomNamesAll())}</button>
          ${h?r`<div class="qwho" role="group" aria-label="Quem fez ${p.summary}">
                ${c.map($=>r`<button class="qw-btn" style=${Y(this._pColor($),this._dark)} aria-label="${$} fez ${p.summary} (+${p.points})" title="${$} fez (+${p.points})" @click=${()=>this._todoDone(p,!0,$)}>${Cl($)}</button>`)}
              </div>`:p.points>0&&this._scoreOn()?r`<span class="pts ${p.done?"got":""}">+${p.points}</span>`:m}
        </div>`};return r`<div class="panel todos ${i.length?"alert":""}" id="tarefas">
        ${this._panelHead("list-checks","violet",s.some(p=>p.undated)?"Tarefas":"Tarefas com prazo",i.length?N(i.length,"atrasada","atrasadas"):n.length?`${n.length} para fazer`:"tudo feito",{smallCls:i.length?"late":""})}
        ${ae(l.filter(p=>!p.undated),p=>p.key,p=>d(p))}
        ${l.some(p=>p.undated)?r`${l.some(p=>!p.undated)?r`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>`:m}
              ${ae(l.filter(p=>p.undated),p=>p.key,p=>d(p))}`:m}
        ${s.length>6&&!a?r`<button class="add-line" @click=${()=>(this._todosOpen=!this._todosOpen,this.requestUpdate())}>${G(this._todosOpen?"chevron-up":"chevron-down")}${this._todosOpen?"Mostrar menos":`Mais ${s.length-6}`}</button>`:m}
        ${a?m:r`<div class="panel-foot plain">${G("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais › Configurações › Integrações.</span></div>`}
      </div>`}_renderTodoSheet(){let e=new Date(this._now),t=this._todos().items.find(s=>s.key===this._form.key);if(!t)return r`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=t.undated?null:La(t);return r`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${Os(t,e)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${G("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${G("calendar-clock")}<span>${a?r`Prazo: ${ne(oe(a,e))}${t.allDay?"":` \xE0s ${j(a)}`}`:"Sem prazo"}</span></div>
          <div class="fact">${G("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${(t.rooms&&t.rooms.length?t.rooms:t.room?[t.room]:[]).length?r`<div class="fact">${G("door-open")}<span>${Rt((t.rooms&&t.rooms.length?t.rooms:[t.room]).map(s=>s.nome),this._roomNamesAll()).join(", ")}</span></div>`:m}
          ${(t.equips&&t.equips.length?t.equips:t.equip?[t.equip]:[]).map(s=>r`<div class="fact">${G("package")}<span>${s.nome}${s.comodo&&!t.room?` (${s.comodo})`:""}</span></div>`)}
          ${t.every?r`<div class="fact">${G("repeat")}<span>Volta ${$n(t.every)} depois de concluída</span></div>`:m}
          ${t.points>0&&this._scoreOn()?r`<div class="fact">${G("award")}<span>${t.points} pontos para quem concluir</span></div>`:m}
          ${t.description?r`<div class="fact notes">${G("file-text")}<span>${da(t.description).map(s=>s.url?r`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:m}
        </div>
        <p class="sheet-note">${G("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done?r`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!1))}>${G("undo-2")}Reabrir</button>`:r`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!0))}>${G("check")}Concluir${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`}
        </div>`}_todoLists(){return(this._app("todo_create_any",!1)===!0?this._todosAll():this._todos()).lists.filter(t=>!t.unavailable&&t.features&Oe.CREATE)}_otherOwner(e){let t=this._listOwners()[e],a=this._me();return t&&!(a&&T(t)===T(a))?t:null}_openTodoForm({date:e=null}={}){let t=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(wn)||'""')}catch{}let s=t.find(i=>i.id===a)||t.find(i=>!i.hidden&&i.features&Oe.DUE_DATE&&!this._otherOwner(i.id))||t.find(i=>!this._otherOwner(i.id))||t[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:P(e?B(e):B(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_todoDueOk(){return(this._todosAll().app||{}).prazos!==!1}_invLists(){let e=this._todosAll().app||{},t=e.comodos||[],a=(e.equipamentos||[]).map(s=>{let i=t.find(n=>n.nome===s.comodo);return{id:s.id,nome:s.nome,zona:"",roomId:i?i.id:null,roomName:s.comodo||""}});return{rooms:t,items:a}}_roomNamesAll(){return this._invLists().rooms.map(e=>e.nome)}_renderRoomEquipFields(e,{equips:t=!0,multiRoom:a=!1}={}){let{rooms:s,items:i}=this._invLists(),n=t?i:[];return!s.length&&!n.length?m:this._renderRoomEquipMulti(e,s,n,{multiRoom:a})}_renderRoomEquipMulti(e,t,a,{multiRoom:s=!1}={}){let i=e.equips||[],n=i.length>0,l=_=>[...new Set(_.map(M=>(a.find(E=>E.id===M)||{}).roomId).filter(M=>M&&t.some(E=>E.id===M)))],c=(t.find(_=>_.tipo==="bens")||{}).id||null,d=s?(e.rooms||(e.room?[e.room]:[])).filter(_=>t.some(M=>M.id===_)):e.room?[e.room]:[],p=n?l(i):d,h=c?e.where||(p.includes(c)?"bens":p.length||n?"casa":"nenhum"):"casa",u=h==="bens",f=h==="casa"?t.filter(_=>_.id!==c):[],x=h==="nenhum"?[]:c?a.filter(_=>_.roomId===c===u):a,w=d.filter(_=>_!==c),b=n?l(i):w,$=_=>{if(_===h)return;let M=_==="nenhum"?[]:i.filter(E=>(a.find(L=>L.id===E)||{}).roomId===c==(_==="bens"));this._setForm({where:_,equips:M,equipQ:"",equipMore:!1,equipAdding:!1,..._==="bens"?{room:c,rooms:[c]}:{room:null,rooms:[]}})},g=(_,M,E)=>r`<button class=${h===_?"on":""} aria-pressed=${h===_?"true":"false"} @click=${()=>$(_)}>${G(M)}<span>${E}</span></button>`,A=c?r`<div class="field where-field">
            <span class="flabel">Onde</span>
            <div class="seg where" role="group" aria-label="Nenhum, Casa ou Bens">${g("nenhum","x","Nenhum")}${g("casa","house","Casa")}${g("bens","car","Bens")}</div>
          </div>`:m,y=_=>{if(!s)return this._setForm({room:e.room===_?null:_});let M=w.includes(_)?w.filter(E=>E!==_):[...w,_];this._setForm({rooms:M,room:M[0]||null})},O=f.map(_=>_.id),C=s&&!n&&f.length>1&&O.every(_=>b.includes(_)),v=u?c:n?b[0]||null:C?null:e.room||null;return r`${A}${f.length?r`<div class="field">
              <span class="flabel">${b.length>1?"C\xF4modos":"C\xF4modo"}</span>
              <div class="chip-row ${n?"locked":""}">
                <button class="pick ${b.length?"":"on"}" ?disabled=${n} @click=${()=>this._setForm({room:null,rooms:[]})}>${G("x")}<span>Nenhum</span></button>
                ${s&&f.length>1?r`<button class="pick all-rooms ${C?"on":""}" aria-pressed=${C?"true":"false"} ?disabled=${n} @click=${()=>this._setForm(C?{room:null,rooms:[]}:{rooms:O,room:O[0]})}>${G("house")}<span>Todos</span></button>`:m}
                ${f.map(_=>r`<button class="pick ${b.includes(_.id)?"on":""}" aria-pressed=${b.includes(_.id)?"true":"false"} ?disabled=${n} @click=${()=>y(_.id)}>${G("door-open")}<span>${I(_.nome,22)}</span></button>`)}
              </div>
              ${n?r`<span class="field-hint">${G("lock")}<span>Vem ${i.length>1?"dos equipamentos":"do equipamento"}.</span></span>`:m}
            </div>`:m}
        ${x.length?r`<div class="field" data-varios=${u?"V\xE1rios bens":"V\xE1rios equipamentos"}>
              <span class="flabel">${u?i.length>1?"Bens":"Bem":i.length>1?"Equipamentos":"Equipamento"}</span>
              ${Ii({lit:{html:r,nothing:m},icon:G,items:x,bens:u,room:v,roomName:v&&(t.find(_=>_.id===v)||{}).nome||"",value:i,query:e.equipQ||"",more:!!e.equipMore,adding:!!e.equipAdding,autofocus:!!e.equipAdding,onQuery:_=>this._setForm({equipQ:_,equipMore:!1}),onMore:()=>this._setForm({equipMore:!0}),onAdd:()=>this._setForm({equipAdding:!0,equipQ:"",equipMore:!1}),onPick:_=>this._setForm({equips:[...i,_],equipQ:"",equipMore:!1,equipAdding:!1}),onRemove:_=>{let M=i.filter(E=>E!==_);this._setForm({equips:M,...u?{where:"bens"}:{},...M.length?{}:{room:l(i)[0]||e.room||null,...s?{rooms:l(i)}:{}}})}})}
            </div>`:m}`}_renderTodoForm(){let e=this._form,t=this._todoLists(),a=t.find(p=>p.id===e.list),s=yi(t),i=a?a.features:0,n=this._todoDueOk(),l=n&&!!(i&Oe.DUE_DATE),c=n&&!!(i&Oe.DUE_DATETIME),d=!!(i&Oe.DESCRIPTION);return r`
        ${this._sheetHead("Adicionar")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder="Ex.: Levar o carro na revisão" @input=${p=>this._setForm({title:p.target.value})} @keydown=${p=>p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${t.map(p=>r`<button class="pick list ${e.list===p.id?"on":""}" style=${Y(ue(st),this._dark)} title=${p.name} @click=${()=>this._setForm({list:p.id})}>${G(this._otherOwner(p.id)?"user-round":"list-checks")}<span>${I(s.get(p.id).short,30)}</span></button>`)}</div>
          ${a&&s.get(a.id).short!==a.name?r`<div class="field-hint">${G("list-checks")}<span>No Home Assistant: <b>${a.name}</b></span></div>`:m}
          ${a&&this._otherOwner(a.id)?r`<div class="field-hint">${G("user-round")}<span>Lista de <b>${this._otherOwner(a.id)}</b>: a tarefa aparece no CronologIA de ${this._otherOwner(a.id)}.</span></div>`:m}
        </div>
        ${l||c?r`${e.noDue?m:this._dateField("Prazo",e.date,p=>this._setForm({date:p}),"td-date")}
              ${a&&a.appDue&&!e.noDue?r`<p class="field-hint app-due" style="margin:-8px 0 12px">${G("info")}<span>Guardado no ResolvIA: a lista não aceita data.</span></p>`:m}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${e.noDue?"on":""}" @click=${()=>this._setForm({noDue:!e.noDue})}>${G("x")}<span>Sem prazo</span></button>
                ${c&&!e.noDue?r`<button class="pick ${e.timed?"on":""}" @click=${()=>this._setForm({timed:!e.timed})}>${G("clock")}<span>Com horário</span></button>
                      ${e.timed?Te(e.time,p=>this._setForm({time:p}),{label:"Hor\xE1rio",cls:"inline-time"}):m}`:m}
              </div>`:r`<p class="field-hint" style="margin:-6px 0 18px">${G("info")}<span>${n?"Essa lista n\xE3o aceita prazo.":"Os prazos est\xE3o desligados no ResolvIA."}</span></p>`}
        ${this._renderRoomEquipFields(e,{multiRoom:!0})}
        ${d&&this._app("event_details",!1)===!0?r`<div class="field fold-txt"><span class="flabel">Notas${(e.notes||"").trim()?r`<span class="fl-val">· ${I(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span><textarea rows="2" aria-label="Notas" .value=${e.notes} placeholder="Detalhes, links" @input=${p=>this._setForm({notes:p.target.value})}></textarea></div>`:m}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>${G("x")}Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${G("plus")}${e.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let e=this._form,t=this._todoLists().find(n=>n.id===e.list);if(!t)return this._showToast("Escolha a lista");if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=this._todoDueOk()&&!e.noDue&&t.features&(Oe.DUE_DATE|Oe.DUE_DATETIME),s=a&&e.timed&&t.features&Oe.DUE_DATETIME,i={summary:e.title.trim(),date:a?e.date:"",time:s?e.time:"",description:e.notes||"",...(e.equips||[]).length?{equips:e.equips}:(e.rooms||[]).length>1?{rooms:e.rooms}:e.room?{room:e.room}:{}};a&&!s&&!(t.features&Oe.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(t.id,i);let n=this._otherOwner(t.id);if(!n)try{localStorage.setItem(wn,JSON.stringify(t.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${I(t.name,24)}${n?` (lista de ${n})`:t.hidden?" (lista oculta aqui)":""}`)}catch(n){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${n.message}`)}}_renderMirrorSettings(e){let t=Eo(this._app("mirror",null)),a=this._ix().mirror||{},s=e.filter(d=>d.features&Oe.CREATE&&d.features&Oe.UPDATE&&!d.unavailable),i=d=>this._saveAppPrefs({mirror:{...t,...d}}),n=(d,p)=>r`<label class="field mirror-pick">
          <span class="flabel">${p}</span>
          <select class="select" aria-label=${`Lista: ${p}`} @change=${h=>i({[d]:h.target.value||null})}>
            <option value="" ?selected=${!t[d]}>Nenhuma (não levar)</option>
            ${s.map(h=>r`<option value=${h.id} ?selected=${t[d]===h.id}>${h.name}${h.features&Oe.DUE_DATE?"":" (sem prazo)"}</option>`)}
            ${t[d]&&!s.some(h=>h.id===t[d])?r`<option value=${t[d]} selected>${t[d]} (não encontrada)</option>`:m}
          </select>
        </label>`,l=t.maint_list||t.routine_list,c=this._scoreOn();return r`<div class="sub-overline" id="levar">Levar para o ResolvIA</div>
        <p class="sub-lead">Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data${c?" e os pontos":""}. Concluir lá vale como feito aqui${c?" (os pontos v\xE3o para quem concluiu)":""} e a tarefa volta com a data seguinte.</p>
        ${n("maint_list","Manuten\xE7\xF5es")} ${n("routine_list","Rotina da casa")}
        ${a.problem?r`<p class="data-note">${a.problem}</p>`:l?r`<p class="sub-lead with-icon">${G("circle-check")}<span>${N(a.count||0,"tarefa","tarefas")} ${t.maint_list&&t.routine_list&&t.maint_list!==t.routine_list?"nas listas":"na lista"}. Elas não se repetem no card de Tarefas daqui.</span></p>`:m}`}_resolviaOn(){return this._app("resolvia_on",!1)===!0}_renderTodosSettings(){let e=this._resolviaOn(),t=r`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${g=>this._saveAppPrefs({resolvia_on:g.target.checked?!0:null})} aria-label="Usar a integração com o ResolvIA" /><span class="track"></span></label>
      </div>`;if(!e)return r`<div class="panel" id="resolvia">
          ${this._secHead("list-checks","Tarefas do ResolvIA")}
          ${t}
        </div>`;let{lists:a,app:s}=this._todosAll(),i=this._listOwners(),n=this._ownersFromResolvia(),l=this._todoOwners(),c=(g,A)=>{let y={...i};A?y[g]=A:delete y[g],this._saveAppPrefs({todo_owner:Object.keys(y).length?y:null})},d=this._app("todo_hidden",null)||[],p=(g,A)=>this._saveAppPrefs({todo_hidden:A?d.filter(y=>y!==g):[...d,g]}),h=a.filter(g=>!g.hidden),u=h.reduce((g,A)=>g+A.due,0),f=h.reduce((g,A)=>g+A.overdue,0),x=this._todoDueOk(),w=x?`${N(a.length,"lista","listas")} \xB7 ${N(u,"tarefa com prazo","tarefas com prazo")}${f?`, ${N(f,"atrasada","atrasadas")}`:""}.`:`${N(a.length,"lista","listas")} \xB7 prazos desligados no ResolvIA.`,b=a.length?s?{tone:"ok",title:`Conectado ao ResolvIA ${s.versao||""}`.trim(),text:`${w} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${w} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."},$=g=>r`<div class="row switch-row ${g.hidden?"off":""}">
            <span class="tile" style=${Y(ue(st),this._dark)}>${G("list-checks")}</span>
            <div class="grow"><div class="label">${g.name}</div><div class="hint">${g.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":g.info==="resolvia"?"prazos desligados no ResolvIA":g.due?`${N(g.due,"tarefa com prazo","tarefas com prazo")}${g.overdue?` \xB7 ${N(g.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div>
              ${n?i[g.id]&&!g.hidden?r`<div class="owner-of">${G("user-round")}<span>De ${i[g.id]}</span></div>`:m:l.length&&!g.hidden?r`<div class="owner-pick" role="radiogroup" aria-label="De quem é ${g.name}">
                    <span class="op-l">De quem é</span>
                    ${["",...l].map(A=>{let y=A?T(i[g.id]||"")===T(A):!i[g.id];return r`<button class=${y?"on":""} role="radio" aria-checked=${y?"true":"false"} @click=${()=>c(g.id,A)}>${G(A?"user-round":"users")}<span>${A||"Todos"}</span></button>`})}
                  </div>`:m}
            </div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${ca(!g.hidden)} @change=${A=>p(g.id,A.target.checked)} aria-label="Mostrar ${g.name}" /><span class="track"></span></label>
          </div>`;return r`<div class="panel" id="resolvia">
        ${this._secHead("list-checks","Tarefas do ResolvIA")}
        ${t}
        <div class="sub-op"><div class="sub-box">
        <div class="ai-state ${b.tone}"><span class="dot"></span><div><b>${b.title}</b><span>${b.text}</span></div></div>
        ${a.length?r`${x?r`<div class="row switch-row">
                    <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do prazo.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${g=>this._saveAppPrefs({todo_off_calendar:g.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
                  </div>`:m}
              <div class="row switch-row">
                <div class="grow"><div class="label">${x?"Tarefas sem prazo na Agora":"Tarefas na Agora"}</div>${x?r`<div class="hint">Depois das que têm prazo.</div>`:m}</div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated",!1)} @change=${g=>this._saveAppPrefs({todo_undated:g.target.checked?!0:null})} aria-label=${x?"Tarefas sem prazo na Agora":"Tarefas na Agora"} /><span class="track"></span></label>
              </div>
              ${this._todoOwners().length?r`<div class="row switch-row">
                    <div class="grow"><div class="label">Criar tarefas nas listas dos outros</div><div class="hint" style="white-space:normal">Para pedir algo a outra pessoa da casa.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("todo_create_any",!1)===!0} @change=${g=>this._saveAppPrefs({todo_create_any:g.target.checked?!0:null})} aria-label="Criar tarefas nas listas dos outros" /><span class="track"></span></label>
                  </div>`:m}
              <div class="sub-overline">Listas</div>
              ${n?r`<p class="sub-lead">Escolha quais listas entram. De quem é cada uma se escolhe no ResolvIA (⋯ › Personalizar): a lista de uma pessoa só aparece no CronologIA dela.</p>`:this._todoOwners().length?r`<p class="sub-lead">Escolha quais listas entram e, se quiser, de quem é cada uma: a lista de uma pessoa só aparece no CronologIA dela (na Agora, no calendário e no Adicionar › Tarefa). Num aparelho sem pessoa da casa, aparece tudo.</p>`:m}`:m}
        ${ae(h,g=>g.id,$)}
        ${at(this,"todo-lists","Ocultas",a.length-h.length,()=>ae(a.filter(g=>g.hidden),g=>g.id,$))}
        ${a.length?this._renderMirrorSettings(a):m}
        ${a.length&&this._writable().length?r`<button class="row" @click=${()=>this._openBring()}>
              <span class="tile" style=${Y(this._accent(),this._dark)}>${G("download")}</span>
              <span class="grow"><div class="label">Trazer uma lista para o CronologIA</div><div class="hint" style="white-space:normal">Cada tarefa vira uma Rotina da casa.</div></span>
              ${G("chevron-right")}
            </button>`:m}
        </div></div>
      </div>`}_openBring(){this._openSheet("bring",{step:"pick",listId:null,preview:null,chosen:[],cal:this._kindCal("rotina"),error:null,busy:!1})}async _bringLoad(e){this._setForm({listId:e,step:"loading",error:null});try{let t=await this.api.bringPreview(e);if(this._sheet!=="bring")return;this._setForm({step:"review",preview:t,chosen:t.items.filter(a=>!a.exists).map(a=>a.uid)})}catch(t){this._setForm({step:"pick",error:t.message})}}async _bringRun(){let e=this._form;if(!(!e.chosen.length||e.busy)){this._setForm({busy:!0,error:null});try{let t=await this.api.bring(e.listId,e.cal,e.chosen,!0),a=this._cal(t.calendar);await this._closeSheet(),this._haptic("success"),this._showToast(`${N(t.created,"rotina criada","rotinas criadas")}${a?` em ${I(a.name,18)}`:""}${t.removed?" \xB7 tiradas do ResolvIA":""}`)}catch(t){this._sheet==="bring"&&this._setForm({busy:!1,error:t.message})}}}_renderBringSheet(){let e=this._form,t=new Date(this._now),a=(n,l)=>r`<div class="sheet-head">
        ${l?r`<button class="icon-btn back" @click=${l} aria-label="Voltar">${G("chevron-left")}</button>`:m}
        <h3 class="display">${n}</h3>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${G("x")}</button>
      </div>`,s=e.error?r`<div class="imp-error">${G("circle-alert")}<span>${e.error}</span></div>`:m;if(e.step==="loading")return r`${a("Trazer do ResolvIA")}<div class="imp-loading"><span class="spin">${G("loader-circle")}</span><span>Lendo a lista…</span></div>`;if(e.step==="review"&&e.preview){let n=e.preview,l=new Set(e.chosen),c=h=>this._setForm({chosen:l.has(h)?e.chosen.filter(u=>u!==h):[...e.chosen,h]}),d=this._writable(),p=h=>{let u=F(h.date),f=Z(u,t)===0?"hoje":oe(u,t,{long:!1,cap:!1});return`${h.every?`a partir de ${f}`:f}${h.time?` \xE0s ${h.time}`:""}`};return r`
          ${a(n.name,()=>this._setForm({step:"pick",preview:null,error:null}))}
          <p class="sheet-note top">Cada tarefa marcada vira uma <b>Rotina da casa</b>.${n.canDelete?" Depois, ela sai do ResolvIA.":""}</p>
          ${n.items.length?r`<div class="bring-list">
                ${n.items.map(h=>r`<button class="bring-row ${l.has(h.uid)?"":"off"}" role="checkbox" aria-checked=${l.has(h.uid)?"true":"false"} @click=${()=>c(h.uid)}>
                    <span class="chk sq ${l.has(h.uid)?"on":""}">${l.has(h.uid)?G("check"):m}</span>
                    <span class="bring-tx"><b>${h.summary}</b><small>${[h.points>0?`+${h.points}`:"",h.every?`volta ${N(h.every,"dia","dias")} depois de feita`:"s\xF3 uma vez",p(h),h.exists?"j\xE1 existe uma rotina com esse nome":""].filter(Boolean).join(" \xB7 ")}</small></span>
                  </button>`)}
              </div>`:r`<p class="empty-line">Nenhuma tarefa para trazer nessa lista.</p>`}
          ${n.items.length>1?r`<div class="bring-all"><button class="text-btn" @click=${()=>this._setForm({chosen:e.chosen.length===n.items.length?[]:n.items.map(h=>h.uid)})}>${e.chosen.length===n.items.length?"Desmarcar todas":"Marcar todas"}</button></div>`:m}
          ${d.length>1?r`<div class="field"><span class="flabel">Calendário das rotinas</span>
                <div class="chip-row">${d.map(h=>r`<button class="pick list ${e.cal===h.id?"on":""}" style=${Y(h.color,this._dark)} @click=${()=>this._setForm({cal:h.id})}><span class="dot"></span><span>${I(h.name,22)}</span></button>`)}</div>
              </div>`:m}
          ${s}
          <div class="sheet-actions">
            <button class="btn primary" ?disabled=${!e.chosen.length||e.busy} @click=${()=>this._bringRun()}>${G("download")}${e.busy?"Trazendo\u2026":e.chosen.length?`Trazer ${N(e.chosen.length,"tarefa","tarefas")}`:"Nenhuma marcada"}</button>
          </div>`}let i=this._todosAll().lists.filter(n=>!n.unavailable);return r`
        ${a("Trazer do ResolvIA")}
        <p class="sheet-note top">Escolha a lista.</p>
        <div class="bring-lists">
          ${i.map(n=>r`<button class="row" @click=${()=>this._bringLoad(n.id)}>
              <span class="tile" style=${Y(ue(st),this._dark)}>${G("list-checks")}</span>
              <span class="grow"><div class="label">${n.name}</div><div class="hint">${N(n.open,"tarefa pendente","tarefas pendentes")}</div></span>
              ${G("chevron-right")}
            </button>`)}
        </div>
        ${s}`}};var yn='"CR Caveat", "Segoe Print", "Bradley Hand", cursive',Qe=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Tl={framboesa:{id:"framboesa",fill:"#E8508A",ink:"#A3124F"}},kn=/^\s*(☐|☑|\[ \]|\[[xX]\])/,zl=/^\s*(☑|\[[xX]\])/,Ol=6,ql=180*1e3,An=[1,3,5,10],qs=o=>`${o.bloco_id}|${o.inicio}|${o.amanha?1:0}`,Fl=["vermelho","laranja","verde","azul","lilas"],Pl=()=>new RegExp(`\\*\\*(?=\\S)([^\\n]*?\\S)\\*\\*|\\+\\+(?=\\S)([^\\n]*?\\S)\\+\\+|\\{(${Fl.join("|")}):([^{}\\n]+)\\}`,"g"),Il=Array.from({length:7},()=>r`<i></i>`);function Ha(o,e={}){let t=String(o||""),a=[],s=Pl(),i=0,n,l=c=>c>i&&a.push({text:t.slice(i,c),bold:!!e.bold,big:!!e.big,color:e.color||""});for(;n=s.exec(t);)l(n.index),n[1]!=null?a.push(...Ha(n[1],{...e,bold:!0})):n[2]!=null?a.push(...Ha(n[2],{...e,big:!0})):a.push(...Ha(n[4],{...e,color:n[3]})),i=n.index+n[0].length;return l(t.length),a}var Dn=o=>Ha(o).map(e=>e.bold||e.big||e.color?r`<span class="fmt ${e.bold?"b":""} ${e.big?"big":""} ${e.color?`c-${e.color}`:""}">${e.text}</span>`:e.text),Nl=o=>String(o||"").split(`
`).reduce((e,t)=>e+Math.max(1,Math.ceil(t.length/36)),0)>Ol;function Rl(o,e=new Date){let t=(l,c)=>{let[d,p]=l.split(":").map(Number),h=new Date(e.getFullYear(),e.getMonth(),e.getDate(),d,p);return(c||h.getTime()<=e.getTime())&&h.setDate(h.getDate()+1),h.getTime()},a=o||[],s=a.find(l=>!l.agora),i=a.find(l=>l.agora),n=[...s?[t(s.inicio,s.amanha)]:[],...i&&i.fim?[t(i.fim,!1)]:[]];return n.length?Math.min(...n):1/0}var Mn=o=>class extends o{_memoriaOn(){return this._app("memoria_on",!1)===!0}_memoColor(e){return ue(e)||Tl[e]||this._accent()}async _loadMemoria(e=!1){if(!this.api||!this.api.memoriaNow)return;this._memoBusy=!0,this._memoAt=Date.now();let t=!!this._full;try{this._memo=await this.api.memoriaNow(e,new Date,t),this._memoCasa=t}catch(a){this._memo={ligado:!0,encontrado:!0,erro:a.message||String(a),trechos:[]}}this._memoBusy=!1,this._memoUntil=Rl(this._memo.trechos),this.requestUpdate()}_memoStep(e){let t=this._memo,a=t&&t.trechos||[];if(!a.length||!a[0].agora)return!1;let s=this._memoPick?Math.max(0,a.findIndex(l=>qs(l)===this._memoPick)):0,i=Math.max(0,Math.min(a.length-1,s+e));if(i===s)return!1;this._memoPick=i?qs(a[i]):null,clearTimeout(this._memoBack);let n=Number(this._app?this._app("memo_back",null):null);return i&&(this._memoBack=setTimeout(()=>(this._memoPick=null,this._memoTop()),An.includes(n)?n*6e4:ql)),this._memoTop(),!0}_memoTop(){this.requestUpdate(),Promise.resolve(this.updateComplete).then(()=>{let e=this.renderRoot&&this.renderRoot.querySelector&&this.renderRoot.querySelector(".memo-full .memo-ink");e&&(e.scrollTop=0)})}_memoriaTick(){if(!this._ready||!this._memoriaOn()||this._memoBusy||this._view().name!=="now")return;let e=Date.now();!!this._memoCasa==!!this._full&&this._memoAt&&e-this._memoAt<6e4&&e<(this._memoUntil||1/0)||this._loadMemoria()}_renderMemoriaPanel(e=!1){let t=this._memo;if(!this._memoriaOn()||!t||!t.ligado||t.erro||!(t.trechos||[]).length)return m;let a=t.trechos[0].agora?t.trechos[0]:null;if(!a)return m;let s=e?t.trechos:[a],i=e&&this._memoPick?Math.max(0,s.findIndex($=>qs($)===this._memoPick)):0,n=s[i],l=n.texto||"",c=n.texto_formatado||l,d=!e&&Nl(l),p=e||!!this._memoOpen&&d,h=c.split(`
`),u=`desde ${n.ontem?"ontem \xE0s ":""}${n.inicio}${n.fim?` at\xE9 ${n.fim}`:""}`,f=r`<span class="memo-cover"></span><span class="memo-stack"></span>
        <span class="memo-leaf ${n.papel||"pautado"}">
          <span class="memo-top"><span class="memo-name">${n.bloco}${n.outros?r` <small>+${n.outros}</small>`:m}</span>${e?r`<span class="memo-nav">
                <button class="memo-step" ?hidden=${i===0} aria-label="Horário anterior" title="Horário anterior" @click=${()=>this._memoStep(-1)}>${Qe("chevron-left")}</button>
                <span class="memo-pin ${i?"next":""}">${Qe("clock")}${n.amanha?"amanh\xE3 ":""}${n.inicio}</span>
                <button class="memo-step" ?hidden=${i>=s.length-1} aria-label="Próximo horário" title="Próximo horário" @click=${()=>this._memoStep(1)}>${Qe("chevron-right")}</button>
              </span>`:r`<span class="memo-pin">${Qe("clock")}${n.inicio}</span>`}</span>
          ${l.trim()?r`<span class="memo-ink ${n.letra==="normal"?"normal":""} ${p?"open":""}">${h.map(($,g)=>{let A=kn.test($),y=A?$.replace(kn,"").trimStart():$;return r`${A?r`<span class="ck ${zl.test($)?"done":""}"><span class="box">${Qe("check")}</span><span>${Dn(y)}</span></span>`:r`<span>${Dn(y)}</span>`}${g<h.length-1?`
`:""}`})}</span>`:r`<span class="memo-ink empty">Folha em branco.</span>`}
        </span>
        <span class="memo-spiral" aria-hidden="true">${Il}</span>`,x=i?`${n.bloco}: a folha de ${n.amanha?"amanh\xE3 \xE0s ":""}${n.inicio}`:`${n.bloco}: a folha de agora, ${u}`,w=t.painel&&!e?r`<a class="memo-pad" href=${t.painel} target="_top" aria-label=${x}>${f}</a>`:r`<div class="memo-pad" role="group" aria-label=${x}>${f}</div>`,b=Y(this._memoColor(n.cor),this._dark);return e?r`<div class="panel memo memo-full${i?" memo-ahead":""}" id="memoria" style=${b}>${w}</div>`:r`<div class="panel memo" id="memoria" style=${b}>
        <div class="chores-head sec-head"><span class="sec-ic memo-ic">${Qe("notebook-pen")}</span><span class="overline">MemorIA</span><small>${u}</small></div>
        ${w}
        ${d?r`<button class="text-btn memo-more" aria-expanded=${p?"true":"false"} @click=${()=>(this._memoOpen=!p,this.requestUpdate())}>${Qe(p?"chevron-up":"chevron-down")}${p?"Ver menos":"Ver mais"}</button>`:m}
      </div>`}_renderMemoriaSettings(){let e=this._memoriaOn(),t=this._memo,a=r`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Trechos no Agora</div><div class="hint" style="white-space:normal">${e?"A folha de agora, de cada pessoa.":"Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${l=>this._saveMemoria(l.target.checked)} aria-label="Trechos do MemorIA no Agora" /><span class="track"></span></label>
      </div>`,s=m;if(e&&t&&t.ligado){let l=t.encontrado?t.erro?"warn":"ok":"off",c=(t.trechos||[]).length;s=r`<div class="sub-op"><div class="sub-box"><div class="ai-state ${l}" id="memoria-estado"><span class="dot"></span><div>
          <b>${t.encontrado?t.erro?"N\xE3o consegui falar com o MemorIA":`Conectado ao MemorIA ${t.versao||""}`:"MemorIA n\xE3o encontrado"}</b>
          <span>${t.encontrado?t.erro?t.erro:c&&t.trechos[0].agora?`Agora: ${t.trechos[0].bloco}, desde ${t.trechos[0].inicio}.`:"Nada agora.":"Instale o MemorIA 1.13.0 ou mais novo no mesmo Home Assistant."}</span>
        </div></div></div></div>`}let i=Number(this._app("memo_back",null))||3,n=e?r`<div class="sub-op"><div class="sub-box"><div class="field" id="memoria-volta">
            <span class="flabel">Voltar para a folha de agora</span>
            <div class="chip-row">${An.map(l=>r`<button class="pick ${i===l?"on":""}" aria-pressed=${i===l?"true":"false"} @click=${()=>this._saveAppPrefs({memo_back:l===3?null:l})}>${Qe("hourglass")}<span>${l} min</span></button>`)}</div>
            <span class="field-hint">${Qe("info")}<span>Na tela cheia, depois de ver os próximos horários.</span></span>
          </div></div></div>`:m;return r`<div class="panel" id="memoria-config">
        ${this._secHead("notebook-pen","MemorIA")}
        ${a}
        ${s}
        ${n}
      </div>`}async _saveMemoria(e){await this._saveAppPrefs({memoria_on:e?!0:null}),this._memo=null,this._memoAt=0,e?await this._loadMemoria(!0):this.requestUpdate()}},Sn=qe`
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
    font-family: ${_e(yn)};
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
  /* 1.98.0: the Tela cheia: ‹ the time › (a next one: in the color of the ink, not of now) */
  .memo-nav {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: none;
  }
  .memo-pin.next {
    color: var(--ink);
    font-weight: 700;
  }
  .memo-step {
    width: 38px;
    height: 38px;
    flex: none;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--ink-soft);
    background: color-mix(in srgb, var(--ink-soft) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--ink-soft) 25%, transparent);
    font: inherit;
    cursor: pointer;
  }
  .memo-step[hidden] {
    display: grid;
    visibility: hidden;
  }
  .memo-step:hover {
    background: color-mix(in srgb, var(--ink-soft) 22%, transparent);
  }
  .memo-step .i {
    width: 22px;
    height: 22px;
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
    font-family: ${_e(yn)};
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
  /* MemorIA 1.32.0: a part in bold, bigger (for a title, in the same line of the paper) or in a color, as there */
  .memo-ink .fmt.b {
    font-weight: 700;
  }
  .memo-ink .fmt.big {
    font-size: 1.35em;
  }
  .memo-ink .fmt[class*="c-"] {
    color: var(--fc);
  }
  .memo-ink .c-vermelho { --fc: #c42a1f; }
  .memo-ink .c-laranja { --fc: #b45309; }
  .memo-ink .c-verde { --fc: #3f7a17; }
  .memo-ink .c-azul { --fc: #0b67a8; }
  .memo-ink .c-lilas { --fc: #6d3fd6; }
  :host([dark]) .memo-ink .c-vermelho { --fc: #ff7a70; }
  :host([dark]) .memo-ink .c-laranja { --fc: #ffa23e; }
  :host([dark]) .memo-ink .c-verde { --fc: #8bd45f; }
  :host([dark]) .memo-ink .c-azul { --fc: #62b5ff; }
  :host([dark]) .memo-ink .c-lilas { --fc: #b99bff; }
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
`;var je=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Ll=o=>(o||"?").trim().charAt(0).toUpperCase(),Hl=12*36e5,jl={evento:"calendar",remedio:"pill",rotina:"spray-can",tarefa:"list-checks",manutencao:"wrench"},Vl={evento:["compromisso","compromissos"],remedio:["rem\xE9dio","rem\xE9dios"],rotina:["rotina","rotinas"],tarefa:["tarefa","tarefas"],manutencao:["manuten\xE7\xE3o","manuten\xE7\xF5es"]},Bl={manha:12,tarde:18,noite:24},Cn=(o,e)=>{let[t,a]=String(e).split(":").map(Number),s=new Date(o);return s.setHours(t,a||0,0,0),s};function Ul({events:o=[],meds:e=[],routines:t=[],maint:a=[],todos:s=[],bills:i=[],now:n=new Date,isDone:l=()=>!1}={}){let c=B(n),d=q(c,1),p=Cn(d,"12:00"),h=[],u=[],f=[],x=[],w=[],b={manha:[],tarde:[],noite:[],dia:[]};for(let y of o)y.kind||y.todo||l(y)||(y.allDay||y.end-y.start>=Hl?y.start<d&&y.end>c&&w.push(y):y.start>=d?y.start<p&&f.push({kind:"evento",at:y.start,ref:y}):y.end>n&&(y.start<=n?h:u).push({kind:"evento",at:y.start,ref:y}));for(let y of e)if(!(y.taken||y.state==="tomado"||y.state==="pulado"))if(y.state==="atrasado")x.push({kind:"remedio",at:y.allDay?null:new Date(y.start),ref:y});else if(y.allDay||!y.time)b.dia.push({kind:"remedio",at:null,ref:y});else{let O=new Date(y.start);(O<=n?h:u).push({kind:"remedio",at:O,ref:y})}for(let y of t){if(y.done)continue;let O=y.period||(y.time?He(Number(String(y.time).slice(0,2))):"");if(y.late>0||y.yesterday||O&&ya(O,n)){x.push({kind:"rotina",at:null,ref:y});continue}let C=y.time?Cn(c,y.time):null;C&&C>n?u.push({kind:"rotina",at:C,ref:y}):b[O||"dia"].push({kind:"rotina",at:null,ref:y})}for(let y of s){if(y.done||y.undated)continue;let O=y.allDay?null:new Date(y.due);y.overdue?x.push({kind:"tarefa",at:O,ref:y}):y.days===0?O?(O>n?u:x).push({kind:"tarefa",at:O,ref:y}):b.dia.push({kind:"tarefa",at:null,ref:y}):y.days===1&&O&&O<p&&f.push({kind:"tarefa",at:O,ref:y})}for(let y of a)y.days<0||y.state==="vencida"?x.push({kind:"manutencao",at:null,ref:y}):y.days===0&&b.dia.push({kind:"manutencao",at:null,ref:y});let $=(y,O)=>y.at-O.at;u.sort($),h.sort($),f.sort($),x.sort((y,O)=>(y.at?0:1)-(O.at?0:1)||(y.at&&O.at?y.at-O.at:0));let g=Sa(u,y=>y.at),A=i.filter(y=>!y.paid&&(y.overdue||Z(F(y.due),c)<=3));return{current:h,next:g,later:u.slice(g.length),soon:f.slice(0,3),late:x,groups:b,contas:A,allDay:w}}function Yl(o=new Date){let e=o.getHours(),t=He(e),a=ze.map(i=>i.id);return(e<5?["noite"]:a.slice(a.indexOf(t))).map(i=>{let n=be(i),l=e<5?5:Bl[i],c=new Date(o);c.setHours(l,0,0,0);let d=p=>`${String(p).padStart(2,"0")}:00`;return{id:i,label:n.label,icon:n.icon,now:i===t,end:d(l),left:i===t?c-o:0,span:`${d(n.from)} \xE0s ${d(l)}`}})}function En(o){let e=[...new Set(o.map(t=>t.kind))];if(e.length===1){let[t,a]=Vl[e[0]];return N(o.length,t,a)}return N(o.length,"item","itens")}var Tn=o=>class extends o{_painelPlan(e){let t=this._ix(),a=this._awayNow&&this._awayNow();return Ul({events:e,meds:t.meds||[],routines:a?[]:t.routines||[],maint:a?[]:t.maint||[],todos:a?[]:this._todos().items||[],bills:this._billsList(),now:new Date(this._now),isDone:s=>!!this._checkOf(s)})}_renderPainel({head:e,events:t,memo:a,top:s=m,placar:i=m}){let n=new Date(this._now),l=this._painelPlan(t),c=!!(this._embedChat&&this._conv&&this._conv.aberta),d=a!==m||c;return r`<section class="page now-page full-page painel">
        ${e}
        <div class="full-cols pn-cols ${d?"three":"two"}">
          <div class="pn-col pn-time">${s}${this._pnNow(l,n)}${this._pnHero(l,n)}${this._pnLater(l,n)}</div>
          <div class="pn-col pn-day">${this._pnTasks(l,n)}${i}</div>
          ${c?r`<div class="pn-chat-slot" id="lugar-conversa" aria-hidden="true"></div>`:d?r`<div class="full-memo">${a}</div>`:m}
        </div>
      </section>`}_tellChatSlot(){if(!this._embedChat)return;let e=this.renderRoot&&this.renderRoot.querySelector("#lugar-conversa"),t=e?e.getBoundingClientRect():null,a=t?{x:Math.round(t.left),y:Math.round(t.top),w:Math.round(t.width),h:Math.round(t.height)}:null,s=JSON.stringify(a);if(s!==this._slotSent){this._slotSent=s;try{window.parent.postMessage({painel:"lugar",...a||{w:0,h:0,x:0,y:0}},location.origin)}catch{}}}_pnAllDay(e,t){if(!e.length)return m;let a=4,s=e.length>a?e.slice(0,a-1):e;return r`<div class="pn-sep"><span>O dia todo</span></div><div class="pn-allday" role="list" aria-label="O dia todo">
        ${s.map(i=>{let n=q(new Date(i.end),i.allDay?-1:0),l=i.end-i.start>864e5&&Z(n,t)>=1?` \xB7 at\xE9 ${le(n,t)}`:"";return r`<button class="pn-chip" role="listitem" style=${Y(this._colorOfEvent(i),this._dark)} @click=${()=>this._openEvent(i)}>${je("calendar")}<span>${i.summary}${l}</span></button>`})}
        ${s.length<e.length?r`<span class="pn-chip more" role="listitem">+${e.length-s.length}</span>`:m}
      </div>`}_pnNow(e,t){return e.current.length?r`<div class="pn-now" role="group" aria-label="Acontecendo agora" style=${Y(this._pnColor(e.current[0]),this._dark)}>
        <span class="pn-now-badge" aria-hidden="true">${je("activity")}</span>
        <div class="pn-now-body">
          <div class="pn-now-head"><span class="overline">Acontecendo agora</span></div>
          ${ae(e.current,a=>this._pnKey(a),a=>this._pnLine(a,t,{live:!0}))}
        </div>
      </div>`:m}_pnHero(e,t){let a=m;if(!e.next.length){let n=!e.current.length;return r`${a}<div class="hero-ev ticket empty pn-hero">
          <span class="tk-main">
            <span class="tk-clock">${this._clock(null,t)}</span>
            <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">${n?"Nada mais com hor\xE1rio hoje":"Nada depois disso hoje"}</span></span>
          </span>
        </div>`}let s=e.next[0],i=pt(s.at-t);if(e.next.length===1&&s.kind==="evento"){let n=s.ref,l=this._cal(n.cal);return r`${a}${this._ticket(n,{label:"A seguir",pill:i,when:r`<b>${j(n.start)}</b> – ${j(n.end)} · hoje`,stub:r`<span class="dot"></span><span>${[l&&l.name,n.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t})}`}return r`${a}<div class="hero-ev ticket many pn-hero" role="group" aria-label="A seguir: ${En(e.next)} às ${j(s.at)}" style=${Y(this._pnColor(s),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(s.kind==="evento"?s.ref:null,s.kind==="evento"?t:s.at)}</span>
          <span class="tk-info">
            <span class="tk-top"><span class="overline">A seguir</span><span class="tk-pill">${je("clock","sm")}${i}</span></span>
            <span class="pn-big"><b>${j(s.at)}</b><small>${En(e.next)}</small></span>
          </span>
        </span>
        <span class="tk-cut" aria-hidden="true"></span>
        <span class="tk-list">${ae(e.next,n=>this._pnKey(n),n=>this._pnLine(n,t,{hero:!0}))}</span>
      </div>`}_pnLater(e,t){return!e.later.length&&!e.soon.length&&!e.allDay.length?m:r`<div class="panel pn-later" id="depois">
        ${this._panelHead("calendar-clock","accent","Depois",e.later.length?`${e.later.length} at\xE9 o fim do dia`:"nada mais hoje")}
        <div class="pn-tl">
          ${ae(e.later,a=>this._pnKey(a),a=>this._pnLine(a,t,{time:!0}))}
          ${e.soon.length?r`<div class="pn-sep"><span>Amanhã cedo</span></div>
                ${ae(e.soon,a=>this._pnKey(a),a=>this._pnLine(a,t,{time:!0,soon:!0}))}`:m}
          ${this._pnAllDay(e.allDay,t)}
        </div>
      </div>`}_pnTasks(e,t){let a=Yl(t).filter(c=>e.groups[c.id].length),s=e.late.length+a.reduce((c,d)=>c+e.groups[d.id].length,0)+e.groups.dia.length+e.contas.length,i=[e.late,e.groups.manha,e.groups.tarde,e.groups.noite,e.groups.dia].some(c=>c.some(d=>d.kind==="rotina")),n=(c,d,p="",h="")=>r`<div class="pn-grp ${h}">${je(c)}<span>${d}</span>${p?r`<small>${p}</small>`:m}</div>`,l=(c,d=!1)=>ae(c,p=>this._pnKey(p),p=>this._pnLine(p,t,{late:d}));return r`<div class="panel pn-tasks ${e.late.length?"alert":""}" id="tarefas-do-dia">
        ${this._panelHead("list-checks","ok","Tarefas do dia",s?`${s} para fazer`:"tudo feito")}
        ${i?this._renderPartPick():m}
        ${e.late.length?r`${n("triangle-alert","Atrasadas",String(e.late.length),"late")}${l(e.late,!0)}`:m}
        ${a.map(c=>r`${n(c.icon,c.label,c.now?`at\xE9 ${c.end} \xB7 ${Math.round(c.left/6e4)===1?"falta":"faltam"} ${It(c.left)}`:c.span,c.now?"cur":"")}${l(e.groups[c.id])}`)}
        ${e.groups.dia.length?r`${n("sun","Qualquer hora","hoje")}${l(e.groups.dia)}`:m}
        ${e.contas.length?r`${n("receipt","Contas a pagar")}${ae(e.contas,c=>c.id,c=>this._pnBill(c,t))}`:m}
        ${s?m:r`<p class="empty-line all-done">${je("circle-check")}Tudo feito hoje.</p>`}
      </div>`}_pnKey(e){return`${e.kind}|${e.ref.key||`${e.ref.cal}|${e.ref.uid}|${+e.ref.start}`}`}_pnColor(e){return e.kind==="tarefa"?ue(st):this._colorOfEvent(e.ref)}_pnWho(e){if(!e)return m;let t=(this._ix().people||[]).some(a=>a.pet&&T(a.name)===T(e));return r`<span class="pn-av ${t?"pet":""}" style=${Y(this._pColor(e),this._dark)} title=${e}>${t?je("paw-print"):Ll(e)}</span>`}_pnLine(e,t,{time:a=!1,hero:s=!1,soon:i=!1,late:n=!1,live:l=!1}={}){let c=e.ref,d=c.summary,p=[],h=m,u="",f=()=>this._openIndexItem(c),x=A=>A>0&&this._scoreOn()?r`<span class="pts">+${A}</span>`:m,w=(A,y)=>this._pickWho()?this._renderQuickWho(c.summary,A,y):null;if(e.kind==="evento"){let A=this._cal(c.cal);p=[a||s?`${s?`${j(c.start)} \u2013 `:"at\xE9 "}${j(c.end)}`:`at\xE9 ${j(c.end)}`,A&&A.name,c.location],f=()=>this._openEvent(c)}else if(e.kind==="remedio")u=c.who,p=[c.dose?`Dose: ${c.dose}`:"",c.state==="atrasado"?`atrasado${c.late_min?` ${c.late_min<60?`${c.late_min} min`:`${Math.floor(c.late_min/60)} h`}`:""}`:c.state==="agora"?"hora de tomar":""],i||(h=r`<button class="dose-btn ${c.state}" aria-label="${this._doseVerb(c.who,!0)}: ${c.summary}" @click=${()=>this._check(c,"remedio")}>${je("check")}${this._doseVerb(c.who)}</button>`);else if(e.kind==="rotina"){let A=De(c);p=[n||!e.at?Ht(c,t):c.who];let y=w(A,O=>this._markDone(c,"rotina",O));h=y?r`${x(A)}${y}`:r`${x(A)}${this._renderChk(c)}`,y||(u=c.who)}else if(e.kind==="tarefa"){let A=this._scoreOn()?(this._score()||{}).participants||[]:[],y=c.allDay?"":j(new Date(c.due));p=[c.overdue?c.days<0?c.days===-1?"venceu ontem":`venceu h\xE1 ${-c.days} dias`:`venceu${y?` \xE0s ${y}`:" hoje"}`:i?"":y&&!a?`at\xE9 ${y}`:"",c.listName,"ResolvIA"],f=()=>this._openSheet("todo",{key:c.key}),i||(h=c.points>0&&A.length&&A.length<=3?r`${x(c.points)}${this._renderQuickWho(c.summary,c.points,O=>this._todoDone(c,!0,O))}`:r`${x(c.points)}<button class="chk sq" @click=${()=>this._todoDone(c,!0)} aria-label="Concluir ${c.summary}"></button>`)}else if(e.kind==="manutencao"){p=[c.days<-1?`venceu h\xE1 ${-c.days} dias`:c.days===-1?"venceu ontem":"\xE9 hoje",Wo(c)];let A=c.canMove?w(c.points||0,y=>this._maintDone(c,y)):null;h=c.canMove?A?r`${x(c.points)}${A}`:r`${x(c.points)}<button class="dose-btn ${c.days<0?"atrasado":"agora"}" @click=${()=>this._maintDone(c)}>${je("check")}Feito</button>`:m,A||(u=c.who)}let b=p.filter(Boolean).join(" \xB7 "),$=l&&e.kind==="evento"?c.end-c.start:0,g=$>0?Math.min(100,Math.max(0,Math.round((t-c.start)/$*100))):-1;return r`<div class="pn-line ${e.kind} ${n?"late":""} ${i?"soon":""} ${s||l?"big":""}" style=${Y(this._pnColor(e),this._dark)}>
        ${a?r`<span class="pn-t">${j(e.at)}</span><span class="pn-dot" aria-hidden="true"></span>`:m}
        <span class="pn-ic" aria-hidden="true">${je(jl[e.kind])}</span>
        <button class="pn-tx" @click=${f}><b>${d}</b>${b?r`<small>${b}</small>`:m}${g>=0?r`<span class="pn-went" aria-hidden="true"><i style="width:${g}%"></i></span>`:m}</button>
        ${u?this._pnWho(u):m}
        ${h}
      </div>`}_pnBill(e,t){let a=F(e.due),s=Z(a,t),i=e.overdue?s===-1?"venceu ontem":s<0?`venceu h\xE1 ${-s} dias`:"venceu":s===0?"vence hoje":s===1?"vence amanh\xE3":`vence em ${s} dias`,n=e.value!=null?new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value):"";return r`<div class="pn-line conta ${e.overdue?"late":""}" style=${Y(ue("ouro"),this._dark)}>
        <span class="pn-ic pn-due ${s<=0?"today":""}" aria-hidden="true"><b>${a.getDate()}</b></span>
        <button class="pn-tx" @click=${()=>e.source==="gerencia"?this._openSheet("bill",{b:e}):this._openIndexItem(e.item)}><b>${e.title}${n?` \xB7 ${n}`:""}</b><small>${[i,e.source==="gerencia"?"GerencIA":e.sub].filter(Boolean).join(" \xB7 ")}</small></button>
        <button class="dose-btn ${e.overdue?"atrasado":s===0?"agora":""}" ?disabled=${e.busy} @click=${()=>this._pay(e)}>${je("check")}Paguei</button>
      </div>`}},zn=qe`
  /* 1.96.0: the top of the panel in one line, half the height: Hoje and the date on the left, the clock on the right */
  .painel > .brand-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 2px 14px;
  }
  .painel > .brand-head > .title-row {
    display: contents;
  }
  .painel > .brand-head .page-title {
    order: 1;
    flex: none;
    margin: 0;
    font-size: 30px;
  }
  .painel > .brand-head .page-title > .page-ic {
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }
  .painel > .brand-head .page-title > .page-ic .i {
    width: 19px;
    height: 19px;
  }
  .painel > .brand-head > .status {
    order: 2;
    flex: 1;
    min-width: 0;
    margin: 4px 0 0;
    font-size: 15px;
  }
  .painel > .brand-head .full-clock {
    order: 3;
    margin: 0;
    font-size: 44px;
  }
  .painel > .brand-head .full-btn {
    order: 4;
    width: 40px;
    height: 40px;
    margin: 0;
  }
  /* 1.97.0: the Conversa of the CorrerIA around (open: pressed; a new answer: the dot) */
  .painel > .brand-head .full-btn.conv {
    position: relative;
    width: 46px;
    height: 46px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
  }
  .painel > .brand-head .full-btn.conv.on {
    box-shadow: 0 0 0 3px var(--rv-accent-soft);
  }
  .painel > .brand-head .full-btn.conv.novo::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--rv-late);
    border: 2px solid var(--rv-bg);
  }
  /* the columns: the time (A seguir, Depois), the day (Tarefas do dia, the placar) and the sheet of the MemorIA */
  .pn-col {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  /* 1.97.0: the place of the Conversa of the CorrerIA (it draws it over this, in its own page) */
  .pn-chat-slot {
    min-height: 300px;
    border-radius: 20px;
  }
  .pn-col > .panel {
    margin-bottom: 16px;
  }
  .pn-col > .hero-ev {
    margin-bottom: 16px;
  }
  .pn-allday {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 6px 4px 4px 92px;
  }
  .pn-chip.more {
    background: var(--rv-surface-2);
    color: var(--rv-muted);
  }
  .pn-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 100%;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--cs);
    color: var(--rv-text);
    font-size: 15px;
    font-weight: 600;
  }
  .pn-chip .i {
    width: 16px;
    height: 16px;
    color: var(--ci);
  }
  :host([dark]) .pn-chip .i {
    color: var(--c);
  }
  .pn-chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* 1.97.0: Acontecendo agora, the first thing (above A seguir): what goes on now */
  .pn-now {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
    padding: 12px 8px 10px 16px;
    border-radius: 22px;
    background: color-mix(in srgb, var(--c) 12%, var(--rv-surface));
    border: 1.5px solid color-mix(in srgb, var(--c) 50%, var(--rv-line));
    box-shadow: var(--rv-shadow);
  }
  .pn-now-head {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 6px 10px 2px;
  }
  .pn-now-head .overline {
    color: var(--ci);
    font-weight: 700;
    font-size: 15px;
  }
  :host([dark]) .pn-now-head .overline {
    color: var(--c);
  }
  /* the big round icon, the size of the clock of A seguir, with its ring and a pulse around it */
  .pn-now-badge {
    flex: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--rv-surface);
    color: var(--ci);
    box-shadow:
      inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
      0 0 0 0 color-mix(in srgb, var(--c) 50%, transparent);
    animation: pn-live 2.2s ease-out infinite;
  }
  :host([dark]) .pn-now-badge {
    color: var(--c);
  }
  .pn-now-badge .i {
    width: 40px;
    height: 40px;
    stroke-width: 2.4;
  }
  .pn-now-body {
    flex: 1;
    min-width: 0;
  }
  @keyframes pn-live {
    0% {
      box-shadow:
        inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
        0 0 0 0 color-mix(in srgb, var(--c) 50%, transparent);
    }
    70%,
    100% {
      box-shadow:
        inset 0 0 0 6px color-mix(in srgb, var(--c) 75%, transparent),
        0 0 0 14px transparent;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .pn-now-badge {
      animation: none;
    }
  }
  .pn-now .pn-line.big .pn-tx b {
    font-size: 30px;
  }
  .pn-went {
    display: block;
    width: 100%;
    height: 5px;
    margin-top: 7px;
    border-radius: 3px;
    background: color-mix(in srgb, var(--c) 18%, transparent);
    overflow: hidden;
  }
  .pn-went i {
    display: block;
    height: 100%;
    border-radius: 3px;
    background: var(--c);
  }
  .pn-big {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-top: 2px;
  }
  .pn-big b {
    font-family: var(--rv-display);
    font-size: 52px;
    font-weight: 600;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .pn-big small {
    font-size: 18px;
    color: var(--rv-text-2);
  }
  /* one line: the time (Depois), the icon, the text, who, the button */
  .pn-line {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 56px;
    padding: 5px 4px;
  }
  .pn-t {
    width: 58px;
    flex: none;
    text-align: right;
    font-family: var(--rv-display);
    font-size: 23px;
    font-weight: 600;
    color: var(--rv-text-2);
    font-variant-numeric: tabular-nums;
  }
  .pn-dot {
    width: 12px;
    height: 12px;
    flex: none;
    border-radius: 50%;
    background: var(--c);
    box-shadow: 0 0 0 4px var(--rv-surface);
    position: relative;
    z-index: 1;
  }
  .pn-ic {
    width: 38px;
    height: 38px;
    flex: none;
    border-radius: 11px;
    display: grid;
    place-items: center;
    background: var(--cs);
    color: var(--ci);
  }
  :host([dark]) .pn-ic {
    color: var(--c);
  }
  .pn-ic .i {
    width: 20px;
    height: 20px;
  }
  .pn-due {
    flex-direction: column;
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 700;
    color: var(--rv-text-2);
    background: var(--rv-surface-2);
  }
  .pn-due.today {
    background: var(--rv-today-soft);
    color: var(--rv-today);
  }
  .pn-tx {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .pn-tx b {
    max-width: 100%;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pn-tx small {
    max-width: 100%;
    font-size: 14px;
    color: var(--rv-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pn-line.big .pn-tx b {
    font-family: var(--rv-display);
    font-size: 27px;
    line-height: 1.15;
  }
  .pn-line.big .pn-tx small {
    font-size: 16px;
  }
  .pn-line.late .pn-tx small {
    color: var(--rv-late);
  }
  .pn-line.late .pn-ic {
    background: var(--rv-late-soft);
    color: var(--rv-late);
  }
  .pn-line.soon {
    opacity: 0.6;
  }
  .pn-av {
    width: 34px;
    height: 34px;
    flex: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: var(--cs);
    color: var(--ci);
    font-family: var(--rv-display);
    font-weight: 700;
    font-size: 17px;
  }
  :host([dark]) .pn-av {
    color: var(--c);
  }
  .pn-av .i {
    width: 18px;
    height: 18px;
  }
  .pn-line .pts {
    flex: none;
  }
  .pn-line .dose-btn {
    min-width: 0;
    min-height: 38px;
    padding: 0 12px;
  }
  /* Depois: a line down the times */
  .pn-tl {
    position: relative;
    padding: 0 6px 8px 0;
  }
  .pn-tl::before {
    content: "";
    position: absolute;
    left: 79px;
    top: 14px;
    bottom: 22px;
    width: 2px;
    background: var(--rv-line);
  }
  .pn-sep {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0 2px 92px;
    color: var(--rv-muted);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .pn-sep::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--rv-line);
  }
  /* Tarefas do dia: the groups by when */
  .pn-grp {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 2px 2px;
    color: var(--rv-text-2);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }
  .pn-grp .i {
    width: 17px;
    height: 17px;
    color: var(--rv-muted);
  }
  .pn-grp small {
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    color: var(--rv-muted);
  }
  .pn-grp.late,
  .pn-grp.late .i {
    color: var(--rv-late);
  }
  .pn-grp.cur small {
    color: var(--rv-today);
  }
  .pn-tasks .part-pick {
    margin-top: 4px;
  }
  @media (min-width: 1100px) {
    /* each column goes down on its own; the sheet fits the screen (1.93.0) */
    /* 1.96.0: with the sheet, the column of A seguir narrower (30% less than in 1.94.0) and the sheet 20% wider */
    .full-page > .pn-cols.three {
      grid-template-columns: minmax(0, 0.86fr) minmax(0, 1fr) minmax(0, 1.2fr);
      gap: 24px;
    }
    .full-page > .pn-cols.two {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 28px;
    }
    :host([full]) .page.painel {
      max-width: 1880px;
      padding-top: 12px;
    }
    /* A seguir and the placar always in view: the lists (Depois, Tarefas do dia) go down inside their cards */
    .pn-cols > .pn-col {
      min-height: 0;
      overflow: hidden;
    }
    .pn-col > * {
      flex: none;
    }
    /* (over the flat sections of the computer, .page:not(.cal-page) .panel) */
    .painel .pn-col > .panel {
      margin: 0 0 20px;
    }
    .painel .pn-col > .panel.pn-later,
    .painel .pn-col > .panel.pn-tasks {
      flex: 0 1 auto;
      min-height: 120px;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding-right: 6px;
    }
    .painel .pn-col > .panel:last-child,
    .painel .pn-col > .hero-ev:last-child {
      margin-bottom: 0;
    }
  }
`;var Ie=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Wl=o=>o>1048576?`${(o/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(o/1024))} KB`,Ql={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar","antes-de-zerar":"antes de come\xE7ar do zero"},On=o=>class extends o{_dateTime(e){let t=new Date(e),a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} \xE0s ${a(t.getHours())}:${a(t.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(e){this._backups={available:!1,error:e.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let e=await this.api.createBackup();this._showToast(`Backup salvo em ${e.folder}/${e.name}`),this._haptic("success"),await this._loadBackups()}catch(e){this._showToast(`N\xE3o consegui criar o backup. ${e.message}`)}this._busy=null,this.requestUpdate()}_exportData(e,t){!this.api.dataUrl||!this.api.dataUrl(e)?(t.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):e!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let e=this.renderRoot.querySelector("#cr-data-import");e&&(e.value="",e.click())}_onDataImport(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${I(t.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(t);this._haptic("success"),this._showToast(`Importado: ${N(a.calendars,"agenda","agendas")} e ${N(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(e){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(e.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(e.name),this._showToast("Backup restaurado")}catch(t){this._showToast(t.message)}}})}_confirmReset(){this._openSheet("confirm",{title:"Come\xE7ar do zero?",text:"Apaga as marca\xE7\xF5es (Tomei, Paguei, Feito) e o placar: pontos, pr\xEAmios e hist\xF3rico. Os eventos ficam nos calend\xE1rios; calend\xE1rios, pessoas, dem\xE9ritos e prefer\xEAncias continuam. Antes, o app guarda uma c\xF3pia em Vers\xF5es anteriores.",label:"Apagar tudo",danger:!0,run:async()=>{this._closeSheet();try{await this.api.resetData(),this._haptic("success"),this._showToast("Pronto: come\xE7ou do zero")}catch(e){this._showToast(`N\xE3o consegui apagar. ${e.message}`)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let e=await this.api.versions();this._sheet==="versions"&&this._setForm({list:e})}catch(e){this._sheet==="versions"&&this._setForm({error:e.message})}}_confirmRestoreVersion(e){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(e.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(e.name),this._showToast("Vers\xE3o restaurada")}catch(t){this._showToast(t.message)}}})}_renderVersions(){let e=this._form;return r`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${e.error?r`<div class="imp-error">${Ie("circle-alert")}<span>${e.error}</span></div>`:e.list==null?r`<div class="imp-loading"><span class="spin">${Ie("loader-circle")}</span><span>Carregando…</span></div>`:e.list.length?r`<div class="data-list">
                  ${e.list.map(t=>r`<div class="data-item"><div><b>${this._dateTime(t.when)}</b><span>${N(t.calendars,"agenda","agendas")} · ${N(t.points,"ponto","pontos")} · ${Ql[t.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(t)}>${Ie("archive-restore")}Restaurar</button></div>`)}
                </div>`:r`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let e=this._backups,t=this._writable(),a=(i,n,l)=>r`<li><div class="ot"><b>${i}</b><span>${n}</span></div>${l}</li>`,s=(i,n)=>r`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(i)||"#"} download @click=${l=>this._exportData(i,l)}>${Ie("download")}${n}</a>`;return r`<div id="dados">
        <div class="panel">
          ${this._secHead("download","Exportar")}
          <ul class="opts">
            ${a("Eventos (CSV)","Abre no Excel e no Google Planilhas, com um evento por linha.",s("csv","Baixar CSV"))}
            ${a("Agenda (.ics)","Os eventos dos calend\xE1rios que voc\xEA escolher, para abrir no Google Agenda, no Outlook ou no iPhone.",r`<button class="btn outline sm" @click=${()=>this._openExport()}>${Ie("calendar")}Escolher</button>`)}
            ${a("Dados completos (JSON)","Os ajustes, modelos, marca\xE7\xF5es e pontos do app, para backup ou para outro sistema.",s("json","Baixar JSON"))}
            ${a("Tudo (ZIP)","Os dados do app, os eventos de cada calend\xE1rio em .ics e as planilhas de eventos e pontos num arquivo s\xF3.",s("zip","Baixar ZIP"))}
          </ul>
        </div>
        <div class="panel">
          ${this._secHead("archive","Backup na pasta share",r`Cópia completa em <code>share/cronologia</code>. Os backups do Home Assistant também incluem o CronologIA.`)}
          <div class="btn-row sec-actions">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||e&&e.available===!1} @click=${()=>this._createBackup()}>${Ie("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${e&&e.available===!1?r`<p class="data-note">A pasta share não está disponível para o app.</p>`:m}
          ${e&&e.backups&&e.backups.length?r`<div class="data-list">
                ${e.backups.slice(0,8).map(i=>r`<div class="data-item"><div><b>${this._dateTime(i.date)}</b><span title=${i.name}>${Wl(i.size)} · ${i.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(i)}>${Ie("archive-restore")}Restaurar</button></div>`)}
              </div>`:m}
        </div>
        <div class="panel" id="importar">
          ${this._secHead("upload","Importar","Um .zip ou .json exportado pelo CronologIA, ou os eventos de um .ics (um convite, outra agenda).")}
          <div class="btn-row sec-actions">
            <button class="btn outline sm" @click=${()=>this._pickDataImport()}>${Ie("upload")}Escolher arquivo</button>
            <button class="btn outline sm" ?disabled=${!t.length} @click=${()=>this._openImport("ics")}>${Ie("calendar-plus")}Escolher .ics</button>
          </div>
        </div>
        <div class="panel">
          ${this._secHead("archive-restore","Vers\xF5es anteriores","Uma c\xF3pia a cada 10 minutos de uso e antes de importar, restaurar ou come\xE7ar do zero. Ficam as 3 mais recentes.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._openVersions()}>${Ie("archive-restore")}Ver versões</button></div>
        </div>
        <div class="panel">
          ${this._secHead("database","Onde ficam os dados",r`Os eventos ficam nos calendários; os ajustes do app, em <code>/data/cronologia.json</code>, no backup do Home Assistant.`)}
        </div>
        <div class="panel" id="zerar">
          ${this._secHead("trash","Come\xE7ar do zero","Apaga as marca\xE7\xF5es (Tomei, Paguei, Feito) e o placar. Os eventos, os calend\xE1rios, as pessoas e as prefer\xEAncias continuam. Uma c\xF3pia fica em Vers\xF5es anteriores.")}
          <div class="btn-row sec-actions"><button class="btn outline danger sm" @click=${()=>this._confirmReset()}>${Ie("trash")}Apagar tudo</button></div>
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${i=>this._onDataImport(i)} />
      </div>`}};var qn="https://github.com/diegozapella63",Kl=[["CronologIA","cronologia-ha","calendar-days","Agenda da fam\xEDlia, rem\xE9dios, rotinas e placar."],["ResolvIA","resolvia-ha","list-checks","Listas de tarefas com prazos, pontos e repeti\xE7\xE3o."],["GerencIA","gerencia-ha","wallet","Finan\xE7as da casa: caixa, cart\xF5es e investimentos."],["InventarIA","inventario-ha","package","Invent\xE1rio da casa: c\xF4modos, itens e valores."],["EconomIA","economia-ha","receipt","Lista de compras com o melhor pre\xE7o perto de casa."],["MemorIA","memoria-ha","book-open","Cadernos de anota\xE7\xE3o que abrem na hora certa."],["OdisseIA","odisseia","clapperboard","Filmes, s\xE9ries e jogos: o que ver, jogar e onde."],["CorrerIA","correria-ha","message-circle","Pergunte e pe\xE7a a qualquer app, no chat ou no WhatsApp."]],Dt=o=>r`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.info)}</svg>`,Jl=o=>r`<span class="ab-wm">${o.slice(0,-2)}<span>${o.slice(-2)}</span></span>`,Fn=(o,e,t)=>r`<a class=${t} href=${o} target="_blank" rel="noopener">${e}</a>`;function Pn({app:o,version:e}){return r`<div class="about">
    <div class="about-hero">
      <span class="ab-mark" aria-hidden="true">${Dt("zap")}</span>
      <h2 class="ab-name">Correr<span>IA</span> Code</h2>
      <p class="ab-what">desenvolvimento de softwares</p>
      <p class="ab-tag">Feito na correria, rodado pela IA.</p>
    </div>

    <div class="panel about-why">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${Dt("hourglass")}</span><h2>Por que CorrerIA?</h2></div>
      <p>Porque eu sou um programador sem tempo: vivo na correria. Então eu uso a IA para rodar tudo isso aqui. Ela escreve, testa e publica; eu dou as ideias e reclamo dos botões tortos.</p>
    </div>

    <div class="panel">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${Dt("layers")}</span><h2>Os apps</h2></div>
      <ul class="about-apps" aria-label="Os apps">
        ${Kl.map(([t,a,s,i])=>r`<li>
            ${Fn(`${qn}/${a}`,r`<span class="mais-ic" aria-hidden="true">${Dt(s)}</span>
                <span class="mb"><b class="ab-app">${Jl(t)}${t===o?r`<em class="ab-here">Este app · v${e}</em>`:""}</b><span>${i}</span></span>
                ${Dt("external-link")}`,`ab-row${t===o?" here":""}`)}
          </li>`)}
      </ul>
    </div>

    ${Fn(qn,r`${Dt("external-link")}Meu GitHub`,"btn primary ab-github")}
  </div>`}var In=qe`
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
`;var Gl=":scope > .flabel, :scope > .flabel-row > .flabel";var Ps=o=>(o||"").replace(/\s+/g," ").trim(),Zl="small, .pick-sub, .sub, .imp-sub, .badge, .count",Fs=o=>Ps([...o.childNodes].filter(e=>e.nodeType===3||e.nodeType===1&&!e.matches(Zl)).map(e=>e.textContent).join(" "));function Xl(o){let e=n=>n.closest(".field")===o&&!n.closest(".flabel, .flabel-row"),t=[...o.querySelectorAll(".eq-sel .eq-tx > b")].filter(e).map(Fs).filter(Boolean);if(t.length)return t.length===1?t[0]:o.getAttribute("data-varios")||"V\xE1rios equipamentos";let a=[...o.querySelectorAll(".on, .sel, [aria-pressed='true'], [aria-checked='true'], [aria-selected='true']")].filter(n=>e(n)&&n.matches("button, [role='radio'], [role='checkbox'], [role='option'], .pick, .pk, .chip, .swatch, .sw")).map(n=>Fs(n)||n.getAttribute("title")||n.getAttribute("aria-label")||"").concat([...o.querySelectorAll(".time-chip")].filter(e).map(Fs)).filter(Boolean);if(a.length)return[...new Set(a)].join(", ");let s=[...o.querySelectorAll("textarea, input:not([type='checkbox']):not([type='radio']):not([type='file']):not([type='hidden']):not([type='range']), select")].filter(e).map(n=>n.tagName==="SELECT"?(n.selectedOptions[0]||{}).textContent:(n.value||"").split(`
`)[0]).map(Ps).filter(Boolean);return s.length?s.join(" "):[...o.querySelectorAll(".pickf .pf-v")].filter(e).map(n=>Ps(n.textContent)).filter(n=>n&&!/^--/.test(n)).join(" at\xE9 ")||o.getAttribute("data-vazio")||""}function Nn(o){if(!(!o||!o.querySelectorAll))for(let e of o.querySelectorAll(".sheet .field.dobravel")){let t=e.querySelector(Gl);if(!t)continue;let a=t.querySelector(".fl-val")?"":Xl(e),s=a.length>48?a.slice(0,47)+"\u2026":a;s?t.getAttribute("data-val")!==s&&t.setAttribute("data-val",s):t.hasAttribute("data-val")&&t.removeAttribute("data-val")}}var Rn="cronologia.theme",Ln="cronologia.mode",Is={CREATE:1,DELETE:2,UPDATE:4},Ns=(o,e)=>(Number(o)&e)===e,it=48,ec=1100,Va=(()=>{try{return typeof location<"u"&&new URLSearchParams(location.search).has("painel")}catch{return!1}})(),Ut=(()=>{try{return Va&&new URLSearchParams(location.search).has("conversa")}catch{return!1}})(),tc={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},ac=o=>tc[o]||{label:o?ne(o.replace(/_/g," ")):"Outros",icon:"calendar"},k=(o,e="")=>r`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ce(J[o]||J.calendar)}</svg>`,Hn={Hoje:"clock-3",Agora:"clock-3",Recompensas:"trophy",Rotinas:"repeat",Mais:"ellipsis",Calend\u00E1rios:"layers",Avisos:"bell-ring",F\u00E9rias:"plane",Configura\u00E7\u00F5es:"sliders-horizontal",Sobre:"info"},sc=(o="")=>/^Apagar/.test(o)?"trash":/^Mudar|^Editar/.test(o)?"pencil":/^Adicionar|^Novo|^Nova/.test(o)?"plus":/^Prêmio/.test(o)?"gift":/^Extrato|^Pontos/.test(o)?"trophy":/^Versões/.test(o)?"archive-restore":/^Trazer|^Revisar/.test(o)?"list-checks":/^Quem fez/.test(o)?"users":/^Feito em parte/.test(o)?"circle-pause":/^Qualquer hora/.test(o)?"clock":/^Personalizar/.test(o)?"sliders-horizontal":/Outlook|^Exportar/.test(o)?"external-link":/^Ordem/.test(o)?"layers":/calendário/i.test(o)?"calendar-days":/^Manutenção/.test(o)?"wrench":/^Lendo/.test(o)?"scan-text":/^Falar|disse/.test(o)?"mic":/^Colar/.test(o)?"clipboard-paste":/^Tarefa/.test(o)?"list-checks":/^Conversa/.test(o)?"message-circle":"calendar",ic=[[/^Tipo/,"layout-grid"],[/^Cor do dia/,"calendar"],[/^Cor/,"palette"],[/^Usar IA|^IA usada|Trazer de mensagem/,"sparkles"],[/CorrerIA/,"zap"],[/sensores/i,"activity"],[/Trechos no Agora/,"notebook-pen"],[/^Fala/,"mic"],[/^Usar a integração/,"blocks"],[/^Mostrar n[oa] (calendário|agenda)/,"calendar-check"],[/^Mostrar na tela inicial/,"smartphone"],[/Tarefas|^Lista|^Tarefa/,"list-checks"],[/^Local e notas|^Local|^Onde$/,"map-pin"],[/^De férias/,"plane"],[/recompensas|^Marcar|pontos|^Pontos|placar|ganha|^Quantos pontos/i,"trophy"],[/^Se .* vencer/,"crown"],[/^Resultado|^Lembrete|^Avisar|^Aviso/,"bell"],[/^Pessoas|^Quem|^De quem|participa/,"users"],[/^Para conversar/,"message-circle"],[/^Para ler fotos/,"scan-text"],[/^Voltar para a folha/,"hourglass"],[/^Calendário|^Adicionar em|^Onde guardar/,"calendar-days"],[/^Notas|^Observações|^O que foi feito/,"notebook-pen"],[/^Título|^Nome|^O que foi/,"pencil"],[/^Quando/,"calendar-clock"],[/^Horário/,"clock"],[/^Até|^Período/,"calendar-range"],[/^Repet|^A cada/,"repeat"],[/^Dose/,"pill"],[/^Valor/,"wallet"],[/^Categoria/,"layers"],[/^Caminho/,"smartphone"],[/^Mensagem/,"message-square-text"],[/^Cômodo/,"door-open"],[/^Equipamento|^Bem/,"package"],[/^Calendários/,"layers"]],oc=o=>(ic.find(([e])=>e.test(o))||[0,"circle-check"])[1],nc=(o,e)=>{let t=document.createElement("template");return t.innerHTML=`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${J[o]||J.calendar}</svg>`,t.content.firstChild},jn="cronologia-fechadas",Vn="cronologia-campos",Qn=".mais-head, .meds-head, .bills-head, .chores-head, .prize-head, .sec-head",Bn=o=>{if(!o)return"";let e=o.firstElementChild&&o.firstElementChild.matches(Qn)?o.firstElementChild:null,t=e&&(e.querySelector("h2, .overline")||e);return o.id||o.dataset&&o.dataset.card||(t?t.textContent.trim():"")},Un=o=>{let e=o&&o.querySelector(":scope > .flabel, :scope > .flabel-row > .flabel");return e?e.textContent.trim().replace(/\s*[(·].*$/,"").replace(/s$/,""):""},Yn=o=>{try{return new Set(JSON.parse(localStorage.getItem(o)||"[]"))}catch{return new Set}},rc=(o,e)=>{try{localStorage.setItem(o,JSON.stringify([...e]))}catch{}},ja={get(o,e){try{let t=localStorage.getItem(o);return t==null?e:JSON.parse(t)}catch{return e}},set(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}},Rs=(o,e,t,a,s)=>vt`<line class=${s} x1=${o} y1=${e} x2=${t} y2=${a}></line>`,Wn=(o,e)=>vt`<path class=${e} d=${o}></path>`,lc=o=>o.allDay?"Dia todo":`${j(o.start)} \u2013 ${j(o.end)}`,cc=o=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o)}`,Ls=class extends Zi(Tn(un(On(Mn(_n(bn(Jo(Re)))))))){static properties={_csel:{state:!0},_desk:{state:!0},_wide:{state:!0},_full:{state:!0},_conv:{state:!0},api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[uo,mo,fo,In,_e(Fi),_e(ji),_e(Qi),_e(Ni),_e(sn),Sn,zn,_e(Gi)];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=Fa(history.state&&history.state.rvPath||""),history.state&&history.state.rvPath!=null&&history.state.rvPath!==this._path&&history.replaceState({...history.state,rvPath:this._path},"");let e=rn();if(e){this._path=e,history.replaceState({...history.state||{},rvDepth:0,rvPath:e},"");let t=nn();t&&(this._catQ=t)}this._sheet=null,this._form=null,this._toast=null,this._theme=ja.get(Rn,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=B(new Date),this._mode=ja.get(Ln,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark(),this._deskMq=window.matchMedia?window.matchMedia("(min-width: 1000px)"):null,this._desk=!!(this._deskMq&&this._deskMq.matches),this._onDesk=()=>this._desk=!!this._deskMq.matches,this._embed=Va,this._conv=null,this._embedChat=Ut,this._onSlotResize=()=>this._tellChatSlot&&this._tellChatSlot(),this._onParentMsg=t=>{if(!Ut||t.origin!==location.origin||t.source!==window.parent)return;let a=t.data&&t.data.conversa;if(!a||typeof a!="object")return;let s={aberta:!!a.aberta,novidade:!!a.novidade};(!this._conv||this._conv.aberta!==s.aberta||this._conv.novidade!==s.novidade)&&(this._conv=s)},this._full=Va,this._wideMq=window.matchMedia?window.matchMedia(`(min-width: ${ec}px)`):null,this._wide=!!(this._wideMq&&this._wideMq.matches),this._onWide=()=>{this._wide=!!this._wideMq.matches,!this._wide&&this._full&&!this._embed&&this._setFull(!1)},this._onFsChange=()=>{let t=this._fsDoc;t&&t.fullscreenElement?this._fsOn=!0:this._fsOn&&(this._fsOn=!1,this._full&&this._setFull(!1))}}connectedCallback(){super.connectedCallback(),co(),window.addEventListener("popstate",this._onPopState),window.addEventListener("keydown",this._onKey),window.addEventListener("message",this._onParentMsg),window.addEventListener("resize",this._onSlotResize),Ut&&this._tellParent("pronto"),Va||(this._stopHaPath=ln(e=>{let t=cn(e);t&&(t.room&&(this._catQ=t.room),t.path!==this._path?this._go(t.path):this.requestUpdate())})),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._deskMq&&this._deskMq.addEventListener&&this._deskMq.addEventListener("change",this._onDesk),this._wideMq&&this._wideMq.addEventListener&&this._wideMq.addEventListener("change",this._onWide),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),this._stopHaPath&&this._stopHaPath(),window.removeEventListener("popstate",this._onPopState),window.removeEventListener("keydown",this._onKey),window.removeEventListener("message",this._onParentMsg),window.removeEventListener("resize",this._onSlotResize),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),this._deskMq&&this._deskMq.removeEventListener&&this._deskMq.removeEventListener("change",this._onDesk),this._wideMq&&this._wideMq.removeEventListener&&this._wideMq.removeEventListener("change",this._onWide),this._fsDoc&&this._fsDoc.removeEventListener("fullscreenchange",this._onFsChange),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),clearTimeout(this._memoBack),this._stopStream(),this._store&&this._store.dispose()}willUpdate(e){e.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}_tellParent(e){try{window.parent.postMessage({painel:e},location.origin)}catch{}}_toggleChatKey(){return Ut?(this._tellParent("conversa"),!0):this._sheet==="chat"?(this._closeSheet(),!0):this._sheet||!this._aiOn()||!(this._ai&&this._ai.ready)?!1:(this._openChat(),!0)}_onKey=e=>{if(e.ctrlKey&&!e.altKey&&!e.metaKey&&(e.code==="Space"||e.key===" ")){this._toggleChatKey()&&e.preventDefault();return}if(e.key==="Escape"&&this._full&&!this._embed&&!this._sheet&&!this._cam){let a=e.composedPath&&e.composedPath()[0]||e.target;a&&a.closest&&a.closest(".sheet")||this._setFull(!1);return}if((e.key==="ArrowRight"||e.key==="ArrowLeft")&&this._fullOn()&&!this._sheet&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey){let a=e.composedPath&&e.composedPath()[0]||e.target;if(a&&a.closest&&a.closest("input, textarea, select, [contenteditable]"))return;this._memoStep(e.key==="ArrowRight"?1:-1)&&e.preventDefault();return}if(e.key!=="/"||e.ctrlKey||e.metaKey||e.altKey||this._sheet||this._fullOn())return;let t=e.composedPath&&e.composedPath()[0]||e.target;t&&t.closest&&t.closest("input, textarea, select, [contenteditable]")||(e.preventDefault(),this._toSearch())};_toSearch(e=null){e!=null&&(this._query=e),this._focusSearch=!0,this._mode="lista",this._view().name!=="calendar"?this._go("/calendario"):this.requestUpdate()}_markTabs(){let e=this.renderRoot&&this.renderRoot.querySelector(".tabs-wrap > .more-tabs");if(e&&(e.parentElement.classList.toggle("tem-esq",e.scrollLeft>2),e.parentElement.classList.toggle("tem-dir",e.scrollLeft+e.clientWidth<e.scrollWidth-2),window.ResizeObserver&&(!this._tabsRo||this._tabsRo.t!==e))){this._tabsRo&&this._tabsRo.ro.disconnect();let t=new ResizeObserver(()=>this._markTabs());t.observe(e),e.querySelectorAll("button").forEach(a=>t.observe(a)),this._tabsRo={t:e,ro:t}}}_labelIcons(){let e=this.renderRoot;if(!(!e||!e.querySelectorAll))for(let t of e.querySelectorAll(".flabel, .row .grow > .label")){if(t.querySelector(":scope > svg")||t.closest(".row:has(> .tile), .now-cards"))continue;let a=t.textContent.trim();a&&t.prepend(nc(oc(a),"lbl-ic"))}}_applyFolds(){let e=this.renderRoot;if(!(!e||!e.querySelectorAll)){this._fechadas=this._fechadas||Yn(jn),this._camposFechados=this._camposFechados||Yn(Vn);for(let t of e.querySelectorAll(".panel")){let a=t.firstElementChild;if(!a||!a.matches(Qn)||a.matches(".chores-head.sub"))continue;a.classList.add("fold-head");let s=Bn(t);if(!s)continue;let i=this._fechadas.has(s);t.classList.add("dobra"),t.classList.toggle("fechada",i),a.setAttribute("role","button"),a.setAttribute("tabindex","0"),a.setAttribute("aria-expanded",i?"false":"true")}for(let t of e.querySelectorAll(".sheet .field")){let a=t.querySelector(":scope > .flabel-row"),s=a||t.querySelector(":scope > .flabel");if(!s||a&&!a.querySelector(":scope > .flabel")||t.parentElement&&t.parentElement.closest(".field"))continue;let i=Un(t);if(!i)continue;let n=this._camposFechados.has(i);t.classList.add("dobravel"),t.classList.toggle("shut",n),s.setAttribute("role","button"),s.setAttribute("tabindex","0"),s.setAttribute("aria-expanded",n?"false":"true")}this._fieldVals()}}_fieldVals(){Nn(this.renderRoot)}_toggleFold(e,t){let a=t?Un(e.parentElement):Bn(e.parentElement);if(!a)return;let s=t?this._camposFechados:this._fechadas;s.has(a)?s.delete(a):s.add(a),rc(t?Vn:jn,s),this._applyFolds()}firstUpdated(){let e=t=>{if(!t.target.closest)return null;let a=t.target.closest("button, a, input, select, textarea, label:not(.flabel):not(.field)"),s=t.target.closest(".panel.dobra > .fold-head");if(s)return a?null:[s,!1];let i=t.target.closest(".sheet .field.dobravel > .flabel, .sheet .field.dobravel > .flabel-row");return i&&!(a&&i.contains(a))?[i,!0]:null};this.renderRoot.addEventListener("click",t=>{let a=e(t);a&&(a[1]&&t.preventDefault(),this._toggleFold(a[0],a[1]))}),this.renderRoot.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;let a=e(t);a&&(t.preventDefault(),this._toggleFold(a[0],a[1]))})}updated(e){if(this.toggleAttribute("dark",this._dark),this.toggleAttribute("full",this._fullOn()),this._embedChat&&requestAnimationFrame(()=>this._tellChatSlot()),this._full&&!this._embed&&this._ready&&this._shownView().name!=="now"&&this._setFull(!1,!0),this._markTabs(),this._labelIcons(),this._applyFolds(),requestAnimationFrame(()=>this._fieldVals()),this._chatAfterRender(),this._memoriaTick(),this._focusSearch){let t=this.renderRoot.querySelector("input[data-q='buscar']");if(t){this._focusSearch=!1,t.focus({preventScroll:!0});try{t.setSelectionRange(t.value.length,t.value.length)}catch{}}}if(this._scrollWeek){let t=this.renderRoot.querySelector(".tgrid-scroll");if(t){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&me(this._cursor,a)?Math.max(0,a.getHours()-1):7;t.scrollTop=s*it}}if(e.has("_path")&&this._view().name==="more"){let t=this.renderRoot.querySelector(".more-tabs"),a=t&&t.querySelector("button.on");if(a){let i=a.offsetLeft,n=i+a.offsetWidth;i<t.scrollLeft?t.scrollLeft=i-8:n>t.scrollLeft+t.clientWidth&&(t.scrollLeft=n-t.clientWidth+8)}let s=this._view().tab;s==="integracoes"&&(this._refreshAi(!1),this._loadUsage(),this._memoriaOn()&&this._loadMemoria(!0)),s==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let e=this._theme==="dark"?!0:this._theme==="light"?!1:xo();e!==this._dark&&(this._dark=e)}_setTheme(e){this._theme=e,ja.set(Rn,e),this._syncDark()}async _start(){this._started=!0,this._store=new Ma(this.api,()=>this._ver++),this.api.onStatus(e=>this._online=e),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(e=>this._onCalendar(e)).catch(()=>{}),this.api.subscribePrefs(e=>this._setPrefs(e)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(e=>{let t=e&&e.test;t&&this._home&&t.at!==this._testSeen&&Date.now()-t.at<12e4&&(this._haptic("success"),this._showToast(`${t.person?`${t.person}: o`:"O"} bot\xE3o ${t.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=t&&t.at,this._home=e}).catch(()=>{})}async _boot(e){try{let t=await this.api.bootstrap();this._version=t.version||"",this._atalho=t.atalho||null,this._user=t.user||{name:""},this._ai=t.ai||this._ai,this._aiAt=Date.now(),this._loadVoice(),this._states=t.states||{},this._entities=t.entities||{},this._devices=t.devices||{},this._prefs=t.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),e&&this._store.reloadAll()}catch(t){this._ready||(this._bootError=t.message||String(t)),e||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(e){let t={...this._states},a=e.entity_id in t;e.new_state?t[e.entity_id]=e.new_state:delete t[e.entity_id],this._states=t,(!a||!e.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(e){e&&(this._prefs={calendars:e.calendars||{},app:e.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(e=>!e.hidden).map(e=>e.id))}_app(e,t){let a=this._prefs.app?this._prefs.app[e]:void 0;return a===void 0?t:a}_accentDaily(){return this._app("accent_daily",!0)!==!1}_accent(){return this._accentDaily()?Ri(dt,new Date(this._now||Date.now())):is(this._app("accent","turquesa"))||ue("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let e=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},n=i.device_id?this._devices[i.device_id]:null,l=ac(i.platform),c=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:n,plat:l,orig:c}});e.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let t=e.map(({id:a,st:s,reg:i,dev:n,plat:l,orig:c},d)=>{let p=(this._prefs.calendars||{})[a]||{},h=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:p.name||c,origName:c,group:l.label,icon:l.icon,device:n?n.name_by_user||n.name:null,color:is(p.color)||wi(d),colorId:p.color||null,hidden:!!p.hidden,features:h,canCreate:Ns(h,Is.CREATE),canUpdate:Ns(h,Is.UPDATE),canDelete:Ns(h,Is.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:t},t}_cal(e){return this._cals().find(t=>t.id===e)}_visible(){return this._cals().filter(e=>!e.hidden)}_writable(){return this._cals().filter(e=>e.canCreate&&!e.unavailable)}_peopleCals(e=this._writable()){let t=this._app("people",null)||{},a=e.map(i=>({id:i.id,name:i.name})),s=[];for(let i of this._ix&&this._ix().people||[]){if(i.pet)continue;let n=Aa(i.name,t,a);n&&!s.some(l=>l.cal===n.id)&&s.push({name:i.name,cal:n.id,auto:n.auto})}return s}_defaultCal(){let e=this._writable(),t=this._app("default_calendar",null),a=e.filter(i=>!i.hidden),s=a.find(i=>i.canUpdate&&i.canDelete)||a.find(i=>i.canDelete)||a[0];return(e.find(i=>i.id===t)||s||e[0]||{}).id||null}_events(e,t){this._store.ensure(e,t);let a=this._store.query(e,t),s=this._away();s&&(a=[...a.filter(d=>!(d.kind&&(d.kind.kind==="rotina"||d.kind.kind==="manutencao")&&this._awayDay(d.start))),...this._awayBack(s,e,t)]);let i=new Set(a.filter(d=>this._afterDoneOn(d)===P(d.start)).map(d=>`${d.cal}|${d.summary}|${P(d.start)}`)),n=this._movedDoneEvents(e,t).filter(d=>!i.has(`${d.cal}|${d.summary}|${P(d.start)}`)),l=this._afterDueEvents(e,t,(d,p)=>this._store.query(d,p)),c=[...this._gerenciaEvents(e,t),...this._todoEvents(e,t),...n,...l];return c.length?[...a,...c].sort((d,p)=>d.start-p.start||Number(p.allDay)-Number(d.allDay)||d.summary.localeCompare(p.summary,"pt-BR")):a}_awayBack(e,t,a){let s=q(F(e.to),1);if(!(s<a&&q(s,1)>t))return[];let i=F(e.from);this._store.ensure(i,s);let n=l=>l.kind&&!l.rrule&&(l.kind.kind==="rotina"&&l.kind.after||l.kind.kind==="manutencao");return this._store.query(i,s).filter(l=>n(l)&&this._awayDay(l.start)).map(l=>{let c=l.allDay?s:new Date(s.getFullYear(),s.getMonth(),s.getDate(),l.start.getHours(),l.start.getMinutes());return{...l,start:c,end:l.allDay?q(s,1):new Date(c.getTime()+Math.max(0,l.end-l.start)),awayBack:!0}})}_away(){let e=this._app("away",null);return e&&e.from&&e.to?e:null}_awayDay(e){let t=this._away(),a=P(e);return!!(t&&a>=t.from&&a<=t.to)}_awayNow(){return this._awayDay(new Date(this._now))}_renderAwayBanner(){let e=this._away(),t=new Date(this._now);if(!e||e.to<P(t))return m;let a=this._awayNow(),s=F(e.from),i=F(e.to),n=Z(i,s)+1,l=Z(B(t),s)+1,c=p=>oe(p,t,{long:!1,cap:!1}),d=a?l>=n?"\xDAltimo dia":`Dia ${l} de ${n}`:`${N(n,"dia","dias")}, at\xE9 ${c(i)}`;return r`<div class="away-card ${a?"on":"ahead"}" role="status">
      <div class="aw-top">
        <span class="aw-ic" aria-hidden="true">${k("plane")}</span>
        <span class="aw-tx">
          <span class="aw-over">${a?"De f\xE9rias":"F\xE9rias marcadas"}</span>
          <b class="aw-title">${a?`at\xE9 ${c(i)}`:`a partir de ${c(s)}`}</b>
          <small>${d}</small>
        </span>
      </div>
      ${a?r`<div class="aw-bar" role="progressbar" aria-valuemin="1" aria-valuemax=${n} aria-valuenow=${Math.min(l,n)} aria-label="Dia ${Math.min(l,n)} de ${n}"><span style="width:${Math.round(Math.min(l,n)/n*100)}%"></span></div>`:m}
      <div class="aw-chips">
        <span class="aw-chip">${k("circle-pause")}Rotinas, tarefas e manutenção pausadas</span>
      </div>
      <button class="text-btn aw-end" @click=${()=>this._saveAppPrefs({away:null})}>${k("x")}${a?"Encerrar f\xE9rias":"Cancelar f\xE9rias"}</button>
    </div>`}async _saveCalPrefs(e,t){try{this._setPrefs(await this.api.setCalendarPrefs(e,t))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(e){try{this._setPrefs(await this.api.setAppPrefs(e))}catch(t){this._showToast(`N\xE3o consegui salvar: ${t.message}`)}}_view(){return qa(this._path)}async _go(e,t=!1){e=Fa(e),this._part=1,this._sheet&&this._closeSheet(),this._popping&&await this._popping,history.state&&history.state.rvSel?await this._leaveSel():this._csel=null;let a=history.state||{},i={rvDepth:(a.rvDepth||0)+(t?0:1),rvPath:e},n=this._view();Pa(qa(e))&&(t?a.rvUp:n.name==="more"&&n.tab==="menu")&&(i.rvUp=!0),t?history.replaceState(i,""):history.pushState(i,""),this._path=e,e==="/calendario"&&(this._scrollWeek=!0);let l=this.renderRoot&&this.renderRoot.querySelector("main");l&&l.scrollTo({top:0,behavior:"instant"})}async _goMenu(){this._sheet&&await this._closeSheet(),history.state&&history.state.rvSel?await this._leaveSel():this._csel=null,history.state&&history.state.rvUp?await this._popEntry("rvUp"):await this._go("/mais",!0);let e=this.renderRoot&&this.renderRoot.querySelector("main");e&&e.scrollTo({top:0,behavior:"instant"})}_onSwipeStart(e){this._sw=this._sheet||this._cam||this._fullOn()?null:po(e,".month")}_onSwipeEnd(e){let t=ho(e,this._sw);if(this._sw=null,!t||this._sheet)return;if(Pa(this._view())){if(t>0)return;this._haptic("light"),this._goMenu().then(()=>ws(this,"more",t));return}let a=[["now",""],["calendar","/calendario"],this._fourthTab(),["more","/mais"]],s=a.findIndex(([n])=>n===this._shownView().name),i=s+t;s<0||i<0||i>=a.length||(this._haptic("light"),this._goTab(a[i][1]),ws(this,a[i][0],t))}async _goTab(e){let t=this._view();if(e==="/mais"&&t.name==="more"){if(Pa(t))return this._goMenu();let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}e!==""&&this._sheet&&await this._closeSheet(),e!==""&&history.state&&history.state.rvSel?await this._leaveSel():e!==""&&(this._csel=null),e!==""&&history.state&&history.state.rvUp&&await this._popEntry("rvUp");let a=this._view().name;if(e===""){if(a==="now"){let i=this.renderRoot.querySelector("main");i&&i.scrollTo({top:0});return}let s=history.state&&history.state.rvDepth||0;s>0?history.go(-s):this._go("",!0);return}if(e==="/calendario"&&a==="calendar"){this._cursor=B(new Date),this._scrollWeek=!0;return}this._go(e,a!=="now")}_openDay(e,t){this._cursor=B(e),t&&this._setMode(t),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(e){this._mode=e,ja.set(Ln,e),this._scrollWeek=!0}_leaveSel(){return this._csel=null,this._popEntry("rvSel")}_popEntry(e){if(!(history.state&&history.state[e]))return Promise.resolve();let t=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(n=>n!==s),this._popping===t&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=t,history.back(),t}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._full&&!this._embed&&!this._sheet&&!(history.state&&history.state.rvFull)&&this._setFull(!1,!0),this._csel&&!this._sheet&&!(history.state&&history.state.rvSel)&&(this._csel=null),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let e=history.state&&history.state.rvPath||"",t=Fa(e);t!==e&&history.replaceState({...history.state,rvPath:t},""),t!==this._path&&(this._path=t);for(let a of[...this._popWaiters||[]])a()}async _openSheet(e,t=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=e,this._form=t,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._stopVoice(),this._chatStop(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(e){this._form={...this._form,...e}}_openInHA(e){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(e)}_haptic(e){this.env&&this.env.haptic&&this.env.haptic(e)}_showToast(e,t=null){clearTimeout(this._toastTimer),this._toast={text:e,action:t,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,t?5e3:2800)}_userName(){let e=xa();return(this._user&&this._user.name||e&&e.user&&e.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let e=xa();return e&&e.user?!!e.user.is_admin:!0}_openEvent(e){if(e.movedDone)return e.movedDone.item?this._openIndexItem(e.movedDone.item):this._showToast(`${I(e.summary,30)}: feita ${oe(F(e.movedDone.day),new Date(this._now),{long:!1,cap:!1})}${e.movedDone.by?` por ${e.movedDone.by}`:""}`);if(e.gerencia){this._openSheet("bill",{b:{id:e.gerencia.id,c:e.gerencia}});return}if(e.todo){this._openSheet("todo",{key:e.todo.key});return}this._openSheet("event",{ev:e})}_money(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:e=null,date:t=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(e&&e.kind)return this._openKindForm({ev:e,copy:i});if(!this._writable().length&&!(e&&!i)){this._openSheet("nocal",{});return}let l;if(e){let c=e.allDay?q(e.end,-1):e.end;l={mode:i?"add":"edit",cal:i?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._defaultCal():e.cal,origCal:e.cal,uid:e.uid,rid:i?null:e.rid,title:e.summary,allDay:e.allDay,date:P(e.start),endDate:e.allDay?Z(c,e.start)>0?P(c):"":me(e.start,e.end)?"":P(e.end),start:e.allDay?"09:00":j(e.start),end:e.allDay?"10:00":j(e.end),repeat:wt(e.rrule),rrule:e.rrule||"",location:e.location,notes:e.description}}else{let c=t?B(t):B(new Date),d=new Date,p=a??(me(c,d)?Math.min(23,d.getHours()+1):9),h=u=>String(u).padStart(2,"0");l={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:P(c),endDate:"",start:`${h(p)}:00`,end:`${h(Math.min(23,p+1))}:${p+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}if(l.details=!!(String(l.location||"").trim()||String(l.notes||"").trim()),l.mode==="edit")try{l.before=this._eventFromForm(l)}catch{l.before=null}this._openSheet("form",l),l.mode==="add"&&!l.title&&this.updateComplete.then(()=>{let c=this.renderRoot.querySelector(".sheet .ev-title-input");c&&c.focus()})}_renderWeekDays(e){let t=e.rrule&&wt(e.rrule)==="WEEKLY"?e.rrule:"FREQ=WEEKLY",a=ls(t,e.date),s=i=>{let n=a.includes(i)?a.filter(l=>l!==i):[...a,i];n.length&&this._setForm({rrule:cs(t,n)})};return r`<div class="wdp-row" role="group" aria-label="Dias da semana">${[0,1,2,3,4,5,6].map(i=>r`<button type="button" class="wdp ${a.includes(i)?"on":""}" aria-pressed=${a.includes(i)?"true":"false"} aria-label=${Ee[i]} @click=${()=>s(i)}>${"DSTQQSS"[i]}</button>`)}</div>
      <div class="field-hint">${k("repeat")}<span>${Fe(t.includes("BYDAY")?t:cs(t,a))}</span></div>`}_eventFromForm(e,{keepRrule:t=!0}={}){if(e.kind)return this._kindEvents(e,{keepRrule:t})[0];let a=(e.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||""))throw new Error("Escolha a data");let s={summary:a},i=t&&e.repeat==="WEEKLY"&&/BYDAY=/.test(e.rrule||"")?ls(e.rrule,e.date):null;if(i&&!e.rid){let n=_i(e.date,i);if(n!==e.date){let l=Math.round((F(n)-F(e.date))/864e5);e={...e,date:n,endDate:e.endDate&&e.endDate>e.date?P(q(F(e.endDate),l)):e.endDate}}}if(e.allDay){let n=e.endDate&&e.endDate>e.date?e.endDate:e.date;s.start=e.date,s.end=P(q(F(n),1))}else{let[n,l]=(e.start||"09:00").split(":").map(Number),[c,d]=(e.end||e.start||"10:00").split(":").map(Number),p=F(e.date),h=new Date(p.getFullYear(),p.getMonth(),p.getDate(),n,l),u=e.endDate&&e.endDate>e.date?F(e.endDate):p,f=new Date(u.getFullYear(),u.getMonth(),u.getDate(),c,d);f<=h&&(f=q(f,1)),f-h<6e4&&(f=new Date(h.getTime()+30*6e4)),s.start=Ae(h),s.end=Ae(f)}if((e.location||"").trim()&&(s.location=e.location.trim()),(e.notes||"").trim()&&(s.description=e.notes.trim()),t){let n=e.rrule&&wt(e.rrule)===e.repeat?e.rrule:e.repeat?`FREQ=${e.repeat}`:"";n&&(s.rrule=n)}return s}async _saveForm(){let e=this._form;if(e.kind)return this._saveKindForm();let t;try{t=this._eventFromForm(e)}catch(s){this._showToast(s.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:t});return}this._setForm({saving:!0});try{e.mode==="add"?(await this.api.createEvent(e.cal,t),this._done(`Evento criado em ${I(a.name,24)}`,e.cal,t.start)):e.cal!==e.origCal?(await this.api.createEvent(e.cal,t),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`Evento movido para ${I(a.name,24)}`,e.cal,t.start)):(await this._saveInPlace(e,t),this._done(e.rid&&!a.canUpdate?"Evento salvo \xB7 a s\xE9rie recome\xE7a neste dia":"Evento salvo",e.cal,t.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}async _saveInPlace(e,t){let a=this._cal(e.cal);if(!a||a.canUpdate)return this.api.updateEvent(e.cal,e.uid,t);if(!(a.canCreate&&a.canDelete))throw new Error("Esse calend\xE1rio n\xE3o deixa mudar eventos");await this.api.deleteEvent(e.cal,e.uid);try{await this.api.createEvent(e.cal,t)}catch(s){throw e.before&&await this.api.createEvent(e.cal,e.before).catch(()=>{}),s}}_canEdit(e){let t=this._cal(e);return!!t&&(t.canUpdate||t.canCreate&&t.canDelete)}_done(e,t,a){this._haptic("success"),this._closeSheet(),this._store.refresh(t);let s=a?B(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?F(a):a)):null;this._showToast(e,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(e){let t=this._form,a={recurrenceId:t.rid,range:e==="future"?"THISANDFUTURE":void 0};try{if(t.action==="edit"){let s=t.event;e==="one"&&(s=this._eventFromForm(t,{keepRrule:!1})),await this.api.updateEvent(t.cal,t.uid,s,a),this._done(e==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",t.cal,s.start)}else await this.api.deleteEvent(t.cal,t.uid,e==="all"?{}:a),this._done(e==="all"?"A s\xE9rie toda foi apagada":e==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",t.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(e){if(e.rid){this._openSheet("scope",{action:"delete",cal:e.cal,uid:e.uid,rid:e.rid,title:e.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${I(e.summary,28)}\u201D?`,text:`${ne(oe(e.start,new Date(this._now)))} \xB7 ${lc(e)}. Ele sai do calend\xE1rio ${I((this._cal(e.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(e.cal,e.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(e.cal);let t={summary:e.summary,start:e.raw.start,end:e.raw.end};e.location&&(t.location=e.location),e.description&&(t.description=e.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(e.cal,t).then(()=>this._store.refresh(e.cal)).catch(a=>this._showToast(a.message))})}catch(t){this._showToast(`N\xE3o consegui apagar: ${t.message}`)}}})}_openImport(e="pick",t={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:e==="text"?"text":e==="voice"?"voice":"pick",rec:e==="voice"?"starting":"off",text:"",images:[],items:[],provider:null,error:null,note:null,...t});return e==="photos"&&this._pickFiles("photos"),e==="scan"&&this._openCamera(),e==="text"&&this._focusSheetText(),e==="ics"&&this._pickFiles("ics"),e==="voice"&&s.then(()=>this._startVoice()),s}async _loadVoice(e=!1){if(this.api.voiceStatus){try{this._voice=await this.api.voiceStatus(e)}catch(t){this._voice={ready:!1,reason:t.message}}this.requestUpdate()}}async _chooseVoice(e){await this._saveAppPrefs({voice_engine:e||null}),await this._loadVoice(!0),this._showToast("Fala para texto atualizada")}_renderVoicePanel(){let e=this._voice,t=this._app("voice_engine","")||"",a=e&&e.options||[],s=!e||this._voiceChecking,i=s?"off":e.ready&&!e.missing?"ok":e.ready?"warn":"bad",n=s?"Verificando\u2026":e.ready?"Pronto para ouvir":"Sem fala para texto",l=s?"":e.ready?`Transcreve com ${e.name}.${e.missing?" O escolhido n\xE3o foi encontrado: usando o autom\xE1tico.":""}`:e.reason||"",c=async()=>{this._voiceChecking=!0,this.requestUpdate(),await this._loadVoice(!0),this._voiceChecking=!1,this.requestUpdate()};return r`<div class="panel" id="falar">
      ${this._secHead("mic","Falar","Quem transforma a fala em texto. N\xE3o muda o assistente de voz do Home Assistant.")}
      <div class="ai-state ${i}"><span class="dot"></span><div><b>${n}</b>${l?r`<span>${l}</span>`:m}</div></div>
      ${a.length||t?r`<label class="field" style="margin:14px 0 0">
            <span class="flabel">Fala para texto</span>
            <select class="select" aria-label="Fala para texto" @change=${d=>this._chooseVoice(d.target.value)}>
              <option value="" ?selected=${!t}>Automático${e&&e.auto?`: ${e.auto.name}`:""}</option>
              ${a.map(d=>r`<option value=${d.id} ?selected=${d.id===t}>${d.name}</option>`)}
              ${t&&!a.some(d=>d.id===t)?r`<option value=${t} selected>${t} (não encontrado)</option>`:m}
            </select>
          </label>`:m}
      <div class="ai-actions"><button class="btn outline" ?disabled=${s} @click=${c}>${k("rotate-ccw")}Verificar de novo</button></div>
      ${e&&!e.ready?r`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>Com o <a class="site" href="https://www.nabucasa.com/" target="_blank" rel="noopener noreferrer">Home Assistant Cloud</a>, a fala para texto já vem pronta.</li>
              <li>Sem ele, instale um motor de fala: o app Whisper (local, de graça) com a integração Wyoming, ou a fala para texto de uma IA como Google Gemini ou OpenAI.</li>
              <li>Volte aqui, toque em Verificar de novo e escolha o motor na lista.</li>
            </ol>
          </div>`:m}
    </div>`}async _startVoice(){if(this._rec||!this._form)return;this._setForm({step:"voice",rec:"starting",secs:0,level:0,error:null,heard:""});let e=new yt(t=>this._voiceLevel=t);this._rec=e;try{await e.start()}catch(t){e.cancel(),this._rec===e&&(this._rec=null),this._form&&this._form.step==="voice"&&this._setForm({rec:"off",error:Ea(t)});return}if(this._rec!==e||!this._form||this._form.step!=="voice")return e.cancel();this._setForm({rec:"on"}),clearInterval(this._recTimer),this._recTimer=setInterval(()=>{if(this._rec!==e)return clearInterval(this._recTimer);let t=e.seconds();this._setForm({secs:t,level:this._voiceLevel||0}),t>=120&&this._finishVoice()},120)}_stopVoice(){clearInterval(this._recTimer),this._rec&&this._rec.cancel(),this._rec=null}async _finishVoice(){let e=this._rec;if(!e)return;clearInterval(this._recTimer),this._rec=null;let t=e.stop();if(t.length<16e3*.4){this._setForm({rec:"off",error:"N\xE3o ouvi nada. Toque no microfone e fale."});return}let a=this._importToken=(this._importToken||0)+1;this._setForm({step:"loading",error:null,prevStep:"voice",loadingText:"Transcrevendo o que voc\xEA disse\u2026"});try{let s=await this.api.voiceText(t);if(this._importToken!==a||!this._form)return;this._setForm({text:s.text,heard:s.text}),this._readText()}catch(s){if(this._importToken!==a||!this._form)return;this._setForm({step:"voice",rec:"off",error:s.message||"N\xE3o consegui transcrever."})}}_renderMicBtn(){let e=this._voice;return!e||!e.ready||!this._aiOn()||!(this._ai&&this._ai.ready)?m:r`<button class="mic-top" aria-label="Falar: criar evento falando" title="Falar" @click=${()=>this._openImport("voice")}>${k("mic")}</button>`}_renderVoiceStep(e){let t=this._form,a=this._voice||{},s=t.rec==="on",i=Math.floor((t.secs||0)/60),n=String(Math.floor((t.secs||0)%60)).padStart(2,"0");return r`
      ${this._sheetHead("Falar")}
      <div class="voice ${s?"on":""}">
        <button class="voice-mic" style="--lvl:${s?(t.level||0).toFixed(2):0}" aria-label=${s?"Pronto: enviar o que falei":"Come\xE7ar a falar"} @click=${()=>s?this._finishVoice():this._startVoice()}>
          <span class="voice-ring"></span>${k(s?"check":"mic")}
        </button>
        <div class="voice-state">${s?r`<b>Ouvindo…</b> <span class="voice-time">${i}:${n}</span>`:t.rec==="starting"?"Abrindo o microfone\u2026":"Toque no microfone e fale"}</div>
        <p class="voice-hint">${s?"Toque de novo quando terminar.":r`Por exemplo: <i>“Dentista quinta às 15h na Clínica Sorriso”</i> ou <i>“Aniversário da Ana sábado, o dia todo”</i>.`}</p>
      </div>
      ${t.error?r`<div class="imp-error">${k("circle-alert")}<span>${t.error}</span></div>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${k("x")}Cancelar</button>
        <button class="btn primary" ?disabled=${!s} @click=${()=>this._finishVoice()}>${k("sparkles")}Pronto</button>
      </div>
      ${a.ready?m:r`<p class="sheet-note">${a.reason||""}</p>`}
    `}_focusSheetText(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".sheet textarea");e&&e.focus()})}_pickFiles(e){let t=this.renderRoot.querySelector(e==="scan"?"#cr-scan":e==="ics"?"#cr-ics":"#cr-photos");t&&(t.value="",t.click())}_releaseImages(){let e=this._form;if(e&&e.images)for(let t of e.images)t.url&&URL.revokeObjectURL(t.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(e){let t=n=>n.type==="application/pdf"||/\.pdf$/i.test(n.name||""),a=[...e.target.files||[]].filter(n=>!n.type||n.type.startsWith("image/")||t(n)).slice(0,6);if(e.target.value="",a.some(t)&&(a=[a.find(t)]),!a.length)return;this._sheet!=="import"&&await this._openImport("pick");let s=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:s?"review":"pick"});let i=[];for(let n of a)if(t(n)){let{files:l}=await Ta([n]);l[0]&&i.push({mime:"application/pdf",data:l[0].data,url:"",pdf:!0,nome:l[0].nome})}else i.push(await ds(n));this._readImages(i,s)}async _onIcsFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let a;try{a=Io(await t.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:t.name,note:null,error:null})}_readImages(e,t){if(this._sheet!=="import"||!e.length)return;let a=t?[...this._form.images||[],...e]:(this._releaseImages(),e);this._setForm({step:"loading",images:a,prevStep:t?"review":"pick",loadingText:e.some(s=>s.pdf)?"Lendo o PDF com IA\u2026":e.length>1?`Lendo ${e.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:e,appending:t})}async _runExtract({text:e,images:t,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",n=a?this._form.items||[]:[];try{let l=await this.api.extract({text:e,images:t?t.map(({data:d,mime:p})=>({data:d,mime:p})):void 0});if(!i())return;let c=l.events||[];if(!c.length){let d=e?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:d}):this._setForm({step:e?"text":"pick",error:d});return}this._haptic("success"),this._setForm({step:"review",items:[...n,...c.map(d=>({...d,on:!0}))],provider:l.provider||null,note:null,error:null})}catch(l){if(!i())return;a?this._setForm({step:"review",note:l.message||"Algo deu errado"}):this._setForm({step:e?"text":"pick",error:l.message||"Algo deu errado"})}}_readText(){let e=(this._form.text||"").trim();if(!e)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Configura\xE7\xF5es \u203A Integra\xE7\xF5es)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:e})}_clipOk(){return!!(navigator.clipboard&&navigator.clipboard.readText)&&!this._clipFailed}async _pasteClipboard(){let e="";try{e=await navigator.clipboard.readText()}catch{this._clipFailed=!0,this._focusSheetText(),this._showToast("Este aparelho n\xE3o deixa o app ler o que foi copiado. Toque e segure no campo e escolha Colar."),this.requestUpdate();return}if(!e){this._focusSheetText(),this._showToast("N\xE3o h\xE1 nada copiado.");return}this._setForm({text:e,error:null})}_setItem(e,t){let a=this._form.items.slice();a[e]={...a[e],...t},this._setForm({items:a})}_itemEvent(e){let t=s=>{let[i,n]=s.split(":").map(Number),l=Math.min(1439,i*60+n+60);return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[e.repeat]||"";return this._eventFromForm({title:e.title,date:e.date,endDate:e.end_date||"",allDay:!e.start,start:e.start,end:e.end||(e.start?t(e.start):""),repeat:e.rrule?wt(e.rrule):a,rrule:e.rrule||"",location:e.location,notes:e.notes})}async _importAdd(){let e=this._form,t=e.items.filter(n=>n.on&&(n.title||"").trim()),a=this._cal(e.target);if(!t.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let n of t)try{let l=this._itemEvent(n);await this.api.createEvent(e.target,l),s++,(!i||l.start<i)&&(i=l.start)}catch(l){this._showToast(`\u201C${I(n.title,24)}\u201D: ${l.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${N(s,"evento adicionado","eventos adicionados")} em ${I(a.name,20)}`,e.target,i)}async _openCamera(e={}){let t=navigator.mediaDevices,a=!!e.chat,s=!a&&!!(this._form&&this._form.step==="review");if(!t||!t.getUserMedia){this._cam={status:"error",shots:[],chat:a,appending:s,flash:0,error:window.isSecureContext===!1?"A c\xE2mera aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher.":"Este navegador n\xE3o deixa o app usar a c\xE2mera. Escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher."};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}return}this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:s,chat:a,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let i=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){i.getTracks().forEach(d=>d.stop());return}this._stream=i;let n=i.getVideoTracks()[0],l=n&&n.getCapabilities?n.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!l.torch},await this.updateComplete;let c=this.renderRoot.querySelector(".cam video");c&&(c.srcObject=i,c.play().catch(()=>{}))}catch(i){if(!this._cam)return;let n=i&&(i.name==="NotAllowedError"||i.name==="SecurityError");this._cam={...this._cam,status:"error",error:n?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(e=>e.stop()),this._stream=null}_closeCamera(e=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let t of this._cam.shots||[])URL.revokeObjectURL(t.url);this._cam=null,e||this._popEntry("rvCam")}}async _toggleTorch(){let e=this._stream&&this._stream.getVideoTracks()[0];if(!e)return;let t=!this._cam.torch;try{await e.applyConstraints({advanced:[{torch:t}]}),this._cam={...this._cam,torch:t}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let e=this.renderRoot.querySelector(".cam video");if(!e||!e.videoWidth||!this._cam||this._cam.shots.length>=6)return;let t=1800,a=Math.min(1,t/Math.max(e.videoWidth,e.videoHeight)),s=document.createElement("canvas");s.width=Math.round(e.videoWidth*a),s.height=Math.round(e.videoHeight*a),s.getContext("2d").drawImage(e,0,0,s.width,s.height);let i=await new Promise(l=>s.toBlob(l,"image/jpeg",.86));if(!i||!this._cam)return;let n=await ds(i,t);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,n],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let e=this._cam.shots,t=this._cam.appending,a=this._cam.chat;if(this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,a)return this._chatAddShots(e);this._sheet!=="import"&&await this._openImport("pick"),this._readImages(e,t&&this._form.step==="review")}_cameraFallback(){let e=this._cam&&this._cam.appending;if(this._cam&&this._cam.chat)return this._closeCamera(),this._chatAttach("fotos");this._closeCamera(),e&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(e=!0){if(!(!e&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(t){this._ai={...this._ai,ready:!1,images:!1,reason:t.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(e,t="ai_entity"){await this._saveAppPrefs({[t]:e||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/config",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#leitura-ia");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(e=>e.id),range:"12m"})}_exportRange(e){let t=B(new Date);return e==="3m"?[t,Ue(t,3)]:e==="year"?[Ue(t,-12),Ue(t,12)]:[t,Ue(t,12)]}render(){if(!this._ready)return r`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?r`${k("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:r`<span class="spin">${k("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let e=this._shownView(),t=this._accent(),a=this._dark,s=`--rv-accent:${t.fill};--rv-accent-ink:${a?t.fill:t.ink};--rv-accent-soft:${Pt(t.fill,a?.18:.14)};--rv-accent-faint:${Pt(t.fill,a?.08:.07)};--rv-accent-ink-light:${t.ink};`,i;return e.name==="calendar"?i=this._renderCalendar():e.name==="more"?i=this._renderMore():e.name==="rewards"?i=this._renderRewards():e.name==="routines"?i=this._renderRoutinesTab():i=this._renderNow(),e.name!=="now"&&(this._medsHold=this._choresHold=!1),r`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?r`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:m}
          ${this._online?m:r`<div class="offline">${k("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          ${this._renderSide(e)}
          <main @touchstart=${n=>this._onSwipeStart(n)} @touchend=${n=>this._onSwipeEnd(n)}>${i}</main>
          ${this._renderNav(e)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*,application/pdf" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${n=>this._onIcsFile(n)} />
      </div>
    `}_renderNav(e){let t=s=>e.name===s,a=(s,i,n,l)=>r`<button class="tab ${t(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${n}>${k(l)}<span>${n}</span></button>`;return r`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:e.name==="calendar"?this._cursor:null})} aria-label="Adicionar">
          <span class="pill">${k("plus")}</span>
        </button>
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
    </nav>`}_fourthTab(){return this._scoreOn()?["rewards","/recompensas","Recompensas","trophy"]:["routines","/rotinas","Rotinas","repeat"]}_shownView(){let e=this._view();return e.name==="rewards"&&!this._scoreOn()?{name:"routines"}:e}_renderRoutinesTab(){let e=this._catalogCount();return r`<section class="page more-page routines-tab">
      ${this._renderHead("Rotinas",{text:e?N(e,"cadastro","cadastros"):"Nada cadastrado ainda"})}
      ${this._renderCatalog()}
    </section>`}_renderSide(e){let t=d=>e.name===d,a=(d,p,h,u)=>r`<button class="side-link" aria-current=${t(d)?"page":"false"} @click=${()=>this._goTab(p)}>${k(u)}<span>${h}</span></button>`,s=this._sideHeld||(this._sideHeld=new Set),i=this._cals().filter(d=>!d.hidden||s.has(d.id)),n=i.filter(d=>!d.hidden).length,l=this._cals().filter(d=>d.hidden&&!s.has(d.id)),c=d=>r`<button class="side-cal ${d.hidden?"off":""}" role="switch" aria-checked=${d.hidden?"false":"true"} title=${d.hidden?"Mostrar na agenda":"Esconder da agenda"} style=${Y(d.color,this._dark)} @click=${()=>{d.hidden||s.add(d.id),this._saveCalPrefs(d.id,{hidden:d.hidden?null:!0})}}>
        <span class="sc-box">${d.hidden?m:k("check")}</span><span class="sl-name">${d.name}</span>
      </button>`;return r`<aside class="side" aria-label="Navegação">
      <div class="side-brand">${ga()}Cronolog<span>IA</span></div>
      <div class="side-nav">
        ${a("now","","Agora","clock-3")}
        <button class="side-link" @click=${()=>this._toSearch()}>${k("search")}<span>Buscar</span><kbd>/</kbd></button>
        ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
      ${this._renderSideMonth(e)}
      ${i.length||l.length?r`<div class="side-h"><span>Calendários</span><small>${n===i.length?i.length:`${n} de ${i.length}`}</small></div>
            <div class="side-lists">
              ${i.map(c)}
              ${at(this,"side-cals","Ocultos",l.length,()=>l.map(c))}
            </div>`:m}
      <div class="side-foot">CronologIA${this._version?` ${this._version}`:""}</div>
    </aside>`}_renderSideMonth(e){let t=new Date(this._now),a=this._sideMonth||this._cursor,s=new Date(a.getFullYear(),a.getMonth(),1),i=this._app("week_start",1),n=Ze(s,i),l=q(n,35).getMonth()===s.getMonth()?6:5,c=Array.from({length:l*7},(h,u)=>q(n,u)),d=e.name==="calendar"?this._cursor:null,p=h=>{this._sideMonth=Ue(s,h),this.requestUpdate()};return r`<div class="side-month">
      <div class="sm-head">
        <b>${ne(Le[s.getMonth()])}${s.getFullYear()!==t.getFullYear()?` ${s.getFullYear()}`:""}</b>
        <button class="icon-btn mini" aria-label="Mês anterior" @click=${()=>p(-1)}>${k("chevron-left")}</button>
        <button class="icon-btn mini" aria-label="Próximo mês" @click=${()=>p(1)}>${k("chevron-right")}</button>
      </div>
      <div class="sm-grid">
        ${[0,1,2,3,4,5,6].map(h=>r`<span class="sm-wd">${Ee[(h+i)%7].slice(0,1).toUpperCase()}</span>`)}
        ${c.map(h=>r`<button class="sm-day ${h.getMonth()!==s.getMonth()?"out":""} ${me(h,t)?"today":""} ${d&&me(h,d)?"sel":""}" aria-label=${oe(h,t)} @click=${()=>{this._sideMonth=null,this._openDay(h)}}>${h.getDate()}</button>`)}
      </div>
    </div>`}_renderHead(e,t,a=m,s=!1){let i=this._userName(),n=this._online?t:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return r`<header class="brand-head">
      <div class="head-row"><p class="eyebrow"><span class="brand">${ga()}Cronolog<span>IA</span></span>${i?r`<span class="sep"> · </span>Olá, ${i}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      ${s?r`<button class="uplink" @click=${()=>this._goMenu()}>${k("chevron-left")}<span>Mais</span></button>`:m}
      ${this._withFullBtn(r`<h1 class="page-title">${Hn[e]?r`<span class="mais-ic page-ic" aria-hidden="true">${k(Hn[e])}</span>`:m}${e}</h1>`)}
      ${n?r`<p class="status"><span class="dot ${n.tone||""}" aria-hidden="true"></span><span>${n.text}</span></p>`:m}
      ${a}
    </header>`}_renderTopActs(){let e=this._aiOn()&&this._ai&&this._ai.ready,t=this._view().name==="calendar";return r`<div class="top-acts">
      ${this._renderChatBtn()}${this._renderMicBtn()}
      ${e?r`<button class="btn outline sm" @click=${()=>this._openImport("pick")}>${k("scan-text")}Ler com IA</button>`:m}
      <button class="btn primary sm" @click=${()=>this._openForm({date:t?this._cursor:null})}>${k("plus")}Adicionar</button>
    </div>`}_fullOn(){return!!this._full&&(!!this._wide||!!this._embed)&&this._shownView().name==="now"}_withFullBtn(e){if(this._view().name!=="now"||!this._cals().length||!this._wide&&!this._embed)return e;let t=this._fullOn();if(this._embed){let s=l=>this._tellParent(l),i=this._conv||{},n=Ut?r`<button class="full-btn conv ${i.aberta?"on":""} ${i.novidade?"novo":""}" aria-pressed=${i.aberta?"true":"false"} @click=${()=>s("conversa")} aria-label="Conversa" title="Conversa">${k("message-circle")}</button>
            <button class="full-btn" @click=${()=>s("sair")} aria-label="Sair da tela cheia" title="Sair da tela cheia">${k("minimize")}</button>`:m;return r`<div class="title-row">${e}${t?r`<span class="full-clock">${j(new Date(this._now))}</span>`:m}${n}</div>`}let a=t?"Sair da tela cheia":"Tela cheia";return r`<div class="title-row">${e}${t?r`<span class="full-clock">${j(new Date(this._now))}</span>`:m}<button class="full-btn" @click=${()=>this._setFull(!t)} aria-label=${a} title=${a}>${k(t?"minimize":"maximize")}</button></div>`}_setFull(e,t=!1){if(!!this._full===e)return;if(this._haptic("light"),this._full=e,e)try{history.pushState({...history.state||{},rvFull:!0},"")}catch{}else!t&&history.state&&history.state.rvFull&&history.back();let a=document.documentElement;try{window.frameElement&&(a=window.frameElement)}catch{}let s=a.ownerDocument;this._fsDoc!==s&&(this._fsDoc&&this._fsDoc.removeEventListener("fullscreenchange",this._onFsChange),this._fsDoc=s,s.addEventListener("fullscreenchange",this._onFsChange));try{e&&!s.fullscreenElement&&a.requestFullscreen&&a.requestFullscreen().catch(()=>{}),!e&&s.fullscreenElement&&s.exitFullscreen&&s.exitFullscreen().catch(()=>{})}catch{}}_colorOfEvent(e){if(e.gerencia)return ue("ouro");if(e.todo)return ue(st);let t=this._cal(e.cal);return t&&t.color||this._accent()}_realEvent(e){return!e.kind&&!e.todo&&!e.gerencia}_dayState(e,t,a){let s=B(a);return B(t)>s||!e.length?"":e.every(i=>this._rowDone(i))?"all-done":B(t)<s?"left":""}_rowDone(e){return e.todo?!!e.todo.done:e.gerencia?!!this._checkOf(e):e.kind?!!(e.kind&&e.kind.kind!=="manutencao"&&this._checkOf(e)):!!this._checkOf(e)}_openAnyDay(e){this._openSheet("anyday",{day:P(e)})}_renderAnyDaySheet(){let e=new Date(this._now),t=F(this._form.day),a=We(this._events(t,q(t,1)),t).filter(n=>n.allDay&&!this._realEvent(n)),s=[...this._byPeriod(a.filter(n=>!this._rowDone(n)),t),...a.filter(n=>this._rowDone(n))],i=a.length-a.filter(n=>!this._rowDone(n)).length;return r`${this._sheetHead("Qualquer hora")}
      <p class="sheet-note top">${ne(oe(t,e))} · ${i} de ${N(a.length,"feita","feitas")}</p>
      <div class="any-list">
        ${this._partPickFor(s,t)}
        ${s.length?s.map(n=>this._renderAnyRow(n,t)):r`<p class="empty-line">Nada sem horário neste dia.</p>`}
      </div>`}_markerOf(e,t){let a=e.kind,s=a?a.kind:e.todo?"tarefa":"conta",i=this._rowDone(e),n=this._scorePoints(e),l=B(t)<=B(new Date(this._now)),c={key:e.key,summary:e.summary,points:a&&a.points||0,part:this._partOfEvent(e)},d=null,p=null;if(!(e.movedDone&&!e.movedDone.item)){if(s==="rotina"&&l)d=u=>this._markDone(c,"rotina",u),p=()=>this._undoCheck(c,"rotina");else if(s==="remedio"&&l)d=()=>this._check(c,"remedio"),p=()=>this._undoCheck(c,"remedio");else if(e.todo)d=u=>this._todoDone(e.todo,!0,u),p=()=>this._todoDone(e.todo,!1);else if(s==="manutencao"){let u=(this._ix().maint||[]).find(f=>f.cal===e.cal&&f.uid===e.uid&&f.canMove);u&&(d=f=>this._maintDone(u,f,!0))}}let h=!i&&!!d&&this._pickWho()&&(s==="rotina"||s==="manutencao"||!!e.todo&&n>0);return{kind:s,done:i,pts:c.part&&n?i?c.part.points:De(c):n,mark:d,unmark:p,quick:h}}_renderAnyRow(e,t){let a=e.kind,{kind:s,done:i,pts:n,mark:l,unmark:c,quick:d}=this._markerOf(e,t),p=i&&!e.todo&&!e.gerencia&&a?this._checkOf(e):null,h=!!(p&&p.skipped),u=s==="rotina"?this._partOfEvent(e):null,f=p&&p.part?u&&u.done||p.part.frac:!i&&u?u.done:null,x=i&&f==null,w=f!=null?`--f:${Math.round(f*100)}%`:"",b=this._cal(e.cal),$=[a&&a.who,!i&&u?`falta ${Math.round((1-u.done)*100)}%`:"",e.todo?e.todo.listName:b?b.name:e.gerencia?"GerencIA":""].filter(Boolean).join(" \xB7 ");return r`<div class="chore ${i?"done":""} ${h?"skipped":""}" style=${Y(this._colorOfEvent(e),this._dark)}>
      ${l||i&&c?r`<button class="chk ${x?"on":""} ${w?"part":""}" style=${w} aria-label="${i?"Desmarcar":"Marcar"} ${e.summary}" @click=${()=>i?c&&c():l(null)}>${x?k(h?"skip-forward":"check"):m}</button>`:i||w?r`<span class="chk ${x?"on":""} ${w?"part":""}" style=${w} aria-label=${h?"Pulada":w?"Feita em parte":"Feito"}>${x?k(h?"skip-forward":"check"):m}</span>`:r`<span class="chk ro" aria-hidden="true">${k({manutencao:"wrench",conta:"receipt",remedio:"pill",rotina:"spray-can",tarefa:"list-checks"}[s]||"calendar")}</span>`}
      <button class="chore-tx" @click=${()=>this._openEvent(e)}><b>${e.summary}</b><small>${d&&n?r`<span class="pts-inline">+${n}</span> · `:m}${$||{rotina:"Rotina",manutencao:"Manuten\xE7\xE3o",remedio:"Rem\xE9dio",conta:"Conta",tarefa:"Tarefa"}[s]}</small></button>
      ${d?this._renderQuickWho(e.summary,n,g=>l(g)):n?r`<span class="pts ${i?"got":""}">+${n}</span>`:m}
    </div>`}_byPeriod(e,t){let a=new Date(this._now),s=me(t,a)?a:new Date(t.getFullYear(),t.getMonth(),t.getDate(),6);return jt(e,s,i=>i.kind&&i.kind.period||(i.allDay?"":He(i.start.getHours())))}_anyTime(e){return!!e.allDay&&(!!e.todo||!!e.kind&&e.kind.kind!=="conta")}_dayHead(e,t,a){let s=new Date(this._now);return r`<button class="day-head ${me(e,s)?"today":""}" @click=${a}>
      <span class="dh-cal" aria-hidden="true"><small>${Ee[e.getDay()].slice(0,3)}</small><b>${e.getDate()}</b></span>
      <span class="dh-label">${oe(e,s)}</span>
      <span class="dh-count">${t}</span>
    </button>`}_renderDayRows(e,t){let a=d=>(!d.kind||d.kind.kind==="remedio")&&!d.todo&&!d.gerencia,s=(d,p)=>Number(d.allDay)-Number(p.allDay)||d.start-p.start,i=e.filter(a).sort(s),n=e.filter(d=>!a(d)).sort(s),l=n.filter(d=>!this._rowDone(d));n.splice(0,n.length,...this._byPeriod(l,t),...n.filter(d=>this._rowDone(d)));let c=this._awayDay(t)?r`<div class="away-day">${k("plane")}<span>Férias: rotinas, tarefas e manutenção pausadas</span></div>`:m;return r`${c}${i.map(d=>this._renderRow(d,t))}${n.length?r`<div class="day-sep ${i.length?"":"first"}">Rotinas, tarefas e lembretes</div>${this._partPickFor(n,t)}${n.map(d=>this._renderRow(d,t))}`:m}`}_partPickFor(e,t){return e.some(s=>s.kind&&s.kind.kind==="rotina"&&!this._rowDone(s)&&this._markerOf(s,t).mark)?this._renderPartPick():m}_renderRow(e,t,{showCal:a=!0}={}){let s=this._now,i=e.end.getTime()<=s,n=this._cal(e.cal),l;if(e.allDay){let C=Z(e.end,e.start),v=C<=1&&this._anyTime(e)&&e.kind&&be(e.kind.period);l=v?r`<b class="any">${v.label}</b><small class="per">${k(v.icon)}</small>`:C<=1&&this._anyTime(e)?r`<b class="any">Qualquer</b><small>hora</small>`:r`<b>Dia</b><small>${C>1?`${Z(t,e.start)+1}/${C}`:"todo"}</small>`}else{let C=me(e.start,t),v=me(e.end,t)||e.end.getHours()===0&&e.end.getMinutes()===0&&Z(e.end,t)===1;l=r`<b>${C?j(e.start):"\u2026"}</b><small>${v?j(e.end):"segue"}</small>`}let c=e.kind,d=e.todo?e.todo.done:c?c.kind!=="manutencao"&&this._checkOf(e):this._checkOf(e),p=!d&&e.start.getTime()<=s&&e.end.getTime()>s&&!e.allDay,h=!d&&c&&c.kind==="remedio"&&B(e.start)<B(new Date(s)),f=[...c?c.kind==="remedio"?[c.dose,c.who]:c.kind==="conta"&&c.value!=null?[this._money(c.value)]:[c.who]:[],e.location].filter(Boolean).join(" \xB7 "),x=a?n?n.name:e.gerencia?"GerencIA":e.todo?`${e.todo.listName} \xB7 ResolvIA`:"":"",w=(c||e.todo)&&this._pickWho()?this._markerOf(e,t):null,b=c&&c.kind==="rotina"?this._partOfEvent(e):null,$=this._scoreOn()&&!d?c&&(c.kind==="rotina"||c.kind==="manutencao")&&c.points>0?c.points:e.todo&&e.todo.points>0?e.todo.points:0:0,g=$&&b?De({points:$,part:b}):$,A=!d&&b?`falta ${Math.round((1-b.done)*100)}%`:"",y=e.rrule?Fe(e.rrule):c&&c.kind==="rotina"&&c.after?`Volta ${ge(c.after)} depois de feita`:c&&c.kind==="manutencao"&&c.every?`A cada ${ge(c.every)}`:"",O=r`<button class="ev-row ${i?"past":""} ${p?"live":""} ${d?"done":""}" style=${Y(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="ev-time">${l}${this._evMark(e,d,b,h)}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo?r`<span class="kind-ic">${k("list-checks")}</span>`:this._kindIcon(e)}${e.summary}</span>${f||g||x||A?r`<span class="ev-sub">${[g?r`<span class="pts-inline">+${g}</span>`:"",A,f,x?r`<span class="ev-cal">${x}</span>`:""].filter(C=>C!=="").map((C,v)=>v?r` · ${C}`:C)}</span>`:m}</span>
      ${y&&!(w&&w.quick)?r`<span class="ev-rep" title=${y}>${k("repeat")}</span>`:m}
    </button>`;return w&&w.quick?r`<div class="ev-line">${O}${this._renderQuickWho(e.summary,w.pts,C=>w.mark(C))}</div>`:O}_evMark(e,t,a,s){let i=e.todo?"sq":"",n=t&&t.part?a&&a.done||t.part.frac:!t&&a?a.done:null;if(n!=null){let l=Math.round(n*100),c=t?`Feita em parte (${l}%)`:`Feita em parte: falta ${100-l}%`;return r`<span class="ev-done part" style="--f:${l}%" title=${c} aria-label=${c}></span>`}if(t){let l=t.skipped?e.kind&&e.kind.kind==="remedio"?"Pulado":"Pulada":"";return r`<span class="ev-done ${i} ${t.skipped?"skipped":""}" title=${l||"Feito"} aria-label=${l||"Feito"}>${k(t.skipped?"skip-forward":"check")}</span>`}return s?r`<span class="ev-done missed" title="Não tomado" aria-label="Não tomado">${k("x")}</span>`:m}_renderNow(){let e=new Date(this._now),t=B(e),a=this._events(q(t,-1),q(t,2)).filter(z=>!z.kind&&!z.todo),s=this._store.loading(q(t,-1),q(t,2)),i=this._ix().meds.filter(z=>z.state==="atrasado"),n=We(a,t),l=z=>z.end-z.start>=12*36e5,c=n.filter(z=>(z.allDay||l(z))&&!this._checkOf(z)),d=n.filter(z=>!z.allDay&&!l(z)),p=d.filter(z=>z.start<=e&&z.end>e&&!this._checkOf(z)).sort((z,se)=>se.start-z.start),h=q(t,1),u=a.filter(z=>!z.allDay&&z.start>e&&z.start<h&&!l(z)&&!this._checkOf(z)).sort((z,se)=>z.start-se.start),f=u[0],x=Sa(u),w=this._visible();if(!this._cals().length)return this._renderNoCalendars();let b=n.filter(z=>!this._checkOf(z)),$=d.filter(z=>!this._checkOf(z)),g=$.filter(z=>z.end>e).length,A=this._awayNow()?"de f\xE9rias":n.length?b.length?`${N(b.length,"evento","eventos")} hoje${g&&g<$.length?` \xB7 ${g} pela frente`:""}`:"tudo feito hoje":"nada hoje",y=i.length?{text:`${ne(rs(e))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${ne(rs(e))} \xB7 ${A}`},O,C=null;if(p.length){C=p[0];let z=p[0],se=this._cal(z.cal);O=this._ticket(z,{label:"Agora",pill:`termina ${pt(z.end-e)}`,when:r`<b>${j(z.start)}</b> – <b>${j(z.end)}</b> · ${It(z.end-z.start)}`,stub:f?r`<span class="tk-next">Depois <b>${j(f.start)}</b> ${x.map(D=>D.summary).join(", ")}</span>`:r`<span class="dot"></span><span>${[se&&se.name,z.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e,live:!0})}else if(x.length>1)C=f,O=this._ticketMany(x,{label:"A seguir",pill:pt(f.start-e),now:e});else if(f){C=f;let z=this._cal(f.cal);O=this._ticket(f,{label:"A seguir",pill:pt(f.start-e),when:r`<b>${j(f.start)}</b> – ${j(f.end)} · hoje`,stub:r`<span class="dot"></span><span>${[z&&z.name,f.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e})}let v=C&&d.length===1&&d[0]===C||!d.some(z=>z.end>e&&!this._checkOf(z)),_=this._showAllDay||c.length<=3?c:c.slice(0,2),M=r`<div class="now-line"><span>${j(e)}</span></div>`,E=!1,L=this._ix().meds||[],V=L.length>0&&L.every(z=>z.taken)&&!this._medsHold,de=w.length?m:r`<div class="hint-card">${k("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais/calendarios")}>${k("eye")}Mostrar</button></div>`,$e=r`${V?m:this._renderMedsPanel()} ${this._renderBillsPanel()}`,ee=z=>{let se=q(new Date(z.end),z.allDay?-1:0);return z.end-z.start>864e5&&Z(se,t)>=1?` \xB7 at\xE9 ${le(se,e)}`:""},Q=c.length?r`<div class="allday" aria-label="O dia todo">
          ${_.map(z=>r`<button class="ad-chip" style=${Y(this._colorOfEvent(z),this._dark)} @click=${()=>this._openEvent(z)}><span class="dot"></span><span>${z.summary}<small>${ee(z)}</small></span></button>`)}
          ${c.length>_.length?r`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${c.length-_.length} o dia todo</button>`:m}
        </div>`:m,X=!(v&&!c.length);this._nowShown={now:!!O,day:X};let xe=r`${X?r`<div class="panel agenda">
        ${this._panelHead("calendar-days","accent",`Hoje \xB7 ${le(e,e)}`)}
        ${Q}
        ${v?O?m:r`<p class="empty-line">${s?"Carregando\u2026":d.length?"Nada mais com hor\xE1rio hoje.":"Nenhum hor\xE1rio marcado hoje."}</p>`:r`${d.length?d.map(z=>{let se=!E&&z.start>e?(E=!0,M):m;return r`${se}${this._renderRow(z,t)}`}):r`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
            ${d.length&&!E&&d[d.length-1].end<=e?M:m}`}
        <button class="add-line" @click=${()=>this._openForm({date:t})}>${k("plus")}Evento hoje</button>
      </div>`:m}`,Ne={away:this._renderAwayBanner(),search:r`${this._renderNowSearch()} ${de}`,meds:V?m:this._renderMedsPanel(),bills:this._renderBillsPanel(),gavisos:this._fullOn()?m:this._renderGerenciaAvisos(),now:O||m,day:xe,memoria:this._renderMemoriaPanel(),home:this._renderHomePanel(),todos:this._renderTodosPanel()},H=this._nowOrder(),ve=z=>H.filter(se=>z.includes(se)).map(se=>Ne[se]),re=r`<button class="add-line now-order" @click=${()=>this._openSheet("nowcards")}>${k("sliders-horizontal")}Ordem dos cards</button>`,ke=this._fullOn()?this._renderMemoriaPanel(!0):m,W=this._renderPlacarNow();return this._fullOn()?this._renderPainel({head:this._renderHead("Hoje",y),events:a,memo:ke,top:Ne.away,placar:W}):this._desk?r`<section class="page now-page">
        ${this._renderHead("Hoje",y)}
        ${ve(["away","search"])}
        <div class="now-cols">
          <div class="now-main">${ve(["now","day","memoria","todos"])}</div>
          <div class="now-side">${ve(["meds"])}${W}${ve(["bills","gavisos","home"])}</div>
        </div>
        ${re}
      </section>`:r`<section class="page">
      ${this._renderHead("Hoje",y)}
      ${W}
      ${H.map(z=>Ne[z])}
      ${re}
    </section>`}_nowKey(){return this._user&&(this._user.person||this._user.name)||""}_nowOrder(){return Mo((this._app("now_order",null)||{})[this._nowKey()])}_saveNowOrder(e){let t={...this._app("now_order",null)||{}};e&&e.join()!==mt.join()?t[this._nowKey()]=e:delete t[this._nowKey()],this._saveAppPrefs({now_order:Object.keys(t).length?t:null})}_moveNowCard(e,t){let a=this._nowOrder(),s=a.indexOf(e),i=s+t;s<0||i<0||i>=a.length||([a[s],a[i]]=[a[i],a[s]],this._saveNowOrder(a))}_renderNowCardsSheet(){let e=this._nowOrder(),t=n=>this._app(n,!1)!==!0,a=this._nowShown||{},s={away:["plane","F\xE9rias",()=>this._renderAwayBanner()===m?"S\xF3 com f\xE9rias marcadas":""],search:["search","Busca",()=>""],meds:["pill","Rem\xE9dios de hoje",()=>this._renderMedsPanel()===m?"Sem nada agora":""],bills:["receipt","Contas do GerencIA",()=>t("gerencia_on")?"Integra\xE7\xE3o desligada":this._renderBillsPanel()===m?"Sem nada agora":""],gavisos:["triangle-alert","Avisos do GerencIA",()=>t("gerencia_on")?"Integra\xE7\xE3o desligada":this._renderGerenciaAvisos()===m?"Sem nada agora":""],now:["clock","Agora ou a seguir",()=>a.now===!1?"Sem nada agora":""],day:["calendar-days","Hoje",()=>a.day===!1?"Nada mais hoje":""],memoria:["notebook-pen","MemorIA",()=>t("memoria_on")?"Integra\xE7\xE3o desligada":this._renderMemoriaPanel()===m?"Sem nada agora":""],home:["spray-can","Rotina da casa",()=>this._renderHomePanel()===m?"Sem nada agora":""],todos:["list-checks","Tarefas do ResolvIA",()=>t("resolvia_on")?"Integra\xE7\xE3o desligada":this._renderTodosPanel()===m?"Sem nada agora":""]},i=e.join()!==mt.join();return r`${this._sheetHead("Ordem dos cards")}
      <p class="sheet-note top">A ordem da Agora, só para você.</p>
      <ol class="now-cards">
        ${e.map((n,l)=>{let[c,d,p]=s[n],h=p();return r`<li class="row nc-row ${h?"off":""}" data-card=${n}>
            <span class="tile">${k(c)}</span>
            <div class="grow"><div class="label">${d}</div>${h?r`<div class="hint">${h}</div>`:m}</div>
            <button class="icon-btn" ?disabled=${l===0} @click=${()=>this._moveNowCard(n,-1)} aria-label="Subir ${d}">${k("chevron-up")}</button>
            <button class="icon-btn" ?disabled=${l===e.length-1} @click=${()=>this._moveNowCard(n,1)} aria-label="Descer ${d}">${k("chevron-down")}</button>
          </li>`})}
      </ol>
      ${i?r`<button class="add-line now-reset" @click=${()=>this._saveNowOrder(null)}>${k("rotate-ccw")}Voltar à ordem de sempre</button>`:m}`}_renderNowSearch(){return r`<form class="search-box home-search" role="search" @submit=${e=>{e.preventDefault(),this._toSearch(e.target.q.value.trim())}}>
      ${k("search")}
      <input type="search" name="q" placeholder="Buscar nos eventos" aria-label="Buscar nos eventos" autocomplete="off" enterkeyhint="search" @input=${e=>{if(!e.target.value.trim())return;let t=e.target.value;e.target.value="",this._toSearch(t)}} />
      <kbd>/</kbd>
    </form>`}_ticket(e,{label:t,pill:a,when:s,stub:i,now:n,live:l=!1}){return r`<button class="hero-ev ticket ${l?"live":""}" style=${Y(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e,n,l)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${k("clock","sm")}${a}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_ticketMany(e,{label:t,pill:a,now:s}){let i=e[0];return r`<div class="hero-ev ticket many" role="group" aria-label="${t}: ${N(e.length,"compromisso","compromissos")} às ${j(i.start)}" style=${Y(this._colorOfEvent(i),this._dark)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(i,s)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${k("clock","sm")}${a}</span></span>
          <span class="hero-title">${N(e.length,"compromisso","compromissos")}</span>
          <span class="tk-when"><b>${j(i.start)}</b> · hoje</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-list">
        ${e.map(n=>{let l=this._cal(n.cal);return r`<button class="tk-row" style=${Y(this._colorOfEvent(n),this._dark)} @click=${()=>this._openEvent(n)}>
            ${this._kindIcon(n)}<span class="tk-row-tx"><b>${n.summary}</b><small>${[`at\xE9 ${j(n.end)}`,l&&l.name,n.location].filter(Boolean).join(" \xB7 ")}</small></span>${k("chevron-right")}
          </button>`})}
      </span>
    </div>`}_clock(e,t,a=!1){let n=A=>(A.getHours()%12*60+A.getMinutes())/720*2*Math.PI,l=(A,y)=>[40+y*Math.sin(A),40-y*Math.cos(A)],c=(A,y,O)=>{let C=y-A;for(;C<=0;)C+=2*Math.PI;if(C=Math.max(C,.42),C>=2*Math.PI-.01)return`M 40 ${40-O} A ${O} ${O} 0 1 1 ${39.99} ${40-O}`;let[v,_]=l(A,O),[M,E]=l(A+C,O);return`M ${v.toFixed(2)} ${_.toFixed(2)} A ${O} ${O} 0 ${C>Math.PI?1:0} 1 ${M.toFixed(2)} ${E.toFixed(2)}`},d=Array.from({length:12},(A,y)=>{let O=y/12*2*Math.PI,[C,v]=l(O,y%3?27:24),[_,M]=l(O,29);return Rs(C,v,_,M,y%3?"tick":"tick major")}),p="",h="",u=t;if(e){let A=e.end-e.start>=432e5;p=A?c(0,2*Math.PI,34):c(n(e.start),n(e.end),34),a&&!A&&(h=c(n(e.start),n(t),34)),u=a?t:e.start}let f=n(u),x=u.getMinutes()/60*2*Math.PI,[w,b]=l(f,15),[$,g]=l(x,23);return r`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${d}
      ${p?Wn(p,a?"span faint":"span"):m}
      ${h?Wn(h,"span"):m}
      ${Rs(40,40,w,b,"hand hour")}
      ${Rs(40,40,$,g,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return r`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${k("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let e=new Date(this._now),t=this._cursor,a=this._mode,s=this._app("week_start",1),i,n,l;if(a==="mes"||a==="lista")i=`${ne(Le[t.getMonth()])}${t.getFullYear()!==e.getFullYear()?` ${t.getFullYear()}`:""}`,n=()=>this._cursor=a==="lista"?q(t,-30):Ue(t,-1),l=()=>this._cursor=a==="lista"?q(t,30):Ue(t,1);else if(a==="semana"||a==="3dias"){let h=a==="3dias"?3:7,u=a==="3dias"?t:Ze(t,s),f=q(u,h-1);i=u.getMonth()===f.getMonth()?`${u.getDate()}\u2013${f.getDate()} ${Le[f.getMonth()].slice(0,3)}`:`${u.getDate()} ${Le[u.getMonth()].slice(0,3)} \u2013 ${f.getDate()} ${Le[f.getMonth()].slice(0,3)}`,n=()=>this._cursor=q(t,-h),l=()=>this._cursor=q(t,h)}else i=oe(t,e),n=()=>this._cursor=q(t,-1),l=()=>this._cursor=q(t,1);let c=[["mes","M\xEAs","layout-grid"],["semana","Semana","calendar-range"],["3dias","3 dias","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],d;a==="semana"?d=this._renderTimeGrid(Ze(t,s),7):a==="3dias"?d=this._renderTimeGrid(t,3):a==="dia"?d=this._renderTimeGrid(t,1):a==="lista"?d=this._renderList():d=this._renderMonth();let p=a==="mes"?t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()&&me(t,e):me(t,e);return r`<section class="page cal-page">
      <div class="head-row"><p class="eyebrow"><span class="brand">${ga()}Cronolog<span>IA</span></span>${this._userName()?r`<span class="sep"> · </span>Olá, ${this._userName()}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      <div class="cal-top">
        <div class="cal-title">
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{n(),this._scrollWeek=!0}}>${k("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{l(),this._scrollWeek=!0}}>${k("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${c.map(([h,u,f])=>r`<button class=${a===h?"on":""} role="tab" aria-selected=${a===h?"true":"false"} @click=${()=>this._setMode(h)}>${k(f)}<span>${u}</span></button>`)}
        </div>
        <button class="pick ${p?"on":""}" @click=${()=>{this._cursor=B(new Date),this._scrollWeek=!0}}>${k("sun")}<span>Hoje</span></button>
      </div>
      ${d}
    </section>`}_renderMonth(){let e=new Date(this._now),t=this._cursor,a=this._app("week_start",1),s=new Date(t.getFullYear(),t.getMonth(),1),i=Ze(s,a),n=q(i,42),l=this._events(i,n),c=[];for(let u=0;u<42;u++){let f=q(i,u),x=We(l,f);c.push({d:f,list:x})}let d=c[35].d.getMonth()!==t.getMonth()?5:6,p=We(l,t),h={x:0,y:0};return r`
      <div class="month" @touchstart=${u=>(h.x=u.touches[0].clientX,h.y=u.touches[0].clientY)} @touchend=${u=>{let f=u.changedTouches[0].clientX-h.x,x=u.changedTouches[0].clientY-h.y;Math.abs(f)>60&&Math.abs(x)<50&&(this._cursor=Ue(t,f<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(u=>r`<span>${Ee[(u+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${c.slice(0,d*7).map(({d:u,list:f})=>{let x=u.getMonth()!==t.getMonth(),w=[...new Set(f.map($=>this._colorOfEvent($).fill))].slice(0,4),b=this._dayState(f,u,e);return r`<button class="cell ${x?"out":""} ${me(u,e)?"today":""} ${me(u,t)?"sel":""} ${this._awayDay(u)?"away":""} ${b}" @click=${()=>this._cursor=u} aria-label="${oe(u,e)}${this._awayDay(u)?" (f\xE9rias)":""}: ${N(f.length,"evento","eventos")}${b==="all-done"?", tudo feito":b==="left"?", algo ficou para tr\xE1s":""}">
              <span class="num">${u.getDate()}</span>
              <span class="dots">${w.map($=>r`<i style="background:${$}"></i>`)}${f.length>4?r`<b>+</b>`:m}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title ${me(t,e)?"today":""}">
          <span class="dh-cal" aria-hidden="true"><small>${Ee[t.getDay()].slice(0,3)}</small><b>${t.getDate()}</b></span>
          <span class="dt-label">${oe(t,e)}</span>
          <button class="text-btn" @click=${()=>this._openForm({date:t})}>${k("plus")}Evento</button>
        </div>
        ${p.length?this._renderDayRows(p,t):r`<p class="empty-line">${this._store.loading(i,n)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(e,t){let a=new Date(this._now),s=Array.from({length:t},(g,A)=>q(e,A)),i=this._events(s[0],q(s[t-1],1)),n=Array.from({length:24},(g,A)=>A),l=this._app("week_start",1),c=g=>g.allDay&&!this._realEvent(g),d=g=>!c(g)&&(g.allDay||g.end-g.start>=12*36e5),p=s.map(g=>We(i,g).filter(d)),h=Math.max(0,...p.map(g=>g.length)),u=s.map(g=>We(i,g).filter(c)),f={fill:this._dark?"#4fd18f":"#1f9d63",ink:"#167a4b"},x=(g,A)=>{let y=A.filter(O=>this._rowDone(O)).length;return{done:y,total:A.length,all:y===A.length}},w=t>1?s:Array.from({length:7},(g,A)=>q(Ze(this._cursor,l),A)),b=t>1?i:this._events(w[0],q(w[6],1)),$=g=>{let A=this._dayState(We(b,g),g,a);return r`<button class="ws-day ${me(g,a)?"today":""} ${me(g,this._cursor)?"sel":""} ${A}" @click=${()=>this._cursor=g} aria-label="${oe(g,a)}${A==="all-done"?", tudo feito":A==="left"?", algo ficou para tr\xE1s":""}">
        <span>${Ee[g.getDay()]}</span><b>${g.getDate()}</b>
      </button>`};return r`
      ${t>1?r`<div class="week-strip" style="--n:${t}">${w.map($)}</div>`:r`<div class="week-strip day-strip">${w.map($)}</div>`}
      ${u.some(g=>g.length)?t===1?(()=>{let g=x(s[0],u[0]);return r`<button class="any-bar ${g.all?"all":""}" @click=${()=>this._openAnyDay(s[0])}>
                ${k(g.all?"circle-check":"list-checks")}<span>Qualquer hora</span><b>${g.done}/${g.total}</b>${k("chevron-right")}
              </button>`})():r`<div class="tgrid-any" style="--n:${t}">
              <span class="tg-label any-ic" title="Qualquer hora">${k("list-checks")}</span>
              ${u.map((g,A)=>{if(!g.length)return r`<span></span>`;let y=x(s[A],g);return r`<button class="tg-any ${y.all?"all":""}" aria-label="Qualquer hora, ${oe(s[A],a)}: ${y.done} de ${y.total} feitas" @click=${()=>this._openAnyDay(s[A])}>${y.done}/${y.total}</button>`})}
            </div>`:m}
      ${h?r`<div class="tgrid-allday" style="--n:${t}">
            <span class="tg-label">dia todo</span>
            ${p.map(g=>r`<div class="tg-adcol">${g.slice(0,3).map(A=>r`<button class="tg-ad ${this._checkOf(A)?"done":""}" style=${Y(this._checkOf(A)?f:this._colorOfEvent(A),this._dark)} @click=${()=>this._openEvent(A)}>${A.summary}</button>`)}${g.length>3?r`<span class="tg-admore">+${g.length-3}</span>`:m}</div>`)}
          </div>`:m}
      <div class="tgrid-scroll">
        <div class="tgrid ${t===1?"one":t===3?"three":"week"}" style="--n:${t};--hh:${it}px">
          <div class="tg-hours">${n.map(g=>r`<span style="top:${g*it}px">${g?`${String(g).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(g=>{let A=qo(We(i,g).filter(C=>!d(C)),g),y=me(g,a),O=(a.getHours()+a.getMinutes()/60)*it;return r`<div class="tg-col ${y?"today":""}" @click=${C=>{if(C.target!==C.currentTarget)return;let v=C.offsetY;this._openForm({date:g,hour:Math.max(0,Math.min(23,Math.floor(v/it)))})}}>
              ${A.map(({event:C,top:v,height:_,lane:M,lanes:E})=>{let L=Math.max(_*it-2,it/2-2),V=!!(C.kind&&C.kind.kind==="remedio"),de=!!this._checkOf(C);return r`<button class="tg-ev ${L<34?"short":""} ${V?"med":""} ${de?"done":""}" style="${Y(de?f:this._colorOfEvent(C),this._dark)}top:${v*it}px;height:${L}px;left:calc(${M/E*100}% + 1px);width:calc(${100/E}% - 2px)" @click=${()=>this._openEvent(C)}>
                  <b>${V?k(de?"check":"pill"):de?"\u2713 ":""}${C.summary}</b>${L>=34?r`<small>${j(C.start)}${t===1&&C.location?` \xB7 ${C.location}`:""}${t===1&&V&&C.kind.dose?` \xB7 ${C.kind.dose}`:""}</small>`:m}
                </button>`})}
              ${y?r`<i class="tg-now" style="top:${O}px"></i>`:m}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let e=new Date(this._now),t=this._query.trim(),a=os(t),s,i;a?(s=q(B(e),-365),i=q(B(e),366)):(s=this._cursor,i=q(this._cursor,30));let n=this._events(s,i);a&&(n=n.filter(h=>os(`${h.summary} ${h.location} ${h.description}`).includes(a)));let l=new Map,c=(h,u)=>{let f=P(h);l.has(f)||l.set(f,{d:h,list:[]}),l.get(f).list.push(u)};for(let h of n){let u=B(h.start<s?s:h.start);if(c(u,Ca(h,u)),a)continue;let f=h.allDay?q(B(new Date(h.end)),-1):B(new Date(h.end-1));for(let x=q(u,1);x<=f&&x<i;x=q(x,1))c(x,Ca(h,x))}let d=[...l.values()].sort((h,u)=>h.d-u.d),p=this._store.loading(s,i);return r`
      <label class="search-box">
        ${k("search")}
        <input type="search" data-q="buscar" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${h=>this._query=h.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?r`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${k("x")}</button>`:m}
      </label>
      ${a?r`<p class="page-sub" style="margin-top:0">${p?"Buscando\u2026":N(n.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:m}
      ${d.length?r`<div class="panel agenda">
            ${d.map(({d:h,list:u})=>r`${this._dayHead(h,u.length,()=>this._openDay(h,"dia"))}${this._renderDayRows(u,h)}`)}
          </div>`:r`<div class="panel"><div class="empty"><div class="em-icon">${k(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":p?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${I(t,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let e=this._cals(),t=[];for(let l of e){let c=t.find(d=>d.label===l.group);c||t.push(c={label:l.group,list:[],off:[]}),(l.hidden?c.off:c.list).push(l)}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal(),n=l=>r`<div class="row cal-row ${l.hidden?"off":""}" style=${Y(l.color,this._dark)}>
      <button class="tile" @click=${()=>this._openCalSheet(l)} aria-label="Personalizar ${l.name}">${k(l.icon)}</button>
      <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(l)}>
        <div class="label">${l.name}</div>
        <div class="hint">${[l.device,a.get(l.id)?"n\xE3o carregou":l.unavailable?"indispon\xEDvel":l.canCreate?l.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
      </button>
      <label class="switch"><input type="checkbox" role="switch" .checked=${ca(!l.hidden)} @change=${c=>this._saveCalPrefs(l.id,{hidden:c.target.checked?null:!0})} aria-label="Mostrar ${l.name}" /><span class="track"></span></label>
    </div>`;return r`
      ${t.map(l=>r`<div class="panel">
          ${this._secHead("calendar-days",l.label)}
          ${ae(l.list,c=>c.id,n)}
          ${l.off.length?r`<div class="cal-ocultos">${at(this,`cals:${l.label}`,"Ocultos",l.off.length,()=>ae(l.off,c=>c.id,n))}</div>`:m}
        </div>`)}
      <div class="panel" id="novos-eventos">
        ${this._secHead("calendar-plus","Novos eventos")}
        ${s.length?r`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${l=>this._saveAppPrefs({default_calendar:l.target.value})}>
                ${s.map(l=>r`<option value=${l.id} ?selected=${l.id===i}>${l.name}</option>`)}
              </select>
            </label>`:r`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let e=this._isAdmin(),t=(s,i,n,l)=>r`<button class="row" @click=${l}>
      <span class="tile" style=${Y(this._accent(),this._dark)}>${k(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${n}</div></span>
      ${k("chevron-right")}
    </button>`,a=s=>()=>e?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return r`<div class="panel">
      ${this._secHead("plus","Adicionar calend\xE1rios")}
      ${t("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${t("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${t("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${t("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${t("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(e){this._openSheet("calendar",{id:e.id,name:e.colorId||e.name!==e.origName?e.name:"",color:e.colorId,hidden:e.hidden})}async _saveCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return;let a=(e.name||"").trim();await this._saveCalPrefs(e.id,{name:a&&a!==t.origName?a:null,color:e.color||null,hidden:e.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMenu(){return r`<section class="page more-menu">
      ${this._renderHead("Mais",null)}
      <ul class="panel menu-list" aria-label="Mais">
        ${Oa.filter(([e])=>e!=="rotinas"||this._scoreOn()).map(([e,t,a,s,i])=>r`<li>
            <button class="menu-row" data-k=${e} @click=${()=>this._go(t)}>
              <span class="mais-ic" aria-hidden="true">${k(s)}</span><span class="mb"><b>${a}</b><span>${i}</span></span>${k("chevron-right")}
            </button>
          </li>`)}
      </ul>
      ${this._renderFoot()}
    </section>`}_renderFoot(){return r`<p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>`}_renderMore(){let e=this._view();if(e.tab==="menu")return this._renderMenu();let t=e.tab,a,s=null;if(e.config)t==="integracoes"?a=r`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderMemoriaSettings()} ${this._renderCorreriaPanel()} ${this._renderAiPanel()} ${this._aiOn()&&this.api.memoriaIa?this._renderMemoriaIa():m} ${this._aiOn()&&this.api.voiceStatus?this._renderVoicePanel():m} ${this._aiOn()?this._renderUsage():m} ${this._renderSensorsPanel()}`:t==="dados"?a=this._renderDataPanel():t==="aparencia"?a=this._renderAppearance():a=this._renderOptions();else if(t==="rotinas"){a=this._renderCatalog();let n=this._catalogCount();s={text:n?`${N(n,"cadastro","cadastros")}`:"Nada cadastrado ainda"}}else if(t==="recompensas")a=this._renderScoreSettings();else if(t==="avisos")a=this._renderAlertsPanel();else if(t==="ferias")a=this._renderAwayOptions(!1);else if(t==="sobre")a=Pn({app:"CronologIA",version:this._version});else{a=this._renderCalendarsTab();let n=this._cals(),l=n.filter(c=>c.canCreate).length;s={text:n.length?`${N(n.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${l?N(l,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}if(!e.config)return r`<section class="page more-page">${this._renderHead(Ss(e),s,m,!0)} ${a}</section>`;let i=n=>{n!==t&&(this._haptic("light"),this._go(Ms({name:"more",tab:n,config:!0}),!0))};return r`<section class="page more-page">
      ${this._renderHead("Configura\xE7\xF5es",s,m,!0)}
      <div class="tabs-wrap"><div class="seg compact more-tabs" role="tablist" aria-label="Seções de Configurações" @scroll=${()=>this._markTabs()}>
        ${Vt.map(([n,l,c])=>r`<button class=${t===n?"on":""} role="tab" aria-selected=${t===n?"true":"false"} @click=${()=>i(n)}>${k(c)}<span>${l}</span></button>`)}
      </div><span class="tabs-fim esq" aria-hidden="true">${k("chevron-left")}</span><span class="tabs-fim dir" aria-hidden="true">${k("chevron-right")}</span></div>
      <div role="tabpanel" aria-label=${Vt.find(n=>n[0]===t)[1]}>${a}</div>
      ${this._renderFoot()}
    </section>`}_renderAppearance(){let e=this._accentDaily(),t=this._accent().id;return r`
      <div class="panel">
        ${this._secHead("contrast","Tema","Cada aparelho guarda a sua escolha.")}
        ${Li({theme:this._theme,onTheme:a=>this._setTheme(a),icon:k})}
      </div>
      <div class="panel">
        ${this._secHead("palette","Cor do app","Vale para todos os aparelhos.")}
        <div class="row switch-row daily-row">
          <div class="grow"><div class="label">Cor do dia</div><div class="hint">Muda a cor do app todo dia.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${a=>this._saveAppPrefs({accent_daily:a.target.checked?null:!1})} aria-label="Cor do dia" /><span class="track"></span></label>
        </div>
        ${Hi({palette:dt,value:t,onPick:a=>this._saveAppPrefs({accent:a,accent_daily:!1})})}
      </div>
    `}_renderOptions(){let e=this._app("week_start",1),t=this._app("event_details",!1)===!0;return r`
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
          ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>r`<button class=${e===a?"on":""} role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${k("calendar-days")}<span>${s}</span></button>`)}
        </div>
      </div>
      ${this._renderShortcut()}
    `}_renderShortcut(){return this._atalho?r`<div class="panel shortcut">
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
            ${k("copy")}Copiar
          </button></span
        >
      </label>
    </div>`:m}async _copyShortcut(){let e=this.renderRoot.querySelector("#cr-atalho");try{await navigator.clipboard.writeText(e.value),this._showToast("Caminho copiado")}catch{e.focus(),e.select(),this._showToast("Toque e segure no texto para copiar")}}_renderAwayOptions(e=!0){let t=this._away(),a=P(new Date(this._now)),s=(i,n)=>this._saveAppPrefs({away:{from:i,to:n<i?i:n}});return r`<div class="panel" id="ferias">
      ${e?this._secHead("plane","F\xE9rias","Rotinas, tarefas e manuten\xE7\xE3o pausadas."):r`<p class="panel-lead">Rotinas, tarefas e manutenção pausadas.</p>`}
      <div class="row switch-row">
        <div class="grow"><div class="label">De férias</div><div class="hint">${t?`${le(F(t.from),new Date(this._now))} a ${le(F(t.to),new Date(this._now))}`:"Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!t} @change=${i=>this._saveAppPrefs({away:i.target.checked?{from:a,to:P(q(F(a),4))}:null})} aria-label="De férias" /><span class="track"></span></label>
      </div>
      ${t?r`<div class="sub-op"><div class="sub-box"><div class="away-dates">
            ${Nt("De",t.from,i=>i&&s(i,t.to),{weekStart:this._app("week_start",1),bid:"away-from"})}
            ${Nt("At\xE9",t.to,i=>i&&s(t.from,i),{min:t.from,weekStart:this._app("week_start",1),bid:"away-to"})}
          </div>
          <span class="field-hint away-cal">${k("calendar-x")}<span>No Google, as rotinas saem desses dias e voltam em ${le(q(F(t.to),1),new Date(this._now))}.</span></span></div></div>`:m}
    </div>`}_camOk(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}_renderImportTiles(){let e=this._ai||{},t=this._camOk(),a=(s,i,n,l=!1,c="")=>r`<button type="button" class="imp-tile ${c?"no-cam":""}" ?disabled=${l} @click=${()=>this._openImport(s)}>${k(i)}<span>${n}</span>${c?r`<small>${c}</small>`:m}</button>`;return r`<div class="field imp-field">
        <span class="flabel">Trazer de mensagem ou foto</span>
        <div class="imp-tiles">
          ${a("text","clipboard-paste","Colar mensagem")}
          ${a("photos","images","Escolher fotos ou PDF",!e.images)}
          ${a("scan","scan-text","Digitalizar com\xA0IA",!e.images,t?"":"Precisa de https")}
        </div>
        ${e.images&&!t?r`<p class="imp-help">Em http a câmera não abre aqui: tire a foto pelo celular e use Escolher fotos ou PDF.</p>`:m}
      </div>
      ${e.ready?m:r`<div class="ai-box">${k("scan-text")}<span>Para ler mensagens e fotos, configure a IA do Home Assistant em Mais › Configurações › Integrações.</span></div>`}`}_memoriaIaCall(e,t={}){return this.api.memoriaIa(e,t)}_secHead(e,t,a=null){return r`<div class="mais-head"><span class="mais-ic" aria-hidden="true">${k(e)}</span><h2>${t}</h2></div>${a?r`<p class="panel-lead">${a}</p>`:m}`}async _loadUsage(){if(this.api.aiUsage){try{this._usage=await this.api.aiUsage()}catch{this._usage=null}this.requestUpdate()}}_renderUsage(){let e=this._ai||{};return qi({u:this._usage,day:this._usageDay,onDay:t=>(this._usageDay=t,this.requestUpdate()),head:this._secHead("chart-column","Uso da IA","As chamadas do app para a IA. Os tokens s\xE3o estimados."),app:"CronologIA",using:[e.using&&e.using.id,e.photos&&e.photos.id],names:Object.fromEntries((e.entities||[]).map(t=>[t.id,t.name]))})}_aiOn(){return!this._app("ai_off",!1)}_renderSensorsPanel(){let e=this._app("sensors_on",!1)===!0,t=this._score&&this._score(),a=!!(t&&t.enabled&&t.participants.length),s=[["sensor.cronologia_remedios_hoje","doses a tomar hoje (com as atrasadas e a pr\xF3xima)"],["binary_sensor.cronologia_remedio_atrasado","liga quando um rem\xE9dio atrasa"],["sensor.cronologia_rotinas_pendentes","rotinas da casa que faltam hoje"],["sensor.cronologia_manutencoes_vencidas","manuten\xE7\xF5es vencidas e as pr\xF3ximas"],["sensor.cronologia_proximo","quando come\xE7a o pr\xF3ximo compromisso, com o t\xEDtulo e o local"],["binary_sensor.cronologia_ferias","liga no modo f\xE9rias"],...a?[["sensor.cronologia_placar","quem lidera o placar e os pontos"]]:[],["sensor.cronologia_ia_hoje","chamadas de IA hoje, com erros, cota e tokens estimados"]];return r`<div class="panel" id="sensores">
      ${this._secHead("activity","Sensores no Home Assistant","Para usar em pain\xE9is e automa\xE7\xF5es do Home Assistant.")}
      <div class="row switch-row">
        <div class="grow"><div class="label">Criar sensores</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: nenhum sensor no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${i=>this._saveAppPrefs({sensors_on:i.target.checked?!0:null})} aria-label="Criar sensores" /><span class="track"></span></label>
      </div>
      ${e?r`<div class="sub-op"><div class="sub-box sensor-list">${s.map(([i,n])=>r`<div class="sensor-row"><code>${i}</code><span>${n}</span></div>`)}</div></div>`:m}
      <div class="ha-events">
        <b>Eventos para automações</b>
        <span class="ha-ev-lead">Para marcar de fora do app, numa automação, numa rotina da Alexa ou numa etiqueta NFC. Funcionam com os sensores ligados ou não.</span>
        <div class="sensor-list">
          <div class="sensor-row"><code>cronologia_feito</code><span>com <code>nome: Filtro de água</code>${a?r` (e <code>quem: Davi</code>, se vale pontos)`:m}: a manutenção, a rotina ou o remédio de hoje com esse nome fica feito.</span></div>
          ${a?r`<div class="sensor-row"><code>cronologia_demerito</code><span>com <code>nome</code> e <code>quem</code>: desconta esse demérito de quem foi.</span></div>`:m}
        </div>
      </div>
    </div>`}_renderAiPanel(){let e=this._aiOn(),t=r`<div class="row switch-row">
        <div class="grow"><div class="label">Usar IA</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: sem leitura por IA, sem Falar."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${p=>this._saveAppPrefs({ai_off:p.target.checked?null:!0})} aria-label="Usar IA" /><span class="track"></span></label>
      </div>`;if(!e)return r`<div class="panel" id="leitura-ia">
        ${this._secHead("sparkles","IA","Usa a IA configurada no Home Assistant.")}
        ${t}
      </div>`;let a=this._ai||{},s=a.entities||[],i=this._app("ai_entity",""),n=this._app("ai_photos",""),l=this._aiChecking?"off":a.ready&&a.images?"ok":a.ready?"warn":"bad",c=this._aiChecking?"Verificando\u2026":a.ready&&a.images?"Pronta para ler fotos":a.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",d="";return a.ready&&a.using&&(d=`Usando ${a.using.name}${i?"":" (a IA padr\xE3o do Home Assistant)"}.`,a.photos&&(d+=` Para fotos, ${a.photos.name}.`)),a.reason&&(d=`${d} ${a.reason}`.trim()),r`<div class="panel" id="leitura-ia">
      ${this._secHead("sparkles","IA","Usa a IA configurada no Home Assistant.")}
      ${t}
      <div class="sub-op"><div class="sub-box">
      <div class="ai-state ${l}"><span class="dot"></span><div><b>${c}</b>${d?r`<span>${d}</span>`:m}</div></div>
      ${s.length||i||n?r`<label class="field" style="margin:14px 0 0">
              <span class="flabel">Para conversar</span>
              <select class="select" aria-label="IA para conversar" @change=${p=>this._chooseAi(p.target.value)}>
                <option value="" ?selected=${!i}>Padrão do Home Assistant</option>
                ${s.map(p=>r`<option value=${p.id} ?selected=${p.id===i}>${p.name}${p.available?"":" (indispon\xEDvel)"}</option>`)}
                ${i&&!s.some(p=>p.id===i)?r`<option value=${i} selected>${i} (não encontrada)</option>`:m}
              </select>
            </label>
            <label class="field" style="margin:14px 0 0">
              <span class="flabel">Para ler fotos e PDFs</span>
              <select class="select" aria-label="IA para ler fotos e PDFs" @change=${p=>this._chooseAi(p.target.value,"ai_photos")}>
                <option value="" ?selected=${!n}>Igual à de conversar</option>
                ${s.filter(p=>p.images||p.id===n).map(p=>r`<option value=${p.id} ?selected=${p.id===n}>${p.name}${p.available?"":" (indispon\xEDvel)"}</option>`)}
                ${n&&!s.some(p=>p.id===n)?r`<option value=${n} selected>${n} (não encontrada)</option>`:m}
              </select>
            </label>`:m}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${k("rotate-ccw")}Verificar de novo</button></div>
      ${a.ready&&a.images?m:r`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
      </div></div>
    </div>`}_renderSheet(){if(!this._sheet)return m;let e=this._form||{},t=m,a=null;if(this._sheet==="event")t=this._renderEventSheet(),a=e.ev&&this._colorOfEvent(e.ev);else if(this._sheet==="form")t=this._renderFormSheet(),a=this._cal(e.cal)&&this._cal(e.cal).color;else if(this._sheet==="scope")t=this._renderScope();else if(this._sheet==="confirm")t=this._renderConfirm();else if(this._sheet==="catbulk")t=this._renderCatBulkSheet();else if(this._sheet==="import")t=this._renderImportSheet(),a=this._cal(e.target)&&this._cal(e.target).color;else if(this._sheet==="calendar"){t=this._renderCalSheet();let i=this._cal(e.id);a=ue(e.color)||i&&i.color}else this._sheet==="export"?t=this._renderExportSheet():this._sheet==="outlook"?t=this._renderOutlookSheet():this._sheet==="nocal"?t=this._renderNoCalSheet():this._sheet==="maint"?t=this._renderMaintSheet():this._sheet==="anyday"?t=this._renderAnyDaySheet():this._sheet==="versions"?t=this._renderVersions():this._sheet==="who"?t=this._renderWhoSheet():this._sheet==="parte"?t=this._renderPartSheet():this._sheet==="periodlog"?t=this._renderPeriodLogSheet():this._sheet==="todo"?(t=this._renderTodoSheet(),a=ue(st)):this._sheet==="bring"?t=this._renderBringSheet():this._sheet==="nowcards"?t=this._renderNowCardsSheet():this._sheet==="chat"?t=this._renderChatSheet():this._sheet==="extra"?t=this._renderExtraSheet():this._sheet==="demerit"?t=this._renderDemeritSheet():this._sheet==="prize"?t=this._renderPrizeSheet():this._sheet==="bill"&&(t=this._renderBillSheet(),a=ue("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${Pt(a.fill,this._dark?.18:.14)};${Y(a,this._dark)}`:"";return r`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${t}
      </div>
    `}_sheetHead(e,t,a=""){return r`<div class="sheet-head">
      ${t?r`<button class="icon-btn back" @click=${t} aria-label="Voltar">${k("chevron-left")}</button>`:m}
      <h3 class="display">${k(a||sc(e),"sh-ic")}${e}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${k("x")}</button>
    </div>`}_renderEventSheet(){let e=this._form.ev,t=new Date(this._now),a=this._cal(e.cal),s;if(e.allDay){let n=q(e.end,-1);s=me(n,e.start)?`${oe(e.start,t)} \xB7 ${this._anyTime(e)?"qualquer hora":"dia todo"}`:`${ne(le(e.start,t))} \u2013 ${le(n,t)} \xB7 ${N(Z(e.end,e.start),"dia","dias")}`}else me(e.start,e.end)||e.end.getHours()===0&&e.end.getMinutes()===0&&Z(e.end,e.start)===1?s=`${oe(e.start,t)} \xB7 ${j(e.start)} \u2013 ${j(e.end)} (${It(e.end-e.start)})`:s=`${ne(le(e.start,t))}, ${j(e.start)} \u2013 ${le(e.end,t)}, ${j(e.end)}`;let i=e.start>t?pt(e.start-t):e.end>t?"acontecendo agora":"";return r`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${a?a.name:e.cal}${i?r` · <b>${i}</b>`:m}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${k("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${k("clock")}<span>${s}</span></div>
        ${e.rrule?r`<div class="fact">${k("repeat")}<span>${Fe(e.rrule)}</span></div>`:m}
        ${e.location?r`<a class="fact link" href=${cc(e.location)} target="_blank" rel="noopener noreferrer">${k("map-pin")}<span>${e.location}</span>${k("external-link","sm")}</a>`:m}
        ${e.kind?this._renderKindFacts(e):!e.todo&&!e.gerencia?this._renderEventDone(e):m}
        ${e.description&&!e.kind?r`<div class="fact notes">${k("file-text")}<span>${da(e.description).map(n=>n.url?r`<a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>`:n.text)}</span></div>`:m}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?r`<p class="sheet-note">${k("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:m}
      <div class="sheet-actions">
        ${a&&a.canDelete&&e.uid?r`<button class="btn danger" @click=${()=>this._askDelete(e)} aria-label="Apagar">${k("trash")}</button>`:m}
        ${this._writable().length?r`<button class="btn outline" @click=${()=>this._openForm({ev:e,copy:!0})}>${k("copy")}Duplicar</button>`:m}
        ${a&&this._canEdit(e.cal)&&e.uid?r`<button class="btn primary" @click=${()=>this._openForm({ev:e})}>${k("pencil")}Editar</button>`:m}
      </div>
    `}_renderEventDone(e){let t=new Date(this._now),a=this._checkOf(e),s={key:e.key,summary:e.summary};return a?r`<div class="kind-state">${k("circle-check")}<span>Feito${a.at?` ${Z(new Date(a.at),t)===0?"hoje":le(new Date(a.at),t)} \xE0s ${j(new Date(a.at))}`:""}${a.by?` \xB7 ${a.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(s,"evento")}>${k("undo-2")}Desfazer</button></div>`:(e.day?F(e.day):e.start)>=q(B(t),2)?m:r`<button class="btn outline kind-act ev-done-btn" @click=${()=>this._check(s,"evento").then(()=>this._closeSheet())}>${k("check")}Feito</button>`}_renderWhoseField(e,t){let a=this._peopleCals(t),s=new Set(a.map(l=>l.cal)),i=(l,c)=>{let d=this._cal(l);return r`<button class="pick list ${e.cal===l?"on":""}" style=${d?Y(d.color,this._dark):""} @click=${()=>this._setForm({cal:l})}><span class="dot"></span><span>${I(c,24)}</span></button>`},n=a.length?e.mode==="edit"?"De quem (mover)":"De quem":e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio";return r`<div class="field whose-field">
      <span class="flabel">${n}${this._cal(e.cal)?r`<span class="fl-val">· ${I(this._cal(e.cal).name,24)}</span>`:m}</span>
      <div class="chip-row">${a.map(l=>i(l.cal,l.name))}${t.filter(l=>!s.has(l.id)).map(l=>i(l.id,l.name))}</div>
    </div>`}_renderFormSheet(){let e=this._form;if(e.kind)return this._renderKindForm();let t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(f=>f.id===e.cal):t.filter(f=>f.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t,s=new Date,i=this._app("week_start",1),n=f=>this._setForm({date:f,endDate:e.endDate&&e.endDate<f?"":e.endDate}),l=f=>{if(!f)return;let x=$=>{let[g,A]=$.split(":").map(Number);return g*60+A},w=Math.max(15,(x(e.end)-x(e.start)+1440)%1440||60),b=(x(f)+w)%1440;this._setForm({start:f,end:`${String(Math.floor(b/60)).padStart(2,"0")}:${String(b%60).padStart(2,"0")}`})},c=f=>{let[x,w]=e.start.split(":").map(Number),b=Math.min(1439,x*60+w+f);this._setForm({end:`${String(Math.floor(b/60)).padStart(2,"0")}:${String(b%60).padStart(2,"0")}`,endDate:""})},d=f=>{let[x,w]=(f||"0:0").split(":").map(Number);return x*60+w},p=(d(e.end)-d(e.start)+1440)%1440,h=e.endDate?null:ze.find(f=>e.start===f.span[0]&&e.end===f.span[1])||null,u=!e.allDay&&!e.endDate&&d(e.end)<=d(e.start);return r`
      ${this._sheetHead(e.mode==="add"?"Adicionar":"Editar evento")}
      ${e.mode==="add"?this._renderModelChips(""):m}
      ${e.mode==="add"&&this._aiOn()?this._renderImportTiles():m}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input grow" rows="1" .value=${e.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${f=>this._setForm({title:f.target.value})} @keydown=${f=>f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?this._renderWhoseField(e,a):m}
      <div class="field">
        <span class="flabel">Quando</span>
        <date-pick .value=${e.date} kind="futuro" .weekStart=${i} .bid=${"cr-date"} .label=${"Data"} @pick=${f=>f.detail.value&&n(f.detail.value)}></date-pick>
        ${e.allDay?r`<div class="field dp-field dp-ate">
              <span class="flabel">Até${e.endDate?r` <span class="tl">· ${N(Z(F(e.endDate),F(e.date))+1,"dia","dias")}</span>`:m}</span>
              <date-pick .value=${e.endDate||""} kind="nenhum" .none=${"Um dia"} .min=${e.date} .weekStart=${i} .bid=${"cr-ate"} .label=${"At\xE9"} @pick=${f=>this._setForm({endDate:f.detail.value>e.date?f.detail.value:""})}></date-pick>
            </div>`:m}
      </div>
      <div class="field ev-hours">
        <!-- 1.86.2: Quando is the day; Horário, the hours: the parts of the day and the lengths first, then from and until -->
        <div class="flabel-row"><span class="flabel">Horário<span class="fl-val">· ${e.allDay?"Dia todo":e.endDate?`${e.start} at\xE9 ${e.end}, ${hs(e.endDate)}`:h?h.label:`${e.start} at\xE9 ${e.end}`}</span></span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${e.allDay} @change=${f=>this._setForm({allDay:f.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        ${e.allDay?m:r`<div class="chip-row dur c3" role="group" aria-label="Duração">
                ${ze.map(f=>r`<button class="pick part ${h===f?"on":""}" aria-pressed=${h===f?"true":"false"} @click=${()=>this._setForm({start:f.span[0],end:f.span[1],endDate:""})}>${k(f.icon)}<span>${f.label}</span></button>`)}
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"]].map(([f,x])=>r`<button class="pick ${!h&&p===f&&!e.endDate?"on":""}" @click=${()=>c(f)}>${k("hourglass")}<span>${x}</span></button>`)}
              </div>
              <div class="time-row">
                ${Te(e.start,l,{label:"Come\xE7a"})}
                <span class="tl">até</span>
                ${Te(e.end,f=>this._setForm({end:f}),{label:"Termina"})}
              </div>
              ${u?r`<div class="field-hint">${k("info")}<span>Termina no dia seguinte.</span></div>`:m}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir<span class="fl-val">· ${(bt.find(f=>f.id===e.repeat)||bt[0]).short}</span></span>
        <div class="seg rep-seg" role="radiogroup" aria-label="Repetir">${bt.map(f=>r`<button class=${e.repeat===f.id?"on":""} role="radio" aria-checked=${e.repeat===f.id?"true":"false"} title=${f.label} @click=${()=>this._setForm({repeat:f.id})}>${f.short}</button>`)}</div>
        ${e.repeat==="WEEKLY"?this._renderWeekDays(e):m}
        ${e.rrule&&wt(e.rrule)===e.repeat&&e.repeat!=="WEEKLY"&&Fe(e.rrule)!==(bt.find(f=>f.id===e.repeat)||{}).label?r`<div class="field-hint">${k("repeat")}<span>${Fe(e.rrule)}</span></div>`:m}
        ${e.rid?r`<div class="field-hint">${k("repeat")}<span>Este evento se repete.</span></div>`:m}
      </div>
      ${this._app("event_details",!1)===!0||e.details?r`<div class="field fold-txt">
              <span class="flabel">Local${(e.location||"").trim()?r`<span class="fl-val">· ${I(e.location.trim(),40)}</span>`:m}</span>
              <textarea class="grow" rows="1" aria-label="Local" .value=${e.location} placeholder="Endereço, sala ou link" @keydown=${f=>f.key==="Enter"&&!f.shiftKey&&f.preventDefault()} @input=${f=>this._setForm({location:f.target.value})}></textarea>
            </div>
            <div class="field fold-txt">
              <span class="flabel">Notas${(e.notes||"").trim()?r`<span class="fl-val">· ${I(e.notes.trim().split(`
`)[0],40)}</span>`:m}</span>
              <textarea rows="3" aria-label="Notas" .value=${e.notes} placeholder="Detalhes, o que levar…" @input=${f=>this._setForm({notes:f.target.value})}></textarea>
            </div>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${k("x")}Cancelar</button>
        <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveForm()}>${k(e.mode==="add"?"plus":"check")}${e.saving?"Salvando\u2026":e.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let e=this._form,t=e.action==="edit",a=(s,i,n,l=!1)=>r`<button class="imp-opt ${l?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${k(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${n}</small></span>${k("chevron-right")}
    </button>`;return r`
      ${this._sheetHead(t?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${I(e.title,40)}” se repete. O que você quer ${t?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",t?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",t?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${t?m:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let e=this._form,t=e.icon||(/^Apagar/.test(e.label)?"trash":/^Restaurar/.test(e.label)?"archive-restore":/^Importar/.test(e.label)?"upload":/^Pular/.test(e.label)?"skip-forward":"circle-alert");return r`
      <div class="sheet-head"><h3 class="display">${k(t,"sh-ic")}${e.title}</h3></div>
      <p class="confirm-text">${e.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>${k("x")}Cancelar</button>
        <button class="btn ${e.danger?"danger-fill":"primary"}" @click=${()=>e.run()}>${k(t)}${e.label}</button>
      </div>
    `}_renderImportSheet(){let e=this._form,t=this._aiOn(),a=t?this._ai||{}:{},s=this._writable(),i=this._cal(e.target),n=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},l=e.error?r`<div class="imp-error">${k("circle-alert")}<span>${e.error}</span></div>`:m,c=e.images&&e.images.length?r`<div class="thumbs">${e.images.map(p=>p.pdf?r`<span class="thumb-pdf" title=${p.nome||"PDF"}>${k("file-text")}</span>`:r`<img src=${p.url} alt="" />`)}</div>`:m,d=r`<div class="imp-error soft">${k("sparkles")}<span>${a.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>${k("sparkles")}Ver IA</button></span></div>`;if(e.step==="voice")return this._renderVoiceStep(n);if(e.step==="text")return r`
        ${this._sheetHead(e.heard?"O que voc\xEA disse":"Colar mensagem",n)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${e.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${l} ${a.ready?m:d}
        <div class="sheet-actions">
          ${this._clipOk()?r`<button class="btn outline" @click=${()=>this._pasteClipboard()}>${k("clipboard-paste")}Colar</button>`:m}
          <button class="btn primary" ?disabled=${!(e.text||"").trim()||!a.ready} @click=${()=>this._readText()}>${k("sparkles")}Encontrar eventos</button>
        </div>
        
      `;if(e.step==="loading")return r`
        ${this._sheetHead("Lendo\u2026")}
        ${c}
        <div class="imp-loading"><span class="spin">${k("loader-circle")}</span><span>${e.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:e.prevStep||"pick"}))}>${k("x")}Cancelar</button></div>
      `;if(e.step==="review"){let p=e.items.filter(f=>f.on&&(f.title||"").trim()).length,h=e.provider==="ics"?`do arquivo ${I(e.fileName||".ics",28)}`:e.provider?`lidos por ${e.provider}`:"",u=new Date;return r`
        ${this._sheetHead("Revisar eventos",n)}
        ${c}
        ${e.heard?r`<p class="heard">${k("mic")}<span>“${e.heard}”</span></p>`:m}
        <p class="sheet-note top">${N(e.items.length,"evento encontrado","eventos encontrados")}${e.provider==="ics"&&h?` \xB7 ${h}`:""}.</p>
        ${e.note?r`<div class="imp-error soft">${k("sparkles")}<span>${e.note}</span></div>`:m}
        <div class="rv-list">
          ${e.items.map((f,x)=>r`<div class="rv-card ${f.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${f.on?"on":""}" role="checkbox" aria-checked=${f.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(x,{on:!f.on})}>${k("check")}</button>
                <textarea class="rv-title" rows="1" data-size="off" .value=${f.title} aria-label="Título" @keydown=${w=>w.key==="Enter"&&!w.shiftKey&&w.preventDefault()} @input=${w=>this._setItem(x,{title:w.target.value})}></textarea>
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:e.items.filter((w,b)=>b!==x)})}>${k("x")}</button>
              </div>
              <div class="rv-when">
                ${Ai(f.date,w=>this._setItem(x,{date:w}),{label:"Data",cls:"sm",weekStart:this._app("week_start",1)})}
                ${f.start?r`<span class="rv-times">${Te(f.start,w=>this._setItem(x,{start:w}),{label:"Come\xE7a",cls:"sm"})}<span>–</span>${Te(f.end,w=>this._setItem(x,{end:w}),{label:"Termina",cls:"sm"})}</span>`:r`<button class="pick ghost" @click=${()=>this._setItem(x,{start:"09:00",end:"10:00"})}>${k("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${ne(oe(F(f.date),u))}${f.end_date?` at\xE9 ${le(F(f.end_date),u)}`:""}${f.location?` \xB7 ${f.location}`:""}${f.repeat||f.rrule?` \xB7 ${f.rrule?Fe(f.rrule):bt.find(w=>w.id===f.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${a.images&&e.provider!=="ics"?r`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${k("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${k("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:m}
        ${s.length>1?r`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${s.map(f=>r`<button class="pick list ${e.target===f.id?"on":""}" style=${Y(f.color,this._dark)} @click=${()=>this._setForm({target:f.id})}><span class="dot"></span><span>${I(f.name,24)}</span></button>`)}</div>
            </div>`:m}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||e.adding} @click=${()=>this._importAdd()}>
            ${k("plus")}${e.adding?"Adicionando\u2026":p?`Adicionar ${N(p,"evento","eventos")}${i&&s.length<=1?` em ${I(i.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return r`
      ${this._sheetHead("Trazer eventos")}
      <div class="imp-options">
        ${t?r`<button class="imp-opt" ?disabled=${!a.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${k("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${k("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${k("images")}</span><span class="imp-tx"><b>Escolher fotos ou PDF</b><small>Prints, fotos da galeria ou um PDF</small></span>${k("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${k("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>${this._camOk()?"Fotografe um convite ou cart\xE3o de consulta":"Neste endere\xE7o (http) a c\xE2mera n\xE3o abre: precisa de https"}</small></span>${k("chevron-right")}
        </button>`:m}
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${k("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${k("chevron-right")}
        </button>
      </div>
      ${t&&!a.images?d:m}
      ${l}
    `}_renderCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return this._sheetHead("Calend\xE1rio");let a=ue(e.color)||t.color;return r`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${Y(a,this._dark)}>
        <span class="tile">${k(t.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(e.name||"").trim()||t.origName}</span><span class="lc-meta">${t.group}${t.device?` \xB7 ${t.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${e.name} placeholder=${t.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${dt.map(s=>r`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?k("check"):m}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${t.canCreate?t.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${t.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!e.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?r`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${t.id}`)}>${k("external-link")}Abrir na tela padrão do HA</button>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${k("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>${k("check")}Salvar</button>
      </div>
    `}_renderExportSheet(){let e=this._form,t=this._cals(),[a,s]=this._exportRange(e.range),i=e.cals.length?this.api.exportUrl({calendars:e.cals,start:Ae(a),end:Ae(s)}):null,n=l=>this._setForm({cals:e.cals.includes(l)?e.cals.filter(c=>c!==l):[...e.cals,l]});return r`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${t.map(l=>r`<button class="pick list ${e.cals.includes(l.id)?"on":""}" style=${Y(l.color,this._dark)} @click=${()=>n(l.id)}><span class="dot"></span><span>${I(l.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([l,c])=>r`<button class="pick ${e.range===l?"on":""}" @click=${()=>this._setForm({range:l})}>${k("calendar-range")}<span>${c}</span></button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?r`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${k("download")}Baixar .ics</a>`:r`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${k("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let e=this._isAdmin();return r`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${k("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${k("external-link","sm")}</a>
      </div>
      <div class="help-card">
        <b>${k("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${e?r`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${k("chevron-right","sm")}</button>`:m}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return r`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários daqui são só de leitura. Adicione um que aceite edição:</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let e=this._cam;if(!e)return m;let t=e.shots.length;return r`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${e.flash?r`<div class="cam-flash" .key=${e.flash}></div>`:m}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${k("x")}</button>
          <span class="cam-title">${e.chat?"Tirar foto":"Digitalizar com IA"}</span>
          ${e.torchOk?r`<button class="cam-btn ${e.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${k("zap")}</button>`:r`<span class="cam-btn ghost"></span>`}
        </div>
        ${e.status==="error"?r`<div class="cam-msg">${k("camera")}<p>${e.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${k("images")}Escolher foto</button></div>`:r`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${e.status==="starting"?"Abrindo a c\xE2mera\u2026":t?`${N(t,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${e.shots.slice(-3).map(a=>r`<img src=${a.url} alt="" />`)}${t>3?r`<span>+${t-3}</span>`:m}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${e.status!=="live"||t>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!t} @click=${()=>this._useShots()}>${k("check")}Pronto${t?` (${t})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return m;let e=this._toast;return r`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${e.text}</span>
      ${e.action?r`<button @click=${()=>{this._toast=null,e.action.run()}}>${k(e.action.icon||(e.action.label==="Desfazer"?"undo-2":"arrow-right"))}${e.action.label}</button>`:m}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Ls);js();var dc=document.getElementById("app"),Hs=document.createElement("cronologia-app");Hs.env=bo();Hs.api=new va;dc.replaceChildren(Hs);})();
