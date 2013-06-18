/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
// i18next, v1.6.0
// Copyright (c)2013 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
(function(){function a(e,t){if(!t||typeof t=="function")return e;for(var n in t)e[n]=t[n];return e}function f(e,t,n){var r,i=0,s=e.length,o=s===undefined||typeof e=="function";if(n){if(o){for(r in e)if(t.apply(e[r],n)===!1)break}else for(;i<s;)if(t.apply(e[i++],n)===!1)break}else if(o){for(r in e)if(t.call(e[r],r,e[r])===!1)break}else for(;i<s;)if(t.call(e[i],i,e[i++])===!1)break;return e}function l(e){var t=function(e){if(window.XMLHttpRequest)return e(null,new XMLHttpRequest);if(window.ActiveXObject)try{return e(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(t){return e(null,new ActiveXObject("Microsoft.XMLHTTP"))}return e(new Error)},n=function(e){if(typeof e=="string")return e;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},r=function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(r&63|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(r&63|128))}return t},i=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e=r(e);var n="",i,s,o,u,a,f,l,c=0;do i=e.charCodeAt(c++),s=e.charCodeAt(c++),o=e.charCodeAt(c++),u=i>>2,a=(i&3)<<4|s>>4,f=(s&15)<<2|o>>6,l=o&63,isNaN(s)?f=l=64:isNaN(o)&&(l=64),n+=t.charAt(u)+t.charAt(a)+t.charAt(f)+t.charAt(l),i=s=o="",u=a=f=l="";while(c<e.length);return n},s=function(){var e=arguments[0];for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e},o=function(e,r,i,u){typeof i=="function"&&(u=i,i={}),i.cache=i.cache||!1,i.data=i.data||{},i.headers=i.headers||{},i.jsonp=i.jsonp||!1,i.async=i.async===undefined?!0:i.async;var a=s({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},o.headers,i.headers),f;a["content-type"]==="application/json"?f=JSON.stringify(i.data):f=n(i.data);if(e==="GET"){var l=[];f&&(l.push(f),f=null),i.cache||l.push("_="+(new Date).getTime()),i.jsonp&&(l.push("callback="+i.jsonp),l.push("jsonp="+i.jsonp)),l=l.join("&"),l.length>1&&(r.indexOf("?")>-1?r+="&"+l:r+="?"+l);if(i.jsonp){var c=document.getElementsByTagName("head")[0],h=document.createElement("script");h.type="text/javascript",h.src=r,c.appendChild(h);return}}t(function(t,n){if(t)return u(t);n.open(e,r,i.async);for(var s in a)a.hasOwnProperty(s)&&n.setRequestHeader(s,a[s]);n.onreadystatechange=function(){if(n.readyState===4){var e=n.responseText||"";if(!u)return;u(n.status,{text:function(){return e},json:function(){return JSON.parse(e)}})}},n.send(f)})},u={authBasic:function(e,t){o.headers.Authorization="Basic "+i(e+":"+t)},connect:function(e,t,n){return o("CONNECT",e,t,n)},del:function(e,t,n){return o("DELETE",e,t,n)},get:function(e,t,n){return o("GET",e,t,n)},head:function(e,t,n){return o("HEAD",e,t,n)},headers:function(e){o.headers=e||{}},isAllowed:function(e,t,n){this.options(e,function(e,r){n(r.text().indexOf(t)!==-1)})},options:function(e,t,n){return o("OPTIONS",e,t,n)},patch:function(e,t,n){return o("PATCH",e,t,n)},post:function(e,t,n){return o("POST",e,t,n)},put:function(e,t,n){return o("PUT",e,t,n)},trace:function(e,t,n){return o("TRACE",e,t,n)}},a=e.type?e.type.toLowerCase():"get";u[a](e.url,e,function(t,n){t===200?e.success(n.json(),t,null):e.error(n.text(),t,null)})}function d(e,s){typeof e=="function"&&(s=e,e={}),e=e||{},p.extend(u,e),typeof u.ns=="string"&&(u.ns={namespaces:[u.ns],defaultNs:u.ns}),u.interpolationPrefixEscaped=p.regexEscape(u.interpolationPrefix),u.interpolationSuffixEscaped=p.regexEscape(u.interpolationSuffix),u.lng||(u.lng=p.detectLanguage()),u.lng?u.useCookie&&p.cookie.create(u.cookieName,u.lng,u.cookieExpirationTime):(u.lng=u.fallbackLng,u.useCookie&&p.cookie.remove(u.cookieName)),o=p.toLanguages(u.lng),i=o[0],p.log("currentLng set to: "+i),_.setCurrentLng(i),t&&u.setJqueryExt&&S();var a;t&&t.Deferred&&(a=t.Deferred());if(u.resStore){r=u.resStore,s&&s(L),a&&a.resolve();if(a)return a.promise();return}var f=p.toLanguages(u.lng);typeof u.preload=="string"&&(u.preload=[u.preload]);for(var l=0,c=u.preload.length;l<c;l++){var h=p.toLanguages(u.preload[l]);for(var d=0,v=h.length;d<v;d++)f.indexOf(h[d])<0&&f.push(h[d])}n.sync.load(f,u,function(e,t){r=t,s&&s(L),a&&a.resolve()});if(a)return a.promise()}function v(e,t){typeof e=="string"&&(e=[e]);for(var n=0,r=e.length;n<r;n++)u.preload.indexOf(e[n])<0&&u.preload.push(e[n]);return d(t)}function m(e,t,n){typeof t!="string"&&(n=t,t=u.ns.defaultNs),r[e]=r[e]||{},r[e][t]=r[e][t]||{},p.extend(r[e][t],n)}function g(e){u.ns.defaultNs=e}function y(e,t){b([e],t)}function b(e,t){var i={dynamicLoad:u.dynamicLoad,resGetPath:u.resGetPath,getAsync:u.getAsync,ns:{namespaces:e,defaultNs:""}},s=p.toLanguages(u.lng);typeof u.preload=="string"&&(u.preload=[u.preload]);for(var o=0,a=u.preload.length;o<a;o++){var f=p.toLanguages(u.preload[o]);for(var l=0,c=f.length;l<c;l++)s.indexOf(f[l])<0&&s.push(f[l])}var h=[];for(var d=0,v=s.length;d<v;d++){var m=!1,g=r[s[d]];if(g)for(var y=0,b=e.length;y<b;y++)g[e[y]]||(m=!0);else m=!0;m&&h.push(s[d])}h.length?n.sync._fetch(h,i,function(i,s){var o=e.length*h.length;p.each(e,function(e,i){p.each(h,function(e,a){r[a]=r[a]||{},r[a][i]=s[a][i],o--,o===0&&t&&(u.useLocalStorage&&n.sync._storeLocal(r),t())})})}):t&&t()}function w(e,t){return d({lng:e},t)}function E(){return i}function S(){function e(e,n,r){if(n.length===0)return;var i="text";if(n.indexOf("[")===0){var s=n.split("]");n=s[1],i=s[0].substr(1,s[0].length-1)}n.indexOf(";")===n.length-1&&(n=n.substr(0,n.length-2));var o;i==="html"?(o=u.defaultValueFromContent?t.extend({defaultValue:e.html()},r):r,e.html(t.t(n,o))):i==="text"?(o=u.defaultValueFromContent?t.extend({defaultValue:e.text()},r):r,e.text(t.t(n,o))):(o=u.defaultValueFromContent?t.extend({defaultValue:e.attr(i)},r):r,e.attr(i,t.t(n,o)))}function n(n,r){var i=n.attr(u.selectorAttr);if(!i)return;var s=n,o=n.data("i18n-target");o&&(s=n.find(o)||n),!r&&u.useDataAttrOptions===!0&&(r=n.data("i18n-options")),r=r||{};if(i.indexOf(";")<=i.length-1){var a=i.split(";");t.each(a,function(t,n){e(s,n,r)})}else e(s,k,r);u.useDataAttrOptions===!0&&n.data("i18n-options",r)}t.t=t.t||L,t.fn.i18n=function(e){return this.each(function(){n(t(this),e);var r=t(this).find("["+u.selectorAttr+"]");r.each(function(){n(t(this),e)})})}}function x(e,t,n,r){r=r||t;if(e.indexOf(r.interpolationPrefix||u.interpolationPrefix)<0)return e;var i=r.interpolationPrefix?p.regexEscape(r.interpolationPrefix):u.interpolationPrefixEscaped,s=r.interpolationSuffix?p.regexEscape(r.interpolationSuffix):u.interpolationSuffixEscaped;return p.each(t,function(t,o){typeof o=="object"&&o!==null?e=x(e,o,n?n+u.keyseparator+t:t,r):e=e.replace(new RegExp([i,n?n+u.keyseparator+t:t,s].join(""),"g"),o)}),e}function T(e,t){var n=",",r="{",i="}",o=p.extend({},t);delete o.postProcess;while(e.indexOf(u.reusePrefix)!=-1){s++;if(s>u.maxRecursion)break;var a=e.indexOf(u.reusePrefix),f=e.indexOf(u.reuseSuffix,a)+u.reuseSuffix.length,l=e.substring(a,f),c=l.replace(u.reusePrefix,"").replace(u.reuseSuffix,"");if(c.indexOf(n)!=-1){var h=c.indexOf(n);if(c.indexOf(r,h)!=-1&&c.indexOf(i,h)!=-1){var d=c.indexOf(r,h),v=c.indexOf(i,d)+i.length;try{o=p.extend(o,JSON.parse(c.substring(d,v))),c=c.substring(0,h)}catch(m){}}}var g=A(c,o);e=e.replace(l,g)}return e}function N(e){return e.context&&typeof e.context=="string"}function C(e){return e.count!==undefined&&typeof e.count!="string"&&e.count!==1}function L(e,t){return s=0,A(e,t)}function A(e,t){t=t||{};if(!r)return f;var s,a,f=t.defaultValue||e,l=o;if(t.lng){l=p.toLanguages(t.lng);if(!r[l[0]]){var c=u.getAsync;u.getAsync=!1,n.sync.load(l,u,function(e,t){p.extend(r,t),u.getAsync=c})}}var h=t.ns||u.ns.defaultNs;if(e.indexOf(u.nsseparator)>-1){var d=e.split(u.nsseparator);h=d[0],e=d[1]}if(N(t)){s=p.extend({},t),delete s.context,s.defaultValue=u.contextNotFound;var v=h+u.nsseparator+e+"_"+t.context;a=L(v,s);if(a!=u.contextNotFound)return x(a,{context:t.context})}if(C(t)){s=p.extend({},t),delete s.count,s.defaultValue=u.pluralNotFound;var m=h+u.nsseparator+e+u.pluralSuffix,g=_.get(i,t.count);g>=0?m=m+"_"+g:g===1&&(m=h+u.nsseparator+e),a=L(m,s);if(a!=u.pluralNotFound)return x(a,{count:t.count})}var y,b=e.split(u.keyseparator);for(var w=0,E=l.length;w<E;w++){if(y)break;var S=l[w],k=0,O=r[S]&&r[S][h];while(b[k])O=O&&O[b[k]],k++;if(O!==undefined){if(typeof O=="string")O=x(O,t),O=T(O,t);else if(Object.prototype.toString.apply(O)==="[object Array]"&&!u.returnObjectTrees&&!t.returnObjectTrees)O=O.join("\n"),O=x(O,t),O=T(O,t);else if(!u.returnObjectTrees&&!t.returnObjectTrees)O="key '"+h+":"+e+" ("+S+")' "+"returned a object instead of string.",p.log(O);else{var P={};for(var H in O)P[H]=A(h+u.nsseparator+e+u.keyseparator+H,t);O=P}y=O}}y===undefined&&u.fallbackToDefaultNS&&(y=A(e,t)),y===undefined&&u.sendMissing&&(t.lng?M.postMissing(l[0],h,e,f,l):M.postMissing(u.lng,h,e,f,l));var B=t.postProcess||u.postProcess;return y!==undefined&&B&&D[B]&&(y=D[B](y,e,t)),y===undefined&&(f=x(f,t),f=T(f,t)),y!==undefined?y:f}function O(){var e,t=[];typeof window!="undefined"&&(function(){var e=window.location.search.substring(1),n=e.split("&");for(var r=0;r<n.length;r++){var i=n[r].indexOf("=");if(i>0){var s=n[r].substring(0,i),o=n[r].substring(i+1);t[s]=o}}}(),t[u.detectLngQS]&&(e=t[u.detectLngQS]));if(!e&&typeof document!="undefined"&&u.useCookie){var n=p.cookie.read(u.cookieName);n&&(e=n)}return!e&&typeof navigator!="undefined"&&(e=navigator.language?navigator.language:navigator.userLanguage),e}Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1});var e=this,t=e.jQuery,n={},r={},i,s=0,o=[];typeof module!="undefined"&&module.exports?module.exports=n:(t&&(t.i18n=t.i18n||n),e.i18n=e.i18n||n);var u={lng:undefined,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:"dev",detectLngQS:"setLng",ns:"translation",fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:undefined,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:undefined,useCookie:!0,cookieName:"i18next",postProcess:undefined},c={create:function(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+n*60*1e3),r="; expires="+i.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"},read:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove:function(e){this.create(e,"",-1)}},h={create:function(e,t,n){},read:function(e){return null},remove:function(e){}},p={extend:t?t.extend:a,each:t?t.each:f,ajax:t?t.ajax:l,cookie:typeof document!="undefined"?c:h,detectLanguage:O,log:function(e){u.debug&&typeof console!="undefined"&&console.log(e)},toLanguages:function(e){var t=[];if(typeof e=="string"&&e.indexOf("-")>-1){var n=e.split("-");e=u.lowerCaseLng?n[0].toLowerCase()+"-"+n[1].toLowerCase():n[0].toLowerCase()+"-"+n[1].toUpperCase(),u.load!=="unspecific"&&t.push(e),u.load!=="current"&&t.push(n[0])}else t.push(e);return t.indexOf(u.fallbackLng)===-1&&u.fallbackLng&&t.push(u.fallbackLng),t},regexEscape:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},M={load:function(e,t,n){t.useLocalStorage?M._loadLocal(e,t,function(r,i){var s=[];for(var o=0,u=e.length;o<u;o++)i[e[o]]||s.push(e[o]);s.length>0?M._fetch(s,t,function(e,t){p.extend(i,t),M._storeLocal(t),n(null,i)}):n(null,i)}):M._fetch(e,t,function(e,t){n(null,t)})},_loadLocal:function(e,t,n){var r={},i=(new Date).getTime();if(window.localStorage){var s=e.length;p.each(e,function(e,o){var u=window.localStorage.getItem("res_"+o);u&&(u=JSON.parse(u),u.i18nStamp&&u.i18nStamp+t.localStorageExpirationTime>i&&(r[o]=u)),s--,s===0&&n(null,r)})}},_storeLocal:function(e){if(window.localStorage)for(var t in e)e[t].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+t,JSON.stringify(e[t]));return},_fetch:function(e,t,n){var r=t.ns,i={};if(!t.dynamicLoad){var s=r.namespaces.length*e.length,o;p.each(r.namespaces,function(r,u){p.each(e,function(e,r){var a=function(e,t){e&&(o=o||[],o.push(e)),i[r]=i[r]||{},i[r][u]=t,s--,s===0&&n(o,i)};typeof t.customLoad=="function"?t.customLoad(r,u,t,a):M._fetchOne(r,u,t,a)})})}else{var u=x(t.resGetPath,{lng:e.join("+"),ns:r.namespaces.join("+")});p.ajax({url:u,success:function(e,t,r){p.log("loaded: "+u),n(null,e)},error:function(e,t,r){p.log("failed loading: "+u),n("failed loading resource.json error: "+r)},dataType:"json",async:t.getAsync})}},_fetchOne:function(e,t,n,r){var i=x(n.resGetPath,{lng:e,ns:t});p.ajax({url:i,success:function(e,t,n){p.log("loaded: "+i),r(null,e)},error:function(e,t,n){p.log("failed loading: "+i),r(n,{})},dataType:"json",async:n.getAsync})},postMissing:function(e,t,n,i,s){var o={};o[n]=i;var a=[];if(u.sendMissingTo==="fallback")a.push({lng:u.fallbackLng,url:x(u.resPostPath,{lng:u.fallbackLng,ns:t})});else if(u.sendMissingTo==="current")a.push({lng:e,url:x(u.resPostPath,{lng:e,ns:t})});else if(u.sendMissingTo==="all")for(var f=0,l=s.length;f<l;f++)a.push({lng:s[f],url:x(u.resPostPath,{lng:s[f],ns:t})});for(var c=0,h=a.length;c<h;c++){var d=a[c];p.ajax({url:d.url,type:u.sendType,data:o,success:function(e,s,o){p.log("posted missing key '"+n+"' to: "+d.url);var u=n.split("."),a=0,f=r[d.lng][t];while(u[a])a===u.length-1?f=f[u[a]]=i:f=f[u[a]]=f[u[a]]||{},a++},error:function(e,t,r){p.log("failed posting missing key '"+n+"' to: "+d.url)},dataType:"json",async:u.postAsync})}}},_={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(e){return Number(e>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ak:{name:"Akan",numbers:[1,2],plurals:function(e){return Number(e>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(e){return Number(e>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(e){return Number(e===0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ay:{name:"Aymará",numbers:[1],plurals:function(e){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(e){return Number(e!=1)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},bo:{name:"Tibetan",numbers:[1],plurals:function(e){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(e){return Number(e>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},cgg:{name:"Chiga",numbers:[1],plurals:function(e){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(e){return Number(e==1?0:e==2?1:e!=8&&e!=11?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},de:{name:"German",numbers:[1,2],plurals:function(e){return Number(e!=1)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(e){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(e){return Number(e!=1)}},en:{name:"English",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es:{name:"Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},et:{name:"Estonian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},eu:{name:"Basque",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fa:{name:"Persian",numbers:[1],plurals:function(e){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(e){return Number(e>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fr:{name:"French",numbers:[1,2],plurals:function(e){return Number(e>1)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(e){return Number(e==1?0:e==2?1:e<7?2:e<11?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(e){return Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(e){return Number(e!=1)}},gun:{name:"Gun",numbers:[1,2],plurals:function(e){return Number(e>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(e){return Number(e!=1)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(e){return Number(e!=1)}},id:{name:"Indonesian",numbers:[1],plurals:function(e){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(e){return Number(e%10!=1||e%100==11)}},it:{name:"Italian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ja:{name:"Japanese",numbers:[1],plurals:function(e){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(e){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(e){return Number(e!==0)}},ka:{name:"Georgian",numbers:[1],plurals:function(e){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(e){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(e){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ko:{name:"Korean",numbers:[1],plurals:function(e){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(e){return Number(e==1?0:e==2?1:e==3?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(e){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(e){return Number(e>1)}},lo:{name:"Lao",numbers:[1],plurals:function(e){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[0,1,2],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e!==0?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(e){return Number(e>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(e){return Number(e>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(e){return Number(e>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(e){return Number(e==1||e%10==1?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(e){return Number(e==1?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ms:{name:"Malay",numbers:[1],plurals:function(e){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(e){return Number(e==1?0:e===0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(e){return Number(e!=1)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(e){return Number(e!=1)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(e){return Number(e>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(e){return Number(e!=1)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(e){return Number(e!=1)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(e){return Number(e==1?0:e===0||e%100>0&&e%100<20?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(e){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(e){return Number(e!=1)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(e){return Number(e!=1)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(e){return Number(e==1?0:e>=2&&e<=4?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(e){return Number(e!=1)}},son:{name:"Songhay",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(e){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(e){return Number(e!=1)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(e){return Number(e!=1)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(e){return Number(e!=1)}},te:{name:"Telugu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(e){return Number(e>1)}},th:{name:"Thai",numbers:[1],plurals:function(e){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(e){return Number(e>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(e){return Number(e!=1)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(e){return Number(e>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(e){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(e){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(e){return Number(e!=1)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(e){return Number(e>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(e){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(e){return Number(e>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(e){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(e){return Number(e!=1)}},zh:{name:"Chinese",numbers:[1],plurals:function(e){return 0}}},addRule:function(e,t){_.rules[e]=t},setCurrentLng:function(e){if(!_.currentRule||_.currentRule.lng!==e){var t=e.split("-");_.currentRule={lng:e,rule:_.rules[t[0]]}}},get:function(e,t){function r(t,n){var r;_.currentRule&&_.currentRule.lng===e?r=_.currentRule.rule:r=_.rules[t];if(r){var i=r.plurals(n),s=r.numbers[i];return r.numbers.length===2&&r.numbers[0]===1&&(s===2?s=-1:s===1&&(s=1)),s}return n===1?"1":"-1"}var n=e.split("-");return r(n[0],t)}},D={},P=function(e,t){D[e]=t},H=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function t(e,t){for(var n=[];t>0;n[--t]=e);return n.join("")}var n=function(){return n.cache.hasOwnProperty(arguments[0])||(n.cache[arguments[0]]=n.parse(arguments[0])),n.format.call(null,n.cache[arguments[0]],arguments)};return n.format=function(n,r){var i=1,s=n.length,o="",u,a=[],f,l,c,h,p,d;for(f=0;f<s;f++){o=e(n[f]);if(o==="string")a.push(n[f]);else if(o==="array"){c=n[f];if(c[2]){u=r[i];for(l=0;l<c[2].length;l++){if(!u.hasOwnProperty(c[2][l]))throw H('[sprintf] property "%s" does not exist',c[2][l]);u=u[c[2][l]]}}else c[1]?u=r[c[1]]:u=r[i++];if(/[^s]/.test(c[8])&&e(u)!="number")throw H("[sprintf] expecting number but found %s",e(u));switch(c[8]){case"b":u=u.toString(2);break;case"c":u=String.fromCharCode(u);break;case"d":u=parseInt(u,10);break;case"e":u=c[7]?u.toExponential(c[7]):u.toExponential();break;case"f":u=c[7]?parseFloat(u).toFixed(c[7]):parseFloat(u);break;case"o":u=u.toString(8);break;case"s":u=(u=String(u))&&c[7]?u.substring(0,c[7]):u;break;case"u":u=Math.abs(u);break;case"x":u=u.toString(16);break;case"X":u=u.toString(16).toUpperCase()}u=/[def]/.test(c[8])&&c[3]&&u>=0?"+"+u:u,p=c[4]?c[4]=="0"?"0":c[4].charAt(1):" ",d=c[6]-String(u).length,h=c[6]?t(p,d):"",a.push(c[5]?u+h:h+u)}}return a.join("")},n.cache={},n.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw"[sprintf] huh?";if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw"[sprintf] huh?";s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw"[sprintf] huh?";s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";r.push(n)}t=t.substring(n[0].length)}return r},n}(),B=function(e,t){return t.unshift(e),H.apply(null,t)};P("sprintf",function(e,t,n){return n.sprintf?Object.prototype.toString.apply(n.sprintf)==="[object Array]"?B(e,n.sprintf):typeof n.sprintf=="object"?H(e,n.sprintf):e:e}),n.init=d,n.setLng=w,n.preload=v,n.addResourceBundle=m,n.loadNamespace=y,n.loadNamespaces=b,n.setDefaultNamespace=g,n.t=L,n.translate=L,n.detectLanguage=p.detectLanguage,n.pluralExtensions=_,n.sync=M,n.functions=p,n.lng=E,n.addPostProcessor=P,n.options=u})();
/**
 * @license
 * Lo-Dash 1.2.0 (Custom Build) lodash.com/license
 * Build: `lodash modern -o ./dist/lodash.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(o){function f(n){if(!n||ue.call(n)!=S)return a;var t=n.valueOf,e=typeof t=="function"&&(e=Zt(t))&&Zt(e);return e?n==e||Zt(n)==e:X(n)}function q(n,t,e){if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(var r=-1,u=F[typeof n]?me(n):[],o=u.length;++r<o&&(e=u[r],!(t(n[e],e,n)===a)););return n}function D(n,t,e){var r;if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(r in n)if(t(n[r],r,n)===a)break;return n}function z(n,t,e){var r,u=n,a=u;
if(!u)return a;for(var o=arguments,i=0,f=typeof e=="number"?2:o.length;++i<f;)if((u=o[i])&&F[typeof u]){var c=u.length;if(r=-1,rt(u))for(;++r<c;)"undefined"==typeof a[r]&&(a[r]=u[r]);else for(var l=-1,p=F[typeof u]?me(u):[],c=p.length;++l<c;)r=p[l],"undefined"==typeof a[r]&&(a[r]=u[r])}return a}function P(n,t,e){var r,u=n,a=u;if(!u)return a;var o=arguments,i=0,f=typeof e=="number"?2:o.length;if(3<f&&"function"==typeof o[f-2])var c=M.createCallback(o[--f-1],o[f--],2);else 2<f&&"function"==typeof o[f-1]&&(c=o[--f]);
for(;++i<f;)if((u=o[i])&&F[typeof u]){var l=u.length;if(r=-1,rt(u))for(;++r<l;)a[r]=c?c(a[r],u[r]):u[r];else for(var p=-1,s=F[typeof u]?me(u):[],l=s.length;++p<l;)r=s[p],a[r]=c?c(a[r],u[r]):u[r]}return a}function K(n){var t,e=[];if(!n||!F[typeof n])return e;for(t in n)ne.call(n,t)&&e.push(t);return e}function M(n){return n&&typeof n=="object"&&!rt(n)&&ne.call(n,"__wrapped__")?n:new Q(n)}function U(n){var t=n.length,e=t>=s;if(e)for(var r={},u=-1;++u<t;){var a=p+n[u];(r[a]||(r[a]=[])).push(n[u])}return function(t){if(e){var u=p+t;
return r[u]&&-1<xt(r[u],t)}return-1<xt(n,t)}}function V(n){return n.charCodeAt(0)}function G(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return e<r?-1:1}function H(n,t,e,r){function a(){var r=arguments,l=i?this:t;return o||(n=t[f]),e.length&&(r=r.length?(r=ge.call(r),c?r.concat(e):e.concat(r)):e),this instanceof a?(W.prototype=n.prototype,l=new W,W.prototype=u,r=n.apply(l,r),ot(r)?r:l):n.apply(l,r)}var o=at(n),i=!e,f=t;if(i){var c=r;
e=t}else if(!o){if(!r)throw new Vt;t=n}return a}function J(n){return"\\"+R[n]}function L(n){return be[n]}function Q(n){this.__wrapped__=n}function W(){}function X(n){var t=a;if(!n||ue.call(n)!=S)return t;var e=n.constructor;return(at(e)?e instanceof e:he.nodeClass||!isNode(n))?(D(n,function(n,e){t=e}),t===a||ne.call(n,t)):t}function Y(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Rt(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function Z(n){return de[n]}function nt(n,t,r,u,o,i){var f=n;
if(typeof t=="function"&&(u=r,r=t,t=a),typeof r=="function"){if(r=typeof u=="undefined"?r:M.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=ot(f)){var c=ue.call(f);if(!B[c])return f;var l=rt(f)}if(!u||!t)return u?l?Y(f):P({},f):f;switch(u=ye[c],c){case N:case E:return new u(+f);case I:case $:return new u(f);case A:return u(f.source,b.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(ne.call(n,"index")&&(f.index=n.index),ne.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?yt:q)(n,function(n,u){f[u]=nt(n,t,r,e,o,i)
}),f}function tt(n){var t=[];return D(n,function(n,e){at(n)&&t.push(e)}),t.sort()}function et(n){for(var t=-1,e=me(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function rt(n){return n instanceof Rt||oe(n)}function ut(n,t,e,o,i,f){var c=e===l;if(typeof e=="function"&&!c){e=M.createCallback(e,o,2);var p=e(n,t);if(typeof p!="undefined")return!!p}if(n===t)return 0!==n||1/n==1/t;var s=typeof n,v=typeof t;if(n===n&&(!n||"function"!=s&&"object"!=s)&&(!t||"function"!=v&&"object"!=v))return a;
if(n==u||t==u)return n===t;if(v=ue.call(n),s=ue.call(t),v==x&&(v=S),s==x&&(s=S),v!=s)return a;switch(v){case N:case E:return+n==+t;case I:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case A:case $:return n==Ut(t)}if(s=v==O,!s){if(ne.call(n,"__wrapped__")||ne.call(t,"__wrapped__"))return ut(n.__wrapped__||n,t.__wrapped__||t,e,o,i,f);if(v!=S)return a;var v=n.constructor,g=t.constructor;if(v!=g&&(!at(v)||!(v instanceof v&&at(g)&&g instanceof g)))return a}for(i||(i=[]),f||(f=[]),v=i.length;v--;)if(i[v]==n)return f[v]==t;
var y=0,p=r;if(i.push(n),f.push(t),s){if(v=n.length,y=t.length,p=y==n.length,!p&&!c)return p;for(;y--;)if(s=v,g=t[y],c)for(;s--&&!(p=ut(n[s],g,e,o,i,f)););else if(!(p=ut(n[y],g,e,o,i,f)))break;return p}return D(t,function(t,r,u){return ne.call(u,r)?(y++,p=ne.call(n,r)&&ut(n[r],t,e,o,i,f)):void 0}),p&&!c&&D(n,function(n,t,e){return ne.call(e,t)?p=-1<--y:void 0}),p}function at(n){return typeof n=="function"}function ot(n){return n?F[typeof n]:a}function it(n){return typeof n=="number"||ue.call(n)==I}function ft(n){return typeof n=="string"||ue.call(n)==$
}function ct(n,t,e){var r=arguments,u=0,a=2;if(!ot(n))return n;if(e===l)var o=r[3],i=r[4],c=r[5];else i=[],c=[],typeof e!="number"&&(a=r.length),3<a&&"function"==typeof r[a-2]?o=M.createCallback(r[--a-1],r[a--],2):2<a&&"function"==typeof r[a-1]&&(o=r[--a]);for(;++u<a;)(rt(r[u])?yt:q)(r[u],function(t,e){var r,u,a=t,p=n[e];if(t&&((u=rt(t))||f(t))){for(a=i.length;a--;)if(r=i[a]==t){p=c[a];break}if(!r){var s;o&&(a=o(p,t),s=typeof a!="undefined")&&(p=a),s||(p=u?rt(p)?p:[]:f(p)?p:{}),i.push(t),c.push(p),s||(p=ct(p,t,l,o,i,c))
}}else o&&(a=o(p,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(p=a);n[e]=p});return n}function lt(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u}function pt(n,t,e){var r=-1,u=n?n.length:0,o=a;return e=(0>e?le(0,u+e):e)||0,typeof u=="number"?o=-1<(ft(n)?n.indexOf(t,e):xt(n,t,e)):q(n,function(n){return++r<e?void 0:!(o=n===t)}),o}function st(n,t,e){var u=r;t=M.createCallback(t,e),e=-1;var a=n?n.length:0;if(typeof a=="number")for(;++e<a&&(u=!!t(n[e],e,n)););else q(n,function(n,e,r){return u=!!t(n,e,r)
});return u}function vt(n,t,e){var r=[];t=M.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var a=n[e];t(a,e,n)&&r.push(a)}else q(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function gt(n,t,e){t=M.createCallback(t,e),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return q(n,function(n,e,r){return t(n,e,r)?(u=n,a):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function yt(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:M.createCallback(t,e),typeof u=="number")for(;++r<u&&t(n[r],r,n)!==a;);else q(n,t);
return n}function ht(n,t,e){var r=-1,u=n?n.length:0;if(t=M.createCallback(t,e),typeof u=="number")for(var a=Rt(u);++r<u;)a[r]=t(n[r],r,n);else a=[],q(n,function(n,e,u){a[++r]=t(n,e,u)});return a}function mt(n,t,e){var r=-1/0,u=r;if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o>u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)});return u}function bt(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Rt(r);++e<r;)u[e]=n[e][t];return u||ht(n,t)
}function dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=M.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else q(n,function(n,r,o){e=u?(u=a,n):t(e,n,r,o)});return e}function _t(n,t,e,r){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=me(n),u=i.length;return t=M.createCallback(t,r,4),yt(n,function(r,f,c){f=i?i[--u]:--u,e=o?(o=a,n[f]):t(e,n[f],f,c)}),e}function kt(n,t,e){var r;t=M.createCallback(t,e),e=-1;var u=n?n.length:0;
if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else q(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function wt(n){for(var t=-1,e=n?n.length:0,r=Xt.apply(Gt,ge.call(arguments,1)),r=U(r),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u}function Ct(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=-1;for(t=M.createCallback(t,e);++o<a&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[0];return Y(n,0,pe(le(0,r),a))}}function jt(n,t,e,r){var o=-1,i=n?n.length:0,f=[];for(typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a),e!=u&&(e=M.createCallback(e,r));++o<i;)r=n[o],e&&(r=e(r,o,n)),rt(r)?te.apply(f,t?r:jt(r)):f.push(r);
return f}function xt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?le(0,u+e):e||0)-1;else if(e)return r=Nt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function Ot(n,t,e){if(typeof t!="number"&&t!=u){var r=0,a=-1,o=n?n.length:0;for(t=M.createCallback(t,e);++a<o&&t(n[a],a,n);)r++}else r=t==u||e?1:le(0,t);return Y(n,r)}function Nt(n,t,e,r){var u=0,a=n?n.length:u;for(e=e?M.createCallback(e,r,1):$t,t=e(t);u<a;)r=u+a>>>1,e(n[r])<t?u=r+1:a=r;return u}function Et(n,t,e,r){var o=-1,i=n?n.length:0,f=[],c=f;
typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a);var l=!t&&i>=s;if(l)var v={};for(e!=u&&(c=[],e=M.createCallback(e,r));++o<i;){r=n[o];var g=e?e(r,o,n):r;if(l)var y=p+g,y=v[y]?!(c=v[y]):c=v[y]=[];(t?!o||c[c.length-1]!==g:y||0>xt(c,g))&&((e||l)&&c.push(g),f.push(r))}return f}function It(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function St(n,t){return he.fastBind||ae&&2<arguments.length?ae.call.apply(ae,arguments):H(n,t,ge.call(arguments,2))}function At(n){var t=ge.call(arguments,1);
return re(function(){n.apply(e,t)},1)}function $t(n){return n}function Bt(n){yt(tt(n),function(t){var e=M[t]=n[t];M.prototype[t]=function(){var n=this.__wrapped__,t=[n];return te.apply(t,arguments),t=e.apply(M,t),n&&typeof n=="object"&&n==t?this:new Q(t)}})}function Ft(){return this.__wrapped__}o=o?T.defaults(n.Object(),o,T.pick(n,j)):n;var Rt=o.Array,Tt=o.Boolean,qt=o.Date,Dt=o.Function,zt=o.Math,Pt=o.Number,Kt=o.Object,Mt=o.RegExp,Ut=o.String,Vt=o.TypeError,Gt=Rt(),Ht=Kt(),Jt=o._,Lt=Mt("^"+Ut(Ht.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qt=zt.ceil,Wt=o.clearTimeout,Xt=Gt.concat,Yt=zt.floor,Zt=Lt.test(Zt=Kt.getPrototypeOf)&&Zt,ne=Ht.hasOwnProperty,te=Gt.push,ee=o.setImmediate,re=o.setTimeout,ue=Ht.toString,ae=Lt.test(ae=ue.bind)&&ae,oe=Lt.test(oe=Rt.isArray)&&oe,ie=o.isFinite,fe=o.isNaN,ce=Lt.test(ce=Kt.keys)&&ce,le=zt.max,pe=zt.min,se=o.parseInt,ve=zt.random,ge=Gt.slice,zt=Lt.test(o.attachEvent),zt=ae&&!/\n|true/.test(ae+zt),ye={};
ye[O]=Rt,ye[N]=Tt,ye[E]=qt,ye[S]=Kt,ye[I]=Pt,ye[A]=Mt,ye[$]=Ut;var he=M.support={};he.fastBind=ae&&!zt,M.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:d,variable:"",imports:{_:M}},Q.prototype=M.prototype;var me=ce?function(n){return ot(n)?ce(n):[]}:K,be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=et(be);return zt&&i&&typeof ee=="function"&&(At=St(ee,o)),Tt=8==se("08")?se:function(n,t){return se(ft(n)?n.replace(_,""):n,t||0)},M.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0
}},M.assign=P,M.at=function(n){for(var t=-1,e=Xt.apply(Gt,ge.call(arguments,1)),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u},M.bind=St,M.bindAll=function(n){for(var t=1<arguments.length?Xt.apply(Gt,ge.call(arguments,1)):tt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=St(n[u],n)}return n},M.bindKey=function(n,t){return H(n,t,ge.call(arguments,2),l)},M.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},M.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];
return t[0]}},M.countBy=function(n,t,e){var r={};return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),ne.call(r,e)?r[e]++:r[e]=1}),r},M.createCallback=function(n,t,e){if(n==u)return $t;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var o=me(n);return function(t){for(var e=o.length,r=a;e--&&(r=ut(t[o[e]],n[o[e]],l)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
}:function(e,r,u){return n.call(t,e,r,u)}:n},M.debounce=function(n,t,e){function o(){l=u,p&&(f=n.apply(c,i))}var i,f,c,l,p=r;if(e===r)var s=r,p=a;else e&&F[typeof e]&&(s=e.leading,p="trailing"in e?e.trailing:p);return function(){var e=s&&!l;return i=arguments,c=this,Wt(l),l=re(o,t),e&&(f=n.apply(c,i)),f}},M.defaults=z,M.defer=At,M.delay=function(n,t){var r=ge.call(arguments,2);return re(function(){n.apply(e,r)},t)},M.difference=wt,M.filter=vt,M.flatten=jt,M.forEach=yt,M.forIn=D,M.forOwn=q,M.functions=tt,M.groupBy=function(n,t,e){var r={};
return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),(ne.call(r,e)?r[e]:r[e]=[]).push(n)}),r},M.initial=function(n,t,e){if(!n)return[];var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=t==u||e?1:t||r;return Y(n,0,pe(le(0,a-r),a))},M.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=a>=s,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=p+c,l=r[0][l]?!(f=r[0][l]):f=r[0][l]=[];if(l||0>xt(f,c)){o&&f.push(c);
for(var v=e;--v;)if(!(r[v]||(r[v]=U(t[v])))(c))continue n;i.push(c)}}return i},M.invert=et,M.invoke=function(n,t){var e=ge.call(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Rt(typeof a=="number"?a:0);return yt(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},M.keys=me,M.map=ht,M.max=mt,M.memoize=function(n,t){var e={};return function(){var r=p+(t?t.apply(this,arguments):arguments[0]);return ne.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},M.merge=ct,M.min=function(n,t,e){var r=1/0,u=r;
if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o<u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},M.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=M.createCallback(t,e);else var a=Xt.apply(Gt,ge.call(arguments,1));return D(n,function(n,e,o){(r?!t(n,e,o):0>xt(a,e))&&(u[e]=n)}),u},M.once=function(n){var t,e;return function(){return t?e:(t=r,e=n.apply(this,arguments),n=u,e)}},M.pairs=function(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;){var a=e[t];
u[t]=[a,n[a]]}return u},M.partial=function(n){return H(n,ge.call(arguments,1))},M.partialRight=function(n){return H(n,ge.call(arguments,1),u,l)},M.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,a=Xt.apply(Gt,ge.call(arguments,1)),o=ot(n)?a.length:0;++u<o;){var i=a[u];i in n&&(r[i]=n[i])}else t=M.createCallback(t,e),D(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},M.pluck=bt,M.range=function(n,t,e){n=+n||0,e=+e||1,t==u&&(t=n,n=0);var r=-1;t=le(0,Qt((t-n)/e));for(var a=Rt(t);++r<t;)a[r]=n,n+=e;
return a},M.reject=function(n,t,e){return t=M.createCallback(t,e),vt(n,function(n,e,r){return!t(n,e,r)})},M.rest=Ot,M.shuffle=function(n){var t=-1,e=n?n.length:0,r=Rt(typeof e=="number"?e:0);return yt(n,function(n){var e=Yt(ve()*(++t+1));r[t]=r[e],r[e]=n}),r},M.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,a=Rt(typeof u=="number"?u:0);for(t=M.createCallback(t,e),yt(n,function(n,e,u){a[++r]={a:t(n,e,u),b:r,c:n}}),u=a.length,a.sort(G);u--;)a[u]=a[u].c;return a},M.tap=function(n,t){return t(n),n},M.throttle=function(n,t,e){function o(){p=new qt,l=u,v&&(f=n.apply(c,i))
}var i,f,c,l,p=0,s=r,v=r;return e===a?s=a:e&&F[typeof e]&&(s="leading"in e?e.leading:s,v="trailing"in e?e.trailing:v),function(){var e=new qt;!l&&!s&&(p=e);var r=t-(e-p);return i=arguments,c=this,0<r?l||(l=re(o,r)):(Wt(l),l=u,p=e,f=n.apply(c,i)),f}},M.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Rt(n);for(t=M.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},M.toArray=function(n){return n&&typeof n.length=="number"?Y(n):lt(n)},M.union=function(n){return rt(n)||(arguments[0]=n?ge.call(n):Gt),Et(Xt.apply(Gt,arguments))
},M.uniq=Et,M.unzip=function(n){for(var t=-1,e=n?n.length:0,r=e?mt(bt(n,"length")):0,u=Rt(r);++t<e;)for(var a=-1,o=n[t];++a<r;)(u[a]||(u[a]=Rt(e)))[t]=o[a];return u},M.values=lt,M.where=vt,M.without=function(n){return wt(n,ge.call(arguments,1))},M.wrap=function(n,t){return function(){var e=[n];return te.apply(e,arguments),t.apply(this,e)}},M.zip=function(n){for(var t=-1,e=n?mt(bt(arguments,"length")):0,r=Rt(e);++t<e;)r[t]=bt(arguments,t);return r},M.zipObject=It,M.collect=ht,M.drop=Ot,M.each=yt,M.extend=P,M.methods=tt,M.object=It,M.select=vt,M.tail=Ot,M.unique=Et,Bt(M),M.clone=nt,M.cloneDeep=function(n,t,e){return nt(n,r,t,e)
},M.contains=pt,M.escape=function(n){return n==u?"":Ut(n).replace(w,L)},M.every=st,M.find=gt,M.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=M.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},M.findKey=function(n,t,e){var r;return t=M.createCallback(t,e),q(n,function(n,e,u){return t(n,e,u)?(r=e,a):void 0}),r},M.has=function(n,t){return n?ne.call(n,t):a},M.identity=$t,M.indexOf=xt,M.isArguments=function(n){return ue.call(n)==x},M.isArray=rt,M.isBoolean=function(n){return n===r||n===a||ue.call(n)==N
},M.isDate=function(n){return n instanceof qt||ue.call(n)==E},M.isElement=function(n){return n?1===n.nodeType:a},M.isEmpty=function(n){var t=r;if(!n)return t;var e=ue.call(n),u=n.length;return e==O||e==$||e==x||e==S&&typeof u=="number"&&at(n.splice)?!u:(q(n,function(){return t=a}),t)},M.isEqual=ut,M.isFinite=function(n){return ie(n)&&!fe(parseFloat(n))},M.isFunction=at,M.isNaN=function(n){return it(n)&&n!=+n},M.isNull=function(n){return n===u},M.isNumber=it,M.isObject=ot,M.isPlainObject=f,M.isRegExp=function(n){return n instanceof Mt||ue.call(n)==A
},M.isString=ft,M.isUndefined=function(n){return typeof n=="undefined"},M.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?le(0,r+e):pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},M.mixin=Bt,M.noConflict=function(){return o._=Jt,this},M.parseInt=Tt,M.random=function(n,t){return n==u&&t==u&&(t=1),n=+n||0,t==u&&(t=n,n=0),n+Yt(ve()*((+t||0)-n+1))},M.reduce=dt,M.reduceRight=_t,M.result=function(n,t){var r=n?n[t]:e;return at(r)?n[t]():r},M.runInContext=t,M.size=function(n){var t=n?n.length:0;
return typeof t=="number"?t:me(n).length},M.some=kt,M.sortedIndex=Nt,M.template=function(n,t,u){var a=M.templateSettings;n||(n=""),u=z({},u,a);var o,i=z({},u.imports,a.imports),a=me(i),i=lt(i),f=0,c=u.interpolate||k,l="__p+='",c=Mt((u.escape||k).source+"|"+c.source+"|"+(c===d?m:k).source+"|"+(u.evaluate||k).source+"|$","g");n.replace(c,function(t,e,u,a,i,c){return u||(u=a),l+=n.slice(f,c).replace(C,J),e&&(l+="'+__e("+e+")+'"),i&&(o=r,l+="';"+i+";__p+='"),u&&(l+="'+((__t=("+u+"))==null?'':__t)+'"),f=c+t.length,t
}),l+="';\n",c=u=u.variable,c||(u="obj",l="with("+u+"){"+l+"}"),l=(o?l.replace(v,""):l).replace(g,"$1").replace(y,"$1;"),l="function("+u+"){"+(c?"":u+"||("+u+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var p=Dt(a,"return "+l).apply(e,i)}catch(s){throw s.source=l,s}return t?p(t):(p.source=l,p)},M.unescape=function(n){return n==u?"":Ut(n).replace(h,Z)},M.uniqueId=function(n){var t=++c;return Ut(n==u?"":n)+t
},M.all=st,M.any=kt,M.detect=gt,M.foldl=dt,M.foldr=_t,M.include=pt,M.inject=dt,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(){var t=[this.__wrapped__];return te.apply(t,arguments),n.apply(M,t)})}),M.first=Ct,M.last=function(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[a-1];return Y(n,le(0,a-r))}},M.take=Ct,M.head=Ct,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);
return t==u||e&&typeof t!="function"?r:new Q(r)})}),M.VERSION="1.2.0",M.prototype.toString=function(){return Ut(this.__wrapped__)},M.prototype.value=Ft,M.prototype.valueOf=Ft,yt(["join","pop","shift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)}}),yt(["push","reverse","sort","unshift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),yt(["concat","slice","splice"],function(n){var t=Gt[n];M.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments))
}}),M}var e,r=!0,u=null,a=!1,o=typeof exports=="object"&&exports,i=typeof module=="object"&&module&&module.exports==o&&module,f=typeof global=="object"&&global;(f.global===f||f.window===f)&&(n=f);var c=0,l={},p=+new Date+"",s=200,v=/\b__p\+='';/g,g=/\b(__p\+=)''\+/g,y=/(__e\(.*?\)|\b__t\))\+'';/g,h=/&(?:amp|lt|gt|quot|#39);/g,m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/\w*$/,d=/<%=([\s\S]+?)%>/g,_=/^0+(?=.$)/,k=/($^)/,w=/[&<>"']/g,C=/['\n\r\t\u2028\u2029\\]/g,j="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),x="[object Arguments]",O="[object Array]",N="[object Boolean]",E="[object Date]",I="[object Number]",S="[object Object]",A="[object RegExp]",$="[object String]",B={"[object Function]":a};
B[x]=B[O]=B[N]=B[E]=B[I]=B[S]=B[A]=B[$]=r;var F={"boolean":a,"function":r,object:r,number:a,string:a,undefined:a},R={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},T=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=T,define(function(){return T})):o&&!o.nodeType?i?(i.exports=T)._=T:o._=T:n._=T})(this);
//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both the browser and the server.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.0.0';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    _.extend(this, _.pick(options, modelOptions));
    if (options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // A list of options to be attached directly to the model, if provided.
  var modelOptions = ['url', 'urlRoot', 'collection'];

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
      if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

      options = _.extend({validate: true}, options);

      // Do not persist invalid models.
      if (!this._validate(attrs, options)) return false;

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.url) this.url = options.url;
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, merge: false, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.defaults(options || {}, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults(options || {}, setOptions);
      if (options.parse) models = this.parse(models, options);
      if (!_.isArray(models)) models = models ? [models] : [];
      var i, l, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(models[i], options))) continue;

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(model)) {
          if (options.remove) modelMap[existing.cid] = true;
          if (options.merge) {
            existing.set(model.attributes, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }

        // This is a new model, push it to the `toAdd` list.
        } else if (options.add) {
          toAdd.push(model);

          // Listen to added models' events, and index models for lookup by
          // `id` and by `cid`.
          model.on('all', this._onModelEvent, this);
          this._byId[model.cid] = model;
          if (model.id != null) this._byId[model.id] = model;
        }
      }

      // Remove nonexistent models if appropriate.
      if (options.remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(toAdd));
        } else {
          push.apply(this.models, toAdd);
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      if (options.silent) return this;

      // Trigger `add` events.
      for (i = 0, l = toAdd.length; i < l; i++) {
        (model = toAdd[i]).trigger('add', model, this, options);
      }

      // Trigger `sort` if the collection was sorted.
      if (sort) this.trigger('sort', this, options);
      return this;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models;
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function(begin, end) {
      return this.models.slice(begin, end);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj.id != null ? obj.id : obj.cid || obj];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Figure out the smallest index at which a model should be inserted so as
    // to maintain order.
    sortedIndex: function(model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) {
        this.trigger('invalid', this, attrs, options);
        return false;
      }
      return model;
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
    'isEmpty', 'chain'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(e.g. model, collection, id, className)* are
    // attached directly to the view.  See `viewOptions` for an exhaustive
    // list.
    _configure: function(options) {
      if (this.options) options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && window.ActiveXObject &&
          !(window.external && window.external.msActiveXFilteringEnabled)) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        callback && callback.apply(router, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional){
                     return optional ? match : '([^\/]+)';
                   })
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param) {
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment) return;
      this.fragment = fragment;
      var url = this.root + fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function (model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

}).call(this);
//     Backbone.touch.js 0.2

//     (c) 2012 Raymond Julin, Keyteq AS
//     Backbone.touch may be freely distributed under the MIT license.
;(function (factory) {

    "use strict";

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['underscore', 'backbone'], factory);
    } else {
        // Browser globals
        factory(_, Backbone);
    }
}(function (_, Backbone) {

    "use strict";

    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    _.extend(Backbone.View.prototype, {
        _touching : false,

        touchPrevents : true,

        isTouch : ('ontouchstart' in document && !('callPhantom' in window)) ||
                  window.navigator.msPointerEnabled,

        // Drop in replacement for Backbone.View#delegateEvent
        // Enables better touch support
        // 
        // If the users device is touch enabled it replace any `click`
        // event with listening for touch(start|move|end) in order to
        // quickly trigger touch taps
        delegateEvents: function(events) {
          if (!(events || (events = _.result(this, 'events')))) return this;
          this.undelegateEvents();
          for (var key in events) {
            var method = events[key];
            if (!_.isFunction(method)) method = this[events[key]];
            if (!method) continue;
            var match = key.match(delegateEventSplitter);
            var eventName = match[1], selector = match[2];
            method = _.bind(method, this);

            // begin hack
            var that = this;
            var boundHandler = (function (method) {
              return function (e) {
                that._touchHandler(e, {method:method});
              };
            })(method);
            if (this.isTouch && eventName === 'vclick') {
              if (window.navigator.msPointerEnabled) {
                  this.$el.on('MSPointerDown', selector, boundHandler);
                  this.$el.on('MSPointerUp', selector, boundHandler);
              }
              this.$el.on('touchstart', selector, boundHandler);
              this.$el.on('touchend', selector, boundHandler);
            } else {
              eventName = (eventName === 'vclick') ? 'click' : eventName;
              // backbone code.
              eventName += '.delegateEvents' + this.cid;
              if (selector === '') {
                this.$el.on(eventName, method);
              } else {
                this.$el.on(eventName, selector, method);
              }

            }
          }
          return this;
        },

        // At the first touchstart we register touchevents as ongoing
        // and as soon as a touch move happens we set touching to false,
        // thus implying that a fastclick will not happen when
        // touchend occurs. If no touchmove happened
        // inbetween touchstart and touchend we trigger the event
        //
        // The `touchPrevents` toggle decides if Backbone.touch
        // will stop propagation and prevent default
        // for *button* and *a* elements
        _touchHandler : function(e, data) {
            if (window.navigator.msPointerEnabled) { // ie10.
            console.log(e.type);
                switch (e.type) {
                    case 'MSPointerUp':
                        if (this.touchPrevents) {
                            var tagName = e.currentTarget.tagName;
                            if (tagName === 'BUTTON' ||
                                tagName === 'A') {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                        data.method(e);
                        break;
                }
                return;
            }
            if (!('changedTouches' in e.originalEvent)) return;
            var touch = e.originalEvent.changedTouches[0];
            var x = touch.clientX;
            var y = touch.clientY;
            switch (e.type) {
                case 'touchstart':
                    this._touching = [x, y];
                    break;
                case 'touchend':
                    var oldX = this._touching[0];
                    var oldY = this._touching[1];
                    var threshold = 10;
                    if (x < (oldX + threshold) && x > (oldX - threshold) &&
                        y < (oldY + threshold) && y > (oldY - threshold)) {
                        this._touching = false;
                        if (this.touchPrevents) {
                            var tagName = e.currentTarget.tagName;
                            if (tagName === 'BUTTON' ||
                                tagName === 'A') {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                        data.method(e);
                    }
                    break;
            }
        }
    });
    return Backbone;
}));

/**
(c) 2012 Uzi Kilon, Splunk Inc.
Backbone Poller 0.2.1
https://github.com/uzikilon/backbone-poller
Backbone Poller may be freely distributed under the MIT license.
*/(function(e,t){"use strict";function u(e){return n.find(o,function(t){return t.model===e})}function f(e,t){this.model=e,this.set(t)}function l(e){if(e.active()!==!0){e.stop({silent:!0});return}var t=n.extend({data:e.options.data},{success:function(){e.trigger("success",e.model),e.options.condition(e.model)!==!0?(e.stop({silent:!0}),e.trigger("complete",e.model)):e.timeoutId=n.delay(l,e.options.delay,e)},error:function(){e.stop({silent:!0}),e.trigger("error",e.model)}});e.trigger("fetch",e.model),e.xhr=e.model.fetch(t)}var n=e._,r=e.Backbone,i={delay:1e3,condition:function(){return!0}},s=["start","stop","fetch","success","error","complete"],o=[],a={get:function(e,t){var n=u(e);return n?n.set(t):(n=new f(e,t),o.push(n)),t&&t.autostart===!0&&n.start({silent:!0}),n},getPoller:function(){return window.console&&window.console.warn("getPoller() is depreacted, Use Backbone.Poller.get()"),this.get.apply(this,arguments)},size:function(){return o.length},reset:function(){while(o.length)o.pop().stop()}};n.extend(f.prototype,r.Events,{set:function(e){return this.off(),this.options=n.extend({},i,e||{}),n.each(s,function(e){var t=this.options[e];n.isFunction(t)&&this.on(e,t,this)},this),this.model instanceof r.Model&&this.model.on("destroy",this.stop,this),this.stop({silent:!0})},start:function(e){return this.active()||(e=e||{},e.silent||this.trigger("start",this.model),this.options.active=!0,l(this)),this},stop:function(e){return e=e||{},e.silent||this.trigger("stop",this.model),this.options.active=!1,this.xhr&&n.isFunction(this.xhr.abort)&&this.xhr.abort(),this.xhr=null,clearTimeout(this.timeoutId),this.timeoutId=null,this},active:function(){return this.options.active===!0}}),window.PollingManager=a,r.Poller=a})(this);
/*\
|*|	
|*|	polyfilling the subset of iso8601 dates used by JavaScript (ECMAScript-262 v5.1)
|*|	- ck 02/07/2012 
|*|	- ck 01/21/2013 - updated with stuff about the upcoming ES6.0 shift (see other version of this file)
|*|	testing ground: http://jsbin.com/akagim/10
|*|		ref:
|*|			http://dev.w3.org/html5/spec/common-microsyntaxes.html
|*|			http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
|*|			http://msdn.microsoft.com/en-us/library/windows/apps/ff743760(v=vs.94).aspx
|*|			http://msdn.microsoft.com/en-us/library/windows/apps/wz6stk2z(v=vs.94).aspx
|*|			http://msdn.microsoft.com/en-us/library/windows/apps/k4w173wk(v=vs.94).aspx
|*|			https://connect.microsoft.com/IE/feedback/details/723740/date-parse-and-new-date-fail-on-valid-formats
|*|	
\*/

(function() {

	var d = window.Date,
		regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,3})(?:Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

	if (d.parse('2011-11-29T15:52:30.5') !== 1322581950500 ||
		d.parse('2011-11-29T15:52:30.52') !== 1322581950520 ||
		d.parse('2011-11-29T15:52:18.867') !== 1322581938867 ||
		d.parse('2011-11-29T15:52:18.867Z') !== 1322581938867 ||
		d.parse('2011-11-29T15:52:18.867-03:30') !== 1322594538867 ||
		d.parse('2011-11-29') !== 1322524800000 ||
		d.parse('2011-11') !== 1320105600000 ||
		d.parse('2011') !== 1293840000000) {

		d.__parse = d.parse;

		d.parse = function(v) {

			var m = regexIso8601.exec(v);

			if (m) {
				return Date.UTC(
					m[1],
					(m[2] || 1) - 1,
					m[3] || 1,
					m[4] - (m[8] ? m[8] + m[9] : 0) || 0,
					m[5] - (m[8] ? m[8] + m[10] : 0) || 0,
					m[6] || 0,
					((m[7] || 0) + '00').substr(0, 3)
				);
			}

			return d.__parse.apply(this, arguments);

		};
	}

	d.__fromString = d.fromString;

	d.fromString = function(v) {

		if (!d.__fromString || regexIso8601.test(v)) {
			return new d(d.parse(v));
		}

		return d.__fromString.apply(this, arguments);
	};

})();

// ALL USEFUL FCTS
var checkName =  function(input) {
  //var ck_name = /^[A-Za-z ]{3,40}$/;
  var ck_name = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,40}$/;
  if (!ck_name.test(input)) 
	  return true;
  return false;
};

var checkRank =  function(input) {
  var ck_rank =  /^[A-Za-z0-9!\/\_-]{1,5}$/;
  if (!ck_rank.test(input)) 
	  return true;
  return false;
};



var checkLicence = function(input){
 var ck_licence = /^[A-Za-z0-9 ]{4,16}$/;

  if (!ck_licence.test(input)) 
	return true;
	
  return false; 
};

var checkComment = function(input){
 var ck_comment = /^[A-Za-z0-9 ]{2,300}$/;

  if (!ck_comment.test(input)) 
	return true;
	
  return false; 
};

JSON.tryParse = function(o, undefined) {
  try {
    return JSON.parse(o);
  } catch (e) {
    return undefined;
  }
};

String.prototype.startsWith = function (subString) {
    return this.indexOf(subString) === 0;
};

String.prototype.padLeft = function (size, padString) {
    var n = String(this);
    padString = padString || " ";
    while (n.length < size) {
        n = padString + n;
    }
    return n;
};

String.prototype.padRight = function(size, padString) {
  var t = String(this), l = padString.length;
  while (t.length + l <= size)
    t += padString;
  if (t.length < size)
    t += padString.substring(0, size - t);
  return t;
};

String.prototype.toRegExp = function () {
    return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

String.prototype.isEmail = function() {
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(this);
};

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

// for old browser : parse a date in yyyy-mm-dd format
var parseDate = function(input) {
  var parts = input.match(/(\d+)/g);
  
  //console.log('ANDROID parts',parts);
  
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4], parts[5]); // months are 0-based
};

Date.prototype.getMonthName = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'fr';
    return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameShort = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'fr';
    return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.locale = {
    fr: {
       month_names: ['janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre'],
       month_names_short: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    en: {
       month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

window.isMobileBrowser = (function () {
  // detect lots of mobile browser (not ipad/tablet/..)
  // isMobileBrowser copyright to http://detectmobilebrowsers.com/ (@chadsmith)
  var isMobileBrowser = null;
  /*#ifndef WEB*/
  isMobileBrowser = true; // WEB => null => dynamic computation.
  /*#endif*/
  return function () {
    if (isMobileBrowser === null) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      isMobileBrowser = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
    }
    return isMobileBrowser;
  }
})();

var assert = function () { };
/*#ifdef DEV*/
assert = function (t) { if (!t) throw "assert false " };
/*#endif*/

var PROD = true;
/*#ifdef DEV*/
PROD = false;
/*#endif*/
if (PROD) {
  // we do not want any console.log in production environment.
  setTimeout(function () {
    var f = console.log;
    console.log = function () {
      return;
    };
    console.log.f = f;
  }, 5000);
} else {
  (function () {
    var start = Date.now();
    var f = console.log;
    console.log = function () {
      var a = Array.prototype.slice.apply(arguments);
      var now = Date.now() - start;
      now = String(Math.floor(now / 1000)).padLeft(3, '0') + "." + String(now % 1000).padRight(3, '0');
      a.unshift(now);
      f.apply(console, a);
    };
    console.log.f = f;
  })();

  /*#ifdef CORDOVA*/
  // on prend les précautions psychologiques d'usage
  // => on rend les consoles logs asynchrones.
  //  car sous cordova, console.log met en attente le JS !!!
  setTimeout(function () {
    var f = console.log;
    console.log = function () {
      var a = Array.prototype.slice.apply(arguments);
      setTimeout(function () { f.apply(console, a); }, 10);
    };
    console.log.f = f;
  }, 5000);
  /*#endif*/
}


// Global Object
(function (global, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var YesWeScore = {
    language: window.navigator.language || "en-US",
    Conf: null,      // @see y/conf.js
    Router: null,    // @see y/router.js
    Templates: null, // @see y/tempates.js
    Views: {},       // @see y/views/*

    GUI: null,       // @see y/gui.js

    App: null,       // @see y/app.js

    status: "uninitialized",  // uninitialized, loading, loaded

    /* /!\ overwrited in DEV by Y.Env in ey/env.js */
    Env: {
      DEV: "DEV",
      PROD: "PROD",
      CURRENT: null
    },

    initializingBackbone: function () {
      Backbone.$ = $;
      Backbone.ajax = function(url, options) {
          // proxy to jquery
          if (typeof url === "object") {
            options = url;
            url = undefined;
          }
          options = options || {};
          url = url || options.url;
          /*#ifdef CORS*/
          // adding cors
          options.crossDomain = true;
          /*#endif*/
          options.cache = false; // forcing jquery to add a random parameter.
          // calling jquery
          //console.log('Backbone.ajax: '+url+' '+JSON.stringify(options));
          // event system
          /*#ifdef DEV*/
          console.log('Backbone.ajax: ' + url + ' options = ' + JSON.stringify(options));
          /*#endif*/

          // slow if answer is taking longer than 2sec.
         
          // launching xhr.
          var xhr = $.ajax(url, options);
          // events.
          xhr.always($.proxy(function () { this.trigger("request.end"); }, this));
          
          this.trigger("request.start", xhr, url, options);
          return xhr;
      };
    },

    load: function (callback) {
      var that = this;

      // initializing backbone.
      this.initializingBackbone();
      // init self configuration
      this.Conf.initEnv()
               .load(this.Env.CURRENT, function onConfLoaded(err) {
                 // /!\ error handling after i18n

                 // internationalization.
                 var i18nOptions = { lng: "fr-FR", fallbackLng: "fr" };
                 that.i18nOptions = i18nOptions;
                 /*#ifndef WP8*/
                 if (false) {
                 /*#endif*/
                   i18nOptions.resGetPath = '/www/locales/__lng__/translation.json';
                 /*#ifndef WP8*/
                 }
                 /*#endif*/
                 i18n.init(i18nOptions, function() {
                   // FIXME: error handling; rework the loading process.
                   //  if err is "deprecated" => we stop loading.
                   //  if err is other (ex: "network connection"), we continue to load.
                   if (err == "deprecated" || err == "network error")
                     return callback(err);

                   // init router
                   that.Router.initialize();
                    /*#ifdef DEV*/
    				console.log('router initialized');
    				/*#endif*/
                   
                   // load the templates.
                   that.Templates.loadAsync(function () {
                     /*#ifdef DEV*/ 
                     console.log('template loaded');
                     /*#endif*/
                     // init GUI singleton
                     that.GUI.header = new Y.Views.Header();
                     that.GUI.content = null; // will be overwrite by the router.
                     that.GUI.autocomplete = new Y.Views.Autocomplete();
                     that.GUI.navbar = new Y.Views.Navbar();  // unused yet.
                     /*#ifdef DEV*/
                     console.log('backbone history start');
                     /*#endif*/
                     // start dispatching routes
                     // @see http://backbonejs.org/#History-start
                     Backbone.history.start();
                     // Everything is ok => updating networkg status
                     // FiXME: remplacer cet artefact de chargement par un splashscreen étendu.
                     //Y.Connection.resetStatus();
                     // appel de la callback.
                     callback();
                   });
                 });
               });
    },

    unload: function () {
      Y.Connection.unload();
    },

    // FIXME: should be initialized only when document is ready.
    // same as jquery ;)
    ready: (function () {
      var callbacks = [];

      return function ready(callback) {
        switch (this.status) {
          case "uninitialized":
            // when YesWeScore is uninitialized, we just stack the callbacks.
            callbacks.push(callback);
            // we are now "loading"
            console.log('avant status loading ');
            this.status = "loading";
            
            this.load(_.bind(function onConfLoaded(err) {
              // error handling
              if (err) {
                if (err === "deprecated") {
                  //Y.Connection.forceStatus(Y.Connection.STATUS_OFFLINE);
                  console.log("deprecated");
                  //Y.GUI.displayLayerNewVersion();
                  return; // we do not want to continue loading.
                }
                if (err === "network error")
                  console.log("network error");
                  //Y.GUI.diplayLayerNetworkError();
                  return;
              }
              // We are now ready.
              this.status = "ready";
              _(callbacks).forEach(function (f) { f() });
            }, this));
            break;
          case "loading":
            // when YesWeScore is loading, we just stack the callbacks.
            callbacks.push(callback);
            break;
          case "ready":
            // when YesWeScore is ready, call the callback !
            setTimeout(callback, 10);
            break;
          default:
            throw "error";
        }
      };
    })()
  };
  // exporting YesWeScore to global scope, aliasing it to Y.
  global.YesWeScore = YesWeScore;
  global.Y = YesWeScore;
})(this);
(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var App = {
    VERSION: 1 // current version.
  };

  // setting conf
  Y.App = App;
})(Y);


(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  // DB Storage drivers :
  //  - localStorage (if possible)
  //  - peacefull degradation to javascript storage engine.
  var Drivers = {
    localStorage: {
      isUsable: function () {
        try {
          window.localStorage.setItem("__wtf", "31337");
          if (window.localStorage.getItem("__wtf") !== "31337")
            return false;
          window.localStorage.removeItem("__wtf");
          return true;
        } catch (e) { return false; }
      },
      setItem: function (k, v) { return window.localStorage.setItem(k, v); },
      getItem: function (k) { return window.localStorage.getItem(k); },
      removeItem: function (k) { return window.localStorage.removeItem(k); },
      getKeys: function () { return _.keys(window.localStorage); }
    },
    javascript: {
      isUsable: function () { return true; },
      data : {},
      setItem: function (k, v) { this.data[k] = v; return; },
      getItem: function (k) { if (typeof this.data[k] === "undefined") return null; return this.data[k]; },
      removeItem: function (k) { delete this.data[k]; return; },
      getKeys: function () { return _.keys(this.data); }
    }
  };

  // loading default driver.
  var defaultDriver = null;
  _.forEach(Drivers, function (driver, driverName) {
    if (!defaultDriver && driver.isUsable()) {
      defaultDriver = driver;
      /*#ifdef DEV*/
      console.log("USING driver : " + driverName);
      /*#endif*/
    }
  });

  // DB: no need of any drivers
  //  localStorage is supported on android / iOS
  //  @see http://caniuse.com/#feat=namevalue-storage
  //
  // But, IE10 + weinre => localStorage messup => drivers.
  //
  // FIXME: utiliser une surcouche au localstorage qui gère le quota et 
  //    une notion de date et priorité (#44910971)
  var DB = function (prefix, driver) {
    // in local storage, all conf keys will be prefixed "prefix"
    this.prefix = prefix || "";
    this.driver = driver || defaultDriver;
  };

  DB.prototype.save = function (k, v) {
    assert(typeof k === "string");
    assert(typeof v === "string");

    this.driver.setItem(this.prefix + k, v);
  };

  // @return value/null if not exist.
  DB.prototype.read = function (k) {
    assert(typeof k === "string");

    return this.driver.getItem(this.prefix + k);
  };

  DB.prototype.remove = function (k) {
    assert(typeof k === "string");

    return this.driver.removeItem(k);
  };

  // 
  DB.prototype.saveJSON = function (k, v) {
    assert(typeof k === "string");
    assert(typeof v !== undefined);

    this.save(k, JSON.stringify(v));
  };

  // @return value or undefined if not exist/errors.
  DB.prototype.readJSON = function (k) {
    var v = this.read(k);
    if (v === null)
      return undefined;
    return JSON.tryParse(v);
  };

  DB.prototype.getKeys = function () {
    return _.filter(this.driver.getKeys(), function (k) {
      return k.substr(0, this.prefix.length) == this.prefix;
    }, this);
  };

  // setting conf
  Y.DB = DB;
})(Y);

(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  // permanent storage
  var filename = "yws.json";

  var DB = new Y.DB("Y.Conf.");

  var Conf = {
    initEnv: function () {
      Y.Env.CURRENT = Y.Env.PROD; // default behaviour
      /*#ifdef DEV*/
      Y.Env.CURRENT = Y.Env.DEV;  // overloaded in dev
      /*#endif*/
      return this; // chainable
    },

    // Processus de chargement 
    //  - si clefs de conf pas encore en cache => chargement
    //  - appel au bootstrap.
    load: function (env, callback) {
      assert(env === Y.Env.DEV ||
             env === Y.Env.PROD);

      // this function will be executed when keys (temporary & permanent) are loaded.
      var onKeysLoaded = _.bind(function (err) {
        // error handling.
        if (err)
          return callback(err);
        // une fois les clefs chargées, on appelle le bootstrap.
        this.loadBootstrap(function (err) {
          if (err)
            return callback(err); // might be a "network error" or "deprecated"
          callback();
        });
      }, this);

      // conf not loaded => we load temporary keys & permanent keys
      if (this.get("_env") !== env ||
          this.get('version') !== Y.App.VERSION)
      {
        // loading default keys (temporary)
        // Parametrage des variables dependantes d'un environnement
        Y.Env.user = "vincent";
        
        switch (env) {
          case Y.Env.DEV:
            /*#ifdef DEV*/
            switch (Y.Env.user) {
              case "marc":
                var apiBaseUrl = "http://plic.no-ip.org:22222";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "618522421507840";
                break;
              case "vincent":
                var apiBaseUrl = "http://plic.no-ip.org:1024";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "408897482525651";
                break;
              case "alpha":
              default:
                var apiBaseUrl = "http://plic.no-ip.org:20080";
                var fbBaseUrl = "https://fb.yeswescore.com";
                var fbAppId = "FIXME";
                break;
            }

            this.set("api.url.auth", apiBaseUrl + "/v2/auth/");
            this.set("api.url.auth.registered", apiBaseUrl + "/v2/auth/registered/");            
            this.set("api.url.bootstrap", apiBaseUrl + "/bootstrap/conf.json?version=%VERSION%");
            this.set("api.url.facebook.login", apiBaseUrl + "/v2/facebook/login/");
            this.set("api.url.games", apiBaseUrl + "/v2/games/");
            this.set("api.url.players", apiBaseUrl + "/v2/players/");
            this.set("api.url.clubs", apiBaseUrl + "/v2/clubs/");
            this.set("api.url.stats", apiBaseUrl + "/v2/stats/");
            this.set("api.url.reports", apiBaseUrl + "/v2/report/");
            this.set("api.url.reports.games", apiBaseUrl + "/v2/report/games/");
            this.set("api.url.reports.players", apiBaseUrl + "/v2/report/players/");
            this.set("api.url.reports.clubs", apiBaseUrl + "/v2/report/clubs/");
            this.set("api.url.autocomplete.players", apiBaseUrl + "/v2/players/autocomplete/");
            this.set("api.url.autocomplete.clubs", apiBaseUrl + "/v2/clubs/autocomplete/");          
            this.set("fb.url.inappbrowser.redirect", fbBaseUrl + "/v2/inappbrowser/redirect.html");
            this.set("facebook.app.id", fbAppId);
            this.set("facebook.url.oauth", "https://www.facebook.com/dialog/oauth?client_id=[fb_app_id]&scope=email,publish_stream,offline_access&redirect_uri=[redirect_uri]&response_type=token");
            /*#endif*/
            break;
          case Y.Env.PROD:
            this.set("api.url.auth", "http://api.yeswescore.com/v2/auth/");
            this.set("api.url.auth.registered", "http://api.yeswescore.com/v2/auth/registered/");            
            this.set("api.url.bootstrap", "http://api.yeswescore.com/bootstrap/conf.json?version=%VERSION%");
            this.set("api.url.facebook.login", "http://api.yeswescore.com/v2/facebook/login/");
            this.set("api.url.games", "http://api.yeswescore.com/v2/games/");
            this.set("api.url.players", "http://api.yeswescore.com/v2/players/");
            this.set("api.url.clubs", "http://api.yeswescore.com/v2/clubs/");
            this.set("api.url.stats", "http://api.yeswescore.com/v2/stats/");
            this.set("api.url.reports", "http://api.yeswescore.com/v2/report/");
            this.set("api.url.reports.games", "http://api.yeswescore.com/v2/report/games/");
            this.set("api.url.reports.players", "http://api.yeswescore.com/v2/report/players/");
            this.set("api.url.reports.clubs", "http://api.yeswescore.com/v2/report/clubs/");
            this.set("api.url.autocomplete.players", "http://api.yeswescore.com/v2/players/autocomplete/");
            this.set("api.url.autocomplete.clubs", "http://api.yeswescore.com/v2/clubs/autocomplete/");
            this.set("fb.url.inappbrowser.redirect", "https://fb.yeswescore.com/v2/inappbrowser/redirect.html");
            this.set("facebook.app.id", "447718828610668");
            this.set("facebook.url.oauth", "https://www.facebook.com/dialog/oauth?client_id=[fb_app_id]&scope=email,publish_stream,offline_access&redirect_uri=[redirect_uri]&response_type=token");
            break;
          default:
            break;
        }

        // Parametrage des variables non dependantes d'un environnement
        this.set("game.refresh", 10000);        // default 30000 (30sec) //test 10s
        this.set("games.refresh", 20000);        // default 30000 (30sec) //test 30s        
        this.set("game.max.comments", 20); 
        this.set("pooling.geolocation", 10000); // default 10000 (10sec)
        this.set("pooling.connection", 1000);   // default 1000  ( 1sec)
        this.set("version", Y.App.VERSION); // will be usefull on update.
        this.set("_env", env);

        // loading permanent keys
        //  stored inside yws.json using format [{key:...,value:...,metadata:...},...]
        /*
        Cordova.ready(function () {
          Cordova.File.read(filename, function (err, data) {
            if (err)
              return onKeysLoaded(err); // FIXME
            var k = [];
            try { k = JSON.parse(data); } catch (e) { }
            _.forEach(k, function (o) {
              var obj = { key: o.key, value: o.value, metadata: o.metadata };
              DB.saveJSON(key, obj);
            });
            onKeysLoaded();
          });
        });
        */
        
      } else {
        // keys are already loaded (by previous session)
        // FIXME: normaly, we don't need cordova to be ready to say the configuration
        //        is ready, but there might be errors if we don't do this, no ?
        /*
        Cordova.ready(function () {
          onKeysLoaded();
        });
        */
      }
      
      onKeysLoaded();
      
    },


    // FIXME: might be in an "app" class ?
    loadBootstrap: function (callback) {
      // on ecrase avec les changements et on change les versions
      // variable qui oblige à mettre à jour -> objet connnection toujours offline
      Backbone.ajax({
        type: 'GET',
        url: this.get('api.url.bootstrap').replace("%VERSION%", Y.App.VERSION),
        success: function (infos) { 
          var deprecated = false;
          infos.forEach(function (info) {      
            if (info.key.indexOf("app.deprecated") !== -1) {
            	//console.log('on detecte app deprecated');
            	if (info.value === true) {
            		//console.log('Il faut mettre à jour l\'apps');
                deprecated = true;
            	}
            } else {
            	Y.Conf.set(info.key, info.value);  
            }   	
          });
          if (deprecated)
            return callback("deprecated"); // deprecated app is considered as an error.
          return callback(); // everything was ok.
        },
        error: function (err) {
          //console.log('err Connection', err);
          //Y.Connection.setOffline(); // usefull ?
          return callback("network error");
        },
        dataType: "JSON"
      });
    },

    // Read API
    // @param string/regExp key
    // @return [values]/value/undefined
    get: function (key) {
      assert(typeof key === "string" || key instanceof RegExp);

      if (typeof key === "string") {
        var value = DB.readJSON(key);
        if (value)
          return value.value;
        return undefined;
      }
      // recursive call.
      return _.map(this.keys(key), function (key) {
        return this.get(key);
      }, this);
    },


    // Del API
    // @param string/regExp key
    // @return [values]/value/undefined
    del: function (key) {
      assert(typeof key === "string" || key instanceof RegExp);

      if (typeof key === "string") {
        return DB.remove(key);
      }

    },

    // @param string key
    // @return object/undefined
    getMetadata: function (key) {
      assert(typeof key === "string");

      var value = DB.readJSON(key);
      if (value)
        return value.metadata;
      return undefined;
    },

    // @param string key
    // @return object/undefined
    getRaw: function (key) {
      assert(typeof key === "string");

      return DB.readJSON(key);
    },

    // Write API (inspired by http://redis.io)
    set: function (key, value, metadata, callback) {
      assert(typeof key === "string");
      assert(typeof value !== "undefined");

      var obj = { key: key, value: value, metadata: metadata };
      DB.saveJSON(key, obj);

      // events
      this.trigger("set", obj);

      // permanent keys (cost a lot).
      if (metadata && metadata.permanent) {
        var permanentKeys = _.filter(DB.getKeys(), function (k) {
          var metadata = this.getMetadata(k);
          return metadata && metadata.permanent;
        }, this);
        var permanentObjs = _.map(permanentKeys, function (k) {
          return this.getRaw(k);
        }, this);
        // saving when cordova is ready.
        //Cordova.ready(function () {
        //  Cordova.File.write(filename, JSON.stringify(permanentObjs), callback || function () { });
        //});
      }
    },

    // set if not exist.
    setNX: function (key, value, metadata) {
      assert(typeof key === "string");

      if (!this.exist(key))
        this.set(key, value, metadata);
    },

    // search configuration keys.
    keys: function (r) {
      assert(r instanceof RegExp);

      return _.filter(DB.getKeys(), function (key) {
        return key.match(r);
      });
    },

    exist: function (key) {
      assert(typeof key === "string");

      return DB.read(key) !== null;
    },

    unload: function () {
      _.forEach(DB.getKeys(), function (key) {
        DB.remove(key);
      });
    },

    reload: function () {
      this.unload();
      this.load();
    }
  };

  // using mixin
  _.extend(Conf, Backbone.Events);

  // setting conf
  Y.Conf = Conf;
})(Y);


(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /*
   * api:
   *  var autocomplete = new Y.Autocomplete(options);
   *  autocomplete.trigger("input", data); // ex: trigger on keyup
   *  autocomplete.on("input.temporized", function (input) {
   *     // doing stuff here to get data for the input
   *     autocomplete.trigger("fetched.result", [{"text": "playerA"}, {"text": "playerB"}]);
   *     // or if they were an error
   *     autocomplete.trigger("fetched.error", error);
   *  };
   *  autocomplete.on("selected", function (entry) { 
   *    // the user has selected <entry>
   *  });
   *  autocomplete.dispose();
   *
   */
  var Autocomplete = function (options) {
    // parsing options
    var defaults = { temporization: 400 };
    this.options = _.extend({}, defaults, options || {});
    // private
    this._timeout = null;
    this._fetching = false;
    this._nextInput = null;
    // public
    this.proposals = [/* { text: "..." } */];
    // mapping events to methods.
    this.on("input", this.temporizeInputs, this);
    this.on("fetched.result", this.onFetchedResult, this);
    this.on("fetched.error", this.onFetchedError, this);
  };

  _.extend(Autocomplete.prototype, Backbone.Events, {
    // several input can be received in a short time (user pressing keys)
    // we only want to trigger the autocomplete fetch on the last one.
    temporizeInputs : function (input) {
      assert(typeof input === "string");

      // we prevent doing hits for any input received, this is temporization
      if (this._timeout) {
        // by clearing this._timeout, we are dropping some previous fetch.
        window.clearTimeout(this._timeout);
        this._timeout = null;
      }
      this._timeout = window.setTimeout(_.bind(function () {
        this.triggerInput(input);
      }, this), this.options.temporization);
    },

    // we might emit input faster than fetch can handle them.
    // we do not want to flood the server
    //  so we buffer inputs, & only emit them when fetch is received.
    triggerInput: function (input) {
      if (this._fetching) {
        this._nextInput = input; // saving input
        return;
      }
      this._fetching = true;
      this.trigger("input.temporized", input);
    },

    onFetchedResult: function (data) {
      assert(_.isArray(data));

      this._fetching = false;
      //
      this.proposals = data;
      this.repaint();
      //
      if (this._nextInput) {
        var input = this._nextInput;
        this._nextInput = null;
        this.triggerInput(input);
      }
    },

    onFetchedError: function () {
      this._fetching = false;
      //
      this.proposals = [];
      this.repaint();
      //
      if (this._nextInput) {
        var input = this._nextInput;
        this._nextInput = null;
        this.triggerInput(input);
      }
    },

    repaint : function () {
      Y.GUI.autocomplete.setProposals(this, this.proposals);
    },

    fetch : function (data) { return [ { text: data } ]; }, // default is echo request.

    dispose : function () {
      // events
      this.off();
      // repainting GUI with no proposals
      Y.GUI.autocomplete.setProposals(this, []);
      Y.GUI.autocomplete.autocomplete = null; // removing ref (Hacky Hacky)
      // temporization
      if (this._timeout) {
        window.clearTimeout(this._timeout);
        this._timeout = null;
      }
    }
  });

  // adding some mixin for events.
  _.extend(Autocomplete.prototype, Backbone.Events);

  Y.Autocomplete = Autocomplete;
})(Y);
(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var GUI = {
    header: null,       // singleton view #header
    content: null,      // singleton current view (center)
    autocomplete: null, // singleton view #autocomplete
    navbar: null,       // singleton view #navbar
    inputMode: function (status) {
      if (window.isMobileBrowser()) { // only on mobile browser
        var $body = $("body");
        if (status) {
          $body.addClass("inputmodeon");
          $body.removeClass("inputmodeoff");
        } else {
          $body.removeClass("inputmodeon");
          $body.addClass("inputmodeoff");
        }
      }
      return true;
    },

    // display an overlay asking the user to upgrade
    // FIXME: HTML should be in the .html / or in index.html
    displayLayerNewVersion: function () {
      // we are in a dead end, unloading Y
      Y.unload();
      $('body').html(i18n.t('bootstrap.updateRequired'));
      $('body').removeClass();
      $('body').addClass('update'); // we don't need the overlay.
    },

    diplayLayerNetworkError: function () {
      // we are in a dead end, unloading Y
      Y.unload();
      $('body').html(i18n.t('bootstrap.errortext') + '<div class="button retry" onclick="window.location.reload();">' + i18n.t('bootstrap.errorbutton') + '</div>');
      $('body').removeClass();
      $('body').addClass('update');
    }
  };



  Y.GUI = GUI;
})(Y);
(function (Y) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var Router = Backbone.Router.extend({
    history: [ /* { pageName: ..., pageHash: ... } */ ],

    currentView: null,

    routes: {
      '': 'index',
      'index': 'index',
      'sort/:id': 'gameList',
      'search/form': 'searchForm',      
      'games/me/:id': 'gameMe',
      'games/add': 'gameAdd',
      'games/form/:id': 'gameForm',      
      'games/follow': 'gameFollow',
      'games/end/:id': 'gameEnd',
      'games/club/:id': 'gameClub',
      'games/list': 'gameList',  
      'games/:id/comments/': 'gameComment', 
      'games/:id': 'game', 
      'games/': 'gameList',        
      'players/list': 'playerList',
      'players/club/:id': 'playerListByClub',
      'players/form/me': 'playerFormFirst',        
      'players/form': 'playerForm',     
      'players/signin': 'playerSignin',
      'players/forget': 'playerForget',
      'players/follow': 'playerFollow',                                              
      'players/:id': 'player',
      'clubs/add': 'clubAdd',
      'clubs/follow': 'clubFollow', 
      'clubs/list/:id': 'clubList',      
      'clubs/list': 'clubList',           
      'clubs/:id/:game': 'clubGame',
      'clubs/:id': 'club',
      'account': 'account'
    },

    initialize: function (options) {

    },

    /*
    * @param Y.Views.*  view 
    * @param object     params 
    * @return function returning a view object.
    */
    createViewFactory: function (view, params) {
      assert(typeof view !== "undefined");
      return function () {
        return new view(params);
      };
    },

    account: function () {
      this.changePage(this.createViewFactory(Y.Views.Account));
    },

    club: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Club, { id: id }));
    },

    clubGame: function (id,game) {
      console.log('id',id);
      console.log('game',game);
      
      this.changePage(this.createViewFactory(Y.Views.Club, { id: id, game: game }));
    },

    clubAdd: function (id) {
      this.changePage(this.createViewFactory(Y.Views.ClubAdd));
    },
    
    clubList: function (id) {
      this.changePage(this.createViewFactory(Y.Views.ClubList, { id: id }));
    },
    

    clubFollow: function () {
      this.changePage(this.createViewFactory(Y.Views.ClubFollow));
    },

    index: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Index, { sort: id }));
    },

    game: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Game, { id: id }));
    },

    gameList: function (sort) {
      if (typeof sort === "undefined") sort='';
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: '', id: '', sort: sort }));
    },
    
    gameMe: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: 'me', id: id, sort: '' }));
    },

    gameClub: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameList, { search: 'club', id: id, sort: '' }));
    },    

    gameAdd: function () {
      this.changePage(this.createViewFactory(Y.Views.GameAdd));
    },

    gameEnd: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameEnd, { id: id }));
    },

    gameComment: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameComments, { id: id }));
    },

    gameFollow: function () {
      this.changePage(this.createViewFactory(Y.Views.GameFollow));
    },
    
    gameForm: function (id) {
      this.changePage(this.createViewFactory(Y.Views.GameForm, { id: id }));
    },    

    searchForm: function () {
      this.changePage(this.createViewFactory(Y.Views.SearchForm ));
    }, 

    player: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Player, { id: id, follow: '' }));
    },

    playerFollow: function (id) {
      this.changePage(this.createViewFactory(Y.Views.PlayerFollow));
    },

    playerNoFollow: function (id) {
      this.changePage(this.createViewFactory(Y.Views.Player, { id: id, follow: 'false' }));
    },

    playerFormFirst: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForm, { mode: 'first'}));
    },
    
    playerForm: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForm, { mode: ''}));
    },

    playerList: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerList));
    },

    playerListByClub: function (id) {
      this.changePage(this.createViewFactory(Y.Views.PlayerList, { id: id }));
    },

    playerSignin: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerSignin));
    },

    playerForget: function () {
      this.changePage(this.createViewFactory(Y.Views.PlayerForget));
    },

    /*
    * you can change page passing a function:
    *    this.changePage(function () { return new Y.Views.Account() });
    *
    * @param function  viewFactory    function returning a view
    */
    changePage: function (viewFactory) {
      assert(typeof viewFactory === "function");

      var previousPageName = "none"
        , previousPageHash = "none"
        , nextPageName = "unknown"
        , nextPageHash = "unknown"
        , view = null
        , that = this;

      // previous page name, page hash
      if (this.currentView && this.currentView.pageName)
        previousPageName = this.currentView.pageName;
      if (this.currentView && this.currentView.pageHash)
        previousPageHash = this.currentView.pageHash;

      // event
      try {
        this.trigger('beforePageChanged', previousPageName, previousPageHash);
      } catch (e) {
        assert(false);
      };

      // closing current view (still in the DOM)
      try {
        if (this.currentView) {
          this.currentView.close();
          // this.currentView.remove(); // FIXME. gc: should we call remove ?
        }
      } catch (e) {
        assert(false);
      };

      //
      // Reflow bug under ie10 (WP8) maybe iOS & android.
      // when document.documentElement is scrolled down & 
      //  loading a new small view inside #content
      //  the new view is rendered above the screen
      //  because document.height hasn't been reflowed yet 
      // 
      // using document.documentElement.scrollTop = 0; is not enough
      //   we must force a reflow & setTimeout to let the GUI thread some time to render.
      //
      // /!\ Be warned, this bugfix is empirical.
      //
      var next = function () {
        // creating view

        /*#ifdef DEV*/
        if (true) {
          // in dev, directly call viewFactory, to be able to debug exceptions.
          view = viewFactory();
        } else {
        /*#endif*/
          try {
            // avoiding exception in view.
            view = viewFactory();
          } catch (e) {
            assert(false);
          };
        /*#ifdef DEV*/
        }
        /*#endif*/

        // next page name, page hash
        if (view && view.pageName)
          nextPageName = view.pageName;
        if (view && view.pageHash)
          nextPageHash = view.pageHash;

        // acting the change in Router.currentView & Y.GUI.content
        that.currentView = view;
        Y.GUI.content = view;

        // event
        try {
          that.trigger('pageChanged', nextPageName, nextPageHash);
        } catch (e) {
          assert(false);
        };

        // stats.
        //Y.Stats.page(previousPageName, nextPageName);
      };

      // scrolltop, juste after reflow
      // with a good browser engine (aka ie10) rendering is perfect.
      // FIXME: dependancy router => DOM .. yeak :(
      var WP8=true;
      /*#ifndef WP8*/
      WP8=true;
      /*#endif*/
      if (WP8) {
        if (document.documentElement)
          document.documentElement.scrollTop = 0;
        else
          document.body.scrollTop = 0;
        document.getElementById("content").getBoundingClientRect(); // force reflow
        setTimeout(next, 10);
      } else {
        next();
      }
    }
  });
  Y.Router = new Router();
})(Y);
(function (Y) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  Y.Templates = {
    // Hash of preloaded templates for the app
    templates : {
      HTML: { /* name: "HTML" */ },
      compiled: { /* name: compiled */ }
    },

    // Load all the templates Async
    loadAsync: function (callback) {
      // searching scripts nodes
      var nodes = document.querySelectorAll("script[type=text\\/template]");
      // foreach script node, get the html.
      var html = this.templates.HTML;
      _(nodes).forEach(function (node) {
        // save the template
        var templateId = node.getAttribute('id');
        html[templateId] = node.innerHTML;
        // optim: remove the script from the dom.
        node.parentNode.removeChild(node);
      });
      /*#ifdef NOCONCAT*/
      if (true) {
        
        // dev environment, loading template using $.get()
        // pas trouvé mieux pour l'instant...
        var templates = [
          "account", 
          "clubAdd", "clubListAutoComplete", "club", "clubList","clubListSearch", 
          "gameAdd", "gameComments","gameEnd", "gameListSearch", "gameList","gameSelect","gameInput",
          "gameCommentsScore", "gameCommentsComment","gameScoreBoard", "game", "gameForm", "gameShortList",
          "index", "empty", "error","ongoing",
          "searchForm",
          "player", "playerForget", "playerForm", "playerListAutoComplete", "playerList",
          "playerListSearch", "playerSignin",
        ];
        var timeoutid = setTimeout(function () {
           var harvestedTemplates = _.keys(html);
           var missingTemplates = _.filter(templates, function (t) {
             return harvestedTemplates.indexOf(t) === -1;
           });
           throw "cannot load some template.. "+missingTemplates.join(",");
        }, 2000);
        var i = 0;
        templates.forEach(function (template) {
          $.get("templates/"+template+".html", function (text) {
            html[template] = text;
            i++;
            if (i == templates.length)
            {
              clearTimeout(timeoutid);
              callback();
            }
          });
        });
      } else {
      /*#endif*/

        // production environment
        // we have finished.
        callback();

      /*#ifdef NOCONCAT*/
      }
      /*#endif*/
    },

    // Get template by name from hash of preloaded templates
    get: function (templateId) {
      var html = this.templates.HTML
        , compiled = this.templates.compiled;
      if (typeof html[templateId] === "undefined")
        throw "unknown template "+templateId+" ; have you included the template in y/templates.js#loadAsync() ?";
      if (typeof compiled[templateId] === "undefined")
        compiled[templateId] = _.template(html[templateId]);
      return compiled[templateId];
    }
  };
})(Y);

