let code = document.querySelector(".code");
let named = document.querySelector(".name");
let key = document.querySelector(".key");
let spanCode = document.querySelector(".spanCode");
// document.addEventListener("keydown", function (e) {
//     if (e.keyCode === 32) {
//         named.innerText = 'code: Space';
//         key.innerText = `key: Space`;
//     } else {
//         key.innerText = `key: ${e.key}`;
//         named.innerText = `code: ${e.key}`;
//     }
//     code.innerText = `${e.keyCode}`;
//     spanCode.innerText = `${e.keyCode}`;

// })
document.addEventListener("keydown", function (e) {
    let a = (e.keyCode === 32) ? "SPAN" : e.key;
    key.innerText = "key: " + a;
    named.innerText = "key: " + a;
    code.innerText = `${e.keyCode}`;
    spanCode.innerText = `${e.keyCode}`;
})