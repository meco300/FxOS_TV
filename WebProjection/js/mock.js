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
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.display="none"
                    document.getElementById("aimgfile").style.visibility = 'hidden';                    
                    document.getElementById("ayoutube").style.visibility = 'visible';
                    document.getElementById("ayoutube").style.display=""               
                break;                     
               case 73: /* I */
                    //Aにビデオがつく
                    document.getElementById("ayoutube").style.display="none"
                    document.getElementById("ayoutube").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.display="none"
                    document.getElementById("aimgfile").style.visibility = 'hidden';                    
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

               case 74: /* J */
                    //Aに絵がつく
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("ayoutube").style.display="none"
                    document.getElementById("ayoutube").style.visibility = 'hidden';                    
                    document.getElementById("aimgfile").style.visibility = 'visible';
                    document.getElementById("aimgfile").style.display=""               
                break;  
                    
                    
                    
                case 75: /* K */
                    //BにYoutubeがつく
                    document.getElementById("btv").style.display="none"
                    document.getElementById("btv").style.visibility = 'hidden';
                    document.getElementById("bimgfile").style.display="none"
                    document.getElementById("bimgfile").style.visibility = 'hidden';                    
                    document.getElementById("byoutube").style.visibility = 'visible';
                    document.getElementById("byoutube").style.display=""               
                break;                     
               case 76: /* L */
                    //Bにビデオがつく
                    document.getElementById("byoutube").style.display="none"
                    document.getElementById("byoutube").style.visibility = 'hidden';
                    document.getElementById("bimgfile").style.display="none"
                    document.getElementById("bimgfile").style.visibility = 'hidden';                    
                    document.getElementById("btv").style.visibility = 'visible';
                    document.getElementById("btv").style.display=""               
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

               case 77: /* M */
                    //Bに絵がつく
                    document.getElementById("btv").style.display="none"
                    document.getElementById("btv").style.visibility = 'hidden';
                    document.getElementById("byoutube").style.display="none"
                    document.getElementById("byoutube").style.visibility = 'hidden';                    
                    document.getElementById("bimgfile").style.visibility = 'visible';
                    document.getElementById("bimgfile").style.display=""               
                break;                     
                    
                    
                    




           }

        };
    }
    return new Mock();
})();

window.addEventListener('keydown',　mock.inputKey);

