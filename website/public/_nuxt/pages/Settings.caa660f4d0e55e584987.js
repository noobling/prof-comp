webpackJsonp([3],{pqg5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("w2hE"),o=n("rkZX"),r=n("VU/8")(s.a,o.a,!1,null,null,null);r.options.__file="client/pages/Settings.vue",e.default=r.exports},rkZX:function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",[e("v-card-title",[e("h1",{staticClass:"display-1"},[this._v("Settings")])]),e("v-card-text",[e("h2",{staticClass:"headline"},[this._v("Delete Account")]),e("p",{staticClass:"body-1"},[this._v("If you delete your account you will permantly lose all your data.")]),e("v-btn",{attrs:{color:"red",dark:""},on:{click:this.deleteAccount}},[this._v("Delete Account")])],1)],1)],1)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},w2hE:function(t,e,n){"use strict";var s=n("Xxa5"),o=n.n(s),r=n("exGp"),u=n.n(r),a=n("e7x4"),c=n.n(a);e.a={created:function(){var t=this;this.$store.getters["auth/user"]||c()({title:"Warning",text:"You need to be logged in to view this",type:"warning"}).then(function(e){t.$router.push("/login")})},methods:{deleteAccount:function(){c()({title:"Are you sure you want to delete account?",text:"You won't be able to undo this.",showCancelButton:!0,confirmButtonText:"Yes delete it!",cancelButtonText:"No, cancel",showCloseButton:!0,postConfirm:this.sendDeleteRequest,reverseButtons:!0}).then(function(t){t.value&&c()("Deleted","Your account has been deleted","success")})},sendDeleteRequest:function(){var t=u()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}}});