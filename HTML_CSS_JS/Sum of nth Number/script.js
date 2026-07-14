function findSum(){

    let number = Number(document.getElementById("number").value);

    let sum = 0;

    for(let i = 1; i <= number; i++){

        sum = sum + i;

    }

    document.getElementById("result").innerHTML =
    "Sum = " + sum;

}