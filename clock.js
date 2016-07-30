var clockEl = $("img");
var switchingDateId = 0;
var dotCnt = 0; //ドット点滅用
var numCnt = 0; //順番表示イベント画像用
var eqCnt = 0; //順番表示イベントeq指定用
var dotId = 0;
var timeId = 0;
var orderId = 0;
var randomId = 0;
var countupId = 0;
var countupEventId = 0;
var nowNum0 = 0;
var nowNum1 = 0;
var nowNum2 = 0;
var nowNum3 = 0;
var nowNum4 = 0;
var nowNum5 = 0;
var nowNum6 = 0;
var nowNum7 = 0;
var randomTotalNum = 0;
var randomTotalNum0 = 0;
var randomTotalNum1 = 0;
var randomTotalNum2 = 0;
var randomTotalNum3 = 0;
var randomTotalNum4 = 0;
var randomTotalNum5 = 0;
var randomTotalNum6 = 0;
var randomTotalNum7 = 0;

setEvent();

function setEvent(){
    clearTimeout(countupId);
    clearTimeout(countupEventId);
    changeDot();
    showTime();
    switchingDate();
}
//------------------------------------ ドットと日付と時間 ---------------------------------------

// ドット表示
function changeDot(){
    clockEl.eq(2).attr("src","img/dot" + dotCnt + ".jpg");
    clockEl.eq(5).attr("src","img/dot" + dotCnt + ".jpg");
    if(dotCnt < 1){
        dotCnt++;
    } else{
        dotCnt = 0;
    }
    dotId = setTimeout(changeDot, 1000);
}

// 時間表示
function showTime(){
    var data   = new Date();
    var hour   = data.getHours();
    var hour2  = hour % 10;
    var hour1  = (hour-hour2) / 10 ;
    var mm   = data.getMinutes();
    var mm2  = mm % 10;
    var mm1  = (mm - mm2) / 10;
    var sec    = data.getSeconds();
    var sec2   = sec % 10;
    var sec1   = (sec - sec2) / 10;

    clockEl.eq(0).attr("src", "img/" + hour1 + ".jpg");
    clockEl.eq(1).attr("src", "img/" + hour2 + ".jpg");
    clockEl.eq(3).attr("src", "img/" + mm1 + ".jpg");
    clockEl.eq(4).attr("src", "img/" + mm2 + ".jpg");
    clockEl.eq(6).attr("src", "img/" + sec1 + ".jpg");
    clockEl.eq(7).attr("src", "img/" + sec2 + ".jpg");
    timeId = setTimeout(showTime, 1000);
}

function showToday(){
    var data   = new Date();
    var year   = data.getYear();
    var year2  = (year-100) % 10;
    var year1  = ((year-100) - year2)/ 10;
    var month   = data.getMonth();
    var month2  = (month + 1) % 10;
    var month1  = (month + 1) - month2;
    var date    = data.getDate();
    var date2   = date % 10;
    var date1   = (date - date2) / 10;

    clockEl.eq(0).attr("src", "img/" + year1 + ".jpg");
    clockEl.eq(1).attr("src", "img/" + year2 + ".jpg");
    clockEl.eq(3).attr("src", "img/" + month1 + ".jpg");
    clockEl.eq(4).attr("src", "img/" + month2 + ".jpg");
    clockEl.eq(6).attr("src", "img/" + date1 + ".jpg");
    clockEl.eq(7).attr("src", "img/" + date2 + ".jpg");
}

//------------------------------------ 時間と日付切り替え ---------------------------------------
// 時間と日付入れ替え
function switchingDate(){
    var data   = new Date();
    switchingDateId = setTimeout(function(){
        clearTimeout(timeId);
        clearTimeout(dotId);
        showToday(); // 年表示
        changeDot(); // dot表示
        setTimeout(function(){
            var data   = new Date();
            clearTimeout(dotId);  //dotクリア
            showTime(); // 時間表示
            changeDot(); // dotの点滅表示
            switchingDate(); // 再度タイマーを起動
        },4000);
    },1000*10);
}
//------------------------------------ 順番表示イベント ---------------------------------------

