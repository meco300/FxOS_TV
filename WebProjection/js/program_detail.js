var server = (function () {

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
          // 現在表示している画面の情報を表示

          // クエリストリングから情報取得
          var result = GetQueryString();

          $("#program_title").html(result.program);
          $("#program_description").html(result.description);

          var keywordJson = JSON.parse(result.yahoo);
          var keywordList = [];

          // キーワードのリストを配列に追加
          for(var count in keywordJson){
              keywordList.push(count);
          }

          var $keywordListRoot = $("#keywordList");

            // Keywordのリストを作成
          for (var i=0; i < keywordList.length;i++){
            var $keywordButton = $("<div>").attr('class','keywordListChild');
            var $magnify_glass = $('<img src="images/magnify_glass.png">').css('margin-right','10px');
            var $span = $('<span>');
            $keywordButton.append($magnify_glass);
            $keywordButton.append($span.html(keywordList[i]));

            // keywordボタンが押されたときはgoogle検索
            $keywordButton.click(function(){
              // google検索
              // TODO ブラウザ連携どうするの
                  window.open('https://www.google.co.jp/search?q=' + encodeURIComponent($(this).children('span').html()), 'new');
            });

            $keywordListRoot.append($keywordButton);
          }

        };

        function GetQueryString()
        {
            var result = {};
            if( 1 < window.location.search.length )
            {
                // 最初の1文字 (?記号) を除いた文字列を取得する
                var query = window.location.search.substring( 1 );

                // クエリの区切り記号 (&) で文字列を配列に分割する
                var parameters = query.split( '&' );

                for( var i = 0; i < parameters.length; i++ )
                {
                    // パラメータ名とパラメータ値に分割する
                    var element = parameters[ i ].split( '=' );

                    var paramName = decodeURIComponent( element[ 0 ] );
                    var paramValue = decodeURIComponent( element[ 1 ] );

                    // パラメータ名をキーとして連想配列に追加する
                    result[ paramName ] = paramValue;
                }
            }
            return result;
        }

        this.callback = function (data) {
//          console.log(data);
            json = JSON.stringify(data);
//          alert(json);
        };
    }

    return new CloudPoint();
})();

