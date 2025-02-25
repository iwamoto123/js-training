import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 36 続・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2} で初期化される大きさ10の整数型配列を宣言し、
// 整数値を2つ入力して、そのインデックスに対応する配列要素の積を計算して表示するプログラムを作成します。

// 実行例:
//   入力:
//     index1: 3
//     index2: 6
//   出力:
//     8 * 9 = 72

// 【Tips】
// - 配列の要素にアクセスするには、インデックス（要素番号）を使用します。
//   例: `array[3]` は配列の4番目の要素（8）を取得します。
// - 配列は `const` を使って定義すると、内容が変更されないので安全です。
// - 配列内の特定の要素を使った計算では、一時的な変数に格納すると分かりやすくなります。

/**
 * 2つのインデックスに対応する配列要素の積を計算する関数
 * @param {number} index1 - 1つ目のインデックス
 * @param {number} index2 - 2つ目のインデックス
 * @returns {string} - 配列要素の積を計算した結果を文字列で返す
 */
export const knock = (index1, index2) => {
  const arr = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2]
  let result = 0;
  result = arr[index1] * arr[index2]
  return `${arr[index1]} * ${arr[index2]} = ${result}`;
};
