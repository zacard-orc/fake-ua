/* eslint-disable */
const { FauGen } = require('../lib');
const iFau = new FauGen();

for (let i = 0; i < 10; i++) {
  console.log(iFau.slim());
}
