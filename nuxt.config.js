export default {
  head: {
    title: "webMessenger",
    htmlAttrs: { lang: "ru", },
    meta: [
      { charset: "utf-8", },
      { name: "viewport", content: "width=device-width, initial-scale=1", },
      { hid: "description", name: "description", content: "", },
      { name: "format-detection", content: "telephone=no", }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico", }
    ],
  },

  css: [
    "@/static/css/main.css"
  ],

  plugins: [
  ],

  components: true,

  modules: [
  ],

  serverMiddleware: [
    "@/server/app.js"
  ],

  build: {},
};
