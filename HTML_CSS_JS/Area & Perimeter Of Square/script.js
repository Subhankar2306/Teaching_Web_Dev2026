function calculate() {
    let side = Number(document.getElementById("side").value);

    let area = side * side;
    let perimeter = 4 * side;

    document.getElementById("area").innerHTML =
        "Area = " + area;

    document.getElementById("perimeter").innerHTML =
        "Perimeter = " + perimeter;
}