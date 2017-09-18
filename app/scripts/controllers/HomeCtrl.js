(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;

      this.room = Room;



      this.openModal = function() {
        $uibModal.open({
          controller: 'ModalCtrl',
          controllerAs: 'modal',
          templateUrl: '/templates/modal.html'
        });
      };

      this.setActive = function(room){
        // Room.SetActive(this.activeroom);
        Room.SetActive(room);
      };

      this.message = Message;

      this.getByRoomId = function(room){
        Message.GetByRoomId(room);
      }




      // Room.addRoom = function(roomName) {
      //   rooms.$add(roomName);
      // }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message',  '$uibModal', HomeCtrl]);
})();

 // activeRoom,
 //  'activeRoom',
