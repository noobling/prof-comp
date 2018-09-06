importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.ffcf64584bf15cabf2a8.js",
    "revision": "4f8727dadcd7002f3d9cbe3b06177d8a"
  },
  {
    "url": "/_nuxt/layouts/default.fded5b5547285e15bf1f.js",
    "revision": "fe300db6f1afe7a4b0b6e9b949beea2b"
  },
  {
    "url": "/_nuxt/layouts/main.9715b2a2267f148704c4.js",
    "revision": "3f08d8016499a828ffe3cd7871d1d788"
  },
  {
    "url": "/_nuxt/manifest.270ed8e7f44713563fac.js",
    "revision": "09dfff4e8f4f31982202d917f2a6bd8b"
  },
  {
    "url": "/_nuxt/pages/index.5dd95ec66bc223ace960.js",
    "revision": "576275eb5b4106629aacf9dd89327152"
  },
  {
    "url": "/_nuxt/pages/Login.dd429e9b55ecee7c3cc7.js",
    "revision": "5ebfaee9f8ffccbac5dd161d7461786a"
  },
  {
    "url": "/_nuxt/pages/Profile.9d1767e3e8326acf3d57.js",
    "revision": "f9f8c0cf12b04fa79d716ed912c691b4"
  },
  {
    "url": "/_nuxt/pages/Register.f43bbfc071769894ce78.js",
    "revision": "e5a16d66d7921038309c04be67151861"
  },
  {
    "url": "/_nuxt/pages/secret.05fab01515ae878cd648.js",
    "revision": "d1330185668f96dce64bbabc805c94c9"
  },
  {
    "url": "/_nuxt/pages/Settings.9e63c9ccaa15876b338b.js",
    "revision": "920a831f371865dc3a0b23c95b330797"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/create.c1a64034874887e9e882.js",
    "revision": "5d840fa564d741ae6208b6a24a387ee0"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/researcher.9c283b56757311ecdad9.js",
    "revision": "d06bf65a2c826390dd885205fb7ffd30"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/user.ebea393f3fda7a260d4d.js",
    "revision": "614f66c2d6e54293637b1e7a16faa3a1"
  },
  {
    "url": "/_nuxt/vendor.7b970ed1c1829605d494.js",
    "revision": "671a8106e7d1f7929f5ebd1c5fb1f4c9"
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





