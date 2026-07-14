function findLargest(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    if(num1 > num2 && num1 > num3){

        document.getElementById("result").innerHTML =
        num1 + " is the Largest Number";

    }
    else if(num2 > num1 && num2 > num3){

        document.getElementById("result").innerHTML =
        num2 + " is the Largest Number";

    }
    else{

        document.getElementById("result").innerHTML =
        num3 + " is the Largest Number";

    }

}