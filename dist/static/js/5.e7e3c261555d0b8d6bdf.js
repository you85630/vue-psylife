webpackJsonp([5],{XUwT:function(t,e){},uOTj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:["value","mold"],data:function(){return{imgData:this.value,txtName:this.value}},computed:{type:function(){var t=!1;return t="img"===this.mold,t}},methods:{fileImg:function(){var t,e,a,i=this,n=document.querySelector("#input");"img"===this.mold?(t=n,e=function(t){i.imgData=t,i.$emit("input",i.imgData)},a=new FileReader,"undefined"!=typeof FileReader&&(a.onload=function(){e(a.result)},a.readAsDataURL(t.files[0]))):function(t,e){var a=new FileReader;"undefined"!=typeof FileReader&&(a.onload=function(){e(a.result)},a.readAsBinaryString(t.files[0]))}(n,function(t){i.txtName={name:n.files[0].name,show:t},i.$emit("input",i.txtName)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"up-load"},[a("i",{staticClass:"fa",class:t.type?"fa-image":"fa-file-text"}),t._v(" "),t.type?a("p",[t._v("点击上传图片")]):a("p",[t._v("点击上传文件")]),t._v(" "),a("input",{attrs:{type:"file",id:"input"},on:{change:t.fileImg}}),t._v(" "),t.type?a("div",[t.imgData?a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.imgData,alt:""}}),t._v(" "),t._m(0)]):t._e()]):a("div",[t.txtName.name?a("div",{staticClass:"img-box"},[a("p",{staticClass:"txt-name"},[t._v(t._s(t.txtName.name))]),t._v(" "),t._m(1)]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-replace"},[e("p",[this._v("点击替换图片")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-replace"},[e("p",[this._v("点击替换文件")])])}]};var s={components:{upLoad:a("VU/8")(i,n,!1,function(t){a("vwr4")},"data-v-5a036887",null).exports,myTips:a("nv3W").a},data:function(){return{pic:"",type:"img",tableList:[{name:"value",explain:"图片转换为base46",types:"base46",default:"_"}]}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("up-load",{attrs:{mold:t.type},model:{value:t.pic,callback:function(e){t.pic=e},expression:"pic"}}),t._v(" "),a("textarea",{domProps:{value:t.pic}}),t._v(" "),a("my-tips",{attrs:{value:t.tableList}})],1)},staticRenderFns:[]};var l=a("VU/8")(s,r,!1,function(t){a("XUwT")},"data-v-d1fde652",null);e.default=l.exports},vwr4:function(t,e){}});