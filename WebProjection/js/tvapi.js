var stb = (function () {

    function STB() {
        var stb = this;
        this.channelList = [];
        this.currentSource;
        this.stream;
        this.currentProgram;
        
        this.init = function(){
            var tv = window.navigator.tv;  
            if (!tv) {
                console.log('テレビAPIが見つかりません。パーミッションを確認してください');
                return;
            }
            console.log('InitOk');
            
            tv.getTuners().then (
                function onsuccess(tuners) {
                    if (tuners.length == 0) {
                        console.log ('getTuners() fail.');
                        return;
                    }
                    tuners[0].setCurrentSource ('isdb-t').then(
                        function onsuccess() {
                            console.log("for STB");
                            stb.currentSource = tuners[0].currentSource;
                            stb.stream = tuners[0].stream;  // for STB
                            stb.initChannelList();
                        }, 
                        function onerror(error) {
                            console.log ('setCurrentSource() error');
                        });
                }
            );
        };
                
        /*****************************/ 
        /* Api2チャンネルリストを取得する*/
        /*****************************/ 
        this.initChannelList = function(){
                stb.currentSource.getChannels().then(
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
        
        this.setChannel = function( index ){
            if(stb.channelList.length > index){
               var channel_number = stb.channelList[index].number;
               console.log(channel_number);
               stb.currentSource.setCurrentChannel(channel_number).then(
                   function onsucces() {
                       console.log('チャンネルがかわったよ'); 
                       
                       //プログラム情報を取得する
                       stb.channelList[index].getCurrentProgram().then(function onsuccess(program) {
                             
                             stb.currentProgram = program;
                             //
                             stb.send(program);
                          }, function onerror(error) {
                             errlog ('getCurrentProgram() error');
                          });
                   }, function onerror(error) {
                      errlog ('error setCurrentChannel : ' + ch.name + '.');
                   });
                
                
                  var currentChannel = channelList[0];

                  TvTuning(currentChannel);
                    
                  currentChannel.getCurrentProgram().then(function onsuccess(program) {
                       createChannelProgramBanner(currentChannel, program);
                  }, function onerror(error) {
                       errlog ('getCurrentProgram() error');
                  });
                
                
            }else{
               console.log('index overflow');
            }
            
        };
        
        this.display = function(VideoId){
            
            document.getElementById('atv').mozSrcObject = undefined;
            document.getElementById('btv').mozSrcObject = undefined;
            
            video = document.getElementById(VideoId);
            video.mozSrcObject = stb.stream;  // for STB 
        };
        
        this.send = function(program){
            chat = $.connection.chatHub;
            chat.server.send('program', program.title);
            chat.server.send('discription', program.description);
            chat.server.send('keyphrase', program.description);
        }
        
        /*****************************/ 
        /* Api3チャンネル情報を取得する*/
        /*****************************/ 
        this.getChannelInfo = function(){
            return stb.currentProgram;
        };
        /*****************************/ 
        /* Api2チャンネルリストを取得する*/
        /*****************************/ 
        //this.関数名 = function(引数){
            
       // };
        
        
    }
    return new STB();
})();