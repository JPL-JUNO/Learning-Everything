const Koa = require("koa");

const app = new Koa();

const responseDurationMiddleWave = require("./middleWave/koa_response_duration");
app.use(responseDurationMiddleWave);

const responseHeaderMiddleWave = require("./middleWave/koa_response_header");
app.use(responseHeaderMiddleWave);

const responseDataMiddleWave = require("./middleWave/koa_response_data");
app.use(responseDataMiddleWave);

app.listen("8888");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9998 });

wss.on("connection", (client) => {
  console.log("有客户端连接成功了");
  client.on("message", (msg) => {
    console.log("客户端发送数据给服务端了：" + msg);
    client.send("Hello Socket");
  });
});
