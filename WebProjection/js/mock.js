var mock = (function () {
    function Mock() {
        var mock = this;

        this.inputKey = function (event){
            // キーイベントを受け取る
            var key = event.keyCode;
            console.log("Key:"+key);



//tv設定
                  var tv = window.navigator.tv;





            switch(key) {

                case 65: /* A */
                    // TODO initテスト
                    console.log("Init");
                    stb.init();
                    break;
                case 66: /* B */
                    
                    // TODO initテスト
                     var currentSource = null;
                    console.log("getChannelList");
                    var tv = window.navigator.ATV;
                        tv.getTuners().then (
                       
                        function onsuccess(tuners) {
                            if (tuners.length == 0) {
                                console.log ('getTuners() fail.');
                                return;
                            }

                            tuners[0].setCurrentSource ('isdb-t').then(
                                function onsuccess() {
                                    console.log("for STB");
                                   // video.mozSrcObject = tuners[0].stream;  // for STB 


                                    currentSource = tuners[0].currentSource;
                                    stb.getChannelList(currentSource);


                                }, 

                            function onerror(error) {
                                console.log ('setCurrentSource() error');
                            });
                        }
                          );
                    
                    var currentChannel = stb.channelList[1];
                    console.log ('getCHannel :' + stb.channelList);
                    console.log ('getCHannel :' + stb.channelList.length);

                    
                    
                    break;                    
               case 67: /* C */
                        //aのビデオをつける
                        video = document.getElementById('atv');
                      
                        if (!tv) {
                            console ('failed to get tv. check permission.');
                            return;
                        }
                        tv.getTuners().then (function onsuccess(tuners) {
                            if (tuners.length == 0) {
                                console ('getTuners() fail.');
                                return;
                            }
                            tuners[0].setCurrentSource ('isdb-t').then(function onsuccess() {
                                video.mozSrcObject = tuners[0].stream;  // for STB 
                            }, function onerror(error) {
                                console ('setCurrentSource() error');
                            });
                        }, function onerror(error) {
                            console ('getTuners() error.');
                       });             
                                        
               break;
               case 68: /* D */
                        //bのビデオをつける
                         video = document.getElementById('btv');
                      
                        if (!tv) {
                            console ('failed to get tv. check permission.');
                            return;
                        }              
                        tv.getTuners().then (function onsuccess(tuners) {
                            if (tuners.length == 0) {
                                console ('getTuners() fail.');
                                return;
                            }
                            tuners[0].setCurrentSource ('isdb-t').then(function onsuccess() {
                                video.mozSrcObject = tuners[0].stream;  // for STB 
                            }, function onerror(error) {
                                console ('setCurrentSource() error');
                            });
                        }, function onerror(error) {
                            console ('getTuners() error.');
                       });    

                break; 

               case 69: /* E */
                    //aのビデオを消す
                    //document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("atv").style.display="none"
                break; 


               case 70: /* F */
                    //Aにテレビが消えて絵がでる
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.visibility = 'visible';
                    document.getElementById("aimgfile").style.display=""
                    
                break; 


               case 71: /* G */
                   //Aのイメージを消してビデオをつける
                    document.getElementById("aimgfile").style.display="none"
                    document.getElementById("atv").style.visibility = 'visible';
                    document.getElementById("atv").style.display=""
                                        video = document.getElementById('atv');
                      
                        if (!tv) {
                            console ('failed to get tv. check permission.');
                            return;
                        }
                        tv.getTuners().then (function onsuccess(tuners) {
                            if (tuners.length == 0) {
                                console ('getTuners() fail.');
                                return;
                            }
                            tuners[0].setCurrentSource ('isdb-t').then(function onsuccess() {
                                video.mozSrcObject = tuners[0].stream;  // for STB 
                            }, function onerror(error) {
                                console ('setCurrentSource() error');
                            });
                        }, function onerror(error) {
                            console ('getTuners() error.');
                       });       
                break; 
                    
                    
               case 72: /* H */
                    //AにYoutubeがつく
                    
                break;                     
                    
                    
                    
                    
                    
                    
                    




           }

        };
    }
    return new Mock();
})();

window.addEventListener('keydown',　mock.inputKey);

