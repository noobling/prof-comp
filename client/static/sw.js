importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.0b02a91a16bfebf73b52.js",
    "revision": "a75706331f83b338f44a2cfe29dc386b"
  },
  {
    "url": "/_nuxt/layouts/default.98dff6be8f6624d04f60.js",
    "revision": "5ab5f05ec5709c297b8c96ddc0611ba1"
  },
  {
    "url": "/_nuxt/layouts/main.81f044e01bb1c4692ad9.js",
    "revision": "6e347b7a3ef6b4e7aa196c0b49719ef1"
  },
  {
    "url": "/_nuxt/manifest.bf851524acc17e184a92.js",
    "revision": "6fc687bd5168e051c07ee0eb67856ffc"
  },
  {
    "url": "/_nuxt/pages/help.a001d7f7890d04b9ceda.js",
    "revision": "d02944f31d21079afac7d9328b8ba4cb"
  },
  {
    "url": "/_nuxt/pages/home.eda43523bbd5133bef2d.js",
    "revision": "f416d4c34e0b1124a051c3d9844bb55c"
  },
  {
    "url": "/_nuxt/pages/index.dcecdaa72f93a4b7fadd.js",
    "revision": "bad92cb1dbbf4905e2dbc24daf59b0bf"
  },
  {
    "url": "/_nuxt/pages/Login.803125165dc17206277b.js",
    "revision": "c53e192faaf220ac5b9be58492178a40"
  },
  {
    "url": "/_nuxt/pages/password/email.a111743720df8ece9054.js",
    "revision": "d50a97f25f0274d43609ad5fcd64a12a"
  },
  {
    "url": "/_nuxt/pages/password/reset/_id.ddbbe0b6a7fd23461b7a.js",
    "revision": "97820c63284dfa2755dc4368c119fb82"
  },
  {
    "url": "/_nuxt/pages/Profile.59e38e1990690222385e.js",
    "revision": "ea7666ef807f2790c909b096b18f7846"
  },
  {
    "url": "/_nuxt/pages/Register.b8f0554a054b557186ed.js",
    "revision": "46625daf59a818081323abdcbb6ea093"
  },
  {
    "url": "/_nuxt/pages/secret.2ff37d6333398ae7737a.js",
    "revision": "525bada60e9eb3483be3af5679321d04"
  },
  {
    "url": "/_nuxt/pages/Settings.284b0b7d28edb0411eef.js",
    "revision": "a031f070c9d1b135ec36ca11ac7da4a3"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/create.34dcffa516dbc402ba2d.js",
    "revision": "f53d732eddd07b10e7debc4f0d9a5583"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/edit/_id.367cb7fc309f5495b29c.js",
    "revision": "b98cebe9a7728a97458f13fe7452b789"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/researcher.8fb9071e4408486474dc.js",
    "revision": "db05b51e63d5df33cc9c18e8f2a25828"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/user/_id.e96ef24a2e08d0949699.js",
    "revision": "7ad43d0ca68654d27820c9f9210feeac"
  },
  {
    "url": "/_nuxt/pages/visual/_id.c13d093f44e7fbc3e796.js",
    "revision": "5efbfbefc64d76545aba10e2301a2a5f"
  },
  {
    "url": "/_nuxt/vendor.77bfb06aefcb220ed1b4.js",
    "revision": "2401c6f5df755b32be831f29b5007176"
  }
], {
  "cacheId": "SleepDiaryApp",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





