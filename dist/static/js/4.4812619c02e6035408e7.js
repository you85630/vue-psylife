webpackJsonp([4],{"14It":function(t,e){},"jVB/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:["echarts"],mounted:function(){this.$echarts.init(document.getElementById("myChart")).setOption(this.echarts)}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"myChart",attrs:{id:"myChart"}})},staticRenderFns:[]};var s={components:{myEcharts:n("VU/8")(a,r,!1,function(t){n("xWNR")},"data-v-70889a3c",null).exports},data:function(){return{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"echarts-box"},[n("my-echarts",{attrs:{echarts:t.option}})],1)},staticRenderFns:[]};var c=n("VU/8")(s,i,!1,function(t){n("14It")},"data-v-c3368efe",null);e.default=c.exports},xWNR:function(t,e){}});