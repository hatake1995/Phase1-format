const inputTime = document.getElementById("inputTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const nowTime = document.getElementById("nowTime");

//カウントダウン初期値10
let sec = 10;
let timer;

setTime.addEventListener("click", function () {
    //inputTimeのvalueを取得しsecに格納
    sec = document.getElementById("inputTime").value;
    //nowtimeに上記取得した数字とセット完了と表示
    nowTime.textContent = `${sec}:セット完了`;
});

startTimer.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("countDown()", 1000);
});

const countDown = function () {
    sec -= 1;
    nowTime.textContent = sec;
    if (sec === 0) {
        clearInterval(timer);
        alert("終了");
        sec = 10;
    }
};

stopTimer.addEventListener("click", function () {
    clearInterval(timer);
    nowTime.textContent = `${sec}:ストップ`;
});