// スタートボタンを押したら
$(".strat-btn").on("click",function(){
    showOrderEvent();
});
function showOrderEvent(){
    clearTimeout(orderId);
    clearTimeout(switchingDateId);
    clearTimeout(timeId);
    clearTimeout(dotId);
    clockEl.attr("src", "img/" + "dot1" + ".jpg"); //最初に画像をdot1にリセットする
    eqCnt = 0;
    numCnt = 0;
    orderEvent(); //順番表示イベント開始

    function orderEvent(){
        orderId = setTimeout(orderEvent, 50); //0.05秒おきにeq++
      　clockEl.eq(eqCnt).attr("src", "img/" + numCnt + ".jpg");

        // eqCntが8になったらnumCnt++してeqCntを0に戻す。
        eqCnt++;
      　if (eqCnt >= 8) {
            numCnt++;
        　　eqCnt = 0;
      　}

        // numCntが8になったらイベントを停止する。
        if (numCnt > 9) {
            stopOrderEvent();
            function stopOrderEvent(){
                clearTimeout(orderId);
                clockEl.eq(0).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(1).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(2).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(3).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(4).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(5).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(6).attr("src", "img/" + 9 + ".jpg");
                clockEl.eq(7).attr("src", "img/" + 9 + ".jpg");
            }
            // --秒後に次のイベント開始
            StopOrderId = setTimeout(showAllNone, 1000);
      　}
    }
}

function showAllNone(){
    clockEl.eq(0).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(1).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(2).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(3).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(4).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(5).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(6).attr("src", "img/" + "dot1" + ".jpg");
    clockEl.eq(7).attr("src", "img/" + "dot1" + ".jpg");
    // --秒後に次のイベント開始
    StopOrderId = setTimeout(showRandomEvent, 1000);
}

//------------------------------------ ランダムイベント ---------------------------------------

function showRandomEvent(){
    clearTimeout(randomId);
    clearTimeout(switchingDateId);
    clearTimeout(timeId);
    clearTimeout(dotId);
    numCnt = 0;
    randomEvent();
    clockEl.attr("src", "img/" + "dot1" + ".jpg"); //最初に画像をdot1にリセットする

    function randomEvent(){
        randomId = setTimeout(randomEvent, 50); //0.05秒おきに乱数を取得
        var randomNum0 = Math.floor(Math.random() * 10);
        var randomNum1 = Math.floor(Math.random() * 10);
        var randomNum2 = Math.floor(Math.random() * 10);
        var randomNum3 = Math.floor(Math.random() * 10);
        var randomNum4 = Math.floor(Math.random() * 10);
        var randomNum5 = Math.floor(Math.random() * 10);
        var randomNum6 = Math.floor(Math.random() * 10);
        var randomNum7 = Math.floor(Math.random() * 10);

        while(nowNum0 === randomNum0){
            randomNum0 = Math.floor(Math.random() * 10);
        }
        while(nowNum1 === randomNum1){
            randomNum1 = Math.floor(Math.random() * 10);
        }
        while(nowNum2 === randomNum2){
            randomNum2 = Math.floor(Math.random() * 10);
        }
        while(nowNum3 === randomNum3){
            randomNum3 = Math.floor(Math.random() * 10);
        }
        while(nowNum4 === randomNum4){
            randomNum4 = Math.floor(Math.random() * 10);
        }
        while(nowNum5 === randomNum5){
            randomNum5 = Math.floor(Math.random() * 10);
        }
        while(nowNum6 === randomNum6){
            randomNum6 = Math.floor(Math.random() * 10);
        }
        while(nowNum7 === randomNum7){
            randomNum7 = Math.floor(Math.random() * 10);
        }

        nowNum0 = randomNum0;
        nowNum1 = randomNum1;
        nowNum2 = randomNum2;
        nowNum3 = randomNum3;
        nowNum4 = randomNum4;
        nowNum5 = randomNum5;
        nowNum6 = randomNum6;
        nowNum7 = randomNum7;

        clockEl.eq(0).attr("src", "img/" + randomNum0 + ".jpg");
        clockEl.eq(1).attr("src", "img/" + randomNum1 + ".jpg");
        clockEl.eq(2).attr("src", "img/" + randomNum2 + ".jpg");
        clockEl.eq(3).attr("src", "img/" + randomNum3 + ".jpg");
        clockEl.eq(4).attr("src", "img/" + randomNum4 + ".jpg");
        clockEl.eq(5).attr("src", "img/" + randomNum5 + ".jpg");
        clockEl.eq(6).attr("src", "img/" + randomNum6 + ".jpg");
        clockEl.eq(7).attr("src", "img/" + randomNum7 + ".jpg");
    }
    randomEventId = setTimeout(showAllZero, 3000);
}

