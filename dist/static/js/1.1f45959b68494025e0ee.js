webpackJsonp([1],{"26dS":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-nav"},[n("ul",[n("li",[t._v("小明")]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("退出")])],1)])])},staticRenderFns:[]};var r=n("VU/8")({},a,!1,function(t){n("5VaL")},"data-v-1aaf6ebc",null).exports,i={data:function(){return{year:0}},created:function(){var t=new Date;this.year=t.getFullYear()}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v("\n    © 2017 - "+t._s(t.year)+"\n  ")])])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("UcK2")},"data-v-24fd85a5",null).exports,l=n("Dd8w"),c=n.n(l),u=n("NYxO"),v={computed:c()({},Object(u.b)(["leftNav"]))},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-nav"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Vue组件库")])],1),t._v(" "),n("div",{staticClass:"list"},t._l(t.leftNav,function(e){return n("p",{key:e.index},[n("router-link",{attrs:{to:e.linkto}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var d={components:{topNav:r,leftNav:n("VU/8")(v,f,!1,function(t){n("yPgQ")},"data-v-073e40cd",null).exports,myFooter:o}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("top-nav"),t._v(" "),n("div",{staticClass:"main"},[n("left-nav"),t._v(" "),n("div",{staticClass:"right"},[n("transition",{attrs:{nane:"slide-fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1),t._v(" "),n("my-footer")],1)},staticRenderFns:[]};var p=n("VU/8")(d,_,!1,function(t){n("uAkv")},"data-v-746f9601",null);e.default=p.exports},"5VaL":function(t,e){},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var a,r=n("woOf"),i=(a=r)&&a.__esModule?a:{default:a};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},UcK2:function(t,e){},uAkv:function(t,e){},yPgQ:function(t,e){}});