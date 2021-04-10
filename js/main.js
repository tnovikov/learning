document.addEventListener("DOMContentLoaded", function () {
    var Jap = /[А-Я][^А-Я\.]+([Яя]пон[^\s]*)[^\.]+\./g;
    var One = document.getElementById("one");
    console.log(One);
    console.log(One.textContent.match(Jap));
    One.textContent.replace(Jap,"<b>$0</b>")
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
