//htmlからbtnを取得↓
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
//htmlからcomを取得↓
const com = document.getElementById("com");
//dice取得↓
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

//diceのソースに画像追加↓？
dice1.setAttribute("src", `./img/1.png`);
dice2.setAttribute("src", `./img/1.png`);


//各々箱を用意↓
let timer1;
let timer2;
let dice1stop;
let dice2stop;

//function1を定義する↓
const function1 = () => {
    //ボタンを押せなくする↓
    btn1.disabled = true;
    //ボタンが押せない間comに???を表示する↓
    com.textContent = "???";

    //timer1に100ミリ秒毎に呼び出す行動を入れる↓
    timer1 = setInterval(() => {
        //diceNumに1～6のランダム数を代入↓
        diceNum1 = Math.floor(Math.random() * 6 + 1);
        //dice1にランダム画像ソースを追加↓
        dice1.setAttribute("src", `./img/${diceNum1}.png`);
    }, 100);


    setTimeout(() => {
        //timer1を止める↓
        clearInterval(timer1);
        //dicestopの中身をfalseに
        dice1stop = false;
        //もしdice1stopもdice2stopも中身がfalseだったら
        if (dice1stop === false && dice2stop === false) {
            //diceNum1,2を出力
            console.log(diceNum1, diceNum2);
            //もし1が2より大きかったら↓
            if (diceNum1 > diceNum2) {
                //comに１の勝ちと表示↓
                com.textContent = "１の勝ち";
                //もし1と2が同じなら↓
            } else if (player1Num === player2Num) {
                //comに引き分けと表示↓
                com.textContent = '引き分け';
                //上記以外なら↓
            } else {
                //comに２の勝ちと表示↓
                com.textContent = 'player2の勝ち';

                //ボタンを押せなくしてたのを解除↓
                btn1.disabled = false;
                btn2.disabled = false;

                //dicestopの中身をnullに
                dice1stop = true;
                dice2stop = true;
            }
        }
    }, 3000);
};


const function2 = () => {
    //ボタンを押せなくする↓
    btn2.disabled = true;
    //comに???表示↓
    com.textContent = '???';
    //dicestopにtrue入れる↓
    dice2stop = true;
    //timerに100ミリ秒毎に呼び出すやつ入れる↓
    timer2 = setInterval(() => {
        //1～6のランダム整数↓
        diceNum2 = Math.floor(Math.random() * 6 + 1);
        //画像↓
        dice2.setAttribute('src', `./img/${diceNum2}.png`);
    }, 100);

    setTimeout(() => {
        //timer2止める↓
        clearInterval(timer2);
        //false入れる↓
        dice2stop = false;
        //1も2もfalseならば以下の処理を行う
        if (dice1stop === false && dice2stop === false) {
            if (diceNum1 > diceNum2) {
                com.textContent = 'player1の勝ち';
            } else if (diceNum1 === diceNum2) {
                com.textContent = '引き分け';
            } else {
                com.textContent = 'player2の勝ち';
            }

            //ボタンを押せなくしてたのを解除
            btn1.disabled = false;
            btn2.disabled = false;

            //null代入
            dice1stop = true;
            dice2stop = true;
        }
    }, 3000);
};

//ボタン１クリックされたらfunction
btn1.addEventListener('click', function1);
btn2.addEventListener('click', function2);

/*
btn1.addEventListener("click", function () {
    //timerという名の箱にrandom関数を50ミリ秒毎に呼び出す行動を入れる↓
    let timer = setInterval("random()", 50);
    //setTimeoutという名の箱にtimer関数を1500ミリ秒後に止める行動を入れる↓
    setTimeout(() => {
        clearInterval(timer);
    }, 1500);
});

//randomという名の関数の箱用意↓
const random = function () {
    //diceNumに画像がランダムで代入される↓
    diceNum1 = `./img/${Math.floor(Math.random() * 6 + 1)}.png`;
    //diceのソースに追加？↓
    dice1.setAttribute("src", diceNum1);
};
*/