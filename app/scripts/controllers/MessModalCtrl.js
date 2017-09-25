(function() {
    function MessModalCtrl($uibModalInstance, Message, Room) {
      this.closeModalSuccess = function() {
        // Message.addMessage(this.newmessage);
        // $cookies.get(newmessage.roomId);
        // console.log(newmessage.roomId);
        // console.log(roomId);
        // Message.getByRoomId(newmessage);
        Message.send(this.newMessage);
        console.log("you hit ok!!");
        


        // Message.getByRoomId(this.message);
        $uibModalInstance.close()
      };

      this.closeModalCancel = function() {
        // Do nothing, just close
        $uibModalInstance.close()
        console.log("you hit cancel!!");
      };






    };
      angular
         .module('blocChat')
         .controller('MessModalCtrl', ['$uibModalInstance', 'Message', 'Room', MessModalCtrl]);
})();