(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var DB = new Y.DB("Y.Cache.");

  var player = null;
  var playerIdConfKey = 'player.id';
  var playerTokenConfKey = 'player.token';
  var playerClubIdConfKey = 'player.club.id';
  var playerFiltersSortConfKey = 'player.filters.sort';
  var playerFiltersSearchConfKey = 'player.filters.search';  
  
  var User = {
    // @return PlayerModel/null   Player
    getPlayer: function () {
      if (player)
        return player;
      var unserializedPlayer = DB.readJSON("Player");
      if (unserializedPlayer) {
        // fixme: another way of doing serialize/unserialize ?
        player = new PlayerModel();
        player.set(unserializedPlayer);
        return player;
      }
      // FIXME: should we really do this...
      // REDIRECT ON INDEX (to create a new player...)
      return null;
    },

    //
    // Workflow:
    //  - 1: search player in memory
    //  - 2: if not found => search player in localStorage
    //  - 3: if not found => search player id in Conf & read player.
    //
    // @param function callback    callback(err, player)
    // @return void.
    getPlayerAsync: function (callback) {
      if (player) {
        callback(null, player);
        return;
      }
      // reading from localStorage (synchrone api)
      var unserializedPlayer = DB.readJSON("Player");
      if (unserializedPlayer) {
        // fixme: another way of doing serialize/unserialize ?
        player = new PlayerModel();
        player.set(unserializedPlayer);
        callback(null, player);
        return;
      }
      // have we got a player id in conf ?
      var playerId = Y.Conf.get(playerIdConfKey);
      var playerToken = Y.Conf.get(playerTokenConfKey);
      if (!playerId || !playerToken) {
        callback(new Error("no player"));
        return;
      }
      // reading player
      player = new PlayerModel({
        playerid: playerId
      , token: playerToken
      });
      player.fetch({
        success: function () {
          // saving it in DB
          DB.saveJSON("Player", player);
          //
          callback(null, player);
        }
      });
    },
    
	setFiltersSearch: function (filter) {	
      Y.Conf.set(playerFiltersSearchConfKey, filter, { permanent: true });		
	},
	
	getFiltersSearch: function () {	
      return Y.Conf.get(playerFiltersSearchConfKey);		
	},	    
    
	setFiltersSort: function (filter) {	
      Y.Conf.set(playerFiltersSortConfKey, filter, { permanent: true });		
	},
	
	getFiltersSort: function () {	
      return Y.Conf.get(playerFiltersSortConfKey);		
	},	
	
	setClub: function (clubid) {	
      Y.Conf.set(playerClubIdConfKey, clubid, { permanent: true });		
	},

	removeClub: function () {	
	  // Y.Conf.del('player.club.id');
      Y.Conf.del('Y.Conf.'+playerClubIdConfKey);		
	},
	
	getClub: function () {	
      return Y.Conf.get(playerClubIdConfKey);		
	},	

    setPlayer: function (newplayer) {
      assert(newplayer instanceof PlayerModel);
      assert(newplayer.get('id') !== undefined);
      assert(newplayer.get('token') !== undefined);

      // saving in memory
      player = newplayer;
      // saving in local storage for future session
      DB.saveJSON("Player", player);
      // saving playerid in file (permanent)
      Y.Conf.set(playerIdConfKey, player.get('id'), { permanent: true });
      Y.Conf.set(playerTokenConfKey, player.get('token'), { permanent: true });
      
      //On init son club
      if (player.get('club') !== undefined)
      	Y.User.setClub(player.get('club').id);
      
    },

    createPlayerAsync: function (callback) {
      var that = this;
      player = new PlayerModel({});
      player.save({}, {
        success: function () {
          // saving it.
          that.setPlayer(player);
          // answer
          callback(null, player);
        },
        error: function (e) { callback(e); }
      });
    },

    // will update player in cache
    updatePlayer: function (properties) {
      assert(properties && typeof properties === "object");
      assert(typeof properties.id === "string");

      // we will do some checks...
      if (!player || !properties ||
           player.get('id') !== properties.id)
        return;
      // blacklist
      delete(properties['id']);
      delete(properties['token']);
      // saving properties
      player.set(properties);
      // updating cache.
      DB.saveJSON("Player", player);
      // do not update permanent keys.
    }
  };

  Y.User = User;
})(Y);
(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  var events = {
    // input mode
    //'click input': 'inputModeOn', // we cannot use focus, bugs with device virtual keyboard :(
    'blur input': 'inputModeOffDelayed',
    //'click textarea': 'inputModeOn', // we cannot use focus, bugs with device virtual keyboard :(
    //'blur textarea': 'inputModeOffDelayed',

    // helpers
    'click *[data-js-call]': 'mycall',
    'click a[data-js-navigate]': 'navigate',
    // autocompletion
    'click *[data-autocomplete]': 'autocompleteStart',
    //'blur *[data-autocomplete]': 'autocompleteStopDelayed', // keep 0.5 sec on screen.
    'keyup *[data-autocomplete]': 'autocompleteCall'
  };

  var View = Backbone.View.extend({
  
    lastInput : null,
  
    initialize: function () {
      // before anything, linking the DOM to this view.
      this.el.view = this;
      // merging this.events with events.
      this.events = _.assign(events, this.events || {});
      // proxy func call.
      return this.myinitialize.apply(this, arguments);
    },

    mycall: function (e) {
      return this[$(e.currentTarget).attr("data-js-call")](e);
    },

    navigate: function (e) {
      var $a = $(e.currentTarget)
        , href = $a.attr("href")
        , disabled = $a.attr("disabled");
      
      // prevent other execution
      e.preventDefault();
      e.stopPropagation();
      //
      href = (href[0] == "#") ? href.substr(1) : href;
      if (disabled === undefined)
        Y.Router.navigate(href, {trigger: true});
      return false;
    },

    clearInputModeOffDelayed: function () {
      if (this.inputModeOffTimeout) {
        window.clearTimeout(this.inputModeOffTimeout);
        this.inputModeOffTimeout = null;
      }
    },

    inputModeOn: function (e) {

      
      this.lastInput = document.activeElement.id;
     
      this.clearInputModeOffDelayed();
      if ($(e.target).attr("data-autocomplete"))
        this.autocompleteStart(e);
      Y.GUI.inputMode(true);
      return true;
    },

    inputModeOffTimeout: null,

    inputModeOffDelayed: function (e) {

      this.clearInputModeOffDelayed();
      
      var that = this;
      this.inputModeOffTimeout = window.setTimeout(function () {

        var activeElement = document.activeElement;
        if (activeElement && activeElement.nodeName.toLowerCase() === "input") {
          //console.log('View.js: new activeElement is an input');
          return; // security...
        }
        //console.log('View.js: => input mode off ' + activeElement.nodeName + ' => on bascule en input mode off');

		/*console.log('lastInput ',that.lastInput);*/
		
		/*
		if (that.lastInput !== null)
		{
			var element = $('#'+that.lastInput);
			console.log('element où on force blur ',element)
			
			if (element.is('input')) element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
		    if (element.is('textarea')) element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
		    setTimeout(function() {
		        element.blur();  //actually close the keyboard
		        // Remove readonly attribute after keyboard is hidden.
		        if (element.is('input')) element.removeAttr('readonly');
		        if (element.is('textarea')) element.removeAttr('disabled');
		        console.log('View.js on cache le clavier');
		        
		    }, 100);
		};*/
		
		/*
		console.log('View.js action ');
		$(activeElement).filter(':input:focus').blur();
		*/
		   
        Y.GUI.inputMode(false);
      }, 100);
      // au cas ou ... on n'a pas d'autres moyens de toute façon..
      this.autocompleteStopDelayed(e);
      return true;
    },

    inputModeOff: function (e) {
      //console.log('View.js: input mode off');
      this.clearInputModeOffDelayed();
      Y.GUI.inputMode(false);
      return true;
    },

    close : function () {
      this.inputModeOff();
      this.autocompleteStop();
      this.off();
      if (typeof this.onClose === "function")
        this.onClose();
    },

    // scroll helpers
    scrollTop: function () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },

    scrollBottom: function () {
      document.documentElement.scrollTop = 1000000;
      document.body.scrollTop = 1000000;
    },

    scrollAt: function (val) {
      // FIXME
    },

    // autocomplete helpers
    autocompleteObj: null,
    autocompleteTimeout: null,

    autocompleteStart: function (e) {
      if (this.autocompleteTimeout) {
        window.clearTimeout(this.autocompleteTimeout);
        this.autocompleteTimeout = null;
      }
      if (this.autocompleteObj) {
        this.autocompleteObj.dispose();
        this.autocompleteObj = null;
      }
      //
      var fetchFunctionName = $(e.target).attr("data-autocomplete");
      assert(typeof this[fetchFunctionName] === "function");
      this.autocompleteObj = new Y.Autocomplete();
      this.autocompleteObj.on("input.temporized", function (input) {
        // fetching data for input
        this[fetchFunctionName](input, _.bind(function (err, data) {
          // FIXME: this function will not be disposed :(
          if (err)
            return this.autocompleteObj.trigger("fetched.error", err);
          this.autocompleteObj.trigger("fetched.result", data || []);
        }, this));
      }, this);
      var selectedFunctionName = $(e.target).attr("data-autocomplete-onselected");
      if (selectedFunctionName) {
        assert(typeof this[selectedFunctionName] === "function");
        this.autocompleteObj.on("selected", function (val) {
          //console.log('View.js: onselected (autocomplete)');
          this[selectedFunctionName](val);
        }, this);
      }
      return true;
    },

    autocompleteStopDelayed: function () {
      // keep on screen 0.5 sec.
      this.autocompleteTimeout = window.setTimeout(_.bind(function () {
        this.autocompleteStop(); 
        this.autocompleteTimeout = null;
      }, this), 500);
      return true;
    },

    autocompleteStop: function () {
      if (this.autocompleteObj) {
        this.autocompleteObj.dispose();
        this.autocompleteObj = null;
      }
      return true;
    },

    autocompleteCall: function (e) {
      if (this.autocompleteObj)
        this.autocompleteObj.trigger("input", $(e.target).val());
    }
  });

  Y.View = View;
})(Y);
var GameModel = Backbone.Model.extend({
  urlRoot : Y.Conf.get("api.url.games"),

  version: 0,

  initialize : function() {
    this.updated_at = new Date();
  },

  setSets : function(s) {
    this.sets = s;
  },

  defaults : {
    owner: "",
    sport : "tennis",
    status : "",
    dates : {
      end : "",
      start : ""
    },   
    location : {
      country : "",
      city : ""
    },
    teams : [ {
      points : "",
      players : [ {
        name : ""
      } ]
    }, {
      points : "",
      players : [ {
        name : ""
      } ]
    } ],
    infos : {
      type : "singles",
      subtype : "A",
      sets : "0/0",
      score : "0/0",
      court : "",
      surface : "",
      tour : "",
      startTeam : ""
    }
  },

  debug: false,

  validate: function (attr, options) {
    if (options &&
        typeof options.version !== "undefined" &&
        options.version !== this.version) {
        if (this.debug) console.log('outdated : ' + options.version + ' VS ' + this.version);
        return "outdated";
    }
    return null;
  },

  sync : function(method, model, options) {
    this.version++;
    var that = this;
    var team1_json = null;
    var team2_json = null;
    
    // if player exists / not exists
    if (this.get('team1_id')) {
      team1_json = {
        id : this.get('team1_id')
      };
    } else if (this.get('team1')) {
      team1_json = {
        name : this.get('team1'),
        rank : this.get('rank1')
      };
    }

    if (this.get('team2_id')) {
      team2_json = {
        id : this.get('team2_id')
      };
    } else if (this.get('team2')) {
      team2_json = {
        name : this.get('team2'),
        rank : this.get('rank2')
      };
    }
    
    var object = {
      infos : {}
    , location : {}
    , dates : {}
    };

    if (team1_json && team2_json) {
      object.teams = [ {
        id : null,
        players : [ team1_json ]
      }, {
        id : null,
        players : [ team2_json ]
      } ];
    }
	 
    object.infos.type = "singles";	
    
     if (typeof this.get('location').city !== "undefined") 
       object.location.city = this.get('location').city;
     if (typeof this.get('location').country !== "undefined")
       object.location.country = this.get('location').country;       
     if (typeof this.get('dates').start !== "undefined")
       if (this.get('dates').start !== "")      
         object.dates.start = this.get('dates').start;
     if (typeof this.get('dates').end !== "undefined")
       if (this.get('dates').end !== "")      
         object.dates.end = this.get('dates').end;
     if (typeof this.get('status') !== "undefined") 
       if (this.get('status') !== "")
         object.status = this.get('status');
       
     _.forEach(
      ['subtype', 'sets', 'score', 'court', 'surface',
       'tour', 'country', 'startTeam'] , function (k) {
	     if (typeof this.get('infos')[k] !== "undefined")
	       object.infos[k] = this.get('infos')[k];
	   }, this);
     
    //if (Y.Geolocation.longitude!==null && Y.Geolocation.latitude!==null)      
    //  object.location.pos = [Y.Geolocation.longitude, Y.Geolocation.latitude];

    if (method === 'create' && options.playerid !== undefined) {
      return Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.games") + '?playerid=' + options.playerid + '&token=' + options.token,
        type : 'POST',
        data : object,
        success : function(data) {
          // FIXME : on redirige sur //si offline id , si online sid  
          that.set(data);         
          if (options && options.success)
            options.success(data);
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
        }
      });
    } else if (method === 'update' && options.playerid !== undefined) {
      // versioning
      options.version = this.version;
      // tricky
      if (options.buffered) {
        if (this.debug) console.log('GAME: updating game (DEFERRED) '+ JSON.stringify(object.infos)); 
        return this._bufferedUpdate(object, options);
      }
      if (this.debug) console.log('on met à jour game avec '+ JSON.stringify(object)); 
      return Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.games") + this.get('id') + '/?playerid=' + options.playerid + '&token=' + options.token,
        type : 'POST',
        data : object,
        success: function (data) {
          if (options && options.success)
            options.success(data);
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
        }
      });
    } else {
      model.url = Y.Conf.get("api.url.games")+this.id;
      return Backbone.sync(method, model, options);
    }
  },

  /*
   * UPDATE BUFFURING
   *  model.save(null, { }).done( ... waiting function ... )
   *  model.save(null, { }).done( ... waiting function ... )
   *
   * Workflow:
   *  model.save() will NOT call Backbone.ajax
   *  model.save() will save the last object/options in a stack and trigger the xhr after 1 second.
   *  model.save() is called before 1sec => delay the xhr of 1 second.
   *
   */
  _bufferedDeferredPublic: null,  // launch every function waiting for the update when resolved.
  _bufferedDeferredPrivate: null, // launch the XHR when resolved.
  _bufferedLastObject: null,
  _bufferedLastOptions: null,
  _bufferedTimeoutId: null,
  _bufferedUpdate: function (object, options) {
    var that = this
      , delay = 1000; // 1s

    if (this._bufferedDeferredPublic !== null) {
      if (this.debug) console.log('update => stagged');
      // des appels sont déjà en attentes
      //  - saving last object & options
      //  - reseting timeouts
      //  - return public deferred
      this._bufferedLastObject = object;
      this._bufferedLastOptions = options;
      // reseting timeouts
      window.clearTimeout(this._bufferedTimeoutId);
      this._bufferedTimeoutId = window.setTimeout(function () {
        that._bufferedDeferredPrivate.resolve(); // trigger the xhr
      }, delay);
      // return public deferred
      return this._bufferedDeferredPublic;
    }
    // saving last object & options
    this._bufferedLastObject = object;
    this._bufferedLastOptions = options;
    // creating deferred
    this._bufferedDeferredPublic = $.Deferred();
    this._bufferedDeferredPrivate = $.Deferred();
    // resolving private defered in 1sec
    this._bufferedTimeoutId = window.setTimeout(function () {
      that._bufferedDeferredPrivate.resolve(); // trigger the xhr
    }, delay);
    this._bufferedDeferredPrivate.done(function () {
      // when private deferred is resolved,
      //  - save object & options
      //  - save public deferred
      //  - clear private deferred
      //  - clear timeouts
      //  - clear public deferred
      //  - launch the XHR
      var object = that._bufferedLastObject;
      var options = that._bufferedLastOptions;
      if (that.debug) console.log('GAME: XHR: ' + JSON.stringify(object.infos) + ' version ' + options.version);
      var publicDeferred = that._bufferedDeferredPublic;
      //
      that._bufferedDeferredPrivate = null;
      that._bufferedTimeoutId = null;
      that._bufferedDeferredPublic = null;
      //
      Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.games") + that.get('id') + '/?playerid=' + options.playerid + '&token=' + options.token,
        type : 'POST',
        data : object,
        success: function (data) {
          // WARNING WARNING
          // tricky: on aura des effets de bord un jour ...
          //  on rend l'update des données du modèle conditionnelle à la version
          if (that.debug) console.log('GAME: XHR SUCCESS : ' + JSON.stringify(object.infos) + ' version : ' + options.version + ' VS ' + that.version);
          if (options.version === that.version) {
            if (that.debug) console.log('GAME: VERSION OK => UPDATE MODEL WITH ' + JSON.stringify(object.infos));
            that.set(data);
          }
          //
          if (options && options.success)
            options.success(data);
          // FIXME: apply & all arguments
          publicDeferred.resolve(data);
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
          // FIXME: apply & all arguments
          publicDeferred.resolve(message);
        }
      });
    });
    return this._bufferedDeferredPublic;
  },

  getPlayersNamesByTeam: function (teamIndex) {
    var team = _.isArray(this.get("teams")) ? this.get("teams")[teamIndex] : null;
    if (!team)
      return "";
    return _.reduce(team.players, function (result, player) {
      return result ? result + ", " + player.name : player.name;
    }, "");
  },

  // @return 0,1, -1 if draw / null if error or non defined
  getIndexWinningTeam: function () {
    var score = this.get("infos").score; 
    if (typeof score !== "string")
      return null;
    var scoreDetails = score.split("/");
    if (scoreDetails.length !== 2)
      return null;
    var scoreTeamA = parseInt(scoreDetails[0], 10);
    var scoreTeamB = parseInt(scoreDetails[1], 10)
    if (scoreTeamA == NaN || scoreTeamB == NaN)
      return null;
    if (scoreTeamA == scoreTeamB)
      return -1; // draw
    if (scoreTeamA < scoreTeamB)
      return 1; // team B is winning
    return 0; // team A is winning
  },

  isMine: function () {
    return this.get('owner') === Y.User.getPlayer().get('id');
  },

  whoServe: function () {
    var sets = this.get('infos').sets || "0/0";
    var startTeam = this.get('infos').startTeam;
    var total; 
    
    if (sets.indexOf(';') !== -1) {
      total = _.reduce(sets.split(';'), function (p, tab) {
        return _.reduce(tab.split('/'), function (p, val) {
          return p + parseInt(val, 10);
        }, p);
      }, 0);
    } else {
      total = _.reduce(sets.split('/'), function (p, val) {
        return p + parseInt(val, 10);
      }, 0);
    }

    if (total % 2 === 0)
      return startTeam;
    return ""; // FIXME, should be the other team.
  },

  getSet: function (index) {

  },

  // transform internal format : 6/2;2/2 into [ [ 6, 2 ], [ 2, 2 ] ]
  getSets: function (padding) {
    var sets = this.get("infos").sets || "0/0";
    sets = sets.split(';').map(function (set) {
      return set.split('/').map(function (num) {
        return parseInt(num, 10);
      });
    });
    if (typeof padding !== "undefined") {
      for (var i = 0; i < 3; ++i) {
        if (typeof sets[i] === "undefined")
          sets[i] = [padding, padding];
      }
    }
    return sets;
  },


  setScore: function (score) {
    this.get("infos").score = score; //FIXME: might not be the right "backbone way of doing things"
  },

  setSets: function (sets) {
    sets = sets.map(function (set) { return set.join('/') }).join(';');
    this.get("infos").sets = sets; //FIXME: might not be the right "backbone way of doing things"
  },

  getScore: function () {
    var score = this.get("infos").score || "0/0";
    return score.split('/').map(function (num) {
      return parseInt(num, 10);
    });
  },

  // compute score based on sets.
  // @return "scoreTeam1/scoreTeam2"
  computeScore : function() { 
    var scoreTeam1 = 0;
    var scoreTeam2 = 0;
    var sets = this.getSets(0);
    
    // set1 : only if game is finished or set2 exists & not empty
    if (this.isFinished() || (sets.length > 1 && sets[1][0] + sets[1][1] !== 0)) {
      // team 2 < team 1 && team 1 >= 6
      if (sets[0][1] < sets[0][0] && sets[0][0] >= 6)
        scoreTeam1++;
      // team 1 < team 2 && team 2 >= 6
      if (sets[0][0] < sets[0][1] && sets[0][1] >= 6)
        scoreTeam2++;
    }

    // set2 : only if game is finished or set3 exists & not empty
    if (this.isFinished() || (sets.length > 2 && sets[2][0] + sets[2][1] !== 0)) {
      // team 2 < team 1 && team 1 >= 6
      if (sets[1][1] < sets[1][0] && sets[1][0] >= 6)
        scoreTeam1++;
      // team 1 < team 2 && team 2 >= 6
      if (sets[1][0] < sets[1][1] && sets[1][1] >= 6)
        scoreTeam2++;
    }

    // set3 : only if game is finished.
    if (this.isFinished) { 
      // team 2 < team 1 && team 1 >= 6
      if (sets[2][1] < sets[2][0] && sets[2][0] >= 6)
        scoreTeam1++;
      // team 1 < team 2 && team 2 >= 6
      if (sets[2][0] < sets[2][1] && sets[2][1] >= 6)
        scoreTeam2++;
    }

    return scoreTeam1+"/"+scoreTeam2;
  },

  getElapsedTime: function () {
    var dateEnd, dateStart, elapsed;

    if (this.isFinished()) {
      dateEnd = Date.fromString(this.get('dates').end);      
      dateStart = Date.fromString(this.get('dates').start);
      elapsed = dateEnd - dateStart;
      if (elapsed > 0) {
        elapsed = new Date(0, 0, 0, 0, 0, 0, elapsed);
        return ('0'+elapsed.getHours()).slice(-2)+':'+('0'+elapsed.getMinutes()).slice(-2);  
      }
    }
    if (this.isOngoing()) {
      //comment connaitre la date actuelle par rapport au serveur ?
      dateEnd = new Date();
      dateStart = Date.fromString(this.get('dates').start);
      elapsed = dateEnd - dateStart;
      if (elapsed>0)
      {
	      elapsed = new Date(0, 0, 0, 0, 0, 0, elapsed);         
	      return ('0'+elapsed.getHours()).slice(-2)+':'+('0'+elapsed.getMinutes()).slice(-2);
      }
    }
    return '00:00';
  },

  // @return bool
  isFinished: function () {
    switch (this.get("status")) {
      case "created":
      case "ongoing":
        return false;
      default:
        return true;
    }
  },

  isOngoing: function () {
    return this.get("status") === "ongoing";
  }
});
var StreamModel = Backbone.Model.extend({

  urlRoot : Y.Conf.get("api.url.games"),

  defaults : {
    id : null,
    date : null,
    type : "comment",
    owner : null,
    data : {
      text : "...."
    }
  },

  initialize : function() {

  },

  comparator : function(item) {
    return -item.get("date").getTime();
  },

  sync : function(method, model, options) {




    if (method === 'update' || method === 'create') {
    
    

	  var that = this;

      return Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.games") 
        	+ (this.get('gameid') || '') 
        	+ '/stream/?playerid='
            + (this.get('playerid') || '') 
            + '&token='
            + (this.get('token') || ''),
        type : 'POST',
        data : {
          // FIXME : only comment
          type : 'comment',
          data : {
            text : (this.get('text') || '')
          }
        },
        success : function(data) {
          // put your code after the game is saved/updated.

          that.set(data);         
          if (options && options.success) {

              options.success(data);
          }          

        },
        error: function (message) {
            if (options && options.error)
              
              options.error(message);
        }        
      });

    } 

  }

});

