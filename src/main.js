import { createApp } from "vue";
import "./style.css";
import router from './router'
import App from "./App.vue";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
  })
  


  app.use(vuetify);

  app.use(router);

app.mount("#app");