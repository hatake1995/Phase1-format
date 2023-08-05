const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");

let count = 0;
let timer;

confirmTime.addEventListener("click", function () {
    if (count === 5) {
        alert("成功");
    } else if (count < 5) {
        alert(`まだ${count}秒です`);
    } else {
        alert(`もう${count}秒です`);
    }
    clearInterval(timer);
    count = 0;
});

startTimer.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("countUp()", 1000);
});

const countUp = function () {
    count += 1;
    if (count === 10) {
        alert("終了");
        clearInterval(timer);
        count = 0;
    }
}


/*
timer空定義
count定義

確認ボタンとスタートボタンの取得

確認ボタンをｸﾘｯｸした時の振る舞い
 もしcount=20なら成功
 そうではなくもしcount<20ならまだcount秒です
 どちらも違うならもうcount秒です
振る舞いを止める
countを初期化

スタートボタンをｸﾘｯｸした時の振る舞い
 振る舞いを止める
 振る舞い＝1000ミリ秒毎にcountUP関数を呼び出す
＾

countUP関数を定義
 countに１を+
 もしcount=40になったら
 終了とアラート
 countを初期化
＾
*/


/*
timer空定義

htmlから確認・スタートボタン取得

starttime空定義
nowtime空定義
difftime空定義

確認ボタンをクリックしたときの振る舞い
 nomtimeにDateが入る箱用意
 もしstarttimeの中身が未定義ならその値を返す
 もしdefftimeが5なら
 アラート正解
 そうではなくもしクリック時が5以下なら
 アラートまだ〇秒
 そうでなければ
 アラートもう〇秒
 振る舞いを止める
＾

スタートボタンを押したときの振る舞い
 starttimeにDateが入る箱用意
 振る舞い＝countup関数を1000ﾐﾘ秒毎に呼び出す
＾

countupの振る舞い内容
 checktimeを定義・Date用の箱用意
 defftimeを定義＝
  　整数で((checktimeの箱の中に今の時間を入れる
    引き算　starttimeの箱の中に今の時間を入れる)割る1000)
 もしdefftime＝10なら
 アラート終了
＾
*/