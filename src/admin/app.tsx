import favicon from "./extensions/favicon.jpg";

export default {
  config: {
    head: {
      favicon: favicon,
    },
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
  },
  bootstrap(app) {
    console.log(app);
  },
};
