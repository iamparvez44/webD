let parant = document.querySelector(".parant");

parant.addEventListener("click", function(det){
    
    if(det.target.id === "play"){
        console.log("Song Play");
    }
    else{
        console.log("pause")
    }

})