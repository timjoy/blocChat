(function() {
    function ModalCtrl($uibModalInstance, Room) {
      this.closeModalSuccess = function() {
        // Do stuff ->Somehow, make the new added
        // room a member of the Room{}array
        // in Room.js

        // console.log('Room name is ' + this.roomName);
        // call Room.addRoom and pass it this.roomName
        Room.addRoom(this.roomName);
        $uibModalInstance.close()
      };

      this.closeModalCancel = function() {
        // Do nothing, just close
        $uibModalInstance.close()
      };
      console.log('hey there!!');





    };
      angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
// inject room service into line 25 .controller
// add to the room service a function that adds a room
