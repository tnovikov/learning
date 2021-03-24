document.addEventListener("DOMContentLoaded", function () {
    var one = document.querySelectorAll('.one');
// two = document.getElementsByClassName("one");
    console.log(one);
// console.log(two);

    one[0].style.width = "150px";
// two[0].style.width = '150px';

});


/* var massiv = [];
for (i = 0; i <= 10; i++) {
    num = prompt("Enter number");
    massiv.push(parseInt(num));
}
square = function (number) {
    return Math.sqrt(number) * 3;
}
massiv[0] = modify(massiv[0], prompt)
function modify(what, how) {
    return how(what);
}
console.log(massiv[0]);*/
