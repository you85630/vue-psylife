webpackJsonp([18],{"+rmy":function(e,n){},"9PHq":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"menu"},e._l(e.menu,function(n,i){return t("div",{key:n.index,staticClass:"menu-li"},[t("p",{on:{click:function(n){e.open(i)}}},[t("span",{staticClass:"name"},[n.icon?t("i",{staticClass:"fa",class:n.icon}):e._e(),e._v(e._s(n.label))]),e._v(" "),t("i",{staticClass:"fa",class:n.openNow?"fa-angle-right":"fa-angle-down"})]),e._v(" "),e._l(n.children,function(i){return n.openNow?t("div",{key:i.index,staticClass:"li-children"},[t("router-link",{attrs:{to:i.linkto}},[e._v(e._s(i.label))])],1):e._e()})],2)}))},staticRenderFns:[]};var a={components:{myMenu:t("VU/8")({props:["menu"],methods:{open:function(e){this.menu[e].openNow=!this.menu[e].openNow}},created:function(){for(var e=this.$route.path,n=this.menu,t=0;t<n.length;t++)for(var i=n[t].children,a=0;a<i.length;a++)e===i[a].linkto&&(n[t].openNow=!n[t].openNow)}},i,!1,function(e){t("D7aR")},"data-v-09f83ee6",null).exports,myTips:t("nv3W").a},data:function(){return{list:[{label:"第一级",icon:"fa-sliders",openNow:!1,children:[{label:"1-1",linkto:"/home/echarts"},{label:"1-2",linkto:"/home/menu"}]},{label:"第二级",icon:"fa-navicon",openNow:!1,children:[{label:"2-1",linkto:"/home/cascader"},{label:"2-2",linkto:"/home/datePicker"}]}],tableList:[{name:"menu",explain:"指定当前组件的数据",types:"Array",default:"-"}]}}},s={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("my-menu",{attrs:{menu:this.list}}),this._v(" "),n("my-tips",{attrs:{value:this.tableList}}),this._v(" "),n("p",[this._v("根据路由判断当前展开的父元素")]),this._v(" "),n("p",{staticStyle:{color:"red"}},[this._v("注：当前页面为静态资源")])],1)},staticRenderFns:[]};var l=t("VU/8")(a,s,!1,function(e){t("+rmy")},"data-v-0c530cd4",null);n.default=l.exports},D7aR:function(e,n){}});