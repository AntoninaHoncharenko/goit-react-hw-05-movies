"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{687:function(t,r,e){e.d(r,{Hx:function(){return v},Pv:function(){return o},Y5:function(){return p},uV:function(){return f},wr:function(){return i}});var n=e(861),a=e(757),c=e.n(a),u=e(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="2b7f816e736d5b5ccbfcea974c6e28fa",i=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(r));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},854:function(t,r,e){e.d(r,{a:function(){return c}});var n=e(691),a=e(184),c=function(){return(0,a.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#000000"]})}},61:function(t,r,e){e.d(r,{e:function(){return s}});var n=e(87),a=e(689),c=e(184),u=function(t){var r=t.movie,e=(0,a.TH)(),u=r.title,s=r.name,i=r.id,o=r.poster_path;return(0,c.jsx)("li",{children:(0,c.jsxs)(n.OL,{to:"/movies/".concat(i),state:{from:e},children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:u||s}),(0,c.jsx)("p",{children:u||s})]})})},s=function(t){var r=t.movies;return(0,c.jsx)("ul",{children:r.map((function(t){return(0,c.jsx)(u,{movie:t},t.id)}))})}},544:function(t,r,e){e.r(r);var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(687),o=e(61),p=e(854),f=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),h=l[0],d=l[1];return(0,s.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,i.wr)();case 4:r=t.sent,c(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trenting today"}),h&&(0,f.jsx)(p.a,{}),(0,f.jsx)(o.e,{movies:e})]})}}}]);
//# sourceMappingURL=544.c766b821.chunk.js.map