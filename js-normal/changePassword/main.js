{/* <p id="nowPassword"></p>
<label>現在のパスワード<input type="text" value="" id="confirmPassword"></label>
<label>新しいパスワード<input type="text" value="" id="newPassword"></label>
<input type="button" id="setPassword" value="変更"></input> */}

const setPassword = document.getElementById("setPassword");
const nowPassword = document.getElementById("nowPassword");

let passwordValue = "aaaaa";
let passwordValue2 = "bbbbbbbb";
nowPassword.textContent = `今のパスワードは${passwordValue}です`;

setPassword.addEventListener("click", function () {
    const confirmPassword = document.getElementById("confirmPassword").value;
    const newPassword = document.getElementById("newPassword").value;

    if (passwordValue === confirmPassword) {
        if (passwordValue !== newPassword) {
            if (8 <= newPassword.length) {
                if (passwordValue2 !== newPassword) {
                    let result = newPassword.match(/^\d{3}-?\d{4}$/g);
                    if (!result) {
                        alert("***-****で書いて");
                    } else {
                        passwordValue2 = passwordValue;
                        passwordValue = newPassword;
                        nowPassword.textContent = `今のパスワードは${passwordValue}です`;
                        alert(`${passwordValue}パス変更完了`);
                    }
                } else {
                    alert("前使ってたダメ");
                }
            } else {
                alert("8以下ダメ");
            }
        } else {
            alert("同じダメ");
        }
    } else {
        alert("現パス違う");
    }
});