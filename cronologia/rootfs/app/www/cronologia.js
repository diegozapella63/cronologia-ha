/* CronologIA · Lit (BSD-3), Lucide icons (ISC), Barlow & Barlow Condensed (OFL) */
window.litDisableBundleWarning=true;
(()=>{var Ot=globalThis,me=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),qe=new WeakMap,Rt=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i,e=this.t;if(me&&t===void 0){let a=e!==void 0&&e.length===1;a&&(t=qe.get(e)),t===void 0&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),a&&qe.set(e,t))}return t}toString(){return this.cssText}},Yt=r=>new Rt(typeof r=="string"?r:r+"",void 0,ve),Ct=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((a,s,i)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new Rt(e,r,ve)},ns=(r,t)=>{if(me)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let a=document.createElement("style"),s=Ot.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=e.cssText,r.appendChild(a)}},je=me?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let a of t.cssRules)e+=a.cssText;return Yt(e)})(r):r,{is:os,defineProperty:ls,getOwnPropertyDescriptor:cs,getOwnPropertyNames:ds,getOwnPropertySymbols:ps,getPrototypeOf:hs}=Object,Wt=globalThis,Ve=Wt.trustedTypes,us=Ve?Ve.emptyScript:"",ms=Wt.reactiveElementPolyfillSupport,yt=(r,t)=>r,pe={toAttribute(r,t){switch(t){case Boolean:r=r?us:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},na=(r,t)=>!os(r,t),Ue={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:na};Symbol.metadata??=Symbol("metadata"),Wt.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(t){this.o(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this.u&&[...this.u.keys()]}static createProperty(t,e=Ue){if(e.state&&(e.attribute=!1),this.o(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let a=Symbol(),s=this.getPropertyDescriptor(t,a,e);s!==void 0&&ls(this.prototype,t,s)}}static getPropertyDescriptor(t,e,a){let{get:s,set:i}=cs(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let o=s?.call(this);i?.call(this,n),this.requestUpdate(t,o,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ue}static o(){if(this.hasOwnProperty(yt("elementProperties")))return;let t=hs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yt("finalized")))return;if(this.finalized=!0,this.o(),this.hasOwnProperty(yt("properties"))){let e=this.properties,a=[...ds(e),...ps(e)];for(let s of a)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[a,s]of e)this.elementProperties.set(a,s)}this.u=new Map;for(let[e,a]of this.elementProperties){let s=this.p(e,a);s!==void 0&&this.u.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let s of a)e.unshift(je(s))}else t!==void 0&&e.push(je(t));return e}static p(t,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this.v=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.m=null,this._()}_(){this.S=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this.$(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this.P??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this.P?.delete(t)}$(){let t=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this.v=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ns(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.P?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this.P?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}C(t,e){let a=this.constructor.elementProperties.get(t),s=this.constructor.p(t,a);if(s!==void 0&&a.reflect===!0){let i=(a.converter?.toAttribute!==void 0?a.converter:pe).toAttribute(e,a.type);this.m=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this.m=null}}_$AK(t,e){let a=this.constructor,s=a.u.get(t);if(s!==void 0&&this.m!==s){let i=a.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:pe;this.m=s;let o=n.fromAttribute(e,i.type);this[s]=o??this.T?.get(s)??o,this.m=null}}requestUpdate(t,e,a,s=!1,i){if(t!==void 0){let n=this.constructor;if(s===!1&&(i=this[t]),a??=n.getPropertyOptions(t),!((a.hasChanged??na)(i,e)||a.useDefault&&a.reflect&&i===this.T?.get(t)&&!this.hasAttribute(n.p(t,a))))return;this.M(t,e,a)}this.isUpdatePending===!1&&(this.S=this.k())}M(t,e,{useDefault:a,reflect:s,wrapped:i},n){a&&!(this.T??=new Map).has(t)&&(this.T.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),s===!0&&this.m!==t&&(this.A??=new Set).add(t))}async k(){this.isUpdatePending=!0;try{await this.S}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this.v){for(let[s,i]of this.v)this[s]=i;this.v=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[s,i]of a){let{wrapped:n}=i,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.M(s,void 0,i,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this.P?.forEach(a=>a.hostUpdate?.()),this.update(e)):this.U()}catch(a){throw t=!1,this.U(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this.P?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}U(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.S}shouldUpdate(t){return!0}update(t){this.A&&=this.A.forEach(e=>this.C(e,this[e])),this.U()}updated(t){}firstUpdated(t){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[yt("elementProperties")]=new Map,G[yt("finalized")]=new Map,ms?.({ReactiveElement:G}),(Wt.reactiveElementVersions??=[]).push("2.1.2");var fe=globalThis,Be=r=>r,Nt=fe.trustedTypes,Ye=Nt?Nt.createPolicy("lit-html",{createHTML:r=>r}):void 0,ge="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+K,vs=`<${xe}>`,rt=document,kt=()=>rt.createComment(""),At=r=>r===null||typeof r!="object"&&typeof r!="function",be=Array.isArray,oa=r=>be(r)||typeof r?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,Ke=/>/g,st=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,Qe=/"/g,la=/^(?:script|style|textarea|title)$/i,$e=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=$e(1),ut=$e(2),ii=$e(3),E=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Xe=new WeakMap,it=rt.createTreeWalker(rt,129);function ca(r,t){if(!be(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ye!==void 0?Ye.createHTML(t):t}var da=(r,t)=>{let e=r.length-1,a=[],s,i=t===2?"<svg>":t===3?"<math>":"",n=wt;for(let o=0;o<e;o++){let c=r[o],p,h,d=-1,u=0;for(;u<c.length&&(n.lastIndex=u,h=n.exec(c),h!==null);)u=n.lastIndex,n===wt?h[1]==="!--"?n=We:h[1]!==void 0?n=Ke:h[2]!==void 0?(la.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=st):h[3]!==void 0&&(n=st):n===st?h[0]===">"?(n=s??wt,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?st:h[3]==='"'?Qe:Je):n===Qe||n===Je?n=st:n===We||n===Ke?n=wt:(n=st,s=void 0);let v=n===st&&r[o+1].startsWith("/>")?" ":"";i+=n===wt?c+vs:d>=0?(a.push(p),c.slice(0,d)+ge+c.slice(d)+K+v):c+K+(d===-2?o:v)}return[ca(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},Mt=class r{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let i=0,n=0,o=t.length-1,c=this.parts,[p,h]=da(t,e);if(this.el=r.createElement(p,a),it.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=it.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(ge)){let u=h[n++],v=s.getAttribute(d).split(K),f=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:f[2],strings:v,ctor:f[1]==="."?Pt:f[1]==="?"?It:f[1]==="@"?Lt:ot}),s.removeAttribute(d)}else d.startsWith(K)&&(c.push({type:6,index:i}),s.removeAttribute(d));if(la.test(s.tagName)){let d=s.textContent.split(K),u=d.length-1;if(u>0){s.textContent=Nt?Nt.emptyScript:"";for(let v=0;v<u;v++)s.append(d[v],kt()),it.nextNode(),c.push({type:2,index:++i});s.append(d[u],kt())}}}else if(s.nodeType===8)if(s.data===xe)c.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(K,d+1))!==-1;)c.push({type:7,index:i}),d+=K.length-1}i++}}static createElement(t,e){let a=rt.createElement("template");return a.innerHTML=t,a}};function nt(r,t,e=r,a){if(t===E)return t;let s=a!==void 0?e.N?.[a]:e.O,i=At(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,e,a)),a!==void 0?(e.N??=[])[a]=s:e.O=s),s!==void 0&&(t=nt(r,s._$AS(r,t.values),s,a)),t}var Ht=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}R(t){let{el:{content:e},parts:a}=this._$AD,s=(t?.creationScope??rt).importNode(e,!0);it.currentNode=s;let i=it.nextNode(),n=0,o=0,c=a[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new Kt(i,i.nextSibling,this,t):c.type===1?p=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(p=new qt(i,this,t)),this._$AV.push(p),c=a[++o]}n!==c?.index&&(i=it.nextNode(),n++)}return it.currentNode=rt,s}V(t){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}},Kt=class pa{get _$AU(){return this._$AM?._$AU??this.D}constructor(t,e,a,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this.D=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),At(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==E&&this.L(t):t._$litType$!==void 0?this.j(t):t.nodeType!==void 0?this.I(t):oa(t)?this.H(t):this.L(t)}B(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}I(t){this._$AH!==t&&(this._$AR(),this._$AH=this.B(t))}L(t){this._$AH!==m&&At(this._$AH)?this._$AA.nextSibling.data=t:this.I(rt.createTextNode(t)),this._$AH=t}j(t){let{values:e,_$litType$:a}=t,s=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=Mt.createElement(ca(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===s)this._$AH.V(e);else{let i=new Ht(s,this),n=i.R(this.options);i.V(e),this.I(n),this._$AH=i}}_$AC(t){let e=Xe.get(t.strings);return e===void 0&&Xe.set(t.strings,e=new Mt(t)),e}H(t){be(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,s=0;for(let i of t)s===e.length?e.push(a=new pa(this.B(kt()),this.B(kt()),this,this.options)):a=e[s],a._$AI(i),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let a=Be(t).nextSibling;Be(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this.D=t,this._$AP?.(t))}},ot=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=m}_$AI(t,e=this,a,s){let i=this.strings,n=!1;if(i===void 0)t=nt(this,t,e,0),n=!At(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{let o=t,c,p;for(t=i[0],c=0;c<i.length-1;c++)p=nt(this,o[a+c],e,c),p===E&&(p=this._$AH[c]),n||=!At(p)||p!==this._$AH[c],p===m?t=m:t!==m&&(t+=(p??"")+i[c+1]),this._$AH[c]=p}n&&!s&&this.W(t)}W(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Pt=class extends ot{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===m?void 0:t}},It=class extends ot{constructor(){super(...arguments),this.type=4}W(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},Lt=class extends ot{constructor(t,e,a,s,i){super(t,e,a,s,i),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??m)===E)return;let a=this._$AH,s=t===m&&a!==m||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==m&&(a===m||s);s&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},qt=class{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}},fs={q:ge,J:K,Z:xe,F:1,G:da,K:Ht,X:oa,Y:nt,tt:Kt,st:ot,it:It,et:Lt,ht:Pt,ot:qt},gs=fe.litHtmlPolyfillSupport;gs?.(Mt,Kt),(fe.litHtmlVersions??=[]).push("3.3.3");var ha=(r,t,e)=>{let a=e?.renderBefore??t,s=a._$litPart$;if(s===void 0){let i=e?.renderBefore??null;a._$litPart$=s=new Kt(t.insertBefore(kt(),i),i,void 0,e??{})}return s._$AI(r),s},we=globalThis;var tt=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this.rt=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.rt=ha(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.rt?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.rt?.setConnected(!1)}render(){return E}};tt._$litElement$=!0,tt.finalized=!0,we.litElementHydrateSupport?.({LitElement:tt});var xs=we.litElementPolyfillSupport;xs?.({LitElement:tt});(we.litElementVersions??=[]).push("4.2.2");var{tt:bs}=fs,Ge=r=>r,$s=r=>r===null||typeof r!="object"&&typeof r!="function";var Ze=(r,t)=>t===void 0?r?._$litType$!==void 0:r?._$litType$===t,ws=r=>r?._$litType$?.h!=null;var ua=r=>r.strings===void 0,ta=()=>document.createComment(""),Z=(r,t,e)=>{let a=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){let i=a.insertBefore(ta(),s),n=a.insertBefore(ta(),s);e=new bs(i,n,r,r.options)}else{let i=e._$AB.nextSibling,n=e._$AM,o=n!==r;if(o){let c;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(c=r._$AU)!==n._$AU&&e._$AP(c)}if(i!==s||o){let c=e._$AA;for(;c!==i;){let p=Ge(c).nextSibling;Ge(a).insertBefore(c,s),c=p}}}return e},X=(r,t,e=r)=>(r._$AI(t,e),r),ys={},St=(r,t=ys)=>r._$AH=t,he=r=>r._$AH,ce=r=>{r._$AR(),r._$AA.remove()},ma=r=>{r._$AR()};var q=r=>(...t)=>({_$litDirective$:r,values:t}),B=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this.nt=t,this._$AM=e,this.ct=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var _t=(r,t)=>{let e=r._$AN;if(e===void 0)return!1;for(let a of e)a._$AO?.(t,!1),_t(a,t);return!0},jt=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while(e?.size===0)},va=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),As(t)}};function _s(r){this._$AN!==void 0?(jt(this),this._$AM=r,va(this)):this._$AM=r}function ks(r,t=!1,e=0){let a=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(a))for(let i=e;i<a.length;i++)_t(a[i],!1),jt(a[i]);else a!=null&&(_t(a,!1),jt(a));else _t(this,r)}var As=r=>{r.type==2&&(r._$AP??=ks,r._$AQ??=_s)},Dt=class extends B{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),va(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(_t(this,t),jt(this))}setValue(t){if(ua(this.nt))this.nt._$AI(t,this);else{let e=[...this.nt._$AH];e[this.ct]=t,this.nt._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Vt=class{constructor(t){this.lt=t}disconnect(){this.lt=void 0}reconnect(t){this.lt=t}deref(){return this.lt}},Ut=class{constructor(){this.ut=void 0,this.dt=void 0}get(){return this.ut}pause(){this.ut??=new Promise(t=>this.dt=t)}resume(){this.dt?.(),this.ut=this.dt=void 0}};var Bt=class extends Dt{constructor(){super(...arguments),this.ft=new Vt(this),this.vt=new Ut}render(t,e){return E}update(t,[e,a]){if(this.isConnected||this.disconnected(),e===this.yt)return E;this.yt=e;let s=0,{ft:i,vt:n}=this;return(async(o,c)=>{for await(let p of o)if(await c(p)===!1)return})(e,async o=>{for(;n.get();)await n.get();let c=i.deref();if(c!==void 0){if(c.yt!==e)return!1;a!==void 0&&(o=a(o,s)),c.commitValue(o,s),s++}return!0}),E}commitValue(t,e){this.setValue(t)}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},ri=q(Bt),ni=q(class extends Bt{constructor(r){if(super(r),r.type!==2)throw Error("asyncAppend can only be used in child expressions")}update(r,t){return this.rt=r,super.update(r,t)}commitValue(r,t){t===0&&ma(this.rt);let e=Z(this.rt);X(e,r)}}),ea=r=>ws(r)?r._$litType$.h:r.strings,oi=q(class extends B{constructor(r){super(r),this.bt=new WeakMap}render(r){return[r]}update(r,[t]){let e=Ze(this.gt)?ea(this.gt):null,a=Ze(t)?ea(t):null;if(e!==null&&(a===null||e!==a)){let s=he(r).pop(),i=this.bt.get(e);if(i===void 0){let n=document.createDocumentFragment();i=ha(m,n),i.setConnected(!1),this.bt.set(e,i)}St(i,[s]),Z(i,void 0,s)}if(a!==null){if(e===null||e!==a){let s=this.bt.get(a);if(s!==void 0){let i=he(s).pop();ma(r),Z(r,void 0,i),St(r,[i])}}this.gt=t}else this.gt=void 0;return this.render(t)}});var li=q(class extends B{constructor(r){if(super(r),r.type!==1||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.wt===void 0){this.wt=new Set,r.strings!==void 0&&(this._t=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!this._t?.has(a)&&this.wt.add(a);return this.render(t)}let e=r.element.classList;for(let a of this.wt)a in t||(e.remove(a),this.wt.delete(a));for(let a in t){let s=!!t[a];s===this.wt.has(a)||this._t?.has(a)||(s?(e.add(a),this.wt.add(a)):(e.remove(a),this.wt.delete(a)))}return E}}),Ms={},ci=q(class extends B{constructor(){super(...arguments),this.St=Ms}render(r,t){return t()}update(r,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.St)&&this.St.length===t.length&&t.every((a,s)=>a===this.St[s]))return E}else if(this.St===t)return E;return this.St=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var di=q(class extends B{constructor(){super(...arguments),this.key=m}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&(St(r),this.key=t),e}}),pi=q(class extends B{constructor(r){if(super(r),r.type!==3&&r.type!==1&&r.type!==4)throw Error("The `live` directive is not allowed on child or event bindings");if(!ua(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===E||t===m)return t;let e=r.element,a=r.name;if(r.type===3){if(t===e[a])return E}else if(r.type===4){if(!!t===e.hasAttribute(a))return E}else if(r.type===1&&e.getAttribute(a)===t+"")return E;return St(r),t}});var de=new WeakMap,hi=q(class extends Dt{render(r){return m}update(r,[t]){let e=t!==this.lt;return e&&this.$t(void 0),(e||this.Tt!==this.xt)&&(this.lt=t,this.Et=r.options?.host,this.$t(this.xt=r.element)),m}$t(r){if(this.lt!==void 0)if(this.isConnected||(r=void 0),typeof this.lt=="function"){let t=this.Et??globalThis,e=de.get(t);e===void 0&&(e=new WeakMap,de.set(t,e)),e.get(this.lt)!==void 0&&this.lt.call(this.Et,void 0),e.set(this.lt,r),r!==void 0&&this.lt.call(this.Et,r)}else this.lt.value=r}get Tt(){return typeof this.lt=="function"?de.get(this.Et??globalThis)?.get(this.lt):this.lt?.value}disconnected(){this.Tt===this.xt&&this.$t(void 0)}reconnected(){this.$t(this.xt)}}),aa=(r,t,e)=>{let a=new Map;for(let s=t;s<=e;s++)a.set(r[s],s);return a},Y=q(class extends B{constructor(r){if(super(r),r.type!==2)throw Error("repeat() can only be used in text expressions")}Ct(r,t,e){let a;e===void 0?e=t:t!==void 0&&(a=t);let s=[],i=[],n=0;for(let o of r)s[n]=a?a(o,n):n,i[n]=e(o,n),n++;return{values:i,keys:s}}render(r,t,e){return this.Ct(r,t,e).values}update(r,[t,e,a]){let s=he(r),{values:i,keys:n}=this.Ct(t,e,a);if(!Array.isArray(s))return this.Pt=n,i;let o=this.Pt??=[],c=[],p,h,d=0,u=s.length-1,v=0,f=i.length-1;for(;d<=u&&v<=f;)if(s[d]===null)d++;else if(s[u]===null)u--;else if(o[d]===n[v])c[v]=X(s[d],i[v]),d++,v++;else if(o[u]===n[f])c[f]=X(s[u],i[f]),u--,f--;else if(o[d]===n[f])c[f]=X(s[d],i[f]),Z(r,c[f+1],s[d]),d++,f--;else if(o[u]===n[v])c[v]=X(s[u],i[v]),Z(r,s[d],s[u]),u--,v++;else if(p===void 0&&(p=aa(n,v,f),h=aa(o,d,u)),p.has(o[d]))if(p.has(o[u])){let b=h.get(n[v]),_=b!==void 0?s[b]:null;if(_===null){let F=Z(r,s[d]);X(F,i[v]),c[v]=F}else c[v]=X(_,i[v]),Z(r,s[d],_),s[b]=null;v++}else ce(s[u]),u--;else ce(s[d]),d++;for(;v<=f;){let b=Z(r,c[f+1]);X(b,i[v]),c[v++]=b}for(;d<=u;){let b=s[d++];b!==null&&ce(b)}return this.Pt=n,St(r,c),E}}),fa="important",Ss=" !"+fa,ui=q(class extends B{constructor(r){if(super(r),r.type!==1||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let a=r[e];return a==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(r,[t]){let{style:e}=r.element;if(this.Mt===void 0)return this.Mt=new Set(Object.keys(t)),this.render(t);for(let a of this.Mt)t[a]==null&&(this.Mt.delete(a),a.includes("-")?e.removeProperty(a):e[a]=null);for(let a in t){let s=t[a];if(s!=null){this.Mt.add(a);let i=typeof s=="string"&&s.endsWith(Ss);a.includes("-")||i?e.setProperty(a,i?s.slice(0,-11):s,i?fa:""):e[a]=s}}return E}}),mi=q(class extends B{constructor(r){if(super(r),r.type!==2)throw Error("templateContent can only be used in child bindings")}render(r){return this.At===r?E:(this.At=r,document.importNode(r.content,!0))}}),ht=class extends B{constructor(t){if(super(t),this.gt=m,t.type!==2)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===m||t==null)return this.kt=void 0,this.gt=t;if(t===E)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.gt)return this.kt;this.gt=t;let e=[t];return e.raw=e,this.kt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ht.directiveName="unsafeHTML",ht.resultType=1;var vi=q(ht);var zt=class extends ht{};zt.directiveName="unsafeSVG",zt.resultType=2;var mt=q(zt),sa=r=>!$s(r)&&typeof r.then=="function",ia=1073741823;var ue=class extends Dt{constructor(){super(...arguments),this.Ot=ia,this.Ut=[],this.ft=new Vt(this),this.vt=new Ut}render(...t){return t.find(e=>!sa(e))??E}update(t,e){let a=this.Ut,s=a.length;this.Ut=e;let i=this.ft,n=this.vt;this.isConnected||this.disconnected();for(let o=0;o<e.length&&!(o>this.Ot);o++){let c=e[o];if(!sa(c))return this.Ot=o,c;o<s&&c===a[o]||(this.Ot=ia,s=0,Promise.resolve(c).then(async p=>{for(;n.get();)await n.get();let h=i.deref();if(h!==void 0){let d=h.Ut.indexOf(c);d>-1&&d<h.Ot&&(h.Ot=d,h.setValue(p))}}))}return E}disconnected(){this.ft.disconnect(),this.vt.pause()}reconnected(){this.ft.reconnect(this),this.vt.resume()}},fi=q(ue);var Ds=Symbol.for(""),zs=r=>{if(r?.r===Ds)return r?._$litStatic$};var ra=new Map,ga=r=>(t,...e)=>{let a=e.length,s,i,n=[],o=[],c,p=0,h=!1;for(;p<a;){for(c=t[p];p<a&&(i=e[p],(s=zs(i))!==void 0);)c+=s+t[++p],h=!0;p!==a&&o.push(i),n.push(c),p++}if(p===a&&n.push(t[a]),h){let d=n.join("$$lit$$");(t=ra.get(d))===void 0&&(n.raw=n,ra.set(d,t=n)),e=o}return r(t,...e)},gi=ga(l),xi=ga(ut);window.litDisableBundleWarning||console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");var J={calendar:'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',"calendar-days":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/>',"calendar-plus":'<path d="M16 18h6"/><path d="M16 2v3"/><path d="M19 15v6"/><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"/><path d="M3 9h18"/><path d="M8 2v3"/>',"calendar-clock":'<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',"calendar-range":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 2v3"/><path d="M3 9h18"/><path d="M8 2v3"/><path d="M17 13h-6"/><path d="M13 17H7"/><path d="M7 13h.01"/><path d="M17 17h.01"/>',"calendar-check":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m9 15 2 2 4-4"/>',"calendar-sync":'<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 018 1.5"/><path d="M16 2v3"/><path d="m21 18-1.535 1.605a5 5 0 01-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517"/><path d="M3 9h4"/><path d="M8 2v3"/>',"calendar-x":'<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="m14 13-4 4"/><path d="m10 13 4 4"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',"clock-3":'<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"layout-grid":'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',"columns-3":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',"clipboard-paste":'<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"scan-text":'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',"message-square-text":'<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',zap:'<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',"wifi-off":'<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',"external-link":'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',"file-text":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',lock:'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',briefcase:'<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',"party-popper":'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',gift:'<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>',pill:'<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',dumbbell:'<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',stethoscope:'<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',heart:'<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',"graduation-cap":'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',baby:'<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>',dog:'<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',sunrise:'<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',sunset:'<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',"list-checks":'<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',receipt:'<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>',wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',"spray-can":'<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',smartphone:'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',"user-round":'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',"bell-ring":'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',syringe:'<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',"paw-print":'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',trophy:'<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"/><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"/><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"/>',crown:'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',award:'<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',minus:'<path d="M5 12h14"/>'};var xa="./fonts/barlow-400.woff2";var ba="./fonts/barlow-500.woff2";var $a="./fonts/barlow-600.woff2";var wa="./fonts/barlow-condensed-500.woff2";var ya="./fonts/barlow-condensed-600.woff2";var _a="./fonts/barlow-condensed-700.woff2";var ka='system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Aa=`"CR Barlow", ${ka}`,Ma=`"CR Barlow Condensed", ${ka}`;function Sa(){if(document.getElementById("cronologia-fonts"))return;let r=(e,a,s)=>`@font-face{font-family:"${e}";src:url(${JSON.stringify(a)}) format("woff2");font-weight:${s};font-style:normal;font-display:swap}`,t=document.createElement("style");t.id="cronologia-fonts",t.textContent=[r("CR Barlow",xa,400),r("CR Barlow",ba,500),r("CR Barlow",$a,"600 900"),r("CR Barlow Condensed",wa,500),r("CR Barlow Condensed",ya,600),r("CR Barlow Condensed",_a,"700 900")].join(`
`),document.head.appendChild(t)}var Da=Ct`
  :host {
    --rv-body: ${Yt(Aa)};
    --rv-display: ${Yt(Ma)};
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
`,za=Ct`
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
`;var Ca=Ct`
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
`;var ye=class{constructor(t,e){this.url=t,this.onStatus=e,this.nextId=1,this.pending=new Map,this.subs=new Set,this.byId=new Map,this.queue=[],this.open=!1,this.everOpened=!1,this.backoff=1e3,this.reconnectHandlers=[],this._connect()}_connect(){let t=new WebSocket(this.url);this.ws=t,t.onopen=()=>{this.open=!0,this.backoff=1e3;let e=this.everOpened;this.everOpened=!0;for(let a of this.subs)this._startSub(a);for(let a of this.queue.splice(0))t.send(a);if(this.onStatus&&this.onStatus(!0),e)for(let a of this.reconnectHandlers)a()},t.onmessage=e=>{let a;try{a=JSON.parse(e.data)}catch{return}if(a.type==="result"){let s=this.pending.get(a.id);if(!s)return;if(this.pending.delete(a.id),a.success)s.resolve(a.result);else{let i=new Error(a.error&&a.error.message||"Falhou");i.code=a.error&&a.error.code,a.error&&a.error.page&&(i.page=a.error.page),s.reject(i)}}else if(a.type==="event"){let s=this.byId.get(a.id);s&&s.cb(a.event)}},t.onclose=()=>{let e=this.open;this.open=!1,this.byId.clear();for(let[,a]of this.pending){let s=new Error("Sem conex\xE3o com o CronologIA");s.code="disconnected",a.reject(s)}this.pending.clear(),e&&this.onStatus&&this.onStatus(!1),setTimeout(()=>this._connect(),this.backoff),this.backoff=Math.min(this.backoff*2,15e3)}}onReconnect(t){this.reconnectHandlers.push(t)}_send(t){let e=JSON.stringify(t);this.open?this.ws.send(e):this.queue.push(e)}sendMessagePromise(t){let e=this.nextId++;return new Promise((a,s)=>{this.pending.set(e,{resolve:a,reject:s}),this._send({...t,id:e})})}subscribeMessage(t,e){let a={cb:t,msg:e,id:null,first:null};this.subs.add(a);let s=new Promise((i,n)=>{a.first={resolve:i,reject:n}});return this.open&&this._startSub(a),s.then(()=>async()=>{this.subs.delete(a),a.id!=null&&(this.byId.delete(a.id),this.open&&this.sendMessagePromise({type:"unsubscribe_events",subscription:a.id}).catch(()=>{}))})}_startSub(t){let e=this.nextId++;t.id=e,this.byId.set(e,t),this.pending.set(e,{resolve:()=>{t.first&&t.first.resolve(),t.first=null},reject:a=>{a.code!=="disconnected"&&(this.byId.delete(e),this.subs.delete(t),t.first&&t.first.reject(a),t.first=null)}}),this.ws.send(JSON.stringify({...t.msg,id:e}))}};function Qt(){try{if(window.parent===window)return null;let r=window.parent.document.querySelector("home-assistant");return r&&r.hass||null}catch{return null}}var Ea=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;function Ta(){let r=Qt();return r&&r.themes&&typeof r.themes.darkMode=="boolean"?r.themes.darkMode:!!(Ea&&Ea.matches)}function Fa(){return{topbar:!(window.parent!==window),haptic(t){try{let e=window.parent;e!==window&&e.dispatchEvent(new e.CustomEvent("haptic",{detail:t}))}catch{}},openInHA(t){try{let e=window.parent;if(e!==window&&e.document){e.history.pushState(null,"",t),e.dispatchEvent(new e.CustomEvent("location-changed",{detail:{replace:!1}}));return}}catch{}window.open(t,"_top")}}}var Jt=class{constructor(){let t=new URL("ws",location.href);t.protocol=location.protocol==="https:"?"wss:":"ws:",this.statusHandlers=[],this.conn=new ye(t.href,e=>this.statusHandlers.forEach(a=>a(e)))}onStatus(t){this.statusHandlers.push(t)}onReconnect(t){this.conn.onReconnect(t)}call(t,e={}){return this.conn.sendMessagePromise({type:t,...e})}bootstrap(){return this.call("cronologia/bootstrap")}registry(){return this.call("cronologia/registry")}subscribeCalendars(t){return this.conn.subscribeMessage(t,{type:"cronologia/subscribe_calendars"})}subscribePrefs(t){return this.conn.subscribeMessage(t,{type:"cronologia/prefs/subscribe"})}subscribeEvents(t,e,a,s){return this.conn.subscribeMessage(s,{type:"calendar/event/subscribe",entity_id:t,start:e,end:a})}listEvents(t,e,a){return this.call("cronologia/events/list",{entity_id:t,start:e,end:a})}createEvent(t,e){return this.call("calendar/event/create",{entity_id:t,event:e})}updateEvent(t,e,a,{recurrenceId:s,range:i}={}){let n={entity_id:t,uid:e,event:a};return s&&(n.recurrence_id=s),i&&(n.recurrence_range=i),this.call("calendar/event/update",n)}deleteEvent(t,e,{recurrenceId:a,range:s}={}){let i={entity_id:t,uid:e};return a&&(i.recurrence_id=a),s&&(i.recurrence_range=s),this.call("calendar/event/delete",i)}setCalendarPrefs(t,e){return this.call("cronologia/prefs/set_calendar",{entity_id:t,prefs:e})}setAppPrefs(t){return this.call("cronologia/prefs/set_app",{prefs:t})}aiStatus(){return this.call("cronologia/ai/status")}subscribeHome(t){return this.conn.subscribeMessage(t,{type:"cronologia/home/subscribe"})}setCheck(t,e,a,s){return this.call("cronologia/check/set",{key:t,done:e,kind:a,...s?{who:s}:{}})}maintDone(t,e,a){return this.call("cronologia/maint/done",{entity_id:t,uid:e,...a?{who:a}:{}})}scoreReassign(t,e){return this.call("cronologia/score/reassign",{key:t,who:e})}scoreExtra(t,e,a){return this.call("cronologia/score/extra",{who:t,points:e,title:a})}scoreRemove(t){return this.call("cronologia/score/remove",{key:t})}scoreReward(t,e){return this.call("cronologia/score/reward",{period:t,text:e})}scoreDelivered(t,e){return this.call("cronologia/score/delivered",{period:t,delivered:e})}maintUndo(t,e){return this.call("cronologia/maint/undo",{entity_id:t,uid:e})}payBill(t,e){return this.call("cronologia/contas/pagar",{conta:t,...e?{valor:e}:{}})}unpayBill(t){return this.call("cronologia/contas/desfazer",{conta:t})}newBill(t){return this.call("cronologia/contas/nova",{conta:t})}testAlert(t){return this.call("cronologia/notify/test",{target:t})}exportUrl({calendars:t,start:e,end:a}){let s=new URL("api/export/ics",location.href);return s.searchParams.set("calendars",t.join(",")),s.searchParams.set("start",e),s.searchParams.set("end",a),s.href}async extract(t){let e=await fetch(new URL("api/extract",location.href),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),a=await e.json().catch(()=>({}));if(!e.ok){let s=new Error(a.error||`Erro ${e.status}`);throw s.code=a.code,s}return a}};var Xt=[{id:"vermelho",label:"Vermelho",fill:"#FF5A4F",ink:"#C42A1F"},{id:"coral",label:"Coral",fill:"#FF8A65",ink:"#C2410C"},{id:"laranja",label:"Laranja",fill:"#FFA23E",ink:"#B45309"},{id:"ouro",label:"Ouro",fill:"#F2C14E",ink:"#8A6100"},{id:"verde",label:"Verde",fill:"#8BD45F",ink:"#3F7A17"},{id:"menta",label:"Menta",fill:"#4ED3A6",ink:"#0E7A57"},{id:"turquesa",label:"Turquesa",fill:"#3CCBDA",ink:"#0B7285"},{id:"azul",label:"Azul",fill:"#62B5FF",ink:"#0B67A8"},{id:"indigo",label:"\xCDndigo",fill:"#8F9BFF",ink:"#3D4BC2"},{id:"lilas",label:"Lil\xE1s",fill:"#B99BFF",ink:"#6D3FD6"},{id:"rosa",label:"Rosa",fill:"#FF77A9",ink:"#BE185D"},{id:"grafite",label:"Grafite",fill:"#B5B9C2",ink:"#4E5560"}],Oa=["turquesa","lilas","laranja","verde","rosa","azul","ouro","coral","menta","indigo","vermelho","grafite"],W=r=>Xt.find(t=>t.id===r),Ra=r=>W(Oa[r%Oa.length]);function Et(r,t){let e=r.replace("#",""),a=parseInt(e.length===3?e.replace(/./g,s=>s+s):e,16);return`rgba(${a>>16&255}, ${a>>8&255}, ${a&255}, ${t})`}function C(r,t,e="c"){return`--${e}:${r.fill};--${e}i:${t?r.fill:r.ink};--${e}s:${Et(r.fill,t?.18:.15)};`}var _e=r=>(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();var A=(r,t,e)=>`${r} ${r===1?t:e}`,D=(r,t=38)=>r&&r.length>t?r.slice(0,t-1).trimEnd()+"\u2026":r||"",P=r=>r&&r.charAt(0).toUpperCase()+r.slice(1);function Na(r){let t=[],e=/https?:\/\/[^\s<>"')]+/g,a=0,s;for(;s=e.exec(r||"");)s.index>a&&t.push({text:r.slice(a,s.index)}),t.push({url:s[0]}),a=s.index+s[0].length;return a<(r||"").length&&t.push({text:r.slice(a)}),t}var Gt=["domingo","segunda","ter\xE7a","quarta","quinta","sexta","s\xE1bado"],ft=["dom","seg","ter","qua","qui","sex","s\xE1b"],lt=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Zt=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],vt=r=>String(r).padStart(2,"0"),y=r=>`${r.getFullYear()}-${vt(r.getMonth()+1)}-${vt(r.getDate())}`,M=r=>`${vt(r.getHours())}:${vt(r.getMinutes())}`,k=r=>{let[t,e,a]=r.split("-").map(Number);return new Date(t,e-1,a)},S=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),w=(r,t)=>{let e=new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds());return e.setDate(e.getDate()+t),e},et=(r,t)=>new Date(r.getFullYear(),r.getMonth()+t,1),R=(r,t)=>r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate(),N=(r,t)=>Math.round((S(r)-S(t))/864e5),Tt=(r,t=0)=>w(S(r),-((r.getDay()-t+7)%7)),ke=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)?k(r):new Date(r);function j(r){let t=-r.getTimezoneOffset(),e=t>=0?"+":"-";return`${y(r)}T${M(r)}:00${e}${vt(Math.floor(Math.abs(t)/60))}:${vt(Math.abs(t)%60)}`}function L(r,t=new Date,{long:e=!0,cap:a=!0}={}){let s=N(r,t),i;return s===0?i="hoje":s===1?i="amanh\xE3":s===-1?i="ontem":(i=`${Gt[r.getDay()]}, ${r.getDate()} de ${e?lt[r.getMonth()]:Zt[r.getMonth()]}`,r.getFullYear()!==t.getFullYear()&&(i+=` de ${r.getFullYear()}`)),a?P(i):i}var Ae=r=>`${Gt[r.getDay()]}, ${r.getDate()} de ${lt[r.getMonth()]}`,V=(r,t=new Date)=>`${r.getDate()} ${Zt[r.getMonth()]}${r.getFullYear()!==t.getFullYear()?` ${r.getFullYear()}`:""}`;function te(r){let t=Math.round(r/6e4);if(t<1)return"agora";if(t<60)return`em ${t} min`;let e=Math.floor(t/60),a=t%60;if(e<24)return a&&e<4?`em ${e} h ${a} min`:`em ${e} h`;let s=Math.round(e/24);return`em ${A(s,"dia","dias")}`}function Me(r){let t=Math.round(r/6e4);if(t<60)return`${t} min`;let e=Math.floor(t/60),a=t%60;return a?`${e} h ${a} min`:`${e} h`}var ee=[{id:"",label:"N\xE3o repete"},{id:"DAILY",label:"Todo dia"},{id:"WEEKLY",label:"Toda semana"},{id:"MONTHLY",label:"Todo m\xEAs"},{id:"YEARLY",label:"Todo ano"}];function gt(r){if(!r)return"";let t=Object.fromEntries(r.replace(/^RRULE:/,"").split(";").map(i=>i.split("="))),e=Number(t.INTERVAL||1),a={DAILY:["Todo dia","dias"],WEEKLY:["Toda semana","semanas"],MONTHLY:["Todo m\xEAs","meses"],YEARLY:["Todo ano","anos"]}[t.FREQ];if(!a)return"Repete";let s=e>1?`A cada ${e} ${a[1]}`:a[0];if(t.BYDAY&&t.FREQ==="WEEKLY"){let i={SU:"dom",MO:"seg",TU:"ter",WE:"qua",TH:"qui",FR:"sex",SA:"s\xE1b"};s+=` (${t.BYDAY.split(",").map(n=>i[n]||n).join(", ")})`}if(t.COUNT)s+=`, ${A(Number(t.COUNT),"vez","vezes")}`;else if(t.UNTIL){let i=/^(\d{4})(\d{2})(\d{2})/.exec(t.UNTIL);i&&(s+=` at\xE9 ${Number(i[3])}/${Number(i[2])}/${i[1]}`)}return s}var Ft=r=>{let t=/FREQ=(\w+)/.exec(r||"");return t?t[1]:""};async function Se(r,t=1800){let e=a=>new Promise((s,i)=>{let n=new FileReader;n.onload=()=>s(String(n.result).split(",")[1]||""),n.onerror=()=>i(n.error),n.readAsDataURL(a)});try{let a=await createImageBitmap(r,{imageOrientation:"from-image"}),s=Math.min(1,t/Math.max(a.width,a.height)),i=document.createElement("canvas");i.width=Math.round(a.width*s),i.height=Math.round(a.height*s),i.getContext("2d").drawImage(a,0,0,i.width,i.height),a.close&&a.close();let n=await new Promise(o=>i.toBlob(o,"image/jpeg",.86));return{mime:"image/jpeg",data:await e(n),url:URL.createObjectURL(n)}}catch{return{mime:r.type||"image/jpeg",data:await e(r),url:URL.createObjectURL(r)}}}var De={remedio:{tag:"#rem\xE9dio",label:"Rem\xE9dio",fields:{dose:"Dose",who:"Quem toma",alert:"Aviso no celular"}},conta:{tag:"#conta",label:"Conta a pagar",fields:{value:"Valor"}},rotina:{tag:"#rotina",label:"Rotina da casa",fields:{who:"Quem faz",points:"Pontos"}},manutencao:{tag:"#manuten\xE7\xE3o",label:"Manuten\xE7\xE3o",fields:{who:"Quem faz",every:"A cada",warn:"Avisar",history:"Feito em",points:"Pontos"}}},Ns={remedio:"remedio",conta:"conta",rotina:"rotina",manutencao:"manutencao"},ae={dias:[1,"dia","dias"],semanas:[7,"semana","semanas"],meses:[30,"m\xEAs","meses"],anos:[365,"ano","anos"]},T=r=>String(r||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(),Ha=r=>String(r).padStart(2,"0");var Ia=(r,t)=>`${r}|${t.uid||t.summary}|${t.recurrence_id||t.start}`;function se(r){let t=String(r||"").replace(/[^\d.,-]/g,"");if(!t)return null;t.includes(",")?t=t.replace(/\./g,"").replace(",","."):/\.\d{3}$/.test(t)&&!/\.\d{1,2}$/.test(t)&&(t=t.replace(/\./g,""));let e=Number(t);return Number.isFinite(e)&&e>0?Math.round(e*100)/100:null}var xt=(r,t=!0)=>r==null?"":r.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:t?2:0,maximumFractionDigits:t?2:0});function Hs(r){let t=/(\d+)\s*([a-zçê]+)/i.exec(T(r));if(!t)return null;let e=Math.max(1,Math.min(999,Number(t[1]))),a=t[2],s=a.startsWith("dia")?"dias":a.startsWith("sem")?"semanas":a.startsWith("mes")?"meses":a.startsWith("ano")?"anos":null;return s?{n:e,unit:s}:null}var bt=r=>r?`${r.n} ${r.n===1?ae[r.unit][1]:ae[r.unit][2]}`:"";function ze(r,t,e=1){let a=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=t.n*e;if(t.unit==="dias")a.setDate(a.getDate()+s);else if(t.unit==="semanas")a.setDate(a.getDate()+7*s);else{let i=t.unit==="anos"?12*s:s,n=a.getDate();a.setDate(1),a.setMonth(a.getMonth()+i);let o=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(n,o))}return a}var Ps=/(\d{1,2})\/(\d{1,2})\/(\d{4})/g;function Is(r){let t=[];for(let e of String(r||"").matchAll(Ps))t.push(`${e[3]}-${Ha(+e[2])}-${Ha(+e[1])}`);return t}var Ls=r=>r.map(t=>`${t.slice(8,10)}/${t.slice(5,7)}/${t.slice(0,4)}`).join(", "),Pa=r=>{let t=/(\d+)/.exec(String(r||""));return t?Math.min(1e3,Number(t[1])):0};function La(r){let t=String(r||"").replace(/\r/g,"").split(`
`),e=0;for(;e<t.length&&!t[e].trim();)e++;let a=/^#\s*([a-z]+)\b/.exec(T(t[e])),s=a&&Ns[a[1]];if(!s)return null;let i=Object.entries(De[s].fields).map(([c,p])=>[c,T(p)]),n={};for(e++;e<t.length;e++){let c=/^([^:]{2,24}):\s*(.*)$/.exec(t[e]);if(!c)break;let p=T(c[1]),h=i.find(([,d])=>d===p||d.startsWith("aviso")&&p.startsWith("aviso"));if(!h)break;n[h[0]]=c[2].trim()}let o={kind:s,notes:t.slice(e).join(`
`).trim()};if(s==="remedio")o.dose=n.dose||"",o.who=n.who||"",o.alert=!/^(nao|desligado|off)/.test(T(n.alert));else if(s==="conta")o.value=se(n.value);else if(s==="rotina")o.who=n.who||"",o.points=Pa(n.points);else{o.who=n.who||"",o.every=Hs(n.every)||{n:6,unit:"meses"};let c=/(\d+)/.exec(n.warn||"");o.warn=c?Math.min(365,Number(c[1])):7,o.history=Is(n.history),o.points=Pa(n.points)}return o}function qa(r){let t=[De[r.kind].tag],e=(i,n)=>{n!=null&&String(n).trim()&&t.push(`${i}: ${String(n).replace(/\s*\n\s*/g," ").trim()}`)},a=De[r.kind].fields;r.kind==="remedio"?(e(a.dose,r.dose),e(a.who,r.who),r.alert===!1&&e(a.alert,"n\xE3o")):r.kind==="conta"?e(a.value,r.value!=null?xt(r.value):""):r.kind==="rotina"?(e(a.who,r.who),r.points>0&&e(a.points,r.points)):(e(a.who,r.who),e(a.every,bt(r.every)),e(a.warn,`${r.warn??7} ${(r.warn??7)===1?"dia":"dias"} antes`),e(a.history,Ls((r.history||[]).slice(0,8))),r.points>0&&e(a.points,r.points));let s=String(r.notes||"").trim();return s?`${t.join(`
`)}
${s}`:t.join(`
`)}var ja=4,qs=300*1e3;function ie(r,t){let e=ke(t.start),a=ke(t.end),s=t.all_day!=null?!!t.all_day:/^\d{4}-\d{2}-\d{2}$/.test(t.start);return{key:Ia(r,t),kind:La(t.description),cal:r,uid:t.uid||null,rid:t.recurrence_id||null,rrule:t.rrule||null,summary:t.summary||"(sem t\xEDtulo)",description:t.description||"",location:t.location||"",allDay:s,start:e,end:a>e?a:w(e,s?1:0),raw:t}}var re=class{constructor(t,e){this.api=t,this.onChange=e,this.windows=[],this.calendars=[],this.noSubscribe=!1,this.version=0}setCalendars(t){let e=[...new Set(t)].sort();if(e.join()!==this.calendars.join()){this.calendars=e;for(let a of this.windows)this._syncWindow(a)}}ensure(t,e){let a=this._covering(t,e);if(a)return a.used=Date.now(),a.cals.size>0&&[...a.cals.values()].every(i=>i.loaded);let s={start:w(S(t),-7),end:w(S(e),8),cals:new Map,used:Date.now()};return this.windows.push(s),this._syncWindow(s),this._gc(),!1}query(t,e,a=this.calendars){let s=this._covering(t,e),i=[];if(!s)return i;for(let n of a){let o=s.cals.get(n);if(o)for(let c of o.events)c.start<e&&c.end>t&&i.push(c)}return i.sort((n,o)=>n.start-o.start||Number(o.allDay)-Number(n.allDay)||n.summary.localeCompare(o.summary,"pt-BR"))}loading(t,e){let a=this._covering(t,e);return!a||[...a.cals.values()].some(s=>!s.loaded)}errors(){let t=new Map;for(let e of this.windows)for(let[a,s]of e.cals)s.error&&t.set(a,s.error);return t}refresh(t){for(let e of this.windows){let a=e.cals.get(t);a&&a.poll&&this._fetch(e,t,a)}}reloadAll(){for(let t of this.windows)for(let[e,a]of t.cals)a.poll&&this._fetch(t,e,a)}dispose(){for(let t of this.windows)for(let[e]of t.cals)this._drop(t,e);this.windows=[]}_covering(t,e){let a=null;for(let s of this.windows)s.start<=t&&s.end>=e&&(!a||s.end-s.start<a.end-a.start)&&(a=s);return a}_changed(){this.version++,this.onChange()}_syncWindow(t){for(let e of this.calendars)t.cals.has(e)||this._add(t,e);for(let e of[...t.cals.keys()])this.calendars.includes(e)||this._drop(t,e)}_add(t,e){let a={events:[],loaded:!1,error:null,unsub:null,poll:null};t.cals.set(e,a);let s=j(t.start),i=j(t.end);if(this.noSubscribe)return this._startPolling(t,e,a);a.unsub=this.api.subscribeEvents(e,s,i,n=>{t.cals.has(e)&&(n&&Array.isArray(n.events)?(a.events=n.events.map(o=>ie(e,o)),a.error=null):a.error="N\xE3o deu para ler os eventos agora",a.loaded=!0,this._changed())}).catch(n=>n&&n.code==="unknown_command"?(this.noSubscribe=!0,this._startPolling(t,e,a)):(a.loaded=!0,a.error=n&&n.message||"N\xE3o deu para ler este calend\xE1rio",this._changed(),null))}_startPolling(t,e,a){return this._fetch(t,e,a),a.poll=setInterval(()=>this._fetch(t,e,a),qs),null}async _fetch(t,e,a){try{let s=await this.api.listEvents(e,j(t.start),j(t.end));if(!t.cals.has(e))return;a.events=(s.events||[]).map(i=>ie(e,i)),a.error=null}catch(s){a.error=s.message}a.loaded=!0,this._changed()}_drop(t,e){let a=t.cals.get(e);a&&(t.cals.delete(e),a.poll&&clearInterval(a.poll),a.unsub&&Promise.resolve(a.unsub).then(s=>typeof s=="function"&&s()).catch(()=>{}))}_gc(){if(!(this.windows.length<=ja)){this.windows.sort((t,e)=>e.used-t.used);for(let t of this.windows.splice(ja))for(let[e]of t.cals)this._drop(t,e)}}};function ct(r,t){let e=S(t),a=w(e,1);return r.filter(s=>s.start<a&&s.end>e)}function Va(r,t){let e=S(t).getTime(),a=e+864e5,s=r.filter(p=>!p.allDay).map(p=>({e:p,s:Math.max(p.start.getTime(),e),t:Math.min(Math.max(p.end.getTime(),p.start.getTime()+15*6e4),a)})).sort((p,h)=>p.s-h.s||h.t-p.t),i=[],n=[],o=-1,c=()=>{let p=[];for(let h of n){let d=p.findIndex(u=>u<=h.s);d<0?(d=p.length,p.push(h.t)):p[d]=h.t,h.lane=d}for(let h of n)i.push({...h,lanes:p.length});n=[]};for(let p of s)n.length&&p.s>=o&&c(),n.push(p),o=Math.max(o,p.t);return n.length&&c(),i.map(p=>({event:p.e,top:(p.s-e)/36e5,height:(p.t-p.s)/36e5,lane:p.lane,lanes:p.lanes}))}var Ce=r=>r.replace(/\\n/gi,`
`).replace(/\\([,;\\])/g,"$1");function js(r){return r.replace(/\r\n/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Vs(r){let t=r.indexOf(":");if(t<0)return null;let e=r.slice(0,t),a=r.slice(t+1),[s,...i]=e.split(";"),n={};for(let o of i){let[c,p]=o.split("=");c&&(n[c.toUpperCase()]=(p||"").replace(/^"|"$/g,""))}return{name:s.toUpperCase(),params:n,value:a}}function Ua(r,t){try{let e=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=Object.fromEntries(e.formatToParts(new Date(t)).map(i=>[i.type,i.value]));return Date.UTC(+a.year,+a.month-1,+a.day,+a.hour%24,+a.minute,+a.second)-t}catch{return null}}function Ba(r){let t=r.value.trim(),e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(t);if(!e)return null;let[,a,s,i,n,o,c,p]=e;if(n==null||r.params.VALUE==="DATE")return{allDay:!0,date:new Date(+a,+s-1,+i)};if(p)return{allDay:!1,date:new Date(Date.UTC(+a,+s-1,+i,+n,+o,+(c||0)))};let h=r.params.TZID;if(h){let d=Date.UTC(+a,+s-1,+i,+n,+o,+(c||0)),u=Ua(h,d);if(u!=null){let v=d-u,f=Ua(h,v);return{allDay:!1,date:new Date(d-(f??u))}}}return{allDay:!1,date:new Date(+a,+s-1,+i,+n,+o,+(c||0))}}function Us(r){let t=/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(r.trim());if(!t)return null;let[,e,a,s,i,n,o]=t,c=((+a||0)*7*86400+(+s||0)*86400+(+i||0)*3600+(+n||0)*60+(+o||0))*1e3;return e==="-"?-c:c}function Ya(r){let t=[],e=null,a=0;for(let i of js(r)){if(/^BEGIN:VEVENT/i.test(i)){e={},a=0;continue}if(!e)continue;if(/^BEGIN:/i.test(i)){a++;continue}if(/^END:VEVENT/i.test(i)){t.push(e),e=null;continue}if(/^END:/i.test(i)){a--;continue}if(a>0)continue;let n=Vs(i);n&&(n.name==="SUMMARY"?e.summary=Ce(n.value):n.name==="DESCRIPTION"?e.description=Ce(n.value):n.name==="LOCATION"?e.location=Ce(n.value):n.name==="DTSTART"?e.dtstart=Ba(n):n.name==="DTEND"?e.dtend=Ba(n):n.name==="DURATION"?e.duration=Us(n.value):n.name==="RRULE"?e.rrule=n.value.trim():n.name==="STATUS"?e.status=n.value.trim().toUpperCase():n.name==="RECURRENCE-ID"&&(e.recurrence=!0))}let s=[];for(let i of t){if(!i.dtstart||i.status==="CANCELLED"||i.recurrence)continue;let n=i.dtstart.date,o=i.dtend?i.dtend.date:i.duration!=null?new Date(n.getTime()+i.duration):null,c=i.dtstart.allDay,p={title:(i.summary||"").trim()||"Evento",date:y(n),start:c?"":M(n),end:"",end_date:"",location:(i.location||"").trim(),notes:(i.description||"").trim().slice(0,4e3),repeat:"",rrule:i.rrule&&/FREQ=(DAILY|WEEKLY|MONTHLY|YEARLY)/.test(i.rrule)?i.rrule:""};if(c){if(o){let h=new Date(o.getFullYear(),o.getMonth(),o.getDate()-1);h>n&&(p.end_date=y(h))}}else o&&o>n&&(p.end=M(o),y(o)!==y(n)&&(p.end_date=y(o)));s.push(p)}return s}var $=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mt(J[r]||J.calendar)}</svg>`,$t={"":{label:"Evento",icon:"calendar"},remedio:{label:"Rem\xE9dio",icon:"pill",verb:"Tomei",done:"tomado"},conta:{label:"Conta",icon:"receipt",verb:"Paguei",done:"paga"},rotina:{label:"Rotina",icon:"spray-can",verb:"Feito",done:"feito"},manutencao:{label:"Manuten\xE7\xE3o",icon:"wrench",verb:"Feito",done:"feita"}},Qa=["SU","MO","TU","WE","TH","FR","SA"],Bs=["D","S","T","Q","Q","S","S"],Ys=[["1x ao dia",["08:00"]],["2x",["08:00","20:00"]],["3x",["08:00","14:00","20:00"]],["De 8 em 8 h",["06:00","14:00","22:00"]]],Ws=[{n:1,unit:"meses"},{n:3,unit:"meses"},{n:6,unit:"meses"},{n:1,unit:"anos"}],Ks=r=>r.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),Ee=r=>(r||"?").trim().charAt(0).toUpperCase(),Wa=r=>r<60?`${r} min`:`${Math.floor(r/60)} h${r%60?` ${r%60} min`:""}`;function Ka(r,t,e){let a=N(k(r),t);return e?"paga":a<-1?`venceu h\xE1 ${a*-1} dias`:a===-1?"venceu ontem":a===0?"vence hoje":a===1?"vence amanh\xE3":`vence em ${a} dias`}function Js(r,t){return r.days<-1?`venceu h\xE1 ${-r.days} dias`:r.days===-1?"venceu ontem":r.days===0?"\xE9 hoje":r.days===1?"amanh\xE3":r.days<=60?`em ${r.days} dias`:`em ${V(k(r.due),t)}`}function Ja(r,t){let e=Object.fromEntries(String(r||"").replace(/^RRULE:/,"").split(";").filter(Boolean).map(n=>n.split("="))),a={freq:"uma",byday:[t.getDay()],interval:3,dur:"sempre",until:y(w(t,30)),days:7},s=Number(e.INTERVAL||1);e.FREQ==="DAILY"?Object.assign(a,s===1?{freq:"diario"}:s===2?{freq:"alternado"}:{freq:"intervalo",interval:s}):e.FREQ==="WEEKLY"?Object.assign(a,{freq:"semana",byday:e.BYDAY?e.BYDAY.split(",").map(n=>Qa.indexOf(n.slice(-2))).filter(n=>n>=0):[t.getDay()]}):e.FREQ==="MONTHLY"?a.freq="mensal":e.FREQ==="YEARLY"&&(a.freq="anual");let i=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?/.exec(e.UNTIL||"");if(i){let n=i[7]?new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],+i[6])):new Date(+i[1],+i[2]-1,+i[3]);Object.assign(a,{dur:"ate",until:y(n)})}return a}var Xa=r=>class extends r{_ix(){return this._home||{meds:[],routines:[],bills:[],maint:[],checks:{},people:[],targets:[],caregivers:[],gerencia:{ligado:!1,contas:[]}}}_checkOf(t){return t.gerencia?t.gerencia.pago?{at:null,by:""}:null:this._ix().checks[t.key]||null}_targetName(t){let e=this._ix().targets.find(a=>a.id===t);return e?e.name:(t||"").replace(/^mobile_app_/,"").replace(/_/g," ")}_gerenciaEvents(t,e){let a=this._home&&this._home.gerencia;return!a||!a.ligado||this._app("gerencia_hidden",!1)?[]:((!this._gEvCache||this._gEvCache.g!==a)&&(this._gEvCache={g:a,list:(a.contas||[]).map(s=>{let i=k(s.vencimento);return{key:`gerencia|${s.id}`,cal:"gerencia",uid:null,rid:null,rrule:null,summary:s.descricao,description:"",location:"",allDay:!0,start:i,end:w(i,1),raw:{},kind:{kind:"conta",value:s.valor},gerencia:s}})}),this._gEvCache.list.filter(s=>s.start<e&&s.end>t))}_billsList(){let t=this._ix(),e=S(new Date(this._now)),a=y(e),s=y(w(e,8)),i=y(w(e,-1)),n=[];for(let o of t.gerencia&&t.gerencia.contas||[]){let c=!o.pago,p=this._paidNow&&this._paidNow.has(o.id);(c?!(o.atrasada||o.vencimento<=s):!p&&!(o.vencimento>=i&&o.vencimento<=s))||n.push({id:o.id,source:"gerencia",title:o.descricao,value:o.valor,due:o.vencimento,paid:!!o.pago,overdue:c&&(o.atrasada||o.vencimento<a),sub:o.tipo==="fatura"?A(o.itens||0,"compra","compras"):o.categoria||"",c:o})}for(let o of t.bills||[]){let c=this._cal(o.cal);n.push({id:o.key,source:"cal",title:o.summary,value:o.value,due:o.due,paid:!!o.paid,overdue:o.overdue,sub:c?c.name:"",item:o})}return n.sort((o,c)=>Number(o.paid)-Number(c.paid)||o.due.localeCompare(c.due)||o.title.localeCompare(c.title,"pt-BR"))}_eventOfItem(t){return ie(t.cal,{start:t.start,end:t.end,summary:t.summary,description:t.description,location:t.location,uid:t.uid,recurrence_id:t.rid,rrule:t.rrule})}_openIndexItem(t){this._openEvent(this._eventOfItem(t))}async _check(t,e){try{await this.api.setCheck(t.key,!0,e),this._haptic("success");let a=$t[e];this._showToast(`${D(t.summary,26)}: ${a.done}`,{label:"Desfazer",run:()=>this.api.setCheck(t.key,!1,e).catch(s=>this._showToast(s.message))})}catch(a){this._showToast(`N\xE3o consegui marcar: ${a.message}`)}}async _undoCheck(t,e){try{await this.api.setCheck(t.key,!1,e),this._haptic("light"),this._showToast(`${D(t.summary,26)}: desmarcado`,{label:"Refazer",run:()=>this.api.setCheck(t.key,!0,e).catch(()=>{})})}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}}async _pay(t){if(t.source==="cal")return this._check(t.item,"conta");try{t.busy=!0,this.requestUpdate(),await this.api.payBill(t.id),(this._paidNow||(this._paidNow=new Set)).add(t.id),this._haptic("success"),this._showToast(`${D(t.title,26)}: paga no GerencIA`,{label:"Desfazer",run:()=>this.api.unpayBill(t.id).catch(e=>this._showToast(e.message))})}catch(e){this._showToast(`O GerencIA n\xE3o deu baixa: ${e.message}`)}}async _unpay(t){if(t.source==="cal")return this._undoCheck(t.item,"conta");try{await this.api.unpayBill(t.id),this._showToast(`${D(t.title,26)}: volta para a pagar`)}catch(e){this._showToast(`N\xE3o consegui: ${e.message}`)}}async _testAlert(t){try{await this.api.testAlert(t),this._showToast(`Aviso de teste enviado para ${this._targetName(t)}`)}catch(e){this._showToast(`N\xE3o foi: ${e.message}`)}}_goAlerts(){this._go("/mais").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#avisos");t&&t.scrollIntoView({block:"start"})}))}_ring(t,e,a=null,s=null){let n=2*Math.PI*15,o=Math.max(0,Math.min(1,t||0));return l`<span class="ring2 ${e}">
        <svg class="rg" viewBox="0 0 36 36" aria-hidden="true">
          <circle class="r-bg" cx="18" cy="18" r=${15}></circle>
          ${o>0?ut`<circle class="r-fg" cx="18" cy="18" r=${15} stroke-dasharray=${`${(o*n).toFixed(2)} ${n.toFixed(2)}`}></circle>`:m}
        </svg>
        ${a!=null?l`<b>${a}</b>`:s||m}
      </span>`}_kindIcon(t){return t.kind?l`<span class="kind-ic">${$($t[t.kind.kind].icon)}</span>`:m}_renderMedsPanel(){let t=this._ix().meds||[];if(!t.length)return m;let e=t.filter(n=>n.taken).length,a=t.filter(n=>n.state==="atrasado"),s=[];for(let n of t){let o=n.who||"",c=s.find(p=>T(p.who)===T(o));c||s.push(c={who:o,list:[],notify:n.notify}),c.list.push(n)}let i=e===t.length;return l`<div class="panel meds ${a.length?"alert":""} ${i?"all":""}" id="remedios-hoje">
        <div class="meds-head">
          <span class="meds-ic">${$("pill")}</span>
          <div class="meds-tt"><div class="overline">Remédios de hoje</div><b>${i?"Tudo tomado":`${e} de ${t.length} ${t.length===1?"tomado":"tomados"}`}</b></div>
          ${this._ring(e/t.length,a.length?"bad":i?"ok":"acc",`${e}/${t.length}`)}
        </div>
        ${a.length?l`<div class="meds-alert" role="alert">${$("triangle-alert")}<span>${a.length===1?l`<b>${a[0].summary}</b>${a[0].who?` de ${a[0].who}`:""} está atrasado ${Wa(a[0].late_min)}`:l`<b>${a.length} doses atrasadas</b>: ${a.map(n=>n.summary).join(", ")}`}</span></div>`:m}
        ${s.map(n=>l`${s.length>1||n.who?l`<div class="meds-who"><span class="avatar">${Ee(n.who)}</span><b>${n.who||"Sem pessoa"}</b><small>${n.list.filter(o=>o.taken).length} de ${n.list.length}</small>${n.notify?l`<span class="who-bell" title="Aviso no celular: ${this._targetName(n.notify)}">${$("bell-ring")}</span>`:m}</div>`:m}
            ${Y(n.list,o=>o.key,o=>this._renderDose(o))}`)}
        ${this._alertsHint(t)}
      </div>`}_renderDose(t){let e=t.state,a=[t.dose,e==="tomado"?`tomou \xE0s ${M(new Date(t.taken.at))}${t.taken.by&&T(t.taken.by)!==T(t.who)?` \xB7 ${t.taken.by}`:""}`:e==="atrasado"?`atrasado ${Wa(t.late_min)}`:e==="agora"?"hora de tomar":""].filter(Boolean).join(" \xB7 ");return l`<div class="dose ${e}">
        <button class="dose-main" @click=${()=>this._openIndexItem(t)}>
          <span class="dose-time">${t.time||"dia"}</span>
          <span class="dose-tx"><b>${t.summary}</b>${a?l`<small>${a}</small>`:m}</span>
        </button>
        ${e==="tomado"?l`<button class="dose-done" @click=${()=>this._undoCheck(t,"remedio")} aria-label="Desmarcar ${t.summary}">${$("check")}</button>`:l`<button class="dose-btn ${e}" @click=${()=>this._check(t,"remedio")}>Tomei</button>`}
      </div>`}_alertsHint(t){let e=this._app("alerts",null)||{};if(e.meds===!1)return l`<button class="panel-foot" @click=${()=>this._goAlerts()}>${$("bell-ring")}<span>Avisos no celular desligados</span>${$("chevron-right")}</button>`;let a=[...new Set(t.filter(o=>o.alert&&!o.notify&&o.who).map(o=>o.who))],s=(e.caregivers||[]).length,i=[...new Set(t.filter(o=>o.alert&&o.notify).map(o=>o.who))],n=a.length&&!s?`Sem celular para ${a.join(", ")}: escolha quem avisar`:i.length?`Avisa no celular de ${i.join(", ")}${s?" e de quem cuida":""}`:"Escolha os celulares que recebem os avisos";return l`<button class="panel-foot ${a.length&&!s?"warn":""}" @click=${()=>this._goAlerts()}>${$("bell-ring")}<span>${n}</span>${$("chevron-right")}</button>`}_renderBillsPanel(){let t=this._billsList();if(!t.length)return m;let e=new Date(this._now),a=t.filter(c=>!c.paid),s=a.filter(c=>c.overdue),i=a.reduce((c,p)=>c+(p.value||0),0),n=this._billsAll?t:t.slice(0,5),o=this._ix().gerencia||{};return l`<div class="panel bills ${s.length?"alert":""}" id="contas">
        <div class="bills-head">
          <span class="overline">Contas a pagar</span>
          ${a.length?l`<span class="bills-sum"><b>${xt(i,!1)}</b><small>${s.length?`${A(s.length,"atrasada","atrasadas")}`:"pr\xF3ximos 8 dias"}</small></span>`:l`<span class="bills-sum"><small>tudo pago</small></span>`}
        </div>
        ${Y(n,c=>c.id,c=>{let p=k(c.due),h=N(p,e)===0;return l`<div class="bill ${c.paid?"paid":c.overdue?"late":h?"today":""}">
            <button class="bill-main" @click=${()=>c.source==="gerencia"?this._openSheet("bill",{b:c}):this._openIndexItem(c.item)}>
              <span class="bill-due"><b>${p.getDate()}</b><small>${Zt[p.getMonth()]}</small></span>
              <span class="bill-tx"><b>${c.title}</b><small>${c.value!=null?l`<span class="bill-val">${xt(c.value)}</span> · `:m}${[Ka(c.due,e,c.paid),c.sub].filter(Boolean).join(" \xB7 ")}</small></span>
            </button>
            ${c.paid?l`<button class="dose-done" @click=${()=>this._unpay(c)} aria-label="Desfazer pagamento de ${c.title}">${$("check")}</button>`:l`<button class="dose-btn ${c.overdue?"atrasado":h?"agora":""}" ?disabled=${c.busy} @click=${()=>this._pay(c)}>Paguei</button>`}
          </div>`})}
        ${t.length>5?l`<button class="add-line" @click=${()=>(this._billsAll=!this._billsAll,this.requestUpdate())}>${$(this._billsAll?"chevron-up":"chevron-down")}${this._billsAll?"Mostrar menos":`Mais ${t.length-5}`}</button>`:m}
        ${o.ligado?l`<div class="panel-foot plain">${$("wallet")}<span>${o.erro?`GerencIA: ${o.erro}`:"Contas do GerencIA: o Paguei daqui d\xE1 baixa l\xE1"}</span></div>`:m}
      </div>`}_renderHomePanel(){let t=this._ix(),e=t.routines||[],a=(t.maint||[]).filter(n=>n.state!=="ok"),s=(t.maint||[]).length;if(!e.length&&!a.length)return s?l`<button class="hint-card maint-ok" @click=${()=>this._openSheet("maint",{})}>${$("wrench")}<span>Manutenção da casa em dia · ${A(s,"item","itens")}</span>${$("chevron-right")}</button>`:m;let i=e.filter(n=>n.done).length;return l`<div class="panel chores" id="casa">
        ${e.length?l`<div class="chores-head"><span class="overline">Rotina da casa</span><small>${i} de ${e.length}</small></div>
              ${Y(e,n=>n.key,n=>l`<div class="chore ${n.done?"done":""}">
                  <button class="chk ${n.done?"on":""}" @click=${()=>n.done?this._undoCheck(n,"rotina"):this._markDone(n,"rotina")} aria-label="${n.done?"Desmarcar":"Marcar"} ${n.summary}">${n.done?$("check"):m}</button>
                  <button class="chore-tx" @click=${()=>this._openIndexItem(n)}><b>${n.summary}</b><small>${[n.yesterday?"ficou de ontem":n.time,n.done?`feito${n.done.by?` por ${n.done.by}`:""}`:n.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
                  ${n.points>0&&this._scoreOn()?l`<span class="pts ${n.done?"got":""}">+${n.points}</span>`:m}
                </div>`)}`:m}
        ${a.length?l`<div class="chores-head ${e.length?"sub":""}"><span class="overline">Manutenção da casa</span></div>
              ${Y(a,n=>n.key,n=>this._renderMaintRow(n))}`:m}
        ${s?l`<button class="add-line" @click=${()=>this._openSheet("maint",{})}>${$("wrench")}Todas as manutenções (${s})</button>`:m}
      </div>`}_renderMaintRow(t){let e=new Date(this._now),a=t.state==="vencida"?"bad":t.state==="perto"?"warn":"ok";return l`<div class="maint ${t.state}">
        <button class="maint-main" @click=${()=>this._openIndexItem(t)}>
          ${this._ring(t.progress,a,null,$("wrench"))}
          <span class="maint-tx"><b>${t.summary}</b><small>${Js(t,e)} · a cada ${bt(t.every)}${t.who?` \xB7 ${t.who}`:""}${t.points>0&&this._scoreOn()?` \xB7 +${t.points}`:""}</small></span>
        </button>
        ${t.canMove?l`<button class="dose-btn ${t.state==="vencida"?"atrasado":t.state==="perto"?"agora":"later"}" @click=${()=>this._maintDone(t)}>Feito</button>`:m}
      </div>`}_renderMaintSheet(){let t=this._ix().maint||[];return l`${this._sheetHead("Manuten\xE7\xE3o da casa")}
        <p class="sheet-note top">O prazo conta a partir da última vez. Cada item aparece na tela Agora alguns dias antes de vencer.</p>
        <div class="maint-list">${t.length?Y(t,e=>e.key,e=>this._renderMaintRow(e)):l`<p class="empty-line">Nenhuma manutenção ainda.</p>`}</div>
        <div class="sheet-actions"><button class="btn primary" @click=${()=>this._openKindForm({kind:"manutencao"})}>${$("plus")}Nova manutenção</button></div>`}_renderKindFacts(t){let e=t.kind,a=new Date(this._now),s=this._checkOf(t),i=[];if(e.kind==="remedio"){e.dose&&i.push(["pill",`Dose: ${e.dose}`]),e.who&&i.push(["user-round",`Quem toma: ${e.who}`]);let c=this._ix().people.find(p=>T(p.name)===T(e.who));i.push(["bell-ring",e.alert?c&&c.notify?`Aviso no celular: ${this._targetName(c.notify)}`:"Aviso no celular: escolha o celular em Mais":"Sem aviso no celular"])}else e.kind==="conta"?e.value!=null&&i.push(["receipt",xt(e.value)]):e.kind==="rotina"?(e.who&&i.push(["user-round",`Quem faz: ${e.who}`]),e.points>0&&i.push(["award",`${e.points} pontos para quem fizer`])):e.kind==="manutencao"&&(e.points>0&&i.push(["award",`${e.points} pontos para quem fizer`]),i.push(["repeat",`A cada ${bt(e.every)}, contando da \xFAltima vez`]),e.who&&i.push(["user-round",`Quem faz: ${e.who}`]),i.push(["bell-ring",`Aparece na Agora ${A(e.warn,"dia","dias")} antes`]),e.history&&e.history.length&&i.push(["check",`Feito em ${e.history.slice(0,4).map(c=>V(k(c),a)).join(", ")}`]));let n=$t[e.kind],o=m;if(e.kind==="manutencao"){let c=(this._ix().maint||[]).find(p=>p.cal===t.cal&&p.uid===t.uid);c&&c.canMove&&(o=l`<button class="btn primary kind-act" @click=${()=>this._maintDone(c)}>${$("check")}Feito hoje</button>`)}else if(t.start<w(S(a),2)){let c={key:t.key,summary:t.summary};o=s?l`<div class="kind-state">${$("circle-check")}<span>${P(n.done)}${s.at?` ${N(new Date(s.at),a)===0?"hoje":V(new Date(s.at),a)} \xE0s ${M(new Date(s.at))}`:""}${s.by?` \xB7 ${s.by}`:""}</span><button class="text-btn" @click=${()=>this._undoCheck(c,e.kind)}>Desfazer</button></div>`:e.kind==="rotina"||e.kind==="manutencao"?l`<button class="btn primary kind-act" @click=${()=>this._closeSheet().then(()=>this._markDone({...c,points:e.points||0},e.kind))}>${$("check")}${n.verb}${e.points>0&&this._scoreOn()?` \xB7 +${e.points}`:""}</button>`:l`<button class="btn primary kind-act" @click=${()=>this._check(c,e.kind).then(()=>this._closeSheet())}>${$("check")}${n.verb}</button>`}return l`${i.map(([c,p])=>l`<div class="fact">${$(c)}<span>${p}</span></div>`)}
        ${e.notes?l`<div class="fact notes">${$("file-text")}<span>${e.notes}</span></div>`:m}
        ${o}`}_renderBillSheet(){let t=this._form.b,e=((this._ix().gerencia||{}).contas||[]).find(i=>i.id===t.id)||t.c,a=new Date(this._now),s=k(e.vencimento);return l`
        <div class="ev-head">
          <span class="ev-swatch"></span>
          <div class="ev-head-text"><h3 class="display">${e.descricao}</h3><p class="ev-cal">GerencIA · <b>${Ka(e.vencimento,a,e.pago)}</b></p></div>
          <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${$("x")}</button>
        </div>
        <div class="ev-facts">
          <div class="fact">${$("receipt")}<span><b>${xt(e.valor)}</b>${e.tipo==="fatura"?` \xB7 ${A(e.itens||0,"compra","compras")} na fatura`:e.tipo==="fixo"?" \xB7 fixo do m\xEAs":""}</span></div>
          <div class="fact">${$("calendar")}<span>${N(s,a)<0?"Venceu":"Vence"} ${L(s,a,{cap:!1})}</span></div>
          ${e.categoria?l`<div class="fact">${$("layers")}<span>${e.categoria}</span></div>`:m}
          ${e.conta?l`<div class="fact">${$("wallet")}<span>${e.conta}</span></div>`:m}
        </div>
        <p class="sheet-note">${$("info")} ${e.pago?"J\xE1 est\xE1 paga no GerencIA.":e.tipo==="fatura"?"Paguei marca todas as compras desta fatura como pagas no GerencIA.":"Paguei d\xE1 baixa no GerencIA, como o Paguei de l\xE1."}</p>
        <div class="sheet-actions">
          ${e.pago?l`<button class="btn outline" @click=${()=>this._unpay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${$("undo-2")}Desfazer pagamento</button>`:l`<button class="btn primary" @click=${()=>this._pay({...t,id:e.id,title:e.descricao,source:"gerencia"}).then(()=>this._closeSheet())}>${$("check")}Paguei</button>`}
        </div>`}_kindCal(t){let e=this._writable(),a={remedio:/rem[eé]dio|medica|sa[uú]de/i,conta:/conta|finan|pagar|boleto/i,rotina:/casa|lar|rotina|tarefa/i,manutencao:/manuten|casa|lar/i}[t];return(a&&e.find(i=>a.test(i.name)&&i.canUpdate)||e.find(i=>i.id===this._defaultCal())||e[0]||{}).id||null}_openKindForm({kind:t="remedio",ev:e=null,copy:a=!1,date:s=null}={}){let i=this._writable(),n=this._ix().gerencia||{};if(!i.length&&!(t==="conta"&&n.ligado)&&!(e&&!a)){this._openSheet("nocal",{});return}let o=S(new Date),c=s?S(s):o,p={mode:"add",kind:t,cal:this._kindCal(t),title:"",date:y(c),times:t==="rotina"?["19:00"]:["08:00"],allDay:t!=="remedio",...Ja(t==="conta"?"":"FREQ=DAILY",c),dose:"",who:"",whoOther:!1,alert:!0,value:"",repeat:"mensal",dest:n.ligado?"gerencia":"cal",categoria:"",every:{n:6,unit:"meses"},last:y(o),warn:7,history:[],points:this._scoreOn()&&(t==="rotina"||t==="manutencao")?t==="rotina"?10:30:0,notes:"",location:""};if(e){let h=e.kind,d=Ja(e.rrule,e.start);p={...p,...d,mode:a?"add":"edit",kind:h.kind,cal:a?this._cal(e.cal)&&this._cal(e.cal).canCreate?e.cal:this._kindCal(h.kind):e.cal,origCal:e.cal,uid:e.uid,rid:a?null:e.rid,title:e.summary,date:y(e.start),times:e.allDay?["09:00"]:[M(e.start)],allDay:e.allDay,dose:h.dose||"",who:h.who||"",alert:h.alert!==!1,value:h.value!=null?String(h.value.toFixed(2)).replace(".",","):"",repeat:d.freq==="mensal"?"mensal":d.freq==="anual"?"anual":"nao",dest:"cal",every:h.every||p.every,warn:h.warn??7,history:h.history||[],last:h.history&&h.history[0]||p.last,points:h.points||0,notes:h.notes||"",location:e.location||""}}this._openSheet("form",p),p.mode==="add"&&this.updateComplete.then(()=>{let h=this.renderRoot.querySelector(".sheet .ev-title-input");h&&h.focus()})}_kindRrule(t,e,a){let s;if(t.freq==="diario")s="FREQ=DAILY";else if(t.freq==="alternado")s="FREQ=DAILY;INTERVAL=2";else if(t.freq==="intervalo")s=`FREQ=DAILY;INTERVAL=${Math.max(2,Math.min(365,Number(t.interval)||3))}`;else if(t.freq==="semana")s=`FREQ=WEEKLY;BYDAY=${[...t.byday].sort().map(i=>Qa[i]).join(",")}`;else if(t.freq==="mensal")s="FREQ=MONTHLY";else return null;if(t.dur!=="sempre"){let i=t.dur==="ate"?k(t.until):w(a,Math.max(1,Number(t.days)||1)-1);if(i<a)throw new Error("A data final \xE9 antes do come\xE7o");s+=e?`;UNTIL=${y(i).replace(/-/g,"")}`:`;UNTIL=${Ks(new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59))}`}return s}_kindEvents(t,{keepRrule:e=!0}={}){let a=(t.title||"").trim();if(!a)throw new Error(t.kind==="remedio"?"Qual \xE9 o rem\xE9dio?":"D\xEA um nome");let s={kind:t.kind,notes:t.notes};if(t.kind==="remedio")Object.assign(s,{dose:t.dose,who:t.who,alert:t.alert});else if(t.kind==="rotina")Object.assign(s,{who:t.who,points:Math.max(0,Math.round(Number(t.points)||0))});else if(t.kind==="conta"){if(s.value=se(t.value),!s.value)throw new Error("Coloque o valor")}else{if(!(t.every&&t.every.n>0))throw new Error("Escolha de quanto em quanto tempo");Object.assign(s,{who:t.who,every:t.every,warn:t.warn,history:t.mode==="edit"?t.history:t.last?[t.last]:[],points:Math.max(0,Math.round(Number(t.points)||0))})}let i={summary:a,description:qa(s)};if((t.location||"").trim()&&(i.location=t.location.trim()),t.kind==="manutencao"){let f=t.mode==="edit"?k(t.date):ze(k(t.last||y(new Date)),t.every);return[{...i,start:y(f),end:y(w(f,1))}]}if(t.kind==="conta"){let f=k(t.date),b={...i,start:y(f),end:y(w(f,1))};return e&&t.repeat!=="nao"&&(b.rrule=t.repeat==="anual"?"FREQ=YEARLY":"FREQ=MONTHLY"),[b]}let n=k(t.date);if(t.freq==="semana"){if(!t.byday.length)throw new Error("Escolha os dias da semana");if(t.mode==="add")for(let f=0;f<7&&!t.byday.includes(n.getDay());f++)n=w(n,1)}let o=t.kind==="rotina"&&t.allDay,c=e?this._kindRrule(t,o,n):null,p=c?{rrule:c}:{};if(o)return[{...i,start:y(n),end:y(w(n,1)),...p}];let h=[...new Set((t.times||[]).filter(f=>/^\d{2}:\d{2}$/.test(f)))].sort();if(!h.length)throw new Error("Escolha o hor\xE1rio");let d=t.kind==="remedio"?15:30,u=f=>{if(t.freq==="alternado")return w(f,2);if(t.freq==="intervalo")return w(f,Math.max(2,Number(t.interval)||3));if(t.freq==="mensal")return new Date(f.getFullYear(),f.getMonth()+1,f.getDate());if(t.freq==="semana"){let b=w(f,1);for(let _=0;_<7&&!t.byday.includes(b.getDay());_++)b=w(b,1);return b}return w(f,1)},v=new Date;return h.map(f=>{let[b,_]=f.split(":").map(Number),F=n;t.mode==="add"&&t.freq!=="uma"&&new Date(F.getFullYear(),F.getMonth(),F.getDate(),b,_)<v&&(F=u(F));let U=new Date(F.getFullYear(),F.getMonth(),F.getDate(),b,_);return{...i,start:j(U),end:j(new Date(U.getTime()+d*6e4)),...p}})}async _saveKindForm(){let t=this._form;if(t.kind==="conta"&&t.dest==="gerencia"&&t.mode==="add"){let n=se(t.value);if(!(t.title||"").trim())return this._showToast("D\xEA um nome \xE0 conta");if(!n)return this._showToast("Coloque o valor");this._setForm({saving:!0});try{await this.api.newBill({descricao:t.title.trim(),valor:n,vencimento:t.date,repete:t.repeat,categoria:t.categoria||""}),this._haptic("success"),this._closeSheet(),this._showToast("Conta criada no GerencIA")}catch(o){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`O GerencIA n\xE3o criou: ${o.message}`)}return}let e;try{e=this._kindEvents(t)}catch(n){this._showToast(n.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");let s=e[0];if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:s});return}this._setForm({saving:!0});let i=$t[t.kind].label;try{if(t.mode==="add"){for(let n of e)await this.api.createEvent(t.cal,n);this._done(e.length>1?`${i} criado: ${e.length} hor\xE1rios em ${D(a.name,20)}`:`${i} criado em ${D(a.name,24)}`,t.cal,s.start)}else t.cal!==t.origCal?(await this.api.createEvent(t.cal,s),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`${i} movido para ${D(a.name,24)}`,t.cal,s.start)):(await this.api.updateEvent(t.cal,t.uid,s),this._done(`${i} salvo`,t.cal,s.start))}catch(n){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${n.message}`)}}_renderModelChips(t){let e=this._form;return l`<div class="model-strip" role="radiogroup" aria-label="Modelo">
        ${Object.entries($t).map(([a,s])=>l`<button class="model ${t===a?"on":""}" role="radio" aria-checked=${t===a?"true":"false"} @click=${()=>{if(t===a)return;let i=e.date?k(e.date):null;a?this._openKindForm({kind:a,date:i}):this._openForm({date:i})}}>${$(s.icon)}<span>${s.label}</span></button>`)}
      </div>`}_dateField(t,e,a,s,{quick:i=!0}={}){let n=new Date,o=S(n),c=i?[["Hoje",y(o)],["Amanh\xE3",y(w(o,1))]]:[],p=c.some(([,h])=>h===e);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${c.map(([h,d])=>l`<button class="pick ${e===d?"on":""}" @click=${()=>a(d)}>${h}</button>`)}
          <button class="pick ${p?"":"on"}" @click=${()=>{let h=this.renderRoot.querySelector(`#${s}`);try{h.showPicker()}catch{h.focus(),h.click()}}}>${$("calendar")}<span>${!p&&e?P(L(k(e),n,{long:!1})):"Outra data"}</span>
            <input id=${s} class="hidden-input" type="date" tabindex="-1" .value=${e} @change=${h=>h.target.value&&a(h.target.value)} />
          </button>
        </div>
      </div>`}_whoField(t){let e=this._form,a=[...new Set([...(this._ix().people||[]).map(i=>i.name),...e.who?[e.who]:[]])],s=a.some(i=>i===e.who);return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">
          ${a.map(i=>l`<button class="pick person ${e.who===i&&!e.whoOther?"on":""}" @click=${()=>this._setForm({who:e.who===i?"":i,whoOther:!1})}><span class="avatar sm">${Ee(i)}</span><span>${i}</span></button>`)}
          <button class="pick ghost ${e.whoOther?"on":""}" @click=${()=>this._setForm({whoOther:!0,who:s?"":e.who})}>${$("plus")}<span>Outra pessoa</span></button>
        </div>
        ${e.whoOther?l`<input type="text" class="who-input" .value=${e.who} placeholder="Nome (pode ser o pet também)" @input=${i=>this._setForm({who:i.target.value})} />`:m}
      </div>`}_freqField(t){let e=this._form,a=[["diario","Todo dia"],["alternado","Dia sim, dia n\xE3o"],["semana","Dias da semana"],["intervalo","A cada\u2026"],...e.kind==="rotina"?[["mensal","Todo m\xEAs"]]:[],["uma","S\xF3 uma vez"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([s,i])=>l`<button class="pick ${e.freq===s?"on":""}" @click=${()=>this._setForm({freq:s})}>${s!=="uma"?$("repeat"):m}<span>${i}</span></button>`)}</div>
        ${e.freq==="semana"?l`<div class="wdp-row" role="group" aria-label="Dias da semana">
              ${[0,1,2,3,4,5,6].map(s=>{let i=e.byday.includes(s);return l`<button class="wdp ${i?"on":""}" aria-pressed=${i?"true":"false"} aria-label=${ft[s]} @click=${()=>this._setForm({byday:i?e.byday.filter(n=>n!==s):[...e.byday,s]})}>${Bs[s]}</button>`})}
            </div>`:m}
        ${e.freq==="intervalo"?l`<div class="time-row"><span class="tl">A cada</span><input type="number" class="num-input" min="2" max="365" .value=${String(e.interval)} @input=${s=>this._setForm({interval:s.target.value})} /><span class="tl">dias</span></div>`:m}
      </div>`}_pointsField(){let t=this._form,e=Number(t.points)||0;return l`<div class="field">
        <span class="flabel">Pontos para quem fizer</span>
        <div class="chip-row">
          ${[0,5,10,20,30,50].map(a=>l`<button class="pick ${e===a?"on":""}" @click=${()=>this._setForm({points:a})}>${a?`+${a}`:"Sem pontos"}</button>`)}
          <input type="number" class="num-input" min="0" max="1000" .value=${String(e)} aria-label="Outro valor de pontos" @input=${a=>this._setForm({points:a.target.value})} />
        </div>
        ${e>0&&!this._scoreOn()?l`<span class="field-hint">${$("trophy")}<span>Os pontos contam quando o placar estiver ligado, na aba <b>Recompensas</b>.</span></span>`:m}
      </div>`}_durField(t){let e=this._form;if(e.freq==="uma")return m;let a=e.kind==="remedio"?[["sempre","Uso cont\xEDnuo"],["dias","Por alguns dias"],["ate","At\xE9 uma data"]]:[["sempre","Sem data para acabar"],["ate","At\xE9 uma data"]];return l`<div class="field">
        <span class="flabel">${t}</span>
        <div class="chip-row">${a.map(([s,i])=>l`<button class="pick ${e.dur===s?"on":""}" @click=${()=>this._setForm({dur:s})}>${i}</button>`)}</div>
        ${e.dur==="dias"?l`<div class="time-row"><span class="tl">Por</span><input type="number" class="num-input" min="1" max="365" .value=${String(e.days)} @input=${s=>this._setForm({days:s.target.value})} /><span class="tl">dias</span></div>`:m}
        ${e.dur==="ate"?l`<div class="time-row"><span class="tl">Até</span><input type="date" .value=${e.until} min=${e.date} @change=${s=>s.target.value&&this._setForm({until:s.target.value})} /></div>`:m}
      </div>`}_calField(){let t=this._form,e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(s=>s.id===t.cal):e.filter(s=>s.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e;return a.length<=1?m:l`<div class="field">
        <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
        <div class="chip-row">${a.map(s=>l`<button class="pick list ${t.cal===s.id?"on":""}" style=${C(s.color,this._dark)} @click=${()=>this._setForm({cal:s.id})}><span class="dot"></span><span>${D(s.name,24)}</span></button>`)}</div>
      </div>`}_renderKindForm(){let t=this._form,e=t.kind,a=$t[e],s=new Date,i=this._ix().gerencia||{},n=e==="conta"&&t.dest==="gerencia"&&t.mode==="add",o={remedio:["Rem\xE9dio","Ex.: Sertralina 50 mg"],conta:["Conta","Ex.: Conta de luz, Internet"],rotina:["Tarefa","Ex.: Regar as plantas, Tirar o lixo"],manutencao:["O que fazer","Ex.: Trocar o filtro de \xE1gua"]}[e],c=l`<label class="field"><span class="flabel">Observações</span><textarea rows="2" .value=${t.notes} placeholder=${e==="remedio"?"Ex.: tomar em jejum, depois do almo\xE7o":"Detalhes"} @input=${h=>this._setForm({notes:h.target.value})}></textarea></label>`,p;if(e==="remedio"){let h=(this._ix().people||[]).find(u=>T(u.name)===T(t.who)),d=t.mode==="add";p=l`
          <label class="field"><span class="flabel">Dose</span><input type="text" .value=${t.dose} placeholder="Ex.: 1 comprimido, 10 gotas, 1 caneta" @input=${u=>this._setForm({dose:u.target.value})} /></label>
          ${this._whoField("Quem toma")}
          <div class="field">
            <span class="flabel">${d?"Hor\xE1rios":"Hor\xE1rio"}</span>
            ${d?l`<div class="chip-row" style="margin-bottom:10px">${Ys.map(([u,v])=>l`<button class="pick ${t.times.join()===v.join()?"on":""}" @click=${()=>this._setForm({times:[...v]})}>${u}</button>`)}</div>`:m}
            <div class="times">
              ${t.times.map((u,v)=>l`<span class="time-pill"><input type="time" .value=${u} aria-label="Horário ${v+1}" @change=${f=>f.target.value&&this._setForm({times:t.times.map((b,_)=>_===v?f.target.value:b)})} />${t.times.length>1?l`<button class="icon-btn mini" aria-label="Tirar horário" @click=${()=>this._setForm({times:t.times.filter((f,b)=>b!==v)})}>${$("x")}</button>`:m}</span>`)}
              ${d&&t.times.length<8?l`<button class="pick ghost" @click=${()=>this._setForm({times:[...t.times,"12:00"]})}>${$("plus")}<span>Horário</span></button>`:m}
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
          <div class="field"><span class="flabel">Repete</span><div class="chip-row">${[["nao","N\xE3o"],["mensal","Todo m\xEAs"],["anual","Todo ano"]].map(([h,d])=>l`<button class="pick ${t.repeat===h?"on":""}" @click=${()=>this._setForm({repeat:h})}>${h!=="nao"?$("repeat"):m}<span>${d}</span></button>`)}</div></div>
          ${i.ligado&&t.mode==="add"?l`<div class="field"><span class="flabel">Onde guardar</span>
                <div class="chip-row">
                  <button class="pick ${t.dest==="gerencia"?"on":""}" @click=${()=>this._setForm({dest:"gerencia"})}>${$("wallet")}<span>GerencIA</span></button>
                  <button class="pick ${t.dest==="cal"?"on":""}" @click=${()=>this._setForm({dest:"cal"})}>${$("calendar")}<span>Só no calendário</span></button>
                </div>
                <span class="field-hint">${$("info")}<span>${t.dest==="gerencia"?"Entra no caixa do GerencIA e aparece aqui na agenda. O Paguei daqui d\xE1 baixa l\xE1.":"Fica s\xF3 no calend\xE1rio, com o Paguei daqui."}</span></span>
              </div>`:m}
          ${n&&(i.categorias||[]).length?l`<label class="field"><span class="flabel">Categoria</span><select class="select" @change=${h=>this._setForm({categoria:h.target.value})}><option value="">Sem categoria</option>${i.categorias.map(h=>l`<option value=${h.id} ?selected=${t.categoria===h.id}>${h.nome}</option>`)}</select></label>`:m}
          ${n?m:l`${this._calField()}${c}`}`;else if(e==="rotina")p=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">Horário</span>
            <div class="chip-row">
              <button class="pick ${t.allDay?"on":""}" @click=${()=>this._setForm({allDay:!0})}>Qualquer hora</button>
              <button class="pick ${t.allDay?"":"on"}" @click=${()=>this._setForm({allDay:!1})}>${$("clock")}<span>Num horário</span></button>
              ${t.allDay?m:l`<input type="time" class="inline-time" .value=${t.times[0]||"19:00"} @change=${h=>h.target.value&&this._setForm({times:[h.target.value]})} aria-label="Horário" />`}
            </div>
          </div>
          ${this._pointsField()}
          ${this._freqField("Repete")}
          ${this._dateField(t.mode==="add"?"Come\xE7a":"Data",t.date,h=>this._setForm({date:h}),"kf-date")}
          ${this._durField("At\xE9 quando")}
          ${this._calField()}
          ${c}`;else{let h=t.mode==="edit"?k(t.date):ze(k(t.last||y(s)),t.every);p=l`
          ${this._whoField("Quem faz")}
          <div class="field"><span class="flabel">A cada</span>
            <div class="chip-row" style="margin-bottom:10px">${Ws.map(d=>l`<button class="pick ${t.every.n===d.n&&t.every.unit===d.unit?"on":""}" @click=${()=>this._setForm({every:{...d}})}>${bt(d)}</button>`)}</div>
            <div class="time-row">
              <input type="number" class="num-input" min="1" max="999" .value=${String(t.every.n)} @input=${d=>this._setForm({every:{...t.every,n:Math.max(1,Number(d.target.value)||1)}})} aria-label="Quantidade" />
              <div class="seg compact">${Object.keys(ae).map(d=>l`<button class=${t.every.unit===d?"on":""} @click=${()=>this._setForm({every:{...t.every,unit:d}})}>${d}</button>`)}</div>
            </div>
            <span class="field-hint">${$("repeat")}<span>Conta a partir da última vez que foi feito: o "Feito" leva a próxima data para hoje + ${bt(t.every)}.</span></span>
          </div>
          ${t.mode==="add"?this._dateField("Feito pela \xFAltima vez",t.last,d=>this._setForm({last:d}),"kf-last",{quick:!1}):this._dateField("Pr\xF3xima vez",t.date,d=>this._setForm({date:d}),"kf-date",{quick:!1})}
          <p class="next-line">${$("calendar-check")}<span>Próxima: <b>${P(L(h,s,{long:!1}))}</b>${N(h,s)>1?` \xB7 em ${A(N(h,s),"dia","dias")}`:""}</span></p>
          ${this._pointsField()}
          <div class="field"><span class="flabel">Mostrar na Agora</span><div class="chip-row">${[3,7,15,30].map(d=>l`<button class="pick ${t.warn===d?"on":""}" @click=${()=>this._setForm({warn:d})}>${d} dias antes</button>`)}</div></div>
          ${this._calField()}
          ${c}`}return l`
        ${this._sheetHead(t.mode==="add"?"Novo":`Editar ${a.label.toLowerCase()}`)}
        ${t.mode==="add"?this._renderModelChips(e):m}
        <label class="field">
          <span class="flabel">${o[0]}</span>
          <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder=${o[1]} @input=${h=>this._setForm({title:h.target.value})}></textarea>
        </label>
        ${p}
        ${t.rid?l`<div class="field-hint">${$("info")}<span>Este item se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:m}
        <div class="sheet-actions">
          <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
          <button class="btn primary" ?disabled=${t.saving||!(t.title||"").trim()} @click=${()=>this._saveKindForm()}>${t.saving?"Salvando\u2026":t.mode==="add"?n?"Criar no GerencIA":`Criar ${a.label.toLowerCase()}`:"Salvar"}</button>
        </div>`}_renderAlertsPanel(){let t=this._ix(),e=this._app("alerts",null)||{},a=e.meds!==!1,s=e.late==null?30:e.late,i=e.caregivers||[],n=t.people||[],o=t.targets||[],c=this._app("people",null)||{},p=d=>this._saveAppPrefs({alerts:{meds:a,late:s,caregivers:i,...d}}),h=(d,u)=>{let v={...c};u?v[d]={notify:u}:delete v[d],this._saveAppPrefs({people:v})};return l`<div class="panel" id="avisos">
        <div class="overline">Avisos de remédio no celular</div>
        <p class="panel-lead">Na hora de cada dose, o celular de quem toma recebe um aviso com <b>Tomei</b> e <b>Adiar 15 min</b>. Se não tomar, avisa de novo, também para quem cuida. Usa o app Home Assistant do celular.</p>
        <div class="row switch-row">
          <div class="grow"><div class="label">Avisar no celular</div><div class="hint">Vale para todos os remédios (dá para desligar em cada um).</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${a} @change=${d=>p({meds:d.target.checked})} aria-label="Avisar no celular" /><span class="track"></span></label>
        </div>
        ${a?l`<div class="field">
                <span class="flabel">Celular de cada pessoa</span>
                ${n.length?n.map(d=>{let u=c[d.name]&&c[d.name].notify;return l`<div class="person-row">
                        <span class="avatar">${Ee(d.name)}</span>
                        <span class="grow"><b>${d.name}</b><small>${d.person?"Pessoa do Home Assistant":"S\xF3 no CronologIA"}</small></span>
                        <select class="select sm" aria-label="Celular de ${d.name}" @change=${v=>h(d.name,v.target.value)}>
                          <option value="" ?selected=${!u}>${d.auto?`Autom\xE1tico: ${this._targetName(d.auto)}`:"Sem celular"}</option>
                          ${o.map(v=>l`<option value=${v.id} ?selected=${u===v.id}>${v.name}</option>`)}
                        </select>
                        ${d.notify?l`<button class="icon-btn" aria-label="Testar aviso para ${d.name}" @click=${()=>this._testAlert(d.notify)}>${$("bell-ring")}</button>`:m}
                      </div>`}):l`<p class="hint">As pessoas do Home Assistant e quem estiver nos remédios aparecem aqui.</p>`}
                ${o.length?m:l`<span class="field-hint">${$("info")}<span>Nenhum celular com o app Home Assistant encontrado (serviços notify.mobile_app_…).</span></span>`}
              </div>
              <div class="field">
                <span class="flabel">Avisar de novo se não tomar</span>
                <div class="chip-row">${[[0,"N\xE3o"],[15,"15 min depois"],[30,"30 min"],[60,"1 hora"]].map(([d,u])=>l`<button class="pick ${s===d?"on":""}" @click=${()=>p({late:d})}>${u}</button>`)}</div>
              </div>
              ${o.length?l`<div class="field">
                    <span class="flabel">Quem cuida</span>
                    <div class="chip-row">${o.map(d=>{let u=i.includes(d.id);return l`<button class="pick ${u?"on":""}" aria-pressed=${u?"true":"false"} @click=${()=>p({caregivers:u?i.filter(v=>v!==d.id):[...i,d.id]})}>${$("smartphone")}<span>${d.name}</span></button>`})}</div>
                    <span class="field-hint">${$("info")}<span>Recebe o aviso de atraso de todos e o aviso na hora de quem não tem celular (criança, pet).</span></span>
                  </div>`:m}`:m}
        <div class="steps-box">
          <b>No Home Assistant</b>
          <p class="data-note">Sensores para painéis e automações: <code>sensor.cronologia_remedios_hoje</code>, <code>binary_sensor.cronologia_remedio_atrasado</code> e <code>sensor.cronologia_manutencoes_vencidas</code>.</p>
          <p class="data-note">Para marcar de fora do app (uma automação, uma etiqueta NFC na geladeira), dispare o evento <code>cronologia_feito</code> com <code>nome: Filtro de água</code>: manutenção, rotina ou remédio de hoje com esse nome ficam feitos.</p>
        </div>
      </div>`}_renderGerenciaPanel(){let t=this._ix().gerencia||{},e=(t.contas||[]).filter(s=>!s.pago).length,a=t.ligado?t.erro?"warn":"ok":"off";return l`<div class="panel" id="gerencia">
        <div class="overline">Contas do GerencIA</div>
        <div class="ai-state ${a}"><span class="dot"></span><div>
          <b>${t.ligado?t.erro?"N\xE3o consegui falar com o GerencIA":`Conectado ao GerencIA ${t.versao||""}`:"GerencIA n\xE3o encontrado"}</b>
          <span>${t.ligado?t.erro||`${A(e,"conta a pagar","contas a pagar")} entre os \xFAltimos 2 meses e os pr\xF3ximos 4. O Paguei daqui d\xE1 baixa l\xE1.`:"Com o GerencIA (o app de finan\xE7as) no mesmo Home Assistant, as contas a pagar, os fixos e as faturas aparecem aqui sozinhos. Nada a configurar."}</span>
        </div></div>
        ${t.ligado?l`<div class="row switch-row">
              <div class="grow"><div class="label">Mostrar no calendário</div><div class="hint">As contas aparecem no dia do vencimento, além do card da Agora.</div></div>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!this._app("gerencia_hidden",!1)} @change=${s=>this._saveAppPrefs({gerencia_hidden:s.target.checked?null:!0})} aria-label="Mostrar contas no calendário" /><span class="track"></span></label>
            </div>`:m}
      </div>`}};var Fe={semana:{label:"Semanal",noun:"semana"},quinzena:{label:"Quinzenal",noun:"quinzena"},mes:{label:"Mensal",noun:"m\xEAs"}};var Te=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],Qs=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];var Ga=r=>{let[t,e,a]=String(r).slice(0,10).split("-").map(Number);return new Date(t,e-1,a)};function Oe(r,t,e){let a=typeof r=="string"?Ga(r):r,s=typeof t=="string"?Ga(t):t,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-1);return e==="mes"?`${Qs[a.getMonth()].replace(/^./,n=>n.toUpperCase())}${a.getFullYear()!==new Date().getFullYear()?` de ${a.getFullYear()}`:""}`:a.getMonth()===i.getMonth()?`${a.getDate()} a ${i.getDate()} de ${Te[i.getMonth()]}`:`${a.getDate()} ${Te[a.getMonth()]} a ${i.getDate()} ${Te[i.getMonth()]}`}var H=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mt(J[r]||J.calendar)}</svg>`,Za=["turquesa","rosa","laranja","lilas","verde","azul","ouro","coral","menta","indigo"],at=r=>(r||"?").trim().charAt(0).toUpperCase(),Xs={semana:"semana",quinzena:"quinzena",mes:"m\xEAs"},ts={semana:"desta semana",quinzena:"desta quinzena",mes:"deste m\xEAs"},Re={semana:"da pr\xF3xima semana",quinzena:"da pr\xF3xima quinzena",mes:"do pr\xF3ximo m\xEAs"},Gs={semana:"Semana passada",quinzena:"Quinzena passada",mes:"M\xEAs passado"},es=r=>class extends r{_score(){return this._ix().score||null}_scoreOn(){let t=this._score();return!!(t&&t.enabled&&t.participants.length)}_participant(t){let e=this._score();if(!e||!t)return"";let a=T(t);return e.participants.find(s=>T(s)===a||T(s).split(" ")[0]===a.split(" ")[0])||""}_pColor(t){let e=this._score(),a=e?Math.max(0,e.participants.findIndex(s=>T(s)===T(t))):0;return W(Za[a%Za.length])}_me(){return this._user&&this._user.person||""}_withWho(t,e,a){if(!this._scoreOn()||!(t>0))return a("");let s=this._participant(this._me());return s?a(s):this._openSheet("who",{points:t,title:e,run:a})}_doneToast(t,e,a,{reassignKey:s,undo:i}){let n=this._scoreOn()&&e&&a>0?this._score().participants.filter(c=>T(c)!==T(e)):[],o=e&&a>0?`Feito por ${e} \xB7 +${a}`:`${D(t.summary,26)}: feito`;if(n.length===1&&s){let c=n[0];this._showToast(o,{label:`Foi ${c}`,run:()=>this.api.scoreReassign(s,c).then(()=>this._showToast(`Pontos para ${c}`)).catch(p=>this._showToast(p.message))})}else n.length>1&&s?this._showToast(o,{label:"Trocar",run:()=>this._openSheet("who",{points:a,title:t.summary,run:c=>this.api.scoreReassign(s,c).then(()=>this._closeSheet())})}):this._showToast(o,i?{label:"Desfazer",run:i}:null)}_markDone(t,e){return this._withWho(t.points||0,t.summary,async a=>{this._sheet==="who"&&await this._closeSheet();try{await this.api.setCheck(t.key,!0,e,a),this._haptic("success"),this._doneToast(t,a,t.points||0,{reassignKey:t.key,undo:()=>this.api.setCheck(t.key,!1,e).catch(s=>this._showToast(s.message))})}catch(s){this._showToast(`N\xE3o consegui marcar: ${s.message}`)}})}_maintDone(t){return this._withWho(t.points||0,t.summary,async e=>{this._sheet&&await this._closeSheet();try{let a=await this.api.maintDone(t.cal,t.uid,e);this._haptic("success");let s=a&&a.next?`Pr\xF3xima em ${V(k(a.next),new Date(this._now))}`:"";a&&a.key?this._doneToast(t,e,t.points,{reassignKey:a.key}):this._showToast(s?`Feito. ${s}`:"Feito",a&&a.undo?{label:"Desfazer",run:()=>this.api.maintUndo(t.cal,t.uid).catch(i=>this._showToast(i.message))}:null)}catch(a){this._showToast(`N\xE3o consegui: ${a.message}`)}})}_renderWhoSheet(){let t=this._form,e=this._score()||{participants:[]};return l`${this._sheetHead("Quem fez?")}
        <p class="sheet-note top">${D(t.title||"",40)}${t.points?l` · <b>+${t.points} pontos</b>`:m}</p>
        <div class="who-grid">
          ${e.participants.map(a=>l`<button class="who-btn" style=${C(this._pColor(a),this._dark)} @click=${()=>t.run(a)}>
              <span class="avatar xl">${at(a)}</span><b>${a}</b>
            </button>`)}
        </div>
        <button class="btn outline" style="width:100%" @click=${()=>t.run("")}>Ninguém do placar (sem pontos)</button>`}_renderRewards(){let t=this._score();if(!t||!t.enabled||!t.participants.length)return this._renderRewardsSetup();let e=new Date(this._now),a=t.current,s=N(k(a.end),e),i=s<=1?"fecha hoje \xE0 meia-noite":`fecha em ${A(s,"dia","dias")}`,n=t.leader,o=t.rows.reduce((c,p)=>c+p.points,0);return l`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:`${P(Xs[t.period])} de ${a.label} \xB7 ${i}`})}
        ${this._renderLastResult(t)}
        <div class="panel board">
          ${t.rows.length===2?this._renderDuel(t,o):this._renderRanking(t)}
          <div class="board-foot">${n?l`${H("crown")}<span><b>${n}</b> na frente${t.rows[1]?` por ${A(t.rows[0].points-t.rows[1].points,"ponto","pontos")}`:""}</span>`:l`<span>${o?"Empatados":"Ningu\xE9m pontuou ainda"}</span>`}</div>
        </div>
        ${this._renderPrize(t)}
        ${this._renderToScore()}
        ${this._renderFeed(t)}
        ${this._renderHistory(t)}
        ${this._renderScoreSettings(t)}
      </section>`}_renderDuel(t,e){let[a,s]=t.participants.map(o=>t.rows.find(c=>c.name===o)||{name:o,points:0,count:0}),i=e?a.points/e:.5,n=(o,c)=>l`<div class="duel-side ${c?"right":""} ${t.leader===o.name?"lead":""}" style=${C(this._pColor(o.name),this._dark)}>
        <span class="avatar xl">${at(o.name)}${t.leader===o.name?l`<span class="crown">${H("crown")}</span>`:m}</span>
        <b class="duel-name">${o.name}</b>
        <span class="duel-pts">${o.points}</span>
        <small>${A(o.count,"tarefa","tarefas")}</small>
      </div>`;return l`<div class="duel">
          ${n(a,!1)}
          <span class="duel-x">×</span>
          ${n(s,!0)}
        </div>
        <div class="tug" style="--a:${this._pColor(a.name).fill};--b:${this._pColor(s.name).fill}" role="img" aria-label="${a.name} ${a.points} pontos, ${s.name} ${s.points} pontos">
          <span style="width:${(i*100).toFixed(1)}%"></span>
        </div>`}_renderRanking(t){let e=Math.max(1,...t.rows.map(a=>a.points));return l`<div class="ranking">
        ${t.rows.map((a,s)=>l`<div class="rank-row ${t.leader===a.name?"lead":""}" style=${C(this._pColor(a.name),this._dark)}>
            <span class="rank-n">${s+1}</span><span class="avatar">${at(a.name)}</span>
            <span class="rank-main"><b>${a.name}</b><span class="rank-bar"><i style="width:${(a.points/e*100).toFixed(1)}%"></i></span></span>
            <span class="rank-pts">${a.points}</span>
          </div>`)}
      </div>`}_renderLastResult(t){let e=t.history&&t.history[0];if(!e||e.delivered)return m;let a=new Date(this._now);if(N(a,k(e.end))>14)return m;let s=Object.values(e.totals||{}).join(" \xD7 ");return l`<div class="result-card ${e.winner?"":"tie"}" style=${e.winner?C(this._pColor(e.winner),this._dark):""}>
        <span class="result-ic">${H("trophy")}</span>
        <div class="result-tx">
          <span class="overline">${Gs[t.period]} · ${Oe(e.start,e.end,t.period)}</span>
          <b>${e.winner?`${e.winner} venceu`:"Empate"} <span class="result-score">${s}</span></b>
          ${e.reward?l`<small>${e.winner?"Pr\xEAmio":"Pr\xEAmio em jogo"}: ${e.reward}</small>`:m}
        </div>
        ${e.winner&&e.reward?l`<button class="dose-btn agora" @click=${()=>this._setDelivered(e.key,!0)}>Entregue</button>`:l`<button class="icon-btn" aria-label="Fechar" @click=${()=>this._setDelivered(e.key,!0)}>${H("x")}</button>`}
      </div>`}_renderPrize(t){let e=this._rwEdit,a=(s,i)=>l`<div class="prize-edit">
        <input type="text" id="rw-input" .value=${i.reward||""} placeholder="Ex.: escolher o restaurante de domingo" maxlength="200" @keydown=${n=>n.key==="Enter"&&this._saveReward(i.key,n.target.value)} />
        <div class="btn-row"><button class="btn outline sm" @click=${()=>(this._rwEdit=null,this.requestUpdate())}>Cancelar</button><button class="btn primary sm" @click=${()=>this._saveReward(i.key,this.renderRoot.querySelector("#rw-input").value)}>Salvar</button></div>
      </div>`;return l`<div class="panel prize ${t.current.reward?"set":""}">
        <div class="prize-head">
          <span class="prize-ic">${H("trophy")}</span>
          <div class="prize-tx">
            <span class="overline">Prêmio ${ts[t.period]}</span>
            ${e==="current"?m:t.current.reward?l`<b>${t.current.reward}</b>`:l`<span class="prize-empty">Ainda sem prêmio. Quem fizer mais pontos leva.</span>`}
          </div>
          ${e==="current"?m:l`<button class="text-btn" @click=${()=>this._editReward("current")}>${t.current.reward?"Mudar":"Definir"}</button>`}
        </div>
        ${e==="current"?a("current",t.current):m}
        <div class="prize-next">
          ${e==="next"?l`<span class="flabel">Prêmio ${Re[t.period]} (${t.next.label})</span>${a("next",t.next)}`:l`<span>${H("gift")}<span>${t.next.reward?l`Prêmio ${Re[t.period]}: <b>${t.next.reward}</b>`:`Pr\xEAmio ${Re[t.period]} ainda livre`}</span></span><button class="text-btn" @click=${()=>this._editReward("next")}>${t.next.reward?"Mudar":"Definir"}</button>`}
        </div>
      </div>`}_editReward(t){this._rwEdit=t,this.requestUpdate(),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector("#rw-input");e&&e.focus()})}async _saveReward(t,e){try{await this.api.scoreReward(t,e),this._rwEdit=null,this._haptic("success"),this._showToast((e||"").trim()?"Pr\xEAmio salvo":"Pr\xEAmio tirado")}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _setDelivered(t,e){try{await this.api.scoreDelivered(t,e),e&&this._haptic("success")}catch(a){this._showToast(a.message)}}_renderToScore(){let t=this._ix(),e=new Date(this._now),a=(t.routines||[]).filter(n=>n.points>0),s=(t.maint||[]).filter(n=>n.points>0&&n.state!=="ok"),i=a.filter(n=>n.done).length;return l`<div class="panel chores score-today">
        <div class="chores-head"><span class="overline">Para pontuar hoje</span>${a.length?l`<small>${i} de ${a.length}</small>`:m}</div>
        ${Y(a,n=>n.key,n=>{let o=n.done&&n.done.by;return l`<div class="chore ${n.done?"done":""}">
            <button class="chk ${n.done?"on":""}" @click=${()=>n.done?this._undoCheck(n,"rotina"):this._markDone(n,"rotina")} aria-label="${n.done?"Desmarcar":"Marcar"} ${n.summary}">${n.done?H("check"):m}</button>
            <button class="chore-tx" @click=${()=>this._openIndexItem(n)}><b>${n.summary}</b><small>${[n.yesterday?"ficou de ontem":n.time,n.done?`feito por ${o||"algu\xE9m"}`:n.who].filter(Boolean).join(" \xB7 ")||"hoje"}</small></button>
            <span class="pts ${n.done?"got":""}" style=${o?C(this._pColor(o),this._dark):""}>+${n.points}</span>
          </div>`})}
        ${Y(s,n=>n.key,n=>l`<div class="chore maint-score">
            <span class="chk wrench ${n.state}">${H("wrench")}</span>
            <button class="chore-tx" @click=${()=>this._openIndexItem(n)}><b>${n.summary}</b><small>${n.days<0?`venceu h\xE1 ${A(-n.days,"dia","dias")}`:n.days===0?"\xE9 hoje":`em ${A(n.days,"dia","dias")}`} · manutenção</small></button>
            <button class="pts btn-pts" @click=${()=>this._maintDone(n)}>+${n.points}</button>
          </div>`)}
        ${!a.length&&!s.length?l`<p class="empty-line">Nenhuma tarefa com pontos hoje. Dê pontos às tarefas em <b>Novo › Rotina</b> ou <b>Manutenção</b>.</p>`:m}
        <div class="score-actions">
          <button class="btn outline sm" @click=${()=>this._openKindForm({kind:"rotina"})}>${H("plus")}Tarefa com pontos</button>
          <button class="btn outline sm" @click=${()=>this._openSheet("extra",{who:this._participant(this._me())||"",points:10,title:""})}>${H("award")}Pontos avulsos</button>
        </div>
      </div>`}_renderFeed(t){if(!t.entries.length)return m;let e=new Date(this._now),a=this._feedAll?t.entries:t.entries.slice(0,8),s=i=>{let n=new Date(i),o=N(n,e);return o===0?`hoje ${M(n)}`:o===-1?`ontem ${M(n)}`:`${Gt[n.getDay()].slice(0,3)} ${M(n)}`};return l`<div class="panel feed">
        <div class="chores-head"><span class="overline">Pontos ${ts[t.period]}</span><small>${A(t.entries.length,"registro","registros")}</small></div>
        ${Y(a,i=>i.key,i=>l`<div class="feed-row" style=${C(this._pColor(i.who),this._dark)}>
            <span class="avatar sm2">${at(i.who)}</span>
            <span class="feed-tx"><b>${i.title}</b><small>${i.who} · ${s(i.at)}${i.kind==="extra"?" \xB7 avulso":i.kind==="manutencao"?" \xB7 manuten\xE7\xE3o":""}</small></span>
            <span class="pts got">${i.points>0?"+":""}${i.points}</span>
            ${i.kind==="extra"?l`<button class="icon-btn mini" aria-label="Tirar ${i.title}" @click=${()=>this._removeExtra(i)}>${H("x")}</button>`:m}
          </div>`)}
        ${t.entries.length>8?l`<button class="add-line" @click=${()=>(this._feedAll=!this._feedAll,this.requestUpdate())}>${H(this._feedAll?"chevron-up":"chevron-down")}${this._feedAll?"Mostrar menos":`Ver todos (${t.entries.length})`}</button>`:m}
      </div>`}async _removeExtra(t){try{await this.api.scoreRemove(t.key),this._showToast(`${D(t.title,26)}: pontos tirados`)}catch(e){this._showToast(e.message)}}_renderExtraSheet(){let t=this._form,e=this._score()||{participants:[]};return l`${this._sheetHead("Pontos avulsos")}
        <p class="sheet-note top">Para o que não está na agenda: lavou o carro, fez a feira, montou o armário…</p>
        <label class="field"><span class="flabel">O que foi feito</span><input type="text" id="ex-title" .value=${t.title} placeholder="Ex.: Lavou o carro" maxlength="120" @input=${a=>this._setForm({title:a.target.value})} /></label>
        <div class="field"><span class="flabel">Quem fez</span>
          <div class="chip-row">${e.participants.map(a=>l`<button class="pick person ${t.who===a?"on":""}" @click=${()=>this._setForm({who:a})}><span class="avatar sm">${at(a)}</span><span>${a}</span></button>`)}</div>
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
        </div>`}async _saveExtra(){let t=this._form;try{await this.api.scoreExtra(t.who,Number(t.points),t.title.trim()),this._haptic("success"),await this._closeSheet(),this._showToast(`+${t.points} para ${t.who}`)}catch(e){this._showToast(e.message)}}_renderHistory(t){let e=t.history||[];if(!e.length)return m;let a=this._histAll?e:e.slice(0,5),s={};for(let i of e)i.winner&&(s[i.winner]=(s[i.winner]||0)+1);return l`<div class="panel history">
        <div class="chores-head"><span class="overline">Histórico</span><small>${Object.entries(s).map(([i,n])=>`${i} ${n}`).join(" \xB7 ")||""}</small></div>
        ${Y(a,i=>i.key,i=>l`<div class="hist-row">
            <span class="hist-ic ${i.winner?"":"tie"}" style=${i.winner?C(this._pColor(i.winner),this._dark):""}>${i.winner?at(i.winner):"="}</span>
            <span class="hist-tx"><b>${i.winner?`${i.winner} venceu`:"Empate"} · ${Object.values(i.totals||{}).join(" \xD7 ")}</b><small>${Oe(i.start,i.end,t.period)}${i.reward?` \xB7 ${i.reward}`:""}</small></span>
            ${i.reward&&i.winner?l`<button class="hist-gift ${i.delivered?"on":""}" aria-pressed=${i.delivered?"true":"false"} aria-label="${i.delivered?"Pr\xEAmio entregue":"Marcar pr\xEAmio como entregue"}" @click=${()=>this._setDelivered(i.key,!i.delivered)}>${H(i.delivered?"check":"gift")}</button>`:m}
          </div>`)}
        ${e.length>5?l`<button class="add-line" @click=${()=>(this._histAll=!this._histAll,this.requestUpdate())}>${H(this._histAll?"chevron-up":"chevron-down")}${this._histAll?"Mostrar menos":`Ver tudo (${e.length})`}</button>`:m}
      </div>`}_scorePrefs(t){let e=this._score()||{},a={enabled:!!e.enabled,participants:e.participants||[],period:e.period||"semana",anchor:e.anchor||y(new Date),notify:e.notify!==!1};return this._saveAppPrefs({score:{...a,...t}})}_renderScoreSettings(t){let e=(this._ix().people||[]).map(s=>s.name),a=[...new Set([...t.participants,...e])];return l`<details class="panel score-set" ?open=${this._scoreSetOpen} @toggle=${s=>this._scoreSetOpen=s.target.open}>
        <summary><span class="overline">Ajustes do placar</span>${H("chevron-down")}</summary>
        <div class="field"><span class="flabel">Quem participa</span>
          <div class="chip-row">${a.map(s=>{let i=t.participants.includes(s);return l`<button class="pick person ${i?"on":""}" aria-pressed=${i?"true":"false"} @click=${()=>this._scorePrefs({participants:i?t.participants.filter(n=>n!==s):[...t.participants,s]})}><span class="avatar sm">${at(s)}</span><span>${s}</span></button>`})}</div>
        </div>
        <div class="field"><span class="flabel">O placar fecha</span>
          <div class="seg">${Object.entries(Fe).map(([s,i])=>l`<button class=${t.period===s?"on":""} @click=${()=>this._scorePrefs({period:s,anchor:y(new Date)})}>${i.label}</button>`)}</div>
          <span class="field-hint">${H("info")}<span>${t.period==="mes"?"No primeiro dia de cada m\xEAs.":`A semana come\xE7a ${this._app("week_start",0)===1?"na segunda":"no domingo"} (muda em Mais).`} Mudar aqui recomeça a contagem no período de agora, sem perder os pontos.</span></span>
        </div>
        <div class="row switch-row">
          <div class="grow"><div class="label">Resultado no celular</div><div class="hint">Quando o período fecha, quem participa recebe quem venceu e o prêmio.</div></div>
          <label class="switch"><input type="checkbox" role="switch" .checked=${t.notify!==!1} @change=${s=>this._scorePrefs({notify:s.target.checked})} aria-label="Resultado no celular" /><span class="track"></span></label>
        </div>
        <button class="text-btn danger" @click=${()=>this._scorePrefs({enabled:!1})}>Desligar o placar</button>
      </details>`}_renderRewardsSetup(){let t=this._score()||{},e=(this._ix().people||[]).filter(n=>n.person),a=this._setupPick||(t.participants&&t.participants.length?t.participants:e.map(n=>n.name)),s=this._setupPeriod||t.period||"semana",i=[...new Set([...(this._ix().people||[]).map(n=>n.name),...a])];return l`<section class="page rewards">
        ${this._renderHead("Recompensas",{text:"Placar da casa"})}
        <div class="panel setup-card">
          <div class="setup-art">${H("trophy")}</div>
          <h2 class="setup-title">Quem faz mais em casa?</h2>
          <p class="panel-lead">Dê pontos às tarefas da rotina e da manutenção. Quem marca <b>Feito</b> ganha os pontos, e no fim de cada período quem somar mais leva o prêmio que vocês combinaram.</p>
          <div class="field"><span class="flabel">Quem participa</span>
            <div class="chip-row">${i.map(n=>{let o=a.includes(n);return l`<button class="pick person ${o?"on":""}" aria-pressed=${o?"true":"false"} @click=${()=>(this._setupPick=o?a.filter(c=>c!==n):[...a,n],this.requestUpdate())}><span class="avatar sm">${at(n)}</span><span>${n}</span></button>`})}</div>
          </div>
          <div class="field"><span class="flabel">O placar fecha</span>
            <div class="seg">${Object.entries(Fe).map(([n,o])=>l`<button class=${s===n?"on":""} @click=${()=>(this._setupPeriod=n,this.requestUpdate())}>${o.label}</button>`)}</div>
          </div>
          <button class="btn primary" style="width:100%" ?disabled=${!a.length} @click=${()=>this._saveAppPrefs({score:{enabled:!0,participants:a,period:s,anchor:y(new Date),notify:!0}})}>${H("trophy")}Começar o placar</button>
        </div>
      </section>`}};var as="cronologia.theme",ss="cronologia.mode",Ne={CREATE:1,DELETE:2,UPDATE:4},He=(r,t)=>(Number(r)&t)===t,dt=48,Zs={local_calendar:{label:"Calend\xE1rio local",icon:"calendar"},google:{label:"Google Agenda",icon:"calendar-days"},caldav:{label:"CalDAV",icon:"server"},ms365_calendar:{label:"Outlook (Microsoft 365)",icon:"briefcase"},o365:{label:"Outlook (Office 365)",icon:"briefcase"},remote_calendar:{label:"Calend\xE1rio remoto (.ics)",icon:"link"},ics_calendar:{label:"Calend\xE1rio .ics",icon:"link"},holiday:{label:"Feriados",icon:"party-popper"},workday:{label:"Dias \xFAteis",icon:"briefcase"},todo:{label:"Tarefas",icon:"list-checks"}},ti=r=>Zs[r]||{label:r?P(r.replace(/_/g," ")):"Outros",icon:"calendar"},g=(r,t="")=>l`<svg class="i ${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mt(J[r]||J.calendar)}</svg>`,ne={get(r,t){try{let e=localStorage.getItem(r);return e==null?t:JSON.parse(e)}catch{return t}},set(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}},Pe=(r,t,e,a,s)=>ut`<line class=${s} x1=${r} y1=${t} x2=${e} y2=${a}></line>`,is=(r,t)=>ut`<path class=${t} d=${r}></path>`,ei=r=>r.allDay?"Dia todo":`${M(r.start)} \u2013 ${M(r.end)}`,ai=r=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r)}`,Ie=class extends es(Xa(tt)){static properties={api:{attribute:!1},env:{attribute:!1},_ready:{state:!0},_bootError:{state:!0},_online:{state:!0},_path:{state:!0},_sheet:{state:!0},_form:{state:!0},_toast:{state:!0},_theme:{state:!0},_dark:{state:!0},_now:{state:!0},_cursor:{state:!0},_mode:{state:!0},_query:{state:!0},_cam:{state:!0},_ver:{state:!0},_home:{state:!0}};static styles=[Da,za,Ca];constructor(){super(),this.api=null,this.env=null,this._ready=!1,this._bootError=null,this._online=!0,this._path=history.state&&history.state.rvPath||"",this._sheet=null,this._form=null,this._toast=null,this._theme=ne.get(as,"auto"),this._dark=!1,this._now=Date.now(),this._cursor=S(new Date),this._mode=ne.get(ss,"mes"),this._query="",this._cam=null,this._ver=0,this._home=null,this._states={},this._entities={},this._devices={},this._prefs={calendars:{},app:{}},this._ai={ready:!1,images:!1,entities:[]},this._aiAt=0,this._user={name:""},this._version="",this._showAllDay=!1,this._scrollWeek=!0,this._onPopState=this._onPopState.bind(this),this._onVisible=this._onVisible.bind(this),this._mql=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,this._onScheme=()=>this._syncDark()}connectedCallback(){super.connectedCallback(),Sa(),window.addEventListener("popstate",this._onPopState),document.addEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.addEventListener&&this._mql.addEventListener("change",this._onScheme),this._tick=setInterval(()=>this._now=Date.now(),3e4),this._themeTimer=setInterval(()=>this._syncDark(),3e3),this._syncDark(),this.api&&!this._started&&this._start()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),document.removeEventListener("visibilitychange",this._onVisible),this._mql&&this._mql.removeEventListener&&this._mql.removeEventListener("change",this._onScheme),clearInterval(this._tick),clearInterval(this._themeTimer),clearTimeout(this._toastTimer),this._stopStream(),this._store&&this._store.dispose()}willUpdate(t){t.has("api")&&this.api&&!this._started&&this.isConnected&&this._start()}updated(t){if(this.toggleAttribute("dark",this._dark),this._scrollWeek){let e=this.renderRoot.querySelector(".tgrid-scroll");if(e){this._scrollWeek=!1;let a=new Date,s=this._view().name==="calendar"&&R(this._cursor,a)?Math.max(0,a.getHours()-1):7;e.scrollTop=s*dt}}t.has("_path")&&this._view().name==="more"&&this._refreshAi(!1)}_onVisible(){document.visibilityState==="visible"&&(this._now=Date.now(),this._syncDark())}_syncDark(){let t=this._theme==="dark"?!0:this._theme==="light"?!1:Ta();t!==this._dark&&(this._dark=t)}_setTheme(t){this._theme=t,ne.set(as,t),this._syncDark()}async _start(){this._started=!0,this._store=new re(this.api,()=>this._ver++),this.api.onStatus(t=>this._online=t),this.api.onReconnect(()=>this._boot(!0)),await this._boot(!1),this.api.subscribeCalendars(t=>this._onCalendar(t)).catch(()=>{}),this.api.subscribePrefs(t=>this._setPrefs(t)).catch(()=>{}),this.api.subscribeHome&&this.api.subscribeHome(t=>this._home=t).catch(()=>{})}async _boot(t){try{let e=await this.api.bootstrap();this._version=e.version||"",this._user=e.user||{name:""},this._ai=e.ai||this._ai,this._aiAt=Date.now(),this._states=e.states||{},this._entities=e.entities||{},this._devices=e.devices||{},this._prefs=e.prefs||{calendars:{},app:{}},this._ready=!0,this._bootError=null,this._syncStore(),t&&this._store.reloadAll()}catch(e){this._ready||(this._bootError=e.message||String(e)),t||setTimeout(()=>this._boot(!1),3e3)}}_onCalendar(t){let e={...this._states},a=t.entity_id in e;t.new_state?e[t.entity_id]=t.new_state:delete e[t.entity_id],this._states=e,(!a||!t.new_state)&&this.api.registry().then(s=>{this._entities=s.entities||{},this._devices=s.devices||{},this.requestUpdate()}).catch(()=>{}),this._syncStore(),this.requestUpdate()}_setPrefs(t){t&&(this._prefs={calendars:t.calendars||{},app:t.app||{}},this._syncStore(),this.requestUpdate())}_syncStore(){this._store&&this._store.setCalendars(this._cals().filter(t=>!t.hidden).map(t=>t.id))}_app(t,e){let a=this._prefs.app?this._prefs.app[t]:void 0;return a===void 0?e:a}_accent(){return W(this._app("accent","turquesa"))||W("turquesa")}_cals(){if(this._calsCache&&this._calsCache.states===this._states&&this._calsCache.prefs===this._prefs&&this._calsCache.entities===this._entities)return this._calsCache.list;let t=Object.keys(this._states).map(a=>{let s=this._states[a],i=this._entities[a]||{},n=i.device_id?this._devices[i.device_id]:null,o=ti(i.platform),c=s.attributes&&s.attributes.friendly_name||a;return{id:a,st:s,reg:i,dev:n,plat:o,orig:c}});t.sort((a,s)=>a.plat.label.localeCompare(s.plat.label,"pt-BR")||a.orig.localeCompare(s.orig,"pt-BR"));let e=t.map(({id:a,st:s,reg:i,dev:n,plat:o,orig:c},p)=>{let h=(this._prefs.calendars||{})[a]||{},d=Number(s.attributes&&s.attributes.supported_features)||0;return{id:a,name:h.name||c,origName:c,group:o.label,icon:o.icon,device:n?n.name_by_user||n.name:null,color:W(h.color)||Ra(p),colorId:h.color||null,hidden:!!h.hidden,features:d,canCreate:He(d,Ne.CREATE),canUpdate:He(d,Ne.UPDATE),canDelete:He(d,Ne.DELETE),unavailable:s.state==="unavailable"}});return this._calsCache={states:this._states,prefs:this._prefs,entities:this._entities,list:e},e}_cal(t){return this._cals().find(e=>e.id===t)}_visible(){return this._cals().filter(t=>!t.hidden)}_writable(){return this._cals().filter(t=>t.canCreate&&!t.unavailable)}_defaultCal(){let t=this._writable(),e=this._app("default_calendar",null);return(t.find(a=>a.id===e)||t.find(a=>!a.hidden)||t[0]||{}).id||null}_events(t,e){this._store.ensure(t,e);let a=this._store.query(t,e),s=this._gerenciaEvents(t,e);return s.length?[...a,...s].sort((i,n)=>i.start-n.start||Number(n.allDay)-Number(i.allDay)||i.summary.localeCompare(n.summary,"pt-BR")):a}async _saveCalPrefs(t,e){try{this._setPrefs(await this.api.setCalendarPrefs(t,e))}catch(a){this._showToast(`N\xE3o consegui salvar: ${a.message}`)}}async _saveAppPrefs(t){try{this._setPrefs(await this.api.setAppPrefs(t))}catch(e){this._showToast(`N\xE3o consegui salvar: ${e.message}`)}}_view(){let t=(this._path||"").replace(/\/+$/,"");return t==="/calendario"?{name:"calendar"}:t==="/agendas"?{name:"calendars"}:t==="/recompensas"?{name:"rewards"}:t==="/mais"?{name:"more"}:{name:"now"}}async _go(t,e=!1){this._sheet&&this._closeSheet(),this._popping&&await this._popping;let a=(history.state&&history.state.rvDepth||0)+(e?0:1);e?history.replaceState({rvDepth:a,rvPath:t},""):history.pushState({rvDepth:a,rvPath:t},""),this._path=t,t==="/calendario"&&(this._scrollWeek=!0);let s=this.renderRoot&&this.renderRoot.querySelector("main");s&&s.scrollTo({top:0,behavior:"instant"})}_goTab(t){let e=this._view().name;if(t===""){if(e==="now"){let s=this.renderRoot.querySelector("main");s&&s.scrollTo({top:0});return}let a=history.state&&history.state.rvDepth||0;a>0?history.go(-a):this._go("",!0);return}if(t==="/calendario"&&e==="calendar"){this._cursor=S(new Date),this._scrollWeek=!0;return}this._go(t,e!=="now")}_openDay(t,e){this._cursor=S(t),e&&this._setMode(e),this._view().name!=="calendar"&&this._go("/calendario")}_setMode(t){this._mode=t,ne.set(ss,t),this._scrollWeek=!0}_popEntry(t){if(!(history.state&&history.state[t]))return Promise.resolve();let e=new Promise(a=>{let s=()=>{clearTimeout(i),this._popWaiters=(this._popWaiters||[]).filter(n=>n!==s),this._popping===e&&(this._popping=null),a()},i=setTimeout(s,600);this._popWaiters=[...this._popWaiters||[],s]});return this._popping=e,history.back(),e}_onPopState(){this._cam&&!(history.state&&history.state.rvCam)&&this._closeCamera(!0),this._sheet&&!(history.state&&history.state.rvSheet)&&(this._releaseImages(),this._sheet=null,this._form=null);let t=history.state&&history.state.rvPath||"";t!==this._path&&(this._path=t);for(let e of[...this._popWaiters||[]])e()}async _openSheet(t,e=null){let a=!!this._sheet;if(!a&&this._popping&&await this._popping,this._sheet=t,this._form=e,!a)try{history.pushState({...history.state||{},rvSheet:!0},"")}catch{}}_closeSheet(){return this._sheet?(this._releaseImages(),this._sheet=null,this._form=null,this._popEntry("rvSheet")):Promise.resolve()}_setForm(t){this._form={...this._form,...t}}_openInHA(t){this._closeSheet(),this.env&&this.env.openInHA&&this.env.openInHA(t)}_haptic(t){this.env&&this.env.haptic&&this.env.haptic(t)}_showToast(t,e=null){clearTimeout(this._toastTimer),this._toast={text:t,action:e,id:Date.now()},this._toastTimer=setTimeout(()=>this._toast=null,e?5e3:2800)}_userName(){let t=Qt();return(this._user&&this._user.name||t&&t.user&&t.user.name||"").trim().split(/\s+/)[0]}_isAdmin(){let t=Qt();return t&&t.user?!!t.user.is_admin:!0}_openEvent(t){if(t.gerencia){this._openSheet("bill",{b:{id:t.gerencia.id,c:t.gerencia}});return}this._openSheet("event",{ev:t})}_money(t){return t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}_openForm({ev:t=null,date:e=null,hour:a=null,cal:s=null,copy:i=!1}={}){if(t&&t.kind)return this._openKindForm({ev:t,copy:i});if(!this._writable().length&&!(t&&!i)){this._openSheet("nocal",{});return}let o;if(t){let c=t.allDay?w(t.end,-1):t.end;o={mode:i?"add":"edit",cal:i?this._cal(t.cal)&&this._cal(t.cal).canCreate?t.cal:this._defaultCal():t.cal,origCal:t.cal,uid:t.uid,rid:i?null:t.rid,title:t.summary,allDay:t.allDay,date:y(t.start),endDate:t.allDay?N(c,t.start)>0?y(c):"":R(t.start,t.end)?"":y(t.end),start:t.allDay?"09:00":M(t.start),end:t.allDay?"10:00":M(t.end),repeat:Ft(t.rrule),rrule:t.rrule||"",location:t.location,notes:t.description}}else{let c=e?S(e):S(new Date),p=new Date,h=a??(R(c,p)?Math.min(23,p.getHours()+1):9),d=u=>String(u).padStart(2,"0");o={mode:"add",cal:s&&this._cal(s)&&this._cal(s).canCreate?s:this._defaultCal(),title:"",allDay:!1,date:y(c),endDate:"",start:`${d(h)}:00`,end:`${d(Math.min(23,h+1))}:${h+1>23?"59":"00"}`,repeat:"",rrule:"",location:"",notes:""}}this._openSheet("form",o),o.mode==="add"&&!o.title&&this.updateComplete.then(()=>{let c=this.renderRoot.querySelector(".sheet .ev-title-input");c&&c.focus()})}_eventFromForm(t,{keepRrule:e=!0}={}){if(t.kind)return this._kindEvents(t,{keepRrule:e})[0];let a=(t.title||"").trim();if(!a)throw new Error("D\xEA um nome ao evento");if(!/^\d{4}-\d{2}-\d{2}$/.test(t.date||""))throw new Error("Escolha a data");let s={summary:a};if(t.allDay){let i=t.endDate&&t.endDate>t.date?t.endDate:t.date;s.start=t.date,s.end=y(w(k(i),1))}else{let[i,n]=(t.start||"09:00").split(":").map(Number),[o,c]=(t.end||t.start||"10:00").split(":").map(Number),p=k(t.date),h=new Date(p.getFullYear(),p.getMonth(),p.getDate(),i,n),d=t.endDate&&t.endDate>t.date?k(t.endDate):p,u=new Date(d.getFullYear(),d.getMonth(),d.getDate(),o,c);u<=h&&(u=w(u,1)),u-h<6e4&&(u=new Date(h.getTime()+30*6e4)),s.start=j(h),s.end=j(u)}if((t.location||"").trim()&&(s.location=t.location.trim()),(t.notes||"").trim()&&(s.description=t.notes.trim()),e){let i=t.rrule&&Ft(t.rrule)===t.repeat?t.rrule:t.repeat?`FREQ=${t.repeat}`:"";i&&(s.rrule=i)}return s}async _saveForm(){let t=this._form;if(t.kind)return this._saveKindForm();let e;try{e=this._eventFromForm(t)}catch(s){this._showToast(s.message);return}let a=this._cal(t.cal);if(!a)return this._showToast("Escolha o calend\xE1rio");if(t.mode==="edit"&&t.rid){this._openSheet("scope",{action:"edit",...t,event:e});return}this._setForm({saving:!0});try{t.mode==="add"?(await this.api.createEvent(t.cal,e),this._done(`Evento criado em ${D(a.name,24)}`,t.cal,e.start)):t.cal!==t.origCal?(await this.api.createEvent(t.cal,e),await this.api.deleteEvent(t.origCal,t.uid),this._store.refresh(t.origCal),this._done(`Evento movido para ${D(a.name,24)}`,t.cal,e.start)):(await this.api.updateEvent(t.cal,t.uid,e),this._done("Evento salvo",t.cal,e.start))}catch(s){this._sheet==="form"&&this._setForm({saving:!1}),this._showToast(`N\xE3o consegui salvar: ${s.message}`)}}_done(t,e,a){this._haptic("success"),this._closeSheet(),this._store.refresh(e);let s=a?S(new Date(/^\d{4}-\d{2}-\d{2}$/.test(a)?k(a):a)):null;this._showToast(t,s&&this._view().name!=="calendar"?{label:"Ver",run:()=>this._openDay(s)}:null)}async _applyScope(t){let e=this._form,a={recurrenceId:e.rid,range:t==="future"?"THISANDFUTURE":void 0};try{if(e.action==="edit"){let s=e.event;t==="one"&&(s=this._eventFromForm(e,{keepRrule:!1})),await this.api.updateEvent(e.cal,e.uid,s,a),this._done(t==="one"?"S\xF3 este evento foi alterado":"Este e os pr\xF3ximos foram alterados",e.cal,s.start)}else await this.api.deleteEvent(e.cal,e.uid,t==="all"?{}:a),this._done(t==="all"?"A s\xE9rie toda foi apagada":t==="one"?"Evento apagado":"Este e os pr\xF3ximos foram apagados",e.cal)}catch(s){this._showToast(`N\xE3o consegui: ${s.message}`)}}_askDelete(t){if(t.rid){this._openSheet("scope",{action:"delete",cal:t.cal,uid:t.uid,rid:t.rid,title:t.summary});return}this._openSheet("confirm",{title:`Apagar \u201C${D(t.summary,28)}\u201D?`,text:`${P(L(t.start,new Date(this._now)))} \xB7 ${ei(t)}. Ele sai do calend\xE1rio ${D((this._cal(t.cal)||{}).name||"",30)}.`,label:"Apagar",danger:!0,run:async()=>{try{await this.api.deleteEvent(t.cal,t.uid),this._haptic("medium"),this._closeSheet(),this._store.refresh(t.cal);let e={summary:t.summary,start:t.raw.start,end:t.raw.end};t.location&&(e.location=t.location),t.description&&(e.description=t.description),this._showToast("Evento apagado",{label:"Desfazer",run:()=>this.api.createEvent(t.cal,e).then(()=>this._store.refresh(t.cal)).catch(a=>this._showToast(a.message))})}catch(e){this._showToast(`N\xE3o consegui apagar: ${e.message}`)}}})}_openImport(t="pick",e={}){let a=this._defaultCal();if(!a)return this._openSheet("nocal",{}),Promise.resolve();this._releaseImages(),this._importToken=0;let s=this._openSheet("import",{target:a,step:t==="text"?"text":"pick",text:"",images:[],items:[],provider:null,error:null,note:null,...e});return t==="photos"&&this._pickFiles("photos"),t==="scan"&&this._openCamera(),t==="text"&&this._focusSheetText(),t==="ics"&&this._pickFiles("ics"),s}_focusSheetText(){this.updateComplete.then(()=>{let t=this.renderRoot.querySelector(".sheet textarea");t&&t.focus()})}_pickFiles(t){let e=this.renderRoot.querySelector(t==="scan"?"#cr-scan":t==="ics"?"#cr-ics":"#cr-photos");e&&(e.value="",e.click())}_releaseImages(){let t=this._form;if(t&&t.images)for(let e of t.images)e.url&&URL.revokeObjectURL(e.url)}_isHaAndroid(){return/Home Assistant\//.test(navigator.userAgent)&&/Android/.test(navigator.userAgent)}async _onFiles(t){let e=[...t.target.files||[]].filter(i=>!i.type||i.type.startsWith("image/")).slice(0,6);if(t.target.value="",!e.length)return;this._sheet!=="import"&&await this._openImport("pick");let a=this._form.step==="review";this._setForm({step:"loading",error:null,loadingText:"Preparando as fotos\u2026",prevStep:a?"review":"pick"});let s=[];for(let i of e)s.push(await Se(i));this._readImages(s,a)}async _onIcsFile(t){let e=t.target.files&&t.target.files[0];if(t.target.value="",!e)return;let a;try{a=Ya(await e.text())}catch{a=[]}if(!a.length){this._showToast("N\xE3o encontrei eventos nesse arquivo .ics");return}this._sheet!=="import"&&await this._openImport("pick"),this._setForm({step:"review",items:a.map(s=>({...s,on:!0})),provider:"ics",fileName:e.name,note:null,error:null})}_readImages(t,e){if(this._sheet!=="import"||!t.length)return;let a=e?[...this._form.images||[],...t]:(this._releaseImages(),t);this._setForm({step:"loading",images:a,prevStep:e?"review":"pick",loadingText:t.length>1?`Lendo ${t.length} fotos com IA\u2026`:"Lendo a foto com IA\u2026"}),this._runExtract({images:t,appending:e})}async _runExtract({text:t,images:e,appending:a=!1}){let s=this._importToken=Date.now(),i=()=>s===this._importToken&&this._sheet==="import",n=a?this._form.items||[]:[];try{let o=await this.api.extract({text:t,images:e?e.map(({data:p,mime:h})=>({data:p,mime:h})):void 0});if(!i())return;let c=o.events||[];if(!c.length){let p=t?"N\xE3o encontrei eventos com data nessa mensagem.":"N\xE3o encontrei eventos com data nessa foto. Tente mais de perto e com boa luz.";a?this._setForm({step:"review",note:p}):this._setForm({step:t?"text":"pick",error:p});return}this._haptic("success"),this._setForm({step:"review",items:[...n,...c.map(p=>({...p,on:!0}))],provider:o.provider||null,note:null,error:null})}catch(o){if(!i())return;a?this._setForm({step:"review",note:o.message||"Algo deu errado"}):this._setForm({step:t?"text":"pick",error:o.message||"Algo deu errado"})}}_readText(){let t=(this._form.text||"").trim();if(!t)return this._focusSheetText();if(!this._ai.ready){this._setForm({error:"Para ler mensagens, configure uma IA no Home Assistant (veja em Mais \u203A Leitura por IA)."});return}this._setForm({step:"loading",error:null,note:null,prevStep:"text",loadingText:"Procurando eventos com IA\u2026"}),this._runExtract({text:t})}async _pasteClipboard(){try{let t=await navigator.clipboard.readText();if(!t)throw new Error("empty");this._setForm({text:t,error:null})}catch{this._focusSheetText(),this._showToast("Toque e segure no campo para colar")}}_setItem(t,e){let a=this._form.items.slice();a[t]={...a[t],...e},this._setForm({items:a})}_itemEvent(t){let e=s=>{let[i,n]=s.split(":").map(Number),o=Math.min(1439,i*60+n+60);return`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`},a={daily:"DAILY",weekly:"WEEKLY",monthly:"MONTHLY",yearly:"YEARLY"}[t.repeat]||"";return this._eventFromForm({title:t.title,date:t.date,endDate:t.end_date||"",allDay:!t.start,start:t.start,end:t.end||(t.start?e(t.start):""),repeat:t.rrule?Ft(t.rrule):a,rrule:t.rrule||"",location:t.location,notes:t.notes})}async _importAdd(){let t=this._form,e=t.items.filter(n=>n.on&&(n.title||"").trim()),a=this._cal(t.target);if(!e.length||!a)return;this._setForm({adding:!0});let s=0,i=null;for(let n of e)try{let o=this._itemEvent(n);await this.api.createEvent(t.target,o),s++,(!i||o.start<i)&&(i=o.start)}catch(o){this._showToast(`\u201C${D(n.title,24)}\u201D: ${o.message}`)}this._sheet==="import"&&this._setForm({adding:!1}),s&&this._done(`${A(s,"evento adicionado","eventos adicionados")} em ${D(a.name,20)}`,t.target,i)}async _openCamera(){let t=navigator.mediaDevices;if(!t||!t.getUserMedia){this._pickFiles("scan");return}let e=!!(this._form&&this._form.step==="review");this._cam={status:"starting",shots:[],torch:!1,torchOk:!1,appending:e,flash:0};try{history.pushState({...history.state||{},rvCam:!0},"")}catch{}try{let a=await t.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1440}}});if(!this._cam){a.getTracks().forEach(o=>o.stop());return}this._stream=a;let s=a.getVideoTracks()[0],i=s&&s.getCapabilities?s.getCapabilities():{};this._cam={...this._cam,status:"live",torchOk:!!i.torch},await this.updateComplete;let n=this.renderRoot.querySelector(".cam video");n&&(n.srcObject=a,n.play().catch(()=>{}))}catch(a){if(!this._cam)return;let s=a&&(a.name==="NotAllowedError"||a.name==="SecurityError");this._cam={...this._cam,status:"error",error:s?"Sem permiss\xE3o para usar a c\xE2mera. Libere a c\xE2mera para o app do Home Assistant nas configura\xE7\xF5es do celular, ou escolha uma foto.":"N\xE3o consegui abrir a c\xE2mera. Voc\xEA pode escolher uma foto da galeria."}}}_stopStream(){this._stream&&this._stream.getTracks().forEach(t=>t.stop()),this._stream=null}_closeCamera(t=!1){if(this._cam){if(this._stopStream(),!this._cam.used)for(let e of this._cam.shots||[])URL.revokeObjectURL(e.url);this._cam=null,t||this._popEntry("rvCam")}}async _toggleTorch(){let t=this._stream&&this._stream.getVideoTracks()[0];if(!t)return;let e=!this._cam.torch;try{await t.applyConstraints({advanced:[{torch:e}]}),this._cam={...this._cam,torch:e}}catch{this._cam={...this._cam,torchOk:!1}}}async _shoot(){let t=this.renderRoot.querySelector(".cam video");if(!t||!t.videoWidth||!this._cam||this._cam.shots.length>=6)return;let e=1800,a=Math.min(1,e/Math.max(t.videoWidth,t.videoHeight)),s=document.createElement("canvas");s.width=Math.round(t.videoWidth*a),s.height=Math.round(t.videoHeight*a),s.getContext("2d").drawImage(t,0,0,s.width,s.height);let i=await new Promise(o=>s.toBlob(o,"image/jpeg",.86));if(!i||!this._cam)return;let n=await Se(i,e);this._haptic("light"),this._cam={...this._cam,shots:[...this._cam.shots,n],flash:Date.now()}}async _useShots(){if(!this._cam||!this._cam.shots.length)return;let t=this._cam.shots,e=this._cam.appending;this._cam={...this._cam,used:!0},this._closeCamera(),this._popping&&await this._popping,this._sheet!=="import"&&await this._openImport("pick"),this._readImages(t,e&&this._form.step==="review")}_cameraFallback(){let t=this._cam&&this._cam.appending;this._closeCamera(),t&&this._form&&this._setForm({step:"review"}),this._pickFiles("scan")}async _refreshAi(t=!0){if(!(!t&&Date.now()-this._aiAt<6e4)){this._aiChecking=!0,this.requestUpdate();try{this._ai=await this.api.aiStatus()}catch(e){this._ai={...this._ai,ready:!1,images:!1,reason:e.message}}this._aiAt=Date.now(),this._aiChecking=!1,this.requestUpdate()}}async _chooseAi(t){await this._saveAppPrefs({ai_entity:t||null}),await this._refreshAi(),this._showToast("IA do app atualizada")}_goAiSettings(){this._closeSheet(),this._go("/mais",this._view().name!=="now").then(()=>this.updateComplete.then(()=>{let t=this.renderRoot.querySelector("#leitura-ia");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}))}_openExport(){this._openSheet("export",{cals:this._visible().map(t=>t.id),range:"12m"})}_exportRange(t){let e=S(new Date);return t==="3m"?[e,et(e,3)]:t==="year"?[et(e,-12),et(e,12)]:[e,et(e,12)]}render(){if(!this._ready)return l`<div class="root"><div class="app"><main><div class="boot-msg">${this._bootError?l`${g("circle-alert")}<span>Não consegui abrir o CronologIA: ${this._bootError}. Tentando de novo…</span>`:l`<span class="spin">${g("loader-circle")}</span><span>Abrindo a agenda…</span>`}</div></main></div></div>`;let t=this._view(),e=this._accent(),a=this._dark,s=`--rv-accent:${e.fill};--rv-accent-ink:${a?e.fill:e.ink};--rv-accent-soft:${Et(e.fill,a?.18:.14)};--rv-accent-faint:${Et(e.fill,a?.08:.07)};--rv-accent-ink-light:${e.ink};`,i;return t.name==="calendar"?i=this._renderCalendar():t.name==="calendars"?i=this._renderCalendars():t.name==="more"?i=this._renderMore():t.name==="rewards"?i=this._renderRewards():i=this._renderNow(),l`
      <div class="root" style=${s}>
        <div class="app">
          ${!this.env||this.env.topbar?l`<header class="topbar"><div class="title">Cronolog<b>IA</b></div></header>`:m}
          ${this._online?m:l`<div class="offline">${g("wifi-off")}<span>Sem conexão com o CronologIA. Reconectando…</span></div>`}
          <main>${i}</main>
          ${this._renderNav(t)}
        </div>
        ${this._renderSheet()} ${this._renderToast()} ${this._renderCamera()}
        <input id="cr-photos" class="sr" type="file" accept="image/*" ?multiple=${!this._isHaAndroid()} tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-scan" class="sr" type="file" accept="image/*" capture="environment" tabindex="-1" aria-hidden="true" @change=${n=>this._onFiles(n)} />
        <input id="cr-ics" class="sr" type="file" accept=".ics,text/calendar" tabindex="-1" aria-hidden="true" @change=${n=>this._onIcsFile(n)} />
      </div>
    `}_renderNav(t){let e=s=>t.name===s||s==="more"&&t.name==="calendars",a=(s,i,n,o)=>l`<button class="tab ${e(s)?"on":""}" @click=${()=>this._goTab(i)} aria-label=${n}>${g(o)}<span>${n}</span></button>`;return l`<nav>
      <div class="tabs">
        ${a("now","","Agora","clock-3")} ${a("calendar","/calendario","Calend\xE1rio","calendar-days")}
        <button class="tab fab" @click=${()=>this._openForm({date:t.name==="calendar"?this._cursor:null})} aria-label="Novo evento">
          <span class="pill">${g("plus")}</span><span>Novo</span>
        </button>
        ${a("rewards","/recompensas","Recompensas","trophy")} ${a("more","/mais","Mais","sliders-horizontal")}
      </div>
    </nav>`}_renderHead(t,e,a=m){let s=this._userName(),i=this._online?e:{text:"Reconectando ao CronologIA\u2026",tone:"off"};return l`<header class="brand-head">
      <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${s?` \xB7 Ol\xE1, ${s}`:""}</p>
      <h1 class="page-title">${t}</h1>
      ${i?l`<p class="status"><span class="dot ${i.tone||""}" aria-hidden="true"></span><span>${i.text}</span></p>`:m}
      ${a}
    </header>`}_colorOfEvent(t){if(t.gerencia)return W("ouro");let e=this._cal(t.cal);return e&&e.color||this._accent()}_renderRow(t,e,{showCal:a=!0}={}){let s=this._now,i=t.end.getTime()<=s,n=t.start.getTime()<=s&&t.end.getTime()>s&&!t.allDay,o=this._cal(t.cal),c;if(t.allDay){let v=N(t.end,t.start);c=l`<b>Dia</b><small>${v>1?`${N(e,t.start)+1}/${v}`:"todo"}</small>`}else{let v=R(t.start,e),f=R(t.end,e)||t.end.getHours()===0&&t.end.getMinutes()===0&&N(t.end,e)===1;c=l`<b>${v?M(t.start):"\u2026"}</b><small>${f?M(t.end):"segue"}</small>`}let p=t.kind,h=p&&p.kind!=="manutencao"&&this._checkOf(t),u=[...p?p.kind==="remedio"?[p.dose,p.who]:p.kind==="conta"&&p.value!=null?[this._money(p.value)]:[p.who]:[],t.location,a?o?o.name:t.gerencia?"GerencIA":"":""].filter(Boolean).join(" \xB7 ");return l`<button class="ev-row ${i?"past":""} ${n?"live":""} ${h?"done":""}" style=${C(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="ev-time">${c}</span>
      <span class="ev-bar"></span>
      <span class="ev-main"><span class="ev-title">${this._kindIcon(t)}${t.summary}${h?l`<span class="ev-done">${g("check")}</span>`:m}</span>${u?l`<span class="ev-sub">${u}</span>`:m}</span>
      ${t.rrule?l`<span class="ev-rep" title=${gt(t.rrule)}>${g("repeat")}</span>`:m}
    </button>`}_renderNow(){let t=new Date(this._now),e=S(t),a=this._events(w(e,-1),w(e,9)).filter(x=>!x.kind),s=this._store.loading(w(e,-1),w(e,9)),i=this._ix().meds.filter(x=>x.state==="atrasado"),n=ct(a,e),o=x=>x.end-x.start>=12*36e5,c=n.filter(x=>x.allDay||o(x)),p=n.filter(x=>!x.allDay&&!o(x)),h=p.filter(x=>x.start<=t&&x.end>t).sort((x,z)=>z.start-x.start),u=a.filter(x=>!x.allDay&&x.start>t&&!o(x)).sort((x,z)=>x.start-z.start)[0],v=this._visible();if(!this._cals().length)return this._renderNoCalendars();let f=p.filter(x=>x.end>t).length,b=i.length?{text:`${P(Ae(t))} \xB7 ${i.length===1?`${i[0].summary} atrasado`:`${i.length} rem\xE9dios atrasados`}`,tone:"late"}:{text:`${P(Ae(t))} \xB7 ${n.length?`${A(n.length,"evento","eventos")} hoje`:"nada hoje"}${f&&f<p.length?` \xB7 ${f} pela frente`:""}`},_;if(h.length){let x=h[0],z=this._cal(x.cal);_=this._ticket(x,{label:"Agora",pill:`termina ${te(x.end-t)}`,when:l`<b>${M(x.start)}</b> – <b>${M(x.end)}</b> · ${Me(x.end-x.start)}`,stub:u?l`<span class="tk-next">Depois <b>${M(u.start)}</b> ${u.summary}</span>`:l`<span class="dot"></span><span>${[z&&z.name,x.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t,live:!0})}else if(u){let x=this._cal(u.cal);_=this._ticket(u,{label:"A seguir",pill:te(u.start-t),when:l`<b>${M(u.start)}</b> – ${M(u.end)} · ${R(u.start,t)?"hoje":L(u.start,t,{long:!1,cap:!1})}`,stub:l`<span class="dot"></span><span>${[x&&x.name,u.location].filter(Boolean).join(" \xB7 ")}</span>`,now:t})}else s||(_=l`<div class="hero-ev ticket empty" style=${C(this._accent(),this._dark)}>
        <span class="tk-main">
          <span class="tk-clock">${this._clock(null,t)}</span>
          <span class="tk-info"><span class="tk-top"><span class="overline">A seguir</span></span><span class="hero-title">Agenda livre</span><span class="tk-when">Nada marcado nos próximos dias</span></span>
        </span>
      </div>`);let F=this._showAllDay||c.length<=3?c:c.slice(0,2),U=[];for(let x=1;x<=7;x++){let z=w(e,x),Q=ct(a,z).filter(pt=>!(pt.allDay&&pt.start<z));Q.length&&U.push({d:z,list:Q})}let O=l`<div class="now-line"><span>${M(t)}</span></div>`,I=!1;return l`<section class="page">
      ${this._renderHead("Hoje",b)}
      ${v.length?m:l`<div class="hint-card">${g("eye-off")}<span>Todos os calendários estão ocultos.</span><button class="text-btn" @click=${()=>this._go("/agendas")}>Mostrar</button></div>`}
      ${this._renderMedsPanel()} ${this._renderBillsPanel()}
      ${_||m}
      ${c.length?l`<div class="allday">
            ${F.map(x=>l`<button class="ad-chip" style=${C(this._colorOfEvent(x),this._dark)} @click=${()=>this._openEvent(x)}><span class="dot"></span><span>${x.summary}</span></button>`)}
            ${c.length>F.length?l`<button class="ad-chip more" @click=${()=>(this._showAllDay=!0,this.requestUpdate())}>+${c.length-F.length} o dia todo</button>`:m}
          </div>`:m}
      <div class="panel agenda">
        <div class="overline">Hoje · ${V(t,t)}</div>
        ${p.length?p.map(x=>{let z=!I&&x.start>t?(I=!0,O):m;return l`${z}${this._renderRow(x,e)}`}):l`<p class="empty-line">${s?"Carregando\u2026":"Nenhum hor\xE1rio marcado hoje."}</p>`}
        ${p.length&&!I&&p[p.length-1].end<=t?O:m}
        <button class="add-line" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento hoje</button>
      </div>
      ${this._renderHomePanel()}
      ${U.length?l`<div class="panel agenda">
            <div class="overline">Próximos dias</div>
            ${U.map(({d:x,list:z})=>l`<button class="day-head" @click=${()=>this._openDay(x)}>${L(x,t)}<span>${z.length}</span></button>
                ${z.map(Q=>this._renderRow(Q,x))}`)}
          </div>`:s?m:l`<p class="page-sub">Nada marcado nos próximos 7 dias.</p>`}
    </section>`}_ticket(t,{label:e,pill:a,when:s,stub:i,now:n,live:o=!1}){return l`<button class="hero-ev ticket ${o?"live":""}" style=${C(this._colorOfEvent(t),this._dark)} @click=${()=>this._openEvent(t)}>
      <span class="tk-main">
        <span class="tk-clock">${this._clock(t,n,o)}</span>
        <span class="tk-info">
          <span class="tk-top"><span class="overline">${e}</span><span class="tk-pill">${g("clock","sm")}${a}</span></span>
          <span class="hero-title">${t.summary}</span>
          <span class="tk-when">${s}</span>
        </span>
      </span>
      <span class="tk-cut" aria-hidden="true"></span>
      <span class="tk-stub">${i}</span>
    </button>`}_clock(t,e,a=!1){let n=O=>(O.getHours()%12*60+O.getMinutes())/720*2*Math.PI,o=(O,I)=>[40+I*Math.sin(O),40-I*Math.cos(O)],c=(O,I,x)=>{let z=I-O;for(;z<=0;)z+=2*Math.PI;if(z=Math.max(z,.42),z>=2*Math.PI-.01)return`M 40 ${40-x} A ${x} ${x} 0 1 1 ${39.99} ${40-x}`;let[Q,pt]=o(O,x),[oe,rs]=o(O+z,x);return`M ${Q.toFixed(2)} ${pt.toFixed(2)} A ${x} ${x} 0 ${z>Math.PI?1:0} 1 ${oe.toFixed(2)} ${rs.toFixed(2)}`},p=Array.from({length:12},(O,I)=>{let x=I/12*2*Math.PI,[z,Q]=o(x,I%3?27:24),[pt,oe]=o(x,29);return Pe(z,Q,pt,oe,I%3?"tick":"tick major")}),h="",d="",u=e;if(t){let O=t.end-t.start>=432e5;h=O?c(0,2*Math.PI,34):c(n(t.start),n(t.end),34),a&&!O&&(d=c(n(t.start),n(e),34)),u=a?e:t.start}let v=n(u),f=u.getMinutes()/60*2*Math.PI,[b,_]=o(v,15),[F,U]=o(f,23);return l`<svg viewBox="0 0 80 80" aria-hidden="true">
      <circle class="dial" cx="40" cy="40" r="30"></circle>
      ${p}
      ${h?is(h,a?"span faint":"span"):m}
      ${d?is(d,"span"):m}
      ${Pe(40,40,b,_,"hand hour")}
      ${Pe(40,40,F,U,"hand min")}
      <circle class="pin" cx="40" cy="40" r="3"></circle>
    </svg>`}_renderNoCalendars(){return l`<section class="page">
      ${this._renderHead("Hoje",{text:"Nenhum calend\xE1rio no Home Assistant",tone:"off"})}
      <div class="panel"><div class="empty"><div class="em-icon">${g("calendar-plus")}</div><h3>Comece um calendário</h3><p>O CronologIA mostra os calendários do Home Assistant: um calendário local, o Google Agenda, o Outlook, feriados… Adicione um deles no Home Assistant e ele aparece aqui sozinho.</p></div></div>
      ${this._renderAddCalendars()}
    </section>`}_renderCalendar(){let t=new Date(this._now),e=this._cursor,a=this._mode,s=this._app("week_start",0),i,n,o;if(a==="mes"||a==="lista")i=`${P(lt[e.getMonth()])}${e.getFullYear()!==t.getFullYear()?` ${e.getFullYear()}`:""}`,n=()=>this._cursor=a==="lista"?w(e,-30):et(e,-1),o=()=>this._cursor=a==="lista"?w(e,30):et(e,1);else if(a==="semana"){let d=Tt(e,s),u=w(d,6);i=d.getMonth()===u.getMonth()?`${d.getDate()}\u2013${u.getDate()} ${lt[u.getMonth()].slice(0,3)}`:`${d.getDate()} ${lt[d.getMonth()].slice(0,3)} \u2013 ${u.getDate()} ${lt[u.getMonth()].slice(0,3)}`,n=()=>this._cursor=w(e,-7),o=()=>this._cursor=w(e,7)}else i=L(e,t),n=()=>this._cursor=w(e,-1),o=()=>this._cursor=w(e,1);let c=[["mes","M\xEAs","layout-grid"],["semana","Semana","columns-3"],["dia","Dia","calendar"],["lista","Lista","list"]],p;a==="semana"?p=this._renderTimeGrid(Tt(e,s),7):a==="dia"?p=this._renderTimeGrid(e,1):a==="lista"?p=this._renderList():p=this._renderMonth();let h=a==="mes"?e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()&&R(e,t):R(e,t);return l`<section class="page cal-page">
      <div class="cal-top">
        <div class="cal-title">
          <p class="eyebrow"><span class="brand">Cronolog<span>IA</span></span>${this._userName()?` \xB7 Ol\xE1, ${this._userName()}`:""}</p>
          <h1 class="page-title">${i}</h1>
        </div>
        <div class="cal-nav">
          <button class="icon-btn" aria-label="Anterior" @click=${()=>{n(),this._scrollWeek=!0}}>${g("chevron-left")}</button>
          <button class="icon-btn" aria-label="Próximo" @click=${()=>{o(),this._scrollWeek=!0}}>${g("chevron-right")}</button>
        </div>
      </div>
      <div class="cal-tools">
        <div class="seg compact" role="tablist" aria-label="Modo">
          ${c.map(([d,u,v])=>l`<button class=${a===d?"on":""} role="tab" aria-selected=${a===d?"true":"false"} @click=${()=>this._setMode(d)}>${g(v)}<span>${u}</span></button>`)}
        </div>
        <button class="pick ${h?"on":""}" @click=${()=>{this._cursor=S(new Date),this._scrollWeek=!0}}>Hoje</button>
      </div>
      ${p}
    </section>`}_renderMonth(){let t=new Date(this._now),e=this._cursor,a=this._app("week_start",0),s=new Date(e.getFullYear(),e.getMonth(),1),i=Tt(s,a),n=w(i,42),o=this._events(i,n),c=[];for(let u=0;u<42;u++){let v=w(i,u),f=ct(o,v);c.push({d:v,list:f})}let p=c[35].d.getMonth()!==e.getMonth()?5:6,h=ct(o,e),d={x:0,y:0};return l`
      <div class="month" @touchstart=${u=>(d.x=u.touches[0].clientX,d.y=u.touches[0].clientY)} @touchend=${u=>{let v=u.changedTouches[0].clientX-d.x,f=u.changedTouches[0].clientY-d.y;Math.abs(v)>60&&Math.abs(f)<50&&(this._cursor=et(e,v<0?1:-1))}}>
        <div class="wd">${[0,1,2,3,4,5,6].map(u=>l`<span>${ft[(u+a)%7].slice(0,1).toUpperCase()}</span>`)}</div>
        <div class="cells">
          ${c.slice(0,p*7).map(({d:u,list:v})=>{let f=u.getMonth()!==e.getMonth(),b=[...new Set(v.map(_=>this._colorOfEvent(_).fill))].slice(0,4);return l`<button class="cell ${f?"out":""} ${R(u,t)?"today":""} ${R(u,e)?"sel":""}" @click=${()=>this._cursor=u} aria-label="${L(u,t)}: ${A(v.length,"evento","eventos")}">
              <span class="num">${u.getDate()}</span>
              <span class="dots">${b.map(_=>l`<i style="background:${_}"></i>`)}${v.length>4?l`<b>+</b>`:m}</span>
            </button>`})}
        </div>
      </div>
      <div class="panel agenda day-panel">
        <div class="day-title"><span>${L(e,t)}</span><button class="text-btn" @click=${()=>this._openForm({date:e})}>${g("plus")}Evento</button></div>
        ${h.length?h.map(u=>this._renderRow(u,e)):l`<p class="empty-line">${this._store.loading(i,n)?"Carregando\u2026":"Nada marcado."}</p>`}
      </div>
    `}_renderTimeGrid(t,e){let a=new Date(this._now),s=Array.from({length:e},(d,u)=>w(t,u)),i=this._events(s[0],w(s[e-1],1)),n=Array.from({length:24},(d,u)=>u),o=this._app("week_start",0),c=d=>d.allDay||d.end-d.start>=12*36e5,p=s.map(d=>ct(i,d).filter(c)),h=Math.max(0,...p.map(d=>d.length));return l`
      ${e===7?l`<div class="week-strip">
            ${s.map(d=>l`<button class="ws-day ${R(d,a)?"today":""} ${R(d,this._cursor)?"sel":""}" @click=${()=>this._cursor=d}>
              <span>${ft[d.getDay()]}</span><b>${d.getDate()}</b>
            </button>`)}
          </div>`:l`<div class="week-strip day-strip">
            ${Array.from({length:7},(d,u)=>w(Tt(this._cursor,o),u)).map(d=>l`<button class="ws-day ${R(d,a)?"today":""} ${R(d,this._cursor)?"sel":""}" @click=${()=>this._cursor=d}><span>${ft[d.getDay()]}</span><b>${d.getDate()}</b></button>`)}
          </div>`}
      ${h?l`<div class="tgrid-allday" style="--n:${e}">
            <span class="tg-label">dia todo</span>
            ${p.map(d=>l`<div class="tg-adcol">${d.slice(0,3).map(u=>l`<button class="tg-ad ${u.kind&&this._checkOf(u)?"done":""}" style=${C(this._colorOfEvent(u),this._dark)} @click=${()=>this._openEvent(u)}>${u.summary}</button>`)}${d.length>3?l`<span class="tg-admore">+${d.length-3}</span>`:m}</div>`)}
          </div>`:m}
      <div class="tgrid-scroll">
        <div class="tgrid ${e===1?"one":"week"}" style="--n:${e};--hh:${dt}px">
          <div class="tg-hours">${n.map(d=>l`<span style="top:${d*dt}px">${d?`${String(d).padStart(2,"0")}h`:""}</span>`)}</div>
          ${s.map(d=>{let u=Va(ct(i,d).filter(b=>!c(b)),d),v=R(d,a),f=(a.getHours()+a.getMinutes()/60)*dt;return l`<div class="tg-col ${v?"today":""}" @click=${b=>{if(b.target!==b.currentTarget)return;let _=b.offsetY;this._openForm({date:d,hour:Math.max(0,Math.min(23,Math.floor(_/dt)))})}}>
              ${u.map(({event:b,top:_,height:F,lane:U,lanes:O})=>{let I=Math.max(F*dt-2,18);return l`<button class="tg-ev ${I<34?"short":""} ${b.kind&&this._checkOf(b)?"done":""}" style="${C(this._colorOfEvent(b),this._dark)}top:${_*dt}px;height:${I}px;left:calc(${U/O*100}% + 1px);width:calc(${100/O}% - 2px)" @click=${()=>this._openEvent(b)}>
                  <b>${b.kind&&this._checkOf(b)?"\u2713 ":""}${b.summary}</b>${I>=34?l`<small>${M(b.start)}${e===1&&b.location?` \xB7 ${b.location}`:""}</small>`:m}
                </button>`})}
              ${v?l`<i class="tg-now" style="top:${f}px"></i>`:m}
            </div>`})}
        </div>
      </div>
    `}_renderList(){let t=new Date(this._now),e=this._query.trim(),a=_e(e),s,i;a?(s=w(S(t),-365),i=w(S(t),366)):(s=this._cursor,i=w(this._cursor,30));let n=this._events(s,i);a&&(n=n.filter(p=>_e(`${p.summary} ${p.location} ${p.description}`).includes(a)));let o=[];for(let p of n){let h=S(p.start<s?s:p.start),d=o[o.length-1];d&&R(d.d,h)?d.list.push(p):o.push({d:h,list:[p]})}let c=this._store.loading(s,i);return l`
      <label class="search-box">
        ${g("search")}
        <input type="search" placeholder="Buscar em todos os eventos" .value=${this._query} @input=${p=>this._query=p.target.value} enterkeyhint="search" aria-label="Buscar" />
        ${this._query?l`<button class="icon-btn" style="width:40px;height:40px" @click=${()=>this._query=""} aria-label="Limpar">${g("x")}</button>`:m}
      </label>
      ${a?l`<p class="page-sub" style="margin-top:0">${c?"Buscando\u2026":A(n.length,"evento encontrado","eventos encontrados")} · do último ano ao próximo</p>`:m}
      ${o.length?l`<div class="panel agenda">
            ${o.map(({d:p,list:h})=>l`<button class="day-head ${R(p,t)?"today":""}" @click=${()=>this._openDay(p,"dia")}>${L(p,t)}<span>${h.length}</span></button>${h.map(d=>this._renderRow(d,p))}`)}
          </div>`:l`<div class="panel"><div class="empty"><div class="em-icon">${g(a?"search":"calendar-check")}</div><h3>${a?"Nada encontrado":c?"Carregando\u2026":"Nada marcado"}</h3><p>${a?`Nenhum evento com \u201C${D(e,30)}\u201D.`:"Nenhum evento nos pr\xF3ximos 30 dias."}</p></div></div>`}
    `}_renderCalendars(){let t=this._cals(),e=[];for(let i of t){let n=e.find(o=>o.label===i.group);n?n.list.push(i):e.push({label:i.group,list:[i]})}let a=this._store?this._store.errors():new Map,s=t.filter(i=>i.canCreate).length;return l`<section class="page">
      <button class="back-link" @click=${()=>(history.state&&history.state.rvDepth)>0?history.back():this._go("/mais",!0)}>${g("chevron-left")}<span>Mais</span></button>
      ${this._renderHead("Agendas",{text:t.length?`${A(t.length,"calend\xE1rio","calend\xE1rios")} \xB7 ${s?A(s,"com edi\xE7\xE3o","com edi\xE7\xE3o"):"s\xF3 leitura"}`:"Nenhum calend\xE1rio ainda"})}
      ${e.map(i=>l`<div class="panel">
          <div class="overline">${i.label}</div>
          ${i.list.map(n=>l`<div class="row cal-row ${n.hidden?"off":""}" style=${C(n.color,this._dark)}>
              <button class="tile" @click=${()=>this._openCalSheet(n)} aria-label="Personalizar ${n.name}">${g(n.icon)}</button>
              <button class="grow" style="text-align:left" @click=${()=>this._openCalSheet(n)}>
                <div class="label">${n.name}</div>
                <div class="hint">${[n.device,a.get(n.id)?"n\xE3o carregou":n.unavailable?"indispon\xEDvel":n.canCreate?n.canUpdate?"cria e edita":"cria eventos":"s\xF3 leitura"].filter(Boolean).join(" \xB7 ")}</div>
              </button>
              <label class="switch"><input type="checkbox" role="switch" .checked=${!n.hidden} @change=${o=>this._saveCalPrefs(n.id,{hidden:o.target.checked?null:!0})} aria-label="Mostrar ${n.name}" /><span class="track"></span></label>
            </div>`)}
        </div>`)}
      ${this._renderAddCalendars()}
    </section>`}_renderAddCalendars(){let t=this._isAdmin(),e=(s,i,n,o)=>l`<button class="row" @click=${o}>
      <span class="tile" style=${C(this._accent(),this._dark)}>${g(s)}</span>
      <span class="grow"><div class="label">${i}</div><div class="hint" style="white-space:normal">${n}</div></span>
      ${g("chevron-right")}
    </button>`,a=s=>()=>t?this._openInHA(`/config/integrations/dashboard/add?domain=${s}`):this._showToast("Pe\xE7a para um administrador do Home Assistant adicionar.");return l`<div class="panel">
      <div class="overline">Adicionar calendários</div>
      ${e("calendar-plus","Calend\xE1rio local","Fica no pr\xF3prio Home Assistant e aceita tudo: criar, editar, repetir.",a("local_calendar"))}
      ${e("calendar-days","Google Agenda","Integra\xE7\xE3o oficial do Home Assistant. Atualiza a cada 15 minutos.",a("google"))}
      ${e("briefcase","Outlook / Microsoft 365","Pelo MS365 Calendar (HACS) ou por um link .ics. Toque para ver como.",()=>this._openSheet("outlook",{}))}
      ${e("link","Link .ics (calend\xE1rio remoto)","Qualquer agenda publicada por link. S\xF3 leitura, atualiza uma vez por dia.",a("remote_calendar"))}
      ${e("party-popper","Feriados","Feriados nacionais e do seu estado.",a("holiday"))}
    </div>`}_openCalSheet(t){this._openSheet("calendar",{id:t.id,name:t.colorId||t.name!==t.origName?t.name:"",color:t.colorId,hidden:t.hidden})}async _saveCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return;let a=(t.name||"").trim();await this._saveCalPrefs(t.id,{name:a&&a!==e.origName?a:null,color:t.color||null,hidden:t.hidden?!0:null}),this._closeSheet(),this._showToast("Calend\xE1rio salvo")}_renderMore(){let t=this._app("accent","turquesa"),e=this._app("week_start",0),a=this._writable(),s=this._defaultCal();return l`<section class="page">
      ${this._renderHead("Mais",{text:`CronologIA ${this._version}`})}
      <div class="panel">
        <button class="row" @click=${()=>this._go("/agendas")}>
          <span class="tile" style=${C(this._accent(),this._dark)}>${g("layers")}</span>
          <span class="grow"><div class="label">Agendas</div><div class="hint">${A(this._cals().length,"calend\xE1rio","calend\xE1rios")} · nome, cor, mostrar e ocultar, adicionar</div></span>
          ${g("chevron-right")}
        </button>
      </div>
      <div class="panel">
        <div class="overline">Aparência</div>
        <div class="row col">
          <div class="label">Tema</div>
          <div class="seg" role="radiogroup" aria-label="Tema">
            ${[["auto","Autom\xE1tico","sun-moon"],["light","Claro","sun"],["dark","Escuro","moon"]].map(([i,n,o])=>l`<button class=${this._theme===i?"on":""} role="radio" aria-checked=${this._theme===i?"true":"false"} @click=${()=>this._setTheme(i)}>${g(o)}${n}</button>`)}
          </div>
          <div class="hint" style="white-space:normal">${this._theme==="auto"?"Segue o modo claro/escuro do Home Assistant.":"Vale s\xF3 para este aparelho."}</div>
        </div>
        <div class="row col">
          <div class="label">Cor do app</div>
          <div class="swatches">
            ${Xt.map(i=>l`<button class="sw ${t===i.id?"on":""}" style="--c:${i.fill}" aria-label=${i.label} @click=${()=>this._saveAppPrefs({accent:i.id})}>${t===i.id?g("check"):m}</button>`)}
          </div>
        </div>
        <div class="row col">
          <div class="label">A semana começa no</div>
          <div class="seg" role="radiogroup" aria-label="Início da semana">
            ${[[0,"Domingo"],[1,"Segunda"]].map(([i,n])=>l`<button class=${e===i?"on":""} role="radio" aria-checked=${e===i?"true":"false"} @click=${()=>this._saveAppPrefs({week_start:i})}>${n}</button>`)}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="overline">Novos eventos</div>
        ${a.length?l`<label class="field" style="margin:4px 0 14px">
              <span class="flabel">Calendário padrão</span>
              <select class="select" @change=${i=>this._saveAppPrefs({default_calendar:i.target.value})}>
                ${a.map(i=>l`<option value=${i.id} ?selected=${i.id===s}>${i.name}</option>`)}
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
    </section>`}_renderAiPanel(){let t=this._ai||{},e=t.entities||[],a=this._app("ai_entity",""),s=this._aiChecking?"off":t.ready&&t.images?"ok":t.ready?"warn":"bad",i=this._aiChecking?"Verificando\u2026":t.ready&&t.images?"Pronta para ler fotos":t.ready?"S\xF3 l\xEA mensagens":"N\xE3o configurada",n="";return t.ready&&t.using&&(n=`Usando ${t.using.name}${a?"":" (a IA padr\xE3o do Home Assistant)"}.`,t.photos&&(n+=` Para fotos, ${t.photos.name}.`)),t.reason&&(n=`${n} ${t.reason}`.trim()),l`<div class="panel" id="leitura-ia">
      <div class="overline">Leitura por IA</div>
      <p class="panel-lead">Encontra eventos em mensagens coladas, prints, convites e cartões de consulta. Usa a integração de IA configurada no Home Assistant (Anthropic Claude, OpenAI, Google Gemini ou um modelo local pelo Ollama); o app não guarda nenhuma chave.</p>
      <div class="ai-state ${s}"><span class="dot"></span><div><b>${i}</b>${n?l`<span>${n}</span>`:m}</div></div>
      ${e.length||a?l`<label class="field" style="margin:14px 0 0">
            <span class="flabel">IA usada pelo app</span>
            <select class="select" aria-label="IA usada pelo app" @change=${o=>this._chooseAi(o.target.value)}>
              <option value="" ?selected=${!a}>Padrão do Home Assistant</option>
              ${e.map(o=>l`<option value=${o.id} ?selected=${o.id===a}>${o.name}${o.images?"":" (s\xF3 texto)"}${o.available?"":" (indispon\xEDvel)"}</option>`)}
              ${a&&!e.some(o=>o.id===a)?l`<option value=${a} selected>${a} (não encontrada)</option>`:m}
            </select>
            <span class="field-hint">${g("sparkles")}<span>“Padrão do Home Assistant” usa a IA preferida definida em Configurações › Sistema › Geral.</span></span>
          </label>`:m}
      <div class="ai-actions"><button class="btn outline" ?disabled=${this._aiChecking} @click=${()=>this._refreshAi()}>${g("rotate-ccw")}Verificar de novo</button></div>
      ${t.ready&&t.images?m:l`<div class="steps-box">
            <b>Como configurar</b>
            <ol class="steps">
              <li>No Home Assistant, abra Configurações › Dispositivos e serviços › Adicionar integração.</li>
              <li>Escolha a IA: Anthropic (Claude), OpenAI, Google Gemini ou Ollama (modelo local, de graça). Cole a chave de API quando pedir.</li>
              <li>Na integração, adicione uma tarefa de IA (AI Task). Para ler fotos, use um modelo que entenda imagens.</li>
              <li>Volte aqui e escolha essa IA na lista.</li>
            </ol>
          </div>`}
    </div>`}_renderSheet(){if(!this._sheet)return m;let t=this._form||{},e=m,a=null;if(this._sheet==="event")e=this._renderEventSheet(),a=t.ev&&this._colorOfEvent(t.ev);else if(this._sheet==="form")e=this._renderFormSheet(),a=this._cal(t.cal)&&this._cal(t.cal).color;else if(this._sheet==="scope")e=this._renderScope();else if(this._sheet==="confirm")e=this._renderConfirm();else if(this._sheet==="import")e=this._renderImportSheet(),a=this._cal(t.target)&&this._cal(t.target).color;else if(this._sheet==="calendar"){e=this._renderCalSheet();let i=this._cal(t.id);a=W(t.color)||i&&i.color}else this._sheet==="export"?e=this._renderExportSheet():this._sheet==="outlook"?e=this._renderOutlookSheet():this._sheet==="nocal"?e=this._renderNoCalSheet():this._sheet==="maint"?e=this._renderMaintSheet():this._sheet==="who"?e=this._renderWhoSheet():this._sheet==="extra"?e=this._renderExtraSheet():this._sheet==="bill"&&(e=this._renderBillSheet(),a=W("ouro"));let s=a?`--rv-accent:${a.fill};--rv-accent-ink:${this._dark?a.fill:a.ink};--rv-accent-soft:${Et(a.fill,this._dark?.18:.14)};${C(a,this._dark)}`:"";return l`
      <div class="scrim" @click=${()=>this._closeSheet()}></div>
      <div class="sheet" role="dialog" aria-modal="true" style=${s} @keydown=${i=>i.key==="Escape"&&this._closeSheet()}>
        <div class="grab"></div>
        ${e}
      </div>
    `}_sheetHead(t,e){return l`<div class="sheet-head">
      ${e?l`<button class="icon-btn back" @click=${e} aria-label="Voltar">${g("chevron-left")}</button>`:m}
      <h3 class="display">${t}</h3>
      <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
    </div>`}_renderEventSheet(){let t=this._form.ev,e=new Date(this._now),a=this._cal(t.cal),s;if(t.allDay){let n=w(t.end,-1);s=R(n,t.start)?`${L(t.start,e)} \xB7 dia todo`:`${P(V(t.start,e))} \u2013 ${V(n,e)} \xB7 ${A(N(t.end,t.start),"dia","dias")}`}else R(t.start,t.end)||t.end.getHours()===0&&t.end.getMinutes()===0&&N(t.end,t.start)===1?s=`${L(t.start,e)} \xB7 ${M(t.start)} \u2013 ${M(t.end)} (${Me(t.end-t.start)})`:s=`${P(V(t.start,e))}, ${M(t.start)} \u2013 ${V(t.end,e)}, ${M(t.end)}`;let i=t.start>e?te(t.start-e):t.end>e?"acontecendo agora":"";return l`
      <div class="ev-head">
        <span class="ev-swatch"></span>
        <div class="ev-head-text">
          <h3 class="display">${t.summary}</h3>
          <p class="ev-cal">${a?a.name:t.cal}${i?l` · <b>${i}</b>`:m}</p>
        </div>
        <button class="icon-btn" @click=${()=>this._closeSheet()} aria-label="Fechar">${g("x")}</button>
      </div>
      <div class="ev-facts">
        <div class="fact">${g("clock")}<span>${s}</span></div>
        ${t.rrule?l`<div class="fact">${g("repeat")}<span>${gt(t.rrule)}</span></div>`:m}
        ${t.location?l`<a class="fact link" href=${ai(t.location)} target="_blank" rel="noopener noreferrer">${g("map-pin")}<span>${t.location}</span>${g("external-link","sm")}</a>`:m}
        ${t.kind?this._renderKindFacts(t):m}
        ${t.description&&!t.kind?l`<div class="fact notes">${g("file-text")}<span>${Na(t.description).map(n=>n.url?l`<a href=${n.url} target="_blank" rel="noopener noreferrer">${n.url}</a>`:n.text)}</span></div>`:m}
      </div>
      ${a&&!a.canUpdate&&!a.canDelete?l`<p class="sheet-note">${g("lock")} Só leitura: este calendário não deixa editar pelo Home Assistant.</p>`:m}
      <div class="sheet-actions">
        ${a&&a.canDelete&&t.uid?l`<button class="btn danger" @click=${()=>this._askDelete(t)} aria-label="Apagar">${g("trash")}</button>`:m}
        ${this._writable().length?l`<button class="btn outline" @click=${()=>this._openForm({ev:t,copy:!0})}>${g("copy")}Duplicar</button>`:m}
        ${a&&a.canUpdate&&t.uid?l`<button class="btn primary" @click=${()=>this._openForm({ev:t})}>${g("pencil")}Editar</button>`:m}
      </div>
    `}_renderFormSheet(){let t=this._form;if(t.kind)return this._renderKindForm();let e=this._writable(),a=t.mode==="edit"?t.rid?e.filter(v=>v.id===t.cal):e.filter(v=>v.id===t.origCal||this._cal(t.origCal)&&this._cal(t.origCal).canDelete):e,s=new Date,i=[{label:"Hoje",d:S(s)},{label:"Amanh\xE3",d:w(S(s),1)}],n=i.some(v=>y(v.d)===t.date),o=v=>{let f=this.renderRoot.querySelector(v);if(f)try{f.showPicker()}catch{f.focus(),f.click()}},c=v=>{if(!v)return;let f=F=>{let[U,O]=F.split(":").map(Number);return U*60+O},b=Math.max(15,(f(t.end)-f(t.start)+1440)%1440||60),_=(f(v)+b)%1440;this._setForm({start:v,end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`})},p=v=>{let[f,b]=t.start.split(":").map(Number),_=Math.min(1439,f*60+b+v);this._setForm({end:`${String(Math.floor(_/60)).padStart(2,"0")}:${String(_%60).padStart(2,"0")}`,endDate:""})},h=v=>{let[f,b]=(v||"0:0").split(":").map(Number);return f*60+b},d=(h(t.end)-h(t.start)+1440)%1440,u=!t.allDay&&!t.endDate&&h(t.end)<=h(t.start);return l`
      ${this._sheetHead(t.mode==="add"?"Novo":"Editar evento")}
      ${t.mode==="add"?this._renderModelChips(""):m}
      ${t.mode==="add"?l`<div class="imp-strip">
            <button @click=${()=>this._openImport("text")}>${g("clipboard-paste")}<span>Colar mensagem</span></button>
            <button @click=${()=>this._openImport("photos")}>${g("images")}<span>Escolher fotos</span></button>
            <button @click=${()=>this._openImport("scan")}>${g("scan-text")}<span>Digitalizar com IA</span></button>
          </div>`:m}
      <label class="field">
        <span class="flabel">Título</span>
        <textarea class="ev-title-input" rows="1" .value=${t.title} placeholder="Ex.: Dentista, Reunião, Aniversário" @input=${v=>this._setForm({title:v.target.value})} @keydown=${v=>v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),this._saveForm())}></textarea>
      </label>
      ${a.length>1?l`<div class="field">
            <span class="flabel">${t.mode==="edit"?"Calend\xE1rio (mover)":"Calend\xE1rio"}</span>
            <div class="chip-row">${a.map(v=>l`<button class="pick list ${t.cal===v.id?"on":""}" style=${C(v.color,this._dark)} @click=${()=>this._setForm({cal:v.id})}><span class="dot"></span><span>${D(v.name,24)}</span></button>`)}</div>
          </div>`:m}
      <div class="field">
        <div class="flabel-row"><span class="flabel">Quando</span>
          <label class="mini-switch"><span>Dia todo</span><span class="switch"><input type="checkbox" role="switch" .checked=${t.allDay} @change=${v=>this._setForm({allDay:v.target.checked})} aria-label="Dia todo" /><span class="track"></span></span></label>
        </div>
        <div class="chip-row">
          ${i.map(v=>l`<button class="pick ${t.date===y(v.d)?"on":""}" @click=${()=>this._setForm({date:y(v.d),endDate:t.endDate&&t.endDate<y(v.d)?"":t.endDate})}>${v.label}</button>`)}
          <button class="pick ${n?"":"on"}" @click=${()=>o("#cr-date")}>
            ${g("calendar")}<span>${n?"Outra data":P(L(k(t.date),s,{long:!1}))}</span>
            <input id="cr-date" class="hidden-input" type="date" tabindex="-1" .value=${t.date} @change=${v=>v.target.value&&this._setForm({date:v.target.value,endDate:t.endDate&&t.endDate<v.target.value?"":t.endDate})} />
          </button>
        </div>
        ${t.allDay?l`<div class="time-row">
              <span class="tl">Até</span>
              <input type="date" .value=${t.endDate||t.date} min=${t.date} @change=${v=>this._setForm({endDate:v.target.value>t.date?v.target.value:""})} />
              ${t.endDate?l`<span class="tl">${A(N(k(t.endDate),k(t.date))+1,"dia","dias")}</span>`:l`<span class="tl">um dia</span>`}
            </div>`:l`<div class="time-row">
                <input type="time" .value=${t.start} aria-label="Começa" @change=${v=>c(v.target.value)} />
                <span class="tl">até</span>
                <input type="time" .value=${t.end} aria-label="Termina" @change=${v=>v.target.value&&this._setForm({end:v.target.value})} />
              </div>
              <div class="chip-row dur">
                ${[[15,"15 min"],[30,"30 min"],[60,"1 h"],[120,"2 h"]].map(([v,f])=>l`<button class="pick ${d===v&&!t.endDate?"on":""}" @click=${()=>p(v)}>${f}</button>`)}
              </div>
              ${u?l`<div class="field-hint">${g("info")}<span>Termina no dia seguinte.</span></div>`:m}`}
      </div>
      <div class="field">
        <span class="flabel">Repetir</span>
        <div class="chip-row">${ee.map(v=>l`<button class="pick ${t.repeat===v.id?"on":""}" @click=${()=>this._setForm({repeat:v.id})}>${v.id?g("repeat"):m}<span>${v.label}</span></button>`)}</div>
        ${t.rrule&&Ft(t.rrule)===t.repeat&&gt(t.rrule)!==(ee.find(v=>v.id===t.repeat)||{}).label?l`<div class="field-hint">${g("repeat")}<span>${gt(t.rrule)}</span></div>`:m}
        ${t.rid?l`<div class="field-hint">${g("info")}<span>Este evento se repete. Ao salvar, você escolhe se muda só este ou este e os próximos.</span></div>`:m}
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
    `}_renderScope(){let t=this._form,e=t.action==="edit",a=(s,i,n,o=!1)=>l`<button class="imp-opt ${o?"danger":""}" @click=${()=>this._applyScope(s)}>
      <span class="imp-ic">${g(s==="one"?"calendar-check":s==="future"?"calendar-range":"calendar-x")}</span>
      <span class="imp-tx"><b>${i}</b><small>${n}</small></span>${g("chevron-right")}
    </button>`;return l`
      ${this._sheetHead(e?"Mudar evento que se repete":"Apagar evento que se repete")}
      <p class="sheet-note top">“${D(t.title,40)}” se repete. O que você quer ${e?"mudar":"apagar"}?</p>
      <div class="imp-options">
        ${a("one","S\xF3 este evento",e?"Os outros continuam como est\xE3o":"Os outros continuam na agenda")}
        ${a("future","Este e os pr\xF3ximos",e?"Os anteriores ficam como estavam":"Os anteriores continuam na agenda")}
        ${e?m:a("all","Toda a s\xE9rie","Apaga todas as repeti\xE7\xF5es",!0)}
      </div>
    `}_renderConfirm(){let t=this._form;return l`
      <div class="sheet-head"><h3 class="display">${t.title}</h3></div>
      <p class="confirm-text">${t.text}</p>
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._closeSheet()}>Cancelar</button>
        <button class="btn ${t.danger?"danger-fill":"primary"}" @click=${()=>t.run()}>${t.label}</button>
      </div>
    `}_renderImportSheet(){let t=this._form,e=this._ai||{},a=this._writable(),s=this._cal(t.target),i=()=>{this._importToken=0,this._setForm({step:"pick",error:null,note:null})},n=t.error?l`<div class="imp-error">${g("circle-alert")}<span>${t.error}</span></div>`:m,o=t.images&&t.images.length?l`<div class="thumbs">${t.images.map(p=>l`<img src=${p.url} alt="" />`)}</div>`:m,c=l`<div class="imp-error soft">${g("sparkles")}<span>${e.reason||"Para ler mensagens e fotos, o Home Assistant precisa de uma integra\xE7\xE3o de IA com tarefa de IA."}
      <button class="text-btn inline" @click=${()=>this._goAiSettings()}>Ver Leitura por IA</button></span></div>`;if(t.step==="text")return l`
        ${this._sheetHead("Colar mensagem",i)}
        <label class="field">
          <span class="flabel">Mensagem</span>
          <textarea rows="7" .value=${t.text} placeholder="Cole aqui o convite, a mensagem do WhatsApp ou o e-mail…" @input=${p=>this._setForm({text:p.target.value,error:null})}></textarea>
        </label>
        ${n} ${e.ready?m:c}
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
        ${this._sheetHead("Revisar eventos",i)}
        ${o}
        <p class="sheet-note top">${A(t.items.length,"evento encontrado","eventos encontrados")}${h?` \xB7 ${h}`:""}. Confira datas e horários.</p>
        ${t.note?l`<div class="imp-error soft">${g("sparkles")}<span>${t.note}</span></div>`:m}
        <div class="rv-list">
          ${t.items.map((u,v)=>l`<div class="rv-card ${u.on?"":"off"}">
              <div class="rv-top">
                <button class="check ${u.on?"on":""}" role="checkbox" aria-checked=${u.on?"true":"false"} aria-label="Incluir" @click=${()=>this._setItem(v,{on:!u.on})}>${g("check")}</button>
                <input class="rv-title" type="text" .value=${u.title} aria-label="Título" @input=${f=>this._setItem(v,{title:f.target.value})} />
                <button class="icon-btn mini" aria-label="Remover" @click=${()=>this._setForm({items:t.items.filter((f,b)=>b!==v)})}>${g("x")}</button>
              </div>
              <div class="rv-when">
                <input type="date" .value=${u.date} aria-label="Data" @change=${f=>f.target.value&&this._setItem(v,{date:f.target.value})} />
                ${u.start?l`<span class="rv-times"><input type="time" .value=${u.start} aria-label="Começa" @change=${f=>this._setItem(v,{start:f.target.value})} /><span>–</span><input type="time" .value=${u.end} aria-label="Termina" @change=${f=>this._setItem(v,{end:f.target.value})} /></span>`:l`<button class="pick ghost" @click=${()=>this._setItem(v,{start:"09:00",end:"10:00"})}>${g("clock")}<span>Dia todo</span></button>`}
              </div>
              <p class="rv-meta">${P(L(k(u.date),d))}${u.end_date?` at\xE9 ${V(k(u.end_date),d)}`:""}${u.location?` \xB7 ${u.location}`:""}${u.repeat||u.rrule?` \xB7 ${u.rrule?gt(u.rrule):ee.find(f=>f.id===u.repeat.toUpperCase()).label}`:""}</p>
            </div>`)}
        </div>
        ${e.images&&t.provider!=="ics"?l`<div class="more-row">
              <button class="pick" @click=${()=>this._pickFiles("photos")}>${g("images")}<span>Mais fotos</span></button>
              <button class="pick" @click=${()=>this._openCamera()}>${g("scan-text")}<span>Digitalizar mais</span></button>
            </div>`:m}
        ${a.length>1?l`<div class="field">
              <span class="flabel">Adicionar em</span>
              <div class="chip-row">${a.map(u=>l`<button class="pick list ${t.target===u.id?"on":""}" style=${C(u.color,this._dark)} @click=${()=>this._setForm({target:u.id})}><span class="dot"></span><span>${D(u.name,24)}</span></button>`)}</div>
            </div>`:m}
        <div class="sheet-actions">
          <button class="btn primary" ?disabled=${!p||t.adding} @click=${()=>this._importAdd()}>
            ${t.adding?"Adicionando\u2026":p?`Adicionar ${A(p,"evento","eventos")}${s&&a.length<=1?` em ${D(s.name,16)}`:""}`:"Nenhum evento marcado"}
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
      ${e.images?m:c}
      ${n}
    `}_renderCalSheet(){let t=this._form,e=this._cal(t.id);if(!e)return this._sheetHead("Calend\xE1rio");let a=W(t.color)||e.color;return l`
      ${this._sheetHead("Personalizar")}
      <div class="preview-tile" style=${C(a,this._dark)}>
        <span class="tile">${g(e.icon)}</span>
        <span class="lc-main"><span class="lc-title">${(t.name||"").trim()||e.origName}</span><span class="lc-meta">${e.group}${e.device?` \xB7 ${e.device}`:""}</span></span>
      </div>
      <label class="field">
        <span class="flabel">Nome no app</span>
        <input type="text" maxlength="60" .value=${t.name} placeholder=${e.origName} @input=${s=>this._setForm({name:s.target.value})} />
      </label>
      <div class="field">
        <span class="flabel">Cor</span>
        <div class="swatches">${Xt.map(s=>l`<button class="sw ${a.id===s.id?"on":""}" style="--c:${s.fill}" aria-label=${s.label} @click=${()=>this._setForm({color:s.id})}>${a.id===s.id?g("check"):m}</button>`)}</div>
      </div>
      <div class="row" style="border:0;padding-top:0">
        <div class="grow"><div class="label">Mostrar na agenda</div><div class="hint">${e.canCreate?e.canUpdate?"Cria e edita eventos":"Cria eventos":"S\xF3 leitura"} · <code>${e.id}</code></div></div>
        <label class="switch"><input type="checkbox" role="switch" .checked=${!t.hidden} @change=${s=>this._setForm({hidden:!s.target.checked})} aria-label="Mostrar na agenda" /><span class="track"></span></label>
      </div>
      ${this._isAdmin()?l`<button class="menu-row" @click=${()=>this._openInHA(`/calendar?entity_id=${e.id}`)}>${g("external-link")}Abrir na tela padrão do HA</button>`:m}
      <div class="sheet-actions">
        <button class="btn outline" @click=${()=>this._setForm({name:"",color:null,hidden:!1})}>${g("rotate-ccw")}Padrão</button>
        <button class="btn primary" @click=${()=>this._saveCalSheet()}>Salvar</button>
      </div>
    `}_renderExportSheet(){let t=this._form,e=this._cals(),[a,s]=this._exportRange(t.range),i=t.cals.length?this.api.exportUrl({calendars:t.cals,start:j(a),end:j(s)}):null,n=o=>this._setForm({cals:t.cals.includes(o)?t.cals.filter(c=>c!==o):[...t.cals,o]});return l`
      ${this._sheetHead("Exportar agenda")}
      <div class="field">
        <span class="flabel">Calendários</span>
        <div class="chip-row">${e.map(o=>l`<button class="pick list ${t.cals.includes(o.id)?"on":""}" style=${C(o.color,this._dark)} @click=${()=>n(o.id)}><span class="dot"></span><span>${D(o.name,24)}</span></button>`)}</div>
      </div>
      <div class="field">
        <span class="flabel">Período</span>
        <div class="chip-row">
          ${[["3m","Pr\xF3ximos 3 meses"],["12m","Pr\xF3ximos 12 meses"],["year","\xDAltimo ano e pr\xF3ximo"]].map(([o,c])=>l`<button class="pick ${t.range===o?"on":""}" @click=${()=>this._setForm({range:o})}>${c}</button>`)}
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
        ${t?l`<button class="text-btn" @click=${()=>this._openInHA("/config/integrations/dashboard/add?domain=remote_calendar")}>Adicionar calendário remoto ${g("chevron-right","sm")}</button>`:m}
      </div>
      <p class="sheet-note">Dica: vinculando a mesma agenda (Google ou Outlook) no app da Alexa, o que você pedir por voz também aparece aqui.</p>
    `}_renderNoCalSheet(){return l`
      ${this._sheetHead("Nenhum calend\xE1rio aceita eventos")}
      <p class="sheet-note top">Os calendários do Home Assistant são só de leitura. Para criar eventos por aqui, adicione um calendário que aceite edição, como o Calendário local, o Google Agenda ou o Outlook pelo MS365.</p>
      ${this._renderAddCalendars()}
    `}_renderCamera(){let t=this._cam;if(!t)return m;let e=t.shots.length;return l`
      <div class="cam" role="dialog" aria-label="Digitalizar com IA">
        <video playsinline muted autoplay></video>
        ${t.flash?l`<div class="cam-flash" .key=${t.flash}></div>`:m}
        <div class="cam-top">
          <button class="cam-btn" aria-label="Fechar" @click=${()=>this._closeCamera()}>${g("x")}</button>
          <span class="cam-title">Digitalizar com IA</span>
          ${t.torchOk?l`<button class="cam-btn ${t.torch?"on":""}" aria-label="Lanterna" @click=${()=>this._toggleTorch()}>${g("zap")}</button>`:l`<span class="cam-btn ghost"></span>`}
        </div>
        ${t.status==="error"?l`<div class="cam-msg">${g("camera")}<p>${t.error}</p><button class="btn primary" @click=${()=>this._cameraFallback()}>${g("images")}Escolher foto</button></div>`:l`<div class="cam-frame"><i></i><i></i><i></i><i></i></div>
              <p class="cam-hint">${t.status==="starting"?"Abrindo a c\xE2mera\u2026":e?`${A(e,"foto","fotos")}. Fotografe outra ou toque em Pronto.`:"Enquadre o convite ou o cart\xE3o e toque no bot\xE3o"}</p>`}
        <div class="cam-bottom">
          <div class="cam-shots">${t.shots.slice(-3).map(a=>l`<img src=${a.url} alt="" />`)}${e>3?l`<span>+${e-3}</span>`:m}</div>
          <button class="cam-shutter" aria-label="Fotografar" ?disabled=${t.status!=="live"||e>=6} @click=${()=>this._shoot()}><span></span></button>
          <button class="cam-done" ?disabled=${!e} @click=${()=>this._useShots()}>Pronto${e?` (${e})`:""}</button>
        </div>
      </div>
    `}_renderToast(){if(!this._toast)return m;let t=this._toast;return l`<div class="toast ${this._sheet?"has-sheet":""}" role="status">
      <span>${t.text}</span>
      ${t.action?l`<button @click=${()=>{this._toast=null,t.action.run()}}>${t.action.label}</button>`:m}
    </div>`}};customElements.get("cronologia-app")||customElements.define("cronologia-app",Ie);var si=document.getElementById("app"),Le=document.createElement("cronologia-app");Le.env=Fa();Le.api=new Jt;si.replaceChildren(Le);})();