var PlayerModel = Backbone.Model.extend({
  urlRoot: Y.Conf.get("api.url.players"),

  mode: '',

  defaults: {
    name: "",
    rank: "NC",
    type: "default",
    games: [],
    club: {
      id: "",
      name: ""
    },
    dates: {
      update: "",
      creation: new Date()
    },
    language: Y.language,
    location: {
      currentPos: [0, 0]
    },
    token: "",
    updated_at: new Date()
  },

  initialize: function () {

  },

  read: function () {


  },

  isMe: function () {
    return this.get('id') == Y.User.getPlayer().get('id');
  },

  isMine: function () {
    return this.get('owner') == Y.User.getPlayer().get('id');
  },

  isOWned: function () {
    return this.get('type') === "owned";
  },

  sync: function (method, model, options) {
    // allowing playerid & token overload.
    var that = this;
    var playerid = options.playerid || this.get('id') || '';
    var token = options.token || this.get('token') || '';
    //
    if (method === 'create' && this.get('id') === undefined) {
      var dataSend = {
        id: (this.get('id') || ''),
        language: Y.language,
        location : {},
        club: (this.get('club') || '')  
      };
      
      //if (Y.Geolocation.longitude!==null && Y.Geolocation.latitude!==null)
      //  dataSend.location.currentPos = [Y.Geolocation.longitude, Y.Geolocation.latitude];
      
      return Backbone.ajax({
        dataType: 'json',
        url: Y.Conf.get("api.url.players"),
        type: 'POST',
        data:dataSend,
        // WHYYYYY ?????
        success: function (data) {
          that.set(data);
          if (options && options.success) {
            options.success(data);
          }
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
        }
      });
    } else if (method === 'update' && this.get('id') !== undefined) {
      // Update
      var dataSend = {
        id: (this.get('id') || ''),
        name: (this.get('name') || ''),
        email: { address: (this.get('email') || '') },
        rank: (this.get('rank') || ''),
        idlicense: (this.get('idlicence') || ''),
        language: Y.language,
        location : {},
        token: (this.get('token') || '')
      };

      //if (Y.Geolocation.longitude!==null && Y.Geolocation.latitude!==null)
      //  dataSend.location.currentPos = [Y.Geolocation.longitude, Y.Geolocation.latitude];

      if (this.get('uncryptedPassword'))
        dataSend.uncryptedPassword = this.get('uncryptedPassword');
      
      // si club non nul
      if (typeof this.get('clubid') === "string" && this.get('clubid') !== '' && this.get('club') !== '' ) {
        dataSend.club = {
          id: (this.get('clubid') || undefined)
        };
        //On met en cache le numero de club
        Y.User.setClub(this.get('clubid'));
      } else {
      	Y.User.removeClub();
      	 dataSend.club = {
          id: undefined,
          name : ''
        };
      }

      var url = Y.Conf.get("api.url.players") + this.get('id')
            + '/?playerid=' + playerid + '&token=' + token;
      return Backbone.ajax({
        dataType: 'json',
        url: url,
        type: 'POST',
        data: dataSend,
        success: function (data) {
          that.set(data);
          if (options && options.success) {
            options.success(data);
          }
        },
        error: function (message) {
          if (options && options.error)
            options.error(message);
        }
      });
    } else {
      model.url = Y.Conf.get("api.url.players") + this.id;
      return Backbone.sync(method, model, options);
    }
  }
});

