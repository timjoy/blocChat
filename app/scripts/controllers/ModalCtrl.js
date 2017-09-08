(function() {
    function ModalCtrl(Modal, $uibModalInstance) {
      this.closeModalSuccess = function() {
        // Do stuff ->Somehow, make the new added
        // room a member of the Room{}array
        // in Room.js
        var data = 'Data to optionally pass on'
        $uibModalInstance.close(data)
      };

      this.closeModalCancel = function() {
        // Do nothing, just close
        $uibModalInstance.close()
      };





    };
      angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
