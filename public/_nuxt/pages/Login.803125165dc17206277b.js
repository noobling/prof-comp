webpackJsonp([16],{"/JTW":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-card",[r("v-card-title",[r("h1",{staticClass:"display-1"},[e._v("Login")])]),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:e.submit},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:"",outline:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{"append-icon":e.visibleIcon?"visibility":"visibility_off",rules:e.passwordRules,type:e.visibleIcon?"password":"text",label:"Enter your password",hint:"At least 6 characters",min:"6",counter:6,required:"",outline:""},on:{"click:append":function(){return e.visibleIcon=!e.visibleIcon}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("p",[r("nuxt-link",{attrs:{to:"/password/email"}},[e._v("Forgot Password")])],1),r("v-btn",{attrs:{color:"primary",disabled:!e.valid,type:"submit",loading:e.loading},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Submit")])],1)],1)],1)],1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};t.a=a},oclK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("ra25"),a=r("/JTW"),s=r("VU/8")(i.a,a.a,!1,null,null,null);s.options.__file="client/pages/Login.vue",t.default=s.exports},ra25:function(e,t,r){"use strict";var i=r("Xxa5"),a=r.n(i),s=r("exGp"),n=r.n(s),o=r("Dd8w"),l=r.n(o),u=r("mtWM"),c=r.n(u),d=r("NYxO");t.a={head:function(){return{title:"Login"}},data:function(){return{emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return e&&e.length>=6||"Password must be at least 6 chracters"}],visibleIcon:!0,form:{},valid:!0}},computed:l()({},Object(d.mapGetters)(["loading"])),methods:{submit:function(){var e=n()(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=9;break}return e.next=3,c.a.post("/login",this.form);case 3:return t=e.sent,r=t.data,this.$store.dispatch("auth/saveToken",{token:r.token,remember:this.remember}),e.next=8,this.$store.dispatch("auth/fetchUser");case 8:this.$router.push("/home");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}}});