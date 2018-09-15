webpackJsonp([0],{"5TUb":function(t,e,i){"use strict";var n=i("Xxa5"),a=i.n(n),r=i("exGp"),o=i.n(r),s=i("mtWM"),l=i.n(s),c=i("e7x4"),u=i.n(c);e.a={data:function(){return{email:null,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{submit:function(){var t=o()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/invite",{email:this.email});case 2:e=t.sent,e.data,this.$store.state.inviteDialog=!1,u()({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,type:"success",title:"Sent Invitation"});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{inviteDialog:function(){return this.$store.state.inviteDialog}}}},"5Vma":function(t,e,i){"use strict";var n=i("rBcD"),a=i("VU/8")(null,n.a,!1,null,null,null);a.options.__file="client/components/Footer.vue",e.a=a.exports},BH2Z:function(t,e,i){"use strict";i("NYxO");e.a={methods:{changeNavDraw:function(){this.$store.dispatch("updateNavDraw",{navDraw:!this.navDraw})},logout:function(){var t=this;this.$store.dispatch("auth/logout").then(function(){t.$router.push("/")})}},computed:{navDraw:function(){return this.$store.getters.navDraw},user:function(){return this.$store.getters["auth/user"]}}}},EizA:function(t,e,i){"use strict";var n=i("FSGL"),a=i("XuVL"),r=!1;var o=function(t){r||i("dP3e")},s=i("VU/8")(n.a,a.a,!1,o,null,null);s.options.__file="client/components/NavDraw.vue",e.a=s.exports},FSGL:function(t,e,i){"use strict";i("NYxO");e.a={computed:{mini:function(){return"xs"===this.$vuetify.breakpoint.name},user:function(){return this.$store.getters["auth/user"]}},methods:{logout:function(){var t=this;this.$store.dispatch("auth/logout").then(function(){t.$router.push("/")})},openInviteDialog:function(){this.$store.state.inviteDialog=!0}}}},ICsU:function(t,e,i){"use strict";var n=i("5TUb"),a=i("NwAO"),r=i("VU/8")(n.a,a.a,!1,null,null,null);r.options.__file="client/components/InviteEmail.vue",e.a=r.exports},LTuu:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{attrs:{fixed:"",app:"",dark:"",color:"primary"}},[i("v-toolbar-side-icon",{on:{click:t.changeNavDraw}}),t.user?i("v-toolbar-items",[i("v-btn",{attrs:{flat:"",to:"/home"}},[i("v-icon",{staticClass:"mr-1"},[t._v("home")]),t._v("\n      Home\n    ")],1)],1):i("v-toolbar-title",[t._v("Center for Sleep Science")]),i("v-spacer"),i("v-toolbar-items",[t.user?t._e():i("v-btn",{attrs:{flat:"",to:"/register"}},[t._v("Register")]),t.user?t._e():i("v-btn",{attrs:{flat:"",to:"/login"}},[t._v("Login")]),t.user?i("v-btn",{attrs:{flat:"",to:"/sleeprecord/user/"+t.user.id}},[t._v("Sleep Journal")]):t._e(),t.user&&"Researcher"===t.user.type?i("v-btn",{attrs:{flat:"",to:"/sleeprecord/researcher"}},[t._v("Patients")]):t._e()],1),t.user?i("v-menu",[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-avatar",{attrs:{size:"38px"}},[i("img",{attrs:{src:t.$store.getters["auth/userImage"],alt:"User Avatar"}})])],1),i("v-list",[i("v-list-tile",{attrs:{to:"/profile"}},[i("v-list-tile-action",[i("v-icon",[t._v("person")])],1),i("v-list-tile-title",[t._v("\n          Profile\n        ")])],1),i("v-list-tile",{on:{click:t.logout}},[i("v-list-tile-action",[i("v-icon",[t._v("logout")])],1),i("v-list-tile-content",[t._v("\n          Logout\n        ")])],1)],1)],1):t._e()],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},NwAO:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{width:"500"},model:{value:t.inviteDialog,callback:function(e){t.inviteDialog=e},expression:"inviteDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Send Invite\n      ")]),i("v-card-text",[i("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{on:{click:function(e){t.$store.state.inviteDialog=!1}}},[t._v("\n          Cancel\n        ")]),i("v-btn",{attrs:{color:"primary",loading:t.$store.state.loading},on:{click:t.submit}},[t._v("\n          Send\n        ")])],1)],1)],1)],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},O7ZH:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:this.isDarkMode}},[e("NavDraw"),e("Toolbar"),e("InviteEmail"),e("v-content",{staticClass:"hero-image"},[e("v-container",[e("nuxt"),e("v-btn",{staticClass:"mb-5",attrs:{fixed:"",fab:"",bottom:"",right:"",color:"primary",to:"/sleeprecord/create"}},[e("v-icon",[this._v("add")])],1)],1)],1),e("my-footer")],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},XuVL:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{"mini-variant":t.mini,fixed:"",app:""},on:{"update:miniVariant":function(e){t.mini=e}},model:{value:t.$store.state.navDraw,callback:function(e){t.$set(t.$store.state,"navDraw",e)},expression:"$store.state.navDraw"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-list",[i("v-list-tile",[i("v-list-tile-title",{staticClass:"title",domProps:{textContent:t._s(t.mini?"App":"Application")}})],1)],1)],1),i("v-divider"),i("v-list",[i("v-list-tile",{attrs:{to:"/"}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),i("v-list-tile-content",[t._v("\n        Home\n      ")])],1)],1),t.user?i("v-list-tile",{attrs:{to:"/sleeprecord/create"}},[i("v-list-tile-action",[i("v-icon",[t._v("edit")])],1),i("v-list-tile-content",[t._v("\n      New Sleep Record\n    ")])],1):t._e(),t.user?i("v-list-tile",{attrs:{to:"/sleeprecord/user/"+t.user.id}},[i("v-list-tile-action",[i("v-icon",[t._v("library_books")])],1),i("v-list-tile-content",[t._v("\n      Sleep Journal\n    ")])],1):t._e(),i("v-list",[t.user?i("v-list-tile",{attrs:{to:"/profile"}},[i("v-list-tile-action",[i("v-icon",[t._v("person")])],1),i("v-list-tile-content",[t._v("\n        Profile\n      ")])],1):t._e()],1),i("v-list",[t.user?i("v-list-tile",{attrs:{to:"/settings"}},[i("v-list-tile-action",[i("v-icon",[t._v("settings")])],1),i("v-list-tile-content",[t._v("\n        Settings\n      ")])],1):t._e()],1),i("v-list",[t.user?i("v-list-tile",{on:{click:t.openInviteDialog}},[i("v-list-tile-action",[i("v-icon",[t._v("send")])],1),i("v-list-tile-content",[t._v("\n        Invite\n      ")])],1):t._e()],1),t.user?i("v-list",[i("v-list-tile",{on:{click:t.logout}},[i("v-list-tile-action",[i("v-icon",[t._v("logout")])],1),i("v-list-tile-content",[t._v("\n        Logout\n      ")])],1)],1):t._e()],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},YWRJ:function(t,e,i){"use strict";var n=i("BH2Z"),a=i("LTuu"),r=i("VU/8")(n.a,a.a,!1,null,null,null);r.options.__file="client/components/ToolBar.vue",e.a=r.exports},dP3e:function(t,e,i){var n=i("r4yC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("29eff0c8",n,!1,{sourceMap:!1})},fPua:function(t,e,i){"use strict";var n=i("YWRJ"),a=i("EizA"),r=i("5Vma"),o=i("ICsU");e.a={components:{Toolbar:n.a,NavDraw:a.a,MyFooter:r.a,InviteEmail:o.a},data:function(){return{isDarkMode:!1}}}},pfKW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("fPua"),a=i("O7ZH"),r=!1;var o=function(t){r||i("v/ua")},s=i("VU/8")(n.a,a.a,!1,o,null,null);s.options.__file="client/layouts/default.vue",e.default=s.exports},r4yC:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},rBcD:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"primary",attrs:{app:"",dark:"",height:"20"}},[e("span",{staticClass:"ml-1"},[this._v("Made with "),e("span",{staticClass:"red--text"},[this._v("❤")]),this._v("  by "),e("a",{staticClass:"secondary",attrs:{href:"https://github.com/noobling/prof-comp"}},[this._v("Team R")]),this._v(".")])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},"v/ua":function(t,e,i){var n=i("xfIP");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("12e07eeb",n,!1,{sourceMap:!1})},xfIP:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.swal2-popup{font-family:Roboto}.hero-image{background-image:url("/material2.jpg"),-webkit-gradient(linear,left top,left bottom,from(#f123a1),to(#ff13a3));background-image:url("/material2.jpg"),linear-gradient(#f123a1,#ff13a3);background-position:50%;background-size:cover}.hero-image:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:-webkit-gradient(linear,left bottom,right top,from(rgba(63,81,181,.7)),to(rgba(25,32,72,.7)));background-image:linear-gradient(to top right,rgba(63,81,181,.7),rgba(25,32,72,.7));opacity:.6}.v-card{border-radius:5px;padding:10px}',""])}});