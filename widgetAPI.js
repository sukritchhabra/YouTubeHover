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
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.W=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function ga(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
ga.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};function ha(a){var b=w,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function ia(a,b){var c=ja;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;function ka(){}
;var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ma=/&/g,na=/</g,oa=/>/g,pa=/"/g,qa=/'/g,ra=/\x00/g,sa=/[\x00&<>"']/;
function x(a,b){return a<b?-1:a>b?1:0}
;var ta={};function ua(a){return ta[a]||(ta[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function y(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.a=a;for(var b in a)b in va||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
y.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
y.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
y.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};
var va={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function z(){this.c=this.c;this.f=this.f}
z.prototype.c=!1;z.prototype.dispose=function(){this.c||(this.c=!0,this.A())};
z.prototype.A=function(){if(this.f)for(;this.f.length;)this.f.shift()()};var A;a:{var wa=k.navigator;if(wa){var xa=wa.userAgent;if(xa){A=xa;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;var C=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",C);function ya(a){var b=arguments;if(1<b.length)C[b[0]]=b[1];else{var b=b[0],c;for(c in b)C[c]=b[c]}}
;var za=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Aa(a,b){var c;a:{c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Ba(a){return Array.prototype.concat.apply([],arguments)}
function E(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function Ca(){this.b=this.a=null}
var Da=new ga(function(){return new F},function(a){a.reset()},100);
Ca.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function F(){this.next=this.b=this.a=null}
F.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
F.prototype.reset=function(){this.next=this.b=this.a=null};var Ea=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fa(a,b,c){if("array"==n(b))for(var d=0;d<b.length;d++)Fa(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ga(a){var b=[],c;for(c in a)Fa(c,a[c],b);b[0]="";return b.join("")}
var Ha=/#|$/;function Ia(a,b){var c=m("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in C?C.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),ya("ERRORS",c))}
function Ja(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ia(b)}}:a}
;function Ka(a){"function"==n(a)&&(a=Ja(a));return window.setInterval(a,250)}
;function La(a){k.setTimeout(function(){throw a;},0)}
var G;
function Ma(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},
this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};
return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;var H="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function I(){}
I.prototype.next=function(){throw H;};
I.prototype.o=function(){return this};
function Na(a){if(a instanceof I)return a;if("function"==typeof a.o)return a.o(!1);if(p(a)){var b=0,c=new I;c.next=function(){for(;;){if(b>=a.length)throw H;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Oa(a,b){if(p(a))try{D(a,b,void 0)}catch(c){if(c!==H)throw c;}else{a=Na(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==H)throw c;}}}
function Pa(a){if(p(a))return E(a);a=Na(a);var b=[];Oa(a,function(a){b.push(a)});
return b}
;var Qa=B("Opera"),J=B("Trident")||B("MSIE"),Ra=B("Edge"),K=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Sa=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge");function Ta(){var a=k.document;return a?a.documentMode:void 0}
var L;a:{var Ua="",Va=function(){var a=A;if(K)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ra)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sa)return/WebKit\/(\S+)/.exec(a);if(Qa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Va&&(Ua=Va?Va[1]:"");if(J){var Wa=Ta();if(null!=Wa&&Wa>parseFloat(Ua)){L=String(Wa);break a}}L=Ua}var Xa=L,ja={};
function Ya(a){ia(a,function(){for(var b=0,c=la(String(Xa)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=x(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||x(0==h[2].length,0==l[2].length)||x(h[2],l[2]);h=h[3];l=l[3]}while(0==b)}return 0<=b})}
var Za;var $a=k.document;Za=$a&&J?Ta()||("CSS1Compat"==$a.compatMode?parseInt(Xa,10):5):void 0;function ab(a){M||bb();cb||(M(),cb=!0);var b=db,c=Da.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var M;function bb(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);M=function(){a.then(eb)}}else M=function(){var a=eb;
"function"!=n(k.setImmediate)||k.Window&&k.Window.prototype&&!B("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(G||(G=Ma()),G(a)):k.setImmediate(a)}}
var cb=!1,db=new Ca;function eb(){for(var a;a=db.remove();){try{a.a.call(a.b)}catch(c){La(c)}var b=Da;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}cb=!1}
;var fb;if(!(fb=!K&&!J)){var gb;if(gb=J)gb=9<=Number(Za);fb=gb}fb||K&&Ya("1.9.1");J&&Ya("9");function hb(){}
v(hb,ka);hb.prototype.clear=function(){var a=Pa(this.o(!0)),b=this;D(a,function(a){b.remove(a)})};function N(a){z.call(this);this.m=1;this.g=[];this.h=0;this.a=[];this.b={};this.v=!!a}
v(N,z);g=N.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
function ib(a,b,c){var d=O;if(a=d.b[a]){var e=d.a;(a=Aa(a,function(a){return e[a+1]==b&&e[a+2]==c}))&&d.F(a)}}
g.F=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=aa;else{if(c){var d=za(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.I=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var h=c[e];jb(this.a[h+1],this.a[h+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.a[h+1].apply(this.a[h+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.F(c)}}return 0!=e}return!1};
function jb(a,b,c){ab(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(D(b,this.F,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.A=function(){N.D.A.call(this);this.clear();this.g.length=0};function P(a){this.a=a}
v(P,hb);function kb(a){if(a.a)try{a.a.setItem("__sak","1"),a.a.removeItem("__sak")}catch(b){}}
g=P.prototype;g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.o=function(a){var b=0,c=this.a,d=new I;d.next=function(){if(b>=c.length)throw H;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function lb(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className,l;if(l="function"==typeof h.split)l=0<=za(h.split(/\s+/),a);l&&(e[d++]=b)}e.length=d;return e}return f}
function mb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function nb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
v(nb,P);function ob(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
v(ob,P);var pb=0,qb=m("yt.dom.dom.getNextId")||function(){return++pb};
u("yt.dom.dom.getNextId",qb);var Q={},rb=[],O=new N,sb={};function tb(){D(rb,function(a){a()})}
function ub(a){var b=E(document.getElementsByTagName("yt:"+a));a="yt-"+a;var c=document;a=E(c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):lb(a));return Ba(b,a)}
function R(a,b){return"yt:"==a.tagName.toLowerCase().substr(0,3)?a.getAttribute(b):a?a.dataset?a.dataset[ua(b)]:a.getAttribute("data-"+b):null}
function vb(a,b){O.I.apply(O,arguments)}
;var w=m("yt.events.events.listeners_")||{};u("yt.events.events.listeners_",w);var wb=m("yt.events.events.counter_")||{count:0};u("yt.events.events.counter_",wb);function xb(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ha(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function yb(a,b,c){if(a&&(a.addEventListener||a.attachEvent)){var d=xb(a,b,c);if(!d){var d=++wb.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new y(d);if(!mb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new y(b);
b.currentTarget=a;return c.call(a,b)};
f=Ja(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);w[d]=[a,b,c,f,!1]}}}
function zb(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in w){var b=w[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete w[a]}}))}
;var Ab=k.JSON.parse,Bb=k.JSON.stringify;function S(a){this.c=a||{};this.a={};this.a.host="http://www.youtube.com";this.a.title="";this.f=this.b=!1;a=document.getElementById("www-widgetapi-script");if(this.b=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.c,window.YTConfig||{},this.a];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var T=null;function U(a,b){for(var c=[a.c,window.YTConfig||{},a.a],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Cb(a,b,c){T||(T={},yb(window,"message",t(a.g,a)));T[c]=b}
S.prototype.g=function(a){if(a.origin==U(this,"host")||a.origin==U(this,"host").replace(/^http:/,"https:")){var b;try{b=Ab(a.data)}catch(c){return}this.f=!0;this.b||0!=a.origin.indexOf("https:")||(this.b=!0);if(a=T[b.id])a.B=!0,a.B&&(D(a.w,a.C,a),a.w.length=0),a.J(b)}};function Db(a){S.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
v(Db,S);function Eb(a){S.call(this,a);this.a.title="Thumbnail";this.a.videoId="";this.a.width=120;this.a.height=68}
v(Eb,S);function V(a,b,c){this.b=b;this.h=this.a=null;this.g=this[r]||(this[r]=++ca);this.c=0;this.B=!1;this.w=[];this.f=null;this.m=c;this.v={};b=document;if(a=q(a)?b.getElementById(a):a)if("iframe"!=a.tagName.toLowerCase()&&(b=Fb(this,a),this.h=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(b=a=this.a,b=b[r]||(b[r]=++ca),a.id="widget"+b),Q[this.a.id]=this,window.postMessage){this.f=new N;Gb(this);a=U(this.b,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in sb)Hb(this,
e)}}
g=V.prototype;g.S=function(a,b){this.a.width=a;this.a.height=b;return this};
g.R=function(){return this.a};
g.J=function(a){this.l(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
this.f.subscribe(a,c);Ib(this,a);return this};
function Hb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.m==c[0]&&Ib(a,d)}}
g.P=function(){this.a.id&&(Q[this.a.id]=null);var a=this.f;a&&"function"==typeof a.dispose&&a.dispose();if(this.h){var a=this.a,b=a.parentNode;b&&b.replaceChild(this.h,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);T&&(T[this.g]=null);this.b=null;var a=this.a,c;for(c in w)w[c][0]==a&&zb(c);this.h=this.a=null};
g.s=function(){return{}};
function W(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.C(b):a.w.push(b)}
g.l=function(a,b){if(!this.f.c){var c={target:this,data:b};this.f.I(a,c);vb(this.m+"."+a,c)}};
function Fb(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var h=d[e].value;null!=h&&""!=h&&"null"!=h&&c.setAttribute(d[e].name,h)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+U(a.b,"title"));(d=U(a.b,"width"))&&c.setAttribute("width",d);(d=U(a.b,"height"))&&c.setAttribute("height",d);var l=a.s();l.enablejsapi=window.postMessage?1:0;window.location.host&&(l.origin=window.location.protocol+"//"+window.location.host);
l.widgetid=a.g;window.location.href&&D(["debugjs","debugcss"],function(a){var b;b=window.location.href;var c=b.search(Ha),d;b:{d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break b;d+=e+1}d=-1}if(0>d)b=null;else{e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b=decodeURIComponent(b.substr(d,e-d).replace(/\+/g," "))}null===b||(l[a]=b)});
c.src=U(a.b,"host")+a.u()+"?"+Ga(l);return c}
g.H=function(){this.a&&this.a.contentWindow?this.C({event:"listening"}):window.clearInterval(this.c)};
function Gb(a){Cb(a.b,a,a.g);a.c=Ka(t(a.H,a));yb(a.a,"load",t(function(){window.clearInterval(this.c);this.c=Ka(t(this.H,this))},a))}
function Ib(a,b){a.v[b]||(a.v[b]=!0,W(a,"addEventListener",[b]))}
g.C=function(a){a.id=this.g;a.channel="widget";a=Bb(a);var b;b=this.b;var c,d=this.a.src.match(Ea);c=d[1];var e=d[2],f=d[3],d=d[4],h="";c&&(h+=c+":");f&&(h+="//",e&&(h+=e+"@"),h+=f,d&&(h+=":"+d));c=h;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(l){if(l.name&&"SyntaxError"==l.name)Ia(l,"WARNING");else throw l;}};function X(a,b){var c=new Eb(b);V.call(this,a,c,"thumbnail")}
v(X,V);function Jb(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){b={videoId:b,events:{}};b.width=R(a,"width");b.height=R(a,"height");b.thumbWidth=R(a,"thumb-width");b.thumbHeight=R(a,"thumb-height");b.thumbAlign=R(a,"thumb-align");var c=R(a,"onclick");c&&(b.events.onClick=c);new X(a,b)}}}
X.prototype.u=function(){return"/embed/"+U(this.b,"videoId")};
X.prototype.s=function(){return{player:0,thumb_width:U(this.b,"thumbWidth"),thumb_height:U(this.b,"thumbHeight"),thumb_align:U(this.b,"thumbAlign")}};
X.prototype.l=function(a,b){X.D.l.call(this,a,b?b.info:void 0)};function Kb(a){S.call(this,a);this.a.host="https://www.youtube.com";this.a.title="upload widget";this.a.width=640;this.a.height=.67*U(this,"width")}
v(Kb,S);function Y(a,b){var c=new Kb(b);V.call(this,a,c,"upload")}
v(Y,V);g=Y.prototype;g.u=function(){return"/upload_embed"};
g.s=function(){var a={},b=U(this.b,"webcamOnly");null!=b&&(a.webcam_only=b);return a};
g.l=function(a,b){Y.D.l.call(this,a,b);"onApiReady"==a&&W(this,"hostWindowReady")};
g.K=function(a){W(this,"setVideoDescription",arguments)};
g.M=function(a){W(this,"setVideoKeywords",arguments)};
g.N=function(a){W(this,"setVideoPrivacy",arguments)};
g.L=function(a){W(this,"setVideoDraftPrivacy",arguments)};
g.O=function(a){W(this,"setVideoTitle",arguments)};kb(new nb);kb(new ob);function Lb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Mb(a){return 0==a.search("get")||0==a.search("is")}
;function Z(a,b){var c=new Db(b);V.call(this,a,c,"player");this.i={};this.j={}}
v(Z,V);function Nb(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){var c=R(a,"width"),d=R(a,"height");new Z(a,{videoId:b,width:c,height:d})}}}
g=Z.prototype;g.u=function(){return"/embed/"+U(this.b,"videoId")};
g.s=function(){var a=U(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));return a};
g.J=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(ba(a))for(var c in a)this.i[c]=a[c];break;case "infoDelivery":Ob(this,a);break;case "initialDelivery":window.clearInterval(this.c);this.j={};this.i={};Pb(this,a.apiInterface);Ob(this,a);break;default:this.l(b,a)}};
function Ob(a,b){if(ba(b))for(var c in b)a.j[c]=b[c]}
function Pb(a,b){D(b,function(a){this[a]||("getCurrentTime"==a?this[a]=function(){var a=this.j.currentTime;if(1==this.j.playerState){var b=(fa()/1E3-this.j.currentTimeLastUpdated_)*this.j.playbackRate;0<b&&(a+=Math.min(b,1))}return a}:Lb(a)?this[a]=function(){this.j={};
this.i={};W(this,a,arguments);return this}:Mb(a)?this[a]=function(){var b=0;
0==a.search("get")?b=3:0==a.search("is")&&(b=2);return this.j[a.charAt(b).toLowerCase()+a.substr(b+1)]}:this[a]=function(){W(this,a,arguments);
return this})},a)}
g.V=function(){var a;a=parseInt(U(this.b,"width"),10);var b=parseInt(U(this.b,"height"),10);var c=U(this.b,"host")+this.u();sa.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ma,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(na,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(oa,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(pa,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(qa,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(ra,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=function(a){return this.i.namespaces?a?this.i[a].options||[]:this.i.namespaces||[]:[]};
g.T=function(a,b){if(this.i.namespaces&&a&&b)return this.i[a][b]};u("YT.PlayerState.UNSTARTED",-1);u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.UploadWidgetEvent.API_READY","onApiReady");u("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");u("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");u("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");u("YT.UploadWidgetState.IDLE",0);u("YT.UploadWidgetState.PENDING",1);
u("YT.UploadWidgetState.ERROR",2);u("YT.UploadWidgetState.PLAYBACK",3);u("YT.UploadWidgetState.RECORDING",4);u("YT.UploadWidgetState.STOPPED",5);u("YT.get",function(a){return Q[a]});
u("YT.scan",tb);u("YT.subscribe",function(a,b,c){O.subscribe(a,b,c);sb[a]=!0;for(var d in Q)Hb(Q[d],a)});
u("YT.unsubscribe",function(a,b,c){ib(a,b,c)});
u("YT.Player",Z);u("YT.Thumbnail",X);u("YT.UploadWidget",Y);V.prototype.destroy=V.prototype.P;V.prototype.setSize=V.prototype.S;V.prototype.getIframe=V.prototype.R;V.prototype.addEventListener=V.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.V;Z.prototype.getOptions=Z.prototype.U;Z.prototype.getOption=Z.prototype.T;Y.prototype.setVideoDescription=Y.prototype.K;Y.prototype.setVideoKeywords=Y.prototype.M;Y.prototype.setVideoPrivacy=Y.prototype.N;Y.prototype.setVideoTitle=Y.prototype.O;
Y.prototype.setVideoDraftPrivacy=Y.prototype.L;rb.push(function(){var a=ub("player");D(a,Nb)});
rb.push(function(){var a=ub("thumbnail");D(a,Jb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||tb();var Qb=m("onYTReady");Qb&&Qb();var Rb=m("onYouTubeIframeAPIReady");Rb&&Rb();var Sb=m("onYouTubePlayerAPIReady");Sb&&Sb();}).call(this);