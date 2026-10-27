/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var Ve=globalThis,kt=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),ta=new WeakMap,Be=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.i,t=this.t;if(kt&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=ta.get(t)),e===void 0&&((this.i=e=new CSSStyleSheet).replaceSync(this.cssText),a&&ta.set(t,e))}return e}toString(){return this.cssText}},fe=o=>new Be(typeof o=="string"?o:o+"",void 0,At),Ne=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((a,s,i)=>a+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Be(t,o,At)},Ps=(o,e)=>{if(kt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),s=Ve.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,o.appendChild(a)}},aa=kt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return fe(t)})(o):o,{is:qs,defineProperty:Ls,getOwnPropertyDescriptor:js,getOwnPropertyNames:Us,getOwnPropertySymbols:Vs,getPrototypeOf:Bs}=Object,at=globalThis,sa=at.trustedTypes,Ys=sa?sa.emptyScript:"",Ws=at.reactiveElementPolyfillSupport,ze=(o,e)=>o,wt={toAttribute(o,e){switch(e){case Boolean:o=o?Ys:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},$a=(o,e)=>!qs(o,e),ia={attribute:!0,type:String,converter:wt,reflect:!1,useDefault:!1,hasChanged:$a};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var re=class extends HTMLElement{static addInitializer(e){this.o(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(e,t=ia){if(t.state&&(t.attribute=!1),this.o(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&Ls(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=js(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let l=s?.call(this);i?.call(this,r),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ia}static o(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=Bs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(ze("properties"))){let t=this.properties,a=[...Us(t),...Vs(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.u=new Map;for(let[t,a]of this.elementProperties){let s=this.p(t,a);s!==void 0&&this.u.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(aa(s))}else e!==void 0&&t.push(aa(e));return t}static p(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this.P??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this.P?.delete(e)}$(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.v=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ps(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.P?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}C(e,t){let a=this.constructor.elementProperties.get(e),s=this.constructor.p(e,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:wt).toAttribute(t,a.type);this.m=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(e,t){let a=this.constructor,s=a.u.get(e);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:wt;this.m=s;let l=r.fromAttribute(t,i.type);this[s]=l??this.T?.get(s)??l,this.m=null}}requestUpdate(e,t,a,s=!1,i){if(e!==void 0){let r=this.constructor;if(s===!1&&(i=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??$a)(i,t)||a.useDefault&&a.reflect&&i===this.T?.get(e)&&!this.hasAttribute(r.p(e,a))))return;this.M(e,t,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(e,t,{useDefault:a,reflect:s,wrapped:i},r){a&&!(this.T??=new Map).has(e)&&(this.T.set(e,r??t??this[e]),i!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this.m!==e&&(this.A??=new Set).add(e))}async k(){this.isUpdatePending=!0;try{await this.S}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:r}=i,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.M(s,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this.P?.forEach(a=>a.hostUpdate?.()),this.update(t)):this.U()}catch(a){throw e=!1,this.U(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this.P?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(e){return!0}update(e){this.A&&=this.A.forEach(t=>this.C(t,this[t])),this.U()}updated(e){}firstUpdated(e){}};re.elementStyles=[],re.shadowRootOptions={mode:"open"},re[ze("elementProperties")]=new Map,re[ze("finalized")]=new Map,Ws?.({ReactiveElement:re}),(at.reactiveElementVersions??=[]).push("2.1.2");var Mt=globalThis,oa=o=>o,Ye=Mt.trustedTypes,ra=Ye?Ye.createPolicy("lit-html",{createHTML:o=>o}):void 0,Dt="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+ae,Ks=`<${St}>`,ue=document,Ce=()=>ue.createComment(""),Ee=o=>o===null||typeof o!="object"&&typeof o!="function",zt=Array.isArray,wa=o=>zt(o)||typeof o?.[Symbol.iterator]=="function",xt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,na=/-->/g,la=/>/g,pe=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ca=/'/g,da=/"/g,_a=/^(?:script|style|textarea|title)$/i,Tt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),n=Tt(1),_e=Tt(2),ji=Tt(3),N=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),pa=new WeakMap,he=ue.createTreeWalker(ue,129);function ya(o,e){if(!zt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ra!==void 0?ra.createHTML(e):e}var ka=(o,e)=>{let t=o.length-1,a=[],s,i=e===2?"<svg>":e===3?"<math>":"",r=Se;for(let l=0;l<t;l++){let c=o[l],d,p,h=-1,f=0;for(;f<c.length&&(r.lastIndex=f,p=r.exec(c),p!==null);)f=r.lastIndex,r===Se?p[1]==="!--"?r=na:p[1]!==void 0?r=la:p[2]!==void 0?(_a.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=pe):p[3]!==void 0&&(r=pe):r===pe?p[0]===">"?(r=s??Se,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?pe:p[3]==='"'?da:ca):r===da||r===ca?r=pe:r===na||r===la?r=Se:(r=pe,s=void 0);let m=r===pe&&o[l+1].startsWith("/>")?" ":"";i+=r===Se?c+Ks:h>=0?(a.push(d),c.slice(0,h)+Dt+c.slice(h)+ae+m):c+ae+(h===-2?l:m)}return[ya(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},Fe=class o{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let i=0,r=0,l=e.length-1,c=this.parts,[d,p]=ka(e,t);if(this.el=o.createElement(d,a),he.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=he.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Dt)){let f=p[r++],m=s.getAttribute(h).split(ae),v=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?Ke:v[1]==="?"?Qe:v[1]==="@"?Je:ve}),s.removeAttribute(h)}else h.startsWith(ae)&&(c.push({type:6,index:i}),s.removeAttribute(h));if(_a.test(s.tagName)){let h=s.textContent.split(ae),f=h.length-1;if(f>0){s.textContent=Ye?Ye.emptyScript:"";for(let m=0;m<f;m++)s.append(h[m],Ce()),he.nextNode(),c.push({type:2,index:++i});s.append(h[f],Ce())}}}else if(s.nodeType===8)if(s.data===St)c.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(ae,h+1))!==-1;)c.push({type:7,index:i}),h+=ae.length-1}i++}}static createElement(e,t){let a=ue.createElement("template");return a.innerHTML=e,a}};function me(o,e,t=o,a){if(e===N)return e;let s=a!==void 0?t.N?.[a]:t.O,i=Ee(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,t,a)),a!==void 0?(t.N??=[])[a]=s:t.O=s),s!==void 0&&(e=me(o,s._$AS(o,e.values),s,a)),e}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(e){let{el:{content:t},parts:a}=this._$AD,s=(e?.creationScope??ue).importNode(t,!0);he.currentNode=s;let i=he.nextNode(),r=0,l=0,c=a[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new st(i,i.nextSibling,this,e):c.type===1?d=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(d=new Ge(i,this,e)),this._$AV.push(d),c=a[++l]}r!==c?.index&&(i=he.nextNode(),r++)}return he.currentNode=ue,s}V(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},st=class Aa{get _$AU(){return this._$AM?._$AU??this.D}constructor(e,t,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Ee(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==N&&this.L(e):e._$litType$!==void 0?this.j(e):e.nodeType!==void 0?this.I(e):wa(e)?this.H(e):this.L(e)}B(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}I(e){this._$AH!==e&&(this._$AR(),this._$AH=this.B(e))}L(e){this._$AH!==u&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.I(ue.createTextNode(e)),this._$AH=e}j(e){let{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=Fe.createElement(ya(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(t);else{let i=new We(s,this),r=i.R(this.options);i.V(t),this.I(r),this._$AH=i}}_$AC(e){let t=pa.get(e.strings);return t===void 0&&pa.set(e.strings,t=new Fe(e)),t}H(e){zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,s=0;for(let i of e)s===t.length?t.push(a=new Aa(this.B(Ce()),this.B(Ce()),this,this.options)):a=t[s],a._$AI(i),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let a=oa(e).nextSibling;oa(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this.D=e,this._$AP?.(e))}},ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(e,t=this,a,s){let i=this.strings,r=!1;if(i===void 0)e=me(this,e,t,0),r=!Ee(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{let l=e,c,d;for(e=i[0],c=0;c<i.length-1;c++)d=me(this,l[a+c],t,c),d===N&&(d=this._$AH[c]),r||=!Ee(d)||d!==this._$AH[c],d===u?e=u:e!==u&&(e+=(d??"")+i[c+1]),this._$AH[c]=d}r&&!s&&this.W(e)}W(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ke=class extends ve{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===u?void 0:e}},Qe=class extends ve{constructor(){super(...arguments),this.type=4}W(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Je=class extends ve{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}_$AI(e,t=this){if((e=me(this,e,t,0)??u)===N)return;let a=this._$AH,s=e===u&&a!==u||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ge=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}},Qs={q:Dt,J:ae,Z:St,F:1,G:ka,K:We,X:wa,Y:me,tt:st,st:ve,it:Qe,et:Je,ht:Ke,ot:Ge},Js=Mt.litHtmlPolyfillSupport;Js?.(Fe,st),(Mt.litHtmlVersions??=[]).push("3.3.3");var Ma=(o,e,t)=>{let a=t?.renderBefore??e,s=a._$litPart$;if(s===void 0){let i=t?.renderBefore??null;a._$litPart$=s=new st(e.insertBefore(Ce(),i),i,void 0,t??{})}return s._$AI(o),s},Ct=globalThis;var le=class extends re{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.rt=Ma(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return N}};le._$litElement$=!0,le.finalized=!0,Ct.litElementHydrateSupport?.({LitElement:le});var Gs=Ct.litElementPolyfillSupport;Gs?.({LitElement:le});(Ct.litElementVersions??=[]).push("4.2.2");var{tt:Xs}=Qs,ha=o=>o,Zs=o=>o===null||typeof o!="object"&&typeof o!="function";var ua=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e,ei=o=>o?._$litType$?.h!=null;var Da=o=>o.strings===void 0,ma=()=>document.createComment(""),ne=(o,e,t)=>{let a=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){let i=a.insertBefore(ma(),s),r=a.insertBefore(ma(),s);t=new Xs(i,r,o,o.options)}else{let i=t._$AB.nextSibling,r=t._$AM,l=r!==o;if(l){let c;t._$AQ?.(o),t._$AM=o,t._$AP!==void 0&&(c=o._$AU)!==r._$AU&&t._$AP(c)}if(i!==s||l){let c=t._$AA;for(;c!==i;){let d=ha(c).nextSibling;ha(a).insertBefore(c,s),c=d}}}return t},oe=(o,e,t=o)=>(o._$AI(e,t),o),ti={},Oe=(o,e=ti)=>o._$AH=e,_t=o=>o._$AH,bt=o=>{o._$AR(),o._$AA.remove()},Sa=o=>{o._$AR()};var K=o=>(...e)=>({_$litDirective$:o,values:e}),G=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this.nt=e,this._$AM=t,this.ct=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Te=(o,e)=>{let t=o._$AN;if(t===void 0)return!1;for(let a of t)a._$AO?.(e,!1),Te(a,e);return!0},Xe=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while(t?.size===0)},za=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),ii(e)}};function ai(o){this._$AN!==void 0?(Xe(this),this._$AM=o,za(this)):this._$AM=o}function si(o,e=!1,t=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)Te(a[i],!1),Xe(a[i]);else a!=null&&(Te(a,!1),Xe(a));else Te(this,o)}var ii=o=>{o.type==2&&(o._$AP??=si,o._$AQ??=ai)},Re=class extends G{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),za(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Te(this,e),Xe(this))}setValue(e){if(Da(this.nt))this.nt._$AI(e,this);else{let t=[...this.nt._$AH];t[this.ct]=e,this.nt._$AI(t,this,0)}}disconnected(){}reconnected(){}};var Ze=class{constructor(e){this.lt=e}disconnect(){this.lt=void 0}reconnect(e){this.lt=e}deref(){return this.lt}},et=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(e=>this.dt=e)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var tt=class extends Re{constructor(){super(...arguments),this.ft=new Ze(this),this.vt=new et}render(e,t){return N}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this.yt)return N;this.yt=t;let s=0,{ft:i,vt:r}=this;return(async(l,c)=>{for await(let d of l)if(await c(d)===!1)return})(t,async l=>{for(;r.get();)await r.get();let c=i.deref();if(c!==void 0){if(c.yt!==t)return!1;a!==void 0&&(l=a(l,s)),c.commitValue(l,s),s++}return!0}),N}commitValue(e,t){this.setValue(e)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Ui=K(tt),Vi=K(class extends tt{constructor(o){if(super(o),o.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(o,e){return this.rt=o,super.update(o,e)}commitValue(o,e){e===0&&Sa(this.rt);let t=ne(this.rt);oe(t,o)}}),va=o=>ei(o)?o._$litType$.h:o.strings,Bi=K(class extends G{constructor(o){super(o),this.bt=new WeakMap}render(o){return[o]}update(o,[e]){let t=ua(this.gt)?va(this.gt):null,a=ua(e)?va(e):null;if(t!==null&&(a===null||t!==a)){let s=_t(o).pop(),i=this.bt.get(t);if(i===void 0){let r=document.createDocumentFragment();i=Ma(u,r),i.setConnected(!1),this.bt.set(t,i)}Oe(i,[s]),ne(i,void 0,s)}if(a!==null){if(t===null||t!==a){let s=this.bt.get(a);if(s!==void 0){let i=_t(s).pop();Sa(o),ne(o,void 0,i),Oe(o,[i])}}this.gt=e}else this.gt=void 0;return this.render(e)}});var Yi=K(class extends G{constructor(o){if(super(o),o.type!==1||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.wt===void 0){this.wt=new Set,o.strings!==void 0&&(this._t=new Set(o.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(e)}let t=o.element.classList;for(let a of this.wt)a in e||(t.remove(a),this.wt.delete(a));for(let a in e){let s=!!e[a];s===this.wt.has(a)||this._t?.has(a)||(s?(t.add(a),this.wt.add(a)):(t.remove(a),this.wt.delete(a)))}return N}}),oi={},Wi=K(class extends G{constructor(){super(...arguments),this.St=oi}render(o,e){return e()}update(o,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.St)&&this.St.length===e.length&&e.every((a,s)=>a===this.St[s]))return N}else if(this.St===e)return N;return this.St=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var Ki=K(class extends G{constructor(){super(...arguments),this.key=u}render(o,e){return this.key=o,e}update(o,[e,t]){return e!==this.key&&(Oe(o),this.key=e),t}}),Qi=K(class extends G{constructor(o){if(super(o),o.type!==3&&o.type!==1&&o.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!Da(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===N||e===u)return e;let t=o.element,a=o.name;if(o.type===3){if(e===t[a])return N}else if(o.type===4){if(!!e===t.hasAttribute(a))return N}else if(o.type===1&&t.getAttribute(a)===e+"")return N;return Oe(o),e}});var $t=new WeakMap,Ji=K(class extends Re{render(o){return u}update(o,[e]){let t=e!==this.lt;return t&&this.$t(void 0),(t||this.Tt!==this.xt)&&(this.lt=e,this.Et=o.options?.host,this.$t(this.xt=o.element)),u}$t(o){if(this.lt!==void 0)if(this.isConnected||(o=void 0),typeof this.lt=="function"){let e=this.Et??globalThis,t=$t.get(e);t===void 0&&(t=new WeakMap,$t.set(e,t)),t.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),t.set(this.lt,o),o!==void 0&&this.lt.call(this.Et,o)}else this.lt.value=o}get Tt(){return typeof this.lt=="function"?$t.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),fa=(o,e,t)=>{let a=new Map;for(let s=e;s<=t;s++)a.set(o[s],s);return a},j=K(class extends G{constructor(o){if(super(o),o.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(o,e,t){let a;t===void 0?t=e:e!==void 0&&(a=e);let s=[],i=[],r=0;for(let l of o)s[r]=a?a(l,r):r,i[r]=t(l,r),r++;return{values:i,keys:s}}render(o,e,t){return this.Ct(o,e,t).values}update(o,[e,t,a]){let s=_t(o),{values:i,keys:r}=this.Ct(e,t,a);if(!Array.isArray(s))return this.Pt=r,i;let l=this.Pt??=[],c=[],d,p,h=0,f=s.length-1,m=0,v=i.length-1;for(;h<=f&&m<=v;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(l[h]===r[m])c[m]=oe(s[h],i[m]),h++,m++;else if(l[f]===r[v])c[v]=oe(s[f],i[v]),f--,v--;else if(l[h]===r[v])c[v]=oe(s[h],i[v]),ne(o,c[v+1],s[h]),h++,v--;else if(l[f]===r[m])c[m]=oe(s[f],i[m]),ne(o,s[h],s[f]),f--,m++;else if(d===void 0&&(d=fa(r,m,v),p=fa(l,h,f)),d.has(l[h]))if(d.has(l[f])){let g=p.get(r[m]),w=g!==void 0?s[g]:null;if(w===null){let S=ne(o,s[h]);oe(S,i[m]),c[m]=S}else c[m]=oe(w,i[m]),ne(o,s[h],w),s[g]=null;m++}else bt(s[f]),f--;else bt(s[h]),h++;for(;m<=v;){let g=ne(o,c[v+1]);oe(g,i[m]),c[m++]=g}for(;h<=f;){let g=s[h++];g!==null&&bt(g)}return this.Pt=r,Oe(o,c),N}}),Ta="important",ri=" !"+Ta,Gi=K(class extends G{constructor(o){if(super(o),o.type!==1||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let a=o[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(o,[e]){let{style:t}=o.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(e)),this.render(e);for(let a of this.Mt)e[a]==null&&(this.Mt.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(let a in e){let s=e[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(ri);a.includes("-")||i?t.setProperty(a,i?s.slice(0,-11):s,i?Ta:""):t[a]=s}}return N}}),Xi=K(class extends G{constructor(o){if(super(o),o.type!==2)throw Error("templateContent can only be used in child bindings")}render(o){return this.At===o?N:(this.At=o,document.importNode(o.content,!0))}}),we=class extends G{constructor(e){if(super(e),this.gt=u,e.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this.kt=void 0,this.gt=e;if(e===N)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.gt)return this.kt;this.gt=e;let t=[e];return t.raw=t,this.kt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};we.directiveName="unsafeHTML",we.resultType=1;var Zi=K(we);var Ie=class extends we{};Ie.directiveName="unsafeSVG",Ie.resultType=2;var ee=K(Ie),ga=o=>!Zs(o)&&typeof o.then=="function",xa=1073741823;var yt=class extends Re{constructor(){super(...arguments),this.Ot=xa,this.Ut=[],this.ft=new Ze(this),this.vt=new et}render(...e){return e.find(t=>!ga(t))??N}update(e,t){let a=this.Ut,s=a.length;this.Ut=t;let i=this.ft,r=this.vt;this.isConnected||this.disconnected();for(let l=0;l<t.length&&!(l>this.Ot);l++){let c=t[l];if(!ga(c))return this.Ot=l,c;l<s&&c===a[l]||(this.Ot=xa,s=0,Promise.resolve(c).then(async d=>{for(;r.get();)await r.get();let p=i.deref();if(p!==void 0){let h=p.Ut.indexOf(c);h>-1&&h<p.Ot&&(p.Ot=h,p.setValue(d))}}))}return N}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},eo=K(yt);var ni=Symbol.for(""),li=o=>{if(o?.r===ni)return o?._$litStatic$};var ba=new Map,Ca=o=>(e,...t)=>{let a=t.length,s,i,r=[],l=[],c,d=0,p=!1;for(;d<a;){for(c=e[d];d<a&&(i=t[d],(s=li(i))!==void 0);)c+=s+e[++d],p=!0;d!==a&&l.push(i),r.push(c),d++}if(d===a&&r.push(e[a]),p){let h=r.join("$$lit$$");(e=ba.get(h))===void 0&&(r.raw=r,ba.set(h,e=r)),t=l}return o(e,...t)},to=Ca(n),ao=Ca(_e);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var Ea=["dom","seg","ter","qua","qui","sex","s\xE1b"],Fa={mensagem:"Mensagens",fotos:"Fotos"},Oa={erro:"erro",cota:"sem cota",formato:"resposta fora do formato"},ce=o=>String(o).padStart(2,"0"),Et=o=>`${o.getFullYear()}-${ce(o.getMonth()+1)}-${ce(o.getDate())}`,it=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},Na=o=>String(Math.round(o*10)/10).replace(".",","),Ra=o=>o>=1e3?`${Na(o/1e3)} mil`:String(Math.round(o||0)),Ia=o=>`${o} ${o===1?"chamada":"chamadas"}`,ci=(o,e={})=>e[o]||(o||"").replace(/^ai_task\./,"").replace(/_/g," ")||"padr\xE3o do Home Assistant",di=(o,e)=>{let t=new Date(o);if(!Number.isFinite(t.getTime()))return"";let a=`${ce(t.getHours())}:${ce(t.getMinutes())}`;return Et(t)===Et(e)?`hoje ${a}`:`${ce(t.getDate())}/${ce(t.getMonth()+1)} ${a}`};function pi(o){let e=o.join(" ").toLowerCase();return/google|gemini/.test(e)?n`Consumo exato do Gemini: no <a href="https://console.cloud.google.com/apis/dashboard" target="_blank" rel="noopener">Google Cloud Console</a>, abra APIs e serviços ativados → Generative Language API; o gráfico de tráfego mostra os pedidos e os erros 429 de cota. Os limites do plano grátis estão no <a href="https://aistudio.google.com/" target="_blank" rel="noopener">Google AI Studio</a>.`:/openai|chatgpt|gpt/.test(e)?n`Consumo exato e custo da OpenAI: <a href="https://platform.openai.com/usage" target="_blank" rel="noopener">platform.openai.com/usage</a>.`:/anthropic|claude/.test(e)?n`Consumo exato e custo da Anthropic: <a href="https://platform.claude.com/usage" target="_blank" rel="noopener">Claude Console → Usage</a>.`:"O consumo exato e o custo ficam no painel do provedor da sua IA (Google, OpenAI, Anthropic\u2026)."}function Ha({u:o,day:e,onDay:t,head:a,app:s,using:i="",names:r={}}){if(!o||!o.hoje)return n`<div class="panel uso-panel" id="uso-ia">${a}<p class="panel-lead">Carregando…</p></div>`;let l=new Date,c=Et(l),d=b=>b.cota?n`<span class="s alert">${b.cota} ${b.cota>1?"vezes":"vez"} sem cota</span>`:b.erros?n`<span class="s alert">${b.erros} com erro</span>`:n`<span class="s">≈ ${Ra(b.tokens)} tokens</span>`,p=(b,F)=>n`<div class="uso-tile"><span class="k">${b}</span><span class="v">${F.chamadas||0}</span>${d(F)}</div>`,h=o.dias||[],f=Math.max(1,...h.map(b=>b.chamadas||0)),m=h.find(b=>b.dia===e)||h.find(b=>b.dia===c)||{dia:c,chamadas:0,erros:0,cota:0},v=b=>b.dia===c?"hoje":Ea[it(b.dia).getDay()],g=o.semana&&o.semana.tipos||{},w=[...Object.keys(o.mes&&o.mes.ias||{}),...Object.keys(o.semana&&o.semana.ias||{}),i],S=o.ultimas||[];return n`<div class="panel uso-panel" id="uso-ia">
    ${a}
    <div class="uso-tiles">${p("Hoje",o.hoje)}${p("7 dias",o.semana)}${p("Este m\xEAs",o.mes)}</div>
    <div class="uso-chart" role="group" aria-label="Chamadas de IA nos últimos 7 dias">
      ${h.map(b=>{let F=b.chamadas?Math.max(4,Math.round(b.chamadas/f*100)):0;return n`<button type="button" class="uso-bar ${b.dia===c?"today":""}" aria-pressed=${b.dia===m.dia?"true":"false"} aria-label="${v(b)}: ${Ia(b.chamadas)}" @click=${()=>t(b.dia)}><i style="height:${F}%"></i></button>`})}
    </div>
    <div class="uso-days" aria-hidden="true">${h.map(b=>n`<span>${v(b)}</span>`)}</div>
    <p class="uso-cap" aria-live="polite">${m.dia===c?"Hoje":`${Ea[it(m.dia).getDay()]}, ${ce(it(m.dia).getDate())}/${ce(it(m.dia).getMonth()+1)}`}: <b>${Ia(m.chamadas)}</b>${m.erros?`, ${m.erros} com erro`:""}${m.cota?`, ${m.cota} sem cota`:""}.</p>
    ${Object.keys(g).length?n`<ul class="uso-kinds">${Object.keys(g).sort((b,F)=>g[F]-g[b]).map(b=>n`<li>${Fa[b]||b} <b>${g[b]}</b></li>`)}</ul>`:u}
    <details class="uso-last">
      <summary>Últimas chamadas</summary>
      <ul>
        ${S.length?S.map(b=>n`<li><b>${Fa[b.tipo]||b.tipo}</b><span>${ci(b.ia,r)}</span>${Oa[b.resultado]?n`<span class="r-err">${Oa[b.resultado]}</span>`:u}
                <span class="t">${Na(b.segundos)} s · ≈ ${Ra(b.tokens)} tokens${b.imagens?` \xB7 ${b.imagens} ${b.imagens>1?"imagens":"imagem"}`:""} · ${di(b.quando,l)}</span></li>`):n`<li>Nenhuma chamada ainda.</li>`}
      </ul>
    </details>
    <p class="uso-note">${pi(w)} A estimativa de tokens daqui conta só o texto; as imagens e as instruções da IA somam mais.</p>
    <p class="uso-note">No Home Assistant, o sensor <code>${o.sensor}</code> traz as chamadas de hoje do ${s}, com erros, cota e tokens estimados, para pôr num painel ou numa automação.</p>
  </div>`}var Pa=`
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
`;var Ft="M8 0h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8L0 13V7z",hi="M9.7 10a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 1 0 5.4 0z";function qa({theme:o,onTheme:e,icon:t}){return n`<div class="seg themes" role="radiogroup" aria-label="Tema">
    ${[["auto","Autom\xE1tico","smartphone"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>n`<button type="button" class=${o===a?"on":""} role="radio" aria-checked=${o===a?"true":"false"} @click=${()=>e(a)}>${t(i)}<span>${s}</span></button>`)}
  </div>`}function La({palette:o,value:e,onPick:t}){return n`<div class="tag-swatches" role="radiogroup" aria-label="Cor do app">
    ${o.map(a=>n`<button type="button" class="tsw ${e===a.id?"on":""}" role="radio" aria-checked=${e===a.id?"true":"false"} style="--a:${a.fill}" @click=${()=>t(a.id)}>
        <svg viewBox="-5 -5 40 30" aria-hidden="true"><path class="sw-ring" d=${Ft}></path><path class="sw-gap" d=${Ft}></path><path class="sw-fill" d=${Ft+hi}></path><path class="sw-check" d="m14.6 10.3 3.2 3.2 6.5-6.9"></path></svg>
        <span>${a.label}</span>
      </button>`)}
  </div>`}var ja=`
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
`;var Y={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',"thumbs-down":'<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/>',"chart-column":'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',contrast:'<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>'};var Ua="./fonts/barlow-400.woff2";var Va="./fonts/barlow-500.woff2";var Ba="./fonts/barlow-600.woff2";var Ya="./fonts/barlow-condensed-500.woff2";var Wa="./fonts/barlow-condensed-600.woff2";var Ka="./fonts/barlow-condensed-700.woff2";var Qa='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Ja=`"CR Barlow", ${Qa}`,Ga=`"CR Barlow Condensed", ${Qa}`;function Xa(){if(document.getElementById("cronologia-fonts"))return;let o=(t,a,s)=>`@font-face{font-family:"${t}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,e=document.createElement("style");e.id="cronologia-fonts",e.textContent=[o("CR Barlow",Ua,400),o("CR Barlow",Va,500),o("CR Barlow",Ba,"600 900"),o("CR Barlow Condensed",Ya,500),o("CR Barlow Condensed",Wa,600),o("CR Barlow Condensed",Ka,"700 900")].join(`
`),document.head.appendChild(e)}var Za=Ne`
  :host {
    --rv-body: ${fe(Ja)};
    --rv-display: ${fe(Ga)};
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
  /* Novo › Evento: Colar mensagem / Escolher fotos / Digitalizar com IA, dashed tiles like the InventarIA and the ResolvIA */
  .imp-field {
    margin-bottom: 12px;
  }
  .imp-tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
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
`,es=Ne`
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
  /* Mais › Integrações: Usar a integração, then how it is going */
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
`;var ts=Ne`
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
  /* a routine or task without a time: "Qualquer hora" */
  .ev-time b.any {
    font-size: 13.5px;
    letter-spacing: -0.01em;
    padding-top: 2px;
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
  .day-head.today .dh-cal {
    border-color: var(--rv-accent);
  }
  .day-head.today .dh-cal small {
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
  .tg-any.all {
    color: var(--rv-muted);
    background: var(--rv-surface-2);
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
    background: var(--rv-surface-2);
    color: var(--rv-muted);
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

  /* ---------- Mais: tabs at the top ---------- */
  .more-tabs {
    position: sticky;
    top: 0;
    z-index: 4;
    margin: 0 0 14px;
    box-shadow: 0 0 0 6px var(--rv-bg);
  }
  /* six tabs: they keep their width and the bar scrolls sideways when the screen is narrow */
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
  /* phones: smaller so the six fit (below ~400 px the bar scrolls sideways) */
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
  /* Five tabs: the icons only where there is room for them. */
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

  /* Mais › Integrações › Levar para o ResolvIA */
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
`;var Ot=class{constructor(e,t){this.url=e,this.onStatus=t,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let e=new WebSocket(this.url);this.ws=e,e.onopen=()=>{this.open=!0,this.backoff=1e3;let t=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))e.send(a);if(this.onStatus&&this.onStatus(!0),t)for(let a of this.reconnectHandlers)a()},e.onmessage=t=>{let a;try{a=JSON.parse(t.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},e.onclose=()=>{let t=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),t&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(e){this.reconnectHandlers.push(e)}_send(e){let t=JSON.stringify(e);this.open?this.ws.send(t):this.queue.push(t)}sendMessagePromise(e){let t=this.nextId++;return new Promise((a,s)=>{this.pending.set(t,{resolve:a,reject:s}),this._send({...e,id:t})})}subscribeMessage(e,t){let a={cb:e,msg:t,id:null,first:null};this.subs.add(a);let s=new Promise((i,r)=>{a.first={resolve:i,reject:r}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(e){let t=this.nextId++;e.id=t,this.byId.set(t,e),this.pending.set(t,{resolve:()=>{e.first&&e.first.resolve(),e.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(t),this.subs.delete(e),e.first&&e.first.reject(a),e.first=null)}}),this.ws.send(JSON.stringify({...e.msg,id:t}))}};function rt(){try{if(window.parent===window)return null;let o=window.parent.document.querySelector("home-assistant");return o&&o.hass||null}catch{return null}}var as=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function ss(){let o=rt();return o&&o.themes&&typeof o.themes.darkMode=="boolean"?o.themes.darkMode:!!(as&&as.matches)}function is(){return{topbar:!(window.parent!==window),haptic(e){try{let t=window.parent;t!==window&&t.dispatchEvent(new t.CustomEvent("haptic",{detail:e}))}catch{}},openInHA(e){try{let t=window.parent;if(t!==window&&t.document){t.history.pushState(null,"",e),t.dispatchEvent(new t.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(e,"_top")}}}var ot=class{constructor(){let e=new URL("ws",location.href);e.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new Ot(e.href,t=>this.statusHandlers.forEach(a=>a(t)))}onStatus(e){this.statusHandlers.push(e)}onReconnect(e){this.conn.onReconnect(e)}call(e,t={}){return this.conn.sendMessagePromise({type:e,...t})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(e){return this.conn.subscribeMessage(e,{type:"cronologia/subscribe_calendars"})}subscribePrefs(e){return this.conn.subscribeMessage(e,{type:"cronologia/prefs/subscribe"})}subscribeEvents(e,t,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:e,start:t,end:a})}listEvents(e,t,a){return this.call("cronologia/events/list",{entity_id:e,start:t,end:a})}createEvent(e,t){return this.call("calendar/event/create",{entity_id:e,event:t})}updateEvent(e,t,a,{recurrenceId:s,range:i}={}){let r={entity_id:e,uid:t,event:a};return s&&(r.recurrence_id=s),i&&(r.recurrence_range=i),this.call("calendar/event/update",r)}deleteEvent(e,t,{recurrenceId:a,range:s}={}){let i={entity_id:e,uid:t};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(e,t){return this.call("cronologia/prefs/set_calendar",{entity_id:e,prefs:t})}setAppPrefs(e){return this.call("cronologia/prefs/set_app",{prefs:e})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(e){return this.conn.subscribeMessage(e,{type:"cronologia/home/subscribe"})}setCheck(e,t,a,s){return this.call("cronologia/check/set",{key:e,done:t,kind:a,...s?{who:s}:{}})}maintDone(e,t,a){return this.call("cronologia/maint/done",{entity_id:e,uid:t,...a?{who:a}:{}})}scoreReassign(e,t){return this.call("cronologia/score/reassign",{key:e,who:t})}scoreExtra(e,t,a){return this.call("cronologia/score/extra",{who:e,points:t,title:a})}scoreDemerit(e,t){return this.call("cronologia/score/demerit",{demerit:e,who:t})}scoreRemove(e){return this.call("cronologia/score/remove",{key:e})}scorePrizes(e,t,a){return this.call("cronologia/score/prizes",{period:e,shared:t,per:a})}scoreReward(e,t){return this.call("cronologia/score/reward",{period:e,text:t})}scoreDelivered(e,t){return this.call("cronologia/score/delivered",{period:e,delivered:t})}maintUndo(e,t){return this.call("cronologia/maint/undo",{entity_id:e,uid:t})}payBill(e,t){return this.call("cronologia/contas/pagar",{conta:e,...t?{valor:t}:{}})}unpayBill(e){return this.call("cronologia/contas/desfazer",{conta:e})}newBill(e){return this.call("cronologia/contas/nova",{conta:e})}dataUrl(e){return new URL(`api/export/${e}`,location.href).href}async importData(e){let t=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(e.name||"")},body:e}),a=await t.json().catch(()=>({}));if(!t.ok)throw new Error(a.error||`Erro ${t.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(e){return this.call("cronologia/versions/restore",{name:e})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(e){return this.call("cronologia/backups/restore",{name:e})}addTodo(e,t){return this.call("cronologia/todo/add",{entity_id:e,task:t})}aiUsage(){return this.call("cronologia/ai/usage")}bringPreview(e){return this.call("cronologia/todo/bring_preview",{entity_id:e})}bring(e,t,a,s=!0){return this.call("cronologia/todo/bring",{entity_id:e,calendar:t,uids:a,remove:s})}setTodo(e,t,a,s=""){return this.call("cronologia/todo/set",{entity_id:e,uid:t,done:a,who:s})}testAlert(e){return this.call("cronologia/notify/test",{target:e})}exportUrl({calendars:e,start:t,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",e.join(",")),s.searchParams.set("start",t),s.searchParams.set("end",a),s.href}async extract(e){let t=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}};var nt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],os=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],U=o=>nt.find(e=>e.id===o),rs=o=>U(os[o%os.length]);function He(o,e){let t=o.replace("#",""),a=parseInt(t.length===3?t.replace(/./g,s=>s+s):t,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${e})`}function z(o,e,t="c"){return`--${t}:${o.fill};--${t}i:${e?o.fill:o.ink};--${t}s:${He(o.fill,e?.18:.15)};`}var Rt=o=>(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var k=(o,e,t)=>`${o} ${o===1?e:t}`,M=(o,e=38)=>o&&o.length>e?o.slice(0,e-1).trimEnd()+"\u2026":o||"",H=o=>o&&o.charAt(0).toUpperCase()+o.slice(1);function lt(o){let e=[],t=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=t.exec(o||"");)s.index>a&&e.push({text:o.slice(a,s.index)}),e.push({url:s[0]}),a=s.index+s[0].length;return a<(o||"").length&&e.push({text:o.slice(a)}),e}var ct=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],ge=["dom","seg","ter","qua","qui","sex","s\xE1b"],xe=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],dt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],ye=o=>String(o).padStart(2,"0"),A=o=>`${o.getFullYear()}-${ye(o.getMonth()+1)}-${ye(o.getDate())}`,E=o=>`${ye(o.getHours())}:${ye(o.getMinutes())}`,D=o=>{let[e,t,a]=o.split("-").map(Number);return new Date(e,t-1,a)},C=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),_=(o,e)=>{let t=new Date(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds());return t.setDate(t.getDate()+e),t},de=(o,e)=>new Date(o.getFullYear(),o.getMonth()+e,1),q=(o,e)=>o.getFullYear()===e.getFullYear()&&o.getMonth()===e.getMonth()&&o.getDate()===e.getDate(),I=(o,e)=>Math.round((C(o)-C(e))/864e5),Pe=(o,e=0)=>_(C(o),-((o.getDay()-e+7)%7)),It=o=>/^\d{4}-\d{2}-\d{2}$/.test(o)?D(o):new Date(o);function J(o){let e=-o.getTimezoneOffset(),t=e>=0?"+":"-";return`${A(o)}T${E(o)}:00${t}${ye(Math.floor(Math.abs(e)/60))}:${ye(Math.abs(e)%60)}`}function P(o,e=new Date,{long:t=!0,cap:a=!0}={}){let s=I(o,e),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${ct[o.getDay()]}, ${o.getDate()} de ${t?xe[o.getMonth()]:dt[o.getMonth()]}`,o.getFullYear()!==e.getFullYear()&&(i+=` de ${o.getFullYear()}`)),a?H(i):i}var Nt=o=>`${ct[o.getDay()]}, ${o.getDate()} de ${xe[o.getMonth()]}`,Q=(o,e=new Date)=>`${o.getDate()} ${dt[o.getMonth()]}${o.getFullYear()!==e.getFullYear()?` ${o.getFullYear()}`:""}`;function pt(o){let e=Math.round(o/6e4);if(e<1)return"agora";if(e<60)return`em ${e} min`;let t=Math.floor(e/60),a=e%60;if(t<24)return a&&t<4?`em ${t} h ${a} min`:`em ${t} h`;let s=Math.round(t/24);return`em ${k(s,"dia","dias")}`}function Ht(o){let e=Math.round(o/6e4);if(e<60)return`${e} min`;let t=Math.floor(e/60),a=e%60;return a?`${t} h ${a} min`:`${t} h`}var ht=[{id:"",label:"N\xE3o repete",short:"N\xE3o"},{id:"DAILY",label:"Todo dia",short:"Di\xE1rio"},{id:"WEEKLY",label:"Toda semana",short:"Semanal"},{id:"MONTHLY",label:"Todo m\xEAs",short:"Mensal"},{id:"YEARLY",label:"Todo ano",short:"Anual"}];function ke(o){if(!o)return"";let e=Object.fromEntries(o.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),t=Number(e.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[e.FREQ];if(!a)return"Repete";let s=t>1?`A cada ${t} ${a[1]}`:a[0];if(e.BYDAY&&e.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${e.BYDAY.split(",").map(r=>i[r]||r).join(", ")})`}if(e.COUNT)s+=`, ${k(Number(e.COUNT),"vez","vezes")}`;else if(e.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(e.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var qe=o=>{let e=/FREQ=(\w+)/.exec(o||"");return e?e[1]:""};async function Pt(o,e=1800){let t=a=>new Promise((s,i)=>{let r=new FileReader;r.onload=()=>s(String(r.result).split(",")[1]||""),r.onerror=()=>i(r.error),r.readAsDataURL(a)});try{let a=await createImageBitmap(o,{imageOrientation:"from-image"}),s=Math.min(1,e/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let r=await new Promise(l=>i.toBlob(l,"image/jpeg",.86));return{mime:"image/jpeg",data:await t(r),url:URL.createObjectURL(r)}}catch{return{mime:o.type||"image/jpeg",data:await t(o),url:URL.createObjectURL(o)}}}function ns(o){let e=new Map(o.map(a=>[a.id,String(a.name||"").split(/\s+/).filter(Boolean)])),t=new Map;for(let a of o){let s=e.get(a.id),i=0;for(let r of o){if(r.id===a.id)continue;let l=e.get(r.id),c=0;for(;c<s.length-1&&c<l.length-1&&s[c].toLowerCase()===l[c].toLowerCase();)c++;c>=2&&c>i&&(i=c)}t.set(a.id,i?{short:s.slice(i).join(" "),group:s.slice(0,i).join(" ")}:{short:a.name,group:""})}return t}var qt={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos",after:"Volta",history:"Feito em"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos"}}},bi={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},Le={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},T=o=>String(o||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),ls=o=>String(o).padStart(2,"0");var us=(o,e)=>`${o}|${e.uid||e.summary}|${e.recurrence_id||e.start}`;function ut(o){let e=String(o||"").replace(/[^\d.,-]/g,"");if(!e)return null;e.includes(",")?e=e.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(e)&&!/\.\d{1,2}$/.test(e)&&(e=e.replace(/\./g,""));let t=Number(e);return Number.isFinite(t)&&t>0?Math.round(t*100)/100:null}var Ae=(o,e=!0)=>o==null?"":o.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:e?2:0,maximumFractionDigits:e?2:0});function cs(o){let e=/(\d+)\s*([a-zçê]+)/i.exec(T(o));if(!e)return null;let t=Math.max(1,Math.min(999,Number(e[1]))),a=e[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:t,unit:s}:null}var te=o=>o?`${o.n} ${o.n===1?Le[o.unit][1]:Le[o.unit][2]}`:"";function Lt(o,e,t=1){let a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),s=e.n*t;if(e.unit==="dias")a.setDate(a.getDate()+s);else if(e.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=e.unit==="anos"?12*s:s,r=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let l=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(r,l))}return a}var $i=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function ds(o){let e=[];for(let t of String(o||"").matchAll($i))e.push(`${t[3]}-${ls(+t[2])}-${ls(+t[1])}`);return e}var ps=o=>o.map(e=>`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`).join(", "),hs=o=>{let e=/(\d+)/.exec(String(o||""));return e?Math.min(1e3,Number(e[1])):0};function ms(o){let e=String(o||"").replace(/\r/g,"").split(`
`),t=0;for(;t<e.length&&!e[t].trim();)t++;let a=/^#\s*([a-z]+)\b/.exec(T(e[t])),s=a&&bi[a[1]];if(!s)return null;let i=Object.entries(qt[s].fields).map(([c,d])=>[c,T(d)]),r={};for(t++;t<e.length;t++){let c=/^([^:]{2,24}):\s*(.*)$/.exec(e[t]);if(!c)break;let d=T(c[1]),p=i.find(([,h])=>h===d||h.startsWith("aviso")&&d.startsWith("aviso"));if(!p)break;r[p[0]]=c[2].trim()}let l={kind:s,notes:e.slice(t).join(`
`).trim()};if(s==="remedio")l.dose=r.dose||"",l.who=r.who||"",l.alert=!/^(nao|desligado|off)/.test(T(r.alert));else if(s==="conta")l.value=ut(r.value);else if(s==="rotina")l.who=r.who||"",l.points=hs(r.points),l.after=r.after?cs(r.after):null,l.after&&(l.history=ds(r.history));else{l.who=r.who||"",l.every=cs(r.every)||{n:6,unit:"meses"};let c=/(\d+)/.exec(r.warn||"");l.warn=c?Math.min(365,Number(c[1])):7,l.history=ds(r.history),l.points=hs(r.points)}return l}function vs(o){let e=[qt[o.kind].tag],t=(i,r)=>{r!=null&&String(r).trim()&&e.push(`${i}: ${String(r).replace(/\s*\n\s*/g," ").trim()}`)},a=qt[o.kind].fields;o.kind==="remedio"?(t(a.dose,o.dose),t(a.who,o.who),o.alert===!1&&t(a.alert,"n\xE3o")):o.kind==="conta"?t(a.value,o.value!=null?Ae(o.value):""):o.kind==="rotina"?(t(a.who,o.who),o.points>0&&t(a.points,o.points),o.after&&o.after.n>0&&(t(a.after,`${te(o.after)} depois de feita`),t(a.history,ps((o.history||[]).slice(0,8))))):(t(a.who,o.who),t(a.every,te(o.every)),t(a.warn,`${o.warn??7} ${(o.warn??7)===1?"dia":"dias"} antes`),t(a.history,ps((o.history||[]).slice(0,8))),o.points>0&&t(a.points,o.points));let s=String(o.notes||"").trim();return s?`${e.join(`
`)}
${s}`:e.join(`
`)}var fs=4,wi=300*1e3;function mt(o,e){let t=It(e.start),a=It(e.end),s=e.all_day!=null?!!e.all_day:/^\d{4}-\d{2}-\d{2}$/.test(e.start);return{key:us(o,e),kind:ms(e.description),cal:o,uid:e.uid||null,rid:e.recurrence_id||null,rrule:e.rrule||null,summary:e.summary||"(sem t\xEDtulo)",description:e.description||"",location:e.location||"",allDay:s,start:t,end:a>t?a:_(t,s?1:0),raw:e}}var vt=class{constructor(e,t){this.api=e,this.onChange=t,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(e){let t=[...new Set(e)].sort();if(t.join()!==this.calendars.join()){this.calendars=t;for(let a of this.windows)this._syncWindow(a)}}ensure(e,t){let a=this._covering(e,t);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:_(C(e),-7),end:_(C(t),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(e,t,a=this.calendars){let s=this._covering(e,t),i=[];if(!s)return i;for(let r of a){let l=s.cals.get(r);if(l)for(let c of l.events)c.start<t&&c.end>e&&i.push(c)}return i.sort((r,l)=>r.start-l.start||Number(l.allDay)-Number(r.allDay)||r.summary.localeCompare(l.summary,"pt-BR"))}loading(e,t){let a=this._covering(e,t);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let e=new Map;for(let t of this.windows)for(let[a,s]of t.cals)s.error&&e.set(a,s.error);return e}refresh(e){for(let t of this.windows){let a=t.cals.get(e);a&&a.poll&&this._fetch(t,e,a)}}reloadAll(){for(let e of this.windows)for(let[t,a]of e.cals)a.poll&&this._fetch(e,t,a)}dispose(){for(let e of this.windows)for(let[t]of e.cals)this._drop(e,t);this.windows=[]}_covering(e,t){let a=null;for(let s of this.windows)s.start<=e&&s.end>=t&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(e){for(let t of this.calendars)e.cals.has(t)||this._add(e,t);for(let t of[...e.cals.keys()])this.calendars.includes(t)||this._drop(e,t)}_add(e,t){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};e.cals.set(t,a);let s=J(e.start),i=J(e.end);if(this.noSubscribe)return this._startPolling(e,t,a);a.unsub=this.api.subscribeEvents(t,s,i,r=>{e.cals.has(t)&&(r&&Array.isArray(r.events)?(a.events=r.events.map(l=>mt(t,l)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(r=>r&&r.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(e,t,a)):(a.loaded=!0,a.error=r&&r.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(e,t,a){return this._fetch(e,t,a),a.poll=setInterval(()=>this._fetch(e,t,a),wi),null}async _fetch(e,t,a){try{let s=await this.api.listEvents(t,J(e.start),J(e.end));if(!e.cals.has(t))return;a.events=(s.events||[]).map(i=>mt(t,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(e,t){let a=e.cals.get(t);a&&(e.cals.delete(t),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=fs)){this.windows.sort((e,t)=>t.used-e.used);for(let e of this.windows.splice(fs))for(let[t]of e.cals)this._drop(e,t)}}};function se(o,e){let t=C(e),a=_(t,1);return o.filter(s=>s.start<a&&s.end>t)}function gs(o,e){let t=C(e).getTime(),a=t+864e5,s=o.filter(d=>!d.allDay).map(d=>({e:d,s:Math.max(d.start.getTime(),t),t:Math.min(Math.max(d.end.getTime(),d.start.getTime()+15*6e4),a)})).sort((d,p)=>d.s-p.s||p.t-d.t),i=[],r=[],l=-1,c=()=>{let d=[];for(let p of r){let h=d.findIndex(f=>f<=p.s);h<0?(h=d.length,d.push(p.t)):d[h]=p.t,p.lane=h}for(let p of r)i.push({...p,lanes:d.length});r=[]};for(let d of s)r.length&&d.s>=l&&c(),r.push(d),l=Math.max(l,d.t);return r.length&&c(),i.map(d=>({event:d.e,top:(d.s-t)/36e5,height:(d.t-d.s)/36e5,lane:d.lane,lanes:d.lanes}))}var jt=o=>o.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function _i(o){return o.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function yi(o){let e=o.indexOf(":");if(e<0)return null;let t=o.slice(0,e),a=o.slice(e+1),[s,...i]=t.split(";"),r={};for(let l of i){let[c,d]=l.split("=");c&&(r[c.toUpperCase()]=(d||"").replace(/^"|"$/g,""))}return{name:s.toUpperCase(),params:r,value:a}}function xs(o,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(t.formatToParts(new Date(e)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-e}catch{return null}}function bs(o){let e=o.value.trim(),t=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(e);if(!t)return null;let[,a,s,i,r,l,c,d]=t;if(r==null||o.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(d)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+r,+l,+(c||0)))};let p=o.params.TZID;if(p){let h=Date.UTC(+a,+s-1,+i,+r,+l,+(c||0)),f=xs(p,h);if(f!=null){let m=h-f,v=xs(p,m);return{allDay:!1,date:new Date(h-(v??f))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+r,+l,+(c||0))}}function ki(o){let e=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(o.trim());if(!e)return null;let[,t,a,s,i,r,l]=e,c=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+r||0)*60+(+l||0))*1e3;return t==="-"?-c:c}function $s(o){let e=[],t=null,a=0;for(let i of _i(o)){if(/^BEGIN:VEVENT/i.test(i)){t={},a=0;continue}if(!t)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){e.push(t),t=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let r=yi(i);r&&(r.name==="SUMMARY"?t.summary=jt(r.value):r.name==="DESCRIPTION"?t.description=jt(r.value):r.name==="LOCATION"?t.location=jt(r.value):r.name==="DTSTART"?t.dtstart=bs(r):r.name==="DTEND"?t.dtend=bs(r):r.name==="DURATION"?t.duration=ki(r.value):r.name==="RRULE"?t.rrule=r.value.trim():r.name==="STATUS"?t.status=r.value.trim().toUpperCase():r.name==="RECURRENCE-ID"&&(t.recurrence=!0))}let s=[];for(let i of e){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let r=i.dtstart.date,l=i.dtend?i.dtend.date:i.duration!=null?new Date(r.getTime()+i.duration):null,c=i.dtstart.allDay,d={title:(i.summary||"").trim()||"Evento",date:A(r),start:c?"":E(r),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(c){if(l){let p=new Date(l.getFullYear(),l.getMonth(),l.getDate()-1);p>r&&(d.end_date=A(p))}}else l&&l>r&&(d.end=E(l),A(l)!==A(r)&&(d.end_date=A(l)));s.push(d)}return s}var y=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ee(Y[o]||Y.calendar)}</svg>`,Me={"":{label:"Evento",icon:"calendar"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},ks=["SU","MO","TU","WE","TH","FR","SA"],Ai=["D","S","T","Q","Q","S","S"],Mi=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],Di=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],Si=o=>o.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),Ut=o=>(o||"?").trim().charAt(0).toUpperCase(),ws=o=>o<60?`${o} min`:`${Math.floor(o/60)} h${o%60?` ${o%60} min`:""}`;function _s(o,e,t){let a=I(D(o),e);return t?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function zi(o,e){return o.days<-1?`venceu h\xE1 ${-o.days} dias`:o.days===-1?"venceu ontem":o.days===0?"\xE9 hoje":o.days===1?"amanh\xE3":o.days<=60?`em ${o.days} dias`:`em ${Q(D(o.due),e)}`}function Vt(o,e){return o.done?`feito por ${o.done.by||"algu\xE9m"} \xB7 volta ${o.next?P(D(o.next),e,{long:!1,cap:!1}):`em ${te(o.after)}`}`:[o.late>0?o.late===1?"venceu ontem":`atrasada h\xE1 ${o.late} dias`:o.time||"hoje",o.who,`volta ${te(o.after)} depois`].filter(Boolean).join(" \xB7 ")}function ys(o,e){let t=Object.fromEntries(String(o||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(r=>r.split("="))),a={freq:"uma",byday:[e.getDay()],interval:3,dur:"sempre",until:A(_(e,30)),days:7},s=Number(t.INTERVAL||1);t.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):t.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:t.BYDAY?t.BYDAY.split(",").map(r=>ks.indexOf(r.slice(-2))).filter(r=>r>=0):[e.getDay()]}):t.FREQ==="MONTHLY"?a.freq="mensal":t.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(t.UNTIL||"");if(i){let r=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:A(r)})}return a}var As=o=>class extends o{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],targets:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(e){return e.gerencia?e.gerencia.pago?{at:null,by:""}:null:e.todo?e.todo.done?{at:null,by:""}:null:this._ix().checks[e.key]||null}_targetName(e){let t=this._ix().targets.find(a=>a.id===e);return t?t.name:(e||"").replace(/^mobile_app_/,"").replace(/_/g," ")}_gerenciaEvents(e,t){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=D(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:_(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<t&&s.end>e))}_billsList(){let e=this._ix(),t=C(new Date(this._now)),a=A(t),s=A(_(t,8)),i=A(_(t,-1)),r=[];for(let l of e.gerencia&&e.gerencia.contas||[]){let c=!l.pago,d=this._paidNow&&this._paidNow.has(l.id);(c?!(l.atrasada||l.vencimento<=s):!d&&!(l.vencimento>=i&&l.vencimento<=s))||r.push({id:l.id,source:"gerencia",title:l.descricao,value:l.valor,due:l.vencimento,paid:!!l.pago,overdue:c&&(l.atrasada||l.vencimento<a),sub:l.tipo==="fatura"?k(l.itens||0,"compra","compras"):l.categoria||"",c:l})}for(let l of e.bills||[]){let c=this._cal(l.cal);r.push({id:l.key,source:"cal",title:l.summary,value:l.value,due:l.due,paid:!!l.paid,overdue:l.overdue,sub:c?c.name:"",item:l})}return r.sort((l,c)=>Number(l.paid)-Number(c.paid)||l.due.localeCompare(c.due)||l.title.localeCompare(c.title,"pt-BR"))}_eventOfItem(e){return mt(e.cal,{start:e.start,end:e.end,summary:e.summary,description:e.description,location:e.location,uid:e.uid,recurrence_id:e.rid,rrule:e.rrule})}_openIndexItem(e){this._openEvent(this._eventOfItem(e))}async _check(e,t){t==="remedio"&&(this._medsHold=!0);try{await this.api.setCheck(e.key,!0,t),this._haptic("success");let a=Me[t];this._showToast(`${M(e.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _undoCheck(e,t){try{await this.api.setCheck(e.key,!1,t),this._haptic("light"),this._showToast(`${M(e.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(e.key,!0,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(e){if(e.source==="cal")return this._check(e.item,"conta");try{e.busy=!0,this.requestUpdate(),await this.api.payBill(e.id),(this._paidNow||(this._paidNow=new Set)).add(e.id),this._haptic("success"),this._showToast(`${M(e.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(e.id).catch(t=>this._showToast(t.message))})}catch(t){this._showToast(`O GerencIA n\xE3o deu baixa: ${t.message}`)}}async _unpay(e){if(e.source==="cal")return this._undoCheck(e.item,"conta");try{await this.api.unpayBill(e.id),this._showToast(`${M(e.title,26)}: volta para a pagar`)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _testAlert(e){try{await this.api.testAlert(e),this._showToast(`Aviso de teste enviado para ${this._targetName(e)}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(t){this._showToast(`N\xE3o foi: ${t.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#avisos");e&&e.scrollIntoView({block:"start"})}))}_ring(e,t,a=null,s=null){let r=2*Math.PI*15,l=Math.max(0,Math.min(1,e||0));return n`<span class="ring2 ${t}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${l>0?_e`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(l*r).toFixed(2)} ${r.toFixed(2)}`}></circle>`:u}
        </svg>
        ${a!=null?n`<b>${a}</b>`:s||u}
      </span>`}_kindIcon(e){return e.kind?n`<span class="kind-ic">${y(Me[e.kind.kind].icon)}</span>`:u}_renderMedsPanel(){let e=this._ix().meds||[];if(!e.length)return u;let t=e.filter(r=>r.taken).length,a=e.filter(r=>r.state==="atrasado"),s=[];for(let r of e){let l=r.who||"",c=s.find(d=>T(d.who)===T(l));c||s.push(c={who:l,list:[],notify:r.notify}),c.list.push(r)}let i=t===e.length;return n`<div class="panel meds ${a.length?"alert":""} ${i?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${y("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${i?"Tudo tomado":`${t} de ${e.length} ${e.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(t/e.length,a.length?"bad":i?"ok":"acc",`${t}/${e.length}`)}
        </div>
        ${a.length?n`<div class="meds-alert" role="alert">${y("triangle-alert")}<span>${a.length===1?n`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${ws(a[0].late_min)}`:n`<b>${a.length} doses atrasadas</b>: ${a.map(r=>r.summary).join(", ")}`}</span></div>`:u}
        ${s.map(r=>n`${s.length>1||r.who?n`<div class="meds-who"><span class="avatar">${Ut(r.who)}</span><b>${r.who||"Sem pessoa"}</b><small>${r.list.filter(l=>l.taken).length} de ${r.list.length}</small>${r.notify?n`<span class="who-bell" title="Aviso no celular: ${this._targetName(r.notify)}">${y("bell-ring")}</span>`:u}</div>`:u}
            ${j(r.list,l=>l.key,l=>this._renderDose(l))}`)}
        ${this._alertsHint(e)}
      </div>`}_renderDose(e){let t=e.state,a=[e.dose,t==="tomado"?`tomou \xE0s ${E(new Date(e.taken.at))}${e.taken.by&&T(e.taken.by)!==T(e.who)?` \xB7 ${e.taken.by}`:""}`:t==="atrasado"?`atrasado ${ws(e.late_min)}`:t==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return n`<div class="dose ${t}">
        <button class="dose-main" @click=${()=>this._openIndexItem(e)}>
          <span class="dose-time">${e.time||"dia"}</span>
          <span class="dose-tx"><b>${e.summary}</b>${a?n`<small>${a}</small>`:u}</span>
        </button>
        ${t==="tomado"?n`<button class="dose-done" @click=${()=>this._undoCheck(e,"remedio")} aria-label="Desmarcar ${e.summary}">${y("check")}</button>`:n`<button class="dose-btn ${t}" @click=${()=>this._check(e,"remedio")}>Tomei</button>`}
      </div>`}_alertsHint(e){let t=this._app("alerts",null)||{};if(t.meds===!1)return n`<button class="panel-foot" @click=${()=>this._goAlerts()}>${y("bell-ring")}<span>Avisos no celular desligados</span>${y("chevron-right")}</button>`;let a=[...new Set(e.filter(l=>l.alert&&!l.notify&&l.who).map(l=>l.who))],s=(t.caregivers||[]).length,i=[...new Set(e.filter(l=>l.alert&&l.notify).map(l=>l.who))],r=a.length&&!s?`Sem celular para ${a.join(", ")}: escolha quem avisar`:i.length?`Avisa no celular de ${i.join(", ")}${s?" e de quem cuida":""}`:"Escolha os celulares que recebem os avisos";return n`<button class="panel-foot ${a.length&&!s?"warn":""}" @click=${()=>this._goAlerts()}>${y("bell-ring")}<span>${r}</span>${y("chevron-right")}</button>`}_renderBillsPanel(){let e=this._billsList();if(!e.length)return u;let t=new Date(this._now),a=e.filter(c=>!c.paid),s=a.filter(c=>c.overdue),i=a.reduce((c,d)=>c+(d.value||0),0),r=this._billsAll?e:e.slice(0,5),l=this._ix().gerencia||{};return n`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="overline">Contas a pagar</span>
          ${a.length?n`<span class="bills-sum"><b>${Ae(i,!1)}</b><small>${s.length?`${k(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:n`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${j(r,c=>c.id,c=>{let d=D(c.due),p=I(d,t)===0;return n`<div class="bill ${c.paid?"paid":c.overdue?"late":p?"today":""}">
            <button class="bill-main" @click=${()=>c.source==="gerencia"?this._openSheet("bill",{b:c}):this._openIndexItem(c.item)}>
              <span class="bill-due"><b>${d.getDate()}</b><small>${dt[d.getMonth()]}</small></span>
              <span class="bill-tx"><b>${c.title}</b><small>${c.value!=null?n`<span class="bill-val">${Ae(c.value)}</span> · `:u}${[_s(c.due,t,c.paid),c.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${c.paid?n`<button class="dose-done" @click=${()=>this._unpay(c)} aria-label="Desfazer pagamento de ${c.title}">${y("check")}</button>`:n`<button class="dose-btn ${c.overdue?"atrasado":p?"agora":""}" ?disabled=${c.busy} @click=${()=>this._pay(c)}>Paguei</button>`}
          </div>`})}
        ${e.length>5?n`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${y(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${e.length-5}`}</button>`:u}
        ${l.ligado?n`<div class="panel-foot plain">${y("wallet")}<span>${l.erro?`GerencIA: ${l.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:u}
      </div>`}_renderHomePanel(){let e=this._ix(),t=e.routines||[],a=(e.maint||[]).filter(r=>r.state!=="ok"),s=(e.maint||[]).length;if(!t.length&&!a.length)return s?n`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${y("wrench")}<span>Manutenção da casa em dia · ${k(s,"item","itens")}</span>${y("chevron-right")}</button>`:u;let i=t.filter(r=>r.done).length;return n`<div class="panel chores" id="casa">
        ${t.length?n`<div class="chores-head"><span class="overline">Rotina da casa</span><small>${i} de ${t.length}</small></div>
              ${j(t,r=>r.key,r=>n`<div class="chore ${r.done?"done":""}">
                  <button class="chk ${r.done?"on":""}" @click=${()=>r.done?this._undoCheck(r,"rotina"):this._markDone(r,"rotina")} aria-label="${r.done?"Desmarcar":"Marcar"} ${r.summary}">${r.done?y("check"):u}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(r)}><b>${r.summary}</b><small class=${r.late>0&&!r.done?"late":""}>${!r.done&&this._pickWho()&&r.points>0?n`<span class="pts-inline">+${r.points}</span> · `:u}${r.after?Vt(r,new Date(this._now)):[r.yesterday?"ficou de ontem":r.time,r.done?`feito${r.done.by?` por ${r.done.by}`:""}`:r.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
                  ${!r.done&&this._pickWho()?this._renderQuickWho(r.summary,r.points||0,l=>this._markDone(r,"rotina",l)):r.points>0&&this._scoreOn()?n`<span class="pts ${r.done?"got":""}">+${r.points}</span>`:u}
                </div>`)}`:u}
        ${a.length?n`<div class="chores-head ${t.length?"sub":""}"><span class="overline">Manutenção da casa</span></div>
              ${j(a,r=>r.key,r=>this._renderMaintRow(r))}`:u}
        ${s?n`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${y("wrench")}Todas as manutenções (${s})</button>`:u}
      </div>`}_renderMaintRow(e){let t=new Date(this._now),a=e.state==="vencida"?"bad":e.state==="perto"?"warn":"ok";return n`<div class="maint ${e.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(e)}>
          ${this._ring(e.progress,a,null,y("wrench"))}
          <span class="maint-tx"><b>${e.summary}</b><small>${zi(e,t)} · a cada ${te(e.every)}${e.who?` \xB7 ${e.who}`:""}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</small></span>
        </button>
        ${e.canMove?this._pickWho()?this._renderQuickWho(e.summary,e.points||0,s=>this._maintDone(e,s)):n`<button class="dose-btn ${e.state==="vencida"?"atrasado":e.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(e)}>Feito</button>`:u}
      </div>`}_renderMaintSheet(){let e=this._ix().maint||[];return n`${this._sheetHead("Manuten\xE7\xE3o da casa")}
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
        <div class="maint-list">${e.length?j(e,t=>t.key,t=>this._renderMaintRow(t)):n`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${y("plus")}Nova manutenção</button></div>`}_renderKindFacts(e){let t=e.kind,a=new Date(this._now),s=this._checkOf(e),i=[];if(t.kind==="remedio"){t.dose&&i.push(["pill",`Dose: ${t.dose}`]),t.who&&i.push(["user-round",`Quem toma: ${t.who}`]);let c=this._ix().people.find(d=>T(d.name)===T(t.who));i.push(["bell-ring",t.alert?c&&c.notify?`Aviso no celular: ${this._targetName(c.notify)}`:"Aviso no celular: escolha o celular em Mais":"Sem aviso no celular"])}else t.kind==="conta"?t.value!=null&&i.push(["receipt",Ae(t.value)]):t.kind==="rotina"?(t.who&&i.push(["user-round",`Quem faz: ${t.who}`]),t.points>0&&i.push(["award",`${t.points} pontos para quem fizer`]),t.after&&!e.rrule&&(i.push(["repeat",`Volta ${te(t.after)} depois de feita (na agenda, s\xF3 a pr\xF3xima vez)`]),t.history&&t.history.length&&i.push(["check",`Feito em ${t.history.slice(0,4).map(c=>Q(D(c),a)).join(", ")}`]))):t.kind==="manutencao"&&(t.points>0&&i.push(["award",`${t.points} pontos para quem fizer`]),i.push(["repeat",`A cada ${te(t.every)}, contando da \xFAltima vez`]),t.who&&i.push(["user-round",`Quem faz: ${t.who}`]),i.push(["bell-ring",`Aparece na tela inicial ${k(t.warn,"dia","dias")} antes`]),t.history&&t.history.length&&i.push(["check",`Feito em ${t.history.slice(0,4).map(c=>Q(D(c),a)).join(", ")}`]));let r=Me[t.kind],l=u;if(t.kind==="manutencao"){let c=(this._ix().maint||[]).find(d=>d.cal===e.cal&&d.uid===e.uid);c&&c.canMove&&(l=this._pickWho()?this._renderWhoButtons(this._scoreOn()&&c.points||0,d=>this._maintDone(c,d)):n`<button class="btn primary kind-act" @click=${()=>this._maintDone(c)}>${y("check")}Feito hoje</button>`)}else if(e.start<_(C(a),2)){let c={key:e.key,summary:e.summary};l=s?n`<div class="kind-state">${y("circle-check")}<span>${H(r.done)}${s.at?` ${I(new Date(s.at),a)===0?"hoje":Q(new Date(s.at),a)} \xE0s ${E(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(c,t.kind)}>Desfazer</button></div>`:(t.kind==="rotina"||t.kind==="manutencao")&&this._pickWho()?this._renderWhoButtons(t.points||0,d=>this._closeSheet().then(()=>this._markDone({...c,points:t.points||0},t.kind,d))):t.kind==="rotina"||t.kind==="manutencao"?n`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...c,points:t.points||0},t.kind))}>${y("check")}${r.verb}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`:n`<button class="btn primary kind-act" @click=${()=>this._check(c,t.kind).then(()=>this._closeSheet())}>${y("check")}${r.verb}</button>`}return n`${i.map(([c,d])=>n`<div class="fact">${y(c)}<span>${d}</span></div>`)}
        ${t.notes?n`<div class="fact notes">${y("file-text")}<span>${t.notes}</span></div>`:u}
        ${l}`}_renderBillSheet(){let e=this._form.b,t=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===e.id)||e.c,a=new Date(this._now),s=D(t.vencimento);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.descricao}</h3><p class="ev-cal">GerencIA · <b>${_s(t.vencimento,a,t.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${y("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${y("receipt")}<span><b>${Ae(t.valor)}</b>${t.tipo==="fatura"?` \xB7 ${k(t.itens||0,"compra","compras")} na fatura`:t.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${y("calendar")}<span>${I(s,a)<0?"Venceu":"Vence"} ${P(s,a,{cap:!1})}</span></div>
          ${t.categoria?n`<div class="fact">${y("layers")}<span>${t.categoria}</span></div>`:u}
          ${t.conta?n`<div class="fact">${y("wallet")}<span>${t.conta}</span></div>`:u}
        </div>
        <p class="sheet-note">${y("info")} ${t.pago?"J\xE1 est\xE1 paga no GerencIA.":t.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${t.pago?n`<button class="btn outline" @click=${()=>this._unpay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${y("undo-2")}Desfazer pagamento</button>`:n`<button class="btn primary" @click=${()=>this._pay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${y("check")}Paguei</button>`}
        </div>`}_kindCal(e){let t=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[e];return(a&&t.find(i=>a.test(i.name)&&i.canUpdate)||t.find(i=>i.id===this._defaultCal())||t[0]||{}).id||null}_openKindForm({kind:e="remedio",ev:t=null,copy:a=!1,date:s=null}={}){let i=this._writable(),r=this._ix().gerencia||{};if(!i.length&&!(e==="conta"&&r.ligado)&&!(t&&!a)){this._openSheet("nocal",{});return}let l=C(new Date),c=s?C(s):l,d={mode:"add",kind:e,cal:this._kindCal(e),title:"",date:A(c),times:e==="rotina"?["19:00"]:["08:00"],allDay:e!=="remedio",...ys(e==="conta"?"":"FREQ=DAILY",c),dose:"",who:"",whoOther:!1,alert:!0,value:"",repeat:"mensal",dest:r.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},afterN:2,last:A(l),warn:7,history:[],points:this._scoreOn()&&(e==="rotina"||e==="manutencao")?e==="rotina"?10:30:0,notes:"",location:""};if(t){let p=t.kind,h=ys(t.rrule,t.start);d={...d,...h,mode:a?"add":"edit",kind:p.kind,cal:a?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._kindCal(p.kind):t.cal,origCal:t.cal,uid:t.uid,rid:a?null:t.rid,title:t.summary,date:A(t.start),times:t.allDay?["09:00"]:[E(t.start)],allDay:t.allDay,dose:p.dose||"",who:p.who||"",alert:p.alert!==!1,value:p.value!=null?String(p.value.toFixed(2)).replace(".",","):"",repeat:h.freq==="mensal"?"mensal":h.freq==="anual"?"anual":"nao",dest:"cal",every:p.every||d.every,warn:p.warn??7,history:p.history||[],last:p.history&&p.history[0]||d.last,points:p.points||0,notes:p.notes||"",location:t.location||""},p.kind==="rotina"&&p.after&&!t.rrule&&Object.assign(d,{freq:"depois",afterN:Math.max(1,Math.round(p.after.n*Le[p.after.unit][0]))}),d.wasAfter=d.freq==="depois"}this._openSheet("form",d),d.mode==="add"&&this.updateComplete.then(()=>{let p=this.renderRoot.querySelector(".sheet .ev-title-input");p&&p.focus()})}_kindRrule(e,t,a){let s;if(e.freq==="diario")s="FREQ=DAILY";else if(e.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(e.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(e.interval)||3))}`;else if(e.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...e.byday].sort().map(i=>ks[i]).join(",")}`;else if(e.freq==="mensal")s="FREQ=MONTHLY";else return null;if(e.dur!=="sempre"){let i=e.dur==="ate"?D(e.until):_(a,Math.max(1,Number(e.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=t?`;UNTIL=${A(i).replace(/-/g,"")}`:`;UNTIL=${Si(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(e,{keepRrule:t=!0}={}){let a=(e.title||"").trim();if(!a)throw new Error(e.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:e.kind,notes:e.notes};if(e.kind==="remedio")Object.assign(s,{dose:e.dose,who:e.who,alert:e.alert});else if(e.kind==="rotina")Object.assign(s,{who:e.who,points:Math.max(0,Math.round(Number(e.points)||0))}),e.freq==="depois"&&Object.assign(s,{after:{n:Math.max(1,Math.min(365,Math.round(Number(e.afterN)||2))),unit:"dias"},history:e.mode==="edit"?e.history||[]:[]});else if(e.kind==="conta"){if(s.value=ut(e.value),!s.value)throw new Error("Coloque o valor")}else{if(!(e.every&&e.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:e.who,every:e.every,warn:e.warn,history:e.mode==="edit"?e.history:e.last?[e.last]:[],points:Math.max(0,Math.round(Number(e.points)||0))})}let i={summary:a,description:vs(s)};if((e.location||"").trim()&&(i.location=e.location.trim()),e.kind==="manutencao"){let v=e.mode==="edit"?D(e.date):Lt(D(e.last||A(new Date)),e.every);return[{...i,start:A(v),end:A(_(v,1))}]}if(e.kind==="conta"){let v=D(e.date),g={...i,start:A(v),end:A(_(v,1))};return t&&e.repeat!=="nao"&&(g.rrule=e.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[g]}let r=D(e.date);if(e.freq==="semana"){if(!e.byday.length)throw new Error("Escolha os dias da semana");if(e.mode==="add")for(let v=0;v<7&&!e.byday.includes(r.getDay());v++)r=_(r,1)}let l=e.kind==="rotina"&&e.allDay,c=t?this._kindRrule(e,l,r):null,d=c?{rrule:c}:{};if(l)return[{...i,start:A(r),end:A(_(r,1)),...d}];let p=[...new Set((e.times||[]).filter(v=>/^\d{2}:\d{2}$/.test(v)))].sort();if(!p.length)throw new Error("Escolha o hor\xE1rio");let h=e.kind==="remedio"?15:30,f=v=>{if(e.freq==="alternado")return _(v,2);if(e.freq==="intervalo")return _(v,Math.max(2,Number(e.interval)||3));if(e.freq==="mensal")return new Date(v.getFullYear(),v.getMonth()+1,v.getDate());if(e.freq==="semana"){let g=_(v,1);for(let w=0;w<7&&!e.byday.includes(g.getDay());w++)g=_(g,1);return g}return _(v,1)},m=new Date;return p.map(v=>{let[g,w]=v.split(":").map(Number),S=r;e.mode==="add"&&e.freq!=="uma"&&e.freq!=="depois"&&new Date(S.getFullYear(),S.getMonth(),S.getDate(),g,w)<m&&(S=f(S));let b=new Date(S.getFullYear(),S.getMonth(),S.getDate(),g,w);return{...i,start:J(b),end:J(new Date(b.getTime()+h*6e4)),...d}})}async _saveKindForm(){let e=this._form;if(e.kind==="tarefa")return this._saveTodoForm();if(e.kind==="conta"&&e.dest==="gerencia"&&e.mode==="add"){let l=ut(e.value);if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!l)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:e.title.trim(),valor:l,vencimento:e.date,repete:e.repeat,categoria:e.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(c){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${c.message}`)}return}let t;try{t=this._kindEvents(e)}catch(l){this._showToast(l.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=t[0];if(e.mode==="edit"&&e.rid){this._openSheet("scope",{action:"edit",...e,event:s});return}this._setForm({saving:!0});let i=Me[e.kind].label,r=["rotina","manutencao","conta"].includes(e.kind)?"a":"o";try{if(e.mode==="add"){for(let l of t)await this.api.createEvent(e.cal,l);this._done(t.length>1?`${i} criad${r}: ${t.length} hor\xE1rios em ${M(a.name,20)}`:`${i} criad${r} em ${M(a.name,24)}`,e.cal,s.start)}else e.cal!==e.origCal?(await this.api.createEvent(e.cal,s),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`${i} movid${r} para ${M(a.name,24)}`,e.cal,s.start)):(await this.api.updateEvent(e.cal,e.uid,s),this._done(`${i} salv${r}`,e.cal,s.start))}catch(l){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${l.message}`)}}_renderModelChips(e){let t=this._form;return n`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(Me).filter(([a])=>a!=="tarefa"||this._todoLists().length).map(([a,s])=>n`<button class="model ${e===a?"on":""}" role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>{if(e===a)return;let i=t.date?D(t.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${y(s.icon)}<span>${s.label}</span></button>`)}
      </div>`}_dateField(e,t,a,s,{quick:i=!0}={}){let r=new Date,l=C(r),c=i?[["Hoje",A(l)],["Amanh\xE3",A(_(l,1))]]:[],d=c.some(([,p])=>p===t);return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${c.map(([p,h])=>n`<button class="pick ${t===h?"on":""}" @click=${()=>a(h)}>${p}</button>`)}
          <button class="pick ${d?"":"on"}" @click=${()=>{let p=this.renderRoot.querySelector(`#${s}`);try{p.showPicker()}catch{p.focus(),p.click()}}}>${y("calendar")}<span>${!d&&t?H(P(D(t),r,{long:!1})):"Outra data"}</span>
            <input id=${s} class="hidden-input" type="date" tabindex="-1" .value=${t} @change=${p=>p.target.value&&a(p.target.value)} />
          </button>
        </div>
      </div>`}_whoField(e){let t=this._form,a=[...new Set([...(this._ix().people||[]).map(i=>i.name),...t.who?[t.who]:[]])],s=a.some(i=>i===t.who);return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${a.map(i=>n`<button class="pick person ${t.who===i&&!t.whoOther?"on":""}" @click=${()=>this._setForm({who:t.who===i?"":i,whoOther:!1})}><span class="avatar sm">${Ut(i)}</span><span>${i}</span></button>`)}
          <button class="pick ghost ${t.whoOther?"on":""}" @click=${()=>this._setForm({whoOther:!0,who:s?"":t.who})}>${y("plus")}<span>Outra pessoa</span></button>
        </div>
        ${t.whoOther?n`<input type="text" class="who-input" .value=${t.who} placeholder="Nome (pode ser o pet também)" @input=${i=>this._setForm({who:i.target.value})} />`:u}
      </div>`}_freqField(e){let t=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...t.kind==="rotina"?[["mensal","Todo m\xEAs"],["depois","Depois de feita"]]:[],["uma","S\xF3 uma vez"]],s=t.mode!=="edit"||t.kind!=="rotina"?a:t.wasAfter?a.filter(([i])=>i==="depois"):t.rid||t.freq!=="uma"?a.filter(([i])=>i!=="depois"):a;return n`<div class="field">
        <span class="flabel">${e}</span>
        ${(()=>{let i=s.length,r=i<=4?i:i<=6?3:4,l=i%r?r-i%r+1:1;return n`<div class="seg seg-grid" role="radiogroup" aria-label=${e} style="grid-template-columns:repeat(${r},1fr)">${s.map(([c,d],p)=>n`<button class=${t.freq===c?"on":""} role="radio" aria-checked=${t.freq===c?"true":"false"} style=${p===i-1&&l>1?`grid-column:span ${l}`:""} @click=${()=>this._setForm({freq:c})}>${d}</button>`)}</div>`})()}
        ${t.freq==="semana"?n`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(i=>{let r=t.byday.includes(i);return n`<button class="wdp ${r?"on":""}" aria-pressed=${r?"true":"false"} aria-label=${ge[i]} @click=${()=>this._setForm({byday:r?t.byday.filter(l=>l!==i):[...t.byday,i]})}>${Ai[i]}</button>`})}
            </div>`:u}
        ${t.freq==="intervalo"?n`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(t.interval)} @input=${i=>this._setForm({interval:i.target.value})} /><span class="tl">dias</span></div>`:u}
        ${t.freq==="depois"?n`<div class="time-row"><span class="tl">Volta</span><input type="number" class="num-input" min="1" max="365" aria-label="Dias depois de feita" .value=${String(t.afterN)} @input=${i=>this._setForm({afterN:i.target.value})} /><span class="tl">${Number(t.afterN)===1?"dia":"dias"} depois de feita</span></div>
              <span class="field-hint">${y("rotate-ccw")}<span>Conta a partir de quando é feita: o Feito leva a próxima vez para ${Number(t.afterN)===1?"amanh\xE3":`daqui a ${Math.max(1,Number(t.afterN)||2)} dias`}. Na agenda fica só a próxima, e na Agora ela aparece no dia e continua lá até ser feita.</span></span>`:u}
      </div>`}_pointsField(){let e=this._form,t=Number(e.points)||0;return n`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row">
          ${[0,5,10,20,30,50].map(a=>n`<button class="pick ${t===a?"on":""}" @click=${()=>this._setForm({points:a})}>${a?`+${a}`:"Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(t)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${t>0&&!this._scoreOn()?n`<span class="field-hint">${y("trophy")}<span>Os pontos contam quando o placar estiver ligado, na aba <b>Recompensas</b>.</span></span>`:u}
      </div>`}_durField(e){let t=this._form;if(t.freq==="uma")return u;let a=t.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>n`<button class="pick ${t.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${t.dur==="dias"?n`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(t.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:u}
        ${t.dur==="ate"?n`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${t.until} min=${t.date} @change=${s=>s.target.value&&this._setForm({until:s.target.value})} /></div>`:u}
      </div>`}_calField(){let e=this._form,t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(s=>s.id===e.cal):t.filter(s=>s.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t;return a.length<=1?u:n`<div class="field">
        <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>n`<button class="pick list ${e.cal===s.id?"on":""}" style=${z(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${M(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let e=this._form;if(e.kind==="tarefa")return this._renderTodoForm();let t=e.kind,a=Me[t],s=new Date,i=this._ix().gerencia||{},r=t==="conta"&&e.dest==="gerencia"&&e.mode==="add",l={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[t],c=n`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${e.notes} placeholder=${t==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${p=>this._setForm({notes:p.target.value})}></textarea></label>`,d;if(t==="remedio"){let p=(this._ix().people||[]).find(f=>T(f.name)===T(e.who)),h=e.mode==="add";d=n`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${e.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${f=>this._setForm({dose:f.target.value})} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${h?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${h?n`<div class="chip-row" style="margin-bottom:10px">${Mi.map(([f,m])=>n`<button class="pick ${e.times.join()===m.join()?"on":""}" @click=${()=>this._setForm({times:[...m]})}>${f}</button>`)}</div>`:u}
            <div class="times">
              ${e.times.map((f,m)=>n`<span class="time-pill"><input type="time" .value=${f} aria-label="Horário ${m+1}" @change=${v=>v.target.value&&this._setForm({times:e.times.map((g,w)=>w===m?v.target.value:g)})} />${e.times.length>1?n`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:e.times.filter((v,g)=>g!==m)})}>${y("x")}</button>`:u}</span>`)}
              ${h&&e.times.length<8?n`<button class="pick ghost" @click=${()=>this._setForm({times:[...e.times,"12:00"]})}>${y("plus")}<span>Horário</span></button>`:u}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,f=>this._setForm({date:f}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          <div class="row switch-row">
            <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${e.alert?p&&p.notify?`Na hora e de novo se atrasar, no ${this._targetName(p.notify)}.`:e.who?n`Escolha o celular de ${e.who} em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${e.alert} @change=${f=>this._setForm({alert:f.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
          </div>
          ${c}`}else if(t==="conta")d=n`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${e.value} placeholder="0,00" @input=${p=>this._setForm({value:p.target.value})} /></span></label>
          ${this._dateField(e.repeat==="nao"?"Vence":"Primeiro vencimento",e.date,p=>this._setForm({date:p}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([p,h])=>n`<button class="pick ${e.repeat===p?"on":""}" @click=${()=>this._setForm({repeat:p})}>${p!=="nao"?y("repeat"):u}<span>${h}</span></button>`)}</div></div>
          ${i.ligado&&e.mode==="add"?n`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${e.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${y("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${e.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${y("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${y("info")}<span>${e.dest==="gerencia"?"Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio, com o Paguei daqui."}</span></span>
              </div>`:u}
          ${r&&(i.categorias||[]).length?n`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${p=>this._setForm({categoria:p.target.value})}><option value="">Sem categoria</option>${i.categorias.map(p=>n`<option value=${p.id} ?selected=${e.categoria===p.id}>${p.nome}</option>`)}</select></label>`:u}
          ${r?u:n`${this._calField()}${c}`}`;else if(t==="rotina")d=n`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${e.allDay?"on":""}" @click=${()=>this._setForm({allDay:!0})}>Qualquer hora</button>
              <button class="pick ${e.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1})}>${y("clock")}<span>Num horário</span></button>
              ${e.allDay?u:n`<input type="time" class="inline-time" .value=${e.times[0]||"19:00"} @change=${p=>p.target.value&&this._setForm({times:[p.target.value]})} aria-label="Horário" />`}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(e.freq==="depois"?e.mode==="add"?"Primeira vez":"Pr\xF3xima vez":e.mode==="add"?"Come\xE7a":"Data",e.date,p=>this._setForm({date:p}),"kf-date")}
          ${e.freq==="depois"?u:this._durField("At\xE9 quando")}
          ${this._calField()}
          ${c}`;else{let p=e.mode==="edit"?D(e.date):Lt(D(e.last||A(s)),e.every);d=n`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row" style="margin-bottom:10px">${Di.map(h=>n`<button class="pick ${e.every.n===h.n&&e.every.unit===h.unit?"on":""}" @click=${()=>this._setForm({every:{...h}})}>${te(h)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(e.every.n)} @input=${h=>this._setForm({every:{...e.every,n:Math.max(1,Number(h.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(Le).map(h=>n`<button class=${e.every.unit===h?"on":""} @click=${()=>this._setForm({every:{...e.every,unit:h}})}>${h}</button>`)}</div>
            </div>
            <span class="field-hint">${y("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${te(e.every)}.</span></span>
          </div>
          ${e.mode==="add"?this._dateField("Feito pela \xFAltima vez",e.last,h=>this._setForm({last:h}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",e.date,h=>this._setForm({date:h}),"kf-date",{quick:!1})}
          <p class="next-line">${y("calendar-check")}<span>Próxima: <b>${H(P(p,s,{long:!1}))}</b>${I(p,s)>1?` \xB7 em ${k(I(p,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na tela inicial, antes da data</span><div class="seg seg-grid" role="radiogroup" aria-label="Mostrar na tela inicial" style="grid-template-columns:repeat(5,1fr)">${[1,3,7,15,30].map(h=>n`<button class=${e.warn===h?"on":""} role="radio" aria-checked=${e.warn===h?"true":"false"} @click=${()=>this._setForm({warn:h})}>${h===1?"1 dia":`${h} dias`}</button>`)}</div></div>
          ${this._calField()}
          ${c}`}return n`
        ${this._sheetHead(e.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${e.mode==="add"?this._renderModelChips(t):u}
        <label class="field">
          <span class="flabel">${l[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder=${l[1]} @input=${p=>this._setForm({title:p.target.value})}></textarea>
        </label>
        ${d}
        ${e.rid?n`<div class="field-hint">${y("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveKindForm()}>${e.saving?"Salvando\u2026":e.mode==="add"?r?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let e=this._ix(),t=this._app("alerts",null)||{},a=t.meds!==!1,s=t.late==null?30:t.late,i=t.caregivers||[],r=e.people||[],l=e.targets||[],c=this._app("people",null)||{},d=h=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...h}}),p=(h,f)=>{let m={...c};f?m[h]={notify:f}:delete m[h],this._saveAppPrefs({people:m})};return n`<div class="panel" id="avisos">
        ${this._secHead("bell-ring","Avisos de rem\xE9dio no celular",n`Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.`)}
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${h=>d({meds:h.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?n`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${r.length?r.map(h=>{let f=c[h.name]&&c[h.name].notify;return n`<div class="person-row">
                        <span class="avatar">${Ut(h.name)}</span>
                        <span class="grow"><b>${h.name}</b><small>${h.person?"Pessoa do Home Assistant":"S\xF3 no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${h.name}" @change=${m=>p(h.name,m.target.value)}>
                          <option value="" ?selected=${!f}>${h.auto?`Autom\xE1tico: ${this._targetName(h.auto)}`:"Sem celular"}</option>
                          ${l.map(m=>n`<option value=${m.id} ?selected=${f===m.id}>${m.name}</option>`)}
                        </select>
                        ${h.notify?n`<button class="icon-btn" aria-label="Testar aviso para ${h.name}" @click=${()=>this._testAlert(h.notify)}>${y("bell-ring")}</button>`:u}
                      </div>`}):n`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${l.length?u:n`<span class="field-hint">${y("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>`}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([h,f])=>n`<button class="pick ${s===h?"on":""}" @click=${()=>d({late:h})}>${f}</button>`)}</div>
              </div>
              ${l.length?n`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${l.map(h=>{let f=i.includes(h.id);return n`<button class="pick ${f?"on":""}" aria-pressed=${f?"true":"false"} @click=${()=>d({caregivers:f?i.filter(m=>m!==h.id):[...i,h.id]})}>${y("smartphone")}<span>${h.name}</span></button>`})}</div>
                    <span class="field-hint">${y("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`:u}`:u}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`}_renderGerenciaPanel(){let e=this._app("gerencia_on",!1)===!0,t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada: as contas a pagar do GerencIA aparecem aqui e o Paguei daqui d\xE1 baixa l\xE1.":"Desligada: o CronologIA n\xE3o consulta o GerencIA e as contas de l\xE1 n\xE3o aparecem."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${r=>this._saveAppPrefs({gerencia_on:r.target.checked?!0:null})} aria-label="Usar a integração com o GerencIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="gerencia">
          ${this._secHead("wallet","Contas do GerencIA")}
          ${t}
        </div>`;let a=this._ix().gerencia||{},s=(a.contas||[]).filter(r=>!r.pago).length,i=a.ligado?a.erro?"warn":"ok":"off";return n`<div class="panel" id="gerencia">
        ${this._secHead("wallet","Contas do GerencIA")}
        ${t}
        <div class="ai-state ${i}"><span class="dot"></span><div>
          <b>${a.ligado?a.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${a.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${a.ligado?a.erro||`${k(s,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${a.ligado?n`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${r=>this._saveAppPrefs({gerencia_hidden:r.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:u}
      </div>`}};var Yt={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Bt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Ti=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var Ms=o=>{let[e,t,a]=String(o).slice(0,10).split("-").map(Number);return new Date(e,t-1,a)};function Wt(o,e,t){let a=typeof o=="string"?Ms(o):o,s=typeof e=="string"?Ms(e):e,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return t==="mes"?`${Ti[a.getMonth()].replace(/^./,r=>r.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Bt[i.getMonth()]}`:`${a.getDate()} ${Bt[a.getMonth()]} a ${i.getDate()} ${Bt[i.getMonth()]}`}var R=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ee(Y[o]||Y.calendar)}</svg>`,je=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],X=o=>(o||"?").trim().charAt(0).toUpperCase(),Ci={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},Kt={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},ft={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},Ei={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},Fi=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],Ds=[2,3,5,10,20],Ss={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},zs=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),Ts=o=>class extends o{_score(){return this._ix().score||null}_scoreOn(){let e=this._score();return!!(e&&e.enabled&&e.participants.length)}_participant(e){let t=this._score();if(!t||!e)return"";let a=T(e);return t.participants.find(s=>T(s)===a||T(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(e){let t=T(e||""),a=this._pColors();if(a.has(t))return a.get(t);let s=this._personCal(e);return s?s.color:U(je[0])}_pColors(){let e=this._score(),t=e&&e.participants||[],a=this._cals?this._cals():[],s=this._pColorCache;if(s&&s.cals===a&&s.parts===t.join("|"))return s.map;let i=new Map,r=new Set;for(let c of t){let d=this._personCal(c);d&&(i.set(T(c),d.color),r.add(d.color.id))}let l=0;for(let c of t){if(i.has(T(c)))continue;for(;l<je.length-1&&r.has(je[l]);)l++;let d=je[l%je.length];i.set(T(c),U(d)),r.add(d)}return this._pColorCache={cals:a,parts:t.join("|"),map:i},i}_personCal(e){let t=T(e||"").split(" ")[0];if(!t||!this._cals)return null;let a=this._cals().filter(s=>!s.hidden&&T(s.name).split(/[^a-z0-9]+/).includes(t));return a.length===1?a[0]:null}_me(){return this._user&&this._user.person||""}_pickWho(){return this._scoreOn()&&this._app("who_pick",!1)===!0}_renderQuickWho(e,t,a){let i=(this._score()||{participants:[]}).participants.slice(0,4);return n`<div class="qwho" role="group" aria-label="Quem fez ${e}">
        ${i.map(r=>n`<button class="qw-btn" style=${z(this._pColor(r),this._dark)} aria-label="${r} fez ${e}${t>0?` (+${t})`:""}" title="${r} fez${t>0?` (+${t})`:""}" @click=${()=>a(r)}>${X(r)}</button>`)}
      </div>`}_withWho(e,t,a,s=null){if(s)return a(s);if(!this._scoreOn()||!(e>0))return a("");let i=this._participant(this._me());return i?a(i):this._openSheet("who",{points:e,title:t,run:a})}_doneToast(e,t,a,{reassignKey:s,undo:i}){let r=this._scoreOn()&&t&&a>0?this._score().participants.filter(c=>T(c)!==T(t)):[],l=t&&a>0?`Feito por ${t} \xB7 +${a}`:`${M(e.summary,26)}: feito`;if(r.length===1&&s){let c=r[0];this._showToast(l,{label:`Foi ${c}`,run:()=>this.api.scoreReassign(s,c).then(()=>this._showToast(`Pontos para ${c}`)).catch(d=>this._showToast(d.message))})}else r.length>1&&s?this._showToast(l,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:e.summary,run:c=>this.api.scoreReassign(s,c).then(()=>this._closeSheet())})}):this._showToast(l,i?{label:"Desfazer",run:i}:null)}_markDone(e,t,a=null){return this._withWho(e.points||0,e.summary,async s=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,t,s),this._haptic("success"),this._doneToast(e,s,e.points||0,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,t).catch(i=>this._showToast(i.message))})}catch(i){this._showToast(`N\xE3o consegui marcar: ${i.message}`)}},a)}_maintDone(e,t=null,a=!1){return this._withWho(e.points||0,e.summary,async s=>{this._sheet&&(!a||this._sheet==="who")&&await this._closeSheet();try{let i=await this.api.maintDone(e.cal,e.uid,s);this._haptic("success");let r=i&&i.next?`Pr\xF3xima em ${Q(D(i.next),new Date(this._now))}`:"";i&&i.key?this._doneToast(e,s,e.points,{reassignKey:i.key}):this._showToast(r?`Feito. ${r}`:"Feito",i&&i.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(l=>this._showToast(l.message))}:null)}catch(i){this._showToast(`N\xE3o consegui: ${i.message}`)}},t)}_renderWhoButtons(e,t){let a=this._score()||{participants:[]};return n`<div class="field who-act">
        <span class="flabel">Quem fez?${e>0?n` <b>+${e}</b>`:u}</span>
        <div class="who-grid inline">
          ${a.participants.map(s=>n`<button class="who-btn" style=${z(this._pColor(s),this._dark)} @click=${()=>t(s)}><span class="avatar">${X(s)}</span><b>${s}</b></button>`)}
        </div>
      </div>`}_renderWhoSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${M(e.title||"",40)}${e.points?n` · <b>+${e.points} pontos</b>`:u}</p>
        <div class="who-grid">
          ${t.participants.map(a=>n`<button class="who-btn" style=${z(this._pColor(a),this._dark)} @click=${()=>e.run(a)}>
              <span class="avatar xl">${X(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>e.run("")}>Ninguém do placar (sem pontos)</button>`}_renderRewards(){let e=this._score();if(!e||!e.enabled||!e.participants.length)return this._renderRewardsSetup();let t=new Date(this._now),a=e.current,s=I(D(a.end),t),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${k(s,"dia","dias")}`,r=e.leader,l=e.rows.reduce((c,d)=>c+d.points,0);return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${H(Ci[e.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(e)}
        <div class="panel board">
          ${e.rows.length===2?this._renderDuel(e,l):this._renderRanking(e)}
          <div class="board-foot">${r?n`${R("crown")}<span><b>${r}</b> na frente${e.rows[1]?` por ${k(e.rows[0].points-e.rows[1].points,"ponto","pontos")}`:""}</span>`:n`<span>${l?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(e)}
        ${e.manual?this._renderToScore():u}
        ${this._renderDemerits(e)}
        ${this._renderFeed(e)}
        ${this._renderHistory(e)}
      </section>`}_renderDuel(e,t){let[a,s]=e.participants.map(d=>e.rows.find(p=>p.name===d)||{name:d,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),r=a.points-i+(s.points-i),l=r?(a.points-i)/r:.5,c=(d,p)=>n`<div class="duel-side ${p?"right":""} ${e.leader===d.name?"lead":""}" style=${z(this._pColor(d.name),this._dark)}>
        <span class="avatar xl">${X(d.name)}${e.leader===d.name?n`<span class="crown">${R("crown")}</span>`:u}</span>
        <b class="duel-name">${d.name}</b>
        <span class="duel-pts">${d.points}</span>
        <small>${k(d.count,"tarefa","tarefas")}${d.demerits?n` · <span class="neg-text">${k(d.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:u}</small>
      </div>`;return n`<div class="duel">
          ${c(a,!1)}
          <span class="duel-x">×</span>
          ${c(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(l*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(e){let t=Math.max(1,...e.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/t*100).toFixed(1);return n`<div class="ranking">
        ${e.rows.map((s,i)=>n`<div class="rank-row ${e.leader===s.name?"lead":""}" style=${z(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${X(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(e){let t=e.history&&e.history[0];if(!t||t.delivered)return u;let a=new Date(this._now);if(I(a,D(t.end))>14)return u;let s=Object.values(t.totals||{}).join(" \xD7 ");return n`<div class="result-card ${t.winner?"":"tie"}" style=${t.winner?z(this._pColor(t.winner),this._dark):""}>
        <span class="result-ic">${R("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${Ei[e.period]} · ${Wt(t.start,t.end,e.period)}</span>
          <b>${t.winner?`${t.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${t.reward?n`<small>${t.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${t.reward}</small>`:u}
        </div>
        ${t.winner&&t.reward?n`<button class="dose-btn agora" @click=${()=>this._setDelivered(t.key,!0)}>Entregue</button>`:n`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(t.key,!0)}>${R("x")}</button>`}
      </div>`}_renderPrize(e){let t=e.current,a=e.next,s=c=>Object.keys(c.prizes||{}).length>0,i=(c,d)=>c.prizes&&c.prizes[d]||c.reward||"",r=s(t)||!!t.reward,l=s(a)||!!a.reward;return n`<div class="panel prize ${r?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${R("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${s(t)?"Pr\xEAmios":"Pr\xEAmio"} ${Kt[e.period]}</span>
            ${s(t)?u:t.reward?n`<b>${t.reward}</b>`:n`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${()=>this._openPrize("current")}>${r?"Mudar":"Definir"}</button>
        </div>
        ${s(t)?n`<div class="prize-people">
              ${e.participants.map(c=>{let d=i(t,c);return n`<div class="prize-person ${e.leader===c?"lead":""}" style=${z(this._pColor(c),this._dark)}>
                  <span class="avatar sm2">${X(c)}</span>
                  <span class="pp-tx"><small>Se ${c} vencer</small>${d?n`<b>${d}</b>`:n`<i>ainda livre</i>`}</span>
                  ${e.leader===c?n`<span class="pp-lead">${R("crown")}</span>`:u}
                </div>`})}
            </div>`:u}
        <div class="prize-next">
          <span>${R("gift")}<span>${s(a)?n`${H(ft[e.period].replace(/^d[ao] /,""))}: <b>${e.participants.map(c=>`${c}: ${i(a,c)||"livre"}`).join(" \xB7 ")}</b>`:a.reward?n`Prêmio ${ft[e.period]}: <b>${a.reward}</b>`:`Pr\xEAmio ${ft[e.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${()=>this._openPrize("next")}>${l?"Mudar":"Definir"}</button>
        </div>
      </div>`}_openPrize(e){let t=this._score(),a=e==="next"?t.next:t.current,s=a.prizes||{},i=Object.keys(s).length>0;this._openSheet("prize",{which:e,key:a.key,label:a.label,mode:i?"cada":"todos",shared:a.reward||"",per:Object.fromEntries(t.participants.map(r=>[r,s[r]||(i?"":a.reward||"")]))})}async _savePrize(){let e=this._form,t=e.mode==="todos"?(e.shared||"").trim():"",a=e.mode==="cada"?Object.fromEntries(Object.entries(e.per||{}).map(([s,i])=>[s,(i||"").trim()]).filter(([,s])=>s)):{};await this._closeSheet();try{await this.api.scorePrizes(e.key,t,a),this._haptic("success"),this._showToast(t||Object.keys(a).length?Object.keys(a).length?"Pr\xEAmios salvos":"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(s){this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_renderPrizeSheet(){let e=this._form,t=this._score(),a=["Ex.: jantar fora","Ex.: massagem","Ex.: escolher o filme","Ex.: folga da lou\xE7a"];return n`${this._sheetHead(`Pr\xEAmio ${e.which==="next"?ft[t.period]:Kt[t.period]}`)}
        <p class="sheet-note top">${H(e.label||"")}</p>
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
              <span class="field-hint">${R("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" @click=${()=>this._savePrize()}>Salvar</button>
        </div>`}async _setDelivered(e,t){try{await this.api.scoreDelivered(e,t),t&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderToScore(){let e=this._ix(),t=new Date(this._now),a=(e.routines||[]).filter(c=>c.points>0),s=(e.maint||[]).filter(c=>c.points>0&&c.state!=="ok"),i=this._todos().items.filter(c=>c.points>0&&(c.undated||(c.done?c.days===0:c.overdue||c.days===0))),r=a.filter(c=>c.done).length+i.filter(c=>c.done).length,l=a.length+i.length;return n`<div class="panel chores score-today">
        <div class="chores-head"><span class="overline">Para pontuar hoje</span>${l?n`<small>${r} de ${l}</small>`:u}</div>
        ${j(a,c=>c.key,c=>{let d=c.done&&c.done.by;return n`<div class="chore ${c.done?"done":""}">
            <button class="chk ${c.done?"on":""}" @click=${()=>c.done?this._undoCheck(c,"rotina"):this._markDone(c,"rotina")} aria-label="${c.done?"Desmarcar":"Marcar"} ${c.summary}">${c.done?R("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(c)}><b>${c.summary}</b><small>${c.after?Vt(c,new Date(this._now)):[c.yesterday?"ficou de ontem":c.time,c.done?`feito por ${d||"algu\xE9m"}`:c.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
            <span class="pts ${c.done?"got":""}" style=${d?z(this._pColor(d),this._dark):""}>+${c.points}</span>
          </div>`})}
        ${j(i,c=>c.key,c=>n`<div class="chore ${c.done?"done":""}">
            <button class="chk sq ${c.done?"on":""}" @click=${()=>this._todoDone(c,!c.done)} aria-label="${c.done?"Reabrir":"Concluir"} ${c.summary}">${c.done?R("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:c.key})}><b>${c.summary}</b><small>${c.undated?"sem prazo":c.overdue?"atrasada":"hoje"} · ${c.listName} · ResolvIA</small></button>
            <span class="pts ${c.done?"got":""}">+${c.points}</span>
          </div>`)}
        ${j(s,c=>c.key,c=>n`<div class="chore maint-score">
            <span class="chk wrench ${c.state}">${R("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(c)}><b>${c.summary}</b><small>${c.days<0?`venceu h\xE1 ${k(-c.days,"dia","dias")}`:c.days===0?"\xE9 hoje":`em ${k(c.days,"dia","dias")}`} · manutenção</small></button>
            <button class="pts btn-pts" @click=${()=>this._maintDone(c)}>+${c.points}</button>
          </div>`)}
        ${!a.length&&!s.length&&!i.length?n`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>${this._resolviaOn()?", ou a uma tarefa no ResolvIA":""}.</p>`:u}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${R("plus")}Tarefa com pontos</button>
          <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${R("award")}Pontos avulsos</button>
        </div>
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(e){await this._saveAppPrefs({demerits:e.length?e:null})}async _addDemerit(e,t){await this._saveDemerits([...this._demerits(),{id:zs(),title:e,points:t}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${M(e,28)} \xB7 \u2212${t}`)}async _markDemerit(e,t){try{let a=await this.api.scoreDemerit(e.id,t);this._haptic("warning"),this._showToast(`\u2212${e.points} para ${t}: ${M(e.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(e=null){this._openSheet("demerit",e?{id:e.id,title:e.title,points:e.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let e=this._form,t=(e.title||"").trim(),a=Math.round(Math.abs(Number(e.points)||0));if(!t||a<1)return;let s=this._demerits(),i=e.id?s.map(r=>r.id===e.id?{...r,title:t,points:a}:r):[...s,{id:zs(),title:t,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(e.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${M(t,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let e=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${M(e.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(t=>t.id!==e.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(e){let t=this._demerits();if(!t.length)return u;let a=i=>{let r={};for(let l of e.entries)l.kind==="demerito"&&String(l.key).startsWith(`demerito|${i.id}|`)&&(r[l.who]=(r[l.who]||0)+1);return Object.entries(r).map(([l,c])=>`${l} ${c}\xD7`).join(" \xB7 ")},s=e.entries.filter(i=>i.kind==="demerito").length;return n`<div class="panel chores demerits" id="demeritos">
        <div class="chores-head"><span class="overline">Deméritos</span><small>${s?`${k(s,"vez","vezes")} ${Ss[e.period]}`:"tiram pontos"}</small></div>
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${j(t,i=>i.id,i=>{let r=a(i);return n`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${i.title}</b>${r?n`<small>${r} ${Ss[e.period]}</small>`:u}</div>
                <span class="pts neg">−${i.points}</span>
              </div>
              <div class="dm-who">
                ${e.participants.map(l=>n`<button class="dm-btn" style=${z(this._pColor(l),this._dark)} aria-label="${i.title}: descontar de ${l}" @click=${()=>this._markDemerit(i,l)}>
                    <span class="avatar sm2">${X(l)}</span><span>${l}</span>
                  </button>`)}
              </div>
            </div>`})}
      </div>`}_renderDemeritsSettings(){let e=this._demerits();return n`<div class="panel chores demerits-set" id="demeritos-ajustes">
        ${this._secHead("thumbs-down","Dem\xE9ritos",`O que tira pontos de quem fizer. Em Recompensas, toque em quem foi para descontar.${e.length?` ${k(e.length,"dem\xE9rito","dem\xE9ritos")} na lista.`:""}`)}
        ${e.length?j(e,t=>t.id,t=>n`<button class="demerit dm-edit" @click=${()=>this._openDemeritForm(t)}>
                <span class="dm-tx"><b>${t.title}</b></span>
                <span class="pts neg">−${t.points}</span>
                ${R("chevron-right")}
              </button>`):n`<div class="chip-row dm-ideas">${Fi.map(([t,a])=>n`<button class="pick" @click=${()=>this._addDemerit(t,a)}>${R("plus")}<span>${t} −${a}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${R("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let e=this._form,t=Number(e.points)||0,a=e.custom||t>0&&!Ds.includes(t);return n`${this._sheetHead(e.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <input type="text" .value=${e.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @input=${s=>this._setForm({title:s.target.value})} />
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row">
            ${Ds.map(s=>n`<button class="pick ${t===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>Outro</button>
          </div>
          ${a?n`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(t||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:u}
          <span class="field-hint">${R("info")}<span>Para marcar de fora do app (uma rotina da Alexa, uma etiqueta NFC), dispare o evento <code>cronologia_demerito</code> com <code>nome</code> e <code>quem</code>.</span></span>
        </div>
        <div class="sheet-actions">
          ${e.mode==="edit"?n`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${R("trash")}Apagar</button>`:n`<button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(e.title||"").trim()||!(t>0)} @click=${()=>this._saveDemeritForm()}>${e.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}_renderFeed(e){if(!e.entries.length)return u;let t=new Date(this._now),a=this._feedAll?e.entries:e.entries.slice(0,8),s=i=>{let r=new Date(i),l=I(r,t);return l===0?`hoje ${E(r)}`:l===-1?`ontem ${E(r)}`:`${ct[r.getDay()].slice(0,3)} ${E(r)}`};return n`<div class="panel feed">
        <div class="chores-head"><span class="overline">Pontos ${Kt[e.period]}</span><small>${k(e.entries.length,"registro","registros")}</small></div>
        ${j(a,i=>i.key,i=>n`<div class="feed-row" style=${z(this._pColor(i.who),this._dark)}>
            <span class="avatar sm2">${X(i.who)}</span>
            <span class="feed-tx"><b>${i.title}</b><small>${i.who} · ${s(i.at)}${i.kind==="extra"?" \xB7 avulso":i.kind==="manutencao"?" \xB7 manuten\xE7\xE3o":i.kind==="tarefa"?" \xB7 ResolvIA":i.kind==="demerito"?" \xB7 dem\xE9rito":""}</small></span>
            <span class="pts ${i.points<0?"neg":"got"}">${i.points>0?"+":i.points<0?"\u2212":""}${Math.abs(i.points)}</span>
            ${i.kind==="extra"||i.kind==="demerito"?n`<button class="icon-btn mini" aria-label="Tirar ${i.title}" @click=${()=>this._removeExtra(i)}>${R("x")}</button>`:u}
          </div>`)}
        ${e.entries.length>8?n`<button class="add-line" @click=${()=>(this._feedAll=!this._feedAll,this.requestUpdate())}>${R(this._feedAll?"chevron-up":"chevron-down")}${this._feedAll?"Mostrar menos":`Ver todos (${e.entries.length})`}</button>`:u}
      </div>`}async _removeExtra(e){try{await this.api.scoreRemove(e.key),this._showToast(e.points<0?`${M(e.title,26)}: dem\xE9rito tirado`:`${M(e.title,26)}: pontos tirados`)}catch(t){this._showToast(t.message)}}_renderExtraSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda: lavou o carro, fez a feira, montou o armário…</p>
        <label class="field"><span class="flabel">O que foi feito</span><input type="text" id="ex-title" .value=${e.title} placeholder="Ex.: Lavou o carro" maxlength="120" @input=${a=>this._setForm({title:a.target.value})} /></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${t.participants.map(a=>n`<button class="pick person ${e.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${X(a)}</span><span>${a}</span></button>`)}</div>
        </div>
        <div class="field"><span class="flabel">Pontos</span>
          <div class="chip-row">
            ${[5,10,20,30,50].map(a=>n`<button class="pick ${Number(e.points)===a?"on":""}" @click=${()=>this._setForm({points:a})}>+${a}</button>`)}
            <input type="number" class="num-input" min="-100" max="1000" .value=${String(e.points)} aria-label="Outro valor" @input=${a=>this._setForm({points:a.target.value})} />
          </div>
        </div>
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${!e.who||!(e.title||"").trim()||!Number(e.points)} @click=${()=>this._saveExtra()}>Dar ${Number(e.points)||0} pontos</button>
        </div>`}async _saveExtra(){let e=this._form;try{await this.api.scoreExtra(e.who,Number(e.points),e.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${e.points} para ${e.who}`)}catch(t){this._showToast(t.message)}}_renderHistory(e){let t=e.history||[];if(!t.length)return u;let a=this._histAll?t:t.slice(0,5),s={};for(let i of t)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return n`<div class="panel history">
        <div class="chores-head"><span class="overline">Histórico</span><small>${Object.entries(s).map(([i,r])=>`${i} ${r}`).join(" \xB7 ")||""}</small></div>
        ${j(a,i=>i.key,i=>n`<div class="hist-row">
            <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?z(this._pColor(i.winner),this._dark):""}>${i.winner?X(i.winner):"="}</span>
            <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${Wt(i.start,i.end,e.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
            ${i.reward&&i.winner?n`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${R(i.delivered?"check":"gift")}</button>`:u}
          </div>`)}
        ${t.length>5?n`<button class="add-line" @click=${()=>(this._histAll=!this._histAll,this.requestUpdate())}>${R(this._histAll?"chevron-up":"chevron-down")}${this._histAll?"Mostrar menos":`Ver tudo (${t.length})`}</button>`:u}
      </div>`}_scorePrefs(e){let t=this._score()||{},a={enabled:!!t.enabled,participants:t.participants||[],period:t.period||"semana",anchor:t.anchor||A(new Date),notify:t.notify!==!1,manual:!!t.manual};return this._saveAppPrefs({score:{...a,...e}})}_renderScoreSettings(){let e=this._score();return!e||!e.enabled||!e.participants.length?n`<div class="panel score-set" id="placar">
          ${this._secHead("trophy","Ajustes do placar")}
          <div class="ai-state off"><span class="dot"></span><div><b>Placar desligado</b><span>Ligue em Recompensas: escolha quem participa e de quanto em quanto tempo o placar fecha.</span></div></div>
          <div class="score-actions" style="padding-left:0;padding-right:0;border:0"><button class="btn primary sm" @click=${()=>this._go("/recompensas",!0)}>${R("trophy")}Ir para Recompensas</button></div>
        </div>`:n`${this._renderScoreSettingsPanel(e)} ${this._renderDemeritsSettings()}`}_renderScoreSettingsPanel(e){let t=(this._ix().people||[]).map(s=>s.name),a=[...new Set([...e.participants,...t])];return n`<div class="panel score-set" id="placar">
        ${this._secHead("trophy","Ajustes do placar")}
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${a.map(s=>{let i=e.participants.includes(s);return n`<button class="pick person ${i?"on":""}" aria-pressed=${i?"true":"false"} @click=${()=>this._scorePrefs({participants:i?e.participants.filter(r=>r!==s):[...e.participants,s]})}><span class="avatar sm">${X(s)}</span><span>${s}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(Yt).map(([s,i])=>n`<button class=${e.period===s?"on":""} @click=${()=>this._scorePrefs({period:s,anchor:A(new Date)})}>${i.label}</button>`)}</div>
          <span class="field-hint">${R("info")}<span>${e.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",0)===1?"na segunda":"no domingo"} (muda em Mais \u203A Op\xE7\xF5es).`} Mudar aqui recomeça a contagem no período de agora, sem perder os pontos.</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar pontos em Recompensas</div><div class="hint">Mostra o card <b>Para pontuar hoje</b>: marcar as tarefas do dia, criar tarefa com pontos e dar pontos avulsos ali mesmo. Desligado, as tarefas são marcadas na Agora e no ResolvIA.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!e.manual} @change=${s=>this._scorePrefs({manual:s.target.checked})} aria-label="Marcar pontos em Recompensas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar por outras pessoas</div><div class="hint" style="white-space:normal">Na rotina e na manutenção da tela inicial aparecem as iniciais de cada pessoa: um toque marca como feito por ela, com os pontos. Na tela do evento, um botão por pessoa.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("who_pick",!1)===!0} @change=${s=>this._saveAppPrefs({who_pick:s.target.checked?!0:null})} aria-label="Marcar por outras pessoas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quando o período fecha, quem participa recebe quem venceu e o prêmio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e.notify!==!1} @change=${s=>this._scorePrefs({notify:s.target.checked})} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <button class="text-btn danger" @click=${()=>this._scorePrefs({enabled:!1})}>Desligar o placar</button>
      </div>`}_renderRewardsSetup(){let e=this._score()||{},t=(this._ix().people||[]).filter(r=>r.person),a=this._setupPick||(e.participants&&e.participants.length?e.participants:t.map(r=>r.name)),s=this._setupPeriod||e.period||"semana",i=[...new Set([...(this._ix().people||[]).map(r=>r.name),...a])];return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:"Placar da casa"})}
        <div class="panel setup-card">
          <div class="setup-art">${R("trophy")}</div>
          <h2 class="setup-title">Quem faz mais em casa?</h2>
          <p class="panel-lead">Dê pontos às tarefas da rotina e da manutenção. Quem marca <b>Feito</b> ganha os pontos, e no fim de cada período quem somar mais leva o prêmio que vocês combinaram.</p>
          <div class="field"><span class="flabel">Quem participa</span>
            <div class="chip-row">${i.map(r=>{let l=a.includes(r);return n`<button class="pick person ${l?"on":""}" aria-pressed=${l?"true":"false"} @click=${()=>(this._setupPick=l?a.filter(c=>c!==r):[...a,r],this.requestUpdate())}><span class="avatar sm">${X(r)}</span><span>${r}</span></button>`})}</div>
          </div>
          <div class="field"><span class="flabel">O placar fecha</span>
            <div class="seg">${Object.entries(Yt).map(([r,l])=>n`<button class=${s===r?"on":""} @click=${()=>(this._setupPeriod=r,this.requestUpdate())}>${l.label}</button>`)}</div>
          </div>
          <button class="btn primary" style="width:100%" ?disabled=${!a.length} @click=${()=>this._saveAppPrefs({score:{enabled:!0,participants:a,period:s,anchor:A(new Date),notify:!0}})}>${R("trophy")}Começar o placar</button>
        </div>
      </section>`}};var Z={CREATE:1,UPDATE:4,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},Cs="cronologia.todo_list",O=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ee(Y[o]||Y.calendar)}</svg>`,De="laranja",Oi=o=>(o||"?").trim().charAt(0).toUpperCase(),Qt=o=>o.allDay?D(o.due):new Date(o.due);function Es(o,e){if(o.undated)return"sem prazo";let t=Qt(o),a=I(t,e),s=o.allDay?"":` \xE0s ${E(t)}`;return o.done?"conclu\xEDda":o.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?o.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${P(t,e,{long:!1,cap:!1})}${s}`}var Fs=o=>o?o===1?"todo dia":o===7?"toda semana":o===14?"a cada 2 semanas":o===30?"todo m\xEAs":`a cada ${o} dias`:"",Os=o=>class extends o{_todosAll(){return this._ix().todos||{lists:[],items:[]}}_todos(){let e=this._todosAll(),t=this._app("todo_owner",null)||{},a=this._me(),s=a&&(this._ix().people||[]).some(d=>d.person&&T(d.name)===T(a));if(!Object.keys(t).length||!s)return e;let i=this._todosView,r=JSON.stringify(t);if(i&&i.src===e&&i.me===a&&i.key===r)return i.view;let l=d=>!t[d]||T(t[d])===T(a),c={...e,lists:e.lists.filter(d=>l(d.id)),items:e.items.filter(d=>l(d.list))};return this._todosView={src:e,me:a,key:r,view:c},c}_todoOwners(){let e=(this._ix().people||[]).filter(a=>a.person).map(a=>a.name),t=this._score&&this._score();return[...new Set([...e,...t&&t.participants||[]])]}_todoEvents(e,t){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.filter(s=>!s.undated).map(s=>{let i=Qt(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?_(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<t&&s.end>e)}async _todoDone(e,t,a=null){let s=async i=>{this._sheet==="who"&&await this._closeSheet();try{let r=await this.api.setTodo(e.list,e.uid,t,i);this._haptic(t?"success":"light"),t&&r&&r.points?this._doneToast(e,r.who,r.points,{reassignKey:r.key}):this._showToast(`${M(e.summary,28)}: ${t?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(e.list,e.uid,!t).catch(l=>this._showToast(l.message))})}catch(r){this._showToast(`N\xE3o consegui: ${r.message}`)}};return t&&e.points>0?a?s(a):this._withWho(e.points,e.summary,s):s("")}_renderTodosPanel(){let e=new Date(this._now),a=this._todos().items.filter(d=>d.undated?!0:d.done?d.days===0:d.overdue||d.days<=1);if(!a.length)return u;let s=a.filter(d=>d.overdue),i=a.filter(d=>!d.done),r=this._todosOpen?a:a.slice(0,6),l=this._scoreOn()?(this._score()||{}).participants||[]:[],c=d=>{let p=d.points>0&&!d.done&&l.length&&l.length<=3,h=[d.undated?"":Es(d,e),Fs(d.every),d.listName].filter(Boolean).join(" \xB7 ");return n`<div class="chore todo ${d.done?"done":""} ${d.overdue?"late":""}">
          <button class="chk sq ${d.done?"on":""}" @click=${()=>this._todoDone(d,!d.done)} aria-label="${d.done?"Reabrir":"Concluir"} ${d.summary}">${d.done?O("check"):u}</button>
          <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:d.key})}><b>${d.summary}</b><small>${p?n`<span class="pts-inline">+${d.points}</span> · ${h}`:h}</small></button>
          ${p?n`<div class="qwho" role="group" aria-label="Quem fez ${d.summary}">
                ${l.map(f=>n`<button class="qw-btn" style=${z(this._pColor(f),this._dark)} aria-label="${f} fez ${d.summary} (+${d.points})" title="${f} fez (+${d.points})" @click=${()=>this._todoDone(d,!0,f)}>${Oi(f)}</button>`)}
              </div>`:d.points>0&&this._scoreOn()?n`<span class="pts ${d.done?"got":""}">+${d.points}</span>`:u}
        </div>`};return n`<div class="panel todos ${s.length?"alert":""}" id="tarefas">
        <div class="chores-head">
          <span class="overline">${a.some(d=>d.undated)?"Tarefas":"Tarefas com prazo"}</span>
          <small class=${s.length?"late":""}>${s.length?k(s.length,"atrasada","atrasadas"):i.length?`${i.length} para fazer`:"tudo feito"}</small>
        </div>
        ${j(r.filter(d=>!d.undated),d=>d.key,d=>c(d))}
        ${r.some(d=>d.undated)?n`${r.some(d=>!d.undated)?n`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>`:u}
              ${j(r.filter(d=>d.undated),d=>d.key,d=>c(d))}`:u}
        ${a.length>6?n`<button class="add-line" @click=${()=>(this._todosOpen=!this._todosOpen,this.requestUpdate())}>${O(this._todosOpen?"chevron-up":"chevron-down")}${this._todosOpen?"Mostrar menos":`Mais ${a.length-6}`}</button>`:u}
        <div class="panel-foot plain">${O("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais.</span></div>
      </div>`}_renderTodoSheet(){let e=new Date(this._now),t=this._todos().items.find(s=>s.key===this._form.key);if(!t)return n`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=t.undated?null:Qt(t);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${Es(t,e)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${O("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${O("calendar-clock")}<span>${a?n`Prazo: ${H(P(a,e))}${t.allDay?"":` \xE0s ${E(a)}`}`:"Sem prazo"}</span></div>
          <div class="fact">${O("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${t.every?n`<div class="fact">${O("repeat")}<span>Volta ${Fs(t.every)} depois de concluída</span></div>`:u}
          ${t.points>0&&this._scoreOn()?n`<div class="fact">${O("award")}<span>${t.points} pontos para quem concluir</span></div>`:u}
          ${t.description?n`<div class="fact notes">${O("file-text")}<span>${lt(t.description).map(s=>s.url?n`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:u}
        </div>
        <p class="sheet-note">${O("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done?n`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!1))}>${O("undo-2")}Reabrir</button>`:n`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!0))}>${O("check")}Concluir${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`}
        </div>`}_todoLists(){return(this._app("todo_create_any",!1)===!0?this._todosAll():this._todos()).lists.filter(t=>!t.unavailable&&t.features&Z.CREATE)}_otherOwner(e){let t=(this._app("todo_owner",null)||{})[e],a=this._me();return t&&!(a&&T(t)===T(a))?t:null}_openTodoForm({date:e=null}={}){let t=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(Cs)||'""')}catch{}let s=t.find(i=>i.id===a)||t.find(i=>!i.hidden&&i.features&Z.DUE_DATE&&!this._otherOwner(i.id))||t.find(i=>!this._otherOwner(i.id))||t[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:A(e?C(e):C(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_todoDueOk(){return(this._todosAll().app||{}).prazos!==!1}_renderTodoForm(){let e=this._form,t=this._todoLists(),a=t.find(p=>p.id===e.list),s=ns(t),i=a?a.features:0,r=this._todoDueOk(),l=r&&!!(i&Z.DUE_DATE),c=r&&!!(i&Z.DUE_DATETIME),d=!!(i&Z.DESCRIPTION);return n`
        ${this._sheetHead("Novo")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Levar o carro na revisão" @input=${p=>this._setForm({title:p.target.value})} @keydown=${p=>p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${t.map(p=>n`<button class="pick list ${e.list===p.id?"on":""}" style=${z(U(De),this._dark)} title=${p.name} @click=${()=>this._setForm({list:p.id})}>${O(this._otherOwner(p.id)?"user-round":"list-checks")}<span>${M(s.get(p.id).short,30)}</span></button>`)}</div>
          ${a&&s.get(a.id).short!==a.name?n`<div class="field-hint">${O("list-checks")}<span>No Home Assistant: <b>${a.name}</b></span></div>`:u}
          ${a&&this._otherOwner(a.id)?n`<div class="field-hint">${O("user-round")}<span>Lista de <b>${this._otherOwner(a.id)}</b>: a tarefa aparece no CronologIA de ${this._otherOwner(a.id)}.</span></div>`:u}
        </div>
        ${l||c?n`${e.noDue?u:this._dateField("Prazo",e.date,p=>this._setForm({date:p}),"td-date")}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${e.noDue?"on":""}" @click=${()=>this._setForm({noDue:!e.noDue})}>Sem prazo</button>
                ${c&&!e.noDue?n`<button class="pick ${e.timed?"on":""}" @click=${()=>this._setForm({timed:!e.timed})}>${O("clock")}<span>Com horário</span></button>
                      ${e.timed?n`<input type="time" class="inline-time" .value=${e.time} aria-label="Horário" @change=${p=>p.target.value&&this._setForm({time:p.target.value})} />`:u}`:u}
              </div>`:n`<p class="field-hint" style="margin:-6px 0 18px">${O("info")}<span>${r?"Essa lista n\xE3o aceita prazo (listas do Alexa, por exemplo). A tarefa entra sem data.":"Os prazos est\xE3o desligados no ResolvIA (Mais \u203A Op\xE7\xF5es). A tarefa entra sem data."}</span></p>`}
        ${d&&this._app("event_details",!1)===!0?n`<label class="field"><span class="flabel">Notas</span><textarea rows="2" .value=${e.notes} placeholder="Detalhes, links" @input=${p=>this._setForm({notes:p.target.value})}></textarea></label>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${e.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let e=this._form,t=this._todoLists().find(r=>r.id===e.list);if(!t)return this._showToast("Escolha a lista");if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=this._todoDueOk()&&!e.noDue&&t.features&(Z.DUE_DATE|Z.DUE_DATETIME),s=a&&e.timed&&t.features&Z.DUE_DATETIME,i={summary:e.title.trim(),date:a?e.date:"",time:s?e.time:"",description:e.notes||""};a&&!s&&!(t.features&Z.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(t.id,i);let r=this._otherOwner(t.id);if(!r)try{localStorage.setItem(Cs,JSON.stringify(t.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${M(t.name,24)}${r?` (lista de ${r})`:t.hidden?" (lista oculta aqui)":""}`)}catch(r){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${r.message}`)}}_renderMirrorSettings(e){let t=this._app("mirror",null)||{},a=this._ix().mirror||{},s=e.filter(c=>c.features&Z.CREATE&&c.features&Z.UPDATE&&!c.unavailable),i=c=>this._saveAppPrefs({mirror:{list:t.list||null,maint:!!t.maint,routine:!!t.routine,...c}}),r=(c,d,p,h)=>n`<div class="row switch-row">
        <div class="grow"><div class="label">${d}</div><div class="hint">${p}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!!c} ?disabled=${!t.list} @change=${f=>i({[h]:f.target.checked})} aria-label=${d} /><span class="track"></span></label>
      </div>`,l=t.list&&(t.maint||t.routine);return n`<div class="sub-overline" id="levar">Levar para o ResolvIA</div>
        <p class="sub-lead">Cada manutenção e cada rotina da casa vira uma tarefa numa lista do ResolvIA, com a próxima data e os pontos. Concluir lá vale como feito aqui (os pontos vão para quem concluiu) e a tarefa volta com a data seguinte.</p>
        <label class="field" style="margin:6px 0 4px">
          <span class="flabel">Lista</span>
          <select class="select" aria-label="Lista do ResolvIA" @change=${c=>i({list:c.target.value||null})}>
            <option value="" ?selected=${!t.list}>Nenhuma (não levar)</option>
            ${s.map(c=>n`<option value=${c.id} ?selected=${t.list===c.id}>${c.name}${c.features&Z.DUE_DATE?"":" (sem prazo)"}</option>`)}
            ${t.list&&!s.some(c=>c.id===t.list)?n`<option value=${t.list} selected>${t.list} (não encontrada)</option>`:u}
          </select>
        </label>
        ${r(t.maint,"Manuten\xE7\xF5es","A pr\xF3xima data de cada manuten\xE7\xE3o.","maint")}
        ${r(t.routine,"Rotina da casa","A pr\xF3xima vez de cada rotina.","routine")}
        ${a.problem?n`<p class="data-note">${a.problem}</p>`:l?n`<p class="sub-lead with-icon">${O("circle-check")}<span>${k(a.count||0,"tarefa","tarefas")} na lista. Elas não se repetem no card de Tarefas daqui.</span></p>`:u}`}_resolviaOn(){return this._app("resolvia_on",!1)===!0}_renderTodosSettings(){let e=this._resolviaOn(),t=n`<div class="row switch-row integ-switch">
        <div class="grow"><div class="label">Usar a integração</div><div class="hint" style="white-space:normal">${e?"Ligada: as tarefas das listas do ResolvIA (ou de qualquer lista de tarefas do Home Assistant) aparecem aqui.":"Desligada: nenhuma tarefa do ResolvIA aparece no CronologIA, o Levar para o ResolvIA para e os pontos que v\xEAm de l\xE1 n\xE3o contam."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${g=>this._saveAppPrefs({resolvia_on:g.target.checked?!0:null})} aria-label="Usar a integração com o ResolvIA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="resolvia">
          ${this._secHead("list-checks","Tarefas do ResolvIA")}
          ${t}
        </div>`;let{lists:a,app:s}=this._todosAll(),i=this._app("todo_owner",null)||{},r=this._todoOwners(),l=(g,w)=>{let S={...i};w?S[g]=w:delete S[g],this._saveAppPrefs({todo_owner:Object.keys(S).length?S:null})},c=this._app("todo_hidden",null)||[],d=(g,w)=>this._saveAppPrefs({todo_hidden:w?c.filter(S=>S!==g):[...c,g]}),p=a.filter(g=>!g.hidden),h=p.reduce((g,w)=>g+w.due,0),f=p.reduce((g,w)=>g+w.overdue,0),m=`${k(a.length,"lista","listas")} \xB7 ${k(h,"tarefa com prazo","tarefas com prazo")}${f?`, ${k(f,"atrasada","atrasadas")}`:""}.`,v=a.length?s?{tone:"ok",title:`Conectado ao ResolvIA ${s.versao||""}`.trim(),text:`${m} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${m} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."};return n`<div class="panel" id="resolvia">
        ${this._secHead("list-checks","Tarefas do ResolvIA")}
        ${t}
        <div class="ai-state ${v.tone}"><span class="dot"></span><div><b>${v.title}</b><span>${v.text}</span></div></div>
        ${a.length?n`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As tarefas aparecem no dia do prazo (ou no horário, se tiver), além do card da Agora.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${g=>this._saveAppPrefs({todo_off_calendar:g.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="row switch-row">
                <div class="grow"><div class="label">Tarefas sem prazo na Agora</div><div class="hint">Mostra também as tarefas pendentes sem data (e as das listas que não aceitam prazo), depois das que têm prazo.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated",!1)} @change=${g=>this._saveAppPrefs({todo_undated:g.target.checked?!0:null})} aria-label="Tarefas sem prazo na Agora" /><span class="track"></span></label>
              </div>
              ${this._todoOwners().length?n`<div class="row switch-row">
                    <div class="grow"><div class="label">Criar tarefas nas listas dos outros</div><div class="hint" style="white-space:normal">No Novo › Tarefa aparecem também as listas que são de outra pessoa da casa, para pedir algo a ela. As tarefas continuam aparecendo só para quem é a lista.</div></div>
                    <label class="switch"><input type="checkbox" role="switch" .checked=${this._app("todo_create_any",!1)===!0} @change=${g=>this._saveAppPrefs({todo_create_any:g.target.checked?!0:null})} aria-label="Criar tarefas nas listas dos outros" /><span class="track"></span></label>
                  </div>`:u}
              <div class="sub-overline">Listas</div>
              ${this._todoOwners().length?n`<p class="sub-lead">Escolha quais listas entram e, se quiser, de quem é cada uma: a lista de uma pessoa só aparece no CronologIA dela (na Agora, no calendário e no Novo › Tarefa). Num aparelho sem pessoa da casa, aparece tudo.</p>`:u}`:u}
        ${j(a,g=>g.id,g=>n`<div class="row switch-row ${g.hidden?"off":""}">
            <span class="tile" style=${z(U(De),this._dark)}>${O("list-checks")}</span>
            <div class="grow"><div class="label">${g.name}</div><div class="hint">${g.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":g.info==="resolvia"?"prazos desligados no ResolvIA":g.due?`${k(g.due,"tarefa com prazo","tarefas com prazo")}${g.overdue?` \xB7 ${k(g.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div>
              ${r.length&&!g.hidden?n`<div class="owner-pick" role="radiogroup" aria-label="De quem é ${g.name}">
                    <span class="op-l">De quem é</span>
                    ${["",...r].map(w=>{let S=w?T(i[g.id]||"")===T(w):!i[g.id];return n`<button class=${S?"on":""} role="radio" aria-checked=${S?"true":"false"} @click=${()=>l(g.id,w)}>${w||"Todos"}</button>`})}
                  </div>`:u}
            </div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!g.hidden} @change=${w=>d(g.id,w.target.checked)} aria-label="Mostrar ${g.name}" /><span class="track"></span></label>
          </div>`)}
        ${a.length?this._renderMirrorSettings(a):u}
        ${a.length&&this._writable().length?n`<button class="row" @click=${()=>this._openBring()}>
              <span class="tile" style=${z(this._accent(),this._dark)}>${O("download")}</span>
              <span class="grow"><div class="label">Trazer uma lista para o CronologIA</div><div class="hint" style="white-space:normal">Cada tarefa vira uma Rotina da casa, com os pontos e a repetição, e sai do ResolvIA.</div></span>
              ${O("chevron-right")}
            </button>`:u}
      </div>`}_openBring(){this._openSheet("bring",{step:"pick",listId:null,preview:null,chosen:[],cal:this._kindCal("rotina"),error:null,busy:!1})}async _bringLoad(e){this._setForm({listId:e,step:"loading",error:null});try{let t=await this.api.bringPreview(e);if(this._sheet!=="bring")return;this._setForm({step:"review",preview:t,chosen:t.items.filter(a=>!a.exists).map(a=>a.uid)})}catch(t){this._setForm({step:"pick",error:t.message})}}async _bringRun(){let e=this._form;if(!(!e.chosen.length||e.busy)){this._setForm({busy:!0,error:null});try{let t=await this.api.bring(e.listId,e.cal,e.chosen,!0),a=this._cal(t.calendar);await this._closeSheet(),this._haptic("success"),this._showToast(`${k(t.created,"rotina criada","rotinas criadas")}${a?` em ${M(a.name,18)}`:""}${t.removed?" \xB7 tiradas do ResolvIA":""}`)}catch(t){this._sheet==="bring"&&this._setForm({busy:!1,error:t.message})}}}_renderBringSheet(){let e=this._form,t=new Date(this._now),a=(r,l)=>n`<div class="sheet-head">
        ${l?n`<button class="icon-btn back" @click=${l} aria-label="Voltar">${O("chevron-left")}</button>`:u}
        <h3 class="display">${r}</h3>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${O("x")}</button>
      </div>`,s=e.error?n`<div class="imp-error">${O("circle-alert")}<span>${e.error}</span></div>`:u;if(e.step==="loading")return n`${a("Trazer do ResolvIA")}<div class="imp-loading"><span class="spin">${O("loader-circle")}</span><span>Lendo a lista…</span></div>`;if(e.step==="review"&&e.preview){let r=e.preview,l=new Set(e.chosen),c=h=>this._setForm({chosen:l.has(h)?e.chosen.filter(f=>f!==h):[...e.chosen,h]}),d=this._writable(),p=h=>{let f=D(h.date),m=I(f,t)===0?"hoje":P(f,t,{long:!1,cap:!1});return`${h.every?`a partir de ${m}`:m}${h.time?` \xE0s ${h.time}`:""}`};return n`
          ${a(r.name,()=>this._setForm({step:"pick",preview:null,error:null}))}
          <p class="sheet-note top">Cada tarefa marcada vira uma <b>Rotina da casa</b>: as que repetem no ResolvIA voltam N dias depois de feitas; as outras são de uma vez só. ${r.canDelete?"Depois, elas saem da lista do ResolvIA.":"Essa lista n\xE3o deixa apagar: as tarefas ficam l\xE1 tamb\xE9m."}</p>
          ${r.items.length?n`<div class="bring-list">
                ${r.items.map(h=>n`<button class="bring-row ${l.has(h.uid)?"":"off"}" role="checkbox" aria-checked=${l.has(h.uid)?"true":"false"} @click=${()=>c(h.uid)}>
                    <span class="chk sq ${l.has(h.uid)?"on":""}">${l.has(h.uid)?O("check"):u}</span>
                    <span class="bring-tx"><b>${h.summary}</b><small>${[h.points>0?`+${h.points}`:"",h.every?`volta ${k(h.every,"dia","dias")} depois de feita`:"s\xF3 uma vez",p(h),h.exists?"j\xE1 existe uma rotina com esse nome":""].filter(Boolean).join(" \xB7 ")}</small></span>
                  </button>`)}
              </div>`:n`<p class="empty-line">Nenhuma tarefa para trazer nessa lista.</p>`}
          ${r.items.length>1?n`<div class="bring-all"><button class="text-btn" @click=${()=>this._setForm({chosen:e.chosen.length===r.items.length?[]:r.items.map(h=>h.uid)})}>${e.chosen.length===r.items.length?"Desmarcar todas":"Marcar todas"}</button></div>`:u}
          ${d.length>1?n`<div class="field"><span class="flabel">Calendário das rotinas</span>
                <div class="chip-row">${d.map(h=>n`<button class="pick list ${e.cal===h.id?"on":""}" style=${z(h.color,this._dark)} @click=${()=>this._setForm({cal:h.id})}><span class="dot"></span><span>${M(h.name,22)}</span></button>`)}</div>
              </div>`:u}
          ${s}
          <div class="sheet-actions">
            <button class="btn primary" ?disabled=${!e.chosen.length||e.busy} @click=${()=>this._bringRun()}>${O("download")}${e.busy?"Trazendo\u2026":e.chosen.length?`Trazer ${k(e.chosen.length,"tarefa","tarefas")}`:"Nenhuma marcada"}</button>
          </div>`}let i=this._todosAll().lists.filter(r=>!r.unavailable);return n`
        ${a("Trazer do ResolvIA")}
        <p class="sheet-note top">Escolha a lista. Você revisa as tarefas antes de trazer.</p>
        <div class="bring-lists">
          ${i.map(r=>n`<button class="row" @click=${()=>this._bringLoad(r.id)}>
              <span class="tile" style=${z(U(De),this._dark)}>${O("list-checks")}</span>
              <span class="grow"><div class="label">${r.name}</div><div class="hint">${k(r.open,"tarefa pendente","tarefas pendentes")}</div></span>
              ${O("chevron-right")}
            </button>`)}
        </div>
        ${s}`}};var ie=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ee(Y[o]||Y.calendar)}</svg>`,Ri=o=>o>1048576?`${(o/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(o/1024))} KB`,Ii={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar"},Rs=o=>class extends o{_dateTime(e){let t=new Date(e),a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} \xE0s ${a(t.getHours())}:${a(t.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(e){this._backups={available:!1,error:e.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let e=await this.api.createBackup();this._showToast(`Backup salvo em ${e.folder}/${e.name}`),this._haptic("success"),await this._loadBackups()}catch(e){this._showToast(`N\xE3o consegui criar o backup. ${e.message}`)}this._busy=null,this.requestUpdate()}_exportData(e,t){!this.api.dataUrl||!this.api.dataUrl(e)?(t.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):e!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let e=this.renderRoot.querySelector("#cr-data-import");e&&(e.value="",e.click())}_onDataImport(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${M(t.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(t);this._haptic("success"),this._showToast(`Importado: ${k(a.calendars,"agenda","agendas")} e ${k(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(e){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(e.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(e.name),this._showToast("Backup restaurado")}catch(t){this._showToast(t.message)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let e=await this.api.versions();this._sheet==="versions"&&this._setForm({list:e})}catch(e){this._sheet==="versions"&&this._setForm({error:e.message})}}_confirmRestoreVersion(e){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(e.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(e.name),this._showToast("Vers\xE3o restaurada")}catch(t){this._showToast(t.message)}}})}_renderVersions(){let e=this._form;return n`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${e.error?n`<div class="imp-error">${ie("circle-alert")}<span>${e.error}</span></div>`:e.list==null?n`<div class="imp-loading"><span class="spin">${ie("loader-circle")}</span><span>Carregando…</span></div>`:e.list.length?n`<div class="data-list">
                  ${e.list.map(t=>n`<div class="data-item"><div><b>${this._dateTime(t.when)}</b><span>${k(t.calendars,"agenda","agendas")} · ${k(t.points,"ponto","pontos")} · ${Ii[t.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(t)}>Restaurar</button></div>`)}
                </div>`:n`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let e=this._backups,t=this._writable(),a=(s,i,r)=>n`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(s)||"#"} download @click=${l=>this._exportData(s,l)}>${ie(r)}${i}</a>`;return n`<div id="dados">
        <div class="panel">
          ${this._secHead("download","Exportar","Baixe para guardar ou levar para outro programa. Os arquivos s\xE3o abertos e leg\xEDveis: o ZIP tem os dados do app, os eventos de cada calend\xE1rio em .ics e as planilhas de eventos e pontos.")}
          <div class="btn-row sec-actions">${a("zip","Tudo (ZIP)","archive")} ${a("csv","Eventos (CSV)","sheet")} ${a("json","Dados (JSON)","braces")}
            <button class="btn outline sm" @click=${()=>this._openExport()}>${ie("calendar")}Agenda (.ics)</button></div>
        </div>
        <div class="panel">
          ${this._secHead("archive","Backup na pasta share",n`Cria uma cópia completa em <code>share/cronologia</code>, que você acessa pela rede do Home Assistant. Os backups do próprio Home Assistant também incluem o CronologIA e os calendários locais.`)}
          <div class="btn-row sec-actions">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||e&&e.available===!1} @click=${()=>this._createBackup()}>${ie("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${e&&e.available===!1?n`<p class="data-note">A pasta share não está disponível para o app.</p>`:u}
          ${e&&e.backups&&e.backups.length?n`<div class="data-list">
                ${e.backups.slice(0,8).map(s=>n`<div class="data-item"><div><b>${this._dateTime(s.date)}</b><span title=${s.name}>${Ri(s.size)} · ${s.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(s)}>${ie("archive-restore")}Restaurar</button></div>`)}
              </div>`:u}
        </div>
        <div class="panel">
          ${this._secHead("upload","Importar","Traz os dados do app de um .zip ou .json exportado pelo CronologIA: agendas, pessoas e avisos, placar e marca\xE7\xF5es. Antes de importar, o app guarda uma c\xF3pia do que existe hoje.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._pickDataImport()}>${ie("upload")}Escolher arquivo</button></div>
        </div>
        <div class="panel">
          ${this._secHead("calendar-plus","Importar eventos (.ics)","Traz os eventos de um convite, de outra agenda ou de um calend\xE1rio do backup. Voc\xEA revisa e escolhe o calend\xE1rio antes de adicionar.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" ?disabled=${!t.length} @click=${()=>this._openImport("ics")}>${ie("upload")}Escolher .ics</button></div>
        </div>
        <div class="panel">
          ${this._secHead("archive-restore","Vers\xF5es anteriores","O app guarda sozinho uma c\xF3pia dos dados a cada 10 minutos de uso e antes de importar ou restaurar, e mant\xE9m as 3 mais recentes. Se algo sair errado, volte para uma delas.")}
          <div class="btn-row sec-actions"><button class="btn outline sm" @click=${()=>this._openVersions()}>${ie("archive-restore")}Ver versões</button></div>
        </div>
        <div class="panel">
          ${this._secHead("database","Onde ficam os dados",n`Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda nomes, cores, preferências, pessoas, o placar e as marcações em <code>/data/cronologia.json</code>, que entra no backup do Home Assistant.`)}
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${s=>this._onDataImport(s)} />
      </div>`}};var Is="cronologia.theme",Ns="cronologia.mode",Jt={CREATE:1,DELETE:2,UPDATE:4},Gt=(o,e)=>(Number(o)&e)===e,be=48,Ni={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},Hi=o=>Ni[o]||{label:o?H(o.replace(/_/g," ")):"Outros",icon:"calendar"},x=(o,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ee(Y[o]||Y.calendar)}</svg>`,gt={get(o,e){try{let t=localStorage.getItem(o);return t==null?e:JSON.parse(t)}catch{return e}},set(o,e){try{localStorage.setItem(o,JSON.stringify(e))}catch{}}},Xt=(o,e,t,a,s)=>_e`<line class=${s} x1=${o} y1=${e} x2=${t} y2=${a}></line>`,Hs=(o,e)=>_e`<path class=${e} d=${o}></path>`,Pi=o=>o.allDay?"Dia todo":`${E(o.start)} \u2013 ${E(o.end)}`,qi=o=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o)}`,Zt=class extends Rs(Os(Ts(As(le)))){static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Za,es,ts,fe(Pa),fe(ja)];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=gt.get(Is,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=C(new Date),this._mode=gt.get(Ns,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),Xa(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(e){e.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(e){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let t=this.renderRoot.querySelector(".tgrid-scroll");if(t){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&q(this._cursor,a)?Math.max(0,a.getHours()-1):7;t.scrollTop=s*be}}if(e.has("_path")&&this._view().name==="more"){let t=this.renderRoot.querySelector(".more-tabs"),a=t&&t.querySelector("button.on");if(a){let i=a.offsetLeft,r=i+a.offsetWidth;i<t.scrollLeft?t.scrollLeft=i-8:r>t.scrollLeft+t.clientWidth&&(t.scrollLeft=r-t.clientWidth+8)}let s=this._view().tab;s==="integracoes"&&(this._refreshAi(!1),this._loadUsage()),s==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let e=this._theme==="dark"?!0:this._theme==="light"?!1:ss();e!==this._dark&&(this._dark=e)}_setTheme(e){this._theme=e,gt.set(Is,e),this._syncDark()}async _start(){this._started=!0,this._store=new vt(this.api,()=>this._ver++),this.api.onStatus(e=>this._online=e),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(e=>this._onCalendar(e)).catch(()=>{}),this.api.subscribePrefs(e=>this._setPrefs(e)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(e=>{let t=e&&e.test;t&&this._home&&t.at!==this._testSeen&&Date.now()-t.at<12e4&&(this._haptic("success"),this._showToast(`${this._targetName(t.target)}: o bot\xE3o ${t.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=t&&t.at,this._home=e}).catch(()=>{})}async _boot(e){try{let t=await this.api.bootstrap();this._version=t.version||"",this._user=t.user||{name:""},this._ai=t.ai||this._ai,this._aiAt=Date.now(),this._states=t.states||{},this._entities=t.entities||{},this._devices=t.devices||{},this._prefs=t.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),e&&this._store.reloadAll()}catch(t){this._ready||(this._bootError=t.message||String(t)),e||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(e){let t={...this._states},a=e.entity_id in t;e.new_state?t[e.entity_id]=e.new_state:delete t[e.entity_id],this._states=t,(!a||!e.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(e){e&&(this._prefs={calendars:e.calendars||{},app:e.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(e=>!e.hidden).map(e=>e.id))}_app(e,t){let a=this._prefs.app?this._prefs.app[e]:void 0;return a===void 0?t:a}_accent(){return U(this._app("accent","turquesa"))||U("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let e=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},r=i.device_id?this._devices[i.device_id]:null,l=Hi(i.platform),c=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:r,plat:l,orig:c}});e.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let t=e.map(({id:a,st:s,reg:i,dev:r,plat:l,orig:c},d)=>{let p=(this._prefs.calendars||{})[a]||{},h=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:p.name||c,origName:c,group:l.label,icon:l.icon,device:r?r.name_by_user||r.name:null,color:U(p.color)||rs(d),colorId:p.color||null,hidden:!!p.hidden,features:h,canCreate:Gt(h,Jt.CREATE),canUpdate:Gt(h,Jt.UPDATE),canDelete:Gt(h,Jt.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:t},t}_cal(e){return this._cals().find(t=>t.id===e)}_visible(){return this._cals().filter(e=>!e.hidden)}_writable(){return this._cals().filter(e=>e.canCreate&&!e.unavailable)}_defaultCal(){let e=this._writable(),t=this._app("default_calendar",null);return(e.find(a=>a.id===t)||e.find(a=>!a.hidden)||e[0]||{}).id||null}_events(e,t){this._store.ensure(e,t);let a=this._store.query(e,t),s=[...this._gerenciaEvents(e,t),...this._todoEvents(e,t)];return s.length?[...a,...s].sort((i,r)=>i.start-r.start||Number(r.allDay)-Number(i.allDay)||i.summary.localeCompare(r.summary,"pt-BR")):a}async _saveCalPrefs(e,t){try{this._setPrefs(await this.api.setCalendarPrefs(e,t))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(e){try{this._setPrefs(await this.api.setAppPrefs(e))}catch(t){this._showToast(`N\xE3o consegui salvar: ${t.message}`)}}_view(){let e=(this._path||"").replace(/\/+$/,"");if(e==="/calendario")return{name:"calendar"};if(e==="/agendas")return{name:"more",tab:"calendarios"};if(e==="/recompensas")return{name:"rewards"};let t=/^\/mais(?:\/(avisos|placar|integracoes|dados|aparencia|opcoes))?$/.exec(e);return t?{name:"more",tab:t[1]||"calendarios"}:{name:"now"}}async _go(e,t=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(t?0:1);t?history.replaceState({rvDepth:a,rvPath:e},""):history.pushState({rvDepth:a,rvPath:e},""),this._path=e,e==="/calendario"&&(this._scrollWeek=!0);let s=this.renderRoot&&this.renderRoot.querySelector("main");s&&s.scrollTo({top:0,behavior:"instant"})}_goTab(e){let t=this._view().name;if(e===""){if(t==="now"){let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(e==="/calendario"&&t==="calendar"){this._cursor=C(new Date),this._scrollWeek=!0;return}this._go(e,t!=="now")}_openDay(e,t){this._cursor=C(e),t&&this._setMode(t),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(e){this._mode=e,gt.set(Ns,e),this._scrollWeek=!0}_popEntry(e){if(!(history.state&&history.state[e]))return Promise.resolve();let t=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(r=>r!==s),this._popping===t&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=t,history.back(),t}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let e=history.state&&history.state.rvPath||"";e!==this._path&&(this._path=e);for(let t of[...this._popWaiters||[]])t()}async _openSheet(e,t=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=e,this._form=t,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(e){this._form={...this._form,...e}}_openInHA(e){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(e)}_haptic(e){this.env&&this.env.haptic&&this.env.haptic(e)}_showToast(e,t=null){clearTimeout(this._toastTimer),this._toast={text:e,action:t,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,t?5e3:2800)}_userName(){let e=rt();return(this._user&&this._user.name||e&&e.user&&e.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let e=rt();return e&&e.user?!!e.user.is_admin:!0}_openEvent(e){if(e.gerencia){this._openSheet("bill",{b:{id:e.gerencia.id,c:e.gerencia}});return}if(e.todo){this._openSheet("todo",{key:e.todo.key});return}this._openSheet("event",{ev:e})}_money(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:e=null,date:t=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(e&&e.kind)return this._openKindForm({ev:e,copy:i});if(!this._writable().length&&!(e&&!i)){this._openSheet("nocal",{});return}let l;if(e){let c=e.allDay?_(e.end,-1):e.end;l={mode:i?"add":"edit",cal:i?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._defaultCal():e.cal,origCal:e.cal,uid:e.uid,rid:i?null:e.rid,title:e.summary,allDay:e.allDay,date:A(e.start),endDate:e.allDay?I(c,e.start)>0?A(c):"":q(e.start,e.end)?"":A(e.end),start:e.allDay?"09:00":E(e.start),end:e.allDay?"10:00":E(e.end),repeat:qe(e.rrule),rrule:e.rrule||"",location:e.location,notes:e.description}}else{let c=t?C(t):C(new Date),d=new Date,p=a??(q(c,d)?Math.min(23,d.getHours()+1):9),h=f=>String(f).padStart(2,"0");l={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:A(c),endDate:"",start:`${h(p)}:00`,end:`${h(Math.min(23,p+1))}:${p+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}l.details=!!(String(l.location||"").trim()||String(l.notes||"").trim()),this._openSheet("form",l),l.mode==="add"&&!l.title&&this.updateComplete.then(()=>{let c=this.renderRoot.querySelector(".sheet .ev-title-input");c&&c.focus()})}_eventFromForm(e,{keepRrule:t=!0}={}){if(e.kind)return this._kindEvents(e,{keepRrule:t})[0];let a=(e.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||""))throw new Error("Escolha a data");let s={summary:a};if(e.allDay){let i=e.endDate&&e.endDate>e.date?e.endDate:e.date;s.start=e.date,s.end=A(_(D(i),1))}else{let[i,r]=(e.start||"09:00").split(":").map(Number),[l,c]=(e.end||e.start||"10:00").split(":").map(Number),d=D(e.date),p=new Date(d.getFullYear(),d.getMonth(),d.getDate(),i,r),h=e.endDate&&e.endDate>e.date?D(e.endDate):d,f=new Date(h.getFullYear(),h.getMonth(),h.getDate(),l,c);f<=p&&(f=_(f,1)),f-p<6e4&&(f=new Date(p.getTime()+30*6e4)),s.start=J(p),s.end=J(f)}if((e.location||"").trim()&&(s.location=e.location.trim()),(e.notes||"").trim()&&(s.description=e.notes.trim()),t){let i=e.rrule&&qe(e.rrule)===e.repeat?e.rrule:e.repeat?`FREQ=${e.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let e=this._form;if(e.kind)return this._saveKindForm();let t;try{t=this._eventFromForm(e)}catch(s){this._showToast(s.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(e.mode==="edit"&&e.rid){this._openSheet("scope",{action:"edit",...e,event:t});return}this._setForm({saving:!0});try{e.mode==="add"?(await this.api.createEvent(e.cal,t),this._done(`Evento criado em ${M(a.name,24)}`,e.cal,t.start)):e.cal!==e.origCal?(await this.api.createEvent(e.cal,t),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`Evento movido para ${M(a.name,24)}`,e.cal,t.start)):(await this.api.updateEvent(e.cal,e.uid,t),this._done("Evento salvo",e.cal,t.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_done(e,t,a){this._haptic("success"),this._closeSheet(),this._store.refresh(t);let s=a?C(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?D(a):a)):null;this._showToast(e,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(e){let t=this._form,a={recurrenceId:t.rid,range:e==="future"?"THISANDFUTURE":void 0};try{if(t.action==="edit"){let s=t.event;e==="one"&&(s=this._eventFromForm(t,{keepRrule:!1})),await this.api.updateEvent(t.cal,t.uid,s,a),this._done(e==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",t.cal,s.start)}else await this.api.deleteEvent(t.cal,t.uid,e==="all"?{}:a),this._done(e==="all"?"A s\xE9rie toda foi apagada":e==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",t.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(e){if(e.rid){this._openSheet("scope",{action:"delete",cal:e.cal,uid:e.uid,rid:e.rid,title:e.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${M(e.summary,28)}\u201D?`,text:`${H(P(e.start,new Date(this._now)))} \xB7 ${Pi(e)}. Ele sai do calend\xE1rio ${M((this._cal(e.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(e.cal,e.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(e.cal);let t={summary:e.summary,start:e.raw.start,end:e.raw.end};e.location&&(t.location=e.location),e.description&&(t.description=e.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(e.cal,t).then(()=>this._store.refresh(e.cal)).catch(a=>this._showToast(a.message))})}catch(t){this._showToast(`N\xE3o consegui apagar: ${t.message}`)}}})}_openImport(e="pick",t={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:e==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...t});return e==="photos"&&this._pickFiles("photos"),e==="scan"&&this._openCamera(),e==="text"&&this._focusSheetText(),e==="ics"&&this._pickFiles("ics"),s}_focusSheetText(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".sheet textarea");e&&e.focus()})}_pickFiles(e){let t=this.renderRoot.querySelector(e==="scan"?"#cr-scan":e==="ics"?"#cr-ics":"#cr-photos");t&&(t.value="",t.click())}_releaseImages(){let e=this._form;if(e&&e.images)for(let t of e.images)t.url&&URL.revokeObjectURL(t.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(e){let t=[...e.target.files||[]].filter(i=>!i.type||i.type.startsWith("image/")).slice(0,6);if(e.target.value="",!t.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let s=[];for(let i of t)s.push(await Pt(i));this._readImages(s,a)}async _onIcsFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let a;try{a=$s(await t.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:t.name,note:null,error:null})}_readImages(e,t){if(this._sheet!=="import"||!e.length)return;let a=t?[...this._form.images||[],...e]:(this._releaseImages(),e);this._setForm({step:"loading",images:a,prevStep:t?"review":"pick",loadingText:e.length>1?`Lendo ${e.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:e,appending:t})}async _runExtract({text:e,images:t,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",r=a?this._form.items||[]:[];try{let l=await this.api.extract({text:e,images:t?t.map(({data:d,mime:p})=>({data:d,mime:p})):void 0});if(!i())return;let c=l.events||[];if(!c.length){let d=e?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:d}):this._setForm({step:e?"text":"pick",error:d});return}this._haptic("success"),this._setForm({step:"review",items:[...r,...c.map(d=>({...d,on:!0}))],provider:l.provider||null,note:null,error:null})}catch(l){if(!i())return;a?this._setForm({step:"review",note:l.message||"Algo deu errado"}):this._setForm({step:e?"text":"pick",error:l.message||"Algo deu errado"})}}_readText(){let e=(this._form.text||"").trim();if(!e)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:e})}async _pasteClipboard(){try{let e=await navigator.clipboard.readText();if(!e)throw new Error("empty");this._setForm({text:e,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(e,t){let a=this._form.items.slice();a[e]={...a[e],...t},this._setForm({items:a})}_itemEvent(e){let t=s=>{let[i,r]=s.split(":").map(Number),l=Math.min(1439,i*60+r+60);return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[e.repeat]||"";return this._eventFromForm({title:e.title,date:e.date,endDate:e.end_date||"",allDay:!e.start,start:e.start,end:e.end||(e.start?t(e.start):""),repeat:e.rrule?qe(e.rrule):a,rrule:e.rrule||"",location:e.location,notes:e.notes})}async _importAdd(){let e=this._form,t=e.items.filter(r=>r.on&&(r.title||"").trim()),a=this._cal(e.target);if(!t.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let r of t)try{let l=this._itemEvent(r);await this.api.createEvent(e.target,l),s++,(!i||l.start<i)&&(i=l.start)}catch(l){this._showToast(`\u201C${M(r.title,24)}\u201D: ${l.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${k(s,"evento adicionado","eventos adicionados")} em ${M(a.name,20)}`,e.target,i)}async _openCamera(){let e=navigator.mediaDevices;if(!e||!e.getUserMedia){this._pickFiles("scan");return}let t=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:t,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await e.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(l=>l.stop());return}this._stream=a;let s=a.getVideoTracks()[0],i=s&&s.getCapabilities?s.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!i.torch},await this.updateComplete;let r=this.renderRoot.querySelector(".cam video");r&&(r.srcObject=a,r.play().catch(()=>{}))}catch(a){if(!this._cam)return;let s=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:s?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(e=>e.stop()),this._stream=null}_closeCamera(e=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let t of this._cam.shots||[])URL.revokeObjectURL(t.url);this._cam=null,e||this._popEntry("rvCam")}}async _toggleTorch(){let e=this._stream&&this._stream.getVideoTracks()[0];if(!e)return;let t=!this._cam.torch;try{await e.applyConstraints({advanced:[{torch:t}]}),this._cam={...this._cam,torch:t}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let e=this.renderRoot.querySelector(".cam video");if(!e||!e.videoWidth||!this._cam||this._cam.shots.length>=6)return;let t=1800,a=Math.min(1,t/Math.max(e.videoWidth,e.videoHeight)),s=document.createElement("canvas");s.width=Math.round(e.videoWidth*a),s.height=Math.round(e.videoHeight*a),s.getContext("2d").drawImage(e,0,0,s.width,s.height);let i=await new Promise(l=>s.toBlob(l,"image/jpeg",.86));if(!i||!this._cam)return;let r=await Pt(i,t);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,r],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let e=this._cam.shots,t=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(e,t&&this._form.step==="review")}_cameraFallback(){let e=this._cam&&this._cam.appending;this._closeCamera(),e&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(e=!0){if(!(!e&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(t){this._ai={...this._ai,ready:!1,images:!1,reason:t.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(e){await this._saveAppPrefs({ai_entity:e||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais/integracoes",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#leitura-ia");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(e=>e.id),range:"12m"})}_exportRange(e){let t=C(new Date);return e==="3m"?[t,de(t,3)]:e==="year"?[de(t,-12),de(t,12)]:[t,de(t,12)]}render(){if(!this._ready)return n`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?n`${x("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:n`<span class="spin">${x("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let e=this._view(),t=this._accent(),a=this._dark,s=`--rv-accent:${t.fill};--rv-accent-ink:${a?t.fill:t.ink};--rv-accent-soft:${He(t.fill,a?.18:.14)};--rv-accent-faint:${He(t.fill,a?.08:.07)};--rv-accent-ink-light:${t.ink};`,i;return e.name==="calendar"?i=this._renderCalendar():e.name==="more"?i=this._renderMore():e.name==="rewards"?i=this._renderRewards():i=this._renderNow(),(e.name==="calendar"||e.name==="more"||e.name==="rewards")&&(this._medsHold=!1),n`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?n`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:u}
          ${this._online?u:n`<div class="offline">${x("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${i}</main>
          ${this._renderNav(e)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${r=>this._onFiles(r)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${r=>this._onIcsFile(r)} />
      </div>
    `}_renderNav(e){let t=s=>e.name===s,a=(s,i,r,l)=>n`<button class="tab ${t(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${r}>${x(l)}<span>${r}</span></button>`;return n`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:e.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${x("plus")}</span><span>Novo</span>
        </button>
        ${a("rewards","/recompensas","Recompensas","trophy")} ${a("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(e,t,a=u){let s=this._userName(),i=this._online?t:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return n`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${s?` \xB7 Ol\xE1, ${s}`:""}</p>
      <h1 class="page-title">${e}</h1>
      ${i?n`<p class="status"><span class="dot ${i.tone||""}" aria-hidden="true"></span><span>${i.text}</span></p>`:u}
      ${a}
    </header>`}_colorOfEvent(e){if(e.gerencia)return U("ouro");if(e.todo)return U(De);let t=this._cal(e.cal);return t&&t.color||this._accent()}_realEvent(e){return!e.kind&&!e.todo&&!e.gerencia}_rowDone(e){return e.todo?!!e.todo.done:e.gerencia?!!this._checkOf(e):!!(e.kind&&e.kind.kind!=="manutencao"&&this._checkOf(e))}_openAnyDay(e){this._openSheet("anyday",{day:A(e)})}_renderAnyDaySheet(){let e=new Date(this._now),t=D(this._form.day),a=se(this._events(t,_(t,1)),t).filter(l=>l.allDay&&!this._realEvent(l)),s=[...a.filter(l=>!this._rowDone(l)),...a.filter(l=>this._rowDone(l))],i=a.length-a.filter(l=>!this._rowDone(l)).length,r=C(t)<=C(e);return n`${this._sheetHead("Qualquer hora")}
      <p class="sheet-note top">${H(P(t,e))} · ${i} de ${k(a.length,"feita","feitas")}</p>
      <div class="any-list">
        ${s.length?s.map(l=>this._renderAnyRow(l,r)):n`<p class="empty-line">Nada sem horário neste dia.</p>`}
      </div>`}_renderAnyRow(e,t){let a=e.kind,s=this._rowDone(e),i=this._cal(e.cal),r=a?a.kind:e.todo?"tarefa":"conta",l=a&&a.points>0&&this._scoreOn()?a.points:e.todo&&e.todo.points>0?e.todo.points:0,c={key:e.key,summary:e.summary,points:a&&a.points||0},d=r==="manutencao"?(this._ix().maint||[]).find(v=>v.cal===e.cal&&v.uid===e.uid&&v.canMove):null,p=null,h=null;r==="rotina"&&t?(p=v=>this._markDone(c,"rotina",v),h=()=>this._undoCheck(c,"rotina")):r==="remedio"&&t?(p=()=>this._check(c,"remedio"),h=()=>this._undoCheck(c,"remedio")):e.todo?(p=v=>this._todoDone(e.todo,!0,v),h=()=>this._todoDone(e.todo,!1)):d&&(p=v=>this._maintDone(d,v,!0));let f=[a&&a.who,e.todo?e.todo.listName:i?i.name:e.gerencia?"GerencIA":""].filter(Boolean).join(" \xB7 "),m=!s&&p&&this._pickWho()&&(r==="rotina"||r==="manutencao"||e.todo&&l>0);return n`<div class="chore ${s?"done":""}" style=${z(this._colorOfEvent(e),this._dark)}>
      ${p||s&&h?n`<button class="chk ${s?"on":""}" aria-label="${s?"Desmarcar":"Marcar"} ${e.summary}" @click=${()=>s?h&&h():p(null)}>${s?x("check"):u}</button>`:n`<span class="chk ro" aria-hidden="true">${x({manutencao:"wrench",conta:"receipt",remedio:"pill",rotina:"spray-can",tarefa:"list-checks"}[r]||"calendar")}</span>`}
      <button class="chore-tx" @click=${()=>this._openEvent(e)}><b>${e.summary}</b><small>${m&&l?n`<span class="pts-inline">+${l}</span> · `:u}${f||{rotina:"Rotina",manutencao:"Manuten\xE7\xE3o",remedio:"Rem\xE9dio",conta:"Conta",tarefa:"Tarefa"}[r]}</small></button>
      ${m?this._renderQuickWho(e.summary,l,v=>p(v)):l?n`<span class="pts ${s?"got":""}">+${l}</span>`:u}
    </div>`}_anyTime(e){return!!e.allDay&&(!!e.todo||!!e.kind&&e.kind.kind!=="conta")}_dayHead(e,t,a){let s=new Date(this._now);return n`<button class="day-head ${q(e,s)?"today":""}" @click=${a}>
      <span class="dh-cal" aria-hidden="true"><small>${ge[e.getDay()].slice(0,3)}</small><b>${e.getDate()}</b></span>
      <span class="dh-label">${P(e,s)}</span>
      <span class="dh-count">${t}</span>
    </button>`}_renderDayRows(e,t){let a=l=>(!l.kind||l.kind.kind==="remedio")&&!l.todo&&!l.gerencia,s=(l,c)=>Number(l.allDay)-Number(c.allDay)||l.start-c.start,i=e.filter(a).sort(s),r=e.filter(l=>!a(l)).sort(s);return n`${i.map(l=>this._renderRow(l,t))}${r.length?n`<div class="day-sep ${i.length?"":"first"}">Rotinas, tarefas e lembretes</div>${r.map(l=>this._renderRow(l,t))}`:u}`}_renderRow(e,t,{showCal:a=!0}={}){let s=this._now,i=e.end.getTime()<=s,r=e.start.getTime()<=s&&e.end.getTime()>s&&!e.allDay,l=this._cal(e.cal),c;if(e.allDay){let m=I(e.end,e.start);c=m<=1&&this._anyTime(e)?n`<b class="any">Qualquer</b><small>hora</small>`:n`<b>Dia</b><small>${m>1?`${I(t,e.start)+1}/${m}`:"todo"}</small>`}else{let m=q(e.start,t),v=q(e.end,t)||e.end.getHours()===0&&e.end.getMinutes()===0&&I(e.end,t)===1;c=n`<b>${m?E(e.start):"\u2026"}</b><small>${v?E(e.end):"segue"}</small>`}let d=e.kind,p=e.todo?e.todo.done:d&&d.kind!=="manutencao"&&this._checkOf(e),f=[...d?d.kind==="remedio"?[d.dose,d.who]:d.kind==="conta"&&d.value!=null?[this._money(d.value)]:[d.who]:[],e.location,a?l?l.name:e.gerencia?"GerencIA":e.todo?`${e.todo.listName} \xB7 ResolvIA`:"":""].filter(Boolean).join(" \xB7 ");return n`<button class="ev-row ${i?"past":""} ${r?"live":""} ${p?"done":""}" style=${z(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="ev-time">${c}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo?n`<span class="kind-ic">${x("list-checks")}</span>`:this._kindIcon(e)}${e.summary}${p?n`<span class="ev-done">${x("check")}</span>`:u}</span>${f?n`<span class="ev-sub">${f}</span>`:u}</span>
      ${e.rrule?n`<span class="ev-rep" title=${ke(e.rrule)}>${x("repeat")}</span>`:u}
    </button>`}_renderNow(){let e=new Date(this._now),t=C(e),a=this._events(_(t,-1),_(t,9)).filter($=>!$.kind&&!$.todo),s=this._store.loading(_(t,-1),_(t,9)),i=this._ix().meds.filter($=>$.state==="atrasado"),r=se(a,t),l=$=>$.end-$.start>=12*36e5,c=r.filter($=>$.allDay||l($)),d=r.filter($=>!$.allDay&&!l($)),p=d.filter($=>$.start<=e&&$.end>e).sort(($,L)=>L.start-$.start),f=a.filter($=>!$.allDay&&$.start>e&&!l($)).sort(($,L)=>$.start-L.start)[0],m=this._visible();if(!this._cals().length)return this._renderNoCalendars();let v=d.filter($=>$.end>e).length,g=i.length?{text:`${H(Nt(e))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${H(Nt(e))} \xB7 ${r.length?`${k(r.length,"evento","eventos")} hoje`:"nada hoje"}${v&&v<d.length?` \xB7 ${v} pela frente`:""}`},w;if(p.length){let $=p[0],L=this._cal($.cal);w=this._ticket($,{label:"Agora",pill:`termina ${pt($.end-e)}`,when:n`<b>${E($.start)}</b> – <b>${E($.end)}</b> · ${Ht($.end-$.start)}`,stub:f?n`<span class="tk-next">Depois <b>${E(f.start)}</b> ${f.summary}</span>`:n`<span class="dot"></span><span>${[L&&L.name,$.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e,live:!0})}else if(f){let $=this._cal(f.cal);w=this._ticket(f,{label:"A seguir",pill:pt(f.start-e),when:n`<b>${E(f.start)}</b> – ${E(f.end)} · ${q(f.start,e)?"hoje":P(f.start,e,{long:!1,cap:!1})}`,stub:n`<span class="dot"></span><span>${[$&&$.name,f.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e})}else s||(w=n`<div class="hero-ev ticket empty" style=${z(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,e)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let S=this._showAllDay||c.length<=3?c:c.slice(0,2),b=[];for(let $=1;$<=7;$++){let L=_(t,$),$e=se(a,L).filter(Ue=>!(Ue.allDay&&Ue.start<L));$e.length&&b.push({d:L,list:$e})}let F=n`<div class="now-line"><span>${E(e)}</span></div>`,W=!1,V=this._ix().meds||[],B=V.length>0&&V.every($=>$.taken)&&!this._medsHold;return n`<section class="page">
      ${this._renderHead("Hoje",g)}
      ${m.length?u:n`<div class="hint-card">${x("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais")}>Mostrar</button></div>`}
      ${B?u:this._renderMedsPanel()} ${this._renderBillsPanel()}
      ${w||u}
      ${c.length?n`<div class="allday">
            ${S.map($=>n`<button class="ad-chip" style=${z(this._colorOfEvent($),this._dark)} @click=${()=>this._openEvent($)}><span class="dot"></span><span>${$.summary}</span></button>`)}
            ${c.length>S.length?n`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${c.length-S.length} o dia todo</button>`:u}
          </div>`:u}
      ${this._renderTodosPanel()}
      <div class="panel agenda">
        <div class="overline">Hoje · ${Q(e,e)}</div>
        ${d.length?d.map($=>{let L=!W&&$.start>e?(W=!0,F):u;return n`${L}${this._renderRow($,t)}`}):n`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${d.length&&!W&&d[d.length-1].end<=e?F:u}
        <button class="add-line" @click=${()=>this._openForm({date:t})}>${x("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${b.length?n`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${b.map(({d:$,list:L})=>n`${this._dayHead($,L.length,()=>this._openDay($))}
                ${this._renderDayRows(L,$)}`)}
          </div>`:s?u:n`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
      ${B?this._renderMedsPanel():u}
    </section>`}_ticket(e,{label:t,pill:a,when:s,stub:i,now:r,live:l=!1}){return n`<button class="hero-ev ticket ${l?"live":""}" style=${z(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e,r,l)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${x("clock","sm")}${a}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(e,t,a=!1){let r=F=>(F.getHours()%12*60+F.getMinutes())/720*2*Math.PI,l=(F,W)=>[40+W*Math.sin(F),40-W*Math.cos(F)],c=(F,W,V)=>{let B=W-F;for(;B<=0;)B+=2*Math.PI;if(B=Math.max(B,.42),B>=2*Math.PI-.01)return`M 40 ${40-V} A ${V} ${V} 0 1 1 ${39.99} ${40-V}`;let[$,L]=l(F,V),[$e,Ue]=l(F+B,V);return`M ${$.toFixed(2)} ${L.toFixed(2)} A ${V} ${V} 0 ${B>Math.PI?1:0} 1 ${$e.toFixed(2)} ${Ue.toFixed(2)}`},d=Array.from({length:12},(F,W)=>{let V=W/12*2*Math.PI,[B,$]=l(V,W%3?27:24),[L,$e]=l(V,29);return Xt(B,$,L,$e,W%3?"tick":"tick major")}),p="",h="",f=t;if(e){let F=e.end-e.start>=432e5;p=F?c(0,2*Math.PI,34):c(r(e.start),r(e.end),34),a&&!F&&(h=c(r(e.start),r(t),34)),f=a?t:e.start}let m=r(f),v=f.getMinutes()/60*2*Math.PI,[g,w]=l(m,15),[S,b]=l(v,23);return n`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${d}
      ${p?Hs(p,a?"span faint":"span"):u}
      ${h?Hs(h,"span"):u}
      ${Xt(40,40,g,w,"hand hour")}
      ${Xt(40,40,S,b,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return n`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${x("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let e=new Date(this._now),t=this._cursor,a=this._mode,s=this._app("week_start",0),i,r,l;if(a==="mes"||a==="lista")i=`${H(xe[t.getMonth()])}${t.getFullYear()!==e.getFullYear()?` ${t.getFullYear()}`:""}`,r=()=>this._cursor=a==="lista"?_(t,-30):de(t,-1),l=()=>this._cursor=a==="lista"?_(t,30):de(t,1);else if(a==="semana"){let h=Pe(t,s),f=_(h,6);i=h.getMonth()===f.getMonth()?`${h.getDate()}\u2013${f.getDate()} ${xe[f.getMonth()].slice(0,3)}`:`${h.getDate()} ${xe[h.getMonth()].slice(0,3)} \u2013 ${f.getDate()} ${xe[f.getMonth()].slice(0,3)}`,r=()=>this._cursor=_(t,-7),l=()=>this._cursor=_(t,7)}else i=P(t,e),r=()=>this._cursor=_(t,-1),l=()=>this._cursor=_(t,1);let c=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],d;a==="semana"?d=this._renderTimeGrid(Pe(t,s),7):a==="dia"?d=this._renderTimeGrid(t,1):a==="lista"?d=this._renderList():d=this._renderMonth();let p=a==="mes"?t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()&&q(t,e):q(t,e);return n`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{r(),this._scrollWeek=!0}}>${x("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{l(),this._scrollWeek=!0}}>${x("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${c.map(([h,f,m])=>n`<button class=${a===h?"on":""} role="tab" aria-selected=${a===h?"true":"false"} @click=${()=>this._setMode(h)}>${x(m)}<span>${f}</span></button>`)}
        </div>
        <button class="pick ${p?"on":""}" @click=${()=>{this._cursor=C(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${d}
    </section>`}_renderMonth(){let e=new Date(this._now),t=this._cursor,a=this._app("week_start",0),s=new Date(t.getFullYear(),t.getMonth(),1),i=Pe(s,a),r=_(i,42),l=this._events(i,r),c=[];for(let f=0;f<42;f++){let m=_(i,f),v=se(l,m);c.push({d:m,list:v})}let d=c[35].d.getMonth()!==t.getMonth()?5:6,p=se(l,t),h={x:0,y:0};return n`
      <div class="month" @touchstart=${f=>(h.x=f.touches[0].clientX,h.y=f.touches[0].clientY)} @touchend=${f=>{let m=f.changedTouches[0].clientX-h.x,v=f.changedTouches[0].clientY-h.y;Math.abs(m)>60&&Math.abs(v)<50&&(this._cursor=de(t,m<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(f=>n`<span>${ge[(f+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${c.slice(0,d*7).map(({d:f,list:m})=>{let v=f.getMonth()!==t.getMonth(),g=[...new Set(m.map(w=>this._colorOfEvent(w).fill))].slice(0,4);return n`<button class="cell ${v?"out":""} ${q(f,e)?"today":""} ${q(f,t)?"sel":""}" @click=${()=>this._cursor=f} aria-label="${P(f,e)}: ${k(m.length,"evento","eventos")}">
              <span class="num">${f.getDate()}</span>
              <span class="dots">${g.map(w=>n`<i style="background:${w}"></i>`)}${m.length>4?n`<b>+</b>`:u}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${P(t,e)}</span><button class="text-btn" @click=${()=>this._openForm({date:t})}>${x("plus")}Evento</button></div>
        ${p.length?this._renderDayRows(p,t):n`<p class="empty-line">${this._store.loading(i,r)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(e,t){let a=new Date(this._now),s=Array.from({length:t},(v,g)=>_(e,g)),i=this._events(s[0],_(s[t-1],1)),r=Array.from({length:24},(v,g)=>g),l=this._app("week_start",0),c=v=>v.allDay&&!this._realEvent(v),d=v=>!c(v)&&(v.allDay||v.end-v.start>=12*36e5),p=s.map(v=>se(i,v).filter(d)),h=Math.max(0,...p.map(v=>v.length)),f=s.map(v=>se(i,v).filter(c)),m=(v,g)=>{let w=g.filter(S=>this._rowDone(S)).length;return{done:w,total:g.length,all:w===g.length}};return n`
      ${t===7?n`<div class="week-strip">
            ${s.map(v=>n`<button class="ws-day ${q(v,a)?"today":""} ${q(v,this._cursor)?"sel":""}" @click=${()=>this._cursor=v}>
              <span>${ge[v.getDay()]}</span><b>${v.getDate()}</b>
            </button>`)}
          </div>`:n`<div class="week-strip day-strip">
            ${Array.from({length:7},(v,g)=>_(Pe(this._cursor,l),g)).map(v=>n`<button class="ws-day ${q(v,a)?"today":""} ${q(v,this._cursor)?"sel":""}" @click=${()=>this._cursor=v}><span>${ge[v.getDay()]}</span><b>${v.getDate()}</b></button>`)}
          </div>`}
      ${f.some(v=>v.length)?t===1?(()=>{let v=m(s[0],f[0]);return n`<button class="any-bar ${v.all?"all":""}" @click=${()=>this._openAnyDay(s[0])}>
                ${x(v.all?"circle-check":"list-checks")}<span>Qualquer hora</span><b>${v.done}/${v.total}</b>${x("chevron-right")}
              </button>`})():n`<div class="tgrid-any" style="--n:${t}">
              <span class="tg-label any-ic" title="Qualquer hora">${x("list-checks")}</span>
              ${f.map((v,g)=>{if(!v.length)return n`<span></span>`;let w=m(s[g],v);return n`<button class="tg-any ${w.all?"all":""}" aria-label="Qualquer hora, ${P(s[g],a)}: ${w.done} de ${w.total} feitas" @click=${()=>this._openAnyDay(s[g])}>${w.done}/${w.total}</button>`})}
            </div>`:u}
      ${h?n`<div class="tgrid-allday" style="--n:${t}">
            <span class="tg-label">dia todo</span>
            ${p.map(v=>n`<div class="tg-adcol">${v.slice(0,3).map(g=>n`<button class="tg-ad ${g.kind&&this._checkOf(g)?"done":""}" style=${z(this._colorOfEvent(g),this._dark)} @click=${()=>this._openEvent(g)}>${g.summary}</button>`)}${v.length>3?n`<span class="tg-admore">+${v.length-3}</span>`:u}</div>`)}
          </div>`:u}
      <div class="tgrid-scroll">
        <div class="tgrid ${t===1?"one":"week"}" style="--n:${t};--hh:${be}px">
          <div class="tg-hours">${r.map(v=>n`<span style="top:${v*be}px">${v?`${String(v).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(v=>{let g=gs(se(i,v).filter(b=>!d(b)),v),w=q(v,a),S=(a.getHours()+a.getMinutes()/60)*be;return n`<div class="tg-col ${w?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let F=b.offsetY;this._openForm({date:v,hour:Math.max(0,Math.min(23,Math.floor(F/be)))})}}>
              ${g.map(({event:b,top:F,height:W,lane:V,lanes:B})=>{let $=Math.max(W*be-2,18);return n`<button class="tg-ev ${$<34?"short":""} ${b.kind&&this._checkOf(b)?"done":""}" style="${z(this._colorOfEvent(b),this._dark)}top:${F*be}px;height:${$}px;left:calc(${V/B*100}% + 1px);width:calc(${100/B}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.kind&&this._checkOf(b)?"\u2713 ":""}${b.summary}</b>${$>=34?n`<small>${E(b.start)}${t===1&&b.location?` \xB7 ${b.location}`:""}</small>`:u}
                </button>`})}
              ${w?n`<i class="tg-now" style="top:${S}px"></i>`:u}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let e=new Date(this._now),t=this._query.trim(),a=Rt(t),s,i;a?(s=_(C(e),-365),i=_(C(e),366)):(s=this._cursor,i=_(this._cursor,30));let r=this._events(s,i);a&&(r=r.filter(d=>Rt(`${d.summary} ${d.location} ${d.description}`).includes(a)));let l=[];for(let d of r){let p=C(d.start<s?s:d.start),h=l[l.length-1];h&&q(h.d,p)?h.list.push(d):l.push({d:p,list:[d]})}let c=this._store.loading(s,i);return n`
      <label class="search-box">
        ${x("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${d=>this._query=d.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${x("x")}</button>`:u}
      </label>
      ${a?n`<p class="page-sub" style="margin-top:0">${c?"Buscando\u2026":k(r.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:u}
      ${l.length?n`<div class="panel agenda">
            ${l.map(({d,list:p})=>n`${this._dayHead(d,p.length,()=>this._openDay(d,"dia"))}${this._renderDayRows(p,d)}`)}
          </div>`:n`<div class="panel"><div class="empty"><div class="em-icon">${x(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":c?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${M(t,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let e=this._cals(),t=[];for(let r of e){let l=t.find(c=>c.label===r.group);l?l.list.push(r):t.push({label:r.group,list:[r]})}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal();return n`
      ${t.map(r=>n`<div class="panel">
          ${this._secHead("calendar-days",r.label)}
          ${r.list.map(l=>n`<div class="row cal-row ${l.hidden?"off":""}" style=${z(l.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(l)} aria-label="Personalizar ${l.name}">${x(l.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(l)}>
                <div class="label">${l.name}</div>
                <div class="hint">${[l.device,a.get(l.id)?"n\xE3o carregou":l.unavailable?"indispon\xEDvel":l.canCreate?l.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!l.hidden} @change=${c=>this._saveCalPrefs(l.id,{hidden:c.target.checked?null:!0})} aria-label="Mostrar ${l.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      <div class="panel" id="novos-eventos">
        ${this._secHead("calendar-plus","Novos eventos")}
        ${s.length?n`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${r=>this._saveAppPrefs({default_calendar:r.target.value})}>
                ${s.map(r=>n`<option value=${r.id} ?selected=${r.id===i}>${r.name}</option>`)}
              </select>
              <span class="field-hint">${x("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`:n`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local logo abaixo.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let e=this._isAdmin(),t=(s,i,r,l)=>n`<button class="row" @click=${l}>
      <span class="tile" style=${z(this._accent(),this._dark)}>${x(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${r}</div></span>
      ${x("chevron-right")}
    </button>`,a=s=>()=>e?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return n`<div class="panel">
      ${this._secHead("plus","Adicionar calend\xE1rios")}
      ${t("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${t("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${t("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${t("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${t("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(e){this._openSheet("calendar",{id:e.id,name:e.colorId||e.name!==e.origName?e.name:"",color:e.colorId,hidden:e.hidden})}async _saveCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return;let a=(e.name||"").trim();await this._saveCalPrefs(e.id,{name:a&&a!==t.origName?a:null,color:e.color||null,hidden:e.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let e=this._view().tab,t=[["calendarios","Calend\xE1rios","layers"],["avisos","Avisos","bell-ring"],["placar","Placar","trophy"],["integracoes","Integra\xE7\xF5es","blocks"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"],["opcoes","Op\xE7\xF5es","toggle-right"]],a=r=>{r!==e&&(this._haptic("light"),this._go(r==="calendarios"?"/mais":`/mais/${r}`,!0))},s,i={text:`CronologIA ${this._version}`};if(e==="avisos")s=this._renderAlertsPanel();else if(e==="placar")s=this._renderScoreSettings();else if(e==="integracoes")s=n`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderAiPanel()} ${this._aiOn()?this._renderUsage():u}`;else if(e==="dados")s=this._renderDataPanel();else if(e==="aparencia")s=this._renderAppearance();else if(e==="opcoes")s=this._renderOptions();else{s=this._renderCalendarsTab();let r=this._cals(),l=r.filter(c=>c.canCreate).length;i={text:r.length?`${k(r.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${l?k(l,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}return n`<section class="page">
      ${this._renderHead("Mais",i)}
      <div class="seg compact more-tabs" role="tablist" aria-label="Seções">
        ${t.map(([r,l,c])=>n`<button class=${e===r?"on":""} role="tab" aria-selected=${e===r?"true":"false"} @click=${()=>a(r)}>${x(c)}<span>${l}</span></button>`)}
      </div>
      <div role="tabpanel" aria-label=${t.find(r=>r[0]===e)[1]}>${s}</div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`}_renderAppearance(){let e=this._app("accent","turquesa");return n`
      <div class="panel">
        ${this._secHead("contrast","Tema","Autom\xE1tico segue o modo claro ou escuro do Home Assistant. Cada aparelho guarda a sua escolha.")}
        ${qa({theme:this._theme,onTheme:t=>this._setTheme(t),icon:x})}
      </div>
      <div class="panel">
        ${this._secHead("palette","Cor do app","Muda os bot\xF5es principais, a aba escolhida e os destaques. Vale para todos os aparelhos.")}
        ${La({palette:nt,value:e,onPick:t=>this._saveAppPrefs({accent:t})})}
      </div>
    `}_renderOptions(){let e=this._app("week_start",0),t=this._app("event_details",!1)===!0;return n`
      <div class="panel">
        ${this._secHead("calendar-plus","Novo")}
        <div class="row switch-row">
          <div class="grow"><div class="label">Local e notas</div><div class="hint" style="white-space:normal">${t?"Ligado: o evento tem os campos Local e Notas, e a tarefa tem Notas.":"Desligado: o evento e a tarefa ficam mais curtos, sem Local e Notas. Um evento que j\xE1 tem local ou notas continua mostrando os dois."}</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${t} @change=${a=>this._saveAppPrefs({event_details:a.target.checked?!0:null})} aria-label="Local e notas" /><span class="track"></span></label>
        </div>
      </div>
      <div class="panel">
        ${this._secHead("calendar-days","Semana","O dia em que a semana come\xE7a no calend\xE1rio e no placar semanal.")}
        <div class="seg week-seg" role="radiogroup" aria-label="Início da semana">
          ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>n`<button class=${e===a?"on":""} role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${s}</button>`)}
        </div>
      </div>
    `}_renderImportTiles(){let e=this._ai||{},t=this._isHaAndroid(),a=(s,i,r,l=!1)=>n`<button type="button" class="imp-tile" ?disabled=${l} @click=${()=>this._openImport(s)}>${x(i)}<span>${r}</span></button>`;return n`<div class="field imp-field">
        <span class="flabel">Trazer de mensagem ou foto</span>
        <div class="imp-tiles">
          ${a("text","clipboard-paste","Colar mensagem")}
          ${a("photos","images","Escolher fotos",!e.images)}
          ${a("scan","scan-text","Digitalizar com\xA0IA",!e.images)}
        </div>
        ${t&&e.images?n`<p class="imp-help">No app do Home Assistant, Escolher fotos abre a galeria (uma foto por vez). Para fotografar um convite ou cartão na hora, use Digitalizar com IA, que abre a câmera aqui dentro.</p>`:u}
      </div>
      <div class="ai-box">${x("scan-text")}<span>${e.ready?"Com uma mensagem ou foto, a IA encontra os eventos, com data, hor\xE1rio e local. Voc\xEA confere antes de criar.":"Para ler mensagens e fotos, configure a Leitura por IA em Mais \u203A Integra\xE7\xF5es."}</span></div>`}_secHead(e,t,a=null){return n`<div class="mais-head"><span class="mais-ic" aria-hidden="true">${x(e)}</span><h2>${t}</h2></div>${a?n`<p class="panel-lead">${a}</p>`:u}`}async _loadUsage(){if(this.api.aiUsage){try{this._usage=await this.api.aiUsage()}catch{this._usage=null}this.requestUpdate()}}_renderUsage(){let e=this._ai||{};return Ha({u:this._usage,day:this._usageDay,onDay:t=>(this._usageDay=t,this.requestUpdate()),head:this._secHead("chart-column","Uso da IA","Cada mensagem ou foto lida \xE9 uma chamada para a IA do Home Assistant. O Home Assistant n\xE3o informa tokens nem custo, ent\xE3o o CronologIA conta as chamadas e estima os tokens pelo tamanho do texto."),app:"CronologIA",using:e.using&&e.using.id||"",names:Object.fromEntries((e.entities||[]).map(t=>[t.id,t.name]))})}_aiOn(){return!this._app("ai_off",!1)}_renderAiPanel(){let e=this._aiOn(),t=n`<div class="row switch-row">
        <div class="grow"><div class="label">Usar IA</div><div class="hint" style="white-space:normal">${e?"Ligado: em Novo aparecem Colar mensagem, Escolher fotos e Digitalizar com IA.":"Desligado: Colar mensagem, Escolher fotos e Digitalizar com IA somem do Novo. O arquivo .ics continua em Mais \u203A Dados."}</div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${e} @change=${d=>this._saveAppPrefs({ai_off:d.target.checked?null:!0})} aria-label="Usar IA" /><span class="track"></span></label>
      </div>`;if(!e)return n`<div class="panel" id="leitura-ia">
        ${this._secHead("sparkles","Leitura por IA","Encontra eventos em mensagens coladas, prints, convites e cart\xF5es de consulta, com a IA configurada no Home Assistant.")}
        ${t}
      </div>`;let a=this._ai||{},s=a.entities||[],i=this._app("ai_entity",""),r=this._aiChecking?"off":a.ready&&a.images?"ok":a.ready?"warn":"bad",l=this._aiChecking?"Verificando\u2026":a.ready&&a.images?"Pronta para ler fotos":a.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",c="";return a.ready&&a.using&&(c=`Usando ${a.using.name}${i?"":" (a IA padr\xE3o do Home Assistant)"}.`,a.photos&&(c+=` Para fotos, ${a.photos.name}.`)),a.reason&&(c=`${c} ${a.reason}`.trim()),n`<div class="panel" id="leitura-ia">
      ${this._secHead("sparkles","Leitura por IA","Encontra eventos em mensagens coladas, prints, convites e cart\xF5es de consulta. Usa a integra\xE7\xE3o de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app n\xE3o guarda nenhuma chave.")}
      ${t}
      <div class="ai-state ${r}"><span class="dot"></span><div><b>${l}</b>${c?n`<span>${c}</span>`:u}</div></div>
      ${s.length||i?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${d=>this._chooseAi(d.target.value)}>
              <option value="" ?selected=${!i}>Padrão do Home Assistant</option>
              ${s.map(d=>n`<option value=${d.id} ?selected=${d.id===i}>${d.name}${d.images?"":" (s\xF3 texto)"}${d.available?"":" (indispon\xEDvel)"}</option>`)}
              ${i&&!s.some(d=>d.id===i)?n`<option value=${i} selected>${i} (não encontrada)</option>`:u}
            </select>
            <span class="field-hint">${x("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:u}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${x("rotate-ccw")}Verificar de novo</button></div>
      ${a.ready&&a.images?u:n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return u;let e=this._form||{},t=u,a=null;if(this._sheet==="event")t=this._renderEventSheet(),a=e.ev&&this._colorOfEvent(e.ev);else if(this._sheet==="form")t=this._renderFormSheet(),a=this._cal(e.cal)&&this._cal(e.cal).color;else if(this._sheet==="scope")t=this._renderScope();else if(this._sheet==="confirm")t=this._renderConfirm();else if(this._sheet==="import")t=this._renderImportSheet(),a=this._cal(e.target)&&this._cal(e.target).color;else if(this._sheet==="calendar"){t=this._renderCalSheet();let i=this._cal(e.id);a=U(e.color)||i&&i.color}else this._sheet==="export"?t=this._renderExportSheet():this._sheet==="outlook"?t=this._renderOutlookSheet():this._sheet==="nocal"?t=this._renderNoCalSheet():this._sheet==="maint"?t=this._renderMaintSheet():this._sheet==="anyday"?t=this._renderAnyDaySheet():this._sheet==="versions"?t=this._renderVersions():this._sheet==="who"?t=this._renderWhoSheet():this._sheet==="todo"?(t=this._renderTodoSheet(),a=U(De)):this._sheet==="bring"?t=this._renderBringSheet():this._sheet==="extra"?t=this._renderExtraSheet():this._sheet==="demerit"?t=this._renderDemeritSheet():this._sheet==="prize"?t=this._renderPrizeSheet():this._sheet==="bill"&&(t=this._renderBillSheet(),a=U("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${He(a.fill,this._dark?.18:.14)};${z(a,this._dark)}`:"";return n`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${t}
      </div>
    `}_sheetHead(e,t){return n`<div class="sheet-head">
      ${t?n`<button class="icon-btn back" @click=${t} aria-label="Voltar">${x("chevron-left")}</button>`:u}
      <h3 class="display">${e}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${x("x")}</button>
    </div>`}_renderEventSheet(){let e=this._form.ev,t=new Date(this._now),a=this._cal(e.cal),s;if(e.allDay){let r=_(e.end,-1);s=q(r,e.start)?`${P(e.start,t)} \xB7 ${this._anyTime(e)?"qualquer hora":"dia todo"}`:`${H(Q(e.start,t))} \u2013 ${Q(r,t)} \xB7 ${k(I(e.end,e.start),"dia","dias")}`}else q(e.start,e.end)||e.end.getHours()===0&&e.end.getMinutes()===0&&I(e.end,e.start)===1?s=`${P(e.start,t)} \xB7 ${E(e.start)} \u2013 ${E(e.end)} (${Ht(e.end-e.start)})`:s=`${H(Q(e.start,t))}, ${E(e.start)} \u2013 ${Q(e.end,t)}, ${E(e.end)}`;let i=e.start>t?pt(e.start-t):e.end>t?"acontecendo agora":"";return n`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${a?a.name:e.cal}${i?n` · <b>${i}</b>`:u}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${x("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${x("clock")}<span>${s}</span></div>
        ${e.rrule?n`<div class="fact">${x("repeat")}<span>${ke(e.rrule)}</span></div>`:u}
        ${e.location?n`<a class="fact link" href=${qi(e.location)} target="_blank" rel="noopener noreferrer">${x("map-pin")}<span>${e.location}</span>${x("external-link","sm")}</a>`:u}
        ${e.kind?this._renderKindFacts(e):u}
        ${e.description&&!e.kind?n`<div class="fact notes">${x("file-text")}<span>${lt(e.description).map(r=>r.url?n`<a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>`:r.text)}</span></div>`:u}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?n`<p class="sheet-note">${x("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:u}
      <div class="sheet-actions">
        ${a&&a.canDelete&&e.uid?n`<button class="btn danger" @click=${()=>this._askDelete(e)} aria-label="Apagar">${x("trash")}</button>`:u}
        ${this._writable().length?n`<button class="btn outline" @click=${()=>this._openForm({ev:e,copy:!0})}>${x("copy")}Duplicar</button>`:u}
        ${a&&a.canUpdate&&e.uid?n`<button class="btn primary" @click=${()=>this._openForm({ev:e})}>${x("pencil")}Editar</button>`:u}
      </div>
    `}_renderFormSheet(){let e=this._form;if(e.kind)return this._renderKindForm();let t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(m=>m.id===e.cal):t.filter(m=>m.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t,s=new Date,i=[{label:"Hoje",d:C(s)},{label:"Amanh\xE3",d:_(C(s),1)}],r=i.some(m=>A(m.d)===e.date),l=m=>{let v=this.renderRoot.querySelector(m);if(v)try{v.showPicker()}catch{v.focus(),v.click()}},c=m=>{if(!m)return;let v=S=>{let[b,F]=S.split(":").map(Number);return b*60+F},g=Math.max(15,(v(e.end)-v(e.start)+1440)%1440||60),w=(v(m)+g)%1440;this._setForm({start:m,end:`${String(Math.floor(w/60)).padStart(2,"0")}:${String(w%60).padStart(2,"0")}`})},d=m=>{let[v,g]=e.start.split(":").map(Number),w=Math.min(1439,v*60+g+m);this._setForm({end:`${String(Math.floor(w/60)).padStart(2,"0")}:${String(w%60).padStart(2,"0")}`,endDate:""})},p=m=>{let[v,g]=(m||"0:0").split(":").map(Number);return v*60+g},h=(p(e.end)-p(e.start)+1440)%1440,f=!e.allDay&&!e.endDate&&p(e.end)<=p(e.start);return n`
      ${this._sheetHead(e.mode==="add"?"Novo":"Editar evento")}
      ${e.mode==="add"?this._renderModelChips(""):u}
      ${e.mode==="add"&&this._aiOn()?this._renderImportTiles():u}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${m=>this._setForm({title:m.target.value})} @keydown=${m=>m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?n`<div class="field">
            <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(m=>n`<button class="pick list ${e.cal===m.id?"on":""}" style=${z(m.color,this._dark)} @click=${()=>this._setForm({cal:m.id})}><span class="dot"></span><span>${M(m.name,24)}</span></button>`)}</div>
          </div>`:u}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${e.allDay} @change=${m=>this._setForm({allDay:m.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${i.map(m=>n`<button class="pick ${e.date===A(m.d)?"on":""}" @click=${()=>this._setForm({date:A(m.d),endDate:e.endDate&&e.endDate<A(m.d)?"":e.endDate})}>${m.label}</button>`)}
          <button class="pick ${r?"":"on"}" @click=${()=>l("#cr-date")}>
            ${x("calendar")}<span>${r?"Outra data":H(P(D(e.date),s,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${e.date} @change=${m=>m.target.value&&this._setForm({date:m.target.value,endDate:e.endDate&&e.endDate<m.target.value?"":e.endDate})} />
          </button>
        </div>
        ${e.allDay?n`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${e.endDate||e.date} min=${e.date} @change=${m=>this._setForm({endDate:m.target.value>e.date?m.target.value:""})} />
              ${e.endDate?n`<span class="tl">${k(I(D(e.endDate),D(e.date))+1,"dia","dias")}</span>`:n`<span class="tl">um dia</span>`}
            </div>`:n`<div class="time-row">
                <input type="time" .value=${e.start} aria-label="Começa" @change=${m=>c(m.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${e.end} aria-label="Termina" @change=${m=>m.target.value&&this._setForm({end:m.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([m,v])=>n`<button class="pick ${h===m&&!e.endDate?"on":""}" @click=${()=>d(m)}>${v}</button>`)}
              </div>
              ${f?n`<div class="field-hint">${x("info")}<span>Termina no dia seguinte.</span></div>`:u}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="seg rep-seg" role="radiogroup" aria-label="Repetir">${ht.map(m=>n`<button class=${e.repeat===m.id?"on":""} role="radio" aria-checked=${e.repeat===m.id?"true":"false"} title=${m.label} @click=${()=>this._setForm({repeat:m.id})}>${m.short}</button>`)}</div>
        ${e.rrule&&qe(e.rrule)===e.repeat&&ke(e.rrule)!==(ht.find(m=>m.id===e.repeat)||{}).label?n`<div class="field-hint">${x("repeat")}<span>${ke(e.rrule)}</span></div>`:u}
        ${e.rid?n`<div class="field-hint">${x("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
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
    `}_renderScope(){let e=this._form,t=e.action==="edit",a=(s,i,r,l=!1)=>n`<button class="imp-opt ${l?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${x(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${r}</small></span>${x("chevron-right")}
    </button>`;return n`
      ${this._sheetHead(t?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${M(e.title,40)}” se repete. O que você quer ${t?"mudar":"apagar"}?</p>
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
    `}_renderImportSheet(){let e=this._form,t=this._aiOn(),a=t?this._ai||{}:{},s=this._writable(),i=this._cal(e.target),r=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},l=e.error?n`<div class="imp-error">${x("circle-alert")}<span>${e.error}</span></div>`:u,c=e.images&&e.images.length?n`<div class="thumbs">${e.images.map(p=>n`<img src=${p.url} alt="" />`)}</div>`:u,d=n`<div class="imp-error soft">${x("sparkles")}<span>${a.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(e.step==="text")return n`
        ${this._sheetHead("Colar mensagem",r)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${e.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${l} ${a.ready?u:d}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._pasteClipboard()}>${x("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(e.text||"").trim()||!a.ready} @click=${()=>this._readText()}>${x("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${a.ready?`${a.using.name} encontra datas, hor\xE1rios e locais, mesmo em mensagens corridas. Voc\xEA revisa antes de adicionar.`:""}</p>
      `;if(e.step==="loading")return n`
        ${this._sheetHead("Lendo\u2026")}
        ${c}
        <div class="imp-loading"><span class="spin">${x("loader-circle")}</span><span>${e.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:e.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(e.step==="review"){let p=e.items.filter(m=>m.on&&(m.title||"").trim()).length,h=e.provider==="ics"?`do arquivo ${M(e.fileName||".ics",28)}`:e.provider?`lidos por ${e.provider}`:"",f=new Date;return n`
        ${this._sheetHead("Revisar eventos",r)}
        ${c}
        <p class="sheet-note top">${k(e.items.length,"evento encontrado","eventos encontrados")}${h?` \xB7 ${h}`:""}. Confira datas e horários.</p>
        ${e.note?n`<div class="imp-error soft">${x("sparkles")}<span>${e.note}</span></div>`:u}
        <div class="rv-list">
          ${e.items.map((m,v)=>n`<div class="rv-card ${m.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${m.on?"on":""}" role="checkbox" aria-checked=${m.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(v,{on:!m.on})}>${x("check")}</button>
                <input class="rv-title" type="text" .value=${m.title} aria-label="Título" @input=${g=>this._setItem(v,{title:g.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:e.items.filter((g,w)=>w!==v)})}>${x("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${m.date} aria-label="Data" @change=${g=>g.target.value&&this._setItem(v,{date:g.target.value})} />
                ${m.start?n`<span class="rv-times"><input type="time" .value=${m.start} aria-label="Começa" @change=${g=>this._setItem(v,{start:g.target.value})} /><span>–</span><input type="time" .value=${m.end} aria-label="Termina" @change=${g=>this._setItem(v,{end:g.target.value})} /></span>`:n`<button class="pick ghost" @click=${()=>this._setItem(v,{start:"09:00",end:"10:00"})}>${x("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${H(P(D(m.date),f))}${m.end_date?` at\xE9 ${Q(D(m.end_date),f)}`:""}${m.location?` \xB7 ${m.location}`:""}${m.repeat||m.rrule?` \xB7 ${m.rrule?ke(m.rrule):ht.find(g=>g.id===m.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${a.images&&e.provider!=="ics"?n`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${x("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${x("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:u}
        ${s.length>1?n`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${s.map(m=>n`<button class="pick list ${e.target===m.id?"on":""}" style=${z(m.color,this._dark)} @click=${()=>this._setForm({target:m.id})}><span class="dot"></span><span>${M(m.name,24)}</span></button>`)}</div>
            </div>`:u}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||e.adding} @click=${()=>this._importAdd()}>
            ${e.adding?"Adicionando\u2026":p?`Adicionar ${k(p,"evento","eventos")}${i&&s.length<=1?` em ${M(i.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return n`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">${t?"Crie eventos a partir de uma mensagem, de uma foto (convite, cartaz, cart\xE3o de consulta) ou de um arquivo .ics. Voc\xEA revisa antes de adicionar.":"Crie eventos a partir de um arquivo .ics (convite de e-mail ou outra agenda). Voc\xEA revisa antes de adicionar."}</p>
      <div class="imp-options">
        ${t?n`<button class="imp-opt" ?disabled=${!a.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${x("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${x("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${x("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid()?"Prints e fotos da galeria, uma por vez":"Prints e fotos da galeria (at\xE9 6)"}</small></span>${x("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!a.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${x("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>Fotografe um convite ou cartão de consulta</small></span>${x("chevron-right")}
        </button>`:u}
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${x("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${x("chevron-right")}
        </button>
      </div>
      ${t&&!a.images?d:u}
      ${l}
    `}_renderCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return this._sheetHead("Calend\xE1rio");let a=U(e.color)||t.color;return n`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${z(a,this._dark)}>
        <span class="tile">${x(t.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(e.name||"").trim()||t.origName}</span><span class="lc-meta">${t.group}${t.device?` \xB7 ${t.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${e.name} placeholder=${t.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${nt.map(s=>n`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?x("check"):u}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${t.canCreate?t.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${t.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!e.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?n`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${t.id}`)}>${x("external-link")}Abrir na tela padrão do HA</button>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${x("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let e=this._form,t=this._cals(),[a,s]=this._exportRange(e.range),i=e.cals.length?this.api.exportUrl({calendars:e.cals,start:J(a),end:J(s)}):null,r=l=>this._setForm({cals:e.cals.includes(l)?e.cals.filter(c=>c!==l):[...e.cals,l]});return n`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${t.map(l=>n`<button class="pick list ${e.cals.includes(l.id)?"on":""}" style=${z(l.color,this._dark)} @click=${()=>r(l.id)}><span class="dot"></span><span>${M(l.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([l,c])=>n`<button class="pick ${e.range===l?"on":""}" @click=${()=>this._setForm({range:l})}>${c}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?n`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${x("download")}Baixar .ics</a>`:n`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${x("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let e=this._isAdmin();return n`
      ${this._sheetHead("Outlook no Home Assistant")}
      <p class="sheet-note top">O CronologIA mostra o Outlook quando ele está no Home Assistant. Há dois caminhos:</p>
      <div class="help-card">
        <b>${x("briefcase")}MS365 Calendar (HACS)</b>
        <p>Cria calendários normais no Home Assistant e, com a opção de editar ligada, deixa <b>criar, mudar e apagar</b> eventos do Outlook por aqui. Precisa de um registro de app no Microsoft Entra (Azure), que é gratuito; desde 2024 isso pede uma conta de trabalho/escola ou um diretório do Entra.</p>
        <a class="text-btn" href="https://rogerselwyn.github.io/MS365-Calendar/" target="_blank" rel="noopener noreferrer">Ver o passo a passo ${x("external-link","sm")}</a>
      </div>
      <div class="help-card">
        <b>${x("link")}Link .ics publicado</b>
        <p>No Outlook na web: Configurações › Calendário › Calendários compartilhados › Publicar um calendário, e copie o link ICS. No Home Assistant, adicione um <b>Calendário remoto</b> com esse link. É só leitura e atualiza uma vez por dia.</p>
        ${e?n`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${x("chevron-right","sm")}</button>`:u}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return n`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let e=this._cam;if(!e)return u;let t=e.shots.length;return n`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${e.flash?n`<div class="cam-flash" .key=${e.flash}></div>`:u}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${x("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${e.torchOk?n`<button class="cam-btn ${e.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${x("zap")}</button>`:n`<span class="cam-btn ghost"></span>`}
        </div>
        ${e.status==="error"?n`<div class="cam-msg">${x("camera")}<p>${e.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${x("images")}Escolher foto</button></div>`:n`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${e.status==="starting"?"Abrindo a c\xE2mera\u2026":t?`${k(t,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${e.shots.slice(-3).map(a=>n`<img src=${a.url} alt="" />`)}${t>3?n`<span>+${t-3}</span>`:u}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${e.status!=="live"||t>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!t} @click=${()=>this._useShots()}>Pronto${t?` (${t})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return u;let e=this._toast;return n`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${e.text}</span>
      ${e.action?n`<button @click=${()=>{this._toast=null,e.action.run()}}>${e.action.label}</button>`:u}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Zt);var Li=document.getElementById("app"),ea=document.createElement("cronologia-app");ea.env=is();ea.api=new ot;Li.replaceChildren(ea);})();
