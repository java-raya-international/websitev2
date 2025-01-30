import {defineNuxtConfig} from "nuxt/config";
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

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
    plugins: [
        "~/plugins/vuetify",
        '~/plugins/global-company-assets-store-plugins.js'
    ],

    build: {
        transpile: ["vuetify"],
    },

    icon: {
        provider: 'iconify',
        serverBundle: false,
    },


    modules: [
        function (options, nuxt) { // Correct module function signature
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                const vuetifyPlugin = vuetify({autoImport: true});

                if (!config.plugins) {
                    config.plugins = [];
                }

                config.plugins.push(vuetifyPlugin);
            });
        },
        "nuxt-swiper",
        "nuxt-calendly",
        "@nuxt/icon",
        "@stefanobartoletti/nuxt-social-share",

    ],


    socialShare: {
        baseUrl: 'https://javaraya.co.uk'
    },


    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    ...({sourceMap: true} as any)
                },
            },
        },
    },
    experimental: {
        appManifest: false,
    },
    compatibilityDate: "2025-01-13",
    components: true,

});