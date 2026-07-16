// 数当てゲーム

// 正解の数
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 予想回数
let kaisu = 0;

// ゲーム終了判定
let owari = false;

// ボタンを押したときの処理
function hantei() {

    // すでにゲーム終了
    if (owari || kaisu >= 3) {
        document.getElementById("result").textContent =
            "答えは " + kotae + " でした．すでにゲームは終わっています";
        return;
    }

    // 予想回数を増やす
    kaisu++;
    document.getElementById("kaisu").textContent = kaisu;

    // 入力された予想
    let yoso = Number(document.getElementById("AAA").value);

    // 判定
    if (yoso === kotae) {
        document.getElementById("result").textContent =
            "正解です．おめでとう!";
        owari = true;
    }
    else if (kaisu === 3) {
        document.getElementById("result").textContent =
            "まちがい．残念でした．答えは " + kotae + " です．";
        owari = true;
    }
    else if (yoso < kotae) {
        document.getElementById("result").textContent =
            "まちがい．答えはもっと大きいですよ";
    }
    else {
        document.getElementById("result").textContent =
            "まちがい．答えはもっと小さいですよ";
    }
}

// ボタンを押したら hantei() を実行
document.getElementById("calc").addEventListener("click", hantei);