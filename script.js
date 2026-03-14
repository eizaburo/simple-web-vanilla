// 基本要素の取得
const title = document.getElementById("title");
const email = document.getElementById("email");
const message = document.getElementById("message");
const button = document.getElementById("button");

// エラーメッセージ要素を取得
const error_message_title = document.getElementById("error-message-title");
const error_message_email = document.getElementById("error-message-email");
const error_message_message = document.getElementById("error-message-message");

// バリデーション用の正規表現定義
const regex_title = /^.{1,10}$/;
const regex_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const regex_message = /^.{1,20}$/;


// ボタンクリックイベントを定義
button.addEventListener("click", async (e) => {
    // おまじない
    e.preventDefault();

    // ボタンの表示変更
    button.disabled = true;
    button.innerText = "送信中・・・"

    // 空か判定
    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    }

    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    }

    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    }

    // 条件を満たしているか（showが含まれてないか？）
    if (!error_message_title.classList.contains("show") &&
        !error_message_email.classList.contains("show") &&
        !error_message_message.classList.contains("show")) {

        // sleep処理
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 条件を満たしているときのみ実行
        alert(`title=${title.value}, email=${email.value}, message=${message.value}`);

        // 値のリセット
        title.value = "";
        email.value = "";
        message.value = "";

    }

    // buttonを元に戻す
    button.innerText = "問合せる";
    button.disabled = false;

})

// titleを入力した際の処理
title.addEventListener("keyup", (e) => {
    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    } else {
        error_message_title.classList.remove("show");
    }
});

// emailを入力した際の処理
email.addEventListener("keyup", (e) => {
    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    } else {
        error_message_email.classList.remove("show");
    }
});

// messageを入力した際の処理
message.addEventListener("keyup", (e) => {
    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    } else {
        error_message_message.classList.remove("show");
    }
});