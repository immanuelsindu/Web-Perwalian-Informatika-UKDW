// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    components: {
        ...components,
    },
    icons: {
        defaultSet: "mdi", // This is already the default value - only for display purposes
    },
});
