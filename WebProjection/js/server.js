(function() {
  var chat = $.connection.chatHub;
  var calibration = 'adiv';

  function init() {

    chat.client.addNewMessageToPage = function (name, message) {
        console.log('name:'+name+'　message:'+message);

        //if(name === 'CHANNEL'){
        //  setChannel(message);
        //}
      if (name === 'a_info'){

      }
      if (name === 'b_info'){
      }  
      if (name === 'a_movie'){
                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""                       
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.display="none"
                    document.getElementById("aimgfile").style.visibility = 'hidden';                    
                    document.getElementById("ayoutube").style.visibility = 'visible';
                    document.getElementById("ayoutube").style.display=""    
      }      
      if (name === 'b_movie'){
                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""                       
                    document.getElementById("btv").style.display="none"
                    document.getElementById("btv").style.visibility = 'hidden';
                    document.getElementById("bimgfile").style.display="none"
                    document.getElementById("bimgfile").style.visibility = 'hidden';                    
                    document.getElementById("byoutube").style.visibility = 'visible';
                    document.getElementById("byoutube").style.display=""  

      }         
      if (name === 'a_picture'){
                    //aに絵
                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""  
                    document.getElementById("atv").style.display="none"
                    document.getElementById("atv").style.visibility = 'hidden';
                    document.getElementById("ayoutube").style.display="none"
                    document.getElementById("ayoutube").style.visibility = 'hidden';
                    document.getElementById("aimgfile").style.visibility = 'visible';
                    document.getElementById("aimgfile").style.display=""

      }      
      if (name === 'b_picture'){
                    //bに絵
                    document.getElementById("cdiv").style.display="none"      
                    document.getElementById("adiv").style.display="" 
                    document.getElementById("bdiv").style.display=""  
                    document.getElementById("btv").style.display="none"
                    document.getElementById("btv").style.visibility = 'hidden';
                    document.getElementById("byoutube").style.display="none"
                    document.getElementById("byoutube").style.visibility = 'hidden';
                    document.getElementById("bimgfile").style.visibility = 'visible';
                    document.getElementById("bimgfile").style.display=""

      }
      
      if (name === '1'){ stb.setChannel(1) };
      if (name === '2'){ stb.setChannel(2) };
      if (name === '3'){ stb.setChannel(3) };
      if (name === '4'){ stb.setChannel(4) };
      if (name === '5'){ stb.setChannel(5) };
      if (name === '6'){ stb.setChannel(6) };
      
      if (name === '1' || name === '2' || name === '3' || name === '4' || name === '5' || name === '6' ){
        
        stb.display('ctv');
        document.getElementById("adiv").style.display="none"
        document.getElementById("bdiv").style.display="none"                                       
        document.getElementById("ctv").style.visibility = 'visible';
        document.getElementById("ctv").style.display="";                                      
        document.getElementById("cyoutube").style.visibility = 'hidden';
        document.getElementById("cyoutube").style.display="none";   
        document.getElementById("cdiv").style.display=""  

        /*
          stb.display('atv');
          document.getElementById("cdiv").style.display="none"      
          document.getElementById("adiv").style.display="" 
          document.getElementById("bdiv").style.display=""   
          document.getElementById("atv").style.visibility = 'visible';                    
          document.getElementById("atv").style.display=''
          document.getElementById("aimgfile").style.visibility = 'hidden';
          document.getElementById("aimgfile").style.display="none"                    
          document.getElementById("ayoutube").style.visibility = 'hidden';
          document.getElementById("ayoutube").style.display="none"
          */
      }       
      if (name === 'turnoff'){
                  document.getElementById("adiv").style.display="none"
                  document.getElementById("bdiv").style.display="none"                                       
                  document.getElementById("cyoutube").style.visibility = 'visible';
                  document.getElementById("cyoutube").style.display=""                 
                  document.getElementById("cdiv").style.display=""  

      }   

      if (name === 'A'){
        calibration = 'bdiv';
      }

      if (name === 'B'){
        calibration = 'bdiv';
      }
      if (name === 'MOVE'){
        $('#'+calibration).css('transform', message);
        $('#'+calibration).css('transform-origin', '0 0');
      }
    };
          
      // Start the connection.
    $.connection.hub.start().done(function () {
        stb.init();
        //　サーバへのメッセージ送信ロジック
        $('#sendmessage').click(function () {
          // Call the Send method on the hub.
          chat.server.send('STB', $('#message').val());
          // Clear text box and reset focus for next comment.
          $('#message').val('').focus();
        });
      });
  }
    
  window.addEventListener('DOMContentLoaded', init, false);
})();