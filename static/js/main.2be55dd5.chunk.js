(this["webpackJsonpdiscord-webhook-ui-react"]=this["webpackJsonpdiscord-webhook-ui-react"]||[]).push([[0],{49:function(e,n,s){"use strict";s.r(n);var c=s(3),t=s(4),a=s.n(t),r=s(18),o=s(19),i=s(5),d=s(23),l=s(22),u=(s(29),s(0)),b=s.n(u),h=s(53),j=s(9),g=s(20),f=s.n(g),M=function(e){Object(d.a)(s,e);var n=Object(l.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=n.call(this,e)).sendMessage=c.sendMessage.bind(Object(i.a)(c)),c}return Object(o.a)(s,[{key:"sendMessage",value:function(e){f()({method:"POST",url:"https://discord.com/api/webhooks/786068461251198996/MR6JmvED_ujJ7iFLHgE4ahnQsjDfsrQf40HFqYEHWVewlPChN9eM_6iEJIKxbnM4tMrt",data:{content:e}}).then((function(){j.a.success("Message sent!")})).catch((function(){j.a.error("Message failed to send!")}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(b.a.Fragment,{children:[Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!vc say blue")},color:"danger",children:"Blue"}),Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!vc say purple")},color:"danger",children:"Purple"}),Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!bossTimer sync")},color:"danger",children:"Resync"}),Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!bossTimer phase")},color:"danger",children:"Next phase"}),Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!bossTimer start will")},color:"danger",children:"Start timer (Will)"}),Object(c.jsx)(h.a,{onClick:function(){e.sendMessage("!bossTimer end")},color:"danger",children:"End"})]})}}]),s}(b.a.Component);a.a.render(Object(c.jsx)(M,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2be55dd5.chunk.js.map