import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'
import App from './App.vue'
import { router } from './router'
import {createI18n} from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: 'en-US',
  globalInjection: true,
  missingWarn: false,
  fallbackWarn: false,
  availableLocales: ['en','nl'],
  messages
})

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router)
  app.use(i18n)
  app.use(VueMeteor)
  app.mount('#app')
})
