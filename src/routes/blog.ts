import Router from "koa-router";

const mockBlogs = [{ id: 1, name: "blog one", content: 'what is JavaScript' }, { id: 2, name: "blog one", content: 'what is JavaScript' }];
export const blogRouter = new Router({
  prefix: "/blogs"
}).get('/',(ctx) => {
  ctx.body = `Welcome my blog`
}).get('/:blogId', (ctx, next) => {
  const blogId = ctx.params.blogId;
  const matchedBlog = mockBlogs.find(blog => (blog.id == blogId))

  ctx.body = matchedBlog? `found blog: ${matchedBlog.name}` : `not found blog: ${blogId}`
})

