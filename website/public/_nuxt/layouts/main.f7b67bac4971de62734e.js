webpackJsonp([0],{"0Gwo":function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:this.isDarkMode}},[e("NavDraw"),e("Toolbar"),e("nuxt"),e("my-footer")],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},"5Vma":function(t,e,i){"use strict";var n=i("rBcD"),r=i("VU/8")(null,n.a,!1,null,null,null);r.options.__file="client/components/Footer.vue",e.a=r.exports},BBD7:function(t,e,i){var n=i("FBSG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4f03101e",n,!1,{sourceMap:!1})},BH2Z:function(t,e,i){"use strict";i("NYxO");e.a={methods:{changeNavDraw:function(){this.$store.dispatch("updateNavDraw",{navDraw:!this.navDraw})},logout:function(){var t=this;this.$store.dispatch("auth/logout").then(function(){t.$router.push("/")})}},computed:{navDraw:function(){return this.$store.getters.navDraw},user:function(){return this.$store.getters["auth/user"]}}}},BV7u:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ZgMn"),r=i("0Gwo"),s=!1;var o=function(t){s||i("BBD7")},a=i("VU/8")(n.a,r.a,!1,o,null,null);a.options.__file="client/layouts/main.vue",e.default=a.exports},EizA:function(t,e,i){"use strict";var n=i("FSGL"),r=i("XuVL"),s=!1;var o=function(t){s||i("dP3e")},a=i("VU/8")(n.a,r.a,!1,o,null,null);a.options.__file="client/components/NavDraw.vue",e.a=a.exports},FBSG:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".swal2-popup{font-family:Roboto}",""])},FSGL:function(t,e,i){"use strict";i("NYxO");e.a={computed:{mini:function(){return"xs"===this.$vuetify.breakpoint.name}}}},LTuu:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{attrs:{fixed:"",app:"",dark:"",color:"primary"}},[i("v-toolbar-side-icon",{on:{click:t.changeNavDraw}}),i("v-toolbar-title",[t._v("My Awesome Laravel Nuxt App")]),i("v-spacer"),i("v-toolbar-items",[t.user?t._e():i("v-btn",{attrs:{flat:"",to:"/register"}},[t._v("Register")]),t.user?t._e():i("v-btn",{attrs:{flat:"",to:"/login"}},[t._v("Login")]),t.user?i("v-btn",{attrs:{flat:"",to:"/sleeprecord/create"}},[t._v("New Record")]):t._e(),t.user?i("v-btn",{attrs:{flat:"",to:"/sleeprecord/user"}},[t._v("Sleep Journal")]):t._e(),t.user&&"Researcher"===t.user.type?i("v-btn",{attrs:{flat:"",to:"/sleeprecord/researcher"}},[t._v("Patients")]):t._e()],1),t.user?i("v-menu",[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-avatar",{attrs:{size:"38px"}},[i("img",{attrs:{src:t.$store.getters["auth/userImage"],alt:"User Avatar"}})])],1),i("v-list",[i("v-list-tile",{attrs:{to:"/profile"}},[i("v-list-tile-action",[i("v-icon",[t._v("person")])],1),i("v-list-tile-title",[t._v("\n          Profile\n        ")])],1),i("v-list-tile",{on:{click:t.logout}},[i("v-list-tile-action",[i("v-icon",[t._v("logout")])],1),i("v-list-tile-content",[t._v("\n          Logout\n        ")])],1)],1)],1):t._e()],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},XuVL:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{"mini-variant":t.mini,fixed:"",app:""},on:{"update:miniVariant":function(e){t.mini=e}},model:{value:t.$store.state.navDraw,callback:function(e){t.$set(t.$store.state,"navDraw",e)},expression:"$store.state.navDraw"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-list",[i("v-list-tile",[i("v-list-tile-title",{staticClass:"title",domProps:{textContent:t._s(t.mini?"App":"Application")}})],1)],1)],1),i("v-divider"),i("v-list",[i("v-list-tile",{attrs:{to:"/"}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),i("v-list-tile-content",[t._v("\n        Home\n      ")])],1)],1),i("v-list-tile",{attrs:{to:"/sleeprecord/create"}},[i("v-list-tile-action",[i("v-icon",[t._v("edit")])],1),i("v-list-tile-content",[t._v("\n      New Sleep Record\n    ")])],1),i("v-list-tile",{attrs:{to:"/sleeprecord/user"}},[i("v-list-tile-action",[i("v-icon",[t._v("library_books")])],1),i("v-list-tile-content",[t._v("\n      Sleep Journal\n    ")])],1),i("v-list",[i("v-list-tile",{attrs:{to:"/profile"}},[i("v-list-tile-action",[i("v-icon",[t._v("person")])],1),i("v-list-tile-content",[t._v("\n        Profile\n      ")])],1)],1),i("v-list",[i("v-list-tile",{attrs:{to:"/settings"}},[i("v-list-tile-action",[i("v-icon",[t._v("settings")])],1),i("v-list-tile-content",[t._v("\n        Settings\n      ")])],1)],1),i("v-list",[i("v-list-tile",{on:{click:function(e){t.store.dispatch("auth/logout")}}},[i("v-list-tile-action",[i("v-icon",[t._v("logout")])],1),i("v-list-tile-content",[t._v("\n        Logout\n      ")])],1)],1)],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r},YWRJ:function(t,e,i){"use strict";var n=i("BH2Z"),r=i("LTuu"),s=i("VU/8")(n.a,r.a,!1,null,null,null);s.options.__file="client/components/ToolBar.vue",e.a=s.exports},ZgMn:function(t,e,i){"use strict";var n=i("YWRJ"),r=i("EizA"),s=i("5Vma");e.a={components:{Toolbar:n.a,NavDraw:r.a,MyFooter:s.a},data:function(){return{isDarkMode:!1}}}},dP3e:function(t,e,i){var n=i("r4yC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("29eff0c8",n,!1,{sourceMap:!1})},r4yC:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},rBcD:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"primary",attrs:{app:"",dark:"",height:"20"}},[e("span",{staticClass:"ml-1"},[this._v("Made with "),e("span",{staticClass:"red--text"},[this._v("❤")]),this._v("  by "),e("a",{staticClass:"secondary",attrs:{href:"https://github.com/noobling"}},[this._v("Noobling")]),this._v(".")])])};n._withStripped=!0;var r={render:n,staticRenderFns:[]};e.a=r}});