const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const homeAdData = require('./home/ad.js')
const homeListData = require('./home/list.js')

router.get('/api/homead', (ctx, next) => {
  ctx.body = homeAdData
})

router.get('/api/homelist/:city/:page', (ctx, next) => {
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  ctx.body = homeListData
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(9093);
