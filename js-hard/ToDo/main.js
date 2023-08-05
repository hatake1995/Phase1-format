const addbtn = document.getElementById("addbtn");
const todo = document.getElementById("todo");

let compBtn;

addbtn.addEventListener("click", function () {
    let addValue = document.getElementById("add_area").value;
    if (addValue !== "") {
        let list = document.createElement("li");
        list.textContent = addValue;
        compBtn = document.createElement("button")
        compBtn.innerHTML = "完了";
        list.appendChild(compBtn);
        todo.appendChild(list);
        add_area.value = "";
        compBtn.addEventListener("click", function () {
            list.textContent = "";
        });
    } else {
        alert("入力してください");
    }
});

