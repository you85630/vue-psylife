webpackJsonp([16],{Peap:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("pi6f"),s=a("nv3W"),r={components:{myButton:n.a,myTips:s.a},data:function(){return{tableList:[{name:"type",explain:"按钮类型，可选值为primary、ghost、dashed、success、warning、error或者不设置",types:"String",default:"-"},{name:"long",explain:"开启后，按钮的长度为 100%",types:"Boolean",default:"false"}]}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-box"},[a("p",[t._v("各类型按钮")]),t._v(" "),a("ul",[a("li",[a("my-button",[t._v("默认按钮")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"ghost"}},[t._v("ghost")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"dashed"}},[t._v("dashed")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"primary"}},[t._v("primary")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"success"}},[t._v("success")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"warning"}},[t._v("warning")])],1),t._v(" "),a("li",[a("my-button",{attrs:{type:"error"}},[t._v("error")])],1)]),t._v(" "),a("div",{staticClass:"long"},[a("p",[t._v("长按钮")]),t._v(" "),a("my-button",{attrs:{type:"primary",long:!0}},[t._v("主要按钮")])],1),t._v(" "),a("my-tips",{attrs:{list:t.tableList}})],1)},staticRenderFns:[]};var o=a("VU/8")(r,i,!1,function(t){a("kF+2")},"data-v-541fcf2e",null);e.default=o.exports},"kF+2":function(t,e){}});