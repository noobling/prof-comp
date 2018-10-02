importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.38bd2e26bfdcc0a66556.js",
    "revision": "6e9a45b3f535fec92aa6dc01ce9d626b"
  },
  {
    "url": "/_nuxt/layouts/default.0be86469166f2184bc2a.js",
    "revision": "4a9ca7f36883a8f358d63cd62b146577"
  },
  {
    "url": "/_nuxt/layouts/main.81f044e01bb1c4692ad9.js",
    "revision": "6e347b7a3ef6b4e7aa196c0b49719ef1"
  },
  {
    "url": "/_nuxt/manifest.c791056958d24c50d6f4.js",
    "revision": "cfa4c098a9da454552002edab2589ec2"
  },
  {
    "url": "/_nuxt/pages/home.440be7ec224ab92ec1c5.js",
    "revision": "056f3d00d80d5eac7a15059375166eb9"
  },
  {
    "url": "/_nuxt/pages/index.af90eaeea3fee723a175.js",
    "revision": "2ddece08ceda82dc872919f0ab147440"
  },
  {
    "url": "/_nuxt/pages/Login.fb5b7e4c21ca035faeb3.js",
    "revision": "c2db6b0f3464ed17b4edb290e61e35a9"
  },
  {
    "url": "/_nuxt/pages/password/email.5a43f278d23001492046.js",
    "revision": "4a31834f98088bd8fe9af2a326763af5"
  },
  {
    "url": "/_nuxt/pages/password/reset/_id.d8782c6e9be0fcacb3e0.js",
    "revision": "63701eb50d4e30118f23847cba5b0cc5"
  },
  {
    "url": "/_nuxt/pages/Profile.59e38e1990690222385e.js",
    "revision": "ea7666ef807f2790c909b096b18f7846"
  },
  {
    "url": "/_nuxt/pages/Register.e2038e3d15812bc71eb7.js",
    "revision": "2c8651a9e8b238d4fb860d493ff76b44"
  },
  {
    "url": "/_nuxt/pages/secret.a8354dbfd1d8ff56b280.js",
    "revision": "0bade0b2a52cd96e02d7d637f6a7030d"
  },
  {
    "url": "/_nuxt/pages/Settings.298eb8ef4e22b1cacdbc.js",
    "revision": "6a8dbbf1a13a5ed5bac9e362dc670e04"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/create.3ed057c56021658d2b0b.js",
    "revision": "d053e5fbb73e042bd151566cbe1f75e0"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/edit/_id.e730f86178a962fe1c9a.js",
    "revision": "00d9a62340ecd638ad99981ce4653902"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/researcher.dc2e214ded25d0161846.js",
    "revision": "aab53993b43ef11407f9513ec2d2264d"
  },
  {
    "url": "/_nuxt/pages/sleeprecord/user/_id.8488eec4f969641d5f86.js",
    "revision": "6abbf106fec7d306c22260b19399f900"
  },
  {
    "url": "/_nuxt/pages/visual/_id.f151d513655840b87ba4.js",
    "revision": "025dfa8ba0b30421ca5638860399ee51"
  },
  {
    "url": "/_nuxt/vendor.6704a8403e3eb6a280cb.js",
    "revision": "82a2b834651adaa74b21425a247efed4"
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





