// No. 06 0?
// 整数値を入力させ、値が 0 なら "zero" と表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock06
//   input number: 0
//   zero
//   (値が 0 以外の場合は何も表示しない)
//
// [Tips]
// - 0 かどうかを判定する: if (num === 0) { ... }
// - ここでは出力内容を関数の戻り値として返す想定
//
// @param {number} num
// @returns {string}
//   "input number: num\nzero" (num が 0 のとき)
//   または
//   "input number: num" (num が 0 以外のとき)
export const knock = (num = 0) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  if (num === 0) {
    return `input number: ${num}\nzero`;
  } else {
    return `input number: ${num}`;
  }
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

const diceSample = () => {
  const dice = 1;
  if (dice <= 2) {
    // 2以下
  } else if (dice > 3) {
    //3超過
  } else if (dice >= 5) {
    //5以上
  } else if (dice === 3) {
    // 3と同等か
    // よくある他の言語の比較演算子 == or !=
    // JavaScriptの場合は === or !==
  }
};
