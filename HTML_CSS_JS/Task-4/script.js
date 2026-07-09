function swapNumbers() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    // Swapping using a temporary variable
    let temp = num1;
    num1 = num2;
    num2 = temp;

    document.getElementById("result").innerHTML =
        "After Swapping:<br>" +
        "First Number = " + num1 +
        "<br>Second Number = " + num2;
}