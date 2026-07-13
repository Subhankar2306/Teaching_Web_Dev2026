function findFactorial(){

    let number = Number(document.getElementById("number").value);

    let factorial = 1;

    if(number < 0){

        document.getElementById("result").innerHTML =
        "Factorial is not possible for negative numbers.";

    }
    else{

        for(let i=1; i<=number; i++){

            factorial = factorial * i;

        }

        document.getElementById("result").innerHTML =
        "Factorial of " + number + " = " + factorial;

    }

}