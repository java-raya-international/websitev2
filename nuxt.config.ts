import { defineNuxtConfig } from "nuxt/config";
import type { Plugin } from "vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
  },

  calendly: {},

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "/assets/css/remixicon.css",
    "/assets/fonts/flaticon.css",
    "/assets/css/satoshi-font.css",
  ],
  plugins: ["~/plugins/vuetify"],

  build: {
    transpile: ["vuetify"],
  },

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  modules: [
    (
      _options: any,
      nuxt: {
        hooks: {
          hook: (
            arg0: string,
            arg1: (config: { plugins: Plugin<any>[][] }) => void
          ) => void;
        };
      }
    ) => {
      nuxt.hooks.hook(
        "vite:extendConfig",
        (config: { plugins: Plugin<any>[][] }) => {
          config.plugins.push(vuetify({ autoImport: true }));
        }
      );
    },
    "nuxt-swiper",
    "nuxt-calendly",
    "@nuxt/icon",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
        },
      },
    },
  },
  experimental:{
    appManifest:false,
  },
  compatibilityDate:"2025-01-13",
  components: true,
});