var ClubModel = Backbone.Model.extend({

  urlRoot : Y.Conf.get("api.url.clubs"),

  mode : '',
  
  defaults : {
    sport : "tennis",
    name : "",
    ligue : "",
    zip : "",
    outdoor : 0,
    indoor : 1,
    countPlayers : 0,
    countPlayers1AN : 0,
    countTeams : 0,
    countTeams1AN : 0,
    school : "",
    location : {
      address : "",
      city : "",
      pos : [ 0, 0 ]
    },
    dates : {
      update : "",
      creation : new Date()
    },
    updated_at : new Date()
  },  

  initialize : function() {

  },

  sync : function(method, model, options) {

    /*
     * var params = _.extend({ type: 'GET', dataType: 'json', url: model.url(),
     * processData:false }, options);
     * 
     * return $.ajax(params);
     */

    if (method === 'create') {


      var object = {
          
          sport: "tennis",
          name: this.get('name'),
          location : {
            pos: (this.get('pos') || ''),
            address: (this.get('address') || ''),
            zip: (this.get('zip') || ''),
            city: (this.get('city') || '')
          }
         
      };



      return Backbone.ajax({
        dataType : 'json',
        url : Y.Conf.get("api.url.clubs"),
        type : 'POST',
        data : object,
        success : function(result) {
          
          if (result.id !== null)
            $('span.success').html('Enregistrement OK ' + data.id).show();
          else
            $('span.success').html('Erreur').show();
          
        }
      });

    }
    else {
      model.url = Y.Conf.get("api.url.clubs")+this.id;
      return Backbone.sync(method, model, options);
    }

  }


});

