importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.5733605fdce4608f1b02.js",
    "revision": "5911476a96daf55802e0ab76b97f9c1d"
  },
  {
    "url": "/_nuxt/layouts/default.cecdbac52139fde75664.js",
    "revision": "1d434fcb3e7d0687f80d442d8c3db2a8"
  },
  {
    "url": "/_nuxt/layouts/main.91510ae997354f986429.js",
    "revision": "c576402aeb31cc057c6d5c60e55c3b9d"
  },
  {
    "url": "/_nuxt/manifest.5de35973d724883ac426.js",
    "revision": "20d9203d93845d737f733888eb63285f"
  },
  {
    "url": "/_nuxt/pages/home.7c5583fed842696b3770.js",
    "revision": "5aeafdff4bba0364a7eb1cfa429ff544"
  },
  {
    "url": "/_nuxt/pages/index.ff1f490a94cb762c0d31.js",
    "revision": "83f695abfc6a85f94662916915f8e9ea"
  },
  {
    "url": "/_nuxt/pages/Login.74ef16f4147fbf9e1a7b.js",
    "revision": "0fb9cefa2243c3c6613d033be1b68e34"
  },
  {
    "url": "/_nuxt/pages/Profile.e7af2f2956b4359f58c2.js",
    "revision": "9b4951a05c6d97cecb94dd6822ae7033"
  },
  {
    "url": "/_nuxt/pages/Register.31fdd7dd1335a8916d7c.js",
    "revision": "2dacc2ef9da5d4c1943dd00fe68b75f8"
  },
  {
    "url": "/_nuxt/pages/secret.673099f44b0284455651.js",
    "revision": "7a89744f745ea47fd45938d846008715"
  },
  {
    "url": "/_nuxt/pages/Settings.d0e3fd673e6d6bef8353.js",
    "revision": "1250cbdfff6462cf219b3736e77e8314"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/create.6de7b2a7738d6d73f0eb.js",
    "revision": "99220a09129a56eeb3f59b4e7a3c6a08"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/edit/_id.34c6b11529601e562cea.js",
    "revision": "9d737cca106b24d46402e63b1d939329"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/researcher.4037fdfe29320b3ad8ec.js",
    "revision": "9b84dfc5e1655072e9af8d8f14f71184"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/user/_id.7da68ad88820b771a882.js",
    "revision": "f557b3818dc6ea38f57c2d60343e489a"
  },
  {
    "url": "/_nuxt/vendor.0ed055ed52785a6939ca.js",
    "revision": "b05d47989d92bd3da4aa6f41b4fbb29a"
  }
], {
  "cacheId": "Nuxt-Laravel-App",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





