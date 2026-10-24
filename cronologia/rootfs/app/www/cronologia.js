/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var Et=globalThis,de=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),Fe=new WeakMap,Tt=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i,e=this.t;if(de&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=Fe.get(e)),t===void 0&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Fe.set(e,t))}return t}toString(){return this.cssText}},Vt=s=>new Tt(typeof s=="string"?s:s+"",void 0,pe),Mt=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((a,i,r)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new Tt(e,s,pe)},Ka=(s,t)=>{if(de)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let a=document.createElement("style"),i=Et.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=e.cssText,s.appendChild(a)}},He=de?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return Vt(e)})(s):s,{is:Ja,defineProperty:Qa,getOwnPropertyDescriptor:Xa,getOwnPropertyNames:Ga,getOwnPropertySymbols:Za,getPrototypeOf:ti}=Object,Ut=globalThis,Ne=Ut.trustedTypes,ei=Ne?Ne.emptyScript:"",ai=Ut.reactiveElementPolyfillSupport,xt=(s,t)=>s,oe={toAttribute(s,t){switch(t){case Boolean:s=s?ei:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ge=(s,t)=>!Ja(s,t),Oe={attribute:!0,type:String,converter:oe,reflect:!1,useDefault:!1,hasChanged:Ge};Symbol.metadata??=Symbol("metadata"),Ut.litPropertyMetadata??=new WeakMap;var J=class extends HTMLElement{static addInitializer(t){this.o(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(t,e=Oe){if(e.state&&(e.attribute=!1),this.o(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(t,a,e);i!==void 0&&Qa(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){let{get:i,set:r}=Xa(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let o=i?.call(this);r?.call(this,n),this.requestUpdate(t,o,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oe}static o(){if(this.hasOwnProperty(xt("elementProperties")))return;let t=ti(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(xt("properties"))){let e=this.properties,a=[...Ga(e),...Za(e)];for(let i of a)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,i]of e)this.elementProperties.set(a,i)}this.u=new Map;for(let[e,a]of this.elementProperties){let i=this.p(e,a);i!==void 0&&this.u.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let i of a)e.unshift(He(i))}else t!==void 0&&e.push(He(t));return e}static p(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this.P??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this.P?.delete(t)}$(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this.v=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ka(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this.P?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}C(t,e){let a=this.constructor.elementProperties.get(t),i=this.constructor.p(t,a);if(i!==void 0&&a.reflect===!0){let r=(a.converter?.toAttribute!==void 0?a.converter:oe).toAttribute(e,a.type);this.m=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this.m=null}}_$AK(t,e){let a=this.constructor,i=a.u.get(t);if(i!==void 0&&this.m!==i){let r=a.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:oe;this.m=i;let o=n.fromAttribute(e,r.type);this[i]=o??this.T?.get(i)??o,this.m=null}}requestUpdate(t,e,a,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),a??=n.getPropertyOptions(t),!((a.hasChanged??Ge)(r,e)||a.useDefault&&a.reflect&&r===this.T?.get(t)&&!this.hasAttribute(n.p(t,a))))return;this.M(t,e,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(t,e,{useDefault:a,reflect:i,wrapped:r},n){a&&!(this.T??=new Map).has(t)&&(this.T.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),i===!0&&this.m!==t&&(this.A??=new Set).add(t))}async k(){this.isUpdatePending=!0;try{await this.S}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[i,r]of this.v)this[i]=r;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[i,r]of a){let{wrapped:n}=r,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.M(i,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this.P?.forEach(a=>a.hostUpdate?.()),this.update(e)):this.U()}catch(a){throw t=!1,this.U(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this.P?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(t){return!0}update(t){this.A&&=this.A.forEach(e=>this.C(e,this[e])),this.U()}updated(t){}firstUpdated(t){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[xt("elementProperties")]=new Map,J[xt("finalized")]=new Map,ai?.({ReactiveElement:J}),(Ut.reactiveElementVersions??=[]).push("2.1.2");var he=globalThis,Re=s=>s,zt=he.trustedTypes,Ie=zt?zt.createPolicy("lit-html",{createHTML:s=>s}):void 0,ue="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+j,ii=`<${me}>`,et=document,$t=()=>et.createComment(""),wt=s=>s===null||typeof s!="object"&&typeof s!="function",ve=Array.isArray,Ze=s=>ve(s)||typeof s?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Le=/>/g,Z=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ve=/"/g,ta=/^(?:script|style|textarea|title)$/i,fe=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=fe(1),ct=fe(2),Ui=fe(3),C=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ue=new WeakMap,tt=et.createTreeWalker(et,129);function ea(s,t){if(!ve(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ie!==void 0?Ie.createHTML(t):t}var aa=(s,t)=>{let e=s.length-1,a=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=gt;for(let o=0;o<e;o++){let c=s[o],p,h,d=-1,u=0;for(;u<c.length&&(n.lastIndex=u,h=n.exec(c),h!==null);)u=n.lastIndex,n===gt?h[1]==="!--"?n=Pe:h[1]!==void 0?n=Le:h[2]!==void 0?(ta.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=Z):h[3]!==void 0&&(n=Z):n===Z?h[0]===">"?(n=i??gt,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?Z:h[3]==='"'?Ve:qe):n===Ve||n===qe?n=Z:n===Pe||n===Le?n=gt:(n=Z,i=void 0);let m=n===Z&&s[o+1].startsWith("/>")?" ":"";r+=n===gt?c+ii:d>=0?(a.push(p),c.slice(0,d)+ue+c.slice(d)+j+m):c+j+(d===-2?o:m)}return[ea(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},yt=class s{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let r=0,n=0,o=t.length-1,c=this.parts,[p,h]=aa(t,e);if(this.el=s.createElement(p,a),tt.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=tt.nextNode())!==null&&c.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(ue)){let u=h[n++],m=i.getAttribute(d).split(j),f=/([.?@])?(.*)/.exec(u);c.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?Ht:f[1]==="?"?Nt:f[1]==="@"?Ot:it}),i.removeAttribute(d)}else d.startsWith(j)&&(c.push({type:6,index:r}),i.removeAttribute(d));if(ta.test(i.tagName)){let d=i.textContent.split(j),u=d.length-1;if(u>0){i.textContent=zt?zt.emptyScript:"";for(let m=0;m<u;m++)i.append(d[m],$t()),tt.nextNode(),c.push({type:2,index:++r});i.append(d[u],$t())}}}else if(i.nodeType===8)if(i.data===me)c.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(j,d+1))!==-1;)c.push({type:7,index:r}),d+=j.length-1}r++}}static createElement(t,e){let a=et.createElement("template");return a.innerHTML=t,a}};function at(s,t,e=s,a){if(t===C)return t;let i=a!==void 0?e.N?.[a]:e.O,r=wt(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,e,a)),a!==void 0?(e.N??=[])[a]=i:e.O=i),i!==void 0&&(t=at(s,i._$AS(s,t.values),i,a)),t}var Ft=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(t){let{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??et).importNode(e,!0);tt.currentNode=i;let r=tt.nextNode(),n=0,o=0,c=a[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new Bt(r,r.nextSibling,this,t):c.type===1?p=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(p=new Rt(r,this,t)),this._$AV.push(p),c=a[++o]}n!==c?.index&&(r=tt.nextNode(),n++)}return tt.currentNode=et,i}V(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},Bt=class ia{get _$AU(){return this._$AM?._$AU??this.D}constructor(t,e,a,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this.D=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=at(this,t,e),wt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==C&&this.L(t):t._$litType$!==void 0?this.j(t):t.nodeType!==void 0?this.I(t):Ze(t)?this.H(t):this.L(t)}B(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}I(t){this._$AH!==t&&(this._$AR(),this._$AH=this.B(t))}L(t){this._$AH!==v&&wt(this._$AH)?this._$AA.nextSibling.data=t:this.I(et.createTextNode(t)),this._$AH=t}j(t){let{values:e,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=yt.createElement(ea(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.V(e);else{let r=new Ft(i,this),n=r.R(this.options);r.V(e),this.I(n),this._$AH=r}}_$AC(t){let e=Ue.get(t.strings);return e===void 0&&Ue.set(t.strings,e=new yt(t)),e}H(t){ve(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,i=0;for(let r of t)i===e.length?e.push(a=new ia(this.B($t()),this.B($t()),this,this.options)):a=e[i],a._$AI(r),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=Re(t).nextSibling;Re(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this.D=t,this._$AP?.(t))}},it=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=v}_$AI(t,e=this,a,i){let r=this.strings,n=!1;if(r===void 0)t=at(this,t,e,0),n=!wt(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{let o=t,c,p;for(t=r[0],c=0;c<r.length-1;c++)p=at(this,o[a+c],e,c),p===C&&(p=this._$AH[c]),n||=!wt(p)||p!==this._$AH[c],p===v?t=v:t!==v&&(t+=(p??"")+r[c+1]),this._$AH[c]=p}n&&!i&&this.W(t)}W(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ht=class extends it{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===v?void 0:t}},Nt=class extends it{constructor(){super(...arguments),this.type=4}W(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Ot=class extends it{constructor(t,e,a,i,r){super(t,e,a,i,r),this.type=5}_$AI(t,e=this){if((t=at(this,t,e,0)??v)===C)return;let a=this._$AH,i=t===v&&a!==v||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==v&&(a===v||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Rt=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}},si={q:ue,J:j,Z:me,F:1,G:aa,K:Ft,X:Ze,Y:at,tt:Bt,st:it,it:Nt,et:Ot,ht:Ht,ot:Rt},ri=he.litHtmlPolyfillSupport;ri?.(yt,Bt),(he.litHtmlVersions??=[]).push("3.3.3");var sa=(s,t,e)=>{let a=e?.renderBefore??t,i=a._$litPart$;if(i===void 0){let r=e?.renderBefore??null;a._$litPart$=i=new Bt(t.insertBefore($t(),r),r,void 0,e??{})}return i._$AI(s),i},ge=globalThis;var X=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.rt=sa(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return C}};X._$litElement$=!0,X.finalized=!0,ge.litElementHydrateSupport?.({LitElement:X});var ni=ge.litElementPolyfillSupport;ni?.({LitElement:X});(ge.litElementVersions??=[]).push("4.2.2");var{tt:oi}=si,Be=s=>s,li=s=>s===null||typeof s!="object"&&typeof s!="function";var je=(s,t)=>t===void 0?s?._$litType$!==void 0:s?._$litType$===t,ci=s=>s?._$litType$?.h!=null;var ra=s=>s.strings===void 0,Ye=()=>document.createComment(""),Q=(s,t,e)=>{let a=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){let r=a.insertBefore(Ye(),i),n=a.insertBefore(Ye(),i);e=new oi(r,n,s,s.options)}else{let r=e._$AB.nextSibling,n=e._$AM,o=n!==s;if(o){let c;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(c=s._$AU)!==n._$AU&&e._$AP(c)}if(r!==i||o){let c=e._$AA;for(;c!==r;){let p=Be(c).nextSibling;Be(a).insertBefore(c,i),c=p}}}return e},K=(s,t,e=s)=>(s._$AI(t,e),s),di={},_t=(s,t=di)=>s._$AH=t,le=s=>s._$AH,re=s=>{s._$AR(),s._$AA.remove()},na=s=>{s._$AR()};var P=s=>(...t)=>({_$litDirective$:s,values:t}),U=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this.nt=t,this._$AM=e,this.ct=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var bt=(s,t)=>{let e=s._$AN;if(e===void 0)return!1;for(let a of e)a._$AO?.(t,!1),bt(a,t);return!0},It=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},oa=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ui(t)}};function pi(s){this._$AN!==void 0?(It(this),this._$AM=s,oa(this)):this._$AM=s}function hi(s,t=!1,e=0){let a=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(a))for(let r=e;r<a.length;r++)bt(a[r],!1),It(a[r]);else a!=null&&(bt(a,!1),It(a));else bt(this,s)}var ui=s=>{s.type==2&&(s._$AP??=hi,s._$AQ??=pi)},kt=class extends U{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),oa(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(bt(this,t),It(this))}setValue(t){if(ra(this.nt))this.nt._$AI(t,this);else{let e=[...this.nt._$AH];e[this.ct]=t,this.nt._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Pt=class{constructor(t){this.lt=t}disconnect(){this.lt=void 0}reconnect(t){this.lt=t}deref(){return this.lt}},Lt=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(t=>this.dt=t)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var qt=class extends kt{constructor(){super(...arguments),this.ft=new Pt(this),this.vt=new Lt}render(t,e){return C}update(t,[e,a]){if(this.isConnected||this.disconnected(),e===this.yt)return C;this.yt=e;let i=0,{ft:r,vt:n}=this;return(async(o,c)=>{for await(let p of o)if(await c(p)===!1)return})(e,async o=>{for(;n.get();)await n.get();let c=r.deref();if(c!==void 0){if(c.yt!==e)return!1;a!==void 0&&(o=a(o,i)),c.commitValue(o,i),i++}return!0}),C}commitValue(t,e){this.setValue(t)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Bi=P(qt),ji=P(class extends qt{constructor(s){if(super(s),s.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(s,t){return this.rt=s,super.update(s,t)}commitValue(s,t){t===0&&na(this.rt);let e=Q(this.rt);K(e,s)}}),We=s=>ci(s)?s._$litType$.h:s.strings,Yi=P(class extends U{constructor(s){super(s),this.bt=new WeakMap}render(s){return[s]}update(s,[t]){let e=je(this.gt)?We(this.gt):null,a=je(t)?We(t):null;if(e!==null&&(a===null||e!==a)){let i=le(s).pop(),r=this.bt.get(e);if(r===void 0){let n=document.createDocumentFragment();r=sa(v,n),r.setConnected(!1),this.bt.set(e,r)}_t(r,[i]),Q(r,void 0,i)}if(a!==null){if(e===null||e!==a){let i=this.bt.get(a);if(i!==void 0){let r=le(i).pop();na(s),Q(s,void 0,r),_t(s,[r])}}this.gt=t}else this.gt=void 0;return this.render(t)}});var Wi=P(class extends U{constructor(s){if(super(s),s.type!==1||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.wt===void 0){this.wt=new Set,s.strings!==void 0&&(this._t=new Set(s.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(t)}let e=s.element.classList;for(let a of this.wt)a in t||(e.remove(a),this.wt.delete(a));for(let a in t){let i=!!t[a];i===this.wt.has(a)||this._t?.has(a)||(i?(e.add(a),this.wt.add(a)):(e.remove(a),this.wt.delete(a)))}return C}}),mi={},Ki=P(class extends U{constructor(){super(...arguments),this.St=mi}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.St)&&this.St.length===t.length&&t.every((a,i)=>a===this.St[i]))return C}else if(this.St===t)return C;return this.St=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var Ji=P(class extends U{constructor(){super(...arguments),this.key=v}render(s,t){return this.key=s,t}update(s,[t,e]){return t!==this.key&&(_t(s),this.key=t),e}}),Qi=P(class extends U{constructor(s){if(super(s),s.type!==3&&s.type!==1&&s.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!ra(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===C||t===v)return t;let e=s.element,a=s.name;if(s.type===3){if(t===e[a])return C}else if(s.type===4){if(!!t===e.hasAttribute(a))return C}else if(s.type===1&&e.getAttribute(a)===t+"")return C;return _t(s),t}});var ne=new WeakMap,Xi=P(class extends kt{render(s){return v}update(s,[t]){let e=t!==this.lt;return e&&this.$t(void 0),(e||this.Tt!==this.xt)&&(this.lt=t,this.Et=s.options?.host,this.$t(this.xt=s.element)),v}$t(s){if(this.lt!==void 0)if(this.isConnected||(s=void 0),typeof this.lt=="function"){let t=this.Et??globalThis,e=ne.get(t);e===void 0&&(e=new WeakMap,ne.set(t,e)),e.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),e.set(this.lt,s),s!==void 0&&this.lt.call(this.Et,s)}else this.lt.value=s}get Tt(){return typeof this.lt=="function"?ne.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),Ke=(s,t,e)=>{let a=new Map;for(let i=t;i<=e;i++)a.set(s[i],i);return a},Gi=P(class extends U{constructor(s){if(super(s),s.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(s,t,e){let a;e===void 0?e=t:t!==void 0&&(a=t);let i=[],r=[],n=0;for(let o of s)i[n]=a?a(o,n):n,r[n]=e(o,n),n++;return{values:r,keys:i}}render(s,t,e){return this.Ct(s,t,e).values}update(s,[t,e,a]){let i=le(s),{values:r,keys:n}=this.Ct(t,e,a);if(!Array.isArray(i))return this.Pt=n,r;let o=this.Pt??=[],c=[],p,h,d=0,u=i.length-1,m=0,f=r.length-1;for(;d<=u&&m<=f;)if(i[d]===null)d++;else if(i[u]===null)u--;else if(o[d]===n[m])c[m]=K(i[d],r[m]),d++,m++;else if(o[u]===n[f])c[f]=K(i[u],r[f]),u--,f--;else if(o[d]===n[f])c[f]=K(i[d],r[f]),Q(s,c[f+1],i[d]),d++,f--;else if(o[u]===n[m])c[m]=K(i[u],r[m]),Q(s,i[d],i[u]),u--,m++;else if(p===void 0&&(p=Ke(n,m,f),h=Ke(o,d,u)),p.has(o[d]))if(p.has(o[u])){let b=h.get(n[m]),_=b!==void 0?i[b]:null;if(_===null){let T=Q(s,i[d]);K(T,r[m]),c[m]=T}else c[m]=K(_,r[m]),Q(s,i[d],_),i[b]=null;m++}else re(i[u]),u--;else re(i[d]),d++;for(;m<=f;){let b=Q(s,c[f+1]);K(b,r[m]),c[m++]=b}for(;d<=u;){let b=i[d++];b!==null&&re(b)}return this.Pt=n,_t(s,c),C}}),la="important",vi=" !"+la,Zi=P(class extends U{constructor(s){if(super(s),s.type!==1||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let a=s[e];return a==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(s,[t]){let{style:e}=s.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(t)),this.render(t);for(let a of this.Mt)t[a]==null&&(this.Mt.delete(a),a.includes("-")?e.removeProperty(a):e[a]=null);for(let a in t){let i=t[a];if(i!=null){this.Mt.add(a);let r=typeof i=="string"&&i.endsWith(vi);a.includes("-")||r?e.setProperty(a,r?i.slice(0,-11):i,r?la:""):e[a]=i}}return C}}),ts=P(class extends U{constructor(s){if(super(s),s.type!==2)throw Error("templateContent can only be used in child bindings")}render(s){return this.At===s?C:(this.At=s,document.importNode(s.content,!0))}}),lt=class extends U{constructor(t){if(super(t),this.gt=v,t.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this.kt=void 0,this.gt=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.gt)return this.kt;this.gt=t;let e=[t];return e.raw=e,this.kt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};lt.directiveName="unsafeHTML",lt.resultType=1;var es=P(lt);var At=class extends lt{};At.directiveName="unsafeSVG",At.resultType=2;var jt=P(At),Je=s=>!li(s)&&typeof s.then=="function",Qe=1073741823;var ce=class extends kt{constructor(){super(...arguments),this.Ot=Qe,this.Ut=[],this.ft=new Pt(this),this.vt=new Lt}render(...t){return t.find(e=>!Je(e))??C}update(t,e){let a=this.Ut,i=a.length;this.Ut=e;let r=this.ft,n=this.vt;this.isConnected||this.disconnected();for(let o=0;o<e.length&&!(o>this.Ot);o++){let c=e[o];if(!Je(c))return this.Ot=o,c;o<i&&c===a[o]||(this.Ot=Qe,i=0,Promise.resolve(c).then(async p=>{for(;n.get();)await n.get();let h=r.deref();if(h!==void 0){let d=h.Ut.indexOf(c);d>-1&&d<h.Ot&&(h.Ot=d,h.setValue(p))}}))}return C}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},as=P(ce);var fi=Symbol.for(""),gi=s=>{if(s?.r===fi)return s?._$litStatic$};var Xe=new Map,ca=s=>(t,...e)=>{let a=e.length,i,r,n=[],o=[],c,p=0,h=!1;for(;p<a;){for(c=t[p];p<a&&(r=e[p],(i=gi(r))!==void 0);)c+=i+t[++p],h=!0;p!==a&&o.push(r),n.push(c),p++}if(p===a&&n.push(t[a]),h){let d=n.join("$$lit$$");(t=Xe.get(d))===void 0&&(n.raw=n,Xe.set(d,t=n)),e=o}return s(t,...e)},is=ca(l),ss=ca(ct);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var dt={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>'};var da="./fonts/barlow-400.woff2";var pa="./fonts/barlow-500.woff2";var ha="./fonts/barlow-600.woff2";var ua="./fonts/barlow-condensed-500.woff2";var ma="./fonts/barlow-condensed-600.woff2";var va="./fonts/barlow-condensed-700.woff2";var fa='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',ga=`"CR Barlow", ${fa}`,xa=`"CR Barlow Condensed", ${fa}`;function ba(){if(document.getElementById("cronologia-fonts"))return;let s=(e,a,i)=>`@font-face{font-family:"${e}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${i};font-style:normal;font-display:swap}`,t=document.createElement("style");t.id="cronologia-fonts",t.textContent=[s("CR Barlow",da,400),s("CR Barlow",pa,500),s("CR Barlow",ha,"600 900"),s("CR Barlow Condensed",ua,500),s("CR Barlow Condensed",ma,600),s("CR Barlow Condensed",va,"700 900")].join(`
`),document.head.appendChild(t)}var $a=Mt`
  :host {
    --rv-body: ${Vt(ga)};
    --rv-display: ${Vt(xa)};
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
`,wa=Mt`
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
`;var ya=Mt`
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
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 5px;
    margin: 0 0 16px;
  }
  .model {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 10px 0 8px;
    border-radius: 15px;
    border: 1.5px solid var(--rv-line-strong);
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--rv-text-2);
  }
  .model > span {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .model .i {
    width: 22px;
    height: 22px;
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
  .person-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    border-top: 1px solid var(--rv-line);
  }
  .person-row:first-of-type {
    border-top: 0;
  }
  .person-row .grow {
    min-width: 0;
    display: flex;
    flex-direction: column;
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
`;var xe=class{constructor(t,e){this.url=t,this.onStatus=e,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.open=!0,this.backoff=1e3;let e=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))t.send(a);if(this.onStatus&&this.onStatus(!0),e)for(let a of this.reconnectHandlers)a()},t.onmessage=e=>{let a;try{a=JSON.parse(e.data)}catch{return}if(a.type==="result"){let i=this.pending.get(a.id);if(!i)return;if(this.pending.delete(a.id),a.success)i.resolve(a.result);else{let r=new Error(a.error&&a.error.message||"Falhou");r.code=a.error&&a.error.code,a.error&&a.error.page&&(r.page=a.error.page),i.reject(r)}}else if(a.type==="event"){let i=this.byId.get(a.id);i&&i.cb(a.event)}},t.onclose=()=>{let e=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let i=new Error("Sem conex\xE3o com o CronologIA");i.code="disconnected",a.reject(i)}this.pending.clear(),e&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(t){this.reconnectHandlers.push(t)}_send(t){let e=JSON.stringify(t);this.open?this.ws.send(e):this.queue.push(e)}sendMessagePromise(t){let e=this.nextId++;return new Promise((a,i)=>{this.pending.set(e,{resolve:a,reject:i}),this._send({...t,id:e})})}subscribeMessage(t,e){let a={cb:t,msg:e,id:null,first:null};this.subs.add(a);let i=new Promise((r,n)=>{a.first={resolve:r,reject:n}});return this.open&&this._startSub(a),i.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(t){let e=this.nextId++;t.id=e,this.byId.set(e,t),this.pending.set(e,{resolve:()=>{t.first&&t.first.resolve(),t.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(e),this.subs.delete(t),t.first&&t.first.reject(a),t.first=null)}}),this.ws.send(JSON.stringify({...t.msg,id:e}))}};function Wt(){try{if(window.parent===window)return null;let s=window.parent.document.querySelector("home-assistant");return s&&s.hass||null}catch{return null}}var _a=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function ka(){let s=Wt();return s&&s.themes&&typeof s.themes.darkMode=="boolean"?s.themes.darkMode:!!(_a&&_a.matches)}function Aa(){return{topbar:!(window.parent!==window),haptic(t){try{let e=window.parent;e!==window&&e.dispatchEvent(new e.CustomEvent("haptic",{detail:t}))}catch{}},openInHA(t){try{let e=window.parent;if(e!==window&&e.document){e.history.pushState(null,"",t),e.dispatchEvent(new e.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(t,"_top")}}}var Yt=class{constructor(){let t=new URL("ws",location.href);t.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new xe(t.href,e=>this.statusHandlers.forEach(a=>a(e)))}onStatus(t){this.statusHandlers.push(t)}onReconnect(t){this.conn.onReconnect(t)}call(t,e={}){return this.conn.sendMessagePromise({type:t,...e})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(t){return this.conn.subscribeMessage(t,{type:"cronologia/subscribe_calendars"})}subscribePrefs(t){return this.conn.subscribeMessage(t,{type:"cronologia/prefs/subscribe"})}subscribeEvents(t,e,a,i){return this.conn.subscribeMessage(i,{type:"calendar/event/subscribe",entity_id:t,start:e,end:a})}listEvents(t,e,a){return this.call("cronologia/events/list",{entity_id:t,start:e,end:a})}createEvent(t,e){return this.call("calendar/event/create",{entity_id:t,event:e})}updateEvent(t,e,a,{recurrenceId:i,range:r}={}){let n={entity_id:t,uid:e,event:a};return i&&(n.recurrence_id=i),r&&(n.recurrence_range=r),this.call("calendar/event/update",n)}deleteEvent(t,e,{recurrenceId:a,range:i}={}){let r={entity_id:t,uid:e};return a&&(r.recurrence_id=a),i&&(r.recurrence_range=i),this.call("calendar/event/delete",r)}setCalendarPrefs(t,e){return this.call("cronologia/prefs/set_calendar",{entity_id:t,prefs:e})}setAppPrefs(t){return this.call("cronologia/prefs/set_app",{prefs:t})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(t){return this.conn.subscribeMessage(t,{type:"cronologia/home/subscribe"})}setCheck(t,e,a){return this.call("cronologia/check/set",{key:t,done:e,kind:a})}maintDone(t,e){return this.call("cronologia/maint/done",{entity_id:t,uid:e})}maintUndo(t,e){return this.call("cronologia/maint/undo",{entity_id:t,uid:e})}payBill(t,e){return this.call("cronologia/contas/pagar",{conta:t,...e?{valor:e}:{}})}unpayBill(t){return this.call("cronologia/contas/desfazer",{conta:t})}newBill(t){return this.call("cronologia/contas/nova",{conta:t})}testAlert(t){return this.call("cronologia/notify/test",{target:t})}exportUrl({calendars:t,start:e,end:a}){let i=new URL("api/export/ics",location.href);return i.searchParams.set("calendars",t.join(",")),i.searchParams.set("start",e),i.searchParams.set("end",a),i.href}async extract(t){let e=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),a=await e.json().catch(()=>({}));if(!e.ok){let i=new Error(a.error||`Erro ${e.status}`);throw i.code=a.code,i}return a}};var Kt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],Ma=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],Y=s=>Kt.find(t=>t.id===s),Sa=s=>Y(Ma[s%Ma.length]);function St(s,t){let e=s.replace("#",""),a=parseInt(e.length===3?e.replace(/./g,i=>i+i):e,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${t})`}function N(s,t,e="c"){return`--${e}:${s.fill};--${e}i:${t?s.fill:s.ink};--${e}s:${St(s.fill,t?.18:.15)};`}var be=s=>(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var E=(s,t,e)=>`${s} ${s===1?t:e}`,D=(s,t=38)=>s&&s.length>t?s.slice(0,t-1).trimEnd()+"\u2026":s||"",I=s=>s&&s.charAt(0).toUpperCase()+s.slice(1);function Da(s){let t=[],e=/https?:\/\/[^\s<>"')]+/g,a=0,i;for(;i=e.exec(s||"");)i.index>a&&t.push({text:s.slice(a,i.index)}),t.push({url:i[0]}),a=i.index+i[0].length;return a<(s||"").length&&t.push({text:s.slice(a)}),t}var Ca=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],ht=["dom","seg","ter","qua","qui","sex","s\xE1b"],st=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Jt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],pt=s=>String(s).padStart(2,"0"),y=s=>`${s.getFullYear()}-${pt(s.getMonth()+1)}-${pt(s.getDate())}`,M=s=>`${pt(s.getHours())}:${pt(s.getMinutes())}`,A=s=>{let[t,e,a]=s.split("-").map(Number);return new Date(t,e-1,a)},k=s=>new Date(s.getFullYear(),s.getMonth(),s.getDate()),$=(s,t)=>{let e=new Date(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds());return e.setDate(e.getDate()+t),e},G=(s,t)=>new Date(s.getFullYear(),s.getMonth()+t,1),F=(s,t)=>s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate(),O=(s,t)=>Math.round((k(s)-k(t))/864e5),Dt=(s,t=0)=>$(k(s),-((s.getDay()-t+7)%7)),$e=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)?A(s):new Date(s);function q(s){let t=-s.getTimezoneOffset(),e=t>=0?"+":"-";return`${y(s)}T${M(s)}:00${e}${pt(Math.floor(Math.abs(t)/60))}:${pt(Math.abs(t)%60)}`}function R(s,t=new Date,{long:e=!0,cap:a=!0}={}){let i=O(s,t),r;return i===0?r="hoje":i===1?r="amanh\xE3":i===-1?r="ontem":(r=`${Ca[s.getDay()]}, ${s.getDate()} de ${e?st[s.getMonth()]:Jt[s.getMonth()]}`,s.getFullYear()!==t.getFullYear()&&(r+=` de ${s.getFullYear()}`)),a?I(r):r}var we=s=>`${Ca[s.getDay()]}, ${s.getDate()} de ${st[s.getMonth()]}`,B=(s,t=new Date)=>`${s.getDate()} ${Jt[s.getMonth()]}${s.getFullYear()!==t.getFullYear()?` ${s.getFullYear()}`:""}`;function Qt(s){let t=Math.round(s/6e4);if(t<1)return"agora";if(t<60)return`em ${t} min`;let e=Math.floor(t/60),a=t%60;if(e<24)return a&&e<4?`em ${e} h ${a} min`:`em ${e} h`;let i=Math.round(e/24);return`em ${E(i,"dia","dias")}`}function ye(s){let t=Math.round(s/6e4);if(t<60)return`${t} min`;let e=Math.floor(t/60),a=t%60;return a?`${e} h ${a} min`:`${e} h`}var Xt=[{id:"",label:"N\xE3o repete"},{id:"DAILY",label:"Todo dia"},{id:"WEEKLY",label:"Toda semana"},{id:"MONTHLY",label:"Todo m\xEAs"},{id:"YEARLY",label:"Todo ano"}];function ut(s){if(!s)return"";let t=Object.fromEntries(s.replace(/^RRULE:/,"").split(";").map(r=>r.split("="))),e=Number(t.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[t.FREQ];if(!a)return"Repete";let i=e>1?`A cada ${e} ${a[1]}`:a[0];if(t.BYDAY&&t.FREQ==="WEEKLY"){let r={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};i+=` (${t.BYDAY.split(",").map(n=>r[n]||n).join(", ")})`}if(t.COUNT)i+=`, ${E(Number(t.COUNT),"vez","vezes")}`;else if(t.UNTIL){let r=/^(\d{4})(\d{2})(\d{2})/.exec(t.UNTIL);r&&(i+=` at\xE9 ${Number(r[3])}/${Number(r[2])}/${r[1]}`)}return i}var Ct=s=>{let t=/FREQ=(\w+)/.exec(s||"");return t?t[1]:""};async function _e(s,t=1800){let e=a=>new Promise((i,r)=>{let n=new FileReader;n.onload=()=>i(String(n.result).split(",")[1]||""),n.onerror=()=>r(n.error),n.readAsDataURL(a)});try{let a=await createImageBitmap(s,{imageOrientation:"from-image"}),i=Math.min(1,t/Math.max(a.width,a.height)),r=document.createElement("canvas");r.width=Math.round(a.width*i),r.height=Math.round(a.height*i),r.getContext("2d").drawImage(a,0,0,r.width,r.height),a.close&&a.close();let n=await new Promise(o=>r.toBlob(o,"image/jpeg",.86));return{mime:"image/jpeg",data:await e(n),url:URL.createObjectURL(n)}}catch{return{mime:s.type||"image/jpeg",data:await e(s),url:URL.createObjectURL(s)}}}var ke={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em"}}},ki={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},Gt={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},L=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),Ea=s=>String(s).padStart(2,"0");var Ta=(s,t)=>`${s}|${t.uid||t.summary}|${t.recurrence_id||t.start}`;function Zt(s){let t=String(s||"").replace(/[^\d.,-]/g,"");if(!t)return null;t.includes(",")?t=t.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(t)&&!/\.\d{1,2}$/.test(t)&&(t=t.replace(/\./g,""));let e=Number(t);return Number.isFinite(e)&&e>0?Math.round(e*100)/100:null}var mt=(s,t=!0)=>s==null?"":s.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:t?2:0,maximumFractionDigits:t?2:0});function Ai(s){let t=/(\d+)\s*([a-zçê]+)/i.exec(L(s));if(!t)return null;let e=Math.max(1,Math.min(999,Number(t[1]))),a=t[2],i=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return i?{n:e,unit:i}:null}var vt=s=>s?`${s.n} ${s.n===1?Gt[s.unit][1]:Gt[s.unit][2]}`:"";function Ae(s,t,e=1){let a=new Date(s.getFullYear(),s.getMonth(),s.getDate()),i=t.n*e;if(t.unit==="dias")a.setDate(a.getDate()+i);else if(t.unit==="semanas")a.setDate(a.getDate()+7*i);else{let r=t.unit==="anos"?12*i:i,n=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+r);let o=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(n,o))}return a}var Mi=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Si(s){let t=[];for(let e of String(s||"").matchAll(Mi))t.push(`${e[3]}-${Ea(+e[2])}-${Ea(+e[1])}`);return t}var Di=s=>s.map(t=>`${t.slice(8,10)}/${t.slice(5,7)}/${t.slice(0,4)}`).join(", ");function za(s){let t=String(s||"").replace(/\r/g,"").split(`
`),e=0;for(;e<t.length&&!t[e].trim();)e++;let a=/^#\s*([a-z]+)\b/.exec(L(t[e])),i=a&&ki[a[1]];if(!i)return null;let r=Object.entries(ke[i].fields).map(([c,p])=>[c,L(p)]),n={};for(e++;e<t.length;e++){let c=/^([^:]{2,24}):\s*(.*)$/.exec(t[e]);if(!c)break;let p=L(c[1]),h=r.find(([,d])=>d===p||d.startsWith("aviso")&&p.startsWith("aviso"));if(!h)break;n[h[0]]=c[2].trim()}let o={kind:i,notes:t.slice(e).join(`
`).trim()};if(i==="remedio")o.dose=n.dose||"",o.who=n.who||"",o.alert=!/^(nao|desligado|off)/.test(L(n.alert));else if(i==="conta")o.value=Zt(n.value);else if(i==="rotina")o.who=n.who||"";else{o.who=n.who||"",o.every=Ai(n.every)||{n:6,unit:"meses"};let c=/(\d+)/.exec(n.warn||"");o.warn=c?Math.min(365,Number(c[1])):7,o.history=Si(n.history)}return o}function Fa(s){let t=[ke[s.kind].tag],e=(r,n)=>{n!=null&&String(n).trim()&&t.push(`${r}: ${String(n).replace(/\s*\n\s*/g," ").trim()}`)},a=ke[s.kind].fields;s.kind==="remedio"?(e(a.dose,s.dose),e(a.who,s.who),s.alert===!1&&e(a.alert,"n\xE3o")):s.kind==="conta"?e(a.value,s.value!=null?mt(s.value):""):s.kind==="rotina"?e(a.who,s.who):(e(a.who,s.who),e(a.every,vt(s.every)),e(a.warn,`${s.warn??7} ${(s.warn??7)===1?"dia":"dias"} antes`),e(a.history,Di((s.history||[]).slice(0,8))));let i=String(s.notes||"").trim();return i?`${t.join(`
`)}
${i}`:t.join(`
`)}var Ha=4,Ci=300*1e3;function te(s,t){let e=$e(t.start),a=$e(t.end),i=t.all_day!=null?!!t.all_day:/^\d{4}-\d{2}-\d{2}$/.test(t.start);return{key:Ta(s,t),kind:za(t.description),cal:s,uid:t.uid||null,rid:t.recurrence_id||null,rrule:t.rrule||null,summary:t.summary||"(sem t\xEDtulo)",description:t.description||"",location:t.location||"",allDay:i,start:e,end:a>e?a:$(e,i?1:0),raw:t}}var ee=class{constructor(t,e){this.api=t,this.onChange=e,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(t){let e=[...new Set(t)].sort();if(e.join()!==this.calendars.join()){this.calendars=e;for(let a of this.windows)this._syncWindow(a)}}ensure(t,e){let a=this._covering(t,e);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(r=>r.loaded);let i={start:$(k(t),-7),end:$(k(e),8),cals:new Map,used:Date.now()};return this.windows.push(i),this._syncWindow(i),this._gc(),!1}query(t,e,a=this.calendars){let i=this._covering(t,e),r=[];if(!i)return r;for(let n of a){let o=i.cals.get(n);if(o)for(let c of o.events)c.start<e&&c.end>t&&r.push(c)}return r.sort((n,o)=>n.start-o.start||Number(o.allDay)-Number(n.allDay)||n.summary.localeCompare(o.summary,"pt-BR"))}loading(t,e){let a=this._covering(t,e);return!a||[...a.cals.values()].some(i=>!i.loaded)}errors(){let t=new Map;for(let e of this.windows)for(let[a,i]of e.cals)i.error&&t.set(a,i.error);return t}refresh(t){for(let e of this.windows){let a=e.cals.get(t);a&&a.poll&&this._fetch(e,t,a)}}reloadAll(){for(let t of this.windows)for(let[e,a]of t.cals)a.poll&&this._fetch(t,e,a)}dispose(){for(let t of this.windows)for(let[e]of t.cals)this._drop(t,e);this.windows=[]}_covering(t,e){let a=null;for(let i of this.windows)i.start<=t&&i.end>=e&&(!a||i.end-i.start<a.end-a.start)&&(a=i);return a}_changed(){this.version++,this.onChange()}_syncWindow(t){for(let e of this.calendars)t.cals.has(e)||this._add(t,e);for(let e of[...t.cals.keys()])this.calendars.includes(e)||this._drop(t,e)}_add(t,e){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};t.cals.set(e,a);let i=q(t.start),r=q(t.end);if(this.noSubscribe)return this._startPolling(t,e,a);a.unsub=this.api.subscribeEvents(e,i,r,n=>{t.cals.has(e)&&(n&&Array.isArray(n.events)?(a.events=n.events.map(o=>te(e,o)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(n=>n&&n.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(t,e,a)):(a.loaded=!0,a.error=n&&n.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(t,e,a){return this._fetch(t,e,a),a.poll=setInterval(()=>this._fetch(t,e,a),Ci),null}async _fetch(t,e,a){try{let i=await this.api.listEvents(e,q(t.start),q(t.end));if(!t.cals.has(e))return;a.events=(i.events||[]).map(r=>te(e,r)),a.error=null}catch(i){a.error=i.message}a.loaded=!0,this._changed()}_drop(t,e){let a=t.cals.get(e);a&&(t.cals.delete(e),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(i=>typeof i=="function"&&i()).catch(()=>{}))}_gc(){if(!(this.windows.length<=Ha)){this.windows.sort((t,e)=>e.used-t.used);for(let t of this.windows.splice(Ha))for(let[e]of t.cals)this._drop(t,e)}}};function rt(s,t){let e=k(t),a=$(e,1);return s.filter(i=>i.start<a&&i.end>e)}function Na(s,t){let e=k(t).getTime(),a=e+864e5,i=s.filter(p=>!p.allDay).map(p=>({e:p,s:Math.max(p.start.getTime(),e),t:Math.min(Math.max(p.end.getTime(),p.start.getTime()+15*6e4),a)})).sort((p,h)=>p.s-h.s||h.t-p.t),r=[],n=[],o=-1,c=()=>{let p=[];for(let h of n){let d=p.findIndex(u=>u<=h.s);d<0?(d=p.length,p.push(h.t)):p[d]=h.t,h.lane=d}for(let h of n)r.push({...h,lanes:p.length});n=[]};for(let p of i)n.length&&p.s>=o&&c(),n.push(p),o=Math.max(o,p.t);return n.length&&c(),r.map(p=>({event:p.e,top:(p.s-e)/36e5,height:(p.t-p.s)/36e5,lane:p.lane,lanes:p.lanes}))}var Me=s=>s.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function Ei(s){return s.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Ti(s){let t=s.indexOf(":");if(t<0)return null;let e=s.slice(0,t),a=s.slice(t+1),[i,...r]=e.split(";"),n={};for(let o of r){let[c,p]=o.split("=");c&&(n[c.toUpperCase()]=(p||"").replace(/^"|"$/g,""))}return{name:i.toUpperCase(),params:n,value:a}}function Oa(s,t){try{let e=new Intl.DateTimeFormat("en-US",{timeZone:s,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(e.formatToParts(new Date(t)).map(r=>[r.type,r.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-t}catch{return null}}function Ra(s){let t=s.value.trim(),e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(t);if(!e)return null;let[,a,i,r,n,o,c,p]=e;if(n==null||s.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+i-1,+r)};if(p)return{allDay:!1,date:new Date(Date.UTC(+a,+i-1,+r,+n,+o,+(c||0)))};let h=s.params.TZID;if(h){let d=Date.UTC(+a,+i-1,+r,+n,+o,+(c||0)),u=Oa(h,d);if(u!=null){let m=d-u,f=Oa(h,m);return{allDay:!1,date:new Date(d-(f??u))}}}return{allDay:!1,date:new Date(+a,+i-1,+r,+n,+o,+(c||0))}}function zi(s){let t=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(s.trim());if(!t)return null;let[,e,a,i,r,n,o]=t,c=((+a||0)*7*86400+(+i||0)*86400+(+r||0)*3600+(+n||0)*60+(+o||0))*1e3;return e==="-"?-c:c}function Ia(s){let t=[],e=null,a=0;for(let r of Ei(s)){if(/^BEGIN:VEVENT/i.test(r)){e={},a=0;continue}if(!e)continue;if(/^BEGIN:/i.test(r)){a++;continue}if(/^END:VEVENT/i.test(r)){t.push(e),e=null;continue}if(/^END:/i.test(r)){a--;continue}if(a>0)continue;let n=Ti(r);n&&(n.name==="SUMMARY"?e.summary=Me(n.value):n.name==="DESCRIPTION"?e.description=Me(n.value):n.name==="LOCATION"?e.location=Me(n.value):n.name==="DTSTART"?e.dtstart=Ra(n):n.name==="DTEND"?e.dtend=Ra(n):n.name==="DURATION"?e.duration=zi(n.value):n.name==="RRULE"?e.rrule=n.value.trim():n.name==="STATUS"?e.status=n.value.trim().toUpperCase():n.name==="RECURRENCE-ID"&&(e.recurrence=!0))}let i=[];for(let r of t){if(!r.dtstart||r.status==="CANCELLED"||r.recurrence)continue;let n=r.dtstart.date,o=r.dtend?r.dtend.date:r.duration!=null?new Date(n.getTime()+r.duration):null,c=r.dtstart.allDay,p={title:(r.summary||"").trim()||"Evento",date:y(n),start:c?"":M(n),end:"",end_date:"",location:(r.location||"").trim(),notes:(r.description||"").trim().slice(0,4e3),repeat:"",rrule:r.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(r.rrule)?r.rrule:""};if(c){if(o){let h=new Date(o.getFullYear(),o.getMonth(),o.getDate()-1);h>n&&(p.end_date=y(h))}}else o&&o>n&&(p.end=M(o),y(o)!==y(n)&&(p.end_date=y(o)));i.push(p)}return i}var w=(s,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${jt(dt[s]||dt.calendar)}</svg>`,ft={"":{label:"Evento",icon:"calendar"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},Va=["SU","MO","TU","WE","TH","FR","SA"],Fi=["D","S","T","Q","Q","S","S"],Hi=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],Ni=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],Oi=s=>s.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),Se=s=>(s||"?").trim().charAt(0).toUpperCase(),Pa=s=>s<60?`${s} min`:`${Math.floor(s/60)} h${s%60?` ${s%60} min`:""}`;function La(s,t,e){let a=O(A(s),t);return e?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function Ri(s,t){return s.days<-1?`venceu h\xE1 ${-s.days} dias`:s.days===-1?"venceu ontem":s.days===0?"\xE9 hoje":s.days===1?"amanh\xE3":s.days<=60?`em ${s.days} dias`:`em ${B(A(s.due),t)}`}function qa(s,t){let e=Object.fromEntries(String(s||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(n=>n.split("="))),a={freq:"uma",byday:[t.getDay()],interval:3,dur:"sempre",until:y($(t,30)),days:7},i=Number(e.INTERVAL||1);e.FREQ==="DAILY"?Object.assign(a,i===1?{freq:"diario"}:i===2?{freq:"alternado"}:{freq:"intervalo",interval:i}):e.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:e.BYDAY?e.BYDAY.split(",").map(n=>Va.indexOf(n.slice(-2))).filter(n=>n>=0):[t.getDay()]}):e.FREQ==="MONTHLY"?a.freq="mensal":e.FREQ==="YEARLY"&&(a.freq="anual");let r=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(e.UNTIL||"");if(r){let n=r[7]?new Date(Date.UTC(+r[1],+r[2]-1,+r[3],+r[4],+r[5],+r[6])):new Date(+r[1],+r[2]-1,+r[3]);Object.assign(a,{dur:"ate",until:y(n)})}return a}var Ua=s=>class extends s{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],targets:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(t){return t.gerencia?t.gerencia.pago?{at:null,by:""}:null:this._ix().checks[t.key]||null}_targetName(t){let e=this._ix().targets.find(a=>a.id===t);return e?e.name:(t||"").replace(/^mobile_app_/,"").replace(/_/g," ")}_gerenciaEvents(t,e){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(i=>{let r=A(i.vencimento);return{key:`gerencia|${i.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:i.descricao,description:"",location:"",allDay:!0,start:r,end:$(r,1),raw:{},kind:{kind:"conta",value:i.valor},gerencia:i}})}),this._gEvCache.list.filter(i=>i.start<e&&i.end>t))}_billsList(){let t=this._ix(),e=k(new Date(this._now)),a=y(e),i=y($(e,8)),r=y($(e,-1)),n=[];for(let o of t.gerencia&&t.gerencia.contas||[]){let c=!o.pago,p=this._paidNow&&this._paidNow.has(o.id);(c?!(o.atrasada||o.vencimento<=i):!p&&!(o.vencimento>=r&&o.vencimento<=i))||n.push({id:o.id,source:"gerencia",title:o.descricao,value:o.valor,due:o.vencimento,paid:!!o.pago,overdue:c&&(o.atrasada||o.vencimento<a),sub:o.tipo==="fatura"?E(o.itens||0,"compra","compras"):o.categoria||"",c:o})}for(let o of t.bills||[]){let c=this._cal(o.cal);n.push({id:o.key,source:"cal",title:o.summary,value:o.value,due:o.due,paid:!!o.paid,overdue:o.overdue,sub:c?c.name:"",item:o})}return n.sort((o,c)=>Number(o.paid)-Number(c.paid)||o.due.localeCompare(c.due)||o.title.localeCompare(c.title,"pt-BR"))}_eventOfItem(t){return te(t.cal,{start:t.start,end:t.end,summary:t.summary,description:t.description,location:t.location,uid:t.uid,recurrence_id:t.rid,rrule:t.rrule})}_openIndexItem(t){this._openEvent(this._eventOfItem(t))}async _check(t,e){try{await this.api.setCheck(t.key,!0,e),this._haptic("success");let a=ft[e];this._showToast(`${D(t.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(t.key,!1,e).catch(i=>this._showToast(i.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _undoCheck(t,e){try{await this.api.setCheck(t.key,!1,e),this._haptic("light"),this._showToast(`${D(t.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(t.key,!0,e).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(t){if(t.source==="cal")return this._check(t.item,"conta");try{t.busy=!0,this.requestUpdate(),await this.api.payBill(t.id),(this._paidNow||(this._paidNow=new Set)).add(t.id),this._haptic("success"),this._showToast(`${D(t.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(t.id).catch(e=>this._showToast(e.message))})}catch(e){this._showToast(`O GerencIA n\xE3o deu baixa: ${e.message}`)}}async _unpay(t){if(t.source==="cal")return this._undoCheck(t.item,"conta");try{await this.api.unpayBill(t.id),this._showToast(`${D(t.title,26)}: volta para a pagar`)}catch(e){this._showToast(`N\xE3o consegui: ${e.message}`)}}async _maintDone(t){try{let e=await this.api.maintDone(t.cal,t.uid);this._haptic("success"),this._closeSheet();let a=e&&e.next?`Feito. Pr\xF3xima em ${B(A(e.next),new Date(this._now))}`:"Feito";this._showToast(a,e&&e.undo?{label:"Desfazer",run:()=>this.api.maintUndo(t.cal,t.uid).catch(i=>this._showToast(i.message))}:null)}catch(e){this._showToast(`N\xE3o consegui: ${e.message}`)}}async _testAlert(t){try{await this.api.testAlert(t),this._showToast(`Aviso de teste enviado para ${this._targetName(t)}`)}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}_goAlerts(){this._go("/mais").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#avisos");t&&t.scrollIntoView({block:"start"})}))}_ring(t,e,a=null,i=null){let n=2*Math.PI*15,o=Math.max(0,Math.min(1,t||0));return l`<span class="ring2 ${e}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${o>0?ct`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(o*n).toFixed(2)} ${n.toFixed(2)}`}></circle>`:v}
        </svg>
        ${a!=null?l`<b>${a}</b>`:i||v}
      </span>`}_kindIcon(t){return t.kind?l`<span class="kind-ic">${w(ft[t.kind.kind].icon)}</span>`:v}_renderMedsPanel(){let t=this._ix().meds||[];if(!t.length)return v;let e=t.filter(n=>n.taken).length,a=t.filter(n=>n.state==="atrasado"),i=[];for(let n of t){let o=n.who||"",c=i.find(p=>L(p.who)===L(o));c||i.push(c={who:o,list:[],notify:n.notify}),c.list.push(n)}let r=e===t.length;return l`<div class="panel meds ${a.length?"alert":""} ${r?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${w("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${r?"Tudo tomado":`${e} de ${t.length} ${t.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(e/t.length,a.length?"bad":r?"ok":"acc",`${e}/${t.length}`)}
        </div>
        ${a.length?l`<div class="meds-alert" role="alert">${w("triangle-alert")}<span>${a.length===1?l`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${Pa(a[0].late_min)}`:l`<b>${a.length} doses atrasadas</b>: ${a.map(n=>n.summary).join(", ")}`}</span></div>`:v}
        ${i.map(n=>l`${i.length>1||n.who?l`<div class="meds-who"><span class="avatar">${Se(n.who)}</span><b>${n.who||"Sem pessoa"}</b><small>${n.list.filter(o=>o.taken).length} de ${n.list.length}</small>${n.notify?l`<span class="who-bell" title="Aviso no celular: ${this._targetName(n.notify)}">${w("bell-ring")}</span>`:v}</div>`:v}
            ${n.list.map(o=>this._renderDose(o))}`)}
        ${this._alertsHint(t)}
      </div>`}_renderDose(t){let e=t.state,a=[t.dose,e==="tomado"?`tomou \xE0s ${M(new Date(t.taken.at))}${t.taken.by&&L(t.taken.by)!==L(t.who)?` \xB7 ${t.taken.by}`:""}`:e==="atrasado"?`atrasado ${Pa(t.late_min)}`:e==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return l`<div class="dose ${e}">
        <button class="dose-main" @click=${()=>this._openIndexItem(t)}>
          <span class="dose-time">${t.time||"dia"}</span>
          <span class="dose-tx"><b>${t.summary}</b>${a?l`<small>${a}</small>`:v}</span>
        </button>
        ${e==="tomado"?l`<button class="dose-done" @click=${()=>this._undoCheck(t,"remedio")} aria-label="Desmarcar ${t.summary}">${w("check")}</button>`:l`<button class="dose-btn ${e}" @click=${()=>this._check(t,"remedio")}>Tomei</button>`}
      </div>`}_alertsHint(t){let e=this._app("alerts",null)||{};if(e.meds===!1)return l`<button class="panel-foot" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>Avisos no celular desligados</span>${w("chevron-right")}</button>`;let a=[...new Set(t.filter(o=>o.alert&&!o.notify&&o.who).map(o=>o.who))],i=(e.caregivers||[]).length,r=[...new Set(t.filter(o=>o.alert&&o.notify).map(o=>o.who))],n=a.length&&!i?`Sem celular para ${a.join(", ")}: escolha quem avisar`:r.length?`Avisa no celular de ${r.join(", ")}${i?" e de quem cuida":""}`:"Escolha os celulares que recebem os avisos";return l`<button class="panel-foot ${a.length&&!i?"warn":""}" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>${n}</span>${w("chevron-right")}</button>`}_renderBillsPanel(){let t=this._billsList();if(!t.length)return v;let e=new Date(this._now),a=t.filter(c=>!c.paid),i=a.filter(c=>c.overdue),r=a.reduce((c,p)=>c+(p.value||0),0),n=this._billsAll?t:t.slice(0,5),o=this._ix().gerencia||{};return l`<div class="panel bills ${i.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="overline">Contas a pagar</span>
          ${a.length?l`<span class="bills-sum"><b>${mt(r,!1)}</b><small>${i.length?`${E(i.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:l`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${n.map(c=>{let p=A(c.due),h=O(p,e)===0;return l`<div class="bill ${c.paid?"paid":c.overdue?"late":h?"today":""}">
            <button class="bill-main" @click=${()=>c.source==="gerencia"?this._openSheet("bill",{b:c}):this._openIndexItem(c.item)}>
              <span class="bill-due"><b>${p.getDate()}</b><small>${Jt[p.getMonth()]}</small></span>
              <span class="bill-tx"><b>${c.title}</b><small>${c.value!=null?l`<span class="bill-val">${mt(c.value)}</span> · `:v}${[La(c.due,e,c.paid),c.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${c.paid?l`<button class="dose-done" @click=${()=>this._unpay(c)} aria-label="Desfazer pagamento de ${c.title}">${w("check")}</button>`:l`<button class="dose-btn ${c.overdue?"atrasado":h?"agora":""}" ?disabled=${c.busy} @click=${()=>this._pay(c)}>Paguei</button>`}
          </div>`})}
        ${t.length>5?l`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${w(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${t.length-5}`}</button>`:v}
        ${o.ligado?l`<div class="panel-foot plain">${w("wallet")}<span>${o.erro?`GerencIA: ${o.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:v}
      </div>`}_renderHomePanel(){let t=this._ix(),e=t.routines||[],a=(t.maint||[]).filter(n=>n.state!=="ok"),i=(t.maint||[]).length;if(!e.length&&!a.length)return i?l`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}<span>Manutenção da casa em dia · ${E(i,"item","itens")}</span>${w("chevron-right")}</button>`:v;let r=e.filter(n=>n.done).length;return l`<div class="panel chores" id="casa">
        ${e.length?l`<div class="chores-head"><span class="overline">Rotina da casa</span><small>${r} de ${e.length}</small></div>
              ${e.map(n=>l`<div class="chore ${n.done?"done":""}">
                  <button class="chk ${n.done?"on":""}" @click=${()=>n.done?this._undoCheck(n,"rotina"):this._check(n,"rotina")} aria-label="${n.done?"Desmarcar":"Marcar"} ${n.summary}">${n.done?w("check"):v}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(n)}><b>${n.summary}</b><small>${[n.time,n.who,n.done?`feito${n.done.by?` por ${n.done.by}`:""}`:""].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
                </div>`)}`:v}
        ${a.length?l`<div class="chores-head ${e.length?"sub":""}"><span class="overline">Manutenção da casa</span></div>
              ${a.map(n=>this._renderMaintRow(n))}`:v}
        ${i?l`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}Todas as manutenções (${i})</button>`:v}
      </div>`}_renderMaintRow(t){let e=new Date(this._now),a=t.state==="vencida"?"bad":t.state==="perto"?"warn":"ok";return l`<div class="maint ${t.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(t)}>
          ${this._ring(t.progress,a,null,w("wrench"))}
          <span class="maint-tx"><b>${t.summary}</b><small>${Ri(t,e)} · a cada ${vt(t.every)}${t.who?` \xB7 ${t.who}`:""}</small></span>
        </button>
        ${t.canMove?l`<button class="dose-btn ${t.state==="vencida"?"atrasado":t.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(t)}>Feito</button>`:v}
      </div>`}_renderMaintSheet(){let t=this._ix().maint||[];return l`${this._sheetHead("Manuten\xE7\xE3o da casa")}
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
        <div class="maint-list">${t.length?t.map(e=>this._renderMaintRow(e)):l`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${w("plus")}Nova manutenção</button></div>`}_renderKindFacts(t){let e=t.kind,a=new Date(this._now),i=this._checkOf(t),r=[];if(e.kind==="remedio"){e.dose&&r.push(["pill",`Dose: ${e.dose}`]),e.who&&r.push(["user-round",`Quem toma: ${e.who}`]);let c=this._ix().people.find(p=>L(p.name)===L(e.who));r.push(["bell-ring",e.alert?c&&c.notify?`Aviso no celular: ${this._targetName(c.notify)}`:"Aviso no celular: escolha o celular em Mais":"Sem aviso no celular"])}else e.kind==="conta"?e.value!=null&&r.push(["receipt",mt(e.value)]):e.kind==="rotina"?e.who&&r.push(["user-round",`Quem faz: ${e.who}`]):e.kind==="manutencao"&&(r.push(["repeat",`A cada ${vt(e.every)}, contando da \xFAltima vez`]),e.who&&r.push(["user-round",`Quem faz: ${e.who}`]),r.push(["bell-ring",`Aparece na Agora ${E(e.warn,"dia","dias")} antes`]),e.history&&e.history.length&&r.push(["check",`Feito em ${e.history.slice(0,4).map(c=>B(A(c),a)).join(", ")}`]));let n=ft[e.kind],o=v;if(e.kind==="manutencao"){let c=(this._ix().maint||[]).find(p=>p.cal===t.cal&&p.uid===t.uid);c&&c.canMove&&(o=l`<button class="btn primary kind-act" @click=${()=>this._maintDone(c)}>${w("check")}Feito hoje</button>`)}else if(t.start<$(k(a),2)){let c={key:t.key,summary:t.summary};o=i?l`<div class="kind-state">${w("circle-check")}<span>${I(n.done)}${i.at?` ${O(new Date(i.at),a)===0?"hoje":B(new Date(i.at),a)} \xE0s ${M(new Date(i.at))}`:""}${i.by?` \xB7 ${i.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(c,e.kind)}>Desfazer</button></div>`:l`<button class="btn primary kind-act" @click=${()=>this._check(c,e.kind).then(()=>this._closeSheet())}>${w("check")}${n.verb}</button>`}return l`${r.map(([c,p])=>l`<div class="fact">${w(c)}<span>${p}</span></div>`)}
        ${e.notes?l`<div class="fact notes">${w("file-text")}<span>${e.notes}</span></div>`:v}
        ${o}`}_renderBillSheet(){let t=this._form.b,e=((this._ix().gerencia||{}).contas||[]).find(r=>r.id===t.id)||t.c,a=new Date(this._now),i=A(e.vencimento);return l`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${e.descricao}</h3><p class="ev-cal">GerencIA · <b>${La(e.vencimento,a,e.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${w("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${w("receipt")}<span><b>${mt(e.valor)}</b>${e.tipo==="fatura"?` \xB7 ${E(e.itens||0,"compra","compras")} na fatura`:e.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${w("calendar")}<span>${O(i,a)<0?"Venceu":"Vence"} ${R(i,a,{cap:!1})}</span></div>
          ${e.categoria?l`<div class="fact">${w("layers")}<span>${e.categoria}</span></div>`:v}
          ${e.conta?l`<div class="fact">${w("wallet")}<span>${e.conta}</span></div>`:v}
        </div>
        <p class="sheet-note">${w("info")} ${e.pago?"J\xE1 est\xE1 paga no GerencIA.":e.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${e.pago?l`<button class="btn outline" @click=${()=>this._unpay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("undo-2")}Desfazer pagamento</button>`:l`<button class="btn primary" @click=${()=>this._pay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("check")}Paguei</button>`}
        </div>`}_kindCal(t){let e=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[t];return(a&&e.find(r=>a.test(r.name)&&r.canUpdate)||e.find(r=>r.id===this._defaultCal())||e[0]||{}).id||null}_openKindForm({kind:t="remedio",ev:e=null,copy:a=!1,date:i=null}={}){let r=this._writable(),n=this._ix().gerencia||{};if(!r.length&&!(t==="conta"&&n.ligado)&&!(e&&!a)){this._openSheet("nocal",{});return}let o=k(new Date),c=i?k(i):o,p={mode:"add",kind:t,cal:this._kindCal(t),title:"",date:y(c),times:t==="rotina"?["19:00"]:["08:00"],allDay:t!=="remedio",...qa(t==="conta"?"":"FREQ=DAILY",c),dose:"",who:"",whoOther:!1,alert:!0,value:"",repeat:"mensal",dest:n.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},last:y(o),warn:7,history:[],notes:"",location:""};if(e){let h=e.kind,d=qa(e.rrule,e.start);p={...p,...d,mode:a?"add":"edit",kind:h.kind,cal:a?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._kindCal(h.kind):e.cal,origCal:e.cal,uid:e.uid,rid:a?null:e.rid,title:e.summary,date:y(e.start),times:e.allDay?["09:00"]:[M(e.start)],allDay:e.allDay,dose:h.dose||"",who:h.who||"",alert:h.alert!==!1,value:h.value!=null?String(h.value.toFixed(2)).replace(".",","):"",repeat:d.freq==="mensal"?"mensal":d.freq==="anual"?"anual":"nao",dest:"cal",every:h.every||p.every,warn:h.warn??7,history:h.history||[],last:h.history&&h.history[0]||p.last,notes:h.notes||"",location:e.location||""}}this._openSheet("form",p),p.mode==="add"&&this.updateComplete.then(()=>{let h=this.renderRoot.querySelector(".sheet .ev-title-input");h&&h.focus()})}_kindRrule(t,e,a){let i;if(t.freq==="diario")i="FREQ=DAILY";else if(t.freq==="alternado")i="FREQ=DAILY;INTERVAL=2";else if(t.freq==="intervalo")i=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(t.interval)||3))}`;else if(t.freq==="semana")i=`FREQ=WEEKLY;BYDAY=${[...t.byday].sort().map(r=>Va[r]).join(",")}`;else if(t.freq==="mensal")i="FREQ=MONTHLY";else return null;if(t.dur!=="sempre"){let r=t.dur==="ate"?A(t.until):$(a,Math.max(1,Number(t.days)||1)-1);if(r<a)throw new Error("A data final \xE9 antes do come\xE7o");i+=e?`;UNTIL=${y(r).replace(/-/g,"")}`:`;UNTIL=${Oi(new Date(r.getFullYear(),r.getMonth(),r.getDate(),23,59,59))}`}return i}_kindEvents(t,{keepRrule:e=!0}={}){let a=(t.title||"").trim();if(!a)throw new Error(t.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let i={kind:t.kind,notes:t.notes};if(t.kind==="remedio")Object.assign(i,{dose:t.dose,who:t.who,alert:t.alert});else if(t.kind==="rotina")i.who=t.who;else if(t.kind==="conta"){if(i.value=Zt(t.value),!i.value)throw new Error("Coloque o valor")}else{if(!(t.every&&t.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(i,{who:t.who,every:t.every,warn:t.warn,history:t.mode==="edit"?t.history:t.last?[t.last]:[]})}let r={summary:a,description:Fa(i)};if((t.location||"").trim()&&(r.location=t.location.trim()),t.kind==="manutencao"){let f=t.mode==="edit"?A(t.date):Ae(A(t.last||y(new Date)),t.every);return[{...r,start:y(f),end:y($(f,1))}]}if(t.kind==="conta"){let f=A(t.date),b={...r,start:y(f),end:y($(f,1))};return e&&t.repeat!=="nao"&&(b.rrule=t.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[b]}let n=A(t.date);if(t.freq==="semana"){if(!t.byday.length)throw new Error("Escolha os dias da semana");if(t.mode==="add")for(let f=0;f<7&&!t.byday.includes(n.getDay());f++)n=$(n,1)}let o=t.kind==="rotina"&&t.allDay,c=e?this._kindRrule(t,o,n):null,p=c?{rrule:c}:{};if(o)return[{...r,start:y(n),end:y($(n,1)),...p}];let h=[...new Set((t.times||[]).filter(f=>/^\d{2}:\d{2}$/.test(f)))].sort();if(!h.length)throw new Error("Escolha o hor\xE1rio");let d=t.kind==="remedio"?15:30,u=f=>{if(t.freq==="alternado")return $(f,2);if(t.freq==="intervalo")return $(f,Math.max(2,Number(t.interval)||3));if(t.freq==="mensal")return new Date(f.getFullYear(),f.getMonth()+1,f.getDate());if(t.freq==="semana"){let b=$(f,1);for(let _=0;_<7&&!t.byday.includes(b.getDay());_++)b=$(b,1);return b}return $(f,1)},m=new Date;return h.map(f=>{let[b,_]=f.split(":").map(Number),T=n;t.mode==="add"&&t.freq!=="uma"&&new Date(T.getFullYear(),T.getMonth(),T.getDate(),b,_)<m&&(T=u(T));let V=new Date(T.getFullYear(),T.getMonth(),T.getDate(),b,_);return{...r,start:q(V),end:q(new Date(V.getTime()+d*6e4)),...p}})}async _saveKindForm(){let t=this._form;if(t.kind==="conta"&&t.dest==="gerencia"&&t.mode==="add"){let n=Zt(t.value);if(!(t.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!n)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:t.title.trim(),valor:n,vencimento:t.date,repete:t.repeat,categoria:t.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${o.message}`)}return}let e;try{e=this._kindEvents(t)}catch(n){this._showToast(n.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let i=e[0];if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:i});return}this._setForm({saving:!0});let r=ft[t.kind].label;try{if(t.mode==="add"){for(let n of e)await this.api.createEvent(t.cal,n);this._done(e.length>1?`${r} criado: ${e.length} hor\xE1rios em ${D(a.name,20)}`:`${r} criado em ${D(a.name,24)}`,t.cal,i.start)}else t.cal!==t.origCal?(await this.api.createEvent(t.cal,i),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`${r} movido para ${D(a.name,24)}`,t.cal,i.start)):(await this.api.updateEvent(t.cal,t.uid,i),this._done(`${r} salvo`,t.cal,i.start))}catch(n){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${n.message}`)}}_renderModelChips(t){let e=this._form;return l`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(ft).map(([a,i])=>l`<button class="model ${t===a?"on":""}" role="radio" aria-checked=${t===a?"true":"false"} @click=${()=>{if(t===a)return;let r=e.date?A(e.date):null;a?this._openKindForm({kind:a,date:r}):this._openForm({date:r})}}>${w(i.icon)}<span>${i.label}</span></button>`)}
      </div>`}_dateField(t,e,a,i,{quick:r=!0}={}){let n=new Date,o=k(n),c=r?[["Hoje",y(o)],["Amanh\xE3",y($(o,1))]]:[],p=c.some(([,h])=>h===e);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${c.map(([h,d])=>l`<button class="pick ${e===d?"on":""}" @click=${()=>a(d)}>${h}</button>`)}
          <button class="pick ${p?"":"on"}" @click=${()=>{let h=this.renderRoot.querySelector(`#${i}`);try{h.showPicker()}catch{h.focus(),h.click()}}}>${w("calendar")}<span>${!p&&e?I(R(A(e),n,{long:!1})):"Outra data"}</span>
            <input id=${i} class="hidden-input" type="date" tabindex="-1" .value=${e} @change=${h=>h.target.value&&a(h.target.value)} />
          </button>
        </div>
      </div>`}_whoField(t){let e=this._form,a=[...new Set([...(this._ix().people||[]).map(r=>r.name),...e.who?[e.who]:[]])],i=a.some(r=>r===e.who);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${a.map(r=>l`<button class="pick person ${e.who===r&&!e.whoOther?"on":""}" @click=${()=>this._setForm({who:e.who===r?"":r,whoOther:!1})}><span class="avatar sm">${Se(r)}</span><span>${r}</span></button>`)}
          <button class="pick ghost ${e.whoOther?"on":""}" @click=${()=>this._setForm({whoOther:!0,who:i?"":e.who})}>${w("plus")}<span>Outra pessoa</span></button>
        </div>
        ${e.whoOther?l`<input type="text" class="who-input" .value=${e.who} placeholder="Nome (pode ser o pet também)" @input=${r=>this._setForm({who:r.target.value})} />`:v}
      </div>`}_freqField(t){let e=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...e.kind==="rotina"?[["mensal","Todo m\xEAs"]]:[],["uma","S\xF3 uma vez"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([i,r])=>l`<button class="pick ${e.freq===i?"on":""}" @click=${()=>this._setForm({freq:i})}>${i!=="uma"?w("repeat"):v}<span>${r}</span></button>`)}</div>
        ${e.freq==="semana"?l`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(i=>{let r=e.byday.includes(i);return l`<button class="wdp ${r?"on":""}" aria-pressed=${r?"true":"false"} aria-label=${ht[i]} @click=${()=>this._setForm({byday:r?e.byday.filter(n=>n!==i):[...e.byday,i]})}>${Fi[i]}</button>`})}
            </div>`:v}
        ${e.freq==="intervalo"?l`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(e.interval)} @input=${i=>this._setForm({interval:i.target.value})} /><span class="tl">dias</span></div>`:v}
      </div>`}_durField(t){let e=this._form;if(e.freq==="uma")return v;let a=e.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([i,r])=>l`<button class="pick ${e.dur===i?"on":""}" @click=${()=>this._setForm({dur:i})}>${r}</button>`)}</div>
        ${e.dur==="dias"?l`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(e.days)} @input=${i=>this._setForm({days:i.target.value})} /><span class="tl">dias</span></div>`:v}
        ${e.dur==="ate"?l`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${e.until} min=${e.date} @change=${i=>i.target.value&&this._setForm({until:i.target.value})} /></div>`:v}
      </div>`}_calField(){let t=this._form,e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(i=>i.id===t.cal):e.filter(i=>i.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e;return a.length<=1?v:l`<div class="field">
        <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(i=>l`<button class="pick list ${t.cal===i.id?"on":""}" style=${N(i.color,this._dark)} @click=${()=>this._setForm({cal:i.id})}><span class="dot"></span><span>${D(i.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let t=this._form,e=t.kind,a=ft[e],i=new Date,r=this._ix().gerencia||{},n=e==="conta"&&t.dest==="gerencia"&&t.mode==="add",o={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[e],c=l`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${t.notes} placeholder=${e==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${h=>this._setForm({notes:h.target.value})}></textarea></label>`,p;if(e==="remedio"){let h=(this._ix().people||[]).find(u=>L(u.name)===L(t.who)),d=t.mode==="add";p=l`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${t.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${u=>this._setForm({dose:u.target.value})} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${d?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${d?l`<div class="chip-row" style="margin-bottom:10px">${Hi.map(([u,m])=>l`<button class="pick ${t.times.join()===m.join()?"on":""}" @click=${()=>this._setForm({times:[...m]})}>${u}</button>`)}</div>`:v}
            <div class="times">
              ${t.times.map((u,m)=>l`<span class="time-pill"><input type="time" .value=${u} aria-label="Horário ${m+1}" @change=${f=>f.target.value&&this._setForm({times:t.times.map((b,_)=>_===m?f.target.value:b)})} />${t.times.length>1?l`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:t.times.filter((f,b)=>b!==m)})}>${w("x")}</button>`:v}</span>`)}
              ${d&&t.times.length<8?l`<button class="pick ghost" @click=${()=>this._setForm({times:[...t.times,"12:00"]})}>${w("plus")}<span>Horário</span></button>`:v}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(t.mode==="add"?"Come\xE7a":"Data",t.date,u=>this._setForm({date:u}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          <div class="row switch-row">
            <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${t.alert?h&&h.notify?`Na hora e de novo se atrasar, no ${this._targetName(h.notify)}.`:t.who?l`Escolha o celular de ${t.who} em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${t.alert} @change=${u=>this._setForm({alert:u.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
          </div>
          ${c}`}else if(e==="conta")p=l`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${t.value} placeholder="0,00" @input=${h=>this._setForm({value:h.target.value})} /></span></label>
          ${this._dateField(t.repeat==="nao"?"Vence":"Primeiro vencimento",t.date,h=>this._setForm({date:h}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([h,d])=>l`<button class="pick ${t.repeat===h?"on":""}" @click=${()=>this._setForm({repeat:h})}>${h!=="nao"?w("repeat"):v}<span>${d}</span></button>`)}</div></div>
          ${r.ligado&&t.mode==="add"?l`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${t.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${w("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${t.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${w("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${w("info")}<span>${t.dest==="gerencia"?"Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio, com o Paguei daqui."}</span></span>
              </div>`:v}
          ${n&&(r.categorias||[]).length?l`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${h=>this._setForm({categoria:h.target.value})}><option value="">Sem categoria</option>${r.categorias.map(h=>l`<option value=${h.id} ?selected=${t.categoria===h.id}>${h.nome}</option>`)}</select></label>`:v}
          ${n?v:l`${this._calField()}${c}`}`;else if(e==="rotina")p=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${t.allDay?"on":""}" @click=${()=>this._setForm({allDay:!0})}>Qualquer hora</button>
              <button class="pick ${t.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1})}>${w("clock")}<span>Num horário</span></button>
              ${t.allDay?v:l`<input type="time" class="inline-time" .value=${t.times[0]||"19:00"} @change=${h=>h.target.value&&this._setForm({times:[h.target.value]})} aria-label="Horário" />`}
            </div>
          </div>
          ${this._freqField("Repete")}
          ${this._dateField(t.mode==="add"?"Come\xE7a":"Data",t.date,h=>this._setForm({date:h}),"kf-date")}
          ${this._durField("At\xE9 quando")}
          ${this._calField()}
          ${c}`;else{let h=t.mode==="edit"?A(t.date):Ae(A(t.last||y(i)),t.every);p=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row" style="margin-bottom:10px">${Ni.map(d=>l`<button class="pick ${t.every.n===d.n&&t.every.unit===d.unit?"on":""}" @click=${()=>this._setForm({every:{...d}})}>${vt(d)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(t.every.n)} @input=${d=>this._setForm({every:{...t.every,n:Math.max(1,Number(d.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(Gt).map(d=>l`<button class=${t.every.unit===d?"on":""} @click=${()=>this._setForm({every:{...t.every,unit:d}})}>${d}</button>`)}</div>
            </div>
            <span class="field-hint">${w("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${vt(t.every)}.</span></span>
          </div>
          ${t.mode==="add"?this._dateField("Feito pela \xFAltima vez",t.last,d=>this._setForm({last:d}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",t.date,d=>this._setForm({date:d}),"kf-date",{quick:!1})}
          <p class="next-line">${w("calendar-check")}<span>Próxima: <b>${I(R(h,i,{long:!1}))}</b>${O(h,i)>1?` \xB7 em ${E(O(h,i),"dia","dias")}`:""}</span></p>
          <div class="field"><span class="flabel">Mostrar na Agora</span><div class="chip-row">${[3,7,15,30].map(d=>l`<button class="pick ${t.warn===d?"on":""}" @click=${()=>this._setForm({warn:d})}>${d} dias antes</button>`)}</div></div>
          ${this._calField()}
          ${c}`}return l`
        ${this._sheetHead(t.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${t.mode==="add"?this._renderModelChips(e):v}
        <label class="field">
          <span class="flabel">${o[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder=${o[1]} @input=${h=>this._setForm({title:h.target.value})}></textarea>
        </label>
        ${p}
        ${t.rid?l`<div class="field-hint">${w("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:v}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveKindForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?n?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let t=this._ix(),e=this._app("alerts",null)||{},a=e.meds!==!1,i=e.late==null?30:e.late,r=e.caregivers||[],n=t.people||[],o=t.targets||[],c=this._app("people",null)||{},p=d=>this._saveAppPrefs({alerts:{meds:a,late:i,caregivers:r,...d}}),h=(d,u)=>{let m={...c};u?m[d]={notify:u}:delete m[d],this._saveAppPrefs({people:m})};return l`<div class="panel" id="avisos">
        <div class="overline">Avisos de remédio no celular</div>
        <p class="panel-lead">Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.</p>
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${d=>p({meds:d.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?l`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${n.length?n.map(d=>{let u=c[d.name]&&c[d.name].notify;return l`<div class="person-row">
                        <span class="avatar">${Se(d.name)}</span>
                        <span class="grow"><b>${d.name}</b><small>${d.person?"Pessoa do Home Assistant":"S\xF3 no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${d.name}" @change=${m=>h(d.name,m.target.value)}>
                          <option value="" ?selected=${!u}>${d.auto?`Autom\xE1tico: ${this._targetName(d.auto)}`:"Sem celular"}</option>
                          ${o.map(m=>l`<option value=${m.id} ?selected=${u===m.id}>${m.name}</option>`)}
                        </select>
                        ${d.notify?l`<button class="icon-btn" aria-label="Testar aviso para ${d.name}" @click=${()=>this._testAlert(d.notify)}>${w("bell-ring")}</button>`:v}
                      </div>`}):l`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${o.length?v:l`<span class="field-hint">${w("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>`}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([d,u])=>l`<button class="pick ${i===d?"on":""}" @click=${()=>p({late:d})}>${u}</button>`)}</div>
              </div>
              ${o.length?l`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${o.map(d=>{let u=r.includes(d.id);return l`<button class="pick ${u?"on":""}" aria-pressed=${u?"true":"false"} @click=${()=>p({caregivers:u?r.filter(m=>m!==d.id):[...r,d.id]})}>${w("smartphone")}<span>${d.name}</span></button>`})}</div>
                    <span class="field-hint">${w("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`:v}`:v}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`}_renderGerenciaPanel(){let t=this._ix().gerencia||{},e=(t.contas||[]).filter(i=>!i.pago).length,a=t.ligado?t.erro?"warn":"ok":"off";return l`<div class="panel" id="gerencia">
        <div class="overline">Contas do GerencIA</div>
        <div class="ai-state ${a}"><span class="dot"></span><div>
          <b>${t.ligado?t.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${t.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${t.ligado?t.erro||`${E(e,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${t.ligado?l`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${i=>this._saveAppPrefs({gerencia_hidden:i.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:v}
      </div>`}};var Ba="cronologia.theme",ja="cronologia.mode",De={CREATE:1,DELETE:2,UPDATE:4},Ce=(s,t)=>(Number(s)&t)===t,nt=48,Ii={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},Pi=s=>Ii[s]||{label:s?I(s.replace(/_/g," ")):"Outros",icon:"calendar"},g=(s,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${jt(dt[s]||dt.calendar)}</svg>`,ae={get(s,t){try{let e=localStorage.getItem(s);return e==null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}},Ee=(s,t,e,a,i)=>ct`<line class=${i} x1=${s} y1=${t} x2=${e} y2=${a}></line>`,Ya=(s,t)=>ct`<path class=${t} d=${s}></path>`,Li=s=>s.allDay?"Dia todo":`${M(s.start)} \u2013 ${M(s.end)}`,qi=s=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`,Te=class extends Ua(X){static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[$a,wa,ya];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=ae.get(Ba,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=k(new Date),this._mode=ae.get(ja,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),ba(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(t){t.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(t){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let e=this.renderRoot.querySelector(".tgrid-scroll");if(e){this._scrollWeek=!1;let a=new Date,i=this._view().name==="calendar"&&F(this._cursor,a)?Math.max(0,a.getHours()-1):7;e.scrollTop=i*nt}}t.has("_path")&&this._view().name==="more"&&this._refreshAi(!1)}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let t=this._theme==="dark"?!0:this._theme==="light"?!1:ka();t!==this._dark&&(this._dark=t)}_setTheme(t){this._theme=t,ae.set(Ba,t),this._syncDark()}async _start(){this._started=!0,this._store=new ee(this.api,()=>this._ver++),this.api.onStatus(t=>this._online=t),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(t=>this._onCalendar(t)).catch(()=>{}),this.api.subscribePrefs(t=>this._setPrefs(t)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(t=>this._home=t).catch(()=>{})}async _boot(t){try{let e=await this.api.bootstrap();this._version=e.version||"",this._user=e.user||{name:""},this._ai=e.ai||this._ai,this._aiAt=Date.now(),this._states=e.states||{},this._entities=e.entities||{},this._devices=e.devices||{},this._prefs=e.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),t&&this._store.reloadAll()}catch(e){this._ready||(this._bootError=e.message||String(e)),t||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(t){let e={...this._states},a=t.entity_id in e;t.new_state?e[t.entity_id]=t.new_state:delete e[t.entity_id],this._states=e,(!a||!t.new_state)&&this.api.registry().then(i=>{this._entities=i.entities||{},this._devices=i.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(t){t&&(this._prefs={calendars:t.calendars||{},app:t.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(t=>!t.hidden).map(t=>t.id))}_app(t,e){let a=this._prefs.app?this._prefs.app[t]:void 0;return a===void 0?e:a}_accent(){return Y(this._app("accent","turquesa"))||Y("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let t=Object.keys(this._states).map(a=>{let i=this._states[a],r=this._entities[a]||{},n=r.device_id?this._devices[r.device_id]:null,o=Pi(r.platform),c=i.attributes&&i.attributes.friendly_name||a;return{id:a,st:i,reg:r,dev:n,plat:o,orig:c}});t.sort((a,i)=>a.plat.label.localeCompare(i.plat.label,"pt-BR")||a.orig.localeCompare(i.orig,"pt-BR"));let e=t.map(({id:a,st:i,reg:r,dev:n,plat:o,orig:c},p)=>{let h=(this._prefs.calendars||{})[a]||{},d=Number(i.attributes&&i.attributes.supported_features)||0;return{id:a,name:h.name||c,origName:c,group:o.label,icon:o.icon,device:n?n.name_by_user||n.name:null,color:Y(h.color)||Sa(p),colorId:h.color||null,hidden:!!h.hidden,features:d,canCreate:Ce(d,De.CREATE),canUpdate:Ce(d,De.UPDATE),canDelete:Ce(d,De.DELETE),unavailable:i.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:e},e}_cal(t){return this._cals().find(e=>e.id===t)}_visible(){return this._cals().filter(t=>!t.hidden)}_writable(){return this._cals().filter(t=>t.canCreate&&!t.unavailable)}_defaultCal(){let t=this._writable(),e=this._app("default_calendar",null);return(t.find(a=>a.id===e)||t.find(a=>!a.hidden)||t[0]||{}).id||null}_events(t,e){this._store.ensure(t,e);let a=this._store.query(t,e),i=this._gerenciaEvents(t,e);return i.length?[...a,...i].sort((r,n)=>r.start-n.start||Number(n.allDay)-Number(r.allDay)||r.summary.localeCompare(n.summary,"pt-BR")):a}async _saveCalPrefs(t,e){try{this._setPrefs(await this.api.setCalendarPrefs(t,e))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(t){try{this._setPrefs(await this.api.setAppPrefs(t))}catch(e){this._showToast(`N\xE3o consegui salvar: ${e.message}`)}}_view(){let t=(this._path||"").replace(/\/+$/,"");return t==="/calendario"?{name:"calendar"}:t==="/agendas"?{name:"calendars"}:t==="/mais"?{name:"more"}:{name:"now"}}async _go(t,e=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(e?0:1);e?history.replaceState({rvDepth:a,rvPath:t},""):history.pushState({rvDepth:a,rvPath:t},""),this._path=t,t==="/calendario"&&(this._scrollWeek=!0);let i=this.renderRoot&&this.renderRoot.querySelector("main");i&&i.scrollTo({top:0,behavior:"instant"})}_goTab(t){let e=this._view().name;if(t===""){if(e==="now"){let i=this.renderRoot.querySelector("main");i&&i.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(t==="/calendario"&&e==="calendar"){this._cursor=k(new Date),this._scrollWeek=!0;return}this._go(t,e!=="now")}_openDay(t,e){this._cursor=k(t),e&&this._setMode(e),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(t){this._mode=t,ae.set(ja,t),this._scrollWeek=!0}_popEntry(t){if(!(history.state&&history.state[t]))return Promise.resolve();let e=new Promise(a=>{let i=()=>{clearTimeout(r),this._popWaiters=(this._popWaiters||[]).filter(n=>n!==i),this._popping===e&&(this._popping=null),a()},r=setTimeout(i,600);this._popWaiters=[...this._popWaiters||[],i]});return this._popping=e,history.back(),e}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let t=history.state&&history.state.rvPath||"";t!==this._path&&(this._path=t);for(let e of[...this._popWaiters||[]])e()}async _openSheet(t,e=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=t,this._form=e,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(t){this._form={...this._form,...t}}_openInHA(t){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(t)}_haptic(t){this.env&&this.env.haptic&&this.env.haptic(t)}_showToast(t,e=null){clearTimeout(this._toastTimer),this._toast={text:t,action:e,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,e?5e3:2800)}_userName(){let t=Wt();return(this._user&&this._user.name||t&&t.user&&t.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let t=Wt();return t&&t.user?!!t.user.is_admin:!0}_openEvent(t){if(t.gerencia){this._openSheet("bill",{b:{id:t.gerencia.id,c:t.gerencia}});return}this._openSheet("event",{ev:t})}_money(t){return t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:t=null,date:e=null,hour:a=null,cal:i=null,copy:r=!1}={}){if(t&&t.kind)return this._openKindForm({ev:t,copy:r});if(!this._writable().length&&!(t&&!r)){this._openSheet("nocal",{});return}let o;if(t){let c=t.allDay?$(t.end,-1):t.end;o={mode:r?"add":"edit",cal:r?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._defaultCal():t.cal,origCal:t.cal,uid:t.uid,rid:r?null:t.rid,title:t.summary,allDay:t.allDay,date:y(t.start),endDate:t.allDay?O(c,t.start)>0?y(c):"":F(t.start,t.end)?"":y(t.end),start:t.allDay?"09:00":M(t.start),end:t.allDay?"10:00":M(t.end),repeat:Ct(t.rrule),rrule:t.rrule||"",location:t.location,notes:t.description}}else{let c=e?k(e):k(new Date),p=new Date,h=a??(F(c,p)?Math.min(23,p.getHours()+1):9),d=u=>String(u).padStart(2,"0");o={mode:"add",cal:i&&this._cal(i)&&this._cal(i).canCreate?i:this._defaultCal(),title:"",allDay:!1,date:y(c),endDate:"",start:`${d(h)}:00`,end:`${d(Math.min(23,h+1))}:${h+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}this._openSheet("form",o),o.mode==="add"&&!o.title&&this.updateComplete.then(()=>{let c=this.renderRoot.querySelector(".sheet .ev-title-input");c&&c.focus()})}_eventFromForm(t,{keepRrule:e=!0}={}){if(t.kind)return this._kindEvents(t,{keepRrule:e})[0];let a=(t.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(t.date||""))throw new Error("Escolha a data");let i={summary:a};if(t.allDay){let r=t.endDate&&t.endDate>t.date?t.endDate:t.date;i.start=t.date,i.end=y($(A(r),1))}else{let[r,n]=(t.start||"09:00").split(":").map(Number),[o,c]=(t.end||t.start||"10:00").split(":").map(Number),p=A(t.date),h=new Date(p.getFullYear(),p.getMonth(),p.getDate(),r,n),d=t.endDate&&t.endDate>t.date?A(t.endDate):p,u=new Date(d.getFullYear(),d.getMonth(),d.getDate(),o,c);u<=h&&(u=$(u,1)),u-h<6e4&&(u=new Date(h.getTime()+30*6e4)),i.start=q(h),i.end=q(u)}if((t.location||"").trim()&&(i.location=t.location.trim()),(t.notes||"").trim()&&(i.description=t.notes.trim()),e){let r=t.rrule&&Ct(t.rrule)===t.repeat?t.rrule:t.repeat?`FREQ=${t.repeat}`:"";r&&(i.rrule=r)}return i}async _saveForm(){let t=this._form;if(t.kind)return this._saveKindForm();let e;try{e=this._eventFromForm(t)}catch(i){this._showToast(i.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:e});return}this._setForm({saving:!0});try{t.mode==="add"?(await this.api.createEvent(t.cal,e),this._done(`Evento criado em ${D(a.name,24)}`,t.cal,e.start)):t.cal!==t.origCal?(await this.api.createEvent(t.cal,e),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`Evento movido para ${D(a.name,24)}`,t.cal,e.start)):(await this.api.updateEvent(t.cal,t.uid,e),this._done("Evento salvo",t.cal,e.start))}catch(i){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${i.message}`)}}_done(t,e,a){this._haptic("success"),this._closeSheet(),this._store.refresh(e);let i=a?k(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?A(a):a)):null;this._showToast(t,i&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(i)}:null)}async _applyScope(t){let e=this._form,a={recurrenceId:e.rid,range:t==="future"?"THISANDFUTURE":void 0};try{if(e.action==="edit"){let i=e.event;t==="one"&&(i=this._eventFromForm(e,{keepRrule:!1})),await this.api.updateEvent(e.cal,e.uid,i,a),this._done(t==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",e.cal,i.start)}else await this.api.deleteEvent(e.cal,e.uid,t==="all"?{}:a),this._done(t==="all"?"A s\xE9rie toda foi apagada":t==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",e.cal)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}}_askDelete(t){if(t.rid){this._openSheet("scope",{action:"delete",cal:t.cal,uid:t.uid,rid:t.rid,title:t.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${D(t.summary,28)}\u201D?`,text:`${I(R(t.start,new Date(this._now)))} \xB7 ${Li(t)}. Ele sai do calend\xE1rio ${D((this._cal(t.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(t.cal,t.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(t.cal);let e={summary:t.summary,start:t.raw.start,end:t.raw.end};t.location&&(e.location=t.location),t.description&&(e.description=t.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(t.cal,e).then(()=>this._store.refresh(t.cal)).catch(a=>this._showToast(a.message))})}catch(e){this._showToast(`N\xE3o consegui apagar: ${e.message}`)}}})}_openImport(t="pick",e={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let i=this._openSheet("import",{target:a,step:t==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...e});return t==="photos"&&this._pickFiles("photos"),t==="scan"&&this._openCamera(),t==="text"&&this._focusSheetText(),t==="ics"&&this._pickFiles("ics"),i}_focusSheetText(){this.updateComplete.then(()=>{let t=this.renderRoot.querySelector(".sheet textarea");t&&t.focus()})}_pickFiles(t){let e=this.renderRoot.querySelector(t==="scan"?"#cr-scan":t==="ics"?"#cr-ics":"#cr-photos");e&&(e.value="",e.click())}_releaseImages(){let t=this._form;if(t&&t.images)for(let e of t.images)e.url&&URL.revokeObjectURL(e.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(t){let e=[...t.target.files||[]].filter(r=>!r.type||r.type.startsWith("image/")).slice(0,6);if(t.target.value="",!e.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let i=[];for(let r of e)i.push(await _e(r));this._readImages(i,a)}async _onIcsFile(t){let e=t.target.files&&t.target.files[0];if(t.target.value="",!e)return;let a;try{a=Ia(await e.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(i=>({...i,on:!0})),provider:"ics",fileName:e.name,note:null,error:null})}_readImages(t,e){if(this._sheet!=="import"||!t.length)return;let a=e?[...this._form.images||[],...t]:(this._releaseImages(),t);this._setForm({step:"loading",images:a,prevStep:e?"review":"pick",loadingText:t.length>1?`Lendo ${t.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:t,appending:e})}async _runExtract({text:t,images:e,appending:a=!1}){let i=this._importToken=Date.now(),r=()=>i===this._importToken&&this._sheet==="import",n=a?this._form.items||[]:[];try{let o=await this.api.extract({text:t,images:e?e.map(({data:p,mime:h})=>({data:p,mime:h})):void 0});if(!r())return;let c=o.events||[];if(!c.length){let p=t?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:p}):this._setForm({step:t?"text":"pick",error:p});return}this._haptic("success"),this._setForm({step:"review",items:[...n,...c.map(p=>({...p,on:!0}))],provider:o.provider||null,note:null,error:null})}catch(o){if(!r())return;a?this._setForm({step:"review",note:o.message||"Algo deu errado"}):this._setForm({step:t?"text":"pick",error:o.message||"Algo deu errado"})}}_readText(){let t=(this._form.text||"").trim();if(!t)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:t})}async _pasteClipboard(){try{let t=await navigator.clipboard.readText();if(!t)throw new Error("empty");this._setForm({text:t,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(t,e){let a=this._form.items.slice();a[t]={...a[t],...e},this._setForm({items:a})}_itemEvent(t){let e=i=>{let[r,n]=i.split(":").map(Number),o=Math.min(1439,r*60+n+60);return`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[t.repeat]||"";return this._eventFromForm({title:t.title,date:t.date,endDate:t.end_date||"",allDay:!t.start,start:t.start,end:t.end||(t.start?e(t.start):""),repeat:t.rrule?Ct(t.rrule):a,rrule:t.rrule||"",location:t.location,notes:t.notes})}async _importAdd(){let t=this._form,e=t.items.filter(n=>n.on&&(n.title||"").trim()),a=this._cal(t.target);if(!e.length||!a)return;this._setForm({adding:!0});let i=0,r=null;for(let n of e)try{let o=this._itemEvent(n);await this.api.createEvent(t.target,o),i++,(!r||o.start<r)&&(r=o.start)}catch(o){this._showToast(`\u201C${D(n.title,24)}\u201D: ${o.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),i&&this._done(`${E(i,"evento adicionado","eventos adicionados")} em ${D(a.name,20)}`,t.target,r)}async _openCamera(){let t=navigator.mediaDevices;if(!t||!t.getUserMedia){this._pickFiles("scan");return}let e=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:e,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(o=>o.stop());return}this._stream=a;let i=a.getVideoTracks()[0],r=i&&i.getCapabilities?i.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!r.torch},await this.updateComplete;let n=this.renderRoot.querySelector(".cam video");n&&(n.srcObject=a,n.play().catch(()=>{}))}catch(a){if(!this._cam)return;let i=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:i?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(t=>t.stop()),this._stream=null}_closeCamera(t=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let e of this._cam.shots||[])URL.revokeObjectURL(e.url);this._cam=null,t||this._popEntry("rvCam")}}async _toggleTorch(){let t=this._stream&&this._stream.getVideoTracks()[0];if(!t)return;let e=!this._cam.torch;try{await t.applyConstraints({advanced:[{torch:e}]}),this._cam={...this._cam,torch:e}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let t=this.renderRoot.querySelector(".cam video");if(!t||!t.videoWidth||!this._cam||this._cam.shots.length>=6)return;let e=1800,a=Math.min(1,e/Math.max(t.videoWidth,t.videoHeight)),i=document.createElement("canvas");i.width=Math.round(t.videoWidth*a),i.height=Math.round(t.videoHeight*a),i.getContext("2d").drawImage(t,0,0,i.width,i.height);let r=await new Promise(o=>i.toBlob(o,"image/jpeg",.86));if(!r||!this._cam)return;let n=await _e(r,e);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,n],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let t=this._cam.shots,e=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(t,e&&this._form.step==="review")}_cameraFallback(){let t=this._cam&&this._cam.appending;this._closeCamera(),t&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(t=!0){if(!(!t&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(e){this._ai={...this._ai,ready:!1,images:!1,reason:e.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(t){await this._saveAppPrefs({ai_entity:t||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#leitura-ia");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(t=>t.id),range:"12m"})}_exportRange(t){let e=k(new Date);return t==="3m"?[e,G(e,3)]:t==="year"?[G(e,-12),G(e,12)]:[e,G(e,12)]}render(){if(!this._ready)return l`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?l`${g("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:l`<span class="spin">${g("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let t=this._view(),e=this._accent(),a=this._dark,i=`--rv-accent:${e.fill};--rv-accent-ink:${a?e.fill:e.ink};--rv-accent-soft:${St(e.fill,a?.18:.14)};--rv-accent-faint:${St(e.fill,a?.08:.07)};--rv-accent-ink-light:${e.ink};`,r;return t.name==="calendar"?r=this._renderCalendar():t.name==="calendars"?r=this._renderCalendars():t.name==="more"?r=this._renderMore():r=this._renderNow(),l`
      <div class="root" style=${i}>
        <div class="app">
          ${!this.env||this.env.topbar?l`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:v}
          ${this._online?v:l`<div class="offline">${g("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${r}</main>
          ${this._renderNav(t)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${n=>this._onIcsFile(n)} />
      </div>
    `}_renderNav(t){let e=(a,i,r,n)=>l`<button class="tab ${t.name===a?"on":""}" @click=${()=>this._goTab(i)} aria-label=${r}>${g(n)}<span>${r}</span></button>`;return l`<nav>
      <div class="tabs">
        ${e("now","","Agora","clock-3")} ${e("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:t.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${g("plus")}</span><span>Novo</span>
        </button>
        ${e("calendars","/agendas","Agendas","layers")} ${e("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(t,e,a=v){let i=this._userName(),r=this._online?e:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return l`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${i?` \xB7 Ol\xE1, ${i}`:""}</p>
      <h1 class="page-title">${t}</h1>
      ${r?l`<p class="status"><span class="dot ${r.tone||""}" aria-hidden="true"></span><span>${r.text}</span></p>`:v}
      ${a}
    </header>`}_colorOfEvent(t){if(t.gerencia)return Y("ouro");let e=this._cal(t.cal);return e&&e.color||this._accent()}_renderRow(t,e,{showCal:a=!0}={}){let i=this._now,r=t.end.getTime()<=i,n=t.start.getTime()<=i&&t.end.getTime()>i&&!t.allDay,o=this._cal(t.cal),c;if(t.allDay){let m=O(t.end,t.start);c=l`<b>Dia</b><small>${m>1?`${O(e,t.start)+1}/${m}`:"todo"}</small>`}else{let m=F(t.start,e),f=F(t.end,e)||t.end.getHours()===0&&t.end.getMinutes()===0&&O(t.end,e)===1;c=l`<b>${m?M(t.start):"\u2026"}</b><small>${f?M(t.end):"segue"}</small>`}let p=t.kind,h=p&&p.kind!=="manutencao"&&this._checkOf(t),u=[...p?p.kind==="remedio"?[p.dose,p.who]:p.kind==="conta"&&p.value!=null?[this._money(p.value)]:[p.who]:[],t.location,a?o?o.name:t.gerencia?"GerencIA":"":""].filter(Boolean).join(" \xB7 ");return l`<button class="ev-row ${r?"past":""} ${n?"live":""} ${h?"done":""}" style=${N(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="ev-time">${c}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${this._kindIcon(t)}${t.summary}${h?l`<span class="ev-done">${g("check")}</span>`:v}</span>${u?l`<span class="ev-sub">${u}</span>`:v}</span>
      ${t.rrule?l`<span class="ev-rep" title=${ut(t.rrule)}>${g("repeat")}</span>`:v}
    </button>`}_renderNow(){let t=new Date(this._now),e=k(t),a=this._events($(e,-1),$(e,9)).filter(x=>!x.kind),i=this._store.loading($(e,-1),$(e,9)),r=this._ix().meds.filter(x=>x.state==="atrasado"),n=rt(a,e),o=x=>x.end-x.start>=12*36e5,c=n.filter(x=>x.allDay||o(x)),p=n.filter(x=>!x.allDay&&!o(x)),h=p.filter(x=>x.start<=t&&x.end>t).sort((x,S)=>S.start-x.start),u=a.filter(x=>!x.allDay&&x.start>t&&!o(x)).sort((x,S)=>x.start-S.start)[0],m=this._visible();if(!this._cals().length)return this._renderNoCalendars();let f=p.filter(x=>x.end>t).length,b=r.length?{text:`${I(we(t))} \xB7 ${r.length===1?`${r[0].summary} atrasado`:`${r.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${I(we(t))} \xB7 ${n.length?`${E(n.length,"evento","eventos")} hoje`:"nada hoje"}${f&&f<p.length?` \xB7 ${f} pela frente`:""}`},_;if(h.length){let x=h[0],S=this._cal(x.cal);_=this._ticket(x,{label:"Agora",pill:`termina ${Qt(x.end-t)}`,when:l`<b>${M(x.start)}</b> – <b>${M(x.end)}</b> · ${ye(x.end-x.start)}`,stub:u?l`<span class="tk-next">Depois <b>${M(u.start)}</b> ${u.summary}</span>`:l`<span class="dot"></span><span>${[S&&S.name,x.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t,live:!0})}else if(u){let x=this._cal(u.cal);_=this._ticket(u,{label:"A seguir",pill:Qt(u.start-t),when:l`<b>${M(u.start)}</b> – ${M(u.end)} · ${F(u.start,t)?"hoje":R(u.start,t,{long:!1,cap:!1})}`,stub:l`<span class="dot"></span><span>${[x&&x.name,u.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t})}else i||(_=l`<div class="hero-ev ticket empty" style=${N(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,t)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let T=this._showAllDay||c.length<=3?c:c.slice(0,2),V=[];for(let x=1;x<=7;x++){let S=$(e,x),W=rt(a,S).filter(ot=>!(ot.allDay&&ot.start<S));W.length&&V.push({d:S,list:W})}let z=l`<div class="now-line"><span>${M(t)}</span></div>`,H=!1;return l`<section class="page">
      ${this._renderHead("Hoje",b)}
      ${m.length?v:l`<div class="hint-card">${g("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/agendas")}>Mostrar</button></div>`}
      ${this._renderMedsPanel()} ${this._renderBillsPanel()}
      ${_||v}
      ${c.length?l`<div class="allday">
            ${T.map(x=>l`<button class="ad-chip" style=${N(this._colorOfEvent(x),this._dark)} @click=${()=>this._openEvent(x)}><span class="dot"></span><span>${x.summary}</span></button>`)}
            ${c.length>T.length?l`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${c.length-T.length} o dia todo</button>`:v}
          </div>`:v}
      <div class="panel agenda">
        <div class="overline">Hoje · ${B(t,t)}</div>
        ${p.length?p.map(x=>{let S=!H&&x.start>t?(H=!0,z):v;return l`${S}${this._renderRow(x,e)}`}):l`<p class="empty-line">${i?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${p.length&&!H&&p[p.length-1].end<=t?z:v}
        <button class="add-line" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${V.length?l`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${V.map(({d:x,list:S})=>l`<button class="day-head" @click=${()=>this._openDay(x)}>${R(x,t)}<span>${S.length}</span></button>
                ${S.map(W=>this._renderRow(W,x))}`)}
          </div>`:i?v:l`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
    </section>`}_ticket(t,{label:e,pill:a,when:i,stub:r,now:n,live:o=!1}){return l`<button class="hero-ev ticket ${o?"live":""}" style=${N(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(t,n,o)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${e}</span><span class="tk-pill">${g("clock","sm")}${a}</span></span>
          <span class="hero-title">${t.summary}</span>
          <span class="tk-when">${i}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${r}</span>
    </button>`}_clock(t,e,a=!1){let n=z=>(z.getHours()%12*60+z.getMinutes())/720*2*Math.PI,o=(z,H)=>[40+H*Math.sin(z),40-H*Math.cos(z)],c=(z,H,x)=>{let S=H-z;for(;S<=0;)S+=2*Math.PI;if(S=Math.max(S,.42),S>=2*Math.PI-.01)return`M 40 ${40-x} A ${x} ${x} 0 1 1 ${39.99} ${40-x}`;let[W,ot]=o(z,x),[ie,Wa]=o(z+S,x);return`M ${W.toFixed(2)} ${ot.toFixed(2)} A ${x} ${x} 0 ${S>Math.PI?1:0} 1 ${ie.toFixed(2)} ${Wa.toFixed(2)}`},p=Array.from({length:12},(z,H)=>{let x=H/12*2*Math.PI,[S,W]=o(x,H%3?27:24),[ot,ie]=o(x,29);return Ee(S,W,ot,ie,H%3?"tick":"tick major")}),h="",d="",u=e;if(t){let z=t.end-t.start>=432e5;h=z?c(0,2*Math.PI,34):c(n(t.start),n(t.end),34),a&&!z&&(d=c(n(t.start),n(e),34)),u=a?e:t.start}let m=n(u),f=u.getMinutes()/60*2*Math.PI,[b,_]=o(m,15),[T,V]=o(f,23);return l`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${p}
      ${h?Ya(h,a?"span faint":"span"):v}
      ${d?Ya(d,"span"):v}
      ${Ee(40,40,b,_,"hand hour")}
      ${Ee(40,40,T,V,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return l`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${g("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let t=new Date(this._now),e=this._cursor,a=this._mode,i=this._app("week_start",0),r,n,o;if(a==="mes"||a==="lista")r=`${I(st[e.getMonth()])}${e.getFullYear()!==t.getFullYear()?` ${e.getFullYear()}`:""}`,n=()=>this._cursor=a==="lista"?$(e,-30):G(e,-1),o=()=>this._cursor=a==="lista"?$(e,30):G(e,1);else if(a==="semana"){let d=Dt(e,i),u=$(d,6);r=d.getMonth()===u.getMonth()?`${d.getDate()}\u2013${u.getDate()} ${st[u.getMonth()].slice(0,3)}`:`${d.getDate()} ${st[d.getMonth()].slice(0,3)} \u2013 ${u.getDate()} ${st[u.getMonth()].slice(0,3)}`,n=()=>this._cursor=$(e,-7),o=()=>this._cursor=$(e,7)}else r=R(e,t),n=()=>this._cursor=$(e,-1),o=()=>this._cursor=$(e,1);let c=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],p;a==="semana"?p=this._renderTimeGrid(Dt(e,i),7):a==="dia"?p=this._renderTimeGrid(e,1):a==="lista"?p=this._renderList():p=this._renderMonth();let h=a==="mes"?e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()&&F(e,t):F(e,t);return l`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${r}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{n(),this._scrollWeek=!0}}>${g("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{o(),this._scrollWeek=!0}}>${g("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${c.map(([d,u,m])=>l`<button class=${a===d?"on":""} role="tab" aria-selected=${a===d?"true":"false"} @click=${()=>this._setMode(d)}>${g(m)}<span>${u}</span></button>`)}
        </div>
        <button class="pick ${h?"on":""}" @click=${()=>{this._cursor=k(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${p}
    </section>`}_renderMonth(){let t=new Date(this._now),e=this._cursor,a=this._app("week_start",0),i=new Date(e.getFullYear(),e.getMonth(),1),r=Dt(i,a),n=$(r,42),o=this._events(r,n),c=[];for(let u=0;u<42;u++){let m=$(r,u),f=rt(o,m);c.push({d:m,list:f})}let p=c[35].d.getMonth()!==e.getMonth()?5:6,h=rt(o,e),d={x:0,y:0};return l`
      <div class="month" @touchstart=${u=>(d.x=u.touches[0].clientX,d.y=u.touches[0].clientY)} @touchend=${u=>{let m=u.changedTouches[0].clientX-d.x,f=u.changedTouches[0].clientY-d.y;Math.abs(m)>60&&Math.abs(f)<50&&(this._cursor=G(e,m<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(u=>l`<span>${ht[(u+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${c.slice(0,p*7).map(({d:u,list:m})=>{let f=u.getMonth()!==e.getMonth(),b=[...new Set(m.map(_=>this._colorOfEvent(_).fill))].slice(0,4);return l`<button class="cell ${f?"out":""} ${F(u,t)?"today":""} ${F(u,e)?"sel":""}" @click=${()=>this._cursor=u} aria-label="${R(u,t)}: ${E(m.length,"evento","eventos")}">
              <span class="num">${u.getDate()}</span>
              <span class="dots">${b.map(_=>l`<i style="background:${_}"></i>`)}${m.length>4?l`<b>+</b>`:v}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${R(e,t)}</span><button class="text-btn" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento</button></div>
        ${h.length?h.map(u=>this._renderRow(u,e)):l`<p class="empty-line">${this._store.loading(r,n)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(t,e){let a=new Date(this._now),i=Array.from({length:e},(d,u)=>$(t,u)),r=this._events(i[0],$(i[e-1],1)),n=Array.from({length:24},(d,u)=>u),o=this._app("week_start",0),c=d=>d.allDay||d.end-d.start>=12*36e5,p=i.map(d=>rt(r,d).filter(c)),h=Math.max(0,...p.map(d=>d.length));return l`
      ${e===7?l`<div class="week-strip">
            ${i.map(d=>l`<button class="ws-day ${F(d,a)?"today":""} ${F(d,this._cursor)?"sel":""}" @click=${()=>this._cursor=d}>
              <span>${ht[d.getDay()]}</span><b>${d.getDate()}</b>
            </button>`)}
          </div>`:l`<div class="week-strip day-strip">
            ${Array.from({length:7},(d,u)=>$(Dt(this._cursor,o),u)).map(d=>l`<button class="ws-day ${F(d,a)?"today":""} ${F(d,this._cursor)?"sel":""}" @click=${()=>this._cursor=d}><span>${ht[d.getDay()]}</span><b>${d.getDate()}</b></button>`)}
          </div>`}
      ${h?l`<div class="tgrid-allday" style="--n:${e}">
            <span class="tg-label">dia todo</span>
            ${p.map(d=>l`<div class="tg-adcol">${d.slice(0,3).map(u=>l`<button class="tg-ad ${u.kind&&this._checkOf(u)?"done":""}" style=${N(this._colorOfEvent(u),this._dark)} @click=${()=>this._openEvent(u)}>${u.summary}</button>`)}${d.length>3?l`<span class="tg-admore">+${d.length-3}</span>`:v}</div>`)}
          </div>`:v}
      <div class="tgrid-scroll">
        <div class="tgrid ${e===1?"one":"week"}" style="--n:${e};--hh:${nt}px">
          <div class="tg-hours">${n.map(d=>l`<span style="top:${d*nt}px">${d?`${String(d).padStart(2,"0")}h`:""}</span>`)}</div>
          ${i.map(d=>{let u=Na(rt(r,d).filter(b=>!c(b)),d),m=F(d,a),f=(a.getHours()+a.getMinutes()/60)*nt;return l`<div class="tg-col ${m?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let _=b.offsetY;this._openForm({date:d,hour:Math.max(0,Math.min(23,Math.floor(_/nt)))})}}>
              ${u.map(({event:b,top:_,height:T,lane:V,lanes:z})=>{let H=Math.max(T*nt-2,18);return l`<button class="tg-ev ${H<34?"short":""} ${b.kind&&this._checkOf(b)?"done":""}" style="${N(this._colorOfEvent(b),this._dark)}top:${_*nt}px;height:${H}px;left:calc(${V/z*100}% + 1px);width:calc(${100/z}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.kind&&this._checkOf(b)?"\u2713 ":""}${b.summary}</b>${H>=34?l`<small>${M(b.start)}${e===1&&b.location?` \xB7 ${b.location}`:""}</small>`:v}
                </button>`})}
              ${m?l`<i class="tg-now" style="top:${f}px"></i>`:v}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let t=new Date(this._now),e=this._query.trim(),a=be(e),i,r;a?(i=$(k(t),-365),r=$(k(t),366)):(i=this._cursor,r=$(this._cursor,30));let n=this._events(i,r);a&&(n=n.filter(p=>be(`${p.summary} ${p.location} ${p.description}`).includes(a)));let o=[];for(let p of n){let h=k(p.start<i?i:p.start),d=o[o.length-1];d&&F(d.d,h)?d.list.push(p):o.push({d:h,list:[p]})}let c=this._store.loading(i,r);return l`
      <label class="search-box">
        ${g("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${p=>this._query=p.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?l`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${g("x")}</button>`:v}
      </label>
      ${a?l`<p class="page-sub" style="margin-top:0">${c?"Buscando\u2026":E(n.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:v}
      ${o.length?l`<div class="panel agenda">
            ${o.map(({d:p,list:h})=>l`<button class="day-head ${F(p,t)?"today":""}" @click=${()=>this._openDay(p,"dia")}>${R(p,t)}<span>${h.length}</span></button>${h.map(d=>this._renderRow(d,p))}`)}
          </div>`:l`<div class="panel"><div class="empty"><div class="em-icon">${g(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":c?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${D(e,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendars(){let t=this._cals(),e=[];for(let r of t){let n=e.find(o=>o.label===r.group);n?n.list.push(r):e.push({label:r.group,list:[r]})}let a=this._store?this._store.errors():new Map,i=t.filter(r=>r.canCreate).length;return l`<section class="page">
      ${this._renderHead("Agendas",{text:t.length?`${E(t.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${i?E(i,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"})}
      ${e.map(r=>l`<div class="panel">
          <div class="overline">${r.label}</div>
          ${r.list.map(n=>l`<div class="row cal-row ${n.hidden?"off":""}" style=${N(n.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(n)} aria-label="Personalizar ${n.name}">${g(n.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(n)}>
                <div class="label">${n.name}</div>
                <div class="hint">${[n.device,a.get(n.id)?"n\xE3o carregou":n.unavailable?"indispon\xEDvel":n.canCreate?n.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!n.hidden} @change=${o=>this._saveCalPrefs(n.id,{hidden:o.target.checked?null:!0})} aria-label="Mostrar ${n.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      ${this._renderAddCalendars()}
    </section>`}_renderAddCalendars(){let t=this._isAdmin(),e=(i,r,n,o)=>l`<button class="row" @click=${o}>
      <span class="tile" style=${N(this._accent(),this._dark)}>${g(i)}</span>
      <span class="grow"><div class="label">${r}</div><div class="hint" style="white-space:normal">${n}</div></span>
      ${g("chevron-right")}
    </button>`,a=i=>()=>t?this._openInHA(`/config/integrations/dashboard/add?domain=${i}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return l`<div class="panel">
      <div class="overline">Adicionar calendários</div>
      ${e("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${e("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${e("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${e("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${e("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(t){this._openSheet("calendar",{id:t.id,name:t.colorId||t.name!==t.origName?t.name:"",color:t.colorId,hidden:t.hidden})}async _saveCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return;let a=(t.name||"").trim();await this._saveCalPrefs(t.id,{name:a&&a!==e.origName?a:null,color:t.color||null,hidden:t.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let t=this._app("accent","turquesa"),e=this._app("week_start",0),a=this._writable(),i=this._defaultCal();return l`<section class="page">
      ${this._renderHead("Mais",{text:`CronologIA ${this._version}`})}
      <div class="panel">
        <div class="overline">Aparência</div>
        <div class="row col">
          <div class="label">Tema</div>
          <div class="seg" role="radiogroup" aria-label="Tema">
            ${[["auto","Autom\xE1tico","sun-moon"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([r,n,o])=>l`<button class=${this._theme===r?"on":""} role="radio" aria-checked=${this._theme===r?"true":"false"} @click=${()=>this._setTheme(r)}>${g(o)}${n}</button>`)}
          </div>
          <div class="hint" style="white-space:normal">${this._theme==="auto"?"Segue o modo claro/escuro do Home Assistant.":"Vale s\xF3 para este aparelho."}</div>
        </div>
        <div class="row col">
          <div class="label">Cor do app</div>
          <div class="swatches">
            ${Kt.map(r=>l`<button class="sw ${t===r.id?"on":""}" style="--c:${r.fill}" aria-label=${r.label} @click=${()=>this._saveAppPrefs({accent:r.id})}>${t===r.id?g("check"):v}</button>`)}
          </div>
        </div>
        <div class="row col">
          <div class="label">A semana começa no</div>
          <div class="seg" role="radiogroup" aria-label="Início da semana">
            ${[[0,"Domingo"],[1,"Segunda"]].map(([r,n])=>l`<button class=${e===r?"on":""} role="radio" aria-checked=${e===r?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:r})}>${n}</button>`)}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="overline">Novos eventos</div>
        ${a.length?l`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${r=>this._saveAppPrefs({default_calendar:r.target.value})}>
                ${a.map(r=>l`<option value=${r.id} ?selected=${r.id===i}>${r.name}</option>`)}
              </select>
              <span class="field-hint">${g("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`:l`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local em Agendas.</div></div>`}
      </div>

      ${this._renderAlertsPanel()} ${this._renderGerenciaPanel()}
      ${this._renderAiPanel()}

      <div class="panel" id="dados">
        <div class="overline">Dados</div>
        <div class="data-row">
          <b>Exportar agenda (.ics)</b>
          <p>Baixe os eventos para abrir no Google Agenda, no Outlook ou no iPhone, ou para guardar uma cópia.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._openExport()}>${g("download")}Exportar</button></div>
        </div>
        <div class="data-row">
          <b>Importar arquivo .ics</b>
          <p>Traz os eventos de um convite ou de outra agenda. Você revisa e escolhe o calendário antes de adicionar.</p>
          <div class="btn-row"><button class="btn outline sm" ?disabled=${!a.length} @click=${()=>this._openImport("ics")}>${g("upload")}Escolher arquivo</button></div>
        </div>
        <div class="data-row">
          <b>Onde ficam os dados</b>
          <p>Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda só nomes, cores e preferências, que entram no backup do Home Assistant.</p>
        </div>
      </div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`}_renderAiPanel(){let t=this._ai||{},e=t.entities||[],a=this._app("ai_entity",""),i=this._aiChecking?"off":t.ready&&t.images?"ok":t.ready?"warn":"bad",r=this._aiChecking?"Verificando\u2026":t.ready&&t.images?"Pronta para ler fotos":t.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",n="";return t.ready&&t.using&&(n=`Usando ${t.using.name}${a?"":" (a IA padr\xE3o do Home Assistant)"}.`,t.photos&&(n+=` Para fotos, ${t.photos.name}.`)),t.reason&&(n=`${n} ${t.reason}`.trim()),l`<div class="panel" id="leitura-ia">
      <div class="overline">Leitura por IA</div>
      <p class="panel-lead">Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.</p>
      <div class="ai-state ${i}"><span class="dot"></span><div><b>${r}</b>${n?l`<span>${n}</span>`:v}</div></div>
      ${e.length||a?l`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${o=>this._chooseAi(o.target.value)}>
              <option value="" ?selected=${!a}>Padrão do Home Assistant</option>
              ${e.map(o=>l`<option value=${o.id} ?selected=${o.id===a}>${o.name}${o.images?"":" (s\xF3 texto)"}${o.available?"":" (indispon\xEDvel)"}</option>`)}
              ${a&&!e.some(o=>o.id===a)?l`<option value=${a} selected>${a} (não encontrada)</option>`:v}
            </select>
            <span class="field-hint">${g("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:v}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${g("rotate-ccw")}Verificar de novo</button></div>
      ${t.ready&&t.images?v:l`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return v;let t=this._form||{},e=v,a=null;if(this._sheet==="event")e=this._renderEventSheet(),a=t.ev&&this._colorOfEvent(t.ev);else if(this._sheet==="form")e=this._renderFormSheet(),a=this._cal(t.cal)&&this._cal(t.cal).color;else if(this._sheet==="scope")e=this._renderScope();else if(this._sheet==="confirm")e=this._renderConfirm();else if(this._sheet==="import")e=this._renderImportSheet(),a=this._cal(t.target)&&this._cal(t.target).color;else if(this._sheet==="calendar"){e=this._renderCalSheet();let r=this._cal(t.id);a=Y(t.color)||r&&r.color}else this._sheet==="export"?e=this._renderExportSheet():this._sheet==="outlook"?e=this._renderOutlookSheet():this._sheet==="nocal"?e=this._renderNoCalSheet():this._sheet==="maint"?e=this._renderMaintSheet():this._sheet==="bill"&&(e=this._renderBillSheet(),a=Y("ouro"));let i=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${St(a.fill,this._dark?.18:.14)};${N(a,this._dark)}`:"";return l`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${i} @keydown=${r=>r.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${e}
      </div>
    `}_sheetHead(t,e){return l`<div class="sheet-head">
      ${e?l`<button class="icon-btn back" @click=${e} aria-label="Voltar">${g("chevron-left")}</button>`:v}
      <h3 class="display">${t}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
    </div>`}_renderEventSheet(){let t=this._form.ev,e=new Date(this._now),a=this._cal(t.cal),i;if(t.allDay){let n=$(t.end,-1);i=F(n,t.start)?`${R(t.start,e)} \xB7 dia todo`:`${I(B(t.start,e))} \u2013 ${B(n,e)} \xB7 ${E(O(t.end,t.start),"dia","dias")}`}else F(t.start,t.end)||t.end.getHours()===0&&t.end.getMinutes()===0&&O(t.end,t.start)===1?i=`${R(t.start,e)} \xB7 ${M(t.start)} \u2013 ${M(t.end)} (${ye(t.end-t.start)})`:i=`${I(B(t.start,e))}, ${M(t.start)} \u2013 ${B(t.end,e)}, ${M(t.end)}`;let r=t.start>e?Qt(t.start-e):t.end>e?"acontecendo agora":"";return l`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${t.summary}</h3>
          <p class="ev-cal">${a?a.name:t.cal}${r?l` · <b>${r}</b>`:v}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${g("clock")}<span>${i}</span></div>
        ${t.rrule?l`<div class="fact">${g("repeat")}<span>${ut(t.rrule)}</span></div>`:v}
        ${t.location?l`<a class="fact link" href=${qi(t.location)} target="_blank" rel="noopener noreferrer">${g("map-pin")}<span>${t.location}</span>${g("external-link","sm")}</a>`:v}
        ${t.kind?this._renderKindFacts(t):v}
        ${t.description&&!t.kind?l`<div class="fact notes">${g("file-text")}<span>${Da(t.description).map(n=>n.url?l`<a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>`:n.text)}</span></div>`:v}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?l`<p class="sheet-note">${g("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:v}
      <div class="sheet-actions">
        ${a&&a.canDelete&&t.uid?l`<button class="btn danger" @click=${()=>this._askDelete(t)} aria-label="Apagar">${g("trash")}</button>`:v}
        ${this._writable().length?l`<button class="btn outline" @click=${()=>this._openForm({ev:t,copy:!0})}>${g("copy")}Duplicar</button>`:v}
        ${a&&a.canUpdate&&t.uid?l`<button class="btn primary" @click=${()=>this._openForm({ev:t})}>${g("pencil")}Editar</button>`:v}
      </div>
    `}_renderFormSheet(){let t=this._form;if(t.kind)return this._renderKindForm();let e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(m=>m.id===t.cal):e.filter(m=>m.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e,i=new Date,r=[{label:"Hoje",d:k(i)},{label:"Amanh\xE3",d:$(k(i),1)}],n=r.some(m=>y(m.d)===t.date),o=m=>{let f=this.renderRoot.querySelector(m);if(f)try{f.showPicker()}catch{f.focus(),f.click()}},c=m=>{if(!m)return;let f=T=>{let[V,z]=T.split(":").map(Number);return V*60+z},b=Math.max(15,(f(t.end)-f(t.start)+1440)%1440||60),_=(f(m)+b)%1440;this._setForm({start:m,end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`})},p=m=>{let[f,b]=t.start.split(":").map(Number),_=Math.min(1439,f*60+b+m);this._setForm({end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`,endDate:""})},h=m=>{let[f,b]=(m||"0:0").split(":").map(Number);return f*60+b},d=(h(t.end)-h(t.start)+1440)%1440,u=!t.allDay&&!t.endDate&&h(t.end)<=h(t.start);return l`
      ${this._sheetHead(t.mode==="add"?"Novo":"Editar evento")}
      ${t.mode==="add"?this._renderModelChips(""):v}
      ${t.mode==="add"?l`<div class="imp-strip">
            <button @click=${()=>this._openImport("text")}>${g("clipboard-paste")}<span>Colar mensagem</span></button>
            <button @click=${()=>this._openImport("photos")}>${g("images")}<span>Escolher fotos</span></button>
            <button @click=${()=>this._openImport("scan")}>${g("scan-text")}<span>Digitalizar com IA</span></button>
          </div>`:v}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${m=>this._setForm({title:m.target.value})} @keydown=${m=>m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?l`<div class="field">
            <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(m=>l`<button class="pick list ${t.cal===m.id?"on":""}" style=${N(m.color,this._dark)} @click=${()=>this._setForm({cal:m.id})}><span class="dot"></span><span>${D(m.name,24)}</span></button>`)}</div>
          </div>`:v}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${t.allDay} @change=${m=>this._setForm({allDay:m.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${r.map(m=>l`<button class="pick ${t.date===y(m.d)?"on":""}" @click=${()=>this._setForm({date:y(m.d),endDate:t.endDate&&t.endDate<y(m.d)?"":t.endDate})}>${m.label}</button>`)}
          <button class="pick ${n?"":"on"}" @click=${()=>o("#cr-date")}>
            ${g("calendar")}<span>${n?"Outra data":I(R(A(t.date),i,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${t.date} @change=${m=>m.target.value&&this._setForm({date:m.target.value,endDate:t.endDate&&t.endDate<m.target.value?"":t.endDate})} />
          </button>
        </div>
        ${t.allDay?l`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${t.endDate||t.date} min=${t.date} @change=${m=>this._setForm({endDate:m.target.value>t.date?m.target.value:""})} />
              ${t.endDate?l`<span class="tl">${E(O(A(t.endDate),A(t.date))+1,"dia","dias")}</span>`:l`<span class="tl">um dia</span>`}
            </div>`:l`<div class="time-row">
                <input type="time" .value=${t.start} aria-label="Começa" @change=${m=>c(m.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${t.end} aria-label="Termina" @change=${m=>m.target.value&&this._setForm({end:m.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([m,f])=>l`<button class="pick ${d===m&&!t.endDate?"on":""}" @click=${()=>p(m)}>${f}</button>`)}
              </div>
              ${u?l`<div class="field-hint">${g("info")}<span>Termina no dia seguinte.</span></div>`:v}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="chip-row">${Xt.map(m=>l`<button class="pick ${t.repeat===m.id?"on":""}" @click=${()=>this._setForm({repeat:m.id})}>${m.id?g("repeat"):v}<span>${m.label}</span></button>`)}</div>
        ${t.rrule&&Ct(t.rrule)===t.repeat&&ut(t.rrule)!==(Xt.find(m=>m.id===t.repeat)||{}).label?l`<div class="field-hint">${g("repeat")}<span>${ut(t.rrule)}</span></div>`:v}
        ${t.rid?l`<div class="field-hint">${g("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:v}
      </div>
      <label class="field">
        <span class="flabel">Local</span>
        <input type="text" .value=${t.location} placeholder="Endereço, sala ou link" @input=${m=>this._setForm({location:m.target.value})} />
      </label>
      <label class="field">
        <span class="flabel">Notas</span>
        <textarea rows="3" .value=${t.notes} placeholder="Detalhes, o que levar…" @input=${m=>this._setForm({notes:m.target.value})}></textarea>
      </label>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let t=this._form,e=t.action==="edit",a=(i,r,n,o=!1)=>l`<button class="imp-opt ${o?"danger":""}" @click=${()=>this._applyScope(i)}>
      <span class="imp-ic">${g(i==="one"?"calendar-check":i==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${r}</b><small>${n}</small></span>${g("chevron-right")}
    </button>`;return l`
      ${this._sheetHead(e?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${D(t.title,40)}” se repete. O que você quer ${e?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",e?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",e?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${e?v:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let t=this._form;return l`
      <div class="sheet-head"><h3 class="display">${t.title}</h3></div>
      <p class="confirm-text">${t.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn ${t.danger?"danger-fill":"primary"}" @click=${()=>t.run()}>${t.label}</button>
      </div>
    `}_renderImportSheet(){let t=this._form,e=this._ai||{},a=this._writable(),i=this._cal(t.target),r=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},n=t.error?l`<div class="imp-error">${g("circle-alert")}<span>${t.error}</span></div>`:v,o=t.images&&t.images.length?l`<div class="thumbs">${t.images.map(p=>l`<img src=${p.url} alt="" />`)}</div>`:v,c=l`<div class="imp-error soft">${g("sparkles")}<span>${e.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(t.step==="text")return l`
        ${this._sheetHead("Colar mensagem",r)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${t.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${n} ${e.ready?v:c}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._pasteClipboard()}>${g("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(t.text||"").trim()||!e.ready} @click=${()=>this._readText()}>${g("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${e.ready?`${e.using.name} encontra datas, hor\xE1rios e locais, mesmo em mensagens corridas. Voc\xEA revisa antes de adicionar.`:""}</p>
      `;if(t.step==="loading")return l`
        ${this._sheetHead("Lendo\u2026")}
        ${o}
        <div class="imp-loading"><span class="spin">${g("loader-circle")}</span><span>${t.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:t.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(t.step==="review"){let p=t.items.filter(u=>u.on&&(u.title||"").trim()).length,h=t.provider==="ics"?`do arquivo ${D(t.fileName||".ics",28)}`:t.provider?`lidos por ${t.provider}`:"",d=new Date;return l`
        ${this._sheetHead("Revisar eventos",r)}
        ${o}
        <p class="sheet-note top">${E(t.items.length,"evento encontrado","eventos encontrados")}${h?` \xB7 ${h}`:""}. Confira datas e horários.</p>
        ${t.note?l`<div class="imp-error soft">${g("sparkles")}<span>${t.note}</span></div>`:v}
        <div class="rv-list">
          ${t.items.map((u,m)=>l`<div class="rv-card ${u.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${u.on?"on":""}" role="checkbox" aria-checked=${u.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(m,{on:!u.on})}>${g("check")}</button>
                <input class="rv-title" type="text" .value=${u.title} aria-label="Título" @input=${f=>this._setItem(m,{title:f.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:t.items.filter((f,b)=>b!==m)})}>${g("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${u.date} aria-label="Data" @change=${f=>f.target.value&&this._setItem(m,{date:f.target.value})} />
                ${u.start?l`<span class="rv-times"><input type="time" .value=${u.start} aria-label="Começa" @change=${f=>this._setItem(m,{start:f.target.value})} /><span>–</span><input type="time" .value=${u.end} aria-label="Termina" @change=${f=>this._setItem(m,{end:f.target.value})} /></span>`:l`<button class="pick ghost" @click=${()=>this._setItem(m,{start:"09:00",end:"10:00"})}>${g("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${I(R(A(u.date),d))}${u.end_date?` at\xE9 ${B(A(u.end_date),d)}`:""}${u.location?` \xB7 ${u.location}`:""}${u.repeat||u.rrule?` \xB7 ${u.rrule?ut(u.rrule):Xt.find(f=>f.id===u.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${e.images&&t.provider!=="ics"?l`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${g("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${g("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:v}
        ${a.length>1?l`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${a.map(u=>l`<button class="pick list ${t.target===u.id?"on":""}" style=${N(u.color,this._dark)} @click=${()=>this._setForm({target:u.id})}><span class="dot"></span><span>${D(u.name,24)}</span></button>`)}</div>
            </div>`:v}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||t.adding} @click=${()=>this._importAdd()}>
            ${t.adding?"Adicionando\u2026":p?`Adicionar ${E(p,"evento","eventos")}${i&&a.length<=1?` em ${D(i.name,16)}`:""}`:"Nenhum evento marcado"}
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
      ${e.images?v:c}
      ${n}
    `}_renderCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return this._sheetHead("Calend\xE1rio");let a=Y(t.color)||e.color;return l`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${N(a,this._dark)}>
        <span class="tile">${g(e.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(t.name||"").trim()||e.origName}</span><span class="lc-meta">${e.group}${e.device?` \xB7 ${e.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${t.name} placeholder=${e.origName} @input=${i=>this._setForm({name:i.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${Kt.map(i=>l`<button class="sw ${a.id===i.id?"on":""}" style="--c:${i.fill}" aria-label=${i.label} @click=${()=>this._setForm({color:i.id})}>${a.id===i.id?g("check"):v}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${e.canCreate?e.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${e.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!t.hidden} @change=${i=>this._setForm({hidden:!i.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?l`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${e.id}`)}>${g("external-link")}Abrir na tela padrão do HA</button>`:v}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${g("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let t=this._form,e=this._cals(),[a,i]=this._exportRange(t.range),r=t.cals.length?this.api.exportUrl({calendars:t.cals,start:q(a),end:q(i)}):null,n=o=>this._setForm({cals:t.cals.includes(o)?t.cals.filter(c=>c!==o):[...t.cals,o]});return l`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${e.map(o=>l`<button class="pick list ${t.cals.includes(o.id)?"on":""}" style=${N(o.color,this._dark)} @click=${()=>n(o.id)}><span class="dot"></span><span>${D(o.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([o,c])=>l`<button class="pick ${t.range===o?"on":""}" @click=${()=>this._setForm({range:o})}>${c}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${r&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?l`<a class="btn primary" href=${r} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${g("download")}Baixar .ics</a>`:l`<button class="btn primary" ?disabled=${!r} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${g("download")}Baixar .ics</button>`}
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
        ${t?l`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${g("chevron-right","sm")}</button>`:v}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return l`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let t=this._cam;if(!t)return v;let e=t.shots.length;return l`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${t.flash?l`<div class="cam-flash" .key=${t.flash}></div>`:v}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${g("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${t.torchOk?l`<button class="cam-btn ${t.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${g("zap")}</button>`:l`<span class="cam-btn ghost"></span>`}
        </div>
        ${t.status==="error"?l`<div class="cam-msg">${g("camera")}<p>${t.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${g("images")}Escolher foto</button></div>`:l`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${t.status==="starting"?"Abrindo a c\xE2mera\u2026":e?`${E(e,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${t.shots.slice(-3).map(a=>l`<img src=${a.url} alt="" />`)}${e>3?l`<span>+${e-3}</span>`:v}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${t.status!=="live"||e>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!e} @click=${()=>this._useShots()}>Pronto${e?` (${e})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return v;let t=this._toast;return l`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${t.text}</span>
      ${t.action?l`<button @click=${()=>{this._toast=null,t.action.run()}}>${t.action.label}</button>`:v}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Te);var Vi=document.getElementById("app"),ze=document.createElement("cronologia-app");ze.env=Aa();ze.api=new Yt;Vi.replaceChildren(ze);})();
