!function(e){function t(e,t,n,r){var o,i,u,l,a,c,s,p,h,g;if((t?t.ownerDocument||t:F)!==R&&I(t),t=t||R,n=n||[],l=t.nodeType,"string"!=typeof e||!e||1!==l&&9!==l&&11!==l)return n;if(!r&&P){if(11!==l&&(o=vt.exec(e)))if(u=o[1]){if(9===l){if(i=t.getElementById(u),!i||!i.parentNode)return n;if(i.id===u)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(u))&&O(t,i)&&i.id===u)return n.push(i),n}else{if(o[2])return _.apply(n,t.getElementsByTagName(e)),n;if((u=o[3])&&x.getElementsByClassName)return _.apply(n,t.getElementsByClassName(u)),n}if(x.qsa&&(!k||!k.test(e))){if(p=s=z,h=t,g=1!==l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(c=T(e),(s=t.getAttribute("id"))?p=s.replace(Nt,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",a=c.length;a--;)c[a]=p+d(c[a]);h=wt.test(e)&&f(t.parentNode)||t,g=c.join(",")}if(g)try{return _.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{s||t.removeAttribute("id")}}}return S(e.replace(ct,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[z]=!0,e}function o(e){var t=R.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),r=e.length;r--;)b.attrHandle[n[r]]=t}function u(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function l(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function a(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function s(){}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=G++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,u){var l,a,c=[j,i];if(u){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if(a=t[z]||(t[z]={}),(l=a[r])&&l[0]===j&&l[1]===i)return c[2]=l[2];if(a[r]=c,c[2]=e(t,n,u))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var o=0,i=n.length;i>o;o++)t(e,n[o],r);return r}function m(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(i=e[l])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(l));return u}function y(e,t,n,o,i,u){return o&&!o[z]&&(o=y(o)),i&&!i[z]&&(i=y(i,u)),r(function(r,u,l,a){var c,f,s,d=[],p=[],h=u.length,y=r||g(t||"*",l.nodeType?[l]:l,[]),v=!e||!r&&t?y:m(y,d,e,l,a),w=n?i||(r?e:h||o)?[]:u:v;if(n&&n(v,w,l,a),o)for(c=m(w,p),o(c,[],l,a),f=c.length;f--;)(s=c[f])&&(w[p[f]]=!(v[p[f]]=s));if(r){if(i||e){if(i){for(c=[],f=w.length;f--;)(s=w[f])&&c.push(v[f]=s);i(null,w=[],c,a)}for(f=w.length;f--;)(s=w[f])&&(c=i?tt(r,s):d[f])>-1&&(r[c]=!(u[c]=s))}}else w=m(w===u?w.splice(h,w.length):w),i?i(null,u,w,a):_.apply(u,w)})}function v(e){for(var t,n,r,o=e.length,i=b.relative[e[0].type],u=i||b.relative[" "],l=i?1:0,a=p(function(e){return e===t},u,!0),c=p(function(e){return tt(t,e)>-1},u,!0),f=[function(e,n,r){var o=!i&&(r||n!==D)||((t=n).nodeType?a(e,n,r):c(e,n,r));return t=null,o}];o>l;l++)if(n=b.relative[e[l].type])f=[p(h(f),n)];else{if(n=b.filter[e[l].type].apply(null,e[l].matches),n[z]){for(r=++l;o>r&&!b.relative[e[r].type];r++);return y(l>1&&h(f),l>1&&d(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(ct,"$1"),n,r>l&&v(e.slice(l,r)),o>r&&v(e=e.slice(r)),o>r&&d(e))}f.push(n)}return h(f)}function w(e,n){var o=n.length>0,i=e.length>0,u=function(r,u,l,a,c){var f,s,d,p=0,h="0",g=r&&[],y=[],v=D,w=r||i&&b.find.TAG("*",c),N=j+=null==v?1:Math.random()||.1,x=w.length;for(c&&(D=u!==R&&u);h!==x&&null!=(f=w[h]);h++){if(i&&f){for(s=0;d=e[s++];)if(d(f,u,l)){a.push(f);break}c&&(j=N)}o&&((f=!d&&f)&&p--,r&&g.push(f))}if(p+=h,o&&h!==p){for(s=0;d=n[s++];)d(g,y,u,l);if(r){if(p>0)for(;h--;)g[h]||y[h]||(y[h]=Y.call(a));y=m(y)}_.apply(a,y),c&&!r&&y.length>0&&p+n.length>1&&t.uniqueSort(a)}return c&&(j=N,D=v),g};return o?r(u):u}var N,x,b,C,E,T,A,S,D,L,B,I,R,q,P,k,H,M,O,z="sizzle"+1*new Date,F=e.document,j=0,G=0,U=n(),V=n(),X=n(),J=function(e,t){return e===t&&(B=!0),0},K=1<<31,Q={}.hasOwnProperty,W=[],Y=W.pop,Z=W.push,_=W.push,et=W.slice,tt=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",ot="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=ot.replace("w","w#"),ut="\\["+rt+"*("+ot+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+rt+"*\\]",lt=":("+ot+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ut+")*)|.*)\\)|)",at=new RegExp(rt+"+","g"),ct=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ft=new RegExp("^"+rt+"*,"+rt+"*"),st=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),dt=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),pt=new RegExp(lt),ht=new RegExp("^"+it+"$"),gt={ID:new RegExp("^#("+ot+")"),CLASS:new RegExp("^\\.("+ot+")"),TAG:new RegExp("^("+ot.replace("w","w*")+")"),ATTR:new RegExp("^"+ut),PSEUDO:new RegExp("^"+lt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,Nt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),bt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ct=function(){I()};try{_.apply(W=et.call(F.childNodes),F.childNodes),W[F.childNodes.length].nodeType}catch(Et){_={apply:W.length?function(e,t){Z.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},I=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:F;return r!==R&&9===r.nodeType&&r.documentElement?(R=r,q=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ct,!1):n.attachEvent&&n.attachEvent("onunload",Ct)),P=!E(r),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=$.test(r.getElementsByClassName),x.getById=o(function(e){return q.appendChild(e).id=z,!r.getElementsByName||!r.getElementsByName(z).length}),x.getById?(b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},b.filter.ID=function(e){var t=e.replace(xt,bt);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(xt,bt);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},b.find.CLASS=x.getElementsByClassName&&function(e,t){return P?t.getElementsByClassName(e):void 0},H=[],k=[],(x.qsa=$.test(r.querySelectorAll))&&(o(function(e){q.appendChild(e).innerHTML="<a id='"+z+"'></a><select id='"+z+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll("[id~="+z+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+z+"+*").length||k.push(".#.+[+~]")}),o(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")})),(x.matchesSelector=$.test(M=q.matches||q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&o(function(e){x.disconnectedMatch=M.call(e,"div"),M.call(e,"[s!='']:x"),H.push("!=",lt)}),k=k.length&&new RegExp(k.join("|")),H=H.length&&new RegExp(H.join("|")),t=$.test(q.compareDocumentPosition),O=t||$.test(q.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},J=t?function(e,t){if(e===t)return B=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===F&&O(F,e)?-1:t===r||t.ownerDocument===F&&O(F,t)?1:L?tt(L,e)-tt(L,t):0:4&n?-1:1)}:function(e,t){if(e===t)return B=!0,0;var n,o=0,i=e.parentNode,l=t.parentNode,a=[e],c=[t];if(!i||!l)return e===r?-1:t===r?1:i?-1:l?1:L?tt(L,e)-tt(L,t):0;if(i===l)return u(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;a[o]===c[o];)o++;return o?u(a[o],c[o]):a[o]===F?-1:c[o]===F?1:0},r):R},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==R&&I(e),n=n.replace(dt,"='$1']"),!(!x.matchesSelector||!P||H&&H.test(n)||k&&k.test(n)))try{var r=M.call(e,n);if(r||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return t(n,R,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==R&&I(e),O(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==R&&I(e);var n=b.attrHandle[t.toLowerCase()],r=n&&Q.call(b.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==r?r:x.attributes||!P?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,o=0;if(B=!x.detectDuplicates,L=!x.sortStable&&e.slice(0),e.sort(J),B){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return L=null,e},C=t.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},b=t.selectors={cacheLength:50,createPseudo:r,match:gt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,bt),e[3]=(e[3]||e[4]||e[5]||"").replace(xt,bt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return gt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xt,bt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(o){var i=t.attr(o,e);return null==i?"!="===n:n?(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i.replace(at," ")+" ").indexOf(r)>-1:"|="===n?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,f,s,d,p,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l;if(m){if(i){for(;g;){for(s=t;s=s[g];)if(l?s.nodeName.toLowerCase()===y:1===s.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(f=m[z]||(m[z]={}),c=f[e]||[],p=c[0]===j&&c[1],d=c[0]===j&&c[2],s=p&&m.childNodes[p];s=++p&&s&&s[g]||(d=p=0)||h.pop();)if(1===s.nodeType&&++d&&s===t){f[e]=[j,p,d];break}}else if(v&&(c=(t[z]||(t[z]={}))[e])&&c[0]===j)d=c[1];else for(;(s=++p&&s&&s[g]||(d=p=0)||h.pop())&&((l?s.nodeName.toLowerCase()!==y:1!==s.nodeType)||!++d||(v&&((s[z]||(s[z]={}))[e]=[j,d]),s!==t)););return d-=o,d===r||d%r===0&&d/r>=0}}},PSEUDO:function(e,n){var o,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[z]?i(n):i.length>1?(o=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,o=i(e,n),u=o.length;u--;)r=tt(e,o[u]),e[r]=!(t[r]=o[u])}):function(e){return i(e,0,o)}):i}},pseudos:{not:r(function(e){var t=[],n=[],o=A(e.replace(ct,"$1"));return o[z]?r(function(e,t,n,r){for(var i,u=o(e,null,r,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))}):function(e,r,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xt,bt),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return ht.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xt,bt).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===q},focus:function(e){return e===R.activeElement&&(!R.hasFocus||R.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},b.pseudos.nth=b.pseudos.eq;for(N in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[N]=l(N);for(N in{submit:!0,reset:!0})b.pseudos[N]=a(N);s.prototype=b.filters=b.pseudos,b.setFilters=new s,T=t.tokenize=function(e,n){var r,o,i,u,l,a,c,f=V[e+" "];if(f)return n?0:f.slice(0);for(l=e,a=[],c=b.preFilter;l;){(!r||(o=ft.exec(l)))&&(o&&(l=l.slice(o[0].length)||l),a.push(i=[])),r=!1,(o=st.exec(l))&&(r=o.shift(),i.push({value:r,type:o[0].replace(ct," ")}),l=l.slice(r.length));for(u in b.filter)!(o=gt[u].exec(l))||c[u]&&!(o=c[u](o))||(r=o.shift(),i.push({value:r,type:u,matches:o}),l=l.slice(r.length));if(!r)break}return n?l.length:l?t.error(e):V(e,a).slice(0)},A=t.compile=function(e,t){var n,r=[],o=[],i=X[e+" "];if(!i){for(t||(t=T(e)),n=t.length;n--;)i=v(t[n]),i[z]?r.push(i):o.push(i);i=X(e,w(o,r)),i.selector=e}return i},S=t.select=function(e,t,n,r){var o,i,u,l,a,c="function"==typeof e&&e,s=!r&&T(e=c.selector||e);if(n=n||[],1===s.length){if(i=s[0]=s[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&x.getById&&9===t.nodeType&&P&&b.relative[i[1].type]){if(t=(b.find.ID(u.matches[0].replace(xt,bt),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=gt.needsContext.test(e)?0:i.length;o--&&(u=i[o],!b.relative[l=u.type]);)if((a=b.find[l])&&(r=a(u.matches[0].replace(xt,bt),wt.test(i[0].type)&&f(t.parentNode)||t))){if(i.splice(o,1),e=r.length&&d(i),!e)return _.apply(n,r),n;break}}return(c||A(e,s))(r,t,!P,n,wt.test(e)&&f(t.parentNode)||t),n},x.sortStable=z.split("").sort(J).join("")===z,x.detectDuplicates=!!B,I(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(R.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||i(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.Sizzle=t}(window);