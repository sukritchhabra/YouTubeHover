(function(){var g,k=this;function l(a){return"string"==typeof a}
function n(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function q(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var r="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=da:t=ea;return t.apply(null,arguments)}
function fa(a,b){for(var c in b)a[c]=b[c]}
var ga=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.W=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ia=/&/g,ja=/</g,ka=/>/g,la=/"/g,ma=/'/g,na=/\x00/g,oa=/[\x00&<>"']/;
function w(a,b){return a<b?-1:a>b?1:0}
;var pa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
function qa(a,b){a:{var c=a.length;for(var d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]}
function ra(a){return Array.prototype.concat.apply([],arguments)}
function y(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function sa(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};var z;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){z=ua;break a}}z=""}function A(a){return-1!=z.indexOf(a)}
;function va(a){var b=B,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function wa(a){k.setTimeout(function(){throw a;},0)}
var C;
function xa(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},
this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};
return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function ya(){this.b=this.a=null}
var za=new sa(function(){return new D},function(a){a.reset()},100);
ya.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function D(){this.next=this.b=this.a=null}
D.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
D.prototype.reset=function(){this.next=this.b=this.a=null};function Aa(a){E||Ba();F||(E(),F=!0);var b=Ca,c=za.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var E;function Ba(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);E=function(){a.then(Da)}}else E=function(){var a=Da;
"function"!=p(k.setImmediate)||k.Window&&k.Window.prototype&&!A("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(C||(C=xa()),C(a)):k.setImmediate(a)}}
var F=!1,Ca=new ya;function Da(){for(var a;a=Ca.remove();){try{a.a.call(a.b)}catch(c){wa(c)}var b=za;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}F=!1}
;function G(){this.c=this.c;this.f=this.f}
G.prototype.c=!1;G.prototype.dispose=function(){this.c||(this.c=!0,this.A())};
G.prototype.A=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function Ea(a,b){var c=Fa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var Ga=A("Opera"),H=A("Trident")||A("MSIE"),Ha=A("Edge"),Ia=A("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Ja=-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge");function Ka(){var a=k.document;return a?a.documentMode:void 0}
var La;a:{var Ma="",Na=function(){var a=z;if(Ia)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ha)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ja)return/WebKit\/(\S+)/.exec(a);if(Ga)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Na&&(Ma=Na?Na[1]:"");if(H){var Oa=Ka();if(null!=Oa&&Oa>parseFloat(Ma)){La=String(Oa);break a}}La=Ma}var Pa=La,Fa={};
function Qa(a){Ea(a,function(){for(var b=0,c=ha(String(Pa)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var f=c[h]||"",m=d[h]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==f[0].length&&0==m[0].length)break;b=w(0==f[1].length?0:parseInt(f[1],10),0==m[1].length?0:parseInt(m[1],10))||w(0==f[2].length,0==m[2].length)||w(f[2],m[2]);f=f[3];m=m[3]}while(0==b)}return 0<=b})}
var Ra;var Sa=k.document;Ra=Sa&&H?Ka()||("CSS1Compat"==Sa.compatMode?parseInt(Pa,10):5):void 0;var Ta;if(!(Ta=!Ia&&!H)){var Ua;if(Ua=H)Ua=9<=Number(Ra);Ta=Ua}Ta||Ia&&Qa("1.9.1");H&&Qa("9");function Va(a,b){var c;var d=document;var e,h;d=b||d;if(d.querySelectorAll&&d.querySelector&&a)return d.querySelectorAll(""+(a?"."+a:""));if(a&&d.getElementsByClassName)return h=d.getElementsByClassName(a);h=d.getElementsByTagName("*");if(a){var f={};for(c=e=0;d=h[c];c++){var m=d.className,X;if(X="function"==typeof m.split)X=0<=pa(m.split(/\s+/),a);X&&(f[e++]=d)}f.length=e;return f}return h}
function Wa(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var I="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function J(){}
J.prototype.next=function(){throw I;};
J.prototype.o=function(){return this};
function Xa(a){if(a instanceof J)return a;if("function"==typeof a.o)return a.o(!1);if(q(a)){var b=0,c=new J;c.next=function(){for(;;){if(b>=a.length)throw I;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ya(a,b){if(q(a))try{x(a,b,void 0)}catch(c){if(c!==I)throw c;}else{a=Xa(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==I)throw c;}}}
function Za(a){if(q(a))return y(a);a=Xa(a);var b=[];Ya(a,function(a){b.push(a)});
return b}
;var $a=k.JSON.parse,ab=k.JSON.stringify;function K(a){G.call(this);this.m=1;this.g=[];this.h=0;this.a=[];this.b={};this.v=!!a}
v(K,G);g=K.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
function bb(a,b,c){var d=L;if(a=d.b[a]){var e=d.a;(a=qa(a,function(a){return e[a+1]==b&&e[a+2]==c}))&&d.F(a)}}
g.F=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=aa;else{if(c){var d=pa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.I=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var f=c[e];cb(this.a[f+1],this.a[f+2],d)}else{this.h++;try{for(e=0,h=c.length;e<h;e++)f=c[e],this.a[f+1].apply(this.a[f+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;f=this.g.pop();)this.F(f)}}return 0!=e}return!1};
function cb(a,b,c){Aa(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(x(b,this.F,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.A=function(){K.D.A.call(this);this.clear();this.g.length=0};function db(){}
;function eb(){}
v(eb,db);eb.prototype.clear=function(){var a=Za(this.o(!0)),b=this;x(a,function(a){b.remove(a)})};function M(a){this.a=a}
v(M,eb);function fb(a){if(a.a)try{a.a.setItem("__sak","1"),a.a.removeItem("__sak")}catch(b){}}
g=M.prototype;g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!l(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.o=function(a){var b=0,c=this.a,d=new J;d.next=function(){if(b>=c.length)throw I;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!l(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function gb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
v(gb,M);function hb(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
v(hb,M);var ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jb(a){var b=a.match(ib);a=b[1];var c=b[2],d=b[3],b=b[4],e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function kb(a,b,c){if("array"==p(b))for(var d=0;d<b.length;d++)kb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function lb(a){var b=[],c;for(c in a)kb(c,a[c],b);return b.join("&")}
var mb=/#|$/;var N=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",N);function nb(a){var b=arguments;if(1<b.length)N[b[0]]=b[1];else{var b=b[0],c;for(c in b)N[c]=b[c]}}
;function ob(a,b){var c=n("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in N?N.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),nb("ERRORS",c))}
function pb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ob(b)}}:a}
;var qb=0,rb=n("ytDomDomGetNextId")||function(){return++qb};
u("ytDomDomGetNextId",rb);var sb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function O(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.a=a;for(var b in a)b in sb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
O.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
O.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
O.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var B=n("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",B);var tb=n("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",tb);function ub(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return va(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function vb(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in B){var b=B[a],d=b[0],e=b[1],h=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,h,b):d.detachEvent&&d.detachEvent("on"+e,h);delete B[a]}}))}
function wb(a,b,c){var d=void 0===d?!1:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ub(a,b,c,d);if(!e){var e=++tb.count+"",h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var f=h?function(d){d=new O(d);if(!Wa(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new O(b);
b.currentTarget=a;return c.call(a,b)};
f=pb(f);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,d)):a.attachEvent("on"+b,f);B[e]=[a,b,c,f,d]}}}
;function xb(a){"function"==p(a)&&(a=pb(a));return window.setInterval(a,250)}
;var yb={};function zb(a){return yb[a]||(yb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var P={},Ab=[],L=new K,Bb={};function Cb(){x(Ab,function(a){a()})}
function Db(a,b){b||(b=document);var c=y(b.getElementsByTagName("yt:"+a)),d="yt-"+a,e=b||document,d=y(e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):Va(d,b));return ra(c,d)}
function Q(a,b){return"yt:"==a.tagName.toLowerCase().substr(0,3)?a.getAttribute(b):a?a.dataset?a.dataset[zb(b)]:a.getAttribute("data-"+b):null}
function Eb(a,b){L.I.apply(L,arguments)}
;function R(a,b,c){this.h=this.a=this.b=null;this.g=this[r]||(this[r]=++ca);this.c=0;this.B=!1;this.w=[];this.f=null;this.m=c;this.v={};c=document;if(a=l(a)?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?jb(a.src):"https://www.youtube.com"),this.b=new S(b),c||(b=Fb(this,a),this.h=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(a=b=this.a,a=a[r]||(a[r]=++ca),b.id="widget"+a),P[this.a.id]=this,window.postMessage){this.f=new K;Gb(this);b=T(this.b,"events");
for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Bb)Hb(this,e)}}
g=R.prototype;g.S=function(a,b){this.a.width=a;this.a.height=b;return this};
g.R=function(){return this.a};
g.J=function(a){this.l(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
this.f.subscribe(a,c);Ib(this,a);return this};
function Hb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.m==c[0]&&Ib(a,d)}}
g.P=function(){this.a.id&&(P[this.a.id]=null);var a=this.f;a&&"function"==typeof a.dispose&&a.dispose();if(this.h){var a=this.a,b=a.parentNode;b&&b.replaceChild(this.h,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);U&&(U[this.g]=null);this.b=null;var a=this.a,c;for(c in B)B[c][0]==a&&vb(c);this.h=this.a=null};
g.s=function(){return{}};
function V(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.C(b):a.w.push(b)}
g.l=function(a,b){if(!this.f.c){var c={target:this,data:b};this.f.I(a,c);Eb(this.m+"."+a,c)}};
function Fb(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,h=d.length;e<h;e++){var f=d[e].value;null!=f&&""!=f&&"null"!=f&&c.setAttribute(d[e].name,f)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+T(a.b,"title"));(d=T(a.b,"width"))&&c.setAttribute("width",d);(d=T(a.b,"height"))&&c.setAttribute("height",d);var m=a.s();m.enablejsapi=window.postMessage?1:0;window.location.host&&(m.origin=window.location.protocol+"//"+window.location.host);
m.widgetid=a.g;window.location.href&&x(["debugjs","debugcss"],function(a){var b=window.location.href;var c=b.search(mb);b:{var d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break b;d+=e+1}d=-1}if(0>d)b=null;else{e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b=decodeURIComponent(b.substr(d,e-d).replace(/\+/g," "))}null===b||(m[a]=b)});
c.src=T(a.b,"host")+a.u()+"?"+lb(m);return c}
g.H=function(){this.a&&this.a.contentWindow?this.C({event:"listening"}):window.clearInterval(this.c)};
function Gb(a){Jb(a.b,a,a.g);a.c=xb(t(a.H,a));wb(a.a,"load",t(function(){window.clearInterval(this.c);this.c=xb(t(this.H,this))},a))}
function Ib(a,b){a.v[b]||(a.v[b]=!0,V(a,"addEventListener",[b]))}
g.C=function(a){a.id=this.g;a.channel="widget";a=ab(a);var b=this.b;var c=jb(this.a.src);b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];if(!this.a.contentWindow)throw Error("The YouTube player is not attached to the DOM.");for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&"SyntaxError"==d.name)ob(d,"WARNING");else throw d;}};fb(new gb);fb(new hb);function Kb(a){return 0==a.search("get")||0==a.search("is")}
function Lb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function W(a,b){var c={title:"video player",videoId:"",width:640,height:360};b&&fa(c,b);R.call(this,a,c,"player");this.i={};this.j={}}
v(W,R);function Mb(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new W(a,b))}}
g=W.prototype;g.u=function(){return"/embed/"+T(this.b,"videoId")};
g.s=function(){var a=T(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));return a};
g.J=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(ba(a))for(var c in a)this.i[c]=a[c];break;case "infoDelivery":Nb(this,a);break;case "initialDelivery":window.clearInterval(this.c);this.j={};this.i={};Ob(this,a.apiInterface);Nb(this,a);break;default:this.l(b,a)}};
function Nb(a,b){if(ba(b))for(var c in b)a.j[c]=b[c]}
function Ob(a,b){x(b,function(a){this[a]||("getCurrentTime"==a?this[a]=function(){var a=this.j.currentTime;if(1==this.j.playerState){var b=(ga()/1E3-this.j.currentTimeLastUpdated_)*this.j.playbackRate;0<b&&(a+=Math.min(b,1))}return a}:Lb(a)?this[a]=function(){this.j={};
this.i={};V(this,a,arguments);return this}:Kb(a)?this[a]=function(){var b=0;
0==a.search("get")?b=3:0==a.search("is")&&(b=2);return this.j[a.charAt(b).toLowerCase()+a.substr(b+1)]}:this[a]=function(){V(this,a,arguments);
return this})},a)}
g.V=function(){var a=parseInt(T(this.b,"width"),10);var b=parseInt(T(this.b,"height"),10);var c=T(this.b,"host")+this.u();oa.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ia,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ja,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(ka,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(la,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(ma,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(na,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=function(a){return this.i.namespaces?a?this.i[a].options||[]:this.i.namespaces||[]:[]};
g.T=function(a,b){if(this.i.namespaces&&a&&b)return this.i[a][b]};function Y(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};b&&fa(c,b);R.call(this,a,c,"thumbnail")}
v(Y,R);function Pb(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{}};b.width=Q(a,"width");b.height=Q(a,"height");b.thumbWidth=Q(a,"thumb-width");b.thumbHeight=Q(a,"thumb-height");b.thumbAlign=Q(a,"thumb-align");var c=Q(a,"onclick");c&&(b.events.onClick=c);new Y(a,b)}}}
Y.prototype.u=function(){return"/embed/"+T(this.b,"videoId")};
Y.prototype.s=function(){return{player:0,thumb_width:T(this.b,"thumbWidth"),thumb_height:T(this.b,"thumbHeight"),thumb_align:T(this.b,"thumbAlign")}};
Y.prototype.l=function(a,b){Y.D.l.call(this,a,b?b.info:void 0)};function S(a){this.c=a||{};this.a={};this.f=this.b=!1;a=document.getElementById("www-widgetapi-script");if(this.b=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.c,window.YTConfig||{},this.a];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var U=null;function T(a,b){for(var c=[a.c,window.YTConfig||{},a.a],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Jb(a,b,c){U||(U={},wb(window,"message",t(a.g,a)));U[c]=b}
S.prototype.g=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){try{var b=$a(a.data)}catch(c){return}this.f=!0;this.b||0!=a.origin.indexOf("https:")||(this.b=!0);if(a=U[b.id])a.B=!0,a.B&&(x(a.w,a.C,a),a.w.length=0),a.J(b)}};function Qb(a){S.call(this,a);this.a.host="https://www.youtube.com";this.a.title="upload widget";this.a.width=640;this.a.height=.67*T(this,"width")}
v(Qb,S);function Z(a,b){var c=new Qb(b);R.call(this,a,c,"upload")}
v(Z,R);g=Z.prototype;g.u=function(){return"/upload_embed"};
g.s=function(){var a={},b=T(this.b,"webcamOnly");null!=b&&(a.webcam_only=b);return a};
g.l=function(a,b){Z.D.l.call(this,a,b);"onApiReady"==a&&V(this,"hostWindowReady")};
g.K=function(a){V(this,"setVideoDescription",arguments)};
g.M=function(a){V(this,"setVideoKeywords",arguments)};
g.N=function(a){V(this,"setVideoPrivacy",arguments)};
g.L=function(a){V(this,"setVideoDraftPrivacy",arguments)};
g.O=function(a){V(this,"setVideoTitle",arguments)};u("YT.PlayerState.UNSTARTED",-1);u("YT.PlayerState.ENDED",0);u("YT.PlayerState.PLAYING",1);u("YT.PlayerState.PAUSED",2);u("YT.PlayerState.BUFFERING",3);u("YT.PlayerState.CUED",5);u("YT.UploadWidgetEvent.API_READY","onApiReady");u("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");u("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");u("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");u("YT.UploadWidgetState.IDLE",0);u("YT.UploadWidgetState.PENDING",1);
u("YT.UploadWidgetState.ERROR",2);u("YT.UploadWidgetState.PLAYBACK",3);u("YT.UploadWidgetState.RECORDING",4);u("YT.UploadWidgetState.STOPPED",5);u("YT.get",function(a){return P[a]});
u("YT.scan",Cb);u("YT.subscribe",function(a,b,c){L.subscribe(a,b,c);Bb[a]=!0;for(var d in P)Hb(P[d],a)});
u("YT.unsubscribe",function(a,b,c){bb(a,b,c)});
u("YT.Player",W);u("YT.Thumbnail",Y);u("YT.UploadWidget",Z);R.prototype.destroy=R.prototype.P;R.prototype.setSize=R.prototype.S;R.prototype.getIframe=R.prototype.R;R.prototype.addEventListener=R.prototype.addEventListener;W.prototype.getVideoEmbedCode=W.prototype.V;W.prototype.getOptions=W.prototype.U;W.prototype.getOption=W.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;Ab.push(function(a){a=Db("player",a);x(a,Mb)});
Ab.push(function(){var a=Db("thumbnail");x(a,Pb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Cb();var Rb=n("onYTReady");Rb&&Rb();var Sb=n("onYouTubeIframeAPIReady");Sb&&Sb();var Tb=n("onYouTubePlayerAPIReady");Tb&&Tb();}).call(this);