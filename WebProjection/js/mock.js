var mock = (function () {
    function Mock() {
        var mock = this;

        this.inputKey = function (event){
            // キーイベントを受け取る
            var key = event.keyCode;
            console.log("Key:"+key);
            
            switch(key) {

                case 65: /* A */
                    // TODO initテスト
                    console.log("Init");
                    stb.init();
                    break;
                case 66: /* B */
                    // TODO initテスト
                    
                    break;                    
               case 67: /* C */
                    //aのビデオをつける
                    stb.display('atv');
               break;
               case 68: /* D */
                    //bのビデオをつける
                    stb.display('btv');
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
                    stb.display('atv');
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
                    stb.display('atv');
                    
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
                    stb.display('btv');

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

