const gameStart = document.getElementById("gameStart");
const cpHand = document.getElementById("cpHand");
const log = document.getElementById("log");

const data = [
    { value: "0", text: "グー" },
    { value: "1", text: "ﾁｮｷ" },
    { value: "2", text: "ぱー" },
];

gameStart.addEventListener("click", function () {
    const myHand = document.getElementById("myHand").value;
    const cpValue = Math.floor(Math.random() * 3);
    cpHand.textContent = data[cpValue].text;

    switch (myHand) {
        case "0": {
            if (cpValue === 0) {
                log.textContent = "引き分け";
            } else if (cpValue === 1) {
                log.textContent = "勝ち";
            } else if (cpValue === 2) {
                log.textContent = "負け";
            }
            break; //処理を終了して次へ
        }

        case "1": {
            if (cpValue === 0) {
                log.textContent = "負け";
            } else if (cpValue === 1) {
                log.textContent = "引き分け";
            } else if (cpValue === 2) {
                log.textContent = "勝ち";
            }
            break;
        }

        case "2": {
            if (cpValue === 0) {
                log.textContent = "勝ち";
            } else if (cpValue === 1) {
                log.textContent = "負け";
            } else if (cpValue === 2) {
                log.textContent = "引き分け";
            }
            break;
        }
    }
});


const player = document.getElementById('player');
const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");
const gamestart = document.getElementById("gamestart");
const playerHandOption = document.getElementById("playerHandOption").value;
const logn = document.getElementById("logn");

let turn = 0;
let player1Value;
let player2Value;

setHand.addEventListener("click", function () {
    if (turn === 0) {
        player.textContent = 'player1';
        player1Hand.textContent = 'player1:';
        player2Hand.textContent = 'player2:';
        player1Value = document.getElementById("playerHandOption").value;
        player1Hand.textContent = "player1: セット完了";
        player.textContent = "player2の番";
    } else {
        player2Value = Math.floor(Math.random() * 2);
        player2Hand.textContent = "player2: セット完了";
        player.textContent = "勝負を押して";
    }
    turn += 1;
});

gamestart.addEventListener("click", function () {
    player1Hand.textContent = data[playerHandOption].text;
    player2Hand.textContent = data[player2Value].text;

    if (turn !== 2) {
        alert("２回以上クリックするな");
        return;
    }
    switch (player1Value) {
        case "0": {
            if (player2Value === 0) {
                logn.textContent = "引き分け";
            } else if (player2Value === 1) {
                logn.textContent = "勝ち";
            } else if (player2Value === 2) {
                logn.textContent = "負け";
            }
            break;
        }

        case "1": {
            if (player2Value === 0) {
                logn.textContent = "負け";
            } else if (player2Value === 1) {
                logn.textContent = "引き分け";
            } else if (player2Value === 2) {
                logn.textContent = "勝ち";
            }
            break;
        }

        case "2": {
            if (player2Value === 0) {
                logn.textContent = "勝ち";
            } else if (player2Value === 1) {
                logn.textContent = "負け";
            } else if (player2Value === 2) {
                logn.textContent = "引き分け";
            }
            break;
        }
    }

    turn = 0;
});