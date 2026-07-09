function addNumbers() {
    let Num1 = Number(document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);

    let sum = Num1 + Num2;

    document.getElementById("result").innerHTML = "The Sum of two number is: " + sum;
}