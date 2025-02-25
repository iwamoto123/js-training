import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 59 行列の和
// 2つの3×3の行列を入力し、その和を計算するプログラムを作成せよ。
// 行列は2次元配列として受け取り、結果も2次元配列として返すこと。
//
// 実行例:
// input matrix1:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
// input matrix2:
// [[9, 8, 7],
//  [6, 5, 4],
//  [3, 2, 1]]
// 結果:
// [[10, 10, 10],
//  [10, 10, 10],
//  [10, 10, 10]]
//
// input matrix1:
// [[0, 1, 2],
//  [3, 4, 5],
//  [6, 7, 8]]
// input matrix2:
// [[1, 1, 1],
//  [1, 1, 1],
//  [1, 1, 1]]
// 結果:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
//
// 注意:
// - 入力は3×3の2次元配列のみ
// - 配列の形式が正しくない場合はエラーを出力
// - 各要素は整数値

/**
 * 2つの3×3行列の和を計算する関数
 * @param {Array<Array<number>>} matrix1 - 1つ目の3×3行列
 * @param {Array<Array<number>>} matrix2 - 2つ目の3×3行列
 * @returns {Array<Array<number>>} - 和の行列
 * @throws {Error} - 行列の形式が正しくない場合は "3×3の行列を入力してください" というエラーを投げる
 */
export const knock = (
  matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
) => {

    if (
    !Array.isArray(matrix1) || !Array.isArray(matrix2) ||
    matrix1.length !== 3 || matrix2.length !== 3 ||
    matrix1.some(row => !Array.isArray(row) || row.length !== 3) ||
    matrix2.some(row => !Array.isArray(row) || row.length !== 3)
  ) {
    throw new Error("3×3の行列を入力してください");
  }

  const arr = [];
  for(let i = 0; i < 3; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
      arr[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return arr;
};