var GamesCollection = Backbone.Collection.extend({
  	 
	model:GameModel, 
	
	searchOption:[],
	//searchOptionParam:'',	
	sortOption:'',
	query:'',
	pos: null,
	club:'',
	
	initialize: function (param) {	
		this.changeSort("city");		
	},
	
		  
  url:function() {
       
    var url='';

    if (this.searchOption.indexOf('me') !== -1) {      
      // /v1/players/:id/games/  <=> cette url liste tous les matchs dans lequel un player joue / a jou�
	    // /v1/players/:id/games/?owned=true <=> cette url liste tous les matchs qu'un player poss�de (qu'il a cr��)
      url = Y.Conf.get("api.url.players") + this.query + "/games/?owned=true";
    }
    else 
      url =  Y.Conf.get("api.url.games");
      
    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
    else
    	url += "&";      
    
    if (this.searchOption.indexOf('club') !== -1 && this.club!=='') {
      url += "club=" + this.club; 
      url += "&"; 
    }
      
    if (url === Y.Conf.get("api.url.games")  ) 
    	url += "?";
   
        
    if (this.searchOption.indexOf('geo') !== -1 && this.pos !==null) { 
     if (this.pos[1]!==null && this.pos[0]!==null)   
      url +=  "distance=50&latitude="+this.pos[1]+"&longitude="+this.pos[0];
      url += "&";
    }        

    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
           	
    	
	if (this.query!=="" && this.searchOption.indexOf('player') !== -1 ) {
		url +="q="+this.query+"";
		url += "&";
	};
    
    if (url === Y.Conf.get("api.url.games") ) 
    	url += "?";
    	    
    if (this.sortOption==='ongoing')
      url += "status=ongoing&";
    else if (this.sortOption==='finished')
      url += "status=finished&";
    else if (this.sortOption==='created')
      url += "status=created&";
           
	
	url += "sort=-dates.start&limit=10";   

    console.log('URL',url);        
        
    return url;
  },

  setSort:function(s) {  	
    this.sortOption=s;
  },
  
  removeSearch:function(m) {

     if (this.searchOption!==undefined) {      	  
        if (this.searchOption.indexOf(m) !== -1) {
          this.searchOption.splice(this.searchOption.indexOf(m), 1);
        }
     }
  
  },
  
  addSearch:function(m) {
    //this.searchOption=m;
    
     if (this.searchOption!==undefined) {      	  
        if (this.searchOption.indexOf(m) === -1) {
           this.searchOption.push(m);      
       }        
      }
      else {
         this.searchOption = [m];
      }   
      
      console.log('on passe setSearch sur ',this.searchOption);  

    //if (typeof q !== "undefined")
    //  this.searchOptionParam=q;
  },

  setQuery:function (q) {
    this.query=q;
  },

  
  
  setPos:function(pos) {
    this.pos = pos;
  },  
  
  setClub:function(club) {
    this.club = club;
  }, 	
    
  comparator: function (property) {
    return selectedStrategy.apply(Game.get(property));
  },
    
  strategies: {
      city: function (item) { return [item.get("city")]; }, 
      status: function (item) { return [item.get("status")]; },
      player: function (item) { return [item.get("teams[0].players[0].name"),item.get("teams[1].players[0].name")]; },
  },
    
  changeSort: function (sortProperty) {
      this.comparator = this.strategies[sortProperty];
  }
});


