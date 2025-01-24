import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 38 さらに・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2} で初期化される大きさ10の整数型配列を宣言し、
// 最初は参照する要素番号を0とし、指定された手順で10回参照を繰り返し値を表示します。

// 実行例:
//   出力:
//     3
//     8
//     5
//     1
//     7
//     6
//     9
//     2
//     0
//     3

// 【Tips】
// - 配列の要素を繰り返し参照し、その値を次の参照のインデックスとして利用します。
// - 初期の参照する要素番号は0からスタートします。
// - 配列の要素を次々に参照し、10回繰り返して表示します。
// - 繰り返し処理には `for` ループを使用します。

/**
 * 配列要素を参照し、その値を次のインデックスとして10回繰り返して値を表示する関数
 * @returns {Array<number>} - 表示する値の配列
 */
export const knock = () => {
  const arr = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2];
  const resultArray = [];
  let index = 0;
  for(let i = 0; i < 10; i++){
    let value = arr[index];
    resultArray.push(value);
    index = value;
  }
  return resultArray;
};
