webpackJsonp([7],{"0DPx":function(e,t){},GL0s:function(e,t){},"jIQ/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"check-box"},[t("p",{class:{active:this.select},on:{click:this.checked}},[t("i",{staticClass:"fa",class:this.select?"fa-check-square":"fa-square-o"}),this._v(" "),this._t("default")],2)])},staticRenderFns:[]};var c={components:{checkBox:s("VU/8")({props:["value"],data:function(){return{select:!1,list:this.value}},methods:{checked:function(){this.select=!this.select;var e=this.$slots.default[0].text;if(this.select)this.list.push(e);else{var t=this.list,s=void 0;t.filter(function(t,i){t===e&&(s=i)}),t.splice(s,1)}this.$emit("input",this.list)}}},i,!1,function(e){s("GL0s")},"data-v-6b3b8362",null).exports,myTips:s("nv3W").a},data:function(){return{select:[],checkList:[{name:"备选1"},{name:"备选2"},{name:"备选3"}],tableList:[{name:"value",explain:"指定当前选中的项目数据。可以使用 v-model 双向绑定数据",types:"Number",default:"-"}]}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.checkList,function(t){return s("check-box",{key:t.index,model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[e._v(e._s(t.name))])}),e._v(" "),s("p",[e._v(e._s(e.select))]),e._v(" "),s("my-tips",{attrs:{list:e.tableList}})],2)},staticRenderFns:[]};var a=s("VU/8")(c,n,!1,function(e){s("0DPx")},"data-v-43b69974",null);t.default=a.exports}});