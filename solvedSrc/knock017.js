/**
 * 配列の初期化と操作の練習
 *
 * 課題:
 * 1. 要素数10の配列を作成する
 * 2. 配列のインデックスiの位置に値iを代入する（0から9まで）
 * 3. 作成した配列を返す
 *
 * 期待される戻り値:
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * [Tips]
 * - 配列の作成方法:
 *   - const arr = new Array(10);  // 長さ10の空の配列
 *   - const arr = [];             // 空の配列
 * - 配列への値の代入: arr[i] = i;
 *
 * @returns {number[]} 0から9までの数値が順番に格納された配列
 */
export const knock = () => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const arr = new Array(10);
  for (let x = 0; x < arr.length; x++) {
    arr[x] = x;
  }
  return arr;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

console.log(knock());
