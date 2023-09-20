// @ts-nocheck
import favicon from './extensions/favicon.png'
const config = {
  notifications: {
    releases: false,
  },
  translations: {
    es: {
      "Auth.form.email.label": "Correo electrónico",
      User: "Usuarios",
      "app.components.LeftMenu.navbrand.title": "INACI",
      "app.components.LeftMenu.navbrand.workplace": "Panel de Control",
    },
    en: {
      "Auth.form.email.label": "Email",
      "app.components.LeftMenu.navbrand.title": "INACI",
    },
  },
  head:{
    favicon: favicon,
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
