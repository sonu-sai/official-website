(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{202:function(t,e,r){var content=r(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("671f113b",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("22540e0c",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";var n=r(202);r.n(n).a},256:function(t,e,r){(e=r(22)(!1)).push([t.i,".committee-img{width:160px!important;height:160px!important}.committee-img img{width:160px;height:160px;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},257:function(t,e,r){"use strict";var n=r(203);r.n(n).a},258:function(t,e,r){(e=r(22)(!1)).push([t.i,".card-panel[data-v-75b95706]{border-radius:16px 16px 16px 16px;box-shadow:0 4px 8px grey;height:360px}.middle[data-v-75b95706]{text-align:center}.card-content[data-v-75b95706]{line-height:8pt}.text[data-v-75b95706]{font-size:24px}.text[data-v-75b95706],.textd[data-v-75b95706]{font-weight:700}.textd[data-v-75b95706]{font-size:16px}i[data-v-75b95706]:hover{transform:scale(1.3);-o-object-fit:cover;object-fit:cover}.middle[data-v-75b95706]{position:relative;font-size:28px;bottom:60px}.insta[data-v-75b95706]{color:#8a3ab9}.twt[data-v-75b95706]{color:#00acee}.git[data-v-75b95706]{color:#211f1f}.lin[data-v-75b95706]{color:#0072b1}.web[data-v-75b95706]{color:#fe4164}",""]),t.exports=e},330:function(t,e,r){"use strict";r.r(e);r(37);var n=r(5),o=r(38),c=r.n(o),l={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/committee.json").then((function(t){return{content:t.data}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Committee - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"Committee of STudents Association of Computer Science (STACS) in NSS College of Engineering. The Commitee ensures the regular functioning and proper coordination within the association"}]}}},f=(r(255),r(257),r(10)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row"},t._l(t.content.committee,(function(e){return r("section",{key:e.designation},[r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card-panel hoverable"},[r("div",{staticClass:"card-image center-align"},[r("progressive-img",{staticClass:"committee-img circle responsive-image",attrs:{src:""+(e.url||"/profilepic.png"),placeholder:"/imageplaceholder1x1.png",alt:""+e.name,blur:30}})],1),t._v(" "),r("div",{staticClass:"card-content center-align"},[r("p",{staticClass:"text"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),r("p",{staticClass:"textd"},[t._v("\n              "+t._s(e.designation)+"\n            ")])]),t._v(" "),r("br"),t._v(" "),r("br"),r("br"),t._v(" "),r("div",{staticClass:"card-action middle"},[r("a",{staticClass:"wave-effect wave-light",attrs:{href:e.profiles.instagram,target:"blank"}},[e.profiles.instagram?r("i",{staticClass:"fa fa-instagram insta hoverable circle"}):t._e()]),t._v(" \n            "),r("a",{staticClass:"wave-effect wave-light",attrs:{href:e.profiles.twitter,target:"blank"}},[e.profiles.twitter?r("i",{staticClass:"fa fa-twitter hoverable twt circle"}):t._e()]),t._v(" \n            "),r("a",{staticClass:"wave-effect wave-light",attrs:{href:e.profiles.linkedin,target:"blank"}},[e.profiles.linkedin?r("i",{staticClass:"fa fa-linkedin hoverable lin circle"}):t._e()]),t._v(" \n            "),r("a",{staticClass:"wave-effect wave-light",attrs:{href:e.profiles.github,target:"blank"}},[e.profiles.github?r("i",{staticClass:"fa fa-github hoverable git circle"}):t._e()]),t._v(" \n            "),r("a",{staticClass:"wave-effect wave-light",attrs:{href:e.profiles.website,target:"blank"}},[e.profiles.website?r("i",{staticClass:"fa fa-globe hoverable web circle"}):t._e()])])])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"center-align"},[e("h4",[this._v("Our Committee Members")])])}],!1,null,"75b95706",null);e.default=component.exports}}]);