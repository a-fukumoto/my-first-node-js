'use strict';
// process.argv[2]: 0はnodeコマンドのパス　1は実行jsプログラムのパスが入るため
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 0; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);