function showAllZero(){
    clearTimeout(randomId);
    clockEl.eq(0).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(1).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(2).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(3).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(4).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(5).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(6).attr("src", "img/" + 0 + ".jpg");
    clockEl.eq(7).attr("src", "img/" + 0 + ".jpg");
    // --秒後に次のイベント開始
    StopOrderId = setTimeout(showcountupEvent, 2000);
}

//------------------------------------ 乱数を取得しカウントアップする ---------------------------------------

function showcountupEvent(){
    clearTimeout(switchingDateId);
    clearTimeout(timeId);
    clearTimeout(dotId);
    countupEvent();
    clockEl.attr("src", "img/" + "dot1" + ".jpg"); //最初に画像をdot1にリセットする
    eqCnt = 0;

//-----------------8桁の乱数取得-------------------

    randomTotalNum = Math.floor(Math.random() * 100000000); //ランダムに8桁の数字を取得
    console.log(randomTotalNum);

    randomTotalNum7 = randomTotalNum % 10
    console.log(randomTotalNum7); // 1桁目

    randomTotalNum6 = ((randomTotalNum % 100) - (randomTotalNum % 10)) / 10
    console.log(randomTotalNum6); // 2桁目

    randomTotalNum5 = ((randomTotalNum % 1000) - (randomTotalNum % 100)) / 100
    console.log(randomTotalNum5); // 3桁目

    randomTotalNum4 = ((randomTotalNum % 10000) - (randomTotalNum % 1000)) / 1000
    console.log(randomTotalNum4); // 4桁目

    randomTotalNum3 = ((randomTotalNum % 100000) - (randomTotalNum % 10000)) / 10000
    console.log(randomTotalNum3); // 5桁目

    randomTotalNum2 = ((randomTotalNum % 1000000) - (randomTotalNum % 100000)) / 100000
    console.log(randomTotalNum2); // 6桁目

    randomTotalNum1 = ((randomTotalNum % 10000000) - (randomTotalNum % 1000000)) / 1000000
    console.log(randomTotalNum1); // 7桁目

    randomTotalNum0 = (randomTotalNum - (randomTotalNum % 10000000)) / 10000000
    console.log(randomTotalNum0); // 8桁目

    var randomTotalNumArray = [ // 取得した乱数を一桁ずつ配列にする
    randomTotalNum0,
    randomTotalNum1,
    randomTotalNum2,
    randomTotalNum3,
    randomTotalNum4,
    randomTotalNum5,
    randomTotalNum6,
    randomTotalNum7
    ]

    function countupEvent(){
        countupId = setTimeout(countupEvent, 50); //0.05秒おきにnumCnt++
        clockEl.eq(eqCnt).attr("src", "img/" + numCnt + ".jpg");
        numCnt++;
        //numCntが9になったら
      　if (numCnt > 9) {
            clearTimeout(countupId);　// numCnt止める
            clockEl.eq(eqCnt).attr("src", "img/" + randomTotalNumArray[eqCnt] + ".jpg");　//乱数表示
        　　numCnt = 0;
            eqCnt++;
            countupEvent();　//eqをひとつずらしてもう一度呼び出す
      　}
      　if (eqCnt > 8) {
            clearTimeout(countupId);
            eqCnt = 0;
      　}  　
    } //countupEvent
    countupEventId = setTimeout(setEvent, 6000);
}