/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var Pe=globalThis,$t=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Kt=new WeakMap,He=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.i,t=this.t;if($t&&e===void 0){let a=t!==void 0&&t.length===1;a&&(e=Kt.get(t)),e===void 0&&((this.i=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Kt.set(t,e))}return e}toString(){return this.cssText}},Qe=r=>new He(typeof r=="string"?r:r+"",void 0,wt),Fe=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((a,s,i)=>a+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new He(t,r,wt)},xs=(r,e)=>{if($t)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let a=document.createElement("style"),s=Pe.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,r.appendChild(a)}},Jt=$t?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return Qe(t)})(r):r,{is:bs,defineProperty:$s,getOwnPropertyDescriptor:ws,getOwnPropertyNames:_s,getOwnPropertySymbols:ys,getPrototypeOf:ks}=Object,Xe=globalThis,Qt=Xe.trustedTypes,As=Qt?Qt.emptyScript:"",Ms=Xe.reactiveElementPolyfillSupport,Ae=(r,e)=>r,gt={toAttribute(r,e){switch(e){case Boolean:r=r?As:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ua=(r,e)=>!bs(r,e),Xt={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:ua};Symbol.metadata??=Symbol("metadata"),Xe.litPropertyMetadata??=new WeakMap;var se=class extends HTMLElement{static addInitializer(e){this.o(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(e,t=Xt){if(t.state&&(t.attribute=!1),this.o(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&$s(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){let{get:s,set:i}=ws(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let c=s?.call(this);i?.call(this,o),this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xt}static o(){if(this.hasOwnProperty(Ae("elementProperties")))return;let e=ks(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(Ae("properties"))){let t=this.properties,a=[..._s(t),...ys(t)];for(let s of a)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[a,s]of t)this.elementProperties.set(a,s)}this.u=new Map;for(let[t,a]of this.elementProperties){let s=this.p(t,a);s!==void 0&&this.u.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let s of a)t.unshift(Jt(s))}else e!==void 0&&t.push(Jt(e));return t}static p(e,t){let a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this.P??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this.P?.delete(e)}$(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this.v=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.P?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}C(e,t){let a=this.constructor.elementProperties.get(e),s=this.constructor.p(e,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:gt).toAttribute(t,a.type);this.m=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(e,t){let a=this.constructor,s=a.u.get(e);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:gt;this.m=s;let c=o.fromAttribute(t,i.type);this[s]=c??this.T?.get(s)??c,this.m=null}}requestUpdate(e,t,a,s=!1,i){if(e!==void 0){let o=this.constructor;if(s===!1&&(i=this[e]),a??=o.getPropertyOptions(e),!((a.hasChanged??ua)(i,t)||a.useDefault&&a.reflect&&i===this.T?.get(e)&&!this.hasAttribute(o.p(e,a))))return;this.M(e,t,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(e,t,{useDefault:a,reflect:s,wrapped:i},o){a&&!(this.T??=new Map).has(e)&&(this.T.set(e,o??t??this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this.m!==e&&(this.A??=new Set).add(e))}async k(){this.isUpdatePending=!0;try{await this.S}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:o}=i,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.M(s,void 0,i,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this.P?.forEach(a=>a.hostUpdate?.()),this.update(t)):this.U()}catch(a){throw e=!1,this.U(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this.P?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(e){return!0}update(e){this.A&&=this.A.forEach(t=>this.C(t,this[t])),this.U()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[Ae("elementProperties")]=new Map,se[Ae("finalized")]=new Map,Ms?.({ReactiveElement:se}),(Xe.reactiveElementVersions??=[]).push("2.1.2");var _t=globalThis,Gt=r=>r,qe=_t.trustedTypes,Zt=qe?qe.createPolicy("lit-html",{createHTML:r=>r}):void 0,yt="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+G,Ds=`<${kt}>`,ce=document,De=()=>ce.createComment(""),Se=r=>r===null||typeof r!="object"&&typeof r!="function",At=Array.isArray,ma=r=>At(r)||typeof r?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ea=/-->/g,ta=/>/g,ne=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),aa=/'/g,sa=/"/g,va=/^(?:script|style|textarea|title)$/i,Mt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),n=Mt(1),ge=Mt(2),$i=Mt(3),C=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ia=new WeakMap,le=ce.createTreeWalker(ce,129);function fa(r,e){if(!At(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(e):e}var ga=(r,e)=>{let t=r.length-1,a=[],s,i=e===2?"<svg>":e===3?"<math>":"",o=ke;for(let c=0;c<t;c++){let l=r[c],d,h,p=-1,m=0;for(;m<l.length&&(o.lastIndex=m,h=o.exec(l),h!==null);)m=o.lastIndex,o===ke?h[1]==="!--"?o=ea:h[1]!==void 0?o=ta:h[2]!==void 0?(va.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=ne):h[3]!==void 0&&(o=ne):o===ne?h[0]===">"?(o=s??ke,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?ne:h[3]==='"'?sa:aa):o===sa||o===aa?o=ne:o===ea||o===ta?o=ke:(o=ne,s=void 0);let v=o===ne&&r[c+1].startsWith("/>")?" ":"";i+=o===ke?l+Ds:p>=0?(a.push(d),l.slice(0,p)+yt+l.slice(p)+G+v):l+G+(p===-2?c:v)}return[fa(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]},ze=class r{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let i=0,o=0,c=e.length-1,l=this.parts,[d,h]=ga(e,t);if(this.el=r.createElement(d,a),le.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=le.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(yt)){let m=h[o++],v=s.getAttribute(p).split(G),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:f[2],strings:v,ctor:f[1]==="."?je:f[1]==="?"?Ve:f[1]==="@"?Ue:pe}),s.removeAttribute(p)}else p.startsWith(G)&&(l.push({type:6,index:i}),s.removeAttribute(p));if(va.test(s.tagName)){let p=s.textContent.split(G),m=p.length-1;if(m>0){s.textContent=qe?qe.emptyScript:"";for(let v=0;v<m;v++)s.append(p[v],De()),le.nextNode(),l.push({type:2,index:++i});s.append(p[m],De())}}}else if(s.nodeType===8)if(s.data===kt)l.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(G,p+1))!==-1;)l.push({type:7,index:i}),p+=G.length-1}i++}}static createElement(e,t){let a=ce.createElement("template");return a.innerHTML=e,a}};function de(r,e,t=r,a){if(e===C)return e;let s=a!==void 0?t.N?.[a]:t.O,i=Se(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,a)),a!==void 0?(t.N??=[])[a]=s:t.O=s),s!==void 0&&(e=de(r,s._$AS(r,e.values),s,a)),e}var Le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(e){let{el:{content:t},parts:a}=this._$AD,s=(e?.creationScope??ce).importNode(t,!0);le.currentNode=s;let i=le.nextNode(),o=0,c=0,l=a[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new Ge(i,i.nextSibling,this,e):l.type===1?d=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(d=new Be(i,this,e)),this._$AV.push(d),l=a[++c]}o!==l?.index&&(i=le.nextNode(),o++)}return le.currentNode=ce,s}V(e){let t=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}},Ge=class xa{get _$AU(){return this._$AM?._$AU??this.D}constructor(e,t,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),Se(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==C&&this.L(e):e._$litType$!==void 0?this.j(e):e.nodeType!==void 0?this.I(e):ma(e)?this.H(e):this.L(e)}B(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}I(e){this._$AH!==e&&(this._$AR(),this._$AH=this.B(e))}L(e){this._$AH!==u&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.I(ce.createTextNode(e)),this._$AH=e}j(e){let{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=ze.createElement(fa(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(t);else{let i=new Le(s,this),o=i.R(this.options);i.V(t),this.I(o),this._$AH=i}}_$AC(e){let t=ia.get(e.strings);return t===void 0&&ia.set(e.strings,t=new ze(e)),t}H(e){At(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,s=0;for(let i of e)s===t.length?t.push(a=new xa(this.B(De()),this.B(De()),this,this.options)):a=t[s],a._$AI(i),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let a=Gt(e).nextSibling;Gt(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this.D=e,this._$AP?.(e))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(e,t=this,a,s){let i=this.strings,o=!1;if(i===void 0)e=de(this,e,t,0),o=!Se(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let c=e,l,d;for(e=i[0],l=0;l<i.length-1;l++)d=de(this,c[a+l],t,l),d===C&&(d=this._$AH[l]),o||=!Se(d)||d!==this._$AH[l],d===u?e=u:e!==u&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}o&&!s&&this.W(e)}W(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},je=class extends pe{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===u?void 0:e}},Ve=class extends pe{constructor(){super(...arguments),this.type=4}W(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Ue=class extends pe{constructor(e,t,a,s,i){super(e,t,a,s,i),this.type=5}_$AI(e,t=this){if((e=de(this,e,t,0)??u)===C)return;let a=this._$AH,s=e===u&&a!==u||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Be=class{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}},Ss={q:yt,J:G,Z:kt,F:1,G:ga,K:Le,X:ma,Y:de,tt:Ge,st:pe,it:Ve,et:Ue,ht:je,ot:Be},zs=_t.litHtmlPolyfillSupport;zs?.(ze,Ge),(_t.litHtmlVersions??=[]).push("3.3.3");var ba=(r,e,t)=>{let a=t?.renderBefore??e,s=a._$litPart$;if(s===void 0){let i=t?.renderBefore??null;a._$litPart$=s=new Ge(e.insertBefore(De(),i),i,void 0,t??{})}return s._$AI(r),s},Dt=globalThis;var re=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.rt=ba(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return C}};re._$litElement$=!0,re.finalized=!0,Dt.litElementHydrateSupport?.({LitElement:re});var Ts=Dt.litElementPolyfillSupport;Ts?.({LitElement:re});(Dt.litElementVersions??=[]).push("4.2.2");var{tt:Es}=Ss,ra=r=>r,Cs=r=>r===null||typeof r!="object"&&typeof r!="function";var oa=(r,e)=>e===void 0?r?._$litType$!==void 0:r?._$litType$===e,Fs=r=>r?._$litType$?.h!=null;var $a=r=>r.strings===void 0,na=()=>document.createComment(""),ie=(r,e,t)=>{let a=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){let i=a.insertBefore(na(),s),o=a.insertBefore(na(),s);t=new Es(i,o,r,r.options)}else{let i=t._$AB.nextSibling,o=t._$AM,c=o!==r;if(c){let l;t._$AQ?.(r),t._$AM=r,t._$AP!==void 0&&(l=r._$AU)!==o._$AU&&t._$AP(l)}if(i!==s||c){let l=t._$AA;for(;l!==i;){let d=ra(l).nextSibling;ra(a).insertBefore(l,s),l=d}}}return t},ae=(r,e,t=r)=>(r._$AI(e,t),r),Os={},Te=(r,e=Os)=>r._$AH=e,xt=r=>r._$AH,vt=r=>{r._$AR(),r._$AA.remove()},wa=r=>{r._$AR()};var B=r=>(...e)=>({_$litDirective$:r,values:e}),J=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this.nt=e,this._$AM=t,this.ct=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Me=(r,e)=>{let t=r._$AN;if(t===void 0)return!1;for(let a of t)a._$AO?.(e,!1),Me(a,e);return!0},Ye=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},_a=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Is(e)}};function Rs(r){this._$AN!==void 0?(Ye(this),this._$AM=r,_a(this)):this._$AM=r}function Ns(r,e=!1,t=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)Me(a[i],!1),Ye(a[i]);else a!=null&&(Me(a,!1),Ye(a));else Me(this,r)}var Is=r=>{r.type==2&&(r._$AP??=Ns,r._$AQ??=Rs)},Ee=class extends J{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),_a(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Me(this,e),Ye(this))}setValue(e){if($a(this.nt))this.nt._$AI(e,this);else{let t=[...this.nt._$AH];t[this.ct]=e,this.nt._$AI(t,this,0)}}disconnected(){}reconnected(){}};var We=class{constructor(e){this.lt=e}disconnect(){this.lt=void 0}reconnect(e){this.lt=e}deref(){return this.lt}},Ke=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(e=>this.dt=e)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var Je=class extends Ee{constructor(){super(...arguments),this.ft=new We(this),this.vt=new Ke}render(e,t){return C}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this.yt)return C;this.yt=t;let s=0,{ft:i,vt:o}=this;return(async(c,l)=>{for await(let d of c)if(await l(d)===!1)return})(t,async c=>{for(;o.get();)await o.get();let l=i.deref();if(l!==void 0){if(l.yt!==t)return!1;a!==void 0&&(c=a(c,s)),l.commitValue(c,s),s++}return!0}),C}commitValue(e,t){this.setValue(e)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},wi=B(Je),_i=B(class extends Je{constructor(r){if(super(r),r.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(r,e){return this.rt=r,super.update(r,e)}commitValue(r,e){e===0&&wa(this.rt);let t=ie(this.rt);ae(t,r)}}),la=r=>Fs(r)?r._$litType$.h:r.strings,yi=B(class extends J{constructor(r){super(r),this.bt=new WeakMap}render(r){return[r]}update(r,[e]){let t=oa(this.gt)?la(this.gt):null,a=oa(e)?la(e):null;if(t!==null&&(a===null||t!==a)){let s=xt(r).pop(),i=this.bt.get(t);if(i===void 0){let o=document.createDocumentFragment();i=ba(u,o),i.setConnected(!1),this.bt.set(t,i)}Te(i,[s]),ie(i,void 0,s)}if(a!==null){if(t===null||t!==a){let s=this.bt.get(a);if(s!==void 0){let i=xt(s).pop();wa(r),ie(r,void 0,i),Te(r,[i])}}this.gt=e}else this.gt=void 0;return this.render(e)}});var ki=B(class extends J{constructor(r){if(super(r),r.type!==1||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){if(this.wt===void 0){this.wt=new Set,r.strings!==void 0&&(this._t=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(e)}let t=r.element.classList;for(let a of this.wt)a in e||(t.remove(a),this.wt.delete(a));for(let a in e){let s=!!e[a];s===this.wt.has(a)||this._t?.has(a)||(s?(t.add(a),this.wt.add(a)):(t.remove(a),this.wt.delete(a)))}return C}}),Ps={},Ai=B(class extends J{constructor(){super(...arguments),this.St=Ps}render(r,e){return e()}update(r,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.St)&&this.St.length===e.length&&e.every((a,s)=>a===this.St[s]))return C}else if(this.St===e)return C;return this.St=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var Mi=B(class extends J{constructor(){super(...arguments),this.key=u}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(Te(r),this.key=e),t}}),Di=B(class extends J{constructor(r){if(super(r),r.type!==3&&r.type!==1&&r.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!$a(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===C||e===u)return e;let t=r.element,a=r.name;if(r.type===3){if(e===t[a])return C}else if(r.type===4){if(!!e===t.hasAttribute(a))return C}else if(r.type===1&&t.getAttribute(a)===e+"")return C;return Te(r),e}});var ft=new WeakMap,Si=B(class extends Ee{render(r){return u}update(r,[e]){let t=e!==this.lt;return t&&this.$t(void 0),(t||this.Tt!==this.xt)&&(this.lt=e,this.Et=r.options?.host,this.$t(this.xt=r.element)),u}$t(r){if(this.lt!==void 0)if(this.isConnected||(r=void 0),typeof this.lt=="function"){let e=this.Et??globalThis,t=ft.get(e);t===void 0&&(t=new WeakMap,ft.set(e,t)),t.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),t.set(this.lt,r),r!==void 0&&this.lt.call(this.Et,r)}else this.lt.value=r}get Tt(){return typeof this.lt=="function"?ft.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),ca=(r,e,t)=>{let a=new Map;for(let s=e;s<=t;s++)a.set(r[s],s);return a},q=B(class extends J{constructor(r){if(super(r),r.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(r,e,t){let a;t===void 0?t=e:e!==void 0&&(a=e);let s=[],i=[],o=0;for(let c of r)s[o]=a?a(c,o):o,i[o]=t(c,o),o++;return{values:i,keys:s}}render(r,e,t){return this.Ct(r,e,t).values}update(r,[e,t,a]){let s=xt(r),{values:i,keys:o}=this.Ct(e,t,a);if(!Array.isArray(s))return this.Pt=o,i;let c=this.Pt??=[],l=[],d,h,p=0,m=s.length-1,v=0,f=i.length-1;for(;p<=m&&v<=f;)if(s[p]===null)p++;else if(s[m]===null)m--;else if(c[p]===o[v])l[v]=ae(s[p],i[v]),p++,v++;else if(c[m]===o[f])l[f]=ae(s[m],i[f]),m--,f--;else if(c[p]===o[f])l[f]=ae(s[p],i[f]),ie(r,l[f+1],s[p]),p++,f--;else if(c[m]===o[v])l[v]=ae(s[m],i[v]),ie(r,s[p],s[m]),m--,v++;else if(d===void 0&&(d=ca(o,v,f),h=ca(c,p,m)),d.has(c[p]))if(d.has(c[m])){let b=h.get(o[v]),D=b!==void 0?s[b]:null;if(D===null){let R=ie(r,s[p]);ae(R,i[v]),l[v]=R}else l[v]=ae(D,i[v]),ie(r,s[p],D),s[b]=null;v++}else vt(s[m]),m--;else vt(s[p]),p++;for(;v<=f;){let b=ie(r,l[f+1]);ae(b,i[v]),l[v++]=b}for(;p<=m;){let b=s[p++];b!==null&&vt(b)}return this.Pt=o,Te(r,l),C}}),ya="important",Hs=" !"+ya,zi=B(class extends J{constructor(r){if(super(r),r.type!==1||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{let a=r[t];return a==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(r,[e]){let{style:t}=r.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(e)),this.render(e);for(let a of this.Mt)e[a]==null&&(this.Mt.delete(a),a.includes("-")?t.removeProperty(a):t[a]=null);for(let a in e){let s=e[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(Hs);a.includes("-")||i?t.setProperty(a,i?s.slice(0,-11):s,i?ya:""):t[a]=s}}return C}}),Ti=B(class extends J{constructor(r){if(super(r),r.type!==2)throw Error("templateContent can only be used in child bindings")}render(r){return this.At===r?C:(this.At=r,document.importNode(r.content,!0))}}),fe=class extends J{constructor(e){if(super(e),this.gt=u,e.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this.kt=void 0,this.gt=e;if(e===C)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.gt)return this.kt;this.gt=e;let t=[e];return t.raw=t,this.kt={_$litType$:this.constructor.resultType,strings:t,values:[]}}};fe.directiveName="unsafeHTML",fe.resultType=1;var Ei=B(fe);var Ce=class extends fe{};Ce.directiveName="unsafeSVG",Ce.resultType=2;var Q=B(Ce),da=r=>!Cs(r)&&typeof r.then=="function",pa=1073741823;var bt=class extends Ee{constructor(){super(...arguments),this.Ot=pa,this.Ut=[],this.ft=new We(this),this.vt=new Ke}render(...e){return e.find(t=>!da(t))??C}update(e,t){let a=this.Ut,s=a.length;this.Ut=t;let i=this.ft,o=this.vt;this.isConnected||this.disconnected();for(let c=0;c<t.length&&!(c>this.Ot);c++){let l=t[c];if(!da(l))return this.Ot=c,l;c<s&&l===a[c]||(this.Ot=pa,s=0,Promise.resolve(l).then(async d=>{for(;o.get();)await o.get();let h=i.deref();if(h!==void 0){let p=h.Ut.indexOf(l);p>-1&&p<h.Ot&&(h.Ot=p,h.setValue(d))}}))}return C}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},Ci=B(bt);var qs=Symbol.for(""),Ls=r=>{if(r?.r===qs)return r?._$litStatic$};var ha=new Map,ka=r=>(e,...t)=>{let a=t.length,s,i,o=[],c=[],l,d=0,h=!1;for(;d<a;){for(l=e[d];d<a&&(i=t[d],(s=Ls(i))!==void 0);)l+=s+e[++d],h=!0;d!==a&&c.push(i),o.push(l),d++}if(d===a&&o.push(e[a]),h){let p=o.join("$$lit$$");(e=ha.get(p))===void 0&&(o.raw=o,ha.set(p,e=o)),t=c}return r(e,...t)},Fi=ka(n),Oi=ka(ge);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var V={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>',archive:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',"archive-restore":'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>',sheet:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>',braces:'<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',blocks:'<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>'};var Aa="./fonts/barlow-400.woff2";var Ma="./fonts/barlow-500.woff2";var Da="./fonts/barlow-600.woff2";var Sa="./fonts/barlow-condensed-500.woff2";var za="./fonts/barlow-condensed-600.woff2";var Ta="./fonts/barlow-condensed-700.woff2";var Ea='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Ca=`"CR Barlow", ${Ea}`,Fa=`"CR Barlow Condensed", ${Ea}`;function Oa(){if(document.getElementById("cronologia-fonts"))return;let r=(t,a,s)=>`@font-face{font-family:"${t}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,e=document.createElement("style");e.id="cronologia-fonts",e.textContent=[r("CR Barlow",Aa,400),r("CR Barlow",Ma,500),r("CR Barlow",Da,"600 900"),r("CR Barlow Condensed",Sa,500),r("CR Barlow Condensed",za,600),r("CR Barlow Condensed",Ta,"700 900")].join(`
`),document.head.appendChild(e)}var Ra=Fe`
  :host {
    --rv-body: ${Qe(Ca)};
    --rv-display: ${Qe(Fa)};
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
`,Na=Fe`
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
`;var Ia=Fe`
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
`;var St=class{constructor(e,t){this.url=e,this.onStatus=t,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let e=new WebSocket(this.url);this.ws=e,e.onopen=()=>{this.open=!0,this.backoff=1e3;let t=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))e.send(a);if(this.onStatus&&this.onStatus(!0),t)for(let a of this.reconnectHandlers)a()},e.onmessage=t=>{let a;try{a=JSON.parse(t.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},e.onclose=()=>{let t=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),t&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(e){this.reconnectHandlers.push(e)}_send(e){let t=JSON.stringify(e);this.open?this.ws.send(t):this.queue.push(t)}sendMessagePromise(e){let t=this.nextId++;return new Promise((a,s)=>{this.pending.set(t,{resolve:a,reject:s}),this._send({...e,id:t})})}subscribeMessage(e,t){let a={cb:e,msg:t,id:null,first:null};this.subs.add(a);let s=new Promise((i,o)=>{a.first={resolve:i,reject:o}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(e){let t=this.nextId++;e.id=t,this.byId.set(t,e),this.pending.set(t,{resolve:()=>{e.first&&e.first.resolve(),e.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(t),this.subs.delete(e),e.first&&e.first.reject(a),e.first=null)}}),this.ws.send(JSON.stringify({...e.msg,id:t}))}};function et(){try{if(window.parent===window)return null;let r=window.parent.document.querySelector("home-assistant");return r&&r.hass||null}catch{return null}}var Pa=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function Ha(){let r=et();return r&&r.themes&&typeof r.themes.darkMode=="boolean"?r.themes.darkMode:!!(Pa&&Pa.matches)}function qa(){return{topbar:!(window.parent!==window),haptic(e){try{let t=window.parent;t!==window&&t.dispatchEvent(new t.CustomEvent("haptic",{detail:e}))}catch{}},openInHA(e){try{let t=window.parent;if(t!==window&&t.document){t.history.pushState(null,"",e),t.dispatchEvent(new t.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(e,"_top")}}}var Ze=class{constructor(){let e=new URL("ws",location.href);e.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new St(e.href,t=>this.statusHandlers.forEach(a=>a(t)))}onStatus(e){this.statusHandlers.push(e)}onReconnect(e){this.conn.onReconnect(e)}call(e,t={}){return this.conn.sendMessagePromise({type:e,...t})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(e){return this.conn.subscribeMessage(e,{type:"cronologia/subscribe_calendars"})}subscribePrefs(e){return this.conn.subscribeMessage(e,{type:"cronologia/prefs/subscribe"})}subscribeEvents(e,t,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:e,start:t,end:a})}listEvents(e,t,a){return this.call("cronologia/events/list",{entity_id:e,start:t,end:a})}createEvent(e,t){return this.call("calendar/event/create",{entity_id:e,event:t})}updateEvent(e,t,a,{recurrenceId:s,range:i}={}){let o={entity_id:e,uid:t,event:a};return s&&(o.recurrence_id=s),i&&(o.recurrence_range=i),this.call("calendar/event/update",o)}deleteEvent(e,t,{recurrenceId:a,range:s}={}){let i={entity_id:e,uid:t};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(e,t){return this.call("cronologia/prefs/set_calendar",{entity_id:e,prefs:t})}setAppPrefs(e){return this.call("cronologia/prefs/set_app",{prefs:e})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(e){return this.conn.subscribeMessage(e,{type:"cronologia/home/subscribe"})}setCheck(e,t,a,s){return this.call("cronologia/check/set",{key:e,done:t,kind:a,...s?{who:s}:{}})}maintDone(e,t,a){return this.call("cronologia/maint/done",{entity_id:e,uid:t,...a?{who:a}:{}})}scoreReassign(e,t){return this.call("cronologia/score/reassign",{key:e,who:t})}scoreExtra(e,t,a){return this.call("cronologia/score/extra",{who:e,points:t,title:a})}scoreDemerit(e,t){return this.call("cronologia/score/demerit",{demerit:e,who:t})}scoreRemove(e){return this.call("cronologia/score/remove",{key:e})}scorePrizes(e,t,a){return this.call("cronologia/score/prizes",{period:e,shared:t,per:a})}scoreReward(e,t){return this.call("cronologia/score/reward",{period:e,text:t})}scoreDelivered(e,t){return this.call("cronologia/score/delivered",{period:e,delivered:t})}maintUndo(e,t){return this.call("cronologia/maint/undo",{entity_id:e,uid:t})}payBill(e,t){return this.call("cronologia/contas/pagar",{conta:e,...t?{valor:t}:{}})}unpayBill(e){return this.call("cronologia/contas/desfazer",{conta:e})}newBill(e){return this.call("cronologia/contas/nova",{conta:e})}dataUrl(e){return new URL(`api/export/${e}`,location.href).href}async importData(e){let t=await fetch(new URL("api/import",location.href),{method:"POST",headers:{"content-type":"application/octet-stream","x-file-name":encodeURIComponent(e.name||"")},body:e}),a=await t.json().catch(()=>({}));if(!t.ok)throw new Error(a.error||`Erro ${t.status}`);return a}versions(){return this.call("cronologia/versions/list")}restoreVersion(e){return this.call("cronologia/versions/restore",{name:e})}backups(){return this.call("cronologia/backups/list")}createBackup(){return this.call("cronologia/backups/create")}restoreBackup(e){return this.call("cronologia/backups/restore",{name:e})}addTodo(e,t){return this.call("cronologia/todo/add",{entity_id:e,task:t})}setTodo(e,t,a,s=""){return this.call("cronologia/todo/set",{entity_id:e,uid:t,done:a,who:s})}testAlert(e){return this.call("cronologia/notify/test",{target:e})}exportUrl({calendars:e,start:t,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",e.join(",")),s.searchParams.set("start",t),s.searchParams.set("end",a),s.href}async extract(e){let t=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),a=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(a.error||`Erro ${t.status}`);throw s.code=a.code,s}return a}};var tt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],La=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],j=r=>tt.find(e=>e.id===r),ja=r=>j(La[r%La.length]);function Oe(r,e){let t=r.replace("#",""),a=parseInt(t.length===3?t.replace(/./g,s=>s+s):t,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${e})`}function z(r,e,t="c"){return`--${t}:${r.fill};--${t}i:${e?r.fill:r.ink};--${t}s:${Oe(r.fill,e?.18:.15)};`}var zt=r=>(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var _=(r,e,t)=>`${r} ${r===1?e:t}`,k=(r,e=38)=>r&&r.length>e?r.slice(0,e-1).trimEnd()+"\u2026":r||"",I=r=>r&&r.charAt(0).toUpperCase()+r.slice(1);function at(r){let e=[],t=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=t.exec(r||"");)s.index>a&&e.push({text:r.slice(a,s.index)}),e.push({url:s[0]}),a=s.index+s[0].length;return a<(r||"").length&&e.push({text:r.slice(a)}),e}var st=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],be=["dom","seg","ter","qua","qui","sex","s\xE1b"],he=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],it=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],xe=r=>String(r).padStart(2,"0"),y=r=>`${r.getFullYear()}-${xe(r.getMonth()+1)}-${xe(r.getDate())}`,M=r=>`${xe(r.getHours())}:${xe(r.getMinutes())}`,A=r=>{let[e,t,a]=r.split("-").map(Number);return new Date(e,t-1,a)},S=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),$=(r,e)=>{let t=new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds());return t.setDate(t.getDate()+e),t},oe=(r,e)=>new Date(r.getFullYear(),r.getMonth()+e,1),P=(r,e)=>r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()&&r.getDate()===e.getDate(),F=(r,e)=>Math.round((S(r)-S(e))/864e5),Re=(r,e=0)=>$(S(r),-((r.getDay()-e+7)%7)),Tt=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)?A(r):new Date(r);function Y(r){let e=-r.getTimezoneOffset(),t=e>=0?"+":"-";return`${y(r)}T${M(r)}:00${t}${xe(Math.floor(Math.abs(e)/60))}:${xe(Math.abs(e)%60)}`}function H(r,e=new Date,{long:t=!0,cap:a=!0}={}){let s=F(r,e),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${st[r.getDay()]}, ${r.getDate()} de ${t?he[r.getMonth()]:it[r.getMonth()]}`,r.getFullYear()!==e.getFullYear()&&(i+=` de ${r.getFullYear()}`)),a?I(i):i}var Et=r=>`${st[r.getDay()]}, ${r.getDate()} de ${he[r.getMonth()]}`,W=(r,e=new Date)=>`${r.getDate()} ${it[r.getMonth()]}${r.getFullYear()!==e.getFullYear()?` ${r.getFullYear()}`:""}`;function rt(r){let e=Math.round(r/6e4);if(e<1)return"agora";if(e<60)return`em ${e} min`;let t=Math.floor(e/60),a=e%60;if(t<24)return a&&t<4?`em ${t} h ${a} min`:`em ${t} h`;let s=Math.round(t/24);return`em ${_(s,"dia","dias")}`}function Ct(r){let e=Math.round(r/6e4);if(e<60)return`${e} min`;let t=Math.floor(e/60),a=e%60;return a?`${t} h ${a} min`:`${t} h`}var ot=[{id:"",label:"N\xE3o repete"},{id:"DAILY",label:"Todo dia"},{id:"WEEKLY",label:"Toda semana"},{id:"MONTHLY",label:"Todo m\xEAs"},{id:"YEARLY",label:"Todo ano"}];function $e(r){if(!r)return"";let e=Object.fromEntries(r.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),t=Number(e.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[e.FREQ];if(!a)return"Repete";let s=t>1?`A cada ${t} ${a[1]}`:a[0];if(e.BYDAY&&e.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${e.BYDAY.split(",").map(o=>i[o]||o).join(", ")})`}if(e.COUNT)s+=`, ${_(Number(e.COUNT),"vez","vezes")}`;else if(e.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(e.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var Ne=r=>{let e=/FREQ=(\w+)/.exec(r||"");return e?e[1]:""};async function Ft(r,e=1800){let t=a=>new Promise((s,i)=>{let o=new FileReader;o.onload=()=>s(String(o.result).split(",")[1]||""),o.onerror=()=>i(o.error),o.readAsDataURL(a)});try{let a=await createImageBitmap(r,{imageOrientation:"from-image"}),s=Math.min(1,e/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let o=await new Promise(c=>i.toBlob(c,"image/jpeg",.86));return{mime:"image/jpeg",data:await t(o),url:URL.createObjectURL(o)}}catch{return{mime:r.type||"image/jpeg",data:await t(r),url:URL.createObjectURL(r)}}}var Ot={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos"}}},Ks={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},nt={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},O=r=>String(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),Va=r=>String(r).padStart(2,"0");var Ba=(r,e)=>`${r}|${e.uid||e.summary}|${e.recurrence_id||e.start}`;function lt(r){let e=String(r||"").replace(/[^\d.,-]/g,"");if(!e)return null;e.includes(",")?e=e.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(e)&&!/\.\d{1,2}$/.test(e)&&(e=e.replace(/\./g,""));let t=Number(e);return Number.isFinite(t)&&t>0?Math.round(t*100)/100:null}var we=(r,e=!0)=>r==null?"":r.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:e?2:0,maximumFractionDigits:e?2:0});function Js(r){let e=/(\d+)\s*([a-zçê]+)/i.exec(O(r));if(!e)return null;let t=Math.max(1,Math.min(999,Number(e[1]))),a=e[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:t,unit:s}:null}var _e=r=>r?`${r.n} ${r.n===1?nt[r.unit][1]:nt[r.unit][2]}`:"";function Rt(r,e,t=1){let a=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=e.n*t;if(e.unit==="dias")a.setDate(a.getDate()+s);else if(e.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=e.unit==="anos"?12*s:s,o=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let c=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(o,c))}return a}var Qs=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Xs(r){let e=[];for(let t of String(r||"").matchAll(Qs))e.push(`${t[3]}-${Va(+t[2])}-${Va(+t[1])}`);return e}var Gs=r=>r.map(e=>`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`).join(", "),Ua=r=>{let e=/(\d+)/.exec(String(r||""));return e?Math.min(1e3,Number(e[1])):0};function Ya(r){let e=String(r||"").replace(/\r/g,"").split(`
`),t=0;for(;t<e.length&&!e[t].trim();)t++;let a=/^#\s*([a-z]+)\b/.exec(O(e[t])),s=a&&Ks[a[1]];if(!s)return null;let i=Object.entries(Ot[s].fields).map(([l,d])=>[l,O(d)]),o={};for(t++;t<e.length;t++){let l=/^([^:]{2,24}):\s*(.*)$/.exec(e[t]);if(!l)break;let d=O(l[1]),h=i.find(([,p])=>p===d||p.startsWith("aviso")&&d.startsWith("aviso"));if(!h)break;o[h[0]]=l[2].trim()}let c={kind:s,notes:e.slice(t).join(`
`).trim()};if(s==="remedio")c.dose=o.dose||"",c.who=o.who||"",c.alert=!/^(nao|desligado|off)/.test(O(o.alert));else if(s==="conta")c.value=lt(o.value);else if(s==="rotina")c.who=o.who||"",c.points=Ua(o.points);else{c.who=o.who||"",c.every=Js(o.every)||{n:6,unit:"meses"};let l=/(\d+)/.exec(o.warn||"");c.warn=l?Math.min(365,Number(l[1])):7,c.history=Xs(o.history),c.points=Ua(o.points)}return c}function Wa(r){let e=[Ot[r.kind].tag],t=(i,o)=>{o!=null&&String(o).trim()&&e.push(`${i}: ${String(o).replace(/\s*\n\s*/g," ").trim()}`)},a=Ot[r.kind].fields;r.kind==="remedio"?(t(a.dose,r.dose),t(a.who,r.who),r.alert===!1&&t(a.alert,"n\xE3o")):r.kind==="conta"?t(a.value,r.value!=null?we(r.value):""):r.kind==="rotina"?(t(a.who,r.who),r.points>0&&t(a.points,r.points)):(t(a.who,r.who),t(a.every,_e(r.every)),t(a.warn,`${r.warn??7} ${(r.warn??7)===1?"dia":"dias"} antes`),t(a.history,Gs((r.history||[]).slice(0,8))),r.points>0&&t(a.points,r.points));let s=String(r.notes||"").trim();return s?`${e.join(`
`)}
${s}`:e.join(`
`)}var Ka=4,Zs=300*1e3;function ct(r,e){let t=Tt(e.start),a=Tt(e.end),s=e.all_day!=null?!!e.all_day:/^\d{4}-\d{2}-\d{2}$/.test(e.start);return{key:Ba(r,e),kind:Ya(e.description),cal:r,uid:e.uid||null,rid:e.recurrence_id||null,rrule:e.rrule||null,summary:e.summary||"(sem t\xEDtulo)",description:e.description||"",location:e.location||"",allDay:s,start:t,end:a>t?a:$(t,s?1:0),raw:e}}var dt=class{constructor(e,t){this.api=e,this.onChange=t,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(e){let t=[...new Set(e)].sort();if(t.join()!==this.calendars.join()){this.calendars=t;for(let a of this.windows)this._syncWindow(a)}}ensure(e,t){let a=this._covering(e,t);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:$(S(e),-7),end:$(S(t),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(e,t,a=this.calendars){let s=this._covering(e,t),i=[];if(!s)return i;for(let o of a){let c=s.cals.get(o);if(c)for(let l of c.events)l.start<t&&l.end>e&&i.push(l)}return i.sort((o,c)=>o.start-c.start||Number(c.allDay)-Number(o.allDay)||o.summary.localeCompare(c.summary,"pt-BR"))}loading(e,t){let a=this._covering(e,t);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let e=new Map;for(let t of this.windows)for(let[a,s]of t.cals)s.error&&e.set(a,s.error);return e}refresh(e){for(let t of this.windows){let a=t.cals.get(e);a&&a.poll&&this._fetch(t,e,a)}}reloadAll(){for(let e of this.windows)for(let[t,a]of e.cals)a.poll&&this._fetch(e,t,a)}dispose(){for(let e of this.windows)for(let[t]of e.cals)this._drop(e,t);this.windows=[]}_covering(e,t){let a=null;for(let s of this.windows)s.start<=e&&s.end>=t&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(e){for(let t of this.calendars)e.cals.has(t)||this._add(e,t);for(let t of[...e.cals.keys()])this.calendars.includes(t)||this._drop(e,t)}_add(e,t){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};e.cals.set(t,a);let s=Y(e.start),i=Y(e.end);if(this.noSubscribe)return this._startPolling(e,t,a);a.unsub=this.api.subscribeEvents(t,s,i,o=>{e.cals.has(t)&&(o&&Array.isArray(o.events)?(a.events=o.events.map(c=>ct(t,c)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(o=>o&&o.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(e,t,a)):(a.loaded=!0,a.error=o&&o.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(e,t,a){return this._fetch(e,t,a),a.poll=setInterval(()=>this._fetch(e,t,a),Zs),null}async _fetch(e,t,a){try{let s=await this.api.listEvents(t,Y(e.start),Y(e.end));if(!e.cals.has(t))return;a.events=(s.events||[]).map(i=>ct(t,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(e,t){let a=e.cals.get(t);a&&(e.cals.delete(t),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=Ka)){this.windows.sort((e,t)=>t.used-e.used);for(let e of this.windows.splice(Ka))for(let[t]of e.cals)this._drop(e,t)}}};function ue(r,e){let t=S(e),a=$(t,1);return r.filter(s=>s.start<a&&s.end>t)}function Ja(r,e){let t=S(e).getTime(),a=t+864e5,s=r.filter(d=>!d.allDay).map(d=>({e:d,s:Math.max(d.start.getTime(),t),t:Math.min(Math.max(d.end.getTime(),d.start.getTime()+15*6e4),a)})).sort((d,h)=>d.s-h.s||h.t-d.t),i=[],o=[],c=-1,l=()=>{let d=[];for(let h of o){let p=d.findIndex(m=>m<=h.s);p<0?(p=d.length,d.push(h.t)):d[p]=h.t,h.lane=p}for(let h of o)i.push({...h,lanes:d.length});o=[]};for(let d of s)o.length&&d.s>=c&&l(),o.push(d),c=Math.max(c,d.t);return o.length&&l(),i.map(d=>({event:d.e,top:(d.s-t)/36e5,height:(d.t-d.s)/36e5,lane:d.lane,lanes:d.lanes}))}var Nt=r=>r.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function ei(r){return r.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function ti(r){let e=r.indexOf(":");if(e<0)return null;let t=r.slice(0,e),a=r.slice(e+1),[s,...i]=t.split(";"),o={};for(let c of i){let[l,d]=c.split("=");l&&(o[l.toUpperCase()]=(d||"").replace(/^"|"$/g,""))}return{name:s.toUpperCase(),params:o,value:a}}function Qa(r,e){try{let t=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(t.formatToParts(new Date(e)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-e}catch{return null}}function Xa(r){let e=r.value.trim(),t=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(e);if(!t)return null;let[,a,s,i,o,c,l,d]=t;if(o==null||r.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(d)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+o,+c,+(l||0)))};let h=r.params.TZID;if(h){let p=Date.UTC(+a,+s-1,+i,+o,+c,+(l||0)),m=Qa(h,p);if(m!=null){let v=p-m,f=Qa(h,v);return{allDay:!1,date:new Date(p-(f??m))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+o,+c,+(l||0))}}function ai(r){let e=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(r.trim());if(!e)return null;let[,t,a,s,i,o,c]=e,l=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+o||0)*60+(+c||0))*1e3;return t==="-"?-l:l}function Ga(r){let e=[],t=null,a=0;for(let i of ei(r)){if(/^BEGIN:VEVENT/i.test(i)){t={},a=0;continue}if(!t)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){e.push(t),t=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let o=ti(i);o&&(o.name==="SUMMARY"?t.summary=Nt(o.value):o.name==="DESCRIPTION"?t.description=Nt(o.value):o.name==="LOCATION"?t.location=Nt(o.value):o.name==="DTSTART"?t.dtstart=Xa(o):o.name==="DTEND"?t.dtend=Xa(o):o.name==="DURATION"?t.duration=ai(o.value):o.name==="RRULE"?t.rrule=o.value.trim():o.name==="STATUS"?t.status=o.value.trim().toUpperCase():o.name==="RECURRENCE-ID"&&(t.recurrence=!0))}let s=[];for(let i of e){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let o=i.dtstart.date,c=i.dtend?i.dtend.date:i.duration!=null?new Date(o.getTime()+i.duration):null,l=i.dtstart.allDay,d={title:(i.summary||"").trim()||"Evento",date:y(o),start:l?"":M(o),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(l){if(c){let h=new Date(c.getFullYear(),c.getMonth(),c.getDate()-1);h>o&&(d.end_date=y(h))}}else c&&c>o&&(d.end=M(c),y(c)!==y(o)&&(d.end_date=y(c)));s.push(d)}return s}var w=(r,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,ye={"":{label:"Evento",icon:"calendar"},tarefa:{label:"Tarefa",icon:"list-checks",verb:"Concluir",done:"conclu\xEDda"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},as=["SU","MO","TU","WE","TH","FR","SA"],si=["D","S","T","Q","Q","S","S"],ii=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],ri=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],oi=r=>r.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),It=r=>(r||"?").trim().charAt(0).toUpperCase(),Za=r=>r<60?`${r} min`:`${Math.floor(r/60)} h${r%60?` ${r%60} min`:""}`;function es(r,e,t){let a=F(A(r),e);return t?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function ni(r,e){return r.days<-1?`venceu h\xE1 ${-r.days} dias`:r.days===-1?"venceu ontem":r.days===0?"\xE9 hoje":r.days===1?"amanh\xE3":r.days<=60?`em ${r.days} dias`:`em ${W(A(r.due),e)}`}function ts(r,e){let t=Object.fromEntries(String(r||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(o=>o.split("="))),a={freq:"uma",byday:[e.getDay()],interval:3,dur:"sempre",until:y($(e,30)),days:7},s=Number(t.INTERVAL||1);t.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):t.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:t.BYDAY?t.BYDAY.split(",").map(o=>as.indexOf(o.slice(-2))).filter(o=>o>=0):[e.getDay()]}):t.FREQ==="MONTHLY"?a.freq="mensal":t.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(t.UNTIL||"");if(i){let o=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:y(o)})}return a}var ss=r=>class extends r{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],targets:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(e){return e.gerencia?e.gerencia.pago?{at:null,by:""}:null:e.todo?e.todo.done?{at:null,by:""}:null:this._ix().checks[e.key]||null}_targetName(e){let t=this._ix().targets.find(a=>a.id===e);return t?t.name:(e||"").replace(/^mobile_app_/,"").replace(/_/g," ")}_gerenciaEvents(e,t){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=A(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:$(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<t&&s.end>e))}_billsList(){let e=this._ix(),t=S(new Date(this._now)),a=y(t),s=y($(t,8)),i=y($(t,-1)),o=[];for(let c of e.gerencia&&e.gerencia.contas||[]){let l=!c.pago,d=this._paidNow&&this._paidNow.has(c.id);(l?!(c.atrasada||c.vencimento<=s):!d&&!(c.vencimento>=i&&c.vencimento<=s))||o.push({id:c.id,source:"gerencia",title:c.descricao,value:c.valor,due:c.vencimento,paid:!!c.pago,overdue:l&&(c.atrasada||c.vencimento<a),sub:c.tipo==="fatura"?_(c.itens||0,"compra","compras"):c.categoria||"",c})}for(let c of e.bills||[]){let l=this._cal(c.cal);o.push({id:c.key,source:"cal",title:c.summary,value:c.value,due:c.due,paid:!!c.paid,overdue:c.overdue,sub:l?l.name:"",item:c})}return o.sort((c,l)=>Number(c.paid)-Number(l.paid)||c.due.localeCompare(l.due)||c.title.localeCompare(l.title,"pt-BR"))}_eventOfItem(e){return ct(e.cal,{start:e.start,end:e.end,summary:e.summary,description:e.description,location:e.location,uid:e.uid,recurrence_id:e.rid,rrule:e.rrule})}_openIndexItem(e){this._openEvent(this._eventOfItem(e))}async _check(e,t){try{await this.api.setCheck(e.key,!0,t),this._haptic("success");let a=ye[t];this._showToast(`${k(e.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _undoCheck(e,t){try{await this.api.setCheck(e.key,!1,t),this._haptic("light"),this._showToast(`${k(e.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(e.key,!0,t).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(e){if(e.source==="cal")return this._check(e.item,"conta");try{e.busy=!0,this.requestUpdate(),await this.api.payBill(e.id),(this._paidNow||(this._paidNow=new Set)).add(e.id),this._haptic("success"),this._showToast(`${k(e.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(e.id).catch(t=>this._showToast(t.message))})}catch(t){this._showToast(`O GerencIA n\xE3o deu baixa: ${t.message}`)}}async _unpay(e){if(e.source==="cal")return this._undoCheck(e.item,"conta");try{await this.api.unpayBill(e.id),this._showToast(`${k(e.title,26)}: volta para a pagar`)}catch(t){this._showToast(`N\xE3o consegui: ${t.message}`)}}async _testAlert(e){try{await this.api.testAlert(e),this._showToast(`Aviso de teste enviado para ${this._targetName(e)}. Toque em Tomei nele para conferir o bot\xE3o.`)}catch(t){this._showToast(`N\xE3o foi: ${t.message}`)}}_goAlerts(){this._go("/mais/avisos").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#avisos");e&&e.scrollIntoView({block:"start"})}))}_ring(e,t,a=null,s=null){let o=2*Math.PI*15,c=Math.max(0,Math.min(1,e||0));return n`<span class="ring2 ${t}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${c>0?ge`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(c*o).toFixed(2)} ${o.toFixed(2)}`}></circle>`:u}
        </svg>
        ${a!=null?n`<b>${a}</b>`:s||u}
      </span>`}_kindIcon(e){return e.kind?n`<span class="kind-ic">${w(ye[e.kind.kind].icon)}</span>`:u}_renderMedsPanel(){let e=this._ix().meds||[];if(!e.length)return u;let t=e.filter(o=>o.taken).length,a=e.filter(o=>o.state==="atrasado"),s=[];for(let o of e){let c=o.who||"",l=s.find(d=>O(d.who)===O(c));l||s.push(l={who:c,list:[],notify:o.notify}),l.list.push(o)}let i=t===e.length;return n`<div class="panel meds ${a.length?"alert":""} ${i?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${w("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${i?"Tudo tomado":`${t} de ${e.length} ${e.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(t/e.length,a.length?"bad":i?"ok":"acc",`${t}/${e.length}`)}
        </div>
        ${a.length?n`<div class="meds-alert" role="alert">${w("triangle-alert")}<span>${a.length===1?n`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${Za(a[0].late_min)}`:n`<b>${a.length} doses atrasadas</b>: ${a.map(o=>o.summary).join(", ")}`}</span></div>`:u}
        ${s.map(o=>n`${s.length>1||o.who?n`<div class="meds-who"><span class="avatar">${It(o.who)}</span><b>${o.who||"Sem pessoa"}</b><small>${o.list.filter(c=>c.taken).length} de ${o.list.length}</small>${o.notify?n`<span class="who-bell" title="Aviso no celular: ${this._targetName(o.notify)}">${w("bell-ring")}</span>`:u}</div>`:u}
            ${q(o.list,c=>c.key,c=>this._renderDose(c))}`)}
        ${this._alertsHint(e)}
      </div>`}_renderDose(e){let t=e.state,a=[e.dose,t==="tomado"?`tomou \xE0s ${M(new Date(e.taken.at))}${e.taken.by&&O(e.taken.by)!==O(e.who)?` \xB7 ${e.taken.by}`:""}`:t==="atrasado"?`atrasado ${Za(e.late_min)}`:t==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return n`<div class="dose ${t}">
        <button class="dose-main" @click=${()=>this._openIndexItem(e)}>
          <span class="dose-time">${e.time||"dia"}</span>
          <span class="dose-tx"><b>${e.summary}</b>${a?n`<small>${a}</small>`:u}</span>
        </button>
        ${t==="tomado"?n`<button class="dose-done" @click=${()=>this._undoCheck(e,"remedio")} aria-label="Desmarcar ${e.summary}">${w("check")}</button>`:n`<button class="dose-btn ${t}" @click=${()=>this._check(e,"remedio")}>Tomei</button>`}
      </div>`}_alertsHint(e){let t=this._app("alerts",null)||{};if(t.meds===!1)return n`<button class="panel-foot" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>Avisos no celular desligados</span>${w("chevron-right")}</button>`;let a=[...new Set(e.filter(c=>c.alert&&!c.notify&&c.who).map(c=>c.who))],s=(t.caregivers||[]).length,i=[...new Set(e.filter(c=>c.alert&&c.notify).map(c=>c.who))],o=a.length&&!s?`Sem celular para ${a.join(", ")}: escolha quem avisar`:i.length?`Avisa no celular de ${i.join(", ")}${s?" e de quem cuida":""}`:"Escolha os celulares que recebem os avisos";return n`<button class="panel-foot ${a.length&&!s?"warn":""}" @click=${()=>this._goAlerts()}>${w("bell-ring")}<span>${o}</span>${w("chevron-right")}</button>`}_renderBillsPanel(){let e=this._billsList();if(!e.length)return u;let t=new Date(this._now),a=e.filter(l=>!l.paid),s=a.filter(l=>l.overdue),i=a.reduce((l,d)=>l+(d.value||0),0),o=this._billsAll?e:e.slice(0,5),c=this._ix().gerencia||{};return n`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="overline">Contas a pagar</span>
          ${a.length?n`<span class="bills-sum"><b>${we(i,!1)}</b><small>${s.length?`${_(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:n`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${q(o,l=>l.id,l=>{let d=A(l.due),h=F(d,t)===0;return n`<div class="bill ${l.paid?"paid":l.overdue?"late":h?"today":""}">
            <button class="bill-main" @click=${()=>l.source==="gerencia"?this._openSheet("bill",{b:l}):this._openIndexItem(l.item)}>
              <span class="bill-due"><b>${d.getDate()}</b><small>${it[d.getMonth()]}</small></span>
              <span class="bill-tx"><b>${l.title}</b><small>${l.value!=null?n`<span class="bill-val">${we(l.value)}</span> · `:u}${[es(l.due,t,l.paid),l.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${l.paid?n`<button class="dose-done" @click=${()=>this._unpay(l)} aria-label="Desfazer pagamento de ${l.title}">${w("check")}</button>`:n`<button class="dose-btn ${l.overdue?"atrasado":h?"agora":""}" ?disabled=${l.busy} @click=${()=>this._pay(l)}>Paguei</button>`}
          </div>`})}
        ${e.length>5?n`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${w(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${e.length-5}`}</button>`:u}
        ${c.ligado?n`<div class="panel-foot plain">${w("wallet")}<span>${c.erro?`GerencIA: ${c.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:u}
      </div>`}_renderHomePanel(){let e=this._ix(),t=e.routines||[],a=(e.maint||[]).filter(o=>o.state!=="ok"),s=(e.maint||[]).length;if(!t.length&&!a.length)return s?n`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}<span>Manutenção da casa em dia · ${_(s,"item","itens")}</span>${w("chevron-right")}</button>`:u;let i=t.filter(o=>o.done).length;return n`<div class="panel chores" id="casa">
        ${t.length?n`<div class="chores-head"><span class="overline">Rotina da casa</span><small>${i} de ${t.length}</small></div>
              ${q(t,o=>o.key,o=>n`<div class="chore ${o.done?"done":""}">
                  <button class="chk ${o.done?"on":""}" @click=${()=>o.done?this._undoCheck(o,"rotina"):this._markDone(o,"rotina")} aria-label="${o.done?"Desmarcar":"Marcar"} ${o.summary}">${o.done?w("check"):u}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(o)}><b>${o.summary}</b><small>${[o.yesterday?"ficou de ontem":o.time,o.done?`feito${o.done.by?` por ${o.done.by}`:""}`:o.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
                  ${o.points>0&&this._scoreOn()?n`<span class="pts ${o.done?"got":""}">+${o.points}</span>`:u}
                </div>`)}`:u}
        ${a.length?n`<div class="chores-head ${t.length?"sub":""}"><span class="overline">Manutenção da casa</span></div>
              ${q(a,o=>o.key,o=>this._renderMaintRow(o))}`:u}
        ${s?n`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${w("wrench")}Todas as manutenções (${s})</button>`:u}
      </div>`}_renderMaintRow(e){let t=new Date(this._now),a=e.state==="vencida"?"bad":e.state==="perto"?"warn":"ok";return n`<div class="maint ${e.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(e)}>
          ${this._ring(e.progress,a,null,w("wrench"))}
          <span class="maint-tx"><b>${e.summary}</b><small>${ni(e,t)} · a cada ${_e(e.every)}${e.who?` \xB7 ${e.who}`:""}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</small></span>
        </button>
        ${e.canMove?n`<button class="dose-btn ${e.state==="vencida"?"atrasado":e.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(e)}>Feito</button>`:u}
      </div>`}_renderMaintSheet(){let e=this._ix().maint||[];return n`${this._sheetHead("Manuten\xE7\xE3o da casa")}
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
        <div class="maint-list">${e.length?q(e,t=>t.key,t=>this._renderMaintRow(t)):n`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${w("plus")}Nova manutenção</button></div>`}_renderKindFacts(e){let t=e.kind,a=new Date(this._now),s=this._checkOf(e),i=[];if(t.kind==="remedio"){t.dose&&i.push(["pill",`Dose: ${t.dose}`]),t.who&&i.push(["user-round",`Quem toma: ${t.who}`]);let l=this._ix().people.find(d=>O(d.name)===O(t.who));i.push(["bell-ring",t.alert?l&&l.notify?`Aviso no celular: ${this._targetName(l.notify)}`:"Aviso no celular: escolha o celular em Mais":"Sem aviso no celular"])}else t.kind==="conta"?t.value!=null&&i.push(["receipt",we(t.value)]):t.kind==="rotina"?(t.who&&i.push(["user-round",`Quem faz: ${t.who}`]),t.points>0&&i.push(["award",`${t.points} pontos para quem fizer`])):t.kind==="manutencao"&&(t.points>0&&i.push(["award",`${t.points} pontos para quem fizer`]),i.push(["repeat",`A cada ${_e(t.every)}, contando da \xFAltima vez`]),t.who&&i.push(["user-round",`Quem faz: ${t.who}`]),i.push(["bell-ring",`Aparece na Agora ${_(t.warn,"dia","dias")} antes`]),t.history&&t.history.length&&i.push(["check",`Feito em ${t.history.slice(0,4).map(l=>W(A(l),a)).join(", ")}`]));let o=ye[t.kind],c=u;if(t.kind==="manutencao"){let l=(this._ix().maint||[]).find(d=>d.cal===e.cal&&d.uid===e.uid);l&&l.canMove&&(c=n`<button class="btn primary kind-act" @click=${()=>this._maintDone(l)}>${w("check")}Feito hoje</button>`)}else if(e.start<$(S(a),2)){let l={key:e.key,summary:e.summary};c=s?n`<div class="kind-state">${w("circle-check")}<span>${I(o.done)}${s.at?` ${F(new Date(s.at),a)===0?"hoje":W(new Date(s.at),a)} \xE0s ${M(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(l,t.kind)}>Desfazer</button></div>`:t.kind==="rotina"||t.kind==="manutencao"?n`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...l,points:t.points||0},t.kind))}>${w("check")}${o.verb}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`:n`<button class="btn primary kind-act" @click=${()=>this._check(l,t.kind).then(()=>this._closeSheet())}>${w("check")}${o.verb}</button>`}return n`${i.map(([l,d])=>n`<div class="fact">${w(l)}<span>${d}</span></div>`)}
        ${t.notes?n`<div class="fact notes">${w("file-text")}<span>${t.notes}</span></div>`:u}
        ${c}`}_renderBillSheet(){let e=this._form.b,t=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===e.id)||e.c,a=new Date(this._now),s=A(t.vencimento);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.descricao}</h3><p class="ev-cal">GerencIA · <b>${es(t.vencimento,a,t.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${w("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${w("receipt")}<span><b>${we(t.valor)}</b>${t.tipo==="fatura"?` \xB7 ${_(t.itens||0,"compra","compras")} na fatura`:t.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${w("calendar")}<span>${F(s,a)<0?"Venceu":"Vence"} ${H(s,a,{cap:!1})}</span></div>
          ${t.categoria?n`<div class="fact">${w("layers")}<span>${t.categoria}</span></div>`:u}
          ${t.conta?n`<div class="fact">${w("wallet")}<span>${t.conta}</span></div>`:u}
        </div>
        <p class="sheet-note">${w("info")} ${t.pago?"J\xE1 est\xE1 paga no GerencIA.":t.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${t.pago?n`<button class="btn outline" @click=${()=>this._unpay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("undo-2")}Desfazer pagamento</button>`:n`<button class="btn primary" @click=${()=>this._pay({...e,id:t.id,title:t.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${w("check")}Paguei</button>`}
        </div>`}_kindCal(e){let t=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[e];return(a&&t.find(i=>a.test(i.name)&&i.canUpdate)||t.find(i=>i.id===this._defaultCal())||t[0]||{}).id||null}_openKindForm({kind:e="remedio",ev:t=null,copy:a=!1,date:s=null}={}){let i=this._writable(),o=this._ix().gerencia||{};if(!i.length&&!(e==="conta"&&o.ligado)&&!(t&&!a)){this._openSheet("nocal",{});return}let c=S(new Date),l=s?S(s):c,d={mode:"add",kind:e,cal:this._kindCal(e),title:"",date:y(l),times:e==="rotina"?["19:00"]:["08:00"],allDay:e!=="remedio",...ts(e==="conta"?"":"FREQ=DAILY",l),dose:"",who:"",whoOther:!1,alert:!0,value:"",repeat:"mensal",dest:o.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},last:y(c),warn:7,history:[],points:this._scoreOn()&&(e==="rotina"||e==="manutencao")?e==="rotina"?10:30:0,notes:"",location:""};if(t){let h=t.kind,p=ts(t.rrule,t.start);d={...d,...p,mode:a?"add":"edit",kind:h.kind,cal:a?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._kindCal(h.kind):t.cal,origCal:t.cal,uid:t.uid,rid:a?null:t.rid,title:t.summary,date:y(t.start),times:t.allDay?["09:00"]:[M(t.start)],allDay:t.allDay,dose:h.dose||"",who:h.who||"",alert:h.alert!==!1,value:h.value!=null?String(h.value.toFixed(2)).replace(".",","):"",repeat:p.freq==="mensal"?"mensal":p.freq==="anual"?"anual":"nao",dest:"cal",every:h.every||d.every,warn:h.warn??7,history:h.history||[],last:h.history&&h.history[0]||d.last,points:h.points||0,notes:h.notes||"",location:t.location||""}}this._openSheet("form",d),d.mode==="add"&&this.updateComplete.then(()=>{let h=this.renderRoot.querySelector(".sheet .ev-title-input");h&&h.focus()})}_kindRrule(e,t,a){let s;if(e.freq==="diario")s="FREQ=DAILY";else if(e.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(e.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(e.interval)||3))}`;else if(e.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...e.byday].sort().map(i=>as[i]).join(",")}`;else if(e.freq==="mensal")s="FREQ=MONTHLY";else return null;if(e.dur!=="sempre"){let i=e.dur==="ate"?A(e.until):$(a,Math.max(1,Number(e.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=t?`;UNTIL=${y(i).replace(/-/g,"")}`:`;UNTIL=${oi(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(e,{keepRrule:t=!0}={}){let a=(e.title||"").trim();if(!a)throw new Error(e.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:e.kind,notes:e.notes};if(e.kind==="remedio")Object.assign(s,{dose:e.dose,who:e.who,alert:e.alert});else if(e.kind==="rotina")Object.assign(s,{who:e.who,points:Math.max(0,Math.round(Number(e.points)||0))});else if(e.kind==="conta"){if(s.value=lt(e.value),!s.value)throw new Error("Coloque o valor")}else{if(!(e.every&&e.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:e.who,every:e.every,warn:e.warn,history:e.mode==="edit"?e.history:e.last?[e.last]:[],points:Math.max(0,Math.round(Number(e.points)||0))})}let i={summary:a,description:Wa(s)};if((e.location||"").trim()&&(i.location=e.location.trim()),e.kind==="manutencao"){let f=e.mode==="edit"?A(e.date):Rt(A(e.last||y(new Date)),e.every);return[{...i,start:y(f),end:y($(f,1))}]}if(e.kind==="conta"){let f=A(e.date),b={...i,start:y(f),end:y($(f,1))};return t&&e.repeat!=="nao"&&(b.rrule=e.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[b]}let o=A(e.date);if(e.freq==="semana"){if(!e.byday.length)throw new Error("Escolha os dias da semana");if(e.mode==="add")for(let f=0;f<7&&!e.byday.includes(o.getDay());f++)o=$(o,1)}let c=e.kind==="rotina"&&e.allDay,l=t?this._kindRrule(e,c,o):null,d=l?{rrule:l}:{};if(c)return[{...i,start:y(o),end:y($(o,1)),...d}];let h=[...new Set((e.times||[]).filter(f=>/^\d{2}:\d{2}$/.test(f)))].sort();if(!h.length)throw new Error("Escolha o hor\xE1rio");let p=e.kind==="remedio"?15:30,m=f=>{if(e.freq==="alternado")return $(f,2);if(e.freq==="intervalo")return $(f,Math.max(2,Number(e.interval)||3));if(e.freq==="mensal")return new Date(f.getFullYear(),f.getMonth()+1,f.getDate());if(e.freq==="semana"){let b=$(f,1);for(let D=0;D<7&&!e.byday.includes(b.getDay());D++)b=$(b,1);return b}return $(f,1)},v=new Date;return h.map(f=>{let[b,D]=f.split(":").map(Number),R=o;e.mode==="add"&&e.freq!=="uma"&&new Date(R.getFullYear(),R.getMonth(),R.getDate(),b,D)<v&&(R=m(R));let K=new Date(R.getFullYear(),R.getMonth(),R.getDate(),b,D);return{...i,start:Y(K),end:Y(new Date(K.getTime()+p*6e4)),...d}})}async _saveKindForm(){let e=this._form;if(e.kind==="tarefa")return this._saveTodoForm();if(e.kind==="conta"&&e.dest==="gerencia"&&e.mode==="add"){let o=lt(e.value);if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!o)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:e.title.trim(),valor:o,vencimento:e.date,repete:e.repeat,categoria:e.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(c){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${c.message}`)}return}let t;try{t=this._kindEvents(e)}catch(o){this._showToast(o.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=t[0];if(e.mode==="edit"&&e.rid){this._openSheet("scope",{action:"edit",...e,event:s});return}this._setForm({saving:!0});let i=ye[e.kind].label;try{if(e.mode==="add"){for(let o of t)await this.api.createEvent(e.cal,o);this._done(t.length>1?`${i} criado: ${t.length} hor\xE1rios em ${k(a.name,20)}`:`${i} criado em ${k(a.name,24)}`,e.cal,s.start)}else e.cal!==e.origCal?(await this.api.createEvent(e.cal,s),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`${i} movido para ${k(a.name,24)}`,e.cal,s.start)):(await this.api.updateEvent(e.cal,e.uid,s),this._done(`${i} salvo`,e.cal,s.start))}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${o.message}`)}}_renderModelChips(e){let t=this._form;return n`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries(ye).filter(([a])=>a!=="tarefa"||this._todos().lists.length).map(([a,s])=>n`<button class="model ${e===a?"on":""}" role="radio" aria-checked=${e===a?"true":"false"} @click=${()=>{if(e===a)return;let i=t.date?A(t.date):null;a==="tarefa"?this._openTodoForm({date:i}):a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${w(s.icon)}<span>${s.label}</span></button>`)}
      </div>`}_dateField(e,t,a,s,{quick:i=!0}={}){let o=new Date,c=S(o),l=i?[["Hoje",y(c)],["Amanh\xE3",y($(c,1))]]:[],d=l.some(([,h])=>h===t);return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${l.map(([h,p])=>n`<button class="pick ${t===p?"on":""}" @click=${()=>a(p)}>${h}</button>`)}
          <button class="pick ${d?"":"on"}" @click=${()=>{let h=this.renderRoot.querySelector(`#${s}`);try{h.showPicker()}catch{h.focus(),h.click()}}}>${w("calendar")}<span>${!d&&t?I(H(A(t),o,{long:!1})):"Outra data"}</span>
            <input id=${s} class="hidden-input" type="date" tabindex="-1" .value=${t} @change=${h=>h.target.value&&a(h.target.value)} />
          </button>
        </div>
      </div>`}_whoField(e){let t=this._form,a=[...new Set([...(this._ix().people||[]).map(i=>i.name),...t.who?[t.who]:[]])],s=a.some(i=>i===t.who);return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">
          ${a.map(i=>n`<button class="pick person ${t.who===i&&!t.whoOther?"on":""}" @click=${()=>this._setForm({who:t.who===i?"":i,whoOther:!1})}><span class="avatar sm">${It(i)}</span><span>${i}</span></button>`)}
          <button class="pick ghost ${t.whoOther?"on":""}" @click=${()=>this._setForm({whoOther:!0,who:s?"":t.who})}>${w("plus")}<span>Outra pessoa</span></button>
        </div>
        ${t.whoOther?n`<input type="text" class="who-input" .value=${t.who} placeholder="Nome (pode ser o pet também)" @input=${i=>this._setForm({who:i.target.value})} />`:u}
      </div>`}_freqField(e){let t=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...t.kind==="rotina"?[["mensal","Todo m\xEAs"]]:[],["uma","S\xF3 uma vez"]];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>n`<button class="pick ${t.freq===s?"on":""}" @click=${()=>this._setForm({freq:s})}>${s!=="uma"?w("repeat"):u}<span>${i}</span></button>`)}</div>
        ${t.freq==="semana"?n`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(s=>{let i=t.byday.includes(s);return n`<button class="wdp ${i?"on":""}" aria-pressed=${i?"true":"false"} aria-label=${be[s]} @click=${()=>this._setForm({byday:i?t.byday.filter(o=>o!==s):[...t.byday,s]})}>${si[s]}</button>`})}
            </div>`:u}
        ${t.freq==="intervalo"?n`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(t.interval)} @input=${s=>this._setForm({interval:s.target.value})} /><span class="tl">dias</span></div>`:u}
      </div>`}_pointsField(){let e=this._form,t=Number(e.points)||0;return n`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row">
          ${[0,5,10,20,30,50].map(a=>n`<button class="pick ${t===a?"on":""}" @click=${()=>this._setForm({points:a})}>${a?`+${a}`:"Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(t)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${t>0&&!this._scoreOn()?n`<span class="field-hint">${w("trophy")}<span>Os pontos contam quando o placar estiver ligado, na aba <b>Recompensas</b>.</span></span>`:u}
      </div>`}_durField(e){let t=this._form;if(t.freq==="uma")return u;let a=t.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return n`<div class="field">
        <span class="flabel">${e}</span>
        <div class="chip-row">${a.map(([s,i])=>n`<button class="pick ${t.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${t.dur==="dias"?n`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(t.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:u}
        ${t.dur==="ate"?n`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${t.until} min=${t.date} @change=${s=>s.target.value&&this._setForm({until:s.target.value})} /></div>`:u}
      </div>`}_calField(){let e=this._form,t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(s=>s.id===e.cal):t.filter(s=>s.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t;return a.length<=1?u:n`<div class="field">
        <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>n`<button class="pick list ${e.cal===s.id?"on":""}" style=${z(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${k(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let e=this._form;if(e.kind==="tarefa")return this._renderTodoForm();let t=e.kind,a=ye[t],s=new Date,i=this._ix().gerencia||{},o=t==="conta"&&e.dest==="gerencia"&&e.mode==="add",c={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[t],l=n`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${e.notes} placeholder=${t==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${h=>this._setForm({notes:h.target.value})}></textarea></label>`,d;if(t==="remedio"){let h=(this._ix().people||[]).find(m=>O(m.name)===O(e.who)),p=e.mode==="add";d=n`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${e.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${m=>this._setForm({dose:m.target.value})} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${p?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${p?n`<div class="chip-row" style="margin-bottom:10px">${ii.map(([m,v])=>n`<button class="pick ${e.times.join()===v.join()?"on":""}" @click=${()=>this._setForm({times:[...v]})}>${m}</button>`)}</div>`:u}
            <div class="times">
              ${e.times.map((m,v)=>n`<span class="time-pill"><input type="time" .value=${m} aria-label="Horário ${v+1}" @change=${f=>f.target.value&&this._setForm({times:e.times.map((b,D)=>D===v?f.target.value:b)})} />${e.times.length>1?n`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:e.times.filter((f,b)=>b!==v)})}>${w("x")}</button>`:u}</span>`)}
              ${p&&e.times.length<8?n`<button class="pick ghost" @click=${()=>this._setForm({times:[...e.times,"12:00"]})}>${w("plus")}<span>Horário</span></button>`:u}
            </div>
          </div>
          ${this._freqField("Frequ\xEAncia")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,m=>this._setForm({date:m}),"kf-date")}
          ${this._durField("Por quanto tempo")}
          ${this._calField()}
          <div class="row switch-row">
            <div class="grow"><div class="label">Aviso no celular</div><div class="hint">${e.alert?h&&h.notify?`Na hora e de novo se atrasar, no ${this._targetName(h.notify)}.`:e.who?n`Escolha o celular de ${e.who} em <button class="text-btn inline" @click=${()=>(this._closeSheet(),this._goAlerts())}>Mais › Avisos</button>.`:"Escolha quem toma.":"Sem aviso para este rem\xE9dio."}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${e.alert} @change=${m=>this._setForm({alert:m.target.checked})} aria-label="Aviso no celular" /><span class="track"></span></label>
          </div>
          ${l}`}else if(t==="conta")d=n`
          <label class="field"><span class="flabel">Valor</span><span class="money"><span>R$</span><input type="text" inputmode="decimal" .value=${e.value} placeholder="0,00" @input=${h=>this._setForm({value:h.target.value})} /></span></label>
          ${this._dateField(e.repeat==="nao"?"Vence":"Primeiro vencimento",e.date,h=>this._setForm({date:h}),"kf-date")}
          <div class="field"><span class="flabel">Repete</span><div class="chip-row">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([h,p])=>n`<button class="pick ${e.repeat===h?"on":""}" @click=${()=>this._setForm({repeat:h})}>${h!=="nao"?w("repeat"):u}<span>${p}</span></button>`)}</div></div>
          ${i.ligado&&e.mode==="add"?n`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${e.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${w("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${e.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${w("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${w("info")}<span>${e.dest==="gerencia"?"Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio, com o Paguei daqui."}</span></span>
              </div>`:u}
          ${o&&(i.categorias||[]).length?n`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${h=>this._setForm({categoria:h.target.value})}><option value="">Sem categoria</option>${i.categorias.map(h=>n`<option value=${h.id} ?selected=${e.categoria===h.id}>${h.nome}</option>`)}</select></label>`:u}
          ${o?u:n`${this._calField()}${l}`}`;else if(t==="rotina")d=n`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${e.allDay?"on":""}" @click=${()=>this._setForm({allDay:!0})}>Qualquer hora</button>
              <button class="pick ${e.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1})}>${w("clock")}<span>Num horário</span></button>
              ${e.allDay?u:n`<input type="time" class="inline-time" .value=${e.times[0]||"19:00"} @change=${h=>h.target.value&&this._setForm({times:[h.target.value]})} aria-label="Horário" />`}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(e.mode==="add"?"Come\xE7a":"Data",e.date,h=>this._setForm({date:h}),"kf-date")}
          ${this._durField("At\xE9 quando")}
          ${this._calField()}
          ${l}`;else{let h=e.mode==="edit"?A(e.date):Rt(A(e.last||y(s)),e.every);d=n`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row" style="margin-bottom:10px">${ri.map(p=>n`<button class="pick ${e.every.n===p.n&&e.every.unit===p.unit?"on":""}" @click=${()=>this._setForm({every:{...p}})}>${_e(p)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(e.every.n)} @input=${p=>this._setForm({every:{...e.every,n:Math.max(1,Number(p.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(nt).map(p=>n`<button class=${e.every.unit===p?"on":""} @click=${()=>this._setForm({every:{...e.every,unit:p}})}>${p}</button>`)}</div>
            </div>
            <span class="field-hint">${w("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${_e(e.every)}.</span></span>
          </div>
          ${e.mode==="add"?this._dateField("Feito pela \xFAltima vez",e.last,p=>this._setForm({last:p}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",e.date,p=>this._setForm({date:p}),"kf-date",{quick:!1})}
          <p class="next-line">${w("calendar-check")}<span>Próxima: <b>${I(H(h,s,{long:!1}))}</b>${F(h,s)>1?` \xB7 em ${_(F(h,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na Agora</span><div class="chip-row">${[3,7,15,30].map(p=>n`<button class="pick ${e.warn===p?"on":""}" @click=${()=>this._setForm({warn:p})}>${p} dias antes</button>`)}</div></div>
          ${this._calField()}
          ${l}`}return n`
        ${this._sheetHead(e.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${e.mode==="add"?this._renderModelChips(t):u}
        <label class="field">
          <span class="flabel">${c[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder=${c[1]} @input=${h=>this._setForm({title:h.target.value})}></textarea>
        </label>
        ${d}
        ${e.rid?n`<div class="field-hint">${w("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveKindForm()}>${e.saving?"Salvando\u2026":e.mode==="add"?o?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let e=this._ix(),t=this._app("alerts",null)||{},a=t.meds!==!1,s=t.late==null?30:t.late,i=t.caregivers||[],o=e.people||[],c=e.targets||[],l=this._app("people",null)||{},d=p=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...p}}),h=(p,m)=>{let v={...l};m?v[p]={notify:m}:delete v[p],this._saveAppPrefs({people:v})};return n`<div class="panel" id="avisos">
        <div class="overline">Avisos de remédio no celular</div>
        <p class="panel-lead">Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.</p>
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${p=>d({meds:p.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?n`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${o.length?o.map(p=>{let m=l[p.name]&&l[p.name].notify;return n`<div class="person-row">
                        <span class="avatar">${It(p.name)}</span>
                        <span class="grow"><b>${p.name}</b><small>${p.person?"Pessoa do Home Assistant":"S\xF3 no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${p.name}" @change=${v=>h(p.name,v.target.value)}>
                          <option value="" ?selected=${!m}>${p.auto?`Autom\xE1tico: ${this._targetName(p.auto)}`:"Sem celular"}</option>
                          ${c.map(v=>n`<option value=${v.id} ?selected=${m===v.id}>${v.name}</option>`)}
                        </select>
                        ${p.notify?n`<button class="icon-btn" aria-label="Testar aviso para ${p.name}" @click=${()=>this._testAlert(p.notify)}>${w("bell-ring")}</button>`:u}
                      </div>`}):n`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${c.length?u:n`<span class="field-hint">${w("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>`}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([p,m])=>n`<button class="pick ${s===p?"on":""}" @click=${()=>d({late:p})}>${m}</button>`)}</div>
              </div>
              ${c.length?n`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${c.map(p=>{let m=i.includes(p.id);return n`<button class="pick ${m?"on":""}" aria-pressed=${m?"true":"false"} @click=${()=>d({caregivers:m?i.filter(v=>v!==p.id):[...i,p.id]})}>${w("smartphone")}<span>${p.name}</span></button>`})}</div>
                    <span class="field-hint">${w("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`:u}`:u}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`}_renderGerenciaPanel(){let e=this._ix().gerencia||{},t=(e.contas||[]).filter(s=>!s.pago).length,a=e.ligado?e.erro?"warn":"ok":"off";return n`<div class="panel" id="gerencia">
        <div class="overline">Contas do GerencIA</div>
        <div class="ai-state ${a}"><span class="dot"></span><div>
          <b>${e.ligado?e.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${e.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${e.ligado?e.erro||`${_(t,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${e.ligado?n`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${s=>this._saveAppPrefs({gerencia_hidden:s.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:u}
      </div>`}};var Ht={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Pt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],li=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var is=r=>{let[e,t,a]=String(r).slice(0,10).split("-").map(Number);return new Date(e,t-1,a)};function qt(r,e,t){let a=typeof r=="string"?is(r):r,s=typeof e=="string"?is(e):e,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return t==="mes"?`${li[a.getMonth()].replace(/^./,o=>o.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Pt[i.getMonth()]}`:`${a.getDate()} ${Pt[a.getMonth()]} a ${i.getDate()} ${Pt[i.getMonth()]}`}var T=(r,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,rs=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],X=r=>(r||"?").trim().charAt(0).toUpperCase(),ci={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},Lt={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},pt={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},di={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},pi=[["Toalha molhada na cama",5],["Lou\xE7a suja na pia",5],["Roupa no ch\xE3o",3],["Luz acesa sem ningu\xE9m",2]],os=[2,3,5,10,20],ns={semana:"nesta semana",quinzena:"nesta quinzena",mes:"neste m\xEAs"},ls=()=>Math.random().toString(36).slice(2,10).padEnd(8,"0"),cs=r=>class extends r{_score(){return this._ix().score||null}_scoreOn(){let e=this._score();return!!(e&&e.enabled&&e.participants.length)}_participant(e){let t=this._score();if(!t||!e)return"";let a=O(e);return t.participants.find(s=>O(s)===a||O(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(e){let t=this._score(),a=t?Math.max(0,t.participants.findIndex(s=>O(s)===O(e))):0;return j(rs[a%rs.length])}_me(){return this._user&&this._user.person||""}_withWho(e,t,a){if(!this._scoreOn()||!(e>0))return a("");let s=this._participant(this._me());return s?a(s):this._openSheet("who",{points:e,title:t,run:a})}_doneToast(e,t,a,{reassignKey:s,undo:i}){let o=this._scoreOn()&&t&&a>0?this._score().participants.filter(l=>O(l)!==O(t)):[],c=t&&a>0?`Feito por ${t} \xB7 +${a}`:`${k(e.summary,26)}: feito`;if(o.length===1&&s){let l=o[0];this._showToast(c,{label:`Foi ${l}`,run:()=>this.api.scoreReassign(s,l).then(()=>this._showToast(`Pontos para ${l}`)).catch(d=>this._showToast(d.message))})}else o.length>1&&s?this._showToast(c,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:e.summary,run:l=>this.api.scoreReassign(s,l).then(()=>this._closeSheet())})}):this._showToast(c,i?{label:"Desfazer",run:i}:null)}_markDone(e,t){return this._withWho(e.points||0,e.summary,async a=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(e.key,!0,t,a),this._haptic("success"),this._doneToast(e,a,e.points||0,{reassignKey:e.key,undo:()=>this.api.setCheck(e.key,!1,t).catch(s=>this._showToast(s.message))})}catch(s){this._showToast(`N\xE3o consegui marcar: ${s.message}`)}})}_maintDone(e){return this._withWho(e.points||0,e.summary,async t=>{this._sheet&&await this._closeSheet();try{let a=await this.api.maintDone(e.cal,e.uid,t);this._haptic("success");let s=a&&a.next?`Pr\xF3xima em ${W(A(a.next),new Date(this._now))}`:"";a&&a.key?this._doneToast(e,t,e.points,{reassignKey:a.key}):this._showToast(s?`Feito. ${s}`:"Feito",a&&a.undo?{label:"Desfazer",run:()=>this.api.maintUndo(e.cal,e.uid).catch(i=>this._showToast(i.message))}:null)}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}})}_renderWhoSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${k(e.title||"",40)}${e.points?n` · <b>+${e.points} pontos</b>`:u}</p>
        <div class="who-grid">
          ${t.participants.map(a=>n`<button class="who-btn" style=${z(this._pColor(a),this._dark)} @click=${()=>e.run(a)}>
              <span class="avatar xl">${X(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>e.run("")}>Ninguém do placar (sem pontos)</button>`}_renderRewards(){let e=this._score();if(!e||!e.enabled||!e.participants.length)return this._renderRewardsSetup();let t=new Date(this._now),a=e.current,s=F(A(a.end),t),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${_(s,"dia","dias")}`,o=e.leader,c=e.rows.reduce((l,d)=>l+d.points,0);return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${I(ci[e.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(e)}
        <div class="panel board">
          ${e.rows.length===2?this._renderDuel(e,c):this._renderRanking(e)}
          <div class="board-foot">${o?n`${T("crown")}<span><b>${o}</b> na frente${e.rows[1]?` por ${_(e.rows[0].points-e.rows[1].points,"ponto","pontos")}`:""}</span>`:n`<span>${c?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(e)}
        ${e.manual?this._renderToScore():u}
        ${this._renderDemerits(e)}
        ${this._renderFeed(e)}
        ${this._renderHistory(e)}
      </section>`}_renderDuel(e,t){let[a,s]=e.participants.map(d=>e.rows.find(h=>h.name===d)||{name:d,points:0,count:0,demerits:0}),i=Math.min(0,a.points,s.points),o=a.points-i+(s.points-i),c=o?(a.points-i)/o:.5,l=(d,h)=>n`<div class="duel-side ${h?"right":""} ${e.leader===d.name?"lead":""}" style=${z(this._pColor(d.name),this._dark)}>
        <span class="avatar xl">${X(d.name)}${e.leader===d.name?n`<span class="crown">${T("crown")}</span>`:u}</span>
        <b class="duel-name">${d.name}</b>
        <span class="duel-pts">${d.points}</span>
        <small>${_(d.count,"tarefa","tarefas")}${d.demerits?n` · <span class="neg-text">${_(d.demerits,"dem\xE9rito","dem\xE9ritos")}</span>`:u}</small>
      </div>`;return n`<div class="duel">
          ${l(a,!1)}
          <span class="duel-x">×</span>
          ${l(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(c*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(e){let t=Math.max(1,...e.rows.map(s=>s.points)),a=s=>Math.max(0,s.points/t*100).toFixed(1);return n`<div class="ranking">
        ${e.rows.map((s,i)=>n`<div class="rank-row ${e.leader===s.name?"lead":""}" style=${z(this._pColor(s.name),this._dark)}>
            <span class="rank-n">${i+1}</span><span class="avatar">${X(s.name)}</span>
            <span class="rank-main"><b>${s.name}</b><span class="rank-bar"><i style="width:${a(s)}%"></i></span></span>
            <span class="rank-pts">${s.points}</span>
          </div>`)}
      </div>`}_renderLastResult(e){let t=e.history&&e.history[0];if(!t||t.delivered)return u;let a=new Date(this._now);if(F(a,A(t.end))>14)return u;let s=Object.values(t.totals||{}).join(" \xD7 ");return n`<div class="result-card ${t.winner?"":"tie"}" style=${t.winner?z(this._pColor(t.winner),this._dark):""}>
        <span class="result-ic">${T("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${di[e.period]} · ${qt(t.start,t.end,e.period)}</span>
          <b>${t.winner?`${t.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${t.reward?n`<small>${t.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${t.reward}</small>`:u}
        </div>
        ${t.winner&&t.reward?n`<button class="dose-btn agora" @click=${()=>this._setDelivered(t.key,!0)}>Entregue</button>`:n`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(t.key,!0)}>${T("x")}</button>`}
      </div>`}_renderPrize(e){let t=e.current,a=e.next,s=l=>Object.keys(l.prizes||{}).length>0,i=(l,d)=>l.prizes&&l.prizes[d]||l.reward||"",o=s(t)||!!t.reward,c=s(a)||!!a.reward;return n`<div class="panel prize ${o?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${T("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">${s(t)?"Pr\xEAmios":"Pr\xEAmio"} ${Lt[e.period]}</span>
            ${s(t)?u:t.reward?n`<b>${t.reward}</b>`:n`<span class="prize-empty">Ainda sem prêmio. Pode ser um para todos ou um para cada pessoa.</span>`}
          </div>
          <button class="text-btn" @click=${()=>this._openPrize("current")}>${o?"Mudar":"Definir"}</button>
        </div>
        ${s(t)?n`<div class="prize-people">
              ${e.participants.map(l=>{let d=i(t,l);return n`<div class="prize-person ${e.leader===l?"lead":""}" style=${z(this._pColor(l),this._dark)}>
                  <span class="avatar sm2">${X(l)}</span>
                  <span class="pp-tx"><small>Se ${l} vencer</small>${d?n`<b>${d}</b>`:n`<i>ainda livre</i>`}</span>
                  ${e.leader===l?n`<span class="pp-lead">${T("crown")}</span>`:u}
                </div>`})}
            </div>`:u}
        <div class="prize-next">
          <span>${T("gift")}<span>${s(a)?n`${I(pt[e.period].replace(/^d[ao] /,""))}: <b>${e.participants.map(l=>`${l}: ${i(a,l)||"livre"}`).join(" \xB7 ")}</b>`:a.reward?n`Prêmio ${pt[e.period]}: <b>${a.reward}</b>`:`Pr\xEAmio ${pt[e.period]} ainda livre`}</span></span>
          <button class="text-btn" @click=${()=>this._openPrize("next")}>${c?"Mudar":"Definir"}</button>
        </div>
      </div>`}_openPrize(e){let t=this._score(),a=e==="next"?t.next:t.current,s=a.prizes||{},i=Object.keys(s).length>0;this._openSheet("prize",{which:e,key:a.key,label:a.label,mode:i?"cada":"todos",shared:a.reward||"",per:Object.fromEntries(t.participants.map(o=>[o,s[o]||(i?"":a.reward||"")]))})}async _savePrize(){let e=this._form,t=e.mode==="todos"?(e.shared||"").trim():"",a=e.mode==="cada"?Object.fromEntries(Object.entries(e.per||{}).map(([s,i])=>[s,(i||"").trim()]).filter(([,s])=>s)):{};await this._closeSheet();try{await this.api.scorePrizes(e.key,t,a),this._haptic("success"),this._showToast(t||Object.keys(a).length?Object.keys(a).length?"Pr\xEAmios salvos":"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(s){this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_renderPrizeSheet(){let e=this._form,t=this._score(),a=["Ex.: jantar fora","Ex.: massagem","Ex.: escolher o filme","Ex.: folga da lou\xE7a"];return n`${this._sheetHead(`Pr\xEAmio ${e.which==="next"?pt[t.period]:Lt[t.period]}`)}
        <p class="sheet-note top">${I(e.label||"")}</p>
        <div class="seg" role="radiogroup" aria-label="Tipo de prêmio">
          ${[["todos","O mesmo para todos"],["cada","Um para cada pessoa"]].map(([s,i])=>n`<button class=${e.mode===s?"on":""} role="radio" aria-checked=${e.mode===s?"true":"false"} @click=${()=>this._setForm({mode:s})}>${i}</button>`)}
        </div>
        ${e.mode==="todos"?n`<label class="field" style="margin-top:14px">
              <span class="flabel">Quem fizer mais pontos ganha</span>
              <input type="text" .value=${e.shared||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @input=${s=>this._setForm({shared:s.target.value})} />
            </label>`:n`${t.participants.map((s,i)=>n`<label class="field" style=${i?"":"margin-top:14px"}>
                  <span class="flabel">Se ${s} vencer</span>
                  <input type="text" .value=${e.per&&e.per[s]||""} placeholder=${a[i%a.length]} maxlength="200" @input=${o=>this._setForm({per:{...this._form.per,[s]:o.target.value}})} />
                </label>`)}
              <span class="field-hint">${T("info")}<span>Quem vencer ganha o seu prêmio. Empate: ninguém leva.</span></span>`}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" @click=${()=>this._savePrize()}>Salvar</button>
        </div>`}async _setDelivered(e,t){try{await this.api.scoreDelivered(e,t),t&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderToScore(){let e=this._ix(),t=new Date(this._now),a=(e.routines||[]).filter(l=>l.points>0),s=(e.maint||[]).filter(l=>l.points>0&&l.state!=="ok"),i=(e.todos&&e.todos.items||[]).filter(l=>l.points>0&&(l.undated||(l.done?l.days===0:l.overdue||l.days===0))),o=a.filter(l=>l.done).length+i.filter(l=>l.done).length,c=a.length+i.length;return n`<div class="panel chores score-today">
        <div class="chores-head"><span class="overline">Para pontuar hoje</span>${c?n`<small>${o} de ${c}</small>`:u}</div>
        ${q(a,l=>l.key,l=>{let d=l.done&&l.done.by;return n`<div class="chore ${l.done?"done":""}">
            <button class="chk ${l.done?"on":""}" @click=${()=>l.done?this._undoCheck(l,"rotina"):this._markDone(l,"rotina")} aria-label="${l.done?"Desmarcar":"Marcar"} ${l.summary}">${l.done?T("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(l)}><b>${l.summary}</b><small>${[l.yesterday?"ficou de ontem":l.time,l.done?`feito por ${d||"algu\xE9m"}`:l.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
            <span class="pts ${l.done?"got":""}" style=${d?z(this._pColor(d),this._dark):""}>+${l.points}</span>
          </div>`})}
        ${q(i,l=>l.key,l=>n`<div class="chore ${l.done?"done":""}">
            <button class="chk sq ${l.done?"on":""}" @click=${()=>this._todoDone(l,!l.done)} aria-label="${l.done?"Reabrir":"Concluir"} ${l.summary}">${l.done?T("check"):u}</button>
            <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:l.key})}><b>${l.summary}</b><small>${l.undated?"sem prazo":l.overdue?"atrasada":"hoje"} · ${l.listName} · ResolvIA</small></button>
            <span class="pts ${l.done?"got":""}">+${l.points}</span>
          </div>`)}
        ${q(s,l=>l.key,l=>n`<div class="chore maint-score">
            <span class="chk wrench ${l.state}">${T("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(l)}><b>${l.summary}</b><small>${l.days<0?`venceu h\xE1 ${_(-l.days,"dia","dias")}`:l.days===0?"\xE9 hoje":`em ${_(l.days,"dia","dias")}`} · manutenção</small></button>
            <button class="pts btn-pts" @click=${()=>this._maintDone(l)}>+${l.points}</button>
          </div>`)}
        ${!a.length&&!s.length&&!i.length?n`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>, ou a uma tarefa no ResolvIA.</p>`:u}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${T("plus")}Tarefa com pontos</button>
          <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${T("award")}Pontos avulsos</button>
        </div>
      </div>`}_demerits(){return this._app("demerits",null)||[]}async _saveDemerits(e){await this._saveAppPrefs({demerits:e.length?e:null})}async _addDemerit(e,t){await this._saveDemerits([...this._demerits(),{id:ls(),title:e,points:t}]),this._haptic("light"),this._showToast(`Dem\xE9rito criado: ${k(e,28)} \xB7 \u2212${t}`)}async _markDemerit(e,t){try{let a=await this.api.scoreDemerit(e.id,t);this._haptic("warning"),this._showToast(`\u2212${e.points} para ${t}: ${k(e.title,24)}`,{label:"Desfazer",run:()=>this.api.scoreRemove(a.key).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(a.message)}}_openDemeritForm(e=null){this._openSheet("demerit",e?{id:e.id,title:e.title,points:e.points,mode:"edit"}:{id:null,title:"",points:5,mode:"add"})}async _saveDemeritForm(){let e=this._form,t=(e.title||"").trim(),a=Math.round(Math.abs(Number(e.points)||0));if(!t||a<1)return;let s=this._demerits(),i=e.id?s.map(o=>o.id===e.id?{...o,title:t,points:a}:o):[...s,{id:ls(),title:t,points:a}];await this._closeSheet(),await this._saveDemerits(i),this._showToast(e.id?"Dem\xE9rito salvo":`Dem\xE9rito criado: ${k(t,28)} \xB7 \u2212${a}`)}_deleteDemerit(){let e=this._form;this._openSheet("confirm",{title:"Apagar este dem\xE9rito?",text:`\u201C${k(e.title||"",40)}\u201D sai da lista. Os pontos j\xE1 descontados continuam no placar (d\xE1 para tirar cada um no hist\xF3rico de pontos).`,label:"Apagar",danger:!0,run:async()=>{await this._closeSheet(),await this._saveDemerits(this._demerits().filter(t=>t.id!==e.id)),this._showToast("Dem\xE9rito apagado")}})}_renderDemerits(e){let t=this._demerits();if(!t.length)return u;let a=i=>{let o={};for(let c of e.entries)c.kind==="demerito"&&String(c.key).startsWith(`demerito|${i.id}|`)&&(o[c.who]=(o[c.who]||0)+1);return Object.entries(o).map(([c,l])=>`${c} ${l}\xD7`).join(" \xB7 ")},s=e.entries.filter(i=>i.kind==="demerito").length;return n`<div class="panel chores demerits" id="demeritos">
        <div class="chores-head"><span class="overline">Deméritos</span><small>${s?`${_(s,"vez","vezes")} ${ns[e.period]}`:"tiram pontos"}</small></div>
        <p class="dm-lead">Toque em quem foi para descontar.</p>
        ${q(t,i=>i.id,i=>{let o=a(i);return n`<div class="demerit">
              <div class="dm-top">
                <div class="dm-tx"><b>${i.title}</b>${o?n`<small>${o} ${ns[e.period]}</small>`:u}</div>
                <span class="pts neg">−${i.points}</span>
              </div>
              <div class="dm-who">
                ${e.participants.map(c=>n`<button class="dm-btn" style=${z(this._pColor(c),this._dark)} aria-label="${i.title}: descontar de ${c}" @click=${()=>this._markDemerit(i,c)}>
                    <span class="avatar sm2">${X(c)}</span><span>${c}</span>
                  </button>`)}
              </div>
            </div>`})}
      </div>`}_renderDemeritsSettings(){let e=this._demerits();return n`<div class="panel chores demerits-set" id="demeritos-ajustes">
        <div class="chores-head"><span class="overline">Deméritos</span><small>${e.length?_(e.length,"dem\xE9rito","dem\xE9ritos"):"tiram pontos"}</small></div>
        <p class="dm-lead">O que tira pontos de quem fizer. Em Recompensas, toque em quem foi para descontar.</p>
        ${e.length?q(e,t=>t.id,t=>n`<button class="demerit dm-edit" @click=${()=>this._openDemeritForm(t)}>
                <span class="dm-tx"><b>${t.title}</b></span>
                <span class="pts neg">−${t.points}</span>
                ${T("chevron-right")}
              </button>`):n`<div class="chip-row dm-ideas">${pi.map(([t,a])=>n`<button class="pick" @click=${()=>this._addDemerit(t,a)}>${T("plus")}<span>${t} −${a}</span></button>`)}</div>`}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openDemeritForm()}>${T("plus")}Novo demérito</button>
        </div>
      </div>`}_renderDemeritSheet(){let e=this._form,t=Number(e.points)||0,a=e.custom||t>0&&!os.includes(t);return n`${this._sheetHead(e.mode==="edit"?"Editar dem\xE9rito":"Novo dem\xE9rito")}
        <label class="field">
          <span class="flabel">O que foi</span>
          <input type="text" .value=${e.title||""} placeholder="Ex.: Toalha molhada na cama" maxlength="80" @input=${s=>this._setForm({title:s.target.value})} />
        </label>
        <div class="field">
          <span class="flabel">Quantos pontos tira</span>
          <div class="chip-row">
            ${os.map(s=>n`<button class="pick ${t===s&&!a?"on":""}" @click=${()=>this._setForm({points:s,custom:!1})}>−${s}</button>`)}
            <button class="pick ${a?"on":""}" @click=${()=>this._setForm({custom:!0})}>Outro</button>
          </div>
          ${a?n`<div class="time-row"><input type="number" inputmode="numeric" min="1" max="1000" class="num" .value=${String(t||"")} @input=${s=>this._setForm({points:Math.max(0,Math.min(1e3,parseInt(s.target.value,10)||0))})} /><span class="tl">pontos</span></div>`:u}
          <span class="field-hint">${T("info")}<span>Para marcar de fora do app (uma rotina da Alexa, uma etiqueta NFC), dispare o evento <code>cronologia_demerito</code> com <code>nome</code> e <code>quem</code>.</span></span>
        </div>
        <div class="sheet-actions">
          ${e.mode==="edit"?n`<button class="btn outline danger" @click=${()=>this._deleteDemerit()}>${T("trash")}Apagar</button>`:n`<button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>`}
          <button class="btn primary" ?disabled=${!(e.title||"").trim()||!(t>0)} @click=${()=>this._saveDemeritForm()}>${e.mode==="edit"?"Salvar":"Criar"}</button>
        </div>`}_renderFeed(e){if(!e.entries.length)return u;let t=new Date(this._now),a=this._feedAll?e.entries:e.entries.slice(0,8),s=i=>{let o=new Date(i),c=F(o,t);return c===0?`hoje ${M(o)}`:c===-1?`ontem ${M(o)}`:`${st[o.getDay()].slice(0,3)} ${M(o)}`};return n`<div class="panel feed">
        <div class="chores-head"><span class="overline">Pontos ${Lt[e.period]}</span><small>${_(e.entries.length,"registro","registros")}</small></div>
        ${q(a,i=>i.key,i=>n`<div class="feed-row" style=${z(this._pColor(i.who),this._dark)}>
            <span class="avatar sm2">${X(i.who)}</span>
            <span class="feed-tx"><b>${i.title}</b><small>${i.who} · ${s(i.at)}${i.kind==="extra"?" \xB7 avulso":i.kind==="manutencao"?" \xB7 manuten\xE7\xE3o":i.kind==="tarefa"?" \xB7 ResolvIA":i.kind==="demerito"?" \xB7 dem\xE9rito":""}</small></span>
            <span class="pts ${i.points<0?"neg":"got"}">${i.points>0?"+":i.points<0?"\u2212":""}${Math.abs(i.points)}</span>
            ${i.kind==="extra"||i.kind==="demerito"?n`<button class="icon-btn mini" aria-label="Tirar ${i.title}" @click=${()=>this._removeExtra(i)}>${T("x")}</button>`:u}
          </div>`)}
        ${e.entries.length>8?n`<button class="add-line" @click=${()=>(this._feedAll=!this._feedAll,this.requestUpdate())}>${T(this._feedAll?"chevron-up":"chevron-down")}${this._feedAll?"Mostrar menos":`Ver todos (${e.entries.length})`}</button>`:u}
      </div>`}async _removeExtra(e){try{await this.api.scoreRemove(e.key),this._showToast(e.points<0?`${k(e.title,26)}: dem\xE9rito tirado`:`${k(e.title,26)}: pontos tirados`)}catch(t){this._showToast(t.message)}}_renderExtraSheet(){let e=this._form,t=this._score()||{participants:[]};return n`${this._sheetHead("Pontos avulsos")}
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
        <div class="chores-head"><span class="overline">Histórico</span><small>${Object.entries(s).map(([i,o])=>`${i} ${o}`).join(" \xB7 ")||""}</small></div>
        ${q(a,i=>i.key,i=>n`<div class="hist-row">
            <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?z(this._pColor(i.winner),this._dark):""}>${i.winner?X(i.winner):"="}</span>
            <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${qt(i.start,i.end,e.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
            ${i.reward&&i.winner?n`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${T(i.delivered?"check":"gift")}</button>`:u}
          </div>`)}
        ${t.length>5?n`<button class="add-line" @click=${()=>(this._histAll=!this._histAll,this.requestUpdate())}>${T(this._histAll?"chevron-up":"chevron-down")}${this._histAll?"Mostrar menos":`Ver tudo (${t.length})`}</button>`:u}
      </div>`}_scorePrefs(e){let t=this._score()||{},a={enabled:!!t.enabled,participants:t.participants||[],period:t.period||"semana",anchor:t.anchor||y(new Date),notify:t.notify!==!1,manual:!!t.manual};return this._saveAppPrefs({score:{...a,...e}})}_renderScoreSettings(){let e=this._score();return!e||!e.enabled||!e.participants.length?n`<div class="panel score-set" id="placar">
          <div class="overline">Ajustes do placar</div>
          <div class="ai-state off"><span class="dot"></span><div><b>Placar desligado</b><span>Ligue em Recompensas: escolha quem participa e de quanto em quanto tempo o placar fecha.</span></div></div>
          <div class="score-actions" style="padding-left:0;padding-right:0;border:0"><button class="btn primary sm" @click=${()=>this._go("/recompensas",!0)}>${T("trophy")}Ir para Recompensas</button></div>
        </div>`:n`${this._renderScoreSettingsPanel(e)} ${this._renderDemeritsSettings()}`}_renderScoreSettingsPanel(e){let t=(this._ix().people||[]).map(s=>s.name),a=[...new Set([...e.participants,...t])];return n`<div class="panel score-set" id="placar">
        <div class="overline">Ajustes do placar</div>
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${a.map(s=>{let i=e.participants.includes(s);return n`<button class="pick person ${i?"on":""}" aria-pressed=${i?"true":"false"} @click=${()=>this._scorePrefs({participants:i?e.participants.filter(o=>o!==s):[...e.participants,s]})}><span class="avatar sm">${X(s)}</span><span>${s}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(Ht).map(([s,i])=>n`<button class=${e.period===s?"on":""} @click=${()=>this._scorePrefs({period:s,anchor:y(new Date)})}>${i.label}</button>`)}</div>
          <span class="field-hint">${T("info")}<span>${e.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",0)===1?"na segunda":"no domingo"} (muda em Mais \u203A Apar\xEAncia).`} Mudar aqui recomeça a contagem no período de agora, sem perder os pontos.</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Marcar pontos em Recompensas</div><div class="hint">Mostra o card <b>Para pontuar hoje</b>: marcar as tarefas do dia, criar tarefa com pontos e dar pontos avulsos ali mesmo. Desligado, as tarefas são marcadas na Agora e no ResolvIA.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${!!e.manual} @change=${s=>this._scorePrefs({manual:s.target.checked})} aria-label="Marcar pontos em Recompensas" /><span class="track"></span></label>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quando o período fecha, quem participa recebe quem venceu e o prêmio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${e.notify!==!1} @change=${s=>this._scorePrefs({notify:s.target.checked})} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <button class="text-btn danger" @click=${()=>this._scorePrefs({enabled:!1})}>Desligar o placar</button>
      </div>`}_renderRewardsSetup(){let e=this._score()||{},t=(this._ix().people||[]).filter(o=>o.person),a=this._setupPick||(e.participants&&e.participants.length?e.participants:t.map(o=>o.name)),s=this._setupPeriod||e.period||"semana",i=[...new Set([...(this._ix().people||[]).map(o=>o.name),...a])];return n`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:"Placar da casa"})}
        <div class="panel setup-card">
          <div class="setup-art">${T("trophy")}</div>
          <h2 class="setup-title">Quem faz mais em casa?</h2>
          <p class="panel-lead">Dê pontos às tarefas da rotina e da manutenção. Quem marca <b>Feito</b> ganha os pontos, e no fim de cada período quem somar mais leva o prêmio que vocês combinaram.</p>
          <div class="field"><span class="flabel">Quem participa</span>
            <div class="chip-row">${i.map(o=>{let c=a.includes(o);return n`<button class="pick person ${c?"on":""}" aria-pressed=${c?"true":"false"} @click=${()=>(this._setupPick=c?a.filter(l=>l!==o):[...a,o],this.requestUpdate())}><span class="avatar sm">${X(o)}</span><span>${o}</span></button>`})}</div>
          </div>
          <div class="field"><span class="flabel">O placar fecha</span>
            <div class="seg">${Object.entries(Ht).map(([o,c])=>n`<button class=${s===o?"on":""} @click=${()=>(this._setupPeriod=o,this.requestUpdate())}>${c.label}</button>`)}</div>
          </div>
          <button class="btn primary" style="width:100%" ?disabled=${!a.length} @click=${()=>this._saveAppPrefs({score:{enabled:!0,participants:a,period:s,anchor:y(new Date),notify:!0}})}>${T("trophy")}Começar o placar</button>
        </div>
      </section>`}};var Z={CREATE:1,DUE_DATE:16,DUE_DATETIME:32,DESCRIPTION:64},ds="cronologia.todo_list",U=(r,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,Ie="laranja",hi=r=>(r||"?").trim().charAt(0).toUpperCase(),jt=r=>r.allDay?A(r.due):new Date(r.due);function ps(r,e){if(r.undated)return"sem prazo";let t=jt(r),a=F(t,e),s=r.allDay?"":` \xE0s ${M(t)}`;return r.done?"conclu\xEDda":r.overdue?a===0?`venceu hoje${s}`:a===-1?`venceu ontem${s}`:`venceu h\xE1 ${-a} dias`:a===0?r.allDay?"vence hoje":`hoje${s}`:a===1?`amanh\xE3${s}`:`${H(t,e,{long:!1,cap:!1})}${s}`}var hs=r=>class extends r{_todos(){return this._ix().todos||{lists:[],items:[]}}_todoEvents(e,t){if(this._app("todo_off_calendar",!1))return[];let a=this._todos();return(!this._tEvCache||this._tEvCache.t!==a)&&(this._tEvCache={t:a,list:a.items.filter(s=>!s.undated).map(s=>{let i=jt(s);return{key:s.key,cal:"todo",uid:null,rid:null,rrule:null,summary:s.summary,description:s.description,location:"",allDay:s.allDay,start:i,end:s.allDay?$(i,1):new Date(i.getTime()+30*6e4),raw:{},kind:null,todo:s}})}),this._tEvCache.list.filter(s=>s.start<t&&s.end>e)}async _todoDone(e,t,a=null){let s=async i=>{this._sheet==="who"&&await this._closeSheet();try{let o=await this.api.setTodo(e.list,e.uid,t,i);this._haptic(t?"success":"light"),t&&o&&o.points?this._doneToast(e,o.who,o.points,{reassignKey:o.key}):this._showToast(`${k(e.summary,28)}: ${t?"conclu\xEDda":"reaberta"}`,{label:"Desfazer",run:()=>this.api.setTodo(e.list,e.uid,!t).catch(c=>this._showToast(c.message))})}catch(o){this._showToast(`N\xE3o consegui: ${o.message}`)}};return t&&e.points>0?a?s(a):this._withWho(e.points,e.summary,s):s("")}_renderTodosPanel(){let e=new Date(this._now),a=this._todos().items.filter(d=>d.undated?!0:d.done?d.days===0:d.overdue||d.days<=1);if(!a.length)return u;let s=a.filter(d=>d.overdue),i=a.filter(d=>!d.done),o=this._todosAll?a:a.slice(0,6),c=this._scoreOn()?(this._score()||{}).participants||[]:[],l=d=>{let h=d.points>0&&!d.done&&c.length&&c.length<=3,p=d.undated?d.listName:`${ps(d,e)} \xB7 ${d.listName}`;return n`<div class="chore todo ${d.done?"done":""} ${d.overdue?"late":""}">
          <button class="chk sq ${d.done?"on":""}" @click=${()=>this._todoDone(d,!d.done)} aria-label="${d.done?"Reabrir":"Concluir"} ${d.summary}">${d.done?U("check"):u}</button>
          <button class="chore-tx" @click=${()=>this._openSheet("todo",{key:d.key})}><b>${d.summary}</b><small>${h?n`<span class="pts-inline">+${d.points}</span> · ${p}`:p}</small></button>
          ${h?n`<div class="qwho" role="group" aria-label="Quem fez ${d.summary}">
                ${c.map(m=>n`<button class="qw-btn" style=${z(this._pColor(m),this._dark)} aria-label="${m} fez ${d.summary} (+${d.points})" title="${m} fez (+${d.points})" @click=${()=>this._todoDone(d,!0,m)}>${hi(m)}</button>`)}
              </div>`:d.points>0&&this._scoreOn()?n`<span class="pts ${d.done?"got":""}">+${d.points}</span>`:u}
        </div>`};return n`<div class="panel todos ${s.length?"alert":""}" id="tarefas">
        <div class="chores-head">
          <span class="overline">${a.some(d=>d.undated)?"Tarefas":"Tarefas com prazo"}</span>
          <small class=${s.length?"late":""}>${s.length?_(s.length,"atrasada","atrasadas"):i.length?`${i.length} para fazer`:"tudo feito"}</small>
        </div>
        ${q(o.filter(d=>!d.undated),d=>d.key,d=>l(d))}
        ${o.some(d=>d.undated)?n`${o.some(d=>!d.undated)?n`<div class="chores-head sub"><span class="overline">Sem prazo</span></div>`:u}
              ${q(o.filter(d=>d.undated),d=>d.key,d=>l(d))}`:u}
        ${a.length>6?n`<button class="add-line" @click=${()=>(this._todosAll=!this._todosAll,this.requestUpdate())}>${U(this._todosAll?"chevron-up":"chevron-down")}${this._todosAll?"Mostrar menos":`Mais ${a.length-6}`}</button>`:u}
        <div class="panel-foot plain">${U("list-checks")}<span>Das listas do ResolvIA. Escolha quais aparecem em Mais.</span></div>
      </div>`}_renderTodoSheet(){let e=new Date(this._now),t=this._todos().items.find(s=>s.key===this._form.key);if(!t)return n`${this._sheetHead("Tarefa")}<p class="sheet-note top">Essa tarefa não está mais na lista.</p>`;let a=t.undated?null:jt(t);return n`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${t.summary}</h3><p class="ev-cal">${t.listName} · <b>${ps(t,e)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${U("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${U("calendar-clock")}<span>${a?n`Prazo: ${I(H(a,e))}${t.allDay?"":` \xE0s ${M(a)}`}`:"Sem prazo"}</span></div>
          <div class="fact">${U("list-checks")}<span>Lista ${t.listName} (ResolvIA)</span></div>
          ${t.points>0&&this._scoreOn()?n`<div class="fact">${U("award")}<span>${t.points} pontos para quem concluir</span></div>`:u}
          ${t.description?n`<div class="fact notes">${U("file-text")}<span>${at(t.description).map(s=>s.url?n`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`:s.text)}</span></div>`:u}
        </div>
        <p class="sheet-note">${U("info")} O prazo, as notas e a repetição se mudam no ResolvIA.</p>
        <div class="sheet-actions">
          ${t.done?n`<button class="btn outline" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!1))}>${U("undo-2")}Reabrir</button>`:n`<button class="btn primary" @click=${()=>this._closeSheet().then(()=>this._todoDone(t,!0))}>${U("check")}Concluir${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</button>`}
        </div>`}_todoLists(){return this._todos().lists.filter(e=>!e.unavailable&&e.features&Z.CREATE)}_openTodoForm({date:e=null}={}){let t=this._todoLists(),a="";try{a=JSON.parse(localStorage.getItem(ds)||'""')}catch{}let s=t.find(i=>i.id===a)||t.find(i=>!i.hidden&&i.features&Z.DUE_DATE)||t[0];this._openSheet("form",{mode:"add",kind:"tarefa",title:"",list:s?s.id:"",date:y(e?S(e):S(new Date)),noDue:!1,timed:!1,time:"09:00",notes:""}),this.updateComplete.then(()=>{let i=this.renderRoot.querySelector(".sheet .ev-title-input");i&&i.focus()})}_renderTodoForm(){let e=this._form,t=this._todoLists(),a=t.find(l=>l.id===e.list),s=a?a.features:0,i=!!(s&Z.DUE_DATE),o=!!(s&Z.DUE_DATETIME),c=!!(s&Z.DESCRIPTION);return n`
        ${this._sheetHead("Novo")}
        ${this._renderModelChips("tarefa")}
        <label class="field">
          <span class="flabel">Tarefa</span>
          <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Levar o carro na revisão" @input=${l=>this._setForm({title:l.target.value})} @keydown=${l=>l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),this._saveTodoForm())}></textarea>
        </label>
        <div class="field">
          <span class="flabel">Lista do ResolvIA</span>
          <div class="chip-row">${t.map(l=>n`<button class="pick list ${e.list===l.id?"on":""}" style=${z(j(Ie),this._dark)} @click=${()=>this._setForm({list:l.id})}>${U("list-checks")}<span>${k(l.name,26)}</span></button>`)}</div>
        </div>
        ${i||o?n`${e.noDue?u:this._dateField("Prazo",e.date,l=>this._setForm({date:l}),"td-date")}
              <div class="chip-row" style="margin:-8px 0 18px">
                <button class="pick ${e.noDue?"on":""}" @click=${()=>this._setForm({noDue:!e.noDue})}>Sem prazo</button>
                ${o&&!e.noDue?n`<button class="pick ${e.timed?"on":""}" @click=${()=>this._setForm({timed:!e.timed})}>${U("clock")}<span>Com horário</span></button>
                      ${e.timed?n`<input type="time" class="inline-time" .value=${e.time} aria-label="Horário" @change=${l=>l.target.value&&this._setForm({time:l.target.value})} />`:u}`:u}
              </div>`:n`<p class="field-hint" style="margin:-6px 0 18px">${U("info")}<span>Essa lista não aceita prazo (listas do Alexa, por exemplo). A tarefa entra sem data.</span></p>`}
        ${c?n`<label class="field"><span class="flabel">Notas</span><textarea rows="2" .value=${e.notes} placeholder="Detalhes, links" @input=${l=>this._setForm({notes:l.target.value})}></textarea></label>`:u}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()||!a} @click=${()=>this._saveTodoForm()}>${e.saving?"Salvando\u2026":"Criar tarefa"}</button>
        </div>`}async _saveTodoForm(){let e=this._form,t=this._todoLists().find(o=>o.id===e.list);if(!t)return this._showToast("Escolha a lista");if(!(e.title||"").trim())return this._showToast("D\xEA um nome \xE0 tarefa");let a=!e.noDue&&t.features&(Z.DUE_DATE|Z.DUE_DATETIME),s=a&&e.timed&&t.features&Z.DUE_DATETIME,i={summary:e.title.trim(),date:a?e.date:"",time:s?e.time:"",description:e.notes||""};a&&!s&&!(t.features&Z.DUE_DATE)&&(i.time="09:00"),this._setForm({saving:!0});try{await this.api.addTodo(t.id,i);try{localStorage.setItem(ds,JSON.stringify(t.id))}catch{}this._haptic("success"),await this._closeSheet(),this._showToast(`Tarefa criada em ${k(t.name,24)}${t.hidden?" (lista oculta aqui)":""}`)}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui criar: ${o.message}`)}}_renderTodosSettings(){let{lists:e,app:t}=this._todos(),a=this._app("todo_hidden",null)||[],s=(h,p)=>this._saveAppPrefs({todo_hidden:p?a.filter(m=>m!==h):[...a,h]}),i=e.filter(h=>!h.hidden),o=i.reduce((h,p)=>h+p.due,0),c=i.reduce((h,p)=>h+p.overdue,0),l=`${_(e.length,"lista","listas")} \xB7 ${_(o,"tarefa com prazo","tarefas com prazo")}${c?`, ${_(c,"atrasada","atrasadas")}`:""}.`,d=e.length?t?{tone:"ok",title:`Conectado ao ResolvIA ${t.versao||""}`.trim(),text:`${l} Concluir aqui conclui l\xE1, e a repeti\xE7\xE3o do ResolvIA continua valendo.`}:{tone:"ok",title:"Lendo as listas de tarefas do Home Assistant",text:`${l} Concluir aqui conclui l\xE1.`}:{tone:"off",title:"Nenhuma lista de tarefas encontrada",text:"Com o ResolvIA (ou qualquer lista de tarefas do Home Assistant), as tarefas com prazo aparecem aqui sozinhas. Nada a configurar."};return n`<div class="panel" id="resolvia">
        <div class="overline">Tarefas do ResolvIA</div>
        <div class="ai-state ${d.tone}"><span class="dot"></span><div><b>${d.title}</b><span>${d.text}</span></div></div>
        ${e.length?n`<div class="row switch-row">
                <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As tarefas aparecem no dia do prazo (ou no horário, se tiver), além do card da Agora.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("todo_off_calendar",!1)} @change=${h=>this._saveAppPrefs({todo_off_calendar:h.target.checked?null:!0})} aria-label="Tarefas no calendário" /><span class="track"></span></label>
              </div>
              <div class="row switch-row">
                <div class="grow"><div class="label">Tarefas sem prazo na Agora</div><div class="hint">Mostra também as tarefas pendentes sem data (e as das listas que não aceitam prazo), depois das que têm prazo.</div></div>
                <label class="switch"><input type="checkbox" role="switch" .checked=${!!this._app("todo_undated",!1)} @change=${h=>this._saveAppPrefs({todo_undated:h.target.checked?!0:null})} aria-label="Tarefas sem prazo na Agora" /><span class="track"></span></label>
              </div>
              <div class="sub-overline">Listas</div>`:u}
        ${q(e,h=>h.id,h=>n`<div class="row switch-row ${h.hidden?"off":""}">
            <span class="tile" style=${z(j(Ie),this._dark)}>${U("list-checks")}</span>
            <div class="grow"><div class="label">${h.name}</div><div class="hint">${h.info==="integracao"?"n\xE3o aceita prazo (as datas s\xE3o da integra\xE7\xE3o)":h.info==="resolvia"?"prazos desligados no ResolvIA":h.due?`${_(h.due,"tarefa com prazo","tarefas com prazo")}${h.overdue?` \xB7 ${_(h.overdue,"atrasada","atrasadas")}`:""}`:"nenhuma com prazo"}</div></div>
            <label class="switch"><input type="checkbox" role="switch" .checked=${!h.hidden} @change=${p=>s(h.id,p.target.checked)} aria-label="Mostrar ${h.name}" /><span class="track"></span></label>
          </div>`)}
      </div>`}};var ee=(r,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,ui=r=>r>1048576?`${(r/1048576).toFixed(1).replace(".",",")} MB`:`${Math.max(1,Math.round(r/1024))} KB`,mi={"antes-de-importar":"antes de importar","antes-de-restaurar":"antes de restaurar"},us=r=>class extends r{_dateTime(e){let t=new Date(e),a=s=>String(s).padStart(2,"0");return`${a(t.getDate())}/${a(t.getMonth()+1)}/${t.getFullYear()} \xE0s ${a(t.getHours())}:${a(t.getMinutes())}`}async _loadBackups(){if(this.api.backups){try{this._backups=await this.api.backups()}catch(e){this._backups={available:!1,error:e.message,backups:[]}}this.requestUpdate()}}async _createBackup(){this._busy="backup",this.requestUpdate();try{let e=await this.api.createBackup();this._showToast(`Backup salvo em ${e.folder}/${e.name}`),this._haptic("success"),await this._loadBackups()}catch(e){this._showToast(`N\xE3o consegui criar o backup. ${e.message}`)}this._busy=null,this.requestUpdate()}_exportData(e,t){!this.api.dataUrl||!this.api.dataUrl(e)?(t.preventDefault(),this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")):e!=="json"&&this._showToast("Juntando os eventos de todos os calend\xE1rios\u2026")}_pickDataImport(){let e=this.renderRoot.querySelector("#cr-data-import");e&&(e.value="",e.click())}_onDataImport(e){let t=e.target.files&&e.target.files[0];e.target.value="",t&&this._openSheet("confirm",{title:"Importar arquivo?",text:`Os dados do app (nomes e cores das agendas, pessoas e avisos, placar e marca\xE7\xF5es) passam a ser os de \u201C${k(t.name,40)}\u201D. Os eventos dos calend\xE1rios n\xE3o mudam. Antes, o app guarda uma c\xF3pia do que existe hoje em Vers\xF5es anteriores.`,label:"Importar",run:async()=>{this._closeSheet();try{let a=await this.api.importData(t);this._haptic("success"),this._showToast(`Importado: ${_(a.calendars,"agenda","agendas")} e ${_(a.points,"ponto registrado","pontos registrados")}`)}catch(a){this._showToast(`N\xE3o consegui importar. ${a.message}`)}}})}_confirmRestoreBackup(e){this._openSheet("confirm",{title:"Restaurar este backup?",text:`Os dados do app passam a ser os do backup de ${this._dateTime(e.date)}. Os eventos dos calend\xE1rios n\xE3o mudam (est\xE3o no .zip, para importar se precisar). Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreBackup(e.name),this._showToast("Backup restaurado")}catch(t){this._showToast(t.message)}}})}async _openVersions(){this._openSheet("versions",{list:null,error:null});try{let e=await this.api.versions();this._sheet==="versions"&&this._setForm({list:e})}catch(e){this._sheet==="versions"&&this._setForm({error:e.message})}}_confirmRestoreVersion(e){this._openSheet("confirm",{title:"Restaurar esta vers\xE3o?",text:`Os dados do app voltam a ser os de ${this._dateTime(e.when)}. Antes, o app guarda uma c\xF3pia do que existe hoje.`,label:"Restaurar",run:async()=>{this._closeSheet();try{await this.api.restoreVersion(e.name),this._showToast("Vers\xE3o restaurada")}catch(t){this._showToast(t.message)}}})}_renderVersions(){let e=this._form;return n`
        ${this._sheetHead("Vers\xF5es anteriores")}
        ${e.error?n`<div class="imp-error">${ee("circle-alert")}<span>${e.error}</span></div>`:e.list==null?n`<div class="imp-loading"><span class="spin">${ee("loader-circle")}</span><span>Carregando…</span></div>`:e.list.length?n`<div class="data-list">
                  ${e.list.map(t=>n`<div class="data-item"><div><b>${this._dateTime(t.when)}</b><span>${_(t.calendars,"agenda","agendas")} · ${_(t.points,"ponto","pontos")} · ${mi[t.reason]||"autom\xE1tica"}</span></div>
                      <button class="btn outline sm" @click=${()=>this._confirmRestoreVersion(t)}>Restaurar</button></div>`)}
                </div>`:n`<p class="sheet-note top">Ainda não há versões anteriores. Elas aparecem depois das primeiras alterações.</p>`}
      `}_renderDataPanel(){let e=this._backups,t=this._writable(),a=(s,i,o)=>n`<a class="btn outline sm" href=${this.api.dataUrl&&this.api.dataUrl(s)||"#"} download @click=${c=>this._exportData(s,c)}>${ee(o)}${i}</a>`;return n`<div class="panel" id="dados">
        <div class="overline">Dados</div>
        <div class="data-row">
          <b>Exportar</b>
          <p>Baixe para guardar ou levar para outro programa. Os arquivos são abertos e legíveis: o ZIP tem os dados do app, os eventos de cada calendário em .ics e as planilhas de eventos e pontos.</p>
          <div class="btn-row">${a("zip","Tudo (ZIP)","archive")} ${a("csv","Eventos (CSV)","sheet")} ${a("json","Dados (JSON)","braces")}
            <button class="btn outline sm" @click=${()=>this._openExport()}>${ee("calendar")}Agenda (.ics)</button></div>
        </div>
        <div class="data-row">
          <b>Backup na pasta share</b>
          <p>Cria uma cópia completa em <code>share/cronologia</code>, que você acessa pela rede do Home Assistant. Os backups do próprio Home Assistant também incluem o CronologIA e os calendários locais.</p>
          <div class="btn-row">
            <button class="btn primary sm" ?disabled=${this._busy==="backup"||e&&e.available===!1} @click=${()=>this._createBackup()}>${ee("archive")}${this._busy==="backup"?"Criando\u2026":"Criar backup"}</button>
          </div>
          ${e&&e.available===!1?n`<p class="data-note">A pasta share não está disponível para o app.</p>`:u}
          ${e&&e.backups&&e.backups.length?n`<div class="data-list">
                ${e.backups.slice(0,8).map(s=>n`<div class="data-item"><div><b>${this._dateTime(s.date)}</b><span title=${s.name}>${ui(s.size)} · ${s.name}</span></div>
                    <button class="btn outline sm" @click=${()=>this._confirmRestoreBackup(s)}>${ee("archive-restore")}Restaurar</button></div>`)}
              </div>`:u}
        </div>
        <div class="data-row">
          <b>Importar backup ou JSON</b>
          <p>Traz os dados do app de um .zip ou .json exportado pelo CronologIA: agendas, pessoas e avisos, placar e marcações. Antes de importar, o app guarda uma cópia do que existe hoje.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._pickDataImport()}>${ee("upload")}Escolher arquivo</button></div>
        </div>
        <div class="data-row">
          <b>Importar eventos (.ics)</b>
          <p>Traz os eventos de um convite, de outra agenda ou de um calendário do backup. Você revisa e escolhe o calendário antes de adicionar.</p>
          <div class="btn-row"><button class="btn outline sm" ?disabled=${!t.length} @click=${()=>this._openImport("ics")}>${ee("upload")}Escolher .ics</button></div>
        </div>
        <div class="data-row">
          <b>Versões anteriores</b>
          <p>O app guarda sozinho uma cópia dos dados a cada 10 minutos de uso. Se algo sair errado, volte para uma versão anterior.</p>
          <div class="btn-row"><button class="btn outline sm" @click=${()=>this._openVersions()}>${ee("archive-restore")}Ver versões</button></div>
        </div>
        <div class="data-row">
          <b>Onde ficam os dados</b>
          <p>Os eventos ficam nos próprios calendários (no Home Assistant, no Google, no Outlook…). O app guarda nomes, cores, preferências, pessoas, o placar e as marcações em <code>/data/cronologia.json</code>, que entra no backup do Home Assistant.</p>
        </div>
        <input id="cr-data-import" class="sr" type="file" accept=".zip,.json,application/zip,application/json" tabindex="-1" aria-hidden="true" @change=${s=>this._onDataImport(s)} />
      </div>`}};var ms="cronologia.theme",vs="cronologia.mode",Vt={CREATE:1,DELETE:2,UPDATE:4},Ut=(r,e)=>(Number(r)&e)===e,me=48,vi={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},fi=r=>vi[r]||{label:r?I(r.replace(/_/g," ")):"Outros",icon:"calendar"},g=(r,e="")=>n`<svg class="i ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Q(V[r]||V.calendar)}</svg>`,ht={get(r,e){try{let t=localStorage.getItem(r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}},Bt=(r,e,t,a,s)=>ge`<line class=${s} x1=${r} y1=${e} x2=${t} y2=${a}></line>`,fs=(r,e)=>ge`<path class=${e} d=${r}></path>`,gi=r=>r.allDay?"Dia todo":`${M(r.start)} \u2013 ${M(r.end)}`,xi=r=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r)}`,Yt=class extends us(hs(cs(ss(re)))){static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Ra,Na,Ia];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=ht.get(ms,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=S(new Date),this._mode=ht.get(vs,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),Oa(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(e){e.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(e){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let t=this.renderRoot.querySelector(".tgrid-scroll");if(t){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&P(this._cursor,a)?Math.max(0,a.getHours()-1):7;t.scrollTop=s*me}}if(e.has("_path")&&this._view().name==="more"){let t=this.renderRoot.querySelector(".more-tabs"),a=t&&t.querySelector("button.on");if(a){let i=a.offsetLeft,o=i+a.offsetWidth;i<t.scrollLeft?t.scrollLeft=i-8:o>t.scrollLeft+t.clientWidth&&(t.scrollLeft=o-t.clientWidth+8)}let s=this._view().tab;s==="integracoes"&&this._refreshAi(!1),s==="dados"&&this._loadBackups()}}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let e=this._theme==="dark"?!0:this._theme==="light"?!1:Ha();e!==this._dark&&(this._dark=e)}_setTheme(e){this._theme=e,ht.set(ms,e),this._syncDark()}async _start(){this._started=!0,this._store=new dt(this.api,()=>this._ver++),this.api.onStatus(e=>this._online=e),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(e=>this._onCalendar(e)).catch(()=>{}),this.api.subscribePrefs(e=>this._setPrefs(e)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(e=>{let t=e&&e.test;t&&this._home&&t.at!==this._testSeen&&Date.now()-t.at<12e4&&(this._haptic("success"),this._showToast(`${this._targetName(t.target)}: o bot\xE3o ${t.action==="tomei"?"Tomei":"Adiar"} chegou ao app`)),this._testSeen=t&&t.at,this._home=e}).catch(()=>{})}async _boot(e){try{let t=await this.api.bootstrap();this._version=t.version||"",this._user=t.user||{name:""},this._ai=t.ai||this._ai,this._aiAt=Date.now(),this._states=t.states||{},this._entities=t.entities||{},this._devices=t.devices||{},this._prefs=t.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),e&&this._store.reloadAll()}catch(t){this._ready||(this._bootError=t.message||String(t)),e||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(e){let t={...this._states},a=e.entity_id in t;e.new_state?t[e.entity_id]=e.new_state:delete t[e.entity_id],this._states=t,(!a||!e.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(e){e&&(this._prefs={calendars:e.calendars||{},app:e.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(e=>!e.hidden).map(e=>e.id))}_app(e,t){let a=this._prefs.app?this._prefs.app[e]:void 0;return a===void 0?t:a}_accent(){return j(this._app("accent","turquesa"))||j("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let e=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},o=i.device_id?this._devices[i.device_id]:null,c=fi(i.platform),l=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:o,plat:c,orig:l}});e.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let t=e.map(({id:a,st:s,reg:i,dev:o,plat:c,orig:l},d)=>{let h=(this._prefs.calendars||{})[a]||{},p=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:h.name||l,origName:l,group:c.label,icon:c.icon,device:o?o.name_by_user||o.name:null,color:j(h.color)||ja(d),colorId:h.color||null,hidden:!!h.hidden,features:p,canCreate:Ut(p,Vt.CREATE),canUpdate:Ut(p,Vt.UPDATE),canDelete:Ut(p,Vt.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:t},t}_cal(e){return this._cals().find(t=>t.id===e)}_visible(){return this._cals().filter(e=>!e.hidden)}_writable(){return this._cals().filter(e=>e.canCreate&&!e.unavailable)}_defaultCal(){let e=this._writable(),t=this._app("default_calendar",null);return(e.find(a=>a.id===t)||e.find(a=>!a.hidden)||e[0]||{}).id||null}_events(e,t){this._store.ensure(e,t);let a=this._store.query(e,t),s=[...this._gerenciaEvents(e,t),...this._todoEvents(e,t)];return s.length?[...a,...s].sort((i,o)=>i.start-o.start||Number(o.allDay)-Number(i.allDay)||i.summary.localeCompare(o.summary,"pt-BR")):a}async _saveCalPrefs(e,t){try{this._setPrefs(await this.api.setCalendarPrefs(e,t))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(e){try{this._setPrefs(await this.api.setAppPrefs(e))}catch(t){this._showToast(`N\xE3o consegui salvar: ${t.message}`)}}_view(){let e=(this._path||"").replace(/\/+$/,"");if(e==="/calendario")return{name:"calendar"};if(e==="/agendas")return{name:"more",tab:"calendarios"};if(e==="/recompensas")return{name:"rewards"};let t=/^\/mais(?:\/(avisos|placar|integracoes|dados|aparencia))?$/.exec(e);return t?{name:"more",tab:t[1]||"calendarios"}:{name:"now"}}async _go(e,t=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(t?0:1);t?history.replaceState({rvDepth:a,rvPath:e},""):history.pushState({rvDepth:a,rvPath:e},""),this._path=e,e==="/calendario"&&(this._scrollWeek=!0);let s=this.renderRoot&&this.renderRoot.querySelector("main");s&&s.scrollTo({top:0,behavior:"instant"})}_goTab(e){let t=this._view().name;if(e===""){if(t==="now"){let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(e==="/calendario"&&t==="calendar"){this._cursor=S(new Date),this._scrollWeek=!0;return}this._go(e,t!=="now")}_openDay(e,t){this._cursor=S(e),t&&this._setMode(t),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(e){this._mode=e,ht.set(vs,e),this._scrollWeek=!0}_popEntry(e){if(!(history.state&&history.state[e]))return Promise.resolve();let t=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(o=>o!==s),this._popping===t&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=t,history.back(),t}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let e=history.state&&history.state.rvPath||"";e!==this._path&&(this._path=e);for(let t of[...this._popWaiters||[]])t()}async _openSheet(e,t=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=e,this._form=t,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(e){this._form={...this._form,...e}}_openInHA(e){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(e)}_haptic(e){this.env&&this.env.haptic&&this.env.haptic(e)}_showToast(e,t=null){clearTimeout(this._toastTimer),this._toast={text:e,action:t,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,t?5e3:2800)}_userName(){let e=et();return(this._user&&this._user.name||e&&e.user&&e.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let e=et();return e&&e.user?!!e.user.is_admin:!0}_openEvent(e){if(e.gerencia){this._openSheet("bill",{b:{id:e.gerencia.id,c:e.gerencia}});return}if(e.todo){this._openSheet("todo",{key:e.todo.key});return}this._openSheet("event",{ev:e})}_money(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:e=null,date:t=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(e&&e.kind)return this._openKindForm({ev:e,copy:i});if(!this._writable().length&&!(e&&!i)){this._openSheet("nocal",{});return}let c;if(e){let l=e.allDay?$(e.end,-1):e.end;c={mode:i?"add":"edit",cal:i?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._defaultCal():e.cal,origCal:e.cal,uid:e.uid,rid:i?null:e.rid,title:e.summary,allDay:e.allDay,date:y(e.start),endDate:e.allDay?F(l,e.start)>0?y(l):"":P(e.start,e.end)?"":y(e.end),start:e.allDay?"09:00":M(e.start),end:e.allDay?"10:00":M(e.end),repeat:Ne(e.rrule),rrule:e.rrule||"",location:e.location,notes:e.description}}else{let l=t?S(t):S(new Date),d=new Date,h=a??(P(l,d)?Math.min(23,d.getHours()+1):9),p=m=>String(m).padStart(2,"0");c={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:y(l),endDate:"",start:`${p(h)}:00`,end:`${p(Math.min(23,h+1))}:${h+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}this._openSheet("form",c),c.mode==="add"&&!c.title&&this.updateComplete.then(()=>{let l=this.renderRoot.querySelector(".sheet .ev-title-input");l&&l.focus()})}_eventFromForm(e,{keepRrule:t=!0}={}){if(e.kind)return this._kindEvents(e,{keepRrule:t})[0];let a=(e.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(e.date||""))throw new Error("Escolha a data");let s={summary:a};if(e.allDay){let i=e.endDate&&e.endDate>e.date?e.endDate:e.date;s.start=e.date,s.end=y($(A(i),1))}else{let[i,o]=(e.start||"09:00").split(":").map(Number),[c,l]=(e.end||e.start||"10:00").split(":").map(Number),d=A(e.date),h=new Date(d.getFullYear(),d.getMonth(),d.getDate(),i,o),p=e.endDate&&e.endDate>e.date?A(e.endDate):d,m=new Date(p.getFullYear(),p.getMonth(),p.getDate(),c,l);m<=h&&(m=$(m,1)),m-h<6e4&&(m=new Date(h.getTime()+30*6e4)),s.start=Y(h),s.end=Y(m)}if((e.location||"").trim()&&(s.location=e.location.trim()),(e.notes||"").trim()&&(s.description=e.notes.trim()),t){let i=e.rrule&&Ne(e.rrule)===e.repeat?e.rrule:e.repeat?`FREQ=${e.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let e=this._form;if(e.kind)return this._saveKindForm();let t;try{t=this._eventFromForm(e)}catch(s){this._showToast(s.message);return}let a=this._cal(e.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(e.mode==="edit"&&e.rid){this._openSheet("scope",{action:"edit",...e,event:t});return}this._setForm({saving:!0});try{e.mode==="add"?(await this.api.createEvent(e.cal,t),this._done(`Evento criado em ${k(a.name,24)}`,e.cal,t.start)):e.cal!==e.origCal?(await this.api.createEvent(e.cal,t),await this.api.deleteEvent(e.origCal,e.uid),this._store.refresh(e.origCal),this._done(`Evento movido para ${k(a.name,24)}`,e.cal,t.start)):(await this.api.updateEvent(e.cal,e.uid,t),this._done("Evento salvo",e.cal,t.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_done(e,t,a){this._haptic("success"),this._closeSheet(),this._store.refresh(t);let s=a?S(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?A(a):a)):null;this._showToast(e,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(e){let t=this._form,a={recurrenceId:t.rid,range:e==="future"?"THISANDFUTURE":void 0};try{if(t.action==="edit"){let s=t.event;e==="one"&&(s=this._eventFromForm(t,{keepRrule:!1})),await this.api.updateEvent(t.cal,t.uid,s,a),this._done(e==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",t.cal,s.start)}else await this.api.deleteEvent(t.cal,t.uid,e==="all"?{}:a),this._done(e==="all"?"A s\xE9rie toda foi apagada":e==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",t.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(e){if(e.rid){this._openSheet("scope",{action:"delete",cal:e.cal,uid:e.uid,rid:e.rid,title:e.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${k(e.summary,28)}\u201D?`,text:`${I(H(e.start,new Date(this._now)))} \xB7 ${gi(e)}. Ele sai do calend\xE1rio ${k((this._cal(e.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(e.cal,e.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(e.cal);let t={summary:e.summary,start:e.raw.start,end:e.raw.end};e.location&&(t.location=e.location),e.description&&(t.description=e.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(e.cal,t).then(()=>this._store.refresh(e.cal)).catch(a=>this._showToast(a.message))})}catch(t){this._showToast(`N\xE3o consegui apagar: ${t.message}`)}}})}_openImport(e="pick",t={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:e==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...t});return e==="photos"&&this._pickFiles("photos"),e==="scan"&&this._openCamera(),e==="text"&&this._focusSheetText(),e==="ics"&&this._pickFiles("ics"),s}_focusSheetText(){this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(".sheet textarea");e&&e.focus()})}_pickFiles(e){let t=this.renderRoot.querySelector(e==="scan"?"#cr-scan":e==="ics"?"#cr-ics":"#cr-photos");t&&(t.value="",t.click())}_releaseImages(){let e=this._form;if(e&&e.images)for(let t of e.images)t.url&&URL.revokeObjectURL(t.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(e){let t=[...e.target.files||[]].filter(i=>!i.type||i.type.startsWith("image/")).slice(0,6);if(e.target.value="",!t.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let s=[];for(let i of t)s.push(await Ft(i));this._readImages(s,a)}async _onIcsFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let a;try{a=Ga(await t.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:t.name,note:null,error:null})}_readImages(e,t){if(this._sheet!=="import"||!e.length)return;let a=t?[...this._form.images||[],...e]:(this._releaseImages(),e);this._setForm({step:"loading",images:a,prevStep:t?"review":"pick",loadingText:e.length>1?`Lendo ${e.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:e,appending:t})}async _runExtract({text:e,images:t,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",o=a?this._form.items||[]:[];try{let c=await this.api.extract({text:e,images:t?t.map(({data:d,mime:h})=>({data:d,mime:h})):void 0});if(!i())return;let l=c.events||[];if(!l.length){let d=e?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:d}):this._setForm({step:e?"text":"pick",error:d});return}this._haptic("success"),this._setForm({step:"review",items:[...o,...l.map(d=>({...d,on:!0}))],provider:c.provider||null,note:null,error:null})}catch(c){if(!i())return;a?this._setForm({step:"review",note:c.message||"Algo deu errado"}):this._setForm({step:e?"text":"pick",error:c.message||"Algo deu errado"})}}_readText(){let e=(this._form.text||"").trim();if(!e)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:e})}async _pasteClipboard(){try{let e=await navigator.clipboard.readText();if(!e)throw new Error("empty");this._setForm({text:e,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(e,t){let a=this._form.items.slice();a[e]={...a[e],...t},this._setForm({items:a})}_itemEvent(e){let t=s=>{let[i,o]=s.split(":").map(Number),c=Math.min(1439,i*60+o+60);return`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[e.repeat]||"";return this._eventFromForm({title:e.title,date:e.date,endDate:e.end_date||"",allDay:!e.start,start:e.start,end:e.end||(e.start?t(e.start):""),repeat:e.rrule?Ne(e.rrule):a,rrule:e.rrule||"",location:e.location,notes:e.notes})}async _importAdd(){let e=this._form,t=e.items.filter(o=>o.on&&(o.title||"").trim()),a=this._cal(e.target);if(!t.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let o of t)try{let c=this._itemEvent(o);await this.api.createEvent(e.target,c),s++,(!i||c.start<i)&&(i=c.start)}catch(c){this._showToast(`\u201C${k(o.title,24)}\u201D: ${c.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${_(s,"evento adicionado","eventos adicionados")} em ${k(a.name,20)}`,e.target,i)}async _openCamera(){let e=navigator.mediaDevices;if(!e||!e.getUserMedia){this._pickFiles("scan");return}let t=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:t,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await e.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(c=>c.stop());return}this._stream=a;let s=a.getVideoTracks()[0],i=s&&s.getCapabilities?s.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!i.torch},await this.updateComplete;let o=this.renderRoot.querySelector(".cam video");o&&(o.srcObject=a,o.play().catch(()=>{}))}catch(a){if(!this._cam)return;let s=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:s?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(e=>e.stop()),this._stream=null}_closeCamera(e=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let t of this._cam.shots||[])URL.revokeObjectURL(t.url);this._cam=null,e||this._popEntry("rvCam")}}async _toggleTorch(){let e=this._stream&&this._stream.getVideoTracks()[0];if(!e)return;let t=!this._cam.torch;try{await e.applyConstraints({advanced:[{torch:t}]}),this._cam={...this._cam,torch:t}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let e=this.renderRoot.querySelector(".cam video");if(!e||!e.videoWidth||!this._cam||this._cam.shots.length>=6)return;let t=1800,a=Math.min(1,t/Math.max(e.videoWidth,e.videoHeight)),s=document.createElement("canvas");s.width=Math.round(e.videoWidth*a),s.height=Math.round(e.videoHeight*a),s.getContext("2d").drawImage(e,0,0,s.width,s.height);let i=await new Promise(c=>s.toBlob(c,"image/jpeg",.86));if(!i||!this._cam)return;let o=await Ft(i,t);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,o],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let e=this._cam.shots,t=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(e,t&&this._form.step==="review")}_cameraFallback(){let e=this._cam&&this._cam.appending;this._closeCamera(),e&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(e=!0){if(!(!e&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(t){this._ai={...this._ai,ready:!1,images:!1,reason:t.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(e){await this._saveAppPrefs({ai_entity:e||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais/integracoes",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#leitura-ia");e&&e.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(e=>e.id),range:"12m"})}_exportRange(e){let t=S(new Date);return e==="3m"?[t,oe(t,3)]:e==="year"?[oe(t,-12),oe(t,12)]:[t,oe(t,12)]}render(){if(!this._ready)return n`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?n`${g("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:n`<span class="spin">${g("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let e=this._view(),t=this._accent(),a=this._dark,s=`--rv-accent:${t.fill};--rv-accent-ink:${a?t.fill:t.ink};--rv-accent-soft:${Oe(t.fill,a?.18:.14)};--rv-accent-faint:${Oe(t.fill,a?.08:.07)};--rv-accent-ink-light:${t.ink};`,i;return e.name==="calendar"?i=this._renderCalendar():e.name==="more"?i=this._renderMore():e.name==="rewards"?i=this._renderRewards():i=this._renderNow(),n`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?n`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:u}
          ${this._online?u:n`<div class="offline">${g("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${i}</main>
          ${this._renderNav(e)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${o=>this._onFiles(o)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${o=>this._onIcsFile(o)} />
      </div>
    `}_renderNav(e){let t=s=>e.name===s,a=(s,i,o,c)=>n`<button class="tab ${t(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${o}>${g(c)}<span>${o}</span></button>`;return n`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:e.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${g("plus")}</span><span>Novo</span>
        </button>
        ${a("rewards","/recompensas","Recompensas","trophy")} ${a("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(e,t,a=u){let s=this._userName(),i=this._online?t:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return n`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${s?` \xB7 Ol\xE1, ${s}`:""}</p>
      <h1 class="page-title">${e}</h1>
      ${i?n`<p class="status"><span class="dot ${i.tone||""}" aria-hidden="true"></span><span>${i.text}</span></p>`:u}
      ${a}
    </header>`}_colorOfEvent(e){if(e.gerencia)return j("ouro");if(e.todo)return j(Ie);let t=this._cal(e.cal);return t&&t.color||this._accent()}_renderRow(e,t,{showCal:a=!0}={}){let s=this._now,i=e.end.getTime()<=s,o=e.start.getTime()<=s&&e.end.getTime()>s&&!e.allDay,c=this._cal(e.cal),l;if(e.allDay){let v=F(e.end,e.start);l=n`<b>Dia</b><small>${v>1?`${F(t,e.start)+1}/${v}`:"todo"}</small>`}else{let v=P(e.start,t),f=P(e.end,t)||e.end.getHours()===0&&e.end.getMinutes()===0&&F(e.end,t)===1;l=n`<b>${v?M(e.start):"\u2026"}</b><small>${f?M(e.end):"segue"}</small>`}let d=e.kind,h=e.todo?e.todo.done:d&&d.kind!=="manutencao"&&this._checkOf(e),m=[...d?d.kind==="remedio"?[d.dose,d.who]:d.kind==="conta"&&d.value!=null?[this._money(d.value)]:[d.who]:[],e.location,a?c?c.name:e.gerencia?"GerencIA":e.todo?`${e.todo.listName} \xB7 ResolvIA`:"":""].filter(Boolean).join(" \xB7 ");return n`<button class="ev-row ${i?"past":""} ${o?"live":""} ${h?"done":""}" style=${z(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="ev-time">${l}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${e.todo?n`<span class="kind-ic">${g("list-checks")}</span>`:this._kindIcon(e)}${e.summary}${h?n`<span class="ev-done">${g("check")}</span>`:u}</span>${m?n`<span class="ev-sub">${m}</span>`:u}</span>
      ${e.rrule?n`<span class="ev-rep" title=${$e(e.rrule)}>${g("repeat")}</span>`:u}
    </button>`}_renderNow(){let e=new Date(this._now),t=S(e),a=this._events($(t,-1),$(t,9)).filter(x=>!x.kind&&!x.todo),s=this._store.loading($(t,-1),$(t,9)),i=this._ix().meds.filter(x=>x.state==="atrasado"),o=ue(a,t),c=x=>x.end-x.start>=12*36e5,l=o.filter(x=>x.allDay||c(x)),d=o.filter(x=>!x.allDay&&!c(x)),h=d.filter(x=>x.start<=e&&x.end>e).sort((x,E)=>E.start-x.start),m=a.filter(x=>!x.allDay&&x.start>e&&!c(x)).sort((x,E)=>x.start-E.start)[0],v=this._visible();if(!this._cals().length)return this._renderNoCalendars();let f=d.filter(x=>x.end>e).length,b=i.length?{text:`${I(Et(e))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${I(Et(e))} \xB7 ${o.length?`${_(o.length,"evento","eventos")} hoje`:"nada hoje"}${f&&f<d.length?` \xB7 ${f} pela frente`:""}`},D;if(h.length){let x=h[0],E=this._cal(x.cal);D=this._ticket(x,{label:"Agora",pill:`termina ${rt(x.end-e)}`,when:n`<b>${M(x.start)}</b> – <b>${M(x.end)}</b> · ${Ct(x.end-x.start)}`,stub:m?n`<span class="tk-next">Depois <b>${M(m.start)}</b> ${m.summary}</span>`:n`<span class="dot"></span><span>${[E&&E.name,x.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e,live:!0})}else if(m){let x=this._cal(m.cal);D=this._ticket(m,{label:"A seguir",pill:rt(m.start-e),when:n`<b>${M(m.start)}</b> – ${M(m.end)} · ${P(m.start,e)?"hoje":H(m.start,e,{long:!1,cap:!1})}`,stub:n`<span class="dot"></span><span>${[x&&x.name,m.location].filter(Boolean).join(" \xB7 ")}</span>`,now:e})}else s||(D=n`<div class="hero-ev ticket empty" style=${z(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,e)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let R=this._showAllDay||l.length<=3?l:l.slice(0,2),K=[];for(let x=1;x<=7;x++){let E=$(t,x),te=ue(a,E).filter(ve=>!(ve.allDay&&ve.start<E));te.length&&K.push({d:E,list:te})}let N=n`<div class="now-line"><span>${M(e)}</span></div>`,L=!1;return n`<section class="page">
      ${this._renderHead("Hoje",b)}
      ${v.length?u:n`<div class="hint-card">${g("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/mais")}>Mostrar</button></div>`}
      ${this._renderMedsPanel()} ${this._renderBillsPanel()}
      ${D||u}
      ${l.length?n`<div class="allday">
            ${R.map(x=>n`<button class="ad-chip" style=${z(this._colorOfEvent(x),this._dark)} @click=${()=>this._openEvent(x)}><span class="dot"></span><span>${x.summary}</span></button>`)}
            ${l.length>R.length?n`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${l.length-R.length} o dia todo</button>`:u}
          </div>`:u}
      ${this._renderTodosPanel()}
      <div class="panel agenda">
        <div class="overline">Hoje · ${W(e,e)}</div>
        ${d.length?d.map(x=>{let E=!L&&x.start>e?(L=!0,N):u;return n`${E}${this._renderRow(x,t)}`}):n`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${d.length&&!L&&d[d.length-1].end<=e?N:u}
        <button class="add-line" @click=${()=>this._openForm({date:t})}>${g("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${K.length?n`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${K.map(({d:x,list:E})=>n`<button class="day-head" @click=${()=>this._openDay(x)}>${H(x,e)}<span>${E.length}</span></button>
                ${E.map(te=>this._renderRow(te,x))}`)}
          </div>`:s?u:n`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
    </section>`}_ticket(e,{label:t,pill:a,when:s,stub:i,now:o,live:c=!1}){return n`<button class="hero-ev ticket ${c?"live":""}" style=${z(this._colorOfEvent(e),this._dark)} @click=${()=>this._openEvent(e)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(e,o,c)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${t}</span><span class="tk-pill">${g("clock","sm")}${a}</span></span>
          <span class="hero-title">${e.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(e,t,a=!1){let o=N=>(N.getHours()%12*60+N.getMinutes())/720*2*Math.PI,c=(N,L)=>[40+L*Math.sin(N),40-L*Math.cos(N)],l=(N,L,x)=>{let E=L-N;for(;E<=0;)E+=2*Math.PI;if(E=Math.max(E,.42),E>=2*Math.PI-.01)return`M 40 ${40-x} A ${x} ${x} 0 1 1 ${39.99} ${40-x}`;let[te,ve]=c(N,x),[ut,gs]=c(N+E,x);return`M ${te.toFixed(2)} ${ve.toFixed(2)} A ${x} ${x} 0 ${E>Math.PI?1:0} 1 ${ut.toFixed(2)} ${gs.toFixed(2)}`},d=Array.from({length:12},(N,L)=>{let x=L/12*2*Math.PI,[E,te]=c(x,L%3?27:24),[ve,ut]=c(x,29);return Bt(E,te,ve,ut,L%3?"tick":"tick major")}),h="",p="",m=t;if(e){let N=e.end-e.start>=432e5;h=N?l(0,2*Math.PI,34):l(o(e.start),o(e.end),34),a&&!N&&(p=l(o(e.start),o(t),34)),m=a?t:e.start}let v=o(m),f=m.getMinutes()/60*2*Math.PI,[b,D]=c(v,15),[R,K]=c(f,23);return n`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${d}
      ${h?fs(h,a?"span faint":"span"):u}
      ${p?fs(p,"span"):u}
      ${Bt(40,40,b,D,"hand hour")}
      ${Bt(40,40,R,K,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return n`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${g("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let e=new Date(this._now),t=this._cursor,a=this._mode,s=this._app("week_start",0),i,o,c;if(a==="mes"||a==="lista")i=`${I(he[t.getMonth()])}${t.getFullYear()!==e.getFullYear()?` ${t.getFullYear()}`:""}`,o=()=>this._cursor=a==="lista"?$(t,-30):oe(t,-1),c=()=>this._cursor=a==="lista"?$(t,30):oe(t,1);else if(a==="semana"){let p=Re(t,s),m=$(p,6);i=p.getMonth()===m.getMonth()?`${p.getDate()}\u2013${m.getDate()} ${he[m.getMonth()].slice(0,3)}`:`${p.getDate()} ${he[p.getMonth()].slice(0,3)} \u2013 ${m.getDate()} ${he[m.getMonth()].slice(0,3)}`,o=()=>this._cursor=$(t,-7),c=()=>this._cursor=$(t,7)}else i=H(t,e),o=()=>this._cursor=$(t,-1),c=()=>this._cursor=$(t,1);let l=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],d;a==="semana"?d=this._renderTimeGrid(Re(t,s),7):a==="dia"?d=this._renderTimeGrid(t,1):a==="lista"?d=this._renderList():d=this._renderMonth();let h=a==="mes"?t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()&&P(t,e):P(t,e);return n`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{o(),this._scrollWeek=!0}}>${g("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{c(),this._scrollWeek=!0}}>${g("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${l.map(([p,m,v])=>n`<button class=${a===p?"on":""} role="tab" aria-selected=${a===p?"true":"false"} @click=${()=>this._setMode(p)}>${g(v)}<span>${m}</span></button>`)}
        </div>
        <button class="pick ${h?"on":""}" @click=${()=>{this._cursor=S(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${d}
    </section>`}_renderMonth(){let e=new Date(this._now),t=this._cursor,a=this._app("week_start",0),s=new Date(t.getFullYear(),t.getMonth(),1),i=Re(s,a),o=$(i,42),c=this._events(i,o),l=[];for(let m=0;m<42;m++){let v=$(i,m),f=ue(c,v);l.push({d:v,list:f})}let d=l[35].d.getMonth()!==t.getMonth()?5:6,h=ue(c,t),p={x:0,y:0};return n`
      <div class="month" @touchstart=${m=>(p.x=m.touches[0].clientX,p.y=m.touches[0].clientY)} @touchend=${m=>{let v=m.changedTouches[0].clientX-p.x,f=m.changedTouches[0].clientY-p.y;Math.abs(v)>60&&Math.abs(f)<50&&(this._cursor=oe(t,v<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(m=>n`<span>${be[(m+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${l.slice(0,d*7).map(({d:m,list:v})=>{let f=m.getMonth()!==t.getMonth(),b=[...new Set(v.map(D=>this._colorOfEvent(D).fill))].slice(0,4);return n`<button class="cell ${f?"out":""} ${P(m,e)?"today":""} ${P(m,t)?"sel":""}" @click=${()=>this._cursor=m} aria-label="${H(m,e)}: ${_(v.length,"evento","eventos")}">
              <span class="num">${m.getDate()}</span>
              <span class="dots">${b.map(D=>n`<i style="background:${D}"></i>`)}${v.length>4?n`<b>+</b>`:u}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${H(t,e)}</span><button class="text-btn" @click=${()=>this._openForm({date:t})}>${g("plus")}Evento</button></div>
        ${h.length?h.map(m=>this._renderRow(m,t)):n`<p class="empty-line">${this._store.loading(i,o)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(e,t){let a=new Date(this._now),s=Array.from({length:t},(p,m)=>$(e,m)),i=this._events(s[0],$(s[t-1],1)),o=Array.from({length:24},(p,m)=>m),c=this._app("week_start",0),l=p=>p.allDay||p.end-p.start>=12*36e5,d=s.map(p=>ue(i,p).filter(l)),h=Math.max(0,...d.map(p=>p.length));return n`
      ${t===7?n`<div class="week-strip">
            ${s.map(p=>n`<button class="ws-day ${P(p,a)?"today":""} ${P(p,this._cursor)?"sel":""}" @click=${()=>this._cursor=p}>
              <span>${be[p.getDay()]}</span><b>${p.getDate()}</b>
            </button>`)}
          </div>`:n`<div class="week-strip day-strip">
            ${Array.from({length:7},(p,m)=>$(Re(this._cursor,c),m)).map(p=>n`<button class="ws-day ${P(p,a)?"today":""} ${P(p,this._cursor)?"sel":""}" @click=${()=>this._cursor=p}><span>${be[p.getDay()]}</span><b>${p.getDate()}</b></button>`)}
          </div>`}
      ${h?n`<div class="tgrid-allday" style="--n:${t}">
            <span class="tg-label">dia todo</span>
            ${d.map(p=>n`<div class="tg-adcol">${p.slice(0,3).map(m=>n`<button class="tg-ad ${m.kind&&this._checkOf(m)?"done":""}" style=${z(this._colorOfEvent(m),this._dark)} @click=${()=>this._openEvent(m)}>${m.summary}</button>`)}${p.length>3?n`<span class="tg-admore">+${p.length-3}</span>`:u}</div>`)}
          </div>`:u}
      <div class="tgrid-scroll">
        <div class="tgrid ${t===1?"one":"week"}" style="--n:${t};--hh:${me}px">
          <div class="tg-hours">${o.map(p=>n`<span style="top:${p*me}px">${p?`${String(p).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(p=>{let m=Ja(ue(i,p).filter(b=>!l(b)),p),v=P(p,a),f=(a.getHours()+a.getMinutes()/60)*me;return n`<div class="tg-col ${v?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let D=b.offsetY;this._openForm({date:p,hour:Math.max(0,Math.min(23,Math.floor(D/me)))})}}>
              ${m.map(({event:b,top:D,height:R,lane:K,lanes:N})=>{let L=Math.max(R*me-2,18);return n`<button class="tg-ev ${L<34?"short":""} ${b.kind&&this._checkOf(b)?"done":""}" style="${z(this._colorOfEvent(b),this._dark)}top:${D*me}px;height:${L}px;left:calc(${K/N*100}% + 1px);width:calc(${100/N}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.kind&&this._checkOf(b)?"\u2713 ":""}${b.summary}</b>${L>=34?n`<small>${M(b.start)}${t===1&&b.location?` \xB7 ${b.location}`:""}</small>`:u}
                </button>`})}
              ${v?n`<i class="tg-now" style="top:${f}px"></i>`:u}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let e=new Date(this._now),t=this._query.trim(),a=zt(t),s,i;a?(s=$(S(e),-365),i=$(S(e),366)):(s=this._cursor,i=$(this._cursor,30));let o=this._events(s,i);a&&(o=o.filter(d=>zt(`${d.summary} ${d.location} ${d.description}`).includes(a)));let c=[];for(let d of o){let h=S(d.start<s?s:d.start),p=c[c.length-1];p&&P(p.d,h)?p.list.push(d):c.push({d:h,list:[d]})}let l=this._store.loading(s,i);return n`
      <label class="search-box">
        ${g("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${d=>this._query=d.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?n`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${g("x")}</button>`:u}
      </label>
      ${a?n`<p class="page-sub" style="margin-top:0">${l?"Buscando\u2026":_(o.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:u}
      ${c.length?n`<div class="panel agenda">
            ${c.map(({d,list:h})=>n`<button class="day-head ${P(d,e)?"today":""}" @click=${()=>this._openDay(d,"dia")}>${H(d,e)}<span>${h.length}</span></button>${h.map(p=>this._renderRow(p,d))}`)}
          </div>`:n`<div class="panel"><div class="empty"><div class="em-icon">${g(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":l?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${k(t,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendarsTab(){let e=this._cals(),t=[];for(let o of e){let c=t.find(l=>l.label===o.group);c?c.list.push(o):t.push({label:o.group,list:[o]})}let a=this._store?this._store.errors():new Map,s=this._writable(),i=this._defaultCal();return n`
      ${t.map(o=>n`<div class="panel">
          <div class="overline">${o.label}</div>
          ${o.list.map(c=>n`<div class="row cal-row ${c.hidden?"off":""}" style=${z(c.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(c)} aria-label="Personalizar ${c.name}">${g(c.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(c)}>
                <div class="label">${c.name}</div>
                <div class="hint">${[c.device,a.get(c.id)?"n\xE3o carregou":c.unavailable?"indispon\xEDvel":c.canCreate?c.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!c.hidden} @change=${l=>this._saveCalPrefs(c.id,{hidden:l.target.checked?null:!0})} aria-label="Mostrar ${c.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      <div class="panel" id="novos-eventos">
        <div class="overline">Novos eventos</div>
        ${s.length?n`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${o=>this._saveAppPrefs({default_calendar:o.target.value})}>
                ${s.map(o=>n`<option value=${o.id} ?selected=${o.id===i}>${o.name}</option>`)}
              </select>
              <span class="field-hint">${g("info")}<span>Onde caem os eventos novos e os que a IA encontrar. Dá para trocar em cada evento.</span></span>
            </label>`:n`<div class="row"><div class="hint" style="white-space:normal">Nenhum calendário aceita eventos novos. Adicione um calendário local logo abaixo.</div></div>`}
      </div>
      ${this._renderAddCalendars()}
    `}_renderAddCalendars(){let e=this._isAdmin(),t=(s,i,o,c)=>n`<button class="row" @click=${c}>
      <span class="tile" style=${z(this._accent(),this._dark)}>${g(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${o}</div></span>
      ${g("chevron-right")}
    </button>`,a=s=>()=>e?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return n`<div class="panel">
      <div class="overline">Adicionar calendários</div>
      ${t("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${t("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${t("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${t("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${t("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(e){this._openSheet("calendar",{id:e.id,name:e.colorId||e.name!==e.origName?e.name:"",color:e.colorId,hidden:e.hidden})}async _saveCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return;let a=(e.name||"").trim();await this._saveCalPrefs(e.id,{name:a&&a!==t.origName?a:null,color:e.color||null,hidden:e.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let e=this._view().tab,t=[["calendarios","Calend\xE1rios","layers"],["avisos","Avisos","bell-ring"],["placar","Placar","trophy"],["integracoes","Integra\xE7\xF5es","blocks"],["dados","Dados","archive"],["aparencia","Apar\xEAncia","palette"]],a=o=>{o!==e&&(this._haptic("light"),this._go(o==="calendarios"?"/mais":`/mais/${o}`,!0))},s,i={text:`CronologIA ${this._version}`};if(e==="avisos")s=this._renderAlertsPanel();else if(e==="placar")s=this._renderScoreSettings();else if(e==="integracoes")s=n`${this._renderGerenciaPanel()} ${this._renderTodosSettings()} ${this._renderAiPanel()}`;else if(e==="dados")s=this._renderDataPanel();else if(e==="aparencia")s=this._renderAppearance();else{s=this._renderCalendarsTab();let o=this._cals(),c=o.filter(l=>l.canCreate).length;i={text:o.length?`${_(o.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${c?_(c,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"}}return n`<section class="page">
      ${this._renderHead("Mais",i)}
      <div class="seg compact more-tabs" role="tablist" aria-label="Seções">
        ${t.map(([o,c,l])=>n`<button class=${e===o?"on":""} role="tab" aria-selected=${e===o?"true":"false"} @click=${()=>a(o)}>${g(l)}<span>${c}</span></button>`)}
      </div>
      <div role="tabpanel" aria-label=${t.find(o=>o[0]===e)[1]}>${s}</div>
      <p class="foot"><b>CronologIA</b><br />v${this._version} · usa os calendários nativos do Home Assistant.</p>
    </section>`}_renderAppearance(){let e=this._app("accent","turquesa"),t=this._app("week_start",0);return n`
      <div class="panel">
        <div class="overline">Aparência</div>
        <div class="row col">
          <div class="label">Tema</div>
          <div class="seg" role="radiogroup" aria-label="Tema">
            ${[["auto","Autom\xE1tico","sun-moon"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([a,s,i])=>n`<button class=${this._theme===a?"on":""} role="radio" aria-checked=${this._theme===a?"true":"false"} @click=${()=>this._setTheme(a)}>${g(i)}${s}</button>`)}
          </div>
          <div class="hint" style="white-space:normal">${this._theme==="auto"?"Segue o modo claro/escuro do Home Assistant.":"Vale s\xF3 para este aparelho."}</div>
        </div>
        <div class="row col">
          <div class="label">Cor do app</div>
          <div class="swatches">
            ${tt.map(a=>n`<button class="sw ${e===a.id?"on":""}" style="--c:${a.fill}" aria-label=${a.label} @click=${()=>this._saveAppPrefs({accent:a.id})}>${e===a.id?g("check"):u}</button>`)}
          </div>
        </div>
        <div class="row col">
          <div class="label">A semana começa no</div>
          <div class="seg" role="radiogroup" aria-label="Início da semana">
            ${[[0,"Domingo"],[1,"Segunda"]].map(([a,s])=>n`<button class=${t===a?"on":""} role="radio" aria-checked=${t===a?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:a})}>${s}</button>`)}
          </div>
        </div>
      </div>

    `}_renderAiPanel(){let e=this._ai||{},t=e.entities||[],a=this._app("ai_entity",""),s=this._aiChecking?"off":e.ready&&e.images?"ok":e.ready?"warn":"bad",i=this._aiChecking?"Verificando\u2026":e.ready&&e.images?"Pronta para ler fotos":e.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",o="";return e.ready&&e.using&&(o=`Usando ${e.using.name}${a?"":" (a IA padr\xE3o do Home Assistant)"}.`,e.photos&&(o+=` Para fotos, ${e.photos.name}.`)),e.reason&&(o=`${o} ${e.reason}`.trim()),n`<div class="panel" id="leitura-ia">
      <div class="overline">Leitura por IA</div>
      <p class="panel-lead">Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.</p>
      <div class="ai-state ${s}"><span class="dot"></span><div><b>${i}</b>${o?n`<span>${o}</span>`:u}</div></div>
      ${t.length||a?n`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${c=>this._chooseAi(c.target.value)}>
              <option value="" ?selected=${!a}>Padrão do Home Assistant</option>
              ${t.map(c=>n`<option value=${c.id} ?selected=${c.id===a}>${c.name}${c.images?"":" (s\xF3 texto)"}${c.available?"":" (indispon\xEDvel)"}</option>`)}
              ${a&&!t.some(c=>c.id===a)?n`<option value=${a} selected>${a} (não encontrada)</option>`:u}
            </select>
            <span class="field-hint">${g("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:u}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${g("rotate-ccw")}Verificar de novo</button></div>
      ${e.ready&&e.images?u:n`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return u;let e=this._form||{},t=u,a=null;if(this._sheet==="event")t=this._renderEventSheet(),a=e.ev&&this._colorOfEvent(e.ev);else if(this._sheet==="form")t=this._renderFormSheet(),a=this._cal(e.cal)&&this._cal(e.cal).color;else if(this._sheet==="scope")t=this._renderScope();else if(this._sheet==="confirm")t=this._renderConfirm();else if(this._sheet==="import")t=this._renderImportSheet(),a=this._cal(e.target)&&this._cal(e.target).color;else if(this._sheet==="calendar"){t=this._renderCalSheet();let i=this._cal(e.id);a=j(e.color)||i&&i.color}else this._sheet==="export"?t=this._renderExportSheet():this._sheet==="outlook"?t=this._renderOutlookSheet():this._sheet==="nocal"?t=this._renderNoCalSheet():this._sheet==="maint"?t=this._renderMaintSheet():this._sheet==="versions"?t=this._renderVersions():this._sheet==="who"?t=this._renderWhoSheet():this._sheet==="todo"?(t=this._renderTodoSheet(),a=j(Ie)):this._sheet==="extra"?t=this._renderExtraSheet():this._sheet==="demerit"?t=this._renderDemeritSheet():this._sheet==="prize"?t=this._renderPrizeSheet():this._sheet==="bill"&&(t=this._renderBillSheet(),a=j("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${Oe(a.fill,this._dark?.18:.14)};${z(a,this._dark)}`:"";return n`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${t}
      </div>
    `}_sheetHead(e,t){return n`<div class="sheet-head">
      ${t?n`<button class="icon-btn back" @click=${t} aria-label="Voltar">${g("chevron-left")}</button>`:u}
      <h3 class="display">${e}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
    </div>`}_renderEventSheet(){let e=this._form.ev,t=new Date(this._now),a=this._cal(e.cal),s;if(e.allDay){let o=$(e.end,-1);s=P(o,e.start)?`${H(e.start,t)} \xB7 dia todo`:`${I(W(e.start,t))} \u2013 ${W(o,t)} \xB7 ${_(F(e.end,e.start),"dia","dias")}`}else P(e.start,e.end)||e.end.getHours()===0&&e.end.getMinutes()===0&&F(e.end,e.start)===1?s=`${H(e.start,t)} \xB7 ${M(e.start)} \u2013 ${M(e.end)} (${Ct(e.end-e.start)})`:s=`${I(W(e.start,t))}, ${M(e.start)} \u2013 ${W(e.end,t)}, ${M(e.end)}`;let i=e.start>t?rt(e.start-t):e.end>t?"acontecendo agora":"";return n`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${e.summary}</h3>
          <p class="ev-cal">${a?a.name:e.cal}${i?n` · <b>${i}</b>`:u}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${g("clock")}<span>${s}</span></div>
        ${e.rrule?n`<div class="fact">${g("repeat")}<span>${$e(e.rrule)}</span></div>`:u}
        ${e.location?n`<a class="fact link" href=${xi(e.location)} target="_blank" rel="noopener noreferrer">${g("map-pin")}<span>${e.location}</span>${g("external-link","sm")}</a>`:u}
        ${e.kind?this._renderKindFacts(e):u}
        ${e.description&&!e.kind?n`<div class="fact notes">${g("file-text")}<span>${at(e.description).map(o=>o.url?n`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`:o.text)}</span></div>`:u}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?n`<p class="sheet-note">${g("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:u}
      <div class="sheet-actions">
        ${a&&a.canDelete&&e.uid?n`<button class="btn danger" @click=${()=>this._askDelete(e)} aria-label="Apagar">${g("trash")}</button>`:u}
        ${this._writable().length?n`<button class="btn outline" @click=${()=>this._openForm({ev:e,copy:!0})}>${g("copy")}Duplicar</button>`:u}
        ${a&&a.canUpdate&&e.uid?n`<button class="btn primary" @click=${()=>this._openForm({ev:e})}>${g("pencil")}Editar</button>`:u}
      </div>
    `}_renderFormSheet(){let e=this._form;if(e.kind)return this._renderKindForm();let t=this._writable(),a=e.mode==="edit"?e.rid?t.filter(v=>v.id===e.cal):t.filter(v=>v.id===e.origCal||this._cal(e.origCal)&&this._cal(e.origCal).canDelete):t,s=new Date,i=[{label:"Hoje",d:S(s)},{label:"Amanh\xE3",d:$(S(s),1)}],o=i.some(v=>y(v.d)===e.date),c=v=>{let f=this.renderRoot.querySelector(v);if(f)try{f.showPicker()}catch{f.focus(),f.click()}},l=v=>{if(!v)return;let f=R=>{let[K,N]=R.split(":").map(Number);return K*60+N},b=Math.max(15,(f(e.end)-f(e.start)+1440)%1440||60),D=(f(v)+b)%1440;this._setForm({start:v,end:`${String(Math.floor(D/60)).padStart(2,"0")}:${String(D%60).padStart(2,"0")}`})},d=v=>{let[f,b]=e.start.split(":").map(Number),D=Math.min(1439,f*60+b+v);this._setForm({end:`${String(Math.floor(D/60)).padStart(2,"0")}:${String(D%60).padStart(2,"0")}`,endDate:""})},h=v=>{let[f,b]=(v||"0:0").split(":").map(Number);return f*60+b},p=(h(e.end)-h(e.start)+1440)%1440,m=!e.allDay&&!e.endDate&&h(e.end)<=h(e.start);return n`
      ${this._sheetHead(e.mode==="add"?"Novo":"Editar evento")}
      ${e.mode==="add"?this._renderModelChips(""):u}
      ${e.mode==="add"?n`<div class="imp-strip">
            <button @click=${()=>this._openImport("text")}>${g("clipboard-paste")}<span>Colar mensagem</span></button>
            <button @click=${()=>this._openImport("photos")}>${g("images")}<span>Escolher fotos</span></button>
            <button @click=${()=>this._openImport("scan")}>${g("scan-text")}<span>Digitalizar com IA</span></button>
          </div>`:u}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${e.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${v=>this._setForm({title:v.target.value})} @keydown=${v=>v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?n`<div class="field">
            <span class="flabel">${e.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(v=>n`<button class="pick list ${e.cal===v.id?"on":""}" style=${z(v.color,this._dark)} @click=${()=>this._setForm({cal:v.id})}><span class="dot"></span><span>${k(v.name,24)}</span></button>`)}</div>
          </div>`:u}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${e.allDay} @change=${v=>this._setForm({allDay:v.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${i.map(v=>n`<button class="pick ${e.date===y(v.d)?"on":""}" @click=${()=>this._setForm({date:y(v.d),endDate:e.endDate&&e.endDate<y(v.d)?"":e.endDate})}>${v.label}</button>`)}
          <button class="pick ${o?"":"on"}" @click=${()=>c("#cr-date")}>
            ${g("calendar")}<span>${o?"Outra data":I(H(A(e.date),s,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${e.date} @change=${v=>v.target.value&&this._setForm({date:v.target.value,endDate:e.endDate&&e.endDate<v.target.value?"":e.endDate})} />
          </button>
        </div>
        ${e.allDay?n`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${e.endDate||e.date} min=${e.date} @change=${v=>this._setForm({endDate:v.target.value>e.date?v.target.value:""})} />
              ${e.endDate?n`<span class="tl">${_(F(A(e.endDate),A(e.date))+1,"dia","dias")}</span>`:n`<span class="tl">um dia</span>`}
            </div>`:n`<div class="time-row">
                <input type="time" .value=${e.start} aria-label="Começa" @change=${v=>l(v.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${e.end} aria-label="Termina" @change=${v=>v.target.value&&this._setForm({end:v.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([v,f])=>n`<button class="pick ${p===v&&!e.endDate?"on":""}" @click=${()=>d(v)}>${f}</button>`)}
              </div>
              ${m?n`<div class="field-hint">${g("info")}<span>Termina no dia seguinte.</span></div>`:u}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="chip-row">${ot.map(v=>n`<button class="pick ${e.repeat===v.id?"on":""}" @click=${()=>this._setForm({repeat:v.id})}>${v.id?g("repeat"):u}<span>${v.label}</span></button>`)}</div>
        ${e.rrule&&Ne(e.rrule)===e.repeat&&$e(e.rrule)!==(ot.find(v=>v.id===e.repeat)||{}).label?n`<div class="field-hint">${g("repeat")}<span>${$e(e.rrule)}</span></div>`:u}
        ${e.rid?n`<div class="field-hint">${g("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:u}
      </div>
      <label class="field">
        <span class="flabel">Local</span>
        <input type="text" .value=${e.location} placeholder="Endereço, sala ou link" @input=${v=>this._setForm({location:v.target.value})} />
      </label>
      <label class="field">
        <span class="flabel">Notas</span>
        <textarea rows="3" .value=${e.notes} placeholder="Detalhes, o que levar…" @input=${v=>this._setForm({notes:v.target.value})}></textarea>
      </label>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn primary" ?disabled=${e.saving||!(e.title||"").trim()} @click=${()=>this._saveForm()}>${e.saving?"Salvando\u2026":e.mode==="add"?"Criar evento":"Salvar"}</button>
      </div>
    `}_renderScope(){let e=this._form,t=e.action==="edit",a=(s,i,o,c=!1)=>n`<button class="imp-opt ${c?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${g(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${o}</small></span>${g("chevron-right")}
    </button>`;return n`
      ${this._sheetHead(t?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${k(e.title,40)}” se repete. O que você quer ${t?"mudar":"apagar"}?</p>
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
    `}_renderImportSheet(){let e=this._form,t=this._ai||{},a=this._writable(),s=this._cal(e.target),i=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},o=e.error?n`<div class="imp-error">${g("circle-alert")}<span>${e.error}</span></div>`:u,c=e.images&&e.images.length?n`<div class="thumbs">${e.images.map(d=>n`<img src=${d.url} alt="" />`)}</div>`:u,l=n`<div class="imp-error soft">${g("sparkles")}<span>${t.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(e.step==="text")return n`
        ${this._sheetHead("Colar mensagem",i)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${e.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${d=>this._setForm({text:d.target.value,error:null})}></textarea>
        </label>
        ${o} ${t.ready?u:l}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._pasteClipboard()}>${g("clipboard-paste")}Colar</button>
          <button class="btn primary" ?disabled=${!(e.text||"").trim()||!t.ready} @click=${()=>this._readText()}>${g("sparkles")}Encontrar eventos</button>
        </div>
        <p class="sheet-note">${t.ready?`${t.using.name} encontra datas, hor\xE1rios e locais, mesmo em mensagens corridas. Voc\xEA revisa antes de adicionar.`:""}</p>
      `;if(e.step==="loading")return n`
        ${this._sheetHead("Lendo\u2026")}
        ${c}
        <div class="imp-loading"><span class="spin">${g("loader-circle")}</span><span>${e.loadingText||"Lendo\u2026"}</span></div>
        <div class="sheet-actions"><button class="btn outline" @click=${()=>(this._importToken=0,this._setForm({step:e.prevStep||"pick"}))}>Cancelar</button></div>
      `;if(e.step==="review"){let d=e.items.filter(m=>m.on&&(m.title||"").trim()).length,h=e.provider==="ics"?`do arquivo ${k(e.fileName||".ics",28)}`:e.provider?`lidos por ${e.provider}`:"",p=new Date;return n`
        ${this._sheetHead("Revisar eventos",i)}
        ${c}
        <p class="sheet-note top">${_(e.items.length,"evento encontrado","eventos encontrados")}${h?` \xB7 ${h}`:""}. Confira datas e horários.</p>
        ${e.note?n`<div class="imp-error soft">${g("sparkles")}<span>${e.note}</span></div>`:u}
        <div class="rv-list">
          ${e.items.map((m,v)=>n`<div class="rv-card ${m.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${m.on?"on":""}" role="checkbox" aria-checked=${m.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(v,{on:!m.on})}>${g("check")}</button>
                <input class="rv-title" type="text" .value=${m.title} aria-label="Título" @input=${f=>this._setItem(v,{title:f.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:e.items.filter((f,b)=>b!==v)})}>${g("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${m.date} aria-label="Data" @change=${f=>f.target.value&&this._setItem(v,{date:f.target.value})} />
                ${m.start?n`<span class="rv-times"><input type="time" .value=${m.start} aria-label="Começa" @change=${f=>this._setItem(v,{start:f.target.value})} /><span>–</span><input type="time" .value=${m.end} aria-label="Termina" @change=${f=>this._setItem(v,{end:f.target.value})} /></span>`:n`<button class="pick ghost" @click=${()=>this._setItem(v,{start:"09:00",end:"10:00"})}>${g("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${I(H(A(m.date),p))}${m.end_date?` at\xE9 ${W(A(m.end_date),p)}`:""}${m.location?` \xB7 ${m.location}`:""}${m.repeat||m.rrule?` \xB7 ${m.rrule?$e(m.rrule):ot.find(f=>f.id===m.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${t.images&&e.provider!=="ics"?n`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${g("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${g("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:u}
        ${a.length>1?n`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${a.map(m=>n`<button class="pick list ${e.target===m.id?"on":""}" style=${z(m.color,this._dark)} @click=${()=>this._setForm({target:m.id})}><span class="dot"></span><span>${k(m.name,24)}</span></button>`)}</div>
            </div>`:u}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!d||e.adding} @click=${()=>this._importAdd()}>
            ${e.adding?"Adicionando\u2026":d?`Adicionar ${_(d,"evento","eventos")}${s&&a.length<=1?` em ${k(s.name,16)}`:""}`:"Nenhum evento marcado"}
          </button>
        </div>
      `}return n`
      ${this._sheetHead("Trazer eventos")}
      <p class="sheet-note top">Crie eventos a partir de uma mensagem, de uma foto (convite, cartaz, cartão de consulta) ou de um arquivo .ics. Você revisa antes de adicionar.</p>
      <div class="imp-options">
        <button class="imp-opt" ?disabled=${!t.ready} @click=${()=>(this._setForm({step:"text",error:null}),this._focusSheetText())}>
          <span class="imp-ic">${g("message-square-text")}</span><span class="imp-tx"><b>Colar mensagem</b><small>WhatsApp, e-mail, convite</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!t.images} @click=${()=>this._pickFiles("photos")}>
          <span class="imp-ic">${g("images")}</span><span class="imp-tx"><b>Escolher fotos</b><small>${this._isHaAndroid()?"Prints e fotos da galeria, uma por vez":"Prints e fotos da galeria (at\xE9 6)"}</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" ?disabled=${!t.images} @click=${()=>this._openCamera()}>
          <span class="imp-ic">${g("scan-text")}</span><span class="imp-tx"><b>Digitalizar com IA</b><small>Fotografe um convite ou cartão de consulta</small></span>${g("chevron-right")}
        </button>
        <button class="imp-opt" @click=${()=>this._pickFiles("ics")}>
          <span class="imp-ic">${g("file-text")}</span><span class="imp-tx"><b>Arquivo .ics</b><small>Convite de e-mail ou exportação de outra agenda</small></span>${g("chevron-right")}
        </button>
      </div>
      ${t.images?u:l}
      ${o}
    `}_renderCalSheet(){let e=this._form,t=this._cal(e.id);if(!t)return this._sheetHead("Calend\xE1rio");let a=j(e.color)||t.color;return n`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${z(a,this._dark)}>
        <span class="tile">${g(t.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(e.name||"").trim()||t.origName}</span><span class="lc-meta">${t.group}${t.device?` \xB7 ${t.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${e.name} placeholder=${t.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${tt.map(s=>n`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?g("check"):u}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${t.canCreate?t.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${t.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!e.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?n`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${t.id}`)}>${g("external-link")}Abrir na tela padrão do HA</button>`:u}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${g("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let e=this._form,t=this._cals(),[a,s]=this._exportRange(e.range),i=e.cals.length?this.api.exportUrl({calendars:e.cals,start:Y(a),end:Y(s)}):null,o=c=>this._setForm({cals:e.cals.includes(c)?e.cals.filter(l=>l!==c):[...e.cals,c]});return n`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${t.map(c=>n`<button class="pick list ${e.cals.includes(c.id)?"on":""}" style=${z(c.color,this._dark)} @click=${()=>o(c.id)}><span class="dot"></span><span>${k(c.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([c,l])=>n`<button class="pick ${e.range===c?"on":""}" @click=${()=>this._setForm({range:c})}>${l}</button>`)}
        </div>
      </div>
      <p class="sheet-note">Cada repetição vira um evento no arquivo. Abre no Google Agenda, no Outlook e no iPhone.</p>
      <div class="sheet-actions">
        ${i&&this.api.exportUrl({calendars:["calendar.x"],start:"a",end:"b"})?n`<a class="btn primary" href=${i} download @click=${()=>setTimeout(()=>this._closeSheet(),300)}>${g("download")}Baixar .ics</a>`:n`<button class="btn primary" ?disabled=${!i} @click=${()=>this._showToast("Na pr\xE9via os arquivos n\xE3o s\xE3o baixados.")}>${g("download")}Baixar .ics</button>`}
      </div>
    `}_renderOutlookSheet(){let e=this._isAdmin();return n`
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
        ${e?n`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${g("chevron-right","sm")}</button>`:u}
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
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${g("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${e.torchOk?n`<button class="cam-btn ${e.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${g("zap")}</button>`:n`<span class="cam-btn ghost"></span>`}
        </div>
        ${e.status==="error"?n`<div class="cam-msg">${g("camera")}<p>${e.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${g("images")}Escolher foto</button></div>`:n`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${e.status==="starting"?"Abrindo a c\xE2mera\u2026":t?`${_(t,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${e.shots.slice(-3).map(a=>n`<img src=${a.url} alt="" />`)}${t>3?n`<span>+${t-3}</span>`:u}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${e.status!=="live"||t>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!t} @click=${()=>this._useShots()}>Pronto${t?` (${t})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return u;let e=this._toast;return n`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${e.text}</span>
      ${e.action?n`<button @click=${()=>{this._toast=null,e.action.run()}}>${e.action.label}</button>`:u}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Yt);var bi=document.getElementById("app"),Wt=document.createElement("cronologia-app");Wt.env=qa();Wt.api=new Ze;bi.replaceChildren(Wt);})();
