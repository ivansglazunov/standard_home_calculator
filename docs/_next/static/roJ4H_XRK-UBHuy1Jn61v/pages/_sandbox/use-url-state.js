(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"9Jkg":function(n,t,e){n.exports=e("oh+g")},BmGP:function(n,t,e){"use strict";e.r(t);var u=e("9Jkg"),r=e.n(u),o=e("doui"),a=e("q1tI"),i=e.n(a),c=e("Oe4F"),l=e("SMrj"),s=i.a.createElement;t.default=Object(l.a)(function(){var n=Object(c.a)("abc",{x:1}),t=Object(o.a)(n,2),e=t[0].x,u=t[1],a=Object(c.a)("def",{y:1}),l=Object(o.a)(a,2),f=l[0].y,d=l[1];return s(i.a.Fragment,null,s("div",null,s("pre",null,s("code",null,"const [{ x }, setValue] = useUrlState('abc', { x: 1 });")),s("div",null,r()({x:e},null,1)),s("button",{onClick:function(){return u({x:e+1})}},"setValue({ x: x + 1 })")),s("div",null,s("pre",null,s("code",null,"const [{ y }, setValue] = useUrlState('def', { y: 1 });")),s("div",null,r()({y:f},null,1)),s("button",{onClick:function(){return d({y:f+1})}},"setValue({ y: y + 1 })")))})},Oe4F:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var u=e("vYYK"),r=e("9Jkg"),o=e.n(r),a=e("zrwo"),i=e("nOHt"),c={};function l(n,t){var e=Object(i.useRouter)()||c,r=e.query,l=e.pathname,s=e.push;return[r&&r[n]?JSON.parse(String(r[n])):t,function(t){s({pathname:l,query:Object(a.a)({},r,Object(u.a)({},n,o()(t)))})}]}},doui:function(n,t,e){"use strict";var u=e("p0XB"),r=e.n(u);var o=e("XXOK"),a=e.n(o);function i(n,t){return function(n){if(r()(n))return n}(n)||function(n,t){var e=[],u=!0,r=!1,o=void 0;try{for(var i,c=a()(n);!(u=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);u=!0);}catch(l){r=!0,o=l}finally{try{u||null==c.return||c.return()}finally{if(r)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(t,"a",function(){return i})},e9F1:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_sandbox/use-url-state",function(){return e("BmGP")}])},"oh+g":function(n,t,e){var u=e("WEpk"),r=u.JSON||(u.JSON={stringify:JSON.stringify});n.exports=function(n){return r.stringify.apply(r,arguments)}}},[["e9F1",1,0]]]);