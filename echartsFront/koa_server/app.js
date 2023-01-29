const Koa = require("koa");

const app = new Koa();

const responseDurationMiddleWave = require("./middleWave/koa_response_duration");
app.use(responseDurationMiddleWave);

const responseHeaderMiddleWave = require("./middleWave/koa_response_header");
app.use(responseHeaderMiddleWave);

const responseDataMiddleWave = require("./middleWave/koa_response_data");
app.use(responseDataMiddleWave);

app.listen("8888");
