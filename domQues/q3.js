// create a form with input field and a submit button. use javaScript to vailidate the form and display
// an error msg if the input is valid

// let form = document.querySelector("form");
// let name = document.querySelector("#name");
// let email = document.querySelector("#email");


// form.addEventListener("submit", function (det) {
//   det.preventDefault();
//   if (email.value === "" || name.value === "") {

//     document.querySelector("h3").textContent = "Eorro some field are blank";
//     document.querySelector("h3").style.color = "red";
//     document.querySelector("h3").style.fontSize = "10px";



//   }
// });






let form = document.querySelector("form");
let h3 = document.querySelector('h3');
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function(ev){
    ev.preventDefault();

    for(let i=0; i<inp.length; i++){
        if(inp[i].value === ''){
            h3.textContent = "Error";
            h3.style.color = "red";
            break;
        }
        else{
            h3.textContent = "";

        }
    }

})
