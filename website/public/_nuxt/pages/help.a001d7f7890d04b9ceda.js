webpackJsonp([5],{"5zde":function(e,t,n){n("zQR9"),n("qyJz"),e.exports=n("FeBl").Array.from},Gu7T:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("c/Tr"));t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},TLHW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("jYk2"),o=n("afZB"),s=n("VU/8")(r.a,o.a,!1,null,null,null);s.options.__file="client/pages/help.vue",t.default=s.exports},afZB:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"white--text"},[e._v("Common issues and solutions")]),n("hr"),n("v-expansion-panel",{attrs:{expand:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},e._l(e.items,function(t,r){return n("v-expansion-panel-content",{key:r},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n        "+e._s(t.header)+"\n      ")]),n("v-card",[n("v-card-text",[e._v("\n          "+e._s(t.text)+"\n        ")])],1)],1)}))],1)};r._withStripped=!0;var o={render:r,staticRenderFns:[]};t.a=o},"c/Tr":function(e,t,n){e.exports={default:n("5zde"),__esModule:!0}},fBQ2:function(e,t,n){"use strict";var r=n("evD5"),o=n("X8DO");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},jYk2:function(e,t,n){"use strict";var r=n("Gu7T"),o=n.n(r);t.a={created:function(){this.show=[].concat(o()(Array(this.items).keys())).map(function(e){return!0})},data:function(){return{items:[{header:"Cannot understand words/sentences or cannot find links",text:"View your phone in landscape. If the screen size is small some things may get truncated."},{header:"I cannot understand the questions when creating a sleep record",text:"Click on icon next to the question for more info"},{header:"How do I download the app on my phone?",text:"Ask your researcher to download the app on your phone for you."}],show:[].concat(o()(Array(this.items).keys())).map(function(e){return!0})}}}},qyJz:function(e,t,n){"use strict";var r=n("+ZMJ"),o=n("kM2E"),s=n("sB3e"),a=n("msXi"),i=n("Mhyx"),u=n("QRG4"),c=n("fBQ2"),l=n("3fs2");o(o.S+o.F*!n("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,d,f=s(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,m=0,_=l(f);if(y&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==_||h==Array&&i(_))for(n=new h(t=u(f.length));t>m;m++)c(n,m,y?v(f[m],m):f[m]);else for(d=_.call(f),n=new h;!(o=d.next()).done;m++)c(n,m,y?a(d,v,[o.value,m],!0):o.value);return n.length=m,n}})}});