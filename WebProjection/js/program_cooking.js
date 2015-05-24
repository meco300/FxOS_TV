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
          // serverから現在表示している画面のレシピを取る
          var keywordList = ["ニンジンのポタージュ","ニンジン: 1個","タマネギ: 1/2個","牛乳: 500cc","塩・胡椒: 少々"];

          var $keywordListRoot = $("#recipeWrapper");

            // Keywordのリストを作成
          for (var i=0; i < keywordList.length;i++){
            var $keywordButton = $("<div>").attr('class','keywordListChild');

            if(i==0){
              $keywordButton.attr('class','recipeTitle');
            }

            $keywordButton.html(keywordList[i]);

            // keywordボタンが押されたときはgoogle検索
            $keywordButton.click(function(){
            });

            $keywordListRoot.append($keywordButton);
          }

          var keywordList = ["ニンジン3本: 199円","タマネギ3個: 199円","牛乳: 173円"];

          var $keywordListRoot = $("#sale_infoWrapper");

          for (var i=0; i < keywordList.length;i++){
            var $keywordButton = $("<div>").attr('class','keywordListChild');

            $keywordButton.html(keywordList[i]);

            $keywordListRoot.append($keywordButton);
          }

          $sale_info_area = $('#sale_info_area').click(function(){
              window.open("https://www.google.com/maps/place/35%C2%B042'16.1%22N+139%C2%B046'12.1%22E/@35.70448,139.770024,16z/data=!4m2!3m1!1s0x0:0x0!6m1!1e1?hl=ja", 'new');
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

