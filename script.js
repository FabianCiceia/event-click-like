textLike = document.querySelector("#like");
var likes = 0;
textLike.innerText = likes + " Likes";

buttonLike = document.querySelector("#like-button");
function clickLike(element){
    likes+=1;
    console.log(likes + "Likes");
    textLike.innerText = likes + " Likes";
}