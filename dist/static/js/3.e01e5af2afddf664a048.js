webpackJsonp([3],{BVns:function(t,e){},"Qtb+":function(t,e){},pwWK:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider",on:{click:t.slider}},[i("p",{style:t.now},[i("em",{on:{mousemove:t.hover}})])])},staticRenderFns:[]};var s={components:{mySlider:i("VU/8")({props:["value"],data:function(){return{now:{width:this.value+"%"}}},methods:{slider:function(t){var e=this.$el.scrollWidth,i=((t.clientX-this.$el.offsetLeft)/e*100).toFixed(2);this.now.width=i+"%",this.$emit("input",i)},hover:function(t){var e=this.$el.scrollWidth,i=((t.clientX-this.$el.offsetLeft)/e*100).toFixed(2);this.now.width=i+"%",this.$emit("input",i)}}},n,!1,function(t){i("Qtb+")},"data-v-bb2bcea4",null).exports,myTips:i("nv3W").a},data:function(){return{pwidth:"30",tableList:[{name:"value",explain:"指定当前滑块的数据。可以使用 v-model 双向绑定数据",types:"Number",default:"-"}]}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("my-slider",{model:{value:t.pwidth,callback:function(e){t.pwidth=e},expression:"pwidth"}}),t._v(" "),i("p",[t._v(t._s(t.pwidth))]),t._v(" "),i("my-tips",{attrs:{list:t.tableList}})],1)},staticRenderFns:[]};var r=i("VU/8")(s,l,!1,function(t){i("BVns")},"data-v-8add2086",null);e.default=r.exports}});