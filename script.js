textLike1 = document.querySelector("#like-1");
textLike2 = document.querySelector("#like-2");
textLike3 = document.querySelector("#like-3");


var likes1 = 9;
var likes2 = 12;
var likes3 = 10;

textLike1.innerText = likes1 + " Like(s)";
textLike2.innerText = likes2 + " Like(s)";
textLike3.innerText = likes3 + " Like(s)";




//Funciones al apretar algunos de los botones de like 
buttonLike1 = document.querySelector("#like-button");
function clickLike1(element){
    likes1+=1;
    textLike1.innerText = likes1 + " Like(s)";
}

buttonLike2 = document.querySelector("#like-button");
function clickLike2(element){
    likes2+=1;
    textLike2.innerText = likes2 + " Like(s)";
}

buttonLike3 = document.querySelector("#like-button");
function clickLike3(element){
    likes3+=1;
    textLike3.innerText = likes3 + " Like(s)";
}