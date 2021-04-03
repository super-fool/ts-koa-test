
import Router from 'koa-router';
import chalk from 'chalk';

export const homeRouter = new Router({
  prefix: '/home',
}).get('/', async (ctx:any) => {
  try {
    ctx.body = {
      status: 'success',
      data: `welcome to Hugo's Home!`,
    }
  } catch (e) {
    console.log(chalk.redBright.bold(e))
  }
})
