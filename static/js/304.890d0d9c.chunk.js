"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{1687:function(n,t,r){r.d(t,{Hx:function(){return d},Pv:function(){return s},Y5:function(){return p},uV:function(){return f},wr:function(){return u}});var e=r(5861),a=r(7757),c=r.n(a),i=r(3263);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="2b7f816e736d5b5ccbfcea974c6e28fa",u=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9245:function(n,t,r){r.d(t,{a:function(){return u}});var e,a=r(5243),c=r(168),i=r(6444).ZP.div(e||(e=(0,c.Z)(["\n  width: 60px;\n  margin: 0 auto 20px;\n"]))),o=r(184),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.iT,{height:60,width:60,color:"#008080",wrapperStyle:{},visible:!0,ariaLabel:"oval-loading",secondaryColor:"#a6d3d3",strokeWidth:5,strokeWidthSecondary:5})})}},8933:function(n,t,r){r.d(t,{e:function(){return m}});var e,a,c,i,o=r(1087),u=r(7689),s=r(168),p=r(6444),f=p.ZP.li(e||(e=(0,s.Z)(["\n  width: calc((1248px - 32px) / 3);\n  border-radius: 4px;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 12px 4px #198d8d;\n  }\n"]))),d=p.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 574px;\n  border-radius: 4px;\n  margin-bottom: 6px;\n  object-fit: cover;\n"]))),x=p.ZP.p(c||(c=(0,s.Z)(["\n  font-size: 22px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 3px;\n"]))),h=r(184),l=function(n){var t=n.movie,r=(0,u.TH)(),e=t.title,a=t.name,c=t.id,i=t.poster_path;return(0,h.jsx)(f,{children:(0,h.jsxs)(o.OL,{to:"/movies/".concat(c),state:{from:r},children:[(0,h.jsx)(d,{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://www.ena.org/UCommerce/Css/Sitefinity/images/image-not-found.png",alt:e||a}),(0,h.jsx)(x,{children:e||a})]})})},v=p.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px 16px;\n  margin: 0px auto;\n"]))),m=function(n){var t=n.movies;return(0,h.jsx)(v,{children:t.map((function(n){return(0,h.jsx)(l,{movie:n},n.id)}))})}},304:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a=r(5861),c=r(9439),i=r(7757),o=r.n(i),u=r(2791),s=r(1687),p=r(8933),f=r(9245),d=r(168),x=r(6444).ZP.h2(e||(e=(0,d.Z)(["\n  text-align: center;\n  font-size: 32px;\n  text-shadow: 2px 2px 20px #198d8d;\n  margin-bottom: 20px;\n"]))),h=r(2240),l=r(184),v=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],i=(0,u.useState)(!1),d=(0,c.Z)(i,2),v=d[0],m=d[1];return(0,u.useEffect)((function(){function n(){return(n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,s.wr)();case 4:t=n.sent,e(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,l.jsxs)(h.x,{width:"1280px",m:"0 auto",p:"20px 16px",children:[(0,l.jsx)(x,{children:"Trenting today"}),v&&(0,l.jsx)(f.a,{}),(0,l.jsx)(p.e,{movies:r})]})}}}]);
//# sourceMappingURL=304.890d0d9c.chunk.js.map