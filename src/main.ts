import { createApp } from 'vue';
import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload';
import router from './router';
import { createI18n } from 'vue-i18n';
import messages from '../locales/messages.js';

import './main.css';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App);
app.use(router).use(i18n).use(VueLazyLoad, {});
app.mount('#app');
