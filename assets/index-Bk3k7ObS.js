(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),ee=e=>x(e).slice(8,-1),S=e=>x(e)===`[object Object]`,C=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,te=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ne=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},re=/-\w/g,w=ne(e=>e.replace(re,e=>e.slice(1).toUpperCase())),ie=/\B([A-Z])/g,ae=ne(e=>e.replace(ie,`-$1`).toLowerCase()),oe=ne(e=>e.charAt(0).toUpperCase()+e.slice(1)),se=ne(e=>e?`on${oe(e)}`:``),T=(e,t)=>!Object.is(e,t),ce=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},le=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ue=e=>{let t=parseFloat(e);return isNaN(t)?e:t},de,fe=()=>de||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function pe(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?_e(r):pe(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var me=/;(?![^(]*\))/g,he=/:([^]+)/,ge=/\/\*[^]*?\*\//g;function _e(e){let t={};return e.replace(ge,``).split(me).forEach(e=>{if(e){let n=e.split(he);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function E(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=E(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ve=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ye=e(ve);ve+``;function be(e){return!!e||e===``}function xe(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Se(e[r],t[r]);return n}function Se(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?xe(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Se(e[n],t[n]))return!1}}return String(e)===String(t)}var Ce=e=>!!(e&&e.__v_isRef===!0),D=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ce(e)?D(e.value):JSON.stringify(e,we,2):String(e),we=(e,t)=>Ce(t)?we(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Te(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Te(e))}:_(t)?Te(t):v(t)&&!d(t)&&!S(t)?String(t):t,Te=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,Ee,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ee;try{return Ee=this,e()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return Ee}var O,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=O,t=Ue;O=this,Ue=!0;try{return this.fn()}finally{Re(this),O=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=O,r=Ue;O=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||T(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{O=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0?!0:e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=O;O=void 0;try{t()}finally{O=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!O||!Ue||O===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==O)t=this.activeLink=new Ye(O,this),O.deps?(t.prevDep=O.depsTail,O.depsTail.nextDep=t,O.depsTail=t):O.deps=O.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=O.depsTail,t.nextDep=void 0,O.depsTail.nextDep=t,O.depsTail=t,O.deps===t&&(O.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function nt(e,t,n){if(Ue&&O){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function rt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&C(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e));break}}Ie()}function it(e){let t=k(e);return t===e?t:(nt(t,`iterate`,tt),Wt(e)?t:t.map(qt))}function at(e){return nt(e=k(e),`iterate`,tt),e}function ot(e,t){return Ut(e)?Jt(Ht(e)?qt(t):t):qt(t)}var st={__proto__:null,[Symbol.iterator](){return ct(this,Symbol.iterator,e=>ot(this,e))},concat(...e){return it(this).concat(...e.map(e=>d(e)?it(e):e))},entries(){return ct(this,`entries`,e=>(e[1]=ot(this,e[1]),e))},every(e,t){return ut(this,`every`,e,t,void 0,arguments)},filter(e,t){return ut(this,`filter`,e,t,e=>e.map(e=>ot(this,e)),arguments)},find(e,t){return ut(this,`find`,e,t,e=>ot(this,e),arguments)},findIndex(e,t){return ut(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ut(this,`findLast`,e,t,e=>ot(this,e),arguments)},findLastIndex(e,t){return ut(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ut(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ft(this,`includes`,e)},indexOf(...e){return ft(this,`indexOf`,e)},join(e){return it(this).join(e)},lastIndexOf(...e){return ft(this,`lastIndexOf`,e)},map(e,t){return ut(this,`map`,e,t,void 0,arguments)},pop(){return pt(this,`pop`)},push(...e){return pt(this,`push`,e)},reduce(e,...t){return dt(this,`reduce`,e,t)},reduceRight(e,...t){return dt(this,`reduceRight`,e,t)},shift(){return pt(this,`shift`)},some(e,t){return ut(this,`some`,e,t,void 0,arguments)},splice(...e){return pt(this,`splice`,e)},toReversed(){return it(this).toReversed()},toSorted(e){return it(this).toSorted(e)},toSpliced(...e){return it(this).toSpliced(...e)},unshift(...e){return pt(this,`unshift`,e)},values(){return ct(this,`values`,e=>ot(this,e))}};function ct(e,t,n){let r=at(e),i=r[t]();return r!==e&&!Wt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var lt=Array.prototype;function ut(e,t,n,r,i,a){let o=at(e),s=o!==e&&!Wt(e),c=o[t];if(c!==lt[t]){let t=c.apply(e,a);return s?qt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ot(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function dt(e,t,n,r){let i=at(e),a=i!==e&&!Wt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ot(e,t)),n.call(this,t,ot(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ot(e,c):c}function ft(e,t,n){let r=k(e);nt(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Gt(n[0])?(n[0]=k(n[0]),r[t](...n)):i}function pt(e,t,n=[]){Ge(),Fe();let r=k(e)[t].apply(e,n);return Ie(),Ke(),r}var mt=e(`__proto__,__v_isRef,__isVue`),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function gt(e){_(e)||(e=String(e));let t=k(this);return nt(t,`has`,e),t.hasOwnProperty(e)}var _t=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ft:Pt:i?Nt:Mt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=st[t]))return e;if(t===`hasOwnProperty`)return gt}let o=Reflect.get(e,t,Yt(e)?e:n);if((_(t)?ht.has(t):mt(t))||(r||nt(e,`get`,t),i))return o;if(Yt(o)){let e=a&&C(t)?o:o.value;return r&&v(e)?Bt(e):e}return v(o)?r?Bt(o):Rt(o):o}},vt=class extends _t{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&C(t);if(!this._isShallow){let e=Ut(i);if(!Wt(n)&&!Ut(n)&&(i=k(i),n=k(n)),!a&&Yt(i)&&!Yt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Yt(e)?e:r);return e===k(r)&&(o?T(n,i)&&rt(e,`set`,t,n,i):rt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&rt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ht.has(t))&&nt(e,`has`,t),n}ownKeys(e){return nt(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},yt=class extends _t{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},bt=new vt,xt=new yt,St=new vt(!0),Ct=e=>e,wt=e=>Reflect.getPrototypeOf(e);function Tt(e,t,n){return function(...r){let i=this.__v_raw,a=k(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?Ct:t?Jt:qt;return!t&&nt(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Et(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Dt(e,t){let n={get(n){let r=this.__v_raw,i=k(r),a=k(n);e||(T(n,a)&&nt(i,`get`,n),nt(i,`get`,a));let{has:o}=wt(i),s=t?Ct:e?Jt:qt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&nt(k(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=k(n),i=k(t);return e||(T(t,i)&&nt(r,`has`,t),nt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=k(a),s=t?Ct:e?Jt:qt;return!e&&nt(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Et(`add`),set:Et(`set`),delete:Et(`delete`),clear:Et(`clear`)}:{add(e){let n=k(this),r=wt(n),i=k(e),a=!t&&!Wt(e)&&!Ut(e)?i:e;return r.has.call(n,a)||T(e,a)&&r.has.call(n,e)||T(i,a)&&r.has.call(n,i)||(n.add(a),rt(n,`add`,a,a)),this},set(e,n){!t&&!Wt(n)&&!Ut(n)&&(n=k(n));let r=k(this),{has:i,get:a}=wt(r),o=i.call(r,e);o||=(e=k(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?T(n,s)&&rt(r,`set`,e,n,s):rt(r,`add`,e,n),this},delete(e){let t=k(this),{has:n,get:r}=wt(t),i=n.call(t,e);i||=(e=k(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&rt(t,`delete`,e,void 0,a),o},clear(){let e=k(this),t=e.size!==0,n=e.clear();return t&&rt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Tt(r,e,t)}),n}function Ot(e,t){let n=Dt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var kt={get:Ot(!1,!1)},At={get:Ot(!1,!0)},jt={get:Ot(!0,!1)},Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap;function It(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Lt(e){return e.__v_skip||!Object.isExtensible(e)?0:It(ee(e))}function Rt(e){return Ut(e)?e:Vt(e,!1,bt,kt,Mt)}function zt(e){return Vt(e,!1,St,At,Nt)}function Bt(e){return Vt(e,!0,xt,jt,Pt)}function Vt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Lt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Ht(e){return Ut(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Wt(e){return!!(e&&e.__v_isShallow)}function Gt(e){return e?!!e.__v_raw:!1}function k(e){let t=e&&e.__v_raw;return t?k(t):e}function Kt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&le(e,`__v_skip`,!0),e}var qt=e=>v(e)?Rt(e):e,Jt=e=>v(e)?Bt(e):e;function Yt(e){return e?e.__v_isRef===!0:!1}function Xt(e){return Qt(e,!1)}function Zt(e){return Qt(e,!0)}function Qt(e,t){return Yt(e)?e:new $t(e,t)}var $t=class{constructor(e,t){this.dep=new Xe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:k(e),this._value=t?e:qt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Wt(e)||Ut(e);e=n?e:k(e),T(e,t)&&(this._rawValue=e,this._value=n?e:qt(e),this.dep.trigger())}};function A(e){return Yt(e)?e.value:e}var en={get:(e,t,n)=>t===`__v_raw`?e:A(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Yt(i)&&!Yt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function tn(e){return Ht(e)?e:new Proxy(e,en)}var nn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&O!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function rn(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new nn(r,i,n)}var an={},on=new WeakMap,sn=void 0;function cn(e,t=!1,n=sn){if(n){let t=on.get(n);t||on.set(n,t=[]),t.push(e)}}function ln(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Wt(e)||o===!1||o===0?un(e,1):un(e),m,g,_,v,y=!1,b=!1;if(Yt(e)?(g=()=>e.value,y=Wt(e)):Ht(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Ht(e)||Wt(e)),g=()=>e.map(e=>{if(Yt(e))return e.value;if(Ht(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=sn;sn=m;try{return f?f(e,3,[v]):e(v)}finally{sn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>un(e(),t)}let x=Oe(),ee=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),ee()}}let S=b?Array(e.length).fill(an):an,C=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>T(e,S[t])):T(e,S))){_&&_();let t=sn;sn=m;try{let t=[e,S===an?void 0:b&&S[0]===an?[]:S,v];S=e,f?f(n,3,t):n(...t)}finally{sn=t}}}else m.run()};return u&&u(C),m=new Ae(g),m.scheduler=l?()=>l(C,!1):C,v=e=>cn(e,!1,m),_=m.onStop=()=>{let e=on.get(m);if(e){if(f)f(e,4);else for(let t of e)t();on.delete(m)}},n?a?C(!0):S=m.run():l?l(C.bind(null,!0),!0):m.run(),ee.pause=m.pause.bind(m),ee.resume=m.resume.bind(m),ee.stop=ee,ee}function un(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Yt(e))un(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)un(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{un(e,t,n)});else if(S(e)){for(let r in e)un(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&un(e[r],t,n)}return e}function dn(e,t,n,r){try{return r?e(...r):e()}catch(e){pn(e,t,n)}}function fn(e,t,n,r){if(h(e)){let i=dn(e,t,n,r);return i&&y(i)&&i.catch(e=>{pn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(fn(e[a],t,n,r));return i}}function pn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),dn(o,null,10,[e,i,a]),Ke();return}}mn(e,r,a,i,s)}function mn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var hn=[],gn=-1,_n=[],vn=null,yn=0,bn=Promise.resolve(),xn=null;function Sn(e){let t=xn||bn;return e?t.then(this?e.bind(this):e):t}function Cn(e){let t=gn+1,n=hn.length;for(;t<n;){let r=t+n>>>1,i=hn[r],a=kn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function wn(e){if(!(e.flags&1)){let t=kn(e),n=hn[hn.length-1];!n||!(e.flags&2)&&t>=kn(n)?hn.push(e):hn.splice(Cn(t),0,e),e.flags|=1,Tn()}}function Tn(){xn||=bn.then(An)}function En(e){d(e)?_n.push(...e):vn&&e.id===-1?vn.splice(yn+1,0,e):e.flags&1||(_n.push(e),e.flags|=1),Tn()}function Dn(e,t,n=gn+1){for(;n<hn.length;n++){let t=hn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;hn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function On(e){if(_n.length){let e=[...new Set(_n)].sort((e,t)=>kn(e)-kn(t));if(_n.length=0,vn){vn.push(...e);return}for(vn=e,yn=0;yn<vn.length;yn++){let e=vn[yn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vn=null,yn=0}}var kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function An(e){try{for(gn=0;gn<hn.length;gn++){let e=hn[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),dn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<hn.length;gn++){let e=hn[gn];e&&(e.flags&=-2)}gn=-1,hn.length=0,On(e),xn=null,(hn.length||_n.length)&&An(e)}}var jn=null,Mn=null;function Nn(e){let t=jn;return jn=e,Mn=e&&e.type.__scopeId||null,t}function Pn(e,t=jn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&na(-1);let i=Nn(t),a;try{a=e(...n)}finally{Nn(i),r._d&&na(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Fn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),fn(c,n,8,[e.el,s,e,t]),Ke())}}function In(e,t){if(Ca){let n=Ca.provides,r=Ca.parent&&Ca.parent.provides;r===n&&(n=Ca.provides=Object.create(r)),n[e]=t}}function Ln(e,t,n=!1){let r=wa();if(r||ai){let i=ai?ai._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Rn=Symbol.for(`v-scx`),zn=()=>Ln(Rn);function Bn(e,t,n){return Vn(e,t,n)}function Vn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Aa){if(c===`sync`){let e=zn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Ca;u.call=(e,t,n)=>fn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Ii(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():wn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=ln(e,n,u);return Aa&&(f?f.push(h):d&&h()),h}function Hn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Un(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Da(this),s=Vn(i,a.bind(r),n);return o(),s}function Un(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Wn=new WeakMap,Gn=Symbol(`_vte`),Kn=e=>e.__isTeleport,qn=e=>e&&(e.disabled||e.disabled===``),Jn=e=>e&&(e.defer||e.defer===``),Yn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Xn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Zn=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Qn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=qn(t.props),{dynamicChildren:v}=t,y=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},b=(e=t)=>{let n=qn(e.props),r=e.target=Zn(e.props,m),a=rr(r,e,h,p);r&&(o!==`svg`&&Yn(r)?o=`svg`:o!==`mathml`&&Xn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(y(e,r,a),nr(e,!1)))},x=e=>{let t=()=>{Wn.get(e)===t&&(Wn.delete(e),qn(e.props)&&(y(e,n,e.anchor),nr(e,!0)),b(e))};Wn.set(e,t),Ii(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Jn(t.props)||a&&a.pendingBranch){x(t);return}_&&(y(t,n,i),nr(t,!0)),b()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Wn.get(e);if(u){u.flags|=8,Wn.delete(e),x(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=qn(e.props),y=g?n:p,b=g?r:h;if(o===`svg`||Yn(p)?o=`svg`:(o===`mathml`||Xn(p))&&(o=`mathml`),v?(f(e.dynamicChildren,v,y,i,a,o,s),Hi(e,t,!0)):c||d(e,t,y,b,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):$n(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Zn(t.props,m);e&&$n(t,e,null,l,0)}else g&&$n(t,p,h,l,1);nr(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=a||!qn(f),m=Wn.get(e);if(m&&(m.flags|=8,Wn.delete(e),p=!1),d&&(i(l),i(u)),a&&i(c),o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,p,!!i.dynamicChildren)}},move:$n,hydrate:er};function $n(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||qn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function er(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Zn(t.props,c),h=qn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||rr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||rr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),nr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var tr=Qn;function nr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function rr(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Gn]=o,e&&(r(a,e,i),r(o,e,i)),o}var ir=Symbol(`_leaveCb`);function ar(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ar(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function j(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function or(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function sr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var cr=new WeakMap;function lr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>lr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(dr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&lr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?za(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=k(v),b=v===t?i:e=>sr(_,e)?!1:u(y,e),x=(e,t)=>!(t&&sr(_,t));if(m!=null&&m!==p){if(ur(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Yt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))dn(p,f,12,[l,_]);else{let t=g(p),n=Yt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),cr.delete(e)};t.id=-1,cr.set(e,t),Ii(t,r)}else ur(e),i()}}}function ur(e){let t=cr.get(e);t&&(t.flags|=8,cr.delete(e))}fe().requestIdleCallback,fe().cancelIdleCallback;var dr=e=>!!e.type.__asyncLoader,fr=e=>e.type.__isKeepAlive;function pr(e,t){hr(e,`a`,t)}function mr(e,t){hr(e,`da`,t)}function hr(e,t,n=Ca){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(_r(t,r,n),n){let e=n.parent;for(;e&&e.parent;)fr(e.parent.vnode)&&gr(r,t,n,e),e=e.parent}}function gr(e,t,n,r){let i=_r(t,e,r,!0);wr(()=>{c(r[t],i)},n)}function _r(e,t,n=Ca,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=Da(n),a=fn(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var vr=e=>(t,n=Ca)=>{(!Aa||e===`sp`)&&_r(e,(...e)=>t(...e),n)},yr=vr(`bm`),br=vr(`m`),xr=vr(`bu`),Sr=vr(`u`),Cr=vr(`bum`),wr=vr(`um`),Tr=vr(`sp`),Er=vr(`rtg`),Dr=vr(`rtc`);function Or(e,t=Ca){_r(`ec`,e,t)}var kr=`components`;function Ar(e,t){return Mr(kr,e,!0,t)||e}var jr=Symbol.for(`v-ndc`);function Mr(e,t,n=!0,r=!1){let i=jn||Ca;if(i){let n=i.type;if(e===kr){let e=Ba(n,!1);if(e&&(e===t||e===w(t)||e===oe(w(t))))return n}let a=Nr(i[e]||n[e],t)||Nr(i.appContext[e],t);return!a&&r?n:a}}function Nr(e,t){return e&&(e[t]||e[w(t)]||e[oe(w(t))])}function M(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Ht(e),r=!1,s=!1;n&&(r=!Wt(e),s=Ut(e),e=at(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Jt(qt(e[n])):qt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Pr(e,t,n={},r,i){if(jn.ce||jn.parent&&dr(jn.parent)&&jn.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),P(),ia(N,null,[L(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),P();let o=a&&Fr(a(n)),s=n.key||o&&o.key,c=ia(N,{key:(s&&!_(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function Fr(e){return e.some(e=>aa(e)?!(e.type===Xi||e.type===N&&!Fr(e.children)):!0)?e:null}var Ir=e=>e?ka(e)?za(e):Ir(e.parent):null,Lr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||=()=>{wn(e.update)},$nextTick:e=>e.n||=Sn.bind(e.proxy),$watch:e=>Hn.bind(e)}),Rr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),zr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Rr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Vr&&(s[n]=0)}let d=Lr[n],f,p;if(d)return n===`$attrs`&&nt(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Rr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Rr(n,c)||u(o,c)||u(i,c)||u(Lr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Br(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Vr=!0;function Hr(e){let t=Kr(e),n=e.proxy,i=e.ctx;Vr=!1,t.beforeCreate&&Wr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:ee,destroyed:S,unmounted:C,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:w,serverPrefetch:ie,expose:ae,inheritAttrs:oe,components:se,directives:T,filters:ce}=t;if(u&&Ur(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Rt(t))}if(Vr=!0,o)for(let e in o){let t=o[e],a=Ha({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Gr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{In(t,e[t])})}f&&Wr(f,e,`c`);function le(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(le(yr,p),le(br,m),le(xr,g),le(Sr,_),le(pr,y),le(mr,b),le(Or,w),le(Dr,ne),le(Er,re),le(Cr,ee),le(wr,C),le(Tr,ie),d(ae))if(ae.length){let t=e.exposed||={};ae.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===r&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),T&&(e.directives=T),ie&&or(e)}function Ur(e,t,n=r){d(e)&&(e=Zr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Ln(r.from||n,r.default,!0):Ln(r.from||n):Ln(r),Yt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Wr(e,t,n){fn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gr(e,t,n,r){let i=r.includes(`.`)?Un(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Bn(i,n)}else if(h(e))Bn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Gr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Bn(i,r,e)}}function Kr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>qr(c,e,o,!0)),qr(c,t,o)),v(t)&&a.set(t,c),c}function qr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&qr(e,a,n,!0),i&&i.forEach(t=>qr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Jr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Jr={data:Yr,props:ei,emits:ei,methods:$r,computed:$r,beforeCreate:Qr,created:Qr,beforeMount:Qr,mounted:Qr,beforeUpdate:Qr,updated:Qr,beforeDestroy:Qr,beforeUnmount:Qr,destroyed:Qr,unmounted:Qr,activated:Qr,deactivated:Qr,errorCaptured:Qr,serverPrefetch:Qr,components:$r,directives:$r,watch:ti,provide:Yr,inject:Xr};function Yr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Xr(e,t){return $r(Zr(e),Zr(t))}function Zr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qr(e,t){return e?[...new Set([].concat(e,t))]:t}function $r(e,t){return e?s(Object.create(null),e,t):t}function ei(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Br(e),Br(t??{})):t}function ti(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Qr(e[r],t[r]);return n}function ni(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ri=0;function ii(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=ni(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:ri++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Wa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||L(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,za(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(fn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=ai;ai=l;try{return e()}finally{ai=t}}};return l}}var ai=null,oi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${ae(t)}Modifiers`];function si(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&oi(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(ue)));let c,l=i[c=se(n)]||i[c=se(w(n))];!l&&o&&(l=i[c=se(ae(n))]),l&&fn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,fn(u,e,6,a)}}var ci=new WeakMap;function li(e,t,n=!1){let r=n?ci:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=li(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function ui(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ae(t))||u(e,t))}function di(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Nn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ha(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ha(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:fi(c)}}catch(t){Qi.length=0,pn(t,e,1),v=L(Xi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=pi(y,a)),b=da(b,y,!1,!0))}return n.dirs&&(b=da(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&ar(b,n.transition),v=b,Nn(_),v}var fi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},pi=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(gi(o,r,n)&&!ui(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,l):!0:!!o;return!1}function hi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(gi(t,e,a)&&!ui(n,a))return!0}return!1}function gi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Se(r,i):r!==i}function _i({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var vi={},yi=()=>Object.create(vi),bi=e=>Object.getPrototypeOf(e)===vi;function xi(e,t,n,r=!1){let i={},a=yi();e.propsDefaults=Object.create(null),Ci(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:zt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Si(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=k(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ui(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=w(o);i[t]=wi(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Ci(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ae(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=wi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&rt(e.attrs,`set`,``)}function Ci(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(te(t))continue;let l=n[t],d;a&&u(a,d=w(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:ui(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=k(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=wi(a,n,s,i[s],e,!u(i,s))}}return s}function wi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Da(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ae(n))&&(r=!0))}return r}var Ti=new WeakMap;function Ei(e,r,i=!1){let a=i?Ti:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Ei(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=w(c[e]);Di(n)&&(l[n]=t)}else if(c)for(let e in c){let t=w(e);if(Di(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Di(e){return e[0]!==`$`&&!te(e)}var Oi=e=>e===`_`||e===`_ctx`||e===`$stable`,ki=e=>d(e)?e.map(ha):[ha(e)],Ai=(e,t,n)=>{if(t._n)return t;let r=Pn((...e)=>ki(t(...e)),n);return r._c=!1,r},ji=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Oi(n))continue;let i=e[n];if(h(i))t[n]=Ai(n,i,r);else if(i!=null){let e=ki(i);t[n]=()=>e}}},Mi=(e,t)=>{let n=ki(t);e.slots.default=()=>n},Ni=(e,t,n)=>{for(let r in t)(n||!Oi(r))&&(e[r]=t[r])},Pi=(e,t,n)=>{let r=e.slots=yi();if(e.vnode.shapeFlag&32){let e=t._;e?(Ni(r,t,n),n&&le(r,`_`,e,!0)):ji(t,r)}else t&&Mi(e,t)},Fi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Ni(a,n,r):(o=!n.$stable,ji(n,a)),s=n}else n&&(Mi(e,n),s={default:1});if(o)for(let e in a)!Oi(e)&&s[e]==null&&delete a[e]},Ii=Ji;function Li(e){return Ri(e)}function Ri(e,i){let a=fe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!oa(e,t)&&(r=Se(e),E(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Yi:y(e,t,n,r);break;case Xi:b(e,t,n,r);break;case Zi:e??x(t,n,r,o);break;case N:se(e,t,n,r,i,a,o,s,c);break;default:d&1?C(e,t,n,r,i,a,o,s,c):d&6?T(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,we)}u!=null&&i?lr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&lr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},ee=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},C=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ne(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ie(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ne=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&w(e.children,d,null,r,i,zi(e,a),s,u),_&&Fn(e,null,r,`created`),re(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!te(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ya(f,r,e)}_&&Fn(e,null,r,`beforeMount`);let v=Vi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Ii(()=>{try{f&&ya(f,r,e),v&&g.enter(d),_&&Fn(e,null,r,`mounted`)}finally{}},i)},re=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||qi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;re(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},w=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?ga(e[l]):ha(e[l]),t,n,r,i,a,o,s)},ie=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Bi(r,!1),(g=h.onVnodeBeforeUpdate)&&ya(g,r,n,e),f&&Fn(n,e,r,`beforeUpdate`),r&&Bi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ae(e.dynamicChildren,d,l,r,i,zi(n,a),o):s||me(e,n,l,null,r,i,zi(n,a),o,!1),u>0){if(u&16)oe(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&oe(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Ii(()=>{g&&ya(g,r,n,e),f&&Fn(n,e,r,`updated`)},i)},ae=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===N||!oa(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},oe=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!te(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(te(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),w(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ae(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Hi(e,t,!0)):me(e,t,n,f,i,a,s,c,l)},T=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):ue(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=Sa(e,r,i);if(fr(e)&&(s.ctx.renderer=we),ja(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=L(Xi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},ue=(e,t,n)=>{let r=t.component=e.component;if(mi(e,t,n))if(r.asyncDep&&!r.asyncResolved){pe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Wi(e);if(n){t&&(t.el=c.el,pe(e,t,o)),n.asyncDep.then(()=>{Ii(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Bi(e,!1),t?(t.el=c.el,pe(e,t,o)):t=c,n&&ce(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ya(d,s,t,c),Bi(e,!0);let f=di(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Se(p),e,i,a),t.el=f.el,u===null&&_i(e,f.el),r&&Ii(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Ii(()=>ya(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=dr(t);if(Bi(e,!1),l&&ce(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ya(o,d,t),Bi(e,!0),s&&Ee){let t=()=>{e.subTree=di(e),Ee(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=di(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ii(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ii(()=>ya(o,d,e),i)}(t.shapeFlag&256||d&&dr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ii(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>wn(u),Bi(e,!0),l()},pe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Si(e,t.props,r,n),Fi(e,t.children,n),Ge(),Dn(e),Ke()},me=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ge(l,d,n,r,i,a,o,s,c);return}else if(f&256){he(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&xe(l,i,a),d!==l&&p(n,d)):u&16?m&16?ge(l,d,n,r,i,a,o,s,c):xe(l,i,a,!0):(u&8&&p(n,``),m&16&&w(d,n,r,i,a,o,s,c))},he=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?ga(t[p]):ha(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?xe(e,a,o,!0,!1,f):w(t,r,i,a,o,s,c,l,f)},ge=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ga(t[u]):ha(t[u]);if(oa(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ga(t[p]):ha(t[p]);if(oa(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ga(t[u]):ha(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)E(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ga(t[u]):ha(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,ee=0,S=Array(b);for(u=0;u<b;u++)S[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){E(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(S[_-h]===0&&oa(n,t[_])){i=_;break}i===void 0?E(n,a,o,!0):(S[i-h]=u+1,i>=ee?ee=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let C=x?Ui(S):n;for(_=C.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ki(f):i;S[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==C[_]?_e(n,r,p,2):_--)}}},_e=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){_e(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,we);return}if(c===N){o(a,t,n);for(let e=0;e<u.length;e++)_e(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Zi){ee(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),Ii(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[ir](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},E=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ge(),lr(s,null,n,e,!0),Ke()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!dr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ya(_,t,e),u&6)be(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Fn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,we,r):l&&!l.hasOnce&&(a!==N||d>0&&d&64)?xe(l,t,n,!1,!0):(a===N&&d&384||!i&&u&16)&&xe(c,t,n),r&&ve(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Ii(()=>{_&&ya(_,t,e),h&&Fn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ve=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===N){ye(n,r);return}if(t===Zi){S(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ye=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},be=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Gi(c),Gi(l),r&&ce(r),i.stop(),a&&(a.flags|=8,E(o,e,t,n)),s&&Ii(s,t),Ii(()=>{e.isUnmounted=!0},t)},xe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)E(e[o],t,n,r,i)},Se=e=>{if(e.shapeFlag&6)return Se(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Gn];return n?h(n):t},Ce=!1,D=(e,t,n)=>{let r;e==null?t._vnode&&(E(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Ce||=(Ce=!0,Dn(r),On(),!1)},we={p:v,um:E,m:_e,r:ve,mt:le,mc:w,pc:me,pbc:ae,n:Se,o:e},Te,Ee;return i&&([Te,Ee]=i(we)),{render:D,hydrate:Te,createApp:ii(D,Te)}}function zi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Bi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ga(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Hi(t,a)),a.type===Yi&&(a.patchFlag===-1&&(a=i[e]=ga(a)),a.el=t.el),a.type===Xi&&!a.el&&(a.el=t.el)}}function Ui(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Wi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wi(t)}function Gi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ki(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ki(t.subTree):null}var qi=e=>e.__isSuspense;function Ji(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):En(e)}var N=Symbol.for(`v-fgt`),Yi=Symbol.for(`v-txt`),Xi=Symbol.for(`v-cmt`),Zi=Symbol.for(`v-stc`),Qi=[],$i=null;function P(e=!1){Qi.push($i=e?null:[])}function ea(){Qi.pop(),$i=Qi[Qi.length-1]||null}var ta=1;function na(e,t=!1){ta+=e,e<0&&$i&&t&&($i.hasOnce=!0)}function ra(e){return e.dynamicChildren=ta>0?$i||n:null,ea(),ta>0&&$i&&$i.push(e),e}function F(e,t,n,r,i,a){return ra(I(e,t,n,r,i,a,!0))}function ia(e,t,n,r,i){return ra(L(e,t,n,r,i,!0))}function aa(e){return e?e.__v_isVNode===!0:!1}function oa(e,t){return e.type===t.type&&e.key===t.key}var sa=({key:e})=>e??null,ca=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Yt(e)||h(e)?{i:jn,r:e,k:t,f:!!n}:e);function I(e,t=null,n=null,r=0,i=null,a=e===N?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sa(t),ref:t&&ca(t),scopeId:Mn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jn};return s?(_a(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ta>0&&!o&&$i&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&$i.push(c),c}var L=la;function la(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===jr)&&(e=Xi),aa(e)){let r=da(e,t,!0);return n&&_a(r,n),ta>0&&!a&&$i&&(r.shapeFlag&6?$i[$i.indexOf(e)]=r:$i.push(r)),r.patchFlag=-2,r}if(Va(e)&&(e=e.__vccOpts),t){t=ua(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=E(e)),v(n)&&(Gt(n)&&!d(n)&&(n=s({},n)),t.style=pe(n))}let o=g(e)?1:qi(e)?128:Kn(e)?64:v(e)?4:h(e)?2:0;return I(e,t,n,r,i,o,a,!0)}function ua(e){return e?Gt(e)||bi(e)?s({},e):e:null}function da(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?va(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sa(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ca(t)):[a,ca(t)]:ca(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==N?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&da(e.ssContent),ssFallback:e.ssFallback&&da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ar(u,c.clone(u)),u}function fa(e=` `,t=0){return L(Yi,null,e,t)}function pa(e,t){let n=L(Zi,null,e);return n.staticCount=t,n}function ma(e=``,t=!1){return t?(P(),ia(Xi,null,e)):L(Xi,null,e)}function ha(e){return e==null||typeof e==`boolean`?L(Xi):d(e)?L(N,null,e.slice()):aa(e)?ga(e):L(Yi,null,String(e))}function ga(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:da(e)}function _a(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),_a(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!bi(t)?t._ctx=jn:r===3&&jn&&(jn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:jn},n=32):(t=String(t),r&64?(n=16,t=[fa(t)]):n=8);e.children=t,e.shapeFlag|=n}function va(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=E([t.class,r.class]));else if(e===`style`)t.style=pe([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ya(e,t,n,r=null){fn(e,t,7,[n,r])}var ba=ni(),xa=0;function Sa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ba,o={uid:xa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ei(i,a),emitsOptions:li(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=si.bind(null,o),e.ce&&e.ce(o),o}var Ca=null,wa=()=>Ca||jn,Ta,Ea;{let e=fe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Ta=t(`__VUE_INSTANCE_SETTERS__`,e=>Ca=e),Ea=t(`__VUE_SSR_SETTERS__`,e=>Aa=e)}var Da=e=>{let t=Ca;return Ta(e),e.scope.on(),()=>{e.scope.off(),Ta(t)}},Oa=()=>{Ca&&Ca.scope.off(),Ta(null)};function ka(e){return e.vnode.shapeFlag&4}var Aa=!1;function ja(e,t=!1,n=!1){t&&Ea(t);let{props:r,children:i}=e.vnode,a=ka(e);xi(e,r,a,t),Pi(e,i,n||t);let o=a?Ma(e,t):void 0;return t&&Ea(!1),o}function Ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zr);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?Ra(e):null,i=Da(e),a=dn(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!dr(e)&&or(e),o){if(a.then(Oa,Oa),t)return a.then(n=>{Na(e,n,t)}).catch(t=>{pn(t,e,0)});e.asyncDep=a}else Na(e,a,t)}else Ia(e,t)}function Na(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=tn(t)),Ia(e,n)}var Pa,Fa;function Ia(e,t,n){let i=e.type;if(!e.render){if(!t&&Pa&&!i.render){let t=i.template||Kr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=Pa(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,Fa&&Fa(e)}{let t=Da(e);Ge();try{Hr(e)}finally{Ke(),t()}}}var La={get(e,t){return nt(e,`get`,``),e[t]}};function Ra(e){return{attrs:new Proxy(e.attrs,La),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function za(e){return e.exposed?e.exposeProxy||=new Proxy(tn(Kt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lr)return Lr[n](e)},has(e,t){return t in e||t in Lr}}):e.proxy}function Ba(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function Va(e){return h(e)&&`__vccOpts`in e}var Ha=(e,t)=>rn(e,t,Aa);function Ua(e,t,n){try{na(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?aa(t)?L(e,null,[t]):L(e,t):L(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),L(e,t,n))}finally{na(1)}}var Wa=`3.5.32`,Ga=void 0,Ka=typeof window<`u`&&window.trustedTypes;if(Ka)try{Ga=Ka.createPolicy(`vue`,{createHTML:e=>e})}catch{}var qa=Ga?e=>Ga.createHTML(e):e=>e,Ja=`http://www.w3.org/2000/svg`,Ya=`http://www.w3.org/1998/Math/MathML`,Xa=typeof document<`u`?document:null,Za=Xa&&Xa.createElement(`template`),Qa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Xa.createElementNS(Ja,e):t===`mathml`?Xa.createElementNS(Ya,e):n?Xa.createElement(e,{is:n}):Xa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Xa.createTextNode(e),createComment:e=>Xa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Za.innerHTML=qa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Za.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$a=Symbol(`_vtc`);function eo(e,t,n){let r=e[$a];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var to=Symbol(`_vod`),no=Symbol(`_vsh`),ro=Symbol(``),io=/(?:^|;)\s*display\s*:/;function ao(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??so(r,t,``)}else for(let e in t)n[e]??so(r,e,``);for(let e in n)e===`display`&&(a=!0),so(r,e,n[e])}else if(i){if(t!==n){let e=r[ro];e&&(n+=`;`+e),r.cssText=n,a=io.test(n)}}else t&&e.removeAttribute(`style`);to in e&&(e[to]=a?r.display:``,e[no]&&(r.display=`none`))}var oo=/\s*!important$/;function so(e,t,n){if(d(n))n.forEach(n=>so(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=uo(e,t);oo.test(n)?e.setProperty(ae(r),n.replace(oo,``),`important`):e[r]=n}}var co=[`Webkit`,`Moz`,`ms`],lo={};function uo(e,t){let n=lo[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return lo[t]=r;r=oe(r);for(let n=0;n<co.length;n++){let i=co[n]+r;if(i in e)return lo[t]=i}return t}var fo=`http://www.w3.org/1999/xlink`;function po(e,t,n,r,i,a=ye(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n):n==null||a&&!be(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?qa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=be(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ho(e,t,n,r){e.addEventListener(t,n,r)}function go(e,t,n,r){e.removeEventListener(t,n,r)}var _o=Symbol(`_vei`);function vo(e,t,n,r,i=null){let a=e[_o]||(e[_o]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=bo(t);r?ho(e,n,a[t]=wo(r,i),s):o&&(go(e,n,o,s),a[t]=void 0)}}var yo=/(?:Once|Passive|Capture)$/;function bo(e){let t;if(yo.test(e)){t={};let n;for(;n=e.match(yo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):ae(e.slice(2)),t]}var xo=0,So=Promise.resolve(),Co=()=>xo||=(So.then(()=>xo=0),Date.now());function wo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;fn(To(e,n.value),t,5,[e])};return n.value=e,n.attached=Co(),n}function To(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Do=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?eo(e,r,c):t===`style`?ao(e,n,r):a(t)?o(t)||vo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Oo(e,t,r,c))?(mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ko(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?mo(e,w(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),po(e,t,r,c))};function Oo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Eo(t)&&g(n)?!1:t in e}function ko(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var Ao=[`ctrl`,`shift`,`alt`,`meta`],jo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Ao.some(n=>e[`${n}Key`]&&!t.includes(n))},Mo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=jo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},No=s({patchProp:Do},Qa),Po;function Fo(){return Po||=Li(No)}var Io=((...e)=>{let t=Fo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Ro(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Lo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Lo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Ro(e){return g(e)?document.querySelector(e):e}var zo=`/site-web/assets/babelio-DTnLLqQM.svg`,Bo=`/site-web/assets/geocaching-RborlvXY.svg`,Vo=`data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='2500'%3e%3cpath%20d='M0%200h16v16H0z'%20fill='%23fc4c02'/%3e%3cg%20fill='%23fff'%20fill-rule='evenodd'%3e%3cpath%20d='M6.9%208.8l2.5%204.5%202.4-4.5h-1.5l-.9%201.7-1-1.7z'%20opacity='.6'/%3e%3cpath%20d='M7.2%202.5l3.1%206.3H4zm0%203.8l1.2%202.5H5.9z'/%3e%3c/g%3e%3c/svg%3e`,Ho=`data:image/svg+xml,%3csvg%20height='1756'%20viewBox='5.24%2013.434%2054.049%2037.945'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m41.272%2031.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767%2010.455-5.301%2014.532-7.561z'%20fill='%23fff'/%3e%3cpath%20d='m41.272%2031.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758%208.575c.001%200-2.324%201.289%201.753-.971z'%20fill='%23e8e0e0'/%3e%3cpath%20d='m27.691%2051.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571%200-15.884.33-2.934.49-6.417%202.682-8.449%201.035-.951%202.239-1.563%203.591-1.816%202.112-.401%2011.11-.718%2020.425-.718%209.294%200%2018.312.317%2020.426.718%201.689.317%203.273%201.267%204.203%202.492%202%203.146%202.035%207.058%202.238%2010.118.084%201.458.084%209.737%200%2011.195-.316%204.836-.57%206.547-1.288%208.321-.444%201.12-.823%201.711-1.479%202.366a7.085%207.085%200%200%201%20-3.76%201.922c-8.883.668-16.426.813-24.987.676zm13.603-19.432c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767%2010.456-5.302%2014.532-7.562z'%20fill='%23cd201f'/%3e%3c/svg%3e`,Uo={class:`px-4 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6`},Wo={class:`flex flex-wrap justify-center items-center gap-4 md:gap-6`},Go=[`href`],Ko=[`src`,`alt`],qo=j({__name:`FooterComponent`,setup(e){let t=[{name:`YouTube`,href:`https://www.youtube.com/@NiveauSup%C3%A9rieurNS`,icon:Ho},{name:`Strava`,href:`https://www.strava.com/athletes/186685638`,icon:Vo},{name:`Babelio`,href:`https://www.babelio.com/monprofil.php?id_user=2457762`,icon:zo},{name:`Geocaching`,href:`https://www.geocaching.com/p/?guid=58ce5911-5ad0-4e26-a698-23e4ce3bdf78`,icon:Bo}];return(e,n)=>(P(),F(N,null,[n[2]||=I(`div`,{class:`h-px bg-gray-800 mx-16`},null,-1),I(`footer`,Uo,[n[0]||=I(`span`,{class:`text-md text-center`},` Suivez-moi sur les plateformes !`,-1),I(`div`,Wo,[(P(),F(N,null,M(t,e=>I(`a`,{key:e.name,href:e.href,target:`_blank`,rel:`noopener noreferrer`,class:`flex items-center gap-2 opacity-80 hover:opacity-100 transition`},[I(`img`,{src:e.icon,alt:e.name,class:`h-6 w-auto rounded-sm`},null,8,Ko),fa(` `+D(e.name),1)],8,Go)),64))]),n[1]||=I(`div`,{class:`flex flex-col md:flex-row items-center gap-4 text-center md:text-right`},[I(`span`,{class:`text-md`},` Mail de contact : niveausuperieurns@gmail.com`),I(`img`,{src:`/site-web/assets/niveauSuperieurLogo-B64ZhEiZ.png`,alt:`Logo`,class:`h-10 w-auto opacity-80 hover:opacity-100 transition`})],-1)])],64))}}),Jo=typeof document<`u`;function Yo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Xo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Yo(e.default)}var R=Object.assign;function Zo(e,t){let n={};for(let r in t){let i=t[r];n[r]=$o(i)?i.map(e):e(i)}return n}var Qo=()=>{},$o=Array.isArray;function es(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),ts=Symbol(``);z.MATCHER_NOT_FOUND,z.NAVIGATION_GUARD_REDIRECT,z.NAVIGATION_ABORTED,z.NAVIGATION_CANCELLED,z.NAVIGATION_DUPLICATED;function ns(e,t){return R(Error(),{type:e,[ts]:!0},t)}function rs(e,t){return e instanceof Error&&ts in e&&(t==null||!!(e.type&t))}var is=Symbol(``),as=Symbol(``),os=Symbol(``),ss=Symbol(``),cs=Symbol(``);function ls(){return Ln(os)}function us(e){return Ln(ss)}var ds=/#/g,fs=/&/g,ps=/\//g,ms=/=/g,hs=/\?/g,gs=/\+/g,_s=/%5B/g,vs=/%5D/g,ys=/%5E/g,bs=/%60/g,xs=/%7B/g,Ss=/%7C/g,Cs=/%7D/g,ws=/%20/g;function Ts(e){return e==null?``:encodeURI(``+e).replace(Ss,`|`).replace(_s,`[`).replace(vs,`]`)}function Es(e){return Ts(e).replace(xs,`{`).replace(Cs,`}`).replace(ys,`^`)}function Ds(e){return Ts(e).replace(gs,`%2B`).replace(ws,`+`).replace(ds,`%23`).replace(fs,`%26`).replace(bs,"`").replace(xs,`{`).replace(Cs,`}`).replace(ys,`^`)}function Os(e){return Ds(e).replace(ms,`%3D`)}function ks(e){return Ts(e).replace(ds,`%23`).replace(hs,`%3F`)}function As(e){return ks(e).replace(ps,`%2F`)}function js(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Ms=/\/$/,Ns=e=>e.replace(Ms,``);function Ps(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Hs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:js(o)}}function Fs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ls(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Rs(t.matched[r],n.matched[i])&&zs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Bs(e[n],t[n]))return!1;return!0}function Bs(e,t){return $o(e)?Vs(e,t):$o(t)?Vs(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Vs(e,t){return $o(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Hs(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Us={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Ws=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Gs=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Ks(e){if(!e)if(Jo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Ns(e)}var qs=/^[^#]+#/;function Js(e,t){return e.replace(qs,`#`)+t}function Ys(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Xs=()=>({left:window.scrollX,top:window.scrollY});function Zs(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ys(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Qs(e,t){return(history.state?history.state.position-t:-1)+e}var $s=new Map;function ec(e,t){$s.set(e,t)}function tc(e){let t=$s.get(e);return $s.delete(e),t}function nc(e){return typeof e==`string`||e&&typeof e==`object`}function rc(e){return typeof e==`string`||typeof e==`symbol`}function ic(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(gs,` `),i=r.indexOf(`=`),a=js(i<0?r:r.slice(0,i)),o=i<0?null:js(r.slice(i+1));if(a in t){let e=t[a];$o(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function ac(e){let t=``;for(let n in e){let r=e[n];if(n=Os(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}($o(r)?r.map(e=>e&&Ds(e)):[r&&Ds(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function oc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=$o(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function sc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function cc(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(ns(z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):nc(e)?c(ns(z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function lc(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Yo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(cc(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Xo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&cc(c,n,r,o,e,i)()}))}}return a}function uc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Rs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Rs(e,s))||i.push(s))}return[n,r,i]}var dc=()=>location.protocol+`//`+location.host;function fc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Is(n,``)}return Is(n,e)+r+i}function pc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=fc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Ws.pop,direction:u?u>0?Gs.forward:Gs.back:Gs.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(R({},e.state,{scroll:Xs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function mc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Xs():null}}function hc(e){let{history:t,location:n}=window,r={value:fc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:dc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,R({},t.state,mc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=R({},i.value,t.state,{forward:e,scroll:Xs()});a(o.current,o,!0),a(e,R({},mc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function gc(e){e=Ks(e);let t=hc(e),n=pc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=R({location:``,base:e,go:r,createHref:Js.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}function _c(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),gc(e)}var vc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),B=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(B||{}),yc={type:vc.Static,value:``},bc=/[a-zA-Z0-9_]/;function xc(e){if(!e)return[[]];if(e===`/`)return[[yc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=B.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===B.Static?a.push({type:vc.Static,value:l}):n===B.Param||n===B.ParamRegExp||n===B.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:vc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==B.ParamRegExp){r=n,n=B.EscapeNext;continue}switch(n){case B.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=B.Param):f();break;case B.EscapeNext:f(),n=r;break;case B.Param:c===`(`?n=B.ParamRegExp:bc.test(c)?f():(d(),n=B.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case B.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=B.ParamRegExpEnd:u+=c;break;case B.ParamRegExpEnd:d(),n=B.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===B.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Sc=`[^/]+?`,Cc={sensitive:!1,strict:!1,start:!0,end:!0},wc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(wc||{}),Tc=/[.+*?^${}()[\]/\\]/g;function Ec(e,t){let n=R({},Cc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[wc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=wc.Segment+(n.sensitive?wc.BonusCaseSensitive:0);if(o.type===vc.Static)r||(i+=`/`),i+=o.value.replace(Tc,`\\$&`),s+=wc.Static;else if(o.type===vc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Sc;if(u!==Sc){s+=wc.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=wc.Dynamic,c&&(s+=wc.BonusOptional),n&&(s+=wc.BonusRepeatable),u===`.*`&&(s+=wc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=wc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===vc.Static)n+=e.value;else if(e.type===vc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if($o(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=$o(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Dc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===wc.Static+wc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===wc.Static+wc.Segment?1:-1:0}function Oc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Dc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(kc(r))return 1;if(kc(i))return-1}return i.length-r.length}function kc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Ac={strict:!1,end:!0,sensitive:!1};function jc(e,t,n){let r=R(Ec(xc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Mc(e,t){let n=[],r=new Map;t=es(Ac,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Pc(e);s.aliasOf=r&&r.record;let l=es(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Pc(R({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=jc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Ic(d)&&o(e.name)),Bc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Qo}function o(e){if(rc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Rc(e,n);n.splice(t,0,e),e.record.name&&!Ic(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw ns(z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=R(Nc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Nc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw ns(z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=R({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Lc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Nc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Pc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Fc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Ic(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lc(e){return e.reduce((e,t)=>R(e,t.meta),{})}function Rc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Oc(e,t[i])<0?r=i:n=i+1}let i=zc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function zc(e){let t=e;for(;t=t.parent;)if(Bc(t)&&Oc(e,t)===0)return t}function Bc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Vc(e){let t=Ln(os),n=Ln(ss),r=Ha(()=>{let n=A(e.to);return t.resolve(n)}),i=Ha(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Rs.bind(null,i));if(o>-1)return o;let s=Kc(e[t-2]);return t>1&&Kc(i)===s&&a[a.length-1].path!==s?a.findIndex(Rs.bind(null,e[t-2])):o}),a=Ha(()=>i.value>-1&&Gc(n.params,r.value.params)),o=Ha(()=>i.value>-1&&i.value===n.matched.length-1&&zs(n.params,r.value.params));function s(n={}){if(Wc(n)){let n=t[A(e.replace)?`replace`:`push`](A(e.to)).catch(Qo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Ha(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Hc(e){return e.length===1?e[0]:e}var Uc=j({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Vc,setup(e,{slots:t}){let n=Rt(Vc(e)),{options:r}=Ln(os),i=Ha(()=>({[qc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[qc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Hc(t.default(n));return e.custom?r:Ua(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Wc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!$o(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Kc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var qc=(e,t,n)=>e??t??n,Jc=j({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Ln(cs),i=Ha(()=>e.route||r.value),a=Ln(as,0),o=Ha(()=>{let e=A(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Ha(()=>i.value.matched[o.value]);In(as,Ha(()=>o.value+1)),In(is,s),In(cs,i);let c=Xt();return Bn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Rs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Yc(n.default,{Component:l,route:r});let u=o.props[a],d=Ua(l,R({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Yc(n.default,{Component:d,route:r})||d}}});function Yc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Xc=Jc;function Zc(e){let t=Mc(e.routes,e),n=e.parseQuery||ic,r=e.stringifyQuery||ac,i=e.history,a=sc(),o=sc(),s=sc(),c=Zt(Us),l=Us;Jo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Zo.bind(null,e=>``+e),d=Zo.bind(null,As),f=Zo.bind(null,js);function p(e,n){let r,i;return rc(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=R({},a||c.value),typeof e==`string`){let r=Ps(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return R(r,o,{params:f(o.params),hash:js(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=R({},e,{path:Ps(n,e.path,a.path).path});else{let t=R({},e.params);for(let e in t)t[e]??delete t[e];o=R({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Fs(r,R({},e,{hash:Es(l),path:s.path})),m=i.createHref(p);return R({fullPath:p,hash:l,query:r===ac?oc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Ps(n,e,c.value.path):R({},e)}function y(e,t){if(l!==e)return ns(z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return S(e)}function x(e){return b(R(v(e),{replace:!0}))}function ee(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),R({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function S(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=ee(n,i);if(u)return S(R(v(u),{state:typeof u==`object`?R({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ls(r,i,n)&&(f=ns(z.NAVIGATION_DUPLICATED,{to:d,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):ne(d,i)).catch(e=>rs(e)?rs(e,z.NAVIGATION_GUARD_REDIRECT)?e:ue(e):ce(e,d,i)).then(e=>{if(e){if(rs(e,z.NAVIGATION_GUARD_REDIRECT))return S(R({replace:s},v(e.to),{state:typeof e.to==`object`?R({},a,e.to.state):a,force:o}),t||d)}else e=w(d,i,!0,s,a);return re(d,i,e),e})}function C(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=me.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,s]=uc(e,t);n=lc(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(cc(r,e,t))});let c=C.bind(null,e,t);return n.push(c),ge(n).then(()=>{n=[];for(let r of a.list())n.push(cc(r,e,t));return n.push(c),ge(n)}).then(()=>{n=lc(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(cc(r,e,t))});return n.push(c),ge(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if($o(r.beforeEnter))for(let i of r.beforeEnter)n.push(cc(i,e,t));else n.push(cc(r.beforeEnter,e,t));return n.push(c),ge(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=lc(s,`beforeRouteEnter`,e,t,te),n.push(c),ge(n))).then(()=>{n=[];for(let r of o.list())n.push(cc(r,e,t));return n.push(c),ge(n)}).catch(e=>rs(e,z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function re(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function w(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Us,l=Jo?history.state:{};n&&(r||s?i.replace(e.fullPath,R({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,de(e,t,n,s),ue()}let ie;function ae(){ie||=i.listen((e,t,n)=>{if(!he.listening)return;let r=_(e),a=ee(r,he.currentRoute.value);if(a){S(R(a,{replace:!0,force:!0}),r).catch(Qo);return}l=r;let o=c.value;Jo&&ec(Qs(o.fullPath,n.delta),Xs()),ne(r,o).catch(e=>rs(e,z.NAVIGATION_ABORTED|z.NAVIGATION_CANCELLED)?e:rs(e,z.NAVIGATION_GUARD_REDIRECT)?(S(R(v(e.to),{force:!0}),r).then(e=>{rs(e,z.NAVIGATION_ABORTED|z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Ws.pop&&i.go(-1,!1)}).catch(Qo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ce(e,r,o))).then(e=>{e||=w(r,o,!1),e&&(n.delta&&!rs(e,z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Ws.pop&&rs(e,z.NAVIGATION_ABORTED|z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(r,o,e)}).catch(Qo)})}let oe=sc(),se=sc(),T;function ce(e,t,n){ue(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function le(){return T&&c.value!==Us?Promise.resolve():new Promise((e,t)=>{oe.add([e,t])})}function ue(e){return T||(T=!e,ae(),oe.list().forEach(([t,n])=>e?n(e):t()),oe.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!Jo||!a)return Promise.resolve();let o=!r&&tc(Qs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Sn().then(()=>a(t,n,o)).then(e=>e&&Zs(e)).catch(e=>ce(e,t,n))}let fe=e=>i.go(e),pe,me=new Set,he={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:se.add,isReady:le,install(e){e.component(`RouterLink`,Uc),e.component(`RouterView`,Xc),e.config.globalProperties.$router=he,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>A(c)}),Jo&&!pe&&c.value===Us&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in Us)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(os,he),e.provide(ss,zt(t)),e.provide(cs,c);let n=e.unmount;me.add(e),e.unmount=function(){me.delete(e),me.size<1&&(l=Us,ie&&ie(),ie=null,c.value=Us,pe=!1,T=!1),n()}}};function ge(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return he}var Qc={class:`sticky top-0 z-100`},$c={class:`text-gray-100 px-8 h-20 flex items-center bg-gray-950`},el={class:`hidden md:flex space-x-4 relative`},tl=[`onClick`],nl={key:2,class:`absolute mt-1 w-45 bg-gray-900 border border-gray-800 rounded-md flex flex-col`},rl={key:0,class:`absolute top-16 left-0 w-3/4 bg-gray-950 flex flex-col p-4 space-y-2 md:hidden border-2 border-gray-800`},il=[`onClick`],al={key:2,class:`flex flex-col pl-4`},ol=j({__name:`NavigationBarComponent`,setup(e){let t=us(),n=ls(),r=[{name:`Accueil`,href:`/`},{name:`Vidéos`,href:`/videos`,submenu:[{name:`Vidéos de défis`,href:`/videos/defis`},{name:`Vidéos diverses`,href:`/videos/divers`}]},{name:`Planning`,href:`/planning`},{name:`Ressources`,href:`/resources`,submenu:[{name:`Donjons & Dragons`,href:`/resources/d&d`},{name:`Lectures`,href:`/resources/lectures`},{name:`Outils et matériel`,href:`/resources/tools`}]}],i=Xt(null),a=Xt(null),o=Xt(!1);br(()=>{document.addEventListener(`click`,s)}),Cr(()=>{document.removeEventListener(`click`,s)}),n.afterEach(()=>{i.value=null});let s=e=>{a.value&&!a.value.contains(e.target)&&(i.value=null)},c=(e,n)=>t.path===e?!0:n?n.some(e=>t.path===e.href):!1,l=e=>{i.value=i.value===e?null:e};return(e,t)=>(P(),F(`div`,Qc,[I(`nav`,$c,[I(`button`,{class:`md:hidden mr-4`,onClick:t[0]||=e=>o.value=!o.value},`☰`),L(A(Uc),{to:`/`,class:`flex items-center mr-15`},{default:Pn(()=>[...t[3]||=[I(`img`,{src:`/site-web/assets/niveauSuperieurLogo-B64ZhEiZ.png`,alt:`Logo`,class:`h-10 md:h-12 w-auto rounded-4xl p-0.5 opacity-80 hover:opacity-100`},null,-1)]]),_:1}),I(`div`,el,[(P(),F(N,null,M(r,e=>I(`div`,{key:e.name,class:`relative`},[e.submenu?(P(),F(`button`,{key:1,onClick:t=>l(e.name),class:E([`px-4 py-2 rounded-md text-md font-bold border-2 border-gray-900 flex items-center cursor-pointer`,c(e.href,e.submenu)?`bg-gray-900`:`hover:bg-gray-900`])},D(e.name),11,tl)):(P(),ia(A(Uc),{key:0,to:e.href,class:E([`px-4 py-2 rounded-md text-md font-bold border-2 border-gray-900 flex items-center`,c(e.href)?`bg-gray-900`:`hover:bg-gray-900`])},{default:Pn(()=>[fa(D(e.name),1)]),_:2},1032,[`to`,`class`])),i.value===e.name?(P(),F(`div`,nl,[(P(!0),F(N,null,M(e.submenu,e=>(P(),ia(A(Uc),{key:e.name,to:e.href,class:`px-4 py-2 hover:bg-gray-800 rounded-md`},{default:Pn(()=>[fa(D(e.name),1)]),_:2},1032,[`to`]))),128))])):ma(``,!0)])),64))]),o.value?(P(),F(`div`,rl,[(P(),F(N,null,M(r,e=>I(`div`,{key:e.name},[e.submenu?(P(),F(`button`,{key:1,onClick:t=>l(e.name),class:`block w-full text-left px-4 py-2 rounded-md font-bold hover:bg-gray-900`},D(e.name),9,il)):(P(),ia(A(Uc),{key:0,to:e.href,class:`px-4 py-2 rounded-md font-bold hover:bg-gray-900`,onClick:t[1]||=e=>o.value=!1},{default:Pn(()=>[fa(D(e.name),1)]),_:2},1032,[`to`])),i.value===e.name?(P(),F(`div`,al,[(P(!0),F(N,null,M(e.submenu,e=>(P(),ia(A(Uc),{key:e.name,to:e.href,class:`px-4 py-2 hover:bg-gray-800`,onClick:t[2]||=e=>o.value=!1},{default:Pn(()=>[fa(D(e.name),1)]),_:2},1032,[`to`]))),128))])):ma(``,!0)])),64))])):ma(``,!0)]),t[4]||=I(`div`,{class:`h-px bg-gray-800 mx-16`},null,-1)]))}}),sl={class:`bg-gray-950 text-gray-50 min-h-screen`},cl={class:`m-4 md:m-12`},ll=j({__name:`App`,setup(e){return(e,t)=>{let n=Ar(`RouterView`);return P(),F(`div`,sl,[L(ol),I(`main`,cl,[L(n)]),L(qo)])}}}),ul={class:`flex justify-center`},dl=[`src`,`alt`],fl={class:`mt-2 md:mt-3 flex-1 flex items-center justify-center text-center`},pl={class:`text-sm md:text-xl font-bold line-clamp-2`},ml=j({__name:`BookCardComponent`,props:{book:{}},emits:[`click`],setup(e,{emit:t}){let n=t;return(t,r)=>(P(),F(`div`,{class:`bg-gray-900 border border-gray-800 rounded-xl p-2 md:p-3 cursor-pointer md:hover:scale-105 md:hover:bg-gray-700 transition flex flex-col h-full`,onClick:r[0]||=t=>n(`click`,e.book)},[I(`div`,ul,[I(`img`,{src:e.book.cover,alt:e.book.title,class:`w-full aspect-2/3 object-cover rounded-md`},null,8,dl)]),I(`div`,fl,[I(`h3`,pl,D(e.book.title),1)])]))}});function hl(e){let t=typeof e==`string`?new Date(e):e;return new Intl.DateTimeFormat(`fr-FR`).format(t)}function gl(e){let t=Math.floor(e/60),n=e%60;return[t>0?`${t} h`:``,n>0?`${n} min`:``].filter(Boolean).join(` `)}function _l(e){let t=[];for(let n=0;n<5;n++){let r=e-n;r>=1?t.push(`★`):r>=.5&&t.push(`½`)}return t.join(` `)}function vl(e){return e===`material`?`Matériel`:`Logiciel`}function yl(e){return e===0?`Gratuit`:e.toString().concat(`€`)}function bl(e,t=50){return e?e.length>t?e.slice(0,t)+`…`:e:``}var xl={class:`flex gap-1 text-yellow-400 text-xl`},Sl={key:0},Cl={key:1},wl={key:2,class:`text-gray-400`},Tl=j({__name:`StarRatingComponent`,props:{rating:{}},setup(e){let t=e=>{let t=[];for(let n=0;n<5;n++){let r=e-n;r>=1?t.push(`full`):r>=.5?t.push(`half`):t.push(`empty`)}return t};return(n,r)=>(P(),F(`div`,xl,[(P(!0),F(N,null,M(t(e.rating),(e,t)=>(P(),F(`span`,{key:t},[e===`full`?(P(),F(`span`,Sl,`★`)):e===`half`?(P(),F(`span`,Cl,` ½`)):(P(),F(`span`,wl,`☆`))]))),128))]))}}),El={class:`flex flex-col items-center text-center mb-4`},Dl=[`src`,`alt`],Ol={class:`text-lg md:text-2xl font-bold mt-4`},kl={class:`mb-2 text-sm md:text-base`},Al={class:`mb-2 text-sm md:text-base`},jl={class:`mb-2 text-sm md:text-base`},Ml={class:`mb-2 flex items-center gap-2 text-sm md:text-base`},Nl={class:`mt-4 whitespace-pre-line text-sm md:text-base`},Pl={class:`flex justify-end mt-6`},Fl=j({__name:`BookModalComponent`,props:{book:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return br(()=>{document.body.style.overflow=`hidden`}),wr(()=>{document.body.style.overflow=``}),(t,r)=>(P(),F(`div`,{class:`fixed inset-0 flex items-center justify-center z-200 backdrop-blur-sm bg-black/30 p-4`,onClick:r[2]||=e=>n(`close`)},[I(`div`,{class:`bg-gray-900 p-4 md:p-6 rounded-xl md:max-w-2xl max-h-full overflow-y-auto border border-gray-800`,onClick:r[1]||=Mo(()=>{},[`stop`])},[I(`div`,El,[I(`img`,{src:e.book.cover,alt:e.book.title,class:`w-32 md:w-60 h-auto rounded-sm`},null,8,Dl),I(`h2`,Ol,D(e.book.title),1)]),I(`p`,kl,[r[3]||=I(`strong`,null,`Auteur :`,-1),fa(` `+D(e.book.author),1)]),I(`p`,Al,[r[4]||=I(`strong`,null,`Pages :`,-1),fa(` `+D(e.book.pageCount),1)]),I(`p`,jl,[r[5]||=I(`strong`,null,`Temps de lecture :`,-1),fa(` `+D(A(gl)(e.book.readingTime)),1)]),I(`div`,Ml,[r[6]||=I(`strong`,null,`Note :`,-1),L(Tl,{rating:e.book.rating},null,8,[`rating`])]),r[7]||=I(`div`,{class:`mt-4 h-px bg-gray-800`},null,-1),I(`p`,Nl,D(e.book.summary),1),I(`div`,Pl,[I(`button`,{onClick:r[0]||=e=>n(`close`),class:`px-4 py-2 bg-gray-800 rounded hover:bg-gray-700`},` Fermer `)])])]))}}),Il={class:`flex items-center h-9 rounded overflow-hidden`},Ll=[`onClick`],Rl=j({__name:`SwitchComponent`,props:{modelValue:{},options:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=t,r=e=>{n(`update:modelValue`,e)};return(t,n)=>(P(),F(`div`,Il,[(P(!0),F(N,null,M(e.options,t=>(P(),F(`button`,{key:t.value,class:E([`px-4 py-2`,[e.modelValue===t.value?`bg-gray-800`:`bg-gray-900 text-gray-600 hover:bg-gray-700 hover:text-gray-100`]]),onClick:e=>r(t.value)},D(t.label),11,Ll))),128))]))}}),zl={class:`w-full overflow-x-auto`},Bl={class:`w-full min-w-150 border-collapse text-sm md:text-base`},Vl=[`onClick`],Hl={key:0},Ul={key:1,class:`opacity-30`},Wl=[`onClick`],Gl=j({__name:`TableComponent`,props:{columns:{},data:{},sortField:{},sortDirection:{}},emits:[`sort`,`row-click`],setup(e,{emit:t}){let n=t,r=(e,t)=>{t&&n(`sort`,e)};return(t,i)=>(P(),F(`div`,zl,[I(`table`,Bl,[I(`thead`,null,[I(`tr`,null,[(P(!0),F(N,null,M(e.columns,t=>(P(),F(`th`,{key:String(t.field),class:`py-2 md:py-3 px-2 md:px-3 cursor-pointer select-none border bg-gray-900 border-gray-700 whitespace-nowrap`,onClick:e=>r(t.field,t.sortable)},[fa(D(t.label)+` `,1),e.sortField===t.field?(P(),F(`span`,Hl,D(e.sortDirection===`asc`?`▲`:`▼`),1)):t.sortable?(P(),F(`span`,Ul,`⇅`)):ma(``,!0)],8,Vl))),128))])]),I(`tbody`,null,[(P(!0),F(N,null,M(e.data,r=>(P(),F(`tr`,{key:JSON.stringify(r),class:`hover:bg-gray-900`,onClick:e=>n(`row-click`,r)},[(P(!0),F(N,null,M(e.columns,e=>(P(),F(`td`,{key:String(e.field),class:`py-2 px-2 md:px-3 border border-gray-800 whitespace-nowrap`},[Pr(t.$slots,String(e.field),{value:r[e.field],row:r},()=>[fa(D(e.format?e.format(r[e.field],r):r[e.field]),1)])]))),128))],8,Wl))),128))])])]))}}),Kl={class:`text-2xl md:text-4xl font-bold mb-4`},ql=j({__name:`TitleComponent`,props:{label:{}},setup(e){return(t,n)=>(P(),F(`h1`,Kl,D(e.label),1))}});function Jl(e){let t=Xt(null),n=Xt(null);return{sortField:t,sortDirection:n,setSort:e=>{if(t.value!==e){t.value=e,n.value=`asc`;return}if(n.value===`asc`){n.value=`desc`;return}t.value=null,n.value=null},sortedData:Ha(()=>!t.value||!n.value?e:[...e].sort((e,r)=>{let i=e[t.value],a=r[t.value];return i<a?n.value===`asc`?-1:1:i>a?n.value===`asc`?1:-1:0}))}}var Yl=`/site-web/assets/abzalon-DhmnlarZ.jpg`,Xl=`/site-web/assets/affaire_crystal_singer-DmQHgITx.jpg`,Zl=`/site-web/assets/alcatraz-DcxPfyN7.jpg`,Ql=`/site-web/assets/ange_de_la_nuit-D9tRSZWr.jpg`,$l=`/site-web/assets/assassin_royal-B_3D0KdR.jpg`,eu=`/site-web/assets/babel-B4DX7_NS.jpg`,tu=`/site-web/assets/dix_mille_portes_de_january-DtdlvK4w.jpg`,nu=`/site-web/assets/dune-DH3kj-_J.jpg`,ru=`/site-web/assets/fondation-B-C92htw.jpg`,iu=`/site-web/assets/grand_quand-D9iNdQrX.jpg`,au=`/site-web/assets/le_sorceleur_1-C05UWPYs.jpg`,ou=`/site-web/assets/le_vieil_homme_et_la_guerre-DXEfgbuM.jpg`,su=`/site-web/assets/les_furtifs-CFkPS0-h.jpg`,cu=`/site-web/assets/les_meurtres_de_molly_southbourne-D2YQN9Mq.jpg`,lu=`/site-web/assets/lux-D4XEVmBu.jpg`,uu=`/site-web/assets/ministere_du_futur-BsTYTijT.jpg`,du=`/site-web/assets/morsure_des_roses-CS2wDd6P.jpg`,fu=`/site-web/assets/oeil_du_serpent-B358r9ER.jpg`,pu=`/site-web/assets/point_zero-C33-FpFN.jpg`,mu=`/site-web/assets/prime_time-f3--y6BP.jpg`,hu=`/site-web/assets/silo-BrvJRLui.jpg`,gu=`/site-web/assets/the_great_library_of_tomorrow-BTK24eLw.jpg`,_u=`/site-web/assets/une_ombre_dans_la_braise-CMdnsNZA.jpg`,vu=Object.assign({"/src/assets/images/books-cover/abzalon.jpg":Yl,"/src/assets/images/books-cover/affaire_crystal_singer.jpg":Xl,"/src/assets/images/books-cover/alcatraz.jpg":Zl,"/src/assets/images/books-cover/ange_de_la_nuit.jpg":Ql,"/src/assets/images/books-cover/assassin_royal.jpg":$l,"/src/assets/images/books-cover/babel.jpg":eu,"/src/assets/images/books-cover/dix_mille_portes_de_january.jpg":tu,"/src/assets/images/books-cover/dune.jpg":nu,"/src/assets/images/books-cover/fondation.jpg":ru,"/src/assets/images/books-cover/grand_quand.jpg":iu,"/src/assets/images/books-cover/le_sorceleur_1.jpg":au,"/src/assets/images/books-cover/le_vieil_homme_et_la_guerre.jpg":ou,"/src/assets/images/books-cover/les_furtifs.jpg":su,"/src/assets/images/books-cover/les_meurtres_de_molly_southbourne.jpg":cu,"/src/assets/images/books-cover/lux.jpg":lu,"/src/assets/images/books-cover/ministere_du_futur.jpg":uu,"/src/assets/images/books-cover/morsure_des_roses.jpg":du,"/src/assets/images/books-cover/oeil_du_serpent.jpg":fu,"/src/assets/images/books-cover/point_zero.jpg":pu,"/src/assets/images/books-cover/prime_time.jpg":mu,"/src/assets/images/books-cover/silo.jpg":hu,"/src/assets/images/books-cover/the_great_library_of_tomorrow.jpg":gu,"/src/assets/images/books-cover/une_ombre_dans_la_braise.jpg":_u});function V(e){return vu[`/src/assets/images/books-cover/${e}.jpg`]??vu[`/src/assets/images/books-cover/default.png`]}var yu=[{title:`Lux`,author:`Maxime CHATTAM`,pageCount:496,readingTime:537,rating:4,cover:V(`lux`),summary:`Les scientifiques comme les religieux ne peuvent expliquer ce qu'elle est ni d'où elle vient.
Elle va transformer pour toujours le quotidien du monde entier, en particulier l'existence d'une mère et de sa fille.
Tout en posant la question qui nous obsède tous...
Nos vies ont-elles un sens ?`},{title:`La morsure des roses`,author:`Christophe GUILLEMAIN`,pageCount:276,readingTime:294,rating:2.5,cover:V(`morsure_des_roses`),summary:`Caelynn, la plus jeune fille du dieu Ur-Orio, a passé son enfance sur le mont Eremion avec ses quatre sœurs, isolée du reste de la civilisation. Lorsque ses deux aînées assassinent brutalement leur précepteur, Caelynn s'enfuit avec Riveline, la plus vulnérable des cinq. Ensemble, elles tentent de trouver leur place dans ce nouveau monde, mais leurs aspirations divergent et leurs chemins se séparent. Des années plus tard, apprenant que sa sœur, devenue reine, est sur le point d'accoucher, Caelynn décide de la rejoindre pour la mettre en garde face à la menace de leurs aînées immortelles, prêtes à tout pour empêcher l'enfant de naître.
Alors que les préparatifs des célébrations à la gloire de l'héritier battent leur plein, Caelynn doit définir son rôle dans la tragédie à venir, entre intrigues, complots et sombres vengeances. Car dans l'ombre gigantesque de leur divin père, il ne reste aux cinq filles illégitimes d'Ur-Orio, enfin réunies, qu'une seule voie possible : s'affranchir du passé… ou périr.`},{title:`L'affaire Crystal Singer`,author:`Ethan CHATAGNIER`,pageCount:266,readingTime:346,rating:4,cover:V(`affaire_crystal_singer`),summary:`C'est en 1896 que l'Humanité observe les premières inscriptions extraterrestres gravées sur la surface de Mars : un problème mathématique enfantin à laquelle la Terre ne tarde pas à répondre. Dès lors s'engage un dialogue à coups d'immenses équations, de plus en plus ardues. Mais les échanges prennent fin dans les années 30 quand une équation sur la relativité met en défaut même Albert Einstein.
Trente ans plus tard, un groupe d'étudiants en mathématiques du MIT se rend dans le désert de l'Arizona. Une jeune femme brillante, Crystal Singer, propose une solution. Et aussitôt la communication avec Mars reprend, sous la forme d'une équation encore plus complexe que la précédente. Les cinq étudiants deviennent célèbres et Crystal disparaît, laissant derrière elle son petit-ami Rick, inconsolable. Et beaucoup de questions.
Quand Rick part enfin à la recherche de Crystal, il ignore à quel point sa vie va en être bouleversée.`},{title:`Le Grand Quand`,author:`Alan MOORE`,pageCount:366,readingTime:509,rating:3,cover:V(`grand_quand`),summary:`Londres, 1949. Jeune homme désargenté et aspirant écrivain, Dennis Knuckleyard vit et travaille dans une librairie d'occasion. Un jour, sa patronne l'envoie chercher des livres rares chez un étrange bibliophile... où il découvre que l'un de ces ouvrages ne peut exister : il s'agit d'un texte imaginaire figurant dans un roman, lui, bien réel.
Il provient de l'autre Londres, le Grand Quand, une version de la ville située au-delà du Temps où tous les aspects de son histoire, depuis ses origines jusqu'à sa disparition, se manifestent. Là, les époques se mélangent, rêves et réalités se fondent, et des notions telles que le Crime et la Poésie s'incarnent en des êtres terrifiants et merveilleux. Et si Dennis ne rapporte pas le livre, c'est la mort qui l'attend.
Ainsi débute son périple dans les bas-fonds occultes de la ville, où il rencontre une tribu excentrique de sorciers et de gangsters, ainsi que Grace Shilling, une prostituée qui accepte de l'aider ; le prince Monolulu, un pronostiqueur hippique se prétendant prince abyssinien ; ou encore Jack Spot, un truand impitoyable régnant sur la pègre. Mais dans le Grand Quand, Dennis se retrouve au coeur d'une série d'événements explosifs, qui risquent de changer à jamais les deux Londres...`},{title:`The great library of tomorrow - Le livre de la sagesse`,author:`Rosalia AGUILAR SOLACE`,pageCount:465,readingTime:489,rating:4,cover:V(`the_great_library_of_tomorrow`),summary:`Cela fait des siècles qu'Hélia sert dans la Grande Bibliothèque de Tomorrow. C'est un lieu étrange et fascinant, dans lequel des portails magiques donnent accès aux nombreux royaumes de Paperworld. Hélia est une des rares élues qui incarnent et protègent l'humanité au sein de l'établissement. Tout bascule lorsqu'elle est attaquée avec son partenaire Xavier par l'Homme Cendre, lors d'un de leurs voyages. Dans une tentative désespérée, il se sacrifie pour lui laisser le temps d'avertir les autres sages de la menace... Car l'Homme Cendre semble bien décidé à s'en prendre à la Bibliothèque. Mais à son retour, le Livre de la Sagesse qui d'habitude guide Hélia est devenu silencieux...
Y'a-t-il encore un espoir pour éviter le pire ?`},{title:`Prime Time`,author:`Maxime CHATTAM`,pageCount:538,readingTime:591,rating:4.5,cover:V(`prime_time`),summary:`Pendant que des millions de téléspectateurs regardent le journal télévisé de 20 h sur la première chaîne nationale, un homme masqué, à la voix déformée, prend en otage le présentateur vedette.
Si le direct est coupé, il le tue. Alors que le GIGN, le procureur, les politiciens et la direction de la chaîne s'agitent en régie, un jeu de manipulation démarre entre le négociateur et le preneur d'otage. `},{title:`L'ange de la nuit - La voie des ombres`,author:`Brent WEEKS`,pageCount:496,readingTime:779,rating:5,cover:V(`ange_de_la_nuit`),summary:`Le tueur parfait n'a pas d'amis, il n'a que des cibles.
Pour Durzo Blint, l'assassinat est un art et il est l'artiste le plus accompli de la cité, grâce à des talents secrets hérités de la nuit des temps.
Pour Azoth, survivre est une lutte de tous les instants. Le petit rat de la guilde a appris à juger les gens d'un seul coup d'œil et à prendre des risques,comme proposer à Durzo Blint de devenir son apprenti.
Mais pour être accepté, il doit commencer par abandonner son ancienne vie, changer d'identité, aborder un monde d'intrigues politiques, d'effroyables dangers et de magies étranges, et sacrifier ce qui lui est le plus précieux...`},{title:`Une ombre dans la braise`,author:`Jennifer L. ARMENTROUT`,pageCount:790,readingTime:922,rating:2,cover:V(`une_ombre_dans_la_braise`),summary:`Seraphena Mierel n'a jamais été maîtresse de son destin. Afin d'honorer un pacte passé par son aïeul pour sauver le royaume, elle doit abandonner sa vie pour devenir la Consort de Nyktos, l'Originel de la Mort. Mais sa véritable destinée est le secret le mieux gardé de Lasania : depuis son plus jeune âge, elle s'entraîne pour devenir l'assassin parfait, l'arme suprême qui pourra éliminer l'Originel de la Mort. Si elle échoue, elle condamne son royaume à la destruction.
Tout était parfaitement planifié... jusqu'à Nyktos. Jusqu'à ce qu'il éveille en elle une passion qu'elle ne s'était jamais permis de ressentir pour personne, et encore moins pour lui.
Mais Sera ne doit pas oublier qui elle est : Élue, Consort, meurtrière. Sa vie et son cœur ne lui ont jamais appartenu...`},{title:`Le ministère du futur`,author:`Kim STANLEY ROBINSON`,pageCount:539,readingTime:751,rating:5,cover:V(`ministere_du_futur`),summary:`Établi en 2025, l'objectif de la nouvelle organisation était simple : plaider pour les générations à venir du monde et protéger toutes les créatures vivantes, présentes et futures. Il fut vite surnommé « le Ministère du Futur ».`},{title:`Le Sorceleur 1 - Le dernier vœu`,author:`Andrzej SAPKOWSKI`,pageCount:304,readingTime:429,rating:4,cover:V(`le_sorceleur_1`),summary:`Geralt de Riv est un homme inquiétant, un mutant devenu le parfait assassin grâce à la magie et à un long entraînement. En ces temps obscurs, ogres, goules et vampires pullulent, et les magiciens sont des manipulateurs experts. Contre ces menaces, il faut un tueur à gages à la hauteur, et Geralt est plus qu'un guerrier ou un mage. C'est un sorceleur.
Au cours de ses aventures, il rencontrera une magicienne capricieuse aux charmes vénéneux, un troubadour paillard au grand coeur... et, au terme de sa quête, peut-être réalisera-t-il son dernier voeu : retrouver son humanité perdue.`},{title:`Le vieil homme et la guerre`,author:`John SCALZI`,pageCount:372,readingTime:372,rating:4.5,cover:V(`le_vieil_homme_et_la_guerre`),summary:`“J'ai fait deux choses le jour de mon soixante-quinzième anniversaire. Je suis allé sur la tombe de ma femme et je me suis engagé.”
À soixante-quinze ans, l'âge minimum requis, John Perry n'est pas le seul à intégrer les Forces de défense coloniale, le seul ticket pour les étoiles, mais sans retour. Plus rien ne le retient sur Terre. Combien d'années de vie peut-il encore espérer ?
En revanche, s'engager, c'est défendre la Terre, protéger l'expansion de l'humanité dans les étoiles, retrouver une seconde jeunesse et, à l'issue du service, obtenir le statut de colon sur une planète nouvelle. Sur Terre, nul ne sait ce qu'il advient de ces recrues à part qu'on leur promet une guerre sans merci contre la myriade d'espèces intelligentes qui se partagent un “espace vital” interstellaire beaucoup trop étroit. John Perry devient donc soldat. Avec son nouveau statut commencent les révélations, inimaginables.`},{title:`Dune`,author:`Frank HERBERT`,pageCount:818,readingTime:972,rating:4.5,cover:V(`dune`),summary:`Sur Dune, la planète des sables, germe l'épice qui donne longévité et prescience. À cause de l'épice, tout l'empire galactique du Padishah Shaddam IV tourne autour de Dune, âprement convoitée pour les nobles maisons du Landsraad et la Guilde des Navigateurs.
Leto Atreides, Duc et Cousin de l'Empereur, a reçu Dune en fief. Pour peu de temps. En 10191, il meurt assassiné. Mais son fils Paul, avec sa mère, trouve asile dans les repaires du peuple Fremen, indompté, invaincu, la lie de Dune pour certains, le sel de la terre pour d'autres. Paul grandit dans le désert et forge l'arme de sa vengeance.
Mais ne va-t-il pas dépasser son but, lancer les légions Fremen en une effroyable croisade ? Il a, dit-on, le pouvoir de connaître l'avenir. Aura-t-il celui de l'éviter ?`},{title:`L'assassin royal 1`,author:`Robin HOBB`,pageCount:502,readingTime:773,rating:4.5,cover:V(`assassin_royal`),summary:`Au château de Castelcerf le roi Subtil Loinvoyant règne sur les Six Duchés ; il est aidé dans sa lourde tâche par son fils Chevalerie qui, comme son père et tous les nobles du royaume, porte le nom de la qualité que ses parents espéraient le voir développer. Ainsi le frère du Roi-servant s'appelle-t-il Vérité et leur demi-frère, né d'un second lit, Royal. Suite à une aventure restée inconnue de tous, Chevalerie donne à la lignée un nouveau descendant : un bâtard, dont la simple existence va bouleverser le fragile équilibre qu'avait établi le roi pour contrôler ses turbulents fils. Ce héros malgré lui, nommé Fitz, voit son avenir s'assombrir au fil du temps. Alors que les autres enfants ont déjà leur place à la cour et dans ses intrigues, lui devra la mériter et servir la couronne en devenant ce que personne ne voulait être : l'Assassin royal. Au service de son roi, il apprendra les poisons, le meurtre et la trahison...`},{title:`Abzalon`,author:`Pierre BORDAGE`,pageCount:488,readingTime:636,rating:5,cover:V(`abzalon`),summary:`Les jours d'une très lointaine planète, Ester, sont comptés. Seul espoir pour les estériens  découvrir un autre monde habitable quelque part dans le cosmos.
Un voyage de plusieurs dizaines d'années à bord d'un gigantesque vaisseau spatial : L'Estérion.
À bord, passagers malgré eux : 5 000 deks, anciens prisonniers du plus terrible des bagnes, et 5 000 Kroptes, les derniers survivants d'un peuple pacifique et religieux du sud d'Ester, aujourd'hui décimé. Au centre du vaisseau, censés réguler les humeurs des passagers et les empêcher de se rencontrer : des moines de l'Église monclale, dont certains semblent décidés à ce qu'aucun des passagers n'arrive jamais à bon port.
Mais c'est sans compter sur la présence inopinée à bord d'une forme de vie mystérieuse, que l'on croyait disparue depuis longtemps... `},{title:`Point zéro`,author:`Antoine TRACQUI`,pageCount:1138,readingTime:1215,rating:5,cover:V(`point_zero`),summary:`1938. Italie. Dans les rues de Palerme, un jeune fuyard tente d'échapper à la police secrète de Mussolini. A sa main, une mallette dont le contenu semble exciter bien des convoitises... 1944. Etats-Unis. Sur une route poussiéreuse du Middle West, trois hommes d'exception jettent les bases d'un projet qui pourrait bien changer l'issue de la guerre. De nos jours. Caleb McKay, un ex-SAS reconverti dans les missions de sauvetage à risque maximal, est recruté par un milliardaire excentrique pour rejoindre un lieu bien précis du littoral Antarctique où, quelques jours auparavant, un satellite espion a fait une incroyable découverte.
Très loin de là, au fin fond de la Russie, un vieil homme interrompt prématurément sa partie de chasse pour se mettre lui aussi en route... Des tréfonds du sous-sol africain aux pentes de l'Etna en passant par les côtes désolées du continent austral s'enclenche une course contre la mort à la recherche d'un des secrets les mieux gardés de l'Histoire.`},{title:`Fondation - Le cycle de Fondation 1`,author:`Isaac ASIMOV`,pageCount:390,readingTime:369,rating:4,cover:V(`fondation`),summary:`En ce début de treizième millénaire, l'Empire n'a jamais été aussi puissant, aussi étendu à travers toute la Galaxie. C'est dans sa capitale, Trantor, que l'éminent savant Hari Seldon invente la psychohistoire, une science nouvelle permettant de prédire l'avenir. Grâce à elle, Seldon prévoit l'effondrement de l'Empire d'ici cinq siècles, suivi d'une ère de ténèbres de trente mille ans. Réduire cette période à mille ans est peut-être possible, à condition de mener à terme son projet : la Fondation, chargée de rassembler toutes les connaissances humaines. Une entreprise visionnaire qui rencontre de nombreux et puissants détracteurs…`},{title:`Babel`,author:`Rebecca F. KUANG`,pageCount:746,readingTime:976,rating:5,cover:V(`babel`),summary:`Traduttore, traditore : un acte de traduction est toujours un acte de trahison
1828. Un jeune orphelin chinois est recueilli à Canton par un professeur et conduit à Londres. Rebaptisé Robin Swift, le jeune garçon consacre ses journées à l'étude des langues dans l'optique d'intégrer le prestigieux Institut royal de traduction de l'Université d'Oxford, plus connu sous le nom de Babel. Berceau de l'argentogravure, les étudiants y exploitent le sens perdu des mots à l'aide de barres d'argent enchantées.
Dès ses premiers jours à Oxford, Robin prend conscience que ces travaux confèrent à l'Empire britannique une puissance inégalée et servent sa soif de colonisation, au détriment des classes défavorisées de la société et de ses territoires. Servir Babel revient donc à trahir sa patrie d'origine. Peut-il espérer changer Babel de l'intérieur ? Ou devra-t-il sacrifier ses rêves pour faire tomber cette institution ?`},{title:`L'œuvre du serpent`,author:`Norman JANGOT`,pageCount:487,readingTime:585,rating:3.5,cover:V(`oeil_du_serpent`),summary:`Paris est en ruine à la suite d'une catastrophe planétaire. Alors que la reconstruction est au coeur de toutes les préoccupations, des individus développent une étrange faculté, provoquée par l'onde de choc : celle d'interpréter les coïncidences du quotidien et de déchiffrer les signes. Certains de ces êtres hors normes, baptisés les Pythons, sont recrutés par la police pour traquer les criminels avec une efficacité redoutable. Mais lorsque l'un de ces Pythons décide de prendre ses pairs à leur propre piège, c'est toute la société, déjà sur le fil, qui vacille. À moins qu'un ancien Serpent au flair légendaire, Nathaniel Loppe, disparu des radars après un terrible accident, ne reprenne du service pour pister ce serial killer à travers le dédale d'une capitale éventrée. Lui à qui aucune enquête n'a jamais résisté va être confronté à une vérité à laquelle nul n'est préparé.`},{title:`Silo`,author:`Hugh HOWEY`,pageCount:732,readingTime:835,rating:5,cover:V(`silo`),summary:`Dans un futur post-apocalyptique indéterminé, quelques milliers de survivants ont établi une société dans un silo souterrain de 144 étages. Les règles de vie sont strictes. Pour avoir le droit de faire un enfant, les couples doivent s'inscrire à une loterie. Mais les tickets de naissance des uns ne sont redistribués qu'en fonction de la mort des autres.
Les citoyens qui enfreignent la loi sont envoyés en dehors du silo pour y trouver la mort au contact d'un air toxique. Ces condamnés doivent, avant de mourir, nettoyer à l'aide d'un chiffon de laine les capteurs qui retransmettent des images de mauvaise qualité du monde extérieur sur un grand écran, à l'intérieur du silo.
Ces images rappellent aux survivants que ce monde est assassin. Mais certains commencent à penser que les dirigeants de cette société enfouie mentent sur ce qui se passe réellement dehors et doutent des raisons qui ont conduit ce monde à la ruine.`},{title:`Les furtifs`,author:`Alain DAMASIO`,pageCount:917,readingTime:1362,rating:3,cover:V(`les_furtifs`),summary:`Ils sont là, parmi nous, jamais où tu regardes, à circuler dans les angles morts de nos quotidiens. On les appelle les furtifs. Une légende ? Un fantasme ? Plutôt l'inverse : des êtres de chair et de sons, aux facultés inouïes de métamorphoses, qui nous ouvrent la possibilité précieuse, à nous autres humains, de renouer avec le vivant. En nous et hors de nous, sous toutes ses formes et de toutes nos forces.
Dans nos villes privatisées et sentientes, où rien ne se perd, ils restent les seuls à ne pas laisser de traces. Nous, les citoyens-clients, la bague au doigt, couvés par nos Intelligences Amies, nous tissons la soie de nos cocons numériques en travaillant à désigner un produit de très grande consommation : être soi. Dans ce capitalisme insidieux, à la misanthropie molle – féroce pour ceux qui s'en défient -, l'aliénation n'a même plus à être imposée, elle est devenue un « self-serf service ». Et tu penses y échapper ?`},{title:`Les dix mille portes de January`,author:`Alix E. HARROW`,pageCount:511,readingTime:611,rating:4,cover:V(`dix_mille_portes_de_january`),summary:`Imaginez qu'un jour, au milieu de nulle part, vous trouviez une porte. Et que celle-ci ouvre sur un monde inconnu. Un monde parallèle, d'où viendront votre destin, votre passé et votre futur.
January Ruddy, la découvreuse de portes, est une curiosité en elle-même : orpheline, gardée comme un objet précieux dans un manoir rempli d'autres objets précieux, une vie en lambeaux, pleine de trous. Elle trouve un jour un livre fascinant, tout imprégné du parfum de l'aventure, qui relate l'étrange histoire des dix mille portes secrètes, celle du monde de l'Écrit. Une histoire semée d'embûches, mais si étroitement tressée à la sienne. Car January ne le sait pas encore, mais tout ce qui s'écrit devient vrai.`},{title:`Alcatraz contre les infâmes bibliothécaires`,author:`Brandon SANDERSON`,pageCount:522,readingTime:487,rating:1,cover:V(`alcatraz`),summary:`Alcatraz Smedry n'est pas un garçon chanceux : orphelin au prénom improbable, il excelle dans l'art de tout casser, ce qui a le don de lasser ses familles d'accueil.
Mais sa vie bascule le jour de ses treize ans : il reçoit un mystérieux sac de sable de la part de ses défunts parents et découvre l'existence de son grand-père un peu dingue, qui l'embarque aussitôt dans une folle aventure afin de sauver le monde des infâmes Bibliothécaires !`},{title:`Les meurtres de Molly Southbourne`,author:`Tade THOMPSON`,pageCount:99,readingTime:88,rating:5,cover:V(`les_meurtres_de_molly_southbourne`),summary:`Molly est frappée par la pire des malédictions. Aussi les règles sont-elles simples, et ses parents les lui assènent depuis son plus jeune âge. Si tu vois une fille qui te ressemble, cours et bas-toi. Ne saigne pas. Si tu saignes, une compresse, le feu, du détergent. Si tu trouves un trou, va chercher tes parents. Molly se les récite souvent. Quand elle s'ennuie, elle se surprend à les répéter sans l'avoir voulu... Et si elle ignore d'où lui vient cette terrible affliction, elle n'en connaît en revanche que trop le prix. Celui du sang.`}],bu={class:`px-4 md:px-0`},xu={class:`flex flex-col md:flex-row md:items-center md:justify-between`},Su={key:1,class:`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4`},Cu=j({__name:`BooksView`,setup(e){let t=[{label:`Titre`,field:`title`,sortable:!0},{label:`Auteur`,field:`author`,sortable:!0},{label:`Pages`,field:`pageCount`,sortable:!0},{label:`Temps`,field:`readingTime`,sortable:!0,format:gl},{label:`Note`,field:`rating`,sortable:!0,format:_l}],n=[{label:`Grille`,value:`grid`},{label:`Tableau`,value:`table`}],r=Xt(null),i=Xt(`grid`),{sortField:a,sortDirection:o,setSort:s,sortedData:c}=Jl(yu),l=e=>{r.value=e};return(e,u)=>(P(),F(`div`,bu,[I(`div`,xu,[L(ql,{label:`Toutes les lectures (${A(yu).length})`},null,8,[`label`]),L(Rl,{modelValue:i.value,"onUpdate:modelValue":u[0]||=e=>i.value=e,options:n,class:`mb-4 md:mb-0`},null,8,[`modelValue`])]),i.value===`table`?(P(),ia(Gl,{key:0,columns:t,data:A(c),"sort-field":A(a),"sort-direction":A(o),onSort:A(s),onRowClick:l},null,8,[`data`,`sort-field`,`sort-direction`,`onSort`])):(P(),F(`div`,Su,[(P(!0),F(N,null,M(A(c),e=>(P(),ia(ml,{key:e.title,book:e,onClick:l},null,8,[`book`]))),128))])),r.value?(P(),ia(Fl,{key:2,book:r.value,onClose:u[1]||=e=>r.value=null},null,8,[`book`])):ma(``,!0)]))}}),wu=[`href`],Tu={class:`w-full md:w-1/2`},Eu=[`src`,`alt`],Du={class:`flex-1 flex-col`},Ou={class:`text-xl md:text-2xl mb-2 font-bold`},ku={class:`text-sm md:text-base whitespace-pre-line`},Au=j({__name:`DndAdventureComponent`,props:{dndAdventure:{},reverse:{type:Boolean}},setup(e){return(t,n)=>(P(),F(`a`,{href:e.dndAdventure.notionUrl,target:`_blank`,class:E([`flex flex-col md:flex-row gap-4 md:gap-6 rounded-xl p-4 md:p-6 transition hover:scale-`,e.reverse?`md:flex-row-reverse border-2 border-gray-900`:`bg-gray-900`])},[I(`div`,Tu,[I(`img`,{class:`h-48 md:h-full w-full rounded-md object-cover`,src:e.dndAdventure.image,alt:e.dndAdventure.title},null,8,Eu)]),I(`div`,Du,[I(`h2`,Ou,D(e.dndAdventure.title),1),I(`p`,ku,D(e.dndAdventure.description),1)])],10,wu))}}),ju=`/site-web/assets/default-Bbr0wajE.png`,Mu=Object.assign({"/src/assets/images/dnd-adventures/default.png":ju});function H(e){return Mu[`/src/assets/images/dnd-adventures/${e}.png`]??Mu[`/src/assets/images/dnd-adventures/default.png`]}var Nu=[{title:`Nouvelle aventure`,notionUrl:`https://nosy-seeder-540.notion.site/Nouvelle-aventure-33d48197325e8110a714fded86777eb6`,description:`Résumé de l'aventure`,image:H(``)},{title:`Lithopédion`,notionUrl:`https://nosy-seeder-540.notion.site/Lithop-dion-33d48197325e81349853f3229d45b215`,description:`Un ancien assassin est retrouvé pétrifié dans sa demeure. Sa femme a disparue, emportant avec elle leur enfant à naître. Partout dans la campagne environnante, des cas de pétrification sont recensés.
La femme disparue, transformée en Méduse, s'est réfugiée dans une ruine ancienne, afin d'exercer sa vengeance, noyant sa haine et sa douleur en changeant en pierre toutes les femmes enceintes.`,image:H(``)},{title:`Le Geyser des mariés`,notionUrl:`https://nosy-seeder-540.notion.site/Le-Geyser-des-mari-s-33d48197325e8153ba7cf4371096b5c0`,description:`Lors d'une cérémonie de mariage, une femme offre au geyser des mariés un symbole protecteur étrange.
En enquêtant, le groupe découvre le sombre secret de la mariée : elle dirige un groupe de bandits, et son rapprochement avec le marchand de potion n'a pour unique but que de subtiliser ses ingrédients pour faire exploser le geyser et récupérer les richesses qui y ont été déposées par des générations de mariés.`,image:H(``)},{title:`La loi du plus fort`,notionUrl:`https://nosy-seeder-540.notion.site/La-loi-du-plus-fort-33d48197325e81bf811dfd3d9b53c6f6`,description:`Les cierges d'invocation représentent l'économie centrale d'une ville. Lorsque des bandits s'emparent du lieu où elle est produite, la ville est prête à tout pour les en déloger.
Mais, arrivés sur les lieux, le groupe découvre qu'un ennemi bien plus redoutable s'est emparé des lieux, piétinant les bandits : un hibours.`,image:H(``)},{title:`Le roi bleu`,notionUrl:`https://nosy-seeder-540.notion.site/Le-roi-bleu-33d48197325e81c78e4efa9f3a7e693a`,description:`Libérés de leurs geôliers, les tristement célèbres prisonniers de la prison bleue menacent les dirigeants locaux au cours d'un défilé.
Afin de supprimer la menace, l'armée est envoyée sur place, épaulée par les aventuriers.
Mais la prison se referme sur eux, les enfermant avec les pires criminels, tandis que le roi bleu s'en extirpe et mène ses troupes de revenants à l'assaut de la ville sans défense.`,image:H(``)},{title:`Faux sangblants`,notionUrl:`https://nosy-seeder-540.notion.site/Faux-sangblants-33d48197325e81cbb774f9b0a72b2e1b`,description:`La fontaine du marché déverse un flot de sang. Les dirigeants ne s'inquiètent guère du problème, mais un groupe local est bien décidé à le résoudre.
Seulement, rien ne prépare le groupe à ce qu'ils trouvent : le cadavre de ces mêmes dirigeants rencontrés un peu plus tôt.
Pour dévoiler la véritable nature des imposteurs, ils devront faire appel à l'un des êtres les plus pur qui existe : le rarissime couatl`,image:H(``)},{title:`Le cor de l'Apocalypse`,notionUrl:`https://nosy-seeder-540.notion.site/Le-cor-de-l-Apocalypse-33d48197325e81c1b4b6c4e7bebdda18`,description:`Plusieurs villes sont retrouvées réduites à néant, une force destructrice semblant avoir piétiné jusqu'à leurs fondations.
Les survivants parlent d'un cor résonnant peu avant l'anéantissement.
Guidé par la haine, un dresseur de créatures cherche à anéantir tous ceux participant au trafic d'animaux, cherchant vengeance pour le dragon féérique qui lui fut enlevé par des braconniers.`,image:H(``)},{title:`Le jardin d'Eden`,notionUrl:`https://nosy-seeder-540.notion.site/Le-jardin-d-Eden-33d48197325e81258c30f3eafdbf7931`,description:`Une auberge tire ses boissons luxueuses d'un sylvanien vivant dans une zone extra-planaire. Lorsque les livraisons cessent, d'étranges phénomènes commencent à se produire.
Derrière le portail menant au plan, la corruption gangrène le splendide verger. Une guenaude verte, se faisant passer pour une dryade, corrompt les lieux et cherche à en éliminer le sylvanien, avec l'aide monstrueuse d'un rouilleux de Gulthias.`,image:H(``)},{title:`Le démon de la lune`,notionUrl:`https://nosy-seeder-540.notion.site/Le-d-mon-de-la-lune-33d48197325e8133b979c7d2a4f4536e`,description:`Un magicien souhaite expérimenter un nouvel enchantement, nécessitant une lune parfaite visible depuis une ruine située sur un pic montagneux.
Loin d'être inoccupée, la ruine est cependant sécurisée par un groupe de chasseurs de monstres attendant le maitre des lieux.
Mais l'enchantement provoque l'apparition de démons tentant de reprendre possession des lieux pour leur ignoble maître, le barlgura.`,image:H(``)},{title:`L'œil de l'escroc`,notionUrl:`https://nosy-seeder-540.notion.site/L-il-de-l-escroc-33d48197325e81a38efadb38bae09817`,description:`Au cœur d'un phare mouvant, de nombreuses preuves compromettantes poussent les marchand locaux à se plier aux extorsions d'un groupe de bandits terrorisant la ville.
S'infiltrant au sein du phare, le groupe découvrira la véritable puissance du maître des lieux, contrôlant un spectateur et des armures animées pour impressionner ses hommes, profitant des fruits de ses pillages pour vivre dans un luxe total.`,image:H(``)},{title:`Le sang des âmes sœurs`,notionUrl:`https://nosy-seeder-540.notion.site/Le-sang-des-mes-s-urs-33d48197325e81b4957ed6382d47d489`,description:`Un couple de vampire malfaisants se terre dans une crypte.
Plusieurs groupes d'aventuriers s'y rendent, mais la menace vampirique est grande. Soumettant le groupe par le poison, ils imposent leur désir à celui-ci, n'ayant d'autre choix que d'obéir pour obtenir le remède.
Leur but : récupérer la relique d'un des vampires, cachées sous le temple de la déité les traquant.`,image:H(``)},{title:`La mémoire de l'eau`,notionUrl:`https://nosy-seeder-540.notion.site/La-m-moire-de-l-eau-33d48197325e813d9746e00ec1569424`,description:`Kidnappés par des kuo-toas, des voyageurs se retrouvent en mauvaise posture. Pour les sauver, il faut parvenir jusqu'au repaire des monstres, situé profondément sous l'eau.
Dans ce réseau de grottes tentaculaires, les kuo-toas vouent un culte à une divinité malveillante, sacrifiant des malheureux en son nom. Mais la divinité, loin d'être une simple invention des monstres, se révèle leur maître à tous : un aboleth.`,image:H(``)},{title:`Qui sème le vent…`,notionUrl:`https://nosy-seeder-540.notion.site/Qui-s-me-le-vent-33d48197325e81aea2a0f3bd975da1e3`,description:`Malmenés par les tempêtes et un esclavagiste impitoyable, une communauté de pêcheurs souhaite se débarrasser de ces deux fléaux.
La tempête nait d'un rassemblement d'élémentaires de l'air, attirés par une relique. Emporter la relique dans un phare abandonné pourrait faire s'effondrer ce dernier sur la maison de l'esclavagiste en contrebas, tout en supprimant la source des tempêtes.`,image:H(``)},{title:`Spores des profondeurs`,notionUrl:`https://nosy-seeder-540.notion.site/Spores-des-profondeurs-33d48197325e81fba00bc398ea493aa4`,description:`L'apprenti d'un alchimiste renommé a disparu durant sa tournée de récolte d'ingrédients. En suivant ses pas, le groupe découvre qu'il a suivi un accès menant en Outreterre.
Le réseau de galeries conduit jusqu'à un cimetière abandonné, où se propage une colonie de champignons dangereux, redoutés par les paisibles myconides vivant non loin, et qui ont secourus l'apprenti in extremis.`,image:H(``)},{title:`Le royaume enseveli`,notionUrl:`https://nosy-seeder-540.notion.site/Le-royaume-enseveli-33d48197325e8191a607eda6d68fd277`,description:`Victime d'une malédiction, le roi se meurt. Les bas quartiers sont le lieu idéal pour trouver le coupable, rassemblant les individus douteux dirigés par l'Impératrice.
Sous les bas-quartiers, une ancienne cité abandonnée voit le retour de son premier souverain, réveillé d'un sommeil millénaire sous les traits d'une momie cherchant à reconquérir son ancien royaume.`,image:H(``)},{title:`Le dieu de la forêt`,notionUrl:`https://nosy-seeder-540.notion.site/Le-dieu-de-la-for-t-33d48197325e8159b798f1af5971dbec`,description:`Un monarque est assassiné par proches. Ceux-ci sont conscient de leur acte mais ne l'explique pas.
Mais le nouveau régent s'est trahi : il possède des informations qu'il ne devrait pas avoir. Et son rendez-vous avec des hobgobelins pour raser un village elfique ne laisse plus de place au doute.
Depuis le coeur de la forêt, un ignoble dragon vert orchestre tous les complots pour son propre compte.`,image:H(``)},{title:`Pixies en danger !`,notionUrl:`https://nosy-seeder-540.notion.site/Pixies-en-danger-33d48197325e81feb392d80e03ccfc50`,description:`Une forêt luxuriante est en proie à une sombre menace. Un village pixie a perdu le contact avec les villages voisins.
Une sinistre noirceur infiltre la forêt, couvrant les arbres et les créatures sauvages de toiles.
Mais les ettercaps qui se sont emparés de cette partie de la forêt ne sont pas la plus grande menace. Tapi dans les tréfonds d'une grotte obscure, un drider se délecte des esprits follets.`,image:H(``)},{title:`La voix de l'ombre`,notionUrl:`https://nosy-seeder-540.notion.site/La-voix-de-l-ombre-33d48197325e813caf14fc1daa88c44f`,description:`Un cirque ambulant cherche à capturer un animal parlant. L'animal, aperçu près d'une zone interdite infestée d'ankhegs, semble insaisissable.
Pour pénétrer la zone, la seule solution est de s'acoquiner avec des bandits. L'un d'eux les mène jusqu'au chef, un sanglier garou, qui les piège et les expédie directement au coeur du nid d'ankheg, avant de rejoindre son repaire, un clocher abandonné.`,image:H(``)},{title:`Envaser`,notionUrl:`https://nosy-seeder-540.notion.site/Envaser-33d48197325e8167bfb2e6e26ae91640`,description:`Une tentative d'assassinat contre un mage dévoile que les comploteurs viennent d'un fort non loin. La vengeance du mage, terrible, ne laisse dans le fort qu'un survivant traumatisé, affirmant que le mage n'est pas celui qu'il prétend être.
De retour en ville, le mage révèle sa véritable nature : un oblex ancien, qui possède un parchemin pour invoquer une horreur crainte des dieux eux-mêmes, un blob d'annihilation.`,image:H(``)},{title:`Tout feu, tout flamme`,notionUrl:`https://nosy-seeder-540.notion.site/Tout-feu-tout-flamme-33d48197325e81e6b94df13631c974eb`,description:`Un village voit ses eaux bouillir. Selon la légende, un malheur est sur le point de frapper. Pour les protéger, le chef veut récupérer une épée légendaire, cachée au cœur du volcan surplombant le hameau.
Mais dans le volcan, un géant du feu a élu domicile...
Lorsque le groupe récupère enfin l'arme légendaire et revient au village, leur joie est de courte durée. Le volcan entre en éruption, vomissant une armée de salamandres belliqueuses.`,image:H(``)},{title:`Prison cristalline`,notionUrl:`https://nosy-seeder-540.notion.site/Prison-cristalline-33d48197325e8104828cf3c9477284aa`,description:`Un étudiant, avide d'étudier une chimère, demande l'aide des aventuriers pour convaincre un druide qui en détient une en captivité. D'abord réticent, le druide demande au groupe de l'assister dans une tâche avant de les autoriser à voir la bête.
Lorsqu'il les conduit jusqu'à une ancienne mine servant de prison, la surprise est de taille lorsque la bête est libre, sortie de sa prison cristalline par un xorn affamé.`,image:H(``)},{title:`La ruine du serpent osseux`,notionUrl:`https://nosy-seeder-540.notion.site/La-ruine-du-serpent-osseux-33d48197325e811d9f04fdab2b0a6083`,description:`Une ruine archéologique tout juste découverte a été envahie par des bandits menés par un groupe de sectaires.
Capturant les archéologues afin de les sacrifier pour agrandir leur macabre armée, le sectaire en chef a pour projet de ressusciter un ancien naga osseux.`,image:H(``)},{title:`Le solstice des héros`,notionUrl:`https://nosy-seeder-540.notion.site/Le-solstice-des-h-ros-33d48197325e818f9b87f2556e23552a`,description:`Le solstice des héros, une semaine de fête pour célébrer l'été, permet à quiconque de défier l'Arène, promettant une récompense fabuleuse pour les vainqueurs.
  Un mécène, intéressé par la récompense, propose au groupe de combattre pour lui.
  Durant une semaine, les combats auront lieu, chacun d'un style différent et spectaculaire, jusqu'à rejoindre l'Arène rouge, réservée aux meilleurs gladiateurs.
  Mais l'arène, malgré ses dangers, révèle une surprise encore plus étonnante : la structure de l'arène elle-même est un mimique.`,image:H(``)},{title:`La mort n'est qu'un autre chemin`,notionUrl:`https://nosy-seeder-540.notion.site/La-mort-n-est-qu-un-autre-chemin-33d48197325e81b18c83e672f0fc532a`,description:`Persuadé d'avoir découvert des complices d'un nécromancien, un employeur recrute le groupe pour se faire passer pour mort et être ramassé par un groupe d'aventuriers arpentant les routes pour y récolter les cadavres.
  Lorsque ceux-ci sont déposés dans une fosse commune, les choses se compliquent. Le cimetière souterrain rassemble les dépouilles de personnes malveillantes, dont les esprits réincarnés défendent une crypte isolée.
  Au plus profond de cette crypte, une blême cherche à s'approprier la puissance d'une liche en menant d'atroces expériences sur les cadavres.`,image:H(``)},{title:`Les crocs du désert`,notionUrl:`https://nosy-seeder-540.notion.site/Les-crocs-du-d-sert-33d48197325e814c8ec1f48d57bf0997`,description:`Lorsqu'un détachement gnoll attache une caravane, la mauvaise nouvelle tombe : ces monstres ne sont que des éclaireurs. La caravane est passée non loin d'une oasis, d'où pourraient provenir les monstres.
  Mais en arrivant sur place, ce sont d'effroyables lamies qui subissent la frénésie des gnolls. Plus puissantes, elles repoussent les créatures avant de s'en prendre au groupe.
  Remontant plus loin la piste gnoll, le groupe découvre une faille rocheuse servant de tanière à la meute. `,image:H(``)},{title:`Le berger du troupeau`,notionUrl:`https://nosy-seeder-540.notion.site/Le-berger-du-troupeau-33d48197325e81bfad39d9e32902eefb`,description:`Un érudit effondré pleure la disparition de son compagnon, un sphinx l'assistant dans ses recherches. Persuadé qu'il s'agit des clercs qui discréditent son travail, il cherche à retrouver son compagnon et les menace.
  Loin de paraitre concernés, les clercs l'accusent de semer le trouble en vantant l'existence d'un gardien qui n'a jamais été vu par quiconque.
  Pour prouver son existence, le groupe doit aller à sa rencontre, dans une mystérieuse tour ne possédant aucune entrée. Le gardien existe bel et bien, un oni ancien, furieux que les clercs cherchent à nier son existence.
  Le groupe devra faire un choix : vaincre l'oni vengeur ou rétablir la vérité sur son existence.`,image:H(``)},{title:`Forteresse de glace`,notionUrl:`https://nosy-seeder-540.notion.site/Forteresse-de-glace-33d48197325e81d581b5d757805baeba`,description:`Plusieurs communautés des terres glacées dépendent des vivres d'un fournisseur. Lorsque ce dernier les leur apporte, il est surpris de voir que les vivres sont attelées pour être livrées à d'autre tandis que les villageois meurent de faim.
  Suivant les traineaux, le groupe découvre la vérité. Un camp de kobolds s'accaparent les ressources alentours, pour nourrir leur maitre, un jeune dragon blanc.
  Mais le pouvoir de destruction du dragon semble être entre les mains d'un diable gelé tirant les ficelles.`,image:H(``)},{title:`Gardiens du désert`,notionUrl:`https://nosy-seeder-540.notion.site/Gardiens-du-d-sert-33d48197325e8151ae93d80f1e7f184f`,description:`Après avoir perdu sa monture au jeux, un marchand ambulant se voit contraint d'en trouver une nouvelle. Heureusement pour lui, il dispose d'une carte menant à une ville en ruines, demeure d'un scorpion géant qu'il souhaiterait dompter.
  Mais les lieux sont envahis de yuan-ti gardant l'entrée d'une pyramide.
  Niché au cœur de la pyramide, protégé par les thri-kreens, le scorpion géant s'est lié d'amitié avec la plus improbable des créatures, un élémentaire de terre.`,image:H(``)},{title:`Un anneau pour les gouverner tous`,notionUrl:`https://nosy-seeder-540.notion.site/Un-anneau-pour-les-gouverner-tous-33d48197325e8194ab7ed4ae3bca695a`,description:`Une déité souhaite la mort d'une créature vivant dans une ruine et convoitant un pouvoir bien trop grand pour elle, un anneau de souhait.
  Enfouie au plus profond d'un marais, la ruine est la demeure d'un puissant naga corrupteur, que la quête de puissance pour obtenir l'anneau a conduit jusqu'ici.
  Lorsque le groupe pense l'avoir défait, et rentre triomphalement, ce dernier revient à la vie pour fouiller une ruine jumelle dans laquelle les gobelins sous ses ordres pensent avoir déniché l'anneau.
  Qui du groupe ou du naga parviendra à s'emparer du pouvoir absolu le premier ?`,image:H(``)},{title:`David et Goliath`,notionUrl:`https://nosy-seeder-540.notion.site/David-et-Goliath-33d48197325e81a78a17e21941dea74e`,description:`La fête locale ne peut démarrer sans la livraison d'alcool attendue depuis plusieurs jours. Les abords du vignoble étant dangereux, le groupe est missionné pour s'y rendre.
  Le vignoble, entretenu par des myconides, a été attaqué. D'énormes empreintes marquent le sol, et le vigneron, ancien aventurier reconverti, a disparu.
  Les empreintes mènent jusqu'au camp de plusieurs géants, qui ont volé l'alcool du vignoble pour s'enivrer.`,image:H(``)},{title:`Maître des airs`,notionUrl:`https://nosy-seeder-540.notion.site/Ma-tre-des-airs-33d48197325e81d8bbb5fad753ab7ed4`,description:`La mise à sac d'un village par un dirigeable interroge. Le naga gardien qui le contrôle est pacifique.
  Sur le lieu de réapprovisionnement, des pirates se sont emparés du navire, emprisonnant le naga.
  Infiltrés à bord, le groupe doit saborder le navire, et neutraliser le capitaine afin de l'empêcher de nuire définitivement`,image:H(``)},{title:`Mort et désolation`,notionUrl:`https://nosy-seeder-540.notion.site/Mort-et-d-solation-33d48197325e81a994c5e4a3e9f69643`,description:`De nombreux villages sont en flammes, visibles depuis la capitale. Une armée gobeline menée par des hobgobelins est en marche, venant de l'est. Mais à l'ouest, la cavalerie stationnée en renfort est surprise par une seconde armée funeste, formée de morts innombrables.
  Alors que la capitale est attaquée de toutes parts, la véritable menace se dévoile lorsque le mur extérieur s'effondre : un dragon noir vénérable mène les armées monstrueuses.
  Envoyant toutes les forces restantes dans un assaut suicidaire, le dirigeant escompte détourner l'attention du dragon afin que les aventuriers puissent le défaire, mettant un terme définitif à la menace.`,image:H(``)},{title:`Prédateur et prédateur alpha`,notionUrl:`https://nosy-seeder-540.notion.site/Pr-dateur-et-pr-dateur-alpha-33d48197325e813eafd3c3bd1c2c764b`,description:`Un villageois désemparé a vu son bétail dévoré par des bulettes.
  Sur place, seuls plusieurs buletiots sont encore présent. Remontant vers le nid, il s'avère que les bulettes, bien qu'agressives, ont été chassées par des ankhegs.
  Le réseau de tunnels menant à leur nid conduit jusqu'à un dôme, où un mastodonte des ombres est devenu le chef de la colonie en massacrant l'ankheg alpha qui la dirigeait précédemment.`,image:H(``)},{title:`La Cité des Brumes`,notionUrl:`https://nosy-seeder-540.notion.site/La-Cit-des-Brumes-33d48197325e81e39b39ed7d7046757d`,description:`Un mystérieux saboteur libère les créatures dangereuses enfermées dans des cages à la Dent de l'Océan, avant de s'enfuir avec elles en direction d'une cité abandonnée plongée dans la brume. Errance, créatures volantes et énigmes sont les maîtres mots de cette aventure.`,image:H(``)},{title:`Hôtel infini`,notionUrl:`https://nosy-seeder-540.notion.site/H-tel-infini-33d48197325e81cba7a6dead7a76fbb2`,description:`Un meurtre impossible a eu lieu dans un hôtel prestigieux, aux chambres extra-planaires.
  Les gérants, soucieux de protéger les résidents et de retrouver le coupable, cherchent à activer le golem protecteur des lieux. Mais la clé pour l'activer est divisée en cinq fragments, dispersés dans des chambres dangereuses.
  Lorsque ceux-ci sont assemblés, le golem révèle une chambre inconnue, où se terre l'assassin.`,image:H(``)},{title:`Qui sifflent sur vos têtes`,notionUrl:`https://nosy-seeder-540.notion.site/Qui-sifflent-sur-vos-t-tes-33d48197325e8109be23fcb956793137`,description:`Devant l'augmentation abusive des taxes, des manifestations visent à bloquer l'accès aux collecteurs. Voulues pacifique, tout dégénère après l'attaque d'un chariot de collecte.
  Après avoir protégé les manifestants, le groupe est convié à une réunion secrète, malheureusement interrompue par la dénonciation d'un traitre.
  Emprisonné, le groupe est libéré par un dirigeant afin d'enquêter sur la corruption du conseil.
  Remontant la piste jusqu'à un temple souterrain, le chaos ambiant de la ville est le fruit des manipulations d'une abomination yuan-ti`,image:H(``)},{title:`Roulotte de cirque`,notionUrl:`https://nosy-seeder-540.notion.site/Roulotte-de-cirque-33d48197325e81028dd0e513a30f60fd`,description:`Un charlatan venu d'un cirque de passage est accusé d'empoisonner ses clients.
  Se rendant sur place, le groupe découvre une roulotte contenant des plans extra-planaires.
  Bernés par leur hôte, les aventuriers se retrouvent contraint d'affronter plusieurs épreuves afin d'atteindre le chef de la roulotte.`,image:H(``)},{title:`Trésor maudit`,notionUrl:`https://nosy-seeder-540.notion.site/Tr-sor-maudit-33d48197325e81abb6d6f7e9e070a2b5`,description:`Une ville est attaquée par 2 navires pirates, qui y dérobent un artefact symbolique, ainsi qu'une partie des richesses.
  En poursuivant les navires, le groupe rattrape l'un des vaisseaux mais une violente tempête les envoie tous deux par le fond.
  Echouant sur l'île servant de repaire aux pirates, les aventuriers découvrent que l'artefact est en réalité une clé convoitée par ces derniers pour accéder aux richesses d'une ruine dominant l'île toute entière`,image:H(``)},{title:`Rats du désert`,notionUrl:`https://nosy-seeder-540.notion.site/Rats-du-d-sert-33d48197325e8135b775e0bee4bd8516`,description:`Un marchand s'est fait dérober un joyau instable par sa propre fille, à la tête d'un groupe de bandits.
  Le joyau, instable, menace d'exploser.
  Pour le récupérer, il faudra traverser le désert, lieu de vie des vers pourpres. Mais un homme a créé un modèle de bateau à voile glissant sur le sable.
  Arrivés jusqu'au repaire des criminels, les aventuriers devront agir rapidement pour récupérer le joyau avant qu'il ne soit trop tard`,image:H(``)},{title:`L'île verdoyante`,notionUrl:`https://nosy-seeder-540.notion.site/L-le-verdoyante-33d48197325e81f1bde6cdfcf8b0b80a`,description:`Une femme désespérée cherche à retrouver son mari disparu sur une île mystérieuse lors d'un duel. Corruption fongique et ruines antiques sont les éléments clés de cette aventure.`,image:H(``)},{title:`Village lycanthrope`,notionUrl:`https://nosy-seeder-540.notion.site/Village-lycanthrope-33d48197325e81018f05e331850e5de0`,description:``,image:H(``)},{title:`Spectacle de marionnettes`,notionUrl:`https://nosy-seeder-540.notion.site/Spectacle-de-marionnettes-33d48197325e81ec9f7cc197987147bf`,description:`Jaillissant d'un portail extra planaire, des zombis attaquent une ville.
  De l'autre côté du portail, un théâtre est le cadre d'un étrange jeu : un vampire force ceux qui passent le portail a jouer une pièce de théâtre, massacrant ou menaçant ceux qui s'y refusent.`,image:H(``)},{title:`Gardien de la souffrance`,notionUrl:`https://nosy-seeder-540.notion.site/Gardien-de-la-souffrance-33d48197325e81d79518e7394c488612`,description:`Lorsqu'une communauté réputée pour ses potions puissantes est attaquée par les créatures sauvages des marais, elle demande l'aide d'un groupe d'aventuriers.
  Bien que sauvages, les créatures sont organisées et collaborent alors qu'elles ne le devraient pas.
  Pénétrant au cœur du marais, le groupe découvre un temple dédié à la gloire d'une déité crocodile. Dans le temple, un seigneur des bêtes rassemble autour de lui les crocodiles massacrés pour leur sang permettant de concevoir les potions.
  Il laisse le choix au village : abandonner cette ignoble pratique ou périr`,image:H(``)},{title:`Relique dans la cité souterraine`,notionUrl:`https://nosy-seeder-540.notion.site/Relique-dans-la-cit-souterraine-33d48197325e8142ac65f97b7489e2b8`,description:`Invités par un équipementier, un svirfnebelin de renom, la cité svirfnebeline est en état de siège. Une maison drow tombée en disgrâce auprès de Lolth cherche à s'approprier la relique du temple svirfnebelin.
  Repoussant les assauts drows, les aventuriers doivent sécuriser la relique, avant que les prêtres proposent de s'en servir comme appât pour ensevelir la cheffe de maison drow sous les décombres, pour se débarrasser de sa maison une fois pour toutes`,image:H(``)},{title:`Stratégie martiale`,notionUrl:`https://nosy-seeder-540.notion.site/Strat-gie-martiale-33d48197325e81218a3ef855de494d6f`,description:`Un fort est pris par un détachement hobgobelin. En s'infiltrant dans ce dernier, le groupe découvre l'audacieuse stratégie des monstres, une manticore plongeant depuis les cieux pour ouvrir les portes depuis l'intérieur, permettant aux hobgobelins d'investir les lieux eficacement.
  Après avoir repris le fort, le groupe découvre que le détachement souhaitait tenir le lieu pour une division plus large, en marche vers le fort.
  Avec l'aide de la cavalerie, le groupe est chargé d'anéantir les envahisseurs`,image:H(``)},{title:`Ère glaciaire`,notionUrl:`https://nosy-seeder-540.notion.site/re-glaciaire-33d48197325e81f8b8d1c3d1dca979e7`,description:`En arrivant dans un village Goliath pour y solliciter l'aide d'un forgeur d'armes exceptionnel, celui-ci prépare une expédition pour retrouver un éleveur d'aurochs disparu depuis plusieurs jours. Durant l'expédition, le groupe est attaqué par un remorhaz, près de l'endroit où vit le berger. Des traces de fuite mènent le groupe jusqu'à une ancienne cathédrale. Dans cette cathédrale, les oeufs de remorhaz et les jeunes ont attiré un géant du givre, qui a massacré les bodaks s'y trouvant, et se nourrit des aurochs.`,image:H(``)},{title:`Tremblement de terre révélateur`,notionUrl:`https://nosy-seeder-540.notion.site/Tremblement-de-terre-r-v-lateur-33d48197325e8189a357d186ef690ea5`,description:`Un tremblement de terre provoque un éboulement de plusieurs maisons, révélant un ancien quartier sous le quartier actuel.
  Parmi les lieux abandonnés, des créatures rodeuses ont élu domicile, et une horde de goules voraces hante l'ancien cimetière.`,image:H(``)},{title:`Dans l'ombre du volcan`,notionUrl:`https://nosy-seeder-540.notion.site/Dans-l-ombre-du-volcan-33d48197325e81faa13ffe2b53b03f55`,description:`Une éruption volcanique met au jour une fonderie masquée auparavant par une cascade de lave.
  Profitant de l'opportunité, un groupe est monté pour l'explorer et en extraire les éventuelles richesses. Mais la fonderie masque de sombres secrets.
  Parmi les décombres, des azers travaillent à forger des reliques pour le compte d'un sinistre dragon d'ombre`,image:H(``)},{title:`Collision avec le Labyrinthe sans fin`,notionUrl:`https://nosy-seeder-540.notion.site/Collision-avec-le-Labyrinthe-sans-fin-33d48197325e81c89b33c6a3b90453d6`,description:`Le roi convoque le groupe pour admirer leur style de combat dans les jardins royaux, dont la végétation menace la tranquillité des lieux.
  A peine le divertissement royal terminé, la cité entière se brise, les murs et bâtiments se déformant pour créer un immense labyrinthe urbain, un sceau immense se dessinant dans le ciel.
  En approchant du point d'origine, la menace se précise : minotaures par hordes entières et garostro dévastateurs au cœur d'un labyrinthe où la gravité elle-même peut basculer, le Labyrinthe sans fin est en collision avec la cité.
  Les hiérophantes malveillants à l'œuvre souhaitent invoquer un seigneur démon, le redoutable Baphomet.`,image:H(``)}],Pu={class:`grid grid-cols-1 md:grid-cols-2 gap-6`},Fu=j({__name:`DndView`,setup(e){return(e,t)=>(P(),F(N,null,[t[0]||=I(`div`,{class:`flex flex-col md:flex-row md:items-center mb-4 gap-4 md:gap-6`},[I(`p`,{class:`text-xl`},`Envie de créer vos propres aventures ? Récupérez le template ici :`),I(`a`,{href:`https://nosy-seeder-540.notion.site/Nouvelle-aventure-33d48197325e8110a714fded86777eb6`,target:`_blank`,class:`px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 w-fit`},` Template `)],-1),L(ql,{label:`Toutes les aventures (${A(Nu).length})`},null,8,[`label`]),I(`div`,Pu,[(P(!0),F(N,null,M(A(Nu),(e,t)=>(P(),ia(Au,{key:e.title,reverse:Math.floor(t/2)%2==1,"dnd-adventure":e},null,8,[`reverse`,`dnd-adventure`]))),128))])],64))}}),Iu={class:`border-2 border-gray-900 rounded-md p-4 m-2 w-full`},Lu={class:`text-2xl text-center block mb-3`},Ru={class:`w-full h-4 bg-gray-200 rounded-full`},zu=j({__name:`ProgressBarComponent`,props:{label:{},progress:{}},setup(e){return(t,n)=>(P(),F(`div`,Iu,[I(`span`,Lu,D(e.label),1),I(`div`,Ru,[I(`div`,{class:`h-4 bg-green-500 rounded-full`,style:pe({width:e.progress+`%`})},null,4)])]))}}),Bu={class:`flex-1 aspect-video`},Vu=[`src`],Hu={class:`flex-1 flex flex-col gap-4 md:gap-6`},Uu={class:`text-lg md:text-2xl font-bold`},Wu={class:`text-sm md:text-base whitespace-pre-line`},Gu={key:0,class:`space-y-1`},Ku={class:`font-semibold`},qu={class:`list-disc list-inside text-sm md:text-base`},Ju=[`href`],Yu={key:1,class:`space-y-1`},Xu={class:`font-semibold`},Zu={class:`list-disc list-inside text-sm md:text-base`},Qu=[`href`],$u={key:2,class:`space-y-1`},ed={class:`list-disc list-inside text-sm md:text-base`},td=j({__name:`VideoComponent`,props:{video:{},reverse:{type:Boolean}},setup(e){return(t,n)=>(P(),F(`div`,{class:E([`flex flex-col md:gap-6 gap-4 rounded-xl p-4 md:p-6`,e.reverse?`md:flex-row-reverse border-2 border-gray-800`:`md:flex-row bg-gray-900`])},[I(`div`,Bu,[I(`iframe`,{class:`h-full w-full rounded-md`,src:`https://www.youtube.com/embed/${e.video.youtubeId}`,title:`YouTube video`,allowfullscreen:``},null,8,Vu)]),I(`div`,Hu,[I(`h2`,Uu,D(e.video.title),1),I(`p`,Wu,D(e.video.description),1),e.video.costs?(P(),F(`div`,Gu,[I(`h3`,Ku,D(e.video.costs.label),1),I(`ul`,qu,[(P(!0),F(N,null,M(e.video.costs.items,e=>(P(),F(`li`,{key:e.label},[I(`a`,{href:e.url,target:`_blank`,class:`text-blue-400 hover:underline`},D(e.label),9,Ju)]))),128))])])):ma(``,!0),e.video.links?(P(),F(`div`,Yu,[I(`h3`,Xu,D(e.video.links.label),1),I(`ul`,Zu,[(P(!0),F(N,null,M(e.video.links.items,e=>(P(),F(`li`,{key:e.label},[I(`a`,{href:e.url,target:`_blank`,class:`text-blue-400 hover:underline`},D(e.label),9,Qu)]))),128))])])):ma(``,!0),e.video.misc?.length?(P(),F(`div`,$u,[n[0]||=I(`h3`,{class:`font-semibold`},`Divers`,-1),I(`ul`,ed,[(P(!0),F(N,null,M(e.video.misc,e=>(P(),F(`li`,{key:e},D(e),1))),128))])])):ma(``,!0)])],2))}}),nd=[{title:`Géocaching - Les 300 trésors de Rennes`,youtubeId:`B8GBceW5Mr8`,description:`Dans cette vidéo, je vous raconte une chouette histoire, je m'enfile 174 boîtes de médicaments d'affilée, j'adopte une araignée et je visite un niveau des backrooms !`,costs:{label:`Coûts - 79.40€`,items:[{label:`Géocaching - Abonnement annuel - 40€`,url:`https://www.geocaching.com/play`},{label:`Tampon personnalisé NS - 14.40€`,url:`https://www.tamponnemoi.com/tampon-encreur-rond/tampon-rond-carte-de-fidelite-trodat-printy-4612-diametre-12mm`},{label:`Support téléphonique pour vélo - 15€`,url:`https://www.decathlon.fr/p/support-smartphone-velo-metal/_/R-p-325682`},{label:`Location kayak 1 heure - 10€`,url:`https://www.embarcadere-rennes.fr/base-nautique-rennes/`}]},misc:[`Ajout des frais du défi`,`Nouveau générique`]},{title:`Course à pied - Terminer un marathon`,youtubeId:`J670frW7pIc`,description:`L'épreuve mythique de la course à pied, le marathon…
Seulement 0.17 % de la population mondiale l'a déjà terminé.
En 3 mois, est-ce qu'un bon entrainement permet d'en achever un et de rejoindre ce club ultra select ? On va bien voir !`,costs:{label:`Coûts - 257.57€`,items:[{label:`RunMotion Coach - Version gratuite`,url:`https://run-motion.com/`},{label:`Inscription Marathon de la liberté - 66€`,url:`https://www.marathondelaliberte.fr/`},{label:`Options envoi de dossard à domicile + don 10€ - 18€`,url:`https://www.marathondelaliberte.fr/`},{label:`Trépied Manfrotto 290 XTra - 173.57€`,url:`https://www.boulanger.com/ref/1061747`}]},links:{label:`Coûts - 257.57€`,items:[{label:`Tableau d'entrainement`,url:`https://docs.google.com/spreadsheets/d/1Aa6aw-oPYE390Kdy2t9EQIEiICsiJiDD_yLONovBRXk/edit?gid=0#gid=0`}]},misc:[`Achat d’un trépied (ring light pas stable)`]},{title:`Lecture - 5h/jour pendant 52 jours`,youtubeId:`BxVsPqYNEuE`,description:`Le temps de lecture hebdomadaire français est de 4h47min. 52 semaines de lecture (1 an) condensées en 52 jours, ça passe ou ça casse ? On va bien voir !`,costs:{label:`Coûts - 377€`,items:[{label:`Bibliothèque BILLY - 70€`,url:`https://www.ikea.com/fr/fr/p/billy-bibliotheque-brun-motif-noyer-50508652/`},{label:`Eclairage TVÄRDRAG x2 - 34€`,url:`https://www.ikea.com/fr/fr/p/tvaerdrag-eclairage-vitrine-noir-intensite-lumineuse-reglable-60516821/`},{label:`Transformateur TRÅDFRI - 25€`,url:`https://www.ikea.com/fr/fr/p/tradfri-transformateur-electrique-connecte-connecte-gris-60342656/`},{label:`Câble d'alimentation FÖRNIMMA - 5€`,url:`https://www.ikea.com/fr/fr/p/foernimma-cable-dalimentation-50446881/`},{label:`Ruban à LED - 10€`,url:`https://www.amazon.fr/HOVVIDA-T%C3%A9l%C3%A9commande-Synchronisation-Minuterie-Festival/dp/B0CQQ6R3G4?c=ts&dib=eyJ2IjoiMSJ9.7IvCTgIcejHAPAo0dMNXCHNYo8NP32hDRvhcEFE8LL-MTXXHWrQxG4M4_myIfmo2YiYwgoDy3UlJIPAu8RvbfmaPqt4rZfUCKl3M1DKsNmcD6a0VKSeqJUXZ4VsTo1UKck0DvopIdvJUaxpKaEoggyytQrpUvlr_vwQ1nwDIeyZ_wQj8MlGyleP4qD4b_m7d_R4IlDT2_nDSVGJnm3ow-ojEYfyk14i-4kBFY_xUs52XjMqU58-DPdkubkWVGHFXn2ZadXedHIi48CC-eqikfLPcpq7-EJuCqUk82Lfp37w.dFE3euA-fVVKKFhdqbJDE0Ls2YpWFo6VDsueLB9Dw4U&dib_tag=se&keywords=Rubans%2B%C3%A0%2BLED&qid=1758266194&s=lighting&sr=1-4&ts_id=3772304031&th=1`},{label:`Eclairage NEEWER NL 660 - 233€`,url:`https://fr.neewer.com/products/nl660-led-panel-lights-66600536`}]},links:{label:`Liens`,items:[{label:`Tableau des lectures`,url:`https://docs.google.com/spreadsheets/d/1ufzcb6y3RaeumndCOjP4-zOPf55eK0fzX-DjIKyl_0Y/edit?gid=0#gid=0`}]},misc:[`Livres en cadeaux, aucun achat`,`Ajout du décor`,`Nouvel éclairage (ring light trop pourri)`]},{title:`Callisthénie - Les 9 fondamentaux de The Movement Athlete`,youtubeId:`HTwvVf88lr4`,description:`Aujourd'hui on passe au niveau supérieur avec une première vidéo sportive sur une application de callisthénie, The Movement Athlete.
L'application propose un ensemble de techniques de différents niveaux, avec une liste d’exercices pour y parvenir progressivement.
Objectif : parvenir à maitriser les 9 exercices dits Fondamentaux.`,costs:{label:`Coûts - 50€`,items:[{label:`The Movement Athlete - Abonnement 3 mois - 50€`,url:`https://themovementathlete.com/`}]},links:{label:`Liens`,items:[{label:`Tableau des performances & mensurations`,url:`https://docs.google.com/spreadsheets/d/1T3QkULlceMcJ5hc9ky2y0ZMOJl9sISA83T7cQv2o280/edit?gid=0#gid=0`}]}},{title:`Présentation de la chaîne`,youtubeId:`mjIW23eJ4dc`,description:`Je vous présente le concept de la chaîne.
L'objectif, c'est de réaliser des défis en tout genre (sport, musique, lecture, jeu vidéo, langue, …) et de voir les résultats au fil du temps et de la progression.
Et si vous pouvez participer, c'est encore mieux !`,costs:{label:`Coûts - 1093.90€`,items:[{label:`Caméra : Téléphone Samsung S23 Ultra ~850€`,url:`https://boutiquepro.orange.fr/telephone-mobile-samsung-galaxy-s23-ultra-5g-noir-256go.html?utm_medium=bu_sms_lienweb&utm_source=bu_sms_siteshowroom_mobile&utm_campaign=2023_02_lancement_samsung&utm_content=tm&utm_term=mobile_samsung_s23ultra_boutiquepro`},{label:`Trépied + éclairage : Ring Light Wi light RL 10 - 39.90€`,url:`https://www.boulanger.com/ref/9000690440`},{label:`Micro : Rode Wireless Go 2 - 204€`,url:`https://www.boulanger.com/ref/1187303`},{label:`Montage : DaVinci Resolve - Version gratuite`,url:`https://www.blackmagicdesign.com/fr/products/davinciresolve`}]}}],rd={class:`w-full px-4 md:px-6 py-6 md:py-10 flex flex-col md:flex-row items-center gap-8 md:gap-20`},id={class:`w-full`},ad={class:`px-4 md:px-0`},od={class:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-6`},sd={class:`px-4 md:px-0`},cd=j({__name:`HomeView`,setup(e){let t=[{label:`Défi`,progress:50},{label:`Script`,progress:10},{label:`Tournage`,progress:0},{label:`Montage`,progress:0}],n=nd[0];return(e,r)=>(P(),F(N,null,[I(`section`,rd,[r[1]||=I(`img`,{src:`/site-web/assets/homeImage-eCv9doiP.png`,alt:`Profil`,class:`w-2/3 md:w-1/3 max-w-sm md:max-w-xl`},null,-1),I(`div`,id,[L(ql,{label:`Présentation`}),r[0]||=pa(`<p class="text-md mb-2"> Le 04 novembre 2024, j&#39;ai créé la chaîne YouTube &#39;Niveau Supérieur&#39; avec pour 3 objectifs en tête : </p><ul class="text-md mb-3 space-y-1"><li>1. Casser la routine en cherchant des défis difficiles à réaliser</li><li> 2. Prouver qu&#39;un mec ordinaire peut aussi faire des choses extraordinaires avec de la discipline </li><li> 3. Montrer que si un mec ordinaire peut le faire, alors n&#39;importe qui en est capable </li></ul><p class="text-md mb-2"> L&#39;objectif, c&#39;est de tout montrer : comment réaliser chaque défi, les coûts que cela peut avoir, les résultats obtenus, les succès et les échecs, en y ajoutant une touche de culture générale et d&#39;humour pour que ça soit plus divertissant. </p><p class="text-md mb-2"> Maintenant que la chaîne est lancée, je me rends compte qu&#39;il y a pleins de choses que je voudrais partager et qui ne peuvent pas l&#39;être avec une simple vidéo : les programmes que j&#39;ai testé durant les défis, le planning pour suivre la progression des défis, les tableaux Excel en tout genre, la matériel que j&#39;utilise pour réaliser les vidéos, les liens vers les différents réseaux sociaux. </p><p class="text-md mb-2">Tout ça et bien plus encore, vous pourrez le retrouver ici !</p>`,5)])]),I(`section`,ad,[L(ql,{label:`Avancement de la prochaine vidéo`}),I(`div`,od,[(P(),F(N,null,M(t,e=>L(zu,{key:e.label,label:e.label,progress:e.progress},null,8,[`label`,`progress`])),64))])]),I(`section`,sd,[L(ql,{label:`Dernière vidéo`}),L(td,{video:A(n)},null,8,[`video`])])],64))}}),U={first:{label:`Première séance`,color:`amber`},last:{label:`Dernière séance`,color:`amber`},competition:{label:`Compétition`,color:`red`},stage:{label:`Étape validée`,color:`blue`},test:{label:`Test`,color:`orange`},sport:{label:`Sport`,color:`violet`},running:{label:`Course à pied`,color:`yellow`},calisthenics:{label:`Callisthénie`,color:`lime`},reading:{label:`Lecture`,color:`fuchsia`},geocaching:{label:`Géocaching`,color:`green`},creating:{label:`Création`,color:`indigo`},virtualCycling:{label:`Cyclisme virtuel`,color:`rose`},cycling:{label:`Cyclisme`,color:`cyan`},swimming:{label:`Natation`,color:`sky`},cardio:{label:`Cardio`,color:`emerald`}},ld=[{name:`The Movement Athlete (TMA) - Ab (100%👑) 🎉`,date:`2024-12-27`,duration:27,tags:[U.sport,U.calisthenics,U.stage,U.last],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (4')
Skillwork :
- Hollow Tucks Both Legs Extended 3*20
Strength :
- V-Snaps 3*(8-11-14)
Muscle :
- V-Snaps Hollow Body Legs Straddle 3*(12-15-18)
Cooldown (2')`},{name:`TMA - Ab (96%)`,date:`2024-12-24`,duration:12,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (2')
Skillwork :
- Hollow Tucks Both Legs Extended 3*20
Strength :
- V-Sit Hold 1*7"
Cooldown (1')`},{name:`TMA - Ab (92%)`,date:`2024-12-23`,duration:26,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (3')
Skillwork :
- Hollow Tucks Both Legs Extended 3*20
Strength :
- V-Snaps Hollow Body Legs Straddle 3*(8-11-14)
Muscle :
- Straight Leg Raises 2*(30-40" AMRAP)
Cooldown (2')`},{name:`TMA - Ab (88%)`,date:`2024-12-20`,duration:20,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (3')
Skillwork :
- Hollow Body Crunch 3*12
Strength :
- V-Snaps Hollow Body Legs Bent 3*(8-11-14)
Muscle :
- Leg Raises with Bent Knees 2*(30-40" AMRAP)
Cooldown (2')`},{name:`TMA - Ab (84%), Pull-up (100%👑)`,date:`2024-12-19`,duration:44,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (6')
Skillwork :
- Hollow Body Crunch 3*12
- Top Scapula Contractions 2*5
Strength :
- Straight Leg Raises 3*(8-11-14)
- Pull-ups 3*(4-7-10)
Muscle :
- Leg Raises with Bent Knees 2*(30-40" AMRAP)
- Assisted Pullups band 2*(8-11)
Endurance :
- Bent Arm Hold 3*(10-20-30")
Cooldown (3')`},{name:`TMA - Pull-up (95%), Ab (80%)`,date:`2024-12-18`,duration:32,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (4')
Skillwork :
- Top Scapula Contractions 2*5
- Hollow Body Crunches 3*12
Strength :
- Bent Arm Hold 3*(7-10-13)
- Leg Raises with Bent Knees 3*(10-13-16)
Muscle :
- Negative Pull-ups 2*(30-40" AMRAP)
Cooldown (2')`},{name:`TMA - Ab (76%), Pull-up (91%)`,date:`2024-12-17`,duration:41,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (5')
Skillwork :
- Scissors 3*30
- Top Scapula Contractions 2*5
Strength :
- Hollow Hold Arms Up 3*(42-52-62")
- Slow Negative Chin-ups 3*(3-6-9)
Muscle :
- Hollow Lifts And Hold Arms Down 3*(10-13-16)
Cooldown (4')`},{name:`TMA - Pull-up (87%), Ab (72%)`,date:`2024-12-16`,duration:45,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (6')
Skillwork :
- Middle Scapula Contractions 2*5
- Scissors 3*30
Strength :
- Negative Pull-ups 3*(4-7-10)
- Hollow Rocks Arms Up 3*(8-11-14)
Muscle :
- Hollow Lifts And Hold Arms Down 3*(10-13-16)
Endurance :
- Hollow Hold Arms Down 3*(60-70-80")
Cooldown (4')`},{name:`TMA - Ab (68%), Pull-up (82%)`,date:`2024-12-13`,duration:52,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Scissors 3*30
- Middle Scapula Contractions 2*5
Strength :
- Hollow Lifts And Hold Arms Overhead 3*(7-10-13)
- Negative Chin-ups 3*(8-11-14)
Muscle :
- Hollow Tucks Both Legs Extend 3*(20-23-26)
- Leg Assisted Pull-ups 2*(30-40" AMRAP)
Endurance :
- Hollow Hold Arms Down 3*(60-70-80")
Cooldown (4')`},{name:`TMA - Pull-up (78%), Ab (64%)`,date:`2024-12-12`,duration:46,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (6')
Skillwork :
- Middle Scapula Contractions 2*5
- Deadbug 3*15
Strength :
- Assisted Negative Pull-ups Band 3*(6-9-12)
- Hollow Rocks Arms Down 3*(8-11-14)
Muscle :
- Leg Assisted Pull-ups 2*(30-40" AMRAP)
- Hollow Tucks Both Legs Extended 3*(20-23-26)
Cooldown (4')`},{name:`TMA - Ab (60%), Pull-up (73%)`,date:`2024-12-11`,duration:55,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Deadbug 3*15
- Shoulder Dislocates with a Band 2*5
Strength :
- Hollow Hold Arms Down 3*(42-52-62")
- One Leg Assisted Pullups 3*(8-11-14)
Muscle :
- Hollow Tucks One Leg Extend Hands Down 3*(20-23-26)
- One Leg Assisted Chinups 2*(30-40" AMRAP)
Endurance :
- Pullup Hold 3*(20-30-40")
Cooldown (4')`},{name:`TMA - Pull-up (69%), Ab (56%)`,date:`2024-12-10`,duration:55,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (6')
Skillwork :
- Shoulder Dislocates with a band 2*5
- Deadbug 3*15
Strength :
- One Leg Assisted Chinups 3*(8-11-14)
- Hollow Lifts and Hold Arms Down 3*(7-10-13)
Muscle :
- Hollow Tucks One Leg Extend grab one leg 3*(20-23-25)
Endurance :
- Chin Over the Bar Hold 2*(20-30")
- Tuck Hollow Hold 3*(60-70-80")
Cooldown (4')`},{name:`TMA - Ab (52%), Pull-up (65%)`,date:`2024-12-09`,duration:39,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (4')
Skillwork :
- Hollow Body Crunch 3*12
- Shoulder Dislocates with a band 2*5
Strength :
- Hollow Tucks Both Legs Extended 3*(14-17-20)
- Leg Assisted Pull-ups 3*(6-9-12)
Endurance :
- Tuck Hollow Hold 3*(60-70-80")
Cooldown (3')`},{name:`TMA - Push-up (100%👑), Dips (100%👑), Pull-up (60%)`,date:`2024-12-06`,duration:50,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Paused Jumping Incline Pushup 3*3
Strength :
- Normal Push-ups 3*(8-11-14)
- Dips 3*(8-11-14)
- Leg Assisted Chin-ups 3*(8-11-14)
Muscle :
- Diamond Half Push-ups 2*(12-15)
- Half Dips 3*(12-15-18)
Endurance :
- Pushup Hold 2cm off the floor 3*(20-30-40")
- Static Hold Half Way Dips 3*(15-25-35")
Cooldown (4')`},{name:`TMA - Ab (48%), Side (100%👑), Pull-up (56%), Dips (92%)`,date:`2024-12-05`,duration:68,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Hollow Body Crunch 3*12
Strength :
- Hollow Tucks One Leg Extend Hands Down 3*(14-17-20)
- Side V-Ups 3*(7-10-13)
- Pullup Hold 3*(21-31-41")
- Bottom Dip Press 3*(8-11-14)
Muscle :
- Jumping Pull-ups 2*(30-40" AMRAP)
- Half Dips 3*(12-15-18)
Endurance :
- Side Hold 3*(15-25-35")
- Static Hold Half Way Dips 3*(15-25-35")
Cooldown (5')`},{name:`TMA - Push-up (89%), Dips (84%), Pull-up (55%)`,date:`2024-12-04`,duration:55,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Paused Incline Pushup 3*3
Strength :
- Diamond Half Push-ups 3*(8-11-14)
- Bottom Dip Hold 3*(7-17-27")
- Pullup Hold 3*(21-31-41")
Muscle :
- Wide Half Push-ups 2*(12-22" AMRAP)
- Half Dips 3*(12-15-18)
- Jumping Pull-ups 2*(30-40" AMRAP)
Endurance :
- Knee Diamond Low Push-up Hold 3*(30-40-50")
- Static Hold Half Way Dips 3*(15-25-35")
Cooldown (4')`},{name:`TMA - Side (92%), Ab (44%), Pull-up (52%)`,date:`2024-12-03`,duration:56,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Hollow Body Crunch 3*12
Strength :
- Side Tuck-ups 3*(8-11-14)
- Hollow Tucks One Leg Extend grab one leg 3*(14-17-20)
- Leg Assited Pullup Hold 3*(21-24-27)
Muscle :
- V-Sit Crunches 3*(30-40-50" AMRAP)
- Lower Body Lifts on elbows 3*(30-40-50")
Cooldown (4')`},{name:`TMA - Dips (77%), Push-up (77%), Pull-up (47%)`,date:`2024-12-02`,duration:56,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Paused Jumping Incline Pushup 3*3
- Active Hang 2*10
Strength :
- Half Dips 3*(8-11-14)
- Wide Half Push-ups 3*(8-11-14)
- Chin Over The Bar Hold 3*(14-24-34")
Muscle :
- One Leg Supported Dips 3*(8-11-14)
- Half Push-ups 2*(10-20" AMRAP)
- Jumping Pull-ups 2*(30-40" AMRAP)
Endurance :
- Static Hold Half Way Dips 3*(15-25-35")
- Knee Diamond Half Pushup Hold 3*(30-40-50")
Cooldown (4')`},{name:`TMA - Handstand (100%👑), Ab (40%), Pull-up (43%)`,date:`2024-11-29`,duration:64,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Box Kicks 2*5
- Body Twistings 3*30
- Active Hang 2*10
Strength :
- Wall Handstand Hold wall facing 2*(21-31")
- Tuck Hollow Hold 3*(42-52-62")
- Leg Assisted Chin-ups Over Bar 3*(21-31-41")
Muscle :
- L Hold Handstand Shrugs 2*(20-23)
- Body Raises With Arms Behind Neck 2*(30-40" AMRAP)
- Jumping Pull-ups 2*(30-40" AMRAP)
Endurance :
- 3/4 Handstand 2*(30-40")
Cooldown (6')`},{name:`TMA - Side (84%), Push-up (66%), Dips (69%)`,date:`2024-11-28`,duration:60,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Paused Jumping Incline Pushup 3*3
Strength :
- Side Crunch 2*(10-13)
- Half Push-ups 3*(7-10-13)
- Static Hold Half Way Dips 3*(10-20-30")
Muscle :
- Incline Push-ups 3*(30-33-35)
- One Leg Supported Dips 3*(8-11-14)
Endurance :
- Knee Wide Low Push-up Hold 3*(30-40-50")
- Shrugging Dip Top Hold 3*(12-15-18)
Cooldown (5')`},{name:`TMA - Pull-up (39%), Ab (36%), Handstand (87%)`,date:`2024-11-27`,duration:65,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Truck Back Rocks 3*15
- Box Kicks one leg 2*5
Strength :
- Jumping Pull-ups 3*(8-11-14)
- Lower Body Lifts on elbows 3*(21-24-27)
- 3/4 Handstand 2*(35-45")
Muscle :
- Close Arm Pulls 2*(12-22" AMRAP)
- Body Raises With Arms in Front 2*(30-40" AMRAP)
- L Hold Handstand Shrugs 2*(20-23)
Endurance :
- Dead Hang 3*(30-40-50")
- Pike Shape Hold 2*(30-40")
Cooldown (5')`},{name:`TMA - Dips (61%), Push-up (55%)`,date:`2024-11-26`,duration:57,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Serratus Pushup 3*5
- Push-up Shrugs 2*10
Strength :
- Slow Negative Dips 3*(6-9-12)
- Incline Push-ups 3*(21-24-27)
Muscle :
- Legs Supported Dips 3*(8-11-14)
- Knee Diamond Push-ups 3*(20-21-20)
Endurance :
- Shrugging Dip Top Hold 3*(12-15-18)
- Knee Wide Half Pushup Hold 3*(30-40-50")
Cooldown (6')`},{name:`TMA - Ab (32%), Side (77%), Handstand (84%)`,date:`2024-11-25`,duration:56,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Alternating Star Crunches 3*10
- Box Kicks one leg 2*5
Strength :
- Body Raises With Arms Behing Neck 3*(14-17-20)
- V-Sit Crunches 2*(10-13)
- 3/4 Handstand 2*(31-41")
Muscle :
- Body Raises With Arms in Front 2*(30-40" AMRAP)
- L Cross Crunch 3*(30-40-50" AMRAP)
- L Hold Handstand Shrugs 2*(20-23)
Endurance :
- Pike Shape Hold 2*(30-40")
Cooldown (4')`},{name:`TMA - Pull-up (37%), Back (100%👑), Handstand (83%)`,date:`2024-11-22`,duration:69,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Hip Thrust one leg 2*5
- Box Kicks one leg 2*5
Strength :
- Jumping Pull-ups 3*(8-11-14)
- Arch Hold 3*(7-10-13)
- 3/4 Handstand 2*(31-41")
Muscle :
- Close Arm Pulls 2*(12-22" AMRAP)
- Band Deadlifts 3*(10-13-16)
- L Hold Handstand Shrugs 2*(20-23)
Endurance :
- Dead Hang 3*(30-40-50")
- Pike Shape Hold 2*(30-40")
Cooldown (4')`},{name:`TMA - Ab (28%), Push-up (44%), Side (69%)`,date:`2024-11-21`,duration:62,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Hollow Body Crunch 3*12
- Push-up Shrugs 2*10
Strength :
- Body Raises With Arms In Front 3*(14-17-20)
- Lying Knee Raises with a twist 2*(10-13)
Muscle :
- Reverse Crunch 3*(12-15-18)
- Knee Wide Push-ups 2*(20-30" AMRAP)
Endurance :
- Knee Low Push-up Hold 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Dips (53%), Side (61%)`,date:`2024-11-20`,duration:49,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (6')
Skillwork :
- Serratus Pushup 3*5
Strength :
- Walking Dips 3*(8-11-14)
- L Cross Crunch 2*(10-13)
Muscle :
- Legs Supported Dips 3*(8-11-14)
- Side Oblique Floor Crunch 3*(30-40-50" AMRAP)
Endurance :
- Shrugging Dip Top Hold 3*(12-15-18)
Cooldown (4')`},{name:`TMA - Handstand (75%), Back (87%), Pull-up (34%)`,date:`2024-11-19`,duration:66,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Box Kicks one leg 2*5
- Hip Thrust one leg 2*5
- Scapula Contractions 2*5
Strength :
- L Hold Handstand Shrugs 2*(14-17)
- Arch Ups 3*(7-10-13)
- Dead Hang 3*(21-31-41")
Muscle :
- Laying Shrugs 2*(20-23)
- Band Deadlifts 3*(10-13-16)
- Wide Arm Pulls 3*(30-40-50" AMRAP)
Endurance :
- Half Lever Hold 2*(10-20")
Cooldown (5')`},{name:`TMA - Push-up (33%), Ab (24%), Pull-up (30%)`,date:`2024-11-18`,duration:63,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Hollow Body Crunch 3*12
- Scapula Contractions 2*5
Strength :
- Knee Wide Push-ups 3*(14-17-20)
- Reverse Crunch 3*(8-11-14)
- Close Arm Pulls 3*(8-11-14)
Muscle :
- Knee Push-ups 3*(30-30-30)
- Body Raises With Arm Assistance 2*(30-40" AMRAP)
Endurance :
- Knee Half Pushup Hold 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Pull-up (26%), Side (53%), Dips (46%), Back (75%)`,date:`2024-11-15`,duration:70,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Weighted Side Bends 2*5
- Serratus Pushup 3*5
- Hip Thrust one leg 2*5
Strength :
- Wide Arm Pulls 3*(8-11-14)
- Side Oblique Floor Crunch 2*(10-13)
- Shrugging Dips 3*(8-11-14)
- Swimmers 1*8
Muscle :
- Legs Supported Dips 3*(8-11-14)
- Band Deadlifts 3*(10-13-16)
Endurance :
- Bottom Dip Up Legs Supported 3*(12-15-18)
Cooldown (5')`},{name:`TMA - Handstand (62%), Ab (20%), Back (62%)`,date:`2024-11-14`,duration:74,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Box Kicks One Leg 2*5
- Slow Frog Sit Ups 2*5
- Hip Thrust One Leg 2*5
Strength :
- L Hold Handstand 2*(31-41")
- Tuck Back Rocks 3*(10-13-16)
- Upper Body Lifts Arms By Ear 3*(7-10-13)
Muscle :
- Laying Shrugs 2*(20-23)
- Knee And Body Raises With Arm 2*(30-40" AMRAP)
- Band Deadlifts 3*(10-13-16)
Endurance :
- Half Lever Hold 2*(10-20")
- Straight Leg Lower Body Hold 3*(10-13-16)
Cooldown (5')`},{name:`TMA - Push-up (22%), Dips (38%), Side (46%), Pull-up (21%)`,date:`2024-11-13`,duration:67,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Strength :
- Knee Push-ups 3*(29-30-30)
- One Leg Supported Dips 3*(6-9-12)
- Side Rocks 2*(8-11)
- Close Arm Descents 3*(6-9-12)
Muscle :
- Wall Push-ups 2*(30-40" AMRAP)
- Legs Supported Dips 3*(8-11-14)
Endurance :
- Wall Low Push-up Hold 3*(30-40-50")
- Bottom Dip Up Legs Supported 3*(12-15-18)
Cooldown (5')`},{name:`TMA - Squat (100%👑), Back (50%)`,date:`2024-11-12`,duration:60,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Wall Squat Slow Descent 3*12
- Hip Thrust one leg 2*5
Strength :
- Full Squats 3*(14-17-20)
- Elbow Upper Body Lifts 3*(8-11-14)
Muscle :
- Wall Squats 2*(5-15" AMRAP)
- Band Deadlifts 3*(10-13-16)
Endurance :
- Chair Squat Hold against wall 3*(30-40-50")
- Yoga Bridge 3*(30-40-50")
Cooldown (4')`},{name:`TMA - Pull-up (17%), Side (38%), Ab (16%)`,date:`2024-11-11`,duration:68,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Scapula Circles Box 2*5
- Weighted Side Bends 2*5
- Slow Frog Sit Ups 2*5
Strength :
- Wide Arm Descents 3*(6-9-12)
- Side Hold 2*(10-20")
- Body Raises With Arm Assistance 3*(14-17-20)
Muscle :
- Side Lifts 3*(30-40-50" AMRAP)
- Knee Raises On Elbows 2*(30-40" AMRAP)
Endurance :
- Low Bar Hang 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Squat (80%), Handstand (50%)`,date:`2024-11-08`,duration:64,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Wall Squats 3*5
- Half Lever 3*12
Strength :
- Bottom Assisted Squat 3*(7-10-13)
- L Shape Hold On Knees 2*(31-41")
Muscle :
- Half Squats 3*(10-13-16)
- Downward Dog Shrugs 2*(20-23)
Endurance :
- Assisted Squat Hold 3*(30-40-50")
- Downward Dog Hold 2*(45-55")
Cooldown (5')`},{name:`TMA - Push-up (21%), Dips (30%), Ab (12%)`,date:`2024-11-07`,duration:64,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Slow Frog Sit Ups 2*5
Strength :
- Knee Push-ups 3*(23-25-22)
- Legs Supported Dips 3*(6-9-12)
- Knee And Body Raises with Arm 3*(21-24-27)
Muscle :
- Wall Push-ups 2*(30-40" AMRAP)
- Lying Knee Raises 2*(30-40" AMRAP)
Endurance :
- Wall Low Push-up Hold 3*(30-40-50")
- Bottom Dip Up Legs Supported 3*(12-15-18)
Cooldown (5')`},{name:`TMA - Squat (60%), Back (37%)`,date:`2024-11-06`,duration:58,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Monster Walk 3*10
- Hip Thrust one leg 2*5
Strength :
- Half Squats 3*(21-24-27)
- Straight Leg Lower Body Lifts 3*(7-10-13)
Muscle :
- Box Squats 3*(30-33-36)
- Band Deadlifts 3*(10-13-16)
Endurance :
- Yoga Bridge 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Bodyline (100%👑), Dips (23%), Side (30%), Pull-up (13%)`,date:`2024-11-05`,duration:68,tags:[U.sport,U.calisthenics,U.stage],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Plank Side Steps 3*12
- Scapula Retraction ans Depression 2*5
- Weighted Side Bends 2*5
- Scapula Circles Box 2*5
Strength :
- Arms Plank Hold 3*(42-52-62")
- Elevated Legs Bench 3*(8-11-14)
- Side Lifts And Hold 3*(7-17-27")
- Close Arm Half Pulls 3*(10-13-14)
Endurance :
- Running Man 1*15
- Top Dip Hold 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Handstand (37%); Ab (8%), Pull-up (11%)`,date:`2024-11-04`,duration:64,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Half Lever 3*12
- Bird Dog 3*10
- Scapula Circles Box 2*5
Strength :
- Downward Dog Shrugs 2*(14-17)
- Knee Raises On Elbows 3*(21-24-27)
- Close Arm Half Pulls 3*(10-10-9)
Muscle :
- Laying Handstand 2*(30-40")
Endurance :
- Downward Dog Hold 2*(45-55")
Cooldown (5')`},{name:`TMA - Squat (40%), Push-up (19%), Side (23%)`,date:`2024-11-01`,duration:65,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Lateral Band Work 3*10
Strength :
- Box Squats 3*(21-24-27)
- Knee Push-ups 3*(21-24-25)
- Side Lifts 3*(8-11-14)
Muscle :
- Wall Push-ups 2*(30-40" AMRAP)
Endurance :
- Assisted Squat Hold 3*(30-40-50")
- Wall Low Push-up Hold 3*(30-40-50")
Cooldown (5')`},{name:`TMA - Back (25%), Pull-up (8%), Dips (15%), Bodyline (75%)`,date:`2024-10-31`,duration:61,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (9')
Skillwork :
- Yoga Bridge Lifts 2*5
- Scapula Retraction and Depression 2*5
Strength :
- Hands Down Upper Body Lifts 3*(8-11-14)
- Wide Arm Half Pulls 3*(10-12-11)
- Straight Legs Bench Dips 3*(14-17-20)
- Elbows Plank 2*(31-41")
Muscle :
- Band Deadlifts 3*(10-13-16)
Endurance :
- Top Dip Hold 3*(30-40-50")
- Running Man 1*15
Cooldown (5')`},{name:`TMA - Side (15%), Ab (4%), Handstand (25%), Bodyline (50%)`,date:`2024-10-30`,duration:71,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Bird Dog 3*10
- Mini Lever 2*5
Strength :
- Side Upper Body Lifts 3*(8-11-14)
- Lying Knee Raises 3*(21-24-27)
- Downward Dog Hold 2*(31-41")
- Elbows Plank On Knees Hold 3*(42-52-62")
Muscle :
- Laying Handstand 2*(30-40")
Endurance :
- Arms Plank Hold 2*(45-55")
- Pseudo Plank Hold 1*60"
Cooldown (6')`},{name:`TMA - Push-up (11%), Squat (20%), Dips (7%), Pull-up (7%)`,date:`2024-10-29`,duration:63,tags:[U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (8')
Skillwork :
- Sit Back Training (against wall) 3*12
Scapula Retraction and Depression 2*5
Strength :
- Wall Push-ups 3*(21-24-27)
- Assisted Squats 3*(14-17-20)
- Bent Knee Bench Dips 3*(8-11-14)
- Wide Arm Half Pulls 3*(10-11-11)
Endurance :
- Wall Half Push-up Hold 3*(30-40-50")
- Top Dip Hold 3*(30-40-50")
Cooldown (5')`},{name:`The Movement Athlete (TMA) - Side (7%), Back (12%), Bodyline (25%), Handstand (12%), Pull-up (4%)`,date:`2024-10-28`,duration:70,tags:[U.first,U.sport,U.calisthenics],programs:[`calisthenicsTMAEasyProgram`],description:`Warm-up (7')
Skillwork :
- Yoga Bridge Lifts 2*5
- Mini Lever 2*5
Strength :
- Side Lower Body Lifts 3*(10-13-16)
- Bent Knee Lower Body Lifts 3*(7-10-13)
- Pseudo Plank Hold 3*(42-52-62")
- Wall Stand 2*(31-41")
- Low Bar Hang 3*(21-31-41")
Muscle :
- Band Deadlifts 3*(10-13-16)
Endurance :
- Arms Plank Hold 2*(45-55")
Cooldown (4')`}],ud=[{name:`Triathlon - Circuit training`,date:`2026-03-31`,duration:30,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Echauffement 15-20 minutes sur Zwift
- 30 Squats
- 15 Pompes
- 10 Sauts sur box
- 30 Lunges
- 20 Levées de bassin à 1 jambe (jambes surélevées)
- 10 Frog jumps
- 30 Calf raise
- 20 Kettlebell swing à 2 bras
- 10 Sauts sur box
- 2x15 Montées sur box à 20kg
- 40 Climbers
- 10 Burpees`},{name:`Triathlon - Circuit training`,date:`2026-03-27`,duration:22,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Faire le circuit 3 fois, 1 minute de récupération entre chaque boucle, pas de pause entre les exos

- 30 Jumpingjack
- 30 Squats
- 30 Dips
- 20 Climbers
- 20 Superman
- 20 Russian twist
- 10 Fentes avant
- 10 Pompes
- 10 Burpees`},{name:`Triathlon - Cardio training`,date:`2026-03-24`,duration:15,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`- 30 Jumping Jack
- 40 Montées de genoux
- 10 Pompes
- 20 Squats sumo
- 20 Squats
- 20 Fentes avant
- 10 Pompes
- 20 Boxe punch
- 20 Triceps Pull Down
- 20 Curl Biceps (à 16kg)
- 10 Pompes
- 20 Battements de jambes ciseaux
- 20 Climbers
- 20 Russian twist`},{name:`Triathlon - Réveil matin`,date:`2026-03-20`,duration:10,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Récup 20 secondes entre les exos

Climbers 30 sec
Chaise 1 min
Planche 1 min
Squats 50 sec
Pompes 30 sec
Levées de bassin (bridge) 40 sec
Russian Twist 30 sec
Fentes avant (lunges) 40 sec
Planche costale (à droite puis à gauche) 1 min`},{name:`Triathlon - Renforcement`,date:`2026-03-17`,duration:30,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Circuit de 16 exercices à enchainer sans pause

- 60 Genoux-coude
- 50 Levées de bassin
- 40 Squats
- 30 secondes de gainage jambe gauche levée + 30 secondes jambes droite levée
- 60 Curl barre (à 16kg)
- 50 Russian twist
- 40 Dips
- 30 sauts sur boîte
- 60 Montées de genoux
- 50 Superman
- 40 Gainage latéral avec rotation à gauche + 40 à droite
- 30 Pompes
- 60 Jumping jack
- 50 Arm-leg raise
- 40 Touchés talon
- 30 Tractions`},{name:`Triathlon - Réveil matin`,date:`2026-03-11`,duration:10,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Récup 20 secondes entre les exos

Climbers 30 sec
Chaise 1 min
Planche 1 min
Squats 50 sec
Pompes 30 sec
Levées de bassin (bridge) 40 sec
Russian Twist 30 sec
Fentes avant (lunges) 40 sec
Planche costale (à droite puis à gauche) 1 min`},{name:`Triathlon - Réveil matin`,date:`2026-03-10`,duration:10,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Récup 20 secondes entre les exos

Climbers 30 sec
Chaise 1 min
Planche 1 min
Squats 50 sec
Pompes 30 sec
Levées de bassin (bridge) 40 sec
Russian Twist 30 sec
Fentes avant (lunges) 40 sec
Planche costale (à droite puis à gauche) 1 min`},{name:`Triathlon - Réveil matin`,date:`2026-03-03`,duration:10,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Récup 20 secondes entre chaque exercice

Climbers 30 sec
Chaise 1 min
planche 1 min
Squats 50 sec
Pompes 30 sec
Levées de bassin (bridge) 40 sec
Russian Twist 30 sec
Fentes avant (lunges) 40 sec
Planche costale (à droite puis à gauche) 1 min`},{name:`Triathlon - Réveil matin`,date:`2026-02-17`,duration:9,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: chaise
#3: planche
#4: Squats
#5: Pompes( sur les genoux si trop difficile)
#6: Levée de bassin
#7: Russian twist
#8: fentes avant
#9: 20sec planche coté droit+20sec planche coté gauche`},{name:`Triathlon - Réveil matin`,date:`2026-02-13`,duration:15,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: Jumpingjack
#2: fentes avant
#3: montées de genoux
#4: planche 20sec coté droit 20sec coté gauche
#5: Squats
#6: Russian twist
#7: Pompes( sur les genoux si trop difficile)
#8: chaise
#9: Superman
#10: planche
#11:Squats 20sec jambe droite 20sec jambe gauche
#12: levé de bassin
#13: climbers
#14: Sumo squats
#15: Burpees`},{name:`Triathlon - Circuit training - 2x10 min de 30/30`,date:`2026-02-04`,duration:20,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`30sec / 30sec récup
#1: Jumpingjack
#2: Squats
#3: Dips
#4: climbers
#5: Superman
#6: Russian twist
#7: fentes avant
#8: Planche
#9: Pompes( sur les genoux si trop difficile)
#10: Burpees!!!`},{name:`Triathlon - Circuit training`,date:`2026-01-29`,duration:50,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Echauffement 5min ( jumping jack, montées de genoux,...)

Faire 5 fois, 20sec entre les exos
#1 : 10 burpees
#2 : 50 climbers
#3 : 40 fentes avant
#4 : 1 min de planche
#5 : 1min de chaise suivi de 5 extensions (sauts vers le haut)
#6 : 20 pompes

Etirements 5 min`},{name:`Triathlon - Circuit training - 6x30/30`,date:`2026-01-23`,duration:6,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Répéter 6 fois
Hard
30 sec @ 8-10 RPE
#1 : Jumping jacks
#2: Mountain climbers
#3: Squat
#4: Pompes
#5: Fentes avant
#6: Planche
Easy
30 sec @ 5-7 RPE`},{name:`Triathlon - Réveil matin`,date:`2026-01-16`,duration:15,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: fentes avant
#3: montées de genoux
#4: planche 20sec coté droit 20sec coté gauche
#5: Squats
#6: Jumpingjack
#7: Pompes( sur les genoux si trop difficile)
#8: chaise
#9: Burpees
#10: planche
#11:Squats 20sec jambe droite 20sec jambe gauche
#12: Saut de grenouille`},{name:`Triathlon - Réveil matin`,date:`2026-01-09`,duration:15,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: Jumpingjack
#2: fentes avant
#3: montées de genoux
#4: planche 20sec coté droit 20sec coté gauche
#5: Squats
#6: Russian twist
#7: Pompes( sur les genoux si trop difficile)
#8: chaise
#9: Superman
#10: planche
#11:Squats 20sec jambe droite 20sec jambe gauche
#12: levé de bassin
#13: climbers
#14: Sumo squats
#15: Burpees`},{name:`Triathlon - Circuit training`,date:`2026-01-02`,duration:50,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Echauffement 5min ( jumping jack, montées de genoux,...)
Faire 5 fois, 1min de récup entre les block et 20sec entre les exos
#1: 10 burpees
#2: 50 climbers
#3: 40 fentes avant
#4: 1 min de planche
#5 : 1min de chaise suivi de 5 extensions(sauts vers le haut)
#6: 20 pompes

Streching 5 min`},{name:`Triathlon - Réveil matin`,date:`2025-12-27`,duration:9,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: chaise
#3: planche
#4: Squats
#5: Pompes( sur les genoux si trop difficile)
#6: Levée de bassin
#7: Russian twist
#8: fentes avant
#9: 20sec planche coté droit+20sec planche coté gauche`},{name:`Triathlon - Circuit training - 3x12x40/20sec`,date:`2025-12-17`,duration:48,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Faire 3 tours avec 40" d'effort et 20" de récup entre chaque exo :
#1: Jumping jacks
#2: Mountain climbers
#3: Squat
#4: Pompes
#5: Fentes avant
#6: Planche
#7:Chaises
#8: Russian twist
#9: Burpees
#10: levées de bassin (" bridge")
#11: Dips
#12: Planche à droite et à gauche`},{name:`Triathlon - Circuit 2x15min de 30/30`,date:`2025-12-11`,duration:30,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Faire 2 tours de 30sec d'effort / 30sec récup :
#1: Jumpingjack
#2: fentes avant
#3: montées de genoux
#4: planche 20sec coté droit 20sec coté gauche
#5: Squats
#6: Russian twist
#7: Pompes( sur les genoux si trop difficile)
#8: chaise
#9: Superman
#10: planche
#11:Squats 20sec jambe droite 20sec jambe gauche
#12: levé de bassin
#13: climbers
#14: Sumo squats
#15: Burpees`},{name:`Triathlon - Cardio training`,date:`2025-12-05`,duration:50,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`En faire le plus possible (en max 4min) avec 1min de récup
#1: Jumping jack (Total : 270)
#2: Montées de genoux (Total : 246)
#3: Squats (Total : 121)
#4: Pompes (Total : 72)
#5: fentes avant avec poids (Total avec 2 disques de 10kg : 78 (39/jambe))
#6 levées de bassin sur une jambe, puis l'autre (Total : 60 (30/jambe))
#7: Climber (Total : 144)
#8: Chaise (Total : 90"-R15"-75"-R15"-45")
#9: planche (Total : 60"-R30"-60"-R30"-45"-R15")
#10: Burpees (Total : 33)`},{name:`Triathlon - Réveil matin`,date:`2025-11-28`,duration:9,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: chaise
#3: planche
#4: Squats
#5: Pompes( sur les genoux si trop difficile)
#6: Levée de bassin
#7: Russian twist
#8: fentes avant
#9: 20sec planche coté droit+20sec planche coté gauche`},{name:`Triathlon - Circuit training - 2x12x40/20sec`,date:`2025-11-21`,duration:36,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`#1: Jumping jacks
#2: Mountain climbers
#3: Squat
#4: Pompes
#5: Fentes avant
#6: Planche
#7:Chaises
#8: Russian twist
#9: Burpees
#10: levées de bassin (" bridge")
#11: Dips
#12: Planche à droite et à gauche

Répéter 12 fois
Hard
40 sec @ 8-10 RPE
Easy
20 sec @ 5-7 RPE

Recovery
2 min @ 6-7 RPE

Répéter 12 fois
Hard
40 sec @ 8-10 RPE
Easy
20 sec @ 5-7 RPE

Cool Down - Streching
10 min @ 3-5 RPE`},{name:`Triathlon - Circuit training - 2x10x1min/30sec`,date:`2025-11-14`,duration:41,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Répéter 10 fois
Hard
1 min @ 8-10 RPE
#1: Jumping jacks #2: Mountain climbers #3: Squat #4: Pompes #5: Fentes avant #6: Planche #7:Chaises #8: Russian twist #9: Burpees
Easy
30 sec @ 5-7 RPE

Recovery
1 min @ 6-7 RPE

Répéter 10 fois
Hard
1 min @ 8-10 RPE
#1: Jumping jacks #2: Mountain climbers #3: Squat #4: Pompes #5: Fentes avant #6: Planche #7:Chaises #8: Russian twist #9: Burpees
Easy
30 sec @ 5-7 RPE

Streching
10 min @ 3-5 RPE`},{name:`Triathlon - Réveil matin`,date:`2025-11-07`,duration:12,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: fentes avant
#3: montées de genoux
#4: planche 20sec coté droit 20sec coté gauche
#5: Squats
#6: Jumpingjack
#7: Pompes( sur les genoux si trop difficile)
#8: chaise
#9: Burpees
#10: planche
#11:Squats 20sec jambe droite 20sec jambe gauche
#12: Saut de grenouille`},{name:`Triathlon - Réveil matin`,date:`2025-10-31`,duration:9,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: chaise
#3: planche
#4: Squats
#5: Pompes( sur les genoux si trop difficile)
#6: Levée de bassin
#7: Russian twist
#8: fentes avant
#9: 20sec planche coté droit+20sec planche coté gauche`},{name:`Triathlon - Circuit training - 2x6x40/20`,date:`2025-10-24`,duration:12,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`Répéter 6 fois
Hard
40 sec @ 8-10 RPE
#1 : Jumping jacks
#2: Mountain climbers
#3: Squat
#4: Pompes
#5: Fentes avant
#6: Planche
Easy
20 sec @ 5-7 RPE

Répéter 6 fois
Hard
40 sec @ 8-10 RPE
#1 : Jumping jacks
#2: Mountain climbers
#3: Squat
#4: Pompes
#5: Fentes avant
#6: Planche
Easy
20 sec @ 5-7 RPE`},{name:`Triathlon - Réveil matin`,date:`2025-10-17`,duration:10,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: Jumpingjack
#2: Squats
#3: Dips
#4: climbers
#5: Superman
#6: Russian twist
#7: fentes avant
#8: Planche
#9: Pompes( sur les genoux si trop difficile)
#10: Burpees!!!`},{name:`Triathlon - Réveil matin`,date:`2025-10-12`,duration:9,tags:[U.sport,U.cardio],programs:[`triathlonIronmanProgram`],description:`40sec / 20sec récup
#1: climbers
#2: chaise
#3: planche
#4: Squats
#5: Pompes( sur les genoux si trop difficile)
#6: Levée de bassin
#7: Russian twist
#8: fentes avant
#9: 20sec planche coté droit+20sec planche coté gauche`}],dd=[{name:`Les 8 assassins de l'équinoxe + Lithopédion + Le geyser des mariés`,date:`2025-11-01`,duration:600,tags:[U.creating,U.first],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le geyser des mariés + La loi du plus fort + Le roi bleu + Faux sangblants`,date:`2025-11-02`,duration:660,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le cor de l'Apocalypse`,date:`2025-11-03`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le jardin d'Eden + Le démon de la lune`,date:`2025-11-04`,duration:210,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`L'œil de l'escroc`,date:`2025-11-05`,duration:195,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le sang des âmes sœurs + La mémoire de l'eau`,date:`2025-11-06`,duration:210,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Qui sème le vent…`,date:`2025-11-07`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Spore des profondeurs + Les crocs du désert + Le berger du troupeau`,date:`2025-11-08`,duration:525,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le royaume enseveli + Le dieu de la forêt + Pixies en danger !`,date:`2025-11-09`,duration:390,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`La voie de l'ombre + Envaser`,date:`2025-11-10`,duration:300,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Tout feu, tout flamme + Prison cristalline + La ruine du serpent osseux + tous les jets de dés + ajout de monstres`,date:`2025-11-11`,duration:420,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Le solstice des héros`,date:`2025-11-12`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`La mort n'est qu'un autre chemin`,date:`2025-11-13`,duration:135,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Forteresse de glace + Gardiens du désert + Un anneau pour les gouverner tous + ajout de monstres`,date:`2025-11-14`,duration:345,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`David et Goliath + Maître des airs + Mort et désolation`,date:`2025-11-15`,duration:435,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Mort et désolation + Prédateur et prédateur alpha + La cité des brumes + Hôtel infini`,date:`2025-11-16`,duration:465,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Qui sifflent sur vos têtes + Roulotte de cirque`,date:`2025-11-17`,duration:225,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Trésor maudit`,date:`2025-11-18`,duration:180,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Trésor maudit + Rats du désert`,date:`2025-11-19`,duration:150,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`L'île verdoyante`,date:`2025-11-20`,duration:165,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Village lycanthrope`,date:`2025-11-21`,duration:180,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Spectacle de marionnettes + Gardien de la souffrance`,date:`2025-11-22`,duration:585,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Relique dans la cité souterraine + Stratégie martiale + Ère glaciaire`,date:`2025-11-23`,duration:645,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Tremblement de terre révélateur + Dans l'ombre du volcan`,date:`2025-11-24`,duration:225,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons`},{name:`Collision avec le Labyrinthe sans fin`,date:`2025-11-25`,duration:135,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Rédaction des brouillons.
 Fin des brouillons !`},{name:`Ajout de monstres au bestiaire`,date:`2025-11-26`,duration:240,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Listing de tous les monstres à créer`},{name:`Ajout de monstres au bestiaire`,date:`2025-11-27`,duration:90,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-11-28`,duration:270,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-11-29`,duration:435,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-11-30`,duration:495,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-12-01`,duration:180,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-12-02`,duration:315,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-12-03`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Remplissage des cartes de monstres`},{name:`Ajout de monstres au bestiaire`,date:`2025-12-04`,duration:105,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Listing et remplissage de tous les monstres terminé.
Au total, c'est 289 monstres qui ont été créés 🥵`},{name:`Ajout des PNJ`,date:`2025-12-05`,duration:90,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Listing de tous les PNJ à créer`},{name:`Ajout des PNJ`,date:`2025-12-06`,duration:375,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Listing de tous les PNJ à créer + génération d'images des PNJ`},{name:`Ajout des PNJ`,date:`2025-12-07`,duration:405,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des PNJ`},{name:`Ajout des PNJ`,date:`2025-12-08`,duration:180,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des PNJ`},{name:`Ajout des PNJ`,date:`2025-12-09`,duration:165,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des PNJ`},{name:`Ajout des PNJ`,date:`2025-12-10`,duration:150,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des PNJ`},{name:`Ajout des PNJ`,date:`2025-12-11`,duration:90,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des PNJ`},{name:`Ajout de lieux`,date:`2025-12-12`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-13`,duration:150,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-14`,duration:165,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-15`,duration:105,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-16`,duration:105,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-17`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-18`,duration:135,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-19`,duration:120,tags:[U.creating],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`},{name:`Ajout de lieux`,date:`2025-12-20`,duration:255,tags:[U.creating,U.last],programs:[`dndAdventuresProgram`],description:`Génération d'images des lieux`}],fd=[{name:`Triathlon - Zwift - Echauffement`,date:`2026-03-31`,duration:16,distance:7.83,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ The Fan Flats in Richmond

Echauffement pour le Circuit Training`},{name:`Triathlon - Zwift - Récup souple`,date:`2026-03-28`,duration:85,distance:41.23,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ No Sleep Till Brooklyn in New York

Warm up
20 min @ 126-152 W

Recovery
45 min @ 152-175 W

Cool Down
20 min @ 126-152 W`},{name:`Triathlon - Zwift - Easy souple`,date:`2026-03-28`,duration:80,distance:38.65,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Watts the Limit in New York

Warm up
20 min @ 107-128 W

Recovery
40 min @ 128-150 W

Cool Down
20 min @ 107-128 W`},{name:`Triathlon - Zwift - 2x15min allure course`,date:`2026-03-26`,duration:75,distance:40.38,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Sugar Cookie in Watopia

Petit problème pour mettre la séance sur Zwift.
Suite à une MAJ, la séance n'apparait pas, et après plusieurs tentatives, je laisse tomber la séance et je lance un circuit de la même durée.
Après la séance, je découvre que le problème ne vient pas de Zwift mais de Training Peaks, la séance est calibrée sur la fréquence cardiaque et pas sur la puissance en W comme les autres, et Zwift ne gère pas ce genre de séance.
Le changement se fait facilement sur TP, mais il faut le savoir pour ça 😅

Warm up
15 min @ 69-86 bpm

Répéter 2 fois
Hard
15 min @ 146-163 bpm
Easy
8 min @ 86-103 bpm

Cool Down
14 min @ 69-86 bpm`},{name:`Triathlon - Zwift - Travail de qualité de jambes`,date:`2026-03-22`,duration:118,distance:46.34,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Itza Party in Watopia

Warm up
19 min @ 101-126 W 65-90 rpm Souple progressif

Montée en puissance en 6 étapes
5 min @ 113-139 W
5 min @ 126-152 W
5 min @ 139-163 W
5 min @ 152-175 W
5 min @ 163-188 W
5 min @ 175-201 W

Recovery
10 min @ 126-152 W

Répéter 4 fois
2 min @ 75-96 W jambe droite
2 min @ 75-96 W jambe gauche

Recovery
10 min @ 126-152 W

Active
10 min @ 175-201 W 90-100 rpm

Cool Down
20 min @ 101-126 W`},{name:`Triathlon - Zwift - Easy - Souple : Tempo + 6x20sec sprint`,date:`2026-03-21`,duration:80,distance:32.26,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Itza Climb Finish in Watopia

Warm up
5 min @ 126-152 W

Montée en puissance en 4 étapes
4 min @ 139-163 W
3 min @ 152-175 W
2 min @ 163-188 W
1 min @ 175-201 W

Recovery
5 min @ 126-152 W

Répéter 6 fois
Tempo
5 min @ 163-188 W
Hard
20 sec @ 227-253 W
Easy
2:40 @ 126-152 W

Cool Down
12 min @ 101-126 W`},{name:`Triathlon - Zwift - Seuil et allure course`,date:`2026-03-19`,duration:96,distance:40.08,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Everything Bagel in New York

Warm up
15 min @ 101-126 W

Répéter 5 fois
Hard
30 sec @ 214-240 W
Easy
2:30 @ 126-152 W

Recovery
4 min @ 126-152 W

Répéter 5 fois
Hard
3 min @ 214-240 W
Easy
3 min @ 126-152 W

Recovery
4 min @ 126-152 W

Répéter 5 fois
Hard
1:30 @ 201-227 W
Easy
1:30 @ 126-152 W

Cool Down
12 min @ 101-126 W`},{name:`Triathlon - Cyclisme - 2x4x3min + 30min allure course %FTP`,date:`2026-03-15`,duration:102,distance:45.99,tags:[U.sport,U.cycling],programs:[`triathlonIronmanProgram`],description:`Warm up
14 min @ 101-126 W

Montée en puissance en 4 étapes
3 min @ 139-163 W
3 min @ 163-188 W
3 min @ 188-214 W
3 min @ 214-240 W

Recovery
6 min @ 126-152 W

Montée en puissance en 4 étapes
3 min @ 139-163 W
3 min @ 163-188 W
3 min @ 188-214 W
3 min @ 214-240 W

Recovery
6 min @ 126-152 W

Active
30 min @ 175-197 W

Cool Down
15 min @ 101-126 W`},{name:`Triathlon - Cyclisme - 6x4min 100% ftp 6 min récup %FTP`,date:`2026-03-14`,duration:76,distance:35.8,tags:[U.sport,U.cycling],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 107-128 W

Répéter 6 fois
Hard
4 min @ 203-218 W 90-90 rpm
Easy
6 min @ 118-139 W

Cool Down
5 min @ 107-128 W`},{name:`Triathlon - Cyclisme - Cadence Endurance 2x6x2min %FTP`,date:`2026-03-13`,duration:86,distance:38.54,tags:[U.sport,U.cycling],programs:[`triathlonIronmanProgram`],description:`1ère tentative de sortie training en extérieur.
Mais là, il y a plusieurs problèmes. Déjà, je n'ai pas de capteur de puissance, donc c'est tout au feeling 😅
Et surtout, tout est sur la montre, qui vibre au changement d'étape dans le programme, mais c'est tellement impossible de sentir les vibrations de la montre en faisant du vélo avec le bruit du vent et le souffle sur les bras, et avec les vibrations de la route en permanence !

Montée en puissance en 5 étapes
3 min @ 139-152 W
3 min @ 152-163 W
3 min @ 163-175 W
3 min @ 175-188 W
3 min @ 188-201 W

Recovery
5 min @ 107-128 W

Répéter 6 fois
Hard
2 min @ 214-240 W 95-105 rpm
Easy
1 min @ 126-152 W 75-85 rpm

Recovery
4 min @ 126-152 W

Active
10 min @ 188-214 W 95-105 rpm

Recovery
5 min @ 126-152 W

Répéter 6 fois
Hard
2 min @ 214-240 W 95-105 rpm
Easy
1 min @ 126-152 W 75-85 rpm

Cool Down
10 min @ 101-152 W`},{name:`Triathlon - Zwift - Pyramide puissance!!!`,date:`2026-03-08`,duration:71,distance:33.15,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Neon Shore Loop in Makuri Islands

Warm up
20 min @ 126-152 W

Montée en puissance en 4 étapes
5 min @ 139-163 W
4 min @ 163-188 W
3 min @ 188-214 W
2 min @ 214-240 W

Diminuer progressivement en 4 étapes
2 min @ 214-240 W
3 min @ 188-214 W
4 min @ 163-188 W
5 min @ 139-163 W

Cool Down
20 min @ 126-152 W`},{name:`Triathlon - Zwift - Souple 4x(3+2+5)`,date:`2026-03-06`,duration:66,distance:28.75,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Greater London 8 in London

Warm up
16 min @ 139-163 W

Répéter 4 fois
Hard
3 min @ 163-188 W
Harder
2 min @ 188-214 W
Easy
5 min @ 126-152 W

Cool Down
10 min @ 139-163 W`},{name:`Triathlon - Zwift - FTP Test [Standard]`,date:`2026-03-04`,duration:45,distance:22.38,tags:[U.sport,U.virtualCycling,U.test],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Ocean Lava Cliffside Loop in Watopia

Précédente FTP : 214
Nouvelle FTP : 209

Déçu d'avoir perdu quelques watts mais on va mettre ça sur la fatigue encore présente depuis l'UTCA 😅`},{name:`Zwift - Sortie libre`,date:`2026-02-23`,duration:14,distance:5.79,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Queen's Highway in Yorkshire

Mini sortie détente pour faire récupérer les jambes.
Une semaine de repos avec ce genre de sorties avant d'attaquer le nouveau programme pour l'Ironman !`},{name:`Triathlon - Cyclisme - Sortie libre`,date:`2026-02-20`,duration:108,distance:51.11,tags:[U.sport,U.cycling],programs:[`triathlonIronmanProgram`],description:`Sortie libre pour remplacer les 90km prévus initialement pour le 70.3 à la fin du programme.
1ère sortie avec le nouveau vélo de compétition, un Giant Propel Advanced 1 de 2015.
Un départ compliqué pour comprendre comment passer les vitesses, et quelques frayeurs avec les rafales de vent qui poussent très facilement le vélo, mais un vrai plaisir sur la route une fois lancé !`},{name:`Triathlon - Zwift - Souple 30min`,date:`2026-02-18`,duration:31,distance:14,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Petite Douleur in France

Montée en puissance en 4 étapes
3 min @ 139-163 W
3 min @ 163-188 W
3 min @ 188-214 W
3 min @ 214-240 W

Active
10 min @ 175-201 W

Cool Down
8 min @ 101-126 W`},{name:`Triathlon - Zwift - Tempo`,date:`2026-02-17`,duration:80,distance:36.66,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Temples and Towers in Makuri Islands

Montée en puissance en 4 étapes
5 min @ 139-152 W
5 min @ 152-163 W
5 min @ 163-175 W
5 min @ 175-188 W

Répéter 2 fois
Hard
18 min @ 188-201 W
Easy
9 min @ 126-152 W

Cool Down
6 min @ 101-126 W`},{name:`Triathlon - Zwift - Tempo 3x18min`,date:`2026-02-15`,duration:168,distance:70.07,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Shorelines and Summits in Watopia

Warm up
30 min @ 101-126 W

Montée en puissance en 4 étapes
2 min @ 126-152 W
2 min @ 139-163 W
2 min @ 152-175 W
2 min @ 163-188 W

Recovery
24 min @ 126-152 W

Répéter 3 fois
Hard
18 min @ 175-201 W
Easy
9 min @ 126-152 W

Cool Down
24 min @ 101-126 W`},{name:`Triathlon - Zwift - 2x6 min + 6x1min`,date:`2026-02-11`,duration:75,distance:10.16,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Ven-10 in France

Montée en puissance en 6 étapes
3 min @ 128 W
3 min @ 141 W
3 min @ 154 W
3 min @ 167 W
3 min @ 180 W
3 min @ 195 W

Recovery
3 min @ 118 W

Répéter 2 fois
Hard
6 min @ 197 W
Easy
3 min @ 118 W

Répéter 6 fois
Hard
1 min @ 246 W
Easy
3 min @ 118 W

Cool Down
5 min @ 118 W`},{name:`Triathlon - Zwift - Easy - Souple : Tempo + 6x20sec sprint`,date:`2026-02-08`,duration:132,distance:57.33,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Deca Dash in Watopia

Warm up
20 min @ 101-126 W

Warm up
5 min @ 126-152 W

Montée en puissance en 4 étapes
4 min @ 139-163 W
3 min @ 152-175 W
2 min @ 163-188 W
1 min @ 175-201 W

Recovery
15 min @ 126-152 W

Répéter 6 fois
5 min @ 163-188 W
Hard
20 sec @ 227-253 W
Easy
4:40 @ 126-152 W

Cool Down
22 min @ 101-126 W`},{name:`Triathlon - Zwift - 8x30sec`,date:`2026-02-06`,duration:84,distance:35.4,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Chasing the Sun in Makuri Islands

Warm up
20 min @ 101-126 W

Montée en puissance en 4 étapes
4 min @ 139-163 W
3 min @ 152-175 W
2 min @ 163-188 W
1 min @ 175-201 W

Recovery
6 min @ 126-152 W

Répéter 8 fois
Hard
30 sec @ 214-240 W
Easy
2:30 @ 126-152 W

Cool Down
20 min @ 101-152 W`},{name:`Triathlon - Zwift - Tempo 6x10min`,date:`2026-02-01`,duration:181,distance:88.97,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Navig8 in Watopia

Warm up
30 min @ 101-126 W

Répéter 6 fois
Hard
10 min @ 175-201 W
Easy
10 min @ 126-152 W

Cool Down
30 min @ 101-126 W`},{name:`Triathlon - Zwift - avec 6x5min`,date:`2026-01-28`,duration:105,distance:52.94,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ The Big Ring in Watopia

Warm up
25 min @ 126-152 W

Répéter 6 fois
5 min @ 188-214 W 80-90 rpm
Easy
5 min @ 126-152 W 85-95 rpm

Cool Down
20 min @ 101-126 W`},{name:`Triathlon - Zwift - Facile`,date:`2026-01-25`,duration:120,distance:32.45,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Lutscher in Innsbruck

Recovery
2 hr @ 126-152 W`},{name:`Triathlon - Zwift - Récup souple`,date:`2026-01-21`,duration:86,distance:33.48,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Yorkshire Double Loop in Yorkshire

Warm up
20 min @ 126-152 W

Recovery
45 min @ 152-175 W

Cool Down
20 min @ 126-152 W`},{name:`Triathlon - Zwift - Long Bike easy`,date:`2026-01-18`,duration:170,distance:70.29,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Bigger Loop in Watopia

Warm up
25 min @ 101-126 W

Active
2 hr @ 152-175 W

Cool Down
25 min @ 101-126 W`},{name:`Triathlon - Zwift - Tempo 2x16min`,date:`2026-01-14`,duration:82,distance:30.33,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Mountain Route in Watopia

Séance horrible, les 2x16min de la souffrance !

Warm up
20 min @ 101-126 W

Répéter 2 fois
Hard
16 min @ 214-240 W
Easy
8 min @ 126-152 W

Cool Down
12 min @ 101-126 W`},{name:`Triathlon - Zwift - 2x50min race pace`,date:`2026-01-11`,duration:160,distance:69.86,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Peak Performance in Watopia

Warm up
20 min @ 124-160 W

Active
50 min @ 172-210 W

Recovery
10 min @ 137-172 W

Active
50 min @ 179-214 W

Cool Down
30 min @ 124-160 W`},{name:`Triathlon - Zwift - Tempo 2x20min`,date:`2026-01-07`,duration:101,distance:37.6,tags:[U.sport,U.virtualCycling,U.stage],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Innsbruck KOM After Party in Innsbruck

Augmentation de la FTP de 210 à 214W suite à la séance. Probablement la pire séance depuis le début, 2x20min de souffrance totale, à finir en pleurs sous l'effort 🥵

Warm up
20 min @ 99-124 W

Répéter 2 fois
Hard
20 min @ 210-235 W
Easy
10 min @ 124-149 W

Cool Down
12 min @ 99-124 W`},{name:`Triathlon - Zwift - LONG !!!`,date:`2026-01-04`,duration:197,distance:72.81,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ The Pretzel in Watopia

Warm up
11 min @ 99-149 W

Montée en puissance en 4 étapes
3 min @ 137-160 W
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W

Recovery
10 min @ 124-149 W

Répéter 4 fois
Hard
1 min @ 210-235 W
Easy
4 min @ 124-149 W

Montée en puissance en 4 étapes
3 min @ 137-160 W
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W

Recovery
10 min @ 124-149 W

Répéter 4 fois
Hard
1 min @ 210-235 W
Easy
4 min @ 124-149 W

Recovery
1 hr @ 149-172 W

Diminuer progressivement en 4 étapes
5 min @ 149-172 W
5 min @ 137-160 W
5 min @ 124-149 W
5 min @ 111-137 W

Cool Down
10 min @ 99-124 W`},{name:`Triathlon - Zwift - Easy souple +5x30sec + 10min race pace`,date:`2026-01-01`,duration:132,distance:22.73,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ La Reine in France

Warm up
20 min @ 99-149 W

Répéter 5 fois
Hard
30 sec @ 210-235 W
Easy
3:30 @ 124-149 W

Recovery
40 min @ 124-160 W

Active
10 min @ 172-197 W

Cool Down
20 min @ 99-149 W`},{name:`Triathlon - Cyclisme - 40 km allure course`,date:`2025-12-28`,duration:92,distance:41.03,tags:[U.sport,U.cycling,U.stage],programs:[`triathlonIronmanProgram`],description:`Et les 40km de vélo qui suivent la natation, 2ème sortie en extérieur, par 3°C et avec un petit vent de face sur une partie du trajet !
Les sensations sont géniales, tellement plus agréables qu'en intérieur, même si à l'arrivée il faudra quelques minutes pour que les orteils dégèlent 😅`},{name:`Triathlon - Zwift - Tempo 20min`,date:`2025-12-23`,duration:74,distance:36.11,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Three Musketeers in France

Warm up
8 min @ 99-124 W

Montée en puissance en 4 étapes
2 min @ 124-149 W
2 min @ 137-160 W
2 min @ 149-172 W
2 min @ 160-185 W

Recovery
4 min @ 124-149 W

Répéter 1 fois
Hard
20 min @ 160-185 W
Easy
15 min @ 124-149 W

Cool Down
15 min @ 99-124 W`},{name:`Triathlon - Zwift - LONG !!! et souple`,date:`2025-12-21`,duration:166,distance:41.48,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Accelerate to Elevate in Watopia

Warm up
30 min @ 99-149 W

Montée en puissance en 4 étapes
4 min @ 137-160 W
3 min @ 149-172 W
2 min @ 160-185 W
1 min @ 172-197 W

Recovery
1:10:00 @ 149-172 W

Diminuer progressivement en 4 étapes
5 min @ 149-172 W
5 min @ 137-160 W
5 min @ 124-149 W
5 min @ 111-137 W

Cool Down
30 min @ 99-124 W`},{name:`Triathlon - Zwift - Tempo 4x8min`,date:`2025-12-16`,duration:91,distance:45.74,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Watts of the Wild in Watopia

Warm up
10 min @ 111-137 W

Montée en puissance en 4 étapes
2 min @ 124-160 W
2 min @ 149-172 W
2 min @ 160-185 W
2 min @ 172-197 W

Recovery
5 min @ 124-149 W

Répéter 4 fois
Hard
8 min @ 172-197 W
Easy
6 min @ 124-149 W

Cool Down
11 min @ 99-124 W`},{name:`Triathlon - Zwift - 2x1h race pace`,date:`2025-12-13`,duration:180,distance:77.5,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ The PRL Half in London

Warm up
20 min @ 124-160 W

Active
1 hr @ 172-210 W

Recovery
20 min @ 137-172 W

Active
1 hr @ 179-214 W

Cool Down
20 min @ 124-160 W`},{name:`Triathlon - Zwift - 20min tempo + 5x2min`,date:`2025-12-10`,duration:106,distance:34.95,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Mayan Mash in Watopia

Warm up
20 min @ 99-124 W

Montée en puissance en 6 étapes
3 min @ 113-139 W
3 min @ 126-151 W
3 min @ 139-164 W
3 min @ 151-176 W
3 min @ 164-187 W
3 min @ 179-202 W

Recovery
5 min @ 103-128 W

Active
20 min @ 172-197 W

Recovery
5 min @ 103-128 W

Répéter 5 fois
Hard
2 min @ 202-227 W
Easy
3 min @ 103-128 W

Cool Down
10 min @ 99-124 W`},{name:`Triathlon - Zwift - 10x(1+1)`,date:`2025-12-07`,duration:180,distance:82.34,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Tire-Bouchon in France

Warm up
20 min @ 99-124 W

Montée en puissance en 4 étapes
4 min @ 137-160 W
3 min @ 149-172 W
2 min @ 160-185 W
1 min @ 172-197 W

Recovery
25 min @ 124-149 W

Répéter 10 fois
Hard
15 sec @ 210-235 W
Easy
2:45 @ 124-149 W

Recovery
25 min @ 124-149 W

Répéter 10 fois
souple
3 min @ 124-149 W
Hard
1 min @ 172-197 W
Harder
1 min @ 197-223 W

Cool Down
20 min @ 99-149 W`},{name:`Triathlon - Zwift - 10-8-6-4-2-1min effort de course récup demi temps d'effort`,date:`2025-12-02`,duration:85,distance:40.75,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ London Calling in London

Warm up
20 min @ 99-124 W

Active
10 min @ 172-197 W

Recovery
5 min @ 124-149 W

Active
8 min @ 172-197 W

Recovery
4 min @ 124-149 W

Active
6 min @ 172-197 W

Recovery
3 min @ 124-149 W

Active
4 min @ 172-197 W

Recovery
2 min @ 124-149 W

Active
2 min @ 172-197 W

Recovery
1 min @ 124-149 W

Active
1 min @ 172-197 W

Cool Down
19 min @ 99-124 W`},{name:`Triathlon - Zwift - Easy souple`,date:`2025-11-30`,duration:100,distance:45.03,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Tropic Rush in Makuri Islands

Warm up
20 min @ 99-149 W

Recovery
1 hr @ 124-160 W

Cool Down
20 min @ 99-149 W`},{name:`Triathlon - Zwift - Tempo 20min`,date:`2025-11-26`,duration:70,distance:26.45,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Greatest London Loop in London

Warm up
10 min @ 99-124 W

Montée en puissance en 4 étapes
2 min @ 124-149 W
2 min @ 137-160 W
2 min @ 149-172 W
2 min @ 160-185 W

Recovery
5 min @ 124-149 W

Répéter 1 fois
Hard
20 min @ 160-185 W
Easy
12 min @ 124-149 W

Cool Down
15 min @ 99-124 W`},{name:`Triathlon - Zwift - long avec 2 Pyramides puissance!!!`,date:`2025-11-23`,duration:184,distance:81.62,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Zwift Games 2024 Epic in Watopia

Warm up
25 min @ 124-149 W

Montée en puissance en 4 étapes
3 min @ 137-160 W
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W

Recovery
8 min @ 124-149 W

Répéter 5 fois
Hard
1 min @ 197-223 W
Easy
3 min @ 124-149 W

Recovery
9 min @ 124-149 W

Montée en puissance en 4 étapes
5 min @ 137-160 W
4 min @ 160-185 W
3 min @ 185-210 W
2 min @ 210-235 W
Diminuer progressivement en 4 étapes
2 min @ 210-235 W
3 min @ 185-210 W
4 min @ 160-185 W
5 min @ 137-160 W

Recovery
25 min @ 124-149 W

Montée en puissance en 4 étapes
5 min @ 137-160 W
4 min @ 160-185 W
3 min @ 185-210 W
2 min @ 210-235 W
Diminuer progressivement en 4 étapes
2 min @ 210-235 W
3 min @ 185-210 W
4 min @ 160-185 W
5 min @ 137-160 W

Cool Down
25 min @ 124-149 W`},{name:`Triathlon - Zwift - 4x3x5min puissance`,date:`2025-11-19`,duration:106,distance:43.89,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Triple Loops in London

Warm up
15 min @ 137-160 W

Répéter 4 fois
Hard
30 sec @ 210-235 W
Easy
2:30 @ 124-149 W

Recovery
3 min @ 124-149 W

Répéter 4 fois
difficile travail puissance
5 min @ 172-185 W 85-90 rpm
Très difficile travail puissance
5 min @ 197-210 W 80-85 rpm
facile travail vitesse de jambes
5 min @ 124-149 W 95-105 rpm

Cool Down
15 min @ 99-124 W`},{name:`Triathlon - Zwift - Base Aéro`,date:`2025-11-16`,duration:155,distance:57.14,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ ZG25 Queen in Watopia

Warm up
20 min @ 124-149 W

Montée en puissance en 4 étapes
3 min @ 137-160 W
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W

Recovery
16 min @ 124-149 W

Répéter 4 fois
Hard
20 sec @ 210-235 W
Easy
2:40 @ 124-149 W

Recovery
3 min @ 124-149 W

Répéter 4 fois
Hard
20 sec @ 210-235 W
Easy
2:40 @ 124-149 W

Active
1 hr @ 149-185 W

Cool Down
20 min @ 99-124 W`},{name:`Triathlon - Zwift - 12x15sec`,date:`2025-11-12`,duration:97,distance:46.12,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Double Parked in New York

Warm up
20 min @ 99-124 W

Montée en puissance en 4 étapes
4 min @ 137-160 W
3 min @ 149-172 W
2 min @ 160-185 W
1 min @ 172-197 W

Recovery
10 min @ 124-149 W

Répéter 12 fois
Hard
15 sec @ 210-235 W
Easy
2:45 @ 124-149 W

Cool Down
20 min @ 99-149 W`},{name:`Triathlon - Zwift - Intervals`,date:`2025-11-09`,duration:175,distance:78.92,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Makuri Pretzel in Makuri Islands

Warm up
25 min @ 99-124 W 80-85 rpm

Répéter 6 fois
Hard
30 sec @ 172-197 W 85-95 rpm
Easy
30 sec @ 124-149 W

Recovery
5 min @ 124-149 W

Montée en puissance en 6 étapes
5 min @ 137-160 W
4 min @ 149-172 W
3 min @ 160-185 W
2 min @ 172-197 W
1 min @ 185-210 W
1 min @ 197-223 W

Recovery
5 min @ 124-149 W

Répéter 6 fois
Hard
1 min @ 197-223 W
Easy
5 min @ 124-149 W

Recovery
5 min @ 124-149 W

Répéter 6 fois
Hard
5 min @ 172-197 W 70-80 rpm
Harder
1 min @ 197-223 W 75-85 rpm
Easy
2 min @ 124-149 W 85-90 rpm

Cool Down
25 min @ 99-124 W`},{name:`Triathlon - Zwift - Puissance 8x30sec + 2x10min`,date:`2025-11-05`,duration:76,distance:39.61,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Spinfinity Ultra in New York

Montée en puissance en 5 étapes
3 min @ 137-149 W 70-80 rpm
3 min @ 149-160 W 75-85 rpm
3 min @ 160-172 W 80-90 rpm
3 min @ 172-185 W 85-95 rpm
3 min @ 185-197 W 90-100 rpm

Recovery
5 min @ 124-149 W 75-90 rpm

Répéter 8 fois
Hard Sprint
30 sec @ 210-235 W 90-105 rpm
Easy
1:30 @ 137-160 W

5 min @ 124-149 W

Active
10 min @ 172-197 W 80-90 rpm

Recovery
5 min @ 124-149 W

Active
10 min @ 172-197 W 85-90 rpm

Cool Down
10 min @ 99-160 W`},{name:`Triathlon - Zwift - Long "ride" souple`,date:`2025-11-01`,duration:120,distance:57.64,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Eastern Eight in Watopia
Sortie tranquille en EF

Warm up
20 min @ 99-124 W

Active
1:20:00 @ 149-172 W

Cool Down
20 min @ 99-124 W`},{name:`Triathlon - Zwift - 2x15min allure course en souffrance totale`,date:`2025-10-29`,duration:76,distance:33.66,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Country to Coastal in Makuri Islands

Plus de jambes après le mermaiding, et 15 minutes à 225W, le mental a lâché sur le 2ème !

Warm up
15 min @ 99-124 W

Répéter 2 fois
Hard
15 min @ 210-235 W
Easy
8 min @ 124-149 W

Cool Down
14 min @ 99-124 W`},{name:`Triathlon - Zwift - Travail de qualité de jambes`,date:`2025-10-26`,duration:159,distance:56.43,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Three Sisters in Watopia

Warm up
20 min @ 99-124 W
Souple progressif

Montée en puissance en 6 étapes
5 min @ 111-137 W
5 min @ 124-149 W
5 min @ 137-160 W
5 min @ 149-172 W
5 min @ 160-185 W
5 min @ 172-197 W

Recovery
10 min @ 124-149 W

Répéter 4 fois
Hard
2 min @ 185-210 W
Sprint!!!!
30 sec @ 223-248 W
Easy
3 min @ 124-149 W

Recovery
10 min @ 124-149 W

Répéter 4 fois
jambe droite
2 min @ 160-185 W
jambe gauche
2 min @ 160-185 W

Recovery
10 min @ 124-149 W

Active
20 min @ 172-197 W

Cool Down
20 min @ 99-124 W`},{name:`Triathlon - Zwift - Seuil et allure course`,date:`2025-10-22`,duration:104,distance:23.15,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Lutscher CCW in Innsbruck

Warm up
15 min @ 99-124 W

Répéter 5 fois
Hard
30 sec @ 210-235 W
Easy
2:30 @ 124-149 W

Recovery
4 min @ 124-149 W

Répéter 5 fois
Hard
3 min @ 210-235 W
Easy
3 min @ 124-149 W

Recovery
4 min @ 124-149 W

Répéter 5 fois
Hard
1:30 @ 197-223 W
Easy
1:30 @ 124-149 W

Cool Down
12 min @ 99-124 W`},{name:`Triathlon - Zwift - The London Pretzel in London`,date:`2025-10-19`,duration:137,distance:58.99,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ The London Pretzel in London

Warm up
20 min @ 99-124 W

Montée en puissance en 4 étapes
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W
3 min @ 185-210 W

Recovery
10 min @ 124-149 W

Montée en puissance en 4 étapes
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W
3 min @ 185-210 W

Recovery
10 min @ 124-149 W

Montée en puissance en 4 étapes
3 min @ 149-172 W
3 min @ 160-185 W
3 min @ 172-197 W
3 min @ 185-210 W

Recovery
10 min @ 124-149 W

Active
30 min @ 172-197 W

Cool Down
20 min @ 99-124 W `},{name:`Triathlon - Zwift - Makuri 40 in Makuri Islands`,date:`2025-10-15`,duration:84,distance:40.39,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Makuri 40 in Makuri Islands

Montée en puissance en 5 étapes
3 min @ 137-149 W
3 min @ 149-160 W
3 min @ 160-172 W
3 min @ 172-185 W
3 min @ 185-197 W

Répéter 6 fois
Hard
2 min @ 210-235 W
Easy
1 min @ 124-149 W

Recovery
5 min @ 124-149 W

Active
10 min @ 185-210 W

Recovery
5 min @ 124-149 W

Répéter 6 fois
Hard
2 min @ 210-235 W
Easy
1 min @ 124-149 W

Cool Down
10 min @ 99-149 W`},{name:`Triathlon - Cyclisme - Sortie longue`,date:`2025-10-10`,duration:104,distance:48.35,tags:[U.sport,U.cycling],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 124-149 W

Recovery
1:20:00 @ 149-172 W

Cool Down
20 min @ 124-149 W`},{name:`Triathlon - Zwift - Libby Hill After Party in Richmond`,date:`2025-10-08`,duration:70,distance:33.99,tags:[U.sport,U.virtualCycling],programs:[`zwiftPlatineProgram`,`triathlonIronmanProgram`],description:`🗺️ Libby Hill After Party in Richmond

Warm up
20 min @ 124-149 W

Recovery
30 min @ 149-172 W

Cool Down
20 min @ 124-149 W`},{name:`Zwift - FTP Test [Standard] 👑`,date:`2025-09-23`,duration:48,distance:19.62,tags:[U.virtualCycling,U.test],programs:[`zwiftPlatineProgram`],description:`🗺️ Downtown Eruption in Watopia

Test FTP pour voir l'évolution avant/après du programme.
Résultat : 210W`},{name:`Zwift - The Long Ride - 6x20min Tempo`,date:`2025-09-20`,duration:196,distance:85.88,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Big Foot Hills in Watopia

Dernière séance du programme Gran Fondo, avec une belle distance de 85.88km pour le final, mais des doutes sur la possibilité d'aller jusqu'à 200km.`},{name:`Zwift - Final Sharpen`,date:`2025-09-18`,duration:30,distance:13.75,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ London Flat in London`},{name:`Zwift - Gran Fondo - Taper Steady`,date:`2025-09-17`,duration:50,distance:23.61,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Volcano Climb in Watopia`},{name:`Zwift - Gran Fondo - Taper Time`,date:`2025-09-15`,duration:54,distance:25.5,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Wandering Flats in Makuri Islands`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-09-12`,duration:61,distance:22.9,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ BRAEk-fast Crits and Grits in Scotland`},{name:`Zwift - Gran Fondo - 5*3min Progressive MAP (Max Aerobic)`,date:`2025-09-10`,duration:54,distance:24.7,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Douce France in France`},{name:`Zwift - Gran Fondo - Steady & Surges`,date:`2025-09-09`,duration:57,distance:21,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ London Uprising in London`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-09-07`,duration:58,distance:24.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Greatest London Flat in London`},{name:`Zwift - Gran Fondo - The Long Ride - Intervals & Progressive SST`,date:`2025-09-05`,duration:197,distance:45,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Power to the Tower in Watopia`},{name:`Zwift - Gran Fondo - Terrain Ride`,date:`2025-09-04`,duration:52,distance:21.4,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ LaGuardia After Party in New York`},{name:`Zwift - Gran Fondo - Progressive Ramps`,date:`2025-09-02`,duration:52,distance:24.9,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Turf N Surk in Makuri Islands`},{name:`Zwift - Gran Fondo - The Long Ride - 2*30min Tempo with Surges`,date:`2025-08-30`,duration:154,distance:49.7,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Surrey Hills in London`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-08-28`,duration:60,distance:21.5,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Greater London Loop in London`},{name:`Zwift - Gran Fondo - Tempo Over-Under`,date:`2025-08-27`,duration:50,distance:24.7,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Coast to Coast in Watopia`},{name:`Zwift - Gran Fondo - 10*1min MAP (Max Aerobic)`,date:`2025-08-26`,duration:51,distance:14.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Kappa Quest Reverse in Makuri Islands`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-08-24`,duration:54,distance:16.2,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ The Highline in New York`},{name:`Zwift - Gran Fondo - The Long Ride - SST Long`,date:`2025-08-22`,duration:145,distance:67.7,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Spiral into the Volcano in Watopia`},{name:`Zwift - Gran Fondo - Tempo Accelerations`,date:`2025-08-20`,duration:53,distance:22.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Queen's Highway After Party in Yorkshire`},{name:`Zwift - Gran Fondo - Tempo to Sprints`,date:`2025-08-19`,duration:52,distance:20.8,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ London 8 in Londres`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-08-17`,duration:51,distance:17.8,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ 2015 Worlds Course in Richmond`},{name:`Zwift - Gran Fondo - Low-cadence Intervals`,date:`2025-08-16`,duration:52,distance:20.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Mighty Metropolitan in New York`},{name:`Zwift - Gran Fondo - The Long Ride - Extended Tempo`,date:`2025-08-15`,duration:135,distance:55.5,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Shisa Shakedown in Makuri Islands`},{name:`Zwift - Gran Fondo - Step-down Intervals`,date:`2025-08-14`,duration:50,distance:25.2,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Neokyo All-Nighter in Makuri Islands`},{name:`Séance libre - Zwift`,date:`2025-08-13`,duration:10,distance:4.14,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Mech Isle Loop in Makuri Islands`},{name:`Zwift - Gran Fondo - The Long Ride - Spiked Base Progression VO2`,date:`2025-08-12`,duration:115,distance:48,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Richmond Loop Around in Richmond`},{name:`Séance libre - Zwift`,date:`2025-08-11`,duration:11,distance:5.68,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Volcano Circuit in Watopia`},{name:`Zwift - Gran Fondo - The Long Ride - Spiked Base Progression VO2`,date:`2025-08-10`,duration:51,distance:22.5,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`Échec de la sortie (épuisement)😡`},{name:`Séance libre - Zwift`,date:`2025-08-09`,duration:12,distance:6.34,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Classique in Londres`},{name:`Séance libre - Zwift`,date:`2025-08-08`,duration:13,distance:6.26,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Duchy Estate in Yorkshire`},{name:`Séance libre - Zwift`,date:`2025-08-07`,duration:42,distance:17.2,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Mountain Mash in Watopia`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-08-06`,duration:51,distance:16.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Lady Liberty in New York`},{name:`Zwift - Gran Fondo - Make a Break for it`,date:`2025-08-05`,duration:50,distance:22.7,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Castle to Castle in Makuri Islands`},{name:`Zwift - Gran Fondo - Long Tempo Intervals`,date:`2025-08-04`,duration:50,distance:22.9,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Suki's Playground in Makuri Islands`},{name:`Zwift - Gran Fondo - The Long Ride - Spiked Base`,date:`2025-08-01`,duration:95,distance:39,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Gentil 8 in France`},{name:`Zwift - Gran Fondo - Endurance Free Ride`,date:`2025-07-31`,duration:47,distance:19.9,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Hell of the North in France`},{name:`Zwift - Gran Fondo - Introductory Intervals`,date:`2025-07-30`,duration:55,distance:7.5,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Ven-Top in France`},{name:`Zwift - Gran Fondo - Welcome Workout`,date:`2025-07-29`,duration:50,distance:20.1,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`🗺️ Lutece Express in Paris`},{name:`Zwift - Gran Fondo - Test FTP`,date:`2025-07-28`,duration:30,distance:11.2,tags:[U.virtualCycling,U.test],programs:[`zwiftPlatineProgram`],description:`🗺️ Ocean Lava Cliffside Loop in Watopia

Lancement du Gran Fondo, le programme Zwift qui permet en 8 semaines de se préparer à des sorties longues (100-200km)
Test FTP initial réalisé.
Résultat : 196W`},{name:`Séance libre - Vélo virtuel`,date:`2025-07-28`,duration:25,distance:9.3,tags:[U.virtualCycling],programs:[`zwiftPlatineProgram`],description:`Lancement de la séance découverte de Zwift : Your First Workout`},{name:`Séance libre - Vélo virtuel`,date:`2025-07-26`,duration:24,distance:13.2,tags:[U.virtualCycling,U.first],programs:[`zwiftPlatineProgram`],description:`Découverte de Zwift avec une sortie libre sur Watopia`}],pd=[{name:`Tous formats - Les dernières`,date:`2025-08-09`,duration:547,distance:57.22,tags:[U.geocaching,U.last],programs:[`geocachingRennesProgram`],description:`Dernier jour pour récupérer les caches restantes.
Au final, une bonne dizaine de caches m'auront échappées, pour certaines parce que je n'ai rien trouvé, pour d'autres parce qu'elles ont probablement disparues.
Sur la carte, ça fait un joli vide lorsque je cherche les caches dans le coin, il ne reste presque plus rien dans l'intra-rocade ! `},{name:`Tous formats - Nord de la ville`,date:`2025-07-13`,duration:376,distance:36.89,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Pas mal de caches à trouver sur la zone nord, à l'ouest du parc des Gayeulles.
Fin de la traque de nuit`},{name:`Tous formats - Sud de la ville`,date:`2025-07-12`,duration:582,distance:44.88,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Gros passage sur une zone mise de côté car moins garnie en caches.
Super sortie qui donne l'occasion de valider une mystery originale : Code de la route`},{name:`Tous formats - Mystery en masse`,date:`2025-07-11`,duration:198,distance:13.52,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Peu de caches découvertes, mais que des superbes mystery.
Dont la plus complexe de toutes : Minitel`},{name:`Tous formats`,date:`2025-07-10`,duration:63,distance:4.6,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Juste une mini-sortie pour jaunir 1 ou 2 caches à proximité`},{name:`Tous formats - Centre ville`,date:`2025-07-06`,duration:427,distance:37.65,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Petit nettoyage du coeur de la ville.
On jaunit quelques mystères, et également la seule virtual de la zone.`},{name:`Reprise + Multi + Mystery`,date:`2025-07-05`,duration:422,distance:38.87,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Reprise après quelques mois, les mystères sont résolues, mais il faut encore aller les chercher aux coordonnées résolues.
Maintenant que les tradis sont presque toutes découvertes, je balaie les caches restantes par zone géographique, tous formats confondus`},{name:`Traditionnelles`,date:`2025-03-27`,duration:121,distance:18.92,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-22`,duration:371,distance:37.49,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-21`,duration:187,distance:21.41,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-19`,duration:181,distance:22.87,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-18`,duration:169,distance:15.99,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-17`,duration:161,distance:25.57,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-13`,duration:165,distance:19.15,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-12`,duration:150,distance:16.75,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-11`,duration:135,distance:13.25,tags:[U.geocaching],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`},{name:`Traditionnelles`,date:`2025-03-10`,duration:150,distance:13.86,tags:[U.geocaching,U.first],programs:[`geocachingRennesProgram`],description:`Récupération des caches traditionnelles, situées au point précis de leur position sur la carte`}],md=[{name:`Lux`,date:`2025-01-01`,duration:287,tags:[U.first,U.reading],programs:[`readingNovelProgram`],description:`Lux
Auteur : Maxime CHATTAM
Temps de lecture : 4 h 47 min`},{name:`Lux + La morsure des roses`,date:`2025-01-02`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Lux
Auteur : Maxime CHATTAM
Temps de lecture : 4 h 10 min

La morsure des roses
Auteur : Christophe GUILLEMAIN
Temps de lecture : 37 min`},{name:`La morsure des roses + L'affaire Crystal Singer`,date:`2025-01-03`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`La morsure des roses
Auteur : Christophe GUILLEMAIN
Temps de lecture : 4 h 17 min

L'affaire Crystal Singer
Auteur : Ethan CHATAGNIER
Temps de lecture : 30 min`},{name:`L'affaire Crystal Singer`,date:`2025-01-04`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'affaire Crystal Singer
Auteur : Ethan CHATAGNIER
Temps de lecture : 4 h 47 min`},{name:`L'affaire Crystal Singer + Le grand Quand`,date:`2025-01-05`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'affaire Crystal Singer
Auteur : Ethan CHATAGNIER
Temps de lecture : 29 min

Le grand Quand
Auteur : Alan MOORE
Temps de lecture : 4h 18 min`},{name:`Le grand Quand + The great library of tomorrow - Le livre de la sagesse`,date:`2025-01-06`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le grand Quand
Auteur : Alan MOORE
Temps de lecture : 4h 11 min

The great library of tomorrow - Le livre de la sagesse
Auteur : Rosalia AGUILAR SOLACE
Temps de lecture : 36 min`},{name:`The great library of tomorrow - Le livre de la sagesse`,date:`2025-01-07`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`The great library of tomorrow - Le livre de la sagesse
Auteur : Rosalia AGUILAR SOLACE
Temps de lecture : 4 h 47 min`},{name:`The great library of tomorrow - Le livre de la sagesse + Prime Time`,date:`2025-01-08`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`The great library of tomorrow - Le livre de la sagesse
Auteur : Rosalia AGUILAR SOLACE
Temps de lecture : 2 h 46 min

Prime Time
Auteur : Maxime CHATTAM
Temps de lecture : 2 h 01 min`},{name:`Prime Time`,date:`2025-01-09`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Prime Time
Auteur : Maxime CHATTAM
Temps de lecture : 4 h 47 min`},{name:`Prime Time + L'ange de la nuit - La voie des ombres`,date:`2025-01-10`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Prime Time
Auteur : Maxime CHATTAM
Temps de lecture : 3 h 03 min

L'ange de la nuit - La voie des ombres
Auteur : Brent WEEKS
Temps de lecture : 1 h 44 min`},{name:`L'ange de la nuit - La voie des ombres`,date:`2025-01-11`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'ange de la nuit - La voie des ombres
Auteur : Brent WEEKS
Temps de lecture : 4 h 47 min`},{name:`L'ange de la nuit - La voie des ombres`,date:`2025-01-12`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'ange de la nuit - La voie des ombres
Auteur : Brent WEEKS
Temps de lecture : 4 h 47 min`},{name:`L'ange de la nuit - La voie des ombres + Une ombre dans la braise`,date:`2025-01-13`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'ange de la nuit - La voie des ombres
Auteur : Brent WEEKS
Temps de lecture : 1 h 41 min

Une ombre dans la braise
Auteur : Jennifer L. ARMENTROUT
Temps de lecture : 3 h 06 min`},{name:`Une ombre dans la braise`,date:`2025-01-14`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Une ombre dans la braise
Auteur : Jennifer L. ARMENTROUT
Temps de lecture : 4 h 47 min`},{name:`Une ombre dans la braise`,date:`2025-01-15`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Une ombre dans la braise
Auteur : Jennifer L. ARMENTROUT
Temps de lecture : 4 h 47 min`},{name:`Une ombre dans la braise + Le ministère du futur`,date:`2025-01-16`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Une ombre dans la braise
Auteur : Jennifer L. ARMENTROUT
Temps de lecture : 2 h 42 min

Le ministère du futur
Auteur : Kim STANLEY ROBINSON
Temps de lecture : 2 h 05 min`},{name:`Le ministère du futur`,date:`2025-01-17`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le ministère du futur
Auteur : Kim STANLEY ROBINSON
Temps de lecture : 2 h 05 min`},{name:`Le ministère du futur`,date:`2025-01-18`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le ministère du futur
Auteur : Kim STANLEY ROBINSON
Temps de lecture : 2 h 05 min`},{name:`Le ministère du futur + Le Sorceleur - 1 Le dernier voeu`,date:`2025-01-19`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le ministère du futur
Auteur : Kim STANLEY ROBINSON
Temps de lecture : 52 min

Le Sorceleur - 1 Le dernier voeu
Auteur : Andrzej SAPKOWSKI
Temps de lecture : 3 h 55 min`},{name:`Le Sorceleur - 1 Le dernier voeu + Le vieil homme et la guerre`,date:`2025-01-20`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le Sorceleur - 1 Le dernier voeu
Auteur : Andrzej SAPKOWSKI
Temps de lecture : 3 h 14 min

Le vieil homme et la guerre
Auteur : John SCALZI
Temps de lecture : 1 h 33 min`},{name:`Le vieil homme et la guerre + Dune`,date:`2025-01-21`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Le vieil homme et la guerre
Auteur : John SCALZI
Temps de lecture : 4 h 39 min

Dune
Auteur : Frank HERBERT
Temps de lecture : 08 min`},{name:`Dune`,date:`2025-01-22`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Dune
Auteur : Frank HERBERT
Temps de lecture : 4 h 47 min`},{name:`Dune`,date:`2025-01-23`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Dune
Auteur : Frank HERBERT
Temps de lecture : 4 h 47 min`},{name:`Dune`,date:`2025-01-24`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Dune
Auteur : Frank HERBERT
Temps de lecture : 4 h 47 min`},{name:`Dune + L'assassin royal 1`,date:`2025-01-25`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Dune
Auteur : Frank HERBERT
Temps de lecture : 1 h 43 min

L'assassin royal 1
Auteur : Robin HOBB
Temps de lecture : 3 h 04 min`},{name:`L'assassin royal 1`,date:`2025-01-26`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'assassin royal 1
Auteur : Robin HOBB
Temps de lecture : 4 h 47 min`},{name:`L'assassin royal 1`,date:`2025-01-27`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'assassin royal 1
Auteur : Robin HOBB
Temps de lecture : 4 h 47 min`},{name:`L'assassin royal 1 + Abzalon`,date:`2025-01-28`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'assassin royal 1
Auteur : Robin HOBB
Temps de lecture : 15 min

Abzalon
Auteur : Pierre BORDAGE
Temps de lecture : 4 h 32 min`},{name:`Abzalon`,date:`2025-01-29`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Abzalon
Auteur : Pierre BORDAGE
Temps de lecture : 4 h 47 min`},{name:`Abzalon + Point zéro`,date:`2025-01-30`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Abzalon
Auteur : Pierre BORDAGE
Temps de lecture : 1 h 17 min

Point zéro
Auteur : Antoine TRACQUI
Temps de lecture : 3 h 30 min`},{name:`Point zéro`,date:`2025-01-31`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Point zéro
Auteur : Antoine TRACQUI
Temps de lecture : 4 h 47 min`},{name:`Point zéro`,date:`2025-02-01`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Point zéro
Auteur : Antoine TRACQUI
Temps de lecture : 4 h 47 min`},{name:`Point zéro`,date:`2025-02-02`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Point zéro
Auteur : Antoine TRACQUI
Temps de lecture : 4 h 47 min`},{name:`Point zéro + Fondation, Le cycle de Fondation 1`,date:`2025-02-03`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Point zéro
Auteur : Antoine TRACQUI
Temps de lecture : 2 h 24 min

Fondation, Le cycle de Fondation 1
Auteur : Isaac ASIMOV
Temps de lecture : 2 h 23 min`},{name:`Fondation, Le cycle de Fondation 1 + Babel`,date:`2025-02-04`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Fondation, Le cycle de Fondation 1
Auteur : Isaac ASIMOV
Temps de lecture : 3 h 46 min

Babel
Auteur : Rebecca F. KUANG
Temps de lecture : 1 h 01 min`},{name:`Babel`,date:`2025-02-05`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Babel
Auteur : Rebecca F. KUANG
Temps de lecture : 4 h 47 min`},{name:`Babel`,date:`2025-02-06`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Babel
Auteur : Rebecca F. KUANG
Temps de lecture : 4 h 47 min`},{name:`Babel`,date:`2025-02-07`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Babel
Auteur : Rebecca F. KUANG
Temps de lecture : 4 h 47 min`},{name:`Babel + L'oeuvre du serpent`,date:`2025-02-08`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Babel
Auteur : Rebecca F. KUANG
Temps de lecture : 54 min

L'oeuvre du serpent
Auteur : Norman JANGOT
Temps de lecture : 3 h 53 min`},{name:`L'oeuvre du serpent`,date:`2025-02-09`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'oeuvre du serpent
Auteur : Norman JANGOT
Temps de lecture : 4 h 47 min`},{name:`L'oeuvre du serpent + Silo`,date:`2025-02-10`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`L'oeuvre du serpent
Auteur : Norman JANGOT
Temps de lecture : 1 h 05 min

Silo
Auteur : Hugh HOWEY
Temps de lecture : 3 h 42 min`},{name:`Silo`,date:`2025-02-11`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Silo
Auteur : Hugh HOWEY
Temps de lecture : 4 h 47 min`},{name:`Silo`,date:`2025-02-12`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Silo
Auteur : Hugh HOWEY
Temps de lecture : 4 h 47 min`},{name:`Silo + Les furtifs`,date:`2025-02-13`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Silo
Auteur : Hugh HOWEY
Temps de lecture : 39 min

Les furtifs
Auteur : Alain DAMASIO
Temps de lecture : 4 h 08 min`},{name:`Les furtifs`,date:`2025-02-14`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les furtifs
Auteur : Alain DAMASIO
Temps de lecture : 4 h 47 min`},{name:`Les furtifs`,date:`2025-02-15`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les furtifs
Auteur : Alain DAMASIO
Temps de lecture : 4 h 47 min`},{name:`Les furtifs`,date:`2025-02-16`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les furtifs
Auteur : Alain DAMASIO
Temps de lecture : 4 h 47 min`},{name:`Les furtifs + Les dix mille portes de January`,date:`2025-02-17`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les furtifs
Auteur : Alain DAMASIO
Temps de lecture : 4 h 13 min

Les dix mille portes de January
Auteur : Alix E. HARROW
Temps de lecture : 34 min`},{name:`Les dix mille portes de January`,date:`2025-02-18`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les dix mille portes de January
Auteur : Alix E. HARROW
Temps de lecture : 4 h 47 min`},{name:`Les dix mille portes de January`,date:`2025-02-19`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les dix mille portes de January
Auteur : Alix E. HARROW
Temps de lecture : 4 h 47 min`},{name:`Les dix mille portes de January + Alcatraz contre les infâmes bibliothécaires`,date:`2025-02-20`,duration:287,tags:[U.reading],programs:[`readingNovelProgram`],description:`Les dix mille portes de January
Auteur : Alix E. HARROW
Temps de lecture : 03 min

Alcatraz contre les infâmes bibliothécaires
Auteur : Brandon SANDERSON
Temps de lecture : 4 h 44 min`},{name:`Alcatraz contre les infâmes bibliothécaires + Les meurtres de Molly Southbourne`,date:`2025-02-21`,duration:291,tags:[U.reading,U.last],programs:[`readingNovelProgram`],description:`Alcatraz contre les infâmes bibliothécaires
Auteur : Brandon SANDERSON
Temps de lecture : 3 h 23 min

Les meurtres de Molly Southbourne
Auteur : Tade THOMPSON
Temps de lecture : 1 h 28 min`}],hd=[{name:`Triathlon - Course à pied - souple après le vélo`,date:`2026-03-28`,duration:15,distance:2.83,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 05:39-06:48 min/km

Recovery
10 min @ 04:54-05:39 min/km`},{name:`Triathlon - Course à pied - Easy Souple`,date:`2026-03-27`,duration:26,distance:4.63,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Recovery
25 min @ 05:09-05:54 min/km`},{name:`Triathlon - Course à pied - Circuit rituel`,date:`2026-03-25`,duration:67,distance:12.42,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Rituel de chaque semaine même parcours d'environ 12 à 15 à 60%-70%
Bien regarder son cardio, pour pouvoir le comparer par la suite.

Active
12.0 km @ 05:13-05:49 min/km`},{name:`Triathlon - Course à pied - Travail en côtes 8x2min`,date:`2026-03-22`,duration:83,distance:16.68,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
15 min @ 06:48-08:33 min/km

Répéter 8 fois
Hard
30 sec @ 03:35-04:01 min/km
Easy
30 sec @ 05:39-06:48 min/km

Recovery
5 min @ 05:39-06:48 min/km

Répéter 8 fois
Travail en côtes
2 min @ 03:35-04:01 min/km
redescendre cool
3 min @ 05:39-06:48 min/km

Cool Down
15 min @ 06:48-08:33 min/km
souple`},{name:`Triathlon - Course à pied - Circuit rituel`,date:`2026-03-20`,duration:66,distance:12.54,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Rituel de chaque semaine même parcours d'environ 12 à 15 à 60%-70%
Bien regarder son cardio, pour pouvoir le comparer par la suite.

Active
12.0 km @ 05:13-05:49 min/km`},{name:`Triathlon - Course à pied - Boost : Anaerobic Endurance 10x30/30 + 2x(45sec/1min30sec/3min)`,date:`2026-03-18`,duration:64,distance:13.02,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Montée en puissance en 4 étapes
3 min @ 06:11-06:48 min/km
3 min @ 05:39-06:11 min/km
3 min @ 05:17-05:39 min/km
3 min @ 04:54-05:17 min/km

Répéter 10 fois
Hard
30 sec @ 03:47-04:16 min/km
Easy
30 sec @ 05:39-06:48 min/km

Recovery
5 min @ 05:39-06:48 min/km

Diminuer progressivement en 6 étapes
45 sec @ 03:35-04:01 min/km
45 sec @ 04:54-05:39 min/km
1:30 @ 03:35-04:01 min/km
1:30 @ 04:54-05:39 min/km
3 min @ 03:35-04:01 min/km
3 min @ 04:54-05:39 min/km

Recovery
5 min @ 05:39-06:48 min/km

Diminuer progressivement en 6 étapes
45 sec @ 03:35-04:01 min/km
45 sec @ 04:54-05:39 min/km
1:30 @ 03:35-04:01 min/km
1:30 @ 04:54-05:39 min/km
3 min @ 03:35-04:01 min/km
3 min @ 04:54-05:39 min/km

Cool Down
10 min @ 06:48-08:33 min/km`},{name:`Triathlon - Course à pied - 6x20sec+ 2x(6-4-2-4min)`,date:`2026-03-16`,duration:78,distance:15.52,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 06:11-06:42 min/km

Montée en puissance en 4 étapes
3 min @ 05:44-06:11 min/km
3 min @ 05:21-05:44 min/km
3 min @ 05:01-05:21 min/km
3 min @ 04:34-04:54 min/km

Recovery
5 min @ 05:44-06:11 min/km

Répéter 6 fois
Hard
20 sec @ 03:30-04:01 min/km
Easy
40 sec @ 05:39-06:48 min/km

Recovery
5 min @ 05:44-06:11 min/km

Diminuer progressivement en 4 étapes
6 min @ 05:01-05:44 min/km
4 min @ 04:28-05:01 min/km
2 min @ 04:01-04:28 min/km
4 min @ 05:44-06:11 min/km

Diminuer progressivement en 4 étapes
6 min @ 05:01-05:44 min/km
4 min @ 04:28-05:01 min/km
2 min @ 04:01-04:28 min/km
4 min @ 05:44-06:11 min/km

Cool Down
10 min @ 06:11-06:42 min/km`},{name:`Triathlon - Course à pied - Circuit rituel 2`,date:`2026-03-12`,duration:65,distance:12.01,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Rituel de chaque semaine même parcours d'environ 12 à 15 à 60%-70%
Bien regarder son cardio, pour pouvoir le comparer par la suite.

Circuit effectué à l'Île Grande, le deuxième lieu où je court de temps en temps

Active
12.0 km @ 05:13-05:49 min/km`},{name:`Triathlon - Course à pied - 4x200 + 2x800 + 2x1600`,date:`2026-03-11`,duration:64,distance:13,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.00 km @ 05:39-06:48 min/km

Répéter 4 fois
Hard
0.20 km @ 03:24-03:35 min/km
Easy
0.20 km @ 05:39-06:48 min/km

Répéter 2 fois
Hard
0.80 km @ 03:35-03:47 min/km
Easy
0.40 km @ 05:39-06:48 min/km

Répéter 2 fois
Hard
1.60 km @ 03:47-04:16 min/km
Easy
0.80 km @ 05:39-06:48 min/km

Cool Down
2.00 km @ 05:39-06:48 min/km`},{name:`Triathlon - Course à pied - souple après le vélo`,date:`2026-03-08`,duration:21,distance:3.94,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 86-103 bpm

Recovery
15 min @ 103-120 bpm`},{name:`Triathlon - Course à pied - Test 2000m + 8x200 (en allure)`,date:`2026-03-07`,duration:59,distance:11.47,tags:[U.sport,U.running,U.test],programs:[`triathlonIronmanProgram`],description:`Résultat du test : 7'13"
Content du résultat mais ça aurait pu être mieux, les douleurs de l'UTCA sont passées mais encore un peu de fatigue qui a jouée sur la fin des 2km.

Warm up
3.00 km @ 05:36-06:54 min/km

Test de 2000m
2.00 km @ 03:27-04:09 min/km

Recovery
1.20 km @ 06:19-06:54 min/km

Répéter 8 fois
vitesse du test
0.20 km @ 03:56-04:09 min/km
souple
0.20 km @ 06:19-07:36 min/km

Cool Down
2.00 km @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - Circuit rituel`,date:`2026-03-02`,duration:68,distance:12.44,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Reprise de l'entraînement avec le nouveau programme spécial Ironman !
Toutes les semaines, le même parcours d'environ 12 à 15km à un rythme tranquille (Z2)
L'objectif est de pouvoir analyser l'évolution du cardio au fur et à mesure de l'entraînement.
Séance très difficile, les douleurs musculaires de l'UTCA sont arrivées très vites, j'ai dû marcher sur quelques dizaines de mètres tellement les muscles étaient douloureux, il aura fallu 6-7km pour que ça passe`},{name:`Triathlon - Course à pied - UTCA 🎉`,date:`2026-02-22`,duration:186,distance:30.78,tags:[U.sport,U.running,U.competition,U.stage],programs:[`triathlonIronmanProgram`],description:`Pour fêter la fin du programme 70.3, c'est parti pour les 32km de l'Ultra Tour des Côtes d'Armor !
Super sortie trail, sous la pluie, le vent, et avec des chemins gorgés d'eau après 2 mois de pluie ininterrompue !
Super résultat avec 3h06'45" et une moyenne de 5'50"/km.
Petite remarque : 494m de D+ annoncés, la montre indique 971m à l'arrivée ! Aucune idée de qui a raison, mais au ressenti dans les jambes c'était 971 🥵

Merci l'équipe pour les encouragements !

Classement général : 68/307
Par catégorie : 33 SE
Par sexe : 63 H`},{name:`Triathlon - Course à pied - avec 10 min effort de course+ 5x20sec`,date:`2026-02-18`,duration:27,distance:4.89,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 07:36-09:32 min/km

Active
10 min @ 05:06-05:54 min/km

Répéter 5 fois
Hard
20 sec @ 04:00-04:29 min/km
Easy
40 sec @ 06:19-07:36 min/km

Cool Down
5 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Tempo Run`,date:`2026-02-16`,duration:41,distance:8.42,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Montée en puissance en 4 étapes
4 min @ 05:54-06:54 min/km
3 min @ 05:06-05:54 min/km
2 min @ 04:29-05:06 min/km
1 min @ 04:00-04:29 min/km

Active
20 min @ 04:46-05:28 min/km
race effort

Recovery
10 min @ 06:19-07:36 min/km`},{name:`Triathlon - Course à pied - 3x8 min plus vite que l'allure course`,date:`2026-02-14`,duration:58,distance:11.87,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
15 min @ 07:36-09:32 min/km

Répéter 3 fois
Hard
8 min @ 04:00-04:29 min/km
Easy
4 min @ 06:19-07:36 min/km

Cool Down
6 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 4x(2min15+15sec)`,date:`2026-02-12`,duration:59,distance:11.82,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Répéter 4 fois
10 min @ 06:19-07:36 min/km
2:15 @ 04:46-05:28 min/km
Hard - vite
15 sec @ 04:00-04:46 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Tempo`,date:`2026-02-08`,duration:82,distance:16.32,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 07:36-09:32 min/km

Active
1 hr @ 04:46-05:28 min/km
Race effort - allure course

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 12x400`,date:`2026-02-05`,duration:64,distance:12.9,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.80 km @ 05:28-06:19 min/km

Répéter 12 fois
Hard
0.40 km @ 03:48-04:00 min/km
400 en moins de 1'15"
Easy
0.20 km @ 07:36-08:28 min/km

Cool Down
2.80 km @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - Souple`,date:`2026-01-31`,duration:89,distance:16.5,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Recovery
1:25:00 @ 05:28-07:36 min/km`},{name:`Triathlon - Course à pied - Boost : Anaerobic Endurance 10x30/30 + 3x(45sec/1min30sec/3min)`,date:`2026-01-27`,duration:85,distance:16.35,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Montée en puissance en 4 étapes
3 min @ 06:54-07:36 min/km
3 min @ 06:19-06:54 min/km
3 min @ 05:54-06:19 min/km
3 min @ 05:28-05:54 min/km

Recovery
5 min @ 06:19-07:36 min/km

Répéter 10 fois
Hard
30 sec @ 04:14-04:46 min/km
Easy
30 sec @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Diminuer progressivement en 6 étapes
45 sec @ 04:00-04:29 min/km
45 sec @ 05:28-06:19 min/km
1:30 @ 04:00-04:29 min/km
1:30 @ 05:28-06:19 min/km
3 min @ 04:00-04:29 min/km
3 min @ 05:28-06:19 min/km

Recovery
5 min @ 06:19-07:36 min/km

Diminuer progressivement en 6 étapes
45 sec @ 04:00-04:29 min/km
45 sec @ 05:28-06:19 min/km
1:30 @ 04:00-04:29 min/km
1:30 @ 05:28-06:19 min/km
3 min @ 04:00-04:29 min/km
3 min @ 05:28-06:19 min/km

Recovery
5 min @ 06:19-07:36 min/km

Diminuer progressivement en 6 étapes
45 sec @ 04:00-04:29 min/km
45 sec @ 05:28-06:19 min/km
1:30 @ 04:00-04:29 min/km
1:30 @ 05:28-06:19 min/km
3 min @ 04:00-04:29 min/km
3 min @ 05:28-06:19 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Easy Souple`,date:`2026-01-24`,duration:45,distance:7.7,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Recovery
40 min @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - 6x30/30 + 3x(4-3-2min)`,date:`2026-01-22`,duration:54,distance:11.16,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Montée en puissance en 4 étapes
4 min @ 06:54-07:36 min/km
3 min @ 06:19-06:54 min/km
2 min @ 05:54-06:19 min/km
1 min @ 05:28-05:54 min/km

Répéter 6 fois
Hard
30 sec @ 04:00-04:29 min/km
Easy
30 sec @ 06:19-07:36 min/km

Répéter 3 fois
Hard
4 min @ 04:46-05:06 min/km
Harder
3 min @ 04:29-04:46 min/km
Easy
2 min @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 2x6km`,date:`2026-01-17`,duration:72,distance:15.32,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Super séance matinale, un vrai plaisir tout le long de la séance 😊

Warm up
1.00 km @ 05:09 min/km

Active
6.00 km @ 04:43 min/km

Recovery
1.00 km @ 05:09 min/km

Active
6.00 km @ 04:40 min/km

Cool Down
1.00 km @ 05:09 min/km`},{name:`Triathlon - Course à pied - INTERVALS`,date:`2026-01-15`,duration:69,distance:14.07,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.40 km @ 05:06-06:19 min/km

Active
0.80 km @ 04:29-05:06 min/km

Recovery
0.40 km @ 07:21-09:09 min/km

Répéter 4 fois
Hard
1.60 km @ 04:14-04:46 min/km
Easy
0.40 km @ 06:19-07:36 min/km

Cool Down
2.40 km @ 05:54-07:36 min/km`},{name:`Triathlon - Course à pied - Allure 10km!!!`,date:`2026-01-10`,duration:71,distance:14.2,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 07:36-09:32 min/km

Répéter 6 fois
Hard
20 sec @ 03:48-04:29 min/km
Easy
1 min @ 06:19-07:36 min/km

Répéter 6 fois
Hard
1:30 @ 04:14-04:46 min/km
allure 10km
Easy
1:30 @ 06:19-07:36 min/km

Recovery
2 min @ 06:19-07:36 min/km

Répéter 6 fois
Hard
1 min @ 04:14-04:46 min/km
allure 10km
Easy
1 min @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 6x1km`,date:`2026-01-08`,duration:74,distance:15.07,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.00 km @ 06:19-07:36 min/km

Répéter 6 fois
Hard
1.00 km @ 03:54-04:16 min/km
Easy
1.00 km @ 05:16-05:59 min/km

Cool Down
1.00 km @ 06:19-07:36 min/km`},{name:`Triathlon - Course à pied - souple après le vélo`,date:`2026-01-04`,duration:15,distance:2.33,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 06:19-07:36 min/km

Recovery
10 min @ 05:28-06:19 min/km`},{name:`Triathlon - Course à pied - 15x45sec, R:3min15sec`,date:`2026-01-03`,duration:80,distance:13.96,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 06:19-09:32 min/km

Répéter 15 fois
Hard
45 sec @ 04:14-04:46 min/km
Easy
3:15 @ 06:19-07:36 min/km

Cool Down
10 min @ 06:19-09:32 min/km`},{name:`Triathlon - Course à pied - 2x4km`,date:`2025-12-31`,duration:74,distance:14.17,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Montée en puissance en 3 étapes
1.00 km @ 05:36 min/km
1.00 km @ 04:43 min/km
1.00 km @ 04:02 min/km

Recovery
1.00 km @ 07:36 min/km

Active
4.00 km @ 04:46 min/km

Recovery
1.00 km @ 07:36 min/km

Active
4.00 km @ 04:34 min/km

Cool Down
1.00 km @ 06:19 min/km`},{name:`Triathlon - Course à pied - 10km allure course`,date:`2025-12-28`,duration:48,distance:10.02,tags:[U.sport,U.running,U.stage],programs:[`triathlonIronmanProgram`],description:`Et on finit le triathlon avec les 10km de la Tro Enez Veur.

Résultats :
1er triathlon Olympique (M)

Natation : 29'51" (1500m)
T1 : 23'27"
Cyclisme : 1h33'48" (41.03km)
T2 : 20'43"
Course à pied : 48'45"
Total : 3h36'34"

Les T1 et T2 sont catastrophiques, mais tout s'explique.
Le T1, le temps de sortir de la piscine, de se changer, de sortir les vélos restés dans le jumpy, de lancer le GPS, et de s'attendre les uns les autres pour démarrer en même temps.
Le T2, le temps de se changer et de s'attendre les uns les autres pour démarrer en même temps.
L'objectif était de découvrir les sensations d'un triathlon sans pression, c'est réussi, super expérience !`},{name:`Triathlon - Course à pied - 12x400`,date:`2025-12-26`,duration:68,distance:14.01,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
3.60 km @ 05:28-06:19 min/km

Répéter 12 fois
Hard
0.40 km @ 03:48-04:00 min/km
Easy
0.20 km @ 07:36-08:28 min/km

Cool Down
3.20 km @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - Easy Souple`,date:`2025-12-21`,duration:41,distance:8.01,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Recovery
40 min @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - 12x1min, R:3min`,date:`2025-12-15`,duration:83,distance:15.43,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
15 min @ 06:19-09:32 min/km

Répéter 12 fois
Hard
1:30 @ 04:29-05:06 min/km
Easy
3 min @ 06:19-07:36 min/km

Cool Down
15 min @ 06:19-09:32 min/km`},{name:`Triathlon - Course à pied - Long easy-souple 70%max`,date:`2025-12-12`,duration:99,distance:18.29,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 06:19-09:32 min/km

Recovery
1:05:00 @ 05:28-07:36 min/km

Cool Down
10 min @ 06:19-09:32 min/km`},{name:`Triathlon - Course à pied - 2x10x150/150m (30/30sec)`,date:`2025-12-08`,duration:73,distance:14.28,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
3.00 km @ 07:36-09:32 min/km

Répéter 10 fois
Hard
0.15 km @ 04:00-04:29 min/km
Easy
0.15 km @ 06:19-07:36 min/km

Recovery
2.00 km @ 06:19-07:36 min/km

Répéter 10 fois
Hard
0.15 km @ 04:00-04:29 min/km
Easy
0.15 km @ 06:19-07:36 min/km

Cool Down
3.00 km @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Easy Souple + 8x1min`,date:`2025-12-06`,duration:81,distance:14.46,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 07:36-09:32 min/km

Répéter 8 fois
Hard
1 min @ 04:00-04:29 min/km
Easy
3 min @ 06:19-07:36 min/km

Recovery
28 min @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - 6x600`,date:`2025-12-04`,duration:58,distance:11.4,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
3.00 km @ 05:54-06:54 min/km Souple

Répéter 6 fois
Hard
0.60 km @ 04:00-04:14 min/km
à environ 90% de votre VMA
Easy
0.30 km @ 06:19-07:36 min/km

Cool Down
3.00 km @ 05:54-06:54 min/km`},{name:`Triathlon - Course à pied - Fartlek 10x30sec 100%`,date:`2025-11-29`,duration:51,distance:9.41,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 06:19-07:36 min/km

Répéter 10 fois
Hard
30 sec @ 03:48-04:14 min/km
Easy
2:30 @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Tempo`,date:`2025-11-27`,duration:50,distance:9.22,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 07:36-09:32 min/km

Active
30 min @ 04:46-05:28 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 5x100 sprint + 10x300m en cote`,date:`2025-11-22`,duration:67,distance:12.21,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.20 km @ 05:28-06:19 min/km
souple focus sur être le plus économe possible

Répéter 5 fois
Hard
0.10 km @ 04:00-04:29 min/km
Easy
0.10 km @ 06:19-07:36 min/km

Recovery
1.00 km @ 06:19-07:36 min/km

Répéter 10 fois
Juste en dessous de sa VMA
0.30 km @ 03:54-04:00 min/km
en cote
Easy
0.30 km @ 06:54-07:36 min/km
en descente

Cool Down
2.00 km @ 06:19-07:36 min/km
souple focus sur être le plus économe possible`},{name:`Triathlon - Course à pied - Long avec 4x2000m allure semi`,date:`2025-11-20`,duration:90,distance:17,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Première vraie séance hivernale : 4°C, pluie, vent, de nuit.
Tant que la motivation est là, ça passe facile 🙂

Warm up
3.00 km @ 07:36-09:32 min/km

Répéter 4 fois
Hard
2.00 km @ 04:46-05:28 min/km
Easy
1.00 km @ 06:19-07:36 min/km

Cool Down
2.00 km @ 06:19-07:36 min/km`},{name:`Triathlon - Course à pied - Remplacement des étirements`,date:`2025-11-19`,duration:15,distance:2.6,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Contraintes professionnelles, donc pas d'étirements, mais un petit footing à 1h du matin après avoir loupé le bus 🥵`},{name:`Triathlon - Course à pied - Allure 10km!!!`,date:`2025-11-15`,duration:80,distance:15.09,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 07:36-09:32 min/km

Répéter 6 fois
Hard
20 sec @ 03:48-04:29 min/km
Easy
1 min @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Répéter 6 fois
Hard
1:30 @ 04:14-04:46 min/km
allure 10km
Easy
1:30 @ 06:19-07:36 min/km

Recovery
7 min @ 06:19-07:36 min/km

Répéter 6 fois
Hard
1 min @ 04:14-04:46 min/km
allure 10km
Easy
1 min @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - Long easy-souple 70%max`,date:`2025-11-13`,duration:85,distance:15.16,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
20 min @ 06:19-09:32 min/km

Recovery
45 min @ 05:28-07:36 min/km

Cool Down
20 min @ 06:19-09:32 min/km`},{name:`Triathlon - Course à pied - Long easy-souple 70%max`,date:`2025-11-08`,duration:85,distance:15.18,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Petite confusion avec l'entrainement de la semaine prochaine (ils ont le même nom) du coup ça donne 10 minutes de rab. On va dire que c'était une reco du parcours 😉

Warm up
25 min @ 06:19-09:32 min/km

Recovery
25 min @ 05:28-07:36 min/km

Cool Down
25 min @ 06:19-09:32 min/km`},{name:`Triathlon - Course à pied - 3, 2, 1KM!!!`,date:`2025-11-06`,duration:70,distance:13.45,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
2.00 km @ 05:54-06:54 min/km

Active
3.00 km @ 04:46-05:06 min/km

Recovery
1.00 km @ 06:19-07:36 min/km

Active
2.00 km @ 04:29-04:46 min/km

Recovery
1.00 km @ 06:19-07:36 min/km

Active
1.00 km @ 04:14-04:29 min/km

Recovery
1.00 km @ 06:19-07:36 min/km

Cool Down
2.00 km @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 1ère sortie après le vélo`,date:`2025-11-01`,duration:16,distance:3.03,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Découverte des sensations de partir courir après avoir pédalé.
Tellement désagréable la sensation de devoir mettre le t-shirt pour courir en étant trempé de sueur après le vélo 🥵

Warm up
5 min @ 06:19-07:36 min/km

Recovery
10 min @ 05:28-06:19 min/km`},{name:`Triathlon - Course à pied - Souple et long`,date:`2025-10-30`,duration:70,distance:13.1,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Petite sortie tranquille en EF

Recovery
1:10:00 @ 05:06-06:19 min/km
Bien garder le cardio bas`},{name:`Triathlon - Course à pied - Travail en côtes 8x2min`,date:`2025-10-25`,duration:83,distance:14.18,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
15 min @ 07:36-09:32 min/km

Répéter 8 fois
Hard
30 sec @ 04:00-04:29 min/km
Easy
30 sec @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Répéter 8 fois
Travail en côtes
2 min @ 04:00-04:29 min/km
redescendre cool
3 min @ 06:19-07:36 min/km

Cool Down
15 min @ 07:36-09:32 min/km
souple`},{name:`Triathlon - Course à pied - 4x20sec+8x2min+8x1min`,date:`2025-10-23`,duration:98,distance:17.45,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
15 min @ 07:36-09:32 min/km

Répéter 4 fois
Hard
20 sec @ 04:00-04:29 min/km
Easy
40 sec @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Répéter 8 fois
Hard
2 min @ 04:29-05:06 min/km
Easy
2 min @ 06:19-07:36 min/km

Recovery
1 min @ 06:19-07:36 min/km

Répéter 8 fois
Hard
1 min @ 04:00-04:29 min/km
Easy
2 min @ 06:19-07:36 min/km

Cool Down
15 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 6*(20"/40") + 2*(6'-4'-2'-4')`,date:`2025-10-18`,duration:70,distance:12.56,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
5 min @ 06:54-09:32 min/km

Montée en puissance en 4 étapes
3 min @ 06:19-06:54 min/km
3 min @ 05:54-06:19 min/km
3 min @ 05:28-05:54 min/km
3 min @ 05:06-05:28 min/km

Répéter 6 fois
Hard
20 sec @ 03:54-04:29 min/km
Easy
40 sec @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Diminuer progressivement en 4 étapes
6 min @ 05:28-06:19 min/km
4 min @ 04:46-05:28 min/km
2 min @ 04:14-04:46 min/km
4 min @ 06:19-07:36 min/km

Diminuer progressivement en 4 étapes
6 min @ 05:28-06:19 min/km
4 min @ 04:46-05:28 min/km
2 min @ 04:14-04:46 min/km
4 min @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 6*(20"/40") + 10*(1'30"/1')`,date:`2025-10-16`,duration:68,distance:12.75,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
10 min @ 06:19-07:36 min/km

Montée en puissance en 4 étapes
3 min @ 05:54-06:54 min/km
3 min @ 05:28-06:19 min/km
3 min @ 05:06-05:54 min/km
3 min @ 04:46-05:28 min/km

Répéter 6 fois
Hard
20 sec @ 03:48-04:00 min/km
Easy
40 sec @ 06:19-07:36 min/km

Recovery
5 min @ 06:19-07:36 min/km

Répéter 10 fois
Hard
1:30 @ 04:00-04:46 min/km
Easy
1 min @ 06:19-07:36 min/km

Cool Down
10 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - 3*(6'/3')`,date:`2025-10-12`,duration:61,distance:10.04,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Warm up
16 min @ 07:36-09:32 min/km

Répéter 3 fois
6 min @ 04:29-05:06 min/km
3 min @ 06:19-07:36 min/km

Cool Down
17 min @ 07:36-09:32 min/km`},{name:`Triathlon - Course à pied - EF45'`,date:`2025-10-09`,duration:45,distance:7.14,tags:[U.sport,U.running],programs:[`triathlonIronmanProgram`],description:`Active
45 min @ 05:54-07:36 min/km`},{name:`Tro Enez Veur 2025 🎉`,date:`2025-10-05`,duration:45,distance:9.75,tags:[U.sport,U.running,U.competition],programs:[`runningMarathonProgram`],description:`La mythique Tro Enez Veur est de retour après 6 ans d'absence.
Temps officiel : 45'01" au 10km
Classement : 111/474`},{name:`Séance libre - Course à pied`,date:`2025-06-28`,duration:42,distance:8.23,tags:[U.sport,U.running,U.last],programs:[`runningMarathonProgram`],description:`Sortie libre pour récupérer du marathon`},{name:`Séance libre - Course à pied`,date:`2025-06-26`,duration:55,distance:11.24,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`Sortie libre pour récupérer du marathon`},{name:`Séance libre - Course à pied`,date:`2025-06-25`,duration:53,distance:10.64,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`Sortie libre pour récupérer du marathon`},{name:`Séance libre - Course à pied`,date:`2025-06-24`,duration:54,distance:10.63,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`Sortie libre pour récupérer du marathon`},{name:`Marathon de la Liberté🎉`,date:`2025-06-15`,duration:215,distance:42.47,tags:[U.sport,U.running,U.competition],programs:[`runningMarathonProgram`],description:`Marathon de la Liberté à Caen
Temps final : 3h34'44"
Classement : 645/4150
Classement catégorie SEM : 240/1057`},{name:`RunMotion - EF45'`,date:`2025-06-10`,duration:45,distance:8.09,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF45'`},{name:`RunMotion - EF50'`,date:`2025-06-08`,duration:51,distance:9.34,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - AS42 2*(4km/3')`,date:`2025-06-06`,duration:69,distance:14.08,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
AS42 2*4km R3'
RC5'`},{name:`RunMotion - EF50'`,date:`2025-06-05`,duration:51,distance:10.85,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - VMA 6*(40"/40")`,date:`2025-06-02`,duration:60,distance:12.21,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
VMA 6*40" R40"
RC5'`},{name:`RunMotion - EF1h10'`,date:`2025-05-26`,duration:69,distance:14.2,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF1h10'`},{name:`RunMotion - EA60'`,date:`2025-05-25`,duration:61,distance:12.61,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA60'`},{name:`RunMotion - EF2h40'`,date:`2025-05-23`,duration:162,distance:28.39,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF2h40'`},{name:`RunMotion - Côtes 8*(20"/1')`,date:`2025-05-22`,duration:46,distance:9.74,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
Côtes 8*20" R1'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-05-20`,duration:60,distance:12.23,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - Seuil 3*(8'/4')`,date:`2025-05-19`,duration:62,distance:12.95,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
Seuil 3*8' R4'
RC5'`},{name:`RunMotion - EF50'`,date:`2025-05-18`,duration:50,distance:9.77,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - EF2h20'`,date:`2025-05-16`,duration:140,distance:28.41,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF2h20'`},{name:`RunMotion - EF50' + 4*(15"/45")`,date:`2025-05-15`,duration:54,distance:10.9,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'
4*15" R45"`},{name:`RunMotion - EF60'`,date:`2025-05-13`,duration:60,distance:12.18,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - EF60'`,date:`2025-05-12`,duration:60,distance:12.01,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - EA60'`,date:`2025-05-11`,duration:80,distance:12,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA60'`},{name:`RunMotion - AS42 15km`,date:`2025-05-09`,duration:141,distance:26.28,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF40'
AS42 15km
RC5'`},{name:`RunMotion - EF1h10'`,date:`2025-05-08`,duration:71,distance:13.86,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF1h10'`},{name:`RunMotion - EF50'`,date:`2025-05-06`,duration:50,distance:10.06,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - Seuil 5*(3'/90")`,date:`2025-05-05`,duration:50,distance:9.73,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
Seuil 5*3' R90"
RC5'`},{name:`RunMotion - EF55'`,date:`2025-05-03`,duration:65,distance:10.68,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF55'`},{name:`RunMotion - EF2h30'`,date:`2025-05-01`,duration:150,distance:29.38,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF2h30'`},{name:`RunMotion - Côtes 6*(20"/1')`,date:`2025-04-30`,duration:46,distance:8.93,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
Côtes 6*20" R1'
RC5'`},{name:`RunMotion - EF50'`,date:`2025-04-29`,duration:53,distance:10.2,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - Seuil 4*(6'/3')`,date:`2025-04-28`,duration:65,distance:13.5,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
Seuil 4*6' R3'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-04-27`,duration:63,distance:11.55,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - AS42 4*(15'/5')`,date:`2025-04-25`,duration:127,distance:24.64,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF40'
AS42 4*15' R5'
RC5'`},{name:`RunMotion - Côtes 6*(20"/1')`,date:`2025-04-24`,duration:63,distance:12.12,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'
Côtes 6*20" R1'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-04-22`,duration:60,distance:11.58,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - VMA 8*(50"/50")`,date:`2025-04-21`,duration:50,distance:9.49,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
VMA 8*50" R50"
RC5'`},{name:`RunMotion - EF60'`,date:`2025-04-20`,duration:61,distance:11.62,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - EF2h'`,date:`2025-04-18`,duration:120,distance:25,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF2h`},{name:`RunMotion - EF60'`,date:`2025-04-17`,duration:60,distance:12.07,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - EF50'`,date:`2025-04-15`,duration:51,distance:9.35,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - Seuil 4*(5'/2')`,date:`2025-04-14`,duration:54,distance:11,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
Seuil 4*5' R2'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-04-13`,duration:61,distance:11.24,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - EA2h'`,date:`2025-04-11`,duration:120,distance:22,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA2h`},{name:`Run'INSA`,date:`2025-04-10`,duration:25,distance:5.85,tags:[U.sport,U.running,U.competition],programs:[`runningMarathonProgram`],description:`La Run'INSA, c'est :
- Une boucle de 1.1km
- Des équipes de 2 à 6 personnes
- Une course en relais de 20h à 22h

Au total, j'ai réalisé 4 boucles :
- Boucle 1 : 4'10" (3'46"/km)
- Boucle 2 : 4'09" (3'47"/km)
- Boucle 3 : 4'10" (3'46"/km)
- Boucle 4 : 4'08" (3'41"/km)`},{name:`RunMotion - EF60'`,date:`2025-04-08`,duration:60,distance:11.87,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - Seuil 2*(8'/4')`,date:`2025-04-07`,duration:58,distance:11.42,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF25'
Seuil 2*8' R4'
RC5'`},{name:`RunMotion - EA60'`,date:`2025-04-06`,duration:60,distance:11.41,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA60'`},{name:`RunMotion - AS42 2*(6km/6')`,date:`2025-04-04`,duration:108,distance:20.58,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
AS42 2*6km R6'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-04-01`,duration:61,distance:12.25,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - Seuil 3*(5'/3')`,date:`2025-03-31`,duration:52,distance:10.29,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF20'
Seuil 3*5' R3'
RC5'`},{name:`RunMotion - EA60'`,date:`2025-03-30`,duration:60,distance:11.75,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA60'`},{name:`RunMotion - EF1h30'`,date:`2025-03-28`,duration:90,distance:16.02,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF1h30'`},{name:`RunMotion - Côtes 5*(20"/1')`,date:`2025-03-27`,duration:53,distance:10.25,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF40'
Côtes 5*20" R1'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-03-25`,duration:60,distance:12.05,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - AS10 4*(3'/2')`,date:`2025-03-24`,duration:53,distance:10.2,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF25'
AS10 4*3' R2'
RC5'`},{name:`RunMotion - EF50'
`,date:`2025-03-23`,duration:51,distance:8.91,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - EF1h10'`,date:`2025-03-21`,duration:73,distance:14.02,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF1h10'`},{name:`RunMotion - EF50'`,date:`2025-03-20`,duration:52,distance:9.4,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF50'`},{name:`RunMotion - EA50'`,date:`2025-03-18`,duration:51,distance:9.9,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EA50'`},{name:`RunMotion - VMA 10*(30"/30")`,date:`2025-03-17`,duration:43,distance:8.23,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF25'
VMA 10*30" R30"
RC5'`},{name:`Séance libre - Natation 60'`,date:`2025-03-16`,duration:61,distance:1.6,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`200m nage libre
200m crawl
100m brasse
150m crawl
50m brasse
200m crawl
50m brasse
50m dos
400m crawl
200m nage libre`},{name:`RunMotion - EF1h20'`,date:`2025-03-14`,duration:80,distance:14.58,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF1h20'`},{name:`RunMotion - Côtes 8*(20"/1')`,date:`2025-03-13`,duration:47,distance:8.66,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF30'
Côtes 8*20" R1'
RC5'`},{name:`RunMotion - EF60'`,date:`2025-03-11`,duration:61,distance:10.86,tags:[U.sport,U.running],programs:[`runningMarathonProgram`],description:`EF60'`},{name:`RunMotion - 3*(6'/2')`,date:`2025-03-10`,duration:52,distance:9.89,tags:[U.sport,U.running,U.first],programs:[`runningMarathonProgram`],description:`EF20'
3*6' R2'
RC5'`},{name:`Marathon - Test Cooper`,date:`2025-02-22`,duration:50,distance:9.92,tags:[U.sport,U.running,U.test],programs:[`runningMarathonProgram`],description:`Echauffement prépa Cooper + test Cooper (12' distance max)
Objectif : vérifier le niveau de course à pied avant d'attaquer la préparation marathon.
Résultat : 2750m`}],gd=[{name:`Triathlon - Natation - Des 600 !!!`,date:`2026-03-30`,duration:61,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
300 m @ 03:32-04:26 sec/100m
- 6 x 50 25 crawl 25 toucher épaules

Active
600 m @ 02:13-02:32 sec/100m
- 6 x 100 , #1,3,5 facile, #2,4,6 vite récup 15 sec

Active
600 m @ 02:13-02:32 sec/100m
3x200 Progressif récup 15sec

Active
600 m @ 02:13-02:32 sec/100m
2x300 pull+plaquettes récup 15sec

Active
600 m @ 02:13-02:32 sec/100m
1x600 pullbuoy

Active
300 m @ 02:13-02:32 sec/100m
6x50 souple recup 15 sec changer de nage par 50m`},{name:`Triathlon - Natation - Test de 400`,date:`2026-03-29`,duration:55,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2500m

Warm up
400 m @ 03:32-04:26 sec/100m
8x50 (25crawl-25doigts surface)

Active
400 m @ 02:13-02:32 sec/100m
8x50 progressif de 1 à 4, récup 15 sec

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
4x100 progressif de 1 à 4, récup 20sec

Recovery
100 m @ 02:56-03:32 sec/100m

Test de 400m
400 m @ 02:13-02:32 sec/100m
prise de temps

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
8 x50 25très vite 25 souple, récup 10sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - Aérobie Amplitude`,date:`2026-03-26`,duration:50,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m
2x200 (2nages par 50) R10sec

Warm up
300 m @ 03:32-04:26 sec/100m
6x50 (25crawl amplitude 25 toucher épaules) R10sec

Répéter 3 fois (#1 crawl #2 pullbuoy #3 palmes)
Hard
400 m @ 01:52-02:05 sec/100m
Easy
100 m @ 02:56-03:32 sec/100m

Cool Down
300 m @ 03:32-04:26 sec/100m
3x100 souple : 50 crawl-50 brasse`},{name:`Triathlon - Natation - Souple/ technique`,date:`2026-03-24`,duration:49,distance:2.4,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2400m

Warm up
400 m @ 03:32-04:26 sec/100m

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 educ poings fermés 25 crawl)

Recovery
100 m @ 02:56-03:32 sec/100m

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 educ toucher épaule 25 crawl)

Recovery
100 m @ 02:56-03:32 sec/100m

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 éduc 1bras 25 crawl)

Recovery
100 m @ 02:56-03:32 sec/100m

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 éduc pouce le long du corps 25 crawl)

Recovery
100 m @ 02:56-03:32 sec/100m

Active
600 m @ 02:13-02:32 sec/100m
- 6x100m palmes Glisse 15 sec récup

Cool Down
200 m @ 03:32-04:26 sec/100m
- 200 souple`},{name:`Triathlon - Natation - 800+4x200+8x100`,date:`2026-03-21`,duration:62,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

Warm up
400 m @ 03:32-04:26 sec/100m
4x100 (50crawl-25rattrapé-25 battements de jambes)

Active
800 m @ 02:13-02:32 sec/100m
800 palmes nonstop : Focus glisse

Active
800 m @ 02:13-02:32 sec/100m
4x200 plaquettes récup 20sec

Active
800 m @ 02:13-02:32 sec/100m
8x100 pullbuoy récup 15sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - Meilleure moyenne !!!`,date:`2026-03-19`,duration:59,distance:2.6,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2600m

Warm up
600 m @ 03:32-04:26 sec/100m
6x(50crawl+25 doigts surface+25 battements de jambes)

Active
600 m @ 02:13-02:32 sec/100m
6x100 meilleure moyenne possible récup 30 sec

Recovery
100 m @ 02:56-03:32 sec/100m

Active
600 m @ 02:13-02:32 sec/100m
6x100 avec plaquettes meilleure moyenne possible récup 30 sec

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
8x50 meilleure moyenne récup 15 sec

Cool Down
200 m @ 03:32-04:26 sec/100m
sauf crawl`},{name:`Triathlon - Natation - Vitesse !!!! 16x50 et 10x25`,date:`2026-03-16`,duration:62,distance:2.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2700m

Warm up
800 m @ 03:32-04:26 sec/100m
8x100m multinages (changer de nage au milieu du bassin, pas au mur) 15sec récup

Active
800 m @ 01:58-02:22 sec/100m
- 16x50 vitesse constante récup 20sec

Recovery
400 m @ 02:56-03:32 sec/100m
4x100 (50 éduc poings fermés, 50 crawl )

Répéter 10 fois
Hard
25.0 m @ 01:52-02:05 sec/100m A fond!!!
Easy
25.0 m @ 02:56-03:32 sec/100m
souple en crawl, récup 20sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 1ère sortie eau libre`,date:`2026-03-14`,duration:27,distance:1,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 1000m

Aujourd'hui, pas les 2700m demandés (je met la séance initialement prévue si ça vous intéresse), mais la première baignade de l'année pour tester la nage en combinaison et en eau de mer.
Résultat : INCROYABLE !
Avec la combinaison, la sensation de glisse est géniale, la flottaison est optimale (même pas besoin de battre des jambes pour qu'elles flottent, c'est comme avoir un pullbuoy en permanence), et l'eau salée ça augmente encore plus la flottaison.
Le seul problème, c'est les 11°C de l'eau, en mettant la tête dans l'eau c'est très douloureux avec un mal de crâne le temps de s'habituer, mais après 1000m j'vais froid malgré tout, et la la combinaison c'est pour la flottaison et pas pour réchauffer, et ça se sent.

Warm up
400 m @ 03:32-04:26 sec/100m
souple educ aux au choix sur 50%

Active
300 m @ 02:13-02:32 sec/100m
2x150 crawl progressif sur les 150

Recovery
100 m @ 02:56-03:32 sec/100m
battements de jambes

Active
300 m @ 02:13-02:32 sec/100m
2x150 crawl+ plaquettes progressif

Recovery
100 m @ 02:56-03:32 sec/100m
battements de jambes

Active
300 m @ 02:13-02:32 sec/100m
2x150 crawl+ pull progressif

Recovery
100 m @ 02:56-03:32 sec/100m
battements de jambes

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 01:59-02:12 sec/100m
Test de 400

Recovery
100 m @ 02:56-03:32 sec/100m

Active
300 m @ 02:13-02:32 sec/100m
6x50 25 craw+25 battements de jambes récup 10 sec

Cool Down
200 m @ 03:32-04:26 sec/100m
en pull`},{name:`Triathlon - Natation - Souple et amplitude`,date:`2026-03-13`,duration:59,distance:2.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Le 600m en augmentant l'intervalle entre les respirations c'est tellement dur ! Avec l'habitude j'ai mon rythme de 3 mouvements et 12 respiration, le changement est difficile, surtout en fin de séance avec la fatigue.
J'ai fais quelques longueurs en montant jusqu'à 9 mouvements pour 1 respiration, mais ça s'est vite transformé en 3-5-7-3-5-7-... 😅

Warm up
800 m @ 03:32-04:26 sec/100m
- 400 crawl amplitude compter ses mouvements par longueur
- 8x50 (25 rattrapé 25 crawl)

Active
800 m @ 02:22-02:44 sec/100m
Objectif amplitude essayer de garder le plus petit nombre de coup de bras.

Active
400 m @ 02:22-02:44 sec/100m
Amplitude mais sans toucher le mur aux virages et "sighting" au milieu du bassin

Active
600 m @ 02:22-02:44 sec/100m
3x200 amplitude respiration 3, 5, 7, 9, ... mvts

Cool Down
100 m @ 03:32-04:26 sec/100m
Sauf crawl`},{name:`Triathlon - Natation - 2x800!!!`,date:`2026-03-10`,duration:58,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2800m
100m de perdus sur les battements de jambes non comptabilisés
Petit malaise (ou crise d'angoisse 😖) pendant le 1er 800m, aucune idée de pourquoi, donc j'ai fait le 2nd avec le pullbuoy pour me calmer

Warm up
300 m @ 02:59-03:28 sec/100m
300 crawl souple rechercher la glisse

Warm up
300 m @ 02:59-03:28 sec/100m
3 x100 : récup 15 sec (25 crawl, 25 battements de jambes, 25 crawl, 25 éduc doigts surface)

Active
1600 m @ 02:13-02:32 sec/100m
- 2x800 allure presque comme sur le 1500m, récup 30sec

Active
400 m @ 02:13-02:32 sec/100m
- 8x50 départ pieds au sol (pas de poussée contre le mur), meilleure moyenne possible, récup 15sec

Cool Down
200 m @ 02:59-03:28 sec/100m`},{name:`Triathlon - Natation - Souple/glisse`,date:`2026-03-07`,duration:55,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 02:59-03:28 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
- 8x50 (25 educ poings fermés 25 crawl)

Active
800 m @ 02:13-02:32 sec/100m
- 8x100m plaquettes récup 15 sec

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 educ pouce le long du corps 25 crawl)

Active
500 m @ 02:13-02:32 sec/100m
- 5x100m palmes Glisse récup 15 sec

Cool Down
200 m @ 02:59-03:28 sec/100m
- 200 souple`},{name:`Triathlon - Natation - 3x((3x100) + 200)`,date:`2026-03-06`,duration:45,distance:2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2000m
Petit 500m oublié (le premier active 25 vite 75), à rattraper sur une prochaine séance

Warm up
300 m @ 03:32-04:26 sec/100m
- 3x(50 crawl souple, 25 Educ poings fermés, 25 crawl vite) Récup 25sec

Warm up
300 m @ 03:32-04:26 sec/100m
- 3x100 progressif sur le 100 ( début facile finir le 100 à fond)

Warm up
200 m @ 03:32-04:26 sec/100m
- 2x100 : 50 educ (2 coups de bras à droite, respi, 2 coups de bras à gauche, respi) - 50 crawl

Active
500 m @ 02:13-02:32 sec/100m
- 3x100 25 vite 75 souple, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Active
500 m @ 02:13-02:32 sec/100m
- 3x100 1 facile, 2 moyen, 3 vite, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Active
500 m @ 02:13-02:32 sec/100m
- 3x100 meilleure moyenne possible, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Cool Down
300 m @ 03:32-04:26 sec/100m
- 300 : 2 à 3 nages changer tous les 25m`},{name:`Triathlon - Natation - Reprise "Aerobic Intervals"`,date:`2026-03-02`,duration:40,distance:2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2000m

Répéter 3 fois
Warm up
100 m @ 02:24-02:42 sec/100m
Warm up
100 m @ 02:24-02:42 sec/100m
100 avec 25m éducatif poings fermés, 25m crawl, 25m crawl retour aérien pouce le long du corps de la cuisse à l aisselle, 25m crawl

Répéter 3 fois
200 crawl récup 20sec
150 m @ 02:06-02:20 sec/100m
50.0 m @ 02:32-02:54 sec/100m

400 m @ 02:27-02:47 sec/100m rechercher la glisse

6x50 m progressif
300 m @ 01:49-02:27 sec/100m

Cool Down
100 m @ 02:36-02:59 sec/100m`},{name:`Triathlon - Natation - Nage libre`,date:`2026-02-21`,duration:70,distance:3.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Séance libre pour remplacer le 1900m prévu initialement pour le 70.3 de fin de programme.
Je rattrape les 900m manqués de lundi et je fais même un peu de rab, séance plaisir à 2 sur la ligne pendant toute la durée de la séance`},{name:`Triathlon - Natation - Fartek + Sprint`,date:`2026-02-19`,duration:37,distance:1.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m
200 easy 200 rattrapé

Active
800 m @ 02:13-02:32 sec/100m
4x200 race pace - 30sec rest

Répéter 4 fois
Hard
50.0 m @ 01:52-02:05 sec/100m
Easy
50.0 m @ 02:56-03:32 sec/100m

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - Pour être bien prêt!!!`,date:`2026-02-16`,duration:21,distance:1.1,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Séance prévue : 2000m
Avec les vacances, les horaires ont variés, en arrivant j'apprends que la piscine ferme dans 20 minutes 😭 donc on transforme la séance prévue en simple nage libre

Warm up
400 m @ 02:44-03:12 sec/100m
Focus technique

Active
800 m @ 02:13-02:32 sec/100m
8x100 recup 20sec progressif de 1 à 4

Répéter 10 fois
Hard
25.0 m @ 02:05-02:22 sec/100m
Easy
25.0 m @ 03:12-03:32 sec/100m

Cool Down
300 m @ 02:44-03:12 sec/100m`},{name:`Triathlon - Natation - Vitesse & Puissance`,date:`2026-02-14`,duration:43,distance:2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m
8x50 2nages

Active
400 m @ 02:05-02:32 sec/100m
8x50 progressif sur les 50, R:15 sec

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:05-02:32 sec/100m
400 vite avec palmes et plaquettes

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:05-02:32 sec/100m
4x100 plaquettes très vite récup 20sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 3x((2x100) + 200)`,date:`2026-02-09`,duration:47,distance:2.1,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
200 m @ 03:32-04:26 sec/100m
- 2x(50 crawl souple, 25 Educ poings fermés, 25 crawl vite) Récup 25sec

Warm up
300 m @ 03:32-04:26 sec/100m
- 3x100 progressif sur le 100 ( début facile finir le 100 à fond)

Warm up
200 m @ 03:32-04:26 sec/100m
- 2x100 : 50 educ (2 coups de bras à droite, respi, 2 coups de bras à gauche, respi) - 50 crawl

Active
400 m @ 02:13-02:32 sec/100m
- 2x100 25 vite 75 souple, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Active
400 m @ 02:13-02:32 sec/100m
- 2x100 1 facile, 2 vite, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Active
400 m @ 02:13-02:32 sec/100m
- 2x100 meilleure moyenne possible, Récup 20sec
- 200 Pull+plaquettes, amplitude Récup 20sec

Cool Down
200 m @ 03:32-04:26 sec/100m
- 200 : 2 à 3 nages changer tous les 25m`},{name:`Triathlon - Natation - Effort de course sur 4x300`,date:`2026-02-07`,duration:58,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 02:32-02:56 sec/100m
4x100 (75 crawl +25 poings fermés)

Répéter 4 fois
Hard
300 m @ 02:05-02:22 sec/100m
#1 : plaquettes
#2 : pullbuoy
#3 : pull + plaquettes
#4 : sans matériel
Easy
100 m @ 02:44-03:12 sec/100m

Répéter 6 fois
Hard
50.0 m @ 01:58-02:13 sec/100m
Crawl Vite
Easy
50.0 m @ 02:56-03:32 sec/100m

Cool Down
200 m @ 02:56-03:32 sec/100m`},{name:`Triathlon - Natation - 10x100 pull+ plaquettes`,date:`2026-02-02`,duration:58,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m
400m avec palmes amplitude

Warm up
400 m @ 03:32-04:26 sec/100m
4x100 (50 battements de jambes 50 crawl) récup 15 sec

Active
400 m @ 02:13-02:32 sec/100m
8x50 progressif sur les 50 récup 10 sec

Active
1000 m @ 02:13-02:32 sec/100m
10x100 pull + plaquettes allure course récup 15/20 sec

Active
400 m @ 02:13-02:32 sec/100m
4x100 progressif de 1 à 5 récup 15 sec ( le premier souple, le dernier à fond)

Cool Down
200 m @ 03:32-04:26 sec/100m
souple amplitude`},{name:`Triathlon - Natation - 800+4x200+8x100`,date:`2026-01-31`,duration:67,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

Warm up
400 m @ 03:32-04:26 sec/100m
4x100 (50crawl-25 rattrapé-25 battements de jambes)

Active
800 m @ 02:13-02:32 sec/100m
800 palmes nonstop : Focus glisse

Active
800 m @ 02:13-02:32 sec/100m
4x200 plaquettes récup 20sec

Active
800 m @ 02:13-02:32 sec/100m
8x100 pullbuoy récup 15sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 2x400+8x100+2x400`,date:`2026-01-30`,duration:77,distance:3.4,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
300 m @ 03:32-04:26 sec/100m
3x100 2nages par longueur changer au milieu du bassin

Warm up
200 m @ 03:32-04:26 sec/100m
crawl progressif mais en amplitude

Active
800 m @ 02:32-03:32 sec/100m
2x400 souple amplitude recup 20sec
#1 en pull
#2 en plaquettes

Recovery
100 m @ 02:56-03:32 sec/100m
2x(25 Educ 25 doigts surface)

Active
800 m @ 02:13-02:32 sec/100m
8x100 vite crawl récup 20sec

Recovery
100 m @ 02:56-03:32 sec/100m
2x(25 Educ 25 rattrapé)

Active
800 m @ 02:05-03:32 sec/100m
2x400 recup 20sec
#1 pullbuoy amplitude
#2 en palmes

Recovery
100 m @ 02:56-03:32 sec/100m
2x(25 Educ 25 poings fermés)

Cool Down
200 m @ 03:32-04:26 sec/100m
souple dos à 2 bras et crawl`},{name:`Triathlon - Natation - Souple/glisse`,date:`2026-01-24`,duration:55,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
- 8x50 (25 educ poings fermés 25 crawl)

Active
800 m @ 02:13-02:32 sec/100m
- 8x100m plaquettes récup 15 sec

Active
200 m @ 02:13-02:32 sec/100m
- 4x50 (25 educ pouce le long du corps 25 crawl)

Active
500 m @ 02:13-02:32 sec/100m
- 5x100m palmes Glisse récup 15 sec

Cool Down
200 m @ 03:32-04:26 sec/100m
- 200 souple`},{name:`Triathlon - Natation - Test de 400`,date:`2026-01-19`,duration:60,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Warm up
400 m @ 03:32-04:26 sec/100m
8x50 (25crawl-25crawl rattrapé)

Active
400 m @ 02:13-02:32 sec/100m
8x50 progressif de 1 à 4, récup 15 sec

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
4x100 progressif de 1 à 4, récup 20sec

Recovery
100 m @ 02:56-03:32 sec/100m

Test de 400m
400 m @ 02:13-02:32 sec/100m
prise de temps

Recovery
100 m @ 02:56-03:32 sec/100m

Active
400 m @ 02:13-02:32 sec/100m
8 x50 25très vite 25 souple, récup 10sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 2x4x200 (+100m chrono sur vitesse lente)`,date:`2026-01-17`,duration:59,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2800m (Un petit 200 palmes de plus parce que e ne sais pas compter 😅)

Séance plaisir là aussi, les sensations au top !

Warm up
500 m @ 03:32-04:26 sec/100m
- 100 crawl
- 200 respiration devant( prise d'infos)(sighting) tous les 3 cycles de respi
- 200 : 4x(25 doigts surface 25 crawl)

4x200 pull+plaquettes récup 25sec allure 70.3
800 m @ 02:13-02:32 sec/100m

Recovery
200 m @ 02:56-03:32 sec/100m
Amplitude

4x200 palmes récup 25sec focus technique
800 m @ 02:13-02:32 sec/100m

Cool Down
100 m @ 03:32-04:26 sec/100m
faire une prise de chrono sur un 100m mais vraiment à nager facile : pas à fond, pour voire si ta vitesse lente est plus rapide qu avant

Cool Down sauf crawl.
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 2x(200+2x100+4x50)`,date:`2026-01-12`,duration:71,distance:3.2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3200m

Warm up
600 m @ 03:32-04:26 sec/100m
- 200 souple crawl
- 200 palmes progressif (finir vite)
- 4x50 (25 poings fermés 25 crawl)

Corps de séance
1200 m @ 02:13-02:44 sec/100m
- 200 crawl max
- 200 crawl souple
- 2 x 100 crawl max
- 200 crawl souple
- 4 x 50 crawl max
- 200 crawl souple

Corps de séance avec matériel
1200 m @ 02:13-02:44 sec/100m
- 200 crawl max palmes
- 200 crawl souple palmes
- 2 x 100 crawl max plaquettes
- 200 crawl souple plaquettes
- 4 x 50 crawl max palmes + plaquettes
- 200 crawl souple palmes + plaquettes

Cool Down
200 m @ 03:32-04:26 sec/100m
brasse`},{name:`Triathlon - Natation - 8x200 + 8x50`,date:`2026-01-10`,duration:57,distance:2.6,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2600m

Crawl souple focus technique
400 m @ 03:32-04:26 sec/100m

8x200 recup 20sec

8x50m 25 fond 25 souple récup 10sec

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 2x5x200 (+100m chrono sur vitesse lente)`,date:`2026-01-06`,duration:60,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

Warm up
500 m @ 03:32-04:26 sec/100m
- 100 crawl
- 200 respiration devant( prise d'infos)(sighting) tous les 3 cycles de respi
- 200 : 4x(25 educ 25 crawl)

5x200 pull+plaquettes récup 25sec allure 70.3

Recovery
200 m @ 02:56-03:32 sec/100m
Amplitude

5x200 palmes récup 25sec focus technique

Cool Down
100 m @ 03:32-04:26 sec/100m
faire une prise de chrono sur un 100m mais vraiment à nager facile : pas à fond, pour voire si ta vitesse lente est plus rapide qu avant

Cool Down sauf crawl.
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 2x(200+2x100+4x50)`,date:`2026-01-03`,duration:59,distance:3.2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3200m

Warm up
600 m @ 03:32-04:26 sec/100m
- 200 souple crawl
- 200 palmes progressif (finir vite)
- 4x50 (25 crawl rattrapé 25 crawl)

Corps de séance
1200 m @ 02:13-02:44 sec/100m
- 200 crawl max
- 200 crawl souple
- 2 x 100 crawl max
- 200 crawl souple
- 4 x 50 crawl max
- 200 crawl souple

Corps de séance avec matériel
1200 m @ 02:13-02:44 sec/100m
- 200 crawl max palmes
- 200 crawl souple palmes
- 2 x 100 crawl max plaquettes
- 200 crawl souple plaquettes
- 4 x 50 crawl max palmes + plaquettes
- 200 crawl souple palmes + plaquettes

Cool Down
200 m @ 03:32-04:26 sec/100m
au choix pullbuoy en option`},{name:`Triathlon - Natation - Progressif`,date:`2025-12-30`,duration:66,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2800m

Découverte du mode natation avec la nouvelle montre, donc j'ai fait n'importe quoi et le résultat ne ressemble à rien, mais le programme a été suivi.
Découverte également de la piscine de Bréquigny, celle de Cesson, de Saint-Georges et des Gayeulles sont fermées pour vidange.
La piscine est incroyable, un bassin de 50m, une ligne aller, une ligne retour, un plongeoir immense, avec 4m70 de profondeur au max, c'est complètement hors norme comparé à celle plus classique de Cesson !

Warm up
600 m @ 03:32-04:26 sec/100m
6x100 50crawl-25 warterpolo -25 drills/éducatif, R:15sec

Montée en puissance en 4 étapes
Crawl
100 m @ 02:44-03:12 sec/100m
100 m @ 02:22-02:44 sec/100m
100 m @ 02:05-02:22 sec/100m
100 m @ 01:52-02:05 sec/100m

Montée en puissance en 4 étapes
Crawl +plaquettes
100 m @ 02:44-03:12 sec/100m
100 m @ 02:22-02:44 sec/100m
100 m @ 02:05-02:22 sec/100m
100 m @ 01:52-02:05 sec/100m

Montée en puissance en 4 étapes
Pull+plaquettes
100 m @ 02:44-03:12 sec/100m
100 m @ 02:22-02:44 sec/100m
100 m @ 02:05-02:22 sec/100m
100 m @ 01:52-02:05 sec/100m

Montée en puissance en 4 étapes
Plaquettes+palmes
100 m @ 02:44-03:12 sec/100m
100 m @ 02:22-02:44 sec/100m
100 m @ 02:05-02:22 sec/100m
100 m @ 01:52-02:05 sec/100m

Montée en puissance en 4 étapes
crawl
100 m @ 02:44-03:12 sec/100m
100 m @ 02:22-02:44 sec/100m
100 m @ 02:05-02:22 sec/100m
100 m @ 01:52-02:05 sec/100m

Cool Down
200 m @ 03:32-04:26 sec/100m
NO crawl, pas de crawl`},{name:`Triathlon - Natation - 1500!! allure course`,date:`2025-12-28`,duration:32,distance:1.5,tags:[U.sport,U.swimming,U.stage],programs:[`triathlonIronmanProgram`],description:`1er triathlon, au format M
1500m de natation
40km de vélo
10km de course à pied

Triathlon découverte, natation en piscine de 25m, transitions à la cool.
Réalisé avec mon frère et sa copine, un énorme merci à eux de m'avoir accompagné sur cette épreuve ❤️`},{name:`Triathlon - Natation - Easy-Souple`,date:`2025-12-24`,duration:49,distance:2.4,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2400m

Warm up
600 m @ 03:32-04:26 sec/100m
3x200 pullbuoy amplitude récup 20sec

Répéter 4 fois
Hard
300 m @ 01:52-02:05 sec/100m
#1 et 3 palmes #2 et 4 sans matériel
Easy
100 m @ 02:56-03:32 sec/100m
souple amplitude + pull buoy : compter ses mvts

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 4x(300+100)`,date:`2025-12-20`,duration:54,distance:2.4,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2400m

Warm up
400 m @ 02:36-02:59 sec/100m
4x100 (75 crawl +25 educ)

Répéter 4 fois
Hard
300 m @ 01:49-01:59 sec/100m
Allure course : le premier en plaquettes, le second en Pull, le troisieme pull+plaquette, le quatrieme sans materiel
Easy
100 m @ 02:27-02:47 sec/100m

Répéter 2 fois
Hard
50.0 m @ 01:40-01:49 sec/100m
Crawl Vite
Easy
50.0 m @ 02:27-02:47 sec/100m

Cool Down
200 m @ 02:36-02:59 sec/100m`},{name:`Triathlon - Natation - sprint!!! 3x6x50 meilleure moyenne possible`,date:`2025-12-18`,duration:79,distance:3.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3500m

Warm up
600 m @ 03:32-04:26 sec/100m
3x200 150m crawl souple 25 bras droit 25 bras gauche (l'autre bras reste devant tendu) récup 20sec

Active
600 m @ 02:22-02:32 sec/100m
3x200 (50m battements de jambes pull buoy devant bras tendus- 150 pull amplitude) récup 20sec

Active
300 m @ 01:58-02:32 sec/100m
6x50 meilleure moyenne possible récup 10sec

Active
600 m @ 02:22-02:32 sec/100m
3x200 pull+ plaquettes recup 15 sec

Active
300 m @ 01:58-02:32 sec/100m
6x50 meilleure moyenne possible récup 10sec

Active
600 m @ 02:22-02:32 sec/100m
3x200 palmes recup 15 sec

Active
300 m @ 01:58-02:32 sec/100m
6x50 meilleure moyenne possible récup 10sec

Cool Down
200 m @ 03:32-04:26 sec/100m
4x50 2nages souple (changer de nage au milieu du bassin)`},{name:`Triathlon - Natation - 2x5x200 (+100m chrono sur vitesse lente)`,date:`2025-12-12`,duration:79,distance:3.6,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3600m

A la fin de la séance, une prise de chrono est à faire, mais avec l'ajustement d'il y a 2 semaines, je n'ai pas fait attention au chrono (ça n'a pas dû bouger beaucoup en 2 semaines)
A la fin de la séance, j'ai ajouté 600m en amplitude, pour rattraper les 600m manqués lors de la séance du mardi, ce qui donne une grosse séance à 3600m 🥵

Warm up
500 m @ 03:32-04:26 sec/100m
- 100 crawl - 200 respiration devant( prise d'infos)(sighting) tous les 3 cycles de respi - 200 : 4x(25 rattrapé devant - 25 crawl)

5x200 pull+plaquettes récup 25sec allure 70.3
1000 m @ 02:13-02:32 sec/100m

Recovery
200 m @ 02:56-03:32 sec/100m
Amplitude

5x200 palmes récup 25sec focus technique
1000 m @ 02:13-02:32 sec/100m
200= 4x(25 educ 25 crawl)

Cool Down
100 m @ 03:32-04:26 sec/100m
faire une prise de chrono sur un 100m mais vraiment à nager facile : pas à fond, pour voire si ta vitesse lente est plus rapide qu'avant

Cool Down sauf crawl.
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 8x200 + 8x50`,date:`2025-12-09`,duration:46,distance:2.2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2200m

Petit imprévu qui fait démarrer la séance trop tard, la piscine a fermé avant la fin de séance.
Les 8x50 et les 200m de cool down ne seront pas fait, je note qu'il y a 600m de plus à faire pour la prochaine séance natation, hors de question de laisser 600m de côté !

Crawl souple focus technique
600 m @ 03:32-04:26 sec/100m
12x(25 crawl -25 poings fermés)

8x200 R:20 sec
1600 m @ 02:13-02:32 sec/100m
allure course

8x50m 25 hard 25 souple R: 10sec
400 m @ 01:58-02:13 sec/100m

Cool Down
200 m @ 03:32-04:26 sec/100m`},{name:`Triathlon - Natation - 400 - 2x200 - 4x100 - 8x50`,date:`2025-12-06`,duration:78,distance:3.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3700m

Warm up
200 m @ 02:05-02:22 sec/100m

Amplitude avec pull buoy
400 m @ 02:56-03:32 sec/100m

Répéter 2 fois
Hard
200 m @ 01:58-02:05 sec/100m
Easy
50.0 m @ 02:56-03:32 sec/100m

Amplitude avec pull buoy
400 m @ 02:56-03:32 sec/100m

Répéter 4 fois
Hard
100 m @ 01:52-01:58 sec/100m
Easy
50.0 m @ 02:56-03:32 sec/100m

Amplitude avec pull buoy
400 m @ 02:56-03:32 sec/100m

Répéter 8 fois
Hard
50.0 m @ 01:46-01:52 sec/100m
Easy
50.0 m @ 02:56-03:32 sec/100m

Amplitude avec pull buoy
400 m @ 02:56-03:32 sec/100m`},{name:`Triathlon - Natation - Un classique!!!! mais tellement efficace 20x100`,date:`2025-12-01`,duration:66,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2800m

Warm up
600 m @ 03:32-04:26 sec/100m
6x100m récup 15 sec - 3 ou 4 nages changer tout les 25m

Active 20x100
2000 m @ 01:58-02:22 sec/100m
- 20x100m vite, récup 15sec Objectif faire la meilleure moyenne possible

Cool Down
200 m @ 03:32-04:26 sec/100m
crawl souple`},{name:`Triathlon - Natation - Relax Swim`,date:`2025-11-29`,duration:45,distance:1.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 1700m

Ce qui fait plaisir, c'est de découvrir qu'en récup on fait un meilleur temps qu'il y a 8 semaines en test !
1700m en 45 minutes, full crawl, avec un 1000m en 20'58", un joli 2'06"/100m, bien mieux que les 2'16"/100m du 07/11 ! 🎉

Warm up
20 min @ 03:50-04:49 sec/100m

Recovery
5 min @ 03:12-03:50 sec/100m

Cool Down
20 min @ 03:50-04:49 sec/100m`},{name:`Triathlon - Natation - 3x4x100 progressif`,date:`2025-11-24`,duration:50,distance:2.2,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2200m

Warm up
600 m @ 03:50-04:49 sec/100m
6x100 2nages R 10sec

Warm up
200 m @ 03:50-04:49 sec/100m
8x25 éducatifs (crawl rattrapé devant) R 5sec

Montée en puissance en 4 étapes
#1 en plaquettes
100 m @ 02:59-03:29 sec/100m
100 m @ 02:35-02:59 sec/100m
100 m @ 02:16-02:35 sec/100m
100 m @ 02:01-02:16 sec/100m

Montée en puissance en 4 étapes
#2 en pullbuoy
100 m @ 02:59-03:29 sec/100m
100 m @ 02:35-02:59 sec/100m
100 m @ 02:16-02:35 sec/100m
100 m @ 02:01-02:16 sec/100m

Montée en puissance en 4 étapes
#3 en crawl (nage complète)
100 m @ 02:59-03:29 sec/100m
100 m @ 02:35-02:59 sec/100m
100 m @ 02:16-02:35 sec/100m
100 m @ 02:01-02:16 sec/100m

Cool Down
200 m @ 03:50-04:49 sec/100m`},{name:`Triathlon - Natation - 10x200 + 8x50`,date:`2025-11-22`,duration:62,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2800m

Crawl souple focus technique
200 m @ 03:50-04:49 sec/100m

10x200 recup 20 sec
2000 m @ 02:25-02:46 sec/100m
effort de course #1-5 en plaquettes #6-10 en crawl

8x50m 25 fond 25 souple récup 10sec
400 m @ 02:08-02:25 sec/100m

Cool Down
200 m @ 03:50-04:49 sec/100m`},{name:`Triathlon - Natation - 5x100+4x100+3x100 vite`,date:`2025-11-17`,duration:67,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

Warm up
500 m @ 03:50-04:49 sec/100m
- 100 souple - 2x100 comme suit (25 bras droit 25 crawl 25 bras gauche 25 crawl) - 4x50 comme suit (25 pouce le long du corps 25 crawl )

Active
600 m @ 02:46-02:59 sec/100m
- 600 palmes

Active
500 m @ 02:35-02:46 sec/100m
- 5x100 vite récup 15sec

Active
300 m @ 02:46-02:59 sec/100m
- 300 pullbuoy faire le moins de mouvements possible, rechercher la glisse

Active
400 m @ 02:25-02:35 sec/100m
-4 x100 vite récup 15sec

Active
200 m @ 02:46-02:59 sec/100m
- 200 pullbuoy faire le moins de mouvements possible, rechercher la glisse

Active
300 m @ 02:16-02:25 sec/100m
- 3 x100 vite récup 15sec

Cool Down
200 m @ 03:50-04:49 sec/100m
souple en brasse`},{name:`Triathlon - Natation - Pas de mur!!!`,date:`2025-11-15`,duration:73,distance:2.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2700m

Warm up
300 m @ 03:50-04:49 sec/100m
crawl sans toucher le mur

Active
200 m @ 02:25-02:46 sec/100m
8x25 vite 15 sec de récup départ au T

Recovery
100 m @ 03:12-03:50 sec/100m

Active
500 m @ 02:25-02:46 sec/100m
10x50 vite 20 sec de récup départ au T

Recovery
100 m @ 03:12-03:50 sec/100m

Active
900 m @ 02:25-02:46 sec/100m
3x300 amplitude avec sighting faire demi-tour aux T récup 20sec

Recovery
100 m @ 03:12-03:50 sec/100m

Active
300 m @ 02:25-02:46 sec/100m
Pull amplitude faire demi-tour aux T récup 20sec

Cool Down
200 m @ 03:50-04:49 sec/100m
souple`},{name:`Triathlon - Natation - (6+4)x200 pullbuoy -plaquettes`,date:`2025-11-10`,duration:73,distance:3.1,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3100m

Warm up
400 m @ 03:50-04:49 sec/100m
4 x100 2 nages récup 15sec

Répéter 6 fois
Hard avec plaquettes
200 m @ 02:08-02:25 sec/100m
Easy
50.0 m @ 03:12-03:50 sec/100m

Répéter 4 fois
Hard avec pullbupy
200 m @ 02:08-02:25 sec/100m
Easy
50.0 m @ 03:12-03:50 sec/100m

Cool Down
200 m @ 03:50-04:49 sec/100m`},{name:`Triathlon - Natation - 2x5x200 Plaquettes/Palmes`,date:`2025-11-08`,duration:73,distance:3,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

Warm up
600 m @ 03:50-04:49 sec/100m
6x100m ( 50 crawl 25 educ poings fermés, 25 pouces le long du corps) récup 15 sec

Active
1000 m @ 02:25-02:46 sec/100m
5x200 avec plaquettes zone 3-4 récup 20sec

Recovery
100 m @ 03:12-03:50 sec/100m

Active
1000 m @ 02:25-02:46 sec/100m
5x200 avec plames zone 3-4 récup 20sec

Cool Down
300 m @ 03:50-04:49 sec/100m
souple sauf crawl`},{name:`Triathlon - Natation - Des 600 !!!`,date:`2025-11-03`,duration:72,distance:3,tags:[U.sport,U.swimming,U.stage],programs:[`triathlonIronmanProgram`],description:`Total : 3000m

On passe la barre symbolique des 3000m de séance !

Warm up
300 m @ 03:50-04:49 sec/100m
- 6 x 50 25 crawl 25 educ

Active
600 m @ 02:25-02:46 sec/100m
- 6 x 100 , #1,3,5 facile, #2,4,6 vite récup 15 sec

Active
600 m @ 02:25-02:46 sec/100m
3x200 Progressif récup 15sec

Active
600 m @ 02:25-02:46 sec/100m
2x300 pull+plaquettes récup 15sec

Active
600 m @ 02:25-02:46 sec/100m
1x600 pull ou palmes au choix

Active
300 m @ 02:25-02:46 sec/100m
6x50 souple recup 15 sec changer de nage par 50m`},{name:`Triathlon - Natation - Aérobie Amplitude`,date:`2025-11-02`,duration:69,distance:2.5,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2500m

Warm up
400 m @ 03:50-04:49 sec/100m
2x200 (2nages par 50) R10sec

Warm up
300 m @ 03:50-04:49 sec/100m
6x50 (25crawl amplitude 25 eéducatifs) R10sec

Répéter 3 fois
Hard
400 m @ 02:01-02:16 sec/100m
3x400 amplitude rechercher la glisse #1 crawl #2 pullbuoy #3 palmes
Easy
100 m @ 03:12-03:50 sec/100m

Cool Down
300 m @ 03:50-04:49 sec/100m
3x100 souple : 50 crawl-50 brasse ou dos`},{name:`Triathlon - Natation - Séance découverte mermaiding`,date:`2025-10-28`,duration:63,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Découverte d'une discipline aquatique très particulière : le mermaiding.
On enfile une queue de sirène avec une monopalme au bout et c'est parti !
Après un shootong photo et une partie technique pour apprendre les mouvements, on a pu essayer de faire des mouvements synchronisés, mais c'est tellement difficile d'être gracieux avec les jambes attachés !
Beaucoup de travail d'ondulation, les jambes et le dos à deux doigts de la crampe à la fin de la séance !
Mais superbe expérience, ravi de la découverte`},{name:`Triathlon - Natation - Meilleure moyenne !!!`,date:`2025-10-25`,duration:72,distance:2.6,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2600m

Warm up
600 m @ 03:50-04:49 sec/100m
6x(50crawl+25 éduc+25 battements de jambes)

Active
600 m @ 02:25-02:46 sec/100m
6x100 meilleure moyenne possible récup 30 sec

Recovery
100 m @ 03:12-03:50 sec/100m

Active
600 m @ 02:25-02:46 sec/100m
6x100 avec plaquettes meilleure moyenne possible récup 30 sec

Recovery
100 m @ 03:12-03:50 sec/100m

Active
400 m @ 02:25-02:46 sec/100m
8x50 meilleure moyenne récup 15 sec

Cool Down
200 m @ 03:50-04:49 sec/100m
sauf crawl`},{name:`Triathlon - Natation - Vitesse !!!! 16x50 et 10x25`,date:`2025-10-21`,duration:73,distance:2.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Total : 2700m

Warm up
800 m @ 03:50-04:49 sec/100m
8x100m multinages (changer de nage au milieu du bassin, pas au mur) 15sec récup

Active
800 m @ 02:08-02:35 sec/100m
16x50 vitesse constante récup 20sec

Recovery
400 m @ 03:12-03:50 sec/100m
4x100 (50 éduc poings fermés, 50 crawl )

Répéter 10 fois
Hard
25.0 m @ 02:01-02:16 sec/100m
A fond!!!
Easy
25.0 m @ 03:12-03:50 sec/100m
souple en crawl, récup 20sec

Cool Down
200 m @ 03:50-04:49 sec/100m`},{name:`Triathlon - Natation - 3*(300/100) + Test 400`,date:`2025-10-18`,duration:75,distance:2.6,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Séance : 2600m

Warm up
400 m @ 00:46-00:57 sec/100m
souple éduc poings fermés sur 50%

Active
300 m @ 00:29-00:33 sec/100m
2x150 crawl progressif sur les 150

Recovery
100 m @ 00:38-00:46 sec/100m
battements de jambes

Active
300 m @ 00:29-00:33 sec/100m
2x150 crawl+ plaquettes progressif

Recovery
100 m @ 00:38-00:46 sec/100m
battements de jambes

Active
300 m @ 00:29-00:33 sec/100m
2x150 crawl+ pull progressif

Recovery
100 m @ 00:38-00:46 sec/100m
battements de jambes

Active
400 m @ 00:25-00:33 sec/100m
Test de 400

Recovery
100 m @ 00:38-00:46 sec/100m

Active
300 m @ 00:29-00:33 sec/100m
6x50 25 craw+25 battements de jambes récup 10 sec

Cool Down
200 m @ 00:46-00:57 sec/100m
en pull`},{name:`Triathlon - Natation - 2*800`,date:`2025-10-13`,duration:82,distance:2.8,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Séance : 2800m

Warm up
300 m @ 03:50-04:49 sec/100m
300 crawl souple rechercher la glisse

Warm up
300 m @ 03:50-04:49 sec/100m
3 x100 : récup 15 sec (25 crawl, 25 battements de jambes, 25 crawl, 25 éduc doigts surface)

Active
1600 m @ 02:25-02:46 sec/100m
- 2x800 allure presque comme sur le 1500m, récup 30sec

Active
400 m @ 02:25-02:46 sec/100m
- 8x50 départ pieds au sol (pas de poussée contre le mur), meilleure moyenne possible, récup 15sec

Cool Down
200 m @ 03:50-04:49 sec/100m
souple en dos à 2 bras, crawl et brasse`},{name:`Triathlon - Natation - 30*50 crawl`,date:`2025-10-12`,duration:73,distance:2.7,tags:[U.sport,U.swimming],programs:[`triathlonIronmanProgram`],description:`Séance : 2700m

Warm up
800 m @ 03:50-04:49 sec/100m
2x(300 crawl + 50 brasse +50 battements de jambes) récup 20sec

Active
1500 m @ 02:25-02:46 sec/100m
30x50 crawl récup 20sec (10 en plaquettes, 10 en pull, 10 sans matériel)

Cool Down
400 m @ 03:50-04:49 sec/100m`},{name:`Triathlon - Test natation 1000m 👑`,date:`2025-10-07`,duration:30,distance:1.3,tags:[U.sport,U.swimming,U.test,U.first],programs:[`triathlonIronmanProgram`],description:`Résultat : 22'58"

Test d'évaluation pour la préparation triathlon.
Objectif : effectuer 1000m le plus rapidement possible
100m crawl
100m brasse
Test
- 200m crawl R5"
- 4x(100m crawl R5" - 100m brasse R5")
RC 100m brasse

Total 1300m
Impossible d'enchainer 1000m de crawl`}],_d=[{id:`calisthenicsTMAEasyProgram`,name:`Callisthénie - The Movement Athlete - Facile`,tagColor:`violet`},{id:`readingNovelProgram`,name:`Lecture - 5h/jour`,tagColor:`yellow`},{id:`runningMarathonProgram`,name:`Course à pied - Marathon`,tagColor:`lime`},{id:`geocachingRennesProgram`,name:`Géocaching - Rennes intra-rocade`,tagColor:`sky`},{id:`zwiftPlatineProgram`,name:`Zwift - Platine`,tagColor:`orange`},{id:`triathlonIronmanProgram`,name:`Triathlon - Ironman`,tagColor:`cyan`},{id:`dndAdventuresProgram`,name:`Aventures D&D`,tagColor:`lime`}],vd=[...ld,...md,...hd,...pd,...fd,...gd,...ud,...dd],yd={red:`bg-red-800`,orange:`bg-orange-800`,amber:`bg-amber-800`,yellow:`bg-yellow-800`,lime:`bg-lime-800`,green:`bg-green-800`,emerald:`bg-emerald-800`,teal:`bg-teal-800`,cyan:`bg-cyan-800`,sky:`bg-sky-800`,blue:`bg-blue-800`,indigo:`bg-indigo-800`,violet:`bg-violet-800`,purple:`bg-purple-800`,fuchsia:`bg-fuchsia-800`,pink:`bg-pink-800`,rose:`bg-rose-800`,slate:`bg-slate-800`,gray:`bg-gray-800`,zinc:`bg-zinc-800`,neutral:`bg-neutral-800`,stone:`bg-stone-800`,taupe:`bg-taupe-800`,mauve:`bg-mauve-800`,mist:`bg-mist-800`,olive:`bg-olive-800`},bd={red:`bg-red-600`,orange:`bg-orange-600`,amber:`bg-amber-600`,yellow:`bg-yellow-600`,lime:`bg-lime-600`,green:`bg-green-600`,emerald:`bg-emerald-600`,teal:`bg-teal-600`,cyan:`bg-cyan-600`,sky:`bg-sky-600`,blue:`bg-blue-600`,indigo:`bg-indigo-600`,violet:`bg-violet-600`,purple:`bg-purple-600`,fuchsia:`bg-fuchsia-600`,pink:`bg-pink-600`,rose:`bg-rose-600`,slate:`bg-slate-600`,gray:`bg-gray-600`,zinc:`bg-zinc-600`,neutral:`bg-neutral-600`,stone:`bg-stone-600`,taupe:`bg-taupe-600`,mauve:`bg-mauve-600`,mist:`bg-mist-600`,olive:`bg-olive-600`},xd={class:`flex flex-col md:flex-row md:justify-between gap-2 mb-4`},Sd={class:`flex flex-wrap gap-1`},Cd={class:`text-lg sm:text-xl font-bold mb-2`},wd={class:`flex flex-wrap gap-1 mb-2`},Td={key:0},Ed={key:1},Dd={class:`text-sm md:text-base m-2 whitespace-pre-line`},Od={class:`flex justify-end`},kd=j({__name:`ActivityModalComponent`,props:{activity:{}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=Object.fromEntries(_d.map(e=>[e.id,e])),a=Ha(()=>n.activity.programs.map(e=>i[e]).filter(e=>e!==void 0));return br(()=>{document.body.style.overflow=`hidden`}),wr(()=>{document.body.style.overflow=``}),(t,n)=>(P(),F(`div`,{class:`fixed inset-0 flex items-center justify-center z-200 backdrop-blur-sm bg-black/30 p-4`,onClick:n[2]||=e=>r(`close`)},[I(`div`,{class:`bg-gray-900 p-4 md:p-6 rounded-xl md:max-w-2xl max-h-full overflow-y-auto border border-gray-800`,onClick:n[1]||=Mo(()=>{},[`stop`])},[I(`div`,xd,[I(`div`,Sd,[(P(!0),F(N,null,M(a.value,e=>(P(),F(`span`,{key:e.id,class:E([`px-2 rounded-sm`,A(yd)[e.tagColor]])},D(e.name),3))),128))]),I(`p`,null,D(A(hl)(e.activity.date)),1)]),I(`h2`,Cd,D(e.activity.name),1),I(`div`,wd,[(P(!0),F(N,null,M(e.activity.tags,e=>(P(),F(`span`,{key:e.label,class:E([`px-2 py-0.5 rounded text-xs md:text-sm`,A(bd)[e.color]])},D(e.label),3))),128))]),e.activity.duration?(P(),F(`p`,Td,[n[3]||=I(`strong`,null,`Durée :`,-1),fa(` `+D(A(gl)(e.activity.duration)),1)])):ma(``,!0),e.activity.distance?(P(),F(`p`,Ed,[n[4]||=I(`strong`,null,`Distance :`,-1),fa(` `+D(e.activity.distance)+` km`,1)])):ma(``,!0),n[5]||=I(`div`,{class:`mt-2 h-px bg-gray-800 mx-16`},null,-1),I(`p`,Dd,D(e.activity.description),1),I(`div`,Od,[I(`button`,{onClick:n[0]||=e=>r(`close`),class:`mt-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 justify-end-safe`},` Fermer `)])])]))}}),Ad={code:`fr`,week:{dow:1,doy:4},buttonText:{prev:`Précédent`,next:`Suivant`,today:`Aujourd'hui`,year:`Année`,month:`Mois`,week:`Semaine`,day:`Jour`,list:`Planning`},weekText:`Sem.`,weekTextLong:`Semaine`,allDayText:`Toute la journée`,moreLinkText:`en plus`,noEventsText:`Aucun évènement à afficher`},jd,W,Md,Nd,Pd,Fd,Id,Ld,Rd,zd={},Bd=[],Vd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hd(e,t){for(var n in t)e[n]=t[n];return e}function Ud(e){var t=e.parentNode;t&&t.removeChild(e)}function G(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?jd.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Wd(e,o,r,i,null)}function Wd(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Md};return i==null&&W.vnode!=null&&W.vnode(a),a}function Gd(){return{current:null}}function K(e){return e.children}function Kd(e,t,n,r,i){for(var a in n)a===`children`||a===`key`||a in t||Jd(e,a,null,n[a],r);for(a in t)i&&typeof t[a]!=`function`||a===`children`||a===`key`||a===`value`||a===`checked`||n[a]===t[a]||Jd(e,a,t[a],n[a],r)}function qd(e,t,n){t[0]===`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||Vd.test(t)?n:n+`px`}function Jd(e,t,n,r,i){var a;n:if(t===`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||qd(e.style,t,``);if(n)for(t in n)r&&n[t]===r[t]||qd(e.style,t,n[t])}else if(t[0]===`o`&&t[1]===`n`)a=t!==(t=t.replace(/Capture$/,``)),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r||e.addEventListener(t,a?Xd:Yd,a):e.removeEventListener(t,a?Xd:Yd,a);else if(t!==`dangerouslySetInnerHTML`){if(i)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!==`width`&&t!==`height`&&t!==`href`&&t!==`list`&&t!==`form`&&t!==`tabIndex`&&t!==`download`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t.indexOf(`-`)==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Yd(e){Pd=!0;try{return this.l[e.type+!1](W.event?W.event(e):e)}finally{Pd=!1}}function Xd(e){Pd=!0;try{return this.l[e.type+!0](W.event?W.event(e):e)}finally{Pd=!1}}function Zd(e,t){this.props=e,this.context=t}function Qd(e,t){if(t==null)return e.__?Qd(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Qd(e):null}function $d(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return $d(e)}}function ef(e){Pd?setTimeout(e):Ld(e)}function tf(e){(!e.__d&&(e.__d=!0)&&Fd.push(e)&&!nf.__r++||Id!==W.debounceRendering)&&((Id=W.debounceRendering)||ef)(nf)}function nf(){var e,t,n,r,i,a,o,s;for(Fd.sort(function(e,t){return e.__v.__b-t.__v.__b});e=Fd.shift();)e.__d&&(t=Fd.length,r=void 0,i=void 0,o=(a=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=Hd({},a)).__v=a.__v+1,lf(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h==null?null:[o],r,o??Qd(a),a.__h),uf(r,a),a.__e!=o&&$d(a)),Fd.length>t&&Fd.sort(function(e,t){return e.__v.__b-t.__v.__b}));nf.__r=0}function rf(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_=r&&r.__k||Bd,v=_.length;for(n.__k=[],u=0;u<t.length;u++)if((p=n.__k[u]=(p=t[u])==null||typeof p==`boolean`?null:typeof p==`string`||typeof p==`number`||typeof p==`bigint`?Wd(null,p,null,null,p):Array.isArray(p)?Wd(K,{children:p},null,null,null):p.__b>0?Wd(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(f=_[u])===null||f&&p.key==f.key&&p.type===f.type)_[u]=void 0;else for(d=0;d<v;d++){if((f=_[d])&&p.key==f.key&&p.type===f.type){_[d]=void 0;break}f=null}lf(e,p,f||=zd,i,a,o,s,c,l),m=p.__e,(d=p.ref)&&f.ref!=d&&(g||=[],f.ref&&g.push(f.ref,null,p),g.push(d,p.__c||m,p)),m==null?c&&f.__e==c&&c.parentNode!=e&&(c=Qd(f)):(h??=m,typeof p.type==`function`&&p.__k===f.__k?p.__d=c=af(p,c,e):c=sf(e,p,f,_,m,c),typeof n.type==`function`&&(n.__d=c))}for(n.__e=h,u=v;u--;)_[u]!=null&&(typeof n.type==`function`&&_[u].__e!=null&&_[u].__e==n.__d&&(n.__d=cf(r).nextSibling),pf(_[u],_[u]));if(g)for(u=0;u<g.length;u++)ff(g[u],g[++u],g[++u])}function af(e,t,n){for(var r,i=e.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=e,t=typeof r.type==`function`?af(r,t,n):sf(n,r,r,i,r.__e,t));return t}function of(e,t){return t||=[],e==null||typeof e==`boolean`||(Array.isArray(e)?e.some(function(e){of(e,t)}):t.push(e)),t}function sf(e,t,n,r,i,a){var o,s,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||i!=a||i.parentNode==null)n:if(a==null||a.parentNode!==e)e.appendChild(i),o=null;else{for(s=a,c=0;(s=s.nextSibling)&&c<r.length;c+=1)if(s==i)break n;e.insertBefore(i,a),o=a}return o===void 0?i.nextSibling:o}function cf(e){var t,n,r;if(e.type==null||typeof e.type==`string`)return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=cf(n)))return r}return null}function lf(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g,_,v,y,b,x,ee,S,C=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(l=W.__b)&&l(t);try{n:if(typeof C==`function`){if(g=t.props,_=(l=C.contextType)&&r[l.__c],v=l?_?_.props.value:l.__:r,n.__c?h=(u=t.__c=n.__c).__=u.__E:(`prototype`in C&&C.prototype.render?t.__c=u=new C(g,v):(t.__c=u=new Zd(g,v),u.constructor=C,u.render=mf),_&&_.sub(u),u.props=g,u.state||={},u.context=v,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s??=u.state,C.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Hd({},u.__s)),Hd(u.__s,C.getDerivedStateFromProps(g,u.__s))),f=u.props,p=u.state,u.__v=t,d)C.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(C.getDerivedStateFromProps==null&&g!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(g,v),!u.__e&&u.shouldComponentUpdate!=null&&!1===u.shouldComponentUpdate(g,u.__s,v)||t.__v===n.__v){for(t.__v!==n.__v&&(u.props=g,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(e){e&&(e.__=t)}),y=0;y<u._sb.length;y++)u.__h.push(u._sb[y]);u._sb=[],u.__h.length&&o.push(u);break n}u.componentWillUpdate!=null&&u.componentWillUpdate(g,u.__s,v),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,p,m)})}if(u.context=v,u.props=g,u.__P=e,b=W.__r,x=0,`prototype`in C&&C.prototype.render){for(u.state=u.__s,u.__d=!1,b&&b(t),l=u.render(u.props,u.state,u.context),ee=0;ee<u._sb.length;ee++)u.__h.push(u._sb[ee]);u._sb=[]}else do u.__d=!1,b&&b(t),l=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++x<25);u.state=u.__s,u.getChildContext!=null&&(r=Hd(Hd({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(f,p)),S=l!=null&&l.type===K&&l.key==null?l.props.children:l,rf(e,Array.isArray(S)?S:[S],t,n,r,i,a,o,s,c),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),h&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=df(n.__e,t,n,r,i,a,o,c);(l=W.diffed)&&l(t)}catch(e){t.__v=null,(c||a!=null)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),W.__e(e,t,n)}}function uf(e,t){W.__c&&W.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){W.__e(e,t.__v)}})}function df(e,t,n,r,i,a,o,s){var c,l,u,d=n.props,f=t.props,p=t.type,m=0;if(p===`svg`&&(i=!0),a!=null){for(;m<a.length;m++)if((c=a[m])&&`setAttribute`in c==!!p&&(p?c.localName===p:c.nodeType===3)){e=c,a[m]=null;break}}if(e==null){if(p===null)return document.createTextNode(f);e=i?document.createElementNS(`http://www.w3.org/2000/svg`,p):document.createElement(p,f.is&&f),a=null,s=!1}if(p===null)d===f||s&&e.data===f||(e.data=f);else{if(a&&=jd.call(e.childNodes),l=(d=n.props||zd).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!s){if(a!=null)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(u||l)&&(u&&(l&&u.__html==l.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||``))}if(Kd(e,f,d,i,s),u)t.__k=[];else if(m=t.props.children,rf(e,Array.isArray(m)?m:[m],t,n,r,i&&p!==`foreignObject`,a,o,a?a[0]:n.__k&&Qd(n,0),s),a!=null)for(m=a.length;m--;)a[m]!=null&&Ud(a[m]);s||(`value`in f&&(m=f.value)!==void 0&&(m!==e.value||p===`progress`&&!m||p===`option`&&m!==d.value)&&Jd(e,`value`,m,d.value,!1),`checked`in f&&(m=f.checked)!==void 0&&m!==e.checked&&Jd(e,`checked`,m,d.checked,!1))}return e}function ff(e,t,n){try{typeof e==`function`?e(t):e.current=t}catch(e){W.__e(e,n)}}function pf(e,t,n){var r,i;if(W.unmount&&W.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ff(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){W.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&pf(r[i],t,n||typeof e.type!=`function`);n||e.__e==null||Ud(e.__e),e.__=e.__e=e.__d=void 0}function mf(e,t,n){return this.constructor(e,n)}function hf(e,t,n){var r,i,a;W.__&&W.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],lf(t,e=(!r&&n||t).__k=G(K,null,[e]),i||zd,zd,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?jd.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r),uf(a,e)}function gf(e,t){var n={__c:t=`__cC`+ Rd++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(function(e){e.__e=!0,tf(e)})},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}jd=Bd.slice,W={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},Md=0,Nd=function(e){return e!=null&&e.constructor===void 0},Pd=!1,Zd.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hd({},this.state);typeof e==`function`&&(e=e(Hd({},n),this.props)),e&&Hd(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),tf(this))},Zd.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),tf(this))},Zd.prototype.render=K,Fd=[],Ld=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nf.__r=0,Rd=0;var _f,vf,yf,bf=[],xf=[],Sf=W.__b,Cf=W.__r,wf=W.diffed,Tf=W.__c,Ef=W.unmount;function Df(){for(var e;e=bf.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Af),e.__H.__h.forEach(jf),e.__H.__h=[]}catch(t){e.__H.__h=[],W.__e(t,e.__v)}}W.__b=function(e){_f=null,Sf&&Sf(e)},W.__r=function(e){Cf&&Cf(e);var t=(_f=e.__c).__H;t&&(vf===_f?(t.__h=[],_f.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=xf,e.__N=e.i=void 0})):(t.__h.forEach(Af),t.__h.forEach(jf),t.__h=[])),vf=_f},W.diffed=function(e){wf&&wf(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(bf.push(t)!==1&&yf===W.requestAnimationFrame||((yf=W.requestAnimationFrame)||kf)(Df)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==xf&&(e.__=e.__V),e.i=void 0,e.__V=xf})),vf=_f=null},W.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Af),e.__h=e.__h.filter(function(e){return!e.__||jf(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],W.__e(n,e.__v)}}),Tf&&Tf(e,t)},W.unmount=function(e){Ef&&Ef(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Af(e)}catch(e){t=e}}),n.__H=void 0,t&&W.__e(t,n.__v))};var Of=typeof requestAnimationFrame==`function`;function kf(e){var t,n=function(){clearTimeout(r),Of&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Of&&(t=requestAnimationFrame(n))}function Af(e){var t=_f,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),_f=t}function jf(e){var t=_f;e.__c=e.__(),_f=t}function Mf(e,t){for(var n in t)e[n]=t[n];return e}function Nf(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function Pf(e){this.props=e}(Pf.prototype=new Zd).isPureReactComponent=!0,Pf.prototype.shouldComponentUpdate=function(e,t){return Nf(this.props,e)||Nf(this.state,t)};var Ff=W.__b;W.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ff&&Ff(e)},typeof Symbol<`u`&&Symbol.for;var If=W.__e;W.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}If(e,t,n,r)};var Lf=W.unmount;function Rf(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=Mf({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Rf(e,t,n)})),e}function zf(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return zf(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function Bf(){this.__u=0,this.t=null,this.__b=null}function Vf(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Hf(){this.u=null,this.o=null}W.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),Lf&&Lf(e)},(Bf.prototype=new Zd).__c=function(e,t){var n=t.__c,r=this;r.t??=[],r.t.push(n);var i=Vf(r.__v),a=!1,o=function(){a||(a=!0,n.__R=null,i?i(s):s())};n.__R=o;var s=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=zf(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},Bf.prototype.componentWillUnmount=function(){this.t=[]},Bf.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Rf(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&G(K,null,e.fallback);return i&&(i.__h=null),[G(K,null,t.__a?null:e.children),i]};var Uf=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Wf(e){return this.getChildContext=function(){return e.context},e.children}function Gf(e){var t=this,n=e.i;t.componentWillUnmount=function(){hf(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||=(t.i=n,{nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),hf(G(Wf,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Kf(e,t){var n=G(Gf,{__v:e,i:t});return n.containerInfo=t,n}(Hf.prototype=new Zd).__a=function(e){var t=this,n=Vf(t.__v),r=t.o.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Uf(t,e,r)):i()};n?n(a):a()}},Hf.prototype.render=function(e){this.u=null,this.o=new Map;var t=of(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Hf.prototype.componentDidUpdate=Hf.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Uf(e,n,t)})};var qf=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,Jf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Yf=typeof document<`u`,Xf=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/i:/fil|che|ra/i).test(e)};Zd.prototype.isReactComponent={},[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(Zd.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Zf=W.event;function Qf(){}function $f(){return this.cancelBubble}function ep(){return this.defaultPrevented}W.event=function(e){return Zf&&(e=Zf(e)),e.persist=Qf,e.isPropagationStopped=$f,e.isDefaultPrevented=ep,e.nativeEvent=e};var tp={configurable:!0,get:function(){return this.class}},np=W.vnode;W.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t==`string`){var i=t.indexOf(`-`)===-1;for(var a in r={},n){var o=n[a];Yf&&a===`children`&&t===`noscript`||a===`value`&&`defaultValue`in n&&o==null||(a===`defaultValue`&&`value`in n&&n.value==null?a=`value`:a===`download`&&!0===o?o=``:/ondoubleclick/i.test(a)?a=`ondblclick`:/^onchange(textarea|input)/i.test(a+t)&&!Xf(n.type)?a=`oninput`:/^onfocus$/i.test(a)?a=`onfocusin`:/^onblur$/i.test(a)?a=`onfocusout`:/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)?a=a.toLowerCase():i&&Jf.test(a)?a=a.replace(/[A-Z0-9]/g,`-$&`).toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(a)&&(a=a.toLowerCase(),r[a]&&(a=`oninputCapture`)),r[a]=o)}t==`select`&&r.multiple&&Array.isArray(r.value)&&(r.value=of(n.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),t==`select`&&r.defaultValue!=null&&(r.value=of(n.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value})),e.props=r,n.class!=n.className&&(tp.enumerable=`className`in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,`className`,tp))}e.$$typeof=qf,np&&np(e)};var rp=W.__r;W.__r=function(e){rp&&rp(e),e.__c};var ip=[],ap=new Map;function op(e){ip.push(e),ap.forEach(t=>{up(t,e)})}function sp(e){e.isConnected&&e.getRootNode&&cp(e.getRootNode())}function cp(e){let t=ap.get(e);if(!t||!t.isConnected){if(t=e.querySelector(`style[data-fullcalendar]`),!t){t=document.createElement(`style`),t.setAttribute(`data-fullcalendar`,``);let n=fp();n&&(t.nonce=n);let r=e===document?document.head:e,i=e===document?r.querySelector(`script,link[rel=stylesheet],link[as=style],style`):r.firstChild;r.insertBefore(t,i)}ap.set(e,t),lp(t)}}function lp(e){for(let t of ip)up(e,t)}function up(e,t){let{sheet:n}=e,r=n.cssRules.length;t.split(`}`).forEach((e,t)=>{e=e.trim(),e&&n.insertRule(e+`}`,r+t)})}var dp;function fp(){return dp===void 0&&(dp=pp()),dp}function pp(){let e=document.querySelector(`meta[name="csp-nonce"]`);if(e&&e.hasAttribute(`content`))return e.getAttribute(`content`);let t=document.querySelector(`script[nonce]`);return t&&t.nonce||``}typeof document<`u`&&cp(document),op(`:root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}`);var mp=class{constructor(e){this.drainedOption=e,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}request(e){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),e==null?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),e))}pause(e=``){let{pauseDepths:t}=this;t[e]=(t[e]||0)+1,this.clearTimeout()}resume(e=``,t){let{pauseDepths:n}=this;e in n&&(t?delete n[e]:(--n[e],n[e]<=0&&delete n[e]),this.tryDrain())}isPaused(){return Object.keys(this.pauseDepths).length}tryDrain(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained();this.isRunning=!1}}clear(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}}clearTimeout(){this.timeoutId&&=(clearTimeout(this.timeoutId),0)}drained(){this.drainedOption&&this.drainedOption()}};function hp(e){e.parentNode&&e.parentNode.removeChild(e)}function gp(e,t){if(e.closest)return e.closest(t);if(!document.documentElement.contains(e))return null;do{if(_p(e,t))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null}function _p(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}function vp(e,t){let n=e instanceof HTMLElement?[e]:e,r=[];for(let e=0;e<n.length;e+=1){let i=n[e].querySelectorAll(t);for(let e=0;e<i.length;e+=1)r.push(i[e])}return r}var yp=/(top|left|right|bottom|width|height)$/i;function bp(e,t){for(let n in t)xp(e,n,t[n])}function xp(e,t,n){n==null?e.style[t]=``:typeof n==`number`&&yp.test(t)?e.style[t]=`${n}px`:e.style[t]=n}function Sp(e){return e.composedPath?.call(e)[0]??e.target}var Cp=0;function wp(){return Cp+=1,`fc-dom-`+Cp}function Tp(e,t){return n=>{let r=gp(n.target,e);r&&t.call(r,n,r)}}function Ep(e,t,n,r){let i=Tp(n,r);return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}function Dp(e,t,n,r){let i;return Ep(e,`mouseover`,t,(e,t)=>{if(t!==i){i=t,n(e,t);let a=e=>{i=null,r(e,t),t.removeEventListener(`mouseleave`,a)};t.addEventListener(`mouseleave`,a)}})}function Op(e){return Object.assign({onClick:e},kp(e))}function kp(e){return{tabIndex:0,onKeyDown(t){(t.key===`Enter`||t.key===` `)&&(e(t),t.preventDefault())}}}var Ap=0;function jp(){return Ap+=1,String(Ap)}function Mp(e){let t=[],n=[],r,i;for(typeof e==`string`?n=e.split(/\s*,\s*/):typeof e==`function`?n=[e]:Array.isArray(e)&&(n=e),r=0;r<n.length;r+=1)i=n[r],typeof i==`string`?t.push(i.charAt(0)===`-`?{field:i.substring(1),order:-1}:{field:i,order:1}):typeof i==`function`&&t.push({func:i});return t}function Np(e,t,n){let r,i;for(r=0;r<n.length;r+=1)if(i=Pp(e,t,n[r]),i)return i;return 0}function Pp(e,t,n){return n.func?n.func(e,t):Fp(e[n.field],t[n.field])*(n.order||1)}function Fp(e,t){return!e&&!t?0:t==null?-1:e==null?1:typeof e==`string`||typeof t==`string`?String(e).localeCompare(String(t)):e-t}function Ip(e,t){let n=String(e);return`000`.substr(0,t-n.length)+n}function Lp(e,t,n){return typeof e==`function`?e(...t):typeof e==`string`?t.reduce((e,t,n)=>e.replace(`$`+n,t||``),e):n}function Rp(e){return e%1==0}function zp(e){let t=e.querySelector(`.fc-scrollgrid-shrink-frame`),n=e.querySelector(`.fc-scrollgrid-shrink-cushion`);if(!t)throw Error(`needs fc-scrollgrid-shrink-frame className`);if(!n)throw Error(`needs fc-scrollgrid-shrink-cushion className`);return e.getBoundingClientRect().width-t.getBoundingClientRect().width+n.getBoundingClientRect().width}var Bp=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function q(e,t){return typeof e==`string`?Vp(e):typeof e==`object`&&e?Hp(e):typeof e==`number`?Hp({[t||`milliseconds`]:e}):null}function Vp(e){let t=Bp.exec(e);if(t){let e=t[1]?-1:1;return{years:0,months:0,days:e*(t[2]?parseInt(t[2],10):0),milliseconds:e*((t[3]?parseInt(t[3],10):0)*60*60*1e3+(t[4]?parseInt(t[4],10):0)*60*1e3+(t[5]?parseInt(t[5],10):0)*1e3+(t[6]?parseInt(t[6],10):0))}}return null}function Hp(e){let t={years:e.years||e.year||0,months:e.months||e.month||0,days:e.days||e.day||0,milliseconds:(e.hours||e.hour||0)*60*60*1e3+(e.minutes||e.minute||0)*60*1e3+(e.seconds||e.second||0)*1e3+(e.milliseconds||e.millisecond||e.ms||0)},n=e.weeks||e.week;return n&&(t.days+=n*7,t.specifiedWeeks=!0),t}function Up(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function Wp(e,t){return{years:e.years-t.years,months:e.months-t.months,days:e.days-t.days,milliseconds:e.milliseconds-t.milliseconds}}function Gp(e){return qp(e)/365}function Kp(e){return qp(e)/30}function qp(e){return Jp(e)/864e5}function Jp(e){return e.years*(365*864e5)+e.months*(30*864e5)+e.days*864e5+e.milliseconds}function Yp(e){let t=e.milliseconds;if(t){if(t%1e3!=0)return{unit:`millisecond`,value:t};if(t%(1e3*60)!=0)return{unit:`second`,value:t/1e3};if(t%(1e3*60*60)!=0)return{unit:`minute`,value:t/(1e3*60)};if(t)return{unit:`hour`,value:t/(1e3*60*60)}}return e.days?e.specifiedWeeks&&e.days%7==0?{unit:`week`,value:e.days/7}:{unit:`day`,value:e.days}:e.months?{unit:`month`,value:e.months}:e.years?{unit:`year`,value:e.years}:{unit:`millisecond`,value:0}}function Xp(e,t,n){if(e===t)return!0;let r=e.length,i;if(r!==t.length)return!1;for(i=0;i<r;i+=1)if(!(n?n(e[i],t[i]):e[i]===t[i]))return!1;return!0}var Zp=[`sun`,`mon`,`tue`,`wed`,`thu`,`fri`,`sat`];function Qp(e,t){let n=gm(e);return n[2]+=t*7,_m(n)}function J(e,t){let n=gm(e);return n[2]+=t,_m(n)}function $p(e,t){let n=gm(e);return n[6]+=t,_m(n)}function em(e,t){return tm(e,t)/7}function tm(e,t){return(t.valueOf()-e.valueOf())/(1e3*60*60*24)}function nm(e,t){return(t.valueOf()-e.valueOf())/(1e3*60*60)}function rm(e,t){return(t.valueOf()-e.valueOf())/(1e3*60)}function im(e,t){return(t.valueOf()-e.valueOf())/1e3}function am(e,t){let n=Y(e),r=Y(t);return{years:0,months:0,days:Math.round(tm(n,r)),milliseconds:t.valueOf()-r.valueOf()-(e.valueOf()-n.valueOf())}}function om(e,t){let n=sm(e,t);return n!==null&&n%7==0?n/7:null}function sm(e,t){return ym(e)===ym(t)?Math.round(tm(e,t)):null}function Y(e){return _m([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function cm(e){return _m([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}function lm(e){return _m([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}function um(e){return _m([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}function dm(e,t,n){let r=e.getUTCFullYear(),i=fm(e,r,t,n);if(i<1)return fm(e,r-1,t,n);let a=fm(e,r+1,t,n);return a>=1?Math.min(i,a):i}function fm(e,t,n,r){let i=_m([t,0,1+pm(t,n,r)]),a=Y(e),o=Math.round(tm(i,a));return Math.floor(o/7)+1}function pm(e,t,n){let r=7+t-n;return-((7+_m([e,0,r]).getUTCDay()-t)%7)+r-1}function mm(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function hm(e){return new Date(e[0],e[1]||0,e[2]==null?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function gm(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function _m(e){return e.length===1&&(e=e.concat([0])),new Date(Date.UTC(...e))}function vm(e){return!isNaN(e.valueOf())}function ym(e){return e.getUTCHours()*1e3*60*60+e.getUTCMinutes()*1e3*60+e.getUTCSeconds()*1e3+e.getUTCMilliseconds()}function bm(e,t,n=!1){let r=e.toISOString();return r=r.replace(`.000`,``),n&&(r=r.replace(`T00:00:00Z`,``)),r.length>10&&(t==null?r=r.replace(`Z`,``):t!==0&&(r=r.replace(`Z`,Cm(t,!0)))),r}function xm(e){return e.toISOString().replace(/T.*$/,``)}function Sm(e){return e.toISOString().match(/^\d{4}-\d{2}/)[0]}function Cm(e,t=!1){let n=e<0?`-`:`+`,r=Math.abs(e),i=Math.floor(r/60),a=Math.round(r%60);return t?`${n+Ip(i,2)}:${Ip(a,2)}`:`GMT${n}${i}${a?`:${Ip(a,2)}`:``}`}function X(e,t,n){let r,i;return function(...a){if(!r)i=e.apply(this,a);else if(!Xp(r,a)){n&&n(i);let r=e.apply(this,a);(!t||!t(r,i))&&(i=r)}return r=a,i}}function wm(e,t,n){let r,i;return a=>{if(!r)i=e.call(this,a);else if(!ch(r,a)){n&&n(i);let r=e.call(this,a);(!t||!t(r,i))&&(i=r)}return r=a,i}}var Tm={week:3,separator:9,omitZeroMinute:9,meridiem:9,omitCommas:9},Em={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},Dm=/\s*([ap])\.?m\.?/i,Om=/,/g,km=/\s+/g,Am=/\u200e/g,jm=/UTC|GMT/,Mm=class{constructor(e){let t={},n={},r=9;for(let i in e)i in Tm?(n[i]=e[i],Tm[i]<9&&(r=Math.min(Tm[i],r))):(t[i]=e[i],i in Em&&(r=Math.min(Em[i],r)));this.standardDateProps=t,this.extendedSettings=n,this.smallestUnitNum=r,this.buildFormattingFunc=X(Nm)}format(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)}formatRange(e,t,n,r){let{standardDateProps:i,extendedSettings:a}=this,o=zm(e.marker,t.marker,n.calendarSystem);if(!o)return this.format(e,n);let s=o;s>1&&(i.year===`numeric`||i.year===`2-digit`)&&(i.month===`numeric`||i.month===`2-digit`)&&(i.day===`numeric`||i.day===`2-digit`)&&(s=1);let c=this.format(e,n),l=this.format(t,n);if(c===l)return c;let u=Nm(Bm(i,s),a,n),d=u(e),f=u(t),p=Vm(c,d,l,f),m=a.separator||r||n.defaultSeparator||``;return p?p.before+d+m+f+p.after:c+m+l}getSmallestUnit(){switch(this.smallestUnitNum){case 7:case 6:case 5:return`year`;case 4:return`month`;case 3:return`week`;case 2:return`day`;default:return`time`}}};function Nm(e,t,n){let r=Object.keys(e).length;return r===1&&e.timeZoneName===`short`?e=>Cm(e.timeZoneOffset):r===0&&t.week?e=>Rm(n.computeWeekNumber(e.marker),n.weekText,n.weekTextLong,n.locale,t.week):Pm(e,t,n)}function Pm(e,t,n){e=Object.assign({},e),t=Object.assign({},t),Fm(e,t),e.timeZone=`UTC`;let r=new Intl.DateTimeFormat(n.locale.codes,e),i;if(t.omitZeroMinute){let t=Object.assign({},e);delete t.minute,i=new Intl.DateTimeFormat(n.locale.codes,t)}return a=>{let{marker:o}=a,s;return s=i&&!o.getUTCMinutes()?i:r,Im(s.format(o),a,e,t,n)}}function Fm(e,t){e.timeZoneName&&(e.hour||=`2-digit`,e.minute||=`2-digit`),e.timeZoneName===`long`&&(e.timeZoneName=`short`),t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}function Im(e,t,n,r,i){return e=e.replace(Am,``),n.timeZoneName===`short`&&(e=Lm(e,i.timeZone===`UTC`||t.timeZoneOffset==null?`UTC`:Cm(t.timeZoneOffset))),r.omitCommas&&(e=e.replace(Om,``).trim()),r.omitZeroMinute&&(e=e.replace(`:00`,``)),r.meridiem===!1?e=e.replace(Dm,``).trim():r.meridiem===`narrow`?e=e.replace(Dm,(e,t)=>t.toLocaleLowerCase()):r.meridiem===`short`?e=e.replace(Dm,(e,t)=>`${t.toLocaleLowerCase()}m`):r.meridiem===`lowercase`&&(e=e.replace(Dm,e=>e.toLocaleLowerCase())),e=e.replace(km,` `),e=e.trim(),e}function Lm(e,t){let n=!1;return e=e.replace(jm,()=>(n=!0,t)),n||(e+=` ${t}`),e}function Rm(e,t,n,r,i){let a=[];return i===`long`?a.push(n):(i===`short`||i===`narrow`)&&a.push(t),(i===`long`||i===`short`)&&a.push(` `),a.push(r.simpleNumberFormat.format(e)),r.options.direction===`rtl`&&a.reverse(),a.join(``)}function zm(e,t,n){return n.getMarkerYear(e)===n.getMarkerYear(t)?n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerDay(e)===n.getMarkerDay(t)?ym(e)===ym(t)?0:1:2:4:5}function Bm(e,t){let n={};for(let r in e)(!(r in Em)||Em[r]<=t)&&(n[r]=e[r]);return n}function Vm(e,t,n,r){let i=0;for(;i<e.length;){let a=e.indexOf(t,i);if(a===-1)break;let o=e.substr(0,a);i=a+t.length;let s=e.substr(i),c=0;for(;c<n.length;){let e=n.indexOf(r,c);if(e===-1)break;let t=n.substr(0,e);c=e+r.length;let i=n.substr(c);if(o===t&&s===i)return{before:o,after:s}}}return null}function Hm(e,t){let n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}function Um(e,t,n,r){let i=Hm(e,n.calendarSystem);return{date:i,start:i,end:t?Hm(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,defaultSeparator:r||n.defaultSeparator}}var Wm=class{constructor(e){this.cmdStr=e}format(e,t,n){return t.cmdFormatter(this.cmdStr,Um(e,null,t,n))}formatRange(e,t,n,r){return n.cmdFormatter(this.cmdStr,Um(e,t,n,r))}},Gm=class{constructor(e){this.func=e}format(e,t,n){return this.func(Um(e,null,t,n))}formatRange(e,t,n,r){return this.func(Um(e,t,n,r))}};function Z(e){return typeof e==`object`&&e?new Mm(e):typeof e==`string`?new Wm(e):typeof e==`function`?new Gm(e):null}var Km={navLinkDayClick:Q,navLinkWeekClick:Q,duration:q,bootstrapFontAwesome:Q,buttonIcons:Q,customButtons:Q,defaultAllDayEventDuration:q,defaultTimedEventDuration:q,nextDayThreshold:q,scrollTime:q,scrollTimeReset:Boolean,slotMinTime:q,slotMaxTime:q,dayPopoverFormat:Z,slotDuration:q,snapDuration:q,headerToolbar:Q,footerToolbar:Q,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:Z,dayHeaderClassNames:Q,dayHeaderContent:Q,dayHeaderDidMount:Q,dayHeaderWillUnmount:Q,dayCellClassNames:Q,dayCellContent:Q,dayCellDidMount:Q,dayCellWillUnmount:Q,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:Q,weekNumbers:Boolean,weekNumberClassNames:Q,weekNumberContent:Q,weekNumberDidMount:Q,weekNumberWillUnmount:Q,editable:Boolean,viewClassNames:Q,viewDidMount:Q,viewWillUnmount:Q,nowIndicator:Boolean,nowIndicatorSnap:Q,nowIndicatorClassNames:Q,nowIndicatorContent:Q,nowIndicatorDidMount:Q,nowIndicatorWillUnmount:Q,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:Q,locale:Q,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:Q,eventOrder:Mp,eventOrderStrict:Boolean,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:Q,contentHeight:Q,direction:String,weekNumberFormat:Z,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,weekTextLong:String,progressiveEventRendering:Boolean,businessHours:Q,initialDate:Q,now:Q,eventDataTransform:Q,stickyHeaderDates:Q,stickyFooterScrollbar:Q,viewHeight:Q,defaultAllDay:Boolean,eventSourceFailure:Q,eventSourceSuccess:Q,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:Q,eventConstraint:Q,eventAllow:Q,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:Q,eventContent:Q,eventDidMount:Q,eventWillUnmount:Q,selectConstraint:Q,selectOverlap:Q,selectAllow:Q,droppable:Boolean,unselectCancel:String,slotLabelFormat:Q,slotLaneClassNames:Q,slotLaneContent:Q,slotLaneDidMount:Q,slotLaneWillUnmount:Q,slotLabelClassNames:Q,slotLabelContent:Q,slotLabelDidMount:Q,slotLabelWillUnmount:Q,dayMaxEvents:Q,dayMaxEventRows:Q,dayMinWidth:Number,slotLabelInterval:q,allDayText:String,allDayClassNames:Q,allDayContent:Q,allDayDidMount:Q,allDayWillUnmount:Q,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:Z,rerenderDelay:Number,moreLinkText:Q,moreLinkHint:Q,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMaxStack:Number,eventMinHeight:Number,eventMinWidth:Number,eventShortHeight:Number,slotEventOverlap:Boolean,plugins:Q,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:q,hiddenDays:Q,fixedWeekCount:Boolean,validRange:Q,visibleRange:Q,titleFormat:Q,eventInteractive:Boolean,noEventsText:String,viewHint:Q,navLinkHint:Q,closeHint:String,timeHint:String,eventHint:String,moreLinkClick:Q,moreLinkClassNames:Q,moreLinkContent:Q,moreLinkDidMount:Q,moreLinkWillUnmount:Q,monthStartFormat:Z,handleCustomRendering:Q,customRenderingMetaMap:Q,customRenderingReplaces:Boolean},qm={eventDisplay:`auto`,defaultRangeSeparator:` - `,titleRangeSeparator:` – `,defaultTimedEventDuration:`01:00:00`,defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:`00:00:00`,dayHeaders:!0,initialView:``,aspectRatio:1.35,headerToolbar:{start:`title`,center:``,end:`today prev,next`},weekends:!0,weekNumbers:!1,weekNumberCalculation:`local`,editable:!1,nowIndicator:!1,scrollTime:`06:00:00`,scrollTimeReset:!0,slotMinTime:`00:00:00`,slotMaxTime:`24:00:00`,showNonCurrentDates:!0,lazyFetching:!0,startParam:`start`,endParam:`end`,timeZoneParam:`timeZone`,timeZone:`local`,locales:[],locale:``,themeSystem:`standard`,dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:`*`,eventOrder:`start,-duration,allDay,title`,dayPopoverFormat:{month:`long`,day:`numeric`,year:`numeric`},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1,eventMinHeight:15,eventMinWidth:30,eventShortHeight:30,monthStartFormat:{month:`long`,day:`numeric`},nowIndicatorSnap:`auto`},Jm={datesSet:Q,eventsSet:Q,eventAdd:Q,eventChange:Q,eventRemove:Q,windowResize:Q,eventClick:Q,eventMouseEnter:Q,eventMouseLeave:Q,select:Q,unselect:Q,loading:Q,_unmount:Q,_beforeprint:Q,_afterprint:Q,_noEventDrop:Q,_noEventResize:Q,_resize:Q,_scrollRequest:Q},Ym={buttonText:Q,buttonHints:Q,views:Q,plugins:Q,initialEvents:Q,events:Q,eventSources:Q},Xm={headerToolbar:Zm,footerToolbar:Zm,buttonText:Zm,buttonHints:Zm,buttonIcons:Zm,dateIncrement:Zm,plugins:Qm,events:Qm,eventSources:Qm,resources:Qm};function Zm(e,t){return typeof e==`object`&&typeof t==`object`&&e&&t?ch(e,t):e===t}function Qm(e,t){return Array.isArray(e)&&Array.isArray(t)?Xp(e,t):e===t}var $m={type:String,component:Q,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:Q,usesMinMaxTime:Boolean,classNames:Q,content:Q,didMount:Q,willUnmount:Q};function eh(e){return rh(e,Xm)}function th(e,t){let n={},r={};for(let r in t)r in e&&(n[r]=t[r](e[r]));for(let n in e)n in t||(r[n]=e[n]);return{refined:n,extra:r}}function Q(e){return e}var{hasOwnProperty:nh}=Object.prototype;function rh(e,t){let n={};if(t){for(let r in t)if(t[r]===Zm){let t=[];for(let i=e.length-1;i>=0;--i){let a=e[i][r];if(typeof a==`object`&&a)t.unshift(a);else if(a!==void 0){n[r]=a;break}}t.length&&(n[r]=rh(t))}}for(let t=e.length-1;t>=0;--t){let r=e[t];for(let e in r)e in n||(n[e]=r[e])}return n}function ih(e,t){let n={};for(let r in e)t(e[r],r)&&(n[r]=e[r]);return n}function ah(e,t){let n={};for(let r in e)n[r]=t(e[r],r);return n}function oh(e){let t={};for(let n of e)t[n]=!0;return t}function sh(e){let t=[];for(let n in e)t.push(e[n]);return t}function ch(e,t){if(e===t)return!0;for(let n in e)if(nh.call(e,n)&&!(n in t))return!1;for(let n in t)if(nh.call(t,n)&&e[n]!==t[n])return!1;return!0}var lh=/^on[A-Z]/;function uh(e,t){let n=dh(e,t);for(let e of n)if(!lh.test(e))return!1;return!0}function dh(e,t){let n=[];for(let r in e)nh.call(e,r)&&(r in t||n.push(r));for(let r in t)nh.call(t,r)&&e[r]!==t[r]&&n.push(r);return n}function fh(e,t,n={}){if(e===t)return!0;for(let r in t)if(!(r in e&&ph(e[r],t[r],n[r])))return!1;for(let n in e)if(!(n in t))return!1;return!0}function ph(e,t,n){return e===t||n===!0?!0:n?n(e,t):!1}function mh(e,t=0,n,r=1){let i=[];n??=Object.keys(e).length;for(let a=t;a<n;a+=r){let t=e[a];t!==void 0&&i.push(t)}return i}var hh={};function gh(e,t){hh[e]=t}function _h(e){return new hh[e]}gh(`gregory`,class{getMarkerYear(e){return e.getUTCFullYear()}getMarkerMonth(e){return e.getUTCMonth()}getMarkerDay(e){return e.getUTCDate()}arrayToMarker(e){return _m(e)}markerToArray(e){return gm(e)}});var vh=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function yh(e){let t=vh.exec(e);if(t){let e=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?Number(`0.${t[12]}`)*1e3:0));if(vm(e)){let n=null;return t[13]&&(n=(t[15]===`-`?-1:1)*(Number(t[16]||0)*60+Number(t[18]||0))),{marker:e,isTimeUnspecified:!t[6],timeZoneOffset:n}}}return null}var bh=class{constructor(e){let t=this.timeZone=e.timeZone,n=t!==`local`&&t!==`UTC`;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=!!(!n||this.namedTimeZoneImpl),this.calendarSystem=_h(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,e.weekNumberCalculation===`ISO`&&(this.weekDow=1,this.weekDoy=4),typeof e.firstDay==`number`&&(this.weekDow=e.firstDay),typeof e.weekNumberCalculation==`function`&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekText=e.weekText==null?e.locale.options.weekText:e.weekText,this.weekTextLong=(e.weekTextLong==null?e.locale.options.weekTextLong:e.weekTextLong)||this.weekText,this.cmdFormatter=e.cmdFormatter,this.defaultSeparator=e.defaultSeparator}createMarker(e){let t=this.createMarkerMeta(e);return t===null?null:t.marker}createNowMarker(){return this.canComputeOffset?this.timestampToMarker(new Date().valueOf()):_m(mm(new Date))}createMarkerMeta(e){if(typeof e==`string`)return this.parse(e);let t=null;return typeof e==`number`?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=_m(e)),t===null||!vm(t)?null:{marker:t,isTimeUnspecified:!1,forcedTzo:null}}parse(e){let t=yh(e);if(t===null)return null;let{marker:n}=t,r=null;return t.timeZoneOffset!==null&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-t.timeZoneOffset*60*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}}getYear(e){return this.calendarSystem.getMarkerYear(e)}getMonth(e){return this.calendarSystem.getMarkerMonth(e)}getDay(e){return this.calendarSystem.getMarkerDay(e)}add(e,t){let n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)}subtract(e,t){let n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)}addYears(e,t){let n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)}addMonths(e,t){let n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)}diffWholeYears(e,t){let{calendarSystem:n}=this;return ym(e)===ym(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null}diffWholeMonths(e,t){let{calendarSystem:n}=this;return ym(e)===ym(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+(n.getMarkerYear(t)-n.getMarkerYear(e))*12:null}greatestWholeUnit(e,t){let n=this.diffWholeYears(e,t);return n===null?(n=this.diffWholeMonths(e,t),n===null?(n=om(e,t),n===null?(n=sm(e,t),n===null?(n=nm(e,t),Rp(n)?{unit:`hour`,value:n}:(n=rm(e,t),Rp(n)?{unit:`minute`,value:n}:(n=im(e,t),Rp(n)?{unit:`second`,value:n}:{unit:`millisecond`,value:t.valueOf()-e.valueOf()}))):{unit:`day`,value:n}):{unit:`week`,value:n}):{unit:`month`,value:n}):{unit:`year`,value:n}}countDurationsBetween(e,t,n){let r;return n.years&&(r=this.diffWholeYears(e,t),r!==null)?r/Gp(n):n.months&&(r=this.diffWholeMonths(e,t),r!==null)?r/Kp(n):n.days&&(r=sm(e,t),r!==null)?r/qp(n):(t.valueOf()-e.valueOf())/Jp(n)}startOf(e,t){return t===`year`?this.startOfYear(e):t===`month`?this.startOfMonth(e):t===`week`?this.startOfWeek(e):t===`day`?Y(e):t===`hour`?cm(e):t===`minute`?lm(e):t===`second`?um(e):null}startOfYear(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])}startOfMonth(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])}startOfWeek(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])}computeWeekNumber(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):dm(e,this.weekDow,this.weekDoy)}format(e,t,n={}){return t.format({marker:e,timeZoneOffset:n.forcedTzo==null?this.offsetForMarker(e):n.forcedTzo},this)}formatRange(e,t,n,r={}){return r.isEndExclusive&&(t=$p(t,-1)),n.formatRange({marker:e,timeZoneOffset:r.forcedStartTzo==null?this.offsetForMarker(e):r.forcedStartTzo},{marker:t,timeZoneOffset:r.forcedEndTzo==null?this.offsetForMarker(t):r.forcedEndTzo},this,r.defaultSeparator)}formatIso(e,t={}){let n=null;return t.omitTimeZoneOffset||(n=t.forcedTzo==null?this.offsetForMarker(e):t.forcedTzo),bm(e,n,t.omitTime)}timestampToMarker(e){return this.timeZone===`local`?_m(mm(new Date(e))):this.timeZone===`UTC`||!this.namedTimeZoneImpl?new Date(e):_m(this.namedTimeZoneImpl.timestampToArray(e))}offsetForMarker(e){return this.timeZone===`local`?-hm(gm(e)).getTimezoneOffset():this.timeZone===`UTC`?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(gm(e)):null}toDate(e,t){return this.timeZone===`local`?hm(gm(e)):this.timeZone===`UTC`?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-this.namedTimeZoneImpl.offsetForArray(gm(e))*1e3*60):new Date(e.valueOf()-(t||0))}},xh=class{constructor(e){this.iconOverrideOption&&this.setIconOverride(e[this.iconOverrideOption])}setIconOverride(e){let t,n;if(typeof e==`object`&&e){for(n in t=Object.assign({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else e===!1&&(this.iconClasses={})}applyIconOverridePrefix(e){let t=this.iconOverridePrefix;return t&&e.indexOf(t)!==0&&(e=t+e),e}getClass(e){return this.classes[e]||``}getIconClass(e,t){let n;return n=t&&this.rtlIconClasses&&this.rtlIconClasses[e]||this.iconClasses[e],n?`${this.baseIconClass} ${n}`:``}getCustomButtonIconClass(e){let t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption],t)?`${this.baseIconClass} ${this.applyIconOverridePrefix(t)}`:``}};xh.prototype.classes={},xh.prototype.iconClasses={},xh.prototype.baseIconClass=``,xh.prototype.iconOverridePrefix=``;function Sh(e){e();let t=W.debounceRendering,n=[];function r(e){n.push(e)}for(W.debounceRendering=r,hf(G(Ch,{}),document.createElement(`div`));n.length;)n.shift()();W.debounceRendering=t}var Ch=class extends Zd{render(){return G(`div`,{})}componentDidMount(){this.setState({})}};function wh(e){let t=gf(e),n=t.Provider;return t.Provider=function(){let e=!this.getChildContext,t=n.apply(this,arguments);if(e){let e=[];this.shouldComponentUpdate=t=>{this.props.value!==t.value&&e.forEach(e=>{e.context=t.value,e.forceUpdate()})},this.sub=t=>{e.push(t);let n=t.componentWillUnmount;t.componentWillUnmount=()=>{e.splice(e.indexOf(t),1),n&&n.call(t)}}}return t},t}var Th=class{constructor(e,t,n,r){this.execFunc=e,this.emitter=t,this.scrollTime=n,this.scrollTimeReset=r,this.handleScrollRequest=e=>{this.queuedRequest=Object.assign({},this.queuedRequest||{},e),this.drain()},t.on(`_scrollRequest`,this.handleScrollRequest),this.fireInitialScroll()}detach(){this.emitter.off(`_scrollRequest`,this.handleScrollRequest)}update(e){e&&this.scrollTimeReset?this.fireInitialScroll():this.drain()}fireInitialScroll(){this.handleScrollRequest({time:this.scrollTime})}drain(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)}},Eh=wh({});function Dh(e,t,n,r,i,a,o,s,c,l,u,d,f,p){return{dateEnv:i,nowManager:a,options:n,pluginHooks:s,emitter:u,dispatch:c,getCurrentData:l,calendarApi:d,viewSpec:e,viewApi:t,dateProfileGenerator:r,theme:o,isRtl:n.direction===`rtl`,addResizeHandler(e){u.on(`_resize`,e)},removeResizeHandler(e){u.off(`_resize`,e)},createScrollResponder(e){return new Th(e,u,q(n.scrollTime),n.scrollTimeReset)},registerInteractiveComponent:f,unregisterInteractiveComponent:p}}var Oh=class extends Zd{shouldComponentUpdate(e,t){return!fh(this.props,e,this.propEquality)||!fh(this.state,t,this.stateEquality)}safeSetState(e){fh(this.state,Object.assign(Object.assign({},this.state),e),this.stateEquality)||this.setState(e)}};Oh.addPropsEquality=kh,Oh.addStateEquality=Ah,Oh.contextType=Eh,Oh.prototype.propEquality={},Oh.prototype.stateEquality={};var $=class extends Oh{};$.contextType=Eh;function kh(e){let t=Object.create(this.prototype.propEquality);Object.assign(t,e),this.prototype.propEquality=t}function Ah(e){let t=Object.create(this.prototype.stateEquality);Object.assign(t,e),this.prototype.stateEquality=t}function jh(e,t){typeof e==`function`?e(t):e&&(e.current=t)}var Mh=class extends ${constructor(){super(...arguments),this.id=jp(),this.queuedDomNodes=[],this.currentDomNodes=[],this.handleEl=e=>{let{options:t}=this.context,{generatorName:n}=this.props;(!t.customRenderingReplaces||!Nh(n,t))&&this.updateElRef(e)},this.updateElRef=e=>{this.props.elRef&&jh(this.props.elRef,e)}}render(){let{props:e,context:t}=this,{options:n}=t,{customGenerator:r,defaultGenerator:i,renderProps:a}=e,o=Ph(e,[],this.handleEl),s=!1,c,l=[],u;if(r!=null){let e=typeof r==`function`?r(a,G):r;if(e===!0)s=!0;else{let t=e&&typeof e==`object`;t&&`html`in e?o.dangerouslySetInnerHTML={__html:e.html}:t&&`domNodes`in e?l=Array.prototype.slice.call(e.domNodes):(t?Nd(e):typeof e!=`function`)?c=e:u=e}}else s=!Nh(e.generatorName,n);return s&&i&&(c=i(a)),this.queuedDomNodes=l,this.currentGeneratorMeta=u,G(e.elTag,o,c)}componentDidMount(){this.applyQueueudDomNodes(),this.triggerCustomRendering(!0)}componentDidUpdate(){this.applyQueueudDomNodes(),this.triggerCustomRendering(!0)}componentWillUnmount(){this.triggerCustomRendering(!1)}triggerCustomRendering(e){let{props:t,context:n}=this,{handleCustomRendering:r,customRenderingMetaMap:i}=n.options;if(r){let n=this.currentGeneratorMeta??i?.[t.generatorName];n&&r(Object.assign(Object.assign({id:this.id,isActive:e,containerEl:this.base,reportNewContainerEl:this.updateElRef,generatorMeta:n},t),{elClasses:(t.elClasses||[]).filter(Fh)}))}}applyQueueudDomNodes(){let{queuedDomNodes:e,currentDomNodes:t}=this,n=this.base;if(!Xp(e,t)){t.forEach(hp);for(let t of e)n.appendChild(t);this.currentDomNodes=e}}};Mh.addPropsEquality({elClasses:Xp,elStyle:ch,elAttrs:uh,renderProps:ch});function Nh(e,t){return!!(t.handleCustomRendering&&e&&t.customRenderingMetaMap?.[e])}function Ph(e,t,n){let r=Object.assign(Object.assign({},e.elAttrs),{ref:n});return(e.elClasses||t)&&(r.className=(e.elClasses||[]).concat(t||[]).concat(r.className||[]).filter(Boolean).join(` `)),e.elStyle&&(r.style=e.elStyle),r}function Fh(e){return!!e}var Ih=wh(0),Lh=class extends Zd{constructor(){super(...arguments),this.InnerContent=Rh.bind(void 0,this),this.handleEl=e=>{this.el=e,this.props.elRef&&(jh(this.props.elRef,e),e&&this.didMountMisfire&&this.componentDidMount())}}render(){let{props:e}=this,t=zh(e.classNameGenerator,e.renderProps);if(e.children){let n=Ph(e,t,this.handleEl),r=e.children(this.InnerContent,e.renderProps,n);return e.elTag?G(e.elTag,n,r):r}else return G(Mh,Object.assign(Object.assign({},e),{elRef:this.handleEl,elTag:e.elTag||`div`,elClasses:(e.elClasses||[]).concat(t),renderId:this.context}))}componentDidMount(){var e,t;this.el?(t=(e=this.props).didMount)==null||t.call(e,Object.assign(Object.assign({},this.props.renderProps),{el:this.el})):this.didMountMisfire=!0}componentWillUnmount(){var e,t;(t=(e=this.props).willUnmount)==null||t.call(e,Object.assign(Object.assign({},this.props.renderProps),{el:this.el}))}};Lh.contextType=Ih;function Rh(e,t){let n=e.props;return G(Mh,Object.assign({renderProps:n.renderProps,generatorName:n.generatorName,customGenerator:n.customGenerator,defaultGenerator:n.defaultGenerator,renderId:e.context},t))}function zh(e,t){let n=typeof e==`function`?e(t):e||[];return typeof n==`string`?[n]:n}var Bh=class extends ${render(){let{props:e,context:t}=this,{options:n}=t,r={view:t.viewApi};return G(Lh,{elRef:e.elRef,elTag:e.elTag||`div`,elAttrs:e.elAttrs,elClasses:[...Vh(e.viewSpec),...e.elClasses||[]],elStyle:e.elStyle,renderProps:r,classNameGenerator:n.viewClassNames,generatorName:void 0,didMount:n.viewDidMount,willUnmount:n.viewWillUnmount},()=>e.children)}};function Vh(e){return[`fc-${e.type}-view`,`fc-view`]}function Hh(e,t){let n=null,r=null;return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),!n&&!r||n&&r&&r<n?null:{start:n,end:r}}function Uh(e,t){let n=[],{start:r}=t,i,a;for(e.sort(Wh),i=0;i<e.length;i+=1)a=e[i],a.start>r&&n.push({start:r,end:a.start}),a.end>r&&(r=a.end);return r<t.end&&n.push({start:r,end:t.end}),n}function Wh(e,t){return e.start.valueOf()-t.start.valueOf()}function Gh(e,t){let{start:n,end:r}=e,i=null;return t.start!==null&&(n=n===null?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),t.end!=null&&(r=r===null?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(n===null||r===null||n<r)&&(i={start:n,end:r}),i}function Kh(e,t){return(e.end===null||t.start===null||e.end>t.start)&&(e.start===null||t.end===null||e.start<t.end)}function qh(e,t){return(e.start===null||t>=e.start)&&(e.end===null||t<e.end)}function Jh(e,t){return t.start!=null&&e<t.start?t.start:t.end!=null&&e>=t.end?new Date(t.end.valueOf()-1):e}function Yh(e){let t=Math.floor(tm(e.start,e.end))||1,n=Y(e.start);return{start:n,end:J(n,t)}}function Xh(e,t=q(0)){let n=null,r=null;if(e.end){r=Y(e.end);let n=e.end.valueOf()-r.valueOf();n&&n>=Jp(t)&&(r=J(r,1))}return e.start&&(n=Y(e.start),r&&r<=n&&(r=J(n,1))),{start:n,end:r}}function Zh(e){let t=Xh(e);return tm(t.start,t.end)>1}function Qh(e,t,n,r){return r===`year`?q(n.diffWholeYears(e,t),`year`):r===`month`?q(n.diffWholeMonths(e,t),`month`):am(e,t)}var $h=class{constructor(e){this.props=e,this.initHiddenDays()}buildPrev(e,t,n){let{dateEnv:r}=this.props,i=r.subtract(r.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(i,-1,n)}buildNext(e,t,n){let{dateEnv:r}=this.props,i=r.add(r.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(i,1,n)}build(e,t,n=!0){let{props:r}=this,i,a,o,s,c,l;return i=this.buildValidRange(),i=this.trimHiddenDays(i),n&&(e=Jh(e,i)),a=this.buildCurrentRangeInfo(e,t),o=/^(year|month|week|day)$/.test(a.unit),s=this.buildRenderRange(this.trimHiddenDays(a.range),a.unit,o),s=this.trimHiddenDays(s),c=s,r.showNonCurrentDates||(c=Gh(c,a.range)),c=this.adjustActiveRange(c),c=Gh(c,i),l=Kh(a.range,i),qh(s,e)||(e=s.start),{currentDate:e,validRange:i,currentRange:a.range,currentRangeUnit:a.unit,isRangeAllDay:o,activeRange:c,renderRange:s,slotMinTime:r.slotMinTime,slotMaxTime:r.slotMaxTime,isValid:l,dateIncrement:this.buildDateIncrement(a.duration)}}buildValidRange(){let e=this.props.validRangeInput,t=typeof e==`function`?e.call(this.props.calendarApi,this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())):e;return this.refineRange(t)||{start:null,end:null}}buildCurrentRangeInfo(e,t){let{props:n}=this,r=null,i=null,a=null,o;return n.duration?(r=n.duration,i=n.durationUnit,a=this.buildRangeFromDuration(e,t,r,i)):(o=this.props.dayCount)?(i=`day`,a=this.buildRangeFromDayCount(e,t,o)):(a=this.buildCustomVisibleRange(e))?i=n.dateEnv.greatestWholeUnit(a.start,a.end).unit:(r=this.getFallbackDuration(),i=Yp(r).unit,a=this.buildRangeFromDuration(e,t,r,i)),{duration:r,unit:i,range:a}}getFallbackDuration(){return q({day:1})}adjustActiveRange(e){let{dateEnv:t,usesMinMaxTime:n,slotMinTime:r,slotMaxTime:i}=this.props,{start:a,end:o}=e;return n&&(qp(r)<0&&(a=Y(a),a=t.add(a,r)),qp(i)>1&&(o=Y(o),o=J(o,-1),o=t.add(o,i))),{start:a,end:o}}buildRangeFromDuration(e,t,n,r){let{dateEnv:i,dateAlignment:a}=this.props,o,s,c;if(!a){let{dateIncrement:e}=this.props;a=e&&Jp(e)<Jp(n)?Yp(e).unit:r}qp(n)<=1&&this.isHiddenDay(o)&&(o=this.skipHiddenDays(o,t),o=Y(o));function l(){o=i.startOf(e,a),s=i.add(o,n),c={start:o,end:s}}return l(),this.trimHiddenDays(c)||(e=this.skipHiddenDays(e,t),l()),c}buildRangeFromDayCount(e,t,n){let{dateEnv:r,dateAlignment:i}=this.props,a=0,o=e,s;i&&(o=r.startOf(o,i)),o=Y(o),o=this.skipHiddenDays(o,t),s=o;do s=J(s,1),this.isHiddenDay(s)||(a+=1);while(a<n);return{start:o,end:s}}buildCustomVisibleRange(e){let{props:t}=this,n=t.visibleRangeInput,r=typeof n==`function`?n.call(t.calendarApi,t.dateEnv.toDate(e)):n,i=this.refineRange(r);return i&&(i.start==null||i.end==null)?null:i}buildRenderRange(e,t,n){return e}buildDateIncrement(e){let{dateIncrement:t}=this.props,n;return t||((n=this.props.dateAlignment)?q(1,n):e||q({days:1}))}refineRange(e){if(e){let t=Hh(e,this.props.dateEnv);return t&&=Xh(t),t}return null}initHiddenDays(){let e=this.props.hiddenDays||[],t=[],n=0,r;for(this.props.weekends===!1&&e.push(0,6),r=0;r<7;r+=1)(t[r]=e.indexOf(r)!==-1)||(n+=1);if(!n)throw Error(`invalid hiddenDays`);this.isHiddenDayHash=t}trimHiddenDays(e){let{start:t,end:n}=e;return t&&=this.skipHiddenDays(t),n&&=this.skipHiddenDays(n,-1,!0),t==null||n==null||t<n?{start:t,end:n}:null}isHiddenDay(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]}skipHiddenDays(e,t=1,n=!1){for(;this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=J(e,t);return e}};function eg(e,t,n,r){return{instanceId:jp(),defId:e,range:t,forcedStartTzo:n??null,forcedEndTzo:r??null}}function tg(e,t,n,r){for(let i=0;i<r.length;i+=1){let a=r[i].parse(e,n);if(a){let{allDay:n}=e;return n??(n=t,n??(n=a.allDayGuess,n??=!1)),{allDay:n,duration:a.duration,typeData:a.typeData,typeId:i}}}return null}function ng(e,t,n){let{dateEnv:r,pluginHooks:i,options:a}=n,{defs:o,instances:s}=e;s=ih(s,e=>!o[e.defId].recurringDef);for(let e in o){let n=o[e];if(n.recurringDef){let{duration:o}=n.recurringDef;o||=n.allDay?a.defaultAllDayEventDuration:a.defaultTimedEventDuration;let c=rg(n,o,t,r,i.recurringTypes);for(let t of c){let n=eg(e,{start:t,end:r.add(t,o)});s[n.instanceId]=n}}}return{defs:o,instances:s}}function rg(e,t,n,r,i){let a=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r);return e.allDay&&(a=a.map(Y)),a}var ig={id:String,groupId:String,title:String,url:String,interactive:Boolean},ag={start:Q,end:Q,date:Q,allDay:Boolean},og=Object.assign(Object.assign(Object.assign({},ig),ag),{extendedProps:Q});function sg(e,t,n,r,i=lg(n),a,o){let{refined:s,extra:c}=cg(e,n,i),l=fg(t,n),u=tg(s,l,n.dateEnv,n.pluginHooks.recurringTypes);if(u){let e=ug(s,c,t?t.sourceId:``,u.allDay,!!u.duration,n,a);return e.recurringDef={typeId:u.typeId,typeData:u.typeData,duration:u.duration},{def:e,instance:null}}let d=dg(s,l,n,r);if(d){let e=ug(s,c,t?t.sourceId:``,d.allDay,d.hasEnd,n,a),r=eg(e.defId,d.range,d.forcedStartTzo,d.forcedEndTzo);return o&&e.publicId&&o[e.publicId]&&(r.instanceId=o[e.publicId]),{def:e,instance:r}}return null}function cg(e,t,n=lg(t)){return th(e,n)}function lg(e){return Object.assign(Object.assign(Object.assign({},Cg),og),e.pluginHooks.eventRefiners)}function ug(e,t,n,r,i,a,o){let s={title:e.title||``,groupId:e.groupId||``,publicId:e.id||``,url:e.url||``,recurringDef:null,defId:(o&&e.id?o[e.id]:``)||jp(),sourceId:n,allDay:r,hasEnd:i,interactive:e.interactive,ui:Tg(e,a),extendedProps:Object.assign(Object.assign({},e.extendedProps||{}),t)};for(let t of a.pluginHooks.eventDefMemberAdders)Object.assign(s,t(e));return Object.freeze(s.ui.classNames),Object.freeze(s.extendedProps),s}function dg(e,t,n,r){let{allDay:i}=e,a,o=null,s=!1,c,l=null,u=e.start==null?e.date:e.start;if(a=n.dateEnv.createMarkerMeta(u),a)o=a.marker;else if(!r)return null;return e.end!=null&&(c=n.dateEnv.createMarkerMeta(e.end)),i??=t??((!a||a.isTimeUnspecified)&&(!c||c.isTimeUnspecified)),i&&o&&(o=Y(o)),c&&(l=c.marker,i&&(l=Y(l)),o&&l<=o&&(l=null)),l?s=!0:r||(s=n.options.forceEventDuration||!1,l=n.dateEnv.add(o,i?n.options.defaultAllDayEventDuration:n.options.defaultTimedEventDuration)),{allDay:i,hasEnd:s,range:{start:o,end:l},forcedStartTzo:a?a.forcedTzo:null,forcedEndTzo:c?c.forcedTzo:null}}function fg(e,t){let n=null;return e&&(n=e.defaultAllDay),n??=t.options.defaultAllDay,n}function pg(e,t,n,r,i,a){let o=_g(),s=lg(n);for(let c of e){let e=sg(c,t,n,r,s,i,a);e&&mg(e,o)}return o}function mg(e,t=_g()){return t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function hg(e,t){let n=e.instances[t];if(n){let t=e.defs[n.defId],r=yg(e,e=>gg(t,e));return r.defs[t.defId]=t,r.instances[n.instanceId]=n,r}return _g()}function gg(e,t){return!!(e.groupId&&e.groupId===t.groupId)}function _g(){return{defs:{},instances:{}}}function vg(e,t){return{defs:Object.assign(Object.assign({},e.defs),t.defs),instances:Object.assign(Object.assign({},e.instances),t.instances)}}function yg(e,t){let n=ih(e.defs,t);return{defs:n,instances:ih(e.instances,e=>n[e.defId])}}function bg(e,t){let{defs:n,instances:r}=e,i={},a={};for(let e in n)t.defs[e]||(i[e]=n[e]);for(let e in r)!t.instances[e]&&i[r[e].defId]&&(a[e]=r[e]);return{defs:i,instances:a}}function xg(e,t){return Array.isArray(e)?pg(e,null,t,!0):typeof e==`object`&&e?pg([e],null,t,!0):e==null?null:String(e)}function Sg(e){return Array.isArray(e)?e:typeof e==`string`?e.split(/\s+/):[]}var Cg={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:Q,overlap:Q,allow:Q,className:Sg,classNames:Sg,color:String,backgroundColor:String,borderColor:String,textColor:String},wg={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:``,borderColor:``,textColor:``,classNames:[]};function Tg(e,t){let n=xg(e.constraint,t);return{display:e.display||null,startEditable:e.startEditable==null?e.editable:e.startEditable,durationEditable:e.durationEditable==null?e.editable:e.durationEditable,constraints:n==null?[]:[n],overlap:e.overlap==null?null:e.overlap,allows:e.allow==null?[]:[e.allow],backgroundColor:e.backgroundColor||e.color||``,borderColor:e.borderColor||e.color||``,textColor:e.textColor||``,classNames:(e.className||[]).concat(e.classNames||[])}}function Eg(e){return e.reduce(Dg,wg)}function Dg(e,t){return{display:t.display==null?e.display:t.display,startEditable:t.startEditable==null?e.startEditable:t.startEditable,durationEditable:t.durationEditable==null?e.durationEditable:t.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:typeof t.overlap==`boolean`?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var Og={id:String,defaultAllDay:Boolean,url:String,format:String,events:Q,eventDataTransform:Q,success:Q,failure:Q};function kg(e,t,n=Ag(t)){let r;if(typeof e==`string`?r={url:e}:typeof e==`function`||Array.isArray(e)?r={events:e}:typeof e==`object`&&e&&(r=e),r){let{refined:i,extra:a}=th(r,n),o=jg(i,t);if(o)return{_raw:e,isFetching:!1,latestFetchId:``,fetchRange:null,defaultAllDay:i.defaultAllDay,eventDataTransform:i.eventDataTransform,success:i.success,failure:i.failure,publicId:i.id||``,sourceId:jp(),sourceDefId:o.sourceDefId,meta:o.meta,ui:Tg(i,t),extendedProps:a}}return null}function Ag(e){return Object.assign(Object.assign(Object.assign({},Cg),Og),e.pluginHooks.eventSourceRefiners)}function jg(e,t){let n=t.pluginHooks.eventSourceDefs;for(let t=n.length-1;t>=0;--t){let r=n[t].parseMeta(e);if(r)return{sourceDefId:t,meta:r}}return null}function Mg(e,t,n,r,i){switch(t.type){case`RECEIVE_EVENTS`:return Ng(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i);case`RESET_RAW_EVENTS`:return Pg(e,n[t.sourceId],t.rawEvents,r.activeRange,i);case`ADD_EVENTS`:return Lg(e,t.eventStore,r?r.activeRange:null,i);case`RESET_EVENTS`:return t.eventStore;case`MERGE_EVENTS`:return vg(e,t.eventStore);case`PREV`:case`NEXT`:case`CHANGE_DATE`:case`CHANGE_VIEW_TYPE`:return r?ng(e,r.activeRange,i):e;case`REMOVE_EVENTS`:return bg(e,t.eventStore);case`REMOVE_EVENT_SOURCE`:return zg(e,t.sourceId);case`REMOVE_ALL_EVENT_SOURCES`:return yg(e,e=>!e.sourceId);case`REMOVE_ALL_EVENTS`:return _g();default:return e}}function Ng(e,t,n,r,i,a){if(t&&n===t.latestFetchId){let n=pg(Fg(i,t,a),t,a);return r&&(n=ng(n,r,a)),vg(zg(e,t.sourceId),n)}return e}function Pg(e,t,n,r,i){let{defIdMap:a,instanceIdMap:o}=Bg(e);return ng(pg(Fg(n,t,i),t,i,!1,a,o),r,i)}function Fg(e,t,n){let r=n.options.eventDataTransform,i=t?t.eventDataTransform:null;return i&&(e=Ig(e,i)),r&&(e=Ig(e,r)),e}function Ig(e,t){let n;if(!t)n=e;else{n=[];for(let r of e){let e=t(r);e?n.push(e):e??n.push(r)}}return n}function Lg(e,t,n,r){return n&&(t=ng(t,n,r)),vg(e,t)}function Rg(e,t,n){let{defs:r}=e;return{defs:r,instances:ah(e.instances,e=>r[e.defId].allDay?e:Object.assign(Object.assign({},e),{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo}))}}function zg(e,t){return yg(e,e=>e.sourceId!==t)}function Bg(e){let{defs:t,instances:n}=e,r={},i={};for(let e in t){let{publicId:n}=t[e];n&&(r[n]=e)}for(let e in n){let{publicId:r}=t[n[e].defId];r&&(i[r]=e)}return{defIdMap:r,instanceIdMap:i}}var Vg=class{constructor(){this.handlers={},this.thisContext=null}setThisContext(e){this.thisContext=e}setOptions(e){this.options=e}on(e,t){Hg(this.handlers,e,t)}off(e,t){Ug(this.handlers,e,t)}trigger(e,...t){let n=this.handlers[e]||[],r=this.options&&this.options[e],i=[].concat(r||[],n);for(let e of i)e.apply(this.thisContext,t)}hasHandlers(e){return!!(this.handlers[e]&&this.handlers[e].length||this.options&&this.options[e])}};function Hg(e,t,n){(e[t]||(e[t]=[])).push(n)}function Ug(e,t,n){n?e[t]&&(e[t]=e[t].filter(e=>e!==n)):delete e[t]}var Wg={startTime:`09:00`,endTime:`17:00`,daysOfWeek:[1,2,3,4,5],display:`inverse-background`,classNames:`fc-non-business`,groupId:`_businessHours`};function Gg(e,t){return pg(Kg(e),null,t)}function Kg(e){let t;return t=e===!0?[{}]:Array.isArray(e)?e.filter(e=>e.daysOfWeek):typeof e==`object`&&e?[e]:[],t=t.map(e=>Object.assign(Object.assign({},Wg),e)),t}function qg(e,t,n){n.emitter.trigger(`select`,Object.assign(Object.assign({},Yg(e,n)),{jsEvent:t?t.origEvent:null,view:n.viewApi||n.calendarApi.view}))}function Jg(e,t){t.emitter.trigger(`unselect`,{jsEvent:e?e.origEvent:null,view:t.viewApi||t.calendarApi.view})}function Yg(e,t){let n={};for(let r of t.pluginHooks.dateSpanTransforms)Object.assign(n,r(e,t));return Object.assign(n,S_(e,t.dateEnv)),n}function Xg(e,t,n){let{dateEnv:r,options:i}=n,a=t;return e?(a=Y(a),a=r.add(a,i.defaultAllDayEventDuration)):a=r.add(a,i.defaultTimedEventDuration),a}function Zg(e,t,n,r){let i=s_(e.defs,t),a=_g();for(let t in e.defs){let o=e.defs[t];a.defs[t]=Qg(o,i[t],n,r)}for(let t in e.instances){let o=e.instances[t],s=a.defs[o.defId];a.instances[t]=$g(o,s,i[o.defId],n,r)}return a}function Qg(e,t,n,r){let i=n.standardProps||{};i.hasEnd==null&&t.durationEditable&&(n.startDelta||n.endDelta)&&(i.hasEnd=!0);let a=Object.assign(Object.assign(Object.assign({},e),i),{ui:Object.assign(Object.assign({},e.ui),i.ui)});n.extendedProps&&(a.extendedProps=Object.assign(Object.assign({},a.extendedProps),n.extendedProps));for(let e of r.pluginHooks.eventDefMutationAppliers)e(a,n,r);return!a.hasEnd&&r.options.forceEventDuration&&(a.hasEnd=!0),a}function $g(e,t,n,r,i){let{dateEnv:a}=i,o=r.standardProps&&r.standardProps.allDay===!0,s=r.standardProps&&r.standardProps.hasEnd===!1,c=Object.assign({},e);return o&&(c.range=Yh(c.range)),r.datesDelta&&n.startEditable&&(c.range={start:a.add(c.range.start,r.datesDelta),end:a.add(c.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(c.range={start:a.add(c.range.start,r.startDelta),end:c.range.end}),r.endDelta&&n.durationEditable&&(c.range={start:c.range.start,end:a.add(c.range.end,r.endDelta)}),s&&(c.range={start:c.range.start,end:Xg(t.allDay,c.range.start,i)}),t.allDay&&(c.range={start:Y(c.range.start),end:Y(c.range.end)}),c.range.end<c.range.start&&(c.range.end=Xg(t.allDay,c.range.start,i)),c}var e_=class{constructor(e,t){this.context=e,this.internalEventSource=t}remove(){this.context.dispatch({type:`REMOVE_EVENT_SOURCE`,sourceId:this.internalEventSource.sourceId})}refetch(){this.context.dispatch({type:`FETCH_EVENT_SOURCES`,sourceIds:[this.internalEventSource.sourceId],isRefetch:!0})}get id(){return this.internalEventSource.publicId}get url(){return this.internalEventSource.meta.url}get format(){return this.internalEventSource.meta.format}},t_=class e{constructor(e,t,n){this._context=e,this._def=t,this._instance=n||null}setProp(e,t){if(e in ag)console.warn(`Could not set date-related prop 'name'. Use one of the date-related methods instead.`);else if(e===`id`)t=ig[e](t),this.mutate({standardProps:{publicId:t}});else if(e in ig)t=ig[e](t),this.mutate({standardProps:{[e]:t}});else if(e in Cg){let n=Cg[e](t);n=e===`color`?{backgroundColor:t,borderColor:t}:e===`editable`?{startEditable:t,durationEditable:t}:{[e]:t},this.mutate({standardProps:{ui:n}})}else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`)}setExtendedProp(e,t){this.mutate({extendedProps:{[e]:t}})}setStart(e,t={}){let{dateEnv:n}=this._context,r=n.createMarker(e);if(r&&this._instance){let e=this._instance.range,i=Qh(e.start,r,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}}setEnd(e,t={}){let{dateEnv:n}=this._context,r;if(!(e!=null&&(r=n.createMarker(e),!r))&&this._instance)if(r){let e=Qh(this._instance.range.end,r,n,t.granularity);this.mutate({endDelta:e})}else this.mutate({standardProps:{hasEnd:!1}})}setDates(e,t,n={}){let{dateEnv:r}=this._context,i={allDay:n.allDay},a=r.createMarker(e),o;if(a&&!(t!=null&&(o=r.createMarker(t),!o))&&this._instance){let e=this._instance.range;n.allDay===!0&&(e=Yh(e));let t=Qh(e.start,a,r,n.granularity);if(o){let a=Qh(e.end,o,r,n.granularity);Up(t,a)?this.mutate({datesDelta:t,standardProps:i}):this.mutate({startDelta:t,endDelta:a,standardProps:i})}else i.hasEnd=!1,this.mutate({datesDelta:t,standardProps:i})}}moveStart(e){let t=q(e);t&&this.mutate({startDelta:t})}moveEnd(e){let t=q(e);t&&this.mutate({endDelta:t})}moveDates(e){let t=q(e);t&&this.mutate({datesDelta:t})}setAllDay(e,t={}){let n={allDay:e},{maintainDuration:r}=t;r??=this._context.options.allDayMaintainDuration,this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})}formatRange(e){let{dateEnv:t}=this._context,n=this._instance,r=Z(e);return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})}mutate(t){let n=this._instance;if(n){let r=this._def,i=this._context,{eventStore:a}=i.getCurrentData(),o=hg(a,n.instanceId);o=Zg(o,{"":{display:``,startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:``,borderColor:``,textColor:``,classNames:[]}},t,i);let s=new e(i,r,n);this._def=o.defs[r.defId],this._instance=o.instances[n.instanceId],i.dispatch({type:`MERGE_EVENTS`,eventStore:o}),i.emitter.trigger(`eventChange`,{oldEvent:s,event:this,relatedEvents:r_(o,i,n),revert(){i.dispatch({type:`RESET_EVENTS`,eventStore:a})}})}}remove(){let e=this._context,t=n_(this);e.dispatch({type:`REMOVE_EVENTS`,eventStore:t}),e.emitter.trigger(`eventRemove`,{event:this,relatedEvents:[],revert(){e.dispatch({type:`MERGE_EVENTS`,eventStore:t})}})}get source(){let{sourceId:e}=this._def;return e?new e_(this._context,this._context.getCurrentData().eventSources[e]):null}get start(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null}get end(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null}get startStr(){let e=this._instance;return e?this._context.dateEnv.formatIso(e.range.start,{omitTime:this._def.allDay,forcedTzo:e.forcedStartTzo}):``}get endStr(){let e=this._instance;return e&&this._def.hasEnd?this._context.dateEnv.formatIso(e.range.end,{omitTime:this._def.allDay,forcedTzo:e.forcedEndTzo}):``}get id(){return this._def.publicId}get groupId(){return this._def.groupId}get allDay(){return this._def.allDay}get title(){return this._def.title}get url(){return this._def.url}get display(){return this._def.ui.display||`auto`}get startEditable(){return this._def.ui.startEditable}get durationEditable(){return this._def.ui.durationEditable}get constraint(){return this._def.ui.constraints[0]||null}get overlap(){return this._def.ui.overlap}get allow(){return this._def.ui.allows[0]||null}get backgroundColor(){return this._def.ui.backgroundColor}get borderColor(){return this._def.ui.borderColor}get textColor(){return this._def.ui.textColor}get classNames(){return this._def.ui.classNames}get extendedProps(){return this._def.extendedProps}toPlainObject(e={}){let t=this._def,{ui:n}=t,{startStr:r,endStr:i}=this,a={allDay:t.allDay};return t.title&&(a.title=t.title),r&&(a.start=r),i&&(a.end=i),t.publicId&&(a.id=t.publicId),t.groupId&&(a.groupId=t.groupId),t.url&&(a.url=t.url),n.display&&n.display!==`auto`&&(a.display=n.display),e.collapseColor&&n.backgroundColor&&n.backgroundColor===n.borderColor?a.color=n.backgroundColor:(n.backgroundColor&&(a.backgroundColor=n.backgroundColor),n.borderColor&&(a.borderColor=n.borderColor)),n.textColor&&(a.textColor=n.textColor),n.classNames.length&&(a.classNames=n.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?Object.assign(a,t.extendedProps):a.extendedProps=t.extendedProps),a}toJSON(){return this.toPlainObject()}};function n_(e){let t=e._def,n=e._instance;return{defs:{[t.defId]:t},instances:n?{[n.instanceId]:n}:{}}}function r_(e,t,n){let{defs:r,instances:i}=e,a=[],o=n?n.instanceId:``;for(let e in i){let n=i[e],s=r[n.defId];n.instanceId!==o&&a.push(new t_(t,s,n))}return a}function i_(e,t,n,r){let i={},a={},o={},s=[],c=[],l=s_(e.defs,t);for(let t in e.defs){let n=e.defs[t];l[n.defId].display===`inverse-background`&&(n.groupId?(i[n.groupId]=[],o[n.groupId]||(o[n.groupId]=n)):a[t]=[])}for(let t in e.instances){let o=e.instances[t],u=e.defs[o.defId],d=l[u.defId],f=o.range,p=!u.allDay&&r?Xh(f,r):f,m=Gh(p,n);m&&(d.display===`inverse-background`?u.groupId?i[u.groupId].push(m):a[o.defId].push(m):d.display!==`none`&&(d.display===`background`?s:c).push({def:u,ui:d,instance:o,range:m,isStart:p.start&&p.start.valueOf()===m.start.valueOf(),isEnd:p.end&&p.end.valueOf()===m.end.valueOf()}))}for(let e in i){let t=i[e],r=Uh(t,n);for(let t of r){let n=o[e],r=l[n.defId];s.push({def:n,ui:r,instance:null,range:t,isStart:!1,isEnd:!1})}}for(let t in a){let r=a[t],i=Uh(r,n);for(let n of i)s.push({def:e.defs[t],ui:l[t],instance:null,range:n,isStart:!1,isEnd:!1})}return{bg:s,fg:c}}function a_(e,t){e.fcSeg=t}function o_(e){return e.fcSeg||e.parentNode.fcSeg||null}function s_(e,t){return ah(e,e=>c_(e,t))}function c_(e,t){let n=[];return t[``]&&n.push(t[``]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Eg(n)}function l_(e,t){let n=e.map(u_);return n.sort((e,n)=>Np(e,n,t)),n.map(e=>e._seg)}function u_(e){let{eventRange:t}=e,n=t.def,r=t.instance?t.instance.range:t.range,i=r.start?r.start.valueOf():0,a=r.end?r.end.valueOf():0;return Object.assign(Object.assign(Object.assign({},n.extendedProps),n),{id:n.publicId,start:i,end:a,duration:a-i,allDay:Number(n.allDay),_seg:e})}function d_(e,t){let{pluginHooks:n}=t,r=n.isDraggableTransformers,{def:i,ui:a}=e.eventRange,o=a.startEditable;for(let e of r)o=e(o,i,a,t);return o}function f_(e,t){return e.isStart&&e.eventRange.ui.durationEditable&&t.options.eventResizableFromStart}function p_(e,t){return e.isEnd&&e.eventRange.ui.durationEditable}function m_(e,t,n,r,i,a,o){let{dateEnv:s,options:c}=n,{displayEventTime:l,displayEventEnd:u}=c,d=e.eventRange.def,f=e.eventRange.instance;l??=r!==!1,u??=i!==!1;let p=f.range.start,m=f.range.end,h=a||e.start||e.eventRange.range.start,g=o||e.end||e.eventRange.range.end,_=Y(p).valueOf()===Y(h).valueOf(),v=Y($p(m,-1)).valueOf()===Y($p(g,-1)).valueOf();return l&&!d.allDay&&(_||v)?(h=_?p:h,g=v?m:g,u&&d.hasEnd?s.formatRange(h,g,t,{forcedStartTzo:a?null:f.forcedStartTzo,forcedEndTzo:o?null:f.forcedEndTzo}):s.format(h,t,{forcedTzo:a?null:f.forcedStartTzo})):``}function h_(e,t,n){let r=e.eventRange.range;return{isPast:r.end<=(n||t.start),isFuture:r.start>=(n||t.end),isToday:t&&qh(t,r.start)}}function g_(e){let t=[`fc-event`];return e.isMirror&&t.push(`fc-event-mirror`),e.isDraggable&&t.push(`fc-event-draggable`),(e.isStartResizable||e.isEndResizable)&&t.push(`fc-event-resizable`),e.isDragging&&t.push(`fc-event-dragging`),e.isResizing&&t.push(`fc-event-resizing`),e.isSelected&&t.push(`fc-event-selected`),e.isStart&&t.push(`fc-event-start`),e.isEnd&&t.push(`fc-event-end`),e.isPast&&t.push(`fc-event-past`),e.isToday&&t.push(`fc-event-today`),e.isFuture&&t.push(`fc-event-future`),t}function __(e){return e.instance?e.instance.instanceId:`${e.def.defId}:${e.range.start.toISOString()}`}function v_(e,t){let{def:n,instance:r}=e.eventRange,{url:i}=n;if(i)return{href:i};let{emitter:a,options:o}=t,{eventInteractive:s}=o;return s??(s=n.interactive,s??=!!a.hasHandlers(`eventClick`)),s?kp(e=>{a.trigger(`eventClick`,{el:e.target,event:new t_(t,n,r),jsEvent:e,view:t.viewApi})}):{}}var y_={start:Q,end:Q,allDay:Boolean};function b_(e,t,n){let r=x_(e,t),{range:i}=r;if(!i.start)return null;if(!i.end){if(n==null)return null;i.end=t.add(i.start,n)}return r}function x_(e,t){let{refined:n,extra:r}=th(e,y_),i=n.start?t.createMarkerMeta(n.start):null,a=n.end?t.createMarkerMeta(n.end):null,{allDay:o}=n;return o??=i&&i.isTimeUnspecified&&(!a||a.isTimeUnspecified),Object.assign({range:{start:i?i.marker:null,end:a?a.marker:null},allDay:o},r)}function S_(e,t){return Object.assign(Object.assign({},w_(e.range,t,e.allDay)),{allDay:e.allDay})}function C_(e,t,n){return Object.assign(Object.assign({},w_(e,t,n)),{timeZone:t.timeZone})}function w_(e,t,n){return{start:t.toDate(e.start),end:t.toDate(e.end),startStr:t.formatIso(e.start,{omitTime:n}),endStr:t.formatIso(e.end,{omitTime:n})}}function T_(e,t,n){let r=cg({editable:!1},n),i=ug(r.refined,r.extra,``,e.allDay,!0,n);return{def:i,ui:c_(i,t),instance:eg(i.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function E_(e,t,n){let r=!1,i=function(e){r||(r=!0,t(e))},a=function(e){r||(r=!0,n(e))},o=e(i,a);o&&typeof o.then==`function`&&o.then(i,a)}var D_=class extends Error{constructor(e,t){super(e),this.response=t}};function O_(e,t,n){e=e.toUpperCase();let r={method:e};return e===`GET`?t+=(t.indexOf(`?`)===-1?`?`:`&`)+new URLSearchParams(n):(r.body=new URLSearchParams(n),r.headers={"Content-Type":`application/x-www-form-urlencoded`}),fetch(t,r).then(e=>{if(e.ok)return e.json().then(t=>[t,e],()=>{throw new D_(`Failure parsing JSON`,e)});throw new D_(`Request failed`,e)})}var k_;function A_(){return k_??=j_(),k_}function j_(){if(typeof document>`u`)return!0;let e=document.createElement(`div`);e.style.position=`absolute`,e.style.top=`0px`,e.style.left=`0px`,e.innerHTML=`<table><tr><td><div></div></td></tr></table>`,e.querySelector(`table`).style.height=`100px`,e.querySelector(`div`).style.height=`100%`,document.body.appendChild(e);let t=e.querySelector(`div`).offsetHeight>0;return document.body.removeChild(e),t}var M_=class extends ${constructor(){super(...arguments),this.state={forPrint:!1},this.handleBeforePrint=()=>{Sh(()=>{this.setState({forPrint:!0})})},this.handleAfterPrint=()=>{Sh(()=>{this.setState({forPrint:!1})})}}render(){let{props:e}=this,{options:t}=e,{forPrint:n}=this.state,r=n||t.height===`auto`||t.contentHeight===`auto`,i=!r&&t.height!=null?t.height:``,a=[`fc`,n?`fc-media-print`:`fc-media-screen`,`fc-direction-${t.direction}`,e.theme.getClass(`root`)];return A_()||a.push(`fc-liquid-hack`),e.children(a,i,r,n)}componentDidMount(){let{emitter:e}=this.props;e.on(`_beforeprint`,this.handleBeforePrint),e.on(`_afterprint`,this.handleAfterPrint)}componentWillUnmount(){let{emitter:e}=this.props;e.off(`_beforeprint`,this.handleBeforePrint),e.off(`_afterprint`,this.handleAfterPrint)}},N_=class{constructor(e){this.component=e.component,this.isHitComboAllowed=e.isHitComboAllowed||null}destroy(){}};function P_(e,t){return{component:e,el:t.el,useEventCenter:t.useEventCenter==null?!0:t.useEventCenter,isHitComboAllowed:t.isHitComboAllowed||null}}var F_={},I_=class extends Zd{constructor(e,t){super(e,t),this.handleRefresh=()=>{let e=this.computeTiming();e.state.nowDate.valueOf()!==this.state.nowDate.valueOf()&&this.setState(e.state),this.clearTimeout(),this.setTimeout(e.waitMs)},this.handleVisibilityChange=()=>{document.hidden||this.handleRefresh()},this.state=this.computeTiming().state}render(){let{props:e,state:t}=this;return e.children(t.nowDate,t.todayRange)}componentDidMount(){this.setTimeout(),this.context.nowManager.addResetListener(this.handleRefresh),document.addEventListener(`visibilitychange`,this.handleVisibilityChange)}componentDidUpdate(e){e.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())}componentWillUnmount(){this.clearTimeout(),this.context.nowManager.removeResetListener(this.handleRefresh),document.removeEventListener(`visibilitychange`,this.handleVisibilityChange)}computeTiming(){let{props:e,context:t}=this,n=t.nowManager.getDateMarker(),{nowIndicatorSnap:r}=t.options;r===`auto`&&(r=/year|month|week|day/.test(e.unit)||(e.unitValue||1)===1);let i,a;return r?(i=t.dateEnv.startOf(n,e.unit),a=t.dateEnv.add(i,q(1,e.unit)).valueOf()-n.valueOf()):(i=n,a=1e3*60),a=Math.min(1e3*60*60*24,a),{state:{nowDate:i,todayRange:L_(i)},waitMs:a}}setTimeout(e=this.computeTiming().waitMs){this.timeoutId=setTimeout(()=>{let e=this.computeTiming();this.setState(e.state,()=>{this.setTimeout(e.waitMs)})},e)}clearTimeout(){this.timeoutId&&clearTimeout(this.timeoutId)}};I_.contextType=Eh;function L_(e){let t=Y(e);return{start:t,end:J(t,1)}}var R_=class{getCurrentData(){return this.currentDataManager.getCurrentData()}dispatch(e){this.currentDataManager.dispatch(e)}get view(){return this.getCurrentData().viewApi}batchRendering(e){e()}updateSize(){this.trigger(`_resize`,!0)}setOption(e,t){this.dispatch({type:`SET_OPTION`,optionName:e,rawOptionValue:t})}getOption(e){return this.currentDataManager.currentCalendarOptionsInput[e]}getAvailableLocaleCodes(){return Object.keys(this.getCurrentData().availableRawLocales)}on(e,t){let{currentDataManager:n}=this;n.currentCalendarOptionsRefiners[e]?n.emitter.on(e,t):console.warn(`Unknown listener name '${e}'`)}off(e,t){this.currentDataManager.emitter.off(e,t)}trigger(e,...t){this.currentDataManager.emitter.trigger(e,...t)}changeView(e,t){this.batchRendering(()=>{if(this.unselect(),t)if(t.start&&t.end)this.dispatch({type:`CHANGE_VIEW_TYPE`,viewType:e}),this.dispatch({type:`SET_OPTION`,optionName:`visibleRange`,rawOptionValue:t});else{let{dateEnv:n}=this.getCurrentData();this.dispatch({type:`CHANGE_VIEW_TYPE`,viewType:e,dateMarker:n.createMarker(t)})}else this.dispatch({type:`CHANGE_VIEW_TYPE`,viewType:e})})}zoomTo(e,t){let n=this.getCurrentData(),r;t||=`day`,r=n.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),r?this.dispatch({type:`CHANGE_VIEW_TYPE`,viewType:r.type,dateMarker:e}):this.dispatch({type:`CHANGE_DATE`,dateMarker:e})}getUnitViewSpec(e){let{viewSpecs:t,toolbarConfig:n}=this.getCurrentData(),r=[].concat(n.header?n.header.viewsWithButtons:[],n.footer?n.footer.viewsWithButtons:[]),i,a;for(let e in t)r.push(e);for(i=0;i<r.length;i+=1)if(a=t[r[i]],a&&a.singleUnit===e)return a;return null}prev(){this.unselect(),this.dispatch({type:`PREV`})}next(){this.unselect(),this.dispatch({type:`NEXT`})}prevYear(){let e=this.getCurrentData();this.unselect(),this.dispatch({type:`CHANGE_DATE`,dateMarker:e.dateEnv.addYears(e.currentDate,-1)})}nextYear(){let e=this.getCurrentData();this.unselect(),this.dispatch({type:`CHANGE_DATE`,dateMarker:e.dateEnv.addYears(e.currentDate,1)})}today(){let e=this.getCurrentData();this.unselect(),this.dispatch({type:`CHANGE_DATE`,dateMarker:e.nowManager.getDateMarker()})}gotoDate(e){let t=this.getCurrentData();this.unselect(),this.dispatch({type:`CHANGE_DATE`,dateMarker:t.dateEnv.createMarker(e)})}incrementDate(e){let t=this.getCurrentData(),n=q(e);n&&(this.unselect(),this.dispatch({type:`CHANGE_DATE`,dateMarker:t.dateEnv.add(t.currentDate,n)}))}getDate(){let e=this.getCurrentData();return e.dateEnv.toDate(e.currentDate)}formatDate(e,t){let{dateEnv:n}=this.getCurrentData();return n.format(n.createMarker(e),Z(t))}formatRange(e,t,n){let{dateEnv:r}=this.getCurrentData();return r.formatRange(r.createMarker(e),r.createMarker(t),Z(n),n)}formatIso(e,t){let{dateEnv:n}=this.getCurrentData();return n.formatIso(n.createMarker(e),{omitTime:t})}select(e,t){let n;n=t==null?e.start==null?{start:e,end:null}:e:{start:e,end:t};let r=this.getCurrentData(),i=b_(n,r.dateEnv,q({days:1}));i&&(this.dispatch({type:`SELECT_DATES`,selection:i}),qg(i,null,r))}unselect(e){let t=this.getCurrentData();t.dateSelection&&(this.dispatch({type:`UNSELECT_DATES`}),Jg(e,t))}addEvent(e,t){if(e instanceof t_){let t=e._def,n=e._instance;return this.getCurrentData().eventStore.defs[t.defId]||(this.dispatch({type:`ADD_EVENTS`,eventStore:mg({def:t,instance:n})}),this.triggerEventAdd(e)),e}let n=this.getCurrentData(),r;if(t instanceof e_)r=t.internalEventSource;else if(typeof t==`boolean`)t&&([r]=sh(n.eventSources));else if(t!=null){let e=this.getEventSourceById(t);if(!e)return console.warn(`Could not find an event source with ID "${t}"`),null;r=e.internalEventSource}let i=sg(e,r,n,!1);if(i){let e=new t_(n,i.def,i.def.recurringDef?null:i.instance);return this.dispatch({type:`ADD_EVENTS`,eventStore:mg(i)}),this.triggerEventAdd(e),e}return null}triggerEventAdd(e){let{emitter:t}=this.getCurrentData();t.trigger(`eventAdd`,{event:e,relatedEvents:[],revert:()=>{this.dispatch({type:`REMOVE_EVENTS`,eventStore:n_(e)})}})}getEventById(e){let t=this.getCurrentData(),{defs:n,instances:r}=t.eventStore;e=String(e);for(let i in n){let a=n[i];if(a.publicId===e){if(a.recurringDef)return new t_(t,a,null);for(let e in r){let n=r[e];if(n.defId===a.defId)return new t_(t,a,n)}}}return null}getEvents(){let e=this.getCurrentData();return r_(e.eventStore,e)}removeAllEvents(){this.dispatch({type:`REMOVE_ALL_EVENTS`})}getEventSources(){let e=this.getCurrentData(),t=e.eventSources,n=[];for(let r in t)n.push(new e_(e,t[r]));return n}getEventSourceById(e){let t=this.getCurrentData(),n=t.eventSources;e=String(e);for(let r in n)if(n[r].publicId===e)return new e_(t,n[r]);return null}addEventSource(e){let t=this.getCurrentData();if(e instanceof e_)return t.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:`ADD_EVENT_SOURCES`,sources:[e.internalEventSource]}),e;let n=kg(e,t);return n?(this.dispatch({type:`ADD_EVENT_SOURCES`,sources:[n]}),new e_(t,n)):null}removeAllEventSources(){this.dispatch({type:`REMOVE_ALL_EVENT_SOURCES`})}refetchEvents(){this.dispatch({type:`FETCH_EVENT_SOURCES`,isRefetch:!0})}scrollToTime(e){let t=q(e);t&&this.trigger(`_scrollRequest`,{time:t})}};function z_(e,t){let n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom?n:!1}function B_(e,t,n,r){return{dow:e.getUTCDay(),isDisabled:!!(r&&(!r.activeRange||!qh(r.activeRange,e))),isOther:!!(r&&!qh(r.currentRange,e)),isToday:!!(t&&qh(t,e)),isPast:!!(n?e<n:t&&e<t.start),isFuture:!!(n?e>n:t&&e>=t.end)}}function V_(e,t){let n=[`fc-day`,`fc-day-${Zp[e.dow]}`];return e.isDisabled?n.push(`fc-day-disabled`):(e.isToday&&(n.push(`fc-day-today`),n.push(t.getClass(`today`))),e.isPast&&n.push(`fc-day-past`),e.isFuture&&n.push(`fc-day-future`),e.isOther&&n.push(`fc-day-other`)),n}var H_=Z({year:`numeric`,month:`long`,day:`numeric`}),U_=Z({week:`long`});function W_(e,t,n=`day`,r=!0){let{dateEnv:i,options:a,calendarApi:o}=e,s=i.format(t,n===`week`?U_:H_);if(a.navLinks){let e=i.toDate(t),c=e=>{let r=n===`day`?a.navLinkDayClick:n===`week`?a.navLinkWeekClick:null;typeof r==`function`?r.call(o,i.toDate(t),e):(typeof r==`string`&&(n=r),o.zoomTo(t,n))};return Object.assign({title:Lp(a.navLinkHint,[s,e],s),"data-navlink":``},r?Op(c):{onClick:c})}return{"aria-label":s}}var G_;function K_(){return G_||=q_(),G_}function q_(){let e=document.createElement(`div`);e.style.overflow=`scroll`,e.style.position=`absolute`,e.style.top=`-9999px`,e.style.left=`-9999px`,document.body.appendChild(e);let t=J_(e);return document.body.removeChild(e),t}function J_(e){return{x:e.offsetHeight-e.clientHeight,y:e.offsetWidth-e.clientWidth}}function Y_(e){let t=X_(e),n=e.getBoundingClientRect();for(let e of t){let t=z_(n,e.getBoundingClientRect());if(t)n=t;else return null}return n}function X_(e){let t=[];for(;e instanceof HTMLElement;){let n=window.getComputedStyle(e);if(n.position===`fixed`)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}var Z_=class{constructor(e,t,n,r){this.els=t;let i=this.originClientRect=e.getBoundingClientRect();n&&this.buildElHorizontals(i.left),r&&this.buildElVerticals(i.top)}buildElHorizontals(e){let t=[],n=[];for(let r of this.els){let i=r.getBoundingClientRect();t.push(i.left-e),n.push(i.right-e)}this.lefts=t,this.rights=n}buildElVerticals(e){let t=[],n=[];for(let r of this.els){let i=r.getBoundingClientRect();t.push(i.top-e),n.push(i.bottom-e)}this.tops=t,this.bottoms=n}leftToIndex(e){let{lefts:t,rights:n}=this,r=t.length,i;for(i=0;i<r;i+=1)if(e>=t[i]&&e<n[i])return i}topToIndex(e){let{tops:t,bottoms:n}=this,r=t.length,i;for(i=0;i<r;i+=1)if(e>=t[i]&&e<n[i])return i}getWidth(e){return this.rights[e]-this.lefts[e]}getHeight(e){return this.bottoms[e]-this.tops[e]}similarTo(e){return Q_(this.tops||[],e.tops||[])&&Q_(this.bottoms||[],e.bottoms||[])&&Q_(this.lefts||[],e.lefts||[])&&Q_(this.rights||[],e.rights||[])}};function Q_(e,t){let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(Math.round(e[r])!==Math.round(t[r]))return!1;return!0}var $_=class extends ${constructor(){super(...arguments),this.uid=jp()}prepareHits(){}queryHit(e,t,n,r){return null}isValidSegDownEl(e){return!this.props.eventDrag&&!this.props.eventResize&&!gp(e,`.fc-event-mirror`)}isValidDateDownEl(e){return!gp(e,`.fc-event:not(.fc-bg-event)`)&&!gp(e,`.fc-more-link`)&&!gp(e,`a[data-navlink]`)&&!gp(e,`.fc-popover`)}},ev=class{constructor(e=e=>e.thickness||1){this.getEntryThickness=e,this.strictOrder=!1,this.allowReslicing=!1,this.maxCoord=-1,this.maxStackCnt=-1,this.levelCoords=[],this.entriesByLevel=[],this.stackCnts={}}addSegs(e){let t=[];for(let n of e)this.insertEntry(n,t);return t}insertEntry(e,t){let n=this.findInsertion(e);this.isInsertionValid(n,e)?this.insertEntryAt(e,n):this.handleInvalidInsertion(n,e,t)}isInsertionValid(e,t){return(this.maxCoord===-1||e.levelCoord+this.getEntryThickness(t)<=this.maxCoord)&&(this.maxStackCnt===-1||e.stackCnt<this.maxStackCnt)}handleInvalidInsertion(e,t,n){if(this.allowReslicing&&e.touchingEntry){let r=Object.assign(Object.assign({},t),{span:rv(t.span,e.touchingEntry.span)});n.push(r),this.splitEntry(t,e.touchingEntry,n)}else n.push(t)}splitEntry(e,t,n){let r=e.span,i=t.span;r.start<i.start&&this.insertEntry({index:e.index,thickness:e.thickness,span:{start:r.start,end:i.start}},n),r.end>i.end&&this.insertEntry({index:e.index,thickness:e.thickness,span:{start:i.end,end:r.end}},n)}insertEntryAt(e,t){let{entriesByLevel:n,levelCoords:r}=this;t.lateral===-1?(iv(r,t.level,t.levelCoord),iv(n,t.level,[e])):iv(n[t.level],t.lateral,e),this.stackCnts[nv(e)]=t.stackCnt}findInsertion(e){let{levelCoords:t,entriesByLevel:n,strictOrder:r,stackCnts:i}=this,a=t.length,o=0,s=-1,c=-1,l=null,u=0;for(let d=0;d<a;d+=1){let a=t[d];if(!r&&a>=o+this.getEntryThickness(e))break;let f=n[d],p,m=av(f,e.span.start,tv),h=m[0]+m[1];for(;(p=f[h])&&p.span.start<e.span.end;){let e=a+this.getEntryThickness(p);e>o&&(o=e,l=p,s=d,c=h),e===o&&(u=Math.max(u,i[nv(p)]+1)),h+=1}}let d=0;if(l)for(d=s+1;d<a&&t[d]<o;)d+=1;let f=-1;return d<a&&t[d]===o&&(f=av(n[d],e.span.end,tv)[0]),{touchingLevel:s,touchingLateral:c,touchingEntry:l,stackCnt:u,levelCoord:o,level:d,lateral:f}}toRects(){let{entriesByLevel:e,levelCoords:t}=this,n=e.length,r=[];for(let i=0;i<n;i+=1){let n=e[i],a=t[i];for(let e of n)r.push(Object.assign(Object.assign({},e),{thickness:this.getEntryThickness(e),levelCoord:a}))}return r}};function tv(e){return e.span.end}function nv(e){return e.index+`:`+e.span.start}function rv(e,t){let n=Math.max(e.start,t.start),r=Math.min(e.end,t.end);return n<r?{start:n,end:r}:null}function iv(e,t,n){e.splice(t,0,n)}function av(e,t,n){let r=0,i=e.length;if(!i||t<n(e[r]))return[0,0];if(t>n(e[i-1]))return[i,0];for(;r<i;){let a=Math.floor(r+(i-r)/2),o=n(e[a]);if(t<o)i=a;else if(t>o)r=a+1;else return[a,1]}return[r,0]}function ov(e,t){return Z(!e||t>10?{weekday:`short`}:t>1?{weekday:`short`,month:`numeric`,day:`numeric`,omitCommas:!0}:{weekday:`long`})}var sv=`fc-col-header-cell`;function cv(e){return e.text}var lv=class extends ${render(){let{dateEnv:e,options:t,theme:n,viewApi:r}=this.context,{props:i}=this,{date:a,dateProfile:o}=i,s=B_(a,i.todayRange,null,o),c=[sv].concat(V_(s,n)),l=e.format(a,i.dayHeaderFormat),u=!s.isDisabled&&i.colCnt>1?W_(this.context,a):{},d=e.toDate(a);e.namedTimeZoneImpl&&(d=$p(d,36e5));let f=Object.assign(Object.assign(Object.assign({date:d,view:r},i.extraRenderProps),{text:l}),s);return G(Lh,{elTag:`th`,elClasses:c,elAttrs:Object.assign({role:`columnheader`,colSpan:i.colSpan,"data-date":s.isDisabled?void 0:xm(a)},i.extraDataAttrs),renderProps:f,generatorName:`dayHeaderContent`,customGenerator:t.dayHeaderContent,defaultGenerator:cv,classNameGenerator:t.dayHeaderClassNames,didMount:t.dayHeaderDidMount,willUnmount:t.dayHeaderWillUnmount},e=>G(`div`,{className:`fc-scrollgrid-sync-inner`},!s.isDisabled&&G(e,{elTag:`a`,elAttrs:u,elClasses:[`fc-col-header-cell-cushion`,i.isSticky&&`fc-sticky`]})))}},uv=Z({weekday:`long`}),dv=class extends ${render(){let{props:e}=this,{dateEnv:t,theme:n,viewApi:r,options:i}=this.context,a=J(new Date(2592e5),e.dow),o={dow:e.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},s=t.format(a,e.dayHeaderFormat),c=Object.assign(Object.assign(Object.assign(Object.assign({date:a},o),{view:r}),e.extraRenderProps),{text:s});return G(Lh,{elTag:`th`,elClasses:[sv,...V_(o,n),...e.extraClassNames||[]],elAttrs:Object.assign({role:`columnheader`,colSpan:e.colSpan},e.extraDataAttrs),renderProps:c,generatorName:`dayHeaderContent`,customGenerator:i.dayHeaderContent,defaultGenerator:cv,classNameGenerator:i.dayHeaderClassNames,didMount:i.dayHeaderDidMount,willUnmount:i.dayHeaderWillUnmount},n=>G(`div`,{className:`fc-scrollgrid-sync-inner`},G(n,{elTag:`a`,elClasses:[`fc-col-header-cell-cushion`,e.isSticky&&`fc-sticky`],elAttrs:{"aria-label":t.format(a,uv)}})))}},fv=class extends ${constructor(){super(...arguments),this.createDayHeaderFormatter=X(pv)}render(){let{context:e}=this,{dates:t,dateProfile:n,datesRepDistinctDays:r,renderIntro:i}=this.props,a=this.createDayHeaderFormatter(e.options.dayHeaderFormat,r,t.length);return G(I_,{unit:`day`},(e,o)=>G(`tr`,{role:`row`},i&&i(`day`),t.map(e=>r?G(lv,{key:e.toISOString(),date:e,dateProfile:n,todayRange:o,colCnt:t.length,dayHeaderFormat:a}):G(dv,{key:e.getUTCDay(),dow:e.getUTCDay(),dayHeaderFormat:a}))))}};function pv(e,t,n){return e||ov(t,n)}var mv=class{constructor(e,t){let n=e.start,{end:r}=e,i=[],a=[],o=-1;for(;n<r;)t.isHiddenDay(n)?i.push(o+.5):(o+=1,i.push(o),a.push(n)),n=J(n,1);this.dates=a,this.indices=i,this.cnt=a.length}sliceRange(e){let t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(J(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n);return r=Math.ceil(r),i=Math.floor(i),r<=i?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null}getDateDayIndex(e){let{indices:t}=this,n=Math.floor(tm(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]}},hv=class{constructor(e,t){let{dates:n}=e,r,i,a;if(t){for(i=n[0].getUTCDay(),r=1;r<n.length&&n[r].getUTCDay()!==i;r+=1);a=Math.ceil(n.length/r)}else a=1,r=n.length;this.rowCnt=a,this.colCnt=r,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}buildCells(){let e=[];for(let t=0;t<this.rowCnt;t+=1){let n=[];for(let e=0;e<this.colCnt;e+=1)n.push(this.buildCell(t,e));e.push(n)}return e}buildCell(e,t){let n=this.daySeries.dates[e*this.colCnt+t];return{key:n.toISOString(),date:n}}buildHeaderDates(){let e=[];for(let t=0;t<this.colCnt;t+=1)e.push(this.cells[0][t].date);return e}sliceRange(e){let{colCnt:t}=this,n=this.daySeries.sliceRange(e),r=[];if(n){let{firstIndex:e,lastIndex:i}=n,a=e;for(;a<=i;){let o=Math.floor(a/t),s=Math.min((o+1)*t,i+1);r.push({row:o,firstCol:a%t,lastCol:(s-1)%t,isStart:n.isStart&&a===e,isEnd:n.isEnd&&s-1===i}),a=s}}return r}},gv=class{constructor(){this.sliceBusinessHours=X(this._sliceBusinessHours),this.sliceDateSelection=X(this._sliceDateSpan),this.sliceEventStore=X(this._sliceEventStore),this.sliceEventDrag=X(this._sliceInteraction),this.sliceEventResize=X(this._sliceInteraction),this.forceDayIfListItem=!1}sliceProps(e,t,n,r,...i){let{eventUiBases:a}=e,o=this.sliceEventStore(e.eventStore,a,t,n,...i);return{dateSelectionSegs:this.sliceDateSelection(e.dateSelection,t,n,a,r,...i),businessHourSegs:this.sliceBusinessHours(e.businessHours,t,n,r,...i),fgEventSegs:o.fg,bgEventSegs:o.bg,eventDrag:this.sliceEventDrag(e.eventDrag,a,t,n,...i),eventResize:this.sliceEventResize(e.eventResize,a,t,n,...i),eventSelection:e.eventSelection}}sliceNowDate(e,t,n,r,...i){return this._sliceDateSpan({range:{start:e,end:$p(e,1)},allDay:!1},t,n,{},r,...i)}_sliceBusinessHours(e,t,n,r,...i){return e?this._sliceEventStore(ng(e,_v(t,!!n),r),{},t,n,...i).bg:[]}_sliceEventStore(e,t,n,r,...i){if(e){let a=i_(e,t,_v(n,!!r),r);return{bg:this.sliceEventRanges(a.bg,i),fg:this.sliceEventRanges(a.fg,i)}}return{bg:[],fg:[]}}_sliceInteraction(e,t,n,r,...i){if(!e)return null;let a=i_(e.mutatedEvents,t,_v(n,!!r),r);return{segs:this.sliceEventRanges(a.fg,i),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent}}_sliceDateSpan(e,t,n,r,i,...a){if(!e)return[];let o=_v(t,!!n),s=Gh(e.range,o);if(s){e=Object.assign(Object.assign({},e),{range:s});let t=T_(e,r,i),n=this.sliceRange(e.range,...a);for(let e of n)e.eventRange=t;return n}return[]}sliceEventRanges(e,t){let n=[];for(let r of e)n.push(...this.sliceEventRange(r,t));return n}sliceEventRange(e,t){let n=e.range;this.forceDayIfListItem&&e.ui.display===`list-item`&&(n={start:n.start,end:J(n.start,1)});let r=this.sliceRange(n,...t);for(let t of r)t.eventRange=e,t.isStart=e.isStart&&t.isStart,t.isEnd=e.isEnd&&t.isEnd;return r}};function _v(e,t){let n=e.activeRange;return t?n:{start:$p(n.start,e.slotMinTime.milliseconds),end:$p(n.end,e.slotMaxTime.milliseconds-864e5)}}var vv=/^(visible|hidden)$/,yv=class extends ${constructor(){super(...arguments),this.handleEl=e=>{this.el=e,jh(this.props.elRef,e)}}render(){let{props:e}=this,{liquid:t,liquidIsAbsolute:n}=e,r=t&&n,i=[`fc-scroller`];return t&&(n?i.push(`fc-scroller-liquid-absolute`):i.push(`fc-scroller-liquid`)),G(`div`,{ref:this.handleEl,className:i.join(` `),style:{overflowX:e.overflowX,overflowY:e.overflowY,left:r&&-(e.overcomeLeft||0)||``,right:r&&-(e.overcomeRight||0)||``,bottom:r&&-(e.overcomeBottom||0)||``,marginLeft:!r&&-(e.overcomeLeft||0)||``,marginRight:!r&&-(e.overcomeRight||0)||``,marginBottom:!r&&-(e.overcomeBottom||0)||``,maxHeight:e.maxHeight||``}},e.children)}needsXScrolling(){if(vv.test(this.props.overflowX))return!1;let{el:e}=this,t=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),{children:n}=e;for(let e=0;e<n.length;e+=1)if(n[e].getBoundingClientRect().width>t)return!0;return!1}needsYScrolling(){if(vv.test(this.props.overflowY))return!1;let{el:e}=this,t=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),{children:n}=e;for(let e=0;e<n.length;e+=1)if(n[e].getBoundingClientRect().height>t)return!0;return!1}getXScrollbarWidth(){return vv.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight}getYScrollbarWidth(){return vv.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth}},bv=class{constructor(e){this.masterCallback=e,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=(e,t)=>{let{depths:n,currentMap:r}=this,i=!1,a=!1;e===null?(--n[t],n[t]||(delete r[t],delete this.callbackMap[t],i=!0)):(i=t in r,r[t]=e,n[t]=(n[t]||0)+1,a=!0),this.masterCallback&&(i&&this.masterCallback(null,String(t)),a&&this.masterCallback(e,String(t)))}}createRef(e){let t=this.callbackMap[e];return t||=this.callbackMap[e]=t=>{this.handleValue(t,String(e))},t}collect(e,t,n){return mh(this.currentMap,e,t,n)}getAll(){return sh(this.currentMap)}};function xv(e){let t=vp(e,`.fc-scrollgrid-shrink`),n=0;for(let e of t)n=Math.max(n,zp(e));return Math.ceil(n)}function Sv(e,t){return e.liquid&&t.liquid}function Cv(e,t){return t.maxHeight!=null||Sv(e,t)}function wv(e,t,n,r){let{expandRows:i}=n;return typeof t.content==`function`?t.content(n):G(`table`,{role:`presentation`,className:[t.tableClassName,e.syncRowHeights?`fc-scrollgrid-sync-table`:``].join(` `),style:{minWidth:n.tableMinWidth,width:n.clientWidth,height:i?n.clientHeight:``}},n.tableColGroupNode,G(r?`thead`:`tbody`,{role:`presentation`},typeof t.rowContent==`function`?t.rowContent(n):t.rowContent))}function Tv(e,t){return Xp(e,t,ch)}function Ev(e,t){let n=[];for(let r of e){let e=r.span||1;for(let i=0;i<e;i+=1)n.push(G(`col`,{style:{width:r.width===`shrink`?Dv(t):r.width||``,minWidth:r.minWidth||``}}))}return G(`colgroup`,{},...n)}function Dv(e){return e??4}function Ov(e){for(let t of e)if(t.width===`shrink`)return!0;return!1}function kv(e,t){let n=[`fc-scrollgrid`,t.theme.getClass(`table`)];return e&&n.push(`fc-scrollgrid-liquid`),n}function Av(e,t){let n=[`fc-scrollgrid-section`,`fc-scrollgrid-section-${e.type}`,e.className];return t&&e.liquid&&e.maxHeight==null&&n.push(`fc-scrollgrid-section-liquid`),e.isSticky&&n.push(`fc-scrollgrid-section-sticky`),n}function jv(e){return G(`div`,{className:`fc-scrollgrid-sticky-shim`,style:{width:e.clientWidth,minWidth:e.tableMinWidth}})}function Mv(e){let{stickyHeaderDates:t}=e;return(t==null||t===`auto`)&&(t=e.height===`auto`||e.viewHeight===`auto`),t}function Nv(e){let{stickyFooterScrollbar:t}=e;return(t==null||t===`auto`)&&(t=e.height===`auto`||e.viewHeight===`auto`),t}var Pv=class extends ${constructor(){super(...arguments),this.processCols=X(e=>e,Tv),this.renderMicroColGroup=X(Ev),this.scrollerRefs=new bv,this.scrollerElRefs=new bv(this._handleScrollerEl.bind(this)),this.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},this.handleSizing=()=>{this.safeSetState(Object.assign({shrinkWidth:this.computeShrinkWidth()},this.computeScrollerDims()))}}render(){let{props:e,state:t,context:n}=this,r=e.sections||[],i=this.processCols(e.cols),a=this.renderMicroColGroup(i,t.shrinkWidth),o=kv(e.liquid,n);e.collapsibleWidth&&o.push(`fc-scrollgrid-collapsible`);let s=r.length,c=0,l,u=[],d=[],f=[];for(;c<s&&(l=r[c]).type===`header`;)u.push(this.renderSection(l,a,!0)),c+=1;for(;c<s&&(l=r[c]).type===`body`;)d.push(this.renderSection(l,a,!1)),c+=1;for(;c<s&&(l=r[c]).type===`footer`;)f.push(this.renderSection(l,a,!0)),c+=1;let p=!A_(),m={role:`rowgroup`};return G(`table`,{role:`grid`,className:o.join(` `),style:{height:e.height}},!!(!p&&u.length)&&G(`thead`,m,...u),!!(!p&&d.length)&&G(`tbody`,m,...d),!!(!p&&f.length)&&G(`tfoot`,m,...f),p&&G(`tbody`,m,...u,...d,...f))}renderSection(e,t,n){return`outerContent`in e?G(K,{key:e.key},e.outerContent):G(`tr`,{key:e.key,role:`presentation`,className:Av(e,this.props.liquid).join(` `)},this.renderChunkTd(e,t,e.chunk,n))}renderChunkTd(e,t,n,r){if(`outerContent`in n)return n.outerContent;let{props:i}=this,{forceYScrollbars:a,scrollerClientWidths:o,scrollerClientHeights:s}=this.state,c=Cv(i,e),l=Sv(i,e),u=i.liquid?a?`scroll`:c?`auto`:`hidden`:`visible`,d=e.key,f=wv(e,n,{tableColGroupNode:t,tableMinWidth:``,clientWidth:!i.collapsibleWidth&&o[d]!==void 0?o[d]:null,clientHeight:s[d]===void 0?null:s[d],expandRows:e.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:()=>{}},r);return G(r?`th`:`td`,{ref:n.elRef,role:`presentation`},G(`div`,{className:`fc-scroller-harness${l?` fc-scroller-harness-liquid`:``}`},G(yv,{ref:this.scrollerRefs.createRef(d),elRef:this.scrollerElRefs.createRef(d),overflowY:u,overflowX:i.liquid?`hidden`:`visible`,maxHeight:e.maxHeight,liquid:l,liquidIsAbsolute:!0},f)))}_handleScrollerEl(e,t){let n=Fv(this.props.sections,t);n&&jh(n.chunk.scrollerElRef,e)}componentDidMount(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)}componentDidUpdate(){this.handleSizing()}componentWillUnmount(){this.context.removeResizeHandler(this.handleSizing)}computeShrinkWidth(){return Ov(this.props.cols)?xv(this.scrollerElRefs.getAll()):0}computeScrollerDims(){let e=K_(),{scrollerRefs:t,scrollerElRefs:n}=this,r=!1,i={},a={};for(let e in t.currentMap){let n=t.currentMap[e];if(n&&n.needsYScrolling()){r=!0;break}}for(let t of this.props.sections){let o=t.key,s=n.currentMap[o];if(s){let t=s.parentNode;i[o]=Math.floor(t.getBoundingClientRect().width-(r?e.y:0)),a[o]=Math.floor(t.getBoundingClientRect().height)}}return{forceYScrollbars:r,scrollerClientWidths:i,scrollerClientHeights:a}}};Pv.addStateEquality({scrollerClientWidths:ch,scrollerClientHeights:ch});function Fv(e,t){for(let n of e)if(n.key===t)return n;return null}var Iv=class extends ${constructor(){super(...arguments),this.buildPublicEvent=X((e,t,n)=>new t_(e,t,n)),this.handleEl=e=>{this.el=e,jh(this.props.elRef,e),e&&a_(e,this.props.seg)}}render(){let{props:e,context:t}=this,{options:n}=t,{seg:r}=e,{eventRange:i}=r,{ui:a}=i,o={event:this.buildPublicEvent(t,i.def,i.instance),view:t.viewApi,timeText:e.timeText,textColor:a.textColor,backgroundColor:a.backgroundColor,borderColor:a.borderColor,isDraggable:!e.disableDragging&&d_(r,t),isStartResizable:!e.disableResizing&&f_(r,t),isEndResizable:!e.disableResizing&&p_(r),isMirror:!!(e.isDragging||e.isResizing||e.isDateSelecting),isStart:!!r.isStart,isEnd:!!r.isEnd,isPast:!!e.isPast,isFuture:!!e.isFuture,isToday:!!e.isToday,isSelected:!!e.isSelected,isDragging:!!e.isDragging,isResizing:!!e.isResizing};return G(Lh,{elRef:this.handleEl,elTag:e.elTag,elAttrs:e.elAttrs,elClasses:[...g_(o),...r.eventRange.ui.classNames,...e.elClasses||[]],elStyle:e.elStyle,renderProps:o,generatorName:`eventContent`,customGenerator:n.eventContent,defaultGenerator:e.defaultGenerator,classNameGenerator:n.eventClassNames,didMount:n.eventDidMount,willUnmount:n.eventWillUnmount},e.children)}componentDidUpdate(e){this.el&&this.props.seg!==e.seg&&a_(this.el,this.props.seg)}},Lv=class extends ${render(){let{props:e,context:t}=this,{options:n}=t,{seg:r}=e,{ui:i}=r.eventRange,a=m_(r,n.eventTimeFormat||e.defaultTimeFormat,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd);return G(Iv,Object.assign({},e,{elTag:`a`,elStyle:{borderColor:i.borderColor,backgroundColor:i.backgroundColor},elAttrs:v_(r,t),defaultGenerator:Rv,timeText:a}),(e,t)=>G(K,null,G(e,{elTag:`div`,elClasses:[`fc-event-main`],elStyle:{color:t.textColor}}),!!t.isStartResizable&&G(`div`,{className:`fc-event-resizer fc-event-resizer-start`}),!!t.isEndResizable&&G(`div`,{className:`fc-event-resizer fc-event-resizer-end`})))}};Lv.addPropsEquality({seg:ch});function Rv(e){return G(`div`,{className:`fc-event-main-frame`},e.timeText&&G(`div`,{className:`fc-event-time`},e.timeText),G(`div`,{className:`fc-event-title-container`},G(`div`,{className:`fc-event-title fc-sticky`},e.event.title||G(K,null,`\xA0`))))}var zv=Z({day:`numeric`}),Bv=class extends ${constructor(){super(...arguments),this.refineRenderProps=wm(Hv)}render(){let{props:e,context:t}=this,{options:n}=t,r=this.refineRenderProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,isMonthStart:e.isMonthStart||!1,showDayNumber:e.showDayNumber,extraRenderProps:e.extraRenderProps,viewApi:t.viewApi,dateEnv:t.dateEnv,monthStartFormat:n.monthStartFormat});return G(Lh,{elRef:e.elRef,elTag:e.elTag,elAttrs:Object.assign(Object.assign({},e.elAttrs),r.isDisabled?{}:{"data-date":xm(e.date)}),elClasses:[...V_(r,t.theme),...e.elClasses||[]],elStyle:e.elStyle,renderProps:r,generatorName:`dayCellContent`,customGenerator:n.dayCellContent,defaultGenerator:e.defaultGenerator,classNameGenerator:r.isDisabled?void 0:n.dayCellClassNames,didMount:n.dayCellDidMount,willUnmount:n.dayCellWillUnmount},e.children)}};function Vv(e){return!!(e.dayCellContent||Nh(`dayCellContent`,e))}function Hv(e){let{date:t,dateEnv:n,dateProfile:r,isMonthStart:i}=e,a=B_(t,e.todayRange,null,r),o=e.showDayNumber?n.format(t,i?e.monthStartFormat:zv):``;return Object.assign(Object.assign(Object.assign({date:n.toDate(t),view:e.viewApi},a),{isMonthStart:i,dayNumberText:o}),e.extraRenderProps)}var Uv=class extends ${render(){let{props:e}=this,{seg:t}=e;return G(Iv,{elTag:`div`,elClasses:[`fc-bg-event`],elStyle:{backgroundColor:t.eventRange.ui.backgroundColor},defaultGenerator:Wv,seg:t,timeText:``,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday,disableDragging:!0,disableResizing:!0})}};function Wv(e){let{title:t}=e.event;return t&&G(`div`,{className:`fc-event-title`},e.event.title)}function Gv(e){return G(`div`,{className:`fc-${e}`})}var Kv=e=>G(Eh.Consumer,null,t=>{let{dateEnv:n,options:r}=t,{date:i}=e,a=r.weekNumberFormat||e.defaultFormat,o={num:n.computeWeekNumber(i),text:n.format(i,a),date:i};return G(Lh,{elRef:e.elRef,elTag:e.elTag,elAttrs:e.elAttrs,elClasses:e.elClasses,elStyle:e.elStyle,renderProps:o,generatorName:`weekNumberContent`,customGenerator:r.weekNumberContent,defaultGenerator:qv,classNameGenerator:r.weekNumberClassNames,didMount:r.weekNumberDidMount,willUnmount:r.weekNumberWillUnmount},e.children)});function qv(e){return e.text}var Jv=10,Yv=class extends ${constructor(){super(...arguments),this.state={titleId:wp()},this.handleRootEl=e=>{this.rootEl=e,this.props.elRef&&jh(this.props.elRef,e)},this.handleDocumentMouseDown=e=>{let t=Sp(e);this.rootEl.contains(t)||this.handleCloseClick()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.handleCloseClick()},this.handleCloseClick=()=>{let{onClose:e}=this.props;e&&e()}}render(){let{theme:e,options:t}=this.context,{props:n,state:r}=this,i=[`fc-popover`,e.getClass(`popover`)].concat(n.extraClassNames||[]);return Kf(G(`div`,Object.assign({},n.extraAttrs,{id:n.id,className:i.join(` `),"aria-labelledby":r.titleId,ref:this.handleRootEl}),G(`div`,{className:`fc-popover-header `+e.getClass(`popoverHeader`)},G(`span`,{className:`fc-popover-title`,id:r.titleId},n.title),G(`span`,{className:`fc-popover-close `+e.getIconClass(`close`),title:t.closeHint,onClick:this.handleCloseClick})),G(`div`,{className:`fc-popover-body `+e.getClass(`popoverContent`)},n.children)),n.parentEl)}componentDidMount(){document.addEventListener(`mousedown`,this.handleDocumentMouseDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),this.updateSize()}componentWillUnmount(){document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}updateSize(){let{isRtl:e}=this.context,{alignmentEl:t,alignGridTop:n}=this.props,{rootEl:r}=this,i=Y_(t);if(i){let a=r.getBoundingClientRect(),o=n?gp(t,`.fc-scrollgrid`).getBoundingClientRect().top:i.top,s=e?i.right-a.width:i.left;o=Math.max(o,Jv),s=Math.min(s,document.documentElement.clientWidth-Jv-a.width),s=Math.max(s,Jv);let c=r.offsetParent.getBoundingClientRect();bp(r,{top:o-c.top,left:s-c.left})}}},Xv=class extends $_{constructor(){super(...arguments),this.handleRootEl=e=>{this.rootEl=e,e?this.context.registerInteractiveComponent(this,{el:e,useEventCenter:!1}):this.context.unregisterInteractiveComponent(this)}}render(){let{options:e,dateEnv:t}=this.context,{props:n}=this,{startDate:r,todayRange:i,dateProfile:a}=n,o=t.format(r,e.dayPopoverFormat);return G(Bv,{elRef:this.handleRootEl,date:r,dateProfile:a,todayRange:i},(t,r,i)=>G(Yv,{elRef:i.ref,id:n.id,title:o,extraClassNames:[`fc-more-popover`].concat(i.className||[]),extraAttrs:i,parentEl:n.parentEl,alignmentEl:n.alignmentEl,alignGridTop:n.alignGridTop,onClose:n.onClose},Vv(e)&&G(t,{elTag:`div`,elClasses:[`fc-more-popover-misc`]}),n.children))}queryHit(e,t,n,r){let{rootEl:i,props:a}=this;return e>=0&&e<n&&t>=0&&t<r?{dateProfile:a.dateProfile,dateSpan:Object.assign({allDay:!a.forceTimed,range:{start:a.startDate,end:a.endDate}},a.extraDateSpan),dayEl:i,rect:{left:0,top:0,right:n,bottom:r},layer:1}:null}},Zv=class extends ${constructor(){super(...arguments),this.state={isPopoverOpen:!1,popoverId:wp()},this.handleLinkEl=e=>{this.linkEl=e,this.props.elRef&&jh(this.props.elRef,e)},this.handleClick=e=>{let{props:t,context:n}=this,{moreLinkClick:r}=n.options,i=$v(t).start;function a(e){let{def:t,instance:r,range:i}=e.eventRange;return{event:new t_(n,t,r),start:n.dateEnv.toDate(i.start),end:n.dateEnv.toDate(i.end),isStart:e.isStart,isEnd:e.isEnd}}typeof r==`function`&&(r=r({date:i,allDay:!!t.allDayDate,allSegs:t.allSegs.map(a),hiddenSegs:t.hiddenSegs.map(a),jsEvent:e,view:n.viewApi})),!r||r===`popover`?this.setState({isPopoverOpen:!0}):typeof r==`string`&&n.calendarApi.zoomTo(i,r)},this.handlePopoverClose=()=>{this.setState({isPopoverOpen:!1})}}render(){let{props:e,state:t}=this;return G(Eh.Consumer,null,n=>{let{viewApi:r,options:i,calendarApi:a}=n,{moreLinkText:o}=i,{moreCnt:s}=e,c=$v(e),l=typeof o==`function`?o.call(a,s):`+${s} ${o}`,u=Lp(i.moreLinkHint,[s],l),d={num:s,shortText:`+${s}`,text:l,view:r};return G(K,null,!!e.moreCnt&&G(Lh,{elTag:e.elTag||`a`,elRef:this.handleLinkEl,elClasses:[...e.elClasses||[],`fc-more-link`],elStyle:e.elStyle,elAttrs:Object.assign(Object.assign(Object.assign({},e.elAttrs),Op(this.handleClick)),{title:u,"aria-expanded":t.isPopoverOpen,"aria-controls":t.isPopoverOpen?t.popoverId:``}),renderProps:d,generatorName:`moreLinkContent`,customGenerator:i.moreLinkContent,defaultGenerator:e.defaultGenerator||Qv,classNameGenerator:i.moreLinkClassNames,didMount:i.moreLinkDidMount,willUnmount:i.moreLinkWillUnmount},e.children),t.isPopoverOpen&&G(Xv,{id:t.popoverId,startDate:c.start,endDate:c.end,dateProfile:e.dateProfile,todayRange:e.todayRange,extraDateSpan:e.extraDateSpan,parentEl:this.parentEl,alignmentEl:e.alignmentElRef?e.alignmentElRef.current:this.linkEl,alignGridTop:e.alignGridTop,forceTimed:e.forceTimed,onClose:this.handlePopoverClose},e.popoverContent()))})}componentDidMount(){this.updateParentEl()}componentDidUpdate(){this.updateParentEl()}updateParentEl(){this.linkEl&&(this.parentEl=gp(this.linkEl,`.fc-view-harness`))}};function Qv(e){return e.text}function $v(e){if(e.allDayDate)return{start:e.allDayDate,end:J(e.allDayDate,1)};let{hiddenSegs:t}=e;return{start:ey(t),end:ny(t)}}function ey(e){return e.reduce(ty).eventRange.range.start}function ty(e,t){return e.eventRange.range.start<t.eventRange.range.start?e:t}function ny(e){return e.reduce(ry).eventRange.range.end}function ry(e,t){return e.eventRange.range.end>t.eventRange.range.end?e:t}var iy=class{constructor(){this.handlers=[]}set(e){this.currentValue=e;for(let t of this.handlers)t(e)}subscribe(e){this.handlers.push(e),this.currentValue!==void 0&&e(this.currentValue)}},ay=class extends iy{constructor(){super(...arguments),this.map=new Map}handle(e){let{map:t}=this,n=!1;e.isActive?(t.set(e.id,e),n=!0):t.has(e.id)&&(t.delete(e.id),n=!0),n&&this.set(t)}},oy=[],sy={code:`en`,week:{dow:0,doy:4},direction:`ltr`,buttonText:{prev:`prev`,next:`next`,prevYear:`prev year`,nextYear:`next year`,year:`year`,today:`today`,month:`month`,week:`week`,day:`day`,list:`list`},weekText:`W`,weekTextLong:`Week`,closeHint:`Close`,timeHint:`Time`,eventHint:`Event`,allDayText:`all-day`,moreLinkText:`more`,noEventsText:`No events to display`},cy=Object.assign(Object.assign({},sy),{buttonHints:{prev:`Previous $0`,next:`Next $0`,today(e,t){return t===`day`?`Today`:`This ${e}`}},viewHint:`$0 view`,navLinkHint:`Go to $0`,moreLinkHint(e){return`Show ${e} more event${e===1?``:`s`}`}});function ly(e){let t=e.length>0?e[0].code:`en`,n=oy.concat(e),r={en:cy};for(let e of n)r[e.code]=e;return{map:r,defaultCode:t}}function uy(e,t){return typeof e==`object`&&!Array.isArray(e)?py(e.code,[e.code],e):dy(e,t)}function dy(e,t){let n=[].concat(e||[]);return py(e,n,fy(n,t)||cy)}function fy(e,t){for(let n=0;n<e.length;n+=1){let r=e[n].toLocaleLowerCase().split(`-`);for(let e=r.length;e>0;--e){let n=r.slice(0,e).join(`-`);if(t[n])return t[n]}}return null}function py(e,t,n){let r=rh([sy,n],[`buttonText`]);delete r.code;let{week:i}=r;return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}function my(e){return{id:jp(),name:e.name,premiumReleaseDate:e.premiumReleaseDate?new Date(e.premiumReleaseDate):void 0,deps:e.deps||[],reducers:e.reducers||[],isLoadingFuncs:e.isLoadingFuncs||[],contextInit:[].concat(e.contextInit||[]),eventRefiners:e.eventRefiners||{},eventDefMemberAdders:e.eventDefMemberAdders||[],eventSourceRefiners:e.eventSourceRefiners||{},isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],viewContainerAppends:e.viewContainerAppends||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,initialView:e.initialView||``,elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{},scrollGridImpl:e.scrollGridImpl||null,listenerRefiners:e.listenerRefiners||{},optionRefiners:e.optionRefiners||{},propSetHandlers:e.propSetHandlers||{}}}function hy(e,t){let n={},r={premiumReleaseDate:void 0,reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:``,elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function i(e){for(let t of e){let e=t.name,a=n[e];a===void 0?(n[e]=t.id,i(t.deps),r=_y(r,t)):a!==t.id&&console.warn(`Duplicate plugin '${e}'`)}}return e&&i(e),i(t),r}function gy(){let e=[],t=[],n;return(r,i)=>((!n||!Xp(r,e)||!Xp(i,t))&&(n=hy(r,i)),e=r,t=i,n)}function _y(e,t){return{premiumReleaseDate:vy(e.premiumReleaseDate,t.premiumReleaseDate),reducers:e.reducers.concat(t.reducers),isLoadingFuncs:e.isLoadingFuncs.concat(t.isLoadingFuncs),contextInit:e.contextInit.concat(t.contextInit),eventRefiners:Object.assign(Object.assign({},e.eventRefiners),t.eventRefiners),eventDefMemberAdders:e.eventDefMemberAdders.concat(t.eventDefMemberAdders),eventSourceRefiners:Object.assign(Object.assign({},e.eventSourceRefiners),t.eventSourceRefiners),isDraggableTransformers:e.isDraggableTransformers.concat(t.isDraggableTransformers),eventDragMutationMassagers:e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),eventDefMutationAppliers:e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),dateSelectionTransformers:e.dateSelectionTransformers.concat(t.dateSelectionTransformers),datePointTransforms:e.datePointTransforms.concat(t.datePointTransforms),dateSpanTransforms:e.dateSpanTransforms.concat(t.dateSpanTransforms),views:Object.assign(Object.assign({},e.views),t.views),viewPropsTransformers:e.viewPropsTransformers.concat(t.viewPropsTransformers),isPropsValid:t.isPropsValid||e.isPropsValid,externalDefTransforms:e.externalDefTransforms.concat(t.externalDefTransforms),viewContainerAppends:e.viewContainerAppends.concat(t.viewContainerAppends),eventDropTransformers:e.eventDropTransformers.concat(t.eventDropTransformers),calendarInteractions:e.calendarInteractions.concat(t.calendarInteractions),componentInteractions:e.componentInteractions.concat(t.componentInteractions),themeClasses:Object.assign(Object.assign({},e.themeClasses),t.themeClasses),eventSourceDefs:e.eventSourceDefs.concat(t.eventSourceDefs),cmdFormatter:t.cmdFormatter||e.cmdFormatter,recurringTypes:e.recurringTypes.concat(t.recurringTypes),namedTimeZonedImpl:t.namedTimeZonedImpl||e.namedTimeZonedImpl,initialView:e.initialView||t.initialView,elementDraggingImpl:e.elementDraggingImpl||t.elementDraggingImpl,optionChangeHandlers:Object.assign(Object.assign({},e.optionChangeHandlers),t.optionChangeHandlers),scrollGridImpl:t.scrollGridImpl||e.scrollGridImpl,listenerRefiners:Object.assign(Object.assign({},e.listenerRefiners),t.listenerRefiners),optionRefiners:Object.assign(Object.assign({},e.optionRefiners),t.optionRefiners),propSetHandlers:Object.assign(Object.assign({},e.propSetHandlers),t.propSetHandlers)}}function vy(e,t){return e===void 0?t:t===void 0?e:new Date(Math.max(e.valueOf(),t.valueOf()))}var yy=class extends xh{};yy.prototype.classes={root:`fc-theme-standard`,tableCellShaded:`fc-cell-shaded`,buttonGroup:`fc-button-group`,button:`fc-button fc-button-primary`,buttonActive:`fc-button-active`},yy.prototype.baseIconClass=`fc-icon`,yy.prototype.iconClasses={close:`fc-icon-x`,prev:`fc-icon-chevron-left`,next:`fc-icon-chevron-right`,prevYear:`fc-icon-chevrons-left`,nextYear:`fc-icon-chevrons-right`},yy.prototype.rtlIconClasses={prev:`fc-icon-chevron-right`,next:`fc-icon-chevron-left`,prevYear:`fc-icon-chevrons-right`,nextYear:`fc-icon-chevrons-left`},yy.prototype.iconOverrideOption=`buttonIcons`,yy.prototype.iconOverrideCustomButtonOption=`icon`,yy.prototype.iconOverridePrefix=`fc-icon-`;function by(e,t){let n={},r;for(r in e)xy(r,n,e,t);for(r in t)xy(r,n,e,t);return n}function xy(e,t,n,r){if(t[e])return t[e];let i=Sy(e,t,n,r);return i&&(t[e]=i),i}function Sy(e,t,n,r){let i=n[e],a=r[e],o=e=>i&&i[e]!==null?i[e]:a&&a[e]!==null?a[e]:null,s=o(`component`),c=o(`superType`),l=null;if(c){if(c===e)throw Error(`Can't have a custom view type that references itself`);l=xy(c,t,n,r)}return!s&&l&&(s=l.component),s?{type:e,component:s,defaults:Object.assign(Object.assign({},l?l.defaults:{}),i?i.rawOptions:{}),overrides:Object.assign(Object.assign({},l?l.overrides:{}),a?a.rawOptions:{})}:null}function Cy(e){return ah(e,wy)}function wy(e){let t=typeof e==`function`?{component:e}:e,{component:n}=t;return t.content?n=Ty(t):n&&!(n.prototype instanceof $)&&(n=Ty(Object.assign(Object.assign({},t),{content:n}))),{superType:t.type,component:n,rawOptions:t}}function Ty(e){return t=>G(Eh.Consumer,null,n=>G(Lh,{elTag:`div`,elClasses:Vh(n.viewSpec),renderProps:Object.assign(Object.assign({},t),{nextDayThreshold:n.options.nextDayThreshold}),generatorName:void 0,customGenerator:e.content,classNameGenerator:e.classNames,didMount:e.didMount,willUnmount:e.willUnmount}))}function Ey(e,t,n,r){let i=Cy(e),a=Cy(t.views);return ah(by(i,a),e=>Dy(e,a,t,n,r))}function Dy(e,t,n,r,i){let a=e.overrides.duration||e.defaults.duration||r.duration||n.duration,o=null,s=``,c=``,l={};if(a&&(o=ky(a),o)){let e=Yp(o);s=e.unit,e.value===1&&(c=s,l=t[s]?t[s].rawOptions:{})}let u=t=>{let n=t.buttonText||{},r=e.defaults.buttonTextKey;return r!=null&&n[r]!=null?n[r]:n[e.type]==null?n[c]==null?null:n[c]:n[e.type]},d=t=>{let n=t.buttonHints||{},r=e.defaults.buttonTextKey;return r!=null&&n[r]!=null?n[r]:n[e.type]==null?n[c]==null?null:n[c]:n[e.type]};return{type:e.type,component:e.component,duration:o,durationUnit:s,singleUnit:c,optionDefaults:e.defaults,optionOverrides:Object.assign(Object.assign({},l),e.overrides),buttonTextOverride:u(r)||u(n)||e.overrides.buttonText,buttonTextDefault:u(i)||e.defaults.buttonText||u(qm)||e.type,buttonTitleOverride:d(r)||d(n)||e.overrides.buttonHint,buttonTitleDefault:d(i)||e.defaults.buttonHint||d(qm)}}var Oy={};function ky(e){let t=JSON.stringify(e),n=Oy[t];return n===void 0&&(n=q(e),Oy[t]=n),n}function Ay(e,t){switch(t.type){case`CHANGE_VIEW_TYPE`:e=t.viewType}return e}function jy(e,t){switch(t.type){case`CHANGE_DATE`:return t.dateMarker;default:return e}}function My(e,t,n){let r=e.initialDate;return r==null?n.getDateMarker():t.createMarker(r)}function Ny(e,t){switch(t.type){case`SET_OPTION`:return Object.assign(Object.assign({},e),{[t.optionName]:t.rawOptionValue});default:return e}}function Py(e,t,n,r){let i;switch(t.type){case`CHANGE_VIEW_TYPE`:return r.build(t.dateMarker||n);case`CHANGE_DATE`:return r.build(t.dateMarker);case`PREV`:if(i=r.buildPrev(e,n),i.isValid)return i;break;case`NEXT`:if(i=r.buildNext(e,n),i.isValid)return i;break}return e}function Fy(e,t,n){let r=t?t.activeRange:null;return zy({},qy(e,n),r,n)}function Iy(e,t,n,r){let i=n?n.activeRange:null;switch(t.type){case`ADD_EVENT_SOURCES`:return zy(e,t.sources,i,r);case`REMOVE_EVENT_SOURCE`:return By(e,t.sourceId);case`PREV`:case`NEXT`:case`CHANGE_DATE`:case`CHANGE_VIEW_TYPE`:return n?Vy(e,i,r):e;case`FETCH_EVENT_SOURCES`:return Uy(e,t.sourceIds?oh(t.sourceIds):Ky(e,r),i,t.isRefetch||!1,r);case`RECEIVE_EVENTS`:case`RECEIVE_EVENT_ERROR`:return Gy(e,t.sourceId,t.fetchId,t.fetchRange);case`REMOVE_ALL_EVENT_SOURCES`:return{};default:return e}}function Ly(e,t,n){let r=t?t.activeRange:null;return Uy(e,Ky(e,n),r,!0,n)}function Ry(e){for(let t in e)if(e[t].isFetching)return!0;return!1}function zy(e,t,n,r){let i={};for(let e of t)i[e.sourceId]=e;return n&&(i=Vy(i,n,r)),Object.assign(Object.assign({},e),i)}function By(e,t){return ih(e,e=>e.sourceId!==t)}function Vy(e,t,n){return Uy(e,ih(e,e=>Hy(e,t,n)),t,!1,n)}function Hy(e,t,n){return Jy(e,n)?!n.options.lazyFetching||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}function Uy(e,t,n,r,i){let a={};for(let o in e){let s=e[o];t[o]?a[o]=Wy(s,n,r,i):a[o]=s}return a}function Wy(e,t,n,r){let{options:i,calendarApi:a}=r,o=r.pluginHooks.eventSourceDefs[e.sourceDefId],s=jp();return o.fetch({eventSource:e,range:t,isRefetch:n,context:r},n=>{let{rawEvents:o}=n;i.eventSourceSuccess&&(o=i.eventSourceSuccess.call(a,o,n.response)||o),e.success&&(o=e.success.call(a,o,n.response)||o),r.dispatch({type:`RECEIVE_EVENTS`,sourceId:e.sourceId,fetchId:s,fetchRange:t,rawEvents:o})},n=>{let o=!1;i.eventSourceFailure&&(i.eventSourceFailure.call(a,n),o=!0),e.failure&&(e.failure(n),o=!0),o||console.warn(n.message,n),r.dispatch({type:`RECEIVE_EVENT_ERROR`,sourceId:e.sourceId,fetchId:s,fetchRange:t,error:n})}),Object.assign(Object.assign({},e),{isFetching:!0,latestFetchId:s})}function Gy(e,t,n,r){let i=e[t];return i&&n===i.latestFetchId?Object.assign(Object.assign({},e),{[t]:Object.assign(Object.assign({},i),{isFetching:!1,fetchRange:r})}):e}function Ky(e,t){return ih(e,e=>Jy(e,t))}function qy(e,t){let n=Ag(t),r=[].concat(e.eventSources||[]),i=[];e.initialEvents&&r.unshift(e.initialEvents),e.events&&r.unshift(e.events);for(let e of r){let r=kg(e,t,n);r&&i.push(r)}return i}function Jy(e,t){return!t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange}function Yy(e,t){switch(t.type){case`UNSELECT_DATES`:return null;case`SELECT_DATES`:return t.selection;default:return e}}function Xy(e,t){switch(t.type){case`UNSELECT_EVENT`:return``;case`SELECT_EVENT`:return t.eventInstanceId;default:return e}}function Zy(e,t){let n;switch(t.type){case`UNSET_EVENT_DRAG`:return null;case`SET_EVENT_DRAG`:return n=t.state,{affectedEvents:n.affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}function Qy(e,t){let n;switch(t.type){case`UNSET_EVENT_RESIZE`:return null;case`SET_EVENT_RESIZE`:return n=t.state,{affectedEvents:n.affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}function $y(e,t,n,r,i){return{header:e.headerToolbar?eb(e.headerToolbar,e,t,n,r,i):null,footer:e.footerToolbar?eb(e.footerToolbar,e,t,n,r,i):null}}function eb(e,t,n,r,i,a){let o={},s=[],c=!1;for(let l in e){let u=e[l],d=tb(u,t,n,r,i,a);o[l]=d.widgets,s.push(...d.viewsWithButtons),c||=d.hasTitle}return{sectionWidgets:o,viewsWithButtons:s,hasTitle:c}}function tb(e,t,n,r,i,a){let o=t.direction===`rtl`,s=t.customButtons||{},c=n.buttonText||{},l=t.buttonText||{},u=n.buttonHints||{},d=t.buttonHints||{},f=e?e.split(` `):[],p=[],m=!1;return{widgets:f.map(e=>e.split(`,`).map(e=>{if(e===`title`)return m=!0,{buttonName:e};let n,f,h,g,_,v;if(n=s[e])h=e=>{n.click&&n.click.call(e.target,e,e.target)},(g=r.getCustomButtonIconClass(n))||(g=r.getIconClass(e,o))||(_=n.text),v=n.hint||n.text;else if(f=i[e]){p.push(e),h=()=>{a.changeView(e)},(_=f.buttonTextOverride)||(g=r.getIconClass(e,o))||(_=f.buttonTextDefault);let n=f.buttonTextOverride||f.buttonTextDefault;v=Lp(f.buttonTitleOverride||f.buttonTitleDefault||t.viewHint,[n,e],n)}else if(a[e])if(h=()=>{a[e]()},(_=c[e])||(g=r.getIconClass(e,o))||(_=l[e]),e===`prevYear`||e===`nextYear`){let t=e===`prevYear`?`prev`:`next`;v=Lp(u[t]||d[t],[l.year||`year`,`year`],l[e])}else v=t=>Lp(u[e]||d[e],[l[t]||t,t],l[e]);return{buttonName:e,buttonClick:h,buttonIcon:g,buttonText:_,buttonHint:v}})),viewsWithButtons:p,hasTitle:m}}var nb=class{constructor(e,t,n){this.type=e,this.getCurrentData=t,this.dateEnv=n}get calendar(){return this.getCurrentData().calendarApi}get title(){return this.getCurrentData().viewTitle}get activeStart(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)}get activeEnd(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)}get currentStart(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)}get currentEnd(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)}getOption(e){return this.getCurrentData().options[e]}},rb=my({name:`array-event-source`,eventSourceDefs:[{ignoreRange:!0,parseMeta(e){return Array.isArray(e.events)?e.events:null},fetch(e,t){t({rawEvents:e.eventSource.meta})}}]}),ib=my({name:`func-event-source`,eventSourceDefs:[{parseMeta(e){return typeof e.events==`function`?e.events:null},fetch(e,t,n){let{dateEnv:r}=e.context,i=e.eventSource.meta;E_(i.bind(null,C_(e.range,r)),e=>t({rawEvents:e}),n)}}]}),ab=my({name:`json-event-source`,eventSourceRefiners:{method:String,extraParams:Q,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta(e){return e.url&&(e.format===`json`||!e.format)?{url:e.url,format:`json`,method:(e.method||`GET`).toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}:null},fetch(e,t,n){let{meta:r}=e.eventSource,i=ob(r,e.range,e.context);O_(r.method,r.url,i).then(([e,n])=>{t({rawEvents:e,response:n})},n)}}]});function ob(e,t,n){let{dateEnv:r,options:i}=n,a,o,s,c,l={};return a=e.startParam,a??=i.startParam,o=e.endParam,o??=i.endParam,s=e.timeZoneParam,s??=i.timeZoneParam,c=typeof e.extraParams==`function`?e.extraParams():e.extraParams||{},Object.assign(l,c),l[a]=r.formatIso(t.start),l[o]=r.formatIso(t.end),r.timeZone!==`local`&&(l[s]=r.timeZone),l}var sb=my({name:`simple-recurring-event`,recurringTypes:[{parse(e,t){if(e.daysOfWeek||e.startTime||e.endTime||e.startRecur||e.endRecur){let n={daysOfWeek:e.daysOfWeek||null,startTime:e.startTime||null,endTime:e.endTime||null,startRecur:e.startRecur?t.createMarker(e.startRecur):null,endRecur:e.endRecur?t.createMarker(e.endRecur):null,dateEnv:t},r;return e.duration&&(r=e.duration),!r&&e.startTime&&e.endTime&&(r=Wp(e.endTime,e.startTime)),{allDayGuess:!e.startTime&&!e.endTime,duration:r,typeData:n}}return null},expand(e,t,n){let r=Gh(t,{start:e.startRecur,end:e.endRecur});return r?cb(e.daysOfWeek,e.startTime,e.dateEnv,n,r):[]}}],eventRefiners:{daysOfWeek:Q,startTime:q,endTime:q,duration:q,startRecur:Q,endRecur:Q}});function cb(e,t,n,r,i){let a=e?oh(e):null,o=Y(i.start),s=i.end,c=[];for(t&&(t.milliseconds<0?s=J(s,1):t.milliseconds>=1e3*60*60*24&&(o=J(o,-1)));o<s;){let e;(!a||a[o.getUTCDay()])&&(e=t?r.add(o,t):o,c.push(r.createMarker(n.toDate(e)))),o=J(o,1)}return c}var lb=my({name:`change-handler`,optionChangeHandlers:{events(e,t){ub([e],t)},eventSources:ub}});function ub(e,t){let n=sh(t.getCurrentData().eventSources);if(n.length===1&&e.length===1&&Array.isArray(n[0]._raw)&&Array.isArray(e[0])){t.dispatch({type:`RESET_RAW_EVENTS`,sourceId:n[0].sourceId,rawEvents:e[0]});return}let r=[];for(let t of e){let e=!1;for(let r=0;r<n.length;r+=1)if(n[r]._raw===t){n.splice(r,1),e=!0;break}e||r.push(t)}for(let e of n)t.dispatch({type:`REMOVE_EVENT_SOURCE`,sourceId:e.sourceId});for(let e of r)t.calendarApi.addEventSource(e)}function db(e,t){t.emitter.trigger(`datesSet`,Object.assign(Object.assign({},C_(e.activeRange,t.dateEnv)),{view:t.viewApi}))}function fb(e,t){let{emitter:n}=t;n.hasHandlers(`eventsSet`)&&n.trigger(`eventsSet`,r_(e,t))}var pb=[rb,ib,ab,sb,lb,my({name:`misc`,isLoadingFuncs:[e=>Ry(e.eventSources)],propSetHandlers:{dateProfile:db,eventStore:fb}})],mb=class{constructor(e,t){this.runTaskOption=e,this.drainedOption=t,this.queue=[],this.delayedRunner=new mp(this.drain.bind(this))}request(e,t){this.queue.push(e),this.delayedRunner.request(t)}pause(e){this.delayedRunner.pause(e)}resume(e,t){this.delayedRunner.resume(e,t)}drain(){let{queue:e}=this;for(;e.length;){let t=[],n;for(;n=e.shift();)this.runTask(n),t.push(n);this.drained(t)}}runTask(e){this.runTaskOption&&this.runTaskOption(e)}drained(e){this.drainedOption&&this.drainedOption(e)}};function hb(e,t,n){let r;return r=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,n.formatRange(r.start,r.end,Z(t.titleFormat||gb(e)),{isEndExclusive:e.isRangeAllDay,defaultSeparator:t.titleRangeSeparator})}function gb(e){let{currentRangeUnit:t}=e;if(t===`year`)return{year:`numeric`};if(t===`month`)return{year:`numeric`,month:`long`};let n=sm(e.currentRange.start,e.currentRange.end);return n!==null&&n>1?{year:`numeric`,month:`short`,day:`numeric`}:{year:`numeric`,month:`long`,day:`numeric`}}var _b=class{constructor(){this.resetListeners=new Set}handleInput(e,t){let n=this.dateEnv;if(e!==n&&(typeof t==`function`?this.nowFn=t:n||(this.nowAnchorDate=e.toDate(t?e.createMarker(t):e.createNowMarker()),this.nowAnchorQueried=Date.now()),this.dateEnv=e,n))for(let e of this.resetListeners.values())e()}getDateMarker(){return this.nowAnchorDate?this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf()+(Date.now()-this.nowAnchorQueried)):this.dateEnv.createMarker(this.nowFn())}addResetListener(e){this.resetListeners.add(e)}removeResetListener(e){this.resetListeners.delete(e)}},vb=class{constructor(e){this.computeCurrentViewData=X(this._computeCurrentViewData),this.organizeRawLocales=X(ly),this.buildLocale=X(uy),this.buildPluginHooks=gy(),this.buildDateEnv=X(yb),this.buildTheme=X(bb),this.parseToolbars=X($y),this.buildViewSpecs=X(Ey),this.buildDateProfileGenerator=wm(xb),this.buildViewApi=X(Sb),this.buildViewUiProps=wm(Tb),this.buildEventUiBySource=X(Cb,ch),this.buildEventUiBases=X(wb),this.parseContextBusinessHours=wm(Db),this.buildTitle=X(hb),this.nowManager=new _b,this.emitter=new Vg,this.actionRunner=new mb(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.optionsForRefining=[],this.optionsForHandling=[],this.getCurrentData=()=>this.data,this.dispatch=e=>{this.actionRunner.request(e)},this.props=e,this.actionRunner.pause(),this.nowManager=new _b;let t={},n=this.computeOptionsData(e.optionOverrides,t,e.calendarApi),r=n.calendarOptions.initialView||n.pluginHooks.initialView,i=this.computeCurrentViewData(r,n,e.optionOverrides,t);e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(i.options);let a={nowManager:this.nowManager,dateEnv:n.dateEnv,options:n.calendarOptions,pluginHooks:n.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},o=My(n.calendarOptions,n.dateEnv,this.nowManager),s=i.dateProfileGenerator.build(o);qh(s.activeRange,o)||(o=s.currentRange.start);for(let e of n.pluginHooks.contextInit)e(a);let c=Fy(n.calendarOptions,s,a),l={dynamicOptionOverrides:t,currentViewType:r,currentDate:o,dateProfile:s,businessHours:this.parseContextBusinessHours(a),eventSources:c,eventUiBases:{},eventStore:_g(),renderableEventStore:_g(),dateSelection:null,eventSelection:``,eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(a).selectionConfig},u=Object.assign(Object.assign({},a),l);for(let e of n.pluginHooks.reducers)Object.assign(l,e(null,null,u));Eb(l,a)&&this.emitter.trigger(`loading`,!0),this.state=l,this.updateData(),this.actionRunner.resume()}resetOptions(e,t){let{props:n}=this;t===void 0?n.optionOverrides=e:(n.optionOverrides=Object.assign(Object.assign({},n.optionOverrides||{}),e),this.optionsForRefining.push(...t)),(t===void 0||t.length)&&this.actionRunner.request({type:`NOTHING`})}_handleAction(e){let{props:t,state:n,emitter:r}=this,i=Ny(n.dynamicOptionOverrides,e),a=this.computeOptionsData(t.optionOverrides,i,t.calendarApi),o=Ay(n.currentViewType,e),s=this.computeCurrentViewData(o,a,t.optionOverrides,i);t.calendarApi.currentDataManager=this,r.setThisContext(t.calendarApi),r.setOptions(s.options);let c={nowManager:this.nowManager,dateEnv:a.dateEnv,options:a.calendarOptions,pluginHooks:a.pluginHooks,calendarApi:t.calendarApi,dispatch:this.dispatch,emitter:r,getCurrentData:this.getCurrentData},{currentDate:l,dateProfile:u}=n;this.data&&this.data.dateProfileGenerator!==s.dateProfileGenerator&&(u=s.dateProfileGenerator.build(l)),l=jy(l,e),u=Py(u,e,l,s.dateProfileGenerator),(e.type===`PREV`||e.type===`NEXT`||!qh(u.currentRange,l))&&(l=u.currentRange.start);let d=Iy(n.eventSources,e,u,c),f=Mg(n.eventStore,e,d,u,c),p=Ry(d)&&!s.options.progressiveEventRendering&&n.renderableEventStore||f,{eventUiSingleBase:m,selectionConfig:h}=this.buildViewUiProps(c),g=this.buildEventUiBySource(d),_=this.buildEventUiBases(p.defs,m,g),v={dynamicOptionOverrides:i,currentViewType:o,currentDate:l,dateProfile:u,eventSources:d,eventStore:f,renderableEventStore:p,selectionConfig:h,eventUiBases:_,businessHours:this.parseContextBusinessHours(c),dateSelection:Yy(n.dateSelection,e),eventSelection:Xy(n.eventSelection,e),eventDrag:Zy(n.eventDrag,e),eventResize:Qy(n.eventResize,e)},y=Object.assign(Object.assign({},c),v);for(let t of a.pluginHooks.reducers)Object.assign(v,t(n,e,y));let b=Eb(n,c),x=Eb(v,c);!b&&x?r.trigger(`loading`,!0):b&&!x&&r.trigger(`loading`,!1),this.state=v,t.onAction&&t.onAction(e)}updateData(){let{props:e,state:t}=this,n=this.data,r=this.computeOptionsData(e.optionOverrides,t.dynamicOptionOverrides,e.calendarApi),i=this.computeCurrentViewData(t.currentViewType,r,e.optionOverrides,t.dynamicOptionOverrides),a=this.data=Object.assign(Object.assign(Object.assign({nowManager:this.nowManager,viewTitle:this.buildTitle(t.dateProfile,i.options,r.dateEnv),calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},r),i),t),o=r.pluginHooks.optionChangeHandlers,s=n&&n.calendarOptions,c=r.calendarOptions;if(s&&s!==c){s.timeZone!==c.timeZone&&(t.eventSources=a.eventSources=Ly(a.eventSources,t.dateProfile,a),t.eventStore=a.eventStore=Rg(a.eventStore,n.dateEnv,a.dateEnv),t.renderableEventStore=a.renderableEventStore=Rg(a.renderableEventStore,n.dateEnv,a.dateEnv));for(let e in o)(this.optionsForHandling.indexOf(e)!==-1||s[e]!==c[e])&&o[e](c[e],a)}this.optionsForHandling=[],e.onData&&e.onData(a)}computeOptionsData(e,t,n){if(!this.optionsForRefining.length&&e===this.stableOptionOverrides&&t===this.stableDynamicOptionOverrides)return this.stableCalendarOptionsData;let{refinedOptions:r,pluginHooks:i,localeDefaults:a,availableLocaleData:o,extra:s}=this.processRawCalendarOptions(e,t);Ob(s);let c=this.buildDateEnv(r.timeZone,r.locale,r.weekNumberCalculation,r.firstDay,r.weekText,i,o,r.defaultRangeSeparator),l=this.buildViewSpecs(i.views,this.stableOptionOverrides,this.stableDynamicOptionOverrides,a),u=this.buildTheme(r,i);return this.stableCalendarOptionsData={calendarOptions:r,pluginHooks:i,dateEnv:c,viewSpecs:l,theme:u,toolbarConfig:this.parseToolbars(r,this.stableOptionOverrides,u,l,n),localeDefaults:a,availableRawLocales:o.map}}processRawCalendarOptions(e,t){let{locales:n,locale:r}=eh([qm,e,t]),i=this.organizeRawLocales(n),a=i.map,o=this.buildLocale(r||i.defaultCode,a).options,s=this.buildPluginHooks(e.plugins||[],pb),c=this.currentCalendarOptionsRefiners=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Km),Jm),Ym),s.listenerRefiners),s.optionRefiners),l={},u=eh([qm,o,e,t]),d={},f=this.currentCalendarOptionsInput,p=this.currentCalendarOptionsRefined,m=!1;for(let e in u)this.optionsForRefining.indexOf(e)===-1&&(u[e]===f[e]||Xm[e]&&e in f&&Xm[e](f[e],u[e]))?d[e]=p[e]:c[e]?(d[e]=c[e](u[e]),m=!0):l[e]=f[e];return m&&(this.currentCalendarOptionsInput=u,this.currentCalendarOptionsRefined=d,this.stableOptionOverrides=e,this.stableDynamicOptionOverrides=t),this.optionsForHandling.push(...this.optionsForRefining),this.optionsForRefining=[],{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:s,availableLocaleData:i,localeDefaults:o,extra:l}}_computeCurrentViewData(e,t,n,r){let i=t.viewSpecs[e];if(!i)throw Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);let{refinedOptions:a,extra:o}=this.processRawViewOptions(i,t.pluginHooks,t.localeDefaults,n,r);return Ob(o),this.nowManager.handleInput(t.dateEnv,a.now),{viewSpec:i,options:a,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:i.optionDefaults.dateProfileGeneratorClass,nowManager:this.nowManager,duration:i.duration,durationUnit:i.durationUnit,usesMinMaxTime:i.optionDefaults.usesMinMaxTime,dateEnv:t.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:a.slotMinTime,slotMaxTime:a.slotMaxTime,showNonCurrentDates:a.showNonCurrentDates,dayCount:a.dayCount,dateAlignment:a.dateAlignment,dateIncrement:a.dateIncrement,hiddenDays:a.hiddenDays,weekends:a.weekends,validRangeInput:a.validRange,visibleRangeInput:a.visibleRange,fixedWeekCount:a.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,t.dateEnv)}}processRawViewOptions(e,t,n,r,i){let a=eh([qm,e.optionDefaults,n,r,e.optionOverrides,i]),o=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Km),Jm),Ym),$m),t.listenerRefiners),t.optionRefiners),s={},c=this.currentViewOptionsInput,l=this.currentViewOptionsRefined,u=!1,d={};for(let e in a)a[e]===c[e]||Xm[e]&&Xm[e](a[e],c[e])?s[e]=l[e]:(a[e]===this.currentCalendarOptionsInput[e]||Xm[e]&&Xm[e](a[e],this.currentCalendarOptionsInput[e])?e in this.currentCalendarOptionsRefined&&(s[e]=this.currentCalendarOptionsRefined[e]):o[e]?s[e]=o[e](a[e]):d[e]=a[e],u=!0);return u&&(this.currentViewOptionsInput=a,this.currentViewOptionsRefined=s),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:d}}};function yb(e,t,n,r,i,a,o,s){let c=uy(t||o.defaultCode,o.map);return new bh({calendarSystem:`gregory`,timeZone:e,namedTimeZoneImpl:a.namedTimeZonedImpl,locale:c,weekNumberCalculation:n,firstDay:r,weekText:i,cmdFormatter:a.cmdFormatter,defaultSeparator:s})}function bb(e,t){return new(t.themeClasses[e.themeSystem]||yy)(e)}function xb(e){return new(e.dateProfileGeneratorClass||$h)(e)}function Sb(e,t,n){return new nb(e,t,n)}function Cb(e){return ah(e,e=>e.ui)}function wb(e,t,n){let r={"":t};for(let t in e){let i=e[t];i.sourceId&&n[i.sourceId]&&(r[t]=n[i.sourceId])}return r}function Tb(e){let{options:t}=e;return{eventUiSingleBase:Tg({display:t.eventDisplay,editable:t.editable,startEditable:t.eventStartEditable,durationEditable:t.eventDurationEditable,constraint:t.eventConstraint,overlap:typeof t.eventOverlap==`boolean`?t.eventOverlap:void 0,allow:t.eventAllow,backgroundColor:t.eventBackgroundColor,borderColor:t.eventBorderColor,textColor:t.eventTextColor,color:t.eventColor},e),selectionConfig:Tg({constraint:t.selectConstraint,overlap:typeof t.selectOverlap==`boolean`?t.selectOverlap:void 0,allow:t.selectAllow},e)}}function Eb(e,t){for(let n of t.pluginHooks.isLoadingFuncs)if(n(e))return!0;return!1}function Db(e){return Gg(e.options.businessHours,e)}function Ob(e,t){for(let n in e)console.warn(`Unknown option '${n}'`+(t?` for view '${t}'`:``))}var kb=class extends ${render(){return G(`div`,{className:`fc-toolbar-chunk`},...this.props.widgetGroups.map(e=>this.renderWidgetGroup(e)))}renderWidgetGroup(e){let{props:t}=this,{theme:n}=this.context,r=[],i=!0;for(let a of e){let{buttonName:e,buttonClick:o,buttonText:s,buttonIcon:c,buttonHint:l}=a;if(e===`title`)i=!1,r.push(G(`h2`,{className:`fc-toolbar-title`,id:t.titleId},t.title));else{let i=e===t.activeButton,a=!t.isTodayEnabled&&e===`today`||!t.isPrevEnabled&&e===`prev`||!t.isNextEnabled&&e===`next`,u=[`fc-${e}-button`,n.getClass(`button`)];i&&u.push(n.getClass(`buttonActive`)),r.push(G(`button`,{type:`button`,title:typeof l==`function`?l(t.navUnit):l,disabled:a,"aria-pressed":i,className:u.join(` `),onClick:o},s||(c?G(`span`,{className:c,role:`img`}):``)))}}return r.length>1?G(`div`,{className:i&&n.getClass(`buttonGroup`)||``},...r):r[0]}},Ab=class extends ${render(){let{model:e,extraClassName:t}=this.props,n=!1,r,i,a=e.sectionWidgets,o=a.center;return a.left?(n=!0,r=a.left):r=a.start,a.right?(n=!0,i=a.right):i=a.end,G(`div`,{className:[t||``,`fc-toolbar`,n?`fc-toolbar-ltr`:``].join(` `)},this.renderSection(`start`,r||[]),this.renderSection(`center`,o||[]),this.renderSection(`end`,i||[]))}renderSection(e,t){let{props:n}=this;return G(kb,{key:e,widgetGroups:t,title:n.title,navUnit:n.navUnit,activeButton:n.activeButton,isTodayEnabled:n.isTodayEnabled,isPrevEnabled:n.isPrevEnabled,isNextEnabled:n.isNextEnabled,titleId:n.titleId})}},jb=class extends ${constructor(){super(...arguments),this.state={availableWidth:null},this.handleEl=e=>{this.el=e,jh(this.props.elRef,e),this.updateAvailableWidth()},this.handleResize=()=>{this.updateAvailableWidth()}}render(){let{props:e,state:t}=this,{aspectRatio:n}=e,r=[`fc-view-harness`,n||e.liquid||e.height?`fc-view-harness-active`:`fc-view-harness-passive`],i=``,a=``;return n?t.availableWidth===null?a=`${1/n*100}%`:i=t.availableWidth/n:i=e.height||``,G(`div`,{"aria-labelledby":e.labeledById,ref:this.handleEl,className:r.join(` `),style:{height:i,paddingBottom:a}},e.children)}componentDidMount(){this.context.addResizeHandler(this.handleResize)}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}updateAvailableWidth(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})}},Mb=class extends N_{constructor(e){super(e),this.handleSegClick=(e,t)=>{let{component:n}=this,{context:r}=n,i=o_(t);if(i&&n.isValidSegDownEl(e.target)){let a=gp(e.target,`.fc-event-forced-url`),o=a?a.querySelector(`a[href]`).href:``;r.emitter.trigger(`eventClick`,{el:t,event:new t_(n.context,i.eventRange.def,i.eventRange.instance),jsEvent:e,view:r.viewApi}),o&&!e.defaultPrevented&&(window.location.href=o)}},this.destroy=Ep(e.el,`click`,`.fc-event`,this.handleSegClick)}},Nb=class extends N_{constructor(e){super(e),this.handleEventElRemove=e=>{e===this.currentSegEl&&this.handleSegLeave(null,this.currentSegEl)},this.handleSegEnter=(e,t)=>{o_(t)&&(this.currentSegEl=t,this.triggerEvent(`eventMouseEnter`,e,t))},this.handleSegLeave=(e,t)=>{this.currentSegEl&&(this.currentSegEl=null,this.triggerEvent(`eventMouseLeave`,e,t))},this.removeHoverListeners=Dp(e.el,`.fc-event`,this.handleSegEnter,this.handleSegLeave)}destroy(){this.removeHoverListeners()}triggerEvent(e,t,n){let{component:r}=this,{context:i}=r,a=o_(n);(!t||r.isValidSegDownEl(t.target))&&i.emitter.trigger(e,{el:n,event:new t_(i,a.eventRange.def,a.eventRange.instance),jsEvent:t,view:i.viewApi})}},Pb=class extends Oh{constructor(){super(...arguments),this.buildViewContext=X(Dh),this.buildViewPropTransformers=X(Ib),this.buildToolbarProps=X(Fb),this.headerRef=Gd(),this.footerRef=Gd(),this.interactionsStore={},this.state={viewLabelId:wp()},this.registerInteractiveComponent=(e,t)=>{let n=P_(e,t),r=[Mb,Nb].concat(this.props.pluginHooks.componentInteractions).map(e=>new e(n));this.interactionsStore[e.uid]=r,F_[e.uid]=n},this.unregisterInteractiveComponent=e=>{let t=this.interactionsStore[e.uid];if(t){for(let e of t)e.destroy();delete this.interactionsStore[e.uid]}delete F_[e.uid]},this.resizeRunner=new mp(()=>{this.props.emitter.trigger(`_resize`,!0),this.props.emitter.trigger(`windowResize`,{view:this.props.viewApi})}),this.handleWindowResize=e=>{let{options:t}=this.props;t.handleWindowResize&&e.target===window&&this.resizeRunner.request(t.windowResizeDelay)}}render(){let{props:e}=this,{toolbarConfig:t,options:n}=e,r=!1,i=``,a;e.isHeightAuto||e.forPrint?i=``:n.height==null?n.contentHeight==null?a=Math.max(n.aspectRatio,.5):i=n.contentHeight:r=!0;let o=this.buildViewContext(e.viewSpec,e.viewApi,e.options,e.dateProfileGenerator,e.dateEnv,e.nowManager,e.theme,e.pluginHooks,e.dispatch,e.getCurrentData,e.emitter,e.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent),s=t.header&&t.header.hasTitle?this.state.viewLabelId:void 0;return G(Eh.Provider,{value:o},G(I_,{unit:`day`},n=>{let o=this.buildToolbarProps(e.viewSpec,e.dateProfile,e.dateProfileGenerator,e.currentDate,n,e.viewTitle);return G(K,null,t.header&&G(Ab,Object.assign({ref:this.headerRef,extraClassName:`fc-header-toolbar`,model:t.header,titleId:s},o)),G(jb,{liquid:r,height:i,aspectRatio:a,labeledById:s},this.renderView(e),this.buildAppendContent()),t.footer&&G(Ab,Object.assign({ref:this.footerRef,extraClassName:`fc-footer-toolbar`,model:t.footer,titleId:``},o)))}))}componentDidMount(){let{props:e}=this;this.calendarInteractions=e.pluginHooks.calendarInteractions.map(t=>new t(e)),window.addEventListener(`resize`,this.handleWindowResize);let{propSetHandlers:t}=e.pluginHooks;for(let n in t)t[n](e[n],e)}componentDidUpdate(e){let{props:t}=this,{propSetHandlers:n}=t.pluginHooks;for(let r in n)t[r]!==e[r]&&n[r](t[r],t)}componentWillUnmount(){window.removeEventListener(`resize`,this.handleWindowResize),this.resizeRunner.clear();for(let e of this.calendarInteractions)e.destroy();this.props.emitter.trigger(`_unmount`)}buildAppendContent(){let{props:e}=this;return G(K,{},...e.pluginHooks.viewContainerAppends.map(t=>t(e)))}renderView(e){let{pluginHooks:t}=e,{viewSpec:n}=e,r={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},i=this.buildViewPropTransformers(t.viewPropsTransformers);for(let t of i)Object.assign(r,t.transform(r,e));let a=n.component;return G(a,Object.assign({},r))}};function Fb(e,t,n,r,i,a){let o=n.build(i,void 0,!1),s=n.buildPrev(t,r,!1),c=n.buildNext(t,r,!1);return{title:a,activeButton:e.type,navUnit:e.singleUnit,isTodayEnabled:o.isValid&&!qh(t.currentRange,i),isPrevEnabled:s.isValid,isNextEnabled:c.isValid}}function Ib(e){return e.map(e=>new e)}var Lb=class extends R_{constructor(e,t={}){super(),this.isRendering=!1,this.isRendered=!1,this.currentClassNames=[],this.customContentRenderId=0,this.handleAction=e=>{switch(e.type){case`SET_EVENT_DRAG`:case`SET_EVENT_RESIZE`:this.renderRunner.tryDrain()}},this.handleData=e=>{this.currentData=e,this.renderRunner.request(e.calendarOptions.rerenderDelay)},this.handleRenderRequest=()=>{if(this.isRendering){this.isRendered=!0;let{currentData:e}=this;Sh(()=>{hf(G(M_,{options:e.calendarOptions,theme:e.theme,emitter:e.emitter},(t,n,r,i)=>(this.setClassNames(t),this.setHeight(n),G(Ih.Provider,{value:this.customContentRenderId},G(Pb,Object.assign({isHeightAuto:r,forPrint:i},e))))),this.el)})}else this.isRendered&&(this.isRendered=!1,hf(null,this.el),this.setClassNames([]),this.setHeight(``))},sp(e),this.el=e,this.renderRunner=new mp(this.handleRenderRequest),new vb({optionOverrides:t,calendarApi:this,onAction:this.handleAction,onData:this.handleData})}render(){let e=this.isRendering;e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()}destroy(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())}updateSize(){Sh(()=>{super.updateSize()})}batchRendering(e){this.renderRunner.pause(`batchRendering`),e(),this.renderRunner.resume(`batchRendering`)}pauseRendering(){this.renderRunner.pause(`pauseRendering`)}resumeRendering(){this.renderRunner.resume(`pauseRendering`,!0)}resetOptions(e,t){this.currentDataManager.resetOptions(e,t)}setClassNames(e){if(!Xp(e,this.currentClassNames)){let{classList:t}=this.el;for(let e of this.currentClassNames)t.remove(e);for(let n of e)t.add(n);this.currentClassNames=e}}setHeight(e){xp(this.el,`height`,e)}},Rb=class extends $_{constructor(){super(...arguments),this.headerElRef=Gd()}renderSimpleLayout(e,t){let{props:n,context:r}=this,i=[],a=Mv(r.options);return e&&i.push({type:`header`,key:`header`,isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:`fc-col-header`,rowContent:e}}),i.push({type:`body`,key:`body`,liquid:!0,chunk:{content:t}}),G(Bh,{elClasses:[`fc-daygrid`],viewSpec:r.viewSpec},G(Pv,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:i}))}renderHScrollLayout(e,t,n,r){let i=this.context.pluginHooks.scrollGridImpl;if(!i)throw Error(`No ScrollGrid implementation`);let{props:a,context:o}=this,s=!a.forPrint&&Mv(o.options),c=!a.forPrint&&Nv(o.options),l=[];return e&&l.push({type:`header`,key:`header`,isSticky:s,chunks:[{key:`main`,elRef:this.headerElRef,tableClassName:`fc-col-header`,rowContent:e}]}),l.push({type:`body`,key:`body`,liquid:!0,chunks:[{key:`main`,content:t}]}),c&&l.push({type:`footer`,key:`footer`,isSticky:!0,chunks:[{key:`main`,content:jv}]}),G(Bh,{elClasses:[`fc-daygrid`],viewSpec:o.viewSpec},G(i,{liquid:!a.isHeightAuto&&!a.forPrint,forPrint:a.forPrint,collapsibleWidth:a.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:l}))}};function zb(e,t){let n=[];for(let e=0;e<t;e+=1)n[e]=[];for(let t of e)n[t.row].push(t);return n}function Bb(e,t){let n=[];for(let e=0;e<t;e+=1)n[e]=[];for(let t of e)n[t.firstCol].push(t);return n}function Vb(e,t){let n=[];if(e){for(let r=0;r<t;r+=1)n[r]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(let t of e.segs)n[t.row].segs.push(t)}else for(let e=0;e<t;e+=1)n[e]=null;return n}var Hb=Z({hour:`numeric`,minute:`2-digit`,omitZeroMinute:!0,meridiem:`narrow`});function Ub(e){let{display:t}=e.eventRange.ui;return t===`list-item`||t===`auto`&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var Wb=class extends ${render(){let{props:e}=this;return G(Lv,Object.assign({},e,{elClasses:[`fc-daygrid-event`,`fc-daygrid-block-event`,`fc-h-event`],defaultTimeFormat:Hb,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}},Gb=class extends ${render(){let{props:e,context:t}=this,{options:n}=t,{seg:r}=e,i=m_(r,n.eventTimeFormat||Hb,t,!0,e.defaultDisplayEventEnd);return G(Iv,Object.assign({},e,{elTag:`a`,elClasses:[`fc-daygrid-event`,`fc-daygrid-dot-event`],elAttrs:v_(e.seg,t),defaultGenerator:Kb,timeText:i,isResizing:!1,isDateSelecting:!1}))}};function Kb(e){return G(K,null,G(`div`,{className:`fc-daygrid-event-dot`,style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&G(`div`,{className:`fc-event-time`},e.timeText),G(`div`,{className:`fc-event-title`},e.event.title||G(K,null,`\xA0`)))}var qb=class extends ${constructor(){super(...arguments),this.compileSegs=X(Jb)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return G(Zv,{elClasses:[`fc-daygrid-more-link`],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let n=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return G(K,null,t.map(t=>{let r=t.eventRange.instance.instanceId;return G(`div`,{className:`fc-daygrid-event-harness`,key:r,style:{visibility:n[r]?`hidden`:``}},Ub(t)?G(Gb,Object.assign({seg:t,isDragging:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},h_(t,e.todayRange))):G(Wb,Object.assign({seg:t,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},h_(t,e.todayRange))))}))}})}};function Jb(e){let t=[],n=[];for(let r of e)t.push(r.seg),r.isVisible||n.push(r.seg);return{allSegs:t,invisibleSegs:n}}var Yb=Z({week:`narrow`}),Xb=class extends $_{constructor(){super(...arguments),this.rootElRef=Gd(),this.state={dayNumberId:wp()},this.handleRootEl=e=>{jh(this.rootElRef,e),jh(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:r}=this,{options:i,dateEnv:a}=e,{date:o,dateProfile:s}=t,c=t.showDayNumber&&Qb(o,s.currentRange,a);return G(Bv,{elTag:`td`,elRef:this.handleRootEl,elClasses:[`fc-daygrid-day`,...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:`gridcell`}),defaultGenerator:Zb,date:o,dateProfile:s,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:c,extraRenderProps:t.extraRenderProps},(a,s)=>G(`div`,{ref:t.innerElRef,className:`fc-daygrid-day-frame fc-scrollgrid-sync-inner`,style:{minHeight:t.minHeight}},t.showWeekNumber&&G(Kv,{elTag:`a`,elClasses:[`fc-daygrid-week-number`],elAttrs:W_(e,o,`week`),date:o,defaultFormat:Yb}),!s.isDisabled&&(t.showDayNumber||Vv(i)||t.forceDayTop)?G(`div`,{className:`fc-daygrid-day-top`},G(a,{elTag:`a`,elClasses:[`fc-daygrid-day-number`,c&&`fc-daygrid-month-start`],elAttrs:Object.assign(Object.assign({},W_(e,o)),{id:n.dayNumberId})})):t.showDayNumber?G(`div`,{className:`fc-daygrid-day-top`,style:{visibility:`hidden`}},G(`a`,{className:`fc-daygrid-day-number`},`\xA0`)):void 0,G(`div`,{className:`fc-daygrid-day-events`,ref:t.fgContentElRef},t.fgContent,G(`div`,{className:`fc-daygrid-day-bottom`,style:{marginTop:t.moreMarginTop}},G(qb,{allDayDate:o,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:r,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),G(`div`,{className:`fc-daygrid-day-bg`},t.bgContent)))}};function Zb(e){return e.dayNumberText||G(K,null,`\xA0`)}function Qb(e,t,n){let{start:r,end:i}=t,a=$p(i,-1),o=n.getYear(r),s=n.getMonth(r),c=n.getYear(a),l=n.getMonth(a);return!(o===c&&s===l)&&(e.valueOf()===r.valueOf()||n.getDay(e)===1&&e.valueOf()<i.valueOf())}function $b(e){return e.eventRange.instance.instanceId+`:`+e.firstCol}function ex(e){return $b(e)+`:`+e.lastCol}function tx(e,t,n,r,i,a,o){let s=new ax(t=>i[e[t.index].eventRange.instance.instanceId+`:`+t.span.start+`:`+(t.span.end-1)]||1);s.allowReslicing=!0,s.strictOrder=r,t===!0||n===!0?(s.maxCoord=a,s.hiddenConsumes=!0):typeof t==`number`?s.maxStackCnt=t:typeof n==`number`&&(s.maxStackCnt=n,s.hiddenConsumes=!0);let c=[],l=[];for(let t=0;t<e.length;t+=1){let n=e[t];i[ex(n)]==null?l.push(n):c.push({index:t,span:{start:n.firstCol,end:n.lastCol+1}})}let u=s.addSegs(c),{singleColPlacements:d,multiColPlacements:f,leftoverMargins:p}=nx(s.toRects(),e,o),m=[],h=[];for(let e of l){f[e.firstCol].push({seg:e,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let t=e.firstCol;t<=e.lastCol;t+=1)d[t].push({seg:ix(e,t,t+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let e=0;e<o.length;e+=1)m.push(0);for(let t of u){let n=e[t.index],r=t.span;f[r.start].push({seg:ix(n,r.start,r.end,o),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let e=r.start;e<r.end;e+=1)m[e]+=1,d[e].push({seg:ix(n,e,e+1,o),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let e=0;e<o.length;e+=1)h.push(p[e]);return{singleColPlacements:d,multiColPlacements:f,moreCnts:m,moreMarginTops:h}}function nx(e,t,n){let r=rx(e,n.length),i=[],a=[],o=[];for(let e=0;e<n.length;e+=1){let s=r[e],c=[],l=0,u=0;for(let r of s){let i=t[r.index];c.push({seg:ix(i,e,e+1,n),isVisible:!0,isAbsolute:!1,absoluteTop:r.levelCoord,marginTop:r.levelCoord-l}),l=r.levelCoord+r.thickness}let d=[];l=0,u=0;for(let r of s){let i=t[r.index],a=r.span.end-r.span.start>1,o=r.span.start===e;u+=r.levelCoord-l,l=r.levelCoord+r.thickness,a?(u+=r.thickness,o&&d.push({seg:ix(i,r.span.start,r.span.end,n),isVisible:!0,isAbsolute:!0,absoluteTop:r.levelCoord,marginTop:0})):o&&(d.push({seg:ix(i,r.span.start,r.span.end,n),isVisible:!0,isAbsolute:!1,absoluteTop:r.levelCoord,marginTop:u}),u=0)}i.push(c),a.push(d),o.push(u)}return{singleColPlacements:i,multiColPlacements:a,leftoverMargins:o}}function rx(e,t){let n=[];for(let e=0;e<t;e+=1)n.push([]);for(let t of e)for(let e=t.span.start;e<t.span.end;e+=1)n[e].push(t);return n}function ix(e,t,n,r){if(e.firstCol===t&&e.lastCol===n-1)return e;let i=e.eventRange,a=i.range,o=Gh(a,{start:r[t].date,end:J(r[n-1].date,1)});return Object.assign(Object.assign({},e),{firstCol:t,lastCol:n-1,eventRange:{def:i.def,ui:Object.assign(Object.assign({},i.ui),{durationEditable:!1}),instance:i.instance,range:o},isStart:e.isStart&&o.start.valueOf()===a.start.valueOf(),isEnd:e.isEnd&&o.end.valueOf()===a.end.valueOf()})}var ax=class extends ev{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){let t=super.addSegs(e),{entriesByLevel:n}=this,r=e=>!this.forceHidden[nv(e)];for(let e=0;e<n.length;e+=1)n[e]=n[e].filter(r);return t}handleInvalidInsertion(e,t,n){let{entriesByLevel:r,forceHidden:i}=this,{touchingEntry:a,touchingLevel:o,touchingLateral:s}=e;if(this.hiddenConsumes&&a){let e=nv(a);if(!i[e])if(this.allowReslicing){let e=Object.assign(Object.assign({},a),{span:rv(a.span,t.span)}),c=nv(e);i[c]=!0,r[o][s]=e,n.push(e),this.splitEntry(a,t,n)}else i[e]=!0,n.push(a)}super.handleInvalidInsertion(e,t,n)}},ox=class extends $_{constructor(){super(...arguments),this.cellElRefs=new bv,this.frameElRefs=new bv,this.fgElRefs=new bv,this.segHarnessRefs=new bv,this.rootElRef=Gd(),this.state={framePositions:null,maxContentHeight:null,segHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:r}=n,i=e.cells.length,a=Bb(e.businessHourSegs,i),o=Bb(e.bgEventSegs,i),s=Bb(this.getHighlightSegs(),i),c=Bb(this.getMirrorSegs(),i),{singleColPlacements:l,multiColPlacements:u,moreCnts:d,moreMarginTops:f}=tx(l_(e.fgEventSegs,r.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,r.eventOrderStrict,t.segHeights,t.maxContentHeight,e.cells),p=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return G(`tr`,{ref:this.rootElRef,role:`row`},e.renderIntro&&e.renderIntro(),e.cells.map((t,n)=>{let r=this.renderFgSegs(n,e.forPrint?l[n]:u[n],e.todayRange,p),i=this.renderFgSegs(n,sx(c[n],u),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return G(Xb,{key:t.key,elRef:this.cellElRefs.createRef(t.key),innerElRef:this.frameElRefs.createRef(t.key),dateProfile:e.dateProfile,date:t.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&n===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:t.extraRenderProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,moreCnt:d[n],moreMarginTop:f[n],singlePlacements:l[n],fgContentElRef:this.fgElRefs.createRef(t.key),fgContent:G(K,null,G(K,null,r),G(K,null,i)),bgContent:G(K,null,this.renderFillSegs(s[n],`highlight`),this.renderFillSegs(a[n],`non-business`),this.renderFillSegs(o[n],`bg-event`)),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!ch(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,r,i,a,o){let{context:s}=this,{eventSelection:c}=this.props,{framePositions:l}=this.state,u=this.props.cells.length===1,d=i||a||o,f=[];if(l)for(let e of t){let{seg:t}=e,{instanceId:p}=t.eventRange.instance,m=e.isVisible&&!r[p],h=e.isAbsolute,g=``,_=``;h&&(s.isRtl?(_=0,g=l.lefts[t.lastCol]-l.lefts[t.firstCol]):(g=0,_=l.rights[t.firstCol]-l.rights[t.lastCol])),f.push(G(`div`,{className:`fc-daygrid-event-harness`+(h?` fc-daygrid-event-harness-abs`:``),key:$b(t),ref:d?null:this.segHarnessRefs.createRef(ex(t)),style:{visibility:m?``:`hidden`,marginTop:h?``:e.marginTop,top:h?e.absoluteTop:``,left:g,right:_}},Ub(t)?G(Gb,Object.assign({seg:t,isDragging:i,isSelected:p===c,defaultDisplayEventEnd:u},h_(t,n))):G(Wb,Object.assign({seg:t,isDragging:i,isResizing:a,isDateSelecting:o,isSelected:p===c,defaultDisplayEventEnd:u},h_(t,n)))))}return f}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:r}=this.props,{framePositions:i}=this.state,a=[];if(i)for(let o of e){let e=n?{right:0,left:i.lefts[o.lastCol]-i.lefts[o.firstCol]}:{left:0,right:i.rights[o.firstCol]-i.rights[o.lastCol]};a.push(G(`div`,{key:__(o.eventRange),className:`fc-daygrid-bg-harness`,style:e},t===`bg-event`?G(Uv,Object.assign({seg:o},h_(o,r))):Gv(t)))}return G(K,{},...a)}updateSizing(e){let{props:t,state:n,frameElRefs:r}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let e=t.cells.map(e=>r.currentMap[e.key]);if(e.length){let t=this.rootElRef.current,r=new Z_(t,e,!0,!1);(!n.framePositions||!n.framePositions.similarTo(r))&&this.setState({framePositions:new Z_(t,e,!0,!1)})}}let i=this.state.segHeights,a=this.querySegHeights(),o=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({segHeights:Object.assign(Object.assign({},i),a),maxContentHeight:o?this.computeMaxContentHeight():null})}}querySegHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let r=Math.round(e[n].getBoundingClientRect().height);t[n]=Math.max(t[n]||0,r)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}};ox.addStateEquality({segHeights:ch});function sx(e,t){if(!e.length)return[];let n=cx(t);return e.map(e=>({seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:n[e.eventRange.instance.instanceId],marginTop:0}))}function cx(e){let t={};for(let n of e)for(let e of n)t[e.seg.eventRange.instance.instanceId]=e.absoluteTop;return t}var lx=class extends $_{constructor(){super(...arguments),this.splitBusinessHourSegs=X(zb),this.splitBgEventSegs=X(ux),this.splitFgEventSegs=X(zb),this.splitDateSelectionSegs=X(zb),this.splitEventDrag=X(Vb),this.splitEventResize=X(Vb),this.rowRefs=new bv}render(){let{props:e,context:t}=this,n=e.cells.length,r=this.splitBusinessHourSegs(e.businessHourSegs,n),i=this.splitBgEventSegs(e.bgEventSegs,n),a=this.splitFgEventSegs(e.fgEventSegs,n),o=this.splitDateSelectionSegs(e.dateSelectionSegs,n),s=this.splitEventDrag(e.eventDrag,n),c=this.splitEventResize(e.eventResize,n),l=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return G(I_,{unit:`day`},(t,u)=>G(K,null,e.cells.map((t,d)=>G(ox,{ref:this.rowRefs.createRef(d),key:t.length?t[0].date.toISOString():d,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:u,dateProfile:e.dateProfile,cells:t,renderIntro:e.renderRowIntro,businessHourSegs:r[d],eventSelection:e.eventSelection,bgEventSegs:i[d],fgEventSegs:a[d],dateSelectionSegs:o[d],eventDrag:s[d],eventResize:c[d],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:l,forPrint:e.forPrint}))))}componentDidMount(){this.registerInteractiveComponent()}componentDidUpdate(){this.registerInteractiveComponent()}registerInteractiveComponent(){if(!this.rootEl){let e=this.rowRefs.currentMap[0].getCellEls()[0],t=e?e.closest(`.fc-daygrid-body`):null;t&&(this.rootEl=t,this.context.registerInteractiveComponent(this,{el:t,isHitComboAllowed:this.props.isHitComboAllowed}))}}componentWillUnmount(){this.rootEl&&=(this.context.unregisterInteractiveComponent(this),null)}prepareHits(){this.rowPositions=new Z_(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new Z_(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:r}=this,i=n.leftToIndex(e),a=r.topToIndex(t);if(a!=null&&i!=null){let e=this.props.cells[a][i];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(a,i),allDay:!0},e.extraDateSpan),dayEl:this.getCellEl(a,i),rect:{left:n.lefts[i],right:n.rights[i],top:r.tops[a],bottom:r.bottoms[a]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date;return{start:n,end:J(n,1)}}};function ux(e,t){return zb(e.filter(dx),t)}function dx(e){return e.eventRange.def.allDay}var fx=class extends $_{constructor(){super(...arguments),this.elRef=Gd(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:r}=e,i=n===!0||t===!0;i&&!r&&(i=!1,t=null,n=null);let a=[`fc-daygrid-body`,i?`fc-daygrid-body-balanced`:`fc-daygrid-body-unbalanced`,r?``:`fc-daygrid-body-natural`];return G(`div`,{ref:this.elRef,className:a.join(` `),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},G(`table`,{role:`presentation`,className:`fc-scrollgrid-sync-table`,style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:r?e.clientHeight:``}},e.colGroupNode,G(`tbody`,{role:`presentation`},G(lx,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile===this.props.dateProfile?this.flushScrollReset():this.requestScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){let e=px(this.elRef.current,this.props.dateProfile);if(e){let t=e.closest(`.fc-daygrid-body`),n=t.closest(`.fc-scroller`),r=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=r?r+1:0}this.needsScrollReset=!1}}};function px(e,t){let n;return t.currentRangeUnit.match(/year|month/)&&(n=e.querySelector(`[data-date="${Sm(t.currentDate)}-01"]`)),n||=e.querySelector(`[data-date="${xm(t.currentDate)}"]`),n}var mx=class extends gv{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}},hx=class extends $_{constructor(){super(...arguments),this.slicer=new mx,this.tableRef=Gd()}render(){let{props:e,context:t}=this;return G(fx,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}},gx=class extends Rb{constructor(){super(...arguments),this.buildDayTableModel=X(_x),this.headerRef=Gd(),this.tableRef=Gd()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,r=this.buildDayTableModel(n.dateProfile,t),i=e.dayHeaders&&G(fv,{ref:this.headerRef,dateProfile:n.dateProfile,dates:r.headerDates,datesRepDistinctDays:r.rowCnt===1}),a=t=>G(hx,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:r,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(i,a,r.colCnt,e.dayMinWidth):this.renderSimpleLayout(i,a)}};function _x(e,t){return new hv(new mv(e.renderRange,t),/year|month|week/.test(e.currentRangeUnit))}var vx=class extends $h{buildRenderRange(e,t,n){let r=super.buildRenderRange(e,t,n),{props:i}=this;return yx({currentRange:r,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:i.fixedWeekCount,dateEnv:i.dateEnv})}};function yx(e){let{dateEnv:t,currentRange:n}=e,{start:r,end:i}=n,a;if(e.snapToWeek&&(r=t.startOfWeek(r),a=t.startOfWeek(i),a.valueOf()!==i.valueOf()&&(i=Qp(a,1))),e.fixedWeekCount){let e=t.startOfWeek(t.startOfMonth(J(n.end,-1))),r=Math.ceil(em(e,i));i=Qp(i,6-r)}return{start:r,end:i}}op(`:root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}`);var bx=my({name:`@fullcalendar/daygrid`,initialView:`dayGridMonth`,views:{dayGrid:{component:gx,dateProfileGeneratorClass:vx},dayGridDay:{type:`dayGrid`,duration:{days:1}},dayGridWeek:{type:`dayGrid`,duration:{weeks:1}},dayGridMonth:{type:`dayGrid`,duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:`dayGrid`,duration:{years:1}}}}),xx=class extends ${constructor(){super(...arguments),this.state={textId:wp()}}render(){let{theme:e,dateEnv:t,options:n,viewApi:r}=this.context,{cellId:i,dayDate:a,todayRange:o}=this.props,{textId:s}=this.state,c=B_(a,o),l=n.listDayFormat?t.format(a,n.listDayFormat):``,u=n.listDaySideFormat?t.format(a,n.listDaySideFormat):``,d=Object.assign({date:t.toDate(a),view:r,textId:s,text:l,sideText:u,navLinkAttrs:W_(this.context,a),sideNavLinkAttrs:W_(this.context,a,`day`,!1)},c);return G(Lh,{elTag:`tr`,elClasses:[`fc-list-day`,...V_(c,e)],elAttrs:{"data-date":xm(a)},renderProps:d,generatorName:`dayHeaderContent`,customGenerator:n.dayHeaderContent,defaultGenerator:Sx,classNameGenerator:n.dayHeaderClassNames,didMount:n.dayHeaderDidMount,willUnmount:n.dayHeaderWillUnmount},t=>G(`th`,{scope:`colgroup`,colSpan:3,id:i,"aria-labelledby":s},G(t,{elTag:`div`,elClasses:[`fc-list-day-cushion`,e.getClass(`tableCellShaded`)]})))}};function Sx(e){return G(K,null,e.text&&G(`a`,Object.assign({id:e.textId,className:`fc-list-day-text`},e.navLinkAttrs),e.text),e.sideText&&G(`a`,Object.assign({"aria-hidden":!0,className:`fc-list-day-side-text`},e.sideNavLinkAttrs),e.sideText))}var Cx=Z({hour:`numeric`,minute:`2-digit`,meridiem:`short`}),wx=class extends ${render(){let{props:e,context:t}=this,{options:n}=t,{seg:r,timeHeaderId:i,eventHeaderId:a,dateHeaderId:o}=e,s=n.eventTimeFormat||Cx;return G(Iv,Object.assign({},e,{elTag:`tr`,elClasses:[`fc-list-event`,r.eventRange.def.url&&`fc-event-forced-url`],defaultGenerator:()=>Tx(r,t),seg:r,timeText:``,disableDragging:!0,disableResizing:!0}),(e,n)=>G(K,null,Ex(r,s,t,i,o),G(`td`,{"aria-hidden":!0,className:`fc-list-event-graphic`},G(`span`,{className:`fc-list-event-dot`,style:{borderColor:n.borderColor||n.backgroundColor}})),G(e,{elTag:`td`,elClasses:[`fc-list-event-title`],elAttrs:{headers:`${a} ${o}`}})))}};function Tx(e,t){let n=v_(e,t);return G(`a`,Object.assign({},n),e.eventRange.def.title)}function Ex(e,t,n,r,i){let{options:a}=n;if(a.displayEventTime!==!1){let o=e.eventRange.def,s=e.eventRange.instance,c=!1,l;if(o.allDay?c=!0:Zh(e.eventRange.range)?e.isStart?l=m_(e,t,n,null,null,s.range.start,e.end):e.isEnd?l=m_(e,t,n,null,null,e.start,s.range.end):c=!0:l=m_(e,t,n),c){let e={text:n.options.allDayText,view:n.viewApi};return G(Lh,{elTag:`td`,elClasses:[`fc-list-event-time`],elAttrs:{headers:`${r} ${i}`},renderProps:e,generatorName:`allDayContent`,customGenerator:a.allDayContent,defaultGenerator:Dx,classNameGenerator:a.allDayClassNames,didMount:a.allDayDidMount,willUnmount:a.allDayWillUnmount})}return G(`td`,{className:`fc-list-event-time`},l)}return null}function Dx(e){return e.text}var Ox=class extends $_{constructor(){super(...arguments),this.computeDateVars=X(Ax),this.eventStoreToSegs=X(this._eventStoreToSegs),this.state={timeHeaderId:wp(),eventHeaderId:wp(),dateHeaderIdRoot:wp()},this.setRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e}):this.context.unregisterInteractiveComponent(this)}}render(){let{props:e,context:t}=this,{dayDates:n,dayRanges:r}=this.computeDateVars(e.dateProfile),i=this.eventStoreToSegs(e.eventStore,e.eventUiBases,r);return G(Bh,{elRef:this.setRootEl,elClasses:[`fc-list`,t.theme.getClass(`table`),t.options.stickyHeaderDates===!1?``:`fc-list-sticky`],viewSpec:t.viewSpec},G(yv,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?`visible`:`hidden`,overflowY:e.isHeightAuto?`visible`:`auto`},i.length>0?this.renderSegList(i,n):this.renderEmptyMessage()))}renderEmptyMessage(){let{options:e,viewApi:t}=this.context;return G(Lh,{elTag:`div`,elClasses:[`fc-list-empty`],renderProps:{text:e.noEventsText,view:t},generatorName:`noEventsContent`,customGenerator:e.noEventsContent,defaultGenerator:kx,classNameGenerator:e.noEventsClassNames,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},e=>G(e,{elTag:`div`,elClasses:[`fc-list-empty-cushion`]}))}renderSegList(e,t){let{theme:n,options:r}=this.context,{timeHeaderId:i,eventHeaderId:a,dateHeaderIdRoot:o}=this.state,s=jx(e);return G(I_,{unit:`day`},(e,c)=>{let l=[];for(let n=0;n<s.length;n+=1){let u=s[n];if(u){let s=xm(t[n]),d=o+`-`+s;l.push(G(xx,{key:s,cellId:d,dayDate:t[n],todayRange:c})),u=l_(u,r.eventOrder);for(let t of u)l.push(G(wx,Object.assign({key:s+`:`+t.eventRange.instance.instanceId,seg:t,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:i,eventHeaderId:a,dateHeaderId:d},h_(t,c,e))))}}return G(`table`,{className:`fc-list-table `+n.getClass(`table`)},G(`thead`,null,G(`tr`,null,G(`th`,{scope:`col`,id:i},r.timeHint),G(`th`,{scope:`col`,"aria-hidden":!0}),G(`th`,{scope:`col`,id:a},r.eventHint))),G(`tbody`,null,l))})}_eventStoreToSegs(e,t,n){return this.eventRangesToSegs(i_(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)}eventRangesToSegs(e,t){let n=[];for(let r of e)n.push(...this.eventRangeToSegs(r,t));return n}eventRangeToSegs(e,t){let{dateEnv:n}=this.context,{nextDayThreshold:r}=this.context.options,i=e.range,a=e.def.allDay,o,s,c,l=[];for(o=0;o<t.length;o+=1)if(s=Gh(i,t[o]),s&&(c={component:this,eventRange:e,start:s.start,end:s.end,isStart:e.isStart&&s.start.valueOf()===i.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===i.end.valueOf(),dayIndex:o},l.push(c),!c.isEnd&&!a&&o+1<t.length&&i.end<n.add(t[o+1].start,r))){c.end=i.end,c.isEnd=!0;break}return l}};function kx(e){return e.text}function Ax(e){let t=Y(e.renderRange.start),n=e.renderRange.end,r=[],i=[];for(;t<n;)r.push(t),i.push({start:t,end:J(t,1)}),t=J(t,1);return{dayDates:r,dayRanges:i}}function jx(e){let t=[],n,r;for(n=0;n<e.length;n+=1)r=e[n],(t[r.dayIndex]||(t[r.dayIndex]=[])).push(r);return t}op(`:root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}`);var Mx={listDayFormat:Nx,listDaySideFormat:Nx,noEventsClassNames:Q,noEventsContent:Q,noEventsDidMount:Q,noEventsWillUnmount:Q};function Nx(e){return e===!1?null:Z(e)}var Px=my({name:`@fullcalendar/list`,optionRefiners:Mx,views:{list:{component:Ox,buttonTextKey:`list`,listDayFormat:{month:`long`,day:`numeric`,year:`numeric`}},listDay:{type:`list`,duration:{days:1},listDayFormat:{weekday:`long`}},listWeek:{type:`list`,duration:{weeks:1},listDayFormat:{weekday:`long`},listDaySideFormat:{month:`long`,day:`numeric`,year:`numeric`}},listMonth:{type:`list`,duration:{month:1},listDaySideFormat:{weekday:`long`}},listYear:{type:`list`,duration:{year:1},listDaySideFormat:{weekday:`long`}}}}),Fx={headerToolbar:!0,footerToolbar:!0,events:!0,eventSources:!0,resources:!0},Ix=j({props:{options:Object},data(){return{renderId:0,customRenderingMap:new Map}},methods:{getApi(){return Rx(this).calendar},buildOptions(e){return{...e,customRenderingMetaMap:Bx(this.$slots),handleCustomRendering:Rx(this).handleCustomRendering}}},render(){let e=[];for(let t of this.customRenderingMap.values())e.push(Ua(Lx,{key:t.id,customRendering:t}));return Ua(`div`,{attrs:{"data-fc-render-id":this.renderId}},Ua(N,e))},mounted(){let e=new ay;Rx(this).handleCustomRendering=e.handle.bind(e);let t=this.buildOptions(this.options),n=new Lb(this.$el,t);Rx(this).calendar=n,n.render(),e.subscribe(e=>{this.customRenderingMap=e,this.renderId++,Rx(this).needCustomRenderingResize=!0})},beforeUpdate(){this.getApi().resumeRendering()},updated(){Rx(this).needCustomRenderingResize&&(Rx(this).needCustomRenderingResize=!1,this.getApi().updateSize())},beforeUnmount(){this.getApi().destroy()},watch:zx()}),Lx=j({props:{customRendering:Object},render(){let e=this.customRendering,t=typeof e.generatorMeta==`function`?e.generatorMeta(e.renderProps):e.generatorMeta;return Ua(tr,{to:e.containerEl},t)}});function Rx(e){return e}function zx(){let e={options:{deep:!0,handler(e){let t=this.getApi();t.pauseRendering();let n=this.buildOptions(e);t.resetOptions(n),this.renderId++}}};for(let t in Fx)e[`options.${t}`]={deep:!0,handler(e){if(e!==void 0){let n=this.getApi();n.pauseRendering(),n.resetOptions({[t]:e},[t]),this.renderId++}}};return e}function Bx(e){let t={};for(let n in e)t[Vx(n)]=e[n];return t}function Vx(e){return e.split(`-`).map((e,t)=>t?Hx(e):e).join(``)}function Hx(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ux=Ix,Wx=j({__name:`PlanningCalendarComponent`,emits:[`activity-click`],setup(e,{emit:t}){let n=t,r=Object.fromEntries(_d.map(e=>[e.id,e])),i=Xt(null),a=Xt(!1),o=Xt(`dayGridMonth`),s=Ha(()=>vd.map(e=>({title:e.name,start:e.date,extendedProps:{activity:e}}))),c=Ha(()=>({plugins:[bx,Px],initialView:`dayGridMonth`,locales:[Ad],firstDay:1,aspectRatio:a.value?1:2.5,headerToolbar:a.value?{left:`title`,right:`prev,next`}:{left:`title`,right:`prev today next`},eventColor:`#1f2937`,eventBorderColor:`#374151`,showNonCurrentDates:!1,events:s.value,displayEventTime:!1,listDaySideFormat:!1,eventContent(e){let t=e.event.extendedProps.activity.tags??[],n=(e.event.extendedProps.activity.programs?.map(e=>r[e])??[]).map(e=>`<span class="px-1 mr-1 rounded-md ${yd[e.tagColor]}">
            ${e.name}
          </span>`).join(``),i=t.map(e=>`<span class="px-1 rounded-md mr-1 text-xs ${bd[e.color]}">
            ${e.label}
          </span>`).join(``);return a.value?{html:`
        <div class="m-1 text-xs">
          <div class="font-bold">
            ${e.event.title}
          </div>
        </div>
      `}:{html:`
        <div class="m-1 whitespace-normal">
          <div class="flex">
            ${n}
          </div>
          <div class="font-bold">
            ${e.event.title}
          </div>
         <div class="flex">
          ${i}
          </div>
        </div>
      `}},eventDidMount(e){let t=e.event.extendedProps.activity.duration,n=e.event.extendedProps.activity.distance,r=e.event.extendedProps.activity.description,i=[t?`Durée : ${gl(t)}`:``,n?`Distance : ${n} km`:``,r?`\n${r}`:``].filter(Boolean).join(`
`);i&&(e.el.title=i)},eventClick(e){n(`activity-click`,e.event.extendedProps.activity)}}));br(()=>{let e=window.matchMedia(`(max-width: 1024px)`);a.value=e.matches,o.value=a.value?`listMonth`:`dayGridMonth`;let t=i.value?.getApi();t&&t.changeView(o.value),e.addEventListener(`change`,e=>{a.value=e.matches,l(e.matches?`listMonth`:`dayGridMonth`)})});function l(e){let t=i.value?.getApi();t&&(o.value=e,t.changeView(e))}return(e,t)=>(P(),ia(A(Ux),{ref_key:`calendarRef`,ref:i,options:c.value},null,8,[`options`]))}}),Gx=j({__name:`PlanningView`,setup(e){let t=Xt(null);return(e,n)=>(P(),F(N,null,[L(Wx,{onActivityClick:n[0]||=e=>t.value=e}),t.value?(P(),ia(kd,{key:0,activity:t.value,onClose:n[1]||=e=>t.value=null},null,8,[`activity`])):ma(``,!0)],64))}}),Kx=[{name:`Téléphone Samsung S23 Ultra`,type:`material`,usage:`Caméra principale`,url:`https://boutiquepro.orange.fr/telephone-mobile-samsung-galaxy-s23-ultra-5g-noir-256go.html?utm_medium=bu_sms_lienweb&utm_source=bu_sms_siteshowroom_mobile&utm_campaign=2023_02_lancement_samsung&utm_content=tm&utm_term=mobile_samsung_s23ultra_boutiquepro`,price:850},{name:`Rode Wireless Go 2`,type:`material`,usage:`Micro principal, 1 émetteur sur l'homme et 1 récepteur connecté au téléphone`,url:`https://www.boulanger.com/ref/1187303`,price:203.99},{name:`NEEWER NL 660`,type:`material`,usage:`Eclairage principal et secondaire (principal presque de face, secondaire de 3/4)`,url:`https://fr.neewer.com/products/nl660-led-panel-lights-66600536`,price:232.99},{name:`Trépied Manfrotto 290 XTra`,type:`material`,usage:`Support caméra`,url:`https://www.boulanger.com/ref/1061747`,price:173.57},{name:`DaVinci Resolve`,type:`software`,usage:`Montage des vidéos`,url:`https://www.blackmagicdesign.com/fr/products/davinciresolve`,price:0},{name:`Notion`,type:`software`,usage:`Rédaction des scripts, hébergement du site web, tables de données diverses`,url:`https://www.notion.com/fr`,price:0},{name:`Inkscape`,type:`software`,usage:`Création des svg, les décors cartoons dans certaines vidéos`,url:`https://inkscape.org/`,price:0},{name:`Gimp`,type:`software`,usage:`Retouche d'images`,url:`https://www.gimp.org/downloads/`,price:0},{name:`Google Gemini`,type:`software`,usage:`Création d'images`,url:`https://gemini.google.com/app?hl=fr`,price:0}],qx={class:`flex justify-between align-middle`},Jx=[`href`],Yx={class:`hidden md:inline`},Xx=j({__name:`ToolsView`,setup(e){let t=[{label:`Nom`,field:`name`,sortable:!1},{label:`Prix`,field:`price`,sortable:!0,format:yl},{label:`Utilisation`,field:`usage`,sortable:!1},{label:`Type`,field:`type`,sortable:!0,format:vl},{label:`Lien`,field:`url`,sortable:!1}],{sortField:n,sortDirection:r,setSort:i,sortedData:a}=Jl(Kx);return(e,o)=>(P(),F(N,null,[I(`div`,qx,[L(ql,{label:`Matériel et logiciels utilisés`})]),L(Gl,{columns:t,data:A(a),"sort-field":A(n),"sort-direction":A(r),onSort:A(i)},{url:Pn(({value:e})=>[typeof e==`string`?(P(),F(`a`,{key:0,href:e,target:`_blank`,rel:`noopener noreferrer`,class:`text-blue-400 underline`},[o[0]||=I(`span`,{class:`md:hidden`},`Lien`,-1),I(`span`,Yx,D(A(bl)(e,100)),1)],8,Jx)):ma(``,!0)]),_:1},8,[`data`,`sort-field`,`sort-direction`,`onSort`])],64))}}),Zx=[{title:`Les 1 an de la chaîne !`,youtubeId:`0mZP6O2cWAA`,description:`Petite vidéo pour fêter les 1 an de la chaîne et remercier ceux qui la suivent.
Merci à vous !`}],Qx=j({__name:`VideoView`,setup(e){let t=us(),n=Ha(()=>t.params.type===`divers`?Zx:nd);return(e,t)=>(P(!0),F(N,null,M(n.value,(e,t)=>(P(),ia(td,{key:e.youtubeId,reverse:t%2==1,video:e,class:`mt-4`},null,8,[`reverse`,`video`]))),128))}}),$x=Zc({history:_c(`/site-web/`),routes:[{path:`/`,name:`home`,component:cd},{path:`/videos`,redirect:`/videos/defis`},{path:`/videos/:type`,name:`videos`,component:Qx},{path:`/planning`,name:`planning`,component:Gx},{path:`/resources`,redirect:`/resources/d&d`},{path:`/resources/d&d`,name:`resources_d&d`,component:Fu},{path:`/resources/lectures`,name:`resources_lectures`,component:Cu},{path:`/resources/tools`,name:`resources_tools`,component:Xx}]}),eS=Io(ll);eS.use($x),eS.mount(`#app`);