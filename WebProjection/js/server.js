(function() {
  var chat = $.connection.chatHub;
  var calibration = 'adiv';

  function init() {

    chat.client.addNewMessageToPage = function (name, message) {
        console.log('name:'+name+'　message:'+message);

        //if(name === 'CHANNEL'){
        //  setChannel(message);
        //}
      
      if (name === 'A'){
        calibration = 'adiv';
      }
      if (name === 'B'){
        calibration = 'bdiv';
      }
      if (name === 'MOVE'){
        $('#'+calibration).css('transform', message);
        $('#'+calibration).css('transform-origin', '0 0');
      }
      if (name === '1'){ stb.setChannel(1) };
      if (name === '2'){ stb.setChannel(2) };
      if (name === '3'){ stb.setChannel(3) };
      if (name === '4'){ stb.setChannel(4) };
      if (name === '5'){ stb.setChannel(5) };
      if (name === '6'){ stb.setChannel(6) };
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