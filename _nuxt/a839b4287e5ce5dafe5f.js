(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,r){var content=r(251);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("08300032",content,!0,{sourceMap:!1})},250:function(e,t,r){"use strict";var n=r(200);r.n(n).a},251:function(e,t,r){(t=r(22)(!1)).push([e.i,".wrapper[data-v-8b27e51e]{margin:12px auto}.wrapper .award-title[data-v-8b27e51e]{font-size:32px;font-weight:bolder}.wrapper .award-card[data-v-8b27e51e]{width:90%;padding:5%;cursor:pointer;box-shadow:0 0 20px rgba(73,72,72,.2);transition:.2s linear;border-radius:25px}.wrapper .award-card .card[data-v-8b27e51e]{max-height:250px!important}.wrapper .award-card .card[data-v-8b27e51e]:hover{transform:scale(1.01);box-shadow:0 0 20px hsla(0,0%,39.2%,.5)}.wrapper .award-card .card h5[data-v-8b27e51e]{font-size:20px}.wrapper .award-card .award-image[data-v-8b27e51e]{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image *[data-v-8b27e51e]{padding:0!important}.wrapper .award-card .award-image .progressive-image-main[data-v-8b27e51e],.wrapper .award-card .award-image .progressive-image-placeholder[data-v-8b27e51e],.wrapper .award-card .award-image .progressive-image-wrapper[data-v-8b27e51e]{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image img[data-v-8b27e51e]{width:100%;-o-object-fit:cover;object-fit:cover}.wrapper .award-card .card-content[data-v-8b27e51e]{background:transparent;padding:0 5px;margin:0;font-size:12px;font-weight:400;text-align:center;color:#000}",""]),e.exports=t},322:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(14),r(39),r(37);var n=r(5),d=r(38),c=r.n(d),o=r(192),w={fetch:function(e){var t=e.store;return c.a.get("https://api.github.com/repos/stacsnssce/webdata/contents/awards").then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=r.data,e.t0=t,e.next=4,Promise.all(data.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(element){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(element.download_url).then((function(e){var t=o(e.data);return{attribute:t.attributes,desc:element.sha,body:t.body,id:element.name.slice(0,-3)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:e.t1=e.sent,e.t0.commit.call(e.t0,"Awards",e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},computed:{awards:function(){return this.$store.state.awards}},head:function(){return{title:"Awards - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents "}]}}},l=(r(250),r(10)),component=Object(l.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper container"},[r("h1",{staticClass:"award-title center-align"},[e._v("\n    Achievements\n  ")]),e._v(" "),r("div",{staticClass:"container award-card"},[r("div",{staticClass:"row"},e._l(e.awards,(function(t){return r("div",{key:t.id,staticClass:"col l4 m6 s12"},[r("div",{staticClass:"card small"},[r("nuxt-link",{attrs:{to:{name:"awards-desc",params:{desc:t.desc,id:t.id}}}},[r("div",{staticClass:"card-image"},[r("progressive-img",{staticClass:"award-image center-align",attrs:{src:""+t.attribute.cover,placeholder:"/imageplaceholder800x500.png",blur:"30",delay:"200"}})],1),e._v(" "),r("div",{staticClass:"card-content"},[r("h5",[r("b",[e._v(e._s(t.attribute.title))])])])])],1)])})),0)])])}),[],!1,null,"8b27e51e",null);t.default=component.exports}}]);