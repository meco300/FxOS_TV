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

                  //1
                  document.getElementById("adiv").style.display="none"
                  document.getElementById("bdiv").style.display="none"                                       
                  document.getElementById("cyoutube").style.visibility = 'visible';
                  document.getElementById("cyoutube").style.display=""                 
                  document.getElementById("cdiv").style.display=""  

                    break;
                case 66: /* B */
                  //Aにテレビ表示
                  //document.getElementById("bdiv").style.display="none"
                  document.getElementById("cdiv").style.display="none"      
                  document.getElementById("adiv").style.display="" 
                  document.getElementById("bdiv").style.display=""                                              
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
               case 67: /* C */
                          //aにようつべ

                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""                       
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.display="none"
                    document.getElementById("aimgfile").style.visibility = 'hidden';                    
                    document.getElementById("ayoutube").style.visibility = 'visible';
                    document.getElementById("ayoutube").style.display=""    






               break;
               case 68: /* D */
                          //bにようつべ

                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""                       
                    document.getElementById("btv").style.display="none"
                    document.getElementById("btv").style.visibility = 'hidden';
                    document.getElementById("bimgfile").style.display="none"
                    document.getElementById("bimgfile").style.visibility = 'hidden';                    
                    document.getElementById("byoutube").style.visibility = 'visible';
                    document.getElementById("byoutube").style.display=""    
                break; 

               case 69: /* E */
                break; 


               case 70: /* F */
                break; 


               case 71: /* G */
                break;  

               case 74: /* J */            
                break;  
                    
                    
                    
                case 75: /* K */
                break;                     
               case 76: /* L */

                break;  

               case 77: /* M */    
                break;                     
                    
                    
                    




           }

        };
    }
    return new Mock();
})();

window.addEventListener('keydown',　mock.inputKey);

