// =========================================================
 //      画面が開かれたときの初期設定
 // =========================================================
 window.onload = function() {
 
    // --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
    var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    langSet(wDef);
   
  }
   // =========================================================
   //      選択された言語のみ表示
   // =========================================================
  function langSet(argLang){
   
    // --- 切り替え対象のclass一覧を取得 ----------------------
    var elm = document.getElementsByClassName("langCng");
   
    for (var i = 0; i < elm.length; i++) {
   
      // --- 選択された言語と一致は表示、その他は非表示 -------
      if(elm[i].getAttribute("lang") == argLang){
        elm[i].style.display = '';
      }
      else{
        elm[i].style.display = 'none';
      }
    }
  }
//コンテンツの回転部分 
let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let dnBtn = document.getElementById("dnBtn");

let rotation = circle.style.transform;

let rotationSum;

upBtn.onclick = function (){
    rotationSum = rotation + "rotate(-90deg)";
    circle.style.transform = rotationSum;
    rotation = rotationSum;
}

dnBtn.onclick = function (){
    rotationSum = rotation + "rotate(+90deg)";
    circle.style.transform = rotationSum;
    rotation = rotationSum;
}


//座標表示
const output = document.querySelector('#output');

//マウス移動時
document.onmousemove = onmousemove;
onmousemove = function(e) {
  output.innerHTML = `x:` + e.pageX + ` y:` + e.pageY;
}

//マウス離脱時
document.onmouseout = onmouseout;
onmouseout = function(e) {
  output.innerHTML = ``;
}
