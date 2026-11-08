/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{(()=>{if(typeof window>"u"||window.__selectSheet)return;let o=window.__selectSheet={theme:null,isOpen:()=>!!e},e=null,t=0,a=null,s=`
select:not([multiple]){pointer-events:none}
.ss-wrap{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;font-family:var(--ss-font);-webkit-tap-highlight-color:transparent}
.ss-back{position:absolute;inset:0;background:var(--ss-scrim);opacity:0;transition:opacity .18s}
.ss-sheet{position:relative;width:100%;max-width:560px;max-height:min(72vh,640px);display:flex;flex-direction:column;background:var(--ss-bg);color:var(--ss-fg);border-radius:28px 28px 0 0;box-shadow:0 -8px 32px rgba(0,0,0,.25);transform:translateY(100%);transition:transform .2s cubic-bezier(.2,.8,.2,1);padding-bottom:env(safe-area-inset-bottom)}
.ss-wrap.out{pointer-events:none}
.ss-wrap.in .ss-back{opacity:1}
.ss-wrap.in .ss-sheet{transform:none}
.ss-grab{width:40px;height:4px;border-radius:2px;background:var(--ss-line2);margin:10px auto 2px;flex:none}
.ss-head{display:flex;align-items:center;gap:8px;padding:6px 10px 8px 20px;flex:none}
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
`,i='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',r='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',c=()=>{if(document.getElementById("ss-css"))return;let g=document.createElement("style");g.id="ss-css",g.textContent=s,(document.head||document.documentElement).appendChild(g)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();let d=g=>g.parentNode&&g.parentNode.host&&g.parentNode.nodeType===11?g.parentNode.host:g.parentNode||(g.host?g.host:null),l=g=>{let w=/rgba?\(([^)]+)\)/.exec(g||"");if(!w)return null;let A=w[1].split(/[ ,/]+/).filter(Boolean).map(Number);return{r:A[0],g:A[1],b:A[2],a:A.length>3?A[3]:1}},p=({r:g,g:w,b:A})=>(.2126*g+.7152*w+.0722*A)/255,h=(g,w)=>{let A=l(g)||(/^#([0-9a-f]{6})$/i.test(g)?{r:parseInt(g.slice(1,3),16),g:parseInt(g.slice(3,5),16),b:parseInt(g.slice(5,7),16)}:{r:100,g:160,b:240});return`rgba(${A.r},${A.g},${A.b},${w})`};function f(g){let w=getComputedStyle(g),A=I=>{for(let Y of I){let he=w.getPropertyValue(Y).trim();if(he)return he}return""},M=null;for(let I=g;I&&I.nodeType===1;I=d(I)){let Y=l(getComputedStyle(I).backgroundColor);if(Y&&Y.a>.5){M=p(Y)<.45;break}}M===null&&(M=!!(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches));let N=o.theme&&o.theme()||{};M=N.dark??M;let R=N.accent||A(["--rv-accent","--a","--accent","--cor"])||"#64b5f6",G=N.bg||A(["--rv-surface","--surface","--card"]),ie=N.fg||A(["--rv-text","--text","--fg","--ink"]),j=N.muted||A(["--rv-muted","--muted","--mut"]);return{"--ss-bg":G||(M?"#1b2229":"#ffffff"),"--ss-fg":ie||(M?"#e8edf3":"#141a22"),"--ss-mut":j||(M?"#9aa6b4":"#5b6573"),"--ss-line2":M?"rgba(255,255,255,.18)":"rgba(0,0,0,.14)","--ss-a":R,"--ss-soft":h(R,M?.22:.16),"--ss-soft2":M?"rgba(255,255,255,.06)":"rgba(0,0,0,.05)","--ss-scrim":A(["--rv-scrim","--scrim"])||"rgba(0,0,0,.45)","--ss-font":w.fontFamily||"system-ui, sans-serif"}}function m(g){let w=g.getAttribute("aria-label");if(w)return w;let A=g.getRootNode(),M=g.getAttribute("aria-labelledby");if(M&&A.getElementById){let R=M.split(/\s+/).map(G=>(A.getElementById(G)||{}).textContent||"").join(" ").trim();if(R)return R}if(g.id&&A.querySelector){let R=A.querySelector(`label[for="${CSS.escape(g.id)}"]`);if(R)return R.textContent.trim()}let N=g.closest("label, .field");if(N){let R=N.querySelector(".flabel, .label, legend, b, span");if(R&&!R.contains(g))return R.textContent.trim()}return""}function v(g){if(e||!g||g.disabled||g.multiple)return;let w=document.createElement("div");w.className="ss-wrap";for(let[j,I]of Object.entries(f(g)))w.style.setProperty(j,I);let A=m(g),M=document.createElement("div");M.className="ss-sheet",M.setAttribute("role","dialog"),M.setAttribute("aria-modal","true"),A&&M.setAttribute("aria-label",A),M.innerHTML=`<div class="ss-grab"></div><div class="ss-head"><b></b><button type="button" class="ss-x" aria-label="Fechar">${i}</button></div><div class="ss-list" role="listbox"></div>`,M.querySelector(".ss-head b").textContent=A;let N=M.querySelector(".ss-list"),R=null,G=j=>{let I=document.createElement("button");I.type="button",I.className=`ss-opt${j.selected?" on":""}`,I.setAttribute("role","option"),I.setAttribute("aria-selected",j.selected?"true":"false"),I.disabled=j.disabled,I.innerHTML=`<span></span>${r}`,I.firstChild.textContent=j.label||j.textContent,I.addEventListener("click",()=>_(j.value)),j.selected&&(R=I),N.appendChild(I)};for(let j of g.children)if(j.tagName==="OPTGROUP"){let I=document.createElement("div");I.className="ss-group",I.textContent=j.label,N.appendChild(I);for(let Y of j.children)Y.tagName==="OPTION"&&!Y.hidden&&G(Y)}else j.tagName==="OPTION"&&!j.hidden&&G(j);let ie=document.createElement("div");ie.className="ss-back",w.append(ie,M),document.body.appendChild(w),e={sel:g,wrap:w,pending:null,closing:!1},ie.addEventListener("click",()=>$()),M.querySelector(".ss-x").addEventListener("click",()=>$()),w.addEventListener("keydown",j=>{if(j.key==="Escape")j.preventDefault(),$();else if(j.key==="ArrowDown"||j.key==="ArrowUp"){let I=[...N.querySelectorAll(".ss-opt:not(:disabled)")],Y=I.indexOf(document.activeElement),he=I[Math.max(0,Math.min(I.length-1,Y+(j.key==="ArrowDown"?1:-1)))];he&&(j.preventDefault(),he.focus())}});try{history.pushState(history.state,"")}catch{}requestAnimationFrame(()=>{w.classList.add("in"),R?(R.scrollIntoView({block:"center"}),R.focus({preventScroll:!0})):M.querySelector(".ss-x").focus({preventScroll:!0})})}function $(g=null){if(!e||e.closing)return;e.closing=!0,e.pending=g;let w=e,A=()=>{if(e!==w)return;e=null,w.wrap.classList.remove("in"),w.wrap.classList.add("out"),setTimeout(()=>w.wrap.remove(),220);let M=w.sel;w.pending!==null&&M.value!==w.pending&&(M.value=w.pending,M.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),M.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})));try{M.focus({preventScroll:!0})}catch{}};if(w.finish=A,w.byBack)return A();history.back(),setTimeout(A,400)}let _=g=>$(g);window.addEventListener("popstate",g=>{if(e){if(g.stopImmediatePropagation(),e.closing)return e.finish&&e.finish();e.byBack=!0,$()}});function y(g){let w=g.composedPath?g.composedPath():[g.target],A=w[0];if(A&&A.tagName==="SELECT")return A;if(typeof g.clientX!="number")return null;for(let M of w.slice(0,6)){if(!M||M.nodeType!==1||M===document.body||M===document.documentElement)break;for(let N of M.querySelectorAll("select")){if(N.disabled||N.multiple)continue;let R=N.getBoundingClientRect();if(R.width&&g.clientX>=R.left&&g.clientX<=R.right&&g.clientY>=R.top&&g.clientY<=R.bottom&&b(N,g.clientX,g.clientY))return N}}return null}function b(g,w,A){let M=g.style.getPropertyValue("pointer-events");g.style.setProperty("pointer-events","auto","important");let N=null;try{let R=g.getRootNode();N=(R.elementFromPoint?R:document).elementFromPoint(w,A)}catch{}return M?g.style.setProperty("pointer-events",M):g.style.removeProperty("pointer-events"),N===g}let x=g=>{let w=g.composedPath?g.composedPath()[0]:g.target;return w&&w.tagName==="SELECT"&&!w.disabled&&!w.multiple?w:null};window.addEventListener("touchstart",g=>{let w=g.touches[0];a=w?{x:w.clientX,y:w.clientY}:null},{capture:!0,passive:!0}),window.addEventListener("touchend",g=>{let w=x(g);if(!w||e)return;let A=g.changedTouches[0];a&&A&&Math.hypot(A.clientX-a.x,A.clientY-a.y)>10||(g.preventDefault(),t=Date.now(),v(w))},{capture:!0,passive:!1}),window.addEventListener("mousedown",g=>{x(g)&&g.preventDefault()},!0),window.addEventListener("click",g=>{if(e)return;let w=y(g);w&&(g.preventDefault(),g.stopPropagation(),Date.now()-t>600&&v(w))},!0),window.addEventListener("keydown",g=>{let w=x(g);!w||e||(g.key==="Enter"||g.key===" "||g.key==="F4"||g.altKey&&(g.key==="ArrowDown"||g.key==="ArrowUp"))&&(g.preventDefault(),v(w))},!0),o.open=v,o.close=()=>$()})();var ct=globalThis,ea=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ta=Symbol(),Ra=new WeakMap,dt=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==ta)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.i,t=this.t;if(ea&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=Ra.get(t)),e===void 0&&((this.i=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Ra.set(t,e))}return e}toString(){return this.cssText}},me=o=>new dt(typeof o=="string"?o:o+"",void 0,ta),qe=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((a,s,i)=>a+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new dt(t,o,ta)},Bi=(o,e)=>{if(ea)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),s=ct.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,o.appendChild(a)}},Ia=ea?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return me(t)})(o):o,{is:Ui,defineProperty:Yi,getOwnPropertyDescriptor:Wi,getOwnPropertyNames:Ki,getOwnPropertySymbols:Qi,getPrototypeOf:Ji}=Object,$t=globalThis,Pa=$t.trustedTypes,Xi=Pa?Pa.emptyScript:"",Gi=$t.reactiveElementPolyfillSupport,We=(o,e)=>o,Xt={toAttribute(o,e){switch(e){case Boolean:o=o?Xi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},as=(o,e)=>!Ui(o,e),Ha={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:as};Symbol.metadata??=Symbol("metadata"),$t.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(e){this.o(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(e,t=Ha){if(t.state&&(t.attribute=!1),this.o(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&Yi(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=Wi(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let c=s?.call(this);i?.call(this,r),this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ha}static o(){if(this.hasOwnProperty(We("elementProperties")))return;let e=Ji(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(We("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(We("properties"))){let t=this.properties,a=[...Ki(t),...Qi(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.u=new Map;for(let[t,a]of this.elementProperties){let s=this.p(t,a);s!==void 0&&this.u.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(Ia(s))}else e!==void 0&&t.push(Ia(e));return t}static p(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this.P??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this.P?.delete(e)}$(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.v=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.P?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}C(e,t){let a=this.constructor.elementProperties.get(e),s=this.constructor.p(e,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:Xt).toAttribute(t,a.type);this.m=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(e,t){let a=this.constructor,s=a.u.get(e);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Xt;this.m=s;let c=r.fromAttribute(t,i.type);this[s]=c??this.T?.get(s)??c,this.m=null}}requestUpdate(e,t,a,s=!1,i){if(e!==void 0){let r=this.constructor;if(s===!1&&(i=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??as)(i,t)||a.useDefault&&a.reflect&&i===this.T?.get(e)&&!this.hasAttribute(r.p(e,a))))return;this.M(e,t,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(e,t,{useDefault:a,reflect:s,wrapped:i},r){a&&!(this.T??=new Map).has(e)&&(this.T.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this.m!==e&&(this.A??=new Set).add(e))}async k(){this.isUpdatePending=!0;try{await this.S}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:r}=i,c=this[s];r!==!0||this._$AL.has(s)||c===void 0||this.M(s,void 0,i,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this.P?.forEach(a=>a.hostUpdate?.()),this.update(t)):this.U()}catch(a){throw e=!1,this.U(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this.P?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(e){return!0}update(e){this.A&&=this.A.forEach(t=>this.C(t,this[t])),this.U()}updated(e){}firstUpdated(e){}};be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[We("elementProperties")]=new Map,be[We("finalized")]=new Map,Gi?.({ReactiveElement:be}),($t.reactiveElementVersions??=[]).push("2.1.2");var aa=globalThis,La=o=>o,pt=aa.trustedTypes,ja=pt?pt.createPolicy("lit-html",{createHTML:o=>o}):void 0,sa="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,ia="?"+ue,Zi=`<${ia}>`,Te=document,Qe=()=>Te.createComment(""),Je=o=>o===null||typeof o!="object"&&typeof o!="function",oa=Array.isArray,ss=o=>oa(o)||typeof o?.[Symbol.iterator]=="function",Kt=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Va=/-->/g,Ba=/>/g,Se=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ua=/'/g,Ya=/"/g,is=/^(?:script|style|textarea|title)$/i,ra=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),n=ra(1),Re=ra(2),nr=ra(3),Q=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Wa=new WeakMap,Ce=Te.createTreeWalker(Te,129);function os(o,e){if(!oa(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ja!==void 0?ja.createHTML(e):e}var rs=(o,e)=>{let t=o.length-1,a=[],s,i=e===2?"<svg>":e===3?"<math>":"",r=Ye;for(let c=0;c<t;c++){let d=o[c],l,p,h=-1,f=0;for(;f<d.length&&(r.lastIndex=f,p=r.exec(d),p!==null);)f=r.lastIndex,r===Ye?p[1]==="!--"?r=Va:p[1]!==void 0?r=Ba:p[2]!==void 0?(is.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=Se):p[3]!==void 0&&(r=Se):r===Se?p[0]===">"?(r=s??Ye,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,l=p[1],r=p[3]===void 0?Se:p[3]==='"'?Ya:Ua):r===Ya||r===Ua?r=Se:r===Va||r===Ba?r=Ye:(r=Se,s=void 0);let m=r===Se&&o[c+1].startsWith("/>")?" ":"";i+=r===Ye?d+Zi:h>=0?(a.push(l),d.slice(0,h)+sa+d.slice(h)+ue+m):d+ue+(h===-2?c:m)}return[os(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},Xe=class o{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let i=0,r=0,c=e.length-1,d=this.parts,[l,p]=rs(e,t);if(this.el=o.createElement(l,a),Ce.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=Ce.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(sa)){let f=p[r++],m=s.getAttribute(h).split(ue),v=/([.?@])?(.*)/.exec(f);d.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?ut:v[1]==="?"?mt:v[1]==="@"?ft:Ee}),s.removeAttribute(h)}else h.startsWith(ue)&&(d.push({type:6,index:i}),s.removeAttribute(h));if(is.test(s.tagName)){let h=s.textContent.split(ue),f=h.length-1;if(f>0){s.textContent=pt?pt.emptyScript:"";for(let m=0;m<f;m++)s.append(h[m],Qe()),Ce.nextNode(),d.push({type:2,index:++i});s.append(h[f],Qe())}}}else if(s.nodeType===8)if(s.data===ia)d.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(ue,h+1))!==-1;)d.push({type:7,index:i}),h+=ue.length-1}i++}}static createElement(e,t){let a=Te.createElement("template");return a.innerHTML=e,a}};function ze(o,e,t=o,a){if(e===Q)return e;let s=a!==void 0?t.N?.[a]:t.O,i=Je(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,t,a)),a!==void 0?(t.N??=[])[a]=s:t.O=s),s!==void 0&&(e=ze(o,s._$AS(o,e.values),s,a)),e}var ht=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(e){let{el:{content:t},parts:a}=this._$AD,s=(e?.creationScope??Te).importNode(t,!0);Ce.currentNode=s;let i=Ce.nextNode(),r=0,c=0,d=a[0];for(;d!==void 0;){if(r===d.index){let l;d.type===2?l=new yt(i,i.nextSibling,this,e):d.type===1?l=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(l=new gt(i,this,e)),this._$AV.push(l),d=a[++c]}r!==d?.index&&(i=Ce.nextNode(),r++)}return Ce.currentNode=Te,s}V(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},yt=class ns{get _$AU(){return this._$AM?._$AU??this.D}constructor(e,t,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),Je(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==Q&&this.L(e):e._$litType$!==void 0?this.j(e):e.nodeType!==void 0?this.I(e):ss(e)?this.H(e):this.L(e)}B(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}I(e){this._$AH!==e&&(this._$AR(),this._$AH=this.B(e))}L(e){this._$AH!==u&&Je(this._$AH)?this._$AA.nextSibling.data=e:this.I(Te.createTextNode(e)),this._$AH=e}j(e){let{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=Xe.createElement(os(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(t);else{let i=new ht(s,this),r=i.R(this.options);i.V(t),this.I(r),this._$AH=i}}_$AC(e){let t=Wa.get(e.strings);return t===void 0&&Wa.set(e.strings,t=new Xe(e)),t}H(e){oa(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,s=0;for(let i of e)s===t.length?t.push(a=new ns(this.B(Qe()),this.B(Qe()),this,this.options)):a=t[s],a._$AI(i),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let a=La(e).nextSibling;La(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this.D=e,this._$AP?.(e))}},Ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(e,t=this,a,s){let i=this.strings,r=!1;if(i===void 0)e=ze(this,e,t,0),r=!Je(e)||e!==this._$AH&&e!==Q,r&&(this._$AH=e);else{let c=e,d,l;for(e=i[0],d=0;d<i.length-1;d++)l=ze(this,c[a+d],t,d),l===Q&&(l=this._$AH[d]),r||=!Je(l)||l!==this._$AH[d],l===u?e=u:e!==u&&(e+=(l??"")+i[d+1]),this._$AH[d]=l}r&&!s&&this.W(e)}W(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ut=class extends Ee{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===u?void 0:e}},mt=class extends Ee{constructor(){super(...arguments),this.type=4}W(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},ft=class extends Ee{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??u)===Q)return;let a=this._$AH,s=e===u&&a!==u||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},gt=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}},eo={q:sa,J:ue,Z:ia,F:1,G:rs,K:ht,X:ss,Y:ze,tt:yt,st:Ee,it:mt,et:ft,ht:ut,ot:gt},to=aa.litHtmlPolyfillSupport;to?.(Xe,yt),(aa.litHtmlVersions??=[]).push("3.3.3");var ls=(o,e,t)=>{let a=t?.renderBefore??e,s=a._$litPart$;if(s===void 0){let i=t?.renderBefore??null;a._$litPart$=s=new yt(e.insertBefore(Qe(),i),i,void 0,t??{})}return s._$AI(o),s},na=globalThis;var $e=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.rt=ls(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return Q}};$e._$litElement$=!0,$e.finalized=!0,na.litElementHydrateSupport?.({LitElement:$e});var ao=na.litElementPolyfillSupport;ao?.({LitElement:$e});(na.litElementVersions??=[]).push("4.2.2");var{tt:so}=eo,Ka=o=>o,io=o=>o===null||typeof o!="object"&&typeof o!="function";var Qa=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e,oo=o=>o?._$litType$?.h!=null;var cs=o=>o.strings===void 0,Ja=()=>document.createComment(""),we=(o,e,t)=>{let a=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){let i=a.insertBefore(Ja(),s),r=a.insertBefore(Ja(),s);t=new so(i,r,o,o.options)}else{let i=t._$AB.nextSibling,r=t._$AM,c=r!==o;if(c){let d;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(d=o._$AU)!==r._$AU&&t._$AP(d)}if(i!==s||c){let d=t._$AA;for(;d!==i;){let l=Ka(d).nextSibling;Ka(a).insertBefore(d,s),d=l}}}return t},xe=(o,e,t=o)=>(o._$AI(e,t),o),ro={},Ge=(o,e=ro)=>o._$AH=e,Gt=o=>o._$AH,Qt=o=>{o._$AR(),o._$AA.remove()},ds=o=>{o._$AR()};var oe=o=>(...e)=>({_$litDirective$:o,values:e}),ce=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this.nt=e,this._$AM=t,this.ct=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ke=(o,e)=>{let t=o._$AN;if(t===void 0)return!1;for(let a of t)a._$AO?.(e,!1),Ke(a,e);return!0},vt=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while(t?.size===0)},ps=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),co(e)}};function no(o){this._$AN!==void 0?(vt(this),this._$AM=o,ps(this)):this._$AM=o}function lo(o,e=!1,t=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)Ke(a[i],!1),vt(a[i]);else a!=null&&(Ke(a,!1),vt(a));else Ke(this,o)}var co=o=>{o.type==2&&(o._$AP??=lo,o._$AQ??=no)},Ze=class extends ce{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),ps(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ke(this,e),vt(this))}setValue(e){if(cs(this.nt))this.nt._$AI(e,this);else{let t=[...this.nt._$AH];t[this.ct]=e,this.nt._$AI(t,this,0)}}disconnected(){}reconnected(){}};var xt=class{constructor(e){this.lt=e}disconnect(){this.lt=void 0}reconnect(e){this.lt=e}deref(){return this.lt}},bt=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(e=>this.dt=e)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var wt=class extends Ze{constructor(){super(...arguments),this.ft=new xt(this),this.vt=new bt}render(e,t){return Q}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this.yt)return Q;this.yt=t;let s=0,{ft:i,vt:r}=this;return(async(c,d)=>{for await(let l of c)if(await d(l)===!1)return})(t,async c=>{for(;r.get();)await r.get();let d=i.deref();if(d!==void 0){if(d.yt!==t)return!1;a!==void 0&&(c=a(c,s)),d.commitValue(c,s),s++}return!0}),Q}commitValue(e,t){this.setValue(e)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},lr=oe(wt),cr=oe(class extends wt{constructor(o){if(super(o),o.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(o,e){return this.rt=o,super.update(o,e)}commitValue(o,e){e===0&&ds(this.rt);let t=we(this.rt);xe(t,o)}}),Xa=o=>oo(o)?o._$litType$.h:o.strings,dr=oe(class extends ce{constructor(o){super(o),this.bt=new WeakMap}render(o){return[o]}update(o,[e]){let t=Qa(this.gt)?Xa(this.gt):null,a=Qa(e)?Xa(e):null;if(t!==null&&(a===null||t!==a)){let s=Gt(o).pop(),i=this.bt.get(t);if(i===void 0){let r=document.createDocumentFragment();i=ls(u,r),i.setConnected(!1),this.bt.set(t,i)}Ge(i,[s]),we(i,void 0,s)}if(a!==null){if(t===null||t!==a){let s=this.bt.get(a);if(s!==void 0){let i=Gt(s).pop();ds(o),we(o,void 0,i),Ge(o,[i])}}this.gt=e}else this.gt=void 0;return this.render(e)}});var pr=oe(class extends ce{constructor(o){if(super(o),o.type!==1||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.wt===void 0){this.wt=new Set,o.strings!==void 0&&(this._t=new Set(o.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(e)}let t=o.element.classList;for(let a of this.wt)a in e||(t.remove(a),this.wt.delete(a));for(let a in e){let s=!!e[a];s===this.wt.has(a)||this._t?.has(a)||(s?(t.add(a),this.wt.add(a)):(t.remove(a),this.wt.delete(a)))}return Q}}),po={},hr=oe(class extends ce{constructor(){super(...arguments),this.St=po}render(o,e){return e()}update(o,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.St)&&this.St.length===e.length&&e.every((a,s)=>a===this.St[s]))return Q}else if(this.St===e)return Q;return this.St=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var ur=oe(class extends ce{constructor(){super(...arguments),this.key=u}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(Ge(o),this.key=e),t}}),mr=oe(class extends ce{constructor(o){if(super(o),o.type!==3&&o.type!==1&&o.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!cs(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===Q||e===u)return e;let t=o.element,a=o.name;if(o.type===3){if(e===t[a])return Q}else if(o.type===4){if(!!e===t.hasAttribute(a))return Q}else if(o.type===1&&t.getAttribute(a)===e+"")return Q;return Ge(o),e}});var Jt=new WeakMap,fr=oe(class extends Ze{render(o){return u}update(o,[e]){let t=e!==this.lt;return t&&this.$t(void 0),(t||this.Tt!==this.xt)&&(this.lt=e,this.Et=o.options?.host,this.$t(this.xt=o.element)),u}$t(o){if(this.lt!==void 0)if(this.isConnected||(o=void 0),typeof this.lt=="function"){let e=this.Et??globalThis,t=Jt.get(e);t===void 0&&(t=new WeakMap,Jt.set(e,t)),t.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),t.set(this.lt,o),o!==void 0&&this.lt.call(this.Et,o)}else this.lt.value=o}get Tt(){return typeof this.lt=="function"?Jt.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),Ga=(o,e,t)=>{let a=new Map;for(let s=e;s<=t;s++)a.set(o[s],s);return a},Z=oe(class extends ce{constructor(o){if(super(o),o.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(o,e,t){let a;t===void 0?t=e:e!==void 0&&(a=e);let s=[],i=[],r=0;for(let c of o)s[r]=a?a(c,r):r,i[r]=t(c,r),r++;return{values:i,keys:s}}render(o,e,t){return this.Ct(o,e,t).values}update(o,[e,t,a]){let s=Gt(o),{values:i,keys:r}=this.Ct(e,t,a);if(!Array.isArray(s))return this.Pt=r,i;let c=this.Pt??=[],d=[],l,p,h=0,f=s.length-1,m=0,v=i.length-1;for(;h<=f&&m<=v;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(c[h]===r[m])d[m]=xe(s[h],i[m]),h++,m++;else if(c[f]===r[v])d[v]=xe(s[f],i[v]),f--,v--;else if(c[h]===r[v])d[v]=xe(s[h],i[v]),we(o,d[v+1],s[h]),h++,v--;else if(c[f]===r[m])d[m]=xe(s[f],i[m]),we(o,s[h],s[f]),f--,m++;else if(l===void 0&&(l=Ga(r,m,v),p=Ga(c,h,f)),l.has(c[h]))if(l.has(c[f])){let $=p.get(r[m]),_=$!==void 0?s[$]:null;if(_===null){let y=we(o,s[h]);xe(y,i[m]),d[m]=y}else d[m]=xe(_,i[m]),we(o,s[h],_),s[$]=null;m++}else Qt(s[f]),f--;else Qt(s[h]),h++;for(;m<=v;){let $=we(o,d[v+1]);xe($,i[m]),d[m++]=$}for(;h<=f;){let $=s[h++];$!==null&&Qt($)}return this.Pt=r,Ge(o,d),Q}}),hs="important",ho=" !"+hs,gr=oe(class extends ce{constructor(o){if(super(o),o.type!==1||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let a=o[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(o,[e]){let{style:t}=o.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(e)),this.render(e);for(let a of this.Mt)e[a]==null&&(this.Mt.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(let a in e){let s=e[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(ho);a.includes("-")||i?t.setProperty(a,i?s.slice(0,-11):s,i?hs:""):t[a]=s}}return Q}}),vr=oe(class extends ce{constructor(o){if(super(o),o.type!==2)throw Error("templateContent can only be used in child bindings")}render(o){return this.At===o?Q:(this.At=o,document.importNode(o.content,!0))}}),Ne=class extends ce{constructor(e){if(super(e),this.gt=u,e.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this.kt=void 0,this.gt=e;if(e===Q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.gt)return this.kt;this.gt=e;let t=[e];return t.raw=t,this.kt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ne.directiveName="unsafeHTML",Ne.resultType=1;var xr=oe(Ne);var et=class extends Ne{};et.directiveName="unsafeSVG",et.resultType=2;var se=oe(et),Za=o=>!io(o)&&typeof o.then=="function",es=1073741823;var Zt=class extends Ze{constructor(){super(...arguments),this.Ot=es,this.Ut=[],this.ft=new xt(this),this.vt=new bt}render(...e){return e.find(t=>!Za(t))??Q}update(e,t){let a=this.Ut,s=a.length;this.Ut=t;let i=this.ft,r=this.vt;this.isConnected||this.disconnected();for(let c=0;c<t.length&&!(c>this.Ot);c++){let d=t[c];if(!Za(d))return this.Ot=c,d;c<s&&d===a[c]||(this.Ot=es,s=0,Promise.resolve(d).then(async l=>{for(;r.get();)await r.get();let p=i.deref();if(p!==void 0){let h=p.Ut.indexOf(d);h>-1&&h<p.Ot&&(p.Ot=h,p.setValue(l))}}))}return Q}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},br=oe(Zt);var uo=Symbol.for(""),mo=o=>{if(o?.r===uo)return o?._$litStatic$};var ts=new Map,us=o=>(e,...t)=>{let a=t.length,s,i,r=[],c=[],d,l=0,p=!1;for(;l<a;){for(d=e[l];l<a&&(i=t[l],(s=mo(i))!==void 0);)d+=s+e[++l],p=!0;l!==a&&c.push(i),r.push(d),l++}if(l===a&&r.push(e[a]),p){let h=r.join("$$lit$$");(e=ts.get(h))===void 0&&(r.raw=r,ts.set(h,e=r)),t=c}return o(e,...t)},wr=us(n),$r=us(Re);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var ms=["dom","seg","ter","qua","qui","sex","s\xE1b"],fs={mensagem:"Mensagens",fotos:"Fotos",conversa:"Conversa"},gs={erro:"erro",cota:"sem cota",formato:"resposta fora do formato"},ye=o=>String(o).padStart(2,"0"),la=o=>`${o.getFullYear()}-${ye(o.getMonth()+1)}-${ye(o.getDate())}`,_t=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},bs=o=>String(Math.round(o*10)/10).replace(".",","),vs=o=>o>=1e3?`${bs(o/1e3)} mil`:String(Math.round(o||0)),xs=o=>`${o} ${o===1?"chamada":"chamadas"}`,fo=(o,e={})=>e[o]||(o||"").replace(/^ai_task\./,"").replace(/_/g," ")||"padr\xE3o do Home Assistant",go=(o,e)=>{let t=new Date(o);if(!Number.isFinite(t.getTime()))return"";let a=`${ye(t.getHours())}:${ye(t.getMinutes())}`;return la(t)===la(e)?`hoje ${a}`:`${ye(t.getDate())}/${ye(t.getMonth()+1)} ${a}`};function vo(o){let e=o.join(" ").toLowerCase();return/google|gemini/.test(e)?n`Consumo exato e cota: <a href="https://console.cloud.google.com/apis/dashboard" target="_blank" rel="noopener">Google Cloud Console</a>.`:/openai|chatgpt|gpt/.test(e)?n`Consumo exato e custo: <a href="https://platform.openai.com/usage" target="_blank" rel="noopener">platform.openai.com/usage</a>.`:/anthropic|claude/.test(e)?n`Consumo exato e custo: <a href="https://platform.claude.com/usage" target="_blank" rel="noopener">Claude Console</a>.`:"O consumo exato fica no painel do provedor da IA."}function ws({u:o,day:e,onDay:t,head:a,app:s,using:i="",names:r={}}){if(!o||!o.hoje)return n`<div class="panel uso-panel" id="uso-ia">${a}<p class="panel-lead">Carregando…</p></div>`;let c=new Date,d=la(c),l=b=>b.cota?n`<span class="s alert">${b.cota} ${b.cota>1?"vezes":"vez"} sem cota</span>`:b.erros?n`<span class="s alert">${b.erros} com erro</span>`:n`<span class="s">≈ ${vs(b.tokens)} tokens</span>`,p=(b,x)=>n`<div class="uso-tile"><span class="k">${b}</span><span class="v">${x.chamadas||0}</span>${l(x)}</div>`,h=o.dias||[],f=Math.max(1,...h.map(b=>b.chamadas||0)),m=h.find(b=>b.dia===e)||h.find(b=>b.dia===d)||{dia:d,chamadas:0,erros:0,cota:0},v=b=>b.dia===d?"hoje":ms[_t(b.dia).getDay()],$=o.semana&&o.semana.tipos||{},_=[...Object.keys(o.mes&&o.mes.ias||{}),...Object.keys(o.semana&&o.semana.ias||{}),i],y=o.ultimas||[];return n`<div class="panel uso-panel" id="uso-ia">
    ${a}
    <div class="uso-tiles">${p("Hoje",o.hoje)}${p("7 dias",o.semana)}${p("Este m\xEAs",o.mes)}</div>
    <div class="uso-chart" role="group" aria-label="Chamadas de IA nos últimos 7 dias">
      ${h.map(b=>{let x=b.chamadas?Math.max(4,Math.round(b.chamadas/f*100)):0;return n`<button type="button" class="uso-bar ${b.dia===d?"today":""}" aria-pressed=${b.dia===m.dia?"true":"false"} aria-label="${v(b)}: ${xs(b.chamadas)}" @click=${()=>t(b.dia)}><i style="height:${x}%"></i></button>`})}
    </div>
    <div class="uso-days" aria-hidden="true">${h.map(b=>n`<span>${v(b)}</span>`)}</div>
    <p class="uso-cap" aria-live="polite">${m.dia===d?"Hoje":`${ms[_t(m.dia).getDay()]}, ${ye(_t(m.dia).getDate())}/${ye(_t(m.dia).getMonth()+1)}`}: <b>${xs(m.chamadas)}</b>${m.erros?`, ${m.erros} com erro`:""}${m.cota?`, ${m.cota} sem cota`:""}.</p>
    ${Object.keys($).length?n`<ul class="uso-kinds">${Object.keys($).sort((b,x)=>$[x]-$[b]).map(b=>n`<li>${fs[b]||b} <b>${$[b]}</b></li>`)}</ul>`:u}
    <details class="uso-last">
      <summary>Últimas chamadas</summary>
      <ul>
        ${y.length?y.map(b=>n`<li><b>${fs[b.tipo]||b.tipo}</b><span>${fo(b.ia,r)}</span>${gs[b.resultado]?n`<span class="r-err">${gs[b.resultado]}</span>`:u}
                <span class="t">${bs(b.segundos)} s · ≈ ${vs(b.tokens)} tokens${b.imagens?` \xB7 ${b.imagens} ${b.imagens>1?"imagens":"imagem"}`:""} · ${go(b.quando,c)}</span></li>`):n`<li>Nenhuma chamada ainda.</li>`}
      </ul>
    </details>
    <p class="uso-note">${vo(_)}</p>
  </div>`}var $s=`
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
  .uso-last summary { font-size: 14.5px; font-weight: 600; color: var(--rv-accent-ink); cursor: pointer; padding: 6px 0; }
  .uso-last ul { list-style: none; margin: 0; padding: 0; }
  .uso-last li { display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: baseline; font-size: 13px; padding: 7px 0; border-top: 1px solid var(--rv-line); color: var(--rv-muted); }
  .uso-last li b { color: var(--rv-text); font-weight: 600; }
  .uso-last li .r-err { color: var(--rv-late); font-weight: 600; }
  .uso-last li .t { flex-basis: 100%; font-size: 12.5px; }
  .uso-note { font-size: 13px; line-height: 1.5; color: var(--rv-muted); margin: 0 0 10px; }
  .uso-note:last-child { margin-bottom: 16px; }
  .uso-note a { color: var(--rv-accent-ink); }
  .uso-note code { font-size: 12px; }
`;var xo=/[̀-ͯ]/g,ys=o=>o.normalize("NFD").replace(xo,"").toLowerCase()||o.toLowerCase(),kt=o=>[...String(o||"")].map(ys).join("");function bo(o,{room:e=null,query:t=""}={}){let a=kt(t).split(/\s+/).filter(Boolean),s=d=>kt(`${d.nome} ${d.zona||""} ${d.roomName||""}`),i=d=>a.every(l=>s(d).includes(l)),r=d=>{if(!a.length)return 0;let l=kt(d.nome);return l.startsWith(a[0])?0:l.includes(a[0])?1:2},c=o.filter(i).sort((d,l)=>r(d)-r(l)||d.nome.localeCompare(l.nome,"pt-BR"));return e?{inRoom:c.filter(d=>d.roomId===e),others:a.length?c.filter(d=>d.roomId!==e):[]}:{inRoom:[],others:a.length?c:[]}}function wo(o,e,t){let a=kt(t).split(/\s+/).filter(Boolean)[0];if(!a)return e;let s=[...e],i=s.map(ys),r=-1,c=-1;for(let d=0;d<s.length&&r<0;d++){let l="";for(let p=d;p<s.length;p++){if(l+=i[p],l===a){r=d,c=p+1;break}if(!a.startsWith(l))break}}return r<0?e:o`${s.slice(0,r).join("")}<mark>${s.slice(r,c).join("")}</mark>${s.slice(c).join("")}`}function _s({lit:o,icon:e,items:t,room:a=null,roomName:s="",value:i=null,query:r="",more:c=!1,onQuery:d,onPick:l,onMore:p,onRemove:h,onAdd:f,adding:m=!1,autofocus:v=!1}){let{html:$,nothing:_}=o,y=(g,w)=>$`<div class="eq-sel">
      <span class="eq-ic">${e("package")}</span>
      <span class="eq-tx"><b>${g.nome}</b><small>${[g.zona,g.roomName].filter(Boolean).join(" \xB7 ")||"Sem c\xF4modo"}</small></span>
      <button type="button" class="icon-btn mini" aria-label="Tirar ${g.nome}" @click=${w}>${e("x")}</button>
    </div>`;if(Array.isArray(i)){let g=i.map(M=>t.find(N=>N.id===M)).filter(Boolean),w=g.map(M=>y(M,()=>h(M.id)));if(g.length&&!m)return $`<div class="eq-pick">${w}<button type="button" class="eq-more eq-add" @click=${()=>f()}>${e("plus")}Outro equipamento</button></div>`;let A=t.filter(M=>!i.includes(M.id));return $`<div class="eq-pick">${w}${x(A,g.length>0||v)}</div>`}let b=i?t.find(g=>g.id===i):null;if(b)return y(b,()=>l(null));return x(t,v);function x(g,w){let{inRoom:A,others:M}=bo(g,{room:a,query:r}),N=c?40:6,R=(Y,he)=>$`<button type="button" class="eq-row" @click=${()=>l(Y.id)}>
    <span class="eq-ic">${e("package")}</span>
    <span class="eq-tx"><b>${wo($,Y.nome,r)}</b>${[Y.zona,he?Y.roomName:""].filter(Boolean).length?$`<small>${[Y.zona,he?Y.roomName:""].filter(Boolean).join(" \xB7 ")}</small>`:_}</span>
  </button>`,G=A.slice(0,N),ie=M.slice(0,Math.max(0,N-G.length)),j=A.length+M.length-G.length-ie.length,I=_;return!r&&!a?I=$`<p class="eq-hint">Escolha o cômodo ou busque entre ${g.length} ${g.length===1?"equipamento":"equipamentos"}.</p>`:!r&&a&&!A.length?I=$`<p class="eq-hint">Nenhum equipamento em ${s}. Busque nos outros cômodos.</p>`:r&&!A.length&&!M.length&&(I=$`<p class="eq-hint">Nada com “${r}”.</p>`),$`<div class="eq-pick">
    <label class="eq-search">${e("search")}<input type="search" .value=${r} placeholder=${a?`Buscar em ${s}\u2026`:"Buscar equipamento\u2026"} aria-label="Buscar equipamento" ?autofocus=${w} @input=${Y=>d(Y.target.value)} /></label>
    ${G.length?$`<div class="eq-list">${G.map(Y=>R(Y,!1))}</div>`:_}
    ${ie.length?$`${a?$`<div class="eq-head">Em outros cômodos</div>`:_}<div class="eq-list">${ie.map(Y=>R(Y,!0))}</div>`:_}
    ${j>0?$`<button type="button" class="eq-more" @click=${()=>p()}>Mostrar mais ${j}</button>`:_}
    ${I}
  </div>`}}var ks=`
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
  .eq-add { display: inline-flex; align-items: center; gap: 6px; }
  .eq-add .i { width: 16px; height: 16px; }
`;var ca="M8 0h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8L0 13V7z",$o="M9.7 10a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 1 0 5.4 0z";function As(o,e=new Date){let t=o.filter(s=>s.id!=="grafite"),a=Math.floor(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5);return t[(a%t.length+t.length)%t.length]}function Ms({theme:o,onTheme:e,icon:t}){return n`<div class="seg themes" role="radiogroup" aria-label="Tema">
    ${[["auto","Autom\xE1tico","smartphone"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>n`<button type="button" class=${o===a?"on":""} role="radio" aria-checked=${o===a?"true":"false"} @click=${()=>e(a)}>${t(i)}<span>${s}</span></button>`)}
  </div>`}function Ds({palette:o,value:e,onPick:t}){return n`<div class="tag-swatches" role="radiogroup" aria-label="Cor do app">
    ${o.map(a=>n`<button type="button" class="tsw ${e===a.id?"on":""}" role="radio" aria-checked=${e===a.id?"true":"false"} style="--a:${a.fill}" @click=${()=>t(a.id)}>
        <svg viewBox="-5 -5 40 30" aria-hidden="true"><path class="sw-ring" d=${ca}></path><path class="sw-gap" d=${ca}></path><path class="sw-fill" d=${ca+$o}></path><path class="sw-check" d="m14.6 10.3 3.2 3.2 6.5-6.9"></path></svg>
        <span>${a.label}</span>
      </button>`)}
  </div>`}var Ss=`
  .seg.themes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); width: 100%; margin: 2px 0 18px; }
  .seg.themes button { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; height: auto; min-height: 66px; padding: 10px 4px 9px; font-size: 15px; }
  .seg.themes button .i { width: 22px; height: 22px; margin: 0; }
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
`;var K={activity:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"message-circle":'<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',"mic-off":'<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',package:'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',"door-open":'<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',"circle-pause":'<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',"thumbs-down":'<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',contrast:'<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'};var Cs="./fonts/barlow-400.woff2";var Ts="./fonts/barlow-500.woff2";var zs="./fonts/barlow-600.woff2";var Es="./fonts/barlow-condensed-500.woff2";var qs="./fonts/barlow-condensed-600.woff2";var Os="./fonts/barlow-condensed-700.woff2";var Fs='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Ns=`"CR Barlow", ${Fs}`,Rs=`"CR Barlow Condensed", ${Fs}`;function Is(){if(document.getElementById("cronologia-fonts"))return;let o=(t,a,s)=>`@font-face{font-family:"${t}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,e=document.createElement("style");e.id="cronologia-fonts",e.textContent=[o("CR Barlow",Cs,400),o("CR Barlow",Ts,500),o("CR Barlow",zs,"600 900"),o("CR Barlow Condensed",Es,500),o("CR Barlow Condensed",qs,600),o("CR Barlow Condensed",Os,"700 900")].join(`
`),document.head.appendChild(e)}var At=()=>n`<svg class="app-ic" viewBox="0 0 32 32" aria-hidden="true">
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
</svg>`;var So="(min-width: 1000px)";function Ps(o,e=""){if(!o.touches||o.touches.length!==1||window.matchMedia&&window.matchMedia(So).matches)return null;let t=o.touches[0];if(t.clientX<24||t.clientX>window.innerWidth-24)return null;let a=`input, textarea, select, [contenteditable], .grip, [data-noswipe]${e?`, ${e}`:""}`;for(let s of o.composedPath()){if(s===o.currentTarget)break;if(!(s instanceof Element))continue;if(s.matches(a))return null;let i=getComputedStyle(s);if((i.overflowX==="auto"||i.overflowX==="scroll")&&s.scrollWidth>s.clientWidth+2)return null}return{x:t.clientX,y:t.clientY,at:Date.now()}}function Hs(o,e){if(!e||!o.changedTouches||!o.changedTouches.length)return 0;let t=o.changedTouches[0],a=t.clientX-e.x,s=t.clientY-e.y;return Math.abs(a)<70||Math.abs(a)<Math.abs(s)*2||Date.now()-e.at>800?0:a<0?1:-1}async function da(o,e,t){for(let s=0;s<30&&o._view().name!==e;s++)await new Promise(i=>setTimeout(i,16));await o.updateComplete;let a=o.renderRoot.querySelector("main > .page, main > section");!a||!a.animate||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||a.animate([{opacity:0,transform:`translateX(${t>0?40:-40}px)`},{opacity:1,transform:"none"}],{duration:280,easing:"cubic-bezier(0.2, 0.8, 0.2, 1)"})}var Ls=qe`
  :host {
    --rv-body: ${me(Ns)};
    --rv-display: ${me(Rs)};
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
  .place-tags {
    margin: 5px 0 2px;
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
  /* ideas to tap (Deméritos): they keep flowing like tags */
  .chip-row.dm-ideas {
    display: flex;
    flex-wrap: wrap;
  }
  .chip-row.dm-ideas > .pick {
    min-height: 0;
  }
  .hidden-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    pointer-events: none;
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
  .tab.fab {
    color: var(--rv-text);
    font-weight: 600;
  }
  .tab.fab .pill {
    width: 58px;
    height: 38px;
    border-radius: 14px;
    background: var(--rv-accent);
    color: var(--rv-on-accent);
    display: grid;
    place-items: center;
    margin-top: -4px;
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
  .field input[type="text"],
  .field input[type="time"] {
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
  .field .time-row input[type="time"] {
    flex: 1;
    min-width: 0;
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
`,js=qe`
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
  .ai-actions {
    display: flex;
    margin: 14px 0 6px;
  }
  .ai-actions .btn {
    flex: none;
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
  .opts .btn,
  #dados .sec-actions .btn {
    flex: none;
    width: 11.5em;
    max-width: 100%;
    justify-content: center;
    white-space: nowrap;
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
    /* the app name is on the sidebar: the header keeps "Olá, Diego" */
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
`;var Vs=qe`
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
  .ev-title-input {
    font-size: 18px !important;
    font-weight: 600;
    resize: none;
  }
  .field .time-row {
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .field .time-row input[type="time"],
  .field .time-row input[type="date"] {
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
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
  .rv-when input {
    font: inherit;
    font-family: var(--rv-display);
    font-size: 17px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    border: 1.5px solid var(--rv-line-strong);
    background: var(--rv-surface-2);
    border-radius: 10px;
    padding: 4px 8px;
    color: var(--rv-text);
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
  .dose.tomado .dose-time {
    color: var(--rv-faint);
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
  .hint-card.maint-ok {
    width: 100%;
    text-align: left;
    background: var(--rv-surface);
    border: 1px solid var(--rv-line);
  }
  .hint-card.maint-ok > span {
    flex: 1;
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
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 12px;
  }
  .away-dates .field {
    margin: 0;
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
  .time-pill input {
    border: 0;
    background: none;
    padding: 6px 8px;
    font-size: 17px;
    font-family: var(--rv-display);
    font-weight: 600;
    width: auto;
    min-width: 0;
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
  .inline-time {
    width: auto !important;
    padding: 7px 10px !important;
    border-radius: 12px !important;
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
  .score-actions .btn {
    min-height: 42px;
    font-size: 14px;
    padding: 0 10px;
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
  /* Mais › Configurações › Placar › Lembrete diário */
  .remind-seg button {
    gap: 6px;
  }
  .remind-seg .i {
    width: 16px;
    height: 16px;
  }
  /* the exact time and Testar side by side, the same height */
  .remind-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 10px;
  }
  .remind-row input.remind-time {
    width: 100%;
    min-width: 0;
    height: 100%;
    min-height: 44px;
    padding: 0 8px;
    font: inherit;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    border-radius: 12px;
    border: 1px solid var(--rv-line-strong);
    background: var(--rv-surface);
    color: var(--rv-text);
  }
  .remind-row .remind-test {
    margin: 0;
    min-height: 44px;
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
`;var pa=class{constructor(e,t){this.url=e,this.onStatus=t,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let e=new WebSocket(this.url);this.ws=e,e.onopen=()=>{this.open=!0,this.backoff=1e3;let t=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))e.send(a);if(this.onStatus&&this.onStatus(!0),t)for(let a of this.reconnectHandlers)a()},e.onmessage=t=>{let a;try{a=JSON.parse(t.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},e.onclose=()=>{let t=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),t&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(e){this.reconnectHandlers.push(e)}_send(e){let t=JSON.stringify(e);this.open?this.ws.send(t):this.queue.push(t)}sendMessagePromise(e){let t=this.nextId++;return new Promise((a,s)=>{this.pending.set(t,{resolve:a,reject:s}),this._send({...e,id:t})})}subscribeMessage(e,t){let a={cb:e,msg:t,id:null,first:null};this.subs.add(a);let s=new Promise((i,r)=>{a.first={resolve:i,reject:r}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(e){let t=this.nextId++;e.id=t,this.byId.set(t,e),this.pending.set(t,{resolve:()=>{e.first&&e.first.resolve(),e.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(t),this.subs.delete(e),e.first&&e.first.reject(a),e.first=null)}}),this.ws.send(JSON.stringify({...e.msg,id:t}))}};function Dt(){try{if(window.parent===window)return null;let o=window.parent.document.querySelector("home-assistant");return o&&o.hass||null}catch{return null}}var Bs=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function Us(){let o=Dt();return o&&o.themes&&typeof o.themes.darkMode=="boolean"?o.themes.darkMode:!!(Bs&&Bs.matches)}function Ys(){return{topbar:!(window.parent!==window),haptic(e){try{let t=window.parent;t!==window&&t.dispatchEvent(new t.CustomEvent("haptic",{detail:e}))}catch{}},openInHA(e){try{let t=window.parent;if(t!==window&&t.document){t.history.pushState(null,"",e),t.dispatchEvent(new t.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(e,"_top")}}}var Mt=class{constructor(){let e=new URL("ws",location.href);e.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new pa(e.href,t=>this.statusHandlers.forEach(a=>a(t)))}onStatus(e){this.statusHandlers.push(e)}onReconnect(e){this.conn.onReconnect(e)}call(e,t={}){return this.conn.sendMessagePromise({type:e,...t})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(e){return this.conn.subscribeMessage(e,{type:"cronologia/subscribe_calendars"})}subscribePrefs(e){return this.conn.subscribeMessage(e,{type:"cronologia/prefs/subscribe"})}subscribeEvents(e,t,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:e,start:t,end:a})}listEvents(e,t,a){return this.call("cronologia/events/list",{entity_id:e,start:t,end:a})}createEvent(e,t){return this.call("calendar/event/create",{entity_id:e,event:t})}updateEvent(e,t,a,{recurrenceId:s,range:i}={}){let r={entity_id:e,uid:t,event:a};return s&&(r.recurrence_id=s),i&&(r.recurrence_range=i),this.call("calendar/event/update",r)}deleteEvent(e,t,{recurrenceId:a,range:s}={}){let i={entity_id:e,uid:t};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(e,t){return this.call("cronologia/prefs/set_calendar",{entity_id:e,prefs:t})}setAppPrefs(e){return this.call("cronologia/prefs/set_app",{prefs:e})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(e){return this.conn.subscribeMessage(e,{type:"cronologia/home/subscribe"})}skipCheck(e){return this.call("cronologia/check/set",{key:e,done:!0,kind:"rotina",skip:!0})}setCheck(e,t,a,s){return this.call("cronologia/check/set",{key:e,done:t,kind:a,...s?{who:s}:{}})}maintDone(e,t,a){return this.call("cronologia/maint/done",{entity_id:e,uid:t,...a?{who:a}:{}})}scoreReassign(e,t){return this.call("cronologia/score/reassign",{key:e,who:t})}scoreExtra(e,t,a){return this.call("cronologia/score/extra",{who:e,points:t,title:a})}scoreDemerit(e,t){return this.call("cronologia/score/demerit",{demerit:e,who:t})}scoreRemove(e){return this.call("cronologia/score/remove",{key:e})}scoreLog(e,t,a,s){return this.call("cronologia/score/log",{before:e,limit:t,...a?{from:a,to:s}:{}})}scoreRestore(e){return this.call("cronologia/score/restore",{key:e})}scorePrizes(e,t,a){return this.call("cronologia/score/prizes",{period:e,shared:t,per:a})}scoreReward(e,t){return this.call("cronologia/score/reward",{period:e,text:t})}scoreDelivered(e,t){return this.call("cronologia/score/delivered",{period:e,delivered:t})}maintUndo(e,t){return this.call("cronologia/maint/undo",{entity_id:e,uid:t})}payBill(e,t){return this.call("cronologia/contas/pagar",{conta:e,...t?{valor:t}:{}})}unpayBill(e){return this.call("cronologia/contas/desfazer",{conta:e})}newBill(e){return this.call("cronologia/contas/nova",{conta:e})}dataUrl(e){return new URL(`api/export/${e}`,location.href).href}async importData(e){let t=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(e.name||"")},body:e}),a=await t.json().catch(()=>({}));if(!t.ok)throw new Error(a.error||`Erro ${t.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(e){return this.call("cronologia/versions/restore",{name:e})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(e){return this.call("cronologia/backups/restore",{name:e})}addTodo(e,t){return this.call("cronologia/todo/add",{entity_id:e,task:t})}aiUsage(){return this.call("cronologia/ai/usage")}bringPreview(e){return this.call("cronologia/todo/bring_preview",{entity_id:e})}bring(e,t,a,s=!0){return this.call("cronologia/todo/bring",{entity_id:e,calendar:t,uids:a,remove:s})}setTodo(e,t,a,s=""){return this.call("cronologia/todo/set",{entity_id:e,uid:t,done:a,who:s})}testAlert(e){return this.call("cronologia/notify/test",{person:e})}testScoreReminder(){return this.call("cronologia/score/remind_test",{})}exportUrl({calendars:e,start:t,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",e.join(",")),s.searchParams.set("start",t),s.searchParams.set("end",a),s.href}voiceStatus(e=!1){return this.call("cronologia/voice/status",e?{fresh:!0}:{})}async voiceText(e){let t=await fetch(new URL("api/voice",location.href),{method:"POST",headers:{"content-type":"application/octet-stream"},body:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}async extract(e){let t=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}};var tt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],Ws=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],ee=o=>tt.find(e=>e.id===o),Ks=o=>ee(Ws[o%Ws.length]);function at(o,e){let t=o.replace("#",""),a=parseInt(t.length===3?t.replace(/./g,s=>s+s):t,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${e})`}function P(o,e,t="c"){return`--${t}:${o.fill};--${t}i:${e?o.fill:o.ink};--${t}s:${at(o.fill,e?.18:.15)};`}var ha=o=>(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var E=(o,e,t)=>`${o} ${o===1?e:t}`,q=(o,e=38)=>o&&o.length>e?o.slice(0,e-1).trimEnd()+"\u2026":o||"",W=o=>o&&o.charAt(0).toUpperCase()+o.slice(1);function St(o){let e=[],t=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=t.exec(o||"");)s.index>a&&e.push({text:o.slice(a,s.index)}),e.push({url:s[0]}),a=s.index+s[0].length;return a<(o||"").length&&e.push({text:o.slice(a)}),e}var Ct=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],_e=["dom","seg","ter","qua","qui","sex","s\xE1b"],ke=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Tt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Ie=o=>String(o).padStart(2,"0"),z=o=>`${o.getFullYear()}-${Ie(o.getMonth()+1)}-${Ie(o.getDate())}`,H=o=>`${Ie(o.getHours())}:${Ie(o.getMinutes())}`,O=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},F=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),C=(o,e)=>{let t=new Date(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds());return t.setDate(t.getDate()+e),t},fe=(o,e)=>new Date(o.getFullYear(),o.getMonth()+e,1),J=(o,e)=>o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&o.getDate()===e.getDate(),U=(o,e)=>Math.round((F(o)-F(e))/864e5),Pe=(o,e=0)=>C(F(o),-((o.getDay()-e+7)%7)),ua=o=>/^\d{4}-\d{2}-\d{2}$/.test(o)?O(o):new Date(o);function re(o){let e=-o.getTimezoneOffset(),t=e>=0?"+":"-";return`${z(o)}T${H(o)}:00${t}${Ie(Math.floor(Math.abs(e)/60))}:${Ie(Math.abs(e)%60)}`}function B(o,e=new Date,{long:t=!0,cap:a=!0}={}){let s=U(o,e),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${Ct[o.getDay()]}, ${o.getDate()} de ${t?ke[o.getMonth()]:Tt[o.getMonth()]}`,o.getFullYear()!==e.getFullYear()&&(i+=` de ${o.getFullYear()}`)),a?W(i):i}var ma=o=>`${Ct[o.getDay()]}, ${o.getDate()} de ${ke[o.getMonth()]}`,X=(o,e=new Date)=>`${o.getDate()} ${Tt[o.getMonth()]}${o.getFullYear()!==e.getFullYear()?` ${o.getFullYear()}`:""}`;function zt(o){let e=Math.round(o/6e4);if(e<1)return"agora";if(e<60)return`em ${e} min`;let t=Math.floor(e/60),a=e%60;if(t<24)return a&&t<4?`em ${t} h ${a} min`:`em ${t} h`;let s=Math.round(t/24);return`em ${E(s,"dia","dias")}`}function fa(o){let e=Math.round(o/6e4);if(e<60)return`${e} min`;let t=Math.floor(e/60),a=e%60;return a?`${t} h ${a} min`:`${t} h`}var Et=[{id:"",label:"N\xE3o repete",short:"N\xE3o"},{id:"DAILY",label:"Todo dia",short:"Di\xE1rio"},{id:"WEEKLY",label:"Toda semana",short:"Semanal"},{id:"MONTHLY",label:"Todo m\xEAs",short:"Mensal"},{id:"YEARLY",label:"Todo ano",short:"Anual"}];function Ae(o){if(!o)return"";let e=Object.fromEntries(o.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),t=Number(e.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[e.FREQ];if(!a)return"Repete";let s=t>1?`A cada ${t} ${a[1]}`:a[0];if(e.BYDAY&&e.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${e.BYDAY.split(",").map(r=>i[r]||r).join(", ")})`}if(e.COUNT)s+=`, ${E(Number(e.COUNT),"vez","vezes")}`;else if(e.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(e.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var st=o=>{let e=/FREQ=(\w+)/.exec(o||"");return e?e[1]:""};async function ga(o,e=1800){let t=a=>new Promise((s,i)=>{let r=new FileReader;r.onload=()=>s(String(r.result).split(",")[1]||""),r.onerror=()=>i(r.error),r.readAsDataURL(a)});try{let a=await createImageBitmap(o,{imageOrientation:"from-image"}),s=Math.min(1,e/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let r=await new Promise(c=>i.toBlob(c,"image/jpeg",.86));return{mime:"image/jpeg",data:await t(r),url:URL.createObjectURL(r)}}catch{return{mime:o.type||"image/jpeg",data:await t(o),url:URL.createObjectURL(o)}}}function Qs(o){let e=new Map(o.map(a=>[a.id,String(a.name||"").split(/\s+/).filter(Boolean)])),t=new Map;for(let a of o){let s=e.get(a.id),i=0;for(let r of o){if(r.id===a.id)continue;let c=e.get(r.id),d=0;for(;d<s.length-1&&d<c.length-1&&s[d].toLowerCase()===c[d].toLowerCase();)d++;d>=2&&d>i&&(i=d)}t.set(a.id,i?{short:s.slice(i).join(" "),group:s.slice(0,i).join(" ")}:{short:a.name,group:""})}return t}var va={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos",period:"Per\xEDodo",after:"Volta",history:"Feito em",room:"C\xF4modo",equip:"Equipamento"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos",room:"C\xF4modo",equip:"Equipamento"}}},Co={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},it={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},D=o=>String(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),Js=o=>String(o).padStart(2,"0");var ai=(o,e)=>`${o}|${e.uid||e.summary}|${e.recurrence_id||e.start}`;function Ft(o){let e=String(o||"").replace(/[^\d.,-]/g,"");if(!e)return null;e.includes(",")?e=e.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(e)&&!/\.\d{1,2}$/.test(e)&&(e=e.replace(/\./g,""));let t=Number(e);return Number.isFinite(t)&&t>0?Math.round(t*100)/100:null}var Oe=(o,e=!0)=>o==null?"":o.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:e?2:0,maximumFractionDigits:e?2:0});function Xs(o){let e=/(\d+)\s*([a-zçê]+)/i.exec(D(o));if(!e)return null;let t=Math.max(1,Math.min(999,Number(e[1]))),a=e[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:t,unit:s}:null}var He=[{id:"manha",label:"Manh\xE3",when:"de manh\xE3",icon:"sunrise",from:5},{id:"tarde",label:"Tarde",when:"\xE0 tarde",icon:"sun",from:12},{id:"noite",label:"Noite",when:"\xE0 noite",icon:"moon",from:18}],ne=o=>He.find(e=>e.id===o)||null,To=o=>{let e=D(o);return e.startsWith("manh")?"manha":e.startsWith("tard")?"tarde":e.startsWith("noit")?"noite":""},Fe=o=>o>=18||o<5?"noite":o>=12?"tarde":"manha";function Ot(o,e=new Date){if(!o)return 2;let t=e.getHours(),a=Fe(t);if(o===a)return 0;let s=i=>He.findIndex(r=>r.id===i);return t>=5&&s(o)<s(a)?1+s(o)/10:3+s(o)}var si=(o,e=new Date)=>Ot(o,e)>0&&Ot(o,e)<2,te=o=>o?`${o.n} ${o.n===1?it[o.unit][1]:it[o.unit][2]}`:"";function xa(o,e,t=1){let a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),s=e.n*t;if(e.unit==="dias")a.setDate(a.getDate()+s);else if(e.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=e.unit==="anos"?12*s:s,r=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let c=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(r,c))}return a}var zo=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Gs(o){let e=[];for(let t of String(o||"").matchAll(zo))e.push(`${t[3]}-${Js(+t[2])}-${Js(+t[1])}`);return e}var Zs=o=>o.map(e=>`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`).join(", "),ei=o=>{let e=/(\d+)/.exec(String(o||""));return e?Math.min(1e3,Number(e[1])):0};function ii(o){let e=String(o||"").replace(/\r/g,"").split(`
`),t=0;for(;t<e.length&&!e[t].trim();)t++;let a=/^#\s*([a-z]+)\b/.exec(D(e[t])),s=a&&Co[a[1]];if(!s)return null;let i=Object.entries(va[s].fields).map(([d,l])=>[d,D(l)]),r={};for(t++;t<e.length;t++){let d=/^([^:]{2,24}):\s*(.*)$/.exec(e[t]);if(!d)break;let l=D(d[1]),p=i.find(([,h])=>h===l||`${h}s`===l||h.startsWith("aviso")&&l.startsWith("aviso"));if(!p)break;r[p[0]]=d[2].trim()}let c={kind:s,notes:e.slice(t).join(`
`).trim()};if(s==="remedio")c.dose=r.dose||"",c.who=r.who||"",c.alert=!/^(nao|desligado|off)/.test(D(r.alert));else if(s==="conta")c.value=Ft(r.value);else if(s==="rotina")c.who=r.who||"",c.points=ei(r.points),c.period=To(r.period),c.after=r.after?Xs(r.after):null,c.after&&(c.history=Gs(r.history)),c.rooms=qt(r.room),c.equips=qt(r.equip),c.room=c.rooms[0]||"",c.equip=c.equips[0]||"";else{c.who=r.who||"",c.every=Xs(r.every)||{n:6,unit:"meses"};let d=/(\d+)/.exec(r.warn||"");c.warn=d?Math.min(365,Number(d[1])):7,c.history=Gs(r.history),c.points=ei(r.points),c.rooms=qt(r.room),c.equips=qt(r.equip),c.room=c.rooms[0]||"",c.equip=c.equips[0]||""}return c}function qt(o){let e=[];for(let t of String(o||"").split(";")){let a=t.trim();a&&!e.some(s=>D(s)===D(a))&&e.push(a)}return e.slice(0,10)}function ae(o,e){let t=Array.isArray(o)?o.map(a=>String(a||"").trim()).filter(Boolean):[];return t.length?t:e&&String(e).trim()?[String(e).trim()]:[]}function ti(o,e,t){let a=ae(t.rooms,t.room).map(i=>i.replace(/;/g,",")),s=ae(t.equips,t.equip).map(i=>i.replace(/;/g,","));o(a.length>1?`${e.room}s`:e.room,a.join("; ")),o(s.length>1?`${e.equip}s`:e.equip,s.join("; "))}function oi(o){let e=[va[o.kind].tag],t=(i,r)=>{r!=null&&String(r).trim()&&e.push(`${i}: ${String(r).replace(/\s*\n\s*/g," ").trim()}`)},a=va[o.kind].fields;o.kind==="remedio"?(t(a.dose,o.dose),t(a.who,o.who),o.alert===!1&&t(a.alert,"n\xE3o")):o.kind==="conta"?t(a.value,o.value!=null?Oe(o.value):""):o.kind==="rotina"?(t(a.who,o.who),o.points>0&&t(a.points,o.points),ne(o.period)&&t(a.period,ne(o.period).label),o.after&&o.after.n>0&&(t(a.after,`${te(o.after)} depois de feita`),t(a.history,Zs((o.history||[]).slice(0,8)))),ti(t,a,o)):(t(a.who,o.who),t(a.every,te(o.every)),t(a.warn,`${o.warn??7} ${(o.warn??7)===1?"dia":"dias"} antes`),t(a.history,Zs((o.history||[]).slice(0,8))),o.points>0&&t(a.points,o.points),ti(t,a,o));let s=String(o.notes||"").trim();return s?`${e.join(`
`)}
${s}`:e.join(`
`)}var ri=4,Eo=300*1e3;function Nt(o,e){let t=ua(e.start),a=ua(e.end),s=e.all_day!=null?!!e.all_day:/^\d{4}-\d{2}-\d{2}$/.test(e.start);return{key:ai(o,e),kind:ii(e.description),cal:o,uid:e.uid||null,rid:e.recurrence_id||null,rrule:e.rrule||null,summary:e.summary||"(sem t\xEDtulo)",description:e.description||"",location:e.location||"",allDay:s,start:t,end:a>t?a:C(t,s?1:0),raw:e}}var Rt=class{constructor(e,t){this.api=e,this.onChange=t,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(e){let t=[...new Set(e)].sort();if(t.join()!==this.calendars.join()){this.calendars=t;for(let a of this.windows)this._syncWindow(a)}}ensure(e,t){let a=this._covering(e,t);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:C(F(e),-7),end:C(F(t),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(e,t,a=this.calendars){let s=this._covering(e,t),i=[];if(!s)return i;for(let r of a){let c=s.cals.get(r);if(c)for(let d of c.events)d.start<t&&d.end>e&&i.push(d)}return i.sort((r,c)=>r.start-c.start||Number(c.allDay)-Number(r.allDay)||r.summary.localeCompare(c.summary,"pt-BR"))}loading(e,t){let a=this._covering(e,t);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let e=new Map;for(let t of this.windows)for(let[a,s]of t.cals)s.error&&e.set(a,s.error);return e}refresh(e){for(let t of this.windows){let a=t.cals.get(e);a&&a.poll&&this._fetch(t,e,a)}}reloadAll(){for(let e of this.windows)for(let[t,a]of e.cals)a.poll&&this._fetch(e,t,a)}dispose(){for(let e of this.windows)for(let[t]of e.cals)this._drop(e,t);this.windows=[]}_covering(e,t){let a=null;for(let s of this.windows)s.start<=e&&s.end>=t&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(e){for(let t of this.calendars)e.cals.has(t)||this._add(e,t);for(let t of[...e.cals.keys()])this.calendars.includes(t)||this._drop(e,t)}_add(e,t){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};e.cals.set(t,a);let s=re(e.start),i=re(e.end);if(this.noSubscribe)return this._startPolling(e,t,a);a.unsub=this.api.subscribeEvents(t,s,i,r=>{e.cals.has(t)&&(r&&Array.isArray(r.events)?(a.events=r.events.map(c=>Nt(t,c)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(r=>r&&r.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(e,t,a)):(a.loaded=!0,a.error=r&&r.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(e,t,a){return this._fetch(e,t,a),a.poll=setInterval(()=>this._fetch(e,t,a),Eo),null}async _fetch(e,t,a){try{let s=await this.api.listEvents(t,re(e.start),re(e.end));if(!e.cals.has(t))return;a.events=(s.events||[]).map(i=>Nt(t,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(e,t){let a=e.cals.get(t);a&&(e.cals.delete(t),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=ri)){this.windows.sort((e,t)=>t.used-e.used);for(let e of this.windows.splice(ri))for(let[t]of e.cals)this._drop(e,t)}}};function ge(o,e){let t=F(e),a=C(t,1);return o.filter(s=>s.start<a&&s.end>t).map(s=>It(s,t))}function qo(o){return o.kind||o.todo||o.gerencia||o.movedDone?!1:(o.allDay?C(F(o.end),-1):F(new Date(o.end.getTime()-1)))>F(o.start)&&(o.allDay||o.end-o.start>=864e5)}function It(o,e){if(!qo(o))return o;let t=z(e);return{...o,key:`${o.key}|${t}`,day:t}}function ni(o,e){let t=F(e).getTime(),a=t+864e5,s=o.filter(l=>!l.allDay).map(l=>({e:l,s:Math.max(l.start.getTime(),t),t:Math.min(Math.max(l.end.getTime(),l.start.getTime()+30*6e4),a)})).sort((l,p)=>l.s-p.s||p.t-l.t),i=[],r=[],c=-1,d=()=>{let l=[];for(let p of r){let h=l.findIndex(f=>f<=p.s);h<0?(h=l.length,l.push(p.t)):l[h]=p.t,p.lane=h}for(let p of r)i.push({...p,lanes:l.length});r=[]};for(let l of s)r.length&&l.s>=c&&d(),r.push(l),c=Math.max(c,l.t);return r.length&&d(),i.map(l=>({event:l.e,top:(l.s-t)/36e5,height:(l.t-l.s)/36e5,lane:l.lane,lanes:l.lanes}))}var ba=o=>o.replace(/\\([nN,;\\])/g,(e,t)=>t==="n"||t==="N"?`
`:t);function Oo(o){return o.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Fo(o){let e=-1,t=!1;for(let d=0;d<o.length;d++)if(o[d]==='"')t=!t;else if(o[d]===":"&&!t){e=d;break}if(e<0)return null;let a=o.slice(0,e),s=o.slice(e+1),[i,...r]=a.split(";"),c={};for(let d of r){let[l,p]=d.split("=");l&&(c[l.toUpperCase()]=(p||"").replace(/^"|"$/g,""))}return{name:i.toUpperCase(),params:c,value:s}}function li(o,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(t.formatToParts(new Date(e)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-e}catch{return null}}function ci(o){let e=o.value.trim(),t=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(e);if(!t)return null;let[,a,s,i,r,c,d,l]=t;if(r==null||o.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(l)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+r,+c,+(d||0)))};let p=o.params.TZID;if(p){let h=Date.UTC(+a,+s-1,+i,+r,+c,+(d||0)),f=li(p,h);if(f!=null){let m=h-f,v=li(p,m);return{allDay:!1,date:new Date(h-(v??f))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+r,+c,+(d||0))}}function No(o){let e=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(o.trim());if(!e)return null;let[,t,a,s,i,r,c]=e,d=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+r||0)*60+(+c||0))*1e3;return t==="-"?-d:d}function di(o){let e=[],t=null,a=0;for(let i of Oo(o)){if(/^BEGIN:VEVENT/i.test(i)){t={},a=0;continue}if(!t)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){e.push(t),t=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let r=Fo(i);r&&(r.name==="SUMMARY"?t.summary=ba(r.value):r.name==="DESCRIPTION"?t.description=ba(r.value):r.name==="LOCATION"?t.location=ba(r.value):r.name==="DTSTART"?t.dtstart=ci(r):r.name==="DTEND"?t.dtend=ci(r):r.name==="DURATION"?t.duration=No(r.value):r.name==="RRULE"?t.rrule=r.value.trim():r.name==="STATUS"?t.status=r.value.trim().toUpperCase():r.name==="RECURRENCE-ID"&&(t.recurrence=!0))}let s=[];for(let i of e){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let r=i.dtstart.date,c=i.dtend?i.dtend.date:i.duration!=null?new Date(r.getTime()+i.duration):null,d=i.dtstart.allDay,l={title:(i.summary||"").trim()||"Evento",date:z(r),start:d?"":H(r),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(d){if(c){let p=new Date(c.getFullYear(),c.getMonth(),c.getDate()-1);p>r&&(l.end_date=z(p))}}else c&&c>r&&(l.end=H(c),z(c)!==z(r)&&(l.end_date=z(c)));s.push(l)}return s}var Le=class{constructor(e){this.onLevel=e,this.chunks=[],this.length=0,this.rate=16e3}async start(){let e=navigator.mediaDevices;if(!e||!e.getUserMedia)throw Object.assign(new Error("no_api"),{name:"NoApi"});this.stream=await e.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});let t=window.AudioContext||window.webkitAudioContext;try{this.ctx=new t({sampleRate:16e3})}catch{this.ctx=new t}this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{}),this.rate=this.ctx.sampleRate,this.src=this.ctx.createMediaStreamSource(this.stream),this.node=this.ctx.createScriptProcessor(4096,1,1),this.node.onaudioprocess=a=>{let s=a.inputBuffer.getChannelData(0);this.chunks.push(new Float32Array(s)),this.length+=s.length;let i=0;for(let r=0;r<s.length;r+=4)i+=s[r]*s[r];this.onLevel&&this.onLevel(Math.min(1,Math.sqrt(i/(s.length/4))*5))},this.src.connect(this.node),this.node.connect(this.ctx.destination)}seconds(){return this.length/this.rate}stop(){this._close();let e=new Float32Array(this.length),t=0;for(let r of this.chunks)e.set(r,t),t+=r.length;this.chunks=[];let a=this.rate/16e3,s=Math.floor(e.length/a),i=new Int16Array(s);for(let r=0;r<s;r++){let c=Math.floor(r*a),d=Math.max(c+1,Math.min(e.length,Math.floor((r+1)*a))),l=0;for(let h=c;h<d;h++)l+=e[h];let p=Math.max(-1,Math.min(1,l/(d-c)));i[r]=p<0?p*32768:p*32767}return i}cancel(){this._close(),this.chunks=[],this.length=0}_close(){try{this.node&&(this.node.onaudioprocess=null),this.src&&this.src.disconnect(),this.node&&this.node.disconnect()}catch{}if(this.stream)for(let e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.state!=="closed"&&this.ctx.close().catch(()=>{}),this.stream=null,this.node=null,this.src=null}};function Pt(o){let e=o&&o.name||"";return e==="NotAllowedError"||e==="SecurityError"?"O microfone est\xE1 bloqueado. Permita o microfone para o Home Assistant (no navegador, no cadeado ao lado do endere\xE7o; no app do celular, nas permiss\xF5es do app Home Assistant) e tente de novo.":e==="NotFoundError"||e==="OverconstrainedError"?"N\xE3o achei um microfone neste aparelho.":e==="NotReadableError"?"O microfone est\xE1 sendo usado por outro app. Feche o outro e tente de novo.":e==="NoApi"?window.isSecureContext===!1?"O microfone aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), o celular e o navegador n\xE3o deixam usar o microfone, nem pelo app do Home Assistant.":"Este navegador n\xE3o deixa usar o microfone aqui.":`N\xE3o consegui abrir o microfone (${o&&o.message||e||"erro"}).`}var wa=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.package)}</svg>`,pi="Todos os c\xF4modos";function hi(o=[],e=[]){let t=new Set((o||[]).filter(Boolean));return(e||[]).length>1&&e.every(a=>t.has(a))}var ot=(o=[],e=[])=>hi(o,e)?[pi]:(o||[]).filter(Boolean);function je(o=[],e=[],t=[]){let a=(o||[]).filter(Boolean),s=(e||[]).filter(Boolean);if(!a.length&&!s.length)return u;let i=r=>n`<span class="tag room" title=${r}>${wa("package")}${q(r,26)}</span>`;return s.length>1?n`<span class="chips place-tags">${i(s[0])}<span class="tag room" title=${s.slice(1).join(", ")}>+${s.length-1}</span></span>`:hi(a,t)?n`<span class="chips place-tags"><span class="tag room" title=${a.join(", ")}>${wa("house")}${pi}</span>${s.length?i(s[0]):u}</span>`:n`<span class="chips place-tags">${a.map(r=>n`<span class="tag room">${wa("door-open")}${q(r,22)}</span>`)}${s.length?i(s[0]):u}</span>`}var S=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,Me={"":{label:"Evento",icon:"calendar"},evento:{label:"Evento",icon:"calendar",verb:"Feito",done:"feito"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},gi=["SU","MO","TU","WE","TH","FR","SA"],Ro=["D","S","T","Q","Q","S","S"],Io=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],Po=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],Ho=o=>o.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),$a=o=>(o||"?").trim().charAt(0).toUpperCase(),ui=o=>o<60?`${o} min`:`${Math.floor(o/60)} h${o%60?` ${o%60} min`:""}`;function mi(o,e,t){let a=U(O(o),e);return t?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function Lo(o,e,t=!1){return o&&e&&D(o)===D(e)?"Tomei":t&&o?`${o} tomou`:"Tomado"}function jo(o,e){return o.days<-1?`venceu h\xE1 ${-o.days} dias`:o.days===-1?"venceu ontem":o.days===0?"\xE9 hoje":o.days===1?"amanh\xE3":o.days<=60?`em ${o.days} dias`:`em ${X(O(o.due),e)}`}function Vo(o,e){if(o.done)return`${o.done.skipped?"pulada":`feito por ${o.done.by||"algu\xE9m"}`} \xB7 volta ${o.next?B(O(o.next),e,{long:!1,cap:!1}):`em ${te(o.after)}`}`;let t=ne(o.period);return[o.late>0?o.late===1?"venceu ontem":`atrasada h\xE1 ${o.late} dias`:o.time||(t?t.when:"hoje"),o.who,`volta ${te(o.after)} depois`].filter(Boolean).join(" \xB7 ")}function ya(o,e){if(o.after)return Vo(o,e);let t=ne(o.period);return[o.yesterday?"ficou de ontem":o.time||(t&&!o.done?t.when:""),o.done?o.done.skipped?"pulada":`feito${o.done.by?` por ${o.done.by}`:""}`:o.who].filter(Boolean).join(" \xB7 ")||"hoje"}var Bo=o=>o.period||(o.time?Fe(Number(String(o.time).slice(0,2))):""),_a=(o,e)=>!o.done&&(o.late>0||!!o.period&&si(o.period,e)),rt=(o,e,t=Bo)=>o.map((a,s)=>[Ot(t(a),e),s,a]).sort((a,s)=>a[0]-s[0]||a[1]-s[1]).map(a=>a[2]);function fi(o,e){let t=Object.fromEntries(String(o||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(r=>r.split("="))),a={freq:"uma",byday:[e.getDay()],interval:3,dur:"sempre",until:z(C(e,30)),days:7},s=Number(t.INTERVAL||1);t.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):t.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:t.BYDAY?t.BYDAY.split(",").map(r=>gi.indexOf(r.slice(-2))).filter(r=>r>=0):[e.getDay()]}):t.FREQ==="MONTHLY"?a.freq="mensal":t.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(t.UNTIL||"");if(i){let r=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:z(r)})}return a}var vi=o=>class extends o{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(e){return e.gerencia?e.gerencia.pago?{at:null,by:""}:null:e.todo?e.todo.done?{at:null,by:""}:null:this._ix().checks[e.key]||null}_careOn(){let e=this._ix().people||[];return((this._app("alerts",null)||{}).caregivers||[]).some(a=>e.some(s=>s.phone&&D(s.name)===D(a)))}_phoneOwner(e){let t=(this._ix().people||[]).find(a=>D(a.name)===D(e));return t&&t.reach?t.phone?t.name:t.care:""}_gerenciaEvents(e,t){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=O(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:C(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<t&&s.end>e))}_movedDoneEvents(e,t){let a=this._ix(),s=z(new Date(this._now)),i=[];for(let[r,c]of Object.entries(a.checks||{})){let d=c&&c.moved;if(!d||!d.day)continue;let l=c.skipped&&d.start?/T/.test(d.start)?z(new Date(d.start)):String(d.start).slice(0,10):d.day,p=O(l);if(!(p<t&&C(p,1)>e))continue;let h=d.day===s?(a.routines||[]).find(_=>_.key===r):null,f=h&&h.summary||d.summary;if(!f)continue;let m=p,v=C(p,1),$=!0;if(/T/.test(d.start||"")){let _=new Date(d.start),y=new Date(d.end||d.start);m=new Date(p.getFullYear(),p.getMonth(),p.getDate(),_.getHours(),_.getMinutes()),v=new Date(m.getTime()+Math.max(15*6e4,y-_||0)),$=!1}i.push({key:r,cal:d.cal,uid:null,rid:null,rrule:null,summary:f,description:"",location:"",allDay:$,start:m,end:v,raw:{},kind:{kind:"rotina",points:h&&h.points||0,who:h&&h.who||""},movedDone:{item:h,by:c.by||"",day:l}})}return i}_billsList(){let e=this._ix(),t=F(new Date(this._now)),a=z(t),s=z(C(t,8)),i=z(C(t,-1)),r=[];for(let c of e.gerencia&&e.gerencia.contas||[]){let d=!c.pago,l=this._paidNow&&this._paidNow.has(c.id);(d?!(c.atrasada||c.vencimento<=s):!l&&!(c.vencimento>=i&&c.vencimento<=s))||r.push({id:c.id,source:"gerencia",title:c.descricao,value:c.valor,due:c.vencimento,paid:!!c.pago,overdue:d&&(c.atrasada||c.vencimento<a),sub:c.tipo==="fatura"?E(c.itens||0,"compra","compras"):c.categoria||"",c})}for(let c of e.bills||[]){let d=this._cal(c.cal);r.push({id:c.key,source:"cal",title:c.summary,value:c.value,due:c.due,paid:!!c.paid,overdue:c.overdue,sub:d?d.name:"",item:c})}return r.sort((c,d)=>Number(c.paid)-Number(d.paid)||c.due.localeCompare(d.due)||c.title.localeCompare(d.title,"pt-BR"))}_eventOfItem(e){return Nt(e.cal,{start:e.start,end:e.end,summary:e.summary,description:e.description,location:e.location,uid:e.uid,recurrence_id:e.rid,rrule:e.rrule})}_openIndexItem(e){this._openEvent(this._eventOfItem(e))}async _check(e,t){t==="remedio"&&(this._medsHold=!0);try{await this.api.setCheck(e.key,!0,t),this._haptic("success");let a=Me[t];this._showToast(`${q(e.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _skip(e){try{let t=await this.api.skipCheck(e.key);this._haptic("light");let a=t&&t.next?B(O(t.next),new Date(this._now),{long:!1,cap:!1}):"";this._showToast(`${q(e.summary,24)}: pulada${a?`, volta ${a}`:""}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,"rotina").catch(()=>{})})}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _undoCheck(e,t){try{await this.api.setCheck(e.key,!1,t),this._haptic("light"),this._showToast(`${q(e.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(e.key,!0,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(e){if(e.source==="cal")return this._check(e.item,"conta");try{e.busy=!0,this.requestUpdate(),await this.api.payBill(e.id),(this._paidNow||(this._paidNow=new Set)).add(e.id),this._haptic("success"),this._showToast(`${q(e.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(e.id).catch(t=>this._showToast(t.message))})}catch(t){this._showToast(`O GerencIA n\xE3o deu baixa: ${t.message}`)}}async _unpay(e){if(e.source==="cal")return this._undoCheck(e.item,"conta");try{await this.api.unpayBill(e.id),this._showToast(`${q(e.title,26)}: volta para a pagar`)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _testAlert(e){try{await this.api.testAlert(e),this._showToast(`Aviso de teste enviado para o celular de ${this._phoneOwner(e)||e}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(t){this._showToast(`N\xE3o foi: ${t.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#avisos");e&&e.scrollIntoView({block:"start"})}))}_ring(e,t,a=null,s=null){let r=2*Math.PI*15,c=Math.max(0,Math.min(1,e||0));return n`<span class="ring2 ${t}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${c>0?Re`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(c*r).toFixed(2)} ${r.toFixed(2)}`}></circle>`:u}
        </svg>
        ${a!=null?n`<b>${a}</b>`:s||u}
      </span>`}_kindIcon(e){let t=Me[e.kind?e.kind.kind:""]||Me[""];return n`<span class="kind-ic">${S(t.icon)}</span>`}_renderMedsPanel(){let e=this._ix().meds||[];if(!e.length)return u;let t=e.filter(r=>r.taken).length,a=e.filter(r=>r.state==="atrasado"),s=[];for(let r of e){let c=r.who||"",d=s.find(l=>D(l.who)===D(c));d||s.push(d={who:c,list:[],phone:!1}),d.list.push(r),r.alert&&r.phone&&(d.phone=!0)}let i=t===e.length;return n`<div class="panel meds ${a.length?"alert":""} ${i?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${S("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${i?"Tudo tomado":`${t} de ${e.length} ${e.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(t/e.length,a.length?"bad":i?"ok":"acc",`${t}/${e.length}`)}
        </div>
        ${a.length?n`<div class="meds-alert" role="alert">${S("triangle-alert")}<span>${a.length===1?n`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${ui(a[0].late_min)}`:n`<b>${a.length} doses atrasadas</b>: ${a.map(r=>r.summary).join(", ")}`}</span></div>`:u}
        ${s.map(r=>n`${s.length>1||r.who?n`<div class="meds-who"><span class="avatar">${(this._ix().people||[]).some(c=>c.pet&&D(c.name)===D(r.who))?S("paw-print"):$a(r.who)}</span><b>${r.who||"Sem pessoa"}</b><small>${r.list.filter(c=>c.taken).length} de ${r.list.length}</small>${r.phone?n`<span class="who-bell" title="Aviso no celular de ${this._phoneOwner(r.who)}">${S("bell-ring")}</span>`:u}</div>`:u}
            ${Z(r.list,c=>c.key,c=>this._renderDose(c))}`)}
        ${this._alertsHint(e)}
      </div>`}_doseVerb(e,t=!1){return Lo(e,this._me?this._me():"",t)}_renderDose(e){let t=e.state,a=[e.dose?`Dose: ${e.dose}`:"",t==="tomado"?`tomou \xE0s ${H(new Date(e.taken.at))}${e.taken.by&&D(e.taken.by)!==D(e.who)?` \xB7 ${e.taken.by}`:""}`:t==="atrasado"?`atrasado ${ui(e.late_min)}`:t==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return n`<div class="dose ${t}">
        <button class="dose-main" @click=${()=>this._openIndexItem(e)}>
          <span class="dose-time">${e.time||"dia"}</span>
          <span class="dose-tx"><b>${e.summary}</b>${a?n`<small>${a}</small>`:u}</span>
        </button>
        ${t==="tomado"?n`<button class="dose-done" @click=${()=>this._undoCheck(e,"remedio")} aria-label="Desmarcar ${e.summary}">${S("check")}</button>`:n`<button class="dose-btn ${t}" aria-label="${this._doseVerb(e.who,!0)}: ${e.summary}" @click=${()=>this._check(e,"remedio")}>${this._doseVerb(e.who)}</button>`}
      </div>`}_alertsHint(e){let t=this._app("alerts",null)||{};if(t.meds===!1)return n`<button class="panel-foot" @click=${()=>this._goAlerts()}>${S("bell-ring")}<span>Avisos no celular desligados</span>${S("chevron-right")}</button>`;if(!e.some(p=>p.alert))return n`<div class="panel-foot plain">${S("bell-ring")}<span>Sem aviso no celular</span></div>`;let a=[...new Set(e.filter(p=>p.alert&&!p.phone&&p.who).map(p=>p.who))],s=t.late==null?30:t.late,i=this._careOn(),r=i&&(s>0||e.some(p=>p.alert&&!p.phone)),c=[...new Set(e.filter(p=>p.alert&&p.phone).map(p=>this._phoneOwner(p.who)||p.who))],d=!i&&(a.length>0||!c.length),l=a.length&&!i?`Sem celular para ${a.join(", ")}: escolha quem cuida`:c.length?`Avisa no celular de ${c.join(", ")}${r?" e de quem cuida":""}`:i?"Avisa no celular de quem cuida":"Escolha quem cuida";return n`<button class="panel-foot ${d?"warn":""}" @click=${()=>this._goAlerts()}>${S("bell-ring")}<span>${l}</span>${S("chevron-right")}</button>`}_renderBillsPanel(){let e=this._billsList();if(!e.length)return u;let t=new Date(this._now),a=e.filter(d=>!d.paid),s=a.filter(d=>d.overdue),i=a.reduce((d,l)=>d+(l.value||0),0),r=this._billsAll?e:e.slice(0,5),c=this._ix().gerencia||{};return n`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="sec-ic ${s.length?"late":"gold"}">${S("receipt")}</span>
          <span class="overline">Contas a pagar</span>
          ${a.length?n`<span class="bills-sum"><b>${Oe(i,!1)}</b><small>${s.length?`${E(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:n`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${Z(r,d=>d.id,d=>{let l=O(d.due),p=U(l,t)===0;return n`<div class="bill ${d.paid?"paid":d.overdue?"late":p?"today":""}">
            <button class="bill-main" @click=${()=>d.source==="gerencia"?this._openSheet("bill",{b:d}):this._openIndexItem(d.item)}>
              <span class="bill-due"><b>${l.getDate()}</b><small>${Tt[l.getMonth()]}</small></span>
              <span class="bill-tx"><b>${d.title}</b><small>${d.value!=null?n`<span class="bill-val">${Oe(d.value)}</span> · `:u}${[mi(d.due,t,d.paid),d.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${d.paid?n`<button class="dose-done" @click=${()=>this._unpay(d)} aria-label="Desfazer pagamento de ${d.title}">${S("check")}</button>`:n`<button class="dose-btn ${d.overdue?"atrasado":p?"agora":""}" ?disabled=${d.busy} @click=${()=>this._pay(d)}>Paguei</button>`}
          </div>`})}
        ${e.length>5?n`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${S(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${e.length-5}`}</button>`:u}
        ${c.ligado?n`<div class="panel-foot plain">${S("wallet")}<span>${c.erro?`GerencIA: ${c.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:u}
      </div>`}_renderHomePanel(){if(this._awayNow&&this._awayNow())return u;let e=this._ix(),t=e.routines||[],a=t.length&&t.every(h=>h.done)&&!this._choresHold?[]:t,s=(e.maint||[]).filter(h=>h.state!=="ok"),i=(e.maint||[]).length;if(!a.length&&!s.length)return i?n`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${S("wrench")}<span>Manutenção da casa em dia · ${E(i,"item","itens")}</span>${S("chevron-right")}</button>`:u;let r=a.filter(h=>h.done).length,c=new Date(this._now),d=rt(a.filter(h=>!h.done),c),l=a.filter(h=>h.done),p=h=>n`<div class="chore ${h.done?"done":""} ${h.done&&h.done.skipped?"skipped":""}">
                  <button class="chk ${h.done?"on":""}" @click=${()=>h.done?this._undoCheck(h,"rotina"):this._markDone(h,"rotina")} aria-label="${h.done?"Desmarcar":"Marcar"} ${h.summary}">${h.done?S(h.done.skipped?"skip-forward":"check"):u}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(h)}><b>${h.summary}</b><small class=${_a(h,c)?"late":""}>${!h.done&&this._pickWho()&&h.points>0?n`<span class="pts-inline">+${h.points}</span> · `:u}${ya(h,c)}</small></button>
                  ${!h.done&&this._pickWho()?this._renderQuickWho(h.summary,h.points||0,f=>this._markDone(h,"rotina",f)):h.points>0&&this._scoreOn()?h.done?this._renderWon(this._pointsWho(h.key,h.done.by),h.points):n`<span class="pts">+${h.points}</span>`:u}
                </div>`;return n`<div class="panel chores" id="casa">
        ${a.length?n`${this._panelHead("spray-can","ok","Rotina da casa",`${r} de ${a.length}`)}
              ${Z(d,h=>h.key,p)}
              ${d.length?u:n`<p class="empty-line all-done">${S("circle-check")}Tudo feito hoje.</p>`}
              ${l.length?n`<button class="add-line done-fold" aria-expanded=${this._choresDoneOpen?"true":"false"} @click=${()=>(this._choresDoneOpen=!this._choresDoneOpen,this.requestUpdate())}>
                      ${S(this._choresDoneOpen?"chevron-down":"chevron-right")}${this._choresDoneOpen?"Esconder conclu\xEDdas":`Mostrar conclu\xEDdas (${l.length})`}
                    </button>
                    ${this._choresDoneOpen?Z(l,h=>h.key,p):u}`:u}`:u}
        ${s.length?n`${this._panelHead("wrench","gold","Manuten\xE7\xE3o da casa","",{cls:a.length?"sub":""})}
              ${Z(s,h=>h.key,h=>this._renderMaintRow(h))}`:u}
        ${i?n`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${S("wrench")}Todas as manutenções (${i})</button>`:u}
      </div>`}_renderMaintRow(e){let t=new Date(this._now),a=e.state==="vencida"?"bad":e.state==="perto"?"warn":"ok";return n`<div class="maint ${e.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(e)}>
          ${this._ring(e.progress,a,null,S("wrench"))}
          <span class="maint-tx"><b>${e.summary}</b><small>${jo(e,t)} · a cada ${te(e.every)}${e.who?` \xB7 ${e.who}`:""}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</small>${je(ae(e.rooms,e.room),ae(e.equips,e.equip))}</span>
        </button>
        ${e.canMove?this._pickWho()?this._renderQuickWho(e.summary,e.points||0,s=>this._maintDone(e,s)):n`<button class="dose-btn ${e.state==="vencida"?"atrasado":e.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(e)}>Feito</button>`:u}
      </div>`}_renderMaintSheet(){let e=this._ix().maint||[];return n`${this._sheetHead("Manuten\xE7\xE3o da casa")}
                <div class="maint-list">${e.length?Z(e,t=>t.key,t=>this._renderMaintRow(t)):n`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${S("plus")}Nova manutenção</button></div>`}_catalogCount(){let e=new Set;for(let t of this._ix().catalog||[])e.add(t.kind==="remedio"?`${t.cal}|${D(t.summary)}|${D(t.who)}|${D(t.dose)}`:`${t.key}`);return e.size}_renderCatalog(){let e=new Date(this._now),t=this._ix().catalog||[],a=this._roomNamesAll(),s=(this._catQ||"").trim(),i=D(s),r=i?t.filter(x=>D(`${x.summary} ${x.who} ${x.dose} ${x.location} ${ae(x.rooms,x.room).join(" ")} ${ae(x.equips,x.equip).join(" ")}`).includes(i)):t,c=x=>x?x.charAt(0).toLowerCase()+x.slice(1):"",d=x=>/FREQ=DAILY/.test(x.rrule||"")&&!/INTERVAL=([2-9]|\d\d)/.test(x.rrule||""),l=x=>x.kind==="manutencao"?`a cada ${te(x.every)}`:x.after?`volta ${te(x.after)} depois de feita`:x.rrule?c(Ae(x.rrule)):"uma vez",p=this._awayNow()?this._away():null,h=x=>{let g=U(O(x.next),e);if(p&&(x.kind==="rotina"||x.kind==="manutencao")&&(x.late||x.next<=p.to))return{text:"pausada nas f\xE9rias"};if(x.late||g<0){let A=x.kind==="rotina"?"atrasada":"venceu";return{text:g===-1?`${A} ontem`:`${A} h\xE1 ${-g} dias`,late:!0}}return d(x)&&g<=1?null:{text:`${x.kind==="conta"?"vence":(x.kind==="manutencao","pr\xF3xima")} ${B(O(x.next),e,{long:!1,cap:!1})}`}},f=x=>x.points>0&&this._scoreOn()?n`<span class="pts-inline">+${x.points}</span>`:"",m=[];for(let x of r.filter(g=>g.kind==="remedio")){let g=`${x.cal}|${D(x.summary)}|${D(x.who)}|${D(x.dose)}`,w=m.find(A=>A.id===g);w?(x.time&&!w.times.includes(x.time)&&w.times.push(x.time),(x.next<w.first.next||x.next===w.first.next&&x.time<w.first.time)&&(w.first=x)):m.push({id:g,first:x,times:x.time?[x.time]:[]})}let v=(x,g,w=null,A=u)=>n`<button class="row cat-row" style=${P(this._colorOfEvent(x),this._dark)} @click=${()=>this._openIndexItem(x)}>
        <span class="tile" aria-hidden="true">${S(Me[x.kind].icon)}</span>
        <span class="grow"><div class="label">${x.summary}</div><div class="hint">${g}${w?n`${g?" \xB7 ":""}<span class=${w.late?"late":""}>${w.text}</span>`:u}</div>${A}</span>
        ${S("chevron-right")}
      </button>`,$=(x,g,w=u)=>{let A=g.filter(Boolean);return v(x,A.length?A.map((M,N)=>n`${N?" \xB7 ":""}${M}`):"",h(x),w)},_=[{kind:"rotina",ic:"spray-can",tone:"ok",title:"Rotina da casa",add:"Nova rotina",none:"Nenhuma rotina cadastrada."},{kind:"remedio",ic:"pill",tone:"accent",title:"Rem\xE9dios",add:"Novo rem\xE9dio",none:"Nenhum rem\xE9dio cadastrado."},{kind:"manutencao",ic:"wrench",tone:"gold",title:"Manuten\xE7\xE3o da casa",add:"Nova manuten\xE7\xE3o",none:"Nenhuma manuten\xE7\xE3o cadastrada."},{kind:"conta",ic:"receipt",tone:"violet",title:"Contas a pagar",add:"Nova conta",none:"Nenhuma conta cadastrada aqui."}],y=this._ix().gerencia||{},b=x=>{if(x.kind==="remedio")return m.map(({first:w,times:A})=>{let M=[...A].sort();return v(w,[w.dose,w.who,M.length?M.join(", "):"",l(w),w.alert===!1?"sem aviso":""].filter(Boolean).join(" \xB7 "))});let g=r.filter(w=>w.kind===x.kind);return x.kind==="rotina"?g.map(w=>$(w,[w.who,l(w),w.time||(ne(w.period)||{}).when,f(w)],je(ae(w.rooms,w.room),ae(w.equips,w.equip),a))):x.kind==="manutencao"?g.map(w=>$(w,[l(w),w.who,f(w)],je(ae(w.rooms,w.room),ae(w.equips,w.equip),a))):g.map(w=>$(w,[w.value!=null?Oe(w.value):"",l(w)]))};return n`
        <label class="search-box cat-search">
          ${S("search")}
          <input type="search" placeholder="Buscar nas rotinas, remédios…" .value=${s} @input=${x=>(this._catQ=x.target.value,this.requestUpdate())} enterkeyhint="search" aria-label="Buscar nos cadastros" />
          ${s?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>(this._catQ="",this.requestUpdate())} aria-label="Limpar">${S("x")}</button>`:u}
        </label>
        ${i&&!r.length?n`<div class="panel"><div class="empty"><div class="em-icon">${S("search")}</div><h3>Nada encontrado</h3><p>Nenhum cadastro com “${q(s,30)}”.</p></div></div>`:u}
        ${_.map(x=>{let g=b(x);return i&&!g.length?u:n`<div class="panel cat-sec" id="cat-${x.kind}">
            ${this._panelHead(x.ic,x.tone,x.title,g.length?String(g.length):"")}
            ${g.length?g:n`<p class="empty-line">${x.none}</p>`}
            ${x.kind==="conta"&&y.ligado?n`<p class="cat-note">${S("info")}As contas do GerencIA ficam no GerencIA.</p>`:u}
            ${i?u:n`<button class="add-line" @click=${()=>this._openKindForm({kind:x.kind})}>${S("plus")}${x.add}</button>`}
          </div>`})}
      `}_renderKindFacts(e){let t=e.kind,a=new Date(this._now),s=this._checkOf(e),i=null;if(!s&&t.kind==="rotina"&&t.after&&!e.rrule){let l=(this._ix().routines||[]).find(p=>p.cal===e.cal&&p.uid===e.uid&&p.done);l&&(s=l.done,i=l.key)}let r=[];if(t.kind==="remedio"){t.dose&&r.push(["pill",`Dose: ${t.dose}`]),t.who&&r.push(["user-round",`Quem toma: ${t.who}`]);let l=this._phoneOwner(t.who),p=(this._app("alerts",null)||{}).meds!==!1;r.push(["bell-ring",t.alert?p?l?`Aviso no celular de ${l}`:this._careOn()?"Aviso no celular de quem cuida":"Sem celular: escolha quem cuida em Mais \u203A Avisos":"Avisos no celular desligados":"Sem aviso no celular"])}else if(t.kind==="conta")t.value!=null&&r.push(["receipt",Oe(t.value)]);else if(t.kind==="rotina")t.who&&r.push(["user-round",`Quem faz: ${t.who}`]),ae(t.rooms,t.room).length&&r.push(["door-open",ot(ae(t.rooms,t.room),this._roomNamesAll()).join(", ")]),t.points>0&&this._scoreOn()&&r.push(["award",`${t.points} pontos para quem fizer`]),ne(t.period)&&r.push([ne(t.period).icon,W(ne(t.period).when)]),t.after&&!e.rrule&&(r.push(["repeat",`Volta ${te(t.after)} depois de feita (na agenda, s\xF3 a pr\xF3xima vez)`]),t.history&&t.history.length&&r.push(["check",`Feito em ${t.history.slice(0,4).map(l=>X(O(l),a)).join(", ")}`]));else if(t.kind==="manutencao"){t.points>0&&this._scoreOn()&&r.push(["award",`${t.points} pontos para quem fizer`]),r.push(["repeat",`A cada ${te(t.every)}, contando da \xFAltima vez`]),t.who&&r.push(["user-round",`Quem faz: ${t.who}`]);let l=ae(t.rooms,t.room);l.length&&r.push(["door-open",ot(l,this._roomNamesAll()).join(", ")]);for(let p of ae(t.equips,t.equip))r.push(["package",p]);r.push(["bell-ring",`Aparece na tela inicial ${E(t.warn,"dia","dias")} antes`]),t.history&&t.history.length&&r.push(["check",`Feito em ${t.history.slice(0,4).map(p=>X(O(p),a)).join(", ")}`])}let c=Me[t.kind],d=u;if(t.kind==="manutencao"){let l=(this._ix().maint||[]).find(p=>p.cal===e.cal&&p.uid===e.uid);l&&l.canMove&&(d=this._pickWho()?this._renderWhoButtons(this._scoreOn()&&l.points||0,p=>this._maintDone(l,p)):n`<button class="btn primary kind-act" @click=${()=>this._maintDone(l)}>${S("check")}Feito hoje</button>`)}else if(e.start<C(F(a),2)||t.kind==="rotina"&&t.after&&!e.rrule){let l={key:i||e.key,summary:e.summary},p=t.kind==="rotina"?n`<button class="btn outline kind-skip" @click=${()=>this._closeSheet().then(()=>this._skip(l))}>${S("skip-forward")}Pular</button>`:u;d=s&&s.skipped?n`<div class="kind-state skipped">${S("skip-forward")}<span>Pulada${s.at?` ${U(new Date(s.at),a)===0?"hoje":X(new Date(s.at),a)} \xE0s ${H(new Date(s.at))}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(l,t.kind)}>Desfazer</button></div>`:s?n`<div class="kind-state">${S("circle-check")}<span>${W(c.done)}${s.at?` ${U(new Date(s.at),a)===0?"hoje":X(new Date(s.at),a)} \xE0s ${H(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(l,t.kind)}>Desfazer</button></div>`:(t.kind==="rotina"||t.kind==="manutencao")&&this._pickWho()?n`${this._renderWhoButtons(t.points||0,h=>this._closeSheet().then(()=>this._markDone({...l,points:t.points||0},t.kind,h)))}${p}`:t.kind==="rotina"||t.kind==="manutencao"?n`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...l,points:t.points||0},t.kind))}>${S("check")}${c.verb}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>${p}`:n`<button class="btn primary kind-act" @click=${()=>this._check(l,t.kind).then(()=>this._closeSheet())}>${S("check")}${t.kind==="remedio"?this._doseVerb(t.who,!0):c.verb}</button>`}return n`${r.map(([l,p])=>n`<div class="fact">${S(l)}<span>${p}</span></div>`)}
        ${t.notes?n`<div class="fact notes">${S("file-text")}<span>${t.notes}</span></div>`:u}
        ${d}`}_renderBillSheet(){let e=this._form.b,t=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===e.id)||e.c,a=new Date(this._now),s=O(t.vencimento);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.descricao}</h3><p class="ev-cal">GerencIA · <b>${mi(t.vencimento,a,t.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${S("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${S("receipt")}<span><b>${Oe(t.valor)}</b>${t.tipo==="fatura"?` \xB7 ${E(t.itens||0,"compra","compras")} na fatura`:t.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${S("calendar")}<span>${U(s,a)<0?"Venceu":"Vence"} ${B(s,a,{cap:!1})}</span></div>
          ${t.categoria?n`<div class="fact">${S("layers")}<span>${t.categoria}</span></div>`:u}
          ${t.conta?n`<div class="fact">${S("wallet")}<span>${t.conta}</span></div>`:u}
        </div>
        <p class="sheet-note">${S("info")} ${t.pago?"J\xE1 est\xE1 paga no GerencIA.":t.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${t.pago?n`<button class="btn outline" @click=${()=>this._unpay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("undo-2")}Desfazer pagamento</button>`:n`<button class="btn primary" @click=${()=>this._pay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${S("check")}Paguei</button>`}
        </div>`}_kindCal(e){let t=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[e];return(a&&t.find(i=>a.test(i.name)&&i.canUpdate)||t.find(i=>i.id===this._defaultCal())||t[0]||{}).id||null}_openKindForm({kind:e="remedio",ev:t=null,copy:a=!1,date:s=null}={}){let i=this._writable(),r=this._ix().gerencia||{};if(!i.length&&!(e==="conta"&&r.ligado)&&!(t&&!a)){this._openSheet("nocal",{});return}let c=F(new Date),d=s?F(s):c,l={mode:"add",kind:e,cal:this._kindCal(e),title:"",date:z(d),times:e==="rotina"?["19:00"]:["08:00"],allDay:e!=="remedio",...fi(e==="conta"?"":"FREQ=DAILY",d),dose:"",who:"",alert:!0,value:"",repeat:"mensal",dest:r.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},afterN:2,period:"",last:z(c),warn:7,history:[],points:this._scoreOn()&&(e==="rotina"||e==="manutencao")?e==="rotina"?10:30:0,notes:"",location:""};if(t){let p=t.kind,h=fi(t.rrule,t.start);if(l={...l,...h,mode:a?"add":"edit",kind:p.kind,cal:a?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._kindCal(p.kind):t.cal,origCal:t.cal,uid:t.uid,rid:a?null:t.rid,title:t.summary,date:z(t.start),times:t.allDay?["09:00"]:[H(t.start)],allDay:t.allDay,dose:p.dose||"",who:p.who||"",alert:p.alert!==!1,value:p.value!=null?String(p.value.toFixed(2)).replace(".",","):"",repeat:h.freq==="mensal"?"mensal":h.freq==="anual"?"anual":"nao",dest:"cal",every:p.every||l.every,warn:p.warn??7,history:p.history||[],last:p.history&&p.history[0]||l.last,points:p.points||0,period:t.allDay&&p.period||"",notes:p.notes||"",location:t.location||"",roomNames:ae(p.rooms,p.room),equipNames:ae(p.equips,p.equip),equips:[]},(p.kind==="manutencao"||p.kind==="rotina")&&(l.roomNames.length||l.equipNames.length)){let{rooms:f,items:m}=this._invLists(),v=$=>{let _=m.filter(y=>D(y.nome)===D($));return _.find(y=>D(y.roomName)===D(l.roomNames[0]||""))||_.find(y=>l.roomNames.some(b=>D(y.roomName)===D(b)))||_[0]};l.equips=[...new Set(l.equipNames.map($=>(v($)||{}).id).filter(Boolean))],l.rooms=l.roomNames.map($=>(f.find(_=>D(_.nome)===D($))||{}).id).filter(Boolean),l.room=l.rooms[0]||null}if(p.kind==="rotina"&&p.after&&!t.rrule&&Object.assign(l,{freq:"depois",afterN:Math.max(1,Math.round(p.after.n*it[p.after.unit][0]))}),l.wasAfter=l.freq==="depois",l.mode==="edit")try{l.before=this._kindEvents(l)[0]}catch{l.before=null}}this._openSheet("form",l),l.mode==="add"&&this.updateComplete.then(()=>{let p=this.renderRoot.querySelector(".sheet .ev-title-input");p&&p.focus()})}_kindRrule(e,t,a){let s;if(e.freq==="diario")s="FREQ=DAILY";else if(e.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(e.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(e.interval)||3))}`;else if(e.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...e.byday].sort().map(i=>gi[i]).join(",")}`;else if(e.freq==="mensal")s="FREQ=MONTHLY";else return null;if(e.dur!=="sempre"){let i=e.dur==="ate"?O(e.until):C(a,Math.max(1,Number(e.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=t?`;UNTIL=${z(i).replace(/-/g,"")}`:`;UNTIL=${Ho(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(e,{keepRrule:t=!0}={}){let a=(e.title||"").trim();if(!a)throw new Error(e.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:e.kind,notes:e.notes};if(e.kind==="remedio")Object.assign(s,{dose:e.dose,who:e.who,alert:e.alert});else if(e.kind==="rotina"){Object.assign(s,{who:e.who,points:Math.max(0,Math.round(Number(e.points)||0)),period:e.allDay&&e.period||""}),e.freq==="depois"&&Object.assign(s,{after:{n:Math.max(1,Math.min(365,Math.round(Number(e.afterN)||2))),unit:"dias"},history:e.mode==="edit"?e.history||[]:[]});let{rooms:v}=this._invLists(),$=(e.rooms||(e.room?[e.room]:[])).map(_=>v.find(y=>y.id===_)).filter(Boolean);s.rooms=$.length?$.map(_=>_.nome):v.length?[]:e.roomNames||[],s.equips=e.equipNames||[]}else if(e.kind==="conta"){if(s.value=Ft(e.value),!s.value)throw new Error("Coloque o valor")}else{if(!(e.every&&e.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:e.who,every:e.every,warn:e.warn,history:e.mode==="edit"?e.history:e.last?[e.last]:[],points:Math.max(0,Math.round(Number(e.points)||0))});let{rooms:v,items:$}=this._invLists(),_=(e.equips||[]).map(b=>$.find(x=>x.id===b)).filter(Boolean),y=(e.rooms||(e.room?[e.room]:[])).map(b=>v.find(x=>x.id===b)).filter(Boolean);s.equips=$.length?_.map(b=>b.nome):e.equipNames||[],s.rooms=_.length?[...new Set(_.map(b=>b.roomName).filter(Boolean))]:y.length?y.map(b=>b.nome):v.length?[]:e.roomNames||[]}let i={summary:a,description:oi(s)};if((e.location||"").trim()&&(i.location=e.location.trim()),e.kind==="manutencao"){let v=e.mode==="edit"?O(e.date):xa(O(e.last||z(new Date)),e.every);return[{...i,start:z(v),end:z(C(v,1))}]}if(e.kind==="conta"){let v=O(e.date),$={...i,start:z(v),end:z(C(v,1))};return t&&e.repeat!=="nao"&&($.rrule=e.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[$]}let r=O(e.date);if(e.freq==="semana"){if(!e.byday.length)throw new Error("Escolha os dias da semana");if(e.mode==="add")for(let v=0;v<7&&!e.byday.includes(r.getDay());v++)r=C(r,1)}let c=e.kind==="rotina"&&e.allDay,d=t?this._kindRrule(e,c,r):null,l=d?{rrule:d}:{};if(c)return[{...i,start:z(r),end:z(C(r,1)),...l}];let p=[...new Set((e.times||[]).filter(v=>/^\d{2}:\d{2}$/.test(v)))].sort();if(!p.length)throw new Error("Escolha o hor\xE1rio");let h=e.kind==="remedio"?15:30,f=v=>{if(e.freq==="alternado")return C(v,2);if(e.freq==="intervalo")return C(v,Math.max(2,Number(e.interval)||3));if(e.freq==="mensal")return new Date(v.getFullYear(),v.getMonth()+1,v.getDate());if(e.freq==="semana"){let $=C(v,1);for(let _=0;_<7&&!e.byday.includes($.getDay());_++)$=C($,1);return $}return C(v,1)},m=new Date;return p.map(v=>{let[$,_]=v.split(":").map(Number),y=r;e.mode==="add"&&e.freq!=="uma"&&e.freq!=="depois"&&new Date(y.getFullYear(),y.getMonth(),y.getDate(),$,_)<m&&(y=f(y));let b=new Date(y.getFullYear(),y.getMonth(),y.getDate(),$,_);return{...i,start:re(b),end:re(new Date(b.getTime()+h*6e4)),...l}})}async _saveKindForm(){let e=this._form;if(e.kind==="tarefa")return this._saveTodoForm();if(e.kind==="conta"&&e.dest==="gerencia"&&e.mode==="add"){let c=Ft(e.value);if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!c)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:e.title.trim(),valor:c,vencimento:e.date,repete:e.repeat,categoria:e.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(d){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${d.message}`)}return}let t;try{t=this._kindEvents(e)}catch(c){this._showToast(c.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=t[0];if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:s});return}this._setForm({saving:!0});let i=Me[e.kind].label,r=["rotina","manutencao","conta"].includes(e.kind)?"a":"o";try{if(e.mode==="add"){for(let c of t)await this.api.createEvent(e.cal,c);this._done(t.length>1?`${i} criad${r}: ${t.length} hor\xE1rios em ${q(a.name,20)}`:`${i} criad${r} em ${q(a.name,24)}`,e.cal,s.start)}else e.cal!==e.origCal?(await this.api.createEvent(e.cal,s),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`${i} movid${r} para ${q(a.name,24)}`,e.cal,s.start)):(await this._saveInPlace(e,s),this._done(`${i} salv${r}${e.rid&&!a.canUpdate?" \xB7 a s\xE9rie recome\xE7a neste dia":""}`,e.cal,s.start))}catch(c){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${c.message}`)}}_renderModelChips(e){let t=this._form;return n`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(Me).filter(([a])=>a!=="evento"&&(a!=="tarefa"||this._todoLists().length)).map(([a,s])=>n`<button class="model ${e===a?"on":""}" role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>{if(e===a)return;let i=t.date?O(t.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${S(s.icon)}<span>${s.label}</span></button>`)}
      </div>`}_dateField(e,t,a,s,{quick:i=!0}={}){let r=new Date,c=F(r),d=i?[["Hoje",z(c)],["Amanh\xE3",z(C(c,1))]]:[],l=d.some(([,p])=>p===t);return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row c3">
          ${d.map(([p,h])=>n`<button class="pick ${t===h?"on":""}" @click=${()=>a(h)}>${p}</button>`)}
          <button class="pick ${l?"":"on"}" @click=${()=>{let p=this.renderRoot.querySelector(`#${s}`);try{p.showPicker()}catch{p.focus(),p.click()}}}>${S("calendar")}<span>${!l&&t?W(B(O(t),r,{long:!1})):"Outra data"}</span>
            <input id=${s} class="hidden-input" type="date" tabindex="-1" .value=${t} @change=${p=>p.target.value&&a(p.target.value)} />
          </button>
        </div>
      </div>`}_whoField(e,{pets:t=!1}={}){let a=this._form,s=this._ix().people||[],i=c=>s.some(d=>d.pet&&D(d.name)===D(c)),r=[...new Set([...s.filter(c=>t||!c.pet).map(c=>c.name),...a.who?[a.who]:[]])];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${r.map(c=>n`<button class="pick person ${a.who===c?"on":""}" @click=${()=>this._setForm({who:a.who===c?"":c})}><span class="avatar sm">${i(c)?S("paw-print"):$a(c)}</span><span>${c}</span></button>`)}
        </div>
        <span class="field-hint">${S("info")}<span>${t?"Outra pessoa ou um pet":"Outra pessoa"}: adicione em Mais › Avisos.</span></span>
      </div>`}_freqField(e){let t=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...t.kind==="rotina"?[["mensal","Todo m\xEAs"],["depois","Depois de feita"]]:[],["uma","S\xF3 uma vez"]],s=t.mode!=="edit"||t.kind!=="rotina"?a:t.wasAfter?a.filter(([i])=>i==="depois"):t.rid||t.freq!=="uma"?a.filter(([i])=>i!=="depois"):a;return n`<div class="field">
        <span class="flabel">${e}</span>
        ${(()=>{let i=s.length,r=i<=4?i:i<=6?3:4,c=i%r?r-i%r+1:1;return n`<div class="seg seg-grid" role="radiogroup" aria-label=${e} style="grid-template-columns:repeat(${r},1fr)">${s.map(([d,l],p)=>n`<button class=${t.freq===d?"on":""} role="radio" aria-checked=${t.freq===d?"true":"false"} style=${p===i-1&&c>1?`grid-column:span ${c}`:""} @click=${()=>this._setForm({freq:d})}>${l}</button>`)}</div>`})()}
        ${t.freq==="semana"?n`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(i=>{let r=t.byday.includes(i);return n`<button class="wdp ${r?"on":""}" aria-pressed=${r?"true":"false"} aria-label=${_e[i]} @click=${()=>this._setForm({byday:r?t.byday.filter(c=>c!==i):[...t.byday,i]})}>${Ro[i]}</button>`})}
            </div>`:u}
        ${t.freq==="intervalo"?n`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(t.interval)} @input=${i=>this._setForm({interval:i.target.value})} /><span class="tl">dias</span></div>`:u}
        ${t.freq==="depois"?n`<div class="time-row"><span class="tl">Volta</span><input type="number" class="num-input" min="1" max="365" aria-label="Dias depois de feita" .value=${String(t.afterN)} @input=${i=>this._setForm({afterN:i.target.value})} /><span class="tl">${Number(t.afterN)===1?"dia":"dias"} depois de feita</span></div>
              <span class="field-hint">${S("rotate-ccw")}<span>Feita hoje, volta ${Number(t.afterN)===1?"amanh\xE3":`daqui a ${Math.max(1,Number(t.afterN)||2)} dias`}.</span></span>`:u}
      </div>`}_pointsField(){let e=this._form,t=Number(e.points)||0;return n`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row c4">
          ${[0,5,10,20,30,50].map(a=>n`<button class="pick ${t===a?"on":""}" @click=${()=>this._setForm({points:a})}>${a?`+${a}`:"Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(t)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${t>0&&!this._scoreOn()?n`<span class="field-hint">${S("trophy")}<span>O placar está desligado (aba <b>Recompensas</b>).</span></span>`:u}
      </div>`}_durField(e){let t=this._form;if(t.freq==="uma")return u;let a=t.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>n`<button class="pick ${t.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${t.dur==="dias"?n`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(t.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:u}
        ${t.dur==="ate"?n`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${t.until} min=${t.date} @change=${s=>s.target.value&&this._setForm({until:s.target.value})} /></div>`:u}
      </div>`}_calField(){let e=this._form,t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(s=>s.id===e.cal):t.filter(s=>s.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t;return a.length<=1?u:n`<div class="field">
        <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>n`<button class="pick list ${e.cal===s.id?"on":""}" style=${P(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${q(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let e=this._form;if(e.kind==="tarefa")return this._renderTodoForm();let t=e.kind,a=Me[t],s=new Date,i=this._ix().gerencia||{},r=t==="conta"&&e.dest==="gerencia"&&e.mode==="add",c={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[t],d=n`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${e.notes} placeholder=${t==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${p=>this._setForm({notes:p.target.value})}></textarea></label>`,l;if(t==="remedio"){let p=this._phoneOwner(e.who),h=e.mode==="add",f=this._app("alerts",null)||{},m=(f.late==null?30:f.late)>0;l=n`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${e.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${v=>this._setForm({dose:v.target.value})} /></label>
          ${this._whoField("Quem toma",{pets:!0})}
          <div class="field">
            <span class="flabel">${h?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${h?n`<div class="chip-row" style="margin-bottom:10px">${Io.map(([v,$])=>n`<button class="pick ${e.times.join()===$.join()?"on":""}" @click=${()=>this._setForm({times:[...$]})}>${v}</button>`)}</div>`:u}
            <div class="times">
              ${e.times.map((v,$)=>n`<span class="time-pill"><input type="time" .value=${v} aria-label="Horário ${$+1}" @change=${_=>_.target.value&&this._setForm({times:e.times.map((y,b)=>b===$?_.target.value:y)})} />${e.times.length>1?n`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:e.times.filter((_,y)=>y!==$)})}>${S("x")}</button>`:u}</span>`)}
              ${h&&e.times.length<8?n`<button class="pick ghost" @click=${()=>this._setForm({times:[...e.times,"12:00"]})}>${S("plus")}<span>Horário</span></button>`:u}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,v=>this._setForm({date:v}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          ${f.meds===!1?u:n`<div class="row switch-row">
                <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${e.alert?e.who?p||this._careOn()?`Na hora${m?" e de novo se atrasar":""}, no celular de ${p||"quem cuida"}.`:n`Sem celular para ${e.who}: escolha quem cuida em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${e.alert} @change=${v=>this._setForm({alert:v.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
              </div>`}
          ${d}`}else if(t==="conta")l=n`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${e.value} placeholder="0,00" @input=${p=>this._setForm({value:p.target.value})} /></span></label>
          ${this._dateField(e.repeat==="nao"?"Vence":"Primeiro vencimento",e.date,p=>this._setForm({date:p}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row c3">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([p,h])=>n`<button class="pick ${e.repeat===p?"on":""}" @click=${()=>this._setForm({repeat:p})}>${p!=="nao"?S("repeat"):u}<span>${h}</span></button>`)}</div></div>
          ${i.ligado&&e.mode==="add"?n`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${e.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${S("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${e.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${S("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${S("info")}<span>${e.dest==="gerencia"?"Entra no GerencIA; o Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio."}</span></span>
              </div>`:u}
          ${r&&(i.categorias||[]).length?n`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${p=>this._setForm({categoria:p.target.value})}><option value="">Sem categoria</option>${i.categorias.map(p=>n`<option value=${p.id} ?selected=${e.categoria===p.id}>${p.nome}</option>`)}</select></label>`:u}
          ${r?u:n`${this._calField()}${d}`}`;else if(t==="rotina")l=n`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{equips:!1,multiRoom:!0})}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${e.allDay&&!e.period?"on":""}" @click=${()=>this._setForm({allDay:!0,period:""})}>Qualquer hora</button>
              <button class="pick ${e.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1,period:""})}>${S("clock")}<span>Num horário</span></button>
              ${e.allDay?u:n`<input type="time" class="inline-time" .value=${e.times[0]||"19:00"} @change=${p=>p.target.value&&this._setForm({times:[p.target.value]})} aria-label="Horário" />`}
            </div>
            <div class="chip-row c3 per-row" role="group" aria-label="Período do dia">
              ${He.map(p=>n`<button class="pick ${e.allDay&&e.period===p.id?"on":""}" @click=${()=>this._setForm({allDay:!0,period:p.id})}>${S(p.icon)}<span>${p.label}</span></button>`)}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(e.freq==="depois"?e.mode==="add"?"Primeira vez":"Pr\xF3xima vez":e.mode==="add"?"Come\xE7a":"Data",e.date,p=>this._setForm({date:p}),"kf-date")}
          ${e.freq==="depois"?u:this._durField("At\xE9 quando")}
          ${this._calField()}
          ${d}`;else{let p=e.mode==="edit"?O(e.date):xa(O(e.last||z(s)),e.every);l=n`
          ${this._whoField("Quem faz")}
          ${this._renderRoomEquipFields(e,{multiRoom:!0})}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row c4" style="margin-bottom:10px">${Po.map(h=>n`<button class="pick ${e.every.n===h.n&&e.every.unit===h.unit?"on":""}" @click=${()=>this._setForm({every:{...h}})}>${te(h)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(e.every.n)} @input=${h=>this._setForm({every:{...e.every,n:Math.max(1,Number(h.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(it).map(h=>n`<button class=${e.every.unit===h?"on":""} @click=${()=>this._setForm({every:{...e.every,unit:h}})}>${h}</button>`)}</div>
            </div>
            <span class="field-hint">${S("repeat")}<span>Feito hoje, volta em ${te(e.every)}.</span></span>
          </div>
          ${e.mode==="add"?this._dateField("Feito pela \xFAltima vez",e.last,h=>this._setForm({last:h}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",e.date,h=>this._setForm({date:h}),"kf-date",{quick:!1})}
          <p class="next-line">${S("calendar-check")}<span>Próxima: <b>${W(B(p,s,{long:!1}))}</b>${U(p,s)>1?` \xB7 em ${E(U(p,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1,3,7,15,30].map(h=>n`<button class=${e.warn===h?"on":""} role="radio" aria-checked=${e.warn===h?"true":"false"} @click=${()=>this._setForm({warn:h})}>${h===1?"1 dia":`${h} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${d}`}return n`
        ${this._sheetHead(e.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${e.mode==="add"?this._renderModelChips(t):u}
        <label class="field">
          <span class="flabel">${c[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder=${c[1]} @input=${p=>this._setForm({title:p.target.value})}></textarea>
        </label>
        ${l}
        ${e.rid?n`<div class="field-hint">${S("repeat")}<span>Este item se repete.</span></div>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveKindForm()}>${e.saving?"Salvando\u2026":e.mode==="add"?r?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let e=this._ix(),t=this._app("alerts",null)||{},a=t.meds!==!1,s=t.late==null?30:t.late,i=t.caregivers||[],r=e.people||[],c=r.filter(y=>y.phone),d=this._app("people",null)||{},l=y=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...y}}),p=(y,b)=>{let x={...d[y]||{}};return b?x.care=b:delete x.care,this._saveAppPrefs({people:{...d,[y]:x}})},h=(y,b)=>{let x={...d[y]||{}};b?x.pet=!0:delete x.pet;let g=this._score&&this._score();return b&&g&&(g.participants||[]).some(w=>D(w)===D(y))&&this._scorePrefs({participants:g.participants.filter(w=>D(w)!==D(y))}),this._saveAppPrefs({people:{...d,[y]:x}})},f=y=>{let b={...d};delete b[y],this._saveAppPrefs({people:Object.keys(b).length?b:null})},m=this._newPerson,v=()=>{let y=(m.name||"").trim().replace(/\s+/g," ").slice(0,40);if(y){if(r.some(b=>D(b.name)===D(y))){this._showToast(`${y} j\xE1 est\xE1 na lista`);return}this._newPerson=null,this._saveAppPrefs({people:{...d,[y]:m.pet?{pet:!0}:{}}})}},$=y=>{let b=c.filter(g=>D(g.name)!==D(y.name)),x=y.care&&!b.some(g=>D(g.name)===D(y.care));return n`<select class="select sm" aria-label="Quem recebe os avisos de ${y.name}" @change=${g=>p(y.name,g.target.value)}>
          <option value="" ?selected=${!y.care}>No celular de quem cuida</option>
          ${b.map(g=>n`<option value=${g.name} ?selected=${!!y.care&&D(y.care)===D(g.name)}>No celular de ${g.name}</option>`)}
          ${x?n`<option value=${y.care} selected>${y.care} (sem celular)</option>`:u}
        </select>`},_=y=>y.person?a&&!y.phone?"Pessoa do Home Assistant, sem celular":"Pessoa do Home Assistant":y.pet?"Pet":"S\xF3 no CronologIA";return n`<div class="panel" id="avisos">
        ${this._secHead("bell-ring","Avisos de rem\xE9dio no celular",n`Na hora da dose, com <b>Tomei</b> e <b>Adiar 15 min</b>.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Dá para desligar em cada remédio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${y=>l({meds:y.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        <div class="field people-field">
          <span class="flabel">Pessoas e pets</span>
          ${r.length?r.map(y=>{let b=!y.person&&!!d[y.name];return n`<div class="person-row ${y.pet?"is-pet":""}">
                  <span class="avatar">${y.pet?S("paw-print"):$a(y.name)}</span>
                  <span class="grow"><b>${y.name}</b><small>${_(y)}</small></span>
                  ${a&&!y.phone&&c.length?$(y):u}
                  <span class="p-acts">
                    ${y.person?u:n`<button class="icon-btn pet-btn ${y.pet?"on":""}" aria-pressed=${y.pet?"true":"false"} aria-label="${y.name} é um pet" title=${y.pet?"Pet":"Marcar como pet"} @click=${()=>h(y.name,!y.pet)}>${S("paw-print")}</button>`}
                    ${a&&y.reach?n`<button class="icon-btn" aria-label="Testar aviso para ${y.name}" @click=${()=>this._testAlert(y.name)}>${S("bell-ring")}</button>`:u}
                    ${b?n`<button class="icon-btn mini" aria-label="Tirar ${y.name}" @click=${()=>f(y.name)}>${S("x")}</button>`:u}
                  </span>
                </div>`}):n`<p class="hint">As pessoas do Home Assistant aparecem aqui.</p>`}
          ${m?n`<div class="person-add">
                <input type="text" class="input" .value=${m.name||""} placeholder="Nome (pessoa ou pet)" aria-label="Nome da pessoa ou pet" maxlength="40"
                  @input=${y=>(this._newPerson={...this._newPerson,name:y.target.value},this.requestUpdate())}
                  @keydown=${y=>y.key==="Enter"&&v()} />
                <div class="seg" role="group" aria-label="Pessoa ou pet">
                  <button class=${m.pet?"":"on"} @click=${()=>(this._newPerson={...this._newPerson,pet:!1},this.requestUpdate())}>${S("user-round")}Pessoa</button>
                  <button class=${m.pet?"on":""} @click=${()=>(this._newPerson={...this._newPerson,pet:!0},this.requestUpdate())}>${S("paw-print")}Pet</button>
                </div>
                <div class="person-add-acts">
                  <button class="btn outline sm" @click=${()=>(this._newPerson=null,this.requestUpdate())}>Cancelar</button>
                  <button class="btn primary sm" ?disabled=${!(m.name||"").trim()} @click=${v}>Adicionar</button>
                </div>
              </div>`:n`<button class="add-line" @click=${()=>{this._newPerson={name:"",pet:!1},this.requestUpdate(),this.updateComplete.then(()=>{let y=this.renderRoot.querySelector(".person-add input");y&&y.focus()})}}>${S("plus")}Adicionar pessoa ou pet</button>`}
          ${a?n`<span class="field-hint">${S("info")}<span>${c.length?"Vai para o celular ligado a cada pessoa no Home Assistant. Sem celular (pet ou crian\xE7a): para quem voc\xEA escolher.":"Ningu\xE9m tem celular ligado no Home Assistant (Configura\xE7\xF5es \u203A Pessoas)."}</span></span>`:u}
        </div>
        ${a?n`<div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([y,b])=>n`<button class="pick ${s===y?"on":""}" @click=${()=>l({late:y})}>${b}</button>`)}</div>
              </div>
              ${c.length?n`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row care-pick">${c.map(y=>{let b=i.some(x=>D(x)===D(y.name));return n`<button class="pick ${b?"on":""}" aria-pressed=${b?"true":"false"} @click=${()=>l({caregivers:b?i.filter(x=>D(x)!==D(y.name)):[...i,y.name]})}>${S("user-round")}<span>${y.name}</span></button>`})}</div>
                    <span class="field-hint">${S("info")}<span>${s>0?"Recebe os atrasos de todos.":"Recebe os avisos de quem est\xE1 sem celular."}</span></span>
                  </div>`:u}`:u}
      </div>`}_renderGerenciaPanel(){let e=this._app("gerencia_on",!1)===!0,t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${r=>this._saveAppPrefs({gerencia_on:r.target.checked?!0:null})} aria-label="Usar a integração com o GerencIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="gerencia">
          ${this._secHead("wallet","Contas do GerencIA")}
          ${t}
        </div>`;let a=this._ix().gerencia||{},s=(a.contas||[]).filter(r=>!r.pago).length,i=a.ligado?a.erro?"warn":"ok":"off";return n`<div class="panel" id="gerencia">
        ${this._secHead("wallet","Contas do GerencIA")}
        ${t}
        <div class="ai-state ${i}"><span class="dot"></span><div>
          <b>${a.ligado?a.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${a.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${a.ligado?a.erro||`${E(s,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${a.ligado?n`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do vencimento.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${r=>this._saveAppPrefs({gerencia_hidden:r.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:u}
      </div>`}};function xi({lit:o,icon:e,messages:t=[],draft:a="",busy:s=!1,error:i="",voice:r=null,examples:c=[],onDraft:d,onSend:l,onMic:p,onAction:h,onAll:f,onClear:m,onClose:v}){let{html:$,nothing:_}=o,y=()=>{let w=(a||"").trim();w&&!s&&l(w)},b=(w,A,M,N)=>$`<div class="chat-act ${M.state||"todo"}">
    <span class="chat-act-ic">${e(M.state==="done"?"check":M.state==="failed"?"circle-alert":M.icon||"sparkles")}</span>
    <span class="chat-act-tx">${M.label}${M.note?$`<small>${M.note}</small>`:_}</span>
    ${M.state==="done"?$`<span class="chat-act-ok">Feito</span>`:M.state==="doing"?$`<span class="chat-act-ok">…</span>`:$`<button type="button" class="btn primary sm" @click=${()=>h(A,N)}>${M.state==="failed"?"Tentar de novo":"Fazer"}</button>`}
  </div>`,x=(w,A)=>{let M=(w.actions||[]).filter(N=>N.state!=="done"&&N.state!=="doing").length;return $`<div class="chat-msg ${w.role==="user"?"me":"ia"}">
      ${w.text?$`<div class="chat-bubble">${w.text}</div>`:_}
      ${(w.actions||[]).length?$`<div class="chat-acts">
            ${w.actions.map((N,R)=>b(w,A,N,R))}
            ${M>1?$`<button type="button" class="btn outline sm chat-all" @click=${()=>f(A)}>Fazer todas (${M})</button>`:_}
          </div>`:_}
    </div>`},g=r&&r.on;return $`<div class="chat">
    <div class="chat-head">
      <span class="chat-title">${e("message-circle")}Conversa</span>
      ${t.length?$`<button type="button" class="text-btn" @click=${()=>m()}>Nova</button>`:_}
      <button type="button" class="icon-btn" aria-label="Fechar" @click=${()=>v()}>${e("x")}</button>
    </div>
    <div class="chat-log">
      ${t.length?t.map(x):$`<div class="chat-empty">
            <p>Pergunte sobre esta tela ou sobre qualquer assunto. Se pedir para mudar algo, eu mostro antes de fazer.</p>
            ${c.length?$`<div class="chat-ex">${c.map(w=>$`<button type="button" class="pick" @click=${()=>l(w)}>${w}</button>`)}</div>`:_}
          </div>`}
      ${s?$`<div class="chat-msg ia"><div class="chat-bubble typing"><i></i><i></i><i></i></div></div>`:_}
      ${i?$`<div class="chat-error">${e("circle-alert")}<span>${i}</span></div>`:_}
    </div>
    <form class="chat-input" @submit=${w=>(w.preventDefault(),y())}>
      <textarea rows="1" .value=${a} placeholder=${g?"Ouvindo\u2026":"Escreva aqui\u2026"} aria-label="Mensagem para a IA" ?disabled=${g}
        @input=${w=>d(w.target.value)}
        @keydown=${w=>{w.key==="Enter"&&!w.shiftKey&&!w.isComposing&&(w.preventDefault(),y())}}></textarea>
      ${r&&r.ready?$`<button type="button" class="icon-btn chat-mic ${g?"on":""}" aria-label=${g?"Pronto: enviar o que falei":"Falar"} ?disabled=${s||r.starting} @click=${()=>p()}>${e(g?"check":"mic")}</button>`:_}
      <button type="submit" class="icon-btn chat-send" aria-label="Enviar" ?disabled=${s||g||!(a||"").trim()}>${e("send")}</button>
    </form>
  </div>`}var bi=`
  .chat { display: flex; flex-direction: column; height: min(78vh, 680px); margin: -4px -4px 0; }
  .chat-head { display: flex; align-items: center; gap: 10px; padding: 0 0 10px; }
  .chat-title { display: inline-flex; align-items: center; gap: 8px; flex: 1; font-weight: 700; font-size: 18px; }
  .chat-title .i { width: 20px; height: 20px; color: var(--rv-accent-ink, var(--rv-accent)); }
  .chat-log { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 6px 2px 12px; overscroll-behavior: contain; }
  .chat-empty { margin: auto 0; color: var(--rv-muted); font-size: 15px; line-height: 1.45; }
  .chat-empty p { margin: 0 0 12px; }
  .chat-ex { display: flex; flex-wrap: wrap; gap: 8px; }
  .chat-ex .pick { font-size: 14px; padding: 8px 12px; min-height: 0; }
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
  .chat-act .btn.sm { min-height: 36px; padding: 0 14px; }
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
`;var Lt=[["calendarios","/mais/calendarios","Calend\xE1rios","layers","Nome, cor e quais aparecem na agenda."],["rotinas","/mais/rotinas","Rotinas","repeat","Rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados."],["avisos","/mais/avisos","Avisos","bell-ring","Avisos de rem\xE9dio no celular, pessoas e pets."],["ferias","/mais/ferias","F\xE9rias","plane","Rotinas, tarefas e manuten\xE7\xE3o pausadas; rem\xE9dios continuam."],["config","/config","Configura\xE7\xF5es","sliders-horizontal","Integra\xE7\xF5es, recompensas, dados, apar\xEAncia e op\xE7\xF5es."],["sobre","/mais/sobre","Sobre","info","CorrerIA Code, os apps e o GitHub."]],nt=[["integracoes","Integra\xE7\xF5es","blocks"],["placar","Recompensas","trophy"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"],["opcoes","Op\xE7\xF5es","toggle-right"]],Uo=Lt.filter(([o])=>o!=="config").map(([o])=>o),Ht=nt.map(([o])=>o);function jt(o){let e=(o||"").replace(/\/+$/,"");if(e==="/calendario")return{name:"calendar"};if(e==="/recompensas")return{name:"rewards"};if(e==="/rotinas")return{name:"routines"};if(e==="/agendas")return{name:"more",tab:"calendarios"};if(e==="/config")return{name:"more",tab:Ht[0],config:!0};let t=/^\/(mais|config)\/([a-z]+)$/.exec(e);return t&&Ht.includes(t[2])?{name:"more",tab:t[2],config:!0}:t&&t[1]==="config"?{name:"more",tab:Ht[0],config:!0}:t&&Uo.includes(t[2])?{name:"more",tab:t[2]}:e==="/mais"||t&&t[1]==="mais"?{name:"more",tab:"menu"}:{name:"now"}}function ka(o){return o.name==="calendar"?"/calendario":o.name==="rewards"?"/recompensas":o.name==="routines"?"/rotinas":o.name!=="more"?"":o.config?o.tab===Ht[0]?"/config":`/config/${o.tab}`:o.tab==="menu"?"/mais":`/mais/${o.tab}`}var Vt=o=>ka(jt(o)),Bt=o=>o.name==="more"&&o.tab!=="menu";function Aa(o){if(o.config)return"Configura\xE7\xF5es";let e=Lt.find(([t])=>t===o.tab);return e?e[2]:"Mais"}function wi(o){return o.tab==="menu"?"Mais (o menu)":o.config?`Mais \u203A Configura\xE7\xF5es \u203A ${nt.find(([e])=>e===o.tab)[1]}`:`Mais \u203A ${Aa(o)}`}function $i(o=typeof window>"u"?null:window){let e={recompensas:"/recompensas",calendario:"/calendario",agora:"/"},t=a=>{let s=new URL(a.location.href),i=e[s.searchParams.get("aba")];return i?(s.searchParams.delete("aba"),a.history.replaceState(a.history.state,"",s.href),i):null};if(!o)return null;try{let a=t(o);if(a)return a;if(o.parent&&o.parent!==o)return t(o.parent)}catch{}return null}var yi=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,_i="cronologia-conversa",ki=o=>`${o.slice(8,10)}/${o.slice(5,7)}`,Yo=o=>{let[e,t]=o.split(":").map(Number),a=Math.min(1439,e*60+t+60);return`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`},Ai=o=>class extends o{_chatState(){if(!this._chat){let e=[];try{e=JSON.parse(sessionStorage.getItem(_i)||"[]")}catch{}this._chat={messages:Array.isArray(e)?e:[],draft:"",busy:!1,error:"",rec:null}}return this._chat}_setChat(e){if(this._chat={...this._chatState(),...e},"messages"in e)try{sessionStorage.setItem(_i,JSON.stringify(this._chat.messages.slice(-30)))}catch{}this.requestUpdate()}_renderChatBtn(){return!this._aiOn()||!(this._ai&&this._ai.ready)?u:n`<button class="mic-top chat-top" aria-label="Conversar com a IA" title="Conversar com a IA" @click=${()=>this._openChat()}>${yi("message-circle")}</button>`}_openChat(){this._openSheet("chat",{}),this._chatScroll=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".chat-input textarea");e&&window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&e.focus()})}_renderChatSheet(){let e=this._chatState(),t=this._voice||{};return xi({lit:{html:n,nothing:u},icon:yi,messages:e.messages,draft:e.draft,busy:e.busy,error:e.error,voice:{ready:!!t.ready&&!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),on:e.rec==="on",starting:e.rec==="starting"},examples:this._chatExamples(),onDraft:a=>this._setChat({draft:a}),onSend:a=>this._chatSend(a),onMic:()=>this._chatMic(),onAction:(a,s)=>this._chatDo(a,s),onAll:a=>this._chatDoAll(a),onClear:()=>this._setChat({messages:[],error:""}),onClose:()=>this._closeSheet()})}_chatExamples(){let e=this._shownView?this._shownView():this._view();return e.name==="calendar"?["O que tenho esta semana?","Estou livre amanh\xE3 \xE0 tarde?"]:e.name==="rewards"?["Quem est\xE1 ganhando?","O que ainda d\xE1 pontos hoje?"]:["O que tenho hoje?","Por onde eu come\xE7o?","Marca dentista sexta \xE0s 15h"]}_chatScreen(){let e=this._shownView?this._shownView():this._view();if(e.name==="calendar"){let t=this._cursor?z(this._cursor):"";return`Calend\xE1rio${t?`, no dia ${ki(t)}`:""}`}return e.name==="rewards"?"Recompensas (placar, pr\xEAmios e extrato)":e.name==="routines"?"Rotinas (rotinas, rem\xE9dios, manuten\xE7\xF5es e contas cadastrados)":e.name==="more"?wi(e):"Agora (o dia de hoje: agenda, rem\xE9dios, rotinas e contas)"}_chatContext(){let e=new Date(this._now||Date.now()),t=F(e),a=this._view().name==="calendar"&&this._cursor&&this._cursor>t?F(this._cursor):t,s=this._ix(),i=p=>(this._cal(p)||{}).name||"",r=(this._events(a,C(a,8))||[]).filter(p=>!p.kind&&!p.todo&&!p.gerencia).sort((p,h)=>p.start-h.start).slice(0,80).map(p=>({titulo:p.summary||"",data:z(p.start),inicio:p.allDay?null:H(p.start),fim:p.allDay?null:H(p.end),calendario:i(p.cal)})),c=this._score?this._score():null,d=this._todos?this._todos():{items:[]},l=this._away&&this._away();return{tela:`${this._chatScreen()}${l&&this._awayNow()?`; a fam\xEDlia est\xE1 de f\xE9rias at\xE9 ${l.to} (rotinas, tarefas e manuten\xE7\xE3o pausadas)`:""}`,criar:!!this._defaultCal(),agenda:r,rotinas:(s.routines||[]).map(p=>({id:p.key,nome:p.summary,feito:!!p.done,pulada:!!(p.done&&p.done.skipped),periodo:(ne(p.period)||{}).label||"",hora:p.time||null,quem:p.who||"",pontos:p.points||0,atrasada:!p.done&&(p.late>0||!!p.yesterday)})),remedios:(s.meds||[]).map(p=>({id:p.key,nome:p.summary,hora:p.time||null,quem:p.who||"",dose:p.dose||"",estado:p.state||""})),contas:(this._billsList?this._billsList():[]).filter(p=>!p.paid).map(p=>({nome:p.title,valor:p.value==null?null:Number(p.value),vence:p.due,atrasada:!!p.overdue})),manutencao:(s.maint||[]).map(p=>({nome:p.summary,vence:p.due,estado:p.state})),placar:c&&this._scoreOn&&this._scoreOn()?(c.rows||[]).map(p=>({pessoa:p.name,pontos:p.points})):[],tarefas:(d&&d.items||[]).filter(p=>!p.done).slice(0,60).map(p=>({nome:p.summary,lista:p.listName||"",prazo:p.undated||!p.due?null:String(p.due).slice(0,10),atrasada:!!p.overdue}))}}async _chatSend(e){let t=this._chatState();if(t.busy)return;let a=[...t.messages,{role:"user",text:e}];this._setChat({messages:a,draft:"",busy:!0,error:""}),this._chatScroll=!0;try{let s=await this.api.call("cronologia/ai/chat",{messages:a.map(r=>({role:r.role,text:r.text||(r.actions||[]).map(c=>c.label).join("; ")})),context:this._chatContext()}),i=(s.actions||[]).map(r=>({...r,label:this._chatLabel(r),icon:r.tipo==="evento"?"calendar-plus":r.tipo==="tomei"?"pill":"check",state:"todo"}));this._setChat({messages:[...this._chatState().messages,{role:"ia",text:s.reply||"",actions:i}],busy:!1})}catch(s){this._setChat({busy:!1,error:s.message||"A IA n\xE3o respondeu. Tente de novo."})}this._chatScroll=!0}_chatLabel(e){return e.tipo==="evento"?`Marcar "${q(e.titulo,60)}" \xB7 ${ki(e.data)}${e.inicio?` \xE0s ${e.inicio}`:""}`:e.tipo==="tomei"?`Tomei "${q(e.nome,60)}"${e.hora?` (${e.hora})`:""}`:`"${q(e.nome,60)}" feita`}_setAction(e,t,a){let s=this._chatState().messages.map((i,r)=>r===e?{...i,actions:i.actions.map((c,d)=>d===t?{...c,...a}:c)}:i);this._setChat({messages:s})}async _chatDo(e,t){let a=((this._chatState().messages[e]||{}).actions||[])[t];if(!a||a.state==="done"||a.state==="doing")return;this._setAction(e,t,{state:"doing",note:""});let s="";try{if(a.tipo==="evento"){let i=this._defaultCal();if(!i)throw new Error("Nenhum calend\xE1rio para criar eventos.");let r=this._eventFromForm({title:a.titulo,date:a.data,endDate:"",allDay:!a.inicio,start:a.inicio||"",end:a.inicio?a.fim||Yo(a.inicio):"",repeat:"",rrule:"",location:"",notes:""});await this.api.createEvent(i,r),s=q((this._cal(i)||{}).name||"",30)}else await this.api.setCheck(a.id,!0,a.tipo==="tomei"?"remedio":"rotina");this._haptic&&this._haptic("success"),this._setAction(e,t,{state:"done",note:s})}catch(i){this._setAction(e,t,{state:"failed",note:i.message||"N\xE3o deu certo."})}}async _chatDoAll(e){let t=(this._chatState().messages[e]||{}).actions||[];for(let a=0;a<t.length;a++)t[a].state!=="done"&&await this._chatDo(e,a)}async _chatMic(){let e=this._chatState();if(e.rec==="on"){let a=this._chatRec;if(this._chatRec=null,clearTimeout(this._chatRecTimer),!a)return this._setChat({rec:null});let s=a.stop();if(this._setChat({rec:null}),s.length<16e3*.4)return this._setChat({error:"N\xE3o ouvi nada. Toque no microfone e fale."});this._setChat({busy:!0,error:""});try{let i=await this.api.voiceText(s);this._setChat({busy:!1}),i&&i.text&&this._chatSend(i.text)}catch(i){this._setChat({busy:!1,error:i.message||"N\xE3o consegui transcrever."})}return}if(e.rec)return;let t=new Le(()=>{});this._chatRec=t,this._setChat({rec:"starting",error:""});try{await t.start()}catch(a){return t.cancel(),this._chatRec=null,this._setChat({rec:null,error:Pt(a)})}if(this._chatRec!==t)return t.cancel();this._setChat({rec:"on"}),this._chatRecTimer=setTimeout(()=>this._chatState().rec==="on"&&this._chatMic(),120*1e3)}_chatStop(){clearTimeout(this._chatRecTimer),this._chatRec&&this._chatRec.cancel(),this._chatRec=null,this._chat&&this._chat.rec&&(this._chat={...this._chat,rec:null})}_chatAfterRender(){if(!this._chatScroll||this._sheet!=="chat")return;this._chatScroll=!1;let e=this.renderRoot.querySelector(".chat-log");e&&(e.scrollTop=e.scrollHeight)}};var Di={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Sa=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Wo=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var Mi=o=>{let[e,t,a]=String(o).slice(0,10).split("-").map(Number);return new Date(e,t-1,a)};function Ve(o,e,t){let a=typeof o=="string"?Mi(o):o,s=typeof e=="string"?Mi(e):e,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return t==="mes"?`${Wo[a.getMonth()].replace(/^./,r=>r.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Sa[i.getMonth()]}`:`${a.getDate()} ${Sa[a.getMonth()]} a ${i.getDate()} ${Sa[i.getMonth()]}`}var V=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,lt=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],le=o=>(o||"?").trim().charAt(0).toUpperCase(),Ko={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},Ca={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},Ut={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},Qo={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},Jo=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],Si=[2,3,5,10,20],Yt={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},Ci=5,Ti=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),zi=o=>class extends o{_score(){return this._ix().score||null}_scoreOn(){let e=this._score();return!!(e&&e.enabled&&e.participants.length)}_scorePoints(e){if(!this._scoreOn())return 0;let t=e.kind;return t&&t.points>0?t.points:e.todo&&e.todo.points>0?e.todo.points:0}_participant(e){let t=this._score();if(!t||!e)return"";let a=D(e);return t.participants.find(s=>D(s)===a||D(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(e){let t=D(e||""),a=this._pColors();if(a.has(t))return a.get(t);let s=this._personCal(e);return s?s.color:ee(lt[0])}_pColors(){let e=this._score(),t=e&&e.participants||[],a=this._cals?this._cals():[],s=this._pColorCache;if(s&&s.cals===a&&s.parts===t.join("|"))return s.map;let i=new Map,r=new Set;for(let d of t){let l=this._personCal(d);l&&(i.set(D(d),l.color),r.add(l.color.id))}let c=0;for(let d of t){if(i.has(D(d)))continue;for(;c<lt.length-1&&r.has(lt[c]);)c++;let l=lt[c%lt.length];i.set(D(d),ee(l)),r.add(l)}return this._pColorCache={cals:a,parts:t.join("|"),map:i},i}_personCal(e){let t=D(e||"").split(" ")[0];if(!t||!this._cals)return null;let a=this._cals().filter(s=>!s.hidden&&D(s.name).split(/[^a-z0-9]+/).includes(t));return a.length===1?a[0]:null}_me(){return this._user&&this._user.person||""}_pickWho(){return this._scoreOn()&&this._app("who_pick",!1)===!0}_pointsWho(e,t=""){let a=this._score(),s=a&&(a.entries||[]).find(i=>i.key===e);return s&&s.who||this._participant(t||"")||""}_renderWon(e,t){return e?n`<span class="won" style=${P(this._pColor(e),this._dark)} title="${e} ganhou ${t}" aria-label="${e} ganhou ${t} ${t===1?"ponto":"pontos"}"><span class="won-who">${le(e)}</span>+${t}</span>`:n`<span class="pts got">+${t}</span>`}_panelHead(e,t,a,s="",{cls:i="",smallCls:r=""}={}){return n`<div class="chores-head sec-head ${i}"><span class="sec-ic ${t}">${V(e)}</span><span class="overline">${a}</span>${s?n`<small class=${r}>${s}</small>`:u}</div>`}_renderQuickWho(e,t,a){let i=(this._score()||{participants:[]}).participants.slice(0,4);return n`<div class="qwho" role="group" aria-label="Quem fez ${e}">
        ${i.map(r=>n`<button class="qw-btn" style=${P(this._pColor(r),this._dark)} aria-label="${r} fez ${e}${t>0?` (+${t})`:""}" title="${r} fez${t>0?` (+${t})`:""}" @click=${()=>a(r)}>${le(r)}</button>`)}
      </div>`}_withWho(e,t,a,s=null){if(s)return a(s);if(!this._scoreOn()||!(e>0))return a("");let i=this._participant(this._me());return i?a(i):this._openSheet("who",{points:e,title:t,run:a})}_doneToast(e,t,a,{reassignKey:s,undo:i}){let r=this._scoreOn()&&t&&a>0?this._score().participants.filter(d=>D(d)!==D(t)):[],c=t&&a>0?`Feito por ${t} \xB7 +${a}`:`${q(e.summary,26)}: feito`;if(r.length===1&&s){let d=r[0];this._showToast(c,{label:`Foi ${d}`,run:()=>this.api.scoreReassign(s,d).then(()=>this._showToast(`Pontos para ${d}`)).catch(l=>this._showToast(l.message))})}else r.length>1&&s?this._showToast(c,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:e.summary,run:d=>this.api.scoreReassign(s,d).then(()=>this._closeSheet())})}):this._showToast(c,i?{label:"Desfazer",run:i}:null)}_markDone(e,t,a=null){return t==="rotina"&&this._view().name==="now"&&(this._choresHold=!0),this._withWho(e.points||0,e.summary,async s=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,t,s),this._haptic("success"),this._doneToast(e,s,e.points||0,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,t).catch(i=>this._showToast(i.message))})}catch(i){this._showToast(`N\xE3o consegui marcar: ${i.message}`)}},a)}_maintDone(e,t=null,a=!1){return this._withWho(e.points||0,e.summary,async s=>{this._sheet&&(!a||this._sheet==="who")&&await this._closeSheet();try{let i=await this.api.maintDone(e.cal,e.uid,s);this._haptic("success");let r=i&&i.next?`Pr\xF3xima em ${X(O(i.next),new Date(this._now))}`:"";i&&i.key?this._doneToast(e,s,e.points,{reassignKey:i.key}):this._showToast(r?`Feito. ${r}`:"Feito",i&&i.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(c=>this._showToast(c.message))}:null)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}},t)}_renderWhoButtons(e,t){let a=this._score()||{participants:[]};return n`<div class="field who-act">
        <span class="flabel">Quem fez?${e>0?n` <b>+${e}</b>`:u}</span>
        <div class="who-grid inline">
          ${a.participants.map(s=>n`<button class="who-btn" style=${P(this._pColor(s),this._dark)} @click=${()=>t(s)}><span class="avatar">${le(s)}</span><b>${s}</b></button>`)}
        </div>
      </div>`}_renderWhoSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${q(e.title||"",40)}${e.points?n` · <b>+${e.points} pontos</b>`:u}</p>
        <div class="who-grid">
          ${t.participants.map(a=>n`<button class="who-btn" style=${P(this._pColor(a),this._dark)} @click=${()=>e.run(a)}>
              <span class="avatar xl">${le(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>e.run("")}>Ninguém do placar (sem pontos)</button>`}_renderRewards(){let e=this._score();if(!e||!e.enabled||!e.participants.length)return this._renderRoutinesTab();let t=new Date(this._now),a=e.current,s=U(O(a.end),t),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${E(s,"dia","dias")}`,r=e.leader,c=e.rows.reduce((d,l)=>d+l.points,0);return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${W(Ko[e.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(e)}
        <div class="panel board">
          ${e.rows.length===2?this._renderDuel(e,c):this._renderRanking(e)}
          <div class="board-foot">${r?n`${V("crown")}<span><b>${r}</b> na frente${e.rows[1]?` por ${E(e.rows[0].points-e.rows[1].points,"ponto","pontos")}`:""}</span>`:n`<span>${c?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(e)}
        ${e.manual?this._renderToScore():u}
        ${this._renderDemerits(e)}
        ${this._renderExtrato(e)}
        ${this._renderHistory(e)}
      </section>`}_renderDuel(e,t){let[a,s]=e.participants.map(l=>e.rows.find(p=>p.name===l)||{name:l,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),r=a.points-i+(s.points-i),c=r?(a.points-i)/r:.5,d=(l,p)=>n`<div class="duel-side ${p?"right":""} ${e.leader===l.name?"lead":""}" style=${P(this._pColor(l.name),this._dark)}>
        <span class="avatar xl">${le(l.name)}${e.leader===l.name?n`<span class="crown">${V("crown")}</span>`:u}</span>
        <b class="duel-name">${l.name}</b>
        <span class="duel-pts">${l.points}</span>
        <small>${E(l.count,"tarefa","tarefas")}${l.demerits?n` · <span class="neg-text">${E(l.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:u}</small>
      </div>`;return n`<div class="duel">
          ${d(a,!1)}
          <span class="duel-x">×</span>
          ${d(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(c*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(e){let t=Math.max(1,...e.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/t*100).toFixed(1);return n`<div class="ranking">
        ${e.rows.map((s,i)=>n`<div class="rank-row ${e.leader===s.name?"lead":""}" style=${P(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${le(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(e){let t=e.history&&e.history[0];if(!t||t.delivered)return u;let a=new Date(this._now);if(U(a,O(t.end))>14)return u;let s=Object.values(t.totals||{}).join(" \xD7 ");return n`<div class="result-card ${t.winner?"":"tie"}" style=${t.winner?P(this._pColor(t.winner),this._dark):""}>
        <span class="result-ic">${V("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${Qo[e.period]} · ${Ve(t.start,t.end,e.period)}</span>
          <b>${t.winner?`${t.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${t.reward?n`<small>${t.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${t.reward}</small>`:u}
        </div>
        ${t.winner&&t.reward?n`<button class="dose-btn agora" @click=${()=>this._setDelivered(t.key,!0)}>Entregue</button>`:n`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(t.key,!0)}>${V("x")}</button>`}
      </div>`}_renderPrize(e){let t=e.current,a=e.next,s=d=>Object.keys(d.prizes||{}).length>0,i=(d,l)=>d.prizes&&d.prizes[l]||d.reward||"",r=s(t)||!!t.reward,c=s(a)||!!a.reward;return n`<div class="panel prize ${r?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${V("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${s(t)?"Pr\xEAmios":"Pr\xEAmio"} ${Ca[e.period]}</span>
            ${s(t)?u:t.reward?n`<b>${t.reward}</b>`:n`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${()=>this._openPrize("current")}>${r?"Mudar":"Definir"}</button>
        </div>
        ${s(t)?n`<div class="prize-people">
              ${e.participants.map(d=>{let l=i(t,d);return n`<div class="prize-person ${e.leader===d?"lead":""}" style=${P(this._pColor(d),this._dark)}>
                  <span class="avatar sm2">${le(d)}</span>
                  <span class="pp-tx"><small>Se ${d} vencer</small>${l?n`<b>${l}</b>`:n`<i>ainda livre</i>`}</span>
                  ${e.leader===d?n`<span class="pp-lead">${V("crown")}</span>`:u}
                </div>`})}
            </div>`:u}
        <div class="prize-next">
          <span>${V("gift")}<span>${s(a)?n`${W(Ut[e.period].replace(/^d[ao] /,""))}: <b>${e.participants.map(d=>`${d}: ${i(a,d)||"livre"}`).join(" \xB7 ")}</b>`:a.reward?n`Prêmio ${Ut[e.period]}: <b>${a.reward}</b>`:`Pr\xEAmio ${Ut[e.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${()=>this._openPrize("next")}>${c?"Mudar":"Definir"}</button>
        </div>
      </div>`}_openPrize(e){let t=this._score(),a=e==="next"?t.next:t.current,s=a.prizes||{},i=Object.keys(s).length>0;this._openSheet("prize",{which:e,key:a.key,label:a.label,mode:i?"cada":"todos",shared:a.reward||"",per:Object.fromEntries(t.participants.map(r=>[r,s[r]||(i?"":a.reward||"")]))})}async _savePrize(){let e=this._form,t=e.mode==="todos"?(e.shared||"").trim():"",a=e.mode==="cada"?Object.fromEntries(Object.entries(e.per||{}).map(([s,i])=>[s,(i||"").trim()]).filter(([,s])=>s)):{};await this._closeSheet();try{await this.api.scorePrizes(e.key,t,a),this._haptic("success"),this._showToast(t||Object.keys(a).length?Object.keys(a).length?"Pr\xEAmios salvos":"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(s){this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_renderPrizeSheet(){let e=this._form,t=this._score(),a=["Ex.: jantar fora","Ex.: massagem","Ex.: escolher o filme","Ex.: folga da lou\xE7a"];return n`${this._sheetHead(`Pr\xEAmio ${e.which==="next"?Ut[t.period]:Ca[t.period]}`)}
        <p class="sheet-note top">${W(e.label||"")}</p>
        <div class="seg" role="radiogroup" aria-label="Tipo de prêmio">
          ${[["todos","O mesmo para todos"],["cada","Um para cada pessoa"]].map(([s,i])=>n`<button class=${e.mode===s?"on":""} role="radio" aria-checked=${e.mode===s?"true":"false"} @click=${()=>this._setForm({mode:s})}>${i}</button>`)}
        </div>
        ${e.mode==="todos"?n`<label class="field" style="margin-top:14px">
              <span class="flabel">Quem fizer mais pontos ganha</span>
              <input type="text" .value=${e.shared||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @input=${s=>this._setForm({shared:s.target.value})} />
            </label>`:n`${t.participants.map((s,i)=>n`<label class="field" style=${i?"":"margin-top:14px"}>
                  <span class="flabel">Se ${s} vencer</span>
                  <input type="text" .value=${e.per&&e.per[s]||""} placeholder=${a[i%a.length]} maxlength="200" @input=${r=>this._setForm({per:{...this._form.per,[s]:r.target.value}})} />
                </label>`)}
              <span class="field-hint">${V("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" @click=${()=>this._savePrize()}>Salvar</button>
        </div>`}async _setDelivered(e,t){try{await this.api.scoreDelivered(e,t),t&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderFutureScore(e,t,a){let s=this._ix(),i=z(t),r=new Set(e.map(l=>`${l.cal}|${l.uid}`)),c=(s.catalog||[]).filter(l=>l.kind==="rotina"&&l.points>0&&!l.late&&l.next>i&&!r.has(`${l.cal}|${l.uid}`)&&!this._checkOf(l)).sort((l,p)=>l.next.localeCompare(p.next)||l.summary.localeCompare(p.summary,"pt-BR"));if(!c.length)return u;let d=!!this._futureOpen;return n`<button class="add-line done-fold future-fold" aria-expanded=${d?"true":"false"} @click=${()=>(this._futureOpen=!d,this.requestUpdate())}>
          ${V(d?"chevron-down":"chevron-right")}${d?"Esconder pr\xF3ximas rotinas":`Pr\xF3ximas rotinas (${c.length})`}
        </button>
        ${d?n`<p class="future-note">Fez antes do dia? Marque aqui.</p>
              ${Z(c,l=>l.key,l=>{let p={key:l.key,summary:l.summary,points:l.points},h=B(O(l.next),t,{long:!1,cap:!1});return n`<div class="chore future">
                  <button class="chk" @click=${()=>this._markDone(p,"rotina")} aria-label="Marcar ${l.summary} como feita hoje"></button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(l)}><b>${l.summary}</b><small>${a?n`<span class="pts-inline">+${l.points}</span> · `:u}${[h,l.after?`volta ${te(l.after)} depois`:"",l.who].filter(Boolean).join(" \xB7 ")}</small></button>
                  ${a?this._renderQuickWho(l.summary,l.points,f=>this._markDone(p,"rotina",f)):n`<span class="pts">+${l.points}</span>`}
                </div>`})}`:u}`}_renderToScore(){let e=this._ix(),t=new Date(this._now),a=(e.routines||[]).filter(f=>f.points>0),s=this._awayNow&&this._awayNow()?this._away():null,i=s?[]:(e.maint||[]).filter(f=>f.points>0&&f.state!=="ok"),r=s?[]:this._todos().items.filter(f=>f.points>0&&(f.undated||(f.done?f.days===0:f.overdue||f.days===0))),c=a.filter(f=>f.done).length+r.filter(f=>f.done).length,d=a.length+r.length,l=this._pickWho(),p=rt(a.filter(f=>!f.done),t),h=r.filter(f=>!f.done);return n`<div class="panel chores score-today">
        ${this._panelHead("star","ok","Para pontuar hoje",d?`${c} de ${d}`:"")}
        ${Z(p,f=>f.key,f=>n`<div class="chore">
            <button class="chk" @click=${()=>this._markDone(f,"rotina")} aria-label="Marcar ${f.summary}"></button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(f)}><b>${f.summary}</b><small class=${_a(f,t)?"late":""}>${l?n`<span class="pts-inline">+${f.points}</span> · `:u}${ya(f,t)}</small></button>
            ${l?this._renderQuickWho(f.summary,f.points,m=>this._markDone(f,"rotina",m)):n`<span class="pts">+${f.points}</span>`}
          </div>`)}
        ${Z(h,f=>f.key,f=>n`<div class="chore">
            <button class="chk sq" @click=${()=>this._todoDone(f,!0)} aria-label="Concluir ${f.summary}"></button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:f.key})}><b>${f.summary}</b><small>${l?n`<span class="pts-inline">+${f.points}</span> · `:u}${f.undated?"sem prazo":f.overdue?"atrasada":"hoje"} · ${f.listName} · ResolvIA</small></button>
            ${l?this._renderQuickWho(f.summary,f.points,m=>this._todoDone(f,!0,m)):n`<span class="pts">+${f.points}</span>`}
          </div>`)}
        ${Z(i,f=>f.key,f=>n`<div class="chore maint-score">
            <span class="chk wrench ${f.state}">${V("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(f)}><b>${f.summary}</b><small>${l?n`<span class="pts-inline">+${f.points}</span> · `:u}${f.days<0?`venceu h\xE1 ${E(-f.days,"dia","dias")}`:f.days===0?"\xE9 hoje":`em ${E(f.days,"dia","dias")}`} · manutenção</small></button>
            ${l?this._renderQuickWho(f.summary,f.points,m=>this._maintDone(f,m)):n`<button class="pts btn-pts" @click=${()=>this._maintDone(f)}>+${f.points}</button>`}
          </div>`)}
        ${d&&!p.length&&!h.length&&!i.length?n`<p class="empty-line all-done">${V("circle-check")}Tudo pontuado hoje.</p>`:u}
        ${s?n`<p class="empty-line away-line">${V("plane")}<span><b>De férias até ${B(O(s.to),t,{long:!1,cap:!1})}</b>: rotinas, tarefas e manutenção pausadas.</span></p>`:n`${this._renderFutureScore(a,t,l)}
            ${!a.length&&!i.length&&!r.length?n`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>${this._resolviaOn()?", ou a uma tarefa no ResolvIA":""}.</p>`:u}`}
        ${s?u:n`<div class="score-actions">
              <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${V("plus")}Tarefa com pontos</button>
              <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${V("award")}Pontos avulsos</button>
            </div>`}
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(e){await this._saveAppPrefs({demerits:e.length?e:null})}async _addDemerit(e,t){await this._saveDemerits([...this._demerits(),{id:Ti(),title:e,points:t}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${q(e,28)} \xB7 \u2212${t}`)}async _markDemerit(e,t){try{let a=await this.api.scoreDemerit(e.id,t);this._haptic("warning"),this._showToast(`\u2212${e.points} para ${t}: ${q(e.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(e=null){this._openSheet("demerit",e?{id:e.id,title:e.title,points:e.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let e=this._form,t=(e.title||"").trim(),a=Math.round(Math.abs(Number(e.points)||0));if(!t||a<1)return;let s=this._demerits(),i=e.id?s.map(r=>r.id===e.id?{...r,title:t,points:a}:r):[...s,{id:Ti(),title:t,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(e.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${q(t,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let e=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${q(e.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(t=>t.id!==e.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(e){let t=this._demerits();if(!t.length)return u;let a=i=>{let r={};for(let c of e.entries)c.kind==="demerito"&&String(c.key).startsWith(`demerito|${i.id}|`)&&(r[c.who]=(r[c.who]||0)+1);return Object.entries(r).map(([c,d])=>`${c} ${d}\xD7`).join(" \xB7 ")},s=e.entries.filter(i=>i.kind==="demerito").length;return this._awayNow&&this._awayNow()?n`<div class="panel chores demerits paused" id="demeritos">
          ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${E(s,"vez","vezes")} ${Yt[e.period]}`:"tiram pontos")}
          <p class="dm-lead dm-away">${V("plane")}<span>Pausados nas férias.</span></p>
        </div>`:n`<div class="panel chores demerits" id="demeritos">
        ${this._panelHead("thumbs-down","late","Dem\xE9ritos",s?`${E(s,"vez","vezes")} ${Yt[e.period]}`:"tiram pontos")}
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${Z(t,i=>i.id,i=>{let r=a(i);return n`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${i.title}</b>${r?n`<small>${r} ${Yt[e.period]}</small>`:u}</div>
                <span class="pts neg">−${i.points}</span>
              </div>
              <div class="dm-who">
                ${e.participants.map(c=>n`<button class="dm-btn" style=${P(this._pColor(c),this._dark)} aria-label="${i.title}: descontar de ${c}" @click=${()=>this._markDemerit(i,c)}>
                    <span class="avatar sm2">${le(c)}</span><span>${c}</span>
                  </button>`)}
              </div>
            </div>`})}
      </div>`}_renderDemeritsSettings(){let e=this._demerits();return n`<div class="panel chores demerits-set" id="demeritos-ajustes">
        ${this._secHead("thumbs-down","Dem\xE9ritos","O que tira pontos de quem fizer.")}
        ${e.length?Z(e,t=>t.id,t=>n`<button class="demerit dm-edit" @click=${()=>this._openDemeritForm(t)}>
                <span class="dm-tx"><b>${t.title}</b></span>
                <span class="pts neg">−${t.points}</span>
                ${V("chevron-right")}
              </button>`):n`<div class="chip-row dm-ideas">${Jo.map(([t,a])=>n`<button class="pick" @click=${()=>this._addDemerit(t,a)}>${V("plus")}<span>${t} −${a}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${V("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let e=this._form,t=Number(e.points)||0,a=e.custom||t>0&&!Si.includes(t);return n`${this._sheetHead(e.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <input type="text" .value=${e.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @input=${s=>this._setForm({title:s.target.value})} />
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row c4">
            ${Si.map(s=>n`<button class="pick ${t===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>Outro</button>
          </div>
          ${a?n`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(t||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:u}
        </div>
        <div class="sheet-actions">
          ${e.mode==="edit"?n`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${V("trash")}Apagar</button>`:n`<button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(e.title||"").trim()||!(t>0)} @click=${()=>this._saveDemeritForm()}>${e.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}async _removePoints(e){try{await this.api.scoreRemove(e.key);let t=()=>this.api.scoreRestore(e.key).catch(a=>this._showToast(a.message));this._showToast(e.points<0?`${q(e.title,26)}: dem\xE9rito tirado`:`${q(e.title,26)}: pontos de ${e.who.split(" ")[0]} tirados`,{label:"Desfazer",run:t})}catch(t){this._showToast(t.message)}}_renderExtraSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda.</p>
        <label class="field"><span class="flabel">O que foi feito</span><input type="text" id="ex-title" .value=${e.title} placeholder="Ex.: Lavou o carro" maxlength="120" @input=${a=>this._setForm({title:a.target.value})} /></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${t.participants.map(a=>n`<button class="pick person ${e.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${le(a)}</span><span>${a}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row c3">
            ${[5,10,20,30,50].map(a=>n`<button class="pick ${Number(e.points)===a?"on":""}" @click=${()=>this._setForm({points:a})}>+${a}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(e.points)} aria-label="Outro valor" @input=${a=>this._setForm({points:a.target.value})} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${!e.who||!(e.title||"").trim()||!Number(e.points)} @click=${()=>this._saveExtra()}>Dar ${Number(e.points)||0} pontos</button>
        </div>`}async _saveExtra(){let e=this._form;try{await this.api.scoreExtra(e.who,Number(e.points),e.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${e.points} para ${e.who}`)}catch(t){this._showToast(t.message)}}_renderHistory(e){let t=e.history||[];if(!t.length)return u;let a=t.slice(0,10),s={};for(let i of t)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return n`<div class="panel history">
        ${this._panelHead("archive","muted","Hist\xF3rico",Object.entries(s).map(([i,r])=>`${i} ${r}`).join(" \xB7 "))}
        ${Z(a,i=>i.key,i=>n`<div class="hist-row">
            <button class="hist-open" aria-label="Extrato de ${Ve(i.start,i.end,e.period)}" @click=${()=>this._openPeriodLog(i)}>
              <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?P(this._pColor(i.winner),this._dark):""}>${i.winner?le(i.winner):"="}</span>
              <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${Ve(i.start,i.end,e.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
              ${V("chevron-right")}
            </button>
            ${i.reward&&i.winner?n`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${V(i.delivered?"check":"gift")}</button>`:u}
          </div>`)}
      </div>`}_renderExtrato(e){this._extFor!==e.current.key&&(this._extFor=e.current.key,this._extMore=[],this._extEnd=!1,this._extOpen=!1);let t=e.log||[],a=t.length?Math.min(...t.map(l=>l.id)):1/0,s=[...t,...(this._extMore||[]).filter(l=>l.id<a)],i=Math.max(e.log_count||0,s.length),r=!!this._extOpen,c=r?s:s.slice(0,Ci),d=r?t.length&&!this._extEnd&&s.length<i:i>c.length;return n`<div class="panel extrato">
        ${this._panelHead("file-text","accent",`Extrato ${Ca[e.period]}`,s.length?E(i,"mudan\xE7a","mudan\xE7as"):"")}
        ${s.length?this._extRows(c,e,new Map((e.entries||[]).map(l=>[l.key,l]))):n`<p class="empty-line">Nada mexeu nos pontos ${Yt[e.period]} ainda.</p>`}
        ${d||r?n`<div class="ext-more">
              ${d?n`<button class="add-line" ?disabled=${this._extBusy} @click=${()=>r?this._loadExtrato(Math.min(...s.map(l=>l.id)),e.current):(this._extOpen=!0,this.requestUpdate())}>
                    ${V("chevron-down")}${this._extBusy?"Carregando\u2026":`Ver mais (${i-c.length})`}
                  </button>`:u}
              ${r&&s.length>Ci?n`<button class="add-line less" @click=${l=>this._closeExtrato(l)}>${V("chevron-up")}Ver menos</button>`:u}
            </div>`:u}
      </div>`}_closeExtrato(e){let t=e.currentTarget.closest(".extrato");this._extOpen=!1,this._extMore=[],this._extEnd=!1,this.requestUpdate(),this.updateComplete.then(()=>{t&&t.getBoundingClientRect().top<0&&t.scrollIntoView({block:"start",behavior:"smooth"})})}_extRows(e,t,a=null){let s=new Date(this._now),i=l=>{let p=new Date(l),h=U(p,s);return h===0?"Hoje":h===-1?"Ontem":`${W(Ct[p.getDay()])}, ${X(p,s)}`},r=new Set,c=[],d="";for(let l of e){let p=i(l.at);p!==d&&c.push(n`<div class="ext-day">${p}</div>`),d=p;let h=a&&l.key&&!r.has(l.key)&&["ganhou","perdeu","trocou","voltou","ajuste"].includes(l.type)?a.get(l.key):null;l.key&&r.add(l.key),c.push(this._renderExtLine(l,t,h,!!a))}return c}async _loadExtrato(e,t){this._extBusy=!0,this.requestUpdate();try{let a=await this.api.scoreLog(e,40,t.start,t.end)||[],s=new Set((this._extMore||[]).map(i=>i.id));this._extMore=[...this._extMore||[],...a.filter(i=>!s.has(i.id))],a.length<40&&(this._extEnd=!0)}catch(a){this._showToast(a.message)}this._extBusy=!1,this.requestUpdate()}async _openPeriodLog(e){await this._openSheet("periodlog",{period:e,lines:null,end:!1,busy:!0}),this._morePeriodLog()}async _morePeriodLog(){let e=this._form;if(!e||!e.period)return;let t=e.period;this._setForm({busy:!0});try{let a=e.lines&&e.lines.length?Math.min(...e.lines.map(i=>i.id)):0,s=await this.api.scoreLog(a,60,t.start,t.end)||[];if(!this._form||this._form.period!==t)return;this._setForm({lines:[...this._form.lines||[],...s],end:s.length<60,busy:!1})}catch(a){this._form&&this._form.period===t&&this._setForm({busy:!1,lines:this._form.lines||[],end:!0}),this._showToast(a.message)}}_renderPeriodLogSheet(){let e=this._form,t=this._score()||{},a=e.period,s=Object.entries(a.totals||{});return n`${this._sheetHead(`Extrato \xB7 ${Ve(a.start,a.end,t.period)}`)}
        <div class="plog-result">
          <span class="hist-ic ${a.winner?"":"tie"}" style=${a.winner?P(this._pColor(a.winner),this._dark):""}>${a.winner?le(a.winner):"="}</span>
          <span class="hist-tx"><b>${a.winner?`${a.winner} venceu`:"Empate"}</b><small>${s.map(([i,r])=>`${i} ${r}`).join(" \xD7 ")}${a.reward?` \xB7 ${a.reward}`:""}</small></span>
        </div>
        <div class="extrato plog">
          ${e.lines==null?n`<p class="empty-line">Carregando…</p>`:e.lines.length?this._extRows(e.lines,t):n`<p class="empty-line">Nada registrado nesse período.</p>`}
          ${e.lines&&e.lines.length&&!e.end?n`<button class="add-line" ?disabled=${e.busy} @click=${()=>this._morePeriodLog()}>${V("chevron-down")}${e.busy?"Carregando\u2026":"Ver mais"}</button>`:u}
        </div>`}_extText(e){let t=(h,f)=>D(h||"").split(" ")[0]===D(f||"").split(" ")[0],a=e.who||"",s=e.by&&!t(e.by,a)?e.by:"",i=!!e.by&&!s,r=Math.abs(e.points||0),c=E(r,"ponto","pontos"),d=e.via==="ResolvIA"?" no ResolvIA":e.via==="Automa\xE7\xE3o"?" por automa\xE7\xE3o":"",l=e.title||"",p=e.kind==="extra"?"Avulso: ":e.kind==="demerito"?"Dem\xE9rito: ":e.kind==="manutencao"?"Manuten\xE7\xE3o: ":e.kind==="tarefa"?"Tarefa do ResolvIA: ":"";switch(e.type){case"ganhou":return[`${a} ganhou ${c}${s?`, marcado por ${s}`:""}${d}`,`${p}${l}`];case"perdeu":return[s?`${s} tirou ${c} de ${a}${d}`:`${a} perdeu ${c}${d}`,`${p}${l}`];case"tirou":return e.points>0?[s?`${s} devolveu ${c} para ${a}`:`${a} recebeu ${c} de volta`,`Dem\xE9rito cancelado: ${l}`]:[s?`${s} tirou ${c} de ${a}`:i?`${a} tirou os pr\xF3prios ${c}`:`${a} perdeu ${c}`,`Pontos cancelados: ${l}`];case"desmarcou":return[`${a} ${e.points>0?"recebeu de volta":"perdeu"} ${c}${s?`, desmarcado por ${s}`:i?" ao desmarcar":d?`, reaberto${d}`:""}`,`Desmarcado: ${l}`];case"trocou":return[`${c} passaram de ${e.from||"?"} para ${a}${s?`, por ${s}`:""}${d}`,l];case"voltou":return[e.points<0?`${a} perdeu ${c} de novo${s?`, ${s} desfez`:""}`:s?`${s} desfez: ${c} voltaram para ${a}`:`${c} voltaram para ${a}`,`Desfeito: ${l}`];case"ajuste":return[`${a} ${e.points>0?"ganhou mais":"perdeu"} ${c}${s?`, por ${s}`:""}`,`Pontos mudaram: ${l}`];default:return[`${a} ${e.points<0?"perdeu":"ganhou"} ${c}`,l]}}_renderExtLine(e,t,a,s=!0){let i=H(new Date(e.at));if(e.type==="fechou"){let l=Object.values(e.totals||{}).join(" \xD7 ");return n`<div class="ext-row closed">
          <span class="hist-ic" style=${e.winner?P(this._pColor(e.winner),this._dark):""}>${V("trophy")}</span>
          <span class="feed-tx"><b>${e.winner?`${e.winner} venceu`:"Empate"}${l?` \xB7 ${l}`:""}</b><small>Fechou: ${e.period?Ve(e.period.start,e.period.end,t.period):""}${e.reward&&e.winner?` \xB7 ${e.reward}`:""} · ${i}</small></span>
        </div>`}let[r,c]=this._extText(e),d=Math.abs(e.points||0);return n`<div class="ext-row" style=${P(this._pColor(e.who),this._dark)}>
        <span class="avatar sm2">${le(e.who)}</span>
        <span class="feed-tx"><b>${r}</b><small>${c?`${c} \xB7 `:""}${i}</small></span>
        ${e.type==="trocou"?n`<span class="pts swap" title="Passaram de ${e.from} para ${e.who}">${V("repeat")}${d}</span>`:n`<span class="pts ${e.points<0?"neg":"got"}">${e.points>0?"+":e.points<0?"\u2212":""}${d}</span>`}
        ${a?n`<button class="icon-btn mini" aria-label="${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"}: ${a.title}" title=${a.points<0?"Cancelar o dem\xE9rito":"Tirar os pontos"} @click=${()=>this._removePoints(a)}>${V("x")}</button>`:s?n`<span class="ext-x-gap"></span>`:u}
      </div>`}_scorePrefs(e){let t=this._score()||{},a={enabled:!!t.enabled,participants:t.participants||[],period:t.period||"semana",anchor:t.anchor||z(new Date),notify:t.notify!==!1,manual:!!t.manual,remind:t.remind||null};return this._saveAppPrefs({score:{...a,...e}})}_renderScoreSettings(){let e=this._score(),t=!!(e&&e.enabled&&e.participants.length),a=e&&e.participants&&e.participants.length?e.participants:(this._ix().people||[]).filter(i=>i.person&&!i.pet).map(i=>i.name),s=n`<div class="row switch-row">
        <div class="grow"><div class="label">Usar recompensas</div><div class="hint">${t||a.length?"Placar da casa, pr\xEAmio e dem\xE9ritos.":"Sem pessoas no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${t} ?disabled=${!t&&!a.length} @change=${i=>this._scorePrefs(i.target.checked?{enabled:!0,participants:a,anchor:z(new Date)}:{enabled:!1})} aria-label="Usar recompensas" /><span class="track"></span></label>
      </div>`;return t?n`${this._renderScoreSettingsPanel(e,s)} ${this._renderDemeritsSettings()}`:n`<div class="panel score-set" id="placar">${this._secHead("trophy","Recompensas")} ${s}</div>`}_renderScoreSettingsPanel(e,t){let a=(this._ix().people||[]).filter(i=>!i.pet).map(i=>i.name),s=[...new Set([...e.participants,...a])];return n`<div class="panel score-set" id="placar">
        ${this._secHead("trophy","Recompensas")}
        ${t}
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${s.map(i=>{let r=e.participants.includes(i);return n`<button class="pick person ${r?"on":""}" aria-pressed=${r?"true":"false"} @click=${()=>this._scorePrefs({participants:r?e.participants.filter(c=>c!==i):[...e.participants,i]})}><span class="avatar sm">${le(i)}</span><span>${i}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(Di).map(([i,r])=>n`<button class=${e.period===i?"on":""} @click=${()=>this._scorePrefs({period:i,anchor:z(new Date)})}>${r.label}</button>`)}</div>
          <span class="field-hint">${V("info")}<span>${e.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",1)===1?"na segunda":"no domingo"}.`}</span></span>
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
        ${e.remind?this._renderScoreRemind(e):u}
      </div>`}_renderScoreRemind(e){let t={manha:"09:00",tarde:"14:00",noite:"20:00"},a=Fe(Number(e.remind.slice(0,2))),s=this._ix().people||[],i=p=>!!(s.find(h=>D(h.name)===D(p))||{}).reach,r=e.participants.filter(p=>i(p)),c=e.participants.filter(p=>!i(p)),d=p=>p.length>1?`${p.slice(0,-1).join(", ")} e ${p.at(-1)}`:p[0],l=i(this._me?this._me():"");return n`<div class="field remind-field">
        <span class="flabel">Quando</span>
        <div class="seg remind-seg">${He.map(p=>n`<button class=${a===p.id?"on":""} @click=${()=>this._scorePrefs({remind:t[p.id]})}>${V(p.icon)}${p.label}</button>`)}</div>
        <div class="remind-row">
          <input type="time" class="remind-time" .value=${e.remind} aria-label="Horário do lembrete" @change=${p=>/^\d{2}:\d{2}$/.test(p.target.value)&&this._scorePrefs({remind:p.target.value})} />
          <button class="btn outline remind-test" ?disabled=${!l} aria-label="Testar no meu celular" title=${l?"":"Sem celular ligado a voc\xEA no Home Assistant"} @click=${()=>this._testScoreReminder()}>${V("send")}Testar</button>
        </div>
        <span class="field-hint">${V("bell-ring")}<span>${r.length?`Vai para o celular de ${d(r)}.`:""}${c.length?`${r.length?" ":""}Sem celular para ${d(c)}.`:""}</span></span>
      </div>`}async _testScoreReminder(){try{await this.api.testScoreReminder(),this._showToast("Lembrete enviado para o seu celular. Toque nele para abrir Recompensas.")}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}};var de={CREATE:1,UPDATE:4,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},Ei="cronologia.todo_list",L=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,Be="laranja",Xo=o=>(o||"?").trim().charAt(0).toUpperCase(),Ta=o=>o.allDay?O(o.due):new Date(o.due);function qi(o,e){if(o.undated)return"sem prazo";let t=Ta(o),a=U(t,e),s=o.allDay?"":` \xE0s ${H(t)}`;return o.done?"conclu\xEDda":o.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?o.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${B(t,e,{long:!1,cap:!1})}${s}`}var Oi=o=>o?o===1?"todo dia":o===7?"toda semana":o===14?"a cada 2 semanas":o===30?"todo m\xEAs":`a cada ${o} dias`:"",Fi=o=>class extends o{_todosAll(){return this._ix().todos||{lists:[],items:[]}}_todos(){let e=this._todosAll(),t=this._listOwners(),a=this._me(),s=a&&(this._ix().people||[]).some(l=>l.person&&D(l.name)===D(a));if(!Object.keys(t).length||!s)return e;let i=this._todosView,r=JSON.stringify(t);if(i&&i.src===e&&i.me===a&&i.key===r)return i.view;let c=l=>!t[l]||D(t[l])===D(a),d={...e,lists:e.lists.filter(l=>c(l.id)),items:e.items.filter(l=>c(l.list))};return this._todosView={src:e,me:a,key:r,view:d},d}_listOwners(){let e=this._todosAll().app;return e&&e.donos||this._app("todo_owner",null)||{}}_ownersFromResolvia(){let e=this._todosAll().app;return!!(e&&e.donos)}_todoOwners(){let e=(this._ix().people||[]).filter(a=>a.person).map(a=>a.name),t=this._score&&this._score();return[...new Set([...e,...t&&t.participants||[]])]}_todoEvents(e,t){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.filter(s=>!s.undated).map(s=>{let i=Ta(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?C(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<t&&s.end>e&&!(this._awayDay&&this._awayDay(s.start)))}async _todoDone(e,t,a=null){let s=async i=>{this._sheet==="who"&&await this._closeSheet();try{let r=await this.api.setTodo(e.list,e.uid,t,i);this._haptic(t?"success":"light"),t&&r&&r.points?this._doneToast(e,r.who,r.points,{reassignKey:r.key}):this._showToast(`${q(e.summary,28)}: ${t?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(e.list,e.uid,!t).catch(c=>this._showToast(c.message))})}catch(r){this._showToast(`N\xE3o consegui: ${r.message}`)}};return t&&e.points>0?a?s(a):this._withWho(e.points,e.summary,s):s("")}_renderTodosPanel(){if(this._awayNow&&this._awayNow())return u;let e=new Date(this._now),a=this._todos().items.filter(l=>l.undated?!0:l.done?l.days===0:l.overdue||l.days<=1);if(!a.length)return u;let s=a.filter(l=>l.overdue),i=a.filter(l=>!l.done),r=this._todosOpen?a:a.slice(0,6),c=this._scoreOn()?(this._score()||{}).participants||[]:[],d=l=>{let p=l.points>0&&!l.done&&c.length&&c.length<=3,h=l.equips&&l.equips.length?l.equips:l.equip?[l.equip]:[],f=l.rooms&&l.rooms.length?l.rooms:l.room?[l.room]:[],m=[l.undated?"":qi(l,e),Oi(l.every),l.listName].filter(Boolean).join(" \xB7 ");return n`<div class="chore todo ${l.done?"done":""} ${l.overdue?"late":""}">
          <button class="chk sq ${l.done?"on":""}" @click=${()=>this._todoDone(l,!l.done)} aria-label="${l.done?"Reabrir":"Concluir"} ${l.summary}">${l.done?L("check"):u}</button>
          <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:l.key})}><b>${l.summary}</b><small>${p?n`<span class="pts-inline">+${l.points}</span> · ${m}`:m}</small>${je(f.map(v=>v.nome),h.map(v=>v.nome),this._roomNamesAll())}</button>
          ${p?n`<div class="qwho" role="group" aria-label="Quem fez ${l.summary}">
                ${c.map(v=>n`<button class="qw-btn" style=${P(this._pColor(v),this._dark)} aria-label="${v} fez ${l.summary} (+${l.points})" title="${v} fez (+${l.points})" @click=${()=>this._todoDone(l,!0,v)}>${Xo(v)}</button>`)}
              </div>`:l.points>0&&this._scoreOn()?n`<span class="pts ${l.done?"got":""}">+${l.points}</span>`:u}
        </div>`};return n`<div class="panel todos ${s.length?"alert":""}" id="tarefas">
        ${this._panelHead("list-checks","violet",a.some(l=>l.undated)?"Tarefas":"Tarefas com prazo",s.length?E(s.length,"atrasada","atrasadas"):i.length?`${i.length} para fazer`:"tudo feito",{smallCls:s.length?"late":""})}
        ${Z(r.filter(l=>!l.undated),l=>l.key,l=>d(l))}
        ${r.some(l=>l.undated)?n`${r.some(l=>!l.undated)?n`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>`:u}
              ${Z(r.filter(l=>l.undated),l=>l.key,l=>d(l))}`:u}
        ${a.length>6?n`<button class="add-line" @click=${()=>(this._todosOpen=!this._todosOpen,this.requestUpdate())}>${L(this._todosOpen?"chevron-up":"chevron-down")}${this._todosOpen?"Mostrar menos":`Mais ${a.length-6}`}</button>`:u}
        <div class="panel-foot plain">${L("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais › Configurações › Integrações.</span></div>
      </div>`}_renderTodoSheet(){let e=new Date(this._now),t=this._todos().items.find(s=>s.key===this._form.key);if(!t)return n`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=t.undated?null:Ta(t);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${qi(t,e)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${L("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${L("calendar-clock")}<span>${a?n`Prazo: ${W(B(a,e))}${t.allDay?"":` \xE0s ${H(a)}`}`:"Sem prazo"}</span></div>
          <div class="fact">${L("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${(t.rooms&&t.rooms.length?t.rooms:t.room?[t.room]:[]).length?n`<div class="fact">${L("door-open")}<span>${ot((t.rooms&&t.rooms.length?t.rooms:[t.room]).map(s=>s.nome),this._roomNamesAll()).join(", ")}</span></div>`:u}
          ${(t.equips&&t.equips.length?t.equips:t.equip?[t.equip]:[]).map(s=>n`<div class="fact">${L("package")}<span>${s.nome}${s.comodo&&!t.room?` (${s.comodo})`:""}</span></div>`)}
          ${t.every?n`<div class="fact">${L("repeat")}<span>Volta ${Oi(t.every)} depois de concluída</span></div>`:u}
          ${t.points>0&&this._scoreOn()?n`<div class="fact">${L("award")}<span>${t.points} pontos para quem concluir</span></div>`:u}
          ${t.description?n`<div class="fact notes">${L("file-text")}<span>${St(t.description).map(s=>s.url?n`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:u}
        </div>
        <p class="sheet-note">${L("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done?n`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!1))}>${L("undo-2")}Reabrir</button>`:n`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!0))}>${L("check")}Concluir${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`}
        </div>`}_todoLists(){return(this._app("todo_create_any",!1)===!0?this._todosAll():this._todos()).lists.filter(t=>!t.unavailable&&t.features&de.CREATE)}_otherOwner(e){let t=this._listOwners()[e],a=this._me();return t&&!(a&&D(t)===D(a))?t:null}_openTodoForm({date:e=null}={}){let t=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(Ei)||'""')}catch{}let s=t.find(i=>i.id===a)||t.find(i=>!i.hidden&&i.features&de.DUE_DATE&&!this._otherOwner(i.id))||t.find(i=>!this._otherOwner(i.id))||t[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:z(e?F(e):F(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_todoDueOk(){return(this._todosAll().app||{}).prazos!==!1}_invLists(){let e=this._todosAll().app||{},t=e.comodos||[],a=(e.equipamentos||[]).map(s=>{let i=t.find(r=>r.nome===s.comodo);return{id:s.id,nome:s.nome,zona:"",roomId:i?i.id:null,roomName:s.comodo||""}});return{rooms:t,items:a}}_roomNamesAll(){return this._invLists().rooms.map(e=>e.nome)}_renderRoomEquipFields(e,{equips:t=!0,multiRoom:a=!1}={}){let{rooms:s,items:i}=this._invLists(),r=t?i:[];return!s.length&&!r.length?u:this._renderRoomEquipMulti(e,s,r,{multiRoom:a})}_renderRoomEquipMulti(e,t,a,{multiRoom:s=!1}={}){let i=e.equips||[],r=i.length>0,c=v=>[...new Set(v.map($=>(a.find(_=>_.id===$)||{}).roomId).filter($=>$&&t.some(_=>_.id===$)))],d=s?(e.rooms||(e.room?[e.room]:[])).filter(v=>t.some($=>$.id===v)):e.room?[e.room]:[],l=r?c(i):d,p=v=>{if(!s)return this._setForm({room:e.room===v?null:v});let $=d.includes(v)?d.filter(_=>_!==v):[...d,v];this._setForm({rooms:$,room:$[0]||null})},h=t.map(v=>v.id),f=s&&!r&&t.length>1&&h.every(v=>l.includes(v)),m=r?l[0]||null:f?null:e.room||null;return n`${t.length?n`<div class="field">
              <span class="flabel">${l.length>1?"C\xF4modos":"C\xF4modo"}</span>
              <div class="chip-row ${r?"locked":""}">
                <button class="pick ${l.length?"":"on"}" ?disabled=${r} @click=${()=>this._setForm({room:null,rooms:[]})}>Nenhum</button>
                ${s&&t.length>1?n`<button class="pick all-rooms ${f?"on":""}" aria-pressed=${f?"true":"false"} ?disabled=${r} @click=${()=>this._setForm(f?{room:null,rooms:[]}:{rooms:h,room:h[0]})}>${L("house")}<span>Todos</span></button>`:u}
                ${t.map(v=>n`<button class="pick ${l.includes(v.id)?"on":""}" aria-pressed=${l.includes(v.id)?"true":"false"} ?disabled=${r} @click=${()=>p(v.id)}>${L("door-open")}<span>${q(v.nome,22)}</span></button>`)}
              </div>
              ${r?n`<span class="field-hint">${L("lock")}<span>Vem ${i.length>1?"dos equipamentos":"do equipamento"}.</span></span>`:u}
            </div>`:u}
        ${a.length?n`<div class="field">
              <span class="flabel">${i.length>1?"Equipamentos":"Equipamento"}</span>
              ${_s({lit:{html:n,nothing:u},icon:L,items:a,room:m,roomName:m&&(t.find(v=>v.id===m)||{}).nome||"",value:i,query:e.equipQ||"",more:!!e.equipMore,adding:!!e.equipAdding,autofocus:!!e.equipAdding,onQuery:v=>this._setForm({equipQ:v,equipMore:!1}),onMore:()=>this._setForm({equipMore:!0}),onAdd:()=>this._setForm({equipAdding:!0,equipQ:"",equipMore:!1}),onPick:v=>this._setForm({equips:[...i,v],equipQ:"",equipMore:!1,equipAdding:!1}),onRemove:v=>{let $=i.filter(_=>_!==v);this._setForm({equips:$,...$.length?{}:{room:c(i)[0]||e.room||null,...s?{rooms:c(i)}:{}}})}})}
            </div>`:u}`}_renderTodoForm(){let e=this._form,t=this._todoLists(),a=t.find(p=>p.id===e.list),s=Qs(t),i=a?a.features:0,r=this._todoDueOk(),c=r&&!!(i&de.DUE_DATE),d=r&&!!(i&de.DUE_DATETIME),l=!!(i&de.DESCRIPTION);return n`
        ${this._sheetHead("Novo")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Levar o carro na revisão" @input=${p=>this._setForm({title:p.target.value})} @keydown=${p=>p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${t.map(p=>n`<button class="pick list ${e.list===p.id?"on":""}" style=${P(ee(Be),this._dark)} title=${p.name} @click=${()=>this._setForm({list:p.id})}>${L(this._otherOwner(p.id)?"user-round":"list-checks")}<span>${q(s.get(p.id).short,30)}</span></button>`)}</div>
          ${a&&s.get(a.id).short!==a.name?n`<div class="field-hint">${L("list-checks")}<span>No Home Assistant: <b>${a.name}</b></span></div>`:u}
          ${a&&this._otherOwner(a.id)?n`<div class="field-hint">${L("user-round")}<span>Lista de <b>${this._otherOwner(a.id)}</b>: a tarefa aparece no CronologIA de ${this._otherOwner(a.id)}.</span></div>`:u}
        </div>
        ${c||d?n`${e.noDue?u:this._dateField("Prazo",e.date,p=>this._setForm({date:p}),"td-date")}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${e.noDue?"on":""}" @click=${()=>this._setForm({noDue:!e.noDue})}>Sem prazo</button>
                ${d&&!e.noDue?n`<button class="pick ${e.timed?"on":""}" @click=${()=>this._setForm({timed:!e.timed})}>${L("clock")}<span>Com horário</span></button>
                      ${e.timed?n`<input type="time" class="inline-time" .value=${e.time} aria-label="Horário" @change=${p=>p.target.value&&this._setForm({time:p.target.value})} />`:u}`:u}
              </div>`:n`<p class="field-hint" style="margin:-6px 0 18px">${L("info")}<span>${r?"Essa lista n\xE3o aceita prazo.":"Os prazos est\xE3o desligados no ResolvIA."}</span></p>`}
        ${this._renderRoomEquipFields(e,{multiRoom:!0})}
        ${l&&this._app("event_details",!1)===!0?n`<label class="field"><span class="flabel">Notas</span><textarea rows="2" .value=${e.notes} placeholder="Detalhes, links" @input=${p=>this._setForm({notes:p.target.value})}></textarea></label>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${e.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let e=this._form,t=this._todoLists().find(r=>r.id===e.list);if(!t)return this._showToast("Escolha a lista");if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=this._todoDueOk()&&!e.noDue&&t.features&(de.DUE_DATE|de.DUE_DATETIME),s=a&&e.timed&&t.features&de.DUE_DATETIME,i={summary:e.title.trim(),date:a?e.date:"",time:s?e.time:"",description:e.notes||"",...(e.equips||[]).length?{equips:e.equips}:(e.rooms||[]).length>1?{rooms:e.rooms}:e.room?{room:e.room}:{}};a&&!s&&!(t.features&de.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(t.id,i);let r=this._otherOwner(t.id);if(!r)try{localStorage.setItem(Ei,JSON.stringify(t.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${q(t.name,24)}${r?` (lista de ${r})`:t.hidden?" (lista oculta aqui)":""}`)}catch(r){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${r.message}`)}}_renderMirrorSettings(e){let t=this._app("mirror",null)||{},a=this._ix().mirror||{},s=e.filter(l=>l.features&de.CREATE&&l.features&de.UPDATE&&!l.unavailable),i=l=>this._saveAppPrefs({mirror:{list:t.list||null,maint:!!t.maint,routine:!!t.routine,...l}}),r=(l,p,h,f)=>n`<div class="row switch-row">
        <div class="grow"><div class="label">${p}</div><div class="hint">${h}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!l} ?disabled=${!t.list} @change=${m=>i({[f]:m.target.checked})} aria-label=${p} /><span class="track"></span></label>
      </div>`,c=t.list&&(t.maint||t.routine),d=this._scoreOn();return n`<div class="sub-overline" id="levar">Levar para o ResolvIA</div>
        <p class="sub-lead">Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data${d?" e os pontos":""}. Concluir lá vale como feito aqui${d?" (os pontos v\xE3o para quem concluiu)":""} e a tarefa volta com a data seguinte.</p>
        <label class="field" style="margin:6px 0 4px">
          <span class="flabel">Lista</span>
          <select class="select" aria-label="Lista do ResolvIA" @change=${l=>i({list:l.target.value||null})}>
            <option value="" ?selected=${!t.list}>Nenhuma (não levar)</option>
            ${s.map(l=>n`<option value=${l.id} ?selected=${t.list===l.id}>${l.name}${l.features&de.DUE_DATE?"":" (sem prazo)"}</option>`)}
            ${t.list&&!s.some(l=>l.id===t.list)?n`<option value=${t.list} selected>${t.list} (não encontrada)</option>`:u}
          </select>
        </label>
        ${r(t.maint,"Manuten\xE7\xF5es","A pr\xF3xima data de cada manuten\xE7\xE3o.","maint")}
        ${r(t.routine,"Rotina da casa","A pr\xF3xima vez de cada rotina.","routine")}
        ${a.problem?n`<p class="data-note">${a.problem}</p>`:c?n`<p class="sub-lead with-icon">${L("circle-check")}<span>${E(a.count||0,"tarefa","tarefas")} na lista. Elas não se repetem no card de Tarefas daqui.</span></p>`:u}`}_resolviaOn(){return this._app("resolvia_on",!1)===!0}_renderTodosSettings(){let e=this._resolviaOn(),t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada.":"Desligada."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${_=>this._saveAppPrefs({resolvia_on:_.target.checked?!0:null})} aria-label="Usar a integração com o ResolvIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="resolvia">
          ${this._secHead("list-checks","Tarefas do ResolvIA")}
          ${t}
        </div>`;let{lists:a,app:s}=this._todosAll(),i=this._listOwners(),r=this._ownersFromResolvia(),c=this._todoOwners(),d=(_,y)=>{let b={...i};y?b[_]=y:delete b[_],this._saveAppPrefs({todo_owner:Object.keys(b).length?b:null})},l=this._app("todo_hidden",null)||[],p=(_,y)=>this._saveAppPrefs({todo_hidden:y?l.filter(b=>b!==_):[...l,_]}),h=a.filter(_=>!_.hidden),f=h.reduce((_,y)=>_+y.due,0),m=h.reduce((_,y)=>_+y.overdue,0),v=`${E(a.length,"lista","listas")} \xB7 ${E(f,"tarefa com prazo","tarefas com prazo")}${m?`, ${E(m,"atrasada","atrasadas")}`:""}.`,$=a.length?s?{tone:"ok",title:`Conectado ao ResolvIA ${s.versao||""}`.trim(),text:`${v} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${v} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."};return n`<div class="panel" id="resolvia">
        ${this._secHead("list-checks","Tarefas do ResolvIA")}
        ${t}
        <div class="ai-state ${$.tone}"><span class="dot"></span><div><b>${$.title}</b><span>${$.text}</span></div></div>
        ${a.length?n`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">No dia do prazo.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${_=>this._saveAppPrefs({todo_off_calendar:_.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="row switch-row">
                <div class="grow"><div class="label">Tarefas sem prazo na Agora</div><div class="hint">Depois das que têm prazo.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated",!1)} @change=${_=>this._saveAppPrefs({todo_undated:_.target.checked?!0:null})} aria-label="Tarefas sem prazo na Agora" /><span class="track"></span></label>
              </div>
              ${this._todoOwners().length?n`<div class="row switch-row">
                    <div class="grow"><div class="label">Criar tarefas nas listas dos outros</div><div class="hint" style="white-space:normal">Para pedir algo a outra pessoa da casa.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("todo_create_any",!1)===!0} @change=${_=>this._saveAppPrefs({todo_create_any:_.target.checked?!0:null})} aria-label="Criar tarefas nas listas dos outros" /><span class="track"></span></label>
                  </div>`:u}
              <div class="sub-overline">Listas</div>
              ${r?n`<p class="sub-lead">Escolha quais listas entram. De quem é cada uma se escolhe no ResolvIA (⋯ › Personalizar): a lista de uma pessoa só aparece no CronologIA dela.</p>`:this._todoOwners().length?n`<p class="sub-lead">Escolha quais listas entram e, se quiser, de quem é cada uma: a lista de uma pessoa só aparece no CronologIA dela (na Agora, no calendário e no Novo › Tarefa). Num aparelho sem pessoa da casa, aparece tudo.</p>`:u}`:u}
        ${Z(a,_=>_.id,_=>n`<div class="row switch-row ${_.hidden?"off":""}">
            <span class="tile" style=${P(ee(Be),this._dark)}>${L("list-checks")}</span>
            <div class="grow"><div class="label">${_.name}</div><div class="hint">${_.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":_.info==="resolvia"?"prazos desligados no ResolvIA":_.due?`${E(_.due,"tarefa com prazo","tarefas com prazo")}${_.overdue?` \xB7 ${E(_.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div>
              ${r?i[_.id]&&!_.hidden?n`<div class="owner-of">${L("user-round")}<span>De ${i[_.id]}</span></div>`:u:c.length&&!_.hidden?n`<div class="owner-pick" role="radiogroup" aria-label="De quem é ${_.name}">
                    <span class="op-l">De quem é</span>
                    ${["",...c].map(y=>{let b=y?D(i[_.id]||"")===D(y):!i[_.id];return n`<button class=${b?"on":""} role="radio" aria-checked=${b?"true":"false"} @click=${()=>d(_.id,y)}>${y||"Todos"}</button>`})}
                  </div>`:u}
            </div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!_.hidden} @change=${y=>p(_.id,y.target.checked)} aria-label="Mostrar ${_.name}" /><span class="track"></span></label>
          </div>`)}
        ${a.length?this._renderMirrorSettings(a):u}
        ${a.length&&this._writable().length?n`<button class="row" @click=${()=>this._openBring()}>
              <span class="tile" style=${P(this._accent(),this._dark)}>${L("download")}</span>
              <span class="grow"><div class="label">Trazer uma lista para o CronologIA</div><div class="hint" style="white-space:normal">Cada tarefa vira uma Rotina da casa.</div></span>
              ${L("chevron-right")}
            </button>`:u}
      </div>`}_openBring(){this._openSheet("bring",{step:"pick",listId:null,preview:null,chosen:[],cal:this._kindCal("rotina"),error:null,busy:!1})}async _bringLoad(e){this._setForm({listId:e,step:"loading",error:null});try{let t=await this.api.bringPreview(e);if(this._sheet!=="bring")return;this._setForm({step:"review",preview:t,chosen:t.items.filter(a=>!a.exists).map(a=>a.uid)})}catch(t){this._setForm({step:"pick",error:t.message})}}async _bringRun(){let e=this._form;if(!(!e.chosen.length||e.busy)){this._setForm({busy:!0,error:null});try{let t=await this.api.bring(e.listId,e.cal,e.chosen,!0),a=this._cal(t.calendar);await this._closeSheet(),this._haptic("success"),this._showToast(`${E(t.created,"rotina criada","rotinas criadas")}${a?` em ${q(a.name,18)}`:""}${t.removed?" \xB7 tiradas do ResolvIA":""}`)}catch(t){this._sheet==="bring"&&this._setForm({busy:!1,error:t.message})}}}_renderBringSheet(){let e=this._form,t=new Date(this._now),a=(r,c)=>n`<div class="sheet-head">
        ${c?n`<button class="icon-btn back" @click=${c} aria-label="Voltar">${L("chevron-left")}</button>`:u}
        <h3 class="display">${r}</h3>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${L("x")}</button>
      </div>`,s=e.error?n`<div class="imp-error">${L("circle-alert")}<span>${e.error}</span></div>`:u;if(e.step==="loading")return n`${a("Trazer do ResolvIA")}<div class="imp-loading"><span class="spin">${L("loader-circle")}</span><span>Lendo a lista…</span></div>`;if(e.step==="review"&&e.preview){let r=e.preview,c=new Set(e.chosen),d=h=>this._setForm({chosen:c.has(h)?e.chosen.filter(f=>f!==h):[...e.chosen,h]}),l=this._writable(),p=h=>{let f=O(h.date),m=U(f,t)===0?"hoje":B(f,t,{long:!1,cap:!1});return`${h.every?`a partir de ${m}`:m}${h.time?` \xE0s ${h.time}`:""}`};return n`
          ${a(r.name,()=>this._setForm({step:"pick",preview:null,error:null}))}
          <p class="sheet-note top">Cada tarefa marcada vira uma <b>Rotina da casa</b>.${r.canDelete?" Depois, ela sai do ResolvIA.":""}</p>
          ${r.items.length?n`<div class="bring-list">
                ${r.items.map(h=>n`<button class="bring-row ${c.has(h.uid)?"":"off"}" role="checkbox" aria-checked=${c.has(h.uid)?"true":"false"} @click=${()=>d(h.uid)}>
                    <span class="chk sq ${c.has(h.uid)?"on":""}">${c.has(h.uid)?L("check"):u}</span>
                    <span class="bring-tx"><b>${h.summary}</b><small>${[h.points>0?`+${h.points}`:"",h.every?`volta ${E(h.every,"dia","dias")} depois de feita`:"s\xF3 uma vez",p(h),h.exists?"j\xE1 existe uma rotina com esse nome":""].filter(Boolean).join(" \xB7 ")}</small></span>
                  </button>`)}
              </div>`:n`<p class="empty-line">Nenhuma tarefa para trazer nessa lista.</p>`}
          ${r.items.length>1?n`<div class="bring-all"><button class="text-btn" @click=${()=>this._setForm({chosen:e.chosen.length===r.items.length?[]:r.items.map(h=>h.uid)})}>${e.chosen.length===r.items.length?"Desmarcar todas":"Marcar todas"}</button></div>`:u}
          ${l.length>1?n`<div class="field"><span class="flabel">Calendário das rotinas</span>
                <div class="chip-row">${l.map(h=>n`<button class="pick list ${e.cal===h.id?"on":""}" style=${P(h.color,this._dark)} @click=${()=>this._setForm({cal:h.id})}><span class="dot"></span><span>${q(h.name,22)}</span></button>`)}</div>
              </div>`:u}
          ${s}
          <div class="sheet-actions">
            <button class="btn primary" ?disabled=${!e.chosen.length||e.busy} @click=${()=>this._bringRun()}>${L("download")}${e.busy?"Trazendo\u2026":e.chosen.length?`Trazer ${E(e.chosen.length,"tarefa","tarefas")}`:"Nenhuma marcada"}</button>
          </div>`}let i=this._todosAll().lists.filter(r=>!r.unavailable);return n`
        ${a("Trazer do ResolvIA")}
        <p class="sheet-note top">Escolha a lista.</p>
        <div class="bring-lists">
          ${i.map(r=>n`<button class="row" @click=${()=>this._bringLoad(r.id)}>
              <span class="tile" style=${P(ee(Be),this._dark)}>${L("list-checks")}</span>
              <span class="grow"><div class="label">${r.name}</div><div class="hint">${E(r.open,"tarefa pendente","tarefas pendentes")}</div></span>
              ${L("chevron-right")}
            </button>`)}
        </div>
        ${s}`}};var ve=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,Go=o=>o>1048576?`${(o/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(o/1024))} KB`,Zo={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar"},Ni=o=>class extends o{_dateTime(e){let t=new Date(e),a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} \xE0s ${a(t.getHours())}:${a(t.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(e){this._backups={available:!1,error:e.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let e=await this.api.createBackup();this._showToast(`Backup salvo em ${e.folder}/${e.name}`),this._haptic("success"),await this._loadBackups()}catch(e){this._showToast(`N\xE3o consegui criar o backup. ${e.message}`)}this._busy=null,this.requestUpdate()}_exportData(e,t){!this.api.dataUrl||!this.api.dataUrl(e)?(t.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):e!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let e=this.renderRoot.querySelector("#cr-data-import");e&&(e.value="",e.click())}_onDataImport(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${q(t.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(t);this._haptic("success"),this._showToast(`Importado: ${E(a.calendars,"agenda","agendas")} e ${E(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(e){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(e.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(e.name),this._showToast("Backup restaurado")}catch(t){this._showToast(t.message)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let e=await this.api.versions();this._sheet==="versions"&&this._setForm({list:e})}catch(e){this._sheet==="versions"&&this._setForm({error:e.message})}}_confirmRestoreVersion(e){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(e.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(e.name),this._showToast("Vers\xE3o restaurada")}catch(t){this._showToast(t.message)}}})}_renderVersions(){let e=this._form;return n`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${e.error?n`<div class="imp-error">${ve("circle-alert")}<span>${e.error}</span></div>`:e.list==null?n`<div class="imp-loading"><span class="spin">${ve("loader-circle")}</span><span>Carregando…</span></div>`:e.list.length?n`<div class="data-list">
                  ${e.list.map(t=>n`<div class="data-item"><div><b>${this._dateTime(t.when)}</b><span>${E(t.calendars,"agenda","agendas")} · ${E(t.points,"ponto","pontos")} · ${Zo[t.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(t)}>Restaurar</button></div>`)}
                </div>`:n`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let e=this._backups,t=this._writable(),a=(i,r,c)=>n`<li><div class="ot"><b>${i}</b><span>${r}</span></div>${c}</li>`,s=(i,r)=>n`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(i)||"#"} download @click=${c=>this._exportData(i,c)}>${ve("download")}${r}</a>`;return n`<div id="dados">
        <div class="panel">
          ${this._secHead("download","Exportar")}
          <ul class="opts">
            ${a("Eventos (CSV)","Abre no Excel e no Google Planilhas, com um evento por linha.",s("csv","Baixar CSV"))}
            ${a("Agenda (.ics)","Os eventos dos calend\xE1rios que voc\xEA escolher, para abrir no Google Agenda, no Outlook ou no iPhone.",n`<button class="btn outline sm" @click=${()=>this._openExport()}>${ve("calendar")}Escolher</button>`)}
            ${a("Dados completos (JSON)","Os ajustes, modelos, marca\xE7\xF5es e pontos do app, para backup ou para outro sistema.",s("json","Baixar JSON"))}
            ${a("Tudo (ZIP)","Os dados do app, os eventos de cada calend\xE1rio em .ics e as planilhas de eventos e pontos num arquivo s\xF3.",s("zip","Baixar ZIP"))}
          </ul>
        </div>
        <div class="panel">
          ${this._secHead("archive","Backup na pasta share",n`Cópia completa em <code>share/cronologia</code>.`)}
          <div class="btn-row sec-actions">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||e&&e.available===!1} @click=${()=>this._createBackup()}>${ve("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${e&&e.available===!1?n`<p class="data-note">A pasta share não está disponível para o app.</p>`:u}
          ${e&&e.backups&&e.backups.length?n`<div class="data-list">
                ${e.backups.slice(0,8).map(i=>n`<div class="data-item"><div><b>${this._dateTime(i.date)}</b><span title=${i.name}>${Go(i.size)} · ${i.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(i)}>${ve("archive-restore")}Restaurar</button></div>`)}
              </div>`:u}
        </div>
        <div class="panel">
          ${this._secHead("upload","Importar","Um .zip ou .json exportado pelo CronologIA.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._pickDataImport()}>${ve("upload")}Escolher arquivo</button></div>
        </div>
        <div class="panel">
          ${this._secHead("calendar-plus","Importar eventos (.ics)","Eventos de um convite ou de outra agenda.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" ?disabled=${!t.length} @click=${()=>this._openImport("ics")}>${ve("upload")}Escolher .ics</button></div>
        </div>
        <div class="panel">
          ${this._secHead("archive-restore","Vers\xF5es anteriores","Uma c\xF3pia a cada 10 minutos de uso e antes de importar ou restaurar. Ficam as 3 mais recentes.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._openVersions()}>${ve("archive-restore")}Ver versões</button></div>
        </div>
        <div class="panel">
          ${this._secHead("database","Onde ficam os dados",n`Os eventos ficam nos calendários; os ajustes do app, em <code>/data/cronologia.json</code>.`)}
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${i=>this._onDataImport(i)} />
      </div>`}};var Ri="https://github.com/diegozapella63",er=[["CronologIA","cronologia-ha","calendar-days","Agenda da fam\xEDlia, rem\xE9dios, rotinas e placar."],["ResolvIA","resolvia-ha","list-checks","Listas de tarefas com prazos, pontos e repeti\xE7\xE3o."],["GerencIA","gerencia-ha","wallet","Finan\xE7as da casa: caixa, cart\xF5es e investimentos."],["InventarIA","inventario-ha","package","Invent\xE1rio da casa: c\xF4modos, itens e valores."],["EconomIA","economia-ha","receipt","Lista de compras com o melhor pre\xE7o perto de casa."],["MemorIA","memoria-ha","book-open","Cadernos de anota\xE7\xE3o que abrem na hora certa."]],Ue=o=>n`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.info)}</svg>`,tr=o=>n`<span class="ab-wm">${o.slice(0,-2)}<span>${o.slice(-2)}</span></span>`,Ii=(o,e,t)=>n`<a class=${t} href=${o} target="_blank" rel="noopener">${e}</a>`;function Pi({app:o,version:e}){return n`<div class="about">
    <div class="about-hero">
      <span class="ab-mark" aria-hidden="true">${Ue("zap")}</span>
      <h2 class="ab-name">Correr<span>IA</span> Code</h2>
      <p class="ab-what">desenvolvimento de softwares</p>
      <p class="ab-tag">Feito na correria, rodado pela IA.</p>
    </div>

    <div class="panel about-why">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${Ue("hourglass")}</span><h2>Por que CorrerIA?</h2></div>
      <p>Porque eu sou um programador sem tempo: vivo na correria. Então eu uso a IA para rodar tudo isso aqui. Ela escreve, testa e publica; eu dou as ideias e reclamo dos botões tortos.</p>
    </div>

    <div class="panel">
      <div class="mais-head"><span class="mais-ic" aria-hidden="true">${Ue("layers")}</span><h2>Os apps</h2></div>
      <ul class="about-apps" aria-label="Os apps">
        ${er.map(([t,a,s,i])=>n`<li>
            ${Ii(`${Ri}/${a}`,n`<span class="mais-ic" aria-hidden="true">${Ue(s)}</span>
                <span class="mb"><b class="ab-app">${tr(t)}${t===o?n`<em class="ab-here">Este app · v${e}</em>`:""}</b><span>${i}</span></span>
                ${Ue("external-link")}`,`ab-row${t===o?" here":""}`)}
          </li>`)}
      </ul>
    </div>

    ${Ii(Ri,n`${Ue("external-link")}Meu GitHub`,"btn primary ab-github")}
  </div>`}var Hi=qe`
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
`;var Li="cronologia.theme",ji="cronologia.mode",za={CREATE:1,DELETE:2,UPDATE:4},Ea=(o,e)=>(Number(o)&e)===e,De=48,ar={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},sr=o=>ar[o]||{label:o?W(o.replace(/_/g," ")):"Outros",icon:"calendar"},k=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se(K[o]||K.calendar)}</svg>`,Wt={get(o,e){try{let t=localStorage.getItem(o);return t==null?e:JSON.parse(t)}catch{return e}},set(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}},qa=(o,e,t,a,s)=>Re`<line class=${s} x1=${o} y1=${e} x2=${t} y2=${a}></line>`,Vi=(o,e)=>Re`<path class=${e} d=${o}></path>`,ir=o=>o.allDay?"Dia todo":`${H(o.start)} \u2013 ${H(o.end)}`,or=o=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o)}`,Oa=class extends Ai(Ni(Fi(zi(vi($e))))){static properties={_desk:{state:!0},api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Ls,js,Vs,Hi,me($s),me(Ss),me(ks),me(bi)];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=Vt(history.state&&history.state.rvPath||""),history.state&&history.state.rvPath!=null&&history.state.rvPath!==this._path&&history.replaceState({...history.state,rvPath:this._path},"");let e=$i();e&&(this._path=e,history.replaceState({...history.state||{},rvDepth:0,rvPath:e},"")),this._sheet=null,this._form=null,this._toast=null,this._theme=Wt.get(Li,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=F(new Date),this._mode=Wt.get(ji,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark(),this._deskMq=window.matchMedia?window.matchMedia("(min-width: 1000px)"):null,this._desk=!!(this._deskMq&&this._deskMq.matches),this._onDesk=()=>this._desk=!!this._deskMq.matches}connectedCallback(){super.connectedCallback(),Is(),window.addEventListener("popstate",this._onPopState),window.addEventListener("keydown",this._onKey),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._deskMq&&this._deskMq.addEventListener&&this._deskMq.addEventListener("change",this._onDesk),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),window.removeEventListener("keydown",this._onKey),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),this._deskMq&&this._deskMq.removeEventListener&&this._deskMq.removeEventListener("change",this._onDesk),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(e){e.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}_onKey=e=>{if(e.key!=="/"||e.ctrlKey||e.metaKey||e.altKey||this._sheet)return;let t=e.composedPath&&e.composedPath()[0]||e.target;t&&t.closest&&t.closest("input, textarea, select, [contenteditable]")||(e.preventDefault(),this._toSearch())};_toSearch(e=null){e!=null&&(this._query=e),this._focusSearch=!0,this._mode="lista",this._view().name!=="calendar"?this._go("/calendario"):this.requestUpdate()}updated(e){if(this.toggleAttribute("dark",this._dark),this._chatAfterRender(),this._focusSearch){let t=this.renderRoot.querySelector("input[data-q='buscar']");if(t){this._focusSearch=!1,t.focus({preventScroll:!0});try{t.setSelectionRange(t.value.length,t.value.length)}catch{}}}if(this._scrollWeek){let t=this.renderRoot.querySelector(".tgrid-scroll");if(t){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&J(this._cursor,a)?Math.max(0,a.getHours()-1):7;t.scrollTop=s*De}}if(e.has("_path")&&this._view().name==="more"){let t=this.renderRoot.querySelector(".more-tabs"),a=t&&t.querySelector("button.on");if(a){let i=a.offsetLeft,r=i+a.offsetWidth;i<t.scrollLeft?t.scrollLeft=i-8:r>t.scrollLeft+t.clientWidth&&(t.scrollLeft=r-t.clientWidth+8)}let s=this._view().tab;s==="integracoes"&&(this._refreshAi(!1),this._loadUsage()),s==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let e=this._theme==="dark"?!0:this._theme==="light"?!1:Us();e!==this._dark&&(this._dark=e)}_setTheme(e){this._theme=e,Wt.set(Li,e),this._syncDark()}async _start(){this._started=!0,this._store=new Rt(this.api,()=>this._ver++),this.api.onStatus(e=>this._online=e),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(e=>this._onCalendar(e)).catch(()=>{}),this.api.subscribePrefs(e=>this._setPrefs(e)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(e=>{let t=e&&e.test;t&&this._home&&t.at!==this._testSeen&&Date.now()-t.at<12e4&&(this._haptic("success"),this._showToast(`${t.person?`${t.person}: o`:"O"} bot\xE3o ${t.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=t&&t.at,this._home=e}).catch(()=>{})}async _boot(e){try{let t=await this.api.bootstrap();this._version=t.version||"",this._user=t.user||{name:""},this._ai=t.ai||this._ai,this._aiAt=Date.now(),this._loadVoice(),this._states=t.states||{},this._entities=t.entities||{},this._devices=t.devices||{},this._prefs=t.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),e&&this._store.reloadAll()}catch(t){this._ready||(this._bootError=t.message||String(t)),e||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(e){let t={...this._states},a=e.entity_id in t;e.new_state?t[e.entity_id]=e.new_state:delete t[e.entity_id],this._states=t,(!a||!e.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(e){e&&(this._prefs={calendars:e.calendars||{},app:e.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(e=>!e.hidden).map(e=>e.id))}_app(e,t){let a=this._prefs.app?this._prefs.app[e]:void 0;return a===void 0?t:a}_accentDaily(){return this._app("accent_daily",!0)!==!1}_accent(){return this._accentDaily()?As(tt,new Date(this._now||Date.now())):ee(this._app("accent","turquesa"))||ee("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let e=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},r=i.device_id?this._devices[i.device_id]:null,c=sr(i.platform),d=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:r,plat:c,orig:d}});e.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let t=e.map(({id:a,st:s,reg:i,dev:r,plat:c,orig:d},l)=>{let p=(this._prefs.calendars||{})[a]||{},h=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:p.name||d,origName:d,group:c.label,icon:c.icon,device:r?r.name_by_user||r.name:null,color:ee(p.color)||Ks(l),colorId:p.color||null,hidden:!!p.hidden,features:h,canCreate:Ea(h,za.CREATE),canUpdate:Ea(h,za.UPDATE),canDelete:Ea(h,za.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:t},t}_cal(e){return this._cals().find(t=>t.id===e)}_visible(){return this._cals().filter(e=>!e.hidden)}_writable(){return this._cals().filter(e=>e.canCreate&&!e.unavailable)}_defaultCal(){let e=this._writable(),t=this._app("default_calendar",null),a=e.filter(i=>!i.hidden),s=a.find(i=>i.canUpdate&&i.canDelete)||a.find(i=>i.canDelete)||a[0];return(e.find(i=>i.id===t)||s||e[0]||{}).id||null}_events(e,t){this._store.ensure(e,t);let a=this._store.query(e,t);this._away()&&(a=a.filter(i=>!(i.kind&&(i.kind.kind==="rotina"||i.kind.kind==="manutencao")&&this._awayDay(i.start))));let s=[...this._gerenciaEvents(e,t),...this._todoEvents(e,t),...this._movedDoneEvents(e,t)];return s.length?[...a,...s].sort((i,r)=>i.start-r.start||Number(r.allDay)-Number(i.allDay)||i.summary.localeCompare(r.summary,"pt-BR")):a}_away(){let e=this._app("away",null);return e&&e.from&&e.to?e:null}_awayDay(e){let t=this._away(),a=z(e);return!!(t&&a>=t.from&&a<=t.to)}_awayNow(){return this._awayDay(new Date(this._now))}_renderAwayBanner(){let e=this._away(),t=new Date(this._now);if(!e||e.to<z(t))return u;let a=this._awayNow(),s=O(e.from),i=O(e.to),r=U(i,s)+1,c=U(F(t),s)+1,d=p=>B(p,t,{long:!1,cap:!1}),l=a?c>=r?"\xDAltimo dia":`Dia ${c} de ${r}`:`${E(r,"dia","dias")}, at\xE9 ${d(i)}`;return n`<div class="away-card ${a?"on":"ahead"}" role="status">
      <div class="aw-top">
        <span class="aw-ic" aria-hidden="true">${k("plane")}</span>
        <span class="aw-tx">
          <span class="aw-over">${a?"De f\xE9rias":"F\xE9rias marcadas"}</span>
          <b class="aw-title">${a?`at\xE9 ${d(i)}`:`a partir de ${d(s)}`}</b>
          <small>${l}</small>
        </span>
      </div>
      ${a?n`<div class="aw-bar" role="progressbar" aria-valuemin="1" aria-valuemax=${r} aria-valuenow=${Math.min(c,r)} aria-label="Dia ${Math.min(c,r)} de ${r}"><span style="width:${Math.round(Math.min(c,r)/r*100)}%"></span></div>`:u}
      <div class="aw-chips">
        <span class="aw-chip">${k("circle-pause")}Rotinas, tarefas e manutenção pausadas</span>
        <span class="aw-chip meds">${k("pill")}Remédios continuam</span>
      </div>
      <button class="text-btn aw-end" @click=${()=>this._saveAppPrefs({away:null})}>${a?"Encerrar f\xE9rias":"Cancelar f\xE9rias"}</button>
    </div>`}async _saveCalPrefs(e,t){try{this._setPrefs(await this.api.setCalendarPrefs(e,t))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(e){try{this._setPrefs(await this.api.setAppPrefs(e))}catch(t){this._showToast(`N\xE3o consegui salvar: ${t.message}`)}}_view(){return jt(this._path)}async _go(e,t=!1){e=Vt(e),this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=history.state||{},i={rvDepth:(a.rvDepth||0)+(t?0:1),rvPath:e},r=this._view();Bt(jt(e))&&(t?a.rvUp:r.name==="more"&&r.tab==="menu")&&(i.rvUp=!0),t?history.replaceState(i,""):history.pushState(i,""),this._path=e,e==="/calendario"&&(this._scrollWeek=!0);let c=this.renderRoot&&this.renderRoot.querySelector("main");c&&c.scrollTo({top:0,behavior:"instant"})}async _goMenu(){this._sheet&&await this._closeSheet(),history.state&&history.state.rvUp?await this._popEntry("rvUp"):await this._go("/mais",!0);let e=this.renderRoot&&this.renderRoot.querySelector("main");e&&e.scrollTo({top:0,behavior:"instant"})}_onSwipeStart(e){this._sw=this._sheet||this._cam?null:Ps(e,".month")}_onSwipeEnd(e){let t=Hs(e,this._sw);if(this._sw=null,!t||this._sheet)return;if(Bt(this._view())){if(t>0)return;this._haptic("light"),this._goMenu().then(()=>da(this,"more",t));return}let a=[["now",""],["calendar","/calendario"],this._fourthTab(),["more","/mais"]],s=a.findIndex(([r])=>r===this._shownView().name),i=s+t;s<0||i<0||i>=a.length||(this._haptic("light"),this._goTab(a[i][1]),da(this,a[i][0],t))}async _goTab(e){let t=this._view();if(e==="/mais"&&t.name==="more"){if(Bt(t))return this._goMenu();let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}e!==""&&this._sheet&&await this._closeSheet(),e!==""&&history.state&&history.state.rvUp&&await this._popEntry("rvUp");let a=this._view().name;if(e===""){if(a==="now"){let i=this.renderRoot.querySelector("main");i&&i.scrollTo({top:0});return}let s=history.state&&history.state.rvDepth||0;s>0?history.go(-s):this._go("",!0);return}if(e==="/calendario"&&a==="calendar"){this._cursor=F(new Date),this._scrollWeek=!0;return}this._go(e,a!=="now")}_openDay(e,t){this._cursor=F(e),t&&this._setMode(t),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(e){this._mode=e,Wt.set(ji,e),this._scrollWeek=!0}_popEntry(e){if(!(history.state&&history.state[e]))return Promise.resolve();let t=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(r=>r!==s),this._popping===t&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=t,history.back(),t}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let e=history.state&&history.state.rvPath||"",t=Vt(e);t!==e&&history.replaceState({...history.state,rvPath:t},""),t!==this._path&&(this._path=t);for(let a of[...this._popWaiters||[]])a()}async _openSheet(e,t=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=e,this._form=t,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._stopVoice(),this._chatStop(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(e){this._form={...this._form,...e}}_openInHA(e){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(e)}_haptic(e){this.env&&this.env.haptic&&this.env.haptic(e)}_showToast(e,t=null){clearTimeout(this._toastTimer),this._toast={text:e,action:t,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,t?5e3:2800)}_userName(){let e=Dt();return(this._user&&this._user.name||e&&e.user&&e.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let e=Dt();return e&&e.user?!!e.user.is_admin:!0}_openEvent(e){if(e.movedDone)return e.movedDone.item?this._openIndexItem(e.movedDone.item):this._showToast(`${q(e.summary,30)}: feita ${B(O(e.movedDone.day),new Date(this._now),{long:!1,cap:!1})}${e.movedDone.by?` por ${e.movedDone.by}`:""}`);if(e.gerencia){this._openSheet("bill",{b:{id:e.gerencia.id,c:e.gerencia}});return}if(e.todo){this._openSheet("todo",{key:e.todo.key});return}this._openSheet("event",{ev:e})}_money(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:e=null,date:t=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(e&&e.kind)return this._openKindForm({ev:e,copy:i});if(!this._writable().length&&!(e&&!i)){this._openSheet("nocal",{});return}let c;if(e){let d=e.allDay?C(e.end,-1):e.end;c={mode:i?"add":"edit",cal:i?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._defaultCal():e.cal,origCal:e.cal,uid:e.uid,rid:i?null:e.rid,title:e.summary,allDay:e.allDay,date:z(e.start),endDate:e.allDay?U(d,e.start)>0?z(d):"":J(e.start,e.end)?"":z(e.end),start:e.allDay?"09:00":H(e.start),end:e.allDay?"10:00":H(e.end),repeat:st(e.rrule),rrule:e.rrule||"",location:e.location,notes:e.description}}else{let d=t?F(t):F(new Date),l=new Date,p=a??(J(d,l)?Math.min(23,l.getHours()+1):9),h=f=>String(f).padStart(2,"0");c={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:z(d),endDate:"",start:`${h(p)}:00`,end:`${h(Math.min(23,p+1))}:${p+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}if(c.details=!!(String(c.location||"").trim()||String(c.notes||"").trim()),c.mode==="edit")try{c.before=this._eventFromForm(c)}catch{c.before=null}this._openSheet("form",c),c.mode==="add"&&!c.title&&this.updateComplete.then(()=>{let d=this.renderRoot.querySelector(".sheet .ev-title-input");d&&d.focus()})}_eventFromForm(e,{keepRrule:t=!0}={}){if(e.kind)return this._kindEvents(e,{keepRrule:t})[0];let a=(e.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||""))throw new Error("Escolha a data");let s={summary:a};if(e.allDay){let i=e.endDate&&e.endDate>e.date?e.endDate:e.date;s.start=e.date,s.end=z(C(O(i),1))}else{let[i,r]=(e.start||"09:00").split(":").map(Number),[c,d]=(e.end||e.start||"10:00").split(":").map(Number),l=O(e.date),p=new Date(l.getFullYear(),l.getMonth(),l.getDate(),i,r),h=e.endDate&&e.endDate>e.date?O(e.endDate):l,f=new Date(h.getFullYear(),h.getMonth(),h.getDate(),c,d);f<=p&&(f=C(f,1)),f-p<6e4&&(f=new Date(p.getTime()+30*6e4)),s.start=re(p),s.end=re(f)}if((e.location||"").trim()&&(s.location=e.location.trim()),(e.notes||"").trim()&&(s.description=e.notes.trim()),t){let i=e.rrule&&st(e.rrule)===e.repeat?e.rrule:e.repeat?`FREQ=${e.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let e=this._form;if(e.kind)return this._saveKindForm();let t;try{t=this._eventFromForm(e)}catch(s){this._showToast(s.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(e.mode==="edit"&&e.rid&&a.canUpdate){this._openSheet("scope",{action:"edit",...e,event:t});return}this._setForm({saving:!0});try{e.mode==="add"?(await this.api.createEvent(e.cal,t),this._done(`Evento criado em ${q(a.name,24)}`,e.cal,t.start)):e.cal!==e.origCal?(await this.api.createEvent(e.cal,t),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`Evento movido para ${q(a.name,24)}`,e.cal,t.start)):(await this._saveInPlace(e,t),this._done(e.rid&&!a.canUpdate?"Evento salvo \xB7 a s\xE9rie recome\xE7a neste dia":"Evento salvo",e.cal,t.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}async _saveInPlace(e,t){let a=this._cal(e.cal);if(!a||a.canUpdate)return this.api.updateEvent(e.cal,e.uid,t);if(!(a.canCreate&&a.canDelete))throw new Error("Esse calend\xE1rio n\xE3o deixa mudar eventos");await this.api.deleteEvent(e.cal,e.uid);try{await this.api.createEvent(e.cal,t)}catch(s){throw e.before&&await this.api.createEvent(e.cal,e.before).catch(()=>{}),s}}_canEdit(e){let t=this._cal(e);return!!t&&(t.canUpdate||t.canCreate&&t.canDelete)}_done(e,t,a){this._haptic("success"),this._closeSheet(),this._store.refresh(t);let s=a?F(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?O(a):a)):null;this._showToast(e,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(e){let t=this._form,a={recurrenceId:t.rid,range:e==="future"?"THISANDFUTURE":void 0};try{if(t.action==="edit"){let s=t.event;e==="one"&&(s=this._eventFromForm(t,{keepRrule:!1})),await this.api.updateEvent(t.cal,t.uid,s,a),this._done(e==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",t.cal,s.start)}else await this.api.deleteEvent(t.cal,t.uid,e==="all"?{}:a),this._done(e==="all"?"A s\xE9rie toda foi apagada":e==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",t.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(e){if(e.rid){this._openSheet("scope",{action:"delete",cal:e.cal,uid:e.uid,rid:e.rid,title:e.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${q(e.summary,28)}\u201D?`,text:`${W(B(e.start,new Date(this._now)))} \xB7 ${ir(e)}. Ele sai do calend\xE1rio ${q((this._cal(e.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(e.cal,e.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(e.cal);let t={summary:e.summary,start:e.raw.start,end:e.raw.end};e.location&&(t.location=e.location),e.description&&(t.description=e.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(e.cal,t).then(()=>this._store.refresh(e.cal)).catch(a=>this._showToast(a.message))})}catch(t){this._showToast(`N\xE3o consegui apagar: ${t.message}`)}}})}_openImport(e="pick",t={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:e==="text"?"text":e==="voice"?"voice":"pick",rec:e==="voice"?"starting":"off",text:"",images:[],items:[],provider:null,error:null,note:null,...t});return e==="photos"&&this._pickFiles("photos"),e==="scan"&&this._openCamera(),e==="text"&&this._focusSheetText(),e==="ics"&&this._pickFiles("ics"),e==="voice"&&s.then(()=>this._startVoice()),s}async _loadVoice(e=!1){if(this.api.voiceStatus){try{this._voice=await this.api.voiceStatus(e)}catch(t){this._voice={ready:!1,reason:t.message}}this.requestUpdate()}}async _chooseVoice(e){await this._saveAppPrefs({voice_engine:e||null}),await this._loadVoice(!0),this._showToast("Fala para texto atualizada")}_renderVoicePanel(){let e=this._voice,t=this._app("voice_engine","")||"",a=e&&e.options||[],s=!e||this._voiceChecking,i=s?"off":e.ready&&!e.missing?"ok":e.ready?"warn":"bad",r=s?"Verificando\u2026":e.ready?"Pronto para ouvir":"Sem fala para texto",c=s?"":e.ready?`Transcreve com ${e.name}.${e.missing?" O escolhido n\xE3o foi encontrado: usando o autom\xE1tico.":""}`:e.reason||"",d=async()=>{this._voiceChecking=!0,this.requestUpdate(),await this._loadVoice(!0),this._voiceChecking=!1,this.requestUpdate()};return n`<div class="panel" id="falar">
      ${this._secHead("mic","Falar","Quem transforma a fala em texto. N\xE3o muda o assistente de voz do Home Assistant.")}
      <div class="ai-state ${i}"><span class="dot"></span><div><b>${r}</b>${c?n`<span>${c}</span>`:u}</div></div>
      ${a.length||t?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">Fala para texto</span>
            <select class="select" aria-label="Fala para texto" @change=${l=>this._chooseVoice(l.target.value)}>
              <option value="" ?selected=${!t}>Automático${e&&e.auto?`: ${e.auto.name}`:""}</option>
              ${a.map(l=>n`<option value=${l.id} ?selected=${l.id===t}>${l.name}</option>`)}
              ${t&&!a.some(l=>l.id===t)?n`<option value=${t} selected>${t} (não encontrado)</option>`:u}
            </select>
          </label>`:u}
      <div class="ai-actions"><button class="btn outline" ?disabled=${s} @click=${d}>${k("rotate-ccw")}Verificar de novo</button></div>
      ${e&&!e.ready?n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>Com o Home Assistant Cloud, a fala para texto já vem pronta.</li>
              <li>Sem ele, instale um motor de fala: o app Whisper (local, de graça) com a integração Wyoming, ou a fala para texto de uma IA como Google Gemini ou OpenAI.</li>
              <li>Volte aqui, toque em Verificar de novo e escolha o motor na lista.</li>
            </ol>
          </div>`:u}
    </div>`}async _startVoice(){if(this._rec||!this._form)return;this._setForm({step:"voice",rec:"starting",secs:0,level:0,error:null,heard:""});let e=new Le(t=>this._voiceLevel=t);this._rec=e;try{await e.start()}catch(t){e.cancel(),this._rec===e&&(this._rec=null),this._form&&this._form.step==="voice"&&this._setForm({rec:"off",error:Pt(t)});return}if(this._rec!==e||!this._form||this._form.step!=="voice")return e.cancel();this._setForm({rec:"on"}),clearInterval(this._recTimer),this._recTimer=setInterval(()=>{if(this._rec!==e)return clearInterval(this._recTimer);let t=e.seconds();this._setForm({secs:t,level:this._voiceLevel||0}),t>=120&&this._finishVoice()},120)}_stopVoice(){clearInterval(this._recTimer),this._rec&&this._rec.cancel(),this._rec=null}async _finishVoice(){let e=this._rec;if(!e)return;clearInterval(this._recTimer),this._rec=null;let t=e.stop();if(t.length<16e3*.4){this._setForm({rec:"off",error:"N\xE3o ouvi nada. Toque no microfone e fale."});return}let a=this._importToken=(this._importToken||0)+1;this._setForm({step:"loading",error:null,prevStep:"voice",loadingText:"Transcrevendo o que voc\xEA disse\u2026"});try{let s=await this.api.voiceText(t);if(this._importToken!==a||!this._form)return;this._setForm({text:s.text,heard:s.text}),this._readText()}catch(s){if(this._importToken!==a||!this._form)return;this._setForm({step:"voice",rec:"off",error:s.message||"N\xE3o consegui transcrever."})}}_renderMicBtn(){let e=this._voice;return!e||!e.ready||!this._aiOn()||!(this._ai&&this._ai.ready)?u:n`<button class="mic-top" aria-label="Falar: criar evento falando" title="Falar" @click=${()=>this._openImport("voice")}>${k("mic")}</button>`}_renderVoiceStep(e){let t=this._form,a=this._voice||{},s=t.rec==="on",i=Math.floor((t.secs||0)/60),r=String(Math.floor((t.secs||0)%60)).padStart(2,"0");return n`
      ${this._sheetHead("Falar")}
      <div class="voice ${s?"on":""}">
        <button class="voice-mic" style="--lvl:${s?(t.level||0).toFixed(2):0}" aria-label=${s?"Pronto: enviar o que falei":"Come\xE7ar a falar"} @click=${()=>s?this._finishVoice():this._startVoice()}>
          <span class="voice-ring"></span>${k(s?"check":"mic")}
        </button>
        <div class="voice-state">${s?n`<b>Ouvindo…</b> <span class="voice-time">${i}:${r}</span>`:t.rec==="starting"?"Abrindo o microfone\u2026":"Toque no microfone e fale"}</div>
        <p class="voice-hint">${s?"Toque de novo quando terminar.":n`Por exemplo: <i>“Dentista quinta às 15h na Clínica Sorriso”</i> ou <i>“Aniversário da Ana sábado, o dia todo”</i>.`}</p>
      </div>
      ${t.error?n`<div class="imp-error">${k("circle-alert")}<span>${t.error}</span></div>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${!s} @click=${()=>this._finishVoice()}>${k("sparkles")}Pronto</button>
      </div>
      ${a.ready?u:n`<p class="sheet-note">${a.reason||""}</p>`}
    `}_focusSheetText(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".sheet textarea");e&&e.focus()})}_pickFiles(e){let t=this.renderRoot.querySelector(e==="scan"?"#cr-scan":e==="ics"?"#cr-ics":"#cr-photos");t&&(t.value="",t.click())}_releaseImages(){let e=this._form;if(e&&e.images)for(let t of e.images)t.url&&URL.revokeObjectURL(t.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(e){let t=[...e.target.files||[]].filter(i=>!i.type||i.type.startsWith("image/")).slice(0,6);if(e.target.value="",!t.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let s=[];for(let i of t)s.push(await ga(i));this._readImages(s,a)}async _onIcsFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let a;try{a=di(await t.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:t.name,note:null,error:null})}_readImages(e,t){if(this._sheet!=="import"||!e.length)return;let a=t?[...this._form.images||[],...e]:(this._releaseImages(),e);this._setForm({step:"loading",images:a,prevStep:t?"review":"pick",loadingText:e.length>1?`Lendo ${e.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:e,appending:t})}async _runExtract({text:e,images:t,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",r=a?this._form.items||[]:[];try{let c=await this.api.extract({text:e,images:t?t.map(({data:l,mime:p})=>({data:l,mime:p})):void 0});if(!i())return;let d=c.events||[];if(!d.length){let l=e?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:l}):this._setForm({step:e?"text":"pick",error:l});return}this._haptic("success"),this._setForm({step:"review",items:[...r,...d.map(l=>({...l,on:!0}))],provider:c.provider||null,note:null,error:null})}catch(c){if(!i())return;a?this._setForm({step:"review",note:c.message||"Algo deu errado"}):this._setForm({step:e?"text":"pick",error:c.message||"Algo deu errado"})}}_readText(){let e=(this._form.text||"").trim();if(!e)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Configura\xE7\xF5es \u203A Integra\xE7\xF5es)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:e})}_clipOk(){return!!(navigator.clipboard&&navigator.clipboard.readText)&&!this._clipFailed}async _pasteClipboard(){let e="";try{e=await navigator.clipboard.readText()}catch{this._clipFailed=!0,this._focusSheetText(),this._showToast("Este aparelho n\xE3o deixa o app ler o que foi copiado. Toque e segure no campo e escolha Colar."),this.requestUpdate();return}if(!e){this._focusSheetText(),this._showToast("N\xE3o h\xE1 nada copiado.");return}this._setForm({text:e,error:null})}_setItem(e,t){let a=this._form.items.slice();a[e]={...a[e],...t},this._setForm({items:a})}_itemEvent(e){let t=s=>{let[i,r]=s.split(":").map(Number),c=Math.min(1439,i*60+r+60);return`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[e.repeat]||"";return this._eventFromForm({title:e.title,date:e.date,endDate:e.end_date||"",allDay:!e.start,start:e.start,end:e.end||(e.start?t(e.start):""),repeat:e.rrule?st(e.rrule):a,rrule:e.rrule||"",location:e.location,notes:e.notes})}async _importAdd(){let e=this._form,t=e.items.filter(r=>r.on&&(r.title||"").trim()),a=this._cal(e.target);if(!t.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let r of t)try{let c=this._itemEvent(r);await this.api.createEvent(e.target,c),s++,(!i||c.start<i)&&(i=c.start)}catch(c){this._showToast(`\u201C${q(r.title,24)}\u201D: ${c.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${E(s,"evento adicionado","eventos adicionados")} em ${q(a.name,20)}`,e.target,i)}async _openCamera(){let e=navigator.mediaDevices,t=!!(this._form&&this._form.step==="review");if(!e||!e.getUserMedia){this._cam={status:"error",shots:[],appending:t,flash:0,error:window.isSecureContext===!1?"A c\xE2mera aqui dentro s\xF3 funciona quando o Home Assistant \xE9 aberto por um endere\xE7o seguro (https), como o do Home Assistant Cloud ou o seu endere\xE7o externo. Neste endere\xE7o (http), escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher.":"Este navegador n\xE3o deixa o app usar a c\xE2mera. Escolha uma foto: d\xE1 para tirar na hora pela c\xE2mera do celular e depois escolher."};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}return}this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:t,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await e.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(c=>c.stop());return}this._stream=a;let s=a.getVideoTracks()[0],i=s&&s.getCapabilities?s.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!i.torch},await this.updateComplete;let r=this.renderRoot.querySelector(".cam video");r&&(r.srcObject=a,r.play().catch(()=>{}))}catch(a){if(!this._cam)return;let s=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:s?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(e=>e.stop()),this._stream=null}_closeCamera(e=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let t of this._cam.shots||[])URL.revokeObjectURL(t.url);this._cam=null,e||this._popEntry("rvCam")}}async _toggleTorch(){let e=this._stream&&this._stream.getVideoTracks()[0];if(!e)return;let t=!this._cam.torch;try{await e.applyConstraints({advanced:[{torch:t}]}),this._cam={...this._cam,torch:t}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let e=this.renderRoot.querySelector(".cam video");if(!e||!e.videoWidth||!this._cam||this._cam.shots.length>=6)return;let t=1800,a=Math.min(1,t/Math.max(e.videoWidth,e.videoHeight)),s=document.createElement("canvas");s.width=Math.round(e.videoWidth*a),s.height=Math.round(e.videoHeight*a),s.getContext("2d").drawImage(e,0,0,s.width,s.height);let i=await new Promise(c=>s.toBlob(c,"image/jpeg",.86));if(!i||!this._cam)return;let r=await ga(i,t);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,r],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let e=this._cam.shots,t=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(e,t&&this._form.step==="review")}_cameraFallback(){let e=this._cam&&this._cam.appending;this._closeCamera(),e&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(e=!0){if(!(!e&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(t){this._ai={...this._ai,ready:!1,images:!1,reason:t.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(e){await this._saveAppPrefs({ai_entity:e||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/config",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#leitura-ia");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(e=>e.id),range:"12m"})}_exportRange(e){let t=F(new Date);return e==="3m"?[t,fe(t,3)]:e==="year"?[fe(t,-12),fe(t,12)]:[t,fe(t,12)]}render(){if(!this._ready)return n`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?n`${k("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:n`<span class="spin">${k("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let e=this._shownView(),t=this._accent(),a=this._dark,s=`--rv-accent:${t.fill};--rv-accent-ink:${a?t.fill:t.ink};--rv-accent-soft:${at(t.fill,a?.18:.14)};--rv-accent-faint:${at(t.fill,a?.08:.07)};--rv-accent-ink-light:${t.ink};`,i;return e.name==="calendar"?i=this._renderCalendar():e.name==="more"?i=this._renderMore():e.name==="rewards"?i=this._renderRewards():e.name==="routines"?i=this._renderRoutinesTab():i=this._renderNow(),e.name!=="now"&&(this._medsHold=this._choresHold=!1),n`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?n`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:u}
          ${this._online?u:n`<div class="offline">${k("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          ${this._renderSide(e)}
          <main @touchstart=${r=>this._onSwipeStart(r)} @touchend=${r=>this._onSwipeEnd(r)}>${i}</main>
          ${this._renderNav(e)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${r=>this._onIcsFile(r)} />
      </div>
    `}_renderNav(e){let t=s=>e.name===s,a=(s,i,r,c)=>n`<button class="tab ${t(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${r}>${k(c)}<span>${r}</span></button>`;return n`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:e.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${k("plus")}</span><span>Novo</span>
        </button>
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
    </nav>`}_fourthTab(){return this._scoreOn()?["rewards","/recompensas","Recompensas","trophy"]:["routines","/rotinas","Rotinas","repeat"]}_shownView(){let e=this._view();return e.name==="rewards"&&!this._scoreOn()?{name:"routines"}:e}_renderRoutinesTab(){let e=this._catalogCount();return n`<section class="page more-page routines-tab">
      ${this._renderHead("Rotinas",{text:e?E(e,"cadastro","cadastros"):"Nada cadastrado ainda"})}
      ${this._renderCatalog()}
    </section>`}_renderSide(e){let t=c=>e.name===c,a=(c,d,l,p)=>n`<button class="side-link" aria-current=${t(c)?"page":"false"} @click=${()=>this._goTab(d)}>${k(p)}<span>${l}</span></button>`,s=this._sideHeld||(this._sideHeld=new Set),i=this._cals().filter(c=>!c.hidden||s.has(c.id)),r=i.filter(c=>!c.hidden).length;return n`<aside class="side" aria-label="Navegação">
      <div class="side-brand">${At()}Cronolog<span>IA</span></div>
      <div class="side-nav">
        ${a("now","","Agora","clock-3")}
        <button class="side-link" @click=${()=>this._toSearch()}>${k("search")}<span>Buscar</span><kbd>/</kbd></button>
        ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        ${a(...this._fourthTab())} ${a("more","/mais","Mais","ellipsis")}
      </div>
      ${this._renderSideMonth(e)}
      ${i.length?n`<div class="side-h"><span>Calendários</span><small>${r===i.length?i.length:`${r} de ${i.length}`}</small></div>
            <div class="side-lists">
              ${i.map(c=>n`<button class="side-cal ${c.hidden?"off":""}" role="switch" aria-checked=${c.hidden?"false":"true"} title=${c.hidden?"Mostrar na agenda":"Esconder da agenda"} style=${P(c.color,this._dark)} @click=${()=>{c.hidden||s.add(c.id),this._saveCalPrefs(c.id,{hidden:c.hidden?null:!0})}}>
                  <span class="sc-box">${c.hidden?u:k("check")}</span><span class="sl-name">${c.name}</span>
                </button>`)}
            </div>`:u}
      <div class="side-foot">CronologIA${this._version?` ${this._version}`:""}</div>
    </aside>`}_renderSideMonth(e){let t=new Date(this._now),a=this._sideMonth||this._cursor,s=new Date(a.getFullYear(),a.getMonth(),1),i=this._app("week_start",1),r=Pe(s,i),c=C(r,35).getMonth()===s.getMonth()?6:5,d=Array.from({length:c*7},(h,f)=>C(r,f)),l=e.name==="calendar"?this._cursor:null,p=h=>{this._sideMonth=fe(s,h),this.requestUpdate()};return n`<div class="side-month">
      <div class="sm-head">
        <b>${W(ke[s.getMonth()])}${s.getFullYear()!==t.getFullYear()?` ${s.getFullYear()}`:""}</b>
        <button class="icon-btn mini" aria-label="Mês anterior" @click=${()=>p(-1)}>${k("chevron-left")}</button>
        <button class="icon-btn mini" aria-label="Próximo mês" @click=${()=>p(1)}>${k("chevron-right")}</button>
      </div>
      <div class="sm-grid">
        ${[0,1,2,3,4,5,6].map(h=>n`<span class="sm-wd">${_e[(h+i)%7].slice(0,1).toUpperCase()}</span>`)}
        ${d.map(h=>n`<button class="sm-day ${h.getMonth()!==s.getMonth()?"out":""} ${J(h,t)?"today":""} ${l&&J(h,l)?"sel":""}" aria-label=${B(h,t)} @click=${()=>{this._sideMonth=null,this._openDay(h)}}>${h.getDate()}</button>`)}
      </div>
    </div>`}_renderHead(e,t,a=u,s=!1){let i=this._userName(),r=this._online?t:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return n`<header class="brand-head">
      <div class="head-row"><p class="eyebrow"><span class="brand">${At()}Cronolog<span>IA</span></span>${i?n`<span class="sep"> · </span>Olá, ${i}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      ${s?n`<button class="uplink" @click=${()=>this._goMenu()}>${k("chevron-left")}<span>Mais</span></button>`:u}
      <h1 class="page-title">${e}</h1>
      ${r?n`<p class="status"><span class="dot ${r.tone||""}" aria-hidden="true"></span><span>${r.text}</span></p>`:u}
      ${a}
    </header>`}_renderTopActs(){let e=this._aiOn()&&this._ai&&this._ai.ready,t=this._view().name==="calendar";return n`<div class="top-acts">
      ${this._renderChatBtn()}${this._renderMicBtn()}
      ${e?n`<button class="btn outline sm" @click=${()=>this._openImport("pick")}>${k("scan-text")}Ler com IA</button>`:u}
      <button class="btn primary sm" @click=${()=>this._openForm({date:t?this._cursor:null})}>${k("plus")}Novo</button>
    </div>`}_colorOfEvent(e){if(e.gerencia)return ee("ouro");if(e.todo)return ee(Be);let t=this._cal(e.cal);return t&&t.color||this._accent()}_realEvent(e){return!e.kind&&!e.todo&&!e.gerencia}_dayState(e,t,a){let s=F(a);return F(t)>s||!e.length?"":e.every(i=>this._rowDone(i))?"all-done":F(t)<s?"left":""}_rowDone(e){return e.todo?!!e.todo.done:e.gerencia?!!this._checkOf(e):e.kind?!!(e.kind&&e.kind.kind!=="manutencao"&&this._checkOf(e)):!!this._checkOf(e)}_openAnyDay(e){this._openSheet("anyday",{day:z(e)})}_renderAnyDaySheet(){let e=new Date(this._now),t=O(this._form.day),a=ge(this._events(t,C(t,1)),t).filter(r=>r.allDay&&!this._realEvent(r)),s=[...this._byPeriod(a.filter(r=>!this._rowDone(r)),t),...a.filter(r=>this._rowDone(r))],i=a.length-a.filter(r=>!this._rowDone(r)).length;return n`${this._sheetHead("Qualquer hora")}
      <p class="sheet-note top">${W(B(t,e))} · ${i} de ${E(a.length,"feita","feitas")}</p>
      <div class="any-list">
        ${s.length?s.map(r=>this._renderAnyRow(r,t)):n`<p class="empty-line">Nada sem horário neste dia.</p>`}
      </div>`}_markerOf(e,t){let a=e.kind,s=a?a.kind:e.todo?"tarefa":"conta",i=this._rowDone(e),r=this._scorePoints(e),c=F(t)<=F(new Date(this._now)),d={key:e.key,summary:e.summary,points:a&&a.points||0},l=null,p=null;if(!(e.movedDone&&!e.movedDone.item)){if(s==="rotina"&&c)l=f=>this._markDone(d,"rotina",f),p=()=>this._undoCheck(d,"rotina");else if(s==="remedio"&&c)l=()=>this._check(d,"remedio"),p=()=>this._undoCheck(d,"remedio");else if(e.todo)l=f=>this._todoDone(e.todo,!0,f),p=()=>this._todoDone(e.todo,!1);else if(s==="manutencao"){let f=(this._ix().maint||[]).find(m=>m.cal===e.cal&&m.uid===e.uid&&m.canMove);f&&(l=m=>this._maintDone(f,m,!0))}}let h=!i&&!!l&&this._pickWho()&&(s==="rotina"||s==="manutencao"||!!e.todo&&r>0);return{kind:s,done:i,pts:r,mark:l,unmark:p,quick:h}}_renderAnyRow(e,t){let a=e.kind,{kind:s,done:i,pts:r,mark:c,unmark:d,quick:l}=this._markerOf(e,t),p=i&&!e.todo&&!e.gerencia&&a?this._checkOf(e):null,h=!!(p&&p.skipped),f=this._cal(e.cal),m=[a&&a.who,e.todo?e.todo.listName:f?f.name:e.gerencia?"GerencIA":""].filter(Boolean).join(" \xB7 ");return n`<div class="chore ${i?"done":""} ${h?"skipped":""}" style=${P(this._colorOfEvent(e),this._dark)}>
      ${c||i&&d?n`<button class="chk ${i?"on":""}" aria-label="${i?"Desmarcar":"Marcar"} ${e.summary}" @click=${()=>i?d&&d():c(null)}>${i?k(h?"skip-forward":"check"):u}</button>`:i?n`<span class="chk on" aria-label=${h?"Pulada":"Feito"}>${k(h?"skip-forward":"check")}</span>`:n`<span class="chk ro" aria-hidden="true">${k({manutencao:"wrench",conta:"receipt",remedio:"pill",rotina:"spray-can",tarefa:"list-checks"}[s]||"calendar")}</span>`}
      <button class="chore-tx" @click=${()=>this._openEvent(e)}><b>${e.summary}</b><small>${l&&r?n`<span class="pts-inline">+${r}</span> · `:u}${m||{rotina:"Rotina",manutencao:"Manuten\xE7\xE3o",remedio:"Rem\xE9dio",conta:"Conta",tarefa:"Tarefa"}[s]}</small></button>
      ${l?this._renderQuickWho(e.summary,r,v=>c(v)):r?n`<span class="pts ${i?"got":""}">+${r}</span>`:u}
    </div>`}_byPeriod(e,t){let a=new Date(this._now),s=J(t,a)?a:new Date(t.getFullYear(),t.getMonth(),t.getDate(),6);return rt(e,s,i=>i.kind&&i.kind.period||(i.allDay?"":Fe(i.start.getHours())))}_anyTime(e){return!!e.allDay&&(!!e.todo||!!e.kind&&e.kind.kind!=="conta")}_dayHead(e,t,a){let s=new Date(this._now);return n`<button class="day-head ${J(e,s)?"today":""}" @click=${a}>
      <span class="dh-cal" aria-hidden="true"><small>${_e[e.getDay()].slice(0,3)}</small><b>${e.getDate()}</b></span>
      <span class="dh-label">${B(e,s)}</span>
      <span class="dh-count">${t}</span>
    </button>`}_renderDayRows(e,t){let a=l=>(!l.kind||l.kind.kind==="remedio")&&!l.todo&&!l.gerencia,s=(l,p)=>Number(l.allDay)-Number(p.allDay)||l.start-p.start,i=e.filter(a).sort(s),r=e.filter(l=>!a(l)).sort(s),c=r.filter(l=>!this._rowDone(l));r.splice(0,r.length,...this._byPeriod(c,t),...r.filter(l=>this._rowDone(l)));let d=this._awayDay(t)?n`<div class="away-day">${k("plane")}<span>Férias: rotinas, tarefas e manutenção pausadas</span></div>`:u;return n`${d}${i.map(l=>this._renderRow(l,t))}${r.length?n`<div class="day-sep ${i.length?"":"first"}">Rotinas, tarefas e lembretes</div>${r.map(l=>this._renderRow(l,t))}`:u}`}_renderRow(e,t,{showCal:a=!0}={}){let s=this._now,i=e.end.getTime()<=s,r=e.start.getTime()<=s&&e.end.getTime()>s&&!e.allDay,c=this._cal(e.cal),d;if(e.allDay){let x=U(e.end,e.start),g=x<=1&&this._anyTime(e)&&e.kind&&ne(e.kind.period);d=g?n`<b class="any">${g.label}</b><small class="per">${k(g.icon)}</small>`:x<=1&&this._anyTime(e)?n`<b class="any">Qualquer</b><small>hora</small>`:n`<b>Dia</b><small>${x>1?`${U(t,e.start)+1}/${x}`:"todo"}</small>`}else{let x=J(e.start,t),g=J(e.end,t)||e.end.getHours()===0&&e.end.getMinutes()===0&&U(e.end,t)===1;d=n`<b>${x?H(e.start):"\u2026"}</b><small>${g?H(e.end):"segue"}</small>`}let l=e.kind,p=e.todo?e.todo.done:l?l.kind!=="manutencao"&&this._checkOf(e):this._checkOf(e),h=!p&&l&&l.kind==="remedio"&&F(e.start)<F(new Date(s)),m=[...l?l.kind==="remedio"?[l.dose,l.who]:l.kind==="conta"&&l.value!=null?[this._money(l.value)]:[l.who]:[],e.location].filter(Boolean).join(" \xB7 "),v=a?c?c.name:e.gerencia?"GerencIA":e.todo?`${e.todo.listName} \xB7 ResolvIA`:"":"",$=(l||e.todo)&&this._pickWho()?this._markerOf(e,t):null,_=this._scoreOn()&&!p?l&&(l.kind==="rotina"||l.kind==="manutencao")&&l.points>0?l.points:e.todo&&e.todo.points>0?e.todo.points:0:0,y=e.rrule?Ae(e.rrule):l&&l.kind==="rotina"&&l.after?`Volta ${te(l.after)} depois de feita`:l&&l.kind==="manutencao"&&l.every?`A cada ${te(l.every)}`:"",b=n`<button class="ev-row ${i?"past":""} ${r?"live":""} ${p?"done":""}" style=${P(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="ev-time">${d}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo?n`<span class="kind-ic">${k("list-checks")}</span>`:this._kindIcon(e)}${e.summary}${p?n`<span class="ev-done ${p.skipped?"skipped":""}" title=${p.skipped?"Pulada":""}>${k(p.skipped?"skip-forward":"check")}</span>`:h?n`<span class="ev-done missed" title="Não tomado" aria-label="Não tomado">${k("x")}</span>`:u}</span>${m||_||v?n`<span class="ev-sub">${_?n`<span class="pts-inline">+${_}</span>${m||v?" \xB7 ":""}`:u}${m}${v?n`${m?" \xB7 ":""}<span class="ev-cal">${v}</span>`:u}</span>`:u}</span>
      ${y&&!($&&$.quick)?n`<span class="ev-rep" title=${y}>${k("repeat")}</span>`:u}
    </button>`;return $&&$.quick?n`<div class="ev-line">${b}${this._renderQuickWho(e.summary,$.pts,x=>$.mark(x))}</div>`:b}_renderNow(){let e=new Date(this._now),t=F(e),a=this._events(C(t,-1),C(t,2)).filter(T=>!T.kind&&!T.todo),s=this._store.loading(C(t,-1),C(t,2)),i=this._ix().meds.filter(T=>T.state==="atrasado"),r=ge(a,t),c=T=>T.end-T.start>=12*36e5,d=r.filter(T=>(T.allDay||c(T))&&!this._checkOf(T)),l=r.filter(T=>!T.allDay&&!c(T)),p=l.filter(T=>T.start<=e&&T.end>e&&!this._checkOf(T)).sort((T,pe)=>pe.start-T.start),h=C(t,1),m=a.filter(T=>!T.allDay&&T.start>e&&T.start<h&&!c(T)&&!this._checkOf(T)).sort((T,pe)=>T.start-pe.start)[0],v=this._visible();if(!this._cals().length)return this._renderNoCalendars();let $=r.filter(T=>!this._checkOf(T)),_=l.filter(T=>!this._checkOf(T)),y=_.filter(T=>T.end>e).length,b=this._awayNow()?"de f\xE9rias":r.length?$.length?`${E($.length,"evento","eventos")} hoje${y&&y<_.length?` \xB7 ${y} pela frente`:""}`:"tudo feito hoje":"nada hoje",x=i.length?{text:`${W(ma(e))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${W(ma(e))} \xB7 ${b}`},g,w=null;if(p.length){w=p[0];let T=p[0],pe=this._cal(T.cal);g=this._ticket(T,{label:"Agora",pill:`termina ${zt(T.end-e)}`,when:n`<b>${H(T.start)}</b> – <b>${H(T.end)}</b> · ${fa(T.end-T.start)}`,stub:m?n`<span class="tk-next">Depois <b>${H(m.start)}</b> ${m.summary}</span>`:n`<span class="dot"></span><span>${[pe&&pe.name,T.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e,live:!0})}else if(m){w=m;let T=this._cal(m.cal);g=this._ticket(m,{label:"A seguir",pill:zt(m.start-e),when:n`<b>${H(m.start)}</b> – ${H(m.end)} · hoje`,stub:n`<span class="dot"></span><span>${[T&&T.name,m.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e})}let A=w&&l.length===1&&l[0]===w||!l.some(T=>T.end>e&&!this._checkOf(T)),M=this._showAllDay||d.length<=3?d:d.slice(0,2),N=n`<div class="now-line"><span>${H(e)}</span></div>`,R=!1,G=this._ix().meds||[],ie=G.length>0&&G.every(T=>T.taken)&&!this._medsHold,j=v.length?u:n`<div class="hint-card">${k("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais/calendarios")}>Mostrar</button></div>`,I=n`${ie?u:this._renderMedsPanel()} ${this._renderBillsPanel()}`,Y=T=>{let pe=C(new Date(T.end),T.allDay?-1:0);return T.end-T.start>864e5&&U(pe,t)>=1?` \xB7 at\xE9 ${X(pe,e)}`:""},he=d.length?n`<div class="allday" aria-label="O dia todo">
          ${M.map(T=>n`<button class="ad-chip" style=${P(this._colorOfEvent(T),this._dark)} @click=${()=>this._openEvent(T)}><span class="dot"></span><span>${T.summary}<small>${Y(T)}</small></span></button>`)}
          ${d.length>M.length?n`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${d.length-M.length} o dia todo</button>`:u}
        </div>`:u,Na=n`${g||u}
      ${A&&!d.length?u:n`<div class="panel agenda">
        ${this._panelHead("calendar-days","accent",`Hoje \xB7 ${X(e,e)}`)}
        ${he}
        ${A?g?u:n`<p class="empty-line">${s?"Carregando\u2026":l.length?"Nada mais com hor\xE1rio hoje.":"Nenhum hor\xE1rio marcado hoje."}</p>`:n`${l.length?l.map(T=>{let pe=!R&&T.start>e?(R=!0,N):u;return n`${pe}${this._renderRow(T,t)}`}):n`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
            ${l.length&&!R&&l[l.length-1].end<=e?N:u}`}
        <button class="add-line" @click=${()=>this._openForm({date:t})}>${k("plus")}Evento hoje</button>
      </div>`}`;return this._desk?n`<section class="page now-page">
        ${this._renderHead("Hoje",x)}
        ${this._renderAwayBanner()}
        ${this._renderNowSearch()} ${j}
        <div class="now-cols">
          <div class="now-main">${Na} ${this._renderTodosPanel()}</div>
          <div class="now-side">${I} ${this._renderHomePanel()}</div>
        </div>
      </section>`:n`<section class="page">
      ${this._renderHead("Hoje",x)}
      ${this._renderAwayBanner()}
      ${this._renderNowSearch()} ${j}
      ${I}
      ${Na}
      ${this._renderHomePanel()}
      ${this._renderTodosPanel()}
    </section>`}_renderNowSearch(){return n`<form class="search-box home-search" role="search" @submit=${e=>{e.preventDefault(),this._toSearch(e.target.q.value.trim())}}>
      ${k("search")}
      <input type="search" name="q" placeholder="Buscar nos eventos" aria-label="Buscar nos eventos" autocomplete="off" enterkeyhint="search" @input=${e=>{if(!e.target.value.trim())return;let t=e.target.value;e.target.value="",this._toSearch(t)}} />
      <kbd>/</kbd>
    </form>`}_ticket(e,{label:t,pill:a,when:s,stub:i,now:r,live:c=!1}){return n`<button class="hero-ev ticket ${c?"live":""}" style=${P(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e,r,c)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${k("clock","sm")}${a}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(e,t,a=!1){let r=x=>(x.getHours()%12*60+x.getMinutes())/720*2*Math.PI,c=(x,g)=>[40+g*Math.sin(x),40-g*Math.cos(x)],d=(x,g,w)=>{let A=g-x;for(;A<=0;)A+=2*Math.PI;if(A=Math.max(A,.42),A>=2*Math.PI-.01)return`M 40 ${40-w} A ${w} ${w} 0 1 1 ${39.99} ${40-w}`;let[M,N]=c(x,w),[R,G]=c(x+A,w);return`M ${M.toFixed(2)} ${N.toFixed(2)} A ${w} ${w} 0 ${A>Math.PI?1:0} 1 ${R.toFixed(2)} ${G.toFixed(2)}`},l=Array.from({length:12},(x,g)=>{let w=g/12*2*Math.PI,[A,M]=c(w,g%3?27:24),[N,R]=c(w,29);return qa(A,M,N,R,g%3?"tick":"tick major")}),p="",h="",f=t;if(e){let x=e.end-e.start>=432e5;p=x?d(0,2*Math.PI,34):d(r(e.start),r(e.end),34),a&&!x&&(h=d(r(e.start),r(t),34)),f=a?t:e.start}let m=r(f),v=f.getMinutes()/60*2*Math.PI,[$,_]=c(m,15),[y,b]=c(v,23);return n`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${l}
      ${p?Vi(p,a?"span faint":"span"):u}
      ${h?Vi(h,"span"):u}
      ${qa(40,40,$,_,"hand hour")}
      ${qa(40,40,y,b,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return n`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${k("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let e=new Date(this._now),t=this._cursor,a=this._mode,s=this._app("week_start",1),i,r,c;if(a==="mes"||a==="lista")i=`${W(ke[t.getMonth()])}${t.getFullYear()!==e.getFullYear()?` ${t.getFullYear()}`:""}`,r=()=>this._cursor=a==="lista"?C(t,-30):fe(t,-1),c=()=>this._cursor=a==="lista"?C(t,30):fe(t,1);else if(a==="semana"||a==="3dias"){let h=a==="3dias"?3:7,f=a==="3dias"?t:Pe(t,s),m=C(f,h-1);i=f.getMonth()===m.getMonth()?`${f.getDate()}\u2013${m.getDate()} ${ke[m.getMonth()].slice(0,3)}`:`${f.getDate()} ${ke[f.getMonth()].slice(0,3)} \u2013 ${m.getDate()} ${ke[m.getMonth()].slice(0,3)}`,r=()=>this._cursor=C(t,-h),c=()=>this._cursor=C(t,h)}else i=B(t,e),r=()=>this._cursor=C(t,-1),c=()=>this._cursor=C(t,1);let d=[["mes","M\xEAs","layout-grid"],["semana","Semana","calendar-range"],["3dias","3 dias","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],l;a==="semana"?l=this._renderTimeGrid(Pe(t,s),7):a==="3dias"?l=this._renderTimeGrid(t,3):a==="dia"?l=this._renderTimeGrid(t,1):a==="lista"?l=this._renderList():l=this._renderMonth();let p=a==="mes"?t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()&&J(t,e):J(t,e);return n`<section class="page cal-page">
      <div class="head-row"><p class="eyebrow"><span class="brand">${At()}Cronolog<span>IA</span></span>${this._userName()?n`<span class="sep"> · </span>Olá, ${this._userName()}`:""}</p>${this._renderChatBtn()}${this._renderMicBtn()}${this._renderTopActs()}</div>
      <div class="cal-top">
        <div class="cal-title">
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{r(),this._scrollWeek=!0}}>${k("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{c(),this._scrollWeek=!0}}>${k("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${d.map(([h,f,m])=>n`<button class=${a===h?"on":""} role="tab" aria-selected=${a===h?"true":"false"} @click=${()=>this._setMode(h)}>${k(m)}<span>${f}</span></button>`)}
        </div>
        <button class="pick ${p?"on":""}" @click=${()=>{this._cursor=F(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${l}
    </section>`}_renderMonth(){let e=new Date(this._now),t=this._cursor,a=this._app("week_start",1),s=new Date(t.getFullYear(),t.getMonth(),1),i=Pe(s,a),r=C(i,42),c=this._events(i,r),d=[];for(let f=0;f<42;f++){let m=C(i,f),v=ge(c,m);d.push({d:m,list:v})}let l=d[35].d.getMonth()!==t.getMonth()?5:6,p=ge(c,t),h={x:0,y:0};return n`
      <div class="month" @touchstart=${f=>(h.x=f.touches[0].clientX,h.y=f.touches[0].clientY)} @touchend=${f=>{let m=f.changedTouches[0].clientX-h.x,v=f.changedTouches[0].clientY-h.y;Math.abs(m)>60&&Math.abs(v)<50&&(this._cursor=fe(t,m<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(f=>n`<span>${_e[(f+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${d.slice(0,l*7).map(({d:f,list:m})=>{let v=f.getMonth()!==t.getMonth(),$=[...new Set(m.map(y=>this._colorOfEvent(y).fill))].slice(0,4),_=this._dayState(m,f,e);return n`<button class="cell ${v?"out":""} ${J(f,e)?"today":""} ${J(f,t)?"sel":""} ${this._awayDay(f)?"away":""} ${_}" @click=${()=>this._cursor=f} aria-label="${B(f,e)}${this._awayDay(f)?" (f\xE9rias)":""}: ${E(m.length,"evento","eventos")}${_==="all-done"?", tudo feito":_==="left"?", algo ficou para tr\xE1s":""}">
              <span class="num">${f.getDate()}</span>
              <span class="dots">${$.map(y=>n`<i style="background:${y}"></i>`)}${m.length>4?n`<b>+</b>`:u}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title ${J(t,e)?"today":""}">
          <span class="dh-cal" aria-hidden="true"><small>${_e[t.getDay()].slice(0,3)}</small><b>${t.getDate()}</b></span>
          <span class="dt-label">${B(t,e)}</span>
          <button class="text-btn" @click=${()=>this._openForm({date:t})}>${k("plus")}Evento</button>
        </div>
        ${p.length?this._renderDayRows(p,t):n`<p class="empty-line">${this._store.loading(i,r)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(e,t){let a=new Date(this._now),s=Array.from({length:t},(b,x)=>C(e,x)),i=this._events(s[0],C(s[t-1],1)),r=Array.from({length:24},(b,x)=>x),c=this._app("week_start",1),d=b=>b.allDay&&!this._realEvent(b),l=b=>!d(b)&&(b.allDay||b.end-b.start>=12*36e5),p=s.map(b=>ge(i,b).filter(l)),h=Math.max(0,...p.map(b=>b.length)),f=s.map(b=>ge(i,b).filter(d)),m={fill:this._dark?"#4fd18f":"#1f9d63",ink:"#167a4b"},v=(b,x)=>{let g=x.filter(w=>this._rowDone(w)).length;return{done:g,total:x.length,all:g===x.length}},$=t>1?s:Array.from({length:7},(b,x)=>C(Pe(this._cursor,c),x)),_=t>1?i:this._events($[0],C($[6],1)),y=b=>{let x=this._dayState(ge(_,b),b,a);return n`<button class="ws-day ${J(b,a)?"today":""} ${J(b,this._cursor)?"sel":""} ${x}" @click=${()=>this._cursor=b} aria-label="${B(b,a)}${x==="all-done"?", tudo feito":x==="left"?", algo ficou para tr\xE1s":""}">
        <span>${_e[b.getDay()]}</span><b>${b.getDate()}</b>
      </button>`};return n`
      ${t>1?n`<div class="week-strip" style="--n:${t}">${$.map(y)}</div>`:n`<div class="week-strip day-strip">${$.map(y)}</div>`}
      ${f.some(b=>b.length)?t===1?(()=>{let b=v(s[0],f[0]);return n`<button class="any-bar ${b.all?"all":""}" @click=${()=>this._openAnyDay(s[0])}>
                ${k(b.all?"circle-check":"list-checks")}<span>Qualquer hora</span><b>${b.done}/${b.total}</b>${k("chevron-right")}
              </button>`})():n`<div class="tgrid-any" style="--n:${t}">
              <span class="tg-label any-ic" title="Qualquer hora">${k("list-checks")}</span>
              ${f.map((b,x)=>{if(!b.length)return n`<span></span>`;let g=v(s[x],b);return n`<button class="tg-any ${g.all?"all":""}" aria-label="Qualquer hora, ${B(s[x],a)}: ${g.done} de ${g.total} feitas" @click=${()=>this._openAnyDay(s[x])}>${g.done}/${g.total}</button>`})}
            </div>`:u}
      ${h?n`<div class="tgrid-allday" style="--n:${t}">
            <span class="tg-label">dia todo</span>
            ${p.map(b=>n`<div class="tg-adcol">${b.slice(0,3).map(x=>n`<button class="tg-ad ${this._checkOf(x)?"done":""}" style=${P(this._checkOf(x)?m:this._colorOfEvent(x),this._dark)} @click=${()=>this._openEvent(x)}>${x.summary}</button>`)}${b.length>3?n`<span class="tg-admore">+${b.length-3}</span>`:u}</div>`)}
          </div>`:u}
      <div class="tgrid-scroll">
        <div class="tgrid ${t===1?"one":t===3?"three":"week"}" style="--n:${t};--hh:${De}px">
          <div class="tg-hours">${r.map(b=>n`<span style="top:${b*De}px">${b?`${String(b).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(b=>{let x=ni(ge(i,b).filter(A=>!l(A)),b),g=J(b,a),w=(a.getHours()+a.getMinutes()/60)*De;return n`<div class="tg-col ${g?"today":""}" @click=${A=>{if(A.target!==A.currentTarget)return;let M=A.offsetY;this._openForm({date:b,hour:Math.max(0,Math.min(23,Math.floor(M/De)))})}}>
              ${x.map(({event:A,top:M,height:N,lane:R,lanes:G})=>{let ie=Math.max(N*De-2,De/2-2),j=!!(A.kind&&A.kind.kind==="remedio"),I=!!this._checkOf(A);return n`<button class="tg-ev ${ie<34?"short":""} ${j?"med":""} ${I?"done":""}" style="${P(I?m:this._colorOfEvent(A),this._dark)}top:${M*De}px;height:${ie}px;left:calc(${R/G*100}% + 1px);width:calc(${100/G}% - 2px)" @click=${()=>this._openEvent(A)}>
                  <b>${j?k(I?"check":"pill"):I?"\u2713 ":""}${A.summary}</b>${ie>=34?n`<small>${H(A.start)}${t===1&&A.location?` \xB7 ${A.location}`:""}${t===1&&j&&A.kind.dose?` \xB7 ${A.kind.dose}`:""}</small>`:u}
                </button>`})}
              ${g?n`<i class="tg-now" style="top:${w}px"></i>`:u}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let e=new Date(this._now),t=this._query.trim(),a=ha(t),s,i;a?(s=C(F(e),-365),i=C(F(e),366)):(s=this._cursor,i=C(this._cursor,30));let r=this._events(s,i);a&&(r=r.filter(h=>ha(`${h.summary} ${h.location} ${h.description}`).includes(a)));let c=new Map,d=(h,f)=>{let m=z(h);c.has(m)||c.set(m,{d:h,list:[]}),c.get(m).list.push(f)};for(let h of r){let f=F(h.start<s?s:h.start);if(d(f,It(h,f)),a)continue;let m=h.allDay?C(F(new Date(h.end)),-1):F(new Date(h.end-1));for(let v=C(f,1);v<=m&&v<i;v=C(v,1))d(v,It(h,v))}let l=[...c.values()].sort((h,f)=>h.d-f.d),p=this._store.loading(s,i);return n`
      <label class="search-box">
        ${k("search")}
        <input type="search" data-q="buscar" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${h=>this._query=h.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${k("x")}</button>`:u}
      </label>
      ${a?n`<p class="page-sub" style="margin-top:0">${p?"Buscando\u2026":E(r.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:u}
      ${l.length?n`<div class="panel agenda">
            ${l.map(({d:h,list:f})=>n`${this._dayHead(h,f.length,()=>this._openDay(h,"dia"))}${this._renderDayRows(f,h)}`)}
          </div>`:n`<div class="panel"><div class="empty"><div class="em-icon">${k(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":p?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${q(t,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let e=this._cals(),t=[];for(let r of e){let c=t.find(d=>d.label===r.group);c?c.list.push(r):t.push({label:r.group,list:[r]})}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal();return n`
      ${t.map(r=>n`<div class="panel">
          ${this._secHead("calendar-days",r.label)}
          ${r.list.map(c=>n`<div class="row cal-row ${c.hidden?"off":""}" style=${P(c.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(c)} aria-label="Personalizar ${c.name}">${k(c.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(c)}>
                <div class="label">${c.name}</div>
                <div class="hint">${[c.device,a.get(c.id)?"n\xE3o carregou":c.unavailable?"indispon\xEDvel":c.canCreate?c.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!c.hidden} @change=${d=>this._saveCalPrefs(c.id,{hidden:d.target.checked?null:!0})} aria-label="Mostrar ${c.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      <div class="panel" id="novos-eventos">
        ${this._secHead("calendar-plus","Novos eventos")}
        ${s.length?n`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${r=>this._saveAppPrefs({default_calendar:r.target.value})}>
                ${s.map(r=>n`<option value=${r.id} ?selected=${r.id===i}>${r.name}</option>`)}
              </select>
            </label>`:n`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let e=this._isAdmin(),t=(s,i,r,c)=>n`<button class="row" @click=${c}>
      <span class="tile" style=${P(this._accent(),this._dark)}>${k(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${r}</div></span>
      ${k("chevron-right")}
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
        ${Lt.filter(([e])=>e!=="rotinas"||this._scoreOn()).map(([e,t,a,s,i])=>n`<li>
            <button class="menu-row" data-k=${e} @click=${()=>this._go(t)}>
              <span class="mais-ic" aria-hidden="true">${k(s)}</span><span class="mb"><b>${a}</b><span>${i}</span></span>${k("chevron-right")}
            </button>
          </li>`)}
      </ul>
      ${this._renderFoot()}
    </section>`}_renderFoot(){return n`<p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>`}_renderMore(){let e=this._view();if(e.tab==="menu")return this._renderMenu();let t=e.tab,a,s=null;if(e.config)t==="integracoes"?a=n`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderAiPanel()} ${this._aiOn()&&this.api.voiceStatus?this._renderVoicePanel():u} ${this._aiOn()?this._renderUsage():u} ${this._renderSensorsPanel()}`:t==="placar"?a=this._renderScoreSettings():t==="dados"?a=this._renderDataPanel():t==="aparencia"?a=this._renderAppearance():a=this._renderOptions();else if(t==="rotinas"){a=this._renderCatalog();let r=this._catalogCount();s={text:r?`${E(r,"cadastro","cadastros")}`:"Nada cadastrado ainda"}}else if(t==="avisos")a=this._renderAlertsPanel();else if(t==="ferias")a=this._renderAwayOptions(!1);else if(t==="sobre")a=Pi({app:"CronologIA",version:this._version});else{a=this._renderCalendarsTab();let r=this._cals(),c=r.filter(d=>d.canCreate).length;s={text:r.length?`${E(r.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${c?E(c,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}if(!e.config)return n`<section class="page more-page">${this._renderHead(Aa(e),s,u,!0)} ${a}</section>`;let i=r=>{r!==t&&(this._haptic("light"),this._go(ka({name:"more",tab:r,config:!0}),!0))};return n`<section class="page more-page">
      ${this._renderHead("Configura\xE7\xF5es",s,u,!0)}
      <div class="seg compact more-tabs" role="tablist" aria-label="Seções de Configurações">
        ${nt.map(([r,c,d])=>n`<button class=${t===r?"on":""} role="tab" aria-selected=${t===r?"true":"false"} @click=${()=>i(r)}>${k(d)}<span>${c}</span></button>`)}
      </div>
      <div role="tabpanel" aria-label=${nt.find(r=>r[0]===t)[1]}>${a}</div>
      ${this._renderFoot()}
    </section>`}_renderAppearance(){let e=this._accentDaily(),t=e?this._accent().id:this._app("accent","turquesa");return n`
      <div class="panel">
        ${this._secHead("contrast","Tema","Cada aparelho guarda a sua escolha.")}
        ${Ms({theme:this._theme,onTheme:a=>this._setTheme(a),icon:k})}
      </div>
      <div class="panel">
        ${this._secHead("palette","Cor do app","Vale para todos os aparelhos.")}
        <div class="row switch-row daily-row">
          <div class="grow"><div class="label">Cor do dia</div><div class="hint">Muda a cor do app todo dia.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${a=>this._saveAppPrefs({accent_daily:a.target.checked?null:!1})} aria-label="Cor do dia" /><span class="track"></span></label>
        </div>
        ${Ds({palette:tt,value:t,onPick:a=>this._saveAppPrefs({accent:a,accent_daily:!1})})}
      </div>
    `}_renderOptions(){let e=this._app("week_start",1),t=this._app("event_details",!1)===!0;return n`
      <div class="panel">
        ${this._secHead("calendar-plus","Novo")}
        <div class="row switch-row">
          <div class="grow"><div class="label">Local e notas</div><div class="hint" style="white-space:normal">${t?"Ligado.":"Desligado: formul\xE1rio mais curto."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${t} @change=${a=>this._saveAppPrefs({event_details:a.target.checked?!0:null})} aria-label="Local e notas" /><span class="track"></span></label>
        </div>
      </div>
      <div class="panel">
        ${this._secHead("calendar-days","Semana","Vale para o calend\xE1rio e o placar.")}
        <div class="seg week-seg" role="radiogroup" aria-label="Início da semana">
          ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>n`<button class=${e===a?"on":""} role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${s}</button>`)}
        </div>
      </div>
    `}_renderAwayOptions(e=!0){let t=this._away(),a=z(new Date(this._now)),s=(i,r)=>this._saveAppPrefs({away:{from:i,to:r<i?i:r}});return n`<div class="panel" id="ferias">
      ${e?this._secHead("plane","F\xE9rias","Rotinas, tarefas e manuten\xE7\xE3o pausadas; rem\xE9dios continuam."):n`<p class="panel-lead">Rotinas, tarefas e manutenção pausadas; remédios continuam.</p>`}
      <div class="row switch-row">
        <div class="grow"><div class="label">De férias</div><div class="hint">${t?`${X(O(t.from),new Date(this._now))} a ${X(O(t.to),new Date(this._now))}`:"Desligado."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!t} @change=${i=>this._saveAppPrefs({away:i.target.checked?{from:a,to:z(C(O(a),4))}:null})} aria-label="De férias" /><span class="track"></span></label>
      </div>
      ${t?n`<div class="away-dates">
            <label class="field"><span class="flabel">De</span><input type="date" .value=${t.from} @change=${i=>i.target.value&&s(i.target.value,t.to)} aria-label="Férias de" /></label>
            <label class="field"><span class="flabel">Até</span><input type="date" .value=${t.to} min=${t.from} @change=${i=>i.target.value&&s(t.from,i.target.value)} aria-label="Férias até" /></label>
          </div>`:u}
    </div>`}_camOk(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}_renderImportTiles(){let e=this._ai||{},t=this._isHaAndroid(),a=this._camOk(),s=(i,r,c,d=!1,l="")=>n`<button type="button" class="imp-tile ${l?"no-cam":""}" ?disabled=${d} @click=${()=>this._openImport(i)}>${k(r)}<span>${c}</span>${l?n`<small>${l}</small>`:u}</button>`;return n`<div class="field imp-field">
        <span class="flabel">Trazer de mensagem ou foto</span>
        <div class="imp-tiles">
          ${s("text","clipboard-paste","Colar mensagem")}
          ${s("photos","images","Escolher fotos",!e.images)}
          ${s("scan","scan-text","Digitalizar com\xA0IA",!e.images,a?"":"Precisa de https")}
        </div>
        ${e.images&&!a?n`<p class="imp-help">Em http a câmera não abre aqui: tire a foto pelo celular e use Escolher fotos.</p>`:t&&e.images?n`<p class="imp-help">No app do Home Assistant, a galeria manda uma foto por vez.</p>`:u}
      </div>
      <div class="ai-box">${k("scan-text")}<span>${e.ready?"Com uma mensagem ou foto, a IA encontra os eventos, com data, hor\xE1rio e local. Voc\xEA confere antes de criar.":"Para ler mensagens e fotos, configure a Leitura por IA em Mais \u203A Configura\xE7\xF5es \u203A Integra\xE7\xF5es."}</span></div>`}_secHead(e,t,a=null){return n`<div class="mais-head"><span class="mais-ic" aria-hidden="true">${k(e)}</span><h2>${t}</h2></div>${a?n`<p class="panel-lead">${a}</p>`:u}`}async _loadUsage(){if(this.api.aiUsage){try{this._usage=await this.api.aiUsage()}catch{this._usage=null}this.requestUpdate()}}_renderUsage(){let e=this._ai||{};return ws({u:this._usage,day:this._usageDay,onDay:t=>(this._usageDay=t,this.requestUpdate()),head:this._secHead("chart-column","Uso da IA","As chamadas do app para a IA. Os tokens s\xE3o estimados."),app:"CronologIA",using:e.using&&e.using.id||"",names:Object.fromEntries((e.entities||[]).map(t=>[t.id,t.name]))})}_aiOn(){return!this._app("ai_off",!1)}_renderSensorsPanel(){let e=this._app("sensors_on",!1)===!0,t=this._score&&this._score(),a=!!(t&&t.enabled&&t.participants.length),s=[["sensor.cronologia_remedios_hoje","doses a tomar hoje (com as atrasadas e a pr\xF3xima)"],["binary_sensor.cronologia_remedio_atrasado","liga quando um rem\xE9dio atrasa"],["sensor.cronologia_manutencoes_vencidas","manuten\xE7\xF5es vencidas e as pr\xF3ximas"],...a?[["sensor.cronologia_placar","quem lidera o placar e os pontos"]]:[],["sensor.cronologia_ia_hoje","chamadas de IA hoje, com erros, cota e tokens estimados"]];return n`<div class="panel" id="sensores">
      ${this._secHead("activity","Sensores no Home Assistant","Para usar em pain\xE9is e automa\xE7\xF5es do Home Assistant.")}
      <div class="row switch-row">
        <div class="grow"><div class="label">Criar sensores</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: nenhum sensor no Home Assistant."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${i=>this._saveAppPrefs({sensors_on:i.target.checked?!0:null})} aria-label="Criar sensores" /><span class="track"></span></label>
      </div>
      ${e?n`<div class="sensor-list">${s.map(([i,r])=>n`<div class="sensor-row"><code>${i}</code><span>${r}</span></div>`)}</div>`:u}
      <div class="ha-events">
        <b>Eventos para automações</b>
        <span class="ha-ev-lead">Para marcar de fora do app, numa automação, numa rotina da Alexa ou numa etiqueta NFC. Funcionam com os sensores ligados ou não.</span>
        <div class="sensor-list">
          <div class="sensor-row"><code>cronologia_feito</code><span>com <code>nome: Filtro de água</code>${a?n` (e <code>quem: Diego</code>, se vale pontos)`:u}: a manutenção, a rotina ou o remédio de hoje com esse nome fica feito.</span></div>
          ${a?n`<div class="sensor-row"><code>cronologia_demerito</code><span>com <code>nome</code> e <code>quem</code>: desconta esse demérito de quem foi.</span></div>`:u}
        </div>
      </div>
    </div>`}_renderAiPanel(){let e=this._aiOn(),t=n`<div class="row switch-row">
        <div class="grow"><div class="label">Usar IA</div><div class="hint" style="white-space:normal">${e?"Ligado.":"Desligado: sem leitura por IA, sem Falar."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${l=>this._saveAppPrefs({ai_off:l.target.checked?null:!0})} aria-label="Usar IA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="leitura-ia">
        ${this._secHead("sparkles","Leitura por IA","Encontra eventos em mensagens, prints e fotos.")}
        ${t}
      </div>`;let a=this._ai||{},s=a.entities||[],i=this._app("ai_entity",""),r=this._aiChecking?"off":a.ready&&a.images?"ok":a.ready?"warn":"bad",c=this._aiChecking?"Verificando\u2026":a.ready&&a.images?"Pronta para ler fotos":a.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",d="";return a.ready&&a.using&&(d=`Usando ${a.using.name}${i?"":" (a IA padr\xE3o do Home Assistant)"}.`,a.photos&&(d+=` Para fotos, ${a.photos.name}.`)),a.reason&&(d=`${d} ${a.reason}`.trim()),n`<div class="panel" id="leitura-ia">
      ${this._secHead("sparkles","Leitura por IA","Encontra eventos em mensagens, prints e fotos, com a IA do Home Assistant.")}
      ${t}
      <div class="ai-state ${r}"><span class="dot"></span><div><b>${c}</b>${d?n`<span>${d}</span>`:u}</div></div>
      ${s.length||i?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${l=>this._chooseAi(l.target.value)}>
              <option value="" ?selected=${!i}>Padrão do Home Assistant</option>
              ${s.map(l=>n`<option value=${l.id} ?selected=${l.id===i}>${l.name}${l.images?"":" (s\xF3 texto)"}${l.available?"":" (indispon\xEDvel)"}</option>`)}
              ${i&&!s.some(l=>l.id===i)?n`<option value=${i} selected>${i} (não encontrada)</option>`:u}
            </select>
          </label>`:u}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${k("rotate-ccw")}Verificar de novo</button></div>
      ${a.ready&&a.images?u:n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return u;let e=this._form||{},t=u,a=null;if(this._sheet==="event")t=this._renderEventSheet(),a=e.ev&&this._colorOfEvent(e.ev);else if(this._sheet==="form")t=this._renderFormSheet(),a=this._cal(e.cal)&&this._cal(e.cal).color;else if(this._sheet==="scope")t=this._renderScope();else if(this._sheet==="confirm")t=this._renderConfirm();else if(this._sheet==="import")t=this._renderImportSheet(),a=this._cal(e.target)&&this._cal(e.target).color;else if(this._sheet==="calendar"){t=this._renderCalSheet();let i=this._cal(e.id);a=ee(e.color)||i&&i.color}else this._sheet==="export"?t=this._renderExportSheet():this._sheet==="outlook"?t=this._renderOutlookSheet():this._sheet==="nocal"?t=this._renderNoCalSheet():this._sheet==="maint"?t=this._renderMaintSheet():this._sheet==="anyday"?t=this._renderAnyDaySheet():this._sheet==="versions"?t=this._renderVersions():this._sheet==="who"?t=this._renderWhoSheet():this._sheet==="periodlog"?t=this._renderPeriodLogSheet():this._sheet==="todo"?(t=this._renderTodoSheet(),a=ee(Be)):this._sheet==="bring"?t=this._renderBringSheet():this._sheet==="chat"?t=this._renderChatSheet():this._sheet==="extra"?t=this._renderExtraSheet():this._sheet==="demerit"?t=this._renderDemeritSheet():this._sheet==="prize"?t=this._renderPrizeSheet():this._sheet==="bill"&&(t=this._renderBillSheet(),a=ee("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${at(a.fill,this._dark?.18:.14)};${P(a,this._dark)}`:"";return n`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${t}
      </div>
    `}_sheetHead(e,t){return n`<div class="sheet-head">
      ${t?n`<button class="icon-btn back" @click=${t} aria-label="Voltar">${k("chevron-left")}</button>`:u}
      <h3 class="display">${e}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${k("x")}</button>
    </div>`}_renderEventSheet(){let e=this._form.ev,t=new Date(this._now),a=this._cal(e.cal),s;if(e.allDay){let r=C(e.end,-1);s=J(r,e.start)?`${B(e.start,t)} \xB7 ${this._anyTime(e)?"qualquer hora":"dia todo"}`:`${W(X(e.start,t))} \u2013 ${X(r,t)} \xB7 ${E(U(e.end,e.start),"dia","dias")}`}else J(e.start,e.end)||e.end.getHours()===0&&e.end.getMinutes()===0&&U(e.end,e.start)===1?s=`${B(e.start,t)} \xB7 ${H(e.start)} \u2013 ${H(e.end)} (${fa(e.end-e.start)})`:s=`${W(X(e.start,t))}, ${H(e.start)} \u2013 ${X(e.end,t)}, ${H(e.end)}`;let i=e.start>t?zt(e.start-t):e.end>t?"acontecendo agora":"";return n`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${a?a.name:e.cal}${i?n` · <b>${i}</b>`:u}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${k("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${k("clock")}<span>${s}</span></div>
        ${e.rrule?n`<div class="fact">${k("repeat")}<span>${Ae(e.rrule)}</span></div>`:u}
        ${e.location?n`<a class="fact link" href=${or(e.location)} target="_blank" rel="noopener noreferrer">${k("map-pin")}<span>${e.location}</span>${k("external-link","sm")}</a>`:u}
        ${e.kind?this._renderKindFacts(e):!e.todo&&!e.gerencia?this._renderEventDone(e):u}
        ${e.description&&!e.kind?n`<div class="fact notes">${k("file-text")}<span>${St(e.description).map(r=>r.url?n`<a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>`:r.text)}</span></div>`:u}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?n`<p class="sheet-note">${k("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:u}
      <div class="sheet-actions">
        ${a&&a.canDelete&&e.uid?n`<button class="btn danger" @click=${()=>this._askDelete(e)} aria-label="Apagar">${k("trash")}</button>`:u}
        ${this._writable().length?n`<button class="btn outline" @click=${()=>this._openForm({ev:e,copy:!0})}>${k("copy")}Duplicar</button>`:u}
        ${a&&this._canEdit(e.cal)&&e.uid?n`<button class="btn primary" @click=${()=>this._openForm({ev:e})}>${k("pencil")}Editar</button>`:u}
      </div>
    `}_renderEventDone(e){let t=new Date(this._now),a=this._checkOf(e),s={key:e.key,summary:e.summary};return a?n`<div class="kind-state">${k("circle-check")}<span>Feito${a.at?` ${U(new Date(a.at),t)===0?"hoje":X(new Date(a.at),t)} \xE0s ${H(new Date(a.at))}`:""}${a.by?` \xB7 ${a.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(s,"evento")}>Desfazer</button></div>`:(e.day?O(e.day):e.start)>=C(F(t),2)?u:n`<button class="btn outline kind-act ev-done-btn" @click=${()=>this._check(s,"evento").then(()=>this._closeSheet())}>${k("check")}Feito</button>`}_renderFormSheet(){let e=this._form;if(e.kind)return this._renderKindForm();let t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(m=>m.id===e.cal):t.filter(m=>m.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t,s=new Date,i=[{label:"Hoje",d:F(s)},{label:"Amanh\xE3",d:C(F(s),1)}],r=i.some(m=>z(m.d)===e.date),c=m=>{let v=this.renderRoot.querySelector(m);if(v)try{v.showPicker()}catch{v.focus(),v.click()}},d=m=>{if(!m)return;let v=y=>{let[b,x]=y.split(":").map(Number);return b*60+x},$=Math.max(15,(v(e.end)-v(e.start)+1440)%1440||60),_=(v(m)+$)%1440;this._setForm({start:m,end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`})},l=m=>{let[v,$]=e.start.split(":").map(Number),_=Math.min(1439,v*60+$+m);this._setForm({end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`,endDate:""})},p=m=>{let[v,$]=(m||"0:0").split(":").map(Number);return v*60+$},h=(p(e.end)-p(e.start)+1440)%1440,f=!e.allDay&&!e.endDate&&p(e.end)<=p(e.start);return n`
      ${this._sheetHead(e.mode==="add"?"Novo":"Editar evento")}
      ${e.mode==="add"?this._renderModelChips(""):u}
      ${e.mode==="add"&&this._aiOn()?this._renderImportTiles():u}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${m=>this._setForm({title:m.target.value})} @keydown=${m=>m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?n`<div class="field">
            <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(m=>n`<button class="pick list ${e.cal===m.id?"on":""}" style=${P(m.color,this._dark)} @click=${()=>this._setForm({cal:m.id})}><span class="dot"></span><span>${q(m.name,24)}</span></button>`)}</div>
          </div>`:u}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${e.allDay} @change=${m=>this._setForm({allDay:m.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row c3">
          ${i.map(m=>n`<button class="pick ${e.date===z(m.d)?"on":""}" @click=${()=>this._setForm({date:z(m.d),endDate:e.endDate&&e.endDate<z(m.d)?"":e.endDate})}>${m.label}</button>`)}
          <button class="pick ${r?"":"on"}" @click=${()=>c("#cr-date")}>
            ${k("calendar")}<span>${r?"Outra data":W(B(O(e.date),s,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${e.date} @change=${m=>m.target.value&&this._setForm({date:m.target.value,endDate:e.endDate&&e.endDate<m.target.value?"":e.endDate})} />
          </button>
        </div>
        ${e.allDay?n`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${e.endDate||e.date} min=${e.date} @change=${m=>this._setForm({endDate:m.target.value>e.date?m.target.value:""})} />
              ${e.endDate?n`<span class="tl">${E(U(O(e.endDate),O(e.date))+1,"dia","dias")}</span>`:n`<span class="tl">um dia</span>`}
            </div>`:n`<div class="time-row">
                <input type="time" .value=${e.start} aria-label="Começa" @change=${m=>d(m.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${e.end} aria-label="Termina" @change=${m=>m.target.value&&this._setForm({end:m.target.value})} />
              </div>
              <div class="chip-row dur c4">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([m,v])=>n`<button class="pick ${h===m&&!e.endDate?"on":""}" @click=${()=>l(m)}>${v}</button>`)}
              </div>
              ${f?n`<div class="field-hint">${k("info")}<span>Termina no dia seguinte.</span></div>`:u}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="seg rep-seg" role="radiogroup" aria-label="Repetir">${Et.map(m=>n`<button class=${e.repeat===m.id?"on":""} role="radio" aria-checked=${e.repeat===m.id?"true":"false"} title=${m.label} @click=${()=>this._setForm({repeat:m.id})}>${m.short}</button>`)}</div>
        ${e.rrule&&st(e.rrule)===e.repeat&&Ae(e.rrule)!==(Et.find(m=>m.id===e.repeat)||{}).label?n`<div class="field-hint">${k("repeat")}<span>${Ae(e.rrule)}</span></div>`:u}
        ${e.rid?n`<div class="field-hint">${k("repeat")}<span>Este evento se repete.</span></div>`:u}
      </div>
      ${this._app("event_details",!1)===!0||e.details?n`<label class="field">
              <span class="flabel">Local</span>
              <input type="text" .value=${e.location} placeholder="Endereço, sala ou link" @input=${m=>this._setForm({location:m.target.value})} />
            </label>
            <label class="field">
              <span class="flabel">Notas</span>
              <textarea rows="3" .value=${e.notes} placeholder="Detalhes, o que levar…" @input=${m=>this._setForm({notes:m.target.value})}></textarea>
            </label>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveForm()}>${e.saving?"Salvando\u2026":e.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let e=this._form,t=e.action==="edit",a=(s,i,r,c=!1)=>n`<button class="imp-opt ${c?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${k(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${r}</small></span>${k("chevron-right")}
    </button>`;return n`
      ${this._sheetHead(t?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${q(e.title,40)}” se repete. O que você quer ${t?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",t?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",t?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${t?u:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let e=this._form;return n`
      <div class="sheet-head"><h3 class="display">${e.title}</h3></div>
      <p class="confirm-text">${e.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn ${e.danger?"danger-fill":"primary"}" @click=${()=>e.run()}>${e.label}</button>
      </div>
    `}_renderImportSheet(){let e=this._form,t=this._aiOn(),a=t?this._ai||{}:{},s=this._writable(),i=this._cal(e.target),r=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},c=e.error?n`<div class="imp-error">${k("circle-alert")}<span>${e.error}</span></div>`:u,d=e.images&&e.images.length?n`<div class="thumbs">${e.images.map(p=>n`<img src=${p.url} alt="" />`)}</div>`:u,l=n`<div class="imp-error soft">${k("sparkles")}<span>${a.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(e.step==="voice")return this._renderVoiceStep(r);if(e.step==="text")return n`
        ${this._sheetHead(e.heard?"O que voc\xEA disse":"Colar mensagem",r)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${e.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${c} ${a.ready?u:l}
        <div class="sheet-actions">
          ${this._clipOk()?n`<button class="btn outline" @click=${()=>this._pasteClipboard()}>${k("clipboard-paste")}Colar</button>`:u}
          <button class="btn primary" ?disabled=${!(e.text||"").trim()||!a.ready} @click=${()=>this._readText()}>${k("sparkles")}Encontrar eventos</button>
        </div>
        
      `;if(e.step==="loading")return n`
        ${this._sheetHead("Lendo\u2026")}
        ${d}
        <div class="imp-loading"><span class="spin">${k("loader-circle")}</span><span>${e.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:e.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(e.step==="review"){let p=e.items.filter(m=>m.on&&(m.title||"").trim()).length,h=e.provider==="ics"?`do arquivo ${q(e.fileName||".ics",28)}`:e.provider?`lidos por ${e.provider}`:"",f=new Date;return n`
        ${this._sheetHead("Revisar eventos",r)}
        ${d}
        ${e.heard?n`<p class="heard">${k("mic")}<span>“${e.heard}”</span></p>`:u}
        <p class="sheet-note top">${E(e.items.length,"evento encontrado","eventos encontrados")}${e.provider==="ics"&&h?` \xB7 ${h}`:""}.</p>
        ${e.note?n`<div class="imp-error soft">${k("sparkles")}<span>${e.note}</span></div>`:u}
        <div class="rv-list">
          ${e.items.map((m,v)=>n`<div class="rv-card ${m.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${m.on?"on":""}" role="checkbox" aria-checked=${m.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(v,{on:!m.on})}>${k("check")}</button>
                <input class="rv-title" type="text" .value=${m.title} aria-label="Título" @input=${$=>this._setItem(v,{title:$.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:e.items.filter(($,_)=>_!==v)})}>${k("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${m.date} aria-label="Data" @change=${$=>$.target.value&&this._setItem(v,{date:$.target.value})} />
                ${m.start?n`<span class="rv-times"><input type="time" .value=${m.start} aria-label="Começa" @change=${$=>this._setItem(v,{start:$.target.value})} /><span>–</span><input type="time" .value=${m.end} aria-label="Termina" @change=${$=>this._setItem(v,{end:$.target.value})} /></span>`:n`<button class="pick ghost" @click=${()=>this._setItem(v,{start:"09:00",end:"10:00"})}>${k("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${W(B(O(m.date),f))}${m.end_date?` at\xE9 ${X(O(m.end_date),f)}`:""}${m.location?` \xB7 ${m.location}`:""}${m.repeat||m.rrule?` \xB7 ${m.rrule?Ae(m.rrule):Et.find($=>$.id===m.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${a.images&&e.provider!=="ics"?n`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${k("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${k("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:u}
        ${s.length>1?n`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${s.map(m=>n`<button class="pick list ${e.target===m.id?"on":""}" style=${P(m.color,this._dark)} @click=${()=>this._setForm({target:m.id})}><span class="dot"></span><span>${q(m.name,24)}</span></button>`)}</div>
            </div>`:u}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||e.adding} @click=${()=>this._importAdd()}>
            ${e.adding?"Adicionando\u2026":p?`Adicionar ${E(p,"evento","eventos")}${i&&s.length<=1?` em ${q(i.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return n`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">${t?"De uma mensagem, de uma foto ou de um arquivo .ics.":"De um arquivo .ics."}</p>
      <div class="imp-options">
        ${t?n`<button class="imp-opt" ?disabled=${!a.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${k("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${k("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${k("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid()?"Prints e fotos da galeria, uma por vez":"Prints e fotos da galeria (at\xE9 6)"}</small></span>${k("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${k("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>${this._camOk()?"Fotografe um convite ou cart\xE3o de consulta":"Neste endere\xE7o (http) a c\xE2mera n\xE3o abre: precisa de https"}</small></span>${k("chevron-right")}
        </button>`:u}
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${k("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${k("chevron-right")}
        </button>
      </div>
      ${t&&!a.images?l:u}
      ${c}
    `}_renderCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return this._sheetHead("Calend\xE1rio");let a=ee(e.color)||t.color;return n`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${P(a,this._dark)}>
        <span class="tile">${k(t.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(e.name||"").trim()||t.origName}</span><span class="lc-meta">${t.group}${t.device?` \xB7 ${t.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${e.name} placeholder=${t.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${tt.map(s=>n`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?k("check"):u}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${t.canCreate?t.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${t.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!e.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?n`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${t.id}`)}>${k("external-link")}Abrir na tela padrão do HA</button>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${k("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let e=this._form,t=this._cals(),[a,s]=this._exportRange(e.range),i=e.cals.length?this.api.exportUrl({calendars:e.cals,start:re(a),end:re(s)}):null,r=c=>this._setForm({cals:e.cals.includes(c)?e.cals.filter(d=>d!==c):[...e.cals,c]});return n`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${t.map(c=>n`<button class="pick list ${e.cals.includes(c.id)?"on":""}" style=${P(c.color,this._dark)} @click=${()=>r(c.id)}><span class="dot"></span><span>${q(c.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([c,d])=>n`<button class="pick ${e.range===c?"on":""}" @click=${()=>this._setForm({range:c})}>${d}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?n`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${k("download")}Baixar .ics</a>`:n`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${k("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let e=this._isAdmin();return n`
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
        ${e?n`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${k("chevron-right","sm")}</button>`:u}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return n`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários daqui são só de leitura. Adicione um que aceite edição:</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let e=this._cam;if(!e)return u;let t=e.shots.length;return n`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${e.flash?n`<div class="cam-flash" .key=${e.flash}></div>`:u}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${k("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${e.torchOk?n`<button class="cam-btn ${e.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${k("zap")}</button>`:n`<span class="cam-btn ghost"></span>`}
        </div>
        ${e.status==="error"?n`<div class="cam-msg">${k("camera")}<p>${e.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${k("images")}Escolher foto</button></div>`:n`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${e.status==="starting"?"Abrindo a c\xE2mera\u2026":t?`${E(t,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${e.shots.slice(-3).map(a=>n`<img src=${a.url} alt="" />`)}${t>3?n`<span>+${t-3}</span>`:u}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${e.status!=="live"||t>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!t} @click=${()=>this._useShots()}>Pronto${t?` (${t})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return u;let e=this._toast;return n`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${e.text}</span>
      ${e.action?n`<button @click=${()=>{this._toast=null,e.action.run()}}>${e.action.label}</button>`:u}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Oa);var rr=document.getElementById("app"),Fa=document.createElement("cronologia-app");Fa.env=Ys();Fa.api=new Mt;rr.replaceChildren(Fa);})();
