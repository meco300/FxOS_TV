var server = (function () {

var chat = $.connection.chatHub;
var calibration = 'adiv';

	var selectedType = "";

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

        	// serverから現在のサブ画面の状況を取る
        	var currentSelectedType = "ss"; // ダミー

        	if(currentSelectedType=="none"){
	        	var selectedType = "ss";
        	}else{
	        	var selectedType = currentSelectedType;
        	}

        	// 選択項目の初期表示
			$('.setting_details').each(function(index, element){
				$(element).css('display','none');
    		});
			$('#info').css('display','block');

        	// displayType変更イベント
        	var $setting = $("#displayContentsType");
        	$setting.change(function(){
        		// 一旦全部非表示
        		$('.setting_details').each(function(index, element){
        			$(element).css('display','none');
        		});

        		var typeId = $(this).val();
				$('#' + typeId).css('display','block');
        	});

        	// Setbutton
        	var $setButton = $("#setButton");
        	$setButton.click(function(){
        		// サーバに送る値を作成
        		var name = "";
        		var message = "";

	        	// TVなのかサブなのか
	        	if(location.pathname == "/setting_main.html"){
	        		name = "a";
	        		message = "left";
	        	}else{
	        		name = "b";
	        		message = "right";
	        	}

				name = name + "_" + $("#displayContentsType").val();
				message = message + "_" + $("#displayContentsType").text();

        		// serverに設定値を投げる
				// Start the connection.

                // インフォの場合のコマンドが変わったので
                if(name=="b_info"){
                    name = "weather";
                }
                
                chat.server.send(name, message);

        		// TOPに戻る
                location.href = 'index.html';
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

