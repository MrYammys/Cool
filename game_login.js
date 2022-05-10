player1 = "";
player2 = "";

function AddUser()
{
player1 = document.getElementById("player1_name").value;
player2 = document.getElementById("player2_name").value;

localStorage.setItem("player_1", player1);
localStorage.setItem("player_2", player2);

window.location="game_page.html";
}

