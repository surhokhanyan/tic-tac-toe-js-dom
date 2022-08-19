let containerDivs = document.querySelectorAll(".containerDivs");
let firstPlayer = document.querySelector("#firstPlayer");
let secondPlayer = document.querySelector("#secondPlayer");
let btn = document.querySelector("#btn");
let mainpage = document.querySelector("#mainpage");
let container = document.querySelector("#container");
let gamepage = document.querySelector("#gamepage");
let playAgain = document.querySelector("#win button");
let win = document.querySelector("#win");
let winH3 = document.querySelector("#win h3");
let turn = document.querySelector("#turn");
let isOpen = true;
btn.addEventListener("click", ()=>{
    if(firstPlayer.value != 0 && secondPlayer.value != 0){
        mainpage.style.display = "none";
        gamepage.style.display = "flex";
    }else if(firstPlayer.value != 0 && secondPlayer.value == 0){
        secondPlayer.style.border = "4px solid red";
        secondPlayer.removeAttribute("placeholder");
        secondPlayer.setAttribute("placeholder", "The player name is required");
        secondPlayer.style.color = "red";
    }else if(firstPlayer.value == 0 && secondPlayer.value != 0){
        firstPlayer.style.border = "4px solid red";
        firstPlayer.removeAttribute("placeholder");
        firstPlayer.setAttribute("placeholder", "The player name is required");
        firstPlayer.style.color = "red";
    }else if(firstPlayer.value == 0 && secondPlayer.value == 0){
        firstPlayer.style.border = "4px solid red";
        firstPlayer.removeAttribute("placeholder");
        firstPlayer.setAttribute("placeholder", "The player name is required");
        firstPlayer.style.color = "red";
        secondPlayer.style.border = "4px solid red";
        secondPlayer.removeAttribute("placeholder");
        secondPlayer.setAttribute("placeholder", "The player name is required");
        secondPlayer.style.color = "red";
    }
});
containerDivs.forEach(elm =>{
    elm.addEventListener("click", ()=>{
        if (isOpen === true && elm.textContent === ""){
            elm.innerHTML = "X";
            turn.innerHTML = secondPlayer.value + " is your turn";
            turn.style.color = "#119c0d";
            turn.style.backgroundColor = "#129c0d00";
            isOpen = false;
            console.log(elm.textContent)
        }else if (isOpen === false && elm.textContent === ""){
            elm.innerHTML = "O"
            turn.innerHTML = firstPlayer.value + " is your turn";
            turn.style.color = "#119c0d";
            turn.style.backgroundColor = "#129c0d00";
            isOpen = true;
        }else if (elm.textContent === "X"){
            elm.innerHTML = "X";
            turn.innerHTML = "The box isn't empty";
            turn.style.color = "white";
            turn.style.backgroundColor = "red";
        }else if (elm.textContent === "O"){
            elm.innerHTML = "O";
            turn.innerHTML = "The box isn't empty";
            turn.style.color = "white";
            turn.style.backgroundColor = "red";
        }
        if(containerDivs[0].textContent === "X" && containerDivs[1].textContent === "X" && containerDivs[2].textContent === "X" ||
            containerDivs[3].textContent === "X" && containerDivs[4].textContent === "X" && containerDivs[5].textContent === "X" ||
            containerDivs[6].textContent === "X" && containerDivs[7].textContent === "X" && containerDivs[8].textContent === "X" ||
            containerDivs[0].textContent === "X" && containerDivs[4].textContent === "X" && containerDivs[8].textContent === "X" ||
            containerDivs[2].textContent === "X" && containerDivs[4].textContent === "X" && containerDivs[6].textContent === "X" ||
            containerDivs[0].textContent === "X" && containerDivs[3].textContent === "X" && containerDivs[6].textContent === "X" ||
            containerDivs[1].textContent === "X" && containerDivs[4].textContent === "X" && containerDivs[7].textContent === "X" ||
            containerDivs[2].textContent === "X" && containerDivs[5].textContent === "X" && containerDivs[8].textContent === "X")  {
            gamepage.style.display = "none";
            win.style.display = "flex";
            winH3.innerHTML = firstPlayer.value + " WIN";
            playAgain.onclick = function(){
                mainpage.style.display = "flex";
                win.style.display = "none";
                firstPlayer.value = null;
                firstPlayer.style.color = "#119c0d";
                secondPlayer.style.color = "#119c0d";
                secondPlayer.value = null;
                firstPlayer.style.border = " 2px solid #119c0d";
                secondPlayer.style.border = " 2px solid #119c0d";
                containerDivs.forEach(item =>{
                    item.innerHTML = "";
                })
            }
        }else if(containerDivs[0].textContent === "O" && containerDivs[1].textContent === "O" && containerDivs[2].textContent === "O" ||
            containerDivs[3].textContent === "O" && containerDivs[4].textContent === "O" && containerDivs[5].textContent === "O" ||
            containerDivs[6].textContent === "O" && containerDivs[7].textContent === "O" && containerDivs[8].textContent === "O" ||
            containerDivs[0].textContent === "O" && containerDivs[4].textContent === "O" && containerDivs[8].textContent === "O" ||
            containerDivs[2].textContent === "O" && containerDivs[4].textContent === "O" && containerDivs[6].textContent === "O" ||
            containerDivs[0].textContent === "O" && containerDivs[3].textContent === "O" && containerDivs[6].textContent === "O" ||
            containerDivs[1].textContent === "O" && containerDivs[4].textContent === "O" && containerDivs[7].textContent === "O" ||
            containerDivs[2].textContent === "O" && containerDivs[5].textContent === "O" && containerDivs[8].textContent === "O"){
            gamepage.style.display = "none";
            win.style.display = "flex";
            winH3.innerHTML = secondPlayer.value + " WIN";
            playAgain.onclick = function(){
                mainpage.style.display = "flex";
                win.style.display = "none";
                firstPlayer.value = null;
                firstPlayer.style.color = "#119c0d";
                firstPlayer.style.border = " 2px solid #119c0d";
                secondPlayer.value = null;
                secondPlayer.style.border = " 2px solid #119c0d";
                secondPlayer.style.color = "#119c0d";
                containerDivs.forEach(item =>{
                    item.innerHTML = "";
                })
            }
        }
    })
})

