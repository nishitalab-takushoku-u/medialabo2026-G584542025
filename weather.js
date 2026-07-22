
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log("世界の天気");
console.log("以下の地域の天候に関する情報を検索して表示します");
console.log("経度: "+data.coord.lon);
console.log("緯度: "+data.coord.lat);
console.log("天気: "+data.weather[0].description);
console.log("最高気温: "+data.main.temp_max);
console.log("最低気温: "+data.main.temp_min);
console.log("湿度: "+data.main.humidity);
console.log("風速: "+data.wind.speed);
console.log("風向: "+data.wind.deg);
console.log("都市名: "+data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector("#result");
  if (old) {
    old.remove();
  }
  const div = document.createElement("div");
  div.id = "result";
  const ul = document.createElement("ul");
  const items = [
    "経度: " + data.coord.lon,
    "緯度: " + data.coord.lat,
    "天気: " + data.weather[0].description,
    "最低気温: " + data.main.temp_min,
    "最高気温: " + data.main.temp_max,
    "湿度: " + data.main.humidity,
    "風速: " + data.wind.speed,
    "風向: " + data.wind.deg,
    "都市名: " + data.name
    ];
    for (const item of items) {
      const li = document.createElement("li");
      li.textContent = item;
      li.className = "special";
      ul.appendChild(li);
    }
    div.appendChild(ul);
    const p = document.createElement("p");
    const img = document.createElement("img");
    let weather = data.weather[0].description;
    console.log(weather);

    if (weather.includes("晴")) {
    img.src = "Tenki-HARE.png";
} else if (weather.includes("雨")) {
    img.src = "weather_rain_AME.png";
} else if (weather.includes("曇")) {
    img.src = "IMG_TADANOKUMO b.jpg";
} else {
    img.src = "IMG_TADANOKUMO b.jpg";
}

p.appendChild(img);
div.appendChild(p);
document.body.appendChild(div);

}
// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#BButton');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let id = document.querySelector("#city").value;
  // URL を設定
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" +id+ ".json";

    // 通信開始
    axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;
  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
  // data をコンソールに出力
  console.log(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること