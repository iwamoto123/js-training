import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 30 棒グラフ
// 整数値を入力し、その個数だけ `*` を表示するプログラムを作成します。
// ただし、入力値が0以下の場合は何も出力しません。

// 実行例:
//   入力:
//     数値: 7
//   出力:
//     *******
//   入力:
//     数値: 13
//   出力:
//     *************
//   入力:
//     数値: 0
//   出力:
//     （何も表示しない）

// [Tips]
// - このトレーニングでは、関数の引数として整数値を受け取ります。
// - 棒グラフの長さは入力値に応じて "*" を繰り返して表示します。
// - 入力が0以下の場合は空文字列を返してください。

/**
 * 入力された値に応じて棒グラフを作成する関数
 * @param {number} n - 入力された整数値
 * @returns {string} - 棒グラフ（"*"をn個並べた文字列）。nが0以下の場合は空文字列。
 */
export const knock = (n = 7) => {
  throw new TrainingSkipError("未実装");
};
