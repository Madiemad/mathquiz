var u1s = 0;
var u2s = 0
var q_turn = "p1";
var a_turn = "p2";
var a_answer;
document.getElementById("p1name").innerHTML = localStorage.getItem("user1_name") + ":    " + u1s;
document.getElementById("p2name").innerHTML = localStorage.getItem("user2_name") + ":   " + u2s;

function send() {
    if (document.getElementById("num1").value != "" && document.getElementById("num2").value != "" && parseInt(document.getElementById("num1").value) < 1000 && parseInt(document.getElementById("num2").value) < 1000) {
        a_answer = document.getElementById("num1").value * document.getElementById("num2").value;
        console.log(a_answer);
        var number1 = document.getElementById("num1").value;
        var number2 = document.getElementById("num2").value;
        answer = parseInt(number1) * parseInt(number2);
        document.getElementById("q").style.display = "block";
        document.getElementById("q").innerHTML = "QUESTION: " + number1 + "*" + number2;
        document.getElementById("ta").style.display = "block";
        document.getElementById("answer_box").style.display = "block";
        document.getElementById("check").style.display = "inline";
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("num1").style.display = "none";
        document.getElementById("num2").style.display = "none";
        document.getElementById("n1a").style.display = "none";
        document.getElementById("n2a").style.display = "none";
        document.getElementById("send").style.display = "none";
    } else {
        alert("ENTER BOTH THE NUMBERS CORRECTLY");
    }
}

function check() {
    w_answer = document.getElementById("answer_box").value;


    if (Number(w_answer) === Number(a_answer)) {
        alert("CORRECT")
        if (q_turn === "p1") {
            u1s = u1s + 1;

            console.log(localStorage.getItem("user1_name"))
            document.getElementById("p1name").innerHTML = localStorage.getItem("user1_name") + " :  " + u1s;
        } else {
            u2s = u2s + 1;


            document.getElementById("p2name").innerHTML = localStorage.getItem("user2_name") + " :  " + u2s;
            
        }
    }
    else{
           alert("BOOOO") 
    }
    if (q_turn === "p1") {
       q_turn="p2"


        document.getElementById("question_turn").innerHTML ="QUESTION TURN:-   "+ localStorage.getItem("user2_name") ;
    } else {
        q_turn="p1"


        document.getElementById("question_turn").innerHTML = "QUESTION TURN:-   "+ localStorage.getItem("user1_name")         
    }
    if (a_turn === "p1") {
        a_turn="p2"
 
 
         document.getElementById("answer_turn").innerHTML ="ANSWER TURN:-   "+  localStorage.getItem("user2_name") ;
     } else {
         a_turn="p1"
 
 
         document.getElementById("answer_turn").innerHTML ="ANSWER TURN:-   "+   localStorage.getItem("user1_name")         
     }

     document.getElementById("q").style.display = "none";

     document.getElementById("ta").style.display = "none";
     document.getElementById("answer_box").style.display = "none";
     document.getElementById("check").style.display = "none";

     document.getElementById("num1").style.display = "block";
     document.getElementById("num2").style.display = "block";
     document.getElementById("n1a").style.display = "block";
     document.getElementById("n2a").style.display = "block";
     document.getElementById("send").style.display = "block";
}