var PlayersCollection = Backbone.Collection.extend({
  model: PlayerModel, 
  		
  mode: 'default',
  	
  query: '',
 	
	initialize: function (param) {
		this.changeSort("name");
		
	},
	  
  url:function() {
    //console.log('url() : mode de Players',this.mode); 	
    //console.log('url Players', Y.Conf.get("api.url.players")+'autocomplete/?q='+this.query); 	
          
    if (this.mode === 'club')
      return Y.Conf.get("api.url.players")+'?club='+this.query;
    else if (this.mode === 'search'  )
      return Y.Conf.get("api.url.players")+'autocomplete/?q='+this.query+'&limit=15';        
    else	
      return Y.Conf.get("api.url.players");
  },
	
	setMode:function(m,q) {
    this.mode=m;
    this.query=q;
  },
    
  comparator: function (property) {
    return selectedStrategy.apply(Game.get(property));
  },

  strategies : {
    name : function(item) { return [ item.get("name") ] }
  , rank : function(item) { return [ item.get("rank") ] }
  },

  changeSort : function(sortProperty) {
    this.comparator = this.strategies[sortProperty];
  }
});

var ClubsCollection = Backbone.Collection.extend({

  model : ClubModel,

  mode : 'default',

  query : '',

  initialize : function(param) {

  },

  url : function() {

    if (this.mode === 'search')
      return Y.Conf.get("api.url.clubs") + 'autocomplete/?q=' + this.query+'&limit=30&&fields=name,location,countPlayers,countTeams';
    else
      return Y.Conf.get("api.url.clubs");

  },

  setMode : function(m, q) {
    this.mode = m;
    this.query = q;
  }
  

});

