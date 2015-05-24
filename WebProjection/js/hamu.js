var server = (function () {

    var chat = $.connection.chatHub;
    var calibration = 'adiv';

    // TODO 現在表示中のTV情報を取得する
    var program = "チャンネルを選択してください";
    var description = "お料理評論家のレミさんによる、破天荒なクッキング番組！ 今日は旬の春キャベツを使います";
    var yahoo = '{"\u30d2\u30ed\u30df":100,"\u30d2\u30ed\u30df\u6d41\u30a6\u30a9\u30fc\u30ad\u30f3\u30b0\u8853":68,"\u76ee\u9ed2\u4e0d\u52d5\u5c0a\u5468\u8fba":63,"MC\u30d2\u30ed\u30df":52,"\u30d2\u30ed\u30df\u884c\u304d\u3064\u3051":47,"\u60c5\u5831\u30d0\u30e9\u30a8\u30c6\u30a3":43,"\u65e5\u66dc\u5348\u524d":39,"\u304a\u6563\u6b69":35,"\u5973\u6027\u30b2\u30b9\u30c8\u9054":35,"\u30e9\u30f3\u30c1":28,"\u7d39\u4ecb":22,"\u304a\u5e97":21} ';

    function CloudPoint() {
        cloud = this;
        this.HOST = 'http://firefox-team9.azurewebsites.net/hamster';

        this.xhr = function (method, url, data, success, error) {
            var ajax = new XMLHttpRequest({mozSystem: true});
            ajax.open(method, url, true);
            ajax.onreadystatechange = function Receive() {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    success(ajax.responseText);
                } else if (ajax.status != 200) {
                    error("Loading failure");
                }
            };
            ajax.send(data);
        };

        // 初期表示
        this.init = function(){

            chat.client.addNewMessageToPage = function (name, message) {
                console.log('name:'+name+'　message:'+message);

                //if(name === 'CHANNEL'){
                //  setChannel(message);
                //}
      
                // 
                if (name === 'program'){
                    program = message;
                    $("#program").html("視聴情報  " + program);
                }
                if (name === 'discription'){
                    description = message;
                }
                if (name === 'YAHOO'){
                    yahoo = message;
                }
            };
              
          // Start the connection.
        $.connection.hub.start().done(function () {

            //　サーバへのメッセージ送信ロジック
            $('#sendmessage').click(function () {
              // Call the Send method on the hub.
              chat.server.send('STB', $('#message').val());
              // Clear text box and reset focus for next comment.
              $('#message').val('').focus();
            });
          });

            // メインTVとサブTV情報取得、描画
            // ボタン作成
            var $tvInfoWrapper = $('<ul>').attr('class','table').css('height','100px');
            var $tv1 = $('<li>');
            var $tv2 = $('<li>');
            var $switchTvImg = $('<img src="/images/switchTv.png">').css({
                'width':'30px',
                'height':'30px'
            });
            var $switchTv = $('<li>').css({
                'width':'10px',
                'height':'30px',
            });
            // }).append($switchTvImg);
            // TVなのかサブなのか判定する
            $tv1.html("TV").css({
                'background-color':'#f5deb3',
                'width':'100px',
                'height':'100px',
                'border':'solid 2px rgba(71,19,26,0.4)'
            });
            $tv1.click(function(){
                location.href = 'setting_main.html';
            });
            $tv2.html("サブTV").css({
                'background-color':'#f5deb3',
                'width':'100px',
                'height':'100px',
                'border':'solid 2px rgba(71,19,26,0.4)'
            });
            $tv2.click(function(){
                location.href = 'setting_sub.html';
            });
            // switchTv.attr("src":"/images/switchTv.png");

            $tvInfoWrapper.append($tv1);
            $tvInfoWrapper.append($switchTv);
            $tvInfoWrapper.append($tv2);

            var $tvInfo = $("#tvInfo");
            $tvInfo.append($tvInfoWrapper);

            // チャンネルボタン作成
            var $channel = $("#channel");
            var $channelWrapper1 = $("<ul>").attr('class','table').css({
                'margin-bottom':'10px',
                'width':'88%'
            });
            var $channelWrapper2 = $("<ul>").attr('class','table').css({
                'width':'88%'
            });

            // チャンネル1
            var $channel1 = $('<li>');
            $channel1.html(1).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel1.click(function(){
                chat.server.send('1', 'channel1');
            });
            $channelWrapper1.append($channel1);

            // チャンネル2
            var $channel2 = $('<li>');
            $channel2.html(2).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel2.click(function(){
                chat.server.send('2', 'channel2');
            });
            $channelWrapper1.append($channel2);

            // チャンネル3
            var $channel3 = $('<li>');
            $channel3.html(3).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel3.click(function(){
                chat.server.send('3', 'channel3');
            });
            $channelWrapper1.append($channel3);

            // 2行目
            // チャンネル4
            var $channel4 = $('<li>');
            $channel4.html(4).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel4.click(function(){
                chat.server.send('4', 'channel4');
            });
            $channelWrapper2.append($channel4);

            // チャンネル4
            var $channel5 = $('<li>');
            $channel5.html(5).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel5.click(function(){
                chat.server.send('5', 'channel5');
            });
            $channelWrapper2.append($channel5);

            // チャンネル6
            var $channel6 = $('<li>');
            $channel6.html(6).css({
                'padding':'35px',
                'background-color':'pink',
                'border-radius': '50%',
                '-webkit-border-radius': '50%',
                '-moz-border-radius': '50%',
            });
            $channel6.click(function(){
                chat.server.send('6', 'channel6');
            });
            $channelWrapper2.append($channel6);

            $channel.append($channelWrapper1);
            $channel.append($channelWrapper2);

            // 表示番組情報取得 描画
            //    表示番組は常に取らないといけないから別メソッドに切り替え
            var $channelInfo = $("#channelInfo");

            $("#program").html("視聴情報  " + program);

            $channelInfo.click(function(){
                // TODO
                // 表示してるチャンネルに合わせて、detailとcookingを切り替え
                var locationStr = 'program_detail.html';

                // var locationStr = 'program_cooking.html';
                locationStr = locationStr + "?program=" + encodeURIComponent(program) + "&description=" + encodeURIComponent(description) + "&yahoo=" + encodeURIComponent(yahoo);

                location.href = locationStr;
            });

            var $channelCooking = $("#channelCooking");
            $channelCooking.click(function(){
                location.href = "program_cooking.html";
            });

            var $turnoff = $("#turnOff");
            $turnoff.click(function(){
                chat.server.send('turnoff', 'turnoff');
            });

        };

        this.callback = function (data) {
//          console.log(data);
            json = JSON.stringify(data);
//          alert(json);
        };
    }

    return new CloudPoint();
})();

