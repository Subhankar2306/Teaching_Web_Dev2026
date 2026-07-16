function checkLetter(){

    let letter = document.getElementById("letter").value;

    if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u" ||
       letter=="A" || letter=="E" || letter=="I" || letter=="O" || letter=="U"){

        document.getElementById("result").innerHTML =
        letter + " is a Vowel";

    }
    else{

        document.getElementById("result").innerHTML =
        letter + " is a Consonant";

    }

}

// Optimised Virsion

function checkCharacter() {

    let ch = document.getElementById("letter").value;

    if (ch.length != 1) {

        document.getElementById("result").innerHTML =
            "Please enter only one character.";

    }
    else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {

        if ("AEIOUaeiou".includes(ch)) {

            document.getElementById("result").innerHTML =
                ch + " is a Vowel";

        }
        else {

            document.getElementById("result").innerHTML =
                ch + " is a Consonant";

        }

    }
    else if (ch >= '0' && ch <= '9') {

        document.getElementById("result").innerHTML =
            ch + " is a Number";

    }
    else {

        document.getElementById("result").innerHTML =
            ch + " is a Special Character";

    }

}