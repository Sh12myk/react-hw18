(this["webpackJsonpreact-hw18"]=this["webpackJsonpreact-hw18"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(9),n(10),n(11),n(3)),o=n(0),u=function(t){var e=Math.floor(t/60);e<10&&(e="0"+e);var n=t%60;return n<10&&(n="0"+n),"".concat(e,":").concat(n)},j=function(t){var e=t.time,n=t.autostart,r=t.step,a=Object(c.useState)(e),i=Object(s.a)(a,2),j=i[0],l=i[1],b=Object(c.useState)(n),f=Object(s.a)(b,2),d=f[0],h=f[1];return Object(c.useEffect)((function(){if(j>0&&d){var t=null;return!0===d&&(t=setInterval((function(){l(j-r)}),1e3*r)),function(){clearInterval(t)}}}),[j,d,r]),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsx)("time",{className:"time",children:u(j)}),Object(o.jsx)("button",{onClick:function(){return h(!d)},children:d?"stop":"start"})]})})};var l=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{time:"180",step:"1",autostart:!1}),Object(o.jsx)(j,{time:"700",step:"2",autostart:!0})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.c1cafe9c.chunk.js.map