const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// 配置解析请求体数据 application/json
app.use(express.json());
// 配置解析请求体数据 application/x-www-form-urlencoded
app.use(express.urlencoded());
// 日志
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('hello express');
});

app.listen(PORT, () => {
  const yellowBright = chalk.yellowBright;
  const green = chalk.green;
  console.log(`
    ${yellowBright('Local Server running at:')}
    http://localhost:${green(PORT)}
    http://127.0.0.1:${green(PORT)}
    Hit CTRL-C to stop the server
  `);
});