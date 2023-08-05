const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const vimg = document.getElementById("showImg");

let imgNum = 0;

setBtn.addEventListener("click", function () {
    //vimg(showimg)のHTMLの中身を空白に
    vimg.innerHTML = "";
    //ランダムの数生成宣言
    const randNum = Math.floor(Math.random() * 10);

    //div class firstを生成宣言
    const first = document.createElement("div");
    const firsttext = document.createElement("p");
    //firstの中に画像を入れる
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人' />"
    firsttext.innerHTML = "原人";
    //firstをvimg(showimg)に追加する
    vimg.appendChild(first);
    first.appendChild(firsttext);

    if (randNum >= 4) {
        const second = document.createElement("div");
        const secondtext = document.createElement("p");
        second.innerHTML = "<img src='./img/evolution2.png' alt'旧人' />";
        secondtext.innerHTML = "旧人";
        vimg.appendChild(second);
        second.appendChild(secondtext);
    }

    if (randNum >= 7) {
        const third = document.createElement("div");
        const thirdtext = document.createElement("p");
        third.innerHTML = "<img src='./img/evolution3.png' alt'新人' />";
        thirdtext.innerHTML = "新人";
        vimg.appendChild(third);
        third.appendChild(thirdtext);
    }

    if (randNum >= 9) {
        const fourth = document.createElement("div");
        const fourthtext = document.createElement("p");
        fourth.innerHTML = "<img src='./img/evolution4.png' alt'現代人' />";
        fourthtext.innerHTML = "現代人";
        vimg.appendChild(fourth);
        fourth.appendChild(fourthtext);
    }
});

resetBtn.addEventListener("click", function () {
    vimg.innerHTML = vimg.slice.call(0, -1);
    //一個ずつ消す方法は分からん
});