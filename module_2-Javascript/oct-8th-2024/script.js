let iswhite = true;

let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    if (iswhite){
        document.body.style.background = "black";
        button.textContent = "chnage to White";
    }
    else{
        document.body.style.background = "white";
        button.textContent = "change to black"
    }

    iswhite =! iswhite;
});

