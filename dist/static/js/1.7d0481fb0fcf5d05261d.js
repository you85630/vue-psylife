webpackJsonp([1],{"26dS":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),r=n("NYxO"),s={methods:i()({},Object(r.b)(["exit"]))},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-nav"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/home/index"}},[this._v("Vue组件库")])],1),this._v(" "),e("ul",[e("li",[this._v("小明")]),this._v(" "),e("li",{on:{click:this.exit}},[this._v("退出")])])])},staticRenderFns:[]};var o=n("VU/8")(s,c,!1,function(t){n("Y+nW")},"data-v-dac898e4",null).exports,l={computed:i()({},Object(r.c)(["leftNav"]))},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-nav"},[n("ul",t._l(t.leftNav,function(e){return n("li",{key:e.index},[n("router-link",{attrs:{to:e.linkto}},[t._v(t._s(e.name))])],1)}))])},staticRenderFns:[]};var u={data:function(){return{year:0}},created:function(){var t=new Date;this.year=t.getFullYear()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-nav"},[e("p",[this._v("\n    © 2017 - "+this._s(this.year)+"\n  ")])])},staticRenderFns:[]};var f={components:{topNav:o,leftNav:n("VU/8")(l,v,!1,function(t){n("MFLY")},"data-v-3c637c4b",null).exports,myFooter:n("VU/8")(u,d,!1,function(t){n("56cM")},"data-v-34a3bcd4",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("top-nav"),this._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"left"},[e("left-nav")],1),this._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"right-main"},[e("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[e("keep-alive",[e("router-view")],1)],1)],1),this._v(" "),e("my-footer")],1)])],1)},staticRenderFns:[]};var _=n("VU/8")(f,h,!1,function(t){n("tcrr")},"data-v-28b64fea",null);e.default=_.exports},"56cM":function(t,e){},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n("woOf"),r=(a=i)&&a.__esModule?a:{default:a};e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},MFLY:function(t,e){},"Y+nW":function(t,e){},tcrr:function(t,e){}});