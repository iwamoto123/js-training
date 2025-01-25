import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 37 続々・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2} で初期化される大きさ10の整数型配列を宣言し、
// 整数値を入力して、その値を要素番号とする配列要素を参照します。
// さらに、参照した値を要素番号とする配列要素を参照して表示するプログラムを作成します。

// 実行例:
//   入力:
//     index: 8
//   出力:
//     value = 1

// 【Tips】
// - 配列の要素を取得する際にインデックスを参照します。
//   例: `array[index]` で指定した要素を取得できます。
// - 参照した値を再度インデックスとして使う場合には、
//   配列の要素が有効な範囲に収まっていることを前提としています。
// - 入れ子になった配列アクセスを行うことで、連続して値を取得できます。

/**
 * 2段階の配列要素の参照を行い値を取得する関数
 * @param {number} index - 最初に参照する配列のインデックス
 * @returns {string} - 最終的に取得した値を文字列で返す
 */
export const knock = (index) => {
  const arr = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2]
  let result = 0;
  let result2 = 0;

  result = arr[index]

  result2 = arr[result]

  return `value = ${result2}`;
};
