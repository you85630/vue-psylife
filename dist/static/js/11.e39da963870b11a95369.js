webpackJsonp([11],{"7dXr":function(t,e){},hySI:function(t,e){},"jVB/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:["echarts"],data:function(){return{data:{line:{animation:!1,xAxis:{type:"category",data:this.echarts.option.title},yAxis:{type:"value"},series:[{data:this.echarts.option.data,type:"line"}]},bar:{animation:!1,color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.echarts.option.title,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"数据",type:"bar",barWidth:"60%",data:this.echarts.option.data}]},pie:{animation:!1,tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:this.echarts.option.title},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:this.echarts.option.data}]},radar:{animation:!1,legend:{data:["预算分配（Allocated Budget）","实际开销（Actual Spending）"]},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:this.echarts.option.title},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",data:this.echarts.option.data}]}}}},created:function(){this.echartsId=Math.random().toString(36).substr(2)},mounted:function(){this.$nextTick(function(){this.colours(this.echarts.type)})},methods:{colours:function(t){var e=void 0;switch(t){case"line":e=this.data.line;break;case"bar":e=this.data.bar;break;case"pie":e=this.data.pie;break;case"radar":e=this.data.radar}var a=this.$echarts.init(document.getElementById(this.echartsId));window.addEventListener("resize",function(){setTimeout(function(){a.resize()},500)}),a.setOption(e)}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"myChart",attrs:{id:this.echartsId}})},staticRenderFns:[]};var r={components:{myEcharts:a("VU/8")(i,n,!1,function(t){a("7dXr")},"data-v-5a0d6ce6",null).exports,myTips:a("nv3W").a},data:function(){return{linelist:{type:"line",option:{title:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[820,932,901,934,1290,1330,1320]}},barlist:{type:"bar",option:{title:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[820,932,901,934,1290,1330,1320]}},pielist:{type:"pie",option:{title:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}},radarlist:{type:"radar",option:{title:[{name:"销售",max:6500},{name:"管理",max:16e3},{name:"信息技术",max:3e4},{name:"客服",max:38e3},{name:"研发",max:52e3},{name:"市场",max:25e3}],data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"预算分配"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"实际开销"}]}},tableList:[{name:"types",explain:"echarts的类型",types:"String",default:"_"},{name:"option",explain:"echarts的数据",types:"Array",default:"_"}]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"echarts-box"},[a("ul",[a("li",[a("my-echarts",{attrs:{echarts:t.linelist}})],1),t._v(" "),a("li",[a("my-echarts",{attrs:{echarts:t.barlist}})],1),t._v(" "),a("li",[a("my-echarts",{attrs:{echarts:t.pielist}})],1),t._v(" "),a("li",[a("my-echarts",{attrs:{echarts:t.radarlist}})],1)]),t._v(" "),a("my-tips",{attrs:{value:t.tableList}})],1)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("hySI")},"data-v-2c502984",null);e.default=o.exports}});