import Koa from 'koa';
const app = new Koa();

import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import {blogRouter, homeRouter, userRouter} from './routes'
import {CONFIG} from './config'

app.use(bodyParser());
app.use(cors({
  origin: "*"
}))

app.use(homeRouter.routes()).use(userRouter.routes()).use(blogRouter.routes());
app.use(logger());


// app.use(async (ctx, next) => {
//   await next();
  
//   ctx.body = "Hello World";
// });

const server = app.listen(CONFIG.port, async () => {
  console.log("Server listening on Port ", CONFIG.port);
}).on("error", err => {
  console.error(err)
})

export default server;