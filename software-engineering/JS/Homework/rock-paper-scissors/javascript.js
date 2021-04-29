let whoWins = "";
let player1_score = 0;
let player2_score = 0;
let rpsRound = 0;

document.onkeydown = function (e) {
    if (e.keyCode === 82) {
        // 'R' key on the keyboard for "ROCK"
        document.getElementById('player1').src = './images/rock.jpeg'
        player1RandomNum = 1;
    }
    if (e.keyCode === 80) {
        // 'P' key on the keyboard for "PAPER"
        document.getElementById('player1').src = './images/paper.jpeg'
        player1RandomNum = 2;
    }
    if (e.keyCode === 83) {
        // 'S' key on the keyboard for "SCISSORS"
        document.getElementById('player1').src = './images/scissors.jpeg'
        player1RandomNum = 3;
    }
}

function randomRPS() {
    // var player1RandomNum = Math.floor((Math.random() * 3) + 1)
    var player2RandomNum = Math.floor((Math.random() * 3) + 1)
    if (player1RandomNum == 1) {
        document.getElementById('player1').src = './images/rock.jpeg'
    } else if (player1RandomNum == 2) {
        document.getElementById('player1').src = './images/paper.jpeg'
    } else if (player1RandomNum == 3) {
        document.getElementById('player1').src = './images/scissors.jpeg'
    }

    if (player2RandomNum == 1) {
        document.getElementById('player2').src = './images/rock.jpeg'
    } else if (player2RandomNum == 2) {
        document.getElementById('player2').src = './images/paper.jpeg'
    } else if (player2RandomNum == 3) {
        document.getElementById('player2').src = './images/scissors.jpeg'
    }
    //    document.getElementById("item5").innerHTML = "Player1:" + player1RandomNum + " Player2:" + player2RandomNum;

    if (player1RandomNum == player2RandomNum) {
        whoWins = "Its a TIE! Play Again"
    } else if (player1RandomNum == 1 && player2RandomNum == 2) {
        whoWins = "Paper Won!"
        player2_score++;
    } else if (player1RandomNum == 2 && player2RandomNum == 1) {
        whoWins = "Paper Won!"
        player1_score++;
    } else if (player1RandomNum == 2 && player2RandomNum == 3) {
        whoWins = "Scissors Won!"
        player2_score++
    } else if (player1RandomNum == 3 && player2RandomNum == 2) {
        whoWins = "Scissors Won!"
        player1_score++;
    } else if (player1RandomNum == 1 && player2RandomNum == 3) {
        whoWins = "Rock Won!"
        player1_score++;
    } else if (player1RandomNum == 3 && player2RandomNum == 1) {
        whoWins = "Rock Won!"
        player2_score++;
    }

    document.getElementById("item5").innerHTML = whoWins;
    document.getElementById("score_player_1").innerHTML = player1_score;
    document.getElementById("score_player_2").innerHTML = player2_score;
    document.getElementById("round").innerHTML = ++rpsRound;

}

function resetGame() {

    whoWins = "";
    player1_score = 0;
    player2_score = 0;
    rpsRound = 0;
    document.getElementById("item5").innerHTML = "&#169; Copyright 2021 Nicholas Pierre";
    document.getElementById("score_player_1").innerHTML = 0;
    document.getElementById("score_player_2").innerHTML = 0;
    document.getElementById("round").innerHTML = rpsRound;

}