// call apply and bind are the takreeke functon ko call karne k kisi object ko this maan kar

// let obj = {
//     name: "parvez",
//     age: 26
// }

// function abc(e){
//     console.log(this);
// }

// abc.call(obj);






// prototype inheritance here we will discuss this make blank object in this condtion


function human(name, age){

    this.name = name,
    this.age = age

}

let ans1 = new human("golu", 27);
let ans2 = new human("faiz", 26);

console.log(ans1);
console.log(ans2);