(function(){for(var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String",
"prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in k||(k[p]={});k=k[p]}var ba=m[m.length-1],q=k[ba],r=q?q:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};
r!=q&&null!=r&&aa(k,ba,{configurable:!0,writable:!0,value:r});var t=this;function u(a){a=a.split(".");for(var b=t,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function ca(){}
function v(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){var b=v(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function x(a){return"string"==typeof a}
function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var y="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return z.apply(null,arguments)}
var ha=Date.now||function(){return+new Date};
function A(a,b){var c=a.split("."),d=t;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function B(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.W=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function ia(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
ia.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var ja=t.JSON.parse,ka=t.JSON.stringify;function la(a){var b=C,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function ma(a,b){var c=na;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;function oa(){}
;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,wa=/[\x00&<>"']/;
function xa(a,b){return a<b?-1:a>b?1:0}
;var D=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",D);A("yt.tokens_",window.yt&&window.yt.tokens_||{});var ya=window.yt&&window.yt.msgs_||u("window.ytcfg.msgs")||{};A("yt.msgs_",ya);function za(a){var b=arguments;if(1<b.length){var c=b[0];D[c]=b[1]}else for(c in b=b[0],b)D[c]=b[c]}
function Aa(a){"function"==v(a)&&(a=Ba(a));return window.setInterval(a,250)}
function Ba(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ca(b)}}:a}
function Ca(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in D?D.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),za("ERRORS",c))}
;var Da={};function Ea(a){return Da[a]||(Da[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function E(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;if(a=a||window.event){this.a=a;for(var b in a)b in Fa||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=
b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
E.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
E.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
E.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};
var Fa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function F(){this.c=this.c;this.f=this.f}
F.prototype.c=!1;F.prototype.dispose=function(){this.c||(this.c=!0,this.A())};
F.prototype.A=function(){if(this.f)for(;this.f.length;)this.f.shift()()};var G;a:{var Ga=t.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){G=Ha;break a}}G=""}function H(a){return-1!=G.indexOf(a)}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(x(a))return x(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ja(a,b){var c;a:{c=a.length;for(var d=x(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:x(a)?a.charAt(c):a[c]}
function Ka(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function La(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function Ma(){this.b=this.a=null}
var Oa=new ia(function(){return new Na},function(a){a.reset()},100);
Ma.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Na(){this.next=this.b=this.a=null}
Na.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Na.prototype.reset=function(){this.next=this.b=this.a=null};var Pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qa(a,b,c){if("array"==v(b))for(var d=0;d<b.length;d++)Qa(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ra(a){var b=[],c;for(c in a)Qa(c,a[c],b);b[0]="";return b.join("")}
var Sa=/#|$/;function Ta(a){t.setTimeout(function(){throw a;},0)}
var Ua;
function Va(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=z(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};
return function(a){d.next={G:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){t.setTimeout(a,0)}}
;var J="StopIteration"in t?t.StopIteration:{message:"StopIteration",stack:""};function K(){}
K.prototype.next=function(){throw J;};
K.prototype.o=function(){return this};
function Wa(a){if(a instanceof K)return a;if("function"==typeof a.o)return a.o(!1);if(w(a)){var b=0,c=new K;c.next=function(){for(;;){if(b>=a.length)throw J;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Xa(a,b){if(w(a))try{I(a,b,void 0)}catch(c){if(c!==J)throw c;}else{a=Wa(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==J)throw c;}}}
function Ya(a){if(w(a))return La(a);a=Wa(a);var b=[];Xa(a,function(a){b.push(a)});
return b}
;var Za=H("Opera"),L=H("Trident")||H("MSIE"),$a=H("Edge"),ab=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),bb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");function cb(){var a=t.document;return a?a.documentMode:void 0}
var db;a:{var eb="",fb=function(){var a=G;if(ab)return/rv\:([^\);]+)(\)|;)/.exec(a);if($a)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bb)return/WebKit\/(\S+)/.exec(a);if(Za)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fb&&(eb=fb?fb[1]:"");if(L){var gb=cb();if(null!=gb&&gb>parseFloat(eb)){db=String(gb);break a}}db=eb}var hb=db,na={};
function ib(a){ma(a,function(){for(var b=0,c=pa(String(hb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=xa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||xa(0==h[2].length,0==l[2].length)||xa(h[2],l[2]);h=h[3];l=l[3]}while(0==b)}return 0<=b})}
var jb;var kb=t.document;jb=kb&&L?cb()||("CSS1Compat"==kb.compatMode?parseInt(hb,10):5):void 0;function lb(a){M||mb();nb||(M(),nb=!0);var b=ob,c=Oa.get();c.set(a,void 0);b.b?b.b.next=c:b.a=c;b.b=c}
var M;function mb(){var a=t.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);M=function(){b.then(pb)}}else M=function(){var a=pb;
"function"!=v(t.setImmediate)||t.Window&&t.Window.prototype&&!H("Edge")&&t.Window.prototype.setImmediate==t.setImmediate?(Ua||(Ua=Va()),Ua(a)):t.setImmediate(a)}}
var nb=!1,ob=new Ma;function pb(){for(var a;a=ob.remove();){try{a.a.call(a.b)}catch(c){Ta(c)}var b=Oa;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}nb=!1}
;var qb;if(!(qb=!ab&&!L)){var rb;if(rb=L)rb=9<=Number(jb);qb=rb}qb||ab&&ib("1.9.1");L&&ib("9");function sb(){}
B(sb,oa);sb.prototype.clear=function(){var a=Ya(this.o(!0)),b=this;I(a,function(a){b.remove(a)})};function tb(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className,l;if(l="function"==typeof h.split)l=0<=Ia(h.split(/\s+/),a);l&&(e[d++]=b)}e.length=d;return e}return f}
function ub(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function N(a){F.call(this);this.m=1;this.g=[];this.h=0;this.a=[];this.b={};this.v=!!a}
B(N,F);g=N.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
function vb(a,b,c){var d=O;if(a=d.b[a]){var e=d.a;(a=Ja(a,function(a){return e[a+1]==b&&e[a+2]==c}))&&d.F(a)}}
g.F=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=ca;else{if(c){var d=Ia(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.I=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var h=c[e];wb(this.a[h+1],this.a[h+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.a[h+1].apply(this.a[h+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.F(c)}}return 0!=e}return!1};
function wb(a,b,c){lb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(I(b,this.F,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.A=function(){N.D.A.call(this);this.clear();this.g.length=0};function P(a){this.a=a}
B(P,sb);function xb(a){if(a.a)try{a.a.setItem("__sak","1"),a.a.removeItem("__sak")}catch(b){}}
g=P.prototype;g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.o=function(a){var b=0,c=this.a,d=new K;d.next=function(){if(b>=c.length)throw J;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!x(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function yb(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
B(yb,P);function zb(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}
B(zb,P);var Ab=u("yt.dom.getNextId_");if(!Ab){Ab=function(){return++Bb};
A("yt.dom.getNextId_",Ab);var Bb=0};var Q={},Cb=[],O=new N,Db={};function Eb(){I(Cb,function(a){a()})}
function Fb(a){var b=La(document.getElementsByTagName("yt:"+a));a="yt-"+a;var c=document;a=La(c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):tb(a));return Ka(b,a)}
function R(a,b){return"yt:"==a.tagName.toLowerCase().substr(0,3)?a.getAttribute(b):a?a.dataset?a.dataset[Ea(b)]:a.getAttribute("data-"+b):null}
function Gb(a,b){O.I.apply(O,arguments)}
;var C=u("yt.events.listeners_")||{};A("yt.events.listeners_",C);var Hb=u("yt.events.counter_")||{count:0};A("yt.events.counter_",Hb);function Ib(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return la(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function Jb(a,b,c){if(a&&(a.addEventListener||a.attachEvent)){var d=Ib(a,b,c);if(!d){var d=++Hb.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new E(d);if(!ub(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new E(b);
b.currentTarget=a;return c.call(a,b)};
f=Ba(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);C[d]=[a,b,c,f,!1]}}}
function Kb(a){a&&("string"==typeof a&&(a=[a]),I(a,function(a){if(a in C){var b=C[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete C[a]}}))}
;xb(new yb);xb(new zb);function S(a,b,c){this.b=b;this.h=this.a=null;this.g=this[y]||(this[y]=++ea);this.c=0;this.B=!1;this.w=[];this.f=null;this.m=c;this.v={};b=document;if(a=x(a)?b.getElementById(a):a)if("iframe"!=a.tagName.toLowerCase()&&(b=Lb(this,a),this.h=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(b=a=this.a,b=b[y]||(b[y]=++ea),a.id="widget"+b),Q[this.a.id]=this,window.postMessage){this.f=new N;Mb(this);a=T(this.b,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in Db)Nb(this,
e)}}
g=S.prototype;g.S=function(a,b){this.a.width=a;this.a.height=b;return this};
g.R=function(){return this.a};
g.J=function(a){this.l(a.event,a)};
g.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
this.f.subscribe(a,c);Ob(this,a);return this};
function Nb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.m==c[0]&&Ob(a,d)}}
g.P=function(){this.a.id&&(Q[this.a.id]=null);var a=this.f;a&&"function"==typeof a.dispose&&a.dispose();if(this.h){var a=this.a,b=a.parentNode;b&&b.replaceChild(this.h,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);U&&(U[this.g]=null);this.b=null;var a=this.a,c;for(c in C)C[c][0]==a&&Kb(c);this.h=this.a=null};
g.s=function(){return{}};
function V(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.C(b):a.w.push(b)}
g.l=function(a,b){if(!this.f.c){var c={target:this,data:b};this.f.I(a,c);Gb(this.m+"."+a,c)}};
function Lb(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var h=d[e].value;null!=h&&""!=h&&"null"!=h&&c.setAttribute(d[e].name,h)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("title","YouTube "+T(a.b,"title"));(d=T(a.b,"width"))&&c.setAttribute("width",d);(d=T(a.b,"height"))&&c.setAttribute("height",d);var l=a.s();l.enablejsapi=window.postMessage?1:0;window.location.host&&(l.origin=window.location.protocol+"//"+window.location.host);
l.widgetid=a.g;window.location.href&&I(["debugjs","debugcss"],function(a){var b;b=window.location.href;var c=b.search(Sa),d;b:{d=0;for(var e=a.length;0<=(d=b.indexOf(a,d))&&d<c;){var f=b.charCodeAt(d-1);if(38==f||63==f)if(f=b.charCodeAt(d+e),!f||61==f||38==f||35==f)break b;d+=e+1}d=-1}if(0>d)b=null;else{e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;b=decodeURIComponent(b.substr(d,e-d).replace(/\+/g," "))}null===b||(l[a]=b)});
c.src=T(a.b,"host")+a.u()+"?"+Ra(l);return c}
g.H=function(){this.a&&this.a.contentWindow?this.C({event:"listening"}):window.clearInterval(this.c)};
function Mb(a){Pb(a.b,a,a.g);a.c=Aa(z(a.H,a));Jb(a.a,"load",z(function(){window.clearInterval(this.c);this.c=Aa(z(this.H,this))},a))}
function Ob(a,b){a.v[b]||(a.v[b]=!0,V(a,"addEventListener",[b]))}
g.C=function(a){a.id=this.g;a.channel="widget";a=ka(a);var b;b=this.b;var c,d=this.a.src.match(Pa);c=d[1];var e=d[2],f=d[3],d=d[4],h="";c&&(h+=c+":");f&&(h+="//",e&&(h+=e+"@"),h+=f,d&&(h+=":"+d));c=h;b=0==c.indexOf("https:")?[c]:b.b?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(l){if(l.name&&"SyntaxError"==l.name)Ca(l,"WARNING");else throw l;}};function W(a){this.c=a||{};this.a={};this.a.host="http://www.youtube.com";this.a.title="";this.f=this.b=!1;a=document.getElementById("www-widgetapi-script");if(this.b=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.c,window.YTConfig||{},this.a];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
var U=null;function T(a,b){for(var c=[a.c,window.YTConfig||{},a.a],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Pb(a,b,c){U||(U={},Jb(window,"message",z(a.g,a)));U[c]=b}
W.prototype.g=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){var b;try{b=ja(a.data)}catch(c){return}this.f=!0;this.b||0!=a.origin.indexOf("https:")||(this.b=!0);if(a=U[b.id])a.B=!0,a.B&&(I(a.w,a.C,a),a.w.length=0),a.J(b)}};function Qb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Rb(a){return 0==a.search("get")||0==a.search("is")}
;function Sb(a){W.call(this,a);this.a.title="video player";this.a.videoId="";this.a.width=640;this.a.height=360}
B(Sb,W);function Tb(a){W.call(this,a);this.a.title="Thumbnail";this.a.videoId="";this.a.width=120;this.a.height=68}
B(Tb,W);function X(a,b){var c=new Sb(b);S.call(this,a,c,"player");this.i={};this.j={}}
B(X,S);function Ub(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){var c=R(a,"width"),d=R(a,"height");new X(a,{videoId:b,width:c,height:d})}}}
g=X.prototype;g.u=function(){return"/embed/"+T(this.b,"videoId")};
g.s=function(){var a=T(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));return a};
g.J=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(da(a))for(var c in a)this.i[c]=a[c];break;case "infoDelivery":Vb(this,a);break;case "initialDelivery":window.clearInterval(this.c);this.j={};this.i={};Wb(this,a.apiInterface);Vb(this,a);break;default:this.l(b,a)}};
function Vb(a,b){if(da(b))for(var c in b)a.j[c]=b[c]}
function Wb(a,b){I(b,function(a){this[a]||("getCurrentTime"==a?this[a]=function(){var a=this.j.currentTime;if(1==this.j.playerState){var b=(ha()/1E3-this.j.currentTimeLastUpdated_)*this.j.playbackRate;0<b&&(a+=Math.min(b,1))}return a}:Qb(a)?this[a]=function(){this.j={};
this.i={};V(this,a,arguments);return this}:Rb(a)?this[a]=function(){var b=0;
0==a.search("get")?b=3:0==a.search("is")&&(b=2);return this.j[a.charAt(b).toLowerCase()+a.substr(b+1)]}:this[a]=function(){V(this,a,arguments);
return this})},a)}
g.V=function(){var a;a='<iframe width="'+parseInt(T(this.b,"width"),10)+'" height="'+parseInt(T(this.b,"height"),10)+'" src="';var b=T(this.b,"host")+this.u();wa.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(qa,"&amp;")),-1!=b.indexOf("<")&&(b=b.replace(ra,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(sa,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(ta,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(ua,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(va,"&#0;")));a=a+b+'" frameborder="0" allowfullscreen></iframe>';
return a};
g.U=function(a){return this.i.namespaces?a?this.i[a].options||[]:this.i.namespaces||[]:[]};
g.T=function(a,b){if(this.i.namespaces&&a&&b)return this.i[a][b]};function Y(a,b){var c=new Tb(b);S.call(this,a,c,"thumbnail")}
B(Y,S);function Xb(a){if("iframe"!=a.tagName.toLowerCase()){var b=R(a,"videoid");if(b){b={videoId:b,events:{}};b.width=R(a,"width");b.height=R(a,"height");b.thumbWidth=R(a,"thumb-width");b.thumbHeight=R(a,"thumb-height");b.thumbAlign=R(a,"thumb-align");var c=R(a,"onclick");c&&(b.events.onClick=c);new Y(a,b)}}}
Y.prototype.u=function(){return"/embed/"+T(this.b,"videoId")};
Y.prototype.s=function(){return{player:0,thumb_width:T(this.b,"thumbWidth"),thumb_height:T(this.b,"thumbHeight"),thumb_align:T(this.b,"thumbAlign")}};
Y.prototype.l=function(a,b){Y.D.l.call(this,a,b?b.info:void 0)};function Yb(a){W.call(this,a);this.a.host="https://www.youtube.com";this.a.title="upload widget";this.a.width=640;this.a.height=.67*T(this,"width")}
B(Yb,W);function Z(a,b){var c=new Yb(b);S.call(this,a,c,"upload")}
B(Z,S);g=Z.prototype;g.u=function(){return"/upload_embed"};
g.s=function(){var a={},b=T(this.b,"webcamOnly");null!=b&&(a.webcam_only=b);return a};
g.l=function(a,b){Z.D.l.call(this,a,b);"onApiReady"==a&&V(this,"hostWindowReady")};
g.K=function(a){V(this,"setVideoDescription",arguments)};
g.M=function(a){V(this,"setVideoKeywords",arguments)};
g.N=function(a){V(this,"setVideoPrivacy",arguments)};
g.L=function(a){V(this,"setVideoDraftPrivacy",arguments)};
g.O=function(a){V(this,"setVideoTitle",arguments)};A("YT.PlayerState.UNSTARTED",-1);A("YT.PlayerState.ENDED",0);A("YT.PlayerState.PLAYING",1);A("YT.PlayerState.PAUSED",2);A("YT.PlayerState.BUFFERING",3);A("YT.PlayerState.CUED",5);A("YT.UploadWidgetEvent.API_READY","onApiReady");A("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess");A("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete");A("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange");A("YT.UploadWidgetState.IDLE",0);A("YT.UploadWidgetState.PENDING",1);
A("YT.UploadWidgetState.ERROR",2);A("YT.UploadWidgetState.PLAYBACK",3);A("YT.UploadWidgetState.RECORDING",4);A("YT.UploadWidgetState.STOPPED",5);A("YT.get",function(a){return Q[a]});
A("YT.scan",Eb);A("YT.subscribe",function(a,b,c){O.subscribe(a,b,c);Db[a]=!0;for(var d in Q)Nb(Q[d],a)});
A("YT.unsubscribe",function(a,b,c){vb(a,b,c)});
A("YT.Player",X);A("YT.Thumbnail",Y);A("YT.UploadWidget",Z);S.prototype.destroy=S.prototype.P;S.prototype.setSize=S.prototype.S;S.prototype.getIframe=S.prototype.R;S.prototype.addEventListener=S.prototype.addEventListener;X.prototype.getVideoEmbedCode=X.prototype.V;X.prototype.getOptions=X.prototype.U;X.prototype.getOption=X.prototype.T;Z.prototype.setVideoDescription=Z.prototype.K;Z.prototype.setVideoKeywords=Z.prototype.M;Z.prototype.setVideoPrivacy=Z.prototype.N;Z.prototype.setVideoTitle=Z.prototype.O;
Z.prototype.setVideoDraftPrivacy=Z.prototype.L;Cb.push(function(){var a=Fb("player");I(a,Ub)});
Cb.push(function(){var a=Fb("thumbnail");I(a,Xb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Eb();var Zb=u("onYTReady");Zb&&Zb();var $b=u("onYouTubeIframeAPIReady");$b&&$b();var ac=u("onYouTubePlayerAPIReady");ac&&ac();}).call(this);