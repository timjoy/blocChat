(function() {
    function SetUNModalCtrl($uibModalInstance, SetUN) {


      this.closeModalSuccess = function() {
        // Do stuff ->add the entered username
        // to the appropriate cookie?
        // Do I need to add a key to the this.username
        // argument, as per Angular documentation?
        // $cookies.put(key, value)
        SetUN.addname(this.username);
//
        // Room.addRoom(this.roomName);
        $uibModalInstance.close()
      };

      console.log('SetUNController!!');
    }





      angular
         .module('blocChat')
         .controller('SetUNModalCtrl', ['$uibModalInstance', 'SetUN', SetUNModalCtrl]);
})();
