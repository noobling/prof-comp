webpackJsonp([9],{"Lu/K":function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-jumbotron",{attrs:{gradient:this.gradient,dark:"",src:"/material2.jpg",height:"100%"}},[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{"align-center":""}},[e("v-flex",{attrs:{"text-xs-center":""}},[e("h3",{staticClass:"display-2 mb-4"},[this._v("Center for Sleep Science Sleep Diary App")]),e("v-btn",{attrs:{large:"",outline:"",to:"/register"}},[this._v("Get Started")])],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},P7bJ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("SO3L"),i=r("Lu/K"),n=r("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="client/pages/index.vue",e.default=n.exports},SO3L:function(t,e,r){"use strict";e.a={layout:"main",head:function(){return{title:"Sleep Diary App"}},data:function(){return{gradient:"to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"}},created:function(){this.$store.getters["auth/check"]&&this.$router.push("/home")}}}});