(function() {
    function SetUNModalCtrl($uibModalInstance, $cookies) {

      // this.setUNModal = SetUN;

      // username = null;

      this.closeModalSuccess = function() {
        // Do stuff ->add the entered username
        // to the appropriate cookie?
        // Do I need to add a key to the this.username
        // argument, as per Angular documentation?
        // $cookies.put(key, value)
        console.log(this.username);
        // The following if statement is to prevent
        // the user from being allowed to enter
        // no name or empty space.
        if(this.username){
          $cookies.put("username", this.username);
          // username = CurrentUser;
          // console.log("$cookies.get(CurrentUser)", $cookies.get(CurrentUser));
          $uibModalInstance.close();
        }
      };

      

      console.log('SetUNController!!');
    }





      angular
         .module('blocChat')
         .controller('SetUNModalCtrl', ['$uibModalInstance', '$cookies', SetUNModalCtrl]);
})();
