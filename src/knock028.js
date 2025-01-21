import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 28 nの階乗
// 整数値を入力し、その値の階乗（n!）を計算して表示するプログラムを作成します。
// ただし、0以下の値が入力された場合は、結果として "1" を表示します。

// 実行例:
//   入力:
//     数値: 10
//   出力:
//     factorial = 3628800
//   入力:
//     数値: -2
//   出力:
//     factorial = 1

// [Tips]
// - このトレーニングでは、関数の引数として入力値を受け取ります。
// - 階乗は 1 からその数値までの積を求める計算です。
//   例: 5! = 1 × 2 × 3 × 4 × 5 = 120
// - 入力が 0 以下の場合、階乗の結果は 1 とみなします（数学的定義）。

/**
 * 入力された値の階乗を計算する関数
 * @param {number} n - 入力された整数値
 * @returns {number} - 入力値の階乗（n!）。nが0以下の場合は1。
 */
export const knock = (n = 5) => {
  let result = 1
  if(n > 0){
    for(let i = n; i >= 1; i--){
      result *= i
    }
    return result;
  }else{
    return 1;
  }
};
