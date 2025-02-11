import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 58 棒グラフ
// 5つの整数値を入力し、それぞれの値に応じた長さの棒グラフを表示するプログラムを作成せよ。
// グラフは「*」を横に並べて表現し、各行の先頭には入力値を表示すること。
//
// 実行例:
// input five numbers:
// [10, 5, 3, 8, 1]
// 10: **********
//  5: *****
//  3: ***
//  8: ********
//  1: *
//
// input five numbers:
// [3, 3, 3, 3, 3]
//  3: ***
//  3: ***
//  3: ***
//  3: ***
//  3: ***
//
// 注意:
// - 入力値は0以上の整数
// - 入力値の表示は右詰めで3文字分のスペースを確保
// - 各行の最後には改行を入れる
// - 配列の長さが5でない場合はエラーを出力
// - 負の数が含まれる場合はエラーを出力

/**
 * 棒グラフを生成する関数
 * @param {Array<number>} numbers - 5つの整数値の配列（0以上の整数）
 * @returns {string} - 棒グラフの文字列（各行末に改行あり）
 * @throws {Error} - 配列の長さが5でない場合は "5つの数値を入力してください" というエラーを投げる
 * @throws {Error} - 負の数が含まれる場合は "0以上の整数を入力してください" というエラーを投げる
 */
export const knock = (numbers = [10, 5, 3, 8, 1]) => {
  if(numbers.length !== 5){
    throw new Error("5つの数値を入力してください");
  }
  if(numbers.some(value => value < 0)){
    throw new Error("0以上の整数を入力してください");
  }

  const graphArr = [];

  for(const number of numbers){
    let graph = "";
    for(let i = 1; i <= number; i++){
      graph += "*";
    }
    graphArr.push(`${String(number).padStart(2, " ")}: ${graph}`);
  }

  return graphArr.join("\n");
};
