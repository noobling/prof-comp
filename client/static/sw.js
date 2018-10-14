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
    "url": "/_nuxt/manifest.7fd2abf91e9939a33bb9.js",
    "revision": "c6e7a005a3df73807a89b72230441cf5"
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
    "url": "/_nuxt/pages/sleeprecord/create.c52d76833de4589d5d9e.js",
    "revision": "290698d5cd67178beab65ffb671667bd"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/edit/_id.4067e5409a35365451c0.js",
    "revision": "3de711d86e09aa61267560e4da93782f"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/researcher.bb4b8d346c2d9cc8a803.js",
    "revision": "b9ccaa0168a813daf36637e440db5985"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/user/_id.814eeb9cb108831c2e64.js",
    "revision": "607bda908d11cebeb7323ff49acc23e6"
  },
  {
    "url": "/_nuxt/pages/visual/_id.3a97f90e315a1fa4ab33.js",
    "revision": "746446069d9d04d61c5de7ca101f2788"
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





