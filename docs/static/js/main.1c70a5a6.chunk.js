(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{16:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(16),n(2)),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})};d.protoType={setCategories:o.a.func.isRequired};var p=n(11),l=n(6),b=n.n(l),f=n(9),O=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=ZGwME5Q4TCWOJRkCjRuBi4iGmPojlO8L"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},x=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){O(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:e}),a&&Object(j.jsx)("p",{children:"Loading"}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(j.jsx)(h,Object(p.a)({},t),t.id)}))})]})},g=function(){var t=Object(r.useState)(["Marvel"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(x,{category:t},t)}))})]})};a.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1c70a5a6.chunk.js.map