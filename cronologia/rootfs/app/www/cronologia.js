/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var Ht=globalThis,be=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),We=new WeakMap,Pt=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i,e=this.t;if(be&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=We.get(e)),t===void 0&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),a&&We.set(e,t))}return t}toString(){return this.cssText}},Qt=r=>new Pt(typeof r=="string"?r:r+"",void 0,$e),Ft=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((a,s,i)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new Pt(e,r,$e)},xs=(r,t)=>{if(be)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let a=document.createElement("style"),s=Ht.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=e.cssText,r.appendChild(a)}},Ke=be?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return Qt(e)})(r):r,{is:bs,defineProperty:$s,getOwnPropertyDescriptor:ws,getOwnPropertyNames:_s,getOwnPropertySymbols:ys,getPrototypeOf:ks}=Object,Xt=globalThis,Je=Xt.trustedTypes,As=Je?Je.emptyScript:"",Ms=Xt.reactiveElementPolyfillSupport,At=(r,t)=>r,fe={toAttribute(r,t){switch(t){case Boolean:r=r?As:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ha=(r,t)=>!bs(r,t),Qe={attribute:!0,type:String,converter:fe,reflect:!1,useDefault:!1,hasChanged:ha};Symbol.metadata??=Symbol("metadata"),Xt.litPropertyMetadata??=new WeakMap;var st=class extends HTMLElement{static addInitializer(t){this.o(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(t,e=Qe){if(e.state&&(e.attribute=!1),this.o(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(t,a,e);s!==void 0&&$s(this.prototype,t,s)}}static getPropertyDescriptor(t,e,a){let{get:s,set:i}=ws(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let n=s?.call(this);i?.call(this,o),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qe}static o(){if(this.hasOwnProperty(At("elementProperties")))return;let t=ks(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(At("properties"))){let e=this.properties,a=[..._s(e),...ys(e)];for(let s of a)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,s]of e)this.elementProperties.set(a,s)}this.u=new Map;for(let[e,a]of this.elementProperties){let s=this.p(e,a);s!==void 0&&this.u.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let s of a)e.unshift(Ke(s))}else t!==void 0&&e.push(Ke(t));return e}static p(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this.P??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this.P?.delete(t)}$(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this.v=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xs(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this.P?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}C(t,e){let a=this.constructor.elementProperties.get(t),s=this.constructor.p(t,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:fe).toAttribute(e,a.type);this.m=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(t,e){let a=this.constructor,s=a.u.get(t);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:fe;this.m=s;let n=o.fromAttribute(e,i.type);this[s]=n??this.T?.get(s)??n,this.m=null}}requestUpdate(t,e,a,s=!1,i){if(t!==void 0){let o=this.constructor;if(s===!1&&(i=this[t]),a??=o.getPropertyOptions(t),!((a.hasChanged??ha)(i,e)||a.useDefault&&a.reflect&&i===this.T?.get(t)&&!this.hasAttribute(o.p(t,a))))return;this.M(t,e,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(t,e,{useDefault:a,reflect:s,wrapped:i},o){a&&!(this.T??=new Map).has(t)&&(this.T.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),s===!0&&this.m!==t&&(this.A??=new Set).add(t))}async k(){this.isUpdatePending=!0;try{await this.S}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:o}=i,n=this[s];o!==!0||this._$AL.has(s)||n===void 0||this.M(s,void 0,i,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this.P?.forEach(a=>a.hostUpdate?.()),this.update(e)):this.U()}catch(a){throw t=!1,this.U(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this.P?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(t){return!0}update(t){this.A&&=this.A.forEach(e=>this.C(e,this[e])),this.U()}updated(t){}firstUpdated(t){}};st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[At("elementProperties")]=new Map,st[At("finalized")]=new Map,Ms?.({ReactiveElement:st}),(Xt.reactiveElementVersions??=[]).push("2.1.2");var we=globalThis,Xe=r=>r,qt=we.trustedTypes,Ge=qt?qt.createPolicy("lit-html",{createHTML:r=>r}):void 0,_e="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+X,Ds=`<${ye}>`,ct=document,Dt=()=>ct.createComment(""),St=r=>r===null||typeof r!="object"&&typeof r!="function",ke=Array.isArray,ua=r=>ke(r)||typeof r?.[Symbol.iterator]=="function",ue=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,ta=/>/g,nt=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,aa=/"/g,ma=/^(?:script|style|textarea|title)$/i,Ae=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=Ae(1),gt=Ae(2),bi=Ae(3),C=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),sa=new WeakMap,lt=ct.createTreeWalker(ct,129);function va(r,t){if(!ke(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ge!==void 0?Ge.createHTML(t):t}var fa=(r,t)=>{let e=r.length-1,a=[],s,i=t===2?"<svg>":t===3?"<math>":"",o=kt;for(let n=0;n<e;n++){let c=r[n],d,h,p=-1,m=0;for(;m<c.length&&(o.lastIndex=m,h=o.exec(c),h!==null);)m=o.lastIndex,o===kt?h[1]==="!--"?o=Ze:h[1]!==void 0?o=ta:h[2]!==void 0?(ma.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=nt):h[3]!==void 0&&(o=nt):o===nt?h[0]===">"?(o=s??kt,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?nt:h[3]==='"'?aa:ea):o===aa||o===ea?o=nt:o===Ze||o===ta?o=kt:(o=nt,s=void 0);let v=o===nt&&r[n+1].startsWith("/>")?" ":"";i+=o===kt?c+Ds:p>=0?(a.push(d),c.slice(0,p)+_e+c.slice(p)+X+v):c+X+(p===-2?n:v)}return[va(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},Tt=class r{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let i=0,o=0,n=t.length-1,c=this.parts,[d,h]=fa(t,e);if(this.el=r.createElement(d,a),lt.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=lt.nextNode())!==null&&c.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(_e)){let m=h[o++],v=s.getAttribute(p).split(X),f=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:f[2],strings:v,ctor:f[1]==="."?jt:f[1]==="?"?Vt:f[1]==="@"?Ut:pt}),s.removeAttribute(p)}else p.startsWith(X)&&(c.push({type:6,index:i}),s.removeAttribute(p));if(ma.test(s.tagName)){let p=s.textContent.split(X),m=p.length-1;if(m>0){s.textContent=qt?qt.emptyScript:"";for(let v=0;v<m;v++)s.append(p[v],Dt()),lt.nextNode(),c.push({type:2,index:++i});s.append(p[m],Dt())}}}else if(s.nodeType===8)if(s.data===ye)c.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(X,p+1))!==-1;)c.push({type:7,index:i}),p+=X.length-1}i++}}static createElement(t,e){let a=ct.createElement("template");return a.innerHTML=t,a}};function dt(r,t,e=r,a){if(t===C)return t;let s=a!==void 0?e.N?.[a]:e.O,i=St(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,a)),a!==void 0?(e.N??=[])[a]=s:e.O=s),s!==void 0&&(t=dt(r,s._$AS(r,t.values),s,a)),t}var Lt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(t){let{el:{content:e},parts:a}=this._$AD,s=(t?.creationScope??ct).importNode(e,!0);lt.currentNode=s;let i=lt.nextNode(),o=0,n=0,c=a[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new Gt(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Bt(i,this,t)),this._$AV.push(d),c=a[++n]}o!==c?.index&&(i=lt.nextNode(),o++)}return lt.currentNode=ct,s}V(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},Gt=class ga{get _$AU(){return this._$AM?._$AU??this.D}constructor(t,e,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dt(this,t,e),St(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==C&&this.L(t):t._$litType$!==void 0?this.j(t):t.nodeType!==void 0?this.I(t):ua(t)?this.H(t):this.L(t)}B(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}I(t){this._$AH!==t&&(this._$AR(),this._$AH=this.B(t))}L(t){this._$AH!==u&&St(this._$AH)?this._$AA.nextSibling.data=t:this.I(ct.createTextNode(t)),this._$AH=t}j(t){let{values:e,_$litType$:a}=t,s=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Tt.createElement(va(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(e);else{let i=new Lt(s,this),o=i.R(this.options);i.V(e),this.I(o),this._$AH=i}}_$AC(t){let e=sa.get(t.strings);return e===void 0&&sa.set(t.strings,e=new Tt(t)),e}H(t){ke(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,s=0;for(let i of t)s===e.length?e.push(a=new ga(this.B(Dt()),this.B(Dt()),this,this.options)):a=e[s],a._$AI(i),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=Xe(t).nextSibling;Xe(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this.D=t,this._$AP?.(t))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(t,e=this,a,s){let i=this.strings,o=!1;if(i===void 0)t=dt(this,t,e,0),o=!St(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{let n=t,c,d;for(t=i[0],c=0;c<i.length-1;c++)d=dt(this,n[a+c],e,c),d===C&&(d=this._$AH[c]),o||=!St(d)||d!==this._$AH[c],d===u?t=u:t!==u&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}o&&!s&&this.W(t)}W(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},jt=class extends pt{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===u?void 0:t}},Vt=class extends pt{constructor(){super(...arguments),this.type=4}W(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},Ut=class extends pt{constructor(t,e,a,s,i){super(t,e,a,s,i),this.type=5}_$AI(t,e=this){if((t=dt(this,t,e,0)??u)===C)return;let a=this._$AH,s=t===u&&a!==u||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Bt=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}},Ss={q:_e,J:X,Z:ye,F:1,G:fa,K:Lt,X:ua,Y:dt,tt:Gt,st:pt,it:Vt,et:Ut,ht:jt,ot:Bt},Ts=we.litHtmlPolyfillSupport;Ts?.(Tt,Gt),(we.litHtmlVersions??=[]).push("3.3.3");var xa=(r,t,e)=>{let a=e?.renderBefore??t,s=a._$litPart$;if(s===void 0){let i=e?.renderBefore??null;a._$litPart$=s=new Gt(t.insertBefore(Dt(),i),i,void 0,e??{})}return s._$AI(r),s},Me=globalThis;var rt=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.rt=xa(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return C}};rt._$litElement$=!0,rt.finalized=!0,Me.litElementHydrateSupport?.({LitElement:rt});var zs=Me.litElementPolyfillSupport;zs?.({LitElement:rt});(Me.litElementVersions??=[]).push("4.2.2");var{tt:Es}=Ss,ia=r=>r,Cs=r=>r===null||typeof r!="object"&&typeof r!="function";var ra=(r,t)=>t===void 0?r?._$litType$!==void 0:r?._$litType$===t,Fs=r=>r?._$litType$?.h!=null;var ba=r=>r.strings===void 0,oa=()=>document.createComment(""),it=(r,t,e)=>{let a=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){let i=a.insertBefore(oa(),s),o=a.insertBefore(oa(),s);e=new Es(i,o,r,r.options)}else{let i=e._$AB.nextSibling,o=e._$AM,n=o!==r;if(n){let c;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(c=r._$AU)!==o._$AU&&e._$AP(c)}if(i!==s||n){let c=e._$AA;for(;c!==i;){let d=ia(c).nextSibling;ia(a).insertBefore(c,s),c=d}}}return e},at=(r,t,e=r)=>(r._$AI(t,e),r),Rs={},zt=(r,t=Rs)=>r._$AH=t,ge=r=>r._$AH,me=r=>{r._$AR(),r._$AA.remove()},$a=r=>{r._$AR()};var B=r=>(...t)=>({_$litDirective$:r,values:t}),J=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this.nt=t,this._$AM=e,this.ct=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Mt=(r,t)=>{let e=r._$AN;if(e===void 0)return!1;for(let a of e)a._$AO?.(t,!1),Mt(a,t);return!0},Yt=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while(e?.size===0)},wa=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),Is(t)}};function Os(r){this._$AN!==void 0?(Yt(this),this._$AM=r,wa(this)):this._$AM=r}function Ns(r,t=!1,e=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(a))for(let i=e;i<a.length;i++)Mt(a[i],!1),Yt(a[i]);else a!=null&&(Mt(a,!1),Yt(a));else Mt(this,r)}var Is=r=>{r.type==2&&(r._$AP??=Ns,r._$AQ??=Os)},Et=class extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),wa(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Mt(this,t),Yt(this))}setValue(t){if(ba(this.nt))this.nt._$AI(t,this);else{let e=[...this.nt._$AH];e[this.ct]=t,this.nt._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Wt=class{constructor(t){this.lt=t}disconnect(){this.lt=void 0}reconnect(t){this.lt=t}deref(){return this.lt}},Kt=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(t=>this.dt=t)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var Jt=class extends Et{constructor(){super(...arguments),this.ft=new Wt(this),this.vt=new Kt}render(t,e){return C}update(t,[e,a]){if(this.isConnected||this.disconnected(),e===this.yt)return C;this.yt=e;let s=0,{ft:i,vt:o}=this;return(async(n,c)=>{for await(let d of n)if(await c(d)===!1)return})(e,async n=>{for(;o.get();)await o.get();let c=i.deref();if(c!==void 0){if(c.yt!==e)return!1;a!==void 0&&(n=a(n,s)),c.commitValue(n,s),s++}return!0}),C}commitValue(t,e){this.setValue(t)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},$i=B(Jt),wi=B(class extends Jt{constructor(r){if(super(r),r.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(r,t){return this.rt=r,super.update(r,t)}commitValue(r,t){t===0&&$a(this.rt);let e=it(this.rt);at(e,r)}}),na=r=>Fs(r)?r._$litType$.h:r.strings,_i=B(class extends J{constructor(r){super(r),this.bt=new WeakMap}render(r){return[r]}update(r,[t]){let e=ra(this.gt)?na(this.gt):null,a=ra(t)?na(t):null;if(e!==null&&(a===null||e!==a)){let s=ge(r).pop(),i=this.bt.get(e);if(i===void 0){let o=document.createDocumentFragment();i=xa(u,o),i.setConnected(!1),this.bt.set(e,i)}zt(i,[s]),it(i,void 0,s)}if(a!==null){if(e===null||e!==a){let s=this.bt.get(a);if(s!==void 0){let i=ge(s).pop();$a(r),it(r,void 0,i),zt(r,[i])}}this.gt=t}else this.gt=void 0;return this.render(t)}});var yi=B(class extends J{constructor(r){if(super(r),r.type!==1||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.wt===void 0){this.wt=new Set,r.strings!==void 0&&(this._t=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(t)}let e=r.element.classList;for(let a of this.wt)a in t||(e.remove(a),this.wt.delete(a));for(let a in t){let s=!!t[a];s===this.wt.has(a)||this._t?.has(a)||(s?(e.add(a),this.wt.add(a)):(e.remove(a),this.wt.delete(a)))}return C}}),Hs={},ki=B(class extends J{constructor(){super(...arguments),this.St=Hs}render(r,t){return t()}update(r,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.St)&&this.St.length===t.length&&t.every((a,s)=>a===this.St[s]))return C}else if(this.St===t)return C;return this.St=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var Ai=B(class extends J{constructor(){super(...arguments),this.key=u}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(zt(r),this.key=t),e}}),Mi=B(class extends J{constructor(r){if(super(r),r.type!==3&&r.type!==1&&r.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!ba(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===C||t===u)return t;let e=r.element,a=r.name;if(r.type===3){if(t===e[a])return C}else if(r.type===4){if(!!t===e.hasAttribute(a))return C}else if(r.type===1&&e.getAttribute(a)===t+"")return C;return zt(r),t}});var ve=new WeakMap,Di=B(class extends Et{render(r){return u}update(r,[t]){let e=t!==this.lt;return e&&this.$t(void 0),(e||this.Tt!==this.xt)&&(this.lt=t,this.Et=r.options?.host,this.$t(this.xt=r.element)),u}$t(r){if(this.lt!==void 0)if(this.isConnected||(r=void 0),typeof this.lt=="function"){let t=this.Et??globalThis,e=ve.get(t);e===void 0&&(e=new WeakMap,ve.set(t,e)),e.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),e.set(this.lt,r),r!==void 0&&this.lt.call(this.Et,r)}else this.lt.value=r}get Tt(){return typeof this.lt=="function"?ve.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),la=(r,t,e)=>{let a=new Map;for(let s=t;s<=e;s++)a.set(r[s],s);return a},L=B(class extends J{constructor(r){if(super(r),r.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(r,t,e){let a;e===void 0?e=t:t!==void 0&&(a=t);let s=[],i=[],o=0;for(let n of r)s[o]=a?a(n,o):o,i[o]=e(n,o),o++;return{values:i,keys:s}}render(r,t,e){return this.Ct(r,t,e).values}update(r,[t,e,a]){let s=ge(r),{values:i,keys:o}=this.Ct(t,e,a);if(!Array.isArray(s))return this.Pt=o,i;let n=this.Pt??=[],c=[],d,h,p=0,m=s.length-1,v=0,f=i.length-1;for(;p<=m&&v<=f;)if(s[p]===null)p++;else if(s[m]===null)m--;else if(n[p]===o[v])c[v]=at(s[p],i[v]),p++,v++;else if(n[m]===o[f])c[f]=at(s[m],i[f]),m--,f--;else if(n[p]===o[f])c[f]=at(s[p],i[f]),it(r,c[f+1],s[p]),p++,f--;else if(n[m]===o[v])c[v]=at(s[m],i[v]),it(r,s[p],s[m]),m--,v++;else if(d===void 0&&(d=la(o,v,f),h=la(n,p,m)),d.has(n[p]))if(d.has(n[m])){let b=h.get(o[v]),D=b!==void 0?s[b]:null;if(D===null){let O=it(r,s[p]);at(O,i[v]),c[v]=O}else c[v]=at(D,i[v]),it(r,s[p],D),s[b]=null;v++}else me(s[m]),m--;else me(s[p]),p++;for(;v<=f;){let b=it(r,c[f+1]);at(b,i[v]),c[v++]=b}for(;p<=m;){let b=s[p++];b!==null&&me(b)}return this.Pt=o,zt(r,c),C}}),_a="important",Ps=" !"+_a,Si=B(class extends J{constructor(r){if(super(r),r.type!==1||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let a=r[e];return a==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(r,[t]){let{style:e}=r.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(t)),this.render(t);for(let a of this.Mt)t[a]==null&&(this.Mt.delete(a),a.includes("-")?e.removeProperty(a):e[a]=null);for(let a in t){let s=t[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(Ps);a.includes("-")||i?e.setProperty(a,i?s.slice(0,-11):s,i?_a:""):e[a]=s}}return C}}),Ti=B(class extends J{constructor(r){if(super(r),r.type!==2)throw Error("templateContent can only be used in child bindings")}render(r){return this.At===r?C:(this.At=r,document.importNode(r.content,!0))}}),ft=class extends J{constructor(t){if(super(t),this.gt=u,t.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this.kt=void 0,this.gt=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.gt)return this.kt;this.gt=t;let e=[t];return e.raw=e,this.kt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ft.directiveName="unsafeHTML",ft.resultType=1;var zi=B(ft);var Ct=class extends ft{};Ct.directiveName="unsafeSVG",Ct.resultType=2;var Q=B(Ct),ca=r=>!Cs(r)&&typeof r.then=="function",da=1073741823;var xe=class extends Et{constructor(){super(...arguments),this.Ot=da,this.Ut=[],this.ft=new Wt(this),this.vt=new Kt}render(...t){return t.find(e=>!ca(e))??C}update(t,e){let a=this.Ut,s=a.length;this.Ut=e;let i=this.ft,o=this.vt;this.isConnected||this.disconnected();for(let n=0;n<e.length&&!(n>this.Ot);n++){let c=e[n];if(!ca(c))return this.Ot=n,c;n<s&&c===a[n]||(this.Ot=da,s=0,Promise.resolve(c).then(async d=>{for(;o.get();)await o.get();let h=i.deref();if(h!==void 0){let p=h.Ut.indexOf(c);p>-1&&p<h.Ot&&(h.Ot=p,h.setValue(d))}}))}return C}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Ei=B(xe);var qs=Symbol.for(""),Ls=r=>{if(r?.r===qs)return r?._$litStatic$};var pa=new Map,ya=r=>(t,...e)=>{let a=e.length,s,i,o=[],n=[],c,d=0,h=!1;for(;d<a;){for(c=t[d];d<a&&(i=e[d],(s=Ls(i))!==void 0);)c+=s+t[++d],h=!0;d!==a&&n.push(i),o.push(c),d++}if(d===a&&o.push(t[a]),h){let p=o.join("$$lit$$");(t=pa.get(p))===void 0&&(o.raw=o,pa.set(p,t=o)),e=n}return r(t,...e)},Ci=ya(l),Fi=ya(gt);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var V={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>'};var ka="./fonts/barlow-400.woff2";var Aa="./fonts/barlow-500.woff2";var Ma="./fonts/barlow-600.woff2";var Da="./fonts/barlow-condensed-500.woff2";var Sa="./fonts/barlow-condensed-600.woff2";var Ta="./fonts/barlow-condensed-700.woff2";var za='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Ea=`"CR Barlow", ${za}`,Ca=`"CR Barlow Condensed", ${za}`;function Fa(){if(document.getElementById("cronologia-fonts"))return;let r=(e,a,s)=>`@font-face{font-family:"${e}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,t=document.createElement("style");t.id="cronologia-fonts",t.textContent=[r("CR Barlow",ka,400),r("CR Barlow",Aa,500),r("CR Barlow",Ma,"600 900"),r("CR Barlow Condensed",Da,500),r("CR Barlow Condensed",Sa,600),r("CR Barlow Condensed",Ta,"700 900")].join(`
`),document.head.appendChild(t)}var Ra=Ft`
  :host {
    --rv-body: ${Qt(Ea)};
    --rv-display: ${Qt(Ca)};
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
  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
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
  .imp-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin: -4px 0 18px;
  }
  .imp-strip button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 11px 6px;
    border-radius: 14px;
    background: var(--rv-surface-2);
    font-size: 13px;
    font-weight: 500;
    color: var(--rv-text-2);
  }
  .imp-strip span {
    text-wrap: balance;
    text-align: center;
    line-height: 1.3;
  }
  .imp-strip .i {
    width: 21px;
    height: 21px;
    color: var(--rv-accent-ink);
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
`,Oa=Ft`
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
`;var Na=Ft`
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
  .ev-row.past {
    opacity: 0.5;
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
  .day-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 4px 4px;
    font-family: var(--rv-display);
    font-size: 19px;
    font-weight: 600;
    text-align: left;
    border-top: 1px solid var(--rv-line);
  }
  .panel.agenda > .overline + .day-head,
  .panel.agenda > .day-head:first-child {
    border-top: 0;
    padding-top: 10px;
  }
  .day-head span {
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

  .allday {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: -2px 0 14px;
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
  @media (max-width: 380px) {
    .seg.compact .i {
      display: none;
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
    justify-content: space-between;
    padding: 10px 4px 4px;
    font-family: var(--rv-display);
    font-size: 21px;
    font-weight: 600;
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
    grid-template-columns: 34px repeat(7, 1fr);
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
  .ev-row.done .ev-title {
    color: var(--rv-muted);
  }
  .tg-ev.done,
  .tg-ad.done {
    opacity: 0.55;
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
  /* Name on top, the phone below it, the test bell on the right: fits any width. */
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
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    max-width: 100%;
  }
  .person-row > .icon-btn {
    grid-column: 3;
    grid-row: 1 / span 2;
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
  .prize-edit {
    margin: 10px 0 4px;
  }
  .prize-edit input {
    width: 100%;
    border: 1.5px solid var(--rv-accent);
    background: var(--rv-bg);
    border-radius: 14px;
    padding: 12px 14px;
    font-size: 16px;
    outline: 0;
    color: var(--rv-text);
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
  .prize-next .flabel {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }
  .prize-next .prize-edit {
    width: 100%;
    margin-top: 0;
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

  .panel.feed,
  .panel.history {
    padding: 0 0 6px;
  }
  .feed-row,
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
  .text-btn.danger {
    color: var(--rv-late);
    margin: 4px 0 12px;
  }

  .setup-card {
    padding: 22px 18px 18px;
    text-align: left;
  }
  .setup-art {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    background: #f2c14e;
    color: #5b3e00;
    margin-bottom: 14px;
  }
  .setup-art .i {
    width: 34px;
    height: 34px;
  }
  .setup-title {
    font-family: var(--rv-display);
    font-size: 26px;
    font-weight: 600;
    margin: 0 0 6px;
    line-height: 1.15;
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
  .chore.todo.late .chore-tx small {
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

  /* ---------- Mais: tabs at the top ---------- */
  .more-tabs {
    position: sticky;
    top: 0;
    z-index: 4;
    margin: 0 0 14px;
    box-shadow: 0 0 0 6px var(--rv-bg);
  }
  .more-tabs button {
    flex: 1 1 auto;
    min-width: 0;
    padding-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
  }
  /* Five tabs: the icons only where there is room for them. */
  @media (max-width: 600px) {
    .more-tabs .i {
      display: none;
    }
  }
  @media (max-width: 370px) {
    .more-tabs button {
      font-size: 13px;
      padding-left: 3px;
      padding-right: 3px;
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
`;var De=class{constructor(t,e){this.url=t,this.onStatus=e,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.open=!0,this.backoff=1e3;let e=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))t.send(a);if(this.onStatus&&this.onStatus(!0),e)for(let a of this.reconnectHandlers)a()},t.onmessage=e=>{let a;try{a=JSON.parse(e.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},t.onclose=()=>{let e=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),e&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(t){this.reconnectHandlers.push(t)}_send(t){let e=JSON.stringify(t);this.open?this.ws.send(e):this.queue.push(e)}sendMessagePromise(t){let e=this.nextId++;return new Promise((a,s)=>{this.pending.set(e,{resolve:a,reject:s}),this._send({...t,id:e})})}subscribeMessage(t,e){let a={cb:t,msg:e,id:null,first:null};this.subs.add(a);let s=new Promise((i,o)=>{a.first={resolve:i,reject:o}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(t){let e=this.nextId++;t.id=e,this.byId.set(e,t),this.pending.set(e,{resolve:()=>{t.first&&t.first.resolve(),t.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(e),this.subs.delete(t),t.first&&t.first.reject(a),t.first=null)}}),this.ws.send(JSON.stringify({...t.msg,id:e}))}};function te(){try{if(window.parent===window)return null;let r=window.parent.document.querySelector("home-assistant");return r&&r.hass||null}catch{return null}}var Ia=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function Ha(){let r=te();return r&&r.themes&&typeof r.themes.darkMode=="boolean"?r.themes.darkMode:!!(Ia&&Ia.matches)}function Pa(){return{topbar:!(window.parent!==window),haptic(t){try{let e=window.parent;e!==window&&e.dispatchEvent(new e.CustomEvent("haptic",{detail:t}))}catch{}},openInHA(t){try{let e=window.parent;if(e!==window&&e.document){e.history.pushState(null,"",t),e.dispatchEvent(new e.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(t,"_top")}}}var Zt=class{constructor(){let t=new URL("ws",location.href);t.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new De(t.href,e=>this.statusHandlers.forEach(a=>a(e)))}onStatus(t){this.statusHandlers.push(t)}onReconnect(t){this.conn.onReconnect(t)}call(t,e={}){return this.conn.sendMessagePromise({type:t,...e})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(t){return this.conn.subscribeMessage(t,{type:"cronologia/subscribe_calendars"})}subscribePrefs(t){return this.conn.subscribeMessage(t,{type:"cronologia/prefs/subscribe"})}subscribeEvents(t,e,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:t,start:e,end:a})}listEvents(t,e,a){return this.call("cronologia/events/list",{entity_id:t,start:e,end:a})}createEvent(t,e){return this.call("calendar/event/create",{entity_id:t,event:e})}updateEvent(t,e,a,{recurrenceId:s,range:i}={}){let o={entity_id:t,uid:e,event:a};return s&&(o.recurrence_id=s),i&&(o.recurrence_range=i),this.call("calendar/event/update",o)}deleteEvent(t,e,{recurrenceId:a,range:s}={}){let i={entity_id:t,uid:e};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(t,e){return this.call("cronologia/prefs/set_calendar",{entity_id:t,prefs:e})}setAppPrefs(t){return this.call("cronologia/prefs/set_app",{prefs:t})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(t){return this.conn.subscribeMessage(t,{type:"cronologia/home/subscribe"})}setCheck(t,e,a,s){return this.call("cronologia/check/set",{key:t,done:e,kind:a,...s?{who:s}:{}})}maintDone(t,e,a){return this.call("cronologia/maint/done",{entity_id:t,uid:e,...a?{who:a}:{}})}scoreReassign(t,e){return this.call("cronologia/score/reassign",{key:t,who:e})}scoreExtra(t,e,a){return this.call("cronologia/score/extra",{who:t,points:e,title:a})}scoreDemerit(t,e){return this.call("cronologia/score/demerit",{demerit:t,who:e})}scoreRemove(t){return this.call("cronologia/score/remove",{key:t})}scoreReward(t,e){return this.call("cronologia/score/reward",{period:t,text:e})}scoreDelivered(t,e){return this.call("cronologia/score/delivered",{period:t,delivered:e})}maintUndo(t,e){return this.call("cronologia/maint/undo",{entity_id:t,uid:e})}payBill(t,e){return this.call("cronologia/contas/pagar",{conta:t,...e?{valor:e}:{}})}unpayBill(t){return this.call("cronologia/contas/desfazer",{conta:t})}newBill(t){return this.call("cronologia/contas/nova",{conta:t})}dataUrl(t){return new URL(`api/export/${t}`,location.href).href}async importData(t){let e=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(t.name||"")},body:t}),a=await e.json().catch(()=>({}));if(!e.ok)throw new Error(a.error||`Erro ${e.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(t){return this.call("cronologia/versions/restore",{name:t})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(t){return this.call("cronologia/backups/restore",{name:t})}addTodo(t,e){return this.call("cronologia/todo/add",{entity_id:t,task:e})}setTodo(t,e,a,s=""){return this.call("cronologia/todo/set",{entity_id:t,uid:e,done:a,who:s})}testAlert(t){return this.call("cronologia/notify/test",{target:t})}exportUrl({calendars:t,start:e,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",t.join(",")),s.searchParams.set("start",e),s.searchParams.set("end",a),s.href}async extract(t){let e=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),a=await e.json().catch(()=>({}));if(!e.ok){let s=new Error(a.error||`Erro ${e.status}`);throw s.code=a.code,s}return a}};var ee=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],qa=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],j=r=>ee.find(t=>t.id===r),La=r=>j(qa[r%qa.length]);function Rt(r,t){let e=r.replace("#",""),a=parseInt(e.length===3?e.replace(/./g,s=>s+s):e,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${t})`}function T(r,t,e="c"){return`--${e}:${r.fill};--${e}i:${t?r.fill:r.ink};--${e}s:${Rt(r.fill,t?.18:.15)};`}var Se=r=>(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var _=(r,t,e)=>`${r} ${r===1?t:e}`,k=(r,t=38)=>r&&r.length>t?r.slice(0,t-1).trimEnd()+"\u2026":r||"",H=r=>r&&r.charAt(0).toUpperCase()+r.slice(1);function ae(r){let t=[],e=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=e.exec(r||"");)s.index>a&&t.push({text:r.slice(a,s.index)}),t.push({url:s[0]}),a=s.index+s[0].length;return a<(r||"").length&&t.push({text:r.slice(a)}),t}var se=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],bt=["dom","seg","ter","qua","qui","sex","s\xE1b"],ht=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],ie=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],xt=r=>String(r).padStart(2,"0"),y=r=>`${r.getFullYear()}-${xt(r.getMonth()+1)}-${xt(r.getDate())}`,M=r=>`${xt(r.getHours())}:${xt(r.getMinutes())}`,A=r=>{let[t,e,a]=r.split("-").map(Number);return new Date(t,e-1,a)},S=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),$=(r,t)=>{let e=new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds());return e.setDate(e.getDate()+t),e},ot=(r,t)=>new Date(r.getFullYear(),r.getMonth()+t,1),I=(r,t)=>r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate(),F=(r,t)=>Math.round((S(r)-S(t))/864e5),Ot=(r,t=0)=>$(S(r),-((r.getDay()-t+7)%7)),Te=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)?A(r):new Date(r);function Y(r){let t=-r.getTimezoneOffset(),e=t>=0?"+":"-";return`${y(r)}T${M(r)}:00${e}${xt(Math.floor(Math.abs(t)/60))}:${xt(Math.abs(t)%60)}`}function P(r,t=new Date,{long:e=!0,cap:a=!0}={}){let s=F(r,t),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${se[r.getDay()]}, ${r.getDate()} de ${e?ht[r.getMonth()]:ie[r.getMonth()]}`,r.getFullYear()!==t.getFullYear()&&(i+=` de ${r.getFullYear()}`)),a?H(i):i}var ze=r=>`${se[r.getDay()]}, ${r.getDate()} de ${ht[r.getMonth()]}`,W=(r,t=new Date)=>`${r.getDate()} ${ie[r.getMonth()]}${r.getFullYear()!==t.getFullYear()?` ${r.getFullYear()}`:""}`;function re(r){let t=Math.round(r/6e4);if(t<1)return"agora";if(t<60)return`em ${t} min`;let e=Math.floor(t/60),a=t%60;if(e<24)return a&&e<4?`em ${e} h ${a} min`:`em ${e} h`;let s=Math.round(e/24);return`em ${_(s,"dia","dias")}`}function Ee(r){let t=Math.round(r/6e4);if(t<60)return`${t} min`;let e=Math.floor(t/60),a=t%60;return a?`${e} h ${a} min`:`${e} h`}var oe=[{id:"",label:"N\xE3o repete"},{id:"DAILY",label:"Todo dia"},{id:"WEEKLY",label:"Toda semana"},{id:"MONTHLY",label:"Todo m\xEAs"},{id:"YEARLY",label:"Todo ano"}];function $t(r){if(!r)return"";let t=Object.fromEntries(r.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),e=Number(t.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[t.FREQ];if(!a)return"Repete";let s=e>1?`A cada ${e} ${a[1]}`:a[0];if(t.BYDAY&&t.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${t.BYDAY.split(",").map(o=>i[o]||o).join(", ")})`}if(t.COUNT)s+=`, ${_(Number(t.COUNT),"vez","vezes")}`;else if(t.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(t.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var Nt=r=>{let t=/FREQ=(\w+)/.exec(r||"");return t?t[1]:""};async function Ce(r,t=1800){let e=a=>new Promise((s,i)=>{let o=new FileReader;o.onload=()=>s(String(o.result).split(",")[1]||""),o.onerror=()=>i(o.error),o.readAsDataURL(a)});try{let a=await createImageBitmap(r,{imageOrientation:"from-image"}),s=Math.min(1,t/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let o=await new Promise(n=>i.toBlob(n,"image/jpeg",.86));return{mime:"image/jpeg",data:await e(o),url:URL.createObjectURL(o)}}catch{return{mime:r.type||"image/jpeg",data:await e(r),url:URL.createObjectURL(r)}}}var Fe={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos"}}},Ks={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},ne={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},R=r=>String(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),ja=r=>String(r).padStart(2,"0");var Ua=(r,t)=>`${r}|${t.uid||t.summary}|${t.recurrence_id||t.start}`;function le(r){let t=String(r||"").replace(/[^\d.,-]/g,"");if(!t)return null;t.includes(",")?t=t.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(t)&&!/\.\d{1,2}$/.test(t)&&(t=t.replace(/\./g,""));let e=Number(t);return Number.isFinite(e)&&e>0?Math.round(e*100)/100:null}var wt=(r,t=!0)=>r==null?"":r.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:t?2:0,maximumFractionDigits:t?2:0});function Js(r){let t=/(\d+)\s*([a-zçê]+)/i.exec(R(r));if(!t)return null;let e=Math.max(1,Math.min(999,Number(t[1]))),a=t[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:e,unit:s}:null}var _t=r=>r?`${r.n} ${r.n===1?ne[r.unit][1]:ne[r.unit][2]}`:"";function Re(r,t,e=1){let a=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=t.n*e;if(t.unit==="dias")a.setDate(a.getDate()+s);else if(t.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=t.unit==="anos"?12*s:s,o=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let n=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(o,n))}return a}var Qs=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Xs(r){let t=[];for(let e of String(r||"").matchAll(Qs))t.push(`${e[3]}-${ja(+e[2])}-${ja(+e[1])}`);return t}var Gs=r=>r.map(t=>`${t.slice(8,10)}/${t.slice(5,7)}/${t.slice(0,4)}`).join(", "),Va=r=>{let t=/(\d+)/.exec(String(r||""));return t?Math.min(1e3,Number(t[1])):0};function Ba(r){let t=String(r||"").replace(/\r/g,"").split(`
`),e=0;for(;e<t.length&&!t[e].trim();)e++;let a=/^#\s*([a-z]+)\b/.exec(R(t[e])),s=a&&Ks[a[1]];if(!s)return null;let i=Object.entries(Fe[s].fields).map(([c,d])=>[c,R(d)]),o={};for(e++;e<t.length;e++){let c=/^([^:]{2,24}):\s*(.*)$/.exec(t[e]);if(!c)break;let d=R(c[1]),h=i.find(([,p])=>p===d||p.startsWith("aviso")&&d.startsWith("aviso"));if(!h)break;o[h[0]]=c[2].trim()}let n={kind:s,notes:t.slice(e).join(`
`).trim()};if(s==="remedio")n.dose=o.dose||"",n.who=o.who||"",n.alert=!/^(nao|desligado|off)/.test(R(o.alert));else if(s==="conta")n.value=le(o.value);else if(s==="rotina")n.who=o.who||"",n.points=Va(o.points);else{n.who=o.who||"",n.every=Js(o.every)||{n:6,unit:"meses"};let c=/(\d+)/.exec(o.warn||"");n.warn=c?Math.min(365,Number(c[1])):7,n.history=Xs(o.history),n.points=Va(o.points)}return n}function Ya(r){let t=[Fe[r.kind].tag],e=(i,o)=>{o!=null&&String(o).trim()&&t.push(`${i}: ${String(o).replace(/\s*\n\s*/g," ").trim()}`)},a=Fe[r.kind].fields;r.kind==="remedio"?(e(a.dose,r.dose),e(a.who,r.who),r.alert===!1&&e(a.alert,"n\xE3o")):r.kind==="conta"?e(a.value,r.value!=null?wt(r.value):""):r.kind==="rotina"?(e(a.who,r.who),r.points>0&&e(a.points,r.points)):(e(a.who,r.who),e(a.every,_t(r.every)),e(a.warn,`${r.warn??7} ${(r.warn??7)===1?"dia":"dias"} antes`),e(a.history,Gs((r.history||[]).slice(0,8))),r.points>0&&e(a.points,r.points));let s=String(r.notes||"").trim();return s?`${t.join(`
`)}
${s}`:t.join(`
`)}var Wa=4,Zs=300*1e3;function ce(r,t){let e=Te(t.start),a=Te(t.end),s=t.all_day!=null?!!t.all_day:/^\d{4}-\d{2}-\d{2}$/.test(t.start);return{key:Ua(r,t),kind:Ba(t.description),cal:r,uid:t.uid||null,rid:t.recurrence_id||null,rrule:t.rrule||null,summary:t.summary||"(sem t\xEDtulo)",description:t.description||"",location:t.location||"",allDay:s,start:e,end:a>e?a:$(e,s?1:0),raw:t}}var de=class{constructor(t,e){this.api=t,this.onChange=e,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(t){let e=[...new Set(t)].sort();if(e.join()!==this.calendars.join()){this.calendars=e;for(let a of this.windows)this._syncWindow(a)}}ensure(t,e){let a=this._covering(t,e);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:$(S(t),-7),end:$(S(e),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(t,e,a=this.calendars){let s=this._covering(t,e),i=[];if(!s)return i;for(let o of a){let n=s.cals.get(o);if(n)for(let c of n.events)c.start<e&&c.end>t&&i.push(c)}return i.sort((o,n)=>o.start-n.start||Number(n.allDay)-Number(o.allDay)||o.summary.localeCompare(n.summary,"pt-BR"))}loading(t,e){let a=this._covering(t,e);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let t=new Map;for(let e of this.windows)for(let[a,s]of e.cals)s.error&&t.set(a,s.error);return t}refresh(t){for(let e of this.windows){let a=e.cals.get(t);a&&a.poll&&this._fetch(e,t,a)}}reloadAll(){for(let t of this.windows)for(let[e,a]of t.cals)a.poll&&this._fetch(t,e,a)}dispose(){for(let t of this.windows)for(let[e]of t.cals)this._drop(t,e);this.windows=[]}_covering(t,e){let a=null;for(let s of this.windows)s.start<=t&&s.end>=e&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(t){for(let e of this.calendars)t.cals.has(e)||this._add(t,e);for(let e of[...t.cals.keys()])this.calendars.includes(e)||this._drop(t,e)}_add(t,e){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};t.cals.set(e,a);let s=Y(t.start),i=Y(t.end);if(this.noSubscribe)return this._startPolling(t,e,a);a.unsub=this.api.subscribeEvents(e,s,i,o=>{t.cals.has(e)&&(o&&Array.isArray(o.events)?(a.events=o.events.map(n=>ce(e,n)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(o=>o&&o.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(t,e,a)):(a.loaded=!0,a.error=o&&o.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(t,e,a){return this._fetch(t,e,a),a.poll=setInterval(()=>this._fetch(t,e,a),Zs),null}async _fetch(t,e,a){try{let s=await this.api.listEvents(e,Y(t.start),Y(t.end));if(!t.cals.has(e))return;a.events=(s.events||[]).map(i=>ce(e,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(t,e){let a=t.cals.get(e);a&&(t.cals.delete(e),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=Wa)){this.windows.sort((t,e)=>e.used-t.used);for(let t of this.windows.splice(Wa))for(let[e]of t.cals)this._drop(t,e)}}};function ut(r,t){let e=S(t),a=$(e,1);return r.filter(s=>s.start<a&&s.end>e)}function Ka(r,t){let e=S(t).getTime(),a=e+864e5,s=r.filter(d=>!d.allDay).map(d=>({e:d,s:Math.max(d.start.getTime(),e),t:Math.min(Math.max(d.end.getTime(),d.start.getTime()+15*6e4),a)})).sort((d,h)=>d.s-h.s||h.t-d.t),i=[],o=[],n=-1,c=()=>{let d=[];for(let h of o){let p=d.findIndex(m=>m<=h.s);p<0?(p=d.length,d.push(h.t)):d[p]=h.t,h.lane=p}for(let h of o)i.push({...h,lanes:d.length});o=[]};for(let d of s)o.length&&d.s>=n&&c(),o.push(d),n=Math.max(n,d.t);return o.length&&c(),i.map(d=>({event:d.e,top:(d.s-e)/36e5,height:(d.t-d.s)/36e5,lane:d.lane,lanes:d.lanes}))}var Oe=r=>r.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function ti(r){return r.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function ei(r){let t=r.indexOf(":");if(t<0)return null;let e=r.slice(0,t),a=r.slice(t+1),[s,...i]=e.split(";"),o={};for(let n of i){let[c,d]=n.split("=");c&&(o[c.toUpperCase()]=(d||"").replace(/^"|"$/g,""))}return{name:s.toUpperCase(),params:o,value:a}}function Ja(r,t){try{let e=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(e.formatToParts(new Date(t)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-t}catch{return null}}function Qa(r){let t=r.value.trim(),e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(t);if(!e)return null;let[,a,s,i,o,n,c,d]=e;if(o==null||r.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(d)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+o,+n,+(c||0)))};let h=r.params.TZID;if(h){let p=Date.UTC(+a,+s-1,+i,+o,+n,+(c||0)),m=Ja(h,p);if(m!=null){let v=p-m,f=Ja(h,v);return{allDay:!1,date:new Date(p-(f??m))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+o,+n,+(c||0))}}function ai(r){let t=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(r.trim());if(!t)return null;let[,e,a,s,i,o,n]=t,c=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+o||0)*60+(+n||0))*1e3;return e==="-"?-c:c}function Xa(r){let t=[],e=null,a=0;for(let i of ti(r)){if(/^BEGIN:VEVENT/i.test(i)){e={},a=0;continue}if(!e)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){t.push(e),e=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let o=ei(i);o&&(o.name==="SUMMARY"?e.summary=Oe(o.value):o.name==="DESCRIPTION"?e.description=Oe(o.value):o.name==="LOCATION"?e.location=Oe(o.value):o.name==="DTSTART"?e.dtstart=Qa(o):o.name==="DTEND"?e.dtend=Qa(o):o.name==="DURATION"?e.duration=ai(o.value):o.name==="RRULE"?e.rrule=o.value.trim():o.name==="STATUS"?e.status=o.value.trim().toUpperCase():o.name==="RECURRENCE-ID"&&(e.recurrence=!0))}let s=[];for(let i of t){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let o=i.dtstart.date,n=i.dtend?i.dtend.date:i.duration!=null?new Date(o.getTime()+i.duration):null,c=i.dtstart.allDay,d={title:(i.summary||"").trim()||"Evento",date:y(o),start:c?"":M(o),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(c){if(n){let h=new Date(n.getFullYear(),n.getMonth(),n.getDate()-1);h>o&&(d.end_date=y(h))}}else n&&n>o&&(d.end=M(n),y(n)!==y(o)&&(d.end_date=y(n)));s.push(d)}return s}var w=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,yt={"":{label:"Evento",icon:"calendar"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},es=["SU","MO","TU","WE","TH","FR","SA"],si=["D","S","T","Q","Q","S","S"],ii=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],ri=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],oi=r=>r.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),Ne=r=>(r||"?").trim().charAt(0).toUpperCase(),Ga=r=>r<60?`${r} min`:`${Math.floor(r/60)} h${r%60?` ${r%60} min`:""}`;function Za(r,t,e){let a=F(A(r),t);return e?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function ni(r,t){return r.days<-1?`venceu h\xE1 ${-r.days} dias`:r.days===-1?"venceu ontem":r.days===0?"\xE9 hoje":r.days===1?"amanh\xE3":r.days<=60?`em ${r.days} dias`:`em ${W(A(r.due),t)}`}function ts(r,t){let e=Object.fromEntries(String(r||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(o=>o.split("="))),a={freq:"uma",byday:[t.getDay()],interval:3,dur:"sempre",until:y($(t,30)),days:7},s=Number(e.INTERVAL||1);e.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):e.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:e.BYDAY?e.BYDAY.split(",").map(o=>es.indexOf(o.slice(-2))).filter(o=>o>=0):[t.getDay()]}):e.FREQ==="MONTHLY"?a.freq="mensal":e.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(e.UNTIL||"");if(i){let o=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:y(o)})}return a}var as=r=>class extends r{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],targets:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(t){return t.gerencia?t.gerencia.pago?{at:null,by:""}:null:t.todo?t.todo.done?{at:null,by:""}:null:this._ix().checks[t.key]||null}_targetName(t){let e=this._ix().targets.find(a=>a.id===t);return e?e.name:(t||"").replace(/^mobile_app_/,"").replace(/_/g," ")}_gerenciaEvents(t,e){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=A(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:$(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<e&&s.end>t))}_billsList(){let t=this._ix(),e=S(new Date(this._now)),a=y(e),s=y($(e,8)),i=y($(e,-1)),o=[];for(let n of t.gerencia&&t.gerencia.contas||[]){let c=!n.pago,d=this._paidNow&&this._paidNow.has(n.id);(c?!(n.atrasada||n.vencimento<=s):!d&&!(n.vencimento>=i&&n.vencimento<=s))||o.push({id:n.id,source:"gerencia",title:n.descricao,value:n.valor,due:n.vencimento,paid:!!n.pago,overdue:c&&(n.atrasada||n.vencimento<a),sub:n.tipo==="fatura"?_(n.itens||0,"compra","compras"):n.categoria||"",c:n})}for(let n of t.bills||[]){let c=this._cal(n.cal);o.push({id:n.key,source:"cal",title:n.summary,value:n.value,due:n.due,paid:!!n.paid,overdue:n.overdue,sub:c?c.name:"",item:n})}return o.sort((n,c)=>Number(n.paid)-Number(c.paid)||n.due.localeCompare(c.due)||n.title.localeCompare(c.title,"pt-BR"))}_eventOfItem(t){return ce(t.cal,{start:t.start,end:t.end,summary:t.summary,description:t.description,location:t.location,uid:t.uid,recurrence_id:t.rid,rrule:t.rrule})}_openIndexItem(t){this._openEvent(this._eventOfItem(t))}async _check(t,e){try{await this.api.setCheck(t.key,!0,e),this._haptic("success");let a=yt[e];this._showToast(`${k(t.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(t.key,!1,e).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _undoCheck(t,e){try{await this.api.setCheck(t.key,!1,e),this._haptic("light"),this._showToast(`${k(t.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(t.key,!0,e).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(t){if(t.source==="cal")return this._check(t.item,"conta");try{t.busy=!0,this.requestUpdate(),await this.api.payBill(t.id),(this._paidNow||(this._paidNow=new Set)).add(t.id),this._haptic("success"),this._showToast(`${k(t.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(t.id).catch(e=>this._showToast(e.message))})}catch(e){this._showToast(`O GerencIA n\xE3o deu baixa: ${e.message}`)}}async _unpay(t){if(t.source==="cal")return this._undoCheck(t.item,"conta");try{await this.api.unpayBill(t.id),this._showToast(`${k(t.title,26)}: volta para a pagar`)}catch(e){this._showToast(`N\xE3o consegui: ${e.message}`)}}async _testAlert(t){try{await this.api.testAlert(t),this._showToast(`Aviso de teste enviado para ${this._targetName(t)}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#avisos");t&&t.scrollIntoView({block:"start"})}))}_ring(t,e,a=null,s=null){let o=2*Math.PI*15,n=Math.max(0,Math.min(1,t||0));return l`<span class="ring2 ${e}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${n>0?gt`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(n*o).toFixed(2)} ${o.toFixed(2)}`}></circle>`:u}
        </svg>
        ${a!=null?l`<b>${a}</b>`:s||u}
      </span>`}_kindIcon(t){return t.kind?l`<span class="kind-ic">${w(yt[t.kind.kind].icon)}</span>`:u}_renderMedsPanel(){let t=this._ix().meds||[];if(!t.length)return u;let e=t.filter(o=>o.taken).length,a=t.filter(o=>o.state==="atrasado"),s=[];for(let o of t){let n=o.who||"",c=s.find(d=>R(d.who)===R(n));c||s.push(c={who:n,list:[],notify:o.notify}),c.list.push(o)}let i=e===t.length;return l`<div class="panel meds ${a.length?"alert":""} ${i?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${w("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${i?"Tudo tomado":`${e} de ${t.length} ${t.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(e/t.length,a.length?"bad":i?"ok":"acc",`${e}/${t.length}`)}
        </div>
        ${a.length?l`<div class="meds-alert" role="alert">${w("triangle-alert")}<span>${a.length===1?l`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${Ga(a[0].late_min)}`:l`<b>${a.length} doses atrasadas</b>: ${a.map(o=>o.summary).join(", ")}`}</span></div>`:u}
        ${s.map(o=>l`${s.length>1||o.who?l`<div class="meds-who"><span class="avatar">${Ne(o.who)}</span><b>${o.who||"Sem pessoa"}</b><small>${o.list.filter(n=>n.taken).length} de ${o.list.length}</small>${o.notify?l`<span class="who-bell" title="Aviso no celular: ${this._targetName(o.notify)}">${w("bell-ring")}</span>`:u}</div>`:u}
            ${L(o.list,n=>n.key,n=>this._renderDose(n))}`)}
        ${this._alertsHint(t)}
      </div>`}_renderDose(t){let e=t.state,a=[t.dose,e==="tomado"?`tomou \xE0s ${M(new Date(t.taken.at))}${t.taken.by&&R(t.taken.by)!==R(t.who)?` \xB7 ${t.taken.by}`:""}`:e==="atrasado"?`atrasado ${Ga(t.late_min)}`:e==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return l`<div class="dose ${e}">
        <button class="dose-main" @click=${()=>this._openIndexItem(t)}>
          <span class="dose-time">${t.time||"dia"}</span>
          <span class="dose-tx"><b>${t.summary}</b>${a?l`<small>${a}</small>`:u}</span>
        </button>
        ${e==="tomado"?l`<button class="dose-done" @click=${()=>this._undoCheck(t,"remedio")} aria-label="Desmarcar ${t.summary}">${w("check")}</button>`:l`<button class="dose-btn ${e}" @click=${()=>this._check(t,"remedio")}>Tomei</button>`}
      </div>`}_alertsHint(t){let e=this._app("alerts",null)||{};if(e.meds===!1)return l`<button class="panel-foot" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>Avisos no celular desligados</span>${w("chevron-right")}</button>`;let a=[...new Set(t.filter(n=>n.alert&&!n.notify&&n.who).map(n=>n.who))],s=(e.caregivers||[]).length,i=[...new Set(t.filter(n=>n.alert&&n.notify).map(n=>n.who))],o=a.length&&!s?`Sem celular para ${a.join(", ")}: escolha quem avisar`:i.length?`Avisa no celular de ${i.join(", ")}${s?" e de quem cuida":""}`:"Escolha os celulares que recebem os avisos";return l`<button class="panel-foot ${a.length&&!s?"warn":""}" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>${o}</span>${w("chevron-right")}</button>`}_renderBillsPanel(){let t=this._billsList();if(!t.length)return u;let e=new Date(this._now),a=t.filter(c=>!c.paid),s=a.filter(c=>c.overdue),i=a.reduce((c,d)=>c+(d.value||0),0),o=this._billsAll?t:t.slice(0,5),n=this._ix().gerencia||{};return l`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="overline">Contas a pagar</span>
          ${a.length?l`<span class="bills-sum"><b>${wt(i,!1)}</b><small>${s.length?`${_(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:l`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${L(o,c=>c.id,c=>{let d=A(c.due),h=F(d,e)===0;return l`<div class="bill ${c.paid?"paid":c.overdue?"late":h?"today":""}">
            <button class="bill-main" @click=${()=>c.source==="gerencia"?this._openSheet("bill",{b:c}):this._openIndexItem(c.item)}>
              <span class="bill-due"><b>${d.getDate()}</b><small>${ie[d.getMonth()]}</small></span>
              <span class="bill-tx"><b>${c.title}</b><small>${c.value!=null?l`<span class="bill-val">${wt(c.value)}</span> · `:u}${[Za(c.due,e,c.paid),c.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${c.paid?l`<button class="dose-done" @click=${()=>this._unpay(c)} aria-label="Desfazer pagamento de ${c.title}">${w("check")}</button>`:l`<button class="dose-btn ${c.overdue?"atrasado":h?"agora":""}" ?disabled=${c.busy} @click=${()=>this._pay(c)}>Paguei</button>`}
          </div>`})}
        ${t.length>5?l`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${w(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${t.length-5}`}</button>`:u}
        ${n.ligado?l`<div class="panel-foot plain">${w("wallet")}<span>${n.erro?`GerencIA: ${n.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:u}
      </div>`}_renderHomePanel(){let t=this._ix(),e=t.routines||[],a=(t.maint||[]).filter(o=>o.state!=="ok"),s=(t.maint||[]).length;if(!e.length&&!a.length)return s?l`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}<span>Manutenção da casa em dia · ${_(s,"item","itens")}</span>${w("chevron-right")}</button>`:u;let i=e.filter(o=>o.done).length;return l`<div class="panel chores" id="casa">
        ${e.length?l`<div class="chores-head"><span class="overline">Rotina da casa</span><small>${i} de ${e.length}</small></div>
              ${L(e,o=>o.key,o=>l`<div class="chore ${o.done?"done":""}">
                  <button class="chk ${o.done?"on":""}" @click=${()=>o.done?this._undoCheck(o,"rotina"):this._markDone(o,"rotina")} aria-label="${o.done?"Desmarcar":"Marcar"} ${o.summary}">${o.done?w("check"):u}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(o)}><b>${o.summary}</b><small>${[o.yesterday?"ficou de ontem":o.time,o.done?`feito${o.done.by?` por ${o.done.by}`:""}`:o.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
                  ${o.points>0&&this._scoreOn()?l`<span class="pts ${o.done?"got":""}">+${o.points}</span>`:u}
                </div>`)}`:u}
        ${a.length?l`<div class="chores-head ${e.length?"sub":""}"><span class="overline">Manutenção da casa</span></div>
              ${L(a,o=>o.key,o=>this._renderMaintRow(o))}`:u}
        ${s?l`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}Todas as manutenções (${s})</button>`:u}
      </div>`}_renderMaintRow(t){let e=new Date(this._now),a=t.state==="vencida"?"bad":t.state==="perto"?"warn":"ok";return l`<div class="maint ${t.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(t)}>
          ${this._ring(t.progress,a,null,w("wrench"))}
          <span class="maint-tx"><b>${t.summary}</b><small>${ni(t,e)} · a cada ${_t(t.every)}${t.who?` \xB7 ${t.who}`:""}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</small></span>
        </button>
        ${t.canMove?l`<button class="dose-btn ${t.state==="vencida"?"atrasado":t.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(t)}>Feito</button>`:u}
      </div>`}_renderMaintSheet(){let t=this._ix().maint||[];return l`${this._sheetHead("Manuten\xE7\xE3o da casa")}
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
        <div class="maint-list">${t.length?L(t,e=>e.key,e=>this._renderMaintRow(e)):l`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${w("plus")}Nova manutenção</button></div>`}_renderKindFacts(t){let e=t.kind,a=new Date(this._now),s=this._checkOf(t),i=[];if(e.kind==="remedio"){e.dose&&i.push(["pill",`Dose: ${e.dose}`]),e.who&&i.push(["user-round",`Quem toma: ${e.who}`]);let c=this._ix().people.find(d=>R(d.name)===R(e.who));i.push(["bell-ring",e.alert?c&&c.notify?`Aviso no celular: ${this._targetName(c.notify)}`:"Aviso no celular: escolha o celular em Mais":"Sem aviso no celular"])}else e.kind==="conta"?e.value!=null&&i.push(["receipt",wt(e.value)]):e.kind==="rotina"?(e.who&&i.push(["user-round",`Quem faz: ${e.who}`]),e.points>0&&i.push(["award",`${e.points} pontos para quem fizer`])):e.kind==="manutencao"&&(e.points>0&&i.push(["award",`${e.points} pontos para quem fizer`]),i.push(["repeat",`A cada ${_t(e.every)}, contando da \xFAltima vez`]),e.who&&i.push(["user-round",`Quem faz: ${e.who}`]),i.push(["bell-ring",`Aparece na Agora ${_(e.warn,"dia","dias")} antes`]),e.history&&e.history.length&&i.push(["check",`Feito em ${e.history.slice(0,4).map(c=>W(A(c),a)).join(", ")}`]));let o=yt[e.kind],n=u;if(e.kind==="manutencao"){let c=(this._ix().maint||[]).find(d=>d.cal===t.cal&&d.uid===t.uid);c&&c.canMove&&(n=l`<button class="btn primary kind-act" @click=${()=>this._maintDone(c)}>${w("check")}Feito hoje</button>`)}else if(t.start<$(S(a),2)){let c={key:t.key,summary:t.summary};n=s?l`<div class="kind-state">${w("circle-check")}<span>${H(o.done)}${s.at?` ${F(new Date(s.at),a)===0?"hoje":W(new Date(s.at),a)} \xE0s ${M(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(c,e.kind)}>Desfazer</button></div>`:e.kind==="rotina"||e.kind==="manutencao"?l`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...c,points:e.points||0},e.kind))}>${w("check")}${o.verb}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</button>`:l`<button class="btn primary kind-act" @click=${()=>this._check(c,e.kind).then(()=>this._closeSheet())}>${w("check")}${o.verb}</button>`}return l`${i.map(([c,d])=>l`<div class="fact">${w(c)}<span>${d}</span></div>`)}
        ${e.notes?l`<div class="fact notes">${w("file-text")}<span>${e.notes}</span></div>`:u}
        ${n}`}_renderBillSheet(){let t=this._form.b,e=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===t.id)||t.c,a=new Date(this._now),s=A(e.vencimento);return l`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${e.descricao}</h3><p class="ev-cal">GerencIA · <b>${Za(e.vencimento,a,e.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${w("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${w("receipt")}<span><b>${wt(e.valor)}</b>${e.tipo==="fatura"?` \xB7 ${_(e.itens||0,"compra","compras")} na fatura`:e.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${w("calendar")}<span>${F(s,a)<0?"Venceu":"Vence"} ${P(s,a,{cap:!1})}</span></div>
          ${e.categoria?l`<div class="fact">${w("layers")}<span>${e.categoria}</span></div>`:u}
          ${e.conta?l`<div class="fact">${w("wallet")}<span>${e.conta}</span></div>`:u}
        </div>
        <p class="sheet-note">${w("info")} ${e.pago?"J\xE1 est\xE1 paga no GerencIA.":e.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${e.pago?l`<button class="btn outline" @click=${()=>this._unpay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("undo-2")}Desfazer pagamento</button>`:l`<button class="btn primary" @click=${()=>this._pay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("check")}Paguei</button>`}
        </div>`}_kindCal(t){let e=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[t];return(a&&e.find(i=>a.test(i.name)&&i.canUpdate)||e.find(i=>i.id===this._defaultCal())||e[0]||{}).id||null}_openKindForm({kind:t="remedio",ev:e=null,copy:a=!1,date:s=null}={}){let i=this._writable(),o=this._ix().gerencia||{};if(!i.length&&!(t==="conta"&&o.ligado)&&!(e&&!a)){this._openSheet("nocal",{});return}let n=S(new Date),c=s?S(s):n,d={mode:"add",kind:t,cal:this._kindCal(t),title:"",date:y(c),times:t==="rotina"?["19:00"]:["08:00"],allDay:t!=="remedio",...ts(t==="conta"?"":"FREQ=DAILY",c),dose:"",who:"",whoOther:!1,alert:!0,value:"",repeat:"mensal",dest:o.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},last:y(n),warn:7,history:[],points:this._scoreOn()&&(t==="rotina"||t==="manutencao")?t==="rotina"?10:30:0,notes:"",location:""};if(e){let h=e.kind,p=ts(e.rrule,e.start);d={...d,...p,mode:a?"add":"edit",kind:h.kind,cal:a?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._kindCal(h.kind):e.cal,origCal:e.cal,uid:e.uid,rid:a?null:e.rid,title:e.summary,date:y(e.start),times:e.allDay?["09:00"]:[M(e.start)],allDay:e.allDay,dose:h.dose||"",who:h.who||"",alert:h.alert!==!1,value:h.value!=null?String(h.value.toFixed(2)).replace(".",","):"",repeat:p.freq==="mensal"?"mensal":p.freq==="anual"?"anual":"nao",dest:"cal",every:h.every||d.every,warn:h.warn??7,history:h.history||[],last:h.history&&h.history[0]||d.last,points:h.points||0,notes:h.notes||"",location:e.location||""}}this._openSheet("form",d),d.mode==="add"&&this.updateComplete.then(()=>{let h=this.renderRoot.querySelector(".sheet .ev-title-input");h&&h.focus()})}_kindRrule(t,e,a){let s;if(t.freq==="diario")s="FREQ=DAILY";else if(t.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(t.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(t.interval)||3))}`;else if(t.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...t.byday].sort().map(i=>es[i]).join(",")}`;else if(t.freq==="mensal")s="FREQ=MONTHLY";else return null;if(t.dur!=="sempre"){let i=t.dur==="ate"?A(t.until):$(a,Math.max(1,Number(t.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=e?`;UNTIL=${y(i).replace(/-/g,"")}`:`;UNTIL=${oi(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(t,{keepRrule:e=!0}={}){let a=(t.title||"").trim();if(!a)throw new Error(t.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:t.kind,notes:t.notes};if(t.kind==="remedio")Object.assign(s,{dose:t.dose,who:t.who,alert:t.alert});else if(t.kind==="rotina")Object.assign(s,{who:t.who,points:Math.max(0,Math.round(Number(t.points)||0))});else if(t.kind==="conta"){if(s.value=le(t.value),!s.value)throw new Error("Coloque o valor")}else{if(!(t.every&&t.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:t.who,every:t.every,warn:t.warn,history:t.mode==="edit"?t.history:t.last?[t.last]:[],points:Math.max(0,Math.round(Number(t.points)||0))})}let i={summary:a,description:Ya(s)};if((t.location||"").trim()&&(i.location=t.location.trim()),t.kind==="manutencao"){let f=t.mode==="edit"?A(t.date):Re(A(t.last||y(new Date)),t.every);return[{...i,start:y(f),end:y($(f,1))}]}if(t.kind==="conta"){let f=A(t.date),b={...i,start:y(f),end:y($(f,1))};return e&&t.repeat!=="nao"&&(b.rrule=t.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[b]}let o=A(t.date);if(t.freq==="semana"){if(!t.byday.length)throw new Error("Escolha os dias da semana");if(t.mode==="add")for(let f=0;f<7&&!t.byday.includes(o.getDay());f++)o=$(o,1)}let n=t.kind==="rotina"&&t.allDay,c=e?this._kindRrule(t,n,o):null,d=c?{rrule:c}:{};if(n)return[{...i,start:y(o),end:y($(o,1)),...d}];let h=[...new Set((t.times||[]).filter(f=>/^\d{2}:\d{2}$/.test(f)))].sort();if(!h.length)throw new Error("Escolha o hor\xE1rio");let p=t.kind==="remedio"?15:30,m=f=>{if(t.freq==="alternado")return $(f,2);if(t.freq==="intervalo")return $(f,Math.max(2,Number(t.interval)||3));if(t.freq==="mensal")return new Date(f.getFullYear(),f.getMonth()+1,f.getDate());if(t.freq==="semana"){let b=$(f,1);for(let D=0;D<7&&!t.byday.includes(b.getDay());D++)b=$(b,1);return b}return $(f,1)},v=new Date;return h.map(f=>{let[b,D]=f.split(":").map(Number),O=o;t.mode==="add"&&t.freq!=="uma"&&new Date(O.getFullYear(),O.getMonth(),O.getDate(),b,D)<v&&(O=m(O));let K=new Date(O.getFullYear(),O.getMonth(),O.getDate(),b,D);return{...i,start:Y(K),end:Y(new Date(K.getTime()+p*6e4)),...d}})}async _saveKindForm(){let t=this._form;if(t.kind==="tarefa")return this._saveTodoForm();if(t.kind==="conta"&&t.dest==="gerencia"&&t.mode==="add"){let o=le(t.value);if(!(t.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!o)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:t.title.trim(),valor:o,vencimento:t.date,repete:t.repeat,categoria:t.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(n){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${n.message}`)}return}let e;try{e=this._kindEvents(t)}catch(o){this._showToast(o.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=e[0];if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:s});return}this._setForm({saving:!0});let i=yt[t.kind].label;try{if(t.mode==="add"){for(let o of e)await this.api.createEvent(t.cal,o);this._done(e.length>1?`${i} criado: ${e.length} hor\xE1rios em ${k(a.name,20)}`:`${i} criado em ${k(a.name,24)}`,t.cal,s.start)}else t.cal!==t.origCal?(await this.api.createEvent(t.cal,s),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`${i} movido para ${k(a.name,24)}`,t.cal,s.start)):(await this.api.updateEvent(t.cal,t.uid,s),this._done(`${i} salvo`,t.cal,s.start))}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${o.message}`)}}_renderModelChips(t){let e=this._form;return l`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(yt).filter(([a])=>a!=="tarefa"||this._todos().lists.length).map(([a,s])=>l`<button class="model ${t===a?"on":""}" role="radio" aria-checked=${t===a?"true":"false"} @click=${()=>{if(t===a)return;let i=e.date?A(e.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${w(s.icon)}<span>${s.label}</span></button>`)}
      </div>`}_dateField(t,e,a,s,{quick:i=!0}={}){let o=new Date,n=S(o),c=i?[["Hoje",y(n)],["Amanh\xE3",y($(n,1))]]:[],d=c.some(([,h])=>h===e);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${c.map(([h,p])=>l`<button class="pick ${e===p?"on":""}" @click=${()=>a(p)}>${h}</button>`)}
          <button class="pick ${d?"":"on"}" @click=${()=>{let h=this.renderRoot.querySelector(`#${s}`);try{h.showPicker()}catch{h.focus(),h.click()}}}>${w("calendar")}<span>${!d&&e?H(P(A(e),o,{long:!1})):"Outra data"}</span>
            <input id=${s} class="hidden-input" type="date" tabindex="-1" .value=${e} @change=${h=>h.target.value&&a(h.target.value)} />
          </button>
        </div>
      </div>`}_whoField(t){let e=this._form,a=[...new Set([...(this._ix().people||[]).map(i=>i.name),...e.who?[e.who]:[]])],s=a.some(i=>i===e.who);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${a.map(i=>l`<button class="pick person ${e.who===i&&!e.whoOther?"on":""}" @click=${()=>this._setForm({who:e.who===i?"":i,whoOther:!1})}><span class="avatar sm">${Ne(i)}</span><span>${i}</span></button>`)}
          <button class="pick ghost ${e.whoOther?"on":""}" @click=${()=>this._setForm({whoOther:!0,who:s?"":e.who})}>${w("plus")}<span>Outra pessoa</span></button>
        </div>
        ${e.whoOther?l`<input type="text" class="who-input" .value=${e.who} placeholder="Nome (pode ser o pet também)" @input=${i=>this._setForm({who:i.target.value})} />`:u}
      </div>`}_freqField(t){let e=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...e.kind==="rotina"?[["mensal","Todo m\xEAs"]]:[],["uma","S\xF3 uma vez"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([s,i])=>l`<button class="pick ${e.freq===s?"on":""}" @click=${()=>this._setForm({freq:s})}>${s!=="uma"?w("repeat"):u}<span>${i}</span></button>`)}</div>
        ${e.freq==="semana"?l`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(s=>{let i=e.byday.includes(s);return l`<button class="wdp ${i?"on":""}" aria-pressed=${i?"true":"false"} aria-label=${bt[s]} @click=${()=>this._setForm({byday:i?e.byday.filter(o=>o!==s):[...e.byday,s]})}>${si[s]}</button>`})}
            </div>`:u}
        ${e.freq==="intervalo"?l`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(e.interval)} @input=${s=>this._setForm({interval:s.target.value})} /><span class="tl">dias</span></div>`:u}
      </div>`}_pointsField(){let t=this._form,e=Number(t.points)||0;return l`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row">
          ${[0,5,10,20,30,50].map(a=>l`<button class="pick ${e===a?"on":""}" @click=${()=>this._setForm({points:a})}>${a?`+${a}`:"Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(e)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${e>0&&!this._scoreOn()?l`<span class="field-hint">${w("trophy")}<span>Os pontos contam quando o placar estiver ligado, na aba <b>Recompensas</b>.</span></span>`:u}
      </div>`}_durField(t){let e=this._form;if(e.freq==="uma")return u;let a=e.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([s,i])=>l`<button class="pick ${e.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${e.dur==="dias"?l`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(e.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:u}
        ${e.dur==="ate"?l`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${e.until} min=${e.date} @change=${s=>s.target.value&&this._setForm({until:s.target.value})} /></div>`:u}
      </div>`}_calField(){let t=this._form,e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(s=>s.id===t.cal):e.filter(s=>s.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e;return a.length<=1?u:l`<div class="field">
        <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>l`<button class="pick list ${t.cal===s.id?"on":""}" style=${T(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${k(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let t=this._form;if(t.kind==="tarefa")return this._renderTodoForm();let e=t.kind,a=yt[e],s=new Date,i=this._ix().gerencia||{},o=e==="conta"&&t.dest==="gerencia"&&t.mode==="add",n={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[e],c=l`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${t.notes} placeholder=${e==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${h=>this._setForm({notes:h.target.value})}></textarea></label>`,d;if(e==="remedio"){let h=(this._ix().people||[]).find(m=>R(m.name)===R(t.who)),p=t.mode==="add";d=l`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${t.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${m=>this._setForm({dose:m.target.value})} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${p?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${p?l`<div class="chip-row" style="margin-bottom:10px">${ii.map(([m,v])=>l`<button class="pick ${t.times.join()===v.join()?"on":""}" @click=${()=>this._setForm({times:[...v]})}>${m}</button>`)}</div>`:u}
            <div class="times">
              ${t.times.map((m,v)=>l`<span class="time-pill"><input type="time" .value=${m} aria-label="Horário ${v+1}" @change=${f=>f.target.value&&this._setForm({times:t.times.map((b,D)=>D===v?f.target.value:b)})} />${t.times.length>1?l`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:t.times.filter((f,b)=>b!==v)})}>${w("x")}</button>`:u}</span>`)}
              ${p&&t.times.length<8?l`<button class="pick ghost" @click=${()=>this._setForm({times:[...t.times,"12:00"]})}>${w("plus")}<span>Horário</span></button>`:u}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(t.mode==="add"?"Come\xE7a":"Data",t.date,m=>this._setForm({date:m}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          <div class="row switch-row">
            <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${t.alert?h&&h.notify?`Na hora e de novo se atrasar, no ${this._targetName(h.notify)}.`:t.who?l`Escolha o celular de ${t.who} em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${t.alert} @change=${m=>this._setForm({alert:m.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
          </div>
          ${c}`}else if(e==="conta")d=l`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${t.value} placeholder="0,00" @input=${h=>this._setForm({value:h.target.value})} /></span></label>
          ${this._dateField(t.repeat==="nao"?"Vence":"Primeiro vencimento",t.date,h=>this._setForm({date:h}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([h,p])=>l`<button class="pick ${t.repeat===h?"on":""}" @click=${()=>this._setForm({repeat:h})}>${h!=="nao"?w("repeat"):u}<span>${p}</span></button>`)}</div></div>
          ${i.ligado&&t.mode==="add"?l`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${t.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${w("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${t.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${w("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${w("info")}<span>${t.dest==="gerencia"?"Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio, com o Paguei daqui."}</span></span>
              </div>`:u}
          ${o&&(i.categorias||[]).length?l`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${h=>this._setForm({categoria:h.target.value})}><option value="">Sem categoria</option>${i.categorias.map(h=>l`<option value=${h.id} ?selected=${t.categoria===h.id}>${h.nome}</option>`)}</select></label>`:u}
          ${o?u:l`${this._calField()}${c}`}`;else if(e==="rotina")d=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${t.allDay?"on":""}" @click=${()=>this._setForm({allDay:!0})}>Qualquer hora</button>
              <button class="pick ${t.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1})}>${w("clock")}<span>Num horário</span></button>
              ${t.allDay?u:l`<input type="time" class="inline-time" .value=${t.times[0]||"19:00"} @change=${h=>h.target.value&&this._setForm({times:[h.target.value]})} aria-label="Horário" />`}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(t.mode==="add"?"Come\xE7a":"Data",t.date,h=>this._setForm({date:h}),"kf-date")}
          ${this._durField("At\xE9 quando")}
          ${this._calField()}
          ${c}`;else{let h=t.mode==="edit"?A(t.date):Re(A(t.last||y(s)),t.every);d=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row" style="margin-bottom:10px">${ri.map(p=>l`<button class="pick ${t.every.n===p.n&&t.every.unit===p.unit?"on":""}" @click=${()=>this._setForm({every:{...p}})}>${_t(p)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(t.every.n)} @input=${p=>this._setForm({every:{...t.every,n:Math.max(1,Number(p.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(ne).map(p=>l`<button class=${t.every.unit===p?"on":""} @click=${()=>this._setForm({every:{...t.every,unit:p}})}>${p}</button>`)}</div>
            </div>
            <span class="field-hint">${w("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${_t(t.every)}.</span></span>
          </div>
          ${t.mode==="add"?this._dateField("Feito pela \xFAltima vez",t.last,p=>this._setForm({last:p}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",t.date,p=>this._setForm({date:p}),"kf-date",{quick:!1})}
          <p class="next-line">${w("calendar-check")}<span>Próxima: <b>${H(P(h,s,{long:!1}))}</b>${F(h,s)>1?` \xB7 em ${_(F(h,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na Agora</span><div class="chip-row">${[3,7,15,30].map(p=>l`<button class="pick ${t.warn===p?"on":""}" @click=${()=>this._setForm({warn:p})}>${p} dias antes</button>`)}</div></div>
          ${this._calField()}
          ${c}`}return l`
        ${this._sheetHead(t.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${t.mode==="add"?this._renderModelChips(e):u}
        <label class="field">
          <span class="flabel">${n[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder=${n[1]} @input=${h=>this._setForm({title:h.target.value})}></textarea>
        </label>
        ${d}
        ${t.rid?l`<div class="field-hint">${w("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveKindForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?o?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let t=this._ix(),e=this._app("alerts",null)||{},a=e.meds!==!1,s=e.late==null?30:e.late,i=e.caregivers||[],o=t.people||[],n=t.targets||[],c=this._app("people",null)||{},d=p=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...p}}),h=(p,m)=>{let v={...c};m?v[p]={notify:m}:delete v[p],this._saveAppPrefs({people:v})};return l`<div class="panel" id="avisos">
        <div class="overline">Avisos de remédio no celular</div>
        <p class="panel-lead">Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.</p>
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${p=>d({meds:p.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?l`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${o.length?o.map(p=>{let m=c[p.name]&&c[p.name].notify;return l`<div class="person-row">
                        <span class="avatar">${Ne(p.name)}</span>
                        <span class="grow"><b>${p.name}</b><small>${p.person?"Pessoa do Home Assistant":"S\xF3 no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${p.name}" @change=${v=>h(p.name,v.target.value)}>
                          <option value="" ?selected=${!m}>${p.auto?`Autom\xE1tico: ${this._targetName(p.auto)}`:"Sem celular"}</option>
                          ${n.map(v=>l`<option value=${v.id} ?selected=${m===v.id}>${v.name}</option>`)}
                        </select>
                        ${p.notify?l`<button class="icon-btn" aria-label="Testar aviso para ${p.name}" @click=${()=>this._testAlert(p.notify)}>${w("bell-ring")}</button>`:u}
                      </div>`}):l`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${n.length?u:l`<span class="field-hint">${w("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>`}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([p,m])=>l`<button class="pick ${s===p?"on":""}" @click=${()=>d({late:p})}>${m}</button>`)}</div>
              </div>
              ${n.length?l`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${n.map(p=>{let m=i.includes(p.id);return l`<button class="pick ${m?"on":""}" aria-pressed=${m?"true":"false"} @click=${()=>d({caregivers:m?i.filter(v=>v!==p.id):[...i,p.id]})}>${w("smartphone")}<span>${p.name}</span></button>`})}</div>
                    <span class="field-hint">${w("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`:u}`:u}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`}_renderGerenciaPanel(){let t=this._ix().gerencia||{},e=(t.contas||[]).filter(s=>!s.pago).length,a=t.ligado?t.erro?"warn":"ok":"off";return l`<div class="panel" id="gerencia">
        <div class="overline">Contas do GerencIA</div>
        <div class="ai-state ${a}"><span class="dot"></span><div>
          <b>${t.ligado?t.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${t.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${t.ligado?t.erro||`${_(e,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${t.ligado?l`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${s=>this._saveAppPrefs({gerencia_hidden:s.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:u}
      </div>`}};var He={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Ie=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],li=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var ss=r=>{let[t,e,a]=String(r).slice(0,10).split("-").map(Number);return new Date(t,e-1,a)};function Pe(r,t,e){let a=typeof r=="string"?ss(r):r,s=typeof t=="string"?ss(t):t,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return e==="mes"?`${li[a.getMonth()].replace(/^./,o=>o.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Ie[i.getMonth()]}`:`${a.getDate()} ${Ie[a.getMonth()]} a ${i.getDate()} ${Ie[i.getMonth()]}`}var E=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,is=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],G=r=>(r||"?").trim().charAt(0).toUpperCase(),ci={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},rs={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},qe={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},di={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},pi=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],os=[2,3,5,10,20],ns={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},ls=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),cs=r=>class extends r{_score(){return this._ix().score||null}_scoreOn(){let t=this._score();return!!(t&&t.enabled&&t.participants.length)}_participant(t){let e=this._score();if(!e||!t)return"";let a=R(t);return e.participants.find(s=>R(s)===a||R(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(t){let e=this._score(),a=e?Math.max(0,e.participants.findIndex(s=>R(s)===R(t))):0;return j(is[a%is.length])}_me(){return this._user&&this._user.person||""}_withWho(t,e,a){if(!this._scoreOn()||!(t>0))return a("");let s=this._participant(this._me());return s?a(s):this._openSheet("who",{points:t,title:e,run:a})}_doneToast(t,e,a,{reassignKey:s,undo:i}){let o=this._scoreOn()&&e&&a>0?this._score().participants.filter(c=>R(c)!==R(e)):[],n=e&&a>0?`Feito por ${e} \xB7 +${a}`:`${k(t.summary,26)}: feito`;if(o.length===1&&s){let c=o[0];this._showToast(n,{label:`Foi ${c}`,run:()=>this.api.scoreReassign(s,c).then(()=>this._showToast(`Pontos para ${c}`)).catch(d=>this._showToast(d.message))})}else o.length>1&&s?this._showToast(n,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:t.summary,run:c=>this.api.scoreReassign(s,c).then(()=>this._closeSheet())})}):this._showToast(n,i?{label:"Desfazer",run:i}:null)}_markDone(t,e){return this._withWho(t.points||0,t.summary,async a=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(t.key,!0,e,a),this._haptic("success"),this._doneToast(t,a,t.points||0,{reassignKey:t.key,undo:()=>this.api.setCheck(t.key,!1,e).catch(s=>this._showToast(s.message))})}catch(s){this._showToast(`N\xE3o consegui marcar: ${s.message}`)}})}_maintDone(t){return this._withWho(t.points||0,t.summary,async e=>{this._sheet&&await this._closeSheet();try{let a=await this.api.maintDone(t.cal,t.uid,e);this._haptic("success");let s=a&&a.next?`Pr\xF3xima em ${W(A(a.next),new Date(this._now))}`:"";a&&a.key?this._doneToast(t,e,t.points,{reassignKey:a.key}):this._showToast(s?`Feito. ${s}`:"Feito",a&&a.undo?{label:"Desfazer",run:()=>this.api.maintUndo(t.cal,t.uid).catch(i=>this._showToast(i.message))}:null)}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}})}_renderWhoSheet(){let t=this._form,e=this._score()||{participants:[]};return l`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${k(t.title||"",40)}${t.points?l` · <b>+${t.points} pontos</b>`:u}</p>
        <div class="who-grid">
          ${e.participants.map(a=>l`<button class="who-btn" style=${T(this._pColor(a),this._dark)} @click=${()=>t.run(a)}>
              <span class="avatar xl">${G(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>t.run("")}>Ninguém do placar (sem pontos)</button>`}_renderRewards(){let t=this._score();if(!t||!t.enabled||!t.participants.length)return this._renderRewardsSetup();let e=new Date(this._now),a=t.current,s=F(A(a.end),e),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${_(s,"dia","dias")}`,o=t.leader,n=t.rows.reduce((c,d)=>c+d.points,0);return l`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${H(ci[t.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(t)}
        <div class="panel board">
          ${t.rows.length===2?this._renderDuel(t,n):this._renderRanking(t)}
          <div class="board-foot">${o?l`${E("crown")}<span><b>${o}</b> na frente${t.rows[1]?` por ${_(t.rows[0].points-t.rows[1].points,"ponto","pontos")}`:""}</span>`:l`<span>${n?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(t)}
        ${this._renderToScore()}
        ${this._renderDemerits(t)}
        ${this._renderFeed(t)}
        ${this._renderHistory(t)}
        ${this._renderScoreSettings(t)}
      </section>`}_renderDuel(t,e){let[a,s]=t.participants.map(d=>t.rows.find(h=>h.name===d)||{name:d,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),o=a.points-i+(s.points-i),n=o?(a.points-i)/o:.5,c=(d,h)=>l`<div class="duel-side ${h?"right":""} ${t.leader===d.name?"lead":""}" style=${T(this._pColor(d.name),this._dark)}>
        <span class="avatar xl">${G(d.name)}${t.leader===d.name?l`<span class="crown">${E("crown")}</span>`:u}</span>
        <b class="duel-name">${d.name}</b>
        <span class="duel-pts">${d.points}</span>
        <small>${_(d.count,"tarefa","tarefas")}${d.demerits?l` · <span class="neg-text">${_(d.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:u}</small>
      </div>`;return l`<div class="duel">
          ${c(a,!1)}
          <span class="duel-x">×</span>
          ${c(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(n*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(t){let e=Math.max(1,...t.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/e*100).toFixed(1);return l`<div class="ranking">
        ${t.rows.map((s,i)=>l`<div class="rank-row ${t.leader===s.name?"lead":""}" style=${T(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${G(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(t){let e=t.history&&t.history[0];if(!e||e.delivered)return u;let a=new Date(this._now);if(F(a,A(e.end))>14)return u;let s=Object.values(e.totals||{}).join(" \xD7 ");return l`<div class="result-card ${e.winner?"":"tie"}" style=${e.winner?T(this._pColor(e.winner),this._dark):""}>
        <span class="result-ic">${E("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${di[t.period]} · ${Pe(e.start,e.end,t.period)}</span>
          <b>${e.winner?`${e.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${e.reward?l`<small>${e.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${e.reward}</small>`:u}
        </div>
        ${e.winner&&e.reward?l`<button class="dose-btn agora" @click=${()=>this._setDelivered(e.key,!0)}>Entregue</button>`:l`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(e.key,!0)}>${E("x")}</button>`}
      </div>`}_renderPrize(t){let e=this._rwEdit,a=(s,i)=>l`<div class="prize-edit">
        <input type="text" id="rw-input" .value=${i.reward||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @keydown=${o=>o.key==="Enter"&&this._saveReward(i.key,o.target.value)} />
        <div class="btn-row"><button class="btn outline sm" @click=${()=>(this._rwEdit=null,this.requestUpdate())}>Cancelar</button><button class="btn primary sm" @click=${()=>this._saveReward(i.key,this.renderRoot.querySelector("#rw-input").value)}>Salvar</button></div>
      </div>`;return l`<div class="panel prize ${t.current.reward?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${E("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">Prêmio ${rs[t.period]}</span>
            ${e==="current"?u:t.current.reward?l`<b>${t.current.reward}</b>`:l`<span class="prize-empty">Ainda sem prêmio. Quem fizer mais pontos leva.</span>`}
          </div>
          ${e==="current"?u:l`<button class="text-btn" @click=${()=>this._editReward("current")}>${t.current.reward?"Mudar":"Definir"}</button>`}
        </div>
        ${e==="current"?a("current",t.current):u}
        <div class="prize-next">
          ${e==="next"?l`<span class="flabel">Prêmio ${qe[t.period]} (${t.next.label})</span>${a("next",t.next)}`:l`<span>${E("gift")}<span>${t.next.reward?l`Prêmio ${qe[t.period]}: <b>${t.next.reward}</b>`:`Pr\xEAmio ${qe[t.period]} ainda livre`}</span></span><button class="text-btn" @click=${()=>this._editReward("next")}>${t.next.reward?"Mudar":"Definir"}</button>`}
        </div>
      </div>`}_editReward(t){this._rwEdit=t,this.requestUpdate(),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#rw-input");e&&e.focus()})}async _saveReward(t,e){try{await this.api.scoreReward(t,e),this._rwEdit=null,this._haptic("success"),this._showToast((e||"").trim()?"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _setDelivered(t,e){try{await this.api.scoreDelivered(t,e),e&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderToScore(){let t=this._ix(),e=new Date(this._now),a=(t.routines||[]).filter(c=>c.points>0),s=(t.maint||[]).filter(c=>c.points>0&&c.state!=="ok"),i=(t.todos&&t.todos.items||[]).filter(c=>c.points>0&&(c.done?c.days===0:c.overdue||c.days===0)),o=a.filter(c=>c.done).length+i.filter(c=>c.done).length,n=a.length+i.length;return l`<div class="panel chores score-today">
        <div class="chores-head"><span class="overline">Para pontuar hoje</span>${n?l`<small>${o} de ${n}</small>`:u}</div>
        ${L(a,c=>c.key,c=>{let d=c.done&&c.done.by;return l`<div class="chore ${c.done?"done":""}">
            <button class="chk ${c.done?"on":""}" @click=${()=>c.done?this._undoCheck(c,"rotina"):this._markDone(c,"rotina")} aria-label="${c.done?"Desmarcar":"Marcar"} ${c.summary}">${c.done?E("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(c)}><b>${c.summary}</b><small>${[c.yesterday?"ficou de ontem":c.time,c.done?`feito por ${d||"algu\xE9m"}`:c.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
            <span class="pts ${c.done?"got":""}" style=${d?T(this._pColor(d),this._dark):""}>+${c.points}</span>
          </div>`})}
        ${L(i,c=>c.key,c=>l`<div class="chore ${c.done?"done":""}">
            <button class="chk sq ${c.done?"on":""}" @click=${()=>this._todoDone(c,!c.done)} aria-label="${c.done?"Reabrir":"Concluir"} ${c.summary}">${c.done?E("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:c.key})}><b>${c.summary}</b><small>${c.overdue?"atrasada":"hoje"} · ${c.listName} · ResolvIA</small></button>
            <span class="pts ${c.done?"got":""}">+${c.points}</span>
          </div>`)}
        ${L(s,c=>c.key,c=>l`<div class="chore maint-score">
            <span class="chk wrench ${c.state}">${E("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(c)}><b>${c.summary}</b><small>${c.days<0?`venceu h\xE1 ${_(-c.days,"dia","dias")}`:c.days===0?"\xE9 hoje":`em ${_(c.days,"dia","dias")}`} · manutenção</small></button>
            <button class="pts btn-pts" @click=${()=>this._maintDone(c)}>+${c.points}</button>
          </div>`)}
        ${!a.length&&!s.length&&!i.length?l`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>, ou a uma tarefa no ResolvIA.</p>`:u}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${E("plus")}Tarefa com pontos</button>
          <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${E("award")}Pontos avulsos</button>
        </div>
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(t){await this._saveAppPrefs({demerits:t.length?t:null})}async _addDemerit(t,e){await this._saveDemerits([...this._demerits(),{id:ls(),title:t,points:e}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${k(t,28)} \xB7 \u2212${e}`)}async _markDemerit(t,e){try{let a=await this.api.scoreDemerit(t.id,e);this._haptic("warning"),this._showToast(`\u2212${t.points} para ${e}: ${k(t.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(t=null){this._openSheet("demerit",t?{id:t.id,title:t.title,points:t.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let t=this._form,e=(t.title||"").trim(),a=Math.round(Math.abs(Number(t.points)||0));if(!e||a<1)return;let s=this._demerits(),i=t.id?s.map(o=>o.id===t.id?{...o,title:e,points:a}:o):[...s,{id:ls(),title:e,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(t.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${k(e,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let t=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${k(t.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(e=>e.id!==t.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(t){let e=this._demerits(),a=i=>{let o={};for(let n of t.entries)n.kind==="demerito"&&String(n.key).startsWith(`demerito|${i.id}|`)&&(o[n.who]=(o[n.who]||0)+1);return Object.entries(o).map(([n,c])=>`${n} ${c}\xD7`).join(" \xB7 ")},s=t.entries.filter(i=>i.kind==="demerito").length;return l`<div class="panel chores demerits" id="demeritos">
        <div class="chores-head"><span class="overline">Deméritos</span><small>${s?`${_(s,"vez","vezes")} ${ns[t.period]}`:"tiram pontos"}</small></div>
        ${e.length?l`<p class="dm-lead">Toque em quem foi para descontar.</p>
              ${L(e,i=>i.id,i=>{let o=a(i);return l`<div class="demerit">
                    <div class="dm-top">
                      <button class="dm-tx" @click=${()=>this._openDemeritForm(i)}><b>${i.title}</b>${o?l`<small>${o} ${ns[t.period]}</small>`:u}</button>
                      <span class="pts neg">−${i.points}</span>
                    </div>
                    <div class="dm-who">
                      ${t.participants.map(n=>l`<button class="dm-btn" style=${T(this._pColor(n),this._dark)} aria-label="${i.title}: descontar de ${n}" @click=${()=>this._markDemerit(i,n)}>
                          <span class="avatar sm2">${G(n)}</span><span>${n}</span>
                        </button>`)}
                    </div>
                  </div>`})}`:l`<p class="empty-line">O que tira pontos de quem fizer, como deixar a toalha molhada na cama. Crie a lista e, quando acontecer, toque em quem foi.</p>
              <div class="chip-row dm-ideas">${pi.map(([i,o])=>l`<button class="pick" @click=${()=>this._addDemerit(i,o)}>${E("plus")}<span>${i} −${o}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${E("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let t=this._form,e=Number(t.points)||0,a=t.custom||e>0&&!os.includes(e);return l`${this._sheetHead(t.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <input type="text" .value=${t.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @input=${s=>this._setForm({title:s.target.value})} />
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row">
            ${os.map(s=>l`<button class="pick ${e===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>Outro</button>
          </div>
          ${a?l`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(e||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:u}
          <span class="field-hint">${E("info")}<span>Para marcar de fora do app (uma rotina da Alexa, uma etiqueta NFC), dispare o evento <code>cronologia_demerito</code> com <code>nome</code> e <code>quem</code>.</span></span>
        </div>
        <div class="sheet-actions">
          ${t.mode==="edit"?l`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${E("trash")}Apagar</button>`:l`<button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(t.title||"").trim()||!(e>0)} @click=${()=>this._saveDemeritForm()}>${t.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}_renderFeed(t){if(!t.entries.length)return u;let e=new Date(this._now),a=this._feedAll?t.entries:t.entries.slice(0,8),s=i=>{let o=new Date(i),n=F(o,e);return n===0?`hoje ${M(o)}`:n===-1?`ontem ${M(o)}`:`${se[o.getDay()].slice(0,3)} ${M(o)}`};return l`<div class="panel feed">
        <div class="chores-head"><span class="overline">Pontos ${rs[t.period]}</span><small>${_(t.entries.length,"registro","registros")}</small></div>
        ${L(a,i=>i.key,i=>l`<div class="feed-row" style=${T(this._pColor(i.who),this._dark)}>
            <span class="avatar sm2">${G(i.who)}</span>
            <span class="feed-tx"><b>${i.title}</b><small>${i.who} · ${s(i.at)}${i.kind==="extra"?" \xB7 avulso":i.kind==="manutencao"?" \xB7 manuten\xE7\xE3o":i.kind==="tarefa"?" \xB7 ResolvIA":i.kind==="demerito"?" \xB7 dem\xE9rito":""}</small></span>
            <span class="pts ${i.points<0?"neg":"got"}">${i.points>0?"+":i.points<0?"\u2212":""}${Math.abs(i.points)}</span>
            ${i.kind==="extra"||i.kind==="demerito"?l`<button class="icon-btn mini" aria-label="Tirar ${i.title}" @click=${()=>this._removeExtra(i)}>${E("x")}</button>`:u}
          </div>`)}
        ${t.entries.length>8?l`<button class="add-line" @click=${()=>(this._feedAll=!this._feedAll,this.requestUpdate())}>${E(this._feedAll?"chevron-up":"chevron-down")}${this._feedAll?"Mostrar menos":`Ver todos (${t.entries.length})`}</button>`:u}
      </div>`}async _removeExtra(t){try{await this.api.scoreRemove(t.key),this._showToast(t.points<0?`${k(t.title,26)}: dem\xE9rito tirado`:`${k(t.title,26)}: pontos tirados`)}catch(e){this._showToast(e.message)}}_renderExtraSheet(){let t=this._form,e=this._score()||{participants:[]};return l`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda: lavou o carro, fez a feira, montou o armário…</p>
        <label class="field"><span class="flabel">O que foi feito</span><input type="text" id="ex-title" .value=${t.title} placeholder="Ex.: Lavou o carro" maxlength="120" @input=${a=>this._setForm({title:a.target.value})} /></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${e.participants.map(a=>l`<button class="pick person ${t.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${G(a)}</span><span>${a}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row">
            ${[5,10,20,30,50].map(a=>l`<button class="pick ${Number(t.points)===a?"on":""}" @click=${()=>this._setForm({points:a})}>+${a}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(t.points)} aria-label="Outro valor" @input=${a=>this._setForm({points:a.target.value})} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${!t.who||!(t.title||"").trim()||!Number(t.points)} @click=${()=>this._saveExtra()}>Dar ${Number(t.points)||0} pontos</button>
        </div>`}async _saveExtra(){let t=this._form;try{await this.api.scoreExtra(t.who,Number(t.points),t.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${t.points} para ${t.who}`)}catch(e){this._showToast(e.message)}}_renderHistory(t){let e=t.history||[];if(!e.length)return u;let a=this._histAll?e:e.slice(0,5),s={};for(let i of e)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return l`<div class="panel history">
        <div class="chores-head"><span class="overline">Histórico</span><small>${Object.entries(s).map(([i,o])=>`${i} ${o}`).join(" \xB7 ")||""}</small></div>
        ${L(a,i=>i.key,i=>l`<div class="hist-row">
            <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?T(this._pColor(i.winner),this._dark):""}>${i.winner?G(i.winner):"="}</span>
            <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${Pe(i.start,i.end,t.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
            ${i.reward&&i.winner?l`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${E(i.delivered?"check":"gift")}</button>`:u}
          </div>`)}
        ${e.length>5?l`<button class="add-line" @click=${()=>(this._histAll=!this._histAll,this.requestUpdate())}>${E(this._histAll?"chevron-up":"chevron-down")}${this._histAll?"Mostrar menos":`Ver tudo (${e.length})`}</button>`:u}
      </div>`}_scorePrefs(t){let e=this._score()||{},a={enabled:!!e.enabled,participants:e.participants||[],period:e.period||"semana",anchor:e.anchor||y(new Date),notify:e.notify!==!1};return this._saveAppPrefs({score:{...a,...t}})}_renderScoreSettings(t){let e=(this._ix().people||[]).map(s=>s.name),a=[...new Set([...t.participants,...e])];return l`<details class="panel score-set" ?open=${this._scoreSetOpen} @toggle=${s=>this._scoreSetOpen=s.target.open}>
        <summary><span class="overline">Ajustes do placar</span>${E("chevron-down")}</summary>
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${a.map(s=>{let i=t.participants.includes(s);return l`<button class="pick person ${i?"on":""}" aria-pressed=${i?"true":"false"} @click=${()=>this._scorePrefs({participants:i?t.participants.filter(o=>o!==s):[...t.participants,s]})}><span class="avatar sm">${G(s)}</span><span>${s}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(He).map(([s,i])=>l`<button class=${t.period===s?"on":""} @click=${()=>this._scorePrefs({period:s,anchor:y(new Date)})}>${i.label}</button>`)}</div>
          <span class="field-hint">${E("info")}<span>${t.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",0)===1?"na segunda":"no domingo"} (muda em Mais).`} Mudar aqui recomeça a contagem no período de agora, sem perder os pontos.</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quando o período fecha, quem participa recebe quem venceu e o prêmio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${t.notify!==!1} @change=${s=>this._scorePrefs({notify:s.target.checked})} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <button class="text-btn danger" @click=${()=>this._scorePrefs({enabled:!1})}>Desligar o placar</button>
      </details>`}_renderRewardsSetup(){let t=this._score()||{},e=(this._ix().people||[]).filter(o=>o.person),a=this._setupPick||(t.participants&&t.participants.length?t.participants:e.map(o=>o.name)),s=this._setupPeriod||t.period||"semana",i=[...new Set([...(this._ix().people||[]).map(o=>o.name),...a])];return l`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:"Placar da casa"})}
        <div class="panel setup-card">
          <div class="setup-art">${E("trophy")}</div>
          <h2 class="setup-title">Quem faz mais em casa?</h2>
          <p class="panel-lead">Dê pontos às tarefas da rotina e da manutenção. Quem marca <b>Feito</b> ganha os pontos, e no fim de cada período quem somar mais leva o prêmio que vocês combinaram.</p>
          <div class="field"><span class="flabel">Quem participa</span>
            <div class="chip-row">${i.map(o=>{let n=a.includes(o);return l`<button class="pick person ${n?"on":""}" aria-pressed=${n?"true":"false"} @click=${()=>(this._setupPick=n?a.filter(c=>c!==o):[...a,o],this.requestUpdate())}><span class="avatar sm">${G(o)}</span><span>${o}</span></button>`})}</div>
          </div>
          <div class="field"><span class="flabel">O placar fecha</span>
            <div class="seg">${Object.entries(He).map(([o,n])=>l`<button class=${s===o?"on":""} @click=${()=>(this._setupPeriod=o,this.requestUpdate())}>${n.label}</button>`)}</div>
          </div>
          <button class="btn primary" style="width:100%" ?disabled=${!a.length} @click=${()=>this._saveAppPrefs({score:{enabled:!0,participants:a,period:s,anchor:y(new Date),notify:!0}})}>${E("trophy")}Começar o placar</button>
        </div>
      </section>`}};var Z={CREATE:1,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},ds="cronologia.todo_list",U=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,It="laranja",Le=r=>r.allDay?A(r.due):new Date(r.due);function ps(r,t){let e=Le(r),a=F(e,t),s=r.allDay?"":` \xE0s ${M(e)}`;return r.done?"conclu\xEDda":r.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?r.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${P(e,t,{long:!1,cap:!1})}${s}`}var hs=r=>class extends r{_todos(){return this._ix().todos||{lists:[],items:[]}}_todoEvents(t,e){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.map(s=>{let i=Le(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?$(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<e&&s.end>t)}async _todoDone(t,e){let a=async s=>{this._sheet==="who"&&await this._closeSheet();try{let i=await this.api.setTodo(t.list,t.uid,e,s);this._haptic(e?"success":"light"),e&&i&&i.points?this._doneToast(t,i.who,i.points,{reassignKey:i.key}):this._showToast(`${k(t.summary,28)}: ${e?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(t.list,t.uid,!e).catch(o=>this._showToast(o.message))})}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}};return e&&t.points>0?this._withWho(t.points,t.summary,a):a("")}_renderTodosPanel(){let t=new Date(this._now),a=this._todos().items.filter(n=>n.done?n.days===0:n.overdue||n.days<=1);if(!a.length)return u;let s=a.filter(n=>n.overdue),i=a.filter(n=>!n.done),o=this._todosAll?a:a.slice(0,6);return l`<div class="panel todos ${s.length?"alert":""}" id="tarefas">
        <div class="chores-head">
          <span class="overline">Tarefas com prazo</span>
          <small class=${s.length?"late":""}>${s.length?_(s.length,"atrasada","atrasadas"):i.length?`${i.length} para fazer`:"tudo feito"}</small>
        </div>
        ${L(o,n=>n.key,n=>l`<div class="chore todo ${n.done?"done":""} ${n.overdue?"late":""}">
            <button class="chk sq ${n.done?"on":""}" @click=${()=>this._todoDone(n,!n.done)} aria-label="${n.done?"Reabrir":"Concluir"} ${n.summary}">${n.done?U("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:n.key})}><b>${n.summary}</b><small>${ps(n,t)} · ${n.listName}</small></button>
            ${n.points>0&&this._scoreOn()?l`<span class="pts ${n.done?"got":""}">+${n.points}</span>`:u}
          </div>`)}
        ${a.length>6?l`<button class="add-line" @click=${()=>(this._todosAll=!this._todosAll,this.requestUpdate())}>${U(this._todosAll?"chevron-up":"chevron-down")}${this._todosAll?"Mostrar menos":`Mais ${a.length-6}`}</button>`:u}
        <div class="panel-foot plain">${U("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais.</span></div>
      </div>`}_renderTodoSheet(){let t=new Date(this._now),e=this._todos().items.find(s=>s.key===this._form.key);if(!e)return l`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=Le(e);return l`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${e.summary}</h3><p class="ev-cal">${e.listName} · <b>${ps(e,t)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${U("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${U("calendar-clock")}<span>Prazo: ${H(P(a,t))}${e.allDay?"":` \xE0s ${M(a)}`}</span></div>
          <div class="fact">${U("list-checks")}<span>Lista ${e.listName} (ResolvIA)</span></div>
          ${e.points>0&&this._scoreOn()?l`<div class="fact">${U("award")}<span>${e.points} pontos para quem concluir</span></div>`:u}
          ${e.description?l`<div class="fact notes">${U("file-text")}<span>${ae(e.description).map(s=>s.url?l`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:u}
        </div>
        <p class="sheet-note">${U("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${e.done?l`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(e,!1))}>${U("undo-2")}Reabrir</button>`:l`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(e,!0))}>${U("check")}Concluir${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</button>`}
        </div>`}_todoLists(){return this._todos().lists.filter(t=>!t.unavailable&&t.features&Z.CREATE)}_openTodoForm({date:t=null}={}){let e=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(ds)||'""')}catch{}let s=e.find(i=>i.id===a)||e.find(i=>!i.hidden&&i.features&Z.DUE_DATE)||e[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:y(t?S(t):S(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_renderTodoForm(){let t=this._form,e=this._todoLists(),a=e.find(c=>c.id===t.list),s=a?a.features:0,i=!!(s&Z.DUE_DATE),o=!!(s&Z.DUE_DATETIME),n=!!(s&Z.DESCRIPTION);return l`
        ${this._sheetHead("Novo")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder="Ex.: Levar o carro na revisão" @input=${c=>this._setForm({title:c.target.value})} @keydown=${c=>c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${e.map(c=>l`<button class="pick list ${t.list===c.id?"on":""}" style=${T(j(It),this._dark)} @click=${()=>this._setForm({list:c.id})}>${U("list-checks")}<span>${k(c.name,26)}</span></button>`)}</div>
        </div>
        ${i||o?l`${t.noDue?u:this._dateField("Prazo",t.date,c=>this._setForm({date:c}),"td-date")}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${t.noDue?"on":""}" @click=${()=>this._setForm({noDue:!t.noDue})}>Sem prazo</button>
                ${o&&!t.noDue?l`<button class="pick ${t.timed?"on":""}" @click=${()=>this._setForm({timed:!t.timed})}>${U("clock")}<span>Com horário</span></button>
                      ${t.timed?l`<input type="time" class="inline-time" .value=${t.time} aria-label="Horário" @change=${c=>c.target.value&&this._setForm({time:c.target.value})} />`:u}`:u}
              </div>`:l`<p class="field-hint" style="margin:-6px 0 18px">${U("info")}<span>Essa lista não aceita prazo (listas do Alexa, por exemplo). A tarefa entra sem data.</span></p>`}
        ${n?l`<label class="field"><span class="flabel">Notas</span><textarea rows="2" .value=${t.notes} placeholder="Detalhes, links" @input=${c=>this._setForm({notes:c.target.value})}></textarea></label>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${t.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let t=this._form,e=this._todoLists().find(o=>o.id===t.list);if(!e)return this._showToast("Escolha a lista");if(!(t.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=!t.noDue&&e.features&(Z.DUE_DATE|Z.DUE_DATETIME),s=a&&t.timed&&e.features&Z.DUE_DATETIME,i={summary:t.title.trim(),date:a?t.date:"",time:s?t.time:"",description:t.notes||""};a&&!s&&!(e.features&Z.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(e.id,i);try{localStorage.setItem(ds,JSON.stringify(e.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${k(e.name,24)}${e.hidden?" (lista oculta aqui)":""}`)}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${o.message}`)}}_renderTodosSettings(){let{lists:t,app:e}=this._todos(),a=this._app("todo_hidden",null)||[],s=(h,p)=>this._saveAppPrefs({todo_hidden:p?a.filter(m=>m!==h):[...a,h]}),i=t.filter(h=>!h.hidden),o=i.reduce((h,p)=>h+p.due,0),n=i.reduce((h,p)=>h+p.overdue,0),c=`${_(t.length,"lista","listas")} \xB7 ${_(o,"tarefa com prazo","tarefas com prazo")}${n?`, ${_(n,"atrasada","atrasadas")}`:""}.`,d=t.length?e?{tone:"ok",title:`Conectado ao ResolvIA ${e.versao||""}`.trim(),text:`${c} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${c} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."};return l`<div class="panel" id="resolvia">
        <div class="overline">Tarefas do ResolvIA</div>
        <div class="ai-state ${d.tone}"><span class="dot"></span><div><b>${d.title}</b><span>${d.text}</span></div></div>
        ${t.length?l`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As tarefas aparecem no dia do prazo (ou no horário, se tiver), além do card da Agora.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${h=>this._saveAppPrefs({todo_off_calendar:h.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="sub-overline">Listas</div>`:u}
        ${L(t,h=>h.id,h=>l`<div class="row switch-row ${h.hidden?"off":""}">
            <span class="tile" style=${T(j(It),this._dark)}>${U("list-checks")}</span>
            <div class="grow"><div class="label">${h.name}</div><div class="hint">${h.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":h.info==="resolvia"?"prazos desligados no ResolvIA":h.due?`${_(h.due,"tarefa com prazo","tarefas com prazo")}${h.overdue?` \xB7 ${_(h.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!h.hidden} @change=${p=>s(h.id,p.target.checked)} aria-label="Mostrar ${h.name}" /><span class="track"></span></label>
          </div>`)}
      </div>`}};var tt=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,hi=r=>r>1048576?`${(r/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(r/1024))} KB`,ui={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar"},us=r=>class extends r{_dateTime(t){let e=new Date(t),a=s=>String(s).padStart(2,"0");return`${a(e.getDate())}/${a(e.getMonth()+1)}/${e.getFullYear()} \xE0s ${a(e.getHours())}:${a(e.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(t){this._backups={available:!1,error:t.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let t=await this.api.createBackup();this._showToast(`Backup salvo em ${t.folder}/${t.name}`),this._haptic("success"),await this._loadBackups()}catch(t){this._showToast(`N\xE3o consegui criar o backup. ${t.message}`)}this._busy=null,this.requestUpdate()}_exportData(t,e){!this.api.dataUrl||!this.api.dataUrl(t)?(e.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):t!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let t=this.renderRoot.querySelector("#cr-data-import");t&&(t.value="",t.click())}_onDataImport(t){let e=t.target.files&&t.target.files[0];t.target.value="",e&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${k(e.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(e);this._haptic("success"),this._showToast(`Importado: ${_(a.calendars,"agenda","agendas")} e ${_(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(t){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(t.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(t.name),this._showToast("Backup restaurado")}catch(e){this._showToast(e.message)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let t=await this.api.versions();this._sheet==="versions"&&this._setForm({list:t})}catch(t){this._sheet==="versions"&&this._setForm({error:t.message})}}_confirmRestoreVersion(t){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(t.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(t.name),this._showToast("Vers\xE3o restaurada")}catch(e){this._showToast(e.message)}}})}_renderVersions(){let t=this._form;return l`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${t.error?l`<div class="imp-error">${tt("circle-alert")}<span>${t.error}</span></div>`:t.list==null?l`<div class="imp-loading"><span class="spin">${tt("loader-circle")}</span><span>Carregando…</span></div>`:t.list.length?l`<div class="data-list">
                  ${t.list.map(e=>l`<div class="data-item"><div><b>${this._dateTime(e.when)}</b><span>${_(e.calendars,"agenda","agendas")} · ${_(e.points,"ponto","pontos")} · ${ui[e.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(e)}>Restaurar</button></div>`)}
                </div>`:l`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let t=this._backups,e=this._writable(),a=(s,i,o)=>l`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(s)||"#"} download @click=${n=>this._exportData(s,n)}>${tt(o)}${i}</a>`;return l`<div class="panel" id="dados">
        <div class="overline">Dados</div>
        <div class="data-row">
          <b>Exportar</b>
          <p>Baixe para guardar ou levar para outro programa. Os arquivos são abertos e legíveis: o ZIP tem os dados do app, os eventos de cada calendário em .ics e as planilhas de eventos e pontos.</p>
          <div class="btn-row">${a("zip","Tudo (ZIP)","archive")} ${a("csv","Eventos (CSV)","sheet")} ${a("json","Dados (JSON)","braces")}
            <button class="btn outline sm" @click=${()=>this._openExport()}>${tt("calendar")}Agenda (.ics)</button></div>
        </div>
        <div class="data-row">
          <b>Backup na pasta share</b>
          <p>Cria uma cópia completa em <code>share/cronologia</code>, que você acessa pela rede do Home Assistant. Os backups do próprio Home Assistant também incluem o CronologIA e os calendários locais.</p>
          <div class="btn-row">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||t&&t.available===!1} @click=${()=>this._createBackup()}>${tt("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${t&&t.available===!1?l`<p class="data-note">A pasta share não está disponível para o app.</p>`:u}
          ${t&&t.backups&&t.backups.length?l`<div class="data-list">
                ${t.backups.slice(0,8).map(s=>l`<div class="data-item"><div><b>${this._dateTime(s.date)}</b><span title=${s.name}>${hi(s.size)} · ${s.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(s)}>${tt("archive-restore")}Restaurar</button></div>`)}
              </div>`:u}
        </div>
        <div class="data-row">
          <b>Importar backup ou JSON</b>
          <p>Traz os dados do app de um .zip ou .json exportado pelo CronologIA: agendas, pessoas e avisos, placar e marcações. Antes de importar, o app guarda uma cópia do que existe hoje.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._pickDataImport()}>${tt("upload")}Escolher arquivo</button></div>
        </div>
        <div class="data-row">
          <b>Importar eventos (.ics)</b>
          <p>Traz os eventos de um convite, de outra agenda ou de um calendário do backup. Você revisa e escolhe o calendário antes de adicionar.</p>
          <div class="btn-row"><button class="btn outline sm" ?disabled=${!e.length} @click=${()=>this._openImport("ics")}>${tt("upload")}Escolher .ics</button></div>
        </div>
        <div class="data-row">
          <b>Versões anteriores</b>
          <p>O app guarda sozinho uma cópia dos dados a cada 10 minutos de uso. Se algo sair errado, volte para uma versão anterior.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._openVersions()}>${tt("archive-restore")}Ver versões</button></div>
        </div>
        <div class="data-row">
          <b>Onde ficam os dados</b>
          <p>Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda nomes, cores, preferências, pessoas, o placar e as marcações em <code>/data/cronologia.json</code>, que entra no backup do Home Assistant.</p>
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${s=>this._onDataImport(s)} />
      </div>`}};var ms="cronologia.theme",vs="cronologia.mode",je={CREATE:1,DELETE:2,UPDATE:4},Ve=(r,t)=>(Number(r)&t)===t,mt=48,mi={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},vi=r=>mi[r]||{label:r?H(r.replace(/_/g," ")):"Outros",icon:"calendar"},g=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,pe={get(r,t){try{let e=localStorage.getItem(r);return e==null?t:JSON.parse(e)}catch{return t}},set(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}},Ue=(r,t,e,a,s)=>gt`<line class=${s} x1=${r} y1=${t} x2=${e} y2=${a}></line>`,fs=(r,t)=>gt`<path class=${t} d=${r}></path>`,fi=r=>r.allDay?"Dia todo":`${M(r.start)} \u2013 ${M(r.end)}`,gi=r=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r)}`,Be=class extends us(hs(cs(as(rt)))){static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Ra,Oa,Na];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=pe.get(ms,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=S(new Date),this._mode=pe.get(vs,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),Fa(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(t){t.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(t){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let e=this.renderRoot.querySelector(".tgrid-scroll");if(e){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&I(this._cursor,a)?Math.max(0,a.getHours()-1):7;e.scrollTop=s*mt}}if(t.has("_path")&&this._view().name==="more"){let e=this._view().tab;e==="integracoes"&&this._refreshAi(!1),e==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let t=this._theme==="dark"?!0:this._theme==="light"?!1:Ha();t!==this._dark&&(this._dark=t)}_setTheme(t){this._theme=t,pe.set(ms,t),this._syncDark()}async _start(){this._started=!0,this._store=new de(this.api,()=>this._ver++),this.api.onStatus(t=>this._online=t),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(t=>this._onCalendar(t)).catch(()=>{}),this.api.subscribePrefs(t=>this._setPrefs(t)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(t=>{let e=t&&t.test;e&&this._home&&e.at!==this._testSeen&&Date.now()-e.at<12e4&&(this._haptic("success"),this._showToast(`${this._targetName(e.target)}: o bot\xE3o ${e.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=e&&e.at,this._home=t}).catch(()=>{})}async _boot(t){try{let e=await this.api.bootstrap();this._version=e.version||"",this._user=e.user||{name:""},this._ai=e.ai||this._ai,this._aiAt=Date.now(),this._states=e.states||{},this._entities=e.entities||{},this._devices=e.devices||{},this._prefs=e.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),t&&this._store.reloadAll()}catch(e){this._ready||(this._bootError=e.message||String(e)),t||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(t){let e={...this._states},a=t.entity_id in e;t.new_state?e[t.entity_id]=t.new_state:delete e[t.entity_id],this._states=e,(!a||!t.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(t){t&&(this._prefs={calendars:t.calendars||{},app:t.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(t=>!t.hidden).map(t=>t.id))}_app(t,e){let a=this._prefs.app?this._prefs.app[t]:void 0;return a===void 0?e:a}_accent(){return j(this._app("accent","turquesa"))||j("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let t=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},o=i.device_id?this._devices[i.device_id]:null,n=vi(i.platform),c=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:o,plat:n,orig:c}});t.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let e=t.map(({id:a,st:s,reg:i,dev:o,plat:n,orig:c},d)=>{let h=(this._prefs.calendars||{})[a]||{},p=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:h.name||c,origName:c,group:n.label,icon:n.icon,device:o?o.name_by_user||o.name:null,color:j(h.color)||La(d),colorId:h.color||null,hidden:!!h.hidden,features:p,canCreate:Ve(p,je.CREATE),canUpdate:Ve(p,je.UPDATE),canDelete:Ve(p,je.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:e},e}_cal(t){return this._cals().find(e=>e.id===t)}_visible(){return this._cals().filter(t=>!t.hidden)}_writable(){return this._cals().filter(t=>t.canCreate&&!t.unavailable)}_defaultCal(){let t=this._writable(),e=this._app("default_calendar",null);return(t.find(a=>a.id===e)||t.find(a=>!a.hidden)||t[0]||{}).id||null}_events(t,e){this._store.ensure(t,e);let a=this._store.query(t,e),s=[...this._gerenciaEvents(t,e),...this._todoEvents(t,e)];return s.length?[...a,...s].sort((i,o)=>i.start-o.start||Number(o.allDay)-Number(i.allDay)||i.summary.localeCompare(o.summary,"pt-BR")):a}async _saveCalPrefs(t,e){try{this._setPrefs(await this.api.setCalendarPrefs(t,e))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(t){try{this._setPrefs(await this.api.setAppPrefs(t))}catch(e){this._showToast(`N\xE3o consegui salvar: ${e.message}`)}}_view(){let t=(this._path||"").replace(/\/+$/,"");if(t==="/calendario")return{name:"calendar"};if(t==="/agendas")return{name:"more",tab:"calendarios"};if(t==="/recompensas")return{name:"rewards"};let e=/^\/mais(?:\/(avisos|integracoes|dados|aparencia))?$/.exec(t);return e?{name:"more",tab:e[1]||"calendarios"}:{name:"now"}}async _go(t,e=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(e?0:1);e?history.replaceState({rvDepth:a,rvPath:t},""):history.pushState({rvDepth:a,rvPath:t},""),this._path=t,t==="/calendario"&&(this._scrollWeek=!0);let s=this.renderRoot&&this.renderRoot.querySelector("main");s&&s.scrollTo({top:0,behavior:"instant"})}_goTab(t){let e=this._view().name;if(t===""){if(e==="now"){let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(t==="/calendario"&&e==="calendar"){this._cursor=S(new Date),this._scrollWeek=!0;return}this._go(t,e!=="now")}_openDay(t,e){this._cursor=S(t),e&&this._setMode(e),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(t){this._mode=t,pe.set(vs,t),this._scrollWeek=!0}_popEntry(t){if(!(history.state&&history.state[t]))return Promise.resolve();let e=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(o=>o!==s),this._popping===e&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=e,history.back(),e}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let t=history.state&&history.state.rvPath||"";t!==this._path&&(this._path=t);for(let e of[...this._popWaiters||[]])e()}async _openSheet(t,e=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=t,this._form=e,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(t){this._form={...this._form,...t}}_openInHA(t){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(t)}_haptic(t){this.env&&this.env.haptic&&this.env.haptic(t)}_showToast(t,e=null){clearTimeout(this._toastTimer),this._toast={text:t,action:e,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,e?5e3:2800)}_userName(){let t=te();return(this._user&&this._user.name||t&&t.user&&t.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let t=te();return t&&t.user?!!t.user.is_admin:!0}_openEvent(t){if(t.gerencia){this._openSheet("bill",{b:{id:t.gerencia.id,c:t.gerencia}});return}if(t.todo){this._openSheet("todo",{key:t.todo.key});return}this._openSheet("event",{ev:t})}_money(t){return t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:t=null,date:e=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(t&&t.kind)return this._openKindForm({ev:t,copy:i});if(!this._writable().length&&!(t&&!i)){this._openSheet("nocal",{});return}let n;if(t){let c=t.allDay?$(t.end,-1):t.end;n={mode:i?"add":"edit",cal:i?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._defaultCal():t.cal,origCal:t.cal,uid:t.uid,rid:i?null:t.rid,title:t.summary,allDay:t.allDay,date:y(t.start),endDate:t.allDay?F(c,t.start)>0?y(c):"":I(t.start,t.end)?"":y(t.end),start:t.allDay?"09:00":M(t.start),end:t.allDay?"10:00":M(t.end),repeat:Nt(t.rrule),rrule:t.rrule||"",location:t.location,notes:t.description}}else{let c=e?S(e):S(new Date),d=new Date,h=a??(I(c,d)?Math.min(23,d.getHours()+1):9),p=m=>String(m).padStart(2,"0");n={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:y(c),endDate:"",start:`${p(h)}:00`,end:`${p(Math.min(23,h+1))}:${h+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}this._openSheet("form",n),n.mode==="add"&&!n.title&&this.updateComplete.then(()=>{let c=this.renderRoot.querySelector(".sheet .ev-title-input");c&&c.focus()})}_eventFromForm(t,{keepRrule:e=!0}={}){if(t.kind)return this._kindEvents(t,{keepRrule:e})[0];let a=(t.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(t.date||""))throw new Error("Escolha a data");let s={summary:a};if(t.allDay){let i=t.endDate&&t.endDate>t.date?t.endDate:t.date;s.start=t.date,s.end=y($(A(i),1))}else{let[i,o]=(t.start||"09:00").split(":").map(Number),[n,c]=(t.end||t.start||"10:00").split(":").map(Number),d=A(t.date),h=new Date(d.getFullYear(),d.getMonth(),d.getDate(),i,o),p=t.endDate&&t.endDate>t.date?A(t.endDate):d,m=new Date(p.getFullYear(),p.getMonth(),p.getDate(),n,c);m<=h&&(m=$(m,1)),m-h<6e4&&(m=new Date(h.getTime()+30*6e4)),s.start=Y(h),s.end=Y(m)}if((t.location||"").trim()&&(s.location=t.location.trim()),(t.notes||"").trim()&&(s.description=t.notes.trim()),e){let i=t.rrule&&Nt(t.rrule)===t.repeat?t.rrule:t.repeat?`FREQ=${t.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let t=this._form;if(t.kind)return this._saveKindForm();let e;try{e=this._eventFromForm(t)}catch(s){this._showToast(s.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:e});return}this._setForm({saving:!0});try{t.mode==="add"?(await this.api.createEvent(t.cal,e),this._done(`Evento criado em ${k(a.name,24)}`,t.cal,e.start)):t.cal!==t.origCal?(await this.api.createEvent(t.cal,e),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`Evento movido para ${k(a.name,24)}`,t.cal,e.start)):(await this.api.updateEvent(t.cal,t.uid,e),this._done("Evento salvo",t.cal,e.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_done(t,e,a){this._haptic("success"),this._closeSheet(),this._store.refresh(e);let s=a?S(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?A(a):a)):null;this._showToast(t,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(t){let e=this._form,a={recurrenceId:e.rid,range:t==="future"?"THISANDFUTURE":void 0};try{if(e.action==="edit"){let s=e.event;t==="one"&&(s=this._eventFromForm(e,{keepRrule:!1})),await this.api.updateEvent(e.cal,e.uid,s,a),this._done(t==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",e.cal,s.start)}else await this.api.deleteEvent(e.cal,e.uid,t==="all"?{}:a),this._done(t==="all"?"A s\xE9rie toda foi apagada":t==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",e.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(t){if(t.rid){this._openSheet("scope",{action:"delete",cal:t.cal,uid:t.uid,rid:t.rid,title:t.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${k(t.summary,28)}\u201D?`,text:`${H(P(t.start,new Date(this._now)))} \xB7 ${fi(t)}. Ele sai do calend\xE1rio ${k((this._cal(t.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(t.cal,t.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(t.cal);let e={summary:t.summary,start:t.raw.start,end:t.raw.end};t.location&&(e.location=t.location),t.description&&(e.description=t.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(t.cal,e).then(()=>this._store.refresh(t.cal)).catch(a=>this._showToast(a.message))})}catch(e){this._showToast(`N\xE3o consegui apagar: ${e.message}`)}}})}_openImport(t="pick",e={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:t==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...e});return t==="photos"&&this._pickFiles("photos"),t==="scan"&&this._openCamera(),t==="text"&&this._focusSheetText(),t==="ics"&&this._pickFiles("ics"),s}_focusSheetText(){this.updateComplete.then(()=>{let t=this.renderRoot.querySelector(".sheet textarea");t&&t.focus()})}_pickFiles(t){let e=this.renderRoot.querySelector(t==="scan"?"#cr-scan":t==="ics"?"#cr-ics":"#cr-photos");e&&(e.value="",e.click())}_releaseImages(){let t=this._form;if(t&&t.images)for(let e of t.images)e.url&&URL.revokeObjectURL(e.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(t){let e=[...t.target.files||[]].filter(i=>!i.type||i.type.startsWith("image/")).slice(0,6);if(t.target.value="",!e.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let s=[];for(let i of e)s.push(await Ce(i));this._readImages(s,a)}async _onIcsFile(t){let e=t.target.files&&t.target.files[0];if(t.target.value="",!e)return;let a;try{a=Xa(await e.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:e.name,note:null,error:null})}_readImages(t,e){if(this._sheet!=="import"||!t.length)return;let a=e?[...this._form.images||[],...t]:(this._releaseImages(),t);this._setForm({step:"loading",images:a,prevStep:e?"review":"pick",loadingText:t.length>1?`Lendo ${t.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:t,appending:e})}async _runExtract({text:t,images:e,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",o=a?this._form.items||[]:[];try{let n=await this.api.extract({text:t,images:e?e.map(({data:d,mime:h})=>({data:d,mime:h})):void 0});if(!i())return;let c=n.events||[];if(!c.length){let d=t?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:d}):this._setForm({step:t?"text":"pick",error:d});return}this._haptic("success"),this._setForm({step:"review",items:[...o,...c.map(d=>({...d,on:!0}))],provider:n.provider||null,note:null,error:null})}catch(n){if(!i())return;a?this._setForm({step:"review",note:n.message||"Algo deu errado"}):this._setForm({step:t?"text":"pick",error:n.message||"Algo deu errado"})}}_readText(){let t=(this._form.text||"").trim();if(!t)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:t})}async _pasteClipboard(){try{let t=await navigator.clipboard.readText();if(!t)throw new Error("empty");this._setForm({text:t,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(t,e){let a=this._form.items.slice();a[t]={...a[t],...e},this._setForm({items:a})}_itemEvent(t){let e=s=>{let[i,o]=s.split(":").map(Number),n=Math.min(1439,i*60+o+60);return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[t.repeat]||"";return this._eventFromForm({title:t.title,date:t.date,endDate:t.end_date||"",allDay:!t.start,start:t.start,end:t.end||(t.start?e(t.start):""),repeat:t.rrule?Nt(t.rrule):a,rrule:t.rrule||"",location:t.location,notes:t.notes})}async _importAdd(){let t=this._form,e=t.items.filter(o=>o.on&&(o.title||"").trim()),a=this._cal(t.target);if(!e.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let o of e)try{let n=this._itemEvent(o);await this.api.createEvent(t.target,n),s++,(!i||n.start<i)&&(i=n.start)}catch(n){this._showToast(`\u201C${k(o.title,24)}\u201D: ${n.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${_(s,"evento adicionado","eventos adicionados")} em ${k(a.name,20)}`,t.target,i)}async _openCamera(){let t=navigator.mediaDevices;if(!t||!t.getUserMedia){this._pickFiles("scan");return}let e=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:e,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(n=>n.stop());return}this._stream=a;let s=a.getVideoTracks()[0],i=s&&s.getCapabilities?s.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!i.torch},await this.updateComplete;let o=this.renderRoot.querySelector(".cam video");o&&(o.srcObject=a,o.play().catch(()=>{}))}catch(a){if(!this._cam)return;let s=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:s?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(t=>t.stop()),this._stream=null}_closeCamera(t=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let e of this._cam.shots||[])URL.revokeObjectURL(e.url);this._cam=null,t||this._popEntry("rvCam")}}async _toggleTorch(){let t=this._stream&&this._stream.getVideoTracks()[0];if(!t)return;let e=!this._cam.torch;try{await t.applyConstraints({advanced:[{torch:e}]}),this._cam={...this._cam,torch:e}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let t=this.renderRoot.querySelector(".cam video");if(!t||!t.videoWidth||!this._cam||this._cam.shots.length>=6)return;let e=1800,a=Math.min(1,e/Math.max(t.videoWidth,t.videoHeight)),s=document.createElement("canvas");s.width=Math.round(t.videoWidth*a),s.height=Math.round(t.videoHeight*a),s.getContext("2d").drawImage(t,0,0,s.width,s.height);let i=await new Promise(n=>s.toBlob(n,"image/jpeg",.86));if(!i||!this._cam)return;let o=await Ce(i,e);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,o],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let t=this._cam.shots,e=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(t,e&&this._form.step==="review")}_cameraFallback(){let t=this._cam&&this._cam.appending;this._closeCamera(),t&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(t=!0){if(!(!t&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(e){this._ai={...this._ai,ready:!1,images:!1,reason:e.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(t){await this._saveAppPrefs({ai_entity:t||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais/integracoes",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#leitura-ia");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(t=>t.id),range:"12m"})}_exportRange(t){let e=S(new Date);return t==="3m"?[e,ot(e,3)]:t==="year"?[ot(e,-12),ot(e,12)]:[e,ot(e,12)]}render(){if(!this._ready)return l`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?l`${g("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:l`<span class="spin">${g("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let t=this._view(),e=this._accent(),a=this._dark,s=`--rv-accent:${e.fill};--rv-accent-ink:${a?e.fill:e.ink};--rv-accent-soft:${Rt(e.fill,a?.18:.14)};--rv-accent-faint:${Rt(e.fill,a?.08:.07)};--rv-accent-ink-light:${e.ink};`,i;return t.name==="calendar"?i=this._renderCalendar():t.name==="more"?i=this._renderMore():t.name==="rewards"?i=this._renderRewards():i=this._renderNow(),l`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?l`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:u}
          ${this._online?u:l`<div class="offline">${g("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${i}</main>
          ${this._renderNav(t)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${o=>this._onIcsFile(o)} />
      </div>
    `}_renderNav(t){let e=s=>t.name===s,a=(s,i,o,n)=>l`<button class="tab ${e(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${o}>${g(n)}<span>${o}</span></button>`;return l`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:t.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${g("plus")}</span><span>Novo</span>
        </button>
        ${a("rewards","/recompensas","Recompensas","trophy")} ${a("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(t,e,a=u){let s=this._userName(),i=this._online?e:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return l`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${s?` \xB7 Ol\xE1, ${s}`:""}</p>
      <h1 class="page-title">${t}</h1>
      ${i?l`<p class="status"><span class="dot ${i.tone||""}" aria-hidden="true"></span><span>${i.text}</span></p>`:u}
      ${a}
    </header>`}_colorOfEvent(t){if(t.gerencia)return j("ouro");if(t.todo)return j(It);let e=this._cal(t.cal);return e&&e.color||this._accent()}_renderRow(t,e,{showCal:a=!0}={}){let s=this._now,i=t.end.getTime()<=s,o=t.start.getTime()<=s&&t.end.getTime()>s&&!t.allDay,n=this._cal(t.cal),c;if(t.allDay){let v=F(t.end,t.start);c=l`<b>Dia</b><small>${v>1?`${F(e,t.start)+1}/${v}`:"todo"}</small>`}else{let v=I(t.start,e),f=I(t.end,e)||t.end.getHours()===0&&t.end.getMinutes()===0&&F(t.end,e)===1;c=l`<b>${v?M(t.start):"\u2026"}</b><small>${f?M(t.end):"segue"}</small>`}let d=t.kind,h=t.todo?t.todo.done:d&&d.kind!=="manutencao"&&this._checkOf(t),m=[...d?d.kind==="remedio"?[d.dose,d.who]:d.kind==="conta"&&d.value!=null?[this._money(d.value)]:[d.who]:[],t.location,a?n?n.name:t.gerencia?"GerencIA":t.todo?`${t.todo.listName} \xB7 ResolvIA`:"":""].filter(Boolean).join(" \xB7 ");return l`<button class="ev-row ${i?"past":""} ${o?"live":""} ${h?"done":""}" style=${T(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="ev-time">${c}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${t.todo?l`<span class="kind-ic">${g("list-checks")}</span>`:this._kindIcon(t)}${t.summary}${h?l`<span class="ev-done">${g("check")}</span>`:u}</span>${m?l`<span class="ev-sub">${m}</span>`:u}</span>
      ${t.rrule?l`<span class="ev-rep" title=${$t(t.rrule)}>${g("repeat")}</span>`:u}
    </button>`}_renderNow(){let t=new Date(this._now),e=S(t),a=this._events($(e,-1),$(e,9)).filter(x=>!x.kind&&!x.todo),s=this._store.loading($(e,-1),$(e,9)),i=this._ix().meds.filter(x=>x.state==="atrasado"),o=ut(a,e),n=x=>x.end-x.start>=12*36e5,c=o.filter(x=>x.allDay||n(x)),d=o.filter(x=>!x.allDay&&!n(x)),h=d.filter(x=>x.start<=t&&x.end>t).sort((x,z)=>z.start-x.start),m=a.filter(x=>!x.allDay&&x.start>t&&!n(x)).sort((x,z)=>x.start-z.start)[0],v=this._visible();if(!this._cals().length)return this._renderNoCalendars();let f=d.filter(x=>x.end>t).length,b=i.length?{text:`${H(ze(t))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${H(ze(t))} \xB7 ${o.length?`${_(o.length,"evento","eventos")} hoje`:"nada hoje"}${f&&f<d.length?` \xB7 ${f} pela frente`:""}`},D;if(h.length){let x=h[0],z=this._cal(x.cal);D=this._ticket(x,{label:"Agora",pill:`termina ${re(x.end-t)}`,when:l`<b>${M(x.start)}</b> – <b>${M(x.end)}</b> · ${Ee(x.end-x.start)}`,stub:m?l`<span class="tk-next">Depois <b>${M(m.start)}</b> ${m.summary}</span>`:l`<span class="dot"></span><span>${[z&&z.name,x.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t,live:!0})}else if(m){let x=this._cal(m.cal);D=this._ticket(m,{label:"A seguir",pill:re(m.start-t),when:l`<b>${M(m.start)}</b> – ${M(m.end)} · ${I(m.start,t)?"hoje":P(m.start,t,{long:!1,cap:!1})}`,stub:l`<span class="dot"></span><span>${[x&&x.name,m.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t})}else s||(D=l`<div class="hero-ev ticket empty" style=${T(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,t)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let O=this._showAllDay||c.length<=3?c:c.slice(0,2),K=[];for(let x=1;x<=7;x++){let z=$(e,x),et=ut(a,z).filter(vt=>!(vt.allDay&&vt.start<z));et.length&&K.push({d:z,list:et})}let N=l`<div class="now-line"><span>${M(t)}</span></div>`,q=!1;return l`<section class="page">
      ${this._renderHead("Hoje",b)}
      ${v.length?u:l`<div class="hint-card">${g("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais")}>Mostrar</button></div>`}
      ${this._renderMedsPanel()} ${this._renderBillsPanel()} ${this._renderTodosPanel()}
      ${D||u}
      ${c.length?l`<div class="allday">
            ${O.map(x=>l`<button class="ad-chip" style=${T(this._colorOfEvent(x),this._dark)} @click=${()=>this._openEvent(x)}><span class="dot"></span><span>${x.summary}</span></button>`)}
            ${c.length>O.length?l`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${c.length-O.length} o dia todo</button>`:u}
          </div>`:u}
      <div class="panel agenda">
        <div class="overline">Hoje · ${W(t,t)}</div>
        ${d.length?d.map(x=>{let z=!q&&x.start>t?(q=!0,N):u;return l`${z}${this._renderRow(x,e)}`}):l`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${d.length&&!q&&d[d.length-1].end<=t?N:u}
        <button class="add-line" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${K.length?l`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${K.map(({d:x,list:z})=>l`<button class="day-head" @click=${()=>this._openDay(x)}>${P(x,t)}<span>${z.length}</span></button>
                ${z.map(et=>this._renderRow(et,x))}`)}
          </div>`:s?u:l`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
    </section>`}_ticket(t,{label:e,pill:a,when:s,stub:i,now:o,live:n=!1}){return l`<button class="hero-ev ticket ${n?"live":""}" style=${T(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(t,o,n)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${e}</span><span class="tk-pill">${g("clock","sm")}${a}</span></span>
          <span class="hero-title">${t.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(t,e,a=!1){let o=N=>(N.getHours()%12*60+N.getMinutes())/720*2*Math.PI,n=(N,q)=>[40+q*Math.sin(N),40-q*Math.cos(N)],c=(N,q,x)=>{let z=q-N;for(;z<=0;)z+=2*Math.PI;if(z=Math.max(z,.42),z>=2*Math.PI-.01)return`M 40 ${40-x} A ${x} ${x} 0 1 1 ${39.99} ${40-x}`;let[et,vt]=n(N,x),[he,gs]=n(N+z,x);return`M ${et.toFixed(2)} ${vt.toFixed(2)} A ${x} ${x} 0 ${z>Math.PI?1:0} 1 ${he.toFixed(2)} ${gs.toFixed(2)}`},d=Array.from({length:12},(N,q)=>{let x=q/12*2*Math.PI,[z,et]=n(x,q%3?27:24),[vt,he]=n(x,29);return Ue(z,et,vt,he,q%3?"tick":"tick major")}),h="",p="",m=e;if(t){let N=t.end-t.start>=432e5;h=N?c(0,2*Math.PI,34):c(o(t.start),o(t.end),34),a&&!N&&(p=c(o(t.start),o(e),34)),m=a?e:t.start}let v=o(m),f=m.getMinutes()/60*2*Math.PI,[b,D]=n(v,15),[O,K]=n(f,23);return l`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${d}
      ${h?fs(h,a?"span faint":"span"):u}
      ${p?fs(p,"span"):u}
      ${Ue(40,40,b,D,"hand hour")}
      ${Ue(40,40,O,K,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return l`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${g("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let t=new Date(this._now),e=this._cursor,a=this._mode,s=this._app("week_start",0),i,o,n;if(a==="mes"||a==="lista")i=`${H(ht[e.getMonth()])}${e.getFullYear()!==t.getFullYear()?` ${e.getFullYear()}`:""}`,o=()=>this._cursor=a==="lista"?$(e,-30):ot(e,-1),n=()=>this._cursor=a==="lista"?$(e,30):ot(e,1);else if(a==="semana"){let p=Ot(e,s),m=$(p,6);i=p.getMonth()===m.getMonth()?`${p.getDate()}\u2013${m.getDate()} ${ht[m.getMonth()].slice(0,3)}`:`${p.getDate()} ${ht[p.getMonth()].slice(0,3)} \u2013 ${m.getDate()} ${ht[m.getMonth()].slice(0,3)}`,o=()=>this._cursor=$(e,-7),n=()=>this._cursor=$(e,7)}else i=P(e,t),o=()=>this._cursor=$(e,-1),n=()=>this._cursor=$(e,1);let c=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],d;a==="semana"?d=this._renderTimeGrid(Ot(e,s),7):a==="dia"?d=this._renderTimeGrid(e,1):a==="lista"?d=this._renderList():d=this._renderMonth();let h=a==="mes"?e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()&&I(e,t):I(e,t);return l`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{o(),this._scrollWeek=!0}}>${g("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{n(),this._scrollWeek=!0}}>${g("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${c.map(([p,m,v])=>l`<button class=${a===p?"on":""} role="tab" aria-selected=${a===p?"true":"false"} @click=${()=>this._setMode(p)}>${g(v)}<span>${m}</span></button>`)}
        </div>
        <button class="pick ${h?"on":""}" @click=${()=>{this._cursor=S(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${d}
    </section>`}_renderMonth(){let t=new Date(this._now),e=this._cursor,a=this._app("week_start",0),s=new Date(e.getFullYear(),e.getMonth(),1),i=Ot(s,a),o=$(i,42),n=this._events(i,o),c=[];for(let m=0;m<42;m++){let v=$(i,m),f=ut(n,v);c.push({d:v,list:f})}let d=c[35].d.getMonth()!==e.getMonth()?5:6,h=ut(n,e),p={x:0,y:0};return l`
      <div class="month" @touchstart=${m=>(p.x=m.touches[0].clientX,p.y=m.touches[0].clientY)} @touchend=${m=>{let v=m.changedTouches[0].clientX-p.x,f=m.changedTouches[0].clientY-p.y;Math.abs(v)>60&&Math.abs(f)<50&&(this._cursor=ot(e,v<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(m=>l`<span>${bt[(m+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${c.slice(0,d*7).map(({d:m,list:v})=>{let f=m.getMonth()!==e.getMonth(),b=[...new Set(v.map(D=>this._colorOfEvent(D).fill))].slice(0,4);return l`<button class="cell ${f?"out":""} ${I(m,t)?"today":""} ${I(m,e)?"sel":""}" @click=${()=>this._cursor=m} aria-label="${P(m,t)}: ${_(v.length,"evento","eventos")}">
              <span class="num">${m.getDate()}</span>
              <span class="dots">${b.map(D=>l`<i style="background:${D}"></i>`)}${v.length>4?l`<b>+</b>`:u}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${P(e,t)}</span><button class="text-btn" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento</button></div>
        ${h.length?h.map(m=>this._renderRow(m,e)):l`<p class="empty-line">${this._store.loading(i,o)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(t,e){let a=new Date(this._now),s=Array.from({length:e},(p,m)=>$(t,m)),i=this._events(s[0],$(s[e-1],1)),o=Array.from({length:24},(p,m)=>m),n=this._app("week_start",0),c=p=>p.allDay||p.end-p.start>=12*36e5,d=s.map(p=>ut(i,p).filter(c)),h=Math.max(0,...d.map(p=>p.length));return l`
      ${e===7?l`<div class="week-strip">
            ${s.map(p=>l`<button class="ws-day ${I(p,a)?"today":""} ${I(p,this._cursor)?"sel":""}" @click=${()=>this._cursor=p}>
              <span>${bt[p.getDay()]}</span><b>${p.getDate()}</b>
            </button>`)}
          </div>`:l`<div class="week-strip day-strip">
            ${Array.from({length:7},(p,m)=>$(Ot(this._cursor,n),m)).map(p=>l`<button class="ws-day ${I(p,a)?"today":""} ${I(p,this._cursor)?"sel":""}" @click=${()=>this._cursor=p}><span>${bt[p.getDay()]}</span><b>${p.getDate()}</b></button>`)}
          </div>`}
      ${h?l`<div class="tgrid-allday" style="--n:${e}">
            <span class="tg-label">dia todo</span>
            ${d.map(p=>l`<div class="tg-adcol">${p.slice(0,3).map(m=>l`<button class="tg-ad ${m.kind&&this._checkOf(m)?"done":""}" style=${T(this._colorOfEvent(m),this._dark)} @click=${()=>this._openEvent(m)}>${m.summary}</button>`)}${p.length>3?l`<span class="tg-admore">+${p.length-3}</span>`:u}</div>`)}
          </div>`:u}
      <div class="tgrid-scroll">
        <div class="tgrid ${e===1?"one":"week"}" style="--n:${e};--hh:${mt}px">
          <div class="tg-hours">${o.map(p=>l`<span style="top:${p*mt}px">${p?`${String(p).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(p=>{let m=Ka(ut(i,p).filter(b=>!c(b)),p),v=I(p,a),f=(a.getHours()+a.getMinutes()/60)*mt;return l`<div class="tg-col ${v?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let D=b.offsetY;this._openForm({date:p,hour:Math.max(0,Math.min(23,Math.floor(D/mt)))})}}>
              ${m.map(({event:b,top:D,height:O,lane:K,lanes:N})=>{let q=Math.max(O*mt-2,18);return l`<button class="tg-ev ${q<34?"short":""} ${b.kind&&this._checkOf(b)?"done":""}" style="${T(this._colorOfEvent(b),this._dark)}top:${D*mt}px;height:${q}px;left:calc(${K/N*100}% + 1px);width:calc(${100/N}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.kind&&this._checkOf(b)?"\u2713 ":""}${b.summary}</b>${q>=34?l`<small>${M(b.start)}${e===1&&b.location?` \xB7 ${b.location}`:""}</small>`:u}
                </button>`})}
              ${v?l`<i class="tg-now" style="top:${f}px"></i>`:u}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let t=new Date(this._now),e=this._query.trim(),a=Se(e),s,i;a?(s=$(S(t),-365),i=$(S(t),366)):(s=this._cursor,i=$(this._cursor,30));let o=this._events(s,i);a&&(o=o.filter(d=>Se(`${d.summary} ${d.location} ${d.description}`).includes(a)));let n=[];for(let d of o){let h=S(d.start<s?s:d.start),p=n[n.length-1];p&&I(p.d,h)?p.list.push(d):n.push({d:h,list:[d]})}let c=this._store.loading(s,i);return l`
      <label class="search-box">
        ${g("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${d=>this._query=d.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?l`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${g("x")}</button>`:u}
      </label>
      ${a?l`<p class="page-sub" style="margin-top:0">${c?"Buscando\u2026":_(o.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:u}
      ${n.length?l`<div class="panel agenda">
            ${n.map(({d,list:h})=>l`<button class="day-head ${I(d,t)?"today":""}" @click=${()=>this._openDay(d,"dia")}>${P(d,t)}<span>${h.length}</span></button>${h.map(p=>this._renderRow(p,d))}`)}
          </div>`:l`<div class="panel"><div class="empty"><div class="em-icon">${g(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":c?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${k(e,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let t=this._cals(),e=[];for(let o of t){let n=e.find(c=>c.label===o.group);n?n.list.push(o):e.push({label:o.group,list:[o]})}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal();return l`
      ${e.map(o=>l`<div class="panel">
          <div class="overline">${o.label}</div>
          ${o.list.map(n=>l`<div class="row cal-row ${n.hidden?"off":""}" style=${T(n.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(n)} aria-label="Personalizar ${n.name}">${g(n.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(n)}>
                <div class="label">${n.name}</div>
                <div class="hint">${[n.device,a.get(n.id)?"n\xE3o carregou":n.unavailable?"indispon\xEDvel":n.canCreate?n.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!n.hidden} @change=${c=>this._saveCalPrefs(n.id,{hidden:c.target.checked?null:!0})} aria-label="Mostrar ${n.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      <div class="panel" id="novos-eventos">
        <div class="overline">Novos eventos</div>
        ${s.length?l`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${o=>this._saveAppPrefs({default_calendar:o.target.value})}>
                ${s.map(o=>l`<option value=${o.id} ?selected=${o.id===i}>${o.name}</option>`)}
              </select>
              <span class="field-hint">${g("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`:l`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local logo abaixo.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let t=this._isAdmin(),e=(s,i,o,n)=>l`<button class="row" @click=${n}>
      <span class="tile" style=${T(this._accent(),this._dark)}>${g(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${o}</div></span>
      ${g("chevron-right")}
    </button>`,a=s=>()=>t?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return l`<div class="panel">
      <div class="overline">Adicionar calendários</div>
      ${e("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${e("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${e("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${e("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${e("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(t){this._openSheet("calendar",{id:t.id,name:t.colorId||t.name!==t.origName?t.name:"",color:t.colorId,hidden:t.hidden})}async _saveCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return;let a=(t.name||"").trim();await this._saveCalPrefs(t.id,{name:a&&a!==e.origName?a:null,color:t.color||null,hidden:t.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let t=this._view().tab,e=[["calendarios","Calend\xE1rios","layers"],["avisos","Avisos","bell-ring"],["integracoes","Integra\xE7\xF5es","blocks"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"]],a=o=>{o!==t&&(this._haptic("light"),this._go(o==="calendarios"?"/mais":`/mais/${o}`,!0))},s,i={text:`CronologIA ${this._version}`};if(t==="avisos")s=this._renderAlertsPanel();else if(t==="integracoes")s=l`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderAiPanel()}`;else if(t==="dados")s=this._renderDataPanel();else if(t==="aparencia")s=this._renderAppearance();else{s=this._renderCalendarsTab();let o=this._cals(),n=o.filter(c=>c.canCreate).length;i={text:o.length?`${_(o.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${n?_(n,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}return l`<section class="page">
      ${this._renderHead("Mais",i)}
      <div class="seg compact more-tabs" role="tablist" aria-label="Seções">
        ${e.map(([o,n,c])=>l`<button class=${t===o?"on":""} role="tab" aria-selected=${t===o?"true":"false"} @click=${()=>a(o)}>${g(c)}<span>${n}</span></button>`)}
      </div>
      <div role="tabpanel" aria-label=${e.find(o=>o[0]===t)[1]}>${s}</div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`}_renderAppearance(){let t=this._app("accent","turquesa"),e=this._app("week_start",0);return l`
      <div class="panel">
        <div class="overline">Aparência</div>
        <div class="row col">
          <div class="label">Tema</div>
          <div class="seg" role="radiogroup" aria-label="Tema">
            ${[["auto","Autom\xE1tico","sun-moon"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>l`<button class=${this._theme===a?"on":""} role="radio" aria-checked=${this._theme===a?"true":"false"} @click=${()=>this._setTheme(a)}>${g(i)}${s}</button>`)}
          </div>
          <div class="hint" style="white-space:normal">${this._theme==="auto"?"Segue o modo claro/escuro do Home Assistant.":"Vale s\xF3 para este aparelho."}</div>
        </div>
        <div class="row col">
          <div class="label">Cor do app</div>
          <div class="swatches">
            ${ee.map(a=>l`<button class="sw ${t===a.id?"on":""}" style="--c:${a.fill}" aria-label=${a.label} @click=${()=>this._saveAppPrefs({accent:a.id})}>${t===a.id?g("check"):u}</button>`)}
          </div>
        </div>
        <div class="row col">
          <div class="label">A semana começa no</div>
          <div class="seg" role="radiogroup" aria-label="Início da semana">
            ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>l`<button class=${e===a?"on":""} role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${s}</button>`)}
          </div>
        </div>
      </div>

    `}_renderAiPanel(){let t=this._ai||{},e=t.entities||[],a=this._app("ai_entity",""),s=this._aiChecking?"off":t.ready&&t.images?"ok":t.ready?"warn":"bad",i=this._aiChecking?"Verificando\u2026":t.ready&&t.images?"Pronta para ler fotos":t.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",o="";return t.ready&&t.using&&(o=`Usando ${t.using.name}${a?"":" (a IA padr\xE3o do Home Assistant)"}.`,t.photos&&(o+=` Para fotos, ${t.photos.name}.`)),t.reason&&(o=`${o} ${t.reason}`.trim()),l`<div class="panel" id="leitura-ia">
      <div class="overline">Leitura por IA</div>
      <p class="panel-lead">Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.</p>
      <div class="ai-state ${s}"><span class="dot"></span><div><b>${i}</b>${o?l`<span>${o}</span>`:u}</div></div>
      ${e.length||a?l`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${n=>this._chooseAi(n.target.value)}>
              <option value="" ?selected=${!a}>Padrão do Home Assistant</option>
              ${e.map(n=>l`<option value=${n.id} ?selected=${n.id===a}>${n.name}${n.images?"":" (s\xF3 texto)"}${n.available?"":" (indispon\xEDvel)"}</option>`)}
              ${a&&!e.some(n=>n.id===a)?l`<option value=${a} selected>${a} (não encontrada)</option>`:u}
            </select>
            <span class="field-hint">${g("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:u}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${g("rotate-ccw")}Verificar de novo</button></div>
      ${t.ready&&t.images?u:l`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return u;let t=this._form||{},e=u,a=null;if(this._sheet==="event")e=this._renderEventSheet(),a=t.ev&&this._colorOfEvent(t.ev);else if(this._sheet==="form")e=this._renderFormSheet(),a=this._cal(t.cal)&&this._cal(t.cal).color;else if(this._sheet==="scope")e=this._renderScope();else if(this._sheet==="confirm")e=this._renderConfirm();else if(this._sheet==="import")e=this._renderImportSheet(),a=this._cal(t.target)&&this._cal(t.target).color;else if(this._sheet==="calendar"){e=this._renderCalSheet();let i=this._cal(t.id);a=j(t.color)||i&&i.color}else this._sheet==="export"?e=this._renderExportSheet():this._sheet==="outlook"?e=this._renderOutlookSheet():this._sheet==="nocal"?e=this._renderNoCalSheet():this._sheet==="maint"?e=this._renderMaintSheet():this._sheet==="versions"?e=this._renderVersions():this._sheet==="who"?e=this._renderWhoSheet():this._sheet==="todo"?(e=this._renderTodoSheet(),a=j(It)):this._sheet==="extra"?e=this._renderExtraSheet():this._sheet==="demerit"?e=this._renderDemeritSheet():this._sheet==="bill"&&(e=this._renderBillSheet(),a=j("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${Rt(a.fill,this._dark?.18:.14)};${T(a,this._dark)}`:"";return l`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${e}
      </div>
    `}_sheetHead(t,e){return l`<div class="sheet-head">
      ${e?l`<button class="icon-btn back" @click=${e} aria-label="Voltar">${g("chevron-left")}</button>`:u}
      <h3 class="display">${t}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
    </div>`}_renderEventSheet(){let t=this._form.ev,e=new Date(this._now),a=this._cal(t.cal),s;if(t.allDay){let o=$(t.end,-1);s=I(o,t.start)?`${P(t.start,e)} \xB7 dia todo`:`${H(W(t.start,e))} \u2013 ${W(o,e)} \xB7 ${_(F(t.end,t.start),"dia","dias")}`}else I(t.start,t.end)||t.end.getHours()===0&&t.end.getMinutes()===0&&F(t.end,t.start)===1?s=`${P(t.start,e)} \xB7 ${M(t.start)} \u2013 ${M(t.end)} (${Ee(t.end-t.start)})`:s=`${H(W(t.start,e))}, ${M(t.start)} \u2013 ${W(t.end,e)}, ${M(t.end)}`;let i=t.start>e?re(t.start-e):t.end>e?"acontecendo agora":"";return l`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${t.summary}</h3>
          <p class="ev-cal">${a?a.name:t.cal}${i?l` · <b>${i}</b>`:u}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${g("clock")}<span>${s}</span></div>
        ${t.rrule?l`<div class="fact">${g("repeat")}<span>${$t(t.rrule)}</span></div>`:u}
        ${t.location?l`<a class="fact link" href=${gi(t.location)} target="_blank" rel="noopener noreferrer">${g("map-pin")}<span>${t.location}</span>${g("external-link","sm")}</a>`:u}
        ${t.kind?this._renderKindFacts(t):u}
        ${t.description&&!t.kind?l`<div class="fact notes">${g("file-text")}<span>${ae(t.description).map(o=>o.url?l`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`:o.text)}</span></div>`:u}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?l`<p class="sheet-note">${g("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:u}
      <div class="sheet-actions">
        ${a&&a.canDelete&&t.uid?l`<button class="btn danger" @click=${()=>this._askDelete(t)} aria-label="Apagar">${g("trash")}</button>`:u}
        ${this._writable().length?l`<button class="btn outline" @click=${()=>this._openForm({ev:t,copy:!0})}>${g("copy")}Duplicar</button>`:u}
        ${a&&a.canUpdate&&t.uid?l`<button class="btn primary" @click=${()=>this._openForm({ev:t})}>${g("pencil")}Editar</button>`:u}
      </div>
    `}_renderFormSheet(){let t=this._form;if(t.kind)return this._renderKindForm();let e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(v=>v.id===t.cal):e.filter(v=>v.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e,s=new Date,i=[{label:"Hoje",d:S(s)},{label:"Amanh\xE3",d:$(S(s),1)}],o=i.some(v=>y(v.d)===t.date),n=v=>{let f=this.renderRoot.querySelector(v);if(f)try{f.showPicker()}catch{f.focus(),f.click()}},c=v=>{if(!v)return;let f=O=>{let[K,N]=O.split(":").map(Number);return K*60+N},b=Math.max(15,(f(t.end)-f(t.start)+1440)%1440||60),D=(f(v)+b)%1440;this._setForm({start:v,end:`${String(Math.floor(D/60)).padStart(2,"0")}:${String(D%60).padStart(2,"0")}`})},d=v=>{let[f,b]=t.start.split(":").map(Number),D=Math.min(1439,f*60+b+v);this._setForm({end:`${String(Math.floor(D/60)).padStart(2,"0")}:${String(D%60).padStart(2,"0")}`,endDate:""})},h=v=>{let[f,b]=(v||"0:0").split(":").map(Number);return f*60+b},p=(h(t.end)-h(t.start)+1440)%1440,m=!t.allDay&&!t.endDate&&h(t.end)<=h(t.start);return l`
      ${this._sheetHead(t.mode==="add"?"Novo":"Editar evento")}
      ${t.mode==="add"?this._renderModelChips(""):u}
      ${t.mode==="add"?l`<div class="imp-strip">
            <button @click=${()=>this._openImport("text")}>${g("clipboard-paste")}<span>Colar mensagem</span></button>
            <button @click=${()=>this._openImport("photos")}>${g("images")}<span>Escolher fotos</span></button>
            <button @click=${()=>this._openImport("scan")}>${g("scan-text")}<span>Digitalizar com IA</span></button>
          </div>`:u}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${v=>this._setForm({title:v.target.value})} @keydown=${v=>v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?l`<div class="field">
            <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(v=>l`<button class="pick list ${t.cal===v.id?"on":""}" style=${T(v.color,this._dark)} @click=${()=>this._setForm({cal:v.id})}><span class="dot"></span><span>${k(v.name,24)}</span></button>`)}</div>
          </div>`:u}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${t.allDay} @change=${v=>this._setForm({allDay:v.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${i.map(v=>l`<button class="pick ${t.date===y(v.d)?"on":""}" @click=${()=>this._setForm({date:y(v.d),endDate:t.endDate&&t.endDate<y(v.d)?"":t.endDate})}>${v.label}</button>`)}
          <button class="pick ${o?"":"on"}" @click=${()=>n("#cr-date")}>
            ${g("calendar")}<span>${o?"Outra data":H(P(A(t.date),s,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${t.date} @change=${v=>v.target.value&&this._setForm({date:v.target.value,endDate:t.endDate&&t.endDate<v.target.value?"":t.endDate})} />
          </button>
        </div>
        ${t.allDay?l`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${t.endDate||t.date} min=${t.date} @change=${v=>this._setForm({endDate:v.target.value>t.date?v.target.value:""})} />
              ${t.endDate?l`<span class="tl">${_(F(A(t.endDate),A(t.date))+1,"dia","dias")}</span>`:l`<span class="tl">um dia</span>`}
            </div>`:l`<div class="time-row">
                <input type="time" .value=${t.start} aria-label="Começa" @change=${v=>c(v.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${t.end} aria-label="Termina" @change=${v=>v.target.value&&this._setForm({end:v.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([v,f])=>l`<button class="pick ${p===v&&!t.endDate?"on":""}" @click=${()=>d(v)}>${f}</button>`)}
              </div>
              ${m?l`<div class="field-hint">${g("info")}<span>Termina no dia seguinte.</span></div>`:u}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="chip-row">${oe.map(v=>l`<button class="pick ${t.repeat===v.id?"on":""}" @click=${()=>this._setForm({repeat:v.id})}>${v.id?g("repeat"):u}<span>${v.label}</span></button>`)}</div>
        ${t.rrule&&Nt(t.rrule)===t.repeat&&$t(t.rrule)!==(oe.find(v=>v.id===t.repeat)||{}).label?l`<div class="field-hint">${g("repeat")}<span>${$t(t.rrule)}</span></div>`:u}
        ${t.rid?l`<div class="field-hint">${g("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
      </div>
      <label class="field">
        <span class="flabel">Local</span>
        <input type="text" .value=${t.location} placeholder="Endereço, sala ou link" @input=${v=>this._setForm({location:v.target.value})} />
      </label>
      <label class="field">
        <span class="flabel">Notas</span>
        <textarea rows="3" .value=${t.notes} placeholder="Detalhes, o que levar…" @input=${v=>this._setForm({notes:v.target.value})}></textarea>
      </label>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let t=this._form,e=t.action==="edit",a=(s,i,o,n=!1)=>l`<button class="imp-opt ${n?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${g(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${o}</small></span>${g("chevron-right")}
    </button>`;return l`
      ${this._sheetHead(e?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${k(t.title,40)}” se repete. O que você quer ${e?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",e?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",e?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${e?u:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let t=this._form;return l`
      <div class="sheet-head"><h3 class="display">${t.title}</h3></div>
      <p class="confirm-text">${t.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn ${t.danger?"danger-fill":"primary"}" @click=${()=>t.run()}>${t.label}</button>
      </div>
    `}_renderImportSheet(){let t=this._form,e=this._ai||{},a=this._writable(),s=this._cal(t.target),i=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},o=t.error?l`<div class="imp-error">${g("circle-alert")}<span>${t.error}</span></div>`:u,n=t.images&&t.images.length?l`<div class="thumbs">${t.images.map(d=>l`<img src=${d.url} alt="" />`)}</div>`:u,c=l`<div class="imp-error soft">${g("sparkles")}<span>${e.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(t.step==="text")return l`
        ${this._sheetHead("Colar mensagem",i)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${t.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${d=>this._setForm({text:d.target.value,error:null})}></textarea>
        </label>
        ${o} ${e.ready?u:c}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._pasteClipboard()}>${g("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(t.text||"").trim()||!e.ready} @click=${()=>this._readText()}>${g("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${e.ready?`${e.using.name} encontra datas, hor\xE1rios e locais, mesmo em mensagens corridas. Voc\xEA revisa antes de adicionar.`:""}</p>
      `;if(t.step==="loading")return l`
        ${this._sheetHead("Lendo\u2026")}
        ${n}
        <div class="imp-loading"><span class="spin">${g("loader-circle")}</span><span>${t.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:t.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(t.step==="review"){let d=t.items.filter(m=>m.on&&(m.title||"").trim()).length,h=t.provider==="ics"?`do arquivo ${k(t.fileName||".ics",28)}`:t.provider?`lidos por ${t.provider}`:"",p=new Date;return l`
        ${this._sheetHead("Revisar eventos",i)}
        ${n}
        <p class="sheet-note top">${_(t.items.length,"evento encontrado","eventos encontrados")}${h?` \xB7 ${h}`:""}. Confira datas e horários.</p>
        ${t.note?l`<div class="imp-error soft">${g("sparkles")}<span>${t.note}</span></div>`:u}
        <div class="rv-list">
          ${t.items.map((m,v)=>l`<div class="rv-card ${m.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${m.on?"on":""}" role="checkbox" aria-checked=${m.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(v,{on:!m.on})}>${g("check")}</button>
                <input class="rv-title" type="text" .value=${m.title} aria-label="Título" @input=${f=>this._setItem(v,{title:f.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:t.items.filter((f,b)=>b!==v)})}>${g("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${m.date} aria-label="Data" @change=${f=>f.target.value&&this._setItem(v,{date:f.target.value})} />
                ${m.start?l`<span class="rv-times"><input type="time" .value=${m.start} aria-label="Começa" @change=${f=>this._setItem(v,{start:f.target.value})} /><span>–</span><input type="time" .value=${m.end} aria-label="Termina" @change=${f=>this._setItem(v,{end:f.target.value})} /></span>`:l`<button class="pick ghost" @click=${()=>this._setItem(v,{start:"09:00",end:"10:00"})}>${g("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${H(P(A(m.date),p))}${m.end_date?` at\xE9 ${W(A(m.end_date),p)}`:""}${m.location?` \xB7 ${m.location}`:""}${m.repeat||m.rrule?` \xB7 ${m.rrule?$t(m.rrule):oe.find(f=>f.id===m.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${e.images&&t.provider!=="ics"?l`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${g("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${g("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:u}
        ${a.length>1?l`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${a.map(m=>l`<button class="pick list ${t.target===m.id?"on":""}" style=${T(m.color,this._dark)} @click=${()=>this._setForm({target:m.id})}><span class="dot"></span><span>${k(m.name,24)}</span></button>`)}</div>
            </div>`:u}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!d||t.adding} @click=${()=>this._importAdd()}>
            ${t.adding?"Adicionando\u2026":d?`Adicionar ${_(d,"evento","eventos")}${s&&a.length<=1?` em ${k(s.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return l`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">Crie eventos a partir de uma mensagem, de uma foto (convite, cartaz, cartão de consulta) ou de um arquivo .ics. Você revisa antes de adicionar.</p>
      <div class="imp-options">
        <button class="imp-opt" ?disabled=${!e.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${g("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!e.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${g("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid()?"Prints e fotos da galeria, uma por vez":"Prints e fotos da galeria (at\xE9 6)"}</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!e.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${g("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>Fotografe um convite ou cartão de consulta</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${g("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${g("chevron-right")}
        </button>
      </div>
      ${e.images?u:c}
      ${o}
    `}_renderCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return this._sheetHead("Calend\xE1rio");let a=j(t.color)||e.color;return l`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${T(a,this._dark)}>
        <span class="tile">${g(e.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(t.name||"").trim()||e.origName}</span><span class="lc-meta">${e.group}${e.device?` \xB7 ${e.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${t.name} placeholder=${e.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${ee.map(s=>l`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?g("check"):u}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${e.canCreate?e.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${e.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!t.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?l`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${e.id}`)}>${g("external-link")}Abrir na tela padrão do HA</button>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${g("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let t=this._form,e=this._cals(),[a,s]=this._exportRange(t.range),i=t.cals.length?this.api.exportUrl({calendars:t.cals,start:Y(a),end:Y(s)}):null,o=n=>this._setForm({cals:t.cals.includes(n)?t.cals.filter(c=>c!==n):[...t.cals,n]});return l`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${e.map(n=>l`<button class="pick list ${t.cals.includes(n.id)?"on":""}" style=${T(n.color,this._dark)} @click=${()=>o(n.id)}><span class="dot"></span><span>${k(n.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([n,c])=>l`<button class="pick ${t.range===n?"on":""}" @click=${()=>this._setForm({range:n})}>${c}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?l`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${g("download")}Baixar .ics</a>`:l`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${g("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let t=this._isAdmin();return l`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${g("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${g("external-link","sm")}</a>
      </div>
      <div class="help-card">
        <b>${g("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${t?l`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${g("chevron-right","sm")}</button>`:u}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return l`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let t=this._cam;if(!t)return u;let e=t.shots.length;return l`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${t.flash?l`<div class="cam-flash" .key=${t.flash}></div>`:u}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${g("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${t.torchOk?l`<button class="cam-btn ${t.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${g("zap")}</button>`:l`<span class="cam-btn ghost"></span>`}
        </div>
        ${t.status==="error"?l`<div class="cam-msg">${g("camera")}<p>${t.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${g("images")}Escolher foto</button></div>`:l`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${t.status==="starting"?"Abrindo a c\xE2mera\u2026":e?`${_(e,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${t.shots.slice(-3).map(a=>l`<img src=${a.url} alt="" />`)}${e>3?l`<span>+${e-3}</span>`:u}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${t.status!=="live"||e>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!e} @click=${()=>this._useShots()}>Pronto${e?` (${e})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return u;let t=this._toast;return l`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${t.text}</span>
      ${t.action?l`<button @click=${()=>{this._toast=null,t.action.run()}}>${t.action.label}</button>`:u}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Be);var xi=document.getElementById("app"),Ye=document.createElement("cronologia-app");Ye.env=Pa();Ye.api=new Zt;xi.replaceChildren(Ye);})();
