var btn = document.getElementById("btn");
var output = document.getElementById("output");
btn.addEventListener('click', function () {
    let word = document.getElementById("str").value;
    let count = word.length;
    output.innerHTML = count;
});