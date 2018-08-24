importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "Nuxt-Laravel-App",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.6591d02229b07c289dbf.js",
    "revision": "c3b5bec49ae3614e837be6d18f95ed6e"
  },
  {
    "url": "/_nuxt/layouts/default.9ac3b762374205eede1d.js",
    "revision": "815c069eec6b3d23fb5c39f1f1a4b4fa"
  },
  {
    "url": "/_nuxt/manifest.8e4149cbeb05aff49518.js",
    "revision": "9899d31381597c2d295e495309e1894a"
  },
  {
    "url": "/_nuxt/pages/index.2e709b51ae4ffc21bb55.js",
    "revision": "6979b3eeb8dacbdd1537ad51779fa8b2"
  },
  {
    "url": "/_nuxt/pages/inspire.f8615c7b9d19c77e2f06.js",
    "revision": "648c01e4fac9ba26a29dad8d0711f5d2"
  },
  {
    "url": "/_nuxt/pages/Login.a171c7995c3887d43257.js",
    "revision": "47df156af9ecb751a55ae57e65cfefff"
  },
  {
    "url": "/_nuxt/pages/Profile.582e3f7f689cb03a8b1e.js",
    "revision": "b294636d3c52cbb4cf3aea4c23418fdf"
  },
  {
    "url": "/_nuxt/pages/Register.8a5f0518e77abb705c0c.js",
    "revision": "fb40be8a20e943d1083f153442785d5c"
  },
  {
    "url": "/_nuxt/pages/Settings.caa660f4d0e55e584987.js",
    "revision": "2abc07d27126a580cf40dd9da7dfabc0"
  },
  {
    "url": "/_nuxt/vendor.80a20b7bcb8138fa2e53.js",
    "revision": "d79e8163d8af76e4a60e5e48808b0379"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

