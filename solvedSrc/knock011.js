// No. 11 ごあいさつ10回
// Hello World! を10回繰り返して表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock11
//   Hello World!
//   Hello World!
//   ... (合計10回)
//
// [Tips]
// - for文やwhile文、あるいはArrayメソッドを使って10回繰り返す
//   for (var i = 0; i < 10; i++) { ... }
//   など
//
// @returns {string}
//   "Hello World!\n" を10回連結した文字列 (最後の行末については気にしない)
export const knock = () => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  var result = "";
  for (let i = 0; i < 10; i++) {
    result += "Hello World!\n";
  }
  return result;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
