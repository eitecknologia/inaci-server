
export default {
    async index(ctx, next) { // called by GET /hello
      ctx.body = 'Hello World!'; // we could also send a JSON
    },
    async send (ctx, next) {
        const body = ctx.request.body
        const name = body.name
        await strapi.plugin('email').service('email').send({
            to: 'cristhianalejandroguadalupe@gmail.com',
            from: 'cristhianalejandroguadalupe@gmail.com',
            subject: 'Hello world',
            text: 'Hello world',
            html: `<h4>Hello world <strong>${name}</strong></h4>`,
          });
      },
  };