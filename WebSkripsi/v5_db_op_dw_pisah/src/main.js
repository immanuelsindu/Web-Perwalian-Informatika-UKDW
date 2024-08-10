import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router";
import store from "@/store/index";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

//axios
import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
    },
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .mount("#app");
