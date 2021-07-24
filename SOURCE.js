function add_user(){
    localStorage.clear();
    if (document.getElementById("user1_name").value != "" && document.getElementById("user2_name").value != "" ){
        localStorage.setItem("user1_name",document.getElementById("user1_name").value);
        localStorage.setItem("user2_name",document.getElementById("user2_name").value);
        window.location="./quizpage.html";
        }else{
        alert("SOMETHING WENT WRONG PLEASE ENTER YOUR NAME CORRECTLY");
    }
}