/*!
 * get-css-data
 * v2.1.0
 * https://github.com/jhildenbiddle/get-css-data
 * (c) 2018-2022 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).getCssData=n()}(this,(function(){"use strict";function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={mimeType:n.mimeType||null,onBeforeSend:n.onBeforeSend||Function.prototype,onSuccess:n.onSuccess||Function.prototype,onError:n.onError||Function.prototype,onComplete:n.onComplete||Function.prototype},t=Array.isArray(e)?e:[e],r=Array.apply(null,Array(t.length)).map((function(e){return null}));function u(e){var n="string"==typeof e,o=n&&"<"===e.trim().charAt(0);return n&&!o}function l(e,n){o.onError(e,t[n],n)}function s(e,n){var u=o.onSuccess(e,t[n],n);e=!1===u?"":u||e,r[n]=e,-1===r.indexOf(null)&&o.onComplete(r)}var c=document.createElement("a");t.forEach((function(e,n){if(c.setAttribute("href",e),c.href=String(c.href),Boolean(document.all&&!window.atob)&&c.host.split(":")[0]!==location.host.split(":")[0]){if(c.protocol===location.protocol){var t=new XDomainRequest;t.open("GET",e),t.timeout=0,t.onprogress=Function.prototype,t.ontimeout=Function.prototype,t.onload=function(){var e=t.responseText;u(e)?s(e,n):l(t,n)},t.onerror=function(e){l(t,n)},setTimeout((function(){t.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),l(null,n)}else{var r=new XMLHttpRequest;r.open("GET",e),o.mimeType&&r.overrideMimeType&&r.overrideMimeType(o.mimeType),o.onBeforeSend(r,e,n),r.onreadystatechange=function(){if(4===r.readyState){var e=r.responseText;r.status<400&&u(e)||0===r.status&&u(e)?s(e,n):l(r,n)}},r.send()}}))}function n(e,n){var o=document.implementation.createHTMLDocument(""),t=o.createElement("base"),r=o.createElement("a");return o.head.appendChild(t),o.body.appendChild(r),t.href=n||document.baseURI||(document.querySelector("base")||{}).href||location.href,r.href=e,r.href}return function(o){var t=/\/\*[\s\S]+?\*\//g,r=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,u={rootElement:o.rootElement||document,include:o.include||'style,link[rel="stylesheet"]',exclude:o.exclude||null,filter:o.filter||null,skipDisabled:!1!==o.skipDisabled,useCSSOM:o.useCSSOM||!1,onBeforeSend:o.onBeforeSend||Function.prototype,onSuccess:o.onSuccess||Function.prototype,onError:o.onError||Function.prototype,onComplete:o.onComplete||Function.prototype},l=Array.apply(null,u.rootElement.querySelectorAll(u.include)).filter((function(e){return n=e,o=u.exclude,!(n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector).call(n,o);var n,o})),s=Array.apply(null,Array(l.length)).map((function(e){return null}));function c(){if(-1===s.indexOf(null)){s.reduce((function(e,n,o){return""===n&&e.push(o),e}),[]).reverse().forEach((function(e){return[l,s].forEach((function(n){return n.splice(e,1)}))}));var e=s.join("");u.onComplete(e,s,l)}}function i(e,n,o,t){var r=u.onSuccess(e,o,t);f(e=void 0!==r&&!1===Boolean(r)?"":r||e,o,t,(function(e,t){null===s[n]&&(t.forEach((function(e){return u.onError(e.xhr,o,e.url)})),!u.filter||u.filter.test(e)?s[n]=e:s[n]="",c())}))}function a(e,o){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l={};return l.rules=(e.replace(t,"").match(r)||[]).filter((function(e){return-1===u.indexOf(e)})),l.urls=l.rules.map((function(e){return e.replace(r,"$1")})),l.absoluteUrls=l.urls.map((function(e){return n(e,o)})),l.absoluteRules=l.rules.map((function(e,t){var r=l.urls[t],u=n(l.absoluteUrls[t],o);return e.replace(r,u)})),l}function f(n,o,t,r){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=a(n,t,s);c.rules.length?e(c.absoluteUrls,{onBeforeSend:function(e,n,t){u.onBeforeSend(e,o,n)},onSuccess:function(e,n,t){var r=u.onSuccess(e,o,n),l=a(e=!1===r?"":r||e,n,s);return l.rules.forEach((function(n,o){e=e.replace(n,l.absoluteRules[o])})),e},onError:function(e,u,i){l.push({xhr:e,url:u}),s.push(c.rules[i]),f(n,o,t,r,l,s)},onComplete:function(e){e.forEach((function(e,o){n=n.replace(c.rules[o],e)})),f(n,o,t,r,l,s)}}):r(n,l)}l.length?l.forEach((function(o,t){var r=o.getAttribute("href"),l=o.getAttribute("rel"),a="link"===o.nodeName.toLowerCase()&&r&&l&&-1!==l.toLowerCase().indexOf("stylesheet"),f=!1!==u.skipDisabled&&o.disabled,p="style"===o.nodeName.toLowerCase();if(a&&!f)if(-1!==r.indexOf("data:text/css")){var d=decodeURIComponent(r.substring(r.indexOf(",")+1));u.useCSSOM&&(d=Array.apply(null,o.sheet.cssRules).map((function(e){return e.cssText})).join("")),i(d,t,o,location.href)}else e(r,{mimeType:"text/css",onBeforeSend:function(e,n,t){u.onBeforeSend(e,o,n)},onSuccess:function(e,u,l){var s=n(r);i(e,t,o,s)},onError:function(e,n,r){s[t]="",u.onError(e,o,n),c()}});else if(p&&!f){var m=o.textContent;u.useCSSOM&&(m=Array.apply(null,o.sheet.cssRules).map((function(e){return e.cssText})).join("")),i(m,t,o,location.href)}else s[t]="",c()})):u.onComplete("",[])}}));
//# sourceMappingURL=get-css-data.min.js.map
