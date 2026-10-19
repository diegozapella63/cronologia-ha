/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var yt=globalThis,Qt=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),be=new WeakMap,_t=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i,e=this.t;if(Qt&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=be.get(e)),t===void 0&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),a&&be.set(e,t))}return t}toString(){return this.cssText}},Ht=s=>new _t(typeof s=="string"?s:s+"",void 0,te),gt=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((a,i,r)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new _t(e,s,te)},Da=(s,t)=>{if(Qt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let a=document.createElement("style"),i=yt.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=e.cssText,s.appendChild(a)}},we=Qt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return Ht(e)})(s):s,{is:Ea,defineProperty:za,getOwnPropertyDescriptor:Ta,getOwnPropertyNames:Ha,getOwnPropertySymbols:Fa,getPrototypeOf:Oa}=Object,Ft=globalThis,ye=Ft.trustedTypes,Ra=ye?ye.emptyScript:"",Na=Ft.reactiveElementPolyfillSupport,ct=(s,t)=>s,Xt={toAttribute(s,t){switch(t){case Boolean:s=s?Ra:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Pe=(s,t)=>!Ea(s,t),_e={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:Pe};Symbol.metadata??=Symbol("metadata"),Ft.litPropertyMetadata??=new WeakMap;var B=class extends HTMLElement{static addInitializer(t){this.o(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(t,e=_e){if(e.state&&(e.attribute=!1),this.o(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(t,a,e);i!==void 0&&za(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){let{get:i,set:r}=Ta(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let n=i?.call(this);r?.call(this,o),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_e}static o(){if(this.hasOwnProperty(ct("elementProperties")))return;let t=Oa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(ct("properties"))){let e=this.properties,a=[...Ha(e),...Fa(e)];for(let i of a)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,i]of e)this.elementProperties.set(a,i)}this.u=new Map;for(let[e,a]of this.elementProperties){let i=this.p(e,a);i!==void 0&&this.u.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let i of a)e.unshift(we(i))}else t!==void 0&&e.push(we(t));return e}static p(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this.P??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this.P?.delete(t)}$(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this.v=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Da(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this.P?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}C(t,e){let a=this.constructor.elementProperties.get(t),i=this.constructor.p(t,a);if(i!==void 0&&a.reflect===!0){let r=(a.converter?.toAttribute!==void 0?a.converter:Xt).toAttribute(e,a.type);this.m=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this.m=null}}_$AK(t,e){let a=this.constructor,i=a.u.get(t);if(i!==void 0&&this.m!==i){let r=a.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Xt;this.m=i;let n=o.fromAttribute(e,r.type);this[i]=n??this.T?.get(i)??n,this.m=null}}requestUpdate(t,e,a,i=!1,r){if(t!==void 0){let o=this.constructor;if(i===!1&&(r=this[t]),a??=o.getPropertyOptions(t),!((a.hasChanged??Pe)(r,e)||a.useDefault&&a.reflect&&r===this.T?.get(t)&&!this.hasAttribute(o.p(t,a))))return;this.M(t,e,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(t,e,{useDefault:a,reflect:i,wrapped:r},o){a&&!(this.T??=new Map).has(t)&&(this.T.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),i===!0&&this.m!==t&&(this.A??=new Set).add(t))}async k(){this.isUpdatePending=!0;try{await this.S}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[i,r]of this.v)this[i]=r;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[i,r]of a){let{wrapped:o}=r,n=this[i];o!==!0||this._$AL.has(i)||n===void 0||this.M(i,void 0,r,n)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this.P?.forEach(a=>a.hostUpdate?.()),this.update(e)):this.U()}catch(a){throw t=!1,this.U(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this.P?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(t){return!0}update(t){this.A&&=this.A.forEach(e=>this.C(e,this[e])),this.U()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[ct("elementProperties")]=new Map,B[ct("finalized")]=new Map,Na?.({ReactiveElement:B}),(Ft.reactiveElementVersions??=[]).push("2.1.2");var ee=globalThis,$e=s=>s,$t=ee.trustedTypes,ke=$t?$t.createPolicy("lit-html",{createHTML:s=>s}):void 0,ae="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,ie="?"+L,Pa=`<${ie}>`,X=document,pt=()=>X.createComment(""),ht=s=>s===null||typeof s!="object"&&typeof s!="function",se=Array.isArray,Ie=s=>se(s)||typeof s?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,Me=/>/g,J=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,Ce=/"/g,Le=/^(?:script|style|textarea|title)$/i,re=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=re(1),Ot=re(2),mi=re(3),A=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),De=new WeakMap,K=X.createTreeWalker(X,129);function Ve(s,t){if(!se(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(t):t}var Ue=(s,t)=>{let e=s.length-1,a=[],i,r=t===2?"<svg>":t===3?"<math>":"",o=lt;for(let n=0;n<e;n++){let d=s[n],p,m,l=-1,u=0;for(;u<d.length&&(o.lastIndex=u,m=o.exec(d),m!==null);)u=o.lastIndex,o===lt?m[1]==="!--"?o=Ae:m[1]!==void 0?o=Me:m[2]!==void 0?(Le.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=J):m[3]!==void 0&&(o=J):o===J?m[0]===">"?(o=i??lt,l=-1):m[1]===void 0?l=-2:(l=o.lastIndex-m[2].length,p=m[1],o=m[3]===void 0?J:m[3]==='"'?Ce:Se):o===Ce||o===Se?o=J:o===Ae||o===Me?o=lt:(o=J,i=void 0);let h=o===J&&s[n+1].startsWith("/>")?" ":"";r+=o===lt?d+Pa:l>=0?(a.push(p),d.slice(0,l)+ae+d.slice(l)+L+h):d+L+(l===-2?n:h)}return[Ve(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},ut=class s{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let r=0,o=0,n=t.length-1,d=this.parts,[p,m]=Ue(t,e);if(this.el=s.createElement(p,a),K.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=K.nextNode())!==null&&d.length<n;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(ae)){let u=m[o++],h=i.getAttribute(l).split(L),x=/([.?@])?(.*)/.exec(u);d.push({type:1,index:r,name:x[2],strings:h,ctor:x[1]==="."?At:x[1]==="?"?Mt:x[1]==="@"?St:G}),i.removeAttribute(l)}else l.startsWith(L)&&(d.push({type:6,index:r}),i.removeAttribute(l));if(Le.test(i.tagName)){let l=i.textContent.split(L),u=l.length-1;if(u>0){i.textContent=$t?$t.emptyScript:"";for(let h=0;h<u;h++)i.append(l[h],pt()),K.nextNode(),d.push({type:2,index:++r});i.append(l[u],pt())}}}else if(i.nodeType===8)if(i.data===ie)d.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(L,l+1))!==-1;)d.push({type:7,index:r}),l+=L.length-1}r++}}static createElement(t,e){let a=X.createElement("template");return a.innerHTML=t,a}};function Z(s,t,e=s,a){if(t===A)return t;let i=a!==void 0?e.N?.[a]:e.O,r=ht(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,e,a)),a!==void 0?(e.N??=[])[a]=i:e.O=i),i!==void 0&&(t=Z(s,i._$AS(s,t.values),i,a)),t}var kt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(t){let{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??X).importNode(e,!0);K.currentNode=i;let r=K.nextNode(),o=0,n=0,d=a[0];for(;d!==void 0;){if(o===d.index){let p;d.type===2?p=new Rt(r,r.nextSibling,this,t):d.type===1?p=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(p=new Ct(r,this,t)),this._$AV.push(p),d=a[++n]}o!==d?.index&&(r=K.nextNode(),o++)}return K.currentNode=X,i}V(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},Rt=class qe{get _$AU(){return this._$AM?._$AU??this.D}constructor(t,e,a,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this.D=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),ht(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==A&&this.L(t):t._$litType$!==void 0?this.j(t):t.nodeType!==void 0?this.I(t):Ie(t)?this.H(t):this.L(t)}B(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}I(t){this._$AH!==t&&(this._$AR(),this._$AH=this.B(t))}L(t){this._$AH!==f&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.I(X.createTextNode(t)),this._$AH=t}j(t){let{values:e,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=ut.createElement(Ve(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.V(e);else{let r=new kt(i,this),o=r.R(this.options);r.V(e),this.I(o),this._$AH=r}}_$AC(t){let e=De.get(t.strings);return e===void 0&&De.set(t.strings,e=new ut(t)),e}H(t){se(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,i=0;for(let r of t)i===e.length?e.push(a=new qe(this.B(pt()),this.B(pt()),this,this.options)):a=e[i],a._$AI(r),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=$e(t).nextSibling;$e(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this.D=t,this._$AP?.(t))}},G=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=f}_$AI(t,e=this,a,i){let r=this.strings,o=!1;if(r===void 0)t=Z(this,t,e,0),o=!ht(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{let n=t,d,p;for(t=r[0],d=0;d<r.length-1;d++)p=Z(this,n[a+d],e,d),p===A&&(p=this._$AH[d]),o||=!ht(p)||p!==this._$AH[d],p===f?t=f:t!==f&&(t+=(p??"")+r[d+1]),this._$AH[d]=p}o&&!i&&this.W(t)}W(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},At=class extends G{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===f?void 0:t}},Mt=class extends G{constructor(){super(...arguments),this.type=4}W(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},St=class extends G{constructor(t,e,a,i,r){super(t,e,a,i,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??f)===A)return;let a=this._$AH,i=t===f&&a!==f||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==f&&(a===f||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ct=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}},Ia={q:ae,J:L,Z:ie,F:1,G:Ue,K:kt,X:Ie,Y:Z,tt:Rt,st:G,it:Mt,et:St,ht:At,ot:Ct},La=ee.litHtmlPolyfillSupport;La?.(ut,Rt),(ee.litHtmlVersions??=[]).push("3.3.3");var Be=(s,t,e)=>{let a=e?.renderBefore??t,i=a._$litPart$;if(i===void 0){let r=e?.renderBefore??null;a._$litPart$=i=new Rt(t.insertBefore(pt(),r),r,void 0,e??{})}return i._$AI(s),i},oe=globalThis;var Y=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.rt=Be(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return A}};Y._$litElement$=!0,Y.finalized=!0,oe.litElementHydrateSupport?.({LitElement:Y});var Va=oe.litElementPolyfillSupport;Va?.({LitElement:Y});(oe.litElementVersions??=[]).push("4.2.2");var{tt:Ua}=Ia,Ee=s=>s,qa=s=>s===null||typeof s!="object"&&typeof s!="function";var ze=(s,t)=>t===void 0?s?._$litType$!==void 0:s?._$litType$===t,Ba=s=>s?._$litType$?.h!=null;var je=s=>s.strings===void 0,Te=()=>document.createComment(""),j=(s,t,e)=>{let a=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){let r=a.insertBefore(Te(),i),o=a.insertBefore(Te(),i);e=new Ua(r,o,s,s.options)}else{let r=e._$AB.nextSibling,o=e._$AM,n=o!==s;if(n){let d;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(d=s._$AU)!==o._$AU&&e._$AP(d)}if(r!==i||n){let d=e._$AA;for(;d!==r;){let p=Ee(d).nextSibling;Ee(a).insertBefore(d,i),d=p}}}return e},q=(s,t,e=s)=>(s._$AI(t,e),s),ja={},mt=(s,t=ja)=>s._$AH=t,Zt=s=>s._$AH,Jt=s=>{s._$AR(),s._$AA.remove()},Ye=s=>{s._$AR()};var E=s=>(...t)=>({_$litDirective$:s,values:t}),O=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this.nt=t,this._$AM=e,this.ct=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var dt=(s,t)=>{let e=s._$AN;if(e===void 0)return!1;for(let a of e)a._$AO?.(t,!1),dt(a,t);return!0},Dt=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},We=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Ja(t)}};function Ya(s){this._$AN!==void 0?(Dt(this),this._$AM=s,We(this)):this._$AM=s}function Wa(s,t=!1,e=0){let a=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(a))for(let r=e;r<a.length;r++)dt(a[r],!1),Dt(a[r]);else a!=null&&(dt(a,!1),Dt(a));else dt(this,s)}var Ja=s=>{s.type==2&&(s._$AP??=Wa,s._$AQ??=Ya)},ft=class extends O{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),We(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(dt(this,t),Dt(this))}setValue(t){if(je(this.nt))this.nt._$AI(t,this);else{let e=[...this.nt._$AH];e[this.ct]=t,this.nt._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Et=class{constructor(t){this.lt=t}disconnect(){this.lt=void 0}reconnect(t){this.lt=t}deref(){return this.lt}},zt=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(t=>this.dt=t)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var Tt=class extends ft{constructor(){super(...arguments),this.ft=new Et(this),this.vt=new zt}render(t,e){return A}update(t,[e,a]){if(this.isConnected||this.disconnected(),e===this.yt)return A;this.yt=e;let i=0,{ft:r,vt:o}=this;return(async(n,d)=>{for await(let p of n)if(await d(p)===!1)return})(e,async n=>{for(;o.get();)await o.get();let d=r.deref();if(d!==void 0){if(d.yt!==e)return!1;a!==void 0&&(n=a(n,i)),d.commitValue(n,i),i++}return!0}),A}commitValue(t,e){this.setValue(t)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},fi=E(Tt),vi=E(class extends Tt{constructor(s){if(super(s),s.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(s,t){return this.rt=s,super.update(s,t)}commitValue(s,t){t===0&&Ye(this.rt);let e=j(this.rt);q(e,s)}}),He=s=>Ba(s)?s._$litType$.h:s.strings,gi=E(class extends O{constructor(s){super(s),this.bt=new WeakMap}render(s){return[s]}update(s,[t]){let e=ze(this.gt)?He(this.gt):null,a=ze(t)?He(t):null;if(e!==null&&(a===null||e!==a)){let i=Zt(s).pop(),r=this.bt.get(e);if(r===void 0){let o=document.createDocumentFragment();r=Be(f,o),r.setConnected(!1),this.bt.set(e,r)}mt(r,[i]),j(r,void 0,i)}if(a!==null){if(e===null||e!==a){let i=this.bt.get(a);if(i!==void 0){let r=Zt(i).pop();Ye(s),j(s,void 0,r),mt(s,[r])}}this.gt=t}else this.gt=void 0;return this.render(t)}});var xi=E(class extends O{constructor(s){if(super(s),s.type!==1||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.wt===void 0){this.wt=new Set,s.strings!==void 0&&(this._t=new Set(s.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(t)}let e=s.element.classList;for(let a of this.wt)a in t||(e.remove(a),this.wt.delete(a));for(let a in t){let i=!!t[a];i===this.wt.has(a)||this._t?.has(a)||(i?(e.add(a),this.wt.add(a)):(e.remove(a),this.wt.delete(a)))}return A}}),Ka={},bi=E(class extends O{constructor(){super(...arguments),this.St=Ka}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.St)&&this.St.length===t.length&&t.every((a,i)=>a===this.St[i]))return A}else if(this.St===t)return A;return this.St=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var wi=E(class extends O{constructor(){super(...arguments),this.key=f}render(s,t){return this.key=s,t}update(s,[t,e]){return t!==this.key&&(mt(s),this.key=t),e}}),yi=E(class extends O{constructor(s){if(super(s),s.type!==3&&s.type!==1&&s.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!je(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===A||t===f)return t;let e=s.element,a=s.name;if(s.type===3){if(t===e[a])return A}else if(s.type===4){if(!!t===e.hasAttribute(a))return A}else if(s.type===1&&e.getAttribute(a)===t+"")return A;return mt(s),t}});var Kt=new WeakMap,_i=E(class extends ft{render(s){return f}update(s,[t]){let e=t!==this.lt;return e&&this.$t(void 0),(e||this.Tt!==this.xt)&&(this.lt=t,this.Et=s.options?.host,this.$t(this.xt=s.element)),f}$t(s){if(this.lt!==void 0)if(this.isConnected||(s=void 0),typeof this.lt=="function"){let t=this.Et??globalThis,e=Kt.get(t);e===void 0&&(e=new WeakMap,Kt.set(t,e)),e.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),e.set(this.lt,s),s!==void 0&&this.lt.call(this.Et,s)}else this.lt.value=s}get Tt(){return typeof this.lt=="function"?Kt.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),Fe=(s,t,e)=>{let a=new Map;for(let i=t;i<=e;i++)a.set(s[i],i);return a},$i=E(class extends O{constructor(s){if(super(s),s.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(s,t,e){let a;e===void 0?e=t:t!==void 0&&(a=t);let i=[],r=[],o=0;for(let n of s)i[o]=a?a(n,o):o,r[o]=e(n,o),o++;return{values:r,keys:i}}render(s,t,e){return this.Ct(s,t,e).values}update(s,[t,e,a]){let i=Zt(s),{values:r,keys:o}=this.Ct(t,e,a);if(!Array.isArray(i))return this.Pt=o,r;let n=this.Pt??=[],d=[],p,m,l=0,u=i.length-1,h=0,x=r.length-1;for(;l<=u&&h<=x;)if(i[l]===null)l++;else if(i[u]===null)u--;else if(n[l]===o[h])d[h]=q(i[l],r[h]),l++,h++;else if(n[u]===o[x])d[x]=q(i[u],r[x]),u--,x--;else if(n[l]===o[x])d[x]=q(i[l],r[x]),j(s,d[x+1],i[l]),l++,x--;else if(n[u]===o[h])d[h]=q(i[u],r[h]),j(s,i[l],i[u]),u--,h++;else if(p===void 0&&(p=Fe(o,h,x),m=Fe(n,l,u)),p.has(n[l]))if(p.has(n[u])){let b=m.get(o[h]),_=b!==void 0?i[b]:null;if(_===null){let F=j(s,i[l]);q(F,r[h]),d[h]=F}else d[h]=q(_,r[h]),j(s,i[l],_),i[b]=null;h++}else Jt(i[u]),u--;else Jt(i[l]),l++;for(;h<=x;){let b=j(s,d[x+1]);q(b,r[h]),d[h++]=b}for(;l<=u;){let b=i[l++];b!==null&&Jt(b)}return this.Pt=o,mt(s,d),A}}),Je="important",Xa=" !"+Je,ki=E(class extends O{constructor(s){if(super(s),s.type!==1||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let a=s[e];return a==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(s,[t]){let{style:e}=s.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(t)),this.render(t);for(let a of this.Mt)t[a]==null&&(this.Mt.delete(a),a.includes("-")?e.removeProperty(a):e[a]=null);for(let a in t){let i=t[a];if(i!=null){this.Mt.add(a);let r=typeof i=="string"&&i.endsWith(Xa);a.includes("-")||r?e.setProperty(a,r?i.slice(0,-11):i,r?Je:""):e[a]=i}}return A}}),Ai=E(class extends O{constructor(s){if(super(s),s.type!==2)throw Error("templateContent can only be used in child bindings")}render(s){return this.At===s?A:(this.At=s,document.importNode(s.content,!0))}}),rt=class extends O{constructor(t){if(super(t),this.gt=f,t.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this.kt=void 0,this.gt=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.gt)return this.kt;this.gt=t;let e=[t];return e.raw=e,this.kt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};rt.directiveName="unsafeHTML",rt.resultType=1;var Mi=E(rt);var vt=class extends rt{};vt.directiveName="unsafeSVG",vt.resultType=2;var Ke=E(vt),Oe=s=>!qa(s)&&typeof s.then=="function",Re=1073741823;var Gt=class extends ft{constructor(){super(...arguments),this.Ot=Re,this.Ut=[],this.ft=new Et(this),this.vt=new zt}render(...t){return t.find(e=>!Oe(e))??A}update(t,e){let a=this.Ut,i=a.length;this.Ut=e;let r=this.ft,o=this.vt;this.isConnected||this.disconnected();for(let n=0;n<e.length&&!(n>this.Ot);n++){let d=e[n];if(!Oe(d))return this.Ot=n,d;n<i&&d===a[n]||(this.Ot=Re,i=0,Promise.resolve(d).then(async p=>{for(;o.get();)await o.get();let m=r.deref();if(m!==void 0){let l=m.Ut.indexOf(d);l>-1&&l<m.Ot&&(m.Ot=l,m.setValue(p))}}))}return A}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Si=E(Gt);var Za=Symbol.for(""),Ga=s=>{if(s?.r===Za)return s?._$litStatic$};var Ne=new Map,Xe=s=>(t,...e)=>{let a=e.length,i,r,o=[],n=[],d,p=0,m=!1;for(;p<a;){for(d=t[p];p<a&&(r=e[p],(i=Ga(r))!==void 0);)d+=i+t[++p],m=!0;p!==a&&n.push(r),o.push(d),p++}if(p===a&&o.push(t[a]),m){let l=o.join("$$lit$$");(t=Ne.get(l))===void 0&&(o.raw=o,Ne.set(l,t=o)),e=n}return s(t,...e)},Ci=Xe(c),Di=Xe(Ot);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var ne={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>'};var Ze="./fonts/barlow-400.woff2";var Ge="./fonts/barlow-500.woff2";var Qe="./fonts/barlow-600.woff2";var ta="./fonts/barlow-condensed-500.woff2";var ea="./fonts/barlow-condensed-600.woff2";var aa="./fonts/barlow-condensed-700.woff2";var ia='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',sa=`"CR Barlow", ${ia}`,ra=`"CR Barlow Condensed", ${ia}`;function oa(){if(document.getElementById("cronologia-fonts"))return;let s=(e,a,i)=>`@font-face{font-family:"${e}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${i};font-style:normal;font-display:swap}`,t=document.createElement("style");t.id="cronologia-fonts",t.textContent=[s("CR Barlow",Ze,400),s("CR Barlow",Ge,500),s("CR Barlow",Qe,"600 900"),s("CR Barlow Condensed",ta,500),s("CR Barlow Condensed",ea,600),s("CR Barlow Condensed",aa,"700 900")].join(`
`),document.head.appendChild(t)}var na=gt`
  :host {
    --rv-body: ${Ht(sa)};
    --rv-display: ${Ht(ra)};
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
`,la=gt`
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
`;var ca=gt`
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
`;var le=class{constructor(t,e){this.url=t,this.onStatus=e,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.open=!0,this.backoff=1e3;let e=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))t.send(a);if(this.onStatus&&this.onStatus(!0),e)for(let a of this.reconnectHandlers)a()},t.onmessage=e=>{let a;try{a=JSON.parse(e.data)}catch{return}if(a.type==="result"){let i=this.pending.get(a.id);if(!i)return;if(this.pending.delete(a.id),a.success)i.resolve(a.result);else{let r=new Error(a.error&&a.error.message||"Falhou");r.code=a.error&&a.error.code,a.error&&a.error.page&&(r.page=a.error.page),i.reject(r)}}else if(a.type==="event"){let i=this.byId.get(a.id);i&&i.cb(a.event)}},t.onclose=()=>{let e=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let i=new Error("Sem conex\xE3o com o CronologIA");i.code="disconnected",a.reject(i)}this.pending.clear(),e&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(t){this.reconnectHandlers.push(t)}_send(t){let e=JSON.stringify(t);this.open?this.ws.send(e):this.queue.push(e)}sendMessagePromise(t){let e=this.nextId++;return new Promise((a,i)=>{this.pending.set(e,{resolve:a,reject:i}),this._send({...t,id:e})})}subscribeMessage(t,e){let a={cb:t,msg:e,id:null,first:null};this.subs.add(a);let i=new Promise((r,o)=>{a.first={resolve:r,reject:o}});return this.open&&this._startSub(a),i.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(t){let e=this.nextId++;t.id=e,this.byId.set(e,t),this.pending.set(e,{resolve:()=>{t.first&&t.first.resolve(),t.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(e),this.subs.delete(t),t.first&&t.first.reject(a),t.first=null)}}),this.ws.send(JSON.stringify({...t.msg,id:e}))}};function Pt(){try{if(window.parent===window)return null;let s=window.parent.document.querySelector("home-assistant");return s&&s.hass||null}catch{return null}}var da=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function pa(){let s=Pt();return s&&s.themes&&typeof s.themes.darkMode=="boolean"?s.themes.darkMode:!!(da&&da.matches)}function ha(){return{topbar:!(window.parent!==window),haptic(t){try{let e=window.parent;e!==window&&e.dispatchEvent(new e.CustomEvent("haptic",{detail:t}))}catch{}},openInHA(t){try{let e=window.parent;if(e!==window&&e.document){e.history.pushState(null,"",t),e.dispatchEvent(new e.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(t,"_top")}}}var Nt=class{constructor(){let t=new URL("ws",location.href);t.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new le(t.href,e=>this.statusHandlers.forEach(a=>a(e)))}onStatus(t){this.statusHandlers.push(t)}onReconnect(t){this.conn.onReconnect(t)}call(t,e={}){return this.conn.sendMessagePromise({type:t,...e})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(t){return this.conn.subscribeMessage(t,{type:"cronologia/subscribe_calendars"})}subscribePrefs(t){return this.conn.subscribeMessage(t,{type:"cronologia/prefs/subscribe"})}subscribeEvents(t,e,a,i){return this.conn.subscribeMessage(i,{type:"calendar/event/subscribe",entity_id:t,start:e,end:a})}listEvents(t,e,a){return this.call("cronologia/events/list",{entity_id:t,start:e,end:a})}createEvent(t,e){return this.call("calendar/event/create",{entity_id:t,event:e})}updateEvent(t,e,a,{recurrenceId:i,range:r}={}){let o={entity_id:t,uid:e,event:a};return i&&(o.recurrence_id=i),r&&(o.recurrence_range=r),this.call("calendar/event/update",o)}deleteEvent(t,e,{recurrenceId:a,range:i}={}){let r={entity_id:t,uid:e};return a&&(r.recurrence_id=a),i&&(r.recurrence_range=i),this.call("calendar/event/delete",r)}setCalendarPrefs(t,e){return this.call("cronologia/prefs/set_calendar",{entity_id:t,prefs:e})}setAppPrefs(t){return this.call("cronologia/prefs/set_app",{prefs:t})}aiStatus(){return this.call("cronologia/ai/status")}exportUrl({calendars:t,start:e,end:a}){let i=new URL("api/export/ics",location.href);return i.searchParams.set("calendars",t.join(",")),i.searchParams.set("start",e),i.searchParams.set("end",a),i.href}async extract(t){let e=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),a=await e.json().catch(()=>({}));if(!e.ok){let i=new Error(a.error||`Erro ${e.status}`);throw i.code=a.code,i}return a}};var It=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],ua=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],Q=s=>It.find(t=>t.id===s),ma=s=>Q(ua[s%ua.length]);function xt(s,t){let e=s.replace("#",""),a=parseInt(e.length===3?e.replace(/./g,i=>i+i):e,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${t})`}function z(s,t,e="c"){return`--${e}:${s.fill};--${e}i:${t?s.fill:s.ink};--${e}s:${xt(s.fill,t?.18:.15)};`}var ce=s=>(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var T=(s,t,e)=>`${s} ${s===1?t:e}`,H=(s,t=38)=>s&&s.length>t?s.slice(0,t-1).trimEnd()+"\u2026":s||"",P=s=>s&&s.charAt(0).toUpperCase()+s.slice(1);function fa(s){let t=[],e=/https?:\/\/[^\s<>"')]+/g,a=0,i;for(;i=e.exec(s||"");)i.index>a&&t.push({text:s.slice(a,i.index)}),t.push({url:i[0]}),a=i.index+i[0].length;return a<(s||"").length&&t.push({text:s.slice(a)}),t}var va=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],Lt=["dom","seg","ter","qua","qui","sex","s\xE1b"],tt=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],ga=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],ot=s=>String(s).padStart(2,"0"),C=s=>`${s.getFullYear()}-${ot(s.getMonth()+1)}-${ot(s.getDate())}`,M=s=>`${ot(s.getHours())}:${ot(s.getMinutes())}`,R=s=>{let[t,e,a]=s.split("-").map(Number);return new Date(t,e-1,a)},$=s=>new Date(s.getFullYear(),s.getMonth(),s.getDate()),w=(s,t)=>{let e=new Date(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds());return e.setDate(e.getDate()+t),e},W=(s,t)=>new Date(s.getFullYear(),s.getMonth()+t,1),S=(s,t)=>s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate(),V=(s,t)=>Math.round(($(s)-$(t))/864e5),bt=(s,t=0)=>w($(s),-((s.getDay()-t+7)%7)),de=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)?R(s):new Date(s);function I(s){let t=-s.getTimezoneOffset(),e=t>=0?"+":"-";return`${C(s)}T${M(s)}:00${e}${ot(Math.floor(Math.abs(t)/60))}:${ot(Math.abs(t)%60)}`}function N(s,t=new Date,{long:e=!0,cap:a=!0}={}){let i=V(s,t),r;return i===0?r="hoje":i===1?r="amanh\xE3":i===-1?r="ontem":(r=`${va[s.getDay()]}, ${s.getDate()} de ${e?tt[s.getMonth()]:ga[s.getMonth()]}`,s.getFullYear()!==t.getFullYear()&&(r+=` de ${s.getFullYear()}`)),a?P(r):r}var xa=s=>`${va[s.getDay()]}, ${s.getDate()} de ${tt[s.getMonth()]}`,et=(s,t=new Date)=>`${s.getDate()} ${ga[s.getMonth()]}${s.getFullYear()!==t.getFullYear()?` ${s.getFullYear()}`:""}`;function Vt(s){let t=Math.round(s/6e4);if(t<1)return"agora";if(t<60)return`em ${t} min`;let e=Math.floor(t/60),a=t%60;if(e<24)return a&&e<4?`em ${e} h ${a} min`:`em ${e} h`;let i=Math.round(e/24);return`em ${T(i,"dia","dias")}`}function pe(s){let t=Math.round(s/6e4);if(t<60)return`${t} min`;let e=Math.floor(t/60),a=t%60;return a?`${e} h ${a} min`:`${e} h`}var Ut=[{id:"",label:"N\xE3o repete"},{id:"DAILY",label:"Todo dia"},{id:"WEEKLY",label:"Toda semana"},{id:"MONTHLY",label:"Todo m\xEAs"},{id:"YEARLY",label:"Todo ano"}];function nt(s){if(!s)return"";let t=Object.fromEntries(s.replace(/^RRULE:/,"").split(";").map(r=>r.split("="))),e=Number(t.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[t.FREQ];if(!a)return"Repete";let i=e>1?`A cada ${e} ${a[1]}`:a[0];if(t.BYDAY&&t.FREQ==="WEEKLY"){let r={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};i+=` (${t.BYDAY.split(",").map(o=>r[o]||o).join(", ")})`}if(t.COUNT)i+=`, ${T(Number(t.COUNT),"vez","vezes")}`;else if(t.UNTIL){let r=/^(\d{4})(\d{2})(\d{2})/.exec(t.UNTIL);r&&(i+=` at\xE9 ${Number(r[3])}/${Number(r[2])}/${r[1]}`)}return i}var wt=s=>{let t=/FREQ=(\w+)/.exec(s||"");return t?t[1]:""};async function he(s,t=1800){let e=a=>new Promise((i,r)=>{let o=new FileReader;o.onload=()=>i(String(o.result).split(",")[1]||""),o.onerror=()=>r(o.error),o.readAsDataURL(a)});try{let a=await createImageBitmap(s,{imageOrientation:"from-image"}),i=Math.min(1,t/Math.max(a.width,a.height)),r=document.createElement("canvas");r.width=Math.round(a.width*i),r.height=Math.round(a.height*i),r.getContext("2d").drawImage(a,0,0,r.width,r.height),a.close&&a.close();let o=await new Promise(n=>r.toBlob(n,"image/jpeg",.86));return{mime:"image/jpeg",data:await e(o),url:URL.createObjectURL(o)}}catch{return{mime:s.type||"image/jpeg",data:await e(s),url:URL.createObjectURL(s)}}}var ba=4,ri=300*1e3;function wa(s,t){let e=de(t.start),a=de(t.end),i=t.all_day!=null?!!t.all_day:/^\d{4}-\d{2}-\d{2}$/.test(t.start);return{key:`${s}|${t.uid||t.summary}|${t.recurrence_id||t.start}`,cal:s,uid:t.uid||null,rid:t.recurrence_id||null,rrule:t.rrule||null,summary:t.summary||"(sem t\xEDtulo)",description:t.description||"",location:t.location||"",allDay:i,start:e,end:a>e?a:w(e,i?1:0),raw:t}}var qt=class{constructor(t,e){this.api=t,this.onChange=e,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(t){let e=[...new Set(t)].sort();if(e.join()!==this.calendars.join()){this.calendars=e;for(let a of this.windows)this._syncWindow(a)}}ensure(t,e){let a=this._covering(t,e);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(r=>r.loaded);let i={start:w($(t),-7),end:w($(e),8),cals:new Map,used:Date.now()};return this.windows.push(i),this._syncWindow(i),this._gc(),!1}query(t,e,a=this.calendars){let i=this._covering(t,e),r=[];if(!i)return r;for(let o of a){let n=i.cals.get(o);if(n)for(let d of n.events)d.start<e&&d.end>t&&r.push(d)}return r.sort((o,n)=>o.start-n.start||Number(n.allDay)-Number(o.allDay)||o.summary.localeCompare(n.summary,"pt-BR"))}loading(t,e){let a=this._covering(t,e);return!a||[...a.cals.values()].some(i=>!i.loaded)}errors(){let t=new Map;for(let e of this.windows)for(let[a,i]of e.cals)i.error&&t.set(a,i.error);return t}refresh(t){for(let e of this.windows){let a=e.cals.get(t);a&&a.poll&&this._fetch(e,t,a)}}reloadAll(){for(let t of this.windows)for(let[e,a]of t.cals)a.poll&&this._fetch(t,e,a)}dispose(){for(let t of this.windows)for(let[e]of t.cals)this._drop(t,e);this.windows=[]}_covering(t,e){let a=null;for(let i of this.windows)i.start<=t&&i.end>=e&&(!a||i.end-i.start<a.end-a.start)&&(a=i);return a}_changed(){this.version++,this.onChange()}_syncWindow(t){for(let e of this.calendars)t.cals.has(e)||this._add(t,e);for(let e of[...t.cals.keys()])this.calendars.includes(e)||this._drop(t,e)}_add(t,e){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};t.cals.set(e,a);let i=I(t.start),r=I(t.end);if(this.noSubscribe)return this._startPolling(t,e,a);a.unsub=this.api.subscribeEvents(e,i,r,o=>{t.cals.has(e)&&(o&&Array.isArray(o.events)?(a.events=o.events.map(n=>wa(e,n)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(o=>o&&o.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(t,e,a)):(a.loaded=!0,a.error=o&&o.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(t,e,a){return this._fetch(t,e,a),a.poll=setInterval(()=>this._fetch(t,e,a),ri),null}async _fetch(t,e,a){try{let i=await this.api.listEvents(e,I(t.start),I(t.end));if(!t.cals.has(e))return;a.events=(i.events||[]).map(r=>wa(e,r)),a.error=null}catch(i){a.error=i.message}a.loaded=!0,this._changed()}_drop(t,e){let a=t.cals.get(e);a&&(t.cals.delete(e),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(i=>typeof i=="function"&&i()).catch(()=>{}))}_gc(){if(!(this.windows.length<=ba)){this.windows.sort((t,e)=>e.used-t.used);for(let t of this.windows.splice(ba))for(let[e]of t.cals)this._drop(t,e)}}};function at(s,t){let e=$(t),a=w(e,1);return s.filter(i=>i.start<a&&i.end>e)}function ya(s,t){let e=$(t).getTime(),a=e+864e5,i=s.filter(p=>!p.allDay).map(p=>({e:p,s:Math.max(p.start.getTime(),e),t:Math.min(Math.max(p.end.getTime(),p.start.getTime()+15*6e4),a)})).sort((p,m)=>p.s-m.s||m.t-p.t),r=[],o=[],n=-1,d=()=>{let p=[];for(let m of o){let l=p.findIndex(u=>u<=m.s);l<0?(l=p.length,p.push(m.t)):p[l]=m.t,m.lane=l}for(let m of o)r.push({...m,lanes:p.length});o=[]};for(let p of i)o.length&&p.s>=n&&d(),o.push(p),n=Math.max(n,p.t);return o.length&&d(),r.map(p=>({event:p.e,top:(p.s-e)/36e5,height:(p.t-p.s)/36e5,lane:p.lane,lanes:p.lanes}))}var ue=s=>s.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function oi(s){return s.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function ni(s){let t=s.indexOf(":");if(t<0)return null;let e=s.slice(0,t),a=s.slice(t+1),[i,...r]=e.split(";"),o={};for(let n of r){let[d,p]=n.split("=");d&&(o[d.toUpperCase()]=(p||"").replace(/^"|"$/g,""))}return{name:i.toUpperCase(),params:o,value:a}}function _a(s,t){try{let e=new Intl.DateTimeFormat("en-US",{timeZone:s,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(e.formatToParts(new Date(t)).map(r=>[r.type,r.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-t}catch{return null}}function $a(s){let t=s.value.trim(),e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(t);if(!e)return null;let[,a,i,r,o,n,d,p]=e;if(o==null||s.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+i-1,+r)};if(p)return{allDay:!1,date:new Date(Date.UTC(+a,+i-1,+r,+o,+n,+(d||0)))};let m=s.params.TZID;if(m){let l=Date.UTC(+a,+i-1,+r,+o,+n,+(d||0)),u=_a(m,l);if(u!=null){let h=l-u,x=_a(m,h);return{allDay:!1,date:new Date(l-(x??u))}}}return{allDay:!1,date:new Date(+a,+i-1,+r,+o,+n,+(d||0))}}function li(s){let t=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(s.trim());if(!t)return null;let[,e,a,i,r,o,n]=t,d=((+a||0)*7*86400+(+i||0)*86400+(+r||0)*3600+(+o||0)*60+(+n||0))*1e3;return e==="-"?-d:d}function ka(s){let t=[],e=null,a=0;for(let r of oi(s)){if(/^BEGIN:VEVENT/i.test(r)){e={},a=0;continue}if(!e)continue;if(/^BEGIN:/i.test(r)){a++;continue}if(/^END:VEVENT/i.test(r)){t.push(e),e=null;continue}if(/^END:/i.test(r)){a--;continue}if(a>0)continue;let o=ni(r);o&&(o.name==="SUMMARY"?e.summary=ue(o.value):o.name==="DESCRIPTION"?e.description=ue(o.value):o.name==="LOCATION"?e.location=ue(o.value):o.name==="DTSTART"?e.dtstart=$a(o):o.name==="DTEND"?e.dtend=$a(o):o.name==="DURATION"?e.duration=li(o.value):o.name==="RRULE"?e.rrule=o.value.trim():o.name==="STATUS"?e.status=o.value.trim().toUpperCase():o.name==="RECURRENCE-ID"&&(e.recurrence=!0))}let i=[];for(let r of t){if(!r.dtstart||r.status==="CANCELLED"||r.recurrence)continue;let o=r.dtstart.date,n=r.dtend?r.dtend.date:r.duration!=null?new Date(o.getTime()+r.duration):null,d=r.dtstart.allDay,p={title:(r.summary||"").trim()||"Evento",date:C(o),start:d?"":M(o),end:"",end_date:"",location:(r.location||"").trim(),notes:(r.description||"").trim().slice(0,4e3),repeat:"",rrule:r.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(r.rrule)?r.rrule:""};if(d){if(n){let m=new Date(n.getFullYear(),n.getMonth(),n.getDate()-1);m>o&&(p.end_date=C(m))}}else n&&n>o&&(p.end=M(n),C(n)!==C(o)&&(p.end_date=C(n)));i.push(p)}return i}var Aa="cronologia.theme",Ma="cronologia.mode",me={CREATE:1,DELETE:2,UPDATE:4},fe=(s,t)=>(Number(s)&t)===t,it=48,ci={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},di=s=>ci[s]||{label:s?P(s.replace(/_/g," ")):"Outros",icon:"calendar"},v=(s,t="")=>c`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ke(ne[s]||ne.calendar)}</svg>`,Bt={get(s,t){try{let e=localStorage.getItem(s);return e==null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}},ve=(s,t,e,a,i)=>Ot`<line class=${i} x1=${s} y1=${t} x2=${e} y2=${a}></line>`,Sa=(s,t)=>Ot`<path class=${t} d=${s}></path>`,pi=s=>s.allDay?"Dia todo":`${M(s.start)} \u2013 ${M(s.end)}`,hi=s=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`,ge=class extends Y{static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0}};static styles=[na,la,ca];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=Bt.get(Aa,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=$(new Date),this._mode=Bt.get(Ma,"mes"),this._query="",this._cam=null,this._ver=0,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),oa(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(t){t.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(t){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let e=this.renderRoot.querySelector(".tgrid-scroll");if(e){this._scrollWeek=!1;let a=new Date,i=this._view().name==="calendar"&&S(this._cursor,a)?Math.max(0,a.getHours()-1):7;e.scrollTop=i*it}}t.has("_path")&&this._view().name==="more"&&this._refreshAi(!1)}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let t=this._theme==="dark"?!0:this._theme==="light"?!1:pa();t!==this._dark&&(this._dark=t)}_setTheme(t){this._theme=t,Bt.set(Aa,t),this._syncDark()}async _start(){this._started=!0,this._store=new qt(this.api,()=>this._ver++),this.api.onStatus(t=>this._online=t),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(t=>this._onCalendar(t)).catch(()=>{}),this.api.subscribePrefs(t=>this._setPrefs(t)).catch(()=>{})}async _boot(t){try{let e=await this.api.bootstrap();this._version=e.version||"",this._user=e.user||{name:""},this._ai=e.ai||this._ai,this._aiAt=Date.now(),this._states=e.states||{},this._entities=e.entities||{},this._devices=e.devices||{},this._prefs=e.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),t&&this._store.reloadAll()}catch(e){this._ready||(this._bootError=e.message||String(e)),t||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(t){let e={...this._states},a=t.entity_id in e;t.new_state?e[t.entity_id]=t.new_state:delete e[t.entity_id],this._states=e,(!a||!t.new_state)&&this.api.registry().then(i=>{this._entities=i.entities||{},this._devices=i.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(t){t&&(this._prefs={calendars:t.calendars||{},app:t.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(t=>!t.hidden).map(t=>t.id))}_app(t,e){let a=this._prefs.app?this._prefs.app[t]:void 0;return a===void 0?e:a}_accent(){return Q(this._app("accent","turquesa"))||Q("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let t=Object.keys(this._states).map(a=>{let i=this._states[a],r=this._entities[a]||{},o=r.device_id?this._devices[r.device_id]:null,n=di(r.platform),d=i.attributes&&i.attributes.friendly_name||a;return{id:a,st:i,reg:r,dev:o,plat:n,orig:d}});t.sort((a,i)=>a.plat.label.localeCompare(i.plat.label,"pt-BR")||a.orig.localeCompare(i.orig,"pt-BR"));let e=t.map(({id:a,st:i,reg:r,dev:o,plat:n,orig:d},p)=>{let m=(this._prefs.calendars||{})[a]||{},l=Number(i.attributes&&i.attributes.supported_features)||0;return{id:a,name:m.name||d,origName:d,group:n.label,icon:n.icon,device:o?o.name_by_user||o.name:null,color:Q(m.color)||ma(p),colorId:m.color||null,hidden:!!m.hidden,features:l,canCreate:fe(l,me.CREATE),canUpdate:fe(l,me.UPDATE),canDelete:fe(l,me.DELETE),unavailable:i.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:e},e}_cal(t){return this._cals().find(e=>e.id===t)}_visible(){return this._cals().filter(t=>!t.hidden)}_writable(){return this._cals().filter(t=>t.canCreate&&!t.unavailable)}_defaultCal(){let t=this._writable(),e=this._app("default_calendar",null);return(t.find(a=>a.id===e)||t.find(a=>!a.hidden)||t[0]||{}).id||null}_events(t,e){return this._store.ensure(t,e),this._store.query(t,e)}async _saveCalPrefs(t,e){try{this._setPrefs(await this.api.setCalendarPrefs(t,e))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(t){try{this._setPrefs(await this.api.setAppPrefs(t))}catch(e){this._showToast(`N\xE3o consegui salvar: ${e.message}`)}}_view(){let t=(this._path||"").replace(/\/+$/,"");return t==="/calendario"?{name:"calendar"}:t==="/agendas"?{name:"calendars"}:t==="/mais"?{name:"more"}:{name:"now"}}async _go(t,e=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(e?0:1);e?history.replaceState({rvDepth:a,rvPath:t},""):history.pushState({rvDepth:a,rvPath:t},""),this._path=t,t==="/calendario"&&(this._scrollWeek=!0);let i=this.renderRoot&&this.renderRoot.querySelector("main");i&&i.scrollTo({top:0,behavior:"instant"})}_goTab(t){let e=this._view().name;if(t===""){if(e==="now"){let i=this.renderRoot.querySelector("main");i&&i.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(t==="/calendario"&&e==="calendar"){this._cursor=$(new Date),this._scrollWeek=!0;return}this._go(t,e!=="now")}_openDay(t,e){this._cursor=$(t),e&&this._setMode(e),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(t){this._mode=t,Bt.set(Ma,t),this._scrollWeek=!0}_popEntry(t){if(!(history.state&&history.state[t]))return Promise.resolve();let e=new Promise(a=>{let i=()=>{clearTimeout(r),this._popWaiters=(this._popWaiters||[]).filter(o=>o!==i),this._popping===e&&(this._popping=null),a()},r=setTimeout(i,600);this._popWaiters=[...this._popWaiters||[],i]});return this._popping=e,history.back(),e}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let t=history.state&&history.state.rvPath||"";t!==this._path&&(this._path=t);for(let e of[...this._popWaiters||[]])e()}async _openSheet(t,e=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=t,this._form=e,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(t){this._form={...this._form,...t}}_openInHA(t){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(t)}_haptic(t){this.env&&this.env.haptic&&this.env.haptic(t)}_showToast(t,e=null){clearTimeout(this._toastTimer),this._toast={text:t,action:e,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,e?5e3:2800)}_userName(){let t=Pt();return(this._user&&this._user.name||t&&t.user&&t.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let t=Pt();return t&&t.user?!!t.user.is_admin:!0}_openEvent(t){this._openSheet("event",{ev:t})}_openForm({ev:t=null,date:e=null,hour:a=null,cal:i=null,copy:r=!1}={}){if(!this._writable().length&&!(t&&!r)){this._openSheet("nocal",{});return}let n;if(t){let d=t.allDay?w(t.end,-1):t.end;n={mode:r?"add":"edit",cal:r?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._defaultCal():t.cal,origCal:t.cal,uid:t.uid,rid:r?null:t.rid,title:t.summary,allDay:t.allDay,date:C(t.start),endDate:t.allDay?V(d,t.start)>0?C(d):"":S(t.start,t.end)?"":C(t.end),start:t.allDay?"09:00":M(t.start),end:t.allDay?"10:00":M(t.end),repeat:wt(t.rrule),rrule:t.rrule||"",location:t.location,notes:t.description}}else{let d=e?$(e):$(new Date),p=new Date,m=a??(S(d,p)?Math.min(23,p.getHours()+1):9),l=u=>String(u).padStart(2,"0");n={mode:"add",cal:i&&this._cal(i)&&this._cal(i).canCreate?i:this._defaultCal(),title:"",allDay:!1,date:C(d),endDate:"",start:`${l(m)}:00`,end:`${l(Math.min(23,m+1))}:${m+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}this._openSheet("form",n),n.mode==="add"&&!n.title&&this.updateComplete.then(()=>{let d=this.renderRoot.querySelector(".sheet .ev-title-input");d&&d.focus()})}_eventFromForm(t,{keepRrule:e=!0}={}){let a=(t.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(t.date||""))throw new Error("Escolha a data");let i={summary:a};if(t.allDay){let r=t.endDate&&t.endDate>t.date?t.endDate:t.date;i.start=t.date,i.end=C(w(R(r),1))}else{let[r,o]=(t.start||"09:00").split(":").map(Number),[n,d]=(t.end||t.start||"10:00").split(":").map(Number),p=R(t.date),m=new Date(p.getFullYear(),p.getMonth(),p.getDate(),r,o),l=t.endDate&&t.endDate>t.date?R(t.endDate):p,u=new Date(l.getFullYear(),l.getMonth(),l.getDate(),n,d);u<=m&&(u=w(u,1)),u-m<6e4&&(u=new Date(m.getTime()+30*6e4)),i.start=I(m),i.end=I(u)}if((t.location||"").trim()&&(i.location=t.location.trim()),(t.notes||"").trim()&&(i.description=t.notes.trim()),e){let r=t.rrule&&wt(t.rrule)===t.repeat?t.rrule:t.repeat?`FREQ=${t.repeat}`:"";r&&(i.rrule=r)}return i}async _saveForm(){let t=this._form,e;try{e=this._eventFromForm(t)}catch(i){this._showToast(i.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:e});return}this._setForm({saving:!0});try{t.mode==="add"?(await this.api.createEvent(t.cal,e),this._done(`Evento criado em ${H(a.name,24)}`,t.cal,e.start)):t.cal!==t.origCal?(await this.api.createEvent(t.cal,e),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`Evento movido para ${H(a.name,24)}`,t.cal,e.start)):(await this.api.updateEvent(t.cal,t.uid,e),this._done("Evento salvo",t.cal,e.start))}catch(i){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${i.message}`)}}_done(t,e,a){this._haptic("success"),this._closeSheet(),this._store.refresh(e);let i=a?$(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?R(a):a)):null;this._showToast(t,i&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(i)}:null)}async _applyScope(t){let e=this._form,a={recurrenceId:e.rid,range:t==="future"?"THISANDFUTURE":void 0};try{if(e.action==="edit"){let i=e.event;t==="one"&&(i=this._eventFromForm(e,{keepRrule:!1})),await this.api.updateEvent(e.cal,e.uid,i,a),this._done(t==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",e.cal,i.start)}else await this.api.deleteEvent(e.cal,e.uid,t==="all"?{}:a),this._done(t==="all"?"A s\xE9rie toda foi apagada":t==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",e.cal)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}}_askDelete(t){if(t.rid){this._openSheet("scope",{action:"delete",cal:t.cal,uid:t.uid,rid:t.rid,title:t.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${H(t.summary,28)}\u201D?`,text:`${P(N(t.start,new Date(this._now)))} \xB7 ${pi(t)}. Ele sai do calend\xE1rio ${H((this._cal(t.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(t.cal,t.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(t.cal);let e={summary:t.summary,start:t.raw.start,end:t.raw.end};t.location&&(e.location=t.location),t.description&&(e.description=t.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(t.cal,e).then(()=>this._store.refresh(t.cal)).catch(a=>this._showToast(a.message))})}catch(e){this._showToast(`N\xE3o consegui apagar: ${e.message}`)}}})}_openImport(t="pick",e={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let i=this._openSheet("import",{target:a,step:t==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...e});return t==="photos"&&this._pickFiles("photos"),t==="scan"&&this._openCamera(),t==="text"&&this._focusSheetText(),t==="ics"&&this._pickFiles("ics"),i}_focusSheetText(){this.updateComplete.then(()=>{let t=this.renderRoot.querySelector(".sheet textarea");t&&t.focus()})}_pickFiles(t){let e=this.renderRoot.querySelector(t==="scan"?"#cr-scan":t==="ics"?"#cr-ics":"#cr-photos");e&&(e.value="",e.click())}_releaseImages(){let t=this._form;if(t&&t.images)for(let e of t.images)e.url&&URL.revokeObjectURL(e.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(t){let e=[...t.target.files||[]].filter(r=>!r.type||r.type.startsWith("image/")).slice(0,6);if(t.target.value="",!e.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let i=[];for(let r of e)i.push(await he(r));this._readImages(i,a)}async _onIcsFile(t){let e=t.target.files&&t.target.files[0];if(t.target.value="",!e)return;let a;try{a=ka(await e.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(i=>({...i,on:!0})),provider:"ics",fileName:e.name,note:null,error:null})}_readImages(t,e){if(this._sheet!=="import"||!t.length)return;let a=e?[...this._form.images||[],...t]:(this._releaseImages(),t);this._setForm({step:"loading",images:a,prevStep:e?"review":"pick",loadingText:t.length>1?`Lendo ${t.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:t,appending:e})}async _runExtract({text:t,images:e,appending:a=!1}){let i=this._importToken=Date.now(),r=()=>i===this._importToken&&this._sheet==="import",o=a?this._form.items||[]:[];try{let n=await this.api.extract({text:t,images:e?e.map(({data:p,mime:m})=>({data:p,mime:m})):void 0});if(!r())return;let d=n.events||[];if(!d.length){let p=t?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:p}):this._setForm({step:t?"text":"pick",error:p});return}this._haptic("success"),this._setForm({step:"review",items:[...o,...d.map(p=>({...p,on:!0}))],provider:n.provider||null,note:null,error:null})}catch(n){if(!r())return;a?this._setForm({step:"review",note:n.message||"Algo deu errado"}):this._setForm({step:t?"text":"pick",error:n.message||"Algo deu errado"})}}_readText(){let t=(this._form.text||"").trim();if(!t)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:t})}async _pasteClipboard(){try{let t=await navigator.clipboard.readText();if(!t)throw new Error("empty");this._setForm({text:t,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(t,e){let a=this._form.items.slice();a[t]={...a[t],...e},this._setForm({items:a})}_itemEvent(t){let e=i=>{let[r,o]=i.split(":").map(Number),n=Math.min(1439,r*60+o+60);return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[t.repeat]||"";return this._eventFromForm({title:t.title,date:t.date,endDate:t.end_date||"",allDay:!t.start,start:t.start,end:t.end||(t.start?e(t.start):""),repeat:t.rrule?wt(t.rrule):a,rrule:t.rrule||"",location:t.location,notes:t.notes})}async _importAdd(){let t=this._form,e=t.items.filter(o=>o.on&&(o.title||"").trim()),a=this._cal(t.target);if(!e.length||!a)return;this._setForm({adding:!0});let i=0,r=null;for(let o of e)try{let n=this._itemEvent(o);await this.api.createEvent(t.target,n),i++,(!r||n.start<r)&&(r=n.start)}catch(n){this._showToast(`\u201C${H(o.title,24)}\u201D: ${n.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),i&&this._done(`${T(i,"evento adicionado","eventos adicionados")} em ${H(a.name,20)}`,t.target,r)}async _openCamera(){let t=navigator.mediaDevices;if(!t||!t.getUserMedia){this._pickFiles("scan");return}let e=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:e,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(n=>n.stop());return}this._stream=a;let i=a.getVideoTracks()[0],r=i&&i.getCapabilities?i.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!r.torch},await this.updateComplete;let o=this.renderRoot.querySelector(".cam video");o&&(o.srcObject=a,o.play().catch(()=>{}))}catch(a){if(!this._cam)return;let i=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:i?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(t=>t.stop()),this._stream=null}_closeCamera(t=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let e of this._cam.shots||[])URL.revokeObjectURL(e.url);this._cam=null,t||this._popEntry("rvCam")}}async _toggleTorch(){let t=this._stream&&this._stream.getVideoTracks()[0];if(!t)return;let e=!this._cam.torch;try{await t.applyConstraints({advanced:[{torch:e}]}),this._cam={...this._cam,torch:e}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let t=this.renderRoot.querySelector(".cam video");if(!t||!t.videoWidth||!this._cam||this._cam.shots.length>=6)return;let e=1800,a=Math.min(1,e/Math.max(t.videoWidth,t.videoHeight)),i=document.createElement("canvas");i.width=Math.round(t.videoWidth*a),i.height=Math.round(t.videoHeight*a),i.getContext("2d").drawImage(t,0,0,i.width,i.height);let r=await new Promise(n=>i.toBlob(n,"image/jpeg",.86));if(!r||!this._cam)return;let o=await he(r,e);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,o],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let t=this._cam.shots,e=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(t,e&&this._form.step==="review")}_cameraFallback(){let t=this._cam&&this._cam.appending;this._closeCamera(),t&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(t=!0){if(!(!t&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(e){this._ai={...this._ai,ready:!1,images:!1,reason:e.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(t){await this._saveAppPrefs({ai_entity:t||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#leitura-ia");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(t=>t.id),range:"12m"})}_exportRange(t){let e=$(new Date);return t==="3m"?[e,W(e,3)]:t==="year"?[W(e,-12),W(e,12)]:[e,W(e,12)]}render(){if(!this._ready)return c`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?c`${v("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:c`<span class="spin">${v("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let t=this._view(),e=this._accent(),a=this._dark,i=`--rv-accent:${e.fill};--rv-accent-ink:${a?e.fill:e.ink};--rv-accent-soft:${xt(e.fill,a?.18:.14)};--rv-accent-faint:${xt(e.fill,a?.08:.07)};--rv-accent-ink-light:${e.ink};`,r;return t.name==="calendar"?r=this._renderCalendar():t.name==="calendars"?r=this._renderCalendars():t.name==="more"?r=this._renderMore():r=this._renderNow(),c`
      <div class="root" style=${i}>
        <div class="app">
          ${!this.env||this.env.topbar?c`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:f}
          ${this._online?f:c`<div class="offline">${v("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${r}</main>
          ${this._renderNav(t)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${o=>this._onIcsFile(o)} />
      </div>
    `}_renderNav(t){let e=(a,i,r,o)=>c`<button class="tab ${t.name===a?"on":""}" @click=${()=>this._goTab(i)} aria-label=${r}>${v(o)}<span>${r}</span></button>`;return c`<nav>
      <div class="tabs">
        ${e("now","","Agora","clock-3")} ${e("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:t.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${v("plus")}</span><span>Novo</span>
        </button>
        ${e("calendars","/agendas","Agendas","layers")} ${e("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(t,e,a=f){let i=this._userName(),r=this._online?e:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return c`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${i?` \xB7 Ol\xE1, ${i}`:""}</p>
      <h1 class="page-title">${t}</h1>
      ${r?c`<p class="status"><span class="dot ${r.tone||""}" aria-hidden="true"></span><span>${r.text}</span></p>`:f}
      ${a}
    </header>`}_colorOfEvent(t){let e=this._cal(t.cal);return e&&e.color||this._accent()}_renderRow(t,e,{showCal:a=!0}={}){let i=this._now,r=t.end.getTime()<=i,o=t.start.getTime()<=i&&t.end.getTime()>i&&!t.allDay,n=this._cal(t.cal),d;if(t.allDay){let m=V(t.end,t.start);d=c`<b>Dia</b><small>${m>1?`${V(e,t.start)+1}/${m}`:"todo"}</small>`}else{let m=S(t.start,e),l=S(t.end,e)||t.end.getHours()===0&&t.end.getMinutes()===0&&V(t.end,e)===1;d=c`<b>${m?M(t.start):"\u2026"}</b><small>${l?M(t.end):"segue"}</small>`}let p=[t.location,a&&n?n.name:""].filter(Boolean).join(" \xB7 ");return c`<button class="ev-row ${r?"past":""} ${o?"live":""}" style=${z(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="ev-time">${d}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${t.summary}</span>${p?c`<span class="ev-sub">${p}</span>`:f}</span>
      ${t.rrule?c`<span class="ev-rep" title=${nt(t.rrule)}>${v("repeat")}</span>`:f}
    </button>`}_renderNow(){let t=new Date(this._now),e=$(t),a=this._events(w(e,-1),w(e,9)),i=this._store.loading(w(e,-1),w(e,9)),r=at(a,e),o=g=>g.end-g.start>=12*36e5,n=r.filter(g=>g.allDay||o(g)),d=r.filter(g=>!g.allDay&&!o(g)),p=d.filter(g=>g.start<=t&&g.end>t).sort((g,y)=>y.start-g.start),l=a.filter(g=>!g.allDay&&g.start>t&&!o(g)).sort((g,y)=>g.start-y.start)[0],u=this._visible();if(!this._cals().length)return this._renderNoCalendars();let h=d.filter(g=>g.end>t).length,x={text:`${P(xa(t))} \xB7 ${r.length?`${T(r.length,"evento","eventos")} hoje`:"nada hoje"}${h&&h<d.length?` \xB7 ${h} pela frente`:""}`},b;if(p.length){let g=p[0],y=this._cal(g.cal);b=this._ticket(g,{label:"Agora",pill:`termina ${Vt(g.end-t)}`,when:c`<b>${M(g.start)}</b> – <b>${M(g.end)}</b> · ${pe(g.end-g.start)}`,stub:l?c`<span class="tk-next">Depois <b>${M(l.start)}</b> ${l.summary}</span>`:c`<span class="dot"></span><span>${[y&&y.name,g.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t,live:!0})}else if(l){let g=this._cal(l.cal);b=this._ticket(l,{label:"A seguir",pill:Vt(l.start-t),when:c`<b>${M(l.start)}</b> – ${M(l.end)} · ${S(l.start,t)?"hoje":N(l.start,t,{long:!1,cap:!1})}`,stub:c`<span class="dot"></span><span>${[g&&g.name,l.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t})}else i||(b=c`<div class="hero-ev ticket empty" style=${z(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,t)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let _=this._showAllDay||n.length<=3?n:n.slice(0,2),F=[];for(let g=1;g<=7;g++){let y=w(e,g),D=at(a,y).filter(st=>!(st.allDay&&st.start<y));D.length&&F.push({d:y,list:D})}let U=c`<div class="now-line"><span>${M(t)}</span></div>`,k=!1;return c`<section class="page">
      ${this._renderHead("Hoje",x)}
      ${u.length?f:c`<div class="hint-card">${v("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/agendas")}>Mostrar</button></div>`}
      ${b||f}
      ${n.length?c`<div class="allday">
            ${_.map(g=>c`<button class="ad-chip" style=${z(this._colorOfEvent(g),this._dark)} @click=${()=>this._openEvent(g)}><span class="dot"></span><span>${g.summary}</span></button>`)}
            ${n.length>_.length?c`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${n.length-_.length} o dia todo</button>`:f}
          </div>`:f}
      <div class="panel agenda">
        <div class="overline">Hoje · ${et(t,t)}</div>
        ${d.length?d.map(g=>{let y=!k&&g.start>t?(k=!0,U):f;return c`${y}${this._renderRow(g,e)}`}):c`<p class="empty-line">${i?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${d.length&&!k&&d[d.length-1].end<=t?U:f}
        <button class="add-line" @click=${()=>this._openForm({date:e})}>${v("plus")}Evento hoje</button>
      </div>
      ${F.length?c`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${F.map(({d:g,list:y})=>c`<button class="day-head" @click=${()=>this._openDay(g)}>${N(g,t)}<span>${y.length}</span></button>
                ${y.map(D=>this._renderRow(D,g))}`)}
          </div>`:i?f:c`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
    </section>`}_ticket(t,{label:e,pill:a,when:i,stub:r,now:o,live:n=!1}){return c`<button class="hero-ev ticket ${n?"live":""}" style=${z(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(t,o,n)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${e}</span><span class="tk-pill">${v("clock","sm")}${a}</span></span>
          <span class="hero-title">${t.summary}</span>
          <span class="tk-when">${i}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${r}</span>
    </button>`}_clock(t,e,a=!1){let o=k=>(k.getHours()%12*60+k.getMinutes())/720*2*Math.PI,n=(k,g)=>[40+g*Math.sin(k),40-g*Math.cos(k)],d=(k,g,y)=>{let D=g-k;for(;D<=0;)D+=2*Math.PI;if(D=Math.max(D,.42),D>=2*Math.PI-.01)return`M 40 ${40-y} A ${y} ${y} 0 1 1 ${39.99} ${40-y}`;let[st,jt]=n(k,y),[Yt,Ca]=n(k+D,y);return`M ${st.toFixed(2)} ${jt.toFixed(2)} A ${y} ${y} 0 ${D>Math.PI?1:0} 1 ${Yt.toFixed(2)} ${Ca.toFixed(2)}`},p=Array.from({length:12},(k,g)=>{let y=g/12*2*Math.PI,[D,st]=n(y,g%3?27:24),[jt,Yt]=n(y,29);return ve(D,st,jt,Yt,g%3?"tick":"tick major")}),m="",l="",u=e;if(t){let k=t.end-t.start>=432e5;m=k?d(0,2*Math.PI,34):d(o(t.start),o(t.end),34),a&&!k&&(l=d(o(t.start),o(e),34)),u=a?e:t.start}let h=o(u),x=u.getMinutes()/60*2*Math.PI,[b,_]=n(h,15),[F,U]=n(x,23);return c`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${p}
      ${m?Sa(m,a?"span faint":"span"):f}
      ${l?Sa(l,"span"):f}
      ${ve(40,40,b,_,"hand hour")}
      ${ve(40,40,F,U,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return c`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${v("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let t=new Date(this._now),e=this._cursor,a=this._mode,i=this._app("week_start",0),r,o,n;if(a==="mes"||a==="lista")r=`${P(tt[e.getMonth()])}${e.getFullYear()!==t.getFullYear()?` ${e.getFullYear()}`:""}`,o=()=>this._cursor=a==="lista"?w(e,-30):W(e,-1),n=()=>this._cursor=a==="lista"?w(e,30):W(e,1);else if(a==="semana"){let l=bt(e,i),u=w(l,6);r=l.getMonth()===u.getMonth()?`${l.getDate()}\u2013${u.getDate()} ${tt[u.getMonth()].slice(0,3)}`:`${l.getDate()} ${tt[l.getMonth()].slice(0,3)} \u2013 ${u.getDate()} ${tt[u.getMonth()].slice(0,3)}`,o=()=>this._cursor=w(e,-7),n=()=>this._cursor=w(e,7)}else r=N(e,t),o=()=>this._cursor=w(e,-1),n=()=>this._cursor=w(e,1);let d=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],p;a==="semana"?p=this._renderTimeGrid(bt(e,i),7):a==="dia"?p=this._renderTimeGrid(e,1):a==="lista"?p=this._renderList():p=this._renderMonth();let m=a==="mes"?e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()&&S(e,t):S(e,t);return c`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${r}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{o(),this._scrollWeek=!0}}>${v("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{n(),this._scrollWeek=!0}}>${v("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${d.map(([l,u,h])=>c`<button class=${a===l?"on":""} role="tab" aria-selected=${a===l?"true":"false"} @click=${()=>this._setMode(l)}>${v(h)}<span>${u}</span></button>`)}
        </div>
        <button class="pick ${m?"on":""}" @click=${()=>{this._cursor=$(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${p}
    </section>`}_renderMonth(){let t=new Date(this._now),e=this._cursor,a=this._app("week_start",0),i=new Date(e.getFullYear(),e.getMonth(),1),r=bt(i,a),o=w(r,42),n=this._events(r,o),d=[];for(let u=0;u<42;u++){let h=w(r,u),x=at(n,h);d.push({d:h,list:x})}let p=d[35].d.getMonth()!==e.getMonth()?5:6,m=at(n,e),l={x:0,y:0};return c`
      <div class="month" @touchstart=${u=>(l.x=u.touches[0].clientX,l.y=u.touches[0].clientY)} @touchend=${u=>{let h=u.changedTouches[0].clientX-l.x,x=u.changedTouches[0].clientY-l.y;Math.abs(h)>60&&Math.abs(x)<50&&(this._cursor=W(e,h<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(u=>c`<span>${Lt[(u+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${d.slice(0,p*7).map(({d:u,list:h})=>{let x=u.getMonth()!==e.getMonth(),b=[...new Set(h.map(_=>this._colorOfEvent(_).fill))].slice(0,4);return c`<button class="cell ${x?"out":""} ${S(u,t)?"today":""} ${S(u,e)?"sel":""}" @click=${()=>this._cursor=u} aria-label="${N(u,t)}: ${T(h.length,"evento","eventos")}">
              <span class="num">${u.getDate()}</span>
              <span class="dots">${b.map(_=>c`<i style="background:${_}"></i>`)}${h.length>4?c`<b>+</b>`:f}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${N(e,t)}</span><button class="text-btn" @click=${()=>this._openForm({date:e})}>${v("plus")}Evento</button></div>
        ${m.length?m.map(u=>this._renderRow(u,e)):c`<p class="empty-line">${this._store.loading(r,o)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(t,e){let a=new Date(this._now),i=Array.from({length:e},(l,u)=>w(t,u)),r=this._events(i[0],w(i[e-1],1)),o=Array.from({length:24},(l,u)=>u),n=this._app("week_start",0),d=l=>l.allDay||l.end-l.start>=12*36e5,p=i.map(l=>at(r,l).filter(d)),m=Math.max(0,...p.map(l=>l.length));return c`
      ${e===7?c`<div class="week-strip">
            ${i.map(l=>c`<button class="ws-day ${S(l,a)?"today":""} ${S(l,this._cursor)?"sel":""}" @click=${()=>this._cursor=l}>
              <span>${Lt[l.getDay()]}</span><b>${l.getDate()}</b>
            </button>`)}
          </div>`:c`<div class="week-strip day-strip">
            ${Array.from({length:7},(l,u)=>w(bt(this._cursor,n),u)).map(l=>c`<button class="ws-day ${S(l,a)?"today":""} ${S(l,this._cursor)?"sel":""}" @click=${()=>this._cursor=l}><span>${Lt[l.getDay()]}</span><b>${l.getDate()}</b></button>`)}
          </div>`}
      ${m?c`<div class="tgrid-allday" style="--n:${e}">
            <span class="tg-label">dia todo</span>
            ${p.map(l=>c`<div class="tg-adcol">${l.slice(0,3).map(u=>c`<button class="tg-ad" style=${z(this._colorOfEvent(u),this._dark)} @click=${()=>this._openEvent(u)}>${u.summary}</button>`)}${l.length>3?c`<span class="tg-admore">+${l.length-3}</span>`:f}</div>`)}
          </div>`:f}
      <div class="tgrid-scroll">
        <div class="tgrid ${e===1?"one":"week"}" style="--n:${e};--hh:${it}px">
          <div class="tg-hours">${o.map(l=>c`<span style="top:${l*it}px">${l?`${String(l).padStart(2,"0")}h`:""}</span>`)}</div>
          ${i.map(l=>{let u=ya(at(r,l).filter(b=>!d(b)),l),h=S(l,a),x=(a.getHours()+a.getMinutes()/60)*it;return c`<div class="tg-col ${h?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let _=b.offsetY;this._openForm({date:l,hour:Math.max(0,Math.min(23,Math.floor(_/it)))})}}>
              ${u.map(({event:b,top:_,height:F,lane:U,lanes:k})=>{let g=Math.max(F*it-2,18);return c`<button class="tg-ev ${g<34?"short":""}" style="${z(this._colorOfEvent(b),this._dark)}top:${_*it}px;height:${g}px;left:calc(${U/k*100}% + 1px);width:calc(${100/k}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.summary}</b>${g>=34?c`<small>${M(b.start)}${e===1&&b.location?` \xB7 ${b.location}`:""}</small>`:f}
                </button>`})}
              ${h?c`<i class="tg-now" style="top:${x}px"></i>`:f}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let t=new Date(this._now),e=this._query.trim(),a=ce(e),i,r;a?(i=w($(t),-365),r=w($(t),366)):(i=this._cursor,r=w(this._cursor,30));let o=this._events(i,r);a&&(o=o.filter(p=>ce(`${p.summary} ${p.location} ${p.description}`).includes(a)));let n=[];for(let p of o){let m=$(p.start<i?i:p.start),l=n[n.length-1];l&&S(l.d,m)?l.list.push(p):n.push({d:m,list:[p]})}let d=this._store.loading(i,r);return c`
      <label class="search-box">
        ${v("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${p=>this._query=p.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?c`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${v("x")}</button>`:f}
      </label>
      ${a?c`<p class="page-sub" style="margin-top:0">${d?"Buscando\u2026":T(o.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:f}
      ${n.length?c`<div class="panel agenda">
            ${n.map(({d:p,list:m})=>c`<button class="day-head ${S(p,t)?"today":""}" @click=${()=>this._openDay(p,"dia")}>${N(p,t)}<span>${m.length}</span></button>${m.map(l=>this._renderRow(l,p))}`)}
          </div>`:c`<div class="panel"><div class="empty"><div class="em-icon">${v(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":d?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${H(e,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendars(){let t=this._cals(),e=[];for(let r of t){let o=e.find(n=>n.label===r.group);o?o.list.push(r):e.push({label:r.group,list:[r]})}let a=this._store?this._store.errors():new Map,i=t.filter(r=>r.canCreate).length;return c`<section class="page">
      ${this._renderHead("Agendas",{text:t.length?`${T(t.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${i?T(i,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"})}
      ${e.map(r=>c`<div class="panel">
          <div class="overline">${r.label}</div>
          ${r.list.map(o=>c`<div class="row cal-row ${o.hidden?"off":""}" style=${z(o.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(o)} aria-label="Personalizar ${o.name}">${v(o.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(o)}>
                <div class="label">${o.name}</div>
                <div class="hint">${[o.device,a.get(o.id)?"n\xE3o carregou":o.unavailable?"indispon\xEDvel":o.canCreate?o.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!o.hidden} @change=${n=>this._saveCalPrefs(o.id,{hidden:n.target.checked?null:!0})} aria-label="Mostrar ${o.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      ${this._renderAddCalendars()}
    </section>`}_renderAddCalendars(){let t=this._isAdmin(),e=(i,r,o,n)=>c`<button class="row" @click=${n}>
      <span class="tile" style=${z(this._accent(),this._dark)}>${v(i)}</span>
      <span class="grow"><div class="label">${r}</div><div class="hint" style="white-space:normal">${o}</div></span>
      ${v("chevron-right")}
    </button>`,a=i=>()=>t?this._openInHA(`/config/integrations/dashboard/add?domain=${i}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return c`<div class="panel">
      <div class="overline">Adicionar calendários</div>
      ${e("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${e("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${e("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${e("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${e("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(t){this._openSheet("calendar",{id:t.id,name:t.colorId||t.name!==t.origName?t.name:"",color:t.colorId,hidden:t.hidden})}async _saveCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return;let a=(t.name||"").trim();await this._saveCalPrefs(t.id,{name:a&&a!==e.origName?a:null,color:t.color||null,hidden:t.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let t=this._app("accent","turquesa"),e=this._app("week_start",0),a=this._writable(),i=this._defaultCal();return c`<section class="page">
      ${this._renderHead("Mais",{text:`CronologIA ${this._version}`})}
      <div class="panel">
        <div class="overline">Aparência</div>
        <div class="row col">
          <div class="label">Tema</div>
          <div class="seg" role="radiogroup" aria-label="Tema">
            ${[["auto","Autom\xE1tico","sun-moon"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([r,o,n])=>c`<button class=${this._theme===r?"on":""} role="radio" aria-checked=${this._theme===r?"true":"false"} @click=${()=>this._setTheme(r)}>${v(n)}${o}</button>`)}
          </div>
          <div class="hint" style="white-space:normal">${this._theme==="auto"?"Segue o modo claro/escuro do Home Assistant.":"Vale s\xF3 para este aparelho."}</div>
        </div>
        <div class="row col">
          <div class="label">Cor do app</div>
          <div class="swatches">
            ${It.map(r=>c`<button class="sw ${t===r.id?"on":""}" style="--c:${r.fill}" aria-label=${r.label} @click=${()=>this._saveAppPrefs({accent:r.id})}>${t===r.id?v("check"):f}</button>`)}
          </div>
        </div>
        <div class="row col">
          <div class="label">A semana começa no</div>
          <div class="seg" role="radiogroup" aria-label="Início da semana">
            ${[[0,"Domingo"],[1,"Segunda"]].map(([r,o])=>c`<button class=${e===r?"on":""} role="radio" aria-checked=${e===r?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:r})}>${o}</button>`)}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="overline">Novos eventos</div>
        ${a.length?c`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${r=>this._saveAppPrefs({default_calendar:r.target.value})}>
                ${a.map(r=>c`<option value=${r.id} ?selected=${r.id===i}>${r.name}</option>`)}
              </select>
              <span class="field-hint">${v("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`:c`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local em Agendas.</div></div>`}
      </div>

      ${this._renderAiPanel()}

      <div class="panel" id="dados">
        <div class="overline">Dados</div>
        <div class="data-row">
          <b>Exportar agenda (.ics)</b>
          <p>Baixe os eventos para abrir no Google Agenda, no Outlook ou no iPhone, ou para guardar uma cópia.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._openExport()}>${v("download")}Exportar</button></div>
        </div>
        <div class="data-row">
          <b>Importar arquivo .ics</b>
          <p>Traz os eventos de um convite ou de outra agenda. Você revisa e escolhe o calendário antes de adicionar.</p>
          <div class="btn-row"><button class="btn outline sm" ?disabled=${!a.length} @click=${()=>this._openImport("ics")}>${v("upload")}Escolher arquivo</button></div>
        </div>
        <div class="data-row">
          <b>Onde ficam os dados</b>
          <p>Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda só nomes, cores e preferências, que entram no backup do Home Assistant.</p>
        </div>
      </div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`}_renderAiPanel(){let t=this._ai||{},e=t.entities||[],a=this._app("ai_entity",""),i=this._aiChecking?"off":t.ready&&t.images?"ok":t.ready?"warn":"bad",r=this._aiChecking?"Verificando\u2026":t.ready&&t.images?"Pronta para ler fotos":t.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",o="";return t.ready&&t.using&&(o=`Usando ${t.using.name}${a?"":" (a IA padr\xE3o do Home Assistant)"}.`,t.photos&&(o+=` Para fotos, ${t.photos.name}.`)),t.reason&&(o=`${o} ${t.reason}`.trim()),c`<div class="panel" id="leitura-ia">
      <div class="overline">Leitura por IA</div>
      <p class="panel-lead">Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.</p>
      <div class="ai-state ${i}"><span class="dot"></span><div><b>${r}</b>${o?c`<span>${o}</span>`:f}</div></div>
      ${e.length||a?c`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${n=>this._chooseAi(n.target.value)}>
              <option value="" ?selected=${!a}>Padrão do Home Assistant</option>
              ${e.map(n=>c`<option value=${n.id} ?selected=${n.id===a}>${n.name}${n.images?"":" (s\xF3 texto)"}${n.available?"":" (indispon\xEDvel)"}</option>`)}
              ${a&&!e.some(n=>n.id===a)?c`<option value=${a} selected>${a} (não encontrada)</option>`:f}
            </select>
            <span class="field-hint">${v("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:f}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${v("rotate-ccw")}Verificar de novo</button></div>
      ${t.ready&&t.images?f:c`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return f;let t=this._form||{},e=f,a=null;if(this._sheet==="event")e=this._renderEventSheet(),a=t.ev&&this._colorOfEvent(t.ev);else if(this._sheet==="form")e=this._renderFormSheet(),a=this._cal(t.cal)&&this._cal(t.cal).color;else if(this._sheet==="scope")e=this._renderScope();else if(this._sheet==="confirm")e=this._renderConfirm();else if(this._sheet==="import")e=this._renderImportSheet(),a=this._cal(t.target)&&this._cal(t.target).color;else if(this._sheet==="calendar"){e=this._renderCalSheet();let r=this._cal(t.id);a=Q(t.color)||r&&r.color}else this._sheet==="export"?e=this._renderExportSheet():this._sheet==="outlook"?e=this._renderOutlookSheet():this._sheet==="nocal"&&(e=this._renderNoCalSheet());let i=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${xt(a.fill,this._dark?.18:.14)};${z(a,this._dark)}`:"";return c`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${i} @keydown=${r=>r.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${e}
      </div>
    `}_sheetHead(t,e){return c`<div class="sheet-head">
      ${e?c`<button class="icon-btn back" @click=${e} aria-label="Voltar">${v("chevron-left")}</button>`:f}
      <h3 class="display">${t}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${v("x")}</button>
    </div>`}_renderEventSheet(){let t=this._form.ev,e=new Date(this._now),a=this._cal(t.cal),i;if(t.allDay){let o=w(t.end,-1);i=S(o,t.start)?`${N(t.start,e)} \xB7 dia todo`:`${P(et(t.start,e))} \u2013 ${et(o,e)} \xB7 ${T(V(t.end,t.start),"dia","dias")}`}else S(t.start,t.end)||t.end.getHours()===0&&t.end.getMinutes()===0&&V(t.end,t.start)===1?i=`${N(t.start,e)} \xB7 ${M(t.start)} \u2013 ${M(t.end)} (${pe(t.end-t.start)})`:i=`${P(et(t.start,e))}, ${M(t.start)} \u2013 ${et(t.end,e)}, ${M(t.end)}`;let r=t.start>e?Vt(t.start-e):t.end>e?"acontecendo agora":"";return c`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${t.summary}</h3>
          <p class="ev-cal">${a?a.name:t.cal}${r?c` · <b>${r}</b>`:f}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${v("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${v("clock")}<span>${i}</span></div>
        ${t.rrule?c`<div class="fact">${v("repeat")}<span>${nt(t.rrule)}</span></div>`:f}
        ${t.location?c`<a class="fact link" href=${hi(t.location)} target="_blank" rel="noopener noreferrer">${v("map-pin")}<span>${t.location}</span>${v("external-link","sm")}</a>`:f}
        ${t.description?c`<div class="fact notes">${v("file-text")}<span>${fa(t.description).map(o=>o.url?c`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`:o.text)}</span></div>`:f}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?c`<p class="sheet-note">${v("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:f}
      <div class="sheet-actions">
        ${a&&a.canDelete&&t.uid?c`<button class="btn danger" @click=${()=>this._askDelete(t)} aria-label="Apagar">${v("trash")}</button>`:f}
        ${this._writable().length?c`<button class="btn outline" @click=${()=>this._openForm({ev:t,copy:!0})}>${v("copy")}Duplicar</button>`:f}
        ${a&&a.canUpdate&&t.uid?c`<button class="btn primary" @click=${()=>this._openForm({ev:t})}>${v("pencil")}Editar</button>`:f}
      </div>
    `}_renderFormSheet(){let t=this._form,e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(h=>h.id===t.cal):e.filter(h=>h.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e,i=new Date,r=[{label:"Hoje",d:$(i)},{label:"Amanh\xE3",d:w($(i),1)}],o=r.some(h=>C(h.d)===t.date),n=h=>{let x=this.renderRoot.querySelector(h);if(x)try{x.showPicker()}catch{x.focus(),x.click()}},d=h=>{if(!h)return;let x=F=>{let[U,k]=F.split(":").map(Number);return U*60+k},b=Math.max(15,(x(t.end)-x(t.start)+1440)%1440||60),_=(x(h)+b)%1440;this._setForm({start:h,end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`})},p=h=>{let[x,b]=t.start.split(":").map(Number),_=Math.min(1439,x*60+b+h);this._setForm({end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`,endDate:""})},m=h=>{let[x,b]=(h||"0:0").split(":").map(Number);return x*60+b},l=(m(t.end)-m(t.start)+1440)%1440,u=!t.allDay&&!t.endDate&&m(t.end)<=m(t.start);return c`
      ${this._sheetHead(t.mode==="add"?"Novo evento":"Editar evento")}
      ${t.mode==="add"?c`<div class="imp-strip">
            <button @click=${()=>this._openImport("text")}>${v("clipboard-paste")}<span>Colar mensagem</span></button>
            <button @click=${()=>this._openImport("photos")}>${v("images")}<span>Escolher fotos</span></button>
            <button @click=${()=>this._openImport("scan")}>${v("scan-text")}<span>Digitalizar com IA</span></button>
          </div>`:f}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${h=>this._setForm({title:h.target.value})} @keydown=${h=>h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?c`<div class="field">
            <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(h=>c`<button class="pick list ${t.cal===h.id?"on":""}" style=${z(h.color,this._dark)} @click=${()=>this._setForm({cal:h.id})}><span class="dot"></span><span>${H(h.name,24)}</span></button>`)}</div>
          </div>`:f}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${t.allDay} @change=${h=>this._setForm({allDay:h.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${r.map(h=>c`<button class="pick ${t.date===C(h.d)?"on":""}" @click=${()=>this._setForm({date:C(h.d),endDate:t.endDate&&t.endDate<C(h.d)?"":t.endDate})}>${h.label}</button>`)}
          <button class="pick ${o?"":"on"}" @click=${()=>n("#cr-date")}>
            ${v("calendar")}<span>${o?"Outra data":P(N(R(t.date),i,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${t.date} @change=${h=>h.target.value&&this._setForm({date:h.target.value,endDate:t.endDate&&t.endDate<h.target.value?"":t.endDate})} />
          </button>
        </div>
        ${t.allDay?c`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${t.endDate||t.date} min=${t.date} @change=${h=>this._setForm({endDate:h.target.value>t.date?h.target.value:""})} />
              ${t.endDate?c`<span class="tl">${T(V(R(t.endDate),R(t.date))+1,"dia","dias")}</span>`:c`<span class="tl">um dia</span>`}
            </div>`:c`<div class="time-row">
                <input type="time" .value=${t.start} aria-label="Começa" @change=${h=>d(h.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${t.end} aria-label="Termina" @change=${h=>h.target.value&&this._setForm({end:h.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([h,x])=>c`<button class="pick ${l===h&&!t.endDate?"on":""}" @click=${()=>p(h)}>${x}</button>`)}
              </div>
              ${u?c`<div class="field-hint">${v("info")}<span>Termina no dia seguinte.</span></div>`:f}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="chip-row">${Ut.map(h=>c`<button class="pick ${t.repeat===h.id?"on":""}" @click=${()=>this._setForm({repeat:h.id})}>${h.id?v("repeat"):f}<span>${h.label}</span></button>`)}</div>
        ${t.rrule&&wt(t.rrule)===t.repeat&&nt(t.rrule)!==(Ut.find(h=>h.id===t.repeat)||{}).label?c`<div class="field-hint">${v("repeat")}<span>${nt(t.rrule)}</span></div>`:f}
        ${t.rid?c`<div class="field-hint">${v("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:f}
      </div>
      <label class="field">
        <span class="flabel">Local</span>
        <input type="text" .value=${t.location} placeholder="Endereço, sala ou link" @input=${h=>this._setForm({location:h.target.value})} />
      </label>
      <label class="field">
        <span class="flabel">Notas</span>
        <textarea rows="3" .value=${t.notes} placeholder="Detalhes, o que levar…" @input=${h=>this._setForm({notes:h.target.value})}></textarea>
      </label>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let t=this._form,e=t.action==="edit",a=(i,r,o,n=!1)=>c`<button class="imp-opt ${n?"danger":""}" @click=${()=>this._applyScope(i)}>
      <span class="imp-ic">${v(i==="one"?"calendar-check":i==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${r}</b><small>${o}</small></span>${v("chevron-right")}
    </button>`;return c`
      ${this._sheetHead(e?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${H(t.title,40)}” se repete. O que você quer ${e?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",e?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",e?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${e?f:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let t=this._form;return c`
      <div class="sheet-head"><h3 class="display">${t.title}</h3></div>
      <p class="confirm-text">${t.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn ${t.danger?"danger-fill":"primary"}" @click=${()=>t.run()}>${t.label}</button>
      </div>
    `}_renderImportSheet(){let t=this._form,e=this._ai||{},a=this._writable(),i=this._cal(t.target),r=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},o=t.error?c`<div class="imp-error">${v("circle-alert")}<span>${t.error}</span></div>`:f,n=t.images&&t.images.length?c`<div class="thumbs">${t.images.map(p=>c`<img src=${p.url} alt="" />`)}</div>`:f,d=c`<div class="imp-error soft">${v("sparkles")}<span>${e.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(t.step==="text")return c`
        ${this._sheetHead("Colar mensagem",r)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${t.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${o} ${e.ready?f:d}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._pasteClipboard()}>${v("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(t.text||"").trim()||!e.ready} @click=${()=>this._readText()}>${v("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${e.ready?`${e.using.name} encontra datas, hor\xE1rios e locais, mesmo em mensagens corridas. Voc\xEA revisa antes de adicionar.`:""}</p>
      `;if(t.step==="loading")return c`
        ${this._sheetHead("Lendo\u2026")}
        ${n}
        <div class="imp-loading"><span class="spin">${v("loader-circle")}</span><span>${t.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:t.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(t.step==="review"){let p=t.items.filter(u=>u.on&&(u.title||"").trim()).length,m=t.provider==="ics"?`do arquivo ${H(t.fileName||".ics",28)}`:t.provider?`lidos por ${t.provider}`:"",l=new Date;return c`
        ${this._sheetHead("Revisar eventos",r)}
        ${n}
        <p class="sheet-note top">${T(t.items.length,"evento encontrado","eventos encontrados")}${m?` \xB7 ${m}`:""}. Confira datas e horários.</p>
        ${t.note?c`<div class="imp-error soft">${v("sparkles")}<span>${t.note}</span></div>`:f}
        <div class="rv-list">
          ${t.items.map((u,h)=>c`<div class="rv-card ${u.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${u.on?"on":""}" role="checkbox" aria-checked=${u.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(h,{on:!u.on})}>${v("check")}</button>
                <input class="rv-title" type="text" .value=${u.title} aria-label="Título" @input=${x=>this._setItem(h,{title:x.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:t.items.filter((x,b)=>b!==h)})}>${v("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${u.date} aria-label="Data" @change=${x=>x.target.value&&this._setItem(h,{date:x.target.value})} />
                ${u.start?c`<span class="rv-times"><input type="time" .value=${u.start} aria-label="Começa" @change=${x=>this._setItem(h,{start:x.target.value})} /><span>–</span><input type="time" .value=${u.end} aria-label="Termina" @change=${x=>this._setItem(h,{end:x.target.value})} /></span>`:c`<button class="pick ghost" @click=${()=>this._setItem(h,{start:"09:00",end:"10:00"})}>${v("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${P(N(R(u.date),l))}${u.end_date?` at\xE9 ${et(R(u.end_date),l)}`:""}${u.location?` \xB7 ${u.location}`:""}${u.repeat||u.rrule?` \xB7 ${u.rrule?nt(u.rrule):Ut.find(x=>x.id===u.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${e.images&&t.provider!=="ics"?c`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${v("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${v("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:f}
        ${a.length>1?c`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${a.map(u=>c`<button class="pick list ${t.target===u.id?"on":""}" style=${z(u.color,this._dark)} @click=${()=>this._setForm({target:u.id})}><span class="dot"></span><span>${H(u.name,24)}</span></button>`)}</div>
            </div>`:f}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||t.adding} @click=${()=>this._importAdd()}>
            ${t.adding?"Adicionando\u2026":p?`Adicionar ${T(p,"evento","eventos")}${i&&a.length<=1?` em ${H(i.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return c`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">Crie eventos a partir de uma mensagem, de uma foto (convite, cartaz, cartão de consulta) ou de um arquivo .ics. Você revisa antes de adicionar.</p>
      <div class="imp-options">
        <button class="imp-opt" ?disabled=${!e.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${v("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${v("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!e.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${v("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid()?"Prints e fotos da galeria, uma por vez":"Prints e fotos da galeria (at\xE9 6)"}</small></span>${v("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!e.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${v("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>Fotografe um convite ou cartão de consulta</small></span>${v("chevron-right")}
        </button>
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${v("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${v("chevron-right")}
        </button>
      </div>
      ${e.images?f:d}
      ${o}
    `}_renderCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return this._sheetHead("Calend\xE1rio");let a=Q(t.color)||e.color;return c`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${z(a,this._dark)}>
        <span class="tile">${v(e.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(t.name||"").trim()||e.origName}</span><span class="lc-meta">${e.group}${e.device?` \xB7 ${e.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${t.name} placeholder=${e.origName} @input=${i=>this._setForm({name:i.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${It.map(i=>c`<button class="sw ${a.id===i.id?"on":""}" style="--c:${i.fill}" aria-label=${i.label} @click=${()=>this._setForm({color:i.id})}>${a.id===i.id?v("check"):f}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${e.canCreate?e.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${e.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!t.hidden} @change=${i=>this._setForm({hidden:!i.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?c`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${e.id}`)}>${v("external-link")}Abrir na tela padrão do HA</button>`:f}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${v("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let t=this._form,e=this._cals(),[a,i]=this._exportRange(t.range),r=t.cals.length?this.api.exportUrl({calendars:t.cals,start:I(a),end:I(i)}):null,o=n=>this._setForm({cals:t.cals.includes(n)?t.cals.filter(d=>d!==n):[...t.cals,n]});return c`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${e.map(n=>c`<button class="pick list ${t.cals.includes(n.id)?"on":""}" style=${z(n.color,this._dark)} @click=${()=>o(n.id)}><span class="dot"></span><span>${H(n.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([n,d])=>c`<button class="pick ${t.range===n?"on":""}" @click=${()=>this._setForm({range:n})}>${d}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${r&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?c`<a class="btn primary" href=${r} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${v("download")}Baixar .ics</a>`:c`<button class="btn primary" ?disabled=${!r} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${v("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let t=this._isAdmin();return c`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${v("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${v("external-link","sm")}</a>
      </div>
      <div class="help-card">
        <b>${v("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${t?c`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${v("chevron-right","sm")}</button>`:f}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return c`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let t=this._cam;if(!t)return f;let e=t.shots.length;return c`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${t.flash?c`<div class="cam-flash" .key=${t.flash}></div>`:f}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${v("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${t.torchOk?c`<button class="cam-btn ${t.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${v("zap")}</button>`:c`<span class="cam-btn ghost"></span>`}
        </div>
        ${t.status==="error"?c`<div class="cam-msg">${v("camera")}<p>${t.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${v("images")}Escolher foto</button></div>`:c`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${t.status==="starting"?"Abrindo a c\xE2mera\u2026":e?`${T(e,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${t.shots.slice(-3).map(a=>c`<img src=${a.url} alt="" />`)}${e>3?c`<span>+${e-3}</span>`:f}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${t.status!=="live"||e>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!e} @click=${()=>this._useShots()}>Pronto${e?` (${e})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return f;let t=this._toast;return c`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${t.text}</span>
      ${t.action?c`<button @click=${()=>{this._toast=null,t.action.run()}}>${t.action.label}</button>`:f}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",ge);var ui=document.getElementById("app"),xe=document.createElement("cronologia-app");xe.env=ha();xe.api=new Nt;ui.replaceChildren(xe);})();
