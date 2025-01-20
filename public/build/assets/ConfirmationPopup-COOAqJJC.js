import{j as g,g as O,r as S}from"./app-CGjq04YQ.js";import{P as C}from"./PrimaryButton-Be13T-O4.js";import{d as v}from"./index-BeHcqntj.js";function T({className:x,text:w="",...m}){return g.jsx("button",{...m,className:"bg-red-500 px-6 py-3 rounded-xl text-white "+x,children:w})}var M={exports:{}};(function(x,w){(function(f,n){x.exports=n()})(window,function(){return function(m){var f={};function n(i){if(f[i])return f[i].exports;var c=f[i]={i,l:!1,exports:{}};return m[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=m,n.c=f,n.d=function(i,c,d){n.o(i,c)||Object.defineProperty(i,c,{enumerable:!0,get:d})},n.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,c){if(c&1&&(i=n(i)),c&8||c&4&&typeof i=="object"&&i&&i.__esModule)return i;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:i}),c&2&&typeof i!="string")for(var y in i)n.d(d,y,(function(o){return i[o]}).bind(null,y));return d},n.n=function(i){var c=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(c,"a",c),c},n.o=function(i,c){return Object.prototype.hasOwnProperty.call(i,c)},n.p="",n(n.s=0)}({"./src/index.js":function(m,f,n){n.r(f),n("./src/sass/index.scss");var i=n("./src/js/init.js"),c=i.default.init;typeof window<"u"&&(window.printJS=c),f.default=c},"./src/js/browser.js":function(m,f,n){n.r(f);var i={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!i.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=i},"./src/js/functions.js":function(m,f,n){n.r(f),n.d(f,"addWrapper",function(){return y}),n.d(f,"capitalizePrint",function(){return o}),n.d(f,"collectStyles",function(){return s}),n.d(f,"addHeader",function(){return t}),n.d(f,"cleanUp",function(){return u}),n.d(f,"isRawHTML",function(){return p});var i=n("./src/js/modal.js"),c=n("./src/js/browser.js");function d(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(l){return typeof l}:d=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},d(e)}function y(e,a){var l="font-family:"+a.font+" !important; font-size: "+a.font_size+" !important; width:100%;";return'<div style="'+l+'">'+e+"</div>"}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,a){for(var l=document.defaultView||window,b="",h=l.getComputedStyle(e,""),E=0;E<h.length;E++)(a.targetStyles.indexOf("*")!==-1||a.targetStyle.indexOf(h[E])!==-1||r(a.targetStyles,h[E]))&&h.getPropertyValue(h[E])&&(b+=h[E]+":"+h.getPropertyValue(h[E])+";");return b+="max-width: "+a.maxWidth+"px !important; font-size: "+a.font_size+" !important;",b}function r(e,a){for(var l=0;l<e.length;l++)if(d(a)==="object"&&a.indexOf(e[l])!==-1)return!0;return!1}function t(e,a){var l=document.createElement("div");if(p(a.header))l.innerHTML=a.header;else{var b=document.createElement("h1"),h=document.createTextNode(a.header);b.appendChild(h),b.setAttribute("style",a.headerStyle),l.appendChild(b)}e.insertBefore(l,e.childNodes[0])}function u(e){e.showModal&&i.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var a="mouseover";(c.default.isChrome()||c.default.isFirefox())&&(a="focus");var l=function b(){window.removeEventListener(a,b),e.onPrintDialogClose();var h=document.getElementById(e.frameId);h&&h.remove()};window.addEventListener(a,l)}function p(e){var a=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return a.test(e)}},"./src/js/html.js":function(m,f,n){n.r(f);var i=n("./src/js/functions.js"),c=n("./src/js/print.js");function d(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(t){return typeof t}:d=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(s)}f.default={print:function(r,t){var u=o(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=y(u,r),r.header&&Object(i.addHeader)(r.printableElement,r),c.default.send(r,t)}};function y(s,r){for(var t=s.cloneNode(),u=Array.prototype.slice.call(s.childNodes),p=0;p<u.length;p++)if(r.ignoreElements.indexOf(u[p].id)===-1){var e=y(u[p],r);t.appendChild(e)}switch(r.scanStyles&&s.nodeType===1&&t.setAttribute("style",Object(i.collectStyles)(s,r)),s.tagName){case"SELECT":t.value=s.value;break;case"CANVAS":t.getContext("2d").drawImage(s,0,0);break}return t}function o(s){return d(s)==="object"&&s&&(s instanceof HTMLElement||s.nodeType===1)}},"./src/js/image.js":function(m,f,n){n.r(f);var i=n("./src/js/functions.js"),c=n("./src/js/print.js"),d=n("./src/js/browser.js");f.default={print:function(o,s){o.printable.constructor!==Array&&(o.printable=[o.printable]),o.printableElement=document.createElement("div"),o.printable.forEach(function(r){var t=document.createElement("img");if(t.setAttribute("style",o.imageStyle),t.src=r,d.default.isFirefox()){var u=t.src;t.src=u}var p=document.createElement("div");p.appendChild(t),o.printableElement.appendChild(p)}),o.header&&Object(i.addHeader)(o.printableElement,o),c.default.send(o,s)}}},"./src/js/init.js":function(m,f,n){n.r(f);var i=n("./src/js/browser.js"),c=n("./src/js/modal.js"),d=n("./src/js/pdf.js"),y=n("./src/js/html.js"),o=n("./src/js/raw-html.js"),s=n("./src/js/image.js"),r=n("./src/js/json.js");function t(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(a){return typeof a}:t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(p)}var u=["pdf","html","image","json","raw-html"];f.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(P){throw P},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},a=arguments[0];if(a===void 0)throw new Error("printJS expects at least 1 attribute.");switch(t(a)){case"string":e.printable=encodeURI(a),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=a.printable,e.fallbackPrintable=typeof a.fallbackPrintable<"u"?a.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable;for(var l in e)l==="printable"||l==="fallbackPrintable"||(e[l]=typeof a[l]<"u"?a[l]:e[l]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+t(a))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||typeof e.type!="string"||u.indexOf(e.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&c.default.show(e),e.onLoadingStart&&e.onLoadingStart();var b=document.getElementById(e.frameId);b&&b.parentNode.removeChild(b);var h=document.createElement("iframe");switch(i.default.isFirefox()?h.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):h.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),h.setAttribute("id",e.frameId),e.type!=="pdf"&&(h.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(j){h.srcdoc+='<link rel="stylesheet" href="'+j+'">'})),h.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(i.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var E=window.open(e.fallbackPrintable,"_blank");E.focus(),e.onIncompatibleBrowser()}catch(j){e.onError(j)}finally{e.showModal&&c.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else d.default.print(e,h);break;case"image":s.default.print(e,h);break;case"html":y.default.print(e,h);break;case"raw-html":o.default.print(e,h);break;case"json":r.default.print(e,h);break}}}},"./src/js/json.js":function(m,f,n){n.r(f);var i=n("./src/js/functions.js"),c=n("./src/js/print.js");function d(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(r){return typeof r}:d=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d(o)}f.default={print:function(s,r){if(d(s.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof s.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!s.properties||!Array.isArray(s.properties))throw new Error("Invalid properties array for your JSON data.");s.properties=s.properties.map(function(t){return{field:d(t)==="object"?t.field:t,displayName:d(t)==="object"?t.displayName:t,columnSize:d(t)==="object"&&t.columnSize?t.columnSize+";":100/s.properties.length+"%;"}}),s.printableElement=document.createElement("div"),s.header&&Object(i.addHeader)(s.printableElement,s),s.printableElement.innerHTML+=y(s),c.default.send(s,r)}};function y(o){var s=o.printable,r=o.properties,t='<table style="border-collapse: collapse; width: 100%;">';o.repeatTableHeader&&(t+="<thead>"),t+="<tr>";for(var u=0;u<r.length;u++)t+='<th style="width:'+r[u].columnSize+";"+o.gridHeaderStyle+'">'+Object(i.capitalizePrint)(r[u].displayName)+"</th>";t+="</tr>",o.repeatTableHeader&&(t+="</thead>"),t+="<tbody>";for(var p=0;p<s.length;p++){t+="<tr>";for(var e=0;e<r.length;e++){var a=s[p],l=r[e].field.split(".");if(l.length>1)for(var b=0;b<l.length;b++)a=a[l[b]];else a=a[r[e].field];t+='<td style="width:'+r[e].columnSize+o.gridStyle+'">'+a+"</td>"}t+="</tr>"}return t+="</tbody></table>",t}},"./src/js/modal.js":function(m,f,n){n.r(f);var i={show:function(d){var y="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",o=document.createElement("div");o.setAttribute("style",y),o.setAttribute("id","printJS-Modal");var s=document.createElement("div");s.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),s.appendChild(r);var t=document.createElement("span");t.setAttribute("class","printSpinner"),s.appendChild(t);var u=document.createTextNode(d.modalMessage);s.appendChild(u),o.appendChild(s),document.getElementsByTagName("body")[0].appendChild(o),document.getElementById("printClose").addEventListener("click",function(){i.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};f.default=i},"./src/js/pdf.js":function(m,f,n){n.r(f);var i=n("./src/js/print.js"),c=n("./src/js/functions.js");f.default={print:function(o,s){if(o.base64){var r=Uint8Array.from(atob(o.printable),function(u){return u.charCodeAt(0)});d(o,s,r);return}o.printable=/^(blob|http|\/\/)/i.test(o.printable)?o.printable:window.location.origin+(o.printable.charAt(0)!=="/"?"/"+o.printable:o.printable);var t=new window.XMLHttpRequest;t.responseType="arraybuffer",t.addEventListener("error",function(){Object(c.cleanUp)(o),o.onError(t.statusText,t)}),t.addEventListener("load",function(){if([200,201].indexOf(t.status)===-1){Object(c.cleanUp)(o),o.onError(t.statusText,t);return}d(o,s,t.response)}),t.open("GET",o.printable,!0),t.send()}};function d(y,o,s){var r=new window.Blob([s],{type:"application/pdf"});r=window.URL.createObjectURL(r),o.setAttribute("src",r),i.default.send(y,o)}},"./src/js/print.js":function(m,f,n){n.r(f);var i=n("./src/js/browser.js"),c=n("./src/js/functions.js"),d={send:function(t,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(t.frameId);p.onload=function(){if(t.type==="pdf"){i.default.isFirefox()?setTimeout(function(){return y(p,t)},1e3):y(p,t);return}var e=p.contentWindow||p.contentDocument;if(e.document&&(e=e.document),e.body.appendChild(t.printableElement),t.type!=="pdf"&&t.style){var a=document.createElement("style");a.innerHTML=t.style,e.head.appendChild(a)}var l=e.getElementsByTagName("img");l.length>0?o(Array.from(l)).then(function(){return y(p,t)}):y(p,t)}}};function y(r,t){try{if(r.focus(),i.default.isEdge()||i.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){t.onError(u)}finally{i.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(c.cleanUp)(t)}}function o(r){var t=r.map(function(u){if(u.src&&u.src!==window.location.href)return s(u)});return Promise.all(t)}function s(r){return new Promise(function(t){var u=function p(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(p,500):t()};u()})}f.default=d},"./src/js/raw-html.js":function(m,f,n){n.r(f);var i=n("./src/js/print.js");f.default={print:function(d,y){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,i.default.send(d,y)}}},"./src/sass/index.scss":function(m,f,n){},0:function(m,f,n){m.exports=n("./src/index.js")}}).default})})(M);var A=M.exports;const I=O(A);function W({title:x=void 0,isActive:w=!1,setActive:m,text:f,no_hp:n,nik:i,confirmMessage:c="Sudah",declineMessage:d="Belum",isAuthenticated:y=!1,state:o="none",preview:s=void 0}){S.useState("");const r=()=>{m(l=>({...l,ConfirmActive:!l.ConfirmActive})),setTimeout(()=>{m(l=>({...l,WeightTutorialActive:!l.WeightTutorialActive}))},500)},t=()=>{m(l=>({...l,ConfirmActive:!l.ConfirmActive})),setTimeout(()=>{m(l=>({...l,GlucoseTutorialActive:!l.GlucoseTutorialActive}))},500)},u=()=>{m(l=>({...l,ConfirmActive:!l.ConfirmActive})),setTimeout(()=>{m(l=>({...l,BloodTutorialActive:!l.BloodTutorialActive}))},500)},p=async()=>{try{const l=await axios.get(route("patient.print.pdf",{nik:i}));await axios.post("https://api.watzap.id/v1/send_message",{api_key:"Q1OTKLXL7XXJJZHS",number_key:"bKESRct1CeZWmNrq",phone_no:n.toString().indexOf("8")==0?`62${n}`:n.toString(),message:`Halo, Permisi Sobat Pasien! Silahkan akses link berikut untuk melihat hasil pengukuran anda! Link Hasil Pengukuran: ${l.data.url}`},{headers:{"Content-Type":"application/json"}}).then(()=>{const b=`https://kiosk.robotlintang.id/pdf/report/patient/Laporan-${i}.pdf`;try{I(b),setTimeout(()=>{v.Inertia.visit(route("v2.home.index",{_query:{state:"finished"}}))},3e3)}catch(h){console.error(h)}})}catch(l){console.error(l);try{await axios.post("https://api.watzap.id/v1/send_message",{api_key:"Q1OTKLXL7XXJJZHS",number_key:"bKESRct1CeZWmNrq",phone_no:"62895321233687",message:`Error Ras, ${l}`},{headers:{"Content-Type":"application/json"}}).then(()=>{v.Inertia.visit(route("v2.home.index",{_query:{state:"finished"}}))})}catch{v.Inertia.visit(route("v2.home.index",{_query:{state:"finished"}}))}}},e=()=>{switch(y||v.Inertia.visit(route("login.create")),o){case"weight":r();break;case"glucose":r();break;case"blood":v.Inertia.visit(route("v2.home.index",{_query:{state:"glucose"}}));break;case"confirmation":v.Inertia.visit(route("v2.home.index",{_query:{state:"blood"}}));break}},a=()=>{switch(y||v.Inertia.visit(route("register.create")),o){case"weight":t();break;case"glucose":t();break;case"blood":u();break;case"confirmation":p();break;case"finished":v.Inertia.visit(route("logout.attempt"));break}};return g.jsxs("div",{className:"h-auto w-full mt-8 "+(w?"":"hidden"),children:[g.jsx("div",{className:"w-full",children:g.jsx("h6",{className:"text-4xl text-black text-center font-semibold",children:"Anjungan Kesehatan Mandiri"})}),g.jsx("div",{className:"w-full px-12 mt-8",children:s??x}),g.jsx("div",{className:"w-full px-12 mt-8",children:g.jsx("article",{className:"text-center flex flex-col gap-3",children:g.jsx("h4",{className:"text-4xl",children:f})})}),g.jsx("div",{className:"mx-auto mt-8",children:g.jsxs("div",{className:"w-full flex flex-row justify-center gap-4",children:[o!="finished"?g.jsx(C,{onClick:e,className:"text-3xl",text:c}):"",g.jsx(T,{onClick:a,className:"text-3xl",text:d})]})})]})}export{W as default};
