let A = { a: 45, b: 3 };
let B = { c: 8, e: 65 };
let C = { name: "sabita", age: 19 };
let d = 56;
let a = [A, B, C, d];

console.log("Initial array:", a);

for (let i = 1; i <= 4; i++) {
  let lst = a.pop();
  console.log("Removed element:", lst);
  console.log("After removing last:", a);
}

a.push("e=3"); // or a.push({e: 3}) if you want an object
console.log("Add new element at end:", a);

console.log("Final array:", a);
