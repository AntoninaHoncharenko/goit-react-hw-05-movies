"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1687:function(t,n,r){r.d(n,{Hx:function(){return d},Pv:function(){return s},Y5:function(){return p},uV:function(){return f},wr:function(){return o}});var e=r(5861),a=r(7757),c=r.n(a),u=r(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="2b7f816e736d5b5ccbfcea974c6e28fa",o=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},3387:function(t,n,r){r.r(n),r.d(n,{default:function(){return _}});var e,a,c,u,i,o=r(5861),s=r(9439),p=r(7757),f=r.n(p),d=r(7689),h=r(2791),l=r(1687),v=r(9245),x=r(168),m=r(6444),w=m.ZP.ul(e||(e=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 16px;\n"]))),Z=m.ZP.li(a||(a=(0,x.Z)(["\n  width: calc((1248px - 96px) / 7);\n"]))),g=m.ZP.img(c||(c=(0,x.Z)(["\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 4px;\n"]))),b=m.ZP.p(u||(u=(0,x.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 6px;\n"]))),k=m.ZP.p(i||(i=(0,x.Z)(["\n  font-size: 18px;\n"]))),y=r(184),_=function(){var t=(0,d.UO)().movieId,n=(0,h.useState)([]),r=(0,s.Z)(n,2),e=r[0],a=r[1],c=(0,h.useState)(!1),u=(0,s.Z)(c,2),i=u[0],p=u[1];if((0,h.useEffect)((function(){function n(){return(n=(0,o.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,l.uV)(t);case 4:r=n.sent,a(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),!(e.length<1))return(0,y.jsxs)(y.Fragment,{children:[i&&(0,y.jsx)(v.a,{}),(0,y.jsx)(w,{children:e.map((function(t){var n=t.name,r=t.character,e=t.profile_path,a=t.id;return(0,y.jsxs)(Z,{children:[(0,y.jsx)(g,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png",alt:n}),(0,y.jsx)(b,{children:n}),(0,y.jsx)(k,{children:r})]},a)}))})]})}},9245:function(t,n,r){r.d(n,{a:function(){return o}});var e,a=r(5243),c=r(168),u=r(6444).ZP.div(e||(e=(0,c.Z)(["\n  width: 60px;\n  margin: 0 auto 20px;\n"]))),i=r(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.iT,{height:60,width:60,color:"#008080",wrapperStyle:{},visible:!0,ariaLabel:"oval-loading",secondaryColor:"#a6d3d3",strokeWidth:5,strokeWidthSecondary:5})})}}}]);
//# sourceMappingURL=387.dc7b78e7.chunk.js.map