webpackJsonp([11],{"1glD":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Idb0"),r=a("tOx9"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="client/pages/password/email.vue",e.default=i.exports},Idb0:function(t,e,a){"use strict";var s=a("Xxa5"),r=a.n(s),i=a("exGp"),n=a.n(i),l=a("Dd8w"),u=a.n(l),o=a("mtWM"),c=a.n(o),d=a("NYxO"),m=a("e7x4"),f=a.n(m);e.a={head:function(){return{title:"Send Reset Link"}},data:function(){return{emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return t&&t.length>=6||"Password must be at least 6 chracters"}],visibleIcon:!0,form:{},valid:!0}},computed:u()({},Object(d.mapGetters)(["loading"])),methods:{submit:function(){var t=n()(r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=6;break}return t.next=3,c.a.post("/password/email",this.form);case 3:e=t.sent,e.data,f()({title:"Success",type:"success",text:"Sent reset link to your email please check your spam if you cannot find it."});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},tOx9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",[a("h1",{staticClass:"display-1"},[t._v("Send Reset Link")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:t.submit},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h1",{staticClass:"title"},[t._v("Enter your email so we can start resetting your password.")]),a("v-text-field",{staticClass:"mt-2 mb-2",attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-btn",{attrs:{color:"primary",disabled:!t.valid,type:"submit",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r}});