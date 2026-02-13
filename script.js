var text = prompt("Enter text").trim().toLowerCase();
var letter = prompt("Enter a letter").trim().toLowerCase();

var calculate = 0
for (var i = 0; i < text.length; i++) {
    if (text[i] === letter) {
        calculate++
    }
}

alert("This letter appears " + calculate + " times in your text.")