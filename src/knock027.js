import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 27 1からnまでの和
// 整数値を入力し、1からその値までの総和を計算して表示するプログラムを作成します。
// ただし、0以下の値が入力された場合は、結果として "0" を表示します。

// 実行例:
//   入力:
//     数値: 10
//   出力:
//     sum = 55
//   入力:
//     数値: -2
//   出力:
//     sum = 0

// [Tips]
// - このトレーニングでは、関数の引数として入力値を受け取ります。
// - 総和は、forループを使って計算することができます。
// - 入力値が0以下の場合は、直接0を返すようにしましょう。

/**
 * 入力された値に応じて1からその値までの総和を計算する関数
 * @param {number} n - 入力された整数値
 * @returns {number} - 1からnまでの総和。nが0以下の場合は0。
 */
export const knock = (n) => {
  let result = 0
  if(n > 0){
    for(let i = 1; i <= n; i++){
      result += i
    }
    return result;
  }else{
    return 0;
  }
};
