(function(t){function e(e){for(var r,a,u=e[0],c=e[1],l=e[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={app:0},o=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4fc4694e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/photos/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"4fc1":function(t,e,n){},"7faf":function(t,e,n){"use strict";n("b8ff")},b8ff:function(t,e,n){},c219:function(t,e,n){"use strict";n("4fc1")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("7faf"),n("2877")),u={},c=Object(a["a"])(u,i,o,!1,null,null,null),l=c.exports,s=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"home",attrs:{"infinite-scroll-disabled":"disabled"}},t._l(t.imgList,(function(e){return n("div",{key:e.id,staticClass:"item-img"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-document-copy",circle:""},on:{click:function(n){return t.copy(e)}}}),n("a",{attrs:{href:t.getLink(e),title:"点击打开原图",target:"_blank"}},[n("el-image",{attrs:{src:t.thumbnail(e.download_url),lazy:""}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"image-slot",attrs:{slot:"placeholder","element-loading-text":"...","element-loading-spinner":"el-icon-loading","element-loading-background":"#f3f3f3"},slot:"placeholder"}),n("div",[t._v("1111")])])],1)],1)})),0)},f=[],p=(n("99af"),n("d81d"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),m=n("d4ec"),h=n("bee2"),v=n("262e"),g=n("2caf"),b=n("9ab4"),y=n("1b40"),w=n("bc3a"),k=n.n(w),j=function(t){Object(v["a"])(n,t);var e=Object(g["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.loading=!1,t.imgList=[],t.page=1,t.limit=50,t}return Object(h["a"])(n,[{key:"getLink",value:function(t){var e=t.download_url.split("/")[4],n=t.download_url.split("/id/")[0];return"".concat(n,"/id/").concat(e,"/").concat(t.width,"/").concat(t.height)}},{key:"copy",value:function(t){var e=document.createElement("input");e.setAttribute("readonly","readonly"),e.setAttribute("value",t.download_url),document.body.appendChild(e),e.select();document.execCommand("copy");document.body.removeChild(e),this.$message({message:"复制成功",type:"success"})}},{key:"thumbnail",value:function(t){var e=t.split("/")[4],n=t.split("/id/")[0];return n+"/id/"+e+"/400/200"}},{key:"getList",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,k.a.get("https://picsum.photos/v2/list",{params:{page:this.page,limit:this.limit}});case 3:e=t.sent,this.imgList=this.imgList.concat(e.data||[]),this.loading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.imgList=[],this.getList()}},{key:"load",value:function(){this.page=this.page+1,this.getList()}},{key:"disabled",get:function(){return this.loading}},{key:"count",get:function(){return this.imgList.length}},{key:"previewSrcList",get:function(){return this.imgList.map((function(t){var e=t.download_url.split("/")[4],n=t.download_url.split("/id/")[0];return"".concat(n,"/id/").concat(e,"/").concat(t.width,"/").concat(t.height)}))}}]),n}(y["b"]);j=Object(b["a"])([Object(y["a"])({components:{}})],j);var O=j,_=O,L=(n("c219"),Object(a["a"])(_,d,f,!1,null,null,null)),x=L.exports;r["default"].use(s["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new s["a"]({mode:"history",base:"/photos/",routes:P}),S=C,E=n("2f62");r["default"].use(E["a"]);var T=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("5c96"),M=n.n(A);n("0fae");r["default"].use(M.a),r["default"].config.productionTip=!1,new r["default"]({router:S,store:T,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.f1c19bcd.js.map