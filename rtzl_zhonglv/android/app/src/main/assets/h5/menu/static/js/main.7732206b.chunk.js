(this.webpackJsonpapph5=this.webpackJsonpapph5||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),i=n(11),s=n.n(i),o=(n(76),n(21)),u=n(22),j=n(27),p=n(26),b=(n(77),n(78),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"app-container",children:Object(c.jsx)("div",{className:"app-contents",children:this.props.children})})}}]),n}(r.a.Component)),l=n(39),d={traceBack:function(e,t){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage&&("string"===typeof t?window.ReactNativeWebView.postMessage(JSON.stringify({etype:e,info:t})):t?window.ReactNativeWebView.postMessage(JSON.stringify(Object(l.a)({etype:e},t))):window.ReactNativeWebView.postMessage(JSON.stringify({etype:e})))},init:function(e){document.addEventListener("message",(function(t){var n=JSON.parse(t.data);if("data"===n.etype){var c=Object(l.a)({},n);delete c.etype,e.setState(Object(l.a)({},c))}else if("event"===n.etype){var a=n.event,r=n.args;"function"===typeof e[a]&&e[a](r)}}))},dateToString:function(e,t){if(!e)return alert("\u6ca1\u6709\u4e00\u4e2a\u65e5\u671f"),"";var n=e.getFullYear(),c=e.getMonth()+1,a=e.getDate(),r=n+"/"+d.mendUpNumber(c)+"/"+d.mendUpNumber(a);if(t){var i=t.getFullYear(),s=t.getMonth()+1,o=t.getDate();r+=" \u81f3 "+i+"/"+d.mendUpNumber(s)+"/"+d.mendUpNumber(o)}return r},executeNumber:function(e){return e<10?"0"+e:e}},f=d,O=(n(79),n(106)),h=(n(104),n(107)),v=n(108),m=n(109),x=n(110),y=n(111),g=function(e){switch(e){case"add":return Object(c.jsx)(h.a,{});case"scan":return Object(c.jsx)(v.a,{});default:return Object(c.jsx)(m.a,{})}},w=function(e){var t=e.addons;if(t instanceof Array&&t.length){var n=t.map((function(e,t){var n=e.fn;return Object(c.jsxs)("li",{onClick:function(){"function"===typeof n&&n()},children:[g(e.name),Object(c.jsx)("span",{children:e.text})]},"ia".concat(t))}));return Object(c.jsx)(O.a,{overlay:Object(c.jsx)("ul",{className:"rtmcc-rnweb-top-title-right-addons",children:n}),placement:"bottomLeft",arrow:!0,children:Object(c.jsx)(x.a,{})})}},N=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=(t.addons,t.canBack);return Object(c.jsxs)("div",{className:"rtmcc-rnweb-top-title",children:[a?Object(c.jsx)(y.a,{onClick:function(){!function(e){f.traceBack("back-btn");var t=e.onPressBack;"function"===typeof t&&t()}(e.props)}}):null,Object(c.jsx)("p",{children:n}),w(this.props)]})}}]),n}(r.a.Component),k=n(112),B=n(113),C=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(b,{children:[Object(c.jsx)(N,{title:"\u4e3b\u83dc\u5355"}),Object(c.jsxs)("div",{className:"menu-block",onClick:function(){return f.traceBack("input")},children:[Object(c.jsx)(k.a,{}),Object(c.jsx)("p",{children:"\u6570\u636e\u5f55\u5165"})]}),Object(c.jsxs)("div",{className:"menu-block",onClick:function(){return f.traceBack("settings")},children:[Object(c.jsx)(B.a,{}),Object(c.jsx)("p",{children:"\u8bbe\u7f6e"})]})]})}}]),n}(r.a.Component);s.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.7732206b.chunk.js.map