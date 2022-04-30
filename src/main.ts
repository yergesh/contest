import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router/router"
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
loadFonts()

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App)
  .use(vuetify)
  .use(router)
  .use(Notifications)
  .use(pinia) 
  .mount('#app')
