import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 49 九九
// 九九の表を表示するプログラムを作成せよ。
// 数値は右詰めで表示すること。
//
// 実行例:
//  1  2  3  4  5  6  7  8  9
//  2  4  6  8 10 12 14 16 18
//  3  6  9 12 15 18 21 24 27
//  4  8 12 16 20 24 28 32 36
//  5 10 15 20 25 30 35 40 45
//  6 12 18 24 30 36 42 48 54
//  7 14 21 28 35 42 49 56 63
//  8 16 24 32 40 48 56 64 72
//  9 18 27 36 45 54 63 72 81
//
// 注意:
// - 各数値は右詰めで3文字分のスペースを確保
// - 各行の最後には余分なスペースを入れない
// - 最後の行の後には改行を入れない

/**
 * 九九の表を生成する関数
 * @returns {string} - 九九の表を文字列で返す（各数値は右詰めで3文字分）
 */
export const knock = () => {
  let result = "";

  for(let i = 1; i <= 9; i++){
    let row = "";

    for(let j = 1; j <= 9; j++){

      let value = i * j;
      let rowValue = value.toString();

      while(rowValue.length < 3){
        rowValue = " " + rowValue;
      }

      if(j <= 9){
        row += rowValue;
      }else{
        row += "\n";
      }
    }

      if(i < 9){
        result += row + "\n";
      }else{
        result += row;
      }
  }
  return result;
};
