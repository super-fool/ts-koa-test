import Router from "koa-router";
import { blogRouter } from "./blog";
export const userRouter = new Router({
  prefix: '/users'
}).get(
  '/:userId', (ctx) => {
    const userId = ctx.params.userId
    ctx.body = 'Welcome to ' + userId;
  }
)
// nested blog router, path is /:userId/blog/
.use('/:userId', blogRouter.routes(), (ctx, next) => {
})
