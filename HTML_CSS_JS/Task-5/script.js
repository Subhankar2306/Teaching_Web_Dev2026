function checkNumber() {

    let num = Number(document.getElementById("num").value);

    if (num > 0) {
        document.getElementById("result").innerHTML =
            num + " is a Positive Number";
    }
    else if (num < 0) {
        document.getElementById("result").innerHTML =
            num + " is a Negative Number";
    }
    else {
        document.getElementById("result").innerHTML =
            "The number is Zero";
    }
} 