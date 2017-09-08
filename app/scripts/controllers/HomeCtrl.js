(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      this.openModal = function() {
        $uibModal.open({
          controller: 'HomeCtrl',
          controllerAs: 'home',
          templateUrl: '/templates/modal.html'
        });
      };
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
