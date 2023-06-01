"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{43:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,o,s,c,p,u,d,l=t(5861),h=t(9439),f=t(4687),x=t.n(f),v=t(2791),g=t(7689),m=t(1087),j=(t(7665),t(4952)),w=t(168),b=t(8789),Z=b.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  padding-right: 30px;\n  padding-left: 30px;\n  padding-top: 30px;\n"]))),k=b.ZP.img(a||(a=(0,w.Z)(["\n  width: 300px;\n  height: auto;\n  object-fit: cover;\n  display: block;\n  margin-right: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    transform: scale(1.05);\n    \n  }\n"]))),y=b.ZP.h1(i||(i=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 800;\n  margin-bottom: 10px;\n"]))),_=b.ZP.p(o||(o=(0,w.Z)(["\n  color: darkgrey;\n"]))),P=b.ZP.h3(s||(s=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 800;\n  margin-top: 10px;\n  margin-bottom: 5px;\n"]))),S=b.ZP.div(c||(c=(0,w.Z)(["\n  margin-top: 22px;\n"]))),A=b.ZP.nav(p||(p=(0,w.Z)(["\n  display: flex;\n"]))),U=(0,b.ZP)(m.OL)(u||(u=(0,w.Z)(["\n  margin-right: 20px;\n  text-transform: uppercase;\n"]))),T=b.ZP.button(d||(d=(0,w.Z)(["\n  font-size: 16px;\n  text-transform: uppercase;\n  width: 90px;\n  margin-top: 10px;\n  padding: 6px;\n  /* padding-top: 4px;\n  padding-bottom: 4px; */\n  border: none;\n  /* padding-right: 4px; */\n  border-radius: 5px;\n  background-color: #fff;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.3s;\n  white-space: nowrap; \n  border: 1px solid grey; \n  \n\n  &:hover {\n    color: grey;\n\n    &::before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 3px;\n      background-color: blue;\n      bottom: -3px;\n      left: 0;\n      animation: underlineAnim 0.3s forwards;\n    }\n  }\n\n  @keyframes underlineAnim {\n    0% {\n      width: 0;\n    }\n    100% {\n      width: 100%;\n    }\n  }\n"]))),z=t(8721),C=t(184),I=function(n){var e=n.movieInfo;if(!e)return null;var t,r,a=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):z;return(0,C.jsx)("div",{children:(0,C.jsx)("div",{children:(0,C.jsxs)(Z,{children:[(0,C.jsx)("div",{children:(0,C.jsx)(k,{alt:e.title,src:a,width:100})}),(0,C.jsxs)("div",{children:[(0,C.jsxs)(y,{children:[e.title,(0,C.jsxs)("p",{children:["(",(r=e.release_date,new Date(r).getFullYear()),")"]})]}),(0,C.jsxs)(_,{children:[" User Score: ",~~(10*e.vote_average),"%"]}),(0,C.jsx)(P,{children:"Overview"}),(0,C.jsx)("p",{children:e.overview}),(0,C.jsxs)("div",{children:[(0,C.jsx)(P,{children:"Genres"}),(0,C.jsx)("p",{children:(t=e.genres,t.map((function(n){return n.name})).join(", "))})]}),(0,C.jsxs)(S,{children:[(0,C.jsx)(P,{children:"Additional Information"}),(0,C.jsxs)(A,{children:[(0,C.jsx)(U,{to:"cast",children:(0,C.jsx)(T,{children:"Cast"})}),(0,C.jsx)(U,{to:"reviews",children:(0,C.jsx)(T,{children:"Reviews"})})]})]})]})]})})})},L=function(){var n,e,t=(0,g.TH)(),r=(0,v.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),a=(0,g.UO)().movieId,i=(0,v.useState)(null),o=(0,h.Z)(i,2),s=o[0],c=o[1],p=(0,v.useState)(!1),u=(0,h.Z)(p,2),d=u[0],f=u[1],w=(0,v.useState)(null),b=(0,h.Z)(w,2),Z=b[0],k=b[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,l.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.TP)(a);case 3:e=n.sent,c(e),f(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),k(n.t0),f(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),d?(0,C.jsx)("div",{children:"Loading..."}):Z?(0,C.jsxs)("div",{children:["Error: ",Z.message]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{children:(0,C.jsx)(I,{movieInfo:s})}),(0,C.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",marginLeft:"30px"},children:(0,C.jsx)(m.rU,{to:r.current,style:{display:"inline-block",padding:"15px 30px",backgroundColor:"rgba(0, 121, 191, 0.8)",color:"white",textDecoration:"none",borderRadius:"5px",fontSize:"24px",marginTop:"20px",textTransform:"uppercase"},children:"Go back"})}),(0,C.jsx)("ul",{}),(0,C.jsx)(v.Suspense,{fallback:(0,C.jsx)("div",{children:(0,C.jsx)("span",{className:"loader"})}),children:(0,C.jsx)(g.j3,{})})]})}},4952:function(n,e,t){t.d(e,{Hg:function(){return c},TP:function(){return u},XT:function(){return p},tx:function(){return h},zv:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),s="a148ed5961285512fd3954af576af4a0",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:s,language:"en-US"},headers:{Accept:"application/json"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:s,language:"en-US",page:1,include_adult:!1,query:e},headers:{Accept:"application/json"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function u(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US&api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(t,{headers:{Accept:"application/json"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}var l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),n.prev=1,n.next=4,o.Z.get(t,{params:{api_key:s,language:"en-US"},headers:{Accept:"application/json"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),n.prev=1,n.next=4,o.Z.get(t,{params:{api_key:s,language:"en-US"},headers:{Accept:"application/json"}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},8721:function(n,e,t){n.exports=t.p+"static/media/NoImage.f836f354b20df77f4679.jpg"}}]);
//# sourceMappingURL=43.3aef1505.chunk.js.map