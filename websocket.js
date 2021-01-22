//引入express 和 ws
const express = require('express');
const SocketServer = require('ws').Server;
//指定开启的端口号
const PORT = 3000;
// 创建express，绑定监听3000端口，且设定开启后在consol中提示
const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`));
// 将express交给SocketServer开启WebSocket的服务
const wss = new SocketServer({ server });
//当 WebSocket 从外部连接时执行
wss.on('connection', (ws) => {
  //连接时执行此 console 提示
  console.log('Client connected');
  // 对message设置监听，接收从客户端发送的消息
  ws.on('message', (data) => {
    //data为客户端发送的消息，将消息原封不动返回回去
    ws.send(data);
  });
  const sendNowTime = setInterval(() => {
        ws.send(String(new Date()));
    }, 2000);

  // 当WebSocket的连接关闭时执行
  ws.on('close', () => {
    console.log('Close connected');
  });
});