var StreamsCollection = Backbone.Collection.extend({
  model: StreamModel, 
  mode: 'default',
  gameid:'', 
  query: '',
 	
  initialize: function (streamItems, options) {
		this.gameid = options.gameid;
  },

  url: function() {
    if (this.length > 0) {
      var lastid = this.at(0).id;
      return Y.Conf.get("api.url.games")+this.gameid+"/stream/?lastid="+lastid;
    }
    return Y.Conf.get("api.url.games")+this.gameid+"/stream/?limit=50"; 
  },
	
  comparator: function (item) {
    var dates = item.get("dates");
    if (dates && dates.creation)
      //return new Date(dates.creation).getTime();
      return Date.fromString(dates.creation).getTime();
    assert(false);
    return 0; // at the end of the list.
  },

  // default behaviour: remove = false.
  fetch: function (o) {
    o = o || {};
    o.remove = o.remove || false;
    return Backbone.Collection.prototype.fetch.call(this, o);
  }
});

Y.Views.Autocomplete = Y.View.extend({
  el: "#autocomplete",

  proposals: null, /* @see y/autocomplete.js */

  events: {
    // Hack. mousedown is triggered before blur in the GUI.
    'mousedown .proposal': 'selected'
  },

  initialize: function () { },
  render: function () { },

  autocomplete: null,

  setProposals: function (autocomplete, proposals) {
    assert(autocomplete instanceof Y.Autocomplete);
    assert(_.isArray(proposals));

    // refs.
    this.autocomplete = autocomplete;
    this.proposals = proposals;
    // empty GUI.
    this.$el.empty();
    // creating list of proposals
    this.proposals.forEach(function (proposal, i) {
      var text = null;
      if (proposal) {
        if (typeof proposal === "string")
          text = proposal;
        if (typeof proposal === "object" && proposal.text)
          text = proposal.text;
      }
      if (!text)
        return; // nothing to display.
      this.$el.append($('<div class="proposal" data-index="'+ i +'">').html(text));
    }, this);
  },

  // FIXME:
  // This function should be inlined in setProposals
  //  but we will not have fast-click (no backbone touch ...)
  //  so we prefer to leave it outside, until we can speed up any clicks.
  //  BUT, this actualy leads to memory managment tricks
  //    autocompleteObj must unregister itself from this class, when disposed.
  selected: function (e) {
    var index = $(e.target).attr('data-index');
    if (this.autocomplete)
      this.autocomplete.trigger("selected", this.proposals[index]);
  }
});
Y.Views.Club = Y.View.extend({
  el : "#content",
  
  events : {
    'mousedown .button.send' : 'sendComment',
    'click li': 'goToGame'
  },

  pageName: "club",
  pageHash : "clubs/",
  gameid: 0,
  
  initialize : function() {
  
	//header    
  	Y.GUI.header.title(i18n.t('club.title'));  	
  	Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      game: Y.Templates.get('game'),  
      listmatch: Y.Templates.get('gameShortList'),           
      club:  Y.Templates.get('club'),
      comment: Y.Templates.get('gameCommentsComment'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')      
    };
    
    // we render immediatly
    this.render();        

	this.streamItemsCollection = null;
	this.game = null;

    this.club = new ClubModel({id : this.id});   
    this.club.once('sync', this.renderClub, this);      
    this.club.fetch();
    
    this.follow = 'false';    
    
    // loading owner
    this.owner = Y.User.getPlayer();

  },

	

  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout());

	  return this;
  },

  goToGame: function (elmt) {
    if (elmt.currentTarget.id) {
      this.gameid = elmt.currentTarget.id;
      
      console.log(this.gameid);
      this.renderGame();
      
      //this.renderComments();

       
    }
  },  

  /*
  renderComments : function() {
    
    if (this.gameid!=0) {
    
	  this.streamItemsCollection = new StreamsCollection([], {gameid : this.gameid});
	  this.streamItemsCollection.on("sync", this.renderListComments, this);
	
	  // pool the collection regulary
	  var pollingOptions = { delay: Y.Conf.get("game.refresh") };
	  this.poller = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
	  this.poller.start();
	        
    }
  },
  */

 
  renderListGame : function() {
    var that = this;    
    this.games = new GamesCollection();
    this.games.addSearch('club',this.club.get('id'));  
    //this.$listmatch.html(this.templates.listmatch({'games':this.games}));
    $("#listMatchClubs").html(that.templates.ongoing());


    this.games.fetch().done($.proxy(function () {  
      if (that.games.toJSON().length === 0) {
        $("#listMatchClubs").html(that.templates.error());
        //$(that.listview).i18n();
      }
      else {
      	//console.log('games',that.games.toJSON()[0].id);
        if (this.gameid == 0) {
          console.log('pas de gameid, on cherche le premier');
          that.gameid = that.games.toJSON()[0].id;
        }
        
        $("#listMatchClubs").html(that.templates.listmatch({ games: that.games.toJSON(), clubid: that.clubid }));  	
        //$(that.listview).i18n();
      }
      
      that.renderGame();
      //that.renderComments();
      
    }, this));  
  },
  
  renderGame : function() {
    
    if (this.gameid == 0) {
      $("#scoreBoard").html(this.templates.error({}));  
    }
    else {
    
      var pollingOptions = { delay: Y.Conf.get("game.refresh") };
    
	  this.game = new GameModel({id : this.gameid});
	  this.game.on("sync", this.renderViewGame, this);
	  this.poller = Backbone.Poller.get(this.game, pollingOptions);
	  this.poller.start();
	  //this.game.fetch();
	  
	  this.streamItemsCollection = new StreamsCollection([], {gameid : this.gameid});
	  this.streamItemsCollection.on("sync", this.renderListComments, this); 
	  //this.streamItemsCollection.fetch();
	  this.poller2 = Backbone.Poller.get(this.streamItemsCollection, pollingOptions);
	  this.poller2.start();	  
	  
	        
    }
  },  
  
  renderViewGame : function() {
 
    if (this.game.toJSON().length === 0) {
	  $("#scoreBoard").html(this.templates.error());
	  $("#scoreBoard").i18n();
	}
	else {	      
	  var timer = '';
	  var game = this.game;
		  	  
	  if ( game.get('status') === "finished" ) {
		       
	    var dateEnd = Date.fromString(game.get('dates').end);      
		var dateStart = Date.fromString(game.get('dates').start);
		          	
		timer = dateEnd - dateStart;
		var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);  
		      
		if (timer>0)       
		  timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);  
		else
		  timer = '00:00';   
		         
		$("#statusButton").html(i18n.t('game.finished'));	         
		$("#optionButton").attr("id","statusRestart");
		$("#statusRestart").html(i18n.t('game.restart'));
		 	  		        
	  }
	  else if ( game.get('status') === "ongoing" ) {		        
		 var dateEnd = new Date();
		 var dateStart = Date.fromString(game.get('dates').start);
		 timer = dateEnd - dateStart;
   
		 if (timer>0)
		 {		          
	       var dateTimer = new Date(0, 0, 0, 0, 0, 0, timer);         
		   timer = ('0'+dateTimer.getHours()).slice(-2)+':'+('0'+dateTimer.getMinutes()).slice(-2);        
		 }
		 else {
		   timer = '00:00';  		    
		 }       
	  }	      
	   
	  $("#scoreBoard").html(this.templates.game({ 
	  game: this.game.toJSON(),timer : timer }));  	
	  $("#scoreBoard").i18n();
	        
	 }
  },  
  
  renderListComments : function() {
  
    $listComment = this.$(".list-comment");
    
    this.streamItemsCollection.forEach(function (streamItem) {
      if (!document.getElementById("comment"+streamItem.get('id'))) {
        // small fade-in effect using an hidden container.
        var divHiddenContainer = document.createElement("div");
        divHiddenContainer.style.display = "none";
        
        //filter
        streamItem = streamItem.toJSON();
        streamItem.data.text = streamItem.data.text.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");
        
        $(divHiddenContainer).html(this.templates.comment({
          streamItem  : streamItem,
          owner : (this.owner) ? this.owner.toJSON() : null
        }));
        $listComment.prepend(divHiddenContainer);
        $(divHiddenContainer).fadeIn();
      }
    }, this);  
  },  
 
  sendComment : function() {
  
    if (this.owner===undefined)
      Y.Router.navigate("players/signin", {trigger: true});  
   else {
   
	    var playerid = this.owner.id
	    , token  = this.owner.get('token')
	    , gameid = this.gameid
	    , comment = $('#messageText').val()
	    , that = this;
	
	    if (comment.length === 0)
	      return; // empty => doing nothing.
	      
	    //filter
	    comment = comment.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");  
	      
	    //on bloque le textarea  
	    $('.button').addClass('disabled');
	      
	    var stream = new StreamModel({
	          type : "comment",
	          playerid : playerid,
	          token : token,
	          text : comment,
	          gameid : gameid
	    });
	    stream.save().done(function (streamItem) {
	      that.streamItemsCollection.fetch();
	      that.$('#messageText').val('');
	      that.scrollTop();
	      that.$('.button').removeClass("disabled");
	      
	    }).fail(function (err) {
		    that.$(".button.send").addClass("ko");
		    that.shareTimeout = window.setTimeout(function () {
		      that.$(".button.send").removeClass("ko");
		      that.shareTimeout = null;
		  	  that.$('.button').removeClass("disabled");    
		    }, 4000);
	    }); 
    
    }  
    
  }, 
 
  // render the content into div of view
  renderClub : function() {
  	
  	this.clubid = this.club.get('id'); 
  	
  	/* On affiche les infos du club*/
    this.$el.html(this.templates.club({
      club : this.club.toJSON(),follow:this.follow
    }));

	this.renderListGame();
	
		
	this.$el.i18n();    

    return this;
  },

  onClose : function() {
    this.undelegateEvents();
    this.club.off("sync", this.renderClub, this);  
     
	if (this.game!==null) {
      this.game.off('sync', this.renderViewGame, this);
      this.poller.stop();    
    }
    
	if (this.streamItemsCollection!==null) {    
      this.streamItemsCollection.off("sync", this.renderListComments, this);
      this.poller2.stop();      	
    }
    
  }
});
Y.Views.ClubAdd = Y.View.extend({
  el: "#content",

  events: {
    'submit form#frmAddClub': 'addClub'
  },

  pageName: "clubAdd",
  pageHash : "clubs/add",
  playerid : "",
  token : "",

  initialize: function () {
  
    Y.GUI.header.title(i18n.t('clubadd.title'));

    this.clubAddTemplate = Y.Templates.get('clubAdd');

    this.owner = Y.User.getPlayer();    
    this.token = this.owner.get('token');
    this.playerid = this.owner.get('id');  

    this.render();

  },


  addClub: function (event) {
  
    jq("#navbar").show();
    jq("#content").css("bottom", "48px");
    //$.ui.showNavMenu = true;


    
    var name = $('#name').val()
    , city = $('#city').val();
    
    var club = new ClubModel({
      name: name
    , city: city          
    });

    club.save();    
   
    return false;
  },

  //render the content into div of view
  render: function () {
    this.$el.html(this.clubAddTemplate({}));
    
    return this;
  },

  onClose: function () {
    //Clean
    this.undelegateEvents();

  }
});
Y.Views.ClubList = Y.View.extend({
  el : "#content",

  events : {
    "keyup input#search-basic" : "search",
    "click li": "chooseClub"
  },

  listview : "#listClubsView",

  pageName: "clubList",
  pageHash : "clubs/list", 
  
  clubs:null,

  initialize : function() {
  
	//header    
    Y.GUI.header.title(i18n.t('clublist.title')); 
    
    Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      clublist:  Y.Templates.get('clubList'),
      clubsearch: Y.Templates.get('clubListSearch'),
      error: Y.Templates.get('error'),
      ongoing: Y.Templates.get('ongoing')  
    };
        
    //this.playerListViewTemplate = Y.Templates.get('playerList');
    //this.playerSearchTemplate = Y.Templates.get('players');
    
    // we render immediatly
    this.render();    

	console.log('id  ',this.id);

    this.clubs = new ClubsCollection();

	// renderList
    if (this.id !== 'null') {
      this.clubs.setMode('search', this.id);
      this.clubs.on('sync', this.renderList, this);            
      this.clubs.fetch();
    }
    
    
    
  },

  chooseClub : function(elmt) { 
    var ref = elmt.currentTarget.id;
	Y.Router.navigate(ref, {trigger: true});  
  },

  search : function() {
    // FIXME if($("#search-basic").val().length>3) {
    var q = $("#search-basic").val();
    $(this.listview).empty();
    
    var that = this;
    this.clubs.setMode('search', q);
    /*
    this.clubs.fetch();
    
	try {
	    $(this.listview).html(this.templates.clublist, {
	      clubs : this.clubs.toJSON(),
	      query : q
	    });
    }
    catch(e) {

    }*/
    

    this.clubs.fetch().done($.proxy(function () {  

      if (that.clubs.toJSON().length === 0) {
        $(that.listview).html(that.templates.error());
      }
      else
        $(that.listview).html(that.templates.clublist({ clubs: that.clubs.toJSON(), query: q }));
    	
    
    	
      $(that.listview).i18n();
      
    }, this));    
    

    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.templates.clubsearch({}));
    this.$el.i18n(); 

    return this;
  },

  renderList : function(query) {
  
    $(this.listview).html(this.templates.clublist({
      clubs : this.clubs.toJSON(),
      query : ''
    }));

    this.$el.i18n();

    return this;
  },

  onClose : function() {
    this.undelegateEvents();

    this.clubs.off('sync', this.renderList, this);
  }
});

