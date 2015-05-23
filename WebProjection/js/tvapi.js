var stb = (function () {

    function STB() {
        var stb = this;

        this.channelList = [];
        this.init = function(){
            var tv = window.navigator.tv;  
            if (!tv) {
                console.log('テレビAPIが見つかりません。パーミッションを確認してください');
                return;
            }
            console.log('InitOk');
        };
        
        //ここに関数追加☆★☆
        /*
        this.関数名 = function(引数){
            
        };
        */
        
        /*****************************/ 
        /* Api2チャンネルリストを取得する*/
        /*****************************/ 
        this.getChannelList = function(currentSource){

                currentSource.getChannels().then(
                        function onsuccess(channels) {

                            if (channels.length == 0) {
                                console.log ('Service Not Found.');
                            } 
                            else {            
                                //新たなチャンネルをチャンネルリストに登録します。生成したチャンネルリストに同一のtransportStreamIdがあればスキップします。
                              channels.forEach (
                                  function (ch) { 
                                    if (stb.channelList.some(function (e) {
                                       return ((e.transportStreamId == ch.transportStreamId) || (e.number == ch.number))
                                    })) 
                                    {
                                      return;
                                    }
                                    //console.log ('ch %d',ch);
                                    stb.channelList.push (ch);
                              }); 
                            }
                            //console.log ('getCHannel %d',channelList);
                     },
                    function onerror(error) {
                        console.log('getChannels() error');
                    });
        }
        /*****************************/ 
        /* Api3チャンネル情報を取得する*/
        /*****************************/ 
        this.getChannelInfo = function(引数){
            
        };
        /*****************************/ 
        /* Api2チャンネルリストを取得する*/
        /*****************************/ 
        //this.関数名 = function(引数){
            
       // };
        
        
    }
    return new STB();
})();