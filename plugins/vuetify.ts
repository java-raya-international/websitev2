import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css';

import "vuetify/styles";
import "~/assets/scss/style.css";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
    },
    directives,
    theme: {
      defaultTheme: 'light',
    },
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  });
  app.vueApp.use(vuetify);
});
