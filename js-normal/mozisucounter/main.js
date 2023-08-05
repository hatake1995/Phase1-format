const sampleForm = document.getElementById("sampleForm");
const count = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");


let textarea = sampleForm.value;
let num = 10;

count.textContent = `あと${num - sampleForm.value.length}字`;

sampleForm.addEventListener("keyup", function () {
    //numからsampleFormに入力された文字数を引く
    //pタグの中に表示する
    count.textContent = `あと${num - sampleForm.value.length}字`;
    //sampleFormに入力された文字をtextareaに表示する
    textarea = sampleForm.value;
});

resetBtn.addEventListener("click", function () {
    count.textContent = `あと${num}字`
    //textareaの中身をクリアする
    textarea = "";
});

iniDel.addEventListener("click", function () {
    //1番目以降の文字を切り抜く(0番目の文字が消える)
    textarea = textarea.slice(1);
    //入力フォームのvalueに上記の処理がされたtextareaが代入される
    sampleForm.value = textarea;
    count.textContent = `あと${num - sampleForm.value.length}字`
});

endDel.addEventListener("click", function () {
    //文章の0番目(先頭)から一番後ろ-1までの文字を切り抜く(一番後ろの文字か1個消える)
    textarea = textarea.slice(0, -1);
    sampleForm.value = textarea;
    count.textContent = `あと${num - sampleForm.value.length}字`
});