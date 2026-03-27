// 要素の取得
const title = document.getElementById("title");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contact_button = document.getElementById("contact-button"); // -と_に注意

// エラーメッセージを取得
const error_message_title = document.getElementById("error-message-title");
const error_message_email = document.getElementById("error-message-email");
const error_message_message = document.getElementById("error-message-message");

// 正規表現生成
const regex_title = /^.{1,10}$/;
const regex_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const regex_message = /^.{1,20}$/;

// contact_buttonクリック時の動きを定義
contact_button.addEventListener("click", async (e) => {
    // デフォルトの動きを防止
    e.preventDefault();

    //2度押し防止
    contact_button.disabled = true; // ボタン使えないように
    contact_button.innerText = "送信中・・・"; // 表示分変更

    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    }

    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    }

    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    }

    if (!error_message_title.classList.contains("show") &&
        !error_message_email.classList.contains("show") &&
        !error_message_message.classList.contains("show")) {

        // sleep処理
        await new Promise((resolve) => { setTimeout(resolve, 2000) });

        // バリデーションOKだったときのみ実行
        // 各要素から値を取得してalertで表示
        // alert(`title=${title.value}, email=${email.value}, message=${message.value}`);

        // APIとの通信処理
        const api_url = "http://localhost:3000/contacts";
        try {
            const result = await fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: title.value,
                    email: email.value,
                    message: message.value
                })
            });

            const json = await result.json();
            alert(json.message); // レスポンスのJSONにmessageというkeyがある前提（API側で実装）

        } catch (error) {
            alert(`サーバの反応がありません。:${error.message}`);
        }

    }

    // ボタンの状態を元に戻す（場所はここじゃなくてもいい）
    contact_button.innerText = "問い合わせる";
    contact_button.disabled = false;
});

// 以下を追記

// titleのkeyupイベントを定義
title.addEventListener("keyup", () => {
    if (!regex_title.test(title.value)) {
        error_message_title.classList.add("show");
    } else {
        error_message_title.classList.remove("show");
    }
});

// emailのkeyupイベントを定義
email.addEventListener("keyup", () => {
    if (!regex_email.test(email.value)) {
        error_message_email.classList.add("show");
    } else {
        error_message_email.classList.remove("show");
    }
});

// messageのkeyupイベントを定義
message.addEventListener("keyup", () => {
    if (!regex_message.test(message.value)) {
        error_message_message.classList.add("show");
    } else {
        error_message_message.classList.remove("show");
    }
});