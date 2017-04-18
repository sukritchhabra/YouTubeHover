(function(){var g,k=this;function m(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function p(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function q(a){return"string"==typeof a}
function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var r="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=da:t=ea;return t.apply(null,arguments)}
var fa=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.W=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var ga=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,na=/[\x00&<>"']/;
function w(a,b){return a<b?-1:a>b?1:0}
;var oa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
function pa(a,b){var c;a:{c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function qa(a){return Array.prototype.concat.apply([],arguments)}
function y(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function ra(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
ra.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var z;a:{var sa=k.navigator;if(sa){var ta=sa.userAgent;if(ta){z=ta;break a}}z=""}function A(a){return-1!=z.indexOf(a)}
;function ua(a){var b=B,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function va(a){k.setTimeout(function(){throw a;},0)}
var C;
function wa(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},
this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};
return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function xa(){this.b=this.a=null}
var ya=new ra(function(){return new D},function(a){a.reset()},100);
xa.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function D(){this.next=this.b=this.a=null}
D.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
D.prototype.reset=function(){this.next=this.b=this.a=null};function za(a){E||Aa();F||(E(),F=!0);var b=Ba,c=ya.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var E;function Aa(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);E=function(){a.then(Ca)}}else E=function(){var a=Ca;
"function"!=n(k.setImmediate)||k.Window&&k.Window.prototype&&!A("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(C||(C=wa()),C(a)):k.setImmediate(a)}}
var F=!1,Ba=new xa;function Ca(){for(var a;a=Ba.remove();){try{a.a.call(a.b)}catch(c){va(c)}var b=ya;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}F=!1}
;function G(){this.c=this.c;this.f=this.f}
G.prototype.c=!1;G.prototype.dispose=function(){this.c||(this.c=!0,this.A())};
G.prototype.A=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function Da(a,b){var c=Ea;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var Fa=A("Opera"),H=A("Trident")||A("MSIE"),Ga=A("Edge"),I=A("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Ha=-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge");function Ia(){var a=k.document;return a?a.documentMode:void 0}
var Ja;a:{var Ka="",La=function(){var a=z;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ga)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ha)return/WebKit\/(\S+)/.exec(a);if(Fa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
La&&(Ka=La?La[1]:"");if(H){var Ma=Ia();if(null!=Ma&&Ma>parseFloat(Ka)){Ja=String(Ma);break a}}Ja=Ka}var Na=Ja,Ea={};
function Oa(a){Da(a,function(){for(var b=0,c=ga(String(Na)).split("."),d=ga(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var f=c[h]||"",l=d[h]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==f[0].length&&0==l[0].length)break;b=w(0==f[1].length?0:parseInt(f[1],10),0==l[1].length?0:parseInt(l[1],10))||w(0==f[2].length,0==l[2].length)||w(f[2],l[2]);f=f[3];l=l[3]}while(0==b)}return 0<=b})}
var Pa;var Qa=k.document;Pa=Qa&&H?Ia()||("CSS1Compat"==Qa.compatMode?parseInt(Na,10):5):void 0;var Ra;if(!(Ra=!I&&!H)){var Sa;if(Sa=H)Sa=9<=Number(Pa);Ra=Sa}Ra||I&&Oa("1.9.1");H&&Oa("9");function Ta(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var h=b.getElementsByClassName(a);return h}h=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=h[c];c++){var f=b.className,l;if(l="function"==typeof f.split)l=0<=oa(f.split(/\s+/),a);l&&(e[d++]=b)}e.length=d;return e}return h}
function Ua(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var J="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function K(){}
K.prototype.next=function(){throw J;};
K.prototype.o=function(){return this};
function Va(a){if(a instanceof K)return a;if("function"==typeof a.o)return a.o(!1);if(p(a)){var b=0,c=new K;c.next=function(){for(;;){if(b>=a.length)throw J;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Wa(a,b){if(p(a))try{x(a,b,void 0)}catch(c){if(c!==J)throw c;}else{a=Va(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==J)throw c;}}}
function Xa(a){if(p(a))return y(a);a=Va(a);var b=[];Wa(a,function(a){b.push(a)});
return b}
;var Ya=k.JSON.parse,Za=k.JSON.stringify;function L(a){G.call(this);this.m=1;this.g=[];this.h=0;this.a=[];this.b={};this.v=!!a}
v(L,G);g=L.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
function $a(a,b,c){var d=M;if(a=d.b[a]){var e=d.a;(a=pa(a,function(a){return e[a+1]==b&&e[a+2]==c}))&&d.F(a)}}
g.F=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=aa;else{if(c){var d=oa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.I=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var f=c[e];ab(this.a[f+1],this.a[f+2],d)}else{this.h++;try{for(e=0,h=c.length;e<h;e++)f=c[e],this.a[f+1].apply(this.a[f+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.F(c)}}return 0!=e}return!1};
function ab(a,b,c){za(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(x(b,this.F,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.A=function(){L.D.A.call(this);this.clear();this.g.length=0};function bb(){}
;function cb(){}
v(cb,bb);cb.prototype.clear=function(){var a=Xa(this.o(!0)),b=this;x(a,function(a){b.remove(a)})};function N(a){this.a=a}
v(N,cb);function db(a){if(a.a)try{a.a.setItem("__sak","1"),a.a.removeItem("__sak")}catch(b){}}
g=N.prototype;g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.o=function(a){var b=0,c=this.a,d=new K;d.next=function(){if(b>=c.length)throw J;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function eb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
v(eb,N);function fb(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
v(fb,N);var gb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hb(a,b,c){if("array"==n(b))for(var d=0;d<b.length;d++)hb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function ib(a){var b=[],c;for(c in a)hb(c,a[c],b);b[0]="";return b.join("")}
var jb=/#|$/;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",O);function kb(a){var b=arguments;if(1<b.length)O[b[0]]=b[1];else{var b=b[0],c;for(c in b)O[c]=b[c]}}
;function lb(a,b){var c=m("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in O?O.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),kb("ERRORS",c))}
function mb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lb(b)}}:a}
;var nb=0,ob=m("ytDomDomGetNextId")||function(){return++nb};
u("ytDomDomGetNextId",ob);var pb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function P(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.a=a;for(var b in a)b in pb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
P.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
P.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
P.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var B=m("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",B);var qb=m("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",qb);function rb(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ua(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function sb(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in B){var b=B[a],d=b[0],e=b[1],h=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,h,b):d.detachEvent&&d.detachEvent("on"+e,h);delete B[a]}}))}
function tb(a,b,c){var d;d=void 0===d?!1:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rb(a,b,c,d);if(!e){var e=++qb.count+"",h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=h?function(d){d=new P(d);if(!Ua(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new P(b);
b.currentTarget=a;return c.call(a,b)};
f=mb(f);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,d)):a.attachEvent("on"+b,f);B[e]=[a,b,c,f,d]}}}
;function ub(a){"function"==n(a)&&(a=mb(a));return window.setInterval(a,250)}
;var vb={};function wb(a){return vb[a]||(vb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Q={},xb=[],M=new L,yb={};function zb(){x(xb,function(a){a()})}
function Ab(a){var b=y(document.getElementsByTagName("yt:"+a));a="yt-"+a;var c=document;a=y(c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Ta(a));return qa(b,a)}
function R(a,b){return"yt:"==a.tagName.toLowerCase().substr(0,3)?a.getAttribute(b):a?a.dataset?a.dataset[wb(b)]:a.getAttribute("data-"+b):null}
function Bb(a,b){M.I.apply(M,arguments)}
;function S(a,b,c){this.b=b;this.h=this.a=null;this.g=this[r]||(this[r]=++ca);this.c=0;this.B=!1;this.w=[];this.f=null;this.m=c;this.v={};b=document;if(a=q(a)?b.getElementById(a):a)if("iframe"!=a.tagName.toLowerCase()&&(b=Cb(this,a),this.h=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(b=a=this.a,b=b[r]||(b[r]=++ca),a.id="widget"+b),Q[this.a.id]=this,window.postMessage){this.f=new L;Db(this);a=T(this.b,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in yb)Eb(this,
e)}}
g=S.prototype;g.S=function(a,b){this.a.width=a;this.a.height=b;return this};
g.R=function(){return this.a};
g.J=function(a){this.l(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
this.f.subscribe(a,c);Fb(this,a);return this};
function Eb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.m==c[0]&&Fb(a,d)}}
g.P=function(){this.a.id&&(Q[this.a.id]=null);var a=this.f;a&&"function"==typeof a.dispose&&a.dispose();if(this.h){var a=this.a,b=a.parentNode;b&&b.replaceChild(this.h,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);U&&(U[this.g]=null);this.b=null;var a=this.a,c;for(c in B)B[c][0]==a&&sb(c);this.h=this.a=null};
g.s=function(){return{}};
function V(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.C(b):a.w.push(b)}
g.l=function(a,b){if(!this.f.c){var c={target:this,data:b};this.f.I(a,c);Bb(this.m+"."+a,c)}};
function Cb(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,h=d.length;e<h;e++){var f=d[e].value;null!=f&&""!=f&&"null"!=f&&c.setAttribute(d[e].name,f)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+T(a.b,"title"));(d=T(a.b,"width"))&&c.setAttribute("width",d);(d=T(a.b,"height"))&&c.setAttribute("height",d);var l=a.s();l.enablejsapi=window.postMessage?1:0;window.location.host&&(l.origin=window.location.protocol+"//"+window.location.host);
l.widgetid=a.g;window.location.href&&x(["debugjs","debugcss"],function(a){var b;b=window.location.href;var c=b.search(jb),d;b:{d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break b;d+=e+1}d=-1}if(0>d)b=null;else{e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b=decodeURIComponent(b.substr(d,e-d).replace(/\+/g," "))}null===b||(l[a]=b)});
c.src=T(a.b,"host")+a.u()+"?"+ib(l);return c}
g.H=function(){this.a&&this.a.contentWindow?this.C({event:"listening"}):window.clearInterval(this.c)};
function Db(a){Gb(a.b,a,a.g);a.c=ub(t(a.H,a));tb(a.a,"load",t(function(){window.clearInterval(this.c);this.c=ub(t(this.H,this))},a))}
function Fb(a,b){a.v[b]||(a.v[b]=!0,V(a,"addEventListener",[b]))}
g.C=function(a){a.id=this.g;a.channel="widget";a=Za(a);var b;b=this.b;var c,d=this.a.src.match(gb);c=d[1];var e=d[2],h=d[3],d=d[4],f="";c&&(f+=c+":");h&&(f+="//",e&&(f+=e+"@"),f+=h,d&&(f+=":"+d));c=f;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];if(!this.a.contentWindow)throw Error("The YouTube player is not attached to the DOM.");for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(l){if(l.name&&"SyntaxError"==l.name)lb(l,
"WARNING");else throw l;}};db(new eb);db(new fb);function Hb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Ib(a){return 0==a.search("get")||0==a.search("is")}
;function W(a){this.c=a||{};this.a={};this.a.host="http://www.youtube.com";this.a.title="";this.f=this.b=!1;a=document.getElementById("www-widgetapi-script");if(this.b=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.c,window.YTConfig||{},this.a];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var U=null;function T(a,b){for(var c=[a.c,window.YTConfig||{},a.a],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Gb(a,b,c){U||(U={},tb(window,"message",t(a.g,a)));U[c]=b}
W.prototype.g=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){var b;try{b=Ya(a.data)}catch(c){return}this.f=!0;this.b||0!=a.origin.indexOf("https:")||(this.b=!0);if(a=U[b.id])a.B=!0,a.B&&(x(a.w,a.C,a),a.w.length=0),a.J(b)}};function Jb(a){W.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
v(Jb,W);function X(a,b){var c=new Jb(b);S.call(this,a,c,"player");this.i={};this.j={}}
v(X,S);function Kb(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){var c=R(a,"width"),d=R(a,"height");new X(a,{videoId:b,width:c,height:d})}}}
g=X.prototype;g.u=function(){return"/embed/"+T(this.b,"videoId")};
g.s=function(){var a=T(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));return a};
g.J=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(ba(a))for(var c in a)this.i[c]=a[c];break;case "infoDelivery":Lb(this,a);break;case "initialDelivery":window.clearInterval(this.c);this.j={};this.i={};Mb(this,a.apiInterface);Lb(this,a);break;default:this.l(b,a)}};
function Lb(a,b){if(ba(b))for(var c in b)a.j[c]=b[c]}
function Mb(a,b){x(b,function(a){this[a]||("getCurrentTime"==a?this[a]=function(){var a=this.j.currentTime;if(1==this.j.playerState){var b=(fa()/1E3-this.j.currentTimeLastUpdated_)*this.j.playbackRate;0<b&&(a+=Math.min(b,1))}return a}:Hb(a)?this[a]=function(){this.j={};
this.i={};V(this,a,arguments);return this}:Ib(a)?this[a]=function(){var b=0;
0==a.search("get")?b=3:0==a.search("is")&&(b=2);return this.j[a.charAt(b).toLowerCase()+a.substr(b+1)]}:this[a]=function(){V(this,a,arguments);
return this})},a)}
g.V=function(){var a;a=parseInt(T(this.b,"width"),10);var b=parseInt(T(this.b,"height"),10);var c=T(this.b,"host")+this.u();na.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ha,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ia,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(ja,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(ka,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(la,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ma,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=function(a){return this.i.namespaces?a?this.i[a].options||[]:this.i.namespaces||[]:[]};
g.T=function(a,b){if(this.i.namespaces&&a&&b)return this.i[a][b]};function Nb(a){W.call(this,a);this.a.title="Thumbnail";this.a.videoId="";this.a.width=120;this.a.height=68}
v(Nb,W);function Y(a,b){var c=new Nb(b);S.call(this,a,c,"thumbnail")}
v(Y,S);function Ob(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){b={videoId:b,events:{}};b.width=R(a,"width");b.height=R(a,"height");b.thumbWidth=R(a,"thumb-width");b.thumbHeight=R(a,"thumb-height");b.thumbAlign=R(a,"thumb-align");var c=R(a,"onclick");c&&(b.events.onClick=c);new Y(a,b)}}}
Y.prototype.u=function(){return"/embed/"+T(this.b,"videoId")};
Y.prototype.s=function(){return{player:0,thumb_width:T(this.b,"thumbWidth"),thumb_height:T(this.b,"thumbHeight"),thumb_align:T(this.b,"thumbAlign")}};
Y.prototype.l=function(a,b){Y.D.l.call(this,a,b?b.info:void 0)};function Pb(a){W.call(this,a);this.a.host="https://www.youtube.com";this.a.title="upload widget";this.a.width=640;this.a.height=.67*T(this,"width")}
v(Pb,W);function Z(a,b){var c=new Pb(b);S.call(this,a,c,"upload")}
v(Z,S);g=Z.prototype;g.u=function(){return"/upload_embed"};
g.s=function(){var a={},b=T(this.b,"webcamOnly");null!=b&&(a.webcam_only=b);return a};
g.l=function(a,b){Z.D.l.call(this,a,b);"onApiReady"==a&&V(this,"hostWindowReady")};
g.K=function(a){V(this,"setVideoDescription",arguments)};
g.M=function(a){V(this,"setVideoKeywords",arguments)};
g.N=function(a){V(this,"setVideoPrivacy",arguments)};
g.L=function(a){V(this,"setVideoDraftPrivacy",arguments)};
g.O=function(a){V(this,"setVideoTitle",arguments)};u("YT.PlayerState.UNSTARTED",-1);u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.UploadWidgetEvent.API_READY","onApiReady");u("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");u("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");u("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");u("YT.UploadWidgetState.IDLE",0);u("YT.UploadWidgetState.PENDING",1);
u("YT.UploadWidgetState.ERROR",2);u("YT.UploadWidgetState.PLAYBACK",3);u("YT.UploadWidgetState.RECORDING",4);u("YT.UploadWidgetState.STOPPED",5);u("YT.get",function(a){return Q[a]});
u("YT.scan",zb);u("YT.subscribe",function(a,b,c){M.subscribe(a,b,c);yb[a]=!0;for(var d in Q)Eb(Q[d],a)});
u("YT.unsubscribe",function(a,b,c){$a(a,b,c)});
u("YT.Player",X);u("YT.Thumbnail",Y);u("YT.UploadWidget",Z);S.prototype.destroy=S.prototype.P;S.prototype.setSize=S.prototype.S;S.prototype.getIframe=S.prototype.R;S.prototype.addEventListener=S.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.V;X.prototype.getOptions=X.prototype.U;X.prototype.getOption=X.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;xb.push(function(){var a=Ab("player");x(a,Kb)});
xb.push(function(){var a=Ab("thumbnail");x(a,Ob)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||zb();var Qb=m("onYTReady");Qb&&Qb();var Rb=m("onYouTubeIframeAPIReady");Rb&&Rb();var Sb=m("onYouTubePlayerAPIReady");Sb&&Sb();}).call(this);