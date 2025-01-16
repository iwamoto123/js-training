
var items = []; // 配列リテラル
// var items2 = new Array();

items[0] = "test"
items[1] = "test2"
console.log(items)
console.log("items[0] => ", items[0])

items.push("test3")

for (const item of items) {
  console.log(`item => ${item}`)
}
