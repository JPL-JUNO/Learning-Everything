// 计算服务器消耗时长的中间件
module.exports = async (ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  const duration = end - start;
  // ctx.set 设置响应头
  ctx.set("X-response-Time", duration + "ms");
};
