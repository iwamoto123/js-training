import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 51 お支払い
// 支払い金額を入力し、その金額を支払うために必要な紙幣・硬貨の枚数を計算するプログラムを作成せよ。
// ただし、紙幣・硬貨は10000円、5000円、1000円、500円、100円、50円、10円、5円、1円とし、
// できるだけ少ない枚数で支払うものとする。
//
// 実行例:
// input payment:
// 54321
// 10000円: 5枚
// 5000円: 0枚
// 1000円: 4枚
// 500円: 0枚
// 100円: 3枚
// 50円: 0枚
// 10円: 2枚
// 5円: 0枚
// 1円: 1枚
//
// 注意:
// - 各金額について「X円: Y枚」の形式で出力
// - 0枚の場合も表示する
// - 金額は昇順で表示する
// - 最後の行にも改行を入れる

/**
 * 支払い金額から必要な紙幣・硬貨の枚数を計算する関数
 * @param {number} payment - 支払い金額（正の整数）
 * @returns {Array<string>} - 各紙幣・硬貨の必要枚数を「X円: Y枚」の形式で返す
 * @throws {Error} - 金額が0以下の場合は "金額は0より大きい値を入力してください" というエラーを投げる
 */
export const knock = (payment = 54321) => {

  const arr = [];

  if(payment <= 0){
    throw new Error("金額は0より大きい値を入力してください");
  }

  const currency = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

  let rowValue = payment;

  for(let i = 0; i < currency.length; i++){
      let valueNunber = Math.floor(rowValue / currency[i]);
      rowValue = rowValue % currency[i];
      arr.push(`${currency[i]}円: ${valueNunber}枚`);
    
  }
  return arr;

};
