(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.openModal = function() {
        $uibModal.open({
          controller: 'ModalCtrl',
          controllerAs: 'modal',
          templateUrl: '/templates/modal.html'
        });
      };

      this.setActive = function(){
        // Room.SetActive(this.activeroom);
        Room.SetActive(this.room);
      };

      // Room.addRoom = function(roomName) {
      //   rooms.$add(roomName);
      // }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

 // activeRoom,
 //  'activeRoom',
