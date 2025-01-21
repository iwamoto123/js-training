// No. 34 入力値抜き改
// 整数値を入力し、1から9までの数字を順に表示しますが、
// 入力値と入力値+1を除外します（入力値が9の場合、9のみ表示しない）。

// 実行例:
//   入力:
//     数値: 7
//   出力:
//     1
//     2
//     3
//     4
//     5
//     6
//     9

// 【Tips】
// - このトレーニングでは、繰り返し処理（forループ）を使います。
// - 条件分岐（if文）を使って、特定の値をスキップします。
// - 入力値が範囲外（1から9の範囲外）の場合は、何も除外せず1から9をすべて表示します。

/**
 * 入力値と入力値+1を除いた1から9までの数字を配列として返す関数
 * @param {number} exclude - 入力された整数値
 * @returns {Array<number>} - 入力値と入力値+1を除いた1から9までの数字
 */
export const knock = (exclude) => {
  const arr = [];
  if(1 <= exclude && exclude <= 9){
    for(let i = 1; i <= 9; i++){
      if(i === exclude || i === exclude + 1){
        continue;
      }else{
        arr.push(i)
      }
    }
  }else{
    for(let i = 1; i <= 9; i++){
        arr.push(i)
    }
  }
  return arr;
};
