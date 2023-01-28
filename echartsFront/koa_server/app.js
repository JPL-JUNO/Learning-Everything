const Koa = require("koa");

const app = new Koa();

const responseDurationMiddleWave = require("./middleWave/koa_response_duration");

app.use(responseDurationMiddleWave);

app.listen("8888");