Y.Views.Header = Y.View.extend({
  el: "#header",

  events: {
    "click .backButton": "goBack",
    "click .connectionStatus": "goLink"
  },

  initialize: function () {
    this.startingLength = window.history.length;

    // on s'abonne au router, pour detecter des changement de pages.
    var that = this;
    Y.Router.on("pageChanged", function (a, b) {
      that.repaintBack();
    });

    // loading owner
    this.owner = Y.User.getPlayer();
    
    console.log('this.owner',this.owner);

	if (this.owner===null)
	  $('.connectionStatus').html(i18n.t('header.connexion'));
 	else
 	  $('.connectionStatus').html(i18n.t('header.myaccount'));
 
  },
  render: function () { },

  // @param string title
  // @return void.
  title: function (title) { 
    if (typeof title === "string")
      this.$(".title").text(title);
  },

  goBack: function () {
    window.history.go(-1);
    return false;
  },

  goLink: function () {
    //window.history.go(-1);
    //return false;
    if (this.owner===null)
      Y.Router.navigate("players/signin", {trigger: true}); 
    else
      Y.Router.navigate("players/form", {trigger: true});  
      
  },
  
  showBack: function () { this.$(".backButton").show() },
  hideBack: function () { this.$(".backButton").hide() },
  repaintBack: function () {
    var pageName = Y.GUI.content.pageName;
    
    //console.log('pageName '+pageName);
    
    if (pageName == "index")
      this.hideBack();
    else
      this.showBack();
  },



  hide: function () { 

	  this.$el.hide();
  },

  show: function () { 

	  this.$el.show();
  }
  
});
Y.Views.Index = Y.View.extend({
  el: "#content",
  
  events: {
    "keyup input#search-basic": "searchOnKey",
    "mousedown .magnifier": "searchButton"
  },  

  pageName: "index",
  pageHash : "index",  
  
  myinitialize: function () {
    Y.GUI.header.title(i18n.t('index.title'));

    var that = this;
    //
    this.indexViewTemplate = Y.Templates.get('index');
    
    Y.GUI.header.hide();
    //Y.GUI.navbar.hide();

	/*
    var playerDeferred = $.Deferred();
    this.$el.html("please wait, loading player");
    Y.User.getPlayerAsync(function (err, player) {
      if (err) {
        // no player => creating player.
     
        // creating the player.
        Y.User.createPlayerAsync(function (err, player) {
          // FIXME: err, reject deferred
      
          playerDeferred.resolve();
        });
        return;
      }
      playerDeferred.resolve();
    });

    // FIXME: handling error with deferreds
    $.when(
      playerDeferred
    ).done(function () {
      that.render();

    });
    */
    
    this.render();
    
  },

  searchButton: function () {
    this.search();
  },

  searchOnKey: function (event) {
    if(event.keyCode == 13){
      // the user has pressed on ENTER
      this.search();
    }
    return this;
  },
  
  search: function () {
  
	var q = $("#search-basic").val();
  	
  	if (q.length>0)
  	  Y.Router.navigate('clubs/list/'+q, {trigger: true});
   
  },  

  // should not take any parameters
  render: function () {
    this.$el.html(this.indexViewTemplate(), {});
    return this;
  },

  onClose: function () {
    this.undelegateEvents();
    //this.games.off("all", this.renderList, this);
  }
});
Y.Views.Navbar = Y.View.extend({
  el: "#navbar",

  events: {
    'vclick a[href="#games/list"]': "goToGames",
    'vclick a[href="#games/add"]': "goToGamesAdd",
    'vclick a[href="#account"]': "goToAccount"
  },

  initialize: function () {
    var that = this;
    Y.Router.on("pageChanged", function (page, fragment) {
      //console.log("fragment",fragment);
      this.highlight(fragment);
    }, this);
  },
  render: function () { },
  
  highlight: function (fragment) {
    // factorizing fragment.
    if (fragment == "index" || fragment.startsWith("games/comment/")) {
      fragment = "#";
    } else if ( fragment == "games/list" || fragment == "games" ) {
      fragment = "#games/list";
    } else if (fragment == "games/add") {
      fragment = "#games/add";
    } else if (fragment == "account") {
      fragment = "#account"
    } else {
      fragment = null; // unknown
    }

    // fragment was identified.
    if (fragment) {
      this.$("a").each(function () { $(this).removeClass("highlighted") });
      this.$('a[href="'+fragment+'"]').addClass("highlighted");
    }
  },

  show: function () { 
	  this.$el.show();
  },

  hide: function () { 
      /*
      this.$el.css("opacity", 0)
	  #navbar { transition: opacity ease 1s; }
      */
	  this.$el.hide();
  },

  goToGames: function () { Y.Router.navigate("games/list", {trigger: true}); },
  goToGamesAdd: function () { Y.Router.navigate("games/add", {trigger: true}); },
  goToAccount: function () { Y.Router.navigate("account", {trigger: true}); }
});
Y.Views.Player = Y.View.extend({
  el:"#content",

  events: {
    'click #followButton': 'followPlayer'
  },

  pageName: "player",
  pageHash : "players/",

  myinitialize: function(options) {
  
    this.pageHash += this.id; 
    
    Y.GUI.header.title(i18n.t('player.title'));	    
  
    this.playerViewTemplate = Y.Templates.get('player');



    this.player = new PlayerModel({id:this.id});
    //change
    this.player.on( 'sync', this.render, this );
        
    this.player.fetch(); 

    var players_follow = Y.Conf.get("owner.players.followed");
    if (players_follow !== undefined)
    {
      if (players_follow.indexOf(this.id) === -1) {
        this.follow = 'false';
      }
      else
        this.follow = 'true';          
    }
    else
      this.follow = 'false';


  },

  followPlayer: function() {
  
        if (this.follow === 'true') {

          var players_follow = Y.Conf.get("owner.players.followed");
          if (players_follow !== undefined)
          {
            if (players_follow.indexOf(this.id) !== -1) {
              //On retire l'elmt
              players_follow.splice(players_follow.indexOf(this.id), 1);
              Y.Conf.set("owner.players.followed", players_follow, { permanent: true });
            }
          }
          
          $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.nofollowplayerok')).show();
          $("#followButton").text(i18n.t('message.follow'));
          $('#followButton').removeClass('button-selected');
          $('#followButton').addClass('button'); 

          this.follow = 'false';

        } else {
        
          //Via localStorage
          var players_follow = Y.Conf.get("owner.players.followed");
          if (players_follow !== undefined)
          {
            if (players_follow.indexOf(this.id) === -1) {
              players_follow.push(this.id);
              Y.Conf.set("owner.players.followed", players_follow, { permanent: true });
            }
          }
          else
            Y.Conf.set("owner.players.followed", [this.id]);

		  $('span.success').css({display:"block"});
          $('span.success').html(i18n.t('message.followplayerok')).show();
          $("#followButton").text(i18n.t('message.nofollow'));
          $('#followButton').removeClass('button');
          $('#followButton').addClass('button-selected');          
          

          this.follow = 'true';

        }	
  
  },    

  //render the content into div of view
  render: function(){
  
    console.log('players',this.player.toJSON());

    this.$el.html(this.playerViewTemplate({
      player:this.player.toJSON(),follow:this.follow
    }));
    
    this.$el.i18n();

    return this;
  },

  onClose: function(){
    this.undelegateEvents();
    this.player.off("sync",this.render,this);   
    //this.$el.off('pagebeforeshow'); 
  }
});
Y.Views.PlayerForm = Y.View.extend({
  el:"#content",
    
  events: {
    'click #savePlayer':'add',
    'keyup #club': 'updateList',
    'click #club_choice' : 'displayClub'
  },
  
  listview:"#suggestions",

  pageName: "playerForm",
  pageHash : "players/form",  
    
  clubs:null,
  useSearch:0,	     
  mode:'',

  myinitialize:function(obj) { 
    this.useSearch = 0;	
    this.mode = obj.mode;
  
	  //header
    Y.GUI.header.title(i18n.t('playerform.title'));
    Y.GUI.header.show();
  
    // loading templates.
    this.templates = {
      layout: Y.Templates.get('empty'),
      playerform:  Y.Templates.get('playerForm'),
      clublist: Y.Templates.get('clubListAutoComplete')
    };
    
    this.player = Y.User.getPlayer();
    this.clubid = this.player.get('club').id;
    this.player.once("sync", this.renderPlayer, this);	
    this.player.fetch();

    // we render immediatly
    this.render();
  },
  
  autocompleteClubs: function (input, callback) {
    if (input.indexOf('  ')!==-1 || input.length<= 1 )
      callback('empty');		
    
    Backbone.ajax({
      url: Y.Conf.get("api.url.autocomplete.clubs"),
      type: 'GET',
      dataType : 'json',
      data: { q: input }
    }).done(function (clubs) {
      if (clubs && _.isArray(clubs) && clubs.length>0) {
        callback(null, clubs.splice(0, 3).map(function (p) { p.text = p.name; return p; }));
      } else {
        callback(null, []);
      }
    }).fail(function (xhr, error) { 
      callback(error);
    });
  },

  autocompleteChoose: function (data) {
    if (data && data.name) {
      this.$("#club").val(data.name);
      this.clubid = data.id;
      this.$('club_error').html('');      
    }
  },
    
  /*  
  
  displayClub: function(li) {
    selectedId = $('#club_choice:checked').val();
    selectedName = $('#club_choice:checked').next('label').text();
    	
    $('#club').val(selectedName);
    //FIXME : differencier idclub et fftid
    $('#clubid').val(selectedId); 
    $('club_error').html('');
    	
   
    	
    $(this.listview).html('');
  },  
  
  updateList: function (event) {
    var q = $("#club").val();
   	
    this.clubs = new ClubsCollection();108
    this.clubs.setMode('search',q);
    if (q.length>2) {
      this.useSearch=1;
      this.clubs.fetch();
      this.clubs.on( 'sync', this.renderList, this );
    }

  },
  
  */
  
  render: function () {
    // empty page.
	  this.$el.html(this.templates.layout());
    this.$(".container").addClass(this.mode);
	  return this;
  },
  
  renderList: function () {
    var q = $("#club").val();  	
	  $(this.listview).html(this.templates.clublist({clubs:this.clubs.toJSON(), query:q}));
  },
  
  add: function (event) {
    var name = $('#name').val()
      , rank = $('#rank').val().replace(/ /g, "")
      , playerid = this.playerid
      , token = this.token
      , club = $('#club').val()
      , clubid = this.clubid
      , idlicence = $('#idlicence').val()
      , player = null;
      
    //On cache toutes les erreurs 
    $("div.success").hide();

    if (checkRank(rank) && rank.length>0) {
	    $('.rank_error').html(i18n.t('message.bad_rank')+' !').show();
      $('#rank').val('');        
      return false;	   
    };
    
    if (name.length==0) {
	    $('.name_error').html(i18n.t('message.empty_name')+' !').show();      
      return false;	   
    };
    
    if (checkName(name) && name.length>0) {
	    $('.name_error').html(i18n.t('message.bad_name')+' !').show();
      $('#name').val('');        
      return false;	   
    };

    if (checkLicence(idlicence) && idlicence.length>0) {
	    $('.idlicence_error').html(i18n.t('message.bad_licence')+' !').show();
      $('#idlicence').val('');        
      return false;	   
    };

    if (checkName(club) && club.length>0) {
	    $('.club_error').html(i18n.t('message.bad_name')+' !').show();
      $('#club').val('');        
      return false;	   
    };
    
    var that = this;
    var player = Y.User.getPlayer();
    player.set('name', name);
    player.set('rank', rank);
    player.set('idlicence', idlicence);
    player.set('club', club);
    player.set('clubid', clubid);

	  //FIXME :  add control error
    player.save().done(function (result) {
      $('div.success').css({display:"block"});
      $('div.success').html(i18n.t('message.updateok')).show();
		  $('div.success').i18n();
		  Y.User.setPlayer(new PlayerModel(result));
		  
    });
   
    return false;
  },     
    

  //render the content into div of view
  renderPlayer: function(){
    player = this.player.toJSON();
        
    var dataDisplay = {
	      name:player.name
	    , rank:player.rank
	    , idlicence:player.idlicense
	    , playerid:this.playerid
	    , token:this.token
    };
      
    if (player.club!== undefined) {    
      dataDisplay.club = player.club.name;
      dataDisplay.idclub = player.club.id;      	
    }
    
    this.$el.html(this.templates.playerform({data : dataDisplay}));

    this.$(".container").addClass(this.mode);

	  this.$el.i18n();

    return this;
  },

  onClose: function(){
    this.undelegateEvents();
    
    this.player.off("sync", this.renderPlayer, this);	
    if (this.useSearch===1) this.clubs.off( "sync", this.renderList, this );
  }
});
Y.Views.PlayerSignin = Y.View.extend({
  el : "#content",

  events: {
    'click #connexion' : 'connexion',
    'click #deconnexion' : 'deconnexion',
    'click #forgetPassword' : 'forget',
    'keyup #email': 'onKeyupEmail'
  },

  pageName: "playerSignin",
  pageHash : "players/signin",

  status: {
    UNREGISTERED: "unregistered",
    REGISTERED: "registered",
    REGISTERING: "registering",
    LOGIN: "login",
    current: null
  },

  myinitialize : function() {
    // title
    Y.GUI.header.title(i18n.t('playersignin.title'));     
    Y.GUI.header.show();
      	
    // loading template
    this.playerSigninTemplate = Y.Templates.get('playerSignin');
    // loading status
    this.player = Y.User.getPlayer();
    if (this.player &&
        this.player.get('email') &&
        this.player.get('email').address) {
      this.status.current = this.status.REGISTERED;
    } else {
      this.status.current = this.status.UNREGISTERED;
    }
    // rendering will switch between status.
    this.render();
  },

  // FIXME: should be generic feature for forms.
  onKeyupEmail: function (event) {
    if (event.keyCode == 13){
      // the user has pressed on ENTER
      this.connexion();
    }
    return this;
  },

  forgetting: false, // lol
  forget : function(event) {
    var that = this;
    if (this.forgetting)
      return;
    // security.
    var email = $('#email').val().trim();
    if (!email.isEmail())
      return this.displayError(i18n.t("message.bad_mail"));

    this.forgetting = true;
	  Backbone.ajax({
      dataType: 'json',
      url: Y.Conf.get("api.url.auth") + "resetPassword/",
      type: 'POST',
      data: {
        email: { address: email }
      },
      success: function (data) {
        that.forgetting = false;
        that.displayMsg(i18n.t('message.mailspam')+". "+i18n.t('message.mailspam_sentence'));
      },
      error: function (err) {
        that.forgetting = false;
        that.displayError(i18n.t('message.mailerror'));
      }
    });
  }, 

  hideMessages : function () { this.$(".error,.msg").hide(); },
  hideError: function () { this.$(".error").hide(); },
  displayMsg: function (msg) { this.hideMessages(); this.$(".msg").html(msg).show(); },
  displayError: function (msg) { this.hideMessages(); this.$(".error").html(msg).show(); },

  connexion : function(event) {
    if (this.status.current === this.status.UNREGISTERED)
      return this.checkEmail();
    if (this.status.current === this.status.LOGIN)
      return this.login();
    if (this.status.current === this.status.REGISTERING)
      return this.register();
    assert(false);
    return;
  },

  deconnexion: function (event) {
    // on repasse par un player temporaire / anonyme ?
    var that = this;
    Y.User.createPlayerAsync(function (err) {
        if (that.unloaded)
          return; // prevent errors.
        if (err)
          return that.displayError(i18n.t("message.error_deconnexion"));
        that.hideError();
        that.updateStatus(that.status.UNREGISTERED);
    });
  },

  checkingEmail: false,
  checkEmail: function () {
    if (this.checkingEmail)
      return;
    // security.
    var email = $('#email').val().trim();
    if (!email.isEmail())
      return this.displayError(i18n.t("message.bad_mail"));
    //
    var that = this;
    this.checkingEmail = true;
    this.hideMessages();
    Backbone.ajax({
      dataType: 'json',
      url: Y.Conf.get('api.url.auth.registered'),
      type: 'GET',
      data: {
        // auth
        //playerid: this.player.get('id'),
        //token: this.player.get('token'),
        // email param
        email: email
      },
      success: function (result) {
        if (that.unloaded)
          return; // prevent errors.
        that.checkingEmail = false;
        that.hideError();
        if (result.registered) {
          that.updateStatus(that.status.LOGIN);
        } else {
          that.updateStatus(that.status.REGISTERING);
        }
      },
      error: function () {
        if (that.unloaded)
          return; // prevent errors.
        that.displayError(i18n.t("message.error"));
        that.checkingEmail = false;
      }
    });
  },

  logging: false,
  login: function () {
    if (this.logging)
      return;
    var mail = $('#email').val().trim()
      , password = $('#password').val().trim()
      , that = this;

    this.logging = true;
    this.hideMessages();
	  Backbone.ajax({
      dataType: 'json',
      url: Y.Conf.get("api.url.auth"),
      type: 'POST',
      data: {
        email: { address: mail },
        uncryptedPassword: password
      },
      success: function (result) {
        that.logging = false;
		    var player = new PlayerModel(result);	
		    Y.User.setPlayer(player);
        if (that.unloaded)
          return; // prevent errors.
        that.hideError();
      	
      	that.updateStatus(that.status.REGISTERED);
      },
      error: function (err) {
        that.logging = false;
        if (that.unloaded)
          return; // prevent errors.
        that.$("#forgetPassword").show();
		    that.displayError(i18n.t('message.signinerror'));
      }
    });
    return this;
  },

  checkPassword : function (input) {
    var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
    if (!ck_password.test(input)) 
	    return true;
    return false;
  },

  register: function () {
    var email = $('#email').val().trim()
      , password = $('#password').val().trim()
      , passwordConfirm = $('#password_confirm').val().trim();

    this.hideMessages();
    if (!email.isEmail())
      return this.displayError(i18n.t("message.bad_mail"));
    if (this.checkPassword(password))
      return this.displayError(i18n.t("message.bad_password"));
    if (password !== passwordConfirm)
      return this.displayError(i18n.t("message.password_mismatch"));
    //
    this.hideError();
    //
    var that = this;
    
    Y.User.createPlayerAsync(function (err, player) {

	    var player = Y.User.getPlayer();
	    player.set('email', email);
	    player.set('uncryptedPassword', password);
	    player.save().done(function (result) {
			  Y.User.setPlayer(new PlayerModel(result));
	      that.updateStatus(that.status.REGISTERED);
	    }).fail(function () {
	      that.displayError(i18n.t("message.registering_error"));
	    });;
	    
    });

  },
  
  // render the content into div of view
  render : function() {
    this.$el.html(this.playerSigninTemplate({}));
    this.updateStatus(this.status.current);
    this.$el.i18n();
    return this;
  },

  updateStatus: function (newStatus) {
    // handling status
    this.status.current = newStatus;
    this.$(".container").removeClass(_.values(this.status).join(" "));
    this.$(".container").addClass(this.status.current);
  },

  onClose : function() {
    this.undelegateEvents();
  }
});

Y.Views.PlayerForget = Y.View.extend({
  el : "#content",

  events: {
    'focus input[type="text"]': 'inputModeOn',
    'blur input[type="text"]': 'inputModeOff',
    'click #forgetPlayer' : 'forget'
  },

  pageName: "playerForget",
  pageHash : "players/forget",
  
  initialize : function() {
    Y.GUI.header.title(i18n.t('playerforget.title'));     
  
    this.playerForgetTemplate = Y.Templates.get('playerForget');
    this.render();
  },
  
  forget : function(event) {
    var mail = $('#email').val();

	  Backbone.ajax({
      dataType: 'json',
      url: Y.Conf.get("api.url.auth") + "resetPassword/",
      type: 'POST',
      data: {
        email: { address: mail }
      },
      success: function (data) {
		    $('span.success').css({display:"block"});
        $('span.success').html(i18n.t('message.mailspam')).show();
        $('span.success_sentence').html(i18n.t('message.mailspam_sentence')).show();
      },
      error: function (err) {
	      $('span.error').css({display:"block"});
		    $('span.error').html(i18n.t('message.mailerror')).show();
		    $('span.error').i18n();
      }
    });
    return this;
  },

  // render the content into div of view
  render : function() {
    this.$el.html(this.playerForgetTemplate({}));
    this.$el.i18n();
    return this;
  },

  onClose : function() {
    this.undelegateEvents();
  }
});

(function (Y, undefined) {
  /*#ifdef STRICT*/
  "use strict";
  /*#endif*/

  /*
   * /!\ /!\ /!\
   *  dev only
   * /!\ /!\ /!\
   */
  var Env = {
    DEV: "DEV",
    PROD: "PROD",
    CURRENT: null
  };
  Env.user = "vincent";
  // Env.user = "vincent";
  // Env.user = "alpha";
  Y.Env = Env;
})(Y);
// MAIN ENTRY POINT
$(document).ready(function () {
  // Document is ready => initializing YesWeScore
  Y.ready(function () {
    // YesWeScore is ready.
    /*#ifdef DEV*/
    console.log('YesWeScore is ready.');
    /*#endif*/
  });

});

