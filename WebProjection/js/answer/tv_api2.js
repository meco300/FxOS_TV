/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
   /* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

var video;


var channelList = [];
var currentSource = null;


//videoタグとtuner入力を繋いで出画します。
window.onload = function() {
    var tv = window.navigator.tv;
    video = document.getElementById('tv');

    if (!tv) {
        errlog ('failed to get tv. check permission.');
        return;
    }
    //sourceはisdb-t （地上デジタル放送）を指定します。
    tv.getTuners().then (
        function onsuccess(tuners) {
            if (tuners.length == 0) {
                errlog ('getTuners() fail.');
                return;
            }
            tuners[0].setCurrentSource ('isdb-t').then(
                function onsuccess() {
                    video.mozSrcObject = tuners[0].stream;  // for STB 

                    //getChannels( )でチャンネルデータを取得します。
                    currentSource = tuners[0].currentSource;
                    currentSource.getChannels().then(
                        function onsuccess(channels) {

                            if (channels.length == 0) {
                                addBanner ('Service Not Found.');
                            } 
                            else {            
                                //新たなチャンネルをチャンネルリストに登録します。生成したチャンネルリストに同一のtransportStreamIdがあればスキップします。
                              channels.forEach (
                                  function (ch) { 
                                    if (channelList.some(function (e) {
                                       return ((e.transportStreamId == ch.transportStreamId) || (e.number == ch.number))
                                    })) 
                                    {
                                      return;
                                    }
                                    channelList.push (ch);
                              }); 
                              //チャンネルリストの2番目のチャンネルを初期選局します
                              var currentChannel = channelList[1];

                              TvTuning(currentChannel);
                            }  
                    },
                    function onerror(error) {
                        errlog ('getChannels() error');
                    });
            }, 
    
            function onerror(error) {
                errlog ('setCurrentSource() error');
            });
    }, 
    
    function onerror(error) {
        errlog ('getTuners() error.');
   });
};
