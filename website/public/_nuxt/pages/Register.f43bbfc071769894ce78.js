webpackJsonp([9],{AVfr:function(e,t,r){"use strict";var s=r("Xxa5"),a=r.n(s),i=r("exGp"),n=r.n(i),o=r("Dd8w"),l=r.n(o),u=r("mtWM"),c=r.n(u),d=r("NYxO");t.a={head:function(){return{title:"Register"}},data:function(){return{emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return e&&e.length>=6||"Password must be at least 6 chracters"}],visibleIcon:!0,form:{},valid:!0}},computed:l()({},Object(d.mapGetters)(["loading"])),methods:{submit:function(){var e=n()(a.a.mark(function e(){var t,r,s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=13;break}return e.next=3,c.a.post("/register",this.form);case 3:return t=e.sent,r=t.data,e.next=7,c.a.post("/login",{email:this.form.email,password:this.form.password});case 7:return s=e.sent,i=s.data.token,this.$store.dispatch("auth/saveToken",{token:i}),e.next=12,this.$store.dispatch("auth/updateUser",{user:r});case 12:this.$router.push("/");case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}},R00N:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-card",[r("v-card-title",[r("h1",{staticClass:"display-1"},[e._v("Register")])]),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:e.submit},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:[function(e){return!!e||"Name is required"}],label:"Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{"append-icon":e.visibleIcon?"visibility":"visibility_off",rules:e.passwordRules,type:e.visibleIcon?"password":"text",label:"Enter your password",hint:"At least 6 characters",min:"6",counter:6,required:""},on:{"click:append":function(){return e.visibleIcon=!e.visibleIcon}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("v-btn",{attrs:{disabled:!e.valid,type:"submit",loading:e.loading,color:"primary"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Submit")])],1)],1)],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a},XgNz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("AVfr"),a=r("R00N"),i=r("VU/8")(s.a,a.a,!1,null,null,null);i.options.__file="client/pages/Register.vue",t.default=i.exports}});