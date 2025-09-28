(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function kv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function ub(){if(m_)return ko;m_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return ko.Fragment=t,ko.jsx=n,ko.jsxs=n,ko}var g_;function fb(){return g_||(g_=1,Nh.exports=ub()),Nh.exports}var C=fb(),Lh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function hb(){if(__)return fe;__=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(P,tt,yt){this.props=P,this.context=tt,this.refs=E,this.updater=yt||S}y.prototype.isReactComponent={},y.prototype.setState=function(P,tt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,tt,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(P,tt,yt){this.props=P,this.context=tt,this.refs=E,this.updater=yt||S}var U=L.prototype=new v;U.constructor=L,M(U,y.prototype),U.isPureReactComponent=!0;var R=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function V(P,tt,yt,bt,Ut,Ft){return yt=Ft.ref,{$$typeof:r,type:P,key:tt,ref:yt!==void 0?yt:null,props:Ft}}function q(P,tt){return V(P.type,tt,void 0,void 0,void 0,P.props)}function D(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function N(P){var tt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(yt){return tt[yt]})}var G=/\/+/g;function it(P,tt){return typeof P=="object"&&P!==null&&P.key!=null?N(""+P.key):tt.toString(36)}function ct(){}function gt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(ct,ct):(P.status="pending",P.then(function(tt){P.status==="pending"&&(P.status="fulfilled",P.value=tt)},function(tt){P.status==="pending"&&(P.status="rejected",P.reason=tt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ft(P,tt,yt,bt,Ut){var Ft=typeof P;(Ft==="undefined"||Ft==="boolean")&&(P=null);var W=!1;if(P===null)W=!0;else switch(Ft){case"bigint":case"string":case"number":W=!0;break;case"object":switch(P.$$typeof){case r:case t:W=!0;break;case g:return W=P._init,ft(W(P._payload),tt,yt,bt,Ut)}}if(W)return Ut=Ut(P),W=bt===""?"."+it(P,0):bt,R(Ut)?(yt="",W!=null&&(yt=W.replace(G,"$&/")+"/"),ft(Ut,tt,yt,"",function(jt){return jt})):Ut!=null&&(D(Ut)&&(Ut=q(Ut,yt+(Ut.key==null||P&&P.key===Ut.key?"":(""+Ut.key).replace(G,"$&/")+"/")+W)),tt.push(Ut)),1;W=0;var ht=bt===""?".":bt+":";if(R(P))for(var Mt=0;Mt<P.length;Mt++)bt=P[Mt],Ft=ht+it(bt,Mt),W+=ft(bt,tt,yt,Ft,Ut);else if(Mt=x(P),typeof Mt=="function")for(P=Mt.call(P),Mt=0;!(bt=P.next()).done;)bt=bt.value,Ft=ht+it(bt,Mt++),W+=ft(bt,tt,yt,Ft,Ut);else if(Ft==="object"){if(typeof P.then=="function")return ft(gt(P),tt,yt,bt,Ut);throw tt=String(P),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return W}function I(P,tt,yt){if(P==null)return P;var bt=[],Ut=0;return ft(P,bt,"","",function(Ft){return tt.call(yt,Ft,Ut++)}),bt}function Q(P){if(P._status===-1){var tt=P._result;tt=tt(),tt.then(function(yt){(P._status===0||P._status===-1)&&(P._status=1,P._result=yt)},function(yt){(P._status===0||P._status===-1)&&(P._status=2,P._result=yt)}),P._status===-1&&(P._status=0,P._result=tt)}if(P._status===1)return P._result.default;throw P._result}var Z=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function St(){}return fe.Children={map:I,forEach:function(P,tt,yt){I(P,function(){tt.apply(this,arguments)},yt)},count:function(P){var tt=0;return I(P,function(){tt++}),tt},toArray:function(P){return I(P,function(tt){return tt})||[]},only:function(P){if(!D(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},fe.Component=y,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=L,fe.StrictMode=a,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},fe.cache=function(P){return function(){return P.apply(null,arguments)}},fe.cloneElement=function(P,tt,yt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var bt=M({},P.props),Ut=P.key,Ft=void 0;if(tt!=null)for(W in tt.ref!==void 0&&(Ft=void 0),tt.key!==void 0&&(Ut=""+tt.key),tt)!H.call(tt,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&tt.ref===void 0||(bt[W]=tt[W]);var W=arguments.length-2;if(W===1)bt.children=yt;else if(1<W){for(var ht=Array(W),Mt=0;Mt<W;Mt++)ht[Mt]=arguments[Mt+2];bt.children=ht}return V(P.type,Ut,void 0,void 0,Ft,bt)},fe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},fe.createElement=function(P,tt,yt){var bt,Ut={},Ft=null;if(tt!=null)for(bt in tt.key!==void 0&&(Ft=""+tt.key),tt)H.call(tt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Ut[bt]=tt[bt]);var W=arguments.length-2;if(W===1)Ut.children=yt;else if(1<W){for(var ht=Array(W),Mt=0;Mt<W;Mt++)ht[Mt]=arguments[Mt+2];Ut.children=ht}if(P&&P.defaultProps)for(bt in W=P.defaultProps,W)Ut[bt]===void 0&&(Ut[bt]=W[bt]);return V(P,Ft,void 0,void 0,null,Ut)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:h,render:P}},fe.isValidElement=D,fe.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Q}},fe.memo=function(P,tt){return{$$typeof:d,type:P,compare:tt===void 0?null:tt}},fe.startTransition=function(P){var tt=z.T,yt={};z.T=yt;try{var bt=P(),Ut=z.S;Ut!==null&&Ut(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(St,Z)}catch(Ft){Z(Ft)}finally{z.T=tt}},fe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},fe.use=function(P){return z.H.use(P)},fe.useActionState=function(P,tt,yt){return z.H.useActionState(P,tt,yt)},fe.useCallback=function(P,tt){return z.H.useCallback(P,tt)},fe.useContext=function(P){return z.H.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P,tt){return z.H.useDeferredValue(P,tt)},fe.useEffect=function(P,tt,yt){var bt=z.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return bt.useEffect(P,tt)},fe.useId=function(){return z.H.useId()},fe.useImperativeHandle=function(P,tt,yt){return z.H.useImperativeHandle(P,tt,yt)},fe.useInsertionEffect=function(P,tt){return z.H.useInsertionEffect(P,tt)},fe.useLayoutEffect=function(P,tt){return z.H.useLayoutEffect(P,tt)},fe.useMemo=function(P,tt){return z.H.useMemo(P,tt)},fe.useOptimistic=function(P,tt){return z.H.useOptimistic(P,tt)},fe.useReducer=function(P,tt,yt){return z.H.useReducer(P,tt,yt)},fe.useRef=function(P){return z.H.useRef(P)},fe.useState=function(P){return z.H.useState(P)},fe.useSyncExternalStore=function(P,tt,yt){return z.H.useSyncExternalStore(P,tt,yt)},fe.useTransition=function(){return z.H.useTransition()},fe.version="19.1.1",fe}var v_;function xp(){return v_||(v_=1,Lh.exports=hb()),Lh.exports}var rt=xp();const jv=kv(rt);var Ph={exports:{}},jo={},Oh={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function db(){return x_||(x_=1,(function(r){function t(I,Q){var Z=I.length;I.push(Q);t:for(;0<Z;){var St=Z-1>>>1,P=I[St];if(0<o(P,Q))I[St]=Q,I[Z]=P,Z=St;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Q=I[0],Z=I.pop();if(Z!==Q){I[0]=Z;t:for(var St=0,P=I.length,tt=P>>>1;St<tt;){var yt=2*(St+1)-1,bt=I[yt],Ut=yt+1,Ft=I[Ut];if(0>o(bt,Z))Ut<P&&0>o(Ft,bt)?(I[St]=Ft,I[Ut]=Z,St=Ut):(I[St]=bt,I[yt]=Z,St=yt);else if(Ut<P&&0>o(Ft,Z))I[St]=Ft,I[Ut]=Z,St=Ut;else break t}}return Q}function o(I,Q){var Z=I.sortIndex-Q.sortIndex;return Z!==0?Z:I.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],d=[],g=1,_=null,x=3,S=!1,M=!1,E=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(I){for(var Q=n(d);Q!==null;){if(Q.callback===null)a(d);else if(Q.startTime<=I)a(d),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=n(d)}}function z(I){if(E=!1,R(I),!M)if(n(m)!==null)M=!0,H||(H=!0,it());else{var Q=n(d);Q!==null&&ft(z,Q.startTime-I)}}var H=!1,V=-1,q=5,D=-1;function N(){return y?!0:!(r.unstable_now()-D<q)}function G(){if(y=!1,H){var I=r.unstable_now();D=I;var Q=!0;try{t:{M=!1,E&&(E=!1,L(V),V=-1),S=!0;var Z=x;try{e:{for(R(I),_=n(m);_!==null&&!(_.expirationTime>I&&N());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var P=St(_.expirationTime<=I);if(I=r.unstable_now(),typeof P=="function"){_.callback=P,R(I),Q=!0;break e}_===n(m)&&a(m),R(I)}else a(m);_=n(m)}if(_!==null)Q=!0;else{var tt=n(d);tt!==null&&ft(z,tt.startTime-I),Q=!1}}break t}finally{_=null,x=Z,S=!1}Q=void 0}}finally{Q?it():H=!1}}}var it;if(typeof U=="function")it=function(){U(G)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=G,it=function(){gt.postMessage(null)}}else it=function(){v(G,0)};function ft(I,Q){V=v(function(){I(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var Z=x;x=Q;try{return I()}finally{x=Z}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=x;x=I;try{return Q()}finally{x=Z}},r.unstable_scheduleCallback=function(I,Q,Z){var St=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,I={id:g++,callback:Q,priorityLevel:I,startTime:Z,expirationTime:P,sortIndex:-1},Z>St?(I.sortIndex=Z,t(d,I),n(m)===null&&I===n(d)&&(E?(L(V),V=-1):E=!0,ft(z,Z-St))):(I.sortIndex=P,t(m,I),M||S||(M=!0,H||(H=!0,it()))),I},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(I){var Q=x;return function(){var Z=x;x=Q;try{return I.apply(this,arguments)}finally{x=Z}}}})(zh)),zh}var y_;function pb(){return y_||(y_=1,Oh.exports=db()),Oh.exports}var Bh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function mb(){if(S_)return Ln;S_=1;var r=xp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Ln.flushSync=function(m){var d=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=d,a.p=g,a.d.f()}},Ln.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Ln.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Ln.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Ln.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Ln.requestFormReset=function(m){a.d.r(m)},Ln.unstable_batchedUpdates=function(m,d){return m(d)},Ln.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var b_;function gb(){if(b_)return Bh.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bh.exports=mb(),Bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function _b(){if(M_)return jo;M_=1;var r=pb(),t=xp(),n=gb();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===s)return h(u),e;if(p===l)return h(u),i;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=p;else{for(var b=!1,A=u.child;A;){if(A===s){b=!0,s=u,l=p;break}if(A===l){b=!0,l=u,s=p;break}A=A.sibling}if(!b){for(A=p.child;A;){if(A===s){b=!0,s=p,l=u;break}if(A===l){b=!0,l=p,s=u;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:gt(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return gt(e(i))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},St=[],P=-1;function tt(e){return{current:e}}function yt(e){0>P||(e.current=St[P],St[P]=null,P--)}function bt(e,i){P++,St[P]=e.current,e.current=i}var Ut=tt(null),Ft=tt(null),W=tt(null),ht=tt(null);function Mt(e,i){switch(bt(W,i),bt(Ft,e),bt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?k0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=k0(i),e=j0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Ut),bt(Ut,e)}function jt(){yt(Ut),yt(Ft),yt(W)}function Gt(e){e.memoizedState!==null&&bt(ht,e);var i=Ut.current,s=j0(i,e.type);i!==s&&(bt(Ft,e),bt(Ut,s))}function le(e){Ft.current===e&&(yt(Ut),yt(Ft)),ht.current===e&&(yt(ht),Io._currentValue=Z)}var Ze=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,Te=r.unstable_cancelCallback,oe=r.unstable_shouldYield,ae=r.unstable_requestPaint,zt=r.unstable_now,ke=r.unstable_getCurrentPriorityLevel,Xt=r.unstable_ImmediatePriority,ce=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,O=r.unstable_IdlePriority,T=r.log,nt=r.unstable_setDisableYieldValue,dt=null,_t=null;function ut(e){if(typeof T=="function"&&nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(dt,e)}catch{}}var Bt=Math.clz32?Math.clz32:Kt,Rt=Math.log,Yt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Rt(e)/Yt|0)|0}var Et=256,Lt=4194304;function Jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,p=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?u=Jt(l):(b&=A,b!==0?u=Jt(b):s||(s=A&~e,s!==0&&(u=Jt(s))))):(A=l&~p,A!==0?u=Jt(A):b!==0?u=Jt(b):s||(s=l&~e,s!==0&&(u=Jt(s)))),u===0?0:i!==0&&i!==u&&(i&p)===0&&(p=u&-u,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:u}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ue(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function wt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function It(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,i,s,l,u,p){var b=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(s=b&~s;0<s;){var pt=31-Bt(s),vt=1<<pt;A[pt]=0,B[pt]=-1;var at=et[pt];if(at!==null)for(et[pt]=null,pt=0;pt<at.length;pt++){var st=at[pt];st!==null&&(st.lane&=-536870913)}s&=~vt}l!==0&&xt(e,l,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(b&~i))}function xt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Bt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function kt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Bt(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:c_(e.type))}function xi(e,i){var s=Q.p;try{return Q.p=e,i()}finally{Q.p=s}}var fn=Math.random().toString(36).slice(2),hn="__reactFiber$"+fn,tn="__reactProps$"+fn,Di="__reactContainer$"+fn,zs="__reactEvents$"+fn,xl="__reactListeners$"+fn,Bs="__reactHandles$"+fn,Zr="__reactResources$"+fn,Ui="__reactMarker$"+fn;function Is(e){delete e[hn],delete e[tn],delete e[zs],delete e[xl],delete e[Bs]}function Wi(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Di]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Y0(e);e!==null;){if(s=e[hn])return s;e=Y0(e)}return i}e=s,s=e.parentNode}return null}function Sa(e){if(e=e[hn]||e[Di]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function is(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ba(e){var i=e[Zr];return i||(i=e[Zr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(e){e[Ui]=!0}var yl=new Set,Sl={};function w(e,i){Y(e,i),Y(e+"Capture",i)}function Y(e,i){for(Sl[e]=i,e=0;e<i.length;e++)yl.add(i[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},J={};function At(e){return Ze.call(J,e)?!0:Ze.call(lt,e)?!1:ot.test(e)?J[e]=!0:(lt[e]=!0,!1)}function Nt(e,i,s){if(At(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ht(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Pt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var te,ne;function Zt(e){if(te===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);te=i&&i[1]||"",ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ne}var de=!1;function Ae(e,i){if(!e||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var at=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){at=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){at=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),b=p[0],A=p[1];if(b&&A){var B=b.split(`
`),et=A.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===et.length)for(l=B.length-1,u=et.length-1;1<=l&&0<=u&&B[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==et[u]){var pt=`
`+B[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=u);break}}}finally{de=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Zt(s):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Zt("Activity");default:return""}}function Le(e){try{var i="";do i+=qe(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $t(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(e){var i=$t(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,p=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(b){l=""+b,p.call(this,b)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function xe(e){e._valueTracker||(e._valueTracker=Xe(e))}function Dn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=$t(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function vn(e){return e.replace(In,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,s,l,u,p,b,A){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+pe(i)):e.value!==""+pe(i)&&(e.value=""+pe(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Un(e,b,pe(i)):s!=null?Un(e,b,pe(s)):l!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+pe(A):e.removeAttribute("name")}function Fn(e,i,s,l,u,p,b,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+pe(s):"",i=i!=null?""+pe(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function Un(e,i,s){i==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function en(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+pe(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function En(e,i,s){if(i!=null&&(i=""+pe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+pe(s):""}function Fs(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ft(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=pe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function jn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||oy.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function jp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&kp(e,u,l)}else for(var p in i)i.hasOwnProperty(p)&&kp(e,p,i[p])}function Du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(e){return cy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uu=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Vs=null;function Xp(e){var i=Sa(e);if(i&&(e=i.stateNode)){var s=e[tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+vn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[tn]||null;if(!u)throw Error(a(90));Ve(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Dn(l)}break t;case"textarea":En(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&en(e,!!s.multiple,i,!1)}}}var Lu=!1;function Wp(e,i,s){if(Lu)return e(i,s);Lu=!0;try{var l=e(i);return l}finally{if(Lu=!1,(Hs!==null||Vs!==null)&&(oc(),Hs&&(i=Hs,e=Vs,Vs=Hs=null,Xp(i),e)))for(i=0;i<e.length;i++)Xp(e[i])}}function Kr(e,i){var s=e.stateNode;if(s===null)return null;var l=s[tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(qi)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Pu=!1}var Ma=null,Ou=null,Ml=null;function qp(){if(Ml)return Ml;var e,i=Ou,s=i.length,l,u="value"in Ma?Ma.value:Ma.textContent,p=u.length;for(e=0;e<s&&i[e]===u[e];e++);var b=s-e;for(l=1;l<=b&&i[s-l]===u[p-l];l++);return Ml=u.slice(e,1<l?1-l:void 0)}function El(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Yp(){return!1}function Xn(e){function i(s,l,u,p,b){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Tl:Yp,this.isPropagationStopped=Yp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Xn(as),Jr=g({},as,{view:0,detail:0}),uy=Xn(Jr),zu,Bu,$r,wl=g({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(zu=e.screenX-$r.screenX,Bu=e.screenY-$r.screenY):Bu=zu=0,$r=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),Zp=Xn(wl),fy=g({},wl,{dataTransfer:0}),hy=Xn(fy),dy=g({},Jr,{relatedTarget:0}),Iu=Xn(dy),py=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),my=Xn(py),gy=g({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=Xn(gy),vy=g({},as,{data:0}),Kp=Xn(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Sy[e])?!!i[e]:!1}function Fu(){return by}var My=g({},Jr,{key:function(e){if(e.key){var i=xy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ey=Xn(My),Ty=g({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Xn(Ty),Ay=g({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),wy=Xn(Ay),Ry=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Xn(Ry),Dy=g({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Xn(Dy),Ny=g({},as,{newState:0,oldState:0}),Ly=Xn(Ny),Py=[9,13,27,32],Hu=qi&&"CompositionEvent"in window,to=null;qi&&"documentMode"in document&&(to=document.documentMode);var Oy=qi&&"TextEvent"in window&&!to,Jp=qi&&(!Hu||to&&8<to&&11>=to),$p=" ",tm=!1;function em(e,i){switch(e){case"keyup":return Py.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function zy(e,i){switch(e){case"compositionend":return nm(i);case"keypress":return i.which!==32?null:(tm=!0,$p);case"textInput":return e=i.data,e===$p&&tm?null:e;default:return null}}function By(e,i){if(Gs)return e==="compositionend"||!Hu&&em(e,i)?(e=qp(),Ml=Ou=Ma=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jp&&i.locale!=="ko"?null:i.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Iy[e.type]:i==="textarea"}function am(e,i,s,l){Hs?Vs?Vs.push(l):Vs=[l]:Hs=l,i=dc(i,"onChange"),0<i.length&&(s=new Al("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var eo=null,no=null;function Fy(e){I0(e,0)}function Rl(e){var i=is(e);if(Dn(i))return e}function sm(e,i){if(e==="change")return i}var rm=!1;if(qi){var Vu;if(qi){var Gu="oninput"in document;if(!Gu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Gu=typeof om.oninput=="function"}Vu=Gu}else Vu=!1;rm=Vu&&(!document.documentMode||9<document.documentMode)}function lm(){eo&&(eo.detachEvent("onpropertychange",cm),no=eo=null)}function cm(e){if(e.propertyName==="value"&&Rl(no)){var i=[];am(i,no,e,Nu(e)),Wp(Fy,i)}}function Hy(e,i,s){e==="focusin"?(lm(),eo=i,no=s,eo.attachEvent("onpropertychange",cm)):e==="focusout"&&lm()}function Vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(no)}function Gy(e,i){if(e==="click")return Rl(i)}function ky(e,i){if(e==="input"||e==="change")return Rl(i)}function jy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Jn=typeof Object.is=="function"?Object.is:jy;function io(e,i){if(Jn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Ze.call(i,u)||!Jn(e[u],i[u]))return!1}return!0}function um(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,i){var s=um(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=um(s)}}function hm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?hm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=yi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=yi(e.document)}return i}function ku(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Xy=qi&&"documentMode"in document&&11>=document.documentMode,ks=null,ju=null,ao=null,Xu=!1;function pm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xu||ks==null||ks!==yi(l)||(l=ks,"selectionStart"in l&&ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&io(ao,l)||(ao=l,l=dc(ju,"onSelect"),0<l.length&&(i=new Al("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ks)))}function ss(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var js={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},Wu={},mm={};qi&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function rs(e){if(Wu[e])return Wu[e];if(!js[e])return e;var i=js[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in mm)return Wu[e]=i[s];return e}var gm=rs("animationend"),_m=rs("animationiteration"),vm=rs("animationstart"),Wy=rs("transitionrun"),qy=rs("transitionstart"),Yy=rs("transitioncancel"),xm=rs("transitionend"),ym=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Si(e,i){ym.set(e,i),w(i,[e])}var Sm=new WeakMap;function ci(e,i){if(typeof e=="object"&&e!==null){var s=Sm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Le(i)},Sm.set(e,i),i)}return{value:e,source:i,stack:Le(i)}}var ui=[],Xs=0,Yu=0;function Cl(){for(var e=Xs,i=Yu=Xs=0;i<e;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var u=ui[i];ui[i++]=null;var p=ui[i];if(ui[i++]=null,l!==null&&u!==null){var b=l.pending;b===null?u.next=u:(u.next=b.next,b.next=u),l.pending=u}p!==0&&bm(s,u,p)}}function Dl(e,i,s,l){ui[Xs++]=e,ui[Xs++]=i,ui[Xs++]=s,ui[Xs++]=l,Yu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zu(e,i,s,l){return Dl(e,i,s,l),Ul(e)}function Ws(e,i){return Dl(e,null,null,i),Ul(e)}function bm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,p=e.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&i!==null&&(u=31-Bt(s),e=p.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=s|536870912),p):null}function Ul(e){if(50<Do)throw Do=0,nh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var qs={};function Zy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,i,s,l){return new Zy(e,i,s,l)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,i){var s=e.alternate;return s===null?(s=$n(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Mm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nl(e,i,s,l,u,p){var b=0;if(l=e,typeof e=="function")Ku(e)&&(b=1);else if(typeof e=="string")b=QS(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=$n(31,s,i,u),e.elementType=D,e.lanes=p,e;case M:return os(s.children,u,p,i);case E:b=8,u|=24;break;case y:return e=$n(12,s,i,u|2),e.elementType=y,e.lanes=p,e;case z:return e=$n(13,s,i,u),e.elementType=z,e.lanes=p,e;case H:return e=$n(19,s,i,u),e.elementType=H,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case U:b=10;break t;case L:b=9;break t;case R:b=11;break t;case V:b=14;break t;case q:b=16,l=null;break t}b=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=$n(b,s,i,u),i.elementType=e,i.type=l,i.lanes=p,i}function os(e,i,s,l){return e=$n(7,e,l,i),e.lanes=s,e}function Qu(e,i,s){return e=$n(6,e,null,i),e.lanes=s,e}function Ju(e,i,s){return i=$n(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ys=[],Zs=0,Ll=null,Pl=0,fi=[],hi=0,ls=null,Zi=1,Ki="";function cs(e,i){Ys[Zs++]=Pl,Ys[Zs++]=Ll,Ll=e,Pl=i}function Em(e,i,s){fi[hi++]=Zi,fi[hi++]=Ki,fi[hi++]=ls,ls=e;var l=Zi;e=Ki;var u=32-Bt(l)-1;l&=~(1<<u),s+=1;var p=32-Bt(i)+u;if(30<p){var b=u-u%5;p=(l&(1<<b)-1).toString(32),l>>=b,u-=b,Zi=1<<32-Bt(i)+u|s<<u|l,Ki=p+e}else Zi=1<<p|s<<u|l,Ki=e}function $u(e){e.return!==null&&(cs(e,1),Em(e,1,0))}function tf(e){for(;e===Ll;)Ll=Ys[--Zs],Ys[Zs]=null,Pl=Ys[--Zs],Ys[Zs]=null;for(;e===ls;)ls=fi[--hi],fi[hi]=null,Ki=fi[--hi],fi[hi]=null,Zi=fi[--hi],fi[hi]=null}var Hn=null,nn=null,Ce=!1,us=null,Ni=!1,ef=Error(a(519));function fs(e){var i=Error(a(418,""));throw oo(ci(i,e)),ef}function Tm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[hn]=e,i[tn]=l,s){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(s=0;s<No.length;s++)Se(No[s],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),Fn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xe(i);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),Fs(i,l.value,l.defaultValue,l.children),xe(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||G0(i.textContent,s)?(l.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),l.onScroll!=null&&Se("scroll",i),l.onScrollEnd!=null&&Se("scrollend",i),l.onClick!=null&&(i.onclick=pc),i=!0):i=!1,i||fs(e)}function Am(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Hn=Hn.return}}function so(e){if(e!==Hn)return!1;if(!Ce)return Am(e),Ce=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||vh(e.type,e.memoizedProps)),s=!s),s&&nn&&fs(e),Am(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){nn=Mi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,Fa(e.type)?(e=bh,bh=null,nn=e):nn=i):nn=Hn?Mi(e.stateNode.nextSibling):null;return!0}function ro(){nn=Hn=null,Ce=!1}function wm(){var e=us;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),us=null),e}function oo(e){us===null?us=[e]:us.push(e)}var nf=tt(null),hs=null,Qi=null;function Ea(e,i,s){bt(nf,i._currentValue),i._currentValue=s}function Ji(e){e._currentValue=nf.current,yt(nf)}function af(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function sf(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var b=u.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=u;for(var B=0;B<i.length;B++)if(A.context===i[B]){p.lanes|=s,A=p.alternate,A!==null&&(A.lanes|=s),af(p.return,s,e),l||(b=null);break t}p=A.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(a(341));b.lanes|=s,p=b.alternate,p!==null&&(p.lanes|=s),af(b,s,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function lo(e,i,s,l){e=null;for(var u=i,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=u.type;Jn(u.pendingProps.value,b.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(b=u.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&sf(i,e,s,l),i.flags|=262144}function Ol(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Rm(hs,e)}function zl(e,i){return hs===null&&ds(e),Rm(e,i)}function Rm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(e===null)throw Error(a(308));Qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Qi=Qi.next=i;return s}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Qy=r.unstable_scheduleCallback,Jy=r.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Ky,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Qy(Jy,function(){e.controller.abort()})}var uo=null,of=0,Ks=0,Qs=null;function $y(e,i){if(uo===null){var s=uo=[];of=0,Ks=ch(),Qs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return of++,i.then(Cm,Cm),i}function Cm(){if(--of===0&&uo!==null){Qs!==null&&(Qs.status="fulfilled");var e=uo;uo=null,Ks=0,Qs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function tS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Dm=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&$y(e,i),Dm!==null&&Dm(e,i)};var ps=tt(null);function lf(){var e=ps.current;return e!==null?e:je.pooledCache}function Bl(e,i){i===null?bt(ps,ps.current):bt(ps,i.pool)}function Um(){var e=lf();return e===null?null:{parent:dn._currentValue,pool:e}}var fo=Error(a(460)),Nm=Error(a(474)),Il=Error(a(542)),cf={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fl(){}function Pm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Fl,Fl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zm(e),e;default:if(typeof i.status=="string")i.then(Fl,Fl);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zm(e),e}throw ho=i,fo}}var ho=null;function Om(){if(ho===null)throw Error(a(459));var e=ho;return ho=null,e}function zm(e){if(e===fo||e===Il)throw Error(a(483))}var Ta=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Ul(e),bm(e,null,s),i}return Dl(e,l,i,s),Ul(e)}function po(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,kt(e,s)}}function hf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?u=p=b:p=p.next=b,s=s.next}while(s!==null);p===null?u=p=i:p=p.next=i}else u=p=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var df=!1;function mo(){if(df){var e=Qs;if(e!==null)throw e}}function go(e,i,s,l){df=!1;var u=e.updateQueue;Ta=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,et=B.next;B.next=null,b===null?p=et:b.next=et,b=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==b&&(A===null?pt.firstBaseUpdate=et:A.next=et,pt.lastBaseUpdate=B))}if(p!==null){var vt=u.baseState;b=0,pt=et=B=null,A=p;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(Me&at)===at:(l&at)===at){at!==0&&at===Ks&&(df=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var se=e,ee=A;at=i;var ze=s;switch(ee.tag){case 1:if(se=ee.payload,typeof se=="function"){vt=se.call(ze,vt,at);break t}vt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ee.payload,at=typeof se=="function"?se.call(ze,vt,at):se,at==null)break t;vt=g({},vt,at);break t;case 2:Ta=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(et=pt=st,B=vt):pt=pt.next=st,b|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);pt===null&&(B=vt),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=pt,p===null&&(u.shared.lanes=0),Oa|=b,e.lanes=b,e.memoizedState=vt}}function Bm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Im(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Bm(s[e],i)}var Js=tt(null),Hl=tt(0);function Fm(e,i){e=sa,bt(Hl,e),bt(Js,i),sa=e|i.baseLanes}function pf(){bt(Hl,sa),bt(Js,Js.current)}function mf(){sa=Hl.current,yt(Js),yt(Hl)}var Ra=0,ge=null,Pe=null,ln=null,Vl=!1,$s=!1,ms=!1,Gl=0,_o=0,tr=null,eS=0;function sn(){throw Error(a(321))}function gf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Jn(e[s],i[s]))return!1;return!0}function _f(e,i,s,l,u,p){return Ra=p,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?bg:Mg,ms=!1,p=s(l,u),ms=!1,$s&&(p=Vm(i,s,l,u)),Hm(e),p}function Hm(e){I.H=Yl;var i=Pe!==null&&Pe.next!==null;if(Ra=0,ln=Pe=ge=null,Vl=!1,_o=0,tr=null,i)throw Error(a(300));e===null||xn||(e=e.dependencies,e!==null&&Ol(e)&&(xn=!0))}function Vm(e,i,s,l){ge=e;var u=0;do{if($s&&(tr=null),_o=0,$s=!1,25<=u)throw Error(a(301));if(u+=1,ln=Pe=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}I.H=lS,p=i(s,l)}while($s);return p}function nS(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?vo(i):i,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ge.flags|=1024),i}function vf(){var e=Gl!==0;return Gl=0,e}function xf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function yf(e){if(Vl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Vl=!1}Ra=0,ln=Pe=ge=null,$s=!1,_o=Gl=0,tr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ge.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var i=ln===null?ge.memoizedState:ln.next;if(i!==null)ln=i,Pe=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ln===null?ge.memoizedState=ln=e:ln=ln.next=e}return ln}function Sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var i=_o;return _o+=1,tr===null&&(tr=[]),e=Pm(tr,e,i),i=ge,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?bg:Mg),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===U)return Nn(e)}throw Error(a(438,String(e)))}function bf(e){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Sf(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=N;return i.index++,s}function $i(e,i){return typeof i=="function"?i(e):i}function jl(e){var i=cn();return Mf(i,Pe,e)}function Mf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,p=l.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}i.baseQueue=u=p,l.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{i=u.next;var A=b=null,B=null,et=i,pt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Me&vt)===vt:(Ra&vt)===vt){var at=et.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Ks&&(pt=!0);else if((Ra&at)===at){et=et.next,at===Ks&&(pt=!0);continue}else vt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=vt,b=p):B=B.next=vt,ge.lanes|=at,Oa|=at;vt=et.action,ms&&s(p,vt),p=et.hasEagerState?et.eagerState:s(p,vt)}else at={lane:vt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=at,b=p):B=B.next=at,ge.lanes|=vt,Oa|=vt;et=et.next}while(et!==null&&et!==i);if(B===null?b=p:B.next=A,!Jn(p,e.memoizedState)&&(xn=!0,pt&&(s=Qs,s!==null)))throw s;e.memoizedState=p,e.baseState=b,e.baseQueue=B,l.lastRenderedState=p}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ef(e){var i=cn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,p=i.memoizedState;if(u!==null){s.pending=null;var b=u=u.next;do p=e(p,b.action),b=b.next;while(b!==u);Jn(p,i.memoizedState)||(xn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Gm(e,i,s){var l=ge,u=cn(),p=Ce;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!Jn((Pe||u).memoizedState,s);b&&(u.memoizedState=s,xn=!0),u=u.queue;var A=Xm.bind(null,l,u,e);if(xo(2048,8,A,[e]),u.getSnapshot!==i||b||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,er(9,Xl(),jm.bind(null,l,u,s,i),null),je===null)throw Error(a(349));p||(Ra&124)!==0||km(l,i,s)}return s}function km(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=Sf(),ge.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function jm(e,i,s,l){i.value=s,i.getSnapshot=l,Wm(i)&&qm(e)}function Xm(e,i,s){return s(function(){Wm(i)&&qm(e)})}function Wm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Jn(e,s)}catch{return!0}}function qm(e){var i=Ws(e,2);i!==null&&ai(i,e,2)}function Tf(e){var i=Wn();if(typeof e=="function"){var s=e;if(e=s(),ms){ut(!0);try{s()}finally{ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},i}function Ym(e,i,s,l){return e.baseState=s,Mf(e,Pe,typeof l=="function"?l:$i)}function iS(e,i,s,l,u){if(ql(e))throw Error(a(485));if(e=i.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};I.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,Zm(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Zm(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var p=I.T,b={};I.T=b;try{var A=s(u,l),B=I.S;B!==null&&B(b,A),Km(e,i,A)}catch(et){Af(e,i,et)}finally{I.T=p}}else try{p=s(u,l),Km(e,i,p)}catch(et){Af(e,i,et)}}function Km(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qm(e,i,l)},function(l){return Af(e,i,l)}):Qm(e,i,s)}function Qm(e,i,s){i.status="fulfilled",i.value=s,Jm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Zm(e,s)))}function Af(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Jm(i),i=i.next;while(i!==l)}e.action=null}function Jm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function $m(e,i){return i}function tg(e,i){if(Ce){var s=je.formState;if(s!==null){t:{var l=ge;if(Ce){if(nn){e:{for(var u=nn,p=Ni;u.nodeType!==8;){if(!p){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){nn=Mi(u.nextSibling),l=u.data==="F!";break t}}fs(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:i},s.queue=l,s=xg.bind(null,ge,l),l.dispatch=s,l=Tf(!1),p=Uf.bind(null,ge,!1,l.queue),l=Wn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=iS.bind(null,ge,u,p,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function eg(e){var i=cn();return ng(i,Pe,e)}function ng(e,i,s){if(i=Mf(e,i,$m)[0],e=jl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=vo(i)}catch(b){throw b===fo?Il:b}else l=i;i=cn();var u=i.queue,p=u.dispatch;return s!==i.memoizedState&&(ge.flags|=2048,er(9,Xl(),aS.bind(null,u,s),null)),[l,p,e]}function aS(e,i){e.action=i}function ig(e){var i=cn(),s=Pe;if(s!==null)return ng(i,s,e);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function er(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ge.updateQueue,i===null&&(i=Sf(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Xl(){return{destroy:void 0,resource:void 0}}function ag(){return cn().memoizedState}function Wl(e,i,s,l){var u=Wn();l=l===void 0?null:l,ge.flags|=e,u.memoizedState=er(1|i,Xl(),s,l)}function xo(e,i,s,l){var u=cn();l=l===void 0?null:l;var p=u.memoizedState.inst;Pe!==null&&l!==null&&gf(l,Pe.memoizedState.deps)?u.memoizedState=er(i,p,s,l):(ge.flags|=e,u.memoizedState=er(1|i,p,s,l))}function sg(e,i){Wl(8390656,8,e,i)}function rg(e,i){xo(2048,8,e,i)}function og(e,i){return xo(4,2,e,i)}function lg(e,i){return xo(4,4,e,i)}function cg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ug(e,i,s){s=s!=null?s.concat([e]):null,xo(4,4,cg.bind(null,i,e),s)}function wf(){}function fg(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&gf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function hg(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&gf(i,l[1]))return l[0];if(l=e(),ms){ut(!0);try{e()}finally{ut(!1)}}return s.memoizedState=[l,i],l}function Rf(e,i,s){return s===void 0||(Ra&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=m0(),ge.lanes|=e,Oa|=e,s)}function dg(e,i,s,l){return Jn(s,i)?s:Js.current!==null?(e=Rf(e,s,l),Jn(e,i)||(xn=!0),e):(Ra&42)===0?(xn=!0,e.memoizedState=s):(e=m0(),ge.lanes|=e,Oa|=e,i)}function pg(e,i,s,l,u){var p=Q.p;Q.p=p!==0&&8>p?p:8;var b=I.T,A={};I.T=A,Uf(e,!1,i,s);try{var B=u(),et=I.S;if(et!==null&&et(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=tS(B,l);yo(e,i,pt,ii(e))}else yo(e,i,l,ii(e))}catch(vt){yo(e,i,{then:function(){},status:"rejected",reason:vt},ii())}finally{Q.p=p,I.T=b}}function sS(){}function Cf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=mg(e).queue;pg(e,u,i,Z,s===null?sS:function(){return gg(e),s(l)})}function mg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function gg(e){var i=mg(e).next.queue;yo(e,i,{},ii())}function Df(){return Nn(Io)}function _g(){return cn().memoizedState}function vg(){return cn().memoizedState}function rS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();e=Aa(s);var l=wa(i,e,s);l!==null&&(ai(l,i,s),po(l,i,s)),i={cache:rf()},e.payload=i;return}i=i.return}}function oS(e,i,s){var l=ii();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ql(e)?yg(i,s):(s=Zu(e,i,s,l),s!==null&&(ai(s,e,l),Sg(s,i,l)))}function xg(e,i,s){var l=ii();yo(e,i,s,l)}function yo(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ql(e))yg(i,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var b=i.lastRenderedState,A=p(b,s);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,b))return Dl(e,i,u,0),je===null&&Cl(),!1}catch{}finally{}if(s=Zu(e,i,u,l),s!==null)return ai(s,e,l),Sg(s,i,l),!0}return!1}function Uf(e,i,s,l){if(l={lane:2,revertLane:ch(),action:l,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(i)throw Error(a(479))}else i=Zu(e,s,l,2),i!==null&&ai(i,e,2)}function ql(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function yg(e,i){$s=Vl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Sg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,kt(e,s)}}var Yl={readContext:Nn,use:kl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},bg={readContext:Nn,use:kl,useCallback:function(e,i){return Wn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:sg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Wl(4194308,4,cg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Wl(4194308,4,e,i)},useInsertionEffect:function(e,i){Wl(4,2,e,i)},useMemo:function(e,i){var s=Wn();i=i===void 0?null:i;var l=e();if(ms){ut(!0);try{e()}finally{ut(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Wn();if(s!==void 0){var u=s(i);if(ms){ut(!0);try{s(i)}finally{ut(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=oS.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var i=Wn();return e={current:e},i.memoizedState=e},useState:function(e){e=Tf(e);var i=e.queue,s=xg.bind(null,ge,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:wf,useDeferredValue:function(e,i){var s=Wn();return Rf(s,e,i)},useTransition:function(){var e=Tf(!1);return e=pg.bind(null,ge,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ge,u=Wn();if(Ce){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),je===null)throw Error(a(349));(Me&124)!==0||km(l,i,s)}u.memoizedState=s;var p={value:s,getSnapshot:i};return u.queue=p,sg(Xm.bind(null,l,p,e),[e]),l.flags|=2048,er(9,Xl(),jm.bind(null,l,p,s,i),null),s},useId:function(){var e=Wn(),i=je.identifierPrefix;if(Ce){var s=Ki,l=Zi;s=(l&~(1<<32-Bt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Gl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=eS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Df,useFormState:tg,useActionState:tg,useOptimistic:function(e){var i=Wn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Uf.bind(null,ge,!0,s),s.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return Wn().memoizedState=rS.bind(null,ge)}},Mg={readContext:Nn,use:kl,useCallback:fg,useContext:Nn,useEffect:rg,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:jl,useRef:ag,useState:function(){return jl($i)},useDebugValue:wf,useDeferredValue:function(e,i){var s=cn();return dg(s,Pe.memoizedState,e,i)},useTransition:function(){var e=jl($i)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:Gm,useId:_g,useHostTransitionStatus:Df,useFormState:eg,useActionState:eg,useOptimistic:function(e,i){var s=cn();return Ym(s,Pe,e,i)},useMemoCache:bf,useCacheRefresh:vg},lS={readContext:Nn,use:kl,useCallback:fg,useContext:Nn,useEffect:rg,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:Ef,useRef:ag,useState:function(){return Ef($i)},useDebugValue:wf,useDeferredValue:function(e,i){var s=cn();return Pe===null?Rf(s,e,i):dg(s,Pe.memoizedState,e,i)},useTransition:function(){var e=Ef($i)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:Gm,useId:_g,useHostTransitionStatus:Df,useFormState:ig,useActionState:ig,useOptimistic:function(e,i){var s=cn();return Pe!==null?Ym(s,Pe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:bf,useCacheRefresh:vg},nr=null,So=0;function Zl(e){var i=So;return So+=1,nr===null&&(nr=[]),Pm(nr,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Kl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Eg(e){var i=e._init;return i(e._payload)}function Tg(e){function i(K,k){if(e){var $=K.deletions;$===null?(K.deletions=[k],K.flags|=16):$.push(k)}}function s(K,k){if(!e)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Yi(K,k),K.index=0,K.sibling=null,K}function p(K,k,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<k?(K.flags|=67108866,k):$):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function b(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,k,$,mt){return k===null||k.tag!==6?(k=Qu($,K.mode,mt),k.return=K,k):(k=u(k,$),k.return=K,k)}function B(K,k,$,mt){var Vt=$.type;return Vt===M?pt(K,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&Eg(Vt)===k.type)?(k=u(k,$.props),bo(k,$),k.return=K,k):(k=Nl($.type,$.key,$.props,null,K.mode,mt),bo(k,$),k.return=K,k)}function et(K,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Ju($,K.mode,mt),k.return=K,k):(k=u(k,$.children||[]),k.return=K,k)}function pt(K,k,$,mt,Vt){return k===null||k.tag!==7?(k=os($,K.mode,mt,Vt),k.return=K,k):(k=u(k,$),k.return=K,k)}function vt(K,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Qu(""+k,K.mode,$),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=Nl(k.type,k.key,k.props,null,K.mode,$),bo($,k),$.return=K,$;case S:return k=Ju(k,K.mode,$),k.return=K,k;case q:var mt=k._init;return k=mt(k._payload),vt(K,k,$)}if(ft(k)||it(k))return k=os(k,K.mode,$,null),k.return=K,k;if(typeof k.then=="function")return vt(K,Zl(k),$);if(k.$$typeof===U)return vt(K,zl(K,k),$);Kl(K,k)}return null}function at(K,k,$,mt){var Vt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Vt!==null?null:A(K,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Vt?B(K,k,$,mt):null;case S:return $.key===Vt?et(K,k,$,mt):null;case q:return Vt=$._init,$=Vt($._payload),at(K,k,$,mt)}if(ft($)||it($))return Vt!==null?null:pt(K,k,$,mt,null);if(typeof $.then=="function")return at(K,k,Zl($),mt);if($.$$typeof===U)return at(K,k,zl(K,$),mt);Kl(K,$)}return null}function st(K,k,$,mt,Vt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get($)||null,A(k,K,""+mt,Vt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return K=K.get(mt.key===null?$:mt.key)||null,B(k,K,mt,Vt);case S:return K=K.get(mt.key===null?$:mt.key)||null,et(k,K,mt,Vt);case q:var _e=mt._init;return mt=_e(mt._payload),st(K,k,$,mt,Vt)}if(ft(mt)||it(mt))return K=K.get($)||null,pt(k,K,mt,Vt,null);if(typeof mt.then=="function")return st(K,k,$,Zl(mt),Vt);if(mt.$$typeof===U)return st(K,k,$,zl(k,mt),Vt);Kl(k,mt)}return null}function se(K,k,$,mt){for(var Vt=null,_e=null,Qt=k,ie=k=0,Sn=null;Qt!==null&&ie<$.length;ie++){Qt.index>ie?(Sn=Qt,Qt=null):Sn=Qt.sibling;var we=at(K,Qt,$[ie],mt);if(we===null){Qt===null&&(Qt=Sn);break}e&&Qt&&we.alternate===null&&i(K,Qt),k=p(we,k,ie),_e===null?Vt=we:_e.sibling=we,_e=we,Qt=Sn}if(ie===$.length)return s(K,Qt),Ce&&cs(K,ie),Vt;if(Qt===null){for(;ie<$.length;ie++)Qt=vt(K,$[ie],mt),Qt!==null&&(k=p(Qt,k,ie),_e===null?Vt=Qt:_e.sibling=Qt,_e=Qt);return Ce&&cs(K,ie),Vt}for(Qt=l(Qt);ie<$.length;ie++)Sn=st(Qt,K,ie,$[ie],mt),Sn!==null&&(e&&Sn.alternate!==null&&Qt.delete(Sn.key===null?ie:Sn.key),k=p(Sn,k,ie),_e===null?Vt=Sn:_e.sibling=Sn,_e=Sn);return e&&Qt.forEach(function(ja){return i(K,ja)}),Ce&&cs(K,ie),Vt}function ee(K,k,$,mt){if($==null)throw Error(a(151));for(var Vt=null,_e=null,Qt=k,ie=k=0,Sn=null,we=$.next();Qt!==null&&!we.done;ie++,we=$.next()){Qt.index>ie?(Sn=Qt,Qt=null):Sn=Qt.sibling;var ja=at(K,Qt,we.value,mt);if(ja===null){Qt===null&&(Qt=Sn);break}e&&Qt&&ja.alternate===null&&i(K,Qt),k=p(ja,k,ie),_e===null?Vt=ja:_e.sibling=ja,_e=ja,Qt=Sn}if(we.done)return s(K,Qt),Ce&&cs(K,ie),Vt;if(Qt===null){for(;!we.done;ie++,we=$.next())we=vt(K,we.value,mt),we!==null&&(k=p(we,k,ie),_e===null?Vt=we:_e.sibling=we,_e=we);return Ce&&cs(K,ie),Vt}for(Qt=l(Qt);!we.done;ie++,we=$.next())we=st(Qt,K,ie,we.value,mt),we!==null&&(e&&we.alternate!==null&&Qt.delete(we.key===null?ie:we.key),k=p(we,k,ie),_e===null?Vt=we:_e.sibling=we,_e=we);return e&&Qt.forEach(function(cb){return i(K,cb)}),Ce&&cs(K,ie),Vt}function ze(K,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Vt=$.key;k!==null;){if(k.key===Vt){if(Vt=$.type,Vt===M){if(k.tag===7){s(K,k.sibling),mt=u(k,$.props.children),mt.return=K,K=mt;break t}}else if(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===q&&Eg(Vt)===k.type){s(K,k.sibling),mt=u(k,$.props),bo(mt,$),mt.return=K,K=mt;break t}s(K,k);break}else i(K,k);k=k.sibling}$.type===M?(mt=os($.props.children,K.mode,mt,$.key),mt.return=K,K=mt):(mt=Nl($.type,$.key,$.props,null,K.mode,mt),bo(mt,$),mt.return=K,K=mt)}return b(K);case S:t:{for(Vt=$.key;k!==null;){if(k.key===Vt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(K,k.sibling),mt=u(k,$.children||[]),mt.return=K,K=mt;break t}else{s(K,k);break}else i(K,k);k=k.sibling}mt=Ju($,K.mode,mt),mt.return=K,K=mt}return b(K);case q:return Vt=$._init,$=Vt($._payload),ze(K,k,$,mt)}if(ft($))return se(K,k,$,mt);if(it($)){if(Vt=it($),typeof Vt!="function")throw Error(a(150));return $=Vt.call($),ee(K,k,$,mt)}if(typeof $.then=="function")return ze(K,k,Zl($),mt);if($.$$typeof===U)return ze(K,k,zl(K,$),mt);Kl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(K,k.sibling),mt=u(k,$),mt.return=K,K=mt):(s(K,k),mt=Qu($,K.mode,mt),mt.return=K,K=mt),b(K)):s(K,k)}return function(K,k,$,mt){try{So=0;var Vt=ze(K,k,$,mt);return nr=null,Vt}catch(Qt){if(Qt===fo||Qt===Il)throw Qt;var _e=$n(29,Qt,null,K.mode);return _e.lanes=mt,_e.return=K,_e}finally{}}}var ir=Tg(!0),Ag=Tg(!1),di=tt(null),Li=null;function Ca(e){var i=e.alternate;bt(pn,pn.current&1),bt(di,e),Li===null&&(i===null||Js.current!==null||i.memoizedState!==null)&&(Li=e)}function wg(e){if(e.tag===22){if(bt(pn,pn.current),bt(di,e),Li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Li=e)}}else Da()}function Da(){bt(pn,pn.current),bt(di,di.current)}function ta(e){yt(di),Li===e&&(Li=null),yt(pn)}var pn=tt(0);function Ql(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Sh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Nf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Lf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ii(),u=Aa(l);u.payload=i,s!=null&&(u.callback=s),i=wa(e,u,l),i!==null&&(ai(i,e,l),po(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ii(),u=Aa(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=wa(e,u,l),i!==null&&(ai(i,e,l),po(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ii(),l=Aa(s);l.tag=2,i!=null&&(l.callback=i),i=wa(e,l,s),i!==null&&(ai(i,e,s),po(i,e,s))}};function Rg(e,i,s,l,u,p,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,b):i.prototype&&i.prototype.isPureReactComponent?!io(s,l)||!io(u,p):!0}function Cg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Lf.enqueueReplaceState(i,i.state,null)}function gs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dg(e){Jl(e)}function Ug(e){console.error(e)}function Ng(e){Jl(e)}function $l(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Lg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(e,i,s){return s=Aa(s),s.tag=3,s.payload={element:null},s.callback=function(){$l(e,i)},s}function Pg(e){return e=Aa(e),e.tag=3,e}function Og(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var p=l.value;e.payload=function(){return u(p)},e.callback=function(){Lg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Lg(i,s,l),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function cS(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&lo(i,s,u,!0),s=di.current,s!==null){switch(s.tag){case 13:return Li===null?ah():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===cf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),rh(e,l,u)),!1;case 22:return s.flags|=65536,l===cf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),rh(e,l,u)),!1}throw Error(a(435,s.tag))}return rh(e,l,u),ah(),!1}if(Ce)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==ef&&(e=Error(a(422),{cause:l}),oo(ci(e,s)))):(l!==ef&&(i=Error(a(423),{cause:l}),oo(ci(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ci(l,s),u=Pf(e.stateNode,l,u),hf(e,u),an!==4&&(an=2)),!1;var p=Error(a(520),{cause:l});if(p=ci(p,s),Co===null?Co=[p]:Co.push(p),an!==4&&(an=2),i===null)return!0;l=ci(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Pf(s.stateNode,l,e),hf(s,e),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(za===null||!za.has(p))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Pg(u),Og(u,e,s,l),hf(s,u),!1}s=s.return}while(s!==null);return!1}var zg=Error(a(461)),xn=!1;function Tn(e,i,s,l){i.child=e===null?Ag(i,null,s,l):ir(i,e.child,s,l)}function Bg(e,i,s,l,u){s=s.render;var p=i.ref;if("ref"in l){var b={};for(var A in l)A!=="ref"&&(b[A]=l[A])}else b=l;return ds(i),l=_f(e,i,s,b,p,u),A=vf(),e!==null&&!xn?(xf(e,i,u),ea(e,i,u)):(Ce&&A&&$u(i),i.flags|=1,Tn(e,i,l,u),i.child)}function Ig(e,i,s,l,u){if(e===null){var p=s.type;return typeof p=="function"&&!Ku(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,Fg(e,i,p,l,u)):(e=Nl(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!Gf(e,u)){var b=p.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(b,l)&&e.ref===i.ref)return ea(e,i,u)}return i.flags|=1,e=Yi(p,l),e.ref=i.ref,e.return=i,i.child=e}function Fg(e,i,s,l,u){if(e!==null){var p=e.memoizedProps;if(io(p,l)&&e.ref===i.ref)if(xn=!1,i.pendingProps=l=p,Gf(e,u))(e.flags&131072)!==0&&(xn=!0);else return i.lanes=e.lanes,ea(e,i,u)}return Of(e,i,s,l,u)}function Hg(e,i,s){var l=i.pendingProps,u=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=p!==null?p.baseLanes|s:s,e!==null){for(u=i.child=e.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Vg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,p!==null?p.cachePool:null),p!==null?Fm(i,p):pf(),wg(i);else return i.lanes=i.childLanes=536870912,Vg(e,i,p!==null?p.baseLanes|s:s,s)}else p!==null?(Bl(i,p.cachePool),Fm(i,p),Da(),i.memoizedState=null):(e!==null&&Bl(i,null),pf(),Da());return Tn(e,i,u,s),i.child}function Vg(e,i,s,l){var u=lf();return u=u===null?null:{parent:dn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Bl(i,null),pf(),wg(i),e!==null&&lo(e,i,l,!0),null}function tc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Of(e,i,s,l,u){return ds(i),s=_f(e,i,s,l,void 0,u),l=vf(),e!==null&&!xn?(xf(e,i,u),ea(e,i,u)):(Ce&&l&&$u(i),i.flags|=1,Tn(e,i,s,u),i.child)}function Gg(e,i,s,l,u,p){return ds(i),i.updateQueue=null,s=Vm(i,l,s,u),Hm(e),l=vf(),e!==null&&!xn?(xf(e,i,p),ea(e,i,p)):(Ce&&l&&$u(i),i.flags|=1,Tn(e,i,s,p),i.child)}function kg(e,i,s,l,u){if(ds(i),i.stateNode===null){var p=qs,b=s.contextType;typeof b=="object"&&b!==null&&(p=Nn(b)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Lf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},uf(i),b=s.contextType,p.context=typeof b=="object"&&b!==null?Nn(b):qs,p.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Nf(i,s,b,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&Lf.enqueueReplaceState(p,p.state,null),go(i,l,p,u),mo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var A=i.memoizedProps,B=gs(s,A);p.props=B;var et=p.context,pt=s.contextType;b=qs,typeof pt=="object"&&pt!==null&&(b=Nn(pt));var vt=s.getDerivedStateFromProps;pt=typeof vt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||et!==b)&&Cg(i,p,l,b),Ta=!1;var at=i.memoizedState;p.state=at,go(i,l,p,u),mo(),et=i.memoizedState,A||at!==et||Ta?(typeof vt=="function"&&(Nf(i,s,vt,l),et=i.memoizedState),(B=Ta||Rg(i,s,B,l,at,et,b))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),p.props=l,p.state=et,p.context=b,l=B):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,ff(e,i),b=i.memoizedProps,pt=gs(s,b),p.props=pt,vt=i.pendingProps,at=p.context,et=s.contextType,B=qs,typeof et=="object"&&et!==null&&(B=Nn(et)),A=s.getDerivedStateFromProps,(et=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==vt||at!==B)&&Cg(i,p,l,B),Ta=!1,at=i.memoizedState,p.state=at,go(i,l,p,u),mo();var st=i.memoizedState;b!==vt||at!==st||Ta||e!==null&&e.dependencies!==null&&Ol(e.dependencies)?(typeof A=="function"&&(Nf(i,s,A,l),st=i.memoizedState),(pt=Ta||Rg(i,s,pt,l,at,st,B)||e!==null&&e.dependencies!==null&&Ol(e.dependencies))?(et||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,st,B),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,st,B)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=st),p.props=l,p.state=st,p.context=B,l=pt):(typeof p.componentDidUpdate!="function"||b===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,tc(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=ir(i,e.child,null,u),i.child=ir(i,null,s,u)):Tn(e,i,s,u),i.memoizedState=p.state,e=i.child):e=ea(e,i,u),e}function jg(e,i,s,l){return ro(),i.flags|=256,Tn(e,i,s,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:Um()}}function If(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=pi),e}function Xg(e,i,s){var l=i.pendingProps,u=!1,p=(i.flags&128)!==0,b;if((b=p)||(b=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),b&&(u=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(u?Ca(i):Da(),Ce){var A=nn,B;if(B=A){t:{for(B=A,A=Ni;B.nodeType!==8;){if(!A){A=null;break t}if(B=Mi(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(i.memoizedState={dehydrated:A,treeContext:ls!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},B=$n(18,null,null,0),B.stateNode=A,B.return=i,i.child=B,Hn=i,nn=null,B=!0):B=!1}B||fs(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Sh(A)?i.lanes=32:i.lanes=536870912,null;ta(i)}return A=l.children,l=l.fallback,u?(Da(),u=i.mode,A=ec({mode:"hidden",children:A},u),l=os(l,u,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,u=i.child,u.memoizedState=Bf(s),u.childLanes=If(e,b,s),i.memoizedState=zf,l):(Ca(i),Ff(i,A))}if(B=e.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(p)i.flags&256?(Ca(i),i.flags&=-257,i=Hf(e,i,s)):i.memoizedState!==null?(Da(),i.child=e.child,i.flags|=128,i=null):(Da(),u=l.fallback,A=i.mode,l=ec({mode:"visible",children:l.children},A),u=os(u,A,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,ir(i,e.child,null,s),l=i.child,l.memoizedState=Bf(s),l.childLanes=If(e,b,s),i.memoizedState=zf,i=u);else if(Ca(i),Sh(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var et=b.dgst;b=et,l=Error(a(419)),l.stack="",l.digest=b,oo({value:l,source:null,stack:null}),i=Hf(e,i,s)}else if(xn||lo(e,i,s,!1),b=(s&e.childLanes)!==0,xn||b){if(b=je,b!==null&&(l=s&-s,l=(l&42)!==0?1:re(l),l=(l&(b.suspendedLanes|s))!==0?0:l,l!==0&&l!==B.retryLane))throw B.retryLane=l,Ws(e,l),ai(b,e,l),zg;A.data==="$?"||ah(),i=Hf(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,nn=Mi(A.nextSibling),Hn=i,Ce=!0,us=null,Ni=!1,e!==null&&(fi[hi++]=Zi,fi[hi++]=Ki,fi[hi++]=ls,Zi=e.id,Ki=e.overflow,ls=i),i=Ff(i,l.children),i.flags|=4096);return i}return u?(Da(),u=l.fallback,A=i.mode,B=e.child,et=B.sibling,l=Yi(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,et!==null?u=Yi(et,u):(u=os(u,A,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,A=e.child.memoizedState,A===null?A=Bf(s):(B=A.cachePool,B!==null?(et=dn._currentValue,B=B.parent!==et?{parent:et,pool:et}:B):B=Um(),A={baseLanes:A.baseLanes|s,cachePool:B}),u.memoizedState=A,u.childLanes=If(e,b,s),i.memoizedState=zf,l):(Ca(i),s=e.child,e=s.sibling,s=Yi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=s,i.memoizedState=null,s)}function Ff(e,i){return i=ec({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ec(e,i){return e=$n(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hf(e,i,s){return ir(i,e.child,null,s),e=Ff(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Wg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),af(e.return,i,s)}function Vf(e,i,s,l,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=u)}function qg(e,i,s){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(Tn(e,i,l.children,s),l=pn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,s,i);else if(e.tag===19)Wg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(bt(pn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Ql(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Vf(i,!1,u,s,p);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Ql(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Vf(i,!0,s,null,p);break;case"together":Vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ea(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Oa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(lo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Yi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Yi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Gf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ol(e)))}function uS(e,i,s){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),Ea(i,dn,e.memoizedState.cache),ro();break;case 27:case 5:Gt(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ca(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Xg(e,i,s):(Ca(i),e=ea(e,i,s),e!==null?e.sibling:null);Ca(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(lo(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return qg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(pn,pn.current),l)break;return null;case 22:case 23:return i.lanes=0,Hg(e,i,s);case 24:Ea(i,dn,e.memoizedState.cache)}return ea(e,i,s)}function Yg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)xn=!0;else{if(!Gf(e,s)&&(i.flags&128)===0)return xn=!1,uS(e,i,s);xn=(e.flags&131072)!==0}else xn=!1,Ce&&(i.flags&1048576)!==0&&Em(i,Pl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")Ku(l)?(e=gs(l,e),i.tag=1,i=kg(null,i,l,e,s)):(i.tag=0,i=Of(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===R){i.tag=11,i=Bg(null,i,l,e,s);break t}else if(u===V){i.tag=14,i=Ig(null,i,l,e,s);break t}}throw i=gt(l)||l,Error(a(306,i,""))}}return i;case 0:return Of(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=gs(l,i.pendingProps),kg(e,i,l,u,s);case 3:t:{if(Mt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;u=p.element,ff(e,i),go(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Ea(i,dn,l),l!==p.cache&&sf(i,[dn],s,!0),mo(),l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=jg(e,i,l,s);break t}else if(l!==u){u=ci(Error(a(424)),i),oo(u),i=jg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Mi(e.firstChild),Hn=i,Ce=!0,us=null,Ni=!0,s=Ag(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ro(),l===u){i=ea(e,i,s);break t}Tn(e,i,l,s)}i=i.child}return i;case 26:return tc(e,i),e===null?(s=J0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ce||(s=i.type,e=i.pendingProps,l=mc(W.current).createElement(s),l[hn]=i,l[tn]=e,wn(l,s,e),on(l),i.stateNode=l):i.memoizedState=J0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Gt(i),e===null&&Ce&&(l=i.stateNode=Z0(i.type,i.pendingProps,W.current),Hn=i,Ni=!0,u=nn,Fa(i.type)?(bh=u,nn=Mi(l.firstChild)):nn=u),Tn(e,i,i.pendingProps.children,s),tc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((u=l=nn)&&(l=IS(l,i.type,i.pendingProps,Ni),l!==null?(i.stateNode=l,Hn=i,nn=Mi(l.firstChild),Ni=!1,u=!0):u=!1),u||fs(i)),Gt(i),u=i.type,p=i.pendingProps,b=e!==null?e.memoizedProps:null,l=p.children,vh(u,p)?l=null:b!==null&&vh(u,b)&&(i.flags|=32),i.memoizedState!==null&&(u=_f(e,i,nS,null,null,s),Io._currentValue=u),tc(e,i),Tn(e,i,l,s),i.child;case 6:return e===null&&Ce&&((e=s=nn)&&(s=FS(s,i.pendingProps,Ni),s!==null?(i.stateNode=s,Hn=i,nn=null,e=!0):e=!1),e||fs(i)),null;case 13:return Xg(e,i,s);case 4:return Mt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ir(i,null,l,s):Tn(e,i,l,s),i.child;case 11:return Bg(e,i,i.type,i.pendingProps,s);case 7:return Tn(e,i,i.pendingProps,s),i.child;case 8:return Tn(e,i,i.pendingProps.children,s),i.child;case 12:return Tn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),Tn(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,ds(i),u=Nn(u),l=l(u),i.flags|=1,Tn(e,i,l,s),i.child;case 14:return Ig(e,i,i.type,i.pendingProps,s);case 15:return Fg(e,i,i.type,i.pendingProps,s);case 19:return qg(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=ec(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Yi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Hg(e,i,s);case 24:return ds(i),l=Nn(dn),e===null?(u=lf(),u===null&&(u=je,p=rf(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=s),u=p),i.memoizedState={parent:l,cache:u},uf(i),Ea(i,dn,u)):((e.lanes&s)!==0&&(ff(e,i),go(i,null,null,s),mo()),u=e.memoizedState,p=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ea(i,dn,l)):(l=p.cache,Ea(i,dn,l),l!==u.cache&&sf(i,[dn],s,!0))),Tn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(e){e.flags|=4}function Zg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i_(i)){if(i=di.current,i!==null&&((Me&4194048)===Me?Li!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==Li))throw ho=cf,Nm;e.flags|=8192}}function nc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?wt():536870912,e.lanes|=i,or|=i)}function Mo(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function fS(e,i,s){var l=i.pendingProps;switch(tf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(dn),jt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(so(i)?na(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wm())),Je(i),null;case 26:return s=i.memoizedState,e===null?(na(i),s!==null?(Je(i),Zg(i,s)):(Je(i),i.flags&=-16777217)):s?s!==e.memoizedState?(na(i),Je(i),Zg(i,s)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==l&&na(i),Je(i),i.flags&=-16777217),null;case 27:le(i),s=W.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Ut.current,so(i)?Tm(i):(e=Z0(u,l,s),i.stateNode=e,na(i))}return Je(i),null;case 5:if(le(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(e=Ut.current,so(i))Tm(i);else{switch(u=mc(W.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[hn]=i,e[tn]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(wn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&na(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=W.current,so(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||G0(e.nodeValue,s)),e||fs(i)}else e=mc(e).createTextNode(l),e[hn]=i,i.stateNode=e}return Je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=so(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[hn]=i}else ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=wm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ta(i),i):(ta(i),null)}if(ta(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),nc(i,i.updateQueue),Je(i),null;case 4:return jt(),e===null&&dh(i.stateNode.containerInfo),Je(i),null;case 10:return Ji(i.type),Je(i),null;case 19:if(yt(pn),u=i.memoizedState,u===null)return Je(i),null;if(l=(i.flags&128)!==0,p=u.rendering,p===null)if(l)Mo(u,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=Ql(e),p!==null){for(i.flags|=128,Mo(u,!1),e=p.updateQueue,i.updateQueue=e,nc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Mm(s,e),s=s.sibling;return bt(pn,pn.current&1|2),i.child}e=e.sibling}u.tail!==null&&zt()>sc&&(i.flags|=128,l=!0,Mo(u,!1),i.lanes=4194304)}else{if(!l)if(e=Ql(p),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,nc(i,e),Mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Ce)return Je(i),null}else 2*zt()-u.renderingStartTime>sc&&s!==536870912&&(i.flags|=128,l=!0,Mo(u,!1),i.lanes=4194304);u.isBackwards?(p.sibling=i.child,i.child=p):(e=u.last,e!==null?e.sibling=p:i.child=p,u.last=p)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=zt(),i.sibling=null,e=pn.current,bt(pn,l?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return ta(i),mf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&nc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&yt(ps),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(dn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function hS(e,i){switch(tf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ji(dn),jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 13:if(ta(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ro()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return yt(pn),null;case 4:return jt(),null;case 10:return Ji(i.type),null;case 22:case 23:return ta(i),mf(),e!==null&&yt(ps),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ji(dn),null;case 25:return null;default:return null}}function Kg(e,i){switch(tf(i),i.tag){case 3:Ji(dn),jt();break;case 26:case 27:case 5:le(i);break;case 4:jt();break;case 13:ta(i);break;case 19:yt(pn);break;case 10:Ji(i.type);break;case 22:case 23:ta(i),mf(),e!==null&&yt(ps);break;case 24:Ji(dn)}}function Eo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var p=s.create,b=s.inst;l=p(),b.destroy=l}s=s.next}while(s!==u)}}catch(A){Ge(i,i.return,A)}}function Ua(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var p=u.next;l=p;do{if((l.tag&e)===e){var b=l.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,u=i;var B=s,et=A;try{et()}catch(pt){Ge(u,B,pt)}}}l=l.next}while(l!==p)}}catch(pt){Ge(i,i.return,pt)}}function Qg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Im(i,s)}catch(l){Ge(e,e.return,l)}}}function Jg(e,i,s){s.props=gs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ge(e,i,l)}}function To(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){Ge(e,i,u)}}function Pi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ge(e,i,u)}else s.current=null}function $g(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Ge(e,e.return,u)}}function kf(e,i,s){try{var l=e.stateNode;LS(l,e.type,s,i),l[tn]=i}catch(u){Ge(e,e.return,u)}}function t0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pc));else if(l!==4&&(l===27&&Fa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Xf(e,i,s),e=e.sibling;e!==null;)Xf(e,i,s),e=e.sibling}function ic(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Fa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ic(e,i,s),e=e.sibling;e!==null;)ic(e,i,s),e=e.sibling}function e0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);wn(i,l,s),i[hn]=e,i[tn]=s}catch(p){Ge(e,e.return,p)}}var ia=!1,rn=!1,Wf=!1,n0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function dS(e,i){if(e=e.containerInfo,gh=Sc,e=dm(e),ku(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var b=0,A=-1,B=-1,et=0,pt=0,vt=e,at=null;e:for(;;){for(var st;vt!==s||u!==0&&vt.nodeType!==3||(A=b+u),vt!==p||l!==0&&vt.nodeType!==3||(B=b+l),vt.nodeType===3&&(b+=vt.nodeValue.length),(st=vt.firstChild)!==null;)at=vt,vt=st;for(;;){if(vt===e)break e;if(at===s&&++et===u&&(A=b),at===p&&++pt===l&&(B=b),(st=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=st}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(_h={focusedElem:e,selectionRange:s},Sc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,p=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=i,u=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var se=gs(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(se,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ge(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)yh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function i0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Na(e,s),l&4&&Eo(5,s);break;case 1:if(Na(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(b){Ge(s,s.return,b)}else{var u=gs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ge(s,s.return,b)}}l&64&&Qg(s),l&512&&To(s,s.return);break;case 3:if(Na(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Im(e,i)}catch(b){Ge(s,s.return,b)}}break;case 27:i===null&&l&4&&e0(s);case 26:case 5:Na(e,s),i===null&&l&4&&$g(s),l&512&&To(s,s.return);break;case 12:Na(e,s);break;case 13:Na(e,s),l&4&&r0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=bS.bind(null,s),HS(e,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){i=i!==null&&i.memoizedState!==null||rn,u=ia;var p=rn;ia=l,(rn=i)&&!p?La(e,s,(s.subtreeFlags&8772)!==0):Na(e,s),ia=u,rn=p}break;case 30:break;default:Na(e,s)}}function a0(e){var i=e.alternate;i!==null&&(e.alternate=null,a0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Is(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,qn=!1;function aa(e,i,s){for(s=s.child;s!==null;)s0(e,i,s),s=s.sibling}function s0(e,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(dt,s)}catch{}switch(s.tag){case 26:rn||Pi(s,i),aa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:rn||Pi(s,i);var l=Ye,u=qn;Fa(s.type)&&(Ye=s.stateNode,qn=!1),aa(e,i,s),Po(s.stateNode),Ye=l,qn=u;break;case 5:rn||Pi(s,i);case 6:if(l=Ye,u=qn,Ye=null,aa(e,i,s),Ye=l,qn=u,Ye!==null)if(qn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(s.stateNode)}catch(p){Ge(s,i,p)}else try{Ye.removeChild(s.stateNode)}catch(p){Ge(s,i,p)}break;case 18:Ye!==null&&(qn?(e=Ye,q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Go(e)):q0(Ye,s.stateNode));break;case 4:l=Ye,u=qn,Ye=s.stateNode.containerInfo,qn=!0,aa(e,i,s),Ye=l,qn=u;break;case 0:case 11:case 14:case 15:rn||Ua(2,s,i),rn||Ua(4,s,i),aa(e,i,s);break;case 1:rn||(Pi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Jg(s,i,l)),aa(e,i,s);break;case 21:aa(e,i,s);break;case 22:rn=(l=rn)||s.memoizedState!==null,aa(e,i,s),rn=l;break;default:aa(e,i,s)}}function r0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(s){Ge(i,i.return,s)}}function pS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new n0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new n0),i;default:throw Error(a(435,e.tag))}}function qf(e,i){var s=pS(e);i.forEach(function(l){var u=MS.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function ti(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],p=e,b=i,A=b;t:for(;A!==null;){switch(A.tag){case 27:if(Fa(A.type)){Ye=A.stateNode,qn=!1;break t}break;case 5:Ye=A.stateNode,qn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,qn=!0;break t}A=A.return}if(Ye===null)throw Error(a(160));s0(p,b,u),Ye=null,qn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)o0(i,e),i=i.sibling}var bi=null;function o0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(i,e),ei(e),l&4&&(Ua(3,e,e.return),Eo(3,e),Ua(5,e,e.return));break;case 1:ti(i,e),ei(e),l&512&&(rn||s===null||Pi(s,s.return)),l&64&&ia&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=bi;if(ti(i,e),ei(e),l&512&&(rn||s===null||Pi(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":p=u.getElementsByTagName("title")[0],(!p||p[Ui]||p[hn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(l),u.head.insertBefore(p,u.querySelector("head > title"))),wn(p,l,s),p[hn]=e,on(p),l=p;break t;case"link":var b=e_("link","href",u).get(l+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(p=b[A],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break e}}p=u.createElement(l),wn(p,l,s),u.head.appendChild(p);break;case"meta":if(b=e_("meta","content",u).get(l+(s.content||""))){for(A=0;A<b.length;A++)if(p=b[A],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break e}}p=u.createElement(l),wn(p,l,s),u.head.appendChild(p);break;default:throw Error(a(468,l))}p[hn]=e,on(p),l=p}e.stateNode=l}else n_(u,e.type,e.stateNode);else e.stateNode=t_(u,l,e.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?n_(u,e.type,e.stateNode):t_(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kf(e,e.memoizedProps,s.memoizedProps)}break;case 27:ti(i,e),ei(e),l&512&&(rn||s===null||Pi(s,s.return)),s!==null&&l&4&&kf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,e),ei(e),l&512&&(rn||s===null||Pi(s,s.return)),e.flags&32){u=e.stateNode;try{jn(u,"")}catch(st){Ge(e,e.return,st)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,kf(e,u,s!==null?s.memoizedProps:u)),l&1024&&(Wf=!0);break;case 6:if(ti(i,e),ei(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){Ge(e,e.return,st)}}break;case 3:if(vc=null,u=bi,bi=gc(i.containerInfo),ti(i,e),bi=u,ei(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(st){Ge(e,e.return,st)}Wf&&(Wf=!1,l0(e));break;case 4:l=bi,bi=gc(e.stateNode.containerInfo),ti(i,e),ei(e),bi=l;break;case 12:ti(i,e),ei(e);break;case 13:ti(i,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($f=zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qf(e,l)));break;case 22:u=e.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,et=ia,pt=rn;if(ia=et||u,rn=pt||B,ti(i,e),rn=pt,ia=et,ei(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||B||ia||rn||_s(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(p=B.stateNode,u)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=B.stateNode;var vt=B.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Ge(B,B.return,st)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(st){Ge(B,B.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,qf(e,s))));break;case 19:ti(i,e),ei(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,qf(e,l)));break;case 30:break;case 21:break;default:ti(i,e),ei(e)}}function ei(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(t0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,p=jf(e);ic(e,p,u);break;case 5:var b=s.stateNode;s.flags&32&&(jn(b,""),s.flags&=-33);var A=jf(e);ic(e,A,b);break;case 3:case 4:var B=s.stateNode.containerInfo,et=jf(e);Xf(e,et,B);break;default:throw Error(a(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;l0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Na(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)i0(e,i.alternate,i),i=i.sibling}function _s(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ua(4,i,i.return),_s(i);break;case 1:Pi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Jg(i,i.return,s),_s(i);break;case 27:Po(i.stateNode);case 26:case 5:Pi(i,i.return),_s(i);break;case 22:i.memoizedState===null&&_s(i);break;case 30:_s(i);break;default:_s(i)}e=e.sibling}}function La(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,p=i,b=p.flags;switch(p.tag){case 0:case 11:case 15:La(u,p,s),Eo(4,p);break;case 1:if(La(u,p,s),l=p,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(l,l.return,et)}if(l=p,u=l.updateQueue,u!==null){var A=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Bm(B[u],A)}catch(et){Ge(l,l.return,et)}}s&&b&64&&Qg(p),To(p,p.return);break;case 27:e0(p);case 26:case 5:La(u,p,s),s&&l===null&&b&4&&$g(p),To(p,p.return);break;case 12:La(u,p,s);break;case 13:La(u,p,s),s&&b&4&&r0(u,p);break;case 22:p.memoizedState===null&&La(u,p,s),To(p,p.return);break;case 30:break;default:La(u,p,s)}i=i.sibling}}function Yf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&co(s))}function Zf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e))}function Oi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)c0(e,i,s,l),i=i.sibling}function c0(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(e,i,s,l),u&2048&&Eo(9,i);break;case 1:Oi(e,i,s,l);break;case 3:Oi(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Oi(e,i,s,l),e=i.stateNode;try{var p=i.memoizedProps,b=p.id,A=p.onPostCommit;typeof A=="function"&&A(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ge(i,i.return,B)}}else Oi(e,i,s,l);break;case 13:Oi(e,i,s,l);break;case 23:break;case 22:p=i.stateNode,b=i.alternate,i.memoizedState!==null?p._visibility&2?Oi(e,i,s,l):Ao(e,i):p._visibility&2?Oi(e,i,s,l):(p._visibility|=2,ar(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Yf(b,i);break;case 24:Oi(e,i,s,l),u&2048&&Zf(i.alternate,i);break;default:Oi(e,i,s,l)}}function ar(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=e,b=i,A=s,B=l,et=b.flags;switch(b.tag){case 0:case 11:case 15:ar(p,b,A,B,u),Eo(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?ar(p,b,A,B,u):Ao(p,b):(pt._visibility|=2,ar(p,b,A,B,u)),u&&et&2048&&Yf(b.alternate,b);break;case 24:ar(p,b,A,B,u),u&&et&2048&&Zf(b.alternate,b);break;default:ar(p,b,A,B,u)}i=i.sibling}}function Ao(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:Ao(s,l),u&2048&&Yf(l.alternate,l);break;case 24:Ao(s,l),u&2048&&Zf(l.alternate,l);break;default:Ao(s,l)}i=i.sibling}}var wo=8192;function sr(e){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)u0(e),e=e.sibling}function u0(e){switch(e.tag){case 26:sr(e),e.flags&wo&&e.memoizedState!==null&&$S(bi,e.memoizedState,e.memoizedProps);break;case 5:sr(e);break;case 3:case 4:var i=bi;bi=gc(e.stateNode.containerInfo),sr(e),bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wo,wo=16777216,sr(e),wo=i):sr(e));break;default:sr(e)}}function f0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,d0(l,e)}f0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h0(e),e=e.sibling}function h0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ac(e)):Ro(e);break;default:Ro(e)}}function ac(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,d0(l,e)}f0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ua(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}e=e.sibling}}function d0(e,i){for(;yn!==null;){var s=yn;switch(s.tag){case 0:case 11:case 15:Ua(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,yn=l;else t:for(s=e;yn!==null;){l=yn;var u=l.sibling,p=l.return;if(a0(l),l===s){yn=null;break t}if(u!==null){u.return=p,yn=u;break t}yn=p}}}var mS={getCacheForType:function(e){var i=Nn(dn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},gS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,je=null,ye=null,Me=0,Ne=0,ni=null,Pa=!1,rr=!1,Kf=!1,sa=0,an=0,Oa=0,vs=0,Qf=0,pi=0,or=0,Co=null,Yn=null,Jf=!1,$f=0,sc=1/0,rc=null,za=null,An=0,Ba=null,lr=null,cr=0,th=0,eh=null,p0=null,Do=0,nh=null;function ii(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(I.T!==null){var e=Ks;return e!==0?e:ch()}return Ee()}function m0(){pi===0&&(pi=(Me&536870912)===0||Ce?X():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function ai(e,i,s){(e===je&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ur(e,0),Ia(e,Me,pi,!1)),It(e,s),((Ue&2)===0||e!==je)&&(e===je&&((Ue&2)===0&&(vs|=s),an===4&&Ia(e,Me,pi,!1)),zi(e))}function g0(e,i,s){if((Ue&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),u=l?xS(e,i):sh(e,i,!0),p=l;do{if(u===0){rr&&!l&&Ia(e,i,0,!1);break}else{if(s=e.current.alternate,p&&!_S(s)){u=sh(e,i,!1),p=!1;continue}if(u===2){if(p=i,e.errorRecoveryDisabledLanes&p)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var A=e;u=Co;var B=A.current.memoizedState.isDehydrated;if(B&&(ur(A,b).flags|=256),b=sh(A,b,!1),b!==2){if(Kf&&!B){A.errorRecoveryDisabledLanes|=p,vs|=p,u=4;break t}p=Yn,Yn=u,p!==null&&(Yn===null?Yn=p:Yn.push.apply(Yn,p))}u=b}if(p=!1,u!==2)continue}}if(u===1){ur(e,0),Ia(e,i,0,!0);break}t:{switch(l=e,p=u,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ia(l,i,pi,!Pa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=$f+300-zt(),10<u)){if(Ia(l,i,pi,!Pa),Wt(l,0,!0)!==0)break t;l.timeoutHandle=X0(_0.bind(null,l,s,Yn,rc,Jf,i,pi,vs,or,Pa,p,2,-0,0),u);break t}_0(l,s,Yn,rc,Jf,i,pi,vs,or,Pa,p,0,-0,0)}}break}while(!0);zi(e)}function _0(e,i,s,l,u,p,b,A,B,et,pt,vt,at,st){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:JS},u0(i),vt=tb(),vt!==null)){e.cancelPendingCommit=vt(E0.bind(null,e,i,p,s,l,u,b,A,B,pt,1,at,st)),Ia(e,p,b,!et);return}E0(e,i,p,s,l,u,b,A,B)}function _S(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],p=u.getSnapshot;u=u.value;try{if(!Jn(p(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ia(e,i,s,l){i&=~Qf,i&=~vs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var p=31-Bt(u),b=1<<p;l[p]=-1,u&=~b}s!==0&&xt(e,s,i)}function oc(){return(Ue&6)===0?(Uo(0),!1):!0}function ih(){if(ye!==null){if(Ne===0)var e=ye.return;else e=ye,Qi=hs=null,yf(e),nr=null,So=0,e=ye;for(;e!==null;)Kg(e.alternate,e),e=e.return;ye=null}}function ur(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,OS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ih(),je=e,ye=s=Yi(e.current,null),Me=i,Ne=0,ni=null,Pa=!1,rr=Dt(e,i),Kf=!1,or=pi=Qf=vs=Oa=an=0,Yn=Co=null,Jf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-Bt(l),p=1<<u;i|=e[u],l&=~p}return sa=i,Cl(),s}function v0(e,i){ge=null,I.H=Yl,i===fo||i===Il?(i=Om(),Ne=3):i===Nm?(i=Om(),Ne=4):Ne=i===zg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ni=i,ye===null&&(an=1,$l(e,ci(i,e.current)))}function x0(){var e=I.H;return I.H=Yl,e===null?Yl:e}function y0(){var e=I.A;return I.A=mS,e}function ah(){an=4,Pa||(Me&4194048)!==Me&&di.current!==null||(rr=!0),(Oa&134217727)===0&&(vs&134217727)===0||je===null||Ia(je,Me,pi,!1)}function sh(e,i,s){var l=Ue;Ue|=2;var u=x0(),p=y0();(je!==e||Me!==i)&&(rc=null,ur(e,i)),i=!1;var b=an;t:do try{if(Ne!==0&&ye!==null){var A=ye,B=ni;switch(Ne){case 8:ih(),b=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var et=Ne;if(Ne=0,ni=null,fr(e,A,B,et),s&&rr){b=0;break t}break;default:et=Ne,Ne=0,ni=null,fr(e,A,B,et)}}vS(),b=an;break}catch(pt){v0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Qi=hs=null,Ue=l,I.H=u,I.A=p,ye===null&&(je=null,Me=0,Cl()),b}function vS(){for(;ye!==null;)S0(ye)}function xS(e,i){var s=Ue;Ue|=2;var l=x0(),u=y0();je!==e||Me!==i?(rc=null,sc=zt()+500,ur(e,i)):rr=Dt(e,i);t:do try{if(Ne!==0&&ye!==null){i=ye;var p=ni;e:switch(Ne){case 1:Ne=0,ni=null,fr(e,i,p,1);break;case 2:case 9:if(Lm(p)){Ne=0,ni=null,b0(i);break}i=function(){Ne!==2&&Ne!==9||je!==e||(Ne=7),zi(e)},p.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Lm(p)?(Ne=0,ni=null,b0(i)):(Ne=0,ni=null,fr(e,i,p,7));break;case 5:var b=null;switch(ye.tag){case 26:b=ye.memoizedState;case 5:case 27:var A=ye;if(!b||i_(b)){Ne=0,ni=null;var B=A.sibling;if(B!==null)ye=B;else{var et=A.return;et!==null?(ye=et,lc(et)):ye=null}break e}}Ne=0,ni=null,fr(e,i,p,5);break;case 6:Ne=0,ni=null,fr(e,i,p,6);break;case 8:ih(),an=6;break t;default:throw Error(a(462))}}yS();break}catch(pt){v0(e,pt)}while(!0);return Qi=hs=null,I.H=l,I.A=u,Ue=s,ye!==null?0:(je=null,Me=0,Cl(),an)}function yS(){for(;ye!==null&&!oe();)S0(ye)}function S0(e){var i=Yg(e.alternate,e,sa);e.memoizedProps=e.pendingProps,i===null?lc(e):ye=i}function b0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Gg(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Gg(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:yf(i);default:Kg(s,i),i=ye=Mm(i,sa),i=Yg(s,i,sa)}e.memoizedProps=e.pendingProps,i===null?lc(e):ye=i}function fr(e,i,s,l){Qi=hs=null,yf(i),nr=null,So=0;var u=i.return;try{if(cS(e,u,i,s,Me)){an=1,$l(e,ci(s,e.current)),ye=null;return}}catch(p){if(u!==null)throw ye=u,p;an=1,$l(e,ci(s,e.current)),ye=null;return}i.flags&32768?(Ce||l===1?e=!0:rr||(Me&536870912)!==0?e=!1:(Pa=e=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),M0(i,e)):lc(i)}function lc(e){var i=e;do{if((i.flags&32768)!==0){M0(i,Pa);return}e=i.return;var s=fS(i.alternate,i,sa);if(s!==null){ye=s;return}if(i=i.sibling,i!==null){ye=i;return}ye=i=e}while(i!==null);an===0&&(an=5)}function M0(e,i){do{var s=hS(e.alternate,e);if(s!==null){s.flags&=32767,ye=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ye=e;return}ye=e=s}while(e!==null);an=6,ye=null}function E0(e,i,s,l,u,p,b,A,B){e.cancelPendingCommit=null;do cc();while(An!==0);if((Ue&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=Yu,Tt(e,s,p,b,A,B),e===je&&(ye=je=null,Me=0),lr=i,Ba=e,cr=s,th=p,eh=u,p0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ES(Ke,function(){return C0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,u=Q.p,Q.p=2,b=Ue,Ue|=4;try{dS(e,i,s)}finally{Ue=b,Q.p=u,I.T=l}}An=1,T0(),A0(),w0()}}function T0(){if(An===1){An=0;var e=Ba,i=lr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=Q.p;Q.p=2;var u=Ue;Ue|=4;try{o0(i,e);var p=_h,b=dm(e.containerInfo),A=p.focusedElem,B=p.selectionRange;if(b!==A&&A&&A.ownerDocument&&hm(A.ownerDocument.documentElement,A)){if(B!==null&&ku(A)){var et=B.start,pt=B.end;if(pt===void 0&&(pt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(pt,A.value.length);else{var vt=A.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var st=at.getSelection(),se=A.textContent.length,ee=Math.min(B.start,se),ze=B.end===void 0?ee:Math.min(B.end,se);!st.extend&&ee>ze&&(b=ze,ze=ee,ee=b);var K=fm(A,ee),k=fm(A,ze);if(K&&k&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(K.node,K.offset),st.removeAllRanges(),ee>ze?(st.addRange($),st.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),st.addRange($))}}}}for(vt=[],st=A;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Sc=!!gh,_h=gh=null}finally{Ue=u,Q.p=l,I.T=s}}e.current=i,An=2}}function A0(){if(An===2){An=0;var e=Ba,i=lr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=Q.p;Q.p=2;var u=Ue;Ue|=4;try{i0(e,i.alternate,i)}finally{Ue=u,Q.p=l,I.T=s}}An=3}}function w0(){if(An===4||An===3){An=0,ae();var e=Ba,i=lr,s=cr,l=p0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,lr=Ba=null,R0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),De(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,u=Q.p,Q.p=2,I.T=null;try{for(var p=e.onRecoverableError,b=0;b<l.length;b++){var A=l[b];p(A.value,{componentStack:A.stack})}}finally{I.T=i,Q.p=u}}(cr&3)!==0&&cc(),zi(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===nh?Do++:(Do=0,nh=e):Do=0,Uo(0)}}function R0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,co(i)))}function cc(e){return T0(),A0(),w0(),C0()}function C0(){if(An!==5)return!1;var e=Ba,i=th;th=0;var s=De(cr),l=I.T,u=Q.p;try{Q.p=32>s?32:s,I.T=null,s=eh,eh=null;var p=Ba,b=cr;if(An=0,lr=Ba=null,cr=0,(Ue&6)!==0)throw Error(a(331));var A=Ue;if(Ue|=4,h0(p.current),c0(p,p.current,b,s),Ue=A,Uo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(dt,p)}catch{}return!0}finally{Q.p=u,I.T=l,R0(e,i)}}function D0(e,i,s){i=ci(s,i),i=Pf(e.stateNode,i,2),e=wa(e,i,2),e!==null&&(It(e,2),zi(e))}function Ge(e,i,s){if(e.tag===3)D0(e,e,s);else for(;i!==null;){if(i.tag===3){D0(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=ci(s,e),s=Pg(2),l=wa(i,s,2),l!==null&&(Og(s,l,i,e),It(l,2),zi(l));break}}i=i.return}}function rh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new gS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Kf=!0,u.add(s),e=SS.bind(null,e,i,s),i.then(e,e))}function SS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,je===e&&(Me&s)===s&&(an===4||an===3&&(Me&62914560)===Me&&300>zt()-$f?(Ue&2)===0&&ur(e,0):Qf|=s,or===Me&&(or=0)),zi(e)}function U0(e,i){i===0&&(i=wt()),e=Ws(e,i),e!==null&&(It(e,i),zi(e))}function bS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),U0(e,s)}function MS(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),U0(e,s)}function ES(e,i){return F(e,i)}var uc=null,hr=null,oh=!1,fc=!1,lh=!1,xs=0;function zi(e){e!==hr&&e.next===null&&(hr===null?uc=hr=e:hr=hr.next=e),fc=!0,oh||(oh=!0,AS())}function Uo(e,i){if(!lh&&fc){lh=!0;do for(var s=!1,l=uc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var p=0;else{var b=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-Bt(42|e)+1)-1,p&=u&~(b&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,O0(l,p))}else p=Me,p=Wt(l,l===je?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Dt(l,p)||(s=!0,O0(l,p));l=l.next}while(s);lh=!1}}function TS(){N0()}function N0(){fc=oh=!1;var e=0;xs!==0&&(PS()&&(e=xs),xs=0);for(var i=zt(),s=null,l=uc;l!==null;){var u=l.next,p=L0(l,i);p===0?(l.next=null,s===null?uc=u:s.next=u,u===null&&(hr=s)):(s=l,(e!==0||(p&3)!==0)&&(fc=!0)),l=u}Uo(e)}function L0(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var b=31-Bt(p),A=1<<b,B=u[b];B===-1?((A&s)===0||(A&l)!==0)&&(u[b]=ue(A,i)):B<=i&&(e.expiredLanes|=A),p&=~A}if(i=je,s=Me,s=Wt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Te(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Te(l),De(s)){case 2:case 8:s=ce;break;case 32:s=Ke;break;case 268435456:s=O;break;default:s=Ke}return l=P0.bind(null,e),s=F(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Te(l),e.callbackPriority=2,e.callbackNode=null,2}function P0(e,i){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(cc()&&e.callbackNode!==s)return null;var l=Me;return l=Wt(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(g0(e,l,i),L0(e,zt()),e.callbackNode!=null&&e.callbackNode===s?P0.bind(null,e):null)}function O0(e,i){if(cc())return null;g0(e,i,!0)}function AS(){zS(function(){(Ue&6)!==0?F(Xt,TS):N0()})}function ch(){return xs===0&&(xs=X()),xs}function z0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bl(""+e)}function B0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function wS(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var p=z0((u[tn]||null).action),b=l.submitter;b&&(i=(i=b[tn]||null)?z0(i.formAction):b.getAttribute("formAction"),i!==null&&(p=i,b=null));var A=new Al("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var B=b?B0(u,b):new FormData(u);Cf(s,{pending:!0,data:B,method:u.method,action:p},null,B)}}else typeof p=="function"&&(A.preventDefault(),B=b?B0(u,b):new FormData(u),Cf(s,{pending:!0,data:B,method:u.method,action:p},p,B))},currentTarget:u}]})}}for(var uh=0;uh<qu.length;uh++){var fh=qu[uh],RS=fh.toLowerCase(),CS=fh[0].toUpperCase()+fh.slice(1);Si(RS,"on"+CS)}Si(gm,"onAnimationEnd"),Si(_m,"onAnimationIteration"),Si(vm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Wy,"onTransitionRun"),Si(qy,"onTransitionStart"),Si(Yy,"onTransitionCancel"),Si(xm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function I0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var b=l.length-1;0<=b;b--){var A=l[b],B=A.instance,et=A.currentTarget;if(A=A.listener,B!==p&&u.isPropagationStopped())break t;p=A,u.currentTarget=et;try{p(u)}catch(pt){Jl(pt)}u.currentTarget=null,p=B}else for(b=0;b<l.length;b++){if(A=l[b],B=A.instance,et=A.currentTarget,A=A.listener,B!==p&&u.isPropagationStopped())break t;p=A,u.currentTarget=et;try{p(u)}catch(pt){Jl(pt)}u.currentTarget=null,p=B}}}}function Se(e,i){var s=i[zs];s===void 0&&(s=i[zs]=new Set);var l=e+"__bubble";s.has(l)||(F0(i,e,2,!1),s.add(l))}function hh(e,i,s){var l=0;i&&(l|=4),F0(s,e,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function dh(e){if(!e[hc]){e[hc]=!0,yl.forEach(function(s){s!=="selectionchange"&&(DS.has(s)||hh(s,!1,e),hh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,hh("selectionchange",!1,i))}}function F0(e,i,s,l){switch(c_(i)){case 2:var u=ib;break;case 8:u=ab;break;default:u=wh}s=u.bind(null,i,s,e),u=void 0,!Pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function ph(e,i,s,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var A=l.stateNode.containerInfo;if(A===u)break;if(b===4)for(b=l.return;b!==null;){var B=b.tag;if((B===3||B===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;A!==null;){if(b=Wi(A),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){l=p=b;continue t}A=A.parentNode}}l=l.return}Wp(function(){var et=p,pt=Nu(s),vt=[];t:{var at=ym.get(e);if(at!==void 0){var st=Al,se=e;switch(e){case"keypress":if(El(s)===0)break t;case"keydown":case"keyup":st=Ey;break;case"focusin":se="focus",st=Iu;break;case"focusout":se="blur",st=Iu;break;case"beforeblur":case"afterblur":st=Iu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=wy;break;case gm:case _m:case vm:st=my;break;case xm:st=Cy;break;case"scroll":case"scrollend":st=uy;break;case"wheel":st=Uy;break;case"copy":case"cut":case"paste":st=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Qp;break;case"toggle":case"beforetoggle":st=Ly}var ee=(i&4)!==0,ze=!ee&&(e==="scroll"||e==="scrollend"),K=ee?at!==null?at+"Capture":null:at;ee=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||K===null||(mt=Kr(k,K),mt!=null&&ee.push(Lo(k,mt,$))),ze)break;k=k.return}0<ee.length&&(at=new st(at,se,null,s,pt),vt.push({event:at,listeners:ee}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&s!==Uu&&(se=s.relatedTarget||s.fromElement)&&(Wi(se)||se[Di]))break t;if((st||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(se=s.relatedTarget||s.toElement,st=et,se=se?Wi(se):null,se!==null&&(ze=c(se),ee=se.tag,se!==ze||ee!==5&&ee!==27&&ee!==6)&&(se=null)):(st=null,se=et),st!==se)){if(ee=Zp,mt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Qp,mt="onPointerLeave",K="onPointerEnter",k="pointer"),ze=st==null?at:is(st),$=se==null?at:is(se),at=new ee(mt,k+"leave",st,s,pt),at.target=ze,at.relatedTarget=$,mt=null,Wi(pt)===et&&(ee=new ee(K,k+"enter",se,s,pt),ee.target=$,ee.relatedTarget=ze,mt=ee),ze=mt,st&&se)e:{for(ee=st,K=se,k=0,$=ee;$;$=dr($))k++;for($=0,mt=K;mt;mt=dr(mt))$++;for(;0<k-$;)ee=dr(ee),k--;for(;0<$-k;)K=dr(K),$--;for(;k--;){if(ee===K||K!==null&&ee===K.alternate)break e;ee=dr(ee),K=dr(K)}ee=null}else ee=null;st!==null&&H0(vt,at,st,ee,!1),se!==null&&ze!==null&&H0(vt,ze,se,ee,!0)}}t:{if(at=et?is(et):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Vt=sm;else if(im(at))if(rm)Vt=ky;else{Vt=Vy;var _e=Hy}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Du(et.elementType)&&(Vt=sm):Vt=Gy;if(Vt&&(Vt=Vt(e,et))){am(vt,Vt,s,pt);break t}_e&&_e(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(_e=et?is(et):window,e){case"focusin":(im(_e)||_e.contentEditable==="true")&&(ks=_e,ju=et,ao=null);break;case"focusout":ao=ju=ks=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,pm(vt,s,pt);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":pm(vt,s,pt)}var Qt;if(Hu)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Gs?em(e,s)&&(ie="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ie="onCompositionStart");ie&&(Jp&&s.locale!=="ko"&&(Gs||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Gs&&(Qt=qp()):(Ma=pt,Ou="value"in Ma?Ma.value:Ma.textContent,Gs=!0)),_e=dc(et,ie),0<_e.length&&(ie=new Kp(ie,e,null,s,pt),vt.push({event:ie,listeners:_e}),Qt?ie.data=Qt:(Qt=nm(s),Qt!==null&&(ie.data=Qt)))),(Qt=Oy?zy(e,s):By(e,s))&&(ie=dc(et,"onBeforeInput"),0<ie.length&&(_e=new Kp("onBeforeInput","beforeinput",null,s,pt),vt.push({event:_e,listeners:ie}),_e.data=Qt)),wS(vt,e,et,s,pt)}I0(vt,i)})}function Lo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function dc(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Kr(e,s),u!=null&&l.unshift(Lo(e,u,p)),u=Kr(e,i),u!=null&&l.push(Lo(e,u,p))),e.tag===3)return l;e=e.return}return[]}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function H0(e,i,s,l,u){for(var p=i._reactName,b=[];s!==null&&s!==l;){var A=s,B=A.alternate,et=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||et===null||(B=et,u?(et=Kr(s,p),et!=null&&b.unshift(Lo(s,et,B))):u||(et=Kr(s,p),et!=null&&b.push(Lo(s,et,B)))),s=s.return}b.length!==0&&e.push({event:i,listeners:b})}var US=/\r\n?/g,NS=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(US,`
`).replace(NS,"")}function G0(e,i){return i=V0(i),V0(e)===i}function pc(){}function Oe(e,i,s,l,u,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||jn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&jn(e,""+l);break;case"className":Ht(e,"class",l);break;case"tabIndex":Ht(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,s,l);break;case"style":jp(e,l,p);break;case"data":if(i!=="object"){Ht(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=bl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Oe(e,i,"name",u.name,u,null),Oe(e,i,"formEncType",u.formEncType,u,null),Oe(e,i,"formMethod",u.formMethod,u,null),Oe(e,i,"formTarget",u.formTarget,u,null)):(Oe(e,i,"encType",u.encType,u,null),Oe(e,i,"method",u.method,u,null),Oe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=bl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=pc);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=bl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Nt(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ly.get(s)||s,Nt(e,s,l))}}function mh(e,i,s,l,u,p){switch(s){case"style":jp(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?jn(e,l):(typeof l=="number"||typeof l=="bigint")&&jn(e,""+l);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),p=e[tn]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(i,p,u),typeof l=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Nt(e,s,l)}}}function wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var l=!1,u=!1,p;for(p in s)if(s.hasOwnProperty(p)){var b=s[p];if(b!=null)switch(p){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,p,b,s,null)}}u&&Oe(e,i,"srcSet",s.srcSet,s,null),l&&Oe(e,i,"src",s.src,s,null);return;case"input":Se("invalid",e);var A=p=b=u=null,B=null,et=null;for(l in s)if(s.hasOwnProperty(l)){var pt=s[l];if(pt!=null)switch(l){case"name":u=pt;break;case"type":b=pt;break;case"checked":B=pt;break;case"defaultChecked":et=pt;break;case"value":p=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Oe(e,i,l,pt,s,null)}}Fn(e,p,A,B,et,b,u,!1),xe(e);return;case"select":Se("invalid",e),l=b=p=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":p=A;break;case"defaultValue":b=A;break;case"multiple":l=A;default:Oe(e,i,u,A,s,null)}i=p,s=b,e.multiple=!!l,i!=null?en(e,!!l,i,!1):s!=null&&en(e,!!l,s,!0);return;case"textarea":Se("invalid",e),p=u=l=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":l=A;break;case"defaultValue":u=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Oe(e,i,b,A,s,null)}Fs(e,l,u,p),xe(e);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Oe(e,i,B,l,s,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(l=0;l<No.length;l++)Se(No[l],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(l=s[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,et,l,s,null)}return;default:if(Du(i)){for(pt in s)s.hasOwnProperty(pt)&&(l=s[pt],l!==void 0&&mh(e,i,pt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Oe(e,i,A,l,s,null))}function LS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,b=null,A=null,B=null,et=null,pt=null;for(st in s){var vt=s[st];if(s.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=vt;default:l.hasOwnProperty(st)||Oe(e,i,st,null,l,vt)}}for(var at in l){var st=l[at];if(vt=s[at],l.hasOwnProperty(at)&&(st!=null||vt!=null))switch(at){case"type":p=st;break;case"name":u=st;break;case"checked":et=st;break;case"defaultChecked":pt=st;break;case"value":b=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==vt&&Oe(e,i,at,st,l,vt)}}Ve(e,b,A,B,et,pt,p,u);return;case"select":st=b=A=at=null;for(p in s)if(B=s[p],s.hasOwnProperty(p)&&B!=null)switch(p){case"value":break;case"multiple":st=B;default:l.hasOwnProperty(p)||Oe(e,i,p,null,l,B)}for(u in l)if(p=l[u],B=s[u],l.hasOwnProperty(u)&&(p!=null||B!=null))switch(u){case"value":at=p;break;case"defaultValue":A=p;break;case"multiple":b=p;default:p!==B&&Oe(e,i,u,p,l,B)}i=A,s=b,l=st,at!=null?en(e,!!s,at,!1):!!l!=!!s&&(i!=null?en(e,!!s,i,!0):en(e,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Oe(e,i,A,null,l,u)}for(b in l)if(u=l[b],p=s[b],l.hasOwnProperty(b)&&(u!=null||p!=null))switch(b){case"value":at=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==p&&Oe(e,i,b,u,l,p)}En(e,at,st);return;case"option":for(var se in s)if(at=s[se],s.hasOwnProperty(se)&&at!=null&&!l.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Oe(e,i,se,null,l,at)}for(B in l)if(at=l[B],st=s[B],l.hasOwnProperty(B)&&at!==st&&(at!=null||st!=null))switch(B){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Oe(e,i,B,at,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)at=s[ee],s.hasOwnProperty(ee)&&at!=null&&!l.hasOwnProperty(ee)&&Oe(e,i,ee,null,l,at);for(et in l)if(at=l[et],st=s[et],l.hasOwnProperty(et)&&at!==st&&(at!=null||st!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Oe(e,i,et,at,l,st)}return;default:if(Du(i)){for(var ze in s)at=s[ze],s.hasOwnProperty(ze)&&at!==void 0&&!l.hasOwnProperty(ze)&&mh(e,i,ze,void 0,l,at);for(pt in l)at=l[pt],st=s[pt],!l.hasOwnProperty(pt)||at===st||at===void 0&&st===void 0||mh(e,i,pt,at,l,st);return}}for(var K in s)at=s[K],s.hasOwnProperty(K)&&at!=null&&!l.hasOwnProperty(K)&&Oe(e,i,K,null,l,at);for(vt in l)at=l[vt],st=s[vt],!l.hasOwnProperty(vt)||at===st||at==null&&st==null||Oe(e,i,vt,at,l,st)}var gh=null,_h=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function k0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function vh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xh=null;function PS(){var e=window.event;return e&&e.type==="popstate"?e===xh?!1:(xh=e,!0):(xh=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(e){return W0.resolve(null).then(e).catch(BS)}:X0;function BS(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function q0(e,i){var s=i,l=0,u=0;do{var p=s.nextSibling;if(e.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<l&&8>l){s=l;var b=e.ownerDocument;if(s&1&&Po(b.documentElement),s&2&&Po(b.body),s&4)for(s=b.head,Po(s),b=s.firstChild;b;){var A=b.nextSibling,B=b.nodeName;b[Ui]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=A}}if(u===0){e.removeChild(p),Go(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=p}while(s);Go(i)}function yh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":yh(s),Is(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function IS(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ui])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function FS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Mi(e.nextSibling),e===null))return null;return e}function Sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function HS(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var bh=null;function Y0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function Z0(e,i,s){switch(i=mc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Po(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Is(e)}var mi=new Map,K0=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=Q.d;Q.d={f:VS,r:GS,D:kS,C:jS,L:XS,m:WS,X:YS,S:qS,M:ZS};function VS(){var e=ra.f(),i=oc();return e||i}function GS(e){var i=Sa(e);i!==null&&i.tag===5&&i.type==="form"?gg(i):ra.r(e)}var pr=typeof document>"u"?null:document;function Q0(e,i,s){var l=pr;if(l&&typeof i=="string"&&i){var u=vn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),K0.has(u)||(K0.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),wn(i,"link",e),on(i),l.head.appendChild(i)))}}function kS(e){ra.D(e),Q0("dns-prefetch",e,null)}function jS(e,i){ra.C(e,i),Q0("preconnect",e,i)}function XS(e,i,s){ra.L(e,i,s);var l=pr;if(l&&e&&i){var u='link[rel="preload"][as="'+vn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+vn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+vn(s.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var p=u;switch(i){case"style":p=mr(e);break;case"script":p=gr(e)}mi.has(p)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),mi.set(p,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(Oo(p))||i==="script"&&l.querySelector(zo(p))||(i=l.createElement("link"),wn(i,"link",e),on(i),l.head.appendChild(i)))}}function WS(e,i){ra.m(e,i);var s=pr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+vn(l)+'"][href="'+vn(e)+'"]',p=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=gr(e)}if(!mi.has(p)&&(e=g({rel:"modulepreload",href:e},i),mi.set(p,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zo(p)))return}l=s.createElement("link"),wn(l,"link",e),on(l),s.head.appendChild(l)}}}function qS(e,i,s){ra.S(e,i,s);var l=pr;if(l&&e){var u=ba(l).hoistableStyles,p=mr(e);i=i||"default";var b=u.get(p);if(!b){var A={loading:0,preload:null};if(b=l.querySelector(Oo(p)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=mi.get(p))&&Mh(e,s);var B=b=l.createElement("link");on(B),wn(B,"link",e),B._p=new Promise(function(et,pt){B.onload=et,B.onerror=pt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_c(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:A},u.set(p,b)}}}function YS(e,i){ra.X(e,i);var s=pr;if(s&&e){var l=ba(s).hoistableScripts,u=gr(e),p=l.get(u);p||(p=s.querySelector(zo(u)),p||(e=g({src:e,async:!0},i),(i=mi.get(u))&&Eh(e,i),p=s.createElement("script"),on(p),wn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function ZS(e,i){ra.M(e,i);var s=pr;if(s&&e){var l=ba(s).hoistableScripts,u=gr(e),p=l.get(u);p||(p=s.querySelector(zo(u)),p||(e=g({src:e,async:!0,type:"module"},i),(i=mi.get(u))&&Eh(e,i),p=s.createElement("script"),on(p),wn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function J0(e,i,s,l){var u=(u=W.current)?gc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=mr(s.href),s=ba(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=mr(s.href);var p=ba(u).hoistableStyles,b=p.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,b),(p=u.querySelector(Oo(e)))&&!p._p&&(b.instance=p,b.state.loading=5),mi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mi.set(e,s),p||KS(u,e,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=gr(s),s=ba(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function mr(e){return'href="'+vn(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function $0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function KS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),on(i),e.head.appendChild(i))}function gr(e){return'[src="'+vn(e)+'"]'}function zo(e){return"script[async]"+e}function t_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+vn(s.href)+'"]');if(l)return i.instance=l,on(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),on(l),wn(l,"style",u),_c(l,s.precedence,e),i.instance=l;case"stylesheet":u=mr(s.href);var p=e.querySelector(Oo(u));if(p)return i.state.loading|=4,i.instance=p,on(p),p;l=$0(s),(u=mi.get(u))&&Mh(l,u),p=(e.ownerDocument||e).createElement("link"),on(p);var b=p;return b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),wn(p,"link",l),i.state.loading|=4,_c(p,s.precedence,e),i.instance=p;case"script":return p=gr(s.src),(u=e.querySelector(zo(p)))?(i.instance=u,on(u),u):(l=s,(u=mi.get(p))&&(l=g({},s),Eh(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),on(u),wn(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,_c(l,s.precedence,e));return i.instance}function _c(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,p=u,b=0;b<l.length;b++){var A=l[b];if(A.dataset.precedence===i)p=A;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Eh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function e_(e,i,s){if(vc===null){var l=new Map,u=vc=new Map;u.set(s,l)}else u=vc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var p=s[u];if(!(p[Ui]||p[hn]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(i)||"";b=e+b;var A=l.get(b);A?A.push(p):l.set(b,[p])}}return l}function n_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function QS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function i_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bo=null;function JS(){}function $S(e,i,s){if(Bo===null)throw Error(a(475));var l=Bo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=mr(s.href),p=e.querySelector(Oo(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=xc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=p,on(p);return}p=e.ownerDocument||e,s=$0(s),(u=mi.get(u))&&Mh(s,u),p=p.createElement("link"),on(p);var b=p;b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),wn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function tb(){if(Bo===null)throw Error(a(475));var e=Bo;return e.stylesheets&&e.count===0&&Th(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Th(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function xc(){if(this.count--,this.count===0){if(this.stylesheets)Th(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Th(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(eb,e),yc=null,xc.call(e))}function eb(e,i){if(!(i.state.loading&4)){var s=yc.get(e);if(s)var l=s.get(null);else{s=new Map,yc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var b=u[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}u=i.instance,b=u.getAttribute("data-precedence"),p=s.get(b)||l,p===l&&s.set(null,u),s.set(b,u),this.count++,l=xc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Io={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function nb(e,i,s,l,u,p,b,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function a_(e,i,s,l,u,p,b,A,B,et,pt,vt){return e=new nb(e,i,s,b,A,B,et,vt),i=1,p===!0&&(i|=24),p=$n(3,null,null,i),e.current=p,p.stateNode=e,i=rf(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},uf(p),e}function s_(e){return e?(e=qs,e):qs}function r_(e,i,s,l,u,p){u=s_(u),l.context===null?l.context=u:l.pendingContext=u,l=Aa(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=wa(e,l,i),s!==null&&(ai(s,e,i),po(s,e,i))}function o_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Ah(e,i){o_(e,i),(e=e.alternate)&&o_(e,i)}function l_(e){if(e.tag===13){var i=Ws(e,67108864);i!==null&&ai(i,e,67108864),Ah(e,67108864)}}var Sc=!0;function ib(e,i,s,l){var u=I.T;I.T=null;var p=Q.p;try{Q.p=2,wh(e,i,s,l)}finally{Q.p=p,I.T=u}}function ab(e,i,s,l){var u=I.T;I.T=null;var p=Q.p;try{Q.p=8,wh(e,i,s,l)}finally{Q.p=p,I.T=u}}function wh(e,i,s,l){if(Sc){var u=Rh(l);if(u===null)ph(e,i,l,bc,s),u_(e,l);else if(rb(u,e,i,s,l))l.stopPropagation();else if(u_(e,l),i&4&&-1<sb.indexOf(e)){for(;u!==null;){var p=Sa(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=Jt(p.pendingLanes);if(b!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var B=1<<31-Bt(b);A.entanglements[1]|=B,b&=~B}zi(p),(Ue&6)===0&&(sc=zt()+500,Uo(0))}}break;case 13:A=Ws(p,2),A!==null&&ai(A,p,2),oc(),Ah(p,2)}if(p=Rh(l),p===null&&ph(e,i,l,bc,s),p===u)break;u=p}u!==null&&l.stopPropagation()}else ph(e,i,l,null,s)}}function Rh(e){return e=Nu(e),Ch(e)}var bc=null;function Ch(e){if(bc=null,e=Wi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return bc=e,null}function c_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case Xt:return 2;case ce:return 8;case Ke:case Qe:return 32;case O:return 268435456;default:return 32}default:return 32}}var Dh=!1,Ha=null,Va=null,Ga=null,Fo=new Map,Ho=new Map,ka=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(e,i){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Vo(e,i,s,l,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=Sa(i),i!==null&&l_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function rb(e,i,s,l,u){switch(i){case"focusin":return Ha=Vo(Ha,e,i,s,l,u),!0;case"dragenter":return Va=Vo(Va,e,i,s,l,u),!0;case"mouseover":return Ga=Vo(Ga,e,i,s,l,u),!0;case"pointerover":var p=u.pointerId;return Fo.set(p,Vo(Fo.get(p)||null,e,i,s,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Ho.set(p,Vo(Ho.get(p)||null,e,i,s,l,u)),!0}return!1}function f_(e){var i=Wi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,xi(e.priority,function(){if(s.tag===13){var l=ii();l=re(l);var u=Ws(s,l);u!==null&&ai(u,s,l),Ah(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Rh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Uu=l,s.target.dispatchEvent(l),Uu=null}else return i=Sa(s),i!==null&&l_(i),e.blockedOn=s,!1;i.shift()}return!0}function h_(e,i,s){Mc(e)&&s.delete(i)}function ob(){Dh=!1,Ha!==null&&Mc(Ha)&&(Ha=null),Va!==null&&Mc(Va)&&(Va=null),Ga!==null&&Mc(Ga)&&(Ga=null),Fo.forEach(h_),Ho.forEach(h_)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,Dh||(Dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ob)))}var Tc=null;function d_(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(Ch(l||s)===null)continue;break}var p=Sa(s);p!==null&&(e.splice(i,3),i-=3,Cf(p,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Go(e){function i(B){return Ec(B,e)}Ha!==null&&Ec(Ha,e),Va!==null&&Ec(Va,e),Ga!==null&&Ec(Ga,e),Fo.forEach(i),Ho.forEach(i);for(var s=0;s<ka.length;s++){var l=ka[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ka.length&&(s=ka[0],s.blockedOn===null);)f_(s),s.blockedOn===null&&ka.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],p=s[l+1],b=u[tn]||null;if(typeof p=="function")b||d_(s);else if(b){var A=null;if(p&&p.hasAttribute("formAction")){if(u=p,b=p[tn]||null)A=b.formAction;else if(Ch(u)!==null)continue}else A=b.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),d_(s)}}}function Uh(e){this._internalRoot=e}Ac.prototype.render=Uh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ii();r_(s,l,e,i,null,null)},Ac.prototype.unmount=Uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;r_(e.current,2,null,e,null,null),oc(),i[Di]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ee();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ka.length&&i!==0&&i<ka[s].priority;s++);ka.splice(s,0,e),s===0&&f_(e)}};var p_=t.version;if(p_!=="19.1.1")throw Error(a(527,p_,"19.1.1"));Q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var lb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{dt=wc.inject(lb),_t=wc}catch{}}return jo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=Dg,p=Ug,b=Ng,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=a_(e,1,!1,null,null,s,l,u,p,b,A,null),e[Di]=i.current,dh(e),new Uh(i)},jo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",p=Dg,b=Ug,A=Ng,B=null,et=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(B=s.unstable_transitionCallbacks),s.formState!==void 0&&(et=s.formState)),i=a_(e,1,!0,i,s??null,l,u,p,b,A,B,et),i.context=s_(null),s=i.current,l=ii(),l=re(l),u=Aa(l),u.callback=null,wa(s,u,l),s=l,i.current.lanes=s,It(i,s),zi(i),e[Di]=i.current,dh(e),new Ac(i)},jo.version="19.1.1",jo}var E_;function vb(){if(E_)return Ph.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ph.exports=_b(),Ph.exports}var xb=vb();const yb=kv(xb);/**
 * react-router v7.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var T_="popstate";function Sb(r={}){function t(a,o){let{pathname:c,search:f,hash:h}=a.location;return Ed("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:il(o)}return Mb(t,n,null,r)}function $e(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Gi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bb(){return Math.random().toString(36).substring(2,10)}function A_(r,t){return{usr:r.state,key:r.key,idx:t}}function Ed(r,t,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Wr(t):t,state:n,key:t&&t.key||a||bb()}}function il({pathname:r="/",search:t="",hash:n=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Wr(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(t.search=r.substring(a),r=r.substring(0,a)),r&&(t.pathname=r)}return t}function Mb(r,t,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,h="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let y=g(),v=y==null?null:y-d;d=y,m&&m({action:h,location:E.location,delta:v})}function x(y,v){h="PUSH";let L=Ed(E.location,y,v);d=g()+1;let U=A_(L,d),R=E.createHref(L);try{f.pushState(U,"",R)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(R)}c&&m&&m({action:h,location:E.location,delta:1})}function S(y,v){h="REPLACE";let L=Ed(E.location,y,v);d=g();let U=A_(L,d),R=E.createHref(L);f.replaceState(U,"",R),c&&m&&m({action:h,location:E.location,delta:0})}function M(y){return Eb(y)}let E={get action(){return h},get location(){return r(o,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(T_,_),m=y,()=>{o.removeEventListener(T_,_),m=null}},createHref(y){return t(o,y)},createURL:M,encodeLocation(y){let v=M(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return f.go(y)}};return E}function Eb(r,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$e(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:il(r);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Xv(r,t,n="/"){return Tb(r,t,n,!1)}function Tb(r,t,n,a){let o=typeof t=="string"?Wr(t):t,c=va(o.pathname||"/",n);if(c==null)return null;let f=Wv(r);Ab(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let d=Bb(c);h=Ob(f[m],d,a)}return h}function Wv(r,t=[],n=[],a="",o=!1){let c=(f,h,m=o,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;$e(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let _=pa([a,g.relativePath]),x=n.concat(g);f.children&&f.children.length>0&&($e(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Wv(f.children,t,x,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:Lb(_,f.index),routesMeta:x})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of qv(f.path))c(f,h,!0,m)}),t}function qv(r){let t=r.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=qv(a.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function Ab(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:Pb(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var wb=/^:[\w-]+$/,Rb=3,Cb=2,Db=1,Ub=10,Nb=-2,w_=r=>r==="*";function Lb(r,t){let n=r.split("/"),a=n.length;return n.some(w_)&&(a+=Nb),t&&(a+=Cb),n.filter(o=>!w_(o)).reduce((o,c)=>o+(wb.test(c)?Rb:c===""?Db:Ub),a)}function Pb(r,t){return r.length===t.length&&r.slice(0,-1).every((a,o)=>a===t[o])?r[r.length-1]-t[t.length-1]:0}function Ob(r,t,n=!1){let{routesMeta:a}=r,o={},c="/",f=[];for(let h=0;h<a.length;++h){let m=a[h],d=h===a.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=du({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),x=m.route;if(!_&&d&&n&&!a[a.length-1].route.index&&(_=du({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:pa([c,_.pathname]),pathnameBase:Vb(pa([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=pa([c,_.pathnameBase]))}return f}function du(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=zb(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((d,{paramName:g,isOptional:_},x)=>{if(g==="*"){let M=h[x]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const S=h[x];return _&&!S?d[g]=void 0:d[g]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:r}}function zb(r,t=!1,n=!0){Gi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Bb(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function va(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function Ib(r,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?Wr(r):r;return{pathname:n?n.startsWith("/")?n:Fb(n,t):t,search:Gb(a),hash:kb(o)}}function Fb(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ih(r,t,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hb(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yv(r){let t=Hb(r);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Zv(r,t,n,a=!1){let o;typeof r=="string"?o=Wr(r):(o={...r},$e(!o.pathname||!o.pathname.includes("?"),Ih("?","pathname","search",o)),$e(!o.pathname||!o.pathname.includes("#"),Ih("#","pathname","hash",o)),$e(!o.search||!o.search.includes("#"),Ih("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,h;if(f==null)h=n;else{let _=t.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;o.pathname=x.join("/")}h=_>=0?t[_]:"/"}let m=Ib(o,h),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var pa=r=>r.join("/").replace(/\/\/+/g,"/"),Vb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Gb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,kb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function jb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Kv=["POST","PUT","PATCH","DELETE"];new Set(Kv);var Xb=["GET",...Kv];new Set(Xb);var qr=rt.createContext(null);qr.displayName="DataRouter";var Su=rt.createContext(null);Su.displayName="DataRouterState";rt.createContext(!1);var Qv=rt.createContext({isTransitioning:!1});Qv.displayName="ViewTransition";var Wb=rt.createContext(new Map);Wb.displayName="Fetchers";var qb=rt.createContext(null);qb.displayName="Await";var Xi=rt.createContext(null);Xi.displayName="Navigation";var fl=rt.createContext(null);fl.displayName="Location";var xa=rt.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var yp=rt.createContext(null);yp.displayName="RouteError";function Yb(r,{relative:t}={}){$e(hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=rt.useContext(Xi),{hash:o,pathname:c,search:f}=dl(r,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:pa([n,c])),a.createHref({pathname:h,search:f,hash:o})}function hl(){return rt.useContext(fl)!=null}function Ps(){return $e(hl(),"useLocation() may be used only in the context of a <Router> component."),rt.useContext(fl).location}var Jv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $v(r){rt.useContext(Xi).static||rt.useLayoutEffect(r)}function Sp(){let{isDataRoute:r}=rt.useContext(xa);return r?oM():Zb()}function Zb(){$e(hl(),"useNavigate() may be used only in the context of a <Router> component.");let r=rt.useContext(qr),{basename:t,navigator:n}=rt.useContext(Xi),{matches:a}=rt.useContext(xa),{pathname:o}=Ps(),c=JSON.stringify(Yv(a)),f=rt.useRef(!1);return $v(()=>{f.current=!0}),rt.useCallback((m,d={})=>{if(Gi(f.current,Jv),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=Zv(m,JSON.parse(c),o,d.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:pa([t,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[t,n,c,o,r])}rt.createContext(null);function dl(r,{relative:t}={}){let{matches:n}=rt.useContext(xa),{pathname:a}=Ps(),o=JSON.stringify(Yv(n));return rt.useMemo(()=>Zv(r,JSON.parse(o),a,t==="path"),[r,o,a,t])}function Kb(r,t){return tx(r,t)}function tx(r,t,n,a,o){$e(hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=rt.useContext(Xi),{matches:f}=rt.useContext(xa),h=f[f.length-1],m=h?h.params:{},d=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let L=_&&_.path||"";ex(d,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=Ps(),S;if(t){let L=typeof t=="string"?Wr(t):t;$e(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),S=L}else S=x;let M=S.pathname||"/",E=M;if(g!=="/"){let L=g.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let y=Xv(r,{pathname:E});Gi(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Gi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=eM(y&&y.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:pa([g,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:pa([g,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,n,a,o);return t&&v?rt.createElement(fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function Qb(){let r=rM(),t=jb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=rt.createElement(rt.Fragment,null,rt.createElement("p",null,"💿 Hey developer 👋"),rt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",rt.createElement("code",{style:c},"ErrorBoundary")," or"," ",rt.createElement("code",{style:c},"errorElement")," prop on your route.")),rt.createElement(rt.Fragment,null,rt.createElement("h2",null,"Unexpected Application Error!"),rt.createElement("h3",{style:{fontStyle:"italic"}},t),n?rt.createElement("pre",{style:o},n):null,f)}var Jb=rt.createElement(Qb,null),$b=class extends rt.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.unstable_onError?this.props.unstable_onError(r,t):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?rt.createElement(xa.Provider,{value:this.props.routeContext},rt.createElement(yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tM({routeContext:r,match:t,children:n}){let a=rt.useContext(qr);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),rt.createElement(xa.Provider,{value:r},n)}function eM(r,t=[],n=null,a=null,o=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let c=r,f=n?.errors;if(f!=null){let d=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$e(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,d+1))}let h=!1,m=-1;if(n)for(let d=0;d<c.length;d++){let g=c[d];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=d),g.route.id){let{loaderData:_,errors:x}=n,S=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((d,g,_)=>{let x,S=!1,M=null,E=null;n&&(x=f&&g.route.id?f[g.route.id]:void 0,M=g.route.errorElement||Jb,h&&(m<0&&_===0?(ex("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):m===_&&(S=!0,E=g.route.hydrateFallbackElement||null)));let y=t.concat(c.slice(0,_+1)),v=()=>{let L;return x?L=M:S?L=E:g.route.Component?L=rt.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=d,rt.createElement(tM,{match:g,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:L})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?rt.createElement($b,{location:n.location,revalidation:n.revalidation,component:M,error:x,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:a}):v()},null)}function bp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nM(r){let t=rt.useContext(qr);return $e(t,bp(r)),t}function iM(r){let t=rt.useContext(Su);return $e(t,bp(r)),t}function aM(r){let t=rt.useContext(xa);return $e(t,bp(r)),t}function Mp(r){let t=aM(r),n=t.matches[t.matches.length-1];return $e(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function sM(){return Mp("useRouteId")}function rM(){let r=rt.useContext(yp),t=iM("useRouteError"),n=Mp("useRouteError");return r!==void 0?r:t.errors?.[n]}function oM(){let{router:r}=nM("useNavigate"),t=Mp("useNavigate"),n=rt.useRef(!1);return $v(()=>{n.current=!0}),rt.useCallback(async(o,c={})=>{Gi(n.current,Jv),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:t,...c}))},[r,t])}var R_={};function ex(r,t,n){!t&&!R_[r]&&(R_[r]=!0,Gi(!1,n))}rt.memo(lM);function lM({routes:r,future:t,state:n,unstable_onError:a}){return tx(r,void 0,n,a,t)}function nx(r){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cM({basename:r="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){$e(!hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=rt.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=Wr(n));let{pathname:m="/",search:d="",hash:g="",state:_=null,key:x="default"}=n,S=rt.useMemo(()=>{let M=va(m,f);return M==null?null:{location:{pathname:M,search:d,hash:g,state:_,key:x},navigationType:a}},[f,m,d,g,_,x,a]);return Gi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:rt.createElement(Xi.Provider,{value:h},rt.createElement(fl.Provider,{children:t,value:S}))}function uM({children:r,location:t}){return Kb(Td(r),t)}function Td(r,t=[]){let n=[];return rt.Children.forEach(r,(a,o)=>{if(!rt.isValidElement(a))return;let c=[...t,o];if(a.type===rt.Fragment){n.push.apply(n,Td(a.props.children,c));return}$e(a.type===nx,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Td(a.props.children,c)),n.push(f)}),n}var au="get",su="application/x-www-form-urlencoded";function bu(r){return r!=null&&typeof r.tagName=="string"}function fM(r){return bu(r)&&r.tagName.toLowerCase()==="button"}function hM(r){return bu(r)&&r.tagName.toLowerCase()==="form"}function dM(r){return bu(r)&&r.tagName.toLowerCase()==="input"}function pM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function mM(r,t){return r.button===0&&(!t||t==="_self")&&!pM(r)}var Rc=null;function gM(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var _M=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fh(r){return r!=null&&!_M.has(r)?(Gi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`),null):r}function vM(r,t){let n,a,o,c,f;if(hM(r)){let h=r.getAttribute("action");a=h?va(h,t):null,n=r.getAttribute("method")||au,o=Fh(r.getAttribute("enctype"))||su,c=new FormData(r)}else if(fM(r)||dM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(a=m?va(m,t):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||au,o=Fh(r.getAttribute("formenctype"))||Fh(h.getAttribute("enctype"))||su,c=new FormData(h,r),!gM()){let{name:d,type:g,value:_}=r;if(g==="image"){let x=d?`${d}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else d&&c.append(d,_)}}else{if(bu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=au,a=null,o=su,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ep(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function xM(r,t,n){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&va(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function yM(r,t){if(r.id in t)return t[r.id];try{let n=await import(r.module);return t[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function SM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function bM(r,t,n){let a=await Promise.all(r.map(async o=>{let c=t.routes[o.route.id];if(c){let f=await yM(c,n);return f.links?f.links():[]}return[]}));return AM(a.flat(1).filter(SM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function C_(r,t,n,a,o,c){let f=(m,d)=>n[d]?m.route.id!==n[d].route.id:!0,h=(m,d)=>n[d].pathname!==m.pathname||n[d].route.path?.endsWith("*")&&n[d].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,d)=>f(m,d)||h(m,d)):c==="data"?t.filter((m,d)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||h(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function MM(r,t,{includeHydrateFallback:n}={}){return EM(r.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function EM(r){return[...new Set(r)]}function TM(r){let t={},n=Object.keys(r).sort();for(let a of n)t[a]=r[a];return t}function AM(r,t){let n=new Set;return new Set(t),r.reduce((a,o)=>{let c=JSON.stringify(TM(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function ix(){let r=rt.useContext(qr);return Ep(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function wM(){let r=rt.useContext(Su);return Ep(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Tp=rt.createContext(void 0);Tp.displayName="FrameworkContext";function ax(){let r=rt.useContext(Tp);return Ep(r,"You must render this element inside a <HydratedRouter> element"),r}function RM(r,t){let n=rt.useContext(Tp),[a,o]=rt.useState(!1),[c,f]=rt.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=t,x=rt.useRef(null);rt.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let E=v=>{v.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),rt.useEffect(()=>{if(a){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[a]);let S=()=>{o(!0)},M=()=>{o(!1),f(!1)};return n?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Xo(h,S),onBlur:Xo(m,M),onMouseEnter:Xo(d,S),onMouseLeave:Xo(g,M),onTouchStart:Xo(_,S)}]:[!1,x,{}]}function Xo(r,t){return n=>{r&&r(n),n.defaultPrevented||t(n)}}function CM({page:r,...t}){let{router:n}=ix(),a=rt.useMemo(()=>Xv(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?rt.createElement(UM,{page:r,matches:a,...t}):null}function DM(r){let{manifest:t,routeModules:n}=ax(),[a,o]=rt.useState([]);return rt.useEffect(()=>{let c=!1;return bM(r,t,n).then(f=>{c||o(f)}),()=>{c=!0}},[r,t,n]),a}function UM({page:r,matches:t,...n}){let a=Ps(),{manifest:o,routeModules:c}=ax(),{basename:f}=ix(),{loaderData:h,matches:m}=wM(),d=rt.useMemo(()=>C_(r,t,m,o,a,"data"),[r,t,m,o,a]),g=rt.useMemo(()=>C_(r,t,m,o,a,"assets"),[r,t,m,o,a]),_=rt.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let M=new Set,E=!1;if(t.forEach(v=>{let L=o.routes[v.route.id];!L||!L.hasLoader||(!d.some(U=>U.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||L.hasClientLoader?E=!0:M.add(v.route.id))}),M.size===0)return[];let y=xM(r,f,"data");return E&&M.size>0&&y.searchParams.set("_routes",t.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,h,a,o,d,t,r,c]),x=rt.useMemo(()=>MM(g,o),[g,o]),S=DM(g);return rt.createElement(rt.Fragment,null,_.map(M=>rt.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),x.map(M=>rt.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),S.map(({key:M,link:E})=>rt.createElement("link",{key:M,nonce:n.nonce,...E})))}function NM(...r){return t=>{r.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sx&&(window.__reactRouterVersion="7.9.2")}catch{}function LM({basename:r,children:t,window:n}){let a=rt.useRef();a.current==null&&(a.current=Sb({window:n,v5Compat:!0}));let o=a.current,[c,f]=rt.useState({action:o.action,location:o.location}),h=rt.useCallback(m=>{rt.startTransition(()=>f(m))},[f]);return rt.useLayoutEffect(()=>o.listen(h),[o,h]),rt.createElement(cM,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:o})}var rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ox=rt.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:h,target:m,to:d,preventScrollReset:g,viewTransition:_,...x},S){let{basename:M}=rt.useContext(Xi),E=typeof d=="string"&&rx.test(d),y,v=!1;if(typeof d=="string"&&E&&(y=d,sx))try{let D=new URL(window.location.href),N=d.startsWith("//")?new URL(D.protocol+d):new URL(d),G=va(N.pathname,M);N.origin===D.origin&&G!=null?d=G+N.search+N.hash:v=!0}catch{Gi(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Yb(d,{relative:o}),[U,R,z]=RM(a,x),H=BM(d,{replace:f,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:_});function V(D){t&&t(D),D.defaultPrevented||H(D)}let q=rt.createElement("a",{...x,...z,href:y||L,onClick:v||c?t:V,ref:NM(S,R),target:m,"data-discover":!E&&n==="render"?"true":void 0});return U&&!E?rt.createElement(rt.Fragment,null,q,rt.createElement(CM,{page:L})):q});ox.displayName="Link";var PM=rt.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:h,children:m,...d},g){let _=dl(f,{relative:d.relative}),x=Ps(),S=rt.useContext(Su),{navigator:M,basename:E}=rt.useContext(Xi),y=S!=null&&GM(_)&&h===!0,v=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,L=x.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(L=L.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&E&&(U=va(U,E)||U);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=L===v||!o&&L.startsWith(v)&&L.charAt(R)==="/",H=U!=null&&(U===v||!o&&U.startsWith(v)&&U.charAt(v.length)==="/"),V={isActive:z,isPending:H,isTransitioning:y},q=z?t:void 0,D;typeof a=="function"?D=a(V):D=[a,z?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(V):c;return rt.createElement(ox,{...d,"aria-current":q,className:D,ref:g,style:N,to:f,viewTransition:h},typeof m=="function"?m(V):m)});PM.displayName="NavLink";var OM=rt.forwardRef(({discover:r="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:c,method:f=au,action:h,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,...x},S)=>{let M=HM(),E=VM(h,{relative:d}),y=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&rx.test(h),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let R=U.nativeEvent.submitter,z=R?.getAttribute("formmethod")||f;M(R||U.currentTarget,{fetcherKey:t,method:z,navigate:n,replace:o,state:c,relative:d,preventScrollReset:g,viewTransition:_})};return rt.createElement("form",{ref:S,method:y,action:E,onSubmit:a?m:L,...x,"data-discover":!v&&r==="render"?"true":void 0})});OM.displayName="Form";function zM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lx(r){let t=rt.useContext(qr);return $e(t,zM(r)),t}function BM(r,{target:t,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let h=Sp(),m=Ps(),d=dl(r,{relative:c});return rt.useCallback(g=>{if(mM(g,t)){g.preventDefault();let _=n!==void 0?n:il(m)===il(d);h(r,{replace:_,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[m,h,d,n,a,t,r,o,c,f])}var IM=0,FM=()=>`__${String(++IM)}__`;function HM(){let{router:r}=lx("useSubmit"),{basename:t}=rt.useContext(Xi),n=sM();return rt.useCallback(async(a,o={})=>{let{action:c,method:f,encType:h,formData:m,body:d}=vM(a,t);if(o.navigate===!1){let g=o.fetcherKey||FM();await r.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,t,n])}function VM(r,{relative:t}={}){let{basename:n}=rt.useContext(Xi),a=rt.useContext(xa);$e(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...dl(r||".",{relative:t})},f=Ps();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:pa([n,c.pathname])),il(c)}function GM(r,{relative:t}={}){let n=rt.useContext(Qv);$e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=lx("useViewTransitionState"),o=dl(r,{relative:t});if(!n.isTransitioning)return!1;let c=va(n.currentLocation.pathname,a)||n.currentLocation.pathname,f=va(n.nextLocation.pathname,a)||n.nextLocation.pathname;return du(o.pathname,f)!=null||du(o.pathname,c)!=null}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),D_=r=>{const t=jM(r);return t.charAt(0).toUpperCase()+t.slice(1)},cx=(...r)=>r.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),XM=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=rt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:f,...h},m)=>rt.createElement("svg",{ref:m,...WM,width:t,height:t,stroke:r,strokeWidth:a?Number(n)*24/Number(t):n,className:cx("lucide",o),...!c&&!XM(h)&&{"aria-hidden":"true"},...h},[...f.map(([d,g])=>rt.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=(r,t)=>{const n=rt.forwardRef(({className:a,...o},c)=>rt.createElement(qM,{ref:c,iconNode:t,className:cx(`lucide-${kM(D_(r))}`,`lucide-${r}`,a),...o}));return n.displayName=D_(r),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ZM=ya("award",YM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],QM=ya("book-open",KM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],$M=ya("briefcase",JM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],eE=ya("code",tE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],iE=ya("house",nE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],sE=ya("mail",aE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],oE=ya("menu",rE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],cE=ya("user",lE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fE=ya("x",uE),hE=()=>{const[r,t]=rt.useState(!1),[n,a]=rt.useState("globetech"),[o,c]=rt.useState(!1),f=[{id:"globetech",label:"Accueil",icon:iE},{id:"about-me",label:"À propos",icon:cE},{id:"skills",label:"Compétences",icon:eE},{id:"projects",label:"Projets",icon:$M},{id:"formations",label:"Formations",icon:QM},{id:"experiences",label:"Expériences",icon:ZM},{id:"contact",label:"Contact",icon:sE}];rt.useEffect(()=>{const m=()=>{t(window.scrollY>50);const g=f.map(_=>_.id).find(_=>{const x=document.getElementById(_);if(x){const S=x.getBoundingClientRect();return S.top<=100&&S.bottom>=100}return!1});g&&a(g)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const h=m=>{const d=document.getElementById(m);if(d){const x=d.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:x,behavior:"smooth"})}c(!1)};return C.jsxs(C.Fragment,{children:[C.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${r?"bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl":"bg-transparent"}`,children:[C.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:C.jsxs("div",{className:"flex justify-between items-center h-20",children:[C.jsxs("div",{onClick:()=>h("globetech"),className:"flex items-center space-x-3 cursor-pointer group",children:[C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300",children:C.jsx("span",{className:"text-white font-bold text-xl",children:"F"})}),C.jsx("div",{className:"absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"})]}),C.jsxs("div",{className:"hidden sm:block",children:[C.jsx("h2",{className:"text-xl font-bold text-white",children:"Flora"}),C.jsx("p",{className:"text-sm text-cyan-400 -mt-1",children:"Dev Full Stack"})]})]}),C.jsx("nav",{className:"hidden md:flex items-center space-x-1",children:f.map(m=>{const d=m.icon,g=n===m.id;return C.jsxs("button",{onClick:()=>h(m.id),className:`relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${g?"text-cyan-400 bg-cyan-500/10 shadow-lg":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:[C.jsx(d,{size:16,className:`transition-transform duration-300 ${g?"scale-110":"group-hover:scale-110"}`}),C.jsx("span",{children:m.label}),g&&C.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"})]},m.id)})}),C.jsx("button",{onClick:()=>c(!o),className:"md:hidden relative w-10 h-10 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors duration-200",children:o?C.jsx(fE,{size:20}):C.jsx(oE,{size:20})})]})}),C.jsx("div",{className:`md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-xl border-b border-gray-700/50 transition-all duration-300 ${o?"opacity-100 visible":"opacity-0 invisible"}`,children:C.jsx("div",{className:"max-w-7xl mx-auto px-4 py-4",children:C.jsx("nav",{className:"space-y-2",children:f.map(m=>{const d=m.icon,g=n===m.id;return C.jsxs("button",{onClick:()=>h(m.id),className:`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${g?"text-cyan-400 bg-cyan-500/10":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:[C.jsx(d,{size:18}),C.jsx("span",{className:"font-medium",children:m.label})]},m.id)})})})})]}),r&&C.jsx("button",{onClick:()=>h("globetech"),className:"fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transform hover:scale-110 transition-all duration-300 z-40",children:"↑"})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="180",Ir={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,U_=1,pE=2,ux=1,mE=2,ha=3,es=0,Qn=1,Ii=2,ma=0,Us=1,al=2,N_=3,L_=4,gE=5,ws=100,_E=101,vE=102,xE=103,yE=104,SE=200,bE=201,ME=202,EE=203,Ad=204,wd=205,TE=206,AE=207,wE=208,RE=209,CE=210,DE=211,UE=212,NE=213,LE=214,Rd=0,Cd=1,Dd=2,Hr=3,Ud=4,Nd=5,Ld=6,Pd=7,fx=0,PE=1,OE=2,$a=0,zE=1,BE=2,IE=3,FE=4,HE=5,VE=6,GE=7,hx=300,Vr=301,Gr=302,Od=303,zd=304,Mu=306,Bd=1e3,Cs=1001,Id=1002,Ri=1003,kE=1004,Cc=1005,Hi=1006,Hh=1007,Ds=1008,ki=1009,dx=1010,px=1011,sl=1012,wp=1013,Ns=1014,da=1015,ga=1016,Rp=1017,Cp=1018,rl=1020,mx=35902,gx=35899,_x=1021,vx=1022,wi=1023,ol=1026,ll=1027,xx=1028,Dp=1029,yx=1030,Up=1031,Np=1033,ru=33776,ou=33777,lu=33778,cu=33779,Fd=35840,Hd=35841,Vd=35842,Gd=35843,kd=36196,jd=37492,Xd=37496,Wd=37808,qd=37809,Yd=37810,Zd=37811,Kd=37812,Qd=37813,Jd=37814,$d=37815,tp=37816,ep=37817,np=37818,ip=37819,ap=37820,sp=37821,rp=36492,op=36494,lp=36495,cp=36283,up=36284,fp=36285,hp=36286,jE=3200,XE=3201,Sx=0,WE=1,Ja="",_i="srgb",kr="srgb-linear",pu="linear",Be="srgb",_r=7680,P_=519,qE=512,YE=513,ZE=514,bx=515,KE=516,QE=517,JE=518,$E=519,dp=35044,O_="300 es",Vi=2e3,mu=2001;class Os{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,pp=180/Math.PI;function ts(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function be(r,t,n){return Math.max(t,Math.min(n,r))}function tT(r,t){return(r%t+t)%t}function Vh(r,t,n){return(1-n)*r+n*t}function Fi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const eT={DEG2RAD:uu};class qt{constructor(t=0,n=0){qt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ls{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3];const x=c[f+0],S=c[f+1],M=c[f+2],E=c[f+3];if(h===0){t[n+0]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=S,t[n+2]=M,t[n+3]=E;return}if(_!==E||m!==x||d!==S||g!==M){let y=1-h;const v=m*x+d*S+g*M+_*E,L=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const z=Math.sqrt(U),H=Math.atan2(z,v*L);y=Math.sin(y*H)/z,h=Math.sin(h*H)/z}const R=h*L;if(m=m*y+x*R,d=d*y+S*R,g=g*y+M*R,_=_*y+E*R,y===1-h){const z=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=z,d*=z,g*=z,_*=z}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],d=a[o+2],g=a[o+3],_=c[f],x=c[f+1],S=c[f+2],M=c[f+3];return t[n]=h*M+g*_+m*S-d*x,t[n+1]=m*M+g*x+d*_-h*S,t[n+2]=d*M+g*S+h*x-m*_,t[n+3]=g*M-h*_-m*x-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),x=m(a/2),S=m(o/2),M=m(c/2);switch(f){case"XYZ":this._x=x*g*_+d*S*M,this._y=d*S*_-x*g*M,this._z=d*g*M+x*S*_,this._w=d*g*_-x*S*M;break;case"YXZ":this._x=x*g*_+d*S*M,this._y=d*S*_-x*g*M,this._z=d*g*M-x*S*_,this._w=d*g*_+x*S*M;break;case"ZXY":this._x=x*g*_-d*S*M,this._y=d*S*_+x*g*M,this._z=d*g*M+x*S*_,this._w=d*g*_-x*S*M;break;case"ZYX":this._x=x*g*_-d*S*M,this._y=d*S*_+x*g*M,this._z=d*g*M-x*S*_,this._w=d*g*_+x*S*M;break;case"YZX":this._x=x*g*_+d*S*M,this._y=d*S*_+x*g*M,this._z=d*g*M-x*S*_,this._w=d*g*_-x*S*M;break;case"XZY":this._x=x*g*_-d*S*M,this._y=d*S*_-x*g*M,this._z=d*g*M+x*S*_,this._w=d*g*_+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],x=a+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-d)*S,this._z=(f-o)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+d)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(c-d)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(f-o)/S,this._x=(c+d)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+f*h+o*d-c*m,this._y=o*g+f*m+c*h-a*d,this._z=c*g+f*d+a*m-o*h,this._w=f*g-a*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*a+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),_=Math.sin((1-n)*g)/d,x=Math.sin(n*g)/d;return this._w=f*_+this._w*x,this._x=a*_+this._x*x,this._y=o*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(z_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(z_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,d=2*(f*o-h*a),g=2*(h*n-c*o),_=2*(c*a-f*n);return this.x=n+m*d+f*_-h*g,this.y=a+m*g+h*d-c*_,this.z=o+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Gh.copy(this).projectOnVector(t),this.sub(Gh)}reflect(t){return this.sub(Gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gh=new j,z_=new Ls;class he{constructor(t,n,a,o,c,f,h,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,d)}set(t,n,a,o,c,f,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],d=a[1],g=a[4],_=a[7],x=a[2],S=a[5],M=a[8],E=o[0],y=o[3],v=o[6],L=o[1],U=o[4],R=o[7],z=o[2],H=o[5],V=o[8];return c[0]=f*E+h*L+m*z,c[3]=f*y+h*U+m*H,c[6]=f*v+h*R+m*V,c[1]=d*E+g*L+_*z,c[4]=d*y+g*U+_*H,c[7]=d*v+g*R+_*V,c[2]=x*E+S*L+M*z,c[5]=x*y+S*U+M*H,c[8]=x*v+S*R+M*V,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*f*g-n*h*d-a*c*g+a*h*m+o*c*d-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*f-h*d,x=h*m-g*c,S=d*c-f*m,M=n*_+a*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=_*E,t[1]=(o*d-g*a)*E,t[2]=(h*a-o*f)*E,t[3]=x*E,t[4]=(g*n-o*m)*E,t[5]=(o*c-h*n)*E,t[6]=S*E,t[7]=(a*m-d*n)*E,t[8]=(f*n-a*c)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*f+d*h)+f+t,-o*d,o*m,-o*(-d*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(kh.makeScale(t,n)),this}rotate(t){return this.premultiply(kh.makeRotation(-t)),this}translate(t,n){return this.premultiply(kh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kh=new he;function Mx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nT(){const r=cl("canvas");return r.style.display="block",r}const B_={};function ul(r){r in B_||(B_[r]=!0,console.warn(r))}function iT(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const I_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aT(){const r={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Be&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ja?pu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ul("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ul("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[kr]:{primaries:t,whitePoint:a,transfer:pu,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:a,transfer:Be,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const Re=aT();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class sT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{vr===void 0&&(vr=cl("canvas")),vr.width=t.width,vr.height=t.height;const o=vr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=vr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_a(n[a]/255)*255):n[a]=_a(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rT=0;class Lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(jh(o[f].image)):c.push(jh(o[f]))}else c=jh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function jh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oT=0;const Xh=new j;class zn extends Os{constructor(t=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,a=Cs,o=Cs,c=Hi,f=Ds,h=wi,m=ki,d=zn.DEFAULT_ANISOTROPY,g=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=ts(),this.name="",this.source=new Lp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bd:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bd:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=hx;zn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,n=0,a=0,o=1){He.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],x=m[1],S=m[5],M=m[9],E=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(d+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,R=(S+1)/2,z=(v+1)/2,H=(g+x)/4,V=(_+E)/4,q=(M+y)/4;return U>R&&U>z?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=H/a,c=V/a):R>z?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=H/o,c=q/o):z<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(z),a=V/c,o=q/c),this.set(a,o,c,n),this}let L=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(_-E)/L,this.z=(x-g)/L,this.w=Math.acos((d+S+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lT extends Os{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new zn(o);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Lp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends lT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Ex extends zn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cT extends zn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Dc.copy(a.boundingBox)),Dc.applyMatrix4(t.matrixWorld),this.union(Dc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Uc.subVectors(this.max,Wo),xr.subVectors(t.a,Wo),yr.subVectors(t.b,Wo),Sr.subVectors(t.c,Wo),Xa.subVectors(yr,xr),Wa.subVectors(Sr,yr),ys.subVectors(xr,Sr);let n=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-ys.z,ys.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,ys.z,0,-ys.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-ys.y,ys.x,0];return!Wh(n,xr,yr,Sr,Uc)||(n=[1,0,0,0,1,0,0,0,1],!Wh(n,xr,yr,Sr,Uc))?!1:(Nc.crossVectors(Xa,Wa),n=[Nc.x,Nc.y,Nc.z],Wh(n,xr,yr,Sr,Uc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new j,new j,new j,new j,new j,new j,new j,new j],Ei=new j,Dc=new pl,xr=new j,yr=new j,Sr=new j,Xa=new j,Wa=new j,ys=new j,Wo=new j,Uc=new j,Nc=new j,Ss=new j;function Wh(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){Ss.fromArray(r,c);const h=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),m=t.dot(Ss),d=n.dot(Ss),g=a.dot(Ss);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const uT=new pl,qo=new j,qh=new j;class ml{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):uT.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(qo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(qh)),this.expandByPoint(qo.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new j,Yh=new j,Lc=new j,qa=new j,Zh=new j,Pc=new j,Kh=new j;class Eu{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Yh.copy(t).add(n).multiplyScalar(.5),Lc.copy(n).sub(t).normalize(),qa.copy(this.origin).sub(Yh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Lc),h=qa.dot(this.direction),m=-qa.dot(Lc),d=qa.lengthSq(),g=Math.abs(1-f*f);let _,x,S,M;if(g>0)if(_=f*m-h,x=f*h-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const E=1/g;_*=E,x*=E,S=_*(_+f*x+2*h)+x*(f*_+x+2*m)+d}else x=c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;else x=-c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;else x<=-M?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+d):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+d):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+d);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yh).addScaledVector(Lc,x),S}intersectSphere(t,n){la.subVectors(t.center,this.origin);const a=la.dot(this.direction),o=la.dot(la)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(a=(t.min.x-x.x)*d,o=(t.max.x-x.x)*d):(a=(t.max.x-x.x)*d,o=(t.min.x-x.x)*d),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,a,o,c){Zh.subVectors(n,t),Pc.subVectors(a,t),Kh.crossVectors(Zh,Pc);let f=this.direction.dot(Kh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;qa.subVectors(this.origin,t);const m=h*this.direction.dot(Pc.crossVectors(qa,Pc));if(m<0)return null;const d=h*this.direction.dot(Zh.cross(qa));if(d<0||m+d>f)return null;const g=-h*qa.dot(Kh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,a,o,c,f,h,m,d,g,_,x,S,M,E,y){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,d,g,_,x,S,M,E,y)}set(t,n,a,o,c,f,h,m,d,g,_,x,S,M,E,y){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=d,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),f=1/br.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,S=f*_,M=h*g,E=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=S+M*d,n[5]=x-E*d,n[9]=-h*m,n[2]=E-x*d,n[6]=M+S*d,n[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,M=d*g,E=d*_;n[0]=x+E*h,n[4]=M*h-S,n[8]=f*d,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=S*h-M,n[6]=E+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,M=d*g,E=d*_;n[0]=x-E*h,n[4]=-f*_,n[8]=M+S*h,n[1]=S+M*h,n[5]=f*g,n[9]=E-x*h,n[2]=-f*d,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*_,M=h*g,E=h*_;n[0]=m*g,n[4]=M*d-S,n[8]=x*d+E,n[1]=m*_,n[5]=E*d+x,n[9]=S*d-M,n[2]=-d,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*d,M=h*m,E=h*d;n[0]=m*g,n[4]=E-x*_,n[8]=M*_+S,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-d*g,n[6]=S*_+M,n[10]=x-E*_}else if(t.order==="XZY"){const x=f*m,S=f*d,M=h*m,E=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=x*_+E,n[5]=f*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=h*g,n[10]=E*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fT,t,hT)}lookAt(t,n,a){const o=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Ya.crossVectors(a,si),Ya.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ya.crossVectors(a,si)),Ya.normalize(),Oc.crossVectors(si,Ya),o[0]=Ya.x,o[4]=Oc.x,o[8]=si.x,o[1]=Ya.y,o[5]=Oc.y,o[9]=si.y,o[2]=Ya.z,o[6]=Oc.z,o[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],d=a[12],g=a[1],_=a[5],x=a[9],S=a[13],M=a[2],E=a[6],y=a[10],v=a[14],L=a[3],U=a[7],R=a[11],z=a[15],H=o[0],V=o[4],q=o[8],D=o[12],N=o[1],G=o[5],it=o[9],ct=o[13],gt=o[2],ft=o[6],I=o[10],Q=o[14],Z=o[3],St=o[7],P=o[11],tt=o[15];return c[0]=f*H+h*N+m*gt+d*Z,c[4]=f*V+h*G+m*ft+d*St,c[8]=f*q+h*it+m*I+d*P,c[12]=f*D+h*ct+m*Q+d*tt,c[1]=g*H+_*N+x*gt+S*Z,c[5]=g*V+_*G+x*ft+S*St,c[9]=g*q+_*it+x*I+S*P,c[13]=g*D+_*ct+x*Q+S*tt,c[2]=M*H+E*N+y*gt+v*Z,c[6]=M*V+E*G+y*ft+v*St,c[10]=M*q+E*it+y*I+v*P,c[14]=M*D+E*ct+y*Q+v*tt,c[3]=L*H+U*N+R*gt+z*Z,c[7]=L*V+U*G+R*ft+z*St,c[11]=L*q+U*it+R*I+z*P,c[15]=L*D+U*ct+R*Q+z*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],x=t[10],S=t[14],M=t[3],E=t[7],y=t[11],v=t[15];return M*(+c*m*_-o*d*_-c*h*x+a*d*x+o*h*S-a*m*S)+E*(+n*m*S-n*d*x+c*f*x-o*f*S+o*d*g-c*m*g)+y*(+n*d*_-n*h*S-c*f*_+a*f*S+c*h*g-a*d*g)+v*(-o*h*g-n*m*_+n*h*x+o*f*_-a*f*x+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],x=t[10],S=t[11],M=t[12],E=t[13],y=t[14],v=t[15],L=_*y*d-E*x*d+E*m*S-h*y*S-_*m*v+h*x*v,U=M*x*d-g*y*d-M*m*S+f*y*S+g*m*v-f*x*v,R=g*E*d-M*_*d+M*h*S-f*E*S-g*h*v+f*_*v,z=M*_*m-g*E*m-M*h*x+f*E*x+g*h*y-f*_*y,H=n*L+a*U+o*R+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/H;return t[0]=L*V,t[1]=(E*x*c-_*y*c-E*o*S+a*y*S+_*o*v-a*x*v)*V,t[2]=(h*y*c-E*m*c+E*o*d-a*y*d-h*o*v+a*m*v)*V,t[3]=(_*m*c-h*x*c-_*o*d+a*x*d+h*o*S-a*m*S)*V,t[4]=U*V,t[5]=(g*y*c-M*x*c+M*o*S-n*y*S-g*o*v+n*x*v)*V,t[6]=(M*m*c-f*y*c-M*o*d+n*y*d+f*o*v-n*m*v)*V,t[7]=(f*x*c-g*m*c+g*o*d-n*x*d-f*o*S+n*m*S)*V,t[8]=R*V,t[9]=(M*_*c-g*E*c-M*a*S+n*E*S+g*a*v-n*_*v)*V,t[10]=(f*E*c-M*h*c+M*a*d-n*E*d-f*a*v+n*h*v)*V,t[11]=(g*h*c-f*_*c-g*a*d+n*_*d+f*a*S-n*h*S)*V,t[12]=z*V,t[13]=(g*E*o-M*_*o+M*a*x-n*E*x-g*a*y+n*_*y)*V,t[14]=(M*h*o-f*E*o-M*a*m+n*E*m+f*a*y-n*h*y)*V,t[15]=(f*_*o-g*h*o+g*a*m-n*_*m-f*a*x+n*h*x)*V,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,d=c*f,g=c*h;return this.set(d*f+a,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+a,g*m-o*f,0,d*m-o*h,g*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,d=c+c,g=f+f,_=h+h,x=c*d,S=c*g,M=c*_,E=f*g,y=f*_,v=h*_,L=m*d,U=m*g,R=m*_,z=a.x,H=a.y,V=a.z;return o[0]=(1-(E+v))*z,o[1]=(S+R)*z,o[2]=(M-U)*z,o[3]=0,o[4]=(S-R)*H,o[5]=(1-(x+v))*H,o[6]=(y+L)*H,o[7]=0,o[8]=(M+U)*V,o[9]=(y-L)*V,o[10]=(1-(x+E))*V,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=br.set(o[0],o[1],o[2]).length();const f=br.set(o[4],o[5],o[6]).length(),h=br.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ti.copy(this);const d=1/c,g=1/f,_=1/h;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,n.setFromRotationMatrix(Ti),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=Vi,m=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(a-o),x=(n+t)/(n-t),S=(a+o)/(a-o);let M,E;if(m)M=c/(f-c),E=f*c/(f-c);else if(h===Vi)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===mu)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=Vi,m=!1){const d=this.elements,g=2/(n-t),_=2/(a-o),x=-(n+t)/(n-t),S=-(a+o)/(a-o);let M,E;if(m)M=1/(f-c),E=f/(f-c);else if(h===Vi)M=-2/(f-c),E=-(f+c)/(f-c);else if(h===mu)M=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const br=new j,Ti=new We,fT=new j(0,0,0),hT=new j(1,1,1),Ya=new j,Oc=new j,si=new j,H_=new We,V_=new Ls;class ji{constructor(t=0,n=0,a=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dT=0;const G_=new j,Mr=new Ls,ca=new We,zc=new j,Yo=new j,pT=new j,mT=new Ls,k_=new j(1,0,0),j_=new j(0,1,0),X_=new j(0,0,1),W_={type:"added"},gT={type:"removed"},Er={type:"childadded",child:null},Qh={type:"childremoved",child:null};class Cn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new j,n=new ji,a=new Ls,o=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new We},normalMatrix:{value:new he}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mr.setFromAxisAngle(t,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,n){return Mr.setFromAxisAngle(t,n),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(j_,t)}rotateZ(t){return this.rotateOnAxis(X_,t)}translateOnAxis(t,n){return G_.copy(t).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(j_,t)}translateZ(t){return this.translateOnAxis(X_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?zc.copy(t):zc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Yo,zc,this.up):ca.lookAt(zc,Yo,this.up),this.quaternion.setFromRotationMatrix(ca),o&&(ca.extractRotation(o.matrixWorld),Mr.setFromRotationMatrix(ca),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W_),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gT),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W_),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,pT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,mT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),S=f(t.animations),M=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=o,a;function f(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Cn.DEFAULT_UP=new j(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new j,ua=new j,Jh=new j,fa=new j,Tr=new j,Ar=new j,q_=new j,$h=new j,td=new j,ed=new j,nd=new He,id=new He,ad=new He;class vi{constructor(t=new j,n=new j,a=new j){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ai.subVectors(t,n),o.cross(Ai);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ai.subVectors(o,n),ua.subVectors(a,n),Jh.subVectors(t,n);const f=Ai.dot(Ai),h=Ai.dot(ua),m=Ai.dot(Jh),d=ua.dot(ua),g=ua.dot(Jh),_=f*d-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(d*m-h*g)*x,M=(f*g-h*m)*x;return c.set(1-S-M,M,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(h,fa.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return nd.setScalar(0),id.setScalar(0),ad.setScalar(0),nd.fromBufferAttribute(t,n),id.fromBufferAttribute(t,a),ad.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(nd,c.x),f.addScaledVector(id,c.y),f.addScaledVector(ad,c.z),f}static isFrontFacing(t,n,a,o){return Ai.subVectors(a,n),ua.subVectors(t,n),Ai.cross(ua).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ai.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return vi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;Tr.subVectors(o,a),Ar.subVectors(c,a),$h.subVectors(t,a);const m=Tr.dot($h),d=Ar.dot($h);if(m<=0&&d<=0)return n.copy(a);td.subVectors(t,o);const g=Tr.dot(td),_=Ar.dot(td);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*d;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(Tr,f);ed.subVectors(t,c);const S=Tr.dot(ed),M=Ar.dot(ed);if(M>=0&&S<=M)return n.copy(c);const E=S*d-m*M;if(E<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(a).addScaledVector(Ar,h);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return q_.subVectors(c,o),h=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(q_,h);const v=1/(y+E+x);return f=E*v,h=x*v,n.copy(a).addScaledVector(Tr,f).addScaledVector(Ar,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function sd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ve{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Re.workingColorSpace){if(t=tT(t,1),n=be(n,0,1),a=be(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=sd(f,c,t+1/3),this.g=sd(f,c,t),this.b=sd(f,c,t-1/3)}return Re.colorSpaceToWorking(this,o),this}setStyle(t,n=_i){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=_i){const a=Ax[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Re.workingToColorSpace(On.copy(this),t),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),n);const a=On.r,o=On.g,c=On.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,d;const g=(h+f)/2;if(h===f)m=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=_i){Re.workingToColorSpace(On.copy(this),t);const n=On.r,a=On.g,o=On.b;return t!==_i?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+n,Za.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Za),t.getHSL(Bc);const a=Vh(Za.h,Bc.h,n),o=Vh(Za.s,Bc.s,n),c=Vh(Za.l,Bc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ve;ve.NAMES=Ax;let _T=0;class ns extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Us,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=wd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(a.blending=this.blending),this.side!==es&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ad&&(a.blendSrc=this.blendSrc),this.blendDst!==wd&&(a.blendDst=this.blendDst),this.blendEquation!==ws&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tu extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new j,Ic=new qt;let vT=0;class li{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=dp,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(t),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ie(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array),o=Ie(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array),o=Ie(o,this.array),c=Ie(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dp&&(t.usage=this.usage),t}}class wx extends li{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Rx extends li{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Mn extends li{constructor(t,n,a){super(new Float32Array(t),n,a)}}let xT=0;const gi=new We,rd=new Cn,wr=new j,ri=new pl,Zo=new pl,bn=new j;class Bn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mx(t)?Rx:wx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,a){return gi.makeTranslation(t,n,a),this.applyMatrix4(gi),this}scale(t,n,a){return gi.makeScale(t,n,a),this.applyMatrix4(gi),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Mn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ri.min,Zo.min),ri.expandByPoint(bn),bn.addVectors(ri.max,Zo.max),ri.expandByPoint(bn)):(ri.expandByPoint(Zo.min),ri.expandByPoint(Zo.max))}ri.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(bn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),m&&(wr.fromBufferAttribute(t,d),bn.add(wr)),o=Math.max(o,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<a.count;q++)h[q]=new j,m[q]=new j;const d=new j,g=new j,_=new j,x=new qt,S=new qt,M=new qt,E=new j,y=new j;function v(q,D,N){d.fromBufferAttribute(a,q),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,N),x.fromBufferAttribute(c,q),S.fromBufferAttribute(c,D),M.fromBufferAttribute(c,N),g.sub(d),_.sub(d),S.sub(x),M.sub(x);const G=1/(S.x*M.y-M.x*S.y);isFinite(G)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(G),h[q].add(E),h[D].add(E),h[N].add(E),m[q].add(y),m[D].add(y),m[N].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,D=L.length;q<D;++q){const N=L[q],G=N.start,it=N.count;for(let ct=G,gt=G+it;ct<gt;ct+=3)v(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const U=new j,R=new j,z=new j,H=new j;function V(q){z.fromBufferAttribute(o,q),H.copy(z);const D=h[q];U.copy(D),U.sub(z.multiplyScalar(z.dot(D))).normalize(),R.crossVectors(H,D);const G=R.dot(m[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,G)}for(let q=0,D=L.length;q<D;++q){const N=L[q],G=N.start,it=N.count;for(let ct=G,gt=G+it;ct<gt;ct+=3)V(t.getX(ct+0)),V(t.getX(ct+1)),V(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const o=new j,c=new j,f=new j,h=new j,m=new j,d=new j,g=new j,_=new j;if(t)for(let x=0,S=t.count;x<S;x+=3){const M=t.getX(x+0),E=t.getX(x+1),y=t.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,M),m.fromBufferAttribute(a,E),d.fromBufferAttribute(a,y),h.add(g),m.add(g),d.add(g),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(E,m.x,m.y,m.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,x=new d.constructor(m.length*g);let S=0,M=0;for(let E=0,y=m.length;E<y;E++){h.isInterleavedBufferAttribute?S=m[E]*h.data.stride+h.offset:S=m[E]*g;for(let v=0;v<g;v++)x[M++]=d[S++]}return new li(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const x=d[g],S=t(x,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,x=d.length;_<x;_++){const S=d[_];g.push(S.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new We,bs=new Eu,Fc=new ml,Z_=new j,Hc=new j,Vc=new j,Gc=new j,od=new j,kc=new j,K_=new j,jc=new j;class oi extends Cn{constructor(t=new Bn,n=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){kc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(od.fromBufferAttribute(_,t),f?kc.addScaledVector(od,g):kc.addScaledVector(od.sub(n),g))}n.add(kc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(Fc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Fc,Z_)===null||bs.origin.distanceToSquared(Z_)>(t.far-t.near)**2))&&(Y_.copy(c).invert(),bs.copy(t.ray).applyMatrix4(Y_),!(a.boundingBox!==null&&bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,bs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=f[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,z=U;R<z;R+=3){const H=h.getX(R),V=h.getX(R+1),q=h.getX(R+2);o=Xc(this,v,t,a,d,g,_,H,V,q),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=h.getX(y),U=h.getX(y+1),R=h.getX(y+2);o=Xc(this,f,t,a,d,g,_,L,U,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=f[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,z=U;R<z;R+=3){const H=R,V=R+1,q=R+2;o=Xc(this,v,t,a,d,g,_,H,V,q),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(m.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=y,U=y+1,R=y+2;o=Xc(this,f,t,a,d,g,_,L,U,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function yT(r,t,n,a,o,c,f,h){let m;if(t.side===Qn?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===es,h),m===null)return null;jc.copy(h),jc.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(jc);return d<n.near||d>n.far?null:{distance:d,point:jc.clone(),object:r}}function Xc(r,t,n,a,o,c,f,h,m,d){r.getVertexPosition(h,Hc),r.getVertexPosition(m,Vc),r.getVertexPosition(d,Gc);const g=yT(r,t,n,a,Hc,Vc,Gc,K_);if(g){const _=new j;vi.getBarycoord(K_,Hc,Vc,Gc,_),o&&(g.uv=vi.getInterpolatedAttribute(o,h,m,d,_,new qt)),c&&(g.uv1=vi.getInterpolatedAttribute(c,h,m,d,_,new qt)),f&&(g.normal=vi.getInterpolatedAttribute(f,h,m,d,_,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:d,normal:new j,materialIndex:0};vi.getNormal(Hc,Vc,Gc,x.normal),g.face=x,g.barycoord=_}return g}class gl extends Bn{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let x=0,S=0;M("z","y","x",-1,-1,a,n,t,f,c,0),M("z","y","x",1,-1,a,n,-t,f,c,1),M("x","z","y",1,1,t,a,n,o,f,2),M("x","z","y",1,-1,t,a,-n,o,f,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Mn(d,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(_,2));function M(E,y,v,L,U,R,z,H,V,q,D){const N=R/V,G=z/q,it=R/2,ct=z/2,gt=H/2,ft=V+1,I=q+1;let Q=0,Z=0;const St=new j;for(let P=0;P<I;P++){const tt=P*G-ct;for(let yt=0;yt<ft;yt++){const bt=yt*N-it;St[E]=bt*L,St[y]=tt*U,St[v]=gt,d.push(St.x,St.y,St.z),St[E]=0,St[y]=0,St[v]=H>0?1:-1,g.push(St.x,St.y,St.z),_.push(yt/V),_.push(1-P/q),Q+=1}}for(let P=0;P<q;P++)for(let tt=0;tt<V;tt++){const yt=x+tt+ft*P,bt=x+tt+ft*(P+1),Ut=x+(tt+1)+ft*(P+1),Ft=x+(tt+1)+ft*P;m.push(yt,bt,Ft),m.push(bt,Ut,Ft),Z+=6}h.addGroup(S,Z,D),S+=Z,x+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Gn(r){const t={};for(let n=0;n<r.length;n++){const a=jr(r[n]);for(const o in a)t[o]=a[o]}return t}function ST(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Cx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const gu={clone:jr,merge:Gn};var bT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bT,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=ST(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Dx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new j,Q_=new qt,J_=new qt;class kn extends Dx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=pp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,n){return this.getViewBounds(t,Q_,J_),n.subVectors(J_,Q_)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(uu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/d,o*=f.width/m,a*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Cr=1;class ET extends Cn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new kn(Rr,Cr,t,n);o.layers=this.layers,this.add(o);const c=new kn(Rr,Cr,t,n);c.layers=this.layers,this.add(c);const f=new kn(Rr,Cr,t,n);f.layers=this.layers,this.add(f);const h=new kn(Rr,Cr,t,n);h.layers=this.layers,this.add(h);const m=new kn(Rr,Cr,t,n);m.layers=this.layers,this.add(m);const d=new kn(Rr,Cr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const d of n)this.remove(d);if(t===Vi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===mu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,d,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,x,S),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Ux extends zn{constructor(t=[],n=Vr,a,o,c,f,h,m,d,g){super(t,n,a,o,c,f,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TT extends Ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Ux(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new gl(5,5,5),c=new Kn({name:"CubemapFromEquirect",uniforms:jr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:ma});c.uniforms.tEquirect.value=n;const f=new oi(o,c),h=n.minFilter;return n.minFilter===Ds&&(n.minFilter=Hi),new ET(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}class el extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new el,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new el,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new el,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const E of t.hand.values()){const y=n.getJointPose(E,a),v=this._getHandJoint(d,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,M=.005;d.inputState.pinching&&x>S+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&x<=S-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new el;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Pp extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=dp,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new j;class _u{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Vn.fromBufferAttribute(this,n),Vn.applyMatrix4(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Vn.fromBufferAttribute(this,n),Vn.applyNormalMatrix(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Vn.fromBufferAttribute(this,n),Vn.transformDirection(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Ie(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array),o=Ie(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ie(n,this.array),a=Ie(a,this.array),o=Ie(o,this.array),c=Ie(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new li(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nx extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Dr;const Ko=new j,Ur=new j,Nr=new j,Lr=new qt,Qo=new qt,Lx=new We,Wc=new j,Jo=new j,qc=new j,$_=new qt,cd=new qt,tv=new qt;class RT extends Cn{constructor(t=new Nx){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new wT(n,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new _u(a,3,0,!1)),Dr.setAttribute("uv",new _u(a,2,3,!1))}this.geometry=Dr,this.material=t,this.center=new qt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),Lx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Nr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const f=this.center;Yc(Wc.set(-.5,-.5,0),Nr,f,Ur,o,c),Yc(Jo.set(.5,-.5,0),Nr,f,Ur,o,c),Yc(qc.set(.5,.5,0),Nr,f,Ur,o,c),$_.set(0,0),cd.set(1,0),tv.set(1,1);let h=t.ray.intersectTriangle(Wc,Jo,qc,!1,Ko);if(h===null&&(Yc(Jo.set(-.5,.5,0),Nr,f,Ur,o,c),cd.set(0,1),h=t.ray.intersectTriangle(Wc,qc,Jo,!1,Ko),h===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||n.push({distance:m,point:Ko.clone(),uv:vi.getInterpolation(Ko,Wc,Jo,qc,$_,cd,tv,new qt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yc(r,t,n,a,o,c){Lr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(Qo.x=c*Lr.x-o*Lr.y,Qo.y=o*Lr.x+c*Lr.y):Qo.copy(Lr),r.copy(t),r.x+=Qo.x,r.y+=Qo.y,r.applyMatrix4(Lx)}const ud=new j,CT=new j,DT=new he;class Qa{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=ud.subVectors(a,n).cross(CT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(ud),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||DT.getNormalMatrix(t),o=this.coplanarPoint(ud).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new ml,UT=new qt(.5,.5),Zc=new j;class Op{constructor(t=new Qa,n=new Qa,a=new Qa,o=new Qa,c=new Qa,f=new Qa){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Vi,a=!1){const o=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],x=c[6],S=c[7],M=c[8],E=c[9],y=c[10],v=c[11],L=c[12],U=c[13],R=c[14],z=c[15];if(o[0].setComponents(d-f,S-g,v-M,z-L).normalize(),o[1].setComponents(d+f,S+g,v+M,z+L).normalize(),o[2].setComponents(d+h,S+_,v+E,z+U).normalize(),o[3].setComponents(d-h,S-_,v-E,z-U).normalize(),a)o[4].setComponents(m,x,y,R).normalize(),o[5].setComponents(d-m,S-x,v-y,z-R).normalize();else if(o[4].setComponents(d-m,S-x,v-y,z-R).normalize(),n===Vi)o[5].setComponents(d+m,S+x,v+y,z+R).normalize();else if(n===mu)o[5].setComponents(m,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const n=UT.distanceTo(t.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Zc.x=o.normal.x>0?t.max.x:t.min.x,Zc.y=o.normal.y>0?t.max.y:t.min.y,Zc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vu=new j,xu=new j,ev=new We,$o=new Eu,Kc=new ml,fd=new j,nv=new j;class NT extends Cn{constructor(t=new Bn,n=new Px){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)vu.fromBufferAttribute(n,o-1),xu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=vu.distanceTo(xu);t.setAttribute("lineDistance",new Mn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Kc.copy(a.boundingSphere),Kc.applyMatrix4(o),Kc.radius+=c,t.ray.intersectsSphere(Kc)===!1)return;ev.copy(o).invert(),$o.copy(t.ray).applyMatrix4(ev);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const S=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let E=S,y=M-1;E<y;E+=d){const v=g.getX(E),L=g.getX(E+1),U=Qc(this,t,$o,m,v,L,E);U&&n.push(U)}if(this.isLineLoop){const E=g.getX(M-1),y=g.getX(S),v=Qc(this,t,$o,m,E,y,M-1);v&&n.push(v)}}else{const S=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let E=S,y=M-1;E<y;E+=d){const v=Qc(this,t,$o,m,E,E+1,E);v&&n.push(v)}if(this.isLineLoop){const E=Qc(this,t,$o,m,M-1,S,M-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Qc(r,t,n,a,o,c,f){const h=r.geometry.attributes.position;if(vu.fromBufferAttribute(h,o),xu.fromBufferAttribute(h,c),n.distanceSqToSegment(vu,xu,fd,nv)>a)return;fd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(fd);if(!(d<t.near||d>t.far))return{distance:d,point:nv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const iv=new j,av=new j;class LT extends NT{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)iv.fromBufferAttribute(n,o),av.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+iv.distanceTo(av);t.setAttribute("lineDistance",new Mn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mp extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sv=new We,gp=new Eu,Jc=new ml,$c=new j;class rv extends Cn{constructor(t=new Bn,n=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Jc.copy(a.boundingSphere),Jc.applyMatrix4(o),Jc.radius+=c,t.ray.intersectsSphere(Jc)===!1)return;sv.copy(o).invert(),gp.copy(t.ray).applyMatrix4(sv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=a.index,_=a.attributes.position;if(d!==null){const x=Math.max(0,f.start),S=Math.min(d.count,f.start+f.count);for(let M=x,E=S;M<E;M++){const y=d.getX(M);$c.fromBufferAttribute(_,y),ov($c,y,m,o,t,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(_.count,f.start+f.count);for(let M=x,E=S;M<E;M++)$c.fromBufferAttribute(_,M),ov($c,M,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function ov(r,t,n,a,o,c,f){const h=gp.distanceSqToPoint(r);if(h<n){const m=new j;gp.closestPointToPoint(r,m),m.applyMatrix4(a);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class _p extends zn{constructor(t,n,a,o,c,f,h,m,d){super(t,n,a,o,c,f,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ox extends zn{constructor(t,n,a=Ns,o,c,f,h=Ri,m=Ri,d,g=ol,_=1){if(g!==ol&&g!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,o,c,f,h,m,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zx extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Au extends Bn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),d=h+1,g=m+1,_=t/h,x=n/m,S=[],M=[],E=[],y=[];for(let v=0;v<g;v++){const L=v*x-f;for(let U=0;U<d;U++){const R=U*_-c;M.push(R,-L,0),E.push(0,0,1),y.push(U/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const U=L+d*v,R=L+d*(v+1),z=L+1+d*(v+1),H=L+1+d*v;S.push(U,R,H),S.push(R,z,H)}this.setIndex(S),this.setAttribute("position",new Mn(M,3)),this.setAttribute("normal",new Mn(E,3)),this.setAttribute("uv",new Mn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.width,t.height,t.widthSegments,t.heightSegments)}}class yu extends Bn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let d=0;const g=[],_=new j,x=new j,S=[],M=[],E=[],y=[];for(let v=0;v<=a;v++){const L=[],U=v/a;let R=0;v===0&&f===0?R=.5/n:v===a&&m===Math.PI&&(R=-.5/n);for(let z=0;z<=n;z++){const H=z/n;_.x=-t*Math.cos(o+H*c)*Math.sin(f+U*h),_.y=t*Math.cos(f+U*h),_.z=t*Math.sin(o+H*c)*Math.sin(f+U*h),M.push(_.x,_.y,_.z),x.copy(_).normalize(),E.push(x.x,x.y,x.z),y.push(H+R,1-U),L.push(d++)}g.push(L)}for(let v=0;v<a;v++)for(let L=0;L<n;L++){const U=g[v][L+1],R=g[v][L],z=g[v+1][L],H=g[v+1][L+1];(v!==0||f>0)&&S.push(U,R,H),(v!==a-1||m<Math.PI)&&S.push(R,z,H)}this.setIndex(S),this.setAttribute("position",new Mn(M,3)),this.setAttribute("normal",new Mn(E,3)),this.setAttribute("uv",new Mn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wu extends Bn{constructor(t=1,n=.4,a=64,o=8,c=2,f=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:n,tubularSegments:a,radialSegments:o,p:c,q:f},a=Math.floor(a),o=Math.floor(o);const h=[],m=[],d=[],g=[],_=new j,x=new j,S=new j,M=new j,E=new j,y=new j,v=new j;for(let U=0;U<=a;++U){const R=U/a*c*Math.PI*2;L(R,c,f,t,S),L(R+.01,c,f,t,M),y.subVectors(M,S),v.addVectors(M,S),E.crossVectors(y,v),v.crossVectors(E,y),E.normalize(),v.normalize();for(let z=0;z<=o;++z){const H=z/o*Math.PI*2,V=-n*Math.cos(H),q=n*Math.sin(H);_.x=S.x+(V*v.x+q*E.x),_.y=S.y+(V*v.y+q*E.y),_.z=S.z+(V*v.z+q*E.z),m.push(_.x,_.y,_.z),x.subVectors(_,S).normalize(),d.push(x.x,x.y,x.z),g.push(U/a),g.push(z/o)}}for(let U=1;U<=a;U++)for(let R=1;R<=o;R++){const z=(o+1)*(U-1)+(R-1),H=(o+1)*U+(R-1),V=(o+1)*U+R,q=(o+1)*(U-1)+R;h.push(z,H,q),h.push(H,V,q)}this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(g,2));function L(U,R,z,H,V){const q=Math.cos(U),D=Math.sin(U),N=z/R*U,G=Math.cos(N);V.x=H*(2+G)*.5*q,V.y=H*(2+G)*D*.5,V.z=H*Math.sin(N)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class PT extends Bn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],a=new Set,o=new j,c=new j;if(t.index!==null){const f=t.attributes.position,h=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let d=0,g=m.length;d<g;++d){const _=m[d],x=_.start,S=_.count;for(let M=x,E=x+S;M<E;M+=3)for(let y=0;y<3;y++){const v=h.getX(M+y),L=h.getX(M+(y+1)%3);o.fromBufferAttribute(f,v),c.fromBufferAttribute(f,L),lv(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}}else{const f=t.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let d=0;d<3;d++){const g=3*h+d,_=3*h+(d+1)%3;o.fromBufferAttribute(f,g),c.fromBufferAttribute(f,_),lv(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new Mn(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function lv(r,t,n){const a=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}class Bx extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sx,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OT extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zT extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class BT{constructor(t,n,a){const o=this;let c=!1,f=0,h=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=d.length;_<x;_+=2){const S=d[_],M=d[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const IT=new BT;class zp{constructor(t){this.manager=t!==void 0?t:IT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}zp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pr=new WeakMap;class FT extends zp{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=hd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0);else{let _=Pr.get(f);_===void 0&&(_=[],Pr.set(f,_)),_.push({onLoad:n,onError:o})}return f}const h=cl("img");function m(){g(),n&&n(this);const _=Pr.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onLoad&&S.onLoad(this)}Pr.delete(this),c.manager.itemEnd(t)}function d(_){g(),o&&o(_),hd.remove(`image:${t}`);const x=Pr.get(this)||[];for(let S=0;S<x.length;S++){const M=x[S];M.onError&&M.onError(_)}Pr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),hd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class cv extends zp{constructor(t){super(t)}load(t,n,a,o){const c=new zn,f=new FT(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Ix extends Cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const dd=new We,uv=new j,fv=new j;class HT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),n.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hv=new We,tl=new j,pd=new j;class VT extends HT{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(t.matrixWorld),a.position.copy(tl),pd.copy(a.position),pd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(pd),a.updateMatrixWorld(),o.makeTranslation(-tl.x,-tl.y,-tl.z),hv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hv,a.coordinateSystem,a.reversedDepth)}}class Bp extends Ix{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new VT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fx extends Dx{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ip extends Ix{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GT extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ru{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class dv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(be(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kT extends Os{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function pv(r,t,n,a){const o=jT(a);switch(n){case _x:return r*t;case xx:return r*t/o.components*o.byteLength;case Dp:return r*t/o.components*o.byteLength;case yx:return r*t*2/o.components*o.byteLength;case Up:return r*t*2/o.components*o.byteLength;case vx:return r*t*3/o.components*o.byteLength;case wi:return r*t*4/o.components*o.byteLength;case Np:return r*t*4/o.components*o.byteLength;case ru:case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:case Gd:return Math.max(r,16)*Math.max(t,8)/4;case Fd:case Vd:return Math.max(r,8)*Math.max(t,8)/2;case kd:case jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case rp:case op:case lp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jT(r){switch(r){case ki:case dx:return{byteLength:1,components:1};case sl:case px:case ga:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Ns:case wp:case da:return{byteLength:4,components:1};case mx:case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hx(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function XT(r){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=r.SHORT;else if(d instanceof Uint32Array)S=r.UNSIGNED_INT;else if(d instanceof Int32Array)S=r.INT;else if(d instanceof Int8Array)S=r.BYTE;else if(d instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<_.length;S++){const M=_[x],E=_[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,_[x]=E)}_.length=x+1;for(let S=0,M=_.length;S<M;S++){const E=_[S];r.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:f}}var WT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:WT,alphahash_pars_fragment:qT,alphamap_fragment:YT,alphamap_pars_fragment:ZT,alphatest_fragment:KT,alphatest_pars_fragment:QT,aomap_fragment:JT,aomap_pars_fragment:$T,batching_pars_vertex:t1,batching_vertex:e1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:a1,iridescence_fragment:s1,bumpmap_pars_fragment:r1,clipping_planes_fragment:o1,clipping_planes_pars_fragment:l1,clipping_planes_pars_vertex:c1,clipping_planes_vertex:u1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:d1,color_vertex:p1,common:m1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:_1,displacementmap_pars_vertex:v1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:S1,colorspace_fragment:b1,colorspace_pars_fragment:M1,envmap_fragment:E1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:I1,envmap_vertex:R1,fog_vertex:C1,fog_pars_vertex:D1,fog_fragment:U1,fog_pars_fragment:N1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:P1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:z1,lights_pars_begin:B1,lights_toon_fragment:F1,lights_toon_pars_fragment:H1,lights_phong_fragment:V1,lights_phong_pars_fragment:G1,lights_physical_fragment:k1,lights_physical_pars_fragment:j1,lights_fragment_begin:X1,lights_fragment_maps:W1,lights_fragment_end:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:K1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:$1,map_particle_fragment:tA,map_particle_pars_fragment:eA,metalnessmap_fragment:nA,metalnessmap_pars_fragment:iA,morphinstance_vertex:aA,morphcolor_vertex:sA,morphnormal_vertex:rA,morphtarget_pars_vertex:oA,morphtarget_vertex:lA,normal_fragment_begin:cA,normal_fragment_maps:uA,normal_pars_fragment:fA,normal_pars_vertex:hA,normal_vertex:dA,normalmap_pars_fragment:pA,clearcoat_normal_fragment_begin:mA,clearcoat_normal_fragment_maps:gA,clearcoat_pars_fragment:_A,iridescence_pars_fragment:vA,opaque_fragment:xA,packing:yA,premultiplied_alpha_fragment:SA,project_vertex:bA,dithering_fragment:MA,dithering_pars_fragment:EA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:AA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:RA,shadowmap_vertex:CA,shadowmask_pars_fragment:DA,skinbase_vertex:UA,skinning_pars_vertex:NA,skinning_vertex:LA,skinnormal_vertex:PA,specularmap_fragment:OA,specularmap_pars_fragment:zA,tonemapping_fragment:BA,tonemapping_pars_fragment:IA,transmission_fragment:FA,transmission_pars_fragment:HA,uv_pars_fragment:VA,uv_pars_vertex:GA,uv_vertex:kA,worldpos_vertex:jA,background_vert:XA,background_frag:WA,backgroundCube_vert:qA,backgroundCube_frag:YA,cube_vert:ZA,cube_frag:KA,depth_vert:QA,depth_frag:JA,distanceRGBA_vert:$A,distanceRGBA_frag:tw,equirect_vert:ew,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:aw,meshbasic_vert:sw,meshbasic_frag:rw,meshlambert_vert:ow,meshlambert_frag:lw,meshmatcap_vert:cw,meshmatcap_frag:uw,meshnormal_vert:fw,meshnormal_frag:hw,meshphong_vert:dw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:_w,meshtoon_frag:vw,points_vert:xw,points_frag:yw,shadow_vert:Sw,shadow_frag:bw,sprite_vert:Mw,sprite_frag:Ew},Ot={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Bi={basic:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ve(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([Ot.points,Ot.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([Ot.common,Ot.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([Ot.sprite,Ot.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([Ot.lights,Ot.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Bi.physical={uniforms:Gn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const tu={r:0,b:0,g:0},Es=new ji,Tw=new We;function Aw(r,t,n,a,o,c,f){const h=new ve(0);let m=c===!0?0:1,d,g,_=null,x=0,S=null;function M(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?n:t).get(R)),R}function E(U){let R=!1;const z=M(U);z===null?v(h,m):z&&z.isColor&&(v(z,1),R=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,R){const z=M(R);z&&(z.isCubeTexture||z.mapping===Mu)?(g===void 0&&(g=new oi(new gl(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:jr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,V,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Es.copy(R.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(Es)),g.material.toneMapped=Re.getTransfer(z.colorSpace)!==Be,(_!==z||x!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new oi(new Au(2,2),new Kn({name:"BackgroundMaterial",uniforms:jr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Re.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||S!==r.toneMapping)&&(d.material.needsUpdate=!0,_=z,x=z.version,S=r.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function v(U,R){U.getRGB(tu,Cx(r)),a.buffers.color.setClear(tu.r,tu.g,tu.b,R,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,R=1){h.set(U),m=R,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:E,addToRenderList:y,dispose:L}}function ww(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,f=!1;function h(N,G,it,ct,gt){let ft=!1;const I=_(ct,it,G);c!==I&&(c=I,d(c.object)),ft=S(N,ct,it,gt),ft&&M(N,ct,it,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,R(N,G,it,ct),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return r.createVertexArray()}function d(N){return r.bindVertexArray(N)}function g(N){return r.deleteVertexArray(N)}function _(N,G,it){const ct=it.wireframe===!0;let gt=a[N.id];gt===void 0&&(gt={},a[N.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let I=ft[ct];return I===void 0&&(I=x(m()),ft[ct]=I),I}function x(N){const G=[],it=[],ct=[];for(let gt=0;gt<n;gt++)G[gt]=0,it[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:it,attributeDivisors:ct,object:N,attributes:{},index:null}}function S(N,G,it,ct){const gt=c.attributes,ft=G.attributes;let I=0;const Q=it.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const P=gt[Z];let tt=ft[Z];if(tt===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),P===void 0||P.attribute!==tt||tt&&P.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==ct}function M(N,G,it,ct){const gt={},ft=G.attributes;let I=0;const Q=it.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let P=ft[Z];P===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(P=N.instanceColor));const tt={};tt.attribute=P,P&&P.data&&(tt.data=P.data),gt[Z]=tt,I++}c.attributes=gt,c.attributesNum=I,c.index=ct}function E(){const N=c.newAttributes;for(let G=0,it=N.length;G<it;G++)N[G]=0}function y(N){v(N,0)}function v(N,G){const it=c.newAttributes,ct=c.enabledAttributes,gt=c.attributeDivisors;it[N]=1,ct[N]===0&&(r.enableVertexAttribArray(N),ct[N]=1),gt[N]!==G&&(r.vertexAttribDivisor(N,G),gt[N]=G)}function L(){const N=c.newAttributes,G=c.enabledAttributes;for(let it=0,ct=G.length;it<ct;it++)G[it]!==N[it]&&(r.disableVertexAttribArray(it),G[it]=0)}function U(N,G,it,ct,gt,ft,I){I===!0?r.vertexAttribIPointer(N,G,it,gt,ft):r.vertexAttribPointer(N,G,it,ct,gt,ft)}function R(N,G,it,ct){E();const gt=ct.attributes,ft=it.getAttributes(),I=G.defaultAttributeValues;for(const Q in ft){const Z=ft[Q];if(Z.location>=0){let St=gt[Q];if(St===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),St!==void 0){const P=St.normalized,tt=St.itemSize,yt=t.get(St);if(yt===void 0)continue;const bt=yt.buffer,Ut=yt.type,Ft=yt.bytesPerElement,W=Ut===r.INT||Ut===r.UNSIGNED_INT||St.gpuType===wp;if(St.isInterleavedBufferAttribute){const ht=St.data,Mt=ht.stride,jt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<Z.locationSize;Gt++)v(Z.location+Gt,ht.meshPerAttribute);N.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<Z.locationSize;Gt++)y(Z.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Gt=0;Gt<Z.locationSize;Gt++)U(Z.location+Gt,tt/Z.locationSize,Ut,P,Mt*Ft,(jt+tt/Z.locationSize*Gt)*Ft,W)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)v(Z.location+ht,St.meshPerAttribute);N.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<Z.locationSize;ht++)y(Z.location+ht);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let ht=0;ht<Z.locationSize;ht++)U(Z.location+ht,tt/Z.locationSize,Ut,P,tt*Ft,tt/Z.locationSize*ht*Ft,W)}}else if(I!==void 0){const P=I[Q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Z.location,P);break;case 3:r.vertexAttrib3fv(Z.location,P);break;case 4:r.vertexAttrib4fv(Z.location,P);break;default:r.vertexAttrib1fv(Z.location,P)}}}}L()}function z(){q();for(const N in a){const G=a[N];for(const it in G){const ct=G[it];for(const gt in ct)g(ct[gt].object),delete ct[gt];delete G[it]}delete a[N]}}function H(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const it in G){const ct=G[it];for(const gt in ct)g(ct[gt].object),delete ct[gt];delete G[it]}delete a[N.id]}function V(N){for(const G in a){const it=a[G];if(it[N.id]===void 0)continue;const ct=it[N.id];for(const gt in ct)g(ct[gt].object),delete ct[gt];delete it[N.id]}}function q(){D(),f=!0,c!==o&&(c=o,d(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function Rw(r,t,n){let a;function o(d){a=d}function c(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}function m(d,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<d.length;M++)f(d[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,g,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*x[E];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Cw(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(V){return!(V!==wi&&a.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const q=V===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==ki&&a.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==da&&!q)}function m(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:z,maxSamples:H}}function Dw(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new Qa,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||a!==0||o;return o=x,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,S){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||c&&!y)c?g(null):d();else{const L=c?0:a,U=L*4;let R=v.clippingState||null;m.value=R,R=g(M,x,U,S);for(let z=0;z!==U;++z)R[z]=n[z];v.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,x,S,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=m.value,M!==!0||y===null){const v=S+E*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,R=S;U!==E;++U,R+=4)f.copy(_[U]).applyMatrix4(L,h),f.normal.toArray(y,R),y[R+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function Uw(r){let t=new WeakMap;function n(f,h){return h===Od?f.mapping=Vr:h===zd&&(f.mapping=Gr),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Od||h===zd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const d=new TT(m.height);return d.fromEquirectangularTexture(r,f),t.set(f,d),f.addEventListener("dispose",o),n(d.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Br=4,mv=[.125,.215,.35,.446,.526,.582],Rs=20,md=new Fx,gv=new ve;let gd=null,_d=0,vd=0,xd=!1;const As=(1+Math.sqrt(5))/2,Or=1/As,_v=[new j(-As,Or,0),new j(As,Or,0),new j(-Or,0,As),new j(Or,0,As),new j(0,As,-Or),new j(0,As,Or),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],Nw=new j;class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=Nw}=c;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,t.scissorTest=!1,eu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ga,format:wi,colorSpace:kr,depthBuffer:!1},o=xv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lw(c)),this._blurMaterial=Pw(c,t,n)}return o}_compileMaterial(t){const n=new oi(this._lodPlanes[0],t);this._renderer.compile(n,md)}_sceneToCubeUV(t,n,a,o,c){const m=new kn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(gv),_.toneMapping=$a,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const E=new Tu({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),y=new oi(new gl,E);let v=!1;const L=t.background;L?L.isColor&&(E.color.copy(L),t.background=null,v=!0):(E.color.copy(gv),v=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):R===1?(m.up.set(0,0,d[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const z=this._cubeSize;eu(o,R*z,U>2?z:0,z,z),_.setRenderTarget(o),v&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=x,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Vr||t.mapping===Gr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new oi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;eu(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,md)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=_v[(o-c-1)%_v.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new oi(this._lodPlanes[o],d),x=d.uniforms,S=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Rs-1),E=c/M,y=isFinite(c)?1+Math.floor(g*E):Rs;y>Rs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const v=[];let L=0;for(let V=0;V<Rs;++V){const q=V/E,D=Math.exp(-q*q/2);v.push(D),V===0?L+=D:V<y&&(L+=2*D)}for(let V=0;V<v.length;V++)v[V]=v[V]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-a;const R=this._sizeLods[o],z=3*R*(o>U-Br?o-U+Br:0),H=4*(this._cubeSize-R);eu(n,z,H,3*R,2*R),m.setRenderTarget(n),m.render(_,md)}}function Lw(r){const t=[],n=[],a=[];let o=r;const c=r-Br+1+mv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-Br?m=mv[f-r+Br-1]:f===0&&(m=0),a.push(m);const d=1/(h-2),g=-d,_=1+d,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,y=2,v=1,L=new Float32Array(E*M*S),U=new Float32Array(y*M*S),R=new Float32Array(v*M*S);for(let H=0;H<S;H++){const V=H%3*2/3-1,q=H>2?0:-1,D=[V,q,0,V+2/3,q,0,V+2/3,q+1,0,V,q,0,V+2/3,q+1,0,V,q+1,0];L.set(D,E*M*H),U.set(x,y*M*H);const N=[H,H,H,H,H,H];R.set(N,v*M*H)}const z=new Bn;z.setAttribute("position",new li(L,E)),z.setAttribute("uv",new li(U,y)),z.setAttribute("faceIndex",new li(R,v)),t.push(z),o>Br&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function xv(r,t,n){const a=new Ci(r,t,n);return a.texture.mapping=Mu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eu(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function Pw(r,t,n){const a=new Float32Array(Rs),o=new j(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function yv(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Sv(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ow(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,d=m===Od||m===zd,g=m===Vr||m===Gr;if(d||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new vv(r)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return d&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new vv(r)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function c(h){const m=h.target;m.removeEventListener("dispose",c);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function zw(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ul("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function Bw(r,t,n,a){const o={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const M in x.attributes)t.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete o[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function d(_){const x=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let U=0,R=L.length;U<R;U+=3){const z=L[U+0],H=L[U+1],V=L[U+2];x.push(z,H,H,V,V,z)}}else if(M!==void 0){const L=M.array;E=M.version;for(let U=0,R=L.length/3-1;U<R;U+=3){const z=U+0,H=U+1,V=U+2;x.push(z,H,H,V,V,z)}}else return;const y=new(Mx(x)?Rx:wx)(x,1);y.version=E;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Iw(r,t,n){let a;function o(x){a=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(a,S,c,x*f),n.update(S,a,1)}function d(x,S,M){M!==0&&(r.drawElementsInstanced(a,S,c,x*f,M),n.update(S,a,M))}function g(x,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,x,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];n.update(y,a,1)}function _(x,S,M,E){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)d(x[v]/f,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,c,x,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*E[L];n.update(v,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Fw(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function Hw(r,t,n){const a=new WeakMap,o=new He;function c(f,h,m){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(h);if(x===void 0||x.count!==_){let N=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",N)};var S=N;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),y===!0&&(R=3);let z=h.attributes.position.count*R,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const V=new Float32Array(z*H*4*_),q=new Ex(V,z,H,_);q.type=da,q.needsUpdate=!0;const D=R*4;for(let G=0;G<_;G++){const it=v[G],ct=L[G],gt=U[G],ft=z*H*4*G;for(let I=0;I<it.count;I++){const Q=I*D;M===!0&&(o.fromBufferAttribute(it,I),V[ft+Q+0]=o.x,V[ft+Q+1]=o.y,V[ft+Q+2]=o.z,V[ft+Q+3]=0),E===!0&&(o.fromBufferAttribute(ct,I),V[ft+Q+4]=o.x,V[ft+Q+5]=o.y,V[ft+Q+6]=o.z,V[ft+Q+7]=0),y===!0&&(o.fromBufferAttribute(gt,I),V[ft+Q+8]=o.x,V[ft+Q+9]=o.y,V[ft+Q+10]=o.z,V[ft+Q+11]=gt.itemSize===4?o.w:1)}}x={count:_,texture:q,size:new qt(z,H)},a.set(h,x),h.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const E=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Vw(r,t,n,a){let o=new WeakMap;function c(m){const d=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==d&&(t.update(_),o.set(_,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==d&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,d))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==d&&(x.update(),o.set(x,d))}return _}function f(){o=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:f}}const Vx=new zn,bv=new Ox(1,1),Gx=new Ex,kx=new cT,jx=new Ux,Mv=[],Ev=[],Tv=new Float32Array(16),Av=new Float32Array(9),wv=new Float32Array(4);function Yr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=Mv[o];if(c===void 0&&(c=new Float32Array(o),Mv[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function _n(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Cu(r,t){let n=Ev[t];n===void 0&&(n=new Int32Array(t),Ev[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function Gw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function kw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2fv(this.addr,t),_n(n,t)}}function jw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;r.uniform3fv(this.addr,t),_n(n,t)}}function Xw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4fv(this.addr,t),_n(n,t)}}function Ww(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;wv.set(a),r.uniformMatrix2fv(this.addr,!1,wv),_n(n,a)}}function qw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;Av.set(a),r.uniformMatrix3fv(this.addr,!1,Av),_n(n,a)}}function Yw(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(gn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,a))return;Tv.set(a),r.uniformMatrix4fv(this.addr,!1,Tv),_n(n,a)}}function Zw(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function Kw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2iv(this.addr,t),_n(n,t)}}function Qw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3iv(this.addr,t),_n(n,t)}}function Jw(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4iv(this.addr,t),_n(n,t)}}function $w(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function tR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2uiv(this.addr,t),_n(n,t)}}function eR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3uiv(this.addr,t),_n(n,t)}}function nR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4uiv(this.addr,t),_n(n,t)}}function iR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(bv.compareFunction=bx,c=bv):c=Vx,n.setTexture2D(t||c,o)}function aR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||kx,o)}function sR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||jx,o)}function rR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Gx,o)}function oR(r){switch(r){case 5126:return Gw;case 35664:return kw;case 35665:return jw;case 35666:return Xw;case 35674:return Ww;case 35675:return qw;case 35676:return Yw;case 5124:case 35670:return Zw;case 35667:case 35671:return Kw;case 35668:case 35672:return Qw;case 35669:case 35673:return Jw;case 5125:return $w;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return rR}}function lR(r,t){r.uniform1fv(this.addr,t)}function cR(r,t){const n=Yr(t,this.size,2);r.uniform2fv(this.addr,n)}function uR(r,t){const n=Yr(t,this.size,3);r.uniform3fv(this.addr,n)}function fR(r,t){const n=Yr(t,this.size,4);r.uniform4fv(this.addr,n)}function hR(r,t){const n=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function dR(r,t){const n=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function pR(r,t){const n=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function mR(r,t){r.uniform1iv(this.addr,t)}function gR(r,t){r.uniform2iv(this.addr,t)}function _R(r,t){r.uniform3iv(this.addr,t)}function vR(r,t){r.uniform4iv(this.addr,t)}function xR(r,t){r.uniform1uiv(this.addr,t)}function yR(r,t){r.uniform2uiv(this.addr,t)}function SR(r,t){r.uniform3uiv(this.addr,t)}function bR(r,t){r.uniform4uiv(this.addr,t)}function MR(r,t,n){const a=this.cache,o=t.length,c=Cu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||Vx,c[f])}function ER(r,t,n){const a=this.cache,o=t.length,c=Cu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||kx,c[f])}function TR(r,t,n){const a=this.cache,o=t.length,c=Cu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||jx,c[f])}function AR(r,t,n){const a=this.cache,o=t.length,c=Cu(n,o);gn(a,c)||(r.uniform1iv(this.addr,c),_n(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||Gx,c[f])}function wR(r){switch(r){case 5126:return lR;case 35664:return cR;case 35665:return uR;case 35666:return fR;case 35674:return hR;case 35675:return dR;case 35676:return pR;case 5124:case 35670:return mR;case 35667:case 35671:return gR;case 35668:case 35672:return _R;case 35669:case 35673:return vR;case 5125:return xR;case 36294:return yR;case 36295:return SR;case 36296:return bR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class RR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=oR(n.type)}}class CR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wR(n.type)}}class DR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Rv(r,t){r.seq.push(t),r.map[t.id]=t}function UR(r,t,n){const a=r.name,o=a.length;for(yd.lastIndex=0;;){const c=yd.exec(a),f=yd.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&f+2===o){Rv(n,d===void 0?new RR(h,r,t):new CR(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new DR(h),Rv(n,_)),n=_}}}class fu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);UR(c,f,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function Cv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const NR=37297;let LR=0;function PR(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const Dv=new he;function OR(r){Re._getMatrix(Dv,Re.workingColorSpace,r);const t=`mat3( ${Dv.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case pu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Uv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+PR(r.getShaderSource(t),h)}else return c}function zR(r,t){const n=OR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function BR(r,t){let n;switch(t){case zE:n="Linear";break;case BE:n="Reinhard";break;case IE:n="Cineon";break;case FE:n="ACESFilmic";break;case VE:n="AgX";break;case GE:n="Neutral";break;case HE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nu=new j;function IR(){Re.getLuminanceCoefficients(nu);const r=nu.x.toFixed(4),t=nu.y.toFixed(4),n=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function HR(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function VR(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function nl(r){return r!==""}function Nv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(GR,jR)}const kR=new Map;function jR(r,t){let n=me[t];if(n===void 0){const a=kR.get(t);if(a!==void 0)n=me[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return vp(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(r){return r.replace(XR,WR)}function WR(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ov(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ux?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===mE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function YR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vr:case Gr:t="ENVMAP_TYPE_CUBE";break;case Mu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ZR(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function KR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fx:t="ENVMAP_BLENDING_MULTIPLY";break;case PE:t="ENVMAP_BLENDING_MIX";break;case OE:t="ENVMAP_BLENDING_ADD";break}return t}function QR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function JR(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=qR(n),d=YR(n),g=ZR(n),_=KR(n),x=QR(n),S=FR(n),M=HR(c),E=o.createProgram();let y,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(nl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(nl).join(`
`),v.length>0&&(v+=`
`)):(y=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),v=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$a?"#define TONE_MAPPING":"",n.toneMapping!==$a?me.tonemapping_pars_fragment:"",n.toneMapping!==$a?BR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,zR("linearToOutputTexel",n.outputColorSpace),IR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),f=vp(f),f=Nv(f,n),f=Lv(f,n),h=vp(h),h=Nv(h,n),h=Lv(h,n),f=Pv(f),h=Pv(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+y+f,R=L+v+h,z=Cv(o,o.VERTEX_SHADER,U),H=Cv(o,o.FRAGMENT_SHADER,R);o.attachShader(E,z),o.attachShader(E,H),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function V(G){if(r.debug.checkShaderErrors){const it=o.getProgramInfoLog(E)||"",ct=o.getShaderInfoLog(z)||"",gt=o.getShaderInfoLog(H)||"",ft=it.trim(),I=ct.trim(),Q=gt.trim();let Z=!0,St=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,E,z,H);else{const P=Uv(o,z,"vertex"),tt=Uv(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+P+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(I===""||Q==="")&&(St=!1);St&&(G.diagnostics={runnable:Z,programLog:ft,vertexShader:{log:I,prefix:y},fragmentShader:{log:Q,prefix:v}})}o.deleteShader(z),o.deleteShader(H),q=new fu(o,E),D=VR(o,E)}let q;this.getUniforms=function(){return q===void 0&&V(this),q};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(E,NR)),N},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LR++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=H,this}let $R=0;class t2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new e2(t),n.set(t,a)),a}}class e2{constructor(t){this.id=$R++,this.code=t,this.usedTimes=0}}function n2(r,t,n,a,o,c,f){const h=new Tx,m=new t2,d=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return d.add(D),D===0?"uv":`uv${D}`}function y(D,N,G,it,ct){const gt=it.fog,ft=ct.geometry,I=D.isMeshStandardMaterial?it.environment:null,Q=(D.isMeshStandardMaterial?n:t).get(D.envMap||I),Z=Q&&Q.mapping===Mu?Q.image.height:null,St=M[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const P=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=P!==void 0?P.length:0;let yt=0;ft.morphAttributes.position!==void 0&&(yt=1),ft.morphAttributes.normal!==void 0&&(yt=2),ft.morphAttributes.color!==void 0&&(yt=3);let bt,Ut,Ft,W;if(St){const Ee=Bi[St];bt=Ee.vertexShader,Ut=Ee.fragmentShader}else bt=D.vertexShader,Ut=D.fragmentShader,m.update(D),Ft=m.getVertexShaderID(D),W=m.getFragmentShaderID(D);const ht=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),jt=ct.isInstancedMesh===!0,Gt=ct.isBatchedMesh===!0,le=!!D.map,Ze=!!D.matcap,F=!!Q,Te=!!D.aoMap,oe=!!D.lightMap,ae=!!D.bumpMap,zt=!!D.normalMap,ke=!!D.displacementMap,Xt=!!D.emissiveMap,ce=!!D.metalnessMap,Ke=!!D.roughnessMap,Qe=D.anisotropy>0,O=D.clearcoat>0,T=D.dispersion>0,nt=D.iridescence>0,dt=D.sheen>0,_t=D.transmission>0,ut=Qe&&!!D.anisotropyMap,Bt=O&&!!D.clearcoatMap,Rt=O&&!!D.clearcoatNormalMap,Yt=O&&!!D.clearcoatRoughnessMap,Kt=nt&&!!D.iridescenceMap,Et=nt&&!!D.iridescenceThicknessMap,Lt=dt&&!!D.sheenColorMap,Jt=dt&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Dt=!!D.specularColorMap,ue=!!D.specularIntensityMap,X=_t&&!!D.transmissionMap,wt=_t&&!!D.thicknessMap,Ct=!!D.gradientMap,It=!!D.alphaMap,Tt=D.alphaTest>0,xt=!!D.alphaHash,kt=!!D.extensions;let re=$a;D.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=r.toneMapping);const De={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:bt,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Ft,customFragmentShaderID:W,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Gt,batchingColor:Gt&&ct._colorsTexture!==null,instancing:jt,instancingColor:jt&&ct.instanceColor!==null,instancingMorph:jt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:kr,alphaToCoverage:!!D.alphaToCoverage,map:le,matcap:Ze,envMap:F,envMapMode:F&&Q.mapping,envMapCubeUVHeight:Z,aoMap:Te,lightMap:oe,bumpMap:ae,normalMap:zt,displacementMap:x&&ke,emissiveMap:Xt,normalMapObjectSpace:zt&&D.normalMapType===WE,normalMapTangentSpace:zt&&D.normalMapType===Sx,metalnessMap:ce,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ut,clearcoat:O,clearcoatMap:Bt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:T,iridescence:nt,iridescenceMap:Kt,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Lt,sheenRoughnessMap:Jt,specularMap:Wt,specularColorMap:Dt,specularIntensityMap:ue,transmission:_t,transmissionMap:X,thicknessMap:wt,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===Us&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:xt,combine:D.combine,mapUv:le&&E(D.map.channel),aoMapUv:Te&&E(D.aoMap.channel),lightMapUv:oe&&E(D.lightMap.channel),bumpMapUv:ae&&E(D.bumpMap.channel),normalMapUv:zt&&E(D.normalMap.channel),displacementMapUv:ke&&E(D.displacementMap.channel),emissiveMapUv:Xt&&E(D.emissiveMap.channel),metalnessMapUv:ce&&E(D.metalnessMap.channel),roughnessMapUv:Ke&&E(D.roughnessMap.channel),anisotropyMapUv:ut&&E(D.anisotropyMap.channel),clearcoatMapUv:Bt&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&E(D.sheenRoughnessMap.channel),specularMapUv:Wt&&E(D.specularMap.channel),specularColorMapUv:Dt&&E(D.specularColorMap.channel),specularIntensityMapUv:ue&&E(D.specularIntensityMap.channel),transmissionMapUv:X&&E(D.transmissionMap.channel),thicknessMapUv:wt&&E(D.thicknessMap.channel),alphaMapUv:It&&E(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(zt||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(le||It),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:Xt&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ii,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:kt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&D.extensions.multiDraw===!0||Gt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=d.has(1),De.vertexUv2s=d.has(2),De.vertexUv3s=d.has(3),d.clear(),De}function v(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)N.push(G),N.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(L(N,D),U(N,D),N.push(r.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function L(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function U(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),N.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const N=M[D.type];let G;if(N){const it=Bi[N];G=gu.clone(it.uniforms)}else G=D.uniforms;return G}function z(D,N){let G;for(let it=0,ct=g.length;it<ct;it++){const gt=g[it];if(gt.cacheKey===N){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new JR(r,N,D,c),g.push(G)),G}function H(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function V(D){m.remove(D)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:z,releaseProgram:H,releaseShaderCache:V,programs:g,dispose:q}}function i2(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function a2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bv(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(_,x,S,M,E,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=E,v.group=y),t++,v}function h(_,x,S,M,E,y){const v=f(_,x,S,M,E,y);S.transmission>0?a.push(v):S.transparent===!0?o.push(v):n.push(v)}function m(_,x,S,M,E,y){const v=f(_,x,S,M,E,y);S.transmission>0?a.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function d(_,x){n.length>1&&n.sort(_||a2),a.length>1&&a.sort(x||zv),o.length>1&&o.sort(x||zv)}function g(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:d}}function s2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new Bv,r.set(a,[f])):o>=c.length?(f=new Bv,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function r2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new ve};break;case"SpotLight":n={position:new j,direction:new j,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":n={color:new ve,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=n,n}}}function o2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let l2=0;function c2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function u2(r){const t=new r2,n=o2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new j);const o=new j,c=new We,f=new We;function h(d){let g=0,_=0,x=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,M=0,E=0,y=0,v=0,L=0,U=0,R=0,z=0,H=0,V=0;d.sort(c2);for(let D=0,N=d.length;D<N;D++){const G=d[D],it=G.color,ct=G.intensity,gt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=it.r*ct,_+=it.g*ct,x+=it.b*ct;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],ct);V++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Q=G.shadow,Z=n.get(G);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,a.directionalShadow[S]=Z,a.directionalShadowMap[S]=ft,a.directionalShadowMatrix[S]=G.shadow.matrix,L++}a.directional[S]=I,S++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(it).multiplyScalar(ct),I.distance=gt,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[E]=I;const Q=G.shadow;if(G.map&&(a.spotLightMap[z]=G.map,z++,Q.updateMatrices(G),G.castShadow&&H++),a.spotLightMatrix[E]=Q.matrix,G.castShadow){const Z=n.get(G);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,a.spotShadow[E]=Z,a.spotShadowMap[E]=ft,R++}E++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(it).multiplyScalar(ct),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=I,y++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const Q=G.shadow,Z=n.get(G);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,a.pointShadow[M]=Z,a.pointShadowMap[M]=ft,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=I,M++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(ct),I.groundColor.copy(G.groundColor).multiplyScalar(ct),a.hemi[v]=I,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const q=a.hash;(q.directionalLength!==S||q.pointLength!==M||q.spotLength!==E||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==L||q.numPointShadows!==U||q.numSpotShadows!==R||q.numSpotMaps!==z||q.numLightProbes!==V)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=y,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+z-H,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=V,q.directionalLength=S,q.pointLength=M,q.spotLength=E,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=L,q.numPointShadows=U,q.numSpotShadows=R,q.numSpotMaps=z,q.numLightProbes=V,a.version=l2++)}function m(d,g){let _=0,x=0,S=0,M=0,E=0;const y=g.matrixWorldInverse;for(let v=0,L=d.length;v<L;v++){const U=d[v];if(U.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(U.isSpotLight){const R=a.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const R=a.rectArea[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const R=a.point[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const R=a.hemi[E];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),E++}}}return{setup:h,setupView:m,state:a}}function Iv(r){const t=new u2(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function f2(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new Iv(r),t.set(o,[h])):c>=f.length?(h=new Iv(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p2(r,t,n){let a=new Op;const o=new qt,c=new qt,f=new He,h=new OT({depthPacking:XE}),m=new zT,d={},g=n.maxTextureSize,_={[es]:Qn,[Qn]:es,[Ii]:Ii},x=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:h2,fragmentShader:d2}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Bn;M.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new oi(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ux;let v=this.type;this.render=function(H,V,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const D=r.getRenderTarget(),N=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),it=r.state;it.setBlending(ma),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const ct=v!==ha&&this.type===ha,gt=v===ha&&this.type!==ha;for(let ft=0,I=H.length;ft<I;ft++){const Q=H[ft],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const St=Z.getFrameExtents();if(o.multiply(St),c.copy(Z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/St.x),o.x=c.x*St.x,Z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/St.y),o.y=c.y*St.y,Z.mapSize.y=c.y)),Z.map===null||ct===!0||gt===!0){const tt=this.type!==ha?{minFilter:Ri,magFilter:Ri}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ci(o.x,o.y,tt),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const P=Z.getViewportCount();for(let tt=0;tt<P;tt++){const yt=Z.getViewport(tt);f.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),it.viewport(f),Z.updateMatrices(Q,tt),a=Z.getFrustum(),R(V,q,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ha&&L(Z,q),Z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(D,N,G)};function L(H,V){const q=t.update(E);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ci(o.x,o.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(V,null,q,x,E,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(V,null,q,S,E,null)}function U(H,V,q,D){let N=null;const G=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)N=G;else if(N=q.isPointLight===!0?m:h,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const it=N.uuid,ct=V.uuid;let gt=d[it];gt===void 0&&(gt={},d[it]=gt);let ft=gt[ct];ft===void 0&&(ft=N.clone(),gt[ct]=ft,V.addEventListener("dispose",z)),N=ft}if(N.visible=V.visible,N.wireframe=V.wireframe,D===ha?N.side=V.shadowSide!==null?V.shadowSide:V.side:N.side=V.shadowSide!==null?V.shadowSide:_[V.side],N.alphaMap=V.alphaMap,N.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,N.map=V.map,N.clipShadows=V.clipShadows,N.clippingPlanes=V.clippingPlanes,N.clipIntersection=V.clipIntersection,N.displacementMap=V.displacementMap,N.displacementScale=V.displacementScale,N.displacementBias=V.displacementBias,N.wireframeLinewidth=V.wireframeLinewidth,N.linewidth=V.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const it=r.properties.get(N);it.light=q}return N}function R(H,V,q,D,N){if(H.visible===!1)return;if(H.layers.test(V.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===ha)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const ct=t.update(H),gt=H.material;if(Array.isArray(gt)){const ft=ct.groups;for(let I=0,Q=ft.length;I<Q;I++){const Z=ft[I],St=gt[Z.materialIndex];if(St&&St.visible){const P=U(H,St,D,N);H.onBeforeShadow(r,H,V,q,ct,P,Z),r.renderBufferDirect(q,null,ct,P,H,Z),H.onAfterShadow(r,H,V,q,ct,P,Z)}}}else if(gt.visible){const ft=U(H,gt,D,N);H.onBeforeShadow(r,H,V,q,ct,ft,null),r.renderBufferDirect(q,null,ct,ft,H,null),H.onAfterShadow(r,H,V,q,ct,ft,null)}}const it=H.children;for(let ct=0,gt=it.length;ct<gt;ct++)R(it[ct],V,q,D,N)}function z(H){H.target.removeEventListener("dispose",z);for(const q in d){const D=d[q],N=H.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const m2={[Rd]:Cd,[Dd]:Ld,[Ud]:Pd,[Hr]:Nd,[Cd]:Rd,[Ld]:Dd,[Pd]:Ud,[Nd]:Hr};function g2(r,t){function n(){let X=!1;const wt=new He;let Ct=null;const It=new He(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!X&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,xt,kt,re,De){De===!0&&(Tt*=re,xt*=re,kt*=re),wt.set(Tt,xt,kt,re),It.equals(wt)===!1&&(r.clearColor(Tt,xt,kt,re),It.copy(wt))},reset:function(){X=!1,Ct=null,It.set(-1,0,0,0)}}}function a(){let X=!1,wt=!1,Ct=null,It=null,Tt=null;return{setReversed:function(xt){if(wt!==xt){const kt=t.get("EXT_clip_control");xt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const re=Tt;Tt=null,this.setClear(re)}},getReversed:function(){return wt},setTest:function(xt){xt?ht(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(xt){Ct!==xt&&!X&&(r.depthMask(xt),Ct=xt)},setFunc:function(xt){if(wt&&(xt=m2[xt]),It!==xt){switch(xt){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Dd:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Ld:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Tt!==xt&&(wt&&(xt=1-xt),r.clearDepth(xt),Tt=xt)},reset:function(){X=!1,Ct=null,It=null,Tt=null,wt=!1}}}function o(){let X=!1,wt=null,Ct=null,It=null,Tt=null,xt=null,kt=null,re=null,De=null;return{setTest:function(Ee){X||(Ee?ht(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Ee){wt!==Ee&&!X&&(r.stencilMask(Ee),wt=Ee)},setFunc:function(Ee,xi,fn){(Ct!==Ee||It!==xi||Tt!==fn)&&(r.stencilFunc(Ee,xi,fn),Ct=Ee,It=xi,Tt=fn)},setOp:function(Ee,xi,fn){(xt!==Ee||kt!==xi||re!==fn)&&(r.stencilOp(Ee,xi,fn),xt=Ee,kt=xi,re=fn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){De!==Ee&&(r.clearStencil(Ee),De=Ee)},reset:function(){X=!1,wt=null,Ct=null,It=null,Tt=null,xt=null,kt=null,re=null,De=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,U=null,R=null,z=null,H=null,V=new ve(0,0,0),q=0,D=!1,N=null,G=null,it=null,ct=null,gt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Q=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=Q>=2);let St=null,P={};const tt=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),bt=new He().fromArray(tt),Ut=new He().fromArray(yt);function Ft(X,wt,Ct,It){const Tt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(X,xt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Ct;kt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(wt+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return xt}const W={};W[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Hr),ae(!1),zt(U_),ht(r.CULL_FACE),Te(ma);function ht(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Mt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function jt(X,wt){return _[X]!==wt?(r.bindFramebuffer(X,wt),_[X]=wt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=wt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Gt(X,wt){let Ct=S,It=!1;if(X){Ct=x.get(wt),Ct===void 0&&(Ct=[],x.set(wt,Ct));const Tt=X.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,kt=Tt.length;xt<kt;xt++)Ct[xt]=r.COLOR_ATTACHMENT0+xt;Ct.length=Tt.length,It=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,It=!0);It&&r.drawBuffers(Ct)}function le(X){return M!==X?(r.useProgram(X),M=X,!0):!1}const Ze={[ws]:r.FUNC_ADD,[_E]:r.FUNC_SUBTRACT,[vE]:r.FUNC_REVERSE_SUBTRACT};Ze[xE]=r.MIN,Ze[yE]=r.MAX;const F={[SE]:r.ZERO,[bE]:r.ONE,[ME]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[CE]:r.SRC_ALPHA_SATURATE,[wE]:r.DST_COLOR,[TE]:r.DST_ALPHA,[EE]:r.ONE_MINUS_SRC_COLOR,[wd]:r.ONE_MINUS_SRC_ALPHA,[RE]:r.ONE_MINUS_DST_COLOR,[AE]:r.ONE_MINUS_DST_ALPHA,[DE]:r.CONSTANT_COLOR,[UE]:r.ONE_MINUS_CONSTANT_COLOR,[NE]:r.CONSTANT_ALPHA,[LE]:r.ONE_MINUS_CONSTANT_ALPHA};function Te(X,wt,Ct,It,Tt,xt,kt,re,De,Ee){if(X===ma){E===!0&&(Mt(r.BLEND),E=!1);return}if(E===!1&&(ht(r.BLEND),E=!0),X!==gE){if(X!==y||Ee!==D){if((v!==ws||R!==ws)&&(r.blendEquation(r.FUNC_ADD),v=ws,R=ws),Ee)switch(X){case Us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case al:r.blendFunc(r.ONE,r.ONE);break;case N_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case al:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case N_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,z=null,H=null,V.set(0,0,0),q=0,y=X,D=Ee}return}Tt=Tt||wt,xt=xt||Ct,kt=kt||It,(wt!==v||Tt!==R)&&(r.blendEquationSeparate(Ze[wt],Ze[Tt]),v=wt,R=Tt),(Ct!==L||It!==U||xt!==z||kt!==H)&&(r.blendFuncSeparate(F[Ct],F[It],F[xt],F[kt]),L=Ct,U=It,z=xt,H=kt),(re.equals(V)===!1||De!==q)&&(r.blendColor(re.r,re.g,re.b,De),V.copy(re),q=De),y=X,D=!1}function oe(X,wt){X.side===Ii?Mt(r.CULL_FACE):ht(r.CULL_FACE);let Ct=X.side===Qn;wt&&(Ct=!Ct),ae(Ct),X.blending===Us&&X.transparent===!1?Te(ma):Te(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;h.setTest(It),It&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){N!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),N=X)}function zt(X){X!==dE?(ht(r.CULL_FACE),X!==G&&(X===U_?r.cullFace(r.BACK):X===pE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),G=X}function ke(X){X!==it&&(I&&r.lineWidth(X),it=X)}function Xt(X,wt,Ct){X?(ht(r.POLYGON_OFFSET_FILL),(ct!==wt||gt!==Ct)&&(r.polygonOffset(wt,Ct),ct=wt,gt=Ct)):Mt(r.POLYGON_OFFSET_FILL)}function ce(X){X?ht(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=r.TEXTURE0+ft-1),St!==X&&(r.activeTexture(X),St=X)}function Qe(X,wt,Ct){Ct===void 0&&(St===null?Ct=r.TEXTURE0+ft-1:Ct=St);let It=P[Ct];It===void 0&&(It={type:void 0,texture:void 0},P[Ct]=It),(It.type!==X||It.texture!==wt)&&(St!==Ct&&(r.activeTexture(Ct),St=Ct),r.bindTexture(X,wt||W[X]),It.type=X,It.texture=wt)}function O(){const X=P[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){bt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function Jt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function Wt(X,wt){let Ct=d.get(wt);Ct===void 0&&(Ct=new WeakMap,d.set(wt,Ct));let It=Ct.get(X);It===void 0&&(It=r.getUniformBlockIndex(wt,X.name),Ct.set(X,It))}function Dt(X,wt){const It=d.get(wt).get(X);m.get(wt)!==It&&(r.uniformBlockBinding(wt,It,X.__bindingPointIndex),m.set(wt,It))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,P={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,U=null,R=null,z=null,H=null,V=new ve(0,0,0),q=0,D=!1,N=null,G=null,it=null,ct=null,gt=null,bt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Mt,bindFramebuffer:jt,drawBuffers:Gt,useProgram:le,setBlending:Te,setMaterial:oe,setFlipSided:ae,setCullFace:zt,setLineWidth:ke,setPolygonOffset:Xt,setScissorTest:ce,activeTexture:Ke,bindTexture:Qe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Kt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:Bt,scissor:Lt,viewport:Jt,reset:ue}}function _2(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return S?new OffscreenCanvas(O,T):cl("canvas")}function E(O,T,nt){let dt=1;const _t=Qe(O);if((_t.width>nt||_t.height>nt)&&(dt=nt/Math.max(_t.width,_t.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(dt*_t.width),Bt=Math.floor(dt*_t.height);_===void 0&&(_=M(ut,Bt));const Rt=T?M(ut,Bt):_;return Rt.width=ut,Rt.height=Bt,Rt.getContext("2d").drawImage(O,0,0,ut,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+Bt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,T,nt,dt,_t=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=T;if(T===r.RED&&(nt===r.FLOAT&&(ut=r.R32F),nt===r.HALF_FLOAT&&(ut=r.R16F),nt===r.UNSIGNED_BYTE&&(ut=r.R8)),T===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ut=r.R8UI),nt===r.UNSIGNED_SHORT&&(ut=r.R16UI),nt===r.UNSIGNED_INT&&(ut=r.R32UI),nt===r.BYTE&&(ut=r.R8I),nt===r.SHORT&&(ut=r.R16I),nt===r.INT&&(ut=r.R32I)),T===r.RG&&(nt===r.FLOAT&&(ut=r.RG32F),nt===r.HALF_FLOAT&&(ut=r.RG16F),nt===r.UNSIGNED_BYTE&&(ut=r.RG8)),T===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ut=r.RG8UI),nt===r.UNSIGNED_SHORT&&(ut=r.RG16UI),nt===r.UNSIGNED_INT&&(ut=r.RG32UI),nt===r.BYTE&&(ut=r.RG8I),nt===r.SHORT&&(ut=r.RG16I),nt===r.INT&&(ut=r.RG32I)),T===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),nt===r.UNSIGNED_INT&&(ut=r.RGB32UI),nt===r.BYTE&&(ut=r.RGB8I),nt===r.SHORT&&(ut=r.RGB16I),nt===r.INT&&(ut=r.RGB32I)),T===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),nt===r.UNSIGNED_INT&&(ut=r.RGBA32UI),nt===r.BYTE&&(ut=r.RGBA8I),nt===r.SHORT&&(ut=r.RGBA16I),nt===r.INT&&(ut=r.RGBA32I)),T===r.RGB&&(nt===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),nt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),T===r.RGBA){const Bt=_t?pu:Re.getTransfer(dt);nt===r.FLOAT&&(ut=r.RGBA32F),nt===r.HALF_FLOAT&&(ut=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(ut=Bt===Be?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function R(O,T){let nt;return O?T===null||T===Ns||T===rl?nt=r.DEPTH24_STENCIL8:T===da?nt=r.DEPTH32F_STENCIL8:T===sl&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ns||T===rl?nt=r.DEPTH_COMPONENT24:T===da?nt=r.DEPTH_COMPONENT32F:T===sl&&(nt=r.DEPTH_COMPONENT16),nt}function z(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ri&&O.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function H(O){const T=O.target;T.removeEventListener("dispose",H),q(T),T.isVideoTexture&&g.delete(T)}function V(O){const T=O.target;T.removeEventListener("dispose",V),N(T)}function q(O){const T=a.get(O);if(T.__webglInit===void 0)return;const nt=O.source,dt=x.get(nt);if(dt){const _t=dt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&D(O),Object.keys(dt).length===0&&x.delete(nt)}a.remove(O)}function D(O){const T=a.get(O);r.deleteTexture(T.__webglTexture);const nt=O.source,dt=x.get(nt);delete dt[T.__cacheKey],f.memory.textures--}function N(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let _t=0;_t<T.__webglFramebuffer[dt].length;_t++)r.deleteFramebuffer(T.__webglFramebuffer[dt][_t]);else r.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[dt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=O.textures;for(let dt=0,_t=nt.length;dt<_t;dt++){const ut=a.get(nt[dt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),a.remove(nt[dt])}a.remove(O)}let G=0;function it(){G=0}function ct(){const O=G;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),G+=1,O}function gt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ft(O,T){const nt=a.get(O);if(O.isVideoTexture&&ce(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&nt.__version!==O.version){const dt=O.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,O,T);return}}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+T)}function I(O,T){const nt=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){W(nt,O,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+T)}function Q(O,T){const nt=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){W(nt,O,T);return}n.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+T)}function Z(O,T){const nt=a.get(O);if(O.version>0&&nt.__version!==O.version){ht(nt,O,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+T)}const St={[Bd]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[Id]:r.MIRRORED_REPEAT},P={[Ri]:r.NEAREST,[kE]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[Hh]:r.LINEAR_MIPMAP_NEAREST,[Ds]:r.LINEAR_MIPMAP_LINEAR},tt={[qE]:r.NEVER,[$E]:r.ALWAYS,[YE]:r.LESS,[bx]:r.LEQUAL,[ZE]:r.EQUAL,[JE]:r.GEQUAL,[KE]:r.GREATER,[QE]:r.NOTEQUAL};function yt(O,T){if(T.type===da&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===Hh||T.magFilter===Cc||T.magFilter===Ds||T.minFilter===Hi||T.minFilter===Hh||T.minFilter===Cc||T.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,St[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==Cc&&T.minFilter!==Ds||T.type===da&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function bt(O,T){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",H));const dt=T.source;let _t=x.get(dt);_t===void 0&&(_t={},x.set(dt,_t));const ut=gt(T);if(ut!==O.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),_t[ut].usedTimes++;const Bt=_t[O.__cacheKey];Bt!==void 0&&(_t[O.__cacheKey].usedTimes--,Bt.usedTimes===0&&D(T)),O.__cacheKey=ut,O.__webglTexture=_t[ut].texture}return nt}function Ut(O,T,nt){return Math.floor(Math.floor(O/nt)/T)}function Ft(O,T,nt,dt){const ut=O.updateRanges;if(ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,nt,dt,T.data);else{ut.sort((Et,Lt)=>Et.start-Lt.start);let Bt=0;for(let Et=1;Et<ut.length;Et++){const Lt=ut[Bt],Jt=ut[Et],Wt=Lt.start+Lt.count,Dt=Ut(Jt.start,T.width,4),ue=Ut(Lt.start,T.width,4);Jt.start<=Wt+1&&Dt===ue&&Ut(Jt.start+Jt.count-1,T.width,4)===Dt?Lt.count=Math.max(Lt.count,Jt.start+Jt.count-Lt.start):(++Bt,ut[Bt]=Jt)}ut.length=Bt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Yt=r.getParameter(r.UNPACK_SKIP_PIXELS),Kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Et=0,Lt=ut.length;Et<Lt;Et++){const Jt=ut[Et],Wt=Math.floor(Jt.start/4),Dt=Math.ceil(Jt.count/4),ue=Wt%T.width,X=Math.floor(Wt/T.width),wt=Dt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ue,X,wt,Ct,nt,dt,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kt)}}function W(O,T,nt){let dt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=r.TEXTURE_3D);const _t=bt(O,T),ut=T.source;n.bindTexture(dt,O.__webglTexture,r.TEXTURE0+nt);const Bt=a.get(ut);if(ut.version!==Bt.__version||_t===!0){n.activeTexture(r.TEXTURE0+nt);const Rt=Re.getPrimaries(Re.workingColorSpace),Yt=T.colorSpace===Ja?null:Re.getPrimaries(T.colorSpace),Kt=T.colorSpace===Ja||Rt===Yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Et=E(T.image,!1,o.maxTextureSize);Et=Ke(T,Et);const Lt=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let Wt=U(T.internalFormat,Lt,Jt,T.colorSpace,T.isVideoTexture);yt(dt,T);let Dt;const ue=T.mipmaps,X=T.isVideoTexture!==!0,wt=Bt.__version===void 0||_t===!0,Ct=ut.dataReady,It=z(T,Et);if(T.isDepthTexture)Wt=R(T.format===ll,T.type),wt&&(X?n.texStorage2D(r.TEXTURE_2D,1,Wt,Et.width,Et.height):n.texImage2D(r.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Lt,Jt,null));else if(T.isDataTexture)if(ue.length>0){X&&wt&&n.texStorage2D(r.TEXTURE_2D,It,Wt,ue[0].width,ue[0].height);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Dt=ue[Tt],X?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Lt,Jt,Dt.data);T.generateMipmaps=!1}else X?(wt&&n.texStorage2D(r.TEXTURE_2D,It,Wt,Et.width,Et.height),Ct&&Ft(T,Et,Lt,Jt)):n.texImage2D(r.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Lt,Jt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&wt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Wt,ue[0].width,ue[0].height,Et.depth);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)if(Dt=ue[Tt],T.format!==wi)if(Lt!==null)if(X){if(Ct)if(T.layerUpdates.size>0){const kt=pv(Dt.width,Dt.height,T.format,T.type);for(const re of T.layerUpdates){const De=Dt.data.subarray(re*kt/Dt.data.BYTES_PER_ELEMENT,(re+1)*kt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,re,Dt.width,Dt.height,1,Lt,De)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Jt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Dt.width,Dt.height,Et.depth,0,Lt,Jt,Dt.data)}else{X&&wt&&n.texStorage2D(r.TEXTURE_2D,It,Wt,ue[0].width,ue[0].height);for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Dt=ue[Tt],T.format!==wi?Lt!==null?X?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Dt.width,Dt.height,0,Lt,Jt,Dt.data)}else if(T.isDataArrayTexture)if(X){if(wt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Wt,Et.width,Et.height,Et.depth),Ct)if(T.layerUpdates.size>0){const Tt=pv(Et.width,Et.height,T.format,T.type);for(const xt of T.layerUpdates){const kt=Et.data.subarray(xt*Tt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Tt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Lt,Jt,kt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Jt,Et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Et.width,Et.height,Et.depth,0,Lt,Jt,Et.data);else if(T.isData3DTexture)X?(wt&&n.texStorage3D(r.TEXTURE_3D,It,Wt,Et.width,Et.height,Et.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,Jt,Et.data)):n.texImage3D(r.TEXTURE_3D,0,Wt,Et.width,Et.height,Et.depth,0,Lt,Jt,Et.data);else if(T.isFramebufferTexture){if(wt)if(X)n.texStorage2D(r.TEXTURE_2D,It,Wt,Et.width,Et.height);else{let Tt=Et.width,xt=Et.height;for(let kt=0;kt<It;kt++)n.texImage2D(r.TEXTURE_2D,kt,Wt,Tt,xt,0,Lt,Jt,null),Tt>>=1,xt>>=1}}else if(ue.length>0){if(X&&wt){const Tt=Qe(ue[0]);n.texStorage2D(r.TEXTURE_2D,It,Wt,Tt.width,Tt.height)}for(let Tt=0,xt=ue.length;Tt<xt;Tt++)Dt=ue[Tt],X?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Lt,Jt,Dt):n.texImage2D(r.TEXTURE_2D,Tt,Wt,Lt,Jt,Dt);T.generateMipmaps=!1}else if(X){if(wt){const Tt=Qe(Et);n.texStorage2D(r.TEXTURE_2D,It,Wt,Tt.width,Tt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Jt,Et)}else n.texImage2D(r.TEXTURE_2D,0,Wt,Lt,Jt,Et);y(T)&&v(dt),Bt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ht(O,T,nt){if(T.image.length!==6)return;const dt=bt(O,T),_t=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+nt);const ut=a.get(_t);if(_t.version!==ut.__version||dt===!0){n.activeTexture(r.TEXTURE0+nt);const Bt=Re.getPrimaries(Re.workingColorSpace),Rt=T.colorSpace===Ja?null:Re.getPrimaries(T.colorSpace),Yt=T.colorSpace===Ja||Bt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Kt&&!Et?Lt[xt]=E(T.image[xt],!0,o.maxCubemapSize):Lt[xt]=Et?T.image[xt].image:T.image[xt],Lt[xt]=Ke(T,Lt[xt]);const Jt=Lt[0],Wt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),ue=U(T.internalFormat,Wt,Dt,T.colorSpace),X=T.isVideoTexture!==!0,wt=ut.__version===void 0||dt===!0,Ct=_t.dataReady;let It=z(T,Jt);yt(r.TEXTURE_CUBE_MAP,T);let Tt;if(Kt){X&&wt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,It,ue,Jt.width,Jt.height);for(let xt=0;xt<6;xt++){Tt=Lt[xt].mipmaps;for(let kt=0;kt<Tt.length;kt++){const re=Tt[kt];T.format!==wi?Wt!==null?X?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,re.width,re.height,Wt,re.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,re.width,re.height,Wt,Dt,re.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,ue,re.width,re.height,0,Wt,Dt,re.data)}}}else{if(Tt=T.mipmaps,X&&wt){Tt.length>0&&It++;const xt=Qe(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,It,ue,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Wt,Dt,Lt[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Lt[xt].width,Lt[xt].height,0,Wt,Dt,Lt[xt].data);for(let kt=0;kt<Tt.length;kt++){const De=Tt[kt].image[xt].image;X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,De.width,De.height,Wt,Dt,De.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,ue,De.width,De.height,0,Wt,Dt,De.data)}}else{X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Dt,Lt[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ue,Wt,Dt,Lt[xt]);for(let kt=0;kt<Tt.length;kt++){const re=Tt[kt];X?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,Wt,Dt,re.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,ue,Wt,Dt,re.image[xt])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),ut.__version=_t.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Mt(O,T,nt,dt,_t,ut){const Bt=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),Yt=U(nt.internalFormat,Bt,Rt,nt.colorSpace),Kt=a.get(T),Et=a.get(nt);if(Et.__renderTarget=T,!Kt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ut),Jt=Math.max(1,T.height>>ut);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?n.texImage3D(_t,ut,Yt,Lt,Jt,T.depth,0,Bt,Rt,null):n.texImage2D(_t,ut,Yt,Lt,Jt,0,Bt,Rt,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,_t,Et.__webglTexture,0,ke(T)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,_t,Et.__webglTexture,ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(O,T,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const dt=T.depthTexture,_t=dt&&dt.isDepthTexture?dt.type:null,ut=R(T.stencilBuffer,_t),Bt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=ke(T);Xt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ut,T.width,T.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ut,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ut,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Bt,r.RENDERBUFFER,O)}else{const dt=T.textures;for(let _t=0;_t<dt.length;_t++){const ut=dt[_t],Bt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Yt=U(ut.internalFormat,Bt,Rt,ut.colorSpace),Kt=ke(T);nt&&Xt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Yt,T.width,T.height):Xt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,Yt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Yt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const _t=dt.__webglTexture,ut=ke(T);if(T.depthTexture.format===ol)Xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(T.depthTexture.format===ll)Xt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function le(O){const T=a.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",_t)};dt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=dt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=O.texture.mipmaps;dt&&dt.length>0?Gt(T.__webglFramebuffer[0],O):Gt(T.__webglFramebuffer,O)}else if(nt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=r.createRenderbuffer(),jt(T.__webglDepthbuffer[dt],O,!1);else{const _t=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ut)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),jt(T.__webglDepthbuffer,O,!1);else{const _t=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(O,T,nt){const dt=a.get(O);T!==void 0&&Mt(dt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&le(O)}function F(O){const T=O.texture,nt=a.get(O),dt=a.get(T);O.addEventListener("dispose",V);const _t=O.textures,ut=O.isWebGLCubeRenderTarget===!0,Bt=_t.length>1;if(Bt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=T.version,f.memory.textures++),ut){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<T.mipmaps.length;Yt++)nt.__webglFramebuffer[Rt][Yt]=r.createFramebuffer()}else nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(Bt)for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const Kt=a.get(_t[Rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Xt(O)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const Yt=_t[Rt];nt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Kt=c.convert(Yt.format,Yt.colorSpace),Et=c.convert(Yt.type),Lt=U(Yt.internalFormat,Kt,Et,Yt.colorSpace,O.isXRRenderTarget===!0),Jt=ke(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Lt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(nt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){n.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),yt(r.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Mt(nt.__webglFramebuffer[Rt][Yt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else Mt(nt.__webglFramebuffer[Rt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Bt){for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const Kt=_t[Rt],Et=a.get(Kt);let Lt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Et.__webglTexture),yt(Lt,Kt),Mt(nt.__webglFramebuffer,O,Kt,r.COLOR_ATTACHMENT0+Rt,Lt,0),y(Kt)&&v(Lt)}n.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Rt,dt.__webglTexture),yt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Mt(nt.__webglFramebuffer[Yt],O,T,r.COLOR_ATTACHMENT0,Rt,Yt);else Mt(nt.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Rt,0);y(T)&&v(Rt),n.unbindTexture()}O.depthBuffer&&le(O)}function Te(O){const T=O.textures;for(let nt=0,dt=T.length;nt<dt;nt++){const _t=T[nt];if(y(_t)){const ut=L(O),Bt=a.get(_t).__webglTexture;n.bindTexture(ut,Bt),v(ut),n.unbindTexture()}}}const oe=[],ae=[];function zt(O){if(O.samples>0){if(Xt(O)===!1){const T=O.textures,nt=O.width,dt=O.height;let _t=r.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=a.get(O),Rt=T.length>1;if(Rt)for(let Kt=0;Kt<T.length;Kt++)n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Yt=O.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Kt]);const Et=a.get(T[Kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,_t,r.NEAREST),m===!0&&(oe.length=0,ae.length=0,oe.push(r.COLOR_ATTACHMENT0+Kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(oe.push(ut),ae.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Kt=0;Kt<T.length;Kt++){n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Kt]);const Et=a.get(T[Kt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,Et,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ke(O){return Math.min(o.maxSamples,O.samples)}function Xt(O){const T=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Ke(O,T){const nt=O.colorSpace,dt=O.format,_t=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==kr&&nt!==Ja&&(Re.getTransfer(nt)===Be?(dt!==wi||_t!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ct,this.resetTextureUnits=it,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=Ze,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Xt}function v2(r,t){function n(a,o=Ja){let c;const f=Re.getTransfer(o);if(a===ki)return r.UNSIGNED_BYTE;if(a===Rp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Cp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===mx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===gx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===dx)return r.BYTE;if(a===px)return r.SHORT;if(a===sl)return r.UNSIGNED_SHORT;if(a===wp)return r.INT;if(a===Ns)return r.UNSIGNED_INT;if(a===da)return r.FLOAT;if(a===ga)return r.HALF_FLOAT;if(a===_x)return r.ALPHA;if(a===vx)return r.RGB;if(a===wi)return r.RGBA;if(a===ol)return r.DEPTH_COMPONENT;if(a===ll)return r.DEPTH_STENCIL;if(a===xx)return r.RED;if(a===Dp)return r.RED_INTEGER;if(a===yx)return r.RG;if(a===Up)return r.RG_INTEGER;if(a===Np)return r.RGBA_INTEGER;if(a===ru||a===ou||a===lu||a===cu)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fd||a===Hd||a===Vd||a===Gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kd||a===jd||a===Xd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===kd||a===jd)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Xd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wd||a===qd||a===Yd||a===Zd||a===Kd||a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===sp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Wd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Kd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Qd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Jd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$d)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===tp)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ep)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===np)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ip)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ap)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===sp)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rp||a===op||a===lp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===rp)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cp||a===up||a===fp||a===hp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===hp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===rl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new zx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Kn({vertexShader:x2,fragmentShader:y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Au(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b2 extends Os{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,d=null,g=null,_=null,x=null,S=null,M=null;const E=typeof XRWebGLBinding<"u",y=new S2,v={},L=n.getContextAttributes();let U=null,R=null;const z=[],H=[],V=new qt;let q=null;const D=new kn;D.viewport=new He;const N=new kn;N.viewport=new He;const G=[D,N],it=new GT;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ht=z[W];return ht===void 0&&(ht=new ld,z[W]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(W){let ht=z[W];return ht===void 0&&(ht=new ld,z[W]=ht),ht.getGripSpace()},this.getHand=function(W){let ht=z[W];return ht===void 0&&(ht=new ld,z[W]=ht),ht.getHandSpace()};function ft(W){const ht=H.indexOf(W.inputSource);if(ht===-1)return;const Mt=z[ht];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,d||f),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function I(){o.removeEventListener("select",ft),o.removeEventListener("selectstart",ft),o.removeEventListener("selectend",ft),o.removeEventListener("squeeze",ft),o.removeEventListener("squeezestart",ft),o.removeEventListener("squeezeend",ft),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",Q);for(let W=0;W<z.length;W++){const ht=H[W];ht!==null&&(H[W]=null,z[W].disconnect(ht))}ct=null,gt=null,y.reset();for(const W in v)delete v[W];t.setRenderTarget(U),S=null,x=null,_=null,o=null,R=null,Ft.stop(),a.isPresenting=!1,t.setPixelRatio(q),t.setSize(V.width,V.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",ft),o.addEventListener("selectstart",ft),o.addEventListener("selectend",ft),o.addEventListener("squeeze",ft),o.addEventListener("squeezestart",ft),o.addEventListener("squeezeend",ft),o.addEventListener("end",I),o.addEventListener("inputsourceschange",Q),L.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,jt=null,Gt=null;L.depth&&(Gt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=L.stencil?ll:ol,jt=L.stencil?rl:Ns);const le={colorFormat:n.RGBA8,depthFormat:Gt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(le),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),R=new Ci(x.textureWidth,x.textureHeight,{format:wi,type:ki,depthTexture:new Ox(x.textureWidth,x.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Mt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Ci(S.framebufferWidth,S.framebufferHeight,{format:wi,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await o.requestReferenceSpace(h),Ft.setContext(o),Ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(W){for(let ht=0;ht<W.removed.length;ht++){const Mt=W.removed[ht],jt=H.indexOf(Mt);jt>=0&&(H[jt]=null,z[jt].disconnect(Mt))}for(let ht=0;ht<W.added.length;ht++){const Mt=W.added[ht];let jt=H.indexOf(Mt);if(jt===-1){for(let le=0;le<z.length;le++)if(le>=H.length){H.push(Mt),jt=le;break}else if(H[le]===null){H[le]=Mt,jt=le;break}if(jt===-1)break}const Gt=z[jt];Gt&&Gt.connect(Mt)}}const Z=new j,St=new j;function P(W,ht,Mt){Z.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(Mt.matrixWorld);const jt=Z.distanceTo(St),Gt=ht.projectionMatrix.elements,le=Mt.projectionMatrix.elements,Ze=Gt[14]/(Gt[10]-1),F=Gt[14]/(Gt[10]+1),Te=(Gt[9]+1)/Gt[5],oe=(Gt[9]-1)/Gt[5],ae=(Gt[8]-1)/Gt[0],zt=(le[8]+1)/le[0],ke=Ze*ae,Xt=Ze*zt,ce=jt/(-ae+zt),Ke=ce*-ae;if(ht.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ke),W.translateZ(ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Gt[10]===-1)W.projectionMatrix.copy(ht.projectionMatrix),W.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Qe=Ze+ce,O=F+ce,T=ke-Ke,nt=Xt+(jt-Ke),dt=Te*F/O*Qe,_t=oe*F/O*Qe;W.projectionMatrix.makePerspective(T,nt,dt,_t,Qe,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function tt(W,ht){ht===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ht.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let ht=W.near,Mt=W.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),it.near=N.near=D.near=ht,it.far=N.far=D.far=Mt,(ct!==it.near||gt!==it.far)&&(o.updateRenderState({depthNear:it.near,depthFar:it.far}),ct=it.near,gt=it.far),it.layers.mask=W.layers.mask|6,D.layers.mask=it.layers.mask&3,N.layers.mask=it.layers.mask&5;const jt=W.parent,Gt=it.cameras;tt(it,jt);for(let le=0;le<Gt.length;le++)tt(Gt[le],jt);Gt.length===2?P(it,D,N):it.projectionMatrix.copy(D.projectionMatrix),yt(W,it,jt)};function yt(W,ht,Mt){Mt===null?W.matrix.copy(ht.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ht.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ht.projectionMatrix),W.projectionMatrixInverse.copy(ht.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=pp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(W){return v[W]};let bt=null;function Ut(W,ht){if(g=ht.getViewerPose(d||f),M=ht,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let jt=!1;Mt.length!==it.cameras.length&&(it.cameras.length=0,jt=!0);for(let F=0;F<Mt.length;F++){const Te=Mt[F];let oe=null;if(S!==null)oe=S.getViewport(Te);else{const zt=_.getViewSubImage(x,Te);oe=zt.viewport,F===0&&(t.setRenderTargetTextures(R,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(R))}let ae=G[F];ae===void 0&&(ae=new kn,ae.layers.enable(F),ae.viewport=new He,G[F]=ae),ae.matrix.fromArray(Te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(oe.x,oe.y,oe.width,oe.height),F===0&&(it.matrix.copy(ae.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),jt===!0&&it.cameras.push(ae)}const Gt=o.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){_=a.getBinding();const F=_.getDepthInformation(Mt[0]);F&&F.isValid&&F.texture&&y.init(F,o.renderState)}if(Gt&&Gt.includes("camera-access")&&E){t.state.unbindTexture(),_=a.getBinding();for(let F=0;F<Mt.length;F++){const Te=Mt[F].camera;if(Te){let oe=v[Te];oe||(oe=new zx,v[Te]=oe);const ae=_.getCameraImage(Te);oe.sourceTexture=ae}}}}for(let Mt=0;Mt<z.length;Mt++){const jt=H[Mt],Gt=z[Mt];jt!==null&&Gt!==void 0&&Gt.update(jt,ht,d||f)}bt&&bt(W,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),M=null}const Ft=new Hx;Ft.setAnimationLoop(Ut),this.setAnimationLoop=function(W){bt=W},this.dispose=function(){}}}const Ts=new ji,M2=new We;function E2(r,t){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function a(y,v){v.color.getRGB(y.fogColor.value,Cx(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,L,U,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(c(y,v),M(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),E(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,L,U):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=t.get(v),U=L.envMap,R=L.envMapRotation;U&&(y.envMap.value=U,Ts.copy(R),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),y.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Ts)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const L=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function T2(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const R=U.program;a.uniformBlockBinding(L,R)}function d(L,U){let R=o[L.id];R===void 0&&(M(L),R=g(L),o[L.id]=R,L.addEventListener("dispose",y));const z=U.program;a.updateUBOMapping(L,z);const H=t.render.frame;c[L.id]!==H&&(x(L),c[L.id]=H)}function g(L){const U=_();L.__bindingPointIndex=U;const R=r.createBuffer(),z=L.__size,H=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,z,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,R),R}function _(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=o[L.id],R=L.uniforms,z=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let H=0,V=R.length;H<V;H++){const q=Array.isArray(R[H])?R[H]:[R[H]];for(let D=0,N=q.length;D<N;D++){const G=q[D];if(S(G,H,D,z)===!0){const it=G.__offset,ct=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<ct.length;ft++){const I=ct[ft],Q=E(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,it+gt,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,gt),gt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,U,R,z){const H=L.value,V=U+"_"+R;if(z[V]===void 0)return typeof H=="number"||typeof H=="boolean"?z[V]=H:z[V]=H.clone(),!0;{const q=z[V];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return z[V]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function M(L){const U=L.uniforms;let R=0;const z=16;for(let V=0,q=U.length;V<q;V++){const D=Array.isArray(U[V])?U[V]:[U[V]];for(let N=0,G=D.length;N<G;N++){const it=D[N],ct=Array.isArray(it.value)?it.value:[it.value];for(let gt=0,ft=ct.length;gt<ft;gt++){const I=ct[gt],Q=E(I),Z=R%z,St=Z%Q.boundary,P=Z+St;R+=St,P!==0&&z-P<Q.storage&&(R+=z-P),it.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=R,R+=Q.storage}}}const H=R%z;return H>0&&(R+=z-H),L.__size=R,L.__cache={},this}function E(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const R=f.indexOf(U.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);f=[],o={},c={}}return{bind:m,update:d,dispose:v}}class Hp{constructor(t={}){const{canvas:n=nT(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let z=!1;this._outputColorSpace=_i;let H=0,V=0,q=null,D=-1,N=null;const G=new He,it=new He;let ct=null;const gt=new ve(0);let ft=0,I=n.width,Q=n.height,Z=1,St=null,P=null;const tt=new He(0,0,I,Q),yt=new He(0,0,I,Q);let bt=!1;const Ut=new Op;let Ft=!1,W=!1;const ht=new We,Mt=new j,jt=new He,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ze(){return q===null?Z:1}let F=a;function Te(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const Y="webgl2";if(F=Te(Y,w),F===null)throw Te(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,ae,zt,ke,Xt,ce,Ke,Qe,O,T,nt,dt,_t,ut,Bt,Rt,Yt,Kt,Et,Lt,Jt,Wt,Dt,ue;function X(){oe=new zw(F),oe.init(),Wt=new v2(F,oe),ae=new Cw(F,oe,t,Wt),zt=new g2(F,oe),ae.reversedDepthBuffer&&x&&zt.buffers.depth.setReversed(!0),ke=new Fw(F),Xt=new i2,ce=new _2(F,oe,zt,Xt,ae,Wt,ke),Ke=new Uw(R),Qe=new Ow(R),O=new XT(F),Dt=new ww(F,O),T=new Bw(F,O,ke,Dt),nt=new Vw(F,T,O,ke),Et=new Hw(F,ae,ce),Rt=new Dw(Xt),dt=new n2(R,Ke,Qe,oe,ae,Dt,Rt),_t=new E2(R,Xt),ut=new s2,Bt=new f2(oe),Kt=new Aw(R,Ke,Qe,zt,nt,S,m),Yt=new p2(R,nt,ae),ue=new T2(F,ke,ae,zt),Lt=new Rw(F,oe,ke),Jt=new Iw(F,oe,ke),ke.programs=dt.programs,R.capabilities=ae,R.extensions=oe,R.properties=Xt,R.renderLists=ut,R.shadowMap=Yt,R.state=zt,R.info=ke}X();const wt=new b2(R,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(I,Q,!1))},this.getSize=function(w){return w.set(I,Q)},this.setSize=function(w,Y,ot=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,Q=Y,n.width=Math.floor(w*Z),n.height=Math.floor(Y*Z),ot===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(I*Z,Q*Z).floor()},this.setDrawingBufferSize=function(w,Y,ot){I=w,Q=Y,Z=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,Y,ot,lt){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,Y,ot,lt),zt.viewport(G.copy(tt).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,Y,ot,lt){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,Y,ot,lt),zt.scissor(it.copy(yt).multiplyScalar(Z).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(w){zt.setScissorTest(bt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ot=!0){let lt=0;if(w){let J=!1;if(q!==null){const At=q.texture.format;J=At===Np||At===Up||At===Dp}if(J){const At=q.texture.type,Nt=At===ki||At===Ns||At===sl||At===rl||At===Rp||At===Cp,Ht=Kt.getClearColor(),Pt=Kt.getClearAlpha(),te=Ht.r,ne=Ht.g,Zt=Ht.b;Nt?(M[0]=te,M[1]=ne,M[2]=Zt,M[3]=Pt,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=te,E[1]=ne,E[2]=Zt,E[3]=Pt,F.clearBufferiv(F.COLOR,0,E))}else lt|=F.COLOR_BUFFER_BIT}Y&&(lt|=F.DEPTH_BUFFER_BIT),ot&&(lt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),Kt.dispose(),ut.dispose(),Bt.dispose(),Xt.dispose(),Ke.dispose(),Qe.dispose(),nt.dispose(),Dt.dispose(),ue.dispose(),dt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",fn),wt.removeEventListener("sessionend",hn),tn.stop()};function Ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const w=ke.autoReset,Y=Yt.enabled,ot=Yt.autoUpdate,lt=Yt.needsUpdate,J=Yt.type;X(),ke.autoReset=w,Yt.enabled=Y,Yt.autoUpdate=ot,Yt.needsUpdate=lt,Yt.type=J}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const Y=w.target;Y.removeEventListener("dispose",xt),kt(Y)}function kt(w){re(w),Xt.remove(w)}function re(w){const Y=Xt.get(w).programs;Y!==void 0&&(Y.forEach(function(ot){dt.releaseProgram(ot)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ot,lt,J,At){Y===null&&(Y=Gt);const Nt=J.isMesh&&J.matrixWorld.determinant()<0,Ht=Sa(w,Y,ot,lt,J);zt.setMaterial(lt,Nt);let Pt=ot.index,te=1;if(lt.wireframe===!0){if(Pt=T.getWireframeAttribute(ot),Pt===void 0)return;te=2}const ne=ot.drawRange,Zt=ot.attributes.position;let de=ne.start*te,Ae=(ne.start+ne.count)*te;At!==null&&(de=Math.max(de,At.start*te),Ae=Math.min(Ae,(At.start+At.count)*te)),Pt!==null?(de=Math.max(de,0),Ae=Math.min(Ae,Pt.count)):Zt!=null&&(de=Math.max(de,0),Ae=Math.min(Ae,Zt.count));const qe=Ae-de;if(qe<0||qe===1/0)return;Dt.setup(J,lt,Ht,ot,Pt);let Le,pe=Lt;if(Pt!==null&&(Le=O.get(Pt),pe=Jt,pe.setIndex(Le)),J.isMesh)lt.wireframe===!0?(zt.setLineWidth(lt.wireframeLinewidth*Ze()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(J.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),zt.setLineWidth($t*Ze()),J.isLineSegments?pe.setMode(F.LINES):J.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else J.isPoints?pe.setMode(F.POINTS):J.isSprite&&pe.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ul("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $t=J._multiDrawStarts,Xe=J._multiDrawCounts,xe=J._multiDrawCount,Dn=Pt?O.get(Pt).bytesPerElement:1,yi=Xt.get(lt).currentProgram.getUniforms();for(let In=0;In<xe;In++)yi.setValue(F,"_gl_DrawID",In),pe.render($t[In]/Dn,Xe[In])}else if(J.isInstancedMesh)pe.renderInstances(de,qe,J.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,$t);pe.renderInstances(de,qe,Xe)}else pe.render(de,qe)};function De(w,Y,ot){w.transparent===!0&&w.side===Ii&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Ui(w,Y,ot),w.side=es,w.needsUpdate=!0,Ui(w,Y,ot),w.side=Ii):Ui(w,Y,ot)}this.compile=function(w,Y,ot=null){ot===null&&(ot=w),v=Bt.get(ot),v.init(Y),U.push(v),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),w!==ot&&w.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights();const lt=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){const Ht=At[Nt];De(Ht,ot,J),lt.add(Ht)}else De(At,ot,J),lt.add(At)}),v=U.pop(),lt},this.compileAsync=function(w,Y,ot=null){const lt=this.compile(w,Y,ot);return new Promise(J=>{function At(){if(lt.forEach(function(Nt){Xt.get(Nt).currentProgram.isReady()&&lt.delete(Nt)}),lt.size===0){J(w);return}setTimeout(At,10)}oe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ee=null;function xi(w){Ee&&Ee(w)}function fn(){tn.stop()}function hn(){tn.start()}const tn=new Hx;tn.setAnimationLoop(xi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){Ee=w,wt.setAnimationLoop(w),w===null?tn.stop():tn.start()},wt.addEventListener("sessionstart",fn),wt.addEventListener("sessionend",hn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Y),Y=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Y,q),v=Bt.get(w,U.length),v.init(Y),U.push(v),ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ut.setFromProjectionMatrix(ht,Vi,Y.reversedDepth),W=this.localClippingEnabled,Ft=Rt.init(this.clippingPlanes,W),y=ut.get(w,L.length),y.init(),L.push(y),wt.enabled===!0&&wt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&Di(At,Y,-1/0,R.sortObjects)}Di(w,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(St,P),le=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,le&&Kt.addToRenderList(y,w),this.info.render.frame++,Ft===!0&&Rt.beginShadows();const ot=v.state.shadowsArray;Yt.render(ot,w,Y),Ft===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,J=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(J.length>0)for(let Nt=0,Ht=At.length;Nt<Ht;Nt++){const Pt=At[Nt];xl(lt,J,w,Pt)}le&&Kt.render(w);for(let Nt=0,Ht=At.length;Nt<Ht;Nt++){const Pt=At[Nt];zs(y,w,Pt,Pt.viewport)}}else J.length>0&&xl(lt,J,w,Y),le&&Kt.render(w),zs(y,w,Y);q!==null&&V===0&&(ce.updateMultisampleRenderTarget(q),ce.updateRenderTargetMipmap(q)),w.isScene===!0&&w.onAfterRender(R,w,Y),Dt.resetDefaultState(),D=-1,N=null,U.pop(),U.length>0?(v=U[U.length-1],Ft===!0&&Rt.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Di(w,Y,ot,lt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ut.intersectsSprite(w)){lt&&jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const Nt=nt.update(w),Ht=w.material;Ht.visible&&y.push(w,Nt,Ht,ot,jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ut.intersectsObject(w))){const Nt=nt.update(w),Ht=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),jt.copy(w.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),jt.copy(Nt.boundingSphere.center)),jt.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(Ht)){const Pt=Nt.groups;for(let te=0,ne=Pt.length;te<ne;te++){const Zt=Pt[te],de=Ht[Zt.materialIndex];de&&de.visible&&y.push(w,Nt,de,ot,jt.z,Zt)}}else Ht.visible&&y.push(w,Nt,Ht,ot,jt.z,null)}}const At=w.children;for(let Nt=0,Ht=At.length;Nt<Ht;Nt++)Di(At[Nt],Y,ot,lt)}function zs(w,Y,ot,lt){const J=w.opaque,At=w.transmissive,Nt=w.transparent;v.setupLightsView(ot),Ft===!0&&Rt.setGlobalState(R.clippingPlanes,ot),lt&&zt.viewport(G.copy(lt)),J.length>0&&Bs(J,Y,ot),At.length>0&&Bs(At,Y,ot),Nt.length>0&&Bs(Nt,Y,ot),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function xl(w,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[lt.id]===void 0&&(v.state.transmissionRenderTarget[lt.id]=new Ci(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ga:ki,minFilter:Ds,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const At=v.state.transmissionRenderTarget[lt.id],Nt=lt.viewport||G;At.setSize(Nt.z*R.transmissionResolutionScale,Nt.w*R.transmissionResolutionScale);const Ht=R.getRenderTarget(),Pt=R.getActiveCubeFace(),te=R.getActiveMipmapLevel();R.setRenderTarget(At),R.getClearColor(gt),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),le&&Kt.render(ot);const ne=R.toneMapping;R.toneMapping=$a;const Zt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),v.setupLightsView(lt),Ft===!0&&Rt.setGlobalState(R.clippingPlanes,lt),Bs(w,ot,lt),ce.updateMultisampleRenderTarget(At),ce.updateRenderTargetMipmap(At),oe.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ae=0,qe=Y.length;Ae<qe;Ae++){const Le=Y[Ae],pe=Le.object,$t=Le.geometry,Xe=Le.material,xe=Le.group;if(Xe.side===Ii&&pe.layers.test(lt.layers)){const Dn=Xe.side;Xe.side=Qn,Xe.needsUpdate=!0,Zr(pe,ot,lt,$t,Xe,xe),Xe.side=Dn,Xe.needsUpdate=!0,de=!0}}de===!0&&(ce.updateMultisampleRenderTarget(At),ce.updateRenderTargetMipmap(At))}R.setRenderTarget(Ht,Pt,te),R.setClearColor(gt,ft),Zt!==void 0&&(lt.viewport=Zt),R.toneMapping=ne}function Bs(w,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,At=w.length;J<At;J++){const Nt=w[J],Ht=Nt.object,Pt=Nt.geometry,te=Nt.group;let ne=Nt.material;ne.allowOverride===!0&&lt!==null&&(ne=lt),Ht.layers.test(ot.layers)&&Zr(Ht,Y,ot,Pt,ne,te)}}function Zr(w,Y,ot,lt,J,At){w.onBeforeRender(R,Y,ot,lt,J,At),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(R,Y,ot,lt,w,At),J.transparent===!0&&J.side===Ii&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,R.renderBufferDirect(ot,Y,lt,J,w,At),J.side=es,J.needsUpdate=!0,R.renderBufferDirect(ot,Y,lt,J,w,At),J.side=Ii):R.renderBufferDirect(ot,Y,lt,J,w,At),w.onAfterRender(R,Y,ot,lt,J,At)}function Ui(w,Y,ot){Y.isScene!==!0&&(Y=Gt);const lt=Xt.get(w),J=v.state.lights,At=v.state.shadowsArray,Nt=J.state.version,Ht=dt.getParameters(w,J.state,At,Y,ot),Pt=dt.getProgramCacheKey(Ht);let te=lt.programs;lt.environment=w.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(w.isMeshStandardMaterial?Qe:Ke).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",xt),te=new Map,lt.programs=te);let ne=te.get(Pt);if(ne!==void 0){if(lt.currentProgram===ne&&lt.lightsStateVersion===Nt)return Wi(w,Ht),ne}else Ht.uniforms=dt.getUniforms(w),w.onBeforeCompile(Ht,R),ne=dt.acquireProgram(Ht,Pt),te.set(Pt,ne),lt.uniforms=Ht.uniforms;const Zt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Rt.uniform),Wi(w,Ht),lt.needsLights=ba(w),lt.lightsStateVersion=Nt,lt.needsLights&&(Zt.ambientLightColor.value=J.state.ambient,Zt.lightProbe.value=J.state.probe,Zt.directionalLights.value=J.state.directional,Zt.directionalLightShadows.value=J.state.directionalShadow,Zt.spotLights.value=J.state.spot,Zt.spotLightShadows.value=J.state.spotShadow,Zt.rectAreaLights.value=J.state.rectArea,Zt.ltc_1.value=J.state.rectAreaLTC1,Zt.ltc_2.value=J.state.rectAreaLTC2,Zt.pointLights.value=J.state.point,Zt.pointLightShadows.value=J.state.pointShadow,Zt.hemisphereLights.value=J.state.hemi,Zt.directionalShadowMap.value=J.state.directionalShadowMap,Zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Zt.spotShadowMap.value=J.state.spotShadowMap,Zt.spotLightMatrix.value=J.state.spotLightMatrix,Zt.spotLightMap.value=J.state.spotLightMap,Zt.pointShadowMap.value=J.state.pointShadowMap,Zt.pointShadowMatrix.value=J.state.pointShadowMatrix),lt.currentProgram=ne,lt.uniformsList=null,ne}function Is(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=fu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Wi(w,Y){const ot=Xt.get(w);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function Sa(w,Y,ot,lt,J){Y.isScene!==!0&&(Y=Gt),ce.resetTextureUnits();const At=Y.fog,Nt=lt.isMeshStandardMaterial?Y.environment:null,Ht=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:kr,Pt=(lt.isMeshStandardMaterial?Qe:Ke).get(lt.envMap||Nt),te=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Zt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let qe=$a;lt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qe=R.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pe=Le!==void 0?Le.length:0,$t=Xt.get(lt),Xe=v.state.lights;if(Ft===!0&&(W===!0||w!==N)){const en=w===N&&lt.id===D;Rt.setState(lt,w,en)}let xe=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Xe.state.version||$t.outputColorSpace!==Ht||J.isBatchedMesh&&$t.batching===!1||!J.isBatchedMesh&&$t.batching===!0||J.isBatchedMesh&&$t.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$t.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$t.instancing===!1||!J.isInstancedMesh&&$t.instancing===!0||J.isSkinnedMesh&&$t.skinning===!1||!J.isSkinnedMesh&&$t.skinning===!0||J.isInstancedMesh&&$t.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$t.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$t.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$t.instancingMorph===!1&&J.morphTexture!==null||$t.envMap!==Pt||lt.fog===!0&&$t.fog!==At||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Rt.numPlanes||$t.numIntersection!==Rt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ne||$t.morphTargets!==Zt||$t.morphNormals!==de||$t.morphColors!==Ae||$t.toneMapping!==qe||$t.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,$t.__version=lt.version);let Dn=$t.currentProgram;xe===!0&&(Dn=Ui(lt,Y,J));let yi=!1,In=!1,vn=!1;const Ve=Dn.getUniforms(),Fn=$t.uniforms;if(zt.useProgram(Dn.program)&&(yi=!0,In=!0,vn=!0),lt.id!==D&&(D=lt.id,In=!0),yi||N!==w){zt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ve.setValue(F,"projectionMatrix",w.projectionMatrix),Ve.setValue(F,"viewMatrix",w.matrixWorldInverse);const En=Ve.map.cameraPosition;En!==void 0&&En.setValue(F,Mt.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,In=!0,vn=!0)}if(J.isSkinnedMesh){Ve.setOptional(F,J,"bindMatrix"),Ve.setOptional(F,J,"bindMatrixInverse");const en=J.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ve.setValue(F,"boneTexture",en.boneTexture,ce))}J.isBatchedMesh&&(Ve.setOptional(F,J,"batchingTexture"),Ve.setValue(F,"batchingTexture",J._matricesTexture,ce),Ve.setOptional(F,J,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",J._indirectTexture,ce),Ve.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",J._colorsTexture,ce));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Et.update(J,ot,Dn),(In||$t.receiveShadow!==J.receiveShadow)&&($t.receiveShadow=J.receiveShadow,Ve.setValue(F,"receiveShadow",J.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Fn.envMap.value=Pt,Fn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Fn.envMapIntensity.value=Y.environmentIntensity),In&&(Ve.setValue(F,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&is(Fn,vn),At&&lt.fog===!0&&_t.refreshFogUniforms(Fn,At),_t.refreshMaterialUniforms(Fn,lt,Z,Q,v.state.transmissionRenderTarget[w.id]),fu.upload(F,Is($t),Fn,ce)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(fu.upload(F,Is($t),Fn,ce),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ve.setValue(F,"center",J.center),Ve.setValue(F,"modelViewMatrix",J.modelViewMatrix),Ve.setValue(F,"normalMatrix",J.normalMatrix),Ve.setValue(F,"modelMatrix",J.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let En=0,Fs=en.length;En<Fs;En++){const jn=en[En];ue.update(jn,Dn),ue.bind(jn,Dn)}}return Dn}function is(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ba(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Y,ot){const lt=Xt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Xt.get(w.texture).__webglTexture=Y,Xt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ot=Xt.get(w);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const on=F.createFramebuffer();this.setRenderTarget=function(w,Y=0,ot=0){q=w,H=Y,V=ot;let lt=!0,J=null,At=!1,Nt=!1;if(w){const Pt=Xt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),lt=!1;else if(Pt.__webglFramebuffer===void 0)ce.setupRenderTarget(w);else if(Pt.__hasExternalTextures)ce.rebindTextures(w,Xt.get(w.texture).__webglTexture,Xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Zt=w.depthTexture;if(Pt.__boundDepthTexture!==Zt){if(Zt!==null&&Xt.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Nt=!0);const ne=Xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?J=ne[Y][ot]:J=ne[Y],At=!0):w.samples>0&&ce.useMultisampledRTT(w)===!1?J=Xt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?J=ne[ot]:J=ne,G.copy(w.viewport),it.copy(w.scissor),ct=w.scissorTest}else G.copy(tt).multiplyScalar(Z).floor(),it.copy(yt).multiplyScalar(Z).floor(),ct=bt;if(ot!==0&&(J=on),zt.bindFramebuffer(F.FRAMEBUFFER,J)&&lt&&zt.drawBuffers(w,J),zt.viewport(G),zt.scissor(it),zt.setScissorTest(ct),At){const Pt=Xt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,ot)}else if(Nt){const Pt=Y;for(let te=0;te<w.textures.length;te++){const ne=Xt.get(w.textures[te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+te,ne.__webglTexture,ot,Pt)}}else if(w!==null&&ot!==0){const Pt=Xt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(w,Y,ot,lt,J,At,Nt,Ht=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){zt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const te=w.textures[Ht],ne=te.format,Zt=te.type;if(!ae.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-lt&&ot>=0&&ot<=w.height-J&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ht),F.readPixels(Y,ot,lt,J,Wt.convert(ne),Wt.convert(Zt),At))}finally{const te=q!==null?Xt.get(q).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ot,lt,J,At,Nt,Ht=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(Y>=0&&Y<=w.width-lt&&ot>=0&&ot<=w.height-J){zt.bindFramebuffer(F.FRAMEBUFFER,Pt);const te=w.textures[Ht],ne=te.format,Zt=te.type;if(!ae.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ht),F.readPixels(Y,ot,lt,J,Wt.convert(ne),Wt.convert(Zt),0);const Ae=q!==null?Xt.get(q).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Ae);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iT(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(de),F.deleteSync(qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ot=0){const lt=Math.pow(2,-ot),J=Math.floor(w.image.width*lt),At=Math.floor(w.image.height*lt),Nt=Y!==null?Y.x:0,Ht=Y!==null?Y.y:0;ce.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,Nt,Ht,J,At),zt.unbindTexture()};const yl=F.createFramebuffer(),Sl=F.createFramebuffer();this.copyTextureToTexture=function(w,Y,ot=null,lt=null,J=0,At=null){At===null&&(J!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=J,J=0):At=0);let Nt,Ht,Pt,te,ne,Zt,de,Ae,qe;const Le=w.isCompressedTexture?w.mipmaps[At]:w.image;if(ot!==null)Nt=ot.max.x-ot.min.x,Ht=ot.max.y-ot.min.y,Pt=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,ne=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-J);Nt=Math.floor(Le.width*Un),Ht=Math.floor(Le.height*Un),w.isDataArrayTexture?Pt=Le.depth:w.isData3DTexture?Pt=Math.floor(Le.depth*Un):Pt=1,te=0,ne=0,Zt=0}lt!==null?(de=lt.x,Ae=lt.y,qe=lt.z):(de=0,Ae=0,qe=0);const pe=Wt.convert(Y.format),$t=Wt.convert(Y.type);let Xe;Y.isData3DTexture?(ce.setTexture3D(Y,0),Xe=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ce.setTexture2DArray(Y,0),Xe=F.TEXTURE_2D_ARRAY):(ce.setTexture2D(Y,0),Xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yi=F.getParameter(F.UNPACK_SKIP_PIXELS),In=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Ve=w.isDataArrayTexture||w.isData3DTexture,Fn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Un=Xt.get(w),en=Xt.get(Y),En=Xt.get(Un.__renderTarget),Fs=Xt.get(en.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,En.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let jn=0;jn<Pt;jn++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(w).__webglTexture,J,Zt+jn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(Y).__webglTexture,At,qe+jn)),F.blitFramebuffer(te,ne,Nt,Ht,de,Ae,Nt,Ht,F.DEPTH_BUFFER_BIT,F.NEAREST);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Xt.has(w)){const Un=Xt.get(w),en=Xt.get(Y);zt.bindFramebuffer(F.READ_FRAMEBUFFER,yl),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sl);for(let En=0;En<Pt;En++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,J,Zt+En):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,J),Fn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,At,qe+En):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,At),J!==0?F.blitFramebuffer(te,ne,Nt,Ht,de,Ae,Nt,Ht,F.COLOR_BUFFER_BIT,F.NEAREST):Fn?F.copyTexSubImage3D(Xe,At,de,Ae,qe+En,te,ne,Nt,Ht):F.copyTexSubImage2D(Xe,At,de,Ae,te,ne,Nt,Ht);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Xe,At,de,Ae,qe,Nt,Ht,Pt,pe,$t,Le.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,At,de,Ae,qe,Nt,Ht,Pt,pe,Le.data):F.texSubImage3D(Xe,At,de,Ae,qe,Nt,Ht,Pt,pe,$t,Le):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,de,Ae,Nt,Ht,pe,$t,Le.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,de,Ae,Le.width,Le.height,pe,Le.data):F.texSubImage2D(F.TEXTURE_2D,At,de,Ae,Nt,Ht,pe,$t,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yi),F.pixelStorei(F.UNPACK_SKIP_ROWS,In),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),At===0&&Y.generateMipmaps&&F.generateMipmap(Xe),zt.unbindTexture()},this.initRenderTarget=function(w){Xt.get(w).__webglFramebuffer===void 0&&ce.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ce.setTextureCube(w,0):w.isData3DTexture?ce.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ce.setTexture2DArray(w,0):ce.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){H=0,V=0,q=null,zt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}function A2(){const r=rt.useRef(null);return rt.useEffect(()=>{const t=r.current;if(!t)return;const n=new Pp,a=window.innerWidth,o=window.innerHeight,c=new kn(50,a/o,.1,1e3);c.position.z=12;const f=new Hp({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(a,o),t.appendChild(f.domElement);const h=document.createElement("canvas");h.width=1,h.height=256;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,256);d.addColorStop(0,"#000000"),d.addColorStop(.3,"#07121a"),d.addColorStop(.6,"#062f47"),d.addColorStop(1,"#000000"),m.fillStyle=d,m.fillRect(0,0,1,256),n.background=new _p(h);const g=new Ip(7270143,.45);n.add(g);const _=new Bp(43775,1,120);_.position.set(10,8,10),n.add(_);const x=new wu(3.2,.9,180,32),S=new Bx({color:54527,metalness:.7,roughness:.25,emissive:13124,emissiveIntensity:.6}),M=new oi(x,S);n.add(M);const E=new Ru,y=()=>{const L=E.getElapsedTime();M.rotation.x=L*.07,M.rotation.y=L*.12,f.render(n,c),requestAnimationFrame(y)};y();const v=()=>{const L=window.innerWidth,U=window.innerHeight;f.setSize(L,U),c.aspect=L/U,c.updateProjectionMatrix()};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),f.domElement&&t.contains(f.domElement)&&t.removeChild(f.domElement),f.dispose(),n.clear()}},[]),C.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,zIndex:-1,width:"100vw",height:"100vh"}})}const Fv={type:"change"},Vp={type:"start"},Xx={type:"end"},iu=new Eu,Hv=new Qa,w2=Math.cos(70*eT.DEG2RAD),mn=new j,Zn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6;class R2 extends kT{constructor(t,n=null){super(t,n),this.state=Fe.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ls,this._lastTargetPosition=new j,this._quat=new Ls().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dv,this._sphericalDelta=new dv,this._scale=1,this._panOffset=new j,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new j,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D2.bind(this),this._onPointerDown=C2.bind(this),this._onPointerUp=U2.bind(this),this._onContextMenu=I2.bind(this),this._onMouseWheel=P2.bind(this),this._onKeyDown=O2.bind(this),this._onTouchStart=z2.bind(this),this._onTouchMove=B2.bind(this),this._onMouseDown=N2.bind(this),this._onMouseMove=L2.bind(this),this._interceptControlDown=F2.bind(this),this._interceptControlUp=H2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fv),this.update(),this.state=Fe.NONE}update(t=null){const n=this.object.position;mn.copy(n).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Zn:a>Math.PI&&(a-=Zn),o<-Math.PI?o+=Zn:o>Math.PI&&(o-=Zn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),n.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=mn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(iu.origin.copy(this.object.position),iu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(iu.direction))<w2?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),iu.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(Fv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){mn.setFromMatrixColumn(n,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,n){this.screenSpacePanning===!0?mn.setFromMatrixColumn(n,1):(mn.setFromMatrixColumn(n,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;mn.copy(o).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new qt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function C2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function D2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function U2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xx),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function N2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Ir.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Ir.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Vp)}function L2(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function P2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xx))}function O2(r){this.enabled!==!1&&this._handleKeyDown(r)}function z2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Vp)}function B2(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function I2(r){this.enabled!==!1&&r.preventDefault()}function F2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _l{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V2=new Fx(-1,1,1,-1,0,1);class G2 extends Bn{constructor(){super(),this.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mn([0,2,0,0,2,0],2))}}const k2=new G2;class Wx{constructor(t){this._mesh=new oi(k2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class j2 extends _l{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Kn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gu.clone(t.uniforms),this.material=new Kn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wx(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vv extends _l{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class X2 extends _l{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class W2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new qt);this._width=a.width,this._height=a.height,n=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ga}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new j2(hu),this.copyPass.material.blending=ma,this.clock=new Ru}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),f.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Vv!==void 0&&(f instanceof Vv?a=!0:f instanceof X2&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q2 extends _l{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=o}}const Y2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xr extends _l{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Ci(c,f,{type:ga}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Ci(c,f,{type:ga});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const x=new Ci(c,f,{type:ga});x.texture.name="UnrealBloomPass.v"+g,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),f=Math.round(f/2)}const h=Y2;this.highPassUniforms=gu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new qt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gu.clone(hu.uniforms),this.blendMaterial=new Kn({uniforms:this.copyUniforms,vertexShader:hu.vertexShader,fragmentShader:hu.fragmentShader,blending:al,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new Tu,this._fsQuad=new Wx(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new qt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Xr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Xr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new Kn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Kn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xr.BlurDirectionX=new qt(1,0);Xr.BlurDirectionY=new qt(0,1);const Z2="/mon-portfolio/assets/circuits-BZt8kQWI.png",qx="/mon-portfolio/assets/js-DVFTxp9C.png",Yx="/mon-portfolio/assets/python-CbwtC9_z.png",Zx="/mon-portfolio/assets/react-CHdo91hT.svg",Kx="/mon-portfolio/assets/html-CIla5IkK.png",K2="/mon-portfolio/assets/css-DxTrXdMD.png",Qx="/mon-portfolio/assets/tailwind-B-Mi6gs0.png",Jx="/mon-portfolio/assets/laravel-CJl5yh9C.png",Q2="/mon-portfolio/assets/figma-CLB4g8il.png",J2="/mon-portfolio/assets/trello-BorPE63w.png",$2="/mon-portfolio/assets/moi-DuttbIuE.png";function tC(){const r=rt.useRef(null),t=()=>{const n=document.getElementById("about-me");n&&n.scrollIntoView({behavior:"smooth",block:"start"})};return rt.useEffect(()=>{const n=r.current;if(!n)return;const a=new Pp,o=document.createElement("canvas");o.width=1,o.height=256;const c=o.getContext("2d"),f=c.createLinearGradient(0,0,0,256);f.addColorStop(0,"#000000"),f.addColorStop(.4,"#0a1725"),f.addColorStop(.5,"#123b66"),f.addColorStop(.6,"#0a1725"),f.addColorStop(1,"#000000"),c.fillStyle=f,c.fillRect(0,0,1,256),a.background=new _p(o);const h=new kn(50,window.innerWidth/window.innerHeight,.1,2e3);h.position.set(0,0,14);const m=new Hp({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2));let d=5;const g=()=>{const W=n.clientWidth||window.innerWidth,ht=n.clientHeight||window.innerHeight;return W<480?d=2.5:W<768?d=3:W<1024?d=4:d=5,m.setSize(W,ht),h.aspect=W/ht,h.updateProjectionMatrix(),{width:W,height:ht}},{width:_,height:x}=g();n.appendChild(m.domElement);const S=new W2(m);S.setSize(_,x),S.addPass(new q2(a,h));const M=new Xr(new qt(_,x),.8,.35,.9);S.addPass(M),a.add(new Ip(2238771,.6));const E=new Bp(6742271,.5,100);E.position.set(-6,3,8),a.add(E);const y=new yu(d,128,128),v=new PT(y),L=new Px({color:3789567,transparent:!0,opacity:.9}),U=new LT(v,L),R=_<768?-2:-6;U.position.x=R,a.add(U);const z=new cv().load(Z2),H=new Tu({map:z,transparent:!0,opacity:.55,blending:al,depthWrite:!1,side:Ii}),V=new oi(new yu(d*1.02,128,128),H);V.position.x=R,a.add(V);const q=[qx,Yx,Zx,Kx,K2,Qx,Jx,Q2,J2],D=new el;D.position.x=R,a.add(D);const N=new cv;q.forEach((W,ht)=>{N.load(W,Mt=>{const jt=new Nx({map:Mt,transparent:!0,opacity:.7,depthWrite:!1,blending:Us}),Gt=new RT(jt),le=ht/q.length*Math.PI*2,Ze=d*1.2,F=Math.sin(le*1.4)*.7;Gt.position.set(Ze*Math.cos(le),F,Ze*Math.sin(le));const Te=_<768?1.2:1.6;Gt.scale.set(Te,Te,Te),D.add(Gt)})});function G(){const W=document.createElement("canvas");W.width=W.height=64;const ht=W.getContext("2d"),Mt=ht.createRadialGradient(32,32,0,32,32,32);return Mt.addColorStop(0,"rgba(255,255,255,1)"),Mt.addColorStop(.3,"rgba(180,255,255,0.7)"),Mt.addColorStop(1,"rgba(0,0,0,0)"),ht.fillStyle=Mt,ht.fillRect(0,0,64,64),new _p(W)}const it=_<768?800:1500,ct=new Float32Array(it*3);for(let W=0;W<it;W++){const ht=Math.random()*Math.PI*2,Mt=Math.acos(2*Math.random()-1),jt=8+Math.random()*5;ct[W*3+0]=jt*Math.sin(Mt)*Math.cos(ht),ct[W*3+1]=jt*Math.sin(Mt)*Math.sin(ht),ct[W*3+2]=jt*Math.cos(Mt)}const gt=new Bn;gt.setAttribute("position",new li(ct,3));const ft=new mp({size:.05,map:G(),transparent:!0,opacity:.7,blending:al,depthWrite:!1,color:6743807}),I=new rv(gt,ft);a.add(I);const Q=new Bn,Z=_<768?1500:3e3,St=new Float32Array(Z*3);for(let W=0;W<Z;W++){const ht=(Math.random()-.5)*2e3,Mt=(Math.random()-.5)*2e3,jt=(Math.random()-.5)*2e3;St.set([ht,Mt,jt],W*3)}Q.setAttribute("position",new li(St,3));const P=new mp({color:16777215,size:.7,transparent:!0,opacity:.8}),tt=new rv(Q,P);a.add(tt);const yt=new R2(h,m.domElement);yt.enableZoom=!0,yt.enableRotate=!1,yt.enablePan=!1;const bt=()=>{g(),S.setSize(n.clientWidth,n.clientHeight),M.setSize(n.clientWidth,n.clientHeight)};window.addEventListener("resize",bt);const Ut=new Ru,Ft=()=>{const W=Ut.getElapsedTime();U.rotation.y=W*.12,V.rotation.y=W*.1,D.rotation.y=W*.06,I.rotation.y=W*.015,tt.rotation.y=W*.002,S.render(),requestAnimationFrame(Ft)};return Ft(),()=>{window.removeEventListener("resize",bt),S.dispose(),m.dispose(),a.clear(),n.removeChild(m.domElement)}},[]),C.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"relative"},children:[C.jsx("div",{ref:r,style:{width:"100%",height:"100%"}}),C.jsx("div",{style:{position:"absolute",top:"10%",left:"-10%",width:"100%",height:"90%",background:"radial-gradient(circle at right center, rgba(0,150,255,0.3), transparent 70%)",borderTopRightRadius:"100% 100%",borderBottomRightRadius:"100% 100%",zIndex:0,pointerEvents:"none"}}),C.jsx("div",{className:"content-section",children:C.jsxs("div",{className:"content-container",children:[C.jsx("img",{src:$2,alt:"Moi",className:"profile-image"}),C.jsxs("h1",{className:"main-title",children:["DJOUELA ",C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 ",children:"TABEU"})," FLORA DOLORECE",C.jsx("div",{className:"scan-effect"})]}),C.jsx("p",{className:"description",children:"Développeuse passionnée, spécialisée en front-end, back-end et web design."}),C.jsx("button",{className:"spatial-btn",onClick:t,children:"En savoir plus"})]})}),C.jsx("style",{children:`
        /* Section de contenu responsive */
        .content-section {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: white;
          padding: 1rem;
          box-sizing: border-box;
        }

        .content-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          max-width: 100%;
        }

        /* Image de profil responsive */
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 30px rgba(0,150,255,0.6);
          opacity: 0;
          transform: rotateY(180deg) scale(0.5);
          animation: photoEntry 1s ease forwards;
        }

        /* Titre principal responsive */
        .main-title {
          font-size: clamp(1.2rem, 4vw, 2rem);
          font-weight: bold;
          line-height: 1.2;
          margin: 0;
          opacity: 0;
          transform: translateY(-30px);
          animation: nameEntry 0.8s ease forwards;
          animation-delay: 1.2s;
          max-width: 90%;
          word-break: break-word;
        }

        .gradient-text {
          background: linear-gradient(45deg, #00ffff, #0096ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: pulse 2s ease-in-out infinite alternate;
        }

        /* Description responsive */
        .description {
          text-align: center;
          max-width: 280px;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          line-height: 1.4;
          opacity: 0;
          transform: translateY(-20px);
          animation: descEntry 0.8s ease forwards;
          animation-delay: 2s;
          margin: 0;
        }

        /* Bouton spatial responsive */
        .spatial-btn {
          padding: clamp(0.5rem, 2vw, 0.7rem) clamp(1rem, 4vw, 1.7rem);
          border-radius: 10px;
          border: 1px solid rgba(0,150,255,0.5);
          background: rgba(0, 149, 255, 0.13);
          color: white;
          font-weight: bold;
          font-size: clamp(0.8rem, 2.5vw, 1rem);
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8);
          animation: btnEntry 0.6s ease forwards;
          animation-delay: 2.8s;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .spatial-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(0,255,255,0.5), rgba(0,150,255,0.2), rgba(0,255,255,0.5));
          transition: all 0.5s ease;
        }

        .spatial-btn:hover::before {
          left: 100%;
        }

        .spatial-btn:hover {
          transform: scale(1.05);
        }

        /* Responsive breakpoints */
        @media (max-width: 1024px) {
          .content-section {
            width: 60%;
            padding: 0.8rem;
          }
          
          .profile-image {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 768px) {
          .content-section {
            width: 100%;
            right: 0;
            padding: 1rem 2rem;
            justify-content: flex-start;
            padding-top: 15vh;
          }
          
          .profile-image {
            width: 140px;
            height: 140px;
          }

          .description {
            max-width: 90%;
          }
        }

        @media (max-width: 480px) {
          .content-section {
            padding: 1rem 1.5rem;
            padding-top: 20vh;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
          }

          .content-container {
            gap: 0.8rem;
          }
        }

        @media (max-width: 360px) {
          .content-section {
            padding: 1rem;
            padding-top: 15vh;
          }
          
          .profile-image {
            width: 100px;
            height: 100px;
          }
        }

        /* Animations */
        @keyframes photoEntry {
          0% { opacity: 0; transform: rotateY(180deg) scale(0.5); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }

        @keyframes nameEntry {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes descEntry {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes btnEntry {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
          0% { opacity: 1; }
          100% { opacity: 0.7; }
        }

        .scan-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
          transform: translateX(-100%);
          animation: scan 3s ease-in-out infinite;
        }

        @keyframes scan {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `})]})}function eC(){const r=rt.useRef(null);return rt.useEffect(()=>{const t=r.current;if(!t)return;const n=new Pp,a=t.clientWidth||window.innerWidth,o=t.clientHeight||window.innerHeight,c=new kn(50,a/o,.1,1e3);c.position.z=12;const f=new Hp({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(a,o),f.setClearColor(0,0),t.appendChild(f.domElement);const h=new Ip(7270143,.45);n.add(h);const m=new Bp(43775,1,120);m.position.set(10,8,10),n.add(m);const d=new wu(3.2,.9,180,32),g=new Bx({color:54527,metalness:.7,roughness:.25,emissive:13124,emissiveIntensity:.6}),_=new oi(d,g);n.add(_);const x=new Ru,S=()=>{const E=x.getElapsedTime();_.rotation.x=E*.07,_.rotation.y=E*.12,f.render(n,c),requestAnimationFrame(S)};S();const M=()=>{const E=t.clientWidth||window.innerWidth,y=t.clientHeight||window.innerHeight;f.setSize(E,y),c.aspect=E/y,c.updateProjectionMatrix()};return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),f.domElement&&t.contains(f.domElement)&&t.removeChild(f.domElement),f.dispose(),n.clear()}},[]),C.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",color:"white"},children:[C.jsx("div",{ref:r,style:{width:"100%",height:"100%"}}),C.jsxs("div",{className:"about-card",children:[C.jsxs("h1",{className:"about-title",children:["À ",C.jsx("span",{className:"gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse",children:"PROPOS"})," DE MOI",C.jsx("div",{className:"scan-effect"})]}),C.jsx("div",{className:"separator-line"}),C.jsx("h1",{className:"name",children:"DJOUELA TABEU Flora Dolorece"}),C.jsx("h2",{className:"role",children:"Étudiante | Web Designer | Développeuse Web & Mobile | Experte WordPress"}),C.jsxs("div",{className:"content",children:[C.jsxs("p",{children:["Actuellement ",C.jsx("strong",{children:"à la recherche d'un stage de 6 mois"}),", je suis passionnée par le numérique. Curieuse et rigoureuse, je conçois des solutions digitales modernes et accessibles, avec une réelle sensibilité à l'expérience utilisateur."]}),C.jsxs("p",{children:["J'utilise des technologies comme"," ",C.jsx("strong",{children:"HTML, CSS, JavaScript, PHP, Python"}),", ainsi que des outils de conception comme ",C.jsx("strong",{children:"Figma"})," et de gestion de projet comme ",C.jsx("strong",{children:"Trello"}),"."]}),C.jsxs("div",{className:"languages-section",children:[C.jsx("h4",{className:"languages-title",children:"Langues"}),C.jsxs("div",{className:"languages-grid",children:[C.jsxs("div",{className:"language-item",children:[C.jsx("span",{className:"language-name",children:"🇫🇷 Français"}),C.jsx("span",{className:"language-level native",children:"Langue Maternelle"})]}),C.jsxs("div",{className:"language-item",children:[C.jsx("span",{className:"language-name",children:"En Anglais"}),C.jsx("span",{className:"language-level intermediate",children:"Niveau B2"})]})]})]})]})]}),C.jsx("style",{children:`
               .gradient-text {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `})]})}const nC="/mon-portfolio/assets/flutter-BNaz_EN0.png",iC="/mon-portfolio/assets/wordpress-DzpTcR_C.png",aC=()=>{const[r,t]=rt.useState(!1),n=[{x:0,y:-260},{x:226,y:-200},{x:300,y:0},{x:226,y:226},{x:0,y:250},{x:-226,y:226},{x:-300,y:0},{x:-226,y:-226}],a=[{x:0,y:-180},{x:127,y:-127},{x:180,y:0},{x:127,y:127},{x:0,y:180},{x:-127,y:127},{x:-180,y:0},{x:-127,y:-127}],o=[{icon:Zx,name:`REACT
FRONTEND`},{icon:qx,name:`JAVASCRIPT
ES6+`},{icon:Kx,name:`HTML5
MARKUP`},{icon:Yx,name:`PYTHON
BACKEND`},{icon:Jx,name:`LARAVEL
PHP`},{icon:nC,name:`FLUTTER
MOBILE`},{icon:iC,name:`WORDPRESS
CMS`},{icon:Qx,name:`TAILWIND
CSS`}];return rt.useEffect(()=>{const c=setTimeout(()=>t(!0),1e3);return()=>clearTimeout(c)},[]),C.jsxs("div",{className:"min-h-screen flex justify-center items-center overflow-hidden relative",style:{fontFamily:"'Orbitron', monospace",color:"white"},children:[C.jsxs("div",{className:"relative w-screen h-screen flex justify-center items-center",children:[C.jsxs("div",{className:"absolute flex flex-col justify-center items-center cursor-pointer transition-all duration-300 z-10 central-hexagon",style:{clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",border:"2px solid #00ffff",width:"220px",height:"220px",animation:"rotate-initial 3s ease-in-out, glow-pulse 2s ease-in-out infinite alternate"},children:[C.jsx("div",{className:"w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-3xl mb-4 central-icon",style:{background:"linear-gradient(45deg, #ff0080, #00ffff)",boxShadow:"0 0 15px rgba(255, 0, 128, 0.5)",animation:"profile-glow 3s ease-in-out infinite alternate"},children:"⚡"}),C.jsxs("div",{className:"text-cyan-400 text-sm text-center font-bold tracking-widest central-text",style:{textShadow:"0 0 10px rgba(0, 255, 255, 0.8)"},children:["COMPÉTENCES",C.jsx("br",{}),"SYSTÈME"]})]}),n.map((c,f)=>{const m=window.innerWidth<=768?a[f]:c,d=Math.sqrt(c.x*c.x+c.y*c.y)-180,g=Math.sqrt(c.x*c.x+c.y*c.y)-120,_=Math.atan2(c.y,c.x)*180/Math.PI;return C.jsxs(jv.Fragment,{children:[C.jsx("div",{className:"absolute h-0.5 connection-line",style:{background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",transformOrigin:"left center",width:`${d}px`,left:`calc(50% + ${c.x*.35}px)`,top:`calc(50% + ${c.y*.35}px)`,transform:`rotate(${_}deg)`,opacity:r?1:0,transition:"opacity 0.3s ease","--mobile-width":`${g}px`}}),C.jsxs("div",{className:"absolute flex flex-col justify-center items-center bg-black/40 backdrop-blur-xl rounded-xl skill-card",style:{left:`calc(50% + ${m.x}px - 70px)`,top:`calc(50% + ${m.y}px - 70px)`,opacity:r?1:0,transform:r?"scale(1)":"scale(0)",transition:"all 0.5s ease",border:"1px solid #00ffff",boxShadow:"0 0 15px rgba(0, 255, 255, 0.3)",width:"140px",height:"140px"},children:[C.jsx("img",{src:o[f].icon,alt:o[f].name,className:"w-12 h-12 object-contain mb-2 skill-icon"}),C.jsx("div",{className:"text-xs font-bold text-center tracking-wider skill-text",style:{color:"#00ffff",textShadow:"0 0 8px rgba(0, 255, 255, 0.6)",whiteSpace:"pre-line"},children:o[f].name})]})]},f)})]}),C.jsx("style",{jsx:!0,children:`
        @keyframes rotate-initial {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes glow-pulse {
          0% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          100% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.8); }
        }
        @keyframes profile-glow {
          0% { box-shadow: 0 0 15px rgba(255, 0, 128, 0.5); }
          100% { box-shadow: 0 0 25px rgba(255, 0, 128, 0.8), 0 0 35px rgba(0, 255, 255, 0.4); }
        }

        /* Ajustements pour mobile uniquement */
        @media (max-width: 768px) {
          /* Hexagone central plus petit sur mobile */
          .central-hexagon {
            width: 150px !important;
            height: 150px !important;
          }
          
          /* Icône centrale plus petite */
          .central-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
            margin-bottom: 8px !important;
          }
          
          /* Texte central plus petit */
          .central-text {
            font-size: 9px !important;
            line-height: 1.2 !important;
          }

          /* Cartes repositionnées plus près du centre sur mobile */
          .skill-card:nth-of-type(3) { /* Top */
            left: calc(50% + 0px - 42.5px) !important;
            top: calc(50% + -180px - 42.5px) !important;
          }
          .skill-card:nth-of-type(5) { /* Top-right */
            left: calc(50% + 127px - 42.5px) !important;
            top: calc(50% + -127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(7) { /* Right */
            left: calc(50% + 180px - 42.5px) !important;
            top: calc(50% + 0px - 42.5px) !important;
          }
          .skill-card:nth-of-type(9) { /* Bottom-right */
            left: calc(50% + 127px - 42.5px) !important;
            top: calc(50% + 127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(11) { /* Bottom */
            left: calc(50% + 0px - 42.5px) !important;
            top: calc(50% + 180px - 42.5px) !important;
          }
          .skill-card:nth-of-type(13) { /* Bottom-left */
            left: calc(50% + -127px - 42.5px) !important;
            top: calc(50% + 127px - 42.5px) !important;
          }
          .skill-card:nth-of-type(15) { /* Left */
            left: calc(50% + -180px - 42.5px) !important;
            top: calc(50% + 0px - 42.5px) !important;
          }
          .skill-card:nth-of-type(17) { /* Top-left */
            left: calc(50% + -127px - 42.5px) !important;
            top: calc(50% + -127px - 42.5px) !important;
          }
          .skill-card {
            width: 85px !important;
            height: 85px !important;
          }

          .skill-icon {
            width: 24px !important;
            height: 24px !important;
            margin-bottom: 4px !important;
          }

          .skill-text {
            font-size: 8px !important;
            line-height: 1.1 !important;
          }

          /* Supprimer complètement les lignes de connexion sur mobile */
          .connection-line {
            display: none !important;
          }
        }
      `})]})},sC="/mon-portfolio/assets/site-ltsa-BuGiks2J.png",rC="/mon-portfolio/assets/restaurant-ui-BD20IMIo.png",oC="/mon-portfolio/assets/marienegoce-BVyo2mOZ.png",lC="/mon-portfolio/assets/services-supply-C7tOjAOK.png",cC="/mon-portfolio/assets/parfum-ui-Dehnq3Mt.png",uC="/mon-portfolio/assets/art-ancestral-BrC4EVjb.png",fC="/mon-portfolio/assets/livres-ui-3JcIYjRS.png",hC="/mon-portfolio/assets/biotech-Cs1dSVF9.png",bd=[{id:1,title:"Site web du LTSA",category:"Site Institutionnel",description:"Développement complet du site officiel du Laboratoire de Technologies et Systèmes Appliqués de l'Université de Douala",technologies:["WordPress","PHP","MySQL","CSS3","JavaScript"],link:"https://ltsa-univ-dla.cm/",type:"Site Web",status:"En ligne",year:"2025",image:sC},{id:2,title:"Gestion Restaurant - Maquette",category:"UI/UX Design",description:"Conception complète d'une interface de gestion pour restaurants, glaciers et fast-food avec système de commandes et réservations",technologies:["Figma","UI/UX","Prototypage","Design System"],link:"https://www.figma.com/proto/...",type:"Prototype",status:"Terminé",year:"2025",image:rC},{id:3,title:"Marienegoce",category:"E-commerce",description:"Plateforme de vente en ligne de produits agro-alimentaires avec système de paiement et gestion des stocks",technologies:["WordPress","WooCommerce","PHP","MySQL","Payment Gateway"],link:"https://marienegoce.com/",type:"E-commerce",status:"En ligne",year:"2024",image:oC},{id:4,title:"Services & Supply",category:"Site Commercial",description:"Site de vente de matériaux de construction et services avec catalogue produits et système de devis",technologies:["WordPress","Custom Theme","PHP","JavaScript","MySQL"],link:"https://servicesandsupply.net/",type:"Site Web",status:"En ligne",year:"2024",image:lC},{id:5,title:"Maquette Site Parfums",category:"UI/UX Design",description:"Design moderne pour un site de vente de parfums de marques avec interface élégante et expérience utilisateur optimisée",technologies:["Figma","Adobe XD","Design System","Responsive Design"],link:"https://www.figma.com/design/...",type:"Maquette",status:"Terminé",year:"2024",image:cC},{id:6,title:"Art Ancestral",category:"Site Culturel",description:"Site d'exposition et vente de statues ancestrales avec galerie interactive et système de commande",technologies:["WordPress","Custom Gallery","PHP","JavaScript","CSS3"],link:"https://art.marienegoce.com/",type:"Site Web",status:"En ligne",year:"2024",image:uC},{id:7,title:"Maquette Livres Électroniques",category:"UI/UX Design",description:"Interface moderne pour plateforme de vente de livres électroniques avec système de lecture intégré",technologies:["Figma","UI/UX","Wireframing","User Research"],link:"https://www.figma.com/design/...",type:"Maquette",status:"Terminé",year:"2024",image:fC},{id:8,title:"Laboratoire Biotech",category:"Site Scientifique",description:"Site professionnel pour laboratoire de biotechnologie avec présentation des services et équipements",technologies:["WordPress","Custom Theme","PHP","MySQL","Responsive"],link:"https://lbiotech.marienegoce.com/",type:"Site Web",status:"En ligne",year:"2024",image:hC}],dC=["Tous","Site Web","E-commerce","UI/UX Design","Maquette","Prototype"];function pC(){const[r,t]=rt.useState(!1),[n,a]=rt.useState("Tous"),[o,c]=rt.useState(null),[f,h]=rt.useState(bd);Sp(),rt.useEffect(()=>{const d=setTimeout(()=>t(!0),300);return()=>clearTimeout(d)},[]),rt.useEffect(()=>{h(n==="Tous"?bd:bd.filter(d=>d.type===n||d.category.includes(n)))},[n]);const m=d=>{switch(d){case"En ligne":return"from-green-500 to-emerald-500";case"Terminé":return"from-blue-500 to-cyan-500";case"En cours":return"from-yellow-500 to-orange-500";default:return"from-gray-500 to-gray-600"}};return C.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[C.jsxs("div",{className:"relative z-10 text-center  pb-16",children:[C.jsxs("h2",{className:"about-title",children:["MES"," ",C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient",children:"PROJETS"}),C.jsx("div",{className:"scan-effect"})]}),C.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4",children:"Découvrez une sélection de mes réalisations, allant du développement web au design d'interfaces"})]}),C.jsx("div",{className:"flex justify-center mb-16 px-4",children:C.jsx("div",{className:"flex flex-wrap justify-center gap-3 bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50",children:dC.map((d,g)=>C.jsx("button",{onClick:()=>a(d),className:`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${n===d?"bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-2xl scale-105":"text-gray-400 border-gray-600/50 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10"}`,style:{transitionDelay:`${g*100}ms`},children:d},d))})}),C.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-8 ",children:C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:f.map((d,g)=>C.jsxs("div",{className:"group relative transition-all duration-1000",onMouseEnter:()=>c(d.id),onMouseLeave:()=>c(null),children:[C.jsx("div",{className:"absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50"}),C.jsxs("div",{className:`relative bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border-2 transition-all duration-700 group-hover:-translate-y-3 ${o===d.id?"border-cyan-400/60 shadow-2xl":"border-gray-700/30"}`,children:[C.jsxs("div",{className:"relative h-56 overflow-hidden",children:[C.jsx("img",{src:d.image,alt:d.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),C.jsx("div",{className:`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${m(d.status)}`,children:d.status}),C.jsx("div",{className:"absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-black/50 backdrop-blur-sm border border-cyan-500/30",children:d.year}),C.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${o===d.id?"opacity-100":"opacity-0"}`,children:C.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:C.jsx("a",{href:d.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300",children:"Voir le projet →"})})})]}),C.jsxs("div",{className:"p-6",children:[C.jsx("span",{className:"text-cyan-400 text-sm font-medium",children:d.category}),C.jsx("h3",{className:"text-xl font-bold text-white mb-3 mt-2 group-hover:text-cyan-400 transition-colors duration-300",children:d.title}),C.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3",children:d.description}),C.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[d.technologies.slice(0,3).map(_=>C.jsx("span",{className:`px-2 py-1 rounded-lg text-xs font-medium border ${o===d.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-gray-700/30 text-gray-400 border-gray-600/30"}`,children:_},_)),d.technologies.length>3&&C.jsxs("span",{className:"px-2 py-1 rounded-lg text-xs font-medium text-gray-500 bg-gray-700/20 border border-gray-600/20",children:["+",d.technologies.length-3]})]})]})]})]},d.id))})})]})}const mC="/mon-portfolio/assets/Epitech-D4si4XKH.png",gC="/mon-portfolio/assets/dclic-OGNfusSF.png",_C="/mon-portfolio/assets/inchclass-C2ROVzMU.png",vC="/mon-portfolio/assets/iut-gd3rx6vX.png",Md=[{title:"Master Of Science",school:"EPITECH",date:"2025 - 2028",desc:"Développement web, JAVA, Reseau, IA, Data...",image:mC,imageAlt:"Logo EPITECH"},{title:"Formation en développement mobile",school:"D-CLIC",date:"Juin - Sept 2025",desc:"Apprentissage en ligne du développement mobile",image:gC,imageAlt:"Logo D-CLIC"},{title:"Formation en développement web",school:"InchClass",date:"Janv - Mai 2025",desc:"Bases solides en développement web moderne",image:_C,imageAlt:"Logo InchClass"},{title:"Diplôme Universitaire des Technologies",school:"IUT DOUALA",date:"Sept 2023 - Juin 2025",desc:"Bac +2 Génie informatique",image:vC,imageAlt:"Logo IUT DOUALA"}];function xC(){const[r,t]=rt.useState(!1),[n,a]=rt.useState({});rt.useEffect(()=>{const f=setTimeout(()=>t(!0),500);return()=>clearTimeout(f)},[]);const o=f=>{a(h=>({...h,[f]:!0}))},c=f=>{a(h=>({...h,[f]:!1}))};return C.jsxs("div",{className:"min-h-screen relative",children:[C.jsx("div",{className:"absolute inset-0",children:[...Array(50)].map((f,h)=>C.jsx("div",{className:"absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,opacity:Math.random()*.7}},h))}),C.jsxs("div",{className:"relative z-10 text-center pt-16 pb-8",children:[C.jsxs("h2",{className:"about-title",children:["MES ",C.jsx("span",{className:"gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse",children:"FORMAT"}),"IONS",C.jsx("div",{className:"scan-effect"})]}),C.jsxs("div",{className:"relative mx-auto w-32 h-1",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm opacity-75"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"})]})]}),C.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-center min-h-[70vh] space-y-10 lg:space-y-0",children:[C.jsxs("div",{className:"relative w-full lg:w-96 h-[400px] lg:h-[600px] lg:mr-16 mb-10 lg:mb-0",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent rounded-full blur-3xl"}),C.jsxs("svg",{className:"absolute inset-0 w-full h-full",viewBox:"0 0 300 400",children:[C.jsxs("defs",{children:[C.jsxs("linearGradient",{id:"neonGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[C.jsx("stop",{offset:"0%",stopColor:"#00ffff"}),C.jsx("stop",{offset:"30%",stopColor:"#0080ff"}),C.jsx("stop",{offset:"70%",stopColor:"#0040ff"}),C.jsx("stop",{offset:"100%",stopColor:"#00ffff"})]}),C.jsxs("filter",{id:"glow",children:[C.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),C.jsxs("feMerge",{children:[C.jsx("feMergeNode",{in:"coloredBlur"}),C.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),C.jsx("path",{d:"M 80 350 A 100 100 0 0 1 80 50",fill:"none",stroke:"#00ffff",strokeWidth:"12",strokeLinecap:"round",opacity:"0.3",filter:"url(#glow)",className:`transition-all duration-3000 ease-out ${r?"opacity-30":"opacity-0"}`,style:{strokeDasharray:314,strokeDashoffset:r?0:314,transition:"stroke-dashoffset 3s ease-out"}}),C.jsx("path",{d:"M 80 350 A 100 100 0 0 1 80 50",fill:"none",stroke:"url(#neonGradient)",strokeWidth:"6",strokeLinecap:"round",filter:"url(#glow)",className:`transition-all duration-3000 ease-out ${r?"opacity-100":"opacity-0"}`,style:{strokeDasharray:314,strokeDashoffset:r?0:314,transition:"stroke-dashoffset 3s ease-out 0.5s"}})]}),C.jsx("svg",{className:"absolute inset-0 w-full h-full",viewBox:"0 0 300 400",children:C.jsx("path",{d:"M 110 320 A 70 70 0 0 1 110 80",fill:"none",stroke:"#00d4ff",strokeWidth:"3",strokeLinecap:"round",opacity:"0.8",className:`transition-all duration-2500 delay-1000 ease-out ${r?"opacity-80":"opacity-0"}`,style:{strokeDasharray:220,strokeDashoffset:r?0:220,transition:"stroke-dashoffset 2.5s ease-out 1s"}})}),Md.map((f,h)=>{const m=h/(Md.length-1)*Math.PI,d=100,g=80,_=200,x=g-d*Math.cos(m),S=_-d*Math.sin(m);return C.jsx("div",{className:`absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg transition-all duration-700 ${r?"opacity-100 scale-100":"opacity-0 scale-0"}`,style:{left:`${x}px`,top:`${S}px`,transform:"translate(-50%, -50%)",boxShadow:"0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",transition:`all 0.7s ease-out ${1.5+h*.2}s`}},h)}),C.jsxs("div",{className:`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1500 delay-2000 ${r?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`,children:[C.jsx("h3",{className:"text-2xl font-bold text-white mb-2 tracking-wider",children:"PARCOURS"}),C.jsx("div",{className:"w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mb-3"}),C.jsx("p",{className:"text-sm text-cyan-200 leading-relaxed max-w-28 opacity-80",children:"Évolution académique et professionnelle"})]})]}),C.jsx("div",{className:"flex flex-col space-y-8 w-full lg:w-auto",children:Md.map((f,h)=>C.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center relative space-y-4 lg:space-y-0",children:[C.jsx("svg",{className:"hidden lg:block absolute -left-16 w-20 h-2",viewBox:"0 0 80 8",style:{top:"50%",transform:"translateY(-50%)"},children:C.jsx("path",{d:"M 0 4 L 80 4",stroke:"#00d4ff",strokeWidth:"2",strokeDasharray:"3 3",fill:"none",className:"transition-all duration-1500 ease-out",style:{filter:"drop-shadow(0 0 3px #00d4ff)",strokeDashoffset:r?0:80,transition:`stroke-dashoffset 1.5s ease-out ${1.8+h*.3}s`}})}),C.jsxs("div",{className:`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg lg:mr-6 transition-all duration-1000 relative ${r?"opacity-100 scale-100 rotate-0":"opacity-0 scale-0 rotate-180"}`,style:{background:"linear-gradient(135deg, #00ffff 0%, #0080ff 50%, #0040ff 100%)",boxShadow:"0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.3)",transition:`all 1s ease-out ${2+h*.3}s`},children:[String(h+1).padStart(2,"0"),C.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse"})]}),C.jsxs("div",{className:`bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-full lg:max-w-md border border-cyan-500/30 transform transition-all duration-1200 hover:scale-105 hover:border-cyan-400/50 ${r?"opacity-100 translate-x-0 scale-100":"opacity-0 translate-x-12 scale-95"}`,style:{background:"linear-gradient(135deg, rgba(0, 20, 40, 0.8) 0%, rgba(0, 40, 80, 0.6) 100%)",boxShadow:"0 8px 32px rgba(0, 200, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",transition:`all 1.2s ease-out ${2.2+h*.3}s`},children:[C.jsxs("div",{className:"flex items-start space-x-4",children:[C.jsx("div",{className:"flex-shrink-0",children:C.jsxs("div",{className:"w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden relative group p-2",style:{background:"linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 128, 255, 0.3) 100%)",border:"1px solid rgba(0, 255, 255, 0.3)"},children:[n[h]?C.jsx("div",{className:"w-full h-full flex items-center justify-center text-cyan-300 font-bold text-lg",children:f.school.split(" ").map(m=>m[0]).join("").slice(0,2)}):C.jsx("img",{src:f.image,alt:f.imageAlt,className:"w-full h-full object-contain transition-transform duration-300 group-hover:scale-110",onError:()=>o(h),onLoad:()=>c(h),loading:"lazy"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"})]})}),C.jsxs("div",{className:"flex-1 min-w-0",children:[C.jsx("h3",{className:"font-bold text-lg text-white mb-2",children:f.title}),C.jsx("p",{className:"text-cyan-300 font-semibold text-sm mb-1",children:f.school}),C.jsx("p",{className:"text-cyan-200/70 text-sm mb-3",children:f.date}),C.jsx("p",{className:"text-gray-200 text-sm leading-relaxed",children:f.desc})]})]}),C.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"})]})]},h))})]})]})}const yC=[{title:"Stage en Développement Web",company:"InchClass",period:"Janv - Mai 2025",type:"Stage",description:"Concevoir et développer une ou plusieurs applications web complètes, évolutives et responsives, les sécuriser et les déployer",skills:["React","Node.js","MongoDB","Sécurité Web","Déploiement"],icon:"🌐",color:"from-blue-500 to-cyan-500",glowColor:"rgba(59, 130, 246, 0.5)"},{title:"Stage en Génie Logiciel",company:"Mentalist",period:"Juin - Août 2024",type:"Stage",description:"Manipuler des bases de données, gérer l'intégration avec des APIs et appliquer les bonnes pratiques de programmation",skills:["SQL","APIs REST","Architecture","Clean Code","Tests"],icon:"⚙️",color:"from-purple-500 to-pink-500",glowColor:"rgba(168, 85, 247, 0.5)"}];function SC(){const[r,t]=rt.useState(!1),[n,a]=rt.useState(null);return Sp(),rt.useEffect(()=>{const o=setTimeout(()=>t(!0),300);return()=>clearTimeout(o)},[]),C.jsxs("div",{className:"min-h-screen relative overflow-hidden ",children:[C.jsx("div",{className:"relative z-10 text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4",children:C.jsxs("div",{className:`transition-all duration-1500 ${r?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:[C.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 text-white leading-tight",children:["MES",C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient",children:" EXPERIEN"}),"CES",C.jsx("div",{className:"scan-effect"})]}),C.jsxs("div",{className:"relative mx-auto w-32 sm:w-40 lg:w-48 h-1 mb-4 sm:mb-6",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-60"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"})]}),C.jsx("p",{className:"text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4",children:"Découvrez mon parcours professionnel et les projets qui ont façonné mes compétences"})]})}),C.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[C.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start",children:yC.map((o,c)=>C.jsxs("div",{className:`relative group transition-all duration-1000 ${r?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-16 scale-95"}`,style:{transitionDelay:`${c*400+600}ms`},onMouseEnter:()=>a(c),onMouseLeave:()=>a(null),children:[C.jsx("div",{className:"absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl",style:{background:`linear-gradient(135deg, ${o.glowColor}, transparent)`}}),C.jsxs("div",{className:`relative bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 lg:hover:-translate-y-6 hover:rotate-1 ${n===c?"border-cyan-400/60 shadow-2xl":"border-gray-700/50"}`,style:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)",boxShadow:n===c?`0 15px 40px ${o.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.1)`:"0 8px 25px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"},children:[C.jsx("div",{className:`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg bg-gradient-to-r ${o.color}`,style:{boxShadow:`0 0 15px ${o.glowColor}`},children:o.type}),C.jsxs("div",{className:"flex items-start mb-4 sm:mb-6",children:[C.jsx("div",{className:`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl mr-3 sm:mr-4 lg:mr-6 bg-gradient-to-br ${o.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`,style:{boxShadow:`0 0 15px ${o.glowColor}`},children:o.icon}),C.jsxs("div",{className:"flex-1 min-w-0",children:[C.jsx("h3",{className:"text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight",children:o.title}),C.jsx("p",{className:"text-sm sm:text-base lg:text-lg text-cyan-300 font-semibold mb-1",children:o.company}),C.jsx("p",{className:"text-xs sm:text-sm text-gray-400 font-mono",children:o.period})]})]}),C.jsx("p",{className:"text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300",children:o.description}),C.jsx("div",{className:"flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6",children:o.skills.map((f,h)=>C.jsx("span",{className:`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:scale-105 sm:hover:scale-110 ${n===c?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-gray-700/30 text-gray-400 border-gray-600/30"}`,style:{transitionDelay:`${h*50}ms`},children:f},h))}),C.jsx("div",{className:"w-full h-0.5 sm:h-1 bg-gray-700/50 rounded-full overflow-hidden",children:C.jsx("div",{className:`h-full bg-gradient-to-r ${o.color} transition-all duration-1500 ease-out ${r?"w-full":"w-0"}`,style:{transitionDelay:`${c*400+1200}ms`,boxShadow:`0 0 8px ${o.glowColor}`}})}),C.jsx("div",{className:"absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"})]})]},c))}),C.jsx("div",{className:`text-center mt-12 sm:mt-16 lg:mt-20 pb-8 sm:pb-12 transition-all duration-1500 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:"1.5s"},children:C.jsxs("div",{className:"inline-flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 border border-gray-700/50 mx-4",children:[C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400 mb-1 sm:mb-2",children:C.jsx("span",{className:"animate-pulse",children:"02"})}),C.jsx("p",{className:"text-gray-400 text-xs sm:text-sm uppercase tracking-wide",children:"Stages Réalisés"})]}),C.jsx("div",{className:"w-12 h-px sm:w-px sm:h-8 lg:h-12 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-600 to-transparent"}),C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 mb-1 sm:mb-2",children:C.jsx("span",{className:"animate-pulse",children:"10+"})}),C.jsx("p",{className:"text-gray-400 text-xs sm:text-sm uppercase tracking-wide",children:"Technologies"})]}),C.jsx("div",{className:"w-12 h-px sm:w-px sm:h-8 lg:h-12 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-gray-600 to-transparent"}),C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-black text-pink-400 mb-1 sm:mb-2",children:C.jsx("span",{className:"animate-pulse",children:"06"})}),C.jsx("p",{className:"text-gray-400 text-xs sm:text-sm uppercase tracking-wide",children:"Mois d'Expérience"})]})]})})]}),C.jsx("style",{jsx:!0,children:`
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        .scan-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
          transform: translateX(-100%);
          animation: scan 3s ease-in-out infinite;
        }
      `})]})}class vl{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const bC=()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,t)=>Promise.resolve(localStorage.setItem(r,t)),remove:r=>Promise.resolve(localStorage.removeItem(r))}},Rn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:bC()},Gp=r=>r?typeof r=="string"?{publicKey:r}:r.toString()==="[object Object]"?r:{}:{},MC=(r,t="https://api.emailjs.com")=>{if(!r)return;const n=Gp(r);Rn.publicKey=n.publicKey,Rn.blockHeadless=n.blockHeadless,Rn.storageProvider=n.storageProvider,Rn.blockList=n.blockList,Rn.limitRate=n.limitRate,Rn.origin=n.origin||t},$x=async(r,t,n={})=>{const a=await fetch(Rn.origin+r,{method:"POST",headers:n,body:t}),o=await a.text(),c=new vl(a.status,o);if(a.ok)return c;throw c},ty=(r,t,n)=>{if(!r||typeof r!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},EC=r=>{if(r&&r.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ey=r=>r.webdriver||!r.languages||r.languages.length===0,ny=()=>new vl(451,"Unavailable For Headless Browser"),TC=(r,t)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},AC=r=>!r.list?.length||!r.watchVariable,wC=(r,t)=>r instanceof FormData?r.get(t):r[t],iy=(r,t)=>{if(AC(r))return!1;TC(r.list,r.watchVariable);const n=wC(t,r.watchVariable);return typeof n!="string"?!1:r.list.includes(n)},ay=()=>new vl(403,"Forbidden"),RC=(r,t)=>{if(typeof r!="number"||r<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},CC=async(r,t,n)=>{const a=Number(await n.get(r)||0);return t-Date.now()+a},sy=async(r,t,n)=>{if(!t.throttle||!n)return!1;RC(t.throttle,t.id);const a=t.id||r;return await CC(a,t.throttle,n)>0?!0:(await n.set(a,Date.now().toString()),!1)},ry=()=>new vl(429,"Too Many Requests"),DC=async(r,t,n,a)=>{const o=Gp(a),c=o.publicKey||Rn.publicKey,f=o.blockHeadless||Rn.blockHeadless,h=o.storageProvider||Rn.storageProvider,m={...Rn.blockList,...o.blockList},d={...Rn.limitRate,...o.limitRate};return f&&ey(navigator)?Promise.reject(ny()):(ty(c,r,t),EC(n),n&&iy(m,n)?Promise.reject(ay()):await sy(location.pathname,d,h)?Promise.reject(ry()):$x("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:r,template_id:t,template_params:n}),{"Content-type":"application/json"}))},UC=r=>{if(!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},NC=r=>typeof r=="string"?document.querySelector(r):r,LC=async(r,t,n,a)=>{const o=Gp(a),c=o.publicKey||Rn.publicKey,f=o.blockHeadless||Rn.blockHeadless,h=Rn.storageProvider||o.storageProvider,m={...Rn.blockList,...o.blockList},d={...Rn.limitRate,...o.limitRate};if(f&&ey(navigator))return Promise.reject(ny());const g=NC(n);ty(c,r,t),UC(g);const _=new FormData(g);return iy(m,_)?Promise.reject(ay()):await sy(location.pathname,d,h)?Promise.reject(ry()):(_.append("lib_version","4.4.1"),_.append("service_id",r),_.append("template_id",t),_.append("user_id",c),$x("/api/v1.0/email/send-form",_))},Gv={init:MC,send:DC,sendForm:LC,EmailJSResponseStatus:vl},PC=()=>{const[r,t]=rt.useState(!1),[n,a]=rt.useState({name:"",email:"",subject:"",message:""}),[o,c]=rt.useState(!1),[f,h]=rt.useState(""),[m,d]=rt.useState(""),g=rt.useRef(),_={serviceID:"service_7v6w49q",templateID:"template_wlykvnd",publicKey:"iHUyRc9xlxRN0VVKN"};rt.useEffect(()=>{Gv.init(_.publicKey);const v=setTimeout(()=>t(!0),300);return()=>clearTimeout(v)},[]);const x=v=>{const{name:L,value:U}=v.target;a(R=>({...R,[L]:U}))},S=()=>{setTimeout(()=>{h(""),d("")},5e3)},M=async v=>{if(v.preventDefault(),c(!0),h(""),d(""),!n.name||!n.email||!n.subject||!n.message){h("error"),d("Veuillez remplir tous les champs obligatoires."),c(!1),S();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)){h("error"),d("Veuillez entrer une adresse email valide."),c(!1),S();return}try{const U={from_name:n.name,from_email:n.email,subject:n.subject,message:n.message,to_email:"floratabeu@gmail.com",reply_to:n.email,timestamp:new Date().toLocaleString("fr-FR")},R=await Gv.send(_.serviceID,_.templateID,U);console.log("Email envoyé avec succès:",R),h("success"),d(`Merci ${n.name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.`),a({name:"",email:"",subject:"",message:""})}catch(U){console.error("Erreur lors de l'envoi:",U),h("error"),U.status===400?d("Erreur de configuration. Veuillez me contacter directement par email."):U.status===401?d("Erreur d'authentification. Veuillez réessayer ou me contacter directement."):U.status===402?d("Limite d'envoi atteinte. Veuillez me contacter directement par email."):d("Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement par email ou téléphone.")}finally{c(!1),S()}},E=[{icon:"📱",label:"Téléphone",value:"07 74 65 55 63",link:"tel:0774655563"},{icon:"📧",label:"Email",value:"floratabeu@gmail.com",link:"mailto:floratabeu@gmail.com"},{icon:"📍",label:"Adresse",value:"14 Rue Raphael, 13008 Marseille",link:"https://maps.google.com/?q=14+Rue+Raphael+13008+Marseille"}],y=()=>{if(!f)return null;const v=f==="success",L=v?"bg-green-500/20":"bg-red-500/20",U=v?"border-green-400/30":"border-red-400/30",R=v?"text-green-200":"text-red-200",z=v?"✅":"❌";return C.jsx("div",{className:`mb-6 p-4 rounded-2xl ${L} border ${U} ${R} animate-fade-in`,children:C.jsxs("div",{className:"flex items-center justify-center text-center",children:[C.jsx("span",{className:"text-xl mr-2",children:z}),C.jsx("span",{className:"font-medium",children:m})]})})};return C.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((v,L)=>C.jsx("div",{className:"absolute bg-blue-300 rounded-full animate-pulse",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*4}s`,opacity:Math.random()*.5+.2}},L))}),C.jsxs("div",{className:"relative z-10 text-center pt-12 md:pt-20 pb-8 md:pb-12 px-4",children:[C.jsxs("h2",{className:"about-title",children:["CON",C.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient",children:"TACTEZ"})," MOI",C.jsx("div",{className:"scan-effect"})]}),C.jsx("p",{className:"text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed",children:"Discutons de vos projets et transformons vos idées en réalité numérique"}),C.jsxs("div",{className:"relative mx-auto w-32 md:w-40 h-1 mt-6",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-75"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"})]})]}),C.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 md:px-8",children:C.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-16",children:[C.jsx("div",{className:`transition-all duration-1500 ${r?"opacity-100 translate-x-0":"opacity-0 -translate-x-12"}`,children:C.jsxs("div",{className:"space-y-8",children:[C.jsxs("div",{children:[C.jsxs("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-6",children:["Restons en ",C.jsx("span",{className:"text-blue-400",children:"Contact"})]}),C.jsx("p",{className:"text-blue-100/80 leading-relaxed text-base md:text-lg",children:"Je suis actuellement à la recherche d'un stage de 6 mois et ouverte aux opportunités passionnantes. N'hésitez pas à me contacter pour discuter de collaborations ou de projets."})]}),C.jsx("div",{className:"space-y-6",children:E.map((v,L)=>C.jsx("div",{className:`transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${.3+L*.2}s`},children:C.jsxs("a",{href:v.link,target:v.label==="Adresse"?"_blank":"_self",rel:v.label==="Adresse"?"noopener noreferrer":"",className:"flex items-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 group",children:[C.jsx("div",{className:"flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/30 flex items-center justify-center text-2xl md:text-3xl mr-4 md:mr-6 group-hover:scale-110 transition-transform duration-300",children:v.icon}),C.jsxs("div",{children:[C.jsx("p",{className:"text-blue-300 text-sm md:text-base font-medium mb-1",children:v.label}),C.jsx("p",{className:"text-white font-semibold text-base md:text-lg",children:v.value})]})]})},L))}),C.jsxs("div",{className:`pt-8 transition-all duration-1500 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:"1s"},children:[C.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Suivez-moi"}),C.jsx("div",{className:"flex space-x-4",children:C.jsx("a",{href:"https://www.linkedin.com/in/flora-dolorece-35a57531b",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/30 flex items-center justify-center text-white border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20",children:"in"})})]})]})}),C.jsx("div",{className:`transition-all duration-1500 ${r?"opacity-100 translate-x-0":"opacity-0 translate-x-12"}`,children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl blur-xl",style:{transform:"scale(1.05)"}}),C.jsxs("div",{className:"relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-blue-500/20",children:[C.jsxs("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-6 text-center",children:["Envoyez un ",C.jsx("span",{className:"text-blue-400",children:"Message"})]}),C.jsx(y,{}),C.jsxs("form",{ref:g,onSubmit:M,className:"space-y-6",children:[C.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-blue-200 text-sm font-medium mb-2",children:"Nom complet *"}),C.jsx("input",{type:"text",name:"name",value:n.name,onChange:x,required:!0,disabled:o,className:"w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",placeholder:"Votre nom complet"})]}),C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-blue-200 text-sm font-medium mb-2",children:"Email *"}),C.jsx("input",{type:"email",name:"email",value:n.email,onChange:x,required:!0,disabled:o,className:"w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",placeholder:"votre@email.com"})]})]}),C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-blue-200 text-sm font-medium mb-2",children:"Sujet *"}),C.jsx("input",{type:"text",name:"subject",value:n.subject,onChange:x,required:!0,disabled:o,className:"w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",placeholder:"Sujet de votre message"})]}),C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-blue-200 text-sm font-medium mb-2",children:"Message *"}),C.jsx("textarea",{name:"message",value:n.message,onChange:x,required:!0,disabled:o,rows:6,className:"w-full px-4 py-3 md:py-4 rounded-2xl bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:border-blue-400/60 focus:bg-white/10 transition-all duration-300 focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed",placeholder:"Décrivez votre projet ou posez votre question..."})]}),C.jsxs("button",{type:"submit",disabled:o,className:`w-full relative px-6 py-4 md:py-5 font-semibold text-white rounded-2xl overflow-hidden transition-all duration-500 group ${o?"opacity-70 cursor-not-allowed":"hover:scale-[1.02] hover:shadow-xl"}`,style:{background:"linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)",boxShadow:"0 10px 40px rgba(59, 130, 246, 0.3)"},children:[C.jsx("span",{className:"relative z-10 flex items-center justify-center",children:o?C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"}),"Envoi en cours..."]}):C.jsx(C.Fragment,{children:"⚡ Envoyer le message"})}),!o&&C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"})]})]}),C.jsx("div",{className:"mt-4 text-center",children:C.jsx("p",{className:"text-blue-300/60 text-xs",children:"Sécurisé par EmailJS • Pas de stockage des données"})})]})]})})]})}),C.jsx("div",{className:"relative z-10 text-center pt-16 pb-8 px-4",children:C.jsx("p",{className:"text-blue-200 text-sm md:text-base",children:"© 2025 Flora Dolorece DJOUELA TABEU - Développeuse Web & Mobile"})}),C.jsx("style",{jsx:!0,children:`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(-10px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `})]})},OC=()=>C.jsxs("div",{className:"min-h-screen relative",children:[C.jsx(A2,{}),C.jsx(hE,{}),C.jsxs("div",{className:"space-y-20 relative z-10 text-white",children:[C.jsx("section",{id:"globetech",className:"scroll-mt-20",children:C.jsx(tC,{})}),C.jsx("section",{id:"about-me",className:"scroll-mt-20 md:mt-[-250px] lg:mt-1",children:C.jsx(eC,{})}),C.jsx("section",{id:"skills",className:"scroll-mt-20 md:mt-[-250px] lg:mt-60",children:C.jsx(aC,{})}),C.jsx("section",{id:"projects",className:"scroll-mt-20 md:mt-[-200px] lg:mt-30",children:C.jsx(pC,{})}),C.jsx("section",{id:"formations",className:"scroll-mt-20",children:C.jsx(xC,{})}),C.jsx("section",{id:"experiences",className:"scroll-mt-20",children:C.jsx(SC,{})}),C.jsx("section",{id:"contact",className:"scroll-mt-20",children:C.jsx(PC,{})})]}),C.jsx("style",{jsx:!0,global:!0,children:`
        html {
          scroll-behavior: smooth;
        }
        section {
          position: relative;
          min-height: fit-content;
        }
      `})]});function zC(){return C.jsx(uM,{children:C.jsx(nx,{path:"/",element:C.jsx(OC,{})})})}yb.createRoot(document.getElementById("root")).render(C.jsx(jv.StrictMode,{children:C.jsx(LM,{basename:"/mon-portfolio/",children:C.jsx(zC,{})})}));
