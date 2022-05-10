player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1score = 0;
player2score = 0;

console.log(player1score);

document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player_1_score").innerHTML = player1score;
document.getElementById("player2_name").innerHTML = player2 + ":";
document.getElementById("player_2_score").innerHTML = player2score;

document.getElementById("qt").innerHTML = "Question Turn - " + player1;
document.getElementById("at").innerHTML = "Answer Turn - " + player2;

function Send() {
    inputword = document.getElementById("word").value;
    inputwordlc = inputword.toLowerCase();

    sl = inputwordlc.charAt(1);
    center = Math.floor(inputwordlc.length / 2);
    ml = inputwordlc.charAt(center);
    scl = inputwordlc.charAt(inputwordlc.length - 1);
    removesl = inputwordlc.replace(sl, " _ ");
    removeml = removesl.replace(ml, " _ ");
    removescl = removeml.replace(scl, " _ ");
    console.log(removescl);

    qword = "<h4 id = 'qwordh4'>Q." + removescl + "</h4>";
    inputbox = "<br>Answer:<input id = 'inputtag'>";
    checkbutton = "<br><br><button class = 'btn btn-info' onclick = 'Check()'>Check</button>"
    row = qword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
qturn = "player1";
aturn = "player2";

function Check() {
    getword = document.getElementById("inputtag").value;
    wordlc = getword.toLowerCase();
    if (inputwordlc == wordlc) {
        if (aturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player_1_score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("player_2_score").innerHTML = player2score;
        }
    }
    if (qturn == "player1")
    {
        qturn = "player2";
        document.getElementById("qt").innerHTML = "Question Turn -"+ player2;
    }
    else
    {
        qturn = "player1";
        document.getElementById("qt").innerHTML = "Question Turn -"+ player1;
    }
    if (aturn == "player1")
    {
        aturn = "player2";
        document.getElementById("at").innerHTML = "Answer Turn - "+ player2;
    }
    else
    {
        aturn = "player1";
        document.getElementById("at").innerHTML = "Answer Turn - "+ player1;
    }
document.getElementById("inputtag").value = "";
}
