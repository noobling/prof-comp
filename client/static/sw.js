importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.67071bb74881c08a4dae.js",
    "revision": "850c94d70733a5b8f19a7ebaa949a235"
  },
  {
    "url": "/_nuxt/layouts/default.1d467777f42b9d879a29.js",
    "revision": "ca04d351a7e91f6a26f81f2002edcf06"
  },
  {
    "url": "/_nuxt/layouts/main.f7b67bac4971de62734e.js",
    "revision": "790a61de466ee83772687aab92e8d4f5"
  },
  {
    "url": "/_nuxt/manifest.f8c83c4e08d8a851b00a.js",
    "revision": "601d2368e05e81fa883b4c96978336ce"
  },
  {
    "url": "/_nuxt/pages/index.810f9eb74786a1fcb0c0.js",
    "revision": "576275eb5b4106629aacf9dd89327152"
  },
  {
    "url": "/_nuxt/pages/Login.e2085a396e33770115fd.js",
    "revision": "09d0ac260c4bcc152e5817c71a7c4a0d"
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
    "url": "/_nuxt/pages/sleeprecord/researcher.5a3b0836796d1e42b326.js",
    "revision": "d33f28614f7535c1d92fa8f2be008db3"
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





