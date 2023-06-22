var n1 = Math.floor(Math.random() * 6 )+1;
var n2 = Math.floor(Math.random() * 6 )+1;
if (n1 > n2) {
    document.querySelector('h1').innerHTML = 'player 1 win';
} else if (n1 === n2) {
    document.querySelector('h1').innerHTML ='draw';
    
} else {
    document.querySelector('h1').innerHTML = 'player 2 win';

}
document.querySelector(".img1").setAttribute("src","images/dice" + n1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + n2 + ".png");
