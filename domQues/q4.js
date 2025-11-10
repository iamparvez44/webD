let add = document.querySelector("#btn-1");
let remove = document.querySelector("#btn-2");
let inp = document.querySelector("#field");
let allLi = document.querySelectorAll('li');
let ul = document.querySelector("ul");
let li;



// this is for adding the element
add.addEventListener("click", function () {
  if (inp.value.trim() === " ") {
  } else {

    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
   
  }
});

// this is for removing the elemnt

remove.addEventListener("click", function(){
   allLi.forEach(li=>{
    
   })
})