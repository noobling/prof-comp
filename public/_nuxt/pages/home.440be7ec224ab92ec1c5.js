webpackJsonp([9],{GOfy:function(t,e,i){var s=i("T36w");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("ef36d5f6",s,!1,{sourceMap:!1})},Gtlx:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.navItems,function(e){return i("v-flex",{key:e.title,attrs:{md4:"",sm6:"",xs12:""},on:{click:function(i){t.cardClick(e)}}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var n=s.hover;return i("v-card",{staticClass:"card",class:"elevation-"+(n?12:2),attrs:{to:e.link}},[i("v-container",{attrs:{"text-xs-center":""}},[i("v-icon",{staticClass:"icon",attrs:{color:"primary"}},[t._v(t._s(e.icon))]),i("v-card-text",{staticClass:"pt-0"},[i("h3",{staticClass:"title mt-0 mb-4"},[t._v(t._s(e.title))]),i("p",{attrs:{color:"gray"}},[t._v(t._s(e.description))])])],1)],1)}}])})],1)}))};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},P8tI:function(t,e,i){"use strict";e.a={head:function(){return{title:"Sleep Diary App - Home"}},created:function(){"Researcher"===this.$store.getters["auth/user"].type&&this.addPatientsNavLink()},data:function(){return{navItems:[{title:"Sleep Journal",description:"All your sleep records in one place",link:"/sleeprecord/user/"+this.$store.getters["auth/user"].id,icon:"book"},{title:"New Sleep Record",description:"Create a new sleep record",link:"/sleeprecord/create",icon:"create"},{title:"Invite",description:"Invite a patient",link:"#",icon:"send"},{title:"Visualisations",description:"Visualise your sleep journal",link:"/visual/"+this.$store.getters["auth/user"].id,icon:"timeline"},{title:"Settings",description:"Change your settings",link:"/settings",icon:"settings"}]}},methods:{cardClick:function(t){"Invite"===t.title&&(this.$store.state.inviteDialog=!0)},addPatientsNavLink:function(){this.navItems.unshift({title:"Patient's Journal",description:"The sleep journals of your patients",link:"/sleeprecord/researcher",icon:"people"})}}}},T36w:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".card[data-v-71e05320]{margin:10px}.icon[data-v-71e05320]{font-size:40px}",""])},XpLm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("P8tI"),n=i("Gtlx"),r=!1;var a=function(t){r||i("GOfy")},o=i("VU/8")(s.a,n.a,!1,a,"data-v-71e05320",null);o.options.__file="client/pages/home.vue",e.default=o.exports}});