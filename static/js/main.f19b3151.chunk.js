(this["webpackJsonpvk-apps-currency"]=this["webpackJsonpvk-apps-currency"]||[]).push([[0],{125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),r=c.n(s),i=c(16),a=c.n(i),o=c(24),d=c.n(o),j=c(28),b=c(20),l=c(9),h=(c(123),c(5)),p=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(h.jsxs)(l.i,{id:t,children:[Object(h.jsx)(l.j,{children:"Example"}),n&&Object(h.jsx)(l.g,{header:Object(h.jsx)(l.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(h.jsx)(l.e,{before:n.photo_200?Object(h.jsx)(l.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(h.jsx)(l.g,{header:Object(h.jsx)(l.h,{mode:"secondary",children:"Navigation Example"}),children:Object(h.jsx)(l.f,{children:Object(h.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},u=c.p+"static/media/persik.ae9f0072.png",O=(c(125),function(e){return Object(h.jsxs)(l.i,{id:e.id,children:[Object(h.jsx)(l.j,{left:Object(h.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(h.jsx)("img",{className:"Persik",src:u,alt:"Persik The Cat"})]})}),f=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(null),i=Object(b.a)(r,2),o=i[0],u=i[1],f=Object(n.useState)(Object(h.jsx)(l.l,{size:"large"})),m=Object(b.a)(f,2),x=m[0],g=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){s(e.currentTarget.dataset.to)};return Object(h.jsx)(l.a,{children:Object(h.jsx)(l.b,{children:Object(h.jsxs)(l.m,{activePanel:c,popout:x,children:[Object(h.jsx)(p,{id:"home",fetchedUser:o,go:k}),Object(h.jsx)(O,{id:"persik",go:k})]})})})};a.a.send("VKWebAppInit"),r.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),a.a.send("VKWebAppJoinGroup",{207723345:1})}},[[126,1,2]]]);
//# sourceMappingURL=main.f19b3151.chunk.js.map