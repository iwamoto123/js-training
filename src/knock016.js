import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 16 0でおしまい
// 整数値を入力させ、入力値が0でなければ再度入力させ、0であれば終了するプログラムを作成せよ。
// 実行例:
//   $ ./knock16
//   input number: 5
//   input number: 3
//   input number: -4
//   input number: 0
//
// [Tips]
// - このトレーニングでは、関数の引数として「入力値の配列」を受け取り、0 が出るまで繰り返す想定にしている
//   例）knock([5, 3, -4, 0]) → "input number: 5\ninput number: 3\ninput number: -4\ninput number: 0\n"
//
// @param {number[]} inputs - 整数値の配列。0が出てくるまで繰り返し、0が出たら終了
// @returns {string} "input number: x\n..." が 0 に出会うまで繰り返される
export const knock = (inputs = [5, 3, -4, 0, 1, 2, 3, 4]) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  var result = ""
  for(const input of inputs){
    if(input !== 0){
      result += `input number: ${input}\n`;
    }else{
      result += "input number: 0";
      break;
    }
  }
  // return `input number: ${result}\n...`;
  return result;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
}

const arrayExample2 = () => {
  // for ofループ
  // forループ
  // whileループ

  const inputs = [5, 3, -4, 0, 1, 2, 3, 4]
  var index = 0
  var text = ""
  // while(inputs[index] !== 0) {
  //   text += `input number: ${inputs[index]}`
  //   index += 1
  // }
  do {
    text += `input number: ${inputs[index]}`
    index += 1
  } while(inputs[index] !== 0)

}

console.log(knock([1, 2, 3, 0]));
