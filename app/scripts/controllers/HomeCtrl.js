(function() {
    function HomeCtrl(Room, ActiveRoom, $uibModal) {
      this.rooms = Room.all;

      this.activeRoom = room;

      this.openModal = function() {
        $uibModal.open({
          controller: 'ModalCtrl',
          controllerAs: 'modal',
          templateUrl: '/templates/modal.html'
        });
      };


      // Room.addRoom = function(roomName) {
      //   rooms.$add(roomName);
      // }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'ActiveRoom', '$uibModal', HomeCtrl]);
})();

 // activeRoom,
 //  'activeRoom',
