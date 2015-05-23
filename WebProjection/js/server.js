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
    };
          
      // Start the connection.
    $.connection.hub.start().done(function () {

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