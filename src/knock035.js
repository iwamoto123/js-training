import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 35 配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2} で初期化される大きさ10の整数型配列を宣言し、
// 整数値を入力して、要素番号が入力値である配列要素の値を表示するプログラムを作成します。
// 配列の範囲外のチェックは省略します。

// 実行例:
//   入力:
//     要素番号: 0
//   出力:
//     array[0] = 3
//   入力:
//     要素番号: 5
//   出力:
//     array[5] = 1

// 【Tips】
// - 配列は複数の値を1つの変数で管理するために使います。
// - 配列の要素にアクセスするには、インデックス（要素番号）を使用します。
//   例:
//     const array = [3, 7, 0, 8, 4];
//     console.log(array[0]); // 3
//     console.log(array[1]); // 7
// - 配列のインデックスは0から始まることに注意してください。
// - 初期化された配列は定数（`const`）として宣言すると良いでしょう。

/**
 * 入力されたインデックスの配列要素を返す関数
 * @param {number} index - 入力された整数値（配列のインデックス）
 * @returns {string} - 配列の要素を示す文字列
 */
export const knock = (index) => {
  const arr = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2];
  return `array[${index}] = ${arr[index]}`;
};
