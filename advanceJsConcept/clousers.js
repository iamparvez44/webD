// clousers
// esa koe b function jo return karta hai ek function and wo return function use karta hai apna parant variable ki koe value.

function one() {
  let a = 10;

  return function two() {
    a++;
    console.log(a);
  };
}

let ans = one();
ans();
