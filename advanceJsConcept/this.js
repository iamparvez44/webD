// here we will discusss the concept of this key word which is the most import concept of advance js

// global =============> window

// console.log(this);








// function ===========> window

// function myfnc(){
//     console.log(this);
// }
// myfnc();







// method==========> object

// let obj = {
//     fnc: function myfnc(){
//         console.log(this.age);
//     },

//     age:25,
//     name: "parvez"
// }

// obj.fnc();





// function inside method (es5)=====> window

// let obj2 = {
//     fnc: function(){
//         function childfnc(){
//             console.log(this);
//         }

//         childfnc();
//     }
    
// }

// obj2.fnc(); 








// function inside method (es6)==========> object

let obj = {
    fnc: function(){
        let myfnc = ()=>{
            console.log(this.age);
        }

        myfnc();
    },
    name: "parvez",
    age: 65,
    company: "Glenmark"
}

obj.fnc();

// constructor fnc me this ki value - new blank obj
// event listner me this ki value- that element jis per event lister laga ho

