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
        Message.getByRoomId(room);
      };

      this.message = Message;

      this.getByRoomId = function(room){
        Message.getByRoomId(room);
      };

      this.openMessModal = function() {
        console.log("create and send message!!")
        $uibModal.open({
          controller: 'MessModalCtrl',
          controllerAs: 'messmodal',
          templateUrl: '/templates/messmodal.html'
        });
      };



    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message',  '$uibModal', HomeCtrl]);
})();

 // activeRoom,
 //  'activeRoom',
